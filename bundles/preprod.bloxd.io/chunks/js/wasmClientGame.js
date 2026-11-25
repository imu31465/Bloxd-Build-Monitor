export const id = 59;
export const ids = [59];
export const modules = {
  42886: (QQ, WQ, XQ) => {
    var wQ = {
      "./bedwars/bedwarsClient": [39560, 9],
      "./bridgeBattle/bridgeBattleClient": [39569, 10],
      "./buildAFactory2/buildAFactory2Client": [38774, 78, 77, 76, 234, 229, 11],
      "./classic/classicClient": [39571, 12],
      "./classic/smp2Client": [39578, 13],
      "./clutch/clutchClient": [39581, 14],
      "./containmentBreach/containmentBreachClient": [39587, 228, 15],
      "./cooking/cookingClient": [39702, 16],
      "./defusal/defusalClient": [39707, 17],
      "./frontline/frontlineClient": [39712, 78, 77, 76, 18],
      "./goalRush/goalRushClient": [39715, 19],
      "./luckyBedwars/luckyBedwarsClient": [39723, 20],
      "./ninetyNineNights/ninetyNineNightsClient": [39730, 21],
      "./oneBlock/oneBlockClient": [39735, 22],
      "./plots/plotsClient": [39738, 251, 228, 23],
      "./pvpCiv/pvpCivClient": [39810, 24],
      "./skyIslands/skyIslandsClient": [39818, 25],
      "./skyblock/skyblockClient": [38809, 78, 243, 234, 194, 26],
      "./tsunami/tsunamiClient": [39827, 27]
    };

    function qQ(QQ) {
      if (!XQ.o(wQ, QQ)) return Promise.resolve().then((() => {
        var WQ = new Error("Cannot find module '" + QQ + "'");
        throw WQ.code = "MODULE_NOT_FOUND", WQ
      }));
      var WQ = wQ[QQ],
        qQ = WQ[0];
      return Promise.all(WQ.slice(1).map(XQ.e)).then((() => XQ(qQ)))
    }
    qQ.keys = () => Object.keys(wQ), qQ.id = 42886, QQ.exports = qQ
  },
  36674: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => gQ,
      g: () => sQ,
      j: () => PQ,
      k: () => FQ,
      m: () => pQ
    });
    var wQ = XQ(670),
      qQ = XQ(1812),
      TQ = XQ(5140);
    class zQ {
      constructor(QQ, WQ) {
        this.width = QQ, this.yJ = WQ, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(QQ * WQ)
      }
      push(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const XQ = this.data,
          wQ = this.next * this.width;
        for (let qQ = 0; qQ < this.width; qQ++) XQ[wQ + qQ] = QQ[WQ + qQ];
        this.next = (this.next + 1) % this.yJ, this.size = Math.min(this.size + 1, this.yJ)
      }
      rows() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1 / 0;
        const XQ = [],
          wQ = (this.next - this.size + this.yJ) % this.yJ;
        for (let qQ = 0; qQ < this.size; qQ++) {
          const TQ = (wQ + qQ) % this.yJ * this.width;
          this.data[TQ + QQ] >= WQ && XQ.push(Array.from(this.data.subarray(TQ, TQ + this.width)))
        }
        return XQ
      }
      lines() {
        return this.rows().map((QQ => QQ.join(",")))
      }
    }
    const sQ = 10,
      FQ = {
        idle: 0,
        HI: 1,
        oR: 2,
        xR: 3,
        Py: 4
      },
      PQ = {
        none: 0,
        skipped: 1,
        paced: 2,
        drawn: 3
      },
      gQ = {
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
      JQ = 12e3,
      rQ = ["nowMs", "dtMs", "rawX", "rawY", "turnedX", "turnedY", "outcome", "velocityX", "velocityY", "limit"],
      IQ = ["timeStamp", "nowMs", "movementX", "movementY", "locked"],
      jQ = ["nowMs", "dtMs", "heading", "pitch", "kind"],
      BQ = ["nowMs", "source", "headingBefore", "pitchBefore", "headingAfter", "pitchAfter"],
      yQ = ["nowMs", "change", "count"];

    function VQ(QQ) {
      return "js" === QQ ? gQ.jsClient : gQ.wasmClient
    }
    class DQ {
      constructor() {
        this.steps = new zQ(sQ, JQ), this.events = new zQ(IQ.length, JQ), this.frames = new zQ(jQ.length, JQ), this.cameraSets = new zQ(TQ.f, 256), this.changes = new zQ(yQ.length, 256)
      }
    }
    const pQ = new class {
      constructor() {
        this.rings = null, this.sample = new Float64Array(IQ.length), this.startedClient = null, this.startedAtMs = 0
      }
      get client() {
        return this.startedClient
      }
      start(QQ, WQ) {
        this.startedClient = QQ, this.startedAtMs = performance.now(), null !== this.rings ? this.change(VQ(QQ)) : WQ && this.allocate()
      }
      lockGained() {
        this.allocate(), this.change(gQ.lockGained)
      }
      allocate() {
        null === this.rings && (this.rings = new DQ, null !== this.startedClient && this.changeAt(this.startedAtMs, VQ(this.startedClient), 1))
      }
      step(QQ, WQ) {
        var XQ;
        QQ[WQ + 6] !== FQ.Py && (null === (XQ = this.rings) || void 0 === XQ || XQ.steps.push(QQ, WQ))
      }
      cameraSet(QQ, WQ) {
        var XQ;
        null === (XQ = this.rings) || void 0 === XQ || XQ.cameraSets.push(QQ, WQ)
      }
      mouseMove(QQ, WQ) {
        const XQ = this.rings;
        if (null === XQ) return;
        const wQ = this.sample;
        wQ[0] = QQ.timeStamp, wQ[1] = performance.now(), wQ[2] = QQ.movementX, wQ[3] = QQ.movementY, wQ[4] = WQ ? 1 : 0, XQ.events.push(wQ)
      }
      frame(QQ, WQ, XQ, wQ) {
        const qQ = this.rings;
        if (null === qQ || wQ === PQ.none) return;
        const TQ = this.sample;
        TQ[0] = performance.now(), TQ[1] = QQ, TQ[2] = WQ, TQ[3] = XQ, TQ[4] = wQ, qQ.frames.push(TQ)
      }
      change(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.changeAt(performance.now(), QQ, WQ)
      }
      changeAt(QQ, WQ, XQ) {
        const wQ = this.rings;
        if (null === wQ) return;
        const qQ = this.sample;
        qQ[0] = QQ, qQ[1] = WQ, qQ[2] = XQ, wQ.changes.push(qQ)
      }
      dumpText() {
        var QQ, WQ;
        const XQ = this.rings;
        return [`look records (${this.startedClient}): ${rQ.join(",")}`, ...null !== (QQ = null === XQ || void 0 === XQ ? void 0 : XQ.steps.lines()) && void 0 !== QQ ? QQ : [], `mousemove events: ${IQ.join(",")}`, ...null !== (WQ = null === XQ || void 0 === XQ ? void 0 : XQ.events.lines()) && void 0 !== WQ ? WQ : []].join("\n")
      }
      toJson(QQ, WQ) {
        var XQ;
        const qQ = QQ - 6e4,
          TQ = this.rings,
          zQ = function(QQ, WQ) {
            var XQ;
            let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            const TQ = null !== (XQ = null === QQ || void 0 === QQ ? void 0 : QQ.rows(wQ, qQ)) && void 0 !== XQ ? XQ : [];
            return {
              columns: WQ,
              fromMs: 0 === TQ.length ? null : TQ[0][wQ],
              rows: TQ
            }
          };
        return {
          version: wQ.c,
          client: null !== (XQ = this.startedClient) && void 0 !== XQ ? XQ : "not started",
          savedAt: (new Date).toISOString(),
          savedAtMs: QQ,
          keptMs: 6e4,
          page: window.location.href,
          userAgent: navigator.userAgent,
          devicePixelRatio: window.devicePixelRatio,
          screen: {
            width: window.screen.width,
            height: window.screen.height
          },
          Sy: null !== document.pointerLockElement,
          visibility: document.visibilityState,
          ...WQ,
          outcomes: FQ,
          frameKinds: PQ,
          changes: gQ,
          lookSteps: zQ(null === TQ || void 0 === TQ ? void 0 : TQ.steps, rQ),
          mouseMoves: zQ(null === TQ || void 0 === TQ ? void 0 : TQ.events, IQ, 1),
          frames: zQ(null === TQ || void 0 === TQ ? void 0 : TQ.frames, jQ),
          cameraSets: zQ(null === TQ || void 0 === TQ ? void 0 : TQ.cameraSets, BQ),
          pageChanges: zQ(null === TQ || void 0 === TQ ? void 0 : TQ.changes, yQ)
        }
      }
      save(QQ) {
        const WQ = JSON.stringify(this.toJson(performance.now(), QQ));
        (0, qQ.e)(new Blob([WQ], {
          type: "application/json"
        }), `bloxd-mouse-look-${(new Date).toISOString().replace(/[:.]/g,"-")}.json`)
      }
    }
  },
  39307: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => TQ,
      f: () => qQ
    });
    var wQ = XQ(31);

    function qQ(QQ) {
      return "refetchCode" === QQ || "devDownloadJson" === QQ || QQ.startsWith("Plugin")
    }

    function TQ(QQ, WQ) {
      "refetchCode" !== QQ ? "Plugin|MobAiPlugin|ShowPetUi" !== QQ ? Promise.all([XQ.e(111), XQ.e(112), XQ.e(107), XQ.e(109), XQ.e(222)]).then((() => XQ(41986))).then((XQ => {
        let {
          runClientGameMessage: wQ
        } = XQ;
        wQ(QQ, WQ)
      })).catch((WQ => {
        console.error(`Game message ${QQ} failed`, WQ)
      })) : wQ.k.mB("showPetUi", WQ) : wQ.k.mB("refetchCode")
    }
  },
  42867: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => wQ,
      i: () => qQ
    });
    const wQ = ["recording", "freecam", "keyframe"];

    function qQ() {
      const QQ = crypto.getRandomValues(new Uint32Array(2));
      return BigInt(QQ[1]) << 32n | BigInt(QQ[0])
    }
  },
  34435: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => sQ,
      d: () => FQ
    });
    var wQ = XQ(26);
    const qQ = 24,
      TQ = "farNametags",
      zQ = 1e5;

    function sQ() {
      var QQ;
      return null === (QQ = wQ.b.get("showDistantNametags")) || void 0 === QQ || QQ
    }

    function FQ() {
      var QQ;
      return null !== (QQ = function() {
        const QQ = new URLSearchParams(window.location.search).get(TQ),
          WQ = null === QQ || "" === QQ ? NaN : Number(QQ);
        return Number.isFinite(WQ) && WQ >= 0 ? Math.min(WQ, zQ) : null
      }()) && void 0 !== QQ ? QQ : sQ() ? 0 : qQ
    }
  },
  42859: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      blockIdOf: () => YF.e,
      clearWasmCameraScreen: () => qq,
      creativeItemIds: () => Xw.creativeItemIds,
      decodeMapSettings: () => OF,
      drainTextRerasters: () => ts.d,
      enchantmentPerksOf: () => Xw.enchantmentPerksOf,
      endGameHost: () => sP,
      followCursorAim: () => ZF,
      followMenuPrefs: () => wT,
      loadAudio: () => XP,
      loadClientGame: () => WP,
      loadTextIcons: () => ts.g,
      rasterText: () => Ss.d,
      readBoardToEdit: () => xF,
      readDrawCensus: () => KF.c,
      setTextHost: () => ts.m,
      setTextLocalPlayer: () => ts.o,
      showInCreativeInvenOf: () => Xw.showInCreativeInvenOf,
      startGameHost: () => zP,
      startShellAnalytics: () => oF,
      startSkyFeed: () => gF,
      textChanged: () => ts.w,
      warmText: () => Ss.f,
      wasmCameraScreen: () => wq
    });
    XQ(36814);
    var wQ = XQ(26),
      qQ = XQ(37114),
      TQ = XQ(39434),
      zQ = XQ(31),
      sQ = XQ(3673),
      FQ = XQ(37112),
      PQ = XQ(1335),
      gQ = XQ(651),
      JQ = XQ(38512),
      rQ = XQ(5134),
      IQ = XQ(40864),
      jQ = XQ(40813);
    const BQ = jQ.Yb / 4,
      yQ = jQ.u.PlaySound,
      VQ = jQ.u.SoundReset,
      DQ = rQ.Z.ReplayFailed,
      pQ = rQ.Z.RecorderEvent;
    class GQ {
      constructor(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.core = QQ, this.memory = WQ, this.audio = XQ, this.serverIds = new Int32Array(256).fill(jQ.xd), this.kinds = new Uint16Array(256), this.idStr = new Array(256).fill(null), this.indexById = new Map, this.queries = void 0, this.buffer = null, this.viewPtr = -1, this.view = new DataView(new ArrayBuffer(jQ.x.BYTES)), this.renderPtr = 0, this.yJ = 0, this.renderCapacity = 0, this.render = new Float32Array(0), this.visPtr = 0, this.vis = new Uint8Array(0), this.renderBuffer = null, this.eventsBuffer = null, this.eventsPtr = 0, this.eventsLen = 0, this.events = new DataView(new ArrayBuffer(0)), this.audioView = null, this.scratchPtr = -1, this.corruption = null, this.replay = null, this.queries = new jQ.db(QQ, (() => {
          this.scratchPtr = -1, this.ensureViews()
        }))
      }
      scratch() {
        return this.scratchPtr < 0 && (this.scratchPtr = this.core.LqQ(), this.ensureViews()), this.scratchPtr
      }
      eventBytes(QQ, WQ) {
        const XQ = this.eventView();
        return new Uint8Array(XQ.buffer, XQ.byteOffset + QQ, WQ)
      }
      get apiView() {
        return this.ensureViews(), this.view
      }
      ensureViews() {
        this.memory().buffer !== this.buffer && this.reView()
      }
      get localId() {
        return jQ.x.localId(this.apiView, 0)
      }
      localDeaths() {
        return jQ.x.localDeaths(this.apiView, 0)
      }
      rereadDirectory() {
        const QQ = this.apiView,
          WQ = jQ.x.entRenderPtr(QQ, 0),
          XQ = jQ.x.entVisPtr(QQ, 0),
          wQ = jQ.x.entCapacity(QQ, 0);
        if (WQ !== this.renderPtr || XQ !== this.visPtr || wQ !== this.yJ || this.renderBuffer !== this.buffer) {
          this.renderPtr = WQ, this.visPtr = XQ, this.yJ = wQ, this.renderBuffer = this.buffer;
          const QQ = this.memoryView(Float32Array, WQ, wQ * BQ, "the render array"),
            qQ = this.memoryView(Uint8Array, XQ, wQ, "the visibility array");
          this.renderCapacity = QQ && qQ ? wQ : 0, this.render = QQ && qQ ? QQ : new Float32Array(0), this.vis = QQ && qQ ? qQ : new Uint8Array(0)
        }
      }
      memoryView(QQ, WQ, XQ, wQ) {
        try {
          return (0, IQ.n)(QQ, this.memory().buffer, WQ, XQ, wQ)
        } catch (qQ) {
          return this.keepCorruption(qQ), null
        }
      }
      memoryData(QQ, WQ, XQ, wQ) {
        try {
          return (0, IQ.g)(this.memory().buffer, QQ, WQ, XQ, wQ)
        } catch (qQ) {
          return this.keepCorruption(qQ), null
        }
      }
      reportCorruption(QQ) {
        this.keepCorruption(new IQ.d(QQ))
      }
      keepCorruption(QQ) {
        if (!(QQ instanceof IQ.d)) throw QQ;
        this.corruption ??= QQ
      }
      throwCorruption() {
        if (this.corruption) throw this.corruption
      }
      walk(QQ, WQ, XQ) {
        this.rereadDirectory(), this.throwCorruption();
        const {
          ptr: wQ,
          len: qQ
        } = QQ;
        this.eventsPtr = wQ, this.eventsLen = qQ, this.eventsBuffer = null;
        const TQ = this.eventView();
        for (let PQ = 0; PQ < qQ;) {
          const QQ = TQ.getUint32(PQ, !0),
            XQ = 65535 & QQ,
            wQ = QQ >>> 16,
            qQ = PQ + rQ.V;
          if (XQ === jQ.u.EntitySpawned) {
            var zQ;
            if (wQ !== jQ.bc.BYTES) throw HQ(XQ, PQ, wQ);
            const QQ = jQ.bc.serverId(TQ, qQ);
            this.spawned(QQ, jQ.bc.index(TQ, qQ), jQ.bc.kind(TQ, qQ)), null === (zQ = WQ.entityAdded) || void 0 === zQ || zQ.call(WQ, QQ)
          } else if ((XQ === jQ.u.ChunkSlot || XQ === jQ.u.EntityInfoChanged) && !(0, jQ.we)(XQ, TQ, qQ, wQ, WQ)) throw HQ(XQ, PQ, wQ);
          PQ = qQ + (0, rQ.te)(wQ)
        }
        try {
          var sQ;
          null === (sQ = WQ.afterPrescan) || void 0 === sQ || sQ.call(WQ), this.throwCorruption(), !XQ() && this.dispatch(QQ, WQ, XQ) && (this.throwCorruption(), this.applyListener(), WQ.afterWalk(QQ.kind)), this.throwCorruption()
        } catch (FQ) {
          throw FQ instanceof IQ.d && (this.corruption ??= FQ), FQ
        } finally {
          XQ() || null !== this.corruption || this.applyDespawns(qQ, WQ)
        }
      }
      applyDespawns(QQ, WQ) {
        const XQ = this.eventView();
        for (let qQ = 0; qQ < QQ;) {
          const QQ = XQ.getUint32(qQ, !0),
            TQ = qQ + rQ.V;
          if ((65535 & QQ) === jQ.u.EntityDespawned && QQ >>> 16 === jQ.bc.BYTES) {
            const QQ = jQ.bc.serverId(XQ, TQ);
            var wQ;
            if (this.despawned(QQ, jQ.bc.index(XQ, TQ))) null === (wQ = WQ.entityRemoved) || void 0 === wQ || wQ.call(WQ, QQ)
          }
          qQ = TQ + (0, rQ.te)(QQ >>> 16)
        }
        this.rereadDirectory()
      }
      dispatch(QQ, WQ, XQ) {
        const {
          len: wQ,
          net: qQ,
          netOffsets: TQ
        } = QQ;
        let zQ = this.eventView(),
          sQ = 0;
        for (let vQ = 0; vQ < wQ;) {
          const QQ = zQ.getUint32(vQ, !0),
            wQ = 65535 & QQ,
            aQ = QQ >>> 16,
            lQ = vQ + rQ.V;
          let hQ = !1;
          if (sQ < qQ.length && TQ[sQ] === vQ) WQ.netEvent(qQ[sQ]), sQ++, hQ = !0;
          else if (wQ === rQ.Z.LocalPlayerBound) {
            var FQ;
            if (aQ !== rQ.Jb) throw HQ(wQ, vQ, aQ);
            null === (FQ = WQ.localPlayerBound) || void 0 === FQ || FQ.call(WQ, zQ.getInt32(lQ, !0)), hQ = !0
          } else if (wQ === rQ.Z.LocalHurt) {
            var PQ;
            if (aQ !== rQ.Fb) throw HQ(wQ, vQ, aQ);
            null === (PQ = WQ.localHurt) || void 0 === PQ || PQ.call(WQ, zQ.getInt32(lQ, !0), zQ.getFloat32(lQ + 4, !0), zQ.getUint32(lQ + 8, !0)), hQ = !0
          } else if (wQ === rQ.Z.AttackHit) {
            var gQ;
            if (aQ !== rQ.e) throw HQ(wQ, vQ, aQ);
            const QQ = zQ.getFloat32(lQ, !0),
              XQ = zQ.getFloat32(lQ + 4, !0),
              qQ = zQ.getFloat32(lQ + 8, !0),
              TQ = zQ.getUint32(lQ + 12, !0);
            null === (gQ = WQ.attackHit) || void 0 === gQ || gQ.call(WQ, QQ, XQ, qQ, 0 !== (TQ & rQ.k.Crit), 0 !== (TQ & rQ.k.HitSelf))
          } else if (wQ === rQ.Z.PhysicsType) {
            var JQ;
            if (aQ !== rQ.kc) throw HQ(wQ, vQ, aQ);
            null === (JQ = WQ.physicsType) || void 0 === JQ || JQ.call(WQ, zQ.getUint32(lQ, !0), zQ.getInt32(lQ + 4, !0)), hQ = !0
          } else if (wQ === rQ.Z.VehicleEffect) {
            var IQ;
            const QQ = dQ(zQ, lQ, aQ);
            if (null === QQ) throw HQ(wQ, vQ, aQ);
            null === (IQ = WQ.vehicleEffect) || void 0 === IQ || IQ.call(WQ, QQ.op, QQ.name, QQ.icon, QQ.level, QQ.durationMs), hQ = !0
          } else if (wQ === rQ.Z.ZoomChanged) {
            var BQ;
            if (aQ !== rQ.be) throw HQ(wQ, vQ, aQ);
            null === (BQ = WQ.zoomChanged) || void 0 === BQ || BQ.call(WQ, zQ.getFloat32(lQ, !0), zQ.getUint8(lQ + 4)), hQ = !0
          } else if (wQ === rQ.Z.ZoomDisabled) {
            var GQ;
            if (0 !== aQ) throw HQ(wQ, vQ, aQ);
            null === (GQ = WQ.zoomDisabled) || void 0 === GQ || GQ.call(WQ), hQ = !0
          } else if (wQ === rQ.Z.BhopDisabled) {
            var UQ;
            if (0 !== aQ) throw HQ(wQ, vQ, aQ);
            null === (UQ = WQ.bhopDisabled) || void 0 === UQ || UQ.call(WQ), hQ = !0
          } else if (wQ === rQ.Z.GameCamera) {
            var bQ;
            null === (bQ = WQ.gameCamera) || void 0 === bQ || bQ.call(WQ, new Uint8Array(zQ.buffer, zQ.byteOffset + lQ, aQ).slice()), hQ = !0
          } else if (wQ === jQ.u.ChunkSlot || wQ === jQ.u.EntityInfoChanged);
          else if (wQ >= yQ && wQ <= VQ) {
            if (this.audio && !this.audio.onAudioEvent(wQ, zQ, lQ, aQ)) throw HQ(wQ, vQ, aQ)
          } else if (wQ >= DQ && wQ <= pQ) {
            if (this.replay) {
              if (!this.replay.onReplayEvent(wQ, zQ, lQ, aQ)) throw HQ(wQ, vQ, aQ);
              hQ = !0
            }
          } else if (wQ >= jQ.Kd && wQ <= jQ.Md && wQ !== rQ.Z.EnvLighting) {
            if (!(0, jQ.we)(wQ, zQ, lQ, aQ, WQ)) throw HQ(wQ, vQ, aQ);
            hQ = !0
          }
          if (hQ) {
            if (XQ()) return !1;
            zQ = this.eventView()
          }
          vQ = lQ + (0, rQ.te)(aQ)
        }
        return !XQ()
      }
      applyListener() {
        var QQ;
        if (!this.audio) return;
        const WQ = jQ.x.audioViewPtr(this.apiView, 0),
          XQ = this.memory().buffer;
        let wQ = this.audioView;
        (null === (QQ = wQ) || void 0 === QQ ? void 0 : QQ.buffer) === XQ && wQ.byteOffset === WQ || (wQ = (0, IQ.g)(XQ, WQ, jQ.A.BYTES, 8, "the audio view"), this.audioView = wQ), wQ && this.audio.applyListener(wQ)
      }
      indexOf(QQ) {
        return this.indexById.get("number" === typeof QQ ? QQ : +QQ)
      }
      isLocal(QQ) {
        return QQ !== jQ.xd && QQ === jQ.x.localId(this.apiView, 0)
      }
      xV(QQ) {
        const WQ = [0, 0, 0];
        return this.readPosition("number" === typeof QQ ? QQ : +QQ, WQ) ? WQ : null
      }
      readPosition(QQ, WQ) {
        const XQ = this.apiView;
        if (void 0 !== this.indexById.get(QQ) && this.isLocal(QQ)) {
          for (let QQ = 0; QQ < 3; QQ++) WQ[QQ] = jQ.x.localPos(XQ, 0, QQ);
          return !0
        }
        return this.readDrawnPosition(QQ, WQ)
      }
      readDrawnPosition(QQ, WQ) {
        const XQ = this.apiView,
          wQ = this.indexById.get(QQ);
        if (void 0 === wQ || wQ >= this.renderCapacity) return WQ[0] = WQ[1] = WQ[2] = NaN, !1;
        const qQ = wQ * BQ;
        for (let TQ = 0; TQ < 3; TQ++) WQ[TQ] = this.render[qQ + TQ] + jQ.x.origin(XQ, 0, TQ);
        return !0
      }
      checkValid(QQ) {
        return void 0 !== this.indexOf(QQ)
      }
      isAlive(QQ) {
        const WQ = this.indexOf(QQ);
        if (void 0 === WQ) return null;
        if (this.ensureViews(), WQ >= this.renderCapacity) return null;
        const XQ = this.vis[WQ];
        return 0 === XQ ? null : 0 !== (XQ & jQ.ve.Alive)
      }
      getEntityType(QQ) {
        const WQ = this.indexOf(QQ);
        return void 0 === WQ ? this.isLocal("number" === typeof QQ ? QQ : +QQ) ? "Player" : null : bQ(this.kinds[WQ])
      }
      spawned(QQ, WQ, XQ) {
        if (WQ >= 1048576) throw new IQ.d(`entity ${QQ} spawned at index ${WQ}`);
        this.ensureIndex(WQ), this.serverIds[WQ] === QQ && null !== this.idStr[WQ] || (this.idStr[WQ] = String(QQ)), this.serverIds[WQ] = QQ, this.kinds[WQ] = XQ, this.indexById.set(QQ, WQ)
      }
      despawned(QQ, WQ) {
        let XQ = !1;
        return this.indexById.get(QQ) === WQ && (this.indexById.delete(QQ), XQ = !0), WQ < this.serverIds.length && this.serverIds[WQ] === QQ && (this.serverIds[WQ] = jQ.xd, this.kinds[WQ] = 0, this.idStr[WQ] = null), XQ
      }
      ensureIndex(QQ) {
        const WQ = this.serverIds.length;
        if (QQ < WQ) return;
        let XQ = 2 * WQ;
        for (; XQ <= QQ;) XQ *= 2;
        const wQ = new Int32Array(XQ).fill(jQ.xd);
        wQ.set(this.serverIds), this.serverIds = wQ;
        const qQ = new Uint16Array(XQ);
        qQ.set(this.kinds), this.kinds = qQ;
        for (let TQ = WQ; TQ < XQ; TQ++) this.idStr.push(null)
      }
      eventView() {
        const QQ = this.memory().buffer;
        return QQ !== this.eventsBuffer && (this.eventsBuffer = QQ, this.events = new DataView(QQ, this.eventsPtr, this.eventsLen)), this.events
      }
      reView() {
        const QQ = this.memory().buffer;
        this.buffer = QQ, this.viewPtr < 0 && (this.viewPtr = this.core.kqQ()), this.view = new DataView(QQ, this.viewPtr, jQ.x.BYTES), this.rereadDirectory()
      }
    }

    function UQ(QQ) {
      return QQ >>> jQ.e === jQ.w.Item
    }

    function bQ(QQ) {
      var WQ, XQ;
      const wQ = QQ & jQ.i;
      switch (QQ >>> jQ.e) {
        case jQ.w.Lifeform:
          return null !== (WQ = gQ.i[wQ]) && void 0 !== WQ ? WQ : null;
        case jQ.w.Throwable:
          return null !== (XQ = JQ.m[wQ]) && void 0 !== XQ ? XQ : null;
        case jQ.w.Mesh:
          return "Mesh";
        case jQ.w.Audio:
          return "AudioEntity";
        case jQ.w.Item:
          return "Item";
        default:
          return null
      }
    }
    const vQ = new TextDecoder;

    function dQ(QQ, WQ, XQ) {
      if (XQ < rQ.Md.HEAD_BYTES) return null;
      const wQ = QQ.getUint32(WQ, !0),
        qQ = QQ.getUint32(WQ + 20, !0),
        TQ = QQ.getUint32(WQ + 24, !0),
        zQ = rQ.Md.HEAD_BYTES + (0, rQ.te)(qQ);
      if (wQ !== rQ.Md.UPDATE && wQ !== rQ.Md.REMOVE || qQ > XQ || zQ + TQ > XQ) return null;
      const sQ = (XQ, wQ) => vQ.decode(new Uint8Array(QQ.buffer, QQ.byteOffset + WQ + XQ, wQ)),
        FQ = QQ.getFloat64(WQ + 12, !0);
      return {
        op: wQ,
        level: QQ.getFloat64(WQ + 4, !0),
        durationMs: Number.isNaN(FQ) ? null : FQ,
        name: sQ(rQ.Md.HEAD_BYTES, qQ),
        icon: sQ(zQ, TQ)
      }
    }

    function HQ(QQ, WQ, XQ) {
      return new IQ.d(`event ${QQ} at ${WQ} of ${XQ} bytes`)
    }
    var aQ = XQ(402),
      lQ = XQ(1257),
      hQ = XQ(39307),
      iQ = XQ(2021),
      cQ = XQ(41221),
      AQ = XQ(1972),
      RQ = XQ(39449),
      EQ = XQ(39481),
      CQ = XQ(39458),
      uQ = XQ(40850),
      LQ = XQ(2510),
      kQ = XQ(39444),
      fQ = XQ(39476);
    const SQ = Math.max(jQ.Lb.BYTES, jQ.Cb.BYTES, jQ.Db.BYTES);

    function tQ(QQ) {
      if (!(0, fQ.f)(QQ)) return null;
      const WQ = Number(QQ);
      return (0 | WQ) === WQ ? WQ : null
    }
    class oQ {
      constructor(QQ) {
        this.api = QQ, this.bodyHeading = 0, this.viewHeading = 0, this.defaultPose = (0, kQ.j)(), this.defaultPoseRead = !1, this.defaultFov = 0, this.baseFov = 0, this.aspect = 1, this.uw = null, this.entityLive = !1, this.entityFeet = [0, 0, 0], this.entityAim = [0, 0, 0], this.entityHeading = 0, this.entityPitch = null, this.entityLookHeading = null, this.localId = jQ.xd, this.localName = String(jQ.xd), this.scratch = null
      }
      readView() {
        this.defaultPoseRead = !1, this.uw = null;
        const QQ = this.api.queries.directorView() >= jQ.Lb.BYTES ? this.scratchView() : null;
        null !== QQ && (this.defaultFov = (0, AQ.y)(jQ.Lb.fov(QQ, 0)), this.baseFov = (0, AQ.y)(jQ.Lb.baseFov(QQ, 0)), this.aspect = jQ.Lb.aspect(QQ, 0), this.bodyHeading = jQ.Lb.bodyHeading(QQ, 0))
      }
      getViewHeading() {
        return this.viewHeading
      }
      setViewHeading(QQ) {
        this.viewHeading = QQ
      }
      get localPlayerId() {
        const QQ = jQ.x.localId(this.api.apiView, 0);
        return QQ !== this.localId && (this.localId = QQ, this.localName = String(QQ)), this.localName
      }
      getEntityPosition(QQ) {
        return this.readEntity(QQ) ? this.entityFeet : null
      }
      getEntityAimPoint(QQ) {
        return this.readEntity(QQ) ? this.entityAim : null
      }
      getEntityHeading(QQ) {
        const WQ = tQ(QQ);
        if (null === WQ) return null;
        const XQ = jQ.x.localId(this.api.apiView, 0);
        return WQ === XQ && XQ !== jQ.xd ? this.viewHeading : this.readEntity(QQ) ? this.entityHeading : null
      }
      getEntityPitch(QQ) {
        return this.readEntity(QQ) ? this.entityPitch : null
      }
      getEntityLookHeading(QQ) {
        return this.readEntity(QQ) ? this.entityLookHeading : null
      }
      raycastTerrain(QQ, WQ, XQ) {
        const wQ = this.api.queries.cameraSweep(QQ[0], QQ[1], QQ[2], WQ[0], WQ[1], WQ[2], XQ);
        return wQ < XQ - 1e-6 ? wQ : null
      }
      getDefaultPose() {
        if (this.defaultPoseRead) return this.defaultPose;
        this.defaultPoseRead = !0;
        const QQ = this.defaultPose;
        QQ.fov = this.defaultFov;
        const WQ = this.api.queries.directorDefaultPose() >= jQ.Cb.BYTES ? this.scratchView() : null;
        if (null === WQ) return QQ;
        for (let XQ = 0; XQ < 3; XQ++) QQ.position[XQ] = jQ.Cb.eye(WQ, 0, XQ);
        return QQ.heading = jQ.Cb.heading(WQ, 0), QQ.pitch = jQ.Cb.pitch(WQ, 0), QQ
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
      readEntity(QQ) {
        const WQ = tQ(QQ);
        if (null === WQ) return !1;
        if (WQ === this.uw) return this.entityLive;
        this.uw = WQ;
        const XQ = this.api.queries.directorEntity(WQ) >= jQ.Db.BYTES ? this.scratchView() : null;
        if (this.entityLive = null !== XQ, null === XQ) return !1;
        for (let TQ = 0; TQ < 3; TQ++) this.entityFeet[TQ] = jQ.Db.feet(XQ, 0, TQ), this.entityAim[TQ] = this.entityFeet[TQ];
        this.entityAim[1] += jQ.Db.eyeHeight(XQ, 0), this.entityHeading = jQ.Db.heading(XQ, 0);
        const wQ = jQ.Db.pitch(XQ, 0);
        this.entityPitch = Number.isNaN(wQ) ? null : wQ;
        const qQ = jQ.Db.lookHeading(XQ, 0);
        return this.entityLookHeading = Number.isNaN(qQ) ? null : qQ, !0
      }
      scratchView() {
        const QQ = this.api.scratch(),
          WQ = this.api.memory().buffer,
          XQ = this.scratch;
        return null !== XQ && XQ.buffer === WQ && XQ.byteOffset === QQ ? XQ : (this.scratch = this.api.memoryData(QQ, SQ, 8, "the director's record"), this.scratch)
      }
    }
    const eQ = {
        mode: "default"
      },
      nQ = {
        show: () => {},
        clear: () => {}
      };

    function xQ() {
      return "undefined" !== typeof document && "hidden" === document.visibilityState
    }
    class YQ {
      constructor(QQ) {
        this.options = QQ, this.nJ = void 0, this.director = void 0, this.latest = eQ, this.pending = void 0, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.look = {
          jR: 0,
          yR: 0
        }, this.pointedAt = {
          heading: 0,
          pitch: 0
        }, this.engaged = !1, this.calledThisFrame = !1, this.holding = !1, this.lastCallMs = 0, this.answeredPose = !1, this.nB = new Int32Array(3 * jQ.ie), this.centresLen = 0, this.centresUnsent = !1, this.next = new Int32Array(3 * jQ.ie), this.nJ = new oQ(QQ.api), this.director = new CQ.b(this.nJ)
      }
      settingsChanged(QQ) {
        let WQ = eQ;
        if (QQ.length > 0) try {
          WQ = (0, uQ.d)(QQ)
        } catch {}
        this.latest = WQ, this.pending = WQ
      }
      call(QQ, WQ, XQ, wQ, qQ, TQ) {
        var zQ, sQ;
        let FQ;
        this.holding = !1;
        try {
          FQ = this.answer(QQ, WQ, XQ, wQ, qQ, TQ)
        } catch (rQ) {
          var PQ, gQ;
          throw this.answeredPose = !1, null === (PQ = (gQ = this.options).showFacing) || void 0 === PQ || PQ.call(gQ, null), rQ
        }
        const JQ = this.answeredPose && 0 === (wQ & jQ.Hb.Held);
        return this.answeredPose = FQ !== jQ.yb.None, this.holding = this.answeredPose && !JQ, null === (zQ = (sQ = this.options).showFacing) || void 0 === zQ || zQ.call(sQ, this.holding ? this.facing : null), FQ
      }
      holdsView() {
        return this.holding
      }
      answer(QQ, WQ, XQ, wQ, qQ, TQ) {
        this.calledThisFrame = !0, this.engaged = !0, this.lastCallMs = this.now();
        const {
          nJ: zQ
        } = this;
        zQ.readView();
        if (0 !== (wQ & jQ.Hb.Held) || zQ.setViewHeading((0, RQ.w)(zQ.bodyHeading)), void 0 !== this.pending) {
          const QQ = this.pending;
          this.pending = void 0, this.director.setSettings(QQ), this.syncShownSettings()
        }
        this.readLook((0, LQ.f)(WQ), (0, LQ.f)(XQ), wQ, (0, LQ.f)(qQ), (0, LQ.f)(TQ));
        const sQ = this.director.update(QQ / 1e3, this.look);
        if (this.syncShownSettings(), this.writeCentres(this.director.getLoadingPositions()), this.hidden() || this.screen().show(this.director.getScreenFade(), this.director.getSettings()), !sQ) return jQ.yb.None;
        const [FQ, PQ, gQ] = sQ.position;
        if (0 === this.options.api.queries.directorPose(FQ, PQ, gQ, (0, RQ.w)(sQ.heading), (0, RQ.j)(sQ.pitch), (0, AQ.j)(sQ.fov))) return jQ.yb.None;
        if ("default" === this.director.getSettings().mode) return jQ.yb.Pose;
        switch (this.facing) {
          case "camera":
            return jQ.yb.FaceCamera;
          case "cursor":
            return jQ.yb.FaceCursor;
          default:
            return jQ.yb.FaceMovement
        }
      }
      afterFrame(QQ) {
        QQ ? (this.calledThisFrame || (this.holding = !1, this.engaged && this.idle()), this.calledThisFrame = !1) : this.centresLen > 0 && this.hidden() && this.now() - this.lastCallMs > 1e3 && this.setCentres(0), this.centresUnsent && this.sendCentres()
      }
      reset() {
        this.latest = eQ, this.idle()
      }
      restart() {
        const QQ = this.holding;
        this.idle(), this.holding = QQ
      }
      idle() {
        var QQ, WQ;
        this.engaged && this.screen().clear(), this.engaged = !1, this.holding = !1, this.director = new CQ.b(this.nJ), this.pending = this.latest, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.answeredPose = !1, null === (QQ = (WQ = this.options).showFacing) || void 0 === QQ || QQ.call(WQ, null), this.setCentres(0)
      }
      syncShownSettings() {
        const QQ = this.director.getSettings();
        if (QQ === this.shownSettings) return;
        this.shownSettings = QQ;
        const WQ = (0, EQ.f)(QQ);
        this.facing = WQ.facing, this.mouseTurns = WQ.mouseTurns
      }
      readLook(QQ, WQ, XQ, wQ, qQ) {
        const TQ = this.look,
          zQ = 0 !== (XQ & jQ.Hb.LookPointed);
        if (null === this.mouseTurns && !zQ) return TQ.jR = 0, TQ.yR = 0, void(TQ.pointedAt = void 0);
        let sQ;
        zQ && (this.pointedAt.heading = wQ, this.pointedAt.pitch = qQ, sQ = this.pointedAt);
        const {
          nJ: FQ
        } = this;
        FQ.setViewHeading((0, EQ.c)(FQ.getViewHeading(), QQ, WQ, sQ, "look" === this.mouseTurns, TQ))
      }
      writeCentres(QQ) {
        const WQ = this.next,
          XQ = Math.min(QQ.length, jQ.ie);
        for (let wQ = 0; wQ < XQ; wQ++)
          for (let XQ = 0; XQ < 3; XQ++) WQ[3 * wQ + XQ] = Math.floor(QQ[wQ][XQ] / jQ.H);
        this.setCentres(XQ)
      }
      setCentres(QQ) {
        const {
          nB: WQ,
          next: XQ
        } = this;
        let wQ = QQ === this.centresLen;
        for (let qQ = 0; wQ && qQ < 3 * QQ; qQ++) wQ = WQ[qQ] === XQ[qQ];
        wQ || (WQ.fill(0), WQ.set(XQ.subarray(0, 3 * QQ)), this.centresLen = QQ, this.centresUnsent = !0, this.sendCentres())
      }
      sendCentres() {
        const QQ = this.options.cmd();
        null !== QQ && (0, jQ.If)(QQ, 0, this.nB, this.centresLen) && (this.centresUnsent = !1)
      }
      screen() {
        var QQ, WQ, XQ;
        return null !== (QQ = null === (WQ = (XQ = this.options).screen) || void 0 === WQ ? void 0 : WQ.call(XQ)) && void 0 !== QQ ? QQ : nQ
      }
      hidden() {
        var QQ;
        return (null !== (QQ = this.options.isPageHidden) && void 0 !== QQ ? QQ : xQ)()
      }
      now() {
        var QQ, WQ, XQ;
        return null !== (QQ = null === (WQ = (XQ = this.options).now) || void 0 === WQ ? void 0 : WQ.call(XQ)) && void 0 !== QQ ? QQ : performance.now()
      }
    }
    var NQ = XQ(40994);
    const ZQ = jQ.H * jQ.H * jQ.H,
      OQ = Math.log2(jQ.H),
      KQ = jQ.H - 1,
      mQ = jQ.T.BYTES / 4,
      MQ = new Uint16Array(ZQ);

    function QW(QQ, WQ, XQ) {
      return QQ * jQ.H * jQ.H + WQ * jQ.H + XQ
    }
    class WW {
      constructor(QQ) {
        this.chunk = QQ
      }
      get data() {
        return this.chunk.gameVoxels()
      }
      index(QQ, WQ, XQ) {
        return QW(QQ, WQ, XQ)
      }
    }
    class XW {
      constructor() {
        this.ids = new Map, this.cleared = new Set, this.layers = 0, this.patched = null, this.from = null
      }
    }
    class wW {
      constructor(QQ, WQ, XQ, wQ) {
        this.table = QQ, this.slot = WQ, this.generation = XQ, this.epoch = wQ, this.Gr = new WW(this), this.writes = null, this.writeCount = 0, this.shownVersion = 0, this.shownCore = -1, this.shownWrites = -1, this.data = MQ, this.dataPtr = 0, this.dataBuffer = null, this.dataStamp = -1, this.version = 0, this.layers = null, this.layersVersion = -1, this.layersPtr = -1, this.staleLayers = 0
      }
      get Sj() {
        return this.voxelData(), this.version === this.shownCore && this.writeCount === this.shownWrites || (this.shownCore = this.version, this.shownWrites = this.writeCount, this.shownVersion = this.table.nextVersion()), this.shownVersion
      }
      get UI() {
        const QQ = this.gameVoxels(),
          WQ = this.layers ??= new Uint16Array(jQ.H);
        this.layersVersion === this.version && this.layersPtr === this.dataPtr || (this.layersVersion = this.version, this.layersPtr = this.dataPtr, this.staleLayers = -1);
        for (let XQ = 0; 0 !== this.staleLayers; XQ++) {
          const wQ = 1 << XQ;
          0 !== (this.staleLayers & wQ) && (this.staleLayers &= ~wQ, WQ[XQ] = qW(QQ, XQ))
        }
        return WQ
      }
      voxelData() {
        return this.dataStamp === this.table.stamp && 0 !== this.data.length ? this.data : this.reread()
      }
      gameVoxels() {
        const QQ = this.voxelData(),
          WQ = this.writes;
        if (null === WQ || 0 === WQ.ids.size) return QQ;
        if (WQ.from !== QQ) {
          const XQ = WQ.patched ??= new Uint16Array(ZQ);
          XQ.set(QQ);
          for (const [QQ, wQ] of WQ.ids) XQ[QQ] = wQ;
          WQ.from = QQ
        }
        return WQ.patched
      }
      written(QQ) {
        var WQ;
        return null === (WQ = this.writes) || void 0 === WQ ? void 0 : WQ.ids.get(QQ)
      }
      hasWrites() {
        return null !== this.writes && 0 !== this.writes.ids.size
      }
      write(QQ, WQ, XQ) {
        const wQ = this.writes ??= new XW;
        wQ.ids.set(QQ, WQ), XQ && wQ.cleared.add(QQ), null !== wQ.from && (wQ.patched[QQ] = WQ);
        const qQ = 1 << (QQ >> OQ & KQ);
        wQ.layers |= qQ, this.staleLayers |= qQ, this.writeCount++
      }
      clearWrites() {
        const QQ = this.writes;
        null !== QQ && (this.staleLayers |= QQ.layers, QQ.ids.clear(), QQ.cleared.clear(), QQ.layers = 0, QQ.from = null)
      }
      dataCleared(QQ) {
        var WQ;
        return !0 === (null === (WQ = this.writes) || void 0 === WQ ? void 0 : WQ.cleared.has(QQ))
      }
      reread() {
        this.dataStamp = this.table.stamp;
        const QQ = this.table.slotWords(),
          WQ = this.slot * mQ;
        if (this.epoch !== this.table.epoch || WQ + mQ > QQ.length || 0 === QQ[WQ + 3] || QQ[WQ + 2] !== this.generation) return this.data = MQ, this.dataPtr = 0, MQ;
        this.version = QQ[WQ + 1];
        const XQ = QQ[WQ + 0],
          wQ = QQ.buffer;
        return XQ === this.dataPtr && wQ === this.dataBuffer || (this.dataPtr = XQ, this.dataBuffer = wQ, this.data = this.table.voxelsAt(wQ, XQ)), this.data
      }
    }

    function qW(QQ, WQ) {
      const XQ = QQ[WQ * jQ.H];
      for (let wQ = 0; wQ < jQ.H; wQ++) {
        const qQ = QW(wQ, WQ, 0);
        for (let WQ = 0; WQ < jQ.H; WQ++)
          if (QQ[qQ + WQ] !== XQ) return 65535
      }
      return XQ
    }
    const TW = new Uint32Array(0);

    function zW(QQ, WQ, XQ) {
      return QW(QQ & KQ, WQ & KQ, XQ & KQ)
    }
    class sW {
      constructor(QQ, WQ) {
        this.memory = QQ, this.apiView = WQ, this.chunks = new Map, this.written = [], this.lastKey = -1, this.lastChunk = void 0, this.slotsPtr = 0, this.slotsLen = 0, this.slotsBuffer = null, this.slots = TW, this.walkPtr = 0, this.walkLen = 0, this.walkBuffer = null, this.walk = TW, this.epoch = 0, this.stamp = 0, this.versions = 0, this.corruption = null
      }
      apply(QQ, WQ, XQ, wQ, qQ, TQ) {
        if (this.lastKey = -1, this.lastChunk = void 0, this.stamp++, TQ === jQ.X.ResetAll) return this.chunks.clear(), void this.epoch++;
        if (TQ !== jQ.X.Stored && TQ !== jQ.X.Unloaded) throw new IQ.d(`ChunkSlot flags ${TQ}`);
        const zQ = (0, NQ.e)(QQ, WQ, XQ);
        if (zQ < 0) return;
        if (TQ === jQ.X.Unloaded) return void this.chunks.delete(zQ);
        const sQ = this.chunks.get(zQ);
        (null === sQ || void 0 === sQ ? void 0 : sQ.slot) === wQ && sQ.generation === qQ || this.chunks.set(zQ, new wW(this, wQ, qQ, this.epoch))
      }
      touch() {
        this.stamp++, this.clearOverlay(), this.viewWalkThrough()
      }
      refresh() {
        if (this.stamp++, this.corruption) throw this.corruption;
        const QQ = this.apiView(),
          WQ = jQ.x.chunkSlotsPtr(QQ, 0),
          XQ = jQ.x.chunkSlotsLen(QQ, 0);
        WQ === this.slotsPtr && XQ === this.slotsLen || (this.slotsPtr = WQ, this.slotsLen = XQ, this.slotsBuffer = null, this.slotWords()), this.viewWalkThrough(), this.clearOverlay()
      }
      viewWalkThrough() {
        const QQ = this.apiView(),
          WQ = jQ.x.walkThroughPtr(QQ, 0),
          XQ = jQ.x.walkThroughLen(QQ, 0);
        WQ === this.walkPtr && XQ === this.walkLen || (this.walkPtr = WQ, this.walkLen = XQ, this.walkBuffer = null, this.walkWords())
      }
      clearOverlay() {
        for (const QQ of this.written) QQ.clearWrites();
        this.written.length = 0
      }
      nextVersion() {
        return ++this.versions
      }
      slotWords() {
        const QQ = this.memory().buffer;
        var WQ;
        QQ !== this.slotsBuffer && (this.slotsBuffer = QQ, this.slots = null !== (WQ = (0, IQ.n)(Uint32Array, QQ, this.slotsPtr, this.slotsLen * mQ, "the chunk directory")) && void 0 !== WQ ? WQ : TW);
        return this.slots
      }
      voxelsAt(QQ, WQ) {
        try {
          var XQ;
          return null !== (XQ = (0, IQ.n)(Uint16Array, QQ, WQ, ZQ, "a chunk's voxels")) && void 0 !== XQ ? XQ : MQ
        } catch (wQ) {
          if (!(wQ instanceof IQ.d)) throw wQ;
          return this.corruption ??= wQ, MQ
        }
      }
      chunk(QQ, WQ, XQ) {
        var wQ;
        return null !== (wQ = this.chunks.get((0, NQ.e)(QQ, WQ, XQ))) && void 0 !== wQ ? wQ : null
      }
      isLoaded(QQ, WQ, XQ) {
        return void 0 !== this.chunkAt(Math.floor(QQ), Math.floor(WQ), Math.floor(XQ))
      }
      ez(QQ, WQ, XQ) {
        var wQ;
        const qQ = Math.floor(QQ),
          TQ = Math.floor(WQ),
          zQ = Math.floor(XQ),
          sQ = this.chunkAt(qQ, TQ, zQ);
        if (!sQ) return 0;
        const FQ = zW(qQ, TQ, zQ);
        return null !== (wQ = sQ.written(FQ)) && void 0 !== wQ ? wQ : sQ.voxelData()[FQ]
      }
      setOverlay(QQ, WQ, XQ, wQ) {
        let qQ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const TQ = this.chunkAt(QQ, WQ, XQ);
        return !!TQ && (TQ.hasWrites() || this.written.push(TQ), TQ.write(zW(QQ, WQ, XQ), wQ, qQ), !0)
      }
      version(QQ, WQ, XQ) {
        var wQ, qQ;
        return null !== (wQ = null === (qQ = this.chunks.get((0, NQ.e)(QQ, WQ, XQ))) || void 0 === qQ ? void 0 : qQ.Sj) && void 0 !== wQ ? wQ : null
      }
      scan(QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ) {
        const FQ = jQ.H;
        let PQ = 0;
        for (let gQ = Math.floor(WQ / FQ); gQ * FQ < qQ; gQ++) {
          const JQ = gQ * FQ,
            rQ = Math.min(qQ - JQ, FQ);
          for (let qQ = Math.floor(QQ / FQ); qQ * FQ < wQ; qQ++) {
            const IQ = qQ * FQ,
              jQ = Math.min(wQ - IQ, FQ);
            for (let wQ = Math.floor(XQ / FQ); wQ * FQ < TQ; wQ++) {
              const BQ = this.chunks.get((0, NQ.e)(qQ, gQ, wQ));
              if (!BQ) continue;
              const yQ = wQ * FQ,
                VQ = Math.max(XQ - yQ, 0),
                DQ = Math.min(TQ - yQ, FQ),
                pQ = BQ.UI,
                GQ = BQ.gameVoxels();
              for (let XQ = Math.max(WQ - JQ, 0); XQ < rQ; XQ++) {
                const WQ = pQ[XQ];
                if (65535 === WQ || 0 !== zQ[WQ]) {
                  PQ++;
                  for (let WQ = Math.max(QQ - IQ, 0); WQ < jQ; WQ++) {
                    const QQ = QW(WQ, XQ, 0);
                    for (let wQ = VQ; wQ < DQ; wQ++) {
                      const qQ = GQ[QQ + wQ];
                      0 !== zQ[qQ] && sQ.push(IQ + WQ, JQ + XQ, yQ + wQ, qQ)
                    }
                  }
                }
              }
            }
          }
        }
        return PQ
      }
      dataCleared(QQ, WQ, XQ) {
        var wQ;
        const qQ = Math.floor(QQ),
          TQ = Math.floor(WQ),
          zQ = Math.floor(XQ);
        return !0 === (null === (wQ = this.chunkAt(qQ, TQ, zQ)) || void 0 === wQ ? void 0 : wQ.dataCleared(zW(qQ, TQ, zQ)))
      }
      isWalkThrough(QQ) {
        if (!Number.isInteger(QQ) || QQ < 0 || QQ > 65535) return !1;
        const WQ = this.walkWords(),
          XQ = QQ >>> 5;
        return XQ < WQ.length && 1 === (WQ[XQ] >>> (31 & QQ) & 1)
      }
      walkWords() {
        const QQ = this.memory().buffer;
        var WQ;
        QQ !== this.walkBuffer && (this.walkBuffer = QQ, this.walk = null !== (WQ = (0, IQ.n)(Uint32Array, QQ, this.walkPtr, this.walkLen, "the walk-through bits")) && void 0 !== WQ ? WQ : TW);
        return this.walk
      }
      chunkAt(QQ, WQ, XQ) {
        if ((0 | QQ) !== QQ || (0 | WQ) !== WQ || (0 | XQ) !== XQ) return;
        const wQ = (0, NQ.e)(QQ >> OQ, WQ >> OQ, XQ >> OQ);
        return wQ !== this.lastKey && (this.lastKey = wQ, this.lastChunk = this.chunks.get(wQ)), this.lastChunk
      }
    }
    var FW = XQ(38792),
      PW = XQ(38084),
      gW = XQ(37091),
      JW = XQ(36920),
      rW = XQ(34469),
      IW = XQ(39391),
      jW = XQ(231);
    const BW = ["ambient", "cars", "crowd", "customGame_horror", "dig", "fire", "fishing", "gameStart", "gunMisc", "gunPistol", "gunRifle", "gunSemiAutomatic", "gunShotgun", "gunSubmachineGun", "mobBear", "mobCat", "mobCow", "mobCrone", "mobDeer", "mobDog", "mobFennec", "mobGolem", "mobGorilla", "mobHorse", "mobKnight", "mobPig", "mobReaver", "mobSheep", "mobSkeleton", "mobStag", "mobStalker", "mobWarper", "mobWraith", "mobZombie", "note", "phoneAndMoney", "police", "randomBeep", "randomCannon", "randomCash", "randomExp", "randomFallsmall", "randomFire", "randomFirecracker", "randomItems", "randomLaugh", "randomMagic", "randomSplash", "rpg", "step", "survivalFactory", "town"],
      yW = [
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
      VW = yW.map((QQ => {
        let [WQ] = QQ;
        return WQ
      })),
      DW = Uint8Array.from(yW, (QQ => {
        let [, WQ] = QQ;
        return WQ
      })),
      pW = {
        semi_automatic: 11,
        submachine: 13,
        rifle: 10,
        pistol: 9,
        shotgun: 12
      },
      GW = 8;
    var UW = XQ(37052),
      bW = XQ(37074),
      vW = XQ(37067),
      dW = XQ(291);
    class HW {
      constructor(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : dW.e;
        this.sheet = QQ, this.onError = WQ, this.idle = XQ, this.queue = [], this.asked = new Set, this.cancelIdle = null, this.gen = 0, this.onIdle = QQ => {
          this.cancelIdle = null;
          try {
            if (QQ.timeRemaining() >= 1) {
              let QQ = this.queue.shift();
              for (; void 0 !== QQ && !this.load(QQ);) QQ = this.queue.shift()
            }
          } catch (WQ) {
            this.onError(WQ)
          } finally {
            this.schedule()
          }
        }
      }
      preload(QQ) {
        const WQ = [...QQ].sort(((QQ, WQ) => QQ - WQ));
        for (const XQ of WQ) this.asked.has(XQ) || (this.asked.add(XQ), this.queue.push(XQ));
        this.schedule()
      }
      cancel() {
        var QQ;
        this.queue.length = 0, this.asked.clear(), this.gen++, null === (QQ = this.cancelIdle) || void 0 === QQ || QQ.call(this), this.cancelIdle = null
      }
      schedule() {
        null === this.cancelIdle && this.queue.length > 0 && (this.cancelIdle = this.idle(this.onIdle))
      }
      load(QQ) {
        const WQ = this.sheet(QQ, !1),
          XQ = this.sheet(QQ, !0),
          [wQ, qQ] = "unloaded" === WQ.state() && "unloaded" !== XQ.state() ? [XQ, WQ] : [WQ, XQ],
          TQ = this.gen,
          zQ = () => {
            try {
              TQ === this.gen && "unloaded" === qQ.state() && qQ.load()
            } catch (QQ) {
              this.onError(QQ)
            }
          },
          sQ = wQ.state();
        return "unloaded" === sQ ? (wQ.once("load", zQ), wQ.load(), !0) : "unloaded" === qQ.state() && ("loading" === sQ ? (wQ.once("load", zQ), !1) : (qQ.load(), !0))
      }
    }
    var aW = XQ(41106);
    const lW = {
        coneInnerAngle: 360,
        coneOuterAngle: 360,
        coneOuterGain: 0,
        distanceModel: "inverse",
        maxDistance: 1e3,
        panningModel: "HRTF",
        rolloffFactor: 1
      },
      hW = jW.h.xy * jW.h.playerEyeToHeightRatio,
      iW = [0, 0, -1, 0, 1, 0],
      cW = BW.indexOf("note");

    function AW(QQ) {
      return QQ >= 0 ? Math.min(1, QQ) : 0
    }

    function RW(QQ) {
      var WQ;
      let XQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.random;
      const wQ = function(QQ) {
        let WQ = 0,
          XQ = VW.length;
        for (; WQ < XQ;) {
          const wQ = WQ + XQ >>> 1;
          VW[wQ] < QQ ? WQ = wQ + 1 : XQ = wQ
        }
        return WQ
      }(QQ);
      if ("" === QQ || null === (WQ = VW[wQ]) || void 0 === WQ || !WQ.startsWith(QQ)) return -1;
      if (VW[wQ] === QQ) return wQ;
      let qQ = wQ + 1;
      for (; qQ < VW.length && VW[qQ].startsWith(QQ);) qQ++;
      return wQ + Math.floor(XQ() * (qQ - wQ))
    }
    class EW {
      constructor(QQ, WQ, XQ, wQ, qQ) {
        this.group = QQ, this.loudness = WQ, this.startMs = XQ, this.howl = wQ, this.host = qQ, this.id = 0, this.direct = !1
      }
      getDurationMs() {
        const QQ = this.host.alive(this.id);
        return QQ ? 1e3 * this.howl.duration(this.id) / QQ.rate : 0
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
    class CW {
      constructor(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now(),
          wQ = arguments.length > 3 ? arguments[3] : void 0;
        this.createHowl = QQ, this.listener = WQ, this.now = XQ, this.errors = 0, this.sheets = new Map, this.unloading = new Uint16Array(BW.length), this.live = new Map, this.core = new Map, this.level = 1, this.master = 1, this.pose = new Float64Array(9), this.nextPose = new Float64Array(9), this.posed = !1, this.loader = void 0, this.voices = new vW.b, this.failed = new Set, this.started = new Set, this.voiceHost = {
          alive: QQ => this.aliveVoice(QQ),
          started: QQ => this.started.has(QQ),
          drop: QQ => {
            var WQ;
            null === (WQ = this.live.get(QQ)) || void 0 === WQ || WQ.howl.stop(QQ), this.forget(QQ)
          }
        }, this.handlers = {
          playSound: (QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ, FQ) => {
            if (wQ >= VW.length) return;
            const PQ = 0 !== (qQ & jQ.pe.Loop);
            qQ & jQ.pe.TwoD ? this.start(wQ, !1, zQ, TQ, sQ, PQ) : this.startSpatial(wQ, zQ, TQ, sQ, PQ, QQ, WQ, XQ, FQ, this.earDistSq(QQ, WQ, XQ))
          },
          soundPos: (QQ, WQ, XQ, wQ) => {
            const qQ = this.core.get(wQ);
            var TQ;
            void 0 !== qQ && (null === (TQ = this.live.get(qQ)) || void 0 === TQ || TQ.howl.pos(XQ, WQ, QQ, qQ))
          },
          soundSet: (QQ, WQ, XQ, wQ) => {
            const qQ = this.core.get(QQ),
              TQ = void 0 === qQ ? void 0 : this.live.get(qQ);
            void 0 !== qQ && TQ && (this.setRel(qQ, WQ), TQ.rate = XQ, TQ.howl.rate(XQ, qQ), TQ.spatial && TQ.howl.pannerAttr({
              refDistance: wQ
            }, qQ))
          },
          soundFade: (QQ, WQ, XQ, wQ) => {
            const qQ = this.core.get(QQ);
            void 0 !== qQ && this.fade(qQ, WQ, XQ, 0 !== (wQ & jQ.me.StopAfter))
          },
          soundStop: QQ => {
            const WQ = this.core.get(QQ);
            var XQ;
            void 0 !== WQ && (null === (XQ = this.live.get(WQ)) || void 0 === XQ || XQ.howl.stop(WQ), this.forget(WQ))
          },
          soundReset: () => {
            this.stopCore()
          }
        }, this.loader = new HW(((QQ, WQ) => this.sheet(QQ, WQ)), (QQ => {
          this.errors++, console.error("Audio preload failed", QQ)
        }), wQ)
      }
      prepare() {
        for (let QQ = 0; QQ < BW.length; QQ++) this.prepareSheet(QQ)
      }
      prepareSheet(QQ) {
        this.sheet(QQ, !1), this.sheet(QQ, !0)
      }
      preload(QQ) {
        this.loader.preload(QQ)
      }
      cancelPreload() {
        this.loader.cancel()
      }
      freeSheetsAfterGame() {
        for (let QQ = 0; QQ < BW.length; QQ++) {
          if (bW.b.has(BW[QQ])) continue;
          const WQ = [];
          for (const wQ of [!1, !0]) {
            const XQ = uW(QQ, wQ),
              qQ = this.sheets.get(XQ);
            void 0 !== qQ && "loading" !== qQ.state() && WQ.push({
              key: XQ,
              howl: qQ
            })
          }
          if (!WQ.some((QQ => {
              let {
                howl: WQ
              } = QQ;
              return "loaded" === WQ.state()
            }))) continue;
          this.unloading[QQ] += WQ.length;
          const XQ = () => {
            this.unloading[QQ]--, 0 === this.unloading[QQ] && this.prepareSheet(QQ)
          };
          for (const {
              key: QQ,
              howl: wQ
            }
            of WQ) this.sheets.delete(QQ), "loaded" === wQ.state() ? (0, UW.e)(wQ, XQ) : (wQ.unload(), XQ())
        }
      }
      onAudioEvent(QQ, WQ, XQ, wQ) {
        if (QQ < jQ.u.PlaySound || QQ > jQ.u.SoundReset) return !1;
        try {
          return (0, jQ.we)(QQ, WQ, XQ, wQ, this.handlers)
        } catch (qQ) {
          return this.errors++, console.error("Audio event failed", qQ), !0
        }
      }
      applyListener(QQ) {
        const WQ = this.nextPose;
        for (let wQ = 0; wQ < 3; wQ++) WQ[2 - wQ] = jQ.A.listener(QQ, 0, wQ), WQ[5 - wQ] = jQ.A.forward(QQ, 0, wQ), WQ[8 - wQ] = jQ.A.up(QQ, 0, wQ);
        0 === WQ[3] && 0 === WQ[4] && 0 === WQ[5] && WQ.set(this.posed ? this.pose.subarray(3) : iW, 3);
        for (let wQ = 0; wQ < 9; wQ++)
          if (!Number.isFinite(WQ[wQ])) return;
        const XQ = this.pose;
        if (this.posed) {
          let QQ = !0;
          for (let wQ = 0; wQ < 9 && QQ; wQ++) QQ = WQ[wQ] === XQ[wQ];
          if (QQ) return
        }
        this.listener.apply(WQ) && (XQ.set(WQ), this.posed = !0)
      }
      playGame(QQ, WQ, XQ, wQ, qQ, TQ, zQ) {
        const sQ = RW(QQ);
        if (sQ < 0) return aW.e;
        if (!XQ) {
          const {
            howl: QQ,
            id: XQ
          } = this.start(sQ, !1, WQ, 0, 1, zQ);
          return this.gameSound(QQ, XQ, !1)
        }
        const FQ = XQ[0],
          PQ = XQ[1] + hW,
          gQ = XQ[2];
        if (!Number.isFinite(FQ) || !Number.isFinite(PQ) || !Number.isFinite(gQ)) return aW.e;
        let JQ;
        if (wQ) {
          const QQ = FQ - wQ[0],
            WQ = PQ - wQ[1],
            XQ = gQ - wQ[2];
          if (JQ = QQ * QQ + WQ * WQ + XQ * XQ, JQ > qQ * qQ) return aW.e
        } else JQ = this.earDistSq(FQ, PQ, gQ);
        const rQ = this.startSpatial(sQ, WQ, 0, 1, zQ, FQ, PQ, gQ, TQ, JQ);
        return rQ ? this.gameSound(rQ.howl, rQ.id, !0) : aW.e
      }
      setMaster(QQ, WQ) {
        this.level = AW(QQ);
        const XQ = WQ ? this.level : 0;
        if (XQ !== this.master) {
          this.master = XQ;
          for (const [QQ, WQ] of this.live) WQ.fadeMs = 0, WQ.gain = WQ.rel * this.master, WQ.howl.volume(WQ.gain, QQ)
        }
      }
      stopCore() {
        for (const WQ of [...this.core.values()]) {
          var QQ;
          null === (QQ = this.live.get(WQ)) || void 0 === QQ || QQ.howl.stop(WQ)
        }
        this.core.clear()
      }
      stopAll() {
        this.cancelPreload();
        for (const [QQ, WQ] of [...this.live]) WQ.howl.stop(QQ), this.forget(QQ);
        this.core.clear()
      }
      gameSound(QQ, WQ, XQ) {
        const wQ = {
          stop: () => (this.live.has(WQ) && QQ.stop(WQ), wQ),
          fade: (QQ, XQ, qQ) => {
            var TQ, zQ;
            const sQ = this.level > 0 ? XQ / this.level : XQ > 0 && null !== (TQ = null === (zQ = this.live.get(WQ)) || void 0 === zQ ? void 0 : zQ.rel) && void 0 !== TQ ? TQ : 0;
            return this.fade(WQ, sQ, qQ, !1), wQ
          },
          rate: XQ => {
            const qQ = this.live.get(WQ);
            return qQ && (qQ.rate = function(QQ) {
              return QQ > 0 && QQ < 1 / 0 ? QQ : 1
            }(XQ), QQ.rate(qQ.rate, WQ)), wQ
          },
          getVolume: () => {
            var QQ, XQ;
            return (null !== (QQ = null === (XQ = this.live.get(WQ)) || void 0 === XQ ? void 0 : XQ.rel) && void 0 !== QQ ? QQ : 0) * this.level
          },
          getRelativeVolume: () => {
            var QQ, XQ;
            return null !== (QQ = null === (XQ = this.live.get(WQ)) || void 0 === XQ ? void 0 : XQ.rel) && void 0 !== QQ ? QQ : 0
          },
          setRelativeVolume: QQ => (this.setRel(WQ, QQ), wQ),
          setPannerAttr: qQ => {
            if (XQ && this.live.has(WQ)) {
              const XQ = {
                ...lW,
                refDistance: gW.h
              };
              for (const [QQ, WQ] of Object.entries(qQ)) "number" !== typeof WQ && "string" !== typeof WQ || (XQ[QQ] = WQ);
              QQ.pannerAttr({
                coneOuterAngle: XQ.coneOuterAngle
              }, WQ), QQ.pannerAttr(XQ, WQ)
            }
            return wQ
          },
          setPosition: qQ => (XQ && this.live.has(WQ) && Number.isFinite(qQ[0] + qQ[1] + qQ[2]) && QQ.pos(qQ[2], qQ[1], qQ[0], WQ), wQ)
        };
        return wQ
      }
      startSpatial(QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ, FQ, PQ) {
        const gQ = this.sheet(DW[QQ], !0);
        let JQ = null;
        if (!qQ) {
          if (this.failed.has(gQ)) return null;
          const XQ = DW[QQ] === cW ? null : (0, vW.f)(VW[QQ]),
            wQ = (0, vW.e)(AW(WQ), Math.sqrt(PQ), FQ);
          if (JQ = new EW(XQ, wQ, this.now(), gQ, this.voiceHost), !this.voices.admit(JQ)) return null
        }
        const rQ = this.start(QQ, !0, WQ, XQ, wQ, qQ);
        return JQ && (JQ.id = rQ.id, JQ.direct = "loaded" === gQ.state() && !gQ._playLock), gQ.pannerAttr({
          coneOuterAngle: 360
        }, rQ.id), gQ.pannerAttr({
          ...lW,
          refDistance: FQ
        }, rQ.id), gQ.pos(sQ, zQ, TQ, rQ.id), rQ
      }
      aliveVoice(QQ) {
        const WQ = this.live.get(QQ);
        if (!WQ) return;
        const XQ = WQ.howl._soundById(QQ);
        if (XQ && !XQ._ended) return WQ;
        this.forget(QQ)
      }
      earDistSq(QQ, WQ, XQ) {
        if (!this.posed) return 0;
        const wQ = QQ - this.pose[2],
          qQ = WQ - this.pose[1],
          TQ = XQ - this.pose[0];
        return wQ * wQ + qQ * qQ + TQ * TQ
      }
      start(QQ, WQ, XQ, wQ, qQ, TQ) {
        const zQ = AW(XQ),
          sQ = this.sheet(DW[QQ], WQ);
        "unloaded" === sQ.state() && sQ.load();
        const FQ = sQ.play(VW[QQ]),
          PQ = zQ * this.master;
        return sQ.volume(PQ, FQ), this.live.set(FQ, {
          howl: sQ,
          rel: zQ,
          gain: PQ,
          fadeFrom: PQ,
          fadeAt: 0,
          fadeMs: 0,
          rate: qQ,
          handle: wQ,
          spatial: WQ,
          stopTimer: void 0
        }), 0 !== wQ && this.core.set(wQ, FQ), 1 !== qQ && sQ.rate(qQ, FQ), TQ && sQ.loop(!0, FQ), {
          howl: sQ,
          id: FQ
        }
      }
      sheet(QQ, WQ) {
        const XQ = uW(QQ, WQ);
        let wQ = this.sheets.get(XQ);
        if (!wQ) {
          const qQ = this.createHowl(BW[QQ], WQ);
          qQ.on("end", (QQ => {
            qQ.loop(QQ) || this.forget(QQ)
          })), qQ.on("stop", (QQ => {
            this.forget(QQ)
          })), qQ.on("play", (QQ => {
            this.live.has(QQ) && this.started.add(QQ)
          })), qQ.on("loaderror", (QQ => {
            if ("loaded" !== qQ.state()) {
              this.failed.add(qQ);
              for (const [QQ, WQ] of this.live) WQ.howl === qQ && this.forget(QQ)
            } else "number" === typeof QQ && this.forget(QQ)
          })), this.sheets.set(XQ, qQ), wQ = qQ
        }
        return wQ
      }
      setRel(QQ, WQ) {
        const XQ = this.live.get(QQ);
        XQ && (LW(XQ), XQ.fadeMs = 0, XQ.rel = AW(WQ), XQ.gain = XQ.rel * this.master, XQ.howl.volume(XQ.gain, QQ))
      }
      fade(QQ, WQ, XQ, wQ) {
        const qQ = this.live.get(QQ);
        if (!qQ) return;
        LW(qQ);
        const {
          howl: TQ
        } = qQ, zQ = this.gainNow(qQ);
        qQ.rel = AW(WQ), qQ.gain = qQ.rel * this.master;
        const sQ = XQ > 0 ? Math.min(XQ, 65535) : 0,
          FQ = 0 === sQ || zQ === qQ.gain;
        qQ.fadeMs = FQ ? 0 : sQ, FQ ? TQ.volume(qQ.gain, QQ) : (qQ.fadeFrom = zQ, qQ.fadeAt = this.now(), TQ.fade(zQ, qQ.gain, sQ, QQ)), wQ && (FQ ? TQ.stop(QQ) : qQ.stopTimer = setTimeout((() => {
          qQ.stopTimer = void 0, TQ.stop(QQ)
        }), sQ))
      }
      gainNow(QQ) {
        if (QQ.fadeMs > 0) {
          const WQ = (this.now() - QQ.fadeAt) / QQ.fadeMs;
          if (WQ < 1) return QQ.fadeFrom + (QQ.gain - QQ.fadeFrom) * Math.max(0, WQ);
          QQ.fadeMs = 0
        }
        return QQ.gain
      }
      forget(QQ) {
        this.started.delete(QQ);
        const WQ = this.live.get(QQ);
        WQ && (LW(WQ), this.live.delete(QQ), 0 !== WQ.handle && this.core.get(WQ.handle) === QQ && this.core.delete(WQ.handle))
      }
    }

    function uW(QQ, WQ) {
      return 2 * QQ + (WQ ? 1 : 0)
    }

    function LW(QQ) {
      void 0 !== QQ.stopTimer && (clearTimeout(QQ.stopTimer), QQ.stopTimer = void 0)
    }
    var kW = XQ(40839),
      fW = XQ(39400);
    class SW {
      constructor(QQ, WQ, XQ, wQ) {
        this.key = QQ, this.model = WQ, this.host = wQ, this.yJ = void 0, this.records = void 0, this.origin = [0, 0, 0], this.count = 0, this.nqQ = Number.NaN, this.sentOrigin = [Number.NaN, Number.NaN, Number.NaN], this.dirtyList = [], this.isDirty = void 0, this.tail = void 0, this.tailView = void 0, this.tailCut = new Uint8Array(0), this.made = !1, this.zj = !1, this.yJ = Math.max(1, Math.ceil(XQ)), this.records = new Float32Array(this.yJ * FW.b), this.isDirty = new Uint8Array(this.yJ), this.tail = new Uint8Array(this.yJ * jQ.Oc.Bytes), this.tailView = new DataView(this.tail.buffer), this.make(wQ.cmd())
      }
      setOrigin(QQ, WQ, XQ) {
        this.origin[0] = QQ, this.origin[1] = WQ, this.origin[2] = XQ
      }
      markDirty(QQ) {
        !this.zj && QQ >= 0 && QQ < this.yJ && QQ < jQ.Oc.Max && this.ij(QQ, QQ + 1)
      }
      commit(QQ) {
        if (this.zj) return;
        (QQ = Math.min(Math.max(Math.floor(QQ), 0), this.yJ, jQ.Oc.Max)) > this.count && this.ij(this.count, QQ), this.count = QQ;
        const {
          origin: WQ,
          sentOrigin: XQ,
          dirtyList: wQ
        } = this, qQ = this.nqQ !== QQ, TQ = XQ[0] !== WQ[0] || XQ[1] !== WQ[1] || XQ[2] !== WQ[2];
        if (0 === wQ.length && !qQ && !TQ) return;
        const zQ = this.host.cmd();
        if (!zQ || !this.make(zQ)) return;
        const sQ = wQ.length,
          {
            records: FQ,
            tailView: PQ
          } = this;
        for (let gQ = 0; gQ < sQ; gQ++) {
          const QQ = wQ[gQ],
            WQ = QQ * FW.b,
            XQ = gQ * jQ.Oc.Bytes,
            qQ = 0 !== FQ[WQ + FW.c] ? jQ.Oc.Hidden : 0;
          PQ.setUint32(XQ, (QQ | qQ) >>> 0, !0), PQ.setFloat32(XQ + 4, FQ[WQ], !0), PQ.setFloat32(XQ + 8, FQ[WQ + 1], !0), PQ.setFloat32(XQ + 12, FQ[WQ + 2], !0)
        }
        if ((0, jQ.Te)(zQ, 0, this.key, QQ, WQ, sQ, this.tailOf(sQ))) {
          for (let QQ = 0; QQ < sQ; QQ++) this.isDirty[wQ[QQ]] = 0;
          wQ.length = 0, this.nqQ = QQ, XQ[0] = WQ[0], XQ[1] = WQ[1], XQ[2] = WQ[2]
        }
      }
      grow(QQ) {
        (QQ = Math.ceil(QQ)) <= this.yJ || this.zj || (this.records = (0, fW.d)(this.records, new Float32Array(QQ * FW.b)), this.isDirty = (0, fW.d)(this.isDirty, new Uint8Array(QQ)), this.tail = new Uint8Array(QQ * jQ.Oc.Bytes), this.tailView = new DataView(this.tail.buffer), this.yJ = QQ)
      }
      dispose() {
        this.zj || (this.zj = !0, this.host.zj(this, this.made ? this.key : null))
      }
      make(QQ) {
        if (!this.made && QQ) {
          const {
            item: WQ,
            scale: XQ,
            yaw: wQ
          } = this.model;
          this.made = (0, jQ.Xe)(QQ, 0, this.key, WQ, XQ, wQ)
        }
        return this.made
      }
      tailOf(QQ) {
        const WQ = QQ * jQ.Oc.Bytes;
        return this.tailCut.buffer === this.tail.buffer && this.tailCut.length === WQ || (this.tailCut = this.tail.subarray(0, WQ)), this.tailCut
      }
      ij(QQ, WQ) {
        const {
          dirtyList: XQ,
          isDirty: wQ
        } = this;
        for (let qQ = QQ; qQ < WQ; qQ++) 0 === wQ[qQ] && (wQ[qQ] = 1, XQ.push(qQ))
      }
    }
    var tW = XQ(658);
    class oW {
      constructor(QQ) {
        this.keys = 0, this.live = new Set, this.owing = new Set, this.host = void 0, this.host = {
          cmd: QQ,
          owes: QQ => {
            this.owing.add(QQ)
          },
          settled: (QQ, WQ) => {
            this.owing.delete(QQ), WQ && this.live.delete(QQ)
          }
        }
      }
      create(QQ, WQ) {
        if (XQ = QQ, !tW.j.includes(XQ)) return null;
        var XQ;
        const wQ = new eW(++this.keys, gQ.i.indexOf(QQ), WQ, this.host);
        return this.live.add(wQ), wQ
      }
      disposeAll() {
        for (const QQ of [...this.live]) QQ.dispose()
      }
      flush() {
        if (0 === this.owing.size) return;
        const QQ = this.host.cmd();
        for (const WQ of this.owing)
          if (!WQ.sync(QQ)) return
      }
    }
    class eW {
      constructor(QQ, WQ, XQ, wQ) {
        this.key = QQ, this.lifeform = WQ, this.scale = XQ, this.host = wQ, this.feet = [0, 0, 0], this.yaw = 0, this.visible = !1, this.owed = 1, this.zj = !1, this.sync()
      }
      setPose(QQ, WQ) {
        this.zj || (this.feet[0] = QQ[0], this.feet[1] = QQ[1], this.feet[2] = QQ[2], this.yaw = WQ, this.owed |= 2, this.sync())
      }
      setVisible(QQ) {
        this.zj || QQ === this.visible || (this.visible = QQ, this.owed |= 4, this.sync())
      }
      dispose() {
        this.zj || (this.zj = !0, this.owed = 1 & this.owed ? 0 : 8, this.sync())
      }
      sync() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.host.cmd();
        return this.write(QQ) ? (this.host.settled(this, this.zj), !0) : (this.host.owes(this), !1)
      }
      write(QQ) {
        if (!QQ) return this.owed = 0, !0;
        if (1 & this.owed) {
          if (!(0, jQ.ef)(QQ, 0, this.key, this.lifeform, this.scale)) return !1;
          this.owed &= -2
        }
        const WQ = (2 & this.owed ? jQ.rd.Pose : 0) | (4 & this.owed ? jQ.rd.Visible : 0);
        if (0 !== WQ) {
          if (!(0, jQ.cf)(QQ, 0, this.key, WQ, this.visible ? 1 : 0, this.feet, this.yaw)) return !1;
          this.owed &= -7
        }
        if (8 & this.owed) {
          if (!(0, jQ.$e)(QQ, 0, this.key)) return !1;
          this.owed = 0
        }
        return !0
      }
    }
    var nW = XQ(41204);

    function xW(QQ, WQ, XQ, wQ) {
      return (0, nW.c)(), (0, jQ.Kf)(QQ, WQ, XQ, wQ)
    }
    var YW = XQ(39409),
      NW = XQ(40835);
    const ZW = [0, 0, 0],
      OW = [0, 0, 0],
      KW = [0, 0, 0],
      mW = [0, 0, 0],
      MW = {
        origin: [0, 0, 0],
        direction: [0, 0, 1]
      },
      QX = [0, 0, 0],
      WX = [0, 0],
      XX = [1, 1, 1],
      wX = 1 / 3;
    const qX = PW.g;

    function TX(QQ) {
      const WQ = PW.d[QQ],
        XQ = WQ && PW.g[WQ.mainMultiblock];
      return XQ && {
        main: XQ,
        x: WQ.compX,
        y: WQ.compY,
        z: WQ.compZ
      }
    }

    function zX(QQ) {
      if (null === QQ || void 0 === QQ) return jQ.xd;
      const WQ = +QQ;
      return Number.isInteger(WQ) && WQ >= -2147483648 && WQ <= 2147483647 && String(WQ) === String(QQ) ? WQ : jQ.xd
    }

    function sX(QQ, WQ, XQ) {
      return (0, jQ.Nf)(QQ, 0, WQ, null !== XQ && void 0 !== XQ ? XQ : Number.NaN)
    }
    class FX {
      constructor(QQ) {
        this.deps = QQ, this.api = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.tables = void 0, this.meshKeys = 0, this.liveMeshes = new Set, this.poolKeys = 0, this.livePools = new Set, this.cameraTurn = new YW.e((() => this.tables.getClientOption("forcedCameraDirectionTransitionMs")), (QQ => {
          var WQ, XQ;
          null === (WQ = (XQ = this.deps).setLocalOptions) || void 0 === WQ || WQ.call(XQ, QQ)
        })), this.mobModels = new oW((() => this.deps.cmd())), this.owedFrees = [], this.pendingStyle = void 0, this.pendingFar = void 0, this.farSet = !1, this.routeMesh = 0, this.routeOffset = 0, this.routeLook = "", this.routeSlide = {
          uvOffset: [0, 0]
        }, this.poolHost = {
          cmd: () => this.deps.cmd(),
          zj: (QQ, WQ) => {
            this.livePools.delete(QQ), null !== WQ && (this.owedFrees.push(WQ), this.flushOwed())
          }
        }, this.api = QQ.api, this.live = QQ.live, this.chunks = QQ.chunks, this.items = QQ.items, this.tables = QQ.tables
      }
      isLocal(QQ) {
        return null !== QQ && void 0 !== QQ && +QQ === this.api.localId
      }
      assertLocal(QQ, WQ) {
        if (!this.isLocal(QQ)) throw new Error(`Attempted to ${WQ} for a player that is not the local player`)
      }
      xV(QQ) {
        const WQ = this.api.xV(QQ);
        if (!WQ) throw new Error(`Entity ${QQ} has no replicated position`);
        return WQ
      }
      checkValid(QQ) {
        return !!this.deps.isSessionLive() && (null === QQ || void 0 === QQ || this.api.checkValid(QQ))
      }
      isAlive(QQ) {
        return !1 !== this.api.isAlive(QQ)
      }
      getItemStat(QQ, WQ, XQ) {
        return this.isLocal(QQ) || null !== QQ && "Player" === this.api.getEntityType(QQ) ? this.tables.getItemStat(WQ, XQ) : this.tables.getDefaultItemStat(WQ, XQ)
      }
      getClientOption(QQ, WQ) {
        return this.assertLocal(QQ, "get a client option"), this.tables.getClientOption(WQ)
      }
      openShop(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          XQ = arguments.length > 2 ? arguments[2] : void 0;
        this.assertLocal(QQ, "open shop"), zQ.k.mB("showShopFromServer", {
          toggle: WQ,
          FQ: XQ
        }, !0)
      }
      sendMessage(QQ, WQ, XQ) {
        this.assertLocal(QQ, "send a message");
        const wQ = "string" === typeof WQ ? [{
          str: WQ,
          style: XQ
        }] : WQ;
        zQ.k.mB("chat", {
          content: wQ
        }, !0)
      }
      getEntityType(QQ) {
        return this.api.getEntityType(QQ)
      }
      getEntityName(QQ) {
        const WQ = zX(QQ);
        return WQ === jQ.xd ? void 0 : (0, kW.i)(this.api, WQ)
      }
      hasEffect(QQ, WQ) {
        const XQ = zX(QQ);
        return XQ !== jQ.xd && (0, kW.e)(this.api, XQ, WQ)
      }
      getMetaInfo(QQ) {
        return this.tables.getMetaInfo(QQ)
      }
      getPlayerDbId(QQ) {
        return this.assertLocal(QQ, "get a DB ID"), this.deps.playerDbId()
      }
      getBlockData(QQ, WQ, XQ) {
        if (!this.chunks.dataCleared(QQ, WQ, XQ)) return (0, kW.b)(this.api, QQ, WQ, XQ)
      }
      hA(QQ, WQ, XQ, wQ) {
        this.setBlockId(QQ, WQ, XQ, this.tables.getItemId(wQ))
      }
      setOtherEntitySetting(QQ, WQ, XQ, wQ) {
        if (!this.isLocal(QQ)) throw new Error("Attempted to set an other-entity setting for a player that is not the local player");
        if (!Object.hasOwn(jQ.Jd, XQ)) throw new Error(`Unknown other-entity setting ${XQ}`);
        const qQ = jQ.Jd[XQ],
          TQ = zX(WQ);
        if (TQ === jQ.xd || !this.deps.beforeWrite()) return;
        const zQ = (0, uQ.e)(wQ);
        if (zQ.length > 16384) throw new Error(`The other-entity setting ${XQ}'s value is over 16384 bytes`);
        const sQ = this.api.memoryView(Uint8Array, this.api.scratch(), zQ.length, "set_other_entity_setting's value");
        sQ && (sQ.set(zQ), this.api.queries.setOtherEntitySetting(TQ, qQ, zQ.length))
      }
      getPositionView(QQ) {
        return this.live.position(+QQ)
      }
      readDrawnPosition(QQ, WQ) {
        return this.api.readDrawnPosition(zX(QQ), WQ)
      }
      getDrawnHeading(QQ) {
        const WQ = zX(QQ),
          XQ = (WQ === jQ.xd ? 0 : this.api.queries.directorEntity(WQ)) >= jQ.Db.BYTES ? this.api.memoryData(this.api.scratch(), jQ.Db.BYTES, 8, "getDrawnHeading's DirectorEntity") : null;
        if (!XQ) return null;
        if (1 === jQ.Db.headingIsDrawn(XQ, 0)) return jQ.Db.heading(XQ, 0);
        const wQ = this.api.apiView;
        return this.isLocal(QQ) && 0 === (jQ.x.playerFlags(wQ, 0) & jQ.ae.FreeCam) ? jQ.x.heading(wQ, 0) : null
      }
      getLocalPlayerMovement() {
        const QQ = jQ.x.playerFlags(this.api.apiView, 0);
        return 0 === (QQ & jQ.ae.Replay) && this.api.readDrawnPosition(this.api.localId, KW) ? {
          onGround: 0 !== (QQ & jQ.ae.OnGround),
          jumpHeld: 0 !== (QQ & jQ.ae.JumpHeld)
        } : null
      }
      wXQ(QQ) {
        return this.isLocal(QQ) ? this.items.Ds() : null
      }
      getInventoryItems() {
        return this.items.playerItems()
      }
      getHeldGunInaccuracy() {
        var QQ, WQ;
        return "Gun" === (null === (QQ = this.aliveHeld()) || void 0 === QQ || null === (WQ = QQ.typeObj) || void 0 === WQ ? void 0 : WQ.type) ? this.items.inaccuracy : null
      }
      aliveHeld() {
        return !1 === this.api.isAlive(this.api.localId) ? null : this.items.Ds()
      }
      isCrosshairShown() {
        var QQ, WQ;
        const XQ = (0, JW.e)(wQ.b.get("crosshairGameView"), wQ.b.get("crosshairShownOverride"));
        if (null !== XQ) return XQ;
        const qQ = null === (QQ = this.aliveHeld()) || void 0 === QQ ? void 0 : QQ.typeObj,
          TQ = "Gun" === (null === qQ || void 0 === qQ ? void 0 : qQ.type),
          zQ = TQ || !0 === (null === qQ || void 0 === qQ ? void 0 : qQ.showsAimingUi),
          sQ = 0 === (jQ.x.playerFlags(this.api.apiView, 0) & jQ.ae.ZoomFirstPerson),
          FQ = null !== (WQ = this.tables.getClientOption("gunshotOrigin")) && void 0 !== WQ ? WQ : null;
        return (0, JW.l)({
          gun: TQ,
          aimable: zQ
        }, sQ, (0, rW.c)(), FQ)
      }
      setCrosshairShown(QQ) {
        wQ.b.set({
          crosshairShownOverride: QQ
        })
      }
      getInventoryFreeSlotCount(QQ) {
        return this.isLocal(QQ) ? this.items.freeSlots() : null
      }
      getSelectedInventorySlotI(QQ) {
        return this.isLocal(QQ) ? this.items.selectedSlot : null
      }
      getItemSlot(QQ, WQ) {
        return this.isLocal(QQ) ? this.items.slot(WQ) : null
      }
      swapInventorySlots(QQ, WQ) {
        return this.items.swap(QQ, WQ)
      }
      isPlayerCrouching(QQ) {
        if (this.isLocal(QQ)) return 0 !== (jQ.x.playerFlags(this.api.apiView, 0) & jQ.ae.Crouching);
        const WQ = zX(QQ);
        return WQ !== jQ.xd && 1 === this.api.queries.entityCrouching(WQ)
      }
      getMiningBlock() {
        return this.live.breakingPosition()
      }
      isMining() {
        return 0 !== (jQ.x.playerFlags(this.api.apiView, 0) & jQ.ae.AttemptingBreak)
      }
      getTargetedBlock() {
        return this.live.CQQ()
      }
      getActionRay() {
        const QQ = this.api.apiView;
        for (let WQ = 0; WQ < 3; WQ++) MW.origin[WQ] = jQ.x.MQQ(QQ, 0, WQ), MW.direction[WQ] = jQ.x.actionDir(QQ, 0, WQ);
        return MW
      }
      canModifyBlockAt(QQ, WQ, XQ) {
        return 1 === this.api.queries.canModify(QQ, WQ, XQ)
      }
      isSolidToPlayerBlockId(QQ) {
        return this.tables.isSolidBlockId(QQ) && !this.chunks.isWalkThrough(QQ)
      }
      blockNameToBlockId(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.tables.blockNameToBlockId(QQ, WQ)
      }
      blockIdToBlockName(QQ) {
        return this.tables.nameOfId(QQ)
      }
      vWQ(QQ, WQ, XQ, wQ, qQ) {
        return 1 === this.api.queries.terrainBlocked(wQ, QQ, WQ, XQ, zX(null !== qQ && void 0 !== qQ ? qQ : null))
      }
      getChunkVersion(QQ, WQ, XQ) {
        return this.chunks.version(QQ, WQ, XQ)
      }
      scanBlocks(QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ) {
        return this.chunks.scan(QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ)
      }
      isBlockInLoadedChunk(QQ, WQ, XQ) {
        return this.chunks.isLoaded(QQ, WQ, XQ)
      }
      getBlockId(QQ, WQ, XQ) {
        return this.chunks.ez(QQ, WQ, XQ)
      }
      playSound(QQ, WQ, XQ, wQ, qQ) {
        let TQ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        if (!this.isLocal(QQ)) return null;
        const zQ = this.playSoundFrom(WQ, XQ, qQ, TQ);
        return 1 === wQ ? zQ : zQ.rate(wQ)
      }
      preloadSounds(QQ) {
        var WQ, XQ;
        null === (WQ = (XQ = this.deps).preloadSounds) || void 0 === WQ || WQ.call(XQ, QQ)
      }
      playSoundFrom(QQ, WQ, XQ, wQ) {
        var qQ, TQ;
        const zQ = this.deps.playSound;
        if (!zQ) return aW.e;
        const sQ = null === XQ || void 0 === XQ ? void 0 : XQ.qQ,
          FQ = null !== (qQ = null === XQ || void 0 === XQ ? void 0 : XQ.maxHearDist) && void 0 !== qQ ? qQ : gW.e,
          PQ = null !== (TQ = null === XQ || void 0 === XQ ? void 0 : XQ.refDistance) && void 0 !== TQ ? TQ : gW.h;
        let gQ = null;
        if (Array.isArray(sQ)) ZW[0] = sQ[0], ZW[1] = sQ[1], ZW[2] = sQ[2], gQ = ZW;
        else if (void 0 !== sQ && null !== sQ) {
          const QQ = zX(sQ);
          if (!this.api.isLocal(QQ)) {
            if (!this.api.readPosition(QQ, ZW)) return aW.e;
            gQ = ZW
          }
        }
        return zQ(QQ, WQ, gQ, gQ && this.ear(), FQ, PQ, wQ)
      }
      ear() {
        if (this.api.readPosition(this.api.localId, OW)) OW[1] += hW;
        else {
          const QQ = this.api.apiView;
          if (0 === jQ.x.viewProj(QQ, 0, 3) && 0 === jQ.x.viewProj(QQ, 0, 7) && 0 === jQ.x.viewProj(QQ, 0, 11)) return null;
          for (let WQ = 0; WQ < 3; WQ++) OW[WQ] = jQ.x.eye(QQ, 0, WQ)
        }
        return Number.isFinite(OW[0] + OW[1] + OW[2]) ? OW : null
      }
      setBlockId(QQ, WQ, XQ, wQ) {
        if (!Number.isInteger(wQ) || wQ < 0 || wQ > 65535) throw new Error(`Invalid block id ${wQ}`);
        if (!this.deps.beforeWrite() || !this.chunks.isLoaded(QQ, WQ, XQ)) return;
        const qQ = Math.floor(QQ),
          TQ = Math.floor(WQ),
          zQ = Math.floor(XQ),
          sQ = this.predictedCells(qQ, TQ, zQ, wQ);
        if (1 === this.api.queries.hA(qQ, TQ, zQ, wQ)) {
          for (let QQ = 0; QQ < sQ.length; QQ += 5) this.chunks.setOverlay(sQ[QQ], sQ[QQ + 1], sQ[QQ + 2], sQ[QQ + 3], 1 === sQ[QQ + 4]);
          this.live.refreshTarget()
        }
      }
      particlesEnabled() {
        return this.deps.particles.enabled()
      }
      createParticles(QQ, WQ) {
        return this.deps.particles.create(QQ, WQ)
      }
      playParticleEffect(QQ) {
        this.deps.particles.playEffect(QQ)
      }
      burstParticlePreset(QQ, WQ, XQ) {
        this.deps.particles.burstPreset(QQ, WQ, XQ)
      }
      createGameMesh(QQ, WQ, XQ) {
        const wQ = ++this.meshKeys,
          qQ = this.deps.cmd();
        if (!qQ) return wQ;
        const {
          look: TQ,
          colour: zQ
        } = function(QQ) {
          switch (QQ.kind) {
            case void 0:
            case "flatEmissive":
              return QQ.onTop ? {
                look: jQ.sc.FlatOnTop,
                colour: [...QQ.rgb, QQ.alpha]
              } : QQ.opaque ? {
                look: jQ.sc.FlatOpaque,
                colour: [...QQ.rgb, 1]
              } : {
                look: jQ.sc.Flat,
                colour: [...QQ.rgb, QQ.alpha]
              };
            case "chevronPath":
              return {
                look: jQ.sc.Chevrons, colour: [...(0, IW.c)(QQ.colour), QQ.alpha]
              };
            case "furnaceFire":
              return {
                look: jQ.sc.FurnaceFire, colour: [1, 1, 1, 1]
              }
          }
        }(WQ), sQ = Math.floor(QQ.positions.length / 3), FQ = function(QQ, WQ) {
          const XQ = Math.floor(QQ.positions.length / 3),
            wQ = QQ.indices.length,
            qQ = XQ * (WQ ? 5 : 3),
            TQ = new Uint8Array(4 * (qQ + wQ)),
            zQ = new DataView(TQ.buffer);
          for (let PQ = 0; PQ < 3 * XQ; PQ++) zQ.setFloat32(4 * PQ, QQ.positions[PQ], !0);
          if (WQ) {
            var sQ;
            const WQ = null !== (sQ = QQ.uvs) && void 0 !== sQ ? sQ : [];
            for (let QQ = 0; QQ < 2 * XQ; QQ++) {
              var FQ;
              zQ.setFloat32(4 * (3 * XQ + QQ), null !== (FQ = WQ[QQ]) && void 0 !== FQ ? FQ : 0, !0)
            }
          }
          for (let PQ = 0; PQ < wQ; PQ++) zQ.setUint32(4 * (qQ + PQ), QQ.indices[PQ], !0);
          return TQ
        }(QQ, (0, FW.g)(WQ));
        return (0, jQ.Le)(qQ, 0, wQ, TQ, zQ, XQ, sQ, QQ.indices.length, FQ) && this.liveMeshes.add(wQ), wQ
      }
      setGameMesh(QQ, WQ) {
        var XQ;
        const wQ = this.deps.cmd();
        if (!wQ) return;
        let qQ = 0;
        WQ.anchor && (qQ |= jQ.tc.Anchor, QX[0] = WQ.anchor[0], QX[1] = WQ.anchor[1], QX[2] = WQ.anchor[2]), void 0 !== WQ.visible && (qQ |= jQ.tc.Visible), WQ.uvOffset && (qQ |= jQ.tc.UvOffset, WX[0] = WQ.uvOffset[0], WX[1] = WQ.uvOffset[1]);
        const TQ = null !== (XQ = WQ.visibility) && void 0 !== XQ ? XQ : 1;
        void 0 !== WQ.visibility && (qQ |= jQ.tc.Visibility), WQ.scale && (qQ |= jQ.tc.Scale, XX[0] = WQ.scale[0], XX[1] = WQ.scale[1], XX[2] = WQ.scale[2]), 0 !== qQ && (0, jQ.Re)(wQ, 0, QQ, qQ, WQ.visible ? 1 : 0, QX, WX, TQ, XX)
      }
      disposeGameMesh(QQ) {
        const WQ = this.deps.cmd();
        WQ && !(0, jQ.Ne)(WQ, 0, QQ) || this.liveMeshes.delete(QQ)
      }
      hasPackModel(QQ) {
        var WQ, XQ, wQ;
        return null !== (WQ = null === (XQ = (wQ = this.deps).hasPackModel) || void 0 === XQ ? void 0 : XQ.call(wQ, QQ)) && void 0 !== WQ && WQ
      }
      disposeGameOutput() {
        const QQ = QQ => {
          try {
            QQ()
          } catch (WQ) {
            console.error("Error freeing client game output", WQ)
          }
        };
        for (const WQ of [...this.liveMeshes]) QQ((() => {
          this.disposeGameMesh(WQ)
        }));
        for (const WQ of [...this.livePools]) QQ((() => {
          WQ.dispose()
        }));
        QQ((() => {
          this.mobModels.disposeAll()
        })), QQ((() => {
          this.setGroundArrowStyle(null)
        })), QQ((() => {
          this.setRouteChevrons(null), this.routeOffset = 0, this.routeLook = ""
        })), QQ((() => {
          this.setCrosshairShown(null)
        })), QQ((() => {
          this.cameraTurn.dispose()
        })), QQ((() => {
          this.farSet && (this.farSet = !1, this.setCameraFar(null))
        }))
      }
      createInstancePool(QQ, WQ) {
        const XQ = this.tables.idOf(QQ.item);
        if (void 0 === XQ) return null;
        const wQ = new SW(++this.poolKeys, {
          item: XQ,
          scale: QQ.scale,
          yaw: QQ.yaw
        }, WQ, this.poolHost);
        return this.livePools.add(wQ), wQ
      }
      createMobModel(QQ, WQ) {
        return this.mobModels.create(QQ, WQ)
      }
      setRouteChevrons(QQ) {
        if (0 !== this.routeMesh && (this.disposeGameMesh(this.routeMesh), this.routeMesh = 0), !QQ || 0 === QQ.cells.length) return;
        const WQ = `${QQ.colour} ${QQ.alpha}`;
        WQ !== this.routeLook && (this.routeLook = WQ, this.routeOffset = 0), this.routeMesh = this.createGameMesh(function(QQ) {
          const [WQ, XQ, wQ] = QQ[0].pos, qQ = [], TQ = [], zQ = [];
          return QQ.forEach(((QQ, sQ) => {
            let {
              pos: FQ,
              way: [PQ, gQ]
            } = QQ;
            const JQ = FQ[0] - WQ + .5,
              rQ = FQ[1] - XQ + .04,
              IQ = FQ[2] - wQ + .5,
              [jQ, BQ] = [.35 * -gQ, .35 * PQ],
              [yQ, VQ] = [sQ * wX, (sQ + 1) * wX],
              DQ = qQ.length / 3;
            qQ.push(JQ - .5 * PQ + jQ, rQ, IQ - .5 * gQ + BQ), qQ.push(JQ - .5 * PQ - jQ, rQ, IQ - .5 * gQ - BQ), qQ.push(JQ + .5 * PQ + jQ, rQ, IQ + .5 * gQ + BQ), qQ.push(JQ + .5 * PQ - jQ, rQ, IQ + .5 * gQ - BQ), TQ.push(0, yQ, 1, yQ, 0, VQ, 1, VQ), zQ.push(DQ, DQ + 1, DQ + 2, DQ + 1, DQ + 3, DQ + 2)
          })), {
            positions: qQ,
            uvs: TQ,
            indices: zQ
          }
        }(QQ.cells), {
          kind: "chevronPath",
          colour: QQ.colour,
          alpha: QQ.alpha
        }, QQ.cells[0].pos), this.setRouteSlide()
      }
      slideRoute(QQ) {
        0 !== this.routeMesh && (this.routeOffset = (this.routeOffset + Math.min(QQ, 250) / 1e3 * 1.2 * wX) % 1, this.setRouteSlide())
      }
      setRouteSlide() {
        this.routeSlide.uvOffset[1] = -this.routeOffset, this.setGameMesh(this.routeMesh, this.routeSlide)
      }
      setGroundArrowStyle(QQ) {
        this.pendingStyle = QQ, this.flushOwed()
      }
      flushOwed() {
        this.mobModels.flush();
        const QQ = this.owedFrees;
        if (0 === QQ.length && void 0 === this.pendingStyle && void 0 === this.pendingFar) return;
        const WQ = this.deps.cmd();
        if (!WQ) return QQ.length = 0, void(this.pendingFar = void 0);
        let XQ = 0;
        for (; XQ < QQ.length && (0, jQ.We)(WQ, 0, QQ[XQ]);) XQ++;
        QQ.splice(0, XQ);
        const wQ = this.pendingStyle;
        if (void 0 !== wQ) {
          (wQ ? (0, jQ.Of)(WQ, 0, wQ.width, wQ.alpha, 1, wQ.endAtSolidFace ? 1 : 0) : (0, jQ.Of)(WQ, 0, 0, 0, 0, 0)) && (this.pendingStyle = void 0)
        }
        const qQ = this.pendingFar;
        void 0 !== qQ && (0, jQ.Mf)(WQ, 0, null !== qQ && void 0 !== qQ ? qQ : 0, null === qQ ? 1 : 0) && (this.pendingFar = void 0)
      }
      setNametagOffset(QQ, WQ) {
        const XQ = this.deps.cmd(),
          wQ = zX(QQ);
        XQ && wQ !== jQ.xd && (0, jQ.Yf)(XQ, 0, wQ, WQ)
      }
      setFacingTolerance(QQ, WQ) {
        const XQ = this.deps.cmd(),
          wQ = zX(QQ);
        XQ && wQ !== jQ.xd && sX(XQ, wQ, WQ)
      }
      forEachEntity(QQ) {
        const {
          api: WQ
        } = this;
        for (let XQ = 0; XQ < WQ.idStr.length; XQ++) {
          const wQ = WQ.idStr[XQ];
          null === wQ || UQ(WQ.kinds[XQ]) || QQ(wQ)
        }
      }
      getEntityInfo(QQ) {
        return this.deps.entityInfo.get(QQ)
      }
      isEntityInteractable(QQ) {
        const WQ = zX(QQ);
        return WQ !== jQ.xd && 1 === this.api.queries.entityInteractable(WQ)
      }
      isLocalPlayer(QQ) {
        return this.isLocal(QQ)
      }
      getLineOwner(QQ) {
        var WQ;
        const XQ = null === (WQ = this.deps.entityInfo.get(QQ)) || void 0 === WQ ? void 0 : WQ.meshOpts;
        if (!XQ) return null;
        try {
          const {
            lineToEId: QQ
          } = JSON.parse(XQ);
          return null !== QQ && void 0 !== QQ ? QQ : null
        } catch {
          return null
        }
      }
      getCameraPosition() {
        const QQ = this.api.apiView;
        return mW[0] = jQ.x.eye(QQ, 0, 0), mW[1] = jQ.x.eye(QQ, 0, 1), mW[2] = jQ.x.eye(QQ, 0, 2), mW
      }
      getCameraFar() {
        return jQ.x.cameraFar(this.api.apiView, 0)
      }
      setCameraFar(QQ) {
        null !== QQ && (this.farSet = !0), this.pendingFar = QQ, this.flushOwed()
      }
      turnCamera(QQ, WQ) {
        this.cameraTurn.turn(QQ, WQ)
      }
      clearPickupDelay(QQ) {
        const WQ = this.deps.cmd(),
          XQ = zX(QQ);
        WQ && XQ !== jQ.xd && (0, jQ.Be)(WQ, 0, XQ)
      }
      sendChat(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const XQ = this.deps.sendCmd();
        XQ && xW(XQ, 0, NW.d.Chat, (0, uQ.e)((0, NW.j)({
          cg: QQ,
          Ag: WQ
        })))
      }
      sendCommand(QQ) {
        QQ.length <= 119 && this.sendChat(`/${QQ}`)
      }
      predictedCells(QQ, WQ, XQ, wQ) {
        const qQ = this.chunks,
          TQ = [],
          zQ = (QQ, WQ, XQ, wQ, qQ) => {
            TQ.push(QQ, WQ, XQ, wQ, this.tables.blockRootId(qQ) === this.tables.blockRootId(wQ) ? 0 : 1)
          },
          sQ = qQ.ez(QQ, WQ, XQ),
          FQ = TX(sQ);
        if (FQ) {
          const [wQ, TQ, PQ] = [QQ - FQ.x, WQ - FQ.y, XQ - FQ.z], gQ = qX[qQ.ez(wQ, TQ, PQ)], JQ = null === gQ || void 0 === gQ ? void 0 : gQ.positions.some((QQ => QQ.id === sQ && QQ.x === FQ.x && QQ.y === FQ.y && QQ.z === FQ.z));
          for (const QQ of (JQ && gQ ? gQ : FQ.main).positions) qQ.ez(wQ + QQ.x, TQ + QQ.y, PQ + QQ.z) === QQ.id && zQ(wQ + QQ.x, TQ + QQ.y, PQ + QQ.z, 0, QQ.id)
        }
        const PQ = TX(wQ);
        if (PQ)
          for (const JQ of PQ.main.positions) {
            const [wQ, TQ, sQ] = [QQ + JQ.x - PQ.x, WQ + JQ.y - PQ.y, XQ + JQ.z - PQ.z];
            zQ(wQ, TQ, sQ, JQ.id, qQ.ez(wQ, TQ, sQ))
          } else zQ(QQ, WQ, XQ, wQ, sQ);
        const gQ = this.tables;
        if ((0 !== gQ.attachedTopOf(sQ) || 0 !== gQ.attachedTopOf(wQ)) && qQ.isLoaded(QQ, WQ + 1, XQ)) {
          let FQ = qQ.ez(QQ, WQ + 1, XQ);
          for (let wQ = 0; wQ < TQ.length; wQ += 5) TQ[wQ] === QQ && TQ[wQ + 1] === WQ + 1 && TQ[wQ + 2] === XQ && (FQ = TQ[wQ + 3]);
          const PQ = this.attachedTopWrite(sQ, wQ, FQ);
          void 0 !== PQ && zQ(QQ, WQ + 1, XQ, PQ, FQ)
        }
        return TQ
      }
      attachedTopWrite(QQ, WQ, XQ) {
        const wQ = this.tables,
          qQ = wQ.attachedTopOf(QQ),
          TQ = wQ.attachedTopOf(WQ),
          zQ = 0 !== qQ && 0 !== XQ && wQ.blockRootId(XQ) === wQ.blockRootId(qQ);
        return 0 !== qQ && 0 !== TQ && wQ.blockRootId(QQ) === wQ.blockRootId(WQ) ? zQ && XQ !== TQ ? TQ : void 0 : 0 === TQ || !zQ && 0 !== XQ ? zQ ? 0 : void 0 : TQ
      }
    }
    const PX = jQ.Gc + jQ.Kc * jQ.Tc.BYTES,
      gX = 2147483647,
      JX = new TextDecoder,
      rX = new TextEncoder,
      IX = Object.freeze({
        bg: 0,
        QF: null,
        amountAddedToSlot: 0
      }),
      jX = new Proxy({}, {
        get: () => () => jQ.Gd
      });

    function BX(QQ) {
      return Number.isInteger(QQ) && QQ >= 0 && QQ <= 65535
    }

    function yX(QQ) {
      return Number.isInteger(QQ) && QQ >= 0 && QQ <= 4294967295
    }
    class VX {
      constructor(QQ) {
        this.deps = QQ, this.Sq = [0, 0, 0], this.inaccuracy = 0, this.version = 0, this.notified = 0, this.iconChanged = !1, this.facades = new Array(jQ.Kc), this.ids = new Uint16Array(jQ.Kc), this.amounts = new Uint16Array(jQ.Kc), this.attrRead = new Float64Array(jQ.Kc).fill(-1), this.stale = new Uint16Array(jQ.Kc), this.staleVersion = new Uint32Array(jQ.Kc), this.instances = new Uint32Array(jQ.Kc), this.viewPtr = 0, this.viewVersion = -1, this.len = 0, this.selected = 0, this.slotIconId = 0, this.stopped = !1, this.listeners = new Set
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
      slot(QQ) {
        var WQ;
        return Number.isInteger(QQ) && QQ >= 0 && QQ < this.len && 0 !== this.ids[QQ] && null !== (WQ = this.facades[QQ]) && void 0 !== WQ ? WQ : null
      }
      Ds() {
        return this.slot(this.selected)
      }
      playerItems() {
        const QQ = [];
        for (let WQ = 0; WQ < Math.min(jQ.Pd, this.len); WQ++) QQ.push(this.slot(WQ));
        return QQ
      }
      freeSlots() {
        let QQ = 0;
        for (let WQ = 0; WQ < Math.min(jQ.Pd - jQ.l, this.len); WQ++) 0 === this.ids[WQ] && QQ++;
        return QQ
      }
      amountOf(QQ) {
        let WQ = 0;
        for (let wQ = 0; wQ < Math.min(jQ.Pd, this.len); wQ++) {
          const qQ = this.slot(wQ);
          var XQ;
          if ((null === qQ || void 0 === qQ ? void 0 : qQ.name) === QQ) WQ += null !== (XQ = qQ.amount) && void 0 !== XQ ? XQ : 1
        }
        return WQ
      }
      instance(QQ) {
        var WQ;
        return null !== (WQ = this.instances[QQ]) && void 0 !== WQ ? WQ : 0
      }
      watch(QQ) {
        return this.listeners.add(QQ), () => {
          this.listeners.delete(QQ)
        }
      }
      touch() {
        this.version++
      }
      flush(QQ) {
        if (this.version !== this.notified || this.iconChanged) {
          this.notified = this.version, this.iconChanged = !1;
          for (const XQ of [...this.listeners]) try {
            XQ()
          } catch (WQ) {
            QQ(WQ)
          }
        }
      }
      chestOpened(QQ, WQ, XQ) {
        this.Sq[0] = QQ, this.Sq[1] = WQ, this.Sq[2] = XQ, this.version++
      }
      refresh() {
        const QQ = this.deps.api.apiView,
          WQ = jQ.x.inventoryViewPtr(QQ, 0),
          XQ = jQ.x.inventoryVersion(QQ, 0),
          wQ = jQ.x.selectedSlot(QQ, 0);
        wQ !== this.selected && (this.selected = wQ, this.version++);
        const qQ = jQ.x.slotIcon(QQ, 0);
        if (qQ !== this.slotIconId && (this.slotIconId = qQ, this.iconChanged = !0), WQ === this.viewPtr && XQ === this.viewVersion) return;
        this.viewPtr = WQ, this.viewVersion = XQ;
        const TQ = this.deps.api.memoryData(WQ, PX, 4, "the inventory view"),
          zQ = TQ ? Math.min(TQ.getUint32(0, !0), jQ.Kc) : 0;
        zQ !== this.len && (this.len = zQ, this.version++);
        let sQ = 0;
        for (let FQ = 0; FQ < jQ.Kc; FQ++) {
          const QQ = jQ.Gc + FQ * jQ.Tc.BYTES,
            WQ = null !== TQ && FQ < zQ ? jQ.Tc.item(TQ, QQ) : 0;
          if (0 === WQ || null === TQ) {
            0 !== this.ids[FQ] && (this.ids[FQ] = 0, this.attrRead[FQ] = -1, this.instances[FQ]++, this.version++);
            continue
          }
          const XQ = jQ.Tc.amount(TQ, QQ),
            wQ = jQ.Tc.attrVersion(TQ, QQ);
          WQ === this.ids[FQ] && XQ === this.amounts[FQ] || this.fill(FQ, WQ, XQ), wQ !== this.attrRead[FQ] && (this.stale[sQ] = FQ, this.staleVersion[sQ] = wQ, sQ++)
        }
        sQ > 0 && this.fetchAttributes(sQ)
      }
      fill(QQ, WQ, XQ) {
        const {
          tables: wQ
        } = this.deps, qQ = WQ !== this.ids[QQ];
        let TQ = this.facades[QQ];
        TQ || (TQ = {
          name: "",
          amount: null,
          attributes: {
            customAttributes: {}
          },
          typeObj: null
        }, this.facades[QQ] = TQ), qQ && (TQ.name = wQ.nameOfId(WQ), TQ.typeObj = wQ.itemType(WQ), TQ.attributes = {
          customAttributes: {}
        }, this.attrRead[QQ] = -1, this.instances[QQ]++), TQ.amount = 0 === XQ ? null : XQ, this.ids[QQ] = WQ, this.amounts[QQ] = XQ, this.version++
      }
      fetchAttributes(QQ) {
        const {
          api: WQ,
          onError: XQ
        } = this.deps, wQ = WQ.memoryView(Uint16Array, WQ.scratch(), QQ, "item_attributes_batch's slots");
        if (!wQ) return void this.markRead(QQ);
        wQ.set(this.stale.subarray(0, QQ));
        const qQ = WQ.queries.itemAttributesBatch(QQ),
          TQ = 4294967295 === qQ ? null : WQ.memoryData(WQ.scratch(), qQ, 4, "item_attributes_batch's answer");
        if (!TQ) return void this.markRead(QQ);
        const zQ = new Uint8Array(TQ.buffer, TQ.byteOffset, qQ);
        for (let FQ = 0; FQ + 8 <= qQ;) {
          const QQ = TQ.getUint16(FQ, !0),
            WQ = TQ.getUint32(FQ + 4, !0),
            wQ = zQ.subarray(FQ + 8, FQ + 8 + WQ);
          FQ += 8 + (0, rQ.te)(WQ);
          const qQ = this.facades[QQ];
          if (qQ && 0 !== this.ids[QQ] && 0 !== WQ) {
            try {
              qQ.attributes = JSON.parse(JX.decode(wQ))
            } catch (sQ) {
              XQ(sQ)
            }
            this.version++
          }
        }
        this.markRead(QQ)
      }
      markRead(QQ) {
        for (let WQ = 0; WQ < QQ; WQ++) this.attrRead[this.stale[WQ]] = this.staleVersion[WQ]
      }
      swap(QQ, WQ) {
        return BX(QQ) && BX(WQ) && this.settle(this.queries().invSwap(QQ, WQ))
      }
      move(QQ, WQ, XQ) {
        return BX(QQ) && BX(WQ) && yX(XQ) && this.settle(this.queries().invMove(QQ, WQ, XQ))
      }
      quickMove(QQ, WQ, XQ, wQ) {
        var qQ, TQ;
        if (!BX(QQ) || !BX(WQ) || !BX(XQ) || null !== wQ && !yX(wQ)) return null;
        const zQ = this.queries().invQuickMove(QQ, WQ, XQ, null === wQ ? -1 : Math.min(wQ, gX)),
          sQ = zQ === jQ.Gd ? jQ.Zb : null !== (qQ = null === (TQ = this.extras()) || void 0 === TQ ? void 0 : TQ[1]) && void 0 !== qQ ? qQ : jQ.Zb;
        return this.settle(zQ), sQ === jQ.Zb ? null : sQ
      }
      remove(QQ, WQ, XQ) {
        return BX(QQ) && yX(WQ) && this.settle(this.queries().invRemove(QQ, WQ, XQ ? 1 : 0))
      }
      selectSlot(QQ) {
        return BX(QQ) && this.settle(this.queries().selectSlot(QQ))
      }
      closeChest() {
        return this.settle(this.queries().closeChest())
      }
      enchant(QQ, WQ, XQ) {
        if (!BX(QQ) || !Number.isInteger(WQ)) return !1;
        const [wQ, qQ, TQ] = XQ;
        return this.settle(this.queries().invEnchant(QQ, WQ, Math.floor(wQ), Math.floor(qQ), Math.floor(TQ)))
      }
      craft(QQ, WQ, XQ) {
        let wQ;
        try {
          wQ = this.deps.tables.getItemId(QQ)
        } catch {
          return IX
        }
        if (!BX(WQ) || null !== XQ && (Number.isNaN(XQ) || XQ < 0)) return IX;
        const qQ = null === XQ || XQ > gX ? -1 : Math.floor(XQ),
          TQ = this.queries().craft(wQ, WQ, qQ);
        let zQ = IX;
        const sQ = TQ === jQ.Gd ? null : this.extras();
        if (sQ) {
          const [QQ, WQ, XQ] = sQ;
          zQ = {
            bg: QQ,
            QF: WQ === jQ.Zb ? null : WQ,
            amountAddedToSlot: XQ
          }
        }
        return this.settle(TQ), zQ
      }
      salvage(QQ, WQ, XQ) {
        let wQ;
        try {
          wQ = this.deps.tables.getItemId(WQ)
        } catch {
          return !1
        }
        return BX(QQ) && Number.isInteger(XQ) && this.settle(this.queries().salvage(QQ, wQ, Math.max(Math.min(XQ, gX), -gX)))
      }
      craftingView(QQ, WQ, XQ) {
        var wQ;
        if (this.stopped) return null;
        const {
          api: qQ,
          onError: TQ
        } = this.deps, zQ = QQ ? rX.encode(QQ) : null;
        if (null !== zQ) {
          if (zQ.length > 1024) return TQ(new Error(`The crafting station ${QQ}'s name is over 1024 bytes`)), null;
          const WQ = qQ.memoryView(Uint8Array, qQ.scratch(), zQ.length, "crafting_view's station");
          if (!WQ) return null;
          WQ.set(zQ)
        }
        const sQ = BX(WQ) && BX(XQ),
          FQ = qQ.queries.craftingView(null !== (wQ = null === zQ || void 0 === zQ ? void 0 : zQ.length) && void 0 !== wQ ? wQ : 0, sQ ? WQ : 0, sQ ? XQ : 0);
        return FQ < jQ.ub.BYTES ? (qQ.reportCorruption(`crafting_view's answer of ${FQ} bytes`), null) : qQ.memoryData(qQ.scratch(), FQ, 1, "crafting_view's answer")
      }
      queries() {
        var QQ, WQ;
        return !1 === (null === (QQ = (WQ = this.deps).beforeOp) || void 0 === QQ ? void 0 : QQ.call(WQ)) ? (this.stopped = !0, jX) : this.deps.api.queries
      }
      extras() {
        const {
          api: QQ
        } = this.deps;
        return QQ.memoryView(Uint32Array, QQ.scratch(), 3, "a sync query's extra words")
      }
      settle(QQ) {
        if (QQ === jQ.Fd)(0, nW.c)();
        else if (QQ !== jQ.Gd) {
          const WQ = this.deps.cmd();
          WQ && function(QQ, WQ, XQ) {
            return (0, nW.c)(), (0, jQ.dg)(QQ, WQ, XQ)
          }(WQ, 0, QQ) || this.deps.onError(new Error(`Sync op ${QQ}'s marker didn't fit the command ring: its send goes after the next frame's commands`))
        }
        return this.stopped || this.refresh(), QQ !== jQ.Gd
      }
    }
    const DX = 1 / .6,
      pX = [0, 1, 0],
      GX = [0, 0, 0],
      UX = new Uint8Array(0),
      bX = 1.2 * jW.h.ny,
      vX = new TextEncoder,
      dX = [0, 0, 0],
      HX = [0, 0, 0],
      aX = new Map;

    function lX(QQ) {
      let WQ = aX.get(QQ);
      return WQ || (aX.size >= 64 && aX.clear(), WQ = vX.encode(`{"emitRate":${QQ}}`), aX.set(QQ, WQ)), WQ
    }

    function hX(QQ) {
      return Number.isFinite(QQ) && QQ > 0 ? QQ : 0
    }

    function iX(QQ, WQ) {
      for (let XQ = 0; XQ < 3; XQ++) {
        const wQ = Math.abs(WQ[XQ]);
        dX[XQ] = QQ[XQ] - wQ, HX[XQ] = 2 * wQ
      }
      return Number.isFinite(dX[0] + dX[1] + dX[2] + HX[0] + HX[1] + HX[2])
    }

    function cX(QQ, WQ) {
      return "pos1" === QQ || "pos2" === QQ ? void 0 : WQ
    }

    function AX(QQ, WQ, XQ) {
      return QQ.length > jQ._d.MaxOpts ? (XQ(new Error(`${WQ}'s particle opts are over ${jQ._d.MaxOpts} bytes of JSON`)), null) : QQ
    }
    const RX = {
      moveTo() {},
      setEmitRate() {},
      emit() {},
      emitPoints() {},
      setDirections() {},
      stop() {},
      dispose() {}
    };
    class EX {
      constructor(QQ) {
        this.deps = QQ, this.session = 0, this.nextKey = 1, this.live = 0, this.started = !1
      }
      enabled() {
        return null !== this.sink()
      }
      sink() {
        return this.deps.isSessionLive() ? this.deps.cmd() : null
      }
      create(QQ, WQ) {
        var XQ;
        const wQ = this.sink(),
          qQ = null !== (XQ = WQ.half) && void 0 !== XQ ? XQ : GX;
        if (!wQ || this.live >= jQ._d.MaxLiveKeys || this.nextKey > jQ._d.MaxKey || !iX(WQ.pos, qQ)) return RX;
        const TQ = this.nextKey,
          zQ = AX(function(QQ) {
            var WQ, XQ, wQ;
            const qQ = JSON.stringify({
              texture: "string" === typeof QQ.texture ? QQ.texture : "smokePuff",
              yJ: QQ.yJ,
              minLifeTime: QQ.minLifeTime,
              maxLifeTime: QQ.maxLifeTime,
              minSize: QQ.minSize,
              maxSize: QQ.maxSize,
              minEmitPower: QQ.minEmitPower,
              maxEmitPower: QQ.maxEmitPower,
              emitRate: hX(QQ.emitRate),
              gravity: null !== (WQ = QQ.gravity) && void 0 !== WQ ? WQ : GX,
              dir1: null !== (XQ = QQ.dir1) && void 0 !== XQ ? XQ : pX,
              dir2: null !== (wQ = QQ.dir2) && void 0 !== wQ ? wQ : pX,
              colorGradients: QQ.colorGradients,
              blendMode: QQ.blendMode
            });
            return vX.encode(qQ)
          }(QQ), "createParticles", this.deps.onError);
        return zQ && (0, jQ.mf)(wQ, 0, TQ, 0, jQ._d.PresetNone, 0, dX, HX, zQ) ? (this.nextKey++, this.live++, this.started = !0, new CX(this, this.session, TQ, QQ, qQ)) : RX
      }
      playEffect(QQ) {
        const WQ = this.sink(),
          {
            pos1: XQ,
            pos2: wQ
          } = QQ;
        if (!WQ || !XQ || !wQ) return;
        for (let TQ = 0; TQ < 3; TQ++) dX[TQ] = Math.min(XQ[TQ], wQ[TQ]), HX[TQ] = Math.abs(wQ[TQ] - XQ[TQ]);
        if (!Number.isFinite(dX[0] + dX[1] + dX[2] + HX[0] + HX[1] + HX[2])) return;
        const qQ = AX(vX.encode(JSON.stringify(QQ, cX)), "playParticleEffect", this.deps.onError);
        qQ && (0, jQ.kf)(WQ, 0, 0, jQ._d.PresetNone, jQ._d.HasBox, 0, dX, HX, qQ)
      }
      burstPreset(QQ, WQ, XQ) {
        const wQ = this.sink(),
          qQ = Math.min(Math.floor(XQ), jQ._d.MaxBurst);
        if (!wQ || !Object.hasOwn(jQ.vc, QQ) || !(qQ > 0)) return;
        const TQ = bX;
        for (let zQ = 0; zQ < 3; zQ++) dX[zQ] = WQ[zQ] - TQ / 2, HX[zQ] = TQ;
        Number.isFinite(dX[0] + dX[1] + dX[2]) && (0, jQ.kf)(wQ, 0, 0, jQ.vc[QQ], jQ._d.HasBox, qQ, dX, HX, UX)
      }
      sessionEnded() {
        this.session++;
        const QQ = this.started ? this.deps.cmd() : null;
        return this.started = !1, this.nextKey = 1, this.live = 0, !QQ || (0, jQ.nf)(QQ, 0)
      }
      sinkFor(QQ) {
        return QQ === this.session ? this.deps.cmd() : null
      }
      stop(QQ, WQ) {
        const XQ = this.sinkFor(QQ);
        XQ && (0, jQ.of)(XQ, 0, WQ) && this.live--
      }
    }
    class CX {
      constructor(QQ, WQ, XQ, wQ, qQ) {
        this.owner = QQ, this.session = WQ, this.key = XQ, this.half = void 0, this.rate = void 0, this.stopDelayMs = void 0, this.emitted = void 0, this.stopped = !1, this.freed = !1, this.half = [Math.abs(qQ[0]), Math.abs(qQ[1]), Math.abs(qQ[2])], this.rate = hX(wQ.emitRate), this.emitted = this.rate > 0;
        const TQ = wQ.maxLifeTime * DX * 1e3 + 250;
        this.stopDelayMs = TQ >= 0 ? Math.min(TQ, 2147483647) : 250
      }
      sink() {
        return this.stopped ? null : this.owner.sinkFor(this.session)
      }
      moveTo(QQ, WQ) {
        const XQ = this.sink();
        if (XQ) {
          if (WQ)
            for (let QQ = 0; QQ < 3; QQ++) this.half[QQ] = Math.abs(WQ[QQ]);
          iX(QQ, this.half) && (0, jQ.sf)(XQ, 0, this.key, jQ._d.HasBox, dX, HX, UX)
        }
      }
      setEmitRate(QQ) {
        const WQ = this.sink(),
          XQ = hX(QQ);
        WQ && XQ !== this.rate && (0, jQ.sf)(WQ, 0, this.key, 0, GX, GX, lX(XQ)) && (this.rate = XQ, this.emitted ||= XQ > 0)
      }
      emit(QQ) {
        const WQ = this.sink(),
          XQ = Math.min(Math.floor(QQ), jQ._d.MaxBurst);
        WQ && XQ > 0 && (0, jQ.kf)(WQ, 0, this.key, jQ._d.PresetNone, 0, XQ, GX, GX, UX) && (this.emitted = !0)
      }
      emitPoints(QQ, WQ, XQ) {
        const wQ = this.sink(),
          qQ = Math.min(Math.floor(XQ), jQ._d.MaxPoints, Math.floor(WQ.length / 4));
        if (!wQ || !(qQ > 0) || !Number.isFinite(QQ[0] + QQ[1] + QQ[2])) return;
        const TQ = new Uint8Array(WQ.buffer, WQ.byteOffset, qQ * jQ._d.PointBytes);
        (0, jQ.lf)(wQ, 0, this.key, qQ, QQ, TQ) && (this.emitted = !0)
      }
      setDirections(QQ, WQ) {
        const XQ = this.sink();
        if (!XQ || !Number.isFinite(QQ[0] + QQ[1] + QQ[2] + WQ[0] + WQ[1] + WQ[2])) return;
        const wQ = vX.encode(JSON.stringify({
          dir1: [QQ[0], QQ[1], QQ[2]],
          dir2: [WQ[0], WQ[1], WQ[2]]
        }));
        (0, jQ.sf)(XQ, 0, this.key, 0, GX, GX, wQ)
      }
      stop() {
        const QQ = this.sink();
        this.stopped = !0, QQ && (this.emitted ? (this.rate > 0 && (0, jQ.sf)(QQ, 0, this.key, 0, GX, GX, lX(0)), setTimeout((() => {
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
    const uX = tW.l,
      LX = new TextDecoder;

    function kX(QQ, WQ) {
      const {
        serverIds: XQ,
        kinds: wQ
      } = QQ;
      let qQ = 0;
      for (let TQ = 0; TQ < XQ.length; TQ++) {
        const QQ = XQ[TQ];
        if (QQ !== jQ.xd && !UQ(wQ[TQ])) {
          if (qQ === WQ.length) {
            const QQ = new Int32Array(Math.max(64, 2 * qQ));
            QQ.set(WQ), WQ = QQ
          }
          WQ[qQ++] = QQ
        }
      }
      return {
        ids: WQ,
        count: qQ
      }
    }

    function fX(QQ, WQ) {
      return QQ.length >= WQ ? QQ : new Int32Array(Math.max(WQ, 2 * QQ.length))
    }

    function SX(QQ, WQ, XQ, wQ) {
      for (let qQ = 0; qQ < XQ; qQ += 4096) {
        const TQ = Math.min(4096, XQ - qQ),
          zQ = QQ.memoryView(Int32Array, QQ.scratch(), TQ, "entity_info_batch's ids");
        if (!zQ) return !1;
        zQ.set(WQ.subarray(qQ, qQ + TQ));
        const sQ = QQ.queries.entityInfoBatch(TQ),
          FQ = 4294967295 === sQ ? null : QQ.memoryData(QQ.scratch(), sQ, 4, "entity_info_batch's records");
        if (!FQ) return !1;
        for (let QQ = 0; QQ + jQ.hc.BYTES <= sQ;) {
          const WQ = jQ.hc.len(FQ, QQ);
          wQ(jQ.hc.serverId(FQ, QQ), tX(FQ, QQ, WQ)), QQ += jQ.hc.BYTES + (0, rQ.te)(WQ)
        }
      }
      return !0
    }

    function tX(QQ, WQ, XQ) {
      var wQ, qQ, TQ;
      const zQ = jQ.hc.kind(QQ, WQ),
        sQ = 0 === zQ ? null : bQ(zQ);
      if (null === sQ) return null;
      const FQ = jQ.hc.variation(QQ, WQ),
        PQ = jQ.hc.pose(QQ, WQ),
        gQ = jQ.hc.meta(QQ, WQ),
        JQ = jQ.hc.mesh(QQ, WQ),
        rQ = 0 !== (jQ.hc.flags(QQ, WQ) & jQ.ec.HasOpts),
        IQ = uX[sQ];
      return Object.freeze({
        type: sQ,
        variation: FQ === jQ.Ed ? void 0 : null !== (wQ = null !== (qQ = null === IQ || void 0 === IQ ? void 0 : IQ[FQ]) && void 0 !== qQ ? qQ : null === IQ || void 0 === IQ ? void 0 : IQ[0]) && void 0 !== wQ ? wQ : "default",
        pose: PQ === jQ.Cc ? void 0 : null !== (TQ = jQ.Vb[PQ]) && void 0 !== TQ ? TQ : jQ.Vb[0],
        metaInfo: gQ === jQ.Cc ? void 0 : jQ.pd[gQ],
        meshKind: JQ === jQ.Cc ? void 0 : jQ.nd[JQ],
        meshOpts: rQ ? LX.decode(new Uint8Array(QQ.buffer, QQ.byteOffset + WQ + jQ.hc.BYTES, XQ)) : void 0
      })
    }
    const oX = 1,
      eX = 2;
    class nX {
      constructor(QQ) {
        this.deps = QQ, this.wanted = 0, this.Ds = !1, this.refused = !1
      }
      get on() {
        return this.Ds
      }
      want(QQ, WQ) {
        this.wanted = WQ ? this.wanted | QQ : this.wanted & ~QQ;
        const XQ = 0 !== this.wanted;
        if (XQ === this.Ds) return;
        const wQ = this.deps.cmd();
        null !== wQ ? (0, jQ.gg)(wQ, 0, XQ ? 1 : 0) ? (this.Ds = XQ, this.refused = !1) : this.refused || (this.refused = !0, this.deps.onError(new Error("WatchEntityInfo didn't fit the command ring"))) : this.Ds = !1
      }
    }
    class xX {
      constructor(QQ) {
        this.deps = QQ, this.entries = new Map, this.complete = !1, this.refill = !1, this.midFrame = !1, this.pending = new Int32Array(64), this.pendingCount = 0, this.ids = new Int32Array(64)
      }
      get(QQ) {
        var WQ;
        return this.complete || this.fill(), null !== (WQ = this.entries.get("string" === typeof QQ ? QQ : String(QQ))) && void 0 !== WQ ? WQ : null
      }
      inCoreCall() {
        this.midFrame = !0
      }
      stale(QQ) {
        if (this.complete) {
          if (this.pendingCount === this.pending.length) {
            const QQ = new Int32Array(2 * this.pending.length);
            QQ.set(this.pending), this.pending = QQ
          }
          this.pending[this.pendingCount++] = QQ
        }
      }
      removed(QQ) {
        this.entries.size > 0 && this.entries.delete(String(QQ))
      }
      refresh() {
        const QQ = this.pendingCount;
        if (this.pendingCount = 0, this.midFrame = !1, !this.deps.watch.on || this.refill) return this.complete = !1, void(this.refill = !1);
        if (QQ > 0 && this.complete) {
          const {
            api: WQ
          } = this.deps;
          let XQ = 0;
          const wQ = this.ids = fX(this.ids, QQ);
          for (let qQ = 0; qQ < QQ; qQ++) {
            const QQ = this.pending[qQ],
              TQ = WQ.indexById.get(QQ);
            void 0 === TQ || UQ(WQ.kinds[TQ]) ? this.entries.delete(String(QQ)) : wQ[XQ++] = QQ
          }
          XQ > 0 && !this.batch(wQ, XQ) && (this.complete = !1)
        }
      }
      sessionEnded() {
        this.entries.clear(), this.complete = !1, this.refill = !1, this.midFrame = !1, this.pendingCount = 0, this.deps.watch.want(oX, !1)
      }
      fill() {
        const {
          api: QQ
        } = this.deps;
        if (this.complete = !0, this.pendingCount = 0, this.entries.clear(), this.deps.isSessionLive()) {
          const {
            watch: QQ
          } = this.deps, WQ = QQ.on;
          QQ.want(oX, !0), !WQ && QQ.on && (this.refill = this.midFrame)
        }
        const {
          ids: WQ,
          count: XQ
        } = kX(QQ, this.ids);
        this.ids = WQ, XQ > 0 && !this.batch(WQ, XQ) && (this.refill = !0)
      }
      batch(QQ, WQ) {
        return SX(this.deps.api, QQ, WQ, ((QQ, WQ) => {
          null === WQ ? this.entries.delete(String(QQ)) : this.entries.set(String(QQ), WQ)
        }))
      }
    }
    var YX = XQ(5140);

    function NX(QQ) {
      if ("message" !== QQ.type || QQ.cg !== YX.gc.NewClientOptions || QQ.payloadKind !== rQ.rc.Msgpack) return null;
      const WQ = (0, uQ.d)(QQ.payload);
      if (null === WQ || "object" !== typeof WQ || Array.isArray(WQ)) throw new Error("NewClientOptions whose body isn't an object of options");
      return WQ
    }
    var ZX = XQ(1273),
      OX = XQ(36926);

    function KX(QQ, WQ, XQ, wQ, qQ, TQ, sQ) {
      var FQ, PQ, gQ;
      switch (QQ) {
        case jQ.qe.ToggleMenu: {
          const QQ = jQ.N[WQ];
          zQ.k.mB("toggleMenu", void 0 === QQ ? "inventory" : `inventory|${QQ}`);
          break
        }
        case jQ.qe.EditBoard:
          zQ.k.mB("EditBoard", {
            pos: 0 === WQ ? null : XQ
          });
          break;
        case jQ.qe.EditCodeBlock:
        case jQ.qe.ViewCodeBlock:
          zQ.k.mB("EditCodeBlock", {
            pos: XQ,
            canChangePos: QQ === jQ.qe.EditCodeBlock
          });
          break;
        case jQ.qe.EditCustomLobbyBlock:
          zQ.k.mB("EditCustomLobbyBlock", {
            pos: XQ
          });
          break;
        case jQ.qe.OpenIronChest:
          zQ.k.mB("OpenIronChest", {
            pos: XQ
          });
          break;
        case jQ.qe.EditNameTag:
          zQ.k.mB("EditNameTag", null !== (FQ = null === (PQ = qQ.Ds()) || void 0 === PQ || null === (gQ = PQ.attributes.customAttributes) || void 0 === gQ ? void 0 : gQ.text) && void 0 !== FQ ? FQ : "");
          break;
        case jQ.qe.EditBook: {
          var JQ, rQ, BQ;
          const QQ = null === (JQ = qQ.Ds()) || void 0 === JQ ? void 0 : JQ.attributes;
          zQ.k.mB("EditBook", {
            pages: (0, ZX.S)(null === QQ || void 0 === QQ || null === (rQ = QQ.customAttributes) || void 0 === rQ ? void 0 : rQ.pages),
            title: null !== (BQ = null === QQ || void 0 === QQ ? void 0 : QQ.customDisplayName) && void 0 !== BQ ? BQ : "Title",
            isPublished: !(null === QQ || void 0 === QQ || !QQ.customDescription)
          });
          break
        }
        case jQ.qe.CantChangeBlock:
          ! function(QQ, WQ) {
            const XQ = WQ.getClientOption("cantChangeError"),
              wQ = WQ.getClientOption(QQ ? "cantBuildError" : "cantBreakError"),
              qQ = QQ ? XQ : wQ;
            (WQ.getClientOption("canChange") || qQ || "You cannot modify this block" !== XQ) && zQ.k.mB("showBottomMessage", {
              message: wQ || XQ,
              type: "Error"
            })
          }(1 === WQ, TQ);
          break;
        case jQ.qe.MiddleBarStart:
          zQ.k.mB("middleScreenBarInitiate", {
            duration: wQ,
            cq: 1 === XQ[0],
            horizBarRemOffset: WQ
          });
          break;
        case jQ.qe.MiddleBarStop:
          zQ.k.mB("middleScreenBarRemove");
          break;
        case jQ.qe.Hitmarker:
          zQ.k.mB("localGunHitmarker", {
            fW: 1 === WQ
          });
          break;
        case jQ.qe.ShotsLeft:
          zQ.k.mB("localPlayerNewShotsLeft", wQ);
          break;
        case jQ.qe.AimingOverlay:
          zQ.k.mB("aimingOverlay", 3 === (3 & WQ) ? "sniper" : "none");
          break;
        case jQ.qe.BottomMessage:
          zQ.k.mB("showBottomMessage", JSON.parse(sQ()));
          break;
        case jQ.qe.Crosshair:
          qQ.inaccuracy = (0, LQ.f)(wQ), (0, OX.e)().crosshairAccuracy(qQ.inaccuracy);
          break;
        case jQ.qe.ChargeStage:
          break;
        case jQ.qe.EmoteWheelClose:
          zQ.k.mB("requestEmoteWheelClose");
          break;
        case jQ.qe.BlockMined:
          zQ.k.mB("localBlockMined");
          break;
        default:
          throw new IQ.d(`UiEvent of no kind: what ${QQ}`)
      }
    }
    var mX = XQ(38277),
      MX = XQ(34516),
      Qw = XQ(2048),
      Ww = XQ(37105),
      Xw = XQ(34529),
      ww = XQ(5118);
    const qw = 10,
      Tw = {
        player: [],
        chestOrCreative: [],
        chest: null,
        creative: !1,
        selectedSlot: 0,
        freeSlots: 0
      },
      zw = {
        items: [],
        ammo: 0,
        selectedSlot: 0
      },
      sw = {
        gun: !1,
        aimable: !1,
        chargeName: null
      };

    function Fw(QQ, WQ) {
      let XQ, wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        qQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      const TQ = () => (XQ = (0, Qw.j)(XQ, WQ()), XQ);
      return {
        current: TQ,
        watch(WQ) {
          const XQ = () => {
              WQ(TQ())
            },
            zQ = [QQ.watch(XQ)];
          return null !== wQ && zQ.push((0, Qw.k)((QQ => {
            QQ.some(wQ) && XQ()
          }))), null !== qQ && zQ.push(qQ(XQ)), () => {
            for (const QQ of zQ) QQ()
          }
        }
      }
    }

    function Pw(QQ) {
      return QQ && {
        name: QQ.name,
        amount: QQ.amount,
        attributes: QQ.attributes
      }
    }
    const gw = new WeakMap;

    function Jw(QQ) {
      let WQ = gw.get(QQ);
      return void 0 === WQ && (WQ = (0, Xw.creativeItemIds)().map((WQ => ({
        name: QQ.nameOfId(WQ),
        amount: QQ.isStackableId(WQ) ? 1 : null,
        attributes: (0, mX.c)("Gun" === (0, Xw.itemTypeOf)(WQ) ? {
          type: "Gun",
          clipSize: (0, Xw.clipSizeOf)(WQ)
        } : void 0)
      }))), gw.set(QQ, WQ)), WQ
    }

    function rw(QQ, WQ, XQ, wQ) {
      const qQ = WQ => (QQ.flush(wQ), WQ),
        TQ = XQ => {
          var wQ, qQ, TQ, zQ, sQ, FQ, PQ;
          const gQ = QQ.slot(XQ);
          if (!gQ) return null;
          const {
            rootName: JQ,
            metaStr: rQ
          } = WQ.getMetaInfo(gQ.name);
          return {
            name: gQ.name,
            amount: gQ.amount,
            attributes: gQ.attributes,
            instance: QQ.instance(XQ),
            displayName: null !== (wQ = gQ.attributes.customDisplayName) && void 0 !== wQ ? wQ : WQ.getDisplayName(JQ),
            requiresAmmo: "RequiresAmmo" === rQ,
            clipSize: null !== (qQ = null !== (TQ = null === (zQ = gQ.attributes.customAttributes) || void 0 === zQ || null === (sQ = zQ.gunStats) || void 0 === sQ ? void 0 : sQ.clipSize) && void 0 !== TQ ? TQ : null === (FQ = WQ.getGunStats(JQ)) || void 0 === FQ ? void 0 : FQ.clipSize) && void 0 !== qQ ? qQ : null === (PQ = gQ.typeObj) || void 0 === PQ ? void 0 : PQ.clipSize
          }
        },
        sQ = function(QQ, WQ) {
          let XQ = null,
            wQ = {
              focus: null,
              recipes: [],
              detail: null
            },
            qQ = -1;
          const TQ = new Set;
          return {
            read() {
              var TQ, zQ;
              if (null === XQ) return null !== wQ.focus && (wQ = {
                ...wQ,
                focus: null
              }), wQ;
              if (wQ.focus === XQ && qQ === QQ.changes) return wQ;
              if (qQ = QQ.changes, 0 === QQ.length) return wQ = {
                focus: XQ,
                recipes: [],
                detail: null
              }, wQ;
              let sQ = 0;
              if (null !== XQ.recipe) try {
                sQ = WQ.getItemId(XQ.recipe.name)
              } catch {}
              const FQ = QQ.craftingView(XQ.station, sQ, null !== (TQ = null === (zQ = XQ.recipe) || void 0 === zQ ? void 0 : zQ.Ug) && void 0 !== TQ ? TQ : 0);
              return wQ = null === FQ ? {
                focus: XQ,
                recipes: [],
                detail: null
              } : function(QQ, WQ, XQ) {
                let wQ = jQ.ub.BYTES;
                const qQ = [];
                for (let gQ = jQ.ub.recipes(QQ, 0); gQ > 0; gQ--) {
                  const XQ = jQ.ob.flags(QQ, wQ),
                    TQ = {
                      name: WQ.nameOfId(jQ.ob.item(QQ, wQ)),
                      Ug: jQ.ob.recipe(QQ, wQ),
                      requires: [],
                      produces: jQ.ob.produces(QQ, wQ),
                      haveIngredients: 0 !== (XQ & jQ.kb.HaveIngredients),
                      listed: 0 !== (XQ & jQ.kb.Listed)
                    };
                  let zQ = jQ.ob.requires(QQ, wQ);
                  for (wQ += jQ.ob.BYTES; zQ > 0; zQ--) {
                    const XQ = jQ.pb.items(QQ, wQ);
                    TQ.requires.push({
                      items: Bw(QQ, wQ + jQ.pb.BYTES, XQ, WQ),
                      amt: jQ.pb.amount(QQ, wQ)
                    }), wQ += jQ.pb.BYTES + 2 * XQ
                  }
                  qQ.push(TQ)
                }
                const TQ = jQ.ub.flags(QQ, 0);
                if (null === XQ.recipe || 0 === (TQ & jQ.tb.Detail)) return {
                  focus: XQ,
                  recipes: qQ,
                  detail: null
                };
                const zQ = {},
                  sQ = {};
                for (let gQ = jQ.ub.ingredients(QQ, 0); gQ > 0; gQ--) {
                  const XQ = jQ.gb.item(QQ, wQ),
                    qQ = jQ.gb.from(QQ, wQ),
                    TQ = jQ.gb.amount(QQ, wQ);
                  wQ += jQ.gb.BYTES;
                  const FQ = qQ === jQ.J ? null : Bw(QQ, wQ, qQ, WQ);
                  if (null !== FQ && (wQ += 2 * qQ), 0 === XQ) continue;
                  const PQ = WQ.nameOfId(XQ);
                  zQ[PQ] = TQ, null !== FQ && (sQ[PQ] = FQ)
                }
                const {
                  name: FQ,
                  Ug: PQ
                } = XQ.recipe;
                return {
                  focus: XQ,
                  recipes: qQ,
                  detail: {
                    name: FQ,
                    Ug: PQ,
                    craftAllTimes: jQ.ub.craftAllTimes(QQ, 0),
                    roomForOne: 0 !== (TQ & jQ.tb.RoomForOne),
                    resultStackable: Boolean(WQ.getItemStat(FQ, "stackable")),
                    amounts: zQ,
                    ingredientsCraftedFrom: sQ
                  }
                }
              }(FQ, WQ, XQ), wQ
            },
            setFocus(QQ) {
              XQ = QQ;
              for (const WQ of [...TQ]) WQ()
            },
            watchFocus: QQ => (TQ.add(QQ), () => {
              TQ.delete(QQ)
            })
          }
        }(QQ, WQ);
      return {
        states: {
          inventory: Fw(QQ, (() => {
            const XQ = QQ.length;
            if (0 === XQ) return Tw;
            const wQ = [];
            for (let WQ = 0; WQ < jQ.Pd; WQ++) wQ.push(Pw(QQ.slot(WQ)));
            const qQ = QQ.slotIcon,
              TQ = wQ[QQ.selectedSlot];
            0 !== qQ && TQ && (wQ[QQ.selectedSlot] = {
              ...TQ,
              icon: WQ.nameOfId(qQ)
            });
            const zQ = !0 === WQ.getClientOption("creative");
            let sQ = [],
              FQ = null;
            if (XQ > jQ.Pd) {
              for (let WQ = jQ.Pd; WQ < XQ; WQ++) sQ.push(Pw(QQ.slot(WQ)));
              FQ = {
                type: null,
                pos: [...QQ.Sq],
                numSlots: XQ - jQ.Pd,
                ironChest: null
              }
            } else zQ && (sQ = Jw(WQ));
            return {
              player: wQ,
              chestOrCreative: sQ,
              chest: FQ,
              creative: zQ,
              selectedSlot: QQ.selectedSlot,
              freeSlots: QQ.freeSlots()
            }
          }), (0, Qw.g)("creative")),
          hotbar: Fw(QQ, (() => {
            if (0 === QQ.length) return zw;
            const WQ = [];
            for (let QQ = 0; QQ < qw; QQ++) WQ.push(TQ(QQ));
            return {
              items: WQ,
              ammo: QQ.amountOf("Ammo"),
              selectedSlot: QQ.selectedSlot
            }
          }), (0, Qw.f)("DisplayName", "GunStats")),
          crafting: Fw(QQ, sQ.read, null, sQ.watchFocus),
          heldItemAim: Fw(QQ, (() => {
            var WQ;
            if (!XQ()) return sw;
            const wQ = null === (WQ = QQ.Ds()) || void 0 === WQ ? void 0 : WQ.typeObj,
              qQ = "Gun" === (null === wQ || void 0 === wQ ? void 0 : wQ.type);
            return {
              gun: qQ,
              aimable: qQ || !0 === (null === wQ || void 0 === wQ ? void 0 : wQ.showsAimingUi),
              chargeName: "Chargeable" === (null === wQ || void 0 === wQ ? void 0 : wQ.type) ? wQ.name : null
            }
          }), null, (QQ => function(QQ, WQ) {
            let XQ = QQ();
            return (0, ww.w)((() => {
              const wQ = QQ();
              wQ !== XQ && (XQ = wQ, WQ(wQ))
            }))
          }(XQ, QQ)))
        },
        events: {
          hotbarSlotRequested: (0, Qw.c)("setSelectedInventorySlotI"),
          hotbarScrolled: (0, Qw.c)("ScrollInventorySlot"),
          numberKeyPressed: (0, Qw.c)("numkeyPressed"),
          inventoryDropRequested: (0, Qw.c)("DropInvenItem"),
          chestToggled: (0, Qw.c)("chestToggleFromServer"),
          chestRefreshed: (0, Qw.c)("chestRefreshedFromServer", jw),
          inventorySynced: (0, Qw.c)("syncedInvenFromServer", jw),
          enchantingTableOpened: (0, Qw.c)("enchantingTable", (QQ => {
            let {
              position: XQ,
              ez: wQ
            } = QQ;
            return {
              position: [...XQ],
              blockName: WQ.getMetaInfo(wQ).rootName
            }
          }))
        },
        commands: {
          selectHotbarSlot(WQ) {
            QQ.selectSlot(WQ), QQ.flush(wQ)
          },
          removeInventoryItem(WQ) {
            let {
              slot: XQ,
              amount: wQ,
              drop: TQ
            } = WQ;
            return qQ(QQ.remove(XQ, wQ, TQ))
          },
          swapInventorySlots(WQ) {
            let {
              a: XQ,
              b: wQ
            } = WQ;
            return qQ(QQ.swap(XQ, wQ))
          },
          moveInventoryItem(WQ) {
            let {
              from: XQ,
              to: wQ,
              amount: TQ
            } = WQ;
            return qQ(QQ.move(XQ, wQ, TQ))
          },
          quickMoveInventoryItem(WQ) {
            let {
              slot: XQ,
              start: wQ,
              end: TQ,
              amount: zQ
            } = WQ;
            return qQ(QQ.quickMove(XQ, wQ, TQ, zQ))
          },
          closeChest() {
            QQ.closeChest(), QQ.flush(wQ), zQ.k.mB("chestClosedByPlayer")
          },
          focusCrafting(QQ) {
            sQ.setFocus(QQ)
          },
          craftRecipe(WQ) {
            let {
              name: XQ,
              Ug: wQ,
              times: TQ
            } = WQ;
            return qQ(QQ.craft(XQ, wQ, TQ))
          },
          salvageItem(WQ) {
            let {
              slot: XQ,
              name: wQ,
              amount: TQ
            } = WQ;
            return qQ(QQ.salvage(XQ, wQ, TQ))
          },
          enchantItem(WQ) {
            let {
              slot: XQ,
              level: wQ,
              tablePos: qQ
            } = WQ;
            QQ.enchant(XQ, wQ, qQ)
          }
        },
        queries: {
          enchantingOffer(XQ) {
            let {
              slot: wQ,
              blockName: qQ
            } = XQ;
            return function(QQ, WQ, XQ, wQ) {
              const qQ = QQ.slot(XQ);
              if (!qQ || !WQ.getClientOption("canCraft") || !(0, MX.m)(wQ) || (0, MX.k)(qQ.attributes)) return Iw;
              const TQ = (0, Xw.enchantmentPerksOf)(WQ.getItemId(qQ.name));
              if (0 === TQ.length) return Iw;
              const zQ = [];
              for (let sQ = 0; sQ < Ww.b; sQ++) {
                const {
                  commonProb: QQ,
                  uncommonProb: WQ,
                  rareProb: XQ,
                  epicProb: qQ,
                  legendaryProb: TQ,
                  level: FQ
                } = (0, MX.c)(wQ, sQ);
                zQ.push({
                  level: FQ,
                  odds: [QQ, WQ, XQ, qQ, TQ].map((QQ => 100 * QQ))
                })
              }
              return {
                perks: [...TQ],
                options: zQ
              }
            }(QQ, WQ, wQ, qQ)
          }
        }
      }
    }
    const Iw = Object.freeze({
      perks: [],
      options: []
    });

    function jw() {
      return null
    }

    function Bw(QQ, WQ, XQ, wQ) {
      const qQ = [];
      for (let TQ = 0; TQ < XQ; TQ++) {
        const XQ = QQ.getUint16(WQ + 2 * TQ, !0);
        0 !== XQ && qQ.push(wQ.nameOfId(XQ))
      }
      return qQ
    }
    class yw {
      constructor(QQ) {
        this.api = QQ, this.positions = new Map, this.targeted = {
          w6: 0,
          position: [0, 0, 0],
          normal: [0, 0, 0],
          OB: [0, 0, 0]
        }, this.hasTarget = !1, this.breaking = [0, 0, 0], this.isBreaking = !1
      }
      position(QQ) {
        let WQ = this.positions.get(QQ);
        return WQ || (this.api.checkValid(QQ) || this.api.isLocal(QQ) ? (WQ = [NaN, NaN, NaN], this.api.readPosition(QQ, WQ), this.positions.set(QQ, WQ), WQ) : null)
      }
      CQQ() {
        return this.hasTarget ? this.targeted : null
      }
      breakingPosition() {
        return this.isBreaking ? this.breaking : null
      }
      refresh() {
        for (const [WQ, XQ] of this.positions) this.api.readPosition(WQ, XQ) || this.api.checkValid(WQ) || this.api.isLocal(WQ) || this.positions.delete(WQ);
        const QQ = this.api.apiView;
        if (this.refreshTarget(), this.isBreaking = 0 !== (jQ.x.playerFlags(QQ, 0) & jQ.ae.Breaking) && jQ.x.breakingProgress(QQ, 0) >= 0, this.isBreaking)
          for (let WQ = 0; WQ < 3; WQ++) this.breaking[WQ] = jQ.x.breakingPos(QQ, 0, WQ)
      }
      refreshTarget() {
        const QQ = this.api.apiView,
          WQ = jQ.x.targetBlockId(QQ, 0);
        if (this.hasTarget = WQ !== jQ.Ad, this.hasTarget) {
          const XQ = this.targeted;
          XQ.w6 = WQ;
          for (let WQ = 0; WQ < 3; WQ++) XQ.position[WQ] = jQ.x.targetBlock(QQ, 0, WQ), XQ.normal[WQ] = jQ.x.targetNormal(QQ, 0, WQ), XQ.OB[WQ] = jQ.x.targetAdjacent(QQ, 0, WQ)
        }
      }
      despawned(QQ) {
        const WQ = this.positions.get(QQ);
        WQ && !this.api.isLocal(QQ) && (WQ.fill(NaN), this.positions.delete(QQ))
      }
    }
    var Vw = XQ(40853),
      Dw = XQ(40845),
      pw = XQ(36674),
      Gw = XQ(37098);
    const Uw = 1,
      bw = 2;
    class vw {
      constructor() {
        this.game = new Gw.h, this.client = new Gw.h, this.Ds = 0, this.movesFly = null
      }
      setGame(QQ) {
        if (null === QQ || "object" !== typeof QQ) return !1;
        const {
          key: WQ,
          value: XQ
        } = QQ;
        return "string" === typeof WQ && (this.game.setBooleanType(WQ, Boolean(XQ)), !0)
      }
      setClient(QQ, WQ) {
        this.client.setBooleanType(QQ, WQ)
      }
      clearGame() {
        this.game = new Gw.h, this.movesFly = null
      }
      setMovesFly(QQ) {
        this.movesFly = QQ
      }
      perms() {
        return (this.game._getTotalBooleanVal() ? Uw : 0) | (this.client._getTotalBooleanVal() ? bw : 0)
      }
      write(QQ) {
        const WQ = this.perms(),
          {
            movesFly: XQ
          } = this;
        if (WQ === this.Ds && null === XQ) return !0;
        let wQ = jQ.lc.Keep;
        return null !== XQ && (wQ = XQ ? jQ.lc.On : jQ.lc.Off), !(!QQ || !(0, jQ.Je)(QQ, 0, wQ, WQ, XQ ? 1 : 0)) && (this.Ds = WQ, this.movesFly = null, !0)
      }
    }
    class dw {
      constructor(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => 35;
        this.api = QQ, this.screenBandPct = void 0, this.clipX = 0, this.clipY = 0, this.clipW = 0, this.eye = [0, 0, 0], this.forward = [0, 0, 1], this.along = [0, 0, 0], this.screenBandPct = {
          x: sQ.b,
          get y() {
            return WQ()
          }
        }
      }
      get hasView() {
        const QQ = this.api.apiView,
          WQ = jQ.x.viewProj;
        return 0 !== WQ(QQ, 0, 3) || 0 !== WQ(QQ, 0, 7) || 0 !== WQ(QQ, 0, 11) || 0 !== WQ(QQ, 0, 15)
      }
      get cameraPosition() {
        const QQ = this.api.apiView,
          {
            eye: WQ
          } = this;
        for (let XQ = 0; XQ < 3; XQ++) WQ[XQ] = jQ.x.eye(QQ, 0, XQ);
        return WQ
      }
      get cameraDirection() {
        const QQ = this.api.apiView,
          WQ = jQ.x.viewProj,
          XQ = WQ(QQ, 0, 3),
          wQ = WQ(QQ, 0, 7),
          qQ = WQ(QQ, 0, 11),
          TQ = Math.hypot(XQ, wQ, qQ),
          {
            forward: zQ
          } = this;
        return TQ > 0 && (zQ[0] = XQ / TQ, zQ[1] = wQ / TQ, zQ[2] = qQ / TQ), zQ
      }
      get cameraHeading() {
        return jQ.x.heading(this.api.apiView, 0)
      }
      get cameraPitch() {
        return jQ.x.pitch(this.api.apiView, 0)
      }
      get tanHalfFovX() {
        return jQ.x.tanHalfFovX(this.api.apiView, 0)
      }
      get tanHalfFovY() {
        return jQ.x.tanHalfFovY(this.api.apiView, 0)
      }
      projectWorldPosToScreenPos(QQ) {
        this.clip(QQ);
        const {
          clipX: WQ,
          clipY: XQ,
          clipW: wQ
        } = this;
        if (wQ > 0) {
          const QQ = WQ / wQ * 50,
            qQ = -XQ / wQ * 50;
          return Math.abs(QQ) <= this.screenBandPct.x && Math.abs(qQ) <= this.screenBandPct.y ? {
            x: 50 + QQ,
            y: 50 + qQ
          } : this.clampToBand(QQ, qQ)
        }
        const qQ = this.cameraPosition,
          TQ = Math.hypot(QQ[0] - qQ[0], QQ[1] - qQ[1], QQ[2] - qQ[2]),
          zQ = this.api.apiView,
          sQ = jQ.x.viewProj,
          FQ = TQ > 0 ? WQ / TQ : 0,
          PQ = TQ > 0 ? -XQ / TQ : 0,
          gQ = Math.hypot(sQ(zQ, 0, 1), sQ(zQ, 0, 5), sQ(zQ, 0, 9)),
          JQ = FQ / Math.hypot(sQ(zQ, 0, 0), sQ(zQ, 0, 4), sQ(zQ, 0, 8)),
          rQ = PQ / gQ,
          IQ = !(Math.abs(JQ) >= .001 || Math.abs(rQ) >= .001);
        return this.clampToBand(FQ, IQ ? -(gQ || 1) : PQ)
      }
      projectDirectionToScreenPos(QQ) {
        if (!this.hasView) return;
        const WQ = this.cameraPosition,
          XQ = this.along;
        for (let wQ = 0; wQ < 3; wQ++) XQ[wQ] = WQ[wQ] + 10 * QQ[wQ];
        return this.projectWorldPosToScreenPos(XQ)
      }
      projectWorldPosToViewport(QQ) {
        this.clip(QQ);
        const {
          clipX: WQ,
          clipY: XQ,
          clipW: wQ
        } = this;
        return wQ > 0 ? {
          x: 50 + WQ / wQ * 50,
          y: 50 - XQ / wQ * 50
        } : null
      }
      clip(QQ) {
        const WQ = this.api.apiView,
          XQ = QQ[0] - jQ.x.origin(WQ, 0, 0),
          wQ = QQ[1] - jQ.x.origin(WQ, 0, 1),
          qQ = QQ[2] - jQ.x.origin(WQ, 0, 2),
          TQ = jQ.x.viewProj;
        this.clipX = TQ(WQ, 0, 0) * XQ + TQ(WQ, 0, 4) * wQ + TQ(WQ, 0, 8) * qQ + TQ(WQ, 0, 12), this.clipY = TQ(WQ, 0, 1) * XQ + TQ(WQ, 0, 5) * wQ + TQ(WQ, 0, 9) * qQ + TQ(WQ, 0, 13), this.clipW = TQ(WQ, 0, 3) * XQ + TQ(WQ, 0, 7) * wQ + TQ(WQ, 0, 11) * qQ + TQ(WQ, 0, 15)
      }
      clampToBand(QQ, WQ) {
        return (0, sQ.e)(QQ, WQ, this.screenBandPct.x, this.screenBandPct.y)
      }
    }
    var Hw = XQ(5148);
    const aw = new TextEncoder,
      lw = new Uint8Array(jQ.S * jQ.R);
    class hw {
      constructor() {
        this.buttons = [], this.Ds = !0
      }
      set(QQ) {
        this.buttons = QQ, this.Ds = !1
      }
      attached() {
        this.Ds = 0 === this.buttons.length
      }
      write(QQ) {
        if (this.Ds) return;
        const WQ = new Uint8Array(jQ.S),
          XQ = new Uint8Array(jQ.S);
        let wQ = 0,
          qQ = 0;
        for (const {
            id: TQ,
            keycode: zQ
          }
          of this.buttons) {
          if (wQ === jQ.S) break;
          const {
            read: QQ,
            written: sQ
          } = aw.encodeInto(TQ, lw.subarray(qQ, qQ + jQ.R));
          if (QQ < TQ.length) continue;
          const FQ = Hw.i[zQ];
          WQ[wQ] = "number" === typeof FQ ? FQ : 0, XQ[wQ] = sQ, wQ++, qQ += sQ
        }
        this.Ds = (0, jQ.xe)(QQ, 0, wQ, WQ, XQ, lw.subarray(0, qQ))
      }
    }

    function iw(QQ, WQ, XQ) {
      const wQ = aw.encode(WQ);
      return wQ.length <= jQ.R && function(QQ, WQ, XQ, wQ) {
        return (0, nW.c)(), (0, jQ.uf)(QQ, WQ, XQ, wQ)
      }(QQ, 0, XQ ? 1 : 0, wQ)
    }
    var Aw = XQ(39509);
    const Rw = new TextDecoder,
      Ew = new TextEncoder,
      Cw = new Uint8Array(0),
      uw = [0, 0, 0],
      Lw = {
        off: jQ.ce.Off,
        key: jQ.ce.Key,
        touch: jQ.ce.Touch
      };
    class kw {
      constructor(QQ) {
        var WQ;
        this.options = QQ, this.renderFrame = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.entityInfo = void 0, this.entityInfoWatch = void 0, this.particles = void 0, this.clientApi = void 0, this.scriptedCamera = void 0, this.owners = [], this.tickers = [], this.renderers = [], this.receivers = [], this.failures = [], this.vetoSet = !1, this.hooksSet = !1, this.writtenPublicLobby = !1, this.promptWatch = "off", this.promptWatchSent = "off", this.customButtons = new hw, this.generation = 0, this.sessionLive = !1, this.boundId = 0, this.session = null, this.activeConn = 0, this.closedThrough = 0, this.openSocket = 0, this.socketLeftSinceAttach = !1, this.ticks = 0, this.zoomUnshown = !1, this.zoomHeld = !1, this.overflowGen = 0, this.resyncOwed = !1, this.zoom = 0, this.pendingZoom = null, this.highlight = null, this.highlightOwed = !1, this.cmd = null, this.freeCam = new vw, this.stopped = () => !1, this.onError = void 0, this.api = void 0, this.tables = void 0, this.itemSources = null, this.fault = void 0, this.nI = QQ => {
          if ((0, IQ.h)(QQ)) throw QQ;
          this.onError(QQ)
        }, this.api = QQ.api, this.tables = QQ.tables, this.onError = null !== (WQ = QQ.onError) && void 0 !== WQ ? WQ : QQ => {
          console.error("Error in client game callback", QQ)
        }, this.renderFrame = new dw(this.api, QQ.screenBandY), this.live = new yw(this.api), this.chunks = new sW(this.api.memory, (() => this.api.apiView)), this.items = new VX({
          api: this.api,
          tables: QQ.tables,
          cmd: () => this.cmd,
          onError: this.onError,
          beforeOp: QQ.beforeOp
        });
        const XQ = () => this.stopped() ? null : this.cmd,
          wQ = () => this.sessionLive;
        this.entityInfoWatch = new nX({
          cmd: XQ,
          onError: this.onError
        }), this.entityInfo = new xX({
          api: this.api,
          watch: this.entityInfoWatch,
          isSessionLive: wQ
        }), this.particles = new EX({
          cmd: XQ,
          isSessionLive: wQ,
          onError: this.onError
        }), this.clientApi = new FX({
          api: this.api,
          live: this.live,
          chunks: this.chunks,
          items: this.items,
          entityInfo: this.entityInfo,
          particles: this.particles,
          tables: QQ.tables,
          cmd: XQ,
          sendCmd: () => this.sendCmd(),
          isSessionLive: wQ,
          beforeWrite: () => {
            var WQ;
            if (this.stopped()) return !1;
            const XQ = this.generation;
            return !1 !== (null === (WQ = QQ.beforeWrite) || void 0 === WQ ? void 0 : WQ.call(QQ)) && XQ === this.generation
          },
          playerDbId: () => {
            const QQ = this.session;
            if (null === QQ) throw new Error("No game session has started, so the local player has no DB id");
            return QQ.playerDbId
          },
          playSound: QQ.playSound,
          preloadSounds: QQ.preloadSounds,
          setLocalOptions: QQ.setLocalOptions,
          hasPackModel: QQ.hasPackModel
        }), this.scriptedCamera = new YQ({
          api: this.api,
          cmd: () => this.stopped() ? null : this.cmd,
          screen: QQ.cameraScreen,
          showFacing: QQ.showCameraFacing
        })
      }
      get itemBridgeSources() {
        return this.itemSources ??= rw(this.items, this.tables, (() => this.localPlayerAlive()), this.nI), this.itemSources
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
      clickCodeBlock(QQ) {
        const WQ = this.sessionLive ? this.sendCmd() : null;
        return null !== WQ && (XQ = WQ, wQ = 0, qQ = QQ[0], TQ = QQ[1], zQ = QQ[2], (0, nW.c)(), (0, jQ.Fe)(XQ, wQ, qQ, TQ, zQ));
        var XQ, wQ, qQ, TQ, zQ
      }
      cameraZoom() {
        return this.zoom
      }
      setCameraZoom(QQ) {
        const WQ = this.liveCmd();
        return null === WQ ? (this.pendingZoom = QQ, !1) : (this.pendingZoom = null, (0, jQ.cg)(WQ, 0, QQ, 1))
      }
      Bl(QQ) {
        const WQ = this.stopped() ? null : this.cmd;
        return null !== WQ && (0, jQ._f)(WQ, 0, QQ ? 1 : 0)
      }
      respawn() {
        const QQ = this.sessionLive ? this.sendCmd() : null;
        return null !== QQ && (WQ = QQ, XQ = 0, (0, nW.c)(), (0, jQ.Gf)(WQ, XQ));
        var WQ, XQ
      }
      bindCustomButtonKeys(QQ) {
        this.customButtons.set(QQ)
      }
      pressCustomButton(QQ, WQ) {
        const XQ = this.sessionLive ? this.sendCmd() : null;
        return null !== XQ && iw(XQ, QQ, WQ)
      }
      padMove(QQ, WQ, XQ, wQ, qQ, TQ) {
        const zQ = this.liveCmd();
        return null !== zQ && (0, jQ.if)(zQ, 0, QQ, WQ, XQ, wQ, qQ, TQ)
      }
      thirdPersonFor(QQ) {
        const WQ = this.liveCmd();
        return null !== WQ && (0, jQ.fg)(WQ, 0, null !== QQ && void 0 !== QQ ? QQ : 1 / 0)
      }
      send(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const wQ = 0 !== this.openSocket || this.sessionLive ? this.sendCmd() : null;
        return null !== wQ && xW(wQ, XQ ? rQ.Ad : 0, QQ, (0, uQ.e)(WQ))
      }
      socketAttached(QQ) {
        this.openSocket = QQ, this.socketLeftSinceAttach = !1
      }
      socketDetached(QQ) {
        this.openSocket === QQ && (this.openSocket = 0)
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
      attach(QQ) {
        const WQ = () => QQ.isStopped;
        this.stopped = WQ, this.cmd = QQ.rings.cmd, this.promptWatchSent = "off", this.writePromptWatch(), this.customButtons.attached(), this.writeCustomButtons();
        const XQ = this.api.apiView;
        this.overflowGen = jQ.x.eventOverflowGen(XQ, 0), this.resyncOwed = 0 !== jQ.x.eventOverflowMask(XQ, 0), QQ.setGameHost(this), QQ.setEventWalker((QQ => {
          this.api.walk(QQ, this, WQ)
        }))
      }
      watchPromptPick(QQ) {
        this.promptWatch = QQ, this.writePromptWatch()
      }
      get promptEntity() {
        return "off" === this.promptWatch || this.stopped() ? null : fw(jQ.x.promptEntity(this.api.apiView, 0))
      }
      get interactLabel() {
        return "touch" !== this.promptWatch || this.stopped() ? jQ.Sc.None : jQ.x.interactLabel(this.api.apiView, 0)
      }
      get interactIcon() {
        return "touch" !== this.promptWatch || this.stopped() ? 0 : jQ.x.interactIcon(this.api.apiView, 0)
      }
      closeGame() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        (0 === QQ || QQ >= this.openSocket) && (this.openSocket = 0), this.closedThrough = Math.max(this.closedThrough, QQ, this.activeConn), this.activeConn = 0, this.endSession(), this.endGameGrants(), this.dropGameCamera()
      }
      gameCamera(QQ) {
        0 !== this.activeConn && this.scriptedCamera.settingsChanged(QQ)
      }
      netEvent(QQ) {
        "connection" === QQ.type ? QQ.phase === rQ.E.Activated && QQ.conn !== this.activeConn && QQ.conn > this.closedThrough ? (this.endSession(), this.activeConn = QQ.conn, this.endGameGrants(), this.dropGameCamera()) : QQ.phase !== rQ.E.Left && QQ.phase !== rQ.E.Closed || QQ.conn !== this.activeConn ? QQ.phase === rQ.E.Resumed && 0 !== this.activeConn && QQ.conn > this.closedThrough && (this.activeConn = QQ.conn) : this.closeGame() : QQ.conn === this.activeConn && 0 !== QQ.conn && (QQ.cg === Dw.q ? this.gunHit(QQ.payload) : QQ.cg === YX.gc.EditItemCraftingRecipes || QQ.cg === Dw.P ? this.items.touch() : (this.serverOptions(QQ), this.gameMessage(QQ)));
        const WQ = this.options.onNetEvent;
        WQ && this.guard((() => {
          WQ(QQ)
        }))
      }
      serverOptions(QQ) {
        const WQ = this.options.serverOptions,
          XQ = WQ ? this.decoded(NX, QQ) : null;
        WQ && XQ && this.guard((() => {
          WQ.applyNewClientOptions(XQ)
        }))
      }
      gameMessage(QQ) {
        let WQ = null;
        try {
          WQ = function(QQ) {
            if ("message" !== QQ.type || QQ.cg !== YX.gc.GameCodeMessage || QQ.payloadKind !== rQ.rc.Msgpack) return null;
            const WQ = (0, uQ.d)(QQ.payload);
            if (null === WQ || "object" !== typeof WQ || "string" !== typeof WQ.messageType) throw new Error("GameCodeMessage without a messageType");
            return WQ
          }(QQ)
        } catch (XQ) {
          this.sessionLive && this.onError(XQ)
        }
        if (WQ) {
          const {
            messageType: QQ,
            data: XQ
          } = WQ;
          if ((0, hQ.f)(QQ)) return void this.guard((() => {
            (0, hQ.c)(QQ, XQ)
          }));
          "freeCamPerms" === QQ && this.freeCam.setGame(XQ) && this.writeFreeCam(), this.sessionLive && this.round(this.receivers, (WQ => {
            WQ.onReceivedMessageFromServer(QQ, XQ)
          }))
        }
      }
      decoded(QQ, WQ) {
        try {
          return QQ(WQ)
        } catch (XQ) {
          return this.onError(XQ), null
        }
      }
      setClientFreeCameraGrant(QQ, WQ) {
        this.freeCam.setClient(QQ, WQ), this.writeFreeCam()
      }
      freeCameraAllowed() {
        return 0 !== this.freeCam.perms()
      }
      setFreeCameraMovesFly(QQ) {
        this.freeCam.setMovesFly(QQ), this.writeFreeCam()
      }
      setBlockHighlight(QQ) {
        this.highlight = QQ, this.highlightOwed = !0, this.writeOwedHighlight()
      }
      writeOwedHighlight() {
        const QQ = this.liveCmd();
        if (null === QQ || !this.highlightOwed) return;
        const WQ = this.highlight;
        this.highlightOwed = null === WQ ? !(0, jQ.Se)(QQ, 0, uw, uw, 0) : !(0, jQ.Se)(QQ, 0, WQ.pos, WQ.normal, 1)
      }
      localPlayerBound(QQ) {
        var WQ, XQ;
        if (0 === this.activeConn || this.sessionLive && QQ === this.boundId) return;
        const wQ = this.sessionLive;
        let qQ, TQ, zQ, sQ;
        this.endSession(), wQ && this.restartGameCamera();
        try {
          var FQ;
          this.session = null;
          const QQ = this.options.sessionInfo(this.activeConn);
          if (this.session = QQ, !QQ) return;
          qQ = QQ.gameNameWithVariation, TQ = null !== (FQ = (0, aQ.Fb)(qQ)) && void 0 !== FQ ? FQ : void 0, zQ = (0, lQ.s)(QQ.lobbyName), sQ = (0, lQ.I)(QQ.lobbyName)
        } catch (DQ) {
          return void this.onError(DQ)
        }
        const PQ = {
          localPlayerId: String(QQ)
        };
        let gQ = {},
          JQ = {};
        try {
          var rQ, IQ;
          gQ = null !== (rQ = null === (IQ = this.options.gameFactory((0, aQ.Mb)(qQ))) || void 0 === IQ ? void 0 : IQ(sQ, zQ, TQ, PQ)) && void 0 !== rQ ? rQ : {}
        } catch (DQ) {
          this.nI(DQ)
        }
        try {
          var jQ, BQ;
          JQ = {
            ...null === (jQ = (BQ = this.options).defaultPlugins) || void 0 === jQ ? void 0 : jQ.call(BQ, sQ, zQ, TQ, PQ),
            ...gQ.plugins
          }
        } catch (DQ) {
          this.nI(DQ)
        }
        const yQ = [gQ, ...Object.values(JQ)];
        this.owners = yQ, this.tickers = yQ.filter((QQ => void 0 !== QQ.fJ)), this.renderers = yQ.filter((QQ => void 0 !== QQ.onAfterRender)), this.receivers = yQ.filter((QQ => void 0 !== QQ.onReceivedMessageFromServer)), this.writeAltVeto(yQ), this.writeHooks(yQ), this.writePublicLobby(sQ), this.writeLocalDbId(null !== (WQ = null === (XQ = this.session) || void 0 === XQ ? void 0 : XQ.playerDbId) && void 0 !== WQ ? WQ : null), this.boundId = QQ, this.sessionLive = !0, this.generation++, null !== this.pendingZoom && this.setCameraZoom(this.pendingZoom), this.highlightOwed ||= null !== this.highlight, this.writeOwedHighlight(), this.round(yQ, (QQ => {
          var WQ;
          null === (WQ = QQ.onCreate) || void 0 === WQ || WQ.call(QQ, this.clientApi)
        }));
        const VQ = this.generation;
        setTimeout((() => {
          VQ === this.generation && !0 === this.tables.getClientOption("creative") && Jw(this.tables)
        }), 0)
      }
      chunkSlot(QQ, WQ, XQ, wQ, qQ, TQ) {
        this.chunks.apply(QQ, WQ, XQ, wQ, qQ, TQ)
      }
      entityAdded(QQ) {
        var WQ;
        this.entityInfo.stale(QQ), null === (WQ = this.options.replayEntities) || void 0 === WQ || WQ.entityAdded(QQ)
      }
      entityInfoChanged(QQ) {
        var WQ;
        this.entityInfo.stale(QQ), null === (WQ = this.options.replayEntities) || void 0 === WQ || WQ.entityInfoChanged(QQ)
      }
      afterPrescan() {
        this.items.refresh(), this.entityInfo.refresh(), this.api.rereadDirectory(), this.chunks.refresh(), this.live.refresh()
      }
      tickEnd() {
        if (this.ticks++, this.tickers.length > 0) {
          const QQ = performance.now();
          this.round(this.tickers, Sw), (0, ww.d)(performance.now() - QQ)
        }
      }
      afterWalk(QQ) {
        this.ackEventOverflow(), this.clientApi.flushOwed(), this.writeOwedHighlight();
        const WQ = this.options.replayEntities;
        WQ && this.guard((() => {
          this.entityInfoWatch.want(eX, WQ.wantsWatch), WQ.flush(this.entityInfoWatch.on)
        }));
        const XQ = this.api.apiView,
          wQ = jQ.x.frameMs(XQ, 0);
        pw.m.frame(wQ, jQ.x.heading(XQ, 0), jQ.x.pitch(XQ, 0), pw.j[QQ]);
        const qQ = (0, ww.h)(QQ, wQ);
        if (null !== qQ) {
          const QQ = this.renderFrame;
          this.guard((() => {
            (0, OX.e)().turnDamageIndicators(QQ.cameraHeading)
          })), this.guard((() => {
            this.clientApi.slideRoute(qQ)
          })), this.round(this.renderers, (WQ => {
            WQ.onAfterRender(qQ, QQ)
          }))
        }
        this.writeFreeCam();
        try {
          this.scriptedCamera.afterFrame(null !== qQ)
        } catch (zQ) {
          this.nI(zQ)
        }
        this.showZoom(), this.items.flush(this.nI), this.writePromptWatch(), this.writeCustomButtons();
        const TQ = this.ticks;
        this.ticks = 0, (0, ww.g)(TQ, QQ, qQ, this.nI)
      }
      entityRemoved(QQ) {
        this.live.despawned(QQ), this.entityInfo.removed(QQ)
      }
      ackEventOverflow() {
        const QQ = this.api.apiView,
          WQ = jQ.x.eventOverflowGen(QQ, 0),
          XQ = WQ - this.overflowGen >>> 0;
        if (0 === XQ && !this.resyncOwed) return;
        this.overflowGen = WQ;
        const wQ = jQ.x.eventOverflowMask(QQ, 0),
          qQ = this.cmd;
        0 === wQ || null === qQ || this.stopped() ? this.resyncOwed = !1 : this.resyncOwed = !(0, jQ.He)(qQ, 0, wQ);
        const TQ = this.options.onEventOverflow;
        0 !== XQ && TQ && this.guard((() => {
          TQ(wQ, XQ)
        }))
      }
      gameCall(QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ, FQ) {
        if (QQ === jQ.yc.Director) try {
          return this.scriptedCamera.call(WQ, XQ, wQ, qQ, TQ, zQ)
        } catch (PQ) {
          return this.nI(PQ), jQ.yb.None
        }
        if (!this.sessionLive || void 0 !== this.fault) return QQ === jQ.yc.AltVeto ? jQ.o.Allow : 0;
        try {
          return this.callGames(QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ)
        } catch (PQ) {
          throw (0, IQ.h)(PQ) && (this.fault = PQ), PQ
        }
      }
      takeFault() {
        const QQ = this.fault;
        return this.fault = void 0, QQ
      }
      callGames(QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ) {
        this.api.rereadDirectory(), this.chunks.touch(), this.items.refresh(), this.live.refresh(), this.entityInfo.inCoreCall();
        const {
          tables: FQ
        } = this.options, PQ = String(this.boundId);
        switch (QQ) {
          case jQ.yc.AltVeto:
          case jQ.yc.AltAction: {
            const sQ = 0 !== zQ,
              [gQ, JQ, rQ] = sQ ? [WQ, XQ, wQ] : [void 0, void 0, void 0],
              IQ = sQ ? FQ.nameOfId(qQ) : "Air",
              BQ = fw(TQ);
            if (QQ === jQ.yc.AltAction) return this.first((QQ => {
              var WQ;
              return null === (WQ = QQ.onPlayerAltAction) || void 0 === WQ ? void 0 : WQ.call(QQ, PQ, gQ, JQ, rQ, IQ, BQ)
            })), 0;
            const yQ = this.first((QQ => {
              var WQ;
              return null === (WQ = QQ.onPlayerAttemptAltAction) || void 0 === WQ ? void 0 : WQ.call(QQ, PQ, gQ, JQ, rQ, IQ, BQ)
            }));
            return "preventAction" === yQ ? jQ.o.Prevent : "preventPlacement" === yQ ? jQ.o.PreventPlacement : jQ.o.Allow
          }
          case jQ.yc.Click: {
            const QQ = sQ,
              gQ = 0 !== (QQ & jQ.$.Alt),
              JQ = 0 !== (QQ & jQ.$.HasPos),
              rQ = JQ ? FQ.nameOfId(qQ) : "Air",
              [IQ, BQ, yQ] = JQ ? [WQ, XQ, wQ] : [null, null, null],
              VQ = fw(TQ),
              DQ = 0 !== (QQ & jQ.$.Up),
              pQ = fw(zQ);
            if (0 === (QQ & jQ.$.AttackOnly) && this.first((QQ => {
                var WQ, XQ;
                return DQ ? null === (WQ = QQ.onPlayerClickUp) || void 0 === WQ ? void 0 : WQ.call(QQ, PQ, gQ, IQ, BQ, yQ, rQ, VQ) : null === (XQ = QQ.onPlayerClick) || void 0 === XQ ? void 0 : XQ.call(QQ, PQ, gQ, IQ, BQ, yQ, rQ, VQ)
              })), !DQ && !gQ && null !== pQ) {
              const QQ = this.clientApi.getPositionView(pQ),
                WQ = QQ ? [QQ[0], QQ[1], QQ[2]] : [0, 0, 0];
              this.first((QQ => {
                var XQ;
                return null === (XQ = QQ.onPlayerAttackEntity) || void 0 === XQ ? void 0 : XQ.call(QQ, PQ, pQ, WQ)
              }))
            }
            return 0
          }
          case jQ.yc.ChangeBlock: {
            const QQ = FQ.nameOfId(qQ),
              zQ = FQ.nameOfId(TQ);
            return this.first((qQ => {
              var TQ;
              return null === (TQ = qQ.onPlayerChangeBlock) || void 0 === TQ ? void 0 : TQ.call(qQ, PQ, WQ, XQ, wQ, QQ, zQ)
            })), 0
          }
          case jQ.yc.DropItem: {
            const QQ = FQ.nameOfId(WQ);
            return this.first((WQ => {
              var qQ;
              return null === (qQ = WQ.onPlayerDropItem) || void 0 === qQ ? void 0 : qQ.call(WQ, PQ, QQ, XQ, wQ)
            })), 0
          }
          default:
            return this.onError(new Error(`Unknown game call kind ${QQ}`)), 0
        }
      }
      changeBlockFail(QQ, WQ, XQ, wQ, qQ, TQ, zQ) {
        const sQ = qQ === jQ.td ? null : Rw.decode(this.api.eventBytes(TQ, Math.min(qQ, zQ)));
        this.failures.push({
          DQ: [QQ, WQ, XQ],
          pQ: wQ,
          GQ: sQ
        })
      }
      changeBlockFailEnd() {
        const QQ = this.failures;
        this.failures = [], this.sessionLive && this.round(this.owners, (WQ => {
          var XQ;
          null === (XQ = WQ.onChangeBlockFail) || void 0 === XQ || XQ.call(WQ, QQ)
        })), this.mB("EditBoard", {
          pos: null
        }), this.mB("EditCodeBlock", {
          pos: null,
          canChangePos: null
        })
      }
      inventoryEvent(QQ, WQ, XQ, wQ, qQ, TQ) {
        QQ === jQ.Xc.ChestOpened ? this.items.chestOpened(XQ, wQ, qQ) : QQ !== jQ.Xc.Synced && QQ !== jQ.Xc.ChestClosed && QQ !== jQ.Xc.ChestRefreshed || this.items.touch(), this.guard((() => {
          ! function(QQ, WQ, XQ, wQ) {
            switch (QQ) {
              case jQ.Xc.Synced:
                zQ.k.mB("syncedInvenFromServer");
                break;
              case jQ.Xc.ChestOpened:
              case jQ.Xc.ChestClosed:
                zQ.k.mB("chestToggleFromServer", QQ === jQ.Xc.ChestOpened, !0);
                break;
              case jQ.Xc.ChestRefreshed:
                zQ.k.mB("chestRefreshedFromServer");
                break;
              case jQ.Xc.EnchantingTable:
                zQ.k.mB("enchantingTable", {
                  ez: wQ,
                  position: XQ
                });
                break;
              case jQ.Xc.HotbarRequest:
                zQ.k.mB("setSelectedInventorySlotI", WQ, !0);
                break;
              case jQ.Xc.Scrolled:
                zQ.k.mB("ScrollInventorySlot", WQ);
                break;
              case jQ.Xc.NumberKey:
                zQ.k.mB("numkeyPressed", WQ + 1);
                break;
              case jQ.Xc.DropRequested:
                zQ.k.mB("DropInvenItem", 0 !== WQ);
                break;
              default:
                throw new IQ.d(`InventoryEvent of no kind: what ${QQ}`)
            }
          }(QQ, WQ, [XQ, wQ, qQ], TQ)
        }))
      }
      heldItemChanged() {
        this.items.touch()
      }
      shotDamage(QQ, WQ, XQ, wQ) {
        this.mB("shotPlayer", {
          playerId: String(QQ),
          damage: WQ,
          wasCrit: 0 !== wQ,
          distance: XQ
        })
      }
      localHurt(QQ, WQ) {
        this.mB("closeShopOnDamaged", null), this.guard((() => {
          zQ.k.mB("damagedByOtherPlayer", {
            jX: null,
            direction: Number.isNaN(WQ) ? null : WQ,
            iQ: QQ
          })
        }))
      }
      attackHit(QQ, WQ, XQ, wQ, qQ) {
        this.guard((() => {
          zQ.k.mB("yourAttackHit", {
            fW: wQ,
            screenPos: this.renderFrame.projectDirectionToScreenPos([QQ, WQ, XQ]),
            hitSelf: qQ
          })
        }))
      }
      physicsType(QQ) {
        this.mB("PlayerPhysicsTypeUpdate", QQ)
      }
      vehicleEffect(QQ, WQ, XQ, wQ, qQ) {
        this.guard((() => {
          QQ === rQ.Md.UPDATE ? (0, cQ.j)(WQ, {
            icon: XQ,
            level: wQ,
            displayName: null,
            durationMs: qQ
          }) : iQ.b.remove(WQ)
        }))
      }
      zoomChanged(QQ) {
        this.zoom = QQ, this.zoomUnshown = !0
      }
      zoomDisabled() {
        this.mB("showBottomMessage", {
          message: "Zoom is disabled",
          timeoutLength: 2e3,
          type: "Error"
        })
      }
      bhopDisabled() {
        this.mB("showBottomMessage", Aw.d)
      }
      showZoom() {
        const QQ = this.scriptedCamera.holdsView();
        !this.zoomUnshown || QQ && this.zoomHeld || (this.zoomUnshown = !1, this.mB("cameraZoomSet", this.zoom)), this.zoomHeld = QQ
      }
      gunHit(QQ) {
        this.guard((() => {
          const {
            jX: WQ,
            BX: XQ
          } = (0, Vw.c)(Dw.q, QQ);
          zQ.k.mB("damagedByOtherPlayer", {
            jX: WQ,
            direction: XQ
          })
        }))
      }
      uiEvent(QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ) {
        this.guard((() => {
          KX(QQ, WQ, [XQ, wQ, qQ], TQ, this.items, this.options.tables, (() => Rw.decode(this.api.eventBytes(zQ, sQ))))
        }))
      }
      writeAltVeto(QQ) {
        const WQ = this.cmd;
        if (!WQ) return;
        let XQ;
        try {
          XQ = function(QQ, WQ) {
            const XQ = new Set;
            let wQ = !1;
            for (const qQ of QQ)
              if (qQ.onPlayerAttemptAltAction) {
                if (wQ = !0, !qQ.altVetoBlocks) return {
                  mode: jQ.se.All,
                  roots: []
                };
                for (const QQ of qQ.altVetoBlocks) XQ.add(WQ.getMetaInfo(QQ).rootId)
              } return wQ ? XQ.size > jQ.jd ? {
              mode: jQ.se.All,
              roots: []
            } : {
              mode: jQ.se.Filter,
              roots: [...XQ]
            } : {
              mode: jQ.se.Off,
              roots: []
            }
          }(QQ, this.options.tables)
        } catch (qQ) {
          this.onError(qQ), XQ = {
            mode: jQ.se.All,
            roots: []
          }
        }
        if (XQ.mode === jQ.se.Off && !this.vetoSet) return;
        const wQ = new Uint8Array(new Uint32Array(XQ.roots).buffer);
        (0, jQ.Lf)(WQ, 0, XQ.mode, XQ.roots.length, wQ) ? this.vetoSet = XQ.mode !== jQ.se.Off: this.onError(new Error("SetAltVeto didn't fit the command ring"))
      }
      endGameGrants() {
        this.freeCam.clearGame(), this.writeFreeCam()
      }
      writeFreeCam() {
        this.stopped() || this.freeCam.write(this.cmd)
      }
      writeHooks(QQ) {
        const WQ = this.cmd;
        if (!WQ) return;
        const XQ = function(QQ) {
          let WQ = 0;
          for (const XQ of QQ) XQ.onPlayerAltAction && (WQ |= 1 << jQ.yc.AltAction), (XQ.onPlayerClick || XQ.onPlayerClickUp || XQ.onPlayerAttackEntity) && (WQ |= 1 << jQ.yc.Click), XQ.onPlayerChangeBlock && (WQ |= 1 << jQ.yc.ChangeBlock), XQ.onPlayerDropItem && (WQ |= 1 << jQ.yc.DropItem);
          return WQ
        }(QQ);
        (0 !== XQ || this.hooksSet) && ((0, jQ.Sf)(WQ, 0, XQ) ? this.hooksSet = 0 !== XQ : this.onError(new Error("SetHooks didn't fit the command ring")))
      }
      writeCustomButtons() {
        const QQ = this.cmd;
        QQ && !this.stopped() && this.customButtons.write(QQ)
      }
      writePromptWatch() {
        const QQ = this.cmd,
          WQ = this.promptWatch;
        WQ !== this.promptWatchSent && QQ && !this.stopped() && (0, jQ.hg)(QQ, 0, Lw[WQ]) && (this.promptWatchSent = WQ)
      }
      writePublicLobby(QQ) {
        const WQ = this.cmd;
        WQ && QQ !== this.writtenPublicLobby && ((0, jQ.ag)(WQ, 0, QQ ? 1 : 0) ? this.writtenPublicLobby = QQ : this.onError(new Error("SetPublicLobby didn't fit the command ring")))
      }
      writeLocalDbId(QQ) {
        const WQ = this.cmd;
        WQ && ((0, jQ.Uf)(WQ, 0, null === QQ ? 0 : 1, null === QQ ? Cw : Ew.encode(QQ)) || this.onError(new Error("SetLocalDbId didn't fit the command ring")))
      }
      first(QQ) {
        const WQ = this.generation;
        for (const wQ of this.owners) {
          if (WQ !== this.generation) break;
          try {
            const WQ = QQ(wQ);
            if (void 0 !== WQ) return WQ
          } catch (XQ) {
            this.nI(XQ)
          }
        }
      }
      mB(QQ, WQ) {
        this.guard((() => {
          zQ.k.mB(QQ, WQ)
        }))
      }
      dropGameCamera() {
        try {
          this.scriptedCamera.reset()
        } catch (QQ) {
          this.nI(QQ)
        }
      }
      restartGameCamera() {
        try {
          this.scriptedCamera.restart()
        } catch (QQ) {
          this.nI(QQ)
        }
      }
      endSession() {
        if (!this.sessionLive) return;
        this.sessionLive = !1;
        const QQ = this.owners;
        let WQ;
        if (this.owners = this.tickers = this.renderers = this.receivers = [], this.generation++, !this.stopped()) try {
          this.writeAltVeto([]), this.writeHooks([]), this.writePublicLobby(!1), this.writeLocalDbId(null)
        } catch (wQ) {
          WQ = wQ
        }
        try {
          this.entityInfo.sessionEnded()
        } catch (wQ) {
          WQ ??= wQ
        }
        this.round(QQ, tw, !0);
        try {
          this.particles.sessionEnded() || this.onError(new Error("ParticleStopAll didn't fit the command ring"))
        } catch (wQ) {
          WQ ??= wQ
        }
        try {
          this.clientApi.disposeGameOutput()
        } catch (wQ) {
          WQ ??= wQ
        }
        const XQ = this.options.onSessionEnd;
        if (XQ) try {
          XQ()
        } catch (wQ) {
          this.onError(wQ)
        }
        void 0 !== WQ && this.nI(WQ)
      }
      round(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const wQ = this.generation;
        for (const TQ of QQ) {
          if (wQ !== this.generation) break;
          try {
            WQ(TQ)
          } catch (qQ) {
            XQ ? this.onError(qQ) : this.nI(qQ)
          }
        }
      }
      guard(QQ) {
        try {
          QQ()
        } catch (WQ) {
          this.nI(WQ)
        }
      }
    }

    function fw(QQ) {
      return QQ === jQ.wd ? null : String(QQ)
    }

    function Sw(QQ) {
      QQ.fJ(rQ.Id)
    }

    function tw(QQ) {
      var WQ;
      null === (WQ = QQ.onClose) || void 0 === WQ || WQ.call(QQ)
    }

    function ow(QQ, WQ) {
      QQ.watch((() => {
        const XQ = function(QQ) {
          const WQ = [],
            XQ = Math.min(qw, QQ.length);
          for (let qQ = 0; qQ < XQ; qQ++) {
            var wQ;
            const XQ = null === (wQ = QQ.slot(qQ)) || void 0 === wQ ? void 0 : wQ.typeObj,
              TQ = XQ ? (0, Xw.gunTypeOf)(XQ.id) : void 0;
            void 0 !== TQ && WQ.push(pW[TQ])
          }
          return WQ
        }(QQ);
        XQ.length > 0 && (WQ.preload(XQ), WQ.preload([GW]))
      }))
    }
    var ew = XQ(36750),
      nw = XQ(5212),
      xw = XQ(37049),
      Yw = XQ(37081);

    function Nw(QQ) {
      const WQ = (0, ew.countDecodesAs)(new nw.Howl({
          ...(0, xw.h)(QQ),
          pool: 15,
          preload: !1
        }), "sheet"),
        XQ = WQ.load.bind(WQ);
      return WQ.load = () => (WQ._preload = !0, (0, Yw.e)(QQ), XQ()), WQ
    }

    function Zw(QQ, WQ, XQ) {
      const wQ = QQ.listener;
      if (wQ.positionX) Ow(wQ.positionX, WQ, XQ, 0), Ow(wQ.positionY, WQ, XQ, 1), Ow(wQ.positionZ, WQ, XQ, 2), Ow(wQ.forwardX, WQ, XQ, 3), Ow(wQ.forwardY, WQ, XQ, 4), Ow(wQ.forwardZ, WQ, XQ, 5), Ow(wQ.upX, WQ, XQ, 6), Ow(wQ.upY, WQ, XQ, 7), Ow(wQ.upZ, WQ, XQ, 8);
      else {
        let QQ = !1;
        for (let wQ = 0; wQ < 9; wQ++) QQ ||= WQ[wQ] !== XQ[wQ];
        QQ && (wQ.setPosition(WQ[0], WQ[1], WQ[2]), wQ.setOrientation(WQ[3], WQ[4], WQ[5], WQ[6], WQ[7], WQ[8]), XQ.set(WQ))
      }
    }

    function Ow(QQ, WQ, XQ, wQ) {
      WQ[wQ] !== XQ[wQ] && (QQ.value = WQ[wQ], XQ[wQ] = WQ[wQ])
    }
    class Kw {
      constructor() {
        this.pose = new Float64Array(9), this.written = new Float64Array(9).fill(Number.NaN), this.watchedCtx = void 0
      }
      apply(QQ) {
        this.pose.set(QQ);
        const WQ = nw.Howler.ctx;
        return !!WQ && (WQ !== this.watchedCtx && (this.watchedCtx = WQ, this.written.fill(Number.NaN), WQ.addEventListener("statechange", (() => {
          "running" === WQ.state && Zw(WQ, this.pose, this.written)
        }))), "running" === WQ.state && Zw(WQ, QQ, this.written), !0)
      }
    }
    var mw = XQ(36864),
      Mw = XQ(39489);
    let Qq = null,
      Wq = null;

    function Xq() {
      return null === Qq && (Qq = document.createElement("div"), Qq.className = "WasmCameraLayer", Qq.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;pointer-events:none", document.body.append(Qq)), Qq
    }

    function wq() {
      return Wq ??= new Mw.c(new mw.d(Xq)), Wq
    }

    function qq() {
      var QQ;
      null === (QQ = Wq) || void 0 === QQ || QQ.clear(), Tq(null)
    }

    function Tq(QQ) {
      wQ.b.get("scriptedCameraFacing") !== QQ && wQ.b.set({
        scriptedCameraFacing: QQ
      })
    }
    var zq = XQ(9679),
      sq = XQ(9634),
      Fq = XQ(39527),
      Pq = XQ(41245),
      gq = XQ(3555);
    const Jq = Object.entries(jQ.wc).reduce(((QQ, WQ) => {
      let [XQ, wQ] = WQ;
      return QQ[wQ] = XQ, QQ
    }), []);

    function rq(QQ, WQ) {
      var XQ;
      return 0 !== ((null !== (XQ = QQ.itemFlags[WQ]) && void 0 !== XQ ? XQ : 0) & jQ.$c.Stackable)
    }
    const Iq = /^(0|[1-9][0-9]*)$/,
      jq = {
        displayName: (QQ, WQ) => (0, Xw.displayNameOf)(WQ),
        description: (QQ, WQ) => (0, Xw.descriptionOf)(WQ),
        type: (QQ, WQ) => (0, Xw.itemTypeOf)(WQ),
        clipSize: (QQ, WQ) => (0, Xw.clipSizeOf)(WQ),
        armourReduction: (QQ, WQ) => (0, Xw.armourReductionOf)(WQ),
        scopeType: (QQ, WQ) => (0, Xw.scopeTypeOf)(WQ),
        stackable: rq,
        harvestType: (QQ, WQ) => Jq[QQ.blockHarvestTypes[WQ]],
        harvestLevel: (QQ, WQ) => {
          const XQ = QQ.blockHarvestLevels[WQ];
          return XQ === jQ.ed ? void 0 : XQ
        },
        harvests: (QQ, WQ) => {
          var XQ;
          const wQ = null !== (XQ = QQ.itemHarvests[WQ]) && void 0 !== XQ ? XQ : 0;
          return 0 !== wQ ? Jq[wQ] : void 0 === (0, Xw.harvestsNullLevelOf)(WQ) ? void 0 : null
        },
        level: (QQ, WQ) => {
          var XQ, wQ;
          const qQ = null !== (XQ = QQ.itemLevels[WQ]) && void 0 !== XQ ? XQ : jQ.ed;
          return qQ !== jQ.ed ? qQ : null !== (wQ = (0, Xw.harvestsNullLevelOf)(WQ)) && void 0 !== wQ ? wQ : void 0
        }
      };

    function Bq(QQ, WQ, XQ) {
      return Vq(new Uint8Array(Math.floor(QQ.length / WQ)), QQ, WQ, XQ)
    }

    function yq(QQ, WQ, XQ) {
      return Vq(new Uint16Array(Math.floor(QQ.length / WQ)), QQ, WQ, XQ)
    }

    function Vq(QQ, WQ, XQ, wQ) {
      const qQ = new DataView(WQ.buffer, WQ.byteOffset, WQ.byteLength);
      for (let TQ = 0; TQ < QQ.length; TQ++) QQ[TQ] = wQ(qQ, TQ * XQ);
      return QQ
    }
    class Dq {
      constructor(QQ, WQ) {
        this.options = WQ, this.metas = [], this.types = new Map, this.props = void 0, this.rootIdOf = QQ => {
          const WQ = this.idOf(QQ);
          if (void 0 === WQ) throw new Error(`No item is named ${QQ}, an item's root`);
          return WQ
        };
        const XQ = WQ => {
            const XQ = WQ();
            return new Uint8Array(QQ.memory().buffer, QQ.scratch(), XQ).slice()
          },
          wQ = (new TextDecoder).decode(XQ((() => QQ.queries.itemNames()))).split("\n"),
          qQ = XQ((() => QQ.queries.blockProps())),
          TQ = XQ((() => QQ.queries.itemProps()));
        this.props = {
          blockFlags: Bq(qQ, jQ.F.BYTES, jQ.F.flags),
          blockHarvestTypes: Bq(qQ, jQ.F.BYTES, jQ.F.harvestType),
          blockHarvestLevels: Bq(qQ, jQ.F.BYTES, jQ.F.harvestLevel),
          blockAttachedTops: yq(qQ, jQ.F.BYTES, jQ.F.attachedTop),
          itemFlags: Bq(TQ, jQ.dd.BYTES, jQ.dd.flags),
          itemHarvests: Bq(TQ, jQ.dd.BYTES, jQ.dd.harvests),
          itemLevels: Bq(TQ, jQ.dd.BYTES, jQ.dd.level)
        }, (0, gq.i)(Object.freeze(wQ)), (0, Pq.e)()
      }
      idOf(QQ) {
        if ("number" === typeof QQ) return void 0 === (0, gq.e)(QQ) ? void 0 : QQ;
        const WQ = (0, gq.c)(QQ);
        return void 0 === WQ && Iq.test(QQ) ? void 0 === (0, gq.e)(+QQ) ? void 0 : +QQ : WQ
      }
      getMetaInfo(QQ) {
        if (!QQ || QQ === zq.b) return zq.c;
        const WQ = this.idOf(QQ);
        if (void 0 === WQ) throw new Error(`Item ${QQ} not found in registry`);
        return this.metaOf(WQ)
      }
      blockRootId(QQ) {
        return 0 !== QQ && void 0 !== (0, gq.e)(QQ) ? this.metaOf(QQ).rootId : QQ
      }
      metaOf(QQ) {
        return this.metas[QQ] ??= (0, sq.j)((0, gq.e)(QQ), QQ, this.rootIdOf, (0, Xw.rootMetaDescOf)(QQ))
      }
      getItemId(QQ) {
        if (!QQ || QQ === zq.b) return 0;
        const WQ = this.idOf(QQ);
        if (void 0 === WQ) throw new Error(`Invalid block name. You sent ${QQ}. The only valid item names are 'Air' and those contained within the blockMetadata/itemMetadata files`);
        return WQ
      }
      getItemName(QQ) {
        if (!QQ || QQ === zq.b) return zq.b;
        const WQ = this.idOf(QQ);
        if (void 0 === WQ) throw new Error(`Item ${QQ} not found in registry`);
        return (0, gq.e)(WQ)
      }
      blockNameToBlockId(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (QQ === zq.b) return 0;
        let XQ = this.idOf(QQ);
        if (void 0 === XQ || !this.isBlockId(XQ)) {
          const WQ = QQ.indexOf("|"),
            wQ = WQ > 0 ? (0, gq.c)(QQ.slice(0, WQ)) : void 0;
          XQ = void 0 !== wQ && this.isBlockId(wQ) && (0, Xw.rootMetaDescOf)(wQ) === QQ ? wQ : void 0
        }
        if (void 0 !== XQ) return XQ;
        if (!WQ) throw new Error(`Invalid block name. You sent ${QQ}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`);
        return null
      }
      isBlockId(QQ) {
        return QQ > 0 && QQ < this.props.blockFlags.length
      }
      nameOfId(QQ) {
        return 0 !== QQ && (0, gq.e)(QQ) || zq.b
      }
      itemType(QQ) {
        const WQ = QQ ? this.idOf(QQ) : void 0;
        if (!WQ) return null;
        let XQ = this.types.get(WQ);
        return void 0 === XQ && (XQ = Object.freeze({
          id: WQ,
          name: (0, gq.e)(WQ),
          meta: this.getMetaInfo(WQ),
          stackable: rq(this.props, WQ),
          type: (0, Xw.itemTypeNameOf)(WQ),
          clipSize: (0, Xw.clipSizeOf)(WQ),
          scopeType: (0, Xw.scopeTypeOf)(WQ),
          showsAimingUi: (0, Xw.showsAimingUi)(WQ)
        }), this.types.set(WQ, XQ)), XQ
      }
      getItemStat(QQ, WQ) {
        if (Fq.e.has(WQ)) {
          const XQ = "minChargeStateToUse" === WQ ? this.getMetaInfo(QQ).rootName : this.getItemName(QQ),
            wQ = this.options.get((0, Fq.f)(XQ, WQ));
          if (null !== wQ && void 0 !== wQ) return wQ
        }
        return this.defaultStat(QQ, WQ, this.statOf(WQ))
      }
      getDisplayName(QQ) {
        return this.getItemStat(QQ, "displayName")
      }
      getDefaultItemStat(QQ, WQ) {
        return this.defaultStat(QQ, WQ, this.statOf(WQ))
      }
      statOf(QQ) {
        const WQ = jq[QQ];
        return void 0 === WQ && function(QQ, WQ) {
          throw new Error(`ClientApi.${QQ} is not available yet in the wasm client (${WQ})`)
        }(`getItemStat("${QQ}")`, `a table of the stat: the wasm client answers ${Object.keys(jq).join(", ")}`), WQ
      }
      defaultStat(QQ, WQ, XQ) {
        const wQ = this.idOf(QQ),
          qQ = void 0 === wQ ? void 0 : XQ(this.props, wQ);
        return null !== qQ && void 0 !== qQ || "displayName" !== WQ ? qQ : this.getItemName(QQ)
      }
      getClientOption(QQ) {
        return this.options.get(QQ)
      }
      getGunStats(QQ) {
        return this.getClientOption(`${QQ}GunStats`)
      }
      watchClientOption(QQ, WQ) {
        return this.options.subscribe(QQ, WQ)
      }
      isSolidBlockId(QQ) {
        var WQ;
        return 0 !== ((null !== (WQ = this.props.blockFlags[QQ]) && void 0 !== WQ ? WQ : 0) & jQ.C.Solid)
      }
      isStackableId(QQ) {
        return rq(this.props, QQ)
      }
      isFluidBlockId(QQ) {
        var WQ;
        return 0 !== ((null !== (WQ = this.props.blockFlags[QQ]) && void 0 !== WQ ? WQ : 0) & jQ.C.Fluid)
      }
      canPlaceOverBlockId(QQ) {
        var WQ;
        return 0 !== ((null !== (WQ = this.props.blockFlags[QQ]) && void 0 !== WQ ? WQ : 0) & jQ.C.PlaceOver)
      }
      attachedTopOf(QQ) {
        var WQ;
        return null !== (WQ = this.props.blockAttachedTops[QQ]) && void 0 !== WQ ? WQ : 0
      }
      isDroplessBlockId(QQ) {
        return (0, Xw.dropsNothing)(QQ)
      }
    }

    function pq(QQ, WQ) {
      const XQ = new Map;
      return (wQ, qQ) => {
        const TQ = WQ.idOf(wQ),
          zQ = void 0 === TQ ? null : (wQ => {
            let qQ = XQ.get(wQ);
            if (void 0 === qQ) {
              const TQ = QQ.queries.salvageRecipe(wQ),
                zQ = new DataView(QQ.memory().buffer, QQ.scratch(), TQ),
                sQ = [];
              for (let QQ = 0; QQ + jQ.ke.BYTES <= TQ; QQ += jQ.ke.BYTES) sQ.push(Object.freeze({
                item: WQ.nameOfId(jQ.ke.item(zQ, QQ)),
                amt: jQ.ke.amount(zQ, QQ)
              }));
              qQ = 0 === sQ.length ? null : Object.freeze(sQ), XQ.set(wQ, qQ)
            }
            return qQ
          })(TQ);
        if (null === zQ || void 0 === qQ) return zQ;
        const sQ = qQ <= 0 ? 1 : qQ;
        return zQ.map((QQ => {
          let {
            item: WQ,
            amt: XQ
          } = QQ;
          return {
            item: WQ,
            amt: XQ * sQ
          }
        }))
      }
    }
    var Gq = XQ(40984),
      Uq = XQ(37229),
      bq = XQ(37219),
      vq = XQ(37221),
      dq = XQ(36809),
      Hq = XQ(40902),
      aq = XQ(42867);
    const lq = -1,
      hq = new Uint8Array(0),
      iq = new TextEncoder;

    function cq(QQ) {
      if (null === QQ) return null;
      const WQ = iq.encode(QQ);
      return WQ.byteLength < rQ.Qc ? WQ : WQ.subarray(0, rQ.Qc - 1)
    }
    class Aq {
      constructor(QQ) {
        this.deps = QQ, this.lastView = null, this.lastKeyframes = [], this.keyframesVersion = lq, this.keyframesSettled = !1, this.reloadFrom = lq
      }
      reloadKeyframes() {
        var QQ, WQ;
        this.keyframesVersion = lq, this.reloadFrom = null !== (QQ = null === (WQ = this.view()) || void 0 === WQ ? void 0 : WQ.version) && void 0 !== QQ ? QQ : lq
      }
      setPlayback(QQ) {
        const WQ = 1 === this.deps.core.mqQ(QQ);
        return WQ && (this.lastView = null, this.lastKeyframes = [], this.keyframesVersion = lq, this.reloadFrom = lq), WQ
      }
      async open(QQ, WQ) {
        const XQ = await this.deps.replay.open(QQ, WQ);
        return "opening" === XQ && (this.reloadKeyframes(), this.deps.recorder.prefetch()), XQ
      }
      play() {
        this.deps.replay.play()
      }
      pause() {
        this.deps.replay.pause()
      }
      seek(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.deps.replay.seek(Math.max(0, Math.floor(QQ)), WQ)
      }
      setSpeed(QQ) {
        this.deps.replay.setSpeed(QQ)
      }
      setCameraMode(QQ) {
        this.deps.replay.setCameraMode(aq.e.indexOf(QQ))
      }
      view() {
        var QQ;
        const WQ = jQ.x.replayViewPtr(this.deps.apiView(), 0);
        if (0 === WQ) return this.lastView = null, null;
        const XQ = new DataView(this.deps.buffer(), WQ, jQ.he.BYTES),
          wQ = jQ.he.version(XQ, 0),
          qQ = this.lastView;
        if (null !== qQ && qQ.version === wQ) return qQ;
        const TQ = jQ.he.markIn(XQ, 0),
          zQ = {
            version: wQ,
            state: jQ.he.state(XQ, 0),
            cameraMode: null !== (QQ = aq.e[jQ.he.cameraMode(XQ, 0)]) && void 0 !== QQ ? QQ : "recording",
            fJ: jQ.he.fJ(XQ, 0),
            totalTicks: jQ.he.totalTicks(XQ, 0),
            speed: jQ.he.speed(XQ, 0),
            mark: TQ === jQ.ee ? null : {
              inTick: TQ,
              outTick: jQ.he.markOut(XQ, 0)
            },
            editVersion: jQ.he.editVersion(XQ, 0)
          };
        return this.lastView = zQ, zQ
      }
      keyframes() {
        const QQ = this.view();
        if (null === QQ) return [];
        QQ.version !== this.reloadFrom && (this.reloadFrom = lq);
        const WQ = this.reloadFrom === lq && QQ.state !== rQ.td.Cropping && QQ.state !== rQ.td.None,
          XQ = WQ ? QQ.editVersion : QQ.version;
        if (XQ === this.keyframesVersion && WQ === this.keyframesSettled) return this.lastKeyframes;
        const {
          core: wQ
        } = this.deps, qQ = wQ.MqQ(), TQ = wQ.Ly(), zQ = [];
        if (0 !== TQ && qQ > 0) {
          const QQ = new DataView(this.deps.buffer(), TQ, qQ * rQ.Fc);
          for (let WQ = 0; WQ < qQ; WQ++) {
            const XQ = WQ * rQ.Fc,
              wQ = WQ => QQ.getFloat64(XQ + WQ, !0);
            zQ.push({
              fJ: QQ.getUint32(XQ + rQ.Pc, !0),
              position: [wQ(rQ.Lc), wQ(rQ.Lc + 8), wQ(rQ.Lc + 16)],
              direction: [wQ(rQ.Gc), wQ(rQ.Gc + 8), wQ(rQ.Gc + 16)],
              easing: [wQ(rQ.Jc), wQ(rQ.Jc + 8), wQ(rQ.Jc + 16), wQ(rQ.Jc + 24)]
            })
          }
        }
        return this.keyframesVersion = XQ, this.keyframesSettled = WQ, this.lastKeyframes = zQ, zQ
      }
      addKeyframe() {
        const QQ = this.deps.apiView(),
          WQ = [jQ.x.eye(QQ, 0, 0), jQ.x.eye(QQ, 0, 1), jQ.x.eye(QQ, 0, 2)];
        return this.deps.replay.addKeyframe(WQ, function(QQ, WQ) {
          const XQ = Math.cos(WQ);
          return [XQ * Math.sin(QQ), -Math.sin(WQ), XQ * Math.cos(QQ)]
        }(jQ.x.heading(QQ, 0), jQ.x.pitch(QQ, 0)))
      }
      setKeyframe(QQ) {
        return this.deps.replay.setKeyframe(QQ.fJ, Float64Array.from([...QQ.position, ...QQ.direction, ...QQ.easing]))
      }
      moveKeyframe(QQ, WQ) {
        return this.deps.replay.moveKeyframe(QQ, WQ)
      }
      deleteKeyframes(QQ, WQ) {
        return this.deps.replay.deleteKeyframes(QQ, WQ)
      }
      setMark(QQ) {
        var WQ, XQ;
        return this.deps.replay.setMark(null !== (WQ = null === QQ || void 0 === QQ ? void 0 : QQ.inTick) && void 0 !== WQ ? WQ : -1, null !== (XQ = null === QQ || void 0 === QQ ? void 0 : QQ.outTick) && void 0 !== XQ ? XQ : -1)
      }
      crop(QQ, WQ) {
        const XQ = this.deps.replay.crop(QQ, WQ);
        return XQ && this.reloadKeyframes(), XQ
      }
      save(QQ) {
        return this.deps.replay.askSave(), this.deps.recorder.saveEdited(QQ)
      }
      recorderControl(QQ) {
        this.deps.recorder.control(QQ)
      }
      recorderPrefs(QQ, WQ) {
        this.deps.recorder.prefs(QQ, WQ)
      }
      recorderOption(QQ, WQ) {
        const XQ = this.deps.cmd();
        return null !== XQ && (0, jQ.Cf)(XQ, 0, QQ, null === WQ ? hq : iq.encode(WQ))
      }
      recordFlyingText(QQ, WQ, XQ, wQ) {
        const qQ = this.deps.cmd(),
          TQ = Math.max(0, Math.min(4294967295, Math.round(wQ)));
        return null !== qQ && (0, jQ.wf)(qQ, 0, WQ, XQ, TQ, iq.encode(QQ))
      }
      recordPlayerKilled(QQ, WQ, XQ, wQ) {
        const qQ = this.deps.cmd();
        return null !== qQ && (0, jQ.Ef)(qQ, 0, QQ, WQ, Math.max(0, XQ), iq.encode(wQ))
      }
      recordKillfeed(QQ, WQ, XQ) {
        var wQ, qQ;
        const TQ = this.deps.cmd(),
          zQ = function(QQ) {
            const WQ = QQ.reduce(((QQ, WQ) => {
                var XQ;
                return QQ + YX.ub + (null !== (XQ = null === WQ || void 0 === WQ ? void 0 : WQ.byteLength) && void 0 !== XQ ? XQ : 0)
              }), 0),
              XQ = new Uint8Array(WQ),
              wQ = new DataView(XQ.buffer);
            let qQ = 0;
            for (const zQ of QQ) {
              var TQ;
              wQ.setUint16(qQ, null !== (TQ = null === zQ || void 0 === zQ ? void 0 : zQ.byteLength) && void 0 !== TQ ? TQ : rQ.Qc, !0), qQ += YX.ub, null !== zQ && (XQ.set(zQ, qQ), qQ += zQ.byteLength)
            }
            return XQ
          }([cq(QQ.name), cq(QQ.colour), cq(WQ.name), cq(WQ.colour), cq(XQ)]);
        return null !== TQ && (0, jQ.zf)(TQ, 0, null !== (wQ = QQ.id) && void 0 !== wQ ? wQ : jQ.xd, null !== (qQ = WQ.id) && void 0 !== qQ ? qQ : jQ.xd, zQ)
      }
      recorderSession(QQ, WQ) {
        this.deps.recorder.session({
          session: WQ,
          lobbyType: QQ.lobbyType,
          game: QQ.gameNameWithVariation,
          lobby: QQ.lobbyName
        })
      }
      recorderClose() {
        this.deps.core.QTQ()
      }
      filePartDone(QQ, WQ) {
        this.deps.recorder.filePartDone(QQ, WQ)
      }
      fileDone(QQ) {
        this.deps.recorder.fileDone(QQ)
      }
    }
    const Rq = -2147483648;
    class Eq {
      constructor(QQ) {
        var WQ;
        this.deps = QQ, this.state = {
          recording: !1,
          clipping: !1,
          hasClipBuffer: !1,
          seconds: 0
        }, this.recordingSince = null, this.clipTickPending = !1, this.now = void 0, this.now = null !== (WQ = QQ.now) && void 0 !== WQ ? WQ : () => performance.now()
      }
      get current() {
        return this.state
      }
      get live() {
        var QQ, WQ, XQ;
        return null === (QQ = null === (WQ = (XQ = this.deps).live) || void 0 === WQ ? void 0 : WQ.call(XQ)) || void 0 === QQ || QQ
      }
      activated(QQ) {
        var WQ, XQ;
        this.live && (this.viewerShown(!0 === (null === (WQ = (XQ = this.deps).viewerOpen) || void 0 === WQ ? void 0 : WQ.call(XQ))), this.deps.client.recorderSession(QQ, (0, aq.i)()))
      }
      closed() {
        this.deps.client.recorderClose()
      }
      toggleRecording() {
        var QQ, WQ;
        this.live && (this.state.recording || !0 !== (null === (QQ = (WQ = this.deps).viewerOpen) || void 0 === QQ ? void 0 : QQ.call(WQ))) ? this.deps.client.recorderControl(rQ.ad.ToggleRecording) : this.deps.notify(vq.b.closeViewerFirst)
      }
      saveClip() {
        this.live ? this.deps.client.recorderControl(rQ.ad.SaveClip) : this.deps.notify(vq.b.clippingNotOn)
      }
      viewerShown(QQ) {
        this.live && this.deps.client.recorderControl(QQ ? rQ.ad.ViewerOpened : rQ.ad.ViewerClosed)
      }
      setPrefs(QQ, WQ) {
        this.live && this.deps.client.recorderPrefs(QQ, WQ)
      }
      setOption(QQ, WQ) {
        this.live && this.deps.client.recorderOption(QQ, WQ)
      }
      recordFlyingText(QQ, WQ, XQ, wQ) {
        this.live && this.deps.client.recordFlyingText(QQ, WQ, XQ, wQ)
      }
      recordPlayerKilled(QQ, WQ, XQ, wQ) {
        this.live && this.deps.client.recordPlayerKilled(QQ, WQ, XQ, wQ)
      }
      recordKillfeed(QQ, WQ, XQ) {
        this.live && this.deps.client.recordKillfeed(QQ, WQ, XQ)
      }
      fJ() {
        let QQ = this.state;
        if (this.clipTickPending && (this.clipTickPending = !1, QQ = {
            ...QQ,
            hasClipBuffer: !0
          }), null !== this.recordingSince) {
          const WQ = Math.floor((this.now() - this.recordingSince) / 1e3);
          WQ !== QQ.seconds && (QQ = {
            ...QQ,
            seconds: WQ
          })
        }
        this.set(QQ)
      }
      onEvent(QQ) {
        var WQ, XQ;
        const {
          notify: wQ
        } = this.deps, qQ = vq.b;
        switch (QQ.what) {
          case rQ.Yc.RecordingStarted:
            this.recordingSince = this.now(), this.set({
              ...this.state,
              recording: !0,
              seconds: 0
            }), wQ(qQ.recordingStarted);
            break;
          case rQ.Yc.RecordingStopped:
            this.stopRecording(), wQ(qQ.recordingStopped), this.saveState(rQ.md.Recording, "saving");
            break;
          case rQ.Yc.RecordingDiscarded:
            this.stopRecording(), wQ(qQ.recordingDiscarded);
            break;
          case rQ.Yc.RecordingTurnedOff:
            this.stopRecording(), wQ(qQ.recordingTurnedOff);
            break;
          case rQ.Yc.LimitReached:
            wQ(qQ.limitReached);
            break;
          case rQ.Yc.ClipSaved:
            this.saveState(rQ.md.Clip, "saving");
            break;
          case rQ.Yc.ClipEmpty:
            wQ(qQ.clipEmpty);
            break;
          case rQ.Yc.ClippingNotOn:
            wQ(qQ.clippingNotOn);
            break;
          case rQ.Yc.Disallowed:
            wQ(qQ.disallowed);
            break;
          case rQ.Yc.ClippingOn:
            this.clipTickPending = !0, this.set({
              ...this.state,
              clipping: !0,
              hasClipBuffer: !1
            });
            break;
          case rQ.Yc.ClippingOff:
            this.clipTickPending = !1, this.set({
              ...this.state,
              clipping: !1,
              hasClipBuffer: !1
            });
            break;
          case rQ.Yc.ClipSettingsChanged:
            this.clipTickPending = this.state.clipping, this.set({
              ...this.state,
              hasClipBuffer: !1
            });
            break;
          case rQ.Yc.SaveBusy:
            null === (WQ = (XQ = this.deps).onSaveState) || void 0 === WQ || WQ.call(XQ, QQ.kind, "busy"), wQ(qQ.saveBusy);
            break;
          case rQ.Yc.CloseViewerFirst:
            wQ(qQ.closeViewerFirst)
        }
      }
      fileReady(QQ, WQ) {
        this.deps.download(WQ), this.saveState(QQ, "done"), this.deps.notify(QQ === rQ.md.Clip ? vq.b.clipSaved : vq.b.recordingSaved)
      }
      failed(QQ) {
        this.saveState(QQ, "failed"), this.deps.notify(QQ === rQ.md.Clip ? vq.b.clipFailed : vq.b.recordingFailed)
      }
      stopRecording() {
        this.recordingSince = null, this.set({
          ...this.state,
          recording: !1,
          seconds: 0
        })
      }
      saveState(QQ, WQ) {
        var XQ, wQ;
        null === (XQ = (wQ = this.deps).onSaveState) || void 0 === XQ || XQ.call(wQ, QQ, WQ)
      }
      set(QQ) {
        QQ !== this.state && (this.state = QQ, this.deps.onState(QQ))
      }
    }
    const Cq = new TextDecoder;

    function uq(QQ, WQ, XQ, wQ) {
      const qQ = [];
      for (let TQ = 0; TQ < wQ; TQ++) {
        if (WQ + YX.ub > XQ) return null;
        const wQ = QQ.getUint16(WQ, !0);
        if (WQ += YX.ub, wQ !== rQ.Qc) {
          if (WQ + wQ > XQ) return null;
          qQ.push(Cq.decode(new Uint8Array(QQ.buffer, QQ.byteOffset + WQ, wQ))), WQ += wQ
        } else qQ.push(null)
      }
      return WQ === XQ ? qQ : null
    }

    function Lq(QQ, WQ) {
      let XQ = new DataView(new ArrayBuffer(0)),
        wQ = !0;
      const qQ = {
        replayFailed: (WQ, XQ, wQ) => {
          QQ.replayFailed({
            reason: WQ,
            code: XQ,
            version: wQ
          })
        },
        replayOption: (WQ, qQ, TQ, zQ) => {
          const sQ = function(QQ, WQ, XQ, wQ) {
            switch (WQ) {
              case rQ.od.Cleared:
                return 0 === wQ ? null : void 0;
              case rQ.od.Text:
                return Cq.decode(new Uint8Array(QQ.buffer, QQ.byteOffset + XQ, wQ));
              case rQ.od.Int:
                return wQ === Int32Array.BYTES_PER_ELEMENT ? QQ.getInt32(XQ, !0) : void 0;
              case rQ.od.Double:
                return wQ === Float64Array.BYTES_PER_ELEMENT ? QQ.getFloat64(XQ, !0) : void 0;
              default:
                return
            }
          }(XQ, qQ, TQ, zQ);
          void 0 !== sQ ? QQ.replayOption({
            key: WQ,
            value: sQ
          }) : wQ = !1
        },
        replayUiEvent: (WQ, qQ, TQ, zQ, sQ, FQ) => {
          const PQ = function(QQ, WQ, XQ, wQ, qQ, TQ, zQ) {
            const sQ = TQ + zQ;
            switch (WQ) {
              case rQ.rd.FlyingText: {
                const zQ = uq(QQ, TQ, sQ, 1);
                return null !== zQ && null !== zQ[0] ? {
                  what: WQ,
                  hT: XQ,
                  lT: wQ,
                  angle: qQ,
                  contentJson: zQ[0]
                } : null
              }
              case rQ.rd.PlayerKilled: {
                const wQ = uq(QQ, TQ, sQ, 3);
                return wQ ? {
                  what: WQ,
                  killstreak: XQ,
                  dead: wQ[0],
                  killer: wQ[1],
                  withItem: wQ[2]
                } : null
              }
              case rQ.rd.Killfeed: {
                const XQ = uq(QQ, TQ, sQ, 7);
                return XQ ? {
                  what: WQ,
                  killerId: XQ[0],
                  killerName: XQ[1],
                  killerColour: XQ[2],
                  victimId: XQ[3],
                  victimName: XQ[4],
                  victimColour: XQ[5],
                  withItem: XQ[6]
                } : null
              }
              default:
                return null
            }
          }(XQ, WQ, qQ, TQ, zQ, sQ, FQ);
          null !== PQ ? QQ.replayUiEvent(PQ) : wQ = !1
        },
        replayFilePart: (XQ, qQ, TQ, zQ) => {
          const sQ = WQ();
          TQ + zQ > sQ.byteLength ? wQ = !1 : QQ.filePart(XQ, qQ, new Uint8Array(sQ, TQ, zQ).slice())
        },
        replayFileReady: (WQ, XQ, wQ, qQ) => {
          QQ.fileReady({
            save: WQ,
            kind: XQ,
            parts: wQ,
            bytes: qQ
          })
        },
        recorderEvent: (WQ, XQ, wQ) => {
          QQ.recorderEvent({
            what: WQ,
            kind: XQ,
            save: wQ
          })
        },
        replayOpened: (WQ, wQ, qQ) => {
          QQ.replayOpened(Cq.decode(new Uint8Array(XQ.buffer, XQ.byteOffset + wQ, qQ)))
        }
      };
      return (QQ, WQ, TQ, zQ) => !(QQ < rQ.Z.ReplayFailed || QQ > rQ.Z.RecorderEvent) && (XQ = WQ, wQ = !0, (0, jQ.we)(QQ, WQ, TQ, zQ, qQ) && wQ)
    }

    function kq(QQ) {
      let WQ = null;
      const XQ = Lq(QQ, (() => {
        if (null === WQ) throw new Error("a recorder event read outside recorderEventReader's call");
        return WQ.buffer
      }));
      return (QQ, wQ) => {
        WQ = wQ;
        try {
          ! function(QQ, WQ) {
            const XQ = QQ.slice(),
              wQ = new DataView(XQ.buffer);
            for (let qQ = 0; qQ < XQ.byteLength;) {
              if (qQ + rQ.V > XQ.byteLength) throw new Error(`the recorder module's events end mid-head at ${qQ}`);
              const QQ = wQ.getUint32(qQ, !0),
                TQ = 65535 & QQ,
                zQ = QQ >>> 16,
                sQ = qQ + rQ.V;
              if (sQ + zQ > XQ.byteLength || !WQ(TQ, wQ, sQ, zQ)) throw new Error(`the recorder module wrote a malformed event ${TQ} (${zQ} bytes) at ${qQ}`);
              qQ = sQ + (0, rQ.te)(zQ)
            }
          }(QQ, XQ)
        } finally {
          WQ = null
        }
      }
    }
    class fq {
      constructor(QQ, WQ) {
        this.acks = QQ, this.handlers = WQ, this.parts = new Map
      }
      onPart(QQ, WQ, XQ) {
        let wQ = this.parts.get(QQ);
        wQ || (wQ = [], this.parts.set(QQ, wQ)), wQ[WQ] = XQ, this.acks.filePartDone(QQ, WQ)
      }
      onReady(QQ) {
        var WQ;
        const XQ = null !== (WQ = this.parts.get(QQ.save)) && void 0 !== WQ ? WQ : [];
        this.parts.delete(QQ.save);
        const wQ = function(QQ, WQ, XQ) {
          if (QQ.length !== WQ) return null;
          let wQ = 0;
          for (let zQ = 0; zQ < WQ; zQ++) {
            if (void 0 === QQ[zQ]) return null;
            wQ += QQ[zQ].byteLength
          }
          if (wQ !== XQ) return null;
          if (1 === WQ) return QQ[0];
          const qQ = new Uint8Array(XQ);
          let TQ = 0;
          for (const zQ of QQ) qQ.set(zQ, TQ), TQ += zQ.byteLength;
          return qQ
        }(XQ, QQ.parts, QQ.bytes);
        this.acks.fileDone(QQ.save), null === wQ ? this.handlers.fileIncomplete(QQ.save, QQ.kind) : this.handlers.fileReady(QQ.save, QQ.kind, wQ)
      }
      onDiscarded(QQ) {
        this.parts.delete(QQ)
      }
    }

    function Sq() {
      return XQ.e(63).then((() => XQ(60861)))
    }
    class tq {
      constructor(QQ) {
        this.deps = QQ, this.sink = void 0, this.recorder = void 0, this.recorderEvents = void 0, this.parts = void 0, this.viewerChunk = null, this.viewer = null;
        const {
          client: WQ
        } = QQ;
        this.recorder = new Eq({
          client: WQ,
          live: () => {
            var QQ;
            return !0 !== (null === (QQ = this.viewer) || void 0 === QQ ? void 0 : QQ.inPlayback)
          },
          viewerOpen: QQ.viewerOpen,
          notify: QQ.notify,
          download: WQ => {
            var XQ;
            null === (XQ = QQ.download) || void 0 === XQ || XQ.call(QQ, WQ)
          },
          onState: QQ.onRecorderState,
          onSaveState: QQ.onSaveState
        }), this.parts = new fq(WQ, {
          fileReady: (QQ, WQ, XQ) => {
            var wQ;
            WQ === rQ.md.Edited ? null === (wQ = this.viewer) || void 0 === wQ || wQ.saveDone(XQ) : this.recorder.fileReady(WQ, XQ)
          },
          fileIncomplete: (QQ, WQ) => {
            this.saveFailed(WQ)
          }
        });
        const XQ = {
          replayFailed: QQ => {
            var WQ;
            null === (WQ = this.viewer) || void 0 === WQ || WQ.onFailed(QQ)
          },
          replayOption: WQ => {
            var XQ;
            null === (XQ = QQ.onReplayOption) || void 0 === XQ || XQ.call(QQ, WQ)
          },
          replayUiEvent: WQ => {
            var XQ;
            null === (XQ = QQ.onReplayUiEvent) || void 0 === XQ || XQ.call(QQ, WQ)
          },
          filePart: (QQ, WQ, XQ) => {
            this.parts.onPart(QQ, WQ, XQ)
          },
          fileReady: QQ => {
            this.parts.onReady(QQ)
          },
          replayOpened: WQ => {
            var XQ;
            null === (XQ = QQ.onReplayOpened) || void 0 === XQ || XQ.call(QQ, WQ)
          },
          recorderEvent: QQ => {
            var WQ;
            switch (QQ.what) {
              case rQ.Yc.FileDiscarded:
                this.parts.onDiscarded(QQ.save);
                break;
              case rQ.Yc.SaveFailed:
                this.saveFailed(QQ.kind);
                break;
              case rQ.Yc.SaveBusy:
                if (null !== (WQ = this.viewer) && void 0 !== WQ && WQ.savePending) {
                  this.viewer.saveFailed(!0);
                  break
                }
                this.recorder.onEvent(QQ);
                break;
              default:
                this.recorder.onEvent(QQ)
            }
          }
        };
        this.sink = function(QQ, WQ) {
          return {
            onReplayEvent: Lq(QQ, WQ)
          }
        }(XQ, QQ.buffer), this.recorderEvents = kq(XQ)
      }
      get currentViewer() {
        return this.viewer
      }
      loadViewer() {
        var QQ;
        return this.viewer ? Promise.resolve(this.viewer) : (this.viewerChunk ??= (null !== (QQ = this.deps.loadViewer) && void 0 !== QQ ? QQ : Sq)().catch((QQ => {
          throw this.viewerChunk = null, QQ
        })), this.viewerChunk.then((QQ => (this.viewer ??= new QQ.ReplayViewer({
          client: this.deps.client,
          setHoldDraws: this.deps.setHoldDraws,
          meshPending: this.deps.meshPending,
          notify: this.deps.notify,
          onChange: () => {
            var QQ, WQ;
            null === (QQ = (WQ = this.deps).onViewerChange) || void 0 === QQ || QQ.call(WQ)
          }
        }), this.viewer))))
      }
      activated(QQ) {
        this.recorder.activated(QQ)
      }
      afterFrame(QQ) {
        try {
          QQ > 0 && this.recorder.fJ()
        } finally {
          var WQ;
          null === (WQ = this.viewer) || void 0 === WQ || WQ.afterFrame()
        }
      }
      end() {
        var QQ;
        null === (QQ = this.viewer) || void 0 === QQ || QQ.end()
      }
      saveFailed(QQ) {
        var WQ;
        QQ === rQ.md.Edited ? null === (WQ = this.viewer) || void 0 === WQ || WQ.saveFailed(!1) : this.recorder.failed(QQ)
      }
    }
    var oq = XQ(40847),
      eq = XQ(40857),
      nq = XQ(5146),
      xq = XQ(41136);
    class Yq {
      constructor(QQ) {
        this.deps = QQ, this.analogue = [0, 0], this.keys = 0, this.unsent = !1
      }
      drag(QQ, WQ) {
        if (!this.deps.live() || 0 === QQ && 0 === WQ) return;
        const XQ = (0, LQ.s)(0, performance.now()),
          wQ = this.deps.dragScale();
        (0, xq.h)((() => {
          (0, LQ.w)(rQ.qb.MouseDown, 0, 0, 0, XQ), (0, LQ.w)(rQ.qb.MouseMove, 0, QQ * wQ, WQ * wQ, 0), (0, LQ.w)(rQ.qb.MouseUp, 0, 0, 0, XQ)
        }))
      }
      move(QQ) {
        var WQ, XQ;
        this.analogue[0] = null !== (WQ = null === QQ || void 0 === QQ ? void 0 : QQ.x) && void 0 !== WQ ? WQ : 0, this.analogue[1] = null !== (XQ = null === QQ || void 0 === QQ ? void 0 : QQ.y) && void 0 !== XQ ? XQ : 0, this.send()
      }
      holdVertical(QQ, WQ) {
        const XQ = "freeCamUp" === QQ ? jQ.pc.Up : jQ.pc.Down;
        this.keys = WQ ? this.keys | XQ : this.keys & ~XQ, this.send()
      }
      flush() {
        this.unsent && this.send()
      }
      send() {
        const QQ = this.deps.live() ? this.deps.cmd() : null;
        this.unsent = null !== QQ && !(0, jQ.Ke)(QQ, 0, this.analogue, this.keys)
      }
    }
    var Nq = XQ(3810),
      Zq = XQ(761),
      Oq = XQ(318),
      Kq = XQ(105),
      mq = XQ(34435),
      Mq = XQ(747),
      QT = XQ(36888);

    function WT() {
      const QQ = wQ.b.get("clientEscMenuOptions"),
        WQ = (0, Zq.u)(QQ);
      return {
        mouse: (0, Kq.isMobile)() ? WQ : QQ.mouseSensitivity,
        touch: WQ,
        fovPercent: QQ.cameraFOV
      }
    }

    function XT() {
      const QQ = wQ.b.get("clientEscMenuOptions"),
        WQ = wQ.b.get("isTouchScreen") ? (0, Zq.u)(QQ) : QQ.mouseSensitivity,
        XQ = WT().mouse;
      return XQ > 0 ? WQ / XQ : 1
    }

    function wT(QQ) {
      const WQ = () => {
        QQ.setSoundPrefs(wQ.b.get("soundVolume"), wQ.b.get("soundOnFromAd"))
      };
      let XQ = null;
      const qQ = () => {
        const {
          showFog: WQ,
          enableLighting: qQ,
          fogChunkDistance: TQ,
          chunkFadeIn: zQ
        } = wQ.b.get("clientEscMenuOptions"), sQ = {
          showFog: WQ,
          lighting: qQ,
          fogChunks: TQ,
          chunkFade: zQ,
          cellLight: (0, Nq.e)("cellLight") ? (0, Nq.e)("cellLightUnlit") ? "all" : "lit" : "off"
        };
        XQ && (0, rQ.fe)(XQ) === (0, rQ.fe)(sQ) && XQ.fogChunks === TQ || (XQ = sQ, QQ.setEnvPrefs(XQ))
      };
      let TQ = null;
      const sQ = () => {
        const WQ = function() {
          const QQ = wQ.b.get("clientEscMenuOptions");
          return {
            nametagsHidden: wQ.b.get("areNametagsHidden"),
            crouchToggle: QQ.crouchIsToggle,
            bhopDisabled: QQ.disableBunnyHopping,
            disableBobbing: QQ.disableBobbing,
            ezTowering: QQ.ezTowering ? (0, Oq.f)() : null,
            ezBridging: QQ.ezBridging,
            showChunkBorders: QQ.showChunkBorders,
            touchWalk: !(0, QT.f)(),
            edgeGuard: QQ.touchEdgeGuard,
            edgeGuardLong: (0, Mq.c)(),
            nametagCutDistance: (0, mq.d)()
          }
        }();
        (0, aQ.Wd)(TQ, WQ) || (TQ = WQ, QQ.setUiPrefs(WQ))
      };
      let FQ = null;
      const PQ = () => {
        const WQ = WT();
        (0, aQ.Wd)(FQ, WQ) || (FQ = WQ, QQ.setLookPrefs(WQ))
      };
      WQ(), qQ(), sQ(), PQ();
      const gQ = [(0, zQ.o)("appManagerUpdated|soundVolume", WQ), (0, zQ.o)("appManagerUpdated|soundOnFromAd", WQ), (0, zQ.o)("appManagerUpdated|clientEscMenuOptions", (() => {
        qQ(), sQ(), PQ()
      })), (0, zQ.o)(QT.c, sQ), (0, zQ.o)("appManagerUpdated|enabledDebugFeatures", qQ), (0, zQ.o)("appManagerUpdated|areNametagsHidden", sQ), (0, zQ.o)("appManagerUpdated|showDistantNametags", sQ)];
      return () => {
        for (const QQ of gQ) QQ()
      }
    }
    var qT = XQ(41114),
      TT = XQ(41122);
    var zT = (0, TT.b)("lend"),
      sT = (0, TT.b)("starting"),
      FT = (0, TT.b)("generation"),
      PT = (0, TT.b)("end");
    class gT {
      constructor(QQ) {
        this.deps = QQ, Object.defineProperty(this, PT, {
          value: JT
        }), Object.defineProperty(this, zT, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, sT, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, FT, {
          writable: !0,
          value: 0
        })
      }
      get active() {
        return null !== (0, qT.d)(this, zT)[zT] || (0, qT.d)(this, sT)[sT]
      }
      async start(QQ) {
        if (this.active) return "busy";
        const WQ = (0, qT.d)(this, FT)[FT];
        (0, qT.d)(this, sT)[sT] = !0;
        try {
          if (!await this.deps.ensureLoaded()) return "refused"
        } finally {
          (0, qT.d)(this, sT)[sT] = !1
        }
        if (WQ !== (0, qT.d)(this, FT)[FT]) return "refused";
        const XQ = this.deps.beginSave();
        if (!XQ) return "refused";
        const wQ = Number(BigInt.asUintN(32, QQ)),
          qQ = Number(BigInt.asUintN(32, QQ >> 32n));
        let TQ = "refused";
        return this.deps.recorderCall(((QQ, WQ) => {
          const zQ = XQ.editState,
            sQ = QQ.stage(zQ.length);
          0 !== sQ ? (new Uint8Array(WQ.buffer, sQ, zQ.length).set(zQ), QQ.WTQ(XQ.headLen, wQ, qQ) && (TQ = "sealing")) : TQ = "tooLarge"
        }), !0), "sealing" !== TQ ? (XQ.end(), TQ) : ((0, qT.d)(this, zT)[zT] = XQ, "sealing")
      }
      beforeRecorderStep() {
        const QQ = (0, qT.d)(this, zT)[zT];
        if (!QQ) return null;
        let WQ = -1,
          XQ = 0;
        if (!this.deps.recorderCall((QQ => {
            WQ = QQ.XTQ(), WQ > 0 && (XQ = QQ.wTQ())
          }))) return (0, qT.d)(this, PT)[PT](QQ, "stopped");
        if (WQ < 0) return (0, qT.d)(this, PT)[PT](QQ, "read");
        if (0 === WQ) return null;
        const wQ = QQ.head(XQ, WQ);
        let qQ = !1;
        if (wQ && this.deps.recorderCall(((QQ, XQ) => {
            const TQ = QQ.stage(WQ);
            0 !== TQ && (new Uint8Array(XQ.buffer, TQ, WQ).set(wQ), qQ = !0)
          }), !0), qQ) return null;
        const TQ = QQ.givenUp();
        this.deps.recorderCall((QQ => {
          QQ.qTQ()
        }));
        const zQ = (0, qT.d)(this, PT)[PT](QQ, TQ ? "givenUp" : "stopped");
        return TQ && this.deps.givenUp("Reopen the replay you were editing to make your edits again, as they weren't saved when another replay opened."), zQ
      }
      stop() {
        (0, qT.d)(this, FT)[FT]++;
        const QQ = (0, qT.d)(this, zT)[zT];
        QQ && (this.deps.recorderCall((QQ => {
          QQ.qTQ()
        })), (0, qT.d)(this, PT)[PT](QQ, "stopped"))
      }
    }

    function JT(QQ, WQ) {
      return (0, qT.d)(this, zT)[zT] = null, QQ.end(), WQ
    }

    function rT(QQ, WQ) {
      const XQ = new Uint8Array(4),
        wQ = new DataView(XQ.buffer);
      return wQ.setUint8(0, QQ ? 1 : 0), wQ.setUint16(2, Math.max(0, Math.min(65535, Math.round(WQ))), !0), XQ
    }

    function IT(QQ, WQ) {
      return QQ > function(QQ) {
        return 16777216 + 314572.8 * Math.max(0, QQ)
      }(WQ) + 33554432
    }
    let jT = null;

    function BT(QQ) {
      return jT ??= async function(QQ) {
        const WQ = QQ.loadInFlight();
        WQ && await WQ.catch((() => {}));
        if (QQ.trapped()) return "trapped";
        if (QQ.busy() || !IT(QQ.memoryBytes(), QQ.clipSeconds())) return "HI";
        QQ.unload();
        let XQ = !1;
        try {
          XQ = await QQ.load()
        } catch {
          XQ = !1
        }
        if (!XQ) return QQ.trapped() ? "trapped" : QQ.zj() ? "zj" : "failed";
        return "recycled"
      }(QQ).finally((() => {
        jT = null
      })), jT
    }
    const yT = "Replay recording couldn't load, so try again.",
      VT = new Set([rQ.ad.ToggleRecording, rQ.ad.SaveClip]);
    var DT = (0, TT.b)("bindings"),
      pT = (0, TT.b)("module"),
      GT = (0, TT.b)("memory"),
      UT = (0, TT.b)("trapped"),
      bT = (0, TT.b)("zj"),
      vT = (0, TT.b)("recycleDue"),
      dT = (0, TT.b)("loading"),
      HT = (0, TT.b)("generation"),
      aT = (0, TT.b)("viewDrawn"),
      lT = (0, TT.b)("clip"),
      hT = (0, TT.b)("session"),
      iT = (0, TT.b)("control"),
      cT = (0, TT.b)("deferred"),
      AT = (0, TT.b)("coreU8"),
      RT = (0, TT.b)("coreU32"),
      ET = (0, TT.b)("moduleU8"),
      CT = (0, TT.b)("edited"),
      uT = (0, TT.b)("sendSession"),
      LT = (0, TT.b)("checkNotInEvents"),
      kT = (0, TT.b)("clipping"),
      fT = (0, TT.b)("busy"),
      ST = (0, TT.b)("use"),
      tT = (0, TT.b)("ensureLoaded"),
      oT = (0, TT.b)("loadOnce"),
      eT = (0, TT.b)("recycleAfterStep"),
      nT = (0, TT.b)("settleRecycle"),
      xT = (0, TT.b)("load"),
      YT = (0, TT.b)("attach"),
      NT = (0, TT.b)("resendHeld"),
      ZT = (0, TT.b)("recycle"),
      OT = (0, TT.b)("send"),
      KT = (0, TT.b)("unload"),
      mT = (0, TT.b)("dropModule"),
      MT = (0, TT.b)("coreBytes"),
      Qz = (0, TT.b)("coreWords"),
      Wz = (0, TT.b)("moduleBytes"),
      Xz = (0, TT.b)("loadFailed"),
      wz = (0, TT.b)("call"),
      qz = (0, TT.b)("guard"),
      Tz = (0, TT.b)("trapOn");
    class zz {
      constructor(QQ) {
        this.deps = QQ, Object.defineProperty(this, Tz, {
          value: iz
        }), Object.defineProperty(this, qz, {
          value: hz
        }), Object.defineProperty(this, wz, {
          value: lz
        }), Object.defineProperty(this, Xz, {
          value: az
        }), Object.defineProperty(this, Wz, {
          value: Hz
        }), Object.defineProperty(this, Qz, {
          value: dz
        }), Object.defineProperty(this, MT, {
          value: vz
        }), Object.defineProperty(this, mT, {
          value: bz
        }), Object.defineProperty(this, KT, {
          value: Uz
        }), Object.defineProperty(this, OT, {
          value: Gz
        }), Object.defineProperty(this, ZT, {
          value: pz
        }), Object.defineProperty(this, NT, {
          value: Dz
        }), Object.defineProperty(this, YT, {
          value: Vz
        }), Object.defineProperty(this, xT, {
          value: yz
        }), Object.defineProperty(this, nT, {
          value: Bz
        }), Object.defineProperty(this, eT, {
          value: jz
        }), Object.defineProperty(this, oT, {
          value: Iz
        }), Object.defineProperty(this, tT, {
          value: rz
        }), Object.defineProperty(this, ST, {
          value: Jz
        }), Object.defineProperty(this, fT, {
          value: gz
        }), Object.defineProperty(this, kT, {
          value: Pz
        }), Object.defineProperty(this, LT, {
          value: Fz
        }), Object.defineProperty(this, uT, {
          value: sz
        }), Object.defineProperty(this, DT, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, pT, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, GT, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, UT, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, bT, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, vT, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, dT, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, HT, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, aT, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, lT, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, hT, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, iT, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, cT, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, AT, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, RT, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, ET, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, CT, {
          writable: !0,
          value: void 0
        }), (0, qT.d)(this, CT)[CT] = new gT({
          ensureLoaded: () => (0, qT.d)(this, tT)[tT](),
          recorderCall: (QQ, WQ) => {
            WQ && (0, qT.d)(this, LT)[LT]("an edited save's stage");
            const XQ = (0, qT.d)(this, wz)[wz](((WQ, XQ) => (QQ(WQ, XQ), !0)));
            return null !== XQ && void 0 !== XQ && XQ
          },
          beginSave: QQ.beginSave,
          givenUp: QQ.givenUp
        })
      }
      get active() {
        return null !== (0, qT.d)(this, pT)[pT]
      }
      get trapped() {
        return (0, qT.d)(this, UT)[UT]
      }
      get loading() {
        return null !== (0, qT.d)(this, dT)[dT]
      }
      prefetch() {
        (0, qT.d)(this, bT)[bT] || (0, qT.d)(this, UT)[UT] || (0, qT.d)(this, pT)[pT] || (0, qT.d)(this, dT)[dT] || this.deps.prefetch()
      }
      viewDrawn() {
        (0, qT.d)(this, aT)[aT] = !0, (0, qT.d)(this, kT)[kT]() && (0, qT.d)(this, ST)[ST]()
      }
      prefs(QQ, WQ) {
        (0, qT.d)(this, lT)[lT] = {
          on: QQ,
          seconds: WQ
        }, (0, qT.d)(this, OT)[OT](rQ.Xc.Prefs, rT(QQ, WQ)), QQ && (0, qT.d)(this, aT)[aT] && (0, qT.d)(this, ST)[ST]()
      }
      control(QQ) {
        const WQ = function(QQ) {
          return new Uint8Array([QQ, 0, 0, 0])
        }(QQ);
        if (VT.has(QQ)) return (0, qT.d)(this, pT)[pT] ? void(0, qT.d)(this, OT)[OT](rQ.Xc.Control, WQ) : ((0, qT.d)(this, iT)[iT] = WQ, void(0, qT.d)(this, ST)[ST]());
        (0, qT.d)(this, bT)[bT] || this.deps.coreCommand(rQ.Xc.Control, WQ)
      }
      session(QQ) {
        (0, qT.d)(this, hT)[hT] = QQ, (0, qT.d)(this, uT)[uT](QQ)
      }
      filePartDone(QQ, WQ) {
        (0, qT.d)(this, OT)[OT](rQ.Xc.FilePartDone, function(QQ, WQ) {
          const XQ = new Uint8Array(8),
            wQ = new DataView(XQ.buffer);
          return wQ.setUint32(0, QQ, !0), wQ.setUint32(4, WQ, !0), XQ
        }(QQ, WQ))
      }
      fileDone(QQ) {
        return (0, qT.d)(this, OT)[OT](rQ.Xc.FileDone, function(QQ) {
          const WQ = new Uint8Array(4);
          return new DataView(WQ.buffer).setUint32(0, QQ, !0), WQ
        }(QQ)), (0, qT.d)(this, eT)[eT]()
      }
      saveEdited(QQ) {
        return (0, qT.d)(this, LT)[LT]("saveEdited"), (0, qT.d)(this, CT)[CT].start(QQ)
      }
      afterFrame() {
        if (!(0, qT.d)(this, pT)[pT]) return;
        "read" === (0, qT.d)(this, CT)[CT].beforeRecorderStep() && (0, qT.d)(this, eT)[eT]();
        const QQ = (0, qT.d)(this, vT)[vT];
        (0, qT.d)(this, vT)[vT] = null;
        const WQ = (0, qT.d)(this, pT)[pT],
          XQ = (0, qT.d)(this, GT)[GT];
        if (!WQ || !XQ) return void(null === QQ || void 0 === QQ || QQ.resolve((0, qT.d)(this, UT)[UT] ? "trapped" : "HI"));
        const {
          core: wQ
        } = this.deps, qQ = wQ.sTQ(2);
        let TQ, zQ, sQ, FQ, PQ = 0,
          gQ = 0;
        if (0 !== qQ) {
          var JQ, rQ;
          const QQ = (0, qT.d)(this, Qz)[Qz]();
          PQ = null !== (JQ = QQ[qQ >>> 2]) && void 0 !== JQ ? JQ : 0, gQ = null !== (rQ = QQ[1 + (qQ >>> 2)]) && void 0 !== rQ ? rQ : 0
        }
        try {
          if (gQ > 0) {
            const QQ = WQ.feed(gQ);
            0 !== QQ && (0, qT.d)(this, Wz)[Wz](XQ).set((0, qT.d)(this, MT)[MT]().subarray(PQ, PQ + gQ), QQ)
          }
          TQ = WQ.step(), zQ = WQ.FTQ(), sQ = WQ.PTQ(), FQ = WQ.gTQ()
        } catch (IQ) {
          if (!(0, qT.d)(this, Tz)[Tz](IQ)) throw null === QQ || void 0 === QQ || QQ.resolve("HI"), IQ;
          return void(null === QQ || void 0 === QQ || QQ.resolve("trapped"))
        }
        if (TQ > 0) {
          const QQ = wQ.JTQ(2, TQ);
          0 !== QQ && (0, qT.d)(this, MT)[MT]().set((0, qT.d)(this, Wz)[Wz](XQ).subarray(zQ, zQ + TQ), QQ)
        }
        if (sQ > 0) {
          (0, qT.d)(this, cT)[cT] = [];
          try {
            this.deps.events(new Uint8Array(XQ.buffer, FQ, sQ), XQ)
          } catch (IQ) {
            throw null === QQ || void 0 === QQ || QQ.resolve("HI"), IQ
          } finally {
            const QQ = (0, qT.d)(this, cT)[cT];
            (0, qT.d)(this, cT)[cT] = null;
            for (const [WQ, XQ] of QQ)(0, qT.d)(this, OT)[OT](WQ, XQ)
          }
        }
        if (!(0, qT.d)(this, kT)[kT]() && !(0, qT.d)(this, fT)[fT]()) return (0, qT.d)(this, KT)[KT](), void(null === QQ || void 0 === QQ || QQ.resolve("HI"));
        null === QQ || void 0 === QQ || QQ.resolve((0, qT.d)(this, ZT)[ZT]())
      }
      dispose() {
        (0, qT.d)(this, bT)[bT] = !0, (0, qT.d)(this, KT)[KT]()
      }
    }

    function sz(QQ) {
      (0, qT.d)(this, OT)[OT](rQ.Xc.Session, function(QQ) {
        const WQ = new TextEncoder,
          XQ = WQ.encode(QQ.game).subarray(0, 65535),
          wQ = WQ.encode(QQ.lobby).subarray(0, 65535),
          qQ = new Uint8Array(22 + XQ.length + 2 + wQ.length),
          TQ = new DataView(qQ.buffer);
        TQ.setFloat64(0, QQ.unixMs, !0), TQ.setBigUint64(8, BigInt.asUintN(64, QQ.session), !0), TQ.setUint8(16, QQ.lobbyType);
        let zQ = 20;
        for (const sQ of [XQ, wQ]) TQ.setUint16(zQ, sQ.length, !0), qQ.set(sQ, zQ + 2), zQ += 2 + sQ.length;
        return qQ
      }({
        ...QQ,
        unixMs: this.deps.unixNow()
      }))
    }

    function Fz(QQ) {
      false
    }

    function Pz() {
      var QQ, WQ;
      return null !== (QQ = null === (WQ = (0, qT.d)(this, lT)[lT]) || void 0 === WQ ? void 0 : WQ.on) && void 0 !== QQ && QQ
    }

    function gz() {
      const QQ = (0, qT.d)(this, pT)[pT];
      let WQ = !0;
      if (QQ) try {
        WQ = QQ.busy()
      } catch (XQ) {
        if (!(0, qT.d)(this, Tz)[Tz](XQ)) throw XQ
      }
      return WQ || (0, qT.d)(this, CT)[CT].active
    }
    async function Jz() {
      !(0, qT.d)(this, bT)[bT] && this.deps.allowed() ? await (0, qT.d)(this, tT)[tT]() : (0, qT.d)(this, iT)[iT] = null
    }

    function rz() {
      return (0, qT.d)(this, UT)[UT] || (0, qT.d)(this, bT)[bT] ? Promise.resolve(!1) : (0, qT.d)(this, pT)[pT] ? Promise.resolve(!0) : ((0, qT.d)(this, dT)[dT] ??= (0, qT.d)(this, oT)[oT](), (0, qT.d)(this, dT)[dT])
    }
    async function Iz() {
      let QQ = !1;
      try {
        return QQ = await (0, qT.d)(this, xT)[xT](), QQ
      } finally {
        QQ || ((0, qT.d)(this, iT)[iT] = null), (0, qT.d)(this, dT)[dT] = null
      }
    }

    function jz() {
      if (!(0, qT.d)(this, pT)[pT]) return Promise.resolve((0, qT.d)(this, UT)[UT] ? "trapped" : "HI");
      if (!(0, qT.d)(this, vT)[vT]) {
        let QQ = () => {};
        const WQ = new Promise((WQ => {
          QQ = WQ
        }));
        (0, qT.d)(this, vT)[vT] = {
          promise: WQ,
          resolve: QQ
        }
      }
      return (0, qT.d)(this, vT)[vT].promise
    }

    function Bz(QQ) {
      const WQ = (0, qT.d)(this, vT)[vT];
      (0, qT.d)(this, vT)[vT] = null, null === WQ || void 0 === WQ || WQ.resolve(QQ)
    }
    async function yz() {
      let QQ = (0, qT.d)(this, DT)[DT];
      if (!QQ) {
        const WQ = (0, qT.d)(this, HT)[HT];
        try {
          QQ = await this.deps.load()
        } catch (XQ) {
          return WQ === (0, qT.d)(this, HT)[HT] && await (0, qT.d)(this, Xz)[Xz](XQ), !1
        }
        if (WQ !== (0, qT.d)(this, HT)[HT]) return this.deps.unload(), !1;
        const wQ = QQ,
          qQ = (0, qT.d)(this, qz)[qz]((() => wQ.rTQ()));
        if (void 0 === qQ) return !1;
        const TQ = this.deps.core.ITQ();
        if (qQ !== TQ) return await (0, qT.d)(this, Xz)[Xz](new Error(`recorder port version ${qQ}, the core's ${TQ}`)), !1;
        (0, qT.d)(this, DT)[DT] = QQ
      }
      const WQ = QQ;
      try {
        if (!(0, qT.d)(this, qz)[qz]((() => ((0, qT.d)(this, pT)[pT] = new WQ.jTQ, (0, qT.d)(this, GT)[GT] = WQ.TTQ(), !0)))) return !1;
        (0, qT.d)(this, NT)[NT]();
        const QQ = (0, qT.d)(this, iT)[iT];
        return (0, qT.d)(this, iT)[iT] = null, QQ && (0, qT.d)(this, OT)[OT](rQ.Xc.Control, QQ), (0, qT.d)(this, YT)[YT]()
      } catch (XQ) {
        return (0, qT.d)(this, KT)[KT](), await (0, qT.d)(this, Xz)[Xz](XQ), !1
      }
    }

    function Vz() {
      return this.deps.core.BTQ(0), 1 === this.deps.core.BTQ(1) || ((0, qT.d)(this, KT)[KT](), this.deps.failed(yT), !1)
    }

    function Dz() {
      (0, qT.d)(this, lT)[lT] && (0, qT.d)(this, OT)[OT](rQ.Xc.Prefs, rT((0, qT.d)(this, lT)[lT].on, (0, qT.d)(this, lT)[lT].seconds)), (0, qT.d)(this, hT)[hT] && (0, qT.d)(this, uT)[uT]((0, qT.d)(this, hT)[hT])
    }

    function pz() {
      return BT({
        memoryBytes: this.deps.memoryBytes,
        clipSeconds: () => {
          var QQ, WQ;
          return null !== (QQ = null === (WQ = (0, qT.d)(this, lT)[lT]) || void 0 === WQ ? void 0 : WQ.seconds) && void 0 !== QQ ? QQ : 0
        },
        trapped: () => (0, qT.d)(this, UT)[UT],
        busy: () => (0, qT.d)(this, fT)[fT](),
        loadInFlight: () => (0, qT.d)(this, dT)[dT],
        zj: () => (0, qT.d)(this, bT)[bT],
        unload: () => {
          (0, qT.d)(this, KT)[KT]()
        },
        load: () => (0, qT.d)(this, tT)[tT]()
      })
    }

    function Gz(QQ, WQ) {
      (0, qT.d)(this, cT)[cT] ? (0, qT.d)(this, cT)[cT].push([QQ, WQ]): (0, qT.d)(this, wz)[wz](((XQ, wQ) => {
        const qQ = XQ.zTQ(WQ.length);
        0 !== qQ && (new Uint8Array(wQ.buffer, qQ, WQ.length).set(WQ), XQ.command(QQ, WQ.length))
      }))
    }

    function Uz() {
      (0, qT.d)(this, HT)[HT]++, (0, qT.d)(this, nT)[nT]("HI"), (0, qT.d)(this, CT)[CT].stop(), this.deps.core.BTQ(0), (0, qT.d)(this, mT)[mT](), (0, qT.d)(this, UT)[UT] || ((0, qT.d)(this, DT)[DT] = null, this.deps.unload())
    }

    function bz() {
      (0, qT.d)(this, wz)[wz]((QQ => {
        QQ.free()
      })), (0, qT.d)(this, pT)[pT] = null, (0, qT.d)(this, GT)[GT] = null, (0, qT.d)(this, ET)[ET] = null
    }

    function vz() {
      var QQ;
      const WQ = this.deps.coreBuffer();
      return (null === (QQ = (0, qT.d)(this, AT)[AT]) || void 0 === QQ ? void 0 : QQ.buffer) !== WQ && ((0, qT.d)(this, AT)[AT] = new Uint8Array(WQ)), (0, qT.d)(this, AT)[AT]
    }

    function dz() {
      var QQ;
      const WQ = this.deps.coreBuffer();
      return (null === (QQ = (0, qT.d)(this, RT)[RT]) || void 0 === QQ ? void 0 : QQ.buffer) !== WQ && ((0, qT.d)(this, RT)[RT] = new Uint32Array(WQ, 0, WQ.byteLength >>> 2)), (0, qT.d)(this, RT)[RT]
    }

    function Hz(QQ) {
      var WQ;
      const XQ = QQ.buffer;
      return (null === (WQ = (0, qT.d)(this, ET)[ET]) || void 0 === WQ ? void 0 : WQ.buffer) !== XQ && ((0, qT.d)(this, ET)[ET] = new Uint8Array(XQ)), (0, qT.d)(this, ET)[ET]
    }
    async function az(QQ) {
      await this.deps.staleOr(QQ, (() => {
        this.deps.failed(yT)
      }))
    }

    function lz(QQ) {
      const WQ = (0, qT.d)(this, pT)[pT],
        XQ = (0, qT.d)(this, GT)[GT];
      if (WQ && XQ) return (0, qT.d)(this, qz)[qz]((() => QQ(WQ, XQ)))
    }

    function hz(QQ) {
      if (!(0, qT.d)(this, UT)[UT]) try {
        return QQ()
      } catch (WQ) {
        if (!(0, qT.d)(this, Tz)[Tz](WQ)) throw WQ;
        return
      }
    }

    function iz(QQ) {
      return QQ instanceof WebAssembly.RuntimeError && ((0, qT.d)(this, UT)[UT] = !0, (0, qT.d)(this, pT)[pT] = null, (0, qT.d)(this, GT)[GT] = null, (0, qT.d)(this, ET)[ET] = null, (0, qT.d)(this, DT)[DT] = null, (0, qT.d)(this, iT)[iT] = null, (0, qT.d)(this, nT)[nT]("trapped"), this.deps.core.BTQ(0), (0, qT.d)(this, CT)[CT].stop(), this.deps.crash(this.deps.markTrapped(QQ)), this.deps.failed("Replay recording stopped working, so reload the page to record replays again."), !0)
    }
    var cz = XQ(38928);
    const Az = new Map([
      ["skyblock", () => XQ.e(54).then((() => XQ(38926)))]
    ]);

    function Rz(QQ) {
      const WQ = Az.get(QQ);
      return WQ ? WQ().then((() => {
        const WQ = (0, cz.b)(QQ);
        if (!WQ) throw new Error(`${QQ}'s replay hook module registered no hook`);
        return WQ
      })) : null
    }
    class Ez {
      constructor(QQ) {
        this.deps = QQ, this.game = null, this.hook = null, this.generation = 0, this.all = !1, this.pending = new Map, this.ids = new Int32Array(64)
      }
      get wantsWatch() {
        return null !== this.hook
      }
      opened(QQ) {
        if (this.pending.clear(), QQ === this.game && null !== this.hook) return void(this.all = !0);
        const WQ = ++this.generation;
        this.game = QQ, this.hook = null, this.all = !1;
        const XQ = this.deps.loadHook(QQ);
        null === XQ || void 0 === XQ || XQ.then((QQ => {
          WQ === this.generation && (this.hook = QQ, this.all = !0)
        }), (QQ => {
          WQ === this.generation && this.deps.onError(QQ)
        }))
      }
      ended() {
        this.generation++, this.game = null, this.hook = null, this.all = !1, this.pending.clear()
      }
      entityAdded(QQ) {
        null === this.hook || this.all || this.pending.set(QQ, !0)
      }
      entityInfoChanged(QQ) {
        null === this.hook || this.all || this.pending.has(QQ) || this.pending.set(QQ, !1)
      }
      flush(QQ) {
        const {
          hook: WQ
        } = this;
        if (null === WQ || !QQ || !this.all && 0 === this.pending.size) return;
        const XQ = this.deps.cmd();
        if (null === XQ) return;
        const {
          api: wQ
        } = this.deps;
        if (this.all) {
          this.all = !1, this.pending.clear();
          const {
            ids: QQ,
            count: WQ
          } = kX(wQ, this.ids);
          this.ids = QQ;
          for (let XQ = 0; XQ < WQ; XQ++) this.pending.set(QQ[XQ], !0)
        }
        const qQ = this.ids = fX(this.ids, this.pending.size);
        let TQ = 0;
        for (const PQ of this.pending.keys()) qQ[TQ++] = PQ;
        const zQ = [],
          sQ = SX(wQ, qQ, TQ, ((QQ, WQ) => {
            null !== WQ && zQ.push({
              serverId: QQ,
              info: WQ,
              spawned: !0 === this.pending.get(QQ)
            })
          }));
        if (sQ) {
          this.pending.clear();
          for (const {
              serverId: QQ,
              info: wQ,
              spawned: qQ
            }
            of zQ) try {
            WQ(wQ, {
              setFacingTolerance: WQ => {
                null === WQ && qQ || sX(XQ, QQ, WQ) || this.pending.set(QQ, qQ)
              }
            })
          } catch (FQ) {
            this.deps.onError(FQ)
          }
        }
      }
    }
    var Cz = (0, TT.b)("bindings"),
      uz = (0, TT.b)("module"),
      Lz = (0, TT.b)("memory"),
      kz = (0, TT.b)("trapped"),
      fz = (0, TT.b)("generation"),
      Sz = (0, TT.b)("loading"),
      tz = (0, TT.b)("lend"),
      oz = (0, TT.b)("givenUp"),
      ez = (0, TT.b)("afterSave"),
      nz = (0, TT.b)("opens"),
      xz = (0, TT.b)("saveAskedAt"),
      Yz = (0, TT.b)("unload"),
      Nz = (0, TT.b)("dropModule"),
      Zz = (0, TT.b)("loadFailed"),
      Oz = (0, TT.b)("saveReadsBody"),
      Kz = (0, TT.b)("command"),
      mz = (0, TT.b)("call"),
      Mz = (0, TT.b)("guard"),
      Qs = (0, TT.b)("trapOn");
    class Ws {
      constructor(QQ) {
        this.deps = QQ, Object.defineProperty(this, Qs, {
          value: Ps
        }), Object.defineProperty(this, Mz, {
          value: Fs
        }), Object.defineProperty(this, mz, {
          value: ss
        }), Object.defineProperty(this, Kz, {
          value: zs
        }), Object.defineProperty(this, Oz, {
          get: Ts,
          set: void 0
        }), Object.defineProperty(this, Zz, {
          value: qs
        }), Object.defineProperty(this, Nz, {
          value: ws
        }), Object.defineProperty(this, Yz, {
          value: Xs
        }), Object.defineProperty(this, Cz, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, uz, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Lz, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, kz, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, fz, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, Sz, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, tz, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, oz, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, ez, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, nz, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, xz, {
          writable: !0,
          value: null
        })
      }
      get active() {
        return null !== (0, qT.d)(this, uz)[uz] && null === (0, qT.d)(this, ez)[ez]
      }
      async open(QQ, WQ) {
        if ((0, qT.d)(this, kz)[kz]) return rQ.id.ModuleTrap;
        let XQ = (0, qT.d)(this, Cz)[Cz];
        if (!XQ) {
          const QQ = (0, qT.d)(this, fz)[fz];
          (0, qT.d)(this, Sz)[Sz]++;
          try {
            XQ = await this.deps.load()
          } catch (qQ) {
            return (0, qT.d)(this, Sz)[Sz]--, QQ !== (0, qT.d)(this, fz)[fz] ? "stopped" : (0, qT.d)(this, Zz)[Zz](qQ, WQ)
          }
          if ((0, qT.d)(this, Sz)[Sz]--, QQ !== (0, qT.d)(this, fz)[fz]) return (0, qT.d)(this, Cz)[Cz] || 0 !== (0, qT.d)(this, Sz)[Sz] || (0, qT.d)(this, kz)[kz] || this.deps.unload(), "stopped";
          if ((0, qT.d)(this, kz)[kz]) return rQ.id.ModuleTrap;
          const wQ = XQ.rTQ(),
            TQ = this.deps.core.ITQ();
          if (wQ !== TQ) return (0, qT.d)(this, Zz)[Zz](new Error(`replay port version ${wQ}, the core's ${TQ}`), WQ);
          (0, qT.d)(this, Cz)[Cz] = XQ
        }
        if (!(0, qT.d)(this, uz)[uz]) {
          const QQ = XQ;
          if (!(0, qT.d)(this, Mz)[Mz]((() => {
              (0, qT.d)(this, uz)[uz] = new QQ.yTQ, (0, qT.d)(this, Lz)[Lz] = QQ.VTQ()
            }))) return rQ.id.ModuleTrap
        }
        let wQ = !1;
        return (0, qT.d)(this, mz)[mz](((WQ, XQ) => {
          null !== (0, qT.d)(this, ez)[ez] && WQ.step(0, 0);
          const qQ = WQ.stage(QQ.length);
          0 !== qQ && (new Uint8Array(XQ.buffer, qQ, QQ.length).set(QQ), WQ.open(), (0, qT.d)(this, oz)[oz] = (0, qT.d)(this, tz)[tz], (0, qT.d)(this, ez)[ez] = null, (0, qT.d)(this, nz)[nz]++, wQ = !0)
        })) ? wQ ? "opening" : rQ.id.TooLarge : rQ.id.ModuleTrap
      }
      beforeFrame(QQ) {
        const WQ = (0, qT.d)(this, uz)[uz],
          XQ = (0, qT.d)(this, Lz)[Lz];
        if (!WQ || !XQ || null !== (0, qT.d)(this, ez)[ez]) return;
        const {
          core: wQ
        } = this.deps, qQ = wQ.DTQ(QQ);
        if (qQ < 0) return;
        const TQ = Math.floor(qQ);
        let zQ, sQ;
        try {
          zQ = WQ.step(TQ, qQ - TQ), sQ = WQ.FTQ()
        } catch (PQ) {
          return void(0, qT.d)(this, Qs)[Qs](PQ)
        }
        const FQ = wQ.JTQ(1, zQ);
        if (0 === FQ) {
          const QQ = (0, qT.d)(this, mz)[mz]((QQ => {
            QQ.close()
          }));
          if (!QQ) return;
          return (0, qT.d)(this, Oz)[Oz] ? (0, qT.d)(this, ez)[ez] = "drop" : (0, qT.d)(this, Nz)[Nz](), void wQ.pTQ(rQ.id.Port)
        }
        new Uint8Array(this.deps.coreBuffer(), FQ, zQ).set(new Uint8Array(XQ.buffer, sQ, zQ))
      }
      play() {
        (0, qT.d)(this, Kz)[Kz]((QQ => {
          QQ.play()
        }))
      }
      pause() {
        (0, qT.d)(this, Kz)[Kz]((QQ => {
          QQ.pause()
        }))
      }
      seek(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (0, qT.d)(this, Kz)[Kz]((XQ => {
          XQ.seek(QQ, WQ)
        }))
      }
      setMark(QQ, WQ) {
        return (0, qT.d)(this, Kz)[Kz]((XQ => {
          XQ.UTQ(QQ, WQ)
        }))
      }
      addKeyframe(QQ, WQ) {
        return (0, qT.d)(this, Kz)[Kz]((XQ => {
          XQ.bTQ(QQ[0], QQ[1], QQ[2], WQ[0], WQ[1], WQ[2])
        }))
      }
      setKeyframe(QQ, WQ) {
        return (0, qT.d)(this, Kz)[Kz]((XQ => {
          XQ.vTQ(QQ, WQ)
        }))
      }
      moveKeyframe(QQ, WQ) {
        return (0, qT.d)(this, Kz)[Kz]((XQ => {
          XQ.dTQ(QQ, WQ)
        }))
      }
      deleteKeyframes(QQ, WQ) {
        return (0, qT.d)(this, Kz)[Kz]((XQ => {
          XQ.HTQ(QQ, WQ)
        }))
      }
      crop(QQ, WQ) {
        return null === (0, qT.d)(this, tz)[tz] && (0, qT.d)(this, Kz)[Kz]((XQ => {
          XQ.crop(QQ, WQ)
        }))
      }
      beginSave() {
        const QQ = (0, qT.d)(this, xz)[xz];
        if ((0, qT.d)(this, xz)[xz] = null, null !== QQ && QQ !== (0, qT.d)(this, nz)[nz]) return null;
        let WQ = 0,
          XQ = null;
        if ((0, qT.d)(this, mz)[mz](((QQ, wQ) => {
            WQ = QQ.save(), 0 !== WQ && (XQ = new Uint8Array(wQ.buffer, QQ.aTQ(), QQ.lTQ()).slice())
          })), 0 === WQ || !XQ) return null;
        const wQ = {
          headLen: WQ,
          editState: XQ,
          givenUp: () => (0, qT.d)(this, oz)[oz] === wQ,
          head: (QQ, WQ) => {
            if ((0, qT.d)(this, tz)[tz] !== wQ || !(0, qT.d)(this, Oz)[Oz]) return null;
            let XQ = null;
            return (0, qT.d)(this, mz)[mz](((wQ, qQ) => {
              const TQ = wQ.hTQ();
              0 !== TQ && QQ >= 0 && WQ >= 0 && QQ + WQ <= TQ && (XQ = new Uint8Array(qQ.buffer, wQ.iTQ() + QQ, WQ))
            })), XQ
          },
          end: () => {
            if ((0, qT.d)(this, tz)[tz] !== wQ) return;
            (0, qT.d)(this, tz)[tz] = null, (0, qT.d)(this, oz)[oz] = null, (0, qT.d)(this, mz)[mz]((QQ => {
              QQ.cTQ()
            }));
            const QQ = (0, qT.d)(this, ez)[ez];
            (0, qT.d)(this, ez)[ez] = null, "unload" === QQ ? (0, qT.d)(this, Yz)[Yz]() : "drop" === QQ && (0, qT.d)(this, Nz)[Nz]()
          }
        };
        return (0, qT.d)(this, tz)[tz] = wQ, wQ
      }
      askSave() {
        (0, qT.d)(this, xz)[xz] = (0, qT.d)(this, nz)[nz]
      }
      setSpeed(QQ) {
        (0, qT.d)(this, Kz)[Kz]((WQ => {
          WQ.RTQ(QQ)
        }))
      }
      setCameraMode(QQ) {
        (0, qT.d)(this, Kz)[Kz]((WQ => {
          WQ.ETQ(QQ)
        }))
      }
      close() {
        (0, qT.d)(this, Kz)[Kz]((QQ => {
          QQ.close()
        }))
      }
      stop() {
        (0, qT.d)(this, fz)[fz]++, (0, qT.d)(this, Oz)[Oz] && ((0, qT.d)(this, mz)[mz]((QQ => {
          QQ.close()
        })), (0, qT.d)(this, uz)[uz]) ? (0, qT.d)(this, ez)[ez] = "unload" : (0, qT.d)(this, Yz)[Yz]()
      }
    }

    function Xs() {
      (0, qT.d)(this, Nz)[Nz](), (0, qT.d)(this, kz)[kz] || ((0, qT.d)(this, Cz)[Cz] = null, this.deps.unload())
    }

    function ws() {
      (0, qT.d)(this, mz)[mz]((QQ => {
        QQ.free()
      })), (0, qT.d)(this, uz)[uz] = null, (0, qT.d)(this, Lz)[Lz] = null
    }
    async function qs(QQ, WQ) {
      return await this.deps.staleOr(QQ, (() => {}), {
        beforeReload: WQ
      }) ? "reloading" : rQ.id.ModuleLoad
    }

    function Ts() {
      return null !== (0, qT.d)(this, tz)[tz] && (0, qT.d)(this, oz)[oz] !== (0, qT.d)(this, tz)[tz]
    }

    function zs(QQ) {
      return null === (0, qT.d)(this, ez)[ez] && (0, qT.d)(this, mz)[mz](QQ)
    }

    function ss(QQ) {
      const WQ = (0, qT.d)(this, uz)[uz],
        XQ = (0, qT.d)(this, Lz)[Lz];
      return !(!WQ || !XQ) && (0, qT.d)(this, Mz)[Mz]((() => {
        QQ(WQ, XQ)
      }))
    }

    function Fs(QQ) {
      if ((0, qT.d)(this, kz)[kz]) return !1;
      try {
        return QQ(), !0
      } catch (WQ) {
        return (0, qT.d)(this, Qs)[Qs](WQ), !1
      }
    }

    function Ps(QQ) {
      if (!(QQ instanceof WebAssembly.RuntimeError)) throw QQ;
      (0, qT.d)(this, kz)[kz] = !0, (0, qT.d)(this, uz)[uz] = null, (0, qT.d)(this, Lz)[Lz] = null, (0, qT.d)(this, Cz)[Cz] = null, this.deps.crash(this.deps.markTrapped(QQ)), this.deps.core.pTQ(rQ.id.ModuleTrap)
    }
    var gs = XQ(6880),
      rs = XQ(41229);
    const Is = "[bloxd-wasm-client]";
    const Bs = String(Rq);

    function ys(QQ) {
      return null === QQ || QQ === Bs ? void 0 : QQ
    }

    function Vs(QQ) {
      var WQ, XQ, wQ, qQ, TQ, sQ, FQ;
      switch (QQ.what) {
        case rQ.rd.FlyingText: {
          let WQ;
          try {
            WQ = JSON.parse(QQ.contentJson)
          } catch (PQ) {
            return void console.warn(`${Is} a replay's flying text isn't JSON`, PQ)
          }
          zQ.k.mB("forceFlyingMiddleMessage", {
            content: WQ,
            lT: QQ.lT,
            angle: QQ.angle,
            hT: QQ.hT
          });
          break
        }
        case rQ.rd.PlayerKilled:
          (0, rs.h)({
            kind: "killed",
            body: {
              deadEId: null !== (WQ = ys(QQ.dead)) && void 0 !== WQ ? WQ : "",
              killerEId: ys(QQ.killer),
              withItem: null !== (XQ = QQ.withItem) && void 0 !== XQ ? XQ : "",
              killstreak: QQ.killstreak
            }
          });
          break;
        case rQ.rd.Killfeed:
          (0, rs.h)({
            kind: "custom",
            body: {
              killer: {
                eId: ys(QQ.killerId),
                name: null !== (wQ = QQ.killerName) && void 0 !== wQ ? wQ : void 0,
                colour: null !== (qQ = QQ.killerColour) && void 0 !== qQ ? qQ : void 0
              },
              victim: {
                eId: ys(QQ.victimId),
                name: null !== (TQ = QQ.victimName) && void 0 !== TQ ? TQ : void 0,
                colour: null !== (sQ = QQ.victimColour) && void 0 !== sQ ? sQ : void 0
              },
              withItem: null !== (FQ = QQ.withItem) && void 0 !== FQ ? FQ : ""
            }
          })
      }
    }
    const Ds = "[bloxd-wasm-client]";

    function ps(QQ) {
      if (void 0 === QQ || null === QQ || "" === QQ) return null;
      const WQ = Number(QQ);
      return Number.isInteger(WQ) && WQ > Rq && WQ <= 2147483647 ? WQ : null
    }

    function Gs(QQ) {
      return {
        id: ps(QQ.eId),
        name: "string" === typeof QQ.name ? QQ.name : null,
        colour: "string" === typeof QQ.colour ? QQ.colour : null
      }
    }

    function Us(QQ) {
      const WQ = (0, eq.j)(YX.gc.PlayerKilled, (WQ => {
          var XQ, wQ;
          const qQ = (0, oq.h)(WQ);
          if (!(0, oq.c)(qQ)) return;
          const {
            deadEId: TQ,
            killerEId: zQ,
            withItem: sQ,
            killstreak: FQ
          } = qQ;
          QQ.recordPlayerKilled(null !== (XQ = ps(TQ)) && void 0 !== XQ ? XQ : Rq, null !== (wQ = ps(zQ)) && void 0 !== wQ ? wQ : Rq, "number" === typeof FQ ? FQ : 0, "string" === typeof sQ ? sQ : "")
        })),
        XQ = (0, eq.j)(YX.gc.CustomKillfeed, (WQ => {
          const XQ = (0, oq.h)(WQ);
          if (!(0, oq.c)(XQ) || !(0, oq.c)(XQ.killer) || !(0, oq.c)(XQ.victim)) return;
          const {
            killer: wQ,
            victim: qQ,
            withItem: TQ
          } = XQ;
          QQ.recordKillfeed(Gs(wQ), Gs(qQ), "string" === typeof TQ ? TQ : null)
        }));
      return () => {
        WQ(), XQ()
      }
    }

    function bs(QQ) {
      var WQ;
      return void 0 === QQ || null === QQ ? null : null !== (WQ = JSON.stringify(QQ)) && void 0 !== WQ ? WQ : null
    }

    function vs(QQ) {
      let WQ = null;
      const XQ = () => {
        const {
          enableClipping: XQ,
          clipDurationSeconds: qQ
        } = wQ.b.get("clientEscMenuOptions"), TQ = `${XQ}:${qQ}`;
        TQ !== WQ && (WQ = TQ, QQ.recorder.setPrefs(XQ, qQ))
      };
      return XQ(), (0, zQ.o)("appManagerUpdated|clientEscMenuOptions", XQ)
    }
    const ds = "replayModule",
      Hs = "recorderModule";

    function as(QQ, WQ, XQ) {
      return function() {
        return QQ.isStopped ? XQ : WQ(...arguments)
      }
    }
    const ls = {
      open: () => Promise.reject(new Error(vq.b.coreStopped.text)),
      replayKey: () => null,
      encode: () => Promise.resolve(null),
      fileHandle: () => null,
      markSaved: () => {}
    };

    function hs() {
      return XQ.e(67).then((() => XQ(61735)))
    }

    function is(QQ) {
      (0, vq.e)({
        text: QQ,
        type: "Error"
      })
    }
    class cs {
      constructor(QQ) {
        this.deps = QQ, this.runtime = void 0, this.entityHooks = void 0, this.recordedOptions = void 0, this.stops = void 0, this.activeConn = 0, this.stopped = !1, this.bench = null, this.replay = void 0, this.recorder = void 0, this.freecam = void 0, this.drawn = !1;
        const {
          running: WQ,
          api: wQ,
          core: qQ
        } = QQ, TQ = () => QQ.memory().buffer, zQ = () => WQ.isStopped ? null : WQ.rings.cmd, sQ = as(WQ, ((QQ, WQ) => qQ.JTQ(QQ, WQ)), 0), FQ = () => qQ.ITQ();
        let PQ = null;
        this.replay = new Ws({
          core: {
            DTQ: as(WQ, (QQ => qQ.DTQ(QQ)), -1),
            JTQ: sQ,
            ITQ: FQ,
            pTQ: as(WQ, (QQ => {
              qQ.pTQ(QQ)
            }), void 0)
          },
          coreBuffer: TQ,
          load: async () => (PQ = await XQ.e(68).then((() => XQ(61750))), PQ.loadReplayModule()),
          unload: () => {
            var QQ;
            null === (QQ = PQ) || void 0 === QQ || QQ.unloadReplayModule()
          },
          markTrapped: QQ => PQ ? PQ.markReplayTrapped(QQ) : new Error(String(QQ)),
          staleOr: (WQ, XQ, wQ) => QQ.staleOr(ds, WQ, XQ, wQ),
          crash: WQ => {
            QQ.reportFault(ds, WQ)
          }
        });
        let gQ = null;
        this.recorder = new zz({
          core: {
            BTQ: as(WQ, (QQ => qQ.BTQ(QQ)), 0),
            sTQ: as(WQ, (QQ => qQ.sTQ(QQ)), 0),
            JTQ: sQ,
            ITQ: FQ
          },
          coreCommand: (QQ, WQ) => {
            var XQ, wQ;
            return null !== (XQ = null === (wQ = zQ()) || void 0 === wQ ? void 0 : wQ.writeCmd(QQ, 0, WQ)) && void 0 !== XQ && XQ
          },
          coreBuffer: TQ,
          load: async () => (gQ = await hs(), gQ.loadRecorderModule()),
          prefetch: () => {
            hs().then((QQ => QQ.prefetchRecorderModule())).catch((QQ => {
              console.warn(`${Ds} the recorder module didn't prefetch, so a save loads it:`, QQ)
            }))
          },
          unload: () => {
            var QQ;
            null === (QQ = gQ) || void 0 === QQ || QQ.unloadRecorderModule()
          },
          markTrapped: QQ => gQ ? gQ.markRecorderTrapped(QQ) : new Error(String(QQ)),
          memoryBytes: () => {
            var QQ, WQ;
            return null !== (QQ = null === (WQ = gQ) || void 0 === WQ ? void 0 : WQ.recorderMemoryBytes()) && void 0 !== QQ ? QQ : 0
          },
          staleOr: (WQ, XQ) => QQ.staleOr(Hs, WQ, XQ),
          crash: WQ => {
            QQ.reportFault(Hs, WQ)
          },
          allowed: () => !0 === QQ.options.get("canRecordReplays"),
          failed: is,
          events: (QQ, WQ) => {
            this.runtime.recorderEvents(QQ, WQ)
          },
          beginSave: () => this.replay.beginSave(),
          givenUp: is,
          unixNow: () => Date.now()
        });
        const JQ = new Aq({
          core: {
            mqQ: as(WQ, (QQ => qQ.mqQ(QQ)), 0),
            QTQ: as(WQ, (() => {
              qQ.QTQ()
            }), void 0),
            Ly: as(WQ, (() => qQ.Ly()), 0),
            MqQ: as(WQ, (() => qQ.MqQ()), 0)
          },
          buffer: TQ,
          apiView: () => wQ.apiView,
          cmd: zQ,
          replay: this.replay,
          recorder: this.recorder
        });
        this.entityHooks = new Ez({
          api: wQ,
          cmd: zQ,
          loadHook: Rz,
          onError: QQ => {
            console.warn(`${Ds} the recorded game's replay hooks:`, QQ)
          }
        });
        const rQ = new tq({
          client: JQ,
          buffer: TQ,
          setHoldDraws: QQ => {
            WQ.setHoldDraws(QQ)
          },
          notify: vq.e,
          onRecorderState: () => {
            var QQ;
            null === (QQ = (0, Hq.d)()) || void 0 === QQ || QQ.recorderChanged()
          },
          onViewerChange: () => {
            var QQ;
            null === (QQ = (0, Hq.d)()) || void 0 === QQ || QQ.viewerChanged()
          },
          onReplayOption: WQ => {
            ! function(QQ, WQ) {
              var XQ, wQ;
              const qQ = YX.tb[WQ.key];
              if (void 0 === qQ) return;
              let TQ = null !== (XQ = WQ.value) && void 0 !== XQ ? XQ : JSON.parse(JSON.stringify(null !== (wQ = gs.b[qQ]) && void 0 !== wQ ? wQ : null));
              if (null !== WQ.value && WQ.key < YX.Nb.Environment && "string" === typeof TQ) try {
                TQ = JSON.parse(TQ)
              } catch (zQ) {
                return void console.warn(`${Is} a replay's ${qQ} isn't JSON`, zQ)
              }
              QQ.applyNewClientOptions({
                [qQ]: TQ
              })
            }(QQ.options, WQ)
          },
          onReplayUiEvent: Vs,
          onReplayOpened: WQ => {
            this.entityHooks.opened((0, aQ.Mb)(WQ)), QQ.replayShaderPack(WQ)
          },
          meshPending: () => {
            var QQ, XQ;
            return null !== (QQ = null === (XQ = WQ.lastHeader) || void 0 === XQ ? void 0 : XQ.renderPending) && void 0 !== QQ ? QQ : 0
          },
          viewerOpen: dq.e,
          download: QQ => {
            (0, Uq.j)(QQ)
          }
        });
        this.runtime = rQ, wQ.replay = rQ.sink, (0, Hq.o)(rQ);
        const IQ = new Yq({
          live: () => {
            var QQ;
            return !WQ.isStopped && !0 === (null === (QQ = rQ.currentViewer) || void 0 === QQ ? void 0 : QQ.inPlayback)
          },
          cmd: zQ,
          dragScale: XT
        });
        this.freecam = IQ, (0, Hq.n)(IQ), this.recordedOptions = function(QQ, WQ) {
          const XQ = YX.tb,
            wQ = XQ.map(((XQ, wQ) => WQ.subscribe(XQ, (WQ => {
              QQ.setOption(wQ, bs(WQ))
            }))));
          return {
            sendAll() {
              XQ.forEach(((XQ, wQ) => {
                QQ.setOption(wQ, bs(WQ.get(XQ)))
              }))
            },
            stop() {
              for (const QQ of wQ) QQ()
            }
          }
        }(rQ.recorder, QQ.options), this.stops = [(0, ww.k)((QQ => {
          IQ.flush();
          try {
            this.replay.beforeFrame(QQ)
          } catch (WQ) {
            this.deps.reportFault("replayFrame", WQ)
          }
        })), (0, ww.x)(((QQ, WQ) => {
          try {
            this.recorder.afterFrame(), WQ && !this.drawn && (this.drawn = !0, this.recorder.viewDrawn())
          } catch (XQ) {
            this.deps.reportFault("recorderFrame", XQ)
          }
          try {
            rQ.afterFrame(QQ)
          } catch (XQ) {
            this.deps.reportFault("replayRuntime", XQ)
          }
        })), vs(rQ), () => {
          this.recordedOptions.stop()
        }, Us(rQ.recorder), (0, nq.j)((QQ => {
          let {
            action: WQ,
            down: XQ
          } = QQ;
          var wQ;
          XQ && (null === (wQ = (0, Hq.d)()) || void 0 === wQ || wQ.keyDown(WQ))
        }))];
        const jQ = () => {
          const QQ = rQ.currentViewer;
          return !0 === (null === QQ || void 0 === QQ ? void 0 : QQ.isOpen) ? QQ : null
        };
        (0, bq.e)({
          open: (QQ, WQ) => this.open(QQ, WQ),
          replayKey: () => {
            var QQ, WQ;
            return null !== (QQ = null === (WQ = jQ()) || void 0 === WQ ? void 0 : WQ.id) && void 0 !== QQ ? QQ : null
          },
          saveRefusal: () => {
            var QQ, WQ;
            return null !== (QQ = null === (WQ = jQ()) || void 0 === WQ ? void 0 : WQ.saveRefusal) && void 0 !== QQ ? QQ : null
          },
          encode: () => {
            var QQ, WQ;
            return null !== (QQ = null === (WQ = jQ()) || void 0 === WQ ? void 0 : WQ.save()) && void 0 !== QQ ? QQ : Promise.resolve(null)
          },
          fileHandle: () => {
            var QQ, WQ;
            return null !== (QQ = null === (WQ = rQ.currentViewer) || void 0 === WQ ? void 0 : WQ.fileHandle) && void 0 !== QQ ? QQ : null
          },
          markSaved: (QQ, WQ) => {
            var XQ;
            null === (XQ = rQ.currentViewer) || void 0 === XQ || XQ.markSaved(QQ, WQ)
          }
        })
      }
      netEvent(QQ) {
        if ("connection" === QQ.type)
          if (QQ.phase === rQ.E.Activated) {
            this.activeConn = QQ.conn;
            const WQ = this.deps.sessionInfo(QQ.conn);
            null !== WQ && (this.runtime.activated({
              lobbyType: (0, lQ.s)(WQ.lobbyName),
              gameNameWithVariation: WQ.gameNameWithVariation,
              lobbyName: WQ.lobbyName
            }), this.recordedOptions.sendAll())
          } else QQ.phase !== rQ.E.Left && QQ.phase !== rQ.E.Closed || QQ.conn !== this.activeConn || (this.activeConn = 0, this.runtime.recorder.closed())
      }
      stop() {
        if (!this.stopped) {
          this.stopped = !0;
          for (const QQ of this.stops) QQ();
          this.runtime.end(), this.entityHooks.ended(), this.replay.stop(), this.recorder.dispose(), (0, Hq.f)() === this.runtime && (0, Hq.o)(null), (0, Hq.e)() === this.freecam && (0, Hq.n)(null), (0, bq.e)(ls), null !== this.bench && window.wasmReplayBench === this.bench && (window.wasmReplayBench = void 0)
        }
      }
      async open(QQ, WQ) {
        const {
          running: XQ
        } = this.deps;
        if (XQ.isStopped) throw new Error(vq.b.coreStopped.text);
        if (QQ.byteLength > 67108864) throw new Error(vq.b.cantOpen.text);
        let wQ;
        try {
          wQ = await async function(QQ) {
            const WQ = await QQ.loadViewer();
            return WQ.inPlayback || (0, ww.H)().leaveGame(null), WQ
          }(this.runtime)
        } catch (qQ) {
          throw console.warn(`${Ds} the replay viewer didn't load`, qQ), new Error(vq.b.viewerLoadFailed.text)
        }
        if (XQ.isStopped) throw new Error(vq.b.coreStopped.text);
        await wQ.open(QQ, WQ)
      }
    }
    var As = XQ(2036);

    function Rs(QQ, WQ) {
      const {
        aux: XQ,
        payload: wQ
      } = function(QQ) {
        return {
          aux: QQ.reset ? rQ.gc.ResetFirst : 0,
          payload: Cs(QQ.changes)
        }
      }(WQ);
      QQ.queueOptions(XQ, wQ) && (WQ.reset && As.e.reset(), As.e.apply(WQ.changes))
    }
    const Es = new TextEncoder;

    function Cs(QQ) {
      const WQ = new us;
      return ks(WQ, QQ), WQ.bytes()
    }
    class us {
      constructor() {
        this.buf = new Uint8Array(256), this.view = new DataView(this.buf.buffer), this.len = 0
      }
      room(QQ) {
        if (this.len + QQ <= this.buf.length) return;
        const WQ = new Uint8Array(Math.max(2 * this.buf.length, this.len + QQ));
        WQ.set(this.buf.subarray(0, this.len)), this.buf = WQ, this.view = new DataView(WQ.buffer)
      }
      u8(QQ) {
        this.room(1), this.buf[this.len++] = QQ
      }
      tagged(QQ, WQ, XQ) {
        this.room(1 + WQ), this.buf[this.len++] = QQ, 1 === WQ ? this.view.setUint8(this.len, XQ) : 2 === WQ ? this.view.setUint16(this.len, XQ) : this.view.setUint32(this.len, XQ), this.len += WQ
      }
      signed(QQ, WQ, XQ) {
        this.room(1 + WQ), this.buf[this.len++] = QQ, 1 === WQ ? this.view.setInt8(this.len, XQ) : 2 === WQ ? this.view.setInt16(this.len, XQ) : this.view.setInt32(this.len, XQ), this.len += WQ
      }
      f64(QQ) {
        this.room(9), this.buf[this.len++] = 203, this.view.setFloat64(this.len, QQ), this.len += 8
      }
      raw(QQ) {
        this.room(QQ.length), this.buf.set(QQ, this.len), this.len += QQ.length
      }
      bytes() {
        return this.buf.slice(0, this.len)
      }
    }

    function Ls(QQ, WQ, XQ, wQ, qQ, TQ, zQ) {
      WQ < wQ ? QQ.u8(XQ | WQ) : null !== qQ && WQ < 256 ? QQ.tagged(qQ, 1, WQ) : WQ < 65536 ? QQ.tagged(TQ, 2, WQ) : QQ.tagged(zQ, 4, WQ)
    }

    function ks(QQ, WQ) {
      switch (typeof WQ) {
        case "undefined":
          return void QQ.raw(fs);
        case "boolean":
          return void QQ.u8(WQ ? 195 : 194);
        case "number":
          return void
          function(QQ, WQ) {
            WQ >>> 0 === WQ ? WQ < 128 ? QQ.u8(WQ) : WQ < 256 ? QQ.tagged(204, 1, WQ) : WQ < 65536 ? QQ.tagged(205, 2, WQ) : QQ.tagged(206, 4, WQ) : (WQ | 0) === WQ ? WQ >= -32 ? QQ.u8(255 & WQ) : WQ >= -128 ? QQ.signed(208, 1, WQ) : WQ >= -32768 ? QQ.signed(209, 2, WQ) : QQ.signed(210, 4, WQ) : QQ.f64(WQ)
          }(QQ, WQ);
        case "string": {
          const XQ = Es.encode(WQ);
          return Ls(QQ, XQ.length, 160, 32, 217, 218, 219), void QQ.raw(XQ)
        }
        case "object":
          break;
        default:
          return void QQ.u8(192)
      }
      if (null === WQ) QQ.u8(192);
      else if (Array.isArray(WQ)) {
        Ls(QQ, WQ.length, 144, 16, null, 220, 221);
        for (const XQ of WQ) ks(QQ, XQ)
      } else if (WQ instanceof Uint8Array) Ls(QQ, WQ.length, 0, 0, 196, 197, 198), QQ.raw(WQ);
      else {
        const XQ = Object.keys(WQ);
        Ls(QQ, XQ.length, 128, 0, null, 222, 223);
        for (const wQ of XQ) ks(QQ, wQ), ks(QQ, WQ[wQ])
      }
    }
    const fs = new Uint8Array([212, 0, 0]);
    var Ss = XQ(42871),
      ts = XQ(42878),
      os = XQ(41164),
      es = XQ(41202),
      ns = XQ(3110);
    const xs = [1e3, 3e3, 9e3];
    class Ys {
      constructor(QQ) {
        this.host = QQ, this.sets = new Map, this.table = [], this.generation = 0, this.zj = !1
      }
      onEvent(QQ) {
        const WQ = function(QQ) {
          if (QQ.byteLength !== rQ.Cd) return null;
          const WQ = new DataView(QQ.buffer, QQ.byteOffset, QQ.byteLength);
          return {
            want: WQ.getUint16(0, !0),
            release: WQ.getUint16(2, !0)
          }
        }(QQ);
        WQ && !this.zj && (WQ.release !== rQ.Fd && this.release(WQ.release), WQ.want !== rQ.Fd && this.want(WQ.want))
      }
      reset(QQ) {
        if (!this.zj) {
          for (const [QQ, WQ] of this.sets) "ready" === WQ.state && this.releaseAll(WQ.distinct), this.sets.delete(QQ);
          this.table = QQ, this.generation++
        }
      }
      dispose() {
        if (this.zj) return;
        this.zj = !0, this.generation++, this.table = [];
        const QQ = [...this.sets.values()];
        this.sets.clear();
        let WQ = null;
        for (const wQ of QQ)
          for (const QQ of "ready" === wQ.state ? wQ.distinct : []) try {
            this.host.BwQ(QQ)
          } catch (XQ) {
            WQ ??= {
              error: XQ
            }
          }
        if (WQ) throw WQ.error
      }
      isReady(QQ) {
        var WQ;
        return "ready" === (null === (WQ = this.sets.get(QQ)) || void 0 === WQ ? void 0 : WQ.state)
      }
      want(QQ) {
        const WQ = this.sets.get(QQ);
        if ("loading" === (null === WQ || void 0 === WQ ? void 0 : WQ.state)) return WQ.wanted = !0, void this.capAnswer(QQ, WQ);
        if ("ready" === (null === WQ || void 0 === WQ ? void 0 : WQ.state)) return void this.host.sendReady(Zs(QQ, WQ.images, WQ.size));
        const XQ = this.table[QQ];
        if (!XQ || 1 !== XQ.urls.length && XQ.urls.length !== YX.dc.CubeFaces) return this.host.sendReady(Os(QQ)), void this.host.onLoadFailed(QQ, "", new Error(`no image set ${QQ}`));
        const wQ = {
          state: "loading",
          wanted: !0
        };
        this.sets.set(QQ, wQ), this.load(QQ, XQ, wQ, this.generation, 0), this.capAnswer(QQ, wQ)
      }
      capAnswer(QQ, WQ) {
        this.host.wait(4e3, (() => {
          this.sets.get(QQ) === WQ && WQ.wanted && this.host.sendReady(Os(QQ))
        }))
      }
      load(QQ, WQ, XQ, wQ, qQ) {
        const TQ = [...new Set(WQ.urls)];
        Promise.allSettled(TQ.map((QQ => this.host.loadImage(QQ, WQ.orientation)))).then((zQ => {
          const sQ = zQ.flatMap((QQ => "fulfilled" === QQ.status ? [QQ.value] : [])),
            FQ = wQ === this.generation && this.sets.get(QQ) === XQ,
            PQ = zQ.findIndex((QQ => "rejected" === QQ.status));
          if (!FQ || !XQ.wanted) return this.zj ? void this.releaseAfterDispose(sQ.map(Ns)) : (this.releaseAll(sQ.map(Ns)), void(FQ && this.sets.delete(QQ)));
          PQ < 0 ? this.loaded(QQ, WQ, TQ, sQ) : (this.releaseAll(sQ.map(Ns)), this.host.sendReady(Os(QQ)), qQ < xs.length ? this.host.wait(xs[qQ], (() => {
            wQ === this.generation && this.sets.get(QQ) === XQ && (XQ.wanted ? this.load(QQ, WQ, XQ, wQ, qQ + 1) : this.sets.delete(QQ))
          })) : (this.sets.delete(QQ), this.host.onLoadFailed(QQ, TQ[PQ], zQ[PQ].reason)))
        }))
      }
      loaded(QQ, WQ, XQ, wQ) {
        const [qQ] = wQ, TQ = [qQ.width, qQ.height], zQ = wQ.every((QQ => QQ.width === TQ[0] && QQ.height === TQ[1])), sQ = WQ.urls.length === YX.dc.CubeFaces;
        if (!zQ || TQ[0] <= 0 || TQ[1] <= 0 || TQ[0] > 65535 || TQ[1] > 65535 || sQ && TQ[0] !== TQ[1]) {
          this.releaseAll(wQ.map(Ns)), this.sets.delete(QQ), this.host.sendReady(Os(QQ));
          const XQ = wQ.map((QQ => `${QQ.width}x${QQ.height}`));
          return void this.host.onLoadFailed(QQ, WQ.urls[0], new Error(`set ${QQ}'s images can't make its texture: ${XQ.join(", ")}`))
        }
        const FQ = WQ.urls.map((QQ => wQ[XQ.indexOf(QQ)].id)),
          PQ = wQ.map(Ns);
        this.sets.set(QQ, {
          state: "ready",
          images: FQ,
          distinct: PQ,
          size: TQ
        }), this.host.sendReady(Zs(QQ, FQ, TQ))
      }
      release(QQ) {
        const WQ = this.sets.get(QQ);
        "loading" === (null === WQ || void 0 === WQ ? void 0 : WQ.state) ? WQ.wanted = !1: "ready" === (null === WQ || void 0 === WQ ? void 0 : WQ.state) && (this.releaseAll(WQ.distinct), this.sets.delete(QQ))
      }
      releaseAll(QQ) {
        for (const WQ of QQ) this.host.BwQ(WQ)
      }
      releaseAfterDispose(QQ) {
        for (const WQ of QQ) try {
          this.host.BwQ(WQ)
        } catch {}
      }
    }

    function Ns(QQ) {
      return QQ.id
    }

    function Zs(QQ, WQ, XQ) {
      const wQ = new Uint8Array(YX.dc.SkyImagesReadyBytes),
        qQ = new DataView(wQ.buffer);
      return qQ.setUint16(0, QQ, !0), qQ.setUint16(2, WQ.length, !0), qQ.setUint16(4, XQ[0], !0), qQ.setUint16(6, XQ[1], !0), WQ.slice(0, YX.dc.CubeFaces).forEach(((QQ, WQ) => {
        qQ.setUint32(8 + 4 * WQ, QQ, !0)
      })), wQ
    }

    function Os(QQ) {
      const WQ = new Uint8Array(YX.dc.SkyImagesReadyBytes),
        XQ = new DataView(WQ.buffer);
      return XQ.setUint16(0, QQ, !0), XQ.setUint16(2, YX.dc.Failed, !0), WQ
    }
    let Ks = Promise.resolve();
    async function ms(QQ, WQ) {
      let XQ;
      try {
        XQ = await (0, ns.K)(QQ)
      } catch (TQ) {
        throw new os.e("fetch", QQ, {
          cause: TQ
        })
      }
      const wQ = Ks.then((() => async function(QQ, WQ) {
        const XQ = new Blob([QQ.slice()]);
        let wQ = await createImageBitmap(XQ, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: WQ
        });
        const qQ = 1024 / Math.max(wQ.width, wQ.height);
        if (qQ < 1) {
          const QQ = wQ;
          try {
            wQ = await createImageBitmap(QQ, {
              resizeWidth: Math.max(1, Math.round(QQ.width * qQ)),
              resizeHeight: Math.max(1, Math.round(QQ.height * qQ)),
              resizeQuality: "high",
              premultiplyAlpha: "none",
              colorSpaceConversion: "none"
            })
          } finally {
            QQ.close()
          }
        }
        return wQ
      }(XQ, WQ)));
      let qQ;
      Ks = wQ.catch((() => {}));
      try {
        qQ = await wQ
      } catch (TQ) {
        throw new os.e("decode", QQ, {
          cause: TQ
        })
      }
      return {
        id: (0, os.l)(qQ),
        width: qQ.width,
        height: qQ.height
      }
    }
    var Ms = XQ(2226),
      QF = XQ(34315),
      WF = XQ(39502);
    const XF = Ms.d.length,
      wF = new Set([...Ms.d, "earth"]);

    function qF(QQ) {
      const WQ = [],
        XQ = [],
        wQ = (QQ, wQ) => {
          if ("custom" === wQ.type) {
            XQ.push({
              id: QQ,
              kind: YX.dc.KindCustom,
              set: WQ.length,
              earth: null
            });
            const qQ = [wQ.px, wQ.py, wQ.pz, wQ.nx, wQ.ny, wQ.nz];
            WQ.push({
              urls: (0, WF.f)(qQ),
              orientation: "none"
            })
          } else XQ.push({
            id: QQ,
            kind: YX.dc.KindEarth,
            set: 0,
            earth: wQ
          })
        };
      Ms.d.forEach(((WQ, XQ) => {
        var qQ;
        wQ(XQ, null !== (qQ = TF(QQ[WQ])) && void 0 !== qQ ? qQ : QF.m[WQ])
      }));
      const qQ = TF(QQ.earth);
      "earth" === (null === qQ || void 0 === qQ ? void 0 : qQ.type) && wQ(XF, qQ);
      const TQ = new TextEncoder,
        zQ = [],
        sQ = [];
      for (const [IQ, jQ] of Object.entries(QQ)) {
        const QQ = wF.has(IQ) ? null : TF(jQ);
        if (null === QQ) continue;
        const WQ = TQ.encode(IQ);
        WQ.length > 255 ? sQ.push(`Ignoring texture pack skybox ${IQ}, whose name is over 255 bytes`) : zQ.length === YX.dc.MaxAdded ? sQ.push(`Ignoring texture pack skybox ${IQ}, past the ${YX.dc.MaxAdded} skies a pack can add`) : (zQ.push(WQ), wQ(YX.dc.AddedId, QQ))
      }
      const FQ = WQ.length;
      WQ.push({
        urls: QF.g.map((QQ => QF.h + QQ)),
        orientation: "none"
      }), WQ.push({
        urls: [QF.l],
        orientation: "flipY"
      }), WQ.push({
        urls: [QF.d],
        orientation: "flipY"
      });
      const PQ = YX.dc.SkyTableHeaderBytes + XQ.length * YX.dc.SkyTableEntryBytes,
        gQ = new Uint8Array(PQ + zQ.reduce(((QQ, WQ) => QQ + 1 + WQ.length), 0)),
        JQ = new DataView(gQ.buffer);
      JQ.setUint16(0, FQ, !0), JQ.setUint16(2, FQ + 1, !0), JQ.setUint16(4, FQ + 2, !0), JQ.setUint16(6, XQ.length, !0), XQ.forEach(((QQ, WQ) => {
        const XQ = YX.dc.SkyTableHeaderBytes + WQ * YX.dc.SkyTableEntryBytes;
        JQ.setUint16(XQ, QQ.id, !0), JQ.setUint8(XQ + 2, QQ.kind);
        const wQ = XQ + 4;
        QQ.earth ? function(QQ, WQ, XQ) {
          const wQ = QQ;
          let qQ = 0,
            TQ = 0;
          for (const [zQ, sQ] of zF) {
            const QQ = wQ[zQ];
            "number" === typeof QQ && Number.isFinite(QQ) && (WQ.setFloat32(XQ + 4 * sQ, QQ, !0), qQ |= 1 << sQ)
          }
          for (const [zQ, sQ, FQ] of sF) {
            const QQ = wQ[zQ];
            Array.isArray(QQ) && 3 === QQ.length && QQ.every((QQ => "number" === typeof QQ && Number.isFinite(QQ))) && (QQ.forEach(((QQ, wQ) => {
              WQ.setFloat32(XQ + FQ + 4 * wQ, QQ, !0)
            })), qQ |= sQ)
          }
          FF.forEach(((QQ, TQ) => {
            let [zQ, sQ] = QQ;
            const FQ = wQ[zQ];
            "number" === typeof FQ && Number.isFinite(FQ) && (WQ.setFloat32(XQ + YX.r.CameraOffsetAt + 4 * TQ, FQ, !0), qQ |= sQ)
          }));
          for (const [zQ, sQ] of PF) {
            const QQ = wQ[zQ];
            null !== QQ && void 0 !== QQ && (qQ |= sQ, QQ && (TQ |= sQ >>> 14))
          }
          WQ.setUint32(XQ + YX.r.PresentAt, qQ, !0), WQ.setUint8(XQ + YX.r.FlagsAt, TQ)
        }(QQ.earth, JQ, wQ) : JQ.setUint16(wQ, QQ.set, !0)
      }));
      let rQ = PQ;
      for (const IQ of zQ) gQ[rQ] = IQ.length, gQ.set(IQ, rQ + 1), rQ += 1 + IQ.length;
      return {
        payload: gQ,
        sets: WQ,
        leftOut: sQ
      }
    }

    function TF(QQ) {
      if ("object" !== typeof QQ || null === QQ) return null;
      const WQ = QQ;
      if ("earth" === WQ.type) return QQ;
      return "custom" === WQ.type && ["px", "py", "pz", "nx", "ny", "nz"].every((QQ => {
        const XQ = WQ[QQ];
        return "string" === typeof XQ && XQ.length > 0
      })) ? QQ : null
    }
    const zF = [
        ["inclination", YX.r.Inclination],
        ["turbidity", YX.r.Turbidity],
        ["luminance", YX.r.Luminance],
        ["rayleigh", YX.r.Rayleigh],
        ["mieCoefficient", YX.r.MieCoefficient],
        ["mieDirectionalG", YX.r.MieDirectionalG],
        ["distance", YX.r.Distance],
        ["azimuth", YX.r.Azimuth]
      ],
      sF = [
        ["sunPosition", YX.r.SunPosition, YX.r.SunPositionAt],
        ["up", YX.r.Up, YX.r.UpAt],
        ["vertexTint", YX.r.VertexTint, YX.r.VertexTintAt]
      ],
      FF = [
        ["xCameraOffset", YX.r.CameraOffsetX],
        ["yCameraOffset", YX.r.CameraOffsetY],
        ["zCameraOffset", YX.r.CameraOffsetZ]
      ],
      PF = [
        ["useSunPosition", YX.r.UseSunPosition],
        ["dithering", YX.r.Dithering],
        ["infiniteDistance", YX.r.InfiniteDistance]
      ];

    function gF(QQ, WQ, XQ) {
      const wQ = new rF({
        writeCmd: QQ,
        warn: WQ,
        followPack: JF(XQ, WQ)
      });
      return wQ.start(), wQ
    }

    function JF(QQ, WQ) {
      return XQ => {
        let wQ = () => {};
        const qQ = QQ((QQ => {
          wQ(), wQ = () => {}, null !== QQ ? wQ = QQ.subscribe((QQ => {
            XQ(function(QQ, WQ, XQ) {
              if ("object" !== typeof QQ || null === QQ) return null;
              const wQ = QQ.skyBoxes;
              if ("object" !== typeof wQ || null === wQ) return null;
              if ("player" === WQ) return wQ;
              return Object.fromEntries(Object.entries(wQ).filter((QQ => {
                let [WQ, wQ] = QQ;
                return !! function(QQ) {
                  if ("object" !== typeof QQ || null === QQ) return !1;
                  return "earth" === QQ.type || Object.entries(QQ).every((QQ => {
                    let [WQ, XQ] = QQ;
                    return "type" === WQ || ("" === (wQ = XQ) || null !== function(QQ) {
                      var WQ, XQ, wQ;
                      return "string" !== typeof QQ ? null : null !== (WQ = null === (XQ = IF.exec(QQ)) || void 0 === XQ || null === (wQ = XQ.groups) || void 0 === wQ ? void 0 : wQ.base64) && void 0 !== WQ ? WQ : null
                    }(wQ));
                    var wQ
                  }))
                }(wQ) || (XQ(`Ignoring texture pack skybox ${WQ}, whose faces are not all data URLs`, null), !1)
              })))
            }(QQ.pack, null === QQ.gameSource ? "player" : "customGame", WQ))
          })) : XQ(null)
        }));
        return () => {
          qQ(), wQ()
        }
      }
    }
    class rF {
      constructor(QQ) {
        var WQ, XQ, wQ;
        this.host = QQ, this.loader = void 0, this.wait = void 0, this.queue = [], this.written = null, this.stopFollowing = () => {}, this.zj = !1, this.wait = null !== (WQ = QQ.wait) && void 0 !== WQ ? WQ : (QQ, WQ) => {
          setTimeout(WQ, QQ)
        }, this.loader = new Ys({
          loadImage: null !== (XQ = QQ.loadImage) && void 0 !== XQ ? XQ : ms,
          BwQ: null !== (wQ = QQ.BwQ) && void 0 !== wQ ? wQ : os.p,
          sendReady: QQ => {
            this.queue.push({
              kind: YX.dc.SkyImagesReady,
              payload: QQ
            })
          },
          onLoadFailed: (WQ, XQ, wQ) => {
            QQ.warn(`sky image set ${WQ} (${XQ}) didn't load: the last sky stays`, wQ)
          },
          wait: this.wait
        })
      }
      start() {
        this.wait(es.c, (() => {
          null === this.written && this.write({})
        })), this.stopFollowing = this.host.followPack((QQ => {
          this.write(null !== QQ && void 0 !== QQ ? QQ : {})
        }))
      }
      onEvent(QQ) {
        this.loader.onEvent(QQ)
      }
      drain() {
        if (0 === this.queue.length) return;
        let QQ = 0;
        for (; QQ < this.queue.length && this.host.writeCmd(this.queue[QQ].kind, 0, this.queue[QQ].payload);) QQ++;
        QQ > 0 && this.queue.splice(0, QQ)
      }
      dispose() {
        this.zj = !0, this.stopFollowing(), this.queue = [], this.loader.dispose()
      }
      write(QQ) {
        if (this.zj) return;
        const WQ = qF(QQ);
        if (!(this.written && (XQ = this.written, wQ = WQ, XQ.payload.length === wQ.payload.length && XQ.payload.every(((QQ, WQ) => QQ === wQ.payload[WQ])) && XQ.sets.length === wQ.sets.length && XQ.sets.every(((QQ, WQ) => {
            const XQ = wQ.sets[WQ];
            return QQ.orientation === XQ.orientation && QQ.urls.length === XQ.urls.length && QQ.urls.every(((QQ, WQ) => QQ === XQ.urls[WQ]))
          }))))) {
          var XQ, wQ;
          for (const QQ of WQ.leftOut) this.host.warn(QQ, null);
          this.written = WQ, this.loader.reset(WQ.sets), this.queue = this.queue.filter((QQ => QQ.kind !== YX.dc.SkyImagesReady)), this.queue.push({
            kind: YX.dc.SkyTable,
            payload: WQ.payload
          })
        }
      }
    }
    const IF = /^data:[\w.+/-]*;base64,(?<base64>[A-Za-z0-9+/]*={0,2})$/;
    var jF = XQ(3021),
      BF = XQ(3243),
      yF = XQ(325),
      VF = XQ(218),
      DF = XQ(3029),
      pF = XQ(3034),
      GF = XQ(299),
      UF = XQ(307),
      bF = XQ(3139),
      vF = XQ(3160),
      dF = XQ(3173),
      HF = XQ(129),
      aF = XQ(367),
      lF = XQ(41039);
    class hF {
      constructor() {
        this.id = null, this.sentMs = null, this.roundTripMs = null, this.stopReplies = void 0, this.stopReplies = (0, eq.j)(Dw.H, (QQ => {
          this.onReply((0, oq.d)(Dw.H, QQ), performance.now())
        }))
      }
      onFrame(QQ, WQ) {
        null === this.id ? this.id = QQ : QQ !== this.id && (this.id = QQ, this.sentMs = document.hidden ? null : WQ)
      }
      onVisibilityChange() {
        this.sentMs = null
      }
      onReply(QQ, WQ) {
        QQ === this.id && null !== this.sentMs && (this.roundTripMs = Math.round(WQ - this.sentMs), this.sentMs = null)
      }
      take() {
        const QQ = this.roundTripMs;
        return this.roundTripMs = null, QQ
      }
      stop() {
        this.stopReplies()
      }
    }
    class iF {
      constructor() {
        this.sampled = 0, this.timed = 0, this.frameUs = 0, this.primed = !1, this.windowTimed = 0, this.windowUs = 0
      }
      onFrame(QQ, WQ, XQ, wQ) {
        const qQ = QQ - this.sampled >>> 0,
          TQ = WQ - this.timed >>> 0,
          zQ = XQ - this.frameUs >>> 0,
          sQ = this.primed;
        return this.sampled = QQ, this.timed = WQ, this.frameUs = XQ, this.primed = !0, !(!sQ || qQ > 64 || TQ > 64) && (wQ && zQ <= 1e6 * TQ && (this.windowTimed += TQ, this.windowUs += zQ), wQ && qQ > 0)
      }
      reset() {}
      snapshotAndReset() {
        const QQ = this.windowTimed > 0 ? this.windowUs / this.windowTimed / 1e3 : null;
        return this.windowTimed = 0, this.windowUs = 0, {
          passMs: QQ,
          submitToDoneMs: null
        }
      }
    }
    const cF = {
      lagP50Ms: null,
      lagP90Ms: null
    };
    class AF {
      constructor() {
        this.samples = new Float64Array(4096), this.count = 0
      }
      add(QQ, WQ) {
        const XQ = Math.min(4096, this.count + WQ);
        this.samples.fill(QQ, this.count, XQ), this.count = XQ
      }
      clear() {
        this.count = 0
      }
      take() {
        const QQ = this.count;
        if (this.count = 0, QQ < 30) return cF;
        const WQ = this.samples.subarray(0, QQ).sort(),
          XQ = XQ => WQ[Math.min(QQ - 1, Math.floor(XQ * QQ))];
        return {
          lagP50Ms: XQ(.5),
          lagP90Ms: XQ(.9)
        }
      }
    }
    class RF {
      constructor() {
        this.word = 0, this.lagUs = 0, this.primed = !1, this.lags = new AF
      }
      onFrame(QQ, WQ) {
        const XQ = QQ.headerWord(YX.F.Pacing),
          wQ = QQ.headerWord(YX.F.PacingLagUs),
          qQ = (XQ >>> YX.Z.LagsShift) - (this.word >>> YX.Z.LagsShift) & YX.Z.CountMask,
          TQ = qQ > 0 ? (wQ - this.lagUs >>> 0) / qQ / 1e3 : 0,
          zQ = this.primed && qQ <= 64 && TQ <= 6e4;
        this.word = XQ, this.lagUs = wQ, this.primed = !0, zQ && WQ && qQ > 0 && 0 !== (XQ & YX.Z.Defaulted) && this.lags.add(TQ, qQ)
      }
      onJoin() {
        this.lags.clear()
      }
      snapshotAndReset(QQ) {
        return QQ ? this.lags.take() : (this.lags.clear(), cF)
      }
    }
    var EF = XQ(3130),
      CF = XQ(34448),
      uF = XQ(3146),
      LF = XQ(41102),
      kF = XQ(34443),
      fF = XQ(3041),
      SF = XQ(3152);
    const tF = {
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
      compatibility_held: !0,
      software_adapter: !0,
      adapter_error: !0,
      load_failed: !0,
      start_no_adapter: !0,
      device_failed: !0,
      start_failed: !0,
      _unloaded: null
    };

    function oF(QQ) {
      return new eF(QQ)
    }
    class eF {
      constructor(QQ) {
        this.shell = QQ, this.tracker = new pF.d, this.gpu = new iF, this.pacing = new RF, this.timers = [], this.inGameAtLastFlush = !1, this.hasFlushedSinceConnect = !1, this.sendsDropped = 0, this.pendingLightFailures = 0, this.unsentPage = null, this.game = null, this.fpsSpanStartMs = -1, this.fpsFrames = 0, this.fpsOverTime = null, this.firstSpanFps = null, this.initialFps = null, this.ping = new hF, this.pacedCpuMs = 0, this.sendsStartMs = -1, this.sendsEndMs = -1, this.frameDebug = null, this.mainStall = new EF.c(this.tracker, ((QQ, WQ, XQ, wQ) => {
          this.shell.mainStalled(QQ, WQ, XQ, wQ)
        })), this.onVisibility = () => {
          this.tracker.onVisibilityChange(), this.ping.onVisibilityChange(), this.mainStall.reset(), !document.hidden && this.fpsSpanStartMs >= 0 && (this.fpsFrames = 0, this.fpsSpanStartMs = performance.now())
        }, this.onBeforeUnload = () => {
          this.mainStall.unloading()
        }, (0, CF.b)(QQ.backend, QQ.canvas, QQ.adapterVendor), this.tracker.start((() => !QQ.inGame()), this.gpu, "wasm"), document.addEventListener("visibilitychange", this.onVisibility), window.addEventListener("beforeunload", this.onBeforeUnload), (0, fF.d)("wasm", (() => {
          const {
            n: WQ,
            sampleCount: XQ
          } = (0, LF.f)();
          return `${QQ.backend}, quality steps aim at up to ${SF.c.target.maxFps} fps, pixel n ${WQ}, msaa ${XQ}`
        }), (WQ => {
          WQ.setLoadCounts(QQ.readLoadCounts), this.frameDebug = WQ
        })), this.timers.push(setInterval((() => {
          this.flush(), this.fpsOverTime = null, this.initialFps = null
        }), 1e4), setInterval((() => {
          this.followGame() && this.shell.canSend() && (this.hasFlushedSinceConnect || (this.flush(), this.hasFlushedSinceConnect = !0))
        }), 250))
      }
      animationFrame(QQ) {
        var WQ;
        this.mainStall.animationFrame(), this.tracker.onAnimationFrame(QQ), null === (WQ = this.frameDebug) || void 0 === WQ || WQ.animationFrame()
      }
      sendsWent(QQ, WQ, XQ) {
        this.ping.onFrame(QQ.headerWord(YX.F.PingSent), WQ), this.sendsStartMs = WQ, this.sendsEndMs = XQ
      }
      frameRan(QQ, WQ, XQ, wQ) {
        var qQ;
        this.ping.onFrame(QQ.headerWord(YX.F.PingSent), XQ);
        const TQ = this.tracker;
        this.pacing.onFrame(QQ, TQ.isSampling());
        const zQ = QQ.headerWord(YX.F.TickUs) / 1e3 + (0, ww.I)();
        var sQ;
        (TQ.tV(zQ), null === (qQ = this.frameDebug) || void 0 === qQ || qQ.wasmFrame(QQ, WQ, XQ, wQ, TQ.isSampling(), zQ), null !== this.game) && (null === (sQ = this.frameDebug) || void 0 === sQ || sQ.inGame());
        const FQ = this.sendsStartMs >= WQ ? this.sendsEndMs - this.sendsStartMs : 0,
          PQ = Math.max(0, XQ - WQ - zQ - FQ);
        if ("drawn" !== wQ) return void("paced" === wQ ? (this.pacedCpuMs += PQ, this.mainStall.paced()) : "skipped" === wQ && this.mainStall.reset());
        this.followGame(), this.mainStall.drawn(WQ), TQ.onFrameStart(WQ);
        this.gpu.onFrame(QQ.headerWord(YX.F.GpuSampled), QQ.headerWord(YX.F.GpuTimed), QQ.headerWord(YX.F.GpuFrameUs), TQ.isSampling()) && TQ.onGpuSampleStarted(), TQ.onFrameCpu(PQ + this.pacedCpuMs), this.pacedCpuMs = 0, this.countFpsFrame(WQ)
      }
      framePaced() {
        var QQ;
        this.mainStall.paced(), null === (QQ = this.frameDebug) || void 0 === QQ || QQ.wasmPeekPaced(this.tracker.isSampling())
      }
      stop() {
        for (const QQ of this.timers) clearInterval(QQ);
        this.timers.length = 0, document.removeEventListener("visibilitychange", this.onVisibility), window.removeEventListener("beforeunload", this.onBeforeUnload), this.mainStall.stop(), this.ping.stop(), this.tracker.limiterTelemetry.stop()
      }
      followGame() {
        const QQ = this.shell.joinedGame();
        if (QQ !== this.game) {
          var WQ;
          if (this.game = QQ, null !== QQ) null === (WQ = this.frameDebug) || void 0 === WQ || WQ.joined();
          this.tracker.snapshotAndReset(), this.pacing.onJoin(), this.hasFlushedSinceConnect = !1, this.inGameAtLastFlush = !1, this.fpsSpanStartMs = -1, this.fpsFrames = 0, this.pacedCpuMs = 0, this.firstSpanFps = null, this.fpsOverTime = null, this.initialFps = null, this.mainStall.reset()
        }
        return null !== QQ
      }
      countFpsFrame(QQ) {
        if (this.fpsSpanStartMs < 0) {
          if (!this.shell.inGame()) return;
          this.fpsSpanStartMs = QQ
        }
        this.fpsFrames++;
        const WQ = QQ - this.fpsSpanStartMs;
        if (!(WQ < dF.c)) {
          if (!document.hidden) {
            const QQ = 1e3 * this.fpsFrames / WQ;
            this.firstSpanFps ??= QQ, this.initialFps = this.firstSpanFps, this.fpsOverTime = QQ
          }
          this.fpsFrames = 0, this.fpsSpanStartMs = QQ
        }
      }
      flush() {
        const QQ = this.followGame(),
          {
            cpuFrameMs: WQ,
            refreshHz: XQ,
            cpuBottleneck: qQ,
            frameIntervalCv: TQ,
            ...zQ
          } = this.tracker.snapshotAndReset(),
          sQ = this.shell.inGame(),
          FQ = sQ && this.inGameAtLastFlush,
          PQ = FQ ? zQ : (0, DF.f)(zQ),
          gQ = this.pacing.snapshotAndReset(FQ);
        if (this.inGameAtLastFlush = sQ, this.pendingLightFailures += this.shell.takeFailedMeshJobs(), !QQ || !this.shell.canSend()) return;
        const JQ = performance.now(),
          IQ = (0, vF.v)((0, vF.u)(JQ), this.unsentPage),
          BQ = function(QQ, WQ, XQ, qQ, TQ, zQ, sQ, FQ) {
            var PQ, gQ, JQ, rQ, IQ;
            const jQ = {},
              {
                canvas: BQ
              } = QQ,
              yQ = (0, bF.h)({
                refreshHz: WQ.refreshHz,
                msaa: QQ.msaa(),
                autoMsaaOff: (0, kF.e)()
              });
            for (const VQ of (0, BF.f)()) {
              const DQ = VQ.name;
              let pQ;
              if ((0, yF.B)(DQ)) pQ = (0, vF.e)(DQ);
              else if ((0, vF.i)(DQ)) pQ = FQ[DQ];
              else if ((0, bF.l)(DQ)) pQ = yQ[DQ];
              else switch (DQ) {
                case "fps":
                  pQ = qQ;
                  break;
                case "HF":
                  pQ = TQ;
                  break;
                case "cF":
                  pQ = (0, uF.C)((0, LF.f)().n);
                  break;
                case "AF":
                  pQ = Math.max(BQ.width, BQ.height);
                  break;
                case "RF":
                  pQ = Math.min(BQ.width, BQ.height);
                  break;
                case "EF":
                  pQ = navigator.hardwareConcurrency || null;
                  break;
                case "CF":
                  pQ = (0, Kq.getWebGpuSupported)();
                  break;
                case "uF":
                  pQ = null === QQ.fallbackReason ? null : tF[QQ.fallbackReason];
                  break;
                case "LF":
                  pQ = WQ.cpuFrameMs;
                  break;
                case "kF":
                  pQ = WQ.refreshHz;
                  break;
                case "fF":
                  pQ = WQ.cpuBottleneck;
                  break;
                case "SF":
                  pQ = WQ.frameIntervalCv;
                  break;
                case "tF":
                  pQ = WQ.frameMs;
                  break;
                case "oF":
                  pQ = WQ.tickMs;
                  break;
                case "NF":
                  pQ = WQ.mainBusyShare;
                  break;
                case "ZF":
                  pQ = WQ.mainProbeDelayMs;
                  break;
                case "eF":
                  pQ = WQ.longAnimationFramesPerMin;
                  break;
                case "nF":
                  pQ = WQ.longAnimationFrameTimeShare;
                  break;
                case "YF":
                  pQ = WQ.longAnimationFrameScriptShare;
                  break;
                case "OF":
                  pQ = WQ.gpuPassMs;
                  break;
                case "KF":
                  pQ = WQ.gpuSubmitToDoneMs;
                  break;
                case "mF":
                  pQ = XQ.lagP50Ms;
                  break;
                case "MF":
                  pQ = XQ.lagP90Ms;
                  break;
                case "JP":
                  pQ = (0, jF.h)(zQ);
                  break;
                case "iF":
                  pQ = sQ;
                  break;
                case "QP":
                case "WP":
                case "XP":
                case "wP":
                case "qP":
                case "TP":
                case "zP":
                case "sP":
                case "FP":
                case "PP":
                case "gP":
                case "rP":
                case "IP":
                case "jP":
                case "BP":
                  pQ = null;
                  break;
                case "iP":
                  pQ = (0, Kq.getPlatformType)();
                  break;
                case "cP":
                  pQ = (0, Kq.getGpuVendor)();
                  break;
                case "AP":
                  pQ = lF.e[QQ.backend];
                  break;
                case "RP":
                  pQ = (0, HF.c)();
                  break;
                case "EP":
                  pQ = (0, Kq.getOperatingSystem)();
                  break;
                case "CP":
                  pQ = (0, Kq.getTrafficSource)();
                  break;
                case "uP":
                  pQ = null !== (PQ = wQ.b.get("gameEntrySource")) && void 0 !== PQ ? PQ : VF.g;
                  break;
                case "LP":
                  pQ = null !== (gQ = WQ.frameLimiter) && void 0 !== gQ ? gQ : VF.g;
                  break;
                case "kP":
                  pQ = (0, GF.g)();
                  break;
                case "fP":
                  pQ = null !== (JQ = (0, UF.b)()) && void 0 !== JQ ? JQ : VF.g;
                  break;
                case "SP":
                  pQ = (0, GF.d)(BQ.width, BQ.height);
                  break;
                case "tP":
                  pQ = (0, BF.g)(-(new Date).getTimezoneOffset());
                  break;
                case "nP":
                  pQ = null !== (rQ = QQ.fallbackReason) && void 0 !== rQ ? rQ : VF.g;
                  break;
                case "NP":
                  pQ = "ready";
                  break;
                case "ZP":
                  pQ = (0, Kq.getSoftwareRenderer)();
                  break;
                case "eP":
                  pQ = null !== QQ.shaderPackReach() ? "true" : "false";
                  break;
                case "OP":
                  pQ = null !== (IQ = QQ.shaderPackReach()) && void 0 !== IQ && IQ.sceneDepth ? "true" : "false";
                  break;
                case "KP": {
                  const WQ = QQ.shaderPackReach();
                  pQ = null !== WQ && void 0 !== WQ && WQ.sunShadow ? "all" : null !== WQ && void 0 !== WQ && WQ.airShadow ? "air" : "none";
                  break
                }
                case "mP":
                  pQ = aF.A;
                  break;
                case "Tg":
                  pQ = (0, vF.l)();
                  break;
                case "oP": {
                  const WQ = QQ.HB();
                  pQ = null === WQ ? VF.g : String(WQ);
                  break
                }
                case "xP":
                case "YP":
                  pQ = VF.g;
                  break;
                default:
                  throw new Error(`Unhandled field name: ${DQ}`)
              }
              if (void 0 === pQ) throw new Error(`Metric ${DQ} has no value`);
              jQ[DQ] = pQ
            }
            return jQ
          }(this.shell, {
            cpuFrameMs: WQ,
            refreshHz: XQ,
            cpuBottleneck: qQ,
            frameIntervalCv: TQ,
            ...PQ
          }, gQ, this.fpsOverTime, this.initialFps, this.pendingLightFailures, this.ping.take(), IQ);
        if (! function(QQ, WQ, XQ) {
            return (0, nW.c)(), QQ(jQ.s.Send, WQ, XQ)
          }(this.shell.writeCmd, rQ.Ad, function(QQ) {
            const WQ = (0, uQ.e)((0, NW.e)(QQ)),
              XQ = new Uint8Array(jQ.le.BYTES + WQ.length);
            return new DataView(XQ.buffer).setUint16(0, NW.d.AnalyticsUpdate, !0), XQ.set(WQ, jQ.le.BYTES), XQ
          }(BQ))) return this.unsentPage = IQ, void(0 === this.sendsDropped++ && console.warn("[wasm-client] an analytics update found the cmd ring full: dropped"));
        this.unsentPage = null, this.pendingLightFailures -= Math.min(this.pendingLightFailures, jF.f), (0, vF.q)(BQ, "wasm", JQ)
      }
    }
    var nF = XQ(39887);

    function xF(QQ, WQ, XQ) {
      const wQ = new Map;
      return (0, nF.b)(((QQ, XQ, wQ) => WQ.ez(QQ, XQ, wQ)), ((WQ, XQ, qQ) => {
        const TQ = `${WQ},${XQ},${qQ}`;
        return wQ.has(TQ) || wQ.set(TQ, (0, kW.b)(QQ, WQ, XQ, qQ)), wQ.get(TQ)
      }), XQ)
    }
    var YF = XQ(39893),
      NF = XQ(41094);

    function ZF(QQ) {
      const WQ = null !== QQ && 0 !== (jQ.x.playerFlags(QQ.api.apiView, 0) & jQ.ae.CursorAim);
      WQ !== (0, NF.l)() && (0, NF.H)(WQ, null !== QQ)
    }

    function OF(QQ) {
      return (0, Vw.c)(Dw.B, QQ)
    }
    var KF = XQ(41238);
    const mF = new TQ.c((QQ => XQ(42886)(`./${QQ}/${QQ}Client`)));
    let MF = null,
      QP = null;
    async function WP(QQ) {
      MF ??= XQ.e(28).then((() => XQ(39421))).then((QQ => {
        QP = QQ.createDefaultClientPlugins
      }), (QQ => {
        throw MF = null, QQ
      })), await Promise.all([mF.load(QQ), MF])
    }

    function XP(QQ) {
      QQ.load(new CW(Nw, new Kw))
    }
    let wP = !1;
    const qP = new WeakMap;

    function TP(QQ) {
      try {
        QQ()
      } catch (WQ) {
        console.error("[bloxd-wasm-client] a session-end step failed", WQ)
      }
    }

    function zP(QQ, WQ) {
      ! function() {
        var QQ, WQ;
        nw.Howler.volume();
        const XQ = nw.Howler;
        null === (QQ = XQ._autoResume) || void 0 === QQ || QQ.call(XQ), null === (WQ = XQ._autoSuspend) || void 0 === WQ || WQ.call(XQ)
      }(), WQ.audio.prepare();
      const XQ = new GQ(WQ.core, WQ.memory, WQ.audio);
      let TQ;
      try {
        TQ = new Dq(XQ, WQ.options)
      } catch (rQ) {
        return QQ.crash(Gq.D, rQ), null
      }(0, FQ.f)(pq(XQ, TQ));
      const gQ = new cs({
        running: QQ,
        api: XQ,
        core: WQ.core,
        memory: WQ.memory,
        staleOr: WQ.staleOr,
        reportFault: WQ.reportReplayFault,
        options: WQ.options,
        sessionInfo: WQ.sessionInfo,
        replayShaderPack: WQ.replayShaderPack
      });
      (0, ww.y)();
      const JQ = new kw({
        api: XQ,
        tables: TQ,
        sessionInfo: WQ.sessionInfo,
        gameFactory: QQ => mF.loadedFactory(QQ),
        defaultPlugins: (QQ, WQ, XQ, wQ) => {
          if (null === QP) throw new Error("The default plugins started before they loaded");
          return QP(QQ, WQ, XQ, wQ)
        },
        serverOptions: WQ.options,
        onNetEvent: QQ => {
          gQ.netEvent(QQ), WQ.onNetEvent(QQ)
        },
        setLocalOptions: WQ => {
          Rs(QQ, {
            changes: WQ,
            reset: !1
          })
        },
        playSound: (QQ, XQ, wQ, qQ, TQ, zQ, sQ) => WQ.audio.playGame(QQ, XQ, wQ, qQ, TQ, zQ, sQ),
        preloadSounds: QQ => {
          WQ.audio.preload(function(QQ) {
            const WQ = [];
            for (const XQ of QQ) {
              const QQ = RW(XQ);
              QQ >= 0 && WQ.push(DW[QQ])
            }
            return WQ
          }(QQ))
        },
        onSessionEnd: () => {
          TP(qQ.m), TP(qq), TP((() => {
            wQ.b.set({
              openInGameMenuName: null
            })
          })), TP((() => {
            WQ.audio.endSession()
          }))
        },
        beforeWrite: WQ.beforeWrite,
        beforeOp: WQ.beforeOp,
        cameraScreen: wq,
        showCameraFacing: Tq,
        onEventOverflow: WQ.onEventOverflow,
        screenBandY: sQ.k,
        replayEntities: gQ.entityHooks,
        hasPackModel: WQ.hasPackModel
      });
      return JQ.attach(QQ), qP.set(JQ, gQ), ow(JQ.items, WQ.audio),
        function(QQ) {
          QQ.setClientFreeCameraGrant("isDev", !1);
          const WQ = WQ => {
            QQ.setClientFreeCameraGrant("hasDeveloperRank", WQ.playerHasRank("developer"))
          };
          (0, zQ.o)("userContextUpdated", WQ)
        }(JQ), wP || (wP = !0, (0, zQ.o)("appManagerUpdated|openInGameMenuName", (QQ => {
          !QQ && (0, PQ.u)().includes(PQ.e) && (0, PQ.y)(PQ.e)
        }))), JQ
    }

    function sP(QQ) {
      try {
        QQ.closeGame()
      } finally {
        var WQ;
        null === (WQ = qP.get(QQ)) || void 0 === WQ || WQ.stop(), qP.delete(QQ)
      }
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);