export const id = 46;
export const ids = [46];
export const modules = {
  40547: (cB, Bc, nc) => {
    var Vc = {
      "./bedwars/bedwarsClient": [37706, 9],
      "./bridgeBattle/bridgeBattleClient": [37711, 10],
      "./buildAFactory2/buildAFactory2Client": [37035, 63, 62, 61, 204, 220, 11],
      "./classic/classicClient": [37713, 12],
      "./clutch/clutchClient": [37718, 13],
      "./cooking/cookingClient": [37720, 14],
      "./defusal/defusalClient": [37724, 15],
      "./frontline/frontlineClient": [37731, 63, 62, 61, 16],
      "./goalRush/goalRushClient": [37737, 17],
      "./luckyBedwars/luckyBedwarsClient": [37742, 18],
      "./ninetyNineNights/ninetyNineNightsClient": [37745, 19],
      "./oneBlock/oneBlockClient": [37748, 20],
      "./pvpCiv/pvpCivClient": [37753, 21],
      "./skyIslands/skyIslandsClient": [37757, 22],
      "./skyblock/skyblockClient": [37053, 63, 177, 23],
      "./tsunami/tsunamiClient": [37761, 24]
    };

    function Ic(cB) {
      if (!nc.o(Vc, cB)) return Promise.resolve().then((() => {
        var Bc = new Error("Cannot find module '" + cB + "'");
        throw Bc.code = "MODULE_NOT_FOUND", Bc
      }));
      var Bc = Vc[cB],
        Ic = Bc[0];
      return Promise.all(Bc.slice(1).map(nc.e)).then((() => nc(Ic)))
    }
    Ic.keys = () => Object.keys(Vc), Ic.id = 40547, cB.exports = Ic
  },
  35136: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => Ic,
      e: () => rB
    });
    let Vc = !1;

    function Ic() {
      return Vc
    }

    function rB(cB) {
      return Vc !== cB && (Vc = cB, !0)
    }
  },
  37488: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => rB,
      i: () => Ic
    });
    var Vc = nc(35);

    function Ic(cB) {
      return "refetchCode" === cB || "devDownloadJson" === cB || cB.startsWith("Plugin")
    }

    function rB(cB, Bc) {
      "refetchCode" !== cB ? "Plugin|MobAiPlugin|ShowPetUi" !== cB ? Promise.all([nc.e(92), nc.e(93), nc.e(88), nc.e(193)]).then((() => nc(39693))).then((nc => {
        let {
          runClientGameMessage: Vc
        } = nc;
        Vc(cB, Bc)
      })).catch((Bc => {
        console.error(`Game message ${cB} failed`, Bc)
      })) : Vc.i.Vu("showPetUi", Bc) : Vc.i.Vu("refetchCode")
    }
  },
  40530: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => Vc,
      h: () => Ic
    });
    const Vc = ["recording", "freecam", "keyframe"];

    function Ic() {
      const cB = crypto.getRandomValues(new Uint32Array(2));
      return BigInt(cB[1]) << 32n | BigInt(cB[0])
    }
  },
  8155: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => sc,
      d: () => Mc
    });
    var Vc = nc(27);
    const Ic = 24,
      rB = "farNametags",
      uc = 1e5;

    function sc() {
      var cB;
      return null === (cB = Vc.d.get("showDistantNametags")) || void 0 === cB || cB
    }

    function Mc() {
      var cB;
      return null !== (cB = function() {
        const cB = new URLSearchParams(window.location.search).get(rB),
          Bc = null === cB || "" === cB ? NaN : Number(cB);
        return Number.isFinite(Bc) && Bc >= 0 ? Math.min(Bc, uc) : null
      }()) && void 0 !== cB ? cB : sc() ? 0 : Ic
    }
  },
  40527: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      blockIdOf: () => fM.e,
      clearWasmCameraScreen: () => KV,
      creativeItemIds: () => nV.creativeItemIds,
      decodeMapSettings: () => tP,
      drainTextRerasters: () => ps.b,
      enchantmentPerksOf: () => nV.enchantmentPerksOf,
      endGameHost: () => gP,
      followCursorAim: () => eM,
      followMenuPrefs: () => jr,
      loadAudio: () => hM,
      loadClientGame: () => pM,
      loadTextIcons: () => ps.g,
      rasterText: () => zM.e,
      readBoardToEdit: () => TM,
      setTextHost: () => ps.j,
      setTextLocalPlayer: () => ps.k,
      showInCreativeInvenOf: () => nV.showInCreativeInvenOf,
      startGameHost: () => LM,
      startShellAnalytics: () => PM,
      startSkyFeed: () => Xs,
      textChanged: () => ps.p,
      warmText: () => zM.i,
      wasmCameraScreen: () => iI
    });
    nc(35149);
    var Vc = nc(27),
      Ic = nc(35418),
      rB = nc(37592),
      uc = nc(35),
      sc = nc(35167),
      Mc = nc(35414),
      Pc = nc(1142),
      qB = nc(556),
      Oc = nc(36795),
      Tc = nc(3838),
      fc = nc(38647),
      mB = nc(38582);
    const ec = mB.Cb / 4,
      tB = mB.t.PlaySound,
      Sc = mB.t.SoundReset,
      yB = Tc.T.ReplayFailed,
      zB = Tc.T.RecorderEvent;
    class pc {
      constructor(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.core = cB, this.memory = Bc, this.audio = nc, this.serverIds = new Int32Array(256).fill(mB.Oc), this.kinds = new Uint16Array(256), this.idStr = new Array(256).fill(null), this.indexById = new Map, this.queries = void 0, this.buffer = null, this.viewPtr = -1, this.view = new DataView(new ArrayBuffer(mB.v.BYTES)), this.renderPtr = 0, this.Qc = 0, this.renderCapacity = 0, this.render = new Float32Array(0), this.visPtr = 0, this.vis = new Uint8Array(0), this.renderBuffer = null, this.eventsBuffer = null, this.eventsPtr = 0, this.eventsLen = 0, this.events = new DataView(new ArrayBuffer(0)), this.audioView = null, this.scratchPtr = -1, this.corruption = null, this.replay = null, this.queries = new mB.S(cB, (() => {
          this.scratchPtr = -1, this.ensureViews()
        }))
      }
      scratch() {
        return this.scratchPtr < 0 && (this.scratchPtr = this.core.Aqc(), this.ensureViews()), this.scratchPtr
      }
      eventBytes(cB, Bc) {
        const nc = this.eventView();
        return new Uint8Array(nc.buffer, nc.byteOffset + cB, Bc)
      }
      get apiView() {
        return this.ensureViews(), this.view
      }
      ensureViews() {
        this.memory().buffer !== this.buffer && this.reView()
      }
      get localId() {
        return mB.v.localId(this.apiView, 0)
      }
      localDeaths() {
        return mB.v.localDeaths(this.apiView, 0)
      }
      rereadDirectory() {
        const cB = this.apiView,
          Bc = mB.v.entRenderPtr(cB, 0),
          nc = mB.v.entVisPtr(cB, 0),
          Vc = mB.v.entCapacity(cB, 0);
        if (Bc !== this.renderPtr || nc !== this.visPtr || Vc !== this.Qc || this.renderBuffer !== this.buffer) {
          this.renderPtr = Bc, this.visPtr = nc, this.Qc = Vc, this.renderBuffer = this.buffer;
          const cB = this.memoryView(Float32Array, Bc, Vc * ec, "the render array"),
            Ic = this.memoryView(Uint8Array, nc, Vc, "the visibility array");
          this.renderCapacity = cB && Ic ? Vc : 0, this.render = cB && Ic ? cB : new Float32Array(0), this.vis = cB && Ic ? Ic : new Uint8Array(0)
        }
      }
      memoryView(cB, Bc, nc, Vc) {
        try {
          return (0, fc.v)(cB, this.memory().buffer, Bc, nc, Vc)
        } catch (Ic) {
          return this.keepCorruption(Ic), null
        }
      }
      memoryData(cB, Bc, nc, Vc) {
        try {
          return (0, fc.g)(this.memory().buffer, cB, Bc, nc, Vc)
        } catch (Ic) {
          return this.keepCorruption(Ic), null
        }
      }
      reportCorruption(cB) {
        this.keepCorruption(new fc.d(cB))
      }
      keepCorruption(cB) {
        if (!(cB instanceof fc.d)) throw cB;
        this.corruption ??= cB
      }
      throwCorruption() {
        if (this.corruption) throw this.corruption
      }
      walk(cB, Bc, nc) {
        this.rereadDirectory(), this.throwCorruption();
        const {
          ptr: Vc,
          len: Ic
        } = cB;
        this.eventsPtr = Vc, this.eventsLen = Ic, this.eventsBuffer = null;
        const rB = this.eventView();
        for (let Pc = 0; Pc < Ic;) {
          const cB = rB.getUint32(Pc, !0),
            nc = 65535 & cB,
            Vc = cB >>> 16,
            Ic = Pc + Tc.R;
          if (nc === mB.t.EntitySpawned) {
            var uc;
            if (Vc !== mB.Jb.BYTES) throw Lc(nc, Pc, Vc);
            const cB = mB.Jb.serverId(rB, Ic);
            this.spawned(cB, mB.Jb.index(rB, Ic), mB.Jb.kind(rB, Ic)), null === (uc = Bc.entityAdded) || void 0 === uc || uc.call(Bc, cB)
          } else if ((nc === mB.t.ChunkSlot || nc === mB.t.EntityInfoChanged) && !(0, mB.ae)(nc, rB, Ic, Vc, Bc)) throw Lc(nc, Pc, Vc);
          Pc = Ic + (0, Tc.Ld)(Vc)
        }
        try {
          var sc;
          null === (sc = Bc.afterPrescan) || void 0 === sc || sc.call(Bc), this.throwCorruption(), !nc() && this.dispatch(cB, Bc, nc) && (this.throwCorruption(), this.applyListener(), Bc.afterWalk(cB.kind)), this.throwCorruption()
        } catch (Mc) {
          throw Mc instanceof fc.d && (this.corruption ??= Mc), Mc
        } finally {
          nc() || null !== this.corruption || this.applyDespawns(Ic, Bc)
        }
      }
      applyDespawns(cB, Bc) {
        const nc = this.eventView();
        for (let Ic = 0; Ic < cB;) {
          const cB = nc.getUint32(Ic, !0),
            rB = Ic + Tc.R;
          if ((65535 & cB) === mB.t.EntityDespawned && cB >>> 16 === mB.Jb.BYTES) {
            const cB = mB.Jb.serverId(nc, rB);
            var Vc;
            if (this.despawned(cB, mB.Jb.index(nc, rB))) null === (Vc = Bc.entityRemoved) || void 0 === Vc || Vc.call(Bc, cB)
          }
          Ic = rB + (0, Tc.Ld)(cB >>> 16)
        }
        this.rereadDirectory()
      }
      dispatch(cB, Bc, nc) {
        const {
          len: Vc,
          net: Ic,
          netOffsets: rB
        } = cB;
        let uc = this.eventView(),
          sc = 0;
        for (let aB = 0; aB < Vc;) {
          const cB = uc.getUint32(aB, !0),
            Vc = 65535 & cB,
            lc = cB >>> 16,
            gB = aB + Tc.R;
          let Uc = !1;
          if (sc < Ic.length && rB[sc] === aB) Bc.netEvent(Ic[sc]), sc++, Uc = !0;
          else if (Vc === Tc.T.LocalPlayerBound) {
            var Mc;
            if (lc !== Tc.tb) throw Lc(Vc, aB, lc);
            null === (Mc = Bc.localPlayerBound) || void 0 === Mc || Mc.call(Bc, uc.getInt32(gB, !0)), Uc = !0
          } else if (Vc === Tc.T.LocalHurt) {
            var Pc;
            if (lc !== Tc.pb) throw Lc(Vc, aB, lc);
            null === (Pc = Bc.localHurt) || void 0 === Pc || Pc.call(Bc, uc.getInt32(gB, !0), uc.getFloat32(gB + 4, !0), uc.getUint32(gB + 8, !0)), Uc = !0
          } else if (Vc === Tc.T.AttackHit) {
            var qB;
            if (lc !== Tc.e) throw Lc(Vc, aB, lc);
            const cB = uc.getFloat32(gB, !0),
              nc = uc.getFloat32(gB + 4, !0),
              Ic = uc.getFloat32(gB + 8, !0),
              rB = uc.getUint32(gB + 12, !0);
            null === (qB = Bc.attackHit) || void 0 === qB || qB.call(Bc, cB, nc, Ic, 0 !== (rB & Tc.k.Crit), 0 !== (rB & Tc.k.HitSelf))
          } else if (Vc === Tc.T.PhysicsType) {
            var Oc;
            if (lc !== Tc.Hb) throw Lc(Vc, aB, lc);
            null === (Oc = Bc.physicsType) || void 0 === Oc || Oc.call(Bc, uc.getUint32(gB, !0), uc.getInt32(gB + 4, !0)), Uc = !0
          } else if (Vc === Tc.T.VehicleEffect) {
            var fc;
            const cB = Yc(uc, gB, lc);
            if (null === cB) throw Lc(Vc, aB, lc);
            null === (fc = Bc.vehicleEffect) || void 0 === fc || fc.call(Bc, cB.op, cB.name, cB.icon, cB.level, cB.durationMs), Uc = !0
          } else if (Vc === Tc.T.ZoomChanged) {
            var ec;
            if (lc !== Tc.rd) throw Lc(Vc, aB, lc);
            null === (ec = Bc.zoomChanged) || void 0 === ec || ec.call(Bc, uc.getFloat32(gB, !0), uc.getUint8(gB + 4)), Uc = !0
          } else if (Vc === Tc.T.ZoomDisabled) {
            var pc;
            if (0 !== lc) throw Lc(Vc, aB, lc);
            null === (pc = Bc.zoomDisabled) || void 0 === pc || pc.call(Bc), Uc = !0
          } else if (Vc === Tc.T.GameCamera) {
            var hc;
            null === (hc = Bc.gameCamera) || void 0 === hc || hc.call(Bc, new Uint8Array(uc.buffer, uc.byteOffset + gB, lc).slice()), Uc = !0
          } else if (Vc === mB.t.ChunkSlot || Vc === mB.t.EntityInfoChanged);
          else if (Vc >= tB && Vc <= Sc) {
            if (this.audio && !this.audio.onAudioEvent(Vc, uc, gB, lc)) throw Lc(Vc, aB, lc)
          } else if (Vc >= yB && Vc <= zB) {
            if (this.replay) {
              if (!this.replay.onReplayEvent(Vc, uc, gB, lc)) throw Lc(Vc, aB, lc);
              Uc = !0
            }
          } else if (Vc >= mB.dd && Vc <= mB.hd && Vc !== Tc.T.EnvLighting) {
            if (!(0, mB.ae)(Vc, uc, gB, lc, Bc)) throw Lc(Vc, aB, lc);
            Uc = !0
          }
          if (Uc) {
            if (nc()) return !1;
            uc = this.eventView()
          }
          aB = gB + (0, Tc.Ld)(lc)
        }
        return !nc()
      }
      applyListener() {
        var cB;
        if (!this.audio) return;
        const Bc = mB.v.audioViewPtr(this.apiView, 0),
          nc = this.memory().buffer;
        let Vc = this.audioView;
        (null === (cB = Vc) || void 0 === cB ? void 0 : cB.buffer) === nc && Vc.byteOffset === Bc || (Vc = (0, fc.g)(nc, Bc, mB.w.BYTES, 8, "the audio view"), this.audioView = Vc), Vc && this.audio.applyListener(Vc)
      }
      indexOf(cB) {
        return this.indexById.get("number" === typeof cB ? cB : +cB)
      }
      isLocal(cB) {
        return cB !== mB.Oc && cB === mB.v.localId(this.apiView, 0)
      }
      rC(cB) {
        const Bc = [0, 0, 0];
        return this.readPosition("number" === typeof cB ? cB : +cB, Bc) ? Bc : null
      }
      readPosition(cB, Bc) {
        const nc = this.apiView;
        if (void 0 !== this.indexById.get(cB) && this.isLocal(cB)) {
          for (let cB = 0; cB < 3; cB++) Bc[cB] = mB.v.localPos(nc, 0, cB);
          return !0
        }
        return this.readDrawnPosition(cB, Bc)
      }
      readDrawnPosition(cB, Bc) {
        const nc = this.apiView,
          Vc = this.indexById.get(cB);
        if (void 0 === Vc || Vc >= this.renderCapacity) return Bc[0] = Bc[1] = Bc[2] = NaN, !1;
        const Ic = Vc * ec;
        for (let rB = 0; rB < 3; rB++) Bc[rB] = this.render[Ic + rB] + mB.v.origin(nc, 0, rB);
        return !0
      }
      checkValid(cB) {
        return void 0 !== this.indexOf(cB)
      }
      isAlive(cB) {
        const Bc = this.indexOf(cB);
        if (void 0 === Bc) return null;
        if (this.ensureViews(), Bc >= this.renderCapacity) return null;
        const nc = this.vis[Bc];
        return 0 === nc ? null : 0 !== (nc & mB._d.Alive)
      }
      getEntityType(cB) {
        const Bc = this.indexOf(cB);
        return void 0 === Bc ? this.isLocal("number" === typeof cB ? cB : +cB) ? "Player" : null : aB(this.kinds[Bc])
      }
      spawned(cB, Bc, nc) {
        if (Bc >= 1048576) throw new fc.d(`entity ${cB} spawned at index ${Bc}`);
        this.ensureIndex(Bc), this.serverIds[Bc] === cB && null !== this.idStr[Bc] || (this.idStr[Bc] = String(cB)), this.serverIds[Bc] = cB, this.kinds[Bc] = nc, this.indexById.set(cB, Bc)
      }
      despawned(cB, Bc) {
        let nc = !1;
        return this.indexById.get(cB) === Bc && (this.indexById.delete(cB), nc = !0), Bc < this.serverIds.length && this.serverIds[Bc] === cB && (this.serverIds[Bc] = mB.Oc, this.kinds[Bc] = 0, this.idStr[Bc] = null), nc
      }
      ensureIndex(cB) {
        const Bc = this.serverIds.length;
        if (cB < Bc) return;
        let nc = 2 * Bc;
        for (; nc <= cB;) nc *= 2;
        const Vc = new Int32Array(nc).fill(mB.Oc);
        Vc.set(this.serverIds), this.serverIds = Vc;
        const Ic = new Uint16Array(nc);
        Ic.set(this.kinds), this.kinds = Ic;
        for (let rB = Bc; rB < nc; rB++) this.idStr.push(null)
      }
      eventView() {
        const cB = this.memory().buffer;
        return cB !== this.eventsBuffer && (this.eventsBuffer = cB, this.events = new DataView(cB, this.eventsPtr, this.eventsLen)), this.events
      }
      reView() {
        const cB = this.memory().buffer;
        this.buffer = cB, this.viewPtr < 0 && (this.viewPtr = this.core.Gqc()), this.view = new DataView(cB, this.viewPtr, mB.v.BYTES), this.rereadDirectory()
      }
    }

    function hc(cB) {
      return cB >>> mB.e === mB.u.Item
    }

    function aB(cB) {
      var Bc, nc;
      const Vc = cB & mB.i;
      switch (cB >>> mB.e) {
        case mB.u.Lifeform:
          return null !== (Bc = qB.i[Vc]) && void 0 !== Bc ? Bc : null;
        case mB.u.Throwable:
          return null !== (nc = Oc.i[Vc]) && void 0 !== nc ? nc : null;
        case mB.u.Mesh:
          return "Mesh";
        case mB.u.Audio:
          return "AudioEntity";
        case mB.u.Item:
          return "Item";
        default:
          return null
      }
    }
    const lc = new TextDecoder;

    function Yc(cB, Bc, nc) {
      if (nc < Tc.Rc.HEAD_BYTES) return null;
      const Vc = cB.getUint32(Bc, !0),
        Ic = cB.getUint32(Bc + 20, !0),
        rB = cB.getUint32(Bc + 24, !0),
        uc = Tc.Rc.HEAD_BYTES + (0, Tc.Ld)(Ic);
      if (Vc !== Tc.Rc.UPDATE && Vc !== Tc.Rc.REMOVE || Ic > nc || uc + rB > nc) return null;
      const sc = (nc, Vc) => lc.decode(new Uint8Array(cB.buffer, cB.byteOffset + Bc + nc, Vc)),
        Mc = cB.getFloat64(Bc + 12, !0);
      return {
        op: Vc,
        level: cB.getFloat64(Bc + 4, !0),
        durationMs: Number.isNaN(Mc) ? null : Mc,
        name: sc(Tc.Rc.HEAD_BYTES, Ic),
        icon: sc(uc, rB)
      }
    }

    function Lc(cB, Bc, nc) {
      return new fc.d(`event ${cB} at ${Bc} of ${nc} bytes`)
    }
    var gB = nc(302),
      Uc = nc(1090),
      bB = nc(37488),
      Zc = nc(1587),
      Qc = nc(38718),
      Cc = nc(1534),
      vB = nc(37608),
      Dc = nc(37631),
      Nc = nc(37619),
      Ec = nc(38629),
      oc = nc(1934),
      Wc = nc(37604),
      wc = nc(37627);
    const kB = Math.max(mB.pb.BYTES, mB.jb.BYTES, mB.lb.BYTES);

    function Xc(cB) {
      if (!(0, wc.g)(cB)) return null;
      const Bc = Number(cB);
      return (0 | Bc) === Bc ? Bc : null
    }
    class Hc {
      constructor(cB) {
        this.api = cB, this.bodyHeading = 0, this.viewHeading = 0, this.defaultPose = (0, Wc.j)(), this.defaultPoseRead = !1, this.defaultFov = 0, this.baseFov = 0, this.aspect = 1, this.pN = null, this.entityLive = !1, this.entityFeet = [0, 0, 0], this.entityAim = [0, 0, 0], this.entityHeading = 0, this.localId = mB.Oc, this.localName = String(mB.Oc), this.scratch = null
      }
      readView() {
        this.defaultPoseRead = !1, this.pN = null;
        const cB = this.api.queries.directorView() >= mB.pb.BYTES ? this.scratchView() : null;
        null !== cB && (this.defaultFov = (0, Cc.A)(mB.pb.fov(cB, 0)), this.baseFov = (0, Cc.A)(mB.pb.baseFov(cB, 0)), this.aspect = mB.pb.aspect(cB, 0), this.bodyHeading = mB.pb.bodyHeading(cB, 0))
      }
      getViewHeading() {
        return this.viewHeading
      }
      setViewHeading(cB) {
        this.viewHeading = cB
      }
      get localPlayerId() {
        const cB = mB.v.localId(this.api.apiView, 0);
        return cB !== this.localId && (this.localId = cB, this.localName = String(cB)), this.localName
      }
      getEntityPosition(cB) {
        return this.readEntity(cB) ? this.entityFeet : null
      }
      getEntityAimPoint(cB) {
        return this.readEntity(cB) ? this.entityAim : null
      }
      getEntityHeading(cB) {
        const Bc = Xc(cB);
        if (null === Bc) return null;
        const nc = mB.v.localId(this.api.apiView, 0);
        return Bc === nc && nc !== mB.Oc ? this.viewHeading : this.readEntity(cB) ? this.entityHeading : null
      }
      raycastTerrain(cB, Bc, nc) {
        const Vc = this.api.queries.cameraSweep(cB[0], cB[1], cB[2], Bc[0], Bc[1], Bc[2], nc);
        return Vc < nc - 1e-6 ? Vc : null
      }
      getDefaultPose() {
        if (this.defaultPoseRead) return this.defaultPose;
        this.defaultPoseRead = !0;
        const cB = this.defaultPose;
        cB.fov = this.defaultFov;
        const Bc = this.api.queries.directorDefaultPose() >= mB.jb.BYTES ? this.scratchView() : null;
        if (null === Bc) return cB;
        for (let nc = 0; nc < 3; nc++) cB.position[nc] = mB.jb.eye(Bc, 0, nc);
        return cB.heading = mB.jb.heading(Bc, 0), cB.pitch = mB.jb.pitch(Bc, 0), cB
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
      readEntity(cB) {
        const Bc = Xc(cB);
        if (null === Bc) return !1;
        if (Bc === this.pN) return this.entityLive;
        this.pN = Bc;
        const nc = this.api.queries.directorEntity(Bc) >= mB.lb.BYTES ? this.scratchView() : null;
        if (this.entityLive = null !== nc, null === nc) return !1;
        for (let Vc = 0; Vc < 3; Vc++) this.entityFeet[Vc] = mB.lb.feet(nc, 0, Vc), this.entityAim[Vc] = this.entityFeet[Vc];
        return this.entityAim[1] += mB.lb.eyeHeight(nc, 0), this.entityHeading = mB.lb.heading(nc, 0), !0
      }
      scratchView() {
        const cB = this.api.scratch(),
          Bc = this.api.memory().buffer,
          nc = this.scratch;
        return null !== nc && nc.buffer === Bc && nc.byteOffset === cB ? nc : (this.scratch = this.api.memoryData(cB, kB, 8, "the director's record"), this.scratch)
      }
    }
    const Fc = {
        mode: "default"
      },
      Jc = {
        show: () => {},
        clear: () => {}
      };

    function jB() {
      return "undefined" !== typeof document && "hidden" === document.visibilityState
    }
    class Rc {
      constructor(cB) {
        this.options = cB, this.rn = void 0, this.director = void 0, this.latest = Fc, this.pending = void 0, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.look = {
          QBc: 0,
          CBc: 0
        }, this.pointedAt = {
          heading: 0,
          pitch: 0
        }, this.engaged = !1, this.calledThisFrame = !1, this.holding = !1, this.lastCallMs = 0, this.answeredPose = !1, this.Sr = new Int32Array(3 * mB.Dd), this.centresLen = 0, this.centresUnsent = !1, this.next = new Int32Array(3 * mB.Dd), this.rn = new Hc(cB.api), this.director = new Nc.d(this.rn)
      }
      settingsChanged(cB) {
        let Bc = Fc;
        if (cB.length > 0) try {
          Bc = (0, Ec.c)(cB)
        } catch {}
        this.latest = Bc, this.pending = Bc
      }
      call(cB, Bc, nc, Vc, Ic, rB) {
        var uc, sc;
        let Mc;
        this.holding = !1;
        try {
          Mc = this.answer(cB, Bc, nc, Vc, Ic, rB)
        } catch (Tc) {
          var Pc, qB;
          throw this.answeredPose = !1, null === (Pc = (qB = this.options).showFacing) || void 0 === Pc || Pc.call(qB, null), Tc
        }
        const Oc = this.answeredPose && 0 === (Vc & mB.ob.Held);
        return this.answeredPose = Mc !== mB.ib.None, this.holding = this.answeredPose && !Oc, null === (uc = (sc = this.options).showFacing) || void 0 === uc || uc.call(sc, this.holding ? this.facing : null), Mc
      }
      holdsView() {
        return this.holding
      }
      answer(cB, Bc, nc, Vc, Ic, rB) {
        this.calledThisFrame = !0, this.engaged = !0, this.lastCallMs = this.now();
        const {
          rn: uc
        } = this;
        uc.readView();
        if (0 !== (Vc & mB.ob.Held) || uc.setViewHeading((0, vB.v)(uc.bodyHeading)), void 0 !== this.pending) {
          const cB = this.pending;
          this.pending = void 0, this.director.setSettings(cB), this.syncShownSettings()
        }
        this.readLook((0, oc.e)(Bc), (0, oc.e)(nc), Vc, (0, oc.e)(Ic), (0, oc.e)(rB));
        const sc = this.director.update(cB / 1e3, this.look);
        if (this.syncShownSettings(), this.writeCentres(this.director.getLoadingPositions()), this.hidden() || this.screen().show(this.director.getScreenFade(), this.director.getSettings()), !sc) return mB.ib.None;
        const [Mc, Pc, qB] = sc.position;
        if (0 === this.options.api.queries.directorPose(Mc, Pc, qB, (0, vB.v)(sc.heading), (0, vB.f)(sc.pitch), (0, Cc.m)(sc.fov))) return mB.ib.None;
        if ("default" === this.director.getSettings().mode) return mB.ib.Pose;
        switch (this.facing) {
          case "camera":
            return mB.ib.FaceCamera;
          case "cursor":
            return mB.ib.FaceCursor;
          default:
            return mB.ib.FaceMovement
        }
      }
      afterFrame(cB) {
        cB ? (this.calledThisFrame || (this.holding = !1, this.engaged && this.idle()), this.calledThisFrame = !1) : this.centresLen > 0 && this.hidden() && this.now() - this.lastCallMs > 1e3 && this.setCentres(0), this.centresUnsent && this.sendCentres()
      }
      reset() {
        this.latest = Fc, this.idle()
      }
      restart() {
        const cB = this.holding;
        this.idle(), this.holding = cB
      }
      idle() {
        var cB, Bc;
        this.engaged && this.screen().clear(), this.engaged = !1, this.holding = !1, this.director = new Nc.d(this.rn), this.pending = this.latest, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.answeredPose = !1, null === (cB = (Bc = this.options).showFacing) || void 0 === cB || cB.call(Bc, null), this.setCentres(0)
      }
      syncShownSettings() {
        const cB = this.director.getSettings();
        if (cB === this.shownSettings) return;
        this.shownSettings = cB;
        const Bc = (0, Dc.d)(cB);
        this.facing = Bc.facing, this.mouseTurns = Bc.mouseTurns
      }
      readLook(cB, Bc, nc, Vc, Ic) {
        const rB = this.look,
          uc = 0 !== (nc & mB.ob.LookPointed);
        if (null === this.mouseTurns && !uc) return rB.QBc = 0, rB.CBc = 0, void(rB.pointedAt = void 0);
        let sc;
        uc && (this.pointedAt.heading = Vc, this.pointedAt.pitch = Ic, sc = this.pointedAt);
        const {
          rn: Mc
        } = this;
        Mc.setViewHeading((0, Dc.b)(Mc.getViewHeading(), cB, Bc, sc, "look" === this.mouseTurns, rB))
      }
      writeCentres(cB) {
        const Bc = this.next,
          nc = Math.min(cB.length, mB.Dd);
        for (let Vc = 0; Vc < nc; Vc++)
          for (let nc = 0; nc < 3; nc++) Bc[3 * Vc + nc] = Math.floor(cB[Vc][nc] / mB.A);
        this.setCentres(nc)
      }
      setCentres(cB) {
        const {
          Sr: Bc,
          next: nc
        } = this;
        let Vc = cB === this.centresLen;
        for (let Ic = 0; Vc && Ic < 3 * cB; Ic++) Vc = Bc[Ic] === nc[Ic];
        Vc || (Bc.fill(0), Bc.set(nc.subarray(0, 3 * cB)), this.centresLen = cB, this.centresUnsent = !0, this.sendCentres())
      }
      sendCentres() {
        const cB = this.options.cmd();
        null !== cB && (0, mB.vf)(cB, 0, this.Sr, this.centresLen) && (this.centresUnsent = !1)
      }
      screen() {
        var cB, Bc, nc;
        return null !== (cB = null === (Bc = (nc = this.options).screen) || void 0 === Bc ? void 0 : Bc.call(nc)) && void 0 !== cB ? cB : Jc
      }
      hidden() {
        var cB;
        return (null !== (cB = this.options.isPageHidden) && void 0 !== cB ? cB : jB)()
      }
      now() {
        var cB, Bc, nc;
        return null !== (cB = null === (Bc = (nc = this.options).now) || void 0 === Bc ? void 0 : Bc.call(nc)) && void 0 !== cB ? cB : performance.now()
      }
    }
    const iB = mB.A * mB.A * mB.A,
      Kc = Math.log2(mB.A),
      xB = mB.A - 1,
      dc = mB.M.BYTES / 4,
      Ac = new Uint16Array(iB);

    function Gc(cB, Bc, nc) {
      return cB * mB.A * mB.A + Bc * mB.A + nc
    }
    class cn {
      constructor(cB) {
        this.chunk = cB
      }
      get data() {
        return this.chunk.gameVoxels()
      }
      index(cB, Bc, nc) {
        return Gc(cB, Bc, nc)
      }
    }
    class BB {
      constructor() {
        this.ids = new Map, this.cleared = new Set, this.layers = 0, this.patched = null, this.from = null
      }
    }
    class nB {
      constructor(cB, Bc, nc, Vc) {
        this.table = cB, this.slot = Bc, this.generation = nc, this.epoch = Vc, this.NB = new cn(this), this.writes = null, this.writeCount = 0, this.shownVersion = 0, this.shownCore = -1, this.shownWrites = -1, this.data = Ac, this.dataPtr = 0, this.dataBuffer = null, this.dataStamp = -1, this.version = 0, this.layers = null, this.layersVersion = -1, this.layersPtr = -1, this.staleLayers = 0
      }
      get TI() {
        return this.voxelData(), this.version === this.shownCore && this.writeCount === this.shownWrites || (this.shownCore = this.version, this.shownWrites = this.writeCount, this.shownVersion = this.table.nextVersion()), this.shownVersion
      }
      get onc() {
        const cB = this.gameVoxels(),
          Bc = this.layers ??= new Uint16Array(mB.A);
        this.layersVersion === this.version && this.layersPtr === this.dataPtr || (this.layersVersion = this.version, this.layersPtr = this.dataPtr, this.staleLayers = -1);
        for (let nc = 0; 0 !== this.staleLayers; nc++) {
          const Vc = 1 << nc;
          0 !== (this.staleLayers & Vc) && (this.staleLayers &= ~Vc, Bc[nc] = VB(cB, nc))
        }
        return Bc
      }
      voxelData() {
        return this.dataStamp === this.table.stamp && 0 !== this.data.length ? this.data : this.reread()
      }
      gameVoxels() {
        const cB = this.voxelData(),
          Bc = this.writes;
        if (null === Bc || 0 === Bc.ids.size) return cB;
        if (Bc.from !== cB) {
          const nc = Bc.patched ??= new Uint16Array(iB);
          nc.set(cB);
          for (const [cB, Vc] of Bc.ids) nc[cB] = Vc;
          Bc.from = cB
        }
        return Bc.patched
      }
      written(cB) {
        var Bc;
        return null === (Bc = this.writes) || void 0 === Bc ? void 0 : Bc.ids.get(cB)
      }
      hasWrites() {
        return null !== this.writes && 0 !== this.writes.ids.size
      }
      write(cB, Bc, nc) {
        const Vc = this.writes ??= new BB;
        Vc.ids.set(cB, Bc), nc && Vc.cleared.add(cB), null !== Vc.from && (Vc.patched[cB] = Bc);
        const Ic = 1 << (cB >> Kc & xB);
        Vc.layers |= Ic, this.staleLayers |= Ic, this.writeCount++
      }
      clearWrites() {
        const cB = this.writes;
        null !== cB && (this.staleLayers |= cB.layers, cB.ids.clear(), cB.cleared.clear(), cB.layers = 0, cB.from = null)
      }
      dataCleared(cB) {
        var Bc;
        return !0 === (null === (Bc = this.writes) || void 0 === Bc ? void 0 : Bc.cleared.has(cB))
      }
      reread() {
        this.dataStamp = this.table.stamp;
        const cB = this.table.slotWords(),
          Bc = this.slot * dc;
        if (this.epoch !== this.table.epoch || Bc + dc > cB.length || 0 === cB[Bc + 3] || cB[Bc + 2] !== this.generation) return this.data = Ac, this.dataPtr = 0, Ac;
        this.version = cB[Bc + 1];
        const nc = cB[Bc + 0],
          Vc = cB.buffer;
        return nc === this.dataPtr && Vc === this.dataBuffer || (this.dataPtr = nc, this.dataBuffer = Vc, this.data = this.table.voxelsAt(Vc, nc)), this.data
      }
    }

    function VB(cB, Bc) {
      const nc = cB[Bc * mB.A];
      for (let Vc = 0; Vc < mB.A; Vc++) {
        const Ic = Gc(Vc, Bc, 0);
        for (let Bc = 0; Bc < mB.A; Bc++)
          if (cB[Ic + Bc] !== nc) return 65535
      }
      return nc
    }
    const IB = new Uint32Array(0),
      rn = 1 << 20,
      uB = 1 << 21;

    function sB(cB, Bc, nc) {
      const Vc = cB + rn,
        Ic = Bc + 1024,
        rB = nc + rn;
      return Vc < 0 || Vc >= uB || rB < 0 || rB >= uB || Ic < 0 || Ic >= 2048 ? -1 : 2048 * (Vc * uB + rB) + Ic
    }

    function MB(cB, Bc, nc) {
      return Gc(cB & xB, Bc & xB, nc & xB)
    }
    class PB {
      constructor(cB, Bc) {
        this.memory = cB, this.apiView = Bc, this.chunks = new Map, this.written = [], this.lastKey = -1, this.lastChunk = void 0, this.slotsPtr = 0, this.slotsLen = 0, this.slotsBuffer = null, this.slots = IB, this.walkPtr = 0, this.walkLen = 0, this.walkBuffer = null, this.walk = IB, this.epoch = 0, this.stamp = 0, this.versions = 0, this.corruption = null
      }
      apply(cB, Bc, nc, Vc, Ic, rB) {
        if (this.lastKey = -1, this.lastChunk = void 0, this.stamp++, rB === mB.N.ResetAll) return this.chunks.clear(), void this.epoch++;
        if (rB !== mB.N.Stored && rB !== mB.N.Unloaded) throw new fc.d(`ChunkSlot flags ${rB}`);
        const uc = sB(cB, Bc, nc);
        if (uc < 0) return;
        if (rB === mB.N.Unloaded) return void this.chunks.delete(uc);
        const sc = this.chunks.get(uc);
        (null === sc || void 0 === sc ? void 0 : sc.slot) === Vc && sc.generation === Ic || this.chunks.set(uc, new nB(this, Vc, Ic, this.epoch))
      }
      touch() {
        this.stamp++, this.clearOverlay(), this.viewWalkThrough()
      }
      refresh() {
        if (this.stamp++, this.corruption) throw this.corruption;
        const cB = this.apiView(),
          Bc = mB.v.chunkSlotsPtr(cB, 0),
          nc = mB.v.chunkSlotsLen(cB, 0);
        Bc === this.slotsPtr && nc === this.slotsLen || (this.slotsPtr = Bc, this.slotsLen = nc, this.slotsBuffer = null, this.slotWords()), this.viewWalkThrough(), this.clearOverlay()
      }
      viewWalkThrough() {
        const cB = this.apiView(),
          Bc = mB.v.walkThroughPtr(cB, 0),
          nc = mB.v.walkThroughLen(cB, 0);
        Bc === this.walkPtr && nc === this.walkLen || (this.walkPtr = Bc, this.walkLen = nc, this.walkBuffer = null, this.walkWords())
      }
      clearOverlay() {
        for (const cB of this.written) cB.clearWrites();
        this.written.length = 0
      }
      nextVersion() {
        return ++this.versions
      }
      slotWords() {
        const cB = this.memory().buffer;
        var Bc;
        cB !== this.slotsBuffer && (this.slotsBuffer = cB, this.slots = null !== (Bc = (0, fc.v)(Uint32Array, cB, this.slotsPtr, this.slotsLen * dc, "the chunk directory")) && void 0 !== Bc ? Bc : IB);
        return this.slots
      }
      voxelsAt(cB, Bc) {
        try {
          var nc;
          return null !== (nc = (0, fc.v)(Uint16Array, cB, Bc, iB, "a chunk's voxels")) && void 0 !== nc ? nc : Ac
        } catch (Vc) {
          if (!(Vc instanceof fc.d)) throw Vc;
          return this.corruption ??= Vc, Ac
        }
      }
      chunk(cB, Bc, nc) {
        var Vc;
        return null !== (Vc = this.chunks.get(sB(cB, Bc, nc))) && void 0 !== Vc ? Vc : null
      }
      isLoaded(cB, Bc, nc) {
        return void 0 !== this.chunkAt(Math.floor(cB), Math.floor(Bc), Math.floor(nc))
      }
      Zr(cB, Bc, nc) {
        var Vc;
        const Ic = Math.floor(cB),
          rB = Math.floor(Bc),
          uc = Math.floor(nc),
          sc = this.chunkAt(Ic, rB, uc);
        if (!sc) return 0;
        const Mc = MB(Ic, rB, uc);
        return null !== (Vc = sc.written(Mc)) && void 0 !== Vc ? Vc : sc.voxelData()[Mc]
      }
      setOverlay(cB, Bc, nc, Vc) {
        let Ic = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const rB = this.chunkAt(cB, Bc, nc);
        return !!rB && (rB.hasWrites() || this.written.push(rB), rB.write(MB(cB, Bc, nc), Vc, Ic), !0)
      }
      version(cB, Bc, nc) {
        var Vc, Ic;
        return null !== (Vc = null === (Ic = this.chunks.get(sB(cB, Bc, nc))) || void 0 === Ic ? void 0 : Ic.TI) && void 0 !== Vc ? Vc : null
      }
      scan(cB, Bc, nc, Vc, Ic, rB, uc, sc) {
        const Mc = mB.A;
        let Pc = 0;
        for (let qB = Math.floor(Bc / Mc); qB * Mc < Ic; qB++) {
          const Oc = qB * Mc,
            Tc = Math.min(Ic - Oc, Mc);
          for (let Ic = Math.floor(cB / Mc); Ic * Mc < Vc; Ic++) {
            const fc = Ic * Mc,
              mB = Math.min(Vc - fc, Mc);
            for (let Vc = Math.floor(nc / Mc); Vc * Mc < rB; Vc++) {
              const ec = this.chunks.get(sB(Ic, qB, Vc));
              if (!ec) continue;
              const tB = Vc * Mc,
                Sc = Math.max(nc - tB, 0),
                yB = Math.min(rB - tB, Mc),
                zB = ec.onc,
                pc = ec.gameVoxels();
              for (let nc = Math.max(Bc - Oc, 0); nc < Tc; nc++) {
                const Bc = zB[nc];
                if (65535 === Bc || 0 !== uc[Bc]) {
                  Pc++;
                  for (let Bc = Math.max(cB - fc, 0); Bc < mB; Bc++) {
                    const cB = Gc(Bc, nc, 0);
                    for (let Vc = Sc; Vc < yB; Vc++) {
                      const Ic = pc[cB + Vc];
                      0 !== uc[Ic] && sc.push(fc + Bc, Oc + nc, tB + Vc, Ic)
                    }
                  }
                }
              }
            }
          }
        }
        return Pc
      }
      dataCleared(cB, Bc, nc) {
        var Vc;
        const Ic = Math.floor(cB),
          rB = Math.floor(Bc),
          uc = Math.floor(nc);
        return !0 === (null === (Vc = this.chunkAt(Ic, rB, uc)) || void 0 === Vc ? void 0 : Vc.dataCleared(MB(Ic, rB, uc)))
      }
      isWalkThrough(cB) {
        if (!Number.isInteger(cB) || cB < 0 || cB > 65535) return !1;
        const Bc = this.walkWords(),
          nc = cB >>> 5;
        return nc < Bc.length && 1 === (Bc[nc] >>> (31 & cB) & 1)
      }
      walkWords() {
        const cB = this.memory().buffer;
        var Bc;
        cB !== this.walkBuffer && (this.walkBuffer = cB, this.walk = null !== (Bc = (0, fc.v)(Uint32Array, cB, this.walkPtr, this.walkLen, "the walk-through bits")) && void 0 !== Bc ? Bc : IB);
        return this.walk
      }
      chunkAt(cB, Bc, nc) {
        if ((0 | cB) !== cB || (0 | Bc) !== Bc || (0 | nc) !== nc) return;
        const Vc = sB(cB >> Kc, Bc >> Kc, nc >> Kc);
        return Vc !== this.lastKey && (this.lastKey = Vc, this.lastChunk = this.chunks.get(Vc)), this.lastChunk
      }
    }
    var qn = nc(37045),
      OB = nc(36361),
      TB = nc(35391),
      fB = nc(35267),
      mn = nc(7787),
      eB = nc(37576),
      tn = nc(174);
    const SB = ["ambient", "crowd", "customGame_horror", "dig", "fishing", "gameStart", "gunMisc", "gunPistol", "gunRifle", "gunSemiAutomatic", "gunShotgun", "gunSubmachineGun", "mob", "note", "random", "rpg", "step", "survivalFactory"],
      yn = [
        ["ZombieGrunt1", 12],
        ["ZombieGrunt2", 12],
        ["ZombieGrunt3", 12],
        ["ZombieHurt1", 12],
        ["ZombieHurt2", 12],
        ["ZombieHurt3", 12],
        ["ZombieHurt4", 12],
        ["bass", 13],
        ["bassattack", 13],
        ["bd", 13],
        ["bearRoar1", 12],
        ["bearRoar2", 12],
        ["bearRoar3", 12],
        ["bearRoar4", 12],
        ["bearRoar5", 12],
        ["beep", 14],
        ["bigDrumSwish1", 13],
        ["bigDrumSwish2", 13],
        ["bigDrumSwish3", 13],
        ["bow", 14],
        ["bucketEmpty1", 14],
        ["bucketEmpty2", 14],
        ["bucketEmpty3", 14],
        ["bucketFill1", 14],
        ["bucketFill2", 14],
        ["bucketFill3", 14],
        ["bullet_shell_bounce_general_07", 6],
        ["bullet_shell_bounce_general_08", 6],
        ["burp", 14],
        ["cannonFire1", 14],
        ["cannonFire2", 14],
        ["cannonFire3", 14],
        ["cashRegister", 14],
        ["catHiss1", 12],
        ["catHiss2", 12],
        ["catHiss3", 12],
        ["catHiss4", 12],
        ["catHurt1", 12],
        ["catHurt2", 12],
        ["catHurt3", 12],
        ["catMeow1", 12],
        ["catMeow2", 12],
        ["catMeow3", 12],
        ["catMeow4", 12],
        ["catMeow5", 12],
        ["caughtFish", 4],
        ["chestClose", 14],
        ["chestOpen", 14],
        ["cloth1", 3],
        ["cloth2", 3],
        ["cloth3", 3],
        ["cloth4", 3],
        ["cowHurt1", 12],
        ["cowMoo1", 12],
        ["cowMoo2", 12],
        ["cowMoo3", 12],
        ["croneAttack1", 12],
        ["croneHurt1", 12],
        ["croneIdle1", 12],
        ["crowdAmbience", 1],
        ["crowdCheer", 1],
        ["cryptWhoosh", 2],
        ["deerGrunt1", 12],
        ["deerHurt1", 12],
        ["dogBark1", 12],
        ["dogBark2", 12],
        ["dogBark3", 12],
        ["dogGrowl1", 12],
        ["dogGrowl2", 12],
        ["dogGrowl3", 12],
        ["dogHurt1", 12],
        ["dogHurt2", 12],
        ["doorClose", 14],
        ["doorClose2", 14],
        ["doorKnock", 2],
        ["doorOpen-bloxd1", 14],
        ["doorOpen-bloxd2", 14],
        ["drink", 14],
        ["drumSwish1", 13],
        ["drumSwish2", 13],
        ["eat1", 14],
        ["equip_leather1", 14],
        ["exp_collect", 14],
        ["exp_levelup", 14],
        ["fallsmall", 14],
        ["fennecYip1", 12],
        ["fennecYip2", 12],
        ["fennecYip3", 12],
        ["fireBurn", 14],
        ["firecracker1", 14],
        ["firecracker2", 14],
        ["firecracker3", 14],
        ["firecracker4", 14],
        ["futureStrangePulse", 2],
        ["game_start_countdown_01", 5],
        ["game_start_countdown_02", 5],
        ["game_start_countdown_03", 5],
        ["game_start_countdown_final", 5],
        ["glass1", 3],
        ["glass2", 3],
        ["glass3", 3],
        ["golemGrunt1", 12],
        ["golemGrunt2", 12],
        ["gorillaIdle1", 12],
        ["gorillaIdle2", 12],
        ["gorillaIdle3", 12],
        ["gorillaIdle4", 12],
        ["gorillaRoar1", 12],
        ["grass1", 3],
        ["grass2", 3],
        ["grass3", 3],
        ["grass4", 3],
        ["gravel1", 3],
        ["gravel2", 3],
        ["gravel3", 3],
        ["gravel4", 3],
        ["harp_pling", 13],
        ["hat", 13],
        ["hauntedHorrorImpact", 2],
        ["headshot_04", 6],
        ["headshot_06", 6],
        ["headshot_08", 6],
        ["headshot_11", 6],
        ["hit1", 16],
        ["hit2", 16],
        ["hit3", 16],
        ["hoeTill1", 14],
        ["hoeTill2", 14],
        ["hoeTill3", 14],
        ["hoeTill4", 14],
        ["horrorAccent1", 2],
        ["horrorFright", 2],
        ["horrorMaleDrone", 2],
        ["horseHurt1", 12],
        ["horseHurt2", 12],
        ["horseIdle1", 12],
        ["horseIdle2", 12],
        ["horseIdle3", 12],
        ["intensiveRainLoop", 2],
        ["knightGrunt1", 12],
        ["knightGrunt2", 12],
        ["knightGrunt3", 12],
        ["laugh1", 14],
        ["laugh2", 14],
        ["laugh3", 14],
        ["lavaFlow", 0],
        ["levelup", 13],
        ["lowDrum1", 13],
        ["lowDrum2", 13],
        ["lowDrum3", 13],
        ["magicAccent1", 14],
        ["magicAccent2", 14],
        ["magicAccent3", 14],
        ["magicAccent4", 14],
        ["metalDoorKnock", 2],
        ["ominousBellHit", 2],
        ["pickUp", 3],
        ["pigHurt1", 12],
        ["pigHurt2", 12],
        ["pigHurt3", 12],
        ["pigOink1", 12],
        ["pigOink2", 12],
        ["pigOink3", 12],
        ["pigOink4", 12],
        ["pigOink5", 12],
        ["pistol_cock_01", 7],
        ["pistol_cock_02", 7],
        ["pistol_cock_03", 7],
        ["pistol_cock_06", 7],
        ["pistol_magazine_load_01", 7],
        ["pistol_magazine_load_02", 7],
        ["pistol_magazine_load_03", 7],
        ["pistol_magazine_unload_01", 7],
        ["pistol_magazine_unload_02", 7],
        ["pistol_magazine_unload_03", 7],
        ["pistol_shot_01", 7],
        ["pistol_shot_02", 7],
        ["pistol_shot_03", 7],
        ["pistol_shot_04", 7],
        ["pistol_shot_05", 7],
        ["pulseFromTheDark", 2],
        ["reaverAttack1", 12],
        ["reaverAttack2", 12],
        ["reaverAttack3", 12],
        ["reaverGrunt1", 12],
        ["reaverGrunt2", 12],
        ["reaverGrunt3", 12],
        ["reel", 4],
        ["refereeWhistle", 1],
        ["rifle_cock_01", 8],
        ["rifle_cock_02", 8],
        ["rifle_magazine_load_01", 8],
        ["rifle_magazine_load_02", 8],
        ["rifle_magazine_load_03", 8],
        ["rifle_magazine_unload_01", 8],
        ["rifle_magazine_unload_02", 8],
        ["rifle_magazine_unload_04", 8],
        ["rifle_shot_01", 8],
        ["rifle_shot_02", 8],
        ["rifle_shot_03", 8],
        ["rifle_shot_04", 8],
        ["rocketEngineLoop", 17],
        ["rpgBeltCloth1", 15],
        ["rpgBeltCloth2", 15],
        ["rpgBeltHandle1", 15],
        ["rpgBeltHandle2", 15],
        ["rpgBookClose", 15],
        ["rpgBookFlip1", 15],
        ["rpgBookFlip2", 15],
        ["rpgBookFlip3", 15],
        ["rpgBookOpen", 15],
        ["rpgBookPlace1", 15],
        ["rpgBookPlace2", 15],
        ["rpgBookPlace3", 15],
        ["rpgChop", 15],
        ["rpgCloth1", 15],
        ["rpgCloth2", 15],
        ["rpgCloth3", 15],
        ["rpgCloth4", 15],
        ["rpgCreak1", 15],
        ["rpgCreak2", 15],
        ["rpgCreak3", 15],
        ["rpgDoorClose1", 15],
        ["rpgDoorClose2", 15],
        ["rpgDoorClose3", 15],
        ["rpgDoorClose4", 15],
        ["rpgDoorOpen1", 15],
        ["rpgDoorOpen2", 15],
        ["rpgDrawKnife1", 15],
        ["rpgDrawKnife2", 15],
        ["rpgDrawKnife3", 15],
        ["rpgDropLeather", 15],
        ["rpgFootstep00", 15],
        ["rpgFootstep01", 15],
        ["rpgFootstep02", 15],
        ["rpgFootstep03", 15],
        ["rpgFootstep04", 15],
        ["rpgFootstep05", 15],
        ["rpgFootstep06", 15],
        ["rpgFootstep07", 15],
        ["rpgFootstep08", 15],
        ["rpgFootstep09", 15],
        ["rpgHandleCoins1", 15],
        ["rpgHandleCoins2", 15],
        ["rpgHandleSmallLeather1", 15],
        ["rpgHandleSmallLeather2", 15],
        ["rpgKnifeSlice1", 15],
        ["rpgKnifeSlice2", 15],
        ["rpgMetalClick", 15],
        ["rpgMetalLatch", 15],
        ["rpgMetalPot1", 15],
        ["rpgMetalPot2", 15],
        ["rpgMetalPot3", 15],
        ["sand1", 3],
        ["sand2", 3],
        ["sand3", 3],
        ["sand4", 3],
        ["semiAuto_cock_01", 9],
        ["semiAuto_cock_02", 9],
        ["semiAuto_cock_03", 9],
        ["semiAuto_cock_04", 9],
        ["semiAuto_cock_05", 9],
        ["semiAuto_first_shot_01", 9],
        ["semiAuto_magazine_load_01", 9],
        ["semiAuto_magazine_load_02", 9],
        ["semiAuto_magazine_load_03", 9],
        ["semiAuto_magazine_load_04", 9],
        ["semiAuto_magazine_load_05", 9],
        ["semiAuto_magazine_unload_01", 9],
        ["semiAuto_magazine_unload_02", 9],
        ["semiAuto_magazine_unload_03", 9],
        ["semiAuto_magazine_unload_04", 9],
        ["semiAuto_shot_01", 9],
        ["semiAuto_shot_02", 9],
        ["semiAuto_shot_03", 9],
        ["semiAuto_shot_04", 9],
        ["semiAuto_shot_05", 9],
        ["semiAuto_shot_06", 9],
        ["semiAuto_shot_07", 9],
        ["semiAuto_shot_08", 9],
        ["semiAuto_tail_only_shot_01", 9],
        ["sheepBaa1", 12],
        ["sheepBaa2", 12],
        ["sheepBaa3", 12],
        ["sheepBaa4", 12],
        ["sheepHurt1", 12],
        ["shotgun_cock_01", 10],
        ["shotgun_cock_02", 10],
        ["shotgun_cock_03", 10],
        ["shotgun_cock_04", 10],
        ["shotgun_cock_05", 10],
        ["shotgun_load_bullet_01", 10],
        ["shotgun_load_bullet_02", 10],
        ["shotgun_load_bullet_03", 10],
        ["shotgun_load_bullet_04", 10],
        ["shotgun_load_bullet_05", 10],
        ["shotgun_load_bullet_06", 10],
        ["shotgun_load_bullet_07", 10],
        ["shotgun_load_bullet_08", 10],
        ["shotgun_shot_01", 10],
        ["shotgun_shot_02", 10],
        ["shotgun_shot_03", 10],
        ["shotgun_shot_04", 10],
        ["skeletonRattle1", 12],
        ["skeletonRattle2", 12],
        ["skeletonRattle3", 12],
        ["skeletonRattle4", 12],
        ["snare", 13],
        ["snow1", 3],
        ["snow2", 3],
        ["snow3", 3],
        ["snow4", 3],
        ["sonarBeep", 13],
        ["splash1", 14],
        ["stagGrunt1", 12],
        ["stagHurt1", 12],
        ["stalkerAttack1", 12],
        ["stalkerIdle1", 12],
        ["step_cloth1", 16],
        ["step_cloth2", 16],
        ["step_cloth3", 16],
        ["step_cloth4", 16],
        ["step_grass1", 16],
        ["step_grass2", 16],
        ["step_grass3", 16],
        ["step_grass4", 16],
        ["step_grass5", 16],
        ["step_gravel1", 16],
        ["step_gravel2", 16],
        ["step_gravel3", 16],
        ["step_gravel4", 16],
        ["step_sand2", 16],
        ["step_sand3", 16],
        ["step_sand4", 16],
        ["step_sand5", 16],
        ["step_snow1", 16],
        ["step_snow2", 16],
        ["step_snow3", 16],
        ["step_snow4", 16],
        ["step_stone1", 16],
        ["step_stone2", 16],
        ["step_stone3", 16],
        ["step_stone4", 16],
        ["step_stone5", 16],
        ["step_stone6", 16],
        ["step_wood1", 16],
        ["step_wood2", 16],
        ["step_wood3", 16],
        ["step_wood4", 16],
        ["step_wood5", 16],
        ["step_wood6", 16],
        ["stone1", 3],
        ["stone2", 3],
        ["stone3", 3],
        ["stone4", 3],
        ["submachine_cock_01", 11],
        ["submachine_cock_02", 11],
        ["submachine_cock_03", 11],
        ["submachine_cock_04", 11],
        ["submachine_first_shot_01", 11],
        ["submachine_magazine_load_01", 11],
        ["submachine_magazine_load_02", 11],
        ["submachine_magazine_load_03", 11],
        ["submachine_magazine_load_04", 11],
        ["submachine_magazine_unload_01", 11],
        ["submachine_magazine_unload_02", 11],
        ["submachine_magazine_unload_03", 11],
        ["submachine_shot_01", 11],
        ["submachine_shot_02", 11],
        ["submachine_shot_03", 11],
        ["submachine_shot_04", 11],
        ["submachine_shot_05", 11],
        ["submachine_shot_06", 11],
        ["submachine_shot_07", 11],
        ["submachine_shot_08", 11],
        ["submachine_shot_09", 11],
        ["submachine_tail_only_shot_01", 11],
        ["successfulBowHit", 14],
        ["suspenseRiser", 2],
        ["sweep6", 16],
        ["thunderRain", 2],
        ["trapdoorOpen", 14],
        ["trumpetFlare", 13],
        ["trumpetNote1", 13],
        ["trumpetNote2", 13],
        ["trumpetNote3", 13],
        ["warperGrunt1", 12],
        ["warperGrunt2", 12],
        ["warperGrunt3", 12],
        ["warperGrunt4", 12],
        ["warperGrunt5", 12],
        ["warperPhase1", 12],
        ["warperPhase2", 12],
        ["wood1", 3],
        ["wood2", 3],
        ["wood3", 3],
        ["wood4", 3],
        ["wraithGrunt1", 12],
        ["wraithGrunt2", 12],
        ["wraithHurt", 12],
        ["zapAccent1", 2],
        ["zapAccent2", 2]
      ],
      zn = yn.map((cB => {
        let [Bc] = cB;
        return Bc
      })),
      pB = Uint8Array.from(yn, (cB => {
        let [, Bc] = cB;
        return Bc
      })),
      hB = {
        semi_automatic: 9,
        submachine: 11,
        rifle: 8,
        pistol: 7,
        shotgun: 10
      },
      an = 6;
    var lB = nc(35383);
    const YB = {
        timeRemaining: () => 1 / 0
      },
      LB = cB => {
        var Bc;
        const nc = globalThis,
          Vc = null !== (Bc = nc.nativeRequestIdleCallback) && void 0 !== Bc ? Bc : nc.requestIdleCallback,
          Ic = nc.cancelIdleCallback;
        if ("function" === typeof Vc && "function" === typeof Ic) {
          const Bc = Vc.call(globalThis, cB);
          return () => {
            Ic.call(globalThis, Bc)
          }
        }
        const rB = setTimeout((() => {
          cB(YB)
        }), 100);
        return () => {
          clearTimeout(rB)
        }
      },
      gn = 2 ** SB.length - 1;
    class UB {
      constructor(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : LB;
        this.sheet = cB, this.onError = Bc, this.idle = nc, this.queue = [], this.asked = 0, this.cancelIdle = null, this.gen = 0, this.onIdle = cB => {
          this.cancelIdle = null;
          try {
            if (cB.timeRemaining() >= 1) {
              let cB = this.queue.shift();
              for (; void 0 !== cB && !this.load(cB);) cB = this.queue.shift()
            }
          } catch (Bc) {
            this.onError(Bc)
          } finally {
            this.schedule()
          }
        }
      }
      preload(cB) {
        const Bc = cB & gn & ~this.asked;
        if (0 !== Bc) {
          this.asked |= Bc;
          for (let cB = 0; cB < SB.length; cB++) Bc & 1 << cB && this.queue.push(cB);
          this.schedule()
        }
      }
      cancel() {
        var cB;
        this.queue.length = 0, this.asked = 0, this.gen++, null === (cB = this.cancelIdle) || void 0 === cB || cB.call(this), this.cancelIdle = null
      }
      schedule() {
        null === this.cancelIdle && this.queue.length > 0 && (this.cancelIdle = this.idle(this.onIdle))
      }
      load(cB) {
        const Bc = this.sheet(cB, !1),
          nc = this.sheet(cB, !0),
          [Vc, Ic] = "unloaded" === Bc.state() && "unloaded" !== nc.state() ? [nc, Bc] : [Bc, nc],
          rB = this.gen,
          uc = () => {
            try {
              rB === this.gen && "unloaded" === Ic.state() && Ic.load()
            } catch (cB) {
              this.onError(cB)
            }
          },
          sc = Vc.state();
        return "unloaded" === sc ? (Vc.once("load", uc), Vc.load(), !0) : "unloaded" === Ic.state() && ("loading" === sc ? (Vc.once("load", uc), !1) : (Ic.load(), !0))
      }
    }
    var bn = nc(38883);
    const ZB = {
        coneInnerAngle: 360,
        coneOuterAngle: 360,
        coneOuterGain: 0,
        distanceModel: "inverse",
        maxDistance: 1e3,
        panningModel: "HRTF",
        rolloffFactor: 1
      },
      QB = tn.e.wY * tn.e.playerEyeToHeightRatio,
      CB = [0, 0, -1, 0, 1, 0],
      vn = SB.indexOf("note");

    function DB(cB) {
      return cB >= 0 ? Math.min(1, cB) : 0
    }

    function NB(cB) {
      var Bc;
      let nc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.random;
      const Vc = function(cB) {
        let Bc = 0,
          nc = zn.length;
        for (; Bc < nc;) {
          const Vc = Bc + nc >>> 1;
          zn[Vc] < cB ? Bc = Vc + 1 : nc = Vc
        }
        return Bc
      }(cB);
      if ("" === cB || null === (Bc = zn[Vc]) || void 0 === Bc || !Bc.startsWith(cB)) return -1;
      if (zn[Vc] === cB) return Vc;
      let Ic = Vc + 1;
      for (; Ic < zn.length && zn[Ic].startsWith(cB);) Ic++;
      return Vc + Math.floor(nc() * (Ic - Vc))
    }
    class EB {
      constructor(cB, Bc, nc, Vc, Ic) {
        this.group = cB, this.loudness = Bc, this.startMs = nc, this.howl = Vc, this.host = Ic, this.id = 0, this.direct = !1
      }
      getDurationMs() {
        const cB = this.host.alive(this.id);
        return cB ? 1e3 * this.howl.duration(this.id) / cB.rate : 0
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
    class oB {
      constructor(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now(),
          Vc = arguments.length > 3 ? arguments[3] : void 0;
        this.createHowl = cB, this.listener = Bc, this.now = nc, this.errors = 0, this.sheets = new Map, this.live = new Map, this.core = new Map, this.level = 1, this.master = 1, this.pose = new Float64Array(9), this.nextPose = new Float64Array(9), this.posed = !1, this.loader = void 0, this.voices = new lB.e, this.failed = new Set, this.started = new Set, this.voiceHost = {
          alive: cB => this.aliveVoice(cB),
          started: cB => this.started.has(cB),
          drop: cB => {
            var Bc;
            null === (Bc = this.live.get(cB)) || void 0 === Bc || Bc.howl.stop(cB), this.forget(cB)
          }
        }, this.handlers = {
          playSound: (cB, Bc, nc, Vc, Ic, rB, uc, sc, Mc) => {
            if (Vc >= zn.length) return;
            const Pc = 0 !== (Ic & mB.Qd.Loop);
            Ic & mB.Qd.TwoD ? this.start(Vc, !1, uc, rB, sc, Pc) : this.startSpatial(Vc, uc, rB, sc, Pc, cB, Bc, nc, Mc, this.earDistSq(cB, Bc, nc))
          },
          soundPos: (cB, Bc, nc, Vc) => {
            const Ic = this.core.get(Vc);
            var rB;
            void 0 !== Ic && (null === (rB = this.live.get(Ic)) || void 0 === rB || rB.howl.pos(nc, Bc, cB, Ic))
          },
          soundSet: (cB, Bc, nc, Vc) => {
            const Ic = this.core.get(cB),
              rB = void 0 === Ic ? void 0 : this.live.get(Ic);
            void 0 !== Ic && rB && (this.setRel(Ic, Bc), rB.rate = nc, rB.howl.rate(nc, Ic), rB.spatial && rB.howl.pannerAttr({
              refDistance: Vc
            }, Ic))
          },
          soundFade: (cB, Bc, nc, Vc) => {
            const Ic = this.core.get(cB);
            void 0 !== Ic && this.fade(Ic, Bc, nc, 0 !== (Vc & mB.Nd.StopAfter))
          },
          soundStop: cB => {
            const Bc = this.core.get(cB);
            var nc;
            void 0 !== Bc && (null === (nc = this.live.get(Bc)) || void 0 === nc || nc.howl.stop(Bc), this.forget(Bc))
          },
          soundReset: () => {
            this.stopCore()
          }
        }, this.loader = new UB(((cB, Bc) => this.sheet(cB, Bc)), (cB => {
          this.errors++, console.error("Audio preload failed", cB)
        }), Vc)
      }
      prepare() {
        for (let cB = 0; cB < SB.length; cB++) this.sheet(cB, !1), this.sheet(cB, !0)
      }
      preload(cB) {
        this.loader.preload(cB)
      }
      cancelPreload() {
        this.loader.cancel()
      }
      onAudioEvent(cB, Bc, nc, Vc) {
        if (cB < mB.t.PlaySound || cB > mB.t.SoundReset) return !1;
        try {
          return (0, mB.ae)(cB, Bc, nc, Vc, this.handlers)
        } catch (Ic) {
          return this.errors++, console.error("Audio event failed", Ic), !0
        }
      }
      applyListener(cB) {
        const Bc = this.nextPose;
        for (let Vc = 0; Vc < 3; Vc++) Bc[2 - Vc] = mB.w.listener(cB, 0, Vc), Bc[5 - Vc] = mB.w.forward(cB, 0, Vc), Bc[8 - Vc] = mB.w.up(cB, 0, Vc);
        0 === Bc[3] && 0 === Bc[4] && 0 === Bc[5] && Bc.set(this.posed ? this.pose.subarray(3) : CB, 3);
        for (let Vc = 0; Vc < 9; Vc++)
          if (!Number.isFinite(Bc[Vc])) return;
        const nc = this.pose;
        if (this.posed) {
          let cB = !0;
          for (let Vc = 0; Vc < 9 && cB; Vc++) cB = Bc[Vc] === nc[Vc];
          if (cB) return
        }
        this.listener.apply(Bc) && (nc.set(Bc), this.posed = !0)
      }
      playGame(cB, Bc, nc, Vc, Ic, rB, uc) {
        const sc = NB(cB);
        if (sc < 0) return bn.e;
        if (!nc) {
          const {
            howl: cB,
            id: nc
          } = this.start(sc, !1, Bc, 0, 1, uc);
          return this.gameSound(cB, nc, !1)
        }
        const Mc = nc[0],
          Pc = nc[1] + QB,
          qB = nc[2];
        if (!Number.isFinite(Mc) || !Number.isFinite(Pc) || !Number.isFinite(qB)) return bn.e;
        let Oc;
        if (Vc) {
          const cB = Mc - Vc[0],
            Bc = Pc - Vc[1],
            nc = qB - Vc[2];
          if (Oc = cB * cB + Bc * Bc + nc * nc, Oc > Ic * Ic) return bn.e
        } else Oc = this.earDistSq(Mc, Pc, qB);
        const Tc = this.startSpatial(sc, Bc, 0, 1, uc, Mc, Pc, qB, rB, Oc);
        return Tc ? this.gameSound(Tc.howl, Tc.id, !0) : bn.e
      }
      setMaster(cB, Bc) {
        this.level = DB(cB);
        const nc = Bc ? this.level : 0;
        if (nc !== this.master) {
          this.master = nc;
          for (const [cB, Bc] of this.live) Bc.fadeMs = 0, Bc.gain = Bc.rel * this.master, Bc.howl.volume(Bc.gain, cB)
        }
      }
      stopCore() {
        for (const Bc of [...this.core.values()]) {
          var cB;
          null === (cB = this.live.get(Bc)) || void 0 === cB || cB.howl.stop(Bc)
        }
        this.core.clear()
      }
      stopAll() {
        this.cancelPreload();
        for (const [cB, Bc] of [...this.live]) Bc.howl.stop(cB), this.forget(cB);
        this.core.clear()
      }
      gameSound(cB, Bc, nc) {
        const Vc = {
          stop: () => (this.live.has(Bc) && cB.stop(Bc), Vc),
          fade: (cB, nc, Ic) => {
            var rB, uc;
            const sc = this.level > 0 ? nc / this.level : nc > 0 && null !== (rB = null === (uc = this.live.get(Bc)) || void 0 === uc ? void 0 : uc.rel) && void 0 !== rB ? rB : 0;
            return this.fade(Bc, sc, Ic, !1), Vc
          },
          rate: nc => {
            const Ic = this.live.get(Bc);
            return Ic && (Ic.rate = function(cB) {
              return cB > 0 && cB < 1 / 0 ? cB : 1
            }(nc), cB.rate(Ic.rate, Bc)), Vc
          },
          getVolume: () => {
            var cB, nc;
            return (null !== (cB = null === (nc = this.live.get(Bc)) || void 0 === nc ? void 0 : nc.rel) && void 0 !== cB ? cB : 0) * this.level
          },
          getRelativeVolume: () => {
            var cB, nc;
            return null !== (cB = null === (nc = this.live.get(Bc)) || void 0 === nc ? void 0 : nc.rel) && void 0 !== cB ? cB : 0
          },
          setRelativeVolume: cB => (this.setRel(Bc, cB), Vc),
          setPannerAttr: Ic => {
            if (nc && this.live.has(Bc)) {
              const nc = {
                ...ZB,
                refDistance: TB.g
              };
              for (const [cB, Bc] of Object.entries(Ic)) "number" !== typeof Bc && "string" !== typeof Bc || (nc[cB] = Bc);
              cB.pannerAttr({
                coneOuterAngle: nc.coneOuterAngle
              }, Bc), cB.pannerAttr(nc, Bc)
            }
            return Vc
          },
          setPosition: Ic => (nc && this.live.has(Bc) && Number.isFinite(Ic[0] + Ic[1] + Ic[2]) && cB.pos(Ic[2], Ic[1], Ic[0], Bc), Vc)
        };
        return Vc
      }
      startSpatial(cB, Bc, nc, Vc, Ic, rB, uc, sc, Mc, Pc) {
        const qB = this.sheet(pB[cB], !0);
        let Oc = null;
        if (!Ic) {
          if (this.failed.has(qB)) return null;
          const nc = pB[cB] === vn ? null : (0, lB.i)(zn[cB]),
            Vc = (0, lB.g)(DB(Bc), Math.sqrt(Pc), Mc);
          if (Oc = new EB(nc, Vc, this.now(), qB, this.voiceHost), !this.voices.admit(Oc)) return null
        }
        const Tc = this.start(cB, !0, Bc, nc, Vc, Ic);
        return Oc && (Oc.id = Tc.id, Oc.direct = "loaded" === qB.state() && !qB._playLock), qB.pannerAttr({
          coneOuterAngle: 360
        }, Tc.id), qB.pannerAttr({
          ...ZB,
          refDistance: Mc
        }, Tc.id), qB.pos(sc, uc, rB, Tc.id), Tc
      }
      aliveVoice(cB) {
        const Bc = this.live.get(cB);
        if (!Bc) return;
        const nc = Bc.howl._soundById(cB);
        if (nc && !nc._ended) return Bc;
        this.forget(cB)
      }
      earDistSq(cB, Bc, nc) {
        if (!this.posed) return 0;
        const Vc = cB - this.pose[2],
          Ic = Bc - this.pose[1],
          rB = nc - this.pose[0];
        return Vc * Vc + Ic * Ic + rB * rB
      }
      start(cB, Bc, nc, Vc, Ic, rB) {
        const uc = DB(nc),
          sc = this.sheet(pB[cB], Bc);
        "unloaded" === sc.state() && sc.load();
        const Mc = sc.play(zn[cB]),
          Pc = uc * this.master;
        return sc.volume(Pc, Mc), this.live.set(Mc, {
          howl: sc,
          rel: uc,
          gain: Pc,
          fadeFrom: Pc,
          fadeAt: 0,
          fadeMs: 0,
          rate: Ic,
          handle: Vc,
          spatial: Bc,
          stopTimer: void 0
        }), 0 !== Vc && this.core.set(Vc, Mc), 1 !== Ic && sc.rate(Ic, Mc), rB && sc.loop(!0, Mc), {
          howl: sc,
          id: Mc
        }
      }
      sheet(cB, Bc) {
        const nc = 2 * cB + (Bc ? 1 : 0);
        let Vc = this.sheets.get(nc);
        if (!Vc) {
          const Ic = this.createHowl(SB[cB], Bc);
          Ic.on("end", (cB => {
            Ic.loop(cB) || this.forget(cB)
          })), Ic.on("stop", (cB => {
            this.forget(cB)
          })), Ic.on("play", (cB => {
            this.live.has(cB) && this.started.add(cB)
          })), Ic.on("loaderror", (cB => {
            if ("loaded" !== Ic.state()) {
              this.failed.add(Ic);
              for (const [cB, Bc] of this.live) Bc.howl === Ic && this.forget(cB)
            } else "number" === typeof cB && this.forget(cB)
          })), this.sheets.set(nc, Ic), Vc = Ic
        }
        return Vc
      }
      setRel(cB, Bc) {
        const nc = this.live.get(cB);
        nc && (WB(nc), nc.fadeMs = 0, nc.rel = DB(Bc), nc.gain = nc.rel * this.master, nc.howl.volume(nc.gain, cB))
      }
      fade(cB, Bc, nc, Vc) {
        const Ic = this.live.get(cB);
        if (!Ic) return;
        WB(Ic);
        const {
          howl: rB
        } = Ic, uc = this.gainNow(Ic);
        Ic.rel = DB(Bc), Ic.gain = Ic.rel * this.master;
        const sc = nc > 0 ? Math.min(nc, 65535) : 0,
          Mc = 0 === sc || uc === Ic.gain;
        Ic.fadeMs = Mc ? 0 : sc, Mc ? rB.volume(Ic.gain, cB) : (Ic.fadeFrom = uc, Ic.fadeAt = this.now(), rB.fade(uc, Ic.gain, sc, cB)), Vc && (Mc ? rB.stop(cB) : Ic.stopTimer = setTimeout((() => {
          Ic.stopTimer = void 0, rB.stop(cB)
        }), sc))
      }
      gainNow(cB) {
        if (cB.fadeMs > 0) {
          const Bc = (this.now() - cB.fadeAt) / cB.fadeMs;
          if (Bc < 1) return cB.fadeFrom + (cB.gain - cB.fadeFrom) * Math.max(0, Bc);
          cB.fadeMs = 0
        }
        return cB.gain
      }
      forget(cB) {
        this.started.delete(cB);
        const Bc = this.live.get(cB);
        Bc && (WB(Bc), this.live.delete(cB), 0 !== Bc.handle && this.core.get(Bc.handle) === cB && this.core.delete(Bc.handle))
      }
    }

    function WB(cB) {
      void 0 !== cB.stopTimer && (clearTimeout(cB.stopTimer), cB.stopTimer = void 0)
    }
    var wB = nc(38614),
      kn = nc(37580);
    class XB {
      constructor(cB, Bc, nc, Vc) {
        this.key = cB, this.model = Bc, this.host = Vc, this.Qc = void 0, this.records = void 0, this.origin = [0, 0, 0], this.count = 0, this.sentCount = Number.NaN, this.sentOrigin = [Number.NaN, Number.NaN, Number.NaN], this.dirtyList = [], this.isDirty = void 0, this.tail = void 0, this.tailView = void 0, this.tailCut = new Uint8Array(0), this.made = !1, this.CV = !1, this.Qc = Math.max(1, Math.ceil(nc)), this.records = new Float32Array(this.Qc * qn.c), this.isDirty = new Uint8Array(this.Qc), this.tail = new Uint8Array(this.Qc * mB.kc.Bytes), this.tailView = new DataView(this.tail.buffer), this.make(Vc.cmd())
      }
      setOrigin(cB, Bc, nc) {
        this.origin[0] = cB, this.origin[1] = Bc, this.origin[2] = nc
      }
      markDirty(cB) {
        !this.CV && cB >= 0 && cB < this.Qc && cB < mB.kc.Max && this.BI(cB, cB + 1)
      }
      commit(cB) {
        if (this.CV) return;
        (cB = Math.min(Math.max(Math.floor(cB), 0), this.Qc, mB.kc.Max)) > this.count && this.BI(this.count, cB), this.count = cB;
        const {
          origin: Bc,
          sentOrigin: nc,
          dirtyList: Vc
        } = this, Ic = this.sentCount !== cB, rB = nc[0] !== Bc[0] || nc[1] !== Bc[1] || nc[2] !== Bc[2];
        if (0 === Vc.length && !Ic && !rB) return;
        const uc = this.host.cmd();
        if (!uc || !this.make(uc)) return;
        const sc = Vc.length,
          {
            records: Mc,
            tailView: Pc
          } = this;
        for (let qB = 0; qB < sc; qB++) {
          const cB = Vc[qB],
            Bc = cB * qn.c,
            nc = qB * mB.kc.Bytes,
            Ic = 0 !== Mc[Bc + qn.g] ? mB.kc.Hidden : 0;
          Pc.setUint32(nc, (cB | Ic) >>> 0, !0), Pc.setFloat32(nc + 4, Mc[Bc], !0), Pc.setFloat32(nc + 8, Mc[Bc + 1], !0), Pc.setFloat32(nc + 12, Mc[Bc + 2], !0)
        }
        if ((0, mB.xe)(uc, 0, this.key, cB, Bc, sc, this.tailOf(sc))) {
          for (let cB = 0; cB < sc; cB++) this.isDirty[Vc[cB]] = 0;
          Vc.length = 0, this.sentCount = cB, nc[0] = Bc[0], nc[1] = Bc[1], nc[2] = Bc[2]
        }
      }
      grow(cB) {
        (cB = Math.ceil(cB)) <= this.Qc || this.CV || (this.records = (0, kn.b)(this.records, new Float32Array(cB * qn.c)), this.isDirty = (0, kn.b)(this.isDirty, new Uint8Array(cB)), this.tail = new Uint8Array(cB * mB.kc.Bytes), this.tailView = new DataView(this.tail.buffer), this.Qc = cB)
      }
      dispose() {
        this.CV || (this.CV = !0, this.host.CV(this, this.made ? this.key : null))
      }
      make(cB) {
        if (!this.made && cB) {
          const {
            item: Bc,
            scale: nc,
            yaw: Vc
          } = this.model;
          this.made = (0, mB.Ce)(cB, 0, this.key, Bc, nc, Vc)
        }
        return this.made
      }
      tailOf(cB) {
        const Bc = cB * mB.kc.Bytes;
        return this.tailCut.buffer === this.tail.buffer && this.tailCut.length === Bc || (this.tailCut = this.tail.subarray(0, Bc)), this.tailCut
      }
      BI(cB, Bc) {
        const {
          dirtyList: nc,
          isDirty: Vc
        } = this;
        for (let Ic = cB; Ic < Bc; Ic++) 0 === Vc[Ic] && (Vc[Ic] = 1, nc.push(Ic))
      }
    }
    var HB = nc(564);
    class FB {
      constructor(cB) {
        this.keys = 0, this.live = new Set, this.owing = new Set, this.host = void 0, this.host = {
          cmd: cB,
          owes: cB => {
            this.owing.add(cB)
          },
          settled: (cB, Bc) => {
            this.owing.delete(cB), Bc && this.live.delete(cB)
          }
        }
      }
      create(cB, Bc) {
        if (nc = cB, !HB.h.includes(nc)) return null;
        var nc;
        const Vc = new JB(++this.keys, qB.i.indexOf(cB), Bc, this.host);
        return this.live.add(Vc), Vc
      }
      disposeAll() {
        for (const cB of [...this.live]) cB.dispose()
      }
      flush() {
        if (0 === this.owing.size) return;
        const cB = this.host.cmd();
        for (const Bc of this.owing)
          if (!Bc.sync(cB)) return
      }
    }
    class JB {
      constructor(cB, Bc, nc, Vc) {
        this.key = cB, this.lifeform = Bc, this.scale = nc, this.host = Vc, this.feet = [0, 0, 0], this.yaw = 0, this.visible = !1, this.owed = 1, this.CV = !1, this.sync()
      }
      setPose(cB, Bc) {
        this.CV || (this.feet[0] = cB[0], this.feet[1] = cB[1], this.feet[2] = cB[2], this.yaw = Bc, this.owed |= 2, this.sync())
      }
      setVisible(cB) {
        this.CV || cB === this.visible || (this.visible = cB, this.owed |= 4, this.sync())
      }
      dispose() {
        this.CV || (this.CV = !0, this.owed = 1 & this.owed ? 0 : 8, this.sync())
      }
      sync() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.host.cmd();
        return this.write(cB) ? (this.host.settled(this, this.CV), !0) : (this.host.owes(this), !1)
      }
      write(cB) {
        if (!cB) return this.owed = 0, !0;
        if (1 & this.owed) {
          if (!(0, mB.Ke)(cB, 0, this.key, this.lifeform, this.scale)) return !1;
          this.owed &= -2
        }
        const Bc = (2 & this.owed ? mB.Jc.Pose : 0) | (4 & this.owed ? mB.Jc.Visible : 0);
        if (0 !== Bc) {
          if (!(0, mB.He)(cB, 0, this.key, Bc, this.visible ? 1 : 0, this.feet, this.yaw)) return !1;
          this.owed &= -7
        }
        if (8 & this.owed) {
          if (!(0, mB.De)(cB, 0, this.key)) return !1;
          this.owed = 0
        }
        return !0
      }
    }
    var jn = nc(39037);

    function RB(cB, Bc, nc, Vc) {
      return (0, jn.b)(), (0, mB.xf)(cB, Bc, nc, Vc)
    }
    var KB = nc(38601);
    const xn = [0, 0, 0],
      dB = [0, 0, 0],
      AB = [0, 0, 0],
      GB = [0, 0, 0],
      cV = [0, 0, 0],
      Bn = [0, 0],
      nn = [1, 1, 1],
      Vn = 1 / 3;
    const In = OB.g;

    function rV(cB) {
      const Bc = OB.d[cB],
        nc = Bc && OB.g[Bc.mainMultiblock];
      return nc && {
        main: nc,
        x: Bc.compX,
        y: Bc.compY,
        z: Bc.compZ
      }
    }

    function un(cB) {
      if (null === cB || void 0 === cB) return mB.Oc;
      const Bc = +cB;
      return Number.isInteger(Bc) && Bc >= -2147483648 && Bc <= 2147483647 && String(Bc) === String(cB) ? Bc : mB.Oc
    }

    function sn(cB, Bc, nc) {
      return (0, mB.If)(cB, 0, Bc, null !== nc && void 0 !== nc ? nc : Number.NaN)
    }
    class Mn {
      constructor(cB) {
        this.deps = cB, this.api = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.tables = void 0, this.meshKeys = 0, this.liveMeshes = new Set, this.poolKeys = 0, this.livePools = new Set, this.mobModels = new FB((() => this.deps.cmd())), this.owedFrees = [], this.pendingStyle = void 0, this.pendingFar = void 0, this.farSet = !1, this.routeMesh = 0, this.routeOffset = 0, this.routeLook = "", this.routeSlide = {
          uvOffset: [0, 0]
        }, this.poolHost = {
          cmd: () => this.deps.cmd(),
          CV: (cB, Bc) => {
            this.livePools.delete(cB), null !== Bc && (this.owedFrees.push(Bc), this.flushOwed())
          }
        }, this.api = cB.api, this.live = cB.live, this.chunks = cB.chunks, this.items = cB.items, this.tables = cB.tables
      }
      isLocal(cB) {
        return null !== cB && void 0 !== cB && +cB === this.api.localId
      }
      assertLocal(cB, Bc) {
        if (!this.isLocal(cB)) throw new Error(`Attempted to ${Bc} for a player that is not the local player`)
      }
      rC(cB) {
        const Bc = this.api.rC(cB);
        if (!Bc) throw new Error(`Entity ${cB} has no replicated position`);
        return Bc
      }
      checkValid(cB) {
        return !!this.deps.isSessionLive() && (null === cB || void 0 === cB || this.api.checkValid(cB))
      }
      isAlive(cB) {
        return !1 !== this.api.isAlive(cB)
      }
      getItemStat(cB, Bc, nc) {
        return this.isLocal(cB) || null !== cB && "Player" === this.api.getEntityType(cB) ? this.tables.getItemStat(Bc, nc) : this.tables.getDefaultItemStat(Bc, nc)
      }
      getClientOption(cB, Bc) {
        return this.assertLocal(cB, "get a client option"), this.tables.getClientOption(Bc)
      }
      openShop(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          nc = arguments.length > 2 ? arguments[2] : void 0;
        this.assertLocal(cB, "open shop"), uc.i.Vu("showShopFromServer", {
          toggle: Bc,
          v_: nc
        }, !0)
      }
      sendMessage(cB, Bc, nc) {
        this.assertLocal(cB, "send a message");
        const Vc = "string" === typeof Bc ? [{
          str: Bc,
          style: nc
        }] : Bc;
        uc.i.Vu("chat", {
          content: Vc
        }, !0)
      }
      getEntityType(cB) {
        return this.api.getEntityType(cB)
      }
      getEntityName(cB) {
        const Bc = un(cB);
        return Bc === mB.Oc ? void 0 : (0, wB.d)(this.api, Bc)
      }
      hasEffect(cB, Bc) {
        const nc = un(cB);
        return nc !== mB.Oc && (0, wB.c)(this.api, nc, Bc)
      }
      getMetaInfo(cB) {
        return this.tables.getMetaInfo(cB)
      }
      getPlayerDbId(cB) {
        return this.assertLocal(cB, "get a DB ID"), this.deps.playerDbId()
      }
      getBlockData(cB, Bc, nc) {
        if (!this.chunks.dataCleared(cB, Bc, nc)) return (0, wB.b)(this.api, cB, Bc, nc)
      }
      UBc(cB, Bc, nc, Vc) {
        this.setBlockId(cB, Bc, nc, this.tables.getItemId(Vc))
      }
      setOtherEntitySetting(cB, Bc, nc, Vc) {
        if (!this.isLocal(cB)) throw new Error("Attempted to set an other-entity setting for a player that is not the local player");
        if (!Object.hasOwn(mB.ad, nc)) throw new Error(`Unknown other-entity setting ${nc}`);
        const Ic = mB.ad[nc],
          rB = un(Bc);
        if (rB === mB.Oc || !this.deps.beforeWrite()) return;
        const uc = (0, Ec.g)(Vc);
        if (uc.length > 16384) throw new Error(`The other-entity setting ${nc}'s value is over 16384 bytes`);
        const sc = this.api.memoryView(Uint8Array, this.api.scratch(), uc.length, "set_other_entity_setting's value");
        sc && (sc.set(uc), this.api.queries.setOtherEntitySetting(rB, Ic, uc.length))
      }
      getPositionView(cB) {
        return this.live.position(+cB)
      }
      readDrawnPosition(cB, Bc) {
        return this.api.readDrawnPosition(un(cB), Bc)
      }
      getDrawnHeading(cB) {
        const Bc = un(cB),
          nc = (Bc === mB.Oc ? 0 : this.api.queries.directorEntity(Bc)) >= mB.lb.BYTES ? this.api.memoryData(this.api.scratch(), mB.lb.BYTES, 8, "getDrawnHeading's DirectorEntity") : null;
        if (!nc) return null;
        if (1 === mB.lb.headingIsDrawn(nc, 0)) return mB.lb.heading(nc, 0);
        const Vc = this.api.apiView;
        return this.isLocal(cB) && 0 === (mB.v.playerFlags(Vc, 0) & mB.vd.FreeCam) ? mB.v.heading(Vc, 0) : null
      }
      getLocalPlayerMovement() {
        const cB = mB.v.playerFlags(this.api.apiView, 0);
        return 0 === (cB & mB.vd.Replay) && this.api.readDrawnPosition(this.api.localId, AB) ? {
          onGround: 0 !== (cB & mB.vd.OnGround),
          jumpHeld: 0 !== (cB & mB.vd.JumpHeld)
        } : null
      }
      lMc(cB) {
        return this.isLocal(cB) ? this.items.XB() : null
      }
      getInventoryItems() {
        return this.items.playerItems()
      }
      getHeldGunInaccuracy() {
        var cB, Bc;
        return "Gun" === (null === (cB = this.aliveHeld()) || void 0 === cB || null === (Bc = cB.typeObj) || void 0 === Bc ? void 0 : Bc.type) ? this.items.inaccuracy : null
      }
      aliveHeld() {
        return !1 === this.api.isAlive(this.api.localId) ? null : this.items.XB()
      }
      isCrosshairShown() {
        var cB, Bc;
        const nc = Vc.d.get("crosshairShownOverride");
        if (null !== nc) return nc;
        const Ic = null === (cB = this.aliveHeld()) || void 0 === cB ? void 0 : cB.typeObj,
          rB = "Gun" === (null === Ic || void 0 === Ic ? void 0 : Ic.type),
          uc = rB || !0 === (null === Ic || void 0 === Ic ? void 0 : Ic.showsAimingUi),
          sc = 0 === (mB.v.playerFlags(this.api.apiView, 0) & mB.vd.ZoomFirstPerson),
          Mc = null !== (Bc = this.tables.getClientOption("gunshotOrigin")) && void 0 !== Bc ? Bc : null;
        return (0, fB.f)({
          gun: rB,
          aimable: uc
        }, sc, (0, mn.e)(), Mc)
      }
      setCrosshairShown(cB) {
        Vc.d.set({
          crosshairShownOverride: cB
        })
      }
      getInventoryFreeSlotCount(cB) {
        return this.isLocal(cB) ? this.items.freeSlots() : null
      }
      getSelectedInventorySlotI(cB) {
        return this.isLocal(cB) ? this.items.selectedSlot : null
      }
      getItemSlot(cB, Bc) {
        return this.isLocal(cB) ? this.items.slot(Bc) : null
      }
      swapInventorySlots(cB, Bc) {
        return this.items.swap(cB, Bc, !1)
      }
      redoInventorySwapLocally(cB, Bc) {
        this.items.swap(cB, Bc, !0)
      }
      isPlayerCrouching(cB) {
        if (this.isLocal(cB)) return 0 !== (mB.v.playerFlags(this.api.apiView, 0) & mB.vd.Crouching);
        const Bc = un(cB);
        return Bc !== mB.Oc && 1 === this.api.queries.entityCrouching(Bc)
      }
      getMiningBlock() {
        return this.live.breakingPosition()
      }
      isMining() {
        return 0 !== (mB.v.playerFlags(this.api.apiView, 0) & mB.vd.AttemptingBreak)
      }
      getTargetedBlock() {
        return this.live.Isc()
      }
      canModifyBlockAt(cB, Bc, nc) {
        return 1 === this.api.queries.canModify(cB, Bc, nc)
      }
      isSolidToPlayerBlockId(cB) {
        return this.tables.isSolidBlockId(cB) && !this.chunks.isWalkThrough(cB)
      }
      blockNameToBlockId(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.tables.blockNameToBlockId(cB, Bc)
      }
      blockIdToBlockName(cB) {
        return this.tables.nameOfId(cB)
      }
      Fsc(cB, Bc, nc, Vc, Ic) {
        return 1 === this.api.queries.terrainBlocked(Vc, cB, Bc, nc, un(null !== Ic && void 0 !== Ic ? Ic : null))
      }
      getChunkVersion(cB, Bc, nc) {
        return this.chunks.version(cB, Bc, nc)
      }
      scanBlocks(cB, Bc, nc, Vc, Ic, rB, uc, sc) {
        return this.chunks.scan(cB, Bc, nc, Vc, Ic, rB, uc, sc)
      }
      isBlockInLoadedChunk(cB, Bc, nc) {
        return this.chunks.isLoaded(cB, Bc, nc)
      }
      getBlockId(cB, Bc, nc) {
        return this.chunks.Zr(cB, Bc, nc)
      }
      playSound(cB, Bc, nc, Vc, Ic) {
        let rB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        if (!this.isLocal(cB)) return null;
        const uc = this.playSoundFrom(Bc, nc, Ic, rB);
        return 1 === Vc ? uc : uc.rate(Vc)
      }
      playSoundFrom(cB, Bc, nc, Vc) {
        var Ic, rB;
        const uc = this.deps.playSound;
        if (!uc) return bn.e;
        const sc = null === nc || void 0 === nc ? void 0 : nc.vx,
          Mc = null !== (Ic = null === nc || void 0 === nc ? void 0 : nc.maxHearDist) && void 0 !== Ic ? Ic : TB.e,
          Pc = null !== (rB = null === nc || void 0 === nc ? void 0 : nc.refDistance) && void 0 !== rB ? rB : TB.g;
        let qB = null;
        if (Array.isArray(sc)) xn[0] = sc[0], xn[1] = sc[1], xn[2] = sc[2], qB = xn;
        else if (void 0 !== sc && null !== sc) {
          const cB = un(sc);
          if (!this.api.isLocal(cB)) {
            if (!this.api.readPosition(cB, xn)) return bn.e;
            qB = xn
          }
        }
        return uc(cB, Bc, qB, qB && this.ear(), Mc, Pc, Vc)
      }
      ear() {
        if (this.api.readPosition(this.api.localId, dB)) dB[1] += QB;
        else {
          const cB = this.api.apiView;
          if (0 === mB.v.viewProj(cB, 0, 3) && 0 === mB.v.viewProj(cB, 0, 7) && 0 === mB.v.viewProj(cB, 0, 11)) return null;
          for (let Bc = 0; Bc < 3; Bc++) dB[Bc] = mB.v.eye(cB, 0, Bc)
        }
        return Number.isFinite(dB[0] + dB[1] + dB[2]) ? dB : null
      }
      setBlockId(cB, Bc, nc, Vc) {
        if (!Number.isInteger(Vc) || Vc < 0 || Vc > 65535) throw new Error(`Invalid block id ${Vc}`);
        if (!this.deps.beforeWrite() || !this.chunks.isLoaded(cB, Bc, nc)) return;
        const Ic = Math.floor(cB),
          rB = Math.floor(Bc),
          uc = Math.floor(nc),
          sc = this.predictedCells(Ic, rB, uc, Vc);
        if (1 === this.api.queries.UBc(Ic, rB, uc, Vc)) {
          for (let cB = 0; cB < sc.length; cB += 5) this.chunks.setOverlay(sc[cB], sc[cB + 1], sc[cB + 2], sc[cB + 3], 1 === sc[cB + 4]);
          this.live.refreshTarget()
        }
      }
      particlesEnabled() {
        return this.deps.particles.enabled()
      }
      createParticles(cB, Bc) {
        return this.deps.particles.create(cB, Bc)
      }
      playParticleEffect(cB) {
        this.deps.particles.playEffect(cB)
      }
      burstParticlePreset(cB, Bc, nc) {
        this.deps.particles.burstPreset(cB, Bc, nc)
      }
      createGameMesh(cB, Bc, nc) {
        const Vc = ++this.meshKeys,
          Ic = this.deps.cmd();
        if (!Ic) return Vc;
        const {
          look: rB,
          colour: uc
        } = function(cB) {
          switch (cB.kind) {
            case void 0:
            case "flatEmissive":
              return cB.opaque ? {
                look: mB.Sb.FlatOpaque,
                colour: [...cB.rgb, 1]
              } : {
                look: mB.Sb.Flat,
                colour: [...cB.rgb, cB.alpha]
              };
            case "chevronPath":
              return {
                look: mB.Sb.Chevrons, colour: [...(0, eB.c)(cB.colour), cB.alpha]
              };
            case "furnaceFire":
              return {
                look: mB.Sb.FurnaceFire, colour: [1, 1, 1, 1]
              }
          }
        }(Bc), sc = Math.floor(cB.positions.length / 3), Mc = function(cB, Bc) {
          const nc = Math.floor(cB.positions.length / 3),
            Vc = cB.indices.length,
            Ic = nc * (Bc ? 5 : 3),
            rB = new Uint8Array(4 * (Ic + Vc)),
            uc = new DataView(rB.buffer);
          for (let Pc = 0; Pc < 3 * nc; Pc++) uc.setFloat32(4 * Pc, cB.positions[Pc], !0);
          if (Bc) {
            var sc;
            const Bc = null !== (sc = cB.uvs) && void 0 !== sc ? sc : [];
            for (let cB = 0; cB < 2 * nc; cB++) {
              var Mc;
              uc.setFloat32(4 * (3 * nc + cB), null !== (Mc = Bc[cB]) && void 0 !== Mc ? Mc : 0, !0)
            }
          }
          for (let Pc = 0; Pc < Vc; Pc++) uc.setUint32(4 * (Ic + Pc), cB.indices[Pc], !0);
          return rB
        }(cB, (0, qn.h)(Bc));
        return (0, mB.qe)(Ic, 0, Vc, rB, uc, nc, sc, cB.indices.length, Mc) && this.liveMeshes.add(Vc), Vc
      }
      setGameMesh(cB, Bc) {
        var nc;
        const Vc = this.deps.cmd();
        if (!Vc) return;
        let Ic = 0;
        Bc.anchor && (Ic |= mB.Tb.Anchor, cV[0] = Bc.anchor[0], cV[1] = Bc.anchor[1], cV[2] = Bc.anchor[2]), void 0 !== Bc.visible && (Ic |= mB.Tb.Visible), Bc.uvOffset && (Ic |= mB.Tb.UvOffset, Bn[0] = Bc.uvOffset[0], Bn[1] = Bc.uvOffset[1]);
        const rB = null !== (nc = Bc.visibility) && void 0 !== nc ? nc : 1;
        void 0 !== Bc.visibility && (Ic |= mB.Tb.Visibility), Bc.scale && (Ic |= mB.Tb.Scale, nn[0] = Bc.scale[0], nn[1] = Bc.scale[1], nn[2] = Bc.scale[2]), 0 !== Ic && (0, mB.ue)(Vc, 0, cB, Ic, Bc.visible ? 1 : 0, cV, Bn, rB, nn)
      }
      disposeGameMesh(cB) {
        const Bc = this.deps.cmd();
        Bc && !(0, mB.te)(Bc, 0, cB) || this.liveMeshes.delete(cB)
      }
      hasPackModel(cB) {
        var Bc, nc, Vc;
        return null !== (Bc = null === (nc = (Vc = this.deps).hasPackModel) || void 0 === nc ? void 0 : nc.call(Vc, cB)) && void 0 !== Bc && Bc
      }
      disposeGameOutput() {
        const cB = cB => {
          try {
            cB()
          } catch (Bc) {
            console.error("Error freeing client game output", Bc)
          }
        };
        for (const Bc of [...this.liveMeshes]) cB((() => {
          this.disposeGameMesh(Bc)
        }));
        for (const Bc of [...this.livePools]) cB((() => {
          Bc.dispose()
        }));
        cB((() => {
          this.mobModels.disposeAll()
        })), cB((() => {
          this.setGroundArrowStyle(null)
        })), cB((() => {
          this.setRouteChevrons(null), this.routeOffset = 0, this.routeLook = ""
        })), cB((() => {
          this.setCrosshairShown(null)
        })), cB((() => {
          this.farSet && (this.farSet = !1, this.setCameraFar(null))
        }))
      }
      createInstancePool(cB, Bc) {
        const nc = this.tables.idOf(cB.item);
        if (void 0 === nc) return null;
        const Vc = new XB(++this.poolKeys, {
          item: nc,
          scale: cB.scale,
          yaw: cB.yaw
        }, Bc, this.poolHost);
        return this.livePools.add(Vc), Vc
      }
      createMobModel(cB, Bc) {
        return this.mobModels.create(cB, Bc)
      }
      setRouteChevrons(cB) {
        if (0 !== this.routeMesh && (this.disposeGameMesh(this.routeMesh), this.routeMesh = 0), !cB || 0 === cB.cells.length) return;
        const Bc = `${cB.colour} ${cB.alpha}`;
        Bc !== this.routeLook && (this.routeLook = Bc, this.routeOffset = 0), this.routeMesh = this.createGameMesh(function(cB) {
          const [Bc, nc, Vc] = cB[0].pos, Ic = [], rB = [], uc = [];
          return cB.forEach(((cB, sc) => {
            let {
              pos: Mc,
              way: [Pc, qB]
            } = cB;
            const Oc = Mc[0] - Bc + .5,
              Tc = Mc[1] - nc + .04,
              fc = Mc[2] - Vc + .5,
              [mB, ec] = [.35 * -qB, .35 * Pc],
              [tB, Sc] = [sc * Vn, (sc + 1) * Vn],
              yB = Ic.length / 3;
            Ic.push(Oc - .5 * Pc + mB, Tc, fc - .5 * qB + ec), Ic.push(Oc - .5 * Pc - mB, Tc, fc - .5 * qB - ec), Ic.push(Oc + .5 * Pc + mB, Tc, fc + .5 * qB + ec), Ic.push(Oc + .5 * Pc - mB, Tc, fc + .5 * qB - ec), rB.push(0, tB, 1, tB, 0, Sc, 1, Sc), uc.push(yB, yB + 1, yB + 2, yB + 1, yB + 3, yB + 2)
          })), {
            positions: Ic,
            uvs: rB,
            indices: uc
          }
        }(cB.cells), {
          kind: "chevronPath",
          colour: cB.colour,
          alpha: cB.alpha
        }, cB.cells[0].pos), this.setRouteSlide()
      }
      slideRoute(cB) {
        0 !== this.routeMesh && (this.routeOffset = (this.routeOffset + Math.min(cB, 250) / 1e3 * 1.2 * Vn) % 1, this.setRouteSlide())
      }
      setRouteSlide() {
        this.routeSlide.uvOffset[1] = -this.routeOffset, this.setGameMesh(this.routeMesh, this.routeSlide)
      }
      setGroundArrowStyle(cB) {
        this.pendingStyle = cB, this.flushOwed()
      }
      flushOwed() {
        this.mobModels.flush();
        const cB = this.owedFrees;
        if (0 === cB.length && void 0 === this.pendingStyle && void 0 === this.pendingFar) return;
        const Bc = this.deps.cmd();
        if (!Bc) return cB.length = 0, void(this.pendingFar = void 0);
        let nc = 0;
        for (; nc < cB.length && (0, mB.Be)(Bc, 0, cB[nc]);) nc++;
        cB.splice(0, nc);
        const Vc = this.pendingStyle;
        if (void 0 !== Vc) {
          (Vc ? (0, mB.Lf)(Bc, 0, Vc.width, Vc.alpha, 1, Vc.endAtSolidFace ? 1 : 0) : (0, mB.Lf)(Bc, 0, 0, 0, 0, 0)) && (this.pendingStyle = void 0)
        }
        const Ic = this.pendingFar;
        void 0 !== Ic && (0, mB.Ef)(Bc, 0, null !== Ic && void 0 !== Ic ? Ic : 0, null === Ic ? 1 : 0) && (this.pendingFar = void 0)
      }
      setNametagOffset(cB, Bc) {
        const nc = this.deps.cmd(),
          Vc = un(cB);
        nc && Vc !== mB.Oc && (0, mB.Sf)(nc, 0, Vc, Bc)
      }
      setFacingTolerance(cB, Bc) {
        const nc = this.deps.cmd(),
          Vc = un(cB);
        nc && Vc !== mB.Oc && sn(nc, Vc, Bc)
      }
      forEachEntity(cB) {
        const {
          api: Bc
        } = this;
        for (let nc = 0; nc < Bc.idStr.length; nc++) {
          const Vc = Bc.idStr[nc];
          null === Vc || hc(Bc.kinds[nc]) || cB(Vc)
        }
      }
      getEntityInfo(cB) {
        return this.deps.entityInfo.get(cB)
      }
      isEntityInteractable(cB) {
        const Bc = un(cB);
        return Bc !== mB.Oc && 1 === this.api.queries.entityInteractable(Bc)
      }
      isLocalPlayer(cB) {
        return this.isLocal(cB)
      }
      getLineOwner(cB) {
        var Bc;
        const nc = null === (Bc = this.deps.entityInfo.get(cB)) || void 0 === Bc ? void 0 : Bc.meshOpts;
        if (!nc) return null;
        try {
          const {
            lineToEId: cB
          } = JSON.parse(nc);
          return null !== cB && void 0 !== cB ? cB : null
        } catch {
          return null
        }
      }
      getCameraPosition() {
        const cB = this.api.apiView;
        return GB[0] = mB.v.eye(cB, 0, 0), GB[1] = mB.v.eye(cB, 0, 1), GB[2] = mB.v.eye(cB, 0, 2), GB
      }
      getCameraFar() {
        return mB.v.cameraFar(this.api.apiView, 0)
      }
      setCameraFar(cB) {
        null !== cB && (this.farSet = !0), this.pendingFar = cB, this.flushOwed()
      }
      clearPickupDelay(cB) {
        const Bc = this.deps.cmd(),
          nc = un(cB);
        Bc && nc !== mB.Oc && (0, mB.ce)(Bc, 0, nc)
      }
      sendChat(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const nc = this.deps.sendCmd();
        nc && RB(nc, 0, KB.e.Chat, (0, Ec.g)((0, KB.k)({
          Uu: cB,
          okc: Bc
        })))
      }
      sendCommand(cB) {
        cB.length <= 119 && this.sendChat(`/${cB}`)
      }
      predictedCells(cB, Bc, nc, Vc) {
        const Ic = this.chunks,
          rB = [],
          uc = (cB, Bc, nc, Vc, Ic) => {
            rB.push(cB, Bc, nc, Vc, this.tables.blockRootId(Ic) === this.tables.blockRootId(Vc) ? 0 : 1)
          },
          sc = Ic.Zr(cB, Bc, nc),
          Mc = rV(sc);
        if (Mc) {
          const [Vc, rB, Pc] = [cB - Mc.x, Bc - Mc.y, nc - Mc.z], qB = In[Ic.Zr(Vc, rB, Pc)], Oc = null === qB || void 0 === qB ? void 0 : qB.positions.some((cB => cB.id === sc && cB.x === Mc.x && cB.y === Mc.y && cB.z === Mc.z));
          for (const cB of (Oc && qB ? qB : Mc.main).positions) Ic.Zr(Vc + cB.x, rB + cB.y, Pc + cB.z) === cB.id && uc(Vc + cB.x, rB + cB.y, Pc + cB.z, 0, cB.id)
        }
        const Pc = rV(Vc);
        if (Pc)
          for (const Oc of Pc.main.positions) {
            const [Vc, rB, sc] = [cB + Oc.x - Pc.x, Bc + Oc.y - Pc.y, nc + Oc.z - Pc.z];
            uc(Vc, rB, sc, Oc.id, Ic.Zr(Vc, rB, sc))
          } else uc(cB, Bc, nc, Vc, sc);
        const qB = this.tables;
        if ((0 !== qB.attachedTopOf(sc) || 0 !== qB.attachedTopOf(Vc)) && Ic.isLoaded(cB, Bc + 1, nc)) {
          let Mc = Ic.Zr(cB, Bc + 1, nc);
          for (let Vc = 0; Vc < rB.length; Vc += 5) rB[Vc] === cB && rB[Vc + 1] === Bc + 1 && rB[Vc + 2] === nc && (Mc = rB[Vc + 3]);
          const Pc = this.attachedTopWrite(sc, Vc, Mc);
          void 0 !== Pc && uc(cB, Bc + 1, nc, Pc, Mc)
        }
        return rB
      }
      attachedTopWrite(cB, Bc, nc) {
        const Vc = this.tables,
          Ic = Vc.attachedTopOf(cB),
          rB = Vc.attachedTopOf(Bc),
          uc = 0 !== Ic && 0 !== nc && Vc.blockRootId(nc) === Vc.blockRootId(Ic);
        return 0 !== Ic && 0 !== rB && Vc.blockRootId(cB) === Vc.blockRootId(Bc) ? uc && nc !== rB ? rB : void 0 : 0 === rB || !uc && 0 !== nc ? uc ? 0 : void 0 : rB
      }
    }
    const Pn = mB.ec + mB.ic * mB.mc.BYTES,
      qV = 2147483647,
      On = new TextDecoder,
      Tn = new TextEncoder,
      fn = Object.freeze({
        YF: 0,
        FX: null,
        amountAddedToSlot: 0
      }),
      mV = new Proxy({}, {
        get: () => () => mB._c
      });

    function en(cB) {
      return Number.isInteger(cB) && cB >= 0 && cB <= 65535
    }

    function tV(cB) {
      return Number.isInteger(cB) && cB >= 0 && cB <= 4294967295
    }
    class Sn {
      constructor(cB) {
        this.deps = cB, this.dD = [0, 0, 0], this.inaccuracy = 0, this.version = 0, this.notified = 0, this.iconChanged = !1, this.facades = new Array(mB.ic), this.ids = new Uint16Array(mB.ic), this.amounts = new Uint16Array(mB.ic), this.attrRead = new Float64Array(mB.ic).fill(-1), this.stale = new Uint16Array(mB.ic), this.staleVersion = new Uint32Array(mB.ic), this.instances = new Uint32Array(mB.ic), this.viewPtr = 0, this.viewVersion = -1, this.len = 0, this.selected = 0, this.slotIconId = 0, this.stopped = !1, this.listeners = new Set
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
      slot(cB) {
        var Bc;
        return Number.isInteger(cB) && cB >= 0 && cB < this.len && 0 !== this.ids[cB] && null !== (Bc = this.facades[cB]) && void 0 !== Bc ? Bc : null
      }
      XB() {
        return this.slot(this.selected)
      }
      playerItems() {
        const cB = [];
        for (let Bc = 0; Bc < Math.min(mB.id, this.len); Bc++) cB.push(this.slot(Bc));
        return cB
      }
      freeSlots() {
        let cB = 0;
        for (let Bc = 0; Bc < Math.min(mB.id - mB.l, this.len); Bc++) 0 === this.ids[Bc] && cB++;
        return cB
      }
      amountOf(cB) {
        let Bc = 0;
        for (let Vc = 0; Vc < Math.min(mB.id, this.len); Vc++) {
          const Ic = this.slot(Vc);
          var nc;
          if ((null === Ic || void 0 === Ic ? void 0 : Ic.name) === cB) Bc += null !== (nc = Ic.amount) && void 0 !== nc ? nc : 1
        }
        return Bc
      }
      instance(cB) {
        var Bc;
        return null !== (Bc = this.instances[cB]) && void 0 !== Bc ? Bc : 0
      }
      watch(cB) {
        return this.listeners.add(cB), () => {
          this.listeners.delete(cB)
        }
      }
      touch() {
        this.version++
      }
      flush(cB) {
        if (this.version !== this.notified || this.iconChanged) {
          this.notified = this.version, this.iconChanged = !1;
          for (const nc of [...this.listeners]) try {
            nc()
          } catch (Bc) {
            cB(Bc)
          }
        }
      }
      chestOpened(cB, Bc, nc) {
        this.dD[0] = cB, this.dD[1] = Bc, this.dD[2] = nc, this.version++
      }
      refresh() {
        const cB = this.deps.api.apiView,
          Bc = mB.v.inventoryViewPtr(cB, 0),
          nc = mB.v.inventoryVersion(cB, 0),
          Vc = mB.v.selectedSlot(cB, 0);
        Vc !== this.selected && (this.selected = Vc, this.version++);
        const Ic = mB.v.slotIcon(cB, 0);
        if (Ic !== this.slotIconId && (this.slotIconId = Ic, this.iconChanged = !0), Bc === this.viewPtr && nc === this.viewVersion) return;
        this.viewPtr = Bc, this.viewVersion = nc;
        const rB = this.deps.api.memoryData(Bc, Pn, 4, "the inventory view"),
          uc = rB ? Math.min(rB.getUint32(0, !0), mB.ic) : 0;
        uc !== this.len && (this.len = uc, this.version++);
        let sc = 0;
        for (let Mc = 0; Mc < mB.ic; Mc++) {
          const cB = mB.ec + Mc * mB.mc.BYTES,
            Bc = null !== rB && Mc < uc ? mB.mc.item(rB, cB) : 0;
          if (0 === Bc || null === rB) {
            0 !== this.ids[Mc] && (this.ids[Mc] = 0, this.attrRead[Mc] = -1, this.instances[Mc]++, this.version++);
            continue
          }
          const nc = mB.mc.amount(rB, cB),
            Vc = mB.mc.attrVersion(rB, cB);
          Bc === this.ids[Mc] && nc === this.amounts[Mc] || this.fill(Mc, Bc, nc), Vc !== this.attrRead[Mc] && (this.stale[sc] = Mc, this.staleVersion[sc] = Vc, sc++)
        }
        sc > 0 && this.fetchAttributes(sc)
      }
      fill(cB, Bc, nc) {
        const {
          tables: Vc
        } = this.deps, Ic = Bc !== this.ids[cB];
        let rB = this.facades[cB];
        rB || (rB = {
          name: "",
          amount: null,
          attributes: {
            customAttributes: {}
          },
          typeObj: null
        }, this.facades[cB] = rB), Ic && (rB.name = Vc.nameOfId(Bc), rB.typeObj = Vc.itemType(Bc), rB.attributes = {
          customAttributes: {}
        }, this.attrRead[cB] = -1, this.instances[cB]++), rB.amount = 0 === nc ? null : nc, this.ids[cB] = Bc, this.amounts[cB] = nc, this.version++
      }
      fetchAttributes(cB) {
        const {
          api: Bc,
          onError: nc
        } = this.deps, Vc = Bc.memoryView(Uint16Array, Bc.scratch(), cB, "item_attributes_batch's slots");
        if (!Vc) return void this.markRead(cB);
        Vc.set(this.stale.subarray(0, cB));
        const Ic = Bc.queries.itemAttributesBatch(cB),
          rB = 4294967295 === Ic ? null : Bc.memoryData(Bc.scratch(), Ic, 4, "item_attributes_batch's answer");
        if (!rB) return void this.markRead(cB);
        const uc = new Uint8Array(rB.buffer, rB.byteOffset, Ic);
        for (let Mc = 0; Mc + 8 <= Ic;) {
          const cB = rB.getUint16(Mc, !0),
            Bc = rB.getUint32(Mc + 4, !0),
            Vc = uc.subarray(Mc + 8, Mc + 8 + Bc);
          Mc += 8 + (0, Tc.Ld)(Bc);
          const Ic = this.facades[cB];
          if (Ic && 0 !== this.ids[cB] && 0 !== Bc) {
            try {
              Ic.attributes = JSON.parse(On.decode(Vc))
            } catch (sc) {
              nc(sc)
            }
            this.version++
          }
        }
        this.markRead(cB)
      }
      markRead(cB) {
        for (let Bc = 0; Bc < cB; Bc++) this.attrRead[this.stale[Bc]] = this.staleVersion[Bc]
      }
      swap(cB, Bc, nc) {
        if (!en(cB) || !en(Bc)) return !1;
        const Vc = this.queries();
        return nc ? this.settle(Vc.invSwapLocal(cB, Bc), !0) : this.settle(Vc.invSwap(cB, Bc))
      }
      move(cB, Bc, nc) {
        return en(cB) && en(Bc) && tV(nc) && this.settle(this.queries().invMove(cB, Bc, nc))
      }
      quickMove(cB, Bc, nc, Vc) {
        var Ic, rB;
        if (!en(cB) || !en(Bc) || !en(nc) || null !== Vc && !tV(Vc)) return null;
        const uc = this.queries().invQuickMove(cB, Bc, nc, null === Vc ? -1 : Math.min(Vc, qV)),
          sc = uc === mB._c ? mB.Gb : null !== (Ic = null === (rB = this.extras()) || void 0 === rB ? void 0 : rB[1]) && void 0 !== Ic ? Ic : mB.Gb;
        return this.settle(uc), sc === mB.Gb ? null : sc
      }
      remove(cB, Bc, nc) {
        return en(cB) && tV(Bc) && this.settle(this.queries().invRemove(cB, Bc, nc ? 1 : 0))
      }
      selectSlot(cB) {
        return en(cB) && this.settle(this.queries().selectSlot(cB))
      }
      closeChest() {
        return this.settle(this.queries().closeChest())
      }
      enchant(cB, Bc, nc) {
        if (!en(cB) || !Number.isInteger(Bc)) return !1;
        const [Vc, Ic, rB] = nc;
        return this.settle(this.queries().invEnchant(cB, Bc, Math.floor(Vc), Math.floor(Ic), Math.floor(rB)))
      }
      craft(cB, Bc, nc) {
        let Vc;
        try {
          Vc = this.deps.tables.getItemId(cB)
        } catch {
          return fn
        }
        if (!en(Bc) || null !== nc && (Number.isNaN(nc) || nc < 0)) return fn;
        const Ic = null === nc || nc > qV ? -1 : Math.floor(nc),
          rB = this.queries().craft(Vc, Bc, Ic);
        let uc = fn;
        const sc = rB === mB._c ? null : this.extras();
        if (sc) {
          const [cB, Bc, nc] = sc;
          uc = {
            YF: cB,
            FX: Bc === mB.Gb ? null : Bc,
            amountAddedToSlot: nc
          }
        }
        return this.settle(rB), uc
      }
      salvage(cB, Bc, nc) {
        let Vc;
        try {
          Vc = this.deps.tables.getItemId(Bc)
        } catch {
          return !1
        }
        return en(cB) && Number.isInteger(nc) && this.settle(this.queries().salvage(cB, Vc, Math.max(Math.min(nc, qV), -qV)))
      }
      craftingView(cB, Bc, nc) {
        var Vc;
        if (this.stopped) return null;
        const {
          api: Ic,
          onError: rB
        } = this.deps, uc = cB ? Tn.encode(cB) : null;
        if (null !== uc) {
          if (uc.length > 1024) return rB(new Error(`The crafting station ${cB}'s name is over 1024 bytes`)), null;
          const Bc = Ic.memoryView(Uint8Array, Ic.scratch(), uc.length, "crafting_view's station");
          if (!Bc) return null;
          Bc.set(uc)
        }
        const sc = en(Bc) && en(nc),
          Mc = Ic.queries.craftingView(null !== (Vc = null === uc || void 0 === uc ? void 0 : uc.length) && void 0 !== Vc ? Vc : 0, sc ? Bc : 0, sc ? nc : 0);
        return Mc < mB.gb.BYTES ? (Ic.reportCorruption(`crafting_view's answer of ${Mc} bytes`), null) : Ic.memoryData(Ic.scratch(), Mc, 1, "crafting_view's answer")
      }
      queries() {
        var cB, Bc;
        return !1 === (null === (cB = (Bc = this.deps).beforeOp) || void 0 === cB ? void 0 : cB.call(Bc)) ? (this.stopped = !0, mV) : this.deps.api.queries
      }
      extras() {
        const {
          api: cB
        } = this.deps;
        return cB.memoryView(Uint32Array, cB.scratch(), 3, "a sync query's extra words")
      }
      settle(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (cB === mB.Zc) Bc || (0, jn.b)();
        else if (cB !== mB._c) {
          const Bc = this.deps.cmd();
          Bc && function(cB, Bc, nc) {
            return (0, jn.b)(), (0, mB.Wf)(cB, Bc, nc)
          }(Bc, 0, cB) || this.deps.onError(new Error(`Sync op ${cB}'s marker didn't fit the command ring: its send goes after the next frame's commands`))
        }
        return this.stopped || this.refresh(), cB !== mB._c
      }
    }
    const yV = 1 / .6,
      zV = [0, 1, 0],
      pn = [0, 0, 0],
      hn = new Uint8Array(0),
      aV = 1.2 * tn.e.EY,
      lnc = new TextEncoder,
      Yn = [0, 0, 0],
      Ln = [0, 0, 0],
      gV = new Map;

    function Un(cB) {
      let Bc = gV.get(cB);
      return Bc || (gV.size >= 64 && gV.clear(), Bc = lnc.encode(`{"emitRate":${cB}}`), gV.set(cB, Bc)), Bc
    }

    function bV(cB) {
      return Number.isFinite(cB) && cB > 0 ? cB : 0
    }

    function Zn(cB, Bc) {
      for (let nc = 0; nc < 3; nc++) {
        const Vc = Math.abs(Bc[nc]);
        Yn[nc] = cB[nc] - Vc, Ln[nc] = 2 * Vc
      }
      return Number.isFinite(Yn[0] + Yn[1] + Yn[2] + Ln[0] + Ln[1] + Ln[2])
    }

    function Qn(cB, Bc) {
      return "pos1" === cB || "pos2" === cB ? void 0 : Bc
    }

    function Cn(cB, Bc, nc) {
      return cB.length > mB.sd.MaxOpts ? (nc(new Error(`${Bc}'s particle opts are over ${mB.sd.MaxOpts} bytes of JSON`)), null) : cB
    }
    const vV = {
      moveTo() {},
      setEmitRate() {},
      emit() {},
      emitPoints() {},
      setDirections() {},
      stop() {},
      dispose() {}
    };
    class Dn {
      constructor(cB) {
        this.deps = cB, this.session = 0, this.nextKey = 1, this.live = 0, this.started = !1
      }
      enabled() {
        return null !== this.sink()
      }
      sink() {
        return this.deps.isSessionLive() ? this.deps.cmd() : null
      }
      create(cB, Bc) {
        var nc;
        const Vc = this.sink(),
          Ic = null !== (nc = Bc.half) && void 0 !== nc ? nc : pn;
        if (!Vc || this.live >= mB.sd.MaxLiveKeys || this.nextKey > mB.sd.MaxKey || !Zn(Bc.pos, Ic)) return vV;
        const rB = this.nextKey,
          uc = Cn(function(cB) {
            var Bc, nc, Vc;
            const Ic = JSON.stringify({
              texture: "string" === typeof cB.texture ? cB.texture : "smokePuff",
              Qc: cB.Qc,
              minLifeTime: cB.minLifeTime,
              maxLifeTime: cB.maxLifeTime,
              minSize: cB.minSize,
              maxSize: cB.maxSize,
              minEmitPower: cB.minEmitPower,
              maxEmitPower: cB.maxEmitPower,
              emitRate: bV(cB.emitRate),
              gravity: null !== (Bc = cB.gravity) && void 0 !== Bc ? Bc : pn,
              dir1: null !== (nc = cB.dir1) && void 0 !== nc ? nc : zV,
              dir2: null !== (Vc = cB.dir2) && void 0 !== Vc ? Vc : zV,
              colorGradients: cB.colorGradients,
              blendMode: cB.blendMode
            });
            return lnc.encode(Ic)
          }(cB), "createParticles", this.deps.onError);
        return uc && (0, mB.Ue)(Vc, 0, rB, 0, mB.sd.PresetNone, 0, Yn, Ln, uc) ? (this.nextKey++, this.live++, this.started = !0, new Nn(this, this.session, rB, cB, Ic)) : vV
      }
      playEffect(cB) {
        const Bc = this.sink(),
          {
            pos1: nc,
            pos2: Vc
          } = cB;
        if (!Bc || !nc || !Vc) return;
        for (let rB = 0; rB < 3; rB++) Yn[rB] = Math.min(nc[rB], Vc[rB]), Ln[rB] = Math.abs(Vc[rB] - nc[rB]);
        if (!Number.isFinite(Yn[0] + Yn[1] + Yn[2] + Ln[0] + Ln[1] + Ln[2])) return;
        const Ic = Cn(lnc.encode(JSON.stringify(cB, Qn)), "playParticleEffect", this.deps.onError);
        Ic && (0, mB.Qe)(Bc, 0, 0, mB.sd.PresetNone, mB.sd.HasBox, 0, Yn, Ln, Ic)
      }
      burstPreset(cB, Bc, nc) {
        const Vc = this.sink(),
          Ic = Math.min(Math.floor(nc), mB.sd.MaxBurst);
        if (!Vc || !Object.hasOwn(mB.Wb, cB) || !(Ic > 0)) return;
        const rB = aV;
        for (let uc = 0; uc < 3; uc++) Yn[uc] = Bc[uc] - rB / 2, Ln[uc] = rB;
        Number.isFinite(Yn[0] + Yn[1] + Yn[2]) && (0, mB.Qe)(Vc, 0, 0, mB.Wb[cB], mB.sd.HasBox, Ic, Yn, Ln, hn)
      }
      sessionEnded() {
        this.session++;
        const cB = this.started ? this.deps.cmd() : null;
        return this.started = !1, this.nextKey = 1, this.live = 0, !cB || (0, mB.Ye)(cB, 0)
      }
      sinkFor(cB) {
        return cB === this.session ? this.deps.cmd() : null
      }
      stop(cB, Bc) {
        const nc = this.sinkFor(cB);
        nc && (0, mB.af)(nc, 0, Bc) && this.live--
      }
    }
    class Nn {
      constructor(cB, Bc, nc, Vc, Ic) {
        this.owner = cB, this.session = Bc, this.key = nc, this.half = void 0, this.rate = void 0, this.stopDelayMs = void 0, this.emitted = void 0, this.stopped = !1, this.freed = !1, this.half = [Math.abs(Ic[0]), Math.abs(Ic[1]), Math.abs(Ic[2])], this.rate = bV(Vc.emitRate), this.emitted = this.rate > 0;
        const rB = Vc.maxLifeTime * yV * 1e3 + 250;
        this.stopDelayMs = rB >= 0 ? Math.min(rB, 2147483647) : 250
      }
      sink() {
        return this.stopped ? null : this.owner.sinkFor(this.session)
      }
      moveTo(cB, Bc) {
        const nc = this.sink();
        if (nc) {
          if (Bc)
            for (let cB = 0; cB < 3; cB++) this.half[cB] = Math.abs(Bc[cB]);
          Zn(cB, this.half) && (0, mB.bf)(nc, 0, this.key, mB.sd.HasBox, Yn, Ln, hn)
        }
      }
      setEmitRate(cB) {
        const Bc = this.sink(),
          nc = bV(cB);
        Bc && nc !== this.rate && (0, mB.bf)(Bc, 0, this.key, 0, pn, pn, Un(nc)) && (this.rate = nc, this.emitted ||= nc > 0)
      }
      emit(cB) {
        const Bc = this.sink(),
          nc = Math.min(Math.floor(cB), mB.sd.MaxBurst);
        Bc && nc > 0 && (0, mB.Qe)(Bc, 0, this.key, mB.sd.PresetNone, 0, nc, pn, pn, hn) && (this.emitted = !0)
      }
      emitPoints(cB, Bc, nc) {
        const Vc = this.sink(),
          Ic = Math.min(Math.floor(nc), mB.sd.MaxPoints, Math.floor(Bc.length / 4));
        if (!Vc || !(Ic > 0) || !Number.isFinite(cB[0] + cB[1] + cB[2])) return;
        const rB = new Uint8Array(Bc.buffer, Bc.byteOffset, Ic * mB.sd.PointBytes);
        (0, mB.Te)(Vc, 0, this.key, Ic, cB, rB) && (this.emitted = !0)
      }
      setDirections(cB, Bc) {
        const nc = this.sink();
        if (!nc || !Number.isFinite(cB[0] + cB[1] + cB[2] + Bc[0] + Bc[1] + Bc[2])) return;
        const Vc = lnc.encode(JSON.stringify({
          dir1: [cB[0], cB[1], cB[2]],
          dir2: [Bc[0], Bc[1], Bc[2]]
        }));
        (0, mB.bf)(nc, 0, this.key, 0, pn, pn, Vc)
      }
      stop() {
        const cB = this.sink();
        this.stopped = !0, cB && (this.emitted ? (this.rate > 0 && (0, mB.bf)(cB, 0, this.key, 0, pn, pn, Un(0)), setTimeout((() => {
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
    const En = HB.i,
      onc = new TextDecoder;

    function Wn(cB, Bc) {
      const {
        serverIds: nc,
        kinds: Vc
      } = cB;
      let Ic = 0;
      for (let rB = 0; rB < nc.length; rB++) {
        const cB = nc[rB];
        if (cB !== mB.Oc && !hc(Vc[rB])) {
          if (Ic === Bc.length) {
            const cB = new Int32Array(Math.max(64, 2 * Ic));
            cB.set(Bc), Bc = cB
          }
          Bc[Ic++] = cB
        }
      }
      return {
        ids: Bc,
        count: Ic
      }
    }

    function wn(cB, Bc) {
      return cB.length >= Bc ? cB : new Int32Array(Math.max(Bc, 2 * cB.length))
    }

    function kV(cB, Bc, nc, Vc) {
      for (let Ic = 0; Ic < nc; Ic += 4096) {
        const rB = Math.min(4096, nc - Ic),
          uc = cB.memoryView(Int32Array, cB.scratch(), rB, "entity_info_batch's ids");
        if (!uc) return !1;
        uc.set(Bc.subarray(Ic, Ic + rB));
        const sc = cB.queries.entityInfoBatch(rB),
          Mc = 4294967295 === sc ? null : cB.memoryData(cB.scratch(), sc, 4, "entity_info_batch's records");
        if (!Mc) return !1;
        for (let cB = 0; cB + mB.Nb.BYTES <= sc;) {
          const Bc = mB.Nb.len(Mc, cB);
          Vc(mB.Nb.serverId(Mc, cB), Xn(Mc, cB, Bc)), cB += mB.Nb.BYTES + (0, Tc.Ld)(Bc)
        }
      }
      return !0
    }

    function Xn(cB, Bc, nc) {
      var Vc, Ic, rB;
      const uc = mB.Nb.kind(cB, Bc),
        sc = 0 === uc ? null : aB(uc);
      if (null === sc) return null;
      const Mc = mB.Nb.variation(cB, Bc),
        Pc = mB.Nb.pose(cB, Bc),
        qB = mB.Nb.meta(cB, Bc),
        Oc = mB.Nb.mesh(cB, Bc),
        Tc = 0 !== (mB.Nb.flags(cB, Bc) & mB.Kb.HasOpts),
        fc = En[sc];
      return Object.freeze({
        type: sc,
        variation: Mc === mB.Wc ? void 0 : null !== (Vc = null !== (Ic = null === fc || void 0 === fc ? void 0 : fc[Mc]) && void 0 !== Ic ? Ic : null === fc || void 0 === fc ? void 0 : fc[0]) && void 0 !== Vc ? Vc : "default",
        pose: Pc === mB.bc ? void 0 : null !== (rB = mB.zb[Pc]) && void 0 !== rB ? rB : mB.zb[0],
        metaInfo: qB === mB.bc ? void 0 : mB.Gc[qB],
        meshKind: Oc === mB.bc ? void 0 : mB.Dc[Oc],
        meshOpts: Tc ? onc.decode(new Uint8Array(cB.buffer, cB.byteOffset + Bc + mB.Nb.BYTES, nc)) : void 0
      })
    }
    const Hn = 1,
      Fn = 2;
    class Jn {
      constructor(cB) {
        this.deps = cB, this.wanted = 0, this.XB = !1, this.refused = !1
      }
      get on() {
        return this.XB
      }
      want(cB, Bc) {
        this.wanted = Bc ? this.wanted | cB : this.wanted & ~cB;
        const nc = 0 !== this.wanted;
        if (nc === this.XB) return;
        const Vc = this.deps.cmd();
        null !== Vc ? (0, mB.$f)(Vc, 0, nc ? 1 : 0) ? (this.XB = nc, this.refused = !1) : this.refused || (this.refused = !0, this.deps.onError(new Error("WatchEntityInfo didn't fit the command ring"))) : this.XB = !1
      }
    }
    class jV {
      constructor(cB) {
        this.deps = cB, this.entries = new Map, this.complete = !1, this.refill = !1, this.midFrame = !1, this.pending = new Int32Array(64), this.pendingCount = 0, this.ids = new Int32Array(64)
      }
      get(cB) {
        var Bc;
        return this.complete || this.fill(), null !== (Bc = this.entries.get("string" === typeof cB ? cB : String(cB))) && void 0 !== Bc ? Bc : null
      }
      inCoreCall() {
        this.midFrame = !0
      }
      stale(cB) {
        if (this.complete) {
          if (this.pendingCount === this.pending.length) {
            const cB = new Int32Array(2 * this.pending.length);
            cB.set(this.pending), this.pending = cB
          }
          this.pending[this.pendingCount++] = cB
        }
      }
      removed(cB) {
        this.entries.size > 0 && this.entries.delete(String(cB))
      }
      refresh() {
        const cB = this.pendingCount;
        if (this.pendingCount = 0, this.midFrame = !1, !this.deps.watch.on || this.refill) return this.complete = !1, void(this.refill = !1);
        if (cB > 0 && this.complete) {
          const {
            api: Bc
          } = this.deps;
          let nc = 0;
          const Vc = this.ids = wn(this.ids, cB);
          for (let Ic = 0; Ic < cB; Ic++) {
            const cB = this.pending[Ic],
              rB = Bc.indexById.get(cB);
            void 0 === rB || hc(Bc.kinds[rB]) ? this.entries.delete(String(cB)) : Vc[nc++] = cB
          }
          nc > 0 && !this.batch(Vc, nc) && (this.complete = !1)
        }
      }
      sessionEnded() {
        this.entries.clear(), this.complete = !1, this.refill = !1, this.midFrame = !1, this.pendingCount = 0, this.deps.watch.want(Hn, !1)
      }
      fill() {
        const {
          api: cB
        } = this.deps;
        if (this.complete = !0, this.pendingCount = 0, this.entries.clear(), this.deps.isSessionLive()) {
          const {
            watch: cB
          } = this.deps, Bc = cB.on;
          cB.want(Hn, !0), !Bc && cB.on && (this.refill = this.midFrame)
        }
        const {
          ids: Bc,
          count: nc
        } = Wn(cB, this.ids);
        this.ids = Bc, nc > 0 && !this.batch(Bc, nc) && (this.refill = !0)
      }
      batch(cB, Bc) {
        return kV(this.deps.api, cB, Bc, ((cB, Bc) => {
          null === Bc ? this.entries.delete(String(cB)) : this.entries.set(String(cB), Bc)
        }))
      }
    }
    var Rn = nc(3846);

    function iV(cB) {
      if ("message" !== cB.type || cB.Uu !== Rn.Nb.NewClientOptions || cB.payloadKind !== Tc.Mb.Msgpack) return null;
      const Bc = (0, Ec.c)(cB.payload);
      if (null === Bc || "object" !== typeof Bc || Array.isArray(Bc)) throw new Error("NewClientOptions whose body isn't an object of options");
      return Bc
    }
    var Kn = nc(1108),
      xV = nc(35270);

    function dn(cB, Bc, nc, Vc, Ic, rB, sc) {
      var Mc, Pc, qB;
      switch (cB) {
        case mB.Ud.ToggleMenu: {
          const cB = mB.E[Bc];
          uc.i.Vu("toggleMenu", void 0 === cB ? "inventory" : `inventory|${cB}`);
          break
        }
        case mB.Ud.EditBoard:
          uc.i.Vu("EditBoard", {
            pos: 0 === Bc ? null : nc
          });
          break;
        case mB.Ud.EditCodeBlock:
        case mB.Ud.ViewCodeBlock:
          uc.i.Vu("EditCodeBlock", {
            pos: nc,
            canChangePos: cB === mB.Ud.EditCodeBlock
          });
          break;
        case mB.Ud.EditCustomLobbyBlock:
          uc.i.Vu("EditCustomLobbyBlock", {
            pos: nc
          });
          break;
        case mB.Ud.OpenIronChest:
          uc.i.Vu("OpenIronChest", {
            pos: nc
          });
          break;
        case mB.Ud.EditNameTag:
          uc.i.Vu("EditNameTag", null !== (Mc = null === (Pc = Ic.XB()) || void 0 === Pc || null === (qB = Pc.attributes.customAttributes) || void 0 === qB ? void 0 : qB.text) && void 0 !== Mc ? Mc : "");
          break;
        case mB.Ud.EditBook: {
          var Oc, Tc, ec;
          const cB = null === (Oc = Ic.XB()) || void 0 === Oc ? void 0 : Oc.attributes;
          uc.i.Vu("EditBook", {
            pages: (0, Kn.R)(null === cB || void 0 === cB || null === (Tc = cB.customAttributes) || void 0 === Tc ? void 0 : Tc.pages),
            title: null !== (ec = null === cB || void 0 === cB ? void 0 : cB.customDisplayName) && void 0 !== ec ? ec : "Title",
            isPublished: !(null === cB || void 0 === cB || !cB.customDescription)
          });
          break
        }
        case mB.Ud.CantChangeBlock:
          ! function(cB, Bc) {
            const nc = Bc.getClientOption("cantChangeError"),
              Vc = Bc.getClientOption(cB ? "cantBuildError" : "cantBreakError"),
              Ic = cB ? nc : Vc;
            (Bc.getClientOption("canChange") || Ic || "You cannot modify this block" !== nc) && uc.i.Vu("showBottomMessage", {
              message: Vc || nc,
              type: "Error"
            })
          }(1 === Bc, rB);
          break;
        case mB.Ud.MiddleBarStart:
          uc.i.Vu("middleScreenBarInitiate", {
            duration: Vc,
            U3: 1 === nc[0],
            horizBarRemOffset: Bc
          });
          break;
        case mB.Ud.MiddleBarStop:
          uc.i.Vu("middleScreenBarRemove");
          break;
        case mB.Ud.Hitmarker:
          uc.i.Vu("localGunHitmarker", {
            y_: 1 === Bc
          });
          break;
        case mB.Ud.ShotsLeft:
          uc.i.Vu("localPlayerNewShotsLeft", Vc);
          break;
        case mB.Ud.AimingOverlay:
          uc.i.Vu("aimingOverlay", 3 === (3 & Bc) ? "sniper" : "none");
          break;
        case mB.Ud.BottomMessage:
          uc.i.Vu("showBottomMessage", JSON.parse(sc()));
          break;
        case mB.Ud.Crosshair:
          Ic.inaccuracy = (0, oc.e)(Vc), (0, xV.b)().crosshairAccuracy(Ic.inaccuracy);
          break;
        case mB.Ud.ChargeStage:
          break;
        case mB.Ud.EmoteWheelClose:
          uc.i.Vu("requestEmoteWheelClose");
          break;
        case mB.Ud.BlockMined:
          uc.i.Vu("localBlockMined");
          break;
        default:
          throw new fc.d(`UiEvent of no kind: what ${cB}`)
      }
    }
    var An = nc(36556),
      Gn = nc(8196),
      cI = nc(1602),
      BV = nc(35406),
      nV = nc(35325),
      VV = nc(3828);
    const IV = 10,
      rI = {
        player: [],
        chestOrCreative: [],
        chest: null,
        creative: !1,
        selectedSlot: 0,
        freeSlots: 0
      },
      uV = {
        items: [],
        ammo: 0,
        selectedSlot: 0
      },
      sV = {
        gun: !1,
        aimable: !1,
        chargeName: null
      };

    function MV(cB, Bc) {
      let nc, Vc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        Ic = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      const rB = () => (nc = (0, cI.q)(nc, Bc()), nc);
      return {
        current: rB,
        watch(Bc) {
          const nc = () => {
              Bc(rB())
            },
            uc = [cB.watch(nc)];
          return null !== Vc && uc.push((0, cI.u)((cB => {
            cB.some(Vc) && nc()
          }))), null !== Ic && uc.push(Ic(nc)), () => {
            for (const cB of uc) cB()
          }
        }
      }
    }

    function PV(cB) {
      return cB && {
        name: cB.name,
        amount: cB.amount,
        attributes: cB.attributes
      }
    }
    const qI = new WeakMap;

    function OV(cB) {
      let Bc = qI.get(cB);
      return void 0 === Bc && (Bc = (0, nV.creativeItemIds)().map((Bc => ({
        name: cB.nameOfId(Bc),
        amount: cB.isStackableId(Bc) ? 1 : null,
        attributes: (0, An.e)("Gun" === (0, nV.itemTypeOf)(Bc) ? {
          type: "Gun",
          clipSize: (0, nV.clipSizeOf)(Bc)
        } : void 0)
      }))), qI.set(cB, Bc)), Bc
    }

    function TV(cB, Bc, nc, Vc) {
      const Ic = Bc => (cB.flush(Vc), Bc),
        rB = nc => {
          var Vc, Ic, rB, uc, sc, Mc, Pc;
          const qB = cB.slot(nc);
          if (!qB) return null;
          const {
            rootName: Oc,
            metaStr: Tc
          } = Bc.getMetaInfo(qB.name);
          return {
            name: qB.name,
            amount: qB.amount,
            attributes: qB.attributes,
            instance: cB.instance(nc),
            displayName: null !== (Vc = qB.attributes.customDisplayName) && void 0 !== Vc ? Vc : Bc.getDisplayName(Oc),
            requiresAmmo: "RequiresAmmo" === Tc,
            clipSize: null !== (Ic = null !== (rB = null === (uc = qB.attributes.customAttributes) || void 0 === uc || null === (sc = uc.gunStats) || void 0 === sc ? void 0 : sc.clipSize) && void 0 !== rB ? rB : null === (Mc = Bc.getGunStats(Oc)) || void 0 === Mc ? void 0 : Mc.clipSize) && void 0 !== Ic ? Ic : null === (Pc = qB.typeObj) || void 0 === Pc ? void 0 : Pc.clipSize
          }
        },
        sc = function(cB, Bc) {
          let nc = null,
            Vc = {
              focus: null,
              recipes: [],
              detail: null
            },
            Ic = -1;
          const rB = new Set;
          return {
            read() {
              var rB, uc;
              if (null === nc) return null !== Vc.focus && (Vc = {
                ...Vc,
                focus: null
              }), Vc;
              if (Vc.focus === nc && Ic === cB.changes) return Vc;
              if (Ic = cB.changes, 0 === cB.length) return Vc = {
                focus: nc,
                recipes: [],
                detail: null
              }, Vc;
              let sc = 0;
              if (null !== nc.recipe) try {
                sc = Bc.getItemId(nc.recipe.name)
              } catch {}
              const Mc = cB.craftingView(nc.station, sc, null !== (rB = null === (uc = nc.recipe) || void 0 === uc ? void 0 : uc.lF) && void 0 !== rB ? rB : 0);
              return Vc = null === Mc ? {
                focus: nc,
                recipes: [],
                detail: null
              } : function(cB, Bc, nc) {
                let Vc = mB.gb.BYTES;
                const Ic = [];
                for (let qB = mB.gb.recipes(cB, 0); qB > 0; qB--) {
                  const nc = mB.$.flags(cB, Vc),
                    rB = {
                      name: Bc.nameOfId(mB.$.item(cB, Vc)),
                      lF: mB.$.recipe(cB, Vc),
                      requires: [],
                      produces: mB.$.produces(cB, Vc),
                      haveIngredients: 0 !== (nc & mB.Z.HaveIngredients),
                      listed: 0 !== (nc & mB.Z.Listed)
                    };
                  let uc = mB.$.requires(cB, Vc);
                  for (Vc += mB.$.BYTES; uc > 0; uc--) {
                    const nc = mB.bb.items(cB, Vc);
                    rB.requires.push({
                      items: eV(cB, Vc + mB.bb.BYTES, nc, Bc),
                      amt: mB.bb.amount(cB, Vc)
                    }), Vc += mB.bb.BYTES + 2 * nc
                  }
                  Ic.push(rB)
                }
                const rB = mB.gb.flags(cB, 0);
                if (null === nc.recipe || 0 === (rB & mB.db.Detail)) return {
                  focus: nc,
                  recipes: Ic,
                  detail: null
                };
                const uc = {},
                  sc = {};
                for (let qB = mB.gb.ingredients(cB, 0); qB > 0; qB--) {
                  const nc = mB.W.item(cB, Vc),
                    Ic = mB.W.from(cB, Vc),
                    rB = mB.W.amount(cB, Vc);
                  Vc += mB.W.BYTES;
                  const Mc = Ic === mB.C ? null : eV(cB, Vc, Ic, Bc);
                  if (null !== Mc && (Vc += 2 * Ic), 0 === nc) continue;
                  const Pc = Bc.nameOfId(nc);
                  uc[Pc] = rB, null !== Mc && (sc[Pc] = Mc)
                }
                const {
                  name: Mc,
                  lF: Pc
                } = nc.recipe;
                return {
                  focus: nc,
                  recipes: Ic,
                  detail: {
                    name: Mc,
                    lF: Pc,
                    craftAllTimes: mB.gb.craftAllTimes(cB, 0),
                    roomForOne: 0 !== (rB & mB.db.RoomForOne),
                    resultStackable: Boolean(Bc.getItemStat(Mc, "stackable")),
                    amounts: uc,
                    ingredientsCraftedFrom: sc
                  }
                }
              }(Mc, Bc, nc), Vc
            },
            setFocus(cB) {
              nc = cB;
              for (const Bc of [...rB]) Bc()
            },
            watchFocus: cB => (rB.add(cB), () => {
              rB.delete(cB)
            })
          }
        }(cB, Bc);
      return {
        states: {
          inventory: MV(cB, (() => {
            const nc = cB.length;
            if (0 === nc) return rI;
            const Vc = [];
            for (let Bc = 0; Bc < mB.id; Bc++) Vc.push(PV(cB.slot(Bc)));
            const Ic = cB.slotIcon,
              rB = Vc[cB.selectedSlot];
            0 !== Ic && rB && (Vc[cB.selectedSlot] = {
              ...rB,
              icon: Bc.nameOfId(Ic)
            });
            const uc = !0 === Bc.getClientOption("creative");
            let sc = [],
              Mc = null;
            if (nc > mB.id) {
              for (let Bc = mB.id; Bc < nc; Bc++) sc.push(PV(cB.slot(Bc)));
              Mc = {
                type: null,
                pos: [...cB.dD],
                numSlots: nc - mB.id,
                ironChest: null
              }
            } else uc && (sc = OV(Bc));
            return {
              player: Vc,
              chestOrCreative: sc,
              chest: Mc,
              creative: uc,
              selectedSlot: cB.selectedSlot,
              freeSlots: cB.freeSlots()
            }
          }), (0, cI.l)("creative")),
          hotbar: MV(cB, (() => {
            if (0 === cB.length) return uV;
            const Bc = [];
            for (let cB = 0; cB < IV; cB++) Bc.push(rB(cB));
            return {
              items: Bc,
              ammo: cB.amountOf("Ammo"),
              selectedSlot: cB.selectedSlot
            }
          }), (0, cI.i)("DisplayName", "GunStats")),
          crafting: MV(cB, sc.read, null, sc.watchFocus),
          heldItemAim: MV(cB, (() => {
            var Bc;
            if (!nc()) return sV;
            const Vc = null === (Bc = cB.XB()) || void 0 === Bc ? void 0 : Bc.typeObj,
              Ic = "Gun" === (null === Vc || void 0 === Vc ? void 0 : Vc.type);
            return {
              gun: Ic,
              aimable: Ic || !0 === (null === Vc || void 0 === Vc ? void 0 : Vc.showsAimingUi),
              chargeName: "Chargeable" === (null === Vc || void 0 === Vc ? void 0 : Vc.type) ? Vc.name : null
            }
          }), null, (cB => function(cB, Bc) {
            let nc = cB();
            return (0, VV.v)((() => {
              const Vc = cB();
              Vc !== nc && (nc = Vc, Bc(Vc))
            }))
          }(nc, cB)))
        },
        events: {
          hotbarSlotRequested: (0, cI.e)("setSelectedInventorySlotI"),
          hotbarScrolled: (0, cI.e)("ScrollInventorySlot"),
          numberKeyPressed: (0, cI.e)("numkeyPressed"),
          inventoryDropRequested: (0, cI.e)("DropInvenItem"),
          chestToggled: (0, cI.e)("chestToggleFromServer"),
          chestRefreshed: (0, cI.e)("chestRefreshedFromServer", mI),
          inventorySynced: (0, cI.e)("syncedInvenFromServer", mI),
          enchantingTableOpened: (0, cI.e)("enchantingTable", (cB => {
            let {
              position: nc,
              Zr: Vc
            } = cB;
            return {
              position: [...nc],
              blockName: Bc.getMetaInfo(Vc).rootName
            }
          }))
        },
        commands: {
          selectHotbarSlot(Bc) {
            cB.selectSlot(Bc), cB.flush(Vc)
          },
          removeInventoryItem(Bc) {
            let {
              slot: nc,
              amount: Vc,
              drop: rB
            } = Bc;
            return Ic(cB.remove(nc, Vc, rB))
          },
          swapInventorySlots(Bc) {
            let {
              a: nc,
              b: Vc
            } = Bc;
            return Ic(cB.swap(nc, Vc, !1))
          },
          moveInventoryItem(Bc) {
            let {
              from: nc,
              to: Vc,
              amount: rB
            } = Bc;
            return Ic(cB.move(nc, Vc, rB))
          },
          quickMoveInventoryItem(Bc) {
            let {
              slot: nc,
              start: Vc,
              end: rB,
              amount: uc
            } = Bc;
            return Ic(cB.quickMove(nc, Vc, rB, uc))
          },
          closeChest() {
            cB.closeChest(), cB.flush(Vc), uc.i.Vu("chestClosedByPlayer")
          },
          focusCrafting(cB) {
            sc.setFocus(cB)
          },
          craftRecipe(Bc) {
            let {
              name: nc,
              lF: Vc,
              times: rB
            } = Bc;
            return Ic(cB.craft(nc, Vc, rB))
          },
          salvageItem(Bc) {
            let {
              slot: nc,
              name: Vc,
              amount: rB
            } = Bc;
            return Ic(cB.salvage(nc, Vc, rB))
          },
          enchantItem(Bc) {
            let {
              slot: nc,
              level: Vc,
              tablePos: Ic
            } = Bc;
            cB.enchant(nc, Vc, Ic)
          }
        },
        queries: {
          enchantingOffer(nc) {
            let {
              slot: Vc,
              blockName: Ic
            } = nc;
            return function(cB, Bc, nc, Vc) {
              const Ic = cB.slot(nc);
              if (!Ic || !Bc.getClientOption("canCraft") || !(0, Gn.p)(Vc) || (0, Gn.o)(Ic.attributes)) return fV;
              const rB = (0, nV.enchantmentPerksOf)(Bc.getItemId(Ic.name));
              if (0 === rB.length) return fV;
              const uc = [];
              for (let sc = 0; sc < BV.b; sc++) {
                const {
                  commonProb: cB,
                  uncommonProb: Bc,
                  rareProb: nc,
                  epicProb: Ic,
                  legendaryProb: rB,
                  level: Mc
                } = (0, Gn.f)(Vc, sc);
                uc.push({
                  level: Mc,
                  odds: [cB, Bc, nc, Ic, rB].map((cB => 100 * cB))
                })
              }
              return {
                perks: [...rB],
                options: uc
              }
            }(cB, Bc, Vc, Ic)
          }
        }
      }
    }
    const fV = Object.freeze({
      perks: [],
      options: []
    });

    function mI() {
      return null
    }

    function eV(cB, Bc, nc, Vc) {
      const Ic = [];
      for (let rB = 0; rB < nc; rB++) {
        const nc = cB.getUint16(Bc + 2 * rB, !0);
        0 !== nc && Ic.push(Vc.nameOfId(nc))
      }
      return Ic
    }
    class tI {
      constructor(cB) {
        this.api = cB, this.positions = new Map, this.targeted = {
          WIc: 0,
          position: [0, 0, 0],
          normal: [0, 0, 0],
          Xr: [0, 0, 0]
        }, this.hasTarget = !1, this.breaking = [0, 0, 0], this.isBreaking = !1
      }
      position(cB) {
        let Bc = this.positions.get(cB);
        return Bc || (this.api.checkValid(cB) || this.api.isLocal(cB) ? (Bc = [NaN, NaN, NaN], this.api.readPosition(cB, Bc), this.positions.set(cB, Bc), Bc) : null)
      }
      Isc() {
        return this.hasTarget ? this.targeted : null
      }
      breakingPosition() {
        return this.isBreaking ? this.breaking : null
      }
      refresh() {
        for (const [Bc, nc] of this.positions) this.api.readPosition(Bc, nc) || this.api.checkValid(Bc) || this.api.isLocal(Bc) || this.positions.delete(Bc);
        const cB = this.api.apiView;
        if (this.refreshTarget(), this.isBreaking = 0 !== (mB.v.playerFlags(cB, 0) & mB.vd.Breaking) && mB.v.breakingProgress(cB, 0) >= 0, this.isBreaking)
          for (let Bc = 0; Bc < 3; Bc++) this.breaking[Bc] = mB.v.breakingPos(cB, 0, Bc)
      }
      refreshTarget() {
        const cB = this.api.apiView,
          Bc = mB.v.targetBlockId(cB, 0);
        if (this.hasTarget = Bc !== mB.Sc, this.hasTarget) {
          const nc = this.targeted;
          nc.WIc = Bc;
          for (let Bc = 0; Bc < 3; Bc++) nc.position[Bc] = mB.v.targetBlock(cB, 0, Bc), nc.normal[Bc] = mB.v.targetNormal(cB, 0, Bc), nc.Xr[Bc] = mB.v.targetAdjacent(cB, 0, Bc)
        }
      }
      despawned(cB) {
        const Bc = this.positions.get(cB);
        Bc && !this.api.isLocal(cB) && (Bc.fill(NaN), this.positions.delete(cB))
      }
    }
    var SV = nc(38636),
      yI = nc(38623),
      zI = nc(35397);
    const pV = 1,
      hV = 2;
    class aI {
      constructor() {
        this.game = new zI.g, this.client = new zI.g, this.XB = 0
      }
      setGame(cB) {
        if (null === cB || "object" !== typeof cB) return !1;
        const {
          key: Bc,
          value: nc
        } = cB;
        return "string" === typeof Bc && (this.game.setBooleanType(Bc, Boolean(nc)), !0)
      }
      setClient(cB, Bc) {
        this.client.setBooleanType(cB, Bc)
      }
      clearGame() {
        this.game = new zI.g
      }
      perms() {
        return (this.game._getTotalBooleanVal() ? pV : 0) | (this.client._getTotalBooleanVal() ? hV : 0)
      }
      write(cB) {
        const Bc = this.perms();
        return Bc === this.XB || !(!cB || !(0, mB.ke)(cB, 0, mB.Pb.Keep, Bc)) && (this.XB = Bc, !0)
      }
    }
    class lV {
      constructor(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => 35;
        this.api = cB, this.screenBandPct = void 0, this.clipX = 0, this.clipY = 0, this.clipW = 0, this.eye = [0, 0, 0], this.forward = [0, 0, 1], this.along = [0, 0, 0], this.screenBandPct = {
          x: sc.d,
          get y() {
            return Bc()
          }
        }
      }
      get hasView() {
        const cB = this.api.apiView,
          Bc = mB.v.viewProj;
        return 0 !== Bc(cB, 0, 3) || 0 !== Bc(cB, 0, 7) || 0 !== Bc(cB, 0, 11) || 0 !== Bc(cB, 0, 15)
      }
      get cameraPosition() {
        const cB = this.api.apiView,
          {
            eye: Bc
          } = this;
        for (let nc = 0; nc < 3; nc++) Bc[nc] = mB.v.eye(cB, 0, nc);
        return Bc
      }
      get cameraDirection() {
        const cB = this.api.apiView,
          Bc = mB.v.viewProj,
          nc = Bc(cB, 0, 3),
          Vc = Bc(cB, 0, 7),
          Ic = Bc(cB, 0, 11),
          rB = Math.hypot(nc, Vc, Ic),
          {
            forward: uc
          } = this;
        return rB > 0 && (uc[0] = nc / rB, uc[1] = Vc / rB, uc[2] = Ic / rB), uc
      }
      get cameraHeading() {
        return mB.v.heading(this.api.apiView, 0)
      }
      get cameraPitch() {
        return mB.v.pitch(this.api.apiView, 0)
      }
      get tanHalfFovX() {
        return mB.v.tanHalfFovX(this.api.apiView, 0)
      }
      get tanHalfFovY() {
        return mB.v.tanHalfFovY(this.api.apiView, 0)
      }
      projectWorldPosToScreenPos(cB) {
        this.clip(cB);
        const {
          clipX: Bc,
          clipY: nc,
          clipW: Vc
        } = this;
        if (Vc > 0) {
          const cB = Bc / Vc * 50,
            Ic = -nc / Vc * 50;
          return Math.abs(cB) <= this.screenBandPct.x && Math.abs(Ic) <= this.screenBandPct.y ? {
            x: 50 + cB,
            y: 50 + Ic
          } : this.clampToBand(cB, Ic)
        }
        const Ic = this.cameraPosition,
          rB = Math.hypot(cB[0] - Ic[0], cB[1] - Ic[1], cB[2] - Ic[2]),
          uc = this.api.apiView,
          sc = mB.v.viewProj,
          Mc = rB > 0 ? Bc / rB : 0,
          Pc = rB > 0 ? -nc / rB : 0,
          qB = Math.hypot(sc(uc, 0, 1), sc(uc, 0, 5), sc(uc, 0, 9)),
          Oc = Mc / Math.hypot(sc(uc, 0, 0), sc(uc, 0, 4), sc(uc, 0, 8)),
          Tc = Pc / qB,
          fc = !(Math.abs(Oc) >= .001 || Math.abs(Tc) >= .001);
        return this.clampToBand(Mc, fc ? -(qB || 1) : Pc)
      }
      projectDirectionToScreenPos(cB) {
        if (!this.hasView) return;
        const Bc = this.cameraPosition,
          nc = this.along;
        for (let Vc = 0; Vc < 3; Vc++) nc[Vc] = Bc[Vc] + 10 * cB[Vc];
        return this.projectWorldPosToScreenPos(nc)
      }
      projectWorldPosToViewport(cB) {
        this.clip(cB);
        const {
          clipX: Bc,
          clipY: nc,
          clipW: Vc
        } = this;
        return Vc > 0 ? {
          x: 50 + Bc / Vc * 50,
          y: 50 - nc / Vc * 50
        } : null
      }
      clip(cB) {
        const Bc = this.api.apiView,
          nc = cB[0] - mB.v.origin(Bc, 0, 0),
          Vc = cB[1] - mB.v.origin(Bc, 0, 1),
          Ic = cB[2] - mB.v.origin(Bc, 0, 2),
          rB = mB.v.viewProj;
        this.clipX = rB(Bc, 0, 0) * nc + rB(Bc, 0, 4) * Vc + rB(Bc, 0, 8) * Ic + rB(Bc, 0, 12), this.clipY = rB(Bc, 0, 1) * nc + rB(Bc, 0, 5) * Vc + rB(Bc, 0, 9) * Ic + rB(Bc, 0, 13), this.clipW = rB(Bc, 0, 3) * nc + rB(Bc, 0, 7) * Vc + rB(Bc, 0, 11) * Ic + rB(Bc, 0, 15)
      }
      clampToBand(cB, Bc) {
        return (0, sc.g)(cB, Bc, this.screenBandPct.x, this.screenBandPct.y)
      }
    }
    var YV = nc(3857);
    const LV = new TextEncoder,
      gI = new Uint8Array(mB.I * mB.F);
    class UV {
      constructor() {
        this.buttons = [], this.XB = !0
      }
      set(cB) {
        this.buttons = cB, this.XB = !1
      }
      attached() {
        this.XB = 0 === this.buttons.length
      }
      write(cB) {
        if (this.XB) return;
        const Bc = new Uint8Array(mB.I),
          nc = new Uint8Array(mB.I);
        let Vc = 0,
          Ic = 0;
        for (const {
            id: rB,
            keycode: uc
          }
          of this.buttons) {
          if (Vc === mB.I) break;
          const {
            read: cB,
            written: sc
          } = LV.encodeInto(rB, gI.subarray(Ic, Ic + mB.F));
          if (cB < rB.length) continue;
          const Mc = YV.k[uc];
          Bc[Vc] = "number" === typeof Mc ? Mc : 0, nc[Vc] = sc, Vc++, Ic += sc
        }
        this.XB = (0, mB.be)(cB, 0, Vc, Bc, nc, gI.subarray(0, Ic))
      }
    }

    function bI(cB, Bc, nc) {
      const Vc = LV.encode(Bc);
      return Vc.length <= mB.F && function(cB, Bc, nc, Vc) {
        return (0, jn.b)(), (0, mB.ef)(cB, Bc, nc, Vc)
      }(cB, 0, nc ? 1 : 0, Vc)
    }
    const ZV = new TextDecoder;
    class QV {
      constructor(cB) {
        var Bc;
        this.options = cB, this.renderFrame = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.entityInfo = void 0, this.entityInfoWatch = void 0, this.particles = void 0, this.clientApi = void 0, this.scriptedCamera = void 0, this.owners = [], this.tickers = [], this.renderers = [], this.receivers = [], this.failures = [], this.vetoSet = !1, this.hooksSet = !1, this.writtenPublicLobby = !1, this.promptWatch = !1, this.promptWatchSent = !1, this.customButtons = new UV, this.generation = 0, this.sessionLive = !1, this.boundId = 0, this.session = null, this.activeConn = 0, this.closedThrough = 0, this.openSocket = 0, this.socketLeftSinceAttach = !1, this.ticks = 0, this.zoomUnshown = !1, this.zoomHeld = !1, this.overflowGen = 0, this.resyncOwed = !1, this.zoom = 0, this.pendingZoom = null, this.cmd = null, this.freeCam = new aI, this.stopped = () => !1, this.onError = void 0, this.api = void 0, this.tables = void 0, this.itemSources = null, this.fault = void 0, this.PV = cB => {
          if ((0, fc.k)(cB)) throw cB;
          this.onError(cB)
        }, this.api = cB.api, this.tables = cB.tables, this.onError = null !== (Bc = cB.onError) && void 0 !== Bc ? Bc : cB => {
          console.error("Error in client game callback", cB)
        }, this.renderFrame = new lV(this.api, cB.screenBandY), this.live = new tI(this.api), this.chunks = new PB(this.api.memory, (() => this.api.apiView)), this.items = new Sn({
          api: this.api,
          tables: cB.tables,
          cmd: () => this.cmd,
          onError: this.onError,
          beforeOp: cB.beforeOp
        });
        const nc = () => this.stopped() ? null : this.cmd,
          Vc = () => this.sessionLive;
        this.entityInfoWatch = new Jn({
          cmd: nc,
          onError: this.onError
        }), this.entityInfo = new jV({
          api: this.api,
          watch: this.entityInfoWatch,
          isSessionLive: Vc
        }), this.particles = new Dn({
          cmd: nc,
          isSessionLive: Vc,
          onError: this.onError
        }), this.clientApi = new Mn({
          api: this.api,
          live: this.live,
          chunks: this.chunks,
          items: this.items,
          entityInfo: this.entityInfo,
          particles: this.particles,
          tables: cB.tables,
          cmd: nc,
          sendCmd: () => this.sendCmd(),
          isSessionLive: Vc,
          beforeWrite: () => {
            var Bc;
            if (this.stopped()) return !1;
            const nc = this.generation;
            return !1 !== (null === (Bc = cB.beforeWrite) || void 0 === Bc ? void 0 : Bc.call(cB)) && nc === this.generation
          },
          playerDbId: () => {
            const cB = this.session;
            if (null === cB) throw new Error("No game session has started, so the local player has no DB id");
            return cB.playerDbId
          },
          playSound: cB.playSound,
          hasPackModel: cB.hasPackModel
        }), this.scriptedCamera = new Rc({
          api: this.api,
          cmd: () => this.stopped() ? null : this.cmd,
          screen: cB.cameraScreen,
          showFacing: cB.showCameraFacing
        })
      }
      get itemBridgeSources() {
        return this.itemSources ??= TV(this.items, this.tables, (() => this.localPlayerAlive()), this.PV), this.itemSources
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
      clickCodeBlock(cB) {
        const Bc = this.sessionLive ? this.sendCmd() : null;
        return null !== Bc && (nc = Bc, Vc = 0, Ic = cB[0], rB = cB[1], uc = cB[2], (0, jn.b)(), (0, mB.de)(nc, Vc, Ic, rB, uc));
        var nc, Vc, Ic, rB, uc
      }
      cameraZoom() {
        return this.zoom
      }
      setCameraZoom(cB) {
        const Bc = this.liveCmd();
        return null === Bc ? (this.pendingZoom = cB, !1) : (this.pendingZoom = null, (0, mB.Vf)(Bc, 0, cB, 1))
      }
      respawn() {
        const cB = this.sessionLive ? this.sendCmd() : null;
        return null !== cB && (Bc = cB, nc = 0, (0, jn.b)(), (0, mB.sf)(Bc, nc));
        var Bc, nc
      }
      bindCustomButtonKeys(cB) {
        this.customButtons.set(cB)
      }
      pressCustomButton(cB, Bc) {
        const nc = this.sessionLive ? this.sendCmd() : null;
        return null !== nc && bI(nc, cB, Bc)
      }
      padMove(cB, Bc, nc, Vc, Ic, rB) {
        const uc = this.liveCmd();
        return null !== uc && (0, mB.Me)(uc, 0, cB, Bc, nc, Vc, Ic, rB)
      }
      thirdPersonFor(cB) {
        const Bc = this.liveCmd();
        return null !== Bc && (0, mB.Zf)(Bc, 0, null !== cB && void 0 !== cB ? cB : 1 / 0)
      }
      send(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Vc = 0 !== this.openSocket || this.sessionLive ? this.sendCmd() : null;
        return null !== Vc && RB(Vc, nc ? Tc.Dc : 0, cB, (0, Ec.g)(Bc))
      }
      socketAttached(cB) {
        this.openSocket = cB, this.socketLeftSinceAttach = !1
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
      attach(cB) {
        const Bc = () => cB.isStopped;
        this.stopped = Bc, this.cmd = cB.rings.cmd, this.promptWatchSent = !1, this.writePromptWatch(), this.customButtons.attached(), this.writeCustomButtons();
        const nc = this.api.apiView;
        this.overflowGen = mB.v.eventOverflowGen(nc, 0), this.resyncOwed = 0 !== mB.v.eventOverflowMask(nc, 0), cB.setGameHost(this), cB.setEventWalker((cB => {
          this.api.walk(cB, this, Bc)
        }))
      }
      watchPromptPick(cB) {
        this.promptWatch = cB, this.writePromptWatch()
      }
      get promptEntity() {
        return !this.promptWatch || this.stopped() ? null : CV(mB.v.promptEntity(this.api.apiView, 0))
      }
      closeGame() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        (0 === cB || cB >= this.openSocket) && (this.openSocket = 0), this.closedThrough = Math.max(this.closedThrough, cB, this.activeConn), this.activeConn = 0, this.endSession(), this.endGameGrants(), this.dropGameCamera()
      }
      gameCamera(cB) {
        0 !== this.activeConn && this.scriptedCamera.settingsChanged(cB)
      }
      netEvent(cB) {
        "connection" === cB.type ? cB.phase === Tc.A.Activated && cB.conn !== this.activeConn && cB.conn > this.closedThrough ? (this.endSession(), this.activeConn = cB.conn, this.endGameGrants(), this.dropGameCamera()) : cB.phase !== Tc.A.Left && cB.phase !== Tc.A.Closed || cB.conn !== this.activeConn || this.closeGame() : cB.conn === this.activeConn && 0 !== cB.conn && (cB.Uu === yI.x ? this.gunHit(cB.payload) : cB.Uu === Rn.Nb.EditItemCraftingRecipes || cB.Uu === yI.X ? this.items.touch() : (this.serverOptions(cB), this.gameMessage(cB)));
        const Bc = this.options.onNetEvent;
        Bc && this.guard((() => {
          Bc(cB)
        }))
      }
      serverOptions(cB) {
        const Bc = this.options.serverOptions,
          nc = Bc ? this.decoded(iV, cB) : null;
        Bc && nc && this.guard((() => {
          Bc.applyNewClientOptions(nc)
        }))
      }
      gameMessage(cB) {
        let Bc = null;
        try {
          Bc = function(cB) {
            if ("message" !== cB.type || cB.Uu !== Rn.Nb.GameCodeMessage || cB.payloadKind !== Tc.Mb.Msgpack) return null;
            const Bc = (0, Ec.c)(cB.payload);
            if (null === Bc || "object" !== typeof Bc || "string" !== typeof Bc.messageType) throw new Error("GameCodeMessage without a messageType");
            return Bc
          }(cB)
        } catch (nc) {
          this.sessionLive && this.onError(nc)
        }
        if (Bc) {
          const {
            messageType: cB,
            data: nc
          } = Bc;
          if ((0, bB.i)(cB)) return void this.guard((() => {
            (0, bB.e)(cB, nc)
          }));
          "freeCamPerms" === cB && this.freeCam.setGame(nc) && this.writeFreeCam(), this.sessionLive && this.round(this.receivers, (Bc => {
            Bc.onReceivedMessageFromServer(cB, nc)
          }))
        }
      }
      decoded(cB, Bc) {
        try {
          return cB(Bc)
        } catch (nc) {
          return this.onError(nc), null
        }
      }
      setClientFreeCameraGrant(cB, Bc) {
        this.freeCam.setClient(cB, Bc), this.writeFreeCam()
      }
      localPlayerBound(cB) {
        if (0 === this.activeConn || this.sessionLive && cB === this.boundId) return;
        const Bc = this.sessionLive;
        let nc, Vc, Ic, rB;
        this.endSession(), Bc && this.restartGameCamera();
        try {
          var uc;
          this.session = null;
          const cB = this.options.sessionInfo(this.activeConn);
          if (this.session = cB, !cB) return;
          nc = cB.gameNameWithVariation, Vc = null !== (uc = (0, gB.Ab)(nc)) && void 0 !== uc ? uc : void 0, Ic = (0, Uc.t)(cB.lobbyName), rB = (0, Uc.F)(cB.lobbyName)
        } catch (tB) {
          return void this.onError(tB)
        }
        const sc = {
          localPlayerId: String(cB)
        };
        let Mc = {},
          Pc = {};
        try {
          var qB, Oc;
          Mc = null !== (qB = null === (Oc = this.options.gameFactory((0, gB.Db)(nc))) || void 0 === Oc ? void 0 : Oc(rB, Ic, Vc, sc)) && void 0 !== qB ? qB : {}
        } catch (tB) {
          this.PV(tB)
        }
        try {
          var Tc, fc;
          Pc = {
            ...null === (Tc = (fc = this.options).defaultPlugins) || void 0 === Tc ? void 0 : Tc.call(fc, rB, Ic, Vc, sc),
            ...Mc.plugins
          }
        } catch (tB) {
          this.PV(tB)
        }
        const mB = [Mc, ...Object.values(Pc)];
        this.owners = mB, this.tickers = mB.filter((cB => void 0 !== cB.cn)), this.renderers = mB.filter((cB => void 0 !== cB.onAfterRender)), this.receivers = mB.filter((cB => void 0 !== cB.onReceivedMessageFromServer)), this.writeAltVeto(mB), this.writeHooks(mB), this.writePublicLobby(rB), this.boundId = cB, this.sessionLive = !0, this.generation++, null !== this.pendingZoom && this.setCameraZoom(this.pendingZoom), this.round(mB, (cB => {
          var Bc;
          null === (Bc = cB.onCreate) || void 0 === Bc || Bc.call(cB, this.clientApi)
        }));
        const ec = this.generation;
        setTimeout((() => {
          ec === this.generation && !0 === this.tables.getClientOption("creative") && OV(this.tables)
        }), 0)
      }
      chunkSlot(cB, Bc, nc, Vc, Ic, rB) {
        this.chunks.apply(cB, Bc, nc, Vc, Ic, rB)
      }
      entityAdded(cB) {
        var Bc;
        this.entityInfo.stale(cB), null === (Bc = this.options.replayEntities) || void 0 === Bc || Bc.entityAdded(cB)
      }
      entityInfoChanged(cB) {
        var Bc;
        this.entityInfo.stale(cB), null === (Bc = this.options.replayEntities) || void 0 === Bc || Bc.entityInfoChanged(cB)
      }
      afterPrescan() {
        this.items.refresh(), this.entityInfo.refresh(), this.api.rereadDirectory(), this.chunks.refresh(), this.live.refresh()
      }
      tickEnd() {
        if (this.ticks++, this.tickers.length > 0) {
          const cB = performance.now();
          this.round(this.tickers, vI), (0, VV.c)(performance.now() - cB)
        }
      }
      afterWalk(cB) {
        this.ackEventOverflow(), this.clientApi.flushOwed();
        const Bc = this.options.replayEntities;
        Bc && this.guard((() => {
          this.entityInfoWatch.want(Fn, Bc.wantsWatch), Bc.flush(this.entityInfoWatch.on)
        }));
        const nc = (0, VV.l)(cB, mB.v.frameMs(this.api.apiView, 0));
        if (null !== nc) {
          const cB = this.renderFrame;
          this.guard((() => {
            (0, xV.b)().turnDamageIndicators(cB.cameraHeading)
          })), this.guard((() => {
            this.clientApi.slideRoute(nc)
          })), this.round(this.renderers, (Bc => {
            Bc.onAfterRender(nc, cB)
          }))
        }
        this.writeFreeCam();
        try {
          this.scriptedCamera.afterFrame(null !== nc)
        } catch (Ic) {
          this.PV(Ic)
        }
        this.showZoom(), this.items.flush(this.PV), this.writePromptWatch(), this.writeCustomButtons();
        const Vc = this.ticks;
        this.ticks = 0, (0, VV.i)(Vc, cB, nc, this.PV)
      }
      entityRemoved(cB) {
        this.live.despawned(cB), this.entityInfo.removed(cB)
      }
      ackEventOverflow() {
        const cB = this.api.apiView,
          Bc = mB.v.eventOverflowGen(cB, 0),
          nc = Bc - this.overflowGen >>> 0;
        if (0 === nc && !this.resyncOwed) return;
        this.overflowGen = Bc;
        const Vc = mB.v.eventOverflowMask(cB, 0),
          Ic = this.cmd;
        0 === Vc || null === Ic || this.stopped() ? this.resyncOwed = !1 : this.resyncOwed = !(0, mB.he)(Ic, 0, Vc);
        const rB = this.options.onEventOverflow;
        0 !== nc && rB && this.guard((() => {
          rB(Vc, nc)
        }))
      }
      gameCall(cB, Bc, nc, Vc, Ic, rB, uc, sc, Mc) {
        if (cB === mB.$b.Director) try {
          return this.scriptedCamera.call(Bc, nc, Vc, Ic, rB, uc)
        } catch (Pc) {
          return this.PV(Pc), mB.ib.None
        }
        if (!this.sessionLive || void 0 !== this.fault) return cB === mB.$b.AltVeto ? 1 : 0;
        try {
          return this.callGames(cB, Bc, nc, Vc, Ic, rB, uc, sc)
        } catch (Pc) {
          throw (0, fc.k)(Pc) && (this.fault = Pc), Pc
        }
      }
      takeFault() {
        const cB = this.fault;
        return this.fault = void 0, cB
      }
      callGames(cB, Bc, nc, Vc, Ic, rB, uc, sc) {
        this.api.rereadDirectory(), this.chunks.touch(), this.items.refresh(), this.live.refresh(), this.entityInfo.inCoreCall();
        const {
          tables: Mc
        } = this.options, Pc = String(this.boundId);
        switch (cB) {
          case mB.$b.AltVeto:
          case mB.$b.AltAction: {
            const sc = 0 !== uc,
              [qB, Oc, Tc] = sc ? [Bc, nc, Vc] : [void 0, void 0, void 0],
              fc = sc ? Mc.nameOfId(Ic) : "Air",
              ec = CV(rB);
            if (cB === mB.$b.AltAction) return this.first((cB => {
              var Bc;
              return null === (Bc = cB.onPlayerAltAction) || void 0 === Bc ? void 0 : Bc.call(cB, Pc, qB, Oc, Tc, fc, ec)
            })), 0;
            return "preventAction" === this.first((cB => {
              var Bc;
              return null === (Bc = cB.onPlayerAttemptAltAction) || void 0 === Bc ? void 0 : Bc.call(cB, Pc, qB, Oc, Tc, fc, ec)
            })) ? 0 : 1
          }
          case mB.$b.Click: {
            const cB = sc,
              qB = 0 !== (cB & mB.Q.Alt),
              Oc = 0 !== (cB & mB.Q.HasPos),
              Tc = Oc ? Mc.nameOfId(Ic) : "Air",
              [fc, ec, tB] = Oc ? [Bc, nc, Vc] : [null, null, null],
              Sc = CV(rB),
              yB = 0 !== (cB & mB.Q.Up),
              zB = CV(uc);
            if (0 === (cB & mB.Q.AttackOnly) && this.first((cB => {
                var Bc, nc;
                return yB ? null === (Bc = cB.onPlayerClickUp) || void 0 === Bc ? void 0 : Bc.call(cB, Pc, qB, fc, ec, tB, Tc, Sc) : null === (nc = cB.onPlayerClick) || void 0 === nc ? void 0 : nc.call(cB, Pc, qB, fc, ec, tB, Tc, Sc)
              })), !yB && !qB && null !== zB) {
              const cB = this.clientApi.getPositionView(zB),
                Bc = cB ? [cB[0], cB[1], cB[2]] : [0, 0, 0];
              this.first((cB => {
                var nc;
                return null === (nc = cB.onPlayerAttackEntity) || void 0 === nc ? void 0 : nc.call(cB, Pc, zB, Bc)
              }))
            }
            return 0
          }
          case mB.$b.ChangeBlock: {
            const cB = Mc.nameOfId(Ic),
              uc = Mc.nameOfId(rB);
            return this.first((Ic => {
              var rB;
              return null === (rB = Ic.onPlayerChangeBlock) || void 0 === rB ? void 0 : rB.call(Ic, Pc, Bc, nc, Vc, cB, uc)
            })), 0
          }
          case mB.$b.DropItem: {
            const cB = Mc.nameOfId(Bc);
            return this.first((Bc => {
              var Ic;
              return null === (Ic = Bc.onPlayerDropItem) || void 0 === Ic ? void 0 : Ic.call(Bc, Pc, cB, nc, Vc)
            })), 0
          }
          default:
            return this.onError(new Error(`Unknown game call kind ${cB}`)), 0
        }
      }
      changeBlockFail(cB, Bc, nc, Vc, Ic, rB, uc) {
        const sc = Ic === mB.Mc ? null : ZV.decode(this.api.eventBytes(rB, Math.min(Ic, uc)));
        this.failures.push({
          E1: [cB, Bc, nc],
          I9: Vc,
          u9: sc
        })
      }
      changeBlockFailEnd() {
        const cB = this.failures;
        this.failures = [], this.sessionLive && this.round(this.owners, (Bc => {
          var nc;
          null === (nc = Bc.onChangeBlockFail) || void 0 === nc || nc.call(Bc, cB)
        })), this.Vu("EditBoard", {
          pos: null
        }), this.Vu("EditCodeBlock", {
          pos: null,
          canChangePos: null
        })
      }
      inventoryEvent(cB, Bc, nc, Vc, Ic, rB) {
        cB === mB.nc.ChestOpened ? this.items.chestOpened(nc, Vc, Ic) : cB !== mB.nc.Synced && cB !== mB.nc.ChestClosed && cB !== mB.nc.ChestRefreshed || this.items.touch(), this.guard((() => {
          ! function(cB, Bc, nc, Vc) {
            switch (cB) {
              case mB.nc.Synced:
                uc.i.Vu("syncedInvenFromServer");
                break;
              case mB.nc.ChestOpened:
              case mB.nc.ChestClosed:
                uc.i.Vu("chestToggleFromServer", cB === mB.nc.ChestOpened, !0);
                break;
              case mB.nc.ChestRefreshed:
                uc.i.Vu("chestRefreshedFromServer");
                break;
              case mB.nc.EnchantingTable:
                uc.i.Vu("enchantingTable", {
                  Zr: Vc,
                  position: nc
                });
                break;
              case mB.nc.HotbarRequest:
                uc.i.Vu("setSelectedInventorySlotI", Bc, !0);
                break;
              case mB.nc.Scrolled:
                uc.i.Vu("ScrollInventorySlot", Bc);
                break;
              case mB.nc.NumberKey:
                uc.i.Vu("numkeyPressed", Bc + 1);
                break;
              case mB.nc.DropRequested:
                uc.i.Vu("DropInvenItem", 0 !== Bc);
                break;
              default:
                throw new fc.d(`InventoryEvent of no kind: what ${cB}`)
            }
          }(cB, Bc, [nc, Vc, Ic], rB)
        }))
      }
      heldItemChanged() {
        this.items.touch()
      }
      shotDamage(cB, Bc, nc, Vc) {
        this.Vu("shotPlayer", {
          playerId: String(cB),
          damage: Bc,
          wasCrit: 0 !== Vc,
          distance: nc
        })
      }
      localHurt(cB, Bc) {
        this.Vu("closeShopOnDamaged", null), this.guard((() => {
          uc.i.Vu("damagedByOtherPlayer", {
            K9: null,
            direction: Number.isNaN(Bc) ? null : Bc,
            ycc: cB
          })
        }))
      }
      attackHit(cB, Bc, nc, Vc, Ic) {
        this.guard((() => {
          uc.i.Vu("yourAttackHit", {
            y_: Vc,
            screenPos: this.renderFrame.projectDirectionToScreenPos([cB, Bc, nc]),
            hitSelf: Ic
          })
        }))
      }
      physicsType(cB) {
        this.Vu("PlayerPhysicsTypeUpdate", cB)
      }
      vehicleEffect(cB, Bc, nc, Vc, Ic) {
        this.guard((() => {
          cB === Tc.Rc.UPDATE ? (0, Qc.h)(Bc, {
            icon: nc,
            level: Vc,
            displayName: null,
            durationMs: Ic
          }) : Zc.c.remove(Bc)
        }))
      }
      zoomChanged(cB) {
        this.zoom = cB, this.zoomUnshown = !0
      }
      zoomDisabled() {
        this.Vu("showBottomMessage", {
          message: "Zoom is disabled",
          timeoutLength: 2e3,
          type: "Error"
        })
      }
      showZoom() {
        const cB = this.scriptedCamera.holdsView();
        !this.zoomUnshown || cB && this.zoomHeld || (this.zoomUnshown = !1, this.Vu("cameraZoomSet", this.zoom)), this.zoomHeld = cB
      }
      gunHit(cB) {
        this.guard((() => {
          const {
            K9: Bc,
            B3: nc
          } = (0, SV.c)(yI.x, cB);
          uc.i.Vu("damagedByOtherPlayer", {
            K9: Bc,
            direction: nc
          })
        }))
      }
      uiEvent(cB, Bc, nc, Vc, Ic, rB, uc, sc) {
        this.guard((() => {
          dn(cB, Bc, [nc, Vc, Ic], rB, this.items, this.options.tables, (() => ZV.decode(this.api.eventBytes(uc, sc))))
        }))
      }
      writeAltVeto(cB) {
        const Bc = this.cmd;
        if (!Bc) return;
        let nc;
        try {
          nc = function(cB, Bc) {
            const nc = new Set;
            let Vc = !1;
            for (const Ic of cB)
              if (Ic.onPlayerAttemptAltAction) {
                if (Vc = !0, !Ic.altVetoBlocks) return {
                  mode: mB.Xd.All,
                  roots: []
                };
                for (const cB of Ic.altVetoBlocks) nc.add(Bc.getMetaInfo(cB).rootId)
              } return Vc ? nc.size > mB.Bc ? {
              mode: mB.Xd.All,
              roots: []
            } : {
              mode: mB.Xd.Filter,
              roots: [...nc]
            } : {
              mode: mB.Xd.Off,
              roots: []
            }
          }(cB, this.options.tables)
        } catch (Ic) {
          this.onError(Ic), nc = {
            mode: mB.Xd.All,
            roots: []
          }
        }
        if (nc.mode === mB.Xd.Off && !this.vetoSet) return;
        const Vc = new Uint8Array(new Uint32Array(nc.roots).buffer);
        (0, mB.Bf)(Bc, 0, nc.mode, nc.roots.length, Vc) ? this.vetoSet = nc.mode !== mB.Xd.Off: this.onError(new Error("SetAltVeto didn't fit the command ring"))
      }
      endGameGrants() {
        this.freeCam.clearGame(), this.writeFreeCam()
      }
      writeFreeCam() {
        this.stopped() || this.freeCam.write(this.cmd)
      }
      writeHooks(cB) {
        const Bc = this.cmd;
        if (!Bc) return;
        const nc = function(cB) {
          let Bc = 0;
          for (const nc of cB) nc.onPlayerAltAction && (Bc |= 1 << mB.$b.AltAction), (nc.onPlayerClick || nc.onPlayerClickUp || nc.onPlayerAttackEntity) && (Bc |= 1 << mB.$b.Click), nc.onPlayerChangeBlock && (Bc |= 1 << mB.$b.ChangeBlock), nc.onPlayerDropItem && (Bc |= 1 << mB.$b.DropItem);
          return Bc
        }(cB);
        (0 !== nc || this.hooksSet) && ((0, mB.Pf)(Bc, 0, nc) ? this.hooksSet = 0 !== nc : this.onError(new Error("SetHooks didn't fit the command ring")))
      }
      writeCustomButtons() {
        const cB = this.cmd;
        cB && !this.stopped() && this.customButtons.write(cB)
      }
      writePromptWatch() {
        const cB = this.cmd,
          Bc = this.promptWatch;
        Bc !== this.promptWatchSent && cB && !this.stopped() && (0, mB.dg)(cB, 0, Bc ? 1 : 0) && (this.promptWatchSent = Bc)
      }
      writePublicLobby(cB) {
        const Bc = this.cmd;
        Bc && cB !== this.writtenPublicLobby && ((0, mB.Uf)(Bc, 0, cB ? 1 : 0) ? this.writtenPublicLobby = cB : this.onError(new Error("SetPublicLobby didn't fit the command ring")))
      }
      first(cB) {
        const Bc = this.generation;
        for (const Vc of this.owners) {
          if (Bc !== this.generation) break;
          try {
            const Bc = cB(Vc);
            if (void 0 !== Bc) return Bc
          } catch (nc) {
            this.PV(nc)
          }
        }
      }
      Vu(cB, Bc) {
        this.guard((() => {
          uc.i.Vu(cB, Bc)
        }))
      }
      dropGameCamera() {
        try {
          this.scriptedCamera.reset()
        } catch (cB) {
          this.PV(cB)
        }
      }
      restartGameCamera() {
        try {
          this.scriptedCamera.restart()
        } catch (cB) {
          this.PV(cB)
        }
      }
      endSession() {
        if (!this.sessionLive) return;
        this.sessionLive = !1;
        const cB = this.owners;
        let Bc;
        if (this.owners = this.tickers = this.renderers = this.receivers = [], this.generation++, !this.stopped()) try {
          this.writeAltVeto([]), this.writeHooks([]), this.writePublicLobby(!1)
        } catch (Vc) {
          Bc = Vc
        }
        try {
          this.entityInfo.sessionEnded()
        } catch (Vc) {
          Bc ??= Vc
        }
        this.round(cB, DV, !0);
        try {
          this.particles.sessionEnded() || this.onError(new Error("ParticleStopAll didn't fit the command ring"))
        } catch (Vc) {
          Bc ??= Vc
        }
        try {
          this.clientApi.disposeGameOutput()
        } catch (Vc) {
          Bc ??= Vc
        }
        const nc = this.options.onSessionEnd;
        if (nc) try {
          nc()
        } catch (Vc) {
          this.onError(Vc)
        }
        void 0 !== Bc && this.PV(Bc)
      }
      round(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Vc = this.generation;
        for (const rB of cB) {
          if (Vc !== this.generation) break;
          try {
            Bc(rB)
          } catch (Ic) {
            nc ? this.onError(Ic) : this.PV(Ic)
          }
        }
      }
      guard(cB) {
        try {
          cB()
        } catch (Bc) {
          this.PV(Bc)
        }
      }
    }

    function CV(cB) {
      return cB === mB.Nc ? null : String(cB)
    }

    function vI(cB) {
      cB.cn(Tc.Ic)
    }

    function DV(cB) {
      var Bc;
      null === (Bc = cB.onClose) || void 0 === Bc || Bc.call(cB)
    }

    function NV(cB, Bc) {
      cB.watch((() => {
        const nc = function(cB) {
          let Bc = 0;
          const nc = Math.min(IV, cB.length);
          for (let Ic = 0; Ic < nc; Ic++) {
            var Vc;
            const nc = null === (Vc = cB.slot(Ic)) || void 0 === Vc ? void 0 : Vc.typeObj,
              rB = nc ? (0, nV.gunTypeOf)(nc.id) : void 0;
            void 0 !== rB && (Bc |= 1 << hB[rB])
          }
          return Bc
        }(cB);
        0 !== nc && (Bc.preload(nc), Bc.preload(1 << an))
      }))
    }
    var EV = nc(3907),
      oV = nc(35371);

    function WV(cB) {
      const Bc = new EV.Howl({
          ...(0, oV.f)(cB),
          pool: 15,
          preload: !1
        }),
        nc = Bc.load.bind(Bc);
      return Bc.load = () => (Bc._preload = !0, nc()), Bc
    }

    function wV(cB, Bc, nc) {
      const Vc = cB.listener;
      if (Vc.positionX) kI(Vc.positionX, Bc, nc, 0), kI(Vc.positionY, Bc, nc, 1), kI(Vc.positionZ, Bc, nc, 2), kI(Vc.forwardX, Bc, nc, 3), kI(Vc.forwardY, Bc, nc, 4), kI(Vc.forwardZ, Bc, nc, 5), kI(Vc.upX, Bc, nc, 6), kI(Vc.upY, Bc, nc, 7), kI(Vc.upZ, Bc, nc, 8);
      else {
        let cB = !1;
        for (let Vc = 0; Vc < 9; Vc++) cB ||= Bc[Vc] !== nc[Vc];
        cB && (Vc.setPosition(Bc[0], Bc[1], Bc[2]), Vc.setOrientation(Bc[3], Bc[4], Bc[5], Bc[6], Bc[7], Bc[8]), nc.set(Bc))
      }
    }

    function kI(cB, Bc, nc, Vc) {
      Bc[Vc] !== nc[Vc] && (cB.value = Bc[Vc], nc[Vc] = Bc[Vc])
    }
    class XV {
      constructor() {
        this.pose = new Float64Array(9), this.written = new Float64Array(9).fill(Number.NaN), this.watchedCtx = void 0
      }
      apply(cB) {
        this.pose.set(cB);
        const Bc = EV.d.ctx;
        return !!Bc && (Bc !== this.watchedCtx && (this.watchedCtx = Bc, this.written.fill(Number.NaN), Bc.addEventListener("statechange", (() => {
          "running" === Bc.state && wV(Bc, this.pose, this.written)
        }))), "running" === Bc.state && wV(Bc, cB, this.written), !0)
      }
    }
    var HV = nc(35219),
      FV = nc(37637);
    let JV = null,
      jI = null;

    function RV() {
      return null === JV && (JV = document.createElement("div"), JV.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;pointer-events:none", document.body.append(JV)), JV
    }

    function iI() {
      return jI ??= new FV.b(new HV.e(RV)), jI
    }

    function KV() {
      var cB;
      null === (cB = jI) || void 0 === cB || cB.clear(), xI(null)
    }

    function xI(cB) {
      Vc.d.get("scriptedCameraFacing") !== cB && Vc.d.set({
        scriptedCameraFacing: cB
      })
    }
    var dV = nc(8327),
      AV = nc(8290),
      GV = nc(37658),
      cr = nc(38754),
      BI = nc(2444);
    const nI = Object.entries(mB.Xb).reduce(((cB, Bc) => {
      let [nc, Vc] = Bc;
      return cB[Vc] = nc, cB
    }), []);

    function VI(cB, Bc) {
      var nc;
      return 0 !== ((null !== (nc = cB.itemFlags[Bc]) && void 0 !== nc ? nc : 0) & mB.qc.Stackable)
    }
    const II = /^(0|[1-9][0-9]*)$/,
      rr = {
        displayName: (cB, Bc) => (0, nV.displayNameOf)(Bc),
        description: (cB, Bc) => (0, nV.descriptionOf)(Bc),
        type: (cB, Bc) => (0, nV.itemTypeOf)(Bc),
        clipSize: (cB, Bc) => (0, nV.clipSizeOf)(Bc),
        armourReduction: (cB, Bc) => (0, nV.armourReductionOf)(Bc),
        scopeType: (cB, Bc) => (0, nV.scopeTypeOf)(Bc),
        stackable: VI,
        harvestType: (cB, Bc) => nI[cB.blockHarvestTypes[Bc]],
        harvestLevel: (cB, Bc) => {
          const nc = cB.blockHarvestLevels[Bc];
          return nc === mB.wc ? void 0 : nc
        },
        harvests: (cB, Bc) => {
          var nc;
          const Vc = null !== (nc = cB.itemHarvests[Bc]) && void 0 !== nc ? nc : 0;
          return 0 !== Vc ? nI[Vc] : void 0 === (0, nV.harvestsNullLevelOf)(Bc) ? void 0 : null
        },
        level: (cB, Bc) => {
          var nc, Vc;
          const Ic = null !== (nc = cB.itemLevels[Bc]) && void 0 !== nc ? nc : mB.wc;
          return Ic !== mB.wc ? Ic : null !== (Vc = (0, nV.harvestsNullLevelOf)(Bc)) && void 0 !== Vc ? Vc : void 0
        }
      };

    function uI(cB, Bc, nc) {
      return MI(new Uint8Array(Math.floor(cB.length / Bc)), cB, Bc, nc)
    }

    function sI(cB, Bc, nc) {
      return MI(new Uint16Array(Math.floor(cB.length / Bc)), cB, Bc, nc)
    }

    function MI(cB, Bc, nc, Vc) {
      const Ic = new DataView(Bc.buffer, Bc.byteOffset, Bc.byteLength);
      for (let rB = 0; rB < cB.length; rB++) cB[rB] = Vc(Ic, rB * nc);
      return cB
    }
    class PI {
      constructor(cB, Bc) {
        this.options = Bc, this.metas = [], this.types = new Map, this.props = void 0, this.rootIdOf = cB => {
          const Bc = this.idOf(cB);
          if (void 0 === Bc) throw new Error(`No item is named ${cB}, an item's root`);
          return Bc
        };
        const nc = Bc => {
            const nc = Bc();
            return new Uint8Array(cB.memory().buffer, cB.scratch(), nc).slice()
          },
          Vc = (new TextDecoder).decode(nc((() => cB.queries.itemNames()))).split("\n"),
          Ic = nc((() => cB.queries.blockProps())),
          rB = nc((() => cB.queries.itemProps()));
        this.props = {
          blockFlags: uI(Ic, mB.z.BYTES, mB.z.flags),
          blockHarvestTypes: uI(Ic, mB.z.BYTES, mB.z.harvestType),
          blockHarvestLevels: uI(Ic, mB.z.BYTES, mB.z.harvestLevel),
          blockAttachedTops: sI(Ic, mB.z.BYTES, mB.z.attachedTop),
          itemFlags: uI(rB, mB.tc.BYTES, mB.tc.flags),
          itemHarvests: uI(rB, mB.tc.BYTES, mB.tc.harvests),
          itemLevels: uI(rB, mB.tc.BYTES, mB.tc.level)
        }, (0, BI.k)(Object.freeze(Vc)), (0, cr.e)()
      }
      idOf(cB) {
        if ("number" === typeof cB) return void 0 === (0, BI.f)(cB) ? void 0 : cB;
        const Bc = (0, BI.e)(cB);
        return void 0 === Bc && II.test(cB) ? void 0 === (0, BI.f)(+cB) ? void 0 : +cB : Bc
      }
      getMetaInfo(cB) {
        if (!cB || cB === dV.b) return dV.f;
        const Bc = this.idOf(cB);
        if (void 0 === Bc) throw new Error(`Item ${cB} not found in registry`);
        return this.metaOf(Bc)
      }
      blockRootId(cB) {
        return 0 !== cB && void 0 !== (0, BI.f)(cB) ? this.metaOf(cB).rootId : cB
      }
      metaOf(cB) {
        return this.metas[cB] ??= (0, AV.i)((0, BI.f)(cB), cB, this.rootIdOf, (0, nV.rootMetaDescOf)(cB))
      }
      getItemId(cB) {
        if (!cB || cB === dV.b) return 0;
        const Bc = this.idOf(cB);
        if (void 0 === Bc) throw new Error(`Invalid block name. You sent ${cB}. The only valid item names are 'Air' and those contained within the blockMetadata/itemMetadata files`);
        return Bc
      }
      getItemName(cB) {
        if (!cB || cB === dV.b) return dV.b;
        const Bc = this.idOf(cB);
        if (void 0 === Bc) throw new Error(`Item ${cB} not found in registry`);
        return (0, BI.f)(Bc)
      }
      blockNameToBlockId(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (cB === dV.b) return 0;
        let nc = this.idOf(cB);
        if (void 0 === nc || !this.isBlockId(nc)) {
          const Bc = cB.indexOf("|"),
            Vc = Bc > 0 ? (0, BI.e)(cB.slice(0, Bc)) : void 0;
          nc = void 0 !== Vc && this.isBlockId(Vc) && (0, nV.rootMetaDescOf)(Vc) === cB ? Vc : void 0
        }
        if (void 0 !== nc) return nc;
        if (!Bc) throw new Error(`Invalid block name. You sent ${cB}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`);
        return null
      }
      isBlockId(cB) {
        return cB > 0 && cB < this.props.blockFlags.length
      }
      nameOfId(cB) {
        return 0 !== cB && (0, BI.f)(cB) || dV.b
      }
      itemType(cB) {
        const Bc = cB ? this.idOf(cB) : void 0;
        if (!Bc) return null;
        let nc = this.types.get(Bc);
        return void 0 === nc && (nc = Object.freeze({
          id: Bc,
          name: (0, BI.f)(Bc),
          meta: this.getMetaInfo(Bc),
          stackable: VI(this.props, Bc),
          type: (0, nV.itemTypeNameOf)(Bc),
          clipSize: (0, nV.clipSizeOf)(Bc),
          scopeType: (0, nV.scopeTypeOf)(Bc),
          showsAimingUi: (0, nV.showsAimingUi)(Bc)
        }), this.types.set(Bc, nc)), nc
      }
      getItemStat(cB, Bc) {
        if (GV.b.has(Bc)) {
          const nc = "minChargeStateToUse" === Bc ? this.getMetaInfo(cB).rootName : this.getItemName(cB),
            Vc = this.options.get((0, GV.c)(nc, Bc));
          if (null !== Vc && void 0 !== Vc) return Vc
        }
        return this.defaultStat(cB, Bc, this.statOf(Bc))
      }
      getDisplayName(cB) {
        return this.getItemStat(cB, "displayName")
      }
      getDefaultItemStat(cB, Bc) {
        return this.defaultStat(cB, Bc, this.statOf(Bc))
      }
      statOf(cB) {
        const Bc = rr[cB];
        return void 0 === Bc && function(cB, Bc) {
          throw new Error(`ClientApi.${cB} is not available yet in the wasm client (${Bc})`)
        }(`getItemStat("${cB}")`, `a table of the stat: the wasm client answers ${Object.keys(rr).join(", ")}`), Bc
      }
      defaultStat(cB, Bc, nc) {
        const Vc = this.idOf(cB),
          Ic = void 0 === Vc ? void 0 : nc(this.props, Vc);
        return null !== Ic && void 0 !== Ic || "displayName" !== Bc ? Ic : this.getItemName(cB)
      }
      getClientOption(cB) {
        return this.options.get(cB)
      }
      getGunStats(cB) {
        return this.getClientOption(`${cB}GunStats`)
      }
      watchClientOption(cB, Bc) {
        return this.options.subscribe(cB, Bc)
      }
      isSolidBlockId(cB) {
        var Bc;
        return 0 !== ((null !== (Bc = this.props.blockFlags[cB]) && void 0 !== Bc ? Bc : 0) & mB.x.Solid)
      }
      isStackableId(cB) {
        return VI(this.props, cB)
      }
      isFluidBlockId(cB) {
        var Bc;
        return 0 !== ((null !== (Bc = this.props.blockFlags[cB]) && void 0 !== Bc ? Bc : 0) & mB.x.Fluid)
      }
      canPlaceOverBlockId(cB) {
        var Bc;
        return 0 !== ((null !== (Bc = this.props.blockFlags[cB]) && void 0 !== Bc ? Bc : 0) & mB.x.PlaceOver)
      }
      attachedTopOf(cB) {
        var Bc;
        return null !== (Bc = this.props.blockAttachedTops[cB]) && void 0 !== Bc ? Bc : 0
      }
      isDroplessBlockId(cB) {
        return (0, nV.dropsNothing)(cB)
      }
    }

    function qr(cB, Bc) {
      const nc = new Map;
      return (Vc, Ic) => {
        const rB = Bc.idOf(Vc),
          uc = void 0 === rB ? null : (Vc => {
            let Ic = nc.get(Vc);
            if (void 0 === Ic) {
              const rB = cB.queries.salvageRecipe(Vc),
                uc = new DataView(cB.memory().buffer, cB.scratch(), rB),
                sc = [];
              for (let cB = 0; cB + mB.Jd.BYTES <= rB; cB += mB.Jd.BYTES) sc.push(Object.freeze({
                item: Bc.nameOfId(mB.Jd.item(uc, cB)),
                amt: mB.Jd.amount(uc, cB)
              }));
              Ic = 0 === sc.length ? null : Object.freeze(sc), nc.set(Vc, Ic)
            }
            return Ic
          })(rB);
        if (null === uc || void 0 === Ic) return uc;
        const sc = Ic <= 0 ? 1 : Ic;
        return uc.map((cB => {
          let {
            item: Bc,
            amt: nc
          } = cB;
          return {
            item: Bc,
            amt: nc * sc
          }
        }))
      }
    }
    var OI = nc(38890),
      TI = nc(35557),
      fI = nc(35551),
      mr = nc(35584),
      eI = nc(35136),
      tr = nc(38696),
      SI = nc(40530);
    const yr = -1,
      zr = new Uint8Array(0),
      pI = new TextEncoder;

    function hI(cB) {
      if (null === cB) return null;
      const Bc = pI.encode(cB);
      return Bc.byteLength < Tc.cc ? Bc : Bc.subarray(0, Tc.cc - 1)
    }
    class ar {
      constructor(cB) {
        this.deps = cB, this.lastView = null, this.lastKeyframes = [], this.keyframesVersion = yr, this.keyframesSettled = !1, this.reloadFrom = yr
      }
      reloadKeyframes() {
        var cB, Bc;
        this.keyframesVersion = yr, this.reloadFrom = null !== (cB = null === (Bc = this.view()) || void 0 === Bc ? void 0 : Bc.version) && void 0 !== cB ? cB : yr
      }
      setPlayback(cB) {
        const Bc = 1 === this.deps.core.OOc(cB);
        return Bc && (this.lastView = null, this.lastKeyframes = [], this.keyframesVersion = yr, this.reloadFrom = yr), Bc
      }
      async open(cB) {
        const Bc = await this.deps.replay.open(cB);
        return "opening" === Bc && (this.reloadKeyframes(), this.deps.recorder.prefetch()), Bc
      }
      play() {
        this.deps.replay.play()
      }
      pause() {
        this.deps.replay.pause()
      }
      seek(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.deps.replay.seek(Math.max(0, Math.floor(cB)), Bc)
      }
      setSpeed(cB) {
        this.deps.replay.setSpeed(cB)
      }
      setCameraMode(cB) {
        this.deps.replay.setCameraMode(SI.d.indexOf(cB))
      }
      view() {
        var cB;
        const Bc = mB.v.replayViewPtr(this.deps.apiView(), 0);
        if (0 === Bc) return this.lastView = null, null;
        const nc = new DataView(this.deps.buffer(), Bc, mB.Bd.BYTES),
          Vc = mB.Bd.version(nc, 0),
          Ic = this.lastView;
        if (null !== Ic && Ic.version === Vc) return Ic;
        const rB = mB.Bd.markIn(nc, 0),
          uc = {
            version: Vc,
            state: mB.Bd.state(nc, 0),
            cameraMode: null !== (cB = SI.d[mB.Bd.cameraMode(nc, 0)]) && void 0 !== cB ? cB : "recording",
            cn: mB.Bd.cn(nc, 0),
            totalTicks: mB.Bd.totalTicks(nc, 0),
            speed: mB.Bd.speed(nc, 0),
            mark: rB === mB.zd ? null : {
              inTick: rB,
              outTick: mB.Bd.markOut(nc, 0)
            },
            editVersion: mB.Bd.editVersion(nc, 0)
          };
        return this.lastView = uc, uc
      }
      keyframes() {
        const cB = this.view();
        if (null === cB) return [];
        cB.version !== this.reloadFrom && (this.reloadFrom = yr);
        const Bc = this.reloadFrom === yr && cB.state !== Tc.Ac.Cropping && cB.state !== Tc.Ac.None,
          nc = Bc ? cB.editVersion : cB.version;
        if (nc === this.keyframesVersion && Bc === this.keyframesSettled) return this.lastKeyframes;
        const {
          core: Vc
        } = this.deps, Ic = Vc.TOc(), rB = Vc.Gu(), uc = [];
        if (0 !== rB && Ic > 0) {
          const cB = new DataView(this.deps.buffer(), rB, Ic * Tc.Rb);
          for (let Bc = 0; Bc < Ic; Bc++) {
            const nc = Bc * Tc.Rb,
              Vc = Bc => cB.getFloat64(nc + Bc, !0);
            uc.push({
              cn: cB.getUint32(nc + Tc.bc, !0),
              position: [Vc(Tc.Zb), Vc(Tc.Zb + 8), Vc(Tc.Zb + 16)],
              direction: [Vc(Tc.Sb), Vc(Tc.Sb + 8), Vc(Tc.Sb + 16)],
              easing: [Vc(Tc.Vb), Vc(Tc.Vb + 8), Vc(Tc.Vb + 16), Vc(Tc.Vb + 24)]
            })
          }
        }
        return this.keyframesVersion = nc, this.keyframesSettled = Bc, this.lastKeyframes = uc, uc
      }
      addKeyframe() {
        const cB = this.deps.apiView(),
          Bc = [mB.v.eye(cB, 0, 0), mB.v.eye(cB, 0, 1), mB.v.eye(cB, 0, 2)];
        return this.deps.replay.addKeyframe(Bc, function(cB, Bc) {
          const nc = Math.cos(Bc);
          return [nc * Math.sin(cB), -Math.sin(Bc), nc * Math.cos(cB)]
        }(mB.v.heading(cB, 0), mB.v.pitch(cB, 0)))
      }
      setKeyframe(cB) {
        return this.deps.replay.setKeyframe(cB.cn, Float64Array.from([...cB.position, ...cB.direction, ...cB.easing]))
      }
      moveKeyframe(cB, Bc) {
        return this.deps.replay.moveKeyframe(cB, Bc)
      }
      deleteKeyframes(cB, Bc) {
        return this.deps.replay.deleteKeyframes(cB, Bc)
      }
      setMark(cB) {
        var Bc, nc;
        return this.deps.replay.setMark(null !== (Bc = null === cB || void 0 === cB ? void 0 : cB.inTick) && void 0 !== Bc ? Bc : -1, null !== (nc = null === cB || void 0 === cB ? void 0 : cB.outTick) && void 0 !== nc ? nc : -1)
      }
      crop(cB, Bc) {
        const nc = this.deps.replay.crop(cB, Bc);
        return nc && this.reloadKeyframes(), nc
      }
      save(cB) {
        return this.deps.replay.askSave(), this.deps.recorder.saveEdited(cB)
      }
      recorderControl(cB) {
        this.deps.recorder.control(cB)
      }
      recorderPrefs(cB, Bc) {
        this.deps.recorder.prefs(cB, Bc)
      }
      recorderOption(cB, Bc) {
        const nc = this.deps.cmd();
        return null !== nc && (0, mB.lf)(nc, 0, cB, null === Bc ? zr : pI.encode(Bc))
      }
      recordFlyingText(cB, Bc, nc, Vc) {
        const Ic = this.deps.cmd(),
          rB = Math.max(0, Math.min(4294967295, Math.round(Vc)));
        return null !== Ic && (0, mB.if)(Ic, 0, Bc, nc, rB, pI.encode(cB))
      }
      recordPlayerKilled(cB, Bc, nc, Vc) {
        const Ic = this.deps.cmd();
        return null !== Ic && (0, mB.of)(Ic, 0, cB, Bc, Math.max(0, nc), pI.encode(Vc))
      }
      recordKillfeed(cB, Bc, nc) {
        var Vc, Ic;
        const rB = this.deps.cmd(),
          uc = function(cB) {
            const Bc = cB.reduce(((cB, Bc) => {
                var nc;
                return cB + Rn.U + (null !== (nc = null === Bc || void 0 === Bc ? void 0 : Bc.byteLength) && void 0 !== nc ? nc : 0)
              }), 0),
              nc = new Uint8Array(Bc),
              Vc = new DataView(nc.buffer);
            let Ic = 0;
            for (const uc of cB) {
              var rB;
              Vc.setUint16(Ic, null !== (rB = null === uc || void 0 === uc ? void 0 : uc.byteLength) && void 0 !== rB ? rB : Tc.cc, !0), Ic += Rn.U, null !== uc && (nc.set(uc, Ic), Ic += uc.byteLength)
            }
            return nc
          }([hI(cB.name), hI(cB.colour), hI(Bc.name), hI(Bc.colour), hI(nc)]);
        return null !== rB && (0, mB.kf)(rB, 0, null !== (Vc = cB.id) && void 0 !== Vc ? Vc : mB.Oc, null !== (Ic = Bc.id) && void 0 !== Ic ? Ic : mB.Oc, uc)
      }
      recorderSession(cB, Bc) {
        this.deps.recorder.session({
          session: Bc,
          lobbyType: cB.lobbyType,
          game: cB.gameNameWithVariation,
          lobby: cB.lobbyName
        })
      }
      recorderClose() {
        this.deps.core.fOc()
      }
      filePartDone(cB, Bc) {
        this.deps.recorder.filePartDone(cB, Bc)
      }
      fileDone(cB) {
        this.deps.recorder.fileDone(cB)
      }
    }
    const lI = -2147483648;
    class YI {
      constructor(cB) {
        var Bc;
        this.deps = cB, this.state = {
          recording: !1,
          clipping: !1,
          hasClipBuffer: !1,
          seconds: 0
        }, this.recordingSince = null, this.clipTickPending = !1, this.now = void 0, this.now = null !== (Bc = cB.now) && void 0 !== Bc ? Bc : () => performance.now()
      }
      get current() {
        return this.state
      }
      get live() {
        var cB, Bc, nc;
        return null === (cB = null === (Bc = (nc = this.deps).live) || void 0 === Bc ? void 0 : Bc.call(nc)) || void 0 === cB || cB
      }
      activated(cB) {
        var Bc, nc;
        this.live && (this.viewerShown(!0 === (null === (Bc = (nc = this.deps).viewerOpen) || void 0 === Bc ? void 0 : Bc.call(nc))), this.deps.client.recorderSession(cB, (0, SI.h)()))
      }
      closed() {
        this.deps.client.recorderClose()
      }
      toggleRecording() {
        var cB, Bc;
        this.live && (this.state.recording || !0 !== (null === (cB = (Bc = this.deps).viewerOpen) || void 0 === cB ? void 0 : cB.call(Bc))) ? this.deps.client.recorderControl(Tc.nc.ToggleRecording) : this.deps.notify(mr.b.closeViewerFirst)
      }
      saveClip() {
        this.live ? this.deps.client.recorderControl(Tc.nc.SaveClip) : this.deps.notify(mr.b.clippingNotOn)
      }
      viewerShown(cB) {
        this.live && this.deps.client.recorderControl(cB ? Tc.nc.ViewerOpened : Tc.nc.ViewerClosed)
      }
      setPrefs(cB, Bc) {
        this.live && this.deps.client.recorderPrefs(cB, Bc)
      }
      setOption(cB, Bc) {
        this.live && this.deps.client.recorderOption(cB, Bc)
      }
      recordFlyingText(cB, Bc, nc, Vc) {
        this.live && this.deps.client.recordFlyingText(cB, Bc, nc, Vc)
      }
      recordPlayerKilled(cB, Bc, nc, Vc) {
        this.live && this.deps.client.recordPlayerKilled(cB, Bc, nc, Vc)
      }
      recordKillfeed(cB, Bc, nc) {
        this.live && this.deps.client.recordKillfeed(cB, Bc, nc)
      }
      cn() {
        let cB = this.state;
        if (this.clipTickPending && (this.clipTickPending = !1, cB = {
            ...cB,
            hasClipBuffer: !0
          }), null !== this.recordingSince) {
          const Bc = Math.floor((this.now() - this.recordingSince) / 1e3);
          Bc !== cB.seconds && (cB = {
            ...cB,
            seconds: Bc
          })
        }
        this.set(cB)
      }
      onEvent(cB) {
        var Bc, nc;
        const {
          notify: Vc
        } = this.deps, Ic = mr.b;
        switch (cB.what) {
          case Tc.lc.RecordingStarted:
            this.recordingSince = this.now(), this.set({
              ...this.state,
              recording: !0,
              seconds: 0
            }), Vc(Ic.recordingStarted);
            break;
          case Tc.lc.RecordingStopped:
            this.stopRecording(), Vc(Ic.recordingStopped), this.saveState(Tc.wc.Recording, "saving");
            break;
          case Tc.lc.RecordingDiscarded:
            this.stopRecording(), Vc(Ic.recordingDiscarded);
            break;
          case Tc.lc.RecordingTurnedOff:
            this.stopRecording(), Vc(Ic.recordingTurnedOff);
            break;
          case Tc.lc.LimitReached:
            Vc(Ic.limitReached);
            break;
          case Tc.lc.ClipSaved:
            this.saveState(Tc.wc.Clip, "saving");
            break;
          case Tc.lc.ClipEmpty:
            Vc(Ic.clipEmpty);
            break;
          case Tc.lc.ClippingNotOn:
            Vc(Ic.clippingNotOn);
            break;
          case Tc.lc.Disallowed:
            Vc(Ic.disallowed);
            break;
          case Tc.lc.ClippingOn:
            this.clipTickPending = !0, this.set({
              ...this.state,
              clipping: !0,
              hasClipBuffer: !1
            });
            break;
          case Tc.lc.ClippingOff:
            this.clipTickPending = !1, this.set({
              ...this.state,
              clipping: !1,
              hasClipBuffer: !1
            });
            break;
          case Tc.lc.ClipSettingsChanged:
            this.clipTickPending = this.state.clipping, this.set({
              ...this.state,
              hasClipBuffer: !1
            });
            break;
          case Tc.lc.SaveBusy:
            null === (Bc = (nc = this.deps).onSaveState) || void 0 === Bc || Bc.call(nc, cB.kind, "busy"), Vc(Ic.saveBusy);
            break;
          case Tc.lc.CloseViewerFirst:
            Vc(Ic.closeViewerFirst)
        }
      }
      fileReady(cB, Bc) {
        this.deps.download(Bc), this.saveState(cB, "done"), this.deps.notify(cB === Tc.wc.Clip ? mr.b.clipSaved : mr.b.recordingSaved)
      }
      failed(cB) {
        this.saveState(cB, "failed"), this.deps.notify(cB === Tc.wc.Clip ? mr.b.clipFailed : mr.b.recordingFailed)
      }
      stopRecording() {
        this.recordingSince = null, this.set({
          ...this.state,
          recording: !1,
          seconds: 0
        })
      }
      saveState(cB, Bc) {
        var nc, Vc;
        null === (nc = (Vc = this.deps).onSaveState) || void 0 === nc || nc.call(Vc, cB, Bc)
      }
      set(cB) {
        cB !== this.state && (this.state = cB, this.deps.onState(cB))
      }
    }
    const LI = new TextDecoder;

    function gr(cB, Bc, nc, Vc) {
      const Ic = [];
      for (let rB = 0; rB < Vc; rB++) {
        if (Bc + Rn.U > nc) return null;
        const Vc = cB.getUint16(Bc, !0);
        if (Bc += Rn.U, Vc !== Tc.cc) {
          if (Bc + Vc > nc) return null;
          Ic.push(LI.decode(new Uint8Array(cB.buffer, cB.byteOffset + Bc, Vc))), Bc += Vc
        } else Ic.push(null)
      }
      return Bc === nc ? Ic : null
    }

    function UI(cB, Bc) {
      let nc = new DataView(new ArrayBuffer(0)),
        Vc = !0;
      const Ic = {
        replayFailed: (Bc, nc) => {
          cB.replayFailed({
            reason: Bc,
            code: nc
          })
        },
        replayOption: (Bc, Ic, rB, uc) => {
          const sc = function(cB, Bc, nc, Vc) {
            switch (Bc) {
              case Tc.xc.Cleared:
                return 0 === Vc ? null : void 0;
              case Tc.xc.Text:
                return LI.decode(new Uint8Array(cB.buffer, cB.byteOffset + nc, Vc));
              case Tc.xc.Int:
                return Vc === Int32Array.BYTES_PER_ELEMENT ? cB.getInt32(nc, !0) : void 0;
              case Tc.xc.Double:
                return Vc === Float64Array.BYTES_PER_ELEMENT ? cB.getFloat64(nc, !0) : void 0;
              default:
                return
            }
          }(nc, Ic, rB, uc);
          void 0 !== sc ? cB.replayOption({
            key: Bc,
            value: sc
          }) : Vc = !1
        },
        replayUiEvent: (Bc, Ic, rB, uc, sc, Mc) => {
          const Pc = function(cB, Bc, nc, Vc, Ic, rB, uc) {
            const sc = rB + uc;
            switch (Bc) {
              case Tc.zc.FlyingText: {
                const uc = gr(cB, rB, sc, 1);
                return null !== uc && null !== uc[0] ? {
                  what: Bc,
                  Z2: nc,
                  K8: Vc,
                  angle: Ic,
                  contentJson: uc[0]
                } : null
              }
              case Tc.zc.PlayerKilled: {
                const Vc = gr(cB, rB, sc, 3);
                return Vc ? {
                  what: Bc,
                  killstreak: nc,
                  dead: Vc[0],
                  killer: Vc[1],
                  withItem: Vc[2]
                } : null
              }
              case Tc.zc.Killfeed: {
                const nc = gr(cB, rB, sc, 7);
                return nc ? {
                  what: Bc,
                  killerId: nc[0],
                  killerName: nc[1],
                  killerColour: nc[2],
                  victimId: nc[3],
                  victimName: nc[4],
                  victimColour: nc[5],
                  withItem: nc[6]
                } : null
              }
              default:
                return null
            }
          }(nc, Bc, Ic, rB, uc, sc, Mc);
          null !== Pc ? cB.replayUiEvent(Pc) : Vc = !1
        },
        replayFilePart: (nc, Ic, rB, uc) => {
          const sc = Bc();
          rB + uc > sc.byteLength ? Vc = !1 : cB.filePart(nc, Ic, new Uint8Array(sc, rB, uc).slice())
        },
        replayFileReady: (Bc, nc, Vc, Ic) => {
          cB.fileReady({
            save: Bc,
            kind: nc,
            parts: Vc,
            bytes: Ic
          })
        },
        recorderEvent: (Bc, nc, Vc) => {
          cB.recorderEvent({
            what: Bc,
            kind: nc,
            save: Vc
          })
        },
        replayOpened: (Bc, Vc, Ic) => {
          cB.replayOpened(LI.decode(new Uint8Array(nc.buffer, nc.byteOffset + Vc, Ic)))
        }
      };
      return (cB, Bc, rB, uc) => !(cB < Tc.T.ReplayFailed || cB > Tc.T.RecorderEvent) && (nc = Bc, Vc = !0, (0, mB.ae)(cB, Bc, rB, uc, Ic) && Vc)
    }

    function br(cB) {
      let Bc = null;
      const nc = UI(cB, (() => {
        if (null === Bc) throw new Error("a recorder event read outside recorderEventReader's call");
        return Bc.buffer
      }));
      return (cB, Vc) => {
        Bc = Vc;
        try {
          ! function(cB, Bc) {
            const nc = cB.slice(),
              Vc = new DataView(nc.buffer);
            for (let Ic = 0; Ic < nc.byteLength;) {
              if (Ic + Tc.R > nc.byteLength) throw new Error(`the recorder module's events end mid-head at ${Ic}`);
              const cB = Vc.getUint32(Ic, !0),
                rB = 65535 & cB,
                uc = cB >>> 16,
                sc = Ic + Tc.R;
              if (sc + uc > nc.byteLength || !Bc(rB, Vc, sc, uc)) throw new Error(`the recorder module wrote a malformed event ${rB} (${uc} bytes) at ${Ic}`);
              Ic = sc + (0, Tc.Ld)(uc)
            }
          }(cB, nc)
        } finally {
          Bc = null
        }
      }
    }
    class ZI {
      constructor(cB, Bc) {
        this.acks = cB, this.handlers = Bc, this.parts = new Map
      }
      onPart(cB, Bc, nc) {
        let Vc = this.parts.get(cB);
        Vc || (Vc = [], this.parts.set(cB, Vc)), Vc[Bc] = nc, this.acks.filePartDone(cB, Bc)
      }
      onReady(cB) {
        var Bc;
        const nc = null !== (Bc = this.parts.get(cB.save)) && void 0 !== Bc ? Bc : [];
        this.parts.delete(cB.save);
        const Vc = function(cB, Bc, nc) {
          if (cB.length !== Bc) return null;
          let Vc = 0;
          for (let uc = 0; uc < Bc; uc++) {
            if (void 0 === cB[uc]) return null;
            Vc += cB[uc].byteLength
          }
          if (Vc !== nc) return null;
          if (1 === Bc) return cB[0];
          const Ic = new Uint8Array(nc);
          let rB = 0;
          for (const uc of cB) Ic.set(uc, rB), rB += uc.byteLength;
          return Ic
        }(nc, cB.parts, cB.bytes);
        this.acks.fileDone(cB.save), null === Vc ? this.handlers.fileIncomplete(cB.save, cB.kind) : this.handlers.fileReady(cB.save, cB.kind, Vc)
      }
      onDiscarded(cB) {
        this.parts.delete(cB)
      }
    }

    function QI() {
      return nc.e(50).then((() => nc(40573)))
    }
    class CI {
      constructor(cB) {
        this.deps = cB, this.sink = void 0, this.recorder = void 0, this.recorderEvents = void 0, this.parts = void 0, this.viewerChunk = null, this.viewer = null;
        const {
          client: Bc
        } = cB;
        this.recorder = new YI({
          client: Bc,
          live: () => {
            var cB;
            return !0 !== (null === (cB = this.viewer) || void 0 === cB ? void 0 : cB.inPlayback)
          },
          viewerOpen: cB.viewerOpen,
          notify: cB.notify,
          download: Bc => {
            var nc;
            null === (nc = cB.download) || void 0 === nc || nc.call(cB, Bc)
          },
          onState: cB.onRecorderState,
          onSaveState: cB.onSaveState
        }), this.parts = new ZI(Bc, {
          fileReady: (cB, Bc, nc) => {
            var Vc;
            Bc === Tc.wc.Edited ? null === (Vc = this.viewer) || void 0 === Vc || Vc.saveDone(nc) : this.recorder.fileReady(Bc, nc)
          },
          fileIncomplete: (cB, Bc) => {
            this.saveFailed(Bc)
          }
        });
        const nc = {
          replayFailed: cB => {
            var Bc;
            null === (Bc = this.viewer) || void 0 === Bc || Bc.onFailed(cB)
          },
          replayOption: Bc => {
            var nc;
            null === (nc = cB.onReplayOption) || void 0 === nc || nc.call(cB, Bc)
          },
          replayUiEvent: Bc => {
            var nc;
            null === (nc = cB.onReplayUiEvent) || void 0 === nc || nc.call(cB, Bc)
          },
          filePart: (cB, Bc, nc) => {
            this.parts.onPart(cB, Bc, nc)
          },
          fileReady: cB => {
            this.parts.onReady(cB)
          },
          replayOpened: Bc => {
            var nc;
            null === (nc = cB.onReplayOpened) || void 0 === nc || nc.call(cB, Bc)
          },
          recorderEvent: cB => {
            var Bc;
            switch (cB.what) {
              case Tc.lc.FileDiscarded:
                this.parts.onDiscarded(cB.save);
                break;
              case Tc.lc.SaveFailed:
                this.saveFailed(cB.kind);
                break;
              case Tc.lc.SaveBusy:
                if (null !== (Bc = this.viewer) && void 0 !== Bc && Bc.savePending) {
                  this.viewer.saveFailed(!0);
                  break
                }
                this.recorder.onEvent(cB);
                break;
              default:
                this.recorder.onEvent(cB)
            }
          }
        };
        this.sink = function(cB, Bc) {
          return {
            onReplayEvent: UI(cB, Bc)
          }
        }(nc, cB.buffer), this.recorderEvents = br(nc)
      }
      get currentViewer() {
        return this.viewer
      }
      loadViewer() {
        var cB;
        return this.viewer ? Promise.resolve(this.viewer) : (this.viewerChunk ??= (null !== (cB = this.deps.loadViewer) && void 0 !== cB ? cB : QI)().catch((cB => {
          throw this.viewerChunk = null, cB
        })), this.viewerChunk.then((cB => (this.viewer ??= new cB.ReplayViewer({
          client: this.deps.client,
          setHoldDraws: this.deps.setHoldDraws,
          meshPending: this.deps.meshPending,
          notify: this.deps.notify,
          onChange: () => {
            var cB, Bc;
            null === (cB = (Bc = this.deps).onViewerChange) || void 0 === cB || cB.call(Bc)
          }
        }), this.viewer))))
      }
      activated(cB) {
        this.recorder.activated(cB)
      }
      afterFrame(cB) {
        try {
          cB > 0 && this.recorder.cn()
        } finally {
          var Bc;
          null === (Bc = this.viewer) || void 0 === Bc || Bc.afterFrame()
        }
      }
      end() {
        var cB;
        null === (cB = this.viewer) || void 0 === cB || cB.end()
      }
      saveFailed(cB) {
        var Bc;
        cB === Tc.wc.Edited ? null === (Bc = this.viewer) || void 0 === Bc || Bc.saveFailed(!1) : this.recorder.failed(cB)
      }
    }
    var vr = nc(38626),
      DI = nc(38642),
      NI = nc(3855),
      EI = nc(38977);
    class oI {
      constructor(cB) {
        this.deps = cB, this.analogue = [0, 0], this.keys = 0, this.unsent = !1
      }
      drag(cB, Bc) {
        if (!this.deps.live() || 0 === cB && 0 === Bc) return;
        const nc = (0, oc.s)(0, performance.now()),
          Vc = this.deps.dragScale();
        (0, EI.l)((() => {
          (0, oc.v)(Tc.jb.MouseDown, 0, 0, 0, nc), (0, oc.v)(Tc.jb.MouseMove, 0, cB * Vc, Bc * Vc, 0), (0, oc.v)(Tc.jb.MouseUp, 0, 0, 0, nc)
        }))
      }
      move(cB) {
        var Bc, nc;
        this.analogue[0] = null !== (Bc = null === cB || void 0 === cB ? void 0 : cB.x) && void 0 !== Bc ? Bc : 0, this.analogue[1] = null !== (nc = null === cB || void 0 === cB ? void 0 : cB.y) && void 0 !== nc ? nc : 0, this.send()
      }
      holdVertical(cB, Bc) {
        const nc = "freeCamUp" === cB ? mB.Qb.Up : mB.Qb.Down;
        this.keys = Bc ? this.keys | nc : this.keys & ~nc, this.send()
      }
      flush() {
        this.unsent && this.send()
      }
      send() {
        const cB = this.deps.live() ? this.deps.cmd() : null;
        this.unsent = null !== cB && !(0, mB.me)(cB, 0, this.analogue, this.keys)
      }
    }
    var WI = nc(35238),
      wI = nc(299),
      kr = nc(259),
      XI = nc(107),
      HI = nc(8155);

    function FI() {
      const cB = Vc.d.get("clientEscMenuOptions"),
        Bc = (0, wI.j)(cB);
      return {
        mouse: (0, XI.isMobile)() ? Bc : cB.mouseSensitivity,
        touch: Bc,
        fovPercent: cB.cameraFOV
      }
    }

    function JI() {
      const cB = Vc.d.get("clientEscMenuOptions"),
        Bc = Vc.d.get("isTouchScreen") ? (0, wI.j)(cB) : cB.mouseSensitivity,
        nc = FI().mouse;
      return nc > 0 ? Bc / nc : 1
    }

    function jr(cB) {
      const Bc = () => {
        cB.setSoundPrefs(Vc.d.get("soundVolume"), Vc.d.get("soundOnFromAd"))
      };
      let nc = null;
      const Ic = () => {
        const {
          showFog: Bc,
          enableLighting: Ic,
          fogChunkDistance: rB,
          chunkFadeIn: uc
        } = Vc.d.get("clientEscMenuOptions"), sc = {
          showFog: Bc,
          lighting: Ic,
          fogChunks: rB,
          chunkFade: uc
        };
        nc && (0, Tc.ud)(nc) === (0, Tc.ud)(sc) && nc.fogChunks === rB || (nc = sc, cB.setEnvPrefs(nc))
      };
      let rB = null;
      const sc = () => {
        const Bc = function() {
          const cB = Vc.d.get("clientEscMenuOptions");
          return {
            nametagsHidden: Vc.d.get("areNametagsHidden"),
            crouchToggle: cB.crouchIsToggle,
            bhopDisabled: cB.disableBunnyHopping,
            disableBobbing: cB.disableBobbing,
            ezTowering: cB.ezTowering && (0, kr.i)(),
            ezBridging: cB.ezBridging,
            showChunkBorders: cB.showChunkBorders,
            edgeGuard: (0, WI.d)(cB),
            nametagCutDistance: (0, HI.d)()
          }
        }();
        (0, gB.vd)(rB, Bc) || (rB = Bc, cB.setUiPrefs(Bc))
      };
      let Mc = null;
      const Pc = () => {
        const Bc = FI();
        (0, gB.vd)(Mc, Bc) || (Mc = Bc, cB.setLookPrefs(Bc))
      };
      Bc(), Ic(), sc(), Pc();
      const qB = [(0, uc.m)("appManagerUpdated|soundVolume", Bc), (0, uc.m)("appManagerUpdated|soundOnFromAd", Bc), (0, uc.m)("appManagerUpdated|clientEscMenuOptions", (() => {
        Ic(), sc(), Pc()
      })), (0, uc.m)("appManagerUpdated|areNametagsHidden", sc), (0, uc.m)("appManagerUpdated|showDistantNametags", sc)];
      return () => {
        for (const cB of qB) cB()
      }
    }

    function RI(cB, Bc) {
      if (!Object.prototype.hasOwnProperty.call(cB, Bc)) throw new TypeError("attempted to use private field on non-instance");
      return cB
    }
    var ir = 0;

    function KI(cB) {
      return "__private_" + ir++ + "_" + cB
    }
    var xr = KI("lend"),
      dI = KI("starting"),
      AI = KI("generation"),
      GI = KI("end");
    class cu {
      constructor(cB) {
        this.deps = cB, Object.defineProperty(this, GI, {
          value: Br
        }), Object.defineProperty(this, xr, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, dI, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, AI, {
          writable: !0,
          value: 0
        })
      }
      get active() {
        return null !== RI(this, xr)[xr] || RI(this, dI)[dI]
      }
      async start(cB) {
        if (this.active) return "busy";
        const Bc = RI(this, AI)[AI];
        RI(this, dI)[dI] = !0;
        try {
          if (!await this.deps.ensureLoaded()) return "refused"
        } finally {
          RI(this, dI)[dI] = !1
        }
        if (Bc !== RI(this, AI)[AI]) return "refused";
        const nc = this.deps.beginSave();
        if (!nc) return "refused";
        const Vc = Number(BigInt.asUintN(32, cB)),
          Ic = Number(BigInt.asUintN(32, cB >> 32n));
        let rB = "refused";
        return this.deps.recorderCall(((cB, Bc) => {
          const uc = nc.editState,
            sc = cB.stage(uc.length);
          0 !== sc ? (new Uint8Array(Bc.buffer, sc, uc.length).set(uc), cB.mTc(nc.headLen, Vc, Ic) && (rB = "sealing")) : rB = "tooLarge"
        }), !0), "sealing" !== rB ? (nc.end(), rB) : (RI(this, xr)[xr] = nc, "sealing")
      }
      beforeRecorderStep() {
        const cB = RI(this, xr)[xr];
        if (!cB) return null;
        let Bc = -1,
          nc = 0;
        if (!this.deps.recorderCall((cB => {
            Bc = cB.eOc(), Bc > 0 && (nc = cB.tTc())
          }))) return RI(this, GI)[GI](cB, "stopped");
        if (Bc < 0) return RI(this, GI)[GI](cB, "read");
        if (0 === Bc) return null;
        const Vc = cB.head(nc, Bc);
        let Ic = !1;
        if (Vc && this.deps.recorderCall(((cB, nc) => {
            const rB = cB.stage(Bc);
            0 !== rB && (new Uint8Array(nc.buffer, rB, Bc).set(Vc), Ic = !0)
          }), !0), Ic) return null;
        const rB = cB.givenUp();
        this.deps.recorderCall((cB => {
          cB.SOc()
        }));
        const uc = RI(this, GI)[GI](cB, rB ? "givenUp" : "stopped");
        return rB && this.deps.givenUp("Reopen the replay you were editing to make your edits again, as they weren't saved when another replay opened."), uc
      }
      stop() {
        RI(this, AI)[AI]++;
        const cB = RI(this, xr)[xr];
        cB && (this.deps.recorderCall((cB => {
          cB.SOc()
        })), RI(this, GI)[GI](cB, "stopped"))
      }
    }

    function Br(cB, Bc) {
      return RI(this, xr)[xr] = null, cB.end(), Bc
    }

    function nr(cB, Bc) {
      const nc = new Uint8Array(4),
        Vc = new DataView(nc.buffer);
      return Vc.setUint8(0, cB ? 1 : 0), Vc.setUint16(2, Math.max(0, Math.min(65535, Math.round(Bc))), !0), nc
    }

    function Vr(cB, Bc) {
      return cB > function(cB) {
        return 16777216 + 314572.8 * Math.max(0, cB)
      }(Bc) + 33554432
    }
    let Ir = null;

    function ru(cB) {
      return Ir ??= async function(cB) {
        const Bc = cB.loadInFlight();
        Bc && await Bc.catch((() => {}));
        if (cB.trapped()) return "trapped";
        if (cB.busy() || !Vr(cB.memoryBytes(), cB.clipSeconds())) return "kept";
        cB.unload();
        let nc = !1;
        try {
          nc = await cB.load()
        } catch {
          nc = !1
        }
        if (!nc) return cB.trapped() ? "trapped" : cB.CV() ? "CV" : "failed";
        return "recycled"
      }(cB).finally((() => {
        Ir = null
      })), Ir
    }
    const ur = "Replay recording couldn't load, so try again.",
      sr = new Set([Tc.nc.ToggleRecording, Tc.nc.SaveClip]);
    var Mr = KI("TV"),
      Pr = KI("module"),
      qu = KI("memory"),
      Or = KI("trapped"),
      Tr = KI("CV"),
      fr = KI("recycleDue"),
      mu = KI("loading"),
      er = KI("generation"),
      tu = KI("viewDrawn"),
      Sr = KI("clip"),
      yu = KI("session"),
      zu = KI("control"),
      pr = KI("deferred"),
      hr = KI("coreU8"),
      au = KI("coreU32"),
      lr = KI("moduleU8"),
      Yr = KI("edited"),
      Lr = KI("sendSession"),
      gu = KI("checkNotInEvents"),
      Ur = KI("clipping"),
      bu = KI("busy"),
      Zr = KI("use"),
      Qr = KI("ensureLoaded"),
      Cr = KI("loadOnce"),
      vu = KI("recycleAfterStep"),
      Dr = KI("settleRecycle"),
      Nr = KI("load"),
      Er = KI("attach"),
      or = KI("resendHeld"),
      Wr = KI("recycle"),
      wr = KI("send"),
      ku = KI("unload"),
      Xr = KI("dropModule"),
      Hr = KI("coreBytes"),
      Fr = KI("coreWords"),
      Jr = KI("moduleBytes"),
      ju = KI("loadFailed"),
      Rr = KI("call"),
      iu = KI("guard"),
      Kr = KI("trapOn");
    class xu {
      constructor(cB) {
        this.deps = cB, Object.defineProperty(this, Kr, {
          value: zs
        }), Object.defineProperty(this, iu, {
          value: ys
        }), Object.defineProperty(this, Rr, {
          value: Su
        }), Object.defineProperty(this, ju, {
          value: ts
        }), Object.defineProperty(this, Jr, {
          value: eu
        }), Object.defineProperty(this, Fr, {
          value: ms
        }), Object.defineProperty(this, Hr, {
          value: fu
        }), Object.defineProperty(this, Xr, {
          value: Tu
        }), Object.defineProperty(this, ku, {
          value: Ou
        }), Object.defineProperty(this, wr, {
          value: qs
        }), Object.defineProperty(this, Wr, {
          value: Pu
        }), Object.defineProperty(this, or, {
          value: Mu
        }), Object.defineProperty(this, Er, {
          value: su
        }), Object.defineProperty(this, Nr, {
          value: uu
        }), Object.defineProperty(this, Dr, {
          value: rs
        }), Object.defineProperty(this, vu, {
          value: Iu
        }), Object.defineProperty(this, Cr, {
          value: Vu
        }), Object.defineProperty(this, Qr, {
          value: nu
        }), Object.defineProperty(this, Zr, {
          value: Bu
        }), Object.defineProperty(this, bu, {
          value: cs
        }), Object.defineProperty(this, Ur, {
          value: Gr
        }), Object.defineProperty(this, gu, {
          value: Ar
        }), Object.defineProperty(this, Lr, {
          value: dr
        }), Object.defineProperty(this, Mr, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Pr, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, qu, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Or, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, Tr, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, fr, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, mu, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, er, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, tu, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, Sr, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, yu, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, zu, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, pr, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, hr, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, au, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, lr, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Yr, {
          writable: !0,
          value: void 0
        }), RI(this, Yr)[Yr] = new cu({
          ensureLoaded: () => RI(this, Qr)[Qr](),
          recorderCall: (cB, Bc) => {
            Bc && RI(this, gu)[gu]("an edited save's stage");
            const nc = RI(this, Rr)[Rr](((Bc, nc) => (cB(Bc, nc), !0)));
            return null !== nc && void 0 !== nc && nc
          },
          beginSave: cB.beginSave,
          givenUp: cB.givenUp
        })
      }
      get active() {
        return null !== RI(this, Pr)[Pr]
      }
      get trapped() {
        return RI(this, Or)[Or]
      }
      get loading() {
        return null !== RI(this, mu)[mu]
      }
      prefetch() {
        RI(this, Tr)[Tr] || RI(this, Or)[Or] || RI(this, Pr)[Pr] || RI(this, mu)[mu] || this.deps.prefetch()
      }
      viewDrawn() {
        RI(this, tu)[tu] = !0, RI(this, Ur)[Ur]() && RI(this, Zr)[Zr]()
      }
      prefs(cB, Bc) {
        RI(this, Sr)[Sr] = {
          on: cB,
          seconds: Bc
        }, RI(this, wr)[wr](Tc.jc.Prefs, nr(cB, Bc)), cB && RI(this, tu)[tu] && RI(this, Zr)[Zr]()
      }
      control(cB) {
        const Bc = function(cB) {
          return new Uint8Array([cB, 0, 0, 0])
        }(cB);
        if (sr.has(cB)) return RI(this, Pr)[Pr] ? void RI(this, wr)[wr](Tc.jc.Control, Bc) : (RI(this, zu)[zu] = Bc, void RI(this, Zr)[Zr]());
        RI(this, Tr)[Tr] || this.deps.coreCommand(Tc.jc.Control, Bc)
      }
      session(cB) {
        RI(this, yu)[yu] = cB, RI(this, Lr)[Lr](cB)
      }
      filePartDone(cB, Bc) {
        RI(this, wr)[wr](Tc.jc.FilePartDone, function(cB, Bc) {
          const nc = new Uint8Array(8),
            Vc = new DataView(nc.buffer);
          return Vc.setUint32(0, cB, !0), Vc.setUint32(4, Bc, !0), nc
        }(cB, Bc))
      }
      fileDone(cB) {
        return RI(this, wr)[wr](Tc.jc.FileDone, function(cB) {
          const Bc = new Uint8Array(4);
          return new DataView(Bc.buffer).setUint32(0, cB, !0), Bc
        }(cB)), RI(this, vu)[vu]()
      }
      saveEdited(cB) {
        return RI(this, gu)[gu]("saveEdited"), RI(this, Yr)[Yr].start(cB)
      }
      afterFrame() {
        if (!RI(this, Pr)[Pr]) return;
        "read" === RI(this, Yr)[Yr].beforeRecorderStep() && RI(this, vu)[vu]();
        const cB = RI(this, fr)[fr];
        RI(this, fr)[fr] = null;
        const Bc = RI(this, Pr)[Pr],
          nc = RI(this, qu)[qu];
        if (!Bc || !nc) return void(null === cB || void 0 === cB || cB.resolve(RI(this, Or)[Or] ? "trapped" : "kept"));
        const {
          core: Vc
        } = this.deps, Ic = Vc.pOc(2);
        let rB, uc, sc, Mc, Pc = 0,
          qB = 0;
        if (0 !== Ic) {
          var Oc, Tc;
          const cB = RI(this, Fr)[Fr]();
          Pc = null !== (Oc = cB[Ic >>> 2]) && void 0 !== Oc ? Oc : 0, qB = null !== (Tc = cB[1 + (Ic >>> 2)]) && void 0 !== Tc ? Tc : 0
        }
        try {
          if (qB > 0) {
            const cB = Bc.feed(qB);
            0 !== cB && RI(this, Jr)[Jr](nc).set(RI(this, Hr)[Hr]().subarray(Pc, Pc + qB), cB)
          }
          rB = Bc.step(), uc = Bc.hOc(), sc = Bc.aTc(), Mc = Bc.lOc()
        } catch (fc) {
          if (!RI(this, Kr)[Kr](fc)) throw null === cB || void 0 === cB || cB.resolve("kept"), fc;
          return void(null === cB || void 0 === cB || cB.resolve("trapped"))
        }
        if (rB > 0) {
          const cB = Vc.YOc(2, rB);
          0 !== cB && RI(this, Hr)[Hr]().set(RI(this, Jr)[Jr](nc).subarray(uc, uc + rB), cB)
        }
        if (sc > 0) {
          RI(this, pr)[pr] = [];
          try {
            this.deps.events(new Uint8Array(nc.buffer, Mc, sc), nc)
          } catch (fc) {
            throw null === cB || void 0 === cB || cB.resolve("kept"), fc
          } finally {
            const cB = RI(this, pr)[pr];
            RI(this, pr)[pr] = null;
            for (const [Bc, nc] of cB) RI(this, wr)[wr](Bc, nc)
          }
        }
        if (!RI(this, Ur)[Ur]() && !RI(this, bu)[bu]()) return RI(this, ku)[ku](), void(null === cB || void 0 === cB || cB.resolve("kept"));
        null === cB || void 0 === cB || cB.resolve(RI(this, Wr)[Wr]())
      }
      dispose() {
        RI(this, Tr)[Tr] = !0, RI(this, ku)[ku]()
      }
    }

    function dr(cB) {
      RI(this, wr)[wr](Tc.jc.Session, function(cB) {
        const Bc = new TextEncoder,
          nc = Bc.encode(cB.game).subarray(0, 65535),
          Vc = Bc.encode(cB.lobby).subarray(0, 65535),
          Ic = new Uint8Array(22 + nc.length + 2 + Vc.length),
          rB = new DataView(Ic.buffer);
        rB.setFloat64(0, cB.unixMs, !0), rB.setBigUint64(8, BigInt.asUintN(64, cB.session), !0), rB.setUint8(16, cB.lobbyType);
        let uc = 20;
        for (const sc of [nc, Vc]) rB.setUint16(uc, sc.length, !0), Ic.set(sc, uc + 2), uc += 2 + sc.length;
        return Ic
      }({
        ...cB,
        unixMs: this.deps.unixNow()
      }))
    }

    function Ar(cB) {
      false
    }

    function Gr() {
      var cB, Bc;
      return null !== (cB = null === (Bc = RI(this, Sr)[Sr]) || void 0 === Bc ? void 0 : Bc.on) && void 0 !== cB && cB
    }

    function cs() {
      const cB = RI(this, Pr)[Pr];
      let Bc = !0;
      if (cB) try {
        Bc = cB.busy()
      } catch (nc) {
        if (!RI(this, Kr)[Kr](nc)) throw nc
      }
      return Bc || RI(this, Yr)[Yr].active
    }
    async function Bu() {
      !RI(this, Tr)[Tr] && this.deps.allowed() ? await RI(this, Qr)[Qr]() : RI(this, zu)[zu] = null
    }

    function nu() {
      return RI(this, Or)[Or] || RI(this, Tr)[Tr] ? Promise.resolve(!1) : RI(this, Pr)[Pr] ? Promise.resolve(!0) : (RI(this, mu)[mu] ??= RI(this, Cr)[Cr](), RI(this, mu)[mu])
    }
    async function Vu() {
      let cB = !1;
      try {
        return cB = await RI(this, Nr)[Nr](), cB
      } finally {
        cB || (RI(this, zu)[zu] = null), RI(this, mu)[mu] = null
      }
    }

    function Iu() {
      if (!RI(this, Pr)[Pr]) return Promise.resolve(RI(this, Or)[Or] ? "trapped" : "kept");
      if (!RI(this, fr)[fr]) {
        let cB = () => {};
        const Bc = new Promise((Bc => {
          cB = Bc
        }));
        RI(this, fr)[fr] = {
          promise: Bc,
          resolve: cB
        }
      }
      return RI(this, fr)[fr].promise
    }

    function rs(cB) {
      const Bc = RI(this, fr)[fr];
      RI(this, fr)[fr] = null, null === Bc || void 0 === Bc || Bc.resolve(cB)
    }
    async function uu() {
      let cB = RI(this, Mr)[Mr];
      if (!cB) {
        const Bc = RI(this, er)[er];
        try {
          cB = await this.deps.load()
        } catch (nc) {
          return Bc === RI(this, er)[er] && await RI(this, ju)[ju](nc), !1
        }
        if (Bc !== RI(this, er)[er]) return this.deps.unload(), !1;
        const Vc = cB,
          Ic = RI(this, iu)[iu]((() => Vc.LOc()));
        if (void 0 === Ic) return !1;
        const rB = this.deps.core.gTc();
        if (Ic !== rB) return await RI(this, ju)[ju](new Error(`recorder port version ${Ic}, the core's ${rB}`)), !1;
        RI(this, Mr)[Mr] = cB
      }
      const Bc = cB;
      try {
        if (!RI(this, iu)[iu]((() => (RI(this, Pr)[Pr] = new Bc.UOc, RI(this, qu)[qu] = Bc.yTc(), !0)))) return !1;
        RI(this, or)[or]();
        const cB = RI(this, zu)[zu];
        return RI(this, zu)[zu] = null, cB && RI(this, wr)[wr](Tc.jc.Control, cB), RI(this, Er)[Er]()
      } catch (nc) {
        return RI(this, ku)[ku](), await RI(this, ju)[ju](nc), !1
      }
    }

    function su() {
      return this.deps.core.bTc(0), 1 === this.deps.core.bTc(1) || (RI(this, ku)[ku](), this.deps.failed(ur), !1)
    }

    function Mu() {
      RI(this, Sr)[Sr] && RI(this, wr)[wr](Tc.jc.Prefs, nr(RI(this, Sr)[Sr].on, RI(this, Sr)[Sr].seconds)), RI(this, yu)[yu] && RI(this, Lr)[Lr](RI(this, yu)[yu])
    }

    function Pu() {
      return ru({
        memoryBytes: this.deps.memoryBytes,
        clipSeconds: () => {
          var cB, Bc;
          return null !== (cB = null === (Bc = RI(this, Sr)[Sr]) || void 0 === Bc ? void 0 : Bc.seconds) && void 0 !== cB ? cB : 0
        },
        trapped: () => RI(this, Or)[Or],
        busy: () => RI(this, bu)[bu](),
        loadInFlight: () => RI(this, mu)[mu],
        CV: () => RI(this, Tr)[Tr],
        unload: () => {
          RI(this, ku)[ku]()
        },
        load: () => RI(this, Qr)[Qr]()
      })
    }

    function qs(cB, Bc) {
      RI(this, pr)[pr] ? RI(this, pr)[pr].push([cB, Bc]) : RI(this, Rr)[Rr](((nc, Vc) => {
        const Ic = nc.zTc(Bc.length);
        0 !== Ic && (new Uint8Array(Vc.buffer, Ic, Bc.length).set(Bc), nc.command(cB, Bc.length))
      }))
    }

    function Ou() {
      RI(this, er)[er]++, RI(this, Dr)[Dr]("kept"), RI(this, Yr)[Yr].stop(), this.deps.core.bTc(0), RI(this, Xr)[Xr](), RI(this, Or)[Or] || (RI(this, Mr)[Mr] = null, this.deps.unload())
    }

    function Tu() {
      RI(this, Rr)[Rr]((cB => {
        cB.free()
      })), RI(this, Pr)[Pr] = null, RI(this, qu)[qu] = null, RI(this, lr)[lr] = null
    }

    function fu() {
      var cB;
      const Bc = this.deps.coreBuffer();
      return (null === (cB = RI(this, hr)[hr]) || void 0 === cB ? void 0 : cB.buffer) !== Bc && (RI(this, hr)[hr] = new Uint8Array(Bc)), RI(this, hr)[hr]
    }

    function ms() {
      var cB;
      const Bc = this.deps.coreBuffer();
      return (null === (cB = RI(this, au)[au]) || void 0 === cB ? void 0 : cB.buffer) !== Bc && (RI(this, au)[au] = new Uint32Array(Bc, 0, Bc.byteLength >>> 2)), RI(this, au)[au]
    }

    function eu(cB) {
      var Bc;
      const nc = cB.buffer;
      return (null === (Bc = RI(this, lr)[lr]) || void 0 === Bc ? void 0 : Bc.buffer) !== nc && (RI(this, lr)[lr] = new Uint8Array(nc)), RI(this, lr)[lr]
    }
    async function ts(cB) {
      await this.deps.staleOr(cB, (() => {
        this.deps.failed(ur)
      }))
    }

    function Su(cB) {
      const Bc = RI(this, Pr)[Pr],
        nc = RI(this, qu)[qu];
      if (Bc && nc) return RI(this, iu)[iu]((() => cB(Bc, nc)))
    }

    function ys(cB) {
      if (!RI(this, Or)[Or]) try {
        return cB()
      } catch (Bc) {
        if (!RI(this, Kr)[Kr](Bc)) throw Bc;
        return
      }
    }

    function zs(cB) {
      return cB instanceof WebAssembly.RuntimeError && (RI(this, Or)[Or] = !0, RI(this, Pr)[Pr] = null, RI(this, qu)[qu] = null, RI(this, lr)[lr] = null, RI(this, Mr)[Mr] = null, RI(this, zu)[zu] = null, RI(this, Dr)[Dr]("trapped"), this.deps.core.bTc(0), RI(this, Yr)[Yr].stop(), this.deps.crash(this.deps.markTrapped(cB)), this.deps.failed("Replay recording stopped working, so reload the page to record replays again."), !0)
    }
    var pu = nc(37156);
    const hu = new Map([
      ["skyblock", () => nc.e(42).then((() => nc(37154)))]
    ]);

    function as(cB) {
      const Bc = hu.get(cB);
      return Bc ? Bc().then((() => {
        const Bc = (0, pu.d)(cB);
        if (!Bc) throw new Error(`${cB}'s replay hook module registered no hook`);
        return Bc
      })) : null
    }
    class lu {
      constructor(cB) {
        this.deps = cB, this.game = null, this.hook = null, this.generation = 0, this.all = !1, this.pending = new Map, this.ids = new Int32Array(64)
      }
      get wantsWatch() {
        return null !== this.hook
      }
      opened(cB) {
        if (this.pending.clear(), cB === this.game && null !== this.hook) return void(this.all = !0);
        const Bc = ++this.generation;
        this.game = cB, this.hook = null, this.all = !1;
        const nc = this.deps.loadHook(cB);
        null === nc || void 0 === nc || nc.then((cB => {
          Bc === this.generation && (this.hook = cB, this.all = !0)
        }), (cB => {
          Bc === this.generation && this.deps.onError(cB)
        }))
      }
      ended() {
        this.generation++, this.game = null, this.hook = null, this.all = !1, this.pending.clear()
      }
      entityAdded(cB) {
        null === this.hook || this.all || this.pending.set(cB, !0)
      }
      entityInfoChanged(cB) {
        null === this.hook || this.all || this.pending.has(cB) || this.pending.set(cB, !1)
      }
      flush(cB) {
        const {
          hook: Bc
        } = this;
        if (null === Bc || !cB || !this.all && 0 === this.pending.size) return;
        const nc = this.deps.cmd();
        if (null === nc) return;
        const {
          api: Vc
        } = this.deps;
        if (this.all) {
          this.all = !1, this.pending.clear();
          const {
            ids: cB,
            count: Bc
          } = Wn(Vc, this.ids);
          this.ids = cB;
          for (let nc = 0; nc < Bc; nc++) this.pending.set(cB[nc], !0)
        }
        const Ic = this.ids = wn(this.ids, this.pending.size);
        let rB = 0;
        for (const Pc of this.pending.keys()) Ic[rB++] = Pc;
        const uc = [],
          sc = kV(Vc, Ic, rB, ((cB, Bc) => {
            null !== Bc && uc.push({
              serverId: cB,
              info: Bc,
              spawned: !0 === this.pending.get(cB)
            })
          }));
        if (sc) {
          this.pending.clear();
          for (const {
              serverId: cB,
              info: Vc,
              spawned: Ic
            }
            of uc) try {
            Bc(Vc, {
              setFacingTolerance: Bc => {
                null === Bc && Ic || sn(nc, cB, Bc) || this.pending.set(cB, Ic)
              }
            })
          } catch (Mc) {
            this.deps.onError(Mc)
          }
        }
      }
    }
    var Yu = KI("TV"),
      Lu = KI("module"),
      gs = KI("memory"),
      Uu = KI("trapped"),
      bs = KI("generation"),
      Zu = KI("loading"),
      Qu = KI("lend"),
      Cu = KI("givenUp"),
      vs = KI("afterSave"),
      Du = KI("opens"),
      Nu = KI("saveAskedAt"),
      Eu = KI("unload"),
      ou = KI("dropModule"),
      Wu = KI("loadFailed"),
      wu = KI("saveReadsBody"),
      ks = KI("command"),
      Xu = KI("call"),
      Hu = KI("guard"),
      Fu = KI("trapOn");
    class Ju {
      constructor(cB) {
        this.deps = cB, Object.defineProperty(this, Fu, {
          value: Gu
        }), Object.defineProperty(this, Hu, {
          value: Au
        }), Object.defineProperty(this, Xu, {
          value: du
        }), Object.defineProperty(this, ks, {
          value: xs
        }), Object.defineProperty(this, wu, {
          get: Ku,
          set: void 0
        }), Object.defineProperty(this, Wu, {
          value: is
        }), Object.defineProperty(this, ou, {
          value: Ru
        }), Object.defineProperty(this, Eu, {
          value: jsc
        }), Object.defineProperty(this, Yu, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Lu, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, gs, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Uu, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, bs, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, Zu, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, Qu, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Cu, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, vs, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Du, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, Nu, {
          writable: !0,
          value: null
        })
      }
      get active() {
        return null !== RI(this, Lu)[Lu] && null === RI(this, vs)[vs]
      }
      async open(cB) {
        if (RI(this, Uu)[Uu]) return Tc.uc.ModuleTrap;
        let Bc = RI(this, Yu)[Yu];
        if (!Bc) {
          const cB = RI(this, bs)[bs];
          RI(this, Zu)[Zu]++;
          try {
            Bc = await this.deps.load()
          } catch (Vc) {
            return RI(this, Zu)[Zu]--, cB !== RI(this, bs)[bs] ? "stopped" : RI(this, Wu)[Wu](Vc)
          }
          if (RI(this, Zu)[Zu]--, cB !== RI(this, bs)[bs]) return RI(this, Yu)[Yu] || 0 !== RI(this, Zu)[Zu] || RI(this, Uu)[Uu] || this.deps.unload(), "stopped";
          if (RI(this, Uu)[Uu]) return Tc.uc.ModuleTrap;
          const nc = Bc.LOc(),
            Ic = this.deps.core.gTc();
          if (nc !== Ic) return RI(this, Wu)[Wu](new Error(`replay port version ${nc}, the core's ${Ic}`));
          RI(this, Yu)[Yu] = Bc
        }
        if (!RI(this, Lu)[Lu]) {
          const cB = Bc;
          if (!RI(this, Hu)[Hu]((() => {
              RI(this, Lu)[Lu] = new cB.ZOc, RI(this, gs)[gs] = cB.QOc()
            }))) return Tc.uc.ModuleTrap
        }
        let nc = !1;
        return RI(this, Xu)[Xu](((Bc, Vc) => {
          null !== RI(this, vs)[vs] && Bc.step(0, 0);
          const Ic = Bc.stage(cB.length);
          0 !== Ic && (new Uint8Array(Vc.buffer, Ic, cB.length).set(cB), Bc.open(), RI(this, Cu)[Cu] = RI(this, Qu)[Qu], RI(this, vs)[vs] = null, RI(this, Du)[Du]++, nc = !0)
        })) ? nc ? "opening" : Tc.uc.TooLarge : Tc.uc.ModuleTrap
      }
      beforeFrame(cB) {
        const Bc = RI(this, Lu)[Lu],
          nc = RI(this, gs)[gs];
        if (!Bc || !nc || null !== RI(this, vs)[vs]) return;
        const {
          core: Vc
        } = this.deps, Ic = Vc.COc(cB);
        if (Ic < 0) return;
        const rB = Math.floor(Ic);
        let uc, sc;
        try {
          uc = Bc.step(rB, Ic - rB), sc = Bc.hOc()
        } catch (Pc) {
          return void RI(this, Fu)[Fu](Pc)
        }
        const Mc = Vc.YOc(1, uc);
        if (0 === Mc) {
          const cB = RI(this, Xu)[Xu]((cB => {
            cB.close()
          }));
          if (!cB) return;
          return RI(this, wu)[wu] ? RI(this, vs)[vs] = "drop" : RI(this, ou)[ou](), void Vc.vTc(Tc.uc.Port)
        }
        new Uint8Array(this.deps.coreBuffer(), Mc, uc).set(new Uint8Array(nc.buffer, sc, uc))
      }
      play() {
        RI(this, ks)[ks]((cB => {
          cB.play()
        }))
      }
      pause() {
        RI(this, ks)[ks]((cB => {
          cB.pause()
        }))
      }
      seek(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        RI(this, ks)[ks]((nc => {
          nc.seek(cB, Bc)
        }))
      }
      setMark(cB, Bc) {
        return RI(this, ks)[ks]((nc => {
          nc.DOc(cB, Bc)
        }))
      }
      addKeyframe(cB, Bc) {
        return RI(this, ks)[ks]((nc => {
          nc.NOc(cB[0], cB[1], cB[2], Bc[0], Bc[1], Bc[2])
        }))
      }
      setKeyframe(cB, Bc) {
        return RI(this, ks)[ks]((nc => {
          nc.EOc(cB, Bc)
        }))
      }
      moveKeyframe(cB, Bc) {
        return RI(this, ks)[ks]((nc => {
          nc.oOc(cB, Bc)
        }))
      }
      deleteKeyframes(cB, Bc) {
        return RI(this, ks)[ks]((nc => {
          nc.WOc(cB, Bc)
        }))
      }
      crop(cB, Bc) {
        return null === RI(this, Qu)[Qu] && RI(this, ks)[ks]((nc => {
          nc.crop(cB, Bc)
        }))
      }
      beginSave() {
        const cB = RI(this, Nu)[Nu];
        if (RI(this, Nu)[Nu] = null, null !== cB && cB !== RI(this, Du)[Du]) return null;
        let Bc = 0,
          nc = null;
        if (RI(this, Xu)[Xu](((cB, Vc) => {
            Bc = cB.save(), 0 !== Bc && (nc = new Uint8Array(Vc.buffer, cB.wOc(), cB.kTc()).slice())
          })), 0 === Bc || !nc) return null;
        const Vc = {
          headLen: Bc,
          editState: nc,
          givenUp: () => RI(this, Cu)[Cu] === Vc,
          head: (cB, Bc) => {
            if (RI(this, Qu)[Qu] !== Vc || !RI(this, wu)[wu]) return null;
            let nc = null;
            return RI(this, Xu)[Xu](((Vc, Ic) => {
              const rB = Vc.XOc();
              0 !== rB && cB >= 0 && Bc >= 0 && cB + Bc <= rB && (nc = new Uint8Array(Ic.buffer, Vc.HOc() + cB, Bc))
            })), nc
          },
          end: () => {
            if (RI(this, Qu)[Qu] !== Vc) return;
            RI(this, Qu)[Qu] = null, RI(this, Cu)[Cu] = null, RI(this, Xu)[Xu]((cB => {
              cB.FOc()
            }));
            const cB = RI(this, vs)[vs];
            RI(this, vs)[vs] = null, "unload" === cB ? RI(this, Eu)[Eu]() : "drop" === cB && RI(this, ou)[ou]()
          }
        };
        return RI(this, Qu)[Qu] = Vc, Vc
      }
      askSave() {
        RI(this, Nu)[Nu] = RI(this, Du)[Du]
      }
      setSpeed(cB) {
        RI(this, ks)[ks]((Bc => {
          Bc.JOc(cB)
        }))
      }
      setCameraMode(cB) {
        RI(this, ks)[ks]((Bc => {
          Bc.jTc(cB)
        }))
      }
      close() {
        RI(this, ks)[ks]((cB => {
          cB.close()
        }))
      }
      stop() {
        RI(this, bs)[bs]++, RI(this, wu)[wu] && (RI(this, Xu)[Xu]((cB => {
          cB.close()
        })), RI(this, Lu)[Lu]) ? RI(this, vs)[vs] = "unload" : RI(this, Eu)[Eu]()
      }
    }

    function jsc() {
      RI(this, ou)[ou](), RI(this, Uu)[Uu] || (RI(this, Yu)[Yu] = null, this.deps.unload())
    }

    function Ru() {
      RI(this, Xu)[Xu]((cB => {
        cB.free()
      })), RI(this, Lu)[Lu] = null, RI(this, gs)[gs] = null
    }
    async function is(cB) {
      return await this.deps.staleOr(cB, (() => {})) ? "reloading" : Tc.uc.ModuleLoad
    }

    function Ku() {
      return null !== RI(this, Qu)[Qu] && RI(this, Cu)[Cu] !== RI(this, Qu)[Qu]
    }

    function xs(cB) {
      return null === RI(this, vs)[vs] && RI(this, Xu)[Xu](cB)
    }

    function du(cB) {
      const Bc = RI(this, Lu)[Lu],
        nc = RI(this, gs)[gs];
      return !(!Bc || !nc) && RI(this, Hu)[Hu]((() => {
        cB(Bc, nc)
      }))
    }

    function Au(cB) {
      if (RI(this, Uu)[Uu]) return !1;
      try {
        return cB(), !0
      } catch (Bc) {
        return RI(this, Fu)[Fu](Bc), !1
      }
    }

    function Gu(cB) {
      if (!(cB instanceof WebAssembly.RuntimeError)) throw cB;
      RI(this, Uu)[Uu] = !0, RI(this, Lu)[Lu] = null, RI(this, gs)[gs] = null, RI(this, Yu)[Yu] = null, this.deps.crash(this.deps.markTrapped(cB)), this.deps.core.vTc(Tc.uc.ModuleTrap)
    }
    var cM = nc(5460),
      Bs = nc(38740);
    const ns = "[bloxd-wasm-client]";
    const Vs = String(lI);

    function Is(cB) {
      return null === cB || cB === Vs ? void 0 : cB
    }

    function rM(cB) {
      var Bc, nc, Vc, Ic, rB, sc, Mc;
      switch (cB.what) {
        case Tc.zc.FlyingText: {
          let Bc;
          try {
            Bc = JSON.parse(cB.contentJson)
          } catch (Pc) {
            return void console.warn(`${ns} a replay's flying text isn't JSON`, Pc)
          }
          uc.i.Vu("forceFlyingMiddleMessage", {
            content: Bc,
            K8: cB.K8,
            angle: cB.angle,
            Z2: cB.Z2
          });
          break
        }
        case Tc.zc.PlayerKilled:
          (0, Bs.i)({
            kind: "killed",
            body: {
              deadEId: null !== (Bc = Is(cB.dead)) && void 0 !== Bc ? Bc : "",
              killerEId: Is(cB.killer),
              withItem: null !== (nc = cB.withItem) && void 0 !== nc ? nc : "",
              killstreak: cB.killstreak
            }
          });
          break;
        case Tc.zc.Killfeed:
          (0, Bs.i)({
            kind: "custom",
            body: {
              killer: {
                eId: Is(cB.killerId),
                name: null !== (Vc = cB.killerName) && void 0 !== Vc ? Vc : void 0,
                colour: null !== (Ic = cB.killerColour) && void 0 !== Ic ? Ic : void 0
              },
              victim: {
                eId: Is(cB.victimId),
                name: null !== (rB = cB.victimName) && void 0 !== rB ? rB : void 0,
                colour: null !== (sc = cB.victimColour) && void 0 !== sc ? sc : void 0
              },
              withItem: null !== (Mc = cB.withItem) && void 0 !== Mc ? Mc : ""
            }
          })
      }
    }
    const us = "[bloxd-wasm-client]";

    function ss(cB) {
      if (void 0 === cB || null === cB || "" === cB) return null;
      const Bc = Number(cB);
      return Number.isInteger(Bc) && Bc > lI && Bc <= 2147483647 ? Bc : null
    }

    function Ms(cB) {
      return {
        id: ss(cB.eId),
        name: "string" === typeof cB.name ? cB.name : null,
        colour: "string" === typeof cB.colour ? cB.colour : null
      }
    }

    function Ps(cB) {
      const Bc = (0, DI.l)(Rn.Nb.PlayerKilled, (Bc => {
          var nc, Vc;
          const Ic = (0, vr.i)(Bc);
          if (!(0, vr.d)(Ic)) return;
          const {
            deadEId: rB,
            killerEId: uc,
            withItem: sc,
            killstreak: Mc
          } = Ic;
          cB.recordPlayerKilled(null !== (nc = ss(rB)) && void 0 !== nc ? nc : lI, null !== (Vc = ss(uc)) && void 0 !== Vc ? Vc : lI, "number" === typeof Mc ? Mc : 0, "string" === typeof sc ? sc : "")
        })),
        nc = (0, DI.l)(Rn.Nb.CustomKillfeed, (Bc => {
          const nc = (0, vr.i)(Bc);
          if (!(0, vr.d)(nc) || !(0, vr.d)(nc.killer) || !(0, vr.d)(nc.victim)) return;
          const {
            killer: Vc,
            victim: Ic,
            withItem: rB
          } = nc;
          cB.recordKillfeed(Ms(Vc), Ms(Ic), "string" === typeof rB ? rB : null)
        }));
      return () => {
        Bc(), nc()
      }
    }

    function qM(cB) {
      var Bc;
      return void 0 === cB || null === cB ? null : null !== (Bc = JSON.stringify(cB)) && void 0 !== Bc ? Bc : null
    }

    function Os(cB) {
      let Bc = null;
      const nc = () => {
        const {
          enableClipping: nc,
          clipDurationSeconds: Ic
        } = Vc.d.get("clientEscMenuOptions"), rB = `${nc}:${Ic}`;
        rB !== Bc && (Bc = rB, cB.recorder.setPrefs(nc, Ic))
      };
      return nc(), (0, uc.m)("appManagerUpdated|clientEscMenuOptions", nc)
    }
    const Ts = "replayModule",
      fs = "recorderModule";

    function mM(cB, Bc, nc) {
      return function() {
        return cB.isStopped ? nc : Bc(...arguments)
      }
    }
    const es = {
      open: () => Promise.reject(new Error(mr.b.coreStopped.text)),
      replayKey: () => null,
      encode: () => Promise.resolve(null),
      fileHandle: () => null,
      markSaved: () => {}
    };

    function tM() {
      return nc.e(54).then((() => nc(59377)))
    }

    function Ss(cB) {
      (0, mr.f)({
        text: cB,
        type: "Error"
      })
    }
    class yM {
      constructor(cB) {
        this.deps = cB, this.runtime = void 0, this.entityHooks = void 0, this.recordedOptions = void 0, this.stops = void 0, this.activeConn = 0, this.stopped = !1, this.bench = null, this.replay = void 0, this.recorder = void 0, this.freecam = void 0, this.drawn = !1;
        const {
          running: Bc,
          api: Vc,
          core: Ic
        } = cB, rB = () => cB.memory().buffer, uc = () => Bc.isStopped ? null : Bc.rings.cmd, sc = mM(Bc, ((cB, Bc) => Ic.YOc(cB, Bc)), 0), Mc = () => Ic.gTc();
        let Pc = null;
        this.replay = new Ju({
          core: {
            COc: mM(Bc, (cB => Ic.COc(cB)), -1),
            YOc: sc,
            gTc: Mc,
            vTc: mM(Bc, (cB => {
              Ic.vTc(cB)
            }), void 0)
          },
          coreBuffer: rB,
          load: async () => (Pc = await nc.e(55).then((() => nc(59390))), Pc.loadReplayModule()),
          unload: () => {
            var cB;
            null === (cB = Pc) || void 0 === cB || cB.unloadReplayModule()
          },
          markTrapped: cB => Pc ? Pc.markReplayTrapped(cB) : new Error(String(cB)),
          staleOr: (Bc, nc) => cB.staleOr(Ts, Bc, nc),
          crash: Bc => {
            cB.reportFault(Ts, Bc)
          }
        });
        let qB = null;
        this.recorder = new xu({
          core: {
            bTc: mM(Bc, (cB => Ic.bTc(cB)), 0),
            pOc: mM(Bc, (cB => Ic.pOc(cB)), 0),
            YOc: sc,
            gTc: Mc
          },
          coreCommand: (cB, Bc) => {
            var nc, Vc;
            return null !== (nc = null === (Vc = uc()) || void 0 === Vc ? void 0 : Vc.writeCmd(cB, 0, Bc)) && void 0 !== nc && nc
          },
          coreBuffer: rB,
          load: async () => (qB = await tM(), qB.loadRecorderModule()),
          prefetch: () => {
            tM().then((cB => cB.prefetchRecorderModule())).catch((cB => {
              console.warn(`${us} the recorder module didn't prefetch, so a save loads it:`, cB)
            }))
          },
          unload: () => {
            var cB;
            null === (cB = qB) || void 0 === cB || cB.unloadRecorderModule()
          },
          markTrapped: cB => qB ? qB.markRecorderTrapped(cB) : new Error(String(cB)),
          memoryBytes: () => {
            var cB, Bc;
            return null !== (cB = null === (Bc = qB) || void 0 === Bc ? void 0 : Bc.recorderMemoryBytes()) && void 0 !== cB ? cB : 0
          },
          staleOr: (Bc, nc) => cB.staleOr(fs, Bc, nc),
          crash: Bc => {
            cB.reportFault(fs, Bc)
          },
          allowed: () => !0 === cB.options.get("canRecordReplays"),
          failed: Ss,
          events: (cB, Bc) => {
            this.runtime.recorderEvents(cB, Bc)
          },
          beginSave: () => this.replay.beginSave(),
          givenUp: Ss,
          unixNow: () => Date.now()
        });
        const Oc = new ar({
          core: {
            OOc: mM(Bc, (cB => Ic.OOc(cB)), 0),
            fOc: mM(Bc, (() => {
              Ic.fOc()
            }), void 0),
            Gu: mM(Bc, (() => Ic.Gu()), 0),
            TOc: mM(Bc, (() => Ic.TOc()), 0)
          },
          buffer: rB,
          apiView: () => Vc.apiView,
          cmd: uc,
          replay: this.replay,
          recorder: this.recorder
        });
        this.entityHooks = new lu({
          api: Vc,
          cmd: uc,
          loadHook: as,
          onError: cB => {
            console.warn(`${us} the recorded game's replay hooks:`, cB)
          }
        });
        const Tc = new CI({
          client: Oc,
          buffer: rB,
          setHoldDraws: cB => {
            Bc.setHoldDraws(cB)
          },
          notify: mr.f,
          onRecorderState: () => {
            var cB;
            null === (cB = (0, tr.d)()) || void 0 === cB || cB.recorderChanged()
          },
          onViewerChange: () => {
            var cB;
            null === (cB = (0, tr.d)()) || void 0 === cB || cB.viewerChanged()
          },
          onReplayOption: Bc => {
            ! function(cB, Bc) {
              var nc, Vc;
              const Ic = Rn.Q[Bc.key];
              if (void 0 === Ic) return;
              let rB = null !== (nc = Bc.value) && void 0 !== nc ? nc : JSON.parse(JSON.stringify(null !== (Vc = cM.c[Ic]) && void 0 !== Vc ? Vc : null));
              if (null !== Bc.value && Bc.key < Rn.pb.Environment && "string" === typeof rB) try {
                rB = JSON.parse(rB)
              } catch (uc) {
                return void console.warn(`${ns} a replay's ${Ic} isn't JSON`, uc)
              }
              cB.applyNewClientOptions({
                [Ic]: rB
              })
            }(cB.options, Bc)
          },
          onReplayUiEvent: rM,
          onReplayOpened: Bc => {
            this.entityHooks.opened((0, gB.Db)(Bc)), cB.replayShaderPack(Bc)
          },
          meshPending: () => {
            var cB, nc;
            return null !== (cB = null === (nc = Bc.lastHeader) || void 0 === nc ? void 0 : nc.renderPending) && void 0 !== cB ? cB : 0
          },
          viewerOpen: eI.b,
          download: cB => {
            (0, TI.h)(cB)
          }
        });
        this.runtime = Tc, Vc.replay = Tc.sink, (0, tr.r)(Tc);
        const fc = new oI({
          live: () => {
            var cB;
            return !Bc.isStopped && !0 === (null === (cB = Tc.currentViewer) || void 0 === cB ? void 0 : cB.inPlayback)
          },
          cmd: uc,
          dragScale: JI
        });
        this.freecam = fc, (0, tr.q)(fc), this.recordedOptions = function(cB, Bc) {
          const nc = Rn.Q,
            Vc = nc.map(((nc, Vc) => Bc.subscribe(nc, (Bc => {
              cB.setOption(Vc, qM(Bc))
            }))));
          return {
            sendAll() {
              nc.forEach(((nc, Vc) => {
                cB.setOption(Vc, qM(Bc.get(nc)))
              }))
            },
            stop() {
              for (const cB of Vc) cB()
            }
          }
        }(Tc.recorder, cB.options), this.stops = [(0, VV.m)((cB => {
          fc.flush();
          try {
            this.replay.beforeFrame(cB)
          } catch (Bc) {
            this.deps.reportFault("replayFrame", Bc)
          }
        })), (0, VV.z)(((cB, Bc) => {
          try {
            this.recorder.afterFrame(), Bc && !this.drawn && (this.drawn = !0, this.recorder.viewDrawn())
          } catch (nc) {
            this.deps.reportFault("recorderFrame", nc)
          }
          try {
            Tc.afterFrame(cB)
          } catch (nc) {
            this.deps.reportFault("replayRuntime", nc)
          }
        })), Os(Tc), () => {
          this.recordedOptions.stop()
        }, Ps(Tc.recorder), (0, NI.j)((cB => {
          let {
            action: Bc,
            down: nc
          } = cB;
          var Vc;
          nc && (null === (Vc = (0, tr.d)()) || void 0 === Vc || Vc.keyDown(Bc))
        }))];
        const mB = () => {
          const cB = Tc.currentViewer;
          return !0 === (null === cB || void 0 === cB ? void 0 : cB.isOpen) ? cB : null
        };
        (0, fI.g)({
          open: (cB, Bc) => this.open(cB, Bc),
          replayKey: () => {
            var cB, Bc;
            return null !== (cB = null === (Bc = mB()) || void 0 === Bc ? void 0 : Bc.id) && void 0 !== cB ? cB : null
          },
          saveRefusal: () => {
            var cB, Bc;
            return null !== (cB = null === (Bc = mB()) || void 0 === Bc ? void 0 : Bc.saveRefusal) && void 0 !== cB ? cB : null
          },
          encode: () => {
            var cB, Bc;
            return null !== (cB = null === (Bc = mB()) || void 0 === Bc ? void 0 : Bc.save()) && void 0 !== cB ? cB : Promise.resolve(null)
          },
          fileHandle: () => {
            var cB, Bc;
            return null !== (cB = null === (Bc = Tc.currentViewer) || void 0 === Bc ? void 0 : Bc.fileHandle) && void 0 !== cB ? cB : null
          },
          markSaved: (cB, Bc) => {
            var nc;
            null === (nc = Tc.currentViewer) || void 0 === nc || nc.markSaved(cB, Bc)
          }
        })
      }
      netEvent(cB) {
        if ("connection" === cB.type)
          if (cB.phase === Tc.A.Activated) {
            this.activeConn = cB.conn;
            const Bc = this.deps.sessionInfo(cB.conn);
            null !== Bc && (this.runtime.activated({
              lobbyType: (0, Uc.t)(Bc.lobbyName),
              gameNameWithVariation: Bc.gameNameWithVariation,
              lobbyName: Bc.lobbyName
            }), this.recordedOptions.sendAll())
          } else cB.phase !== Tc.A.Left && cB.phase !== Tc.A.Closed || cB.conn !== this.activeConn || (this.activeConn = 0, this.runtime.recorder.closed())
      }
      stop() {
        if (!this.stopped) {
          this.stopped = !0;
          for (const cB of this.stops) cB();
          this.runtime.end(), this.entityHooks.ended(), this.replay.stop(), this.recorder.dispose(), (0, tr.k)() === this.runtime && (0, tr.r)(null), (0, tr.h)() === this.freecam && (0, tr.q)(null), (0, fI.g)(es), null !== this.bench && window.wasmReplayBench === this.bench && (window.wasmReplayBench = void 0)
        }
      }
      async open(cB, Bc) {
        const {
          running: nc
        } = this.deps;
        if (nc.isStopped) throw new Error(mr.b.coreStopped.text);
        if (cB.byteLength > 67108864) throw new Error(mr.b.cantOpen.text);
        let Vc;
        try {
          Vc = await async function(cB) {
            const Bc = await cB.loadViewer();
            return Bc.inPlayback || (0, VV.M)().leaveGame(null), Bc
          }(this.runtime)
        } catch (Ic) {
          throw console.warn(`${us} the replay viewer didn't load`, Ic), new Error(mr.b.viewerLoadFailed.text)
        }
        if (nc.isStopped) throw new Error(mr.b.coreStopped.text);
        await Vc.open(cB, Bc)
      }
    }
    var zM = nc(40535),
      ps = nc(40540),
      hs = nc(39004),
      aM = nc(39031),
      ls = nc(2876);
    const Ys = [1e3, 3e3, 9e3];
    class Ls {
      constructor(cB) {
        this.host = cB, this.sets = new Map, this.table = [], this.generation = 0, this.CV = !1
      }
      onEvent(cB) {
        const Bc = function(cB) {
          if (cB.byteLength !== Tc.Ec) return null;
          const Bc = new DataView(cB.buffer, cB.byteOffset, cB.byteLength);
          return {
            want: Bc.getUint16(0, !0),
            release: Bc.getUint16(2, !0)
          }
        }(cB);
        Bc && !this.CV && (Bc.release !== Tc.Gc && this.release(Bc.release), Bc.want !== Tc.Gc && this.want(Bc.want))
      }
      reset(cB) {
        if (!this.CV) {
          for (const [cB, Bc] of this.sets) "ready" === Bc.state && this.releaseAll(Bc.distinct), this.sets.delete(cB);
          this.table = cB, this.generation++
        }
      }
      dispose() {
        if (this.CV) return;
        this.CV = !0, this.generation++, this.table = [];
        const cB = [...this.sets.values()];
        this.sets.clear();
        let Bc = null;
        for (const Vc of cB)
          for (const cB of "ready" === Vc.state ? Vc.distinct : []) try {
            this.host.CPc(cB)
          } catch (nc) {
            Bc ??= {
              error: nc
            }
          }
        if (Bc) throw Bc.error
      }
      isReady(cB) {
        var Bc;
        return "ready" === (null === (Bc = this.sets.get(cB)) || void 0 === Bc ? void 0 : Bc.state)
      }
      want(cB) {
        const Bc = this.sets.get(cB);
        if ("loading" === (null === Bc || void 0 === Bc ? void 0 : Bc.state)) return Bc.wanted = !0, void this.capAnswer(cB, Bc);
        if ("ready" === (null === Bc || void 0 === Bc ? void 0 : Bc.state)) return void this.host.sendReady(Us(cB, Bc.images, Bc.size));
        const nc = this.table[cB];
        if (!nc || 1 !== nc.urls.length && nc.urls.length !== Rn.Hb.CubeFaces) return this.host.sendReady(bM(cB)), void this.host.onLoadFailed(cB, "", new Error(`no image set ${cB}`));
        const Vc = {
          state: "loading",
          wanted: !0
        };
        this.sets.set(cB, Vc), this.load(cB, nc, Vc, this.generation, 0), this.capAnswer(cB, Vc)
      }
      capAnswer(cB, Bc) {
        this.host.wait(4e3, (() => {
          this.sets.get(cB) === Bc && Bc.wanted && this.host.sendReady(bM(cB))
        }))
      }
      load(cB, Bc, nc, Vc, Ic) {
        const rB = [...new Set(Bc.urls)];
        Promise.allSettled(rB.map((cB => this.host.loadImage(cB, Bc.orientation)))).then((uc => {
          const sc = uc.flatMap((cB => "fulfilled" === cB.status ? [cB.value] : [])),
            Mc = Vc === this.generation && this.sets.get(cB) === nc,
            Pc = uc.findIndex((cB => "rejected" === cB.status));
          if (!Mc || !nc.wanted) return this.CV ? void this.releaseAfterDispose(sc.map(gM)) : (this.releaseAll(sc.map(gM)), void(Mc && this.sets.delete(cB)));
          Pc < 0 ? this.loaded(cB, Bc, rB, sc) : (this.releaseAll(sc.map(gM)), this.host.sendReady(bM(cB)), Ic < Ys.length ? this.host.wait(Ys[Ic], (() => {
            Vc === this.generation && this.sets.get(cB) === nc && (nc.wanted ? this.load(cB, Bc, nc, Vc, Ic + 1) : this.sets.delete(cB))
          })) : (this.sets.delete(cB), this.host.onLoadFailed(cB, rB[Pc], uc[Pc].reason)))
        }))
      }
      loaded(cB, Bc, nc, Vc) {
        const [Ic] = Vc, rB = [Ic.width, Ic.height], uc = Vc.every((cB => cB.width === rB[0] && cB.height === rB[1])), sc = Bc.urls.length === Rn.Hb.CubeFaces;
        if (!uc || rB[0] <= 0 || rB[1] <= 0 || rB[0] > 65535 || rB[1] > 65535 || sc && rB[0] !== rB[1]) {
          this.releaseAll(Vc.map(gM)), this.sets.delete(cB), this.host.sendReady(bM(cB));
          const nc = Vc.map((cB => `${cB.width}x${cB.height}`));
          return void this.host.onLoadFailed(cB, Bc.urls[0], new Error(`set ${cB}'s images can't make its texture: ${nc.join(", ")}`))
        }
        const Mc = Bc.urls.map((cB => Vc[nc.indexOf(cB)].id)),
          Pc = Vc.map(gM);
        this.sets.set(cB, {
          state: "ready",
          images: Mc,
          distinct: Pc,
          size: rB
        }), this.host.sendReady(Us(cB, Mc, rB))
      }
      release(cB) {
        const Bc = this.sets.get(cB);
        "loading" === (null === Bc || void 0 === Bc ? void 0 : Bc.state) ? Bc.wanted = !1: "ready" === (null === Bc || void 0 === Bc ? void 0 : Bc.state) && (this.releaseAll(Bc.distinct), this.sets.delete(cB))
      }
      releaseAll(cB) {
        for (const Bc of cB) this.host.CPc(Bc)
      }
      releaseAfterDispose(cB) {
        for (const Bc of cB) try {
          this.host.CPc(Bc)
        } catch {}
      }
    }

    function gM(cB) {
      return cB.id
    }

    function Us(cB, Bc, nc) {
      const Vc = new Uint8Array(Rn.Hb.SkyImagesReadyBytes),
        Ic = new DataView(Vc.buffer);
      return Ic.setUint16(0, cB, !0), Ic.setUint16(2, Bc.length, !0), Ic.setUint16(4, nc[0], !0), Ic.setUint16(6, nc[1], !0), Bc.slice(0, Rn.Hb.CubeFaces).forEach(((cB, Bc) => {
        Ic.setUint32(8 + 4 * Bc, cB, !0)
      })), Vc
    }

    function bM(cB) {
      const Bc = new Uint8Array(Rn.Hb.SkyImagesReadyBytes),
        nc = new DataView(Bc.buffer);
      return nc.setUint16(0, cB, !0), nc.setUint16(2, Rn.Hb.Failed, !0), Bc
    }
    let Zs = Promise.resolve();
    async function Qs(cB, Bc) {
      let nc;
      try {
        nc = await (0, ls.x)(cB)
      } catch (rB) {
        throw new hs.e("fetch", cB, {
          cause: rB
        })
      }
      const Vc = Zs.then((() => async function(cB, Bc) {
        const nc = new Blob([cB.slice()]);
        let Vc = await createImageBitmap(nc, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: Bc
        });
        const Ic = 1024 / Math.max(Vc.width, Vc.height);
        if (Ic < 1) {
          const cB = Vc;
          try {
            Vc = await createImageBitmap(cB, {
              resizeWidth: Math.max(1, Math.round(cB.width * Ic)),
              resizeHeight: Math.max(1, Math.round(cB.height * Ic)),
              resizeQuality: "high",
              premultiplyAlpha: "none",
              colorSpaceConversion: "none"
            })
          } finally {
            cB.close()
          }
        }
        return Vc
      }(nc, Bc)));
      let Ic;
      Zs = Vc.catch((() => {}));
      try {
        Ic = await Vc
      } catch (rB) {
        throw new hs.e("decode", cB, {
          cause: rB
        })
      }
      return {
        id: (0, hs.n)(Ic),
        width: Ic.width,
        height: Ic.height
      }
    }
    var Cs = nc(2339),
      vM = nc(33024);
    const Ds = Cs.f.length;

    function Ns(cB) {
      const Bc = [],
        nc = [];
      Cs.f.forEach(((Vc, Ic) => {
        var rB;
        const uc = null !== (rB = Es(cB[Vc])) && void 0 !== rB ? rB : vM.j[Vc];
        "custom" === uc.type ? (nc.push({
          id: Ic,
          kind: Rn.Hb.KindCustom,
          set: Bc.length,
          earth: null
        }), Bc.push({
          urls: [uc.px, uc.py, uc.pz, uc.nx, uc.ny, uc.nz],
          orientation: "none"
        })) : nc.push({
          id: Ic,
          kind: Rn.Hb.KindEarth,
          set: 0,
          earth: uc
        })
      }));
      const Vc = Es(cB.earth);
      "earth" === (null === Vc || void 0 === Vc ? void 0 : Vc.type) && nc.push({
        id: Ds,
        kind: Rn.Hb.KindEarth,
        set: 0,
        earth: Vc
      });
      const Ic = Bc.length;
      Bc.push({
        urls: vM.f.map((cB => vM.g + cB)),
        orientation: "none"
      }), Bc.push({
        urls: [vM.h],
        orientation: "flipY"
      }), Bc.push({
        urls: [vM.b],
        orientation: "flipY"
      });
      const rB = new Uint8Array(Rn.Hb.SkyTableHeaderBytes + nc.length * Rn.Hb.SkyTableEntryBytes),
        uc = new DataView(rB.buffer);
      return uc.setUint16(0, Ic, !0), uc.setUint16(2, Ic + 1, !0), uc.setUint16(4, Ic + 2, !0), uc.setUint16(6, nc.length, !0), nc.forEach(((cB, Bc) => {
        const nc = Rn.Hb.SkyTableHeaderBytes + Bc * Rn.Hb.SkyTableEntryBytes;
        uc.setUint16(nc, cB.id, !0), uc.setUint8(nc + 2, cB.kind);
        const Vc = nc + 4;
        cB.earth ? function(cB, Bc, nc) {
          const Vc = cB;
          let Ic = 0,
            rB = 0;
          for (const [uc, sc] of os) {
            const cB = Vc[uc];
            "number" === typeof cB && Number.isFinite(cB) && (Bc.setFloat32(nc + 4 * sc, cB, !0), Ic |= 1 << sc)
          }
          for (const [uc, sc, Mc] of Ws) {
            const cB = Vc[uc];
            Array.isArray(cB) && 3 === cB.length && cB.every((cB => "number" === typeof cB && Number.isFinite(cB))) && (cB.forEach(((cB, Vc) => {
              Bc.setFloat32(nc + Mc + 4 * Vc, cB, !0)
            })), Ic |= sc)
          }
          ws.forEach(((cB, rB) => {
            let [uc, sc] = cB;
            const Mc = Vc[uc];
            "number" === typeof Mc && Number.isFinite(Mc) && (Bc.setFloat32(nc + Rn.f.CameraOffsetAt + 4 * rB, Mc, !0), Ic |= sc)
          }));
          for (const [uc, sc] of kM) {
            const cB = Vc[uc];
            null !== cB && void 0 !== cB && (Ic |= sc, cB && (rB |= sc >>> 14))
          }
          Bc.setUint32(nc + Rn.f.PresentAt, Ic, !0), Bc.setUint8(nc + Rn.f.FlagsAt, rB)
        }(cB.earth, uc, Vc) : uc.setUint16(Vc, cB.set, !0)
      })), {
        payload: rB,
        sets: Bc
      }
    }

    function Es(cB) {
      if ("object" !== typeof cB || null === cB) return null;
      const Bc = cB;
      if ("earth" === Bc.type) return cB;
      return "custom" === Bc.type && ["px", "py", "pz", "nx", "ny", "nz"].every((cB => {
        const nc = Bc[cB];
        return "string" === typeof nc && nc.length > 0
      })) ? cB : null
    }
    const os = [
        ["inclination", Rn.f.Inclination],
        ["turbidity", Rn.f.Turbidity],
        ["luminance", Rn.f.Luminance],
        ["rayleigh", Rn.f.Rayleigh],
        ["mieCoefficient", Rn.f.MieCoefficient],
        ["mieDirectionalG", Rn.f.MieDirectionalG],
        ["distance", Rn.f.Distance],
        ["azimuth", Rn.f.Azimuth]
      ],
      Ws = [
        ["sunPosition", Rn.f.SunPosition, Rn.f.SunPositionAt],
        ["up", Rn.f.Up, Rn.f.UpAt],
        ["vertexTint", Rn.f.VertexTint, Rn.f.VertexTintAt]
      ],
      ws = [
        ["xCameraOffset", Rn.f.CameraOffsetX],
        ["yCameraOffset", Rn.f.CameraOffsetY],
        ["zCameraOffset", Rn.f.CameraOffsetZ]
      ],
      kM = [
        ["useSunPosition", Rn.f.UseSunPosition],
        ["dithering", Rn.f.Dithering],
        ["infiniteDistance", Rn.f.InfiniteDistance]
      ];

    function Xs(cB, Bc, nc) {
      const Vc = new Fs({
        writeCmd: cB,
        warn: Bc,
        followPack: Hs(nc, Bc)
      });
      return Vc.start(), Vc
    }

    function Hs(cB, Bc) {
      return nc => {
        let Vc = () => {};
        const Ic = cB((cB => {
          Vc(), Vc = () => {}, null !== cB ? Vc = cB.subscribe((cB => {
            nc(function(cB, Bc, nc) {
              if ("object" !== typeof cB || null === cB) return null;
              const Vc = cB.skyBoxes;
              if ("object" !== typeof Vc || null === Vc) return null;
              if ("player" === Bc) return Vc;
              return Object.fromEntries(Object.entries(Vc).filter((cB => {
                let [Bc, Vc] = cB;
                return !! function(cB) {
                  if ("object" !== typeof cB || null === cB) return !1;
                  return "earth" === cB.type || Object.entries(cB).every((cB => {
                    let [Bc, nc] = cB;
                    return "type" === Bc || ("" === (Vc = nc) || null !== function(cB) {
                      var Bc, nc, Vc;
                      return "string" !== typeof cB ? null : null !== (Bc = null === (nc = Jsc.exec(cB)) || void 0 === nc || null === (Vc = nc.groups) || void 0 === Vc ? void 0 : Vc.base64) && void 0 !== Bc ? Bc : null
                    }(Vc));
                    var Vc
                  }))
                }(Vc) || (nc(`Ignoring texture pack skybox ${Bc}, whose faces are not all data URLs`, null), !1)
              })))
            }(cB.pack, null === cB.gameSource ? "player" : "customGame", Bc))
          })) : nc(null)
        }));
        return () => {
          Ic(), Vc()
        }
      }
    }
    class Fs {
      constructor(cB) {
        var Bc, nc, Vc;
        this.host = cB, this.loader = void 0, this.wait = void 0, this.queue = [], this.written = null, this.stopFollowing = () => {}, this.CV = !1, this.wait = null !== (Bc = cB.wait) && void 0 !== Bc ? Bc : (cB, Bc) => {
          setTimeout(Bc, cB)
        }, this.loader = new Ls({
          loadImage: null !== (nc = cB.loadImage) && void 0 !== nc ? nc : Qs,
          CPc: null !== (Vc = cB.CPc) && void 0 !== Vc ? Vc : hs.p,
          sendReady: cB => {
            this.queue.push({
              kind: Rn.Hb.SkyImagesReady,
              payload: cB
            })
          },
          onLoadFailed: (Bc, nc, Vc) => {
            cB.warn(`sky image set ${Bc} (${nc}) didn't load: the last sky stays`, Vc)
          },
          wait: this.wait
        })
      }
      start() {
        this.wait(aM.d, (() => {
          null === this.written && this.write({})
        })), this.stopFollowing = this.host.followPack((cB => {
          this.write(null !== cB && void 0 !== cB ? cB : {})
        }))
      }
      onEvent(cB) {
        this.loader.onEvent(cB)
      }
      drain() {
        if (0 === this.queue.length) return;
        let cB = 0;
        for (; cB < this.queue.length && this.host.writeCmd(this.queue[cB].kind, 0, this.queue[cB].payload);) cB++;
        cB > 0 && this.queue.splice(0, cB)
      }
      dispose() {
        this.CV = !0, this.stopFollowing(), this.queue = [], this.loader.dispose()
      }
      write(cB) {
        if (this.CV) return;
        const Bc = Ns(cB);
        var nc, Vc;
        this.written && (nc = this.written, Vc = Bc, nc.payload.length === Vc.payload.length && nc.payload.every(((cB, Bc) => cB === Vc.payload[Bc])) && nc.sets.length === Vc.sets.length && nc.sets.every(((cB, Bc) => {
          const nc = Vc.sets[Bc];
          return cB.orientation === nc.orientation && cB.urls.length === nc.urls.length && cB.urls.every(((cB, Bc) => cB === nc.urls[Bc]))
        }))) || (this.written = Bc, this.loader.reset(Bc.sets), this.queue = this.queue.filter((cB => cB.kind !== Rn.Hb.SkyImagesReady)), this.queue.push({
          kind: Rn.Hb.SkyTable,
          payload: Bc.payload
        }))
      }
    }
    const Jsc = /^data:[\w.+/-]*;base64,(?<base64>[A-Za-z0-9+/]*={0,2})$/;
    var jM = nc(166),
      Rs = nc(171),
      iM = nc(2217),
      Ks = nc(2225),
      xM = nc(226),
      ds = nc(233),
      As = nc(2233),
      Gs = nc(125);
    class cP {
      constructor() {
        this.id = null, this.sentMs = null, this.roundTripMs = null, this.stopReplies = void 0, this.stopReplies = (0, DI.l)(yI.P, (cB => {
          this.onReply((0, vr.f)(yI.P, cB), performance.now())
        }))
      }
      onFrame(cB, Bc) {
        null === this.id ? this.id = cB : cB !== this.id && (this.id = cB, this.sentMs = document.hidden ? null : Bc)
      }
      onVisibilityChange() {
        this.sentMs = null
      }
      onReply(cB, Bc) {
        cB === this.id && null !== this.sentMs && (this.roundTripMs = Math.round(Bc - this.sentMs), this.sentMs = null)
      }
      take() {
        const cB = this.roundTripMs;
        return this.roundTripMs = null, cB
      }
      stop() {
        this.stopReplies()
      }
    }
    class BM {
      constructor() {
        this.sampled = 0, this.timed = 0, this.frameUs = 0, this.primed = !1, this.windowTimed = 0, this.windowUs = 0
      }
      onFrame(cB, Bc, nc, Vc) {
        const Ic = cB - this.sampled >>> 0,
          rB = Bc - this.timed >>> 0,
          uc = nc - this.frameUs >>> 0,
          sc = this.primed;
        return this.sampled = cB, this.timed = Bc, this.frameUs = nc, this.primed = !0, !(!sc || Ic > 64 || rB > 64) && (Vc && uc <= 1e6 * rB && (this.windowTimed += rB, this.windowUs += uc), Vc && Ic > 0)
      }
      reset() {}
      snapshotAndReset() {
        const cB = this.windowTimed > 0 ? this.windowUs / this.windowTimed / 1e3 : null;
        return this.windowTimed = 0, this.windowUs = 0, {
          passMs: cB,
          submitToDoneMs: null
        }
      }
    }
    const nM = {
      pacedShare: null,
      switchesPerHour: null,
      lagP50Ms: null,
      lagP90Ms: null,
      joinLagP90Ms: null
    };
    class VM {
      constructor() {
        this.samples = new Float64Array(4096), this.count = 0
      }
      add(cB, Bc) {
        const nc = Math.min(4096, this.count + Bc);
        this.samples.fill(cB, this.count, nc), this.count = nc
      }
      clear() {
        this.count = 0
      }
      take(cB) {
        const Bc = this.count;
        if (this.count = 0, Bc < 30) return null;
        const nc = this.samples.subarray(0, Bc).sort();
        return cB.map((cB => nc[Math.min(Bc - 1, Math.floor(cB * Bc))]))
      }
    }
    class IM {
      constructor() {
        this.word = 0, this.lagUs = 0, this.primed = !1, this.lastDrawnMs = -1, this.tieredMs = 0, this.pacedMs = 0, this.switches = 0, this.lags = new VM, this.inJoin = !1, this.rose = !1, this.joinLags = new VM, this.joinLagP90Ms = null
      }
      onFrame(cB, Bc, nc, Vc, Ic) {
        const rB = cB.headerWord(Rn.u.Pacing),
          uc = cB.headerWord(Rn.u.PacingLagUs),
          sc = (rB >>> Rn.D.LagsShift) - (this.word >>> Rn.D.LagsShift) & Rn.D.CountMask,
          Mc = (rB >>> Rn.D.SwitchesShift) - (this.word >>> Rn.D.SwitchesShift) & Rn.D.CountMask,
          Pc = sc > 0 ? (uc - this.lagUs >>> 0) / sc / 1e3 : 0,
          qB = this.primed && sc <= 64 && Mc <= 2 && Pc <= 6e4;
        if (this.rose = 0 !== (rB & ~this.word & Rn.D.Joining), this.word = rB, this.lagUs = uc, this.primed = !0, 0 !== (rB & Rn.D.Tiered)) {
          if (0 !== (rB & Rn.D.Joining)) this.rose && (this.inJoin = !0, this.joinLags.clear()), this.inJoin && qB && Vc && sc > 0 && this.joinLags.add(Pc, sc);
          else if (this.inJoin) {
            var Oc, Tc;
            this.inJoin = !1, this.joinLagP90Ms = null !== (Oc = null === (Tc = this.joinLags.take([.9])) || void 0 === Tc ? void 0 : Tc[0]) && void 0 !== Oc ? Oc : null
          }
          if (Ic) {
            if (qB && (this.switches += Mc, sc > 0 && this.lags.add(Pc, sc)), nc) {
              if (this.lastDrawnMs >= 0 && Bc - this.lastDrawnMs <= 250) {
                const cB = Bc - this.lastDrawnMs;
                this.tieredMs += cB, (rB & Rn.D.AheadMask) > 0 && (this.pacedMs += cB)
              }
              this.lastDrawnMs = Bc
            }
          } else this.lastDrawnMs = -1
        } else this.lastDrawnMs = -1
      }
      onJoin() {
        this.takeWindow(), this.rose || (this.inJoin = !1, this.joinLags.clear()), this.lastDrawnMs = -1
      }
      snapshotAndReset(cB) {
        const Bc = this.takeWindow(),
          nc = this.joinLagP90Ms;
        return this.joinLagP90Ms = null, cB ? {
          ...Bc,
          joinLagP90Ms: nc
        } : {
          ...nM,
          joinLagP90Ms: nc
        }
      }
      unsent(cB) {
        this.joinLagP90Ms ??= cB.joinLagP90Ms
      }
      takeWindow() {
        var cB, Bc;
        const nc = this.tieredMs >= 2e3,
          Vc = this.lags.take([.5, .9]),
          Ic = {
            pacedShare: nc ? this.pacedMs / this.tieredMs : null,
            switchesPerHour: nc ? 36e5 * this.switches / this.tieredMs : null,
            lagP50Ms: null !== (cB = null === Vc || void 0 === Vc ? void 0 : Vc[0]) && void 0 !== cB ? cB : null,
            lagP90Ms: null !== (Bc = null === Vc || void 0 === Vc ? void 0 : Vc[1]) && void 0 !== Bc ? Bc : null
          };
        return this.tieredMs = 0, this.pacedMs = 0, this.switches = 0, Ic
      }
    }
    var rP = nc(8160),
      uM = nc(38970);
    const sM = {
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
      },
      MM = {
        webgpu: "rust_webgpu",
        webgl: "rust_webgl2",
        webgl1: "rust_webgl1"
      };

    function PM(cB) {
      return new qP(cB)
    }
    class qP {
      constructor(cB) {
        this.shell = cB, this.tracker = new Ks.c, this.gpu = new BM, this.pacing = new IM, this.timers = [], this.inGameAtLastFlush = !1, this.hasFlushedSinceConnect = !1, this.sendsDropped = 0, this.pendingLightFailures = 0, this.unsentPage = null, this.game = null, this.fpsSpanStartMs = -1, this.fpsFrames = 0, this.fpsOverTime = null, this.firstSpanFps = null, this.initialFps = null, this.ping = new cP, this.pacedCpuMs = 0, this.onVisibility = () => {
          this.tracker.onVisibilityChange(), this.ping.onVisibilityChange(), !document.hidden && this.fpsSpanStartMs >= 0 && (this.fpsFrames = 0, this.fpsSpanStartMs = performance.now())
        }, (0, rP.e)(cB.backend, cB.canvas, cB.adapterVendor), this.tracker.start((() => !cB.inGame()), this.gpu), document.addEventListener("visibilitychange", this.onVisibility), this.timers.push(setInterval((() => {
          this.flush(), this.fpsOverTime = null, this.initialFps = null
        }), 1e4), setInterval((() => {
          this.followGame() && (this.hasFlushedSinceConnect || (this.flush(), this.hasFlushedSinceConnect = !0))
        }), 250))
      }
      animationFrame(cB) {
        this.tracker.onAnimationFrame(cB)
      }
      frameRan(cB, Bc, nc, Vc) {
        this.ping.onFrame(cB.headerWord(Rn.u.PingSent), nc);
        const Ic = this.tracker;
        this.pacing.onFrame(cB, Bc, "drawn" === Vc, !document.hidden, Ic.isSampling());
        const rB = cB.headerWord(Rn.u.TickUs) / 1e3 + (0, VV.N)();
        Ic.eZ(rB);
        const uc = Math.max(0, nc - Bc - rB);
        if ("drawn" !== Vc) return void("paced" === Vc && (this.pacedCpuMs += uc));
        this.followGame(), Ic.onFrameStart(Bc);
        this.gpu.onFrame(cB.headerWord(Rn.u.GpuSampled), cB.headerWord(Rn.u.GpuTimed), cB.headerWord(Rn.u.GpuFrameUs), Ic.isSampling()) && Ic.onGpuSampleStarted(), Ic.onFrameCpu(uc + this.pacedCpuMs), this.pacedCpuMs = 0, this.countFpsFrame(Bc)
      }
      stop() {
        for (const cB of this.timers) clearInterval(cB);
        this.timers.length = 0, document.removeEventListener("visibilitychange", this.onVisibility), this.ping.stop()
      }
      followGame() {
        const cB = this.shell.joinedGame();
        return cB !== this.game && (this.game = cB, this.tracker.snapshotAndReset(), this.pacing.onJoin(), this.hasFlushedSinceConnect = !1, this.inGameAtLastFlush = !1, this.fpsSpanStartMs = -1, this.fpsFrames = 0, this.pacedCpuMs = 0, this.firstSpanFps = null, this.fpsOverTime = null, this.initialFps = null), null !== cB
      }
      countFpsFrame(cB) {
        if (this.fpsSpanStartMs < 0) {
          if (!this.shell.inGame()) return;
          this.fpsSpanStartMs = cB
        }
        this.fpsFrames++;
        const Bc = cB - this.fpsSpanStartMs;
        if (!(Bc < 15e3)) {
          if (!document.hidden) {
            const cB = 1e3 * this.fpsFrames / Bc;
            this.firstSpanFps ??= cB, this.initialFps = this.firstSpanFps, this.fpsOverTime = cB
          }
          this.fpsFrames = 0, this.fpsSpanStartMs = cB
        }
      }
      flush() {
        const cB = this.followGame(),
          {
            cpuFrameMs: Bc,
            refreshHz: nc,
            cpuBottleneck: Ic,
            frameIntervalCv: rB,
            ...uc
          } = this.tracker.snapshotAndReset(),
          sc = this.shell.inGame(),
          Mc = sc && this.inGameAtLastFlush,
          Pc = Mc ? uc : iM.d,
          qB = this.pacing.snapshotAndReset(Mc);
        if (this.inGameAtLastFlush = sc, this.pendingLightFailures += this.shell.takeFailedMeshJobs(), !cB) return void this.pacing.unsent(qB);
        const Oc = performance.now(),
          fc = (0, As.q)((0, As.n)(Oc), this.unsentPage),
          ec = function(cB, Bc, nc, Ic, rB, uc, sc, Mc) {
            var Pc, qB, Oc;
            const Tc = {},
              {
                canvas: fc
              } = cB;
            for (const mB of (0, jM.w)()) {
              const ec = mB.name;
              let tB;
              if ((0, Rs.d)(ec)) tB = (0, As.c)(ec);
              else if ((0, As.j)(ec)) tB = Mc[ec];
              else switch (ec) {
                case "fps":
                  tB = Ic;
                  break;
                case "Fq":
                  tB = rB;
                  break;
                case "LO":
                  tB = (0, uM.i)().n;
                  break;
                case "HO":
                  tB = Math.max(fc.width, fc.height);
                  break;
                case "jT":
                  tB = Math.min(fc.width, fc.height);
                  break;
                case "eT":
                  tB = navigator.hardwareConcurrency || null;
                  break;
                case "Qq":
                  tB = (0, XI.getWebGpuSupported)();
                  break;
                case "Yq":
                  tB = null === cB.fallbackReason ? null : sM[cB.fallbackReason];
                  break;
                case "lT":
                  tB = Bc.cpuFrameMs;
                  break;
                case "wT":
                  tB = Bc.refreshHz;
                  break;
                case "XT":
                  tB = Bc.cpuBottleneck;
                  break;
                case "qm":
                  tB = Bc.frameIntervalCv;
                  break;
                case "vmc":
                  tB = Bc.frameMs;
                  break;
                case "Tm":
                  tB = Bc.tickMs;
                  break;
                case "Wm":
                  tB = Bc.mainBusyShare;
                  break;
                case "Jm":
                  tB = Bc.mainProbeDelayMs;
                  break;
                case "Zm":
                  tB = Bc.longAnimationFramesPerMin;
                  break;
                case "Qm":
                  tB = Bc.longAnimationFrameTimeShare;
                  break;
                case "Rm":
                  tB = Bc.gpuPassMs;
                  break;
                case "Im":
                  tB = Bc.gpuSubmitToDoneMs;
                  break;
                case "Km":
                  tB = nc.pacedShare;
                  break;
                case "Am":
                  tB = nc.switchesPerHour;
                  break;
                case "atc":
                  tB = nc.lagP50Ms;
                  break;
                case "qS":
                  tB = nc.lagP90Ms;
                  break;
                case "bS":
                  tB = nc.joinLagP90Ms;
                  break;
                case "II":
                  tB = (0, jM.f)(uc);
                  break;
                case "aT":
                  tB = sc;
                  break;
                case "kS":
                case "kr":
                case "nS":
                case "vy":
                case "jy":
                case "Iy":
                case "Py":
                case "Uy":
                case "Wy":
                case "Fy":
                case "Ay":
                case "Gy":
                case "mp":
                case "zp":
                case "Yz":
                  tB = null;
                  break;
                case "Rl":
                  tB = (0, XI.getPlatformType)();
                  break;
                case "Kl":
                  tB = (0, XI.getGpuVendor)();
                  break;
                case "pT":
                  tB = MM[cB.backend];
                  break;
                case "Al":
                  tB = (0, Gs.b)();
                  break;
                case "Gl":
                  tB = (0, XI.getOperatingSystem)();
                  break;
                case "cL":
                  tB = (0, XI.getTrafficSource)();
                  break;
                case "VY":
                  tB = null !== (Pc = Vc.d.get("gameEntrySource")) && void 0 !== Pc ? Pc : jM.k;
                  break;
                case "Om":
                  tB = Bc.frameLimiter;
                  break;
                case "pM":
                  tB = (0, xM.f)();
                  break;
                case "oq":
                  tB = null !== (qB = (0, ds.e)()) && void 0 !== qB ? qB : jM.k;
                  break;
                case "qL":
                  tB = (0, xM.b)(fc.width, fc.height);
                  break;
                case "fY":
                  tB = (0, jM.A)(-(new Date).getTimezoneOffset());
                  break;
                case "EM":
                  tB = null !== (Oc = cB.fallbackReason) && void 0 !== Oc ? Oc : jM.k;
                  break;
                case "Bl":
                  tB = "ready";
                  break;
                case "hY":
                  tB = (0, XI.getSoftwareRenderer)();
                  break;
                case "pY":
                  tB = cB.shaderPackRuns() ? "true" : "false";
                  break;
                case "tL":
                case "lY":
                case "ZY":
                case "Sy":
                case "WV":
                  tB = jM.k;
                  break;
                default:
                  throw new Error(`Unhandled field name: ${ec}`)
              }
              if (void 0 === tB) throw new Error(`Metric ${ec} has no value`);
              Tc[ec] = tB
            }
            return Tc
          }(this.shell, {
            cpuFrameMs: Bc,
            refreshHz: nc,
            cpuBottleneck: Ic,
            frameIntervalCv: rB,
            ...Pc
          }, qB, this.fpsOverTime, this.initialFps, this.pendingLightFailures, this.ping.take(), fc);
        if (tB = this.shell.writeCmd, Sc = Tc.Dc, yB = function(cB) {
            const Bc = (0, Ec.g)((0, KB.i)(cB)),
              nc = new Uint8Array(mB.Kd.BYTES + Bc.length);
            return new DataView(nc.buffer).setUint16(0, KB.e.AnalyticsUpdate, !0), nc.set(Bc, mB.Kd.BYTES), nc
          }(ec), (0, jn.b)(), !tB(mB.p.Send, Sc, yB)) return this.unsentPage = fc, this.pacing.unsent(qB), void(0 === this.sendsDropped++ && console.warn("[wasm-client] an analytics update found the cmd ring full: dropped"));
        var tB, Sc, yB;
        this.unsentPage = null, this.pendingLightFailures -= Math.min(this.pendingLightFailures, jM.e), (0, As.l)(this.fpsOverTime, this.initialFps, ec, Oc)
      }
    }
    var OM = nc(37825);

    function TM(cB, Bc, nc) {
      const Vc = new Map;
      return (0, OM.c)(((cB, nc, Vc) => Bc.Zr(cB, nc, Vc)), ((Bc, nc, Ic) => {
        const rB = `${Bc},${nc},${Ic}`;
        return Vc.has(rB) || Vc.set(rB, (0, wB.b)(cB, Bc, nc, Ic)), Vc.get(rB)
      }), nc)
    }
    var fM = nc(37828),
      mP = nc(38733);

    function eM(cB) {
      const Bc = null !== cB && 0 !== (mB.v.playerFlags(cB.api.apiView, 0) & mB.vd.CursorAim);
      Bc !== (0, mP.o)() && (0, mP.K)(Bc, null !== cB)
    }

    function tP(cB) {
      return (0, SV.c)(yI.J, cB)
    }
    const SM = new rB.f((cB => nc(40547)(`./${cB}/${cB}Client`)));
    let yP = null,
      zP = null;
    async function pM(cB) {
      yP ??= nc.e(25).then((() => nc(37587))).then((cB => {
        zP = cB.createDefaultClientPlugins
      }), (cB => {
        throw yP = null, cB
      })), await Promise.all([SM.load(cB), yP])
    }

    function hM(cB) {
      cB.load(new oB(WV, new XV))
    }
    let aP = !1;
    const lM = new WeakMap;

    function YM(cB) {
      try {
        cB()
      } catch (Bc) {
        console.error("[bloxd-wasm-client] a session-end step failed", Bc)
      }
    }

    function LM(cB, Bc) {
      ! function() {
        var cB, Bc;
        EV.d.volume();
        const nc = EV.d;
        null === (cB = nc._autoResume) || void 0 === cB || cB.call(nc), null === (Bc = nc._autoSuspend) || void 0 === Bc || Bc.call(nc)
      }(), Bc.audio.prepare();
      const nc = new pc(Bc.core, Bc.memory, Bc.audio);
      let rB;
      try {
        rB = new PI(nc, Bc.options)
      } catch (Tc) {
        return cB.crash(OI.A, Tc), null
      }(0, Mc.g)(qr(nc, rB));
      const qB = new yM({
        running: cB,
        api: nc,
        core: Bc.core,
        memory: Bc.memory,
        staleOr: Bc.staleOr,
        reportFault: Bc.reportReplayFault,
        options: Bc.options,
        sessionInfo: Bc.sessionInfo,
        replayShaderPack: Bc.replayShaderPack
      });
      (0, VV.C)();
      const Oc = new QV({
        api: nc,
        tables: rB,
        sessionInfo: Bc.sessionInfo,
        gameFactory: cB => SM.loadedFactory(cB),
        defaultPlugins: (cB, Bc, nc, Vc) => {
          if (null === zP) throw new Error("The default plugins started before they loaded");
          return zP(cB, Bc, nc, Vc)
        },
        serverOptions: Bc.options,
        onNetEvent: cB => {
          qB.netEvent(cB), Bc.onNetEvent(cB)
        },
        playSound: (cB, nc, Vc, Ic, rB, uc, sc) => Bc.audio.playGame(cB, nc, Vc, Ic, rB, uc, sc),
        onSessionEnd: () => {
          YM(Ic.o), YM(KV), YM((() => {
            Vc.d.set({
              openInGameMenuName: null
            })
          })), YM((() => {
            Bc.audio.cancelPreload()
          }))
        },
        beforeWrite: Bc.beforeWrite,
        beforeOp: Bc.beforeOp,
        cameraScreen: iI,
        showCameraFacing: xI,
        onEventOverflow: Bc.onEventOverflow,
        screenBandY: sc.m,
        replayEntities: qB.entityHooks,
        hasPackModel: Bc.hasPackModel
      });
      return Oc.attach(cB), lM.set(Oc, qB), NV(Oc.items, Bc.audio),
        function(cB) {
          cB.setClientFreeCameraGrant("isDev", !1);
          const Bc = Bc => {
            cB.setClientFreeCameraGrant("hasDeveloperRank", Bc.playerHasRank("developer"))
          };
          (0, uc.m)("userContextUpdated", Bc)
        }(Oc), aP || (aP = !0, (0, uc.m)("appManagerUpdated|openInGameMenuName", (cB => {
          !cB && (0, Pc.h)().includes("InGameMenu") && (0, Pc.l)("InGameMenu")
        }))), Oc
    }

    function gP(cB) {
      try {
        cB.closeGame()
      } finally {
        var Bc;
        null === (Bc = lM.get(cB)) || void 0 === Bc || Bc.stop(), lM.delete(cB)
      }
    }
  },
  38814: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => Ic,
      e: () => uc
    });
    const Vc = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;

    function Ic(cB) {
      if (cB instanceof WebAssembly.RuntimeError) return !0;
      const Bc = cB instanceof Error ? cB.stack : void 0;
      return "string" === typeof Bc && Vc.test(Bc)
    }
    const rB = 500;

    function uc(cB) {
      let Bc = "[object Object]";
      try {
        Bc = String(cB)
      } catch {}
      if ("[object Object]" !== Bc) return Bc;
      try {
        var nc, Vc;
        return null !== (nc = null === (Vc = JSON.stringify(cB)) || void 0 === Vc ? void 0 : Vc.slice(0, rB)) && void 0 !== nc ? nc : Bc
      } catch {
        return Bc
      }
    }
  },
  8327: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => Ic,
      f: () => rB
    });
    var Vc = nc(8290);
    const Ic = "Air",
      rB = Object.freeze(new Vc.f(Ic, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);