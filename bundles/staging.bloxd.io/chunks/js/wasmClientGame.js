export const id = 57;
export const ids = [57];
export const modules = {
  36616: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Xt,
      g: () => dt,
      j: () => Ht,
      k: () => jt,
      o: () => bt
    });
    var Ot = Vt(712),
      qt = Vt(1842),
      Dt = Vt(4963);
    class mt {
      constructor(tt, et) {
        this.width = tt, this.uQ = et, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(tt * et)
      }
      push(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const Vt = this.data,
          Ot = this.next * this.width;
        for (let qt = 0; qt < this.width; qt++) Vt[Ot + qt] = tt[et + qt];
        this.next = (this.next + 1) % this.uQ, this.size = Math.min(this.size + 1, this.uQ)
      }
      rows() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1 / 0;
        const Vt = [],
          Ot = (this.next - this.size + this.uQ) % this.uQ;
        for (let qt = 0; qt < this.size; qt++) {
          const Dt = (Ot + qt) % this.uQ * this.width;
          this.data[Dt + tt] >= et && Vt.push(Array.from(this.data.subarray(Dt, Dt + this.width)))
        }
        return Vt
      }
      lines() {
        return this.rows().map((tt => tt.join(",")))
      }
    }
    const dt = 10,
      jt = {
        idle: 0,
        hE: 1,
        qI: 2,
        mI: 3,
        my: 4
      },
      Ht = {
        none: 0,
        skipped: 1,
        paced: 2,
        drawn: 3
      },
      Xt = {
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
      Qt = 12e3,
      lt = ["nowMs", "dtMs", "rawX", "rawY", "turnedX", "turnedY", "outcome", "velocityX", "velocityY", "limit"],
      Et = ["timeStamp", "nowMs", "movementX", "movementY", "locked"],
      ft = ["nowMs", "dtMs", "heading", "pitch", "kind"],
      wt = ["nowMs", "source", "headingBefore", "pitchBefore", "headingAfter", "pitchAfter"],
      yt = ["nowMs", "change", "count"];

    function Nt(tt) {
      return "js" === tt ? Xt.jsClient : Xt.wasmClient
    }
    class Mt {
      constructor() {
        this.steps = new mt(dt, Qt), this.events = new mt(Et.length, Qt), this.frames = new mt(ft.length, Qt), this.cameraSets = new mt(Dt.e, 256), this.changes = new mt(yt.length, 256)
      }
    }
    const bt = new class {
      constructor() {
        this.rings = null, this.sample = new Float64Array(Et.length), this.startedClient = null, this.startedAtMs = 0
      }
      get client() {
        return this.startedClient
      }
      start(tt, et) {
        this.startedClient = tt, this.startedAtMs = performance.now(), null !== this.rings ? this.change(Nt(tt)) : et && this.allocate()
      }
      lockGained() {
        this.allocate(), this.change(Xt.lockGained)
      }
      allocate() {
        null === this.rings && (this.rings = new Mt, null !== this.startedClient && this.changeAt(this.startedAtMs, Nt(this.startedClient), 1))
      }
      step(tt, et) {
        var Vt;
        tt[et + 6] !== jt.my && (null === (Vt = this.rings) || void 0 === Vt || Vt.steps.push(tt, et))
      }
      cameraSet(tt, et) {
        var Vt;
        null === (Vt = this.rings) || void 0 === Vt || Vt.cameraSets.push(tt, et)
      }
      mouseMove(tt, et) {
        const Vt = this.rings;
        if (null === Vt) return;
        const Ot = this.sample;
        Ot[0] = tt.timeStamp, Ot[1] = performance.now(), Ot[2] = tt.movementX, Ot[3] = tt.movementY, Ot[4] = et ? 1 : 0, Vt.events.push(Ot)
      }
      frame(tt, et, Vt, Ot) {
        const qt = this.rings;
        if (null === qt || Ot === Ht.none) return;
        const Dt = this.sample;
        Dt[0] = performance.now(), Dt[1] = tt, Dt[2] = et, Dt[3] = Vt, Dt[4] = Ot, qt.frames.push(Dt)
      }
      change(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.changeAt(performance.now(), tt, et)
      }
      changeAt(tt, et, Vt) {
        const Ot = this.rings;
        if (null === Ot) return;
        const qt = this.sample;
        qt[0] = tt, qt[1] = et, qt[2] = Vt, Ot.changes.push(qt)
      }
      dumpText() {
        var tt, et;
        const Vt = this.rings;
        return [`look records (${this.startedClient}): ${lt.join(",")}`, ...null !== (tt = null === Vt || void 0 === Vt ? void 0 : Vt.steps.lines()) && void 0 !== tt ? tt : [], `mousemove events: ${Et.join(",")}`, ...null !== (et = null === Vt || void 0 === Vt ? void 0 : Vt.events.lines()) && void 0 !== et ? et : []].join("\n")
      }
      toJson(tt, et) {
        var Vt;
        const qt = tt - 6e4,
          Dt = this.rings,
          mt = function(tt, et) {
            var Vt;
            let Ot = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            const Dt = null !== (Vt = null === tt || void 0 === tt ? void 0 : tt.rows(Ot, qt)) && void 0 !== Vt ? Vt : [];
            return {
              columns: et,
              fromMs: 0 === Dt.length ? null : Dt[0][Ot],
              rows: Dt
            }
          };
        return {
          version: Ot.d,
          client: null !== (Vt = this.startedClient) && void 0 !== Vt ? Vt : "not started",
          savedAt: (new Date).toISOString(),
          savedAtMs: tt,
          keptMs: 6e4,
          page: window.location.href,
          userAgent: navigator.userAgent,
          devicePixelRatio: window.devicePixelRatio,
          screen: {
            width: window.screen.width,
            height: window.screen.height
          },
          zy: null !== document.pointerLockElement,
          visibility: document.visibilityState,
          ...et,
          outcomes: jt,
          frameKinds: Ht,
          changes: Xt,
          lookSteps: mt(null === Dt || void 0 === Dt ? void 0 : Dt.steps, lt),
          mouseMoves: mt(null === Dt || void 0 === Dt ? void 0 : Dt.events, Et, 1),
          frames: mt(null === Dt || void 0 === Dt ? void 0 : Dt.frames, ft),
          cameraSets: mt(null === Dt || void 0 === Dt ? void 0 : Dt.cameraSets, wt),
          pageChanges: mt(null === Dt || void 0 === Dt ? void 0 : Dt.changes, yt)
        }
      }
      save(tt) {
        const et = JSON.stringify(this.toJson(performance.now(), tt));
        (0, qt.c)(new Blob([et], {
          type: "application/json"
        }), `bloxd-mouse-look-${(new Date).toISOString().replace(/[:.]/g,"-")}.json`)
      }
    }
  },
  39224: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => Dt,
      f: () => qt
    });
    var Ot = Vt(31);

    function qt(tt) {
      return "refetchCode" === tt || "devDownloadJson" === tt || tt.startsWith("Plugin")
    }

    function Dt(tt, et) {
      "refetchCode" !== tt ? "Plugin|MobAiPlugin|ShowPetUi" !== tt ? Promise.all([Vt.e(109), Vt.e(110), Vt.e(105), Vt.e(107), Vt.e(218)]).then((() => Vt(41997))).then((Vt => {
        let {
          runClientGameMessage: Ot
        } = Vt;
        Ot(tt, et)
      })).catch((et => {
        console.error(`Game message ${tt} failed`, et)
      })) : Ot.j.sw("showPetUi", et) : Ot.j.sw("refetchCode")
    }
  },
  42829: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => Ot,
      c: () => qt
    });
    const Ot = ["recording", "freecam", "keyframe"];

    function qt() {
      const tt = crypto.getRandomValues(new Uint32Array(2));
      return BigInt(tt[1]) << 32n | BigInt(tt[0])
    }
  },
  34308: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => dt,
      c: () => jt
    });
    var Ot = Vt(26);
    const qt = 24,
      Dt = "farNametags",
      mt = 1e5;

    function dt() {
      var tt;
      return null === (tt = Ot.b.get("showDistantNametags")) || void 0 === tt || tt
    }

    function jt() {
      var tt;
      return null !== (tt = function() {
        const tt = new URLSearchParams(window.location.search).get(Dt),
          et = null === tt || "" === tt ? NaN : Number(tt);
        return Number.isFinite(et) && et >= 0 ? Math.min(et, mt) : null
      }()) && void 0 !== tt ? tt : dt() ? 0 : qt
    }
  },
  42820: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      blockIdOf: () => xj.c,
      clearWasmCameraScreen: () => Oq,
      creativeItemIds: () => OO.creativeItemIds,
      decodeMapSettings: () => sj,
      drainTextRerasters: () => od.c,
      enchantmentPerksOf: () => OO.enchantmentPerksOf,
      endGameHost: () => HH,
      followCursorAim: () => gj,
      followMenuPrefs: () => VD,
      loadAudio: () => qH,
      loadClientGame: () => OH,
      loadTextIcons: () => od.f,
      rasterText: () => zd.b,
      readBoardToEdit: () => pj,
      readDrawCensus: () => nj.h,
      setTextHost: () => od.k,
      setTextLocalPlayer: () => od.m,
      showInCreativeInvenOf: () => OO.showInCreativeInvenOf,
      startGameHost: () => jH,
      startShellAnalytics: () => ij,
      startSkyFeed: () => Xj,
      textChanged: () => od.q,
      warmText: () => zd.e,
      wasmCameraScreen: () => Vq
    });
    Vt(36757);
    var Ot = Vt(26),
      qt = Vt(37053),
      Dt = Vt(39367),
      mt = Vt(31),
      dt = Vt(3470),
      jt = Vt(37044),
      Ht = Vt(1387),
      Xt = Vt(705),
      Qt = Vt(38473),
      lt = Vt(4960),
      Et = Vt(40831),
      ft = Vt(40761);
    const wt = ft.Lb / 4,
      yt = ft.r.PlaySound,
      Nt = ft.r.SoundReset,
      Mt = lt.db.ReplayFailed,
      bt = lt.db.RecorderEvent;
    class Jt {
      constructor(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.core = tt, this.memory = et, this.audio = Vt, this.serverIds = new Int32Array(256).fill(ft.hd), this.kinds = new Uint16Array(256), this.idStr = new Array(256).fill(null), this.indexById = new Map, this.queries = void 0, this.buffer = null, this.viewPtr = -1, this.view = new DataView(new ArrayBuffer(ft.x.BYTES)), this.renderPtr = 0, this.uQ = 0, this.renderCapacity = 0, this.render = new Float32Array(0), this.visPtr = 0, this.vis = new Uint8Array(0), this.renderBuffer = null, this.eventsBuffer = null, this.eventsPtr = 0, this.eventsLen = 0, this.events = new DataView(new ArrayBuffer(0)), this.audioView = null, this.scratchPtr = -1, this.corruption = null, this.replay = null, this.queries = new ft.ab(tt, (() => {
          this.scratchPtr = -1, this.ensureViews()
        }))
      }
      scratch() {
        return this.scratchPtr < 0 && (this.scratchPtr = this.core.iqt(), this.ensureViews()), this.scratchPtr
      }
      eventBytes(tt, et) {
        const Vt = this.eventView();
        return new Uint8Array(Vt.buffer, Vt.byteOffset + tt, et)
      }
      get apiView() {
        return this.ensureViews(), this.view
      }
      ensureViews() {
        this.memory().buffer !== this.buffer && this.reView()
      }
      get localId() {
        return ft.x.localId(this.apiView, 0)
      }
      localDeaths() {
        return ft.x.localDeaths(this.apiView, 0)
      }
      rereadDirectory() {
        const tt = this.apiView,
          et = ft.x.entRenderPtr(tt, 0),
          Vt = ft.x.entVisPtr(tt, 0),
          Ot = ft.x.entCapacity(tt, 0);
        if (et !== this.renderPtr || Vt !== this.visPtr || Ot !== this.uQ || this.renderBuffer !== this.buffer) {
          this.renderPtr = et, this.visPtr = Vt, this.uQ = Ot, this.renderBuffer = this.buffer;
          const tt = this.memoryView(Float32Array, et, Ot * wt, "the render array"),
            qt = this.memoryView(Uint8Array, Vt, Ot, "the visibility array");
          this.renderCapacity = tt && qt ? Ot : 0, this.render = tt && qt ? tt : new Float32Array(0), this.vis = tt && qt ? qt : new Uint8Array(0)
        }
      }
      memoryView(tt, et, Vt, Ot) {
        try {
          return (0, Et.o)(tt, this.memory().buffer, et, Vt, Ot)
        } catch (qt) {
          return this.keepCorruption(qt), null
        }
      }
      memoryData(tt, et, Vt, Ot) {
        try {
          return (0, Et.e)(this.memory().buffer, tt, et, Vt, Ot)
        } catch (qt) {
          return this.keepCorruption(qt), null
        }
      }
      reportCorruption(tt) {
        this.keepCorruption(new Et.d(tt))
      }
      keepCorruption(tt) {
        if (!(tt instanceof Et.d)) throw tt;
        this.corruption ??= tt
      }
      throwCorruption() {
        if (this.corruption) throw this.corruption
      }
      walk(tt, et, Vt) {
        this.rereadDirectory(), this.throwCorruption();
        const {
          ptr: Ot,
          len: qt
        } = tt;
        this.eventsPtr = Ot, this.eventsLen = qt, this.eventsBuffer = null;
        const Dt = this.eventView();
        for (let Ht = 0; Ht < qt;) {
          const tt = Dt.getUint32(Ht, !0),
            Vt = 65535 & tt,
            Ot = tt >>> 16,
            qt = Ht + lt.bb;
          if (Vt === ft.r.EntitySpawned) {
            var mt;
            if (Ot !== ft.Nb.BYTES) throw vt(Vt, Ht, Ot);
            const tt = ft.Nb.serverId(Dt, qt);
            this.spawned(tt, ft.Nb.index(Dt, qt), ft.Nb.kind(Dt, qt)), null === (mt = et.entityAdded) || void 0 === mt || mt.call(et, tt)
          } else if ((Vt === ft.r.ChunkSlot || Vt === ft.r.EntityInfoChanged) && !(0, ft.xe)(Vt, Dt, qt, Ot, et)) throw vt(Vt, Ht, Ot);
          Ht = qt + (0, lt.Fe)(Ot)
        }
        try {
          var dt;
          null === (dt = et.afterPrescan) || void 0 === dt || dt.call(et), this.throwCorruption(), !Vt() && this.dispatch(tt, et, Vt) && (this.throwCorruption(), this.applyListener(), et.afterWalk(tt.kind)), this.throwCorruption()
        } catch (jt) {
          throw jt instanceof Et.d && (this.corruption ??= jt), jt
        } finally {
          Vt() || null !== this.corruption || this.applyDespawns(qt, et)
        }
      }
      applyDespawns(tt, et) {
        const Vt = this.eventView();
        for (let qt = 0; qt < tt;) {
          const tt = Vt.getUint32(qt, !0),
            Dt = qt + lt.bb;
          if ((65535 & tt) === ft.r.EntityDespawned && tt >>> 16 === ft.Nb.BYTES) {
            const tt = ft.Nb.serverId(Vt, Dt);
            var Ot;
            if (this.despawned(tt, ft.Nb.index(Vt, Dt))) null === (Ot = et.entityRemoved) || void 0 === Ot || Ot.call(et, tt)
          }
          qt = Dt + (0, lt.Fe)(tt >>> 16)
        }
        this.rereadDirectory()
      }
      dispatch(tt, et, Vt) {
        const {
          len: Ot,
          net: qt,
          netOffsets: Dt
        } = tt;
        let mt = this.eventView(),
          dt = 0;
        for (let ut = 0; ut < Ot;) {
          const tt = mt.getUint32(ut, !0),
            Ot = 65535 & tt,
            Kt = tt >>> 16,
            Wt = ut + lt.bb;
          let St = !1;
          if (dt < qt.length && Dt[dt] === ut) et.netEvent(qt[dt]), dt++, St = !0;
          else if (Ot === lt.db.LocalPlayerBound) {
            var jt;
            if (Kt !== lt.Rb) throw vt(Ot, ut, Kt);
            null === (jt = et.localPlayerBound) || void 0 === jt || jt.call(et, mt.getInt32(Wt, !0)), St = !0
          } else if (Ot === lt.db.LocalHurt) {
            var Ht;
            if (Kt !== lt.Qb) throw vt(Ot, ut, Kt);
            null === (Ht = et.localHurt) || void 0 === Ht || Ht.call(et, mt.getInt32(Wt, !0), mt.getFloat32(Wt + 4, !0), mt.getUint32(Wt + 8, !0)), St = !0
          } else if (Ot === lt.db.AttackHit) {
            var Xt;
            if (Kt !== lt.d) throw vt(Ot, ut, Kt);
            const tt = mt.getFloat32(Wt, !0),
              Vt = mt.getFloat32(Wt + 4, !0),
              qt = mt.getFloat32(Wt + 8, !0),
              Dt = mt.getUint32(Wt + 12, !0);
            null === (Xt = et.attackHit) || void 0 === Xt || Xt.call(et, tt, Vt, qt, 0 !== (Dt & lt.i.Crit), 0 !== (Dt & lt.i.HitSelf))
          } else if (Ot === lt.db.PhysicsType) {
            var Qt;
            if (Kt !== lt.qc) throw vt(Ot, ut, Kt);
            null === (Qt = et.physicsType) || void 0 === Qt || Qt.call(et, mt.getUint32(Wt, !0), mt.getInt32(Wt + 4, !0)), St = !0
          } else if (Ot === lt.db.VehicleEffect) {
            var Et;
            const tt = ht(mt, Wt, Kt);
            if (null === tt) throw vt(Ot, ut, Kt);
            null === (Et = et.vehicleEffect) || void 0 === Et || Et.call(et, tt.op, tt.name, tt.icon, tt.level, tt.durationMs), St = !0
          } else if (Ot === lt.db.ZoomChanged) {
            var wt;
            if (Kt !== lt.me) throw vt(Ot, ut, Kt);
            null === (wt = et.zoomChanged) || void 0 === wt || wt.call(et, mt.getFloat32(Wt, !0), mt.getUint8(Wt + 4)), St = !0
          } else if (Ot === lt.db.ZoomDisabled) {
            var Jt;
            if (0 !== Kt) throw vt(Ot, ut, Kt);
            null === (Jt = et.zoomDisabled) || void 0 === Jt || Jt.call(et), St = !0
          } else if (Ot === lt.db.GameCamera) {
            var Ct;
            null === (Ct = et.gameCamera) || void 0 === Ct || Ct.call(et, new Uint8Array(mt.buffer, mt.byteOffset + Wt, Kt).slice()), St = !0
          } else if (Ot === ft.r.ChunkSlot || Ot === ft.r.EntityInfoChanged);
          else if (Ot >= yt && Ot <= Nt) {
            if (this.audio && !this.audio.onAudioEvent(Ot, mt, Wt, Kt)) throw vt(Ot, ut, Kt)
          } else if (Ot >= Mt && Ot <= bt) {
            if (this.replay) {
              if (!this.replay.onReplayEvent(Ot, mt, Wt, Kt)) throw vt(Ot, ut, Kt);
              St = !0
            }
          } else if (Ot >= ft.wd && Ot <= ft.xd && Ot !== lt.db.EnvLighting) {
            if (!(0, ft.xe)(Ot, mt, Wt, Kt, et)) throw vt(Ot, ut, Kt);
            St = !0
          }
          if (St) {
            if (Vt()) return !1;
            mt = this.eventView()
          }
          ut = Wt + (0, lt.Fe)(Kt)
        }
        return !Vt()
      }
      applyListener() {
        var tt;
        if (!this.audio) return;
        const et = ft.x.audioViewPtr(this.apiView, 0),
          Vt = this.memory().buffer;
        let Ot = this.audioView;
        (null === (tt = Ot) || void 0 === tt ? void 0 : tt.buffer) === Vt && Ot.byteOffset === et || (Ot = (0, Et.e)(Vt, et, ft.A.BYTES, 8, "the audio view"), this.audioView = Ot), Ot && this.audio.applyListener(Ot)
      }
      indexOf(tt) {
        return this.indexById.get("number" === typeof tt ? tt : +tt)
      }
      isLocal(tt) {
        return tt !== ft.hd && tt === ft.x.localId(this.apiView, 0)
      }
      YM(tt) {
        const et = [0, 0, 0];
        return this.readPosition("number" === typeof tt ? tt : +tt, et) ? et : null
      }
      readPosition(tt, et) {
        const Vt = this.apiView;
        if (void 0 !== this.indexById.get(tt) && this.isLocal(tt)) {
          for (let tt = 0; tt < 3; tt++) et[tt] = ft.x.localPos(Vt, 0, tt);
          return !0
        }
        return this.readDrawnPosition(tt, et)
      }
      readDrawnPosition(tt, et) {
        const Vt = this.apiView,
          Ot = this.indexById.get(tt);
        if (void 0 === Ot || Ot >= this.renderCapacity) return et[0] = et[1] = et[2] = NaN, !1;
        const qt = Ot * wt;
        for (let Dt = 0; Dt < 3; Dt++) et[Dt] = this.render[qt + Dt] + ft.x.origin(Vt, 0, Dt);
        return !0
      }
      checkValid(tt) {
        return void 0 !== this.indexOf(tt)
      }
      isAlive(tt) {
        const et = this.indexOf(tt);
        if (void 0 === et) return null;
        if (this.ensureViews(), et >= this.renderCapacity) return null;
        const Vt = this.vis[et];
        return 0 === Vt ? null : 0 !== (Vt & ft.ue.Alive)
      }
      getEntityType(tt) {
        const et = this.indexOf(tt);
        return void 0 === et ? this.isLocal("number" === typeof tt ? tt : +tt) ? "Player" : null : ut(this.kinds[et])
      }
      spawned(tt, et, Vt) {
        if (et >= 1048576) throw new Et.d(`entity ${tt} spawned at index ${et}`);
        this.ensureIndex(et), this.serverIds[et] === tt && null !== this.idStr[et] || (this.idStr[et] = String(tt)), this.serverIds[et] = tt, this.kinds[et] = Vt, this.indexById.set(tt, et)
      }
      despawned(tt, et) {
        let Vt = !1;
        return this.indexById.get(tt) === et && (this.indexById.delete(tt), Vt = !0), et < this.serverIds.length && this.serverIds[et] === tt && (this.serverIds[et] = ft.hd, this.kinds[et] = 0, this.idStr[et] = null), Vt
      }
      ensureIndex(tt) {
        const et = this.serverIds.length;
        if (tt < et) return;
        let Vt = 2 * et;
        for (; Vt <= tt;) Vt *= 2;
        const Ot = new Int32Array(Vt).fill(ft.hd);
        Ot.set(this.serverIds), this.serverIds = Ot;
        const qt = new Uint16Array(Vt);
        qt.set(this.kinds), this.kinds = qt;
        for (let Dt = et; Dt < Vt; Dt++) this.idStr.push(null)
      }
      eventView() {
        const tt = this.memory().buffer;
        return tt !== this.eventsBuffer && (this.eventsBuffer = tt, this.events = new DataView(tt, this.eventsPtr, this.eventsLen)), this.events
      }
      reView() {
        const tt = this.memory().buffer;
        this.buffer = tt, this.viewPtr < 0 && (this.viewPtr = this.core.Yqt()), this.view = new DataView(tt, this.viewPtr, ft.x.BYTES), this.rereadDirectory()
      }
    }

    function Ct(tt) {
      return tt >>> ft.c === ft.u.Item
    }

    function ut(tt) {
      var et, Vt;
      const Ot = tt & ft.g;
      switch (tt >>> ft.c) {
        case ft.u.Lifeform:
          return null !== (et = Xt.f[Ot]) && void 0 !== et ? et : null;
        case ft.u.Throwable:
          return null !== (Vt = Qt.m[Ot]) && void 0 !== Vt ? Vt : null;
        case ft.u.Mesh:
          return "Mesh";
        case ft.u.Audio:
          return "AudioEntity";
        case ft.u.Item:
          return "Item";
        default:
          return null
      }
    }
    const Kt = new TextDecoder;

    function ht(tt, et, Vt) {
      if (Vt < lt.Pd.HEAD_BYTES) return null;
      const Ot = tt.getUint32(et, !0),
        qt = tt.getUint32(et + 20, !0),
        Dt = tt.getUint32(et + 24, !0),
        mt = lt.Pd.HEAD_BYTES + (0, lt.Fe)(qt);
      if (Ot !== lt.Pd.UPDATE && Ot !== lt.Pd.REMOVE || qt > Vt || mt + Dt > Vt) return null;
      const dt = (Vt, Ot) => Kt.decode(new Uint8Array(tt.buffer, tt.byteOffset + et + Vt, Ot)),
        jt = tt.getFloat64(et + 12, !0);
      return {
        op: Ot,
        level: tt.getFloat64(et + 4, !0),
        durationMs: Number.isNaN(jt) ? null : jt,
        name: dt(lt.Pd.HEAD_BYTES, qt),
        icon: dt(mt, Dt)
      }
    }

    function vt(tt, et, Vt) {
      return new Et.d(`event ${tt} at ${et} of ${Vt} bytes`)
    }
    var Wt = Vt(391),
      St = Vt(1308),
      ct = Vt(39224),
      Rt = Vt(2037),
      It = Vt(41206),
      Pt = Vt(1993),
      Zt = Vt(39378),
      Lt = Vt(39410),
      Ft = Vt(39392),
      kt = Vt(40812),
      Gt = Vt(2465),
      zt = Vt(39375),
      ot = Vt(39406);
    const rt = Math.max(ft.Ab.BYTES, ft.tb.BYTES, ft.vb.BYTES);

    function Ut(tt) {
      if (!(0, ot.e)(tt)) return null;
      const et = Number(tt);
      return (0 | et) === et ? et : null
    }
    class At {
      constructor(tt) {
        this.api = tt, this.bodyHeading = 0, this.viewHeading = 0, this.defaultPose = (0, zt.k)(), this.defaultPoseRead = !1, this.defaultFov = 0, this.baseFov = 0, this.aspect = 1, this.pO = null, this.entityLive = !1, this.entityFeet = [0, 0, 0], this.entityAim = [0, 0, 0], this.entityHeading = 0, this.localId = ft.hd, this.localName = String(ft.hd), this.scratch = null
      }
      readView() {
        this.defaultPoseRead = !1, this.pO = null;
        const tt = this.api.queries.directorView() >= ft.Ab.BYTES ? this.scratchView() : null;
        null !== tt && (this.defaultFov = (0, Pt.G)(ft.Ab.fov(tt, 0)), this.baseFov = (0, Pt.G)(ft.Ab.baseFov(tt, 0)), this.aspect = ft.Ab.aspect(tt, 0), this.bodyHeading = ft.Ab.bodyHeading(tt, 0))
      }
      getViewHeading() {
        return this.viewHeading
      }
      setViewHeading(tt) {
        this.viewHeading = tt
      }
      get localPlayerId() {
        const tt = ft.x.localId(this.api.apiView, 0);
        return tt !== this.localId && (this.localId = tt, this.localName = String(tt)), this.localName
      }
      getEntityPosition(tt) {
        return this.readEntity(tt) ? this.entityFeet : null
      }
      getEntityAimPoint(tt) {
        return this.readEntity(tt) ? this.entityAim : null
      }
      getEntityHeading(tt) {
        const et = Ut(tt);
        if (null === et) return null;
        const Vt = ft.x.localId(this.api.apiView, 0);
        return et === Vt && Vt !== ft.hd ? this.viewHeading : this.readEntity(tt) ? this.entityHeading : null
      }
      raycastTerrain(tt, et, Vt) {
        const Ot = this.api.queries.cameraSweep(tt[0], tt[1], tt[2], et[0], et[1], et[2], Vt);
        return Ot < Vt - 1e-6 ? Ot : null
      }
      getDefaultPose() {
        if (this.defaultPoseRead) return this.defaultPose;
        this.defaultPoseRead = !0;
        const tt = this.defaultPose;
        tt.fov = this.defaultFov;
        const et = this.api.queries.directorDefaultPose() >= ft.tb.BYTES ? this.scratchView() : null;
        if (null === et) return tt;
        for (let Vt = 0; Vt < 3; Vt++) tt.position[Vt] = ft.tb.eye(et, 0, Vt);
        return tt.heading = ft.tb.heading(et, 0), tt.pitch = ft.tb.pitch(et, 0), tt
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
      readEntity(tt) {
        const et = Ut(tt);
        if (null === et) return !1;
        if (et === this.pO) return this.entityLive;
        this.pO = et;
        const Vt = this.api.queries.directorEntity(et) >= ft.vb.BYTES ? this.scratchView() : null;
        if (this.entityLive = null !== Vt, null === Vt) return !1;
        for (let Ot = 0; Ot < 3; Ot++) this.entityFeet[Ot] = ft.vb.feet(Vt, 0, Ot), this.entityAim[Ot] = this.entityFeet[Ot];
        return this.entityAim[1] += ft.vb.eyeHeight(Vt, 0), this.entityHeading = ft.vb.heading(Vt, 0), !0
      }
      scratchView() {
        const tt = this.api.scratch(),
          et = this.api.memory().buffer,
          Vt = this.scratch;
        return null !== Vt && Vt.buffer === et && Vt.byteOffset === tt ? Vt : (this.scratch = this.api.memoryData(tt, rt, 8, "the director's record"), this.scratch)
      }
    }
    const it = {
        mode: "default"
      },
      Yt = {
        show: () => {},
        clear: () => {}
      };

    function Bt() {
      return "undefined" !== typeof document && "hidden" === document.visibilityState
    }
    class pt {
      constructor(tt) {
        this.options = tt, this.sQ = void 0, this.director = void 0, this.latest = it, this.pending = void 0, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.look = {
          JR: 0,
          uR: 0
        }, this.pointedAt = {
          heading: 0,
          pitch: 0
        }, this.engaged = !1, this.calledThisFrame = !1, this.holding = !1, this.lastCallMs = 0, this.answeredPose = !1, this.Of = new Int32Array(3 * ft.$d), this.centresLen = 0, this.centresUnsent = !1, this.next = new Int32Array(3 * ft.$d), this.sQ = new At(tt.api), this.director = new Ft.d(this.sQ)
      }
      settingsChanged(tt) {
        let et = it;
        if (tt.length > 0) try {
          et = (0, kt.c)(tt)
        } catch {}
        this.latest = et, this.pending = et
      }
      call(tt, et, Vt, Ot, qt, Dt) {
        var mt, dt;
        let jt;
        this.holding = !1;
        try {
          jt = this.answer(tt, et, Vt, Ot, qt, Dt)
        } catch (lt) {
          var Ht, Xt;
          throw this.answeredPose = !1, null === (Ht = (Xt = this.options).showFacing) || void 0 === Ht || Ht.call(Xt, null), lt
        }
        const Qt = this.answeredPose && 0 === (Ot & ft.xb.Held);
        return this.answeredPose = jt !== ft.rb.None, this.holding = this.answeredPose && !Qt, null === (mt = (dt = this.options).showFacing) || void 0 === mt || mt.call(dt, this.holding ? this.facing : null), jt
      }
      holdsView() {
        return this.holding
      }
      answer(tt, et, Vt, Ot, qt, Dt) {
        this.calledThisFrame = !0, this.engaged = !0, this.lastCallMs = this.now();
        const {
          sQ: mt
        } = this;
        mt.readView();
        if (0 !== (Ot & ft.xb.Held) || mt.setViewHeading((0, Zt.r)(mt.bodyHeading)), void 0 !== this.pending) {
          const tt = this.pending;
          this.pending = void 0, this.director.setSettings(tt), this.syncShownSettings()
        }
        this.readLook((0, Gt.d)(et), (0, Gt.d)(Vt), Ot, (0, Gt.d)(qt), (0, Gt.d)(Dt));
        const dt = this.director.update(tt / 1e3, this.look);
        if (this.syncShownSettings(), this.writeCentres(this.director.getLoadingPositions()), this.hidden() || this.screen().show(this.director.getScreenFade(), this.director.getSettings()), !dt) return ft.rb.None;
        const [jt, Ht, Xt] = dt.position;
        if (0 === this.options.api.queries.directorPose(jt, Ht, Xt, (0, Zt.r)(dt.heading), (0, Zt.g)(dt.pitch), (0, Pt.l)(dt.fov))) return ft.rb.None;
        if ("default" === this.director.getSettings().mode) return ft.rb.Pose;
        switch (this.facing) {
          case "camera":
            return ft.rb.FaceCamera;
          case "cursor":
            return ft.rb.FaceCursor;
          default:
            return ft.rb.FaceMovement
        }
      }
      afterFrame(tt) {
        tt ? (this.calledThisFrame || (this.holding = !1, this.engaged && this.idle()), this.calledThisFrame = !1) : this.centresLen > 0 && this.hidden() && this.now() - this.lastCallMs > 1e3 && this.setCentres(0), this.centresUnsent && this.sendCentres()
      }
      reset() {
        this.latest = it, this.idle()
      }
      restart() {
        const tt = this.holding;
        this.idle(), this.holding = tt
      }
      idle() {
        var tt, et;
        this.engaged && this.screen().clear(), this.engaged = !1, this.holding = !1, this.director = new Ft.d(this.sQ), this.pending = this.latest, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.answeredPose = !1, null === (tt = (et = this.options).showFacing) || void 0 === tt || tt.call(et, null), this.setCentres(0)
      }
      syncShownSettings() {
        const tt = this.director.getSettings();
        if (tt === this.shownSettings) return;
        this.shownSettings = tt;
        const et = (0, Lt.f)(tt);
        this.facing = et.facing, this.mouseTurns = et.mouseTurns
      }
      readLook(tt, et, Vt, Ot, qt) {
        const Dt = this.look,
          mt = 0 !== (Vt & ft.xb.LookPointed);
        if (null === this.mouseTurns && !mt) return Dt.JR = 0, Dt.uR = 0, void(Dt.pointedAt = void 0);
        let dt;
        mt && (this.pointedAt.heading = Ot, this.pointedAt.pitch = qt, dt = this.pointedAt);
        const {
          sQ: jt
        } = this;
        jt.setViewHeading((0, Lt.d)(jt.getViewHeading(), tt, et, dt, "look" === this.mouseTurns, Dt))
      }
      writeCentres(tt) {
        const et = this.next,
          Vt = Math.min(tt.length, ft.$d);
        for (let Ot = 0; Ot < Vt; Ot++)
          for (let Vt = 0; Vt < 3; Vt++) et[3 * Ot + Vt] = Math.floor(tt[Ot][Vt] / ft.K);
        this.setCentres(Vt)
      }
      setCentres(tt) {
        const {
          Of: et,
          next: Vt
        } = this;
        let Ot = tt === this.centresLen;
        for (let qt = 0; Ot && qt < 3 * tt; qt++) Ot = et[qt] === Vt[qt];
        Ot || (et.fill(0), et.set(Vt.subarray(0, 3 * tt)), this.centresLen = tt, this.centresUnsent = !0, this.sendCentres())
      }
      sendCentres() {
        const tt = this.options.cmd();
        null !== tt && (0, ft.Lf)(tt, 0, this.Of, this.centresLen) && (this.centresUnsent = !1)
      }
      screen() {
        var tt, et, Vt;
        return null !== (tt = null === (et = (Vt = this.options).screen) || void 0 === et ? void 0 : et.call(Vt)) && void 0 !== tt ? tt : Yt
      }
      hidden() {
        var tt;
        return (null !== (tt = this.options.isPageHidden) && void 0 !== tt ? tt : Bt)()
      }
      now() {
        var tt, et, Vt;
        return null !== (tt = null === (et = (Vt = this.options).now) || void 0 === et ? void 0 : et.call(Vt)) && void 0 !== tt ? tt : performance.now()
      }
    }
    var xt = Vt(40967);
    const Tt = ft.K * ft.K * ft.K,
      gt = Math.log2(ft.K),
      st = ft.K - 1,
      nt = ft.U.BYTES / 4,
      te = new Uint16Array(Tt);

    function ee(tt, et, Vt) {
      return tt * ft.K * ft.K + et * ft.K + Vt
    }
    class Ve {
      constructor(tt) {
        this.chunk = tt
      }
      get data() {
        return this.chunk.gameVoxels()
      }
      index(tt, et, Vt) {
        return ee(tt, et, Vt)
      }
    }
    class Oe {
      constructor() {
        this.ids = new Map, this.cleared = new Set, this.layers = 0, this.patched = null, this.from = null
      }
    }
    class qe {
      constructor(tt, et, Vt, Ot) {
        this.table = tt, this.slot = et, this.generation = Vt, this.epoch = Ot, this.hl = new Ve(this), this.writes = null, this.writeCount = 0, this.shownVersion = 0, this.shownCore = -1, this.shownWrites = -1, this.data = te, this.dataPtr = 0, this.dataBuffer = null, this.dataStamp = -1, this.version = 0, this.layers = null, this.layersVersion = -1, this.layersPtr = -1, this.staleLayers = 0
      }
      get rf() {
        return this.voxelData(), this.version === this.shownCore && this.writeCount === this.shownWrites || (this.shownCore = this.version, this.shownWrites = this.writeCount, this.shownVersion = this.table.nextVersion()), this.shownVersion
      }
      get JE() {
        const tt = this.gameVoxels(),
          et = this.layers ??= new Uint16Array(ft.K);
        this.layersVersion === this.version && this.layersPtr === this.dataPtr || (this.layersVersion = this.version, this.layersPtr = this.dataPtr, this.staleLayers = -1);
        for (let Vt = 0; 0 !== this.staleLayers; Vt++) {
          const Ot = 1 << Vt;
          0 !== (this.staleLayers & Ot) && (this.staleLayers &= ~Ot, et[Vt] = De(tt, Vt))
        }
        return et
      }
      voxelData() {
        return this.dataStamp === this.table.stamp && 0 !== this.data.length ? this.data : this.reread()
      }
      gameVoxels() {
        const tt = this.voxelData(),
          et = this.writes;
        if (null === et || 0 === et.ids.size) return tt;
        if (et.from !== tt) {
          const Vt = et.patched ??= new Uint16Array(Tt);
          Vt.set(tt);
          for (const [tt, Ot] of et.ids) Vt[tt] = Ot;
          et.from = tt
        }
        return et.patched
      }
      written(tt) {
        var et;
        return null === (et = this.writes) || void 0 === et ? void 0 : et.ids.get(tt)
      }
      hasWrites() {
        return null !== this.writes && 0 !== this.writes.ids.size
      }
      write(tt, et, Vt) {
        const Ot = this.writes ??= new Oe;
        Ot.ids.set(tt, et), Vt && Ot.cleared.add(tt), null !== Ot.from && (Ot.patched[tt] = et);
        const qt = 1 << (tt >> gt & st);
        Ot.layers |= qt, this.staleLayers |= qt, this.writeCount++
      }
      clearWrites() {
        const tt = this.writes;
        null !== tt && (this.staleLayers |= tt.layers, tt.ids.clear(), tt.cleared.clear(), tt.layers = 0, tt.from = null)
      }
      dataCleared(tt) {
        var et;
        return !0 === (null === (et = this.writes) || void 0 === et ? void 0 : et.cleared.has(tt))
      }
      reread() {
        this.dataStamp = this.table.stamp;
        const tt = this.table.slotWords(),
          et = this.slot * nt;
        if (this.epoch !== this.table.epoch || et + nt > tt.length || 0 === tt[et + 3] || tt[et + 2] !== this.generation) return this.data = te, this.dataPtr = 0, te;
        this.version = tt[et + 1];
        const Vt = tt[et + 0],
          Ot = tt.buffer;
        return Vt === this.dataPtr && Ot === this.dataBuffer || (this.dataPtr = Vt, this.dataBuffer = Ot, this.data = this.table.voxelsAt(Ot, Vt)), this.data
      }
    }

    function De(tt, et) {
      const Vt = tt[et * ft.K];
      for (let Ot = 0; Ot < ft.K; Ot++) {
        const qt = ee(Ot, et, 0);
        for (let et = 0; et < ft.K; et++)
          if (tt[qt + et] !== Vt) return 65535
      }
      return Vt
    }
    const me = new Uint32Array(0);

    function de(tt, et, Vt) {
      return ee(tt & st, et & st, Vt & st)
    }
    class je {
      constructor(tt, et) {
        this.memory = tt, this.apiView = et, this.chunks = new Map, this.written = [], this.lastKey = -1, this.lastChunk = void 0, this.slotsPtr = 0, this.slotsLen = 0, this.slotsBuffer = null, this.slots = me, this.walkPtr = 0, this.walkLen = 0, this.walkBuffer = null, this.walk = me, this.epoch = 0, this.stamp = 0, this.versions = 0, this.corruption = null
      }
      apply(tt, et, Vt, Ot, qt, Dt) {
        if (this.lastKey = -1, this.lastChunk = void 0, this.stamp++, Dt === ft.V.ResetAll) return this.chunks.clear(), void this.epoch++;
        if (Dt !== ft.V.Stored && Dt !== ft.V.Unloaded) throw new Et.d(`ChunkSlot flags ${Dt}`);
        const mt = (0, xt.e)(tt, et, Vt);
        if (mt < 0) return;
        if (Dt === ft.V.Unloaded) return void this.chunks.delete(mt);
        const dt = this.chunks.get(mt);
        (null === dt || void 0 === dt ? void 0 : dt.slot) === Ot && dt.generation === qt || this.chunks.set(mt, new qe(this, Ot, qt, this.epoch))
      }
      touch() {
        this.stamp++, this.clearOverlay(), this.viewWalkThrough()
      }
      refresh() {
        if (this.stamp++, this.corruption) throw this.corruption;
        const tt = this.apiView(),
          et = ft.x.chunkSlotsPtr(tt, 0),
          Vt = ft.x.chunkSlotsLen(tt, 0);
        et === this.slotsPtr && Vt === this.slotsLen || (this.slotsPtr = et, this.slotsLen = Vt, this.slotsBuffer = null, this.slotWords()), this.viewWalkThrough(), this.clearOverlay()
      }
      viewWalkThrough() {
        const tt = this.apiView(),
          et = ft.x.walkThroughPtr(tt, 0),
          Vt = ft.x.walkThroughLen(tt, 0);
        et === this.walkPtr && Vt === this.walkLen || (this.walkPtr = et, this.walkLen = Vt, this.walkBuffer = null, this.walkWords())
      }
      clearOverlay() {
        for (const tt of this.written) tt.clearWrites();
        this.written.length = 0
      }
      nextVersion() {
        return ++this.versions
      }
      slotWords() {
        const tt = this.memory().buffer;
        var et;
        tt !== this.slotsBuffer && (this.slotsBuffer = tt, this.slots = null !== (et = (0, Et.o)(Uint32Array, tt, this.slotsPtr, this.slotsLen * nt, "the chunk directory")) && void 0 !== et ? et : me);
        return this.slots
      }
      voxelsAt(tt, et) {
        try {
          var Vt;
          return null !== (Vt = (0, Et.o)(Uint16Array, tt, et, Tt, "a chunk's voxels")) && void 0 !== Vt ? Vt : te
        } catch (Ot) {
          if (!(Ot instanceof Et.d)) throw Ot;
          return this.corruption ??= Ot, te
        }
      }
      chunk(tt, et, Vt) {
        var Ot;
        return null !== (Ot = this.chunks.get((0, xt.e)(tt, et, Vt))) && void 0 !== Ot ? Ot : null
      }
      isLoaded(tt, et, Vt) {
        return void 0 !== this.chunkAt(Math.floor(tt), Math.floor(et), Math.floor(Vt))
      }
      qd(tt, et, Vt) {
        var Ot;
        const qt = Math.floor(tt),
          Dt = Math.floor(et),
          mt = Math.floor(Vt),
          dt = this.chunkAt(qt, Dt, mt);
        if (!dt) return 0;
        const jt = de(qt, Dt, mt);
        return null !== (Ot = dt.written(jt)) && void 0 !== Ot ? Ot : dt.voxelData()[jt]
      }
      setOverlay(tt, et, Vt, Ot) {
        let qt = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const Dt = this.chunkAt(tt, et, Vt);
        return !!Dt && (Dt.hasWrites() || this.written.push(Dt), Dt.write(de(tt, et, Vt), Ot, qt), !0)
      }
      version(tt, et, Vt) {
        var Ot, qt;
        return null !== (Ot = null === (qt = this.chunks.get((0, xt.e)(tt, et, Vt))) || void 0 === qt ? void 0 : qt.rf) && void 0 !== Ot ? Ot : null
      }
      scan(tt, et, Vt, Ot, qt, Dt, mt, dt) {
        const jt = ft.K;
        let Ht = 0;
        for (let Xt = Math.floor(et / jt); Xt * jt < qt; Xt++) {
          const Qt = Xt * jt,
            lt = Math.min(qt - Qt, jt);
          for (let qt = Math.floor(tt / jt); qt * jt < Ot; qt++) {
            const Et = qt * jt,
              ft = Math.min(Ot - Et, jt);
            for (let Ot = Math.floor(Vt / jt); Ot * jt < Dt; Ot++) {
              const wt = this.chunks.get((0, xt.e)(qt, Xt, Ot));
              if (!wt) continue;
              const yt = Ot * jt,
                Nt = Math.max(Vt - yt, 0),
                Mt = Math.min(Dt - yt, jt),
                bt = wt.JE,
                Jt = wt.gameVoxels();
              for (let Vt = Math.max(et - Qt, 0); Vt < lt; Vt++) {
                const et = bt[Vt];
                if (65535 === et || 0 !== mt[et]) {
                  Ht++;
                  for (let et = Math.max(tt - Et, 0); et < ft; et++) {
                    const tt = ee(et, Vt, 0);
                    for (let Ot = Nt; Ot < Mt; Ot++) {
                      const qt = Jt[tt + Ot];
                      0 !== mt[qt] && dt.push(Et + et, Qt + Vt, yt + Ot, qt)
                    }
                  }
                }
              }
            }
          }
        }
        return Ht
      }
      dataCleared(tt, et, Vt) {
        var Ot;
        const qt = Math.floor(tt),
          Dt = Math.floor(et),
          mt = Math.floor(Vt);
        return !0 === (null === (Ot = this.chunkAt(qt, Dt, mt)) || void 0 === Ot ? void 0 : Ot.dataCleared(de(qt, Dt, mt)))
      }
      isWalkThrough(tt) {
        if (!Number.isInteger(tt) || tt < 0 || tt > 65535) return !1;
        const et = this.walkWords(),
          Vt = tt >>> 5;
        return Vt < et.length && 1 === (et[Vt] >>> (31 & tt) & 1)
      }
      walkWords() {
        const tt = this.memory().buffer;
        var et;
        tt !== this.walkBuffer && (this.walkBuffer = tt, this.walk = null !== (et = (0, Et.o)(Uint32Array, tt, this.walkPtr, this.walkLen, "the walk-through bits")) && void 0 !== et ? et : me);
        return this.walk
      }
      chunkAt(tt, et, Vt) {
        if ((0 | tt) !== tt || (0 | et) !== et || (0 | Vt) !== Vt) return;
        const Ot = (0, xt.e)(tt >> gt, et >> gt, Vt >> gt);
        return Ot !== this.lastKey && (this.lastKey = Ot, this.lastChunk = this.chunks.get(Ot)), this.lastChunk
      }
    }
    var He = Vt(38728),
      Xe = Vt(38056),
      Qe = Vt(37028),
      le = Vt(36872),
      Ee = Vt(34333),
      fe = Vt(39334),
      we = Vt(229);
    const ye = ["ambient", "cars", "crowd", "customGame_horror", "dig", "fire", "fishing", "gameStart", "gunMisc", "gunPistol", "gunRifle", "gunSemiAutomatic", "gunShotgun", "gunSubmachineGun", "mobBear", "mobCat", "mobCow", "mobCrone", "mobDeer", "mobDog", "mobFennec", "mobGolem", "mobGorilla", "mobHorse", "mobKnight", "mobPig", "mobReaver", "mobSheep", "mobSkeleton", "mobStag", "mobStalker", "mobWarper", "mobWraith", "mobZombie", "note", "phoneAndMoney", "police", "randomBeep", "randomCannon", "randomCash", "randomExp", "randomFallsmall", "randomFire", "randomFirecracker", "randomItems", "randomLaugh", "randomMagic", "randomSplash", "rpg", "step", "survivalFactory", "town"],
      Ne = [
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
      ae = Ne.map((tt => {
        let [et] = tt;
        return et
      })),
      Me = Uint8Array.from(Ne, (tt => {
        let [, et] = tt;
        return et
      })),
      be = {
        semi_automatic: 11,
        submachine: 13,
        rifle: 10,
        pistol: 9,
        shotgun: 12
      },
      Je = 8;
    var Ce = Vt(36999),
      ue = Vt(37008),
      Ke = Vt(37004),
      he = Vt(287);
    class ve {
      constructor(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : he.c;
        this.sheet = tt, this.onError = et, this.idle = Vt, this.queue = [], this.asked = new Set, this.cancelIdle = null, this.gen = 0, this.onIdle = tt => {
          this.cancelIdle = null;
          try {
            if (tt.timeRemaining() >= 1) {
              let tt = this.queue.shift();
              for (; void 0 !== tt && !this.load(tt);) tt = this.queue.shift()
            }
          } catch (et) {
            this.onError(et)
          } finally {
            this.schedule()
          }
        }
      }
      preload(tt) {
        const et = [...tt].sort(((tt, et) => tt - et));
        for (const Vt of et) this.asked.has(Vt) || (this.asked.add(Vt), this.queue.push(Vt));
        this.schedule()
      }
      cancel() {
        var tt;
        this.queue.length = 0, this.asked.clear(), this.gen++, null === (tt = this.cancelIdle) || void 0 === tt || tt.call(this), this.cancelIdle = null
      }
      schedule() {
        null === this.cancelIdle && this.queue.length > 0 && (this.cancelIdle = this.idle(this.onIdle))
      }
      load(tt) {
        const et = this.sheet(tt, !1),
          Vt = this.sheet(tt, !0),
          [Ot, qt] = "unloaded" === et.state() && "unloaded" !== Vt.state() ? [Vt, et] : [et, Vt],
          Dt = this.gen,
          mt = () => {
            try {
              Dt === this.gen && "unloaded" === qt.state() && qt.load()
            } catch (tt) {
              this.onError(tt)
            }
          },
          dt = Ot.state();
        return "unloaded" === dt ? (Ot.once("load", mt), Ot.load(), !0) : "unloaded" === qt.state() && ("loading" === dt ? (Ot.once("load", mt), !1) : (qt.load(), !0))
      }
    }
    var We = Vt(41080);
    const Se = {
        coneInnerAngle: 360,
        coneOuterAngle: 360,
        coneOuterGain: 0,
        distanceModel: "inverse",
        maxDistance: 1e3,
        panningModel: "HRTF",
        rolloffFactor: 1
      },
      ce = we.e.Yy * we.e.playerEyeToHeightRatio,
      Re = [0, 0, -1, 0, 1, 0],
      Ie = ye.indexOf("note");

    function Pe(tt) {
      return tt >= 0 ? Math.min(1, tt) : 0
    }

    function Ze(tt) {
      var et;
      let Vt = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.random;
      const Ot = function(tt) {
        let et = 0,
          Vt = ae.length;
        for (; et < Vt;) {
          const Ot = et + Vt >>> 1;
          ae[Ot] < tt ? et = Ot + 1 : Vt = Ot
        }
        return et
      }(tt);
      if ("" === tt || null === (et = ae[Ot]) || void 0 === et || !et.startsWith(tt)) return -1;
      if (ae[Ot] === tt) return Ot;
      let qt = Ot + 1;
      for (; qt < ae.length && ae[qt].startsWith(tt);) qt++;
      return Ot + Math.floor(Vt() * (qt - Ot))
    }
    class Le {
      constructor(tt, et, Vt, Ot, qt) {
        this.group = tt, this.loudness = et, this.startMs = Vt, this.howl = Ot, this.host = qt, this.id = 0, this.direct = !1
      }
      getDurationMs() {
        const tt = this.host.alive(this.id);
        return tt ? 1e3 * this.howl.duration(this.id) / tt.rate : 0
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
    class Fe {
      constructor(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now(),
          Ot = arguments.length > 3 ? arguments[3] : void 0;
        this.createHowl = tt, this.listener = et, this.now = Vt, this.errors = 0, this.sheets = new Map, this.unloading = new Uint16Array(ye.length), this.live = new Map, this.core = new Map, this.level = 1, this.master = 1, this.pose = new Float64Array(9), this.nextPose = new Float64Array(9), this.posed = !1, this.loader = void 0, this.voices = new Ke.d, this.failed = new Set, this.started = new Set, this.voiceHost = {
          alive: tt => this.aliveVoice(tt),
          started: tt => this.started.has(tt),
          drop: tt => {
            var et;
            null === (et = this.live.get(tt)) || void 0 === et || et.howl.stop(tt), this.forget(tt)
          }
        }, this.handlers = {
          playSound: (tt, et, Vt, Ot, qt, Dt, mt, dt, jt) => {
            if (Ot >= ae.length) return;
            const Ht = 0 !== (qt & ft.ne.Loop);
            qt & ft.ne.TwoD ? this.start(Ot, !1, mt, Dt, dt, Ht) : this.startSpatial(Ot, mt, Dt, dt, Ht, tt, et, Vt, jt, this.earDistSq(tt, et, Vt))
          },
          soundPos: (tt, et, Vt, Ot) => {
            const qt = this.core.get(Ot);
            var Dt;
            void 0 !== qt && (null === (Dt = this.live.get(qt)) || void 0 === Dt || Dt.howl.pos(Vt, et, tt, qt))
          },
          soundSet: (tt, et, Vt, Ot) => {
            const qt = this.core.get(tt),
              Dt = void 0 === qt ? void 0 : this.live.get(qt);
            void 0 !== qt && Dt && (this.setRel(qt, et), Dt.rate = Vt, Dt.howl.rate(Vt, qt), Dt.spatial && Dt.howl.pannerAttr({
              refDistance: Ot
            }, qt))
          },
          soundFade: (tt, et, Vt, Ot) => {
            const qt = this.core.get(tt);
            void 0 !== qt && this.fade(qt, et, Vt, 0 !== (Ot & ft.me.StopAfter))
          },
          soundStop: tt => {
            const et = this.core.get(tt);
            var Vt;
            void 0 !== et && (null === (Vt = this.live.get(et)) || void 0 === Vt || Vt.howl.stop(et), this.forget(et))
          },
          soundReset: () => {
            this.stopCore()
          }
        }, this.loader = new ve(((tt, et) => this.sheet(tt, et)), (tt => {
          this.errors++, console.error("Audio preload failed", tt)
        }), Ot)
      }
      prepare() {
        for (let tt = 0; tt < ye.length; tt++) this.prepareSheet(tt)
      }
      prepareSheet(tt) {
        this.sheet(tt, !1), this.sheet(tt, !0)
      }
      preload(tt) {
        this.loader.preload(tt)
      }
      cancelPreload() {
        this.loader.cancel()
      }
      freeSheetsAfterGame() {
        for (let tt = 0; tt < ye.length; tt++) {
          if (ue.c.has(ye[tt])) continue;
          const et = [];
          for (const Ot of [!1, !0]) {
            const Vt = ke(tt, Ot),
              qt = this.sheets.get(Vt);
            void 0 !== qt && "loading" !== qt.state() && et.push({
              key: Vt,
              howl: qt
            })
          }
          if (!et.some((tt => {
              let {
                howl: et
              } = tt;
              return "loaded" === et.state()
            }))) continue;
          this.unloading[tt] += et.length;
          const Vt = () => {
            this.unloading[tt]--, 0 === this.unloading[tt] && this.prepareSheet(tt)
          };
          for (const {
              key: tt,
              howl: Ot
            }
            of et) this.sheets.delete(tt), "loaded" === Ot.state() ? (0, Ce.c)(Ot, Vt) : (Ot.unload(), Vt())
        }
      }
      onAudioEvent(tt, et, Vt, Ot) {
        if (tt < ft.r.PlaySound || tt > ft.r.SoundReset) return !1;
        try {
          return (0, ft.xe)(tt, et, Vt, Ot, this.handlers)
        } catch (qt) {
          return this.errors++, console.error("Audio event failed", qt), !0
        }
      }
      applyListener(tt) {
        const et = this.nextPose;
        for (let Ot = 0; Ot < 3; Ot++) et[2 - Ot] = ft.A.listener(tt, 0, Ot), et[5 - Ot] = ft.A.forward(tt, 0, Ot), et[8 - Ot] = ft.A.up(tt, 0, Ot);
        0 === et[3] && 0 === et[4] && 0 === et[5] && et.set(this.posed ? this.pose.subarray(3) : Re, 3);
        for (let Ot = 0; Ot < 9; Ot++)
          if (!Number.isFinite(et[Ot])) return;
        const Vt = this.pose;
        if (this.posed) {
          let tt = !0;
          for (let Ot = 0; Ot < 9 && tt; Ot++) tt = et[Ot] === Vt[Ot];
          if (tt) return
        }
        this.listener.apply(et) && (Vt.set(et), this.posed = !0)
      }
      playGame(tt, et, Vt, Ot, qt, Dt, mt) {
        const dt = Ze(tt);
        if (dt < 0) return We.c;
        if (!Vt) {
          const {
            howl: tt,
            id: Vt
          } = this.start(dt, !1, et, 0, 1, mt);
          return this.gameSound(tt, Vt, !1)
        }
        const jt = Vt[0],
          Ht = Vt[1] + ce,
          Xt = Vt[2];
        if (!Number.isFinite(jt) || !Number.isFinite(Ht) || !Number.isFinite(Xt)) return We.c;
        let Qt;
        if (Ot) {
          const tt = jt - Ot[0],
            et = Ht - Ot[1],
            Vt = Xt - Ot[2];
          if (Qt = tt * tt + et * et + Vt * Vt, Qt > qt * qt) return We.c
        } else Qt = this.earDistSq(jt, Ht, Xt);
        const lt = this.startSpatial(dt, et, 0, 1, mt, jt, Ht, Xt, Dt, Qt);
        return lt ? this.gameSound(lt.howl, lt.id, !0) : We.c
      }
      setMaster(tt, et) {
        this.level = Pe(tt);
        const Vt = et ? this.level : 0;
        if (Vt !== this.master) {
          this.master = Vt;
          for (const [tt, et] of this.live) et.fadeMs = 0, et.gain = et.rel * this.master, et.howl.volume(et.gain, tt)
        }
      }
      stopCore() {
        for (const et of [...this.core.values()]) {
          var tt;
          null === (tt = this.live.get(et)) || void 0 === tt || tt.howl.stop(et)
        }
        this.core.clear()
      }
      stopAll() {
        this.cancelPreload();
        for (const [tt, et] of [...this.live]) et.howl.stop(tt), this.forget(tt);
        this.core.clear()
      }
      gameSound(tt, et, Vt) {
        const Ot = {
          stop: () => (this.live.has(et) && tt.stop(et), Ot),
          fade: (tt, Vt, qt) => {
            var Dt, mt;
            const dt = this.level > 0 ? Vt / this.level : Vt > 0 && null !== (Dt = null === (mt = this.live.get(et)) || void 0 === mt ? void 0 : mt.rel) && void 0 !== Dt ? Dt : 0;
            return this.fade(et, dt, qt, !1), Ot
          },
          rate: Vt => {
            const qt = this.live.get(et);
            return qt && (qt.rate = function(tt) {
              return tt > 0 && tt < 1 / 0 ? tt : 1
            }(Vt), tt.rate(qt.rate, et)), Ot
          },
          getVolume: () => {
            var tt, Vt;
            return (null !== (tt = null === (Vt = this.live.get(et)) || void 0 === Vt ? void 0 : Vt.rel) && void 0 !== tt ? tt : 0) * this.level
          },
          getRelativeVolume: () => {
            var tt, Vt;
            return null !== (tt = null === (Vt = this.live.get(et)) || void 0 === Vt ? void 0 : Vt.rel) && void 0 !== tt ? tt : 0
          },
          setRelativeVolume: tt => (this.setRel(et, tt), Ot),
          setPannerAttr: qt => {
            if (Vt && this.live.has(et)) {
              const Vt = {
                ...Se,
                refDistance: Qe.f
              };
              for (const [tt, et] of Object.entries(qt)) "number" !== typeof et && "string" !== typeof et || (Vt[tt] = et);
              tt.pannerAttr({
                coneOuterAngle: Vt.coneOuterAngle
              }, et), tt.pannerAttr(Vt, et)
            }
            return Ot
          },
          setPosition: qt => (Vt && this.live.has(et) && Number.isFinite(qt[0] + qt[1] + qt[2]) && tt.pos(qt[2], qt[1], qt[0], et), Ot)
        };
        return Ot
      }
      startSpatial(tt, et, Vt, Ot, qt, Dt, mt, dt, jt, Ht) {
        const Xt = this.sheet(Me[tt], !0);
        let Qt = null;
        if (!qt) {
          if (this.failed.has(Xt)) return null;
          const Vt = Me[tt] === Ie ? null : (0, Ke.i)(ae[tt]),
            Ot = (0, Ke.e)(Pe(et), Math.sqrt(Ht), jt);
          if (Qt = new Le(Vt, Ot, this.now(), Xt, this.voiceHost), !this.voices.admit(Qt)) return null
        }
        const lt = this.start(tt, !0, et, Vt, Ot, qt);
        return Qt && (Qt.id = lt.id, Qt.direct = "loaded" === Xt.state() && !Xt._playLock), Xt.pannerAttr({
          coneOuterAngle: 360
        }, lt.id), Xt.pannerAttr({
          ...Se,
          refDistance: jt
        }, lt.id), Xt.pos(dt, mt, Dt, lt.id), lt
      }
      aliveVoice(tt) {
        const et = this.live.get(tt);
        if (!et) return;
        const Vt = et.howl._soundById(tt);
        if (Vt && !Vt._ended) return et;
        this.forget(tt)
      }
      earDistSq(tt, et, Vt) {
        if (!this.posed) return 0;
        const Ot = tt - this.pose[2],
          qt = et - this.pose[1],
          Dt = Vt - this.pose[0];
        return Ot * Ot + qt * qt + Dt * Dt
      }
      start(tt, et, Vt, Ot, qt, Dt) {
        const mt = Pe(Vt),
          dt = this.sheet(Me[tt], et);
        "unloaded" === dt.state() && dt.load();
        const jt = dt.play(ae[tt]),
          Ht = mt * this.master;
        return dt.volume(Ht, jt), this.live.set(jt, {
          howl: dt,
          rel: mt,
          gain: Ht,
          fadeFrom: Ht,
          fadeAt: 0,
          fadeMs: 0,
          rate: qt,
          handle: Ot,
          spatial: et,
          stopTimer: void 0
        }), 0 !== Ot && this.core.set(Ot, jt), 1 !== qt && dt.rate(qt, jt), Dt && dt.loop(!0, jt), {
          howl: dt,
          id: jt
        }
      }
      sheet(tt, et) {
        const Vt = ke(tt, et);
        let Ot = this.sheets.get(Vt);
        if (!Ot) {
          const qt = this.createHowl(ye[tt], et);
          qt.on("end", (tt => {
            qt.loop(tt) || this.forget(tt)
          })), qt.on("stop", (tt => {
            this.forget(tt)
          })), qt.on("play", (tt => {
            this.live.has(tt) && this.started.add(tt)
          })), qt.on("loaderror", (tt => {
            if ("loaded" !== qt.state()) {
              this.failed.add(qt);
              for (const [tt, et] of this.live) et.howl === qt && this.forget(tt)
            } else "number" === typeof tt && this.forget(tt)
          })), this.sheets.set(Vt, qt), Ot = qt
        }
        return Ot
      }
      setRel(tt, et) {
        const Vt = this.live.get(tt);
        Vt && (Ge(Vt), Vt.fadeMs = 0, Vt.rel = Pe(et), Vt.gain = Vt.rel * this.master, Vt.howl.volume(Vt.gain, tt))
      }
      fade(tt, et, Vt, Ot) {
        const qt = this.live.get(tt);
        if (!qt) return;
        Ge(qt);
        const {
          howl: Dt
        } = qt, mt = this.gainNow(qt);
        qt.rel = Pe(et), qt.gain = qt.rel * this.master;
        const dt = Vt > 0 ? Math.min(Vt, 65535) : 0,
          jt = 0 === dt || mt === qt.gain;
        qt.fadeMs = jt ? 0 : dt, jt ? Dt.volume(qt.gain, tt) : (qt.fadeFrom = mt, qt.fadeAt = this.now(), Dt.fade(mt, qt.gain, dt, tt)), Ot && (jt ? Dt.stop(tt) : qt.stopTimer = setTimeout((() => {
          qt.stopTimer = void 0, Dt.stop(tt)
        }), dt))
      }
      gainNow(tt) {
        if (tt.fadeMs > 0) {
          const et = (this.now() - tt.fadeAt) / tt.fadeMs;
          if (et < 1) return tt.fadeFrom + (tt.gain - tt.fadeFrom) * Math.max(0, et);
          tt.fadeMs = 0
        }
        return tt.gain
      }
      forget(tt) {
        this.started.delete(tt);
        const et = this.live.get(tt);
        et && (Ge(et), this.live.delete(tt), 0 !== et.handle && this.core.get(et.handle) === tt && this.core.delete(et.handle))
      }
    }

    function ke(tt, et) {
      return 2 * tt + (et ? 1 : 0)
    }

    function Ge(tt) {
      void 0 !== tt.stopTimer && (clearTimeout(tt.stopTimer), tt.stopTimer = void 0)
    }
    var ze = Vt(40792),
      oe = Vt(39338);
    class re {
      constructor(tt, et, Vt, Ot) {
        this.key = tt, this.model = et, this.host = Ot, this.uQ = void 0, this.records = void 0, this.origin = [0, 0, 0], this.count = 0, this.sqt = Number.NaN, this.sentOrigin = [Number.NaN, Number.NaN, Number.NaN], this.dirtyList = [], this.isDirty = void 0, this.tail = void 0, this.tailView = void 0, this.tailCut = new Uint8Array(0), this.made = !1, this.df = !1, this.uQ = Math.max(1, Math.ceil(Vt)), this.records = new Float32Array(this.uQ * He.d), this.isDirty = new Uint8Array(this.uQ), this.tail = new Uint8Array(this.uQ * ft.tc.Bytes), this.tailView = new DataView(this.tail.buffer), this.make(Ot.cmd())
      }
      setOrigin(tt, et, Vt) {
        this.origin[0] = tt, this.origin[1] = et, this.origin[2] = Vt
      }
      markDirty(tt) {
        !this.df && tt >= 0 && tt < this.uQ && tt < ft.tc.Max && this.Sf(tt, tt + 1)
      }
      commit(tt) {
        if (this.df) return;
        (tt = Math.min(Math.max(Math.floor(tt), 0), this.uQ, ft.tc.Max)) > this.count && this.Sf(this.count, tt), this.count = tt;
        const {
          origin: et,
          sentOrigin: Vt,
          dirtyList: Ot
        } = this, qt = this.sqt !== tt, Dt = Vt[0] !== et[0] || Vt[1] !== et[1] || Vt[2] !== et[2];
        if (0 === Ot.length && !qt && !Dt) return;
        const mt = this.host.cmd();
        if (!mt || !this.make(mt)) return;
        const dt = Ot.length,
          {
            records: jt,
            tailView: Ht
          } = this;
        for (let Xt = 0; Xt < dt; Xt++) {
          const tt = Ot[Xt],
            et = tt * He.d,
            Vt = Xt * ft.tc.Bytes,
            qt = 0 !== jt[et + He.f] ? ft.tc.Hidden : 0;
          Ht.setUint32(Vt, (tt | qt) >>> 0, !0), Ht.setFloat32(Vt + 4, jt[et], !0), Ht.setFloat32(Vt + 8, jt[et + 1], !0), Ht.setFloat32(Vt + 12, jt[et + 2], !0)
        }
        if ((0, ft.af)(mt, 0, this.key, tt, et, dt, this.tailOf(dt))) {
          for (let tt = 0; tt < dt; tt++) this.isDirty[Ot[tt]] = 0;
          Ot.length = 0, this.sqt = tt, Vt[0] = et[0], Vt[1] = et[1], Vt[2] = et[2]
        }
      }
      grow(tt) {
        (tt = Math.ceil(tt)) <= this.uQ || this.df || (this.records = (0, oe.b)(this.records, new Float32Array(tt * He.d)), this.isDirty = (0, oe.b)(this.isDirty, new Uint8Array(tt)), this.tail = new Uint8Array(tt * ft.tc.Bytes), this.tailView = new DataView(this.tail.buffer), this.uQ = tt)
      }
      dispose() {
        this.df || (this.df = !0, this.host.df(this, this.made ? this.key : null))
      }
      make(tt) {
        if (!this.made && tt) {
          const {
            item: et,
            scale: Vt,
            yaw: Ot
          } = this.model;
          this.made = (0, ft.ef)(tt, 0, this.key, et, Vt, Ot)
        }
        return this.made
      }
      tailOf(tt) {
        const et = tt * ft.tc.Bytes;
        return this.tailCut.buffer === this.tail.buffer && this.tailCut.length === et || (this.tailCut = this.tail.subarray(0, et)), this.tailCut
      }
      Sf(tt, et) {
        const {
          dirtyList: Vt,
          isDirty: Ot
        } = this;
        for (let qt = tt; qt < et; qt++) 0 === Ot[qt] && (Ot[qt] = 1, Vt.push(qt))
      }
    }
    var Ue = Vt(707);
    class Ae {
      constructor(tt) {
        this.keys = 0, this.live = new Set, this.owing = new Set, this.host = void 0, this.host = {
          cmd: tt,
          owes: tt => {
            this.owing.add(tt)
          },
          settled: (tt, et) => {
            this.owing.delete(tt), et && this.live.delete(tt)
          }
        }
      }
      create(tt, et) {
        if (Vt = tt, !Ue.o.includes(Vt)) return null;
        var Vt;
        const Ot = new ie(++this.keys, Xt.f.indexOf(tt), et, this.host);
        return this.live.add(Ot), Ot
      }
      disposeAll() {
        for (const tt of [...this.live]) tt.dispose()
      }
      flush() {
        if (0 === this.owing.size) return;
        const tt = this.host.cmd();
        for (const et of this.owing)
          if (!et.sync(tt)) return
      }
    }
    class ie {
      constructor(tt, et, Vt, Ot) {
        this.key = tt, this.lifeform = et, this.scale = Vt, this.host = Ot, this.feet = [0, 0, 0], this.yaw = 0, this.visible = !1, this.owed = 1, this.df = !1, this.sync()
      }
      setPose(tt, et) {
        this.df || (this.feet[0] = tt[0], this.feet[1] = tt[1], this.feet[2] = tt[2], this.yaw = et, this.owed |= 2, this.sync())
      }
      setVisible(tt) {
        this.df || tt === this.visible || (this.visible = tt, this.owed |= 4, this.sync())
      }
      dispose() {
        this.df || (this.df = !0, this.owed = 1 & this.owed ? 0 : 8, this.sync())
      }
      sync() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.host.cmd();
        return this.write(tt) ? (this.host.settled(this, this.df), !0) : (this.host.owes(this), !1)
      }
      write(tt) {
        if (!tt) return this.owed = 0, !0;
        if (1 & this.owed) {
          if (!(0, ft.lf)(tt, 0, this.key, this.lifeform, this.scale)) return !1;
          this.owed &= -2
        }
        const et = (2 & this.owed ? ft.cd.Pose : 0) | (4 & this.owed ? ft.cd.Visible : 0);
        if (0 !== et) {
          if (!(0, ft.jf)(tt, 0, this.key, et, this.visible ? 1 : 0, this.feet, this.yaw)) return !1;
          this.owed &= -7
        }
        if (8 & this.owed) {
          if (!(0, ft.hf)(tt, 0, this.key)) return !1;
          this.owed = 0
        }
        return !0
      }
    }
    var Ye = Vt(41189);

    function Be(tt, et, Vt, Ot) {
      return (0, Ye.d)(), (0, ft.Pf)(tt, et, Vt, Ot)
    }
    var pe = Vt(39345),
      xe = Vt(40777);
    const Te = [0, 0, 0],
      ge = [0, 0, 0],
      se = [0, 0, 0],
      ne = [0, 0, 0],
      tV = {
        origin: [0, 0, 0],
        direction: [0, 0, 1]
      },
      eV = [0, 0, 0],
      VV = [0, 0],
      OV = [1, 1, 1],
      qV = 1 / 3;
    const DV = Xe.e;

    function mV(tt) {
      const et = Xe.d[tt],
        Vt = et && Xe.e[et.mainMultiblock];
      return Vt && {
        main: Vt,
        x: et.compX,
        y: et.compY,
        z: et.compZ
      }
    }

    function dV(tt) {
      if (null === tt || void 0 === tt) return ft.hd;
      const et = +tt;
      return Number.isInteger(et) && et >= -2147483648 && et <= 2147483647 && String(et) === String(tt) ? et : ft.hd
    }

    function jV(tt, et, Vt) {
      return (0, ft.Wf)(tt, 0, et, null !== Vt && void 0 !== Vt ? Vt : Number.NaN)
    }
    class HV {
      constructor(tt) {
        this.deps = tt, this.api = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.tables = void 0, this.meshKeys = 0, this.liveMeshes = new Set, this.poolKeys = 0, this.livePools = new Set, this.cameraTurn = new pe.b((() => this.tables.getClientOption("forcedCameraDirectionTransitionMs")), (tt => {
          var et, Vt;
          null === (et = (Vt = this.deps).setLocalOptions) || void 0 === et || et.call(Vt, tt)
        })), this.mobModels = new Ae((() => this.deps.cmd())), this.owedFrees = [], this.pendingStyle = void 0, this.pendingFar = void 0, this.farSet = !1, this.routeMesh = 0, this.routeOffset = 0, this.routeLook = "", this.routeSlide = {
          uvOffset: [0, 0]
        }, this.poolHost = {
          cmd: () => this.deps.cmd(),
          df: (tt, et) => {
            this.livePools.delete(tt), null !== et && (this.owedFrees.push(et), this.flushOwed())
          }
        }, this.api = tt.api, this.live = tt.live, this.chunks = tt.chunks, this.items = tt.items, this.tables = tt.tables
      }
      isLocal(tt) {
        return null !== tt && void 0 !== tt && +tt === this.api.localId
      }
      assertLocal(tt, et) {
        if (!this.isLocal(tt)) throw new Error(`Attempted to ${et} for a player that is not the local player`)
      }
      YM(tt) {
        const et = this.api.YM(tt);
        if (!et) throw new Error(`Entity ${tt} has no replicated position`);
        return et
      }
      checkValid(tt) {
        return !!this.deps.isSessionLive() && (null === tt || void 0 === tt || this.api.checkValid(tt))
      }
      isAlive(tt) {
        return !1 !== this.api.isAlive(tt)
      }
      getItemStat(tt, et, Vt) {
        return this.isLocal(tt) || null !== tt && "Player" === this.api.getEntityType(tt) ? this.tables.getItemStat(et, Vt) : this.tables.getDefaultItemStat(et, Vt)
      }
      getClientOption(tt, et) {
        return this.assertLocal(tt, "get a client option"), this.tables.getClientOption(et)
      }
      openShop(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Vt = arguments.length > 2 ? arguments[2] : void 0;
        this.assertLocal(tt, "open shop"), mt.j.sw("showShopFromServer", {
          toggle: et,
          Ht: Vt
        }, !0)
      }
      sendMessage(tt, et, Vt) {
        this.assertLocal(tt, "send a message");
        const Ot = "string" === typeof et ? [{
          str: et,
          style: Vt
        }] : et;
        mt.j.sw("chat", {
          content: Ot
        }, !0)
      }
      getEntityType(tt) {
        return this.api.getEntityType(tt)
      }
      getEntityName(tt) {
        const et = dV(tt);
        return et === ft.hd ? void 0 : (0, ze.h)(this.api, et)
      }
      hasEffect(tt, et) {
        const Vt = dV(tt);
        return Vt !== ft.hd && (0, ze.g)(this.api, Vt, et)
      }
      getMetaInfo(tt) {
        return this.tables.getMetaInfo(tt)
      }
      getPlayerDbId(tt) {
        return this.assertLocal(tt, "get a DB ID"), this.deps.playerDbId()
      }
      getBlockData(tt, et, Vt) {
        if (!this.chunks.dataCleared(tt, et, Vt)) return (0, ze.d)(this.api, tt, et, Vt)
      }
      fR(tt, et, Vt, Ot) {
        this.setBlockId(tt, et, Vt, this.tables.getItemId(Ot))
      }
      setOtherEntitySetting(tt, et, Vt, Ot) {
        if (!this.isLocal(tt)) throw new Error("Attempted to set an other-entity setting for a player that is not the local player");
        if (!Object.hasOwn(ft.vd, Vt)) throw new Error(`Unknown other-entity setting ${Vt}`);
        const qt = ft.vd[Vt],
          Dt = dV(et);
        if (Dt === ft.hd || !this.deps.beforeWrite()) return;
        const mt = (0, kt.g)(Ot);
        if (mt.length > 16384) throw new Error(`The other-entity setting ${Vt}'s value is over 16384 bytes`);
        const dt = this.api.memoryView(Uint8Array, this.api.scratch(), mt.length, "set_other_entity_setting's value");
        dt && (dt.set(mt), this.api.queries.setOtherEntitySetting(Dt, qt, mt.length))
      }
      getPositionView(tt) {
        return this.live.position(+tt)
      }
      readDrawnPosition(tt, et) {
        return this.api.readDrawnPosition(dV(tt), et)
      }
      getDrawnHeading(tt) {
        const et = dV(tt),
          Vt = (et === ft.hd ? 0 : this.api.queries.directorEntity(et)) >= ft.vb.BYTES ? this.api.memoryData(this.api.scratch(), ft.vb.BYTES, 8, "getDrawnHeading's DirectorEntity") : null;
        if (!Vt) return null;
        if (1 === ft.vb.headingIsDrawn(Vt, 0)) return ft.vb.heading(Vt, 0);
        const Ot = this.api.apiView;
        return this.isLocal(tt) && 0 === (ft.x.playerFlags(Ot, 0) & ft.Pd.FreeCam) ? ft.x.heading(Ot, 0) : null
      }
      getLocalPlayerMovement() {
        const tt = ft.x.playerFlags(this.api.apiView, 0);
        return 0 === (tt & ft.Pd.Replay) && this.api.readDrawnPosition(this.api.localId, se) ? {
          onGround: 0 !== (tt & ft.Pd.OnGround),
          jumpHeld: 0 !== (tt & ft.Pd.JumpHeld)
        } : null
      }
      bVt(tt) {
        return this.isLocal(tt) ? this.items.Pd() : null
      }
      getInventoryItems() {
        return this.items.playerItems()
      }
      getHeldGunInaccuracy() {
        var tt, et;
        return "Gun" === (null === (tt = this.aliveHeld()) || void 0 === tt || null === (et = tt.typeObj) || void 0 === et ? void 0 : et.type) ? this.items.inaccuracy : null
      }
      aliveHeld() {
        return !1 === this.api.isAlive(this.api.localId) ? null : this.items.Pd()
      }
      isCrosshairShown() {
        var tt, et;
        const Vt = (0, le.b)(Ot.b.get("crosshairGameView"), Ot.b.get("crosshairShownOverride"));
        if (null !== Vt) return Vt;
        const qt = null === (tt = this.aliveHeld()) || void 0 === tt ? void 0 : tt.typeObj,
          Dt = "Gun" === (null === qt || void 0 === qt ? void 0 : qt.type),
          mt = Dt || !0 === (null === qt || void 0 === qt ? void 0 : qt.showsAimingUi),
          dt = 0 === (ft.x.playerFlags(this.api.apiView, 0) & ft.Pd.ZoomFirstPerson),
          jt = null !== (et = this.tables.getClientOption("gunshotOrigin")) && void 0 !== et ? et : null;
        return (0, le.d)({
          gun: Dt,
          aimable: mt
        }, dt, (0, Ee.d)(), jt)
      }
      setCrosshairShown(tt) {
        Ot.b.set({
          crosshairShownOverride: tt
        })
      }
      getInventoryFreeSlotCount(tt) {
        return this.isLocal(tt) ? this.items.freeSlots() : null
      }
      getSelectedInventorySlotI(tt) {
        return this.isLocal(tt) ? this.items.selectedSlot : null
      }
      getItemSlot(tt, et) {
        return this.isLocal(tt) ? this.items.slot(et) : null
      }
      swapInventorySlots(tt, et) {
        return this.items.swap(tt, et)
      }
      isPlayerCrouching(tt) {
        if (this.isLocal(tt)) return 0 !== (ft.x.playerFlags(this.api.apiView, 0) & ft.Pd.Crouching);
        const et = dV(tt);
        return et !== ft.hd && 1 === this.api.queries.entityCrouching(et)
      }
      getMiningBlock() {
        return this.live.breakingPosition()
      }
      isMining() {
        return 0 !== (ft.x.playerFlags(this.api.apiView, 0) & ft.Pd.AttemptingBreak)
      }
      getTargetedBlock() {
        return this.live.Itt()
      }
      getActionRay() {
        const tt = this.api.apiView;
        for (let et = 0; et < 3; et++) tV.origin[et] = ft.x.gtt(tt, 0, et), tV.direction[et] = ft.x.actionDir(tt, 0, et);
        return tV
      }
      canModifyBlockAt(tt, et, Vt) {
        return 1 === this.api.queries.canModify(tt, et, Vt)
      }
      isSolidToPlayerBlockId(tt) {
        return this.tables.isSolidBlockId(tt) && !this.chunks.isWalkThrough(tt)
      }
      blockNameToBlockId(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.tables.blockNameToBlockId(tt, et)
      }
      blockIdToBlockName(tt) {
        return this.tables.nameOfId(tt)
      }
      Zet(tt, et, Vt, Ot, qt) {
        return 1 === this.api.queries.terrainBlocked(Ot, tt, et, Vt, dV(null !== qt && void 0 !== qt ? qt : null))
      }
      getChunkVersion(tt, et, Vt) {
        return this.chunks.version(tt, et, Vt)
      }
      scanBlocks(tt, et, Vt, Ot, qt, Dt, mt, dt) {
        return this.chunks.scan(tt, et, Vt, Ot, qt, Dt, mt, dt)
      }
      isBlockInLoadedChunk(tt, et, Vt) {
        return this.chunks.isLoaded(tt, et, Vt)
      }
      getBlockId(tt, et, Vt) {
        return this.chunks.qd(tt, et, Vt)
      }
      playSound(tt, et, Vt, Ot, qt) {
        let Dt = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        if (!this.isLocal(tt)) return null;
        const mt = this.playSoundFrom(et, Vt, qt, Dt);
        return 1 === Ot ? mt : mt.rate(Ot)
      }
      preloadSounds(tt) {
        var et, Vt;
        null === (et = (Vt = this.deps).preloadSounds) || void 0 === et || et.call(Vt, tt)
      }
      playSoundFrom(tt, et, Vt, Ot) {
        var qt, Dt;
        const mt = this.deps.playSound;
        if (!mt) return We.c;
        const dt = null === Vt || void 0 === Vt ? void 0 : Vt.qt,
          jt = null !== (qt = null === Vt || void 0 === Vt ? void 0 : Vt.maxHearDist) && void 0 !== qt ? qt : Qe.c,
          Ht = null !== (Dt = null === Vt || void 0 === Vt ? void 0 : Vt.refDistance) && void 0 !== Dt ? Dt : Qe.f;
        let Xt = null;
        if (Array.isArray(dt)) Te[0] = dt[0], Te[1] = dt[1], Te[2] = dt[2], Xt = Te;
        else if (void 0 !== dt && null !== dt) {
          const tt = dV(dt);
          if (!this.api.isLocal(tt)) {
            if (!this.api.readPosition(tt, Te)) return We.c;
            Xt = Te
          }
        }
        return mt(tt, et, Xt, Xt && this.ear(), jt, Ht, Ot)
      }
      ear() {
        if (this.api.readPosition(this.api.localId, ge)) ge[1] += ce;
        else {
          const tt = this.api.apiView;
          if (0 === ft.x.viewProj(tt, 0, 3) && 0 === ft.x.viewProj(tt, 0, 7) && 0 === ft.x.viewProj(tt, 0, 11)) return null;
          for (let et = 0; et < 3; et++) ge[et] = ft.x.eye(tt, 0, et)
        }
        return Number.isFinite(ge[0] + ge[1] + ge[2]) ? ge : null
      }
      setBlockId(tt, et, Vt, Ot) {
        if (!Number.isInteger(Ot) || Ot < 0 || Ot > 65535) throw new Error(`Invalid block id ${Ot}`);
        if (!this.deps.beforeWrite() || !this.chunks.isLoaded(tt, et, Vt)) return;
        const qt = Math.floor(tt),
          Dt = Math.floor(et),
          mt = Math.floor(Vt),
          dt = this.predictedCells(qt, Dt, mt, Ot);
        if (1 === this.api.queries.fR(qt, Dt, mt, Ot)) {
          for (let tt = 0; tt < dt.length; tt += 5) this.chunks.setOverlay(dt[tt], dt[tt + 1], dt[tt + 2], dt[tt + 3], 1 === dt[tt + 4]);
          this.live.refreshTarget()
        }
      }
      particlesEnabled() {
        return this.deps.particles.enabled()
      }
      createParticles(tt, et) {
        return this.deps.particles.create(tt, et)
      }
      playParticleEffect(tt) {
        this.deps.particles.playEffect(tt)
      }
      burstParticlePreset(tt, et, Vt) {
        this.deps.particles.burstPreset(tt, et, Vt)
      }
      createGameMesh(tt, et, Vt) {
        const Ot = ++this.meshKeys,
          qt = this.deps.cmd();
        if (!qt) return Ot;
        const {
          look: Dt,
          colour: mt
        } = function(tt) {
          switch (tt.kind) {
            case void 0:
            case "flatEmissive":
              return tt.onTop ? {
                look: ft.Xb.FlatOnTop,
                colour: [...tt.rgb, tt.alpha]
              } : tt.opaque ? {
                look: ft.Xb.FlatOpaque,
                colour: [...tt.rgb, 1]
              } : {
                look: ft.Xb.Flat,
                colour: [...tt.rgb, tt.alpha]
              };
            case "chevronPath":
              return {
                look: ft.Xb.Chevrons, colour: [...(0, fe.d)(tt.colour), tt.alpha]
              };
            case "furnaceFire":
              return {
                look: ft.Xb.FurnaceFire, colour: [1, 1, 1, 1]
              }
          }
        }(et), dt = Math.floor(tt.positions.length / 3), jt = function(tt, et) {
          const Vt = Math.floor(tt.positions.length / 3),
            Ot = tt.indices.length,
            qt = Vt * (et ? 5 : 3),
            Dt = new Uint8Array(4 * (qt + Ot)),
            mt = new DataView(Dt.buffer);
          for (let Ht = 0; Ht < 3 * Vt; Ht++) mt.setFloat32(4 * Ht, tt.positions[Ht], !0);
          if (et) {
            var dt;
            const et = null !== (dt = tt.uvs) && void 0 !== dt ? dt : [];
            for (let tt = 0; tt < 2 * Vt; tt++) {
              var jt;
              mt.setFloat32(4 * (3 * Vt + tt), null !== (jt = et[tt]) && void 0 !== jt ? jt : 0, !0)
            }
          }
          for (let Ht = 0; Ht < Ot; Ht++) mt.setUint32(4 * (qt + Ht), tt.indices[Ht], !0);
          return Dt
        }(tt, (0, He.i)(et));
        return (0, ft.Re)(qt, 0, Ot, Dt, mt, Vt, dt, tt.indices.length, jt) && this.liveMeshes.add(Ot), Ot
      }
      setGameMesh(tt, et) {
        var Vt;
        const Ot = this.deps.cmd();
        if (!Ot) return;
        let qt = 0;
        et.anchor && (qt |= ft.Zb.Anchor, eV[0] = et.anchor[0], eV[1] = et.anchor[1], eV[2] = et.anchor[2]), void 0 !== et.visible && (qt |= ft.Zb.Visible), et.uvOffset && (qt |= ft.Zb.UvOffset, VV[0] = et.uvOffset[0], VV[1] = et.uvOffset[1]);
        const Dt = null !== (Vt = et.visibility) && void 0 !== Vt ? Vt : 1;
        void 0 !== et.visibility && (qt |= ft.Zb.Visibility), et.scale && (qt |= ft.Zb.Scale, OV[0] = et.scale[0], OV[1] = et.scale[1], OV[2] = et.scale[2]), 0 !== qt && (0, ft.We)(Ot, 0, tt, qt, et.visible ? 1 : 0, eV, VV, Dt, OV)
      }
      disposeGameMesh(tt) {
        const et = this.deps.cmd();
        et && !(0, ft.Ve)(et, 0, tt) || this.liveMeshes.delete(tt)
      }
      hasPackModel(tt) {
        var et, Vt, Ot;
        return null !== (et = null === (Vt = (Ot = this.deps).hasPackModel) || void 0 === Vt ? void 0 : Vt.call(Ot, tt)) && void 0 !== et && et
      }
      disposeGameOutput() {
        const tt = tt => {
          try {
            tt()
          } catch (et) {
            console.error("Error freeing client game output", et)
          }
        };
        for (const et of [...this.liveMeshes]) tt((() => {
          this.disposeGameMesh(et)
        }));
        for (const et of [...this.livePools]) tt((() => {
          et.dispose()
        }));
        tt((() => {
          this.mobModels.disposeAll()
        })), tt((() => {
          this.setGroundArrowStyle(null)
        })), tt((() => {
          this.setRouteChevrons(null), this.routeOffset = 0, this.routeLook = ""
        })), tt((() => {
          this.setCrosshairShown(null)
        })), tt((() => {
          this.cameraTurn.dispose()
        })), tt((() => {
          this.farSet && (this.farSet = !1, this.setCameraFar(null))
        }))
      }
      createInstancePool(tt, et) {
        const Vt = this.tables.idOf(tt.item);
        if (void 0 === Vt) return null;
        const Ot = new re(++this.poolKeys, {
          item: Vt,
          scale: tt.scale,
          yaw: tt.yaw
        }, et, this.poolHost);
        return this.livePools.add(Ot), Ot
      }
      createMobModel(tt, et) {
        return this.mobModels.create(tt, et)
      }
      setRouteChevrons(tt) {
        if (0 !== this.routeMesh && (this.disposeGameMesh(this.routeMesh), this.routeMesh = 0), !tt || 0 === tt.cells.length) return;
        const et = `${tt.colour} ${tt.alpha}`;
        et !== this.routeLook && (this.routeLook = et, this.routeOffset = 0), this.routeMesh = this.createGameMesh(function(tt) {
          const [et, Vt, Ot] = tt[0].pos, qt = [], Dt = [], mt = [];
          return tt.forEach(((tt, dt) => {
            let {
              pos: jt,
              way: [Ht, Xt]
            } = tt;
            const Qt = jt[0] - et + .5,
              lt = jt[1] - Vt + .04,
              Et = jt[2] - Ot + .5,
              [ft, wt] = [.35 * -Xt, .35 * Ht],
              [yt, Nt] = [dt * qV, (dt + 1) * qV],
              Mt = qt.length / 3;
            qt.push(Qt - .5 * Ht + ft, lt, Et - .5 * Xt + wt), qt.push(Qt - .5 * Ht - ft, lt, Et - .5 * Xt - wt), qt.push(Qt + .5 * Ht + ft, lt, Et + .5 * Xt + wt), qt.push(Qt + .5 * Ht - ft, lt, Et + .5 * Xt - wt), Dt.push(0, yt, 1, yt, 0, Nt, 1, Nt), mt.push(Mt, Mt + 1, Mt + 2, Mt + 1, Mt + 3, Mt + 2)
          })), {
            positions: qt,
            uvs: Dt,
            indices: mt
          }
        }(tt.cells), {
          kind: "chevronPath",
          colour: tt.colour,
          alpha: tt.alpha
        }, tt.cells[0].pos), this.setRouteSlide()
      }
      slideRoute(tt) {
        0 !== this.routeMesh && (this.routeOffset = (this.routeOffset + Math.min(tt, 250) / 1e3 * 1.2 * qV) % 1, this.setRouteSlide())
      }
      setRouteSlide() {
        this.routeSlide.uvOffset[1] = -this.routeOffset, this.setGameMesh(this.routeMesh, this.routeSlide)
      }
      setGroundArrowStyle(tt) {
        this.pendingStyle = tt, this.flushOwed()
      }
      flushOwed() {
        this.mobModels.flush();
        const tt = this.owedFrees;
        if (0 === tt.length && void 0 === this.pendingStyle && void 0 === this.pendingFar) return;
        const et = this.deps.cmd();
        if (!et) return tt.length = 0, void(this.pendingFar = void 0);
        let Vt = 0;
        for (; Vt < tt.length && (0, ft.df)(et, 0, tt[Vt]);) Vt++;
        tt.splice(0, Vt);
        const Ot = this.pendingStyle;
        if (void 0 !== Ot) {
          (Ot ? (0, ft._f)(et, 0, Ot.width, Ot.alpha, 1, Ot.endAtSolidFace ? 1 : 0) : (0, ft._f)(et, 0, 0, 0, 0, 0)) && (this.pendingStyle = void 0)
        }
        const qt = this.pendingFar;
        void 0 !== qt && (0, ft.Sf)(et, 0, null !== qt && void 0 !== qt ? qt : 0, null === qt ? 1 : 0) && (this.pendingFar = void 0)
      }
      setNametagOffset(tt, et) {
        const Vt = this.deps.cmd(),
          Ot = dV(tt);
        Vt && Ot !== ft.hd && (0, ft.fg)(Vt, 0, Ot, et)
      }
      setFacingTolerance(tt, et) {
        const Vt = this.deps.cmd(),
          Ot = dV(tt);
        Vt && Ot !== ft.hd && jV(Vt, Ot, et)
      }
      forEachEntity(tt) {
        const {
          api: et
        } = this;
        for (let Vt = 0; Vt < et.idStr.length; Vt++) {
          const Ot = et.idStr[Vt];
          null === Ot || Ct(et.kinds[Vt]) || tt(Ot)
        }
      }
      getEntityInfo(tt) {
        return this.deps.entityInfo.get(tt)
      }
      isEntityInteractable(tt) {
        const et = dV(tt);
        return et !== ft.hd && 1 === this.api.queries.entityInteractable(et)
      }
      isLocalPlayer(tt) {
        return this.isLocal(tt)
      }
      getLineOwner(tt) {
        var et;
        const Vt = null === (et = this.deps.entityInfo.get(tt)) || void 0 === et ? void 0 : et.meshOpts;
        if (!Vt) return null;
        try {
          const {
            lineToEId: tt
          } = JSON.parse(Vt);
          return null !== tt && void 0 !== tt ? tt : null
        } catch {
          return null
        }
      }
      getCameraPosition() {
        const tt = this.api.apiView;
        return ne[0] = ft.x.eye(tt, 0, 0), ne[1] = ft.x.eye(tt, 0, 1), ne[2] = ft.x.eye(tt, 0, 2), ne
      }
      getCameraFar() {
        return ft.x.cameraFar(this.api.apiView, 0)
      }
      setCameraFar(tt) {
        null !== tt && (this.farSet = !0), this.pendingFar = tt, this.flushOwed()
      }
      turnCamera(tt, et) {
        this.cameraTurn.turn(tt, et)
      }
      clearPickupDelay(tt) {
        const et = this.deps.cmd(),
          Vt = dV(tt);
        et && Vt !== ft.hd && (0, ft.Ce)(et, 0, Vt)
      }
      sendChat(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const Vt = this.deps.sendCmd();
        Vt && Be(Vt, 0, xe.c.Chat, (0, kt.g)((0, xe.l)({
          kX: tt,
          GX: et
        })))
      }
      sendCommand(tt) {
        tt.length <= 119 && this.sendChat(`/${tt}`)
      }
      predictedCells(tt, et, Vt, Ot) {
        const qt = this.chunks,
          Dt = [],
          mt = (tt, et, Vt, Ot, qt) => {
            Dt.push(tt, et, Vt, Ot, this.tables.blockRootId(qt) === this.tables.blockRootId(Ot) ? 0 : 1)
          },
          dt = qt.qd(tt, et, Vt),
          jt = mV(dt);
        if (jt) {
          const [Ot, Dt, Ht] = [tt - jt.x, et - jt.y, Vt - jt.z], Xt = DV[qt.qd(Ot, Dt, Ht)], Qt = null === Xt || void 0 === Xt ? void 0 : Xt.positions.some((tt => tt.id === dt && tt.x === jt.x && tt.y === jt.y && tt.z === jt.z));
          for (const tt of (Qt && Xt ? Xt : jt.main).positions) qt.qd(Ot + tt.x, Dt + tt.y, Ht + tt.z) === tt.id && mt(Ot + tt.x, Dt + tt.y, Ht + tt.z, 0, tt.id)
        }
        const Ht = mV(Ot);
        if (Ht)
          for (const Qt of Ht.main.positions) {
            const [Ot, Dt, dt] = [tt + Qt.x - Ht.x, et + Qt.y - Ht.y, Vt + Qt.z - Ht.z];
            mt(Ot, Dt, dt, Qt.id, qt.qd(Ot, Dt, dt))
          } else mt(tt, et, Vt, Ot, dt);
        const Xt = this.tables;
        if ((0 !== Xt.attachedTopOf(dt) || 0 !== Xt.attachedTopOf(Ot)) && qt.isLoaded(tt, et + 1, Vt)) {
          let jt = qt.qd(tt, et + 1, Vt);
          for (let Ot = 0; Ot < Dt.length; Ot += 5) Dt[Ot] === tt && Dt[Ot + 1] === et + 1 && Dt[Ot + 2] === Vt && (jt = Dt[Ot + 3]);
          const Ht = this.attachedTopWrite(dt, Ot, jt);
          void 0 !== Ht && mt(tt, et + 1, Vt, Ht, jt)
        }
        return Dt
      }
      attachedTopWrite(tt, et, Vt) {
        const Ot = this.tables,
          qt = Ot.attachedTopOf(tt),
          Dt = Ot.attachedTopOf(et),
          mt = 0 !== qt && 0 !== Vt && Ot.blockRootId(Vt) === Ot.blockRootId(qt);
        return 0 !== qt && 0 !== Dt && Ot.blockRootId(tt) === Ot.blockRootId(et) ? mt && Vt !== Dt ? Dt : void 0 : 0 === Dt || !mt && 0 !== Vt ? mt ? 0 : void 0 : Dt
      }
    }
    const XV = ft.oc + ft.sc * ft.yc.BYTES,
      QV = 2147483647,
      lV = new TextDecoder,
      EV = new TextEncoder,
      fV = Object.freeze({
        cX: 0,
        jj: null,
        amountAddedToSlot: 0
      }),
      wV = new Proxy({}, {
        get: () => () => ft.ud
      });

    function yV(tt) {
      return Number.isInteger(tt) && tt >= 0 && tt <= 65535
    }

    function NV(tt) {
      return Number.isInteger(tt) && tt >= 0 && tt <= 4294967295
    }
    class aV {
      constructor(tt) {
        this.deps = tt, this.Tq = [0, 0, 0], this.inaccuracy = 0, this.version = 0, this.notified = 0, this.iconChanged = !1, this.facades = new Array(ft.sc), this.ids = new Uint16Array(ft.sc), this.amounts = new Uint16Array(ft.sc), this.attrRead = new Float64Array(ft.sc).fill(-1), this.stale = new Uint16Array(ft.sc), this.staleVersion = new Uint32Array(ft.sc), this.instances = new Uint32Array(ft.sc), this.viewPtr = 0, this.viewVersion = -1, this.len = 0, this.selected = 0, this.slotIconId = 0, this.stopped = !1, this.listeners = new Set
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
      slot(tt) {
        var et;
        return Number.isInteger(tt) && tt >= 0 && tt < this.len && 0 !== this.ids[tt] && null !== (et = this.facades[tt]) && void 0 !== et ? et : null
      }
      Pd() {
        return this.slot(this.selected)
      }
      playerItems() {
        const tt = [];
        for (let et = 0; et < Math.min(ft.zd, this.len); et++) tt.push(this.slot(et));
        return tt
      }
      freeSlots() {
        let tt = 0;
        for (let et = 0; et < Math.min(ft.zd - ft.h, this.len); et++) 0 === this.ids[et] && tt++;
        return tt
      }
      amountOf(tt) {
        let et = 0;
        for (let Ot = 0; Ot < Math.min(ft.zd, this.len); Ot++) {
          const qt = this.slot(Ot);
          var Vt;
          if ((null === qt || void 0 === qt ? void 0 : qt.name) === tt) et += null !== (Vt = qt.amount) && void 0 !== Vt ? Vt : 1
        }
        return et
      }
      instance(tt) {
        var et;
        return null !== (et = this.instances[tt]) && void 0 !== et ? et : 0
      }
      watch(tt) {
        return this.listeners.add(tt), () => {
          this.listeners.delete(tt)
        }
      }
      touch() {
        this.version++
      }
      flush(tt) {
        if (this.version !== this.notified || this.iconChanged) {
          this.notified = this.version, this.iconChanged = !1;
          for (const Vt of [...this.listeners]) try {
            Vt()
          } catch (et) {
            tt(et)
          }
        }
      }
      chestOpened(tt, et, Vt) {
        this.Tq[0] = tt, this.Tq[1] = et, this.Tq[2] = Vt, this.version++
      }
      refresh() {
        const tt = this.deps.api.apiView,
          et = ft.x.inventoryViewPtr(tt, 0),
          Vt = ft.x.inventoryVersion(tt, 0),
          Ot = ft.x.selectedSlot(tt, 0);
        Ot !== this.selected && (this.selected = Ot, this.version++);
        const qt = ft.x.slotIcon(tt, 0);
        if (qt !== this.slotIconId && (this.slotIconId = qt, this.iconChanged = !0), et === this.viewPtr && Vt === this.viewVersion) return;
        this.viewPtr = et, this.viewVersion = Vt;
        const Dt = this.deps.api.memoryData(et, XV, 4, "the inventory view"),
          mt = Dt ? Math.min(Dt.getUint32(0, !0), ft.sc) : 0;
        mt !== this.len && (this.len = mt, this.version++);
        let dt = 0;
        for (let jt = 0; jt < ft.sc; jt++) {
          const tt = ft.oc + jt * ft.yc.BYTES,
            et = null !== Dt && jt < mt ? ft.yc.item(Dt, tt) : 0;
          if (0 === et || null === Dt) {
            0 !== this.ids[jt] && (this.ids[jt] = 0, this.attrRead[jt] = -1, this.instances[jt]++, this.version++);
            continue
          }
          const Vt = ft.yc.amount(Dt, tt),
            Ot = ft.yc.attrVersion(Dt, tt);
          et === this.ids[jt] && Vt === this.amounts[jt] || this.fill(jt, et, Vt), Ot !== this.attrRead[jt] && (this.stale[dt] = jt, this.staleVersion[dt] = Ot, dt++)
        }
        dt > 0 && this.fetchAttributes(dt)
      }
      fill(tt, et, Vt) {
        const {
          tables: Ot
        } = this.deps, qt = et !== this.ids[tt];
        let Dt = this.facades[tt];
        Dt || (Dt = {
          name: "",
          amount: null,
          attributes: {
            customAttributes: {}
          },
          typeObj: null
        }, this.facades[tt] = Dt), qt && (Dt.name = Ot.nameOfId(et), Dt.typeObj = Ot.itemType(et), Dt.attributes = {
          customAttributes: {}
        }, this.attrRead[tt] = -1, this.instances[tt]++), Dt.amount = 0 === Vt ? null : Vt, this.ids[tt] = et, this.amounts[tt] = Vt, this.version++
      }
      fetchAttributes(tt) {
        const {
          api: et,
          onError: Vt
        } = this.deps, Ot = et.memoryView(Uint16Array, et.scratch(), tt, "item_attributes_batch's slots");
        if (!Ot) return void this.markRead(tt);
        Ot.set(this.stale.subarray(0, tt));
        const qt = et.queries.itemAttributesBatch(tt),
          Dt = 4294967295 === qt ? null : et.memoryData(et.scratch(), qt, 4, "item_attributes_batch's answer");
        if (!Dt) return void this.markRead(tt);
        const mt = new Uint8Array(Dt.buffer, Dt.byteOffset, qt);
        for (let jt = 0; jt + 8 <= qt;) {
          const tt = Dt.getUint16(jt, !0),
            et = Dt.getUint32(jt + 4, !0),
            Ot = mt.subarray(jt + 8, jt + 8 + et);
          jt += 8 + (0, lt.Fe)(et);
          const qt = this.facades[tt];
          if (qt && 0 !== this.ids[tt] && 0 !== et) {
            try {
              qt.attributes = JSON.parse(lV.decode(Ot))
            } catch (dt) {
              Vt(dt)
            }
            this.version++
          }
        }
        this.markRead(tt)
      }
      markRead(tt) {
        for (let et = 0; et < tt; et++) this.attrRead[this.stale[et]] = this.staleVersion[et]
      }
      swap(tt, et) {
        return yV(tt) && yV(et) && this.settle(this.queries().invSwap(tt, et))
      }
      move(tt, et, Vt) {
        return yV(tt) && yV(et) && NV(Vt) && this.settle(this.queries().invMove(tt, et, Vt))
      }
      quickMove(tt, et, Vt, Ot) {
        var qt, Dt;
        if (!yV(tt) || !yV(et) || !yV(Vt) || null !== Ot && !NV(Ot)) return null;
        const mt = this.queries().invQuickMove(tt, et, Vt, null === Ot ? -1 : Math.min(Ot, QV)),
          dt = mt === ft.ud ? ft.Mb : null !== (qt = null === (Dt = this.extras()) || void 0 === Dt ? void 0 : Dt[1]) && void 0 !== qt ? qt : ft.Mb;
        return this.settle(mt), dt === ft.Mb ? null : dt
      }
      remove(tt, et, Vt) {
        return yV(tt) && NV(et) && this.settle(this.queries().invRemove(tt, et, Vt ? 1 : 0))
      }
      selectSlot(tt) {
        return yV(tt) && this.settle(this.queries().selectSlot(tt))
      }
      closeChest() {
        return this.settle(this.queries().closeChest())
      }
      enchant(tt, et, Vt) {
        if (!yV(tt) || !Number.isInteger(et)) return !1;
        const [Ot, qt, Dt] = Vt;
        return this.settle(this.queries().invEnchant(tt, et, Math.floor(Ot), Math.floor(qt), Math.floor(Dt)))
      }
      craft(tt, et, Vt) {
        let Ot;
        try {
          Ot = this.deps.tables.getItemId(tt)
        } catch {
          return fV
        }
        if (!yV(et) || null !== Vt && (Number.isNaN(Vt) || Vt < 0)) return fV;
        const qt = null === Vt || Vt > QV ? -1 : Math.floor(Vt),
          Dt = this.queries().craft(Ot, et, qt);
        let mt = fV;
        const dt = Dt === ft.ud ? null : this.extras();
        if (dt) {
          const [tt, et, Vt] = dt;
          mt = {
            cX: tt,
            jj: et === ft.Mb ? null : et,
            amountAddedToSlot: Vt
          }
        }
        return this.settle(Dt), mt
      }
      salvage(tt, et, Vt) {
        let Ot;
        try {
          Ot = this.deps.tables.getItemId(et)
        } catch {
          return !1
        }
        return yV(tt) && Number.isInteger(Vt) && this.settle(this.queries().salvage(tt, Ot, Math.max(Math.min(Vt, QV), -QV)))
      }
      craftingView(tt, et, Vt) {
        var Ot;
        if (this.stopped) return null;
        const {
          api: qt,
          onError: Dt
        } = this.deps, mt = tt ? EV.encode(tt) : null;
        if (null !== mt) {
          if (mt.length > 1024) return Dt(new Error(`The crafting station ${tt}'s name is over 1024 bytes`)), null;
          const et = qt.memoryView(Uint8Array, qt.scratch(), mt.length, "crafting_view's station");
          if (!et) return null;
          et.set(mt)
        }
        const dt = yV(et) && yV(Vt),
          jt = qt.queries.craftingView(null !== (Ot = null === mt || void 0 === mt ? void 0 : mt.length) && void 0 !== Ot ? Ot : 0, dt ? et : 0, dt ? Vt : 0);
        return jt < ft.nb.BYTES ? (qt.reportCorruption(`crafting_view's answer of ${jt} bytes`), null) : qt.memoryData(qt.scratch(), jt, 1, "crafting_view's answer")
      }
      queries() {
        var tt, et;
        return !1 === (null === (tt = (et = this.deps).beforeOp) || void 0 === tt ? void 0 : tt.call(et)) ? (this.stopped = !0, wV) : this.deps.api.queries
      }
      extras() {
        const {
          api: tt
        } = this.deps;
        return tt.memoryView(Uint32Array, tt.scratch(), 3, "a sync query's extra words")
      }
      settle(tt) {
        if (tt === ft.rd)(0, Ye.d)();
        else if (tt !== ft.ud) {
          const et = this.deps.cmd();
          et && function(tt, et, Vt) {
            return (0, Ye.d)(), (0, ft.tg)(tt, et, Vt)
          }(et, 0, tt) || this.deps.onError(new Error(`Sync op ${tt}'s marker didn't fit the command ring: its send goes after the next frame's commands`))
        }
        return this.stopped || this.refresh(), tt !== ft.ud
      }
    }
    const MV = 1 / .6,
      bV = [0, 1, 0],
      JV = [0, 0, 0],
      CV = new Uint8Array(0),
      uV = 1.2 * we.e.iy,
      KV = new TextEncoder,
      hV = [0, 0, 0],
      vV = [0, 0, 0],
      WV = new Map;

    function SV(tt) {
      let et = WV.get(tt);
      return et || (WV.size >= 64 && WV.clear(), et = KV.encode(`{"emitRate":${tt}}`), WV.set(tt, et)), et
    }

    function cV(tt) {
      return Number.isFinite(tt) && tt > 0 ? tt : 0
    }

    function RV(tt, et) {
      for (let Vt = 0; Vt < 3; Vt++) {
        const Ot = Math.abs(et[Vt]);
        hV[Vt] = tt[Vt] - Ot, vV[Vt] = 2 * Ot
      }
      return Number.isFinite(hV[0] + hV[1] + hV[2] + vV[0] + vV[1] + vV[2])
    }

    function IV(tt, et) {
      return "pos1" === tt || "pos2" === tt ? void 0 : et
    }

    function PV(tt, et, Vt) {
      return tt.length > ft.Nd.MaxOpts ? (Vt(new Error(`${et}'s particle opts are over ${ft.Nd.MaxOpts} bytes of JSON`)), null) : tt
    }
    const ZV = {
      moveTo() {},
      setEmitRate() {},
      emit() {},
      emitPoints() {},
      setDirections() {},
      stop() {},
      dispose() {}
    };
    class LV {
      constructor(tt) {
        this.deps = tt, this.session = 0, this.nextKey = 1, this.live = 0, this.started = !1
      }
      enabled() {
        return null !== this.sink()
      }
      sink() {
        return this.deps.isSessionLive() ? this.deps.cmd() : null
      }
      create(tt, et) {
        var Vt;
        const Ot = this.sink(),
          qt = null !== (Vt = et.half) && void 0 !== Vt ? Vt : JV;
        if (!Ot || this.live >= ft.Nd.MaxLiveKeys || this.nextKey > ft.Nd.MaxKey || !RV(et.pos, qt)) return ZV;
        const Dt = this.nextKey,
          mt = PV(function(tt) {
            var et, Vt, Ot;
            const qt = JSON.stringify({
              texture: "string" === typeof tt.texture ? tt.texture : "smokePuff",
              uQ: tt.uQ,
              minLifeTime: tt.minLifeTime,
              maxLifeTime: tt.maxLifeTime,
              minSize: tt.minSize,
              maxSize: tt.maxSize,
              minEmitPower: tt.minEmitPower,
              maxEmitPower: tt.maxEmitPower,
              emitRate: cV(tt.emitRate),
              gravity: null !== (et = tt.gravity) && void 0 !== et ? et : JV,
              dir1: null !== (Vt = tt.dir1) && void 0 !== Vt ? Vt : bV,
              dir2: null !== (Ot = tt.dir2) && void 0 !== Ot ? Ot : bV,
              colorGradients: tt.colorGradients,
              blendMode: tt.blendMode
            });
            return KV.encode(qt)
          }(tt), "createParticles", this.deps.onError);
        return mt && (0, ft.sf)(Ot, 0, Dt, 0, ft.Nd.PresetNone, 0, hV, vV, mt) ? (this.nextKey++, this.live++, this.started = !0, new FV(this, this.session, Dt, tt, qt)) : ZV
      }
      playEffect(tt) {
        const et = this.sink(),
          {
            pos1: Vt,
            pos2: Ot
          } = tt;
        if (!et || !Vt || !Ot) return;
        for (let Dt = 0; Dt < 3; Dt++) hV[Dt] = Math.min(Vt[Dt], Ot[Dt]), vV[Dt] = Math.abs(Ot[Dt] - Vt[Dt]);
        if (!Number.isFinite(hV[0] + hV[1] + hV[2] + vV[0] + vV[1] + vV[2])) return;
        const qt = PV(KV.encode(JSON.stringify(tt, IV)), "playParticleEffect", this.deps.onError);
        qt && (0, ft.of)(et, 0, 0, ft.Nd.PresetNone, ft.Nd.HasBox, 0, hV, vV, qt)
      }
      burstPreset(tt, et, Vt) {
        const Ot = this.sink(),
          qt = Math.min(Math.floor(Vt), ft.Nd.MaxBurst);
        if (!Ot || !Object.hasOwn(ft.bc, tt) || !(qt > 0)) return;
        const Dt = uV;
        for (let mt = 0; mt < 3; mt++) hV[mt] = et[mt] - Dt / 2, vV[mt] = Dt;
        Number.isFinite(hV[0] + hV[1] + hV[2]) && (0, ft.of)(Ot, 0, 0, ft.bc[tt], ft.Nd.HasBox, qt, hV, vV, CV)
      }
      sessionEnded() {
        this.session++;
        const tt = this.started ? this.deps.cmd() : null;
        return this.started = !1, this.nextKey = 1, this.live = 0, !tt || (0, ft.uf)(tt, 0)
      }
      sinkFor(tt) {
        return tt === this.session ? this.deps.cmd() : null
      }
      stop(tt, et) {
        const Vt = this.sinkFor(tt);
        Vt && (0, ft.yf)(Vt, 0, et) && this.live--
      }
    }
    class FV {
      constructor(tt, et, Vt, Ot, qt) {
        this.owner = tt, this.session = et, this.key = Vt, this.half = void 0, this.rate = void 0, this.stopDelayMs = void 0, this.emitted = void 0, this.stopped = !1, this.freed = !1, this.half = [Math.abs(qt[0]), Math.abs(qt[1]), Math.abs(qt[2])], this.rate = cV(Ot.emitRate), this.emitted = this.rate > 0;
        const Dt = Ot.maxLifeTime * MV * 1e3 + 250;
        this.stopDelayMs = Dt >= 0 ? Math.min(Dt, 2147483647) : 250
      }
      sink() {
        return this.stopped ? null : this.owner.sinkFor(this.session)
      }
      moveTo(tt, et) {
        const Vt = this.sink();
        if (Vt) {
          if (et)
            for (let tt = 0; tt < 3; tt++) this.half[tt] = Math.abs(et[tt]);
          RV(tt, this.half) && (0, ft.Af)(Vt, 0, this.key, ft.Nd.HasBox, hV, vV, CV)
        }
      }
      setEmitRate(tt) {
        const et = this.sink(),
          Vt = cV(tt);
        et && Vt !== this.rate && (0, ft.Af)(et, 0, this.key, 0, JV, JV, SV(Vt)) && (this.rate = Vt, this.emitted ||= Vt > 0)
      }
      emit(tt) {
        const et = this.sink(),
          Vt = Math.min(Math.floor(tt), ft.Nd.MaxBurst);
        et && Vt > 0 && (0, ft.of)(et, 0, this.key, ft.Nd.PresetNone, 0, Vt, JV, JV, CV) && (this.emitted = !0)
      }
      emitPoints(tt, et, Vt) {
        const Ot = this.sink(),
          qt = Math.min(Math.floor(Vt), ft.Nd.MaxPoints, Math.floor(et.length / 4));
        if (!Ot || !(qt > 0) || !Number.isFinite(tt[0] + tt[1] + tt[2])) return;
        const Dt = new Uint8Array(et.buffer, et.byteOffset, qt * ft.Nd.PointBytes);
        (0, ft.qf)(Ot, 0, this.key, qt, tt, Dt) && (this.emitted = !0)
      }
      setDirections(tt, et) {
        const Vt = this.sink();
        if (!Vt || !Number.isFinite(tt[0] + tt[1] + tt[2] + et[0] + et[1] + et[2])) return;
        const Ot = KV.encode(JSON.stringify({
          dir1: [tt[0], tt[1], tt[2]],
          dir2: [et[0], et[1], et[2]]
        }));
        (0, ft.Af)(Vt, 0, this.key, 0, JV, JV, Ot)
      }
      stop() {
        const tt = this.sink();
        this.stopped = !0, tt && (this.emitted ? (this.rate > 0 && (0, ft.Af)(tt, 0, this.key, 0, JV, JV, SV(0)), setTimeout((() => {
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
    const kV = Ue.r,
      GV = new TextDecoder;

    function zV(tt, et) {
      const {
        serverIds: Vt,
        kinds: Ot
      } = tt;
      let qt = 0;
      for (let Dt = 0; Dt < Vt.length; Dt++) {
        const tt = Vt[Dt];
        if (tt !== ft.hd && !Ct(Ot[Dt])) {
          if (qt === et.length) {
            const tt = new Int32Array(Math.max(64, 2 * qt));
            tt.set(et), et = tt
          }
          et[qt++] = tt
        }
      }
      return {
        ids: et,
        count: qt
      }
    }

    function oV(tt, et) {
      return tt.length >= et ? tt : new Int32Array(Math.max(et, 2 * tt.length))
    }

    function rV(tt, et, Vt, Ot) {
      for (let qt = 0; qt < Vt; qt += 4096) {
        const Dt = Math.min(4096, Vt - qt),
          mt = tt.memoryView(Int32Array, tt.scratch(), Dt, "entity_info_batch's ids");
        if (!mt) return !1;
        mt.set(et.subarray(qt, qt + Dt));
        const dt = tt.queries.entityInfoBatch(Dt),
          jt = 4294967295 === dt ? null : tt.memoryData(tt.scratch(), dt, 4, "entity_info_batch's records");
        if (!jt) return !1;
        for (let tt = 0; tt + ft.Qb.BYTES <= dt;) {
          const et = ft.Qb.len(jt, tt);
          Ot(ft.Qb.serverId(jt, tt), UV(jt, tt, et)), tt += ft.Qb.BYTES + (0, lt.Fe)(et)
        }
      }
      return !0
    }

    function UV(tt, et, Vt) {
      var Ot, qt, Dt;
      const mt = ft.Qb.kind(tt, et),
        dt = 0 === mt ? null : ut(mt);
      if (null === dt) return null;
      const jt = ft.Qb.variation(tt, et),
        Ht = ft.Qb.pose(tt, et),
        Xt = ft.Qb.meta(tt, et),
        Qt = ft.Qb.mesh(tt, et),
        lt = 0 !== (ft.Qb.flags(tt, et) & ft.Pb.HasOpts),
        Et = kV[dt];
      return Object.freeze({
        type: dt,
        variation: jt === ft.od ? void 0 : null !== (Ot = null !== (qt = null === Et || void 0 === Et ? void 0 : Et[jt]) && void 0 !== qt ? qt : null === Et || void 0 === Et ? void 0 : Et[0]) && void 0 !== Ot ? Ot : "default",
        pose: Ht === ft.kc ? void 0 : null !== (Dt = ft.Hb[Ht]) && void 0 !== Dt ? Dt : ft.Hb[0],
        metaInfo: Xt === ft.kc ? void 0 : ft.$c[Xt],
        meshKind: Qt === ft.kc ? void 0 : ft.Yc[Qt],
        meshOpts: lt ? GV.decode(new Uint8Array(tt.buffer, tt.byteOffset + et + ft.Qb.BYTES, Vt)) : void 0
      })
    }
    const AV = 1,
      iV = 2;
    class YV {
      constructor(tt) {
        this.deps = tt, this.wanted = 0, this.Pd = !1, this.refused = !1
      }
      get on() {
        return this.Pd
      }
      want(tt, et) {
        this.wanted = et ? this.wanted | tt : this.wanted & ~tt;
        const Vt = 0 !== this.wanted;
        if (Vt === this.Pd) return;
        const Ot = this.deps.cmd();
        null !== Ot ? (0, ft.zg)(Ot, 0, Vt ? 1 : 0) ? (this.Pd = Vt, this.refused = !1) : this.refused || (this.refused = !0, this.deps.onError(new Error("WatchEntityInfo didn't fit the command ring"))) : this.Pd = !1
      }
    }
    class BV {
      constructor(tt) {
        this.deps = tt, this.entries = new Map, this.complete = !1, this.refill = !1, this.midFrame = !1, this.pending = new Int32Array(64), this.pendingCount = 0, this.ids = new Int32Array(64)
      }
      get(tt) {
        var et;
        return this.complete || this.fill(), null !== (et = this.entries.get("string" === typeof tt ? tt : String(tt))) && void 0 !== et ? et : null
      }
      inCoreCall() {
        this.midFrame = !0
      }
      stale(tt) {
        if (this.complete) {
          if (this.pendingCount === this.pending.length) {
            const tt = new Int32Array(2 * this.pending.length);
            tt.set(this.pending), this.pending = tt
          }
          this.pending[this.pendingCount++] = tt
        }
      }
      removed(tt) {
        this.entries.size > 0 && this.entries.delete(String(tt))
      }
      refresh() {
        const tt = this.pendingCount;
        if (this.pendingCount = 0, this.midFrame = !1, !this.deps.watch.on || this.refill) return this.complete = !1, void(this.refill = !1);
        if (tt > 0 && this.complete) {
          const {
            api: et
          } = this.deps;
          let Vt = 0;
          const Ot = this.ids = oV(this.ids, tt);
          for (let qt = 0; qt < tt; qt++) {
            const tt = this.pending[qt],
              Dt = et.indexById.get(tt);
            void 0 === Dt || Ct(et.kinds[Dt]) ? this.entries.delete(String(tt)) : Ot[Vt++] = tt
          }
          Vt > 0 && !this.batch(Ot, Vt) && (this.complete = !1)
        }
      }
      sessionEnded() {
        this.entries.clear(), this.complete = !1, this.refill = !1, this.midFrame = !1, this.pendingCount = 0, this.deps.watch.want(AV, !1)
      }
      fill() {
        const {
          api: tt
        } = this.deps;
        if (this.complete = !0, this.pendingCount = 0, this.entries.clear(), this.deps.isSessionLive()) {
          const {
            watch: tt
          } = this.deps, et = tt.on;
          tt.want(AV, !0), !et && tt.on && (this.refill = this.midFrame)
        }
        const {
          ids: et,
          count: Vt
        } = zV(tt, this.ids);
        this.ids = et, Vt > 0 && !this.batch(et, Vt) && (this.refill = !0)
      }
      batch(tt, et) {
        return rV(this.deps.api, tt, et, ((tt, et) => {
          null === et ? this.entries.delete(String(tt)) : this.entries.set(String(tt), et)
        }))
      }
    }
    var pV = Vt(4963);

    function xV(tt) {
      if ("message" !== tt.type || tt.kX !== pV.gc.NewClientOptions || tt.payloadKind !== lt.wc.Msgpack) return null;
      const et = (0, kt.c)(tt.payload);
      if (null === et || "object" !== typeof et || Array.isArray(et)) throw new Error("NewClientOptions whose body isn't an object of options");
      return et
    }
    var TV = Vt(1325),
      gV = Vt(36880);

    function sV(tt, et, Vt, Ot, qt, Dt, dt) {
      var jt, Ht, Xt;
      switch (tt) {
        case ft.pe.ToggleMenu: {
          const tt = ft.Q[et];
          mt.j.sw("toggleMenu", void 0 === tt ? "inventory" : `inventory|${tt}`);
          break
        }
        case ft.pe.EditBoard:
          mt.j.sw("EditBoard", {
            pos: 0 === et ? null : Vt
          });
          break;
        case ft.pe.EditCodeBlock:
        case ft.pe.ViewCodeBlock:
          mt.j.sw("EditCodeBlock", {
            pos: Vt,
            canChangePos: tt === ft.pe.EditCodeBlock
          });
          break;
        case ft.pe.EditCustomLobbyBlock:
          mt.j.sw("EditCustomLobbyBlock", {
            pos: Vt
          });
          break;
        case ft.pe.OpenIronChest:
          mt.j.sw("OpenIronChest", {
            pos: Vt
          });
          break;
        case ft.pe.EditNameTag:
          mt.j.sw("EditNameTag", null !== (jt = null === (Ht = qt.Pd()) || void 0 === Ht || null === (Xt = Ht.attributes.customAttributes) || void 0 === Xt ? void 0 : Xt.text) && void 0 !== jt ? jt : "");
          break;
        case ft.pe.EditBook: {
          var Qt, lt, wt;
          const tt = null === (Qt = qt.Pd()) || void 0 === Qt ? void 0 : Qt.attributes;
          mt.j.sw("EditBook", {
            pages: (0, TV.Q)(null === tt || void 0 === tt || null === (lt = tt.customAttributes) || void 0 === lt ? void 0 : lt.pages),
            title: null !== (wt = null === tt || void 0 === tt ? void 0 : tt.customDisplayName) && void 0 !== wt ? wt : "Title",
            isPublished: !(null === tt || void 0 === tt || !tt.customDescription)
          });
          break
        }
        case ft.pe.CantChangeBlock:
          ! function(tt, et) {
            const Vt = et.getClientOption("cantChangeError"),
              Ot = et.getClientOption(tt ? "cantBuildError" : "cantBreakError"),
              qt = tt ? Vt : Ot;
            (et.getClientOption("canChange") || qt || "You cannot modify this block" !== Vt) && mt.j.sw("showBottomMessage", {
              message: Ot || Vt,
              type: "Error"
            })
          }(1 === et, Dt);
          break;
        case ft.pe.MiddleBarStart:
          mt.j.sw("middleScreenBarInitiate", {
            duration: Ot,
            oq: 1 === Vt[0],
            horizBarRemOffset: et
          });
          break;
        case ft.pe.MiddleBarStop:
          mt.j.sw("middleScreenBarRemove");
          break;
        case ft.pe.Hitmarker:
          mt.j.sw("localGunHitmarker", {
            ne: 1 === et
          });
          break;
        case ft.pe.ShotsLeft:
          mt.j.sw("localPlayerNewShotsLeft", Ot);
          break;
        case ft.pe.AimingOverlay:
          mt.j.sw("aimingOverlay", 3 === (3 & et) ? "sniper" : "none");
          break;
        case ft.pe.BottomMessage:
          mt.j.sw("showBottomMessage", JSON.parse(dt()));
          break;
        case ft.pe.Crosshair:
          qt.inaccuracy = (0, Gt.d)(Ot), (0, gV.d)().crosshairAccuracy(qt.inaccuracy);
          break;
        case ft.pe.ChargeStage:
          break;
        case ft.pe.EmoteWheelClose:
          mt.j.sw("requestEmoteWheelClose");
          break;
        case ft.pe.BlockMined:
          mt.j.sw("localBlockMined");
          break;
        default:
          throw new Et.d(`UiEvent of no kind: what ${tt}`)
      }
    }
    var nV = Vt(38250),
      tO = Vt(34388),
      eO = Vt(2054),
      VO = Vt(37036),
      OO = Vt(34399),
      qO = Vt(4951);
    const DO = 10,
      mO = {
        player: [],
        chestOrCreative: [],
        chest: null,
        creative: !1,
        selectedSlot: 0,
        freeSlots: 0
      },
      dO = {
        items: [],
        ammo: 0,
        selectedSlot: 0
      },
      jO = {
        gun: !1,
        aimable: !1,
        chargeName: null
      };

    function HO(tt, et) {
      let Vt, Ot = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        qt = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      const Dt = () => (Vt = (0, eO.o)(Vt, et()), Vt);
      return {
        current: Dt,
        watch(et) {
          const Vt = () => {
              et(Dt())
            },
            mt = [tt.watch(Vt)];
          return null !== Ot && mt.push((0, eO.q)((tt => {
            tt.some(Ot) && Vt()
          }))), null !== qt && mt.push(qt(Vt)), () => {
            for (const tt of mt) tt()
          }
        }
      }
    }

    function XO(tt) {
      return tt && {
        name: tt.name,
        amount: tt.amount,
        attributes: tt.attributes
      }
    }
    const QO = new WeakMap;

    function lO(tt) {
      let et = QO.get(tt);
      return void 0 === et && (et = (0, OO.creativeItemIds)().map((et => ({
        name: tt.nameOfId(et),
        amount: tt.isStackableId(et) ? 1 : null,
        attributes: (0, nV.c)("Gun" === (0, OO.itemTypeOf)(et) ? {
          type: "Gun",
          clipSize: (0, OO.clipSizeOf)(et)
        } : void 0)
      }))), QO.set(tt, et)), et
    }

    function EO(tt, et, Vt, Ot) {
      const qt = et => (tt.flush(Ot), et),
        Dt = Vt => {
          var Ot, qt, Dt, mt, dt, jt, Ht;
          const Xt = tt.slot(Vt);
          if (!Xt) return null;
          const {
            rootName: Qt,
            metaStr: lt
          } = et.getMetaInfo(Xt.name);
          return {
            name: Xt.name,
            amount: Xt.amount,
            attributes: Xt.attributes,
            instance: tt.instance(Vt),
            displayName: null !== (Ot = Xt.attributes.customDisplayName) && void 0 !== Ot ? Ot : et.getDisplayName(Qt),
            requiresAmmo: "RequiresAmmo" === lt,
            clipSize: null !== (qt = null !== (Dt = null === (mt = Xt.attributes.customAttributes) || void 0 === mt || null === (dt = mt.gunStats) || void 0 === dt ? void 0 : dt.clipSize) && void 0 !== Dt ? Dt : null === (jt = et.getGunStats(Qt)) || void 0 === jt ? void 0 : jt.clipSize) && void 0 !== qt ? qt : null === (Ht = Xt.typeObj) || void 0 === Ht ? void 0 : Ht.clipSize
          }
        },
        dt = function(tt, et) {
          let Vt = null,
            Ot = {
              focus: null,
              recipes: [],
              detail: null
            },
            qt = -1;
          const Dt = new Set;
          return {
            read() {
              var Dt, mt;
              if (null === Vt) return null !== Ot.focus && (Ot = {
                ...Ot,
                focus: null
              }), Ot;
              if (Ot.focus === Vt && qt === tt.changes) return Ot;
              if (qt = tt.changes, 0 === tt.length) return Ot = {
                focus: Vt,
                recipes: [],
                detail: null
              }, Ot;
              let dt = 0;
              if (null !== Vt.recipe) try {
                dt = et.getItemId(Vt.recipe.name)
              } catch {}
              const jt = tt.craftingView(Vt.station, dt, null !== (Dt = null === (mt = Vt.recipe) || void 0 === mt ? void 0 : mt.SX) && void 0 !== Dt ? Dt : 0);
              return Ot = null === jt ? {
                focus: Vt,
                recipes: [],
                detail: null
              } : function(tt, et, Vt) {
                let Ot = ft.nb.BYTES;
                const qt = [];
                for (let Xt = ft.nb.recipes(tt, 0); Xt > 0; Xt--) {
                  const Vt = ft.fb.flags(tt, Ot),
                    Dt = {
                      name: et.nameOfId(ft.fb.item(tt, Ot)),
                      SX: ft.fb.recipe(tt, Ot),
                      requires: [],
                      produces: ft.fb.produces(tt, Ot),
                      haveIngredients: 0 !== (Vt & ft.eb.HaveIngredients),
                      listed: 0 !== (Vt & ft.eb.Listed)
                    };
                  let mt = ft.fb.requires(tt, Ot);
                  for (Ot += ft.fb.BYTES; mt > 0; mt--) {
                    const Vt = ft.hb.items(tt, Ot);
                    Dt.requires.push({
                      items: yO(tt, Ot + ft.hb.BYTES, Vt, et),
                      amt: ft.hb.amount(tt, Ot)
                    }), Ot += ft.hb.BYTES + 2 * Vt
                  }
                  qt.push(Dt)
                }
                const Dt = ft.nb.flags(tt, 0);
                if (null === Vt.recipe || 0 === (Dt & ft.lb.Detail)) return {
                  focus: Vt,
                  recipes: qt,
                  detail: null
                };
                const mt = {},
                  dt = {};
                for (let Xt = ft.nb.ingredients(tt, 0); Xt > 0; Xt--) {
                  const Vt = ft.db.item(tt, Ot),
                    qt = ft.db.from(tt, Ot),
                    Dt = ft.db.amount(tt, Ot);
                  Ot += ft.db.BYTES;
                  const jt = qt === ft.O ? null : yO(tt, Ot, qt, et);
                  if (null !== jt && (Ot += 2 * qt), 0 === Vt) continue;
                  const Ht = et.nameOfId(Vt);
                  mt[Ht] = Dt, null !== jt && (dt[Ht] = jt)
                }
                const {
                  name: jt,
                  SX: Ht
                } = Vt.recipe;
                return {
                  focus: Vt,
                  recipes: qt,
                  detail: {
                    name: jt,
                    SX: Ht,
                    craftAllTimes: ft.nb.craftAllTimes(tt, 0),
                    roomForOne: 0 !== (Dt & ft.lb.RoomForOne),
                    resultStackable: Boolean(et.getItemStat(jt, "stackable")),
                    amounts: mt,
                    ingredientsCraftedFrom: dt
                  }
                }
              }(jt, et, Vt), Ot
            },
            setFocus(tt) {
              Vt = tt;
              for (const et of [...Dt]) et()
            },
            watchFocus: tt => (Dt.add(tt), () => {
              Dt.delete(tt)
            })
          }
        }(tt, et);
      return {
        states: {
          inventory: HO(tt, (() => {
            const Vt = tt.length;
            if (0 === Vt) return mO;
            const Ot = [];
            for (let et = 0; et < ft.zd; et++) Ot.push(XO(tt.slot(et)));
            const qt = tt.slotIcon,
              Dt = Ot[tt.selectedSlot];
            0 !== qt && Dt && (Ot[tt.selectedSlot] = {
              ...Dt,
              icon: et.nameOfId(qt)
            });
            const mt = !0 === et.getClientOption("creative");
            let dt = [],
              jt = null;
            if (Vt > ft.zd) {
              for (let et = ft.zd; et < Vt; et++) dt.push(XO(tt.slot(et)));
              jt = {
                type: null,
                pos: [...tt.Tq],
                numSlots: Vt - ft.zd,
                ironChest: null
              }
            } else mt && (dt = lO(et));
            return {
              player: Ot,
              chestOrCreative: dt,
              chest: jt,
              creative: mt,
              selectedSlot: tt.selectedSlot,
              freeSlots: tt.freeSlots()
            }
          }), (0, eO.k)("creative")),
          hotbar: HO(tt, (() => {
            if (0 === tt.length) return dO;
            const et = [];
            for (let tt = 0; tt < DO; tt++) et.push(Dt(tt));
            return {
              items: et,
              ammo: tt.amountOf("Ammo"),
              selectedSlot: tt.selectedSlot
            }
          }), (0, eO.g)("DisplayName", "GunStats")),
          crafting: HO(tt, dt.read, null, dt.watchFocus),
          heldItemAim: HO(tt, (() => {
            var et;
            if (!Vt()) return jO;
            const Ot = null === (et = tt.Pd()) || void 0 === et ? void 0 : et.typeObj,
              qt = "Gun" === (null === Ot || void 0 === Ot ? void 0 : Ot.type);
            return {
              gun: qt,
              aimable: qt || !0 === (null === Ot || void 0 === Ot ? void 0 : Ot.showsAimingUi),
              chargeName: "Chargeable" === (null === Ot || void 0 === Ot ? void 0 : Ot.type) ? Ot.name : null
            }
          }), null, (tt => function(tt, et) {
            let Vt = tt();
            return (0, qO.p)((() => {
              const Ot = tt();
              Ot !== Vt && (Vt = Ot, et(Ot))
            }))
          }(Vt, tt)))
        },
        events: {
          hotbarSlotRequested: (0, eO.d)("setSelectedInventorySlotI"),
          hotbarScrolled: (0, eO.d)("ScrollInventorySlot"),
          numberKeyPressed: (0, eO.d)("numkeyPressed"),
          inventoryDropRequested: (0, eO.d)("DropInvenItem"),
          chestToggled: (0, eO.d)("chestToggleFromServer"),
          chestRefreshed: (0, eO.d)("chestRefreshedFromServer", wO),
          inventorySynced: (0, eO.d)("syncedInvenFromServer", wO),
          enchantingTableOpened: (0, eO.d)("enchantingTable", (tt => {
            let {
              position: Vt,
              qd: Ot
            } = tt;
            return {
              position: [...Vt],
              blockName: et.getMetaInfo(Ot).rootName
            }
          }))
        },
        commands: {
          selectHotbarSlot(et) {
            tt.selectSlot(et), tt.flush(Ot)
          },
          removeInventoryItem(et) {
            let {
              slot: Vt,
              amount: Ot,
              drop: Dt
            } = et;
            return qt(tt.remove(Vt, Ot, Dt))
          },
          swapInventorySlots(et) {
            let {
              a: Vt,
              b: Ot
            } = et;
            return qt(tt.swap(Vt, Ot))
          },
          moveInventoryItem(et) {
            let {
              from: Vt,
              to: Ot,
              amount: Dt
            } = et;
            return qt(tt.move(Vt, Ot, Dt))
          },
          quickMoveInventoryItem(et) {
            let {
              slot: Vt,
              start: Ot,
              end: Dt,
              amount: mt
            } = et;
            return qt(tt.quickMove(Vt, Ot, Dt, mt))
          },
          closeChest() {
            tt.closeChest(), tt.flush(Ot), mt.j.sw("chestClosedByPlayer")
          },
          focusCrafting(tt) {
            dt.setFocus(tt)
          },
          craftRecipe(et) {
            let {
              name: Vt,
              SX: Ot,
              times: Dt
            } = et;
            return qt(tt.craft(Vt, Ot, Dt))
          },
          salvageItem(et) {
            let {
              slot: Vt,
              name: Ot,
              amount: Dt
            } = et;
            return qt(tt.salvage(Vt, Ot, Dt))
          },
          enchantItem(et) {
            let {
              slot: Vt,
              level: Ot,
              tablePos: qt
            } = et;
            tt.enchant(Vt, Ot, qt)
          }
        },
        queries: {
          enchantingOffer(Vt) {
            let {
              slot: Ot,
              blockName: qt
            } = Vt;
            return function(tt, et, Vt, Ot) {
              const qt = tt.slot(Vt);
              if (!qt || !et.getClientOption("canCraft") || !(0, tO.v)(Ot) || (0, tO.r)(qt.attributes)) return fO;
              const Dt = (0, OO.enchantmentPerksOf)(et.getItemId(qt.name));
              if (0 === Dt.length) return fO;
              const mt = [];
              for (let dt = 0; dt < VO.e; dt++) {
                const {
                  commonProb: tt,
                  uncommonProb: et,
                  rareProb: Vt,
                  epicProb: qt,
                  legendaryProb: Dt,
                  level: jt
                } = (0, tO.g)(Ot, dt);
                mt.push({
                  level: jt,
                  odds: [tt, et, Vt, qt, Dt].map((tt => 100 * tt))
                })
              }
              return {
                perks: [...Dt],
                options: mt
              }
            }(tt, et, Ot, qt)
          }
        }
      }
    }
    const fO = Object.freeze({
      perks: [],
      options: []
    });

    function wO() {
      return null
    }

    function yO(tt, et, Vt, Ot) {
      const qt = [];
      for (let Dt = 0; Dt < Vt; Dt++) {
        const Vt = tt.getUint16(et + 2 * Dt, !0);
        0 !== Vt && qt.push(Ot.nameOfId(Vt))
      }
      return qt
    }
    class NO {
      constructor(tt) {
        this.api = tt, this.positions = new Map, this.targeted = {
          o3: 0,
          position: [0, 0, 0],
          normal: [0, 0, 0],
          gw: [0, 0, 0]
        }, this.hasTarget = !1, this.breaking = [0, 0, 0], this.isBreaking = !1
      }
      position(tt) {
        let et = this.positions.get(tt);
        return et || (this.api.checkValid(tt) || this.api.isLocal(tt) ? (et = [NaN, NaN, NaN], this.api.readPosition(tt, et), this.positions.set(tt, et), et) : null)
      }
      Itt() {
        return this.hasTarget ? this.targeted : null
      }
      breakingPosition() {
        return this.isBreaking ? this.breaking : null
      }
      refresh() {
        for (const [et, Vt] of this.positions) this.api.readPosition(et, Vt) || this.api.checkValid(et) || this.api.isLocal(et) || this.positions.delete(et);
        const tt = this.api.apiView;
        if (this.refreshTarget(), this.isBreaking = 0 !== (ft.x.playerFlags(tt, 0) & ft.Pd.Breaking) && ft.x.breakingProgress(tt, 0) >= 0, this.isBreaking)
          for (let et = 0; et < 3; et++) this.breaking[et] = ft.x.breakingPos(tt, 0, et)
      }
      refreshTarget() {
        const tt = this.api.apiView,
          et = ft.x.targetBlockId(tt, 0);
        if (this.hasTarget = et !== ft.ld, this.hasTarget) {
          const Vt = this.targeted;
          Vt.o3 = et;
          for (let et = 0; et < 3; et++) Vt.position[et] = ft.x.targetBlock(tt, 0, et), Vt.normal[et] = ft.x.targetNormal(tt, 0, et), Vt.gw[et] = ft.x.targetAdjacent(tt, 0, et)
        }
      }
      despawned(tt) {
        const et = this.positions.get(tt);
        et && !this.api.isLocal(tt) && (et.fill(NaN), this.positions.delete(tt))
      }
    }
    var aO = Vt(40816),
      MO = Vt(40797),
      bO = Vt(36616),
      JO = Vt(37032);
    const CO = 1,
      uO = 2;
    class KO {
      constructor() {
        this.game = new JO.f, this.client = new JO.f, this.Pd = 0, this.movesFly = null
      }
      setGame(tt) {
        if (null === tt || "object" !== typeof tt) return !1;
        const {
          key: et,
          value: Vt
        } = tt;
        return "string" === typeof et && (this.game.setBooleanType(et, Boolean(Vt)), !0)
      }
      setClient(tt, et) {
        this.client.setBooleanType(tt, et)
      }
      clearGame() {
        this.game = new JO.f, this.movesFly = null
      }
      setMovesFly(tt) {
        this.movesFly = tt
      }
      perms() {
        return (this.game._getTotalBooleanVal() ? CO : 0) | (this.client._getTotalBooleanVal() ? uO : 0)
      }
      write(tt) {
        const et = this.perms(),
          {
            movesFly: Vt
          } = this;
        if (et === this.Pd && null === Vt) return !0;
        let Ot = ft.Ub.Keep;
        return null !== Vt && (Ot = Vt ? ft.Ub.On : ft.Ub.Off), !(!tt || !(0, ft.Oe)(tt, 0, Ot, et, Vt ? 1 : 0)) && (this.Pd = et, this.movesFly = null, !0)
      }
    }
    class hO {
      constructor(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => 35;
        this.api = tt, this.screenBandPct = void 0, this.clipX = 0, this.clipY = 0, this.clipW = 0, this.eye = [0, 0, 0], this.forward = [0, 0, 1], this.along = [0, 0, 0], this.screenBandPct = {
          x: dt.d,
          get y() {
            return et()
          }
        }
      }
      get hasView() {
        const tt = this.api.apiView,
          et = ft.x.viewProj;
        return 0 !== et(tt, 0, 3) || 0 !== et(tt, 0, 7) || 0 !== et(tt, 0, 11) || 0 !== et(tt, 0, 15)
      }
      get cameraPosition() {
        const tt = this.api.apiView,
          {
            eye: et
          } = this;
        for (let Vt = 0; Vt < 3; Vt++) et[Vt] = ft.x.eye(tt, 0, Vt);
        return et
      }
      get cameraDirection() {
        const tt = this.api.apiView,
          et = ft.x.viewProj,
          Vt = et(tt, 0, 3),
          Ot = et(tt, 0, 7),
          qt = et(tt, 0, 11),
          Dt = Math.hypot(Vt, Ot, qt),
          {
            forward: mt
          } = this;
        return Dt > 0 && (mt[0] = Vt / Dt, mt[1] = Ot / Dt, mt[2] = qt / Dt), mt
      }
      get cameraHeading() {
        return ft.x.heading(this.api.apiView, 0)
      }
      get cameraPitch() {
        return ft.x.pitch(this.api.apiView, 0)
      }
      get tanHalfFovX() {
        return ft.x.tanHalfFovX(this.api.apiView, 0)
      }
      get tanHalfFovY() {
        return ft.x.tanHalfFovY(this.api.apiView, 0)
      }
      projectWorldPosToScreenPos(tt) {
        this.clip(tt);
        const {
          clipX: et,
          clipY: Vt,
          clipW: Ot
        } = this;
        if (Ot > 0) {
          const tt = et / Ot * 50,
            qt = -Vt / Ot * 50;
          return Math.abs(tt) <= this.screenBandPct.x && Math.abs(qt) <= this.screenBandPct.y ? {
            x: 50 + tt,
            y: 50 + qt
          } : this.clampToBand(tt, qt)
        }
        const qt = this.cameraPosition,
          Dt = Math.hypot(tt[0] - qt[0], tt[1] - qt[1], tt[2] - qt[2]),
          mt = this.api.apiView,
          dt = ft.x.viewProj,
          jt = Dt > 0 ? et / Dt : 0,
          Ht = Dt > 0 ? -Vt / Dt : 0,
          Xt = Math.hypot(dt(mt, 0, 1), dt(mt, 0, 5), dt(mt, 0, 9)),
          Qt = jt / Math.hypot(dt(mt, 0, 0), dt(mt, 0, 4), dt(mt, 0, 8)),
          lt = Ht / Xt,
          Et = !(Math.abs(Qt) >= .001 || Math.abs(lt) >= .001);
        return this.clampToBand(jt, Et ? -(Xt || 1) : Ht)
      }
      projectDirectionToScreenPos(tt) {
        if (!this.hasView) return;
        const et = this.cameraPosition,
          Vt = this.along;
        for (let Ot = 0; Ot < 3; Ot++) Vt[Ot] = et[Ot] + 10 * tt[Ot];
        return this.projectWorldPosToScreenPos(Vt)
      }
      projectWorldPosToViewport(tt) {
        this.clip(tt);
        const {
          clipX: et,
          clipY: Vt,
          clipW: Ot
        } = this;
        return Ot > 0 ? {
          x: 50 + et / Ot * 50,
          y: 50 - Vt / Ot * 50
        } : null
      }
      clip(tt) {
        const et = this.api.apiView,
          Vt = tt[0] - ft.x.origin(et, 0, 0),
          Ot = tt[1] - ft.x.origin(et, 0, 1),
          qt = tt[2] - ft.x.origin(et, 0, 2),
          Dt = ft.x.viewProj;
        this.clipX = Dt(et, 0, 0) * Vt + Dt(et, 0, 4) * Ot + Dt(et, 0, 8) * qt + Dt(et, 0, 12), this.clipY = Dt(et, 0, 1) * Vt + Dt(et, 0, 5) * Ot + Dt(et, 0, 9) * qt + Dt(et, 0, 13), this.clipW = Dt(et, 0, 3) * Vt + Dt(et, 0, 7) * Ot + Dt(et, 0, 11) * qt + Dt(et, 0, 15)
      }
      clampToBand(tt, et) {
        return (0, dt.f)(tt, et, this.screenBandPct.x, this.screenBandPct.y)
      }
    }
    var vO = Vt(4974);
    const WO = new TextEncoder,
      SO = new Uint8Array(ft.S * ft.R);
    class cO {
      constructor() {
        this.buttons = [], this.Pd = !0
      }
      set(tt) {
        this.buttons = tt, this.Pd = !1
      }
      attached() {
        this.Pd = 0 === this.buttons.length
      }
      write(tt) {
        if (this.Pd) return;
        const et = new Uint8Array(ft.S),
          Vt = new Uint8Array(ft.S);
        let Ot = 0,
          qt = 0;
        for (const {
            id: Dt,
            keycode: mt
          }
          of this.buttons) {
          if (Ot === ft.S) break;
          const {
            read: tt,
            written: dt
          } = WO.encodeInto(Dt, SO.subarray(qt, qt + ft.R));
          if (tt < Dt.length) continue;
          const jt = vO.h[mt];
          et[Ot] = "number" === typeof jt ? jt : 0, Vt[Ot] = dt, Ot++, qt += dt
        }
        this.Pd = (0, ft.ye)(tt, 0, Ot, et, Vt, SO.subarray(0, qt))
      }
    }

    function RO(tt, et, Vt) {
      const Ot = WO.encode(et);
      return Ot.length <= ft.R && function(tt, et, Vt, Ot) {
        return (0, Ye.d)(), (0, ft.Cf)(tt, et, Vt, Ot)
      }(tt, 0, Vt ? 1 : 0, Ot)
    }
    const IO = new TextDecoder,
      PO = new TextEncoder,
      ZO = new Uint8Array(0),
      LO = [0, 0, 0],
      FO = {
        off: ft.Sd.Off,
        key: ft.Sd.Key,
        touch: ft.Sd.Touch
      };
    class kO {
      constructor(tt) {
        var et;
        this.options = tt, this.renderFrame = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.entityInfo = void 0, this.entityInfoWatch = void 0, this.particles = void 0, this.clientApi = void 0, this.scriptedCamera = void 0, this.owners = [], this.tickers = [], this.renderers = [], this.receivers = [], this.failures = [], this.vetoSet = !1, this.hooksSet = !1, this.writtenPublicLobby = !1, this.promptWatch = "off", this.promptWatchSent = "off", this.customButtons = new cO, this.generation = 0, this.sessionLive = !1, this.boundId = 0, this.session = null, this.activeConn = 0, this.closedThrough = 0, this.openSocket = 0, this.socketLeftSinceAttach = !1, this.ticks = 0, this.zoomUnshown = !1, this.zoomHeld = !1, this.overflowGen = 0, this.resyncOwed = !1, this.zoom = 0, this.pendingZoom = null, this.highlight = null, this.highlightOwed = !1, this.cmd = null, this.freeCam = new KO, this.stopped = () => !1, this.onError = void 0, this.api = void 0, this.tables = void 0, this.itemSources = null, this.fault = void 0, this.iE = tt => {
          if ((0, Et.h)(tt)) throw tt;
          this.onError(tt)
        }, this.api = tt.api, this.tables = tt.tables, this.onError = null !== (et = tt.onError) && void 0 !== et ? et : tt => {
          console.error("Error in client game callback", tt)
        }, this.renderFrame = new hO(this.api, tt.screenBandY), this.live = new NO(this.api), this.chunks = new je(this.api.memory, (() => this.api.apiView)), this.items = new aV({
          api: this.api,
          tables: tt.tables,
          cmd: () => this.cmd,
          onError: this.onError,
          beforeOp: tt.beforeOp
        });
        const Vt = () => this.stopped() ? null : this.cmd,
          Ot = () => this.sessionLive;
        this.entityInfoWatch = new YV({
          cmd: Vt,
          onError: this.onError
        }), this.entityInfo = new BV({
          api: this.api,
          watch: this.entityInfoWatch,
          isSessionLive: Ot
        }), this.particles = new LV({
          cmd: Vt,
          isSessionLive: Ot,
          onError: this.onError
        }), this.clientApi = new HV({
          api: this.api,
          live: this.live,
          chunks: this.chunks,
          items: this.items,
          entityInfo: this.entityInfo,
          particles: this.particles,
          tables: tt.tables,
          cmd: Vt,
          sendCmd: () => this.sendCmd(),
          isSessionLive: Ot,
          beforeWrite: () => {
            var et;
            if (this.stopped()) return !1;
            const Vt = this.generation;
            return !1 !== (null === (et = tt.beforeWrite) || void 0 === et ? void 0 : et.call(tt)) && Vt === this.generation
          },
          playerDbId: () => {
            const tt = this.session;
            if (null === tt) throw new Error("No game session has started, so the local player has no DB id");
            return tt.playerDbId
          },
          playSound: tt.playSound,
          preloadSounds: tt.preloadSounds,
          setLocalOptions: tt.setLocalOptions,
          hasPackModel: tt.hasPackModel
        }), this.scriptedCamera = new pt({
          api: this.api,
          cmd: () => this.stopped() ? null : this.cmd,
          screen: tt.cameraScreen,
          showFacing: tt.showCameraFacing
        })
      }
      get itemBridgeSources() {
        return this.itemSources ??= EO(this.items, this.tables, (() => this.localPlayerAlive()), this.iE), this.itemSources
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
      clickCodeBlock(tt) {
        const et = this.sessionLive ? this.sendCmd() : null;
        return null !== et && (Vt = et, Ot = 0, qt = tt[0], Dt = tt[1], mt = tt[2], (0, Ye.d)(), (0, ft.Ge)(Vt, Ot, qt, Dt, mt));
        var Vt, Ot, qt, Dt, mt
      }
      cameraZoom() {
        return this.zoom
      }
      setCameraZoom(tt) {
        const et = this.liveCmd();
        return null === et ? (this.pendingZoom = tt, !1) : (this.pendingZoom = null, (0, ft.pg)(et, 0, tt, 1))
      }
      oW(tt) {
        const et = this.stopped() ? null : this.cmd;
        return null !== et && (0, ft.jg)(et, 0, tt ? 1 : 0)
      }
      respawn() {
        const tt = this.sessionLive ? this.sendCmd() : null;
        return null !== tt && (et = tt, Vt = 0, (0, Ye.d)(), (0, ft.Jf)(et, Vt));
        var et, Vt
      }
      bindCustomButtonKeys(tt) {
        this.customButtons.set(tt)
      }
      pressCustomButton(tt, et) {
        const Vt = this.sessionLive ? this.sendCmd() : null;
        return null !== Vt && RO(Vt, tt, et)
      }
      padMove(tt, et, Vt, Ot, qt, Dt) {
        const mt = this.liveCmd();
        return null !== mt && (0, ft.mf)(mt, 0, tt, et, Vt, Ot, qt, Dt)
      }
      thirdPersonFor(tt) {
        const et = this.liveCmd();
        return null !== et && (0, ft.vg)(et, 0, null !== tt && void 0 !== tt ? tt : 1 / 0)
      }
      send(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Ot = 0 !== this.openSocket || this.sessionLive ? this.sendCmd() : null;
        return null !== Ot && Be(Ot, Vt ? lt.zd : 0, tt, (0, kt.g)(et))
      }
      socketAttached(tt) {
        this.openSocket = tt, this.socketLeftSinceAttach = !1
      }
      socketDetached(tt) {
        this.openSocket === tt && (this.openSocket = 0)
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
      attach(tt) {
        const et = () => tt.isStopped;
        this.stopped = et, this.cmd = tt.rings.cmd, this.promptWatchSent = "off", this.writePromptWatch(), this.customButtons.attached(), this.writeCustomButtons();
        const Vt = this.api.apiView;
        this.overflowGen = ft.x.eventOverflowGen(Vt, 0), this.resyncOwed = 0 !== ft.x.eventOverflowMask(Vt, 0), tt.setGameHost(this), tt.setEventWalker((tt => {
          this.api.walk(tt, this, et)
        }))
      }
      watchPromptPick(tt) {
        this.promptWatch = tt, this.writePromptWatch()
      }
      get promptEntity() {
        return "off" === this.promptWatch || this.stopped() ? null : GO(ft.x.promptEntity(this.api.apiView, 0))
      }
      get interactLabel() {
        return "touch" !== this.promptWatch || this.stopped() ? ft.vc.None : ft.x.interactLabel(this.api.apiView, 0)
      }
      get interactIcon() {
        return "touch" !== this.promptWatch || this.stopped() ? 0 : ft.x.interactIcon(this.api.apiView, 0)
      }
      closeGame() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        (0 === tt || tt >= this.openSocket) && (this.openSocket = 0), this.closedThrough = Math.max(this.closedThrough, tt, this.activeConn), this.activeConn = 0, this.endSession(), this.endGameGrants(), this.dropGameCamera()
      }
      gameCamera(tt) {
        0 !== this.activeConn && this.scriptedCamera.settingsChanged(tt)
      }
      netEvent(tt) {
        "connection" === tt.type ? tt.phase === lt.H.Activated && tt.conn !== this.activeConn && tt.conn > this.closedThrough ? (this.endSession(), this.activeConn = tt.conn, this.endGameGrants(), this.dropGameCamera()) : tt.phase !== lt.H.Left && tt.phase !== lt.H.Closed || tt.conn !== this.activeConn ? tt.phase === lt.H.Resumed && 0 !== this.activeConn && tt.conn > this.closedThrough && (this.activeConn = tt.conn) : this.closeGame() : tt.conn === this.activeConn && 0 !== tt.conn && (tt.kX === MO.s ? this.gunHit(tt.payload) : tt.kX === pV.gc.EditItemCraftingRecipes || tt.kX === MO.Q ? this.items.touch() : (this.serverOptions(tt), this.gameMessage(tt)));
        const et = this.options.onNetEvent;
        et && this.guard((() => {
          et(tt)
        }))
      }
      serverOptions(tt) {
        const et = this.options.serverOptions,
          Vt = et ? this.decoded(xV, tt) : null;
        et && Vt && this.guard((() => {
          et.applyNewClientOptions(Vt)
        }))
      }
      gameMessage(tt) {
        let et = null;
        try {
          et = function(tt) {
            if ("message" !== tt.type || tt.kX !== pV.gc.GameCodeMessage || tt.payloadKind !== lt.wc.Msgpack) return null;
            const et = (0, kt.c)(tt.payload);
            if (null === et || "object" !== typeof et || "string" !== typeof et.messageType) throw new Error("GameCodeMessage without a messageType");
            return et
          }(tt)
        } catch (Vt) {
          this.sessionLive && this.onError(Vt)
        }
        if (et) {
          const {
            messageType: tt,
            data: Vt
          } = et;
          if ((0, ct.f)(tt)) return void this.guard((() => {
            (0, ct.b)(tt, Vt)
          }));
          "freeCamPerms" === tt && this.freeCam.setGame(Vt) && this.writeFreeCam(), this.sessionLive && this.round(this.receivers, (et => {
            et.onReceivedMessageFromServer(tt, Vt)
          }))
        }
      }
      decoded(tt, et) {
        try {
          return tt(et)
        } catch (Vt) {
          return this.onError(Vt), null
        }
      }
      setClientFreeCameraGrant(tt, et) {
        this.freeCam.setClient(tt, et), this.writeFreeCam()
      }
      freeCameraAllowed() {
        return 0 !== this.freeCam.perms()
      }
      setFreeCameraMovesFly(tt) {
        this.freeCam.setMovesFly(tt), this.writeFreeCam()
      }
      setBlockHighlight(tt) {
        this.highlight = tt, this.highlightOwed = !0, this.writeOwedHighlight()
      }
      writeOwedHighlight() {
        const tt = this.liveCmd();
        if (null === tt || !this.highlightOwed) return;
        const et = this.highlight;
        this.highlightOwed = null === et ? !(0, ft.Ye)(tt, 0, LO, LO, 0) : !(0, ft.Ye)(tt, 0, et.pos, et.normal, 1)
      }
      localPlayerBound(tt) {
        var et, Vt;
        if (0 === this.activeConn || this.sessionLive && tt === this.boundId) return;
        const Ot = this.sessionLive;
        let qt, Dt, mt, dt;
        this.endSession(), Ot && this.restartGameCamera();
        try {
          var jt;
          this.session = null;
          const tt = this.options.sessionInfo(this.activeConn);
          if (this.session = tt, !tt) return;
          qt = tt.gameNameWithVariation, Dt = null !== (jt = (0, Wt.Wb)(qt)) && void 0 !== jt ? jt : void 0, mt = (0, St.u)(tt.lobbyName), dt = (0, St.P)(tt.lobbyName)
        } catch (Mt) {
          return void this.onError(Mt)
        }
        const Ht = {
          localPlayerId: String(tt)
        };
        let Xt = {},
          Qt = {};
        try {
          var lt, Et;
          Xt = null !== (lt = null === (Et = this.options.gameFactory((0, Wt.bc)(qt))) || void 0 === Et ? void 0 : Et(dt, mt, Dt, Ht)) && void 0 !== lt ? lt : {}
        } catch (Mt) {
          this.iE(Mt)
        }
        try {
          var ft, wt;
          Qt = {
            ...null === (ft = (wt = this.options).defaultPlugins) || void 0 === ft ? void 0 : ft.call(wt, dt, mt, Dt, Ht),
            ...Xt.plugins
          }
        } catch (Mt) {
          this.iE(Mt)
        }
        const yt = [Xt, ...Object.values(Qt)];
        this.owners = yt, this.tickers = yt.filter((tt => void 0 !== tt.BQ)), this.renderers = yt.filter((tt => void 0 !== tt.onAfterRender)), this.receivers = yt.filter((tt => void 0 !== tt.onReceivedMessageFromServer)), this.writeAltVeto(yt), this.writeHooks(yt), this.writePublicLobby(dt), this.writeLocalDbId(null !== (et = null === (Vt = this.session) || void 0 === Vt ? void 0 : Vt.playerDbId) && void 0 !== et ? et : null), this.boundId = tt, this.sessionLive = !0, this.generation++, null !== this.pendingZoom && this.setCameraZoom(this.pendingZoom), this.highlightOwed ||= null !== this.highlight, this.writeOwedHighlight(), this.round(yt, (tt => {
          var et;
          null === (et = tt.onCreate) || void 0 === et || et.call(tt, this.clientApi)
        }));
        const Nt = this.generation;
        setTimeout((() => {
          Nt === this.generation && !0 === this.tables.getClientOption("creative") && lO(this.tables)
        }), 0)
      }
      chunkSlot(tt, et, Vt, Ot, qt, Dt) {
        this.chunks.apply(tt, et, Vt, Ot, qt, Dt)
      }
      entityAdded(tt) {
        var et;
        this.entityInfo.stale(tt), null === (et = this.options.replayEntities) || void 0 === et || et.entityAdded(tt)
      }
      entityInfoChanged(tt) {
        var et;
        this.entityInfo.stale(tt), null === (et = this.options.replayEntities) || void 0 === et || et.entityInfoChanged(tt)
      }
      afterPrescan() {
        this.items.refresh(), this.entityInfo.refresh(), this.api.rereadDirectory(), this.chunks.refresh(), this.live.refresh()
      }
      tickEnd() {
        if (this.ticks++, this.tickers.length > 0) {
          const tt = performance.now();
          this.round(this.tickers, zO), (0, qO.c)(performance.now() - tt)
        }
      }
      afterWalk(tt) {
        this.ackEventOverflow(), this.clientApi.flushOwed(), this.writeOwedHighlight();
        const et = this.options.replayEntities;
        et && this.guard((() => {
          this.entityInfoWatch.want(iV, et.wantsWatch), et.flush(this.entityInfoWatch.on)
        }));
        const Vt = this.api.apiView,
          Ot = ft.x.frameMs(Vt, 0);
        bO.o.frame(Ot, ft.x.heading(Vt, 0), ft.x.pitch(Vt, 0), bO.j[tt]);
        const qt = (0, qO.i)(tt, Ot);
        if (null !== qt) {
          const tt = this.renderFrame;
          this.guard((() => {
            (0, gV.d)().turnDamageIndicators(tt.cameraHeading)
          })), this.guard((() => {
            this.clientApi.slideRoute(qt)
          })), this.round(this.renderers, (et => {
            et.onAfterRender(qt, tt)
          }))
        }
        this.writeFreeCam();
        try {
          this.scriptedCamera.afterFrame(null !== qt)
        } catch (mt) {
          this.iE(mt)
        }
        this.showZoom(), this.items.flush(this.iE), this.writePromptWatch(), this.writeCustomButtons();
        const Dt = this.ticks;
        this.ticks = 0, (0, qO.h)(Dt, tt, qt, this.iE)
      }
      entityRemoved(tt) {
        this.live.despawned(tt), this.entityInfo.removed(tt)
      }
      ackEventOverflow() {
        const tt = this.api.apiView,
          et = ft.x.eventOverflowGen(tt, 0),
          Vt = et - this.overflowGen >>> 0;
        if (0 === Vt && !this.resyncOwed) return;
        this.overflowGen = et;
        const Ot = ft.x.eventOverflowMask(tt, 0),
          qt = this.cmd;
        0 === Ot || null === qt || this.stopped() ? this.resyncOwed = !1 : this.resyncOwed = !(0, ft.Ke)(qt, 0, Ot);
        const Dt = this.options.onEventOverflow;
        0 !== Vt && Dt && this.guard((() => {
          Dt(Ot, Vt)
        }))
      }
      gameCall(tt, et, Vt, Ot, qt, Dt, mt, dt, jt) {
        if (tt === ft.hc.Director) try {
          return this.scriptedCamera.call(et, Vt, Ot, qt, Dt, mt)
        } catch (Ht) {
          return this.iE(Ht), ft.rb.None
        }
        if (!this.sessionLive || void 0 !== this.fault) return tt === ft.hc.AltVeto ? ft.l.Allow : 0;
        try {
          return this.callGames(tt, et, Vt, Ot, qt, Dt, mt, dt)
        } catch (Ht) {
          throw (0, Et.h)(Ht) && (this.fault = Ht), Ht
        }
      }
      takeFault() {
        const tt = this.fault;
        return this.fault = void 0, tt
      }
      callGames(tt, et, Vt, Ot, qt, Dt, mt, dt) {
        this.api.rereadDirectory(), this.chunks.touch(), this.items.refresh(), this.live.refresh(), this.entityInfo.inCoreCall();
        const {
          tables: jt
        } = this.options, Ht = String(this.boundId);
        switch (tt) {
          case ft.hc.AltVeto:
          case ft.hc.AltAction: {
            const dt = 0 !== mt,
              [Xt, Qt, lt] = dt ? [et, Vt, Ot] : [void 0, void 0, void 0],
              Et = dt ? jt.nameOfId(qt) : "Air",
              wt = GO(Dt);
            if (tt === ft.hc.AltAction) return this.first((tt => {
              var et;
              return null === (et = tt.onPlayerAltAction) || void 0 === et ? void 0 : et.call(tt, Ht, Xt, Qt, lt, Et, wt)
            })), 0;
            const yt = this.first((tt => {
              var et;
              return null === (et = tt.onPlayerAttemptAltAction) || void 0 === et ? void 0 : et.call(tt, Ht, Xt, Qt, lt, Et, wt)
            }));
            return "preventAction" === yt ? ft.l.Prevent : "preventPlacement" === yt ? ft.l.PreventPlacement : ft.l.Allow
          }
          case ft.hc.Click: {
            const tt = dt,
              Xt = 0 !== (tt & ft.Z.Alt),
              Qt = 0 !== (tt & ft.Z.HasPos),
              lt = Qt ? jt.nameOfId(qt) : "Air",
              [Et, wt, yt] = Qt ? [et, Vt, Ot] : [null, null, null],
              Nt = GO(Dt),
              Mt = 0 !== (tt & ft.Z.Up),
              bt = GO(mt);
            if (0 === (tt & ft.Z.AttackOnly) && this.first((tt => {
                var et, Vt;
                return Mt ? null === (et = tt.onPlayerClickUp) || void 0 === et ? void 0 : et.call(tt, Ht, Xt, Et, wt, yt, lt, Nt) : null === (Vt = tt.onPlayerClick) || void 0 === Vt ? void 0 : Vt.call(tt, Ht, Xt, Et, wt, yt, lt, Nt)
              })), !Mt && !Xt && null !== bt) {
              const tt = this.clientApi.getPositionView(bt),
                et = tt ? [tt[0], tt[1], tt[2]] : [0, 0, 0];
              this.first((tt => {
                var Vt;
                return null === (Vt = tt.onPlayerAttackEntity) || void 0 === Vt ? void 0 : Vt.call(tt, Ht, bt, et)
              }))
            }
            return 0
          }
          case ft.hc.ChangeBlock: {
            const tt = jt.nameOfId(qt),
              mt = jt.nameOfId(Dt);
            return this.first((qt => {
              var Dt;
              return null === (Dt = qt.onPlayerChangeBlock) || void 0 === Dt ? void 0 : Dt.call(qt, Ht, et, Vt, Ot, tt, mt)
            })), 0
          }
          case ft.hc.DropItem: {
            const tt = jt.nameOfId(et);
            return this.first((et => {
              var qt;
              return null === (qt = et.onPlayerDropItem) || void 0 === qt ? void 0 : qt.call(et, Ht, tt, Vt, Ot)
            })), 0
          }
          default:
            return this.onError(new Error(`Unknown game call kind ${tt}`)), 0
        }
      }
      changeBlockFail(tt, et, Vt, Ot, qt, Dt, mt) {
        const dt = qt === ft.dd ? null : IO.decode(this.api.eventBytes(Dt, Math.min(qt, mt)));
        this.failures.push({
          bt: [tt, et, Vt],
          Jt: Ot,
          Ct: dt
        })
      }
      changeBlockFailEnd() {
        const tt = this.failures;
        this.failures = [], this.sessionLive && this.round(this.owners, (et => {
          var Vt;
          null === (Vt = et.onChangeBlockFail) || void 0 === Vt || Vt.call(et, tt)
        })), this.sw("EditBoard", {
          pos: null
        }), this.sw("EditCodeBlock", {
          pos: null,
          canChangePos: null
        })
      }
      inventoryEvent(tt, et, Vt, Ot, qt, Dt) {
        tt === ft.Bc.ChestOpened ? this.items.chestOpened(Vt, Ot, qt) : tt !== ft.Bc.Synced && tt !== ft.Bc.ChestClosed && tt !== ft.Bc.ChestRefreshed || this.items.touch(), this.guard((() => {
          ! function(tt, et, Vt, Ot) {
            switch (tt) {
              case ft.Bc.Synced:
                mt.j.sw("syncedInvenFromServer");
                break;
              case ft.Bc.ChestOpened:
              case ft.Bc.ChestClosed:
                mt.j.sw("chestToggleFromServer", tt === ft.Bc.ChestOpened, !0);
                break;
              case ft.Bc.ChestRefreshed:
                mt.j.sw("chestRefreshedFromServer");
                break;
              case ft.Bc.EnchantingTable:
                mt.j.sw("enchantingTable", {
                  qd: Ot,
                  position: Vt
                });
                break;
              case ft.Bc.HotbarRequest:
                mt.j.sw("setSelectedInventorySlotI", et, !0);
                break;
              case ft.Bc.Scrolled:
                mt.j.sw("ScrollInventorySlot", et);
                break;
              case ft.Bc.NumberKey:
                mt.j.sw("numkeyPressed", et + 1);
                break;
              case ft.Bc.DropRequested:
                mt.j.sw("DropInvenItem", 0 !== et);
                break;
              default:
                throw new Et.d(`InventoryEvent of no kind: what ${tt}`)
            }
          }(tt, et, [Vt, Ot, qt], Dt)
        }))
      }
      heldItemChanged() {
        this.items.touch()
      }
      shotDamage(tt, et, Vt, Ot) {
        this.sw("shotPlayer", {
          playerId: String(tt),
          damage: et,
          wasCrit: 0 !== Ot,
          distance: Vt
        })
      }
      localHurt(tt, et) {
        this.sw("closeShopOnDamaged", null), this.guard((() => {
          mt.j.sw("damagedByOtherPlayer", {
            WV: null,
            direction: Number.isNaN(et) ? null : et,
            Pt: tt
          })
        }))
      }
      attackHit(tt, et, Vt, Ot, qt) {
        this.guard((() => {
          mt.j.sw("yourAttackHit", {
            ne: Ot,
            screenPos: this.renderFrame.projectDirectionToScreenPos([tt, et, Vt]),
            hitSelf: qt
          })
        }))
      }
      physicsType(tt) {
        this.sw("PlayerPhysicsTypeUpdate", tt)
      }
      vehicleEffect(tt, et, Vt, Ot, qt) {
        this.guard((() => {
          tt === lt.Pd.UPDATE ? (0, It.g)(et, {
            icon: Vt,
            level: Ot,
            displayName: null,
            durationMs: qt
          }) : Rt.d.remove(et)
        }))
      }
      zoomChanged(tt) {
        this.zoom = tt, this.zoomUnshown = !0
      }
      zoomDisabled() {
        this.sw("showBottomMessage", {
          message: "Zoom is disabled",
          timeoutLength: 2e3,
          type: "Error"
        })
      }
      showZoom() {
        const tt = this.scriptedCamera.holdsView();
        !this.zoomUnshown || tt && this.zoomHeld || (this.zoomUnshown = !1, this.sw("cameraZoomSet", this.zoom)), this.zoomHeld = tt
      }
      gunHit(tt) {
        this.guard((() => {
          const {
            WV: et,
            SV: Vt
          } = (0, aO.c)(MO.s, tt);
          mt.j.sw("damagedByOtherPlayer", {
            WV: et,
            direction: Vt
          })
        }))
      }
      uiEvent(tt, et, Vt, Ot, qt, Dt, mt, dt) {
        this.guard((() => {
          sV(tt, et, [Vt, Ot, qt], Dt, this.items, this.options.tables, (() => IO.decode(this.api.eventBytes(mt, dt))))
        }))
      }
      writeAltVeto(tt) {
        const et = this.cmd;
        if (!et) return;
        let Vt;
        try {
          Vt = function(tt, et) {
            const Vt = new Set;
            let Ot = !1;
            for (const qt of tt)
              if (qt.onPlayerAttemptAltAction) {
                if (Ot = !0, !qt.altVetoBlocks) return {
                  mode: ft.se.All,
                  roots: []
                };
                for (const tt of qt.altVetoBlocks) Vt.add(et.getMetaInfo(tt).rootId)
              } return Ot ? Vt.size > ft.Uc ? {
              mode: ft.se.All,
              roots: []
            } : {
              mode: ft.se.Filter,
              roots: [...Vt]
            } : {
              mode: ft.se.Off,
              roots: []
            }
          }(tt, this.options.tables)
        } catch (qt) {
          this.onError(qt), Vt = {
            mode: ft.se.All,
            roots: []
          }
        }
        if (Vt.mode === ft.se.Off && !this.vetoSet) return;
        const Ot = new Uint8Array(new Uint32Array(Vt.roots).buffer);
        (0, ft.Qf)(et, 0, Vt.mode, Vt.roots.length, Ot) ? this.vetoSet = Vt.mode !== ft.se.Off: this.onError(new Error("SetAltVeto didn't fit the command ring"))
      }
      endGameGrants() {
        this.freeCam.clearGame(), this.writeFreeCam()
      }
      writeFreeCam() {
        this.stopped() || this.freeCam.write(this.cmd)
      }
      writeHooks(tt) {
        const et = this.cmd;
        if (!et) return;
        const Vt = function(tt) {
          let et = 0;
          for (const Vt of tt) Vt.onPlayerAltAction && (et |= 1 << ft.hc.AltAction), (Vt.onPlayerClick || Vt.onPlayerClickUp || Vt.onPlayerAttackEntity) && (et |= 1 << ft.hc.Click), Vt.onPlayerChangeBlock && (et |= 1 << ft.hc.ChangeBlock), Vt.onPlayerDropItem && (et |= 1 << ft.hc.DropItem);
          return et
        }(tt);
        (0 !== Vt || this.hooksSet) && ((0, ft.$f)(et, 0, Vt) ? this.hooksSet = 0 !== Vt : this.onError(new Error("SetHooks didn't fit the command ring")))
      }
      writeCustomButtons() {
        const tt = this.cmd;
        tt && !this.stopped() && this.customButtons.write(tt)
      }
      writePromptWatch() {
        const tt = this.cmd,
          et = this.promptWatch;
        et !== this.promptWatchSent && tt && !this.stopped() && (0, ft.Dg)(tt, 0, FO[et]) && (this.promptWatchSent = et)
      }
      writePublicLobby(tt) {
        const et = this.cmd;
        et && tt !== this.writtenPublicLobby && ((0, ft.ng)(et, 0, tt ? 1 : 0) ? this.writtenPublicLobby = tt : this.onError(new Error("SetPublicLobby didn't fit the command ring")))
      }
      writeLocalDbId(tt) {
        const et = this.cmd;
        et && ((0, ft.dg)(et, 0, null === tt ? 0 : 1, null === tt ? ZO : PO.encode(tt)) || this.onError(new Error("SetLocalDbId didn't fit the command ring")))
      }
      first(tt) {
        const et = this.generation;
        for (const Ot of this.owners) {
          if (et !== this.generation) break;
          try {
            const et = tt(Ot);
            if (void 0 !== et) return et
          } catch (Vt) {
            this.iE(Vt)
          }
        }
      }
      sw(tt, et) {
        this.guard((() => {
          mt.j.sw(tt, et)
        }))
      }
      dropGameCamera() {
        try {
          this.scriptedCamera.reset()
        } catch (tt) {
          this.iE(tt)
        }
      }
      restartGameCamera() {
        try {
          this.scriptedCamera.restart()
        } catch (tt) {
          this.iE(tt)
        }
      }
      endSession() {
        if (!this.sessionLive) return;
        this.sessionLive = !1;
        const tt = this.owners;
        let et;
        if (this.owners = this.tickers = this.renderers = this.receivers = [], this.generation++, !this.stopped()) try {
          this.writeAltVeto([]), this.writeHooks([]), this.writePublicLobby(!1), this.writeLocalDbId(null)
        } catch (Ot) {
          et = Ot
        }
        try {
          this.entityInfo.sessionEnded()
        } catch (Ot) {
          et ??= Ot
        }
        this.round(tt, oO, !0);
        try {
          this.particles.sessionEnded() || this.onError(new Error("ParticleStopAll didn't fit the command ring"))
        } catch (Ot) {
          et ??= Ot
        }
        try {
          this.clientApi.disposeGameOutput()
        } catch (Ot) {
          et ??= Ot
        }
        const Vt = this.options.onSessionEnd;
        if (Vt) try {
          Vt()
        } catch (Ot) {
          this.onError(Ot)
        }
        void 0 !== et && this.iE(et)
      }
      round(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Ot = this.generation;
        for (const Dt of tt) {
          if (Ot !== this.generation) break;
          try {
            et(Dt)
          } catch (qt) {
            Vt ? this.onError(qt) : this.iE(qt)
          }
        }
      }
      guard(tt) {
        try {
          tt()
        } catch (et) {
          this.iE(et)
        }
      }
    }

    function GO(tt) {
      return tt === ft.gd ? null : String(tt)
    }

    function zO(tt) {
      tt.BQ(lt.Gd)
    }

    function oO(tt) {
      var et;
      null === (et = tt.onClose) || void 0 === et || et.call(tt)
    }

    function rO(tt, et) {
      tt.watch((() => {
        const Vt = function(tt) {
          const et = [],
            Vt = Math.min(DO, tt.length);
          for (let qt = 0; qt < Vt; qt++) {
            var Ot;
            const Vt = null === (Ot = tt.slot(qt)) || void 0 === Ot ? void 0 : Ot.typeObj,
              Dt = Vt ? (0, OO.gunTypeOf)(Vt.id) : void 0;
            void 0 !== Dt && et.push(be[Dt])
          }
          return et
        }(tt);
        Vt.length > 0 && (et.preload(Vt), et.preload([Je]))
      }))
    }
    var UO = Vt(36685),
      AO = Vt(5030),
      iO = Vt(36996),
      YO = Vt(37014);

    function BO(tt) {
      const et = (0, UO.countDecodesAs)(new AO.Howl({
          ...(0, iO.k)(tt),
          pool: 15,
          preload: !1
        }), "sheet"),
        Vt = et.load.bind(et);
      return et.load = () => (et._preload = !0, (0, YO.d)(tt), Vt()), et
    }

    function pO(tt, et, Vt) {
      const Ot = tt.listener;
      if (Ot.positionX) xO(Ot.positionX, et, Vt, 0), xO(Ot.positionY, et, Vt, 1), xO(Ot.positionZ, et, Vt, 2), xO(Ot.forwardX, et, Vt, 3), xO(Ot.forwardY, et, Vt, 4), xO(Ot.forwardZ, et, Vt, 5), xO(Ot.upX, et, Vt, 6), xO(Ot.upY, et, Vt, 7), xO(Ot.upZ, et, Vt, 8);
      else {
        let tt = !1;
        for (let Ot = 0; Ot < 9; Ot++) tt ||= et[Ot] !== Vt[Ot];
        tt && (Ot.setPosition(et[0], et[1], et[2]), Ot.setOrientation(et[3], et[4], et[5], et[6], et[7], et[8]), Vt.set(et))
      }
    }

    function xO(tt, et, Vt, Ot) {
      et[Ot] !== Vt[Ot] && (tt.value = et[Ot], Vt[Ot] = et[Ot])
    }
    class TO {
      constructor() {
        this.pose = new Float64Array(9), this.written = new Float64Array(9).fill(Number.NaN), this.watchedCtx = void 0
      }
      apply(tt) {
        this.pose.set(tt);
        const et = AO.Howler.ctx;
        return !!et && (et !== this.watchedCtx && (this.watchedCtx = et, this.written.fill(Number.NaN), et.addEventListener("statechange", (() => {
          "running" === et.state && pO(et, this.pose, this.written)
        }))), "running" === et.state && pO(et, tt, this.written), !0)
      }
    }
    var gO = Vt(36810),
      sO = Vt(39415);
    let nO = null,
      tq = null;

    function eq() {
      return null === nO && (nO = document.createElement("div"), nO.className = "WasmCameraLayer", nO.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;pointer-events:none", document.body.append(nO)), nO
    }

    function Vq() {
      return tq ??= new sO.e(new gO.d(eq)), tq
    }

    function Oq() {
      var tt;
      null === (tt = tq) || void 0 === tt || tt.clear(), qq(null)
    }

    function qq(tt) {
      Ot.b.get("scriptedCameraFacing") !== tt && Ot.b.set({
        scriptedCameraFacing: tt
      })
    }
    var Dq = Vt(9512),
      mq = Vt(9466),
      dq = Vt(39441),
      jq = Vt(41229),
      Hq = Vt(3346);
    const Xq = Object.entries(ft.dc).reduce(((tt, et) => {
      let [Vt, Ot] = et;
      return tt[Ot] = Vt, tt
    }), []);

    function Qq(tt, et) {
      var Vt;
      return 0 !== ((null !== (Vt = tt.itemFlags[et]) && void 0 !== Vt ? Vt : 0) & ft.Fc.Stackable)
    }
    const lq = /^(0|[1-9][0-9]*)$/,
      Eq = {
        displayName: (tt, et) => (0, OO.displayNameOf)(et),
        description: (tt, et) => (0, OO.descriptionOf)(et),
        type: (tt, et) => (0, OO.itemTypeOf)(et),
        clipSize: (tt, et) => (0, OO.clipSizeOf)(et),
        armourReduction: (tt, et) => (0, OO.armourReductionOf)(et),
        scopeType: (tt, et) => (0, OO.scopeTypeOf)(et),
        stackable: Qq,
        harvestType: (tt, et) => Xq[tt.blockHarvestTypes[et]],
        harvestLevel: (tt, et) => {
          const Vt = tt.blockHarvestLevels[et];
          return Vt === ft.Mc ? void 0 : Vt
        },
        harvests: (tt, et) => {
          var Vt;
          const Ot = null !== (Vt = tt.itemHarvests[et]) && void 0 !== Vt ? Vt : 0;
          return 0 !== Ot ? Xq[Ot] : void 0 === (0, OO.harvestsNullLevelOf)(et) ? void 0 : null
        },
        level: (tt, et) => {
          var Vt, Ot;
          const qt = null !== (Vt = tt.itemLevels[et]) && void 0 !== Vt ? Vt : ft.Mc;
          return qt !== ft.Mc ? qt : null !== (Ot = (0, OO.harvestsNullLevelOf)(et)) && void 0 !== Ot ? Ot : void 0
        }
      };

    function fq(tt, et, Vt) {
      return yq(new Uint8Array(Math.floor(tt.length / et)), tt, et, Vt)
    }

    function wq(tt, et, Vt) {
      return yq(new Uint16Array(Math.floor(tt.length / et)), tt, et, Vt)
    }

    function yq(tt, et, Vt, Ot) {
      const qt = new DataView(et.buffer, et.byteOffset, et.byteLength);
      for (let Dt = 0; Dt < tt.length; Dt++) tt[Dt] = Ot(qt, Dt * Vt);
      return tt
    }
    class Nq {
      constructor(tt, et) {
        this.options = et, this.metas = [], this.types = new Map, this.props = void 0, this.rootIdOf = tt => {
          const et = this.idOf(tt);
          if (void 0 === et) throw new Error(`No item is named ${tt}, an item's root`);
          return et
        };
        const Vt = et => {
            const Vt = et();
            return new Uint8Array(tt.memory().buffer, tt.scratch(), Vt).slice()
          },
          Ot = (new TextDecoder).decode(Vt((() => tt.queries.itemNames()))).split("\n"),
          qt = Vt((() => tt.queries.blockProps())),
          Dt = Vt((() => tt.queries.itemProps()));
        this.props = {
          blockFlags: fq(qt, ft.G.BYTES, ft.G.flags),
          blockHarvestTypes: fq(qt, ft.G.BYTES, ft.G.harvestType),
          blockHarvestLevels: fq(qt, ft.G.BYTES, ft.G.harvestLevel),
          blockAttachedTops: wq(qt, ft.G.BYTES, ft.G.attachedTop),
          itemFlags: fq(Dt, ft.Ic.BYTES, ft.Ic.flags),
          itemHarvests: fq(Dt, ft.Ic.BYTES, ft.Ic.harvests),
          itemLevels: fq(Dt, ft.Ic.BYTES, ft.Ic.level)
        }, (0, Hq.j)(Object.freeze(Ot)), (0, jq.d)()
      }
      idOf(tt) {
        if ("number" === typeof tt) return void 0 === (0, Hq.e)(tt) ? void 0 : tt;
        const et = (0, Hq.b)(tt);
        return void 0 === et && lq.test(tt) ? void 0 === (0, Hq.e)(+tt) ? void 0 : +tt : et
      }
      getMetaInfo(tt) {
        if (!tt || tt === Dq.c) return Dq.e;
        const et = this.idOf(tt);
        if (void 0 === et) throw new Error(`Item ${tt} not found in registry`);
        return this.metaOf(et)
      }
      blockRootId(tt) {
        return 0 !== tt && void 0 !== (0, Hq.e)(tt) ? this.metaOf(tt).rootId : tt
      }
      metaOf(tt) {
        return this.metas[tt] ??= (0, mq.g)((0, Hq.e)(tt), tt, this.rootIdOf, (0, OO.rootMetaDescOf)(tt))
      }
      getItemId(tt) {
        if (!tt || tt === Dq.c) return 0;
        const et = this.idOf(tt);
        if (void 0 === et) throw new Error(`Invalid block name. You sent ${tt}. The only valid item names are 'Air' and those contained within the blockMetadata/itemMetadata files`);
        return et
      }
      getItemName(tt) {
        if (!tt || tt === Dq.c) return Dq.c;
        const et = this.idOf(tt);
        if (void 0 === et) throw new Error(`Item ${tt} not found in registry`);
        return (0, Hq.e)(et)
      }
      blockNameToBlockId(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (tt === Dq.c) return 0;
        let Vt = this.idOf(tt);
        if (void 0 === Vt || !this.isBlockId(Vt)) {
          const et = tt.indexOf("|"),
            Ot = et > 0 ? (0, Hq.b)(tt.slice(0, et)) : void 0;
          Vt = void 0 !== Ot && this.isBlockId(Ot) && (0, OO.rootMetaDescOf)(Ot) === tt ? Ot : void 0
        }
        if (void 0 !== Vt) return Vt;
        if (!et) throw new Error(`Invalid block name. You sent ${tt}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`);
        return null
      }
      isBlockId(tt) {
        return tt > 0 && tt < this.props.blockFlags.length
      }
      nameOfId(tt) {
        return 0 !== tt && (0, Hq.e)(tt) || Dq.c
      }
      itemType(tt) {
        const et = tt ? this.idOf(tt) : void 0;
        if (!et) return null;
        let Vt = this.types.get(et);
        return void 0 === Vt && (Vt = Object.freeze({
          id: et,
          name: (0, Hq.e)(et),
          meta: this.getMetaInfo(et),
          stackable: Qq(this.props, et),
          type: (0, OO.itemTypeNameOf)(et),
          clipSize: (0, OO.clipSizeOf)(et),
          scopeType: (0, OO.scopeTypeOf)(et),
          showsAimingUi: (0, OO.showsAimingUi)(et)
        }), this.types.set(et, Vt)), Vt
      }
      getItemStat(tt, et) {
        if (dq.e.has(et)) {
          const Vt = "minChargeStateToUse" === et ? this.getMetaInfo(tt).rootName : this.getItemName(tt),
            Ot = this.options.get((0, dq.h)(Vt, et));
          if (null !== Ot && void 0 !== Ot) return Ot
        }
        return this.defaultStat(tt, et, this.statOf(et))
      }
      getDisplayName(tt) {
        return this.getItemStat(tt, "displayName")
      }
      getDefaultItemStat(tt, et) {
        return this.defaultStat(tt, et, this.statOf(et))
      }
      statOf(tt) {
        const et = Eq[tt];
        return void 0 === et && function(tt, et) {
          throw new Error(`ClientApi.${tt} is not available yet in the wasm client (${et})`)
        }(`getItemStat("${tt}")`, `a table of the stat: the wasm client answers ${Object.keys(Eq).join(", ")}`), et
      }
      defaultStat(tt, et, Vt) {
        const Ot = this.idOf(tt),
          qt = void 0 === Ot ? void 0 : Vt(this.props, Ot);
        return null !== qt && void 0 !== qt || "displayName" !== et ? qt : this.getItemName(tt)
      }
      getClientOption(tt) {
        return this.options.get(tt)
      }
      getGunStats(tt) {
        return this.getClientOption(`${tt}GunStats`)
      }
      watchClientOption(tt, et) {
        return this.options.subscribe(tt, et)
      }
      isSolidBlockId(tt) {
        var et;
        return 0 !== ((null !== (et = this.props.blockFlags[tt]) && void 0 !== et ? et : 0) & ft.D.Solid)
      }
      isStackableId(tt) {
        return Qq(this.props, tt)
      }
      isFluidBlockId(tt) {
        var et;
        return 0 !== ((null !== (et = this.props.blockFlags[tt]) && void 0 !== et ? et : 0) & ft.D.Fluid)
      }
      canPlaceOverBlockId(tt) {
        var et;
        return 0 !== ((null !== (et = this.props.blockFlags[tt]) && void 0 !== et ? et : 0) & ft.D.PlaceOver)
      }
      attachedTopOf(tt) {
        var et;
        return null !== (et = this.props.blockAttachedTops[tt]) && void 0 !== et ? et : 0
      }
      isDroplessBlockId(tt) {
        return (0, OO.dropsNothing)(tt)
      }
    }

    function aq(tt, et) {
      const Vt = new Map;
      return (Ot, qt) => {
        const Dt = et.idOf(Ot),
          mt = void 0 === Dt ? null : (Ot => {
            let qt = Vt.get(Ot);
            if (void 0 === qt) {
              const Dt = tt.queries.salvageRecipe(Ot),
                mt = new DataView(tt.memory().buffer, tt.scratch(), Dt),
                dt = [];
              for (let tt = 0; tt + ft.ge.BYTES <= Dt; tt += ft.ge.BYTES) dt.push(Object.freeze({
                item: et.nameOfId(ft.ge.item(mt, tt)),
                amt: ft.ge.amount(mt, tt)
              }));
              qt = 0 === dt.length ? null : Object.freeze(dt), Vt.set(Ot, qt)
            }
            return qt
          })(Dt);
        if (null === mt || void 0 === qt) return mt;
        const dt = qt <= 0 ? 1 : qt;
        return mt.map((tt => {
          let {
            item: et,
            amt: Vt
          } = tt;
          return {
            item: et,
            amt: Vt * dt
          }
        }))
      }
    }
    var Mq = Vt(40952),
      bq = Vt(37194),
      Jq = Vt(37176),
      Cq = Vt(37182),
      uq = Vt(36745),
      Kq = Vt(40880),
      hq = Vt(42829);
    const vq = -1,
      Wq = new Uint8Array(0),
      Sq = new TextEncoder;

    function cq(tt) {
      if (null === tt) return null;
      const et = Sq.encode(tt);
      return et.byteLength < lt.Uc ? et : et.subarray(0, lt.Uc - 1)
    }
    class Rq {
      constructor(tt) {
        this.deps = tt, this.lastView = null, this.lastKeyframes = [], this.keyframesVersion = vq, this.keyframesSettled = !1, this.reloadFrom = vq
      }
      reloadKeyframes() {
        var tt, et;
        this.keyframesVersion = vq, this.reloadFrom = null !== (tt = null === (et = this.view()) || void 0 === et ? void 0 : et.version) && void 0 !== tt ? tt : vq
      }
      setPlayback(tt) {
        const et = 1 === this.deps.core.DDt(tt);
        return et && (this.lastView = null, this.lastKeyframes = [], this.keyframesVersion = vq, this.reloadFrom = vq), et
      }
      async open(tt, et) {
        const Vt = await this.deps.replay.open(tt, et);
        return "opening" === Vt && (this.reloadKeyframes(), this.deps.recorder.prefetch()), Vt
      }
      play() {
        this.deps.replay.play()
      }
      pause() {
        this.deps.replay.pause()
      }
      seek(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.deps.replay.seek(Math.max(0, Math.floor(tt)), et)
      }
      setSpeed(tt) {
        this.deps.replay.setSpeed(tt)
      }
      setCameraMode(tt) {
        this.deps.replay.setCameraMode(hq.b.indexOf(tt))
      }
      view() {
        var tt;
        const et = ft.x.replayViewPtr(this.deps.apiView(), 0);
        if (0 === et) return this.lastView = null, null;
        const Vt = new DataView(this.deps.buffer(), et, ft.Zd.BYTES),
          Ot = ft.Zd.version(Vt, 0),
          qt = this.lastView;
        if (null !== qt && qt.version === Ot) return qt;
        const Dt = ft.Zd.markIn(Vt, 0),
          mt = {
            version: Ot,
            state: ft.Zd.state(Vt, 0),
            cameraMode: null !== (tt = hq.b[ft.Zd.cameraMode(Vt, 0)]) && void 0 !== tt ? tt : "recording",
            BQ: ft.Zd.BQ(Vt, 0),
            totalTicks: ft.Zd.totalTicks(Vt, 0),
            speed: ft.Zd.speed(Vt, 0),
            mark: Dt === ft.Vd ? null : {
              inTick: Dt,
              outTick: ft.Zd.markOut(Vt, 0)
            },
            editVersion: ft.Zd.editVersion(Vt, 0)
          };
        return this.lastView = mt, mt
      }
      keyframes() {
        const tt = this.view();
        if (null === tt) return [];
        tt.version !== this.reloadFrom && (this.reloadFrom = vq);
        const et = this.reloadFrom === vq && tt.state !== lt.wd.Cropping && tt.state !== lt.wd.None,
          Vt = et ? tt.editVersion : tt.version;
        if (Vt === this.keyframesVersion && et === this.keyframesSettled) return this.lastKeyframes;
        const {
          core: Ot
        } = this.deps, qt = Ot.mDt(), Dt = Ot.ky(), mt = [];
        if (0 !== Dt && qt > 0) {
          const tt = new DataView(this.deps.buffer(), Dt, qt * lt.Fc);
          for (let et = 0; et < qt; et++) {
            const Vt = et * lt.Fc,
              Ot = et => tt.getFloat64(Vt + et, !0);
            mt.push({
              BQ: tt.getUint32(Vt + lt.Qc, !0),
              position: [Ot(lt.Mc), Ot(lt.Mc + 8), Ot(lt.Mc + 16)],
              direction: [Ot(lt.Gc), Ot(lt.Gc + 8), Ot(lt.Gc + 16)],
              easing: [Ot(lt.Ic), Ot(lt.Ic + 8), Ot(lt.Ic + 16), Ot(lt.Ic + 24)]
            })
          }
        }
        return this.keyframesVersion = Vt, this.keyframesSettled = et, this.lastKeyframes = mt, mt
      }
      addKeyframe() {
        const tt = this.deps.apiView(),
          et = [ft.x.eye(tt, 0, 0), ft.x.eye(tt, 0, 1), ft.x.eye(tt, 0, 2)];
        return this.deps.replay.addKeyframe(et, function(tt, et) {
          const Vt = Math.cos(et);
          return [Vt * Math.sin(tt), -Math.sin(et), Vt * Math.cos(tt)]
        }(ft.x.heading(tt, 0), ft.x.pitch(tt, 0)))
      }
      setKeyframe(tt) {
        return this.deps.replay.setKeyframe(tt.BQ, Float64Array.from([...tt.position, ...tt.direction, ...tt.easing]))
      }
      moveKeyframe(tt, et) {
        return this.deps.replay.moveKeyframe(tt, et)
      }
      deleteKeyframes(tt, et) {
        return this.deps.replay.deleteKeyframes(tt, et)
      }
      setMark(tt) {
        var et, Vt;
        return this.deps.replay.setMark(null !== (et = null === tt || void 0 === tt ? void 0 : tt.inTick) && void 0 !== et ? et : -1, null !== (Vt = null === tt || void 0 === tt ? void 0 : tt.outTick) && void 0 !== Vt ? Vt : -1)
      }
      crop(tt, et) {
        const Vt = this.deps.replay.crop(tt, et);
        return Vt && this.reloadKeyframes(), Vt
      }
      save(tt) {
        return this.deps.replay.askSave(), this.deps.recorder.saveEdited(tt)
      }
      recorderControl(tt) {
        this.deps.recorder.control(tt)
      }
      recorderPrefs(tt, et) {
        this.deps.recorder.prefs(tt, et)
      }
      recorderOption(tt, et) {
        const Vt = this.deps.cmd();
        return null !== Vt && (0, ft.Hf)(Vt, 0, tt, null === et ? Wq : Sq.encode(et))
      }
      recordFlyingText(tt, et, Vt, Ot) {
        const qt = this.deps.cmd(),
          Dt = Math.max(0, Math.min(4294967295, Math.round(Ot)));
        return null !== qt && (0, ft.Ef)(qt, 0, et, Vt, Dt, Sq.encode(tt))
      }
      recordPlayerKilled(tt, et, Vt, Ot) {
        const qt = this.deps.cmd();
        return null !== qt && (0, ft.If)(qt, 0, tt, et, Math.max(0, Vt), Sq.encode(Ot))
      }
      recordKillfeed(tt, et, Vt) {
        var Ot, qt;
        const Dt = this.deps.cmd(),
          mt = function(tt) {
            const et = tt.reduce(((tt, et) => {
                var Vt;
                return tt + pV.sb + (null !== (Vt = null === et || void 0 === et ? void 0 : et.byteLength) && void 0 !== Vt ? Vt : 0)
              }), 0),
              Vt = new Uint8Array(et),
              Ot = new DataView(Vt.buffer);
            let qt = 0;
            for (const mt of tt) {
              var Dt;
              Ot.setUint16(qt, null !== (Dt = null === mt || void 0 === mt ? void 0 : mt.byteLength) && void 0 !== Dt ? Dt : lt.Uc, !0), qt += pV.sb, null !== mt && (Vt.set(mt, qt), qt += mt.byteLength)
            }
            return Vt
          }([cq(tt.name), cq(tt.colour), cq(et.name), cq(et.colour), cq(Vt)]);
        return null !== Dt && (0, ft.Gf)(Dt, 0, null !== (Ot = tt.id) && void 0 !== Ot ? Ot : ft.hd, null !== (qt = et.id) && void 0 !== qt ? qt : ft.hd, mt)
      }
      recorderSession(tt, et) {
        this.deps.recorder.session({
          session: et,
          lobbyType: tt.lobbyType,
          game: tt.gameNameWithVariation,
          lobby: tt.lobbyName
        })
      }
      recorderClose() {
        this.deps.core.dDt()
      }
      filePartDone(tt, et) {
        this.deps.recorder.filePartDone(tt, et)
      }
      fileDone(tt) {
        this.deps.recorder.fileDone(tt)
      }
    }
    const Iq = -2147483648;
    class Pq {
      constructor(tt) {
        var et;
        this.deps = tt, this.state = {
          recording: !1,
          clipping: !1,
          hasClipBuffer: !1,
          seconds: 0
        }, this.recordingSince = null, this.clipTickPending = !1, this.now = void 0, this.now = null !== (et = tt.now) && void 0 !== et ? et : () => performance.now()
      }
      get current() {
        return this.state
      }
      get live() {
        var tt, et, Vt;
        return null === (tt = null === (et = (Vt = this.deps).live) || void 0 === et ? void 0 : et.call(Vt)) || void 0 === tt || tt
      }
      activated(tt) {
        var et, Vt;
        this.live && (this.viewerShown(!0 === (null === (et = (Vt = this.deps).viewerOpen) || void 0 === et ? void 0 : et.call(Vt))), this.deps.client.recorderSession(tt, (0, hq.c)()))
      }
      closed() {
        this.deps.client.recorderClose()
      }
      toggleRecording() {
        var tt, et;
        this.live && (this.state.recording || !0 !== (null === (tt = (et = this.deps).viewerOpen) || void 0 === tt ? void 0 : tt.call(et))) ? this.deps.client.recorderControl(lt.fd.ToggleRecording) : this.deps.notify(Cq.d.closeViewerFirst)
      }
      saveClip() {
        this.live ? this.deps.client.recorderControl(lt.fd.SaveClip) : this.deps.notify(Cq.d.clippingNotOn)
      }
      viewerShown(tt) {
        this.live && this.deps.client.recorderControl(tt ? lt.fd.ViewerOpened : lt.fd.ViewerClosed)
      }
      setPrefs(tt, et) {
        this.live && this.deps.client.recorderPrefs(tt, et)
      }
      setOption(tt, et) {
        this.live && this.deps.client.recorderOption(tt, et)
      }
      recordFlyingText(tt, et, Vt, Ot) {
        this.live && this.deps.client.recordFlyingText(tt, et, Vt, Ot)
      }
      recordPlayerKilled(tt, et, Vt, Ot) {
        this.live && this.deps.client.recordPlayerKilled(tt, et, Vt, Ot)
      }
      recordKillfeed(tt, et, Vt) {
        this.live && this.deps.client.recordKillfeed(tt, et, Vt)
      }
      BQ() {
        let tt = this.state;
        if (this.clipTickPending && (this.clipTickPending = !1, tt = {
            ...tt,
            hasClipBuffer: !0
          }), null !== this.recordingSince) {
          const et = Math.floor((this.now() - this.recordingSince) / 1e3);
          et !== tt.seconds && (tt = {
            ...tt,
            seconds: et
          })
        }
        this.set(tt)
      }
      onEvent(tt) {
        var et, Vt;
        const {
          notify: Ot
        } = this.deps, qt = Cq.d;
        switch (tt.what) {
          case lt.ed.RecordingStarted:
            this.recordingSince = this.now(), this.set({
              ...this.state,
              recording: !0,
              seconds: 0
            }), Ot(qt.recordingStarted);
            break;
          case lt.ed.RecordingStopped:
            this.stopRecording(), Ot(qt.recordingStopped), this.saveState(lt.nd.Recording, "saving");
            break;
          case lt.ed.RecordingDiscarded:
            this.stopRecording(), Ot(qt.recordingDiscarded);
            break;
          case lt.ed.RecordingTurnedOff:
            this.stopRecording(), Ot(qt.recordingTurnedOff);
            break;
          case lt.ed.LimitReached:
            Ot(qt.limitReached);
            break;
          case lt.ed.ClipSaved:
            this.saveState(lt.nd.Clip, "saving");
            break;
          case lt.ed.ClipEmpty:
            Ot(qt.clipEmpty);
            break;
          case lt.ed.ClippingNotOn:
            Ot(qt.clippingNotOn);
            break;
          case lt.ed.Disallowed:
            Ot(qt.disallowed);
            break;
          case lt.ed.ClippingOn:
            this.clipTickPending = !0, this.set({
              ...this.state,
              clipping: !0,
              hasClipBuffer: !1
            });
            break;
          case lt.ed.ClippingOff:
            this.clipTickPending = !1, this.set({
              ...this.state,
              clipping: !1,
              hasClipBuffer: !1
            });
            break;
          case lt.ed.ClipSettingsChanged:
            this.clipTickPending = this.state.clipping, this.set({
              ...this.state,
              hasClipBuffer: !1
            });
            break;
          case lt.ed.SaveBusy:
            null === (et = (Vt = this.deps).onSaveState) || void 0 === et || et.call(Vt, tt.kind, "busy"), Ot(qt.saveBusy);
            break;
          case lt.ed.CloseViewerFirst:
            Ot(qt.closeViewerFirst)
        }
      }
      fileReady(tt, et) {
        this.deps.download(et), this.saveState(tt, "done"), this.deps.notify(tt === lt.nd.Clip ? Cq.d.clipSaved : Cq.d.recordingSaved)
      }
      failed(tt) {
        this.saveState(tt, "failed"), this.deps.notify(tt === lt.nd.Clip ? Cq.d.clipFailed : Cq.d.recordingFailed)
      }
      stopRecording() {
        this.recordingSince = null, this.set({
          ...this.state,
          recording: !1,
          seconds: 0
        })
      }
      saveState(tt, et) {
        var Vt, Ot;
        null === (Vt = (Ot = this.deps).onSaveState) || void 0 === Vt || Vt.call(Ot, tt, et)
      }
      set(tt) {
        tt !== this.state && (this.state = tt, this.deps.onState(tt))
      }
    }
    const Zq = new TextDecoder;

    function Lq(tt, et, Vt, Ot) {
      const qt = [];
      for (let Dt = 0; Dt < Ot; Dt++) {
        if (et + pV.sb > Vt) return null;
        const Ot = tt.getUint16(et, !0);
        if (et += pV.sb, Ot !== lt.Uc) {
          if (et + Ot > Vt) return null;
          qt.push(Zq.decode(new Uint8Array(tt.buffer, tt.byteOffset + et, Ot))), et += Ot
        } else qt.push(null)
      }
      return et === Vt ? qt : null
    }

    function Fq(tt, et) {
      let Vt = new DataView(new ArrayBuffer(0)),
        Ot = !0;
      const qt = {
        replayFailed: (et, Vt, Ot) => {
          tt.replayFailed({
            reason: et,
            code: Vt,
            version: Ot
          })
        },
        replayOption: (et, qt, Dt, mt) => {
          const dt = function(tt, et, Vt, Ot) {
            switch (et) {
              case lt.rd.Cleared:
                return 0 === Ot ? null : void 0;
              case lt.rd.Text:
                return Zq.decode(new Uint8Array(tt.buffer, tt.byteOffset + Vt, Ot));
              case lt.rd.Int:
                return Ot === Int32Array.BYTES_PER_ELEMENT ? tt.getInt32(Vt, !0) : void 0;
              case lt.rd.Double:
                return Ot === Float64Array.BYTES_PER_ELEMENT ? tt.getFloat64(Vt, !0) : void 0;
              default:
                return
            }
          }(Vt, qt, Dt, mt);
          void 0 !== dt ? tt.replayOption({
            key: et,
            value: dt
          }) : Ot = !1
        },
        replayUiEvent: (et, qt, Dt, mt, dt, jt) => {
          const Ht = function(tt, et, Vt, Ot, qt, Dt, mt) {
            const dt = Dt + mt;
            switch (et) {
              case lt.ud.FlyingText: {
                const mt = Lq(tt, Dt, dt, 1);
                return null !== mt && null !== mt[0] ? {
                  what: et,
                  rD: Vt,
                  oD: Ot,
                  angle: qt,
                  contentJson: mt[0]
                } : null
              }
              case lt.ud.PlayerKilled: {
                const Ot = Lq(tt, Dt, dt, 3);
                return Ot ? {
                  what: et,
                  killstreak: Vt,
                  dead: Ot[0],
                  killer: Ot[1],
                  withItem: Ot[2]
                } : null
              }
              case lt.ud.Killfeed: {
                const Vt = Lq(tt, Dt, dt, 7);
                return Vt ? {
                  what: et,
                  killerId: Vt[0],
                  killerName: Vt[1],
                  killerColour: Vt[2],
                  victimId: Vt[3],
                  victimName: Vt[4],
                  victimColour: Vt[5],
                  withItem: Vt[6]
                } : null
              }
              default:
                return null
            }
          }(Vt, et, qt, Dt, mt, dt, jt);
          null !== Ht ? tt.replayUiEvent(Ht) : Ot = !1
        },
        replayFilePart: (Vt, qt, Dt, mt) => {
          const dt = et();
          Dt + mt > dt.byteLength ? Ot = !1 : tt.filePart(Vt, qt, new Uint8Array(dt, Dt, mt).slice())
        },
        replayFileReady: (et, Vt, Ot, qt) => {
          tt.fileReady({
            save: et,
            kind: Vt,
            parts: Ot,
            bytes: qt
          })
        },
        recorderEvent: (et, Vt, Ot) => {
          tt.recorderEvent({
            what: et,
            kind: Vt,
            save: Ot
          })
        },
        replayOpened: (et, Ot, qt) => {
          tt.replayOpened(Zq.decode(new Uint8Array(Vt.buffer, Vt.byteOffset + Ot, qt)))
        }
      };
      return (tt, et, Dt, mt) => !(tt < lt.db.ReplayFailed || tt > lt.db.RecorderEvent) && (Vt = et, Ot = !0, (0, ft.xe)(tt, et, Dt, mt, qt) && Ot)
    }

    function kq(tt) {
      let et = null;
      const Vt = Fq(tt, (() => {
        if (null === et) throw new Error("a recorder event read outside recorderEventReader's call");
        return et.buffer
      }));
      return (tt, Ot) => {
        et = Ot;
        try {
          ! function(tt, et) {
            const Vt = tt.slice(),
              Ot = new DataView(Vt.buffer);
            for (let qt = 0; qt < Vt.byteLength;) {
              if (qt + lt.bb > Vt.byteLength) throw new Error(`the recorder module's events end mid-head at ${qt}`);
              const tt = Ot.getUint32(qt, !0),
                Dt = 65535 & tt,
                mt = tt >>> 16,
                dt = qt + lt.bb;
              if (dt + mt > Vt.byteLength || !et(Dt, Ot, dt, mt)) throw new Error(`the recorder module wrote a malformed event ${Dt} (${mt} bytes) at ${qt}`);
              qt = dt + (0, lt.Fe)(mt)
            }
          }(tt, Vt)
        } finally {
          et = null
        }
      }
    }
    class Gq {
      constructor(tt, et) {
        this.acks = tt, this.handlers = et, this.parts = new Map
      }
      onPart(tt, et, Vt) {
        let Ot = this.parts.get(tt);
        Ot || (Ot = [], this.parts.set(tt, Ot)), Ot[et] = Vt, this.acks.filePartDone(tt, et)
      }
      onReady(tt) {
        var et;
        const Vt = null !== (et = this.parts.get(tt.save)) && void 0 !== et ? et : [];
        this.parts.delete(tt.save);
        const Ot = function(tt, et, Vt) {
          if (tt.length !== et) return null;
          let Ot = 0;
          for (let mt = 0; mt < et; mt++) {
            if (void 0 === tt[mt]) return null;
            Ot += tt[mt].byteLength
          }
          if (Ot !== Vt) return null;
          if (1 === et) return tt[0];
          const qt = new Uint8Array(Vt);
          let Dt = 0;
          for (const mt of tt) qt.set(mt, Dt), Dt += mt.byteLength;
          return qt
        }(Vt, tt.parts, tt.bytes);
        this.acks.fileDone(tt.save), null === Ot ? this.handlers.fileIncomplete(tt.save, tt.kind) : this.handlers.fileReady(tt.save, tt.kind, Ot)
      }
      onDiscarded(tt) {
        this.parts.delete(tt)
      }
    }

    function zq() {
      return Vt.e(61).then((() => Vt(60845)))
    }
    class oq {
      constructor(tt) {
        this.deps = tt, this.sink = void 0, this.recorder = void 0, this.recorderEvents = void 0, this.parts = void 0, this.viewerChunk = null, this.viewer = null;
        const {
          client: et
        } = tt;
        this.recorder = new Pq({
          client: et,
          live: () => {
            var tt;
            return !0 !== (null === (tt = this.viewer) || void 0 === tt ? void 0 : tt.inPlayback)
          },
          viewerOpen: tt.viewerOpen,
          notify: tt.notify,
          download: et => {
            var Vt;
            null === (Vt = tt.download) || void 0 === Vt || Vt.call(tt, et)
          },
          onState: tt.onRecorderState,
          onSaveState: tt.onSaveState
        }), this.parts = new Gq(et, {
          fileReady: (tt, et, Vt) => {
            var Ot;
            et === lt.nd.Edited ? null === (Ot = this.viewer) || void 0 === Ot || Ot.saveDone(Vt) : this.recorder.fileReady(et, Vt)
          },
          fileIncomplete: (tt, et) => {
            this.saveFailed(et)
          }
        });
        const Vt = {
          replayFailed: tt => {
            var et;
            null === (et = this.viewer) || void 0 === et || et.onFailed(tt)
          },
          replayOption: et => {
            var Vt;
            null === (Vt = tt.onReplayOption) || void 0 === Vt || Vt.call(tt, et)
          },
          replayUiEvent: et => {
            var Vt;
            null === (Vt = tt.onReplayUiEvent) || void 0 === Vt || Vt.call(tt, et)
          },
          filePart: (tt, et, Vt) => {
            this.parts.onPart(tt, et, Vt)
          },
          fileReady: tt => {
            this.parts.onReady(tt)
          },
          replayOpened: et => {
            var Vt;
            null === (Vt = tt.onReplayOpened) || void 0 === Vt || Vt.call(tt, et)
          },
          recorderEvent: tt => {
            var et;
            switch (tt.what) {
              case lt.ed.FileDiscarded:
                this.parts.onDiscarded(tt.save);
                break;
              case lt.ed.SaveFailed:
                this.saveFailed(tt.kind);
                break;
              case lt.ed.SaveBusy:
                if (null !== (et = this.viewer) && void 0 !== et && et.savePending) {
                  this.viewer.saveFailed(!0);
                  break
                }
                this.recorder.onEvent(tt);
                break;
              default:
                this.recorder.onEvent(tt)
            }
          }
        };
        this.sink = function(tt, et) {
          return {
            onReplayEvent: Fq(tt, et)
          }
        }(Vt, tt.buffer), this.recorderEvents = kq(Vt)
      }
      get currentViewer() {
        return this.viewer
      }
      loadViewer() {
        var tt;
        return this.viewer ? Promise.resolve(this.viewer) : (this.viewerChunk ??= (null !== (tt = this.deps.loadViewer) && void 0 !== tt ? tt : zq)().catch((tt => {
          throw this.viewerChunk = null, tt
        })), this.viewerChunk.then((tt => (this.viewer ??= new tt.ReplayViewer({
          client: this.deps.client,
          setHoldDraws: this.deps.setHoldDraws,
          meshPending: this.deps.meshPending,
          notify: this.deps.notify,
          onChange: () => {
            var tt, et;
            null === (tt = (et = this.deps).onViewerChange) || void 0 === tt || tt.call(et)
          }
        }), this.viewer))))
      }
      activated(tt) {
        this.recorder.activated(tt)
      }
      afterFrame(tt) {
        try {
          tt > 0 && this.recorder.BQ()
        } finally {
          var et;
          null === (et = this.viewer) || void 0 === et || et.afterFrame()
        }
      }
      end() {
        var tt;
        null === (tt = this.viewer) || void 0 === tt || tt.end()
      }
      saveFailed(tt) {
        var et;
        tt === lt.nd.Edited ? null === (et = this.viewer) || void 0 === et || et.saveFailed(!1) : this.recorder.failed(tt)
      }
    }
    var rq = Vt(40804),
      Uq = Vt(40824),
      Aq = Vt(4971),
      iq = Vt(41106);
    class Yq {
      constructor(tt) {
        this.deps = tt, this.analogue = [0, 0], this.keys = 0, this.unsent = !1
      }
      drag(tt, et) {
        if (!this.deps.live() || 0 === tt && 0 === et) return;
        const Vt = (0, Gt.r)(0, performance.now()),
          Ot = this.deps.dragScale();
        (0, iq.e)((() => {
          (0, Gt.w)(lt.Fb.MouseDown, 0, 0, 0, Vt), (0, Gt.w)(lt.Fb.MouseMove, 0, tt * Ot, et * Ot, 0), (0, Gt.w)(lt.Fb.MouseUp, 0, 0, 0, Vt)
        }))
      }
      move(tt) {
        var et, Vt;
        this.analogue[0] = null !== (et = null === tt || void 0 === tt ? void 0 : tt.x) && void 0 !== et ? et : 0, this.analogue[1] = null !== (Vt = null === tt || void 0 === tt ? void 0 : tt.y) && void 0 !== Vt ? Vt : 0, this.send()
      }
      holdVertical(tt, et) {
        const Vt = "freeCamUp" === tt ? ft.Wb.Up : ft.Wb.Down;
        this.keys = et ? this.keys | Vt : this.keys & ~Vt, this.send()
      }
      flush() {
        this.unsent && this.send()
      }
      send() {
        const tt = this.deps.live() ? this.deps.cmd() : null;
        this.unsent = null !== tt && !(0, ft.Pe)(tt, 0, this.analogue, this.keys)
      }
    }
    var Bq = Vt(3630),
      pq = Vt(809),
      xq = Vt(318),
      Tq = Vt(106),
      gq = Vt(34308),
      sq = Vt(797),
      nq = Vt(36844);

    function tD() {
      const tt = Ot.b.get("clientEscMenuOptions"),
        et = (0, pq.p)(tt);
      return {
        mouse: (0, Tq.isMobile)() ? et : tt.mouseSensitivity,
        touch: et,
        fovPercent: tt.cameraFOV
      }
    }

    function eD() {
      const tt = Ot.b.get("clientEscMenuOptions"),
        et = Ot.b.get("isTouchScreen") ? (0, pq.p)(tt) : tt.mouseSensitivity,
        Vt = tD().mouse;
      return Vt > 0 ? et / Vt : 1
    }

    function VD(tt) {
      const et = () => {
        tt.setSoundPrefs(Ot.b.get("soundVolume"), Ot.b.get("soundOnFromAd"))
      };
      let Vt = null;
      const qt = () => {
        const {
          showFog: et,
          enableLighting: qt,
          fogChunkDistance: Dt,
          chunkFadeIn: mt
        } = Ot.b.get("clientEscMenuOptions"), dt = {
          showFog: et,
          lighting: qt,
          fogChunks: Dt,
          chunkFade: mt,
          cellLight: (0, Bq.l)("cellLight") ? (0, Bq.l)("cellLightUnlit") ? "all" : "lit" : "off"
        };
        Vt && (0, lt.ue)(Vt) === (0, lt.ue)(dt) && Vt.fogChunks === Dt || (Vt = dt, tt.setEnvPrefs(Vt))
      };
      let Dt = null;
      const dt = () => {
        const et = function() {
          const tt = Ot.b.get("clientEscMenuOptions");
          return {
            nametagsHidden: Ot.b.get("areNametagsHidden"),
            crouchToggle: tt.crouchIsToggle,
            bhopDisabled: tt.disableBunnyHopping,
            disableBobbing: tt.disableBobbing,
            ezTowering: tt.ezTowering ? (0, xq.e)() : null,
            ezBridging: tt.ezBridging,
            showChunkBorders: tt.showChunkBorders,
            touchWalk: !(0, nq.h)(),
            edgeGuard: tt.touchEdgeGuard,
            edgeGuardLong: (0, sq.c)(),
            nametagCutDistance: (0, gq.c)()
          }
        }();
        (0, Wt.te)(Dt, et) || (Dt = et, tt.setUiPrefs(et))
      };
      let jt = null;
      const Ht = () => {
        const et = tD();
        (0, Wt.te)(jt, et) || (jt = et, tt.setLookPrefs(et))
      };
      et(), qt(), dt(), Ht();
      const Xt = [(0, mt.n)("appManagerUpdated|soundVolume", et), (0, mt.n)("appManagerUpdated|soundOnFromAd", et), (0, mt.n)("appManagerUpdated|clientEscMenuOptions", (() => {
        qt(), dt(), Ht()
      })), (0, mt.n)(nq.d, dt), (0, mt.n)("appManagerUpdated|enabledDebugFeatures", qt), (0, mt.n)("appManagerUpdated|areNametagsHidden", dt), (0, mt.n)("appManagerUpdated|showDistantNametags", dt)];
      return () => {
        for (const tt of Xt) tt()
      }
    }
    var OD = Vt(41083),
      qD = Vt(41089);
    var DD = (0, qD.b)("lend"),
      mD = (0, qD.b)("starting"),
      dD = (0, qD.b)("generation"),
      jD = (0, qD.b)("end");
    class HD {
      constructor(tt) {
        this.deps = tt, Object.defineProperty(this, jD, {
          value: XD
        }), Object.defineProperty(this, DD, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, mD, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, dD, {
          writable: !0,
          value: 0
        })
      }
      get active() {
        return null !== (0, OD.e)(this, DD)[DD] || (0, OD.e)(this, mD)[mD]
      }
      async start(tt) {
        if (this.active) return "busy";
        const et = (0, OD.e)(this, dD)[dD];
        (0, OD.e)(this, mD)[mD] = !0;
        try {
          if (!await this.deps.ensureLoaded()) return "refused"
        } finally {
          (0, OD.e)(this, mD)[mD] = !1
        }
        if (et !== (0, OD.e)(this, dD)[dD]) return "refused";
        const Vt = this.deps.beginSave();
        if (!Vt) return "refused";
        const Ot = Number(BigInt.asUintN(32, tt)),
          qt = Number(BigInt.asUintN(32, tt >> 32n));
        let Dt = "refused";
        return this.deps.recorderCall(((tt, et) => {
          const mt = Vt.editState,
            dt = tt.stage(mt.length);
          0 !== dt ? (new Uint8Array(et.buffer, dt, mt.length).set(mt), tt.jDt(Vt.headLen, Ot, qt) && (Dt = "sealing")) : Dt = "tooLarge"
        }), !0), "sealing" !== Dt ? (Vt.end(), Dt) : ((0, OD.e)(this, DD)[DD] = Vt, "sealing")
      }
      beforeRecorderStep() {
        const tt = (0, OD.e)(this, DD)[DD];
        if (!tt) return null;
        let et = -1,
          Vt = 0;
        if (!this.deps.recorderCall((tt => {
            et = tt.HDt(), et > 0 && (Vt = tt.XDt())
          }))) return (0, OD.e)(this, jD)[jD](tt, "stopped");
        if (et < 0) return (0, OD.e)(this, jD)[jD](tt, "read");
        if (0 === et) return null;
        const Ot = tt.head(Vt, et);
        let qt = !1;
        if (Ot && this.deps.recorderCall(((tt, Vt) => {
            const Dt = tt.stage(et);
            0 !== Dt && (new Uint8Array(Vt.buffer, Dt, et).set(Ot), qt = !0)
          }), !0), qt) return null;
        const Dt = tt.givenUp();
        this.deps.recorderCall((tt => {
          tt.QDt()
        }));
        const mt = (0, OD.e)(this, jD)[jD](tt, Dt ? "givenUp" : "stopped");
        return Dt && this.deps.givenUp("Reopen the replay you were editing to make your edits again, as they weren't saved when another replay opened."), mt
      }
      stop() {
        (0, OD.e)(this, dD)[dD]++;
        const tt = (0, OD.e)(this, DD)[DD];
        tt && (this.deps.recorderCall((tt => {
          tt.QDt()
        })), (0, OD.e)(this, jD)[jD](tt, "stopped"))
      }
    }

    function XD(tt, et) {
      return (0, OD.e)(this, DD)[DD] = null, tt.end(), et
    }

    function QD(tt, et) {
      const Vt = new Uint8Array(4),
        Ot = new DataView(Vt.buffer);
      return Ot.setUint8(0, tt ? 1 : 0), Ot.setUint16(2, Math.max(0, Math.min(65535, Math.round(et))), !0), Vt
    }

    function lD(tt, et) {
      return tt > function(tt) {
        return 16777216 + 314572.8 * Math.max(0, tt)
      }(et) + 33554432
    }
    let ED = null;

    function fD(tt) {
      return ED ??= async function(tt) {
        const et = tt.loadInFlight();
        et && await et.catch((() => {}));
        if (tt.trapped()) return "trapped";
        if (tt.busy() || !lD(tt.memoryBytes(), tt.clipSeconds())) return "hE";
        tt.unload();
        let Vt = !1;
        try {
          Vt = await tt.load()
        } catch {
          Vt = !1
        }
        if (!Vt) return tt.trapped() ? "trapped" : tt.df() ? "df" : "failed";
        return "recycled"
      }(tt).finally((() => {
        ED = null
      })), ED
    }
    const wD = "Replay recording couldn't load, so try again.",
      yD = new Set([lt.fd.ToggleRecording, lt.fd.SaveClip]);
    var ND = (0, qD.b)("bindings"),
      aD = (0, qD.b)("module"),
      MD = (0, qD.b)("memory"),
      bD = (0, qD.b)("trapped"),
      JD = (0, qD.b)("df"),
      CD = (0, qD.b)("recycleDue"),
      uD = (0, qD.b)("loading"),
      KD = (0, qD.b)("generation"),
      hD = (0, qD.b)("viewDrawn"),
      vD = (0, qD.b)("clip"),
      WD = (0, qD.b)("session"),
      SD = (0, qD.b)("control"),
      cD = (0, qD.b)("deferred"),
      RD = (0, qD.b)("coreU8"),
      ID = (0, qD.b)("coreU32"),
      PD = (0, qD.b)("moduleU8"),
      ZD = (0, qD.b)("edited"),
      LD = (0, qD.b)("sendSession"),
      FD = (0, qD.b)("checkNotInEvents"),
      kD = (0, qD.b)("clipping"),
      GD = (0, qD.b)("busy"),
      zD = (0, qD.b)("use"),
      oD = (0, qD.b)("ensureLoaded"),
      rD = (0, qD.b)("loadOnce"),
      UD = (0, qD.b)("recycleAfterStep"),
      AD = (0, qD.b)("settleRecycle"),
      iD = (0, qD.b)("load"),
      YD = (0, qD.b)("attach"),
      BD = (0, qD.b)("resendHeld"),
      pD = (0, qD.b)("recycle"),
      xD = (0, qD.b)("send"),
      TD = (0, qD.b)("unload"),
      gD = (0, qD.b)("dropModule"),
      sD = (0, qD.b)("coreBytes"),
      nD = (0, qD.b)("coreWords"),
      tm = (0, qD.b)("moduleBytes"),
      em = (0, qD.b)("loadFailed"),
      Vm = (0, qD.b)("call"),
      Om = (0, qD.b)("guard"),
      qm = (0, qD.b)("trapOn");
    class Dm {
      constructor(tt) {
        this.deps = tt, Object.defineProperty(this, qm, {
          value: cm
        }), Object.defineProperty(this, Om, {
          value: Sm
        }), Object.defineProperty(this, Vm, {
          value: Wm
        }), Object.defineProperty(this, em, {
          value: hm
        }), Object.defineProperty(this, tm, {
          value: Km
        }), Object.defineProperty(this, nD, {
          value: um
        }), Object.defineProperty(this, sD, {
          value: Cm
        }), Object.defineProperty(this, gD, {
          value: Jm
        }), Object.defineProperty(this, TD, {
          value: bm
        }), Object.defineProperty(this, xD, {
          value: Mm
        }), Object.defineProperty(this, pD, {
          value: am
        }), Object.defineProperty(this, BD, {
          value: Nm
        }), Object.defineProperty(this, YD, {
          value: ym
        }), Object.defineProperty(this, iD, {
          value: wm
        }), Object.defineProperty(this, AD, {
          value: fm
        }), Object.defineProperty(this, UD, {
          value: Em
        }), Object.defineProperty(this, rD, {
          value: lm
        }), Object.defineProperty(this, oD, {
          value: Qm
        }), Object.defineProperty(this, zD, {
          value: Xm
        }), Object.defineProperty(this, GD, {
          value: Hm
        }), Object.defineProperty(this, kD, {
          value: jm
        }), Object.defineProperty(this, FD, {
          value: dm
        }), Object.defineProperty(this, LD, {
          value: mm
        }), Object.defineProperty(this, ND, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, aD, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, MD, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, bD, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, JD, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, CD, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, uD, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, KD, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, hD, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, vD, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, WD, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, SD, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, cD, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, RD, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, ID, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, PD, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, ZD, {
          writable: !0,
          value: void 0
        }), (0, OD.e)(this, ZD)[ZD] = new HD({
          ensureLoaded: () => (0, OD.e)(this, oD)[oD](),
          recorderCall: (tt, et) => {
            et && (0, OD.e)(this, FD)[FD]("an edited save's stage");
            const Vt = (0, OD.e)(this, Vm)[Vm](((et, Vt) => (tt(et, Vt), !0)));
            return null !== Vt && void 0 !== Vt && Vt
          },
          beginSave: tt.beginSave,
          givenUp: tt.givenUp
        })
      }
      get active() {
        return null !== (0, OD.e)(this, aD)[aD]
      }
      get trapped() {
        return (0, OD.e)(this, bD)[bD]
      }
      get loading() {
        return null !== (0, OD.e)(this, uD)[uD]
      }
      prefetch() {
        (0, OD.e)(this, JD)[JD] || (0, OD.e)(this, bD)[bD] || (0, OD.e)(this, aD)[aD] || (0, OD.e)(this, uD)[uD] || this.deps.prefetch()
      }
      viewDrawn() {
        (0, OD.e)(this, hD)[hD] = !0, (0, OD.e)(this, kD)[kD]() && (0, OD.e)(this, zD)[zD]()
      }
      prefs(tt, et) {
        (0, OD.e)(this, vD)[vD] = {
          on: tt,
          seconds: et
        }, (0, OD.e)(this, xD)[xD](lt.ad.Prefs, QD(tt, et)), tt && (0, OD.e)(this, hD)[hD] && (0, OD.e)(this, zD)[zD]()
      }
      control(tt) {
        const et = function(tt) {
          return new Uint8Array([tt, 0, 0, 0])
        }(tt);
        if (yD.has(tt)) return (0, OD.e)(this, aD)[aD] ? void(0, OD.e)(this, xD)[xD](lt.ad.Control, et) : ((0, OD.e)(this, SD)[SD] = et, void(0, OD.e)(this, zD)[zD]());
        (0, OD.e)(this, JD)[JD] || this.deps.coreCommand(lt.ad.Control, et)
      }
      session(tt) {
        (0, OD.e)(this, WD)[WD] = tt, (0, OD.e)(this, LD)[LD](tt)
      }
      filePartDone(tt, et) {
        (0, OD.e)(this, xD)[xD](lt.ad.FilePartDone, function(tt, et) {
          const Vt = new Uint8Array(8),
            Ot = new DataView(Vt.buffer);
          return Ot.setUint32(0, tt, !0), Ot.setUint32(4, et, !0), Vt
        }(tt, et))
      }
      fileDone(tt) {
        return (0, OD.e)(this, xD)[xD](lt.ad.FileDone, function(tt) {
          const et = new Uint8Array(4);
          return new DataView(et.buffer).setUint32(0, tt, !0), et
        }(tt)), (0, OD.e)(this, UD)[UD]()
      }
      saveEdited(tt) {
        return (0, OD.e)(this, FD)[FD]("saveEdited"), (0, OD.e)(this, ZD)[ZD].start(tt)
      }
      afterFrame() {
        if (!(0, OD.e)(this, aD)[aD]) return;
        "read" === (0, OD.e)(this, ZD)[ZD].beforeRecorderStep() && (0, OD.e)(this, UD)[UD]();
        const tt = (0, OD.e)(this, CD)[CD];
        (0, OD.e)(this, CD)[CD] = null;
        const et = (0, OD.e)(this, aD)[aD],
          Vt = (0, OD.e)(this, MD)[MD];
        if (!et || !Vt) return void(null === tt || void 0 === tt || tt.resolve((0, OD.e)(this, bD)[bD] ? "trapped" : "hE"));
        const {
          core: Ot
        } = this.deps, qt = Ot.fDt(2);
        let Dt, mt, dt, jt, Ht = 0,
          Xt = 0;
        if (0 !== qt) {
          var Qt, lt;
          const tt = (0, OD.e)(this, nD)[nD]();
          Ht = null !== (Qt = tt[qt >>> 2]) && void 0 !== Qt ? Qt : 0, Xt = null !== (lt = tt[1 + (qt >>> 2)]) && void 0 !== lt ? lt : 0
        }
        try {
          if (Xt > 0) {
            const tt = et.feed(Xt);
            0 !== tt && (0, OD.e)(this, tm)[tm](Vt).set((0, OD.e)(this, sD)[sD]().subarray(Ht, Ht + Xt), tt)
          }
          Dt = et.step(), mt = et.wDt(), dt = et.yDt(), jt = et.NDt()
        } catch (Et) {
          if (!(0, OD.e)(this, qm)[qm](Et)) throw null === tt || void 0 === tt || tt.resolve("hE"), Et;
          return void(null === tt || void 0 === tt || tt.resolve("trapped"))
        }
        if (Dt > 0) {
          const tt = Ot.aDt(2, Dt);
          0 !== tt && (0, OD.e)(this, sD)[sD]().set((0, OD.e)(this, tm)[tm](Vt).subarray(mt, mt + Dt), tt)
        }
        if (dt > 0) {
          (0, OD.e)(this, cD)[cD] = [];
          try {
            this.deps.events(new Uint8Array(Vt.buffer, jt, dt), Vt)
          } catch (Et) {
            throw null === tt || void 0 === tt || tt.resolve("hE"), Et
          } finally {
            const tt = (0, OD.e)(this, cD)[cD];
            (0, OD.e)(this, cD)[cD] = null;
            for (const [et, Vt] of tt)(0, OD.e)(this, xD)[xD](et, Vt)
          }
        }
        if (!(0, OD.e)(this, kD)[kD]() && !(0, OD.e)(this, GD)[GD]()) return (0, OD.e)(this, TD)[TD](), void(null === tt || void 0 === tt || tt.resolve("hE"));
        null === tt || void 0 === tt || tt.resolve((0, OD.e)(this, pD)[pD]())
      }
      dispose() {
        (0, OD.e)(this, JD)[JD] = !0, (0, OD.e)(this, TD)[TD]()
      }
    }

    function mm(tt) {
      (0, OD.e)(this, xD)[xD](lt.ad.Session, function(tt) {
        const et = new TextEncoder,
          Vt = et.encode(tt.game).subarray(0, 65535),
          Ot = et.encode(tt.lobby).subarray(0, 65535),
          qt = new Uint8Array(22 + Vt.length + 2 + Ot.length),
          Dt = new DataView(qt.buffer);
        Dt.setFloat64(0, tt.unixMs, !0), Dt.setBigUint64(8, BigInt.asUintN(64, tt.session), !0), Dt.setUint8(16, tt.lobbyType);
        let mt = 20;
        for (const dt of [Vt, Ot]) Dt.setUint16(mt, dt.length, !0), qt.set(dt, mt + 2), mt += 2 + dt.length;
        return qt
      }({
        ...tt,
        unixMs: this.deps.unixNow()
      }))
    }

    function dm(tt) {
      false
    }

    function jm() {
      var tt, et;
      return null !== (tt = null === (et = (0, OD.e)(this, vD)[vD]) || void 0 === et ? void 0 : et.on) && void 0 !== tt && tt
    }

    function Hm() {
      const tt = (0, OD.e)(this, aD)[aD];
      let et = !0;
      if (tt) try {
        et = tt.busy()
      } catch (Vt) {
        if (!(0, OD.e)(this, qm)[qm](Vt)) throw Vt
      }
      return et || (0, OD.e)(this, ZD)[ZD].active
    }
    async function Xm() {
      !(0, OD.e)(this, JD)[JD] && this.deps.allowed() ? await (0, OD.e)(this, oD)[oD]() : (0, OD.e)(this, SD)[SD] = null
    }

    function Qm() {
      return (0, OD.e)(this, bD)[bD] || (0, OD.e)(this, JD)[JD] ? Promise.resolve(!1) : (0, OD.e)(this, aD)[aD] ? Promise.resolve(!0) : ((0, OD.e)(this, uD)[uD] ??= (0, OD.e)(this, rD)[rD](), (0, OD.e)(this, uD)[uD])
    }
    async function lm() {
      let tt = !1;
      try {
        return tt = await (0, OD.e)(this, iD)[iD](), tt
      } finally {
        tt || ((0, OD.e)(this, SD)[SD] = null), (0, OD.e)(this, uD)[uD] = null
      }
    }

    function Em() {
      if (!(0, OD.e)(this, aD)[aD]) return Promise.resolve((0, OD.e)(this, bD)[bD] ? "trapped" : "hE");
      if (!(0, OD.e)(this, CD)[CD]) {
        let tt = () => {};
        const et = new Promise((et => {
          tt = et
        }));
        (0, OD.e)(this, CD)[CD] = {
          promise: et,
          resolve: tt
        }
      }
      return (0, OD.e)(this, CD)[CD].promise
    }

    function fm(tt) {
      const et = (0, OD.e)(this, CD)[CD];
      (0, OD.e)(this, CD)[CD] = null, null === et || void 0 === et || et.resolve(tt)
    }
    async function wm() {
      let tt = (0, OD.e)(this, ND)[ND];
      if (!tt) {
        const et = (0, OD.e)(this, KD)[KD];
        try {
          tt = await this.deps.load()
        } catch (Vt) {
          return et === (0, OD.e)(this, KD)[KD] && await (0, OD.e)(this, em)[em](Vt), !1
        }
        if (et !== (0, OD.e)(this, KD)[KD]) return this.deps.unload(), !1;
        const Ot = tt,
          qt = (0, OD.e)(this, Om)[Om]((() => Ot.MDt()));
        if (void 0 === qt) return !1;
        const Dt = this.deps.core.bDt();
        if (qt !== Dt) return await (0, OD.e)(this, em)[em](new Error(`recorder port version ${qt}, the core's ${Dt}`)), !1;
        (0, OD.e)(this, ND)[ND] = tt
      }
      const et = tt;
      try {
        if (!(0, OD.e)(this, Om)[Om]((() => ((0, OD.e)(this, aD)[aD] = new et.JDt, (0, OD.e)(this, MD)[MD] = et.lDt(), !0)))) return !1;
        (0, OD.e)(this, BD)[BD]();
        const tt = (0, OD.e)(this, SD)[SD];
        return (0, OD.e)(this, SD)[SD] = null, tt && (0, OD.e)(this, xD)[xD](lt.ad.Control, tt), (0, OD.e)(this, YD)[YD]()
      } catch (Vt) {
        return (0, OD.e)(this, TD)[TD](), await (0, OD.e)(this, em)[em](Vt), !1
      }
    }

    function ym() {
      return this.deps.core.CDt(0), 1 === this.deps.core.CDt(1) || ((0, OD.e)(this, TD)[TD](), this.deps.failed(wD), !1)
    }

    function Nm() {
      (0, OD.e)(this, vD)[vD] && (0, OD.e)(this, xD)[xD](lt.ad.Prefs, QD((0, OD.e)(this, vD)[vD].on, (0, OD.e)(this, vD)[vD].seconds)), (0, OD.e)(this, WD)[WD] && (0, OD.e)(this, LD)[LD]((0, OD.e)(this, WD)[WD])
    }

    function am() {
      return fD({
        memoryBytes: this.deps.memoryBytes,
        clipSeconds: () => {
          var tt, et;
          return null !== (tt = null === (et = (0, OD.e)(this, vD)[vD]) || void 0 === et ? void 0 : et.seconds) && void 0 !== tt ? tt : 0
        },
        trapped: () => (0, OD.e)(this, bD)[bD],
        busy: () => (0, OD.e)(this, GD)[GD](),
        loadInFlight: () => (0, OD.e)(this, uD)[uD],
        df: () => (0, OD.e)(this, JD)[JD],
        unload: () => {
          (0, OD.e)(this, TD)[TD]()
        },
        load: () => (0, OD.e)(this, oD)[oD]()
      })
    }

    function Mm(tt, et) {
      (0, OD.e)(this, cD)[cD] ? (0, OD.e)(this, cD)[cD].push([tt, et]): (0, OD.e)(this, Vm)[Vm](((Vt, Ot) => {
        const qt = Vt.EDt(et.length);
        0 !== qt && (new Uint8Array(Ot.buffer, qt, et.length).set(et), Vt.command(tt, et.length))
      }))
    }

    function bm() {
      (0, OD.e)(this, KD)[KD]++, (0, OD.e)(this, AD)[AD]("hE"), (0, OD.e)(this, ZD)[ZD].stop(), this.deps.core.CDt(0), (0, OD.e)(this, gD)[gD](), (0, OD.e)(this, bD)[bD] || ((0, OD.e)(this, ND)[ND] = null, this.deps.unload())
    }

    function Jm() {
      (0, OD.e)(this, Vm)[Vm]((tt => {
        tt.free()
      })), (0, OD.e)(this, aD)[aD] = null, (0, OD.e)(this, MD)[MD] = null, (0, OD.e)(this, PD)[PD] = null
    }

    function Cm() {
      var tt;
      const et = this.deps.coreBuffer();
      return (null === (tt = (0, OD.e)(this, RD)[RD]) || void 0 === tt ? void 0 : tt.buffer) !== et && ((0, OD.e)(this, RD)[RD] = new Uint8Array(et)), (0, OD.e)(this, RD)[RD]
    }

    function um() {
      var tt;
      const et = this.deps.coreBuffer();
      return (null === (tt = (0, OD.e)(this, ID)[ID]) || void 0 === tt ? void 0 : tt.buffer) !== et && ((0, OD.e)(this, ID)[ID] = new Uint32Array(et, 0, et.byteLength >>> 2)), (0, OD.e)(this, ID)[ID]
    }

    function Km(tt) {
      var et;
      const Vt = tt.buffer;
      return (null === (et = (0, OD.e)(this, PD)[PD]) || void 0 === et ? void 0 : et.buffer) !== Vt && ((0, OD.e)(this, PD)[PD] = new Uint8Array(Vt)), (0, OD.e)(this, PD)[PD]
    }
    async function hm(tt) {
      await this.deps.staleOr(tt, (() => {
        this.deps.failed(wD)
      }))
    }

    function Wm(tt) {
      const et = (0, OD.e)(this, aD)[aD],
        Vt = (0, OD.e)(this, MD)[MD];
      if (et && Vt) return (0, OD.e)(this, Om)[Om]((() => tt(et, Vt)))
    }

    function Sm(tt) {
      if (!(0, OD.e)(this, bD)[bD]) try {
        return tt()
      } catch (et) {
        if (!(0, OD.e)(this, qm)[qm](et)) throw et;
        return
      }
    }

    function cm(tt) {
      return tt instanceof WebAssembly.RuntimeError && ((0, OD.e)(this, bD)[bD] = !0, (0, OD.e)(this, aD)[aD] = null, (0, OD.e)(this, MD)[MD] = null, (0, OD.e)(this, PD)[PD] = null, (0, OD.e)(this, ND)[ND] = null, (0, OD.e)(this, SD)[SD] = null, (0, OD.e)(this, AD)[AD]("trapped"), this.deps.core.CDt(0), (0, OD.e)(this, ZD)[ZD].stop(), this.deps.crash(this.deps.markTrapped(tt)), this.deps.failed("Replay recording stopped working, so reload the page to record replays again."), !0)
    }
    var Rm = Vt(38869);
    const Im = new Map([
      ["skyblock", () => Vt.e(52).then((() => Vt(38860)))]
    ]);

    function Pm(tt) {
      const et = Im.get(tt);
      return et ? et().then((() => {
        const et = (0, Rm.d)(tt);
        if (!et) throw new Error(`${tt}'s replay hook module registered no hook`);
        return et
      })) : null
    }
    class Zm {
      constructor(tt) {
        this.deps = tt, this.game = null, this.hook = null, this.generation = 0, this.all = !1, this.pending = new Map, this.ids = new Int32Array(64)
      }
      get wantsWatch() {
        return null !== this.hook
      }
      opened(tt) {
        if (this.pending.clear(), tt === this.game && null !== this.hook) return void(this.all = !0);
        const et = ++this.generation;
        this.game = tt, this.hook = null, this.all = !1;
        const Vt = this.deps.loadHook(tt);
        null === Vt || void 0 === Vt || Vt.then((tt => {
          et === this.generation && (this.hook = tt, this.all = !0)
        }), (tt => {
          et === this.generation && this.deps.onError(tt)
        }))
      }
      ended() {
        this.generation++, this.game = null, this.hook = null, this.all = !1, this.pending.clear()
      }
      entityAdded(tt) {
        null === this.hook || this.all || this.pending.set(tt, !0)
      }
      entityInfoChanged(tt) {
        null === this.hook || this.all || this.pending.has(tt) || this.pending.set(tt, !1)
      }
      flush(tt) {
        const {
          hook: et
        } = this;
        if (null === et || !tt || !this.all && 0 === this.pending.size) return;
        const Vt = this.deps.cmd();
        if (null === Vt) return;
        const {
          api: Ot
        } = this.deps;
        if (this.all) {
          this.all = !1, this.pending.clear();
          const {
            ids: tt,
            count: et
          } = zV(Ot, this.ids);
          this.ids = tt;
          for (let Vt = 0; Vt < et; Vt++) this.pending.set(tt[Vt], !0)
        }
        const qt = this.ids = oV(this.ids, this.pending.size);
        let Dt = 0;
        for (const Ht of this.pending.keys()) qt[Dt++] = Ht;
        const mt = [],
          dt = rV(Ot, qt, Dt, ((tt, et) => {
            null !== et && mt.push({
              serverId: tt,
              info: et,
              spawned: !0 === this.pending.get(tt)
            })
          }));
        if (dt) {
          this.pending.clear();
          for (const {
              serverId: tt,
              info: Ot,
              spawned: qt
            }
            of mt) try {
            et(Ot, {
              setFacingTolerance: et => {
                null === et && qt || jV(Vt, tt, et) || this.pending.set(tt, qt)
              }
            })
          } catch (jt) {
            this.deps.onError(jt)
          }
        }
      }
    }
    var Lm = (0, qD.b)("bindings"),
      Fm = (0, qD.b)("module"),
      km = (0, qD.b)("memory"),
      Gm = (0, qD.b)("trapped"),
      zm = (0, qD.b)("generation"),
      om = (0, qD.b)("loading"),
      rm = (0, qD.b)("lend"),
      Um = (0, qD.b)("givenUp"),
      Am = (0, qD.b)("afterSave"),
      im = (0, qD.b)("opens"),
      Ym = (0, qD.b)("saveAskedAt"),
      Bm = (0, qD.b)("unload"),
      pm = (0, qD.b)("dropModule"),
      xm = (0, qD.b)("loadFailed"),
      Tm = (0, qD.b)("saveReadsBody"),
      gm = (0, qD.b)("command"),
      sm = (0, qD.b)("call"),
      nm = (0, qD.b)("guard"),
      td = (0, qD.b)("trapOn");
    class ed {
      constructor(tt) {
        this.deps = tt, Object.defineProperty(this, td, {
          value: Hd
        }), Object.defineProperty(this, nm, {
          value: jd
        }), Object.defineProperty(this, sm, {
          value: dd
        }), Object.defineProperty(this, gm, {
          value: md
        }), Object.defineProperty(this, Tm, {
          get: Dd,
          set: void 0
        }), Object.defineProperty(this, xm, {
          value: qd
        }), Object.defineProperty(this, pm, {
          value: Od
        }), Object.defineProperty(this, Bm, {
          value: Vd
        }), Object.defineProperty(this, Lm, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Fm, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, km, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Gm, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, zm, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, om, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, rm, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Um, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Am, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, im, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, Ym, {
          writable: !0,
          value: null
        })
      }
      get active() {
        return null !== (0, OD.e)(this, Fm)[Fm] && null === (0, OD.e)(this, Am)[Am]
      }
      async open(tt, et) {
        if ((0, OD.e)(this, Gm)[Gm]) return lt.md.ModuleTrap;
        let Vt = (0, OD.e)(this, Lm)[Lm];
        if (!Vt) {
          const tt = (0, OD.e)(this, zm)[zm];
          (0, OD.e)(this, om)[om]++;
          try {
            Vt = await this.deps.load()
          } catch (qt) {
            return (0, OD.e)(this, om)[om]--, tt !== (0, OD.e)(this, zm)[zm] ? "stopped" : (0, OD.e)(this, xm)[xm](qt, et)
          }
          if ((0, OD.e)(this, om)[om]--, tt !== (0, OD.e)(this, zm)[zm]) return (0, OD.e)(this, Lm)[Lm] || 0 !== (0, OD.e)(this, om)[om] || (0, OD.e)(this, Gm)[Gm] || this.deps.unload(), "stopped";
          if ((0, OD.e)(this, Gm)[Gm]) return lt.md.ModuleTrap;
          const Ot = Vt.MDt(),
            Dt = this.deps.core.bDt();
          if (Ot !== Dt) return (0, OD.e)(this, xm)[xm](new Error(`replay port version ${Ot}, the core's ${Dt}`), et);
          (0, OD.e)(this, Lm)[Lm] = Vt
        }
        if (!(0, OD.e)(this, Fm)[Fm]) {
          const tt = Vt;
          if (!(0, OD.e)(this, nm)[nm]((() => {
              (0, OD.e)(this, Fm)[Fm] = new tt.uDt, (0, OD.e)(this, km)[km] = tt.KDt()
            }))) return lt.md.ModuleTrap
        }
        let Ot = !1;
        return (0, OD.e)(this, sm)[sm](((et, Vt) => {
          null !== (0, OD.e)(this, Am)[Am] && et.step(0, 0);
          const qt = et.stage(tt.length);
          0 !== qt && (new Uint8Array(Vt.buffer, qt, tt.length).set(tt), et.open(), (0, OD.e)(this, Um)[Um] = (0, OD.e)(this, rm)[rm], (0, OD.e)(this, Am)[Am] = null, (0, OD.e)(this, im)[im]++, Ot = !0)
        })) ? Ot ? "opening" : lt.md.TooLarge : lt.md.ModuleTrap
      }
      beforeFrame(tt) {
        const et = (0, OD.e)(this, Fm)[Fm],
          Vt = (0, OD.e)(this, km)[km];
        if (!et || !Vt || null !== (0, OD.e)(this, Am)[Am]) return;
        const {
          core: Ot
        } = this.deps, qt = Ot.hDt(tt);
        if (qt < 0) return;
        const Dt = Math.floor(qt);
        let mt, dt;
        try {
          mt = et.step(Dt, qt - Dt), dt = et.wDt()
        } catch (Ht) {
          return void(0, OD.e)(this, td)[td](Ht)
        }
        const jt = Ot.aDt(1, mt);
        if (0 === jt) {
          const tt = (0, OD.e)(this, sm)[sm]((tt => {
            tt.close()
          }));
          if (!tt) return;
          return (0, OD.e)(this, Tm)[Tm] ? (0, OD.e)(this, Am)[Am] = "drop" : (0, OD.e)(this, pm)[pm](), void Ot.vDt(lt.md.Port)
        }
        new Uint8Array(this.deps.coreBuffer(), jt, mt).set(new Uint8Array(Vt.buffer, dt, mt))
      }
      play() {
        (0, OD.e)(this, gm)[gm]((tt => {
          tt.play()
        }))
      }
      pause() {
        (0, OD.e)(this, gm)[gm]((tt => {
          tt.pause()
        }))
      }
      seek(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (0, OD.e)(this, gm)[gm]((Vt => {
          Vt.seek(tt, et)
        }))
      }
      setMark(tt, et) {
        return (0, OD.e)(this, gm)[gm]((Vt => {
          Vt.WDt(tt, et)
        }))
      }
      addKeyframe(tt, et) {
        return (0, OD.e)(this, gm)[gm]((Vt => {
          Vt.SDt(tt[0], tt[1], tt[2], et[0], et[1], et[2])
        }))
      }
      setKeyframe(tt, et) {
        return (0, OD.e)(this, gm)[gm]((Vt => {
          Vt.cDt(tt, et)
        }))
      }
      moveKeyframe(tt, et) {
        return (0, OD.e)(this, gm)[gm]((Vt => {
          Vt.RDt(tt, et)
        }))
      }
      deleteKeyframes(tt, et) {
        return (0, OD.e)(this, gm)[gm]((Vt => {
          Vt.IDt(tt, et)
        }))
      }
      crop(tt, et) {
        return null === (0, OD.e)(this, rm)[rm] && (0, OD.e)(this, gm)[gm]((Vt => {
          Vt.crop(tt, et)
        }))
      }
      beginSave() {
        const tt = (0, OD.e)(this, Ym)[Ym];
        if ((0, OD.e)(this, Ym)[Ym] = null, null !== tt && tt !== (0, OD.e)(this, im)[im]) return null;
        let et = 0,
          Vt = null;
        if ((0, OD.e)(this, sm)[sm](((tt, Ot) => {
            et = tt.save(), 0 !== et && (Vt = new Uint8Array(Ot.buffer, tt.PDt(), tt.ZDt()).slice())
          })), 0 === et || !Vt) return null;
        const Ot = {
          headLen: et,
          editState: Vt,
          givenUp: () => (0, OD.e)(this, Um)[Um] === Ot,
          head: (tt, et) => {
            if ((0, OD.e)(this, rm)[rm] !== Ot || !(0, OD.e)(this, Tm)[Tm]) return null;
            let Vt = null;
            return (0, OD.e)(this, sm)[sm](((Ot, qt) => {
              const Dt = Ot.LDt();
              0 !== Dt && tt >= 0 && et >= 0 && tt + et <= Dt && (Vt = new Uint8Array(qt.buffer, Ot.FDt() + tt, et))
            })), Vt
          },
          end: () => {
            if ((0, OD.e)(this, rm)[rm] !== Ot) return;
            (0, OD.e)(this, rm)[rm] = null, (0, OD.e)(this, Um)[Um] = null, (0, OD.e)(this, sm)[sm]((tt => {
              tt.GDt()
            }));
            const tt = (0, OD.e)(this, Am)[Am];
            (0, OD.e)(this, Am)[Am] = null, "unload" === tt ? (0, OD.e)(this, Bm)[Bm]() : "drop" === tt && (0, OD.e)(this, pm)[pm]()
          }
        };
        return (0, OD.e)(this, rm)[rm] = Ot, Ot
      }
      askSave() {
        (0, OD.e)(this, Ym)[Ym] = (0, OD.e)(this, im)[im]
      }
      setSpeed(tt) {
        (0, OD.e)(this, gm)[gm]((et => {
          et.zDt(tt)
        }))
      }
      setCameraMode(tt) {
        (0, OD.e)(this, gm)[gm]((et => {
          et.oDt(tt)
        }))
      }
      close() {
        (0, OD.e)(this, gm)[gm]((tt => {
          tt.close()
        }))
      }
      stop() {
        (0, OD.e)(this, zm)[zm]++, (0, OD.e)(this, Tm)[Tm] && ((0, OD.e)(this, sm)[sm]((tt => {
          tt.close()
        })), (0, OD.e)(this, Fm)[Fm]) ? (0, OD.e)(this, Am)[Am] = "unload" : (0, OD.e)(this, Bm)[Bm]()
      }
    }

    function Vd() {
      (0, OD.e)(this, pm)[pm](), (0, OD.e)(this, Gm)[Gm] || ((0, OD.e)(this, Lm)[Lm] = null, this.deps.unload())
    }

    function Od() {
      (0, OD.e)(this, sm)[sm]((tt => {
        tt.free()
      })), (0, OD.e)(this, Fm)[Fm] = null, (0, OD.e)(this, km)[km] = null
    }
    async function qd(tt, et) {
      return await this.deps.staleOr(tt, (() => {}), {
        beforeReload: et
      }) ? "reloading" : lt.md.ModuleLoad
    }

    function Dd() {
      return null !== (0, OD.e)(this, rm)[rm] && (0, OD.e)(this, Um)[Um] !== (0, OD.e)(this, rm)[rm]
    }

    function md(tt) {
      return null === (0, OD.e)(this, Am)[Am] && (0, OD.e)(this, sm)[sm](tt)
    }

    function dd(tt) {
      const et = (0, OD.e)(this, Fm)[Fm],
        Vt = (0, OD.e)(this, km)[km];
      return !(!et || !Vt) && (0, OD.e)(this, nm)[nm]((() => {
        tt(et, Vt)
      }))
    }

    function jd(tt) {
      if ((0, OD.e)(this, Gm)[Gm]) return !1;
      try {
        return tt(), !0
      } catch (et) {
        return (0, OD.e)(this, td)[td](et), !1
      }
    }

    function Hd(tt) {
      if (!(tt instanceof WebAssembly.RuntimeError)) throw tt;
      (0, OD.e)(this, Gm)[Gm] = !0, (0, OD.e)(this, Fm)[Fm] = null, (0, OD.e)(this, km)[km] = null, (0, OD.e)(this, Lm)[Lm] = null, this.deps.crash(this.deps.markTrapped(tt)), this.deps.core.vDt(lt.md.ModuleTrap)
    }
    var Xd = Vt(6671),
      Qd = Vt(41219);
    const ld = "[bloxd-wasm-client]";
    const Ed = String(Iq);

    function fd(tt) {
      return null === tt || tt === Ed ? void 0 : tt
    }

    function wd(tt) {
      var et, Vt, Ot, qt, Dt, dt, jt;
      switch (tt.what) {
        case lt.ud.FlyingText: {
          let et;
          try {
            et = JSON.parse(tt.contentJson)
          } catch (Ht) {
            return void console.warn(`${ld} a replay's flying text isn't JSON`, Ht)
          }
          mt.j.sw("forceFlyingMiddleMessage", {
            content: et,
            oD: tt.oD,
            angle: tt.angle,
            rD: tt.rD
          });
          break
        }
        case lt.ud.PlayerKilled:
          (0, Qd.e)({
            kind: "killed",
            body: {
              deadEId: null !== (et = fd(tt.dead)) && void 0 !== et ? et : "",
              killerEId: fd(tt.killer),
              withItem: null !== (Vt = tt.withItem) && void 0 !== Vt ? Vt : "",
              killstreak: tt.killstreak
            }
          });
          break;
        case lt.ud.Killfeed:
          (0, Qd.e)({
            kind: "custom",
            body: {
              killer: {
                eId: fd(tt.killerId),
                name: null !== (Ot = tt.killerName) && void 0 !== Ot ? Ot : void 0,
                colour: null !== (qt = tt.killerColour) && void 0 !== qt ? qt : void 0
              },
              victim: {
                eId: fd(tt.victimId),
                name: null !== (Dt = tt.victimName) && void 0 !== Dt ? Dt : void 0,
                colour: null !== (dt = tt.victimColour) && void 0 !== dt ? dt : void 0
              },
              withItem: null !== (jt = tt.withItem) && void 0 !== jt ? jt : ""
            }
          })
      }
    }
    const yd = "[bloxd-wasm-client]";

    function Nd(tt) {
      if (void 0 === tt || null === tt || "" === tt) return null;
      const et = Number(tt);
      return Number.isInteger(et) && et > Iq && et <= 2147483647 ? et : null
    }

    function Md(tt) {
      return {
        id: Nd(tt.eId),
        name: "string" === typeof tt.name ? tt.name : null,
        colour: "string" === typeof tt.colour ? tt.colour : null
      }
    }

    function bd(tt) {
      const et = (0, Uq.j)(pV.gc.PlayerKilled, (et => {
          var Vt, Ot;
          const qt = (0, rq.k)(et);
          if (!(0, rq.d)(qt)) return;
          const {
            deadEId: Dt,
            killerEId: mt,
            withItem: dt,
            killstreak: jt
          } = qt;
          tt.recordPlayerKilled(null !== (Vt = Nd(Dt)) && void 0 !== Vt ? Vt : Iq, null !== (Ot = Nd(mt)) && void 0 !== Ot ? Ot : Iq, "number" === typeof jt ? jt : 0, "string" === typeof dt ? dt : "")
        })),
        Vt = (0, Uq.j)(pV.gc.CustomKillfeed, (et => {
          const Vt = (0, rq.k)(et);
          if (!(0, rq.d)(Vt) || !(0, rq.d)(Vt.killer) || !(0, rq.d)(Vt.victim)) return;
          const {
            killer: Ot,
            victim: qt,
            withItem: Dt
          } = Vt;
          tt.recordKillfeed(Md(Ot), Md(qt), "string" === typeof Dt ? Dt : null)
        }));
      return () => {
        et(), Vt()
      }
    }

    function Jd(tt) {
      var et;
      return void 0 === tt || null === tt ? null : null !== (et = JSON.stringify(tt)) && void 0 !== et ? et : null
    }

    function Cd(tt) {
      let et = null;
      const Vt = () => {
        const {
          enableClipping: Vt,
          clipDurationSeconds: qt
        } = Ot.b.get("clientEscMenuOptions"), Dt = `${Vt}:${qt}`;
        Dt !== et && (et = Dt, tt.recorder.setPrefs(Vt, qt))
      };
      return Vt(), (0, mt.n)("appManagerUpdated|clientEscMenuOptions", Vt)
    }
    const ud = "replayModule",
      Kd = "recorderModule";

    function hd(tt, et, Vt) {
      return function() {
        return tt.isStopped ? Vt : et(...arguments)
      }
    }
    const vd = {
      open: () => Promise.reject(new Error(Cq.d.coreStopped.text)),
      replayKey: () => null,
      encode: () => Promise.resolve(null),
      fileHandle: () => null,
      markSaved: () => {}
    };

    function Wd() {
      return Vt.e(65).then((() => Vt(61703)))
    }

    function Sd(tt) {
      (0, Cq.f)({
        text: tt,
        type: "Error"
      })
    }
    class cd {
      constructor(tt) {
        this.deps = tt, this.runtime = void 0, this.entityHooks = void 0, this.recordedOptions = void 0, this.stops = void 0, this.activeConn = 0, this.stopped = !1, this.bench = null, this.replay = void 0, this.recorder = void 0, this.freecam = void 0, this.drawn = !1;
        const {
          running: et,
          api: Ot,
          core: qt
        } = tt, Dt = () => tt.memory().buffer, mt = () => et.isStopped ? null : et.rings.cmd, dt = hd(et, ((tt, et) => qt.aDt(tt, et)), 0), jt = () => qt.bDt();
        let Ht = null;
        this.replay = new ed({
          core: {
            hDt: hd(et, (tt => qt.hDt(tt)), -1),
            aDt: dt,
            bDt: jt,
            vDt: hd(et, (tt => {
              qt.vDt(tt)
            }), void 0)
          },
          coreBuffer: Dt,
          load: async () => (Ht = await Vt.e(66).then((() => Vt(61715))), Ht.loadReplayModule()),
          unload: () => {
            var tt;
            null === (tt = Ht) || void 0 === tt || tt.unloadReplayModule()
          },
          markTrapped: tt => Ht ? Ht.markReplayTrapped(tt) : new Error(String(tt)),
          staleOr: (et, Vt, Ot) => tt.staleOr(ud, et, Vt, Ot),
          crash: et => {
            tt.reportFault(ud, et)
          }
        });
        let Xt = null;
        this.recorder = new Dm({
          core: {
            CDt: hd(et, (tt => qt.CDt(tt)), 0),
            fDt: hd(et, (tt => qt.fDt(tt)), 0),
            aDt: dt,
            bDt: jt
          },
          coreCommand: (tt, et) => {
            var Vt, Ot;
            return null !== (Vt = null === (Ot = mt()) || void 0 === Ot ? void 0 : Ot.writeCmd(tt, 0, et)) && void 0 !== Vt && Vt
          },
          coreBuffer: Dt,
          load: async () => (Xt = await Wd(), Xt.loadRecorderModule()),
          prefetch: () => {
            Wd().then((tt => tt.prefetchRecorderModule())).catch((tt => {
              console.warn(`${yd} the recorder module didn't prefetch, so a save loads it:`, tt)
            }))
          },
          unload: () => {
            var tt;
            null === (tt = Xt) || void 0 === tt || tt.unloadRecorderModule()
          },
          markTrapped: tt => Xt ? Xt.markRecorderTrapped(tt) : new Error(String(tt)),
          memoryBytes: () => {
            var tt, et;
            return null !== (tt = null === (et = Xt) || void 0 === et ? void 0 : et.recorderMemoryBytes()) && void 0 !== tt ? tt : 0
          },
          staleOr: (et, Vt) => tt.staleOr(Kd, et, Vt),
          crash: et => {
            tt.reportFault(Kd, et)
          },
          allowed: () => !0 === tt.options.get("canRecordReplays"),
          failed: Sd,
          events: (tt, et) => {
            this.runtime.recorderEvents(tt, et)
          },
          beginSave: () => this.replay.beginSave(),
          givenUp: Sd,
          unixNow: () => Date.now()
        });
        const Qt = new Rq({
          core: {
            DDt: hd(et, (tt => qt.DDt(tt)), 0),
            dDt: hd(et, (() => {
              qt.dDt()
            }), void 0),
            ky: hd(et, (() => qt.ky()), 0),
            mDt: hd(et, (() => qt.mDt()), 0)
          },
          buffer: Dt,
          apiView: () => Ot.apiView,
          cmd: mt,
          replay: this.replay,
          recorder: this.recorder
        });
        this.entityHooks = new Zm({
          api: Ot,
          cmd: mt,
          loadHook: Pm,
          onError: tt => {
            console.warn(`${yd} the recorded game's replay hooks:`, tt)
          }
        });
        const lt = new oq({
          client: Qt,
          buffer: Dt,
          setHoldDraws: tt => {
            et.setHoldDraws(tt)
          },
          notify: Cq.f,
          onRecorderState: () => {
            var tt;
            null === (tt = (0, Kq.g)()) || void 0 === tt || tt.recorderChanged()
          },
          onViewerChange: () => {
            var tt;
            null === (tt = (0, Kq.g)()) || void 0 === tt || tt.viewerChanged()
          },
          onReplayOption: et => {
            ! function(tt, et) {
              var Vt, Ot;
              const qt = pV.ob[et.key];
              if (void 0 === qt) return;
              let Dt = null !== (Vt = et.value) && void 0 !== Vt ? Vt : JSON.parse(JSON.stringify(null !== (Ot = Xd.e[qt]) && void 0 !== Ot ? Ot : null));
              if (null !== et.value && et.key < pV.Ob.Environment && "string" === typeof Dt) try {
                Dt = JSON.parse(Dt)
              } catch (mt) {
                return void console.warn(`${ld} a replay's ${qt} isn't JSON`, mt)
              }
              tt.applyNewClientOptions({
                [qt]: Dt
              })
            }(tt.options, et)
          },
          onReplayUiEvent: wd,
          onReplayOpened: et => {
            this.entityHooks.opened((0, Wt.bc)(et)), tt.replayShaderPack(et)
          },
          meshPending: () => {
            var tt, Vt;
            return null !== (tt = null === (Vt = et.lastHeader) || void 0 === Vt ? void 0 : Vt.renderPending) && void 0 !== tt ? tt : 0
          },
          viewerOpen: uq.e,
          download: tt => {
            (0, bq.f)(tt)
          }
        });
        this.runtime = lt, Ot.replay = lt.sink, (0, Kq.q)(lt);
        const Et = new Yq({
          live: () => {
            var tt;
            return !et.isStopped && !0 === (null === (tt = lt.currentViewer) || void 0 === tt ? void 0 : tt.inPlayback)
          },
          cmd: mt,
          dragScale: eD
        });
        this.freecam = Et, (0, Kq.o)(Et), this.recordedOptions = function(tt, et) {
          const Vt = pV.ob,
            Ot = Vt.map(((Vt, Ot) => et.subscribe(Vt, (et => {
              tt.setOption(Ot, Jd(et))
            }))));
          return {
            sendAll() {
              Vt.forEach(((Vt, Ot) => {
                tt.setOption(Ot, Jd(et.get(Vt)))
              }))
            },
            stop() {
              for (const tt of Ot) tt()
            }
          }
        }(lt.recorder, tt.options), this.stops = [(0, qO.j)((tt => {
          Et.flush();
          try {
            this.replay.beforeFrame(tt)
          } catch (et) {
            this.deps.reportFault("replayFrame", et)
          }
        })), (0, qO.t)(((tt, et) => {
          try {
            this.recorder.afterFrame(), et && !this.drawn && (this.drawn = !0, this.recorder.viewDrawn())
          } catch (Vt) {
            this.deps.reportFault("recorderFrame", Vt)
          }
          try {
            lt.afterFrame(tt)
          } catch (Vt) {
            this.deps.reportFault("replayRuntime", Vt)
          }
        })), Cd(lt), () => {
          this.recordedOptions.stop()
        }, bd(lt.recorder), (0, Aq.i)((tt => {
          let {
            action: et,
            down: Vt
          } = tt;
          var Ot;
          Vt && (null === (Ot = (0, Kq.g)()) || void 0 === Ot || Ot.keyDown(et))
        }))];
        const ft = () => {
          const tt = lt.currentViewer;
          return !0 === (null === tt || void 0 === tt ? void 0 : tt.isOpen) ? tt : null
        };
        (0, Jq.e)({
          open: (tt, et) => this.open(tt, et),
          replayKey: () => {
            var tt, et;
            return null !== (tt = null === (et = ft()) || void 0 === et ? void 0 : et.id) && void 0 !== tt ? tt : null
          },
          saveRefusal: () => {
            var tt, et;
            return null !== (tt = null === (et = ft()) || void 0 === et ? void 0 : et.saveRefusal) && void 0 !== tt ? tt : null
          },
          encode: () => {
            var tt, et;
            return null !== (tt = null === (et = ft()) || void 0 === et ? void 0 : et.save()) && void 0 !== tt ? tt : Promise.resolve(null)
          },
          fileHandle: () => {
            var tt, et;
            return null !== (tt = null === (et = lt.currentViewer) || void 0 === et ? void 0 : et.fileHandle) && void 0 !== tt ? tt : null
          },
          markSaved: (tt, et) => {
            var Vt;
            null === (Vt = lt.currentViewer) || void 0 === Vt || Vt.markSaved(tt, et)
          }
        })
      }
      netEvent(tt) {
        if ("connection" === tt.type)
          if (tt.phase === lt.H.Activated) {
            this.activeConn = tt.conn;
            const et = this.deps.sessionInfo(tt.conn);
            null !== et && (this.runtime.activated({
              lobbyType: (0, St.u)(et.lobbyName),
              gameNameWithVariation: et.gameNameWithVariation,
              lobbyName: et.lobbyName
            }), this.recordedOptions.sendAll())
          } else tt.phase !== lt.H.Left && tt.phase !== lt.H.Closed || tt.conn !== this.activeConn || (this.activeConn = 0, this.runtime.recorder.closed())
      }
      stop() {
        if (!this.stopped) {
          this.stopped = !0;
          for (const tt of this.stops) tt();
          this.runtime.end(), this.entityHooks.ended(), this.replay.stop(), this.recorder.dispose(), (0, Kq.l)() === this.runtime && (0, Kq.q)(null), (0, Kq.h)() === this.freecam && (0, Kq.o)(null), (0, Jq.e)(vd), null !== this.bench && window.wasmReplayBench === this.bench && (window.wasmReplayBench = void 0)
        }
      }
      async open(tt, et) {
        const {
          running: Vt
        } = this.deps;
        if (Vt.isStopped) throw new Error(Cq.d.coreStopped.text);
        if (tt.byteLength > 67108864) throw new Error(Cq.d.cantOpen.text);
        let Ot;
        try {
          Ot = await async function(tt) {
            const et = await tt.loadViewer();
            return et.inPlayback || (0, qO.C)().leaveGame(null), et
          }(this.runtime)
        } catch (qt) {
          throw console.warn(`${yd} the replay viewer didn't load`, qt), new Error(Cq.d.viewerLoadFailed.text)
        }
        if (Vt.isStopped) throw new Error(Cq.d.coreStopped.text);
        await Ot.open(tt, et)
      }
    }
    var Rd = Vt(2043);

    function Id(tt, et) {
      const {
        aux: Vt,
        payload: Ot
      } = function(tt) {
        return {
          aux: tt.reset ? lt.nc.ResetFirst : 0,
          payload: Zd(tt.changes)
        }
      }(et);
      tt.queueOptions(Vt, Ot) && (et.reset && Rd.b.reset(), Rd.b.apply(et.changes))
    }
    const Pd = new TextEncoder;

    function Zd(tt) {
      const et = new Ld;
      return kd(et, tt), et.bytes()
    }
    class Ld {
      constructor() {
        this.buf = new Uint8Array(256), this.view = new DataView(this.buf.buffer), this.len = 0
      }
      room(tt) {
        if (this.len + tt <= this.buf.length) return;
        const et = new Uint8Array(Math.max(2 * this.buf.length, this.len + tt));
        et.set(this.buf.subarray(0, this.len)), this.buf = et, this.view = new DataView(et.buffer)
      }
      u8(tt) {
        this.room(1), this.buf[this.len++] = tt
      }
      tagged(tt, et, Vt) {
        this.room(1 + et), this.buf[this.len++] = tt, 1 === et ? this.view.setUint8(this.len, Vt) : 2 === et ? this.view.setUint16(this.len, Vt) : this.view.setUint32(this.len, Vt), this.len += et
      }
      signed(tt, et, Vt) {
        this.room(1 + et), this.buf[this.len++] = tt, 1 === et ? this.view.setInt8(this.len, Vt) : 2 === et ? this.view.setInt16(this.len, Vt) : this.view.setInt32(this.len, Vt), this.len += et
      }
      f64(tt) {
        this.room(9), this.buf[this.len++] = 203, this.view.setFloat64(this.len, tt), this.len += 8
      }
      raw(tt) {
        this.room(tt.length), this.buf.set(tt, this.len), this.len += tt.length
      }
      bytes() {
        return this.buf.slice(0, this.len)
      }
    }

    function Fd(tt, et, Vt, Ot, qt, Dt, mt) {
      et < Ot ? tt.u8(Vt | et) : null !== qt && et < 256 ? tt.tagged(qt, 1, et) : et < 65536 ? tt.tagged(Dt, 2, et) : tt.tagged(mt, 4, et)
    }

    function kd(tt, et) {
      switch (typeof et) {
        case "undefined":
          return void tt.raw(Gd);
        case "boolean":
          return void tt.u8(et ? 195 : 194);
        case "number":
          return void
          function(tt, et) {
            et >>> 0 === et ? et < 128 ? tt.u8(et) : et < 256 ? tt.tagged(204, 1, et) : et < 65536 ? tt.tagged(205, 2, et) : tt.tagged(206, 4, et) : (et | 0) === et ? et >= -32 ? tt.u8(255 & et) : et >= -128 ? tt.signed(208, 1, et) : et >= -32768 ? tt.signed(209, 2, et) : tt.signed(210, 4, et) : tt.f64(et)
          }(tt, et);
        case "string": {
          const Vt = Pd.encode(et);
          return Fd(tt, Vt.length, 160, 32, 217, 218, 219), void tt.raw(Vt)
        }
        case "object":
          break;
        default:
          return void tt.u8(192)
      }
      if (null === et) tt.u8(192);
      else if (Array.isArray(et)) {
        Fd(tt, et.length, 144, 16, null, 220, 221);
        for (const Vt of et) kd(tt, Vt)
      } else if (et instanceof Uint8Array) Fd(tt, et.length, 0, 0, 196, 197, 198), tt.raw(et);
      else {
        const Vt = Object.keys(et);
        Fd(tt, Vt.length, 128, 0, null, 222, 223);
        for (const Ot of Vt) kd(tt, Ot), kd(tt, et[Ot])
      }
    }
    const Gd = new Uint8Array([212, 0, 0]);
    var zd = Vt(42838),
      od = Vt(42845),
      rd = Vt(41141),
      Ud = Vt(41180),
      Ad = Vt(2965);
    const Yd = [1e3, 3e3, 9e3];
    class Bd {
      constructor(tt) {
        this.host = tt, this.sets = new Map, this.table = [], this.generation = 0, this.df = !1
      }
      onEvent(tt) {
        const et = function(tt) {
          if (tt.byteLength !== lt.Bd) return null;
          const et = new DataView(tt.buffer, tt.byteOffset, tt.byteLength);
          return {
            want: et.getUint16(0, !0),
            release: et.getUint16(2, !0)
          }
        }(tt);
        et && !this.df && (et.release !== lt.Cd && this.release(et.release), et.want !== lt.Cd && this.want(et.want))
      }
      reset(tt) {
        if (!this.df) {
          for (const [tt, et] of this.sets) "ready" === et.state && this.releaseAll(et.distinct), this.sets.delete(tt);
          this.table = tt, this.generation++
        }
      }
      dispose() {
        if (this.df) return;
        this.df = !0, this.generation++, this.table = [];
        const tt = [...this.sets.values()];
        this.sets.clear();
        let et = null;
        for (const Ot of tt)
          for (const tt of "ready" === Ot.state ? Ot.distinct : []) try {
            this.host.WOt(tt)
          } catch (Vt) {
            et ??= {
              error: Vt
            }
          }
        if (et) throw et.error
      }
      isReady(tt) {
        var et;
        return "ready" === (null === (et = this.sets.get(tt)) || void 0 === et ? void 0 : et.state)
      }
      want(tt) {
        const et = this.sets.get(tt);
        if ("loading" === (null === et || void 0 === et ? void 0 : et.state)) return et.wanted = !0, void this.capAnswer(tt, et);
        if ("ready" === (null === et || void 0 === et ? void 0 : et.state)) return void this.host.sendReady(xd(tt, et.images, et.size));
        const Vt = this.table[tt];
        if (!Vt || 1 !== Vt.urls.length && Vt.urls.length !== pV.ec.CubeFaces) return this.host.sendReady(Td(tt)), void this.host.onLoadFailed(tt, "", new Error(`no image set ${tt}`));
        const Ot = {
          state: "loading",
          wanted: !0
        };
        this.sets.set(tt, Ot), this.load(tt, Vt, Ot, this.generation, 0), this.capAnswer(tt, Ot)
      }
      capAnswer(tt, et) {
        this.host.wait(4e3, (() => {
          this.sets.get(tt) === et && et.wanted && this.host.sendReady(Td(tt))
        }))
      }
      load(tt, et, Vt, Ot, qt) {
        const Dt = [...new Set(et.urls)];
        Promise.allSettled(Dt.map((tt => this.host.loadImage(tt, et.orientation)))).then((mt => {
          const dt = mt.flatMap((tt => "fulfilled" === tt.status ? [tt.value] : [])),
            jt = Ot === this.generation && this.sets.get(tt) === Vt,
            Ht = mt.findIndex((tt => "rejected" === tt.status));
          if (!jt || !Vt.wanted) return this.df ? void this.releaseAfterDispose(dt.map(pd)) : (this.releaseAll(dt.map(pd)), void(jt && this.sets.delete(tt)));
          Ht < 0 ? this.loaded(tt, et, Dt, dt) : (this.releaseAll(dt.map(pd)), this.host.sendReady(Td(tt)), qt < Yd.length ? this.host.wait(Yd[qt], (() => {
            Ot === this.generation && this.sets.get(tt) === Vt && (Vt.wanted ? this.load(tt, et, Vt, Ot, qt + 1) : this.sets.delete(tt))
          })) : (this.sets.delete(tt), this.host.onLoadFailed(tt, Dt[Ht], mt[Ht].reason)))
        }))
      }
      loaded(tt, et, Vt, Ot) {
        const [qt] = Ot, Dt = [qt.width, qt.height], mt = Ot.every((tt => tt.width === Dt[0] && tt.height === Dt[1])), dt = et.urls.length === pV.ec.CubeFaces;
        if (!mt || Dt[0] <= 0 || Dt[1] <= 0 || Dt[0] > 65535 || Dt[1] > 65535 || dt && Dt[0] !== Dt[1]) {
          this.releaseAll(Ot.map(pd)), this.sets.delete(tt), this.host.sendReady(Td(tt));
          const Vt = Ot.map((tt => `${tt.width}x${tt.height}`));
          return void this.host.onLoadFailed(tt, et.urls[0], new Error(`set ${tt}'s images can't make its texture: ${Vt.join(", ")}`))
        }
        const jt = et.urls.map((tt => Ot[Vt.indexOf(tt)].id)),
          Ht = Ot.map(pd);
        this.sets.set(tt, {
          state: "ready",
          images: jt,
          distinct: Ht,
          size: Dt
        }), this.host.sendReady(xd(tt, jt, Dt))
      }
      release(tt) {
        const et = this.sets.get(tt);
        "loading" === (null === et || void 0 === et ? void 0 : et.state) ? et.wanted = !1: "ready" === (null === et || void 0 === et ? void 0 : et.state) && (this.releaseAll(et.distinct), this.sets.delete(tt))
      }
      releaseAll(tt) {
        for (const et of tt) this.host.WOt(et)
      }
      releaseAfterDispose(tt) {
        for (const et of tt) try {
          this.host.WOt(et)
        } catch {}
      }
    }

    function pd(tt) {
      return tt.id
    }

    function xd(tt, et, Vt) {
      const Ot = new Uint8Array(pV.ec.SkyImagesReadyBytes),
        qt = new DataView(Ot.buffer);
      return qt.setUint16(0, tt, !0), qt.setUint16(2, et.length, !0), qt.setUint16(4, Vt[0], !0), qt.setUint16(6, Vt[1], !0), et.slice(0, pV.ec.CubeFaces).forEach(((tt, et) => {
        qt.setUint32(8 + 4 * et, tt, !0)
      })), Ot
    }

    function Td(tt) {
      const et = new Uint8Array(pV.ec.SkyImagesReadyBytes),
        Vt = new DataView(et.buffer);
      return Vt.setUint16(0, tt, !0), Vt.setUint16(2, pV.ec.Failed, !0), et
    }
    let gd = Promise.resolve();
    async function sd(tt, et) {
      let Vt;
      try {
        Vt = await (0, Ad.I)(tt)
      } catch (Dt) {
        throw new rd.b("fetch", tt, {
          cause: Dt
        })
      }
      const Ot = gd.then((() => async function(tt, et) {
        const Vt = new Blob([tt.slice()]);
        let Ot = await createImageBitmap(Vt, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: et
        });
        const qt = 1024 / Math.max(Ot.width, Ot.height);
        if (qt < 1) {
          const tt = Ot;
          try {
            Ot = await createImageBitmap(tt, {
              resizeWidth: Math.max(1, Math.round(tt.width * qt)),
              resizeHeight: Math.max(1, Math.round(tt.height * qt)),
              resizeQuality: "high",
              premultiplyAlpha: "none",
              colorSpaceConversion: "none"
            })
          } finally {
            tt.close()
          }
        }
        return Ot
      }(Vt, et)));
      let qt;
      gd = Ot.catch((() => {}));
      try {
        qt = await Ot
      } catch (Dt) {
        throw new rd.b("decode", tt, {
          cause: Dt
        })
      }
      return {
        id: (0, rd.n)(qt),
        width: qt.width,
        height: qt.height
      }
    }
    var nd = Vt(2219),
      tj = Vt(34207),
      ej = Vt(39428);
    const Vj = nd.f.length,
      Oj = new Set([...nd.f, "earth"]);

    function qj(tt) {
      const et = [],
        Vt = [],
        Ot = (tt, Ot) => {
          if ("custom" === Ot.type) {
            Vt.push({
              id: tt,
              kind: pV.ec.KindCustom,
              set: et.length,
              earth: null
            });
            const qt = [Ot.px, Ot.py, Ot.pz, Ot.nx, Ot.ny, Ot.nz];
            et.push({
              urls: (0, ej.f)(qt),
              orientation: "none"
            })
          } else Vt.push({
            id: tt,
            kind: pV.ec.KindEarth,
            set: 0,
            earth: Ot
          })
        };
      nd.f.forEach(((et, Vt) => {
        var qt;
        Ot(Vt, null !== (qt = Dj(tt[et])) && void 0 !== qt ? qt : tj.q[et])
      }));
      const qt = Dj(tt.earth);
      "earth" === (null === qt || void 0 === qt ? void 0 : qt.type) && Ot(Vj, qt);
      const Dt = new TextEncoder,
        mt = [],
        dt = [];
      for (const [Et, ft] of Object.entries(tt)) {
        const tt = Oj.has(Et) ? null : Dj(ft);
        if (null === tt) continue;
        const et = Dt.encode(Et);
        et.length > 255 ? dt.push(`Ignoring texture pack skybox ${Et}, whose name is over 255 bytes`) : mt.length === pV.ec.MaxAdded ? dt.push(`Ignoring texture pack skybox ${Et}, past the ${pV.ec.MaxAdded} skies a pack can add`) : (mt.push(et), Ot(pV.ec.AddedId, tt))
      }
      const jt = et.length;
      et.push({
        urls: tj.i.map((tt => tj.k + tt)),
        orientation: "none"
      }), et.push({
        urls: [tj.o],
        orientation: "flipY"
      }), et.push({
        urls: [tj.e],
        orientation: "flipY"
      });
      const Ht = pV.ec.SkyTableHeaderBytes + Vt.length * pV.ec.SkyTableEntryBytes,
        Xt = new Uint8Array(Ht + mt.reduce(((tt, et) => tt + 1 + et.length), 0)),
        Qt = new DataView(Xt.buffer);
      Qt.setUint16(0, jt, !0), Qt.setUint16(2, jt + 1, !0), Qt.setUint16(4, jt + 2, !0), Qt.setUint16(6, Vt.length, !0), Vt.forEach(((tt, et) => {
        const Vt = pV.ec.SkyTableHeaderBytes + et * pV.ec.SkyTableEntryBytes;
        Qt.setUint16(Vt, tt.id, !0), Qt.setUint8(Vt + 2, tt.kind);
        const Ot = Vt + 4;
        tt.earth ? function(tt, et, Vt) {
          const Ot = tt;
          let qt = 0,
            Dt = 0;
          for (const [mt, dt] of mj) {
            const tt = Ot[mt];
            "number" === typeof tt && Number.isFinite(tt) && (et.setFloat32(Vt + 4 * dt, tt, !0), qt |= 1 << dt)
          }
          for (const [mt, dt, jt] of dj) {
            const tt = Ot[mt];
            Array.isArray(tt) && 3 === tt.length && tt.every((tt => "number" === typeof tt && Number.isFinite(tt))) && (tt.forEach(((tt, Ot) => {
              et.setFloat32(Vt + jt + 4 * Ot, tt, !0)
            })), qt |= dt)
          }
          jj.forEach(((tt, Dt) => {
            let [mt, dt] = tt;
            const jt = Ot[mt];
            "number" === typeof jt && Number.isFinite(jt) && (et.setFloat32(Vt + pV.q.CameraOffsetAt + 4 * Dt, jt, !0), qt |= dt)
          }));
          for (const [mt, dt] of Hj) {
            const tt = Ot[mt];
            null !== tt && void 0 !== tt && (qt |= dt, tt && (Dt |= dt >>> 14))
          }
          et.setUint32(Vt + pV.q.PresentAt, qt, !0), et.setUint8(Vt + pV.q.FlagsAt, Dt)
        }(tt.earth, Qt, Ot) : Qt.setUint16(Ot, tt.set, !0)
      }));
      let lt = Ht;
      for (const Et of mt) Xt[lt] = Et.length, Xt.set(Et, lt + 1), lt += 1 + Et.length;
      return {
        payload: Xt,
        sets: et,
        leftOut: dt
      }
    }

    function Dj(tt) {
      if ("object" !== typeof tt || null === tt) return null;
      const et = tt;
      if ("earth" === et.type) return tt;
      return "custom" === et.type && ["px", "py", "pz", "nx", "ny", "nz"].every((tt => {
        const Vt = et[tt];
        return "string" === typeof Vt && Vt.length > 0
      })) ? tt : null
    }
    const mj = [
        ["inclination", pV.q.Inclination],
        ["turbidity", pV.q.Turbidity],
        ["luminance", pV.q.Luminance],
        ["rayleigh", pV.q.Rayleigh],
        ["mieCoefficient", pV.q.MieCoefficient],
        ["mieDirectionalG", pV.q.MieDirectionalG],
        ["distance", pV.q.Distance],
        ["azimuth", pV.q.Azimuth]
      ],
      dj = [
        ["sunPosition", pV.q.SunPosition, pV.q.SunPositionAt],
        ["up", pV.q.Up, pV.q.UpAt],
        ["vertexTint", pV.q.VertexTint, pV.q.VertexTintAt]
      ],
      jj = [
        ["xCameraOffset", pV.q.CameraOffsetX],
        ["yCameraOffset", pV.q.CameraOffsetY],
        ["zCameraOffset", pV.q.CameraOffsetZ]
      ],
      Hj = [
        ["useSunPosition", pV.q.UseSunPosition],
        ["dithering", pV.q.Dithering],
        ["infiniteDistance", pV.q.InfiniteDistance]
      ];

    function Xj(tt, et, Vt) {
      const Ot = new lj({
        writeCmd: tt,
        warn: et,
        followPack: Qj(Vt, et)
      });
      return Ot.start(), Ot
    }

    function Qj(tt, et) {
      return Vt => {
        let Ot = () => {};
        const qt = tt((tt => {
          Ot(), Ot = () => {}, null !== tt ? Ot = tt.subscribe((tt => {
            Vt(function(tt, et, Vt) {
              if ("object" !== typeof tt || null === tt) return null;
              const Ot = tt.skyBoxes;
              if ("object" !== typeof Ot || null === Ot) return null;
              if ("player" === et) return Ot;
              return Object.fromEntries(Object.entries(Ot).filter((tt => {
                let [et, Ot] = tt;
                return !! function(tt) {
                  if ("object" !== typeof tt || null === tt) return !1;
                  return "earth" === tt.type || Object.entries(tt).every((tt => {
                    let [et, Vt] = tt;
                    return "type" === et || ("" === (Ot = Vt) || null !== function(tt) {
                      var et, Vt, Ot;
                      return "string" !== typeof tt ? null : null !== (et = null === (Vt = Ej.exec(tt)) || void 0 === Vt || null === (Ot = Vt.groups) || void 0 === Ot ? void 0 : Ot.base64) && void 0 !== et ? et : null
                    }(Ot));
                    var Ot
                  }))
                }(Ot) || (Vt(`Ignoring texture pack skybox ${et}, whose faces are not all data URLs`, null), !1)
              })))
            }(tt.pack, null === tt.gameSource ? "player" : "customGame", et))
          })) : Vt(null)
        }));
        return () => {
          qt(), Ot()
        }
      }
    }
    class lj {
      constructor(tt) {
        var et, Vt, Ot;
        this.host = tt, this.loader = void 0, this.wait = void 0, this.queue = [], this.written = null, this.stopFollowing = () => {}, this.df = !1, this.wait = null !== (et = tt.wait) && void 0 !== et ? et : (tt, et) => {
          setTimeout(et, tt)
        }, this.loader = new Bd({
          loadImage: null !== (Vt = tt.loadImage) && void 0 !== Vt ? Vt : sd,
          WOt: null !== (Ot = tt.WOt) && void 0 !== Ot ? Ot : rd.p,
          sendReady: tt => {
            this.queue.push({
              kind: pV.ec.SkyImagesReady,
              payload: tt
            })
          },
          onLoadFailed: (et, Vt, Ot) => {
            tt.warn(`sky image set ${et} (${Vt}) didn't load: the last sky stays`, Ot)
          },
          wait: this.wait
        })
      }
      start() {
        this.wait(Ud.e, (() => {
          null === this.written && this.write({})
        })), this.stopFollowing = this.host.followPack((tt => {
          this.write(null !== tt && void 0 !== tt ? tt : {})
        }))
      }
      onEvent(tt) {
        this.loader.onEvent(tt)
      }
      drain() {
        if (0 === this.queue.length) return;
        let tt = 0;
        for (; tt < this.queue.length && this.host.writeCmd(this.queue[tt].kind, 0, this.queue[tt].payload);) tt++;
        tt > 0 && this.queue.splice(0, tt)
      }
      dispose() {
        this.df = !0, this.stopFollowing(), this.queue = [], this.loader.dispose()
      }
      write(tt) {
        if (this.df) return;
        const et = qj(tt);
        if (!(this.written && (Vt = this.written, Ot = et, Vt.payload.length === Ot.payload.length && Vt.payload.every(((tt, et) => tt === Ot.payload[et])) && Vt.sets.length === Ot.sets.length && Vt.sets.every(((tt, et) => {
            const Vt = Ot.sets[et];
            return tt.orientation === Vt.orientation && tt.urls.length === Vt.urls.length && tt.urls.every(((tt, et) => tt === Vt.urls[et]))
          }))))) {
          var Vt, Ot;
          for (const tt of et.leftOut) this.host.warn(tt, null);
          this.written = et, this.loader.reset(et.sets), this.queue = this.queue.filter((tt => tt.kind !== pV.ec.SkyImagesReady)), this.queue.push({
            kind: pV.ec.SkyTable,
            payload: et.payload
          })
        }
      }
    }
    const Ej = /^data:[\w.+/-]*;base64,(?<base64>[A-Za-z0-9+/]*={0,2})$/;
    var fj = Vt(2878),
      wj = Vt(3064),
      yj = Vt(329),
      Nj = Vt(209),
      aj = Vt(2883),
      Mj = Vt(2888),
      bj = Vt(304),
      Jj = Vt(312),
      Cj = Vt(2981),
      uj = Vt(2997),
      Kj = Vt(3008),
      hj = Vt(129),
      vj = Vt(366),
      Wj = Vt(41022);
    class Sj {
      constructor() {
        this.id = null, this.sentMs = null, this.roundTripMs = null, this.stopReplies = void 0, this.stopReplies = (0, Uq.j)(MO.J, (tt => {
          this.onReply((0, rq.h)(MO.J, tt), performance.now())
        }))
      }
      onFrame(tt, et) {
        null === this.id ? this.id = tt : tt !== this.id && (this.id = tt, this.sentMs = document.hidden ? null : et)
      }
      onVisibilityChange() {
        this.sentMs = null
      }
      onReply(tt, et) {
        tt === this.id && null !== this.sentMs && (this.roundTripMs = Math.round(et - this.sentMs), this.sentMs = null)
      }
      take() {
        const tt = this.roundTripMs;
        return this.roundTripMs = null, tt
      }
      stop() {
        this.stopReplies()
      }
    }
    class cj {
      constructor() {
        this.sampled = 0, this.timed = 0, this.frameUs = 0, this.primed = !1, this.windowTimed = 0, this.windowUs = 0
      }
      onFrame(tt, et, Vt, Ot) {
        const qt = tt - this.sampled >>> 0,
          Dt = et - this.timed >>> 0,
          mt = Vt - this.frameUs >>> 0,
          dt = this.primed;
        return this.sampled = tt, this.timed = et, this.frameUs = Vt, this.primed = !0, !(!dt || qt > 64 || Dt > 64) && (Ot && mt <= 1e6 * Dt && (this.windowTimed += Dt, this.windowUs += mt), Ot && qt > 0)
      }
      reset() {}
      snapshotAndReset() {
        const tt = this.windowTimed > 0 ? this.windowUs / this.windowTimed / 1e3 : null;
        return this.windowTimed = 0, this.windowUs = 0, {
          passMs: tt,
          submitToDoneMs: null
        }
      }
    }
    const Rj = {
      lagP50Ms: null,
      lagP90Ms: null
    };
    class Ij {
      constructor() {
        this.samples = new Float64Array(4096), this.count = 0
      }
      add(tt, et) {
        const Vt = Math.min(4096, this.count + et);
        this.samples.fill(tt, this.count, Vt), this.count = Vt
      }
      clear() {
        this.count = 0
      }
      take() {
        const tt = this.count;
        if (this.count = 0, tt < 30) return Rj;
        const et = this.samples.subarray(0, tt).sort(),
          Vt = Vt => et[Math.min(tt - 1, Math.floor(Vt * tt))];
        return {
          lagP50Ms: Vt(.5),
          lagP90Ms: Vt(.9)
        }
      }
    }
    class Pj {
      constructor() {
        this.word = 0, this.lagUs = 0, this.primed = !1, this.lags = new Ij
      }
      onFrame(tt, et) {
        const Vt = tt.headerWord(pV.J.Pacing),
          Ot = tt.headerWord(pV.J.PacingLagUs),
          qt = (Vt >>> pV.bb.LagsShift) - (this.word >>> pV.bb.LagsShift) & pV.bb.CountMask,
          Dt = qt > 0 ? (Ot - this.lagUs >>> 0) / qt / 1e3 : 0,
          mt = this.primed && qt <= 64 && Dt <= 6e4;
        this.word = Vt, this.lagUs = Ot, this.primed = !0, mt && et && qt > 0 && 0 !== (Vt & pV.bb.Defaulted) && this.lags.add(Dt, qt)
      }
      onJoin() {
        this.lags.clear()
      }
      snapshotAndReset(tt) {
        return tt ? this.lags.take() : (this.lags.clear(), Rj)
      }
    }
    var Zj = Vt(348);

    function Lj() {
      return Date.now() - performance.now()
    }
    class Fj {
      constructor() {
        this.rafs = 0, this.Pd = 0, this.heldAtRaf = -1, this.heldRunStartMs = 0, this.startMs = performance.now(), this.startClockOffsetMs = Lj(), this.focused = document.hasFocus(), this.blurred = !1, this.resumed = !1, this.embedded = (0, Zj.f)(), this.onBlur = () => {
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
        (0 === this.Pd || this.heldAtRaf < this.rafs - 1) && (this.heldRunStartMs = 1 === this.rafs ? this.startMs : performance.now()), this.Pd++, this.heldAtRaf = this.rafs
      }
      words(tt) {
        const et = tt ? this.rafs - 1 : this.rafs;
        return function(tt) {
          let et = 0 === tt.rafs ? "raf:none" : "raf:some";
          return tt.Pd > 0 && (et += " pace:held"), tt.heldRunMs > 1e4 && (et += " pace:stalled"), tt.blurred && (et += " blur"), tt.resumed && (et += " resumed"), tt.embedded && (et += " embedded"), tt.clockGainMs > 2e3 && (et += " clockjump"), et
        }({
          clockGainMs: Lj() - this.startClockOffsetMs,
          rafs: et,
          Pd: this.Pd,
          heldRunMs: this.Pd > 0 && this.heldAtRaf === et ? performance.now() - this.heldRunStartMs : 0,
          blurred: this.blurred,
          resumed: this.resumed,
          embedded: this.embedded
        })
      }
      restart(tt) {
        this.rafs = 0, this.Pd = 0, this.heldAtRaf = -1, this.startMs = tt, this.startClockOffsetMs = Lj(), this.blurred = !this.focused, this.resumed = !1
      }
      stop() {
        window.removeEventListener("blur", this.onBlur), window.removeEventListener("focus", this.onFocus), document.removeEventListener("freeze", this.onLifecycle), document.removeEventListener("resume", this.onLifecycle)
      }
    }
    var kj = Vt(34323),
      Gj = Vt(2984),
      zj = Vt(41075),
      oj = Vt(34317),
      rj = Vt(2894),
      Uj = Vt(2987);
    const Aj = {
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

    function ij(tt) {
      return new Yj(tt)
    }
    class Yj {
      constructor(tt) {
        this.shell = tt, this.tracker = new Mj.e, this.gpu = new cj, this.pacing = new Pj, this.timers = [], this.inGameAtLastFlush = !1, this.hasFlushedSinceConnect = !1, this.sendsDropped = 0, this.pendingLightFailures = 0, this.unsentPage = null, this.game = null, this.fpsSpanStartMs = -1, this.fpsFrames = 0, this.fpsOverTime = null, this.firstSpanFps = null, this.initialFps = null, this.ping = new Sj, this.pacedCpuMs = 0, this.sendsStartMs = -1, this.sendsEndMs = -1, this.frameDebug = null, this.lastDrawnMs = -1, this.stallPending = !1, this.stallGap = new Fj, this.onVisibility = () => {
          this.tracker.onVisibilityChange(), this.ping.onVisibilityChange(), this.lastDrawnMs = -1, !document.hidden && this.fpsSpanStartMs >= 0 && (this.fpsFrames = 0, this.fpsSpanStartMs = performance.now())
        }, this.onBeforeUnload = () => {
          this.checkMainStall(performance.now(), !1), this.lastDrawnMs = -1
        }, (0, kj.b)(tt.backend, tt.canvas, tt.adapterVendor), this.tracker.start((() => !tt.inGame()), this.gpu, "wasm"), document.addEventListener("visibilitychange", this.onVisibility), window.addEventListener("beforeunload", this.onBeforeUnload), (0, rj.b)("wasm", (() => {
          const {
            n: et,
            sampleCount: Vt
          } = (0, zj.g)();
          return `${tt.backend}, quality steps aim at up to ${Uj.e.target.maxFps} fps, pixel n ${et}, msaa ${Vt}`
        }), (et => {
          et.setLoadCounts(tt.readLoadCounts), this.frameDebug = et
        })), this.timers.push(setInterval((() => {
          this.flush(), this.fpsOverTime = null, this.initialFps = null
        }), 1e4), setInterval((() => {
          this.followGame() && this.shell.canSend() && (this.hasFlushedSinceConnect || (this.flush(), this.hasFlushedSinceConnect = !0))
        }), 250))
      }
      animationFrame(tt) {
        var et;
        this.stallGap.animationFrame(), this.tracker.onAnimationFrame(tt), null === (et = this.frameDebug) || void 0 === et || et.animationFrame()
      }
      sendsWent(tt, et, Vt) {
        this.ping.onFrame(tt.headerWord(pV.J.PingSent), et), this.sendsStartMs = et, this.sendsEndMs = Vt
      }
      frameRan(tt, et, Vt, Ot) {
        var qt;
        this.ping.onFrame(tt.headerWord(pV.J.PingSent), Vt);
        const Dt = this.tracker;
        this.pacing.onFrame(tt, Dt.isSampling());
        const mt = tt.headerWord(pV.J.TickUs) / 1e3 + (0, qO.E)();
        var dt;
        (Dt.bM(mt), null === (qt = this.frameDebug) || void 0 === qt || qt.wasmFrame(tt, et, Vt, Ot, Dt.isSampling(), mt), null !== this.game) && (null === (dt = this.frameDebug) || void 0 === dt || dt.inGame());
        const jt = this.sendsStartMs >= et ? this.sendsEndMs - this.sendsStartMs : 0,
          Ht = Math.max(0, Vt - et - mt - jt);
        if ("drawn" !== Ot) return void("paced" === Ot ? (this.pacedCpuMs += Ht, this.stallGap.paced()) : "skipped" === Ot && (this.lastDrawnMs = -1));
        this.followGame(), this.checkMainStall(et, !0), Dt.onFrameStart(et);
        this.gpu.onFrame(tt.headerWord(pV.J.GpuSampled), tt.headerWord(pV.J.GpuTimed), tt.headerWord(pV.J.GpuFrameUs), Dt.isSampling()) && Dt.onGpuSampleStarted(), Dt.onFrameCpu(Ht + this.pacedCpuMs), this.pacedCpuMs = 0, this.countFpsFrame(et)
      }
      framePaced() {
        var tt;
        this.stallGap.paced(), null === (tt = this.frameDebug) || void 0 === tt || tt.wasmPeekPaced(this.tracker.isSampling())
      }
      stop() {
        for (const tt of this.timers) clearInterval(tt);
        this.timers.length = 0, document.removeEventListener("visibilitychange", this.onVisibility), window.removeEventListener("beforeunload", this.onBeforeUnload), this.stallGap.stop(), this.ping.stop(), this.tracker.limiterTelemetry.stop()
      }
      followGame() {
        const tt = this.shell.joinedGame();
        if (tt !== this.game) {
          var et;
          if (this.game = tt, null !== tt) null === (et = this.frameDebug) || void 0 === et || et.joined();
          this.tracker.snapshotAndReset(), this.pacing.onJoin(), this.hasFlushedSinceConnect = !1, this.inGameAtLastFlush = !1, this.fpsSpanStartMs = -1, this.fpsFrames = 0, this.pacedCpuMs = 0, this.firstSpanFps = null, this.fpsOverTime = null, this.initialFps = null, this.lastDrawnMs = -1
        }
        return null !== tt
      }
      checkMainStall(tt, et) {
        if (!this.tracker.isSampling()) return void(this.lastDrawnMs = -1);
        const Vt = this.tracker.limiterTelemetry.longAnimationFrameTracker,
          Ot = this.lastDrawnMs < 0 ? 0 : tt - this.lastDrawnMs;
        this.lastDrawnMs = tt;
        const qt = !this.stallPending && Ot > 5e3,
          Dt = qt ? this.stallGap.words(et) : "";
        this.stallGap.restart(tt), this.stallPending || (qt ? (this.stallPending = !0, setTimeout((() => {
          this.stallPending = !1, this.shell.mainStalled(Ot, Vt.blockingSinceMark(), Dt)
        }), 0)) : Vt.markFrame(tt))
      }
      countFpsFrame(tt) {
        if (this.fpsSpanStartMs < 0) {
          if (!this.shell.inGame()) return;
          this.fpsSpanStartMs = tt
        }
        this.fpsFrames++;
        const et = tt - this.fpsSpanStartMs;
        if (!(et < Kj.b)) {
          if (!document.hidden) {
            const tt = 1e3 * this.fpsFrames / et;
            this.firstSpanFps ??= tt, this.initialFps = this.firstSpanFps, this.fpsOverTime = tt
          }
          this.fpsFrames = 0, this.fpsSpanStartMs = tt
        }
      }
      flush() {
        const tt = this.followGame(),
          {
            cpuFrameMs: et,
            refreshHz: Vt,
            cpuBottleneck: qt,
            frameIntervalCv: Dt,
            ...mt
          } = this.tracker.snapshotAndReset(),
          dt = this.shell.inGame(),
          jt = dt && this.inGameAtLastFlush,
          Ht = jt ? mt : (0, aj.e)(mt),
          Xt = this.pacing.snapshotAndReset(jt);
        if (this.inGameAtLastFlush = dt, this.pendingLightFailures += this.shell.takeFailedMeshJobs(), !tt || !this.shell.canSend()) return;
        const Qt = performance.now(),
          Et = (0, uj.u)((0, uj.q)(Qt), this.unsentPage),
          wt = function(tt, et, Vt, qt, Dt, mt, dt, jt) {
            var Ht, Xt, Qt, lt, Et;
            const ft = {},
              {
                canvas: wt
              } = tt,
              yt = (0, Cj.j)({
                refreshHz: et.refreshHz,
                msaa: tt.msaa(),
                autoMsaaOff: (0, oj.e)()
              });
            for (const Nt of (0, wj.e)()) {
              const Mt = Nt.name;
              let bt;
              if ((0, yj.x)(Mt)) bt = (0, uj.d)(Mt);
              else if ((0, uj.g)(Mt)) bt = jt[Mt];
              else if ((0, Cj.m)(Mt)) bt = yt[Mt];
              else switch (Mt) {
                case "fps":
                  bt = qt;
                  break;
                case "Lj":
                  bt = Dt;
                  break;
                case "oj":
                  bt = (0, Gj.y)((0, zj.g)().n);
                  break;
                case "rj":
                  bt = Math.max(wt.width, wt.height);
                  break;
                case "Uj":
                  bt = Math.min(wt.width, wt.height);
                  break;
                case "Aj":
                  bt = navigator.hardwareConcurrency || null;
                  break;
                case "ij":
                  bt = (0, Tq.getWebGpuSupported)();
                  break;
                case "Yj":
                  bt = null === tt.fallbackReason ? null : Aj[tt.fallbackReason];
                  break;
                case "Bj":
                  bt = et.cpuFrameMs;
                  break;
                case "pj":
                  bt = et.refreshHz;
                  break;
                case "xj":
                  bt = et.cpuBottleneck;
                  break;
                case "Tj":
                  bt = et.frameIntervalCv;
                  break;
                case "gj":
                  bt = et.frameMs;
                  break;
                case "sj":
                  bt = et.tickMs;
                  break;
                case "VH":
                  bt = et.mainBusyShare;
                  break;
                case "OH":
                  bt = et.mainProbeDelayMs;
                  break;
                case "nj":
                  bt = et.longAnimationFramesPerMin;
                  break;
                case "tH":
                  bt = et.longAnimationFrameTimeShare;
                  break;
                case "eH":
                  bt = et.longAnimationFrameScriptShare;
                  break;
                case "qH":
                  bt = et.gpuPassMs;
                  break;
                case "DH":
                  bt = et.gpuSubmitToDoneMs;
                  break;
                case "mH":
                  bt = Vt.lagP50Ms;
                  break;
                case "dH":
                  bt = Vt.lagP90Ms;
                  break;
                case "MH":
                  bt = (0, fj.j)(mt);
                  break;
                case "zj":
                  bt = dt;
                  break;
                case "jH":
                case "HH":
                case "XH":
                case "QH":
                case "lH":
                case "EH":
                case "fH":
                case "wH":
                case "yH":
                case "NH":
                case "aH":
                case "bH":
                case "JH":
                case "CH":
                case "uH":
                  bt = null;
                  break;
                case "GH":
                  bt = (0, Tq.getPlatformType)();
                  break;
                case "zH":
                  bt = (0, Tq.getGpuVendor)();
                  break;
                case "oH":
                  bt = Wj.c[tt.backend];
                  break;
                case "rH":
                  bt = (0, hj.d)();
                  break;
                case "UH":
                  bt = (0, Tq.getOperatingSystem)();
                  break;
                case "AH":
                  bt = (0, Tq.getTrafficSource)();
                  break;
                case "iH":
                  bt = null !== (Ht = Ot.b.get("gameEntrySource")) && void 0 !== Ht ? Ht : Nj.e;
                  break;
                case "YH":
                  bt = null !== (Xt = et.frameLimiter) && void 0 !== Xt ? Xt : Nj.e;
                  break;
                case "BH":
                  bt = (0, bj.j)();
                  break;
                case "pH":
                  bt = null !== (Qt = (0, Jj.b)()) && void 0 !== Qt ? Qt : Nj.e;
                  break;
                case "xH":
                  bt = (0, bj.e)(wt.width, wt.height);
                  break;
                case "TH":
                  bt = (0, wj.g)(-(new Date).getTimezoneOffset());
                  break;
                case "nH":
                  bt = null !== (lt = tt.fallbackReason) && void 0 !== lt ? lt : Nj.e;
                  break;
                case "VX":
                  bt = "ready";
                  break;
                case "OX":
                  bt = (0, Tq.getSoftwareRenderer)();
                  break;
                case "sH":
                  bt = null !== tt.shaderPackReach() ? "true" : "false";
                  break;
                case "qX":
                  bt = null !== (Et = tt.shaderPackReach()) && void 0 !== Et && Et.sceneDepth ? "true" : "false";
                  break;
                case "DX": {
                  const et = tt.shaderPackReach();
                  bt = null !== et && void 0 !== et && et.sunShadow ? "all" : null !== et && void 0 !== et && et.airShadow ? "air" : "none";
                  break
                }
                case "mX":
                  bt = vj.A;
                  break;
                case "EX":
                  bt = (0, uj.i)();
                  break;
                case "gH": {
                  const et = tt.Rw();
                  bt = null === et ? Nj.e : String(et);
                  break
                }
                case "tX":
                case "eX":
                  bt = Nj.e;
                  break;
                default:
                  throw new Error(`Unhandled field name: ${Mt}`)
              }
              if (void 0 === bt) throw new Error(`Metric ${Mt} has no value`);
              ft[Mt] = bt
            }
            return ft
          }(this.shell, {
            cpuFrameMs: et,
            refreshHz: Vt,
            cpuBottleneck: qt,
            frameIntervalCv: Dt,
            ...Ht
          }, Xt, this.fpsOverTime, this.initialFps, this.pendingLightFailures, this.ping.take(), Et);
        if (! function(tt, et, Vt) {
            return (0, Ye.d)(), tt(ft.n.Send, et, Vt)
          }(this.shell.writeCmd, lt.zd, function(tt) {
            const et = (0, kt.g)((0, xe.f)(tt)),
              Vt = new Uint8Array(ft.je.BYTES + et.length);
            return new DataView(Vt.buffer).setUint16(0, xe.c.AnalyticsUpdate, !0), Vt.set(et, ft.je.BYTES), Vt
          }(wt))) return this.unsentPage = Et, void(0 === this.sendsDropped++ && console.warn("[wasm-client] an analytics update found the cmd ring full: dropped"));
        this.unsentPage = null, this.pendingLightFailures -= Math.min(this.pendingLightFailures, fj.f), (0, uj.m)(wt, "wasm", Qt)
      }
    }
    var Bj = Vt(39824);

    function pj(tt, et, Vt) {
      const Ot = new Map;
      return (0, Bj.c)(((tt, Vt, Ot) => et.qd(tt, Vt, Ot)), ((et, Vt, qt) => {
        const Dt = `${et},${Vt},${qt}`;
        return Ot.has(Dt) || Ot.set(Dt, (0, ze.d)(tt, et, Vt, qt)), Ot.get(Dt)
      }), Vt)
    }
    var xj = Vt(39827),
      Tj = Vt(41068);

    function gj(tt) {
      const et = null !== tt && 0 !== (ft.x.playerFlags(tt.api.apiView, 0) & ft.Pd.CursorAim);
      et !== (0, Tj.s)() && (0, Tj.S)(et, null !== tt)
    }

    function sj(tt) {
      return (0, aO.c)(MO.D, tt)
    }
    var nj = Vt(41222);
    const tH = new Dt.e((tt => Vt(42848)(`./${tt}/${tt}Client`)));
    let eH = null,
      VH = null;
    async function OH(tt) {
      eH ??= Vt.e(27).then((() => Vt(39360))).then((tt => {
        VH = tt.createDefaultClientPlugins
      }), (tt => {
        throw eH = null, tt
      })), await Promise.all([tH.load(tt), eH])
    }

    function qH(tt) {
      tt.load(new Fe(BO, new TO))
    }
    let DH = !1;
    const mH = new WeakMap;

    function dH(tt) {
      try {
        tt()
      } catch (et) {
        console.error("[bloxd-wasm-client] a session-end step failed", et)
      }
    }

    function jH(tt, et) {
      ! function() {
        var tt, et;
        AO.Howler.volume();
        const Vt = AO.Howler;
        null === (tt = Vt._autoResume) || void 0 === tt || tt.call(Vt), null === (et = Vt._autoSuspend) || void 0 === et || et.call(Vt)
      }(), et.audio.prepare();
      const Vt = new Jt(et.core, et.memory, et.audio);
      let Dt;
      try {
        Dt = new Nq(Vt, et.options)
      } catch (lt) {
        return tt.crash(Mq.B, lt), null
      }(0, jt.h)(aq(Vt, Dt));
      const Xt = new cd({
        running: tt,
        api: Vt,
        core: et.core,
        memory: et.memory,
        staleOr: et.staleOr,
        reportFault: et.reportReplayFault,
        options: et.options,
        sessionInfo: et.sessionInfo,
        replayShaderPack: et.replayShaderPack
      });
      (0, qO.x)();
      const Qt = new kO({
        api: Vt,
        tables: Dt,
        sessionInfo: et.sessionInfo,
        gameFactory: tt => tH.loadedFactory(tt),
        defaultPlugins: (tt, et, Vt, Ot) => {
          if (null === VH) throw new Error("The default plugins started before they loaded");
          return VH(tt, et, Vt, Ot)
        },
        serverOptions: et.options,
        onNetEvent: tt => {
          Xt.netEvent(tt), et.onNetEvent(tt)
        },
        setLocalOptions: et => {
          Id(tt, {
            changes: et,
            reset: !1
          })
        },
        playSound: (tt, Vt, Ot, qt, Dt, mt, dt) => et.audio.playGame(tt, Vt, Ot, qt, Dt, mt, dt),
        preloadSounds: tt => {
          et.audio.preload(function(tt) {
            const et = [];
            for (const Vt of tt) {
              const tt = Ze(Vt);
              tt >= 0 && et.push(Me[tt])
            }
            return et
          }(tt))
        },
        onSessionEnd: () => {
          dH(qt.k), dH(Oq), dH((() => {
            Ot.b.set({
              openInGameMenuName: null
            })
          })), dH((() => {
            et.audio.endSession()
          }))
        },
        beforeWrite: et.beforeWrite,
        beforeOp: et.beforeOp,
        cameraScreen: Vq,
        showCameraFacing: qq,
        onEventOverflow: et.onEventOverflow,
        screenBandY: dt.m,
        replayEntities: Xt.entityHooks,
        hasPackModel: et.hasPackModel
      });
      return Qt.attach(tt), mH.set(Qt, Xt), rO(Qt.items, et.audio),
        function(tt) {
          tt.setClientFreeCameraGrant("isDev", !1);
          const et = et => {
            tt.setClientFreeCameraGrant("hasDeveloperRank", et.playerHasRank("developer"))
          };
          (0, mt.n)("userContextUpdated", et)
        }(Qt), DH || (DH = !0, (0, mt.n)("appManagerUpdated|openInGameMenuName", (tt => {
          !tt && (0, Ht.k)().includes(Ht.c) && (0, Ht.m)(Ht.c)
        }))), Qt
    }

    function HH(tt) {
      try {
        tt.closeGame()
      } finally {
        var et;
        null === (et = mH.get(tt)) || void 0 === et || et.stop(), mH.delete(tt)
      }
    }
  },
  42848: (tt, et, Vt) => {
    var Ot = {
      "./bedwars/bedwarsClient": [39474, 9],
      "./bridgeBattle/bridgeBattleClient": [39483, 10],
      "./buildAFactory2/buildAFactory2Client": [38708, 76, 75, 74, 230, 225, 11],
      "./classic/classicClient": [39487, 12],
      "./clutch/clutchClient": [39496, 13],
      "./containmentBreach/containmentBreachClient": [39503, 224, 14],
      "./cooking/cookingClient": [39633, 15],
      "./defusal/defusalClient": [39641, 16],
      "./frontline/frontlineClient": [39650, 76, 75, 74, 17],
      "./goalRush/goalRushClient": [39655, 18],
      "./luckyBedwars/luckyBedwarsClient": [39658, 19],
      "./ninetyNineNights/ninetyNineNightsClient": [39661, 20],
      "./oneBlock/oneBlockClient": [39666, 21],
      "./plots/plotsClient": [39673, 247, 224, 22],
      "./pvpCiv/pvpCivClient": [39755, 23],
      "./skyIslands/skyIslandsClient": [39763, 24],
      "./skyblock/skyblockClient": [38744, 76, 239, 230, 192, 25],
      "./tsunami/tsunamiClient": [39766, 26]
    };

    function qt(tt) {
      if (!Vt.o(Ot, tt)) return Promise.resolve().then((() => {
        var et = new Error("Cannot find module '" + tt + "'");
        throw et.code = "MODULE_NOT_FOUND", et
      }));
      var et = Ot[tt],
        qt = et[0];
      return Promise.all(et.slice(1).map(Vt.e)).then((() => Vt(qt)))
    }
    qt.keys = () => Object.keys(Ot), qt.id = 42848, tt.exports = qt
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);