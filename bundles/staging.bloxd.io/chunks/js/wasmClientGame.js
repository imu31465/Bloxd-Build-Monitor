export const id = 54;
export const ids = [54];
export const modules = {
  41922: (vv, zv, Pv) => {
    var hv = {
      "./bedwars/bedwarsClient": [38755, 9],
      "./bridgeBattle/bridgeBattleClient": [38764, 10],
      "./buildAFactory2/buildAFactory2Client": [38015, 73, 72, 71, 220, 237, 11],
      "./classic/classicClient": [38768, 12],
      "./clutch/clutchClient": [38770, 13],
      "./containmentBreach/containmentBreachClient": [38776, 14],
      "./cooking/cookingClient": [38877, 15],
      "./defusal/defusalClient": [38884, 16],
      "./frontline/frontlineClient": [38891, 73, 72, 71, 17],
      "./goalRush/goalRushClient": [38900, 18],
      "./luckyBedwars/luckyBedwarsClient": [38905, 19],
      "./ninetyNineNights/ninetyNineNightsClient": [38912, 20],
      "./oneBlock/oneBlockClient": [38914, 21],
      "./plots/plotsClient": [38919, 236, 240, 22],
      "./pvpCiv/pvpCivClient": [38994, 23],
      "./skyIslands/skyIslandsClient": [39002, 24],
      "./skyblock/skyblockClient": [38060, 73, 220, 190, 25],
      "./tsunami/tsunamiClient": [39005, 26]
    };

    function Sv(vv) {
      if (!Pv.o(hv, vv)) return Promise.resolve().then((() => {
        var zv = new Error("Cannot find module '" + vv + "'");
        throw zv.code = "MODULE_NOT_FOUND", zv
      }));
      var zv = hv[vv],
        Sv = zv[0];
      return Promise.all(zv.slice(1).map(Pv.e)).then((() => Pv(Sv)))
    }
    Sv.keys = () => Object.keys(hv), Sv.id = 41922, vv.exports = Sv
  },
  38511: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => ev,
      e: () => Sv
    });
    var hv = Pv(26);

    function Sv(vv) {
      return "refetchCode" === vv || "devDownloadJson" === vv || vv.startsWith("Plugin")
    }

    function ev(vv, zv) {
      "refetchCode" !== vv ? "Plugin|MobAiPlugin|ShowPetUi" !== vv ? Promise.all([Pv.e(106), Pv.e(107), Pv.e(102), Pv.e(104), Pv.e(210)]).then((() => Pv(41044))).then((Pv => {
        let {
          runClientGameMessage: hv
        } = Pv;
        hv(vv, zv)
      })).catch((zv => {
        console.error(`Game message ${vv} failed`, zv)
      })) : hv.j.zC("showPetUi", zv) : hv.j.zC("refetchCode")
    }
  },
  41899: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => hv,
      c: () => Sv
    });
    const hv = ["recording", "freecam", "keyframe"];

    function Sv() {
      const vv = crypto.getRandomValues(new Uint32Array(2));
      return BigInt(vv[1]) << 32n | BigInt(vv[0])
    }
  },
  40102: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => pv
    });
    const hv = 1 << 20,
      Sv = 1 << 21,
      ev = 1024,
      gv = 2048;

    function pv(vv, zv, Pv) {
      const pv = vv + hv,
        dv = zv + ev,
        Nv = Pv + hv;
      return pv < 0 || pv >= Sv || Nv < 0 || Nv >= Sv || dv < 0 || dv >= gv ? -1 : (pv * Sv + Nv) * gv + dv
    }
  },
  40096: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => hv,
      h: () => gv,
      i: () => Sv,
      j: () => ev,
      n: () => lv,
      p: () => Nv,
      r: () => dv,
      s: () => pv
    });
    Pv(3205);
    Pv(40102);

    function hv(vv) {}

    function Sv(vv) {}

    function ev(vv) {}

    function gv(vv) {}

    function pv(vv) {}

    function dv(vv, zv, Pv) {}

    function Nv(vv) {}

    function lv(vv) {}
  },
  8909: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => pv,
      f: () => dv
    });
    var hv = Pv(22);
    const Sv = 24,
      ev = "farNametags",
      gv = 1e5;

    function pv() {
      var vv;
      return null === (vv = hv.c.get("showDistantNametags")) || void 0 === vv || vv
    }

    function dv() {
      var vv;
      return null !== (vv = function() {
        const vv = new URLSearchParams(window.location.search).get(ev),
          zv = null === vv || "" === vv ? NaN : Number(vv);
        return Number.isFinite(zv) && zv >= 0 ? Math.min(zv, gv) : null
      }()) && void 0 !== vv ? vv : pv() ? 0 : Sv
    }
  },
  41893: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      blockIdOf: () => Qd.b,
      clearWasmCameraScreen: () => zS,
      creativeItemIds: () => Ph.creativeItemIds,
      decodeMapSettings: () => Ld,
      drainTextRerasters: () => xp.e,
      enchantmentPerksOf: () => Ph.enchantmentPerksOf,
      endGameHost: () => Xd,
      followCursorAim: () => Ad,
      followMenuPrefs: () => kS,
      loadAudio: () => Ed,
      loadClientGame: () => Jd,
      loadTextIcons: () => xp.f,
      rasterText: () => Rp.b,
      readBoardToEdit: () => Id,
      readDrawCensus: () => Hd.c,
      setTextHost: () => xp.k,
      setTextLocalPlayer: () => xp.l,
      showInCreativeInvenOf: () => Ph.showInCreativeInvenOf,
      startGameHost: () => kd,
      startShellAnalytics: () => xd,
      startSkyFeed: () => zd,
      textChanged: () => xp.q,
      warmText: () => Rp.f,
      wasmCameraScreen: () => vS
    });
    Pv(36041);
    var hv = Pv(22),
      Sv = Pv(36329),
      ev = Pv(38671),
      gv = Pv(26),
      pv = Pv(3142),
      dv = Pv(36323),
      Nv = Pv(1272),
      lv = Pv(609),
      Tv = Pv(37764),
      Wv = Pv(4535),
      wv = Pv(39956),
      av = Pv(39889);
    const sv = av.Kb / 4,
      Cv = av.o.PlaySound,
      iv = av.o.SoundReset,
      cv = Wv.$.ReplayFailed,
      Gv = Wv.$.RecorderEvent;
    class mv {
      constructor(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.core = vv, this.memory = zv, this.audio = Pv, this.serverIds = new Int32Array(256).fill(av.ad), this.kinds = new Uint16Array(256), this.idStr = new Array(256).fill(null), this.indexById = new Map, this.queries = void 0, this.buffer = null, this.viewPtr = -1, this.view = new DataView(new ArrayBuffer(av.t.BYTES)), this.renderPtr = 0, this.GT = 0, this.renderCapacity = 0, this.render = new Float32Array(0), this.visPtr = 0, this.vis = new Uint8Array(0), this.renderBuffer = null, this.eventsBuffer = null, this.eventsPtr = 0, this.eventsLen = 0, this.events = new DataView(new ArrayBuffer(0)), this.audioView = null, this.scratchPtr = -1, this.corruption = null, this.replay = null, this.queries = new av.V(vv, (() => {
          this.scratchPtr = -1, this.ensureViews()
        }))
      }
      scratch() {
        return this.scratchPtr < 0 && (this.scratchPtr = this.core.ahv(), this.ensureViews()), this.scratchPtr
      }
      eventBytes(vv, zv) {
        const Pv = this.eventView();
        return new Uint8Array(Pv.buffer, Pv.byteOffset + vv, zv)
      }
      get apiView() {
        return this.ensureViews(), this.view
      }
      ensureViews() {
        this.memory().buffer !== this.buffer && this.reView()
      }
      get localId() {
        return av.t.localId(this.apiView, 0)
      }
      localDeaths() {
        return av.t.localDeaths(this.apiView, 0)
      }
      rereadDirectory() {
        const vv = this.apiView,
          zv = av.t.entRenderPtr(vv, 0),
          Pv = av.t.entVisPtr(vv, 0),
          hv = av.t.entCapacity(vv, 0);
        if (zv !== this.renderPtr || Pv !== this.visPtr || hv !== this.GT || this.renderBuffer !== this.buffer) {
          this.renderPtr = zv, this.visPtr = Pv, this.GT = hv, this.renderBuffer = this.buffer;
          const vv = this.memoryView(Float32Array, zv, hv * sv, "the render array"),
            Sv = this.memoryView(Uint8Array, Pv, hv, "the visibility array");
          this.renderCapacity = vv && Sv ? hv : 0, this.render = vv && Sv ? vv : new Float32Array(0), this.vis = vv && Sv ? Sv : new Uint8Array(0)
        }
      }
      memoryView(vv, zv, Pv, hv) {
        try {
          return (0, wv.u)(vv, this.memory().buffer, zv, Pv, hv)
        } catch (Sv) {
          return this.keepCorruption(Sv), null
        }
      }
      memoryData(vv, zv, Pv, hv) {
        try {
          return (0, wv.e)(this.memory().buffer, vv, zv, Pv, hv)
        } catch (Sv) {
          return this.keepCorruption(Sv), null
        }
      }
      reportCorruption(vv) {
        this.keepCorruption(new wv.c(vv))
      }
      keepCorruption(vv) {
        if (!(vv instanceof wv.c)) throw vv;
        this.corruption ??= vv
      }
      throwCorruption() {
        if (this.corruption) throw this.corruption
      }
      walk(vv, zv, Pv) {
        this.rereadDirectory(), this.throwCorruption();
        const {
          ptr: hv,
          len: Sv
        } = vv;
        this.eventsPtr = hv, this.eventsLen = Sv, this.eventsBuffer = null;
        const ev = this.eventView();
        for (let Nv = 0; Nv < Sv;) {
          const vv = ev.getUint32(Nv, !0),
            Pv = 65535 & vv,
            hv = vv >>> 16,
            Sv = Nv + Wv.Y;
          if (Pv === av.o.EntitySpawned) {
            var gv;
            if (hv !== av.Rb.BYTES) throw nv(Pv, Nv, hv);
            const vv = av.Rb.serverId(ev, Sv);
            this.spawned(vv, av.Rb.index(ev, Sv), av.Rb.kind(ev, Sv)), null === (gv = zv.entityAdded) || void 0 === gv || gv.call(zv, vv)
          } else if ((Pv === av.o.ChunkSlot || Pv === av.o.EntityInfoChanged) && !(0, av.me)(Pv, ev, Sv, hv, zv)) throw nv(Pv, Nv, hv);
          Nv = Sv + (0, Wv.Le)(hv)
        }
        try {
          var pv;
          null === (pv = zv.afterPrescan) || void 0 === pv || pv.call(zv), this.throwCorruption(), !Pv() && this.dispatch(vv, zv, Pv) && (this.throwCorruption(), this.applyListener(), zv.afterWalk(vv.kind)), this.throwCorruption()
        } catch (dv) {
          throw dv instanceof wv.c && (this.corruption ??= dv), dv
        } finally {
          Pv() || null !== this.corruption || this.applyDespawns(Sv, zv)
        }
      }
      applyDespawns(vv, zv) {
        const Pv = this.eventView();
        for (let Sv = 0; Sv < vv;) {
          const vv = Pv.getUint32(Sv, !0),
            ev = Sv + Wv.Y;
          if ((65535 & vv) === av.o.EntityDespawned && vv >>> 16 === av.Rb.BYTES) {
            const vv = av.Rb.serverId(Pv, ev);
            var hv;
            if (this.despawned(vv, av.Rb.index(Pv, ev))) null === (hv = zv.entityRemoved) || void 0 === hv || hv.call(zv, vv)
          }
          Sv = ev + (0, Wv.Le)(vv >>> 16)
        }
        this.rereadDirectory()
      }
      dispatch(vv, zv, Pv) {
        const {
          len: hv,
          net: Sv,
          netOffsets: ev
        } = vv;
        let gv = this.eventView(),
          pv = 0;
        for (let fv = 0; fv < hv;) {
          const vv = gv.getUint32(fv, !0),
            hv = 65535 & vv,
            Fv = vv >>> 16,
            Ov = fv + Wv.Y;
          let Dv = !1;
          if (pv < Sv.length && ev[pv] === fv) zv.netEvent(Sv[pv]), pv++, Dv = !0;
          else if (hv === Wv.$.LocalPlayerBound) {
            var dv;
            if (Fv !== Wv.Lb) throw nv(hv, fv, Fv);
            null === (dv = zv.localPlayerBound) || void 0 === dv || dv.call(zv, gv.getInt32(Ov, !0)), Dv = !0
          } else if (hv === Wv.$.LocalHurt) {
            var Nv;
            if (Fv !== Wv.Ib) throw nv(hv, fv, Fv);
            null === (Nv = zv.localHurt) || void 0 === Nv || Nv.call(zv, gv.getInt32(Ov, !0), gv.getFloat32(Ov + 4, !0), gv.getUint32(Ov + 8, !0)), Dv = !0
          } else if (hv === Wv.$.AttackHit) {
            var lv;
            if (Fv !== Wv.e) throw nv(hv, fv, Fv);
            const vv = gv.getFloat32(Ov, !0),
              Pv = gv.getFloat32(Ov + 4, !0),
              Sv = gv.getFloat32(Ov + 8, !0),
              ev = gv.getUint32(Ov + 12, !0);
            null === (lv = zv.attackHit) || void 0 === lv || lv.call(zv, vv, Pv, Sv, 0 !== (ev & Wv.n.Crit), 0 !== (ev & Wv.n.HitSelf))
          } else if (hv === Wv.$.PhysicsType) {
            var Tv;
            if (Fv !== Wv.kc) throw nv(hv, fv, Fv);
            null === (Tv = zv.physicsType) || void 0 === Tv || Tv.call(zv, gv.getUint32(Ov, !0), gv.getInt32(Ov + 4, !0)), Dv = !0
          } else if (hv === Wv.$.VehicleEffect) {
            var wv;
            const vv = Yv(gv, Ov, Fv);
            if (null === vv) throw nv(hv, fv, Fv);
            null === (wv = zv.vehicleEffect) || void 0 === wv || wv.call(zv, vv.op, vv.name, vv.icon, vv.level, vv.durationMs), Dv = !0
          } else if (hv === Wv.$.ZoomChanged) {
            var sv;
            if (Fv !== Wv.ne) throw nv(hv, fv, Fv);
            null === (sv = zv.zoomChanged) || void 0 === sv || sv.call(zv, gv.getFloat32(Ov, !0), gv.getUint8(Ov + 4)), Dv = !0
          } else if (hv === Wv.$.ZoomDisabled) {
            var mv;
            if (0 !== Fv) throw nv(hv, fv, Fv);
            null === (mv = zv.zoomDisabled) || void 0 === mv || mv.call(zv), Dv = !0
          } else if (hv === Wv.$.GameCamera) {
            var jv;
            null === (jv = zv.gameCamera) || void 0 === jv || jv.call(zv, new Uint8Array(gv.buffer, gv.byteOffset + Ov, Fv).slice()), Dv = !0
          } else if (hv === av.o.ChunkSlot || hv === av.o.EntityInfoChanged);
          else if (hv >= Cv && hv <= iv) {
            if (this.audio && !this.audio.onAudioEvent(hv, gv, Ov, Fv)) throw nv(hv, fv, Fv)
          } else if (hv >= cv && hv <= Gv) {
            if (this.replay) {
              if (!this.replay.onReplayEvent(hv, gv, Ov, Fv)) throw nv(hv, fv, Fv);
              Dv = !0
            }
          } else if (hv >= av.qd && hv <= av.td && hv !== Wv.$.EnvLighting) {
            if (!(0, av.me)(hv, gv, Ov, Fv, zv)) throw nv(hv, fv, Fv);
            Dv = !0
          }
          if (Dv) {
            if (Pv()) return !1;
            gv = this.eventView()
          }
          fv = Ov + (0, Wv.Le)(Fv)
        }
        return !Pv()
      }
      applyListener() {
        var vv;
        if (!this.audio) return;
        const zv = av.t.audioViewPtr(this.apiView, 0),
          Pv = this.memory().buffer;
        let hv = this.audioView;
        (null === (vv = hv) || void 0 === vv ? void 0 : vv.buffer) === Pv && hv.byteOffset === zv || (hv = (0, wv.e)(Pv, zv, av.v.BYTES, 8, "the audio view"), this.audioView = hv), hv && this.audio.applyListener(hv)
      }
      indexOf(vv) {
        return this.indexById.get("number" === typeof vv ? vv : +vv)
      }
      isLocal(vv) {
        return vv !== av.ad && vv === av.t.localId(this.apiView, 0)
      }
      yG(vv) {
        const zv = [0, 0, 0];
        return this.readPosition("number" === typeof vv ? vv : +vv, zv) ? zv : null
      }
      readPosition(vv, zv) {
        const Pv = this.apiView;
        if (void 0 !== this.indexById.get(vv) && this.isLocal(vv)) {
          for (let vv = 0; vv < 3; vv++) zv[vv] = av.t.localPos(Pv, 0, vv);
          return !0
        }
        return this.readDrawnPosition(vv, zv)
      }
      readDrawnPosition(vv, zv) {
        const Pv = this.apiView,
          hv = this.indexById.get(vv);
        if (void 0 === hv || hv >= this.renderCapacity) return zv[0] = zv[1] = zv[2] = NaN, !1;
        const Sv = hv * sv;
        for (let ev = 0; ev < 3; ev++) zv[ev] = this.render[Sv + ev] + av.t.origin(Pv, 0, ev);
        return !0
      }
      checkValid(vv) {
        return void 0 !== this.indexOf(vv)
      }
      isAlive(vv) {
        const zv = this.indexOf(vv);
        if (void 0 === zv) return null;
        if (this.ensureViews(), zv >= this.renderCapacity) return null;
        const Pv = this.vis[zv];
        return 0 === Pv ? null : 0 !== (Pv & av.je.Alive)
      }
      getEntityType(vv) {
        const zv = this.indexOf(vv);
        return void 0 === zv ? this.isLocal("number" === typeof vv ? vv : +vv) ? "Player" : null : fv(this.kinds[zv])
      }
      spawned(vv, zv, Pv) {
        if (zv >= 1048576) throw new wv.c(`entity ${vv} spawned at index ${zv}`);
        this.ensureIndex(zv), this.serverIds[zv] === vv && null !== this.idStr[zv] || (this.idStr[zv] = String(vv)), this.serverIds[zv] = vv, this.kinds[zv] = Pv, this.indexById.set(vv, zv)
      }
      despawned(vv, zv) {
        let Pv = !1;
        return this.indexById.get(vv) === zv && (this.indexById.delete(vv), Pv = !0), zv < this.serverIds.length && this.serverIds[zv] === vv && (this.serverIds[zv] = av.ad, this.kinds[zv] = 0, this.idStr[zv] = null), Pv
      }
      ensureIndex(vv) {
        const zv = this.serverIds.length;
        if (vv < zv) return;
        let Pv = 2 * zv;
        for (; Pv <= vv;) Pv *= 2;
        const hv = new Int32Array(Pv).fill(av.ad);
        hv.set(this.serverIds), this.serverIds = hv;
        const Sv = new Uint16Array(Pv);
        Sv.set(this.kinds), this.kinds = Sv;
        for (let ev = zv; ev < Pv; ev++) this.idStr.push(null)
      }
      eventView() {
        const vv = this.memory().buffer;
        return vv !== this.eventsBuffer && (this.eventsBuffer = vv, this.events = new DataView(vv, this.eventsPtr, this.eventsLen)), this.events
      }
      reView() {
        const vv = this.memory().buffer;
        this.buffer = vv, this.viewPtr < 0 && (this.viewPtr = this.core.shv()), this.view = new DataView(vv, this.viewPtr, av.t.BYTES), this.rereadDirectory()
      }
    }

    function jv(vv) {
      return vv >>> av.b === av.s.Item
    }

    function fv(vv) {
      var zv, Pv;
      const hv = vv & av.c;
      switch (vv >>> av.b) {
        case av.s.Lifeform:
          return null !== (zv = lv.i[hv]) && void 0 !== zv ? zv : null;
        case av.s.Throwable:
          return null !== (Pv = Tv.l[hv]) && void 0 !== Pv ? Pv : null;
        case av.s.Mesh:
          return "Mesh";
        case av.s.Audio:
          return "AudioEntity";
        case av.s.Item:
          return "Item";
        default:
          return null
      }
    }
    const Fv = new TextDecoder;

    function Yv(vv, zv, Pv) {
      if (Pv < Wv.Td.HEAD_BYTES) return null;
      const hv = vv.getUint32(zv, !0),
        Sv = vv.getUint32(zv + 20, !0),
        ev = vv.getUint32(zv + 24, !0),
        gv = Wv.Td.HEAD_BYTES + (0, Wv.Le)(Sv);
      if (hv !== Wv.Td.UPDATE && hv !== Wv.Td.REMOVE || Sv > Pv || gv + ev > Pv) return null;
      const pv = (Pv, hv) => Fv.decode(new Uint8Array(vv.buffer, vv.byteOffset + zv + Pv, hv)),
        dv = vv.getFloat64(zv + 12, !0);
      return {
        op: hv,
        level: vv.getFloat64(zv + 4, !0),
        durationMs: Number.isNaN(dv) ? null : dv,
        name: pv(Wv.Td.HEAD_BYTES, Sv),
        icon: pv(gv, ev)
      }
    }

    function nv(vv, zv, Pv) {
      return new wv.c(`event ${vv} at ${zv} of ${Pv} bytes`)
    }
    var Ov = Pv(312),
      Dv = Pv(1209),
      Kv = Pv(38511),
      Vv = Pv(1897),
      Uv = Pv(40007),
      Rv = Pv(1855),
      xv = Pv(38683),
      tv = Pv(38701),
      qv = Pv(38691),
      Iv = Pv(39940),
      Qv = Pv(2306),
      Zv = Pv(38679),
      Av = Pv(38696);
    const Lv = Math.max(av.wb.BYTES, av.lb.BYTES, av.pb.BYTES);

    function Hv(vv) {
      if (!(0, Av.h)(vv)) return null;
      const zv = Number(vv);
      return (0 | zv) === zv ? zv : null
    }
    class Mv {
      constructor(vv) {
        this.api = vv, this.bodyHeading = 0, this.viewHeading = 0, this.defaultPose = (0, Zv.m)(), this.defaultPoseRead = !1, this.defaultFov = 0, this.baseFov = 0, this.aspect = 1, this.lS = null, this.entityLive = !1, this.entityFeet = [0, 0, 0], this.entityAim = [0, 0, 0], this.entityHeading = 0, this.localId = av.ad, this.localName = String(av.ad), this.scratch = null
      }
      readView() {
        this.defaultPoseRead = !1, this.lS = null;
        const vv = this.api.queries.directorView() >= av.wb.BYTES ? this.scratchView() : null;
        null !== vv && (this.defaultFov = (0, Rv.y)(av.wb.fov(vv, 0)), this.baseFov = (0, Rv.y)(av.wb.baseFov(vv, 0)), this.aspect = av.wb.aspect(vv, 0), this.bodyHeading = av.wb.bodyHeading(vv, 0))
      }
      getViewHeading() {
        return this.viewHeading
      }
      setViewHeading(vv) {
        this.viewHeading = vv
      }
      get localPlayerId() {
        const vv = av.t.localId(this.api.apiView, 0);
        return vv !== this.localId && (this.localId = vv, this.localName = String(vv)), this.localName
      }
      getEntityPosition(vv) {
        return this.readEntity(vv) ? this.entityFeet : null
      }
      getEntityAimPoint(vv) {
        return this.readEntity(vv) ? this.entityAim : null
      }
      getEntityHeading(vv) {
        const zv = Hv(vv);
        if (null === zv) return null;
        const Pv = av.t.localId(this.api.apiView, 0);
        return zv === Pv && Pv !== av.ad ? this.viewHeading : this.readEntity(vv) ? this.entityHeading : null
      }
      raycastTerrain(vv, zv, Pv) {
        const hv = this.api.queries.cameraSweep(vv[0], vv[1], vv[2], zv[0], zv[1], zv[2], Pv);
        return hv < Pv - 1e-6 ? hv : null
      }
      getDefaultPose() {
        if (this.defaultPoseRead) return this.defaultPose;
        this.defaultPoseRead = !0;
        const vv = this.defaultPose;
        vv.fov = this.defaultFov;
        const zv = this.api.queries.directorDefaultPose() >= av.lb.BYTES ? this.scratchView() : null;
        if (null === zv) return vv;
        for (let Pv = 0; Pv < 3; Pv++) vv.position[Pv] = av.lb.eye(zv, 0, Pv);
        return vv.heading = av.lb.heading(zv, 0), vv.pitch = av.lb.pitch(zv, 0), vv
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
      readEntity(vv) {
        const zv = Hv(vv);
        if (null === zv) return !1;
        if (zv === this.lS) return this.entityLive;
        this.lS = zv;
        const Pv = this.api.queries.directorEntity(zv) >= av.pb.BYTES ? this.scratchView() : null;
        if (this.entityLive = null !== Pv, null === Pv) return !1;
        for (let hv = 0; hv < 3; hv++) this.entityFeet[hv] = av.pb.feet(Pv, 0, hv), this.entityAim[hv] = this.entityFeet[hv];
        return this.entityAim[1] += av.pb.eyeHeight(Pv, 0), this.entityHeading = av.pb.heading(Pv, 0), !0
      }
      scratchView() {
        const vv = this.api.scratch(),
          zv = this.api.memory().buffer,
          Pv = this.scratch;
        return null !== Pv && Pv.buffer === zv && Pv.byteOffset === vv ? Pv : (this.scratch = this.api.memoryData(vv, Lv, 8, "the director's record"), this.scratch)
      }
    }
    const yv = {
        mode: "default"
      },
      Bv = {
        show: () => {},
        clear: () => {}
      };

    function Jv() {
      return "undefined" !== typeof document && "hidden" === document.visibilityState
    }
    class Ev {
      constructor(vv) {
        this.options = vv, this.oT = void 0, this.director = void 0, this.latest = yv, this.pending = void 0, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.look = {
          ND: 0,
          lD: 0
        }, this.pointedAt = {
          heading: 0,
          pitch: 0
        }, this.engaged = !1, this.calledThisFrame = !1, this.holding = !1, this.lastCallMs = 0, this.answeredPose = !1, this.gd = new Int32Array(3 * av.Nd), this.centresLen = 0, this.centresUnsent = !1, this.next = new Int32Array(3 * av.Nd), this.oT = new Mv(vv.api), this.director = new qv.c(this.oT)
      }
      settingsChanged(vv) {
        let zv = yv;
        if (vv.length > 0) try {
          zv = (0, Iv.d)(vv)
        } catch {}
        this.latest = zv, this.pending = zv
      }
      call(vv, zv, Pv, hv, Sv, ev) {
        var gv, pv;
        let dv;
        this.holding = !1;
        try {
          dv = this.answer(vv, zv, Pv, hv, Sv, ev)
        } catch (Wv) {
          var Nv, lv;
          throw this.answeredPose = !1, null === (Nv = (lv = this.options).showFacing) || void 0 === Nv || Nv.call(lv, null), Wv
        }
        const Tv = this.answeredPose && 0 === (hv & av.sb.Held);
        return this.answeredPose = dv !== av.kb.None, this.holding = this.answeredPose && !Tv, null === (gv = (pv = this.options).showFacing) || void 0 === gv || gv.call(pv, this.holding ? this.facing : null), dv
      }
      holdsView() {
        return this.holding
      }
      answer(vv, zv, Pv, hv, Sv, ev) {
        this.calledThisFrame = !0, this.engaged = !0, this.lastCallMs = this.now();
        const {
          oT: gv
        } = this;
        gv.readView();
        if (0 !== (hv & av.sb.Held) || gv.setViewHeading((0, xv.r)(gv.bodyHeading)), void 0 !== this.pending) {
          const vv = this.pending;
          this.pending = void 0, this.director.setSettings(vv), this.syncShownSettings()
        }
        this.readLook((0, Qv.h)(zv), (0, Qv.h)(Pv), hv, (0, Qv.h)(Sv), (0, Qv.h)(ev));
        const pv = this.director.update(vv / 1e3, this.look);
        if (this.syncShownSettings(), this.writeCentres(this.director.getLoadingPositions()), this.hidden() || this.screen().show(this.director.getScreenFade(), this.director.getSettings()), !pv) return av.kb.None;
        const [dv, Nv, lv] = pv.position;
        if (0 === this.options.api.queries.directorPose(dv, Nv, lv, (0, xv.r)(pv.heading), (0, xv.h)(pv.pitch), (0, Rv.k)(pv.fov))) return av.kb.None;
        if ("default" === this.director.getSettings().mode) return av.kb.Pose;
        switch (this.facing) {
          case "camera":
            return av.kb.FaceCamera;
          case "cursor":
            return av.kb.FaceCursor;
          default:
            return av.kb.FaceMovement
        }
      }
      afterFrame(vv) {
        vv ? (this.calledThisFrame || (this.holding = !1, this.engaged && this.idle()), this.calledThisFrame = !1) : this.centresLen > 0 && this.hidden() && this.now() - this.lastCallMs > 1e3 && this.setCentres(0), this.centresUnsent && this.sendCentres()
      }
      reset() {
        this.latest = yv, this.idle()
      }
      restart() {
        const vv = this.holding;
        this.idle(), this.holding = vv
      }
      idle() {
        var vv, zv;
        this.engaged && this.screen().clear(), this.engaged = !1, this.holding = !1, this.director = new qv.c(this.oT), this.pending = this.latest, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.answeredPose = !1, null === (vv = (zv = this.options).showFacing) || void 0 === vv || vv.call(zv, null), this.setCentres(0)
      }
      syncShownSettings() {
        const vv = this.director.getSettings();
        if (vv === this.shownSettings) return;
        this.shownSettings = vv;
        const zv = (0, tv.f)(vv);
        this.facing = zv.facing, this.mouseTurns = zv.mouseTurns
      }
      readLook(vv, zv, Pv, hv, Sv) {
        const ev = this.look,
          gv = 0 !== (Pv & av.sb.LookPointed);
        if (null === this.mouseTurns && !gv) return ev.ND = 0, ev.lD = 0, void(ev.pointedAt = void 0);
        let pv;
        gv && (this.pointedAt.heading = hv, this.pointedAt.pitch = Sv, pv = this.pointedAt);
        const {
          oT: dv
        } = this;
        dv.setViewHeading((0, tv.d)(dv.getViewHeading(), vv, zv, pv, "look" === this.mouseTurns, ev))
      }
      writeCentres(vv) {
        const zv = this.next,
          Pv = Math.min(vv.length, av.Nd);
        for (let hv = 0; hv < Pv; hv++)
          for (let Pv = 0; Pv < 3; Pv++) zv[3 * hv + Pv] = Math.floor(vv[hv][Pv] / av.D);
        this.setCentres(Pv)
      }
      setCentres(vv) {
        const {
          gd: zv,
          next: Pv
        } = this;
        let hv = vv === this.centresLen;
        for (let Sv = 0; hv && Sv < 3 * vv; Sv++) hv = zv[Sv] === Pv[Sv];
        hv || (zv.fill(0), zv.set(Pv.subarray(0, 3 * vv)), this.centresLen = vv, this.centresUnsent = !0, this.sendCentres())
      }
      sendCentres() {
        const vv = this.options.cmd();
        null !== vv && (0, av.Ff)(vv, 0, this.gd, this.centresLen) && (this.centresUnsent = !1)
      }
      screen() {
        var vv, zv, Pv;
        return null !== (vv = null === (zv = (Pv = this.options).screen) || void 0 === zv ? void 0 : zv.call(Pv)) && void 0 !== vv ? vv : Bv
      }
      hidden() {
        var vv;
        return (null !== (vv = this.options.isPageHidden) && void 0 !== vv ? vv : Jv)()
      }
      now() {
        var vv, zv, Pv;
        return null !== (vv = null === (zv = (Pv = this.options).now) || void 0 === zv ? void 0 : zv.call(Pv)) && void 0 !== vv ? vv : performance.now()
      }
    }
    var ov = Pv(40102);
    const bv = av.D * av.D * av.D,
      rv = Math.log2(av.D),
      kv = av.D - 1,
      Xv = av.O.BYTES / 4,
      uv = new Uint16Array(bv);

    function vz(vv, zv, Pv) {
      return vv * av.D * av.D + zv * av.D + Pv
    }
    class zz {
      constructor(vv) {
        this.chunk = vv
      }
      get data() {
        return this.chunk.gameVoxels()
      }
      index(vv, zv, Pv) {
        return vz(vv, zv, Pv)
      }
    }
    class Pz {
      constructor() {
        this.ids = new Map, this.cleared = new Set, this.layers = 0, this.patched = null, this.from = null
      }
    }
    class hz {
      constructor(vv, zv, Pv, hv) {
        this.table = vv, this.slot = zv, this.generation = Pv, this.epoch = hv, this.fW = new zz(this), this.writes = null, this.writeCount = 0, this.shownVersion = 0, this.shownCore = -1, this.shownWrites = -1, this.data = uv, this.dataPtr = 0, this.dataBuffer = null, this.dataStamp = -1, this.version = 0, this.layers = null, this.layersVersion = -1, this.layersPtr = -1, this.staleLayers = 0
      }
      get Za() {
        return this.voxelData(), this.version === this.shownCore && this.writeCount === this.shownWrites || (this.shownCore = this.version, this.shownWrites = this.writeCount, this.shownVersion = this.table.nextVersion()), this.shownVersion
      }
      get mw() {
        const vv = this.gameVoxels(),
          zv = this.layers ??= new Uint16Array(av.D);
        this.layersVersion === this.version && this.layersPtr === this.dataPtr || (this.layersVersion = this.version, this.layersPtr = this.dataPtr, this.staleLayers = -1);
        for (let Pv = 0; 0 !== this.staleLayers; Pv++) {
          const hv = 1 << Pv;
          0 !== (this.staleLayers & hv) && (this.staleLayers &= ~hv, zv[Pv] = Sz(vv, Pv))
        }
        return zv
      }
      voxelData() {
        return this.dataStamp === this.table.stamp && 0 !== this.data.length ? this.data : this.reread()
      }
      gameVoxels() {
        const vv = this.voxelData(),
          zv = this.writes;
        if (null === zv || 0 === zv.ids.size) return vv;
        if (zv.from !== vv) {
          const Pv = zv.patched ??= new Uint16Array(bv);
          Pv.set(vv);
          for (const [vv, hv] of zv.ids) Pv[vv] = hv;
          zv.from = vv
        }
        return zv.patched
      }
      written(vv) {
        var zv;
        return null === (zv = this.writes) || void 0 === zv ? void 0 : zv.ids.get(vv)
      }
      hasWrites() {
        return null !== this.writes && 0 !== this.writes.ids.size
      }
      write(vv, zv, Pv) {
        const hv = this.writes ??= new Pz;
        hv.ids.set(vv, zv), Pv && hv.cleared.add(vv), null !== hv.from && (hv.patched[vv] = zv);
        const Sv = 1 << (vv >> rv & kv);
        hv.layers |= Sv, this.staleLayers |= Sv, this.writeCount++
      }
      clearWrites() {
        const vv = this.writes;
        null !== vv && (this.staleLayers |= vv.layers, vv.ids.clear(), vv.cleared.clear(), vv.layers = 0, vv.from = null)
      }
      dataCleared(vv) {
        var zv;
        return !0 === (null === (zv = this.writes) || void 0 === zv ? void 0 : zv.cleared.has(vv))
      }
      reread() {
        this.dataStamp = this.table.stamp;
        const vv = this.table.slotWords(),
          zv = this.slot * Xv;
        if (this.epoch !== this.table.epoch || zv + Xv > vv.length || 0 === vv[zv + 3] || vv[zv + 2] !== this.generation) return this.data = uv, this.dataPtr = 0, uv;
        this.version = vv[zv + 1];
        const Pv = vv[zv + 0],
          hv = vv.buffer;
        return Pv === this.dataPtr && hv === this.dataBuffer || (this.dataPtr = Pv, this.dataBuffer = hv, this.data = this.table.voxelsAt(hv, Pv)), this.data
      }
    }

    function Sz(vv, zv) {
      const Pv = vv[zv * av.D];
      for (let hv = 0; hv < av.D; hv++) {
        const Sv = vz(hv, zv, 0);
        for (let zv = 0; zv < av.D; zv++)
          if (vv[Sv + zv] !== Pv) return 65535
      }
      return Pv
    }
    const ez = new Uint32Array(0);

    function gz(vv, zv, Pv) {
      return vz(vv & kv, zv & kv, Pv & kv)
    }
    class pz {
      constructor(vv, zv) {
        this.memory = vv, this.apiView = zv, this.chunks = new Map, this.written = [], this.lastKey = -1, this.lastChunk = void 0, this.slotsPtr = 0, this.slotsLen = 0, this.slotsBuffer = null, this.slots = ez, this.walkPtr = 0, this.walkLen = 0, this.walkBuffer = null, this.walk = ez, this.epoch = 0, this.stamp = 0, this.versions = 0, this.corruption = null
      }
      apply(vv, zv, Pv, hv, Sv, ev) {
        if (this.lastKey = -1, this.lastChunk = void 0, this.stamp++, ev === av.Q.ResetAll) return this.chunks.clear(), void this.epoch++;
        if (ev !== av.Q.Stored && ev !== av.Q.Unloaded) throw new wv.c(`ChunkSlot flags ${ev}`);
        const gv = (0, ov.b)(vv, zv, Pv);
        if (gv < 0) return;
        if (ev === av.Q.Unloaded) return void this.chunks.delete(gv);
        const pv = this.chunks.get(gv);
        (null === pv || void 0 === pv ? void 0 : pv.slot) === hv && pv.generation === Sv || this.chunks.set(gv, new hz(this, hv, Sv, this.epoch))
      }
      touch() {
        this.stamp++, this.clearOverlay(), this.viewWalkThrough()
      }
      refresh() {
        if (this.stamp++, this.corruption) throw this.corruption;
        const vv = this.apiView(),
          zv = av.t.chunkSlotsPtr(vv, 0),
          Pv = av.t.chunkSlotsLen(vv, 0);
        zv === this.slotsPtr && Pv === this.slotsLen || (this.slotsPtr = zv, this.slotsLen = Pv, this.slotsBuffer = null, this.slotWords()), this.viewWalkThrough(), this.clearOverlay()
      }
      viewWalkThrough() {
        const vv = this.apiView(),
          zv = av.t.walkThroughPtr(vv, 0),
          Pv = av.t.walkThroughLen(vv, 0);
        zv === this.walkPtr && Pv === this.walkLen || (this.walkPtr = zv, this.walkLen = Pv, this.walkBuffer = null, this.walkWords())
      }
      clearOverlay() {
        for (const vv of this.written) vv.clearWrites();
        this.written.length = 0
      }
      nextVersion() {
        return ++this.versions
      }
      slotWords() {
        const vv = this.memory().buffer;
        var zv;
        vv !== this.slotsBuffer && (this.slotsBuffer = vv, this.slots = null !== (zv = (0, wv.u)(Uint32Array, vv, this.slotsPtr, this.slotsLen * Xv, "the chunk directory")) && void 0 !== zv ? zv : ez);
        return this.slots
      }
      voxelsAt(vv, zv) {
        try {
          var Pv;
          return null !== (Pv = (0, wv.u)(Uint16Array, vv, zv, bv, "a chunk's voxels")) && void 0 !== Pv ? Pv : uv
        } catch (hv) {
          if (!(hv instanceof wv.c)) throw hv;
          return this.corruption ??= hv, uv
        }
      }
      chunk(vv, zv, Pv) {
        var hv;
        return null !== (hv = this.chunks.get((0, ov.b)(vv, zv, Pv))) && void 0 !== hv ? hv : null
      }
      isLoaded(vv, zv, Pv) {
        return void 0 !== this.chunkAt(Math.floor(vv), Math.floor(zv), Math.floor(Pv))
      }
      yN(vv, zv, Pv) {
        var hv;
        const Sv = Math.floor(vv),
          ev = Math.floor(zv),
          gv = Math.floor(Pv),
          pv = this.chunkAt(Sv, ev, gv);
        if (!pv) return 0;
        const dv = gz(Sv, ev, gv);
        return null !== (hv = pv.written(dv)) && void 0 !== hv ? hv : pv.voxelData()[dv]
      }
      setOverlay(vv, zv, Pv, hv) {
        let Sv = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const ev = this.chunkAt(vv, zv, Pv);
        return !!ev && (ev.hasWrites() || this.written.push(ev), ev.write(gz(vv, zv, Pv), hv, Sv), !0)
      }
      version(vv, zv, Pv) {
        var hv, Sv;
        return null !== (hv = null === (Sv = this.chunks.get((0, ov.b)(vv, zv, Pv))) || void 0 === Sv ? void 0 : Sv.Za) && void 0 !== hv ? hv : null
      }
      scan(vv, zv, Pv, hv, Sv, ev, gv, pv) {
        const dv = av.D;
        let Nv = 0;
        for (let lv = Math.floor(zv / dv); lv * dv < Sv; lv++) {
          const Tv = lv * dv,
            Wv = Math.min(Sv - Tv, dv);
          for (let Sv = Math.floor(vv / dv); Sv * dv < hv; Sv++) {
            const wv = Sv * dv,
              av = Math.min(hv - wv, dv);
            for (let hv = Math.floor(Pv / dv); hv * dv < ev; hv++) {
              const sv = this.chunks.get((0, ov.b)(Sv, lv, hv));
              if (!sv) continue;
              const Cv = hv * dv,
                iv = Math.max(Pv - Cv, 0),
                cv = Math.min(ev - Cv, dv),
                Gv = sv.mw,
                mv = sv.gameVoxels();
              for (let Pv = Math.max(zv - Tv, 0); Pv < Wv; Pv++) {
                const zv = Gv[Pv];
                if (65535 === zv || 0 !== gv[zv]) {
                  Nv++;
                  for (let zv = Math.max(vv - wv, 0); zv < av; zv++) {
                    const vv = vz(zv, Pv, 0);
                    for (let hv = iv; hv < cv; hv++) {
                      const Sv = mv[vv + hv];
                      0 !== gv[Sv] && pv.push(wv + zv, Tv + Pv, Cv + hv, Sv)
                    }
                  }
                }
              }
            }
          }
        }
        return Nv
      }
      dataCleared(vv, zv, Pv) {
        var hv;
        const Sv = Math.floor(vv),
          ev = Math.floor(zv),
          gv = Math.floor(Pv);
        return !0 === (null === (hv = this.chunkAt(Sv, ev, gv)) || void 0 === hv ? void 0 : hv.dataCleared(gz(Sv, ev, gv)))
      }
      isWalkThrough(vv) {
        if (!Number.isInteger(vv) || vv < 0 || vv > 65535) return !1;
        const zv = this.walkWords(),
          Pv = vv >>> 5;
        return Pv < zv.length && 1 === (zv[Pv] >>> (31 & vv) & 1)
      }
      walkWords() {
        const vv = this.memory().buffer;
        var zv;
        vv !== this.walkBuffer && (this.walkBuffer = vv, this.walk = null !== (zv = (0, wv.u)(Uint32Array, vv, this.walkPtr, this.walkLen, "the walk-through bits")) && void 0 !== zv ? zv : ez);
        return this.walk
      }
      chunkAt(vv, zv, Pv) {
        if ((0 | vv) !== vv || (0 | zv) !== zv || (0 | Pv) !== Pv) return;
        const hv = (0, ov.b)(vv >> rv, zv >> rv, Pv >> rv);
        return hv !== this.lastKey && (this.lastKey = hv, this.lastChunk = this.chunks.get(hv)), this.lastChunk
      }
    }
    var dz = Pv(38036),
      Nz = Pv(37330),
      lz = Pv(36310),
      Tz = Pv(36151),
      Wz = Pv(8931),
      wz = Pv(38637),
      az = Pv(185);
    const sz = ["ambient", "cars", "crowd", "customGame_horror", "dig", "fire", "fishing", "gameStart", "gunMisc", "gunPistol", "gunRifle", "gunSemiAutomatic", "gunShotgun", "gunSubmachineGun", "mobBear", "mobCat", "mobCow", "mobCrone", "mobDeer", "mobDog", "mobFennec", "mobGolem", "mobGorilla", "mobHorse", "mobKnight", "mobPig", "mobReaver", "mobSheep", "mobSkeleton", "mobStag", "mobStalker", "mobWarper", "mobWraith", "mobZombie", "note", "phoneAndMoney", "police", "randomBeep", "randomCannon", "randomCash", "randomExp", "randomFallsmall", "randomFire", "randomFirecracker", "randomItems", "randomLaugh", "randomMagic", "randomSplash", "rpg", "step", "survivalFactory", "town"],
      Cz = [
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
      iz = Cz.map((vv => {
        let [zv] = vv;
        return zv
      })),
      cz = Uint8Array.from(Cz, (vv => {
        let [, zv] = vv;
        return zv
      })),
      Gz = {
        semi_automatic: 11,
        submachine: 13,
        rifle: 10,
        pistol: 9,
        shotgun: 12
      },
      mz = 8;
    var jz = Pv(36279),
      fz = Pv(36292),
      Fz = Pv(36290),
      Yz = Pv(250);
    class nz {
      constructor(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Yz.e;
        this.sheet = vv, this.onError = zv, this.idle = Pv, this.queue = [], this.asked = new Set, this.cancelIdle = null, this.gen = 0, this.onIdle = vv => {
          this.cancelIdle = null;
          try {
            if (vv.timeRemaining() >= 1) {
              let vv = this.queue.shift();
              for (; void 0 !== vv && !this.load(vv);) vv = this.queue.shift()
            }
          } catch (zv) {
            this.onError(zv)
          } finally {
            this.schedule()
          }
        }
      }
      preload(vv) {
        const zv = [...vv].sort(((vv, zv) => vv - zv));
        for (const Pv of zv) this.asked.has(Pv) || (this.asked.add(Pv), this.queue.push(Pv));
        this.schedule()
      }
      cancel() {
        var vv;
        this.queue.length = 0, this.asked.clear(), this.gen++, null === (vv = this.cancelIdle) || void 0 === vv || vv.call(this), this.cancelIdle = null
      }
      schedule() {
        null === this.cancelIdle && this.queue.length > 0 && (this.cancelIdle = this.idle(this.onIdle))
      }
      load(vv) {
        const zv = this.sheet(vv, !1),
          Pv = this.sheet(vv, !0),
          [hv, Sv] = "unloaded" === zv.state() && "unloaded" !== Pv.state() ? [Pv, zv] : [zv, Pv],
          ev = this.gen,
          gv = () => {
            try {
              ev === this.gen && "unloaded" === Sv.state() && Sv.load()
            } catch (vv) {
              this.onError(vv)
            }
          },
          pv = hv.state();
        return "unloaded" === pv ? (hv.once("load", gv), hv.load(), !0) : "unloaded" === Sv.state() && ("loading" === pv ? (hv.once("load", gv), !1) : (Sv.load(), !0))
      }
    }
    var Oz = Pv(40201);
    const Dz = {
        coneInnerAngle: 360,
        coneOuterAngle: 360,
        coneOuterGain: 0,
        distanceModel: "inverse",
        maxDistance: 1e3,
        panningModel: "HRTF",
        rolloffFactor: 1
      },
      Kz = az.f.lG * az.f.playerEyeToHeightRatio,
      Vz = [0, 0, -1, 0, 1, 0],
      Uz = sz.indexOf("note");

    function Rz(vv) {
      return vv >= 0 ? Math.min(1, vv) : 0
    }

    function xz(vv) {
      var zv;
      let Pv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.random;
      const hv = function(vv) {
        let zv = 0,
          Pv = iz.length;
        for (; zv < Pv;) {
          const hv = zv + Pv >>> 1;
          iz[hv] < vv ? zv = hv + 1 : Pv = hv
        }
        return zv
      }(vv);
      if ("" === vv || null === (zv = iz[hv]) || void 0 === zv || !zv.startsWith(vv)) return -1;
      if (iz[hv] === vv) return hv;
      let Sv = hv + 1;
      for (; Sv < iz.length && iz[Sv].startsWith(vv);) Sv++;
      return hv + Math.floor(Pv() * (Sv - hv))
    }
    class tz {
      constructor(vv, zv, Pv, hv, Sv) {
        this.group = vv, this.loudness = zv, this.startMs = Pv, this.howl = hv, this.host = Sv, this.id = 0, this.direct = !1
      }
      getDurationMs() {
        const vv = this.host.alive(this.id);
        return vv ? 1e3 * this.howl.duration(this.id) / vv.rate : 0
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
    class qz {
      constructor(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now(),
          hv = arguments.length > 3 ? arguments[3] : void 0;
        this.createHowl = vv, this.listener = zv, this.now = Pv, this.errors = 0, this.sheets = new Map, this.unloading = new Uint16Array(sz.length), this.live = new Map, this.core = new Map, this.level = 1, this.master = 1, this.pose = new Float64Array(9), this.nextPose = new Float64Array(9), this.posed = !1, this.loader = void 0, this.voices = new Fz.d, this.failed = new Set, this.started = new Set, this.voiceHost = {
          alive: vv => this.aliveVoice(vv),
          started: vv => this.started.has(vv),
          drop: vv => {
            var zv;
            null === (zv = this.live.get(vv)) || void 0 === zv || zv.howl.stop(vv), this.forget(vv)
          }
        }, this.handlers = {
          playSound: (vv, zv, Pv, hv, Sv, ev, gv, pv, dv) => {
            if (hv >= iz.length) return;
            const Nv = 0 !== (Sv & av.ae.Loop);
            Sv & av.ae.TwoD ? this.start(hv, !1, gv, ev, pv, Nv) : this.startSpatial(hv, gv, ev, pv, Nv, vv, zv, Pv, dv, this.earDistSq(vv, zv, Pv))
          },
          soundPos: (vv, zv, Pv, hv) => {
            const Sv = this.core.get(hv);
            var ev;
            void 0 !== Sv && (null === (ev = this.live.get(Sv)) || void 0 === ev || ev.howl.pos(Pv, zv, vv, Sv))
          },
          soundSet: (vv, zv, Pv, hv) => {
            const Sv = this.core.get(vv),
              ev = void 0 === Sv ? void 0 : this.live.get(Sv);
            void 0 !== Sv && ev && (this.setRel(Sv, zv), ev.rate = Pv, ev.howl.rate(Pv, Sv), ev.spatial && ev.howl.pannerAttr({
              refDistance: hv
            }, Sv))
          },
          soundFade: (vv, zv, Pv, hv) => {
            const Sv = this.core.get(vv);
            void 0 !== Sv && this.fade(Sv, zv, Pv, 0 !== (hv & av.Yd.StopAfter))
          },
          soundStop: vv => {
            const zv = this.core.get(vv);
            var Pv;
            void 0 !== zv && (null === (Pv = this.live.get(zv)) || void 0 === Pv || Pv.howl.stop(zv), this.forget(zv))
          },
          soundReset: () => {
            this.stopCore()
          }
        }, this.loader = new nz(((vv, zv) => this.sheet(vv, zv)), (vv => {
          this.errors++, console.error("Audio preload failed", vv)
        }), hv)
      }
      prepare() {
        for (let vv = 0; vv < sz.length; vv++) this.prepareSheet(vv)
      }
      prepareSheet(vv) {
        this.sheet(vv, !1), this.sheet(vv, !0)
      }
      preload(vv) {
        this.loader.preload(vv)
      }
      cancelPreload() {
        this.loader.cancel()
      }
      freeSheetsAfterGame() {
        for (let vv = 0; vv < sz.length; vv++) {
          if (fz.b.has(sz[vv])) continue;
          const zv = [];
          for (const hv of [!1, !0]) {
            const Pv = Iz(vv, hv),
              Sv = this.sheets.get(Pv);
            void 0 !== Sv && "loading" !== Sv.state() && zv.push({
              key: Pv,
              howl: Sv
            })
          }
          if (!zv.some((vv => {
              let {
                howl: zv
              } = vv;
              return "loaded" === zv.state()
            }))) continue;
          this.unloading[vv] += zv.length;
          const Pv = () => {
            this.unloading[vv]--, 0 === this.unloading[vv] && this.prepareSheet(vv)
          };
          for (const {
              key: vv,
              howl: hv
            }
            of zv) this.sheets.delete(vv), "loaded" === hv.state() ? (0, jz.b)(hv, Pv) : (hv.unload(), Pv())
        }
      }
      onAudioEvent(vv, zv, Pv, hv) {
        if (vv < av.o.PlaySound || vv > av.o.SoundReset) return !1;
        try {
          return (0, av.me)(vv, zv, Pv, hv, this.handlers)
        } catch (Sv) {
          return this.errors++, console.error("Audio event failed", Sv), !0
        }
      }
      applyListener(vv) {
        const zv = this.nextPose;
        for (let hv = 0; hv < 3; hv++) zv[2 - hv] = av.v.listener(vv, 0, hv), zv[5 - hv] = av.v.forward(vv, 0, hv), zv[8 - hv] = av.v.up(vv, 0, hv);
        0 === zv[3] && 0 === zv[4] && 0 === zv[5] && zv.set(this.posed ? this.pose.subarray(3) : Vz, 3);
        for (let hv = 0; hv < 9; hv++)
          if (!Number.isFinite(zv[hv])) return;
        const Pv = this.pose;
        if (this.posed) {
          let vv = !0;
          for (let hv = 0; hv < 9 && vv; hv++) vv = zv[hv] === Pv[hv];
          if (vv) return
        }
        this.listener.apply(zv) && (Pv.set(zv), this.posed = !0)
      }
      playGame(vv, zv, Pv, hv, Sv, ev, gv) {
        const pv = xz(vv);
        if (pv < 0) return Oz.d;
        if (!Pv) {
          const {
            howl: vv,
            id: Pv
          } = this.start(pv, !1, zv, 0, 1, gv);
          return this.gameSound(vv, Pv, !1)
        }
        const dv = Pv[0],
          Nv = Pv[1] + Kz,
          lv = Pv[2];
        if (!Number.isFinite(dv) || !Number.isFinite(Nv) || !Number.isFinite(lv)) return Oz.d;
        let Tv;
        if (hv) {
          const vv = dv - hv[0],
            zv = Nv - hv[1],
            Pv = lv - hv[2];
          if (Tv = vv * vv + zv * zv + Pv * Pv, Tv > Sv * Sv) return Oz.d
        } else Tv = this.earDistSq(dv, Nv, lv);
        const Wv = this.startSpatial(pv, zv, 0, 1, gv, dv, Nv, lv, ev, Tv);
        return Wv ? this.gameSound(Wv.howl, Wv.id, !0) : Oz.d
      }
      setMaster(vv, zv) {
        this.level = Rz(vv);
        const Pv = zv ? this.level : 0;
        if (Pv !== this.master) {
          this.master = Pv;
          for (const [vv, zv] of this.live) zv.fadeMs = 0, zv.gain = zv.rel * this.master, zv.howl.volume(zv.gain, vv)
        }
      }
      stopCore() {
        for (const zv of [...this.core.values()]) {
          var vv;
          null === (vv = this.live.get(zv)) || void 0 === vv || vv.howl.stop(zv)
        }
        this.core.clear()
      }
      stopAll() {
        this.cancelPreload();
        for (const [vv, zv] of [...this.live]) zv.howl.stop(vv), this.forget(vv);
        this.core.clear()
      }
      gameSound(vv, zv, Pv) {
        const hv = {
          stop: () => (this.live.has(zv) && vv.stop(zv), hv),
          fade: (vv, Pv, Sv) => {
            var ev, gv;
            const pv = this.level > 0 ? Pv / this.level : Pv > 0 && null !== (ev = null === (gv = this.live.get(zv)) || void 0 === gv ? void 0 : gv.rel) && void 0 !== ev ? ev : 0;
            return this.fade(zv, pv, Sv, !1), hv
          },
          rate: Pv => {
            const Sv = this.live.get(zv);
            return Sv && (Sv.rate = function(vv) {
              return vv > 0 && vv < 1 / 0 ? vv : 1
            }(Pv), vv.rate(Sv.rate, zv)), hv
          },
          getVolume: () => {
            var vv, Pv;
            return (null !== (vv = null === (Pv = this.live.get(zv)) || void 0 === Pv ? void 0 : Pv.rel) && void 0 !== vv ? vv : 0) * this.level
          },
          getRelativeVolume: () => {
            var vv, Pv;
            return null !== (vv = null === (Pv = this.live.get(zv)) || void 0 === Pv ? void 0 : Pv.rel) && void 0 !== vv ? vv : 0
          },
          setRelativeVolume: vv => (this.setRel(zv, vv), hv),
          setPannerAttr: Sv => {
            if (Pv && this.live.has(zv)) {
              const Pv = {
                ...Dz,
                refDistance: lz.e
              };
              for (const [vv, zv] of Object.entries(Sv)) "number" !== typeof zv && "string" !== typeof zv || (Pv[vv] = zv);
              vv.pannerAttr({
                coneOuterAngle: Pv.coneOuterAngle
              }, zv), vv.pannerAttr(Pv, zv)
            }
            return hv
          },
          setPosition: Sv => (Pv && this.live.has(zv) && Number.isFinite(Sv[0] + Sv[1] + Sv[2]) && vv.pos(Sv[2], Sv[1], Sv[0], zv), hv)
        };
        return hv
      }
      startSpatial(vv, zv, Pv, hv, Sv, ev, gv, pv, dv, Nv) {
        const lv = this.sheet(cz[vv], !0);
        let Tv = null;
        if (!Sv) {
          if (this.failed.has(lv)) return null;
          const Pv = cz[vv] === Uz ? null : (0, Fz.k)(iz[vv]),
            hv = (0, Fz.g)(Rz(zv), Math.sqrt(Nv), dv);
          if (Tv = new tz(Pv, hv, this.now(), lv, this.voiceHost), !this.voices.admit(Tv)) return null
        }
        const Wv = this.start(vv, !0, zv, Pv, hv, Sv);
        return Tv && (Tv.id = Wv.id, Tv.direct = "loaded" === lv.state() && !lv._playLock), lv.pannerAttr({
          coneOuterAngle: 360
        }, Wv.id), lv.pannerAttr({
          ...Dz,
          refDistance: dv
        }, Wv.id), lv.pos(pv, gv, ev, Wv.id), Wv
      }
      aliveVoice(vv) {
        const zv = this.live.get(vv);
        if (!zv) return;
        const Pv = zv.howl._soundById(vv);
        if (Pv && !Pv._ended) return zv;
        this.forget(vv)
      }
      earDistSq(vv, zv, Pv) {
        if (!this.posed) return 0;
        const hv = vv - this.pose[2],
          Sv = zv - this.pose[1],
          ev = Pv - this.pose[0];
        return hv * hv + Sv * Sv + ev * ev
      }
      start(vv, zv, Pv, hv, Sv, ev) {
        const gv = Rz(Pv),
          pv = this.sheet(cz[vv], zv);
        "unloaded" === pv.state() && pv.load();
        const dv = pv.play(iz[vv]),
          Nv = gv * this.master;
        return pv.volume(Nv, dv), this.live.set(dv, {
          howl: pv,
          rel: gv,
          gain: Nv,
          fadeFrom: Nv,
          fadeAt: 0,
          fadeMs: 0,
          rate: Sv,
          handle: hv,
          spatial: zv,
          stopTimer: void 0
        }), 0 !== hv && this.core.set(hv, dv), 1 !== Sv && pv.rate(Sv, dv), ev && pv.loop(!0, dv), {
          howl: pv,
          id: dv
        }
      }
      sheet(vv, zv) {
        const Pv = Iz(vv, zv);
        let hv = this.sheets.get(Pv);
        if (!hv) {
          const Sv = this.createHowl(sz[vv], zv);
          Sv.on("end", (vv => {
            Sv.loop(vv) || this.forget(vv)
          })), Sv.on("stop", (vv => {
            this.forget(vv)
          })), Sv.on("play", (vv => {
            this.live.has(vv) && this.started.add(vv)
          })), Sv.on("loaderror", (vv => {
            if ("loaded" !== Sv.state()) {
              this.failed.add(Sv);
              for (const [vv, zv] of this.live) zv.howl === Sv && this.forget(vv)
            } else "number" === typeof vv && this.forget(vv)
          })), this.sheets.set(Pv, Sv), hv = Sv
        }
        return hv
      }
      setRel(vv, zv) {
        const Pv = this.live.get(vv);
        Pv && (Qz(Pv), Pv.fadeMs = 0, Pv.rel = Rz(zv), Pv.gain = Pv.rel * this.master, Pv.howl.volume(Pv.gain, vv))
      }
      fade(vv, zv, Pv, hv) {
        const Sv = this.live.get(vv);
        if (!Sv) return;
        Qz(Sv);
        const {
          howl: ev
        } = Sv, gv = this.gainNow(Sv);
        Sv.rel = Rz(zv), Sv.gain = Sv.rel * this.master;
        const pv = Pv > 0 ? Math.min(Pv, 65535) : 0,
          dv = 0 === pv || gv === Sv.gain;
        Sv.fadeMs = dv ? 0 : pv, dv ? ev.volume(Sv.gain, vv) : (Sv.fadeFrom = gv, Sv.fadeAt = this.now(), ev.fade(gv, Sv.gain, pv, vv)), hv && (dv ? ev.stop(vv) : Sv.stopTimer = setTimeout((() => {
          Sv.stopTimer = void 0, ev.stop(vv)
        }), pv))
      }
      gainNow(vv) {
        if (vv.fadeMs > 0) {
          const zv = (this.now() - vv.fadeAt) / vv.fadeMs;
          if (zv < 1) return vv.fadeFrom + (vv.gain - vv.fadeFrom) * Math.max(0, zv);
          vv.fadeMs = 0
        }
        return vv.gain
      }
      forget(vv) {
        this.started.delete(vv);
        const zv = this.live.get(vv);
        zv && (Qz(zv), this.live.delete(vv), 0 !== zv.handle && this.core.get(zv.handle) === vv && this.core.delete(zv.handle))
      }
    }

    function Iz(vv, zv) {
      return 2 * vv + (zv ? 1 : 0)
    }

    function Qz(vv) {
      void 0 !== vv.stopTimer && (clearTimeout(vv.stopTimer), vv.stopTimer = void 0)
    }
    var Zz = Pv(39918),
      Az = Pv(38642);
    class Lz {
      constructor(vv, zv, Pv, hv) {
        this.key = vv, this.model = zv, this.host = hv, this.GT = void 0, this.records = void 0, this.origin = [0, 0, 0], this.count = 0, this.Fhv = Number.NaN, this.sentOrigin = [Number.NaN, Number.NaN, Number.NaN], this.dirtyList = [], this.isDirty = void 0, this.tail = void 0, this.tailView = void 0, this.tailCut = new Uint8Array(0), this.made = !1, this.ea = !1, this.GT = Math.max(1, Math.ceil(Pv)), this.records = new Float32Array(this.GT * dz.b), this.isDirty = new Uint8Array(this.GT), this.tail = new Uint8Array(this.GT * av.uc.Bytes), this.tailView = new DataView(this.tail.buffer), this.make(hv.cmd())
      }
      setOrigin(vv, zv, Pv) {
        this.origin[0] = vv, this.origin[1] = zv, this.origin[2] = Pv
      }
      markDirty(vv) {
        !this.ea && vv >= 0 && vv < this.GT && vv < av.uc.Max && this.Da(vv, vv + 1)
      }
      commit(vv) {
        if (this.ea) return;
        (vv = Math.min(Math.max(Math.floor(vv), 0), this.GT, av.uc.Max)) > this.count && this.Da(this.count, vv), this.count = vv;
        const {
          origin: zv,
          sentOrigin: Pv,
          dirtyList: hv
        } = this, Sv = this.Fhv !== vv, ev = Pv[0] !== zv[0] || Pv[1] !== zv[1] || Pv[2] !== zv[2];
        if (0 === hv.length && !Sv && !ev) return;
        const gv = this.host.cmd();
        if (!gv || !this.make(gv)) return;
        const pv = hv.length,
          {
            records: dv,
            tailView: Nv
          } = this;
        for (let lv = 0; lv < pv; lv++) {
          const vv = hv[lv],
            zv = vv * dz.b,
            Pv = lv * av.uc.Bytes,
            Sv = 0 !== dv[zv + dz.e] ? av.uc.Hidden : 0;
          Nv.setUint32(Pv, (vv | Sv) >>> 0, !0), Nv.setFloat32(Pv + 4, dv[zv], !0), Nv.setFloat32(Pv + 8, dv[zv + 1], !0), Nv.setFloat32(Pv + 12, dv[zv + 2], !0)
        }
        if ((0, av.Qe)(gv, 0, this.key, vv, zv, pv, this.tailOf(pv))) {
          for (let vv = 0; vv < pv; vv++) this.isDirty[hv[vv]] = 0;
          hv.length = 0, this.Fhv = vv, Pv[0] = zv[0], Pv[1] = zv[1], Pv[2] = zv[2]
        }
      }
      grow(vv) {
        (vv = Math.ceil(vv)) <= this.GT || this.ea || (this.records = (0, Az.e)(this.records, new Float32Array(vv * dz.b)), this.isDirty = (0, Az.e)(this.isDirty, new Uint8Array(vv)), this.tail = new Uint8Array(vv * av.uc.Bytes), this.tailView = new DataView(this.tail.buffer), this.GT = vv)
      }
      dispose() {
        this.ea || (this.ea = !0, this.host.ea(this, this.made ? this.key : null))
      }
      make(vv) {
        if (!this.made && vv) {
          const {
            item: zv,
            scale: Pv,
            yaw: hv
          } = this.model;
          this.made = (0, av.Te)(vv, 0, this.key, zv, Pv, hv)
        }
        return this.made
      }
      tailOf(vv) {
        const zv = vv * av.uc.Bytes;
        return this.tailCut.buffer === this.tail.buffer && this.tailCut.length === zv || (this.tailCut = this.tail.subarray(0, zv)), this.tailCut
      }
      Da(vv, zv) {
        const {
          dirtyList: Pv,
          isDirty: hv
        } = this;
        for (let Sv = vv; Sv < zv; Sv++) 0 === hv[Sv] && (hv[Sv] = 1, Pv.push(Sv))
      }
    }
    var Hz = Pv(618);
    class Mz {
      constructor(vv) {
        this.keys = 0, this.live = new Set, this.owing = new Set, this.host = void 0, this.host = {
          cmd: vv,
          owes: vv => {
            this.owing.add(vv)
          },
          settled: (vv, zv) => {
            this.owing.delete(vv), zv && this.live.delete(vv)
          }
        }
      }
      create(vv, zv) {
        if (Pv = vv, !Hz.q.includes(Pv)) return null;
        var Pv;
        const hv = new yz(++this.keys, lv.i.indexOf(vv), zv, this.host);
        return this.live.add(hv), hv
      }
      disposeAll() {
        for (const vv of [...this.live]) vv.dispose()
      }
      flush() {
        if (0 === this.owing.size) return;
        const vv = this.host.cmd();
        for (const zv of this.owing)
          if (!zv.sync(vv)) return
      }
    }
    class yz {
      constructor(vv, zv, Pv, hv) {
        this.key = vv, this.lifeform = zv, this.scale = Pv, this.host = hv, this.feet = [0, 0, 0], this.yaw = 0, this.visible = !1, this.owed = 1, this.ea = !1, this.sync()
      }
      setPose(vv, zv) {
        this.ea || (this.feet[0] = vv[0], this.feet[1] = vv[1], this.feet[2] = vv[2], this.yaw = zv, this.owed |= 2, this.sync())
      }
      setVisible(vv) {
        this.ea || vv === this.visible || (this.visible = vv, this.owed |= 4, this.sync())
      }
      dispose() {
        this.ea || (this.ea = !0, this.owed = 1 & this.owed ? 0 : 8, this.sync())
      }
      sync() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.host.cmd();
        return this.write(vv) ? (this.host.settled(this, this.ea), !0) : (this.host.owes(this), !1)
      }
      write(vv) {
        if (!vv) return this.owed = 0, !0;
        if (1 & this.owed) {
          if (!(0, av.Ze)(vv, 0, this.key, this.lifeform, this.scale)) return !1;
          this.owed &= -2
        }
        const zv = (2 & this.owed ? av.Zc.Pose : 0) | (4 & this.owed ? av.Zc.Visible : 0);
        if (0 !== zv) {
          if (!(0, av.Ye)(vv, 0, this.key, zv, this.visible ? 1 : 0, this.feet, this.yaw)) return !1;
          this.owed &= -7
        }
        if (8 & this.owed) {
          if (!(0, av.Ve)(vv, 0, this.key)) return !1;
          this.owed = 0
        }
        return !0
      }
    }
    var Bz = Pv(40352);

    function Jz(vv, zv, Pv, hv) {
      return (0, Bz.b)(), (0, av.Jf)(vv, zv, Pv, hv)
    }
    var Ez = Pv(38651),
      oz = Pv(39907);
    const bz = [0, 0, 0],
      rz = [0, 0, 0],
      kz = [0, 0, 0],
      Xz = [0, 0, 0],
      uz = {
        origin: [0, 0, 0],
        direction: [0, 0, 1]
      },
      vP = [0, 0, 0],
      zP = [0, 0],
      PP = [1, 1, 1],
      hP = 1 / 3;
    const SP = Nz.f;

    function eP(vv) {
      const zv = Nz.c[vv],
        Pv = zv && Nz.f[zv.mainMultiblock];
      return Pv && {
        main: Pv,
        x: zv.compX,
        y: zv.compY,
        z: zv.compZ
      }
    }

    function gP(vv) {
      if (null === vv || void 0 === vv) return av.ad;
      const zv = +vv;
      return Number.isInteger(zv) && zv >= -2147483648 && zv <= 2147483647 && String(zv) === String(vv) ? zv : av.ad
    }

    function pP(vv, zv, Pv) {
      return (0, av.Pf)(vv, 0, zv, null !== Pv && void 0 !== Pv ? Pv : Number.NaN)
    }
    class dP {
      constructor(vv) {
        this.deps = vv, this.api = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.tables = void 0, this.meshKeys = 0, this.liveMeshes = new Set, this.poolKeys = 0, this.livePools = new Set, this.cameraTurn = new Ez.d((() => this.tables.getClientOption("forcedCameraDirectionTransitionMs")), (vv => {
          var zv, Pv;
          null === (zv = (Pv = this.deps).setLocalOptions) || void 0 === zv || zv.call(Pv, vv)
        })), this.mobModels = new Mz((() => this.deps.cmd())), this.owedFrees = [], this.pendingStyle = void 0, this.pendingFar = void 0, this.farSet = !1, this.routeMesh = 0, this.routeOffset = 0, this.routeLook = "", this.routeSlide = {
          uvOffset: [0, 0]
        }, this.poolHost = {
          cmd: () => this.deps.cmd(),
          ea: (vv, zv) => {
            this.livePools.delete(vv), null !== zv && (this.owedFrees.push(zv), this.flushOwed())
          }
        }, this.api = vv.api, this.live = vv.live, this.chunks = vv.chunks, this.items = vv.items, this.tables = vv.tables
      }
      isLocal(vv) {
        return null !== vv && void 0 !== vv && +vv === this.api.localId
      }
      assertLocal(vv, zv) {
        if (!this.isLocal(vv)) throw new Error(`Attempted to ${zv} for a player that is not the local player`)
      }
      yG(vv) {
        const zv = this.api.yG(vv);
        if (!zv) throw new Error(`Entity ${vv} has no replicated position`);
        return zv
      }
      checkValid(vv) {
        return !!this.deps.isSessionLive() && (null === vv || void 0 === vv || this.api.checkValid(vv))
      }
      isAlive(vv) {
        return !1 !== this.api.isAlive(vv)
      }
      getItemStat(vv, zv, Pv) {
        return this.isLocal(vv) || null !== vv && "Player" === this.api.getEntityType(vv) ? this.tables.getItemStat(zv, Pv) : this.tables.getDefaultItemStat(zv, Pv)
      }
      getClientOption(vv, zv) {
        return this.assertLocal(vv, "get a client option"), this.tables.getClientOption(zv)
      }
      openShop(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Pv = arguments.length > 2 ? arguments[2] : void 0;
        this.assertLocal(vv, "open shop"), gv.j.zC("showShopFromServer", {
          toggle: zv,
          pz: Pv
        }, !0)
      }
      sendMessage(vv, zv, Pv) {
        this.assertLocal(vv, "send a message");
        const hv = "string" === typeof zv ? [{
          str: zv,
          style: Pv
        }] : zv;
        gv.j.zC("chat", {
          content: hv
        }, !0)
      }
      getEntityType(vv) {
        return this.api.getEntityType(vv)
      }
      getEntityName(vv) {
        const zv = gP(vv);
        return zv === av.ad ? void 0 : (0, Zz.h)(this.api, zv)
      }
      hasEffect(vv, zv) {
        const Pv = gP(vv);
        return Pv !== av.ad && (0, Zz.f)(this.api, Pv, zv)
      }
      getMetaInfo(vv) {
        return this.tables.getMetaInfo(vv)
      }
      getPlayerDbId(vv) {
        return this.assertLocal(vv, "get a DB ID"), this.deps.playerDbId()
      }
      getBlockData(vv, zv, Pv) {
        if (!this.chunks.dataCleared(vv, zv, Pv)) return (0, Zz.d)(this.api, vv, zv, Pv)
      }
      eD(vv, zv, Pv, hv) {
        this.setBlockId(vv, zv, Pv, this.tables.getItemId(hv))
      }
      setOtherEntitySetting(vv, zv, Pv, hv) {
        if (!this.isLocal(vv)) throw new Error("Attempted to set an other-entity setting for a player that is not the local player");
        if (!Object.hasOwn(av.md, Pv)) throw new Error(`Unknown other-entity setting ${Pv}`);
        const Sv = av.md[Pv],
          ev = gP(zv);
        if (ev === av.ad || !this.deps.beforeWrite()) return;
        const gv = (0, Iv.f)(hv);
        if (gv.length > 16384) throw new Error(`The other-entity setting ${Pv}'s value is over 16384 bytes`);
        const pv = this.api.memoryView(Uint8Array, this.api.scratch(), gv.length, "set_other_entity_setting's value");
        pv && (pv.set(gv), this.api.queries.setOtherEntitySetting(ev, Sv, gv.length))
      }
      getPositionView(vv) {
        return this.live.position(+vv)
      }
      readDrawnPosition(vv, zv) {
        return this.api.readDrawnPosition(gP(vv), zv)
      }
      getDrawnHeading(vv) {
        const zv = gP(vv),
          Pv = (zv === av.ad ? 0 : this.api.queries.directorEntity(zv)) >= av.pb.BYTES ? this.api.memoryData(this.api.scratch(), av.pb.BYTES, 8, "getDrawnHeading's DirectorEntity") : null;
        if (!Pv) return null;
        if (1 === av.pb.headingIsDrawn(Pv, 0)) return av.pb.heading(Pv, 0);
        const hv = this.api.apiView;
        return this.isLocal(vv) && 0 === (av.t.playerFlags(hv, 0) & av.Gd.FreeCam) ? av.t.heading(hv, 0) : null
      }
      getLocalPlayerMovement() {
        const vv = av.t.playerFlags(this.api.apiView, 0);
        return 0 === (vv & av.Gd.Replay) && this.api.readDrawnPosition(this.api.localId, kz) ? {
          onGround: 0 !== (vv & av.Gd.OnGround),
          jumpHeld: 0 !== (vv & av.Gd.JumpHeld)
        } : null
      }
      Avv(vv) {
        return this.isLocal(vv) ? this.items.Vp() : null
      }
      getInventoryItems() {
        return this.items.playerItems()
      }
      getHeldGunInaccuracy() {
        var vv, zv;
        return "Gun" === (null === (vv = this.aliveHeld()) || void 0 === vv || null === (zv = vv.typeObj) || void 0 === zv ? void 0 : zv.type) ? this.items.inaccuracy : null
      }
      aliveHeld() {
        return !1 === this.api.isAlive(this.api.localId) ? null : this.items.Vp()
      }
      isCrosshairShown() {
        var vv, zv;
        const Pv = (0, Tz.b)(hv.c.get("crosshairGameView"), hv.c.get("crosshairShownOverride"));
        if (null !== Pv) return Pv;
        const Sv = null === (vv = this.aliveHeld()) || void 0 === vv ? void 0 : vv.typeObj,
          ev = "Gun" === (null === Sv || void 0 === Sv ? void 0 : Sv.type),
          gv = ev || !0 === (null === Sv || void 0 === Sv ? void 0 : Sv.showsAimingUi),
          pv = 0 === (av.t.playerFlags(this.api.apiView, 0) & av.Gd.ZoomFirstPerson),
          dv = null !== (zv = this.tables.getClientOption("gunshotOrigin")) && void 0 !== zv ? zv : null;
        return (0, Tz.e)({
          gun: ev,
          aimable: gv
        }, pv, (0, Wz.b)(), dv)
      }
      setCrosshairShown(vv) {
        hv.c.set({
          crosshairShownOverride: vv
        })
      }
      getInventoryFreeSlotCount(vv) {
        return this.isLocal(vv) ? this.items.freeSlots() : null
      }
      getSelectedInventorySlotI(vv) {
        return this.isLocal(vv) ? this.items.selectedSlot : null
      }
      getItemSlot(vv, zv) {
        return this.isLocal(vv) ? this.items.slot(zv) : null
      }
      swapInventorySlots(vv, zv) {
        return this.items.swap(vv, zv)
      }
      isPlayerCrouching(vv) {
        if (this.isLocal(vv)) return 0 !== (av.t.playerFlags(this.api.apiView, 0) & av.Gd.Crouching);
        const zv = gP(vv);
        return zv !== av.ad && 1 === this.api.queries.entityCrouching(zv)
      }
      getMiningBlock() {
        return this.live.breakingPosition()
      }
      isMining() {
        return 0 !== (av.t.playerFlags(this.api.apiView, 0) & av.Gd.AttemptingBreak)
      }
      getTargetedBlock() {
        return this.live.N9()
      }
      getActionRay() {
        const vv = this.api.apiView;
        for (let zv = 0; zv < 3; zv++) uz.origin[zv] = av.t.K8(vv, 0, zv), uz.direction[zv] = av.t.actionDir(vv, 0, zv);
        return uz
      }
      canModifyBlockAt(vv, zv, Pv) {
        return 1 === this.api.queries.canModify(vv, zv, Pv)
      }
      isSolidToPlayerBlockId(vv) {
        return this.tables.isSolidBlockId(vv) && !this.chunks.isWalkThrough(vv)
      }
      blockNameToBlockId(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.tables.blockNameToBlockId(vv, zv)
      }
      blockIdToBlockName(vv) {
        return this.tables.nameOfId(vv)
      }
      gvv(vv, zv, Pv, hv, Sv) {
        return 1 === this.api.queries.terrainBlocked(hv, vv, zv, Pv, gP(null !== Sv && void 0 !== Sv ? Sv : null))
      }
      getChunkVersion(vv, zv, Pv) {
        return this.chunks.version(vv, zv, Pv)
      }
      scanBlocks(vv, zv, Pv, hv, Sv, ev, gv, pv) {
        return this.chunks.scan(vv, zv, Pv, hv, Sv, ev, gv, pv)
      }
      isBlockInLoadedChunk(vv, zv, Pv) {
        return this.chunks.isLoaded(vv, zv, Pv)
      }
      getBlockId(vv, zv, Pv) {
        return this.chunks.yN(vv, zv, Pv)
      }
      playSound(vv, zv, Pv, hv, Sv) {
        let ev = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        if (!this.isLocal(vv)) return null;
        const gv = this.playSoundFrom(zv, Pv, Sv, ev);
        return 1 === hv ? gv : gv.rate(hv)
      }
      preloadSounds(vv) {
        var zv, Pv;
        null === (zv = (Pv = this.deps).preloadSounds) || void 0 === zv || zv.call(Pv, vv)
      }
      playSoundFrom(vv, zv, Pv, hv) {
        var Sv, ev;
        const gv = this.deps.playSound;
        if (!gv) return Oz.d;
        const pv = null === Pv || void 0 === Pv ? void 0 : Pv.xP,
          dv = null !== (Sv = null === Pv || void 0 === Pv ? void 0 : Pv.maxHearDist) && void 0 !== Sv ? Sv : lz.d,
          Nv = null !== (ev = null === Pv || void 0 === Pv ? void 0 : Pv.refDistance) && void 0 !== ev ? ev : lz.e;
        let lv = null;
        if (Array.isArray(pv)) bz[0] = pv[0], bz[1] = pv[1], bz[2] = pv[2], lv = bz;
        else if (void 0 !== pv && null !== pv) {
          const vv = gP(pv);
          if (!this.api.isLocal(vv)) {
            if (!this.api.readPosition(vv, bz)) return Oz.d;
            lv = bz
          }
        }
        return gv(vv, zv, lv, lv && this.ear(), dv, Nv, hv)
      }
      ear() {
        if (this.api.readPosition(this.api.localId, rz)) rz[1] += Kz;
        else {
          const vv = this.api.apiView;
          if (0 === av.t.viewProj(vv, 0, 3) && 0 === av.t.viewProj(vv, 0, 7) && 0 === av.t.viewProj(vv, 0, 11)) return null;
          for (let zv = 0; zv < 3; zv++) rz[zv] = av.t.eye(vv, 0, zv)
        }
        return Number.isFinite(rz[0] + rz[1] + rz[2]) ? rz : null
      }
      setBlockId(vv, zv, Pv, hv) {
        if (!Number.isInteger(hv) || hv < 0 || hv > 65535) throw new Error(`Invalid block id ${hv}`);
        if (!this.deps.beforeWrite() || !this.chunks.isLoaded(vv, zv, Pv)) return;
        const Sv = Math.floor(vv),
          ev = Math.floor(zv),
          gv = Math.floor(Pv),
          pv = this.predictedCells(Sv, ev, gv, hv);
        if (1 === this.api.queries.eD(Sv, ev, gv, hv)) {
          for (let vv = 0; vv < pv.length; vv += 5) this.chunks.setOverlay(pv[vv], pv[vv + 1], pv[vv + 2], pv[vv + 3], 1 === pv[vv + 4]);
          this.live.refreshTarget()
        }
      }
      particlesEnabled() {
        return this.deps.particles.enabled()
      }
      createParticles(vv, zv) {
        return this.deps.particles.create(vv, zv)
      }
      playParticleEffect(vv) {
        this.deps.particles.playEffect(vv)
      }
      burstParticlePreset(vv, zv, Pv) {
        this.deps.particles.burstPreset(vv, zv, Pv)
      }
      createGameMesh(vv, zv, Pv) {
        const hv = ++this.meshKeys,
          Sv = this.deps.cmd();
        if (!Sv) return hv;
        const {
          look: ev,
          colour: gv
        } = function(vv) {
          switch (vv.kind) {
            case void 0:
            case "flatEmissive":
              return vv.onTop ? {
                look: av.bc.FlatOnTop,
                colour: [...vv.rgb, vv.alpha]
              } : vv.opaque ? {
                look: av.bc.FlatOpaque,
                colour: [...vv.rgb, 1]
              } : {
                look: av.bc.Flat,
                colour: [...vv.rgb, vv.alpha]
              };
            case "chevronPath":
              return {
                look: av.bc.Chevrons, colour: [...(0, wz.b)(vv.colour), vv.alpha]
              };
            case "furnaceFire":
              return {
                look: av.bc.FurnaceFire, colour: [1, 1, 1, 1]
              }
          }
        }(zv), pv = Math.floor(vv.positions.length / 3), dv = function(vv, zv) {
          const Pv = Math.floor(vv.positions.length / 3),
            hv = vv.indices.length,
            Sv = Pv * (zv ? 5 : 3),
            ev = new Uint8Array(4 * (Sv + hv)),
            gv = new DataView(ev.buffer);
          for (let Nv = 0; Nv < 3 * Pv; Nv++) gv.setFloat32(4 * Nv, vv.positions[Nv], !0);
          if (zv) {
            var pv;
            const zv = null !== (pv = vv.uvs) && void 0 !== pv ? pv : [];
            for (let vv = 0; vv < 2 * Pv; vv++) {
              var dv;
              gv.setFloat32(4 * (3 * Pv + vv), null !== (dv = zv[vv]) && void 0 !== dv ? dv : 0, !0)
            }
          }
          for (let Nv = 0; Nv < hv; Nv++) gv.setUint32(4 * (Sv + Nv), vv.indices[Nv], !0);
          return ev
        }(vv, (0, dz.g)(zv));
        return (0, av.Fe)(Sv, 0, hv, ev, gv, Pv, pv, vv.indices.length, dv) && this.liveMeshes.add(hv), hv
      }
      setGameMesh(vv, zv) {
        var Pv;
        const hv = this.deps.cmd();
        if (!hv) return;
        let Sv = 0;
        zv.anchor && (Sv |= av.cc.Anchor, vP[0] = zv.anchor[0], vP[1] = zv.anchor[1], vP[2] = zv.anchor[2]), void 0 !== zv.visible && (Sv |= av.cc.Visible), zv.uvOffset && (Sv |= av.cc.UvOffset, zP[0] = zv.uvOffset[0], zP[1] = zv.uvOffset[1]);
        const ev = null !== (Pv = zv.visibility) && void 0 !== Pv ? Pv : 1;
        void 0 !== zv.visibility && (Sv |= av.cc.Visibility), zv.scale && (Sv |= av.cc.Scale, PP[0] = zv.scale[0], PP[1] = zv.scale[1], PP[2] = zv.scale[2]), 0 !== Sv && (0, av.Ke)(hv, 0, vv, Sv, zv.visible ? 1 : 0, vP, zP, ev, PP)
      }
      disposeGameMesh(vv) {
        const zv = this.deps.cmd();
        zv && !(0, av.Je)(zv, 0, vv) || this.liveMeshes.delete(vv)
      }
      hasPackModel(vv) {
        var zv, Pv, hv;
        return null !== (zv = null === (Pv = (hv = this.deps).hasPackModel) || void 0 === Pv ? void 0 : Pv.call(hv, vv)) && void 0 !== zv && zv
      }
      disposeGameOutput() {
        const vv = vv => {
          try {
            vv()
          } catch (zv) {
            console.error("Error freeing client game output", zv)
          }
        };
        for (const zv of [...this.liveMeshes]) vv((() => {
          this.disposeGameMesh(zv)
        }));
        for (const zv of [...this.livePools]) vv((() => {
          zv.dispose()
        }));
        vv((() => {
          this.mobModels.disposeAll()
        })), vv((() => {
          this.setGroundArrowStyle(null)
        })), vv((() => {
          this.setRouteChevrons(null), this.routeOffset = 0, this.routeLook = ""
        })), vv((() => {
          this.setCrosshairShown(null)
        })), vv((() => {
          this.cameraTurn.dispose()
        })), vv((() => {
          this.farSet && (this.farSet = !1, this.setCameraFar(null))
        }))
      }
      createInstancePool(vv, zv) {
        const Pv = this.tables.idOf(vv.item);
        if (void 0 === Pv) return null;
        const hv = new Lz(++this.poolKeys, {
          item: Pv,
          scale: vv.scale,
          yaw: vv.yaw
        }, zv, this.poolHost);
        return this.livePools.add(hv), hv
      }
      createMobModel(vv, zv) {
        return this.mobModels.create(vv, zv)
      }
      setRouteChevrons(vv) {
        if (0 !== this.routeMesh && (this.disposeGameMesh(this.routeMesh), this.routeMesh = 0), !vv || 0 === vv.cells.length) return;
        const zv = `${vv.colour} ${vv.alpha}`;
        zv !== this.routeLook && (this.routeLook = zv, this.routeOffset = 0), this.routeMesh = this.createGameMesh(function(vv) {
          const [zv, Pv, hv] = vv[0].pos, Sv = [], ev = [], gv = [];
          return vv.forEach(((vv, pv) => {
            let {
              pos: dv,
              way: [Nv, lv]
            } = vv;
            const Tv = dv[0] - zv + .5,
              Wv = dv[1] - Pv + .04,
              wv = dv[2] - hv + .5,
              [av, sv] = [.35 * -lv, .35 * Nv],
              [Cv, iv] = [pv * hP, (pv + 1) * hP],
              cv = Sv.length / 3;
            Sv.push(Tv - .5 * Nv + av, Wv, wv - .5 * lv + sv), Sv.push(Tv - .5 * Nv - av, Wv, wv - .5 * lv - sv), Sv.push(Tv + .5 * Nv + av, Wv, wv + .5 * lv + sv), Sv.push(Tv + .5 * Nv - av, Wv, wv + .5 * lv - sv), ev.push(0, Cv, 1, Cv, 0, iv, 1, iv), gv.push(cv, cv + 1, cv + 2, cv + 1, cv + 3, cv + 2)
          })), {
            positions: Sv,
            uvs: ev,
            indices: gv
          }
        }(vv.cells), {
          kind: "chevronPath",
          colour: vv.colour,
          alpha: vv.alpha
        }, vv.cells[0].pos), this.setRouteSlide()
      }
      slideRoute(vv) {
        0 !== this.routeMesh && (this.routeOffset = (this.routeOffset + Math.min(vv, 250) / 1e3 * 1.2 * hP) % 1, this.setRouteSlide())
      }
      setRouteSlide() {
        this.routeSlide.uvOffset[1] = -this.routeOffset, this.setGameMesh(this.routeMesh, this.routeSlide)
      }
      setGroundArrowStyle(vv) {
        this.pendingStyle = vv, this.flushOwed()
      }
      flushOwed() {
        this.mobModels.flush();
        const vv = this.owedFrees;
        if (0 === vv.length && void 0 === this.pendingStyle && void 0 === this.pendingFar) return;
        const zv = this.deps.cmd();
        if (!zv) return vv.length = 0, void(this.pendingFar = void 0);
        let Pv = 0;
        for (; Pv < vv.length && (0, av.Se)(zv, 0, vv[Pv]);) Pv++;
        vv.splice(0, Pv);
        const hv = this.pendingStyle;
        if (void 0 !== hv) {
          (hv ? (0, av.Rf)(zv, 0, hv.width, hv.alpha, 1, hv.endAtSolidFace ? 1 : 0) : (0, av.Rf)(zv, 0, 0, 0, 0, 0)) && (this.pendingStyle = void 0)
        }
        const Sv = this.pendingFar;
        void 0 !== Sv && (0, av.Mf)(zv, 0, null !== Sv && void 0 !== Sv ? Sv : 0, null === Sv ? 1 : 0) && (this.pendingFar = void 0)
      }
      setNametagOffset(vv, zv) {
        const Pv = this.deps.cmd(),
          hv = gP(vv);
        Pv && hv !== av.ad && (0, av.Vf)(Pv, 0, hv, zv)
      }
      setFacingTolerance(vv, zv) {
        const Pv = this.deps.cmd(),
          hv = gP(vv);
        Pv && hv !== av.ad && pP(Pv, hv, zv)
      }
      forEachEntity(vv) {
        const {
          api: zv
        } = this;
        for (let Pv = 0; Pv < zv.idStr.length; Pv++) {
          const hv = zv.idStr[Pv];
          null === hv || jv(zv.kinds[Pv]) || vv(hv)
        }
      }
      getEntityInfo(vv) {
        return this.deps.entityInfo.get(vv)
      }
      isEntityInteractable(vv) {
        const zv = gP(vv);
        return zv !== av.ad && 1 === this.api.queries.entityInteractable(zv)
      }
      isLocalPlayer(vv) {
        return this.isLocal(vv)
      }
      getLineOwner(vv) {
        var zv;
        const Pv = null === (zv = this.deps.entityInfo.get(vv)) || void 0 === zv ? void 0 : zv.meshOpts;
        if (!Pv) return null;
        try {
          const {
            lineToEId: vv
          } = JSON.parse(Pv);
          return null !== vv && void 0 !== vv ? vv : null
        } catch {
          return null
        }
      }
      getCameraPosition() {
        const vv = this.api.apiView;
        return Xz[0] = av.t.eye(vv, 0, 0), Xz[1] = av.t.eye(vv, 0, 1), Xz[2] = av.t.eye(vv, 0, 2), Xz
      }
      getCameraFar() {
        return av.t.cameraFar(this.api.apiView, 0)
      }
      setCameraFar(vv) {
        null !== vv && (this.farSet = !0), this.pendingFar = vv, this.flushOwed()
      }
      turnCamera(vv, zv) {
        this.cameraTurn.turn(vv, zv)
      }
      clearPickupDelay(vv) {
        const zv = this.deps.cmd(),
          Pv = gP(vv);
        zv && Pv !== av.ad && (0, av.te)(zv, 0, Pv)
      }
      sendChat(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const Pv = this.deps.sendCmd();
        Pv && Jz(Pv, 0, oz.d.Chat, (0, Iv.f)((0, oz.i)({
          al: vv,
          sl: zv
        })))
      }
      sendCommand(vv) {
        vv.length <= 119 && this.sendChat(`/${vv}`)
      }
      predictedCells(vv, zv, Pv, hv) {
        const Sv = this.chunks,
          ev = [],
          gv = (vv, zv, Pv, hv, Sv) => {
            ev.push(vv, zv, Pv, hv, this.tables.blockRootId(Sv) === this.tables.blockRootId(hv) ? 0 : 1)
          },
          pv = Sv.yN(vv, zv, Pv),
          dv = eP(pv);
        if (dv) {
          const [hv, ev, Nv] = [vv - dv.x, zv - dv.y, Pv - dv.z], lv = SP[Sv.yN(hv, ev, Nv)], Tv = null === lv || void 0 === lv ? void 0 : lv.positions.some((vv => vv.id === pv && vv.x === dv.x && vv.y === dv.y && vv.z === dv.z));
          for (const vv of (Tv && lv ? lv : dv.main).positions) Sv.yN(hv + vv.x, ev + vv.y, Nv + vv.z) === vv.id && gv(hv + vv.x, ev + vv.y, Nv + vv.z, 0, vv.id)
        }
        const Nv = eP(hv);
        if (Nv)
          for (const Tv of Nv.main.positions) {
            const [hv, ev, pv] = [vv + Tv.x - Nv.x, zv + Tv.y - Nv.y, Pv + Tv.z - Nv.z];
            gv(hv, ev, pv, Tv.id, Sv.yN(hv, ev, pv))
          } else gv(vv, zv, Pv, hv, pv);
        const lv = this.tables;
        if ((0 !== lv.attachedTopOf(pv) || 0 !== lv.attachedTopOf(hv)) && Sv.isLoaded(vv, zv + 1, Pv)) {
          let dv = Sv.yN(vv, zv + 1, Pv);
          for (let hv = 0; hv < ev.length; hv += 5) ev[hv] === vv && ev[hv + 1] === zv + 1 && ev[hv + 2] === Pv && (dv = ev[hv + 3]);
          const Nv = this.attachedTopWrite(pv, hv, dv);
          void 0 !== Nv && gv(vv, zv + 1, Pv, Nv, dv)
        }
        return ev
      }
      attachedTopWrite(vv, zv, Pv) {
        const hv = this.tables,
          Sv = hv.attachedTopOf(vv),
          ev = hv.attachedTopOf(zv),
          gv = 0 !== Sv && 0 !== Pv && hv.blockRootId(Pv) === hv.blockRootId(Sv);
        return 0 !== Sv && 0 !== ev && hv.blockRootId(vv) === hv.blockRootId(zv) ? gv && Pv !== ev ? ev : void 0 : 0 === ev || !gv && 0 !== Pv ? gv ? 0 : void 0 : ev
      }
    }
    const NP = av.nc + av.qc * av.yc.BYTES,
      lP = 2147483647,
      TP = new TextDecoder,
      WP = new TextEncoder,
      wP = Object.freeze({
        Cp: 0,
        Vl: null,
        amountAddedToSlot: 0
      }),
      aP = new Proxy({}, {
        get: () => () => av.jd
      });

    function sP(vv) {
      return Number.isInteger(vv) && vv >= 0 && vv <= 65535
    }

    function CP(vv) {
      return Number.isInteger(vv) && vv >= 0 && vv <= 4294967295
    }
    class iP {
      constructor(vv) {
        this.deps = vv, this.PS = [0, 0, 0], this.inaccuracy = 0, this.version = 0, this.notified = 0, this.iconChanged = !1, this.facades = new Array(av.qc), this.ids = new Uint16Array(av.qc), this.amounts = new Uint16Array(av.qc), this.attrRead = new Float64Array(av.qc).fill(-1), this.stale = new Uint16Array(av.qc), this.staleVersion = new Uint32Array(av.qc), this.instances = new Uint32Array(av.qc), this.viewPtr = 0, this.viewVersion = -1, this.len = 0, this.selected = 0, this.slotIconId = 0, this.stopped = !1, this.listeners = new Set
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
      slot(vv) {
        var zv;
        return Number.isInteger(vv) && vv >= 0 && vv < this.len && 0 !== this.ids[vv] && null !== (zv = this.facades[vv]) && void 0 !== zv ? zv : null
      }
      Vp() {
        return this.slot(this.selected)
      }
      playerItems() {
        const vv = [];
        for (let zv = 0; zv < Math.min(av.vd, this.len); zv++) vv.push(this.slot(zv));
        return vv
      }
      freeSlots() {
        let vv = 0;
        for (let zv = 0; zv < Math.min(av.vd - av.g, this.len); zv++) 0 === this.ids[zv] && vv++;
        return vv
      }
      amountOf(vv) {
        let zv = 0;
        for (let hv = 0; hv < Math.min(av.vd, this.len); hv++) {
          const Sv = this.slot(hv);
          var Pv;
          if ((null === Sv || void 0 === Sv ? void 0 : Sv.name) === vv) zv += null !== (Pv = Sv.amount) && void 0 !== Pv ? Pv : 1
        }
        return zv
      }
      instance(vv) {
        var zv;
        return null !== (zv = this.instances[vv]) && void 0 !== zv ? zv : 0
      }
      watch(vv) {
        return this.listeners.add(vv), () => {
          this.listeners.delete(vv)
        }
      }
      touch() {
        this.version++
      }
      flush(vv) {
        if (this.version !== this.notified || this.iconChanged) {
          this.notified = this.version, this.iconChanged = !1;
          for (const Pv of [...this.listeners]) try {
            Pv()
          } catch (zv) {
            vv(zv)
          }
        }
      }
      chestOpened(vv, zv, Pv) {
        this.PS[0] = vv, this.PS[1] = zv, this.PS[2] = Pv, this.version++
      }
      refresh() {
        const vv = this.deps.api.apiView,
          zv = av.t.inventoryViewPtr(vv, 0),
          Pv = av.t.inventoryVersion(vv, 0),
          hv = av.t.selectedSlot(vv, 0);
        hv !== this.selected && (this.selected = hv, this.version++);
        const Sv = av.t.slotIcon(vv, 0);
        if (Sv !== this.slotIconId && (this.slotIconId = Sv, this.iconChanged = !0), zv === this.viewPtr && Pv === this.viewVersion) return;
        this.viewPtr = zv, this.viewVersion = Pv;
        const ev = this.deps.api.memoryData(zv, NP, 4, "the inventory view"),
          gv = ev ? Math.min(ev.getUint32(0, !0), av.qc) : 0;
        gv !== this.len && (this.len = gv, this.version++);
        let pv = 0;
        for (let dv = 0; dv < av.qc; dv++) {
          const vv = av.nc + dv * av.yc.BYTES,
            zv = null !== ev && dv < gv ? av.yc.item(ev, vv) : 0;
          if (0 === zv || null === ev) {
            0 !== this.ids[dv] && (this.ids[dv] = 0, this.attrRead[dv] = -1, this.instances[dv]++, this.version++);
            continue
          }
          const Pv = av.yc.amount(ev, vv),
            hv = av.yc.attrVersion(ev, vv);
          zv === this.ids[dv] && Pv === this.amounts[dv] || this.fill(dv, zv, Pv), hv !== this.attrRead[dv] && (this.stale[pv] = dv, this.staleVersion[pv] = hv, pv++)
        }
        pv > 0 && this.fetchAttributes(pv)
      }
      fill(vv, zv, Pv) {
        const {
          tables: hv
        } = this.deps, Sv = zv !== this.ids[vv];
        let ev = this.facades[vv];
        ev || (ev = {
          name: "",
          amount: null,
          attributes: {
            customAttributes: {}
          },
          typeObj: null
        }, this.facades[vv] = ev), Sv && (ev.name = hv.nameOfId(zv), ev.typeObj = hv.itemType(zv), ev.attributes = {
          customAttributes: {}
        }, this.attrRead[vv] = -1, this.instances[vv]++), ev.amount = 0 === Pv ? null : Pv, this.ids[vv] = zv, this.amounts[vv] = Pv, this.version++
      }
      fetchAttributes(vv) {
        const {
          api: zv,
          onError: Pv
        } = this.deps, hv = zv.memoryView(Uint16Array, zv.scratch(), vv, "item_attributes_batch's slots");
        if (!hv) return void this.markRead(vv);
        hv.set(this.stale.subarray(0, vv));
        const Sv = zv.queries.itemAttributesBatch(vv),
          ev = 4294967295 === Sv ? null : zv.memoryData(zv.scratch(), Sv, 4, "item_attributes_batch's answer");
        if (!ev) return void this.markRead(vv);
        const gv = new Uint8Array(ev.buffer, ev.byteOffset, Sv);
        for (let dv = 0; dv + 8 <= Sv;) {
          const vv = ev.getUint16(dv, !0),
            zv = ev.getUint32(dv + 4, !0),
            hv = gv.subarray(dv + 8, dv + 8 + zv);
          dv += 8 + (0, Wv.Le)(zv);
          const Sv = this.facades[vv];
          if (Sv && 0 !== this.ids[vv] && 0 !== zv) {
            try {
              Sv.attributes = JSON.parse(TP.decode(hv))
            } catch (pv) {
              Pv(pv)
            }
            this.version++
          }
        }
        this.markRead(vv)
      }
      markRead(vv) {
        for (let zv = 0; zv < vv; zv++) this.attrRead[this.stale[zv]] = this.staleVersion[zv]
      }
      swap(vv, zv) {
        return sP(vv) && sP(zv) && this.settle(this.queries().invSwap(vv, zv))
      }
      move(vv, zv, Pv) {
        return sP(vv) && sP(zv) && CP(Pv) && this.settle(this.queries().invMove(vv, zv, Pv))
      }
      quickMove(vv, zv, Pv, hv) {
        var Sv, ev;
        if (!sP(vv) || !sP(zv) || !sP(Pv) || null !== hv && !CP(hv)) return null;
        const gv = this.queries().invQuickMove(vv, zv, Pv, null === hv ? -1 : Math.min(hv, lP)),
          pv = gv === av.jd ? av.Nb : null !== (Sv = null === (ev = this.extras()) || void 0 === ev ? void 0 : ev[1]) && void 0 !== Sv ? Sv : av.Nb;
        return this.settle(gv), pv === av.Nb ? null : pv
      }
      remove(vv, zv, Pv) {
        return sP(vv) && CP(zv) && this.settle(this.queries().invRemove(vv, zv, Pv ? 1 : 0))
      }
      selectSlot(vv) {
        return sP(vv) && this.settle(this.queries().selectSlot(vv))
      }
      closeChest() {
        return this.settle(this.queries().closeChest())
      }
      enchant(vv, zv, Pv) {
        if (!sP(vv) || !Number.isInteger(zv)) return !1;
        const [hv, Sv, ev] = Pv;
        return this.settle(this.queries().invEnchant(vv, zv, Math.floor(hv), Math.floor(Sv), Math.floor(ev)))
      }
      craft(vv, zv, Pv) {
        let hv;
        try {
          hv = this.deps.tables.getItemId(vv)
        } catch {
          return wP
        }
        if (!sP(zv) || null !== Pv && (Number.isNaN(Pv) || Pv < 0)) return wP;
        const Sv = null === Pv || Pv > lP ? -1 : Math.floor(Pv),
          ev = this.queries().craft(hv, zv, Sv);
        let gv = wP;
        const pv = ev === av.jd ? null : this.extras();
        if (pv) {
          const [vv, zv, Pv] = pv;
          gv = {
            Cp: vv,
            Vl: zv === av.Nb ? null : zv,
            amountAddedToSlot: Pv
          }
        }
        return this.settle(ev), gv
      }
      salvage(vv, zv, Pv) {
        let hv;
        try {
          hv = this.deps.tables.getItemId(zv)
        } catch {
          return !1
        }
        return sP(vv) && Number.isInteger(Pv) && this.settle(this.queries().salvage(vv, hv, Math.max(Math.min(Pv, lP), -lP)))
      }
      craftingView(vv, zv, Pv) {
        var hv;
        if (this.stopped) return null;
        const {
          api: Sv,
          onError: ev
        } = this.deps, gv = vv ? WP.encode(vv) : null;
        if (null !== gv) {
          if (gv.length > 1024) return ev(new Error(`The crafting station ${vv}'s name is over 1024 bytes`)), null;
          const zv = Sv.memoryView(Uint8Array, Sv.scratch(), gv.length, "crafting_view's station");
          if (!zv) return null;
          zv.set(gv)
        }
        const pv = sP(zv) && sP(Pv),
          dv = Sv.queries.craftingView(null !== (hv = null === gv || void 0 === gv ? void 0 : gv.length) && void 0 !== hv ? hv : 0, pv ? zv : 0, pv ? Pv : 0);
        return dv < av.ib.BYTES ? (Sv.reportCorruption(`crafting_view's answer of ${dv} bytes`), null) : Sv.memoryData(Sv.scratch(), dv, 1, "crafting_view's answer")
      }
      queries() {
        var vv, zv;
        return !1 === (null === (vv = (zv = this.deps).beforeOp) || void 0 === vv ? void 0 : vv.call(zv)) ? (this.stopped = !0, aP) : this.deps.api.queries
      }
      extras() {
        const {
          api: vv
        } = this.deps;
        return vv.memoryView(Uint32Array, vv.scratch(), 3, "a sync query's extra words")
      }
      settle(vv) {
        if (vv === av.id)(0, Bz.b)();
        else if (vv !== av.jd) {
          const zv = this.deps.cmd();
          zv && function(vv, zv, Pv) {
            return (0, Bz.b)(), (0, av.dg)(vv, zv, Pv)
          }(zv, 0, vv) || this.deps.onError(new Error(`Sync op ${vv}'s marker didn't fit the command ring: its send goes after the next frame's commands`))
        }
        return this.stopped || this.refresh(), vv !== av.jd
      }
    }
    const cP = 1 / .6,
      GP = [0, 1, 0],
      mP = [0, 0, 0],
      jP = new Uint8Array(0),
      fP = 1.2 * az.f.pG,
      FP = new TextEncoder,
      YP = [0, 0, 0],
      nP = [0, 0, 0],
      OP = new Map;

    function DP(vv) {
      let zv = OP.get(vv);
      return zv || (OP.size >= 64 && OP.clear(), zv = FP.encode(`{"emitRate":${vv}}`), OP.set(vv, zv)), zv
    }

    function KP(vv) {
      return Number.isFinite(vv) && vv > 0 ? vv : 0
    }

    function VP(vv, zv) {
      for (let Pv = 0; Pv < 3; Pv++) {
        const hv = Math.abs(zv[Pv]);
        YP[Pv] = vv[Pv] - hv, nP[Pv] = 2 * hv
      }
      return Number.isFinite(YP[0] + YP[1] + YP[2] + nP[0] + nP[1] + nP[2])
    }

    function UP(vv, zv) {
      return "pos1" === vv || "pos2" === vv ? void 0 : zv
    }

    function RP(vv, zv, Pv) {
      return vv.length > av.Fd.MaxOpts ? (Pv(new Error(`${zv}'s particle opts are over ${av.Fd.MaxOpts} bytes of JSON`)), null) : vv
    }
    const xP = {
      moveTo() {},
      setEmitRate() {},
      emit() {},
      emitPoints() {},
      setDirections() {},
      stop() {},
      dispose() {}
    };
    class tP {
      constructor(vv) {
        this.deps = vv, this.session = 0, this.nextKey = 1, this.live = 0, this.started = !1
      }
      enabled() {
        return null !== this.sink()
      }
      sink() {
        return this.deps.isSessionLive() ? this.deps.cmd() : null
      }
      create(vv, zv) {
        var Pv;
        const hv = this.sink(),
          Sv = null !== (Pv = zv.half) && void 0 !== Pv ? Pv : mP;
        if (!hv || this.live >= av.Fd.MaxLiveKeys || this.nextKey > av.Fd.MaxKey || !VP(zv.pos, Sv)) return xP;
        const ev = this.nextKey,
          gv = RP(function(vv) {
            var zv, Pv, hv;
            const Sv = JSON.stringify({
              texture: "string" === typeof vv.texture ? vv.texture : "smokePuff",
              GT: vv.GT,
              minLifeTime: vv.minLifeTime,
              maxLifeTime: vv.maxLifeTime,
              minSize: vv.minSize,
              maxSize: vv.maxSize,
              minEmitPower: vv.minEmitPower,
              maxEmitPower: vv.maxEmitPower,
              emitRate: KP(vv.emitRate),
              gravity: null !== (zv = vv.gravity) && void 0 !== zv ? zv : mP,
              dir1: null !== (Pv = vv.dir1) && void 0 !== Pv ? Pv : GP,
              dir2: null !== (hv = vv.dir2) && void 0 !== hv ? hv : GP,
              colorGradients: vv.colorGradients,
              blendMode: vv.blendMode
            });
            return FP.encode(Sv)
          }(vv), "createParticles", this.deps.onError);
        return gv && (0, av.kf)(hv, 0, ev, 0, av.Fd.PresetNone, 0, YP, nP, gv) ? (this.nextKey++, this.live++, this.started = !0, new qP(this, this.session, ev, vv, Sv)) : xP
      }
      playEffect(vv) {
        const zv = this.sink(),
          {
            pos1: Pv,
            pos2: hv
          } = vv;
        if (!zv || !Pv || !hv) return;
        for (let ev = 0; ev < 3; ev++) YP[ev] = Math.min(Pv[ev], hv[ev]), nP[ev] = Math.abs(hv[ev] - Pv[ev]);
        if (!Number.isFinite(YP[0] + YP[1] + YP[2] + nP[0] + nP[1] + nP[2])) return;
        const Sv = RP(FP.encode(JSON.stringify(vv, UP)), "playParticleEffect", this.deps.onError);
        Sv && (0, av.ff)(zv, 0, 0, av.Fd.PresetNone, av.Fd.HasBox, 0, YP, nP, Sv)
      }
      burstPreset(vv, zv, Pv) {
        const hv = this.sink(),
          Sv = Math.min(Math.floor(Pv), av.Fd.MaxBurst);
        if (!hv || !Object.hasOwn(av.fc, vv) || !(Sv > 0)) return;
        const ev = fP;
        for (let gv = 0; gv < 3; gv++) YP[gv] = zv[gv] - ev / 2, nP[gv] = ev;
        Number.isFinite(YP[0] + YP[1] + YP[2]) && (0, av.ff)(hv, 0, 0, av.fc[vv], av.Fd.HasBox, Sv, YP, nP, jP)
      }
      sessionEnded() {
        this.session++;
        const vv = this.started ? this.deps.cmd() : null;
        return this.started = !1, this.nextKey = 1, this.live = 0, !vv || (0, av.nf)(vv, 0)
      }
      sinkFor(vv) {
        return vv === this.session ? this.deps.cmd() : null
      }
      stop(vv, zv) {
        const Pv = this.sinkFor(vv);
        Pv && (0, av.rf)(Pv, 0, zv) && this.live--
      }
    }
    class qP {
      constructor(vv, zv, Pv, hv, Sv) {
        this.owner = vv, this.session = zv, this.key = Pv, this.half = void 0, this.rate = void 0, this.stopDelayMs = void 0, this.emitted = void 0, this.stopped = !1, this.freed = !1, this.half = [Math.abs(Sv[0]), Math.abs(Sv[1]), Math.abs(Sv[2])], this.rate = KP(hv.emitRate), this.emitted = this.rate > 0;
        const ev = hv.maxLifeTime * cP * 1e3 + 250;
        this.stopDelayMs = ev >= 0 ? Math.min(ev, 2147483647) : 250
      }
      sink() {
        return this.stopped ? null : this.owner.sinkFor(this.session)
      }
      moveTo(vv, zv) {
        const Pv = this.sink();
        if (Pv) {
          if (zv)
            for (let vv = 0; vv < 3; vv++) this.half[vv] = Math.abs(zv[vv]);
          VP(vv, this.half) && (0, av.sf)(Pv, 0, this.key, av.Fd.HasBox, YP, nP, jP)
        }
      }
      setEmitRate(vv) {
        const zv = this.sink(),
          Pv = KP(vv);
        zv && Pv !== this.rate && (0, av.sf)(zv, 0, this.key, 0, mP, mP, DP(Pv)) && (this.rate = Pv, this.emitted ||= Pv > 0)
      }
      emit(vv) {
        const zv = this.sink(),
          Pv = Math.min(Math.floor(vv), av.Fd.MaxBurst);
        zv && Pv > 0 && (0, av.ff)(zv, 0, this.key, av.Fd.PresetNone, 0, Pv, mP, mP, jP) && (this.emitted = !0)
      }
      emitPoints(vv, zv, Pv) {
        const hv = this.sink(),
          Sv = Math.min(Math.floor(Pv), av.Fd.MaxPoints, Math.floor(zv.length / 4));
        if (!hv || !(Sv > 0) || !Number.isFinite(vv[0] + vv[1] + vv[2])) return;
        const ev = new Uint8Array(zv.buffer, zv.byteOffset, Sv * av.Fd.PointBytes);
        (0, av.gf)(hv, 0, this.key, Sv, vv, ev) && (this.emitted = !0)
      }
      setDirections(vv, zv) {
        const Pv = this.sink();
        if (!Pv || !Number.isFinite(vv[0] + vv[1] + vv[2] + zv[0] + zv[1] + zv[2])) return;
        const hv = FP.encode(JSON.stringify({
          dir1: [vv[0], vv[1], vv[2]],
          dir2: [zv[0], zv[1], zv[2]]
        }));
        (0, av.sf)(Pv, 0, this.key, 0, mP, mP, hv)
      }
      stop() {
        const vv = this.sink();
        this.stopped = !0, vv && (this.emitted ? (this.rate > 0 && (0, av.sf)(vv, 0, this.key, 0, mP, mP, DP(0)), setTimeout((() => {
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
    const IP = Hz.u,
      QP = new TextDecoder;

    function ZP(vv, zv) {
      const {
        serverIds: Pv,
        kinds: hv
      } = vv;
      let Sv = 0;
      for (let ev = 0; ev < Pv.length; ev++) {
        const vv = Pv[ev];
        if (vv !== av.ad && !jv(hv[ev])) {
          if (Sv === zv.length) {
            const vv = new Int32Array(Math.max(64, 2 * Sv));
            vv.set(zv), zv = vv
          }
          zv[Sv++] = vv
        }
      }
      return {
        ids: zv,
        count: Sv
      }
    }

    function AP(vv, zv) {
      return vv.length >= zv ? vv : new Int32Array(Math.max(zv, 2 * vv.length))
    }

    function LP(vv, zv, Pv, hv) {
      for (let Sv = 0; Sv < Pv; Sv += 4096) {
        const ev = Math.min(4096, Pv - Sv),
          gv = vv.memoryView(Int32Array, vv.scratch(), ev, "entity_info_batch's ids");
        if (!gv) return !1;
        gv.set(zv.subarray(Sv, Sv + ev));
        const pv = vv.queries.entityInfoBatch(ev),
          dv = 4294967295 === pv ? null : vv.memoryData(vv.scratch(), pv, 4, "entity_info_batch's records");
        if (!dv) return !1;
        for (let vv = 0; vv + av.Wb.BYTES <= pv;) {
          const zv = av.Wb.len(dv, vv);
          hv(av.Wb.serverId(dv, vv), HP(dv, vv, zv)), vv += av.Wb.BYTES + (0, Wv.Le)(zv)
        }
      }
      return !0
    }

    function HP(vv, zv, Pv) {
      var hv, Sv, ev;
      const gv = av.Wb.kind(vv, zv),
        pv = 0 === gv ? null : fv(gv);
      if (null === pv) return null;
      const dv = av.Wb.variation(vv, zv),
        Nv = av.Wb.pose(vv, zv),
        lv = av.Wb.meta(vv, zv),
        Tv = av.Wb.mesh(vv, zv),
        Wv = 0 !== (av.Wb.flags(vv, zv) & av.Sb.HasOpts),
        wv = IP[pv];
      return Object.freeze({
        type: pv,
        variation: dv === av.fd ? void 0 : null !== (hv = null !== (Sv = null === wv || void 0 === wv ? void 0 : wv[dv]) && void 0 !== Sv ? Sv : null === wv || void 0 === wv ? void 0 : wv[0]) && void 0 !== hv ? hv : "default",
        pose: Nv === av.kc ? void 0 : null !== (ev = av.Gb[Nv]) && void 0 !== ev ? ev : av.Gb[0],
        metaInfo: lv === av.kc ? void 0 : av.Yc[lv],
        meshKind: Tv === av.kc ? void 0 : av.Uc[Tv],
        meshOpts: Wv ? QP.decode(new Uint8Array(vv.buffer, vv.byteOffset + zv + av.Wb.BYTES, Pv)) : void 0
      })
    }
    const MP = 1,
      yP = 2;
    class BP {
      constructor(vv) {
        this.deps = vv, this.wanted = 0, this.Vp = !1, this.refused = !1
      }
      get on() {
        return this.Vp
      }
      want(vv, zv) {
        this.wanted = zv ? this.wanted | vv : this.wanted & ~vv;
        const Pv = 0 !== this.wanted;
        if (Pv === this.Vp) return;
        const hv = this.deps.cmd();
        null !== hv ? (0, av.jg)(hv, 0, Pv ? 1 : 0) ? (this.Vp = Pv, this.refused = !1) : this.refused || (this.refused = !0, this.deps.onError(new Error("WatchEntityInfo didn't fit the command ring"))) : this.Vp = !1
      }
    }
    class JP {
      constructor(vv) {
        this.deps = vv, this.entries = new Map, this.complete = !1, this.refill = !1, this.midFrame = !1, this.pending = new Int32Array(64), this.pendingCount = 0, this.ids = new Int32Array(64)
      }
      get(vv) {
        var zv;
        return this.complete || this.fill(), null !== (zv = this.entries.get("string" === typeof vv ? vv : String(vv))) && void 0 !== zv ? zv : null
      }
      inCoreCall() {
        this.midFrame = !0
      }
      stale(vv) {
        if (this.complete) {
          if (this.pendingCount === this.pending.length) {
            const vv = new Int32Array(2 * this.pending.length);
            vv.set(this.pending), this.pending = vv
          }
          this.pending[this.pendingCount++] = vv
        }
      }
      removed(vv) {
        this.entries.size > 0 && this.entries.delete(String(vv))
      }
      refresh() {
        const vv = this.pendingCount;
        if (this.pendingCount = 0, this.midFrame = !1, !this.deps.watch.on || this.refill) return this.complete = !1, void(this.refill = !1);
        if (vv > 0 && this.complete) {
          const {
            api: zv
          } = this.deps;
          let Pv = 0;
          const hv = this.ids = AP(this.ids, vv);
          for (let Sv = 0; Sv < vv; Sv++) {
            const vv = this.pending[Sv],
              ev = zv.indexById.get(vv);
            void 0 === ev || jv(zv.kinds[ev]) ? this.entries.delete(String(vv)) : hv[Pv++] = vv
          }
          Pv > 0 && !this.batch(hv, Pv) && (this.complete = !1)
        }
      }
      sessionEnded() {
        this.entries.clear(), this.complete = !1, this.refill = !1, this.midFrame = !1, this.pendingCount = 0, this.deps.watch.want(MP, !1)
      }
      fill() {
        const {
          api: vv
        } = this.deps;
        if (this.complete = !0, this.pendingCount = 0, this.entries.clear(), this.deps.isSessionLive()) {
          const {
            watch: vv
          } = this.deps, zv = vv.on;
          vv.want(MP, !0), !zv && vv.on && (this.refill = this.midFrame)
        }
        const {
          ids: zv,
          count: Pv
        } = ZP(vv, this.ids);
        this.ids = zv, Pv > 0 && !this.batch(zv, Pv) && (this.refill = !0)
      }
      batch(vv, zv) {
        return LP(this.deps.api, vv, zv, ((vv, zv) => {
          null === zv ? this.entries.delete(String(vv)) : this.entries.set(String(vv), zv)
        }))
      }
    }
    var EP = Pv(4542);

    function oP(vv) {
      if ("message" !== vv.type || vv.al !== EP.Xb.NewClientOptions || vv.payloadKind !== Wv.pc.Msgpack) return null;
      const zv = (0, Iv.d)(vv.payload);
      if (null === zv || "object" !== typeof zv || Array.isArray(zv)) throw new Error("NewClientOptions whose body isn't an object of options");
      return zv
    }
    var bP = Pv(1226),
      rP = Pv(36153);

    function kP(vv, zv, Pv, hv, Sv, ev, pv) {
      var dv, Nv, lv;
      switch (vv) {
        case av.de.ToggleMenu: {
          const vv = av.H[zv];
          gv.j.zC("toggleMenu", void 0 === vv ? "inventory" : `inventory|${vv}`);
          break
        }
        case av.de.EditBoard:
          gv.j.zC("EditBoard", {
            pos: 0 === zv ? null : Pv
          });
          break;
        case av.de.EditCodeBlock:
        case av.de.ViewCodeBlock:
          gv.j.zC("EditCodeBlock", {
            pos: Pv,
            canChangePos: vv === av.de.EditCodeBlock
          });
          break;
        case av.de.EditCustomLobbyBlock:
          gv.j.zC("EditCustomLobbyBlock", {
            pos: Pv
          });
          break;
        case av.de.OpenIronChest:
          gv.j.zC("OpenIronChest", {
            pos: Pv
          });
          break;
        case av.de.EditNameTag:
          gv.j.zC("EditNameTag", null !== (dv = null === (Nv = Sv.Vp()) || void 0 === Nv || null === (lv = Nv.attributes.customAttributes) || void 0 === lv ? void 0 : lv.text) && void 0 !== dv ? dv : "");
          break;
        case av.de.EditBook: {
          var Tv, Wv, sv;
          const vv = null === (Tv = Sv.Vp()) || void 0 === Tv ? void 0 : Tv.attributes;
          gv.j.zC("EditBook", {
            pages: (0, bP.N)(null === vv || void 0 === vv || null === (Wv = vv.customAttributes) || void 0 === Wv ? void 0 : Wv.pages),
            title: null !== (sv = null === vv || void 0 === vv ? void 0 : vv.customDisplayName) && void 0 !== sv ? sv : "Title",
            isPublished: !(null === vv || void 0 === vv || !vv.customDescription)
          });
          break
        }
        case av.de.CantChangeBlock:
          ! function(vv, zv) {
            const Pv = zv.getClientOption("cantChangeError"),
              hv = zv.getClientOption(vv ? "cantBuildError" : "cantBreakError"),
              Sv = vv ? Pv : hv;
            (zv.getClientOption("canChange") || Sv || "You cannot modify this block" !== Pv) && gv.j.zC("showBottomMessage", {
              message: hv || Pv,
              type: "Error"
            })
          }(1 === zv, ev);
          break;
        case av.de.MiddleBarStart:
          gv.j.zC("middleScreenBarInitiate", {
            duration: hv,
            xv: 1 === Pv[0],
            horizBarRemOffset: zv
          });
          break;
        case av.de.MiddleBarStop:
          gv.j.zC("middleScreenBarRemove");
          break;
        case av.de.Hitmarker:
          gv.j.zC("localGunHitmarker", {
            WP: 1 === zv
          });
          break;
        case av.de.ShotsLeft:
          gv.j.zC("localPlayerNewShotsLeft", hv);
          break;
        case av.de.AimingOverlay:
          gv.j.zC("aimingOverlay", 3 === (3 & zv) ? "sniper" : "none");
          break;
        case av.de.BottomMessage:
          gv.j.zC("showBottomMessage", JSON.parse(pv()));
          break;
        case av.de.Crosshair:
          Sv.inaccuracy = (0, Qv.h)(hv), (0, rP.b)().crosshairAccuracy(Sv.inaccuracy);
          break;
        case av.de.ChargeStage:
          break;
        case av.de.EmoteWheelClose:
          gv.j.zC("requestEmoteWheelClose");
          break;
        case av.de.BlockMined:
          gv.j.zC("localBlockMined");
          break;
        default:
          throw new wv.c(`UiEvent of no kind: what ${vv}`)
      }
    }
    var XP = Pv(37531),
      uP = Pv(9011),
      vh = Pv(1915),
      zh = Pv(36321),
      Ph = Pv(9019),
      hh = Pv(4529);
    const Sh = 10,
      eh = {
        player: [],
        chestOrCreative: [],
        chest: null,
        creative: !1,
        selectedSlot: 0,
        freeSlots: 0
      },
      gh = {
        items: [],
        ammo: 0,
        selectedSlot: 0
      },
      ph = {
        gun: !1,
        aimable: !1,
        chargeName: null
      };

    function dh(vv, zv) {
      let Pv, hv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        Sv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      const ev = () => (Pv = (0, vh.p)(Pv, zv()), Pv);
      return {
        current: ev,
        watch(zv) {
          const Pv = () => {
              zv(ev())
            },
            gv = [vv.watch(Pv)];
          return null !== hv && gv.push((0, vh.q)((vv => {
            vv.some(hv) && Pv()
          }))), null !== Sv && gv.push(Sv(Pv)), () => {
            for (const vv of gv) vv()
          }
        }
      }
    }

    function Nh(vv) {
      return vv && {
        name: vv.name,
        amount: vv.amount,
        attributes: vv.attributes
      }
    }
    const lh = new WeakMap;

    function Th(vv) {
      let zv = lh.get(vv);
      return void 0 === zv && (zv = (0, Ph.creativeItemIds)().map((zv => ({
        name: vv.nameOfId(zv),
        amount: vv.isStackableId(zv) ? 1 : null,
        attributes: (0, XP.e)("Gun" === (0, Ph.itemTypeOf)(zv) ? {
          type: "Gun",
          clipSize: (0, Ph.clipSizeOf)(zv)
        } : void 0)
      }))), lh.set(vv, zv)), zv
    }

    function Wh(vv, zv, Pv, hv) {
      const Sv = zv => (vv.flush(hv), zv),
        ev = Pv => {
          var hv, Sv, ev, gv, pv, dv, Nv;
          const lv = vv.slot(Pv);
          if (!lv) return null;
          const {
            rootName: Tv,
            metaStr: Wv
          } = zv.getMetaInfo(lv.name);
          return {
            name: lv.name,
            amount: lv.amount,
            attributes: lv.attributes,
            instance: vv.instance(Pv),
            displayName: null !== (hv = lv.attributes.customDisplayName) && void 0 !== hv ? hv : zv.getDisplayName(Tv),
            requiresAmmo: "RequiresAmmo" === Wv,
            clipSize: null !== (Sv = null !== (ev = null === (gv = lv.attributes.customAttributes) || void 0 === gv || null === (pv = gv.gunStats) || void 0 === pv ? void 0 : pv.clipSize) && void 0 !== ev ? ev : null === (dv = zv.getGunStats(Tv)) || void 0 === dv ? void 0 : dv.clipSize) && void 0 !== Sv ? Sv : null === (Nv = lv.typeObj) || void 0 === Nv ? void 0 : Nv.clipSize
          }
        },
        pv = function(vv, zv) {
          let Pv = null,
            hv = {
              focus: null,
              recipes: [],
              detail: null
            },
            Sv = -1;
          const ev = new Set;
          return {
            read() {
              var ev, gv;
              if (null === Pv) return null !== hv.focus && (hv = {
                ...hv,
                focus: null
              }), hv;
              if (hv.focus === Pv && Sv === vv.changes) return hv;
              if (Sv = vv.changes, 0 === vv.length) return hv = {
                focus: Pv,
                recipes: [],
                detail: null
              }, hv;
              let pv = 0;
              if (null !== Pv.recipe) try {
                pv = zv.getItemId(Pv.recipe.name)
              } catch {}
              const dv = vv.craftingView(Pv.station, pv, null !== (ev = null === (gv = Pv.recipe) || void 0 === gv ? void 0 : gv.sp) && void 0 !== ev ? ev : 0);
              return hv = null === dv ? {
                focus: Pv,
                recipes: [],
                detail: null
              } : function(vv, zv, Pv) {
                let hv = av.ib.BYTES;
                const Sv = [];
                for (let lv = av.ib.recipes(vv, 0); lv > 0; lv--) {
                  const Pv = av._.flags(vv, hv),
                    ev = {
                      name: zv.nameOfId(av._.item(vv, hv)),
                      sp: av._.recipe(vv, hv),
                      requires: [],
                      produces: av._.produces(vv, hv),
                      haveIngredients: 0 !== (Pv & av.Z.HaveIngredients),
                      listed: 0 !== (Pv & av.Z.Listed)
                    };
                  let gv = av._.requires(vv, hv);
                  for (hv += av._.BYTES; gv > 0; gv--) {
                    const Pv = av.bb.items(vv, hv);
                    ev.requires.push({
                      items: sh(vv, hv + av.bb.BYTES, Pv, zv),
                      amt: av.bb.amount(vv, hv)
                    }), hv += av.bb.BYTES + 2 * Pv
                  }
                  Sv.push(ev)
                }
                const ev = av.ib.flags(vv, 0);
                if (null === Pv.recipe || 0 === (ev & av.eb.Detail)) return {
                  focus: Pv,
                  recipes: Sv,
                  detail: null
                };
                const gv = {},
                  pv = {};
                for (let lv = av.ib.ingredients(vv, 0); lv > 0; lv--) {
                  const Pv = av.Y.item(vv, hv),
                    Sv = av.Y.from(vv, hv),
                    ev = av.Y.amount(vv, hv);
                  hv += av.Y.BYTES;
                  const dv = Sv === av.G ? null : sh(vv, hv, Sv, zv);
                  if (null !== dv && (hv += 2 * Sv), 0 === Pv) continue;
                  const Nv = zv.nameOfId(Pv);
                  gv[Nv] = ev, null !== dv && (pv[Nv] = dv)
                }
                const {
                  name: dv,
                  sp: Nv
                } = Pv.recipe;
                return {
                  focus: Pv,
                  recipes: Sv,
                  detail: {
                    name: dv,
                    sp: Nv,
                    craftAllTimes: av.ib.craftAllTimes(vv, 0),
                    roomForOne: 0 !== (ev & av.eb.RoomForOne),
                    resultStackable: Boolean(zv.getItemStat(dv, "stackable")),
                    amounts: gv,
                    ingredientsCraftedFrom: pv
                  }
                }
              }(dv, zv, Pv), hv
            },
            setFocus(vv) {
              Pv = vv;
              for (const zv of [...ev]) zv()
            },
            watchFocus: vv => (ev.add(vv), () => {
              ev.delete(vv)
            })
          }
        }(vv, zv);
      return {
        states: {
          inventory: dh(vv, (() => {
            const Pv = vv.length;
            if (0 === Pv) return eh;
            const hv = [];
            for (let zv = 0; zv < av.vd; zv++) hv.push(Nh(vv.slot(zv)));
            const Sv = vv.slotIcon,
              ev = hv[vv.selectedSlot];
            0 !== Sv && ev && (hv[vv.selectedSlot] = {
              ...ev,
              icon: zv.nameOfId(Sv)
            });
            const gv = !0 === zv.getClientOption("creative");
            let pv = [],
              dv = null;
            if (Pv > av.vd) {
              for (let zv = av.vd; zv < Pv; zv++) pv.push(Nh(vv.slot(zv)));
              dv = {
                type: null,
                pos: [...vv.PS],
                numSlots: Pv - av.vd,
                ironChest: null
              }
            } else gv && (pv = Th(zv));
            return {
              player: hv,
              chestOrCreative: pv,
              chest: dv,
              creative: gv,
              selectedSlot: vv.selectedSlot,
              freeSlots: vv.freeSlots()
            }
          }), (0, vh.m)("creative")),
          hotbar: dh(vv, (() => {
            if (0 === vv.length) return gh;
            const zv = [];
            for (let vv = 0; vv < Sh; vv++) zv.push(ev(vv));
            return {
              items: zv,
              ammo: vv.amountOf("Ammo"),
              selectedSlot: vv.selectedSlot
            }
          }), (0, vh.k)("DisplayName", "GunStats")),
          crafting: dh(vv, pv.read, null, pv.watchFocus),
          heldItemAim: dh(vv, (() => {
            var zv;
            if (!Pv()) return ph;
            const hv = null === (zv = vv.Vp()) || void 0 === zv ? void 0 : zv.typeObj,
              Sv = "Gun" === (null === hv || void 0 === hv ? void 0 : hv.type);
            return {
              gun: Sv,
              aimable: Sv || !0 === (null === hv || void 0 === hv ? void 0 : hv.showsAimingUi),
              chargeName: "Chargeable" === (null === hv || void 0 === hv ? void 0 : hv.type) ? hv.name : null
            }
          }), null, (vv => function(vv, zv) {
            let Pv = vv();
            return (0, hh.q)((() => {
              const hv = vv();
              hv !== Pv && (Pv = hv, zv(hv))
            }))
          }(Pv, vv)))
        },
        events: {
          hotbarSlotRequested: (0, vh.c)("setSelectedInventorySlotI"),
          hotbarScrolled: (0, vh.c)("ScrollInventorySlot"),
          numberKeyPressed: (0, vh.c)("numkeyPressed"),
          inventoryDropRequested: (0, vh.c)("DropInvenItem"),
          chestToggled: (0, vh.c)("chestToggleFromServer"),
          chestRefreshed: (0, vh.c)("chestRefreshedFromServer", ah),
          inventorySynced: (0, vh.c)("syncedInvenFromServer", ah),
          enchantingTableOpened: (0, vh.c)("enchantingTable", (vv => {
            let {
              position: Pv,
              yN: hv
            } = vv;
            return {
              position: [...Pv],
              blockName: zv.getMetaInfo(hv).rootName
            }
          }))
        },
        commands: {
          selectHotbarSlot(zv) {
            vv.selectSlot(zv), vv.flush(hv)
          },
          removeInventoryItem(zv) {
            let {
              slot: Pv,
              amount: hv,
              drop: ev
            } = zv;
            return Sv(vv.remove(Pv, hv, ev))
          },
          swapInventorySlots(zv) {
            let {
              a: Pv,
              b: hv
            } = zv;
            return Sv(vv.swap(Pv, hv))
          },
          moveInventoryItem(zv) {
            let {
              from: Pv,
              to: hv,
              amount: ev
            } = zv;
            return Sv(vv.move(Pv, hv, ev))
          },
          quickMoveInventoryItem(zv) {
            let {
              slot: Pv,
              start: hv,
              end: ev,
              amount: gv
            } = zv;
            return Sv(vv.quickMove(Pv, hv, ev, gv))
          },
          closeChest() {
            vv.closeChest(), vv.flush(hv), gv.j.zC("chestClosedByPlayer")
          },
          focusCrafting(vv) {
            pv.setFocus(vv)
          },
          craftRecipe(zv) {
            let {
              name: Pv,
              sp: hv,
              times: ev
            } = zv;
            return Sv(vv.craft(Pv, hv, ev))
          },
          salvageItem(zv) {
            let {
              slot: Pv,
              name: hv,
              amount: ev
            } = zv;
            return Sv(vv.salvage(Pv, hv, ev))
          },
          enchantItem(zv) {
            let {
              slot: Pv,
              level: hv,
              tablePos: Sv
            } = zv;
            vv.enchant(Pv, hv, Sv)
          }
        },
        queries: {
          enchantingOffer(Pv) {
            let {
              slot: hv,
              blockName: Sv
            } = Pv;
            return function(vv, zv, Pv, hv) {
              const Sv = vv.slot(Pv);
              if (!Sv || !zv.getClientOption("canCraft") || !(0, uP.t)(hv) || (0, uP.p)(Sv.attributes)) return wh;
              const ev = (0, Ph.enchantmentPerksOf)(zv.getItemId(Sv.name));
              if (0 === ev.length) return wh;
              const gv = [];
              for (let pv = 0; pv < zh.d; pv++) {
                const {
                  commonProb: vv,
                  uncommonProb: zv,
                  rareProb: Pv,
                  epicProb: Sv,
                  legendaryProb: ev,
                  level: dv
                } = (0, uP.g)(hv, pv);
                gv.push({
                  level: dv,
                  odds: [vv, zv, Pv, Sv, ev].map((vv => 100 * vv))
                })
              }
              return {
                perks: [...ev],
                options: gv
              }
            }(vv, zv, hv, Sv)
          }
        }
      }
    }
    const wh = Object.freeze({
      perks: [],
      options: []
    });

    function ah() {
      return null
    }

    function sh(vv, zv, Pv, hv) {
      const Sv = [];
      for (let ev = 0; ev < Pv; ev++) {
        const Pv = vv.getUint16(zv + 2 * ev, !0);
        0 !== Pv && Sv.push(hv.nameOfId(Pv))
      }
      return Sv
    }
    class Ch {
      constructor(vv) {
        this.api = vv, this.positions = new Map, this.targeted = {
          oB: 0,
          position: [0, 0, 0],
          normal: [0, 0, 0],
          vC: [0, 0, 0]
        }, this.hasTarget = !1, this.breaking = [0, 0, 0], this.isBreaking = !1
      }
      position(vv) {
        let zv = this.positions.get(vv);
        return zv || (this.api.checkValid(vv) || this.api.isLocal(vv) ? (zv = [NaN, NaN, NaN], this.api.readPosition(vv, zv), this.positions.set(vv, zv), zv) : null)
      }
      N9() {
        return this.hasTarget ? this.targeted : null
      }
      breakingPosition() {
        return this.isBreaking ? this.breaking : null
      }
      refresh() {
        for (const [zv, Pv] of this.positions) this.api.readPosition(zv, Pv) || this.api.checkValid(zv) || this.api.isLocal(zv) || this.positions.delete(zv);
        const vv = this.api.apiView;
        if (this.refreshTarget(), this.isBreaking = 0 !== (av.t.playerFlags(vv, 0) & av.Gd.Breaking) && av.t.breakingProgress(vv, 0) >= 0, this.isBreaking)
          for (let zv = 0; zv < 3; zv++) this.breaking[zv] = av.t.breakingPos(vv, 0, zv)
      }
      refreshTarget() {
        const vv = this.api.apiView,
          zv = av.t.targetBlockId(vv, 0);
        if (this.hasTarget = zv !== av.dd, this.hasTarget) {
          const Pv = this.targeted;
          Pv.oB = zv;
          for (let zv = 0; zv < 3; zv++) Pv.position[zv] = av.t.targetBlock(vv, 0, zv), Pv.normal[zv] = av.t.targetNormal(vv, 0, zv), Pv.vC[zv] = av.t.targetAdjacent(vv, 0, zv)
        }
      }
      despawned(vv) {
        const zv = this.positions.get(vv);
        zv && !this.api.isLocal(vv) && (zv.fill(NaN), this.positions.delete(vv))
      }
    }
    var ih = Pv(39947),
      ch = Pv(39927),
      Gh = Pv(36314);
    const mh = 1,
      jh = 2;
    class fh {
      constructor() {
        this.game = new Gh.h, this.client = new Gh.h, this.Vp = 0, this.movesFly = null
      }
      setGame(vv) {
        if (null === vv || "object" !== typeof vv) return !1;
        const {
          key: zv,
          value: Pv
        } = vv;
        return "string" === typeof zv && (this.game.setBooleanType(zv, Boolean(Pv)), !0)
      }
      setClient(vv, zv) {
        this.client.setBooleanType(vv, zv)
      }
      clearGame() {
        this.game = new Gh.h, this.movesFly = null
      }
      setMovesFly(vv) {
        this.movesFly = vv
      }
      perms() {
        return (this.game._getTotalBooleanVal() ? mh : 0) | (this.client._getTotalBooleanVal() ? jh : 0)
      }
      write(vv) {
        const zv = this.perms(),
          {
            movesFly: Pv
          } = this;
        if (zv === this.Vp && null === Pv) return !0;
        let hv = av.Xb.Keep;
        return null !== Pv && (hv = Pv ? av.Xb.On : av.Xb.Off), !(!vv || !(0, av.Ae)(vv, 0, hv, zv, Pv ? 1 : 0)) && (this.Vp = zv, this.movesFly = null, !0)
      }
    }
    class Fh {
      constructor(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => 35;
        this.api = vv, this.screenBandPct = void 0, this.clipX = 0, this.clipY = 0, this.clipW = 0, this.eye = [0, 0, 0], this.forward = [0, 0, 1], this.along = [0, 0, 0], this.screenBandPct = {
          x: pv.e,
          get y() {
            return zv()
          }
        }
      }
      get hasView() {
        const vv = this.api.apiView,
          zv = av.t.viewProj;
        return 0 !== zv(vv, 0, 3) || 0 !== zv(vv, 0, 7) || 0 !== zv(vv, 0, 11) || 0 !== zv(vv, 0, 15)
      }
      get cameraPosition() {
        const vv = this.api.apiView,
          {
            eye: zv
          } = this;
        for (let Pv = 0; Pv < 3; Pv++) zv[Pv] = av.t.eye(vv, 0, Pv);
        return zv
      }
      get cameraDirection() {
        const vv = this.api.apiView,
          zv = av.t.viewProj,
          Pv = zv(vv, 0, 3),
          hv = zv(vv, 0, 7),
          Sv = zv(vv, 0, 11),
          ev = Math.hypot(Pv, hv, Sv),
          {
            forward: gv
          } = this;
        return ev > 0 && (gv[0] = Pv / ev, gv[1] = hv / ev, gv[2] = Sv / ev), gv
      }
      get cameraHeading() {
        return av.t.heading(this.api.apiView, 0)
      }
      get cameraPitch() {
        return av.t.pitch(this.api.apiView, 0)
      }
      get tanHalfFovX() {
        return av.t.tanHalfFovX(this.api.apiView, 0)
      }
      get tanHalfFovY() {
        return av.t.tanHalfFovY(this.api.apiView, 0)
      }
      projectWorldPosToScreenPos(vv) {
        this.clip(vv);
        const {
          clipX: zv,
          clipY: Pv,
          clipW: hv
        } = this;
        if (hv > 0) {
          const vv = zv / hv * 50,
            Sv = -Pv / hv * 50;
          return Math.abs(vv) <= this.screenBandPct.x && Math.abs(Sv) <= this.screenBandPct.y ? {
            x: 50 + vv,
            y: 50 + Sv
          } : this.clampToBand(vv, Sv)
        }
        const Sv = this.cameraPosition,
          ev = Math.hypot(vv[0] - Sv[0], vv[1] - Sv[1], vv[2] - Sv[2]),
          gv = this.api.apiView,
          pv = av.t.viewProj,
          dv = ev > 0 ? zv / ev : 0,
          Nv = ev > 0 ? -Pv / ev : 0,
          lv = Math.hypot(pv(gv, 0, 1), pv(gv, 0, 5), pv(gv, 0, 9)),
          Tv = dv / Math.hypot(pv(gv, 0, 0), pv(gv, 0, 4), pv(gv, 0, 8)),
          Wv = Nv / lv,
          wv = !(Math.abs(Tv) >= .001 || Math.abs(Wv) >= .001);
        return this.clampToBand(dv, wv ? -(lv || 1) : Nv)
      }
      projectDirectionToScreenPos(vv) {
        if (!this.hasView) return;
        const zv = this.cameraPosition,
          Pv = this.along;
        for (let hv = 0; hv < 3; hv++) Pv[hv] = zv[hv] + 10 * vv[hv];
        return this.projectWorldPosToScreenPos(Pv)
      }
      projectWorldPosToViewport(vv) {
        this.clip(vv);
        const {
          clipX: zv,
          clipY: Pv,
          clipW: hv
        } = this;
        return hv > 0 ? {
          x: 50 + zv / hv * 50,
          y: 50 - Pv / hv * 50
        } : null
      }
      clip(vv) {
        const zv = this.api.apiView,
          Pv = vv[0] - av.t.origin(zv, 0, 0),
          hv = vv[1] - av.t.origin(zv, 0, 1),
          Sv = vv[2] - av.t.origin(zv, 0, 2),
          ev = av.t.viewProj;
        this.clipX = ev(zv, 0, 0) * Pv + ev(zv, 0, 4) * hv + ev(zv, 0, 8) * Sv + ev(zv, 0, 12), this.clipY = ev(zv, 0, 1) * Pv + ev(zv, 0, 5) * hv + ev(zv, 0, 9) * Sv + ev(zv, 0, 13), this.clipW = ev(zv, 0, 3) * Pv + ev(zv, 0, 7) * hv + ev(zv, 0, 11) * Sv + ev(zv, 0, 15)
      }
      clampToBand(vv, zv) {
        return (0, pv.i)(vv, zv, this.screenBandPct.x, this.screenBandPct.y)
      }
    }
    var Yh = Pv(4555);
    const nh = new TextEncoder,
      Oh = new Uint8Array(av.K * av.I);
    class Dh {
      constructor() {
        this.buttons = [], this.Vp = !0
      }
      set(vv) {
        this.buttons = vv, this.Vp = !1
      }
      attached() {
        this.Vp = 0 === this.buttons.length
      }
      write(vv) {
        if (this.Vp) return;
        const zv = new Uint8Array(av.K),
          Pv = new Uint8Array(av.K);
        let hv = 0,
          Sv = 0;
        for (const {
            id: ev,
            keycode: gv
          }
          of this.buttons) {
          if (hv === av.K) break;
          const {
            read: vv,
            written: pv
          } = nh.encodeInto(ev, Oh.subarray(Sv, Sv + av.I));
          if (vv < ev.length) continue;
          const dv = Yh.i[gv];
          zv[hv] = "number" === typeof dv ? dv : 0, Pv[hv] = pv, hv++, Sv += pv
        }
        this.Vp = (0, av.qe)(vv, 0, hv, zv, Pv, Oh.subarray(0, Sv))
      }
    }

    function Kh(vv, zv, Pv) {
      const hv = nh.encode(zv);
      return hv.length <= av.I && function(vv, zv, Pv, hv) {
        return (0, Bz.b)(), (0, av.uf)(vv, zv, Pv, hv)
      }(vv, 0, Pv ? 1 : 0, hv)
    }
    const Vh = new TextDecoder,
      Uh = new TextEncoder,
      Rh = new Uint8Array(0),
      xh = [0, 0, 0],
      th = {
        off: av.Id.Off,
        key: av.Id.Key,
        touch: av.Id.Touch
      };
    class qh {
      constructor(vv) {
        var zv;
        this.options = vv, this.renderFrame = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.entityInfo = void 0, this.entityInfoWatch = void 0, this.particles = void 0, this.clientApi = void 0, this.scriptedCamera = void 0, this.owners = [], this.tickers = [], this.renderers = [], this.receivers = [], this.failures = [], this.vetoSet = !1, this.hooksSet = !1, this.writtenPublicLobby = !1, this.promptWatch = "off", this.promptWatchSent = "off", this.customButtons = new Dh, this.generation = 0, this.sessionLive = !1, this.boundId = 0, this.session = null, this.activeConn = 0, this.closedThrough = 0, this.openSocket = 0, this.socketLeftSinceAttach = !1, this.ticks = 0, this.zoomUnshown = !1, this.zoomHeld = !1, this.overflowGen = 0, this.resyncOwed = !1, this.zoom = 0, this.pendingZoom = null, this.highlight = null, this.highlightOwed = !1, this.cmd = null, this.freeCam = new fh, this.stopped = () => !1, this.onError = void 0, this.api = void 0, this.tables = void 0, this.itemSources = null, this.fault = void 0, this.yw = vv => {
          if ((0, wv.h)(vv)) throw vv;
          this.onError(vv)
        }, this.api = vv.api, this.tables = vv.tables, this.onError = null !== (zv = vv.onError) && void 0 !== zv ? zv : vv => {
          console.error("Error in client game callback", vv)
        }, this.renderFrame = new Fh(this.api, vv.screenBandY), this.live = new Ch(this.api), this.chunks = new pz(this.api.memory, (() => this.api.apiView)), this.items = new iP({
          api: this.api,
          tables: vv.tables,
          cmd: () => this.cmd,
          onError: this.onError,
          beforeOp: vv.beforeOp
        });
        const Pv = () => this.stopped() ? null : this.cmd,
          hv = () => this.sessionLive;
        this.entityInfoWatch = new BP({
          cmd: Pv,
          onError: this.onError
        }), this.entityInfo = new JP({
          api: this.api,
          watch: this.entityInfoWatch,
          isSessionLive: hv
        }), this.particles = new tP({
          cmd: Pv,
          isSessionLive: hv,
          onError: this.onError
        }), this.clientApi = new dP({
          api: this.api,
          live: this.live,
          chunks: this.chunks,
          items: this.items,
          entityInfo: this.entityInfo,
          particles: this.particles,
          tables: vv.tables,
          cmd: Pv,
          sendCmd: () => this.sendCmd(),
          isSessionLive: hv,
          beforeWrite: () => {
            var zv;
            if (this.stopped()) return !1;
            const Pv = this.generation;
            return !1 !== (null === (zv = vv.beforeWrite) || void 0 === zv ? void 0 : zv.call(vv)) && Pv === this.generation
          },
          playerDbId: () => {
            const vv = this.session;
            if (null === vv) throw new Error("No game session has started, so the local player has no DB id");
            return vv.playerDbId
          },
          playSound: vv.playSound,
          preloadSounds: vv.preloadSounds,
          setLocalOptions: vv.setLocalOptions,
          hasPackModel: vv.hasPackModel
        }), this.scriptedCamera = new Ev({
          api: this.api,
          cmd: () => this.stopped() ? null : this.cmd,
          screen: vv.cameraScreen,
          showFacing: vv.showCameraFacing
        })
      }
      get itemBridgeSources() {
        return this.itemSources ??= Wh(this.items, this.tables, (() => this.localPlayerAlive()), this.yw), this.itemSources
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
      clickCodeBlock(vv) {
        const zv = this.sessionLive ? this.sendCmd() : null;
        return null !== zv && (Pv = zv, hv = 0, Sv = vv[0], ev = vv[1], gv = vv[2], (0, Bz.b)(), (0, av.we)(Pv, hv, Sv, ev, gv));
        var Pv, hv, Sv, ev, gv
      }
      cameraZoom() {
        return this.zoom
      }
      setCameraZoom(vv) {
        const zv = this.liveCmd();
        return null === zv ? (this.pendingZoom = vv, !1) : (this.pendingZoom = null, (0, av.ag)(zv, 0, vv, 1))
      }
      ZY(vv) {
        const zv = this.stopped() ? null : this.cmd;
        return null !== zv && (0, av.Xf)(zv, 0, vv ? 1 : 0)
      }
      respawn() {
        const vv = this.sessionLive ? this.sendCmd() : null;
        return null !== vv && (zv = vv, Pv = 0, (0, Bz.b)(), (0, av.Ef)(zv, Pv));
        var zv, Pv
      }
      bindCustomButtonKeys(vv) {
        this.customButtons.set(vv)
      }
      pressCustomButton(vv, zv) {
        const Pv = this.sessionLive ? this.sendCmd() : null;
        return null !== Pv && Kh(Pv, vv, zv)
      }
      padMove(vv, zv, Pv, hv, Sv, ev) {
        const gv = this.liveCmd();
        return null !== gv && (0, av.bf)(gv, 0, vv, zv, Pv, hv, Sv, ev)
      }
      thirdPersonFor(vv) {
        const zv = this.liveCmd();
        return null !== zv && (0, av.fg)(zv, 0, null !== vv && void 0 !== vv ? vv : 1 / 0)
      }
      send(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const hv = 0 !== this.openSocket || this.sessionLive ? this.sendCmd() : null;
        return null !== hv && Jz(hv, Pv ? Wv.Gd : 0, vv, (0, Iv.f)(zv))
      }
      socketAttached(vv) {
        this.openSocket = vv, this.socketLeftSinceAttach = !1
      }
      socketDetached(vv) {
        this.openSocket === vv && (this.openSocket = 0)
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
      attach(vv) {
        const zv = () => vv.isStopped;
        this.stopped = zv, this.cmd = vv.rings.cmd, this.promptWatchSent = "off", this.writePromptWatch(), this.customButtons.attached(), this.writeCustomButtons();
        const Pv = this.api.apiView;
        this.overflowGen = av.t.eventOverflowGen(Pv, 0), this.resyncOwed = 0 !== av.t.eventOverflowMask(Pv, 0), vv.setGameHost(this), vv.setEventWalker((vv => {
          this.api.walk(vv, this, zv)
        }))
      }
      watchPromptPick(vv) {
        this.promptWatch = vv, this.writePromptWatch()
      }
      get promptEntity() {
        return "off" === this.promptWatch || this.stopped() ? null : Ih(av.t.promptEntity(this.api.apiView, 0))
      }
      get interactLabel() {
        return "touch" !== this.promptWatch || this.stopped() ? av.vc.None : av.t.interactLabel(this.api.apiView, 0)
      }
      get interactIcon() {
        return "touch" !== this.promptWatch || this.stopped() ? 0 : av.t.interactIcon(this.api.apiView, 0)
      }
      closeGame() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        (0 === vv || vv >= this.openSocket) && (this.openSocket = 0), this.closedThrough = Math.max(this.closedThrough, vv, this.activeConn), this.activeConn = 0, this.endSession(), this.endGameGrants(), this.dropGameCamera()
      }
      gameCamera(vv) {
        0 !== this.activeConn && this.scriptedCamera.settingsChanged(vv)
      }
      netEvent(vv) {
        "connection" === vv.type ? vv.phase === Wv.F.Activated && vv.conn !== this.activeConn && vv.conn > this.closedThrough ? (this.endSession(), this.activeConn = vv.conn, this.endGameGrants(), this.dropGameCamera()) : vv.phase !== Wv.F.Left && vv.phase !== Wv.F.Closed || vv.conn !== this.activeConn ? vv.phase === Wv.F.Resumed && 0 !== this.activeConn && vv.conn > this.closedThrough && (this.activeConn = vv.conn) : this.closeGame() : vv.conn === this.activeConn && 0 !== vv.conn && (vv.al === ch.A ? this.gunHit(vv.payload) : vv.al === EP.Xb.EditItemCraftingRecipes || vv.al === ch.cb ? this.items.touch() : (this.serverOptions(vv), this.gameMessage(vv)));
        const zv = this.options.onNetEvent;
        zv && this.guard((() => {
          zv(vv)
        }))
      }
      serverOptions(vv) {
        const zv = this.options.serverOptions,
          Pv = zv ? this.decoded(oP, vv) : null;
        zv && Pv && this.guard((() => {
          zv.applyNewClientOptions(Pv)
        }))
      }
      gameMessage(vv) {
        let zv = null;
        try {
          zv = function(vv) {
            if ("message" !== vv.type || vv.al !== EP.Xb.GameCodeMessage || vv.payloadKind !== Wv.pc.Msgpack) return null;
            const zv = (0, Iv.d)(vv.payload);
            if (null === zv || "object" !== typeof zv || "string" !== typeof zv.messageType) throw new Error("GameCodeMessage without a messageType");
            return zv
          }(vv)
        } catch (Pv) {
          this.sessionLive && this.onError(Pv)
        }
        if (zv) {
          const {
            messageType: vv,
            data: Pv
          } = zv;
          if ((0, Kv.e)(vv)) return void this.guard((() => {
            (0, Kv.d)(vv, Pv)
          }));
          "freeCamPerms" === vv && this.freeCam.setGame(Pv) && this.writeFreeCam(), this.sessionLive && this.round(this.receivers, (zv => {
            zv.onReceivedMessageFromServer(vv, Pv)
          }))
        }
      }
      decoded(vv, zv) {
        try {
          return vv(zv)
        } catch (Pv) {
          return this.onError(Pv), null
        }
      }
      setClientFreeCameraGrant(vv, zv) {
        this.freeCam.setClient(vv, zv), this.writeFreeCam()
      }
      freeCameraAllowed() {
        return 0 !== this.freeCam.perms()
      }
      setFreeCameraMovesFly(vv) {
        this.freeCam.setMovesFly(vv), this.writeFreeCam()
      }
      setBlockHighlight(vv) {
        this.highlight = vv, this.highlightOwed = !0, this.writeOwedHighlight()
      }
      writeOwedHighlight() {
        const vv = this.liveCmd();
        if (null === vv || !this.highlightOwed) return;
        const zv = this.highlight;
        this.highlightOwed = null === zv ? !(0, av.Ne)(vv, 0, xh, xh, 0) : !(0, av.Ne)(vv, 0, zv.pos, zv.normal, 1)
      }
      localPlayerBound(vv) {
        var zv, Pv;
        if (0 === this.activeConn || this.sessionLive && vv === this.boundId) return;
        const hv = this.sessionLive;
        let Sv, ev, gv, pv;
        this.endSession(), hv && this.restartGameCamera();
        try {
          var dv;
          this.session = null;
          const vv = this.options.sessionInfo(this.activeConn);
          if (this.session = vv, !vv) return;
          Sv = vv.gameNameWithVariation, ev = null !== (dv = (0, Ov.Kb)(Sv)) && void 0 !== dv ? dv : void 0, gv = (0, Dv.y)(vv.lobbyName), pv = (0, Dv.S)(vv.lobbyName)
        } catch (cv) {
          return void this.onError(cv)
        }
        const Nv = {
          localPlayerId: String(vv)
        };
        let lv = {},
          Tv = {};
        try {
          var Wv, wv;
          lv = null !== (Wv = null === (wv = this.options.gameFactory((0, Ov.Pb)(Sv))) || void 0 === wv ? void 0 : wv(pv, gv, ev, Nv)) && void 0 !== Wv ? Wv : {}
        } catch (cv) {
          this.yw(cv)
        }
        try {
          var av, sv;
          Tv = {
            ...null === (av = (sv = this.options).defaultPlugins) || void 0 === av ? void 0 : av.call(sv, pv, gv, ev, Nv),
            ...lv.plugins
          }
        } catch (cv) {
          this.yw(cv)
        }
        const Cv = [lv, ...Object.values(Tv)];
        this.owners = Cv, this.tickers = Cv.filter((vv => void 0 !== vv.MT)), this.renderers = Cv.filter((vv => void 0 !== vv.onAfterRender)), this.receivers = Cv.filter((vv => void 0 !== vv.onReceivedMessageFromServer)), this.writeAltVeto(Cv), this.writeHooks(Cv), this.writePublicLobby(pv), this.writeLocalDbId(null !== (zv = null === (Pv = this.session) || void 0 === Pv ? void 0 : Pv.playerDbId) && void 0 !== zv ? zv : null), this.boundId = vv, this.sessionLive = !0, this.generation++, null !== this.pendingZoom && this.setCameraZoom(this.pendingZoom), this.highlightOwed ||= null !== this.highlight, this.writeOwedHighlight(), this.round(Cv, (vv => {
          var zv;
          null === (zv = vv.onCreate) || void 0 === zv || zv.call(vv, this.clientApi)
        }));
        const iv = this.generation;
        setTimeout((() => {
          iv === this.generation && !0 === this.tables.getClientOption("creative") && Th(this.tables)
        }), 0)
      }
      chunkSlot(vv, zv, Pv, hv, Sv, ev) {
        this.chunks.apply(vv, zv, Pv, hv, Sv, ev)
      }
      entityAdded(vv) {
        var zv;
        this.entityInfo.stale(vv), null === (zv = this.options.replayEntities) || void 0 === zv || zv.entityAdded(vv)
      }
      entityInfoChanged(vv) {
        var zv;
        this.entityInfo.stale(vv), null === (zv = this.options.replayEntities) || void 0 === zv || zv.entityInfoChanged(vv)
      }
      afterPrescan() {
        this.items.refresh(), this.entityInfo.refresh(), this.api.rereadDirectory(), this.chunks.refresh(), this.live.refresh()
      }
      tickEnd() {
        if (this.ticks++, this.tickers.length > 0) {
          const vv = performance.now();
          this.round(this.tickers, Qh), (0, hh.c)(performance.now() - vv)
        }
      }
      afterWalk(vv) {
        this.ackEventOverflow(), this.clientApi.flushOwed(), this.writeOwedHighlight();
        const zv = this.options.replayEntities;
        zv && this.guard((() => {
          this.entityInfoWatch.want(yP, zv.wantsWatch), zv.flush(this.entityInfoWatch.on)
        }));
        const Pv = (0, hh.g)(vv, av.t.frameMs(this.api.apiView, 0));
        if (null !== Pv) {
          const vv = this.renderFrame;
          this.guard((() => {
            (0, rP.b)().turnDamageIndicators(vv.cameraHeading)
          })), this.guard((() => {
            this.clientApi.slideRoute(Pv)
          })), this.round(this.renderers, (zv => {
            zv.onAfterRender(Pv, vv)
          }))
        }
        this.writeFreeCam();
        try {
          this.scriptedCamera.afterFrame(null !== Pv)
        } catch (Sv) {
          this.yw(Sv)
        }
        this.showZoom(), this.items.flush(this.yw), this.writePromptWatch(), this.writeCustomButtons();
        const hv = this.ticks;
        this.ticks = 0, (0, hh.e)(hv, vv, Pv, this.yw)
      }
      entityRemoved(vv) {
        this.live.despawned(vv), this.entityInfo.removed(vv)
      }
      ackEventOverflow() {
        const vv = this.api.apiView,
          zv = av.t.eventOverflowGen(vv, 0),
          Pv = zv - this.overflowGen >>> 0;
        if (0 === Pv && !this.resyncOwed) return;
        this.overflowGen = zv;
        const hv = av.t.eventOverflowMask(vv, 0),
          Sv = this.cmd;
        0 === hv || null === Sv || this.stopped() ? this.resyncOwed = !1 : this.resyncOwed = !(0, av.xe)(Sv, 0, hv);
        const ev = this.options.onEventOverflow;
        0 !== Pv && ev && this.guard((() => {
          ev(hv, Pv)
        }))
      }
      gameCall(vv, zv, Pv, hv, Sv, ev, gv, pv, dv) {
        if (vv === av.jc.Director) try {
          return this.scriptedCamera.call(zv, Pv, hv, Sv, ev, gv)
        } catch (Nv) {
          return this.yw(Nv), av.kb.None
        }
        if (!this.sessionLive || void 0 !== this.fault) return vv === av.jc.AltVeto ? av.j.Allow : 0;
        try {
          return this.callGames(vv, zv, Pv, hv, Sv, ev, gv, pv)
        } catch (Nv) {
          throw (0, wv.h)(Nv) && (this.fault = Nv), Nv
        }
      }
      takeFault() {
        const vv = this.fault;
        return this.fault = void 0, vv
      }
      callGames(vv, zv, Pv, hv, Sv, ev, gv, pv) {
        this.api.rereadDirectory(), this.chunks.touch(), this.items.refresh(), this.live.refresh(), this.entityInfo.inCoreCall();
        const {
          tables: dv
        } = this.options, Nv = String(this.boundId);
        switch (vv) {
          case av.jc.AltVeto:
          case av.jc.AltAction: {
            const pv = 0 !== gv,
              [lv, Tv, Wv] = pv ? [zv, Pv, hv] : [void 0, void 0, void 0],
              wv = pv ? dv.nameOfId(Sv) : "Air",
              sv = Ih(ev);
            if (vv === av.jc.AltAction) return this.first((vv => {
              var zv;
              return null === (zv = vv.onPlayerAltAction) || void 0 === zv ? void 0 : zv.call(vv, Nv, lv, Tv, Wv, wv, sv)
            })), 0;
            const Cv = this.first((vv => {
              var zv;
              return null === (zv = vv.onPlayerAttemptAltAction) || void 0 === zv ? void 0 : zv.call(vv, Nv, lv, Tv, Wv, wv, sv)
            }));
            return "preventAction" === Cv ? av.j.Prevent : "preventPlacement" === Cv ? av.j.PreventPlacement : av.j.Allow
          }
          case av.jc.Click: {
            const vv = pv,
              lv = 0 !== (vv & av.T.Alt),
              Tv = 0 !== (vv & av.T.HasPos),
              Wv = Tv ? dv.nameOfId(Sv) : "Air",
              [wv, sv, Cv] = Tv ? [zv, Pv, hv] : [null, null, null],
              iv = Ih(ev),
              cv = 0 !== (vv & av.T.Up),
              Gv = Ih(gv);
            if (0 === (vv & av.T.AttackOnly) && this.first((vv => {
                var zv, Pv;
                return cv ? null === (zv = vv.onPlayerClickUp) || void 0 === zv ? void 0 : zv.call(vv, Nv, lv, wv, sv, Cv, Wv, iv) : null === (Pv = vv.onPlayerClick) || void 0 === Pv ? void 0 : Pv.call(vv, Nv, lv, wv, sv, Cv, Wv, iv)
              })), !cv && !lv && null !== Gv) {
              const vv = this.clientApi.getPositionView(Gv),
                zv = vv ? [vv[0], vv[1], vv[2]] : [0, 0, 0];
              this.first((vv => {
                var Pv;
                return null === (Pv = vv.onPlayerAttackEntity) || void 0 === Pv ? void 0 : Pv.call(vv, Nv, Gv, zv)
              }))
            }
            return 0
          }
          case av.jc.ChangeBlock: {
            const vv = dv.nameOfId(Sv),
              gv = dv.nameOfId(ev);
            return this.first((Sv => {
              var ev;
              return null === (ev = Sv.onPlayerChangeBlock) || void 0 === ev ? void 0 : ev.call(Sv, Nv, zv, Pv, hv, vv, gv)
            })), 0
          }
          case av.jc.DropItem: {
            const vv = dv.nameOfId(zv);
            return this.first((zv => {
              var Sv;
              return null === (Sv = zv.onPlayerDropItem) || void 0 === Sv ? void 0 : Sv.call(zv, Nv, vv, Pv, hv)
            })), 0
          }
          default:
            return this.onError(new Error(`Unknown game call kind ${vv}`)), 0
        }
      }
      changeBlockFail(vv, zv, Pv, hv, Sv, ev, gv) {
        const pv = Sv === av._c ? null : Vh.decode(this.api.eventBytes(ev, Math.min(Sv, gv)));
        this.failures.push({
          rP: [vv, zv, Pv],
          kP: hv,
          XP: pv
        })
      }
      changeBlockFailEnd() {
        const vv = this.failures;
        this.failures = [], this.sessionLive && this.round(this.owners, (zv => {
          var Pv;
          null === (Pv = zv.onChangeBlockFail) || void 0 === Pv || Pv.call(zv, vv)
        })), this.zC("EditBoard", {
          pos: null
        }), this.zC("EditCodeBlock", {
          pos: null,
          canChangePos: null
        })
      }
      inventoryEvent(vv, zv, Pv, hv, Sv, ev) {
        vv === av.zc.ChestOpened ? this.items.chestOpened(Pv, hv, Sv) : vv !== av.zc.Synced && vv !== av.zc.ChestClosed && vv !== av.zc.ChestRefreshed || this.items.touch(), this.guard((() => {
          ! function(vv, zv, Pv, hv) {
            switch (vv) {
              case av.zc.Synced:
                gv.j.zC("syncedInvenFromServer");
                break;
              case av.zc.ChestOpened:
              case av.zc.ChestClosed:
                gv.j.zC("chestToggleFromServer", vv === av.zc.ChestOpened, !0);
                break;
              case av.zc.ChestRefreshed:
                gv.j.zC("chestRefreshedFromServer");
                break;
              case av.zc.EnchantingTable:
                gv.j.zC("enchantingTable", {
                  yN: hv,
                  position: Pv
                });
                break;
              case av.zc.HotbarRequest:
                gv.j.zC("setSelectedInventorySlotI", zv, !0);
                break;
              case av.zc.Scrolled:
                gv.j.zC("ScrollInventorySlot", zv);
                break;
              case av.zc.NumberKey:
                gv.j.zC("numkeyPressed", zv + 1);
                break;
              case av.zc.DropRequested:
                gv.j.zC("DropInvenItem", 0 !== zv);
                break;
              default:
                throw new wv.c(`InventoryEvent of no kind: what ${vv}`)
            }
          }(vv, zv, [Pv, hv, Sv], ev)
        }))
      }
      heldItemChanged() {
        this.items.touch()
      }
      shotDamage(vv, zv, Pv, hv) {
        this.zC("shotPlayer", {
          playerId: String(vv),
          damage: zv,
          wasCrit: 0 !== hv,
          distance: Pv
        })
      }
      localHurt(vv, zv) {
        this.zC("closeShopOnDamaged", null), this.guard((() => {
          gv.j.zC("damagedByOtherPlayer", {
            Je: null,
            direction: Number.isNaN(zv) ? null : zv,
            Kv: vv
          })
        }))
      }
      attackHit(vv, zv, Pv, hv, Sv) {
        this.guard((() => {
          gv.j.zC("yourAttackHit", {
            WP: hv,
            screenPos: this.renderFrame.projectDirectionToScreenPos([vv, zv, Pv]),
            hitSelf: Sv
          })
        }))
      }
      physicsType(vv) {
        this.zC("PlayerPhysicsTypeUpdate", vv)
      }
      vehicleEffect(vv, zv, Pv, hv, Sv) {
        this.guard((() => {
          vv === Wv.Td.UPDATE ? (0, Uv.i)(zv, {
            icon: Pv,
            level: hv,
            displayName: null,
            durationMs: Sv
          }) : Vv.e.remove(zv)
        }))
      }
      zoomChanged(vv) {
        this.zoom = vv, this.zoomUnshown = !0
      }
      zoomDisabled() {
        this.zC("showBottomMessage", {
          message: "Zoom is disabled",
          timeoutLength: 2e3,
          type: "Error"
        })
      }
      showZoom() {
        const vv = this.scriptedCamera.holdsView();
        !this.zoomUnshown || vv && this.zoomHeld || (this.zoomUnshown = !1, this.zC("cameraZoomSet", this.zoom)), this.zoomHeld = vv
      }
      gunHit(vv) {
        this.guard((() => {
          const {
            Je: zv,
            Ee: Pv
          } = (0, ih.b)(ch.A, vv);
          gv.j.zC("damagedByOtherPlayer", {
            Je: zv,
            direction: Pv
          })
        }))
      }
      uiEvent(vv, zv, Pv, hv, Sv, ev, gv, pv) {
        this.guard((() => {
          kP(vv, zv, [Pv, hv, Sv], ev, this.items, this.options.tables, (() => Vh.decode(this.api.eventBytes(gv, pv))))
        }))
      }
      writeAltVeto(vv) {
        const zv = this.cmd;
        if (!zv) return;
        let Pv;
        try {
          Pv = function(vv, zv) {
            const Pv = new Set;
            let hv = !1;
            for (const Sv of vv)
              if (Sv.onPlayerAttemptAltAction) {
                if (hv = !0, !Sv.altVetoBlocks) return {
                  mode: av.ge.All,
                  roots: []
                };
                for (const vv of Sv.altVetoBlocks) Pv.add(zv.getMetaInfo(vv).rootId)
              } return hv ? Pv.size > av.Rc ? {
              mode: av.ge.All,
              roots: []
            } : {
              mode: av.ge.Filter,
              roots: [...Pv]
            } : {
              mode: av.ge.Off,
              roots: []
            }
          }(vv, this.options.tables)
        } catch (Sv) {
          this.onError(Sv), Pv = {
            mode: av.ge.All,
            roots: []
          }
        }
        if (Pv.mode === av.ge.Off && !this.vetoSet) return;
        const hv = new Uint8Array(new Uint32Array(Pv.roots).buffer);
        (0, av.Kf)(zv, 0, Pv.mode, Pv.roots.length, hv) ? this.vetoSet = Pv.mode !== av.ge.Off: this.onError(new Error("SetAltVeto didn't fit the command ring"))
      }
      endGameGrants() {
        this.freeCam.clearGame(), this.writeFreeCam()
      }
      writeFreeCam() {
        this.stopped() || this.freeCam.write(this.cmd)
      }
      writeHooks(vv) {
        const zv = this.cmd;
        if (!zv) return;
        const Pv = function(vv) {
          let zv = 0;
          for (const Pv of vv) Pv.onPlayerAltAction && (zv |= 1 << av.jc.AltAction), (Pv.onPlayerClick || Pv.onPlayerClickUp || Pv.onPlayerAttackEntity) && (zv |= 1 << av.jc.Click), Pv.onPlayerChangeBlock && (zv |= 1 << av.jc.ChangeBlock), Pv.onPlayerDropItem && (zv |= 1 << av.jc.DropItem);
          return zv
        }(vv);
        (0 !== Pv || this.hooksSet) && ((0, av.Tf)(zv, 0, Pv) ? this.hooksSet = 0 !== Pv : this.onError(new Error("SetHooks didn't fit the command ring")))
      }
      writeCustomButtons() {
        const vv = this.cmd;
        vv && !this.stopped() && this.customButtons.write(vv)
      }
      writePromptWatch() {
        const vv = this.cmd,
          zv = this.promptWatch;
        zv !== this.promptWatchSent && vv && !this.stopped() && (0, av.lg)(vv, 0, th[zv]) && (this.promptWatchSent = zv)
      }
      writePublicLobby(vv) {
        const zv = this.cmd;
        zv && vv !== this.writtenPublicLobby && ((0, av.Yf)(zv, 0, vv ? 1 : 0) ? this.writtenPublicLobby = vv : this.onError(new Error("SetPublicLobby didn't fit the command ring")))
      }
      writeLocalDbId(vv) {
        const zv = this.cmd;
        zv && ((0, av.Uf)(zv, 0, null === vv ? 0 : 1, null === vv ? Rh : Uh.encode(vv)) || this.onError(new Error("SetLocalDbId didn't fit the command ring")))
      }
      first(vv) {
        const zv = this.generation;
        for (const hv of this.owners) {
          if (zv !== this.generation) break;
          try {
            const zv = vv(hv);
            if (void 0 !== zv) return zv
          } catch (Pv) {
            this.yw(Pv)
          }
        }
      }
      zC(vv, zv) {
        this.guard((() => {
          gv.j.zC(vv, zv)
        }))
      }
      dropGameCamera() {
        try {
          this.scriptedCamera.reset()
        } catch (vv) {
          this.yw(vv)
        }
      }
      restartGameCamera() {
        try {
          this.scriptedCamera.restart()
        } catch (vv) {
          this.yw(vv)
        }
      }
      endSession() {
        if (!this.sessionLive) return;
        this.sessionLive = !1;
        const vv = this.owners;
        let zv;
        if (this.owners = this.tickers = this.renderers = this.receivers = [], this.generation++, !this.stopped()) try {
          this.writeAltVeto([]), this.writeHooks([]), this.writePublicLobby(!1), this.writeLocalDbId(null)
        } catch (hv) {
          zv = hv
        }
        try {
          this.entityInfo.sessionEnded()
        } catch (hv) {
          zv ??= hv
        }
        this.round(vv, Zh, !0);
        try {
          this.particles.sessionEnded() || this.onError(new Error("ParticleStopAll didn't fit the command ring"))
        } catch (hv) {
          zv ??= hv
        }
        try {
          this.clientApi.disposeGameOutput()
        } catch (hv) {
          zv ??= hv
        }
        const Pv = this.options.onSessionEnd;
        if (Pv) try {
          Pv()
        } catch (hv) {
          this.onError(hv)
        }
        void 0 !== zv && this.yw(zv)
      }
      round(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const hv = this.generation;
        for (const ev of vv) {
          if (hv !== this.generation) break;
          try {
            zv(ev)
          } catch (Sv) {
            Pv ? this.onError(Sv) : this.yw(Sv)
          }
        }
      }
      guard(vv) {
        try {
          vv()
        } catch (zv) {
          this.yw(zv)
        }
      }
    }

    function Ih(vv) {
      return vv === av.$c ? null : String(vv)
    }

    function Qh(vv) {
      vv.MT(Wv.Pd)
    }

    function Zh(vv) {
      var zv;
      null === (zv = vv.onClose) || void 0 === zv || zv.call(vv)
    }

    function Ah(vv, zv) {
      vv.watch((() => {
        const Pv = function(vv) {
          const zv = [],
            Pv = Math.min(Sh, vv.length);
          for (let Sv = 0; Sv < Pv; Sv++) {
            var hv;
            const Pv = null === (hv = vv.slot(Sv)) || void 0 === hv ? void 0 : hv.typeObj,
              ev = Pv ? (0, Ph.gunTypeOf)(Pv.id) : void 0;
            void 0 !== ev && zv.push(Gz[ev])
          }
          return zv
        }(vv);
        Pv.length > 0 && (zv.preload(Pv), zv.preload([mz]))
      }))
    }
    var Lh = Pv(35980),
      Hh = Pv(4603),
      Mh = Pv(36271),
      yh = Pv(36299);

    function Bh(vv) {
      const zv = (0, Lh.countDecodesAs)(new Hh.Howl({
          ...(0, Mh.f)(vv),
          pool: 15,
          preload: !1
        }), "sheet"),
        Pv = zv.load.bind(zv);
      return zv.load = () => (zv._preload = !0, (0, yh.d)(vv), Pv()), zv
    }

    function Jh(vv, zv, Pv) {
      const hv = vv.listener;
      if (hv.positionX) Eh(hv.positionX, zv, Pv, 0), Eh(hv.positionY, zv, Pv, 1), Eh(hv.positionZ, zv, Pv, 2), Eh(hv.forwardX, zv, Pv, 3), Eh(hv.forwardY, zv, Pv, 4), Eh(hv.forwardZ, zv, Pv, 5), Eh(hv.upX, zv, Pv, 6), Eh(hv.upY, zv, Pv, 7), Eh(hv.upZ, zv, Pv, 8);
      else {
        let vv = !1;
        for (let hv = 0; hv < 9; hv++) vv ||= zv[hv] !== Pv[hv];
        vv && (hv.setPosition(zv[0], zv[1], zv[2]), hv.setOrientation(zv[3], zv[4], zv[5], zv[6], zv[7], zv[8]), Pv.set(zv))
      }
    }

    function Eh(vv, zv, Pv, hv) {
      zv[hv] !== Pv[hv] && (vv.value = zv[hv], Pv[hv] = zv[hv])
    }
    class oh {
      constructor() {
        this.pose = new Float64Array(9), this.written = new Float64Array(9).fill(Number.NaN), this.watchedCtx = void 0
      }
      apply(vv) {
        this.pose.set(vv);
        const zv = Hh.Howler.ctx;
        return !!zv && (zv !== this.watchedCtx && (this.watchedCtx = zv, this.written.fill(Number.NaN), zv.addEventListener("statechange", (() => {
          "running" === zv.state && Jh(zv, this.pose, this.written)
        }))), "running" === zv.state && Jh(zv, vv, this.written), !0)
      }
    }
    var bh = Pv(36104),
      rh = Pv(38708);
    let kh = null,
      Xh = null;

    function uh() {
      return null === kh && (kh = document.createElement("div"), kh.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;pointer-events:none", document.body.append(kh)), kh
    }

    function vS() {
      return Xh ??= new rh.d(new bh.b(uh)), Xh
    }

    function zS() {
      var vv;
      null === (vv = Xh) || void 0 === vv || vv.clear(), PS(null)
    }

    function PS(vv) {
      hv.c.get("scriptedCameraFacing") !== vv && hv.c.set({
        scriptedCameraFacing: vv
      })
    }
    var hS = Pv(9185),
      SS = Pv(9144),
      eS = Pv(38726),
      gS = Pv(40040),
      pS = Pv(3037);
    const dS = Object.entries(av.ic).reduce(((vv, zv) => {
      let [Pv, hv] = zv;
      return vv[hv] = Pv, vv
    }), []);

    function NS(vv, zv) {
      var Pv;
      return 0 !== ((null !== (Pv = vv.itemFlags[zv]) && void 0 !== Pv ? Pv : 0) & av.Cc.Stackable)
    }
    const lS = /^(0|[1-9][0-9]*)$/,
      TS = {
        displayName: (vv, zv) => (0, Ph.displayNameOf)(zv),
        description: (vv, zv) => (0, Ph.descriptionOf)(zv),
        type: (vv, zv) => (0, Ph.itemTypeOf)(zv),
        clipSize: (vv, zv) => (0, Ph.clipSizeOf)(zv),
        armourReduction: (vv, zv) => (0, Ph.armourReductionOf)(zv),
        scopeType: (vv, zv) => (0, Ph.scopeTypeOf)(zv),
        stackable: NS,
        harvestType: (vv, zv) => dS[vv.blockHarvestTypes[zv]],
        harvestLevel: (vv, zv) => {
          const Pv = vv.blockHarvestLevels[zv];
          return Pv === av.Jc ? void 0 : Pv
        },
        harvests: (vv, zv) => {
          var Pv;
          const hv = null !== (Pv = vv.itemHarvests[zv]) && void 0 !== Pv ? Pv : 0;
          return 0 !== hv ? dS[hv] : void 0 === (0, Ph.harvestsNullLevelOf)(zv) ? void 0 : null
        },
        level: (vv, zv) => {
          var Pv, hv;
          const Sv = null !== (Pv = vv.itemLevels[zv]) && void 0 !== Pv ? Pv : av.Jc;
          return Sv !== av.Jc ? Sv : null !== (hv = (0, Ph.harvestsNullLevelOf)(zv)) && void 0 !== hv ? hv : void 0
        }
      };

    function WS(vv, zv, Pv) {
      return aS(new Uint8Array(Math.floor(vv.length / zv)), vv, zv, Pv)
    }

    function wS(vv, zv, Pv) {
      return aS(new Uint16Array(Math.floor(vv.length / zv)), vv, zv, Pv)
    }

    function aS(vv, zv, Pv, hv) {
      const Sv = new DataView(zv.buffer, zv.byteOffset, zv.byteLength);
      for (let ev = 0; ev < vv.length; ev++) vv[ev] = hv(Sv, ev * Pv);
      return vv
    }
    class sS {
      constructor(vv, zv) {
        this.options = zv, this.metas = [], this.types = new Map, this.props = void 0, this.rootIdOf = vv => {
          const zv = this.idOf(vv);
          if (void 0 === zv) throw new Error(`No item is named ${vv}, an item's root`);
          return zv
        };
        const Pv = zv => {
            const Pv = zv();
            return new Uint8Array(vv.memory().buffer, vv.scratch(), Pv).slice()
          },
          hv = (new TextDecoder).decode(Pv((() => vv.queries.itemNames()))).split("\n"),
          Sv = Pv((() => vv.queries.blockProps())),
          ev = Pv((() => vv.queries.itemProps()));
        this.props = {
          blockFlags: WS(Sv, av.A.BYTES, av.A.flags),
          blockHarvestTypes: WS(Sv, av.A.BYTES, av.A.harvestType),
          blockHarvestLevels: WS(Sv, av.A.BYTES, av.A.harvestLevel),
          blockAttachedTops: wS(Sv, av.A.BYTES, av.A.attachedTop),
          itemFlags: WS(ev, av.Fc.BYTES, av.Fc.flags),
          itemHarvests: WS(ev, av.Fc.BYTES, av.Fc.harvests),
          itemLevels: WS(ev, av.Fc.BYTES, av.Fc.level)
        }, (0, pS.j)(Object.freeze(hv)), (0, gS.h)()
      }
      idOf(vv) {
        if ("number" === typeof vv) return void 0 === (0, pS.e)(vv) ? void 0 : vv;
        const zv = (0, pS.c)(vv);
        return void 0 === zv && lS.test(vv) ? void 0 === (0, pS.e)(+vv) ? void 0 : +vv : zv
      }
      getMetaInfo(vv) {
        if (!vv || vv === hS.e) return hS.f;
        const zv = this.idOf(vv);
        if (void 0 === zv) throw new Error(`Item ${vv} not found in registry`);
        return this.metaOf(zv)
      }
      blockRootId(vv) {
        return 0 !== vv && void 0 !== (0, pS.e)(vv) ? this.metaOf(vv).rootId : vv
      }
      metaOf(vv) {
        return this.metas[vv] ??= (0, SS.n)((0, pS.e)(vv), vv, this.rootIdOf, (0, Ph.rootMetaDescOf)(vv))
      }
      getItemId(vv) {
        if (!vv || vv === hS.e) return 0;
        const zv = this.idOf(vv);
        if (void 0 === zv) throw new Error(`Invalid block name. You sent ${vv}. The only valid item names are 'Air' and those contained within the blockMetadata/itemMetadata files`);
        return zv
      }
      getItemName(vv) {
        if (!vv || vv === hS.e) return hS.e;
        const zv = this.idOf(vv);
        if (void 0 === zv) throw new Error(`Item ${vv} not found in registry`);
        return (0, pS.e)(zv)
      }
      blockNameToBlockId(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (vv === hS.e) return 0;
        let Pv = this.idOf(vv);
        if (void 0 === Pv || !this.isBlockId(Pv)) {
          const zv = vv.indexOf("|"),
            hv = zv > 0 ? (0, pS.c)(vv.slice(0, zv)) : void 0;
          Pv = void 0 !== hv && this.isBlockId(hv) && (0, Ph.rootMetaDescOf)(hv) === vv ? hv : void 0
        }
        if (void 0 !== Pv) return Pv;
        if (!zv) throw new Error(`Invalid block name. You sent ${vv}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`);
        return null
      }
      isBlockId(vv) {
        return vv > 0 && vv < this.props.blockFlags.length
      }
      nameOfId(vv) {
        return 0 !== vv && (0, pS.e)(vv) || hS.e
      }
      itemType(vv) {
        const zv = vv ? this.idOf(vv) : void 0;
        if (!zv) return null;
        let Pv = this.types.get(zv);
        return void 0 === Pv && (Pv = Object.freeze({
          id: zv,
          name: (0, pS.e)(zv),
          meta: this.getMetaInfo(zv),
          stackable: NS(this.props, zv),
          type: (0, Ph.itemTypeNameOf)(zv),
          clipSize: (0, Ph.clipSizeOf)(zv),
          scopeType: (0, Ph.scopeTypeOf)(zv),
          showsAimingUi: (0, Ph.showsAimingUi)(zv)
        }), this.types.set(zv, Pv)), Pv
      }
      getItemStat(vv, zv) {
        if (eS.e.has(zv)) {
          const Pv = "minChargeStateToUse" === zv ? this.getMetaInfo(vv).rootName : this.getItemName(vv),
            hv = this.options.get((0, eS.g)(Pv, zv));
          if (null !== hv && void 0 !== hv) return hv
        }
        return this.defaultStat(vv, zv, this.statOf(zv))
      }
      getDisplayName(vv) {
        return this.getItemStat(vv, "displayName")
      }
      getDefaultItemStat(vv, zv) {
        return this.defaultStat(vv, zv, this.statOf(zv))
      }
      statOf(vv) {
        const zv = TS[vv];
        return void 0 === zv && function(vv, zv) {
          throw new Error(`ClientApi.${vv} is not available yet in the wasm client (${zv})`)
        }(`getItemStat("${vv}")`, `a table of the stat: the wasm client answers ${Object.keys(TS).join(", ")}`), zv
      }
      defaultStat(vv, zv, Pv) {
        const hv = this.idOf(vv),
          Sv = void 0 === hv ? void 0 : Pv(this.props, hv);
        return null !== Sv && void 0 !== Sv || "displayName" !== zv ? Sv : this.getItemName(vv)
      }
      getClientOption(vv) {
        return this.options.get(vv)
      }
      getGunStats(vv) {
        return this.getClientOption(`${vv}GunStats`)
      }
      watchClientOption(vv, zv) {
        return this.options.subscribe(vv, zv)
      }
      isSolidBlockId(vv) {
        var zv;
        return 0 !== ((null !== (zv = this.props.blockFlags[vv]) && void 0 !== zv ? zv : 0) & av.w.Solid)
      }
      isStackableId(vv) {
        return NS(this.props, vv)
      }
      isFluidBlockId(vv) {
        var zv;
        return 0 !== ((null !== (zv = this.props.blockFlags[vv]) && void 0 !== zv ? zv : 0) & av.w.Fluid)
      }
      canPlaceOverBlockId(vv) {
        var zv;
        return 0 !== ((null !== (zv = this.props.blockFlags[vv]) && void 0 !== zv ? zv : 0) & av.w.PlaceOver)
      }
      attachedTopOf(vv) {
        var zv;
        return null !== (zv = this.props.blockAttachedTops[vv]) && void 0 !== zv ? zv : 0
      }
      isDroplessBlockId(vv) {
        return (0, Ph.dropsNothing)(vv)
      }
    }

    function CS(vv, zv) {
      const Pv = new Map;
      return (hv, Sv) => {
        const ev = zv.idOf(hv),
          gv = void 0 === ev ? null : (hv => {
            let Sv = Pv.get(hv);
            if (void 0 === Sv) {
              const ev = vv.queries.salvageRecipe(hv),
                gv = new DataView(vv.memory().buffer, vv.scratch(), ev),
                pv = [];
              for (let vv = 0; vv + av.Sd.BYTES <= ev; vv += av.Sd.BYTES) pv.push(Object.freeze({
                item: zv.nameOfId(av.Sd.item(gv, vv)),
                amt: av.Sd.amount(gv, vv)
              }));
              Sv = 0 === pv.length ? null : Object.freeze(pv), Pv.set(hv, Sv)
            }
            return Sv
          })(ev);
        if (null === gv || void 0 === Sv) return gv;
        const pv = Sv <= 0 ? 1 : Sv;
        return gv.map((vv => {
          let {
            item: zv,
            amt: Pv
          } = vv;
          return {
            item: zv,
            amt: Pv * pv
          }
        }))
      }
    }
    var iS = Pv(40209),
      cS = Pv(36460),
      GS = Pv(36448),
      mS = Pv(36498),
      jS = Pv(36031),
      fS = Pv(39993),
      FS = Pv(41899);
    const YS = -1,
      nS = new Uint8Array(0),
      OS = new TextEncoder;

    function DS(vv) {
      if (null === vv) return null;
      const zv = OS.encode(vv);
      return zv.byteLength < Wv.Qc ? zv : zv.subarray(0, Wv.Qc - 1)
    }
    class KS {
      constructor(vv) {
        this.deps = vv, this.lastView = null, this.lastKeyframes = [], this.keyframesVersion = YS, this.keyframesSettled = !1, this.reloadFrom = YS
      }
      reloadKeyframes() {
        var vv, zv;
        this.keyframesVersion = YS, this.reloadFrom = null !== (vv = null === (zv = this.view()) || void 0 === zv ? void 0 : zv.version) && void 0 !== vv ? vv : YS
      }
      setPlayback(vv) {
        const zv = 1 === this.deps.core.Uhv(vv);
        return zv && (this.lastView = null, this.lastKeyframes = [], this.keyframesVersion = YS, this.reloadFrom = YS), zv
      }
      async open(vv) {
        const zv = await this.deps.replay.open(vv);
        return "opening" === zv && (this.reloadKeyframes(), this.deps.recorder.prefetch()), zv
      }
      play() {
        this.deps.replay.play()
      }
      pause() {
        this.deps.replay.pause()
      }
      seek(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.deps.replay.seek(Math.max(0, Math.floor(vv)), zv)
      }
      setSpeed(vv) {
        this.deps.replay.setSpeed(vv)
      }
      setCameraMode(vv) {
        this.deps.replay.setCameraMode(FS.b.indexOf(vv))
      }
      view() {
        var vv;
        const zv = av.t.replayViewPtr(this.deps.apiView(), 0);
        if (0 === zv) return this.lastView = null, null;
        const Pv = new DataView(this.deps.buffer(), zv, av.Ld.BYTES),
          hv = av.Ld.version(Pv, 0),
          Sv = this.lastView;
        if (null !== Sv && Sv.version === hv) return Sv;
        const ev = av.Ld.markIn(Pv, 0),
          gv = {
            version: hv,
            state: av.Ld.state(Pv, 0),
            cameraMode: null !== (vv = FS.b[av.Ld.cameraMode(Pv, 0)]) && void 0 !== vv ? vv : "recording",
            MT: av.Ld.MT(Pv, 0),
            totalTicks: av.Ld.totalTicks(Pv, 0),
            speed: av.Ld.speed(Pv, 0),
            mark: ev === av.Kd ? null : {
              inTick: ev,
              outTick: av.Ld.markOut(Pv, 0)
            },
            editVersion: av.Ld.editVersion(Pv, 0)
          };
        return this.lastView = gv, gv
      }
      keyframes() {
        const vv = this.view();
        if (null === vv) return [];
        vv.version !== this.reloadFrom && (this.reloadFrom = YS);
        const zv = this.reloadFrom === YS && vv.state !== Wv.Cd.Cropping && vv.state !== Wv.Cd.None,
          Pv = zv ? vv.editVersion : vv.version;
        if (Pv === this.keyframesVersion && zv === this.keyframesSettled) return this.lastKeyframes;
        const {
          core: hv
        } = this.deps, Sv = hv.Rhv(), ev = hv.nC(), gv = [];
        if (0 !== ev && Sv > 0) {
          const vv = new DataView(this.deps.buffer(), ev, Sv * Wv.Bc);
          for (let zv = 0; zv < Sv; zv++) {
            const Pv = zv * Wv.Bc,
              hv = zv => vv.getFloat64(Pv + zv, !0);
            gv.push({
              MT: vv.getUint32(Pv + Wv.Oc, !0),
              position: [hv(Wv.Kc), hv(Wv.Kc + 8), hv(Wv.Kc + 16)],
              direction: [hv(Wv.Ec), hv(Wv.Ec + 8), hv(Wv.Ec + 16)],
              easing: [hv(Wv.Hc), hv(Wv.Hc + 8), hv(Wv.Hc + 16), hv(Wv.Hc + 24)]
            })
          }
        }
        return this.keyframesVersion = Pv, this.keyframesSettled = zv, this.lastKeyframes = gv, gv
      }
      addKeyframe() {
        const vv = this.deps.apiView(),
          zv = [av.t.eye(vv, 0, 0), av.t.eye(vv, 0, 1), av.t.eye(vv, 0, 2)];
        return this.deps.replay.addKeyframe(zv, function(vv, zv) {
          const Pv = Math.cos(zv);
          return [Pv * Math.sin(vv), -Math.sin(zv), Pv * Math.cos(vv)]
        }(av.t.heading(vv, 0), av.t.pitch(vv, 0)))
      }
      setKeyframe(vv) {
        return this.deps.replay.setKeyframe(vv.MT, Float64Array.from([...vv.position, ...vv.direction, ...vv.easing]))
      }
      moveKeyframe(vv, zv) {
        return this.deps.replay.moveKeyframe(vv, zv)
      }
      deleteKeyframes(vv, zv) {
        return this.deps.replay.deleteKeyframes(vv, zv)
      }
      setMark(vv) {
        var zv, Pv;
        return this.deps.replay.setMark(null !== (zv = null === vv || void 0 === vv ? void 0 : vv.inTick) && void 0 !== zv ? zv : -1, null !== (Pv = null === vv || void 0 === vv ? void 0 : vv.outTick) && void 0 !== Pv ? Pv : -1)
      }
      crop(vv, zv) {
        const Pv = this.deps.replay.crop(vv, zv);
        return Pv && this.reloadKeyframes(), Pv
      }
      save(vv) {
        return this.deps.replay.askSave(), this.deps.recorder.saveEdited(vv)
      }
      recorderControl(vv) {
        this.deps.recorder.control(vv)
      }
      recorderPrefs(vv, zv) {
        this.deps.recorder.prefs(vv, zv)
      }
      recorderOption(vv, zv) {
        const Pv = this.deps.cmd();
        return null !== Pv && (0, av.yf)(Pv, 0, vv, null === zv ? nS : OS.encode(zv))
      }
      recordFlyingText(vv, zv, Pv, hv) {
        const Sv = this.deps.cmd(),
          ev = Math.max(0, Math.min(4294967295, Math.round(hv)));
        return null !== Sv && (0, av.vf)(Sv, 0, zv, Pv, ev, OS.encode(vv))
      }
      recordPlayerKilled(vv, zv, Pv, hv) {
        const Sv = this.deps.cmd();
        return null !== Sv && (0, av.Cf)(Sv, 0, vv, zv, Math.max(0, Pv), OS.encode(hv))
      }
      recordKillfeed(vv, zv, Pv) {
        var hv, Sv;
        const ev = this.deps.cmd(),
          gv = function(vv) {
            const zv = vv.reduce(((vv, zv) => {
                var Pv;
                return vv + EP.kb + (null !== (Pv = null === zv || void 0 === zv ? void 0 : zv.byteLength) && void 0 !== Pv ? Pv : 0)
              }), 0),
              Pv = new Uint8Array(zv),
              hv = new DataView(Pv.buffer);
            let Sv = 0;
            for (const gv of vv) {
              var ev;
              hv.setUint16(Sv, null !== (ev = null === gv || void 0 === gv ? void 0 : gv.byteLength) && void 0 !== ev ? ev : Wv.Qc, !0), Sv += EP.kb, null !== gv && (Pv.set(gv, Sv), Sv += gv.byteLength)
            }
            return Pv
          }([DS(vv.name), DS(vv.colour), DS(zv.name), DS(zv.colour), DS(Pv)]);
        return null !== ev && (0, av.xf)(ev, 0, null !== (hv = vv.id) && void 0 !== hv ? hv : av.ad, null !== (Sv = zv.id) && void 0 !== Sv ? Sv : av.ad, gv)
      }
      recorderSession(vv, zv) {
        this.deps.recorder.session({
          session: zv,
          lobbyType: vv.lobbyType,
          game: vv.gameNameWithVariation,
          lobby: vv.lobbyName
        })
      }
      recorderClose() {
        this.deps.core.xhv()
      }
      filePartDone(vv, zv) {
        this.deps.recorder.filePartDone(vv, zv)
      }
      fileDone(vv) {
        this.deps.recorder.fileDone(vv)
      }
    }
    const VS = -2147483648;
    class US {
      constructor(vv) {
        var zv;
        this.deps = vv, this.state = {
          recording: !1,
          clipping: !1,
          hasClipBuffer: !1,
          seconds: 0
        }, this.recordingSince = null, this.clipTickPending = !1, this.now = void 0, this.now = null !== (zv = vv.now) && void 0 !== zv ? zv : () => performance.now()
      }
      get current() {
        return this.state
      }
      get live() {
        var vv, zv, Pv;
        return null === (vv = null === (zv = (Pv = this.deps).live) || void 0 === zv ? void 0 : zv.call(Pv)) || void 0 === vv || vv
      }
      activated(vv) {
        var zv, Pv;
        this.live && (this.viewerShown(!0 === (null === (zv = (Pv = this.deps).viewerOpen) || void 0 === zv ? void 0 : zv.call(Pv))), this.deps.client.recorderSession(vv, (0, FS.c)()))
      }
      closed() {
        this.deps.client.recorderClose()
      }
      toggleRecording() {
        var vv, zv;
        this.live && (this.state.recording || !0 !== (null === (vv = (zv = this.deps).viewerOpen) || void 0 === vv ? void 0 : vv.call(zv))) ? this.deps.client.recorderControl(Wv.fd.ToggleRecording) : this.deps.notify(mS.c.closeViewerFirst)
      }
      saveClip() {
        this.live ? this.deps.client.recorderControl(Wv.fd.SaveClip) : this.deps.notify(mS.c.clippingNotOn)
      }
      viewerShown(vv) {
        this.live && this.deps.client.recorderControl(vv ? Wv.fd.ViewerOpened : Wv.fd.ViewerClosed)
      }
      setPrefs(vv, zv) {
        this.live && this.deps.client.recorderPrefs(vv, zv)
      }
      setOption(vv, zv) {
        this.live && this.deps.client.recorderOption(vv, zv)
      }
      recordFlyingText(vv, zv, Pv, hv) {
        this.live && this.deps.client.recordFlyingText(vv, zv, Pv, hv)
      }
      recordPlayerKilled(vv, zv, Pv, hv) {
        this.live && this.deps.client.recordPlayerKilled(vv, zv, Pv, hv)
      }
      recordKillfeed(vv, zv, Pv) {
        this.live && this.deps.client.recordKillfeed(vv, zv, Pv)
      }
      MT() {
        let vv = this.state;
        if (this.clipTickPending && (this.clipTickPending = !1, vv = {
            ...vv,
            hasClipBuffer: !0
          }), null !== this.recordingSince) {
          const zv = Math.floor((this.now() - this.recordingSince) / 1e3);
          zv !== vv.seconds && (vv = {
            ...vv,
            seconds: zv
          })
        }
        this.set(vv)
      }
      onEvent(vv) {
        var zv, Pv;
        const {
          notify: hv
        } = this.deps, Sv = mS.c;
        switch (vv.what) {
          case Wv.cd.RecordingStarted:
            this.recordingSince = this.now(), this.set({
              ...this.state,
              recording: !0,
              seconds: 0
            }), hv(Sv.recordingStarted);
            break;
          case Wv.cd.RecordingStopped:
            this.stopRecording(), hv(Sv.recordingStopped), this.saveState(Wv.qd.Recording, "saving");
            break;
          case Wv.cd.RecordingDiscarded:
            this.stopRecording(), hv(Sv.recordingDiscarded);
            break;
          case Wv.cd.RecordingTurnedOff:
            this.stopRecording(), hv(Sv.recordingTurnedOff);
            break;
          case Wv.cd.LimitReached:
            hv(Sv.limitReached);
            break;
          case Wv.cd.ClipSaved:
            this.saveState(Wv.qd.Clip, "saving");
            break;
          case Wv.cd.ClipEmpty:
            hv(Sv.clipEmpty);
            break;
          case Wv.cd.ClippingNotOn:
            hv(Sv.clippingNotOn);
            break;
          case Wv.cd.Disallowed:
            hv(Sv.disallowed);
            break;
          case Wv.cd.ClippingOn:
            this.clipTickPending = !0, this.set({
              ...this.state,
              clipping: !0,
              hasClipBuffer: !1
            });
            break;
          case Wv.cd.ClippingOff:
            this.clipTickPending = !1, this.set({
              ...this.state,
              clipping: !1,
              hasClipBuffer: !1
            });
            break;
          case Wv.cd.ClipSettingsChanged:
            this.clipTickPending = this.state.clipping, this.set({
              ...this.state,
              hasClipBuffer: !1
            });
            break;
          case Wv.cd.SaveBusy:
            null === (zv = (Pv = this.deps).onSaveState) || void 0 === zv || zv.call(Pv, vv.kind, "busy"), hv(Sv.saveBusy);
            break;
          case Wv.cd.CloseViewerFirst:
            hv(Sv.closeViewerFirst)
        }
      }
      fileReady(vv, zv) {
        this.deps.download(zv), this.saveState(vv, "done"), this.deps.notify(vv === Wv.qd.Clip ? mS.c.clipSaved : mS.c.recordingSaved)
      }
      failed(vv) {
        this.saveState(vv, "failed"), this.deps.notify(vv === Wv.qd.Clip ? mS.c.clipFailed : mS.c.recordingFailed)
      }
      stopRecording() {
        this.recordingSince = null, this.set({
          ...this.state,
          recording: !1,
          seconds: 0
        })
      }
      saveState(vv, zv) {
        var Pv, hv;
        null === (Pv = (hv = this.deps).onSaveState) || void 0 === Pv || Pv.call(hv, vv, zv)
      }
      set(vv) {
        vv !== this.state && (this.state = vv, this.deps.onState(vv))
      }
    }
    const RS = new TextDecoder;

    function xS(vv, zv, Pv, hv) {
      const Sv = [];
      for (let ev = 0; ev < hv; ev++) {
        if (zv + EP.kb > Pv) return null;
        const hv = vv.getUint16(zv, !0);
        if (zv += EP.kb, hv !== Wv.Qc) {
          if (zv + hv > Pv) return null;
          Sv.push(RS.decode(new Uint8Array(vv.buffer, vv.byteOffset + zv, hv))), zv += hv
        } else Sv.push(null)
      }
      return zv === Pv ? Sv : null
    }

    function tS(vv, zv) {
      let Pv = new DataView(new ArrayBuffer(0)),
        hv = !0;
      const Sv = {
        replayFailed: (zv, Pv) => {
          vv.replayFailed({
            reason: zv,
            code: Pv
          })
        },
        replayOption: (zv, Sv, ev, gv) => {
          const pv = function(vv, zv, Pv, hv) {
            switch (zv) {
              case Wv.ud.Cleared:
                return 0 === hv ? null : void 0;
              case Wv.ud.Text:
                return RS.decode(new Uint8Array(vv.buffer, vv.byteOffset + Pv, hv));
              case Wv.ud.Int:
                return hv === Int32Array.BYTES_PER_ELEMENT ? vv.getInt32(Pv, !0) : void 0;
              case Wv.ud.Double:
                return hv === Float64Array.BYTES_PER_ELEMENT ? vv.getFloat64(Pv, !0) : void 0;
              default:
                return
            }
          }(Pv, Sv, ev, gv);
          void 0 !== pv ? vv.replayOption({
            key: zv,
            value: pv
          }) : hv = !1
        },
        replayUiEvent: (zv, Sv, ev, gv, pv, dv) => {
          const Nv = function(vv, zv, Pv, hv, Sv, ev, gv) {
            const pv = ev + gv;
            switch (zv) {
              case Wv.yd.FlyingText: {
                const gv = xS(vv, ev, pv, 1);
                return null !== gv && null !== gv[0] ? {
                  what: zv,
                  sP: Pv,
                  aP: hv,
                  angle: Sv,
                  contentJson: gv[0]
                } : null
              }
              case Wv.yd.PlayerKilled: {
                const hv = xS(vv, ev, pv, 3);
                return hv ? {
                  what: zv,
                  killstreak: Pv,
                  dead: hv[0],
                  killer: hv[1],
                  withItem: hv[2]
                } : null
              }
              case Wv.yd.Killfeed: {
                const Pv = xS(vv, ev, pv, 7);
                return Pv ? {
                  what: zv,
                  killerId: Pv[0],
                  killerName: Pv[1],
                  killerColour: Pv[2],
                  victimId: Pv[3],
                  victimName: Pv[4],
                  victimColour: Pv[5],
                  withItem: Pv[6]
                } : null
              }
              default:
                return null
            }
          }(Pv, zv, Sv, ev, gv, pv, dv);
          null !== Nv ? vv.replayUiEvent(Nv) : hv = !1
        },
        replayFilePart: (Pv, Sv, ev, gv) => {
          const pv = zv();
          ev + gv > pv.byteLength ? hv = !1 : vv.filePart(Pv, Sv, new Uint8Array(pv, ev, gv).slice())
        },
        replayFileReady: (zv, Pv, hv, Sv) => {
          vv.fileReady({
            save: zv,
            kind: Pv,
            parts: hv,
            bytes: Sv
          })
        },
        recorderEvent: (zv, Pv, hv) => {
          vv.recorderEvent({
            what: zv,
            kind: Pv,
            save: hv
          })
        },
        replayOpened: (zv, hv, Sv) => {
          vv.replayOpened(RS.decode(new Uint8Array(Pv.buffer, Pv.byteOffset + hv, Sv)))
        }
      };
      return (vv, zv, ev, gv) => !(vv < Wv.$.ReplayFailed || vv > Wv.$.RecorderEvent) && (Pv = zv, hv = !0, (0, av.me)(vv, zv, ev, gv, Sv) && hv)
    }

    function qS(vv) {
      let zv = null;
      const Pv = tS(vv, (() => {
        if (null === zv) throw new Error("a recorder event read outside recorderEventReader's call");
        return zv.buffer
      }));
      return (vv, hv) => {
        zv = hv;
        try {
          ! function(vv, zv) {
            const Pv = vv.slice(),
              hv = new DataView(Pv.buffer);
            for (let Sv = 0; Sv < Pv.byteLength;) {
              if (Sv + Wv.Y > Pv.byteLength) throw new Error(`the recorder module's events end mid-head at ${Sv}`);
              const vv = hv.getUint32(Sv, !0),
                ev = 65535 & vv,
                gv = vv >>> 16,
                pv = Sv + Wv.Y;
              if (pv + gv > Pv.byteLength || !zv(ev, hv, pv, gv)) throw new Error(`the recorder module wrote a malformed event ${ev} (${gv} bytes) at ${Sv}`);
              Sv = pv + (0, Wv.Le)(gv)
            }
          }(vv, Pv)
        } finally {
          zv = null
        }
      }
    }
    class IS {
      constructor(vv, zv) {
        this.acks = vv, this.handlers = zv, this.parts = new Map
      }
      onPart(vv, zv, Pv) {
        let hv = this.parts.get(vv);
        hv || (hv = [], this.parts.set(vv, hv)), hv[zv] = Pv, this.acks.filePartDone(vv, zv)
      }
      onReady(vv) {
        var zv;
        const Pv = null !== (zv = this.parts.get(vv.save)) && void 0 !== zv ? zv : [];
        this.parts.delete(vv.save);
        const hv = function(vv, zv, Pv) {
          if (vv.length !== zv) return null;
          let hv = 0;
          for (let gv = 0; gv < zv; gv++) {
            if (void 0 === vv[gv]) return null;
            hv += vv[gv].byteLength
          }
          if (hv !== Pv) return null;
          if (1 === zv) return vv[0];
          const Sv = new Uint8Array(Pv);
          let ev = 0;
          for (const gv of vv) Sv.set(gv, ev), ev += gv.byteLength;
          return Sv
        }(Pv, vv.parts, vv.bytes);
        this.acks.fileDone(vv.save), null === hv ? this.handlers.fileIncomplete(vv.save, vv.kind) : this.handlers.fileReady(vv.save, vv.kind, hv)
      }
      onDiscarded(vv) {
        this.parts.delete(vv)
      }
    }

    function QS() {
      return Pv.e(58).then((() => Pv(41945)))
    }
    class ZS {
      constructor(vv) {
        this.deps = vv, this.sink = void 0, this.recorder = void 0, this.recorderEvents = void 0, this.parts = void 0, this.viewerChunk = null, this.viewer = null;
        const {
          client: zv
        } = vv;
        this.recorder = new US({
          client: zv,
          live: () => {
            var vv;
            return !0 !== (null === (vv = this.viewer) || void 0 === vv ? void 0 : vv.inPlayback)
          },
          viewerOpen: vv.viewerOpen,
          notify: vv.notify,
          download: zv => {
            var Pv;
            null === (Pv = vv.download) || void 0 === Pv || Pv.call(vv, zv)
          },
          onState: vv.onRecorderState,
          onSaveState: vv.onSaveState
        }), this.parts = new IS(zv, {
          fileReady: (vv, zv, Pv) => {
            var hv;
            zv === Wv.qd.Edited ? null === (hv = this.viewer) || void 0 === hv || hv.saveDone(Pv) : this.recorder.fileReady(zv, Pv)
          },
          fileIncomplete: (vv, zv) => {
            this.saveFailed(zv)
          }
        });
        const Pv = {
          replayFailed: vv => {
            var zv;
            null === (zv = this.viewer) || void 0 === zv || zv.onFailed(vv)
          },
          replayOption: zv => {
            var Pv;
            null === (Pv = vv.onReplayOption) || void 0 === Pv || Pv.call(vv, zv)
          },
          replayUiEvent: zv => {
            var Pv;
            null === (Pv = vv.onReplayUiEvent) || void 0 === Pv || Pv.call(vv, zv)
          },
          filePart: (vv, zv, Pv) => {
            this.parts.onPart(vv, zv, Pv)
          },
          fileReady: vv => {
            this.parts.onReady(vv)
          },
          replayOpened: zv => {
            var Pv;
            null === (Pv = vv.onReplayOpened) || void 0 === Pv || Pv.call(vv, zv)
          },
          recorderEvent: vv => {
            var zv;
            switch (vv.what) {
              case Wv.cd.FileDiscarded:
                this.parts.onDiscarded(vv.save);
                break;
              case Wv.cd.SaveFailed:
                this.saveFailed(vv.kind);
                break;
              case Wv.cd.SaveBusy:
                if (null !== (zv = this.viewer) && void 0 !== zv && zv.savePending) {
                  this.viewer.saveFailed(!0);
                  break
                }
                this.recorder.onEvent(vv);
                break;
              default:
                this.recorder.onEvent(vv)
            }
          }
        };
        this.sink = function(vv, zv) {
          return {
            onReplayEvent: tS(vv, zv)
          }
        }(Pv, vv.buffer), this.recorderEvents = qS(Pv)
      }
      get currentViewer() {
        return this.viewer
      }
      loadViewer() {
        var vv;
        return this.viewer ? Promise.resolve(this.viewer) : (this.viewerChunk ??= (null !== (vv = this.deps.loadViewer) && void 0 !== vv ? vv : QS)().catch((vv => {
          throw this.viewerChunk = null, vv
        })), this.viewerChunk.then((vv => (this.viewer ??= new vv.ReplayViewer({
          client: this.deps.client,
          setHoldDraws: this.deps.setHoldDraws,
          meshPending: this.deps.meshPending,
          notify: this.deps.notify,
          onChange: () => {
            var vv, zv;
            null === (vv = (zv = this.deps).onViewerChange) || void 0 === vv || vv.call(zv)
          }
        }), this.viewer))))
      }
      activated(vv) {
        this.recorder.activated(vv)
      }
      afterFrame(vv) {
        try {
          vv > 0 && this.recorder.MT()
        } finally {
          var zv;
          null === (zv = this.viewer) || void 0 === zv || zv.afterFrame()
        }
      }
      end() {
        var vv;
        null === (vv = this.viewer) || void 0 === vv || vv.end()
      }
      saveFailed(vv) {
        var zv;
        vv === Wv.qd.Edited ? null === (zv = this.viewer) || void 0 === zv || zv.saveFailed(!1) : this.recorder.failed(vv)
      }
    }
    var AS = Pv(39933),
      LS = Pv(39949),
      HS = Pv(4550),
      MS = Pv(40295);
    class yS {
      constructor(vv) {
        this.deps = vv, this.analogue = [0, 0], this.keys = 0, this.unsent = !1
      }
      drag(vv, zv) {
        if (!this.deps.live() || 0 === vv && 0 === zv) return;
        const Pv = (0, Qv.s)(0, performance.now()),
          hv = this.deps.dragScale();
        (0, MS.g)((() => {
          (0, Qv.x)(Wv.Bb.MouseDown, 0, 0, 0, Pv), (0, Qv.x)(Wv.Bb.MouseMove, 0, vv * hv, zv * hv, 0), (0, Qv.x)(Wv.Bb.MouseUp, 0, 0, 0, Pv)
        }))
      }
      move(vv) {
        var zv, Pv;
        this.analogue[0] = null !== (zv = null === vv || void 0 === vv ? void 0 : vv.x) && void 0 !== zv ? zv : 0, this.analogue[1] = null !== (Pv = null === vv || void 0 === vv ? void 0 : vv.y) && void 0 !== Pv ? Pv : 0, this.send()
      }
      holdVertical(vv, zv) {
        const Pv = "freeCamUp" === vv ? av.Zb.Up : av.Zb.Down;
        this.keys = zv ? this.keys | Pv : this.keys & ~Pv, this.send()
      }
      flush() {
        this.unsent && this.send()
      }
      send() {
        const vv = this.deps.live() ? this.deps.cmd() : null;
        this.unsent = null !== vv && !(0, av.Ce)(vv, 0, this.analogue, this.keys)
      }
    }
    var BS = Pv(716),
      JS = Pv(284),
      ES = Pv(73),
      oS = Pv(8909);

    function bS() {
      const vv = hv.c.get("clientEscMenuOptions"),
        zv = (0, BS.k)(vv);
      return {
        mouse: (0, ES.isMobile)() ? zv : vv.mouseSensitivity,
        touch: zv,
        fovPercent: vv.cameraFOV
      }
    }

    function rS() {
      const vv = hv.c.get("clientEscMenuOptions"),
        zv = hv.c.get("isTouchScreen") ? (0, BS.k)(vv) : vv.mouseSensitivity,
        Pv = bS().mouse;
      return Pv > 0 ? zv / Pv : 1
    }

    function kS(vv) {
      const zv = () => {
        vv.setSoundPrefs(hv.c.get("soundVolume"), hv.c.get("soundOnFromAd"))
      };
      let Pv = null;
      const Sv = () => {
        const {
          showFog: zv,
          enableLighting: Sv,
          fogChunkDistance: ev,
          chunkFadeIn: gv
        } = hv.c.get("clientEscMenuOptions"), pv = {
          showFog: zv,
          lighting: Sv,
          fogChunks: ev,
          chunkFade: gv
        };
        Pv && (0, Wv.se)(Pv) === (0, Wv.se)(pv) && Pv.fogChunks === ev || (Pv = pv, vv.setEnvPrefs(Pv))
      };
      let ev = null;
      const pv = () => {
        const zv = function() {
          const vv = hv.c.get("clientEscMenuOptions");
          return {
            nametagsHidden: hv.c.get("areNametagsHidden"),
            crouchToggle: vv.crouchIsToggle,
            bhopDisabled: vv.disableBunnyHopping,
            disableBobbing: vv.disableBobbing,
            ezTowering: vv.ezTowering && (0, JS.e)(),
            ezBridging: vv.ezBridging,
            showChunkBorders: vv.showChunkBorders,
            nametagCutDistance: (0, oS.f)()
          }
        }();
        (0, Ov.Ud)(ev, zv) || (ev = zv, vv.setUiPrefs(zv))
      };
      let dv = null;
      const Nv = () => {
        const zv = bS();
        (0, Ov.Ud)(dv, zv) || (dv = zv, vv.setLookPrefs(zv))
      };
      zv(), Sv(), pv(), Nv();
      const lv = [(0, gv.l)("appManagerUpdated|soundVolume", zv), (0, gv.l)("appManagerUpdated|soundOnFromAd", zv), (0, gv.l)("appManagerUpdated|clientEscMenuOptions", (() => {
        Sv(), pv(), Nv()
      })), (0, gv.l)("appManagerUpdated|areNametagsHidden", pv), (0, gv.l)("appManagerUpdated|showDistantNametags", pv)];
      return () => {
        for (const vv of lv) vv()
      }
    }
    var XS = Pv(40217),
      uS = Pv(40221);
    var ve = (0, uS.b)("lend"),
      ze = (0, uS.b)("starting"),
      Pe = (0, uS.b)("generation"),
      he = (0, uS.b)("end");
    class Se {
      constructor(vv) {
        this.deps = vv, Object.defineProperty(this, he, {
          value: ee
        }), Object.defineProperty(this, ve, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, ze, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, Pe, {
          writable: !0,
          value: 0
        })
      }
      get active() {
        return null !== (0, XS.e)(this, ve)[ve] || (0, XS.e)(this, ze)[ze]
      }
      async start(vv) {
        if (this.active) return "busy";
        const zv = (0, XS.e)(this, Pe)[Pe];
        (0, XS.e)(this, ze)[ze] = !0;
        try {
          if (!await this.deps.ensureLoaded()) return "refused"
        } finally {
          (0, XS.e)(this, ze)[ze] = !1
        }
        if (zv !== (0, XS.e)(this, Pe)[Pe]) return "refused";
        const Pv = this.deps.beginSave();
        if (!Pv) return "refused";
        const hv = Number(BigInt.asUintN(32, vv)),
          Sv = Number(BigInt.asUintN(32, vv >> 32n));
        let ev = "refused";
        return this.deps.recorderCall(((vv, zv) => {
          const gv = Pv.editState,
            pv = vv.stage(gv.length);
          0 !== pv ? (new Uint8Array(zv.buffer, pv, gv.length).set(gv), vv.thv(Pv.headLen, hv, Sv) && (ev = "sealing")) : ev = "tooLarge"
        }), !0), "sealing" !== ev ? (Pv.end(), ev) : ((0, XS.e)(this, ve)[ve] = Pv, "sealing")
      }
      beforeRecorderStep() {
        const vv = (0, XS.e)(this, ve)[ve];
        if (!vv) return null;
        let zv = -1,
          Pv = 0;
        if (!this.deps.recorderCall((vv => {
            zv = vv.qhv(), zv > 0 && (Pv = vv.Ihv())
          }))) return (0, XS.e)(this, he)[he](vv, "stopped");
        if (zv < 0) return (0, XS.e)(this, he)[he](vv, "read");
        if (0 === zv) return null;
        const hv = vv.head(Pv, zv);
        let Sv = !1;
        if (hv && this.deps.recorderCall(((vv, Pv) => {
            const ev = vv.stage(zv);
            0 !== ev && (new Uint8Array(Pv.buffer, ev, zv).set(hv), Sv = !0)
          }), !0), Sv) return null;
        const ev = vv.givenUp();
        this.deps.recorderCall((vv => {
          vv.Qhv()
        }));
        const gv = (0, XS.e)(this, he)[he](vv, ev ? "givenUp" : "stopped");
        return ev && this.deps.givenUp("Reopen the replay you were editing to make your edits again, as they weren't saved when another replay opened."), gv
      }
      stop() {
        (0, XS.e)(this, Pe)[Pe]++;
        const vv = (0, XS.e)(this, ve)[ve];
        vv && (this.deps.recorderCall((vv => {
          vv.Qhv()
        })), (0, XS.e)(this, he)[he](vv, "stopped"))
      }
    }

    function ee(vv, zv) {
      return (0, XS.e)(this, ve)[ve] = null, vv.end(), zv
    }

    function ge(vv, zv) {
      const Pv = new Uint8Array(4),
        hv = new DataView(Pv.buffer);
      return hv.setUint8(0, vv ? 1 : 0), hv.setUint16(2, Math.max(0, Math.min(65535, Math.round(zv))), !0), Pv
    }

    function pe(vv, zv) {
      return vv > function(vv) {
        return 16777216 + 314572.8 * Math.max(0, vv)
      }(zv) + 33554432
    }
    let de = null;

    function Ne(vv) {
      return de ??= async function(vv) {
        const zv = vv.loadInFlight();
        zv && await zv.catch((() => {}));
        if (vv.trapped()) return "trapped";
        if (vv.busy() || !pe(vv.memoryBytes(), vv.clipSeconds())) return "Yw";
        vv.unload();
        let Pv = !1;
        try {
          Pv = await vv.load()
        } catch {
          Pv = !1
        }
        if (!Pv) return vv.trapped() ? "trapped" : vv.ea() ? "ea" : "failed";
        return "recycled"
      }(vv).finally((() => {
        de = null
      })), de
    }
    const le = "Replay recording couldn't load, so try again.",
      Te = new Set([Wv.fd.ToggleRecording, Wv.fd.SaveClip]);
    var We = (0, uS.b)("bindings"),
      we = (0, uS.b)("module"),
      ae = (0, uS.b)("memory"),
      se = (0, uS.b)("trapped"),
      Ce = (0, uS.b)("ea"),
      ie = (0, uS.b)("recycleDue"),
      ce = (0, uS.b)("loading"),
      Ge = (0, uS.b)("generation"),
      me = (0, uS.b)("viewDrawn"),
      je = (0, uS.b)("clip"),
      fe = (0, uS.b)("session"),
      Fe = (0, uS.b)("control"),
      Ye = (0, uS.b)("deferred"),
      ne = (0, uS.b)("coreU8"),
      Oe = (0, uS.b)("coreU32"),
      De = (0, uS.b)("moduleU8"),
      Ke = (0, uS.b)("edited"),
      Ve = (0, uS.b)("sendSession"),
      Ue = (0, uS.b)("checkNotInEvents"),
      Re = (0, uS.b)("clipping"),
      xe = (0, uS.b)("busy"),
      te = (0, uS.b)("use"),
      qe = (0, uS.b)("ensureLoaded"),
      Ie = (0, uS.b)("loadOnce"),
      Qe = (0, uS.b)("recycleAfterStep"),
      Ze = (0, uS.b)("settleRecycle"),
      Ae = (0, uS.b)("load"),
      Le = (0, uS.b)("attach"),
      He = (0, uS.b)("resendHeld"),
      Me = (0, uS.b)("recycle"),
      ye = (0, uS.b)("send"),
      Be = (0, uS.b)("unload"),
      Je = (0, uS.b)("dropModule"),
      Ee = (0, uS.b)("coreBytes"),
      oe = (0, uS.b)("coreWords"),
      be = (0, uS.b)("moduleBytes"),
      re = (0, uS.b)("loadFailed"),
      ke = (0, uS.b)("call"),
      Xe = (0, uS.b)("guard"),
      ue = (0, uS.b)("trapOn");
    class vg {
      constructor(vv) {
        this.deps = vv, Object.defineProperty(this, ue, {
          value: Fg
        }), Object.defineProperty(this, Xe, {
          value: fg
        }), Object.defineProperty(this, ke, {
          value: jg
        }), Object.defineProperty(this, re, {
          value: mg
        }), Object.defineProperty(this, be, {
          value: Gg
        }), Object.defineProperty(this, oe, {
          value: cg
        }), Object.defineProperty(this, Ee, {
          value: ig
        }), Object.defineProperty(this, Je, {
          value: Cg
        }), Object.defineProperty(this, Be, {
          value: sg
        }), Object.defineProperty(this, ye, {
          value: ag
        }), Object.defineProperty(this, Me, {
          value: wg
        }), Object.defineProperty(this, He, {
          value: Wg
        }), Object.defineProperty(this, Le, {
          value: Tg
        }), Object.defineProperty(this, Ae, {
          value: lg
        }), Object.defineProperty(this, Ze, {
          value: Ng
        }), Object.defineProperty(this, Qe, {
          value: dg
        }), Object.defineProperty(this, Ie, {
          value: pg
        }), Object.defineProperty(this, qe, {
          value: gg
        }), Object.defineProperty(this, te, {
          value: eg
        }), Object.defineProperty(this, xe, {
          value: Sg
        }), Object.defineProperty(this, Re, {
          value: hg
        }), Object.defineProperty(this, Ue, {
          value: Pg
        }), Object.defineProperty(this, Ve, {
          value: zg
        }), Object.defineProperty(this, We, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, we, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, ae, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, se, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, Ce, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, ie, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, ce, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Ge, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, me, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, je, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, fe, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Fe, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Ye, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, ne, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Oe, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, De, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Ke, {
          writable: !0,
          value: void 0
        }), (0, XS.e)(this, Ke)[Ke] = new Se({
          ensureLoaded: () => (0, XS.e)(this, qe)[qe](),
          recorderCall: (vv, zv) => {
            zv && (0, XS.e)(this, Ue)[Ue]("an edited save's stage");
            const Pv = (0, XS.e)(this, ke)[ke](((zv, Pv) => (vv(zv, Pv), !0)));
            return null !== Pv && void 0 !== Pv && Pv
          },
          beginSave: vv.beginSave,
          givenUp: vv.givenUp
        })
      }
      get active() {
        return null !== (0, XS.e)(this, we)[we]
      }
      get trapped() {
        return (0, XS.e)(this, se)[se]
      }
      get loading() {
        return null !== (0, XS.e)(this, ce)[ce]
      }
      prefetch() {
        (0, XS.e)(this, Ce)[Ce] || (0, XS.e)(this, se)[se] || (0, XS.e)(this, we)[we] || (0, XS.e)(this, ce)[ce] || this.deps.prefetch()
      }
      viewDrawn() {
        (0, XS.e)(this, me)[me] = !0, (0, XS.e)(this, Re)[Re]() && (0, XS.e)(this, te)[te]()
      }
      prefs(vv, zv) {
        (0, XS.e)(this, je)[je] = {
          on: vv,
          seconds: zv
        }, (0, XS.e)(this, ye)[ye](Wv.$c.Prefs, ge(vv, zv)), vv && (0, XS.e)(this, me)[me] && (0, XS.e)(this, te)[te]()
      }
      control(vv) {
        const zv = function(vv) {
          return new Uint8Array([vv, 0, 0, 0])
        }(vv);
        if (Te.has(vv)) return (0, XS.e)(this, we)[we] ? void(0, XS.e)(this, ye)[ye](Wv.$c.Control, zv) : ((0, XS.e)(this, Fe)[Fe] = zv, void(0, XS.e)(this, te)[te]());
        (0, XS.e)(this, Ce)[Ce] || this.deps.coreCommand(Wv.$c.Control, zv)
      }
      session(vv) {
        (0, XS.e)(this, fe)[fe] = vv, (0, XS.e)(this, Ve)[Ve](vv)
      }
      filePartDone(vv, zv) {
        (0, XS.e)(this, ye)[ye](Wv.$c.FilePartDone, function(vv, zv) {
          const Pv = new Uint8Array(8),
            hv = new DataView(Pv.buffer);
          return hv.setUint32(0, vv, !0), hv.setUint32(4, zv, !0), Pv
        }(vv, zv))
      }
      fileDone(vv) {
        return (0, XS.e)(this, ye)[ye](Wv.$c.FileDone, function(vv) {
          const zv = new Uint8Array(4);
          return new DataView(zv.buffer).setUint32(0, vv, !0), zv
        }(vv)), (0, XS.e)(this, Qe)[Qe]()
      }
      saveEdited(vv) {
        return (0, XS.e)(this, Ue)[Ue]("saveEdited"), (0, XS.e)(this, Ke)[Ke].start(vv)
      }
      afterFrame() {
        if (!(0, XS.e)(this, we)[we]) return;
        "read" === (0, XS.e)(this, Ke)[Ke].beforeRecorderStep() && (0, XS.e)(this, Qe)[Qe]();
        const vv = (0, XS.e)(this, ie)[ie];
        (0, XS.e)(this, ie)[ie] = null;
        const zv = (0, XS.e)(this, we)[we],
          Pv = (0, XS.e)(this, ae)[ae];
        if (!zv || !Pv) return void(null === vv || void 0 === vv || vv.resolve((0, XS.e)(this, se)[se] ? "trapped" : "Yw"));
        const {
          core: hv
        } = this.deps, Sv = hv.Lhv(2);
        let ev, gv, pv, dv, Nv = 0,
          lv = 0;
        if (0 !== Sv) {
          var Tv, Wv;
          const vv = (0, XS.e)(this, oe)[oe]();
          Nv = null !== (Tv = vv[Sv >>> 2]) && void 0 !== Tv ? Tv : 0, lv = null !== (Wv = vv[1 + (Sv >>> 2)]) && void 0 !== Wv ? Wv : 0
        }
        try {
          if (lv > 0) {
            const vv = zv.feed(lv);
            0 !== vv && (0, XS.e)(this, be)[be](Pv).set((0, XS.e)(this, Ee)[Ee]().subarray(Nv, Nv + lv), vv)
          }
          ev = zv.step(), gv = zv.Hhv(), pv = zv.Mhv(), dv = zv.yhv()
        } catch (wv) {
          if (!(0, XS.e)(this, ue)[ue](wv)) throw null === vv || void 0 === vv || vv.resolve("Yw"), wv;
          return void(null === vv || void 0 === vv || vv.resolve("trapped"))
        }
        if (ev > 0) {
          const vv = hv.Bhv(2, ev);
          0 !== vv && (0, XS.e)(this, Ee)[Ee]().set((0, XS.e)(this, be)[be](Pv).subarray(gv, gv + ev), vv)
        }
        if (pv > 0) {
          (0, XS.e)(this, Ye)[Ye] = [];
          try {
            this.deps.events(new Uint8Array(Pv.buffer, dv, pv), Pv)
          } catch (wv) {
            throw null === vv || void 0 === vv || vv.resolve("Yw"), wv
          } finally {
            const vv = (0, XS.e)(this, Ye)[Ye];
            (0, XS.e)(this, Ye)[Ye] = null;
            for (const [zv, Pv] of vv)(0, XS.e)(this, ye)[ye](zv, Pv)
          }
        }
        if (!(0, XS.e)(this, Re)[Re]() && !(0, XS.e)(this, xe)[xe]()) return (0, XS.e)(this, Be)[Be](), void(null === vv || void 0 === vv || vv.resolve("Yw"));
        null === vv || void 0 === vv || vv.resolve((0, XS.e)(this, Me)[Me]())
      }
      dispose() {
        (0, XS.e)(this, Ce)[Ce] = !0, (0, XS.e)(this, Be)[Be]()
      }
    }

    function zg(vv) {
      (0, XS.e)(this, ye)[ye](Wv.$c.Session, function(vv) {
        const zv = new TextEncoder,
          Pv = zv.encode(vv.game).subarray(0, 65535),
          hv = zv.encode(vv.lobby).subarray(0, 65535),
          Sv = new Uint8Array(22 + Pv.length + 2 + hv.length),
          ev = new DataView(Sv.buffer);
        ev.setFloat64(0, vv.unixMs, !0), ev.setBigUint64(8, BigInt.asUintN(64, vv.session), !0), ev.setUint8(16, vv.lobbyType);
        let gv = 20;
        for (const pv of [Pv, hv]) ev.setUint16(gv, pv.length, !0), Sv.set(pv, gv + 2), gv += 2 + pv.length;
        return Sv
      }({
        ...vv,
        unixMs: this.deps.unixNow()
      }))
    }

    function Pg(vv) {
      false
    }

    function hg() {
      var vv, zv;
      return null !== (vv = null === (zv = (0, XS.e)(this, je)[je]) || void 0 === zv ? void 0 : zv.on) && void 0 !== vv && vv
    }

    function Sg() {
      const vv = (0, XS.e)(this, we)[we];
      let zv = !0;
      if (vv) try {
        zv = vv.busy()
      } catch (Pv) {
        if (!(0, XS.e)(this, ue)[ue](Pv)) throw Pv
      }
      return zv || (0, XS.e)(this, Ke)[Ke].active
    }
    async function eg() {
      !(0, XS.e)(this, Ce)[Ce] && this.deps.allowed() ? await (0, XS.e)(this, qe)[qe]() : (0, XS.e)(this, Fe)[Fe] = null
    }

    function gg() {
      return (0, XS.e)(this, se)[se] || (0, XS.e)(this, Ce)[Ce] ? Promise.resolve(!1) : (0, XS.e)(this, we)[we] ? Promise.resolve(!0) : ((0, XS.e)(this, ce)[ce] ??= (0, XS.e)(this, Ie)[Ie](), (0, XS.e)(this, ce)[ce])
    }
    async function pg() {
      let vv = !1;
      try {
        return vv = await (0, XS.e)(this, Ae)[Ae](), vv
      } finally {
        vv || ((0, XS.e)(this, Fe)[Fe] = null), (0, XS.e)(this, ce)[ce] = null
      }
    }

    function dg() {
      if (!(0, XS.e)(this, we)[we]) return Promise.resolve((0, XS.e)(this, se)[se] ? "trapped" : "Yw");
      if (!(0, XS.e)(this, ie)[ie]) {
        let vv = () => {};
        const zv = new Promise((zv => {
          vv = zv
        }));
        (0, XS.e)(this, ie)[ie] = {
          promise: zv,
          resolve: vv
        }
      }
      return (0, XS.e)(this, ie)[ie].promise
    }

    function Ng(vv) {
      const zv = (0, XS.e)(this, ie)[ie];
      (0, XS.e)(this, ie)[ie] = null, null === zv || void 0 === zv || zv.resolve(vv)
    }
    async function lg() {
      let vv = (0, XS.e)(this, We)[We];
      if (!vv) {
        const zv = (0, XS.e)(this, Ge)[Ge];
        try {
          vv = await this.deps.load()
        } catch (Pv) {
          return zv === (0, XS.e)(this, Ge)[Ge] && await (0, XS.e)(this, re)[re](Pv), !1
        }
        if (zv !== (0, XS.e)(this, Ge)[Ge]) return this.deps.unload(), !1;
        const hv = vv,
          Sv = (0, XS.e)(this, Xe)[Xe]((() => hv.Jhv()));
        if (void 0 === Sv) return !1;
        const ev = this.deps.core.Ehv();
        if (Sv !== ev) return await (0, XS.e)(this, re)[re](new Error(`recorder port version ${Sv}, the core's ${ev}`)), !1;
        (0, XS.e)(this, We)[We] = vv
      }
      const zv = vv;
      try {
        if (!(0, XS.e)(this, Xe)[Xe]((() => ((0, XS.e)(this, we)[we] = new zv.ohv, (0, XS.e)(this, ae)[ae] = zv.Zhv(), !0)))) return !1;
        (0, XS.e)(this, He)[He]();
        const vv = (0, XS.e)(this, Fe)[Fe];
        return (0, XS.e)(this, Fe)[Fe] = null, vv && (0, XS.e)(this, ye)[ye](Wv.$c.Control, vv), (0, XS.e)(this, Le)[Le]()
      } catch (Pv) {
        return (0, XS.e)(this, Be)[Be](), await (0, XS.e)(this, re)[re](Pv), !1
      }
    }

    function Tg() {
      return this.deps.core.bhv(0), 1 === this.deps.core.bhv(1) || ((0, XS.e)(this, Be)[Be](), this.deps.failed(le), !1)
    }

    function Wg() {
      (0, XS.e)(this, je)[je] && (0, XS.e)(this, ye)[ye](Wv.$c.Prefs, ge((0, XS.e)(this, je)[je].on, (0, XS.e)(this, je)[je].seconds)), (0, XS.e)(this, fe)[fe] && (0, XS.e)(this, Ve)[Ve]((0, XS.e)(this, fe)[fe])
    }

    function wg() {
      return Ne({
        memoryBytes: this.deps.memoryBytes,
        clipSeconds: () => {
          var vv, zv;
          return null !== (vv = null === (zv = (0, XS.e)(this, je)[je]) || void 0 === zv ? void 0 : zv.seconds) && void 0 !== vv ? vv : 0
        },
        trapped: () => (0, XS.e)(this, se)[se],
        busy: () => (0, XS.e)(this, xe)[xe](),
        loadInFlight: () => (0, XS.e)(this, ce)[ce],
        ea: () => (0, XS.e)(this, Ce)[Ce],
        unload: () => {
          (0, XS.e)(this, Be)[Be]()
        },
        load: () => (0, XS.e)(this, qe)[qe]()
      })
    }

    function ag(vv, zv) {
      (0, XS.e)(this, Ye)[Ye] ? (0, XS.e)(this, Ye)[Ye].push([vv, zv]): (0, XS.e)(this, ke)[ke](((Pv, hv) => {
        const Sv = Pv.Ahv(zv.length);
        0 !== Sv && (new Uint8Array(hv.buffer, Sv, zv.length).set(zv), Pv.command(vv, zv.length))
      }))
    }

    function sg() {
      (0, XS.e)(this, Ge)[Ge]++, (0, XS.e)(this, Ze)[Ze]("Yw"), (0, XS.e)(this, Ke)[Ke].stop(), this.deps.core.bhv(0), (0, XS.e)(this, Je)[Je](), (0, XS.e)(this, se)[se] || ((0, XS.e)(this, We)[We] = null, this.deps.unload())
    }

    function Cg() {
      (0, XS.e)(this, ke)[ke]((vv => {
        vv.free()
      })), (0, XS.e)(this, we)[we] = null, (0, XS.e)(this, ae)[ae] = null, (0, XS.e)(this, De)[De] = null
    }

    function ig() {
      var vv;
      const zv = this.deps.coreBuffer();
      return (null === (vv = (0, XS.e)(this, ne)[ne]) || void 0 === vv ? void 0 : vv.buffer) !== zv && ((0, XS.e)(this, ne)[ne] = new Uint8Array(zv)), (0, XS.e)(this, ne)[ne]
    }

    function cg() {
      var vv;
      const zv = this.deps.coreBuffer();
      return (null === (vv = (0, XS.e)(this, Oe)[Oe]) || void 0 === vv ? void 0 : vv.buffer) !== zv && ((0, XS.e)(this, Oe)[Oe] = new Uint32Array(zv, 0, zv.byteLength >>> 2)), (0, XS.e)(this, Oe)[Oe]
    }

    function Gg(vv) {
      var zv;
      const Pv = vv.buffer;
      return (null === (zv = (0, XS.e)(this, De)[De]) || void 0 === zv ? void 0 : zv.buffer) !== Pv && ((0, XS.e)(this, De)[De] = new Uint8Array(Pv)), (0, XS.e)(this, De)[De]
    }
    async function mg(vv) {
      await this.deps.staleOr(vv, (() => {
        this.deps.failed(le)
      }))
    }

    function jg(vv) {
      const zv = (0, XS.e)(this, we)[we],
        Pv = (0, XS.e)(this, ae)[ae];
      if (zv && Pv) return (0, XS.e)(this, Xe)[Xe]((() => vv(zv, Pv)))
    }

    function fg(vv) {
      if (!(0, XS.e)(this, se)[se]) try {
        return vv()
      } catch (zv) {
        if (!(0, XS.e)(this, ue)[ue](zv)) throw zv;
        return
      }
    }

    function Fg(vv) {
      return vv instanceof WebAssembly.RuntimeError && ((0, XS.e)(this, se)[se] = !0, (0, XS.e)(this, we)[we] = null, (0, XS.e)(this, ae)[ae] = null, (0, XS.e)(this, De)[De] = null, (0, XS.e)(this, We)[We] = null, (0, XS.e)(this, Fe)[Fe] = null, (0, XS.e)(this, Ze)[Ze]("trapped"), this.deps.core.bhv(0), (0, XS.e)(this, Ke)[Ke].stop(), this.deps.crash(this.deps.markTrapped(vv)), this.deps.failed("Replay recording stopped working, so reload the page to record replays again."), !0)
    }
    var Yg = Pv(38178);
    const ng = new Map([
      ["skyblock", () => Pv.e(50).then((() => Pv(38169)))]
    ]);

    function Og(vv) {
      const zv = ng.get(vv);
      return zv ? zv().then((() => {
        const zv = (0, Yg.e)(vv);
        if (!zv) throw new Error(`${vv}'s replay hook module registered no hook`);
        return zv
      })) : null
    }
    class Dg {
      constructor(vv) {
        this.deps = vv, this.game = null, this.hook = null, this.generation = 0, this.all = !1, this.pending = new Map, this.ids = new Int32Array(64)
      }
      get wantsWatch() {
        return null !== this.hook
      }
      opened(vv) {
        if (this.pending.clear(), vv === this.game && null !== this.hook) return void(this.all = !0);
        const zv = ++this.generation;
        this.game = vv, this.hook = null, this.all = !1;
        const Pv = this.deps.loadHook(vv);
        null === Pv || void 0 === Pv || Pv.then((vv => {
          zv === this.generation && (this.hook = vv, this.all = !0)
        }), (vv => {
          zv === this.generation && this.deps.onError(vv)
        }))
      }
      ended() {
        this.generation++, this.game = null, this.hook = null, this.all = !1, this.pending.clear()
      }
      entityAdded(vv) {
        null === this.hook || this.all || this.pending.set(vv, !0)
      }
      entityInfoChanged(vv) {
        null === this.hook || this.all || this.pending.has(vv) || this.pending.set(vv, !1)
      }
      flush(vv) {
        const {
          hook: zv
        } = this;
        if (null === zv || !vv || !this.all && 0 === this.pending.size) return;
        const Pv = this.deps.cmd();
        if (null === Pv) return;
        const {
          api: hv
        } = this.deps;
        if (this.all) {
          this.all = !1, this.pending.clear();
          const {
            ids: vv,
            count: zv
          } = ZP(hv, this.ids);
          this.ids = vv;
          for (let Pv = 0; Pv < zv; Pv++) this.pending.set(vv[Pv], !0)
        }
        const Sv = this.ids = AP(this.ids, this.pending.size);
        let ev = 0;
        for (const Nv of this.pending.keys()) Sv[ev++] = Nv;
        const gv = [],
          pv = LP(hv, Sv, ev, ((vv, zv) => {
            null !== zv && gv.push({
              serverId: vv,
              info: zv,
              spawned: !0 === this.pending.get(vv)
            })
          }));
        if (pv) {
          this.pending.clear();
          for (const {
              serverId: vv,
              info: hv,
              spawned: Sv
            }
            of gv) try {
            zv(hv, {
              setFacingTolerance: zv => {
                null === zv && Sv || pP(Pv, vv, zv) || this.pending.set(vv, Sv)
              }
            })
          } catch (dv) {
            this.deps.onError(dv)
          }
        }
      }
    }
    var Kg = (0, uS.b)("bindings"),
      Vg = (0, uS.b)("module"),
      Ug = (0, uS.b)("memory"),
      Rg = (0, uS.b)("trapped"),
      xg = (0, uS.b)("generation"),
      tg = (0, uS.b)("loading"),
      qg = (0, uS.b)("lend"),
      Ig = (0, uS.b)("givenUp"),
      Qg = (0, uS.b)("afterSave"),
      Zg = (0, uS.b)("opens"),
      Ag = (0, uS.b)("saveAskedAt"),
      Lg = (0, uS.b)("unload"),
      Hg = (0, uS.b)("dropModule"),
      Mg = (0, uS.b)("loadFailed"),
      yg = (0, uS.b)("saveReadsBody"),
      Bg = (0, uS.b)("command"),
      Jg = (0, uS.b)("call"),
      Eg = (0, uS.b)("guard"),
      og = (0, uS.b)("trapOn");
    class bg {
      constructor(vv) {
        this.deps = vv, Object.defineProperty(this, og, {
          value: hp
        }), Object.defineProperty(this, Eg, {
          value: Pp
        }), Object.defineProperty(this, Jg, {
          value: zp
        }), Object.defineProperty(this, Bg, {
          value: vp
        }), Object.defineProperty(this, yg, {
          get: ug,
          set: void 0
        }), Object.defineProperty(this, Mg, {
          value: Xg
        }), Object.defineProperty(this, Hg, {
          value: kg
        }), Object.defineProperty(this, Lg, {
          value: rg
        }), Object.defineProperty(this, Kg, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Vg, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Ug, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Rg, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, xg, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, tg, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, qg, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Ig, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Qg, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Zg, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, Ag, {
          writable: !0,
          value: null
        })
      }
      get active() {
        return null !== (0, XS.e)(this, Vg)[Vg] && null === (0, XS.e)(this, Qg)[Qg]
      }
      async open(vv) {
        if ((0, XS.e)(this, Rg)[Rg]) return Wv.md.ModuleTrap;
        let zv = (0, XS.e)(this, Kg)[Kg];
        if (!zv) {
          const vv = (0, XS.e)(this, xg)[xg];
          (0, XS.e)(this, tg)[tg]++;
          try {
            zv = await this.deps.load()
          } catch (hv) {
            return (0, XS.e)(this, tg)[tg]--, vv !== (0, XS.e)(this, xg)[xg] ? "stopped" : (0, XS.e)(this, Mg)[Mg](hv)
          }
          if ((0, XS.e)(this, tg)[tg]--, vv !== (0, XS.e)(this, xg)[xg]) return (0, XS.e)(this, Kg)[Kg] || 0 !== (0, XS.e)(this, tg)[tg] || (0, XS.e)(this, Rg)[Rg] || this.deps.unload(), "stopped";
          if ((0, XS.e)(this, Rg)[Rg]) return Wv.md.ModuleTrap;
          const Pv = zv.Jhv(),
            Sv = this.deps.core.Ehv();
          if (Pv !== Sv) return (0, XS.e)(this, Mg)[Mg](new Error(`replay port version ${Pv}, the core's ${Sv}`));
          (0, XS.e)(this, Kg)[Kg] = zv
        }
        if (!(0, XS.e)(this, Vg)[Vg]) {
          const vv = zv;
          if (!(0, XS.e)(this, Eg)[Eg]((() => {
              (0, XS.e)(this, Vg)[Vg] = new vv.rhv, (0, XS.e)(this, Ug)[Ug] = vv.khv()
            }))) return Wv.md.ModuleTrap
        }
        let Pv = !1;
        return (0, XS.e)(this, Jg)[Jg](((zv, hv) => {
          null !== (0, XS.e)(this, Qg)[Qg] && zv.step(0, 0);
          const Sv = zv.stage(vv.length);
          0 !== Sv && (new Uint8Array(hv.buffer, Sv, vv.length).set(vv), zv.open(), (0, XS.e)(this, Ig)[Ig] = (0, XS.e)(this, qg)[qg], (0, XS.e)(this, Qg)[Qg] = null, (0, XS.e)(this, Zg)[Zg]++, Pv = !0)
        })) ? Pv ? "opening" : Wv.md.TooLarge : Wv.md.ModuleTrap
      }
      beforeFrame(vv) {
        const zv = (0, XS.e)(this, Vg)[Vg],
          Pv = (0, XS.e)(this, Ug)[Ug];
        if (!zv || !Pv || null !== (0, XS.e)(this, Qg)[Qg]) return;
        const {
          core: hv
        } = this.deps, Sv = hv.Xhv(vv);
        if (Sv < 0) return;
        const ev = Math.floor(Sv);
        let gv, pv;
        try {
          gv = zv.step(ev, Sv - ev), pv = zv.Hhv()
        } catch (Nv) {
          return void(0, XS.e)(this, og)[og](Nv)
        }
        const dv = hv.Bhv(1, gv);
        if (0 === dv) {
          const vv = (0, XS.e)(this, Jg)[Jg]((vv => {
            vv.close()
          }));
          if (!vv) return;
          return (0, XS.e)(this, yg)[yg] ? (0, XS.e)(this, Qg)[Qg] = "drop" : (0, XS.e)(this, Hg)[Hg](), void hv.uhv(Wv.md.Port)
        }
        new Uint8Array(this.deps.coreBuffer(), dv, gv).set(new Uint8Array(Pv.buffer, pv, gv))
      }
      play() {
        (0, XS.e)(this, Bg)[Bg]((vv => {
          vv.play()
        }))
      }
      pause() {
        (0, XS.e)(this, Bg)[Bg]((vv => {
          vv.pause()
        }))
      }
      seek(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (0, XS.e)(this, Bg)[Bg]((Pv => {
          Pv.seek(vv, zv)
        }))
      }
      setMark(vv, zv) {
        return (0, XS.e)(this, Bg)[Bg]((Pv => {
          Pv.vSv(vv, zv)
        }))
      }
      addKeyframe(vv, zv) {
        return (0, XS.e)(this, Bg)[Bg]((Pv => {
          Pv.zSv(vv[0], vv[1], vv[2], zv[0], zv[1], zv[2])
        }))
      }
      setKeyframe(vv, zv) {
        return (0, XS.e)(this, Bg)[Bg]((Pv => {
          Pv.PSv(vv, zv)
        }))
      }
      moveKeyframe(vv, zv) {
        return (0, XS.e)(this, Bg)[Bg]((Pv => {
          Pv.hSv(vv, zv)
        }))
      }
      deleteKeyframes(vv, zv) {
        return (0, XS.e)(this, Bg)[Bg]((Pv => {
          Pv.SSv(vv, zv)
        }))
      }
      crop(vv, zv) {
        return null === (0, XS.e)(this, qg)[qg] && (0, XS.e)(this, Bg)[Bg]((Pv => {
          Pv.crop(vv, zv)
        }))
      }
      beginSave() {
        const vv = (0, XS.e)(this, Ag)[Ag];
        if ((0, XS.e)(this, Ag)[Ag] = null, null !== vv && vv !== (0, XS.e)(this, Zg)[Zg]) return null;
        let zv = 0,
          Pv = null;
        if ((0, XS.e)(this, Jg)[Jg](((vv, hv) => {
            zv = vv.save(), 0 !== zv && (Pv = new Uint8Array(hv.buffer, vv.eSv(), vv.gSv()).slice())
          })), 0 === zv || !Pv) return null;
        const hv = {
          headLen: zv,
          editState: Pv,
          givenUp: () => (0, XS.e)(this, Ig)[Ig] === hv,
          head: (vv, zv) => {
            if ((0, XS.e)(this, qg)[qg] !== hv || !(0, XS.e)(this, yg)[yg]) return null;
            let Pv = null;
            return (0, XS.e)(this, Jg)[Jg](((hv, Sv) => {
              const ev = hv.pSv();
              0 !== ev && vv >= 0 && zv >= 0 && vv + zv <= ev && (Pv = new Uint8Array(Sv.buffer, hv.dSv() + vv, zv))
            })), Pv
          },
          end: () => {
            if ((0, XS.e)(this, qg)[qg] !== hv) return;
            (0, XS.e)(this, qg)[qg] = null, (0, XS.e)(this, Ig)[Ig] = null, (0, XS.e)(this, Jg)[Jg]((vv => {
              vv.NSv()
            }));
            const vv = (0, XS.e)(this, Qg)[Qg];
            (0, XS.e)(this, Qg)[Qg] = null, "unload" === vv ? (0, XS.e)(this, Lg)[Lg]() : "drop" === vv && (0, XS.e)(this, Hg)[Hg]()
          }
        };
        return (0, XS.e)(this, qg)[qg] = hv, hv
      }
      askSave() {
        (0, XS.e)(this, Ag)[Ag] = (0, XS.e)(this, Zg)[Zg]
      }
      setSpeed(vv) {
        (0, XS.e)(this, Bg)[Bg]((zv => {
          zv.lSv(vv)
        }))
      }
      setCameraMode(vv) {
        (0, XS.e)(this, Bg)[Bg]((zv => {
          zv.TSv(vv)
        }))
      }
      close() {
        (0, XS.e)(this, Bg)[Bg]((vv => {
          vv.close()
        }))
      }
      stop() {
        (0, XS.e)(this, xg)[xg]++, (0, XS.e)(this, yg)[yg] && ((0, XS.e)(this, Jg)[Jg]((vv => {
          vv.close()
        })), (0, XS.e)(this, Vg)[Vg]) ? (0, XS.e)(this, Qg)[Qg] = "unload" : (0, XS.e)(this, Lg)[Lg]()
      }
    }

    function rg() {
      (0, XS.e)(this, Hg)[Hg](), (0, XS.e)(this, Rg)[Rg] || ((0, XS.e)(this, Kg)[Kg] = null, this.deps.unload())
    }

    function kg() {
      (0, XS.e)(this, Jg)[Jg]((vv => {
        vv.free()
      })), (0, XS.e)(this, Vg)[Vg] = null, (0, XS.e)(this, Ug)[Ug] = null
    }
    async function Xg(vv) {
      return await this.deps.staleOr(vv, (() => {})) ? "reloading" : Wv.md.ModuleLoad
    }

    function ug() {
      return null !== (0, XS.e)(this, qg)[qg] && (0, XS.e)(this, Ig)[Ig] !== (0, XS.e)(this, qg)[qg]
    }

    function vp(vv) {
      return null === (0, XS.e)(this, Qg)[Qg] && (0, XS.e)(this, Jg)[Jg](vv)
    }

    function zp(vv) {
      const zv = (0, XS.e)(this, Vg)[Vg],
        Pv = (0, XS.e)(this, Ug)[Ug];
      return !(!zv || !Pv) && (0, XS.e)(this, Eg)[Eg]((() => {
        vv(zv, Pv)
      }))
    }

    function Pp(vv) {
      if ((0, XS.e)(this, Rg)[Rg]) return !1;
      try {
        return vv(), !0
      } catch (zv) {
        return (0, XS.e)(this, og)[og](zv), !1
      }
    }

    function hp(vv) {
      if (!(vv instanceof WebAssembly.RuntimeError)) throw vv;
      (0, XS.e)(this, Rg)[Rg] = !0, (0, XS.e)(this, Vg)[Vg] = null, (0, XS.e)(this, Ug)[Ug] = null, (0, XS.e)(this, Kg)[Kg] = null, this.deps.crash(this.deps.markTrapped(vv)), this.deps.core.uhv(Wv.md.ModuleTrap)
    }
    var Sp = Pv(6199),
      ep = Pv(40025);
    const gp = "[bloxd-wasm-client]";
    const pp = String(VS);

    function dp(vv) {
      return null === vv || vv === pp ? void 0 : vv
    }

    function Np(vv) {
      var zv, Pv, hv, Sv, ev, pv, dv;
      switch (vv.what) {
        case Wv.yd.FlyingText: {
          let zv;
          try {
            zv = JSON.parse(vv.contentJson)
          } catch (Nv) {
            return void console.warn(`${gp} a replay's flying text isn't JSON`, Nv)
          }
          gv.j.zC("forceFlyingMiddleMessage", {
            content: zv,
            aP: vv.aP,
            angle: vv.angle,
            sP: vv.sP
          });
          break
        }
        case Wv.yd.PlayerKilled:
          (0, ep.e)({
            kind: "killed",
            body: {
              deadEId: null !== (zv = dp(vv.dead)) && void 0 !== zv ? zv : "",
              killerEId: dp(vv.killer),
              withItem: null !== (Pv = vv.withItem) && void 0 !== Pv ? Pv : "",
              killstreak: vv.killstreak
            }
          });
          break;
        case Wv.yd.Killfeed:
          (0, ep.e)({
            kind: "custom",
            body: {
              killer: {
                eId: dp(vv.killerId),
                name: null !== (hv = vv.killerName) && void 0 !== hv ? hv : void 0,
                colour: null !== (Sv = vv.killerColour) && void 0 !== Sv ? Sv : void 0
              },
              victim: {
                eId: dp(vv.victimId),
                name: null !== (ev = vv.victimName) && void 0 !== ev ? ev : void 0,
                colour: null !== (pv = vv.victimColour) && void 0 !== pv ? pv : void 0
              },
              withItem: null !== (dv = vv.withItem) && void 0 !== dv ? dv : ""
            }
          })
      }
    }
    const lp = "[bloxd-wasm-client]";

    function Tp(vv) {
      if (void 0 === vv || null === vv || "" === vv) return null;
      const zv = Number(vv);
      return Number.isInteger(zv) && zv > VS && zv <= 2147483647 ? zv : null
    }

    function Wp(vv) {
      return {
        id: Tp(vv.eId),
        name: "string" === typeof vv.name ? vv.name : null,
        colour: "string" === typeof vv.colour ? vv.colour : null
      }
    }

    function wp(vv) {
      const zv = (0, LS.m)(EP.Xb.PlayerKilled, (zv => {
          var Pv, hv;
          const Sv = (0, AS.j)(zv);
          if (!(0, AS.d)(Sv)) return;
          const {
            deadEId: ev,
            killerEId: gv,
            withItem: pv,
            killstreak: dv
          } = Sv;
          vv.recordPlayerKilled(null !== (Pv = Tp(ev)) && void 0 !== Pv ? Pv : VS, null !== (hv = Tp(gv)) && void 0 !== hv ? hv : VS, "number" === typeof dv ? dv : 0, "string" === typeof pv ? pv : "")
        })),
        Pv = (0, LS.m)(EP.Xb.CustomKillfeed, (zv => {
          const Pv = (0, AS.j)(zv);
          if (!(0, AS.d)(Pv) || !(0, AS.d)(Pv.killer) || !(0, AS.d)(Pv.victim)) return;
          const {
            killer: hv,
            victim: Sv,
            withItem: ev
          } = Pv;
          vv.recordKillfeed(Wp(hv), Wp(Sv), "string" === typeof ev ? ev : null)
        }));
      return () => {
        zv(), Pv()
      }
    }

    function ap(vv) {
      var zv;
      return void 0 === vv || null === vv ? null : null !== (zv = JSON.stringify(vv)) && void 0 !== zv ? zv : null
    }

    function sp(vv) {
      let zv = null;
      const Pv = () => {
        const {
          enableClipping: Pv,
          clipDurationSeconds: Sv
        } = hv.c.get("clientEscMenuOptions"), ev = `${Pv}:${Sv}`;
        ev !== zv && (zv = ev, vv.recorder.setPrefs(Pv, Sv))
      };
      return Pv(), (0, gv.l)("appManagerUpdated|clientEscMenuOptions", Pv)
    }
    const Cp = "replayModule",
      ip = "recorderModule";

    function cp(vv, zv, Pv) {
      return function() {
        return vv.isStopped ? Pv : zv(...arguments)
      }
    }
    const Gp = {
      open: () => Promise.reject(new Error(mS.c.coreStopped.text)),
      replayKey: () => null,
      encode: () => Promise.resolve(null),
      fileHandle: () => null,
      markSaved: () => {}
    };

    function mp() {
      return Pv.e(62).then((() => Pv(60894)))
    }

    function jp(vv) {
      (0, mS.e)({
        text: vv,
        type: "Error"
      })
    }
    class fp {
      constructor(vv) {
        this.deps = vv, this.runtime = void 0, this.entityHooks = void 0, this.recordedOptions = void 0, this.stops = void 0, this.activeConn = 0, this.stopped = !1, this.bench = null, this.replay = void 0, this.recorder = void 0, this.freecam = void 0, this.drawn = !1;
        const {
          running: zv,
          api: hv,
          core: Sv
        } = vv, ev = () => vv.memory().buffer, gv = () => zv.isStopped ? null : zv.rings.cmd, pv = cp(zv, ((vv, zv) => Sv.Bhv(vv, zv)), 0), dv = () => Sv.Ehv();
        let Nv = null;
        this.replay = new bg({
          core: {
            Xhv: cp(zv, (vv => Sv.Xhv(vv)), -1),
            Bhv: pv,
            Ehv: dv,
            uhv: cp(zv, (vv => {
              Sv.uhv(vv)
            }), void 0)
          },
          coreBuffer: ev,
          load: async () => (Nv = await Pv.e(63).then((() => Pv(60907))), Nv.loadReplayModule()),
          unload: () => {
            var vv;
            null === (vv = Nv) || void 0 === vv || vv.unloadReplayModule()
          },
          markTrapped: vv => Nv ? Nv.markReplayTrapped(vv) : new Error(String(vv)),
          staleOr: (zv, Pv) => vv.staleOr(Cp, zv, Pv),
          crash: zv => {
            vv.reportFault(Cp, zv)
          }
        });
        let lv = null;
        this.recorder = new vg({
          core: {
            bhv: cp(zv, (vv => Sv.bhv(vv)), 0),
            Lhv: cp(zv, (vv => Sv.Lhv(vv)), 0),
            Bhv: pv,
            Ehv: dv
          },
          coreCommand: (vv, zv) => {
            var Pv, hv;
            return null !== (Pv = null === (hv = gv()) || void 0 === hv ? void 0 : hv.writeCmd(vv, 0, zv)) && void 0 !== Pv && Pv
          },
          coreBuffer: ev,
          load: async () => (lv = await mp(), lv.loadRecorderModule()),
          prefetch: () => {
            mp().then((vv => vv.prefetchRecorderModule())).catch((vv => {
              console.warn(`${lp} the recorder module didn't prefetch, so a save loads it:`, vv)
            }))
          },
          unload: () => {
            var vv;
            null === (vv = lv) || void 0 === vv || vv.unloadRecorderModule()
          },
          markTrapped: vv => lv ? lv.markRecorderTrapped(vv) : new Error(String(vv)),
          memoryBytes: () => {
            var vv, zv;
            return null !== (vv = null === (zv = lv) || void 0 === zv ? void 0 : zv.recorderMemoryBytes()) && void 0 !== vv ? vv : 0
          },
          staleOr: (zv, Pv) => vv.staleOr(ip, zv, Pv),
          crash: zv => {
            vv.reportFault(ip, zv)
          },
          allowed: () => !0 === vv.options.get("canRecordReplays"),
          failed: jp,
          events: (vv, zv) => {
            this.runtime.recorderEvents(vv, zv)
          },
          beginSave: () => this.replay.beginSave(),
          givenUp: jp,
          unixNow: () => Date.now()
        });
        const Tv = new KS({
          core: {
            Uhv: cp(zv, (vv => Sv.Uhv(vv)), 0),
            xhv: cp(zv, (() => {
              Sv.xhv()
            }), void 0),
            nC: cp(zv, (() => Sv.nC()), 0),
            Rhv: cp(zv, (() => Sv.Rhv()), 0)
          },
          buffer: ev,
          apiView: () => hv.apiView,
          cmd: gv,
          replay: this.replay,
          recorder: this.recorder
        });
        this.entityHooks = new Dg({
          api: hv,
          cmd: gv,
          loadHook: Og,
          onError: vv => {
            console.warn(`${lp} the recorded game's replay hooks:`, vv)
          }
        });
        const Wv = new ZS({
          client: Tv,
          buffer: ev,
          setHoldDraws: vv => {
            zv.setHoldDraws(vv)
          },
          notify: mS.e,
          onRecorderState: () => {
            var vv;
            null === (vv = (0, fS.g)()) || void 0 === vv || vv.recorderChanged()
          },
          onViewerChange: () => {
            var vv;
            null === (vv = (0, fS.g)()) || void 0 === vv || vv.viewerChanged()
          },
          onReplayOption: zv => {
            ! function(vv, zv) {
              var Pv, hv;
              const Sv = EP.ib[zv.key];
              if (void 0 === Sv) return;
              let ev = null !== (Pv = zv.value) && void 0 !== Pv ? Pv : JSON.parse(JSON.stringify(null !== (hv = Sp.d[Sv]) && void 0 !== hv ? hv : null));
              if (null !== zv.value && zv.key < EP.Fb.Environment && "string" === typeof ev) try {
                ev = JSON.parse(ev)
              } catch (gv) {
                return void console.warn(`${gp} a replay's ${Sv} isn't JSON`, gv)
              }
              vv.applyNewClientOptions({
                [Sv]: ev
              })
            }(vv.options, zv)
          },
          onReplayUiEvent: Np,
          onReplayOpened: zv => {
            this.entityHooks.opened((0, Ov.Pb)(zv)), vv.replayShaderPack(zv)
          },
          meshPending: () => {
            var vv, Pv;
            return null !== (vv = null === (Pv = zv.lastHeader) || void 0 === Pv ? void 0 : Pv.renderPending) && void 0 !== vv ? vv : 0
          },
          viewerOpen: jS.b,
          download: vv => {
            (0, cS.e)(vv)
          }
        });
        this.runtime = Wv, hv.replay = Wv.sink, (0, fS.v)(Wv);
        const wv = new yS({
          live: () => {
            var vv;
            return !zv.isStopped && !0 === (null === (vv = Wv.currentViewer) || void 0 === vv ? void 0 : vv.inPlayback)
          },
          cmd: gv,
          dragScale: rS
        });
        this.freecam = wv, (0, fS.t)(wv), this.recordedOptions = function(vv, zv) {
          const Pv = EP.ib,
            hv = Pv.map(((Pv, hv) => zv.subscribe(Pv, (zv => {
              vv.setOption(hv, ap(zv))
            }))));
          return {
            sendAll() {
              Pv.forEach(((Pv, hv) => {
                vv.setOption(hv, ap(zv.get(Pv)))
              }))
            },
            stop() {
              for (const vv of hv) vv()
            }
          }
        }(Wv.recorder, vv.options), this.stops = [(0, hh.j)((vv => {
          wv.flush();
          try {
            this.replay.beforeFrame(vv)
          } catch (zv) {
            this.deps.reportFault("replayFrame", zv)
          }
        })), (0, hh.u)(((vv, zv) => {
          try {
            this.recorder.afterFrame(), zv && !this.drawn && (this.drawn = !0, this.recorder.viewDrawn())
          } catch (Pv) {
            this.deps.reportFault("recorderFrame", Pv)
          }
          try {
            Wv.afterFrame(vv)
          } catch (Pv) {
            this.deps.reportFault("replayRuntime", Pv)
          }
        })), sp(Wv), () => {
          this.recordedOptions.stop()
        }, wp(Wv.recorder), (0, HS.h)((vv => {
          let {
            action: zv,
            down: Pv
          } = vv;
          var hv;
          Pv && (null === (hv = (0, fS.g)()) || void 0 === hv || hv.keyDown(zv))
        }))];
        const av = () => {
          const vv = Wv.currentViewer;
          return !0 === (null === vv || void 0 === vv ? void 0 : vv.isOpen) ? vv : null
        };
        (0, GS.d)({
          open: (vv, zv) => this.open(vv, zv),
          replayKey: () => {
            var vv, zv;
            return null !== (vv = null === (zv = av()) || void 0 === zv ? void 0 : zv.id) && void 0 !== vv ? vv : null
          },
          saveRefusal: () => {
            var vv, zv;
            return null !== (vv = null === (zv = av()) || void 0 === zv ? void 0 : zv.saveRefusal) && void 0 !== vv ? vv : null
          },
          encode: () => {
            var vv, zv;
            return null !== (vv = null === (zv = av()) || void 0 === zv ? void 0 : zv.save()) && void 0 !== vv ? vv : Promise.resolve(null)
          },
          fileHandle: () => {
            var vv, zv;
            return null !== (vv = null === (zv = Wv.currentViewer) || void 0 === zv ? void 0 : zv.fileHandle) && void 0 !== vv ? vv : null
          },
          markSaved: (vv, zv) => {
            var Pv;
            null === (Pv = Wv.currentViewer) || void 0 === Pv || Pv.markSaved(vv, zv)
          }
        })
      }
      netEvent(vv) {
        if ("connection" === vv.type)
          if (vv.phase === Wv.F.Activated) {
            this.activeConn = vv.conn;
            const zv = this.deps.sessionInfo(vv.conn);
            null !== zv && (this.runtime.activated({
              lobbyType: (0, Dv.y)(zv.lobbyName),
              gameNameWithVariation: zv.gameNameWithVariation,
              lobbyName: zv.lobbyName
            }), this.recordedOptions.sendAll())
          } else vv.phase !== Wv.F.Left && vv.phase !== Wv.F.Closed || vv.conn !== this.activeConn || (this.activeConn = 0, this.runtime.recorder.closed())
      }
      stop() {
        if (!this.stopped) {
          this.stopped = !0;
          for (const vv of this.stops) vv();
          this.runtime.end(), this.entityHooks.ended(), this.replay.stop(), this.recorder.dispose(), (0, fS.o)() === this.runtime && (0, fS.v)(null), (0, fS.k)() === this.freecam && (0, fS.t)(null), (0, GS.d)(Gp), null !== this.bench && window.wasmReplayBench === this.bench && (window.wasmReplayBench = void 0)
        }
      }
      async open(vv, zv) {
        const {
          running: Pv
        } = this.deps;
        if (Pv.isStopped) throw new Error(mS.c.coreStopped.text);
        if (vv.byteLength > 67108864) throw new Error(mS.c.cantOpen.text);
        let hv;
        try {
          hv = await async function(vv) {
            const zv = await vv.loadViewer();
            return zv.inPlayback || (0, hh.B)().leaveGame(null), zv
          }(this.runtime)
        } catch (Sv) {
          throw console.warn(`${lp} the replay viewer didn't load`, Sv), new Error(mS.c.viewerLoadFailed.text)
        }
        if (Pv.isStopped) throw new Error(mS.c.coreStopped.text);
        await hv.open(vv, zv)
      }
    }
    var Fp = Pv(1903);

    function Yp(vv, zv) {
      const {
        aux: Pv,
        payload: hv
      } = function(vv) {
        return {
          aux: vv.reset ? Wv.hc.ResetFirst : 0,
          payload: Op(vv.changes)
        }
      }(zv);
      vv.queueOptions(Pv, hv) && (zv.reset && Fp.c.reset(), Fp.c.apply(zv.changes))
    }
    const np = new TextEncoder;

    function Op(vv) {
      const zv = new Dp;
      return Vp(zv, vv), zv.bytes()
    }
    class Dp {
      constructor() {
        this.buf = new Uint8Array(256), this.view = new DataView(this.buf.buffer), this.len = 0
      }
      room(vv) {
        if (this.len + vv <= this.buf.length) return;
        const zv = new Uint8Array(Math.max(2 * this.buf.length, this.len + vv));
        zv.set(this.buf.subarray(0, this.len)), this.buf = zv, this.view = new DataView(zv.buffer)
      }
      u8(vv) {
        this.room(1), this.buf[this.len++] = vv
      }
      tagged(vv, zv, Pv) {
        this.room(1 + zv), this.buf[this.len++] = vv, 1 === zv ? this.view.setUint8(this.len, Pv) : 2 === zv ? this.view.setUint16(this.len, Pv) : this.view.setUint32(this.len, Pv), this.len += zv
      }
      signed(vv, zv, Pv) {
        this.room(1 + zv), this.buf[this.len++] = vv, 1 === zv ? this.view.setInt8(this.len, Pv) : 2 === zv ? this.view.setInt16(this.len, Pv) : this.view.setInt32(this.len, Pv), this.len += zv
      }
      f64(vv) {
        this.room(9), this.buf[this.len++] = 203, this.view.setFloat64(this.len, vv), this.len += 8
      }
      raw(vv) {
        this.room(vv.length), this.buf.set(vv, this.len), this.len += vv.length
      }
      bytes() {
        return this.buf.slice(0, this.len)
      }
    }

    function Kp(vv, zv, Pv, hv, Sv, ev, gv) {
      zv < hv ? vv.u8(Pv | zv) : null !== Sv && zv < 256 ? vv.tagged(Sv, 1, zv) : zv < 65536 ? vv.tagged(ev, 2, zv) : vv.tagged(gv, 4, zv)
    }

    function Vp(vv, zv) {
      switch (typeof zv) {
        case "undefined":
          return void vv.raw(Up);
        case "boolean":
          return void vv.u8(zv ? 195 : 194);
        case "number":
          return void
          function(vv, zv) {
            zv >>> 0 === zv ? zv < 128 ? vv.u8(zv) : zv < 256 ? vv.tagged(204, 1, zv) : zv < 65536 ? vv.tagged(205, 2, zv) : vv.tagged(206, 4, zv) : (zv | 0) === zv ? zv >= -32 ? vv.u8(255 & zv) : zv >= -128 ? vv.signed(208, 1, zv) : zv >= -32768 ? vv.signed(209, 2, zv) : vv.signed(210, 4, zv) : vv.f64(zv)
          }(vv, zv);
        case "string": {
          const Pv = np.encode(zv);
          return Kp(vv, Pv.length, 160, 32, 217, 218, 219), void vv.raw(Pv)
        }
        case "object":
          break;
        default:
          return void vv.u8(192)
      }
      if (null === zv) vv.u8(192);
      else if (Array.isArray(zv)) {
        Kp(vv, zv.length, 144, 16, null, 220, 221);
        for (const Pv of zv) Vp(vv, Pv)
      } else if (zv instanceof Uint8Array) Kp(vv, zv.length, 0, 0, 196, 197, 198), vv.raw(zv);
      else {
        const Pv = Object.keys(zv);
        Kp(vv, Pv.length, 128, 0, null, 222, 223);
        for (const hv of Pv) Vp(vv, hv), Vp(vv, zv[hv])
      }
    }
    const Up = new Uint8Array([212, 0, 0]);
    var Rp = Pv(41905),
      xp = Pv(41913),
      tp = Pv(40324),
      qp = Pv(40348),
      Ip = Pv(3473);
    const Qp = [1e3, 3e3, 9e3];
    class Zp {
      constructor(vv) {
        this.host = vv, this.sets = new Map, this.table = [], this.generation = 0, this.ea = !1
      }
      onEvent(vv) {
        const zv = function(vv) {
          if (vv.byteLength !== Wv.Jd) return null;
          const zv = new DataView(vv.buffer, vv.byteOffset, vv.byteLength);
          return {
            want: zv.getUint16(0, !0),
            release: zv.getUint16(2, !0)
          }
        }(vv);
        zv && !this.ea && (zv.release !== Wv.Ld && this.release(zv.release), zv.want !== Wv.Ld && this.want(zv.want))
      }
      reset(vv) {
        if (!this.ea) {
          for (const [vv, zv] of this.sets) "ready" === zv.state && this.releaseAll(zv.distinct), this.sets.delete(vv);
          this.table = vv, this.generation++
        }
      }
      dispose() {
        if (this.ea) return;
        this.ea = !0, this.generation++, this.table = [];
        const vv = [...this.sets.values()];
        this.sets.clear();
        let zv = null;
        for (const hv of vv)
          for (const vv of "ready" === hv.state ? hv.distinct : []) try {
            this.host.rzv(vv)
          } catch (Pv) {
            zv ??= {
              error: Pv
            }
          }
        if (zv) throw zv.error
      }
      isReady(vv) {
        var zv;
        return "ready" === (null === (zv = this.sets.get(vv)) || void 0 === zv ? void 0 : zv.state)
      }
      want(vv) {
        const zv = this.sets.get(vv);
        if ("loading" === (null === zv || void 0 === zv ? void 0 : zv.state)) return zv.wanted = !0, void this.capAnswer(vv, zv);
        if ("ready" === (null === zv || void 0 === zv ? void 0 : zv.state)) return void this.host.sendReady(Lp(vv, zv.images, zv.size));
        const Pv = this.table[vv];
        if (!Pv || 1 !== Pv.urls.length && Pv.urls.length !== EP.Sb.CubeFaces) return this.host.sendReady(Hp(vv)), void this.host.onLoadFailed(vv, "", new Error(`no image set ${vv}`));
        const hv = {
          state: "loading",
          wanted: !0
        };
        this.sets.set(vv, hv), this.load(vv, Pv, hv, this.generation, 0), this.capAnswer(vv, hv)
      }
      capAnswer(vv, zv) {
        this.host.wait(4e3, (() => {
          this.sets.get(vv) === zv && zv.wanted && this.host.sendReady(Hp(vv))
        }))
      }
      load(vv, zv, Pv, hv, Sv) {
        const ev = [...new Set(zv.urls)];
        Promise.allSettled(ev.map((vv => this.host.loadImage(vv, zv.orientation)))).then((gv => {
          const pv = gv.flatMap((vv => "fulfilled" === vv.status ? [vv.value] : [])),
            dv = hv === this.generation && this.sets.get(vv) === Pv,
            Nv = gv.findIndex((vv => "rejected" === vv.status));
          if (!dv || !Pv.wanted) return this.ea ? void this.releaseAfterDispose(pv.map(Ap)) : (this.releaseAll(pv.map(Ap)), void(dv && this.sets.delete(vv)));
          Nv < 0 ? this.loaded(vv, zv, ev, pv) : (this.releaseAll(pv.map(Ap)), this.host.sendReady(Hp(vv)), Sv < Qp.length ? this.host.wait(Qp[Sv], (() => {
            hv === this.generation && this.sets.get(vv) === Pv && (Pv.wanted ? this.load(vv, zv, Pv, hv, Sv + 1) : this.sets.delete(vv))
          })) : (this.sets.delete(vv), this.host.onLoadFailed(vv, ev[Nv], gv[Nv].reason)))
        }))
      }
      loaded(vv, zv, Pv, hv) {
        const [Sv] = hv, ev = [Sv.width, Sv.height], gv = hv.every((vv => vv.width === ev[0] && vv.height === ev[1])), pv = zv.urls.length === EP.Sb.CubeFaces;
        if (!gv || ev[0] <= 0 || ev[1] <= 0 || ev[0] > 65535 || ev[1] > 65535 || pv && ev[0] !== ev[1]) {
          this.releaseAll(hv.map(Ap)), this.sets.delete(vv), this.host.sendReady(Hp(vv));
          const Pv = hv.map((vv => `${vv.width}x${vv.height}`));
          return void this.host.onLoadFailed(vv, zv.urls[0], new Error(`set ${vv}'s images can't make its texture: ${Pv.join(", ")}`))
        }
        const dv = zv.urls.map((vv => hv[Pv.indexOf(vv)].id)),
          Nv = hv.map(Ap);
        this.sets.set(vv, {
          state: "ready",
          images: dv,
          distinct: Nv,
          size: ev
        }), this.host.sendReady(Lp(vv, dv, ev))
      }
      release(vv) {
        const zv = this.sets.get(vv);
        "loading" === (null === zv || void 0 === zv ? void 0 : zv.state) ? zv.wanted = !1: "ready" === (null === zv || void 0 === zv ? void 0 : zv.state) && (this.releaseAll(zv.distinct), this.sets.delete(vv))
      }
      releaseAll(vv) {
        for (const zv of vv) this.host.rzv(zv)
      }
      releaseAfterDispose(vv) {
        for (const zv of vv) try {
          this.host.rzv(zv)
        } catch {}
      }
    }

    function Ap(vv) {
      return vv.id
    }

    function Lp(vv, zv, Pv) {
      const hv = new Uint8Array(EP.Sb.SkyImagesReadyBytes),
        Sv = new DataView(hv.buffer);
      return Sv.setUint16(0, vv, !0), Sv.setUint16(2, zv.length, !0), Sv.setUint16(4, Pv[0], !0), Sv.setUint16(6, Pv[1], !0), zv.slice(0, EP.Sb.CubeFaces).forEach(((vv, zv) => {
        Sv.setUint32(8 + 4 * zv, vv, !0)
      })), hv
    }

    function Hp(vv) {
      const zv = new Uint8Array(EP.Sb.SkyImagesReadyBytes),
        Pv = new DataView(zv.buffer);
      return Pv.setUint16(0, vv, !0), Pv.setUint16(2, EP.Sb.Failed, !0), zv
    }
    let Mp = Promise.resolve();
    async function yp(vv, zv) {
      let Pv;
      try {
        Pv = await (0, Ip.I)(vv)
      } catch (ev) {
        throw new tp.d("fetch", vv, {
          cause: ev
        })
      }
      const hv = Mp.then((() => async function(vv, zv) {
        const Pv = new Blob([vv.slice()]);
        let hv = await createImageBitmap(Pv, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: zv
        });
        const Sv = 1024 / Math.max(hv.width, hv.height);
        if (Sv < 1) {
          const vv = hv;
          try {
            hv = await createImageBitmap(vv, {
              resizeWidth: Math.max(1, Math.round(vv.width * Sv)),
              resizeHeight: Math.max(1, Math.round(vv.height * Sv)),
              resizeQuality: "high",
              premultiplyAlpha: "none",
              colorSpaceConversion: "none"
            })
          } finally {
            vv.close()
          }
        }
        return hv
      }(Pv, zv)));
      let Sv;
      Mp = hv.catch((() => {}));
      try {
        Sv = await hv
      } catch (ev) {
        throw new tp.d("decode", vv, {
          cause: ev
        })
      }
      return {
        id: (0, tp.m)(Sv),
        width: Sv.width,
        height: Sv.height
      }
    }
    var Bp = Pv(2944),
      Jp = Pv(33866);
    const Ep = Bp.d.length;

    function op(vv) {
      const zv = [],
        Pv = [];
      Bp.d.forEach(((hv, Sv) => {
        var ev;
        const gv = null !== (ev = bp(vv[hv])) && void 0 !== ev ? ev : Jp.n[hv];
        "custom" === gv.type ? (Pv.push({
          id: Sv,
          kind: EP.Sb.KindCustom,
          set: zv.length,
          earth: null
        }), zv.push({
          urls: [gv.px, gv.py, gv.pz, gv.nx, gv.ny, gv.nz],
          orientation: "none"
        })) : Pv.push({
          id: Sv,
          kind: EP.Sb.KindEarth,
          set: 0,
          earth: gv
        })
      }));
      const hv = bp(vv.earth);
      "earth" === (null === hv || void 0 === hv ? void 0 : hv.type) && Pv.push({
        id: Ep,
        kind: EP.Sb.KindEarth,
        set: 0,
        earth: hv
      });
      const Sv = zv.length;
      zv.push({
        urls: Jp.g.map((vv => Jp.h + vv)),
        orientation: "none"
      }), zv.push({
        urls: [Jp.l],
        orientation: "flipY"
      }), zv.push({
        urls: [Jp.c],
        orientation: "flipY"
      });
      const ev = new Uint8Array(EP.Sb.SkyTableHeaderBytes + Pv.length * EP.Sb.SkyTableEntryBytes),
        gv = new DataView(ev.buffer);
      return gv.setUint16(0, Sv, !0), gv.setUint16(2, Sv + 1, !0), gv.setUint16(4, Sv + 2, !0), gv.setUint16(6, Pv.length, !0), Pv.forEach(((vv, zv) => {
        const Pv = EP.Sb.SkyTableHeaderBytes + zv * EP.Sb.SkyTableEntryBytes;
        gv.setUint16(Pv, vv.id, !0), gv.setUint8(Pv + 2, vv.kind);
        const hv = Pv + 4;
        vv.earth ? function(vv, zv, Pv) {
          const hv = vv;
          let Sv = 0,
            ev = 0;
          for (const [gv, pv] of rp) {
            const vv = hv[gv];
            "number" === typeof vv && Number.isFinite(vv) && (zv.setFloat32(Pv + 4 * pv, vv, !0), Sv |= 1 << pv)
          }
          for (const [gv, pv, dv] of kp) {
            const vv = hv[gv];
            Array.isArray(vv) && 3 === vv.length && vv.every((vv => "number" === typeof vv && Number.isFinite(vv))) && (vv.forEach(((vv, hv) => {
              zv.setFloat32(Pv + dv + 4 * hv, vv, !0)
            })), Sv |= pv)
          }
          Xp.forEach(((vv, ev) => {
            let [gv, pv] = vv;
            const dv = hv[gv];
            "number" === typeof dv && Number.isFinite(dv) && (zv.setFloat32(Pv + EP.j.CameraOffsetAt + 4 * ev, dv, !0), Sv |= pv)
          }));
          for (const [gv, pv] of vd) {
            const vv = hv[gv];
            null !== vv && void 0 !== vv && (Sv |= pv, vv && (ev |= pv >>> 14))
          }
          zv.setUint32(Pv + EP.j.PresentAt, Sv, !0), zv.setUint8(Pv + EP.j.FlagsAt, ev)
        }(vv.earth, gv, hv) : gv.setUint16(hv, vv.set, !0)
      })), {
        payload: ev,
        sets: zv
      }
    }

    function bp(vv) {
      if ("object" !== typeof vv || null === vv) return null;
      const zv = vv;
      if ("earth" === zv.type) return vv;
      return "custom" === zv.type && ["px", "py", "pz", "nx", "ny", "nz"].every((vv => {
        const Pv = zv[vv];
        return "string" === typeof Pv && Pv.length > 0
      })) ? vv : null
    }
    const rp = [
        ["inclination", EP.j.Inclination],
        ["turbidity", EP.j.Turbidity],
        ["luminance", EP.j.Luminance],
        ["rayleigh", EP.j.Rayleigh],
        ["mieCoefficient", EP.j.MieCoefficient],
        ["mieDirectionalG", EP.j.MieDirectionalG],
        ["distance", EP.j.Distance],
        ["azimuth", EP.j.Azimuth]
      ],
      kp = [
        ["sunPosition", EP.j.SunPosition, EP.j.SunPositionAt],
        ["up", EP.j.Up, EP.j.UpAt],
        ["vertexTint", EP.j.VertexTint, EP.j.VertexTintAt]
      ],
      Xp = [
        ["xCameraOffset", EP.j.CameraOffsetX],
        ["yCameraOffset", EP.j.CameraOffsetY],
        ["zCameraOffset", EP.j.CameraOffsetZ]
      ],
      vd = [
        ["useSunPosition", EP.j.UseSunPosition],
        ["dithering", EP.j.Dithering],
        ["infiniteDistance", EP.j.InfiniteDistance]
      ];

    function zd(vv, zv, Pv) {
      const hv = new hd({
        writeCmd: vv,
        warn: zv,
        followPack: Pd(Pv, zv)
      });
      return hv.start(), hv
    }

    function Pd(vv, zv) {
      return Pv => {
        let hv = () => {};
        const Sv = vv((vv => {
          hv(), hv = () => {}, null !== vv ? hv = vv.subscribe((vv => {
            Pv(function(vv, zv, Pv) {
              if ("object" !== typeof vv || null === vv) return null;
              const hv = vv.skyBoxes;
              if ("object" !== typeof hv || null === hv) return null;
              if ("player" === zv) return hv;
              return Object.fromEntries(Object.entries(hv).filter((vv => {
                let [zv, hv] = vv;
                return !! function(vv) {
                  if ("object" !== typeof vv || null === vv) return !1;
                  return "earth" === vv.type || Object.entries(vv).every((vv => {
                    let [zv, Pv] = vv;
                    return "type" === zv || ("" === (hv = Pv) || null !== function(vv) {
                      var zv, Pv, hv;
                      return "string" !== typeof vv ? null : null !== (zv = null === (Pv = Sd.exec(vv)) || void 0 === Pv || null === (hv = Pv.groups) || void 0 === hv ? void 0 : hv.base64) && void 0 !== zv ? zv : null
                    }(hv));
                    var hv
                  }))
                }(hv) || (Pv(`Ignoring texture pack skybox ${zv}, whose faces are not all data URLs`, null), !1)
              })))
            }(vv.pack, null === vv.gameSource ? "player" : "customGame", zv))
          })) : Pv(null)
        }));
        return () => {
          Sv(), hv()
        }
      }
    }
    class hd {
      constructor(vv) {
        var zv, Pv, hv;
        this.host = vv, this.loader = void 0, this.wait = void 0, this.queue = [], this.written = null, this.stopFollowing = () => {}, this.ea = !1, this.wait = null !== (zv = vv.wait) && void 0 !== zv ? zv : (vv, zv) => {
          setTimeout(zv, vv)
        }, this.loader = new Zp({
          loadImage: null !== (Pv = vv.loadImage) && void 0 !== Pv ? Pv : yp,
          rzv: null !== (hv = vv.rzv) && void 0 !== hv ? hv : tp.o,
          sendReady: vv => {
            this.queue.push({
              kind: EP.Sb.SkyImagesReady,
              payload: vv
            })
          },
          onLoadFailed: (zv, Pv, hv) => {
            vv.warn(`sky image set ${zv} (${Pv}) didn't load: the last sky stays`, hv)
          },
          wait: this.wait
        })
      }
      start() {
        this.wait(qp.b, (() => {
          null === this.written && this.write({})
        })), this.stopFollowing = this.host.followPack((vv => {
          this.write(null !== vv && void 0 !== vv ? vv : {})
        }))
      }
      onEvent(vv) {
        this.loader.onEvent(vv)
      }
      drain() {
        if (0 === this.queue.length) return;
        let vv = 0;
        for (; vv < this.queue.length && this.host.writeCmd(this.queue[vv].kind, 0, this.queue[vv].payload);) vv++;
        vv > 0 && this.queue.splice(0, vv)
      }
      dispose() {
        this.ea = !0, this.stopFollowing(), this.queue = [], this.loader.dispose()
      }
      write(vv) {
        if (this.ea) return;
        const zv = op(vv);
        var Pv, hv;
        this.written && (Pv = this.written, hv = zv, Pv.payload.length === hv.payload.length && Pv.payload.every(((vv, zv) => vv === hv.payload[zv])) && Pv.sets.length === hv.sets.length && Pv.sets.every(((vv, zv) => {
          const Pv = hv.sets[zv];
          return vv.orientation === Pv.orientation && vv.urls.length === Pv.urls.length && vv.urls.every(((vv, zv) => vv === Pv.urls[zv]))
        }))) || (this.written = zv, this.loader.reset(zv.sets), this.queue = this.queue.filter((vv => vv.kind !== EP.Sb.SkyImagesReady)), this.queue.push({
          kind: EP.Sb.SkyTable,
          payload: zv.payload
        }))
      }
    }
    const Sd = /^data:[\w.+/-]*;base64,(?<base64>[A-Za-z0-9+/]*={0,2})$/;
    var ed = Pv(2654),
      gd = Pv(2762),
      pd = Pv(292),
      dd = Pv(167),
      Nd = Pv(2662),
      ld = Pv(2671),
      Td = Pv(263),
      Wd = Pv(266),
      wd = Pv(2686),
      ad = Pv(2704),
      sd = Pv(2711),
      Cd = Pv(86),
      cd = Pv(278),
      Gd = Pv(40116);
    class md {
      constructor() {
        this.id = null, this.sentMs = null, this.roundTripMs = null, this.stopReplies = void 0, this.stopReplies = (0, LS.m)(ch.W, (vv => {
          this.onReply((0, AS.f)(ch.W, vv), performance.now())
        }))
      }
      onFrame(vv, zv) {
        null === this.id ? this.id = vv : vv !== this.id && (this.id = vv, this.sentMs = document.hidden ? null : zv)
      }
      onVisibilityChange() {
        this.sentMs = null
      }
      onReply(vv, zv) {
        vv === this.id && null !== this.sentMs && (this.roundTripMs = Math.round(zv - this.sentMs), this.sentMs = null)
      }
      take() {
        const vv = this.roundTripMs;
        return this.roundTripMs = null, vv
      }
      stop() {
        this.stopReplies()
      }
    }
    class jd {
      constructor() {
        this.sampled = 0, this.timed = 0, this.frameUs = 0, this.primed = !1, this.windowTimed = 0, this.windowUs = 0
      }
      onFrame(vv, zv, Pv, hv) {
        const Sv = vv - this.sampled >>> 0,
          ev = zv - this.timed >>> 0,
          gv = Pv - this.frameUs >>> 0,
          pv = this.primed;
        return this.sampled = vv, this.timed = zv, this.frameUs = Pv, this.primed = !0, !(!pv || Sv > 64 || ev > 64) && (hv && gv <= 1e6 * ev && (this.windowTimed += ev, this.windowUs += gv), hv && Sv > 0)
      }
      reset() {}
      snapshotAndReset() {
        const vv = this.windowTimed > 0 ? this.windowUs / this.windowTimed / 1e3 : null;
        return this.windowTimed = 0, this.windowUs = 0, {
          passMs: vv,
          submitToDoneMs: null
        }
      }
    }
    const fd = {
      pacedShare: null,
      switchesPerHour: null,
      lagP50Ms: null,
      lagP90Ms: null,
      joinLagP90Ms: null
    };
    class Fd {
      constructor() {
        this.samples = new Float64Array(4096), this.count = 0
      }
      add(vv, zv) {
        const Pv = Math.min(4096, this.count + zv);
        this.samples.fill(vv, this.count, Pv), this.count = Pv
      }
      clear() {
        this.count = 0
      }
      take(vv) {
        const zv = this.count;
        if (this.count = 0, zv < 30) return null;
        const Pv = this.samples.subarray(0, zv).sort();
        return vv.map((vv => Pv[Math.min(zv - 1, Math.floor(vv * zv))]))
      }
    }
    class Yd {
      constructor() {
        this.word = 0, this.lagUs = 0, this.primed = !1, this.lastDrawnMs = -1, this.tieredMs = 0, this.pacedMs = 0, this.switches = 0, this.lags = new Fd, this.inJoin = !1, this.rose = !1, this.joinLags = new Fd, this.joinLagP90Ms = null
      }
      onFrame(vv, zv, Pv, hv, Sv) {
        const ev = vv.headerWord(EP.A.Pacing),
          gv = vv.headerWord(EP.A.PacingLagUs),
          pv = (ev >>> EP.P.LagsShift) - (this.word >>> EP.P.LagsShift) & EP.P.CountMask,
          dv = (ev >>> EP.P.SwitchesShift) - (this.word >>> EP.P.SwitchesShift) & EP.P.CountMask,
          Nv = pv > 0 ? (gv - this.lagUs >>> 0) / pv / 1e3 : 0,
          lv = this.primed && pv <= 64 && dv <= 2 && Nv <= 6e4;
        if (this.rose = 0 !== (ev & ~this.word & EP.P.Joining), this.word = ev, this.lagUs = gv, this.primed = !0, 0 !== (ev & EP.P.Tiered)) {
          if (0 !== (ev & EP.P.Joining)) this.rose && (this.inJoin = !0, this.joinLags.clear()), this.inJoin && lv && hv && pv > 0 && this.joinLags.add(Nv, pv);
          else if (this.inJoin) {
            var Tv, Wv;
            this.inJoin = !1, this.joinLagP90Ms = null !== (Tv = null === (Wv = this.joinLags.take([.9])) || void 0 === Wv ? void 0 : Wv[0]) && void 0 !== Tv ? Tv : null
          }
          if (Sv) {
            if (lv && (this.switches += dv, pv > 0 && this.lags.add(Nv, pv)), Pv) {
              if (this.lastDrawnMs >= 0 && zv - this.lastDrawnMs <= 250) {
                const vv = zv - this.lastDrawnMs;
                this.tieredMs += vv, (ev & EP.P.AheadMask) > 0 && (this.pacedMs += vv)
              }
              this.lastDrawnMs = zv
            }
          } else this.lastDrawnMs = -1
        } else this.lastDrawnMs = -1
      }
      onJoin() {
        this.takeWindow(), this.rose || (this.inJoin = !1, this.joinLags.clear()), this.lastDrawnMs = -1
      }
      snapshotAndReset(vv) {
        const zv = this.takeWindow(),
          Pv = this.joinLagP90Ms;
        return this.joinLagP90Ms = null, vv ? {
          ...zv,
          joinLagP90Ms: Pv
        } : {
          ...fd,
          joinLagP90Ms: Pv
        }
      }
      unsent(vv) {
        this.joinLagP90Ms ??= vv.joinLagP90Ms
      }
      takeWindow() {
        var vv, zv;
        const Pv = this.tieredMs >= 2e3,
          hv = this.lags.take([.5, .9]),
          Sv = {
            pacedShare: Pv ? this.pacedMs / this.tieredMs : null,
            switchesPerHour: Pv ? 36e5 * this.switches / this.tieredMs : null,
            lagP50Ms: null !== (vv = null === hv || void 0 === hv ? void 0 : hv[0]) && void 0 !== vv ? vv : null,
            lagP90Ms: null !== (zv = null === hv || void 0 === hv ? void 0 : hv[1]) && void 0 !== zv ? zv : null
          };
        return this.tieredMs = 0, this.pacedMs = 0, this.switches = 0, Sv
      }
    }
    var nd = Pv(8920),
      Od = Pv(2629),
      Dd = Pv(40194),
      Kd = Pv(8914),
      Vd = Pv(2679),
      Ud = Pv(2646);
    const Rd = {
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

    function xd(vv) {
      return new td(vv)
    }
    class td {
      constructor(vv) {
        this.shell = vv, this.tracker = new ld.b, this.gpu = new jd, this.pacing = new Yd, this.timers = [], this.inGameAtLastFlush = !1, this.hasFlushedSinceConnect = !1, this.sendsDropped = 0, this.pendingLightFailures = 0, this.unsentPage = null, this.game = null, this.fpsSpanStartMs = -1, this.fpsFrames = 0, this.fpsOverTime = null, this.firstSpanFps = null, this.initialFps = null, this.ping = new md, this.pacedCpuMs = 0, this.frameDebug = null, this.onVisibility = () => {
          this.tracker.onVisibilityChange(), this.ping.onVisibilityChange(), !document.hidden && this.fpsSpanStartMs >= 0 && (this.fpsFrames = 0, this.fpsSpanStartMs = performance.now())
        }, (0, nd.d)(vv.backend, vv.canvas, vv.adapterVendor), this.tracker.start((() => !vv.inGame()), this.gpu, "wasm"), document.addEventListener("visibilitychange", this.onVisibility), (0, Vd.b)("wasm", (() => {
          const {
            n: zv,
            sampleCount: Pv
          } = (0, Dd.g)();
          return `${vv.backend}, quality steps aim at up to ${Ud.c.target.maxFps} fps, pixel n ${zv}, msaa ${Pv}`
        }), (vv => {
          this.frameDebug = vv
        })), this.timers.push(setInterval((() => {
          this.flush(), this.fpsOverTime = null, this.initialFps = null
        }), 1e4), setInterval((() => {
          this.followGame() && (this.hasFlushedSinceConnect || (this.flush(), this.hasFlushedSinceConnect = !0))
        }), 250))
      }
      animationFrame(vv) {
        var zv;
        this.tracker.onAnimationFrame(vv), null === (zv = this.frameDebug) || void 0 === zv || zv.animationFrame()
      }
      frameRan(vv, zv, Pv, hv) {
        var Sv;
        this.ping.onFrame(vv.headerWord(EP.A.PingSent), Pv);
        const ev = this.tracker;
        this.pacing.onFrame(vv, zv, "drawn" === hv, !document.hidden, ev.isSampling());
        const gv = vv.headerWord(EP.A.TickUs) / 1e3 + (0, hh.C)();
        ev.xG(gv), null === (Sv = this.frameDebug) || void 0 === Sv || Sv.wasmFrame(vv, zv, Pv, "drawn" === hv, ev.isSampling(), gv, (0, Kd.h)());
        const pv = Math.max(0, Pv - zv - gv);
        if ("drawn" !== hv) return void("paced" === hv && (this.pacedCpuMs += pv));
        this.followGame(), ev.onFrameStart(zv);
        this.gpu.onFrame(vv.headerWord(EP.A.GpuSampled), vv.headerWord(EP.A.GpuTimed), vv.headerWord(EP.A.GpuFrameUs), ev.isSampling()) && ev.onGpuSampleStarted(), ev.onFrameCpu(pv + this.pacedCpuMs), this.pacedCpuMs = 0, this.countFpsFrame(zv)
      }
      stop() {
        for (const vv of this.timers) clearInterval(vv);
        this.timers.length = 0, document.removeEventListener("visibilitychange", this.onVisibility), this.ping.stop()
      }
      followGame() {
        const vv = this.shell.joinedGame();
        return vv !== this.game && (this.game = vv, this.tracker.snapshotAndReset(), this.pacing.onJoin(), this.hasFlushedSinceConnect = !1, this.inGameAtLastFlush = !1, this.fpsSpanStartMs = -1, this.fpsFrames = 0, this.pacedCpuMs = 0, this.firstSpanFps = null, this.fpsOverTime = null, this.initialFps = null), null !== vv
      }
      countFpsFrame(vv) {
        if (this.fpsSpanStartMs < 0) {
          if (!this.shell.inGame()) return;
          this.fpsSpanStartMs = vv
        }
        this.fpsFrames++;
        const zv = vv - this.fpsSpanStartMs;
        if (!(zv < sd.d)) {
          if (!document.hidden) {
            const vv = 1e3 * this.fpsFrames / zv;
            this.firstSpanFps ??= vv, this.initialFps = this.firstSpanFps, this.fpsOverTime = vv
          }
          this.fpsFrames = 0, this.fpsSpanStartMs = vv
        }
      }
      flush() {
        const vv = this.followGame(),
          {
            cpuFrameMs: zv,
            refreshHz: Pv,
            cpuBottleneck: Sv,
            frameIntervalCv: ev,
            ...gv
          } = this.tracker.snapshotAndReset(),
          pv = this.shell.inGame(),
          dv = pv && this.inGameAtLastFlush,
          Nv = dv ? gv : Nd.d,
          lv = this.pacing.snapshotAndReset(dv);
        if (this.inGameAtLastFlush = pv, this.pendingLightFailures += this.shell.takeFailedMeshJobs(), !vv) return void this.pacing.unsent(lv);
        const Tv = performance.now(),
          wv = (0, ad.r)((0, ad.o)(Tv), this.unsentPage),
          sv = function(vv, zv, Pv, Sv, ev, gv, pv, dv) {
            var Nv, lv, Tv, Wv;
            const wv = {},
              {
                canvas: av
              } = vv,
              sv = (0, wd.b)({
                refreshHz: zv.refreshHz,
                msaa: vv.msaa(),
                autoMsaaOff: (0, Kd.d)()
              });
            for (const Cv of (0, gd.d)()) {
              const iv = Cv.name;
              let cv;
              if ((0, pd.n)(iv)) cv = (0, ad.e)(iv);
              else if ((0, ad.j)(iv)) cv = dv[iv];
              else if ((0, wd.d)(iv)) cv = sv[iv];
              else switch (iv) {
                case "fps":
                  cv = Sv;
                  break;
                case "tp":
                  cv = ev;
                  break;
                case "Ap":
                  cv = (0, Od.E)((0, Dd.g)().n);
                  break;
                case "Lp":
                  cv = Math.max(av.width, av.height);
                  break;
                case "Hp":
                  cv = Math.min(av.width, av.height);
                  break;
                case "Mp":
                  cv = navigator.hardwareConcurrency || null;
                  break;
                case "yp":
                  cv = (0, ES.getWebGpuSupported)();
                  break;
                case "Bp":
                  cv = null === vv.fallbackReason ? null : Rd[vv.fallbackReason];
                  break;
                case "Jp":
                  cv = zv.cpuFrameMs;
                  break;
                case "Ep":
                  cv = zv.refreshHz;
                  break;
                case "bp":
                  cv = zv.cpuBottleneck;
                  break;
                case "rp":
                  cv = zv.frameIntervalCv;
                  break;
                case "kp":
                  cv = zv.frameMs;
                  break;
                case "Xp":
                  cv = zv.tickMs;
                  break;
                case "hd":
                  cv = zv.mainBusyShare;
                  break;
                case "Sd":
                  cv = zv.mainProbeDelayMs;
                  break;
                case "vd":
                  cv = zv.longAnimationFramesPerMin;
                  break;
                case "zd":
                  cv = zv.longAnimationFrameTimeShare;
                  break;
                case "Pd":
                  cv = zv.longAnimationFrameScriptShare;
                  break;
                case "pd":
                  cv = zv.gpuPassMs;
                  break;
                case "dd":
                  cv = zv.gpuSubmitToDoneMs;
                  break;
                case "Nd":
                  cv = Pv.pacedShare;
                  break;
                case "ld":
                  cv = Pv.switchesPerHour;
                  break;
                case "Td":
                  cv = Pv.lagP50Ms;
                  break;
                case "Wd":
                  cv = Pv.lagP90Ms;
                  break;
                case "wd":
                  cv = Pv.joinLagP90Ms;
                  break;
                case "Ud":
                  cv = (0, ed.g)(gv);
                  break;
                case "Zp":
                  cv = pv;
                  break;
                case "sd":
                case "Cd":
                case "Gd":
                case "jd":
                case "fd":
                case "Fd":
                case "Yd":
                case "Od":
                case "Dd":
                case "Kd":
                case "Vd":
                case "Rd":
                case "xd":
                case "td":
                case "qd":
                  cv = null;
                  break;
                case "bd":
                  cv = (0, ES.getPlatformType)();
                  break;
                case "rd":
                  cv = (0, ES.getGpuVendor)();
                  break;
                case "kd":
                  cv = Gd.b[vv.backend];
                  break;
                case "Xd":
                  cv = (0, Cd.b)();
                  break;
                case "ud":
                  cv = (0, ES.getOperatingSystem)();
                  break;
                case "vN":
                  cv = (0, ES.getTrafficSource)();
                  break;
                case "zN":
                  cv = null !== (Nv = hv.c.get("gameEntrySource")) && void 0 !== Nv ? Nv : dd.e;
                  break;
                case "PN":
                  cv = zv.frameLimiter;
                  break;
                case "hN":
                  cv = (0, Td.h)();
                  break;
                case "SN":
                  cv = null !== (lv = (0, Wd.e)()) && void 0 !== lv ? lv : dd.e;
                  break;
                case "eN":
                  cv = (0, Td.d)(av.width, av.height);
                  break;
                case "gN":
                  cv = (0, gd.g)(-(new Date).getTimezoneOffset());
                  break;
                case "NN":
                  cv = null !== (Tv = vv.fallbackReason) && void 0 !== Tv ? Tv : dd.e;
                  break;
                case "WN":
                  cv = "ready";
                  break;
                case "wN":
                  cv = (0, ES.getSoftwareRenderer)();
                  break;
                case "dN":
                  cv = null !== vv.shaderPackReach() ? "true" : "false";
                  break;
                case "aN":
                  cv = null !== (Wv = vv.shaderPackReach()) && void 0 !== Wv && Wv.sceneDepth ? "true" : "false";
                  break;
                case "sN": {
                  const zv = vv.shaderPackReach();
                  cv = null !== zv && void 0 !== zv && zv.sunShadow ? "all" : null !== zv && void 0 !== zv && zv.airShadow ? "air" : "none";
                  break
                }
                case "CN":
                  cv = cd.z;
                  break;
                case "pN":
                case "lN":
                case "TN":
                  cv = dd.e;
                  break;
                default:
                  throw new Error(`Unhandled field name: ${iv}`)
              }
              if (void 0 === cv) throw new Error(`Metric ${iv} has no value`);
              wv[iv] = cv
            }
            return wv
          }(this.shell, {
            cpuFrameMs: zv,
            refreshHz: Pv,
            cpuBottleneck: Sv,
            frameIntervalCv: ev,
            ...Nv
          }, lv, this.fpsOverTime, this.initialFps, this.pendingLightFailures, this.ping.take(), wv);
        if (! function(vv, zv, Pv) {
            return (0, Bz.b)(), vv(av.l.Send, zv, Pv)
          }(this.shell.writeCmd, Wv.Gd, function(vv) {
            const zv = (0, Iv.f)((0, oz.e)(vv)),
              Pv = new Uint8Array(av.Wd.BYTES + zv.length);
            return new DataView(Pv.buffer).setUint16(0, oz.d.AnalyticsUpdate, !0), Pv.set(zv, av.Wd.BYTES), Pv
          }(sv))) return this.unsentPage = wv, this.pacing.unsent(lv), void(0 === this.sendsDropped++ && console.warn("[wasm-client] an analytics update found the cmd ring full: dropped"));
        this.unsentPage = null, this.pendingLightFailures -= Math.min(this.pendingLightFailures, ed.e), (0, ad.m)(sv, "wasm", Tv)
      }
    }
    var qd = Pv(39065);

    function Id(vv, zv, Pv) {
      const hv = new Map;
      return (0, qd.c)(((vv, Pv, hv) => zv.yN(vv, Pv, hv)), ((zv, Pv, Sv) => {
        const ev = `${zv},${Pv},${Sv}`;
        return hv.has(ev) || hv.set(ev, (0, Zz.d)(vv, zv, Pv, Sv)), hv.get(ev)
      }), Pv)
    }
    var Qd = Pv(39070),
      Zd = Pv(40019);

    function Ad(vv) {
      const zv = null !== vv && 0 !== (av.t.playerFlags(vv.api.apiView, 0) & av.Gd.CursorAim);
      zv !== (0, Zd.m)() && (0, Zd.F)(zv, null !== vv)
    }

    function Ld(vv) {
      return (0, ih.b)(ch.M, vv)
    }
    var Hd = Pv(40038);
    const Md = new ev.g((vv => Pv(41922)(`./${vv}/${vv}Client`)));
    let yd = null,
      Bd = null;
    async function Jd(vv) {
      yd ??= Pv.e(27).then((() => Pv(38663))).then((vv => {
        Bd = vv.createDefaultClientPlugins
      }), (vv => {
        throw yd = null, vv
      })), await Promise.all([Md.load(vv), yd])
    }

    function Ed(vv) {
      vv.load(new qz(Bh, new oh))
    }
    let od = !1;
    const bd = new WeakMap;

    function rd(vv) {
      try {
        vv()
      } catch (zv) {
        console.error("[bloxd-wasm-client] a session-end step failed", zv)
      }
    }

    function kd(vv, zv) {
      ! function() {
        var vv, zv;
        Hh.Howler.volume();
        const Pv = Hh.Howler;
        null === (vv = Pv._autoResume) || void 0 === vv || vv.call(Pv), null === (zv = Pv._autoSuspend) || void 0 === zv || zv.call(Pv)
      }(), zv.audio.prepare();
      const Pv = new mv(zv.core, zv.memory, zv.audio);
      let ev;
      try {
        ev = new sS(Pv, zv.options)
      } catch (Wv) {
        return vv.crash(iS.D, Wv), null
      }(0, dv.f)(CS(Pv, ev));
      const lv = new fp({
        running: vv,
        api: Pv,
        core: zv.core,
        memory: zv.memory,
        staleOr: zv.staleOr,
        reportFault: zv.reportReplayFault,
        options: zv.options,
        sessionInfo: zv.sessionInfo,
        replayShaderPack: zv.replayShaderPack
      });
      (0, hh.w)();
      const Tv = new qh({
        api: Pv,
        tables: ev,
        sessionInfo: zv.sessionInfo,
        gameFactory: vv => Md.loadedFactory(vv),
        defaultPlugins: (vv, zv, Pv, hv) => {
          if (null === Bd) throw new Error("The default plugins started before they loaded");
          return Bd(vv, zv, Pv, hv)
        },
        serverOptions: zv.options,
        onNetEvent: vv => {
          lv.netEvent(vv), zv.onNetEvent(vv)
        },
        setLocalOptions: zv => {
          Yp(vv, {
            changes: zv,
            reset: !1
          })
        },
        playSound: (vv, Pv, hv, Sv, ev, gv, pv) => zv.audio.playGame(vv, Pv, hv, Sv, ev, gv, pv),
        preloadSounds: vv => {
          zv.audio.preload(function(vv) {
            const zv = [];
            for (const Pv of vv) {
              const vv = xz(Pv);
              vv >= 0 && zv.push(cz[vv])
            }
            return zv
          }(vv))
        },
        onSessionEnd: () => {
          rd(Sv.p), rd(zS), rd((() => {
            hv.c.set({
              openInGameMenuName: null
            })
          })), rd((() => {
            zv.audio.endSession()
          }))
        },
        beforeWrite: zv.beforeWrite,
        beforeOp: zv.beforeOp,
        cameraScreen: vS,
        showCameraFacing: PS,
        onEventOverflow: zv.onEventOverflow,
        screenBandY: pv.n,
        replayEntities: lv.entityHooks,
        hasPackModel: zv.hasPackModel
      });
      return Tv.attach(vv), bd.set(Tv, lv), Ah(Tv.items, zv.audio),
        function(vv) {
          vv.setClientFreeCameraGrant("isDev", !1);
          const zv = zv => {
            vv.setClientFreeCameraGrant("hasDeveloperRank", zv.playerHasRank("developer"))
          };
          (0, gv.l)("userContextUpdated", zv)
        }(Tv), od || (od = !0, (0, gv.l)("appManagerUpdated|openInGameMenuName", (vv => {
          !vv && (0, Nv.o)().includes(Nv.e) && (0, Nv.q)(Nv.e)
        }))), Tv
    }

    function Xd(vv) {
      try {
        vv.closeGame()
      } finally {
        var zv;
        null === (zv = bd.get(vv)) || void 0 === zv || zv.stop(), bd.delete(vv)
      }
    }
  },
  40116: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => hv
    });
    const hv = {
      webgpu: "rust_webgpu",
      webgl: "rust_webgl2",
      webgl1: "rust_webgl1"
    }
  },
  40134: (vv, zv, Pv) => {
    function hv() {
      return Pv(40139)
    }

    function Sv() {
      return Pv(40146)
    }

    function ev(vv) {
      return ["pl", "ru", "tr", "uk", "vi"].includes(vv)
    }
    Pv.d(zv, {
      d: () => ev,
      e: () => hv,
      g: () => Sv
    })
  },
  35852: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => pv,
      g: () => Nv,
      h: () => gv,
      j: () => Tv
    });
    var hv = Pv(35847),
      Sv = Pv(11);
    const ev = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;

    function gv(vv) {
      if (vv instanceof WebAssembly.RuntimeError) return !0;
      const zv = vv instanceof Error ? vv.stack : void 0;
      return "string" === typeof zv && ev.test(zv)
    }

    function pv(vv, zv, Pv) {
      var Sv;
      const gv = vv instanceof Error ? vv.name : "thrown",
        pv = (vv instanceof Error && null !== (Sv = vv.stack) && void 0 !== Sv ? Sv : "").split("\n").filter((vv => ev.test(vv))).slice(0, 8).map((vv => vv.trim())),
        dv = null === zv ? "wasm memory unknown" : `wasm memory ${Math.round(zv/2**20)} MB`,
        Nv = null === Pv.panic ? "" : `, panic: ${(0,hv.f)(Pv.panic)}`,
        lv = `${gv}: ${vv instanceof Error?vv.message:String(vv)}`;
      return `${(0,hv.i)(Pv.kind,Pv.refusedBytes)} ${lv} (${dv})${Nv}${pv.length>0?` | ${pv.join(" < ")}`:""}`
    }
    const dv = /on a detached ArrayBuffer|access detached ArrayBuffer|has been detached from the view/;

    function Nv(vv) {
      var zv;
      let Pv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ArrayBuffer.prototype;
      if (!(vv instanceof Error) || !dv.test(vv.message)) return {};
      if (!("detached" in Pv)) return {
        arrayBufferDetached: "absent"
      };
      return {
        arrayBufferDetached: (0, Sv.U)(null === (zv = (0, Sv.Q)(Pv, "detached")) || void 0 === zv ? void 0 : zv.get, /^function (get )?detached\(\) \{\s*\[native code\]\s*\}$/) ? "native" : "script"
      }
    }
    const lv = 500;

    function Tv(vv) {
      let zv = "[object Object]";
      try {
        zv = String(vv)
      } catch {}
      if ("[object Object]" !== zv) return zv;
      try {
        var Pv, hv;
        return null !== (Pv = null === (hv = JSON.stringify(vv)) || void 0 === hv ? void 0 : hv.slice(0, lv)) && void 0 !== Pv ? Pv : zv
      } catch {
        return zv
      }
    }
  },
  40139: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/JetBrainsMonoNL-ExtraBold-latin.68689f5c710b4650e4b8.woff2"
  },
  40146: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/JetBrainsMonoNL-ExtraBold-rest.d152b95e9e75f7dca56d.woff2"
  },
  35847: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => hv,
      d: () => ev,
      f: () => dv,
      h: () => gv,
      i: () => Sv
    });
    const hv = /^alloc_failed (\d+) bytes$/;

    function Sv(vv, zv) {
      return ev(vv, zv) ? `trap=alloc_failed ${zv} bytes` : `trap=${vv}`
    }

    function ev(vv, zv) {
      return "unreachable" === vv && zv > 0
    }

    function gv(vv, zv, Pv) {
      const hv = function(vv) {
        return vv instanceof WebAssembly.RuntimeError ? /unreachable/i.test(vv.message) ? "unreachable" : /out of bounds/i.test(vv.message) ? "out_of_bounds" : "runtime_error" : (vv instanceof RangeError || vv instanceof Error && "InternalError" === vv.name) && /call stack|recursion/i.test(vv.message) ? "stack_overflow" : "js_error"
      }(vv);
      if ("unreachable" !== hv) return {
        kind: hv,
        panic: null,
        refusedBytes: 0
      };
      const Sv = zv(),
        ev = Pv();
      return {
        kind: hv,
        panic: ev > 0 ? null : Sv,
        refusedBytes: ev
      }
    }
    const pv = 300;

    function dv(vv) {
      return vv.replace(/\s*\n\s*/g, " / ").slice(0, pv)
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);