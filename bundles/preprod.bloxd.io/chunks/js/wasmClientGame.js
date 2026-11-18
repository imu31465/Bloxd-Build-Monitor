export const id = 49;
export const ids = [49];
export const modules = {
  41083: (yb, bb, Wy) => {
    var Uy = {
      "./bedwars/bedwarsClient": [37904, 9],
      "./bridgeBattle/bridgeBattleClient": [37912, 10],
      "./buildAFactory2/buildAFactory2Client": [37172, 66, 65, 64, 206, 222, 11],
      "./classic/classicClient": [37914, 12],
      "./clutch/clutchClient": [37921, 13],
      "./containmentBreach/containmentBreachClient": [37924, 14],
      "./cooking/cookingClient": [38044, 15],
      "./defusal/defusalClient": [38048, 16],
      "./frontline/frontlineClient": [38051, 66, 65, 64, 17],
      "./goalRush/goalRushClient": [38060, 18],
      "./luckyBedwars/luckyBedwarsClient": [38062, 19],
      "./ninetyNineNights/ninetyNineNightsClient": [38064, 20],
      "./oneBlock/oneBlockClient": [38070, 21],
      "./plots/plotsClient": [38075, 204, 226, 22],
      "./pvpCiv/pvpCivClient": [38149, 23],
      "./skyIslands/skyIslandsClient": [38151, 24],
      "./skyblock/skyblockClient": [37202, 66, 206, 178, 25],
      "./tsunami/tsunamiClient": [38154, 26]
    };

    function hy(yb) {
      if (!Wy.o(Uy, yb)) return Promise.resolve().then((() => {
        var bb = new Error("Cannot find module '" + yb + "'");
        throw bb.code = "MODULE_NOT_FOUND", bb
      }));
      var bb = Uy[yb],
        hy = bb[0];
      return Promise.all(bb.slice(1).map(Wy.e)).then((() => Wy(hy)))
    }
    hy.keys = () => Object.keys(Uy), hy.id = 41083, yb.exports = hy
  },
  35279: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => hy,
      h: () => fy
    });
    let Uy = !1;

    function hy() {
      return Uy
    }

    function fy(yb) {
      return Uy !== yb && (Uy = yb, !0)
    }
  },
  37672: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => fy,
      h: () => hy
    });
    var Uy = Wy(23);

    function hy(yb) {
      return "refetchCode" === yb || "devDownloadJson" === yb || yb.startsWith("Plugin")
    }

    function fy(yb, bb) {
      "refetchCode" !== yb ? "Plugin|MobAiPlugin|ShowPetUi" !== yb ? Promise.all([Wy.e(95), Wy.e(96), Wy.e(91), Wy.e(93), Wy.e(194)]).then((() => Wy(40216))).then((Wy => {
        let {
          runClientGameMessage: Uy
        } = Wy;
        Uy(yb, bb)
      })).catch((bb => {
        console.error(`Game message ${yb} failed`, bb)
      })) : Uy.g.EZ("showPetUi", bb) : Uy.g.EZ("refetchCode")
    }
  },
  41068: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => Uy,
      c: () => hy
    });
    const Uy = ["recording", "freecam", "keyframe"];

    function hy() {
      const yb = crypto.getRandomValues(new Uint32Array(2));
      return BigInt(yb[1]) << 32n | BigInt(yb[0])
    }
  },
  8376: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => cb,
      e: () => Py
    });
    var Uy = Wy(19);
    const hy = 24,
      fy = "farNametags",
      Zy = 1e5;

    function cb() {
      var yb;
      return null === (yb = Uy.d.get("showDistantNametags")) || void 0 === yb || yb
    }

    function Py() {
      var yb;
      return null !== (yb = function() {
        const yb = new URLSearchParams(window.location.search).get(fy),
          bb = null === yb || "" === yb ? NaN : Number(yb);
        return Number.isFinite(bb) && bb >= 0 ? Math.min(bb, Zy) : null
      }()) && void 0 !== yb ? yb : cb() ? 0 : hy
    }
  },
  41060: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      blockIdOf: () => io.b,
      clearWasmCameraScreen: () => AU,
      creativeItemIds: () => WU.creativeItemIds,
      decodeMapSettings: () => XP,
      drainTextRerasters: () => Xc.c,
      enchantmentPerksOf: () => WU.enchantmentPerksOf,
      endGameHost: () => jo,
      followCursorAim: () => YP,
      followMenuPrefs: () => Ih,
      loadAudio: () => ao,
      loadClientGame: () => HP,
      loadTextIcons: () => Xc.h,
      rasterText: () => Yc.c,
      readBoardToEdit: () => vo,
      setTextHost: () => Xc.l,
      setTextLocalPlayer: () => Xc.n,
      showInCreativeInvenOf: () => WU.showInCreativeInvenOf,
      startGameHost: () => QP,
      startShellAnalytics: () => GP,
      startSkyFeed: () => dc,
      textChanged: () => Xc.s,
      warmText: () => Yc.f,
      wasmCameraScreen: () => xh
    });
    Wy(35288);
    var Uy = Wy(19),
      hy = Wy(35551),
      fy = Wy(37804),
      Zy = Wy(23),
      cb = Wy(2706),
      Py = Wy(35549),
      oy = Wy(1145),
      By = Wy(535),
      Ky = Wy(36932),
      ey = Wy(3996),
      qb = Wy(39156),
      sy = Wy(39097);
    const Sy = sy.Lb / 4,
      Ey = sy.n.PlaySound,
      ly = sy.n.SoundReset,
      mb = ey.O.ReplayFailed,
      Cy = ey.O.RecorderEvent;
    class Ty {
      constructor(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.core = yb, this.memory = bb, this.audio = Wy, this.serverIds = new Int32Array(256).fill(sy.id), this.kinds = new Uint16Array(256), this.idStr = new Array(256).fill(null), this.indexById = new Map, this.queries = void 0, this.buffer = null, this.viewPtr = -1, this.view = new DataView(new ArrayBuffer(sy.s.BYTES)), this.renderPtr = 0, this.Hy = 0, this.renderCapacity = 0, this.render = new Float32Array(0), this.visPtr = 0, this.vis = new Uint8Array(0), this.renderBuffer = null, this.eventsBuffer = null, this.eventsPtr = 0, this.eventsLen = 0, this.events = new DataView(new ArrayBuffer(0)), this.audioView = null, this.scratchPtr = -1, this.corruption = null, this.replay = null, this.queries = new sy.U(yb, (() => {
          this.scratchPtr = -1, this.ensureViews()
        }))
      }
      scratch() {
        return this.scratchPtr < 0 && (this.scratchPtr = this.core.PKy(), this.ensureViews()), this.scratchPtr
      }
      eventBytes(yb, bb) {
        const Wy = this.eventView();
        return new Uint8Array(Wy.buffer, Wy.byteOffset + yb, bb)
      }
      get apiView() {
        return this.ensureViews(), this.view
      }
      ensureViews() {
        this.memory().buffer !== this.buffer && this.reView()
      }
      get localId() {
        return sy.s.localId(this.apiView, 0)
      }
      localDeaths() {
        return sy.s.localDeaths(this.apiView, 0)
      }
      rereadDirectory() {
        const yb = this.apiView,
          bb = sy.s.entRenderPtr(yb, 0),
          Wy = sy.s.entVisPtr(yb, 0),
          Uy = sy.s.entCapacity(yb, 0);
        if (bb !== this.renderPtr || Wy !== this.visPtr || Uy !== this.Hy || this.renderBuffer !== this.buffer) {
          this.renderPtr = bb, this.visPtr = Wy, this.Hy = Uy, this.renderBuffer = this.buffer;
          const yb = this.memoryView(Float32Array, bb, Uy * Sy, "the render array"),
            hy = this.memoryView(Uint8Array, Wy, Uy, "the visibility array");
          this.renderCapacity = yb && hy ? Uy : 0, this.render = yb && hy ? yb : new Float32Array(0), this.vis = yb && hy ? hy : new Uint8Array(0)
        }
      }
      memoryView(yb, bb, Wy, Uy) {
        try {
          return (0, qb.v)(yb, this.memory().buffer, bb, Wy, Uy)
        } catch (hy) {
          return this.keepCorruption(hy), null
        }
      }
      memoryData(yb, bb, Wy, Uy) {
        try {
          return (0, qb.f)(this.memory().buffer, yb, bb, Wy, Uy)
        } catch (hy) {
          return this.keepCorruption(hy), null
        }
      }
      reportCorruption(yb) {
        this.keepCorruption(new qb.b(yb))
      }
      keepCorruption(yb) {
        if (!(yb instanceof qb.b)) throw yb;
        this.corruption ??= yb
      }
      throwCorruption() {
        if (this.corruption) throw this.corruption
      }
      walk(yb, bb, Wy) {
        this.rereadDirectory(), this.throwCorruption();
        const {
          ptr: Uy,
          len: hy
        } = yb;
        this.eventsPtr = Uy, this.eventsLen = hy, this.eventsBuffer = null;
        const fy = this.eventView();
        for (let oy = 0; oy < hy;) {
          const yb = fy.getUint32(oy, !0),
            Wy = 65535 & yb,
            Uy = yb >>> 16,
            hy = oy + ey.N;
          if (Wy === sy.n.EntitySpawned) {
            var Zy;
            if (Uy !== sy.Sb.BYTES) throw Oy(Wy, oy, Uy);
            const yb = sy.Sb.serverId(fy, hy);
            this.spawned(yb, sy.Sb.index(fy, hy), sy.Sb.kind(fy, hy)), null === (Zy = bb.entityAdded) || void 0 === Zy || Zy.call(bb, yb)
          } else if ((Wy === sy.n.ChunkSlot || Wy === sy.n.EntityInfoChanged) && !(0, sy.oe)(Wy, fy, hy, Uy, bb)) throw Oy(Wy, oy, Uy);
          oy = hy + (0, ey.Wd)(Uy)
        }
        try {
          var cb;
          null === (cb = bb.afterPrescan) || void 0 === cb || cb.call(bb), this.throwCorruption(), !Wy() && this.dispatch(yb, bb, Wy) && (this.throwCorruption(), this.applyListener(), bb.afterWalk(yb.kind)), this.throwCorruption()
        } catch (Py) {
          throw Py instanceof qb.b && (this.corruption ??= Py), Py
        } finally {
          Wy() || null !== this.corruption || this.applyDespawns(hy, bb)
        }
      }
      applyDespawns(yb, bb) {
        const Wy = this.eventView();
        for (let hy = 0; hy < yb;) {
          const yb = Wy.getUint32(hy, !0),
            fy = hy + ey.N;
          if ((65535 & yb) === sy.n.EntityDespawned && yb >>> 16 === sy.Sb.BYTES) {
            const yb = sy.Sb.serverId(Wy, fy);
            var Uy;
            if (this.despawned(yb, sy.Sb.index(Wy, fy))) null === (Uy = bb.entityRemoved) || void 0 === Uy || Uy.call(bb, yb)
          }
          hy = fy + (0, ey.Wd)(yb >>> 16)
        }
        this.rereadDirectory()
      }
      dispatch(yb, bb, Wy) {
        const {
          len: Uy,
          net: hy,
          netOffsets: fy
        } = yb;
        let Zy = this.eventView(),
          cb = 0;
        for (let Jy = 0; Jy < Uy;) {
          const yb = Zy.getUint32(Jy, !0),
            Uy = 65535 & yb,
            gb = yb >>> 16,
            Ry = Jy + ey.N;
          let vb = !1;
          if (cb < hy.length && fy[cb] === Jy) bb.netEvent(hy[cb]), cb++, vb = !0;
          else if (Uy === ey.O.LocalPlayerBound) {
            var Py;
            if (gb !== ey.nb) throw Oy(Uy, Jy, gb);
            null === (Py = bb.localPlayerBound) || void 0 === Py || Py.call(bb, Zy.getInt32(Ry, !0)), vb = !0
          } else if (Uy === ey.O.LocalHurt) {
            var oy;
            if (gb !== ey.lb) throw Oy(Uy, Jy, gb);
            null === (oy = bb.localHurt) || void 0 === oy || oy.call(bb, Zy.getInt32(Ry, !0), Zy.getFloat32(Ry + 4, !0), Zy.getUint32(Ry + 8, !0)), vb = !0
          } else if (Uy === ey.O.AttackHit) {
            var By;
            if (gb !== ey.d) throw Oy(Uy, Jy, gb);
            const yb = Zy.getFloat32(Ry, !0),
              Wy = Zy.getFloat32(Ry + 4, !0),
              hy = Zy.getFloat32(Ry + 8, !0),
              fy = Zy.getUint32(Ry + 12, !0);
            null === (By = bb.attackHit) || void 0 === By || By.call(bb, yb, Wy, hy, 0 !== (fy & ey.j.Crit), 0 !== (fy & ey.j.HitSelf))
          } else if (Uy === ey.O.PhysicsType) {
            var Ky;
            if (gb !== ey.Qb) throw Oy(Uy, Jy, gb);
            null === (Ky = bb.physicsType) || void 0 === Ky || Ky.call(bb, Zy.getUint32(Ry, !0), Zy.getInt32(Ry + 4, !0)), vb = !0
          } else if (Uy === ey.O.VehicleEffect) {
            var qb;
            const yb = Gy(Zy, Ry, gb);
            if (null === yb) throw Oy(Uy, Jy, gb);
            null === (qb = bb.vehicleEffect) || void 0 === qb || qb.call(bb, yb.op, yb.name, yb.icon, yb.level, yb.durationMs), vb = !0
          } else if (Uy === ey.O.ZoomChanged) {
            var Sy;
            if (gb !== ey.Hd) throw Oy(Uy, Jy, gb);
            null === (Sy = bb.zoomChanged) || void 0 === Sy || Sy.call(bb, Zy.getFloat32(Ry, !0), Zy.getUint8(Ry + 4)), vb = !0
          } else if (Uy === ey.O.ZoomDisabled) {
            var Ty;
            if (0 !== gb) throw Oy(Uy, Jy, gb);
            null === (Ty = bb.zoomDisabled) || void 0 === Ty || Ty.call(bb), vb = !0
          } else if (Uy === ey.O.GameCamera) {
            var Vy;
            null === (Vy = bb.gameCamera) || void 0 === Vy || Vy.call(bb, new Uint8Array(Zy.buffer, Zy.byteOffset + Ry, gb).slice()), vb = !0
          } else if (Uy === sy.n.ChunkSlot || Uy === sy.n.EntityInfoChanged);
          else if (Uy >= Ey && Uy <= ly) {
            if (this.audio && !this.audio.onAudioEvent(Uy, Zy, Ry, gb)) throw Oy(Uy, Jy, gb)
          } else if (Uy >= mb && Uy <= Cy) {
            if (this.replay) {
              if (!this.replay.onReplayEvent(Uy, Zy, Ry, gb)) throw Oy(Uy, Jy, gb);
              vb = !0
            }
          } else if (Uy >= sy.vd && Uy <= sy.zd && Uy !== ey.O.EnvLighting) {
            if (!(0, sy.oe)(Uy, Zy, Ry, gb, bb)) throw Oy(Uy, Jy, gb);
            vb = !0
          }
          if (vb) {
            if (Wy()) return !1;
            Zy = this.eventView()
          }
          Jy = Ry + (0, ey.Wd)(gb)
        }
        return !Wy()
      }
      applyListener() {
        var yb;
        if (!this.audio) return;
        const bb = sy.s.audioViewPtr(this.apiView, 0),
          Wy = this.memory().buffer;
        let Uy = this.audioView;
        (null === (yb = Uy) || void 0 === yb ? void 0 : yb.buffer) === Wy && Uy.byteOffset === bb || (Uy = (0, qb.f)(Wy, bb, sy.v.BYTES, 8, "the audio view"), this.audioView = Uy), Uy && this.audio.applyListener(Uy)
      }
      indexOf(yb) {
        return this.indexById.get("number" === typeof yb ? yb : +yb)
      }
      isLocal(yb) {
        return yb !== sy.id && yb === sy.s.localId(this.apiView, 0)
      }
      Tl(yb) {
        const bb = [0, 0, 0];
        return this.readPosition("number" === typeof yb ? yb : +yb, bb) ? bb : null
      }
      readPosition(yb, bb) {
        const Wy = this.apiView;
        if (void 0 !== this.indexById.get(yb) && this.isLocal(yb)) {
          for (let yb = 0; yb < 3; yb++) bb[yb] = sy.s.localPos(Wy, 0, yb);
          return !0
        }
        return this.readDrawnPosition(yb, bb)
      }
      readDrawnPosition(yb, bb) {
        const Wy = this.apiView,
          Uy = this.indexById.get(yb);
        if (void 0 === Uy || Uy >= this.renderCapacity) return bb[0] = bb[1] = bb[2] = NaN, !1;
        const hy = Uy * Sy;
        for (let fy = 0; fy < 3; fy++) bb[fy] = this.render[hy + fy] + sy.s.origin(Wy, 0, fy);
        return !0
      }
      checkValid(yb) {
        return void 0 !== this.indexOf(yb)
      }
      isAlive(yb) {
        const bb = this.indexOf(yb);
        if (void 0 === bb) return null;
        if (this.ensureViews(), bb >= this.renderCapacity) return null;
        const Wy = this.vis[bb];
        return 0 === Wy ? null : 0 !== (Wy & sy.me.Alive)
      }
      getEntityType(yb) {
        const bb = this.indexOf(yb);
        return void 0 === bb ? this.isLocal("number" === typeof yb ? yb : +yb) ? "Player" : null : Jy(this.kinds[bb])
      }
      spawned(yb, bb, Wy) {
        if (bb >= 1048576) throw new qb.b(`entity ${yb} spawned at index ${bb}`);
        this.ensureIndex(bb), this.serverIds[bb] === yb && null !== this.idStr[bb] || (this.idStr[bb] = String(yb)), this.serverIds[bb] = yb, this.kinds[bb] = Wy, this.indexById.set(yb, bb)
      }
      despawned(yb, bb) {
        let Wy = !1;
        return this.indexById.get(yb) === bb && (this.indexById.delete(yb), Wy = !0), bb < this.serverIds.length && this.serverIds[bb] === yb && (this.serverIds[bb] = sy.id, this.kinds[bb] = 0, this.idStr[bb] = null), Wy
      }
      ensureIndex(yb) {
        const bb = this.serverIds.length;
        if (yb < bb) return;
        let Wy = 2 * bb;
        for (; Wy <= yb;) Wy *= 2;
        const Uy = new Int32Array(Wy).fill(sy.id);
        Uy.set(this.serverIds), this.serverIds = Uy;
        const hy = new Uint16Array(Wy);
        hy.set(this.kinds), this.kinds = hy;
        for (let fy = bb; fy < Wy; fy++) this.idStr.push(null)
      }
      eventView() {
        const yb = this.memory().buffer;
        return yb !== this.eventsBuffer && (this.eventsBuffer = yb, this.events = new DataView(yb, this.eventsPtr, this.eventsLen)), this.events
      }
      reView() {
        const yb = this.memory().buffer;
        this.buffer = yb, this.viewPtr < 0 && (this.viewPtr = this.core.oKy()), this.view = new DataView(yb, this.viewPtr, sy.s.BYTES), this.rereadDirectory()
      }
    }

    function Vy(yb) {
      return yb >>> sy.b === sy.p.Item
    }

    function Jy(yb) {
      var bb, Wy;
      const Uy = yb & sy.e;
      switch (yb >>> sy.b) {
        case sy.p.Lifeform:
          return null !== (bb = By.h[Uy]) && void 0 !== bb ? bb : null;
        case sy.p.Throwable:
          return null !== (Wy = Ky.o[Uy]) && void 0 !== Wy ? Wy : null;
        case sy.p.Mesh:
          return "Mesh";
        case sy.p.Audio:
          return "AudioEntity";
        case sy.p.Item:
          return "Item";
        default:
          return null
      }
    }
    const gb = new TextDecoder;

    function Gy(yb, bb, Wy) {
      if (Wy < ey.hd.HEAD_BYTES) return null;
      const Uy = yb.getUint32(bb, !0),
        hy = yb.getUint32(bb + 20, !0),
        fy = yb.getUint32(bb + 24, !0),
        Zy = ey.hd.HEAD_BYTES + (0, ey.Wd)(hy);
      if (Uy !== ey.hd.UPDATE && Uy !== ey.hd.REMOVE || hy > Wy || Zy + fy > Wy) return null;
      const cb = (Wy, Uy) => gb.decode(new Uint8Array(yb.buffer, yb.byteOffset + bb + Wy, Uy)),
        Py = yb.getFloat64(bb + 12, !0);
      return {
        op: Uy,
        level: yb.getFloat64(bb + 4, !0),
        durationMs: Number.isNaN(Py) ? null : Py,
        name: cb(ey.hd.HEAD_BYTES, hy),
        icon: cb(Zy, fy)
      }
    }

    function Oy(yb, bb, Wy) {
      return new qb.b(`event ${yb} at ${bb} of ${Wy} bytes`)
    }
    var Ry = Wy(258),
      vb = Wy(1080),
      ib = Wy(37672),
      My = Wy(1589),
      Yy = Wy(39210),
      Xy = Wy(1541),
      ny = Wy(37832),
      uy = Wy(37857),
      rb = Wy(37846),
      Hy = Wy(39139),
      ab = Wy(1983),
      Fy = Wy(37826),
      py = Wy(37853);
    const Ly = Math.max(sy.yb.BYTES, sy.qb.BYTES, sy.tb.BYTES);

    function Qy(yb) {
      if (!(0, py.f)(yb)) return null;
      const bb = Number(yb);
      return (0 | bb) === bb ? bb : null
    }
    class jb {
      constructor(yb) {
        this.api = yb, this.bodyHeading = 0, this.viewHeading = 0, this.defaultPose = (0, Fy.k)(), this.defaultPoseRead = !1, this.defaultFov = 0, this.baseFov = 0, this.aspect = 1, this.pM = null, this.entityLive = !1, this.entityFeet = [0, 0, 0], this.entityAim = [0, 0, 0], this.entityHeading = 0, this.localId = sy.id, this.localName = String(sy.id), this.scratch = null
      }
      readView() {
        this.defaultPoseRead = !1, this.pM = null;
        const yb = this.api.queries.directorView() >= sy.yb.BYTES ? this.scratchView() : null;
        null !== yb && (this.defaultFov = (0, Xy.A)(sy.yb.fov(yb, 0)), this.baseFov = (0, Xy.A)(sy.yb.baseFov(yb, 0)), this.aspect = sy.yb.aspect(yb, 0), this.bodyHeading = sy.yb.bodyHeading(yb, 0))
      }
      getViewHeading() {
        return this.viewHeading
      }
      setViewHeading(yb) {
        this.viewHeading = yb
      }
      get localPlayerId() {
        const yb = sy.s.localId(this.api.apiView, 0);
        return yb !== this.localId && (this.localId = yb, this.localName = String(yb)), this.localName
      }
      getEntityPosition(yb) {
        return this.readEntity(yb) ? this.entityFeet : null
      }
      getEntityAimPoint(yb) {
        return this.readEntity(yb) ? this.entityAim : null
      }
      getEntityHeading(yb) {
        const bb = Qy(yb);
        if (null === bb) return null;
        const Wy = sy.s.localId(this.api.apiView, 0);
        return bb === Wy && Wy !== sy.id ? this.viewHeading : this.readEntity(yb) ? this.entityHeading : null
      }
      raycastTerrain(yb, bb, Wy) {
        const Uy = this.api.queries.cameraSweep(yb[0], yb[1], yb[2], bb[0], bb[1], bb[2], Wy);
        return Uy < Wy - 1e-6 ? Uy : null
      }
      getDefaultPose() {
        if (this.defaultPoseRead) return this.defaultPose;
        this.defaultPoseRead = !0;
        const yb = this.defaultPose;
        yb.fov = this.defaultFov;
        const bb = this.api.queries.directorDefaultPose() >= sy.qb.BYTES ? this.scratchView() : null;
        if (null === bb) return yb;
        for (let Wy = 0; Wy < 3; Wy++) yb.position[Wy] = sy.qb.eye(bb, 0, Wy);
        return yb.heading = sy.qb.heading(bb, 0), yb.pitch = sy.qb.pitch(bb, 0), yb
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
      readEntity(yb) {
        const bb = Qy(yb);
        if (null === bb) return !1;
        if (bb === this.pM) return this.entityLive;
        this.pM = bb;
        const Wy = this.api.queries.directorEntity(bb) >= sy.tb.BYTES ? this.scratchView() : null;
        if (this.entityLive = null !== Wy, null === Wy) return !1;
        for (let Uy = 0; Uy < 3; Uy++) this.entityFeet[Uy] = sy.tb.feet(Wy, 0, Uy), this.entityAim[Uy] = this.entityFeet[Uy];
        return this.entityAim[1] += sy.tb.eyeHeight(Wy, 0), this.entityHeading = sy.tb.heading(Wy, 0), !0
      }
      scratchView() {
        const yb = this.api.scratch(),
          bb = this.api.memory().buffer,
          Wy = this.scratch;
        return null !== Wy && Wy.buffer === bb && Wy.byteOffset === yb ? Wy : (this.scratch = this.api.memoryData(yb, Ly, 8, "the director's record"), this.scratch)
      }
    }
    const Dy = {
        mode: "default"
      },
      tb = {
        show: () => {},
        clear: () => {}
      };

    function wy() {
      return "undefined" !== typeof document && "hidden" === document.visibilityState
    }
    class kb {
      constructor(yb) {
        this.options = yb, this.Kb = void 0, this.director = void 0, this.latest = Dy, this.pending = void 0, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.look = {
          aWy: 0,
          Fby: 0
        }, this.pointedAt = {
          heading: 0,
          pitch: 0
        }, this.engaged = !1, this.calledThisFrame = !1, this.holding = !1, this.lastCallMs = 0, this.answeredPose = !1, this.Yf = new Int32Array(3 * sy.Xd), this.centresLen = 0, this.centresUnsent = !1, this.next = new Int32Array(3 * sy.Xd), this.Kb = new jb(yb.api), this.director = new rb.d(this.Kb)
      }
      settingsChanged(yb) {
        let bb = Dy;
        if (yb.length > 0) try {
          bb = (0, Hy.c)(yb)
        } catch {}
        this.latest = bb, this.pending = bb
      }
      call(yb, bb, Wy, Uy, hy, fy) {
        var Zy, cb;
        let Py;
        this.holding = !1;
        try {
          Py = this.answer(yb, bb, Wy, Uy, hy, fy)
        } catch (ey) {
          var oy, By;
          throw this.answeredPose = !1, null === (oy = (By = this.options).showFacing) || void 0 === oy || oy.call(By, null), ey
        }
        const Ky = this.answeredPose && 0 === (Uy & sy.ub.Held);
        return this.answeredPose = Py !== sy.mb.None, this.holding = this.answeredPose && !Ky, null === (Zy = (cb = this.options).showFacing) || void 0 === Zy || Zy.call(cb, this.holding ? this.facing : null), Py
      }
      holdsView() {
        return this.holding
      }
      answer(yb, bb, Wy, Uy, hy, fy) {
        this.calledThisFrame = !0, this.engaged = !0, this.lastCallMs = this.now();
        const {
          Kb: Zy
        } = this;
        Zy.readView();
        if (0 !== (Uy & sy.ub.Held) || Zy.setViewHeading((0, ny.r)(Zy.bodyHeading)), void 0 !== this.pending) {
          const yb = this.pending;
          this.pending = void 0, this.director.setSettings(yb), this.syncShownSettings()
        }
        this.readLook((0, ab.e)(bb), (0, ab.e)(Wy), Uy, (0, ab.e)(hy), (0, ab.e)(fy));
        const cb = this.director.update(yb / 1e3, this.look);
        if (this.syncShownSettings(), this.writeCentres(this.director.getLoadingPositions()), this.hidden() || this.screen().show(this.director.getScreenFade(), this.director.getSettings()), !cb) return sy.mb.None;
        const [Py, oy, By] = cb.position;
        if (0 === this.options.api.queries.directorPose(Py, oy, By, (0, ny.r)(cb.heading), (0, ny.i)(cb.pitch), (0, Xy.j)(cb.fov))) return sy.mb.None;
        if ("default" === this.director.getSettings().mode) return sy.mb.Pose;
        switch (this.facing) {
          case "camera":
            return sy.mb.FaceCamera;
          case "cursor":
            return sy.mb.FaceCursor;
          default:
            return sy.mb.FaceMovement
        }
      }
      afterFrame(yb) {
        yb ? (this.calledThisFrame || (this.holding = !1, this.engaged && this.idle()), this.calledThisFrame = !1) : this.centresLen > 0 && this.hidden() && this.now() - this.lastCallMs > 1e3 && this.setCentres(0), this.centresUnsent && this.sendCentres()
      }
      reset() {
        this.latest = Dy, this.idle()
      }
      restart() {
        const yb = this.holding;
        this.idle(), this.holding = yb
      }
      idle() {
        var yb, bb;
        this.engaged && this.screen().clear(), this.engaged = !1, this.holding = !1, this.director = new rb.d(this.Kb), this.pending = this.latest, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.answeredPose = !1, null === (yb = (bb = this.options).showFacing) || void 0 === yb || yb.call(bb, null), this.setCentres(0)
      }
      syncShownSettings() {
        const yb = this.director.getSettings();
        if (yb === this.shownSettings) return;
        this.shownSettings = yb;
        const bb = (0, uy.f)(yb);
        this.facing = bb.facing, this.mouseTurns = bb.mouseTurns
      }
      readLook(yb, bb, Wy, Uy, hy) {
        const fy = this.look,
          Zy = 0 !== (Wy & sy.ub.LookPointed);
        if (null === this.mouseTurns && !Zy) return fy.aWy = 0, fy.Fby = 0, void(fy.pointedAt = void 0);
        let cb;
        Zy && (this.pointedAt.heading = Uy, this.pointedAt.pitch = hy, cb = this.pointedAt);
        const {
          Kb: Py
        } = this;
        Py.setViewHeading((0, uy.c)(Py.getViewHeading(), yb, bb, cb, "look" === this.mouseTurns, fy))
      }
      writeCentres(yb) {
        const bb = this.next,
          Wy = Math.min(yb.length, sy.Xd);
        for (let Uy = 0; Uy < Wy; Uy++)
          for (let Wy = 0; Wy < 3; Wy++) bb[3 * Uy + Wy] = Math.floor(yb[Uy][Wy] / sy.D);
        this.setCentres(Wy)
      }
      setCentres(yb) {
        const {
          Yf: bb,
          next: Wy
        } = this;
        let Uy = yb === this.centresLen;
        for (let hy = 0; Uy && hy < 3 * yb; hy++) Uy = bb[hy] === Wy[hy];
        Uy || (bb.fill(0), bb.set(Wy.subarray(0, 3 * yb)), this.centresLen = yb, this.centresUnsent = !0, this.sendCentres())
      }
      sendCentres() {
        const yb = this.options.cmd();
        null !== yb && (0, sy.tf)(yb, 0, this.Yf, this.centresLen) && (this.centresUnsent = !1)
      }
      screen() {
        var yb, bb, Wy;
        return null !== (yb = null === (bb = (Wy = this.options).screen) || void 0 === bb ? void 0 : bb.call(Wy)) && void 0 !== yb ? yb : tb
      }
      hidden() {
        var yb;
        return (null !== (yb = this.options.isPageHidden) && void 0 !== yb ? yb : wy)()
      }
      now() {
        var yb, bb, Wy;
        return null !== (yb = null === (bb = (Wy = this.options).now) || void 0 === bb ? void 0 : bb.call(Wy)) && void 0 !== yb ? yb : performance.now()
      }
    }
    const Ny = sy.D * sy.D * sy.D,
      zb = Math.log2(sy.D),
      Iy = sy.D - 1,
      xb = sy.N.BYTES / 4,
      Ay = new Uint16Array(Ny);

    function dy(yb, bb, Wy) {
      return yb * sy.D * sy.D + bb * sy.D + Wy
    }
    class yW {
      constructor(yb) {
        this.chunk = yb
      }
      get data() {
        return this.chunk.gameVoxels()
      }
      index(yb, bb, Wy) {
        return dy(yb, bb, Wy)
      }
    }
    class bW {
      constructor() {
        this.ids = new Map, this.cleared = new Set, this.layers = 0, this.patched = null, this.from = null
      }
    }
    class Wb {
      constructor(yb, bb, Wy, Uy) {
        this.table = yb, this.slot = bb, this.generation = Wy, this.epoch = Uy, this.pb = new yW(this), this.writes = null, this.writeCount = 0, this.shownVersion = 0, this.shownCore = -1, this.shownWrites = -1, this.data = Ay, this.dataPtr = 0, this.dataBuffer = null, this.dataStamp = -1, this.version = 0, this.layers = null, this.layersVersion = -1, this.layersPtr = -1, this.staleLayers = 0
      }
      get sh() {
        return this.voxelData(), this.version === this.shownCore && this.writeCount === this.shownWrites || (this.shownCore = this.version, this.shownWrites = this.writeCount, this.shownVersion = this.table.nextVersion()), this.shownVersion
      }
      get pW() {
        const yb = this.gameVoxels(),
          bb = this.layers ??= new Uint16Array(sy.D);
        this.layersVersion === this.version && this.layersPtr === this.dataPtr || (this.layersVersion = this.version, this.layersPtr = this.dataPtr, this.staleLayers = -1);
        for (let Wy = 0; 0 !== this.staleLayers; Wy++) {
          const Uy = 1 << Wy;
          0 !== (this.staleLayers & Uy) && (this.staleLayers &= ~Uy, bb[Wy] = Ub(yb, Wy))
        }
        return bb
      }
      voxelData() {
        return this.dataStamp === this.table.stamp && 0 !== this.data.length ? this.data : this.reread()
      }
      gameVoxels() {
        const yb = this.voxelData(),
          bb = this.writes;
        if (null === bb || 0 === bb.ids.size) return yb;
        if (bb.from !== yb) {
          const Wy = bb.patched ??= new Uint16Array(Ny);
          Wy.set(yb);
          for (const [yb, Uy] of bb.ids) Wy[yb] = Uy;
          bb.from = yb
        }
        return bb.patched
      }
      written(yb) {
        var bb;
        return null === (bb = this.writes) || void 0 === bb ? void 0 : bb.ids.get(yb)
      }
      hasWrites() {
        return null !== this.writes && 0 !== this.writes.ids.size
      }
      write(yb, bb, Wy) {
        const Uy = this.writes ??= new bW;
        Uy.ids.set(yb, bb), Wy && Uy.cleared.add(yb), null !== Uy.from && (Uy.patched[yb] = bb);
        const hy = 1 << (yb >> zb & Iy);
        Uy.layers |= hy, this.staleLayers |= hy, this.writeCount++
      }
      clearWrites() {
        const yb = this.writes;
        null !== yb && (this.staleLayers |= yb.layers, yb.ids.clear(), yb.cleared.clear(), yb.layers = 0, yb.from = null)
      }
      dataCleared(yb) {
        var bb;
        return !0 === (null === (bb = this.writes) || void 0 === bb ? void 0 : bb.cleared.has(yb))
      }
      reread() {
        this.dataStamp = this.table.stamp;
        const yb = this.table.slotWords(),
          bb = this.slot * xb;
        if (this.epoch !== this.table.epoch || bb + xb > yb.length || 0 === yb[bb + 3] || yb[bb + 2] !== this.generation) return this.data = Ay, this.dataPtr = 0, Ay;
        this.version = yb[bb + 1];
        const Wy = yb[bb + 0],
          Uy = yb.buffer;
        return Wy === this.dataPtr && Uy === this.dataBuffer || (this.dataPtr = Wy, this.dataBuffer = Uy, this.data = this.table.voxelsAt(Uy, Wy)), this.data
      }
    }

    function Ub(yb, bb) {
      const Wy = yb[bb * sy.D];
      for (let Uy = 0; Uy < sy.D; Uy++) {
        const hy = dy(Uy, bb, 0);
        for (let bb = 0; bb < sy.D; bb++)
          if (yb[hy + bb] !== Wy) return 65535
      }
      return Wy
    }
    const hb = new Uint32Array(0),
      fb = 1 << 20,
      Zb = 1 << 21;

    function cW(yb, bb, Wy) {
      const Uy = yb + fb,
        hy = bb + 1024,
        fy = Wy + fb;
      return Uy < 0 || Uy >= Zb || fy < 0 || fy >= Zb || hy < 0 || hy >= 2048 ? -1 : 2048 * (Uy * Zb + fy) + hy
    }

    function Pb(yb, bb, Wy) {
      return dy(yb & Iy, bb & Iy, Wy & Iy)
    }
    class ob {
      constructor(yb, bb) {
        this.memory = yb, this.apiView = bb, this.chunks = new Map, this.written = [], this.lastKey = -1, this.lastChunk = void 0, this.slotsPtr = 0, this.slotsLen = 0, this.slotsBuffer = null, this.slots = hb, this.walkPtr = 0, this.walkLen = 0, this.walkBuffer = null, this.walk = hb, this.epoch = 0, this.stamp = 0, this.versions = 0, this.corruption = null
      }
      apply(yb, bb, Wy, Uy, hy, fy) {
        if (this.lastKey = -1, this.lastChunk = void 0, this.stamp++, fy === sy.P.ResetAll) return this.chunks.clear(), void this.epoch++;
        if (fy !== sy.P.Stored && fy !== sy.P.Unloaded) throw new qb.b(`ChunkSlot flags ${fy}`);
        const Zy = cW(yb, bb, Wy);
        if (Zy < 0) return;
        if (fy === sy.P.Unloaded) return void this.chunks.delete(Zy);
        const cb = this.chunks.get(Zy);
        (null === cb || void 0 === cb ? void 0 : cb.slot) === Uy && cb.generation === hy || this.chunks.set(Zy, new Wb(this, Uy, hy, this.epoch))
      }
      touch() {
        this.stamp++, this.clearOverlay(), this.viewWalkThrough()
      }
      refresh() {
        if (this.stamp++, this.corruption) throw this.corruption;
        const yb = this.apiView(),
          bb = sy.s.chunkSlotsPtr(yb, 0),
          Wy = sy.s.chunkSlotsLen(yb, 0);
        bb === this.slotsPtr && Wy === this.slotsLen || (this.slotsPtr = bb, this.slotsLen = Wy, this.slotsBuffer = null, this.slotWords()), this.viewWalkThrough(), this.clearOverlay()
      }
      viewWalkThrough() {
        const yb = this.apiView(),
          bb = sy.s.walkThroughPtr(yb, 0),
          Wy = sy.s.walkThroughLen(yb, 0);
        bb === this.walkPtr && Wy === this.walkLen || (this.walkPtr = bb, this.walkLen = Wy, this.walkBuffer = null, this.walkWords())
      }
      clearOverlay() {
        for (const yb of this.written) yb.clearWrites();
        this.written.length = 0
      }
      nextVersion() {
        return ++this.versions
      }
      slotWords() {
        const yb = this.memory().buffer;
        var bb;
        yb !== this.slotsBuffer && (this.slotsBuffer = yb, this.slots = null !== (bb = (0, qb.v)(Uint32Array, yb, this.slotsPtr, this.slotsLen * xb, "the chunk directory")) && void 0 !== bb ? bb : hb);
        return this.slots
      }
      voxelsAt(yb, bb) {
        try {
          var Wy;
          return null !== (Wy = (0, qb.v)(Uint16Array, yb, bb, Ny, "a chunk's voxels")) && void 0 !== Wy ? Wy : Ay
        } catch (Uy) {
          if (!(Uy instanceof qb.b)) throw Uy;
          return this.corruption ??= Uy, Ay
        }
      }
      chunk(yb, bb, Wy) {
        var Uy;
        return null !== (Uy = this.chunks.get(cW(yb, bb, Wy))) && void 0 !== Uy ? Uy : null
      }
      isLoaded(yb, bb, Wy) {
        return void 0 !== this.chunkAt(Math.floor(yb), Math.floor(bb), Math.floor(Wy))
      }
      Df(yb, bb, Wy) {
        var Uy;
        const hy = Math.floor(yb),
          fy = Math.floor(bb),
          Zy = Math.floor(Wy),
          cb = this.chunkAt(hy, fy, Zy);
        if (!cb) return 0;
        const Py = Pb(hy, fy, Zy);
        return null !== (Uy = cb.written(Py)) && void 0 !== Uy ? Uy : cb.voxelData()[Py]
      }
      setOverlay(yb, bb, Wy, Uy) {
        let hy = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const fy = this.chunkAt(yb, bb, Wy);
        return !!fy && (fy.hasWrites() || this.written.push(fy), fy.write(Pb(yb, bb, Wy), Uy, hy), !0)
      }
      version(yb, bb, Wy) {
        var Uy, hy;
        return null !== (Uy = null === (hy = this.chunks.get(cW(yb, bb, Wy))) || void 0 === hy ? void 0 : hy.sh) && void 0 !== Uy ? Uy : null
      }
      scan(yb, bb, Wy, Uy, hy, fy, Zy, cb) {
        const Py = sy.D;
        let oy = 0;
        for (let By = Math.floor(bb / Py); By * Py < hy; By++) {
          const Ky = By * Py,
            ey = Math.min(hy - Ky, Py);
          for (let hy = Math.floor(yb / Py); hy * Py < Uy; hy++) {
            const qb = hy * Py,
              sy = Math.min(Uy - qb, Py);
            for (let Uy = Math.floor(Wy / Py); Uy * Py < fy; Uy++) {
              const Sy = this.chunks.get(cW(hy, By, Uy));
              if (!Sy) continue;
              const Ey = Uy * Py,
                ly = Math.max(Wy - Ey, 0),
                mb = Math.min(fy - Ey, Py),
                Cy = Sy.pW,
                Ty = Sy.gameVoxels();
              for (let Wy = Math.max(bb - Ky, 0); Wy < ey; Wy++) {
                const bb = Cy[Wy];
                if (65535 === bb || 0 !== Zy[bb]) {
                  oy++;
                  for (let bb = Math.max(yb - qb, 0); bb < sy; bb++) {
                    const yb = dy(bb, Wy, 0);
                    for (let Uy = ly; Uy < mb; Uy++) {
                      const hy = Ty[yb + Uy];
                      0 !== Zy[hy] && cb.push(qb + bb, Ky + Wy, Ey + Uy, hy)
                    }
                  }
                }
              }
            }
          }
        }
        return oy
      }
      dataCleared(yb, bb, Wy) {
        var Uy;
        const hy = Math.floor(yb),
          fy = Math.floor(bb),
          Zy = Math.floor(Wy);
        return !0 === (null === (Uy = this.chunkAt(hy, fy, Zy)) || void 0 === Uy ? void 0 : Uy.dataCleared(Pb(hy, fy, Zy)))
      }
      isWalkThrough(yb) {
        if (!Number.isInteger(yb) || yb < 0 || yb > 65535) return !1;
        const bb = this.walkWords(),
          Wy = yb >>> 5;
        return Wy < bb.length && 1 === (bb[Wy] >>> (31 & yb) & 1)
      }
      walkWords() {
        const yb = this.memory().buffer;
        var bb;
        yb !== this.walkBuffer && (this.walkBuffer = yb, this.walk = null !== (bb = (0, qb.v)(Uint32Array, yb, this.walkPtr, this.walkLen, "the walk-through bits")) && void 0 !== bb ? bb : hb);
        return this.walk
      }
      chunkAt(yb, bb, Wy) {
        if ((0 | yb) !== yb || (0 | bb) !== bb || (0 | Wy) !== Wy) return;
        const Uy = cW(yb >> zb, bb >> zb, Wy >> zb);
        return Uy !== this.lastKey && (this.lastKey = Uy, this.lastChunk = this.chunks.get(Uy)), this.lastChunk
      }
    }
    var Bb = Wy(37188),
      Kb = Wy(36463),
      eb = Wy(35533),
      qW = Wy(35397),
      sb = Wy(35411),
      Sb = Wy(37769),
      Eb = Wy(167);
    const lb = ["ambient", "crowd", "customGame_horror", "dig", "fishing", "gameStart", "gunMisc", "gunPistol", "gunRifle", "gunSemiAutomatic", "gunShotgun", "gunSubmachineGun", "mob", "note", "random", "rpg", "step", "survivalFactory"],
      mW = [
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
      Cb = mW.map((yb => {
        let [bb] = yb;
        return bb
      })),
      Tb = Uint8Array.from(mW, (yb => {
        let [, bb] = yb;
        return bb
      })),
      Vb = {
        semi_automatic: 9,
        submachine: 11,
        rifle: 8,
        pistol: 7,
        shotgun: 10
      },
      Jb = 6;
    var gW = Wy(35527),
      Gb = Wy(2431);
    const Ob = 2 ** lb.length - 1;
    class Rb {
      constructor(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Gb.c;
        this.sheet = yb, this.onError = bb, this.idle = Wy, this.queue = [], this.asked = 0, this.cancelIdle = null, this.gen = 0, this.onIdle = yb => {
          this.cancelIdle = null;
          try {
            if (yb.timeRemaining() >= 1) {
              let yb = this.queue.shift();
              for (; void 0 !== yb && !this.load(yb);) yb = this.queue.shift()
            }
          } catch (bb) {
            this.onError(bb)
          } finally {
            this.schedule()
          }
        }
      }
      preload(yb) {
        const bb = yb & Ob & ~this.asked;
        if (0 !== bb) {
          this.asked |= bb;
          for (let yb = 0; yb < lb.length; yb++) bb & 1 << yb && this.queue.push(yb);
          this.schedule()
        }
      }
      cancel() {
        var yb;
        this.queue.length = 0, this.asked = 0, this.gen++, null === (yb = this.cancelIdle) || void 0 === yb || yb.call(this), this.cancelIdle = null
      }
      schedule() {
        null === this.cancelIdle && this.queue.length > 0 && (this.cancelIdle = this.idle(this.onIdle))
      }
      load(yb) {
        const bb = this.sheet(yb, !1),
          Wy = this.sheet(yb, !0),
          [Uy, hy] = "unloaded" === bb.state() && "unloaded" !== Wy.state() ? [Wy, bb] : [bb, Wy],
          fy = this.gen,
          Zy = () => {
            try {
              fy === this.gen && "unloaded" === hy.state() && hy.load()
            } catch (yb) {
              this.onError(yb)
            }
          },
          cb = Uy.state();
        return "unloaded" === cb ? (Uy.once("load", Zy), Uy.load(), !0) : "unloaded" === hy.state() && ("loading" === cb ? (Uy.once("load", Zy), !1) : (hy.load(), !0))
      }
    }
    var vW = Wy(39399);
    const iW = {
        coneInnerAngle: 360,
        coneOuterAngle: 360,
        coneOuterGain: 0,
        distanceModel: "inverse",
        maxDistance: 1e3,
        panningModel: "HRTF",
        rolloffFactor: 1
      },
      Mb = Eb.c.oq * Eb.c.playerEyeToHeightRatio,
      Yb = [0, 0, -1, 0, 1, 0],
      Xb = lb.indexOf("note");

    function nb(yb) {
      return yb >= 0 ? Math.min(1, yb) : 0
    }

    function ub(yb) {
      var bb;
      let Wy = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.random;
      const Uy = function(yb) {
        let bb = 0,
          Wy = Cb.length;
        for (; bb < Wy;) {
          const Uy = bb + Wy >>> 1;
          Cb[Uy] < yb ? bb = Uy + 1 : Wy = Uy
        }
        return bb
      }(yb);
      if ("" === yb || null === (bb = Cb[Uy]) || void 0 === bb || !bb.startsWith(yb)) return -1;
      if (Cb[Uy] === yb) return Uy;
      let hy = Uy + 1;
      for (; hy < Cb.length && Cb[hy].startsWith(yb);) hy++;
      return Uy + Math.floor(Wy() * (hy - Uy))
    }
    class rW {
      constructor(yb, bb, Wy, Uy, hy) {
        this.group = yb, this.loudness = bb, this.startMs = Wy, this.howl = Uy, this.host = hy, this.id = 0, this.direct = !1
      }
      getDurationMs() {
        const yb = this.host.alive(this.id);
        return yb ? 1e3 * this.howl.duration(this.id) / yb.rate : 0
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
    class Hb {
      constructor(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now(),
          Uy = arguments.length > 3 ? arguments[3] : void 0;
        this.createHowl = yb, this.listener = bb, this.now = Wy, this.errors = 0, this.sheets = new Map, this.live = new Map, this.core = new Map, this.level = 1, this.master = 1, this.pose = new Float64Array(9), this.nextPose = new Float64Array(9), this.posed = !1, this.loader = void 0, this.voices = new gW.d, this.failed = new Set, this.started = new Set, this.voiceHost = {
          alive: yb => this.aliveVoice(yb),
          started: yb => this.started.has(yb),
          drop: yb => {
            var bb;
            null === (bb = this.live.get(yb)) || void 0 === bb || bb.howl.stop(yb), this.forget(yb)
          }
        }, this.handlers = {
          playSound: (yb, bb, Wy, Uy, hy, fy, Zy, cb, Py) => {
            if (Uy >= Cb.length) return;
            const oy = 0 !== (hy & sy.fe.Loop);
            hy & sy.fe.TwoD ? this.start(Uy, !1, Zy, fy, cb, oy) : this.startSpatial(Uy, Zy, fy, cb, oy, yb, bb, Wy, Py, this.earDistSq(yb, bb, Wy))
          },
          soundPos: (yb, bb, Wy, Uy) => {
            const hy = this.core.get(Uy);
            var fy;
            void 0 !== hy && (null === (fy = this.live.get(hy)) || void 0 === fy || fy.howl.pos(Wy, bb, yb, hy))
          },
          soundSet: (yb, bb, Wy, Uy) => {
            const hy = this.core.get(yb),
              fy = void 0 === hy ? void 0 : this.live.get(hy);
            void 0 !== hy && fy && (this.setRel(hy, bb), fy.rate = Wy, fy.howl.rate(Wy, hy), fy.spatial && fy.howl.pannerAttr({
              refDistance: Uy
            }, hy))
          },
          soundFade: (yb, bb, Wy, Uy) => {
            const hy = this.core.get(yb);
            void 0 !== hy && this.fade(hy, bb, Wy, 0 !== (Uy & sy.de.StopAfter))
          },
          soundStop: yb => {
            const bb = this.core.get(yb);
            var Wy;
            void 0 !== bb && (null === (Wy = this.live.get(bb)) || void 0 === Wy || Wy.howl.stop(bb), this.forget(bb))
          },
          soundReset: () => {
            this.stopCore()
          }
        }, this.loader = new Rb(((yb, bb) => this.sheet(yb, bb)), (yb => {
          this.errors++, console.error("Audio preload failed", yb)
        }), Uy)
      }
      prepare() {
        for (let yb = 0; yb < lb.length; yb++) this.sheet(yb, !1), this.sheet(yb, !0)
      }
      preload(yb) {
        this.loader.preload(yb)
      }
      cancelPreload() {
        this.loader.cancel()
      }
      onAudioEvent(yb, bb, Wy, Uy) {
        if (yb < sy.n.PlaySound || yb > sy.n.SoundReset) return !1;
        try {
          return (0, sy.oe)(yb, bb, Wy, Uy, this.handlers)
        } catch (hy) {
          return this.errors++, console.error("Audio event failed", hy), !0
        }
      }
      applyListener(yb) {
        const bb = this.nextPose;
        for (let Uy = 0; Uy < 3; Uy++) bb[2 - Uy] = sy.v.listener(yb, 0, Uy), bb[5 - Uy] = sy.v.forward(yb, 0, Uy), bb[8 - Uy] = sy.v.up(yb, 0, Uy);
        0 === bb[3] && 0 === bb[4] && 0 === bb[5] && bb.set(this.posed ? this.pose.subarray(3) : Yb, 3);
        for (let Uy = 0; Uy < 9; Uy++)
          if (!Number.isFinite(bb[Uy])) return;
        const Wy = this.pose;
        if (this.posed) {
          let yb = !0;
          for (let Uy = 0; Uy < 9 && yb; Uy++) yb = bb[Uy] === Wy[Uy];
          if (yb) return
        }
        this.listener.apply(bb) && (Wy.set(bb), this.posed = !0)
      }
      playGame(yb, bb, Wy, Uy, hy, fy, Zy) {
        const cb = ub(yb);
        if (cb < 0) return vW.e;
        if (!Wy) {
          const {
            howl: yb,
            id: Wy
          } = this.start(cb, !1, bb, 0, 1, Zy);
          return this.gameSound(yb, Wy, !1)
        }
        const Py = Wy[0],
          oy = Wy[1] + Mb,
          By = Wy[2];
        if (!Number.isFinite(Py) || !Number.isFinite(oy) || !Number.isFinite(By)) return vW.e;
        let Ky;
        if (Uy) {
          const yb = Py - Uy[0],
            bb = oy - Uy[1],
            Wy = By - Uy[2];
          if (Ky = yb * yb + bb * bb + Wy * Wy, Ky > hy * hy) return vW.e
        } else Ky = this.earDistSq(Py, oy, By);
        const ey = this.startSpatial(cb, bb, 0, 1, Zy, Py, oy, By, fy, Ky);
        return ey ? this.gameSound(ey.howl, ey.id, !0) : vW.e
      }
      setMaster(yb, bb) {
        this.level = nb(yb);
        const Wy = bb ? this.level : 0;
        if (Wy !== this.master) {
          this.master = Wy;
          for (const [yb, bb] of this.live) bb.fadeMs = 0, bb.gain = bb.rel * this.master, bb.howl.volume(bb.gain, yb)
        }
      }
      stopCore() {
        for (const bb of [...this.core.values()]) {
          var yb;
          null === (yb = this.live.get(bb)) || void 0 === yb || yb.howl.stop(bb)
        }
        this.core.clear()
      }
      stopAll() {
        this.cancelPreload();
        for (const [yb, bb] of [...this.live]) bb.howl.stop(yb), this.forget(yb);
        this.core.clear()
      }
      gameSound(yb, bb, Wy) {
        const Uy = {
          stop: () => (this.live.has(bb) && yb.stop(bb), Uy),
          fade: (yb, Wy, hy) => {
            var fy, Zy;
            const cb = this.level > 0 ? Wy / this.level : Wy > 0 && null !== (fy = null === (Zy = this.live.get(bb)) || void 0 === Zy ? void 0 : Zy.rel) && void 0 !== fy ? fy : 0;
            return this.fade(bb, cb, hy, !1), Uy
          },
          rate: Wy => {
            const hy = this.live.get(bb);
            return hy && (hy.rate = function(yb) {
              return yb > 0 && yb < 1 / 0 ? yb : 1
            }(Wy), yb.rate(hy.rate, bb)), Uy
          },
          getVolume: () => {
            var yb, Wy;
            return (null !== (yb = null === (Wy = this.live.get(bb)) || void 0 === Wy ? void 0 : Wy.rel) && void 0 !== yb ? yb : 0) * this.level
          },
          getRelativeVolume: () => {
            var yb, Wy;
            return null !== (yb = null === (Wy = this.live.get(bb)) || void 0 === Wy ? void 0 : Wy.rel) && void 0 !== yb ? yb : 0
          },
          setRelativeVolume: yb => (this.setRel(bb, yb), Uy),
          setPannerAttr: hy => {
            if (Wy && this.live.has(bb)) {
              const Wy = {
                ...iW,
                refDistance: eb.g
              };
              for (const [yb, bb] of Object.entries(hy)) "number" !== typeof bb && "string" !== typeof bb || (Wy[yb] = bb);
              yb.pannerAttr({
                coneOuterAngle: Wy.coneOuterAngle
              }, bb), yb.pannerAttr(Wy, bb)
            }
            return Uy
          },
          setPosition: hy => (Wy && this.live.has(bb) && Number.isFinite(hy[0] + hy[1] + hy[2]) && yb.pos(hy[2], hy[1], hy[0], bb), Uy)
        };
        return Uy
      }
      startSpatial(yb, bb, Wy, Uy, hy, fy, Zy, cb, Py, oy) {
        const By = this.sheet(Tb[yb], !0);
        let Ky = null;
        if (!hy) {
          if (this.failed.has(By)) return null;
          const Wy = Tb[yb] === Xb ? null : (0, gW.f)(Cb[yb]),
            Uy = (0, gW.e)(nb(bb), Math.sqrt(oy), Py);
          if (Ky = new rW(Wy, Uy, this.now(), By, this.voiceHost), !this.voices.admit(Ky)) return null
        }
        const ey = this.start(yb, !0, bb, Wy, Uy, hy);
        return Ky && (Ky.id = ey.id, Ky.direct = "loaded" === By.state() && !By._playLock), By.pannerAttr({
          coneOuterAngle: 360
        }, ey.id), By.pannerAttr({
          ...iW,
          refDistance: Py
        }, ey.id), By.pos(cb, Zy, fy, ey.id), ey
      }
      aliveVoice(yb) {
        const bb = this.live.get(yb);
        if (!bb) return;
        const Wy = bb.howl._soundById(yb);
        if (Wy && !Wy._ended) return bb;
        this.forget(yb)
      }
      earDistSq(yb, bb, Wy) {
        if (!this.posed) return 0;
        const Uy = yb - this.pose[2],
          hy = bb - this.pose[1],
          fy = Wy - this.pose[0];
        return Uy * Uy + hy * hy + fy * fy
      }
      start(yb, bb, Wy, Uy, hy, fy) {
        const Zy = nb(Wy),
          cb = this.sheet(Tb[yb], bb);
        "unloaded" === cb.state() && cb.load();
        const Py = cb.play(Cb[yb]),
          oy = Zy * this.master;
        return cb.volume(oy, Py), this.live.set(Py, {
          howl: cb,
          rel: Zy,
          gain: oy,
          fadeFrom: oy,
          fadeAt: 0,
          fadeMs: 0,
          rate: hy,
          handle: Uy,
          spatial: bb,
          stopTimer: void 0
        }), 0 !== Uy && this.core.set(Uy, Py), 1 !== hy && cb.rate(hy, Py), fy && cb.loop(!0, Py), {
          howl: cb,
          id: Py
        }
      }
      sheet(yb, bb) {
        const Wy = 2 * yb + (bb ? 1 : 0);
        let Uy = this.sheets.get(Wy);
        if (!Uy) {
          const hy = this.createHowl(lb[yb], bb);
          hy.on("end", (yb => {
            hy.loop(yb) || this.forget(yb)
          })), hy.on("stop", (yb => {
            this.forget(yb)
          })), hy.on("play", (yb => {
            this.live.has(yb) && this.started.add(yb)
          })), hy.on("loaderror", (yb => {
            if ("loaded" !== hy.state()) {
              this.failed.add(hy);
              for (const [yb, bb] of this.live) bb.howl === hy && this.forget(yb)
            } else "number" === typeof yb && this.forget(yb)
          })), this.sheets.set(Wy, hy), Uy = hy
        }
        return Uy
      }
      setRel(yb, bb) {
        const Wy = this.live.get(yb);
        Wy && (aW(Wy), Wy.fadeMs = 0, Wy.rel = nb(bb), Wy.gain = Wy.rel * this.master, Wy.howl.volume(Wy.gain, yb))
      }
      fade(yb, bb, Wy, Uy) {
        const hy = this.live.get(yb);
        if (!hy) return;
        aW(hy);
        const {
          howl: fy
        } = hy, Zy = this.gainNow(hy);
        hy.rel = nb(bb), hy.gain = hy.rel * this.master;
        const cb = Wy > 0 ? Math.min(Wy, 65535) : 0,
          Py = 0 === cb || Zy === hy.gain;
        hy.fadeMs = Py ? 0 : cb, Py ? fy.volume(hy.gain, yb) : (hy.fadeFrom = Zy, hy.fadeAt = this.now(), fy.fade(Zy, hy.gain, cb, yb)), Uy && (Py ? fy.stop(yb) : hy.stopTimer = setTimeout((() => {
          hy.stopTimer = void 0, fy.stop(yb)
        }), cb))
      }
      gainNow(yb) {
        if (yb.fadeMs > 0) {
          const bb = (this.now() - yb.fadeAt) / yb.fadeMs;
          if (bb < 1) return yb.fadeFrom + (yb.gain - yb.fadeFrom) * Math.max(0, bb);
          yb.fadeMs = 0
        }
        return yb.gain
      }
      forget(yb) {
        this.started.delete(yb);
        const bb = this.live.get(yb);
        bb && (aW(bb), this.live.delete(yb), 0 !== bb.handle && this.core.get(bb.handle) === yb && this.core.delete(bb.handle))
      }
    }

    function aW(yb) {
      void 0 !== yb.stopTimer && (clearTimeout(yb.stopTimer), yb.stopTimer = void 0)
    }
    var Fb = Wy(39124),
      pb = Wy(37774);
    class Lb {
      constructor(yb, bb, Wy, Uy) {
        this.key = yb, this.model = bb, this.host = Uy, this.Hy = void 0, this.records = void 0, this.origin = [0, 0, 0], this.count = 0, this.SKy = Number.NaN, this.sentOrigin = [Number.NaN, Number.NaN, Number.NaN], this.dirtyList = [], this.isDirty = void 0, this.tail = void 0, this.tailView = void 0, this.tailCut = new Uint8Array(0), this.made = !1, this.rh = !1, this.Hy = Math.max(1, Math.ceil(Wy)), this.records = new Float32Array(this.Hy * Bb.d), this.isDirty = new Uint8Array(this.Hy), this.tail = new Uint8Array(this.Hy * sy.Ac.Bytes), this.tailView = new DataView(this.tail.buffer), this.make(Uy.cmd())
      }
      setOrigin(yb, bb, Wy) {
        this.origin[0] = yb, this.origin[1] = bb, this.origin[2] = Wy
      }
      markDirty(yb) {
        !this.rh && yb >= 0 && yb < this.Hy && yb < sy.Ac.Max && this.hh(yb, yb + 1)
      }
      commit(yb) {
        if (this.rh) return;
        (yb = Math.min(Math.max(Math.floor(yb), 0), this.Hy, sy.Ac.Max)) > this.count && this.hh(this.count, yb), this.count = yb;
        const {
          origin: bb,
          sentOrigin: Wy,
          dirtyList: Uy
        } = this, hy = this.SKy !== yb, fy = Wy[0] !== bb[0] || Wy[1] !== bb[1] || Wy[2] !== bb[2];
        if (0 === Uy.length && !hy && !fy) return;
        const Zy = this.host.cmd();
        if (!Zy || !this.make(Zy)) return;
        const cb = Uy.length,
          {
            records: Py,
            tailView: oy
          } = this;
        for (let By = 0; By < cb; By++) {
          const yb = Uy[By],
            bb = yb * Bb.d,
            Wy = By * sy.Ac.Bytes,
            hy = 0 !== Py[bb + Bb.h] ? sy.Ac.Hidden : 0;
          oy.setUint32(Wy, (yb | hy) >>> 0, !0), oy.setFloat32(Wy + 4, Py[bb], !0), oy.setFloat32(Wy + 8, Py[bb + 1], !0), oy.setFloat32(Wy + 12, Py[bb + 2], !0)
        }
        if ((0, sy.Le)(Zy, 0, this.key, yb, bb, cb, this.tailOf(cb))) {
          for (let yb = 0; yb < cb; yb++) this.isDirty[Uy[yb]] = 0;
          Uy.length = 0, this.SKy = yb, Wy[0] = bb[0], Wy[1] = bb[1], Wy[2] = bb[2]
        }
      }
      grow(yb) {
        (yb = Math.ceil(yb)) <= this.Hy || this.rh || (this.records = (0, pb.b)(this.records, new Float32Array(yb * Bb.d)), this.isDirty = (0, pb.b)(this.isDirty, new Uint8Array(yb)), this.tail = new Uint8Array(yb * sy.Ac.Bytes), this.tailView = new DataView(this.tail.buffer), this.Hy = yb)
      }
      dispose() {
        this.rh || (this.rh = !0, this.host.rh(this, this.made ? this.key : null))
      }
      make(yb) {
        if (!this.made && yb) {
          const {
            item: bb,
            scale: Wy,
            yaw: Uy
          } = this.model;
          this.made = (0, sy.Ne)(yb, 0, this.key, bb, Wy, Uy)
        }
        return this.made
      }
      tailOf(yb) {
        const bb = yb * sy.Ac.Bytes;
        return this.tailCut.buffer === this.tail.buffer && this.tailCut.length === bb || (this.tailCut = this.tail.subarray(0, bb)), this.tailCut
      }
      hh(yb, bb) {
        const {
          dirtyList: Wy,
          isDirty: Uy
        } = this;
        for (let hy = yb; hy < bb; hy++) 0 === Uy[hy] && (Uy[hy] = 1, Wy.push(hy))
      }
    }
    var Qb = Wy(542);
    class jW {
      constructor(yb) {
        this.keys = 0, this.live = new Set, this.owing = new Set, this.host = void 0, this.host = {
          cmd: yb,
          owes: yb => {
            this.owing.add(yb)
          },
          settled: (yb, bb) => {
            this.owing.delete(yb), bb && this.live.delete(yb)
          }
        }
      }
      create(yb, bb) {
        if (Wy = yb, !Qb.i.includes(Wy)) return null;
        var Wy;
        const Uy = new Db(++this.keys, By.h.indexOf(yb), bb, this.host);
        return this.live.add(Uy), Uy
      }
      disposeAll() {
        for (const yb of [...this.live]) yb.dispose()
      }
      flush() {
        if (0 === this.owing.size) return;
        const yb = this.host.cmd();
        for (const bb of this.owing)
          if (!bb.sync(yb)) return
      }
    }
    class Db {
      constructor(yb, bb, Wy, Uy) {
        this.key = yb, this.lifeform = bb, this.scale = Wy, this.host = Uy, this.feet = [0, 0, 0], this.yaw = 0, this.visible = !1, this.owed = 1, this.rh = !1, this.sync()
      }
      setPose(yb, bb) {
        this.rh || (this.feet[0] = yb[0], this.feet[1] = yb[1], this.feet[2] = yb[2], this.yaw = bb, this.owed |= 2, this.sync())
      }
      setVisible(yb) {
        this.rh || yb === this.visible || (this.visible = yb, this.owed |= 4, this.sync())
      }
      dispose() {
        this.rh || (this.rh = !0, this.owed = 1 & this.owed ? 0 : 8, this.sync())
      }
      sync() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.host.cmd();
        return this.write(yb) ? (this.host.settled(this, this.rh), !0) : (this.host.owes(this), !1)
      }
      write(yb) {
        if (!yb) return this.owed = 0, !0;
        if (1 & this.owed) {
          if (!(0, sy.Re)(yb, 0, this.key, this.lifeform, this.scale)) return !1;
          this.owed &= -2
        }
        const bb = (2 & this.owed ? sy.bd.Pose : 0) | (4 & this.owed ? sy.bd.Visible : 0);
        if (0 !== bb) {
          if (!(0, sy.Pe)(yb, 0, this.key, bb, this.visible ? 1 : 0, this.feet, this.yaw)) return !1;
          this.owed &= -7
        }
        if (8 & this.owed) {
          if (!(0, sy.Oe)(yb, 0, this.key)) return !1;
          this.owed = 0
        }
        return !0
      }
    }
    var tW = Wy(39545);

    function wb(yb, bb, Wy, Uy) {
      return (0, tW.e)(), (0, sy.uf)(yb, bb, Wy, Uy)
    }
    var kW = Wy(37783),
      Nb = Wy(39113);
    const zW = [0, 0, 0],
      Ib = [0, 0, 0],
      xW = [0, 0, 0],
      Ab = [0, 0, 0],
      db = {
        origin: [0, 0, 0],
        direction: [0, 0, 1]
      },
      yU = [0, 0, 0],
      bU = [0, 0],
      WW = [1, 1, 1],
      UW = 1 / 3;
    const hW = Kb.g;

    function fW(yb) {
      const bb = Kb.c[yb],
        Wy = bb && Kb.g[bb.mainMultiblock];
      return Wy && {
        main: Wy,
        x: bb.compX,
        y: bb.compY,
        z: bb.compZ
      }
    }

    function ZW(yb) {
      if (null === yb || void 0 === yb) return sy.id;
      const bb = +yb;
      return Number.isInteger(bb) && bb >= -2147483648 && bb <= 2147483647 && String(bb) === String(yb) ? bb : sy.id
    }

    function cU(yb, bb, Wy) {
      return (0, sy.zf)(yb, 0, bb, null !== Wy && void 0 !== Wy ? Wy : Number.NaN)
    }
    class PW {
      constructor(yb) {
        this.deps = yb, this.api = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.tables = void 0, this.meshKeys = 0, this.liveMeshes = new Set, this.poolKeys = 0, this.livePools = new Set, this.cameraTurn = new kW.d((() => this.tables.getClientOption("forcedCameraDirectionTransitionMs")), (yb => {
          var bb, Wy;
          null === (bb = (Wy = this.deps).setLocalOptions) || void 0 === bb || bb.call(Wy, yb)
        })), this.mobModels = new jW((() => this.deps.cmd())), this.owedFrees = [], this.pendingStyle = void 0, this.pendingFar = void 0, this.farSet = !1, this.routeMesh = 0, this.routeOffset = 0, this.routeLook = "", this.routeSlide = {
          uvOffset: [0, 0]
        }, this.poolHost = {
          cmd: () => this.deps.cmd(),
          rh: (yb, bb) => {
            this.livePools.delete(yb), null !== bb && (this.owedFrees.push(bb), this.flushOwed())
          }
        }, this.api = yb.api, this.live = yb.live, this.chunks = yb.chunks, this.items = yb.items, this.tables = yb.tables
      }
      isLocal(yb) {
        return null !== yb && void 0 !== yb && +yb === this.api.localId
      }
      assertLocal(yb, bb) {
        if (!this.isLocal(yb)) throw new Error(`Attempted to ${bb} for a player that is not the local player`)
      }
      Tl(yb) {
        const bb = this.api.Tl(yb);
        if (!bb) throw new Error(`Entity ${yb} has no replicated position`);
        return bb
      }
      checkValid(yb) {
        return !!this.deps.isSessionLive() && (null === yb || void 0 === yb || this.api.checkValid(yb))
      }
      isAlive(yb) {
        return !1 !== this.api.isAlive(yb)
      }
      getItemStat(yb, bb, Wy) {
        return this.isLocal(yb) || null !== yb && "Player" === this.api.getEntityType(yb) ? this.tables.getItemStat(bb, Wy) : this.tables.getDefaultItemStat(bb, Wy)
      }
      getClientOption(yb, bb) {
        return this.assertLocal(yb, "get a client option"), this.tables.getClientOption(bb)
      }
      openShop(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Wy = arguments.length > 2 ? arguments[2] : void 0;
        this.assertLocal(yb, "open shop"), Zy.g.EZ("showShopFromServer", {
          toggle: bb,
          hN: Wy
        }, !0)
      }
      sendMessage(yb, bb, Wy) {
        this.assertLocal(yb, "send a message");
        const Uy = "string" === typeof bb ? [{
          str: bb,
          style: Wy
        }] : bb;
        Zy.g.EZ("chat", {
          content: Uy
        }, !0)
      }
      getEntityType(yb) {
        return this.api.getEntityType(yb)
      }
      getEntityName(yb) {
        const bb = ZW(yb);
        return bb === sy.id ? void 0 : (0, Fb.l)(this.api, bb)
      }
      hasEffect(yb, bb) {
        const Wy = ZW(yb);
        return Wy !== sy.id && (0, Fb.i)(this.api, Wy, bb)
      }
      getMetaInfo(yb) {
        return this.tables.getMetaInfo(yb)
      }
      getPlayerDbId(yb) {
        return this.assertLocal(yb, "get a DB ID"), this.deps.playerDbId()
      }
      getBlockData(yb, bb, Wy) {
        if (!this.chunks.dataCleared(yb, bb, Wy)) return (0, Fb.e)(this.api, yb, bb, Wy)
      }
      uby(yb, bb, Wy, Uy) {
        this.setBlockId(yb, bb, Wy, this.tables.getItemId(Uy))
      }
      setOtherEntitySetting(yb, bb, Wy, Uy) {
        if (!this.isLocal(yb)) throw new Error("Attempted to set an other-entity setting for a player that is not the local player");
        if (!Object.hasOwn(sy.td, Wy)) throw new Error(`Unknown other-entity setting ${Wy}`);
        const hy = sy.td[Wy],
          fy = ZW(bb);
        if (fy === sy.id || !this.deps.beforeWrite()) return;
        const Zy = (0, Hy.d)(Uy);
        if (Zy.length > 16384) throw new Error(`The other-entity setting ${Wy}'s value is over 16384 bytes`);
        const cb = this.api.memoryView(Uint8Array, this.api.scratch(), Zy.length, "set_other_entity_setting's value");
        cb && (cb.set(Zy), this.api.queries.setOtherEntitySetting(fy, hy, Zy.length))
      }
      getPositionView(yb) {
        return this.live.position(+yb)
      }
      readDrawnPosition(yb, bb) {
        return this.api.readDrawnPosition(ZW(yb), bb)
      }
      getDrawnHeading(yb) {
        const bb = ZW(yb),
          Wy = (bb === sy.id ? 0 : this.api.queries.directorEntity(bb)) >= sy.tb.BYTES ? this.api.memoryData(this.api.scratch(), sy.tb.BYTES, 8, "getDrawnHeading's DirectorEntity") : null;
        if (!Wy) return null;
        if (1 === sy.tb.headingIsDrawn(Wy, 0)) return sy.tb.heading(Wy, 0);
        const Uy = this.api.apiView;
        return this.isLocal(yb) && 0 === (sy.s.playerFlags(Uy, 0) & sy.Od.FreeCam) ? sy.s.heading(Uy, 0) : null
      }
      getLocalPlayerMovement() {
        const yb = sy.s.playerFlags(this.api.apiView, 0);
        return 0 === (yb & sy.Od.Replay) && this.api.readDrawnPosition(this.api.localId, xW) ? {
          onGround: 0 !== (yb & sy.Od.OnGround),
          jumpHeld: 0 !== (yb & sy.Od.JumpHeld)
        } : null
      }
      MPy(yb) {
        return this.isLocal(yb) ? this.items.kW() : null
      }
      getInventoryItems() {
        return this.items.playerItems()
      }
      getHeldGunInaccuracy() {
        var yb, bb;
        return "Gun" === (null === (yb = this.aliveHeld()) || void 0 === yb || null === (bb = yb.typeObj) || void 0 === bb ? void 0 : bb.type) ? this.items.inaccuracy : null
      }
      aliveHeld() {
        return !1 === this.api.isAlive(this.api.localId) ? null : this.items.kW()
      }
      isCrosshairShown() {
        var yb, bb;
        const Wy = Uy.d.get("crosshairShownOverride");
        if (null !== Wy) return Wy;
        const hy = null === (yb = this.aliveHeld()) || void 0 === yb ? void 0 : yb.typeObj,
          fy = "Gun" === (null === hy || void 0 === hy ? void 0 : hy.type),
          Zy = fy || !0 === (null === hy || void 0 === hy ? void 0 : hy.showsAimingUi),
          cb = 0 === (sy.s.playerFlags(this.api.apiView, 0) & sy.Od.ZoomFirstPerson),
          Py = null !== (bb = this.tables.getClientOption("gunshotOrigin")) && void 0 !== bb ? bb : null;
        return (0, qW.g)({
          gun: fy,
          aimable: Zy
        }, cb, (0, sb.e)(), Py)
      }
      setCrosshairShown(yb) {
        Uy.d.set({
          crosshairShownOverride: yb
        })
      }
      getInventoryFreeSlotCount(yb) {
        return this.isLocal(yb) ? this.items.freeSlots() : null
      }
      getSelectedInventorySlotI(yb) {
        return this.isLocal(yb) ? this.items.selectedSlot : null
      }
      getItemSlot(yb, bb) {
        return this.isLocal(yb) ? this.items.slot(bb) : null
      }
      swapInventorySlots(yb, bb) {
        return this.items.swap(yb, bb)
      }
      isPlayerCrouching(yb) {
        if (this.isLocal(yb)) return 0 !== (sy.s.playerFlags(this.api.apiView, 0) & sy.Od.Crouching);
        const bb = ZW(yb);
        return bb !== sy.id && 1 === this.api.queries.entityCrouching(bb)
      }
      getMiningBlock() {
        return this.live.breakingPosition()
      }
      isMining() {
        return 0 !== (sy.s.playerFlags(this.api.apiView, 0) & sy.Od.AttemptingBreak)
      }
      getTargetedBlock() {
        return this.live.Kcy()
      }
      getActionRay() {
        const yb = this.api.apiView;
        for (let bb = 0; bb < 3; bb++) db.origin[bb] = sy.s.gPy(yb, 0, bb), db.direction[bb] = sy.s.actionDir(yb, 0, bb);
        return db
      }
      canModifyBlockAt(yb, bb, Wy) {
        return 1 === this.api.queries.canModify(yb, bb, Wy)
      }
      isSolidToPlayerBlockId(yb) {
        return this.tables.isSolidBlockId(yb) && !this.chunks.isWalkThrough(yb)
      }
      blockNameToBlockId(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.tables.blockNameToBlockId(yb, bb)
      }
      blockIdToBlockName(yb) {
        return this.tables.nameOfId(yb)
      }
      Ncy(yb, bb, Wy, Uy, hy) {
        return 1 === this.api.queries.terrainBlocked(Uy, yb, bb, Wy, ZW(null !== hy && void 0 !== hy ? hy : null))
      }
      getChunkVersion(yb, bb, Wy) {
        return this.chunks.version(yb, bb, Wy)
      }
      scanBlocks(yb, bb, Wy, Uy, hy, fy, Zy, cb) {
        return this.chunks.scan(yb, bb, Wy, Uy, hy, fy, Zy, cb)
      }
      isBlockInLoadedChunk(yb, bb, Wy) {
        return this.chunks.isLoaded(yb, bb, Wy)
      }
      getBlockId(yb, bb, Wy) {
        return this.chunks.Df(yb, bb, Wy)
      }
      playSound(yb, bb, Wy, Uy, hy) {
        let fy = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        if (!this.isLocal(yb)) return null;
        const Zy = this.playSoundFrom(bb, Wy, hy, fy);
        return 1 === Uy ? Zy : Zy.rate(Uy)
      }
      playSoundFrom(yb, bb, Wy, Uy) {
        var hy, fy;
        const Zy = this.deps.playSound;
        if (!Zy) return vW.e;
        const cb = null === Wy || void 0 === Wy ? void 0 : Wy.myy,
          Py = null !== (hy = null === Wy || void 0 === Wy ? void 0 : Wy.maxHearDist) && void 0 !== hy ? hy : eb.e,
          oy = null !== (fy = null === Wy || void 0 === Wy ? void 0 : Wy.refDistance) && void 0 !== fy ? fy : eb.g;
        let By = null;
        if (Array.isArray(cb)) zW[0] = cb[0], zW[1] = cb[1], zW[2] = cb[2], By = zW;
        else if (void 0 !== cb && null !== cb) {
          const yb = ZW(cb);
          if (!this.api.isLocal(yb)) {
            if (!this.api.readPosition(yb, zW)) return vW.e;
            By = zW
          }
        }
        return Zy(yb, bb, By, By && this.ear(), Py, oy, Uy)
      }
      ear() {
        if (this.api.readPosition(this.api.localId, Ib)) Ib[1] += Mb;
        else {
          const yb = this.api.apiView;
          if (0 === sy.s.viewProj(yb, 0, 3) && 0 === sy.s.viewProj(yb, 0, 7) && 0 === sy.s.viewProj(yb, 0, 11)) return null;
          for (let bb = 0; bb < 3; bb++) Ib[bb] = sy.s.eye(yb, 0, bb)
        }
        return Number.isFinite(Ib[0] + Ib[1] + Ib[2]) ? Ib : null
      }
      setBlockId(yb, bb, Wy, Uy) {
        if (!Number.isInteger(Uy) || Uy < 0 || Uy > 65535) throw new Error(`Invalid block id ${Uy}`);
        if (!this.deps.beforeWrite() || !this.chunks.isLoaded(yb, bb, Wy)) return;
        const hy = Math.floor(yb),
          fy = Math.floor(bb),
          Zy = Math.floor(Wy),
          cb = this.predictedCells(hy, fy, Zy, Uy);
        if (1 === this.api.queries.uby(hy, fy, Zy, Uy)) {
          for (let yb = 0; yb < cb.length; yb += 5) this.chunks.setOverlay(cb[yb], cb[yb + 1], cb[yb + 2], cb[yb + 3], 1 === cb[yb + 4]);
          this.live.refreshTarget()
        }
      }
      particlesEnabled() {
        return this.deps.particles.enabled()
      }
      createParticles(yb, bb) {
        return this.deps.particles.create(yb, bb)
      }
      playParticleEffect(yb) {
        this.deps.particles.playEffect(yb)
      }
      burstParticlePreset(yb, bb, Wy) {
        this.deps.particles.burstPreset(yb, bb, Wy)
      }
      createGameMesh(yb, bb, Wy) {
        const Uy = ++this.meshKeys,
          hy = this.deps.cmd();
        if (!hy) return Uy;
        const {
          look: fy,
          colour: Zy
        } = function(yb) {
          switch (yb.kind) {
            case void 0:
            case "flatEmissive":
              return yb.onTop ? {
                look: sy.$b.FlatOnTop,
                colour: [...yb.rgb, yb.alpha]
              } : yb.opaque ? {
                look: sy.$b.FlatOpaque,
                colour: [...yb.rgb, 1]
              } : {
                look: sy.$b.Flat,
                colour: [...yb.rgb, yb.alpha]
              };
            case "chevronPath":
              return {
                look: sy.$b.Chevrons, colour: [...(0, Sb.d)(yb.colour), yb.alpha]
              };
            case "furnaceFire":
              return {
                look: sy.$b.FurnaceFire, colour: [1, 1, 1, 1]
              }
          }
        }(bb), cb = Math.floor(yb.positions.length / 3), Py = function(yb, bb) {
          const Wy = Math.floor(yb.positions.length / 3),
            Uy = yb.indices.length,
            hy = Wy * (bb ? 5 : 3),
            fy = new Uint8Array(4 * (hy + Uy)),
            Zy = new DataView(fy.buffer);
          for (let oy = 0; oy < 3 * Wy; oy++) Zy.setFloat32(4 * oy, yb.positions[oy], !0);
          if (bb) {
            var cb;
            const bb = null !== (cb = yb.uvs) && void 0 !== cb ? cb : [];
            for (let yb = 0; yb < 2 * Wy; yb++) {
              var Py;
              Zy.setFloat32(4 * (3 * Wy + yb), null !== (Py = bb[yb]) && void 0 !== Py ? Py : 0, !0)
            }
          }
          for (let oy = 0; oy < Uy; oy++) Zy.setUint32(4 * (hy + oy), yb.indices[oy], !0);
          return fy
        }(yb, (0, Bb.i)(bb));
        return (0, sy.Fe)(hy, 0, Uy, fy, Zy, Wy, cb, yb.indices.length, Py) && this.liveMeshes.add(Uy), Uy
      }
      setGameMesh(yb, bb) {
        var Wy;
        const Uy = this.deps.cmd();
        if (!Uy) return;
        let hy = 0;
        bb.anchor && (hy |= sy.dc.Anchor, yU[0] = bb.anchor[0], yU[1] = bb.anchor[1], yU[2] = bb.anchor[2]), void 0 !== bb.visible && (hy |= sy.dc.Visible), bb.uvOffset && (hy |= sy.dc.UvOffset, bU[0] = bb.uvOffset[0], bU[1] = bb.uvOffset[1]);
        const fy = null !== (Wy = bb.visibility) && void 0 !== Wy ? Wy : 1;
        void 0 !== bb.visibility && (hy |= sy.dc.Visibility), bb.scale && (hy |= sy.dc.Scale, WW[0] = bb.scale[0], WW[1] = bb.scale[1], WW[2] = bb.scale[2]), 0 !== hy && (0, sy.Je)(Uy, 0, yb, hy, bb.visible ? 1 : 0, yU, bU, fy, WW)
      }
      disposeGameMesh(yb) {
        const bb = this.deps.cmd();
        bb && !(0, sy.Ge)(bb, 0, yb) || this.liveMeshes.delete(yb)
      }
      hasPackModel(yb) {
        var bb, Wy, Uy;
        return null !== (bb = null === (Wy = (Uy = this.deps).hasPackModel) || void 0 === Wy ? void 0 : Wy.call(Uy, yb)) && void 0 !== bb && bb
      }
      disposeGameOutput() {
        const yb = yb => {
          try {
            yb()
          } catch (bb) {
            console.error("Error freeing client game output", bb)
          }
        };
        for (const bb of [...this.liveMeshes]) yb((() => {
          this.disposeGameMesh(bb)
        }));
        for (const bb of [...this.livePools]) yb((() => {
          bb.dispose()
        }));
        yb((() => {
          this.mobModels.disposeAll()
        })), yb((() => {
          this.setGroundArrowStyle(null)
        })), yb((() => {
          this.setRouteChevrons(null), this.routeOffset = 0, this.routeLook = ""
        })), yb((() => {
          this.setCrosshairShown(null)
        })), yb((() => {
          this.cameraTurn.dispose()
        })), yb((() => {
          this.farSet && (this.farSet = !1, this.setCameraFar(null))
        }))
      }
      createInstancePool(yb, bb) {
        const Wy = this.tables.idOf(yb.item);
        if (void 0 === Wy) return null;
        const Uy = new Lb(++this.poolKeys, {
          item: Wy,
          scale: yb.scale,
          yaw: yb.yaw
        }, bb, this.poolHost);
        return this.livePools.add(Uy), Uy
      }
      createMobModel(yb, bb) {
        return this.mobModels.create(yb, bb)
      }
      setRouteChevrons(yb) {
        if (0 !== this.routeMesh && (this.disposeGameMesh(this.routeMesh), this.routeMesh = 0), !yb || 0 === yb.cells.length) return;
        const bb = `${yb.colour} ${yb.alpha}`;
        bb !== this.routeLook && (this.routeLook = bb, this.routeOffset = 0), this.routeMesh = this.createGameMesh(function(yb) {
          const [bb, Wy, Uy] = yb[0].pos, hy = [], fy = [], Zy = [];
          return yb.forEach(((yb, cb) => {
            let {
              pos: Py,
              way: [oy, By]
            } = yb;
            const Ky = Py[0] - bb + .5,
              ey = Py[1] - Wy + .04,
              qb = Py[2] - Uy + .5,
              [sy, Sy] = [.35 * -By, .35 * oy],
              [Ey, ly] = [cb * UW, (cb + 1) * UW],
              mb = hy.length / 3;
            hy.push(Ky - .5 * oy + sy, ey, qb - .5 * By + Sy), hy.push(Ky - .5 * oy - sy, ey, qb - .5 * By - Sy), hy.push(Ky + .5 * oy + sy, ey, qb + .5 * By + Sy), hy.push(Ky + .5 * oy - sy, ey, qb + .5 * By - Sy), fy.push(0, Ey, 1, Ey, 0, ly, 1, ly), Zy.push(mb, mb + 1, mb + 2, mb + 1, mb + 3, mb + 2)
          })), {
            positions: hy,
            uvs: fy,
            indices: Zy
          }
        }(yb.cells), {
          kind: "chevronPath",
          colour: yb.colour,
          alpha: yb.alpha
        }, yb.cells[0].pos), this.setRouteSlide()
      }
      slideRoute(yb) {
        0 !== this.routeMesh && (this.routeOffset = (this.routeOffset + Math.min(yb, 250) / 1e3 * 1.2 * UW) % 1, this.setRouteSlide())
      }
      setRouteSlide() {
        this.routeSlide.uvOffset[1] = -this.routeOffset, this.setGameMesh(this.routeMesh, this.routeSlide)
      }
      setGroundArrowStyle(yb) {
        this.pendingStyle = yb, this.flushOwed()
      }
      flushOwed() {
        this.mobModels.flush();
        const yb = this.owedFrees;
        if (0 === yb.length && void 0 === this.pendingStyle && void 0 === this.pendingFar) return;
        const bb = this.deps.cmd();
        if (!bb) return yb.length = 0, void(this.pendingFar = void 0);
        let Wy = 0;
        for (; Wy < yb.length && (0, sy.Me)(bb, 0, yb[Wy]);) Wy++;
        yb.splice(0, Wy);
        const Uy = this.pendingStyle;
        if (void 0 !== Uy) {
          (Uy ? (0, sy.Bf)(bb, 0, Uy.width, Uy.alpha, 1, Uy.endAtSolidFace ? 1 : 0) : (0, sy.Bf)(bb, 0, 0, 0, 0, 0)) && (this.pendingStyle = void 0)
        }
        const hy = this.pendingFar;
        void 0 !== hy && (0, sy.yf)(bb, 0, null !== hy && void 0 !== hy ? hy : 0, null === hy ? 1 : 0) && (this.pendingFar = void 0)
      }
      setNametagOffset(yb, bb) {
        const Wy = this.deps.cmd(),
          Uy = ZW(yb);
        Wy && Uy !== sy.id && (0, sy.Lf)(Wy, 0, Uy, bb)
      }
      setFacingTolerance(yb, bb) {
        const Wy = this.deps.cmd(),
          Uy = ZW(yb);
        Wy && Uy !== sy.id && cU(Wy, Uy, bb)
      }
      forEachEntity(yb) {
        const {
          api: bb
        } = this;
        for (let Wy = 0; Wy < bb.idStr.length; Wy++) {
          const Uy = bb.idStr[Wy];
          null === Uy || Vy(bb.kinds[Wy]) || yb(Uy)
        }
      }
      getEntityInfo(yb) {
        return this.deps.entityInfo.get(yb)
      }
      isEntityInteractable(yb) {
        const bb = ZW(yb);
        return bb !== sy.id && 1 === this.api.queries.entityInteractable(bb)
      }
      isLocalPlayer(yb) {
        return this.isLocal(yb)
      }
      getLineOwner(yb) {
        var bb;
        const Wy = null === (bb = this.deps.entityInfo.get(yb)) || void 0 === bb ? void 0 : bb.meshOpts;
        if (!Wy) return null;
        try {
          const {
            lineToEId: yb
          } = JSON.parse(Wy);
          return null !== yb && void 0 !== yb ? yb : null
        } catch {
          return null
        }
      }
      getCameraPosition() {
        const yb = this.api.apiView;
        return Ab[0] = sy.s.eye(yb, 0, 0), Ab[1] = sy.s.eye(yb, 0, 1), Ab[2] = sy.s.eye(yb, 0, 2), Ab
      }
      getCameraFar() {
        return sy.s.cameraFar(this.api.apiView, 0)
      }
      setCameraFar(yb) {
        null !== yb && (this.farSet = !0), this.pendingFar = yb, this.flushOwed()
      }
      turnCamera(yb, bb) {
        this.cameraTurn.turn(yb, bb)
      }
      clearPickupDelay(yb) {
        const bb = this.deps.cmd(),
          Wy = ZW(yb);
        bb && Wy !== sy.id && (0, sy.te)(bb, 0, Wy)
      }
      sendChat(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const Wy = this.deps.sendCmd();
        Wy && wb(Wy, 0, Nb.d.Chat, (0, Hy.d)((0, Nb.l)({
          vc: yb,
          mH: bb
        })))
      }
      sendCommand(yb) {
        yb.length <= 119 && this.sendChat(`/${yb}`)
      }
      predictedCells(yb, bb, Wy, Uy) {
        const hy = this.chunks,
          fy = [],
          Zy = (yb, bb, Wy, Uy, hy) => {
            fy.push(yb, bb, Wy, Uy, this.tables.blockRootId(hy) === this.tables.blockRootId(Uy) ? 0 : 1)
          },
          cb = hy.Df(yb, bb, Wy),
          Py = fW(cb);
        if (Py) {
          const [Uy, fy, oy] = [yb - Py.x, bb - Py.y, Wy - Py.z], By = hW[hy.Df(Uy, fy, oy)], Ky = null === By || void 0 === By ? void 0 : By.positions.some((yb => yb.id === cb && yb.x === Py.x && yb.y === Py.y && yb.z === Py.z));
          for (const yb of (Ky && By ? By : Py.main).positions) hy.Df(Uy + yb.x, fy + yb.y, oy + yb.z) === yb.id && Zy(Uy + yb.x, fy + yb.y, oy + yb.z, 0, yb.id)
        }
        const oy = fW(Uy);
        if (oy)
          for (const Ky of oy.main.positions) {
            const [Uy, fy, cb] = [yb + Ky.x - oy.x, bb + Ky.y - oy.y, Wy + Ky.z - oy.z];
            Zy(Uy, fy, cb, Ky.id, hy.Df(Uy, fy, cb))
          } else Zy(yb, bb, Wy, Uy, cb);
        const By = this.tables;
        if ((0 !== By.attachedTopOf(cb) || 0 !== By.attachedTopOf(Uy)) && hy.isLoaded(yb, bb + 1, Wy)) {
          let Py = hy.Df(yb, bb + 1, Wy);
          for (let Uy = 0; Uy < fy.length; Uy += 5) fy[Uy] === yb && fy[Uy + 1] === bb + 1 && fy[Uy + 2] === Wy && (Py = fy[Uy + 3]);
          const oy = this.attachedTopWrite(cb, Uy, Py);
          void 0 !== oy && Zy(yb, bb + 1, Wy, oy, Py)
        }
        return fy
      }
      attachedTopWrite(yb, bb, Wy) {
        const Uy = this.tables,
          hy = Uy.attachedTopOf(yb),
          fy = Uy.attachedTopOf(bb),
          Zy = 0 !== hy && 0 !== Wy && Uy.blockRootId(Wy) === Uy.blockRootId(hy);
        return 0 !== hy && 0 !== fy && Uy.blockRootId(yb) === Uy.blockRootId(bb) ? Zy && Wy !== fy ? fy : void 0 : 0 === fy || !Zy && 0 !== Wy ? Zy ? 0 : void 0 : fy
      }
    }
    const oW = sy.tc + sy.wc * sy.Ec.BYTES,
      BW = 2147483647,
      KW = new TextDecoder,
      eW = new TextEncoder,
      qU = Object.freeze({
        UH: 0,
        cL: null,
        amountAddedToSlot: 0
      }),
      sW = new Proxy({}, {
        get: () => () => sy.sd
      });

    function SW(yb) {
      return Number.isInteger(yb) && yb >= 0 && yb <= 65535
    }

    function EW(yb) {
      return Number.isInteger(yb) && yb >= 0 && yb <= 4294967295
    }
    class lW {
      constructor(yb) {
        this.deps = yb, this.Dv = [0, 0, 0], this.inaccuracy = 0, this.version = 0, this.notified = 0, this.iconChanged = !1, this.facades = new Array(sy.wc), this.ids = new Uint16Array(sy.wc), this.amounts = new Uint16Array(sy.wc), this.attrRead = new Float64Array(sy.wc).fill(-1), this.stale = new Uint16Array(sy.wc), this.staleVersion = new Uint32Array(sy.wc), this.instances = new Uint32Array(sy.wc), this.viewPtr = 0, this.viewVersion = -1, this.len = 0, this.selected = 0, this.slotIconId = 0, this.stopped = !1, this.listeners = new Set
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
      slot(yb) {
        var bb;
        return Number.isInteger(yb) && yb >= 0 && yb < this.len && 0 !== this.ids[yb] && null !== (bb = this.facades[yb]) && void 0 !== bb ? bb : null
      }
      kW() {
        return this.slot(this.selected)
      }
      playerItems() {
        const yb = [];
        for (let bb = 0; bb < Math.min(sy.Ad, this.len); bb++) yb.push(this.slot(bb));
        return yb
      }
      freeSlots() {
        let yb = 0;
        for (let bb = 0; bb < Math.min(sy.Ad - sy.g, this.len); bb++) 0 === this.ids[bb] && yb++;
        return yb
      }
      amountOf(yb) {
        let bb = 0;
        for (let Uy = 0; Uy < Math.min(sy.Ad, this.len); Uy++) {
          const hy = this.slot(Uy);
          var Wy;
          if ((null === hy || void 0 === hy ? void 0 : hy.name) === yb) bb += null !== (Wy = hy.amount) && void 0 !== Wy ? Wy : 1
        }
        return bb
      }
      instance(yb) {
        var bb;
        return null !== (bb = this.instances[yb]) && void 0 !== bb ? bb : 0
      }
      watch(yb) {
        return this.listeners.add(yb), () => {
          this.listeners.delete(yb)
        }
      }
      touch() {
        this.version++
      }
      flush(yb) {
        if (this.version !== this.notified || this.iconChanged) {
          this.notified = this.version, this.iconChanged = !1;
          for (const Wy of [...this.listeners]) try {
            Wy()
          } catch (bb) {
            yb(bb)
          }
        }
      }
      chestOpened(yb, bb, Wy) {
        this.Dv[0] = yb, this.Dv[1] = bb, this.Dv[2] = Wy, this.version++
      }
      refresh() {
        const yb = this.deps.api.apiView,
          bb = sy.s.inventoryViewPtr(yb, 0),
          Wy = sy.s.inventoryVersion(yb, 0),
          Uy = sy.s.selectedSlot(yb, 0);
        Uy !== this.selected && (this.selected = Uy, this.version++);
        const hy = sy.s.slotIcon(yb, 0);
        if (hy !== this.slotIconId && (this.slotIconId = hy, this.iconChanged = !0), bb === this.viewPtr && Wy === this.viewVersion) return;
        this.viewPtr = bb, this.viewVersion = Wy;
        const fy = this.deps.api.memoryData(bb, oW, 4, "the inventory view"),
          Zy = fy ? Math.min(fy.getUint32(0, !0), sy.wc) : 0;
        Zy !== this.len && (this.len = Zy, this.version++);
        let cb = 0;
        for (let Py = 0; Py < sy.wc; Py++) {
          const yb = sy.tc + Py * sy.Ec.BYTES,
            bb = null !== fy && Py < Zy ? sy.Ec.item(fy, yb) : 0;
          if (0 === bb || null === fy) {
            0 !== this.ids[Py] && (this.ids[Py] = 0, this.attrRead[Py] = -1, this.instances[Py]++, this.version++);
            continue
          }
          const Wy = sy.Ec.amount(fy, yb),
            Uy = sy.Ec.attrVersion(fy, yb);
          bb === this.ids[Py] && Wy === this.amounts[Py] || this.fill(Py, bb, Wy), Uy !== this.attrRead[Py] && (this.stale[cb] = Py, this.staleVersion[cb] = Uy, cb++)
        }
        cb > 0 && this.fetchAttributes(cb)
      }
      fill(yb, bb, Wy) {
        const {
          tables: Uy
        } = this.deps, hy = bb !== this.ids[yb];
        let fy = this.facades[yb];
        fy || (fy = {
          name: "",
          amount: null,
          attributes: {
            customAttributes: {}
          },
          typeObj: null
        }, this.facades[yb] = fy), hy && (fy.name = Uy.nameOfId(bb), fy.typeObj = Uy.itemType(bb), fy.attributes = {
          customAttributes: {}
        }, this.attrRead[yb] = -1, this.instances[yb]++), fy.amount = 0 === Wy ? null : Wy, this.ids[yb] = bb, this.amounts[yb] = Wy, this.version++
      }
      fetchAttributes(yb) {
        const {
          api: bb,
          onError: Wy
        } = this.deps, Uy = bb.memoryView(Uint16Array, bb.scratch(), yb, "item_attributes_batch's slots");
        if (!Uy) return void this.markRead(yb);
        Uy.set(this.stale.subarray(0, yb));
        const hy = bb.queries.itemAttributesBatch(yb),
          fy = 4294967295 === hy ? null : bb.memoryData(bb.scratch(), hy, 4, "item_attributes_batch's answer");
        if (!fy) return void this.markRead(yb);
        const Zy = new Uint8Array(fy.buffer, fy.byteOffset, hy);
        for (let Py = 0; Py + 8 <= hy;) {
          const yb = fy.getUint16(Py, !0),
            bb = fy.getUint32(Py + 4, !0),
            Uy = Zy.subarray(Py + 8, Py + 8 + bb);
          Py += 8 + (0, ey.Wd)(bb);
          const hy = this.facades[yb];
          if (hy && 0 !== this.ids[yb] && 0 !== bb) {
            try {
              hy.attributes = JSON.parse(KW.decode(Uy))
            } catch (cb) {
              Wy(cb)
            }
            this.version++
          }
        }
        this.markRead(yb)
      }
      markRead(yb) {
        for (let bb = 0; bb < yb; bb++) this.attrRead[this.stale[bb]] = this.staleVersion[bb]
      }
      swap(yb, bb) {
        return SW(yb) && SW(bb) && this.settle(this.queries().invSwap(yb, bb))
      }
      move(yb, bb, Wy) {
        return SW(yb) && SW(bb) && EW(Wy) && this.settle(this.queries().invMove(yb, bb, Wy))
      }
      quickMove(yb, bb, Wy, Uy) {
        var hy, fy;
        if (!SW(yb) || !SW(bb) || !SW(Wy) || null !== Uy && !EW(Uy)) return null;
        const Zy = this.queries().invQuickMove(yb, bb, Wy, null === Uy ? -1 : Math.min(Uy, BW)),
          cb = Zy === sy.sd ? sy.Ob : null !== (hy = null === (fy = this.extras()) || void 0 === fy ? void 0 : fy[1]) && void 0 !== hy ? hy : sy.Ob;
        return this.settle(Zy), cb === sy.Ob ? null : cb
      }
      remove(yb, bb, Wy) {
        return SW(yb) && EW(bb) && this.settle(this.queries().invRemove(yb, bb, Wy ? 1 : 0))
      }
      selectSlot(yb) {
        return SW(yb) && this.settle(this.queries().selectSlot(yb))
      }
      closeChest() {
        return this.settle(this.queries().closeChest())
      }
      enchant(yb, bb, Wy) {
        if (!SW(yb) || !Number.isInteger(bb)) return !1;
        const [Uy, hy, fy] = Wy;
        return this.settle(this.queries().invEnchant(yb, bb, Math.floor(Uy), Math.floor(hy), Math.floor(fy)))
      }
      craft(yb, bb, Wy) {
        let Uy;
        try {
          Uy = this.deps.tables.getItemId(yb)
        } catch {
          return qU
        }
        if (!SW(bb) || null !== Wy && (Number.isNaN(Wy) || Wy < 0)) return qU;
        const hy = null === Wy || Wy > BW ? -1 : Math.floor(Wy),
          fy = this.queries().craft(Uy, bb, hy);
        let Zy = qU;
        const cb = fy === sy.sd ? null : this.extras();
        if (cb) {
          const [yb, bb, Wy] = cb;
          Zy = {
            UH: yb,
            cL: bb === sy.Ob ? null : bb,
            amountAddedToSlot: Wy
          }
        }
        return this.settle(fy), Zy
      }
      salvage(yb, bb, Wy) {
        let Uy;
        try {
          Uy = this.deps.tables.getItemId(bb)
        } catch {
          return !1
        }
        return SW(yb) && Number.isInteger(Wy) && this.settle(this.queries().salvage(yb, Uy, Math.max(Math.min(Wy, BW), -BW)))
      }
      craftingView(yb, bb, Wy) {
        var Uy;
        if (this.stopped) return null;
        const {
          api: hy,
          onError: fy
        } = this.deps, Zy = yb ? eW.encode(yb) : null;
        if (null !== Zy) {
          if (Zy.length > 1024) return fy(new Error(`The crafting station ${yb}'s name is over 1024 bytes`)), null;
          const bb = hy.memoryView(Uint8Array, hy.scratch(), Zy.length, "crafting_view's station");
          if (!bb) return null;
          bb.set(Zy)
        }
        const cb = SW(bb) && SW(Wy),
          Py = hy.queries.craftingView(null !== (Uy = null === Zy || void 0 === Zy ? void 0 : Zy.length) && void 0 !== Uy ? Uy : 0, cb ? bb : 0, cb ? Wy : 0);
        return Py < sy.ib.BYTES ? (hy.reportCorruption(`crafting_view's answer of ${Py} bytes`), null) : hy.memoryData(hy.scratch(), Py, 1, "crafting_view's answer")
      }
      queries() {
        var yb, bb;
        return !1 === (null === (yb = (bb = this.deps).beforeOp) || void 0 === yb ? void 0 : yb.call(bb)) ? (this.stopped = !0, sW) : this.deps.api.queries
      }
      extras() {
        const {
          api: yb
        } = this.deps;
        return yb.memoryView(Uint32Array, yb.scratch(), 3, "a sync query's extra words")
      }
      settle(yb) {
        if (yb === sy.rd)(0, tW.e)();
        else if (yb !== sy.sd) {
          const bb = this.deps.cmd();
          bb && function(yb, bb, Wy) {
            return (0, tW.e)(), (0, sy.Yf)(yb, bb, Wy)
          }(bb, 0, yb) || this.deps.onError(new Error(`Sync op ${yb}'s marker didn't fit the command ring: its send goes after the next frame's commands`))
        }
        return this.stopped || this.refresh(), yb !== sy.sd
      }
    }
    const mU = 1 / .6,
      CW = [0, 1, 0],
      TW = [0, 0, 0],
      VW = new Uint8Array(0),
      JW = 1.2 * Eb.c.hq,
      gU = new TextEncoder,
      GW = [0, 0, 0],
      OW = [0, 0, 0],
      RW = new Map;

    function vU(yb) {
      let bb = RW.get(yb);
      return bb || (RW.size >= 64 && RW.clear(), bb = gU.encode(`{"emitRate":${yb}}`), RW.set(yb, bb)), bb
    }

    function iU(yb) {
      return Number.isFinite(yb) && yb > 0 ? yb : 0
    }

    function MW(yb, bb) {
      for (let Wy = 0; Wy < 3; Wy++) {
        const Uy = Math.abs(bb[Wy]);
        GW[Wy] = yb[Wy] - Uy, OW[Wy] = 2 * Uy
      }
      return Number.isFinite(GW[0] + GW[1] + GW[2] + OW[0] + OW[1] + OW[2])
    }

    function YW(yb, bb) {
      return "pos1" === yb || "pos2" === yb ? void 0 : bb
    }

    function XW(yb, bb, Wy) {
      return yb.length > sy.Ld.MaxOpts ? (Wy(new Error(`${bb}'s particle opts are over ${sy.Ld.MaxOpts} bytes of JSON`)), null) : yb
    }
    const nW = {
      moveTo() {},
      setEmitRate() {},
      emit() {},
      emitPoints() {},
      setDirections() {},
      stop() {},
      dispose() {}
    };
    class uW {
      constructor(yb) {
        this.deps = yb, this.session = 0, this.nextKey = 1, this.live = 0, this.started = !1
      }
      enabled() {
        return null !== this.sink()
      }
      sink() {
        return this.deps.isSessionLive() ? this.deps.cmd() : null
      }
      create(yb, bb) {
        var Wy;
        const Uy = this.sink(),
          hy = null !== (Wy = bb.half) && void 0 !== Wy ? Wy : TW;
        if (!Uy || this.live >= sy.Ld.MaxLiveKeys || this.nextKey > sy.Ld.MaxKey || !MW(bb.pos, hy)) return nW;
        const fy = this.nextKey,
          Zy = XW(function(yb) {
            var bb, Wy, Uy;
            const hy = JSON.stringify({
              texture: "string" === typeof yb.texture ? yb.texture : "smokePuff",
              Hy: yb.Hy,
              minLifeTime: yb.minLifeTime,
              maxLifeTime: yb.maxLifeTime,
              minSize: yb.minSize,
              maxSize: yb.maxSize,
              minEmitPower: yb.minEmitPower,
              maxEmitPower: yb.maxEmitPower,
              emitRate: iU(yb.emitRate),
              gravity: null !== (bb = yb.gravity) && void 0 !== bb ? bb : TW,
              dir1: null !== (Wy = yb.dir1) && void 0 !== Wy ? Wy : CW,
              dir2: null !== (Uy = yb.dir2) && void 0 !== Uy ? Uy : CW,
              colorGradients: yb.colorGradients,
              blendMode: yb.blendMode
            });
            return gU.encode(hy)
          }(yb), "createParticles", this.deps.onError);
        return Zy && (0, sy.Ye)(Uy, 0, fy, 0, sy.Ld.PresetNone, 0, GW, OW, Zy) ? (this.nextKey++, this.live++, this.started = !0, new rU(this, this.session, fy, yb, hy)) : nW
      }
      playEffect(yb) {
        const bb = this.sink(),
          {
            pos1: Wy,
            pos2: Uy
          } = yb;
        if (!bb || !Wy || !Uy) return;
        for (let fy = 0; fy < 3; fy++) GW[fy] = Math.min(Wy[fy], Uy[fy]), OW[fy] = Math.abs(Uy[fy] - Wy[fy]);
        if (!Number.isFinite(GW[0] + GW[1] + GW[2] + OW[0] + OW[1] + OW[2])) return;
        const hy = XW(gU.encode(JSON.stringify(yb, YW)), "playParticleEffect", this.deps.onError);
        hy && (0, sy.Te)(bb, 0, 0, sy.Ld.PresetNone, sy.Ld.HasBox, 0, GW, OW, hy)
      }
      burstPreset(yb, bb, Wy) {
        const Uy = this.sink(),
          hy = Math.min(Math.floor(Wy), sy.Ld.MaxBurst);
        if (!Uy || !Object.hasOwn(sy.gc, yb) || !(hy > 0)) return;
        const fy = JW;
        for (let Zy = 0; Zy < 3; Zy++) GW[Zy] = bb[Zy] - fy / 2, OW[Zy] = fy;
        Number.isFinite(GW[0] + GW[1] + GW[2]) && (0, sy.Te)(Uy, 0, 0, sy.gc[yb], sy.Ld.HasBox, hy, GW, OW, VW)
      }
      sessionEnded() {
        this.session++;
        const yb = this.started ? this.deps.cmd() : null;
        return this.started = !1, this.nextKey = 1, this.live = 0, !yb || (0, sy.$e)(yb, 0)
      }
      sinkFor(yb) {
        return yb === this.session ? this.deps.cmd() : null
      }
      stop(yb, bb) {
        const Wy = this.sinkFor(yb);
        Wy && (0, sy.af)(Wy, 0, bb) && this.live--
      }
    }
    class rU {
      constructor(yb, bb, Wy, Uy, hy) {
        this.owner = yb, this.session = bb, this.key = Wy, this.half = void 0, this.rate = void 0, this.stopDelayMs = void 0, this.emitted = void 0, this.stopped = !1, this.freed = !1, this.half = [Math.abs(hy[0]), Math.abs(hy[1]), Math.abs(hy[2])], this.rate = iU(Uy.emitRate), this.emitted = this.rate > 0;
        const fy = Uy.maxLifeTime * mU * 1e3 + 250;
        this.stopDelayMs = fy >= 0 ? Math.min(fy, 2147483647) : 250
      }
      sink() {
        return this.stopped ? null : this.owner.sinkFor(this.session)
      }
      moveTo(yb, bb) {
        const Wy = this.sink();
        if (Wy) {
          if (bb)
            for (let yb = 0; yb < 3; yb++) this.half[yb] = Math.abs(bb[yb]);
          MW(yb, this.half) && (0, sy.cf)(Wy, 0, this.key, sy.Ld.HasBox, GW, OW, VW)
        }
      }
      setEmitRate(yb) {
        const bb = this.sink(),
          Wy = iU(yb);
        bb && Wy !== this.rate && (0, sy.cf)(bb, 0, this.key, 0, TW, TW, vU(Wy)) && (this.rate = Wy, this.emitted ||= Wy > 0)
      }
      emit(yb) {
        const bb = this.sink(),
          Wy = Math.min(Math.floor(yb), sy.Ld.MaxBurst);
        bb && Wy > 0 && (0, sy.Te)(bb, 0, this.key, sy.Ld.PresetNone, 0, Wy, TW, TW, VW) && (this.emitted = !0)
      }
      emitPoints(yb, bb, Wy) {
        const Uy = this.sink(),
          hy = Math.min(Math.floor(Wy), sy.Ld.MaxPoints, Math.floor(bb.length / 4));
        if (!Uy || !(hy > 0) || !Number.isFinite(yb[0] + yb[1] + yb[2])) return;
        const fy = new Uint8Array(bb.buffer, bb.byteOffset, hy * sy.Ld.PointBytes);
        (0, sy.Ve)(Uy, 0, this.key, hy, yb, fy) && (this.emitted = !0)
      }
      setDirections(yb, bb) {
        const Wy = this.sink();
        if (!Wy || !Number.isFinite(yb[0] + yb[1] + yb[2] + bb[0] + bb[1] + bb[2])) return;
        const Uy = gU.encode(JSON.stringify({
          dir1: [yb[0], yb[1], yb[2]],
          dir2: [bb[0], bb[1], bb[2]]
        }));
        (0, sy.cf)(Wy, 0, this.key, 0, TW, TW, Uy)
      }
      stop() {
        const yb = this.sink();
        this.stopped = !0, yb && (this.emitted ? (this.rate > 0 && (0, sy.cf)(yb, 0, this.key, 0, TW, TW, vU(0)), setTimeout((() => {
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
    const HW = Qb.m,
      aU = new TextDecoder;

    function FW(yb, bb) {
      const {
        serverIds: Wy,
        kinds: Uy
      } = yb;
      let hy = 0;
      for (let fy = 0; fy < Wy.length; fy++) {
        const yb = Wy[fy];
        if (yb !== sy.id && !Vy(Uy[fy])) {
          if (hy === bb.length) {
            const yb = new Int32Array(Math.max(64, 2 * hy));
            yb.set(bb), bb = yb
          }
          bb[hy++] = yb
        }
      }
      return {
        ids: bb,
        count: hy
      }
    }

    function pW(yb, bb) {
      return yb.length >= bb ? yb : new Int32Array(Math.max(bb, 2 * yb.length))
    }

    function LW(yb, bb, Wy, Uy) {
      for (let hy = 0; hy < Wy; hy += 4096) {
        const fy = Math.min(4096, Wy - hy),
          Zy = yb.memoryView(Int32Array, yb.scratch(), fy, "entity_info_batch's ids");
        if (!Zy) return !1;
        Zy.set(bb.subarray(hy, hy + fy));
        const cb = yb.queries.entityInfoBatch(fy),
          Py = 4294967295 === cb ? null : yb.memoryData(yb.scratch(), cb, 4, "entity_info_batch's records");
        if (!Py) return !1;
        for (let yb = 0; yb + sy.Wb.BYTES <= cb;) {
          const bb = sy.Wb.len(Py, yb);
          Uy(sy.Wb.serverId(Py, yb), QW(Py, yb, bb)), yb += sy.Wb.BYTES + (0, ey.Wd)(bb)
        }
      }
      return !0
    }

    function QW(yb, bb, Wy) {
      var Uy, hy, fy;
      const Zy = sy.Wb.kind(yb, bb),
        cb = 0 === Zy ? null : Jy(Zy);
      if (null === cb) return null;
      const Py = sy.Wb.variation(yb, bb),
        oy = sy.Wb.pose(yb, bb),
        By = sy.Wb.meta(yb, bb),
        Ky = sy.Wb.mesh(yb, bb),
        ey = 0 !== (sy.Wb.flags(yb, bb) & sy.Tb.HasOpts),
        qb = HW[cb];
      return Object.freeze({
        type: cb,
        variation: Py === sy.od ? void 0 : null !== (Uy = null !== (hy = null === qb || void 0 === qb ? void 0 : qb[Py]) && void 0 !== hy ? hy : null === qb || void 0 === qb ? void 0 : qb[0]) && void 0 !== Uy ? Uy : "default",
        pose: oy === sy.rc ? void 0 : null !== (fy = sy.Hb[oy]) && void 0 !== fy ? fy : sy.Hb[0],
        metaInfo: By === sy.rc ? void 0 : sy.ad[By],
        meshKind: Ky === sy.rc ? void 0 : sy._c[Ky],
        meshOpts: ey ? aU.decode(new Uint8Array(yb.buffer, yb.byteOffset + bb + sy.Wb.BYTES, Wy)) : void 0
      })
    }
    const jU = 1,
      DW = 2;
    class tU {
      constructor(yb) {
        this.deps = yb, this.wanted = 0, this.kW = !1, this.refused = !1
      }
      get on() {
        return this.kW
      }
      want(yb, bb) {
        this.wanted = bb ? this.wanted | yb : this.wanted & ~yb;
        const Wy = 0 !== this.wanted;
        if (Wy === this.kW) return;
        const Uy = this.deps.cmd();
        null !== Uy ? (0, sy.bg)(Uy, 0, Wy ? 1 : 0) ? (this.kW = Wy, this.refused = !1) : this.refused || (this.refused = !0, this.deps.onError(new Error("WatchEntityInfo didn't fit the command ring"))) : this.kW = !1
      }
    }
    class wW {
      constructor(yb) {
        this.deps = yb, this.entries = new Map, this.complete = !1, this.refill = !1, this.midFrame = !1, this.pending = new Int32Array(64), this.pendingCount = 0, this.ids = new Int32Array(64)
      }
      get(yb) {
        var bb;
        return this.complete || this.fill(), null !== (bb = this.entries.get("string" === typeof yb ? yb : String(yb))) && void 0 !== bb ? bb : null
      }
      inCoreCall() {
        this.midFrame = !0
      }
      stale(yb) {
        if (this.complete) {
          if (this.pendingCount === this.pending.length) {
            const yb = new Int32Array(2 * this.pending.length);
            yb.set(this.pending), this.pending = yb
          }
          this.pending[this.pendingCount++] = yb
        }
      }
      removed(yb) {
        this.entries.size > 0 && this.entries.delete(String(yb))
      }
      refresh() {
        const yb = this.pendingCount;
        if (this.pendingCount = 0, this.midFrame = !1, !this.deps.watch.on || this.refill) return this.complete = !1, void(this.refill = !1);
        if (yb > 0 && this.complete) {
          const {
            api: bb
          } = this.deps;
          let Wy = 0;
          const Uy = this.ids = pW(this.ids, yb);
          for (let hy = 0; hy < yb; hy++) {
            const yb = this.pending[hy],
              fy = bb.indexById.get(yb);
            void 0 === fy || Vy(bb.kinds[fy]) ? this.entries.delete(String(yb)) : Uy[Wy++] = yb
          }
          Wy > 0 && !this.batch(Uy, Wy) && (this.complete = !1)
        }
      }
      sessionEnded() {
        this.entries.clear(), this.complete = !1, this.refill = !1, this.midFrame = !1, this.pendingCount = 0, this.deps.watch.want(jU, !1)
      }
      fill() {
        const {
          api: yb
        } = this.deps;
        if (this.complete = !0, this.pendingCount = 0, this.entries.clear(), this.deps.isSessionLive()) {
          const {
            watch: yb
          } = this.deps, bb = yb.on;
          yb.want(jU, !0), !bb && yb.on && (this.refill = this.midFrame)
        }
        const {
          ids: bb,
          count: Wy
        } = FW(yb, this.ids);
        this.ids = bb, Wy > 0 && !this.batch(bb, Wy) && (this.refill = !0)
      }
      batch(yb, bb) {
        return LW(this.deps.api, yb, bb, ((yb, bb) => {
          null === bb ? this.entries.delete(String(yb)) : this.entries.set(String(yb), bb)
        }))
      }
    }
    var kU = Wy(4001);

    function NW(yb) {
      if ("message" !== yb.type || yb.vc !== kU.Tb.NewClientOptions || yb.payloadKind !== ey.Ub.Msgpack) return null;
      const bb = (0, Hy.c)(yb.payload);
      if (null === bb || "object" !== typeof bb || Array.isArray(bb)) throw new Error("NewClientOptions whose body isn't an object of options");
      return bb
    }
    var zU = Wy(1102),
      IW = Wy(35406);

    function xU(yb, bb, Wy, Uy, hy, fy, cb) {
      var Py, oy, By;
      switch (yb) {
        case sy.he.ToggleMenu: {
          const yb = sy.F[bb];
          Zy.g.EZ("toggleMenu", void 0 === yb ? "inventory" : `inventory|${yb}`);
          break
        }
        case sy.he.EditBoard:
          Zy.g.EZ("EditBoard", {
            pos: 0 === bb ? null : Wy
          });
          break;
        case sy.he.EditCodeBlock:
        case sy.he.ViewCodeBlock:
          Zy.g.EZ("EditCodeBlock", {
            pos: Wy,
            canChangePos: yb === sy.he.EditCodeBlock
          });
          break;
        case sy.he.EditCustomLobbyBlock:
          Zy.g.EZ("EditCustomLobbyBlock", {
            pos: Wy
          });
          break;
        case sy.he.OpenIronChest:
          Zy.g.EZ("OpenIronChest", {
            pos: Wy
          });
          break;
        case sy.he.EditNameTag:
          Zy.g.EZ("EditNameTag", null !== (Py = null === (oy = hy.kW()) || void 0 === oy || null === (By = oy.attributes.customAttributes) || void 0 === By ? void 0 : By.text) && void 0 !== Py ? Py : "");
          break;
        case sy.he.EditBook: {
          var Ky, ey, Sy;
          const yb = null === (Ky = hy.kW()) || void 0 === Ky ? void 0 : Ky.attributes;
          Zy.g.EZ("EditBook", {
            pages: (0, zU._)(null === yb || void 0 === yb || null === (ey = yb.customAttributes) || void 0 === ey ? void 0 : ey.pages),
            title: null !== (Sy = null === yb || void 0 === yb ? void 0 : yb.customDisplayName) && void 0 !== Sy ? Sy : "Title",
            isPublished: !(null === yb || void 0 === yb || !yb.customDescription)
          });
          break
        }
        case sy.he.CantChangeBlock:
          ! function(yb, bb) {
            const Wy = bb.getClientOption("cantChangeError"),
              Uy = bb.getClientOption(yb ? "cantBuildError" : "cantBreakError"),
              hy = yb ? Wy : Uy;
            (bb.getClientOption("canChange") || hy || "You cannot modify this block" !== Wy) && Zy.g.EZ("showBottomMessage", {
              message: Uy || Wy,
              type: "Error"
            })
          }(1 === bb, fy);
          break;
        case sy.he.MiddleBarStart:
          Zy.g.EZ("middleScreenBarInitiate", {
            duration: Uy,
            J9: 1 === Wy[0],
            horizBarRemOffset: bb
          });
          break;
        case sy.he.MiddleBarStop:
          Zy.g.EZ("middleScreenBarRemove");
          break;
        case sy.he.Hitmarker:
          Zy.g.EZ("localGunHitmarker", {
            oN: 1 === bb
          });
          break;
        case sy.he.ShotsLeft:
          Zy.g.EZ("localPlayerNewShotsLeft", Uy);
          break;
        case sy.he.AimingOverlay:
          Zy.g.EZ("aimingOverlay", 3 === (3 & bb) ? "sniper" : "none");
          break;
        case sy.he.BottomMessage:
          Zy.g.EZ("showBottomMessage", JSON.parse(cb()));
          break;
        case sy.he.Crosshair:
          hy.inaccuracy = (0, ab.e)(Uy), (0, IW.b)().crosshairAccuracy(hy.inaccuracy);
          break;
        case sy.he.ChargeStage:
          break;
        case sy.he.EmoteWheelClose:
          Zy.g.EZ("requestEmoteWheelClose");
          break;
        case sy.he.BlockMined:
          Zy.g.EZ("localBlockMined");
          break;
        default:
          throw new qb.b(`UiEvent of no kind: what ${yb}`)
      }
    }
    var AW = Wy(36662),
      dW = Wy(8420),
      yh = Wy(1606),
      bh = Wy(35547),
      WU = Wy(35464),
      UU = Wy(3991);
    const hU = 10,
      fU = {
        player: [],
        chestOrCreative: [],
        chest: null,
        creative: !1,
        selectedSlot: 0,
        freeSlots: 0
      },
      ZU = {
        items: [],
        ammo: 0,
        selectedSlot: 0
      },
      ch = {
        gun: !1,
        aimable: !1,
        chargeName: null
      };

    function PU(yb, bb) {
      let Wy, Uy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        hy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      const fy = () => (Wy = (0, yh.n)(Wy, bb()), Wy);
      return {
        current: fy,
        watch(bb) {
          const Wy = () => {
              bb(fy())
            },
            Zy = [yb.watch(Wy)];
          return null !== Uy && Zy.push((0, yh.o)((yb => {
            yb.some(Uy) && Wy()
          }))), null !== hy && Zy.push(hy(Wy)), () => {
            for (const yb of Zy) yb()
          }
        }
      }
    }

    function oU(yb) {
      return yb && {
        name: yb.name,
        amount: yb.amount,
        attributes: yb.attributes
      }
    }
    const BU = new WeakMap;

    function KU(yb) {
      let bb = BU.get(yb);
      return void 0 === bb && (bb = (0, WU.creativeItemIds)().map((bb => ({
        name: yb.nameOfId(bb),
        amount: yb.isStackableId(bb) ? 1 : null,
        attributes: (0, AW.d)("Gun" === (0, WU.itemTypeOf)(bb) ? {
          type: "Gun",
          clipSize: (0, WU.clipSizeOf)(bb)
        } : void 0)
      }))), BU.set(yb, bb)), bb
    }

    function eU(yb, bb, Wy, Uy) {
      const hy = bb => (yb.flush(Uy), bb),
        fy = Wy => {
          var Uy, hy, fy, Zy, cb, Py, oy;
          const By = yb.slot(Wy);
          if (!By) return null;
          const {
            rootName: Ky,
            metaStr: ey
          } = bb.getMetaInfo(By.name);
          return {
            name: By.name,
            amount: By.amount,
            attributes: By.attributes,
            instance: yb.instance(Wy),
            displayName: null !== (Uy = By.attributes.customDisplayName) && void 0 !== Uy ? Uy : bb.getDisplayName(Ky),
            requiresAmmo: "RequiresAmmo" === ey,
            clipSize: null !== (hy = null !== (fy = null === (Zy = By.attributes.customAttributes) || void 0 === Zy || null === (cb = Zy.gunStats) || void 0 === cb ? void 0 : cb.clipSize) && void 0 !== fy ? fy : null === (Py = bb.getGunStats(Ky)) || void 0 === Py ? void 0 : Py.clipSize) && void 0 !== hy ? hy : null === (oy = By.typeObj) || void 0 === oy ? void 0 : oy.clipSize
          }
        },
        cb = function(yb, bb) {
          let Wy = null,
            Uy = {
              focus: null,
              recipes: [],
              detail: null
            },
            hy = -1;
          const fy = new Set;
          return {
            read() {
              var fy, Zy;
              if (null === Wy) return null !== Uy.focus && (Uy = {
                ...Uy,
                focus: null
              }), Uy;
              if (Uy.focus === Wy && hy === yb.changes) return Uy;
              if (hy = yb.changes, 0 === yb.length) return Uy = {
                focus: Wy,
                recipes: [],
                detail: null
              }, Uy;
              let cb = 0;
              if (null !== Wy.recipe) try {
                cb = bb.getItemId(Wy.recipe.name)
              } catch {}
              const Py = yb.craftingView(Wy.station, cb, null !== (fy = null === (Zy = Wy.recipe) || void 0 === Zy ? void 0 : Zy.WH) && void 0 !== fy ? fy : 0);
              return Uy = null === Py ? {
                focus: Wy,
                recipes: [],
                detail: null
              } : function(yb, bb, Wy) {
                let Uy = sy.ib.BYTES;
                const hy = [];
                for (let By = sy.ib.recipes(yb, 0); By > 0; By--) {
                  const Wy = sy.ab.flags(yb, Uy),
                    fy = {
                      name: bb.nameOfId(sy.ab.item(yb, Uy)),
                      WH: sy.ab.recipe(yb, Uy),
                      requires: [],
                      produces: sy.ab.produces(yb, Uy),
                      haveIngredients: 0 !== (Wy & sy.$.HaveIngredients),
                      listed: 0 !== (Wy & sy.$.Listed)
                    };
                  let Zy = sy.ab.requires(yb, Uy);
                  for (Uy += sy.ab.BYTES; Zy > 0; Zy--) {
                    const Wy = sy.db.items(yb, Uy);
                    fy.requires.push({
                      items: SU(yb, Uy + sy.db.BYTES, Wy, bb),
                      amt: sy.db.amount(yb, Uy)
                    }), Uy += sy.db.BYTES + 2 * Wy
                  }
                  hy.push(fy)
                }
                const fy = sy.ib.flags(yb, 0);
                if (null === Wy.recipe || 0 === (fy & sy.eb.Detail)) return {
                  focus: Wy,
                  recipes: hy,
                  detail: null
                };
                const Zy = {},
                  cb = {};
                for (let By = sy.ib.ingredients(yb, 0); By > 0; By--) {
                  const Wy = sy.Y.item(yb, Uy),
                    hy = sy.Y.from(yb, Uy),
                    fy = sy.Y.amount(yb, Uy);
                  Uy += sy.Y.BYTES;
                  const Py = hy === sy.E ? null : SU(yb, Uy, hy, bb);
                  if (null !== Py && (Uy += 2 * hy), 0 === Wy) continue;
                  const oy = bb.nameOfId(Wy);
                  Zy[oy] = fy, null !== Py && (cb[oy] = Py)
                }
                const {
                  name: Py,
                  WH: oy
                } = Wy.recipe;
                return {
                  focus: Wy,
                  recipes: hy,
                  detail: {
                    name: Py,
                    WH: oy,
                    craftAllTimes: sy.ib.craftAllTimes(yb, 0),
                    roomForOne: 0 !== (fy & sy.eb.RoomForOne),
                    resultStackable: Boolean(bb.getItemStat(Py, "stackable")),
                    amounts: Zy,
                    ingredientsCraftedFrom: cb
                  }
                }
              }(Py, bb, Wy), Uy
            },
            setFocus(yb) {
              Wy = yb;
              for (const bb of [...fy]) bb()
            },
            watchFocus: yb => (fy.add(yb), () => {
              fy.delete(yb)
            })
          }
        }(yb, bb);
      return {
        states: {
          inventory: PU(yb, (() => {
            const Wy = yb.length;
            if (0 === Wy) return fU;
            const Uy = [];
            for (let bb = 0; bb < sy.Ad; bb++) Uy.push(oU(yb.slot(bb)));
            const hy = yb.slotIcon,
              fy = Uy[yb.selectedSlot];
            0 !== hy && fy && (Uy[yb.selectedSlot] = {
              ...fy,
              icon: bb.nameOfId(hy)
            });
            const Zy = !0 === bb.getClientOption("creative");
            let cb = [],
              Py = null;
            if (Wy > sy.Ad) {
              for (let bb = sy.Ad; bb < Wy; bb++) cb.push(oU(yb.slot(bb)));
              Py = {
                type: null,
                pos: [...yb.Dv],
                numSlots: Wy - sy.Ad,
                ironChest: null
              }
            } else Zy && (cb = KU(bb));
            return {
              player: Uy,
              chestOrCreative: cb,
              chest: Py,
              creative: Zy,
              selectedSlot: yb.selectedSlot,
              freeSlots: yb.freeSlots()
            }
          }), (0, yh.h)("creative")),
          hotbar: PU(yb, (() => {
            if (0 === yb.length) return ZU;
            const bb = [];
            for (let yb = 0; yb < hU; yb++) bb.push(fy(yb));
            return {
              items: bb,
              ammo: yb.amountOf("Ammo"),
              selectedSlot: yb.selectedSlot
            }
          }), (0, yh.d)("DisplayName", "GunStats")),
          crafting: PU(yb, cb.read, null, cb.watchFocus),
          heldItemAim: PU(yb, (() => {
            var bb;
            if (!Wy()) return ch;
            const Uy = null === (bb = yb.kW()) || void 0 === bb ? void 0 : bb.typeObj,
              hy = "Gun" === (null === Uy || void 0 === Uy ? void 0 : Uy.type);
            return {
              gun: hy,
              aimable: hy || !0 === (null === Uy || void 0 === Uy ? void 0 : Uy.showsAimingUi),
              chargeName: "Chargeable" === (null === Uy || void 0 === Uy ? void 0 : Uy.type) ? Uy.name : null
            }
          }), null, (yb => function(yb, bb) {
            let Wy = yb();
            return (0, UU.z)((() => {
              const Uy = yb();
              Uy !== Wy && (Wy = Uy, bb(Uy))
            }))
          }(Wy, yb)))
        },
        events: {
          hotbarSlotRequested: (0, yh.b)("setSelectedInventorySlotI"),
          hotbarScrolled: (0, yh.b)("ScrollInventorySlot"),
          numberKeyPressed: (0, yh.b)("numkeyPressed"),
          inventoryDropRequested: (0, yh.b)("DropInvenItem"),
          chestToggled: (0, yh.b)("chestToggleFromServer"),
          chestRefreshed: (0, yh.b)("chestRefreshedFromServer", sU),
          inventorySynced: (0, yh.b)("syncedInvenFromServer", sU),
          enchantingTableOpened: (0, yh.b)("enchantingTable", (yb => {
            let {
              position: Wy,
              Df: Uy
            } = yb;
            return {
              position: [...Wy],
              blockName: bb.getMetaInfo(Uy).rootName
            }
          }))
        },
        commands: {
          selectHotbarSlot(bb) {
            yb.selectSlot(bb), yb.flush(Uy)
          },
          removeInventoryItem(bb) {
            let {
              slot: Wy,
              amount: Uy,
              drop: fy
            } = bb;
            return hy(yb.remove(Wy, Uy, fy))
          },
          swapInventorySlots(bb) {
            let {
              a: Wy,
              b: Uy
            } = bb;
            return hy(yb.swap(Wy, Uy))
          },
          moveInventoryItem(bb) {
            let {
              from: Wy,
              to: Uy,
              amount: fy
            } = bb;
            return hy(yb.move(Wy, Uy, fy))
          },
          quickMoveInventoryItem(bb) {
            let {
              slot: Wy,
              start: Uy,
              end: fy,
              amount: Zy
            } = bb;
            return hy(yb.quickMove(Wy, Uy, fy, Zy))
          },
          closeChest() {
            yb.closeChest(), yb.flush(Uy), Zy.g.EZ("chestClosedByPlayer")
          },
          focusCrafting(yb) {
            cb.setFocus(yb)
          },
          craftRecipe(bb) {
            let {
              name: Wy,
              WH: Uy,
              times: fy
            } = bb;
            return hy(yb.craft(Wy, Uy, fy))
          },
          salvageItem(bb) {
            let {
              slot: Wy,
              name: Uy,
              amount: fy
            } = bb;
            return hy(yb.salvage(Wy, Uy, fy))
          },
          enchantItem(bb) {
            let {
              slot: Wy,
              level: Uy,
              tablePos: hy
            } = bb;
            yb.enchant(Wy, Uy, hy)
          }
        },
        queries: {
          enchantingOffer(Wy) {
            let {
              slot: Uy,
              blockName: hy
            } = Wy;
            return function(yb, bb, Wy, Uy) {
              const hy = yb.slot(Wy);
              if (!hy || !bb.getClientOption("canCraft") || !(0, dW.l)(Uy) || (0, dW.k)(hy.attributes)) return qh;
              const fy = (0, WU.enchantmentPerksOf)(bb.getItemId(hy.name));
              if (0 === fy.length) return qh;
              const Zy = [];
              for (let cb = 0; cb < bh.b; cb++) {
                const {
                  commonProb: yb,
                  uncommonProb: bb,
                  rareProb: Wy,
                  epicProb: hy,
                  legendaryProb: fy,
                  level: Py
                } = (0, dW.f)(Uy, cb);
                Zy.push({
                  level: Py,
                  odds: [yb, bb, Wy, hy, fy].map((yb => 100 * yb))
                })
              }
              return {
                perks: [...fy],
                options: Zy
              }
            }(yb, bb, Uy, hy)
          }
        }
      }
    }
    const qh = Object.freeze({
      perks: [],
      options: []
    });

    function sU() {
      return null
    }

    function SU(yb, bb, Wy, Uy) {
      const hy = [];
      for (let fy = 0; fy < Wy; fy++) {
        const Wy = yb.getUint16(bb + 2 * fy, !0);
        0 !== Wy && hy.push(Uy.nameOfId(Wy))
      }
      return hy
    }
    class EU {
      constructor(yb) {
        this.api = yb, this.positions = new Map, this.targeted = {
          Wfy: 0,
          position: [0, 0, 0],
          normal: [0, 0, 0],
          bc: [0, 0, 0]
        }, this.hasTarget = !1, this.breaking = [0, 0, 0], this.isBreaking = !1
      }
      position(yb) {
        let bb = this.positions.get(yb);
        return bb || (this.api.checkValid(yb) || this.api.isLocal(yb) ? (bb = [NaN, NaN, NaN], this.api.readPosition(yb, bb), this.positions.set(yb, bb), bb) : null)
      }
      Kcy() {
        return this.hasTarget ? this.targeted : null
      }
      breakingPosition() {
        return this.isBreaking ? this.breaking : null
      }
      refresh() {
        for (const [bb, Wy] of this.positions) this.api.readPosition(bb, Wy) || this.api.checkValid(bb) || this.api.isLocal(bb) || this.positions.delete(bb);
        const yb = this.api.apiView;
        if (this.refreshTarget(), this.isBreaking = 0 !== (sy.s.playerFlags(yb, 0) & sy.Od.Breaking) && sy.s.breakingProgress(yb, 0) >= 0, this.isBreaking)
          for (let bb = 0; bb < 3; bb++) this.breaking[bb] = sy.s.breakingPos(yb, 0, bb)
      }
      refreshTarget() {
        const yb = this.api.apiView,
          bb = sy.s.targetBlockId(yb, 0);
        if (this.hasTarget = bb !== sy.kd, this.hasTarget) {
          const Wy = this.targeted;
          Wy.Wfy = bb;
          for (let bb = 0; bb < 3; bb++) Wy.position[bb] = sy.s.targetBlock(yb, 0, bb), Wy.normal[bb] = sy.s.targetNormal(yb, 0, bb), Wy.bc[bb] = sy.s.targetAdjacent(yb, 0, bb)
        }
      }
      despawned(yb) {
        const bb = this.positions.get(yb);
        bb && !this.api.isLocal(yb) && (bb.fill(NaN), this.positions.delete(yb))
      }
    }
    var lU = Wy(39145),
      mh = Wy(39130),
      CU = Wy(35540);
    const TU = 1,
      VU = 2;
    class JU {
      constructor() {
        this.game = new CU.f, this.client = new CU.f, this.kW = 0
      }
      setGame(yb) {
        if (null === yb || "object" !== typeof yb) return !1;
        const {
          key: bb,
          value: Wy
        } = yb;
        return "string" === typeof bb && (this.game.setBooleanType(bb, Boolean(Wy)), !0)
      }
      setClient(yb, bb) {
        this.client.setBooleanType(yb, bb)
      }
      clearGame() {
        this.game = new CU.f
      }
      perms() {
        return (this.game._getTotalBooleanVal() ? TU : 0) | (this.client._getTotalBooleanVal() ? VU : 0)
      }
      write(yb) {
        const bb = this.perms();
        return bb === this.kW || !(!yb || !(0, sy.ze)(yb, 0, sy.Xb.Keep, bb)) && (this.kW = bb, !0)
      }
    }
    class gh {
      constructor(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => 35;
        this.api = yb, this.screenBandPct = void 0, this.clipX = 0, this.clipY = 0, this.clipW = 0, this.eye = [0, 0, 0], this.forward = [0, 0, 1], this.along = [0, 0, 0], this.screenBandPct = {
          x: cb.d,
          get y() {
            return bb()
          }
        }
      }
      get hasView() {
        const yb = this.api.apiView,
          bb = sy.s.viewProj;
        return 0 !== bb(yb, 0, 3) || 0 !== bb(yb, 0, 7) || 0 !== bb(yb, 0, 11) || 0 !== bb(yb, 0, 15)
      }
      get cameraPosition() {
        const yb = this.api.apiView,
          {
            eye: bb
          } = this;
        for (let Wy = 0; Wy < 3; Wy++) bb[Wy] = sy.s.eye(yb, 0, Wy);
        return bb
      }
      get cameraDirection() {
        const yb = this.api.apiView,
          bb = sy.s.viewProj,
          Wy = bb(yb, 0, 3),
          Uy = bb(yb, 0, 7),
          hy = bb(yb, 0, 11),
          fy = Math.hypot(Wy, Uy, hy),
          {
            forward: Zy
          } = this;
        return fy > 0 && (Zy[0] = Wy / fy, Zy[1] = Uy / fy, Zy[2] = hy / fy), Zy
      }
      get cameraHeading() {
        return sy.s.heading(this.api.apiView, 0)
      }
      get cameraPitch() {
        return sy.s.pitch(this.api.apiView, 0)
      }
      get tanHalfFovX() {
        return sy.s.tanHalfFovX(this.api.apiView, 0)
      }
      get tanHalfFovY() {
        return sy.s.tanHalfFovY(this.api.apiView, 0)
      }
      projectWorldPosToScreenPos(yb) {
        this.clip(yb);
        const {
          clipX: bb,
          clipY: Wy,
          clipW: Uy
        } = this;
        if (Uy > 0) {
          const yb = bb / Uy * 50,
            hy = -Wy / Uy * 50;
          return Math.abs(yb) <= this.screenBandPct.x && Math.abs(hy) <= this.screenBandPct.y ? {
            x: 50 + yb,
            y: 50 + hy
          } : this.clampToBand(yb, hy)
        }
        const hy = this.cameraPosition,
          fy = Math.hypot(yb[0] - hy[0], yb[1] - hy[1], yb[2] - hy[2]),
          Zy = this.api.apiView,
          cb = sy.s.viewProj,
          Py = fy > 0 ? bb / fy : 0,
          oy = fy > 0 ? -Wy / fy : 0,
          By = Math.hypot(cb(Zy, 0, 1), cb(Zy, 0, 5), cb(Zy, 0, 9)),
          Ky = Py / Math.hypot(cb(Zy, 0, 0), cb(Zy, 0, 4), cb(Zy, 0, 8)),
          ey = oy / By,
          qb = !(Math.abs(Ky) >= .001 || Math.abs(ey) >= .001);
        return this.clampToBand(Py, qb ? -(By || 1) : oy)
      }
      projectDirectionToScreenPos(yb) {
        if (!this.hasView) return;
        const bb = this.cameraPosition,
          Wy = this.along;
        for (let Uy = 0; Uy < 3; Uy++) Wy[Uy] = bb[Uy] + 10 * yb[Uy];
        return this.projectWorldPosToScreenPos(Wy)
      }
      projectWorldPosToViewport(yb) {
        this.clip(yb);
        const {
          clipX: bb,
          clipY: Wy,
          clipW: Uy
        } = this;
        return Uy > 0 ? {
          x: 50 + bb / Uy * 50,
          y: 50 - Wy / Uy * 50
        } : null
      }
      clip(yb) {
        const bb = this.api.apiView,
          Wy = yb[0] - sy.s.origin(bb, 0, 0),
          Uy = yb[1] - sy.s.origin(bb, 0, 1),
          hy = yb[2] - sy.s.origin(bb, 0, 2),
          fy = sy.s.viewProj;
        this.clipX = fy(bb, 0, 0) * Wy + fy(bb, 0, 4) * Uy + fy(bb, 0, 8) * hy + fy(bb, 0, 12), this.clipY = fy(bb, 0, 1) * Wy + fy(bb, 0, 5) * Uy + fy(bb, 0, 9) * hy + fy(bb, 0, 13), this.clipW = fy(bb, 0, 3) * Wy + fy(bb, 0, 7) * Uy + fy(bb, 0, 11) * hy + fy(bb, 0, 15)
      }
      clampToBand(yb, bb) {
        return (0, cb.e)(yb, bb, this.screenBandPct.x, this.screenBandPct.y)
      }
    }
    var GU = Wy(4013);
    const OU = new TextEncoder,
      RU = new Uint8Array(sy.M * sy.I);
    class vh {
      constructor() {
        this.buttons = [], this.kW = !0
      }
      set(yb) {
        this.buttons = yb, this.kW = !1
      }
      attached() {
        this.kW = 0 === this.buttons.length
      }
      write(yb) {
        if (this.kW) return;
        const bb = new Uint8Array(sy.M),
          Wy = new Uint8Array(sy.M);
        let Uy = 0,
          hy = 0;
        for (const {
            id: fy,
            keycode: Zy
          }
          of this.buttons) {
          if (Uy === sy.M) break;
          const {
            read: yb,
            written: cb
          } = OU.encodeInto(fy, RU.subarray(hy, hy + sy.I));
          if (yb < fy.length) continue;
          const Py = GU.k[Zy];
          bb[Uy] = "number" === typeof Py ? Py : 0, Wy[Uy] = cb, Uy++, hy += cb
        }
        this.kW = (0, sy.pe)(yb, 0, Uy, bb, Wy, RU.subarray(0, hy))
      }
    }

    function ih(yb, bb, Wy) {
      const Uy = OU.encode(bb);
      return Uy.length <= sy.I && function(yb, bb, Wy, Uy) {
        return (0, tW.e)(), (0, sy.ff)(yb, bb, Wy, Uy)
      }(yb, 0, Wy ? 1 : 0, Uy)
    }
    const MU = new TextDecoder,
      YU = new TextEncoder,
      XU = new Uint8Array(0),
      nU = {
        off: sy.Qd.Off,
        key: sy.Qd.Key,
        touch: sy.Qd.Touch
      };
    class uU {
      constructor(yb) {
        var bb;
        this.options = yb, this.renderFrame = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.entityInfo = void 0, this.entityInfoWatch = void 0, this.particles = void 0, this.clientApi = void 0, this.scriptedCamera = void 0, this.owners = [], this.tickers = [], this.renderers = [], this.receivers = [], this.failures = [], this.vetoSet = !1, this.hooksSet = !1, this.writtenPublicLobby = !1, this.promptWatch = "off", this.promptWatchSent = "off", this.customButtons = new vh, this.generation = 0, this.sessionLive = !1, this.boundId = 0, this.session = null, this.activeConn = 0, this.closedThrough = 0, this.openSocket = 0, this.socketLeftSinceAttach = !1, this.ticks = 0, this.zoomUnshown = !1, this.zoomHeld = !1, this.overflowGen = 0, this.resyncOwed = !1, this.zoom = 0, this.pendingZoom = null, this.cmd = null, this.freeCam = new JU, this.stopped = () => !1, this.onError = void 0, this.api = void 0, this.tables = void 0, this.itemSources = null, this.fault = void 0, this.KU = yb => {
          if ((0, qb.j)(yb)) throw yb;
          this.onError(yb)
        }, this.api = yb.api, this.tables = yb.tables, this.onError = null !== (bb = yb.onError) && void 0 !== bb ? bb : yb => {
          console.error("Error in client game callback", yb)
        }, this.renderFrame = new gh(this.api, yb.screenBandY), this.live = new EU(this.api), this.chunks = new ob(this.api.memory, (() => this.api.apiView)), this.items = new lW({
          api: this.api,
          tables: yb.tables,
          cmd: () => this.cmd,
          onError: this.onError,
          beforeOp: yb.beforeOp
        });
        const Wy = () => this.stopped() ? null : this.cmd,
          Uy = () => this.sessionLive;
        this.entityInfoWatch = new tU({
          cmd: Wy,
          onError: this.onError
        }), this.entityInfo = new wW({
          api: this.api,
          watch: this.entityInfoWatch,
          isSessionLive: Uy
        }), this.particles = new uW({
          cmd: Wy,
          isSessionLive: Uy,
          onError: this.onError
        }), this.clientApi = new PW({
          api: this.api,
          live: this.live,
          chunks: this.chunks,
          items: this.items,
          entityInfo: this.entityInfo,
          particles: this.particles,
          tables: yb.tables,
          cmd: Wy,
          sendCmd: () => this.sendCmd(),
          isSessionLive: Uy,
          beforeWrite: () => {
            var bb;
            if (this.stopped()) return !1;
            const Wy = this.generation;
            return !1 !== (null === (bb = yb.beforeWrite) || void 0 === bb ? void 0 : bb.call(yb)) && Wy === this.generation
          },
          playerDbId: () => {
            const yb = this.session;
            if (null === yb) throw new Error("No game session has started, so the local player has no DB id");
            return yb.playerDbId
          },
          playSound: yb.playSound,
          setLocalOptions: yb.setLocalOptions,
          hasPackModel: yb.hasPackModel
        }), this.scriptedCamera = new kb({
          api: this.api,
          cmd: () => this.stopped() ? null : this.cmd,
          screen: yb.cameraScreen,
          showFacing: yb.showCameraFacing
        })
      }
      get itemBridgeSources() {
        return this.itemSources ??= eU(this.items, this.tables, (() => this.localPlayerAlive()), this.KU), this.itemSources
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
      clickCodeBlock(yb) {
        const bb = this.sessionLive ? this.sendCmd() : null;
        return null !== bb && (Wy = bb, Uy = 0, hy = yb[0], fy = yb[1], Zy = yb[2], (0, tW.e)(), (0, sy.ue)(Wy, Uy, hy, fy, Zy));
        var Wy, Uy, hy, fy, Zy
      }
      cameraZoom() {
        return this.zoom
      }
      setCameraZoom(yb) {
        const bb = this.liveCmd();
        return null === bb ? (this.pendingZoom = yb, !1) : (this.pendingZoom = null, (0, sy.Wf)(bb, 0, yb, 1))
      }
      Jby(yb) {
        const bb = this.stopped() ? null : this.cmd;
        return null !== bb && (0, sy.Pf)(bb, 0, yb ? 1 : 0)
      }
      respawn() {
        const yb = this.sessionLive ? this.sendCmd() : null;
        return null !== yb && (bb = yb, Wy = 0, (0, tW.e)(), (0, sy.qf)(bb, Wy));
        var bb, Wy
      }
      bindCustomButtonKeys(yb) {
        this.customButtons.set(yb)
      }
      pressCustomButton(yb, bb) {
        const Wy = this.sessionLive ? this.sendCmd() : null;
        return null !== Wy && ih(Wy, yb, bb)
      }
      padMove(yb, bb, Wy, Uy, hy, fy) {
        const Zy = this.liveCmd();
        return null !== Zy && (0, sy.Se)(Zy, 0, yb, bb, Wy, Uy, hy, fy)
      }
      thirdPersonFor(yb) {
        const bb = this.liveCmd();
        return null !== bb && (0, sy.ag)(bb, 0, null !== yb && void 0 !== yb ? yb : 1 / 0)
      }
      send(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Uy = 0 !== this.openSocket || this.sessionLive ? this.sendCmd() : null;
        return null !== Uy && wb(Uy, Wy ? ey.Vc : 0, yb, (0, Hy.d)(bb))
      }
      socketAttached(yb) {
        this.openSocket = yb, this.socketLeftSinceAttach = !1
      }
      socketDetached(yb) {
        this.openSocket === yb && (this.openSocket = 0)
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
      attach(yb) {
        const bb = () => yb.isStopped;
        this.stopped = bb, this.cmd = yb.rings.cmd, this.promptWatchSent = "off", this.writePromptWatch(), this.customButtons.attached(), this.writeCustomButtons();
        const Wy = this.api.apiView;
        this.overflowGen = sy.s.eventOverflowGen(Wy, 0), this.resyncOwed = 0 !== sy.s.eventOverflowMask(Wy, 0), yb.setGameHost(this), yb.setEventWalker((yb => {
          this.api.walk(yb, this, bb)
        }))
      }
      watchPromptPick(yb) {
        this.promptWatch = yb, this.writePromptWatch()
      }
      get promptEntity() {
        return "off" === this.promptWatch || this.stopped() ? null : rh(sy.s.promptEntity(this.api.apiView, 0))
      }
      get interactLabel() {
        return "touch" !== this.promptWatch || this.stopped() ? sy.Dc.None : sy.s.interactLabel(this.api.apiView, 0)
      }
      get interactIcon() {
        return "touch" !== this.promptWatch || this.stopped() ? 0 : sy.s.interactIcon(this.api.apiView, 0)
      }
      closeGame() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        (0 === yb || yb >= this.openSocket) && (this.openSocket = 0), this.closedThrough = Math.max(this.closedThrough, yb, this.activeConn), this.activeConn = 0, this.endSession(), this.endGameGrants(), this.dropGameCamera()
      }
      gameCamera(yb) {
        0 !== this.activeConn && this.scriptedCamera.settingsChanged(yb)
      }
      netEvent(yb) {
        "connection" === yb.type ? yb.phase === ey.A.Activated && yb.conn !== this.activeConn && yb.conn > this.closedThrough ? (this.endSession(), this.activeConn = yb.conn, this.endGameGrants(), this.dropGameCamera()) : yb.phase !== ey.A.Left && yb.phase !== ey.A.Closed || yb.conn !== this.activeConn ? yb.phase === ey.A.Resumed && 0 !== this.activeConn && yb.conn > this.closedThrough && (this.activeConn = yb.conn) : this.closeGame() : yb.conn === this.activeConn && 0 !== yb.conn && (yb.vc === mh.u ? this.gunHit(yb.payload) : yb.vc === kU.Tb.EditItemCraftingRecipes || yb.vc === mh.T ? this.items.touch() : (this.serverOptions(yb), this.gameMessage(yb)));
        const bb = this.options.onNetEvent;
        bb && this.guard((() => {
          bb(yb)
        }))
      }
      serverOptions(yb) {
        const bb = this.options.serverOptions,
          Wy = bb ? this.decoded(NW, yb) : null;
        bb && Wy && this.guard((() => {
          bb.applyNewClientOptions(Wy)
        }))
      }
      gameMessage(yb) {
        let bb = null;
        try {
          bb = function(yb) {
            if ("message" !== yb.type || yb.vc !== kU.Tb.GameCodeMessage || yb.payloadKind !== ey.Ub.Msgpack) return null;
            const bb = (0, Hy.c)(yb.payload);
            if (null === bb || "object" !== typeof bb || "string" !== typeof bb.messageType) throw new Error("GameCodeMessage without a messageType");
            return bb
          }(yb)
        } catch (Wy) {
          this.sessionLive && this.onError(Wy)
        }
        if (bb) {
          const {
            messageType: yb,
            data: Wy
          } = bb;
          if ((0, ib.h)(yb)) return void this.guard((() => {
            (0, ib.e)(yb, Wy)
          }));
          "freeCamPerms" === yb && this.freeCam.setGame(Wy) && this.writeFreeCam(), this.sessionLive && this.round(this.receivers, (bb => {
            bb.onReceivedMessageFromServer(yb, Wy)
          }))
        }
      }
      decoded(yb, bb) {
        try {
          return yb(bb)
        } catch (Wy) {
          return this.onError(Wy), null
        }
      }
      setClientFreeCameraGrant(yb, bb) {
        this.freeCam.setClient(yb, bb), this.writeFreeCam()
      }
      localPlayerBound(yb) {
        var bb, Wy;
        if (0 === this.activeConn || this.sessionLive && yb === this.boundId) return;
        const Uy = this.sessionLive;
        let hy, fy, Zy, cb;
        this.endSession(), Uy && this.restartGameCamera();
        try {
          var Py;
          this.session = null;
          const yb = this.options.sessionInfo(this.activeConn);
          if (this.session = yb, !yb) return;
          hy = yb.gameNameWithVariation, fy = null !== (Py = (0, Ry.Mb)(hy)) && void 0 !== Py ? Py : void 0, Zy = (0, vb.s)(yb.lobbyName), cb = (0, vb.P)(yb.lobbyName)
        } catch (mb) {
          return void this.onError(mb)
        }
        const oy = {
          localPlayerId: String(yb)
        };
        let By = {},
          Ky = {};
        try {
          var ey, qb;
          By = null !== (ey = null === (qb = this.options.gameFactory((0, Ry.Rb)(hy))) || void 0 === qb ? void 0 : qb(cb, Zy, fy, oy)) && void 0 !== ey ? ey : {}
        } catch (mb) {
          this.KU(mb)
        }
        try {
          var sy, Sy;
          Ky = {
            ...null === (sy = (Sy = this.options).defaultPlugins) || void 0 === sy ? void 0 : sy.call(Sy, cb, Zy, fy, oy),
            ...By.plugins
          }
        } catch (mb) {
          this.KU(mb)
        }
        const Ey = [By, ...Object.values(Ky)];
        this.owners = Ey, this.tickers = Ey.filter((yb => void 0 !== yb.Zb)), this.renderers = Ey.filter((yb => void 0 !== yb.onAfterRender)), this.receivers = Ey.filter((yb => void 0 !== yb.onReceivedMessageFromServer)), this.writeAltVeto(Ey), this.writeHooks(Ey), this.writePublicLobby(cb), this.writeLocalDbId(null !== (bb = null === (Wy = this.session) || void 0 === Wy ? void 0 : Wy.playerDbId) && void 0 !== bb ? bb : null), this.boundId = yb, this.sessionLive = !0, this.generation++, null !== this.pendingZoom && this.setCameraZoom(this.pendingZoom), this.round(Ey, (yb => {
          var bb;
          null === (bb = yb.onCreate) || void 0 === bb || bb.call(yb, this.clientApi)
        }));
        const ly = this.generation;
        setTimeout((() => {
          ly === this.generation && !0 === this.tables.getClientOption("creative") && KU(this.tables)
        }), 0)
      }
      chunkSlot(yb, bb, Wy, Uy, hy, fy) {
        this.chunks.apply(yb, bb, Wy, Uy, hy, fy)
      }
      entityAdded(yb) {
        var bb;
        this.entityInfo.stale(yb), null === (bb = this.options.replayEntities) || void 0 === bb || bb.entityAdded(yb)
      }
      entityInfoChanged(yb) {
        var bb;
        this.entityInfo.stale(yb), null === (bb = this.options.replayEntities) || void 0 === bb || bb.entityInfoChanged(yb)
      }
      afterPrescan() {
        this.items.refresh(), this.entityInfo.refresh(), this.api.rereadDirectory(), this.chunks.refresh(), this.live.refresh()
      }
      tickEnd() {
        if (this.ticks++, this.tickers.length > 0) {
          const yb = performance.now();
          this.round(this.tickers, HU), (0, UU.d)(performance.now() - yb)
        }
      }
      afterWalk(yb) {
        this.ackEventOverflow(), this.clientApi.flushOwed();
        const bb = this.options.replayEntities;
        bb && this.guard((() => {
          this.entityInfoWatch.want(DW, bb.wantsWatch), bb.flush(this.entityInfoWatch.on)
        }));
        const Wy = (0, UU.m)(yb, sy.s.frameMs(this.api.apiView, 0));
        if (null !== Wy) {
          const yb = this.renderFrame;
          this.guard((() => {
            (0, IW.b)().turnDamageIndicators(yb.cameraHeading)
          })), this.guard((() => {
            this.clientApi.slideRoute(Wy)
          })), this.round(this.renderers, (bb => {
            bb.onAfterRender(Wy, yb)
          }))
        }
        this.writeFreeCam();
        try {
          this.scriptedCamera.afterFrame(null !== Wy)
        } catch (hy) {
          this.KU(hy)
        }
        this.showZoom(), this.items.flush(this.KU), this.writePromptWatch(), this.writeCustomButtons();
        const Uy = this.ticks;
        this.ticks = 0, (0, UU.j)(Uy, yb, Wy, this.KU)
      }
      entityRemoved(yb) {
        this.live.despawned(yb), this.entityInfo.removed(yb)
      }
      ackEventOverflow() {
        const yb = this.api.apiView,
          bb = sy.s.eventOverflowGen(yb, 0),
          Wy = bb - this.overflowGen >>> 0;
        if (0 === Wy && !this.resyncOwed) return;
        this.overflowGen = bb;
        const Uy = sy.s.eventOverflowMask(yb, 0),
          hy = this.cmd;
        0 === Uy || null === hy || this.stopped() ? this.resyncOwed = !1 : this.resyncOwed = !(0, sy.xe)(hy, 0, Uy);
        const fy = this.options.onEventOverflow;
        0 !== Wy && fy && this.guard((() => {
          fy(Uy, Wy)
        }))
      }
      gameCall(yb, bb, Wy, Uy, hy, fy, Zy, cb, Py) {
        if (yb === sy.nc.Director) try {
          return this.scriptedCamera.call(bb, Wy, Uy, hy, fy, Zy)
        } catch (oy) {
          return this.KU(oy), sy.mb.None
        }
        if (!this.sessionLive || void 0 !== this.fault) return yb === sy.nc.AltVeto ? sy.h.Allow : 0;
        try {
          return this.callGames(yb, bb, Wy, Uy, hy, fy, Zy, cb)
        } catch (oy) {
          throw (0, qb.j)(oy) && (this.fault = oy), oy
        }
      }
      takeFault() {
        const yb = this.fault;
        return this.fault = void 0, yb
      }
      callGames(yb, bb, Wy, Uy, hy, fy, Zy, cb) {
        this.api.rereadDirectory(), this.chunks.touch(), this.items.refresh(), this.live.refresh(), this.entityInfo.inCoreCall();
        const {
          tables: Py
        } = this.options, oy = String(this.boundId);
        switch (yb) {
          case sy.nc.AltVeto:
          case sy.nc.AltAction: {
            const cb = 0 !== Zy,
              [By, Ky, ey] = cb ? [bb, Wy, Uy] : [void 0, void 0, void 0],
              qb = cb ? Py.nameOfId(hy) : "Air",
              Sy = rh(fy);
            if (yb === sy.nc.AltAction) return this.first((yb => {
              var bb;
              return null === (bb = yb.onPlayerAltAction) || void 0 === bb ? void 0 : bb.call(yb, oy, By, Ky, ey, qb, Sy)
            })), 0;
            const Ey = this.first((yb => {
              var bb;
              return null === (bb = yb.onPlayerAttemptAltAction) || void 0 === bb ? void 0 : bb.call(yb, oy, By, Ky, ey, qb, Sy)
            }));
            return "preventAction" === Ey ? sy.h.Prevent : "preventPlacement" === Ey ? sy.h.PreventPlacement : sy.h.Allow
          }
          case sy.nc.Click: {
            const yb = cb,
              By = 0 !== (yb & sy.Q.Alt),
              Ky = 0 !== (yb & sy.Q.HasPos),
              ey = Ky ? Py.nameOfId(hy) : "Air",
              [qb, Sy, Ey] = Ky ? [bb, Wy, Uy] : [null, null, null],
              ly = rh(fy),
              mb = 0 !== (yb & sy.Q.Up),
              Cy = rh(Zy);
            if (0 === (yb & sy.Q.AttackOnly) && this.first((yb => {
                var bb, Wy;
                return mb ? null === (bb = yb.onPlayerClickUp) || void 0 === bb ? void 0 : bb.call(yb, oy, By, qb, Sy, Ey, ey, ly) : null === (Wy = yb.onPlayerClick) || void 0 === Wy ? void 0 : Wy.call(yb, oy, By, qb, Sy, Ey, ey, ly)
              })), !mb && !By && null !== Cy) {
              const yb = this.clientApi.getPositionView(Cy),
                bb = yb ? [yb[0], yb[1], yb[2]] : [0, 0, 0];
              this.first((yb => {
                var Wy;
                return null === (Wy = yb.onPlayerAttackEntity) || void 0 === Wy ? void 0 : Wy.call(yb, oy, Cy, bb)
              }))
            }
            return 0
          }
          case sy.nc.ChangeBlock: {
            const yb = Py.nameOfId(hy),
              Zy = Py.nameOfId(fy);
            return this.first((hy => {
              var fy;
              return null === (fy = hy.onPlayerChangeBlock) || void 0 === fy ? void 0 : fy.call(hy, oy, bb, Wy, Uy, yb, Zy)
            })), 0
          }
          case sy.nc.DropItem: {
            const yb = Py.nameOfId(bb);
            return this.first((bb => {
              var hy;
              return null === (hy = bb.onPlayerDropItem) || void 0 === hy ? void 0 : hy.call(bb, oy, yb, Wy, Uy)
            })), 0
          }
          default:
            return this.onError(new Error(`Unknown game call kind ${yb}`)), 0
        }
      }
      changeBlockFail(yb, bb, Wy, Uy, hy, fy, Zy) {
        const cb = hy === sy.dd ? null : MU.decode(this.api.eventBytes(fy, Math.min(hy, Zy)));
        this.failures.push({
          N9: [yb, bb, Wy],
          I9: Uy,
          Z4: cb
        })
      }
      changeBlockFailEnd() {
        const yb = this.failures;
        this.failures = [], this.sessionLive && this.round(this.owners, (bb => {
          var Wy;
          null === (Wy = bb.onChangeBlockFail) || void 0 === Wy || Wy.call(bb, yb)
        })), this.EZ("EditBoard", {
          pos: null
        }), this.EZ("EditCodeBlock", {
          pos: null,
          canChangePos: null
        })
      }
      inventoryEvent(yb, bb, Wy, Uy, hy, fy) {
        yb === sy.Ic.ChestOpened ? this.items.chestOpened(Wy, Uy, hy) : yb !== sy.Ic.Synced && yb !== sy.Ic.ChestClosed && yb !== sy.Ic.ChestRefreshed || this.items.touch(), this.guard((() => {
          ! function(yb, bb, Wy, Uy) {
            switch (yb) {
              case sy.Ic.Synced:
                Zy.g.EZ("syncedInvenFromServer");
                break;
              case sy.Ic.ChestOpened:
              case sy.Ic.ChestClosed:
                Zy.g.EZ("chestToggleFromServer", yb === sy.Ic.ChestOpened, !0);
                break;
              case sy.Ic.ChestRefreshed:
                Zy.g.EZ("chestRefreshedFromServer");
                break;
              case sy.Ic.EnchantingTable:
                Zy.g.EZ("enchantingTable", {
                  Df: Uy,
                  position: Wy
                });
                break;
              case sy.Ic.HotbarRequest:
                Zy.g.EZ("setSelectedInventorySlotI", bb, !0);
                break;
              case sy.Ic.Scrolled:
                Zy.g.EZ("ScrollInventorySlot", bb);
                break;
              case sy.Ic.NumberKey:
                Zy.g.EZ("numkeyPressed", bb + 1);
                break;
              case sy.Ic.DropRequested:
                Zy.g.EZ("DropInvenItem", 0 !== bb);
                break;
              default:
                throw new qb.b(`InventoryEvent of no kind: what ${yb}`)
            }
          }(yb, bb, [Wy, Uy, hy], fy)
        }))
      }
      heldItemChanged() {
        this.items.touch()
      }
      shotDamage(yb, bb, Wy, Uy) {
        this.EZ("shotPlayer", {
          playerId: String(yb),
          damage: bb,
          wasCrit: 0 !== Uy,
          distance: Wy
        })
      }
      localHurt(yb, bb) {
        this.EZ("closeShopOnDamaged", null), this.guard((() => {
          Zy.g.EZ("damagedByOtherPlayer", {
            xyy: null,
            direction: Number.isNaN(bb) ? null : bb,
            Bx: yb
          })
        }))
      }
      attackHit(yb, bb, Wy, Uy, hy) {
        this.guard((() => {
          Zy.g.EZ("yourAttackHit", {
            oN: Uy,
            screenPos: this.renderFrame.projectDirectionToScreenPos([yb, bb, Wy]),
            hitSelf: hy
          })
        }))
      }
      physicsType(yb) {
        this.EZ("PlayerPhysicsTypeUpdate", yb)
      }
      vehicleEffect(yb, bb, Wy, Uy, hy) {
        this.guard((() => {
          yb === ey.hd.UPDATE ? (0, Yy.f)(bb, {
            icon: Wy,
            level: Uy,
            displayName: null,
            durationMs: hy
          }) : My.e.remove(bb)
        }))
      }
      zoomChanged(yb) {
        this.zoom = yb, this.zoomUnshown = !0
      }
      zoomDisabled() {
        this.EZ("showBottomMessage", {
          message: "Zoom is disabled",
          timeoutLength: 2e3,
          type: "Error"
        })
      }
      showZoom() {
        const yb = this.scriptedCamera.holdsView();
        !this.zoomUnshown || yb && this.zoomHeld || (this.zoomUnshown = !1, this.EZ("cameraZoomSet", this.zoom)), this.zoomHeld = yb
      }
      gunHit(yb) {
        this.guard((() => {
          const {
            xyy: bb,
            A_: Wy
          } = (0, lU.c)(mh.u, yb);
          Zy.g.EZ("damagedByOtherPlayer", {
            xyy: bb,
            direction: Wy
          })
        }))
      }
      uiEvent(yb, bb, Wy, Uy, hy, fy, Zy, cb) {
        this.guard((() => {
          xU(yb, bb, [Wy, Uy, hy], fy, this.items, this.options.tables, (() => MU.decode(this.api.eventBytes(Zy, cb))))
        }))
      }
      writeAltVeto(yb) {
        const bb = this.cmd;
        if (!bb) return;
        let Wy;
        try {
          Wy = function(yb, bb) {
            const Wy = new Set;
            let Uy = !1;
            for (const hy of yb)
              if (hy.onPlayerAttemptAltAction) {
                if (Uy = !0, !hy.altVetoBlocks) return {
                  mode: sy.ke.All,
                  roots: []
                };
                for (const yb of hy.altVetoBlocks) Wy.add(bb.getMetaInfo(yb).rootId)
              } return Uy ? Wy.size > sy.Xc ? {
              mode: sy.ke.All,
              roots: []
            } : {
              mode: sy.ke.Filter,
              roots: [...Wy]
            } : {
              mode: sy.ke.Off,
              roots: []
            }
          }(yb, this.options.tables)
        } catch (hy) {
          this.onError(hy), Wy = {
            mode: sy.ke.All,
            roots: []
          }
        }
        if (Wy.mode === sy.ke.Off && !this.vetoSet) return;
        const Uy = new Uint8Array(new Uint32Array(Wy.roots).buffer);
        (0, sy.wf)(bb, 0, Wy.mode, Wy.roots.length, Uy) ? this.vetoSet = Wy.mode !== sy.ke.Off: this.onError(new Error("SetAltVeto didn't fit the command ring"))
      }
      endGameGrants() {
        this.freeCam.clearGame(), this.writeFreeCam()
      }
      writeFreeCam() {
        this.stopped() || this.freeCam.write(this.cmd)
      }
      writeHooks(yb) {
        const bb = this.cmd;
        if (!bb) return;
        const Wy = function(yb) {
          let bb = 0;
          for (const Wy of yb) Wy.onPlayerAltAction && (bb |= 1 << sy.nc.AltAction), (Wy.onPlayerClick || Wy.onPlayerClickUp || Wy.onPlayerAttackEntity) && (bb |= 1 << sy.nc.Click), Wy.onPlayerChangeBlock && (bb |= 1 << sy.nc.ChangeBlock), Wy.onPlayerDropItem && (bb |= 1 << sy.nc.DropItem);
          return bb
        }(yb);
        (0 !== Wy || this.hooksSet) && ((0, sy.Ef)(bb, 0, Wy) ? this.hooksSet = 0 !== Wy : this.onError(new Error("SetHooks didn't fit the command ring")))
      }
      writeCustomButtons() {
        const yb = this.cmd;
        yb && !this.stopped() && this.customButtons.write(yb)
      }
      writePromptWatch() {
        const yb = this.cmd,
          bb = this.promptWatch;
        bb !== this.promptWatchSent && yb && !this.stopped() && (0, sy.cg)(yb, 0, nU[bb]) && (this.promptWatchSent = bb)
      }
      writePublicLobby(yb) {
        const bb = this.cmd;
        bb && yb !== this.writtenPublicLobby && ((0, sy.Tf)(bb, 0, yb ? 1 : 0) ? this.writtenPublicLobby = yb : this.onError(new Error("SetPublicLobby didn't fit the command ring")))
      }
      writeLocalDbId(yb) {
        const bb = this.cmd;
        bb && ((0, sy.If)(bb, 0, null === yb ? 0 : 1, null === yb ? XU : YU.encode(yb)) || this.onError(new Error("SetLocalDbId didn't fit the command ring")))
      }
      first(yb) {
        const bb = this.generation;
        for (const Uy of this.owners) {
          if (bb !== this.generation) break;
          try {
            const bb = yb(Uy);
            if (void 0 !== bb) return bb
          } catch (Wy) {
            this.KU(Wy)
          }
        }
      }
      EZ(yb, bb) {
        this.guard((() => {
          Zy.g.EZ(yb, bb)
        }))
      }
      dropGameCamera() {
        try {
          this.scriptedCamera.reset()
        } catch (yb) {
          this.KU(yb)
        }
      }
      restartGameCamera() {
        try {
          this.scriptedCamera.restart()
        } catch (yb) {
          this.KU(yb)
        }
      }
      endSession() {
        if (!this.sessionLive) return;
        this.sessionLive = !1;
        const yb = this.owners;
        let bb;
        if (this.owners = this.tickers = this.renderers = this.receivers = [], this.generation++, !this.stopped()) try {
          this.writeAltVeto([]), this.writeHooks([]), this.writePublicLobby(!1), this.writeLocalDbId(null)
        } catch (Uy) {
          bb = Uy
        }
        try {
          this.entityInfo.sessionEnded()
        } catch (Uy) {
          bb ??= Uy
        }
        this.round(yb, ah, !0);
        try {
          this.particles.sessionEnded() || this.onError(new Error("ParticleStopAll didn't fit the command ring"))
        } catch (Uy) {
          bb ??= Uy
        }
        try {
          this.clientApi.disposeGameOutput()
        } catch (Uy) {
          bb ??= Uy
        }
        const Wy = this.options.onSessionEnd;
        if (Wy) try {
          Wy()
        } catch (Uy) {
          this.onError(Uy)
        }
        void 0 !== bb && this.KU(bb)
      }
      round(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Uy = this.generation;
        for (const fy of yb) {
          if (Uy !== this.generation) break;
          try {
            bb(fy)
          } catch (hy) {
            Wy ? this.onError(hy) : this.KU(hy)
          }
        }
      }
      guard(yb) {
        try {
          yb()
        } catch (bb) {
          this.KU(bb)
        }
      }
    }

    function rh(yb) {
      return yb === sy.ed ? null : String(yb)
    }

    function HU(yb) {
      yb.Zb(ey.bd)
    }

    function ah(yb) {
      var bb;
      null === (bb = yb.onClose) || void 0 === bb || bb.call(yb)
    }

    function FU(yb, bb) {
      yb.watch((() => {
        const Wy = function(yb) {
          let bb = 0;
          const Wy = Math.min(hU, yb.length);
          for (let hy = 0; hy < Wy; hy++) {
            var Uy;
            const Wy = null === (Uy = yb.slot(hy)) || void 0 === Uy ? void 0 : Uy.typeObj,
              fy = Wy ? (0, WU.gunTypeOf)(Wy.id) : void 0;
            void 0 !== fy && (bb |= 1 << Vb[fy])
          }
          return bb
        }(yb);
        0 !== Wy && (bb.preload(Wy), bb.preload(1 << Jb))
      }))
    }
    var pU = Wy(4068),
      LU = Wy(35521);

    function QU(yb) {
      const bb = new pU.Howl({
          ...(0, LU.g)(yb),
          pool: 15,
          preload: !1
        }),
        Wy = bb.load.bind(bb);
      return bb.load = () => (bb._preload = !0, Wy()), bb
    }

    function jh(yb, bb, Wy) {
      const Uy = yb.listener;
      if (Uy.positionX) DU(Uy.positionX, bb, Wy, 0), DU(Uy.positionY, bb, Wy, 1), DU(Uy.positionZ, bb, Wy, 2), DU(Uy.forwardX, bb, Wy, 3), DU(Uy.forwardY, bb, Wy, 4), DU(Uy.forwardZ, bb, Wy, 5), DU(Uy.upX, bb, Wy, 6), DU(Uy.upY, bb, Wy, 7), DU(Uy.upZ, bb, Wy, 8);
      else {
        let yb = !1;
        for (let Uy = 0; Uy < 9; Uy++) yb ||= bb[Uy] !== Wy[Uy];
        yb && (Uy.setPosition(bb[0], bb[1], bb[2]), Uy.setOrientation(bb[3], bb[4], bb[5], bb[6], bb[7], bb[8]), Wy.set(bb))
      }
    }

    function DU(yb, bb, Wy, Uy) {
      bb[Uy] !== Wy[Uy] && (yb.value = bb[Uy], Wy[Uy] = bb[Uy])
    }
    class th {
      constructor() {
        this.pose = new Float64Array(9), this.written = new Float64Array(9).fill(Number.NaN), this.watchedCtx = void 0
      }
      apply(yb) {
        this.pose.set(yb);
        const bb = pU.d.ctx;
        return !!bb && (bb !== this.watchedCtx && (this.watchedCtx = bb, this.written.fill(Number.NaN), bb.addEventListener("statechange", (() => {
          "running" === bb.state && jh(bb, this.pose, this.written)
        }))), "running" === bb.state && jh(bb, yb, this.written), !0)
      }
    }
    var wU = Wy(35341),
      kh = Wy(37859);
    let NU = null,
      zh = null;

    function IU() {
      return null === NU && (NU = document.createElement("div"), NU.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;pointer-events:none", document.body.append(NU)), NU
    }

    function xh() {
      return zh ??= new kh.d(new wU.e(IU)), zh
    }

    function AU() {
      var yb;
      null === (yb = zh) || void 0 === yb || yb.clear(), dU(null)
    }

    function dU(yb) {
      Uy.d.get("scriptedCameraFacing") !== yb && Uy.d.set({
        scriptedCameraFacing: yb
      })
    }
    var yf = Wy(8556),
      bf = Wy(8504),
      Wh = Wy(37870),
      Uh = Wy(39247),
      hh = Wy(2597);
    const fh = Object.entries(sy.kc).reduce(((yb, bb) => {
      let [Wy, Uy] = bb;
      return yb[Uy] = Wy, yb
    }), []);

    function Zh(yb, bb) {
      var Wy;
      return 0 !== ((null !== (Wy = yb.itemFlags[bb]) && void 0 !== Wy ? Wy : 0) & sy.Mc.Stackable)
    }
    const cf = /^(0|[1-9][0-9]*)$/,
      Ph = {
        displayName: (yb, bb) => (0, WU.displayNameOf)(bb),
        description: (yb, bb) => (0, WU.descriptionOf)(bb),
        type: (yb, bb) => (0, WU.itemTypeOf)(bb),
        clipSize: (yb, bb) => (0, WU.clipSizeOf)(bb),
        armourReduction: (yb, bb) => (0, WU.armourReductionOf)(bb),
        scopeType: (yb, bb) => (0, WU.scopeTypeOf)(bb),
        stackable: Zh,
        harvestType: (yb, bb) => fh[yb.blockHarvestTypes[bb]],
        harvestLevel: (yb, bb) => {
          const Wy = yb.blockHarvestLevels[bb];
          return Wy === sy.Uc ? void 0 : Wy
        },
        harvests: (yb, bb) => {
          var Wy;
          const Uy = null !== (Wy = yb.itemHarvests[bb]) && void 0 !== Wy ? Wy : 0;
          return 0 !== Uy ? fh[Uy] : void 0 === (0, WU.harvestsNullLevelOf)(bb) ? void 0 : null
        },
        level: (yb, bb) => {
          var Wy, Uy;
          const hy = null !== (Wy = yb.itemLevels[bb]) && void 0 !== Wy ? Wy : sy.Uc;
          return hy !== sy.Uc ? hy : null !== (Uy = (0, WU.harvestsNullLevelOf)(bb)) && void 0 !== Uy ? Uy : void 0
        }
      };

    function oh(yb, bb, Wy) {
      return Kh(new Uint8Array(Math.floor(yb.length / bb)), yb, bb, Wy)
    }

    function Bh(yb, bb, Wy) {
      return Kh(new Uint16Array(Math.floor(yb.length / bb)), yb, bb, Wy)
    }

    function Kh(yb, bb, Wy, Uy) {
      const hy = new DataView(bb.buffer, bb.byteOffset, bb.byteLength);
      for (let fy = 0; fy < yb.length; fy++) yb[fy] = Uy(hy, fy * Wy);
      return yb
    }
    class eh {
      constructor(yb, bb) {
        this.options = bb, this.metas = [], this.types = new Map, this.props = void 0, this.rootIdOf = yb => {
          const bb = this.idOf(yb);
          if (void 0 === bb) throw new Error(`No item is named ${yb}, an item's root`);
          return bb
        };
        const Wy = bb => {
            const Wy = bb();
            return new Uint8Array(yb.memory().buffer, yb.scratch(), Wy).slice()
          },
          Uy = (new TextDecoder).decode(Wy((() => yb.queries.itemNames()))).split("\n"),
          hy = Wy((() => yb.queries.blockProps())),
          fy = Wy((() => yb.queries.itemProps()));
        this.props = {
          blockFlags: oh(hy, sy.B.BYTES, sy.B.flags),
          blockHarvestTypes: oh(hy, sy.B.BYTES, sy.B.harvestType),
          blockHarvestLevels: oh(hy, sy.B.BYTES, sy.B.harvestLevel),
          blockAttachedTops: Bh(hy, sy.B.BYTES, sy.B.attachedTop),
          itemFlags: oh(fy, sy.Qc.BYTES, sy.Qc.flags),
          itemHarvests: oh(fy, sy.Qc.BYTES, sy.Qc.harvests),
          itemLevels: oh(fy, sy.Qc.BYTES, sy.Qc.level)
        }, (0, hh.h)(Object.freeze(Uy)), (0, Uh.h)()
      }
      idOf(yb) {
        if ("number" === typeof yb) return void 0 === (0, hh.c)(yb) ? void 0 : yb;
        const bb = (0, hh.b)(yb);
        return void 0 === bb && cf.test(yb) ? void 0 === (0, hh.c)(+yb) ? void 0 : +yb : bb
      }
      getMetaInfo(yb) {
        if (!yb || yb === yf.e) return yf.g;
        const bb = this.idOf(yb);
        if (void 0 === bb) throw new Error(`Item ${yb} not found in registry`);
        return this.metaOf(bb)
      }
      blockRootId(yb) {
        return 0 !== yb && void 0 !== (0, hh.c)(yb) ? this.metaOf(yb).rootId : yb
      }
      metaOf(yb) {
        return this.metas[yb] ??= (0, bf.m)((0, hh.c)(yb), yb, this.rootIdOf, (0, WU.rootMetaDescOf)(yb))
      }
      getItemId(yb) {
        if (!yb || yb === yf.e) return 0;
        const bb = this.idOf(yb);
        if (void 0 === bb) throw new Error(`Invalid block name. You sent ${yb}. The only valid item names are 'Air' and those contained within the blockMetadata/itemMetadata files`);
        return bb
      }
      getItemName(yb) {
        if (!yb || yb === yf.e) return yf.e;
        const bb = this.idOf(yb);
        if (void 0 === bb) throw new Error(`Item ${yb} not found in registry`);
        return (0, hh.c)(bb)
      }
      blockNameToBlockId(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (yb === yf.e) return 0;
        let Wy = this.idOf(yb);
        if (void 0 === Wy || !this.isBlockId(Wy)) {
          const bb = yb.indexOf("|"),
            Uy = bb > 0 ? (0, hh.b)(yb.slice(0, bb)) : void 0;
          Wy = void 0 !== Uy && this.isBlockId(Uy) && (0, WU.rootMetaDescOf)(Uy) === yb ? Uy : void 0
        }
        if (void 0 !== Wy) return Wy;
        if (!bb) throw new Error(`Invalid block name. You sent ${yb}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`);
        return null
      }
      isBlockId(yb) {
        return yb > 0 && yb < this.props.blockFlags.length
      }
      nameOfId(yb) {
        return 0 !== yb && (0, hh.c)(yb) || yf.e
      }
      itemType(yb) {
        const bb = yb ? this.idOf(yb) : void 0;
        if (!bb) return null;
        let Wy = this.types.get(bb);
        return void 0 === Wy && (Wy = Object.freeze({
          id: bb,
          name: (0, hh.c)(bb),
          meta: this.getMetaInfo(bb),
          stackable: Zh(this.props, bb),
          type: (0, WU.itemTypeNameOf)(bb),
          clipSize: (0, WU.clipSizeOf)(bb),
          scopeType: (0, WU.scopeTypeOf)(bb),
          showsAimingUi: (0, WU.showsAimingUi)(bb)
        }), this.types.set(bb, Wy)), Wy
      }
      getItemStat(yb, bb) {
        if (Wh.b.has(bb)) {
          const Wy = "minChargeStateToUse" === bb ? this.getMetaInfo(yb).rootName : this.getItemName(yb),
            Uy = this.options.get((0, Wh.d)(Wy, bb));
          if (null !== Uy && void 0 !== Uy) return Uy
        }
        return this.defaultStat(yb, bb, this.statOf(bb))
      }
      getDisplayName(yb) {
        return this.getItemStat(yb, "displayName")
      }
      getDefaultItemStat(yb, bb) {
        return this.defaultStat(yb, bb, this.statOf(bb))
      }
      statOf(yb) {
        const bb = Ph[yb];
        return void 0 === bb && function(yb, bb) {
          throw new Error(`ClientApi.${yb} is not available yet in the wasm client (${bb})`)
        }(`getItemStat("${yb}")`, `a table of the stat: the wasm client answers ${Object.keys(Ph).join(", ")}`), bb
      }
      defaultStat(yb, bb, Wy) {
        const Uy = this.idOf(yb),
          hy = void 0 === Uy ? void 0 : Wy(this.props, Uy);
        return null !== hy && void 0 !== hy || "displayName" !== bb ? hy : this.getItemName(yb)
      }
      getClientOption(yb) {
        return this.options.get(yb)
      }
      getGunStats(yb) {
        return this.getClientOption(`${yb}GunStats`)
      }
      watchClientOption(yb, bb) {
        return this.options.subscribe(yb, bb)
      }
      isSolidBlockId(yb) {
        var bb;
        return 0 !== ((null !== (bb = this.props.blockFlags[yb]) && void 0 !== bb ? bb : 0) & sy.z.Solid)
      }
      isStackableId(yb) {
        return Zh(this.props, yb)
      }
      isFluidBlockId(yb) {
        var bb;
        return 0 !== ((null !== (bb = this.props.blockFlags[yb]) && void 0 !== bb ? bb : 0) & sy.z.Fluid)
      }
      canPlaceOverBlockId(yb) {
        var bb;
        return 0 !== ((null !== (bb = this.props.blockFlags[yb]) && void 0 !== bb ? bb : 0) & sy.z.PlaceOver)
      }
      attachedTopOf(yb) {
        var bb;
        return null !== (bb = this.props.blockAttachedTops[yb]) && void 0 !== bb ? bb : 0
      }
      isDroplessBlockId(yb) {
        return (0, WU.dropsNothing)(yb)
      }
    }

    function qf(yb, bb) {
      const Wy = new Map;
      return (Uy, hy) => {
        const fy = bb.idOf(Uy),
          Zy = void 0 === fy ? null : (Uy => {
            let hy = Wy.get(Uy);
            if (void 0 === hy) {
              const fy = yb.queries.salvageRecipe(Uy),
                Zy = new DataView(yb.memory().buffer, yb.scratch(), fy),
                cb = [];
              for (let yb = 0; yb + sy.$d.BYTES <= fy; yb += sy.$d.BYTES) cb.push(Object.freeze({
                item: bb.nameOfId(sy.$d.item(Zy, yb)),
                amt: sy.$d.amount(Zy, yb)
              }));
              hy = 0 === cb.length ? null : Object.freeze(cb), Wy.set(Uy, hy)
            }
            return hy
          })(fy);
        if (null === Zy || void 0 === hy) return Zy;
        const cb = hy <= 0 ? 1 : hy;
        return Zy.map((yb => {
          let {
            item: bb,
            amt: Wy
          } = yb;
          return {
            item: bb,
            amt: Wy * cb
          }
        }))
      }
    }
    var sh = Wy(39408),
      Sh = Wy(35671),
      Eh = Wy(35667),
      lh = Wy(35712),
      mf = Wy(35279),
      Ch = Wy(39192),
      Th = Wy(41068);
    const Vh = -1,
      Jh = new Uint8Array(0),
      gf = new TextEncoder;

    function Gh(yb) {
      if (null === yb) return null;
      const bb = gf.encode(yb);
      return bb.byteLength < ey.pc ? bb : bb.subarray(0, ey.pc - 1)
    }
    class Oh {
      constructor(yb) {
        this.deps = yb, this.lastView = null, this.lastKeyframes = [], this.keyframesVersion = Vh, this.keyframesSettled = !1, this.reloadFrom = Vh
      }
      reloadKeyframes() {
        var yb, bb;
        this.keyframesVersion = Vh, this.reloadFrom = null !== (yb = null === (bb = this.view()) || void 0 === bb ? void 0 : bb.version) && void 0 !== yb ? yb : Vh
      }
      setPlayback(yb) {
        const bb = 1 === this.deps.core.JKy(yb);
        return bb && (this.lastView = null, this.lastKeyframes = [], this.keyframesVersion = Vh, this.reloadFrom = Vh), bb
      }
      async open(yb) {
        const bb = await this.deps.replay.open(yb);
        return "opening" === bb && (this.reloadKeyframes(), this.deps.recorder.prefetch()), bb
      }
      play() {
        this.deps.replay.play()
      }
      pause() {
        this.deps.replay.pause()
      }
      seek(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.deps.replay.seek(Math.max(0, Math.floor(yb)), bb)
      }
      setSpeed(yb) {
        this.deps.replay.setSpeed(yb)
      }
      setCameraMode(yb) {
        this.deps.replay.setCameraMode(Th.b.indexOf(yb))
      }
      view() {
        var yb;
        const bb = sy.s.replayViewPtr(this.deps.apiView(), 0);
        if (0 === bb) return this.lastView = null, null;
        const Wy = new DataView(this.deps.buffer(), bb, sy.Ud.BYTES),
          Uy = sy.Ud.version(Wy, 0),
          hy = this.lastView;
        if (null !== hy && hy.version === Uy) return hy;
        const fy = sy.Ud.markIn(Wy, 0),
          Zy = {
            version: Uy,
            state: sy.Ud.state(Wy, 0),
            cameraMode: null !== (yb = Th.b[sy.Ud.cameraMode(Wy, 0)]) && void 0 !== yb ? yb : "recording",
            Zb: sy.Ud.Zb(Wy, 0),
            totalTicks: sy.Ud.totalTicks(Wy, 0),
            speed: sy.Ud.speed(Wy, 0),
            mark: fy === sy.Rd ? null : {
              inTick: fy,
              outTick: sy.Ud.markOut(Wy, 0)
            },
            editVersion: sy.Ud.editVersion(Wy, 0)
          };
        return this.lastView = Zy, Zy
      }
      keyframes() {
        const yb = this.view();
        if (null === yb) return [];
        yb.version !== this.reloadFrom && (this.reloadFrom = Vh);
        const bb = this.reloadFrom === Vh && yb.state !== ey.Sc.Cropping && yb.state !== ey.Sc.None,
          Wy = bb ? yb.editVersion : yb.version;
        if (Wy === this.keyframesVersion && bb === this.keyframesSettled) return this.lastKeyframes;
        const {
          core: Uy
        } = this.deps, hy = Uy.gey(), fy = Uy.oc(), Zy = [];
        if (0 !== fy && hy > 0) {
          const yb = new DataView(this.deps.buffer(), fy, hy * ey.ac);
          for (let bb = 0; bb < hy; bb++) {
            const Wy = bb * ey.ac,
              Uy = bb => yb.getFloat64(Wy + bb, !0);
            Zy.push({
              Zb: yb.getUint32(Wy + ey.mc, !0),
              position: [Uy(ey.ic), Uy(ey.ic + 8), Uy(ey.ic + 16)],
              direction: [Uy(ey.dc), Uy(ey.dc + 8), Uy(ey.dc + 16)],
              easing: [Uy(ey.hc), Uy(ey.hc + 8), Uy(ey.hc + 16), Uy(ey.hc + 24)]
            })
          }
        }
        return this.keyframesVersion = Wy, this.keyframesSettled = bb, this.lastKeyframes = Zy, Zy
      }
      addKeyframe() {
        const yb = this.deps.apiView(),
          bb = [sy.s.eye(yb, 0, 0), sy.s.eye(yb, 0, 1), sy.s.eye(yb, 0, 2)];
        return this.deps.replay.addKeyframe(bb, function(yb, bb) {
          const Wy = Math.cos(bb);
          return [Wy * Math.sin(yb), -Math.sin(bb), Wy * Math.cos(yb)]
        }(sy.s.heading(yb, 0), sy.s.pitch(yb, 0)))
      }
      setKeyframe(yb) {
        return this.deps.replay.setKeyframe(yb.Zb, Float64Array.from([...yb.position, ...yb.direction, ...yb.easing]))
      }
      moveKeyframe(yb, bb) {
        return this.deps.replay.moveKeyframe(yb, bb)
      }
      deleteKeyframes(yb, bb) {
        return this.deps.replay.deleteKeyframes(yb, bb)
      }
      setMark(yb) {
        var bb, Wy;
        return this.deps.replay.setMark(null !== (bb = null === yb || void 0 === yb ? void 0 : yb.inTick) && void 0 !== bb ? bb : -1, null !== (Wy = null === yb || void 0 === yb ? void 0 : yb.outTick) && void 0 !== Wy ? Wy : -1)
      }
      crop(yb, bb) {
        const Wy = this.deps.replay.crop(yb, bb);
        return Wy && this.reloadKeyframes(), Wy
      }
      save(yb) {
        return this.deps.replay.askSave(), this.deps.recorder.saveEdited(yb)
      }
      recorderControl(yb) {
        this.deps.recorder.control(yb)
      }
      recorderPrefs(yb, bb) {
        this.deps.recorder.prefs(yb, bb)
      }
      recorderOption(yb, bb) {
        const Wy = this.deps.cmd();
        return null !== Wy && (0, sy.lf)(Wy, 0, yb, null === bb ? Jh : gf.encode(bb))
      }
      recordFlyingText(yb, bb, Wy, Uy) {
        const hy = this.deps.cmd(),
          fy = Math.max(0, Math.min(4294967295, Math.round(Uy)));
        return null !== hy && (0, sy.gf)(hy, 0, bb, Wy, fy, gf.encode(yb))
      }
      recordPlayerKilled(yb, bb, Wy, Uy) {
        const hy = this.deps.cmd();
        return null !== hy && (0, sy.mf)(hy, 0, yb, bb, Math.max(0, Wy), gf.encode(Uy))
      }
      recordKillfeed(yb, bb, Wy) {
        var Uy, hy;
        const fy = this.deps.cmd(),
          Zy = function(yb) {
            const bb = yb.reduce(((yb, bb) => {
                var Wy;
                return yb + kU.Y + (null !== (Wy = null === bb || void 0 === bb ? void 0 : bb.byteLength) && void 0 !== Wy ? Wy : 0)
              }), 0),
              Wy = new Uint8Array(bb),
              Uy = new DataView(Wy.buffer);
            let hy = 0;
            for (const Zy of yb) {
              var fy;
              Uy.setUint16(hy, null !== (fy = null === Zy || void 0 === Zy ? void 0 : Zy.byteLength) && void 0 !== fy ? fy : ey.pc, !0), hy += kU.Y, null !== Zy && (Wy.set(Zy, hy), hy += Zy.byteLength)
            }
            return Wy
          }([Gh(yb.name), Gh(yb.colour), Gh(bb.name), Gh(bb.colour), Gh(Wy)]);
        return null !== fy && (0, sy.jf)(fy, 0, null !== (Uy = yb.id) && void 0 !== Uy ? Uy : sy.id, null !== (hy = bb.id) && void 0 !== hy ? hy : sy.id, Zy)
      }
      recorderSession(yb, bb) {
        this.deps.recorder.session({
          session: bb,
          lobbyType: yb.lobbyType,
          game: yb.gameNameWithVariation,
          lobby: yb.lobbyName
        })
      }
      recorderClose() {
        this.deps.core.GKy()
      }
      filePartDone(yb, bb) {
        this.deps.recorder.filePartDone(yb, bb)
      }
      fileDone(yb) {
        this.deps.recorder.fileDone(yb)
      }
    }
    const Rh = -2147483648;
    class vf {
      constructor(yb) {
        var bb;
        this.deps = yb, this.state = {
          recording: !1,
          clipping: !1,
          hasClipBuffer: !1,
          seconds: 0
        }, this.recordingSince = null, this.clipTickPending = !1, this.now = void 0, this.now = null !== (bb = yb.now) && void 0 !== bb ? bb : () => performance.now()
      }
      get current() {
        return this.state
      }
      get live() {
        var yb, bb, Wy;
        return null === (yb = null === (bb = (Wy = this.deps).live) || void 0 === bb ? void 0 : bb.call(Wy)) || void 0 === yb || yb
      }
      activated(yb) {
        var bb, Wy;
        this.live && (this.viewerShown(!0 === (null === (bb = (Wy = this.deps).viewerOpen) || void 0 === bb ? void 0 : bb.call(Wy))), this.deps.client.recorderSession(yb, (0, Th.c)()))
      }
      closed() {
        this.deps.client.recorderClose()
      }
      toggleRecording() {
        var yb, bb;
        this.live && (this.state.recording || !0 !== (null === (yb = (bb = this.deps).viewerOpen) || void 0 === yb ? void 0 : yb.call(bb))) ? this.deps.client.recorderControl(ey.Fc.ToggleRecording) : this.deps.notify(lh.d.closeViewerFirst)
      }
      saveClip() {
        this.live ? this.deps.client.recorderControl(ey.Fc.SaveClip) : this.deps.notify(lh.d.clippingNotOn)
      }
      viewerShown(yb) {
        this.live && this.deps.client.recorderControl(yb ? ey.Fc.ViewerOpened : ey.Fc.ViewerClosed)
      }
      setPrefs(yb, bb) {
        this.live && this.deps.client.recorderPrefs(yb, bb)
      }
      setOption(yb, bb) {
        this.live && this.deps.client.recorderOption(yb, bb)
      }
      recordFlyingText(yb, bb, Wy, Uy) {
        this.live && this.deps.client.recordFlyingText(yb, bb, Wy, Uy)
      }
      recordPlayerKilled(yb, bb, Wy, Uy) {
        this.live && this.deps.client.recordPlayerKilled(yb, bb, Wy, Uy)
      }
      recordKillfeed(yb, bb, Wy) {
        this.live && this.deps.client.recordKillfeed(yb, bb, Wy)
      }
      Zb() {
        let yb = this.state;
        if (this.clipTickPending && (this.clipTickPending = !1, yb = {
            ...yb,
            hasClipBuffer: !0
          }), null !== this.recordingSince) {
          const bb = Math.floor((this.now() - this.recordingSince) / 1e3);
          bb !== yb.seconds && (yb = {
            ...yb,
            seconds: bb
          })
        }
        this.set(yb)
      }
      onEvent(yb) {
        var bb, Wy;
        const {
          notify: Uy
        } = this.deps, hy = lh.d;
        switch (yb.what) {
          case ey.Dc.RecordingStarted:
            this.recordingSince = this.now(), this.set({
              ...this.state,
              recording: !0,
              seconds: 0
            }), Uy(hy.recordingStarted);
            break;
          case ey.Dc.RecordingStopped:
            this.stopRecording(), Uy(hy.recordingStopped), this.saveState(ey.Mc.Recording, "saving");
            break;
          case ey.Dc.RecordingDiscarded:
            this.stopRecording(), Uy(hy.recordingDiscarded);
            break;
          case ey.Dc.RecordingTurnedOff:
            this.stopRecording(), Uy(hy.recordingTurnedOff);
            break;
          case ey.Dc.LimitReached:
            Uy(hy.limitReached);
            break;
          case ey.Dc.ClipSaved:
            this.saveState(ey.Mc.Clip, "saving");
            break;
          case ey.Dc.ClipEmpty:
            Uy(hy.clipEmpty);
            break;
          case ey.Dc.ClippingNotOn:
            Uy(hy.clippingNotOn);
            break;
          case ey.Dc.Disallowed:
            Uy(hy.disallowed);
            break;
          case ey.Dc.ClippingOn:
            this.clipTickPending = !0, this.set({
              ...this.state,
              clipping: !0,
              hasClipBuffer: !1
            });
            break;
          case ey.Dc.ClippingOff:
            this.clipTickPending = !1, this.set({
              ...this.state,
              clipping: !1,
              hasClipBuffer: !1
            });
            break;
          case ey.Dc.ClipSettingsChanged:
            this.clipTickPending = this.state.clipping, this.set({
              ...this.state,
              hasClipBuffer: !1
            });
            break;
          case ey.Dc.SaveBusy:
            null === (bb = (Wy = this.deps).onSaveState) || void 0 === bb || bb.call(Wy, yb.kind, "busy"), Uy(hy.saveBusy);
            break;
          case ey.Dc.CloseViewerFirst:
            Uy(hy.closeViewerFirst)
        }
      }
      fileReady(yb, bb) {
        this.deps.download(bb), this.saveState(yb, "done"), this.deps.notify(yb === ey.Mc.Clip ? lh.d.clipSaved : lh.d.recordingSaved)
      }
      failed(yb) {
        this.saveState(yb, "failed"), this.deps.notify(yb === ey.Mc.Clip ? lh.d.clipFailed : lh.d.recordingFailed)
      }
      stopRecording() {
        this.recordingSince = null, this.set({
          ...this.state,
          recording: !1,
          seconds: 0
        })
      }
      saveState(yb, bb) {
        var Wy, Uy;
        null === (Wy = (Uy = this.deps).onSaveState) || void 0 === Wy || Wy.call(Uy, yb, bb)
      }
      set(yb) {
        yb !== this.state && (this.state = yb, this.deps.onState(yb))
      }
    }
    const Mh = new TextDecoder;

    function Yh(yb, bb, Wy, Uy) {
      const hy = [];
      for (let fy = 0; fy < Uy; fy++) {
        if (bb + kU.Y > Wy) return null;
        const Uy = yb.getUint16(bb, !0);
        if (bb += kU.Y, Uy !== ey.pc) {
          if (bb + Uy > Wy) return null;
          hy.push(Mh.decode(new Uint8Array(yb.buffer, yb.byteOffset + bb, Uy))), bb += Uy
        } else hy.push(null)
      }
      return bb === Wy ? hy : null
    }

    function Xh(yb, bb) {
      let Wy = new DataView(new ArrayBuffer(0)),
        Uy = !0;
      const hy = {
        replayFailed: (bb, Wy) => {
          yb.replayFailed({
            reason: bb,
            code: Wy
          })
        },
        replayOption: (bb, hy, fy, Zy) => {
          const cb = function(yb, bb, Wy, Uy) {
            switch (bb) {
              case ey.Nc.Cleared:
                return 0 === Uy ? null : void 0;
              case ey.Nc.Text:
                return Mh.decode(new Uint8Array(yb.buffer, yb.byteOffset + Wy, Uy));
              case ey.Nc.Int:
                return Uy === Int32Array.BYTES_PER_ELEMENT ? yb.getInt32(Wy, !0) : void 0;
              case ey.Nc.Double:
                return Uy === Float64Array.BYTES_PER_ELEMENT ? yb.getFloat64(Wy, !0) : void 0;
              default:
                return
            }
          }(Wy, hy, fy, Zy);
          void 0 !== cb ? yb.replayOption({
            key: bb,
            value: cb
          }) : Uy = !1
        },
        replayUiEvent: (bb, hy, fy, Zy, cb, Py) => {
          const oy = function(yb, bb, Wy, Uy, hy, fy, Zy) {
            const cb = fy + Zy;
            switch (bb) {
              case ey.Pc.FlyingText: {
                const Zy = Yh(yb, fy, cb, 1);
                return null !== Zy && null !== Zy[0] ? {
                  what: bb,
                  i_: Wy,
                  v_: Uy,
                  angle: hy,
                  contentJson: Zy[0]
                } : null
              }
              case ey.Pc.PlayerKilled: {
                const Uy = Yh(yb, fy, cb, 3);
                return Uy ? {
                  what: bb,
                  killstreak: Wy,
                  dead: Uy[0],
                  killer: Uy[1],
                  withItem: Uy[2]
                } : null
              }
              case ey.Pc.Killfeed: {
                const Wy = Yh(yb, fy, cb, 7);
                return Wy ? {
                  what: bb,
                  killerId: Wy[0],
                  killerName: Wy[1],
                  killerColour: Wy[2],
                  victimId: Wy[3],
                  victimName: Wy[4],
                  victimColour: Wy[5],
                  withItem: Wy[6]
                } : null
              }
              default:
                return null
            }
          }(Wy, bb, hy, fy, Zy, cb, Py);
          null !== oy ? yb.replayUiEvent(oy) : Uy = !1
        },
        replayFilePart: (Wy, hy, fy, Zy) => {
          const cb = bb();
          fy + Zy > cb.byteLength ? Uy = !1 : yb.filePart(Wy, hy, new Uint8Array(cb, fy, Zy).slice())
        },
        replayFileReady: (bb, Wy, Uy, hy) => {
          yb.fileReady({
            save: bb,
            kind: Wy,
            parts: Uy,
            bytes: hy
          })
        },
        recorderEvent: (bb, Wy, Uy) => {
          yb.recorderEvent({
            what: bb,
            kind: Wy,
            save: Uy
          })
        },
        replayOpened: (bb, Uy, hy) => {
          yb.replayOpened(Mh.decode(new Uint8Array(Wy.buffer, Wy.byteOffset + Uy, hy)))
        }
      };
      return (yb, bb, fy, Zy) => !(yb < ey.O.ReplayFailed || yb > ey.O.RecorderEvent) && (Wy = bb, Uy = !0, (0, sy.oe)(yb, bb, fy, Zy, hy) && Uy)
    }

    function nh(yb) {
      let bb = null;
      const Wy = Xh(yb, (() => {
        if (null === bb) throw new Error("a recorder event read outside recorderEventReader's call");
        return bb.buffer
      }));
      return (yb, Uy) => {
        bb = Uy;
        try {
          ! function(yb, bb) {
            const Wy = yb.slice(),
              Uy = new DataView(Wy.buffer);
            for (let hy = 0; hy < Wy.byteLength;) {
              if (hy + ey.N > Wy.byteLength) throw new Error(`the recorder module's events end mid-head at ${hy}`);
              const yb = Uy.getUint32(hy, !0),
                fy = 65535 & yb,
                Zy = yb >>> 16,
                cb = hy + ey.N;
              if (cb + Zy > Wy.byteLength || !bb(fy, Uy, cb, Zy)) throw new Error(`the recorder module wrote a malformed event ${fy} (${Zy} bytes) at ${hy}`);
              hy = cb + (0, ey.Wd)(Zy)
            }
          }(yb, Wy)
        } finally {
          bb = null
        }
      }
    }
    class uh {
      constructor(yb, bb) {
        this.acks = yb, this.handlers = bb, this.parts = new Map
      }
      onPart(yb, bb, Wy) {
        let Uy = this.parts.get(yb);
        Uy || (Uy = [], this.parts.set(yb, Uy)), Uy[bb] = Wy, this.acks.filePartDone(yb, bb)
      }
      onReady(yb) {
        var bb;
        const Wy = null !== (bb = this.parts.get(yb.save)) && void 0 !== bb ? bb : [];
        this.parts.delete(yb.save);
        const Uy = function(yb, bb, Wy) {
          if (yb.length !== bb) return null;
          let Uy = 0;
          for (let Zy = 0; Zy < bb; Zy++) {
            if (void 0 === yb[Zy]) return null;
            Uy += yb[Zy].byteLength
          }
          if (Uy !== Wy) return null;
          if (1 === bb) return yb[0];
          const hy = new Uint8Array(Wy);
          let fy = 0;
          for (const Zy of yb) hy.set(Zy, fy), fy += Zy.byteLength;
          return hy
        }(Wy, yb.parts, yb.bytes);
        this.acks.fileDone(yb.save), null === Uy ? this.handlers.fileIncomplete(yb.save, yb.kind) : this.handlers.fileReady(yb.save, yb.kind, Uy)
      }
      onDiscarded(yb) {
        this.parts.delete(yb)
      }
    }

    function rf() {
      return Wy.e(53).then((() => Wy(41105)))
    }
    class Hh {
      constructor(yb) {
        this.deps = yb, this.sink = void 0, this.recorder = void 0, this.recorderEvents = void 0, this.parts = void 0, this.viewerChunk = null, this.viewer = null;
        const {
          client: bb
        } = yb;
        this.recorder = new vf({
          client: bb,
          live: () => {
            var yb;
            return !0 !== (null === (yb = this.viewer) || void 0 === yb ? void 0 : yb.inPlayback)
          },
          viewerOpen: yb.viewerOpen,
          notify: yb.notify,
          download: bb => {
            var Wy;
            null === (Wy = yb.download) || void 0 === Wy || Wy.call(yb, bb)
          },
          onState: yb.onRecorderState,
          onSaveState: yb.onSaveState
        }), this.parts = new uh(bb, {
          fileReady: (yb, bb, Wy) => {
            var Uy;
            bb === ey.Mc.Edited ? null === (Uy = this.viewer) || void 0 === Uy || Uy.saveDone(Wy) : this.recorder.fileReady(bb, Wy)
          },
          fileIncomplete: (yb, bb) => {
            this.saveFailed(bb)
          }
        });
        const Wy = {
          replayFailed: yb => {
            var bb;
            null === (bb = this.viewer) || void 0 === bb || bb.onFailed(yb)
          },
          replayOption: bb => {
            var Wy;
            null === (Wy = yb.onReplayOption) || void 0 === Wy || Wy.call(yb, bb)
          },
          replayUiEvent: bb => {
            var Wy;
            null === (Wy = yb.onReplayUiEvent) || void 0 === Wy || Wy.call(yb, bb)
          },
          filePart: (yb, bb, Wy) => {
            this.parts.onPart(yb, bb, Wy)
          },
          fileReady: yb => {
            this.parts.onReady(yb)
          },
          replayOpened: bb => {
            var Wy;
            null === (Wy = yb.onReplayOpened) || void 0 === Wy || Wy.call(yb, bb)
          },
          recorderEvent: yb => {
            var bb;
            switch (yb.what) {
              case ey.Dc.FileDiscarded:
                this.parts.onDiscarded(yb.save);
                break;
              case ey.Dc.SaveFailed:
                this.saveFailed(yb.kind);
                break;
              case ey.Dc.SaveBusy:
                if (null !== (bb = this.viewer) && void 0 !== bb && bb.savePending) {
                  this.viewer.saveFailed(!0);
                  break
                }
                this.recorder.onEvent(yb);
                break;
              default:
                this.recorder.onEvent(yb)
            }
          }
        };
        this.sink = function(yb, bb) {
          return {
            onReplayEvent: Xh(yb, bb)
          }
        }(Wy, yb.buffer), this.recorderEvents = nh(Wy)
      }
      get currentViewer() {
        return this.viewer
      }
      loadViewer() {
        var yb;
        return this.viewer ? Promise.resolve(this.viewer) : (this.viewerChunk ??= (null !== (yb = this.deps.loadViewer) && void 0 !== yb ? yb : rf)().catch((yb => {
          throw this.viewerChunk = null, yb
        })), this.viewerChunk.then((yb => (this.viewer ??= new yb.ReplayViewer({
          client: this.deps.client,
          setHoldDraws: this.deps.setHoldDraws,
          meshPending: this.deps.meshPending,
          notify: this.deps.notify,
          onChange: () => {
            var yb, bb;
            null === (yb = (bb = this.deps).onViewerChange) || void 0 === yb || yb.call(bb)
          }
        }), this.viewer))))
      }
      activated(yb) {
        this.recorder.activated(yb)
      }
      afterFrame(yb) {
        try {
          yb > 0 && this.recorder.Zb()
        } finally {
          var bb;
          null === (bb = this.viewer) || void 0 === bb || bb.afterFrame()
        }
      }
      end() {
        var yb;
        null === (yb = this.viewer) || void 0 === yb || yb.end()
      }
      saveFailed(yb) {
        var bb;
        yb === ey.Mc.Edited ? null === (bb = this.viewer) || void 0 === bb || bb.saveFailed(!1) : this.recorder.failed(yb)
      }
    }
    var af = Wy(39136),
      Fh = Wy(39152),
      ph = Wy(4006),
      Lh = Wy(39510);
    class Qh {
      constructor(yb) {
        this.deps = yb, this.analogue = [0, 0], this.keys = 0, this.unsent = !1
      }
      drag(yb, bb) {
        if (!this.deps.live() || 0 === yb && 0 === bb) return;
        const Wy = (0, ab.s)(0, performance.now()),
          Uy = this.deps.dragScale();
        (0, Lh.e)((() => {
          (0, ab.w)(ey.hb.MouseDown, 0, 0, 0, Wy), (0, ab.w)(ey.hb.MouseMove, 0, yb * Uy, bb * Uy, 0), (0, ab.w)(ey.hb.MouseUp, 0, 0, 0, Wy)
        }))
      }
      move(yb) {
        var bb, Wy;
        this.analogue[0] = null !== (bb = null === yb || void 0 === yb ? void 0 : yb.x) && void 0 !== bb ? bb : 0, this.analogue[1] = null !== (Wy = null === yb || void 0 === yb ? void 0 : yb.y) && void 0 !== Wy ? Wy : 0, this.send()
      }
      holdVertical(yb, bb) {
        const Wy = "freeCamUp" === yb ? sy._b.Up : sy._b.Down;
        this.keys = bb ? this.keys | Wy : this.keys & ~Wy, this.send()
      }
      flush() {
        this.unsent && this.send()
      }
      send() {
        const yb = this.deps.live() ? this.deps.cmd() : null;
        this.unsent = null !== yb && !(0, sy.De)(yb, 0, this.analogue, this.keys)
      }
    }
    var jf = Wy(35362),
      Dh = Wy(582),
      tf = Wy(127),
      wh = Wy(94),
      kf = Wy(8376);

    function Nh() {
      const yb = Uy.d.get("clientEscMenuOptions"),
        bb = (0, Dh.l)(yb);
      return {
        mouse: (0, wh.isMobile)() ? bb : yb.mouseSensitivity,
        touch: bb,
        fovPercent: yb.cameraFOV
      }
    }

    function zf() {
      const yb = Uy.d.get("clientEscMenuOptions"),
        bb = Uy.d.get("isTouchScreen") ? (0, Dh.l)(yb) : yb.mouseSensitivity,
        Wy = Nh().mouse;
      return Wy > 0 ? bb / Wy : 1
    }

    function Ih(yb) {
      const bb = () => {
        yb.setSoundPrefs(Uy.d.get("soundVolume"), Uy.d.get("soundOnFromAd"))
      };
      let Wy = null;
      const hy = () => {
        const {
          showFog: bb,
          enableLighting: hy,
          fogChunkDistance: fy,
          chunkFadeIn: Zy
        } = Uy.d.get("clientEscMenuOptions"), cb = {
          showFog: bb,
          lighting: hy,
          fogChunks: fy,
          chunkFade: Zy
        };
        Wy && (0, ey.Ld)(Wy) === (0, ey.Ld)(cb) && Wy.fogChunks === fy || (Wy = cb, yb.setEnvPrefs(Wy))
      };
      let fy = null;
      const cb = () => {
        const bb = function() {
          const yb = Uy.d.get("clientEscMenuOptions");
          return {
            nametagsHidden: Uy.d.get("areNametagsHidden"),
            crouchToggle: yb.crouchIsToggle,
            bhopDisabled: yb.disableBunnyHopping,
            disableBobbing: yb.disableBobbing,
            ezTowering: yb.ezTowering && (0, tf.h)(),
            ezBridging: yb.ezBridging,
            showChunkBorders: yb.showChunkBorders,
            edgeGuard: (0, jf.d)(yb),
            nametagCutDistance: (0, kf.e)()
          }
        }();
        (0, Ry.Qd)(fy, bb) || (fy = bb, yb.setUiPrefs(bb))
      };
      let Py = null;
      const oy = () => {
        const bb = Nh();
        (0, Ry.Qd)(Py, bb) || (Py = bb, yb.setLookPrefs(bb))
      };
      bb(), hy(), cb(), oy();
      const By = [(0, Zy.h)("appManagerUpdated|soundVolume", bb), (0, Zy.h)("appManagerUpdated|soundOnFromAd", bb), (0, Zy.h)("appManagerUpdated|clientEscMenuOptions", (() => {
        hy(), cb(), oy()
      })), (0, Zy.h)("appManagerUpdated|areNametagsHidden", cb), (0, Zy.h)("appManagerUpdated|showDistantNametags", cb)];
      return () => {
        for (const yb of By) yb()
      }
    }
    var xf = Wy(39418),
      Ah = Wy(39426);
    var dh = (0, Ah.d)("lend"),
      yZ = (0, Ah.d)("starting"),
      bZ = (0, Ah.d)("generation"),
      Wf = (0, Ah.d)("end");
    class Uf {
      constructor(yb) {
        this.deps = yb, Object.defineProperty(this, Wf, {
          value: hf
        }), Object.defineProperty(this, dh, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, yZ, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, bZ, {
          writable: !0,
          value: 0
        })
      }
      get active() {
        return null !== (0, xf.c)(this, dh)[dh] || (0, xf.c)(this, yZ)[yZ]
      }
      async start(yb) {
        if (this.active) return "busy";
        const bb = (0, xf.c)(this, bZ)[bZ];
        (0, xf.c)(this, yZ)[yZ] = !0;
        try {
          if (!await this.deps.ensureLoaded()) return "refused"
        } finally {
          (0, xf.c)(this, yZ)[yZ] = !1
        }
        if (bb !== (0, xf.c)(this, bZ)[bZ]) return "refused";
        const Wy = this.deps.beginSave();
        if (!Wy) return "refused";
        const Uy = Number(BigInt.asUintN(32, yb)),
          hy = Number(BigInt.asUintN(32, yb >> 32n));
        let fy = "refused";
        return this.deps.recorderCall(((yb, bb) => {
          const Zy = Wy.editState,
            cb = yb.stage(Zy.length);
          0 !== cb ? (new Uint8Array(bb.buffer, cb, Zy.length).set(Zy), yb.OKy(Wy.headLen, Uy, hy) && (fy = "sealing")) : fy = "tooLarge"
        }), !0), "sealing" !== fy ? (Wy.end(), fy) : ((0, xf.c)(this, dh)[dh] = Wy, "sealing")
      }
      beforeRecorderStep() {
        const yb = (0, xf.c)(this, dh)[dh];
        if (!yb) return null;
        let bb = -1,
          Wy = 0;
        if (!this.deps.recorderCall((yb => {
            bb = yb.RKy(), bb > 0 && (Wy = yb.vey())
          }))) return (0, xf.c)(this, Wf)[Wf](yb, "stopped");
        if (bb < 0) return (0, xf.c)(this, Wf)[Wf](yb, "read");
        if (0 === bb) return null;
        const Uy = yb.head(Wy, bb);
        let hy = !1;
        if (Uy && this.deps.recorderCall(((yb, Wy) => {
            const fy = yb.stage(bb);
            0 !== fy && (new Uint8Array(Wy.buffer, fy, bb).set(Uy), hy = !0)
          }), !0), hy) return null;
        const fy = yb.givenUp();
        this.deps.recorderCall((yb => {
          yb.iey()
        }));
        const Zy = (0, xf.c)(this, Wf)[Wf](yb, fy ? "givenUp" : "stopped");
        return fy && this.deps.givenUp("Reopen the replay you were editing to make your edits again, as they weren't saved when another replay opened."), Zy
      }
      stop() {
        (0, xf.c)(this, bZ)[bZ]++;
        const yb = (0, xf.c)(this, dh)[dh];
        yb && (this.deps.recorderCall((yb => {
          yb.iey()
        })), (0, xf.c)(this, Wf)[Wf](yb, "stopped"))
      }
    }

    function hf(yb, bb) {
      return (0, xf.c)(this, dh)[dh] = null, yb.end(), bb
    }

    function ff(yb, bb) {
      const Wy = new Uint8Array(4),
        Uy = new DataView(Wy.buffer);
      return Uy.setUint8(0, yb ? 1 : 0), Uy.setUint16(2, Math.max(0, Math.min(65535, Math.round(bb))), !0), Wy
    }

    function Zf(yb, bb) {
      return yb > function(yb) {
        return 16777216 + 314572.8 * Math.max(0, yb)
      }(bb) + 33554432
    }
    let cZ = null;

    function Pf(yb) {
      return cZ ??= async function(yb) {
        const bb = yb.loadInFlight();
        bb && await bb.catch((() => {}));
        if (yb.trapped()) return "trapped";
        if (yb.busy() || !Zf(yb.memoryBytes(), yb.clipSeconds())) return "DW";
        yb.unload();
        let Wy = !1;
        try {
          Wy = await yb.load()
        } catch {
          Wy = !1
        }
        if (!Wy) return yb.trapped() ? "trapped" : yb.rh() ? "rh" : "failed";
        return "recycled"
      }(yb).finally((() => {
        cZ = null
      })), cZ
    }
    const of = "Replay recording couldn't load, so try again.", Bf = new Set([ey.Fc.ToggleRecording, ey.Fc.SaveClip]);
    var Kf = (0, Ah.d)("sU"),
      ef = (0, Ah.d)("module"),
      qZ = (0, Ah.d)("memory"),
      sf = (0, Ah.d)("trapped"),
      Sf = (0, Ah.d)("rh"),
      Ef = (0, Ah.d)("recycleDue"),
      lf = (0, Ah.d)("loading"),
      mZ = (0, Ah.d)("generation"),
      Cf = (0, Ah.d)("viewDrawn"),
      Tf = (0, Ah.d)("clip"),
      Vf = (0, Ah.d)("session"),
      Jf = (0, Ah.d)("control"),
      gZ = (0, Ah.d)("deferred"),
      Gf = (0, Ah.d)("coreU8"),
      Of = (0, Ah.d)("coreU32"),
      Rf = (0, Ah.d)("moduleU8"),
      vZ = (0, Ah.d)("edited"),
      iZ = (0, Ah.d)("sendSession"),
      Mf = (0, Ah.d)("checkNotInEvents"),
      Yf = (0, Ah.d)("clipping"),
      Xf = (0, Ah.d)("busy"),
      nf = (0, Ah.d)("use"),
      uf = (0, Ah.d)("ensureLoaded"),
      rZ = (0, Ah.d)("loadOnce"),
      Hf = (0, Ah.d)("recycleAfterStep"),
      aZ = (0, Ah.d)("settleRecycle"),
      Ff = (0, Ah.d)("load"),
      pf = (0, Ah.d)("attach"),
      Lf = (0, Ah.d)("resendHeld"),
      Qf = (0, Ah.d)("recycle"),
      jZ = (0, Ah.d)("send"),
      Df = (0, Ah.d)("unload"),
      tZ = (0, Ah.d)("dropModule"),
      wf = (0, Ah.d)("coreBytes"),
      kZ = (0, Ah.d)("coreWords"),
      Nf = (0, Ah.d)("moduleBytes"),
      zZ = (0, Ah.d)("loadFailed"),
      If = (0, Ah.d)("call"),
      xZ = (0, Ah.d)("guard"),
      Af = (0, Ah.d)("trapOn");
    class df {
      constructor(yb) {
        this.deps = yb, Object.defineProperty(this, Af, {
          value: JZ
        }), Object.defineProperty(this, xZ, {
          value: VZ
        }), Object.defineProperty(this, If, {
          value: TZ
        }), Object.defineProperty(this, zZ, {
          value: CZ
        }), Object.defineProperty(this, Nf, {
          value: mc
        }), Object.defineProperty(this, kZ, {
          value: lZ
        }), Object.defineProperty(this, wf, {
          value: EZ
        }), Object.defineProperty(this, tZ, {
          value: SZ
        }), Object.defineProperty(this, Df, {
          value: sZ
        }), Object.defineProperty(this, jZ, {
          value: qc
        }), Object.defineProperty(this, Qf, {
          value: eZ
        }), Object.defineProperty(this, Lf, {
          value: KZ
        }), Object.defineProperty(this, pf, {
          value: BZ
        }), Object.defineProperty(this, Ff, {
          value: oZ
        }), Object.defineProperty(this, aZ, {
          value: PZ
        }), Object.defineProperty(this, Hf, {
          value: cc
        }), Object.defineProperty(this, rZ, {
          value: ZZ
        }), Object.defineProperty(this, uf, {
          value: fZ
        }), Object.defineProperty(this, nf, {
          value: hZ
        }), Object.defineProperty(this, Xf, {
          value: UZ
        }), Object.defineProperty(this, Yf, {
          value: WZ
        }), Object.defineProperty(this, Mf, {
          value: bc
        }), Object.defineProperty(this, iZ, {
          value: yc
        }), Object.defineProperty(this, Kf, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, ef, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, qZ, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, sf, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, Sf, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, Ef, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, lf, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, mZ, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, Cf, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, Tf, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Vf, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Jf, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, gZ, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Gf, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Of, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Rf, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, vZ, {
          writable: !0,
          value: void 0
        }), (0, xf.c)(this, vZ)[vZ] = new Uf({
          ensureLoaded: () => (0, xf.c)(this, uf)[uf](),
          recorderCall: (yb, bb) => {
            bb && (0, xf.c)(this, Mf)[Mf]("an edited save's stage");
            const Wy = (0, xf.c)(this, If)[If](((bb, Wy) => (yb(bb, Wy), !0)));
            return null !== Wy && void 0 !== Wy && Wy
          },
          beginSave: yb.beginSave,
          givenUp: yb.givenUp
        })
      }
      get active() {
        return null !== (0, xf.c)(this, ef)[ef]
      }
      get trapped() {
        return (0, xf.c)(this, sf)[sf]
      }
      get loading() {
        return null !== (0, xf.c)(this, lf)[lf]
      }
      prefetch() {
        (0, xf.c)(this, Sf)[Sf] || (0, xf.c)(this, sf)[sf] || (0, xf.c)(this, ef)[ef] || (0, xf.c)(this, lf)[lf] || this.deps.prefetch()
      }
      viewDrawn() {
        (0, xf.c)(this, Cf)[Cf] = !0, (0, xf.c)(this, Yf)[Yf]() && (0, xf.c)(this, nf)[nf]()
      }
      prefs(yb, bb) {
        (0, xf.c)(this, Tf)[Tf] = {
          on: yb,
          seconds: bb
        }, (0, xf.c)(this, jZ)[jZ](ey.Ac.Prefs, ff(yb, bb)), yb && (0, xf.c)(this, Cf)[Cf] && (0, xf.c)(this, nf)[nf]()
      }
      control(yb) {
        const bb = function(yb) {
          return new Uint8Array([yb, 0, 0, 0])
        }(yb);
        if (Bf.has(yb)) return (0, xf.c)(this, ef)[ef] ? void(0, xf.c)(this, jZ)[jZ](ey.Ac.Control, bb) : ((0, xf.c)(this, Jf)[Jf] = bb, void(0, xf.c)(this, nf)[nf]());
        (0, xf.c)(this, Sf)[Sf] || this.deps.coreCommand(ey.Ac.Control, bb)
      }
      session(yb) {
        (0, xf.c)(this, Vf)[Vf] = yb, (0, xf.c)(this, iZ)[iZ](yb)
      }
      filePartDone(yb, bb) {
        (0, xf.c)(this, jZ)[jZ](ey.Ac.FilePartDone, function(yb, bb) {
          const Wy = new Uint8Array(8),
            Uy = new DataView(Wy.buffer);
          return Uy.setUint32(0, yb, !0), Uy.setUint32(4, bb, !0), Wy
        }(yb, bb))
      }
      fileDone(yb) {
        return (0, xf.c)(this, jZ)[jZ](ey.Ac.FileDone, function(yb) {
          const bb = new Uint8Array(4);
          return new DataView(bb.buffer).setUint32(0, yb, !0), bb
        }(yb)), (0, xf.c)(this, Hf)[Hf]()
      }
      saveEdited(yb) {
        return (0, xf.c)(this, Mf)[Mf]("saveEdited"), (0, xf.c)(this, vZ)[vZ].start(yb)
      }
      afterFrame() {
        if (!(0, xf.c)(this, ef)[ef]) return;
        "read" === (0, xf.c)(this, vZ)[vZ].beforeRecorderStep() && (0, xf.c)(this, Hf)[Hf]();
        const yb = (0, xf.c)(this, Ef)[Ef];
        (0, xf.c)(this, Ef)[Ef] = null;
        const bb = (0, xf.c)(this, ef)[ef],
          Wy = (0, xf.c)(this, qZ)[qZ];
        if (!bb || !Wy) return void(null === yb || void 0 === yb || yb.resolve((0, xf.c)(this, sf)[sf] ? "trapped" : "DW"));
        const {
          core: Uy
        } = this.deps, hy = Uy.XKy(2);
        let fy, Zy, cb, Py, oy = 0,
          By = 0;
        if (0 !== hy) {
          var Ky, ey;
          const yb = (0, xf.c)(this, kZ)[kZ]();
          oy = null !== (Ky = yb[hy >>> 2]) && void 0 !== Ky ? Ky : 0, By = null !== (ey = yb[1 + (hy >>> 2)]) && void 0 !== ey ? ey : 0
        }
        try {
          if (By > 0) {
            const yb = bb.feed(By);
            0 !== yb && (0, xf.c)(this, Nf)[Nf](Wy).set((0, xf.c)(this, wf)[wf]().subarray(oy, oy + By), yb)
          }
          fy = bb.step(), Zy = bb.nKy(), cb = bb.uKy(), Py = bb.rey()
        } catch (qb) {
          if (!(0, xf.c)(this, Af)[Af](qb)) throw null === yb || void 0 === yb || yb.resolve("DW"), qb;
          return void(null === yb || void 0 === yb || yb.resolve("trapped"))
        }
        if (fy > 0) {
          const yb = Uy.HKy(2, fy);
          0 !== yb && (0, xf.c)(this, wf)[wf]().set((0, xf.c)(this, Nf)[Nf](Wy).subarray(Zy, Zy + fy), yb)
        }
        if (cb > 0) {
          (0, xf.c)(this, gZ)[gZ] = [];
          try {
            this.deps.events(new Uint8Array(Wy.buffer, Py, cb), Wy)
          } catch (qb) {
            throw null === yb || void 0 === yb || yb.resolve("DW"), qb
          } finally {
            const yb = (0, xf.c)(this, gZ)[gZ];
            (0, xf.c)(this, gZ)[gZ] = null;
            for (const [bb, Wy] of yb)(0, xf.c)(this, jZ)[jZ](bb, Wy)
          }
        }
        if (!(0, xf.c)(this, Yf)[Yf]() && !(0, xf.c)(this, Xf)[Xf]()) return (0, xf.c)(this, Df)[Df](), void(null === yb || void 0 === yb || yb.resolve("DW"));
        null === yb || void 0 === yb || yb.resolve((0, xf.c)(this, Qf)[Qf]())
      }
      dispose() {
        (0, xf.c)(this, Sf)[Sf] = !0, (0, xf.c)(this, Df)[Df]()
      }
    }

    function yc(yb) {
      (0, xf.c)(this, jZ)[jZ](ey.Ac.Session, function(yb) {
        const bb = new TextEncoder,
          Wy = bb.encode(yb.game).subarray(0, 65535),
          Uy = bb.encode(yb.lobby).subarray(0, 65535),
          hy = new Uint8Array(22 + Wy.length + 2 + Uy.length),
          fy = new DataView(hy.buffer);
        fy.setFloat64(0, yb.unixMs, !0), fy.setBigUint64(8, BigInt.asUintN(64, yb.session), !0), fy.setUint8(16, yb.lobbyType);
        let Zy = 20;
        for (const cb of [Wy, Uy]) fy.setUint16(Zy, cb.length, !0), hy.set(cb, Zy + 2), Zy += 2 + cb.length;
        return hy
      }({
        ...yb,
        unixMs: this.deps.unixNow()
      }))
    }

    function bc(yb) {
      false
    }

    function WZ() {
      var yb, bb;
      return null !== (yb = null === (bb = (0, xf.c)(this, Tf)[Tf]) || void 0 === bb ? void 0 : bb.on) && void 0 !== yb && yb
    }

    function UZ() {
      const yb = (0, xf.c)(this, ef)[ef];
      let bb = !0;
      if (yb) try {
        bb = yb.busy()
      } catch (Wy) {
        if (!(0, xf.c)(this, Af)[Af](Wy)) throw Wy
      }
      return bb || (0, xf.c)(this, vZ)[vZ].active
    }
    async function hZ() {
      !(0, xf.c)(this, Sf)[Sf] && this.deps.allowed() ? await (0, xf.c)(this, uf)[uf]() : (0, xf.c)(this, Jf)[Jf] = null
    }

    function fZ() {
      return (0, xf.c)(this, sf)[sf] || (0, xf.c)(this, Sf)[Sf] ? Promise.resolve(!1) : (0, xf.c)(this, ef)[ef] ? Promise.resolve(!0) : ((0, xf.c)(this, lf)[lf] ??= (0, xf.c)(this, rZ)[rZ](), (0, xf.c)(this, lf)[lf])
    }
    async function ZZ() {
      let yb = !1;
      try {
        return yb = await (0, xf.c)(this, Ff)[Ff](), yb
      } finally {
        yb || ((0, xf.c)(this, Jf)[Jf] = null), (0, xf.c)(this, lf)[lf] = null
      }
    }

    function cc() {
      if (!(0, xf.c)(this, ef)[ef]) return Promise.resolve((0, xf.c)(this, sf)[sf] ? "trapped" : "DW");
      if (!(0, xf.c)(this, Ef)[Ef]) {
        let yb = () => {};
        const bb = new Promise((bb => {
          yb = bb
        }));
        (0, xf.c)(this, Ef)[Ef] = {
          promise: bb,
          resolve: yb
        }
      }
      return (0, xf.c)(this, Ef)[Ef].promise
    }

    function PZ(yb) {
      const bb = (0, xf.c)(this, Ef)[Ef];
      (0, xf.c)(this, Ef)[Ef] = null, null === bb || void 0 === bb || bb.resolve(yb)
    }
    async function oZ() {
      let yb = (0, xf.c)(this, Kf)[Kf];
      if (!yb) {
        const bb = (0, xf.c)(this, mZ)[mZ];
        try {
          yb = await this.deps.load()
        } catch (Wy) {
          return bb === (0, xf.c)(this, mZ)[mZ] && await (0, xf.c)(this, zZ)[zZ](Wy), !1
        }
        if (bb !== (0, xf.c)(this, mZ)[mZ]) return this.deps.unload(), !1;
        const Uy = yb,
          hy = (0, xf.c)(this, xZ)[xZ]((() => Uy.aey()));
        if (void 0 === hy) return !1;
        const fy = this.deps.core.FKy();
        if (hy !== fy) return await (0, xf.c)(this, zZ)[zZ](new Error(`recorder port version ${hy}, the core's ${fy}`)), !1;
        (0, xf.c)(this, Kf)[Kf] = yb
      }
      const bb = yb;
      try {
        if (!(0, xf.c)(this, xZ)[xZ]((() => ((0, xf.c)(this, ef)[ef] = new bb.pKy, (0, xf.c)(this, qZ)[qZ] = bb.MKy(), !0)))) return !1;
        (0, xf.c)(this, Lf)[Lf]();
        const yb = (0, xf.c)(this, Jf)[Jf];
        return (0, xf.c)(this, Jf)[Jf] = null, yb && (0, xf.c)(this, jZ)[jZ](ey.Ac.Control, yb), (0, xf.c)(this, pf)[pf]()
      } catch (Wy) {
        return (0, xf.c)(this, Df)[Df](), await (0, xf.c)(this, zZ)[zZ](Wy), !1
      }
    }

    function BZ() {
      return this.deps.core.LKy(0), 1 === this.deps.core.LKy(1) || ((0, xf.c)(this, Df)[Df](), this.deps.failed(of), !1)
    }

    function KZ() {
      (0, xf.c)(this, Tf)[Tf] && (0, xf.c)(this, jZ)[jZ](ey.Ac.Prefs, ff((0, xf.c)(this, Tf)[Tf].on, (0, xf.c)(this, Tf)[Tf].seconds)), (0, xf.c)(this, Vf)[Vf] && (0, xf.c)(this, iZ)[iZ]((0, xf.c)(this, Vf)[Vf])
    }

    function eZ() {
      return Pf({
        memoryBytes: this.deps.memoryBytes,
        clipSeconds: () => {
          var yb, bb;
          return null !== (yb = null === (bb = (0, xf.c)(this, Tf)[Tf]) || void 0 === bb ? void 0 : bb.seconds) && void 0 !== yb ? yb : 0
        },
        trapped: () => (0, xf.c)(this, sf)[sf],
        busy: () => (0, xf.c)(this, Xf)[Xf](),
        loadInFlight: () => (0, xf.c)(this, lf)[lf],
        rh: () => (0, xf.c)(this, Sf)[Sf],
        unload: () => {
          (0, xf.c)(this, Df)[Df]()
        },
        load: () => (0, xf.c)(this, uf)[uf]()
      })
    }

    function qc(yb, bb) {
      (0, xf.c)(this, gZ)[gZ] ? (0, xf.c)(this, gZ)[gZ].push([yb, bb]): (0, xf.c)(this, If)[If](((Wy, Uy) => {
        const hy = Wy.YKy(bb.length);
        0 !== hy && (new Uint8Array(Uy.buffer, hy, bb.length).set(bb), Wy.command(yb, bb.length))
      }))
    }

    function sZ() {
      (0, xf.c)(this, mZ)[mZ]++, (0, xf.c)(this, aZ)[aZ]("DW"), (0, xf.c)(this, vZ)[vZ].stop(), this.deps.core.LKy(0), (0, xf.c)(this, tZ)[tZ](), (0, xf.c)(this, sf)[sf] || ((0, xf.c)(this, Kf)[Kf] = null, this.deps.unload())
    }

    function SZ() {
      (0, xf.c)(this, If)[If]((yb => {
        yb.free()
      })), (0, xf.c)(this, ef)[ef] = null, (0, xf.c)(this, qZ)[qZ] = null, (0, xf.c)(this, Rf)[Rf] = null
    }

    function EZ() {
      var yb;
      const bb = this.deps.coreBuffer();
      return (null === (yb = (0, xf.c)(this, Gf)[Gf]) || void 0 === yb ? void 0 : yb.buffer) !== bb && ((0, xf.c)(this, Gf)[Gf] = new Uint8Array(bb)), (0, xf.c)(this, Gf)[Gf]
    }

    function lZ() {
      var yb;
      const bb = this.deps.coreBuffer();
      return (null === (yb = (0, xf.c)(this, Of)[Of]) || void 0 === yb ? void 0 : yb.buffer) !== bb && ((0, xf.c)(this, Of)[Of] = new Uint32Array(bb, 0, bb.byteLength >>> 2)), (0, xf.c)(this, Of)[Of]
    }

    function mc(yb) {
      var bb;
      const Wy = yb.buffer;
      return (null === (bb = (0, xf.c)(this, Rf)[Rf]) || void 0 === bb ? void 0 : bb.buffer) !== Wy && ((0, xf.c)(this, Rf)[Rf] = new Uint8Array(Wy)), (0, xf.c)(this, Rf)[Rf]
    }
    async function CZ(yb) {
      await this.deps.staleOr(yb, (() => {
        this.deps.failed(of)
      }))
    }

    function TZ(yb) {
      const bb = (0, xf.c)(this, ef)[ef],
        Wy = (0, xf.c)(this, qZ)[qZ];
      if (bb && Wy) return (0, xf.c)(this, xZ)[xZ]((() => yb(bb, Wy)))
    }

    function VZ(yb) {
      if (!(0, xf.c)(this, sf)[sf]) try {
        return yb()
      } catch (bb) {
        if (!(0, xf.c)(this, Af)[Af](bb)) throw bb;
        return
      }
    }

    function JZ(yb) {
      return yb instanceof WebAssembly.RuntimeError && ((0, xf.c)(this, sf)[sf] = !0, (0, xf.c)(this, ef)[ef] = null, (0, xf.c)(this, qZ)[qZ] = null, (0, xf.c)(this, Rf)[Rf] = null, (0, xf.c)(this, Kf)[Kf] = null, (0, xf.c)(this, Jf)[Jf] = null, (0, xf.c)(this, aZ)[aZ]("trapped"), this.deps.core.LKy(0), (0, xf.c)(this, vZ)[vZ].stop(), this.deps.crash(this.deps.markTrapped(yb)), this.deps.failed("Replay recording stopped working, so reload the page to record replays again."), !0)
    }
    var gc = Wy(37314);
    const GZ = new Map([
      ["skyblock", () => Wy.e(45).then((() => Wy(37310)))]
    ]);

    function OZ(yb) {
      const bb = GZ.get(yb);
      return bb ? bb().then((() => {
        const bb = (0, gc.d)(yb);
        if (!bb) throw new Error(`${yb}'s replay hook module registered no hook`);
        return bb
      })) : null
    }
    class RZ {
      constructor(yb) {
        this.deps = yb, this.game = null, this.hook = null, this.generation = 0, this.all = !1, this.pending = new Map, this.ids = new Int32Array(64)
      }
      get wantsWatch() {
        return null !== this.hook
      }
      opened(yb) {
        if (this.pending.clear(), yb === this.game && null !== this.hook) return void(this.all = !0);
        const bb = ++this.generation;
        this.game = yb, this.hook = null, this.all = !1;
        const Wy = this.deps.loadHook(yb);
        null === Wy || void 0 === Wy || Wy.then((yb => {
          bb === this.generation && (this.hook = yb, this.all = !0)
        }), (yb => {
          bb === this.generation && this.deps.onError(yb)
        }))
      }
      ended() {
        this.generation++, this.game = null, this.hook = null, this.all = !1, this.pending.clear()
      }
      entityAdded(yb) {
        null === this.hook || this.all || this.pending.set(yb, !0)
      }
      entityInfoChanged(yb) {
        null === this.hook || this.all || this.pending.has(yb) || this.pending.set(yb, !1)
      }
      flush(yb) {
        const {
          hook: bb
        } = this;
        if (null === bb || !yb || !this.all && 0 === this.pending.size) return;
        const Wy = this.deps.cmd();
        if (null === Wy) return;
        const {
          api: Uy
        } = this.deps;
        if (this.all) {
          this.all = !1, this.pending.clear();
          const {
            ids: yb,
            count: bb
          } = FW(Uy, this.ids);
          this.ids = yb;
          for (let Wy = 0; Wy < bb; Wy++) this.pending.set(yb[Wy], !0)
        }
        const hy = this.ids = pW(this.ids, this.pending.size);
        let fy = 0;
        for (const oy of this.pending.keys()) hy[fy++] = oy;
        const Zy = [],
          cb = LW(Uy, hy, fy, ((yb, bb) => {
            null !== bb && Zy.push({
              serverId: yb,
              info: bb,
              spawned: !0 === this.pending.get(yb)
            })
          }));
        if (cb) {
          this.pending.clear();
          for (const {
              serverId: yb,
              info: Uy,
              spawned: hy
            }
            of Zy) try {
            bb(Uy, {
              setFacingTolerance: bb => {
                null === bb && hy || cU(Wy, yb, bb) || this.pending.set(yb, hy)
              }
            })
          } catch (Py) {
            this.deps.onError(Py)
          }
        }
      }
    }
    var vc = (0, Ah.d)("sU"),
      ic = (0, Ah.d)("module"),
      MZ = (0, Ah.d)("memory"),
      YZ = (0, Ah.d)("trapped"),
      XZ = (0, Ah.d)("generation"),
      nZ = (0, Ah.d)("loading"),
      uZ = (0, Ah.d)("lend"),
      rc = (0, Ah.d)("givenUp"),
      HZ = (0, Ah.d)("afterSave"),
      ac = (0, Ah.d)("opens"),
      FZ = (0, Ah.d)("saveAskedAt"),
      pZ = (0, Ah.d)("unload"),
      LZ = (0, Ah.d)("dropModule"),
      QZ = (0, Ah.d)("loadFailed"),
      jc = (0, Ah.d)("saveReadsBody"),
      DZ = (0, Ah.d)("command"),
      tc = (0, Ah.d)("call"),
      wZ = (0, Ah.d)("guard"),
      kc = (0, Ah.d)("trapOn");
    class NZ {
      constructor(yb) {
        this.deps = yb, Object.defineProperty(this, kc, {
          value: Wc
        }), Object.defineProperty(this, wZ, {
          value: bP
        }), Object.defineProperty(this, tc, {
          value: yP
        }), Object.defineProperty(this, DZ, {
          value: dZ
        }), Object.defineProperty(this, jc, {
          get: AZ,
          set: void 0
        }), Object.defineProperty(this, QZ, {
          value: xc
        }), Object.defineProperty(this, LZ, {
          value: IZ
        }), Object.defineProperty(this, pZ, {
          value: zc
        }), Object.defineProperty(this, vc, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, ic, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, MZ, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, YZ, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, XZ, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, nZ, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, uZ, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, rc, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, HZ, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, ac, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, FZ, {
          writable: !0,
          value: null
        })
      }
      get active() {
        return null !== (0, xf.c)(this, ic)[ic] && null === (0, xf.c)(this, HZ)[HZ]
      }
      async open(yb) {
        if ((0, xf.c)(this, YZ)[YZ]) return ey.Kc.ModuleTrap;
        let bb = (0, xf.c)(this, vc)[vc];
        if (!bb) {
          const yb = (0, xf.c)(this, XZ)[XZ];
          (0, xf.c)(this, nZ)[nZ]++;
          try {
            bb = await this.deps.load()
          } catch (Uy) {
            return (0, xf.c)(this, nZ)[nZ]--, yb !== (0, xf.c)(this, XZ)[XZ] ? "stopped" : (0, xf.c)(this, QZ)[QZ](Uy)
          }
          if ((0, xf.c)(this, nZ)[nZ]--, yb !== (0, xf.c)(this, XZ)[XZ]) return (0, xf.c)(this, vc)[vc] || 0 !== (0, xf.c)(this, nZ)[nZ] || (0, xf.c)(this, YZ)[YZ] || this.deps.unload(), "stopped";
          if ((0, xf.c)(this, YZ)[YZ]) return ey.Kc.ModuleTrap;
          const Wy = bb.aey(),
            hy = this.deps.core.FKy();
          if (Wy !== hy) return (0, xf.c)(this, QZ)[QZ](new Error(`replay port version ${Wy}, the core's ${hy}`));
          (0, xf.c)(this, vc)[vc] = bb
        }
        if (!(0, xf.c)(this, ic)[ic]) {
          const yb = bb;
          if (!(0, xf.c)(this, wZ)[wZ]((() => {
              (0, xf.c)(this, ic)[ic] = new yb.QKy, (0, xf.c)(this, MZ)[MZ] = yb.jey()
            }))) return ey.Kc.ModuleTrap
        }
        let Wy = !1;
        return (0, xf.c)(this, tc)[tc](((bb, Uy) => {
          null !== (0, xf.c)(this, HZ)[HZ] && bb.step(0, 0);
          const hy = bb.stage(yb.length);
          0 !== hy && (new Uint8Array(Uy.buffer, hy, yb.length).set(yb), bb.open(), (0, xf.c)(this, rc)[rc] = (0, xf.c)(this, uZ)[uZ], (0, xf.c)(this, HZ)[HZ] = null, (0, xf.c)(this, ac)[ac]++, Wy = !0)
        })) ? Wy ? "opening" : ey.Kc.TooLarge : ey.Kc.ModuleTrap
      }
      beforeFrame(yb) {
        const bb = (0, xf.c)(this, ic)[ic],
          Wy = (0, xf.c)(this, MZ)[MZ];
        if (!bb || !Wy || null !== (0, xf.c)(this, HZ)[HZ]) return;
        const {
          core: Uy
        } = this.deps, hy = Uy.DKy(yb);
        if (hy < 0) return;
        const fy = Math.floor(hy);
        let Zy, cb;
        try {
          Zy = bb.step(fy, hy - fy), cb = bb.nKy()
        } catch (oy) {
          return void(0, xf.c)(this, kc)[kc](oy)
        }
        const Py = Uy.HKy(1, Zy);
        if (0 === Py) {
          const yb = (0, xf.c)(this, tc)[tc]((yb => {
            yb.close()
          }));
          if (!yb) return;
          return (0, xf.c)(this, jc)[jc] ? (0, xf.c)(this, HZ)[HZ] = "drop" : (0, xf.c)(this, LZ)[LZ](), void Uy.tey(ey.Kc.Port)
        }
        new Uint8Array(this.deps.coreBuffer(), Py, Zy).set(new Uint8Array(Wy.buffer, cb, Zy))
      }
      play() {
        (0, xf.c)(this, DZ)[DZ]((yb => {
          yb.play()
        }))
      }
      pause() {
        (0, xf.c)(this, DZ)[DZ]((yb => {
          yb.pause()
        }))
      }
      seek(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (0, xf.c)(this, DZ)[DZ]((Wy => {
          Wy.seek(yb, bb)
        }))
      }
      setMark(yb, bb) {
        return (0, xf.c)(this, DZ)[DZ]((Wy => {
          Wy.wKy(yb, bb)
        }))
      }
      addKeyframe(yb, bb) {
        return (0, xf.c)(this, DZ)[DZ]((Wy => {
          Wy.NKy(yb[0], yb[1], yb[2], bb[0], bb[1], bb[2])
        }))
      }
      setKeyframe(yb, bb) {
        return (0, xf.c)(this, DZ)[DZ]((Wy => {
          Wy.zey(yb, bb)
        }))
      }
      moveKeyframe(yb, bb) {
        return (0, xf.c)(this, DZ)[DZ]((Wy => {
          Wy.IKy(yb, bb)
        }))
      }
      deleteKeyframes(yb, bb) {
        return (0, xf.c)(this, DZ)[DZ]((Wy => {
          Wy.xey(yb, bb)
        }))
      }
      crop(yb, bb) {
        return null === (0, xf.c)(this, uZ)[uZ] && (0, xf.c)(this, DZ)[DZ]((Wy => {
          Wy.crop(yb, bb)
        }))
      }
      beginSave() {
        const yb = (0, xf.c)(this, FZ)[FZ];
        if ((0, xf.c)(this, FZ)[FZ] = null, null !== yb && yb !== (0, xf.c)(this, ac)[ac]) return null;
        let bb = 0,
          Wy = null;
        if ((0, xf.c)(this, tc)[tc](((yb, Uy) => {
            bb = yb.save(), 0 !== bb && (Wy = new Uint8Array(Uy.buffer, yb.AKy(), yb.dKy()).slice())
          })), 0 === bb || !Wy) return null;
        const Uy = {
          headLen: bb,
          editState: Wy,
          givenUp: () => (0, xf.c)(this, rc)[rc] === Uy,
          head: (yb, bb) => {
            if ((0, xf.c)(this, uZ)[uZ] !== Uy || !(0, xf.c)(this, jc)[jc]) return null;
            let Wy = null;
            return (0, xf.c)(this, tc)[tc](((Uy, hy) => {
              const fy = Uy.yqy();
              0 !== fy && yb >= 0 && bb >= 0 && yb + bb <= fy && (Wy = new Uint8Array(hy.buffer, Uy.bqy() + yb, bb))
            })), Wy
          },
          end: () => {
            if ((0, xf.c)(this, uZ)[uZ] !== Uy) return;
            (0, xf.c)(this, uZ)[uZ] = null, (0, xf.c)(this, rc)[rc] = null, (0, xf.c)(this, tc)[tc]((yb => {
              yb.Wey()
            }));
            const yb = (0, xf.c)(this, HZ)[HZ];
            (0, xf.c)(this, HZ)[HZ] = null, "unload" === yb ? (0, xf.c)(this, pZ)[pZ]() : "drop" === yb && (0, xf.c)(this, LZ)[LZ]()
          }
        };
        return (0, xf.c)(this, uZ)[uZ] = Uy, Uy
      }
      askSave() {
        (0, xf.c)(this, FZ)[FZ] = (0, xf.c)(this, ac)[ac]
      }
      setSpeed(yb) {
        (0, xf.c)(this, DZ)[DZ]((bb => {
          bb.fey(yb)
        }))
      }
      setCameraMode(yb) {
        (0, xf.c)(this, DZ)[DZ]((bb => {
          bb.Zey(yb)
        }))
      }
      close() {
        (0, xf.c)(this, DZ)[DZ]((yb => {
          yb.close()
        }))
      }
      stop() {
        (0, xf.c)(this, XZ)[XZ]++, (0, xf.c)(this, jc)[jc] && ((0, xf.c)(this, tc)[tc]((yb => {
          yb.close()
        })), (0, xf.c)(this, ic)[ic]) ? (0, xf.c)(this, HZ)[HZ] = "unload" : (0, xf.c)(this, pZ)[pZ]()
      }
    }

    function zc() {
      (0, xf.c)(this, LZ)[LZ](), (0, xf.c)(this, YZ)[YZ] || ((0, xf.c)(this, vc)[vc] = null, this.deps.unload())
    }

    function IZ() {
      (0, xf.c)(this, tc)[tc]((yb => {
        yb.free()
      })), (0, xf.c)(this, ic)[ic] = null, (0, xf.c)(this, MZ)[MZ] = null
    }
    async function xc(yb) {
      return await this.deps.staleOr(yb, (() => {})) ? "reloading" : ey.Kc.ModuleLoad
    }

    function AZ() {
      return null !== (0, xf.c)(this, uZ)[uZ] && (0, xf.c)(this, rc)[rc] !== (0, xf.c)(this, uZ)[uZ]
    }

    function dZ(yb) {
      return null === (0, xf.c)(this, HZ)[HZ] && (0, xf.c)(this, tc)[tc](yb)
    }

    function yP(yb) {
      const bb = (0, xf.c)(this, ic)[ic],
        Wy = (0, xf.c)(this, MZ)[MZ];
      return !(!bb || !Wy) && (0, xf.c)(this, wZ)[wZ]((() => {
        yb(bb, Wy)
      }))
    }

    function bP(yb) {
      if ((0, xf.c)(this, YZ)[YZ]) return !1;
      try {
        return yb(), !0
      } catch (bb) {
        return (0, xf.c)(this, kc)[kc](bb), !1
      }
    }

    function Wc(yb) {
      if (!(yb instanceof WebAssembly.RuntimeError)) throw yb;
      (0, xf.c)(this, YZ)[YZ] = !0, (0, xf.c)(this, ic)[ic] = null, (0, xf.c)(this, MZ)[MZ] = null, (0, xf.c)(this, vc)[vc] = null, this.deps.crash(this.deps.markTrapped(yb)), this.deps.core.tey(ey.Kc.ModuleTrap)
    }
    var Uc = Wy(5738),
      hc = Wy(39231);
    const fc = "[bloxd-wasm-client]";
    const Zc = String(Rh);

    function cP(yb) {
      return null === yb || yb === Zc ? void 0 : yb
    }

    function Pc(yb) {
      var bb, Wy, Uy, hy, fy, cb, Py;
      switch (yb.what) {
        case ey.Pc.FlyingText: {
          let bb;
          try {
            bb = JSON.parse(yb.contentJson)
          } catch (oy) {
            return void console.warn(`${fc} a replay's flying text isn't JSON`, oy)
          }
          Zy.g.EZ("forceFlyingMiddleMessage", {
            content: bb,
            v_: yb.v_,
            angle: yb.angle,
            i_: yb.i_
          });
          break
        }
        case ey.Pc.PlayerKilled:
          (0, hc.d)({
            kind: "killed",
            body: {
              deadEId: null !== (bb = cP(yb.dead)) && void 0 !== bb ? bb : "",
              killerEId: cP(yb.killer),
              withItem: null !== (Wy = yb.withItem) && void 0 !== Wy ? Wy : "",
              killstreak: yb.killstreak
            }
          });
          break;
        case ey.Pc.Killfeed:
          (0, hc.d)({
            kind: "custom",
            body: {
              killer: {
                eId: cP(yb.killerId),
                name: null !== (Uy = yb.killerName) && void 0 !== Uy ? Uy : void 0,
                colour: null !== (hy = yb.killerColour) && void 0 !== hy ? hy : void 0
              },
              victim: {
                eId: cP(yb.victimId),
                name: null !== (fy = yb.victimName) && void 0 !== fy ? fy : void 0,
                colour: null !== (cb = yb.victimColour) && void 0 !== cb ? cb : void 0
              },
              withItem: null !== (Py = yb.withItem) && void 0 !== Py ? Py : ""
            }
          })
      }
    }
    const oc = "[bloxd-wasm-client]";

    function Bc(yb) {
      if (void 0 === yb || null === yb || "" === yb) return null;
      const bb = Number(yb);
      return Number.isInteger(bb) && bb > Rh && bb <= 2147483647 ? bb : null
    }

    function Kc(yb) {
      return {
        id: Bc(yb.eId),
        name: "string" === typeof yb.name ? yb.name : null,
        colour: "string" === typeof yb.colour ? yb.colour : null
      }
    }

    function ec(yb) {
      const bb = (0, Fh.j)(kU.Tb.PlayerKilled, (bb => {
          var Wy, Uy;
          const hy = (0, af.g)(bb);
          if (!(0, af.c)(hy)) return;
          const {
            deadEId: fy,
            killerEId: Zy,
            withItem: cb,
            killstreak: Py
          } = hy;
          yb.recordPlayerKilled(null !== (Wy = Bc(fy)) && void 0 !== Wy ? Wy : Rh, null !== (Uy = Bc(Zy)) && void 0 !== Uy ? Uy : Rh, "number" === typeof Py ? Py : 0, "string" === typeof cb ? cb : "")
        })),
        Wy = (0, Fh.j)(kU.Tb.CustomKillfeed, (bb => {
          const Wy = (0, af.g)(bb);
          if (!(0, af.c)(Wy) || !(0, af.c)(Wy.killer) || !(0, af.c)(Wy.victim)) return;
          const {
            killer: Uy,
            victim: hy,
            withItem: fy
          } = Wy;
          yb.recordKillfeed(Kc(Uy), Kc(hy), "string" === typeof fy ? fy : null)
        }));
      return () => {
        bb(), Wy()
      }
    }

    function qP(yb) {
      var bb;
      return void 0 === yb || null === yb ? null : null !== (bb = JSON.stringify(yb)) && void 0 !== bb ? bb : null
    }

    function sc(yb) {
      let bb = null;
      const Wy = () => {
        const {
          enableClipping: Wy,
          clipDurationSeconds: hy
        } = Uy.d.get("clientEscMenuOptions"), fy = `${Wy}:${hy}`;
        fy !== bb && (bb = fy, yb.recorder.setPrefs(Wy, hy))
      };
      return Wy(), (0, Zy.h)("appManagerUpdated|clientEscMenuOptions", Wy)
    }
    const Sc = "replayModule",
      Ec = "recorderModule";

    function lc(yb, bb, Wy) {
      return function() {
        return yb.isStopped ? Wy : bb(...arguments)
      }
    }
    const mP = {
      open: () => Promise.reject(new Error(lh.d.coreStopped.text)),
      replayKey: () => null,
      encode: () => Promise.resolve(null),
      fileHandle: () => null,
      markSaved: () => {}
    };

    function Cc() {
      return Wy.e(57).then((() => Wy(60021)))
    }

    function Tc(yb) {
      (0, lh.e)({
        text: yb,
        type: "Error"
      })
    }
    class Vc {
      constructor(yb) {
        this.deps = yb, this.runtime = void 0, this.entityHooks = void 0, this.recordedOptions = void 0, this.stops = void 0, this.activeConn = 0, this.stopped = !1, this.bench = null, this.replay = void 0, this.recorder = void 0, this.freecam = void 0, this.drawn = !1;
        const {
          running: bb,
          api: Uy,
          core: hy
        } = yb, fy = () => yb.memory().buffer, Zy = () => bb.isStopped ? null : bb.rings.cmd, cb = lc(bb, ((yb, bb) => hy.HKy(yb, bb)), 0), Py = () => hy.FKy();
        let oy = null;
        this.replay = new NZ({
          core: {
            DKy: lc(bb, (yb => hy.DKy(yb)), -1),
            HKy: cb,
            FKy: Py,
            tey: lc(bb, (yb => {
              hy.tey(yb)
            }), void 0)
          },
          coreBuffer: fy,
          load: async () => (oy = await Wy.e(58).then((() => Wy(60028))), oy.loadReplayModule()),
          unload: () => {
            var yb;
            null === (yb = oy) || void 0 === yb || yb.unloadReplayModule()
          },
          markTrapped: yb => oy ? oy.markReplayTrapped(yb) : new Error(String(yb)),
          staleOr: (bb, Wy) => yb.staleOr(Sc, bb, Wy),
          crash: bb => {
            yb.reportFault(Sc, bb)
          }
        });
        let By = null;
        this.recorder = new df({
          core: {
            LKy: lc(bb, (yb => hy.LKy(yb)), 0),
            XKy: lc(bb, (yb => hy.XKy(yb)), 0),
            HKy: cb,
            FKy: Py
          },
          coreCommand: (yb, bb) => {
            var Wy, Uy;
            return null !== (Wy = null === (Uy = Zy()) || void 0 === Uy ? void 0 : Uy.writeCmd(yb, 0, bb)) && void 0 !== Wy && Wy
          },
          coreBuffer: fy,
          load: async () => (By = await Cc(), By.loadRecorderModule()),
          prefetch: () => {
            Cc().then((yb => yb.prefetchRecorderModule())).catch((yb => {
              console.warn(`${oc} the recorder module didn't prefetch, so a save loads it:`, yb)
            }))
          },
          unload: () => {
            var yb;
            null === (yb = By) || void 0 === yb || yb.unloadRecorderModule()
          },
          markTrapped: yb => By ? By.markRecorderTrapped(yb) : new Error(String(yb)),
          memoryBytes: () => {
            var yb, bb;
            return null !== (yb = null === (bb = By) || void 0 === bb ? void 0 : bb.recorderMemoryBytes()) && void 0 !== yb ? yb : 0
          },
          staleOr: (bb, Wy) => yb.staleOr(Ec, bb, Wy),
          crash: bb => {
            yb.reportFault(Ec, bb)
          },
          allowed: () => !0 === yb.options.get("canRecordReplays"),
          failed: Tc,
          events: (yb, bb) => {
            this.runtime.recorderEvents(yb, bb)
          },
          beginSave: () => this.replay.beginSave(),
          givenUp: Tc,
          unixNow: () => Date.now()
        });
        const Ky = new Oh({
          core: {
            JKy: lc(bb, (yb => hy.JKy(yb)), 0),
            GKy: lc(bb, (() => {
              hy.GKy()
            }), void 0),
            oc: lc(bb, (() => hy.oc()), 0),
            gey: lc(bb, (() => hy.gey()), 0)
          },
          buffer: fy,
          apiView: () => Uy.apiView,
          cmd: Zy,
          replay: this.replay,
          recorder: this.recorder
        });
        this.entityHooks = new RZ({
          api: Uy,
          cmd: Zy,
          loadHook: OZ,
          onError: yb => {
            console.warn(`${oc} the recorded game's replay hooks:`, yb)
          }
        });
        const ey = new Hh({
          client: Ky,
          buffer: fy,
          setHoldDraws: yb => {
            bb.setHoldDraws(yb)
          },
          notify: lh.e,
          onRecorderState: () => {
            var yb;
            null === (yb = (0, Ch.g)()) || void 0 === yb || yb.recorderChanged()
          },
          onViewerChange: () => {
            var yb;
            null === (yb = (0, Ch.g)()) || void 0 === yb || yb.viewerChanged()
          },
          onReplayOption: bb => {
            ! function(yb, bb) {
              var Wy, Uy;
              const hy = kU.W[bb.key];
              if (void 0 === hy) return;
              let fy = null !== (Wy = bb.value) && void 0 !== Wy ? Wy : JSON.parse(JSON.stringify(null !== (Uy = Uc.e[hy]) && void 0 !== Uy ? Uy : null));
              if (null !== bb.value && bb.key < kU.rb.Environment && "string" === typeof fy) try {
                fy = JSON.parse(fy)
              } catch (Zy) {
                return void console.warn(`${fc} a replay's ${hy} isn't JSON`, Zy)
              }
              yb.applyNewClientOptions({
                [hy]: fy
              })
            }(yb.options, bb)
          },
          onReplayUiEvent: Pc,
          onReplayOpened: bb => {
            this.entityHooks.opened((0, Ry.Rb)(bb)), yb.replayShaderPack(bb)
          },
          meshPending: () => {
            var yb, Wy;
            return null !== (yb = null === (Wy = bb.lastHeader) || void 0 === Wy ? void 0 : Wy.renderPending) && void 0 !== yb ? yb : 0
          },
          viewerOpen: mf.e,
          download: yb => {
            (0, Sh.i)(yb)
          }
        });
        this.runtime = ey, Uy.replay = ey.sink, (0, Ch.o)(ey);
        const qb = new Qh({
          live: () => {
            var yb;
            return !bb.isStopped && !0 === (null === (yb = ey.currentViewer) || void 0 === yb ? void 0 : yb.inPlayback)
          },
          cmd: Zy,
          dragScale: zf
        });
        this.freecam = qb, (0, Ch.n)(qb), this.recordedOptions = function(yb, bb) {
          const Wy = kU.W,
            Uy = Wy.map(((Wy, Uy) => bb.subscribe(Wy, (bb => {
              yb.setOption(Uy, qP(bb))
            }))));
          return {
            sendAll() {
              Wy.forEach(((Wy, Uy) => {
                yb.setOption(Uy, qP(bb.get(Wy)))
              }))
            },
            stop() {
              for (const yb of Uy) yb()
            }
          }
        }(ey.recorder, yb.options), this.stops = [(0, UU.p)((yb => {
          qb.flush();
          try {
            this.replay.beforeFrame(yb)
          } catch (bb) {
            this.deps.reportFault("replayFrame", bb)
          }
        })), (0, UU.D)(((yb, bb) => {
          try {
            this.recorder.afterFrame(), bb && !this.drawn && (this.drawn = !0, this.recorder.viewDrawn())
          } catch (Wy) {
            this.deps.reportFault("recorderFrame", Wy)
          }
          try {
            ey.afterFrame(yb)
          } catch (Wy) {
            this.deps.reportFault("replayRuntime", Wy)
          }
        })), sc(ey), () => {
          this.recordedOptions.stop()
        }, ec(ey.recorder), (0, ph.k)((yb => {
          let {
            action: bb,
            down: Wy
          } = yb;
          var Uy;
          Wy && (null === (Uy = (0, Ch.g)()) || void 0 === Uy || Uy.keyDown(bb))
        }))];
        const sy = () => {
          const yb = ey.currentViewer;
          return !0 === (null === yb || void 0 === yb ? void 0 : yb.isOpen) ? yb : null
        };
        (0, Eh.c)({
          open: (yb, bb) => this.open(yb, bb),
          replayKey: () => {
            var yb, bb;
            return null !== (yb = null === (bb = sy()) || void 0 === bb ? void 0 : bb.id) && void 0 !== yb ? yb : null
          },
          saveRefusal: () => {
            var yb, bb;
            return null !== (yb = null === (bb = sy()) || void 0 === bb ? void 0 : bb.saveRefusal) && void 0 !== yb ? yb : null
          },
          encode: () => {
            var yb, bb;
            return null !== (yb = null === (bb = sy()) || void 0 === bb ? void 0 : bb.save()) && void 0 !== yb ? yb : Promise.resolve(null)
          },
          fileHandle: () => {
            var yb, bb;
            return null !== (yb = null === (bb = ey.currentViewer) || void 0 === bb ? void 0 : bb.fileHandle) && void 0 !== yb ? yb : null
          },
          markSaved: (yb, bb) => {
            var Wy;
            null === (Wy = ey.currentViewer) || void 0 === Wy || Wy.markSaved(yb, bb)
          }
        })
      }
      netEvent(yb) {
        if ("connection" === yb.type)
          if (yb.phase === ey.A.Activated) {
            this.activeConn = yb.conn;
            const bb = this.deps.sessionInfo(yb.conn);
            null !== bb && (this.runtime.activated({
              lobbyType: (0, vb.s)(bb.lobbyName),
              gameNameWithVariation: bb.gameNameWithVariation,
              lobbyName: bb.lobbyName
            }), this.recordedOptions.sendAll())
          } else yb.phase !== ey.A.Left && yb.phase !== ey.A.Closed || yb.conn !== this.activeConn || (this.activeConn = 0, this.runtime.recorder.closed())
      }
      stop() {
        if (!this.stopped) {
          this.stopped = !0;
          for (const yb of this.stops) yb();
          this.runtime.end(), this.entityHooks.ended(), this.replay.stop(), this.recorder.dispose(), (0, Ch.l)() === this.runtime && (0, Ch.o)(null), (0, Ch.h)() === this.freecam && (0, Ch.n)(null), (0, Eh.c)(mP), null !== this.bench && window.wasmReplayBench === this.bench && (window.wasmReplayBench = void 0)
        }
      }
      async open(yb, bb) {
        const {
          running: Wy
        } = this.deps;
        if (Wy.isStopped) throw new Error(lh.d.coreStopped.text);
        if (yb.byteLength > 67108864) throw new Error(lh.d.cantOpen.text);
        let Uy;
        try {
          Uy = await async function(yb) {
            const bb = await yb.loadViewer();
            return bb.inPlayback || (0, UU.M)().leaveGame(null), bb
          }(this.runtime)
        } catch (hy) {
          throw console.warn(`${oc} the replay viewer didn't load`, hy), new Error(lh.d.viewerLoadFailed.text)
        }
        if (Wy.isStopped) throw new Error(lh.d.coreStopped.text);
        await Uy.open(yb, bb)
      }
    }
    var Jc = Wy(1595);

    function gP(yb, bb) {
      const {
        aux: Wy,
        payload: Uy
      } = function(yb) {
        return {
          aux: yb.reset ? ey.Nb.ResetFirst : 0,
          payload: Oc(yb.changes)
        }
      }(bb);
      yb.queueOptions(Wy, Uy) && (bb.reset && Jc.c.reset(), Jc.c.apply(bb.changes))
    }
    const Gc = new TextEncoder;

    function Oc(yb) {
      const bb = new Rc;
      return iP(bb, yb), bb.bytes()
    }
    class Rc {
      constructor() {
        this.buf = new Uint8Array(256), this.view = new DataView(this.buf.buffer), this.len = 0
      }
      room(yb) {
        if (this.len + yb <= this.buf.length) return;
        const bb = new Uint8Array(Math.max(2 * this.buf.length, this.len + yb));
        bb.set(this.buf.subarray(0, this.len)), this.buf = bb, this.view = new DataView(bb.buffer)
      }
      u8(yb) {
        this.room(1), this.buf[this.len++] = yb
      }
      tagged(yb, bb, Wy) {
        this.room(1 + bb), this.buf[this.len++] = yb, 1 === bb ? this.view.setUint8(this.len, Wy) : 2 === bb ? this.view.setUint16(this.len, Wy) : this.view.setUint32(this.len, Wy), this.len += bb
      }
      signed(yb, bb, Wy) {
        this.room(1 + bb), this.buf[this.len++] = yb, 1 === bb ? this.view.setInt8(this.len, Wy) : 2 === bb ? this.view.setInt16(this.len, Wy) : this.view.setInt32(this.len, Wy), this.len += bb
      }
      f64(yb) {
        this.room(9), this.buf[this.len++] = 203, this.view.setFloat64(this.len, yb), this.len += 8
      }
      raw(yb) {
        this.room(yb.length), this.buf.set(yb, this.len), this.len += yb.length
      }
      bytes() {
        return this.buf.slice(0, this.len)
      }
    }

    function vP(yb, bb, Wy, Uy, hy, fy, Zy) {
      bb < Uy ? yb.u8(Wy | bb) : null !== hy && bb < 256 ? yb.tagged(hy, 1, bb) : bb < 65536 ? yb.tagged(fy, 2, bb) : yb.tagged(Zy, 4, bb)
    }

    function iP(yb, bb) {
      switch (typeof bb) {
        case "undefined":
          return void yb.raw(Mc);
        case "boolean":
          return void yb.u8(bb ? 195 : 194);
        case "number":
          return void
          function(yb, bb) {
            bb >>> 0 === bb ? bb < 128 ? yb.u8(bb) : bb < 256 ? yb.tagged(204, 1, bb) : bb < 65536 ? yb.tagged(205, 2, bb) : yb.tagged(206, 4, bb) : (bb | 0) === bb ? bb >= -32 ? yb.u8(255 & bb) : bb >= -128 ? yb.signed(208, 1, bb) : bb >= -32768 ? yb.signed(209, 2, bb) : yb.signed(210, 4, bb) : yb.f64(bb)
          }(yb, bb);
        case "string": {
          const Wy = Gc.encode(bb);
          return vP(yb, Wy.length, 160, 32, 217, 218, 219), void yb.raw(Wy)
        }
        case "object":
          break;
        default:
          return void yb.u8(192)
      }
      if (null === bb) yb.u8(192);
      else if (Array.isArray(bb)) {
        vP(yb, bb.length, 144, 16, null, 220, 221);
        for (const Wy of bb) iP(yb, Wy)
      } else if (bb instanceof Uint8Array) vP(yb, bb.length, 0, 0, 196, 197, 198), yb.raw(bb);
      else {
        const Wy = Object.keys(bb);
        vP(yb, Wy.length, 128, 0, null, 222, 223);
        for (const Uy of Wy) iP(yb, Uy), iP(yb, bb[Uy])
      }
    }
    const Mc = new Uint8Array([212, 0, 0]);
    var Yc = Wy(41074),
      Xc = Wy(41079),
      nc = Wy(39525),
      uc = Wy(39543),
      rP = Wy(3004);
    const Hc = [1e3, 3e3, 9e3];
    class aP {
      constructor(yb) {
        this.host = yb, this.sets = new Map, this.table = [], this.generation = 0, this.rh = !1
      }
      onEvent(yb) {
        const bb = function(yb) {
          if (yb.byteLength !== ey.Wc) return null;
          const bb = new DataView(yb.buffer, yb.byteOffset, yb.byteLength);
          return {
            want: bb.getUint16(0, !0),
            release: bb.getUint16(2, !0)
          }
        }(yb);
        bb && !this.rh && (bb.release !== ey.Zc && this.release(bb.release), bb.want !== ey.Zc && this.want(bb.want))
      }
      reset(yb) {
        if (!this.rh) {
          for (const [yb, bb] of this.sets) "ready" === bb.state && this.releaseAll(bb.distinct), this.sets.delete(yb);
          this.table = yb, this.generation++
        }
      }
      dispose() {
        if (this.rh) return;
        this.rh = !0, this.generation++, this.table = [];
        const yb = [...this.sets.values()];
        this.sets.clear();
        let bb = null;
        for (const Uy of yb)
          for (const yb of "ready" === Uy.state ? Uy.distinct : []) try {
            this.host.Qoy(yb)
          } catch (Wy) {
            bb ??= {
              error: Wy
            }
          }
        if (bb) throw bb.error
      }
      isReady(yb) {
        var bb;
        return "ready" === (null === (bb = this.sets.get(yb)) || void 0 === bb ? void 0 : bb.state)
      }
      want(yb) {
        const bb = this.sets.get(yb);
        if ("loading" === (null === bb || void 0 === bb ? void 0 : bb.state)) return bb.wanted = !0, void this.capAnswer(yb, bb);
        if ("ready" === (null === bb || void 0 === bb ? void 0 : bb.state)) return void this.host.sendReady(pc(yb, bb.images, bb.size));
        const Wy = this.table[yb];
        if (!Wy || 1 !== Wy.urls.length && Wy.urls.length !== kU.Nb.CubeFaces) return this.host.sendReady(Lc(yb)), void this.host.onLoadFailed(yb, "", new Error(`no image set ${yb}`));
        const Uy = {
          state: "loading",
          wanted: !0
        };
        this.sets.set(yb, Uy), this.load(yb, Wy, Uy, this.generation, 0), this.capAnswer(yb, Uy)
      }
      capAnswer(yb, bb) {
        this.host.wait(4e3, (() => {
          this.sets.get(yb) === bb && bb.wanted && this.host.sendReady(Lc(yb))
        }))
      }
      load(yb, bb, Wy, Uy, hy) {
        const fy = [...new Set(bb.urls)];
        Promise.allSettled(fy.map((yb => this.host.loadImage(yb, bb.orientation)))).then((Zy => {
          const cb = Zy.flatMap((yb => "fulfilled" === yb.status ? [yb.value] : [])),
            Py = Uy === this.generation && this.sets.get(yb) === Wy,
            oy = Zy.findIndex((yb => "rejected" === yb.status));
          if (!Py || !Wy.wanted) return this.rh ? void this.releaseAfterDispose(cb.map(Fc)) : (this.releaseAll(cb.map(Fc)), void(Py && this.sets.delete(yb)));
          oy < 0 ? this.loaded(yb, bb, fy, cb) : (this.releaseAll(cb.map(Fc)), this.host.sendReady(Lc(yb)), hy < Hc.length ? this.host.wait(Hc[hy], (() => {
            Uy === this.generation && this.sets.get(yb) === Wy && (Wy.wanted ? this.load(yb, bb, Wy, Uy, hy + 1) : this.sets.delete(yb))
          })) : (this.sets.delete(yb), this.host.onLoadFailed(yb, fy[oy], Zy[oy].reason)))
        }))
      }
      loaded(yb, bb, Wy, Uy) {
        const [hy] = Uy, fy = [hy.width, hy.height], Zy = Uy.every((yb => yb.width === fy[0] && yb.height === fy[1])), cb = bb.urls.length === kU.Nb.CubeFaces;
        if (!Zy || fy[0] <= 0 || fy[1] <= 0 || fy[0] > 65535 || fy[1] > 65535 || cb && fy[0] !== fy[1]) {
          this.releaseAll(Uy.map(Fc)), this.sets.delete(yb), this.host.sendReady(Lc(yb));
          const Wy = Uy.map((yb => `${yb.width}x${yb.height}`));
          return void this.host.onLoadFailed(yb, bb.urls[0], new Error(`set ${yb}'s images can't make its texture: ${Wy.join(", ")}`))
        }
        const Py = bb.urls.map((yb => Uy[Wy.indexOf(yb)].id)),
          oy = Uy.map(Fc);
        this.sets.set(yb, {
          state: "ready",
          images: Py,
          distinct: oy,
          size: fy
        }), this.host.sendReady(pc(yb, Py, fy))
      }
      release(yb) {
        const bb = this.sets.get(yb);
        "loading" === (null === bb || void 0 === bb ? void 0 : bb.state) ? bb.wanted = !1: "ready" === (null === bb || void 0 === bb ? void 0 : bb.state) && (this.releaseAll(bb.distinct), this.sets.delete(yb))
      }
      releaseAll(yb) {
        for (const bb of yb) this.host.Qoy(bb)
      }
      releaseAfterDispose(yb) {
        for (const bb of yb) try {
          this.host.Qoy(bb)
        } catch {}
      }
    }

    function Fc(yb) {
      return yb.id
    }

    function pc(yb, bb, Wy) {
      const Uy = new Uint8Array(kU.Nb.SkyImagesReadyBytes),
        hy = new DataView(Uy.buffer);
      return hy.setUint16(0, yb, !0), hy.setUint16(2, bb.length, !0), hy.setUint16(4, Wy[0], !0), hy.setUint16(6, Wy[1], !0), bb.slice(0, kU.Nb.CubeFaces).forEach(((yb, bb) => {
        hy.setUint32(8 + 4 * bb, yb, !0)
      })), Uy
    }

    function Lc(yb) {
      const bb = new Uint8Array(kU.Nb.SkyImagesReadyBytes),
        Wy = new DataView(bb.buffer);
      return Wy.setUint16(0, yb, !0), Wy.setUint16(2, kU.Nb.Failed, !0), bb
    }
    let Qc = Promise.resolve();
    async function jP(yb, bb) {
      let Wy;
      try {
        Wy = await (0, rP.B)(yb)
      } catch (fy) {
        throw new nc.e("fetch", yb, {
          cause: fy
        })
      }
      const Uy = Qc.then((() => async function(yb, bb) {
        const Wy = new Blob([yb.slice()]);
        let Uy = await createImageBitmap(Wy, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: bb
        });
        const hy = 1024 / Math.max(Uy.width, Uy.height);
        if (hy < 1) {
          const yb = Uy;
          try {
            Uy = await createImageBitmap(yb, {
              resizeWidth: Math.max(1, Math.round(yb.width * hy)),
              resizeHeight: Math.max(1, Math.round(yb.height * hy)),
              resizeQuality: "high",
              premultiplyAlpha: "none",
              colorSpaceConversion: "none"
            })
          } finally {
            yb.close()
          }
        }
        return Uy
      }(Wy, bb)));
      let hy;
      Qc = Uy.catch((() => {}));
      try {
        hy = await Uy
      } catch (fy) {
        throw new nc.e("decode", yb, {
          cause: fy
        })
      }
      return {
        id: (0, nc.r)(hy),
        width: hy.width,
        height: hy.height
      }
    }
    var Dc = Wy(2481),
      tP = Wy(33184);
    const wc = Dc.d.length;

    function kP(yb) {
      const bb = [],
        Wy = [];
      Dc.d.forEach(((Uy, hy) => {
        var fy;
        const Zy = null !== (fy = Nc(yb[Uy])) && void 0 !== fy ? fy : tP.m[Uy];
        "custom" === Zy.type ? (Wy.push({
          id: hy,
          kind: kU.Nb.KindCustom,
          set: bb.length,
          earth: null
        }), bb.push({
          urls: [Zy.px, Zy.py, Zy.pz, Zy.nx, Zy.ny, Zy.nz],
          orientation: "none"
        })) : Wy.push({
          id: hy,
          kind: kU.Nb.KindEarth,
          set: 0,
          earth: Zy
        })
      }));
      const Uy = Nc(yb.earth);
      "earth" === (null === Uy || void 0 === Uy ? void 0 : Uy.type) && Wy.push({
        id: wc,
        kind: kU.Nb.KindEarth,
        set: 0,
        earth: Uy
      });
      const hy = bb.length;
      bb.push({
        urls: tP.c.map((yb => tP.f + yb)),
        orientation: "none"
      }), bb.push({
        urls: [tP.i],
        orientation: "flipY"
      }), bb.push({
        urls: [tP.b],
        orientation: "flipY"
      });
      const fy = new Uint8Array(kU.Nb.SkyTableHeaderBytes + Wy.length * kU.Nb.SkyTableEntryBytes),
        Zy = new DataView(fy.buffer);
      return Zy.setUint16(0, hy, !0), Zy.setUint16(2, hy + 1, !0), Zy.setUint16(4, hy + 2, !0), Zy.setUint16(6, Wy.length, !0), Wy.forEach(((yb, bb) => {
        const Wy = kU.Nb.SkyTableHeaderBytes + bb * kU.Nb.SkyTableEntryBytes;
        Zy.setUint16(Wy, yb.id, !0), Zy.setUint8(Wy + 2, yb.kind);
        const Uy = Wy + 4;
        yb.earth ? function(yb, bb, Wy) {
          const Uy = yb;
          let hy = 0,
            fy = 0;
          for (const [Zy, cb] of zP) {
            const yb = Uy[Zy];
            "number" === typeof yb && Number.isFinite(yb) && (bb.setFloat32(Wy + 4 * cb, yb, !0), hy |= 1 << cb)
          }
          for (const [Zy, cb, Py] of Ic) {
            const yb = Uy[Zy];
            Array.isArray(yb) && 3 === yb.length && yb.every((yb => "number" === typeof yb && Number.isFinite(yb))) && (yb.forEach(((yb, Uy) => {
              bb.setFloat32(Wy + Py + 4 * Uy, yb, !0)
            })), hy |= cb)
          }
          xP.forEach(((yb, fy) => {
            let [Zy, cb] = yb;
            const Py = Uy[Zy];
            "number" === typeof Py && Number.isFinite(Py) && (bb.setFloat32(Wy + kU.m.CameraOffsetAt + 4 * fy, Py, !0), hy |= cb)
          }));
          for (const [Zy, cb] of Ac) {
            const yb = Uy[Zy];
            null !== yb && void 0 !== yb && (hy |= cb, yb && (fy |= cb >>> 14))
          }
          bb.setUint32(Wy + kU.m.PresentAt, hy, !0), bb.setUint8(Wy + kU.m.FlagsAt, fy)
        }(yb.earth, Zy, Uy) : Zy.setUint16(Uy, yb.set, !0)
      })), {
        payload: fy,
        sets: bb
      }
    }

    function Nc(yb) {
      if ("object" !== typeof yb || null === yb) return null;
      const bb = yb;
      if ("earth" === bb.type) return yb;
      return "custom" === bb.type && ["px", "py", "pz", "nx", "ny", "nz"].every((yb => {
        const Wy = bb[yb];
        return "string" === typeof Wy && Wy.length > 0
      })) ? yb : null
    }
    const zP = [
        ["inclination", kU.m.Inclination],
        ["turbidity", kU.m.Turbidity],
        ["luminance", kU.m.Luminance],
        ["rayleigh", kU.m.Rayleigh],
        ["mieCoefficient", kU.m.MieCoefficient],
        ["mieDirectionalG", kU.m.MieDirectionalG],
        ["distance", kU.m.Distance],
        ["azimuth", kU.m.Azimuth]
      ],
      Ic = [
        ["sunPosition", kU.m.SunPosition, kU.m.SunPositionAt],
        ["up", kU.m.Up, kU.m.UpAt],
        ["vertexTint", kU.m.VertexTint, kU.m.VertexTintAt]
      ],
      xP = [
        ["xCameraOffset", kU.m.CameraOffsetX],
        ["yCameraOffset", kU.m.CameraOffsetY],
        ["zCameraOffset", kU.m.CameraOffsetZ]
      ],
      Ac = [
        ["useSunPosition", kU.m.UseSunPosition],
        ["dithering", kU.m.Dithering],
        ["infiniteDistance", kU.m.InfiniteDistance]
      ];

    function dc(yb, bb, Wy) {
      const Uy = new bo({
        writeCmd: yb,
        warn: bb,
        followPack: yo(Wy, bb)
      });
      return Uy.start(), Uy
    }

    function yo(yb, bb) {
      return Wy => {
        let Uy = () => {};
        const hy = yb((yb => {
          Uy(), Uy = () => {}, null !== yb ? Uy = yb.subscribe((yb => {
            Wy(function(yb, bb, Wy) {
              if ("object" !== typeof yb || null === yb) return null;
              const Uy = yb.skyBoxes;
              if ("object" !== typeof Uy || null === Uy) return null;
              if ("player" === bb) return Uy;
              return Object.fromEntries(Object.entries(Uy).filter((yb => {
                let [bb, Uy] = yb;
                return !! function(yb) {
                  if ("object" !== typeof yb || null === yb) return !1;
                  return "earth" === yb.type || Object.entries(yb).every((yb => {
                    let [bb, Wy] = yb;
                    return "type" === bb || ("" === (Uy = Wy) || null !== function(yb) {
                      var bb, Wy, Uy;
                      return "string" !== typeof yb ? null : null !== (bb = null === (Wy = WP.exec(yb)) || void 0 === Wy || null === (Uy = Wy.groups) || void 0 === Uy ? void 0 : Uy.base64) && void 0 !== bb ? bb : null
                    }(Uy));
                    var Uy
                  }))
                }(Uy) || (Wy(`Ignoring texture pack skybox ${bb}, whose faces are not all data URLs`, null), !1)
              })))
            }(yb.pack, null === yb.gameSource ? "player" : "customGame", bb))
          })) : Wy(null)
        }));
        return () => {
          hy(), Uy()
        }
      }
    }
    class bo {
      constructor(yb) {
        var bb, Wy, Uy;
        this.host = yb, this.loader = void 0, this.wait = void 0, this.queue = [], this.written = null, this.stopFollowing = () => {}, this.rh = !1, this.wait = null !== (bb = yb.wait) && void 0 !== bb ? bb : (yb, bb) => {
          setTimeout(bb, yb)
        }, this.loader = new aP({
          loadImage: null !== (Wy = yb.loadImage) && void 0 !== Wy ? Wy : jP,
          Qoy: null !== (Uy = yb.Qoy) && void 0 !== Uy ? Uy : nc.t,
          sendReady: yb => {
            this.queue.push({
              kind: kU.Nb.SkyImagesReady,
              payload: yb
            })
          },
          onLoadFailed: (bb, Wy, Uy) => {
            yb.warn(`sky image set ${bb} (${Wy}) didn't load: the last sky stays`, Uy)
          },
          wait: this.wait
        })
      }
      start() {
        this.wait(uc.d, (() => {
          null === this.written && this.write({})
        })), this.stopFollowing = this.host.followPack((yb => {
          this.write(null !== yb && void 0 !== yb ? yb : {})
        }))
      }
      onEvent(yb) {
        this.loader.onEvent(yb)
      }
      drain() {
        if (0 === this.queue.length) return;
        let yb = 0;
        for (; yb < this.queue.length && this.host.writeCmd(this.queue[yb].kind, 0, this.queue[yb].payload);) yb++;
        yb > 0 && this.queue.splice(0, yb)
      }
      dispose() {
        this.rh = !0, this.stopFollowing(), this.queue = [], this.loader.dispose()
      }
      write(yb) {
        if (this.rh) return;
        const bb = kP(yb);
        var Wy, Uy;
        this.written && (Wy = this.written, Uy = bb, Wy.payload.length === Uy.payload.length && Wy.payload.every(((yb, bb) => yb === Uy.payload[bb])) && Wy.sets.length === Uy.sets.length && Wy.sets.every(((yb, bb) => {
          const Wy = Uy.sets[bb];
          return yb.orientation === Wy.orientation && yb.urls.length === Wy.urls.length && yb.urls.every(((yb, bb) => yb === Wy.urls[bb]))
        }))) || (this.written = bb, this.loader.reset(bb.sets), this.queue = this.queue.filter((yb => yb.kind !== kU.Nb.SkyImagesReady)), this.queue.push({
          kind: kU.Nb.SkyTable,
          payload: bb.payload
        }))
      }
    }
    const WP = /^data:[\w.+/-]*;base64,(?<base64>[A-Za-z0-9+/]*={0,2})$/;
    var UP = Wy(2279),
      hP = Wy(2321),
      fP = Wy(135),
      ZP = Wy(161),
      co = Wy(2288),
      PP = Wy(2290),
      oP = Wy(229),
      BP = Wy(234),
      KP = Wy(2299),
      eP = Wy(105),
      qo = Wy(240),
      sP = Wy(39322);
    class SP {
      constructor() {
        this.id = null, this.sentMs = null, this.roundTripMs = null, this.stopReplies = void 0, this.stopReplies = (0, Fh.j)(mh.K, (yb => {
          this.onReply((0, af.e)(mh.K, yb), performance.now())
        }))
      }
      onFrame(yb, bb) {
        null === this.id ? this.id = yb : yb !== this.id && (this.id = yb, this.sentMs = document.hidden ? null : bb)
      }
      onVisibilityChange() {
        this.sentMs = null
      }
      onReply(yb, bb) {
        yb === this.id && null !== this.sentMs && (this.roundTripMs = Math.round(bb - this.sentMs), this.sentMs = null)
      }
      take() {
        const yb = this.roundTripMs;
        return this.roundTripMs = null, yb
      }
      stop() {
        this.stopReplies()
      }
    }
    class EP {
      constructor() {
        this.sampled = 0, this.timed = 0, this.frameUs = 0, this.primed = !1, this.windowTimed = 0, this.windowUs = 0
      }
      onFrame(yb, bb, Wy, Uy) {
        const hy = yb - this.sampled >>> 0,
          fy = bb - this.timed >>> 0,
          Zy = Wy - this.frameUs >>> 0,
          cb = this.primed;
        return this.sampled = yb, this.timed = bb, this.frameUs = Wy, this.primed = !0, !(!cb || hy > 64 || fy > 64) && (Uy && Zy <= 1e6 * fy && (this.windowTimed += fy, this.windowUs += Zy), Uy && hy > 0)
      }
      reset() {}
      snapshotAndReset() {
        const yb = this.windowTimed > 0 ? this.windowUs / this.windowTimed / 1e3 : null;
        return this.windowTimed = 0, this.windowUs = 0, {
          passMs: yb,
          submitToDoneMs: null
        }
      }
    }
    const lP = {
      pacedShare: null,
      switchesPerHour: null,
      lagP50Ms: null,
      lagP90Ms: null,
      joinLagP90Ms: null
    };
    class mo {
      constructor() {
        this.samples = new Float64Array(4096), this.count = 0
      }
      add(yb, bb) {
        const Wy = Math.min(4096, this.count + bb);
        this.samples.fill(yb, this.count, Wy), this.count = Wy
      }
      clear() {
        this.count = 0
      }
      take(yb) {
        const bb = this.count;
        if (this.count = 0, bb < 30) return null;
        const Wy = this.samples.subarray(0, bb).sort();
        return yb.map((yb => Wy[Math.min(bb - 1, Math.floor(yb * bb))]))
      }
    }
    class CP {
      constructor() {
        this.word = 0, this.lagUs = 0, this.primed = !1, this.lastDrawnMs = -1, this.tieredMs = 0, this.pacedMs = 0, this.switches = 0, this.lags = new mo, this.inJoin = !1, this.rose = !1, this.joinLags = new mo, this.joinLagP90Ms = null
      }
      onFrame(yb, bb, Wy, Uy, hy) {
        const fy = yb.headerWord(kU.x.Pacing),
          Zy = yb.headerWord(kU.x.PacingLagUs),
          cb = (fy >>> kU.F.LagsShift) - (this.word >>> kU.F.LagsShift) & kU.F.CountMask,
          Py = (fy >>> kU.F.SwitchesShift) - (this.word >>> kU.F.SwitchesShift) & kU.F.CountMask,
          oy = cb > 0 ? (Zy - this.lagUs >>> 0) / cb / 1e3 : 0,
          By = this.primed && cb <= 64 && Py <= 2 && oy <= 6e4;
        if (this.rose = 0 !== (fy & ~this.word & kU.F.Joining), this.word = fy, this.lagUs = Zy, this.primed = !0, 0 !== (fy & kU.F.Tiered)) {
          if (0 !== (fy & kU.F.Joining)) this.rose && (this.inJoin = !0, this.joinLags.clear()), this.inJoin && By && Uy && cb > 0 && this.joinLags.add(oy, cb);
          else if (this.inJoin) {
            var Ky, ey;
            this.inJoin = !1, this.joinLagP90Ms = null !== (Ky = null === (ey = this.joinLags.take([.9])) || void 0 === ey ? void 0 : ey[0]) && void 0 !== Ky ? Ky : null
          }
          if (hy) {
            if (By && (this.switches += Py, cb > 0 && this.lags.add(oy, cb)), Wy) {
              if (this.lastDrawnMs >= 0 && bb - this.lastDrawnMs <= 250) {
                const yb = bb - this.lastDrawnMs;
                this.tieredMs += yb, (fy & kU.F.AheadMask) > 0 && (this.pacedMs += yb)
              }
              this.lastDrawnMs = bb
            }
          } else this.lastDrawnMs = -1
        } else this.lastDrawnMs = -1
      }
      onJoin() {
        this.takeWindow(), this.rose || (this.inJoin = !1, this.joinLags.clear()), this.lastDrawnMs = -1
      }
      snapshotAndReset(yb) {
        const bb = this.takeWindow(),
          Wy = this.joinLagP90Ms;
        return this.joinLagP90Ms = null, yb ? {
          ...bb,
          joinLagP90Ms: Wy
        } : {
          ...lP,
          joinLagP90Ms: Wy
        }
      }
      unsent(yb) {
        this.joinLagP90Ms ??= yb.joinLagP90Ms
      }
      takeWindow() {
        var yb, bb;
        const Wy = this.tieredMs >= 2e3,
          Uy = this.lags.take([.5, .9]),
          hy = {
            pacedShare: Wy ? this.pacedMs / this.tieredMs : null,
            switchesPerHour: Wy ? 36e5 * this.switches / this.tieredMs : null,
            lagP50Ms: null !== (yb = null === Uy || void 0 === Uy ? void 0 : Uy[0]) && void 0 !== yb ? yb : null,
            lagP90Ms: null !== (bb = null === Uy || void 0 === Uy ? void 0 : Uy[1]) && void 0 !== bb ? bb : null
          };
        return this.tieredMs = 0, this.pacedMs = 0, this.switches = 0, hy
      }
    }
    var TP = Wy(8390),
      VP = Wy(2269),
      JP = Wy(39508);
    const go = {
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

    function GP(yb) {
      return new OP(yb)
    }
    class OP {
      constructor(yb) {
        this.shell = yb, this.tracker = new PP.d, this.gpu = new EP, this.pacing = new CP, this.timers = [], this.inGameAtLastFlush = !1, this.hasFlushedSinceConnect = !1, this.sendsDropped = 0, this.pendingLightFailures = 0, this.unsentPage = null, this.game = null, this.fpsSpanStartMs = -1, this.fpsFrames = 0, this.fpsOverTime = null, this.firstSpanFps = null, this.initialFps = null, this.ping = new SP, this.pacedCpuMs = 0, this.onVisibility = () => {
          this.tracker.onVisibilityChange(), this.ping.onVisibilityChange(), !document.hidden && this.fpsSpanStartMs >= 0 && (this.fpsFrames = 0, this.fpsSpanStartMs = performance.now())
        }, (0, TP.b)(yb.backend, yb.canvas, yb.adapterVendor), this.tracker.start((() => !yb.inGame()), this.gpu, "wasm"), document.addEventListener("visibilitychange", this.onVisibility), this.timers.push(setInterval((() => {
          this.flush(), this.fpsOverTime = null, this.initialFps = null
        }), 1e4), setInterval((() => {
          this.followGame() && (this.hasFlushedSinceConnect || (this.flush(), this.hasFlushedSinceConnect = !0))
        }), 250))
      }
      animationFrame(yb) {
        this.tracker.onAnimationFrame(yb)
      }
      frameRan(yb, bb, Wy, Uy) {
        this.ping.onFrame(yb.headerWord(kU.x.PingSent), Wy);
        const hy = this.tracker;
        this.pacing.onFrame(yb, bb, "drawn" === Uy, !document.hidden, hy.isSampling());
        const fy = yb.headerWord(kU.x.TickUs) / 1e3 + (0, UU.O)();
        hy.FE(fy);
        const Zy = Math.max(0, Wy - bb - fy);
        if ("drawn" !== Uy) return void("paced" === Uy && (this.pacedCpuMs += Zy));
        this.followGame(), hy.onFrameStart(bb);
        this.gpu.onFrame(yb.headerWord(kU.x.GpuSampled), yb.headerWord(kU.x.GpuTimed), yb.headerWord(kU.x.GpuFrameUs), hy.isSampling()) && hy.onGpuSampleStarted(), hy.onFrameCpu(Zy + this.pacedCpuMs), this.pacedCpuMs = 0, this.countFpsFrame(bb)
      }
      stop() {
        for (const yb of this.timers) clearInterval(yb);
        this.timers.length = 0, document.removeEventListener("visibilitychange", this.onVisibility), this.ping.stop()
      }
      followGame() {
        const yb = this.shell.joinedGame();
        return yb !== this.game && (this.game = yb, this.tracker.snapshotAndReset(), this.pacing.onJoin(), this.hasFlushedSinceConnect = !1, this.inGameAtLastFlush = !1, this.fpsSpanStartMs = -1, this.fpsFrames = 0, this.pacedCpuMs = 0, this.firstSpanFps = null, this.fpsOverTime = null, this.initialFps = null), null !== yb
      }
      countFpsFrame(yb) {
        if (this.fpsSpanStartMs < 0) {
          if (!this.shell.inGame()) return;
          this.fpsSpanStartMs = yb
        }
        this.fpsFrames++;
        const bb = yb - this.fpsSpanStartMs;
        if (!(bb < 15e3)) {
          if (!document.hidden) {
            const yb = 1e3 * this.fpsFrames / bb;
            this.firstSpanFps ??= yb, this.initialFps = this.firstSpanFps, this.fpsOverTime = yb
          }
          this.fpsFrames = 0, this.fpsSpanStartMs = yb
        }
      }
      flush() {
        const yb = this.followGame(),
          {
            cpuFrameMs: bb,
            refreshHz: Wy,
            cpuBottleneck: hy,
            frameIntervalCv: fy,
            ...Zy
          } = this.tracker.snapshotAndReset(),
          cb = this.shell.inGame(),
          Py = cb && this.inGameAtLastFlush,
          oy = Py ? Zy : co.c,
          By = this.pacing.snapshotAndReset(Py);
        if (this.inGameAtLastFlush = cb, this.pendingLightFailures += this.shell.takeFailedMeshJobs(), !yb) return void this.pacing.unsent(By);
        const Ky = performance.now(),
          qb = (0, KP.s)((0, KP.o)(Ky), this.unsentPage),
          Sy = function(yb, bb, Wy, hy, fy, Zy, cb, Py) {
            var oy, By, Ky;
            const ey = {},
              {
                canvas: qb
              } = yb;
            for (const sy of (0, hP.d)()) {
              const Sy = sy.name;
              let Ey;
              if ((0, fP.j)(Sy)) Ey = (0, KP.e)(Sy);
              else if ((0, KP.j)(Sy)) Ey = Py[Sy];
              else switch (Sy) {
                case "fps":
                  Ey = hy;
                  break;
                case "fC":
                  Ey = fy;
                  break;
                case "BC":
                  Ey = (0, VP.u)((0, JP.g)().n);
                  break;
                case "eC":
                  Ey = Math.max(qb.width, qb.height);
                  break;
                case "sC":
                  Ey = Math.min(qb.width, qb.height);
                  break;
                case "lC":
                  Ey = navigator.hardwareConcurrency || null;
                  break;
                case "pB":
                  Ey = (0, wh.getWebGpuSupported)();
                  break;
                case "rK":
                  Ey = null === yb.fallbackReason ? null : go[yb.fallbackReason];
                  break;
                case "JC":
                  Ey = bb.cpuFrameMs;
                  break;
                case "RC":
                  Ey = bb.refreshHz;
                  break;
                case "YC":
                  Ey = bb.cpuBottleneck;
                  break;
                case "nC":
                  Ey = bb.frameIntervalCv;
                  break;
                case "hK":
                  Ey = bb.frameMs;
                  break;
                case "uC":
                  Ey = bb.tickMs;
                  break;
                case "aT":
                  Ey = bb.mainBusyShare;
                  break;
                case "pC":
                  Ey = bb.mainProbeDelayMs;
                  break;
                case "jT":
                  Ey = bb.longAnimationFramesPerMin;
                  break;
                case "yV":
                  Ey = bb.longAnimationFrameTimeShare;
                  break;
                case "bV":
                  Ey = bb.longAnimationFrameScriptShare;
                  break;
                case "cV":
                  Ey = bb.gpuPassMs;
                  break;
                case "eT":
                  Ey = bb.gpuSubmitToDoneMs;
                  break;
                case "qV":
                  Ey = Wy.pacedShare;
                  break;
                case "lT":
                  Ey = Wy.switchesPerHour;
                  break;
                case "mV":
                  Ey = Wy.lagP50Ms;
                  break;
                case "vV":
                  Ey = Wy.lagP90Ms;
                  break;
                case "iV":
                  Ey = Wy.joinLagP90Ms;
                  break;
                case "cf":
                  Ey = (0, UP.j)(Zy);
                  break;
                case "ZC":
                  Ey = cb;
                  break;
                case "XT":
                case "tf":
                case "rV":
                case "pT":
                case "tV":
                case "wT":
                case "bJ":
                case "zV":
                case "zq":
                case "xV":
                case "yJ":
                case "hV":
                case "fV":
                case "oV":
                case "KV":
                  Ey = null;
                  break;
                case "IK":
                  Ey = (0, wh.getPlatformType)();
                  break;
                case "qJ":
                  Ey = (0, wh.getGpuVendor)();
                  break;
                case "NK":
                  Ey = sP.b[yb.backend];
                  break;
                case "VK":
                  Ey = (0, eP.b)();
                  break;
                case "bq":
                  Ey = (0, wh.getOperatingSystem)();
                  break;
                case "sV":
                  Ey = (0, wh.getTrafficSource)();
                  break;
                case "mq":
                  Ey = null !== (oy = Uy.d.get("gameEntrySource")) && void 0 !== oy ? oy : ZP.f;
                  break;
                case "rC":
                  Ey = bb.frameLimiter;
                  break;
                case "yB":
                  Ey = (0, oP.h)();
                  break;
                case "jK":
                  Ey = null !== (By = (0, BP.e)()) && void 0 !== By ? By : ZP.f;
                  break;
                case "Rq":
                  Ey = (0, oP.d)(qb.width, qb.height);
                  break;
                case "lV":
                  Ey = (0, hP.e)(-(new Date).getTimezoneOffset());
                  break;
                case "qB":
                  Ey = null !== (Ky = yb.fallbackReason) && void 0 !== Ky ? Ky : ZP.f;
                  break;
                case "Bl":
                  Ey = "ready";
                  break;
                case "RV":
                  Ey = (0, wh.getSoftwareRenderer)();
                  break;
                case "VV":
                  Ey = yb.shaderPackRuns() ? "true" : "false";
                  break;
                case "lK":
                  Ey = qo.l;
                  break;
                case "mJ":
                case "JV":
                case "gJ":
                case "GV":
                case "QU":
                  Ey = ZP.f;
                  break;
                default:
                  throw new Error(`Unhandled field name: ${Sy}`)
              }
              if (void 0 === Ey) throw new Error(`Metric ${Sy} has no value`);
              ey[Sy] = Ey
            }
            return ey
          }(this.shell, {
            cpuFrameMs: bb,
            refreshHz: Wy,
            cpuBottleneck: hy,
            frameIntervalCv: fy,
            ...oy
          }, By, this.fpsOverTime, this.initialFps, this.pendingLightFailures, this.ping.take(), qb);
        if (! function(yb, bb, Wy) {
            return (0, tW.e)(), yb(sy.j.Send, bb, Wy)
          }(this.shell.writeCmd, ey.Vc, function(yb) {
            const bb = (0, Hy.d)((0, Nb.g)(yb)),
              Wy = new Uint8Array(sy.be.BYTES + bb.length);
            return new DataView(Wy.buffer).setUint16(0, Nb.d.AnalyticsUpdate, !0), Wy.set(bb, sy.be.BYTES), Wy
          }(Sy))) return this.unsentPage = qb, this.pacing.unsent(By), void(0 === this.sendsDropped++ && console.warn("[wasm-client] an analytics update found the cmd ring full: dropped"));
        this.unsentPage = null, this.pendingLightFailures -= Math.min(this.pendingLightFailures, UP.g), (0, KP.m)(this.fpsOverTime, this.initialFps, Sy, Ky)
      }
    }
    var RP = Wy(38206);

    function vo(yb, bb, Wy) {
      const Uy = new Map;
      return (0, RP.b)(((yb, Wy, Uy) => bb.Df(yb, Wy, Uy)), ((bb, Wy, hy) => {
        const fy = `${bb},${Wy},${hy}`;
        return Uy.has(fy) || Uy.set(fy, (0, Fb.e)(yb, bb, Wy, hy)), Uy.get(fy)
      }), Wy)
    }
    var io = Wy(38215),
      MP = Wy(39219);

    function YP(yb) {
      const bb = null !== yb && 0 !== (sy.s.playerFlags(yb.api.apiView, 0) & sy.Od.CursorAim);
      bb !== (0, MP.o)() && (0, MP.E)(bb, null !== yb)
    }

    function XP(yb) {
      return (0, lU.c)(mh.D, yb)
    }
    const nP = new fy.i((yb => Wy(41083)(`./${yb}/${yb}Client`)));
    let uP = null,
      ro = null;
    async function HP(yb) {
      uP ??= Wy.e(27).then((() => Wy(37793))).then((yb => {
        ro = yb.createDefaultClientPlugins
      }), (yb => {
        throw uP = null, yb
      })), await Promise.all([nP.load(yb), uP])
    }

    function ao(yb) {
      yb.load(new Hb(QU, new th))
    }
    let FP = !1;
    const pP = new WeakMap;

    function LP(yb) {
      try {
        yb()
      } catch (bb) {
        console.error("[bloxd-wasm-client] a session-end step failed", bb)
      }
    }

    function QP(yb, bb) {
      ! function() {
        var yb, bb;
        pU.d.volume();
        const Wy = pU.d;
        null === (yb = Wy._autoResume) || void 0 === yb || yb.call(Wy), null === (bb = Wy._autoSuspend) || void 0 === bb || bb.call(Wy)
      }(), bb.audio.prepare();
      const Wy = new Ty(bb.core, bb.memory, bb.audio);
      let fy;
      try {
        fy = new eh(Wy, bb.options)
      } catch (ey) {
        return yb.crash(sh.x, ey), null
      }(0, Py.f)(qf(Wy, fy));
      const By = new Vc({
        running: yb,
        api: Wy,
        core: bb.core,
        memory: bb.memory,
        staleOr: bb.staleOr,
        reportFault: bb.reportReplayFault,
        options: bb.options,
        sessionInfo: bb.sessionInfo,
        replayShaderPack: bb.replayShaderPack
      });
      (0, UU.F)();
      const Ky = new uU({
        api: Wy,
        tables: fy,
        sessionInfo: bb.sessionInfo,
        gameFactory: yb => nP.loadedFactory(yb),
        defaultPlugins: (yb, bb, Wy, Uy) => {
          if (null === ro) throw new Error("The default plugins started before they loaded");
          return ro(yb, bb, Wy, Uy)
        },
        serverOptions: bb.options,
        onNetEvent: yb => {
          By.netEvent(yb), bb.onNetEvent(yb)
        },
        setLocalOptions: bb => {
          gP(yb, {
            changes: bb,
            reset: !1
          })
        },
        playSound: (yb, Wy, Uy, hy, fy, Zy, cb) => bb.audio.playGame(yb, Wy, Uy, hy, fy, Zy, cb),
        onSessionEnd: () => {
          LP(hy.n), LP(AU), LP((() => {
            Uy.d.set({
              openInGameMenuName: null
            })
          })), LP((() => {
            bb.audio.cancelPreload()
          }))
        },
        beforeWrite: bb.beforeWrite,
        beforeOp: bb.beforeOp,
        cameraScreen: xh,
        showCameraFacing: dU,
        onEventOverflow: bb.onEventOverflow,
        screenBandY: cb.h,
        replayEntities: By.entityHooks,
        hasPackModel: bb.hasPackModel
      });
      return Ky.attach(yb), pP.set(Ky, By), FU(Ky.items, bb.audio),
        function(yb) {
          yb.setClientFreeCameraGrant("isDev", !1);
          const bb = bb => {
            yb.setClientFreeCameraGrant("hasDeveloperRank", bb.playerHasRank("developer"))
          };
          (0, Zy.h)("userContextUpdated", bb)
        }(Ky), FP || (FP = !0, (0, Zy.h)("appManagerUpdated|openInGameMenuName", (yb => {
          !yb && (0, oy.e)().includes("InGameMenu") && (0, oy.g)("InGameMenu")
        }))), Ky
    }

    function jo(yb) {
      try {
        yb.closeGame()
      } finally {
        var bb;
        null === (bb = pP.get(yb)) || void 0 === bb || bb.stop(), pP.delete(yb)
      }
    }
  },
  39322: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => Uy
    });
    const Uy = {
      webgpu: "rust_webgpu",
      webgl: "rust_webgl2",
      webgl1: "rust_webgl1"
    }
  },
  39307: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => hy,
      f: () => Zy
    });
    const Uy = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;

    function hy(yb) {
      if (yb instanceof WebAssembly.RuntimeError) return !0;
      const bb = yb instanceof Error ? yb.stack : void 0;
      return "string" === typeof bb && Uy.test(bb)
    }
    const fy = 500;

    function Zy(yb) {
      let bb = "[object Object]";
      try {
        bb = String(yb)
      } catch {}
      if ("[object Object]" !== bb) return bb;
      try {
        var Wy, Uy;
        return null !== (Wy = null === (Uy = JSON.stringify(yb)) || void 0 === Uy ? void 0 : Uy.slice(0, fy)) && void 0 !== Wy ? Wy : bb
      } catch {
        return bb
      }
    }
  },
  8556: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => hy,
      g: () => fy
    });
    var Uy = Wy(8504);
    const hy = "Air",
      fy = Object.freeze(new Uy.h(hy, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);