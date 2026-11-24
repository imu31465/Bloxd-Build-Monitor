export const id = 57;
export const ids = [57];
export const modules = {
  42890: (pp, ip, cp) => {
    var Op = {
      "./bedwars/bedwarsClient": [39456, 9],
      "./bridgeBattle/bridgeBattleClient": [39460, 10],
      "./buildAFactory2/buildAFactory2Client": [38704, 76, 75, 74, 230, 225, 11],
      "./classic/classicClient": [39464, 12],
      "./clutch/clutchClient": [39472, 13],
      "./containmentBreach/containmentBreachClient": [39474, 224, 14],
      "./cooking/cookingClient": [39608, 15],
      "./defusal/defusalClient": [39617, 16],
      "./frontline/frontlineClient": [39623, 76, 75, 74, 17],
      "./goalRush/goalRushClient": [39631, 18],
      "./luckyBedwars/luckyBedwarsClient": [39640, 19],
      "./ninetyNineNights/ninetyNineNightsClient": [39642, 20],
      "./oneBlock/oneBlockClient": [39649, 21],
      "./plots/plotsClient": [39655, 247, 224, 22],
      "./pvpCiv/pvpCivClient": [39735, 23],
      "./skyIslands/skyIslandsClient": [39744, 24],
      "./skyblock/skyblockClient": [38739, 76, 239, 230, 192, 25],
      "./tsunami/tsunamiClient": [39753, 26]
    };

    function op(pp) {
      if (!cp.o(Op, pp)) return Promise.resolve().then((() => {
        var ip = new Error("Cannot find module '" + pp + "'");
        throw ip.code = "MODULE_NOT_FOUND", ip
      }));
      var ip = Op[pp],
        op = ip[0];
      return Promise.all(ip.slice(1).map(cp.e)).then((() => cp(op)))
    }
    op.keys = () => Object.keys(Op), op.id = 42890, pp.exports = op
  },
  36591: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Dp,
      c: () => xp,
      g: () => Yp,
      h: () => Lp,
      l: () => Hp
    });
    var Op = cp(643),
      op = cp(1779),
      Ip = cp(4911);
    class Sp {
      constructor(pp, ip) {
        this.width = pp, this.TA = ip, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(pp * ip)
      }
      push(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const cp = this.data,
          Op = this.next * this.width;
        for (let op = 0; op < this.width; op++) cp[Op + op] = pp[ip + op];
        this.next = (this.next + 1) % this.TA, this.size = Math.min(this.size + 1, this.TA)
      }
      rows() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1 / 0;
        const cp = [],
          Op = (this.next - this.size + this.TA) % this.TA;
        for (let op = 0; op < this.size; op++) {
          const Ip = (Op + op) % this.TA * this.width;
          this.data[Ip + pp] >= ip && cp.push(Array.from(this.data.subarray(Ip, Ip + this.width)))
        }
        return cp
      }
      lines() {
        return this.rows().map((pp => pp.join(",")))
      }
    }
    const xp = 10,
      Lp = {
        idle: 0,
        aW: 1,
        FX: 2,
        Al: 3,
        Hw: 4
      },
      Yp = {
        none: 0,
        skipped: 1,
        paced: 2,
        drawn: 3
      },
      Dp = {
        lockGained: 1,
        lockLost: 2,
        lockError: 3,
        visible: 4,
        hidden: 5,
        focus: 6,
        blur: 7,
        jsClient: 8,
        wasmClient: 9,
        droppedCopies: 10,
        stepsLost: 11,
        cameraSetsLost: 12
      },
      Ap = 12e3,
      Pp = ["nowMs", "dtMs", "rawX", "rawY", "turnedX", "turnedY", "outcome", "velocityX", "velocityY", "limit"],
      Wp = ["timeStamp", "nowMs", "movementX", "movementY", "locked"],
      yp = ["nowMs", "dtMs", "heading", "pitch", "kind"],
      Up = ["nowMs", "source", "headingBefore", "pitchBefore", "headingAfter", "pitchAfter"],
      wp = ["nowMs", "change", "count"];

    function vp(pp) {
      return "js" === pp ? Dp.jsClient : Dp.wasmClient
    }
    class tp {
      constructor() {
        this.steps = new Sp(xp, Ap), this.events = new Sp(Wp.length, Ap), this.frames = new Sp(yp.length, Ap), this.cameraSets = new Sp(Ip.e, 256), this.changes = new Sp(wp.length, 256)
      }
    }
    const Hp = new class {
      constructor() {
        this.rings = null, this.sample = new Float64Array(Wp.length), this.startedClient = null, this.startedAtMs = 0
      }
      get client() {
        return this.startedClient
      }
      start(pp, ip) {
        this.startedClient = pp, this.startedAtMs = performance.now(), null !== this.rings ? this.change(vp(pp)) : ip && this.allocate()
      }
      lockGained() {
        this.allocate(), this.change(Dp.lockGained)
      }
      allocate() {
        null === this.rings && (this.rings = new tp, null !== this.startedClient && this.changeAt(this.startedAtMs, vp(this.startedClient), 1))
      }
      step(pp, ip) {
        var cp;
        pp[ip + 6] !== Lp.Hw && (null === (cp = this.rings) || void 0 === cp || cp.steps.push(pp, ip))
      }
      cameraSet(pp, ip) {
        var cp;
        null === (cp = this.rings) || void 0 === cp || cp.cameraSets.push(pp, ip)
      }
      mouseMove(pp, ip) {
        const cp = this.rings;
        if (null === cp) return;
        const Op = this.sample;
        Op[0] = pp.timeStamp, Op[1] = performance.now(), Op[2] = pp.movementX, Op[3] = pp.movementY, Op[4] = ip ? 1 : 0, cp.events.push(Op)
      }
      frame(pp, ip, cp, Op) {
        const op = this.rings;
        if (null === op || Op === Yp.none) return;
        const Ip = this.sample;
        Ip[0] = performance.now(), Ip[1] = pp, Ip[2] = ip, Ip[3] = cp, Ip[4] = Op, op.frames.push(Ip)
      }
      change(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.changeAt(performance.now(), pp, ip)
      }
      changeAt(pp, ip, cp) {
        const Op = this.rings;
        if (null === Op) return;
        const op = this.sample;
        op[0] = pp, op[1] = ip, op[2] = cp, Op.changes.push(op)
      }
      dumpText() {
        var pp, ip;
        const cp = this.rings;
        return [`look records (${this.startedClient}): ${Pp.join(",")}`, ...null !== (pp = null === cp || void 0 === cp ? void 0 : cp.steps.lines()) && void 0 !== pp ? pp : [], `mousemove events: ${Wp.join(",")}`, ...null !== (ip = null === cp || void 0 === cp ? void 0 : cp.events.lines()) && void 0 !== ip ? ip : []].join("\n")
      }
      toJson(pp, ip) {
        var cp;
        const op = pp - 6e4,
          Ip = this.rings,
          Sp = function(pp, ip) {
            var cp;
            let Op = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            const Ip = null !== (cp = null === pp || void 0 === pp ? void 0 : pp.rows(Op, op)) && void 0 !== cp ? cp : [];
            return {
              columns: ip,
              fromMs: 0 === Ip.length ? null : Ip[0][Op],
              rows: Ip
            }
          };
        return {
          version: Op.c,
          client: null !== (cp = this.startedClient) && void 0 !== cp ? cp : "not started",
          savedAt: (new Date).toISOString(),
          savedAtMs: pp,
          keptMs: 6e4,
          page: window.location.href,
          userAgent: navigator.userAgent,
          devicePixelRatio: window.devicePixelRatio,
          screen: {
            width: window.screen.width,
            height: window.screen.height
          },
          rw: null !== document.pointerLockElement,
          visibility: document.visibilityState,
          ...ip,
          outcomes: Lp,
          frameKinds: Yp,
          changes: Dp,
          lookSteps: Sp(null === Ip || void 0 === Ip ? void 0 : Ip.steps, Pp),
          mouseMoves: Sp(null === Ip || void 0 === Ip ? void 0 : Ip.events, Wp, 1),
          frames: Sp(null === Ip || void 0 === Ip ? void 0 : Ip.frames, yp),
          cameraSets: Sp(null === Ip || void 0 === Ip ? void 0 : Ip.cameraSets, Up),
          pageChanges: Sp(null === Ip || void 0 === Ip ? void 0 : Ip.changes, wp)
        }
      }
      save(pp) {
        const ip = JSON.stringify(this.toJson(performance.now(), pp));
        (0, op.c)(new Blob([ip], {
          type: "application/json"
        }), `bloxd-mouse-look-${(new Date).toISOString().replace(/[:.]/g,"-")}.json`)
      }
    }
  },
  39210: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Ip,
      f: () => op
    });
    var Op = cp(34);

    function op(pp) {
      return "refetchCode" === pp || "devDownloadJson" === pp || pp.startsWith("Plugin")
    }

    function Ip(pp, ip) {
      "refetchCode" !== pp ? "Plugin|MobAiPlugin|ShowPetUi" !== pp ? Promise.all([cp.e(109), cp.e(110), cp.e(105), cp.e(107), cp.e(218)]).then((() => cp(41985))).then((cp => {
        let {
          runClientGameMessage: Op
        } = cp;
        Op(pp, ip)
      })).catch((ip => {
        console.error(`Game message ${pp} failed`, ip)
      })) : Op.m.GA("showPetUi", ip) : Op.m.GA("refetchCode")
    }
  },
  42875: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Op,
      e: () => op
    });
    const Op = ["recording", "freecam", "keyframe"];

    function op() {
      const pp = crypto.getRandomValues(new Uint32Array(2));
      return BigInt(pp[1]) << 32n | BigInt(pp[0])
    }
  },
  34361: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => xp,
      h: () => Lp
    });
    var Op = cp(25);
    const op = 24,
      Ip = "farNametags",
      Sp = 1e5;

    function xp() {
      var pp;
      return null === (pp = Op.c.get("showDistantNametags")) || void 0 === pp || pp
    }

    function Lp() {
      var pp;
      return null !== (pp = function() {
        const pp = new URLSearchParams(window.location.search).get(Ip),
          ip = null === pp || "" === pp ? NaN : Number(pp);
        return Number.isFinite(ip) && ip >= 0 ? Math.min(ip, Sp) : null
      }()) && void 0 !== pp ? pp : xp() ? 0 : op
    }
  },
  42870: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      blockIdOf: () => zL.e,
      clearWasmCameraScreen: () => Io,
      creativeItemIds: () => IO.creativeItemIds,
      decodeMapSettings: () => VL,
      drainTextRerasters: () => ax.d,
      enchantmentPerksOf: () => IO.enchantmentPerksOf,
      endGameHost: () => DY,
      followCursorAim: () => KL,
      followMenuPrefs: () => SI,
      loadAudio: () => IY,
      loadClientGame: () => oY,
      loadTextIcons: () => ax.h,
      rasterText: () => hx.d,
      readBoardToEdit: () => ZL,
      readDrawCensus: () => pY.c,
      setTextHost: () => ax.k,
      setTextLocalPlayer: () => ax.m,
      showInCreativeInvenOf: () => IO.showInCreativeInvenOf,
      startGameHost: () => YY,
      startShellAnalytics: () => gL,
      startSkyFeed: () => AL,
      textChanged: () => ax.p,
      warmText: () => hx.f,
      wasmCameraScreen: () => oo
    });
    cp(36703);
    var Op = cp(25),
      op = cp(37021),
      Ip = cp(39339),
      Sp = cp(34),
      xp = cp(3511),
      Lp = cp(37019),
      Yp = cp(1308),
      Dp = cp(629),
      Ap = cp(38443),
      Pp = cp(4903),
      Wp = cp(40842),
      yp = cp(40769);
    const Up = yp.xb / 4,
      wp = yp.l.PlaySound,
      vp = yp.l.SoundReset,
      tp = Pp.bb.ReplayFailed,
      Hp = Pp.bb.RecorderEvent;
    class dp {
      constructor(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.core = pp, this.memory = ip, this.audio = cp, this.serverIds = new Int32Array(256).fill(yp.Nc), this.kinds = new Uint16Array(256), this.idStr = new Array(256).fill(null), this.indexById = new Map, this.queries = void 0, this.buffer = null, this.viewPtr = -1, this.view = new DataView(new ArrayBuffer(yp.q.BYTES)), this.renderPtr = 0, this.TA = 0, this.renderCapacity = 0, this.render = new Float32Array(0), this.visPtr = 0, this.vis = new Uint8Array(0), this.renderBuffer = null, this.eventsBuffer = null, this.eventsPtr = 0, this.eventsLen = 0, this.events = new DataView(new ArrayBuffer(0)), this.audioView = null, this.scratchPtr = -1, this.corruption = null, this.replay = null, this.queries = new yp.I(pp, (() => {
          this.scratchPtr = -1, this.ensureViews()
        }))
      }
      scratch() {
        return this.scratchPtr < 0 && (this.scratchPtr = this.core.cIp(), this.ensureViews()), this.scratchPtr
      }
      eventBytes(pp, ip) {
        const cp = this.eventView();
        return new Uint8Array(cp.buffer, cp.byteOffset + pp, ip)
      }
      get apiView() {
        return this.ensureViews(), this.view
      }
      ensureViews() {
        this.memory().buffer !== this.buffer && this.reView()
      }
      get localId() {
        return yp.q.localId(this.apiView, 0)
      }
      localDeaths() {
        return yp.q.localDeaths(this.apiView, 0)
      }
      rereadDirectory() {
        const pp = this.apiView,
          ip = yp.q.entRenderPtr(pp, 0),
          cp = yp.q.entVisPtr(pp, 0),
          Op = yp.q.entCapacity(pp, 0);
        if (ip !== this.renderPtr || cp !== this.visPtr || Op !== this.TA || this.renderBuffer !== this.buffer) {
          this.renderPtr = ip, this.visPtr = cp, this.TA = Op, this.renderBuffer = this.buffer;
          const pp = this.memoryView(Float32Array, ip, Op * Up, "the render array"),
            op = this.memoryView(Uint8Array, cp, Op, "the visibility array");
          this.renderCapacity = pp && op ? Op : 0, this.render = pp && op ? pp : new Float32Array(0), this.vis = pp && op ? op : new Uint8Array(0)
        }
      }
      memoryView(pp, ip, cp, Op) {
        try {
          return (0, Wp.l)(pp, this.memory().buffer, ip, cp, Op)
        } catch (op) {
          return this.keepCorruption(op), null
        }
      }
      memoryData(pp, ip, cp, Op) {
        try {
          return (0, Wp.d)(this.memory().buffer, pp, ip, cp, Op)
        } catch (op) {
          return this.keepCorruption(op), null
        }
      }
      reportCorruption(pp) {
        this.keepCorruption(new Wp.b(pp))
      }
      keepCorruption(pp) {
        if (!(pp instanceof Wp.b)) throw pp;
        this.corruption ??= pp
      }
      throwCorruption() {
        if (this.corruption) throw this.corruption
      }
      walk(pp, ip, cp) {
        this.rereadDirectory(), this.throwCorruption();
        const {
          ptr: Op,
          len: op
        } = pp;
        this.eventsPtr = Op, this.eventsLen = op, this.eventsBuffer = null;
        const Ip = this.eventView();
        for (let Yp = 0; Yp < op;) {
          const pp = Ip.getUint32(Yp, !0),
            cp = 65535 & pp,
            Op = pp >>> 16,
            op = Yp + Pp.$;
          if (cp === yp.l.EntitySpawned) {
            var Sp;
            if (Op !== yp.Ab.BYTES) throw Rp(cp, Yp, Op);
            const pp = yp.Ab.serverId(Ip, op);
            this.spawned(pp, yp.Ab.index(Ip, op), yp.Ab.kind(Ip, op)), null === (Sp = ip.entityAdded) || void 0 === Sp || Sp.call(ip, pp)
          } else if ((cp === yp.l.ChunkSlot || cp === yp.l.EntityInfoChanged) && !(0, yp.$d)(cp, Ip, op, Op, ip)) throw Rp(cp, Yp, Op);
          Yp = op + (0, Pp.ue)(Op)
        }
        try {
          var xp;
          null === (xp = ip.afterPrescan) || void 0 === xp || xp.call(ip), this.throwCorruption(), !cp() && this.dispatch(pp, ip, cp) && (this.throwCorruption(), this.applyListener(), ip.afterWalk(pp.kind)), this.throwCorruption()
        } catch (Lp) {
          throw Lp instanceof Wp.b && (this.corruption ??= Lp), Lp
        } finally {
          cp() || null !== this.corruption || this.applyDespawns(op, ip)
        }
      }
      applyDespawns(pp, ip) {
        const cp = this.eventView();
        for (let op = 0; op < pp;) {
          const pp = cp.getUint32(op, !0),
            Ip = op + Pp.$;
          if ((65535 & pp) === yp.l.EntityDespawned && pp >>> 16 === yp.Ab.BYTES) {
            const pp = yp.Ab.serverId(cp, Ip);
            var Op;
            if (this.despawned(pp, yp.Ab.index(cp, Ip))) null === (Op = ip.entityRemoved) || void 0 === Op || Op.call(ip, pp)
          }
          op = Ip + (0, Pp.ue)(pp >>> 16)
        }
        this.rereadDirectory()
      }
      dispatch(pp, ip, cp) {
        const {
          len: Op,
          net: op,
          netOffsets: Ip
        } = pp;
        let Sp = this.eventView(),
          xp = 0;
        for (let jp = 0; jp < Op;) {
          const pp = Sp.getUint32(jp, !0),
            Op = 65535 & pp,
            kp = pp >>> 16,
            qp = jp + Pp.$;
          let Mp = !1;
          if (xp < op.length && Ip[xp] === jp) ip.netEvent(op[xp]), xp++, Mp = !0;
          else if (Op === Pp.bb.LocalPlayerBound) {
            var Lp;
            if (kp !== Pp.Lb) throw Rp(Op, jp, kp);
            null === (Lp = ip.localPlayerBound) || void 0 === Lp || Lp.call(ip, Sp.getInt32(qp, !0)), Mp = !0
          } else if (Op === Pp.bb.LocalHurt) {
            var Yp;
            if (kp !== Pp.Kb) throw Rp(Op, jp, kp);
            null === (Yp = ip.localHurt) || void 0 === Yp || Yp.call(ip, Sp.getInt32(qp, !0), Sp.getFloat32(qp + 4, !0), Sp.getUint32(qp + 8, !0)), Mp = !0
          } else if (Op === Pp.bb.AttackHit) {
            var Dp;
            if (kp !== Pp.e) throw Rp(Op, jp, kp);
            const pp = Sp.getFloat32(qp, !0),
              cp = Sp.getFloat32(qp + 4, !0),
              op = Sp.getFloat32(qp + 8, !0),
              Ip = Sp.getUint32(qp + 12, !0);
            null === (Dp = ip.attackHit) || void 0 === Dp || Dp.call(ip, pp, cp, op, 0 !== (Ip & Pp.o.Crit), 0 !== (Ip & Pp.o.HitSelf))
          } else if (Op === Pp.bb.PhysicsType) {
            var Ap;
            if (kp !== Pp.dc) throw Rp(Op, jp, kp);
            null === (Ap = ip.physicsType) || void 0 === Ap || Ap.call(ip, Sp.getUint32(qp, !0), Sp.getInt32(qp + 4, !0)), Mp = !0
          } else if (Op === Pp.bb.VehicleEffect) {
            var Wp;
            const pp = mp(Sp, qp, kp);
            if (null === pp) throw Rp(Op, jp, kp);
            null === (Wp = ip.vehicleEffect) || void 0 === Wp || Wp.call(ip, pp.op, pp.name, pp.icon, pp.level, pp.durationMs), Mp = !0
          } else if (Op === Pp.bb.ZoomChanged) {
            var Up;
            if (kp !== Pp.Zd) throw Rp(Op, jp, kp);
            null === (Up = ip.zoomChanged) || void 0 === Up || Up.call(ip, Sp.getFloat32(qp, !0), Sp.getUint8(qp + 4)), Mp = !0
          } else if (Op === Pp.bb.ZoomDisabled) {
            var dp;
            if (0 !== kp) throw Rp(Op, jp, kp);
            null === (dp = ip.zoomDisabled) || void 0 === dp || dp.call(ip), Mp = !0
          } else if (Op === Pp.bb.GameCamera) {
            var ep;
            null === (ep = ip.gameCamera) || void 0 === ep || ep.call(ip, new Uint8Array(Sp.buffer, Sp.byteOffset + qp, kp).slice()), Mp = !0
          } else if (Op === yp.l.ChunkSlot || Op === yp.l.EntityInfoChanged);
          else if (Op >= wp && Op <= vp) {
            if (this.audio && !this.audio.onAudioEvent(Op, Sp, qp, kp)) throw Rp(Op, jp, kp)
          } else if (Op >= tp && Op <= Hp) {
            if (this.replay) {
              if (!this.replay.onReplayEvent(Op, Sp, qp, kp)) throw Rp(Op, jp, kp);
              Mp = !0
            }
          } else if (Op >= yp.cd && Op <= yp.dd && Op !== Pp.bb.EnvLighting) {
            if (!(0, yp.$d)(Op, Sp, qp, kp, ip)) throw Rp(Op, jp, kp);
            Mp = !0
          }
          if (Mp) {
            if (cp()) return !1;
            Sp = this.eventView()
          }
          jp = qp + (0, Pp.ue)(kp)
        }
        return !cp()
      }
      applyListener() {
        var pp;
        if (!this.audio) return;
        const ip = yp.q.audioViewPtr(this.apiView, 0),
          cp = this.memory().buffer;
        let Op = this.audioView;
        (null === (pp = Op) || void 0 === pp ? void 0 : pp.buffer) === cp && Op.byteOffset === ip || (Op = (0, Wp.d)(cp, ip, yp.r.BYTES, 8, "the audio view"), this.audioView = Op), Op && this.audio.applyListener(Op)
      }
      indexOf(pp) {
        return this.indexById.get("number" === typeof pp ? pp : +pp)
      }
      isLocal(pp) {
        return pp !== yp.Nc && pp === yp.q.localId(this.apiView, 0)
      }
      sH(pp) {
        const ip = [0, 0, 0];
        return this.readPosition("number" === typeof pp ? pp : +pp, ip) ? ip : null
      }
      readPosition(pp, ip) {
        const cp = this.apiView;
        if (void 0 !== this.indexById.get(pp) && this.isLocal(pp)) {
          for (let pp = 0; pp < 3; pp++) ip[pp] = yp.q.localPos(cp, 0, pp);
          return !0
        }
        return this.readDrawnPosition(pp, ip)
      }
      readDrawnPosition(pp, ip) {
        const cp = this.apiView,
          Op = this.indexById.get(pp);
        if (void 0 === Op || Op >= this.renderCapacity) return ip[0] = ip[1] = ip[2] = NaN, !1;
        const op = Op * Up;
        for (let Ip = 0; Ip < 3; Ip++) ip[Ip] = this.render[op + Ip] + yp.q.origin(cp, 0, Ip);
        return !0
      }
      checkValid(pp) {
        return void 0 !== this.indexOf(pp)
      }
      isAlive(pp) {
        const ip = this.indexOf(pp);
        if (void 0 === ip) return null;
        if (this.ensureViews(), ip >= this.renderCapacity) return null;
        const cp = this.vis[ip];
        return 0 === cp ? null : 0 !== (cp & yp._d.Alive)
      }
      getEntityType(pp) {
        const ip = this.indexOf(pp);
        return void 0 === ip ? this.isLocal("number" === typeof pp ? pp : +pp) ? "Player" : null : jp(this.kinds[ip])
      }
      spawned(pp, ip, cp) {
        if (ip >= 1048576) throw new Wp.b(`entity ${pp} spawned at index ${ip}`);
        this.ensureIndex(ip), this.serverIds[ip] === pp && null !== this.idStr[ip] || (this.idStr[ip] = String(pp)), this.serverIds[ip] = pp, this.kinds[ip] = cp, this.indexById.set(pp, ip)
      }
      despawned(pp, ip) {
        let cp = !1;
        return this.indexById.get(pp) === ip && (this.indexById.delete(pp), cp = !0), ip < this.serverIds.length && this.serverIds[ip] === pp && (this.serverIds[ip] = yp.Nc, this.kinds[ip] = 0, this.idStr[ip] = null), cp
      }
      ensureIndex(pp) {
        const ip = this.serverIds.length;
        if (pp < ip) return;
        let cp = 2 * ip;
        for (; cp <= pp;) cp *= 2;
        const Op = new Int32Array(cp).fill(yp.Nc);
        Op.set(this.serverIds), this.serverIds = Op;
        const op = new Uint16Array(cp);
        op.set(this.kinds), this.kinds = op;
        for (let Ip = ip; Ip < cp; Ip++) this.idStr.push(null)
      }
      eventView() {
        const pp = this.memory().buffer;
        return pp !== this.eventsBuffer && (this.eventsBuffer = pp, this.events = new DataView(pp, this.eventsPtr, this.eventsLen)), this.events
      }
      reView() {
        const pp = this.memory().buffer;
        this.buffer = pp, this.viewPtr < 0 && (this.viewPtr = this.core.OIp()), this.view = new DataView(pp, this.viewPtr, yp.q.BYTES), this.rereadDirectory()
      }
    }

    function ep(pp) {
      return pp >>> yp.b === yp.p.Item
    }

    function jp(pp) {
      var ip, cp;
      const Op = pp & yp.d;
      switch (pp >>> yp.b) {
        case yp.p.Lifeform:
          return null !== (ip = Dp.i[Op]) && void 0 !== ip ? ip : null;
        case yp.p.Throwable:
          return null !== (cp = Ap.k[Op]) && void 0 !== cp ? cp : null;
        case yp.p.Mesh:
          return "Mesh";
        case yp.p.Audio:
          return "AudioEntity";
        case yp.p.Item:
          return "Item";
        default:
          return null
      }
    }
    const kp = new TextDecoder;

    function mp(pp, ip, cp) {
      if (cp < Pp.Cd.HEAD_BYTES) return null;
      const Op = pp.getUint32(ip, !0),
        op = pp.getUint32(ip + 20, !0),
        Ip = pp.getUint32(ip + 24, !0),
        Sp = Pp.Cd.HEAD_BYTES + (0, Pp.ue)(op);
      if (Op !== Pp.Cd.UPDATE && Op !== Pp.Cd.REMOVE || op > cp || Sp + Ip > cp) return null;
      const xp = (cp, Op) => kp.decode(new Uint8Array(pp.buffer, pp.byteOffset + ip + cp, Op)),
        Lp = pp.getFloat64(ip + 12, !0);
      return {
        op: Op,
        level: pp.getFloat64(ip + 4, !0),
        durationMs: Number.isNaN(Lp) ? null : Lp,
        name: xp(Pp.Cd.HEAD_BYTES, op),
        icon: xp(Sp, Ip)
      }
    }

    function Rp(pp, ip, cp) {
      return new Wp.b(`event ${pp} at ${ip} of ${cp} bytes`)
    }
    var qp = cp(337),
      Mp = cp(1234),
      Cp = cp(39210),
      Ep = cp(1975),
      Xp = cp(41225),
      lp = cp(1927),
      Qp = cp(39362),
      Jp = cp(39385),
      Bp = cp(39375),
      Np = cp(40824),
      Tp = cp(2463),
      fp = cp(39356),
      bp = cp(39383);
    const hp = Math.max(yp.lb.BYTES, yp.eb.BYTES, yp.gb.BYTES);

    function ap(pp) {
      if (!(0, bp.e)(pp)) return null;
      const ip = Number(pp);
      return (0 | ip) === ip ? ip : null
    }
    class np {
      constructor(pp) {
        this.api = pp, this.bodyHeading = 0, this.viewHeading = 0, this.defaultPose = (0, fp.i)(), this.defaultPoseRead = !1, this.defaultFov = 0, this.baseFov = 0, this.aspect = 1, this.KO = null, this.entityLive = !1, this.entityFeet = [0, 0, 0], this.entityAim = [0, 0, 0], this.entityHeading = 0, this.localId = yp.Nc, this.localName = String(yp.Nc), this.scratch = null
      }
      readView() {
        this.defaultPoseRead = !1, this.KO = null;
        const pp = this.api.queries.directorView() >= yp.lb.BYTES ? this.scratchView() : null;
        null !== pp && (this.defaultFov = (0, lp.C)(yp.lb.fov(pp, 0)), this.baseFov = (0, lp.C)(yp.lb.baseFov(pp, 0)), this.aspect = yp.lb.aspect(pp, 0), this.bodyHeading = yp.lb.bodyHeading(pp, 0))
      }
      getViewHeading() {
        return this.viewHeading
      }
      setViewHeading(pp) {
        this.viewHeading = pp
      }
      get localPlayerId() {
        const pp = yp.q.localId(this.api.apiView, 0);
        return pp !== this.localId && (this.localId = pp, this.localName = String(pp)), this.localName
      }
      getEntityPosition(pp) {
        return this.readEntity(pp) ? this.entityFeet : null
      }
      getEntityAimPoint(pp) {
        return this.readEntity(pp) ? this.entityAim : null
      }
      getEntityHeading(pp) {
        const ip = ap(pp);
        if (null === ip) return null;
        const cp = yp.q.localId(this.api.apiView, 0);
        return ip === cp && cp !== yp.Nc ? this.viewHeading : this.readEntity(pp) ? this.entityHeading : null
      }
      raycastTerrain(pp, ip, cp) {
        const Op = this.api.queries.cameraSweep(pp[0], pp[1], pp[2], ip[0], ip[1], ip[2], cp);
        return Op < cp - 1e-6 ? Op : null
      }
      getDefaultPose() {
        if (this.defaultPoseRead) return this.defaultPose;
        this.defaultPoseRead = !0;
        const pp = this.defaultPose;
        pp.fov = this.defaultFov;
        const ip = this.api.queries.directorDefaultPose() >= yp.eb.BYTES ? this.scratchView() : null;
        if (null === ip) return pp;
        for (let cp = 0; cp < 3; cp++) pp.position[cp] = yp.eb.eye(ip, 0, cp);
        return pp.heading = yp.eb.heading(ip, 0), pp.pitch = yp.eb.pitch(ip, 0), pp
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
      readEntity(pp) {
        const ip = ap(pp);
        if (null === ip) return !1;
        if (ip === this.KO) return this.entityLive;
        this.KO = ip;
        const cp = this.api.queries.directorEntity(ip) >= yp.gb.BYTES ? this.scratchView() : null;
        if (this.entityLive = null !== cp, null === cp) return !1;
        for (let Op = 0; Op < 3; Op++) this.entityFeet[Op] = yp.gb.feet(cp, 0, Op), this.entityAim[Op] = this.entityFeet[Op];
        return this.entityAim[1] += yp.gb.eyeHeight(cp, 0), this.entityHeading = yp.gb.heading(cp, 0), !0
      }
      scratchView() {
        const pp = this.api.scratch(),
          ip = this.api.memory().buffer,
          cp = this.scratch;
        return null !== cp && cp.buffer === ip && cp.byteOffset === pp ? cp : (this.scratch = this.api.memoryData(pp, hp, 8, "the director's record"), this.scratch)
      }
    }
    const Fp = {
        mode: "default"
      },
      gp = {
        show: () => {},
        clear: () => {}
      };

    function Gp() {
      return "undefined" !== typeof document && "hidden" === document.visibilityState
    }
    class rp {
      constructor(pp) {
        this.options = pp, this.WP = void 0, this.director = void 0, this.latest = Fp, this.pending = void 0, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.look = {
          QE: 0,
          TE: 0
        }, this.pointedAt = {
          heading: 0,
          pitch: 0
        }, this.engaged = !1, this.calledThisFrame = !1, this.holding = !1, this.lastCallMs = 0, this.answeredPose = !1, this.rc = new Int32Array(3 * yp.Dd), this.centresLen = 0, this.centresUnsent = !1, this.next = new Int32Array(3 * yp.Dd), this.WP = new np(pp.api), this.director = new Bp.c(this.WP)
      }
      settingsChanged(pp) {
        let ip = Fp;
        if (pp.length > 0) try {
          ip = (0, Np.c)(pp)
        } catch {}
        this.latest = ip, this.pending = ip
      }
      call(pp, ip, cp, Op, op, Ip) {
        var Sp, xp;
        let Lp;
        this.holding = !1;
        try {
          Lp = this.answer(pp, ip, cp, Op, op, Ip)
        } catch (Pp) {
          var Yp, Dp;
          throw this.answeredPose = !1, null === (Yp = (Dp = this.options).showFacing) || void 0 === Yp || Yp.call(Dp, null), Pp
        }
        const Ap = this.answeredPose && 0 === (Op & yp.ib.Held);
        return this.answeredPose = Lp !== yp.cb.None, this.holding = this.answeredPose && !Ap, null === (Sp = (xp = this.options).showFacing) || void 0 === Sp || Sp.call(xp, this.holding ? this.facing : null), Lp
      }
      holdsView() {
        return this.holding
      }
      answer(pp, ip, cp, Op, op, Ip) {
        this.calledThisFrame = !0, this.engaged = !0, this.lastCallMs = this.now();
        const {
          WP: Sp
        } = this;
        Sp.readView();
        if (0 !== (Op & yp.ib.Held) || Sp.setViewHeading((0, Qp.y)(Sp.bodyHeading)), void 0 !== this.pending) {
          const pp = this.pending;
          this.pending = void 0, this.director.setSettings(pp), this.syncShownSettings()
        }
        this.readLook((0, Tp.i)(ip), (0, Tp.i)(cp), Op, (0, Tp.i)(op), (0, Tp.i)(Ip));
        const xp = this.director.update(pp / 1e3, this.look);
        if (this.syncShownSettings(), this.writeCentres(this.director.getLoadingPositions()), this.hidden() || this.screen().show(this.director.getScreenFade(), this.director.getSettings()), !xp) return yp.cb.None;
        const [Lp, Yp, Dp] = xp.position;
        if (0 === this.options.api.queries.directorPose(Lp, Yp, Dp, (0, Qp.y)(xp.heading), (0, Qp.l)(xp.pitch), (0, lp.o)(xp.fov))) return yp.cb.None;
        if ("default" === this.director.getSettings().mode) return yp.cb.Pose;
        switch (this.facing) {
          case "camera":
            return yp.cb.FaceCamera;
          case "cursor":
            return yp.cb.FaceCursor;
          default:
            return yp.cb.FaceMovement
        }
      }
      afterFrame(pp) {
        pp ? (this.calledThisFrame || (this.holding = !1, this.engaged && this.idle()), this.calledThisFrame = !1) : this.centresLen > 0 && this.hidden() && this.now() - this.lastCallMs > 1e3 && this.setCentres(0), this.centresUnsent && this.sendCentres()
      }
      reset() {
        this.latest = Fp, this.idle()
      }
      restart() {
        const pp = this.holding;
        this.idle(), this.holding = pp
      }
      idle() {
        var pp, ip;
        this.engaged && this.screen().clear(), this.engaged = !1, this.holding = !1, this.director = new Bp.c(this.WP), this.pending = this.latest, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.answeredPose = !1, null === (pp = (ip = this.options).showFacing) || void 0 === pp || pp.call(ip, null), this.setCentres(0)
      }
      syncShownSettings() {
        const pp = this.director.getSettings();
        if (pp === this.shownSettings) return;
        this.shownSettings = pp;
        const ip = (0, Jp.g)(pp);
        this.facing = ip.facing, this.mouseTurns = ip.mouseTurns
      }
      readLook(pp, ip, cp, Op, op) {
        const Ip = this.look,
          Sp = 0 !== (cp & yp.ib.LookPointed);
        if (null === this.mouseTurns && !Sp) return Ip.QE = 0, Ip.TE = 0, void(Ip.pointedAt = void 0);
        let xp;
        Sp && (this.pointedAt.heading = Op, this.pointedAt.pitch = op, xp = this.pointedAt);
        const {
          WP: Lp
        } = this;
        Lp.setViewHeading((0, Jp.d)(Lp.getViewHeading(), pp, ip, xp, "look" === this.mouseTurns, Ip))
      }
      writeCentres(pp) {
        const ip = this.next,
          cp = Math.min(pp.length, yp.Dd);
        for (let Op = 0; Op < cp; Op++)
          for (let cp = 0; cp < 3; cp++) ip[3 * Op + cp] = Math.floor(pp[Op][cp] / yp.v);
        this.setCentres(cp)
      }
      setCentres(pp) {
        const {
          rc: ip,
          next: cp
        } = this;
        let Op = pp === this.centresLen;
        for (let op = 0; Op && op < 3 * pp; op++) Op = ip[op] === cp[op];
        Op || (ip.fill(0), ip.set(cp.subarray(0, 3 * pp)), this.centresLen = pp, this.centresUnsent = !0, this.sendCentres())
      }
      sendCentres() {
        const pp = this.options.cmd();
        null !== pp && (0, yp.Af)(pp, 0, this.rc, this.centresLen) && (this.centresUnsent = !1)
      }
      screen() {
        var pp, ip, cp;
        return null !== (pp = null === (ip = (cp = this.options).screen) || void 0 === ip ? void 0 : ip.call(cp)) && void 0 !== pp ? pp : gp
      }
      hidden() {
        var pp;
        return (null !== (pp = this.options.isPageHidden) && void 0 !== pp ? pp : Gp)()
      }
      now() {
        var pp, ip, cp;
        return null !== (pp = null === (ip = (cp = this.options).now) || void 0 === ip ? void 0 : ip.call(cp)) && void 0 !== pp ? pp : performance.now()
      }
    }
    var Zp = cp(40978);
    const zp = yp.v * yp.v * yp.v,
      sp = Math.log2(yp.v),
      Kp = yp.v - 1,
      Vp = yp.E.BYTES / 4,
      ii = new Uint16Array(zp);

    function ci(pp, ip, cp) {
      return pp * yp.v * yp.v + ip * yp.v + cp
    }
    class Oi {
      constructor(pp) {
        this.chunk = pp
      }
      get data() {
        return this.chunk.gameVoxels()
      }
      index(pp, ip, cp) {
        return ci(pp, ip, cp)
      }
    }
    class oi {
      constructor() {
        this.ids = new Map, this.cleared = new Set, this.layers = 0, this.patched = null, this.from = null
      }
    }
    class Ii {
      constructor(pp, ip, cp, Op) {
        this.table = pp, this.slot = ip, this.generation = cp, this.epoch = Op, this.hP = new Oi(this), this.writes = null, this.writeCount = 0, this.shownVersion = 0, this.shownCore = -1, this.shownWrites = -1, this.data = ii, this.dataPtr = 0, this.dataBuffer = null, this.dataStamp = -1, this.version = 0, this.layers = null, this.layersVersion = -1, this.layersPtr = -1, this.staleLayers = 0
      }
      get YU() {
        return this.voxelData(), this.version === this.shownCore && this.writeCount === this.shownWrites || (this.shownCore = this.version, this.shownWrites = this.writeCount, this.shownVersion = this.table.nextVersion()), this.shownVersion
      }
      get TW() {
        const pp = this.gameVoxels(),
          ip = this.layers ??= new Uint16Array(yp.v);
        this.layersVersion === this.version && this.layersPtr === this.dataPtr || (this.layersVersion = this.version, this.layersPtr = this.dataPtr, this.staleLayers = -1);
        for (let cp = 0; 0 !== this.staleLayers; cp++) {
          const Op = 1 << cp;
          0 !== (this.staleLayers & Op) && (this.staleLayers &= ~Op, ip[cp] = Si(pp, cp))
        }
        return ip
      }
      voxelData() {
        return this.dataStamp === this.table.stamp && 0 !== this.data.length ? this.data : this.reread()
      }
      gameVoxels() {
        const pp = this.voxelData(),
          ip = this.writes;
        if (null === ip || 0 === ip.ids.size) return pp;
        if (ip.from !== pp) {
          const cp = ip.patched ??= new Uint16Array(zp);
          cp.set(pp);
          for (const [pp, Op] of ip.ids) cp[pp] = Op;
          ip.from = pp
        }
        return ip.patched
      }
      written(pp) {
        var ip;
        return null === (ip = this.writes) || void 0 === ip ? void 0 : ip.ids.get(pp)
      }
      hasWrites() {
        return null !== this.writes && 0 !== this.writes.ids.size
      }
      write(pp, ip, cp) {
        const Op = this.writes ??= new oi;
        Op.ids.set(pp, ip), cp && Op.cleared.add(pp), null !== Op.from && (Op.patched[pp] = ip);
        const op = 1 << (pp >> sp & Kp);
        Op.layers |= op, this.staleLayers |= op, this.writeCount++
      }
      clearWrites() {
        const pp = this.writes;
        null !== pp && (this.staleLayers |= pp.layers, pp.ids.clear(), pp.cleared.clear(), pp.layers = 0, pp.from = null)
      }
      dataCleared(pp) {
        var ip;
        return !0 === (null === (ip = this.writes) || void 0 === ip ? void 0 : ip.cleared.has(pp))
      }
      reread() {
        this.dataStamp = this.table.stamp;
        const pp = this.table.slotWords(),
          ip = this.slot * Vp;
        if (this.epoch !== this.table.epoch || ip + Vp > pp.length || 0 === pp[ip + 3] || pp[ip + 2] !== this.generation) return this.data = ii, this.dataPtr = 0, ii;
        this.version = pp[ip + 1];
        const cp = pp[ip + 0],
          Op = pp.buffer;
        return cp === this.dataPtr && Op === this.dataBuffer || (this.dataPtr = cp, this.dataBuffer = Op, this.data = this.table.voxelsAt(Op, cp)), this.data
      }
    }

    function Si(pp, ip) {
      const cp = pp[ip * yp.v];
      for (let Op = 0; Op < yp.v; Op++) {
        const op = ci(Op, ip, 0);
        for (let ip = 0; ip < yp.v; ip++)
          if (pp[op + ip] !== cp) return 65535
      }
      return cp
    }
    const xi = new Uint32Array(0);

    function Li(pp, ip, cp) {
      return ci(pp & Kp, ip & Kp, cp & Kp)
    }
    class Yi {
      constructor(pp, ip) {
        this.memory = pp, this.apiView = ip, this.chunks = new Map, this.written = [], this.lastKey = -1, this.lastChunk = void 0, this.slotsPtr = 0, this.slotsLen = 0, this.slotsBuffer = null, this.slots = xi, this.walkPtr = 0, this.walkLen = 0, this.walkBuffer = null, this.walk = xi, this.epoch = 0, this.stamp = 0, this.versions = 0, this.corruption = null
      }
      apply(pp, ip, cp, Op, op, Ip) {
        if (this.lastKey = -1, this.lastChunk = void 0, this.stamp++, Ip === yp.F.ResetAll) return this.chunks.clear(), void this.epoch++;
        if (Ip !== yp.F.Stored && Ip !== yp.F.Unloaded) throw new Wp.b(`ChunkSlot flags ${Ip}`);
        const Sp = (0, Zp.e)(pp, ip, cp);
        if (Sp < 0) return;
        if (Ip === yp.F.Unloaded) return void this.chunks.delete(Sp);
        const xp = this.chunks.get(Sp);
        (null === xp || void 0 === xp ? void 0 : xp.slot) === Op && xp.generation === op || this.chunks.set(Sp, new Ii(this, Op, op, this.epoch))
      }
      touch() {
        this.stamp++, this.clearOverlay(), this.viewWalkThrough()
      }
      refresh() {
        if (this.stamp++, this.corruption) throw this.corruption;
        const pp = this.apiView(),
          ip = yp.q.chunkSlotsPtr(pp, 0),
          cp = yp.q.chunkSlotsLen(pp, 0);
        ip === this.slotsPtr && cp === this.slotsLen || (this.slotsPtr = ip, this.slotsLen = cp, this.slotsBuffer = null, this.slotWords()), this.viewWalkThrough(), this.clearOverlay()
      }
      viewWalkThrough() {
        const pp = this.apiView(),
          ip = yp.q.walkThroughPtr(pp, 0),
          cp = yp.q.walkThroughLen(pp, 0);
        ip === this.walkPtr && cp === this.walkLen || (this.walkPtr = ip, this.walkLen = cp, this.walkBuffer = null, this.walkWords())
      }
      clearOverlay() {
        for (const pp of this.written) pp.clearWrites();
        this.written.length = 0
      }
      nextVersion() {
        return ++this.versions
      }
      slotWords() {
        const pp = this.memory().buffer;
        var ip;
        pp !== this.slotsBuffer && (this.slotsBuffer = pp, this.slots = null !== (ip = (0, Wp.l)(Uint32Array, pp, this.slotsPtr, this.slotsLen * Vp, "the chunk directory")) && void 0 !== ip ? ip : xi);
        return this.slots
      }
      voxelsAt(pp, ip) {
        try {
          var cp;
          return null !== (cp = (0, Wp.l)(Uint16Array, pp, ip, zp, "a chunk's voxels")) && void 0 !== cp ? cp : ii
        } catch (Op) {
          if (!(Op instanceof Wp.b)) throw Op;
          return this.corruption ??= Op, ii
        }
      }
      chunk(pp, ip, cp) {
        var Op;
        return null !== (Op = this.chunks.get((0, Zp.e)(pp, ip, cp))) && void 0 !== Op ? Op : null
      }
      isLoaded(pp, ip, cp) {
        return void 0 !== this.chunkAt(Math.floor(pp), Math.floor(ip), Math.floor(cp))
      }
      tx(pp, ip, cp) {
        var Op;
        const op = Math.floor(pp),
          Ip = Math.floor(ip),
          Sp = Math.floor(cp),
          xp = this.chunkAt(op, Ip, Sp);
        if (!xp) return 0;
        const Lp = Li(op, Ip, Sp);
        return null !== (Op = xp.written(Lp)) && void 0 !== Op ? Op : xp.voxelData()[Lp]
      }
      setOverlay(pp, ip, cp, Op) {
        let op = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const Ip = this.chunkAt(pp, ip, cp);
        return !!Ip && (Ip.hasWrites() || this.written.push(Ip), Ip.write(Li(pp, ip, cp), Op, op), !0)
      }
      version(pp, ip, cp) {
        var Op, op;
        return null !== (Op = null === (op = this.chunks.get((0, Zp.e)(pp, ip, cp))) || void 0 === op ? void 0 : op.YU) && void 0 !== Op ? Op : null
      }
      scan(pp, ip, cp, Op, op, Ip, Sp, xp) {
        const Lp = yp.v;
        let Yp = 0;
        for (let Dp = Math.floor(ip / Lp); Dp * Lp < op; Dp++) {
          const Ap = Dp * Lp,
            Pp = Math.min(op - Ap, Lp);
          for (let op = Math.floor(pp / Lp); op * Lp < Op; op++) {
            const Wp = op * Lp,
              yp = Math.min(Op - Wp, Lp);
            for (let Op = Math.floor(cp / Lp); Op * Lp < Ip; Op++) {
              const Up = this.chunks.get((0, Zp.e)(op, Dp, Op));
              if (!Up) continue;
              const wp = Op * Lp,
                vp = Math.max(cp - wp, 0),
                tp = Math.min(Ip - wp, Lp),
                Hp = Up.TW,
                dp = Up.gameVoxels();
              for (let cp = Math.max(ip - Ap, 0); cp < Pp; cp++) {
                const ip = Hp[cp];
                if (65535 === ip || 0 !== Sp[ip]) {
                  Yp++;
                  for (let ip = Math.max(pp - Wp, 0); ip < yp; ip++) {
                    const pp = ci(ip, cp, 0);
                    for (let Op = vp; Op < tp; Op++) {
                      const op = dp[pp + Op];
                      0 !== Sp[op] && xp.push(Wp + ip, Ap + cp, wp + Op, op)
                    }
                  }
                }
              }
            }
          }
        }
        return Yp
      }
      dataCleared(pp, ip, cp) {
        var Op;
        const op = Math.floor(pp),
          Ip = Math.floor(ip),
          Sp = Math.floor(cp);
        return !0 === (null === (Op = this.chunkAt(op, Ip, Sp)) || void 0 === Op ? void 0 : Op.dataCleared(Li(op, Ip, Sp)))
      }
      isWalkThrough(pp) {
        if (!Number.isInteger(pp) || pp < 0 || pp > 65535) return !1;
        const ip = this.walkWords(),
          cp = pp >>> 5;
        return cp < ip.length && 1 === (ip[cp] >>> (31 & pp) & 1)
      }
      walkWords() {
        const pp = this.memory().buffer;
        var ip;
        pp !== this.walkBuffer && (this.walkBuffer = pp, this.walk = null !== (ip = (0, Wp.l)(Uint32Array, pp, this.walkPtr, this.walkLen, "the walk-through bits")) && void 0 !== ip ? ip : xi);
        return this.walk
      }
      chunkAt(pp, ip, cp) {
        if ((0 | pp) !== pp || (0 | ip) !== ip || (0 | cp) !== cp) return;
        const Op = (0, Zp.e)(pp >> sp, ip >> sp, cp >> sp);
        return Op !== this.lastKey && (this.lastKey = Op, this.lastChunk = this.chunks.get(Op)), this.lastChunk
      }
    }
    var Di = cp(38726),
      Ai = cp(38033),
      Pi = cp(36994),
      Wi = cp(36819),
      yi = cp(34386),
      Ui = cp(39295),
      wi = cp(195);
    const vi = ["ambient", "cars", "crowd", "customGame_horror", "dig", "fire", "fishing", "gameStart", "gunMisc", "gunPistol", "gunRifle", "gunSemiAutomatic", "gunShotgun", "gunSubmachineGun", "mobBear", "mobCat", "mobCow", "mobCrone", "mobDeer", "mobDog", "mobFennec", "mobGolem", "mobGorilla", "mobHorse", "mobKnight", "mobPig", "mobReaver", "mobSheep", "mobSkeleton", "mobStag", "mobStalker", "mobWarper", "mobWraith", "mobZombie", "note", "phoneAndMoney", "police", "randomBeep", "randomCannon", "randomCash", "randomExp", "randomFallsmall", "randomFire", "randomFirecracker", "randomItems", "randomLaugh", "randomMagic", "randomSplash", "rpg", "step", "survivalFactory", "town"],
      ti = [
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
      Hi = ti.map((pp => {
        let [ip] = pp;
        return ip
      })),
      di = Uint8Array.from(ti, (pp => {
        let [, ip] = pp;
        return ip
      })),
      ei = {
        semi_automatic: 11,
        submachine: 13,
        rifle: 10,
        pistol: 9,
        shotgun: 12
      },
      ui = 8;
    var ji = cp(36950),
      ki = cp(36974),
      mi = cp(36965),
      Ri = cp(249);
    class qi {
      constructor(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Ri.b;
        this.sheet = pp, this.onError = ip, this.idle = cp, this.queue = [], this.asked = new Set, this.cancelIdle = null, this.gen = 0, this.onIdle = pp => {
          this.cancelIdle = null;
          try {
            if (pp.timeRemaining() >= 1) {
              let pp = this.queue.shift();
              for (; void 0 !== pp && !this.load(pp);) pp = this.queue.shift()
            }
          } catch (ip) {
            this.onError(ip)
          } finally {
            this.schedule()
          }
        }
      }
      preload(pp) {
        const ip = [...pp].sort(((pp, ip) => pp - ip));
        for (const cp of ip) this.asked.has(cp) || (this.asked.add(cp), this.queue.push(cp));
        this.schedule()
      }
      cancel() {
        var pp;
        this.queue.length = 0, this.asked.clear(), this.gen++, null === (pp = this.cancelIdle) || void 0 === pp || pp.call(this), this.cancelIdle = null
      }
      schedule() {
        null === this.cancelIdle && this.queue.length > 0 && (this.cancelIdle = this.idle(this.onIdle))
      }
      load(pp) {
        const ip = this.sheet(pp, !1),
          cp = this.sheet(pp, !0),
          [Op, op] = "unloaded" === ip.state() && "unloaded" !== cp.state() ? [cp, ip] : [ip, cp],
          Ip = this.gen,
          Sp = () => {
            try {
              Ip === this.gen && "unloaded" === op.state() && op.load()
            } catch (pp) {
              this.onError(pp)
            }
          },
          xp = Op.state();
        return "unloaded" === xp ? (Op.once("load", Sp), Op.load(), !0) : "unloaded" === op.state() && ("loading" === xp ? (Op.once("load", Sp), !1) : (op.load(), !0))
      }
    }
    var Mi = cp(41091);
    const Ci = {
        coneInnerAngle: 360,
        coneOuterAngle: 360,
        coneOuterGain: 0,
        distanceModel: "inverse",
        maxDistance: 1e3,
        panningModel: "HRTF",
        rolloffFactor: 1
      },
      Ei = wi.g.Vw * wi.g.playerEyeToHeightRatio,
      Xi = [0, 0, -1, 0, 1, 0],
      li = vi.indexOf("note");

    function Qi(pp) {
      return pp >= 0 ? Math.min(1, pp) : 0
    }

    function Ji(pp) {
      var ip;
      let cp = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.random;
      const Op = function(pp) {
        let ip = 0,
          cp = Hi.length;
        for (; ip < cp;) {
          const Op = ip + cp >>> 1;
          Hi[Op] < pp ? ip = Op + 1 : cp = Op
        }
        return ip
      }(pp);
      if ("" === pp || null === (ip = Hi[Op]) || void 0 === ip || !ip.startsWith(pp)) return -1;
      if (Hi[Op] === pp) return Op;
      let op = Op + 1;
      for (; op < Hi.length && Hi[op].startsWith(pp);) op++;
      return Op + Math.floor(cp() * (op - Op))
    }
    class Bi {
      constructor(pp, ip, cp, Op, op) {
        this.group = pp, this.loudness = ip, this.startMs = cp, this.howl = Op, this.host = op, this.id = 0, this.direct = !1
      }
      getDurationMs() {
        const pp = this.host.alive(this.id);
        return pp ? 1e3 * this.howl.duration(this.id) / pp.rate : 0
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
    class Ni {
      constructor(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now(),
          Op = arguments.length > 3 ? arguments[3] : void 0;
        this.createHowl = pp, this.listener = ip, this.now = cp, this.errors = 0, this.sheets = new Map, this.unloading = new Uint16Array(vi.length), this.live = new Map, this.core = new Map, this.level = 1, this.master = 1, this.pose = new Float64Array(9), this.nextPose = new Float64Array(9), this.posed = !1, this.loader = void 0, this.voices = new mi.b, this.failed = new Set, this.started = new Set, this.voiceHost = {
          alive: pp => this.aliveVoice(pp),
          started: pp => this.started.has(pp),
          drop: pp => {
            var ip;
            null === (ip = this.live.get(pp)) || void 0 === ip || ip.howl.stop(pp), this.forget(pp)
          }
        }, this.handlers = {
          playSound: (pp, ip, cp, Op, op, Ip, Sp, xp, Lp) => {
            if (Op >= Hi.length) return;
            const Yp = 0 !== (op & yp.Od.Loop);
            op & yp.Od.TwoD ? this.start(Op, !1, Sp, Ip, xp, Yp) : this.startSpatial(Op, Sp, Ip, xp, Yp, pp, ip, cp, Lp, this.earDistSq(pp, ip, cp))
          },
          soundPos: (pp, ip, cp, Op) => {
            const op = this.core.get(Op);
            var Ip;
            void 0 !== op && (null === (Ip = this.live.get(op)) || void 0 === Ip || Ip.howl.pos(cp, ip, pp, op))
          },
          soundSet: (pp, ip, cp, Op) => {
            const op = this.core.get(pp),
              Ip = void 0 === op ? void 0 : this.live.get(op);
            void 0 !== op && Ip && (this.setRel(op, ip), Ip.rate = cp, Ip.howl.rate(cp, op), Ip.spatial && Ip.howl.pannerAttr({
              refDistance: Op
            }, op))
          },
          soundFade: (pp, ip, cp, Op) => {
            const op = this.core.get(pp);
            void 0 !== op && this.fade(op, ip, cp, 0 !== (Op & yp.Ld.StopAfter))
          },
          soundStop: pp => {
            const ip = this.core.get(pp);
            var cp;
            void 0 !== ip && (null === (cp = this.live.get(ip)) || void 0 === cp || cp.howl.stop(ip), this.forget(ip))
          },
          soundReset: () => {
            this.stopCore()
          }
        }, this.loader = new qi(((pp, ip) => this.sheet(pp, ip)), (pp => {
          this.errors++, console.error("Audio preload failed", pp)
        }), Op)
      }
      prepare() {
        for (let pp = 0; pp < vi.length; pp++) this.prepareSheet(pp)
      }
      prepareSheet(pp) {
        this.sheet(pp, !1), this.sheet(pp, !0)
      }
      preload(pp) {
        this.loader.preload(pp)
      }
      cancelPreload() {
        this.loader.cancel()
      }
      freeSheetsAfterGame() {
        for (let pp = 0; pp < vi.length; pp++) {
          if (ki.b.has(vi[pp])) continue;
          const ip = [];
          for (const Op of [!1, !0]) {
            const cp = Ti(pp, Op),
              op = this.sheets.get(cp);
            void 0 !== op && "loading" !== op.state() && ip.push({
              key: cp,
              howl: op
            })
          }
          if (!ip.some((pp => {
              let {
                howl: ip
              } = pp;
              return "loaded" === ip.state()
            }))) continue;
          this.unloading[pp] += ip.length;
          const cp = () => {
            this.unloading[pp]--, 0 === this.unloading[pp] && this.prepareSheet(pp)
          };
          for (const {
              key: pp,
              howl: Op
            }
            of ip) this.sheets.delete(pp), "loaded" === Op.state() ? (0, ji.d)(Op, cp) : (Op.unload(), cp())
        }
      }
      onAudioEvent(pp, ip, cp, Op) {
        if (pp < yp.l.PlaySound || pp > yp.l.SoundReset) return !1;
        try {
          return (0, yp.$d)(pp, ip, cp, Op, this.handlers)
        } catch (op) {
          return this.errors++, console.error("Audio event failed", op), !0
        }
      }
      applyListener(pp) {
        const ip = this.nextPose;
        for (let Op = 0; Op < 3; Op++) ip[2 - Op] = yp.r.listener(pp, 0, Op), ip[5 - Op] = yp.r.forward(pp, 0, Op), ip[8 - Op] = yp.r.up(pp, 0, Op);
        0 === ip[3] && 0 === ip[4] && 0 === ip[5] && ip.set(this.posed ? this.pose.subarray(3) : Xi, 3);
        for (let Op = 0; Op < 9; Op++)
          if (!Number.isFinite(ip[Op])) return;
        const cp = this.pose;
        if (this.posed) {
          let pp = !0;
          for (let Op = 0; Op < 9 && pp; Op++) pp = ip[Op] === cp[Op];
          if (pp) return
        }
        this.listener.apply(ip) && (cp.set(ip), this.posed = !0)
      }
      playGame(pp, ip, cp, Op, op, Ip, Sp) {
        const xp = Ji(pp);
        if (xp < 0) return Mi.c;
        if (!cp) {
          const {
            howl: pp,
            id: cp
          } = this.start(xp, !1, ip, 0, 1, Sp);
          return this.gameSound(pp, cp, !1)
        }
        const Lp = cp[0],
          Yp = cp[1] + Ei,
          Dp = cp[2];
        if (!Number.isFinite(Lp) || !Number.isFinite(Yp) || !Number.isFinite(Dp)) return Mi.c;
        let Ap;
        if (Op) {
          const pp = Lp - Op[0],
            ip = Yp - Op[1],
            cp = Dp - Op[2];
          if (Ap = pp * pp + ip * ip + cp * cp, Ap > op * op) return Mi.c
        } else Ap = this.earDistSq(Lp, Yp, Dp);
        const Pp = this.startSpatial(xp, ip, 0, 1, Sp, Lp, Yp, Dp, Ip, Ap);
        return Pp ? this.gameSound(Pp.howl, Pp.id, !0) : Mi.c
      }
      setMaster(pp, ip) {
        this.level = Qi(pp);
        const cp = ip ? this.level : 0;
        if (cp !== this.master) {
          this.master = cp;
          for (const [pp, ip] of this.live) ip.fadeMs = 0, ip.gain = ip.rel * this.master, ip.howl.volume(ip.gain, pp)
        }
      }
      stopCore() {
        for (const ip of [...this.core.values()]) {
          var pp;
          null === (pp = this.live.get(ip)) || void 0 === pp || pp.howl.stop(ip)
        }
        this.core.clear()
      }
      stopAll() {
        this.cancelPreload();
        for (const [pp, ip] of [...this.live]) ip.howl.stop(pp), this.forget(pp);
        this.core.clear()
      }
      gameSound(pp, ip, cp) {
        const Op = {
          stop: () => (this.live.has(ip) && pp.stop(ip), Op),
          fade: (pp, cp, op) => {
            var Ip, Sp;
            const xp = this.level > 0 ? cp / this.level : cp > 0 && null !== (Ip = null === (Sp = this.live.get(ip)) || void 0 === Sp ? void 0 : Sp.rel) && void 0 !== Ip ? Ip : 0;
            return this.fade(ip, xp, op, !1), Op
          },
          rate: cp => {
            const op = this.live.get(ip);
            return op && (op.rate = function(pp) {
              return pp > 0 && pp < 1 / 0 ? pp : 1
            }(cp), pp.rate(op.rate, ip)), Op
          },
          getVolume: () => {
            var pp, cp;
            return (null !== (pp = null === (cp = this.live.get(ip)) || void 0 === cp ? void 0 : cp.rel) && void 0 !== pp ? pp : 0) * this.level
          },
          getRelativeVolume: () => {
            var pp, cp;
            return null !== (pp = null === (cp = this.live.get(ip)) || void 0 === cp ? void 0 : cp.rel) && void 0 !== pp ? pp : 0
          },
          setRelativeVolume: pp => (this.setRel(ip, pp), Op),
          setPannerAttr: op => {
            if (cp && this.live.has(ip)) {
              const cp = {
                ...Ci,
                refDistance: Pi.k
              };
              for (const [pp, ip] of Object.entries(op)) "number" !== typeof ip && "string" !== typeof ip || (cp[pp] = ip);
              pp.pannerAttr({
                coneOuterAngle: cp.coneOuterAngle
              }, ip), pp.pannerAttr(cp, ip)
            }
            return Op
          },
          setPosition: op => (cp && this.live.has(ip) && Number.isFinite(op[0] + op[1] + op[2]) && pp.pos(op[2], op[1], op[0], ip), Op)
        };
        return Op
      }
      startSpatial(pp, ip, cp, Op, op, Ip, Sp, xp, Lp, Yp) {
        const Dp = this.sheet(di[pp], !0);
        let Ap = null;
        if (!op) {
          if (this.failed.has(Dp)) return null;
          const cp = di[pp] === li ? null : (0, mi.f)(Hi[pp]),
            Op = (0, mi.c)(Qi(ip), Math.sqrt(Yp), Lp);
          if (Ap = new Bi(cp, Op, this.now(), Dp, this.voiceHost), !this.voices.admit(Ap)) return null
        }
        const Pp = this.start(pp, !0, ip, cp, Op, op);
        return Ap && (Ap.id = Pp.id, Ap.direct = "loaded" === Dp.state() && !Dp._playLock), Dp.pannerAttr({
          coneOuterAngle: 360
        }, Pp.id), Dp.pannerAttr({
          ...Ci,
          refDistance: Lp
        }, Pp.id), Dp.pos(xp, Sp, Ip, Pp.id), Pp
      }
      aliveVoice(pp) {
        const ip = this.live.get(pp);
        if (!ip) return;
        const cp = ip.howl._soundById(pp);
        if (cp && !cp._ended) return ip;
        this.forget(pp)
      }
      earDistSq(pp, ip, cp) {
        if (!this.posed) return 0;
        const Op = pp - this.pose[2],
          op = ip - this.pose[1],
          Ip = cp - this.pose[0];
        return Op * Op + op * op + Ip * Ip
      }
      start(pp, ip, cp, Op, op, Ip) {
        const Sp = Qi(cp),
          xp = this.sheet(di[pp], ip);
        "unloaded" === xp.state() && xp.load();
        const Lp = xp.play(Hi[pp]),
          Yp = Sp * this.master;
        return xp.volume(Yp, Lp), this.live.set(Lp, {
          howl: xp,
          rel: Sp,
          gain: Yp,
          fadeFrom: Yp,
          fadeAt: 0,
          fadeMs: 0,
          rate: op,
          handle: Op,
          spatial: ip,
          stopTimer: void 0
        }), 0 !== Op && this.core.set(Op, Lp), 1 !== op && xp.rate(op, Lp), Ip && xp.loop(!0, Lp), {
          howl: xp,
          id: Lp
        }
      }
      sheet(pp, ip) {
        const cp = Ti(pp, ip);
        let Op = this.sheets.get(cp);
        if (!Op) {
          const op = this.createHowl(vi[pp], ip);
          op.on("end", (pp => {
            op.loop(pp) || this.forget(pp)
          })), op.on("stop", (pp => {
            this.forget(pp)
          })), op.on("play", (pp => {
            this.live.has(pp) && this.started.add(pp)
          })), op.on("loaderror", (pp => {
            if ("loaded" !== op.state()) {
              this.failed.add(op);
              for (const [pp, ip] of this.live) ip.howl === op && this.forget(pp)
            } else "number" === typeof pp && this.forget(pp)
          })), this.sheets.set(cp, op), Op = op
        }
        return Op
      }
      setRel(pp, ip) {
        const cp = this.live.get(pp);
        cp && (fi(cp), cp.fadeMs = 0, cp.rel = Qi(ip), cp.gain = cp.rel * this.master, cp.howl.volume(cp.gain, pp))
      }
      fade(pp, ip, cp, Op) {
        const op = this.live.get(pp);
        if (!op) return;
        fi(op);
        const {
          howl: Ip
        } = op, Sp = this.gainNow(op);
        op.rel = Qi(ip), op.gain = op.rel * this.master;
        const xp = cp > 0 ? Math.min(cp, 65535) : 0,
          Lp = 0 === xp || Sp === op.gain;
        op.fadeMs = Lp ? 0 : xp, Lp ? Ip.volume(op.gain, pp) : (op.fadeFrom = Sp, op.fadeAt = this.now(), Ip.fade(Sp, op.gain, xp, pp)), Op && (Lp ? Ip.stop(pp) : op.stopTimer = setTimeout((() => {
          op.stopTimer = void 0, Ip.stop(pp)
        }), xp))
      }
      gainNow(pp) {
        if (pp.fadeMs > 0) {
          const ip = (this.now() - pp.fadeAt) / pp.fadeMs;
          if (ip < 1) return pp.fadeFrom + (pp.gain - pp.fadeFrom) * Math.max(0, ip);
          pp.fadeMs = 0
        }
        return pp.gain
      }
      forget(pp) {
        this.started.delete(pp);
        const ip = this.live.get(pp);
        ip && (fi(ip), this.live.delete(pp), 0 !== ip.handle && this.core.get(ip.handle) === pp && this.core.delete(ip.handle))
      }
    }

    function Ti(pp, ip) {
      return 2 * pp + (ip ? 1 : 0)
    }

    function fi(pp) {
      void 0 !== pp.stopTimer && (clearTimeout(pp.stopTimer), pp.stopTimer = void 0)
    }
    var bi = cp(40806),
      ai = cp(39304);
    class ni {
      constructor(pp, ip, cp, Op) {
        this.key = pp, this.model = ip, this.host = Op, this.TA = void 0, this.records = void 0, this.origin = [0, 0, 0], this.count = 0, this.YIp = Number.NaN, this.sentOrigin = [Number.NaN, Number.NaN, Number.NaN], this.dirtyList = [], this.isDirty = void 0, this.tail = void 0, this.tailView = void 0, this.tailCut = new Uint8Array(0), this.made = !1, this.Ry = !1, this.TA = Math.max(1, Math.ceil(cp)), this.records = new Float32Array(this.TA * Di.e), this.isDirty = new Uint8Array(this.TA), this.tail = new Uint8Array(this.TA * yp.jc.Bytes), this.tailView = new DataView(this.tail.buffer), this.make(Op.cmd())
      }
      setOrigin(pp, ip, cp) {
        this.origin[0] = pp, this.origin[1] = ip, this.origin[2] = cp
      }
      markDirty(pp) {
        !this.Ry && pp >= 0 && pp < this.TA && pp < yp.jc.Max && this.pU(pp, pp + 1)
      }
      commit(pp) {
        if (this.Ry) return;
        (pp = Math.min(Math.max(Math.floor(pp), 0), this.TA, yp.jc.Max)) > this.count && this.pU(this.count, pp), this.count = pp;
        const {
          origin: ip,
          sentOrigin: cp,
          dirtyList: Op
        } = this, op = this.YIp !== pp, Ip = cp[0] !== ip[0] || cp[1] !== ip[1] || cp[2] !== ip[2];
        if (0 === Op.length && !op && !Ip) return;
        const Sp = this.host.cmd();
        if (!Sp || !this.make(Sp)) return;
        const xp = Op.length,
          {
            records: Lp,
            tailView: Yp
          } = this;
        for (let Dp = 0; Dp < xp; Dp++) {
          const pp = Op[Dp],
            ip = pp * Di.e,
            cp = Dp * yp.jc.Bytes,
            op = 0 !== Lp[ip + Di.h] ? yp.jc.Hidden : 0;
          Yp.setUint32(cp, (pp | op) >>> 0, !0), Yp.setFloat32(cp + 4, Lp[ip], !0), Yp.setFloat32(cp + 8, Lp[ip + 1], !0), Yp.setFloat32(cp + 12, Lp[ip + 2], !0)
        }
        if ((0, yp.Fe)(Sp, 0, this.key, pp, ip, xp, this.tailOf(xp))) {
          for (let pp = 0; pp < xp; pp++) this.isDirty[Op[pp]] = 0;
          Op.length = 0, this.YIp = pp, cp[0] = ip[0], cp[1] = ip[1], cp[2] = ip[2]
        }
      }
      grow(pp) {
        (pp = Math.ceil(pp)) <= this.TA || this.Ry || (this.records = (0, ai.d)(this.records, new Float32Array(pp * Di.e)), this.isDirty = (0, ai.d)(this.isDirty, new Uint8Array(pp)), this.tail = new Uint8Array(pp * yp.jc.Bytes), this.tailView = new DataView(this.tail.buffer), this.TA = pp)
      }
      dispose() {
        this.Ry || (this.Ry = !0, this.host.Ry(this, this.made ? this.key : null))
      }
      make(pp) {
        if (!this.made && pp) {
          const {
            item: ip,
            scale: cp,
            yaw: Op
          } = this.model;
          this.made = (0, yp.Ne)(pp, 0, this.key, ip, cp, Op)
        }
        return this.made
      }
      tailOf(pp) {
        const ip = pp * yp.jc.Bytes;
        return this.tailCut.buffer === this.tail.buffer && this.tailCut.length === ip || (this.tailCut = this.tail.subarray(0, ip)), this.tailCut
      }
      pU(pp, ip) {
        const {
          dirtyList: cp,
          isDirty: Op
        } = this;
        for (let op = pp; op < ip; op++) 0 === Op[op] && (Op[op] = 1, cp.push(op))
      }
    }
    var Fi = cp(636);
    class gi {
      constructor(pp) {
        this.keys = 0, this.live = new Set, this.owing = new Set, this.host = void 0, this.host = {
          cmd: pp,
          owes: pp => {
            this.owing.add(pp)
          },
          settled: (pp, ip) => {
            this.owing.delete(pp), ip && this.live.delete(pp)
          }
        }
      }
      create(pp, ip) {
        if (cp = pp, !Fi.o.includes(cp)) return null;
        var cp;
        const Op = new Gi(++this.keys, Dp.i.indexOf(pp), ip, this.host);
        return this.live.add(Op), Op
      }
      disposeAll() {
        for (const pp of [...this.live]) pp.dispose()
      }
      flush() {
        if (0 === this.owing.size) return;
        const pp = this.host.cmd();
        for (const ip of this.owing)
          if (!ip.sync(pp)) return
      }
    }
    class Gi {
      constructor(pp, ip, cp, Op) {
        this.key = pp, this.lifeform = ip, this.scale = cp, this.host = Op, this.feet = [0, 0, 0], this.yaw = 0, this.visible = !1, this.owed = 1, this.Ry = !1, this.sync()
      }
      setPose(pp, ip) {
        this.Ry || (this.feet[0] = pp[0], this.feet[1] = pp[1], this.feet[2] = pp[2], this.yaw = ip, this.owed |= 2, this.sync())
      }
      setVisible(pp) {
        this.Ry || pp === this.visible || (this.visible = pp, this.owed |= 4, this.sync())
      }
      dispose() {
        this.Ry || (this.Ry = !0, this.owed = 1 & this.owed ? 0 : 8, this.sync())
      }
      sync() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.host.cmd();
        return this.write(pp) ? (this.host.settled(this, this.Ry), !0) : (this.host.owes(this), !1)
      }
      write(pp) {
        if (!pp) return this.owed = 0, !0;
        if (1 & this.owed) {
          if (!(0, yp.Ve)(pp, 0, this.key, this.lifeform, this.scale)) return !1;
          this.owed &= -2
        }
        const ip = (2 & this.owed ? yp.Hc.Pose : 0) | (4 & this.owed ? yp.Hc.Visible : 0);
        if (0 !== ip) {
          if (!(0, yp.Re)(pp, 0, this.key, ip, this.visible ? 1 : 0, this.feet, this.yaw)) return !1;
          this.owed &= -7
        }
        if (8 & this.owed) {
          if (!(0, yp.Oe)(pp, 0, this.key)) return !1;
          this.owed = 0
        }
        return !0
      }
    }
    var ri = cp(41208);

    function Zi(pp, ip, cp, Op) {
      return (0, ri.e)(), (0, yp.Df)(pp, ip, cp, Op)
    }
    var zi = cp(39310),
      si = cp(40792);
    const Ki = [0, 0, 0],
      Vi = [0, 0, 0],
      pc = [0, 0, 0],
      ic = [0, 0, 0],
      cc = {
        origin: [0, 0, 0],
        direction: [0, 0, 1]
      },
      Oc = [0, 0, 0],
      oc = [0, 0],
      Ic = [1, 1, 1],
      Sc = 1 / 3;
    const xc = Ai.f;

    function Lc(pp) {
      const ip = Ai.d[pp],
        cp = ip && Ai.f[ip.mainMultiblock];
      return cp && {
        main: cp,
        x: ip.compX,
        y: ip.compY,
        z: ip.compZ
      }
    }

    function Yc(pp) {
      if (null === pp || void 0 === pp) return yp.Nc;
      const ip = +pp;
      return Number.isInteger(ip) && ip >= -2147483648 && ip <= 2147483647 && String(ip) === String(pp) ? ip : yp.Nc
    }

    function Dc(pp, ip, cp) {
      return (0, yp.Mf)(pp, 0, ip, null !== cp && void 0 !== cp ? cp : Number.NaN)
    }
    class Ac {
      constructor(pp) {
        this.deps = pp, this.api = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.tables = void 0, this.meshKeys = 0, this.liveMeshes = new Set, this.poolKeys = 0, this.livePools = new Set, this.cameraTurn = new zi.b((() => this.tables.getClientOption("forcedCameraDirectionTransitionMs")), (pp => {
          var ip, cp;
          null === (ip = (cp = this.deps).setLocalOptions) || void 0 === ip || ip.call(cp, pp)
        })), this.mobModels = new gi((() => this.deps.cmd())), this.owedFrees = [], this.pendingStyle = void 0, this.pendingFar = void 0, this.farSet = !1, this.routeMesh = 0, this.routeOffset = 0, this.routeLook = "", this.routeSlide = {
          uvOffset: [0, 0]
        }, this.poolHost = {
          cmd: () => this.deps.cmd(),
          Ry: (pp, ip) => {
            this.livePools.delete(pp), null !== ip && (this.owedFrees.push(ip), this.flushOwed())
          }
        }, this.api = pp.api, this.live = pp.live, this.chunks = pp.chunks, this.items = pp.items, this.tables = pp.tables
      }
      isLocal(pp) {
        return null !== pp && void 0 !== pp && +pp === this.api.localId
      }
      assertLocal(pp, ip) {
        if (!this.isLocal(pp)) throw new Error(`Attempted to ${ip} for a player that is not the local player`)
      }
      sH(pp) {
        const ip = this.api.sH(pp);
        if (!ip) throw new Error(`Entity ${pp} has no replicated position`);
        return ip
      }
      checkValid(pp) {
        return !!this.deps.isSessionLive() && (null === pp || void 0 === pp || this.api.checkValid(pp))
      }
      isAlive(pp) {
        return !1 !== this.api.isAlive(pp)
      }
      getItemStat(pp, ip, cp) {
        return this.isLocal(pp) || null !== pp && "Player" === this.api.getEntityType(pp) ? this.tables.getItemStat(ip, cp) : this.tables.getDefaultItemStat(ip, cp)
      }
      getClientOption(pp, ip) {
        return this.assertLocal(pp, "get a client option"), this.tables.getClientOption(ip)
      }
      openShop(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          cp = arguments.length > 2 ? arguments[2] : void 0;
        this.assertLocal(pp, "open shop"), Sp.m.GA("showShopFromServer", {
          toggle: ip,
          Dp: cp
        }, !0)
      }
      sendMessage(pp, ip, cp) {
        this.assertLocal(pp, "send a message");
        const Op = "string" === typeof ip ? [{
          str: ip,
          style: cp
        }] : ip;
        Sp.m.GA("chat", {
          content: Op
        }, !0)
      }
      getEntityType(pp) {
        return this.api.getEntityType(pp)
      }
      getEntityName(pp) {
        const ip = Yc(pp);
        return ip === yp.Nc ? void 0 : (0, bi.k)(this.api, ip)
      }
      hasEffect(pp, ip) {
        const cp = Yc(pp);
        return cp !== yp.Nc && (0, bi.h)(this.api, cp, ip)
      }
      getMetaInfo(pp) {
        return this.tables.getMetaInfo(pp)
      }
      getPlayerDbId(pp) {
        return this.assertLocal(pp, "get a DB ID"), this.deps.playerDbId()
      }
      getBlockData(pp, ip, cp) {
        if (!this.chunks.dataCleared(pp, ip, cp)) return (0, bi.d)(this.api, pp, ip, cp)
      }
      qE(pp, ip, cp, Op) {
        this.setBlockId(pp, ip, cp, this.tables.getItemId(Op))
      }
      setOtherEntitySetting(pp, ip, cp, Op) {
        if (!this.isLocal(pp)) throw new Error("Attempted to set an other-entity setting for a player that is not the local player");
        if (!Object.hasOwn(yp.$c, cp)) throw new Error(`Unknown other-entity setting ${cp}`);
        const op = yp.$c[cp],
          Ip = Yc(ip);
        if (Ip === yp.Nc || !this.deps.beforeWrite()) return;
        const Sp = (0, Np.f)(Op);
        if (Sp.length > 16384) throw new Error(`The other-entity setting ${cp}'s value is over 16384 bytes`);
        const xp = this.api.memoryView(Uint8Array, this.api.scratch(), Sp.length, "set_other_entity_setting's value");
        xp && (xp.set(Sp), this.api.queries.setOtherEntitySetting(Ip, op, Sp.length))
      }
      getPositionView(pp) {
        return this.live.position(+pp)
      }
      readDrawnPosition(pp, ip) {
        return this.api.readDrawnPosition(Yc(pp), ip)
      }
      getDrawnHeading(pp) {
        const ip = Yc(pp),
          cp = (ip === yp.Nc ? 0 : this.api.queries.directorEntity(ip)) >= yp.gb.BYTES ? this.api.memoryData(this.api.scratch(), yp.gb.BYTES, 8, "getDrawnHeading's DirectorEntity") : null;
        if (!cp) return null;
        if (1 === yp.gb.headingIsDrawn(cp, 0)) return yp.gb.heading(cp, 0);
        const Op = this.api.apiView;
        return this.isLocal(pp) && 0 === (yp.q.playerFlags(Op, 0) & yp.wd.FreeCam) ? yp.q.heading(Op, 0) : null
      }
      getLocalPlayerMovement() {
        const pp = yp.q.playerFlags(this.api.apiView, 0);
        return 0 === (pp & yp.wd.Replay) && this.api.readDrawnPosition(this.api.localId, pc) ? {
          onGround: 0 !== (pp & yp.wd.OnGround),
          jumpHeld: 0 !== (pp & yp.wd.JumpHeld)
        } : null
      }
      Acp(pp) {
        return this.isLocal(pp) ? this.items.sx() : null
      }
      getInventoryItems() {
        return this.items.playerItems()
      }
      getHeldGunInaccuracy() {
        var pp, ip;
        return "Gun" === (null === (pp = this.aliveHeld()) || void 0 === pp || null === (ip = pp.typeObj) || void 0 === ip ? void 0 : ip.type) ? this.items.inaccuracy : null
      }
      aliveHeld() {
        return !1 === this.api.isAlive(this.api.localId) ? null : this.items.sx()
      }
      isCrosshairShown() {
        var pp, ip;
        const cp = (0, Wi.d)(Op.c.get("crosshairGameView"), Op.c.get("crosshairShownOverride"));
        if (null !== cp) return cp;
        const op = null === (pp = this.aliveHeld()) || void 0 === pp ? void 0 : pp.typeObj,
          Ip = "Gun" === (null === op || void 0 === op ? void 0 : op.type),
          Sp = Ip || !0 === (null === op || void 0 === op ? void 0 : op.showsAimingUi),
          xp = 0 === (yp.q.playerFlags(this.api.apiView, 0) & yp.wd.ZoomFirstPerson),
          Lp = null !== (ip = this.tables.getClientOption("gunshotOrigin")) && void 0 !== ip ? ip : null;
        return (0, Wi.h)({
          gun: Ip,
          aimable: Sp
        }, xp, (0, yi.c)(), Lp)
      }
      setCrosshairShown(pp) {
        Op.c.set({
          crosshairShownOverride: pp
        })
      }
      getInventoryFreeSlotCount(pp) {
        return this.isLocal(pp) ? this.items.freeSlots() : null
      }
      getSelectedInventorySlotI(pp) {
        return this.isLocal(pp) ? this.items.selectedSlot : null
      }
      getItemSlot(pp, ip) {
        return this.isLocal(pp) ? this.items.slot(ip) : null
      }
      swapInventorySlots(pp, ip) {
        return this.items.swap(pp, ip)
      }
      isPlayerCrouching(pp) {
        if (this.isLocal(pp)) return 0 !== (yp.q.playerFlags(this.api.apiView, 0) & yp.wd.Crouching);
        const ip = Yc(pp);
        return ip !== yp.Nc && 1 === this.api.queries.entityCrouching(ip)
      }
      getMiningBlock() {
        return this.live.breakingPosition()
      }
      isMining() {
        return 0 !== (yp.q.playerFlags(this.api.apiView, 0) & yp.wd.AttemptingBreak)
      }
      getTargetedBlock() {
        return this.live.Rpp()
      }
      getActionRay() {
        const pp = this.api.apiView;
        for (let ip = 0; ip < 3; ip++) cc.origin[ip] = yp.q.gpp(pp, 0, ip), cc.direction[ip] = yp.q.actionDir(pp, 0, ip);
        return cc
      }
      canModifyBlockAt(pp, ip, cp) {
        return 1 === this.api.queries.canModify(pp, ip, cp)
      }
      isSolidToPlayerBlockId(pp) {
        return this.tables.isSolidBlockId(pp) && !this.chunks.isWalkThrough(pp)
      }
      blockNameToBlockId(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.tables.blockNameToBlockId(pp, ip)
      }
      blockIdToBlockName(pp) {
        return this.tables.nameOfId(pp)
      }
      eip(pp, ip, cp, Op, op) {
        return 1 === this.api.queries.terrainBlocked(Op, pp, ip, cp, Yc(null !== op && void 0 !== op ? op : null))
      }
      getChunkVersion(pp, ip, cp) {
        return this.chunks.version(pp, ip, cp)
      }
      scanBlocks(pp, ip, cp, Op, op, Ip, Sp, xp) {
        return this.chunks.scan(pp, ip, cp, Op, op, Ip, Sp, xp)
      }
      isBlockInLoadedChunk(pp, ip, cp) {
        return this.chunks.isLoaded(pp, ip, cp)
      }
      getBlockId(pp, ip, cp) {
        return this.chunks.tx(pp, ip, cp)
      }
      playSound(pp, ip, cp, Op, op) {
        let Ip = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        if (!this.isLocal(pp)) return null;
        const Sp = this.playSoundFrom(ip, cp, op, Ip);
        return 1 === Op ? Sp : Sp.rate(Op)
      }
      preloadSounds(pp) {
        var ip, cp;
        null === (ip = (cp = this.deps).preloadSounds) || void 0 === ip || ip.call(cp, pp)
      }
      playSoundFrom(pp, ip, cp, Op) {
        var op, Ip;
        const Sp = this.deps.playSound;
        if (!Sp) return Mi.c;
        const xp = null === cp || void 0 === cp ? void 0 : cp.Sp,
          Lp = null !== (op = null === cp || void 0 === cp ? void 0 : cp.maxHearDist) && void 0 !== op ? op : Pi.g,
          Yp = null !== (Ip = null === cp || void 0 === cp ? void 0 : cp.refDistance) && void 0 !== Ip ? Ip : Pi.k;
        let Dp = null;
        if (Array.isArray(xp)) Ki[0] = xp[0], Ki[1] = xp[1], Ki[2] = xp[2], Dp = Ki;
        else if (void 0 !== xp && null !== xp) {
          const pp = Yc(xp);
          if (!this.api.isLocal(pp)) {
            if (!this.api.readPosition(pp, Ki)) return Mi.c;
            Dp = Ki
          }
        }
        return Sp(pp, ip, Dp, Dp && this.ear(), Lp, Yp, Op)
      }
      ear() {
        if (this.api.readPosition(this.api.localId, Vi)) Vi[1] += Ei;
        else {
          const pp = this.api.apiView;
          if (0 === yp.q.viewProj(pp, 0, 3) && 0 === yp.q.viewProj(pp, 0, 7) && 0 === yp.q.viewProj(pp, 0, 11)) return null;
          for (let ip = 0; ip < 3; ip++) Vi[ip] = yp.q.eye(pp, 0, ip)
        }
        return Number.isFinite(Vi[0] + Vi[1] + Vi[2]) ? Vi : null
      }
      setBlockId(pp, ip, cp, Op) {
        if (!Number.isInteger(Op) || Op < 0 || Op > 65535) throw new Error(`Invalid block id ${Op}`);
        if (!this.deps.beforeWrite() || !this.chunks.isLoaded(pp, ip, cp)) return;
        const op = Math.floor(pp),
          Ip = Math.floor(ip),
          Sp = Math.floor(cp),
          xp = this.predictedCells(op, Ip, Sp, Op);
        if (1 === this.api.queries.qE(op, Ip, Sp, Op)) {
          for (let pp = 0; pp < xp.length; pp += 5) this.chunks.setOverlay(xp[pp], xp[pp + 1], xp[pp + 2], xp[pp + 3], 1 === xp[pp + 4]);
          this.live.refreshTarget()
        }
      }
      particlesEnabled() {
        return this.deps.particles.enabled()
      }
      createParticles(pp, ip) {
        return this.deps.particles.create(pp, ip)
      }
      playParticleEffect(pp) {
        this.deps.particles.playEffect(pp)
      }
      burstParticlePreset(pp, ip, cp) {
        this.deps.particles.burstPreset(pp, ip, cp)
      }
      createGameMesh(pp, ip, cp) {
        const Op = ++this.meshKeys,
          op = this.deps.cmd();
        if (!op) return Op;
        const {
          look: Ip,
          colour: Sp
        } = function(pp) {
          switch (pp.kind) {
            case void 0:
            case "flatEmissive":
              return pp.onTop ? {
                look: yp.Lb.FlatOnTop,
                colour: [...pp.rgb, pp.alpha]
              } : pp.opaque ? {
                look: yp.Lb.FlatOpaque,
                colour: [...pp.rgb, 1]
              } : {
                look: yp.Lb.Flat,
                colour: [...pp.rgb, pp.alpha]
              };
            case "chevronPath":
              return {
                look: yp.Lb.Chevrons, colour: [...(0, Ui.b)(pp.colour), pp.alpha]
              };
            case "furnaceFire":
              return {
                look: yp.Lb.FurnaceFire, colour: [1, 1, 1, 1]
              }
          }
        }(ip), xp = Math.floor(pp.positions.length / 3), Lp = function(pp, ip) {
          const cp = Math.floor(pp.positions.length / 3),
            Op = pp.indices.length,
            op = cp * (ip ? 5 : 3),
            Ip = new Uint8Array(4 * (op + Op)),
            Sp = new DataView(Ip.buffer);
          for (let Yp = 0; Yp < 3 * cp; Yp++) Sp.setFloat32(4 * Yp, pp.positions[Yp], !0);
          if (ip) {
            var xp;
            const ip = null !== (xp = pp.uvs) && void 0 !== xp ? xp : [];
            for (let pp = 0; pp < 2 * cp; pp++) {
              var Lp;
              Sp.setFloat32(4 * (3 * cp + pp), null !== (Lp = ip[pp]) && void 0 !== Lp ? Lp : 0, !0)
            }
          }
          for (let Yp = 0; Yp < Op; Yp++) Sp.setUint32(4 * (op + Yp), pp.indices[Yp], !0);
          return Ip
        }(pp, (0, Di.j)(ip));
        return (0, yp.se)(op, 0, Op, Ip, Sp, cp, xp, pp.indices.length, Lp) && this.liveMeshes.add(Op), Op
      }
      setGameMesh(pp, ip) {
        var cp;
        const Op = this.deps.cmd();
        if (!Op) return;
        let op = 0;
        ip.anchor && (op |= yp.Pb.Anchor, Oc[0] = ip.anchor[0], Oc[1] = ip.anchor[1], Oc[2] = ip.anchor[2]), void 0 !== ip.visible && (op |= yp.Pb.Visible), ip.uvOffset && (op |= yp.Pb.UvOffset, oc[0] = ip.uvOffset[0], oc[1] = ip.uvOffset[1]);
        const Ip = null !== (cp = ip.visibility) && void 0 !== cp ? cp : 1;
        void 0 !== ip.visibility && (op |= yp.Pb.Visibility), ip.scale && (op |= yp.Pb.Scale, Ic[0] = ip.scale[0], Ic[1] = ip.scale[1], Ic[2] = ip.scale[2]), 0 !== op && (0, yp.ze)(Op, 0, pp, op, ip.visible ? 1 : 0, Oc, oc, Ip, Ic)
      }
      disposeGameMesh(pp) {
        const ip = this.deps.cmd();
        ip && !(0, yp.we)(ip, 0, pp) || this.liveMeshes.delete(pp)
      }
      hasPackModel(pp) {
        var ip, cp, Op;
        return null !== (ip = null === (cp = (Op = this.deps).hasPackModel) || void 0 === cp ? void 0 : cp.call(Op, pp)) && void 0 !== ip && ip
      }
      disposeGameOutput() {
        const pp = pp => {
          try {
            pp()
          } catch (ip) {
            console.error("Error freeing client game output", ip)
          }
        };
        for (const ip of [...this.liveMeshes]) pp((() => {
          this.disposeGameMesh(ip)
        }));
        for (const ip of [...this.livePools]) pp((() => {
          ip.dispose()
        }));
        pp((() => {
          this.mobModels.disposeAll()
        })), pp((() => {
          this.setGroundArrowStyle(null)
        })), pp((() => {
          this.setRouteChevrons(null), this.routeOffset = 0, this.routeLook = ""
        })), pp((() => {
          this.setCrosshairShown(null)
        })), pp((() => {
          this.cameraTurn.dispose()
        })), pp((() => {
          this.farSet && (this.farSet = !1, this.setCameraFar(null))
        }))
      }
      createInstancePool(pp, ip) {
        const cp = this.tables.idOf(pp.item);
        if (void 0 === cp) return null;
        const Op = new ni(++this.poolKeys, {
          item: cp,
          scale: pp.scale,
          yaw: pp.yaw
        }, ip, this.poolHost);
        return this.livePools.add(Op), Op
      }
      createMobModel(pp, ip) {
        return this.mobModels.create(pp, ip)
      }
      setRouteChevrons(pp) {
        if (0 !== this.routeMesh && (this.disposeGameMesh(this.routeMesh), this.routeMesh = 0), !pp || 0 === pp.cells.length) return;
        const ip = `${pp.colour} ${pp.alpha}`;
        ip !== this.routeLook && (this.routeLook = ip, this.routeOffset = 0), this.routeMesh = this.createGameMesh(function(pp) {
          const [ip, cp, Op] = pp[0].pos, op = [], Ip = [], Sp = [];
          return pp.forEach(((pp, xp) => {
            let {
              pos: Lp,
              way: [Yp, Dp]
            } = pp;
            const Ap = Lp[0] - ip + .5,
              Pp = Lp[1] - cp + .04,
              Wp = Lp[2] - Op + .5,
              [yp, Up] = [.35 * -Dp, .35 * Yp],
              [wp, vp] = [xp * Sc, (xp + 1) * Sc],
              tp = op.length / 3;
            op.push(Ap - .5 * Yp + yp, Pp, Wp - .5 * Dp + Up), op.push(Ap - .5 * Yp - yp, Pp, Wp - .5 * Dp - Up), op.push(Ap + .5 * Yp + yp, Pp, Wp + .5 * Dp + Up), op.push(Ap + .5 * Yp - yp, Pp, Wp + .5 * Dp - Up), Ip.push(0, wp, 1, wp, 0, vp, 1, vp), Sp.push(tp, tp + 1, tp + 2, tp + 1, tp + 3, tp + 2)
          })), {
            positions: op,
            uvs: Ip,
            indices: Sp
          }
        }(pp.cells), {
          kind: "chevronPath",
          colour: pp.colour,
          alpha: pp.alpha
        }, pp.cells[0].pos), this.setRouteSlide()
      }
      slideRoute(pp) {
        0 !== this.routeMesh && (this.routeOffset = (this.routeOffset + Math.min(pp, 250) / 1e3 * 1.2 * Sc) % 1, this.setRouteSlide())
      }
      setRouteSlide() {
        this.routeSlide.uvOffset[1] = -this.routeOffset, this.setGameMesh(this.routeMesh, this.routeSlide)
      }
      setGroundArrowStyle(pp) {
        this.pendingStyle = pp, this.flushOwed()
      }
      flushOwed() {
        this.mobModels.flush();
        const pp = this.owedFrees;
        if (0 === pp.length && void 0 === this.pendingStyle && void 0 === this.pendingFar) return;
        const ip = this.deps.cmd();
        if (!ip) return pp.length = 0, void(this.pendingFar = void 0);
        let cp = 0;
        for (; cp < pp.length && (0, yp.Je)(ip, 0, pp[cp]);) cp++;
        pp.splice(0, cp);
        const Op = this.pendingStyle;
        if (void 0 !== Op) {
          (Op ? (0, yp.Pf)(ip, 0, Op.width, Op.alpha, 1, Op.endAtSolidFace ? 1 : 0) : (0, yp.Pf)(ip, 0, 0, 0, 0, 0)) && (this.pendingStyle = void 0)
        }
        const op = this.pendingFar;
        void 0 !== op && (0, yp.Jf)(ip, 0, null !== op && void 0 !== op ? op : 0, null === op ? 1 : 0) && (this.pendingFar = void 0)
      }
      setNametagOffset(pp, ip) {
        const cp = this.deps.cmd(),
          Op = Yc(pp);
        cp && Op !== yp.Nc && (0, yp.Zf)(cp, 0, Op, ip)
      }
      setFacingTolerance(pp, ip) {
        const cp = this.deps.cmd(),
          Op = Yc(pp);
        cp && Op !== yp.Nc && Dc(cp, Op, ip)
      }
      forEachEntity(pp) {
        const {
          api: ip
        } = this;
        for (let cp = 0; cp < ip.idStr.length; cp++) {
          const Op = ip.idStr[cp];
          null === Op || ep(ip.kinds[cp]) || pp(Op)
        }
      }
      getEntityInfo(pp) {
        return this.deps.entityInfo.get(pp)
      }
      isEntityInteractable(pp) {
        const ip = Yc(pp);
        return ip !== yp.Nc && 1 === this.api.queries.entityInteractable(ip)
      }
      isLocalPlayer(pp) {
        return this.isLocal(pp)
      }
      getLineOwner(pp) {
        var ip;
        const cp = null === (ip = this.deps.entityInfo.get(pp)) || void 0 === ip ? void 0 : ip.meshOpts;
        if (!cp) return null;
        try {
          const {
            lineToEId: pp
          } = JSON.parse(cp);
          return null !== pp && void 0 !== pp ? pp : null
        } catch {
          return null
        }
      }
      getCameraPosition() {
        const pp = this.api.apiView;
        return ic[0] = yp.q.eye(pp, 0, 0), ic[1] = yp.q.eye(pp, 0, 1), ic[2] = yp.q.eye(pp, 0, 2), ic
      }
      getCameraFar() {
        return yp.q.cameraFar(this.api.apiView, 0)
      }
      setCameraFar(pp) {
        null !== pp && (this.farSet = !0), this.pendingFar = pp, this.flushOwed()
      }
      turnCamera(pp, ip) {
        this.cameraTurn.turn(pp, ip)
      }
      clearPickupDelay(pp) {
        const ip = this.deps.cmd(),
          cp = Yc(pp);
        ip && cp !== yp.Nc && (0, yp.ce)(ip, 0, cp)
      }
      sendChat(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const cp = this.deps.sendCmd();
        cp && Zi(cp, 0, si.c.Chat, (0, Np.f)((0, si.k)({
          VD: pp,
          pA: ip
        })))
      }
      sendCommand(pp) {
        pp.length <= 119 && this.sendChat(`/${pp}`)
      }
      predictedCells(pp, ip, cp, Op) {
        const op = this.chunks,
          Ip = [],
          Sp = (pp, ip, cp, Op, op) => {
            Ip.push(pp, ip, cp, Op, this.tables.blockRootId(op) === this.tables.blockRootId(Op) ? 0 : 1)
          },
          xp = op.tx(pp, ip, cp),
          Lp = Lc(xp);
        if (Lp) {
          const [Op, Ip, Yp] = [pp - Lp.x, ip - Lp.y, cp - Lp.z], Dp = xc[op.tx(Op, Ip, Yp)], Ap = null === Dp || void 0 === Dp ? void 0 : Dp.positions.some((pp => pp.id === xp && pp.x === Lp.x && pp.y === Lp.y && pp.z === Lp.z));
          for (const pp of (Ap && Dp ? Dp : Lp.main).positions) op.tx(Op + pp.x, Ip + pp.y, Yp + pp.z) === pp.id && Sp(Op + pp.x, Ip + pp.y, Yp + pp.z, 0, pp.id)
        }
        const Yp = Lc(Op);
        if (Yp)
          for (const Ap of Yp.main.positions) {
            const [Op, Ip, xp] = [pp + Ap.x - Yp.x, ip + Ap.y - Yp.y, cp + Ap.z - Yp.z];
            Sp(Op, Ip, xp, Ap.id, op.tx(Op, Ip, xp))
          } else Sp(pp, ip, cp, Op, xp);
        const Dp = this.tables;
        if ((0 !== Dp.attachedTopOf(xp) || 0 !== Dp.attachedTopOf(Op)) && op.isLoaded(pp, ip + 1, cp)) {
          let Lp = op.tx(pp, ip + 1, cp);
          for (let Op = 0; Op < Ip.length; Op += 5) Ip[Op] === pp && Ip[Op + 1] === ip + 1 && Ip[Op + 2] === cp && (Lp = Ip[Op + 3]);
          const Yp = this.attachedTopWrite(xp, Op, Lp);
          void 0 !== Yp && Sp(pp, ip + 1, cp, Yp, Lp)
        }
        return Ip
      }
      attachedTopWrite(pp, ip, cp) {
        const Op = this.tables,
          op = Op.attachedTopOf(pp),
          Ip = Op.attachedTopOf(ip),
          Sp = 0 !== op && 0 !== cp && Op.blockRootId(cp) === Op.blockRootId(op);
        return 0 !== op && 0 !== Ip && Op.blockRootId(pp) === Op.blockRootId(ip) ? Sp && cp !== Ip ? Ip : void 0 : 0 === Ip || !Sp && 0 !== cp ? Sp ? 0 : void 0 : Ip
      }
    }
    const Pc = yp.cc + yp.gc * yp.nc.BYTES,
      Wc = 2147483647,
      yc = new TextDecoder,
      Uc = new TextEncoder,
      wc = Object.freeze({
        gD: 0,
        eL: null,
        amountAddedToSlot: 0
      }),
      vc = new Proxy({}, {
        get: () => () => yp.Xc
      });

    function tc(pp) {
      return Number.isInteger(pp) && pp >= 0 && pp <= 65535
    }

    function Hc(pp) {
      return Number.isInteger(pp) && pp >= 0 && pp <= 4294967295
    }
    class dc {
      constructor(pp) {
        this.deps = pp, this.WI = [0, 0, 0], this.inaccuracy = 0, this.version = 0, this.notified = 0, this.iconChanged = !1, this.facades = new Array(yp.gc), this.ids = new Uint16Array(yp.gc), this.amounts = new Uint16Array(yp.gc), this.attrRead = new Float64Array(yp.gc).fill(-1), this.stale = new Uint16Array(yp.gc), this.staleVersion = new Uint32Array(yp.gc), this.instances = new Uint32Array(yp.gc), this.viewPtr = 0, this.viewVersion = -1, this.len = 0, this.selected = 0, this.slotIconId = 0, this.stopped = !1, this.listeners = new Set
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
      slot(pp) {
        var ip;
        return Number.isInteger(pp) && pp >= 0 && pp < this.len && 0 !== this.ids[pp] && null !== (ip = this.facades[pp]) && void 0 !== ip ? ip : null
      }
      sx() {
        return this.slot(this.selected)
      }
      playerItems() {
        const pp = [];
        for (let ip = 0; ip < Math.min(yp.fd, this.len); ip++) pp.push(this.slot(ip));
        return pp
      }
      freeSlots() {
        let pp = 0;
        for (let ip = 0; ip < Math.min(yp.fd - yp.e, this.len); ip++) 0 === this.ids[ip] && pp++;
        return pp
      }
      amountOf(pp) {
        let ip = 0;
        for (let Op = 0; Op < Math.min(yp.fd, this.len); Op++) {
          const op = this.slot(Op);
          var cp;
          if ((null === op || void 0 === op ? void 0 : op.name) === pp) ip += null !== (cp = op.amount) && void 0 !== cp ? cp : 1
        }
        return ip
      }
      instance(pp) {
        var ip;
        return null !== (ip = this.instances[pp]) && void 0 !== ip ? ip : 0
      }
      watch(pp) {
        return this.listeners.add(pp), () => {
          this.listeners.delete(pp)
        }
      }
      touch() {
        this.version++
      }
      flush(pp) {
        if (this.version !== this.notified || this.iconChanged) {
          this.notified = this.version, this.iconChanged = !1;
          for (const cp of [...this.listeners]) try {
            cp()
          } catch (ip) {
            pp(ip)
          }
        }
      }
      chestOpened(pp, ip, cp) {
        this.WI[0] = pp, this.WI[1] = ip, this.WI[2] = cp, this.version++
      }
      refresh() {
        const pp = this.deps.api.apiView,
          ip = yp.q.inventoryViewPtr(pp, 0),
          cp = yp.q.inventoryVersion(pp, 0),
          Op = yp.q.selectedSlot(pp, 0);
        Op !== this.selected && (this.selected = Op, this.version++);
        const op = yp.q.slotIcon(pp, 0);
        if (op !== this.slotIconId && (this.slotIconId = op, this.iconChanged = !0), ip === this.viewPtr && cp === this.viewVersion) return;
        this.viewPtr = ip, this.viewVersion = cp;
        const Ip = this.deps.api.memoryData(ip, Pc, 4, "the inventory view"),
          Sp = Ip ? Math.min(Ip.getUint32(0, !0), yp.gc) : 0;
        Sp !== this.len && (this.len = Sp, this.version++);
        let xp = 0;
        for (let Lp = 0; Lp < yp.gc; Lp++) {
          const pp = yp.cc + Lp * yp.nc.BYTES,
            ip = null !== Ip && Lp < Sp ? yp.nc.item(Ip, pp) : 0;
          if (0 === ip || null === Ip) {
            0 !== this.ids[Lp] && (this.ids[Lp] = 0, this.attrRead[Lp] = -1, this.instances[Lp]++, this.version++);
            continue
          }
          const cp = yp.nc.amount(Ip, pp),
            Op = yp.nc.attrVersion(Ip, pp);
          ip === this.ids[Lp] && cp === this.amounts[Lp] || this.fill(Lp, ip, cp), Op !== this.attrRead[Lp] && (this.stale[xp] = Lp, this.staleVersion[xp] = Op, xp++)
        }
        xp > 0 && this.fetchAttributes(xp)
      }
      fill(pp, ip, cp) {
        const {
          tables: Op
        } = this.deps, op = ip !== this.ids[pp];
        let Ip = this.facades[pp];
        Ip || (Ip = {
          name: "",
          amount: null,
          attributes: {
            customAttributes: {}
          },
          typeObj: null
        }, this.facades[pp] = Ip), op && (Ip.name = Op.nameOfId(ip), Ip.typeObj = Op.itemType(ip), Ip.attributes = {
          customAttributes: {}
        }, this.attrRead[pp] = -1, this.instances[pp]++), Ip.amount = 0 === cp ? null : cp, this.ids[pp] = ip, this.amounts[pp] = cp, this.version++
      }
      fetchAttributes(pp) {
        const {
          api: ip,
          onError: cp
        } = this.deps, Op = ip.memoryView(Uint16Array, ip.scratch(), pp, "item_attributes_batch's slots");
        if (!Op) return void this.markRead(pp);
        Op.set(this.stale.subarray(0, pp));
        const op = ip.queries.itemAttributesBatch(pp),
          Ip = 4294967295 === op ? null : ip.memoryData(ip.scratch(), op, 4, "item_attributes_batch's answer");
        if (!Ip) return void this.markRead(pp);
        const Sp = new Uint8Array(Ip.buffer, Ip.byteOffset, op);
        for (let Lp = 0; Lp + 8 <= op;) {
          const pp = Ip.getUint16(Lp, !0),
            ip = Ip.getUint32(Lp + 4, !0),
            Op = Sp.subarray(Lp + 8, Lp + 8 + ip);
          Lp += 8 + (0, Pp.ue)(ip);
          const op = this.facades[pp];
          if (op && 0 !== this.ids[pp] && 0 !== ip) {
            try {
              op.attributes = JSON.parse(yc.decode(Op))
            } catch (xp) {
              cp(xp)
            }
            this.version++
          }
        }
        this.markRead(pp)
      }
      markRead(pp) {
        for (let ip = 0; ip < pp; ip++) this.attrRead[this.stale[ip]] = this.staleVersion[ip]
      }
      swap(pp, ip) {
        return tc(pp) && tc(ip) && this.settle(this.queries().invSwap(pp, ip))
      }
      move(pp, ip, cp) {
        return tc(pp) && tc(ip) && Hc(cp) && this.settle(this.queries().invMove(pp, ip, cp))
      }
      quickMove(pp, ip, cp, Op) {
        var op, Ip;
        if (!tc(pp) || !tc(ip) || !tc(cp) || null !== Op && !Hc(Op)) return null;
        const Sp = this.queries().invQuickMove(pp, ip, cp, null === Op ? -1 : Math.min(Op, Wc)),
          xp = Sp === yp.Xc ? yp.yb : null !== (op = null === (Ip = this.extras()) || void 0 === Ip ? void 0 : Ip[1]) && void 0 !== op ? op : yp.yb;
        return this.settle(Sp), xp === yp.yb ? null : xp
      }
      remove(pp, ip, cp) {
        return tc(pp) && Hc(ip) && this.settle(this.queries().invRemove(pp, ip, cp ? 1 : 0))
      }
      selectSlot(pp) {
        return tc(pp) && this.settle(this.queries().selectSlot(pp))
      }
      closeChest() {
        return this.settle(this.queries().closeChest())
      }
      enchant(pp, ip, cp) {
        if (!tc(pp) || !Number.isInteger(ip)) return !1;
        const [Op, op, Ip] = cp;
        return this.settle(this.queries().invEnchant(pp, ip, Math.floor(Op), Math.floor(op), Math.floor(Ip)))
      }
      craft(pp, ip, cp) {
        let Op;
        try {
          Op = this.deps.tables.getItemId(pp)
        } catch {
          return wc
        }
        if (!tc(ip) || null !== cp && (Number.isNaN(cp) || cp < 0)) return wc;
        const op = null === cp || cp > Wc ? -1 : Math.floor(cp),
          Ip = this.queries().craft(Op, ip, op);
        let Sp = wc;
        const xp = Ip === yp.Xc ? null : this.extras();
        if (xp) {
          const [pp, ip, cp] = xp;
          Sp = {
            gD: pp,
            eL: ip === yp.yb ? null : ip,
            amountAddedToSlot: cp
          }
        }
        return this.settle(Ip), Sp
      }
      salvage(pp, ip, cp) {
        let Op;
        try {
          Op = this.deps.tables.getItemId(ip)
        } catch {
          return !1
        }
        return tc(pp) && Number.isInteger(cp) && this.settle(this.queries().salvage(pp, Op, Math.max(Math.min(cp, Wc), -Wc)))
      }
      craftingView(pp, ip, cp) {
        var Op;
        if (this.stopped) return null;
        const {
          api: op,
          onError: Ip
        } = this.deps, Sp = pp ? Uc.encode(pp) : null;
        if (null !== Sp) {
          if (Sp.length > 1024) return Ip(new Error(`The crafting station ${pp}'s name is over 1024 bytes`)), null;
          const ip = op.memoryView(Uint8Array, op.scratch(), Sp.length, "crafting_view's station");
          if (!ip) return null;
          ip.set(Sp)
        }
        const xp = tc(ip) && tc(cp),
          Lp = op.queries.craftingView(null !== (Op = null === Sp || void 0 === Sp ? void 0 : Sp.length) && void 0 !== Op ? Op : 0, xp ? ip : 0, xp ? cp : 0);
        return Lp < yp._.BYTES ? (op.reportCorruption(`crafting_view's answer of ${Lp} bytes`), null) : op.memoryData(op.scratch(), Lp, 1, "crafting_view's answer")
      }
      queries() {
        var pp, ip;
        return !1 === (null === (pp = (ip = this.deps).beforeOp) || void 0 === pp ? void 0 : pp.call(ip)) ? (this.stopped = !0, vc) : this.deps.api.queries
      }
      extras() {
        const {
          api: pp
        } = this.deps;
        return pp.memoryView(Uint32Array, pp.scratch(), 3, "a sync query's extra words")
      }
      settle(pp) {
        if (pp === yp.Tc)(0, ri.e)();
        else if (pp !== yp.Xc) {
          const ip = this.deps.cmd();
          ip && function(pp, ip, cp) {
            return (0, ri.e)(), (0, yp.hg)(pp, ip, cp)
          }(ip, 0, pp) || this.deps.onError(new Error(`Sync op ${pp}'s marker didn't fit the command ring: its send goes after the next frame's commands`))
        }
        return this.stopped || this.refresh(), pp !== yp.Xc
      }
    }
    const ec = 1 / .6,
      uc = [0, 1, 0],
      jc = [0, 0, 0],
      kc = new Uint8Array(0),
      mc = 1.2 * wi.g.Kw,
      Rc = new TextEncoder,
      qc = [0, 0, 0],
      Mc = [0, 0, 0],
      Cc = new Map;

    function Ec(pp) {
      let ip = Cc.get(pp);
      return ip || (Cc.size >= 64 && Cc.clear(), ip = Rc.encode(`{"emitRate":${pp}}`), Cc.set(pp, ip)), ip
    }

    function Xc(pp) {
      return Number.isFinite(pp) && pp > 0 ? pp : 0
    }

    function lc(pp, ip) {
      for (let cp = 0; cp < 3; cp++) {
        const Op = Math.abs(ip[cp]);
        qc[cp] = pp[cp] - Op, Mc[cp] = 2 * Op
      }
      return Number.isFinite(qc[0] + qc[1] + qc[2] + Mc[0] + Mc[1] + Mc[2])
    }

    function Qc(pp, ip) {
      return "pos1" === pp || "pos2" === pp ? void 0 : ip
    }

    function Jc(pp, ip, cp) {
      return pp.length > yp.ud.MaxOpts ? (cp(new Error(`${ip}'s particle opts are over ${yp.ud.MaxOpts} bytes of JSON`)), null) : pp
    }
    const Bc = {
      moveTo() {},
      setEmitRate() {},
      emit() {},
      emitPoints() {},
      setDirections() {},
      stop() {},
      dispose() {}
    };
    class Nc {
      constructor(pp) {
        this.deps = pp, this.session = 0, this.nextKey = 1, this.live = 0, this.started = !1
      }
      enabled() {
        return null !== this.sink()
      }
      sink() {
        return this.deps.isSessionLive() ? this.deps.cmd() : null
      }
      create(pp, ip) {
        var cp;
        const Op = this.sink(),
          op = null !== (cp = ip.half) && void 0 !== cp ? cp : jc;
        if (!Op || this.live >= yp.ud.MaxLiveKeys || this.nextKey > yp.ud.MaxKey || !lc(ip.pos, op)) return Bc;
        const Ip = this.nextKey,
          Sp = Jc(function(pp) {
            var ip, cp, Op;
            const op = JSON.stringify({
              texture: "string" === typeof pp.texture ? pp.texture : "smokePuff",
              TA: pp.TA,
              minLifeTime: pp.minLifeTime,
              maxLifeTime: pp.maxLifeTime,
              minSize: pp.minSize,
              maxSize: pp.maxSize,
              minEmitPower: pp.minEmitPower,
              maxEmitPower: pp.maxEmitPower,
              emitRate: Xc(pp.emitRate),
              gravity: null !== (ip = pp.gravity) && void 0 !== ip ? ip : jc,
              dir1: null !== (cp = pp.dir1) && void 0 !== cp ? cp : uc,
              dir2: null !== (Op = pp.dir2) && void 0 !== Op ? Op : uc,
              colorGradients: pp.colorGradients,
              blendMode: pp.blendMode
            });
            return Rc.encode(op)
          }(pp), "createParticles", this.deps.onError);
        return Sp && (0, yp.ff)(Op, 0, Ip, 0, yp.ud.PresetNone, 0, qc, Mc, Sp) ? (this.nextKey++, this.live++, this.started = !0, new Tc(this, this.session, Ip, pp, op)) : Bc
      }
      playEffect(pp) {
        const ip = this.sink(),
          {
            pos1: cp,
            pos2: Op
          } = pp;
        if (!ip || !cp || !Op) return;
        for (let Ip = 0; Ip < 3; Ip++) qc[Ip] = Math.min(cp[Ip], Op[Ip]), Mc[Ip] = Math.abs(Op[Ip] - cp[Ip]);
        if (!Number.isFinite(qc[0] + qc[1] + qc[2] + Mc[0] + Mc[1] + Mc[2])) return;
        const op = Jc(Rc.encode(JSON.stringify(pp, Qc)), "playParticleEffect", this.deps.onError);
        op && (0, yp.$e)(ip, 0, 0, yp.ud.PresetNone, yp.ud.HasBox, 0, qc, Mc, op)
      }
      burstPreset(pp, ip, cp) {
        const Op = this.sink(),
          op = Math.min(Math.floor(cp), yp.ud.MaxBurst);
        if (!Op || !Object.hasOwn(yp.Tb, pp) || !(op > 0)) return;
        const Ip = mc;
        for (let Sp = 0; Sp < 3; Sp++) qc[Sp] = ip[Sp] - Ip / 2, Mc[Sp] = Ip;
        Number.isFinite(qc[0] + qc[1] + qc[2]) && (0, yp.$e)(Op, 0, 0, yp.Tb[pp], yp.ud.HasBox, op, qc, Mc, kc)
      }
      sessionEnded() {
        this.session++;
        const pp = this.started ? this.deps.cmd() : null;
        return this.started = !1, this.nextKey = 1, this.live = 0, !pp || (0, yp.if)(pp, 0)
      }
      sinkFor(pp) {
        return pp === this.session ? this.deps.cmd() : null
      }
      stop(pp, ip) {
        const cp = this.sinkFor(pp);
        cp && (0, yp.lf)(cp, 0, ip) && this.live--
      }
    }
    class Tc {
      constructor(pp, ip, cp, Op, op) {
        this.owner = pp, this.session = ip, this.key = cp, this.half = void 0, this.rate = void 0, this.stopDelayMs = void 0, this.emitted = void 0, this.stopped = !1, this.freed = !1, this.half = [Math.abs(op[0]), Math.abs(op[1]), Math.abs(op[2])], this.rate = Xc(Op.emitRate), this.emitted = this.rate > 0;
        const Ip = Op.maxLifeTime * ec * 1e3 + 250;
        this.stopDelayMs = Ip >= 0 ? Math.min(Ip, 2147483647) : 250
      }
      sink() {
        return this.stopped ? null : this.owner.sinkFor(this.session)
      }
      moveTo(pp, ip) {
        const cp = this.sink();
        if (cp) {
          if (ip)
            for (let pp = 0; pp < 3; pp++) this.half[pp] = Math.abs(ip[pp]);
          lc(pp, this.half) && (0, yp.mf)(cp, 0, this.key, yp.ud.HasBox, qc, Mc, kc)
        }
      }
      setEmitRate(pp) {
        const ip = this.sink(),
          cp = Xc(pp);
        ip && cp !== this.rate && (0, yp.mf)(ip, 0, this.key, 0, jc, jc, Ec(cp)) && (this.rate = cp, this.emitted ||= cp > 0)
      }
      emit(pp) {
        const ip = this.sink(),
          cp = Math.min(Math.floor(pp), yp.ud.MaxBurst);
        ip && cp > 0 && (0, yp.$e)(ip, 0, this.key, yp.ud.PresetNone, 0, cp, jc, jc, kc) && (this.emitted = !0)
      }
      emitPoints(pp, ip, cp) {
        const Op = this.sink(),
          op = Math.min(Math.floor(cp), yp.ud.MaxPoints, Math.floor(ip.length / 4));
        if (!Op || !(op > 0) || !Number.isFinite(pp[0] + pp[1] + pp[2])) return;
        const Ip = new Uint8Array(ip.buffer, ip.byteOffset, op * yp.ud.PointBytes);
        (0, yp.cf)(Op, 0, this.key, op, pp, Ip) && (this.emitted = !0)
      }
      setDirections(pp, ip) {
        const cp = this.sink();
        if (!cp || !Number.isFinite(pp[0] + pp[1] + pp[2] + ip[0] + ip[1] + ip[2])) return;
        const Op = Rc.encode(JSON.stringify({
          dir1: [pp[0], pp[1], pp[2]],
          dir2: [ip[0], ip[1], ip[2]]
        }));
        (0, yp.mf)(cp, 0, this.key, 0, jc, jc, Op)
      }
      stop() {
        const pp = this.sink();
        this.stopped = !0, pp && (this.emitted ? (this.rate > 0 && (0, yp.mf)(pp, 0, this.key, 0, jc, jc, Ec(0)), setTimeout((() => {
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
    const fc = Fi.p,
      bc = new TextDecoder;

    function hc(pp, ip) {
      const {
        serverIds: cp,
        kinds: Op
      } = pp;
      let op = 0;
      for (let Ip = 0; Ip < cp.length; Ip++) {
        const pp = cp[Ip];
        if (pp !== yp.Nc && !ep(Op[Ip])) {
          if (op === ip.length) {
            const pp = new Int32Array(Math.max(64, 2 * op));
            pp.set(ip), ip = pp
          }
          ip[op++] = pp
        }
      }
      return {
        ids: ip,
        count: op
      }
    }

    function ac(pp, ip) {
      return pp.length >= ip ? pp : new Int32Array(Math.max(ip, 2 * pp.length))
    }

    function nc(pp, ip, cp, Op) {
      for (let op = 0; op < cp; op += 4096) {
        const Ip = Math.min(4096, cp - op),
          Sp = pp.memoryView(Int32Array, pp.scratch(), Ip, "entity_info_batch's ids");
        if (!Sp) return !1;
        Sp.set(ip.subarray(op, op + Ip));
        const xp = pp.queries.entityInfoBatch(Ip),
          Lp = 4294967295 === xp ? null : pp.memoryData(pp.scratch(), xp, 4, "entity_info_batch's records");
        if (!Lp) return !1;
        for (let pp = 0; pp + yp.Eb.BYTES <= xp;) {
          const ip = yp.Eb.len(Lp, pp);
          Op(yp.Eb.serverId(Lp, pp), Fc(Lp, pp, ip)), pp += yp.Eb.BYTES + (0, Pp.ue)(ip)
        }
      }
      return !0
    }

    function Fc(pp, ip, cp) {
      var Op, op, Ip;
      const Sp = yp.Eb.kind(pp, ip),
        xp = 0 === Sp ? null : jp(Sp);
      if (null === xp) return null;
      const Lp = yp.Eb.variation(pp, ip),
        Yp = yp.Eb.pose(pp, ip),
        Dp = yp.Eb.meta(pp, ip),
        Ap = yp.Eb.mesh(pp, ip),
        Pp = 0 !== (yp.Eb.flags(pp, ip) & yp.Cb.HasOpts),
        Wp = fc[xp];
      return Object.freeze({
        type: xp,
        variation: Lp === yp.Sc ? void 0 : null !== (Op = null !== (op = null === Wp || void 0 === Wp ? void 0 : Wp[Lp]) && void 0 !== op ? op : null === Wp || void 0 === Wp ? void 0 : Wp[0]) && void 0 !== Op ? Op : "default",
        pose: Yp === yp._b ? void 0 : null !== (Ip = yp.tb[Yp]) && void 0 !== Ip ? Ip : yp.tb[0],
        metaInfo: Dp === yp._b ? void 0 : yp.Gc[Dp],
        meshKind: Ap === yp._b ? void 0 : yp.Fc[Ap],
        meshOpts: Pp ? bc.decode(new Uint8Array(pp.buffer, pp.byteOffset + ip + yp.Eb.BYTES, cp)) : void 0
      })
    }
    const gc = 1,
      Gc = 2;
    class rc {
      constructor(pp) {
        this.deps = pp, this.wanted = 0, this.sx = !1, this.refused = !1
      }
      get on() {
        return this.sx
      }
      want(pp, ip) {
        this.wanted = ip ? this.wanted | pp : this.wanted & ~pp;
        const cp = 0 !== this.wanted;
        if (cp === this.sx) return;
        const Op = this.deps.cmd();
        null !== Op ? (0, yp.kg)(Op, 0, cp ? 1 : 0) ? (this.sx = cp, this.refused = !1) : this.refused || (this.refused = !0, this.deps.onError(new Error("WatchEntityInfo didn't fit the command ring"))) : this.sx = !1
      }
    }
    class Zc {
      constructor(pp) {
        this.deps = pp, this.entries = new Map, this.complete = !1, this.refill = !1, this.midFrame = !1, this.pending = new Int32Array(64), this.pendingCount = 0, this.ids = new Int32Array(64)
      }
      get(pp) {
        var ip;
        return this.complete || this.fill(), null !== (ip = this.entries.get("string" === typeof pp ? pp : String(pp))) && void 0 !== ip ? ip : null
      }
      inCoreCall() {
        this.midFrame = !0
      }
      stale(pp) {
        if (this.complete) {
          if (this.pendingCount === this.pending.length) {
            const pp = new Int32Array(2 * this.pending.length);
            pp.set(this.pending), this.pending = pp
          }
          this.pending[this.pendingCount++] = pp
        }
      }
      removed(pp) {
        this.entries.size > 0 && this.entries.delete(String(pp))
      }
      refresh() {
        const pp = this.pendingCount;
        if (this.pendingCount = 0, this.midFrame = !1, !this.deps.watch.on || this.refill) return this.complete = !1, void(this.refill = !1);
        if (pp > 0 && this.complete) {
          const {
            api: ip
          } = this.deps;
          let cp = 0;
          const Op = this.ids = ac(this.ids, pp);
          for (let op = 0; op < pp; op++) {
            const pp = this.pending[op],
              Ip = ip.indexById.get(pp);
            void 0 === Ip || ep(ip.kinds[Ip]) ? this.entries.delete(String(pp)) : Op[cp++] = pp
          }
          cp > 0 && !this.batch(Op, cp) && (this.complete = !1)
        }
      }
      sessionEnded() {
        this.entries.clear(), this.complete = !1, this.refill = !1, this.midFrame = !1, this.pendingCount = 0, this.deps.watch.want(gc, !1)
      }
      fill() {
        const {
          api: pp
        } = this.deps;
        if (this.complete = !0, this.pendingCount = 0, this.entries.clear(), this.deps.isSessionLive()) {
          const {
            watch: pp
          } = this.deps, ip = pp.on;
          pp.want(gc, !0), !ip && pp.on && (this.refill = this.midFrame)
        }
        const {
          ids: ip,
          count: cp
        } = hc(pp, this.ids);
        this.ids = ip, cp > 0 && !this.batch(ip, cp) && (this.refill = !0)
      }
      batch(pp, ip) {
        return nc(this.deps.api, pp, ip, ((pp, ip) => {
          null === ip ? this.entries.delete(String(pp)) : this.entries.set(String(pp), ip)
        }))
      }
    }
    var zc = cp(4911);

    function sc(pp) {
      if ("message" !== pp.type || pp.VD !== zc.Zb.NewClientOptions || pp.payloadKind !== Pp.kc.Msgpack) return null;
      const ip = (0, Np.c)(pp.payload);
      if (null === ip || "object" !== typeof ip || Array.isArray(ip)) throw new Error("NewClientOptions whose body isn't an object of options");
      return ip
    }
    var Kc = cp(1251),
      Vc = cp(36828);

    function pO(pp, ip, cp, Op, op, Ip, xp) {
      var Lp, Yp, Dp;
      switch (pp) {
        case yp.Sd.ToggleMenu: {
          const pp = yp.A[ip];
          Sp.m.GA("toggleMenu", void 0 === pp ? "inventory" : `inventory|${pp}`);
          break
        }
        case yp.Sd.EditBoard:
          Sp.m.GA("EditBoard", {
            pos: 0 === ip ? null : cp
          });
          break;
        case yp.Sd.EditCodeBlock:
        case yp.Sd.ViewCodeBlock:
          Sp.m.GA("EditCodeBlock", {
            pos: cp,
            canChangePos: pp === yp.Sd.EditCodeBlock
          });
          break;
        case yp.Sd.EditCustomLobbyBlock:
          Sp.m.GA("EditCustomLobbyBlock", {
            pos: cp
          });
          break;
        case yp.Sd.OpenIronChest:
          Sp.m.GA("OpenIronChest", {
            pos: cp
          });
          break;
        case yp.Sd.EditNameTag:
          Sp.m.GA("EditNameTag", null !== (Lp = null === (Yp = op.sx()) || void 0 === Yp || null === (Dp = Yp.attributes.customAttributes) || void 0 === Dp ? void 0 : Dp.text) && void 0 !== Lp ? Lp : "");
          break;
        case yp.Sd.EditBook: {
          var Ap, Pp, Up;
          const pp = null === (Ap = op.sx()) || void 0 === Ap ? void 0 : Ap.attributes;
          Sp.m.GA("EditBook", {
            pages: (0, Kc.P)(null === pp || void 0 === pp || null === (Pp = pp.customAttributes) || void 0 === Pp ? void 0 : Pp.pages),
            title: null !== (Up = null === pp || void 0 === pp ? void 0 : pp.customDisplayName) && void 0 !== Up ? Up : "Title",
            isPublished: !(null === pp || void 0 === pp || !pp.customDescription)
          });
          break
        }
        case yp.Sd.CantChangeBlock:
          ! function(pp, ip) {
            const cp = ip.getClientOption("cantChangeError"),
              Op = ip.getClientOption(pp ? "cantBuildError" : "cantBreakError"),
              op = pp ? cp : Op;
            (ip.getClientOption("canChange") || op || "You cannot modify this block" !== cp) && Sp.m.GA("showBottomMessage", {
              message: Op || cp,
              type: "Error"
            })
          }(1 === ip, Ip);
          break;
        case yp.Sd.MiddleBarStart:
          Sp.m.GA("middleScreenBarInitiate", {
            duration: Op,
            OI: 1 === cp[0],
            horizBarRemOffset: ip
          });
          break;
        case yp.Sd.MiddleBarStop:
          Sp.m.GA("middleScreenBarRemove");
          break;
        case yp.Sd.Hitmarker:
          Sp.m.GA("localGunHitmarker", {
            cc: 1 === ip
          });
          break;
        case yp.Sd.ShotsLeft:
          Sp.m.GA("localPlayerNewShotsLeft", Op);
          break;
        case yp.Sd.AimingOverlay:
          Sp.m.GA("aimingOverlay", 3 === (3 & ip) ? "sniper" : "none");
          break;
        case yp.Sd.BottomMessage:
          Sp.m.GA("showBottomMessage", JSON.parse(xp()));
          break;
        case yp.Sd.Crosshair:
          op.inaccuracy = (0, Tp.i)(Op), (0, Vc.e)().crosshairAccuracy(op.inaccuracy);
          break;
        case yp.Sd.ChargeStage:
          break;
        case yp.Sd.EmoteWheelClose:
          Sp.m.GA("requestEmoteWheelClose");
          break;
        case yp.Sd.BlockMined:
          Sp.m.GA("localBlockMined");
          break;
        default:
          throw new Wp.b(`UiEvent of no kind: what ${pp}`)
      }
    }
    var iO = cp(38218),
      cO = cp(34438),
      OO = cp(1996),
      oO = cp(37010),
      IO = cp(34448),
      SO = cp(4886);
    const xO = 10,
      LO = {
        player: [],
        chestOrCreative: [],
        chest: null,
        creative: !1,
        selectedSlot: 0,
        freeSlots: 0
      },
      YO = {
        items: [],
        ammo: 0,
        selectedSlot: 0
      },
      DO = {
        gun: !1,
        aimable: !1,
        chargeName: null
      };

    function AO(pp, ip) {
      let cp, Op = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      const Ip = () => (cp = (0, OO.s)(cp, ip()), cp);
      return {
        current: Ip,
        watch(ip) {
          const cp = () => {
              ip(Ip())
            },
            Sp = [pp.watch(cp)];
          return null !== Op && Sp.push((0, OO.v)((pp => {
            pp.some(Op) && cp()
          }))), null !== op && Sp.push(op(cp)), () => {
            for (const pp of Sp) pp()
          }
        }
      }
    }

    function PO(pp) {
      return pp && {
        name: pp.name,
        amount: pp.amount,
        attributes: pp.attributes
      }
    }
    const WO = new WeakMap;

    function yO(pp) {
      let ip = WO.get(pp);
      return void 0 === ip && (ip = (0, IO.creativeItemIds)().map((ip => ({
        name: pp.nameOfId(ip),
        amount: pp.isStackableId(ip) ? 1 : null,
        attributes: (0, iO.e)("Gun" === (0, IO.itemTypeOf)(ip) ? {
          type: "Gun",
          clipSize: (0, IO.clipSizeOf)(ip)
        } : void 0)
      }))), WO.set(pp, ip)), ip
    }

    function UO(pp, ip, cp, Op) {
      const op = ip => (pp.flush(Op), ip),
        Ip = cp => {
          var Op, op, Ip, Sp, xp, Lp, Yp;
          const Dp = pp.slot(cp);
          if (!Dp) return null;
          const {
            rootName: Ap,
            metaStr: Pp
          } = ip.getMetaInfo(Dp.name);
          return {
            name: Dp.name,
            amount: Dp.amount,
            attributes: Dp.attributes,
            instance: pp.instance(cp),
            displayName: null !== (Op = Dp.attributes.customDisplayName) && void 0 !== Op ? Op : ip.getDisplayName(Ap),
            requiresAmmo: "RequiresAmmo" === Pp,
            clipSize: null !== (op = null !== (Ip = null === (Sp = Dp.attributes.customAttributes) || void 0 === Sp || null === (xp = Sp.gunStats) || void 0 === xp ? void 0 : xp.clipSize) && void 0 !== Ip ? Ip : null === (Lp = ip.getGunStats(Ap)) || void 0 === Lp ? void 0 : Lp.clipSize) && void 0 !== op ? op : null === (Yp = Dp.typeObj) || void 0 === Yp ? void 0 : Yp.clipSize
          }
        },
        xp = function(pp, ip) {
          let cp = null,
            Op = {
              focus: null,
              recipes: [],
              detail: null
            },
            op = -1;
          const Ip = new Set;
          return {
            read() {
              var Ip, Sp;
              if (null === cp) return null !== Op.focus && (Op = {
                ...Op,
                focus: null
              }), Op;
              if (Op.focus === cp && op === pp.changes) return Op;
              if (op = pp.changes, 0 === pp.length) return Op = {
                focus: cp,
                recipes: [],
                detail: null
              }, Op;
              let xp = 0;
              if (null !== cp.recipe) try {
                xp = ip.getItemId(cp.recipe.name)
              } catch {}
              const Lp = pp.craftingView(cp.station, xp, null !== (Ip = null === (Sp = cp.recipe) || void 0 === Sp ? void 0 : Sp.FD) && void 0 !== Ip ? Ip : 0);
              return Op = null === Lp ? {
                focus: cp,
                recipes: [],
                detail: null
              } : function(pp, ip, cp) {
                let Op = yp._.BYTES;
                const op = [];
                for (let Dp = yp._.recipes(pp, 0); Dp > 0; Dp--) {
                  const cp = yp.S.flags(pp, Op),
                    Ip = {
                      name: ip.nameOfId(yp.S.item(pp, Op)),
                      FD: yp.S.recipe(pp, Op),
                      requires: [],
                      produces: yp.S.produces(pp, Op),
                      haveIngredients: 0 !== (cp & yp.P.HaveIngredients),
                      listed: 0 !== (cp & yp.P.Listed)
                    };
                  let Sp = yp.S.requires(pp, Op);
                  for (Op += yp.S.BYTES; Sp > 0; Sp--) {
                    const cp = yp.V.items(pp, Op);
                    Ip.requires.push({
                      items: tO(pp, Op + yp.V.BYTES, cp, ip),
                      amt: yp.V.amount(pp, Op)
                    }), Op += yp.V.BYTES + 2 * cp
                  }
                  op.push(Ip)
                }
                const Ip = yp._.flags(pp, 0);
                if (null === cp.recipe || 0 === (Ip & yp.Y.Detail)) return {
                  focus: cp,
                  recipes: op,
                  detail: null
                };
                const Sp = {},
                  xp = {};
                for (let Dp = yp._.ingredients(pp, 0); Dp > 0; Dp--) {
                  const cp = yp.M.item(pp, Op),
                    op = yp.M.from(pp, Op),
                    Ip = yp.M.amount(pp, Op);
                  Op += yp.M.BYTES;
                  const Lp = op === yp.y ? null : tO(pp, Op, op, ip);
                  if (null !== Lp && (Op += 2 * op), 0 === cp) continue;
                  const Yp = ip.nameOfId(cp);
                  Sp[Yp] = Ip, null !== Lp && (xp[Yp] = Lp)
                }
                const {
                  name: Lp,
                  FD: Yp
                } = cp.recipe;
                return {
                  focus: cp,
                  recipes: op,
                  detail: {
                    name: Lp,
                    FD: Yp,
                    craftAllTimes: yp._.craftAllTimes(pp, 0),
                    roomForOne: 0 !== (Ip & yp.Y.RoomForOne),
                    resultStackable: Boolean(ip.getItemStat(Lp, "stackable")),
                    amounts: Sp,
                    ingredientsCraftedFrom: xp
                  }
                }
              }(Lp, ip, cp), Op
            },
            setFocus(pp) {
              cp = pp;
              for (const ip of [...Ip]) ip()
            },
            watchFocus: pp => (Ip.add(pp), () => {
              Ip.delete(pp)
            })
          }
        }(pp, ip);
      return {
        states: {
          inventory: AO(pp, (() => {
            const cp = pp.length;
            if (0 === cp) return LO;
            const Op = [];
            for (let ip = 0; ip < yp.fd; ip++) Op.push(PO(pp.slot(ip)));
            const op = pp.slotIcon,
              Ip = Op[pp.selectedSlot];
            0 !== op && Ip && (Op[pp.selectedSlot] = {
              ...Ip,
              icon: ip.nameOfId(op)
            });
            const Sp = !0 === ip.getClientOption("creative");
            let xp = [],
              Lp = null;
            if (cp > yp.fd) {
              for (let ip = yp.fd; ip < cp; ip++) xp.push(PO(pp.slot(ip)));
              Lp = {
                type: null,
                pos: [...pp.WI],
                numSlots: cp - yp.fd,
                ironChest: null
              }
            } else Sp && (xp = yO(ip));
            return {
              player: Op,
              chestOrCreative: xp,
              chest: Lp,
              creative: Sp,
              selectedSlot: pp.selectedSlot,
              freeSlots: pp.freeSlots()
            }
          }), (0, OO.l)("creative")),
          hotbar: AO(pp, (() => {
            if (0 === pp.length) return YO;
            const ip = [];
            for (let pp = 0; pp < xO; pp++) ip.push(Ip(pp));
            return {
              items: ip,
              ammo: pp.amountOf("Ammo"),
              selectedSlot: pp.selectedSlot
            }
          }), (0, OO.i)("DisplayName", "GunStats")),
          crafting: AO(pp, xp.read, null, xp.watchFocus),
          heldItemAim: AO(pp, (() => {
            var ip;
            if (!cp()) return DO;
            const Op = null === (ip = pp.sx()) || void 0 === ip ? void 0 : ip.typeObj,
              op = "Gun" === (null === Op || void 0 === Op ? void 0 : Op.type);
            return {
              gun: op,
              aimable: op || !0 === (null === Op || void 0 === Op ? void 0 : Op.showsAimingUi),
              chargeName: "Chargeable" === (null === Op || void 0 === Op ? void 0 : Op.type) ? Op.name : null
            }
          }), null, (pp => function(pp, ip) {
            let cp = pp();
            return (0, SO.s)((() => {
              const Op = pp();
              Op !== cp && (cp = Op, ip(Op))
            }))
          }(cp, pp)))
        },
        events: {
          hotbarSlotRequested: (0, OO.e)("setSelectedInventorySlotI"),
          hotbarScrolled: (0, OO.e)("ScrollInventorySlot"),
          numberKeyPressed: (0, OO.e)("numkeyPressed"),
          inventoryDropRequested: (0, OO.e)("DropInvenItem"),
          chestToggled: (0, OO.e)("chestToggleFromServer"),
          chestRefreshed: (0, OO.e)("chestRefreshedFromServer", vO),
          inventorySynced: (0, OO.e)("syncedInvenFromServer", vO),
          enchantingTableOpened: (0, OO.e)("enchantingTable", (pp => {
            let {
              position: cp,
              tx: Op
            } = pp;
            return {
              position: [...cp],
              blockName: ip.getMetaInfo(Op).rootName
            }
          }))
        },
        commands: {
          selectHotbarSlot(ip) {
            pp.selectSlot(ip), pp.flush(Op)
          },
          removeInventoryItem(ip) {
            let {
              slot: cp,
              amount: Op,
              drop: Ip
            } = ip;
            return op(pp.remove(cp, Op, Ip))
          },
          swapInventorySlots(ip) {
            let {
              a: cp,
              b: Op
            } = ip;
            return op(pp.swap(cp, Op))
          },
          moveInventoryItem(ip) {
            let {
              from: cp,
              to: Op,
              amount: Ip
            } = ip;
            return op(pp.move(cp, Op, Ip))
          },
          quickMoveInventoryItem(ip) {
            let {
              slot: cp,
              start: Op,
              end: Ip,
              amount: Sp
            } = ip;
            return op(pp.quickMove(cp, Op, Ip, Sp))
          },
          closeChest() {
            pp.closeChest(), pp.flush(Op), Sp.m.GA("chestClosedByPlayer")
          },
          focusCrafting(pp) {
            xp.setFocus(pp)
          },
          craftRecipe(ip) {
            let {
              name: cp,
              FD: Op,
              times: Ip
            } = ip;
            return op(pp.craft(cp, Op, Ip))
          },
          salvageItem(ip) {
            let {
              slot: cp,
              name: Op,
              amount: Ip
            } = ip;
            return op(pp.salvage(cp, Op, Ip))
          },
          enchantItem(ip) {
            let {
              slot: cp,
              level: Op,
              tablePos: op
            } = ip;
            pp.enchant(cp, Op, op)
          }
        },
        queries: {
          enchantingOffer(cp) {
            let {
              slot: Op,
              blockName: op
            } = cp;
            return function(pp, ip, cp, Op) {
              const op = pp.slot(cp);
              if (!op || !ip.getClientOption("canCraft") || !(0, cO.r)(Op) || (0, cO.q)(op.attributes)) return wO;
              const Ip = (0, IO.enchantmentPerksOf)(ip.getItemId(op.name));
              if (0 === Ip.length) return wO;
              const Sp = [];
              for (let xp = 0; xp < oO.d; xp++) {
                const {
                  commonProb: pp,
                  uncommonProb: ip,
                  rareProb: cp,
                  epicProb: op,
                  legendaryProb: Ip,
                  level: Lp
                } = (0, cO.g)(Op, xp);
                Sp.push({
                  level: Lp,
                  odds: [pp, ip, cp, op, Ip].map((pp => 100 * pp))
                })
              }
              return {
                perks: [...Ip],
                options: Sp
              }
            }(pp, ip, Op, op)
          }
        }
      }
    }
    const wO = Object.freeze({
      perks: [],
      options: []
    });

    function vO() {
      return null
    }

    function tO(pp, ip, cp, Op) {
      const op = [];
      for (let Ip = 0; Ip < cp; Ip++) {
        const cp = pp.getUint16(ip + 2 * Ip, !0);
        0 !== cp && op.push(Op.nameOfId(cp))
      }
      return op
    }
    class HO {
      constructor(pp) {
        this.api = pp, this.positions = new Map, this.targeted = {
          KV: 0,
          position: [0, 0, 0],
          normal: [0, 0, 0],
          nY: [0, 0, 0]
        }, this.hasTarget = !1, this.breaking = [0, 0, 0], this.isBreaking = !1
      }
      position(pp) {
        let ip = this.positions.get(pp);
        return ip || (this.api.checkValid(pp) || this.api.isLocal(pp) ? (ip = [NaN, NaN, NaN], this.api.readPosition(pp, ip), this.positions.set(pp, ip), ip) : null)
      }
      Rpp() {
        return this.hasTarget ? this.targeted : null
      }
      breakingPosition() {
        return this.isBreaking ? this.breaking : null
      }
      refresh() {
        for (const [ip, cp] of this.positions) this.api.readPosition(ip, cp) || this.api.checkValid(ip) || this.api.isLocal(ip) || this.positions.delete(ip);
        const pp = this.api.apiView;
        if (this.refreshTarget(), this.isBreaking = 0 !== (yp.q.playerFlags(pp, 0) & yp.wd.Breaking) && yp.q.breakingProgress(pp, 0) >= 0, this.isBreaking)
          for (let ip = 0; ip < 3; ip++) this.breaking[ip] = yp.q.breakingPos(pp, 0, ip)
      }
      refreshTarget() {
        const pp = this.api.apiView,
          ip = yp.q.targetBlockId(pp, 0);
        if (this.hasTarget = ip !== yp.Rc, this.hasTarget) {
          const cp = this.targeted;
          cp.KV = ip;
          for (let ip = 0; ip < 3; ip++) cp.position[ip] = yp.q.targetBlock(pp, 0, ip), cp.normal[ip] = yp.q.targetNormal(pp, 0, ip), cp.nY[ip] = yp.q.targetAdjacent(pp, 0, ip)
        }
      }
      despawned(pp) {
        const ip = this.positions.get(pp);
        ip && !this.api.isLocal(pp) && (ip.fill(NaN), this.positions.delete(pp))
      }
    }
    var dO = cp(40831),
      eO = cp(40813),
      uO = cp(36591),
      jO = cp(37001);
    const kO = 1,
      mO = 2;
    class RO {
      constructor() {
        this.game = new jO.c, this.client = new jO.c, this.sx = 0, this.movesFly = null
      }
      setGame(pp) {
        if (null === pp || "object" !== typeof pp) return !1;
        const {
          key: ip,
          value: cp
        } = pp;
        return "string" === typeof ip && (this.game.setBooleanType(ip, Boolean(cp)), !0)
      }
      setClient(pp, ip) {
        this.client.setBooleanType(pp, ip)
      }
      clearGame() {
        this.game = new jO.c, this.movesFly = null
      }
      setMovesFly(pp) {
        this.movesFly = pp
      }
      perms() {
        return (this.game._getTotalBooleanVal() ? kO : 0) | (this.client._getTotalBooleanVal() ? mO : 0)
      }
      write(pp) {
        const ip = this.perms(),
          {
            movesFly: cp
          } = this;
        if (ip === this.sx && null === cp) return !0;
        let Op = yp.Hb.Keep;
        return null !== cp && (Op = cp ? yp.Hb.On : yp.Hb.Off), !(!pp || !(0, yp.me)(pp, 0, Op, ip, cp ? 1 : 0)) && (this.sx = ip, this.movesFly = null, !0)
      }
    }
    class qO {
      constructor(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => 35;
        this.api = pp, this.screenBandPct = void 0, this.clipX = 0, this.clipY = 0, this.clipW = 0, this.eye = [0, 0, 0], this.forward = [0, 0, 1], this.along = [0, 0, 0], this.screenBandPct = {
          x: xp.d,
          get y() {
            return ip()
          }
        }
      }
      get hasView() {
        const pp = this.api.apiView,
          ip = yp.q.viewProj;
        return 0 !== ip(pp, 0, 3) || 0 !== ip(pp, 0, 7) || 0 !== ip(pp, 0, 11) || 0 !== ip(pp, 0, 15)
      }
      get cameraPosition() {
        const pp = this.api.apiView,
          {
            eye: ip
          } = this;
        for (let cp = 0; cp < 3; cp++) ip[cp] = yp.q.eye(pp, 0, cp);
        return ip
      }
      get cameraDirection() {
        const pp = this.api.apiView,
          ip = yp.q.viewProj,
          cp = ip(pp, 0, 3),
          Op = ip(pp, 0, 7),
          op = ip(pp, 0, 11),
          Ip = Math.hypot(cp, Op, op),
          {
            forward: Sp
          } = this;
        return Ip > 0 && (Sp[0] = cp / Ip, Sp[1] = Op / Ip, Sp[2] = op / Ip), Sp
      }
      get cameraHeading() {
        return yp.q.heading(this.api.apiView, 0)
      }
      get cameraPitch() {
        return yp.q.pitch(this.api.apiView, 0)
      }
      get tanHalfFovX() {
        return yp.q.tanHalfFovX(this.api.apiView, 0)
      }
      get tanHalfFovY() {
        return yp.q.tanHalfFovY(this.api.apiView, 0)
      }
      projectWorldPosToScreenPos(pp) {
        this.clip(pp);
        const {
          clipX: ip,
          clipY: cp,
          clipW: Op
        } = this;
        if (Op > 0) {
          const pp = ip / Op * 50,
            op = -cp / Op * 50;
          return Math.abs(pp) <= this.screenBandPct.x && Math.abs(op) <= this.screenBandPct.y ? {
            x: 50 + pp,
            y: 50 + op
          } : this.clampToBand(pp, op)
        }
        const op = this.cameraPosition,
          Ip = Math.hypot(pp[0] - op[0], pp[1] - op[1], pp[2] - op[2]),
          Sp = this.api.apiView,
          xp = yp.q.viewProj,
          Lp = Ip > 0 ? ip / Ip : 0,
          Yp = Ip > 0 ? -cp / Ip : 0,
          Dp = Math.hypot(xp(Sp, 0, 1), xp(Sp, 0, 5), xp(Sp, 0, 9)),
          Ap = Lp / Math.hypot(xp(Sp, 0, 0), xp(Sp, 0, 4), xp(Sp, 0, 8)),
          Pp = Yp / Dp,
          Wp = !(Math.abs(Ap) >= .001 || Math.abs(Pp) >= .001);
        return this.clampToBand(Lp, Wp ? -(Dp || 1) : Yp)
      }
      projectDirectionToScreenPos(pp) {
        if (!this.hasView) return;
        const ip = this.cameraPosition,
          cp = this.along;
        for (let Op = 0; Op < 3; Op++) cp[Op] = ip[Op] + 10 * pp[Op];
        return this.projectWorldPosToScreenPos(cp)
      }
      projectWorldPosToViewport(pp) {
        this.clip(pp);
        const {
          clipX: ip,
          clipY: cp,
          clipW: Op
        } = this;
        return Op > 0 ? {
          x: 50 + ip / Op * 50,
          y: 50 - cp / Op * 50
        } : null
      }
      clip(pp) {
        const ip = this.api.apiView,
          cp = pp[0] - yp.q.origin(ip, 0, 0),
          Op = pp[1] - yp.q.origin(ip, 0, 1),
          op = pp[2] - yp.q.origin(ip, 0, 2),
          Ip = yp.q.viewProj;
        this.clipX = Ip(ip, 0, 0) * cp + Ip(ip, 0, 4) * Op + Ip(ip, 0, 8) * op + Ip(ip, 0, 12), this.clipY = Ip(ip, 0, 1) * cp + Ip(ip, 0, 5) * Op + Ip(ip, 0, 9) * op + Ip(ip, 0, 13), this.clipW = Ip(ip, 0, 3) * cp + Ip(ip, 0, 7) * Op + Ip(ip, 0, 11) * op + Ip(ip, 0, 15)
      }
      clampToBand(pp, ip) {
        return (0, xp.h)(pp, ip, this.screenBandPct.x, this.screenBandPct.y)
      }
    }
    var MO = cp(4921);
    const CO = new TextEncoder,
      EO = new Uint8Array(yp.C * yp.B);
    class XO {
      constructor() {
        this.buttons = [], this.sx = !0
      }
      set(pp) {
        this.buttons = pp, this.sx = !1
      }
      attached() {
        this.sx = 0 === this.buttons.length
      }
      write(pp) {
        if (this.sx) return;
        const ip = new Uint8Array(yp.C),
          cp = new Uint8Array(yp.C);
        let Op = 0,
          op = 0;
        for (const {
            id: Ip,
            keycode: Sp
          }
          of this.buttons) {
          if (Op === yp.C) break;
          const {
            read: pp,
            written: xp
          } = CO.encodeInto(Ip, EO.subarray(op, op + yp.B));
          if (pp < Ip.length) continue;
          const Lp = MO.j[Sp];
          ip[Op] = "number" === typeof Lp ? Lp : 0, cp[Op] = xp, Op++, op += xp
        }
        this.sx = (0, yp.ae)(pp, 0, Op, ip, cp, EO.subarray(0, op))
      }
    }

    function lO(pp, ip, cp) {
      const Op = CO.encode(ip);
      return Op.length <= yp.B && function(pp, ip, cp, Op) {
        return (0, ri.e)(), (0, yp.nf)(pp, ip, cp, Op)
      }(pp, 0, cp ? 1 : 0, Op)
    }
    const QO = new TextDecoder,
      JO = new TextEncoder,
      BO = new Uint8Array(0),
      NO = [0, 0, 0],
      TO = {
        off: yp.xd.Off,
        key: yp.xd.Key,
        touch: yp.xd.Touch
      };
    class fO {
      constructor(pp) {
        var ip;
        this.options = pp, this.renderFrame = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.entityInfo = void 0, this.entityInfoWatch = void 0, this.particles = void 0, this.clientApi = void 0, this.scriptedCamera = void 0, this.owners = [], this.tickers = [], this.renderers = [], this.receivers = [], this.failures = [], this.vetoSet = !1, this.hooksSet = !1, this.writtenPublicLobby = !1, this.promptWatch = "off", this.promptWatchSent = "off", this.customButtons = new XO, this.generation = 0, this.sessionLive = !1, this.boundId = 0, this.session = null, this.activeConn = 0, this.closedThrough = 0, this.openSocket = 0, this.socketLeftSinceAttach = !1, this.ticks = 0, this.zoomUnshown = !1, this.zoomHeld = !1, this.overflowGen = 0, this.resyncOwed = !1, this.zoom = 0, this.pendingZoom = null, this.highlight = null, this.highlightOwed = !1, this.cmd = null, this.freeCam = new RO, this.stopped = () => !1, this.onError = void 0, this.api = void 0, this.tables = void 0, this.itemSources = null, this.fault = void 0, this.Yy = pp => {
          if ((0, Wp.f)(pp)) throw pp;
          this.onError(pp)
        }, this.api = pp.api, this.tables = pp.tables, this.onError = null !== (ip = pp.onError) && void 0 !== ip ? ip : pp => {
          console.error("Error in client game callback", pp)
        }, this.renderFrame = new qO(this.api, pp.screenBandY), this.live = new HO(this.api), this.chunks = new Yi(this.api.memory, (() => this.api.apiView)), this.items = new dc({
          api: this.api,
          tables: pp.tables,
          cmd: () => this.cmd,
          onError: this.onError,
          beforeOp: pp.beforeOp
        });
        const cp = () => this.stopped() ? null : this.cmd,
          Op = () => this.sessionLive;
        this.entityInfoWatch = new rc({
          cmd: cp,
          onError: this.onError
        }), this.entityInfo = new Zc({
          api: this.api,
          watch: this.entityInfoWatch,
          isSessionLive: Op
        }), this.particles = new Nc({
          cmd: cp,
          isSessionLive: Op,
          onError: this.onError
        }), this.clientApi = new Ac({
          api: this.api,
          live: this.live,
          chunks: this.chunks,
          items: this.items,
          entityInfo: this.entityInfo,
          particles: this.particles,
          tables: pp.tables,
          cmd: cp,
          sendCmd: () => this.sendCmd(),
          isSessionLive: Op,
          beforeWrite: () => {
            var ip;
            if (this.stopped()) return !1;
            const cp = this.generation;
            return !1 !== (null === (ip = pp.beforeWrite) || void 0 === ip ? void 0 : ip.call(pp)) && cp === this.generation
          },
          playerDbId: () => {
            const pp = this.session;
            if (null === pp) throw new Error("No game session has started, so the local player has no DB id");
            return pp.playerDbId
          },
          playSound: pp.playSound,
          preloadSounds: pp.preloadSounds,
          setLocalOptions: pp.setLocalOptions,
          hasPackModel: pp.hasPackModel
        }), this.scriptedCamera = new rp({
          api: this.api,
          cmd: () => this.stopped() ? null : this.cmd,
          screen: pp.cameraScreen,
          showFacing: pp.showCameraFacing
        })
      }
      get itemBridgeSources() {
        return this.itemSources ??= UO(this.items, this.tables, (() => this.localPlayerAlive()), this.Yy), this.itemSources
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
      clickCodeBlock(pp) {
        const ip = this.sessionLive ? this.sendCmd() : null;
        return null !== ip && (cp = ip, Op = 0, op = pp[0], Ip = pp[1], Sp = pp[2], (0, ri.e)(), (0, yp.ge)(cp, Op, op, Ip, Sp));
        var cp, Op, op, Ip, Sp
      }
      cameraZoom() {
        return this.zoom
      }
      setCameraZoom(pp) {
        const ip = this.liveCmd();
        return null === ip ? (this.pendingZoom = pp, !1) : (this.pendingZoom = null, (0, yp.eg)(ip, 0, pp, 1))
      }
      ZC(pp) {
        const ip = this.stopped() ? null : this.cmd;
        return null !== ip && (0, yp._f)(ip, 0, pp ? 1 : 0)
      }
      respawn() {
        const pp = this.sessionLive ? this.sendCmd() : null;
        return null !== pp && (ip = pp, cp = 0, (0, ri.e)(), (0, yp.yf)(ip, cp));
        var ip, cp
      }
      bindCustomButtonKeys(pp) {
        this.customButtons.set(pp)
      }
      pressCustomButton(pp, ip) {
        const cp = this.sessionLive ? this.sendCmd() : null;
        return null !== cp && lO(cp, pp, ip)
      }
      padMove(pp, ip, cp, Op, op, Ip) {
        const Sp = this.liveCmd();
        return null !== Sp && (0, yp.Ye)(Sp, 0, pp, ip, cp, Op, op, Ip)
      }
      thirdPersonFor(pp) {
        const ip = this.liveCmd();
        return null !== ip && (0, yp.jg)(ip, 0, null !== pp && void 0 !== pp ? pp : 1 / 0)
      }
      send(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Op = 0 !== this.openSocket || this.sessionLive ? this.sendCmd() : null;
        return null !== Op && Zi(Op, cp ? Pp.od : 0, pp, (0, Np.f)(ip))
      }
      socketAttached(pp) {
        this.openSocket = pp, this.socketLeftSinceAttach = !1
      }
      socketDetached(pp) {
        this.openSocket === pp && (this.openSocket = 0)
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
      attach(pp) {
        const ip = () => pp.isStopped;
        this.stopped = ip, this.cmd = pp.rings.cmd, this.promptWatchSent = "off", this.writePromptWatch(), this.customButtons.attached(), this.writeCustomButtons();
        const cp = this.api.apiView;
        this.overflowGen = yp.q.eventOverflowGen(cp, 0), this.resyncOwed = 0 !== yp.q.eventOverflowMask(cp, 0), pp.setGameHost(this), pp.setEventWalker((pp => {
          this.api.walk(pp, this, ip)
        }))
      }
      watchPromptPick(pp) {
        this.promptWatch = pp, this.writePromptWatch()
      }
      get promptEntity() {
        return "off" === this.promptWatch || this.stopped() ? null : bO(yp.q.promptEntity(this.api.apiView, 0))
      }
      get interactLabel() {
        return "touch" !== this.promptWatch || this.stopped() ? yp.mc.None : yp.q.interactLabel(this.api.apiView, 0)
      }
      get interactIcon() {
        return "touch" !== this.promptWatch || this.stopped() ? 0 : yp.q.interactIcon(this.api.apiView, 0)
      }
      closeGame() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        (0 === pp || pp >= this.openSocket) && (this.openSocket = 0), this.closedThrough = Math.max(this.closedThrough, pp, this.activeConn), this.activeConn = 0, this.endSession(), this.endGameGrants(), this.dropGameCamera()
      }
      gameCamera(pp) {
        0 !== this.activeConn && this.scriptedCamera.settingsChanged(pp)
      }
      netEvent(pp) {
        "connection" === pp.type ? pp.phase === Pp.H.Activated && pp.conn !== this.activeConn && pp.conn > this.closedThrough ? (this.endSession(), this.activeConn = pp.conn, this.endGameGrants(), this.dropGameCamera()) : pp.phase !== Pp.H.Left && pp.phase !== Pp.H.Closed || pp.conn !== this.activeConn ? pp.phase === Pp.H.Resumed && 0 !== this.activeConn && pp.conn > this.closedThrough && (this.activeConn = pp.conn) : this.closeGame() : pp.conn === this.activeConn && 0 !== pp.conn && (pp.VD === eO.w ? this.gunHit(pp.payload) : pp.VD === zc.Zb.EditItemCraftingRecipes || pp.VD === eO.Q ? this.items.touch() : (this.serverOptions(pp), this.gameMessage(pp)));
        const ip = this.options.onNetEvent;
        ip && this.guard((() => {
          ip(pp)
        }))
      }
      serverOptions(pp) {
        const ip = this.options.serverOptions,
          cp = ip ? this.decoded(sc, pp) : null;
        ip && cp && this.guard((() => {
          ip.applyNewClientOptions(cp)
        }))
      }
      gameMessage(pp) {
        let ip = null;
        try {
          ip = function(pp) {
            if ("message" !== pp.type || pp.VD !== zc.Zb.GameCodeMessage || pp.payloadKind !== Pp.kc.Msgpack) return null;
            const ip = (0, Np.c)(pp.payload);
            if (null === ip || "object" !== typeof ip || "string" !== typeof ip.messageType) throw new Error("GameCodeMessage without a messageType");
            return ip
          }(pp)
        } catch (cp) {
          this.sessionLive && this.onError(cp)
        }
        if (ip) {
          const {
            messageType: pp,
            data: cp
          } = ip;
          if ((0, Cp.f)(pp)) return void this.guard((() => {
            (0, Cp.d)(pp, cp)
          }));
          "freeCamPerms" === pp && this.freeCam.setGame(cp) && this.writeFreeCam(), this.sessionLive && this.round(this.receivers, (ip => {
            ip.onReceivedMessageFromServer(pp, cp)
          }))
        }
      }
      decoded(pp, ip) {
        try {
          return pp(ip)
        } catch (cp) {
          return this.onError(cp), null
        }
      }
      setClientFreeCameraGrant(pp, ip) {
        this.freeCam.setClient(pp, ip), this.writeFreeCam()
      }
      freeCameraAllowed() {
        return 0 !== this.freeCam.perms()
      }
      setFreeCameraMovesFly(pp) {
        this.freeCam.setMovesFly(pp), this.writeFreeCam()
      }
      setBlockHighlight(pp) {
        this.highlight = pp, this.highlightOwed = !0, this.writeOwedHighlight()
      }
      writeOwedHighlight() {
        const pp = this.liveCmd();
        if (null === pp || !this.highlightOwed) return;
        const ip = this.highlight;
        this.highlightOwed = null === ip ? !(0, yp.De)(pp, 0, NO, NO, 0) : !(0, yp.De)(pp, 0, ip.pos, ip.normal, 1)
      }
      localPlayerBound(pp) {
        var ip, cp;
        if (0 === this.activeConn || this.sessionLive && pp === this.boundId) return;
        const Op = this.sessionLive;
        let op, Ip, Sp, xp;
        this.endSession(), Op && this.restartGameCamera();
        try {
          var Lp;
          this.session = null;
          const pp = this.options.sessionInfo(this.activeConn);
          if (this.session = pp, !pp) return;
          op = pp.gameNameWithVariation, Ip = null !== (Lp = (0, qp.Ib)(op)) && void 0 !== Lp ? Lp : void 0, Sp = (0, Mp.w)(pp.lobbyName), xp = (0, Mp.I)(pp.lobbyName)
        } catch (tp) {
          return void this.onError(tp)
        }
        const Yp = {
          localPlayerId: String(pp)
        };
        let Dp = {},
          Ap = {};
        try {
          var Pp, Wp;
          Dp = null !== (Pp = null === (Wp = this.options.gameFactory((0, qp.Mb)(op))) || void 0 === Wp ? void 0 : Wp(xp, Sp, Ip, Yp)) && void 0 !== Pp ? Pp : {}
        } catch (tp) {
          this.Yy(tp)
        }
        try {
          var yp, Up;
          Ap = {
            ...null === (yp = (Up = this.options).defaultPlugins) || void 0 === yp ? void 0 : yp.call(Up, xp, Sp, Ip, Yp),
            ...Dp.plugins
          }
        } catch (tp) {
          this.Yy(tp)
        }
        const wp = [Dp, ...Object.values(Ap)];
        this.owners = wp, this.tickers = wp.filter((pp => void 0 !== pp.LP)), this.renderers = wp.filter((pp => void 0 !== pp.onAfterRender)), this.receivers = wp.filter((pp => void 0 !== pp.onReceivedMessageFromServer)), this.writeAltVeto(wp), this.writeHooks(wp), this.writePublicLobby(xp), this.writeLocalDbId(null !== (ip = null === (cp = this.session) || void 0 === cp ? void 0 : cp.playerDbId) && void 0 !== ip ? ip : null), this.boundId = pp, this.sessionLive = !0, this.generation++, null !== this.pendingZoom && this.setCameraZoom(this.pendingZoom), this.highlightOwed ||= null !== this.highlight, this.writeOwedHighlight(), this.round(wp, (pp => {
          var ip;
          null === (ip = pp.onCreate) || void 0 === ip || ip.call(pp, this.clientApi)
        }));
        const vp = this.generation;
        setTimeout((() => {
          vp === this.generation && !0 === this.tables.getClientOption("creative") && yO(this.tables)
        }), 0)
      }
      chunkSlot(pp, ip, cp, Op, op, Ip) {
        this.chunks.apply(pp, ip, cp, Op, op, Ip)
      }
      entityAdded(pp) {
        var ip;
        this.entityInfo.stale(pp), null === (ip = this.options.replayEntities) || void 0 === ip || ip.entityAdded(pp)
      }
      entityInfoChanged(pp) {
        var ip;
        this.entityInfo.stale(pp), null === (ip = this.options.replayEntities) || void 0 === ip || ip.entityInfoChanged(pp)
      }
      afterPrescan() {
        this.items.refresh(), this.entityInfo.refresh(), this.api.rereadDirectory(), this.chunks.refresh(), this.live.refresh()
      }
      tickEnd() {
        if (this.ticks++, this.tickers.length > 0) {
          const pp = performance.now();
          this.round(this.tickers, hO), (0, SO.b)(performance.now() - pp)
        }
      }
      afterWalk(pp) {
        this.ackEventOverflow(), this.clientApi.flushOwed(), this.writeOwedHighlight();
        const ip = this.options.replayEntities;
        ip && this.guard((() => {
          this.entityInfoWatch.want(Gc, ip.wantsWatch), ip.flush(this.entityInfoWatch.on)
        }));
        const cp = this.api.apiView,
          Op = yp.q.frameMs(cp, 0);
        uO.l.frame(Op, yp.q.heading(cp, 0), yp.q.pitch(cp, 0), uO.g[pp]);
        const op = (0, SO.h)(pp, Op);
        if (null !== op) {
          const pp = this.renderFrame;
          this.guard((() => {
            (0, Vc.e)().turnDamageIndicators(pp.cameraHeading)
          })), this.guard((() => {
            this.clientApi.slideRoute(op)
          })), this.round(this.renderers, (ip => {
            ip.onAfterRender(op, pp)
          }))
        }
        this.writeFreeCam();
        try {
          this.scriptedCamera.afterFrame(null !== op)
        } catch (Sp) {
          this.Yy(Sp)
        }
        this.showZoom(), this.items.flush(this.Yy), this.writePromptWatch(), this.writeCustomButtons();
        const Ip = this.ticks;
        this.ticks = 0, (0, SO.f)(Ip, pp, op, this.Yy)
      }
      entityRemoved(pp) {
        this.live.despawned(pp), this.entityInfo.removed(pp)
      }
      ackEventOverflow() {
        const pp = this.api.apiView,
          ip = yp.q.eventOverflowGen(pp, 0),
          cp = ip - this.overflowGen >>> 0;
        if (0 === cp && !this.resyncOwed) return;
        this.overflowGen = ip;
        const Op = yp.q.eventOverflowMask(pp, 0),
          op = this.cmd;
        0 === Op || null === op || this.stopped() ? this.resyncOwed = !1 : this.resyncOwed = !(0, yp.ke)(op, 0, Op);
        const Ip = this.options.onEventOverflow;
        0 !== cp && Ip && this.guard((() => {
          Ip(Op, cp)
        }))
      }
      gameCall(pp, ip, cp, Op, op, Ip, Sp, xp, Lp) {
        if (pp === yp.Zb.Director) try {
          return this.scriptedCamera.call(ip, cp, Op, op, Ip, Sp)
        } catch (Yp) {
          return this.Yy(Yp), yp.cb.None
        }
        if (!this.sessionLive || void 0 !== this.fault) return pp === yp.Zb.AltVeto ? yp.g.Allow : 0;
        try {
          return this.callGames(pp, ip, cp, Op, op, Ip, Sp, xp)
        } catch (Yp) {
          throw (0, Wp.f)(Yp) && (this.fault = Yp), Yp
        }
      }
      takeFault() {
        const pp = this.fault;
        return this.fault = void 0, pp
      }
      callGames(pp, ip, cp, Op, op, Ip, Sp, xp) {
        this.api.rereadDirectory(), this.chunks.touch(), this.items.refresh(), this.live.refresh(), this.entityInfo.inCoreCall();
        const {
          tables: Lp
        } = this.options, Yp = String(this.boundId);
        switch (pp) {
          case yp.Zb.AltVeto:
          case yp.Zb.AltAction: {
            const xp = 0 !== Sp,
              [Dp, Ap, Pp] = xp ? [ip, cp, Op] : [void 0, void 0, void 0],
              Wp = xp ? Lp.nameOfId(op) : "Air",
              Up = bO(Ip);
            if (pp === yp.Zb.AltAction) return this.first((pp => {
              var ip;
              return null === (ip = pp.onPlayerAltAction) || void 0 === ip ? void 0 : ip.call(pp, Yp, Dp, Ap, Pp, Wp, Up)
            })), 0;
            const wp = this.first((pp => {
              var ip;
              return null === (ip = pp.onPlayerAttemptAltAction) || void 0 === ip ? void 0 : ip.call(pp, Yp, Dp, Ap, Pp, Wp, Up)
            }));
            return "preventAction" === wp ? yp.g.Prevent : "preventPlacement" === wp ? yp.g.PreventPlacement : yp.g.Allow
          }
          case yp.Zb.Click: {
            const pp = xp,
              Dp = 0 !== (pp & yp.H.Alt),
              Ap = 0 !== (pp & yp.H.HasPos),
              Pp = Ap ? Lp.nameOfId(op) : "Air",
              [Wp, Up, wp] = Ap ? [ip, cp, Op] : [null, null, null],
              vp = bO(Ip),
              tp = 0 !== (pp & yp.H.Up),
              Hp = bO(Sp);
            if (0 === (pp & yp.H.AttackOnly) && this.first((pp => {
                var ip, cp;
                return tp ? null === (ip = pp.onPlayerClickUp) || void 0 === ip ? void 0 : ip.call(pp, Yp, Dp, Wp, Up, wp, Pp, vp) : null === (cp = pp.onPlayerClick) || void 0 === cp ? void 0 : cp.call(pp, Yp, Dp, Wp, Up, wp, Pp, vp)
              })), !tp && !Dp && null !== Hp) {
              const pp = this.clientApi.getPositionView(Hp),
                ip = pp ? [pp[0], pp[1], pp[2]] : [0, 0, 0];
              this.first((pp => {
                var cp;
                return null === (cp = pp.onPlayerAttackEntity) || void 0 === cp ? void 0 : cp.call(pp, Yp, Hp, ip)
              }))
            }
            return 0
          }
          case yp.Zb.ChangeBlock: {
            const pp = Lp.nameOfId(op),
              Sp = Lp.nameOfId(Ip);
            return this.first((op => {
              var Ip;
              return null === (Ip = op.onPlayerChangeBlock) || void 0 === Ip ? void 0 : Ip.call(op, Yp, ip, cp, Op, pp, Sp)
            })), 0
          }
          case yp.Zb.DropItem: {
            const pp = Lp.nameOfId(ip);
            return this.first((ip => {
              var op;
              return null === (op = ip.onPlayerDropItem) || void 0 === op ? void 0 : op.call(ip, Yp, pp, cp, Op)
            })), 0
          }
          default:
            return this.onError(new Error(`Unknown game call kind ${pp}`)), 0
        }
      }
      changeBlockFail(pp, ip, cp, Op, op, Ip, Sp) {
        const xp = op === yp.Ic ? null : QO.decode(this.api.eventBytes(Ip, Math.min(op, Sp)));
        this.failures.push({
          dp: [pp, ip, cp],
          jp: Op,
          kp: xp
        })
      }
      changeBlockFailEnd() {
        const pp = this.failures;
        this.failures = [], this.sessionLive && this.round(this.owners, (ip => {
          var cp;
          null === (cp = ip.onChangeBlockFail) || void 0 === cp || cp.call(ip, pp)
        })), this.GA("EditBoard", {
          pos: null
        }), this.GA("EditCodeBlock", {
          pos: null,
          canChangePos: null
        })
      }
      inventoryEvent(pp, ip, cp, Op, op, Ip) {
        pp === yp.rc.ChestOpened ? this.items.chestOpened(cp, Op, op) : pp !== yp.rc.Synced && pp !== yp.rc.ChestClosed && pp !== yp.rc.ChestRefreshed || this.items.touch(), this.guard((() => {
          ! function(pp, ip, cp, Op) {
            switch (pp) {
              case yp.rc.Synced:
                Sp.m.GA("syncedInvenFromServer");
                break;
              case yp.rc.ChestOpened:
              case yp.rc.ChestClosed:
                Sp.m.GA("chestToggleFromServer", pp === yp.rc.ChestOpened, !0);
                break;
              case yp.rc.ChestRefreshed:
                Sp.m.GA("chestRefreshedFromServer");
                break;
              case yp.rc.EnchantingTable:
                Sp.m.GA("enchantingTable", {
                  tx: Op,
                  position: cp
                });
                break;
              case yp.rc.HotbarRequest:
                Sp.m.GA("setSelectedInventorySlotI", ip, !0);
                break;
              case yp.rc.Scrolled:
                Sp.m.GA("ScrollInventorySlot", ip);
                break;
              case yp.rc.NumberKey:
                Sp.m.GA("numkeyPressed", ip + 1);
                break;
              case yp.rc.DropRequested:
                Sp.m.GA("DropInvenItem", 0 !== ip);
                break;
              default:
                throw new Wp.b(`InventoryEvent of no kind: what ${pp}`)
            }
          }(pp, ip, [cp, Op, op], Ip)
        }))
      }
      heldItemChanged() {
        this.items.touch()
      }
      shotDamage(pp, ip, cp, Op) {
        this.GA("shotPlayer", {
          playerId: String(pp),
          damage: ip,
          wasCrit: 0 !== Op,
          distance: cp
        })
      }
      localHurt(pp, ip) {
        this.GA("closeShopOnDamaged", null), this.guard((() => {
          Sp.m.GA("damagedByOtherPlayer", {
            Ec: null,
            direction: Number.isNaN(ip) ? null : ip,
            Qp: pp
          })
        }))
      }
      attackHit(pp, ip, cp, Op, op) {
        this.guard((() => {
          Sp.m.GA("yourAttackHit", {
            cc: Op,
            screenPos: this.renderFrame.projectDirectionToScreenPos([pp, ip, cp]),
            hitSelf: op
          })
        }))
      }
      physicsType(pp) {
        this.GA("PlayerPhysicsTypeUpdate", pp)
      }
      vehicleEffect(pp, ip, cp, Op, op) {
        this.guard((() => {
          pp === Pp.Cd.UPDATE ? (0, Xp.h)(ip, {
            icon: cp,
            level: Op,
            displayName: null,
            durationMs: op
          }) : Ep.e.remove(ip)
        }))
      }
      zoomChanged(pp) {
        this.zoom = pp, this.zoomUnshown = !0
      }
      zoomDisabled() {
        this.GA("showBottomMessage", {
          message: "Zoom is disabled",
          timeoutLength: 2e3,
          type: "Error"
        })
      }
      showZoom() {
        const pp = this.scriptedCamera.holdsView();
        !this.zoomUnshown || pp && this.zoomHeld || (this.zoomUnshown = !1, this.GA("cameraZoomSet", this.zoom)), this.zoomHeld = pp
      }
      gunHit(pp) {
        this.guard((() => {
          const {
            Ec: ip,
            Xc: cp
          } = (0, dO.b)(eO.w, pp);
          Sp.m.GA("damagedByOtherPlayer", {
            Ec: ip,
            direction: cp
          })
        }))
      }
      uiEvent(pp, ip, cp, Op, op, Ip, Sp, xp) {
        this.guard((() => {
          pO(pp, ip, [cp, Op, op], Ip, this.items, this.options.tables, (() => QO.decode(this.api.eventBytes(Sp, xp))))
        }))
      }
      writeAltVeto(pp) {
        const ip = this.cmd;
        if (!ip) return;
        let cp;
        try {
          cp = function(pp, ip) {
            const cp = new Set;
            let Op = !1;
            for (const op of pp)
              if (op.onPlayerAttemptAltAction) {
                if (Op = !0, !op.altVetoBlocks) return {
                  mode: yp.Wd.All,
                  roots: []
                };
                for (const pp of op.altVetoBlocks) cp.add(ip.getMetaInfo(pp).rootId)
              } return Op ? cp.size > yp.Ec ? {
              mode: yp.Wd.All,
              roots: []
            } : {
              mode: yp.Wd.Filter,
              roots: [...cp]
            } : {
              mode: yp.Wd.Off,
              roots: []
            }
          }(pp, this.options.tables)
        } catch (op) {
          this.onError(op), cp = {
            mode: yp.Wd.All,
            roots: []
          }
        }
        if (cp.mode === yp.Wd.Off && !this.vetoSet) return;
        const Op = new Uint8Array(new Uint32Array(cp.roots).buffer);
        (0, yp.Ff)(ip, 0, cp.mode, cp.roots.length, Op) ? this.vetoSet = cp.mode !== yp.Wd.Off: this.onError(new Error("SetAltVeto didn't fit the command ring"))
      }
      endGameGrants() {
        this.freeCam.clearGame(), this.writeFreeCam()
      }
      writeFreeCam() {
        this.stopped() || this.freeCam.write(this.cmd)
      }
      writeHooks(pp) {
        const ip = this.cmd;
        if (!ip) return;
        const cp = function(pp) {
          let ip = 0;
          for (const cp of pp) cp.onPlayerAltAction && (ip |= 1 << yp.Zb.AltAction), (cp.onPlayerClick || cp.onPlayerClickUp || cp.onPlayerAttackEntity) && (ip |= 1 << yp.Zb.Click), cp.onPlayerChangeBlock && (ip |= 1 << yp.Zb.ChangeBlock), cp.onPlayerDropItem && (ip |= 1 << yp.Zb.DropItem);
          return ip
        }(pp);
        (0 !== cp || this.hooksSet) && ((0, yp.Tf)(ip, 0, cp) ? this.hooksSet = 0 !== cp : this.onError(new Error("SetHooks didn't fit the command ring")))
      }
      writeCustomButtons() {
        const pp = this.cmd;
        pp && !this.stopped() && this.customButtons.write(pp)
      }
      writePromptWatch() {
        const pp = this.cmd,
          ip = this.promptWatch;
        ip !== this.promptWatchSent && pp && !this.stopped() && (0, yp.lg)(pp, 0, TO[ip]) && (this.promptWatchSent = ip)
      }
      writePublicLobby(pp) {
        const ip = this.cmd;
        ip && pp !== this.writtenPublicLobby && ((0, yp.ag)(ip, 0, pp ? 1 : 0) ? this.writtenPublicLobby = pp : this.onError(new Error("SetPublicLobby didn't fit the command ring")))
      }
      writeLocalDbId(pp) {
        const ip = this.cmd;
        ip && ((0, yp.Xf)(ip, 0, null === pp ? 0 : 1, null === pp ? BO : JO.encode(pp)) || this.onError(new Error("SetLocalDbId didn't fit the command ring")))
      }
      first(pp) {
        const ip = this.generation;
        for (const Op of this.owners) {
          if (ip !== this.generation) break;
          try {
            const ip = pp(Op);
            if (void 0 !== ip) return ip
          } catch (cp) {
            this.Yy(cp)
          }
        }
      }
      GA(pp, ip) {
        this.guard((() => {
          Sp.m.GA(pp, ip)
        }))
      }
      dropGameCamera() {
        try {
          this.scriptedCamera.reset()
        } catch (pp) {
          this.Yy(pp)
        }
      }
      restartGameCamera() {
        try {
          this.scriptedCamera.restart()
        } catch (pp) {
          this.Yy(pp)
        }
      }
      endSession() {
        if (!this.sessionLive) return;
        this.sessionLive = !1;
        const pp = this.owners;
        let ip;
        if (this.owners = this.tickers = this.renderers = this.receivers = [], this.generation++, !this.stopped()) try {
          this.writeAltVeto([]), this.writeHooks([]), this.writePublicLobby(!1), this.writeLocalDbId(null)
        } catch (Op) {
          ip = Op
        }
        try {
          this.entityInfo.sessionEnded()
        } catch (Op) {
          ip ??= Op
        }
        this.round(pp, aO, !0);
        try {
          this.particles.sessionEnded() || this.onError(new Error("ParticleStopAll didn't fit the command ring"))
        } catch (Op) {
          ip ??= Op
        }
        try {
          this.clientApi.disposeGameOutput()
        } catch (Op) {
          ip ??= Op
        }
        const cp = this.options.onSessionEnd;
        if (cp) try {
          cp()
        } catch (Op) {
          this.onError(Op)
        }
        void 0 !== ip && this.Yy(ip)
      }
      round(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Op = this.generation;
        for (const Ip of pp) {
          if (Op !== this.generation) break;
          try {
            ip(Ip)
          } catch (op) {
            cp ? this.onError(op) : this.Yy(op)
          }
        }
      }
      guard(pp) {
        try {
          pp()
        } catch (ip) {
          this.Yy(ip)
        }
      }
    }

    function bO(pp) {
      return pp === yp.Jc ? null : String(pp)
    }

    function hO(pp) {
      pp.LP(Pp.wd)
    }

    function aO(pp) {
      var ip;
      null === (ip = pp.onClose) || void 0 === ip || ip.call(pp)
    }

    function nO(pp, ip) {
      pp.watch((() => {
        const cp = function(pp) {
          const ip = [],
            cp = Math.min(xO, pp.length);
          for (let op = 0; op < cp; op++) {
            var Op;
            const cp = null === (Op = pp.slot(op)) || void 0 === Op ? void 0 : Op.typeObj,
              Ip = cp ? (0, IO.gunTypeOf)(cp.id) : void 0;
            void 0 !== Ip && ip.push(ei[Ip])
          }
          return ip
        }(pp);
        cp.length > 0 && (ip.preload(cp), ip.preload([ui]))
      }))
    }
    var FO = cp(36654),
      gO = cp(4974),
      GO = cp(36948),
      rO = cp(36980);

    function ZO(pp) {
      const ip = (0, FO.countDecodesAs)(new gO.Howl({
          ...(0, GO.e)(pp),
          pool: 15,
          preload: !1
        }), "sheet"),
        cp = ip.load.bind(ip);
      return ip.load = () => (ip._preload = !0, (0, rO.b)(pp), cp()), ip
    }

    function zO(pp, ip, cp) {
      const Op = pp.listener;
      if (Op.positionX) sO(Op.positionX, ip, cp, 0), sO(Op.positionY, ip, cp, 1), sO(Op.positionZ, ip, cp, 2), sO(Op.forwardX, ip, cp, 3), sO(Op.forwardY, ip, cp, 4), sO(Op.forwardZ, ip, cp, 5), sO(Op.upX, ip, cp, 6), sO(Op.upY, ip, cp, 7), sO(Op.upZ, ip, cp, 8);
      else {
        let pp = !1;
        for (let Op = 0; Op < 9; Op++) pp ||= ip[Op] !== cp[Op];
        pp && (Op.setPosition(ip[0], ip[1], ip[2]), Op.setOrientation(ip[3], ip[4], ip[5], ip[6], ip[7], ip[8]), cp.set(ip))
      }
    }

    function sO(pp, ip, cp, Op) {
      ip[Op] !== cp[Op] && (pp.value = ip[Op], cp[Op] = ip[Op])
    }
    class KO {
      constructor() {
        this.pose = new Float64Array(9), this.written = new Float64Array(9).fill(Number.NaN), this.watchedCtx = void 0
      }
      apply(pp) {
        this.pose.set(pp);
        const ip = gO.Howler.ctx;
        return !!ip && (ip !== this.watchedCtx && (this.watchedCtx = ip, this.written.fill(Number.NaN), ip.addEventListener("statechange", (() => {
          "running" === ip.state && zO(ip, this.pose, this.written)
        }))), "running" === ip.state && zO(ip, pp, this.written), !0)
      }
    }
    var VO = cp(36764),
      po = cp(39391);
    let io = null,
      co = null;

    function Oo() {
      return null === io && (io = document.createElement("div"), io.className = "WasmCameraLayer", io.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;pointer-events:none", document.body.append(io)), io
    }

    function oo() {
      return co ??= new po.e(new VO.c(Oo)), co
    }

    function Io() {
      var pp;
      null === (pp = co) || void 0 === pp || pp.clear(), So(null)
    }

    function So(pp) {
      Op.c.get("scriptedCameraFacing") !== pp && Op.c.set({
        scriptedCameraFacing: pp
      })
    }
    var xo = cp(9436),
      Lo = cp(9385),
      Yo = cp(39425),
      Do = cp(41251),
      Ao = cp(3400);
    const Po = Object.entries(yp.Xb).reduce(((pp, ip) => {
      let [cp, Op] = ip;
      return pp[Op] = cp, pp
    }), []);

    function Wo(pp, ip) {
      var cp;
      return 0 !== ((null !== (cp = pp.itemFlags[ip]) && void 0 !== cp ? cp : 0) & yp.vc.Stackable)
    }
    const yo = /^(0|[1-9][0-9]*)$/,
      Uo = {
        displayName: (pp, ip) => (0, IO.displayNameOf)(ip),
        description: (pp, ip) => (0, IO.descriptionOf)(ip),
        type: (pp, ip) => (0, IO.itemTypeOf)(ip),
        clipSize: (pp, ip) => (0, IO.clipSizeOf)(ip),
        armourReduction: (pp, ip) => (0, IO.armourReductionOf)(ip),
        scopeType: (pp, ip) => (0, IO.scopeTypeOf)(ip),
        stackable: Wo,
        harvestType: (pp, ip) => Po[pp.blockHarvestTypes[ip]],
        harvestLevel: (pp, ip) => {
          const cp = pp.blockHarvestLevels[ip];
          return cp === yp.Ac ? void 0 : cp
        },
        harvests: (pp, ip) => {
          var cp;
          const Op = null !== (cp = pp.itemHarvests[ip]) && void 0 !== cp ? cp : 0;
          return 0 !== Op ? Po[Op] : void 0 === (0, IO.harvestsNullLevelOf)(ip) ? void 0 : null
        },
        level: (pp, ip) => {
          var cp, Op;
          const op = null !== (cp = pp.itemLevels[ip]) && void 0 !== cp ? cp : yp.Ac;
          return op !== yp.Ac ? op : null !== (Op = (0, IO.harvestsNullLevelOf)(ip)) && void 0 !== Op ? Op : void 0
        }
      };

    function wo(pp, ip, cp) {
      return to(new Uint8Array(Math.floor(pp.length / ip)), pp, ip, cp)
    }

    function vo(pp, ip, cp) {
      return to(new Uint16Array(Math.floor(pp.length / ip)), pp, ip, cp)
    }

    function to(pp, ip, cp, Op) {
      const op = new DataView(ip.buffer, ip.byteOffset, ip.byteLength);
      for (let Ip = 0; Ip < pp.length; Ip++) pp[Ip] = Op(op, Ip * cp);
      return pp
    }
    class Ho {
      constructor(pp, ip) {
        this.options = ip, this.metas = [], this.types = new Map, this.props = void 0, this.rootIdOf = pp => {
          const ip = this.idOf(pp);
          if (void 0 === ip) throw new Error(`No item is named ${pp}, an item's root`);
          return ip
        };
        const cp = ip => {
            const cp = ip();
            return new Uint8Array(pp.memory().buffer, pp.scratch(), cp).slice()
          },
          Op = (new TextDecoder).decode(cp((() => pp.queries.itemNames()))).split("\n"),
          op = cp((() => pp.queries.blockProps())),
          Ip = cp((() => pp.queries.itemProps()));
        this.props = {
          blockFlags: wo(op, yp.u.BYTES, yp.u.flags),
          blockHarvestTypes: wo(op, yp.u.BYTES, yp.u.harvestType),
          blockHarvestLevels: wo(op, yp.u.BYTES, yp.u.harvestLevel),
          blockAttachedTops: vo(op, yp.u.BYTES, yp.u.attachedTop),
          itemFlags: wo(Ip, yp.xc.BYTES, yp.xc.flags),
          itemHarvests: wo(Ip, yp.xc.BYTES, yp.xc.harvests),
          itemLevels: wo(Ip, yp.xc.BYTES, yp.xc.level)
        }, (0, Ao.k)(Object.freeze(Op)), (0, Do.f)()
      }
      idOf(pp) {
        if ("number" === typeof pp) return void 0 === (0, Ao.d)(pp) ? void 0 : pp;
        const ip = (0, Ao.c)(pp);
        return void 0 === ip && yo.test(pp) ? void 0 === (0, Ao.d)(+pp) ? void 0 : +pp : ip
      }
      getMetaInfo(pp) {
        if (!pp || pp === xo.d) return xo.h;
        const ip = this.idOf(pp);
        if (void 0 === ip) throw new Error(`Item ${pp} not found in registry`);
        return this.metaOf(ip)
      }
      blockRootId(pp) {
        return 0 !== pp && void 0 !== (0, Ao.d)(pp) ? this.metaOf(pp).rootId : pp
      }
      metaOf(pp) {
        return this.metas[pp] ??= (0, Lo.l)((0, Ao.d)(pp), pp, this.rootIdOf, (0, IO.rootMetaDescOf)(pp))
      }
      getItemId(pp) {
        if (!pp || pp === xo.d) return 0;
        const ip = this.idOf(pp);
        if (void 0 === ip) throw new Error(`Invalid block name. You sent ${pp}. The only valid item names are 'Air' and those contained within the blockMetadata/itemMetadata files`);
        return ip
      }
      getItemName(pp) {
        if (!pp || pp === xo.d) return xo.d;
        const ip = this.idOf(pp);
        if (void 0 === ip) throw new Error(`Item ${pp} not found in registry`);
        return (0, Ao.d)(ip)
      }
      blockNameToBlockId(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (pp === xo.d) return 0;
        let cp = this.idOf(pp);
        if (void 0 === cp || !this.isBlockId(cp)) {
          const ip = pp.indexOf("|"),
            Op = ip > 0 ? (0, Ao.c)(pp.slice(0, ip)) : void 0;
          cp = void 0 !== Op && this.isBlockId(Op) && (0, IO.rootMetaDescOf)(Op) === pp ? Op : void 0
        }
        if (void 0 !== cp) return cp;
        if (!ip) throw new Error(`Invalid block name. You sent ${pp}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`);
        return null
      }
      isBlockId(pp) {
        return pp > 0 && pp < this.props.blockFlags.length
      }
      nameOfId(pp) {
        return 0 !== pp && (0, Ao.d)(pp) || xo.d
      }
      itemType(pp) {
        const ip = pp ? this.idOf(pp) : void 0;
        if (!ip) return null;
        let cp = this.types.get(ip);
        return void 0 === cp && (cp = Object.freeze({
          id: ip,
          name: (0, Ao.d)(ip),
          meta: this.getMetaInfo(ip),
          stackable: Wo(this.props, ip),
          type: (0, IO.itemTypeNameOf)(ip),
          clipSize: (0, IO.clipSizeOf)(ip),
          scopeType: (0, IO.scopeTypeOf)(ip),
          showsAimingUi: (0, IO.showsAimingUi)(ip)
        }), this.types.set(ip, cp)), cp
      }
      getItemStat(pp, ip) {
        if (Yo.b.has(ip)) {
          const cp = "minChargeStateToUse" === ip ? this.getMetaInfo(pp).rootName : this.getItemName(pp),
            Op = this.options.get((0, Yo.d)(cp, ip));
          if (null !== Op && void 0 !== Op) return Op
        }
        return this.defaultStat(pp, ip, this.statOf(ip))
      }
      getDisplayName(pp) {
        return this.getItemStat(pp, "displayName")
      }
      getDefaultItemStat(pp, ip) {
        return this.defaultStat(pp, ip, this.statOf(ip))
      }
      statOf(pp) {
        const ip = Uo[pp];
        return void 0 === ip && function(pp, ip) {
          throw new Error(`ClientApi.${pp} is not available yet in the wasm client (${ip})`)
        }(`getItemStat("${pp}")`, `a table of the stat: the wasm client answers ${Object.keys(Uo).join(", ")}`), ip
      }
      defaultStat(pp, ip, cp) {
        const Op = this.idOf(pp),
          op = void 0 === Op ? void 0 : cp(this.props, Op);
        return null !== op && void 0 !== op || "displayName" !== ip ? op : this.getItemName(pp)
      }
      getClientOption(pp) {
        return this.options.get(pp)
      }
      getGunStats(pp) {
        return this.getClientOption(`${pp}GunStats`)
      }
      watchClientOption(pp, ip) {
        return this.options.subscribe(pp, ip)
      }
      isSolidBlockId(pp) {
        var ip;
        return 0 !== ((null !== (ip = this.props.blockFlags[pp]) && void 0 !== ip ? ip : 0) & yp.s.Solid)
      }
      isStackableId(pp) {
        return Wo(this.props, pp)
      }
      isFluidBlockId(pp) {
        var ip;
        return 0 !== ((null !== (ip = this.props.blockFlags[pp]) && void 0 !== ip ? ip : 0) & yp.s.Fluid)
      }
      canPlaceOverBlockId(pp) {
        var ip;
        return 0 !== ((null !== (ip = this.props.blockFlags[pp]) && void 0 !== ip ? ip : 0) & yp.s.PlaceOver)
      }
      attachedTopOf(pp) {
        var ip;
        return null !== (ip = this.props.blockAttachedTops[pp]) && void 0 !== ip ? ip : 0
      }
      isDroplessBlockId(pp) {
        return (0, IO.dropsNothing)(pp)
      }
    }

    function eo(pp, ip) {
      const cp = new Map;
      return (Op, op) => {
        const Ip = ip.idOf(Op),
          Sp = void 0 === Ip ? null : (Op => {
            let op = cp.get(Op);
            if (void 0 === op) {
              const Ip = pp.queries.salvageRecipe(Op),
                Sp = new DataView(pp.memory().buffer, pp.scratch(), Ip),
                xp = [];
              for (let pp = 0; pp + yp.Id.BYTES <= Ip; pp += yp.Id.BYTES) xp.push(Object.freeze({
                item: ip.nameOfId(yp.Id.item(Sp, pp)),
                amt: yp.Id.amount(Sp, pp)
              }));
              op = 0 === xp.length ? null : Object.freeze(xp), cp.set(Op, op)
            }
            return op
          })(Ip);
        if (null === Sp || void 0 === op) return Sp;
        const xp = op <= 0 ? 1 : op;
        return Sp.map((pp => {
          let {
            item: ip,
            amt: cp
          } = pp;
          return {
            item: ip,
            amt: cp * xp
          }
        }))
      }
    }
    var uo = cp(40967),
      jo = cp(37169),
      ko = cp(37151),
      mo = cp(37156),
      Ro = cp(36693),
      qo = cp(40879),
      Mo = cp(42875);
    const Co = -1,
      Eo = new Uint8Array(0),
      Xo = new TextEncoder;

    function Qo(pp) {
      if (null === pp) return null;
      const ip = Xo.encode(pp);
      return ip.byteLength < Pp.Dc ? ip : ip.subarray(0, Pp.Dc - 1)
    }
    class Jo {
      constructor(pp) {
        this.deps = pp, this.lastView = null, this.lastKeyframes = [], this.keyframesVersion = Co, this.keyframesSettled = !1, this.reloadFrom = Co
      }
      reloadKeyframes() {
        var pp, ip;
        this.keyframesVersion = Co, this.reloadFrom = null !== (pp = null === (ip = this.view()) || void 0 === ip ? void 0 : ip.version) && void 0 !== pp ? pp : Co
      }
      setPlayback(pp) {
        const ip = 1 === this.deps.core.wIp(pp);
        return ip && (this.lastView = null, this.lastKeyframes = [], this.keyframesVersion = Co, this.reloadFrom = Co), ip
      }
      async open(pp, ip) {
        const cp = await this.deps.replay.open(pp, ip);
        return "opening" === cp && (this.reloadKeyframes(), this.deps.recorder.prefetch()), cp
      }
      play() {
        this.deps.replay.play()
      }
      pause() {
        this.deps.replay.pause()
      }
      seek(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.deps.replay.seek(Math.max(0, Math.floor(pp)), ip)
      }
      setSpeed(pp) {
        this.deps.replay.setSpeed(pp)
      }
      setCameraMode(pp) {
        this.deps.replay.setCameraMode(Mo.b.indexOf(pp))
      }
      view() {
        var pp;
        const ip = yp.q.replayViewPtr(this.deps.apiView(), 0);
        if (0 === ip) return this.lastView = null, null;
        const cp = new DataView(this.deps.buffer(), ip, yp.Cd.BYTES),
          Op = yp.Cd.version(cp, 0),
          op = this.lastView;
        if (null !== op && op.version === Op) return op;
        const Ip = yp.Cd.markIn(cp, 0),
          Sp = {
            version: Op,
            state: yp.Cd.state(cp, 0),
            cameraMode: null !== (pp = Mo.b[yp.Cd.cameraMode(cp, 0)]) && void 0 !== pp ? pp : "recording",
            LP: yp.Cd.LP(cp, 0),
            totalTicks: yp.Cd.totalTicks(cp, 0),
            speed: yp.Cd.speed(cp, 0),
            mark: Ip === yp.Bd ? null : {
              inTick: Ip,
              outTick: yp.Cd.markOut(cp, 0)
            },
            editVersion: yp.Cd.editVersion(cp, 0)
          };
        return this.lastView = Sp, Sp
      }
      keyframes() {
        const pp = this.view();
        if (null === pp) return [];
        pp.version !== this.reloadFrom && (this.reloadFrom = Co);
        const ip = this.reloadFrom === Co && pp.state !== Pp.jd.Cropping && pp.state !== Pp.jd.None,
          cp = ip ? pp.editVersion : pp.version;
        if (cp === this.keyframesVersion && ip === this.keyframesSettled) return this.lastKeyframes;
        const {
          core: Op
        } = this.deps, op = Op.vIp(), Ip = Op.gw(), Sp = [];
        if (0 !== Ip && op > 0) {
          const pp = new DataView(this.deps.buffer(), Ip, op * Pp.uc);
          for (let ip = 0; ip < op; ip++) {
            const cp = ip * Pp.uc,
              Op = ip => pp.getFloat64(cp + ip, !0);
            Sp.push({
              LP: pp.getUint32(cp + Pp.Bc, !0),
              position: [Op(Pp.Ac), Op(Pp.Ac + 8), Op(Pp.Ac + 16)],
              direction: [Op(Pp.vc), Op(Pp.vc + 8), Op(Pp.vc + 16)],
              easing: [Op(Pp.wc), Op(Pp.wc + 8), Op(Pp.wc + 16), Op(Pp.wc + 24)]
            })
          }
        }
        return this.keyframesVersion = cp, this.keyframesSettled = ip, this.lastKeyframes = Sp, Sp
      }
      addKeyframe() {
        const pp = this.deps.apiView(),
          ip = [yp.q.eye(pp, 0, 0), yp.q.eye(pp, 0, 1), yp.q.eye(pp, 0, 2)];
        return this.deps.replay.addKeyframe(ip, function(pp, ip) {
          const cp = Math.cos(ip);
          return [cp * Math.sin(pp), -Math.sin(ip), cp * Math.cos(pp)]
        }(yp.q.heading(pp, 0), yp.q.pitch(pp, 0)))
      }
      setKeyframe(pp) {
        return this.deps.replay.setKeyframe(pp.LP, Float64Array.from([...pp.position, ...pp.direction, ...pp.easing]))
      }
      moveKeyframe(pp, ip) {
        return this.deps.replay.moveKeyframe(pp, ip)
      }
      deleteKeyframes(pp, ip) {
        return this.deps.replay.deleteKeyframes(pp, ip)
      }
      setMark(pp) {
        var ip, cp;
        return this.deps.replay.setMark(null !== (ip = null === pp || void 0 === pp ? void 0 : pp.inTick) && void 0 !== ip ? ip : -1, null !== (cp = null === pp || void 0 === pp ? void 0 : pp.outTick) && void 0 !== cp ? cp : -1)
      }
      crop(pp, ip) {
        const cp = this.deps.replay.crop(pp, ip);
        return cp && this.reloadKeyframes(), cp
      }
      save(pp) {
        return this.deps.replay.askSave(), this.deps.recorder.saveEdited(pp)
      }
      recorderControl(pp) {
        this.deps.recorder.control(pp)
      }
      recorderPrefs(pp, ip) {
        this.deps.recorder.prefs(pp, ip)
      }
      recorderOption(pp, ip) {
        const cp = this.deps.cmd();
        return null !== cp && (0, yp.uf)(cp, 0, pp, null === ip ? Eo : Xo.encode(ip))
      }
      recordFlyingText(pp, ip, cp, Op) {
        const op = this.deps.cmd(),
          Ip = Math.max(0, Math.min(4294967295, Math.round(Op)));
        return null !== op && (0, yp.pf)(op, 0, ip, cp, Ip, Xo.encode(pp))
      }
      recordPlayerKilled(pp, ip, cp, Op) {
        const op = this.deps.cmd();
        return null !== op && (0, yp.wf)(op, 0, pp, ip, Math.max(0, cp), Xo.encode(Op))
      }
      recordKillfeed(pp, ip, cp) {
        var Op, op;
        const Ip = this.deps.cmd(),
          Sp = function(pp) {
            const ip = pp.reduce(((pp, ip) => {
                var cp;
                return pp + zc.lb + (null !== (cp = null === ip || void 0 === ip ? void 0 : ip.byteLength) && void 0 !== cp ? cp : 0)
              }), 0),
              cp = new Uint8Array(ip),
              Op = new DataView(cp.buffer);
            let op = 0;
            for (const Sp of pp) {
              var Ip;
              Op.setUint16(op, null !== (Ip = null === Sp || void 0 === Sp ? void 0 : Sp.byteLength) && void 0 !== Ip ? Ip : Pp.Dc, !0), op += zc.lb, null !== Sp && (cp.set(Sp, op), op += Sp.byteLength)
            }
            return cp
          }([Qo(pp.name), Qo(pp.colour), Qo(ip.name), Qo(ip.colour), Qo(cp)]);
        return null !== Ip && (0, yp.rf)(Ip, 0, null !== (Op = pp.id) && void 0 !== Op ? Op : yp.Nc, null !== (op = ip.id) && void 0 !== op ? op : yp.Nc, Sp)
      }
      recorderSession(pp, ip) {
        this.deps.recorder.session({
          session: ip,
          lobbyType: pp.lobbyType,
          game: pp.gameNameWithVariation,
          lobby: pp.lobbyName
        })
      }
      recorderClose() {
        this.deps.core.tIp()
      }
      filePartDone(pp, ip) {
        this.deps.recorder.filePartDone(pp, ip)
      }
      fileDone(pp) {
        this.deps.recorder.fileDone(pp)
      }
    }
    const Bo = -2147483648;
    class No {
      constructor(pp) {
        var ip;
        this.deps = pp, this.state = {
          recording: !1,
          clipping: !1,
          hasClipBuffer: !1,
          seconds: 0
        }, this.recordingSince = null, this.clipTickPending = !1, this.now = void 0, this.now = null !== (ip = pp.now) && void 0 !== ip ? ip : () => performance.now()
      }
      get current() {
        return this.state
      }
      get live() {
        var pp, ip, cp;
        return null === (pp = null === (ip = (cp = this.deps).live) || void 0 === ip ? void 0 : ip.call(cp)) || void 0 === pp || pp
      }
      activated(pp) {
        var ip, cp;
        this.live && (this.viewerShown(!0 === (null === (ip = (cp = this.deps).viewerOpen) || void 0 === ip ? void 0 : ip.call(cp))), this.deps.client.recorderSession(pp, (0, Mo.e)()))
      }
      closed() {
        this.deps.client.recorderClose()
      }
      toggleRecording() {
        var pp, ip;
        this.live && (this.state.recording || !0 !== (null === (pp = (ip = this.deps).viewerOpen) || void 0 === pp ? void 0 : pp.call(ip))) ? this.deps.client.recorderControl(Pp.Uc.ToggleRecording) : this.deps.notify(mo.c.closeViewerFirst)
      }
      saveClip() {
        this.live ? this.deps.client.recorderControl(Pp.Uc.SaveClip) : this.deps.notify(mo.c.clippingNotOn)
      }
      viewerShown(pp) {
        this.live && this.deps.client.recorderControl(pp ? Pp.Uc.ViewerOpened : Pp.Uc.ViewerClosed)
      }
      setPrefs(pp, ip) {
        this.live && this.deps.client.recorderPrefs(pp, ip)
      }
      setOption(pp, ip) {
        this.live && this.deps.client.recorderOption(pp, ip)
      }
      recordFlyingText(pp, ip, cp, Op) {
        this.live && this.deps.client.recordFlyingText(pp, ip, cp, Op)
      }
      recordPlayerKilled(pp, ip, cp, Op) {
        this.live && this.deps.client.recordPlayerKilled(pp, ip, cp, Op)
      }
      recordKillfeed(pp, ip, cp) {
        this.live && this.deps.client.recordKillfeed(pp, ip, cp)
      }
      LP() {
        let pp = this.state;
        if (this.clipTickPending && (this.clipTickPending = !1, pp = {
            ...pp,
            hasClipBuffer: !0
          }), null !== this.recordingSince) {
          const ip = Math.floor((this.now() - this.recordingSince) / 1e3);
          ip !== pp.seconds && (pp = {
            ...pp,
            seconds: ip
          })
        }
        this.set(pp)
      }
      onEvent(pp) {
        var ip, cp;
        const {
          notify: Op
        } = this.deps, op = mo.c;
        switch (pp.what) {
          case Pp.Sc.RecordingStarted:
            this.recordingSince = this.now(), this.set({
              ...this.state,
              recording: !0,
              seconds: 0
            }), Op(op.recordingStarted);
            break;
          case Pp.Sc.RecordingStopped:
            this.stopRecording(), Op(op.recordingStopped), this.saveState(Pp.ad.Recording, "saving");
            break;
          case Pp.Sc.RecordingDiscarded:
            this.stopRecording(), Op(op.recordingDiscarded);
            break;
          case Pp.Sc.RecordingTurnedOff:
            this.stopRecording(), Op(op.recordingTurnedOff);
            break;
          case Pp.Sc.LimitReached:
            Op(op.limitReached);
            break;
          case Pp.Sc.ClipSaved:
            this.saveState(Pp.ad.Clip, "saving");
            break;
          case Pp.Sc.ClipEmpty:
            Op(op.clipEmpty);
            break;
          case Pp.Sc.ClippingNotOn:
            Op(op.clippingNotOn);
            break;
          case Pp.Sc.Disallowed:
            Op(op.disallowed);
            break;
          case Pp.Sc.ClippingOn:
            this.clipTickPending = !0, this.set({
              ...this.state,
              clipping: !0,
              hasClipBuffer: !1
            });
            break;
          case Pp.Sc.ClippingOff:
            this.clipTickPending = !1, this.set({
              ...this.state,
              clipping: !1,
              hasClipBuffer: !1
            });
            break;
          case Pp.Sc.ClipSettingsChanged:
            this.clipTickPending = this.state.clipping, this.set({
              ...this.state,
              hasClipBuffer: !1
            });
            break;
          case Pp.Sc.SaveBusy:
            null === (ip = (cp = this.deps).onSaveState) || void 0 === ip || ip.call(cp, pp.kind, "busy"), Op(op.saveBusy);
            break;
          case Pp.Sc.CloseViewerFirst:
            Op(op.closeViewerFirst)
        }
      }
      fileReady(pp, ip) {
        this.deps.download(ip), this.saveState(pp, "done"), this.deps.notify(pp === Pp.ad.Clip ? mo.c.clipSaved : mo.c.recordingSaved)
      }
      failed(pp) {
        this.saveState(pp, "failed"), this.deps.notify(pp === Pp.ad.Clip ? mo.c.clipFailed : mo.c.recordingFailed)
      }
      stopRecording() {
        this.recordingSince = null, this.set({
          ...this.state,
          recording: !1,
          seconds: 0
        })
      }
      saveState(pp, ip) {
        var cp, Op;
        null === (cp = (Op = this.deps).onSaveState) || void 0 === cp || cp.call(Op, pp, ip)
      }
      set(pp) {
        pp !== this.state && (this.state = pp, this.deps.onState(pp))
      }
    }
    const To = new TextDecoder;

    function fo(pp, ip, cp, Op) {
      const op = [];
      for (let Ip = 0; Ip < Op; Ip++) {
        if (ip + zc.lb > cp) return null;
        const Op = pp.getUint16(ip, !0);
        if (ip += zc.lb, Op !== Pp.Dc) {
          if (ip + Op > cp) return null;
          op.push(To.decode(new Uint8Array(pp.buffer, pp.byteOffset + ip, Op))), ip += Op
        } else op.push(null)
      }
      return ip === cp ? op : null
    }

    function bo(pp, ip) {
      let cp = new DataView(new ArrayBuffer(0)),
        Op = !0;
      const op = {
        replayFailed: (ip, cp, Op) => {
          pp.replayFailed({
            reason: ip,
            code: cp,
            version: Op
          })
        },
        replayOption: (ip, op, Ip, Sp) => {
          const xp = function(pp, ip, cp, Op) {
            switch (ip) {
              case Pp.dd.Cleared:
                return 0 === Op ? null : void 0;
              case Pp.dd.Text:
                return To.decode(new Uint8Array(pp.buffer, pp.byteOffset + cp, Op));
              case Pp.dd.Int:
                return Op === Int32Array.BYTES_PER_ELEMENT ? pp.getInt32(cp, !0) : void 0;
              case Pp.dd.Double:
                return Op === Float64Array.BYTES_PER_ELEMENT ? pp.getFloat64(cp, !0) : void 0;
              default:
                return
            }
          }(cp, op, Ip, Sp);
          void 0 !== xp ? pp.replayOption({
            key: ip,
            value: xp
          }) : Op = !1
        },
        replayUiEvent: (ip, op, Ip, Sp, xp, Lp) => {
          const Yp = function(pp, ip, cp, Op, op, Ip, Sp) {
            const xp = Ip + Sp;
            switch (ip) {
              case Pp.gd.FlyingText: {
                const Sp = fo(pp, Ip, xp, 1);
                return null !== Sp && null !== Sp[0] ? {
                  what: ip,
                  cS: cp,
                  iS: Op,
                  angle: op,
                  contentJson: Sp[0]
                } : null
              }
              case Pp.gd.PlayerKilled: {
                const Op = fo(pp, Ip, xp, 3);
                return Op ? {
                  what: ip,
                  killstreak: cp,
                  dead: Op[0],
                  killer: Op[1],
                  withItem: Op[2]
                } : null
              }
              case Pp.gd.Killfeed: {
                const cp = fo(pp, Ip, xp, 7);
                return cp ? {
                  what: ip,
                  killerId: cp[0],
                  killerName: cp[1],
                  killerColour: cp[2],
                  victimId: cp[3],
                  victimName: cp[4],
                  victimColour: cp[5],
                  withItem: cp[6]
                } : null
              }
              default:
                return null
            }
          }(cp, ip, op, Ip, Sp, xp, Lp);
          null !== Yp ? pp.replayUiEvent(Yp) : Op = !1
        },
        replayFilePart: (cp, op, Ip, Sp) => {
          const xp = ip();
          Ip + Sp > xp.byteLength ? Op = !1 : pp.filePart(cp, op, new Uint8Array(xp, Ip, Sp).slice())
        },
        replayFileReady: (ip, cp, Op, op) => {
          pp.fileReady({
            save: ip,
            kind: cp,
            parts: Op,
            bytes: op
          })
        },
        recorderEvent: (ip, cp, Op) => {
          pp.recorderEvent({
            what: ip,
            kind: cp,
            save: Op
          })
        },
        replayOpened: (ip, Op, op) => {
          pp.replayOpened(To.decode(new Uint8Array(cp.buffer, cp.byteOffset + Op, op)))
        }
      };
      return (pp, ip, Ip, Sp) => !(pp < Pp.bb.ReplayFailed || pp > Pp.bb.RecorderEvent) && (cp = ip, Op = !0, (0, yp.$d)(pp, ip, Ip, Sp, op) && Op)
    }

    function ho(pp) {
      let ip = null;
      const cp = bo(pp, (() => {
        if (null === ip) throw new Error("a recorder event read outside recorderEventReader's call");
        return ip.buffer
      }));
      return (pp, Op) => {
        ip = Op;
        try {
          ! function(pp, ip) {
            const cp = pp.slice(),
              Op = new DataView(cp.buffer);
            for (let op = 0; op < cp.byteLength;) {
              if (op + Pp.$ > cp.byteLength) throw new Error(`the recorder module's events end mid-head at ${op}`);
              const pp = Op.getUint32(op, !0),
                Ip = 65535 & pp,
                Sp = pp >>> 16,
                xp = op + Pp.$;
              if (xp + Sp > cp.byteLength || !ip(Ip, Op, xp, Sp)) throw new Error(`the recorder module wrote a malformed event ${Ip} (${Sp} bytes) at ${op}`);
              op = xp + (0, Pp.ue)(Sp)
            }
          }(pp, cp)
        } finally {
          ip = null
        }
      }
    }
    class ao {
      constructor(pp, ip) {
        this.acks = pp, this.handlers = ip, this.parts = new Map
      }
      onPart(pp, ip, cp) {
        let Op = this.parts.get(pp);
        Op || (Op = [], this.parts.set(pp, Op)), Op[ip] = cp, this.acks.filePartDone(pp, ip)
      }
      onReady(pp) {
        var ip;
        const cp = null !== (ip = this.parts.get(pp.save)) && void 0 !== ip ? ip : [];
        this.parts.delete(pp.save);
        const Op = function(pp, ip, cp) {
          if (pp.length !== ip) return null;
          let Op = 0;
          for (let Sp = 0; Sp < ip; Sp++) {
            if (void 0 === pp[Sp]) return null;
            Op += pp[Sp].byteLength
          }
          if (Op !== cp) return null;
          if (1 === ip) return pp[0];
          const op = new Uint8Array(cp);
          let Ip = 0;
          for (const Sp of pp) op.set(Sp, Ip), Ip += Sp.byteLength;
          return op
        }(cp, pp.parts, pp.bytes);
        this.acks.fileDone(pp.save), null === Op ? this.handlers.fileIncomplete(pp.save, pp.kind) : this.handlers.fileReady(pp.save, pp.kind, Op)
      }
      onDiscarded(pp) {
        this.parts.delete(pp)
      }
    }

    function no() {
      return cp.e(61).then((() => cp(60725)))
    }
    class Fo {
      constructor(pp) {
        this.deps = pp, this.sink = void 0, this.recorder = void 0, this.recorderEvents = void 0, this.parts = void 0, this.viewerChunk = null, this.viewer = null;
        const {
          client: ip
        } = pp;
        this.recorder = new No({
          client: ip,
          live: () => {
            var pp;
            return !0 !== (null === (pp = this.viewer) || void 0 === pp ? void 0 : pp.inPlayback)
          },
          viewerOpen: pp.viewerOpen,
          notify: pp.notify,
          download: ip => {
            var cp;
            null === (cp = pp.download) || void 0 === cp || cp.call(pp, ip)
          },
          onState: pp.onRecorderState,
          onSaveState: pp.onSaveState
        }), this.parts = new ao(ip, {
          fileReady: (pp, ip, cp) => {
            var Op;
            ip === Pp.ad.Edited ? null === (Op = this.viewer) || void 0 === Op || Op.saveDone(cp) : this.recorder.fileReady(ip, cp)
          },
          fileIncomplete: (pp, ip) => {
            this.saveFailed(ip)
          }
        });
        const cp = {
          replayFailed: pp => {
            var ip;
            null === (ip = this.viewer) || void 0 === ip || ip.onFailed(pp)
          },
          replayOption: ip => {
            var cp;
            null === (cp = pp.onReplayOption) || void 0 === cp || cp.call(pp, ip)
          },
          replayUiEvent: ip => {
            var cp;
            null === (cp = pp.onReplayUiEvent) || void 0 === cp || cp.call(pp, ip)
          },
          filePart: (pp, ip, cp) => {
            this.parts.onPart(pp, ip, cp)
          },
          fileReady: pp => {
            this.parts.onReady(pp)
          },
          replayOpened: ip => {
            var cp;
            null === (cp = pp.onReplayOpened) || void 0 === cp || cp.call(pp, ip)
          },
          recorderEvent: pp => {
            var ip;
            switch (pp.what) {
              case Pp.Sc.FileDiscarded:
                this.parts.onDiscarded(pp.save);
                break;
              case Pp.Sc.SaveFailed:
                this.saveFailed(pp.kind);
                break;
              case Pp.Sc.SaveBusy:
                if (null !== (ip = this.viewer) && void 0 !== ip && ip.savePending) {
                  this.viewer.saveFailed(!0);
                  break
                }
                this.recorder.onEvent(pp);
                break;
              default:
                this.recorder.onEvent(pp)
            }
          }
        };
        this.sink = function(pp, ip) {
          return {
            onReplayEvent: bo(pp, ip)
          }
        }(cp, pp.buffer), this.recorderEvents = ho(cp)
      }
      get currentViewer() {
        return this.viewer
      }
      loadViewer() {
        var pp;
        return this.viewer ? Promise.resolve(this.viewer) : (this.viewerChunk ??= (null !== (pp = this.deps.loadViewer) && void 0 !== pp ? pp : no)().catch((pp => {
          throw this.viewerChunk = null, pp
        })), this.viewerChunk.then((pp => (this.viewer ??= new pp.ReplayViewer({
          client: this.deps.client,
          setHoldDraws: this.deps.setHoldDraws,
          meshPending: this.deps.meshPending,
          notify: this.deps.notify,
          onChange: () => {
            var pp, ip;
            null === (pp = (ip = this.deps).onViewerChange) || void 0 === pp || pp.call(ip)
          }
        }), this.viewer))))
      }
      activated(pp) {
        this.recorder.activated(pp)
      }
      afterFrame(pp) {
        try {
          pp > 0 && this.recorder.LP()
        } finally {
          var ip;
          null === (ip = this.viewer) || void 0 === ip || ip.afterFrame()
        }
      }
      end() {
        var pp;
        null === (pp = this.viewer) || void 0 === pp || pp.end()
      }
      saveFailed(pp) {
        var ip;
        pp === Pp.ad.Edited ? null === (ip = this.viewer) || void 0 === ip || ip.saveFailed(!1) : this.recorder.failed(pp)
      }
    }
    var go = cp(40818),
      Go = cp(40837),
      ro = cp(4919),
      Zo = cp(41120);
    class zo {
      constructor(pp) {
        this.deps = pp, this.analogue = [0, 0], this.keys = 0, this.unsent = !1
      }
      drag(pp, ip) {
        if (!this.deps.live() || 0 === pp && 0 === ip) return;
        const cp = (0, Tp.v)(0, performance.now()),
          Op = this.deps.dragScale();
        (0, Zo.g)((() => {
          (0, Tp.A)(Pp.wb.MouseDown, 0, 0, 0, cp), (0, Tp.A)(Pp.wb.MouseMove, 0, pp * Op, ip * Op, 0), (0, Tp.A)(Pp.wb.MouseUp, 0, 0, 0, cp)
        }))
      }
      move(pp) {
        var ip, cp;
        this.analogue[0] = null !== (ip = null === pp || void 0 === pp ? void 0 : pp.x) && void 0 !== ip ? ip : 0, this.analogue[1] = null !== (cp = null === pp || void 0 === pp ? void 0 : pp.y) && void 0 !== cp ? cp : 0, this.send()
      }
      holdVertical(pp, ip) {
        const cp = "freeCamUp" === pp ? yp.Kb.Up : yp.Kb.Down;
        this.keys = ip ? this.keys | cp : this.keys & ~cp, this.send()
      }
      flush() {
        this.unsent && this.send()
      }
      send() {
        const pp = this.deps.live() ? this.deps.cmd() : null;
        this.unsent = null !== pp && !(0, yp.oe)(pp, 0, this.analogue, this.keys)
      }
    }
    var so = cp(3657),
      Ko = cp(732),
      Vo = cp(272),
      pI = cp(104),
      iI = cp(34361),
      cI = cp(716),
      OI = cp(36783);

    function oI() {
      const pp = Op.c.get("clientEscMenuOptions"),
        ip = (0, Ko.n)(pp);
      return {
        mouse: (0, pI.isMobile)() ? ip : pp.mouseSensitivity,
        touch: ip,
        fovPercent: pp.cameraFOV
      }
    }

    function II() {
      const pp = Op.c.get("clientEscMenuOptions"),
        ip = Op.c.get("isTouchScreen") ? (0, Ko.n)(pp) : pp.mouseSensitivity,
        cp = oI().mouse;
      return cp > 0 ? ip / cp : 1
    }

    function SI(pp) {
      const ip = () => {
        pp.setSoundPrefs(Op.c.get("soundVolume"), Op.c.get("soundOnFromAd"))
      };
      let cp = null;
      const op = () => {
        const {
          showFog: ip,
          enableLighting: op,
          fogChunkDistance: Ip,
          chunkFadeIn: Sp
        } = Op.c.get("clientEscMenuOptions"), xp = {
          showFog: ip,
          lighting: op,
          fogChunks: Ip,
          chunkFade: Sp,
          cellLight: (0, so.n)("cellLight") ? (0, so.n)("cellLightUnlit") ? "all" : "lit" : "off"
        };
        cp && (0, Pp.ce)(cp) === (0, Pp.ce)(xp) && cp.fogChunks === Ip || (cp = xp, pp.setEnvPrefs(cp))
      };
      let Ip = null;
      const xp = () => {
        const ip = function() {
          const pp = Op.c.get("clientEscMenuOptions");
          return {
            nametagsHidden: Op.c.get("areNametagsHidden"),
            crouchToggle: pp.crouchIsToggle,
            bhopDisabled: pp.disableBunnyHopping,
            disableBobbing: pp.disableBobbing,
            ezTowering: pp.ezTowering ? (0, Vo.h)() : null,
            ezBridging: pp.ezBridging,
            showChunkBorders: pp.showChunkBorders,
            touchWalk: !(0, OI.d)(),
            edgeGuard: pp.touchEdgeGuard,
            edgeGuardLong: (0, cI.c)(),
            nametagCutDistance: (0, iI.h)()
          }
        }();
        (0, qp.Td)(Ip, ip) || (Ip = ip, pp.setUiPrefs(ip))
      };
      let Lp = null;
      const Yp = () => {
        const ip = oI();
        (0, qp.Td)(Lp, ip) || (Lp = ip, pp.setLookPrefs(ip))
      };
      ip(), op(), xp(), Yp();
      const Dp = [(0, Sp.n)("appManagerUpdated|soundVolume", ip), (0, Sp.n)("appManagerUpdated|soundOnFromAd", ip), (0, Sp.n)("appManagerUpdated|clientEscMenuOptions", (() => {
        op(), xp(), Yp()
      })), (0, Sp.n)(OI.c, xp), (0, Sp.n)("appManagerUpdated|enabledDebugFeatures", op), (0, Sp.n)("appManagerUpdated|areNametagsHidden", xp), (0, Sp.n)("appManagerUpdated|showDistantNametags", xp)];
      return () => {
        for (const pp of Dp) pp()
      }
    }
    var xI = cp(41096),
      LI = cp(41104);
    var YI = (0, LI.c)("lend"),
      DI = (0, LI.c)("starting"),
      AI = (0, LI.c)("generation"),
      PI = (0, LI.c)("end");
    class WI {
      constructor(pp) {
        this.deps = pp, Object.defineProperty(this, PI, {
          value: yI
        }), Object.defineProperty(this, YI, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, DI, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, AI, {
          writable: !0,
          value: 0
        })
      }
      get active() {
        return null !== (0, xI.e)(this, YI)[YI] || (0, xI.e)(this, DI)[DI]
      }
      async start(pp) {
        if (this.active) return "busy";
        const ip = (0, xI.e)(this, AI)[AI];
        (0, xI.e)(this, DI)[DI] = !0;
        try {
          if (!await this.deps.ensureLoaded()) return "refused"
        } finally {
          (0, xI.e)(this, DI)[DI] = !1
        }
        if (ip !== (0, xI.e)(this, AI)[AI]) return "refused";
        const cp = this.deps.beginSave();
        if (!cp) return "refused";
        const Op = Number(BigInt.asUintN(32, pp)),
          op = Number(BigInt.asUintN(32, pp >> 32n));
        let Ip = "refused";
        return this.deps.recorderCall(((pp, ip) => {
          const Sp = cp.editState,
            xp = pp.stage(Sp.length);
          0 !== xp ? (new Uint8Array(ip.buffer, xp, Sp.length).set(Sp), pp.HIp(cp.headLen, Op, op) && (Ip = "sealing")) : Ip = "tooLarge"
        }), !0), "sealing" !== Ip ? (cp.end(), Ip) : ((0, xI.e)(this, YI)[YI] = cp, "sealing")
      }
      beforeRecorderStep() {
        const pp = (0, xI.e)(this, YI)[YI];
        if (!pp) return null;
        let ip = -1,
          cp = 0;
        if (!this.deps.recorderCall((pp => {
            ip = pp.dIp(), ip > 0 && (cp = pp.eIp())
          }))) return (0, xI.e)(this, PI)[PI](pp, "stopped");
        if (ip < 0) return (0, xI.e)(this, PI)[PI](pp, "read");
        if (0 === ip) return null;
        const Op = pp.head(cp, ip);
        let op = !1;
        if (Op && this.deps.recorderCall(((pp, cp) => {
            const Ip = pp.stage(ip);
            0 !== Ip && (new Uint8Array(cp.buffer, Ip, ip).set(Op), op = !0)
          }), !0), op) return null;
        const Ip = pp.givenUp();
        this.deps.recorderCall((pp => {
          pp.uIp()
        }));
        const Sp = (0, xI.e)(this, PI)[PI](pp, Ip ? "givenUp" : "stopped");
        return Ip && this.deps.givenUp("Reopen the replay you were editing to make your edits again, as they weren't saved when another replay opened."), Sp
      }
      stop() {
        (0, xI.e)(this, AI)[AI]++;
        const pp = (0, xI.e)(this, YI)[YI];
        pp && (this.deps.recorderCall((pp => {
          pp.uIp()
        })), (0, xI.e)(this, PI)[PI](pp, "stopped"))
      }
    }

    function yI(pp, ip) {
      return (0, xI.e)(this, YI)[YI] = null, pp.end(), ip
    }

    function UI(pp, ip) {
      const cp = new Uint8Array(4),
        Op = new DataView(cp.buffer);
      return Op.setUint8(0, pp ? 1 : 0), Op.setUint16(2, Math.max(0, Math.min(65535, Math.round(ip))), !0), cp
    }

    function wI(pp, ip) {
      return pp > function(pp) {
        return 16777216 + 314572.8 * Math.max(0, pp)
      }(ip) + 33554432
    }
    let vI = null;

    function tI(pp) {
      return vI ??= async function(pp) {
        const ip = pp.loadInFlight();
        ip && await ip.catch((() => {}));
        if (pp.trapped()) return "trapped";
        if (pp.busy() || !wI(pp.memoryBytes(), pp.clipSeconds())) return "aW";
        pp.unload();
        let cp = !1;
        try {
          cp = await pp.load()
        } catch {
          cp = !1
        }
        if (!cp) return pp.trapped() ? "trapped" : pp.Ry() ? "Ry" : "failed";
        return "recycled"
      }(pp).finally((() => {
        vI = null
      })), vI
    }
    const HI = "Replay recording couldn't load, so try again.",
      dI = new Set([Pp.Uc.ToggleRecording, Pp.Uc.SaveClip]);
    var eI = (0, LI.c)("bindings"),
      uI = (0, LI.c)("module"),
      jI = (0, LI.c)("memory"),
      kI = (0, LI.c)("trapped"),
      mI = (0, LI.c)("Ry"),
      RI = (0, LI.c)("recycleDue"),
      qI = (0, LI.c)("loading"),
      MI = (0, LI.c)("generation"),
      CI = (0, LI.c)("viewDrawn"),
      EI = (0, LI.c)("clip"),
      XI = (0, LI.c)("session"),
      lI = (0, LI.c)("control"),
      QI = (0, LI.c)("deferred"),
      JI = (0, LI.c)("coreU8"),
      BI = (0, LI.c)("coreU32"),
      NI = (0, LI.c)("moduleU8"),
      TI = (0, LI.c)("edited"),
      fI = (0, LI.c)("sendSession"),
      bI = (0, LI.c)("checkNotInEvents"),
      hI = (0, LI.c)("clipping"),
      aI = (0, LI.c)("busy"),
      nI = (0, LI.c)("use"),
      FI = (0, LI.c)("ensureLoaded"),
      gI = (0, LI.c)("loadOnce"),
      GI = (0, LI.c)("recycleAfterStep"),
      rI = (0, LI.c)("settleRecycle"),
      ZI = (0, LI.c)("load"),
      zI = (0, LI.c)("attach"),
      sI = (0, LI.c)("resendHeld"),
      KI = (0, LI.c)("recycle"),
      VI = (0, LI.c)("send"),
      pS = (0, LI.c)("unload"),
      iS = (0, LI.c)("dropModule"),
      cS = (0, LI.c)("coreBytes"),
      OS = (0, LI.c)("coreWords"),
      oS = (0, LI.c)("moduleBytes"),
      IS = (0, LI.c)("loadFailed"),
      SS = (0, LI.c)("call"),
      xS = (0, LI.c)("guard"),
      LS = (0, LI.c)("trapOn");
    class YS {
      constructor(pp) {
        this.deps = pp, Object.defineProperty(this, LS, {
          value: lS
        }), Object.defineProperty(this, xS, {
          value: XS
        }), Object.defineProperty(this, SS, {
          value: ES
        }), Object.defineProperty(this, IS, {
          value: CS
        }), Object.defineProperty(this, oS, {
          value: MS
        }), Object.defineProperty(this, OS, {
          value: qS
        }), Object.defineProperty(this, cS, {
          value: RS
        }), Object.defineProperty(this, iS, {
          value: mS
        }), Object.defineProperty(this, pS, {
          value: kS
        }), Object.defineProperty(this, VI, {
          value: jS
        }), Object.defineProperty(this, KI, {
          value: uS
        }), Object.defineProperty(this, sI, {
          value: eS
        }), Object.defineProperty(this, zI, {
          value: dS
        }), Object.defineProperty(this, ZI, {
          value: HS
        }), Object.defineProperty(this, rI, {
          value: tS
        }), Object.defineProperty(this, GI, {
          value: vS
        }), Object.defineProperty(this, gI, {
          value: wS
        }), Object.defineProperty(this, FI, {
          value: US
        }), Object.defineProperty(this, nI, {
          value: yS
        }), Object.defineProperty(this, aI, {
          value: WS
        }), Object.defineProperty(this, hI, {
          value: PS
        }), Object.defineProperty(this, bI, {
          value: AS
        }), Object.defineProperty(this, fI, {
          value: DS
        }), Object.defineProperty(this, eI, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, uI, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, jI, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, kI, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, mI, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, RI, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, qI, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, MI, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, CI, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, EI, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, XI, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, lI, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, QI, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, JI, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, BI, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, NI, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, TI, {
          writable: !0,
          value: void 0
        }), (0, xI.e)(this, TI)[TI] = new WI({
          ensureLoaded: () => (0, xI.e)(this, FI)[FI](),
          recorderCall: (pp, ip) => {
            ip && (0, xI.e)(this, bI)[bI]("an edited save's stage");
            const cp = (0, xI.e)(this, SS)[SS](((ip, cp) => (pp(ip, cp), !0)));
            return null !== cp && void 0 !== cp && cp
          },
          beginSave: pp.beginSave,
          givenUp: pp.givenUp
        })
      }
      get active() {
        return null !== (0, xI.e)(this, uI)[uI]
      }
      get trapped() {
        return (0, xI.e)(this, kI)[kI]
      }
      get loading() {
        return null !== (0, xI.e)(this, qI)[qI]
      }
      prefetch() {
        (0, xI.e)(this, mI)[mI] || (0, xI.e)(this, kI)[kI] || (0, xI.e)(this, uI)[uI] || (0, xI.e)(this, qI)[qI] || this.deps.prefetch()
      }
      viewDrawn() {
        (0, xI.e)(this, CI)[CI] = !0, (0, xI.e)(this, hI)[hI]() && (0, xI.e)(this, nI)[nI]()
      }
      prefs(pp, ip) {
        (0, xI.e)(this, EI)[EI] = {
          on: pp,
          seconds: ip
        }, (0, xI.e)(this, VI)[VI](Pp.Pc.Prefs, UI(pp, ip)), pp && (0, xI.e)(this, CI)[CI] && (0, xI.e)(this, nI)[nI]()
      }
      control(pp) {
        const ip = function(pp) {
          return new Uint8Array([pp, 0, 0, 0])
        }(pp);
        if (dI.has(pp)) return (0, xI.e)(this, uI)[uI] ? void(0, xI.e)(this, VI)[VI](Pp.Pc.Control, ip) : ((0, xI.e)(this, lI)[lI] = ip, void(0, xI.e)(this, nI)[nI]());
        (0, xI.e)(this, mI)[mI] || this.deps.coreCommand(Pp.Pc.Control, ip)
      }
      session(pp) {
        (0, xI.e)(this, XI)[XI] = pp, (0, xI.e)(this, fI)[fI](pp)
      }
      filePartDone(pp, ip) {
        (0, xI.e)(this, VI)[VI](Pp.Pc.FilePartDone, function(pp, ip) {
          const cp = new Uint8Array(8),
            Op = new DataView(cp.buffer);
          return Op.setUint32(0, pp, !0), Op.setUint32(4, ip, !0), cp
        }(pp, ip))
      }
      fileDone(pp) {
        return (0, xI.e)(this, VI)[VI](Pp.Pc.FileDone, function(pp) {
          const ip = new Uint8Array(4);
          return new DataView(ip.buffer).setUint32(0, pp, !0), ip
        }(pp)), (0, xI.e)(this, GI)[GI]()
      }
      saveEdited(pp) {
        return (0, xI.e)(this, bI)[bI]("saveEdited"), (0, xI.e)(this, TI)[TI].start(pp)
      }
      afterFrame() {
        if (!(0, xI.e)(this, uI)[uI]) return;
        "read" === (0, xI.e)(this, TI)[TI].beforeRecorderStep() && (0, xI.e)(this, GI)[GI]();
        const pp = (0, xI.e)(this, RI)[RI];
        (0, xI.e)(this, RI)[RI] = null;
        const ip = (0, xI.e)(this, uI)[uI],
          cp = (0, xI.e)(this, jI)[jI];
        if (!ip || !cp) return void(null === pp || void 0 === pp || pp.resolve((0, xI.e)(this, kI)[kI] ? "trapped" : "aW"));
        const {
          core: Op
        } = this.deps, op = Op.mIp(2);
        let Ip, Sp, xp, Lp, Yp = 0,
          Dp = 0;
        if (0 !== op) {
          var Ap, Pp;
          const pp = (0, xI.e)(this, OS)[OS]();
          Yp = null !== (Ap = pp[op >>> 2]) && void 0 !== Ap ? Ap : 0, Dp = null !== (Pp = pp[1 + (op >>> 2)]) && void 0 !== Pp ? Pp : 0
        }
        try {
          if (Dp > 0) {
            const pp = ip.feed(Dp);
            0 !== pp && (0, xI.e)(this, oS)[oS](cp).set((0, xI.e)(this, cS)[cS]().subarray(Yp, Yp + Dp), pp)
          }
          Ip = ip.step(), Sp = ip.RIp(), xp = ip.qIp(), Lp = ip.MIp()
        } catch (Wp) {
          if (!(0, xI.e)(this, LS)[LS](Wp)) throw null === pp || void 0 === pp || pp.resolve("aW"), Wp;
          return void(null === pp || void 0 === pp || pp.resolve("trapped"))
        }
        if (Ip > 0) {
          const pp = Op.CIp(2, Ip);
          0 !== pp && (0, xI.e)(this, cS)[cS]().set((0, xI.e)(this, oS)[oS](cp).subarray(Sp, Sp + Ip), pp)
        }
        if (xp > 0) {
          (0, xI.e)(this, QI)[QI] = [];
          try {
            this.deps.events(new Uint8Array(cp.buffer, Lp, xp), cp)
          } catch (Wp) {
            throw null === pp || void 0 === pp || pp.resolve("aW"), Wp
          } finally {
            const pp = (0, xI.e)(this, QI)[QI];
            (0, xI.e)(this, QI)[QI] = null;
            for (const [ip, cp] of pp)(0, xI.e)(this, VI)[VI](ip, cp)
          }
        }
        if (!(0, xI.e)(this, hI)[hI]() && !(0, xI.e)(this, aI)[aI]()) return (0, xI.e)(this, pS)[pS](), void(null === pp || void 0 === pp || pp.resolve("aW"));
        null === pp || void 0 === pp || pp.resolve((0, xI.e)(this, KI)[KI]())
      }
      dispose() {
        (0, xI.e)(this, mI)[mI] = !0, (0, xI.e)(this, pS)[pS]()
      }
    }

    function DS(pp) {
      (0, xI.e)(this, VI)[VI](Pp.Pc.Session, function(pp) {
        const ip = new TextEncoder,
          cp = ip.encode(pp.game).subarray(0, 65535),
          Op = ip.encode(pp.lobby).subarray(0, 65535),
          op = new Uint8Array(22 + cp.length + 2 + Op.length),
          Ip = new DataView(op.buffer);
        Ip.setFloat64(0, pp.unixMs, !0), Ip.setBigUint64(8, BigInt.asUintN(64, pp.session), !0), Ip.setUint8(16, pp.lobbyType);
        let Sp = 20;
        for (const xp of [cp, Op]) Ip.setUint16(Sp, xp.length, !0), op.set(xp, Sp + 2), Sp += 2 + xp.length;
        return op
      }({
        ...pp,
        unixMs: this.deps.unixNow()
      }))
    }

    function AS(pp) {
      false
    }

    function PS() {
      var pp, ip;
      return null !== (pp = null === (ip = (0, xI.e)(this, EI)[EI]) || void 0 === ip ? void 0 : ip.on) && void 0 !== pp && pp
    }

    function WS() {
      const pp = (0, xI.e)(this, uI)[uI];
      let ip = !0;
      if (pp) try {
        ip = pp.busy()
      } catch (cp) {
        if (!(0, xI.e)(this, LS)[LS](cp)) throw cp
      }
      return ip || (0, xI.e)(this, TI)[TI].active
    }
    async function yS() {
      !(0, xI.e)(this, mI)[mI] && this.deps.allowed() ? await (0, xI.e)(this, FI)[FI]() : (0, xI.e)(this, lI)[lI] = null
    }

    function US() {
      return (0, xI.e)(this, kI)[kI] || (0, xI.e)(this, mI)[mI] ? Promise.resolve(!1) : (0, xI.e)(this, uI)[uI] ? Promise.resolve(!0) : ((0, xI.e)(this, qI)[qI] ??= (0, xI.e)(this, gI)[gI](), (0, xI.e)(this, qI)[qI])
    }
    async function wS() {
      let pp = !1;
      try {
        return pp = await (0, xI.e)(this, ZI)[ZI](), pp
      } finally {
        pp || ((0, xI.e)(this, lI)[lI] = null), (0, xI.e)(this, qI)[qI] = null
      }
    }

    function vS() {
      if (!(0, xI.e)(this, uI)[uI]) return Promise.resolve((0, xI.e)(this, kI)[kI] ? "trapped" : "aW");
      if (!(0, xI.e)(this, RI)[RI]) {
        let pp = () => {};
        const ip = new Promise((ip => {
          pp = ip
        }));
        (0, xI.e)(this, RI)[RI] = {
          promise: ip,
          resolve: pp
        }
      }
      return (0, xI.e)(this, RI)[RI].promise
    }

    function tS(pp) {
      const ip = (0, xI.e)(this, RI)[RI];
      (0, xI.e)(this, RI)[RI] = null, null === ip || void 0 === ip || ip.resolve(pp)
    }
    async function HS() {
      let pp = (0, xI.e)(this, eI)[eI];
      if (!pp) {
        const ip = (0, xI.e)(this, MI)[MI];
        try {
          pp = await this.deps.load()
        } catch (cp) {
          return ip === (0, xI.e)(this, MI)[MI] && await (0, xI.e)(this, IS)[IS](cp), !1
        }
        if (ip !== (0, xI.e)(this, MI)[MI]) return this.deps.unload(), !1;
        const Op = pp,
          op = (0, xI.e)(this, xS)[xS]((() => Op.EIp()));
        if (void 0 === op) return !1;
        const Ip = this.deps.core.XIp();
        if (op !== Ip) return await (0, xI.e)(this, IS)[IS](new Error(`recorder port version ${op}, the core's ${Ip}`)), !1;
        (0, xI.e)(this, eI)[eI] = pp
      }
      const ip = pp;
      try {
        if (!(0, xI.e)(this, xS)[xS]((() => ((0, xI.e)(this, uI)[uI] = new ip.lIp, (0, xI.e)(this, jI)[jI] = ip.jIp(), !0)))) return !1;
        (0, xI.e)(this, sI)[sI]();
        const pp = (0, xI.e)(this, lI)[lI];
        return (0, xI.e)(this, lI)[lI] = null, pp && (0, xI.e)(this, VI)[VI](Pp.Pc.Control, pp), (0, xI.e)(this, zI)[zI]()
      } catch (cp) {
        return (0, xI.e)(this, pS)[pS](), await (0, xI.e)(this, IS)[IS](cp), !1
      }
    }

    function dS() {
      return this.deps.core.QIp(0), 1 === this.deps.core.QIp(1) || ((0, xI.e)(this, pS)[pS](), this.deps.failed(HI), !1)
    }

    function eS() {
      (0, xI.e)(this, EI)[EI] && (0, xI.e)(this, VI)[VI](Pp.Pc.Prefs, UI((0, xI.e)(this, EI)[EI].on, (0, xI.e)(this, EI)[EI].seconds)), (0, xI.e)(this, XI)[XI] && (0, xI.e)(this, fI)[fI]((0, xI.e)(this, XI)[XI])
    }

    function uS() {
      return tI({
        memoryBytes: this.deps.memoryBytes,
        clipSeconds: () => {
          var pp, ip;
          return null !== (pp = null === (ip = (0, xI.e)(this, EI)[EI]) || void 0 === ip ? void 0 : ip.seconds) && void 0 !== pp ? pp : 0
        },
        trapped: () => (0, xI.e)(this, kI)[kI],
        busy: () => (0, xI.e)(this, aI)[aI](),
        loadInFlight: () => (0, xI.e)(this, qI)[qI],
        Ry: () => (0, xI.e)(this, mI)[mI],
        unload: () => {
          (0, xI.e)(this, pS)[pS]()
        },
        load: () => (0, xI.e)(this, FI)[FI]()
      })
    }

    function jS(pp, ip) {
      (0, xI.e)(this, QI)[QI] ? (0, xI.e)(this, QI)[QI].push([pp, ip]): (0, xI.e)(this, SS)[SS](((cp, Op) => {
        const op = cp.kIp(ip.length);
        0 !== op && (new Uint8Array(Op.buffer, op, ip.length).set(ip), cp.command(pp, ip.length))
      }))
    }

    function kS() {
      (0, xI.e)(this, MI)[MI]++, (0, xI.e)(this, rI)[rI]("aW"), (0, xI.e)(this, TI)[TI].stop(), this.deps.core.QIp(0), (0, xI.e)(this, iS)[iS](), (0, xI.e)(this, kI)[kI] || ((0, xI.e)(this, eI)[eI] = null, this.deps.unload())
    }

    function mS() {
      (0, xI.e)(this, SS)[SS]((pp => {
        pp.free()
      })), (0, xI.e)(this, uI)[uI] = null, (0, xI.e)(this, jI)[jI] = null, (0, xI.e)(this, NI)[NI] = null
    }

    function RS() {
      var pp;
      const ip = this.deps.coreBuffer();
      return (null === (pp = (0, xI.e)(this, JI)[JI]) || void 0 === pp ? void 0 : pp.buffer) !== ip && ((0, xI.e)(this, JI)[JI] = new Uint8Array(ip)), (0, xI.e)(this, JI)[JI]
    }

    function qS() {
      var pp;
      const ip = this.deps.coreBuffer();
      return (null === (pp = (0, xI.e)(this, BI)[BI]) || void 0 === pp ? void 0 : pp.buffer) !== ip && ((0, xI.e)(this, BI)[BI] = new Uint32Array(ip, 0, ip.byteLength >>> 2)), (0, xI.e)(this, BI)[BI]
    }

    function MS(pp) {
      var ip;
      const cp = pp.buffer;
      return (null === (ip = (0, xI.e)(this, NI)[NI]) || void 0 === ip ? void 0 : ip.buffer) !== cp && ((0, xI.e)(this, NI)[NI] = new Uint8Array(cp)), (0, xI.e)(this, NI)[NI]
    }
    async function CS(pp) {
      await this.deps.staleOr(pp, (() => {
        this.deps.failed(HI)
      }))
    }

    function ES(pp) {
      const ip = (0, xI.e)(this, uI)[uI],
        cp = (0, xI.e)(this, jI)[jI];
      if (ip && cp) return (0, xI.e)(this, xS)[xS]((() => pp(ip, cp)))
    }

    function XS(pp) {
      if (!(0, xI.e)(this, kI)[kI]) try {
        return pp()
      } catch (ip) {
        if (!(0, xI.e)(this, LS)[LS](ip)) throw ip;
        return
      }
    }

    function lS(pp) {
      return pp instanceof WebAssembly.RuntimeError && ((0, xI.e)(this, kI)[kI] = !0, (0, xI.e)(this, uI)[uI] = null, (0, xI.e)(this, jI)[jI] = null, (0, xI.e)(this, NI)[NI] = null, (0, xI.e)(this, eI)[eI] = null, (0, xI.e)(this, lI)[lI] = null, (0, xI.e)(this, rI)[rI]("trapped"), this.deps.core.QIp(0), (0, xI.e)(this, TI)[TI].stop(), this.deps.crash(this.deps.markTrapped(pp)), this.deps.failed("Replay recording stopped working, so reload the page to record replays again."), !0)
    }
    var QS = cp(38866);
    const JS = new Map([
      ["skyblock", () => cp.e(52).then((() => cp(38864)))]
    ]);

    function BS(pp) {
      const ip = JS.get(pp);
      return ip ? ip().then((() => {
        const ip = (0, QS.d)(pp);
        if (!ip) throw new Error(`${pp}'s replay hook module registered no hook`);
        return ip
      })) : null
    }
    class NS {
      constructor(pp) {
        this.deps = pp, this.game = null, this.hook = null, this.generation = 0, this.all = !1, this.pending = new Map, this.ids = new Int32Array(64)
      }
      get wantsWatch() {
        return null !== this.hook
      }
      opened(pp) {
        if (this.pending.clear(), pp === this.game && null !== this.hook) return void(this.all = !0);
        const ip = ++this.generation;
        this.game = pp, this.hook = null, this.all = !1;
        const cp = this.deps.loadHook(pp);
        null === cp || void 0 === cp || cp.then((pp => {
          ip === this.generation && (this.hook = pp, this.all = !0)
        }), (pp => {
          ip === this.generation && this.deps.onError(pp)
        }))
      }
      ended() {
        this.generation++, this.game = null, this.hook = null, this.all = !1, this.pending.clear()
      }
      entityAdded(pp) {
        null === this.hook || this.all || this.pending.set(pp, !0)
      }
      entityInfoChanged(pp) {
        null === this.hook || this.all || this.pending.has(pp) || this.pending.set(pp, !1)
      }
      flush(pp) {
        const {
          hook: ip
        } = this;
        if (null === ip || !pp || !this.all && 0 === this.pending.size) return;
        const cp = this.deps.cmd();
        if (null === cp) return;
        const {
          api: Op
        } = this.deps;
        if (this.all) {
          this.all = !1, this.pending.clear();
          const {
            ids: pp,
            count: ip
          } = hc(Op, this.ids);
          this.ids = pp;
          for (let cp = 0; cp < ip; cp++) this.pending.set(pp[cp], !0)
        }
        const op = this.ids = ac(this.ids, this.pending.size);
        let Ip = 0;
        for (const Yp of this.pending.keys()) op[Ip++] = Yp;
        const Sp = [],
          xp = nc(Op, op, Ip, ((pp, ip) => {
            null !== ip && Sp.push({
              serverId: pp,
              info: ip,
              spawned: !0 === this.pending.get(pp)
            })
          }));
        if (xp) {
          this.pending.clear();
          for (const {
              serverId: pp,
              info: Op,
              spawned: op
            }
            of Sp) try {
            ip(Op, {
              setFacingTolerance: ip => {
                null === ip && op || Dc(cp, pp, ip) || this.pending.set(pp, op)
              }
            })
          } catch (Lp) {
            this.deps.onError(Lp)
          }
        }
      }
    }
    var TS = (0, LI.c)("bindings"),
      fS = (0, LI.c)("module"),
      bS = (0, LI.c)("memory"),
      hS = (0, LI.c)("trapped"),
      aS = (0, LI.c)("generation"),
      nS = (0, LI.c)("loading"),
      FS = (0, LI.c)("lend"),
      gS = (0, LI.c)("givenUp"),
      GS = (0, LI.c)("afterSave"),
      rS = (0, LI.c)("opens"),
      ZS = (0, LI.c)("saveAskedAt"),
      zS = (0, LI.c)("unload"),
      sS = (0, LI.c)("dropModule"),
      KS = (0, LI.c)("loadFailed"),
      VS = (0, LI.c)("saveReadsBody"),
      px = (0, LI.c)("command"),
      ix = (0, LI.c)("call"),
      cx = (0, LI.c)("guard"),
      Ox = (0, LI.c)("trapOn");
    class ox {
      constructor(pp) {
        this.deps = pp, Object.defineProperty(this, Ox, {
          value: Px
        }), Object.defineProperty(this, cx, {
          value: Ax
        }), Object.defineProperty(this, ix, {
          value: Dx
        }), Object.defineProperty(this, px, {
          value: Yx
        }), Object.defineProperty(this, VS, {
          get: Lx,
          set: void 0
        }), Object.defineProperty(this, KS, {
          value: xx
        }), Object.defineProperty(this, sS, {
          value: Sx
        }), Object.defineProperty(this, zS, {
          value: Ix
        }), Object.defineProperty(this, TS, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, fS, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, bS, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, hS, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, aS, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, nS, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, FS, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, gS, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, GS, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, rS, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, ZS, {
          writable: !0,
          value: null
        })
      }
      get active() {
        return null !== (0, xI.e)(this, fS)[fS] && null === (0, xI.e)(this, GS)[GS]
      }
      async open(pp, ip) {
        if ((0, xI.e)(this, hS)[hS]) return Pp._c.ModuleTrap;
        let cp = (0, xI.e)(this, TS)[TS];
        if (!cp) {
          const pp = (0, xI.e)(this, aS)[aS];
          (0, xI.e)(this, nS)[nS]++;
          try {
            cp = await this.deps.load()
          } catch (op) {
            return (0, xI.e)(this, nS)[nS]--, pp !== (0, xI.e)(this, aS)[aS] ? "stopped" : (0, xI.e)(this, KS)[KS](op, ip)
          }
          if ((0, xI.e)(this, nS)[nS]--, pp !== (0, xI.e)(this, aS)[aS]) return (0, xI.e)(this, TS)[TS] || 0 !== (0, xI.e)(this, nS)[nS] || (0, xI.e)(this, hS)[hS] || this.deps.unload(), "stopped";
          if ((0, xI.e)(this, hS)[hS]) return Pp._c.ModuleTrap;
          const Op = cp.EIp(),
            Ip = this.deps.core.XIp();
          if (Op !== Ip) return (0, xI.e)(this, KS)[KS](new Error(`replay port version ${Op}, the core's ${Ip}`), ip);
          (0, xI.e)(this, TS)[TS] = cp
        }
        if (!(0, xI.e)(this, fS)[fS]) {
          const pp = cp;
          if (!(0, xI.e)(this, cx)[cx]((() => {
              (0, xI.e)(this, fS)[fS] = new pp.JIp, (0, xI.e)(this, bS)[bS] = pp.BIp()
            }))) return Pp._c.ModuleTrap
        }
        let Op = !1;
        return (0, xI.e)(this, ix)[ix](((ip, cp) => {
          null !== (0, xI.e)(this, GS)[GS] && ip.step(0, 0);
          const op = ip.stage(pp.length);
          0 !== op && (new Uint8Array(cp.buffer, op, pp.length).set(pp), ip.open(), (0, xI.e)(this, gS)[gS] = (0, xI.e)(this, FS)[FS], (0, xI.e)(this, GS)[GS] = null, (0, xI.e)(this, rS)[rS]++, Op = !0)
        })) ? Op ? "opening" : Pp._c.TooLarge : Pp._c.ModuleTrap
      }
      beforeFrame(pp) {
        const ip = (0, xI.e)(this, fS)[fS],
          cp = (0, xI.e)(this, bS)[bS];
        if (!ip || !cp || null !== (0, xI.e)(this, GS)[GS]) return;
        const {
          core: Op
        } = this.deps, op = Op.NIp(pp);
        if (op < 0) return;
        const Ip = Math.floor(op);
        let Sp, xp;
        try {
          Sp = ip.step(Ip, op - Ip), xp = ip.RIp()
        } catch (Yp) {
          return void(0, xI.e)(this, Ox)[Ox](Yp)
        }
        const Lp = Op.CIp(1, Sp);
        if (0 === Lp) {
          const pp = (0, xI.e)(this, ix)[ix]((pp => {
            pp.close()
          }));
          if (!pp) return;
          return (0, xI.e)(this, VS)[VS] ? (0, xI.e)(this, GS)[GS] = "drop" : (0, xI.e)(this, sS)[sS](), void Op.TIp(Pp._c.Port)
        }
        new Uint8Array(this.deps.coreBuffer(), Lp, Sp).set(new Uint8Array(cp.buffer, xp, Sp))
      }
      play() {
        (0, xI.e)(this, px)[px]((pp => {
          pp.play()
        }))
      }
      pause() {
        (0, xI.e)(this, px)[px]((pp => {
          pp.pause()
        }))
      }
      seek(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (0, xI.e)(this, px)[px]((cp => {
          cp.seek(pp, ip)
        }))
      }
      setMark(pp, ip) {
        return (0, xI.e)(this, px)[px]((cp => {
          cp.fIp(pp, ip)
        }))
      }
      addKeyframe(pp, ip) {
        return (0, xI.e)(this, px)[px]((cp => {
          cp.bIp(pp[0], pp[1], pp[2], ip[0], ip[1], ip[2])
        }))
      }
      setKeyframe(pp, ip) {
        return (0, xI.e)(this, px)[px]((cp => {
          cp.hIp(pp, ip)
        }))
      }
      moveKeyframe(pp, ip) {
        return (0, xI.e)(this, px)[px]((cp => {
          cp.aIp(pp, ip)
        }))
      }
      deleteKeyframes(pp, ip) {
        return (0, xI.e)(this, px)[px]((cp => {
          cp.nIp(pp, ip)
        }))
      }
      crop(pp, ip) {
        return null === (0, xI.e)(this, FS)[FS] && (0, xI.e)(this, px)[px]((cp => {
          cp.crop(pp, ip)
        }))
      }
      beginSave() {
        const pp = (0, xI.e)(this, ZS)[ZS];
        if ((0, xI.e)(this, ZS)[ZS] = null, null !== pp && pp !== (0, xI.e)(this, rS)[rS]) return null;
        let ip = 0,
          cp = null;
        if ((0, xI.e)(this, ix)[ix](((pp, Op) => {
            ip = pp.save(), 0 !== ip && (cp = new Uint8Array(Op.buffer, pp.FIp(), pp.gIp()).slice())
          })), 0 === ip || !cp) return null;
        const Op = {
          headLen: ip,
          editState: cp,
          givenUp: () => (0, xI.e)(this, gS)[gS] === Op,
          head: (pp, ip) => {
            if ((0, xI.e)(this, FS)[FS] !== Op || !(0, xI.e)(this, VS)[VS]) return null;
            let cp = null;
            return (0, xI.e)(this, ix)[ix](((Op, op) => {
              const Ip = Op.GIp();
              0 !== Ip && pp >= 0 && ip >= 0 && pp + ip <= Ip && (cp = new Uint8Array(op.buffer, Op.rIp() + pp, ip))
            })), cp
          },
          end: () => {
            if ((0, xI.e)(this, FS)[FS] !== Op) return;
            (0, xI.e)(this, FS)[FS] = null, (0, xI.e)(this, gS)[gS] = null, (0, xI.e)(this, ix)[ix]((pp => {
              pp.ZIp()
            }));
            const pp = (0, xI.e)(this, GS)[GS];
            (0, xI.e)(this, GS)[GS] = null, "unload" === pp ? (0, xI.e)(this, zS)[zS]() : "drop" === pp && (0, xI.e)(this, sS)[sS]()
          }
        };
        return (0, xI.e)(this, FS)[FS] = Op, Op
      }
      askSave() {
        (0, xI.e)(this, ZS)[ZS] = (0, xI.e)(this, rS)[rS]
      }
      setSpeed(pp) {
        (0, xI.e)(this, px)[px]((ip => {
          ip.zIp(pp)
        }))
      }
      setCameraMode(pp) {
        (0, xI.e)(this, px)[px]((ip => {
          ip.sIp(pp)
        }))
      }
      close() {
        (0, xI.e)(this, px)[px]((pp => {
          pp.close()
        }))
      }
      stop() {
        (0, xI.e)(this, aS)[aS]++, (0, xI.e)(this, VS)[VS] && ((0, xI.e)(this, ix)[ix]((pp => {
          pp.close()
        })), (0, xI.e)(this, fS)[fS]) ? (0, xI.e)(this, GS)[GS] = "unload" : (0, xI.e)(this, zS)[zS]()
      }
    }

    function Ix() {
      (0, xI.e)(this, sS)[sS](), (0, xI.e)(this, hS)[hS] || ((0, xI.e)(this, TS)[TS] = null, this.deps.unload())
    }

    function Sx() {
      (0, xI.e)(this, ix)[ix]((pp => {
        pp.free()
      })), (0, xI.e)(this, fS)[fS] = null, (0, xI.e)(this, bS)[bS] = null
    }
    async function xx(pp, ip) {
      return await this.deps.staleOr(pp, (() => {}), {
        beforeReload: ip
      }) ? "reloading" : Pp._c.ModuleLoad
    }

    function Lx() {
      return null !== (0, xI.e)(this, FS)[FS] && (0, xI.e)(this, gS)[gS] !== (0, xI.e)(this, FS)[FS]
    }

    function Yx(pp) {
      return null === (0, xI.e)(this, GS)[GS] && (0, xI.e)(this, ix)[ix](pp)
    }

    function Dx(pp) {
      const ip = (0, xI.e)(this, fS)[fS],
        cp = (0, xI.e)(this, bS)[bS];
      return !(!ip || !cp) && (0, xI.e)(this, cx)[cx]((() => {
        pp(ip, cp)
      }))
    }

    function Ax(pp) {
      if ((0, xI.e)(this, hS)[hS]) return !1;
      try {
        return pp(), !0
      } catch (ip) {
        return (0, xI.e)(this, Ox)[Ox](ip), !1
      }
    }

    function Px(pp) {
      if (!(pp instanceof WebAssembly.RuntimeError)) throw pp;
      (0, xI.e)(this, hS)[hS] = !0, (0, xI.e)(this, fS)[fS] = null, (0, xI.e)(this, bS)[bS] = null, (0, xI.e)(this, TS)[TS] = null, this.deps.crash(this.deps.markTrapped(pp)), this.deps.core.TIp(Pp._c.ModuleTrap)
    }
    var Wx = cp(6613),
      yx = cp(41240);
    const Ux = "[bloxd-wasm-client]";
    const wx = String(Bo);

    function vx(pp) {
      return null === pp || pp === wx ? void 0 : pp
    }

    function tx(pp) {
      var ip, cp, Op, op, Ip, xp, Lp;
      switch (pp.what) {
        case Pp.gd.FlyingText: {
          let ip;
          try {
            ip = JSON.parse(pp.contentJson)
          } catch (Yp) {
            return void console.warn(`${Ux} a replay's flying text isn't JSON`, Yp)
          }
          Sp.m.GA("forceFlyingMiddleMessage", {
            content: ip,
            iS: pp.iS,
            angle: pp.angle,
            cS: pp.cS
          });
          break
        }
        case Pp.gd.PlayerKilled:
          (0, yx.h)({
            kind: "killed",
            body: {
              deadEId: null !== (ip = vx(pp.dead)) && void 0 !== ip ? ip : "",
              killerEId: vx(pp.killer),
              withItem: null !== (cp = pp.withItem) && void 0 !== cp ? cp : "",
              killstreak: pp.killstreak
            }
          });
          break;
        case Pp.gd.Killfeed:
          (0, yx.h)({
            kind: "custom",
            body: {
              killer: {
                eId: vx(pp.killerId),
                name: null !== (Op = pp.killerName) && void 0 !== Op ? Op : void 0,
                colour: null !== (op = pp.killerColour) && void 0 !== op ? op : void 0
              },
              victim: {
                eId: vx(pp.victimId),
                name: null !== (Ip = pp.victimName) && void 0 !== Ip ? Ip : void 0,
                colour: null !== (xp = pp.victimColour) && void 0 !== xp ? xp : void 0
              },
              withItem: null !== (Lp = pp.withItem) && void 0 !== Lp ? Lp : ""
            }
          })
      }
    }
    const Hx = "[bloxd-wasm-client]";

    function dx(pp) {
      if (void 0 === pp || null === pp || "" === pp) return null;
      const ip = Number(pp);
      return Number.isInteger(ip) && ip > Bo && ip <= 2147483647 ? ip : null
    }

    function ex(pp) {
      return {
        id: dx(pp.eId),
        name: "string" === typeof pp.name ? pp.name : null,
        colour: "string" === typeof pp.colour ? pp.colour : null
      }
    }

    function ux(pp) {
      const ip = (0, Go.h)(zc.Zb.PlayerKilled, (ip => {
          var cp, Op;
          const op = (0, go.i)(ip);
          if (!(0, go.b)(op)) return;
          const {
            deadEId: Ip,
            killerEId: Sp,
            withItem: xp,
            killstreak: Lp
          } = op;
          pp.recordPlayerKilled(null !== (cp = dx(Ip)) && void 0 !== cp ? cp : Bo, null !== (Op = dx(Sp)) && void 0 !== Op ? Op : Bo, "number" === typeof Lp ? Lp : 0, "string" === typeof xp ? xp : "")
        })),
        cp = (0, Go.h)(zc.Zb.CustomKillfeed, (ip => {
          const cp = (0, go.i)(ip);
          if (!(0, go.b)(cp) || !(0, go.b)(cp.killer) || !(0, go.b)(cp.victim)) return;
          const {
            killer: Op,
            victim: op,
            withItem: Ip
          } = cp;
          pp.recordKillfeed(ex(Op), ex(op), "string" === typeof Ip ? Ip : null)
        }));
      return () => {
        ip(), cp()
      }
    }

    function jx(pp) {
      var ip;
      return void 0 === pp || null === pp ? null : null !== (ip = JSON.stringify(pp)) && void 0 !== ip ? ip : null
    }

    function kx(pp) {
      let ip = null;
      const cp = () => {
        const {
          enableClipping: cp,
          clipDurationSeconds: op
        } = Op.c.get("clientEscMenuOptions"), Ip = `${cp}:${op}`;
        Ip !== ip && (ip = Ip, pp.recorder.setPrefs(cp, op))
      };
      return cp(), (0, Sp.n)("appManagerUpdated|clientEscMenuOptions", cp)
    }
    const mx = "replayModule",
      Rx = "recorderModule";

    function qx(pp, ip, cp) {
      return function() {
        return pp.isStopped ? cp : ip(...arguments)
      }
    }
    const Mx = {
      open: () => Promise.reject(new Error(mo.c.coreStopped.text)),
      replayKey: () => null,
      encode: () => Promise.resolve(null),
      fileHandle: () => null,
      markSaved: () => {}
    };

    function Cx() {
      return cp.e(65).then((() => cp(61572)))
    }

    function Ex(pp) {
      (0, mo.f)({
        text: pp,
        type: "Error"
      })
    }
    class Xx {
      constructor(pp) {
        this.deps = pp, this.runtime = void 0, this.entityHooks = void 0, this.recordedOptions = void 0, this.stops = void 0, this.activeConn = 0, this.stopped = !1, this.bench = null, this.replay = void 0, this.recorder = void 0, this.freecam = void 0, this.drawn = !1;
        const {
          running: ip,
          api: Op,
          core: op
        } = pp, Ip = () => pp.memory().buffer, Sp = () => ip.isStopped ? null : ip.rings.cmd, xp = qx(ip, ((pp, ip) => op.CIp(pp, ip)), 0), Lp = () => op.XIp();
        let Yp = null;
        this.replay = new ox({
          core: {
            NIp: qx(ip, (pp => op.NIp(pp)), -1),
            CIp: xp,
            XIp: Lp,
            TIp: qx(ip, (pp => {
              op.TIp(pp)
            }), void 0)
          },
          coreBuffer: Ip,
          load: async () => (Yp = await cp.e(66).then((() => cp(61579))), Yp.loadReplayModule()),
          unload: () => {
            var pp;
            null === (pp = Yp) || void 0 === pp || pp.unloadReplayModule()
          },
          markTrapped: pp => Yp ? Yp.markReplayTrapped(pp) : new Error(String(pp)),
          staleOr: (ip, cp, Op) => pp.staleOr(mx, ip, cp, Op),
          crash: ip => {
            pp.reportFault(mx, ip)
          }
        });
        let Dp = null;
        this.recorder = new YS({
          core: {
            QIp: qx(ip, (pp => op.QIp(pp)), 0),
            mIp: qx(ip, (pp => op.mIp(pp)), 0),
            CIp: xp,
            XIp: Lp
          },
          coreCommand: (pp, ip) => {
            var cp, Op;
            return null !== (cp = null === (Op = Sp()) || void 0 === Op ? void 0 : Op.writeCmd(pp, 0, ip)) && void 0 !== cp && cp
          },
          coreBuffer: Ip,
          load: async () => (Dp = await Cx(), Dp.loadRecorderModule()),
          prefetch: () => {
            Cx().then((pp => pp.prefetchRecorderModule())).catch((pp => {
              console.warn(`${Hx} the recorder module didn't prefetch, so a save loads it:`, pp)
            }))
          },
          unload: () => {
            var pp;
            null === (pp = Dp) || void 0 === pp || pp.unloadRecorderModule()
          },
          markTrapped: pp => Dp ? Dp.markRecorderTrapped(pp) : new Error(String(pp)),
          memoryBytes: () => {
            var pp, ip;
            return null !== (pp = null === (ip = Dp) || void 0 === ip ? void 0 : ip.recorderMemoryBytes()) && void 0 !== pp ? pp : 0
          },
          staleOr: (ip, cp) => pp.staleOr(Rx, ip, cp),
          crash: ip => {
            pp.reportFault(Rx, ip)
          },
          allowed: () => !0 === pp.options.get("canRecordReplays"),
          failed: Ex,
          events: (pp, ip) => {
            this.runtime.recorderEvents(pp, ip)
          },
          beginSave: () => this.replay.beginSave(),
          givenUp: Ex,
          unixNow: () => Date.now()
        });
        const Ap = new Jo({
          core: {
            wIp: qx(ip, (pp => op.wIp(pp)), 0),
            tIp: qx(ip, (() => {
              op.tIp()
            }), void 0),
            gw: qx(ip, (() => op.gw()), 0),
            vIp: qx(ip, (() => op.vIp()), 0)
          },
          buffer: Ip,
          apiView: () => Op.apiView,
          cmd: Sp,
          replay: this.replay,
          recorder: this.recorder
        });
        this.entityHooks = new NS({
          api: Op,
          cmd: Sp,
          loadHook: BS,
          onError: pp => {
            console.warn(`${Hx} the recorded game's replay hooks:`, pp)
          }
        });
        const Pp = new Fo({
          client: Ap,
          buffer: Ip,
          setHoldDraws: pp => {
            ip.setHoldDraws(pp)
          },
          notify: mo.f,
          onRecorderState: () => {
            var pp;
            null === (pp = (0, qo.e)()) || void 0 === pp || pp.recorderChanged()
          },
          onViewerChange: () => {
            var pp;
            null === (pp = (0, qo.e)()) || void 0 === pp || pp.viewerChanged()
          },
          onReplayOption: ip => {
            ! function(pp, ip) {
              var cp, Op;
              const op = zc.kb[ip.key];
              if (void 0 === op) return;
              let Ip = null !== (cp = ip.value) && void 0 !== cp ? cp : JSON.parse(JSON.stringify(null !== (Op = Wx.b[op]) && void 0 !== Op ? Op : null));
              if (null !== ip.value && ip.key < zc.Kb.Environment && "string" === typeof Ip) try {
                Ip = JSON.parse(Ip)
              } catch (Sp) {
                return void console.warn(`${Ux} a replay's ${op} isn't JSON`, Sp)
              }
              pp.applyNewClientOptions({
                [op]: Ip
              })
            }(pp.options, ip)
          },
          onReplayUiEvent: tx,
          onReplayOpened: ip => {
            this.entityHooks.opened((0, qp.Mb)(ip)), pp.replayShaderPack(ip)
          },
          meshPending: () => {
            var pp, cp;
            return null !== (pp = null === (cp = ip.lastHeader) || void 0 === cp ? void 0 : cp.renderPending) && void 0 !== pp ? pp : 0
          },
          viewerOpen: Ro.c,
          download: pp => {
            (0, jo.h)(pp)
          }
        });
        this.runtime = Pp, Op.replay = Pp.sink, (0, qo.s)(Pp);
        const Wp = new zo({
          live: () => {
            var pp;
            return !ip.isStopped && !0 === (null === (pp = Pp.currentViewer) || void 0 === pp ? void 0 : pp.inPlayback)
          },
          cmd: Sp,
          dragScale: II
        });
        this.freecam = Wp, (0, qo.o)(Wp), this.recordedOptions = function(pp, ip) {
          const cp = zc.kb,
            Op = cp.map(((cp, Op) => ip.subscribe(cp, (ip => {
              pp.setOption(Op, jx(ip))
            }))));
          return {
            sendAll() {
              cp.forEach(((cp, Op) => {
                pp.setOption(Op, jx(ip.get(cp)))
              }))
            },
            stop() {
              for (const pp of Op) pp()
            }
          }
        }(Pp.recorder, pp.options), this.stops = [(0, SO.j)((pp => {
          Wp.flush();
          try {
            this.replay.beforeFrame(pp)
          } catch (ip) {
            this.deps.reportFault("replayFrame", ip)
          }
        })), (0, SO.u)(((pp, ip) => {
          try {
            this.recorder.afterFrame(), ip && !this.drawn && (this.drawn = !0, this.recorder.viewDrawn())
          } catch (cp) {
            this.deps.reportFault("recorderFrame", cp)
          }
          try {
            Pp.afterFrame(pp)
          } catch (cp) {
            this.deps.reportFault("replayRuntime", cp)
          }
        })), kx(Pp), () => {
          this.recordedOptions.stop()
        }, ux(Pp.recorder), (0, ro.f)((pp => {
          let {
            action: ip,
            down: cp
          } = pp;
          var Op;
          cp && (null === (Op = (0, qo.e)()) || void 0 === Op || Op.keyDown(ip))
        }))];
        const yp = () => {
          const pp = Pp.currentViewer;
          return !0 === (null === pp || void 0 === pp ? void 0 : pp.isOpen) ? pp : null
        };
        (0, ko.f)({
          open: (pp, ip) => this.open(pp, ip),
          replayKey: () => {
            var pp, ip;
            return null !== (pp = null === (ip = yp()) || void 0 === ip ? void 0 : ip.id) && void 0 !== pp ? pp : null
          },
          saveRefusal: () => {
            var pp, ip;
            return null !== (pp = null === (ip = yp()) || void 0 === ip ? void 0 : ip.saveRefusal) && void 0 !== pp ? pp : null
          },
          encode: () => {
            var pp, ip;
            return null !== (pp = null === (ip = yp()) || void 0 === ip ? void 0 : ip.save()) && void 0 !== pp ? pp : Promise.resolve(null)
          },
          fileHandle: () => {
            var pp, ip;
            return null !== (pp = null === (ip = Pp.currentViewer) || void 0 === ip ? void 0 : ip.fileHandle) && void 0 !== pp ? pp : null
          },
          markSaved: (pp, ip) => {
            var cp;
            null === (cp = Pp.currentViewer) || void 0 === cp || cp.markSaved(pp, ip)
          }
        })
      }
      netEvent(pp) {
        if ("connection" === pp.type)
          if (pp.phase === Pp.H.Activated) {
            this.activeConn = pp.conn;
            const ip = this.deps.sessionInfo(pp.conn);
            null !== ip && (this.runtime.activated({
              lobbyType: (0, Mp.w)(ip.lobbyName),
              gameNameWithVariation: ip.gameNameWithVariation,
              lobbyName: ip.lobbyName
            }), this.recordedOptions.sendAll())
          } else pp.phase !== Pp.H.Left && pp.phase !== Pp.H.Closed || pp.conn !== this.activeConn || (this.activeConn = 0, this.runtime.recorder.closed())
      }
      stop() {
        if (!this.stopped) {
          this.stopped = !0;
          for (const pp of this.stops) pp();
          this.runtime.end(), this.entityHooks.ended(), this.replay.stop(), this.recorder.dispose(), (0, qo.i)() === this.runtime && (0, qo.s)(null), (0, qo.f)() === this.freecam && (0, qo.o)(null), (0, ko.f)(Mx), null !== this.bench && window.wasmReplayBench === this.bench && (window.wasmReplayBench = void 0)
        }
      }
      async open(pp, ip) {
        const {
          running: cp
        } = this.deps;
        if (cp.isStopped) throw new Error(mo.c.coreStopped.text);
        if (pp.byteLength > 67108864) throw new Error(mo.c.cantOpen.text);
        let Op;
        try {
          Op = await async function(pp) {
            const ip = await pp.loadViewer();
            return ip.inPlayback || (0, SO.H)().leaveGame(null), ip
          }(this.runtime)
        } catch (op) {
          throw console.warn(`${Hx} the replay viewer didn't load`, op), new Error(mo.c.viewerLoadFailed.text)
        }
        if (cp.isStopped) throw new Error(mo.c.coreStopped.text);
        await Op.open(pp, ip)
      }
    }
    var lx = cp(1982);

    function Qx(pp, ip) {
      const {
        aux: cp,
        payload: Op
      } = function(pp) {
        return {
          aux: pp.reset ? Pp.cc.ResetFirst : 0,
          payload: Bx(pp.changes)
        }
      }(ip);
      pp.queueOptions(cp, Op) && (ip.reset && lx.c.reset(), lx.c.apply(ip.changes))
    }
    const Jx = new TextEncoder;

    function Bx(pp) {
      const ip = new Nx;
      return fx(ip, pp), ip.bytes()
    }
    class Nx {
      constructor() {
        this.buf = new Uint8Array(256), this.view = new DataView(this.buf.buffer), this.len = 0
      }
      room(pp) {
        if (this.len + pp <= this.buf.length) return;
        const ip = new Uint8Array(Math.max(2 * this.buf.length, this.len + pp));
        ip.set(this.buf.subarray(0, this.len)), this.buf = ip, this.view = new DataView(ip.buffer)
      }
      u8(pp) {
        this.room(1), this.buf[this.len++] = pp
      }
      tagged(pp, ip, cp) {
        this.room(1 + ip), this.buf[this.len++] = pp, 1 === ip ? this.view.setUint8(this.len, cp) : 2 === ip ? this.view.setUint16(this.len, cp) : this.view.setUint32(this.len, cp), this.len += ip
      }
      signed(pp, ip, cp) {
        this.room(1 + ip), this.buf[this.len++] = pp, 1 === ip ? this.view.setInt8(this.len, cp) : 2 === ip ? this.view.setInt16(this.len, cp) : this.view.setInt32(this.len, cp), this.len += ip
      }
      f64(pp) {
        this.room(9), this.buf[this.len++] = 203, this.view.setFloat64(this.len, pp), this.len += 8
      }
      raw(pp) {
        this.room(pp.length), this.buf.set(pp, this.len), this.len += pp.length
      }
      bytes() {
        return this.buf.slice(0, this.len)
      }
    }

    function Tx(pp, ip, cp, Op, op, Ip, Sp) {
      ip < Op ? pp.u8(cp | ip) : null !== op && ip < 256 ? pp.tagged(op, 1, ip) : ip < 65536 ? pp.tagged(Ip, 2, ip) : pp.tagged(Sp, 4, ip)
    }

    function fx(pp, ip) {
      switch (typeof ip) {
        case "undefined":
          return void pp.raw(bx);
        case "boolean":
          return void pp.u8(ip ? 195 : 194);
        case "number":
          return void
          function(pp, ip) {
            ip >>> 0 === ip ? ip < 128 ? pp.u8(ip) : ip < 256 ? pp.tagged(204, 1, ip) : ip < 65536 ? pp.tagged(205, 2, ip) : pp.tagged(206, 4, ip) : (ip | 0) === ip ? ip >= -32 ? pp.u8(255 & ip) : ip >= -128 ? pp.signed(208, 1, ip) : ip >= -32768 ? pp.signed(209, 2, ip) : pp.signed(210, 4, ip) : pp.f64(ip)
          }(pp, ip);
        case "string": {
          const cp = Jx.encode(ip);
          return Tx(pp, cp.length, 160, 32, 217, 218, 219), void pp.raw(cp)
        }
        case "object":
          break;
        default:
          return void pp.u8(192)
      }
      if (null === ip) pp.u8(192);
      else if (Array.isArray(ip)) {
        Tx(pp, ip.length, 144, 16, null, 220, 221);
        for (const cp of ip) fx(pp, cp)
      } else if (ip instanceof Uint8Array) Tx(pp, ip.length, 0, 0, 196, 197, 198), pp.raw(ip);
      else {
        const cp = Object.keys(ip);
        Tx(pp, cp.length, 128, 0, null, 222, 223);
        for (const Op of cp) fx(pp, Op), fx(pp, ip[Op])
      }
    }
    const bx = new Uint8Array([212, 0, 0]);
    var hx = cp(42879),
      ax = cp(42885),
      nx = cp(41147),
      Fx = cp(41200),
      gx = cp(2970);
    const Gx = [1e3, 3e3, 9e3];
    class rx {
      constructor(pp) {
        this.host = pp, this.sets = new Map, this.table = [], this.generation = 0, this.Ry = !1
      }
      onEvent(pp) {
        const ip = function(pp) {
          if (pp.byteLength !== Pp.qd) return null;
          const ip = new DataView(pp.buffer, pp.byteOffset, pp.byteLength);
          return {
            want: ip.getUint16(0, !0),
            release: ip.getUint16(2, !0)
          }
        }(pp);
        ip && !this.Ry && (ip.release !== Pp.sd && this.release(ip.release), ip.want !== Pp.sd && this.want(ip.want))
      }
      reset(pp) {
        if (!this.Ry) {
          for (const [pp, ip] of this.sets) "ready" === ip.state && this.releaseAll(ip.distinct), this.sets.delete(pp);
          this.table = pp, this.generation++
        }
      }
      dispose() {
        if (this.Ry) return;
        this.Ry = !0, this.generation++, this.table = [];
        const pp = [...this.sets.values()];
        this.sets.clear();
        let ip = null;
        for (const Op of pp)
          for (const pp of "ready" === Op.state ? Op.distinct : []) try {
            this.host.mOp(pp)
          } catch (cp) {
            ip ??= {
              error: cp
            }
          }
        if (ip) throw ip.error
      }
      isReady(pp) {
        var ip;
        return "ready" === (null === (ip = this.sets.get(pp)) || void 0 === ip ? void 0 : ip.state)
      }
      want(pp) {
        const ip = this.sets.get(pp);
        if ("loading" === (null === ip || void 0 === ip ? void 0 : ip.state)) return ip.wanted = !0, void this.capAnswer(pp, ip);
        if ("ready" === (null === ip || void 0 === ip ? void 0 : ip.state)) return void this.host.sendReady(zx(pp, ip.images, ip.size));
        const cp = this.table[pp];
        if (!cp || 1 !== cp.urls.length && cp.urls.length !== zc.Vb.CubeFaces) return this.host.sendReady(sx(pp)), void this.host.onLoadFailed(pp, "", new Error(`no image set ${pp}`));
        const Op = {
          state: "loading",
          wanted: !0
        };
        this.sets.set(pp, Op), this.load(pp, cp, Op, this.generation, 0), this.capAnswer(pp, Op)
      }
      capAnswer(pp, ip) {
        this.host.wait(4e3, (() => {
          this.sets.get(pp) === ip && ip.wanted && this.host.sendReady(sx(pp))
        }))
      }
      load(pp, ip, cp, Op, op) {
        const Ip = [...new Set(ip.urls)];
        Promise.allSettled(Ip.map((pp => this.host.loadImage(pp, ip.orientation)))).then((Sp => {
          const xp = Sp.flatMap((pp => "fulfilled" === pp.status ? [pp.value] : [])),
            Lp = Op === this.generation && this.sets.get(pp) === cp,
            Yp = Sp.findIndex((pp => "rejected" === pp.status));
          if (!Lp || !cp.wanted) return this.Ry ? void this.releaseAfterDispose(xp.map(Zx)) : (this.releaseAll(xp.map(Zx)), void(Lp && this.sets.delete(pp)));
          Yp < 0 ? this.loaded(pp, ip, Ip, xp) : (this.releaseAll(xp.map(Zx)), this.host.sendReady(sx(pp)), op < Gx.length ? this.host.wait(Gx[op], (() => {
            Op === this.generation && this.sets.get(pp) === cp && (cp.wanted ? this.load(pp, ip, cp, Op, op + 1) : this.sets.delete(pp))
          })) : (this.sets.delete(pp), this.host.onLoadFailed(pp, Ip[Yp], Sp[Yp].reason)))
        }))
      }
      loaded(pp, ip, cp, Op) {
        const [op] = Op, Ip = [op.width, op.height], Sp = Op.every((pp => pp.width === Ip[0] && pp.height === Ip[1])), xp = ip.urls.length === zc.Vb.CubeFaces;
        if (!Sp || Ip[0] <= 0 || Ip[1] <= 0 || Ip[0] > 65535 || Ip[1] > 65535 || xp && Ip[0] !== Ip[1]) {
          this.releaseAll(Op.map(Zx)), this.sets.delete(pp), this.host.sendReady(sx(pp));
          const cp = Op.map((pp => `${pp.width}x${pp.height}`));
          return void this.host.onLoadFailed(pp, ip.urls[0], new Error(`set ${pp}'s images can't make its texture: ${cp.join(", ")}`))
        }
        const Lp = ip.urls.map((pp => Op[cp.indexOf(pp)].id)),
          Yp = Op.map(Zx);
        this.sets.set(pp, {
          state: "ready",
          images: Lp,
          distinct: Yp,
          size: Ip
        }), this.host.sendReady(zx(pp, Lp, Ip))
      }
      release(pp) {
        const ip = this.sets.get(pp);
        "loading" === (null === ip || void 0 === ip ? void 0 : ip.state) ? ip.wanted = !1: "ready" === (null === ip || void 0 === ip ? void 0 : ip.state) && (this.releaseAll(ip.distinct), this.sets.delete(pp))
      }
      releaseAll(pp) {
        for (const ip of pp) this.host.mOp(ip)
      }
      releaseAfterDispose(pp) {
        for (const ip of pp) try {
          this.host.mOp(ip)
        } catch {}
      }
    }

    function Zx(pp) {
      return pp.id
    }

    function zx(pp, ip, cp) {
      const Op = new Uint8Array(zc.Vb.SkyImagesReadyBytes),
        op = new DataView(Op.buffer);
      return op.setUint16(0, pp, !0), op.setUint16(2, ip.length, !0), op.setUint16(4, cp[0], !0), op.setUint16(6, cp[1], !0), ip.slice(0, zc.Vb.CubeFaces).forEach(((pp, ip) => {
        op.setUint32(8 + 4 * ip, pp, !0)
      })), Op
    }

    function sx(pp) {
      const ip = new Uint8Array(zc.Vb.SkyImagesReadyBytes),
        cp = new DataView(ip.buffer);
      return cp.setUint16(0, pp, !0), cp.setUint16(2, zc.Vb.Failed, !0), ip
    }
    let Kx = Promise.resolve();
    async function Vx(pp, ip) {
      let cp;
      try {
        cp = await (0, gx.F)(pp)
      } catch (Ip) {
        throw new nx.e("fetch", pp, {
          cause: Ip
        })
      }
      const Op = Kx.then((() => async function(pp, ip) {
        const cp = new Blob([pp.slice()]);
        let Op = await createImageBitmap(cp, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: ip
        });
        const op = 1024 / Math.max(Op.width, Op.height);
        if (op < 1) {
          const pp = Op;
          try {
            Op = await createImageBitmap(pp, {
              resizeWidth: Math.max(1, Math.round(pp.width * op)),
              resizeHeight: Math.max(1, Math.round(pp.height * op)),
              resizeQuality: "high",
              premultiplyAlpha: "none",
              colorSpaceConversion: "none"
            })
          } finally {
            pp.close()
          }
        }
        return Op
      }(cp, ip)));
      let op;
      Kx = Op.catch((() => {}));
      try {
        op = await Op
      } catch (Ip) {
        throw new nx.e("decode", pp, {
          cause: Ip
        })
      }
      return {
        id: (0, nx.p)(op),
        width: op.width,
        height: op.height
      }
    }
    var pL = cp(2187),
      iL = cp(34258),
      cL = cp(39403);
    const OL = pL.f.length,
      oL = new Set([...pL.f, "earth"]);

    function IL(pp) {
      const ip = [],
        cp = [],
        Op = (pp, Op) => {
          if ("custom" === Op.type) {
            cp.push({
              id: pp,
              kind: zc.Vb.KindCustom,
              set: ip.length,
              earth: null
            });
            const op = [Op.px, Op.py, Op.pz, Op.nx, Op.ny, Op.nz];
            ip.push({
              urls: (0, cL.g)(op),
              orientation: "none"
            })
          } else cp.push({
            id: pp,
            kind: zc.Vb.KindEarth,
            set: 0,
            earth: Op
          })
        };
      pL.f.forEach(((ip, cp) => {
        var op;
        Op(cp, null !== (op = SL(pp[ip])) && void 0 !== op ? op : iL.l[ip])
      }));
      const op = SL(pp.earth);
      "earth" === (null === op || void 0 === op ? void 0 : op.type) && Op(OL, op);
      const Ip = new TextEncoder,
        Sp = [],
        xp = [];
      for (const [Wp, yp] of Object.entries(pp)) {
        const pp = oL.has(Wp) ? null : SL(yp);
        if (null === pp) continue;
        const ip = Ip.encode(Wp);
        ip.length > 255 ? xp.push(`Ignoring texture pack skybox ${Wp}, whose name is over 255 bytes`) : Sp.length === zc.Vb.MaxAdded ? xp.push(`Ignoring texture pack skybox ${Wp}, past the ${zc.Vb.MaxAdded} skies a pack can add`) : (Sp.push(ip), Op(zc.Vb.AddedId, pp))
      }
      const Lp = ip.length;
      ip.push({
        urls: iL.c.map((pp => iL.d + pp)),
        orientation: "none"
      }), ip.push({
        urls: [iL.h],
        orientation: "flipY"
      }), ip.push({
        urls: [iL.b],
        orientation: "flipY"
      });
      const Yp = zc.Vb.SkyTableHeaderBytes + cp.length * zc.Vb.SkyTableEntryBytes,
        Dp = new Uint8Array(Yp + Sp.reduce(((pp, ip) => pp + 1 + ip.length), 0)),
        Ap = new DataView(Dp.buffer);
      Ap.setUint16(0, Lp, !0), Ap.setUint16(2, Lp + 1, !0), Ap.setUint16(4, Lp + 2, !0), Ap.setUint16(6, cp.length, !0), cp.forEach(((pp, ip) => {
        const cp = zc.Vb.SkyTableHeaderBytes + ip * zc.Vb.SkyTableEntryBytes;
        Ap.setUint16(cp, pp.id, !0), Ap.setUint8(cp + 2, pp.kind);
        const Op = cp + 4;
        pp.earth ? function(pp, ip, cp) {
          const Op = pp;
          let op = 0,
            Ip = 0;
          for (const [Sp, xp] of xL) {
            const pp = Op[Sp];
            "number" === typeof pp && Number.isFinite(pp) && (ip.setFloat32(cp + 4 * xp, pp, !0), op |= 1 << xp)
          }
          for (const [Sp, xp, Lp] of LL) {
            const pp = Op[Sp];
            Array.isArray(pp) && 3 === pp.length && pp.every((pp => "number" === typeof pp && Number.isFinite(pp))) && (pp.forEach(((pp, Op) => {
              ip.setFloat32(cp + Lp + 4 * Op, pp, !0)
            })), op |= xp)
          }
          YL.forEach(((pp, Ip) => {
            let [Sp, xp] = pp;
            const Lp = Op[Sp];
            "number" === typeof Lp && Number.isFinite(Lp) && (ip.setFloat32(cp + zc.q.CameraOffsetAt + 4 * Ip, Lp, !0), op |= xp)
          }));
          for (const [Sp, xp] of DL) {
            const pp = Op[Sp];
            null !== pp && void 0 !== pp && (op |= xp, pp && (Ip |= xp >>> 14))
          }
          ip.setUint32(cp + zc.q.PresentAt, op, !0), ip.setUint8(cp + zc.q.FlagsAt, Ip)
        }(pp.earth, Ap, Op) : Ap.setUint16(Op, pp.set, !0)
      }));
      let Pp = Yp;
      for (const Wp of Sp) Dp[Pp] = Wp.length, Dp.set(Wp, Pp + 1), Pp += 1 + Wp.length;
      return {
        payload: Dp,
        sets: ip,
        leftOut: xp
      }
    }

    function SL(pp) {
      if ("object" !== typeof pp || null === pp) return null;
      const ip = pp;
      if ("earth" === ip.type) return pp;
      return "custom" === ip.type && ["px", "py", "pz", "nx", "ny", "nz"].every((pp => {
        const cp = ip[pp];
        return "string" === typeof cp && cp.length > 0
      })) ? pp : null
    }
    const xL = [
        ["inclination", zc.q.Inclination],
        ["turbidity", zc.q.Turbidity],
        ["luminance", zc.q.Luminance],
        ["rayleigh", zc.q.Rayleigh],
        ["mieCoefficient", zc.q.MieCoefficient],
        ["mieDirectionalG", zc.q.MieDirectionalG],
        ["distance", zc.q.Distance],
        ["azimuth", zc.q.Azimuth]
      ],
      LL = [
        ["sunPosition", zc.q.SunPosition, zc.q.SunPositionAt],
        ["up", zc.q.Up, zc.q.UpAt],
        ["vertexTint", zc.q.VertexTint, zc.q.VertexTintAt]
      ],
      YL = [
        ["xCameraOffset", zc.q.CameraOffsetX],
        ["yCameraOffset", zc.q.CameraOffsetY],
        ["zCameraOffset", zc.q.CameraOffsetZ]
      ],
      DL = [
        ["useSunPosition", zc.q.UseSunPosition],
        ["dithering", zc.q.Dithering],
        ["infiniteDistance", zc.q.InfiniteDistance]
      ];

    function AL(pp, ip, cp) {
      const Op = new WL({
        writeCmd: pp,
        warn: ip,
        followPack: PL(cp, ip)
      });
      return Op.start(), Op
    }

    function PL(pp, ip) {
      return cp => {
        let Op = () => {};
        const op = pp((pp => {
          Op(), Op = () => {}, null !== pp ? Op = pp.subscribe((pp => {
            cp(function(pp, ip, cp) {
              if ("object" !== typeof pp || null === pp) return null;
              const Op = pp.skyBoxes;
              if ("object" !== typeof Op || null === Op) return null;
              if ("player" === ip) return Op;
              return Object.fromEntries(Object.entries(Op).filter((pp => {
                let [ip, Op] = pp;
                return !! function(pp) {
                  if ("object" !== typeof pp || null === pp) return !1;
                  return "earth" === pp.type || Object.entries(pp).every((pp => {
                    let [ip, cp] = pp;
                    return "type" === ip || ("" === (Op = cp) || null !== function(pp) {
                      var ip, cp, Op;
                      return "string" !== typeof pp ? null : null !== (ip = null === (cp = yL.exec(pp)) || void 0 === cp || null === (Op = cp.groups) || void 0 === Op ? void 0 : Op.base64) && void 0 !== ip ? ip : null
                    }(Op));
                    var Op
                  }))
                }(Op) || (cp(`Ignoring texture pack skybox ${ip}, whose faces are not all data URLs`, null), !1)
              })))
            }(pp.pack, null === pp.gameSource ? "player" : "customGame", ip))
          })) : cp(null)
        }));
        return () => {
          op(), Op()
        }
      }
    }
    class WL {
      constructor(pp) {
        var ip, cp, Op;
        this.host = pp, this.loader = void 0, this.wait = void 0, this.queue = [], this.written = null, this.stopFollowing = () => {}, this.Ry = !1, this.wait = null !== (ip = pp.wait) && void 0 !== ip ? ip : (pp, ip) => {
          setTimeout(ip, pp)
        }, this.loader = new rx({
          loadImage: null !== (cp = pp.loadImage) && void 0 !== cp ? cp : Vx,
          mOp: null !== (Op = pp.mOp) && void 0 !== Op ? Op : nx.q,
          sendReady: pp => {
            this.queue.push({
              kind: zc.Vb.SkyImagesReady,
              payload: pp
            })
          },
          onLoadFailed: (ip, cp, Op) => {
            pp.warn(`sky image set ${ip} (${cp}) didn't load: the last sky stays`, Op)
          },
          wait: this.wait
        })
      }
      start() {
        this.wait(Fx.b, (() => {
          null === this.written && this.write({})
        })), this.stopFollowing = this.host.followPack((pp => {
          this.write(null !== pp && void 0 !== pp ? pp : {})
        }))
      }
      onEvent(pp) {
        this.loader.onEvent(pp)
      }
      drain() {
        if (0 === this.queue.length) return;
        let pp = 0;
        for (; pp < this.queue.length && this.host.writeCmd(this.queue[pp].kind, 0, this.queue[pp].payload);) pp++;
        pp > 0 && this.queue.splice(0, pp)
      }
      dispose() {
        this.Ry = !0, this.stopFollowing(), this.queue = [], this.loader.dispose()
      }
      write(pp) {
        if (this.Ry) return;
        const ip = IL(pp);
        if (!(this.written && (cp = this.written, Op = ip, cp.payload.length === Op.payload.length && cp.payload.every(((pp, ip) => pp === Op.payload[ip])) && cp.sets.length === Op.sets.length && cp.sets.every(((pp, ip) => {
            const cp = Op.sets[ip];
            return pp.orientation === cp.orientation && pp.urls.length === cp.urls.length && pp.urls.every(((pp, ip) => pp === cp.urls[ip]))
          }))))) {
          var cp, Op;
          for (const pp of ip.leftOut) this.host.warn(pp, null);
          this.written = ip, this.loader.reset(ip.sets), this.queue = this.queue.filter((pp => pp.kind !== zc.Vb.SkyImagesReady)), this.queue.push({
            kind: zc.Vb.SkyTable,
            payload: ip.payload
          })
        }
      }
    }
    const yL = /^data:[\w.+/-]*;base64,(?<base64>[A-Za-z0-9+/]*={0,2})$/;
    var UL = cp(2874),
      wL = cp(3085),
      vL = cp(283),
      tL = cp(185),
      HL = cp(2883),
      dL = cp(2892),
      eL = cp(257),
      uL = cp(259),
      jL = cp(2990),
      kL = cp(3012),
      mL = cp(3023),
      RL = cp(116),
      qL = cp(314),
      ML = cp(41025);
    class CL {
      constructor() {
        this.id = null, this.sentMs = null, this.roundTripMs = null, this.stopReplies = void 0, this.stopReplies = (0, Go.h)(eO.K, (pp => {
          this.onReply((0, go.f)(eO.K, pp), performance.now())
        }))
      }
      onFrame(pp, ip) {
        null === this.id ? this.id = pp : pp !== this.id && (this.id = pp, this.sentMs = document.hidden ? null : ip)
      }
      onVisibilityChange() {
        this.sentMs = null
      }
      onReply(pp, ip) {
        pp === this.id && null !== this.sentMs && (this.roundTripMs = Math.round(ip - this.sentMs), this.sentMs = null)
      }
      take() {
        const pp = this.roundTripMs;
        return this.roundTripMs = null, pp
      }
      stop() {
        this.stopReplies()
      }
    }
    class EL {
      constructor() {
        this.sampled = 0, this.timed = 0, this.frameUs = 0, this.primed = !1, this.windowTimed = 0, this.windowUs = 0
      }
      onFrame(pp, ip, cp, Op) {
        const op = pp - this.sampled >>> 0,
          Ip = ip - this.timed >>> 0,
          Sp = cp - this.frameUs >>> 0,
          xp = this.primed;
        return this.sampled = pp, this.timed = ip, this.frameUs = cp, this.primed = !0, !(!xp || op > 64 || Ip > 64) && (Op && Sp <= 1e6 * Ip && (this.windowTimed += Ip, this.windowUs += Sp), Op && op > 0)
      }
      reset() {}
      snapshotAndReset() {
        const pp = this.windowTimed > 0 ? this.windowUs / this.windowTimed / 1e3 : null;
        return this.windowTimed = 0, this.windowUs = 0, {
          passMs: pp,
          submitToDoneMs: null
        }
      }
    }
    const XL = {
      lagP50Ms: null,
      lagP90Ms: null
    };
    class lL {
      constructor() {
        this.samples = new Float64Array(4096), this.count = 0
      }
      add(pp, ip) {
        const cp = Math.min(4096, this.count + ip);
        this.samples.fill(pp, this.count, cp), this.count = cp
      }
      clear() {
        this.count = 0
      }
      take() {
        const pp = this.count;
        if (this.count = 0, pp < 30) return XL;
        const ip = this.samples.subarray(0, pp).sort(),
          cp = cp => ip[Math.min(pp - 1, Math.floor(cp * pp))];
        return {
          lagP50Ms: cp(.5),
          lagP90Ms: cp(.9)
        }
      }
    }
    class QL {
      constructor() {
        this.word = 0, this.lagUs = 0, this.primed = !1, this.lags = new lL
      }
      onFrame(pp, ip) {
        const cp = pp.headerWord(zc.x.Pacing),
          Op = pp.headerWord(zc.x.PacingLagUs),
          op = (cp >>> zc.O.LagsShift) - (this.word >>> zc.O.LagsShift) & zc.O.CountMask,
          Ip = op > 0 ? (Op - this.lagUs >>> 0) / op / 1e3 : 0,
          Sp = this.primed && op <= 64 && Ip <= 6e4;
        this.word = cp, this.lagUs = Op, this.primed = !0, Sp && ip && op > 0 && 0 !== (cp & zc.O.Defaulted) && this.lags.add(Ip, op)
      }
      onJoin() {
        this.lags.clear()
      }
      snapshotAndReset(pp) {
        return pp ? this.lags.take() : (this.lags.clear(), XL)
      }
    }
    var JL = cp(301);

    function BL() {
      return Date.now() - performance.now()
    }
    class NL {
      constructor() {
        this.rafs = 0, this.sx = 0, this.heldAtRaf = -1, this.heldRunStartMs = 0, this.startMs = performance.now(), this.startClockOffsetMs = BL(), this.focused = document.hasFocus(), this.blurred = !1, this.resumed = !1, this.embedded = (0, JL.h)(), this.onBlur = () => {
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
        (0 === this.sx || this.heldAtRaf < this.rafs - 1) && (this.heldRunStartMs = 1 === this.rafs ? this.startMs : performance.now()), this.sx++, this.heldAtRaf = this.rafs
      }
      words(pp) {
        const ip = pp ? this.rafs - 1 : this.rafs;
        return function(pp) {
          let ip = 0 === pp.rafs ? "raf:none" : "raf:some";
          return pp.sx > 0 && (ip += " pace:held"), pp.heldRunMs > 1e4 && (ip += " pace:stalled"), pp.blurred && (ip += " blur"), pp.resumed && (ip += " resumed"), pp.embedded && (ip += " embedded"), pp.clockGainMs > 2e3 && (ip += " clockjump"), ip
        }({
          clockGainMs: BL() - this.startClockOffsetMs,
          rafs: ip,
          sx: this.sx,
          heldRunMs: this.sx > 0 && this.heldAtRaf === ip ? performance.now() - this.heldRunStartMs : 0,
          blurred: this.blurred,
          resumed: this.resumed,
          embedded: this.embedded
        })
      }
      restart(pp) {
        this.rafs = 0, this.sx = 0, this.heldAtRaf = -1, this.startMs = pp, this.startClockOffsetMs = BL(), this.blurred = !this.focused, this.resumed = !1
      }
      stop() {
        window.removeEventListener("blur", this.onBlur), window.removeEventListener("focus", this.onFocus), document.removeEventListener("freeze", this.onLifecycle), document.removeEventListener("resume", this.onLifecycle)
      }
    }
    var TL = cp(34367),
      fL = cp(2993),
      bL = cp(41087),
      hL = cp(34364),
      aL = cp(2899),
      nL = cp(3e3);
    const FL = {
      none: !0,
      compatibility_mode: !0,
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

    function gL(pp) {
      return new GL(pp)
    }
    class GL {
      constructor(pp) {
        this.shell = pp, this.tracker = new dL.d, this.gpu = new EL, this.pacing = new QL, this.timers = [], this.inGameAtLastFlush = !1, this.hasFlushedSinceConnect = !1, this.sendsDropped = 0, this.pendingLightFailures = 0, this.unsentPage = null, this.game = null, this.fpsSpanStartMs = -1, this.fpsFrames = 0, this.fpsOverTime = null, this.firstSpanFps = null, this.initialFps = null, this.ping = new CL, this.pacedCpuMs = 0, this.sendsStartMs = -1, this.sendsEndMs = -1, this.frameDebug = null, this.lastDrawnMs = -1, this.stallPending = !1, this.stallGap = new NL, this.onVisibility = () => {
          this.tracker.onVisibilityChange(), this.ping.onVisibilityChange(), this.lastDrawnMs = -1, !document.hidden && this.fpsSpanStartMs >= 0 && (this.fpsFrames = 0, this.fpsSpanStartMs = performance.now())
        }, this.onBeforeUnload = () => {
          this.checkMainStall(performance.now(), !1), this.lastDrawnMs = -1
        }, (0, TL.d)(pp.backend, pp.canvas, pp.adapterVendor), this.tracker.start((() => !pp.inGame()), this.gpu, "wasm"), document.addEventListener("visibilitychange", this.onVisibility), window.addEventListener("beforeunload", this.onBeforeUnload), (0, aL.b)("wasm", (() => {
          const {
            n: ip,
            sampleCount: cp
          } = (0, bL.g)();
          return `${pp.backend}, quality steps aim at up to ${nL.d.target.maxFps} fps, pixel n ${ip}, msaa ${cp}`
        }), (ip => {
          ip.setLoadCounts(pp.readLoadCounts), this.frameDebug = ip
        })), this.timers.push(setInterval((() => {
          this.flush(), this.fpsOverTime = null, this.initialFps = null
        }), 1e4), setInterval((() => {
          this.followGame() && this.shell.canSend() && (this.hasFlushedSinceConnect || (this.flush(), this.hasFlushedSinceConnect = !0))
        }), 250))
      }
      animationFrame(pp) {
        var ip;
        this.stallGap.animationFrame(), this.tracker.onAnimationFrame(pp), null === (ip = this.frameDebug) || void 0 === ip || ip.animationFrame()
      }
      sendsWent(pp, ip, cp) {
        this.ping.onFrame(pp.headerWord(zc.x.PingSent), ip), this.sendsStartMs = ip, this.sendsEndMs = cp
      }
      frameRan(pp, ip, cp, Op) {
        var op;
        this.ping.onFrame(pp.headerWord(zc.x.PingSent), cp);
        const Ip = this.tracker;
        this.pacing.onFrame(pp, Ip.isSampling());
        const Sp = pp.headerWord(zc.x.TickUs) / 1e3 + (0, SO.K)();
        var xp;
        (Ip.gH(Sp), null === (op = this.frameDebug) || void 0 === op || op.wasmFrame(pp, ip, cp, Op, Ip.isSampling(), Sp), null !== this.game) && (null === (xp = this.frameDebug) || void 0 === xp || xp.inGame());
        const Lp = this.sendsStartMs >= ip ? this.sendsEndMs - this.sendsStartMs : 0,
          Yp = Math.max(0, cp - ip - Sp - Lp);
        if ("drawn" !== Op) return void("paced" === Op ? (this.pacedCpuMs += Yp, this.stallGap.paced()) : "skipped" === Op && (this.lastDrawnMs = -1));
        this.followGame(), this.checkMainStall(ip, !0), Ip.onFrameStart(ip);
        this.gpu.onFrame(pp.headerWord(zc.x.GpuSampled), pp.headerWord(zc.x.GpuTimed), pp.headerWord(zc.x.GpuFrameUs), Ip.isSampling()) && Ip.onGpuSampleStarted(), Ip.onFrameCpu(Yp + this.pacedCpuMs), this.pacedCpuMs = 0, this.countFpsFrame(ip)
      }
      framePaced() {
        var pp;
        this.stallGap.paced(), null === (pp = this.frameDebug) || void 0 === pp || pp.wasmPeekPaced(this.tracker.isSampling())
      }
      stop() {
        for (const pp of this.timers) clearInterval(pp);
        this.timers.length = 0, document.removeEventListener("visibilitychange", this.onVisibility), window.removeEventListener("beforeunload", this.onBeforeUnload), this.stallGap.stop(), this.ping.stop(), this.tracker.limiterTelemetry.stop()
      }
      followGame() {
        const pp = this.shell.joinedGame();
        if (pp !== this.game) {
          var ip;
          if (this.game = pp, null !== pp) null === (ip = this.frameDebug) || void 0 === ip || ip.joined();
          this.tracker.snapshotAndReset(), this.pacing.onJoin(), this.hasFlushedSinceConnect = !1, this.inGameAtLastFlush = !1, this.fpsSpanStartMs = -1, this.fpsFrames = 0, this.pacedCpuMs = 0, this.firstSpanFps = null, this.fpsOverTime = null, this.initialFps = null, this.lastDrawnMs = -1
        }
        return null !== pp
      }
      checkMainStall(pp, ip) {
        if (!this.tracker.isSampling()) return void(this.lastDrawnMs = -1);
        const cp = this.tracker.limiterTelemetry.longAnimationFrameTracker,
          Op = this.lastDrawnMs < 0 ? 0 : pp - this.lastDrawnMs;
        this.lastDrawnMs = pp;
        const op = !this.stallPending && Op > 5e3,
          Ip = op ? this.stallGap.words(ip) : "";
        this.stallGap.restart(pp), this.stallPending || (op ? (this.stallPending = !0, setTimeout((() => {
          this.stallPending = !1, this.shell.mainStalled(Op, cp.blockingSinceMark(), Ip)
        }), 0)) : cp.markFrame(pp))
      }
      countFpsFrame(pp) {
        if (this.fpsSpanStartMs < 0) {
          if (!this.shell.inGame()) return;
          this.fpsSpanStartMs = pp
        }
        this.fpsFrames++;
        const ip = pp - this.fpsSpanStartMs;
        if (!(ip < mL.b)) {
          if (!document.hidden) {
            const pp = 1e3 * this.fpsFrames / ip;
            this.firstSpanFps ??= pp, this.initialFps = this.firstSpanFps, this.fpsOverTime = pp
          }
          this.fpsFrames = 0, this.fpsSpanStartMs = pp
        }
      }
      flush() {
        const pp = this.followGame(),
          {
            cpuFrameMs: ip,
            refreshHz: cp,
            cpuBottleneck: op,
            frameIntervalCv: Ip,
            ...Sp
          } = this.tracker.snapshotAndReset(),
          xp = this.shell.inGame(),
          Lp = xp && this.inGameAtLastFlush,
          Yp = Lp ? Sp : (0, HL.d)(Sp),
          Dp = this.pacing.snapshotAndReset(Lp);
        if (this.inGameAtLastFlush = xp, this.pendingLightFailures += this.shell.takeFailedMeshJobs(), !pp || !this.shell.canSend()) return;
        const Ap = performance.now(),
          Wp = (0, kL.t)((0, kL.s)(Ap), this.unsentPage),
          Up = function(pp, ip, cp, op, Ip, Sp, xp, Lp) {
            var Yp, Dp, Ap, Pp, Wp;
            const yp = {},
              {
                canvas: Up
              } = pp,
              wp = (0, jL.j)({
                refreshHz: ip.refreshHz,
                msaa: pp.msaa(),
                autoMsaaOff: (0, hL.d)()
              });
            for (const vp of (0, wL.c)()) {
              const tp = vp.name;
              let Hp;
              if ((0, vL.x)(tp)) Hp = (0, kL.d)(tp);
              else if ((0, kL.i)(tp)) Hp = Lp[tp];
              else if ((0, jL.m)(tp)) Hp = wp[tp];
              else switch (tp) {
                case "fps":
                  Hp = op;
                  break;
                case "ZL":
                  Hp = Ip;
                  break;
                case "pY":
                  Hp = (0, fL.y)((0, bL.g)().n);
                  break;
                case "iY":
                  Hp = Math.max(Up.width, Up.height);
                  break;
                case "cY":
                  Hp = Math.min(Up.width, Up.height);
                  break;
                case "OY":
                  Hp = navigator.hardwareConcurrency || null;
                  break;
                case "oY":
                  Hp = (0, pI.getWebGpuSupported)();
                  break;
                case "IY":
                  Hp = null === pp.fallbackReason ? null : FL[pp.fallbackReason];
                  break;
                case "SY":
                  Hp = ip.cpuFrameMs;
                  break;
                case "xY":
                  Hp = ip.refreshHz;
                  break;
                case "LY":
                  Hp = ip.cpuBottleneck;
                  break;
                case "YY":
                  Hp = ip.frameIntervalCv;
                  break;
                case "DY":
                  Hp = ip.frameMs;
                  break;
                case "AY":
                  Hp = ip.tickMs;
                  break;
                case "UY":
                  Hp = ip.mainBusyShare;
                  break;
                case "wY":
                  Hp = ip.mainProbeDelayMs;
                  break;
                case "PY":
                  Hp = ip.longAnimationFramesPerMin;
                  break;
                case "WY":
                  Hp = ip.longAnimationFrameTimeShare;
                  break;
                case "yY":
                  Hp = ip.longAnimationFrameScriptShare;
                  break;
                case "vY":
                  Hp = ip.gpuPassMs;
                  break;
                case "tY":
                  Hp = ip.gpuSubmitToDoneMs;
                  break;
                case "HY":
                  Hp = cp.lagP50Ms;
                  break;
                case "dY":
                  Hp = cp.lagP90Ms;
                  break;
                case "lY":
                  Hp = (0, UL.l)(Sp);
                  break;
                case "VL":
                  Hp = xp;
                  break;
                case "eY":
                case "uY":
                case "jY":
                case "kY":
                case "mY":
                case "RY":
                case "qY":
                case "MY":
                case "CY":
                case "EY":
                case "XY":
                case "QY":
                case "JY":
                case "BY":
                case "NY":
                  Hp = null;
                  break;
                case "VY":
                  Hp = (0, pI.getPlatformType)();
                  break;
                case "pD":
                  Hp = (0, pI.getGpuVendor)();
                  break;
                case "iD":
                  Hp = ML.b[pp.backend];
                  break;
                case "cD":
                  Hp = (0, RL.c)();
                  break;
                case "OD":
                  Hp = (0, pI.getOperatingSystem)();
                  break;
                case "oD":
                  Hp = (0, pI.getTrafficSource)();
                  break;
                case "SD":
                  Hp = null !== (Yp = Op.c.get("gameEntrySource")) && void 0 !== Yp ? Yp : tL.g;
                  break;
                case "xD":
                  Hp = null !== (Dp = ip.frameLimiter) && void 0 !== Dp ? Dp : tL.g;
                  break;
                case "LD":
                  Hp = (0, eL.i)();
                  break;
                case "YD":
                  Hp = null !== (Ap = (0, uL.c)()) && void 0 !== Ap ? Ap : tL.g;
                  break;
                case "DD":
                  Hp = (0, eL.e)(Up.width, Up.height);
                  break;
                case "AD":
                  Hp = (0, wL.g)(-(new Date).getTimezoneOffset());
                  break;
                case "yD":
                  Hp = null !== (Pp = pp.fallbackReason) && void 0 !== Pp ? Pp : tL.g;
                  break;
                case "vD":
                  Hp = "ready";
                  break;
                case "tD":
                  Hp = (0, pI.getSoftwareRenderer)();
                  break;
                case "WD":
                  Hp = null !== pp.shaderPackReach() ? "true" : "false";
                  break;
                case "HD":
                  Hp = null !== (Wp = pp.shaderPackReach()) && void 0 !== Wp && Wp.sceneDepth ? "true" : "false";
                  break;
                case "dD": {
                  const ip = pp.shaderPackReach();
                  Hp = null !== ip && void 0 !== ip && ip.sunShadow ? "all" : null !== ip && void 0 !== ip && ip.airShadow ? "air" : "none";
                  break
                }
                case "eD":
                  Hp = qL.C;
                  break;
                case "MD":
                  Hp = (0, kL.k)();
                  break;
                case "PD": {
                  const ip = pp.ZU();
                  Hp = null === ip ? tL.g : String(ip);
                  break
                }
                case "UD":
                case "wD":
                  Hp = tL.g;
                  break;
                default:
                  throw new Error(`Unhandled field name: ${tp}`)
              }
              if (void 0 === Hp) throw new Error(`Metric ${tp} has no value`);
              yp[tp] = Hp
            }
            return yp
          }(this.shell, {
            cpuFrameMs: ip,
            refreshHz: cp,
            cpuBottleneck: op,
            frameIntervalCv: Ip,
            ...Yp
          }, Dp, this.fpsOverTime, this.initialFps, this.pendingLightFailures, this.ping.take(), Wp);
        if (! function(pp, ip, cp) {
            return (0, ri.e)(), pp(yp.k.Send, ip, cp)
          }(this.shell.writeCmd, Pp.od, function(pp) {
            const ip = (0, Np.f)((0, si.d)(pp)),
              cp = new Uint8Array(yp.Jd.BYTES + ip.length);
            return new DataView(cp.buffer).setUint16(0, si.c.AnalyticsUpdate, !0), cp.set(ip, yp.Jd.BYTES), cp
          }(Up))) return this.unsentPage = Wp, void(0 === this.sendsDropped++ && console.warn("[wasm-client] an analytics update found the cmd ring full: dropped"));
        this.unsentPage = null, this.pendingLightFailures -= Math.min(this.pendingLightFailures, UL.h), (0, kL.q)(Up, "wasm", Ap)
      }
    }
    var rL = cp(39818);

    function ZL(pp, ip, cp) {
      const Op = new Map;
      return (0, rL.b)(((pp, cp, Op) => ip.tx(pp, cp, Op)), ((ip, cp, op) => {
        const Ip = `${ip},${cp},${op}`;
        return Op.has(Ip) || Op.set(Ip, (0, bi.d)(pp, ip, cp, op)), Op.get(Ip)
      }), cp)
    }
    var zL = cp(39827),
      sL = cp(41079);

    function KL(pp) {
      const ip = null !== pp && 0 !== (yp.q.playerFlags(pp.api.apiView, 0) & yp.wd.CursorAim);
      ip !== (0, sL.n)() && (0, sL.K)(ip, null !== pp)
    }

    function VL(pp) {
      return (0, dO.b)(eO.G, pp)
    }
    var pY = cp(41248);
    const iY = new Ip.e((pp => cp(42890)(`./${pp}/${pp}Client`)));
    let cY = null,
      OY = null;
    async function oY(pp) {
      cY ??= cp.e(27).then((() => cp(39324))).then((pp => {
        OY = pp.createDefaultClientPlugins
      }), (pp => {
        throw cY = null, pp
      })), await Promise.all([iY.load(pp), cY])
    }

    function IY(pp) {
      pp.load(new Ni(ZO, new KO))
    }
    let SY = !1;
    const xY = new WeakMap;

    function LY(pp) {
      try {
        pp()
      } catch (ip) {
        console.error("[bloxd-wasm-client] a session-end step failed", ip)
      }
    }

    function YY(pp, ip) {
      ! function() {
        var pp, ip;
        gO.Howler.volume();
        const cp = gO.Howler;
        null === (pp = cp._autoResume) || void 0 === pp || pp.call(cp), null === (ip = cp._autoSuspend) || void 0 === ip || ip.call(cp)
      }(), ip.audio.prepare();
      const cp = new dp(ip.core, ip.memory, ip.audio);
      let Ip;
      try {
        Ip = new Ho(cp, ip.options)
      } catch (Pp) {
        return pp.crash(uo.u, Pp), null
      }(0, Lp.f)(eo(cp, Ip));
      const Dp = new Xx({
        running: pp,
        api: cp,
        core: ip.core,
        memory: ip.memory,
        staleOr: ip.staleOr,
        reportFault: ip.reportReplayFault,
        options: ip.options,
        sessionInfo: ip.sessionInfo,
        replayShaderPack: ip.replayShaderPack
      });
      (0, SO.y)();
      const Ap = new fO({
        api: cp,
        tables: Ip,
        sessionInfo: ip.sessionInfo,
        gameFactory: pp => iY.loadedFactory(pp),
        defaultPlugins: (pp, ip, cp, Op) => {
          if (null === OY) throw new Error("The default plugins started before they loaded");
          return OY(pp, ip, cp, Op)
        },
        serverOptions: ip.options,
        onNetEvent: pp => {
          Dp.netEvent(pp), ip.onNetEvent(pp)
        },
        setLocalOptions: ip => {
          Qx(pp, {
            changes: ip,
            reset: !1
          })
        },
        playSound: (pp, cp, Op, op, Ip, Sp, xp) => ip.audio.playGame(pp, cp, Op, op, Ip, Sp, xp),
        preloadSounds: pp => {
          ip.audio.preload(function(pp) {
            const ip = [];
            for (const cp of pp) {
              const pp = Ji(cp);
              pp >= 0 && ip.push(di[pp])
            }
            return ip
          }(pp))
        },
        onSessionEnd: () => {
          LY(op.n), LY(Io), LY((() => {
            Op.c.set({
              openInGameMenuName: null
            })
          })), LY((() => {
            ip.audio.endSession()
          }))
        },
        beforeWrite: ip.beforeWrite,
        beforeOp: ip.beforeOp,
        cameraScreen: oo,
        showCameraFacing: So,
        onEventOverflow: ip.onEventOverflow,
        screenBandY: xp.k,
        replayEntities: Dp.entityHooks,
        hasPackModel: ip.hasPackModel
      });
      return Ap.attach(pp), xY.set(Ap, Dp), nO(Ap.items, ip.audio),
        function(pp) {
          pp.setClientFreeCameraGrant("isDev", !1);
          const ip = ip => {
            pp.setClientFreeCameraGrant("hasDeveloperRank", ip.playerHasRank("developer"))
          };
          (0, Sp.n)("userContextUpdated", ip)
        }(Ap), SY || (SY = !0, (0, Sp.n)("appManagerUpdated|openInGameMenuName", (pp => {
          !pp && (0, Yp.q)().includes(Yp.c) && (0, Yp.r)(Yp.c)
        }))), Ap
    }

    function DY(pp) {
      try {
        pp.closeGame()
      } finally {
        var ip;
        null === (ip = xY.get(pp)) || void 0 === ip || ip.stop(), xY.delete(pp)
      }
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);