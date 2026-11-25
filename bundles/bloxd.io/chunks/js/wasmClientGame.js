export const id = 57;
export const ids = [57];
export const modules = {
  36398: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => nB,
      h: () => vB,
      j: () => cB,
      k: () => kB,
      o: () => WB
    });
    var TB = ZB(671),
      JB = ZB(1821),
      oB = ZB(4975);
    class GB {
      constructor(BB, IB) {
        this.width = BB, this.ah = IB, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(BB * IB)
      }
      push(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const ZB = this.data,
          TB = this.next * this.width;
        for (let JB = 0; JB < this.width; JB++) ZB[TB + JB] = BB[IB + JB];
        this.next = (this.next + 1) % this.ah, this.size = Math.min(this.size + 1, this.ah)
      }
      rows() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1 / 0;
        const ZB = [],
          TB = (this.next - this.size + this.ah) % this.ah;
        for (let JB = 0; JB < this.size; JB++) {
          const oB = (TB + JB) % this.ah * this.width;
          this.data[oB + BB] >= IB && ZB.push(Array.from(this.data.subarray(oB, oB + this.width)))
        }
        return ZB
      }
      lines() {
        return this.rows().map((BB => BB.join(",")))
      }
    }
    const vB = 10,
      kB = {
        idle: 0,
        XF: 1,
        gM: 2,
        YM: 3,
        Fq: 4
      },
      cB = {
        none: 0,
        skipped: 1,
        paced: 2,
        drawn: 3
      },
      nB = {
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
      hB = 12e3,
      zB = ["nowMs", "dtMs", "rawX", "rawY", "turnedX", "turnedY", "outcome", "velocityX", "velocityY", "limit"],
      FB = ["timeStamp", "nowMs", "movementX", "movementY", "locked"],
      NB = ["nowMs", "dtMs", "heading", "pitch", "kind"],
      gB = ["nowMs", "source", "headingBefore", "pitchBefore", "headingAfter", "pitchAfter"],
      qB = ["nowMs", "change", "count"];

    function yB(BB) {
      return "js" === BB ? nB.jsClient : nB.wasmClient
    }
    class UB {
      constructor() {
        this.steps = new GB(vB, hB), this.events = new GB(FB.length, hB), this.frames = new GB(NB.length, hB), this.cameraSets = new GB(oB.f, 256), this.changes = new GB(qB.length, 256)
      }
    }
    const WB = new class {
      constructor() {
        this.rings = null, this.sample = new Float64Array(FB.length), this.startedClient = null, this.startedAtMs = 0
      }
      get client() {
        return this.startedClient
      }
      start(BB, IB) {
        this.startedClient = BB, this.startedAtMs = performance.now(), null !== this.rings ? this.change(yB(BB)) : IB && this.allocate()
      }
      lockGained() {
        this.allocate(), this.change(nB.lockGained)
      }
      allocate() {
        null === this.rings && (this.rings = new UB, null !== this.startedClient && this.changeAt(this.startedAtMs, yB(this.startedClient), 1))
      }
      step(BB, IB) {
        var ZB;
        BB[IB + 6] !== kB.Fq && (null === (ZB = this.rings) || void 0 === ZB || ZB.steps.push(BB, IB))
      }
      cameraSet(BB, IB) {
        var ZB;
        null === (ZB = this.rings) || void 0 === ZB || ZB.cameraSets.push(BB, IB)
      }
      mouseMove(BB, IB) {
        const ZB = this.rings;
        if (null === ZB) return;
        const TB = this.sample;
        TB[0] = BB.timeStamp, TB[1] = performance.now(), TB[2] = BB.movementX, TB[3] = BB.movementY, TB[4] = IB ? 1 : 0, ZB.events.push(TB)
      }
      frame(BB, IB, ZB, TB) {
        const JB = this.rings;
        if (null === JB || TB === cB.none) return;
        const oB = this.sample;
        oB[0] = performance.now(), oB[1] = BB, oB[2] = IB, oB[3] = ZB, oB[4] = TB, JB.frames.push(oB)
      }
      change(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.changeAt(performance.now(), BB, IB)
      }
      changeAt(BB, IB, ZB) {
        const TB = this.rings;
        if (null === TB) return;
        const JB = this.sample;
        JB[0] = BB, JB[1] = IB, JB[2] = ZB, TB.changes.push(JB)
      }
      dumpText() {
        var BB, IB;
        const ZB = this.rings;
        return [`look records (${this.startedClient}): ${zB.join(",")}`, ...null !== (BB = null === ZB || void 0 === ZB ? void 0 : ZB.steps.lines()) && void 0 !== BB ? BB : [], `mousemove events: ${FB.join(",")}`, ...null !== (IB = null === ZB || void 0 === ZB ? void 0 : ZB.events.lines()) && void 0 !== IB ? IB : []].join("\n")
      }
      toJson(BB, IB) {
        var ZB;
        const JB = BB - 6e4,
          oB = this.rings,
          GB = function(BB, IB) {
            var ZB;
            let TB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            const oB = null !== (ZB = null === BB || void 0 === BB ? void 0 : BB.rows(TB, JB)) && void 0 !== ZB ? ZB : [];
            return {
              columns: IB,
              fromMs: 0 === oB.length ? null : oB[0][TB],
              rows: oB
            }
          };
        return {
          version: TB.b,
          client: null !== (ZB = this.startedClient) && void 0 !== ZB ? ZB : "not started",
          savedAt: (new Date).toISOString(),
          savedAtMs: BB,
          keptMs: 6e4,
          page: window.location.href,
          userAgent: navigator.userAgent,
          devicePixelRatio: window.devicePixelRatio,
          screen: {
            width: window.screen.width,
            height: window.screen.height
          },
          mq: null !== document.pointerLockElement,
          visibility: document.visibilityState,
          ...IB,
          outcomes: kB,
          frameKinds: cB,
          changes: nB,
          lookSteps: GB(null === oB || void 0 === oB ? void 0 : oB.steps, zB),
          mouseMoves: GB(null === oB || void 0 === oB ? void 0 : oB.events, FB, 1),
          frames: GB(null === oB || void 0 === oB ? void 0 : oB.frames, NB),
          cameraSets: GB(null === oB || void 0 === oB ? void 0 : oB.cameraSets, gB),
          pageChanges: GB(null === oB || void 0 === oB ? void 0 : oB.changes, qB)
        }
      }
      save(BB) {
        const IB = JSON.stringify(this.toJson(performance.now(), BB));
        (0, JB.d)(new Blob([IB], {
          type: "application/json"
        }), `bloxd-mouse-look-${(new Date).toISOString().replace(/[:.]/g,"-")}.json`)
      }
    }
  },
  39090: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => oB,
      f: () => JB
    });
    var TB = ZB(24);

    function JB(BB) {
      return "refetchCode" === BB || "devDownloadJson" === BB || BB.startsWith("Plugin")
    }

    function oB(BB, IB) {
      "refetchCode" !== BB ? "Plugin|MobAiPlugin|ShowPetUi" !== BB ? Promise.all([ZB.e(109), ZB.e(110), ZB.e(105), ZB.e(107), ZB.e(218)]).then((() => ZB(41761))).then((ZB => {
        let {
          runClientGameMessage: TB
        } = ZB;
        TB(BB, IB)
      })).catch((IB => {
        console.error(`Game message ${BB} failed`, IB)
      })) : TB.l.Gq("showPetUi", IB) : TB.l.Gq("refetchCode")
    }
  },
  42581: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => TB,
      g: () => JB
    });
    const TB = ["recording", "freecam", "keyframe"];

    function JB() {
      const BB = crypto.getRandomValues(new Uint32Array(2));
      return BigInt(BB[1]) << 32n | BigInt(BB[0])
    }
  },
  34103: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => vB,
      d: () => kB
    });
    var TB = ZB(20);
    const JB = 24,
      oB = "farNametags",
      GB = 1e5;

    function vB() {
      var BB;
      return null === (BB = TB.d.get("showDistantNametags")) || void 0 === BB || BB
    }

    function kB() {
      var BB;
      return null !== (BB = function() {
        const BB = new URLSearchParams(window.location.search).get(oB),
          IB = null === BB || "" === BB ? NaN : Number(BB);
        return Number.isFinite(IB) && IB >= 0 ? Math.min(IB, GB) : null
      }()) && void 0 !== BB ? BB : vB() ? 0 : JB
    }
  },
  42579: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      blockIdOf: () => xk.e,
      clearWasmCameraScreen: () => ZJ,
      creativeItemIds: () => ZT.creativeItemIds,
      decodeMapSettings: () => Kk,
      drainTextRerasters: () => Lv.e,
      enchantmentPerksOf: () => ZT.enchantmentPerksOf,
      endGameHost: () => kc,
      followCursorAim: () => Dk,
      followMenuPrefs: () => Io,
      loadAudio: () => Tc,
      loadClientGame: () => Zc,
      loadTextIcons: () => Lv.h,
      rasterText: () => Xv.c,
      readBoardToEdit: () => bk,
      readDrawCensus: () => Vk.e,
      setTextHost: () => Lv.k,
      setTextLocalPlayer: () => Lv.m,
      showInCreativeInvenOf: () => ZT.showInCreativeInvenOf,
      startGameHost: () => vc,
      startShellAnalytics: () => lk,
      startSkyFeed: () => ck,
      textChanged: () => Lv.s,
      warmText: () => Xv.g,
      wasmCameraScreen: () => IJ
    });
    ZB(36540);
    var TB = ZB(20),
      JB = ZB(36846),
      oB = ZB(39225),
      GB = ZB(24),
      vB = ZB(3586),
      kB = ZB(36843),
      cB = ZB(1353),
      nB = ZB(655),
      hB = ZB(38287),
      zB = ZB(4969),
      FB = ZB(40701),
      NB = ZB(40633);
    const gB = NB.yb / 4,
      qB = NB.k.PlaySound,
      yB = NB.k.SoundReset,
      UB = zB.X.ReplayFailed,
      WB = zB.X.RecorderEvent;
    class dB {
      constructor(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.core = BB, this.memory = IB, this.audio = ZB, this.serverIds = new Int32Array(256).fill(NB.Rc), this.kinds = new Uint16Array(256), this.idStr = new Array(256).fill(null), this.indexById = new Map, this.queries = void 0, this.buffer = null, this.viewPtr = -1, this.view = new DataView(new ArrayBuffer(NB.p.BYTES)), this.renderPtr = 0, this.ah = 0, this.renderCapacity = 0, this.render = new Float32Array(0), this.visPtr = 0, this.vis = new Uint8Array(0), this.renderBuffer = null, this.eventsBuffer = null, this.eventsPtr = 0, this.eventsLen = 0, this.events = new DataView(new ArrayBuffer(0)), this.audioView = null, this.scratchPtr = -1, this.corruption = null, this.replay = null, this.queries = new NB.L(BB, (() => {
          this.scratchPtr = -1, this.ensureViews()
        }))
      }
      scratch() {
        return this.scratchPtr < 0 && (this.scratchPtr = this.core.mJB(), this.ensureViews()), this.scratchPtr
      }
      eventBytes(BB, IB) {
        const ZB = this.eventView();
        return new Uint8Array(ZB.buffer, ZB.byteOffset + BB, IB)
      }
      get apiView() {
        return this.ensureViews(), this.view
      }
      ensureViews() {
        this.memory().buffer !== this.buffer && this.reView()
      }
      get localId() {
        return NB.p.localId(this.apiView, 0)
      }
      localDeaths() {
        return NB.p.localDeaths(this.apiView, 0)
      }
      rereadDirectory() {
        const BB = this.apiView,
          IB = NB.p.entRenderPtr(BB, 0),
          ZB = NB.p.entVisPtr(BB, 0),
          TB = NB.p.entCapacity(BB, 0);
        if (IB !== this.renderPtr || ZB !== this.visPtr || TB !== this.ah || this.renderBuffer !== this.buffer) {
          this.renderPtr = IB, this.visPtr = ZB, this.ah = TB, this.renderBuffer = this.buffer;
          const BB = this.memoryView(Float32Array, IB, TB * gB, "the render array"),
            JB = this.memoryView(Uint8Array, ZB, TB, "the visibility array");
          this.renderCapacity = BB && JB ? TB : 0, this.render = BB && JB ? BB : new Float32Array(0), this.vis = BB && JB ? JB : new Uint8Array(0)
        }
      }
      memoryView(BB, IB, ZB, TB) {
        try {
          return (0, FB.u)(BB, this.memory().buffer, IB, ZB, TB)
        } catch (JB) {
          return this.keepCorruption(JB), null
        }
      }
      memoryData(BB, IB, ZB, TB) {
        try {
          return (0, FB.g)(this.memory().buffer, BB, IB, ZB, TB)
        } catch (JB) {
          return this.keepCorruption(JB), null
        }
      }
      reportCorruption(BB) {
        this.keepCorruption(new FB.c(BB))
      }
      keepCorruption(BB) {
        if (!(BB instanceof FB.c)) throw BB;
        this.corruption ??= BB
      }
      throwCorruption() {
        if (this.corruption) throw this.corruption
      }
      walk(BB, IB, ZB) {
        this.rereadDirectory(), this.throwCorruption();
        const {
          ptr: TB,
          len: JB
        } = BB;
        this.eventsPtr = TB, this.eventsLen = JB, this.eventsBuffer = null;
        const oB = this.eventView();
        for (let cB = 0; cB < JB;) {
          const BB = oB.getUint32(cB, !0),
            ZB = 65535 & BB,
            TB = BB >>> 16,
            JB = cB + zB.U;
          if (ZB === NB.k.EntitySpawned) {
            var GB;
            if (TB !== NB.Ab.BYTES) throw OB(ZB, cB, TB);
            const BB = NB.Ab.serverId(oB, JB);
            this.spawned(BB, NB.Ab.index(oB, JB), NB.Ab.kind(oB, JB)), null === (GB = IB.entityAdded) || void 0 === GB || GB.call(IB, BB)
          } else if ((ZB === NB.k.ChunkSlot || ZB === NB.k.EntityInfoChanged) && !(0, NB.me)(ZB, oB, JB, TB, IB)) throw OB(ZB, cB, TB);
          cB = JB + (0, zB.xe)(TB)
        }
        try {
          var vB;
          null === (vB = IB.afterPrescan) || void 0 === vB || vB.call(IB), this.throwCorruption(), !ZB() && this.dispatch(BB, IB, ZB) && (this.throwCorruption(), this.applyListener(), IB.afterWalk(BB.kind)), this.throwCorruption()
        } catch (kB) {
          throw kB instanceof FB.c && (this.corruption ??= kB), kB
        } finally {
          ZB() || null !== this.corruption || this.applyDespawns(JB, IB)
        }
      }
      applyDespawns(BB, IB) {
        const ZB = this.eventView();
        for (let JB = 0; JB < BB;) {
          const BB = ZB.getUint32(JB, !0),
            oB = JB + zB.U;
          if ((65535 & BB) === NB.k.EntityDespawned && BB >>> 16 === NB.Ab.BYTES) {
            const BB = NB.Ab.serverId(ZB, oB);
            var TB;
            if (this.despawned(BB, NB.Ab.index(ZB, oB))) null === (TB = IB.entityRemoved) || void 0 === TB || TB.call(IB, BB)
          }
          JB = oB + (0, zB.xe)(BB >>> 16)
        }
        this.rereadDirectory()
      }
      dispatch(BB, IB, ZB) {
        const {
          len: TB,
          net: JB,
          netOffsets: oB
        } = BB;
        let GB = this.eventView(),
          vB = 0;
        for (let QB = 0; QB < TB;) {
          const BB = GB.getUint32(QB, !0),
            TB = 65535 & BB,
            sB = BB >>> 16,
            YB = QB + zB.U;
          let iB = !1;
          if (vB < JB.length && oB[vB] === QB) IB.netEvent(JB[vB]), vB++, iB = !0;
          else if (TB === zB.X.LocalPlayerBound) {
            var kB;
            if (sB !== zB.Gb) throw OB(TB, QB, sB);
            null === (kB = IB.localPlayerBound) || void 0 === kB || kB.call(IB, GB.getInt32(YB, !0)), iB = !0
          } else if (TB === zB.X.LocalHurt) {
            var cB;
            if (sB !== zB.Fb) throw OB(TB, QB, sB);
            null === (cB = IB.localHurt) || void 0 === cB || cB.call(IB, GB.getInt32(YB, !0), GB.getFloat32(YB + 4, !0), GB.getUint32(YB + 8, !0)), iB = !0
          } else if (TB === zB.X.AttackHit) {
            var nB;
            if (sB !== zB.b) throw OB(TB, QB, sB);
            const BB = GB.getFloat32(YB, !0),
              ZB = GB.getFloat32(YB + 4, !0),
              JB = GB.getFloat32(YB + 8, !0),
              oB = GB.getUint32(YB + 12, !0);
            null === (nB = IB.attackHit) || void 0 === nB || nB.call(IB, BB, ZB, JB, 0 !== (oB & zB.j.Crit), 0 !== (oB & zB.j.HitSelf))
          } else if (TB === zB.X.PhysicsType) {
            var hB;
            if (sB !== zB.hc) throw OB(TB, QB, sB);
            null === (hB = IB.physicsType) || void 0 === hB || hB.call(IB, GB.getUint32(YB, !0), GB.getInt32(YB + 4, !0)), iB = !0
          } else if (TB === zB.X.VehicleEffect) {
            var FB;
            const BB = wB(GB, YB, sB);
            if (null === BB) throw OB(TB, QB, sB);
            null === (FB = IB.vehicleEffect) || void 0 === FB || FB.call(IB, BB.op, BB.name, BB.icon, BB.level, BB.durationMs), iB = !0
          } else if (TB === zB.X.ZoomChanged) {
            var gB;
            if (sB !== zB.ce) throw OB(TB, QB, sB);
            null === (gB = IB.zoomChanged) || void 0 === gB || gB.call(IB, GB.getFloat32(YB, !0), GB.getUint8(YB + 4)), iB = !0
          } else if (TB === zB.X.ZoomDisabled) {
            var dB;
            if (0 !== sB) throw OB(TB, QB, sB);
            null === (dB = IB.zoomDisabled) || void 0 === dB || dB.call(IB), iB = !0
          } else if (TB === zB.X.GameCamera) {
            var CB;
            null === (CB = IB.gameCamera) || void 0 === CB || CB.call(IB, new Uint8Array(GB.buffer, GB.byteOffset + YB, sB).slice()), iB = !0
          } else if (TB === NB.k.ChunkSlot || TB === NB.k.EntityInfoChanged);
          else if (TB >= qB && TB <= yB) {
            if (this.audio && !this.audio.onAudioEvent(TB, GB, YB, sB)) throw OB(TB, QB, sB)
          } else if (TB >= UB && TB <= WB) {
            if (this.replay) {
              if (!this.replay.onReplayEvent(TB, GB, YB, sB)) throw OB(TB, QB, sB);
              iB = !0
            }
          } else if (TB >= NB.fd && TB <= NB.jd && TB !== zB.X.EnvLighting) {
            if (!(0, NB.me)(TB, GB, YB, sB, IB)) throw OB(TB, QB, sB);
            iB = !0
          }
          if (iB) {
            if (ZB()) return !1;
            GB = this.eventView()
          }
          QB = YB + (0, zB.xe)(sB)
        }
        return !ZB()
      }
      applyListener() {
        var BB;
        if (!this.audio) return;
        const IB = NB.p.audioViewPtr(this.apiView, 0),
          ZB = this.memory().buffer;
        let TB = this.audioView;
        (null === (BB = TB) || void 0 === BB ? void 0 : BB.buffer) === ZB && TB.byteOffset === IB || (TB = (0, FB.g)(ZB, IB, NB.q.BYTES, 8, "the audio view"), this.audioView = TB), TB && this.audio.applyListener(TB)
      }
      indexOf(BB) {
        return this.indexById.get("number" === typeof BB ? BB : +BB)
      }
      isLocal(BB) {
        return BB !== NB.Rc && BB === NB.p.localId(this.apiView, 0)
      }
      aU(BB) {
        const IB = [0, 0, 0];
        return this.readPosition("number" === typeof BB ? BB : +BB, IB) ? IB : null
      }
      readPosition(BB, IB) {
        const ZB = this.apiView;
        if (void 0 !== this.indexById.get(BB) && this.isLocal(BB)) {
          for (let BB = 0; BB < 3; BB++) IB[BB] = NB.p.localPos(ZB, 0, BB);
          return !0
        }
        return this.readDrawnPosition(BB, IB)
      }
      readDrawnPosition(BB, IB) {
        const ZB = this.apiView,
          TB = this.indexById.get(BB);
        if (void 0 === TB || TB >= this.renderCapacity) return IB[0] = IB[1] = IB[2] = NaN, !1;
        const JB = TB * gB;
        for (let oB = 0; oB < 3; oB++) IB[oB] = this.render[JB + oB] + NB.p.origin(ZB, 0, oB);
        return !0
      }
      checkValid(BB) {
        return void 0 !== this.indexOf(BB)
      }
      isAlive(BB) {
        const IB = this.indexOf(BB);
        if (void 0 === IB) return null;
        if (this.ensureViews(), IB >= this.renderCapacity) return null;
        const ZB = this.vis[IB];
        return 0 === ZB ? null : 0 !== (ZB & NB.ke.Alive)
      }
      getEntityType(BB) {
        const IB = this.indexOf(BB);
        return void 0 === IB ? this.isLocal("number" === typeof BB ? BB : +BB) ? "Player" : null : QB(this.kinds[IB])
      }
      spawned(BB, IB, ZB) {
        if (IB >= 1048576) throw new FB.c(`entity ${BB} spawned at index ${IB}`);
        this.ensureIndex(IB), this.serverIds[IB] === BB && null !== this.idStr[IB] || (this.idStr[IB] = String(BB)), this.serverIds[IB] = BB, this.kinds[IB] = ZB, this.indexById.set(BB, IB)
      }
      despawned(BB, IB) {
        let ZB = !1;
        return this.indexById.get(BB) === IB && (this.indexById.delete(BB), ZB = !0), IB < this.serverIds.length && this.serverIds[IB] === BB && (this.serverIds[IB] = NB.Rc, this.kinds[IB] = 0, this.idStr[IB] = null), ZB
      }
      ensureIndex(BB) {
        const IB = this.serverIds.length;
        if (BB < IB) return;
        let ZB = 2 * IB;
        for (; ZB <= BB;) ZB *= 2;
        const TB = new Int32Array(ZB).fill(NB.Rc);
        TB.set(this.serverIds), this.serverIds = TB;
        const JB = new Uint16Array(ZB);
        JB.set(this.kinds), this.kinds = JB;
        for (let oB = IB; oB < ZB; oB++) this.idStr.push(null)
      }
      eventView() {
        const BB = this.memory().buffer;
        return BB !== this.eventsBuffer && (this.eventsBuffer = BB, this.events = new DataView(BB, this.eventsPtr, this.eventsLen)), this.events
      }
      reView() {
        const BB = this.memory().buffer;
        this.buffer = BB, this.viewPtr < 0 && (this.viewPtr = this.core.XJB()), this.view = new DataView(BB, this.viewPtr, NB.p.BYTES), this.rereadDirectory()
      }
    }

    function CB(BB) {
      return BB >>> NB.c === NB.o.Item
    }

    function QB(BB) {
      var IB, ZB;
      const TB = BB & NB.d;
      switch (BB >>> NB.c) {
        case NB.o.Lifeform:
          return null !== (IB = nB.i[TB]) && void 0 !== IB ? IB : null;
        case NB.o.Throwable:
          return null !== (ZB = hB.k[TB]) && void 0 !== ZB ? ZB : null;
        case NB.o.Mesh:
          return "Mesh";
        case NB.o.Audio:
          return "AudioEntity";
        case NB.o.Item:
          return "Item";
        default:
          return null
      }
    }
    const sB = new TextDecoder;

    function wB(BB, IB, ZB) {
      if (ZB < zB.Jd.HEAD_BYTES) return null;
      const TB = BB.getUint32(IB, !0),
        JB = BB.getUint32(IB + 20, !0),
        oB = BB.getUint32(IB + 24, !0),
        GB = zB.Jd.HEAD_BYTES + (0, zB.xe)(JB);
      if (TB !== zB.Jd.UPDATE && TB !== zB.Jd.REMOVE || JB > ZB || GB + oB > ZB) return null;
      const vB = (ZB, TB) => sB.decode(new Uint8Array(BB.buffer, BB.byteOffset + IB + ZB, TB)),
        kB = BB.getFloat64(IB + 12, !0);
      return {
        op: TB,
        level: BB.getFloat64(IB + 4, !0),
        durationMs: Number.isNaN(kB) ? null : kB,
        name: vB(zB.Jd.HEAD_BYTES, JB),
        icon: vB(GB, oB)
      }
    }

    function OB(BB, IB, ZB) {
      return new FB.c(`event ${BB} at ${IB} of ${ZB} bytes`)
    }
    var YB = ZB(360),
      iB = ZB(1281),
      pB = ZB(39090),
      aB = ZB(2020),
      HB = ZB(41045),
      MB = ZB(1956),
      jB = ZB(39245),
      PB = ZB(39270),
      RB = ZB(39251),
      rB = ZB(40682),
      mB = ZB(2489),
      XB = ZB(39242),
      LB = ZB(39262);
    const eB = Math.max(NB.ob.BYTES, NB.fb.BYTES, NB.gb.BYTES);

    function uB(BB) {
      if (!(0, LB.g)(BB)) return null;
      const IB = Number(BB);
      return (0 | IB) === IB ? IB : null
    }
    class fB {
      constructor(BB) {
        this.api = BB, this.bodyHeading = 0, this.viewHeading = 0, this.defaultPose = (0, XB.l)(), this.defaultPoseRead = !1, this.defaultFov = 0, this.baseFov = 0, this.aspect = 1, this.rT = null, this.entityLive = !1, this.entityFeet = [0, 0, 0], this.entityAim = [0, 0, 0], this.entityHeading = 0, this.localId = NB.Rc, this.localName = String(NB.Rc), this.scratch = null
      }
      readView() {
        this.defaultPoseRead = !1, this.rT = null;
        const BB = this.api.queries.directorView() >= NB.ob.BYTES ? this.scratchView() : null;
        null !== BB && (this.defaultFov = (0, MB.K)(NB.ob.fov(BB, 0)), this.baseFov = (0, MB.K)(NB.ob.baseFov(BB, 0)), this.aspect = NB.ob.aspect(BB, 0), this.bodyHeading = NB.ob.bodyHeading(BB, 0))
      }
      getViewHeading() {
        return this.viewHeading
      }
      setViewHeading(BB) {
        this.viewHeading = BB
      }
      get localPlayerId() {
        const BB = NB.p.localId(this.api.apiView, 0);
        return BB !== this.localId && (this.localId = BB, this.localName = String(BB)), this.localName
      }
      getEntityPosition(BB) {
        return this.readEntity(BB) ? this.entityFeet : null
      }
      getEntityAimPoint(BB) {
        return this.readEntity(BB) ? this.entityAim : null
      }
      getEntityHeading(BB) {
        const IB = uB(BB);
        if (null === IB) return null;
        const ZB = NB.p.localId(this.api.apiView, 0);
        return IB === ZB && ZB !== NB.Rc ? this.viewHeading : this.readEntity(BB) ? this.entityHeading : null
      }
      raycastTerrain(BB, IB, ZB) {
        const TB = this.api.queries.cameraSweep(BB[0], BB[1], BB[2], IB[0], IB[1], IB[2], ZB);
        return TB < ZB - 1e-6 ? TB : null
      }
      getDefaultPose() {
        if (this.defaultPoseRead) return this.defaultPose;
        this.defaultPoseRead = !0;
        const BB = this.defaultPose;
        BB.fov = this.defaultFov;
        const IB = this.api.queries.directorDefaultPose() >= NB.fb.BYTES ? this.scratchView() : null;
        if (null === IB) return BB;
        for (let ZB = 0; ZB < 3; ZB++) BB.position[ZB] = NB.fb.eye(IB, 0, ZB);
        return BB.heading = NB.fb.heading(IB, 0), BB.pitch = NB.fb.pitch(IB, 0), BB
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
      readEntity(BB) {
        const IB = uB(BB);
        if (null === IB) return !1;
        if (IB === this.rT) return this.entityLive;
        this.rT = IB;
        const ZB = this.api.queries.directorEntity(IB) >= NB.gb.BYTES ? this.scratchView() : null;
        if (this.entityLive = null !== ZB, null === ZB) return !1;
        for (let TB = 0; TB < 3; TB++) this.entityFeet[TB] = NB.gb.feet(ZB, 0, TB), this.entityAim[TB] = this.entityFeet[TB];
        return this.entityAim[1] += NB.gb.eyeHeight(ZB, 0), this.entityHeading = NB.gb.heading(ZB, 0), !0
      }
      scratchView() {
        const BB = this.api.scratch(),
          IB = this.api.memory().buffer,
          ZB = this.scratch;
        return null !== ZB && ZB.buffer === IB && ZB.byteOffset === BB ? ZB : (this.scratch = this.api.memoryData(BB, eB, 8, "the director's record"), this.scratch)
      }
    }
    const lB = {
        mode: "default"
      },
      AB = {
        show: () => {},
        clear: () => {}
      };

    function tB() {
      return "undefined" !== typeof document && "hidden" === document.visibilityState
    }
    class bB {
      constructor(BB) {
        this.options = BB, this.vz = void 0, this.director = void 0, this.latest = lB, this.pending = void 0, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.look = {
          YH: 0,
          iH: 0
        }, this.pointedAt = {
          heading: 0,
          pitch: 0
        }, this.engaged = !1, this.calledThisFrame = !1, this.holding = !1, this.lastCallMs = 0, this.answeredPose = !1, this.pg = new Int32Array(3 * NB.Md), this.centresLen = 0, this.centresUnsent = !1, this.next = new Int32Array(3 * NB.Md), this.vz = new fB(BB.api), this.director = new RB.c(this.vz)
      }
      settingsChanged(BB) {
        let IB = lB;
        if (BB.length > 0) try {
          IB = (0, rB.e)(BB)
        } catch {}
        this.latest = IB, this.pending = IB
      }
      call(BB, IB, ZB, TB, JB, oB) {
        var GB, vB;
        let kB;
        this.holding = !1;
        try {
          kB = this.answer(BB, IB, ZB, TB, JB, oB)
        } catch (zB) {
          var cB, nB;
          throw this.answeredPose = !1, null === (cB = (nB = this.options).showFacing) || void 0 === cB || cB.call(nB, null), zB
        }
        const hB = this.answeredPose && 0 === (TB & NB.kb.Held);
        return this.answeredPose = kB !== NB.db.None, this.holding = this.answeredPose && !hB, null === (GB = (vB = this.options).showFacing) || void 0 === GB || GB.call(vB, this.holding ? this.facing : null), kB
      }
      holdsView() {
        return this.holding
      }
      answer(BB, IB, ZB, TB, JB, oB) {
        this.calledThisFrame = !0, this.engaged = !0, this.lastCallMs = this.now();
        const {
          vz: GB
        } = this;
        GB.readView();
        if (0 !== (TB & NB.kb.Held) || GB.setViewHeading((0, jB.v)(GB.bodyHeading)), void 0 !== this.pending) {
          const BB = this.pending;
          this.pending = void 0, this.director.setSettings(BB), this.syncShownSettings()
        }
        this.readLook((0, mB.f)(IB), (0, mB.f)(ZB), TB, (0, mB.f)(JB), (0, mB.f)(oB));
        const vB = this.director.update(BB / 1e3, this.look);
        if (this.syncShownSettings(), this.writeCentres(this.director.getLoadingPositions()), this.hidden() || this.screen().show(this.director.getScreenFade(), this.director.getSettings()), !vB) return NB.db.None;
        const [kB, cB, nB] = vB.position;
        if (0 === this.options.api.queries.directorPose(kB, cB, nB, (0, jB.v)(vB.heading), (0, jB.h)(vB.pitch), (0, MB.l)(vB.fov))) return NB.db.None;
        if ("default" === this.director.getSettings().mode) return NB.db.Pose;
        switch (this.facing) {
          case "camera":
            return NB.db.FaceCamera;
          case "cursor":
            return NB.db.FaceCursor;
          default:
            return NB.db.FaceMovement
        }
      }
      afterFrame(BB) {
        BB ? (this.calledThisFrame || (this.holding = !1, this.engaged && this.idle()), this.calledThisFrame = !1) : this.centresLen > 0 && this.hidden() && this.now() - this.lastCallMs > 1e3 && this.setCentres(0), this.centresUnsent && this.sendCentres()
      }
      reset() {
        this.latest = lB, this.idle()
      }
      restart() {
        const BB = this.holding;
        this.idle(), this.holding = BB
      }
      idle() {
        var BB, IB;
        this.engaged && this.screen().clear(), this.engaged = !1, this.holding = !1, this.director = new RB.c(this.vz), this.pending = this.latest, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.answeredPose = !1, null === (BB = (IB = this.options).showFacing) || void 0 === BB || BB.call(IB, null), this.setCentres(0)
      }
      syncShownSettings() {
        const BB = this.director.getSettings();
        if (BB === this.shownSettings) return;
        this.shownSettings = BB;
        const IB = (0, PB.d)(BB);
        this.facing = IB.facing, this.mouseTurns = IB.mouseTurns
      }
      readLook(BB, IB, ZB, TB, JB) {
        const oB = this.look,
          GB = 0 !== (ZB & NB.kb.LookPointed);
        if (null === this.mouseTurns && !GB) return oB.YH = 0, oB.iH = 0, void(oB.pointedAt = void 0);
        let vB;
        GB && (this.pointedAt.heading = TB, this.pointedAt.pitch = JB, vB = this.pointedAt);
        const {
          vz: kB
        } = this;
        kB.setViewHeading((0, PB.b)(kB.getViewHeading(), BB, IB, vB, "look" === this.mouseTurns, oB))
      }
      writeCentres(BB) {
        const IB = this.next,
          ZB = Math.min(BB.length, NB.Md);
        for (let TB = 0; TB < ZB; TB++)
          for (let ZB = 0; ZB < 3; ZB++) IB[3 * TB + ZB] = Math.floor(BB[TB][ZB] / NB.u);
        this.setCentres(ZB)
      }
      setCentres(BB) {
        const {
          pg: IB,
          next: ZB
        } = this;
        let TB = BB === this.centresLen;
        for (let JB = 0; TB && JB < 3 * BB; JB++) TB = IB[JB] === ZB[JB];
        TB || (IB.fill(0), IB.set(ZB.subarray(0, 3 * BB)), this.centresLen = BB, this.centresUnsent = !0, this.sendCentres())
      }
      sendCentres() {
        const BB = this.options.cmd();
        null !== BB && (0, NB.Ff)(BB, 0, this.pg, this.centresLen) && (this.centresUnsent = !1)
      }
      screen() {
        var BB, IB, ZB;
        return null !== (BB = null === (IB = (ZB = this.options).screen) || void 0 === IB ? void 0 : IB.call(ZB)) && void 0 !== BB ? BB : AB
      }
      hidden() {
        var BB;
        return (null !== (BB = this.options.isPageHidden) && void 0 !== BB ? BB : tB)()
      }
      now() {
        var BB, IB, ZB;
        return null !== (BB = null === (IB = (ZB = this.options).now) || void 0 === IB ? void 0 : IB.call(ZB)) && void 0 !== BB ? BB : performance.now()
      }
    }
    var xB = ZB(40811);
    const EB = NB.u * NB.u * NB.u,
      DB = Math.log2(NB.u),
      KB = NB.u - 1,
      VB = NB.C.BYTES / 4,
      SB = new Uint16Array(EB);

    function BI(BB, IB, ZB) {
      return BB * NB.u * NB.u + IB * NB.u + ZB
    }
    class II {
      constructor(BB) {
        this.chunk = BB
      }
      get data() {
        return this.chunk.gameVoxels()
      }
      index(BB, IB, ZB) {
        return BI(BB, IB, ZB)
      }
    }
    class ZI {
      constructor() {
        this.ids = new Map, this.cleared = new Set, this.layers = 0, this.patched = null, this.from = null
      }
    }
    class TI {
      constructor(BB, IB, ZB, TB) {
        this.table = BB, this.slot = IB, this.generation = ZB, this.epoch = TB, this.mz = new II(this), this.writes = null, this.writeCount = 0, this.shownVersion = 0, this.shownCore = -1, this.shownWrites = -1, this.data = SB, this.dataPtr = 0, this.dataBuffer = null, this.dataStamp = -1, this.version = 0, this.layers = null, this.layersVersion = -1, this.layersPtr = -1, this.staleLayers = 0
      }
      get KN() {
        return this.voxelData(), this.version === this.shownCore && this.writeCount === this.shownWrites || (this.shownCore = this.version, this.shownWrites = this.writeCount, this.shownVersion = this.table.nextVersion()), this.shownVersion
      }
      get PF() {
        const BB = this.gameVoxels(),
          IB = this.layers ??= new Uint16Array(NB.u);
        this.layersVersion === this.version && this.layersPtr === this.dataPtr || (this.layersVersion = this.version, this.layersPtr = this.dataPtr, this.staleLayers = -1);
        for (let ZB = 0; 0 !== this.staleLayers; ZB++) {
          const TB = 1 << ZB;
          0 !== (this.staleLayers & TB) && (this.staleLayers &= ~TB, IB[ZB] = JI(BB, ZB))
        }
        return IB
      }
      voxelData() {
        return this.dataStamp === this.table.stamp && 0 !== this.data.length ? this.data : this.reread()
      }
      gameVoxels() {
        const BB = this.voxelData(),
          IB = this.writes;
        if (null === IB || 0 === IB.ids.size) return BB;
        if (IB.from !== BB) {
          const ZB = IB.patched ??= new Uint16Array(EB);
          ZB.set(BB);
          for (const [BB, TB] of IB.ids) ZB[BB] = TB;
          IB.from = BB
        }
        return IB.patched
      }
      written(BB) {
        var IB;
        return null === (IB = this.writes) || void 0 === IB ? void 0 : IB.ids.get(BB)
      }
      hasWrites() {
        return null !== this.writes && 0 !== this.writes.ids.size
      }
      write(BB, IB, ZB) {
        const TB = this.writes ??= new ZI;
        TB.ids.set(BB, IB), ZB && TB.cleared.add(BB), null !== TB.from && (TB.patched[BB] = IB);
        const JB = 1 << (BB >> DB & KB);
        TB.layers |= JB, this.staleLayers |= JB, this.writeCount++
      }
      clearWrites() {
        const BB = this.writes;
        null !== BB && (this.staleLayers |= BB.layers, BB.ids.clear(), BB.cleared.clear(), BB.layers = 0, BB.from = null)
      }
      dataCleared(BB) {
        var IB;
        return !0 === (null === (IB = this.writes) || void 0 === IB ? void 0 : IB.cleared.has(BB))
      }
      reread() {
        this.dataStamp = this.table.stamp;
        const BB = this.table.slotWords(),
          IB = this.slot * VB;
        if (this.epoch !== this.table.epoch || IB + VB > BB.length || 0 === BB[IB + 3] || BB[IB + 2] !== this.generation) return this.data = SB, this.dataPtr = 0, SB;
        this.version = BB[IB + 1];
        const ZB = BB[IB + 0],
          TB = BB.buffer;
        return ZB === this.dataPtr && TB === this.dataBuffer || (this.dataPtr = ZB, this.dataBuffer = TB, this.data = this.table.voxelsAt(TB, ZB)), this.data
      }
    }

    function JI(BB, IB) {
      const ZB = BB[IB * NB.u];
      for (let TB = 0; TB < NB.u; TB++) {
        const JB = BI(TB, IB, 0);
        for (let IB = 0; IB < NB.u; IB++)
          if (BB[JB + IB] !== ZB) return 65535
      }
      return ZB
    }
    const oI = new Uint32Array(0);

    function GI(BB, IB, ZB) {
      return BI(BB & KB, IB & KB, ZB & KB)
    }
    class vI {
      constructor(BB, IB) {
        this.memory = BB, this.apiView = IB, this.chunks = new Map, this.written = [], this.lastKey = -1, this.lastChunk = void 0, this.slotsPtr = 0, this.slotsLen = 0, this.slotsBuffer = null, this.slots = oI, this.walkPtr = 0, this.walkLen = 0, this.walkBuffer = null, this.walk = oI, this.epoch = 0, this.stamp = 0, this.versions = 0, this.corruption = null
      }
      apply(BB, IB, ZB, TB, JB, oB) {
        if (this.lastKey = -1, this.lastChunk = void 0, this.stamp++, oB === NB.E.ResetAll) return this.chunks.clear(), void this.epoch++;
        if (oB !== NB.E.Stored && oB !== NB.E.Unloaded) throw new FB.c(`ChunkSlot flags ${oB}`);
        const GB = (0, xB.e)(BB, IB, ZB);
        if (GB < 0) return;
        if (oB === NB.E.Unloaded) return void this.chunks.delete(GB);
        const vB = this.chunks.get(GB);
        (null === vB || void 0 === vB ? void 0 : vB.slot) === TB && vB.generation === JB || this.chunks.set(GB, new TI(this, TB, JB, this.epoch))
      }
      touch() {
        this.stamp++, this.clearOverlay(), this.viewWalkThrough()
      }
      refresh() {
        if (this.stamp++, this.corruption) throw this.corruption;
        const BB = this.apiView(),
          IB = NB.p.chunkSlotsPtr(BB, 0),
          ZB = NB.p.chunkSlotsLen(BB, 0);
        IB === this.slotsPtr && ZB === this.slotsLen || (this.slotsPtr = IB, this.slotsLen = ZB, this.slotsBuffer = null, this.slotWords()), this.viewWalkThrough(), this.clearOverlay()
      }
      viewWalkThrough() {
        const BB = this.apiView(),
          IB = NB.p.walkThroughPtr(BB, 0),
          ZB = NB.p.walkThroughLen(BB, 0);
        IB === this.walkPtr && ZB === this.walkLen || (this.walkPtr = IB, this.walkLen = ZB, this.walkBuffer = null, this.walkWords())
      }
      clearOverlay() {
        for (const BB of this.written) BB.clearWrites();
        this.written.length = 0
      }
      nextVersion() {
        return ++this.versions
      }
      slotWords() {
        const BB = this.memory().buffer;
        var IB;
        BB !== this.slotsBuffer && (this.slotsBuffer = BB, this.slots = null !== (IB = (0, FB.u)(Uint32Array, BB, this.slotsPtr, this.slotsLen * VB, "the chunk directory")) && void 0 !== IB ? IB : oI);
        return this.slots
      }
      voxelsAt(BB, IB) {
        try {
          var ZB;
          return null !== (ZB = (0, FB.u)(Uint16Array, BB, IB, EB, "a chunk's voxels")) && void 0 !== ZB ? ZB : SB
        } catch (TB) {
          if (!(TB instanceof FB.c)) throw TB;
          return this.corruption ??= TB, SB
        }
      }
      chunk(BB, IB, ZB) {
        var TB;
        return null !== (TB = this.chunks.get((0, xB.e)(BB, IB, ZB))) && void 0 !== TB ? TB : null
      }
      isLoaded(BB, IB, ZB) {
        return void 0 !== this.chunkAt(Math.floor(BB), Math.floor(IB), Math.floor(ZB))
      }
      KG(BB, IB, ZB) {
        var TB;
        const JB = Math.floor(BB),
          oB = Math.floor(IB),
          GB = Math.floor(ZB),
          vB = this.chunkAt(JB, oB, GB);
        if (!vB) return 0;
        const kB = GI(JB, oB, GB);
        return null !== (TB = vB.written(kB)) && void 0 !== TB ? TB : vB.voxelData()[kB]
      }
      setOverlay(BB, IB, ZB, TB) {
        let JB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const oB = this.chunkAt(BB, IB, ZB);
        return !!oB && (oB.hasWrites() || this.written.push(oB), oB.write(GI(BB, IB, ZB), TB, JB), !0)
      }
      version(BB, IB, ZB) {
        var TB, JB;
        return null !== (TB = null === (JB = this.chunks.get((0, xB.e)(BB, IB, ZB))) || void 0 === JB ? void 0 : JB.KN) && void 0 !== TB ? TB : null
      }
      scan(BB, IB, ZB, TB, JB, oB, GB, vB) {
        const kB = NB.u;
        let cB = 0;
        for (let nB = Math.floor(IB / kB); nB * kB < JB; nB++) {
          const hB = nB * kB,
            zB = Math.min(JB - hB, kB);
          for (let JB = Math.floor(BB / kB); JB * kB < TB; JB++) {
            const FB = JB * kB,
              NB = Math.min(TB - FB, kB);
            for (let TB = Math.floor(ZB / kB); TB * kB < oB; TB++) {
              const gB = this.chunks.get((0, xB.e)(JB, nB, TB));
              if (!gB) continue;
              const qB = TB * kB,
                yB = Math.max(ZB - qB, 0),
                UB = Math.min(oB - qB, kB),
                WB = gB.PF,
                dB = gB.gameVoxels();
              for (let ZB = Math.max(IB - hB, 0); ZB < zB; ZB++) {
                const IB = WB[ZB];
                if (65535 === IB || 0 !== GB[IB]) {
                  cB++;
                  for (let IB = Math.max(BB - FB, 0); IB < NB; IB++) {
                    const BB = BI(IB, ZB, 0);
                    for (let TB = yB; TB < UB; TB++) {
                      const JB = dB[BB + TB];
                      0 !== GB[JB] && vB.push(FB + IB, hB + ZB, qB + TB, JB)
                    }
                  }
                }
              }
            }
          }
        }
        return cB
      }
      dataCleared(BB, IB, ZB) {
        var TB;
        const JB = Math.floor(BB),
          oB = Math.floor(IB),
          GB = Math.floor(ZB);
        return !0 === (null === (TB = this.chunkAt(JB, oB, GB)) || void 0 === TB ? void 0 : TB.dataCleared(GI(JB, oB, GB)))
      }
      isWalkThrough(BB) {
        if (!Number.isInteger(BB) || BB < 0 || BB > 65535) return !1;
        const IB = this.walkWords(),
          ZB = BB >>> 5;
        return ZB < IB.length && 1 === (IB[ZB] >>> (31 & BB) & 1)
      }
      walkWords() {
        const BB = this.memory().buffer;
        var IB;
        BB !== this.walkBuffer && (this.walkBuffer = BB, this.walk = null !== (IB = (0, FB.u)(Uint32Array, BB, this.walkPtr, this.walkLen, "the walk-through bits")) && void 0 !== IB ? IB : oI);
        return this.walk
      }
      chunkAt(BB, IB, ZB) {
        if ((0 | BB) !== BB || (0 | IB) !== IB || (0 | ZB) !== ZB) return;
        const TB = (0, xB.e)(BB >> DB, IB >> DB, ZB >> DB);
        return TB !== this.lastKey && (this.lastKey = TB, this.lastChunk = this.chunks.get(TB)), this.lastChunk
      }
    }
    var kI = ZB(38555),
      cI = ZB(37855),
      nI = ZB(36827),
      hI = ZB(36636),
      zI = ZB(34143),
      FI = ZB(39193),
      NI = ZB(201);
    const gI = ["ambient", "cars", "crowd", "customGame_horror", "dig", "fire", "fishing", "gameStart", "gunMisc", "gunPistol", "gunRifle", "gunSemiAutomatic", "gunShotgun", "gunSubmachineGun", "mobBear", "mobCat", "mobCow", "mobCrone", "mobDeer", "mobDog", "mobFennec", "mobGolem", "mobGorilla", "mobHorse", "mobKnight", "mobPig", "mobReaver", "mobSheep", "mobSkeleton", "mobStag", "mobStalker", "mobWarper", "mobWraith", "mobZombie", "note", "phoneAndMoney", "police", "randomBeep", "randomCannon", "randomCash", "randomExp", "randomFallsmall", "randomFire", "randomFirecracker", "randomItems", "randomLaugh", "randomMagic", "randomSplash", "rpg", "step", "survivalFactory", "town"],
      qI = [
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
      yI = qI.map((BB => {
        let [IB] = BB;
        return IB
      })),
      UI = Uint8Array.from(qI, (BB => {
        let [, IB] = BB;
        return IB
      })),
      WI = {
        semi_automatic: 11,
        submachine: 13,
        rifle: 10,
        pistol: 9,
        shotgun: 12
      },
      dI = 8;
    var CI = ZB(36789),
      QI = ZB(36807),
      sI = ZB(36800),
      wI = ZB(256);
    class OI {
      constructor(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : wI.c;
        this.sheet = BB, this.onError = IB, this.idle = ZB, this.queue = [], this.asked = new Set, this.cancelIdle = null, this.gen = 0, this.onIdle = BB => {
          this.cancelIdle = null;
          try {
            if (BB.timeRemaining() >= 1) {
              let BB = this.queue.shift();
              for (; void 0 !== BB && !this.load(BB);) BB = this.queue.shift()
            }
          } catch (IB) {
            this.onError(IB)
          } finally {
            this.schedule()
          }
        }
      }
      preload(BB) {
        const IB = [...BB].sort(((BB, IB) => BB - IB));
        for (const ZB of IB) this.asked.has(ZB) || (this.asked.add(ZB), this.queue.push(ZB));
        this.schedule()
      }
      cancel() {
        var BB;
        this.queue.length = 0, this.asked.clear(), this.gen++, null === (BB = this.cancelIdle) || void 0 === BB || BB.call(this), this.cancelIdle = null
      }
      schedule() {
        null === this.cancelIdle && this.queue.length > 0 && (this.cancelIdle = this.idle(this.onIdle))
      }
      load(BB) {
        const IB = this.sheet(BB, !1),
          ZB = this.sheet(BB, !0),
          [TB, JB] = "unloaded" === IB.state() && "unloaded" !== ZB.state() ? [ZB, IB] : [IB, ZB],
          oB = this.gen,
          GB = () => {
            try {
              oB === this.gen && "unloaded" === JB.state() && JB.load()
            } catch (BB) {
              this.onError(BB)
            }
          },
          vB = TB.state();
        return "unloaded" === vB ? (TB.once("load", GB), TB.load(), !0) : "unloaded" === JB.state() && ("loading" === vB ? (TB.once("load", GB), !1) : (JB.load(), !0))
      }
    }
    var YI = ZB(40910);
    const iI = {
        coneInnerAngle: 360,
        coneOuterAngle: 360,
        coneOuterGain: 0,
        distanceModel: "inverse",
        maxDistance: 1e3,
        panningModel: "HRTF",
        rolloffFactor: 1
      },
      pI = NI.f.fq * NI.f.playerEyeToHeightRatio,
      aI = [0, 0, -1, 0, 1, 0],
      HI = gI.indexOf("note");

    function MI(BB) {
      return BB >= 0 ? Math.min(1, BB) : 0
    }

    function jI(BB) {
      var IB;
      let ZB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.random;
      const TB = function(BB) {
        let IB = 0,
          ZB = yI.length;
        for (; IB < ZB;) {
          const TB = IB + ZB >>> 1;
          yI[TB] < BB ? IB = TB + 1 : ZB = TB
        }
        return IB
      }(BB);
      if ("" === BB || null === (IB = yI[TB]) || void 0 === IB || !IB.startsWith(BB)) return -1;
      if (yI[TB] === BB) return TB;
      let JB = TB + 1;
      for (; JB < yI.length && yI[JB].startsWith(BB);) JB++;
      return TB + Math.floor(ZB() * (JB - TB))
    }
    class PI {
      constructor(BB, IB, ZB, TB, JB) {
        this.group = BB, this.loudness = IB, this.startMs = ZB, this.howl = TB, this.host = JB, this.id = 0, this.direct = !1
      }
      getDurationMs() {
        const BB = this.host.alive(this.id);
        return BB ? 1e3 * this.howl.duration(this.id) / BB.rate : 0
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
    class RI {
      constructor(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now(),
          TB = arguments.length > 3 ? arguments[3] : void 0;
        this.createHowl = BB, this.listener = IB, this.now = ZB, this.errors = 0, this.sheets = new Map, this.unloading = new Uint16Array(gI.length), this.live = new Map, this.core = new Map, this.level = 1, this.master = 1, this.pose = new Float64Array(9), this.nextPose = new Float64Array(9), this.posed = !1, this.loader = void 0, this.voices = new sI.b, this.failed = new Set, this.started = new Set, this.voiceHost = {
          alive: BB => this.aliveVoice(BB),
          started: BB => this.started.has(BB),
          drop: BB => {
            var IB;
            null === (IB = this.live.get(BB)) || void 0 === IB || IB.howl.stop(BB), this.forget(BB)
          }
        }, this.handlers = {
          playSound: (BB, IB, ZB, TB, JB, oB, GB, vB, kB) => {
            if (TB >= yI.length) return;
            const cB = 0 !== (JB & NB.be.Loop);
            JB & NB.be.TwoD ? this.start(TB, !1, GB, oB, vB, cB) : this.startSpatial(TB, GB, oB, vB, cB, BB, IB, ZB, kB, this.earDistSq(BB, IB, ZB))
          },
          soundPos: (BB, IB, ZB, TB) => {
            const JB = this.core.get(TB);
            var oB;
            void 0 !== JB && (null === (oB = this.live.get(JB)) || void 0 === oB || oB.howl.pos(ZB, IB, BB, JB))
          },
          soundSet: (BB, IB, ZB, TB) => {
            const JB = this.core.get(BB),
              oB = void 0 === JB ? void 0 : this.live.get(JB);
            void 0 !== JB && oB && (this.setRel(JB, IB), oB.rate = ZB, oB.howl.rate(ZB, JB), oB.spatial && oB.howl.pannerAttr({
              refDistance: TB
            }, JB))
          },
          soundFade: (BB, IB, ZB, TB) => {
            const JB = this.core.get(BB);
            void 0 !== JB && this.fade(JB, IB, ZB, 0 !== (TB & NB.Zd.StopAfter))
          },
          soundStop: BB => {
            const IB = this.core.get(BB);
            var ZB;
            void 0 !== IB && (null === (ZB = this.live.get(IB)) || void 0 === ZB || ZB.howl.stop(IB), this.forget(IB))
          },
          soundReset: () => {
            this.stopCore()
          }
        }, this.loader = new OI(((BB, IB) => this.sheet(BB, IB)), (BB => {
          this.errors++, console.error("Audio preload failed", BB)
        }), TB)
      }
      prepare() {
        for (let BB = 0; BB < gI.length; BB++) this.prepareSheet(BB)
      }
      prepareSheet(BB) {
        this.sheet(BB, !1), this.sheet(BB, !0)
      }
      preload(BB) {
        this.loader.preload(BB)
      }
      cancelPreload() {
        this.loader.cancel()
      }
      freeSheetsAfterGame() {
        for (let BB = 0; BB < gI.length; BB++) {
          if (QI.e.has(gI[BB])) continue;
          const IB = [];
          for (const TB of [!1, !0]) {
            const ZB = rI(BB, TB),
              JB = this.sheets.get(ZB);
            void 0 !== JB && "loading" !== JB.state() && IB.push({
              key: ZB,
              howl: JB
            })
          }
          if (!IB.some((BB => {
              let {
                howl: IB
              } = BB;
              return "loaded" === IB.state()
            }))) continue;
          this.unloading[BB] += IB.length;
          const ZB = () => {
            this.unloading[BB]--, 0 === this.unloading[BB] && this.prepareSheet(BB)
          };
          for (const {
              key: BB,
              howl: TB
            }
            of IB) this.sheets.delete(BB), "loaded" === TB.state() ? (0, CI.e)(TB, ZB) : (TB.unload(), ZB())
        }
      }
      onAudioEvent(BB, IB, ZB, TB) {
        if (BB < NB.k.PlaySound || BB > NB.k.SoundReset) return !1;
        try {
          return (0, NB.me)(BB, IB, ZB, TB, this.handlers)
        } catch (JB) {
          return this.errors++, console.error("Audio event failed", JB), !0
        }
      }
      applyListener(BB) {
        const IB = this.nextPose;
        for (let TB = 0; TB < 3; TB++) IB[2 - TB] = NB.q.listener(BB, 0, TB), IB[5 - TB] = NB.q.forward(BB, 0, TB), IB[8 - TB] = NB.q.up(BB, 0, TB);
        0 === IB[3] && 0 === IB[4] && 0 === IB[5] && IB.set(this.posed ? this.pose.subarray(3) : aI, 3);
        for (let TB = 0; TB < 9; TB++)
          if (!Number.isFinite(IB[TB])) return;
        const ZB = this.pose;
        if (this.posed) {
          let BB = !0;
          for (let TB = 0; TB < 9 && BB; TB++) BB = IB[TB] === ZB[TB];
          if (BB) return
        }
        this.listener.apply(IB) && (ZB.set(IB), this.posed = !0)
      }
      playGame(BB, IB, ZB, TB, JB, oB, GB) {
        const vB = jI(BB);
        if (vB < 0) return YI.d;
        if (!ZB) {
          const {
            howl: BB,
            id: ZB
          } = this.start(vB, !1, IB, 0, 1, GB);
          return this.gameSound(BB, ZB, !1)
        }
        const kB = ZB[0],
          cB = ZB[1] + pI,
          nB = ZB[2];
        if (!Number.isFinite(kB) || !Number.isFinite(cB) || !Number.isFinite(nB)) return YI.d;
        let hB;
        if (TB) {
          const BB = kB - TB[0],
            IB = cB - TB[1],
            ZB = nB - TB[2];
          if (hB = BB * BB + IB * IB + ZB * ZB, hB > JB * JB) return YI.d
        } else hB = this.earDistSq(kB, cB, nB);
        const zB = this.startSpatial(vB, IB, 0, 1, GB, kB, cB, nB, oB, hB);
        return zB ? this.gameSound(zB.howl, zB.id, !0) : YI.d
      }
      setMaster(BB, IB) {
        this.level = MI(BB);
        const ZB = IB ? this.level : 0;
        if (ZB !== this.master) {
          this.master = ZB;
          for (const [BB, IB] of this.live) IB.fadeMs = 0, IB.gain = IB.rel * this.master, IB.howl.volume(IB.gain, BB)
        }
      }
      stopCore() {
        for (const IB of [...this.core.values()]) {
          var BB;
          null === (BB = this.live.get(IB)) || void 0 === BB || BB.howl.stop(IB)
        }
        this.core.clear()
      }
      stopAll() {
        this.cancelPreload();
        for (const [BB, IB] of [...this.live]) IB.howl.stop(BB), this.forget(BB);
        this.core.clear()
      }
      gameSound(BB, IB, ZB) {
        const TB = {
          stop: () => (this.live.has(IB) && BB.stop(IB), TB),
          fade: (BB, ZB, JB) => {
            var oB, GB;
            const vB = this.level > 0 ? ZB / this.level : ZB > 0 && null !== (oB = null === (GB = this.live.get(IB)) || void 0 === GB ? void 0 : GB.rel) && void 0 !== oB ? oB : 0;
            return this.fade(IB, vB, JB, !1), TB
          },
          rate: ZB => {
            const JB = this.live.get(IB);
            return JB && (JB.rate = function(BB) {
              return BB > 0 && BB < 1 / 0 ? BB : 1
            }(ZB), BB.rate(JB.rate, IB)), TB
          },
          getVolume: () => {
            var BB, ZB;
            return (null !== (BB = null === (ZB = this.live.get(IB)) || void 0 === ZB ? void 0 : ZB.rel) && void 0 !== BB ? BB : 0) * this.level
          },
          getRelativeVolume: () => {
            var BB, ZB;
            return null !== (BB = null === (ZB = this.live.get(IB)) || void 0 === ZB ? void 0 : ZB.rel) && void 0 !== BB ? BB : 0
          },
          setRelativeVolume: BB => (this.setRel(IB, BB), TB),
          setPannerAttr: JB => {
            if (ZB && this.live.has(IB)) {
              const ZB = {
                ...iI,
                refDistance: nI.h
              };
              for (const [BB, IB] of Object.entries(JB)) "number" !== typeof IB && "string" !== typeof IB || (ZB[BB] = IB);
              BB.pannerAttr({
                coneOuterAngle: ZB.coneOuterAngle
              }, IB), BB.pannerAttr(ZB, IB)
            }
            return TB
          },
          setPosition: JB => (ZB && this.live.has(IB) && Number.isFinite(JB[0] + JB[1] + JB[2]) && BB.pos(JB[2], JB[1], JB[0], IB), TB)
        };
        return TB
      }
      startSpatial(BB, IB, ZB, TB, JB, oB, GB, vB, kB, cB) {
        const nB = this.sheet(UI[BB], !0);
        let hB = null;
        if (!JB) {
          if (this.failed.has(nB)) return null;
          const ZB = UI[BB] === HI ? null : (0, sI.j)(yI[BB]),
            TB = (0, sI.f)(MI(IB), Math.sqrt(cB), kB);
          if (hB = new PI(ZB, TB, this.now(), nB, this.voiceHost), !this.voices.admit(hB)) return null
        }
        const zB = this.start(BB, !0, IB, ZB, TB, JB);
        return hB && (hB.id = zB.id, hB.direct = "loaded" === nB.state() && !nB._playLock), nB.pannerAttr({
          coneOuterAngle: 360
        }, zB.id), nB.pannerAttr({
          ...iI,
          refDistance: kB
        }, zB.id), nB.pos(vB, GB, oB, zB.id), zB
      }
      aliveVoice(BB) {
        const IB = this.live.get(BB);
        if (!IB) return;
        const ZB = IB.howl._soundById(BB);
        if (ZB && !ZB._ended) return IB;
        this.forget(BB)
      }
      earDistSq(BB, IB, ZB) {
        if (!this.posed) return 0;
        const TB = BB - this.pose[2],
          JB = IB - this.pose[1],
          oB = ZB - this.pose[0];
        return TB * TB + JB * JB + oB * oB
      }
      start(BB, IB, ZB, TB, JB, oB) {
        const GB = MI(ZB),
          vB = this.sheet(UI[BB], IB);
        "unloaded" === vB.state() && vB.load();
        const kB = vB.play(yI[BB]),
          cB = GB * this.master;
        return vB.volume(cB, kB), this.live.set(kB, {
          howl: vB,
          rel: GB,
          gain: cB,
          fadeFrom: cB,
          fadeAt: 0,
          fadeMs: 0,
          rate: JB,
          handle: TB,
          spatial: IB,
          stopTimer: void 0
        }), 0 !== TB && this.core.set(TB, kB), 1 !== JB && vB.rate(JB, kB), oB && vB.loop(!0, kB), {
          howl: vB,
          id: kB
        }
      }
      sheet(BB, IB) {
        const ZB = rI(BB, IB);
        let TB = this.sheets.get(ZB);
        if (!TB) {
          const JB = this.createHowl(gI[BB], IB);
          JB.on("end", (BB => {
            JB.loop(BB) || this.forget(BB)
          })), JB.on("stop", (BB => {
            this.forget(BB)
          })), JB.on("play", (BB => {
            this.live.has(BB) && this.started.add(BB)
          })), JB.on("loaderror", (BB => {
            if ("loaded" !== JB.state()) {
              this.failed.add(JB);
              for (const [BB, IB] of this.live) IB.howl === JB && this.forget(BB)
            } else "number" === typeof BB && this.forget(BB)
          })), this.sheets.set(ZB, JB), TB = JB
        }
        return TB
      }
      setRel(BB, IB) {
        const ZB = this.live.get(BB);
        ZB && (mI(ZB), ZB.fadeMs = 0, ZB.rel = MI(IB), ZB.gain = ZB.rel * this.master, ZB.howl.volume(ZB.gain, BB))
      }
      fade(BB, IB, ZB, TB) {
        const JB = this.live.get(BB);
        if (!JB) return;
        mI(JB);
        const {
          howl: oB
        } = JB, GB = this.gainNow(JB);
        JB.rel = MI(IB), JB.gain = JB.rel * this.master;
        const vB = ZB > 0 ? Math.min(ZB, 65535) : 0,
          kB = 0 === vB || GB === JB.gain;
        JB.fadeMs = kB ? 0 : vB, kB ? oB.volume(JB.gain, BB) : (JB.fadeFrom = GB, JB.fadeAt = this.now(), oB.fade(GB, JB.gain, vB, BB)), TB && (kB ? oB.stop(BB) : JB.stopTimer = setTimeout((() => {
          JB.stopTimer = void 0, oB.stop(BB)
        }), vB))
      }
      gainNow(BB) {
        if (BB.fadeMs > 0) {
          const IB = (this.now() - BB.fadeAt) / BB.fadeMs;
          if (IB < 1) return BB.fadeFrom + (BB.gain - BB.fadeFrom) * Math.max(0, IB);
          BB.fadeMs = 0
        }
        return BB.gain
      }
      forget(BB) {
        this.started.delete(BB);
        const IB = this.live.get(BB);
        IB && (mI(IB), this.live.delete(BB), 0 !== IB.handle && this.core.get(IB.handle) === BB && this.core.delete(IB.handle))
      }
    }

    function rI(BB, IB) {
      return 2 * BB + (IB ? 1 : 0)
    }

    function mI(BB) {
      void 0 !== BB.stopTimer && (clearTimeout(BB.stopTimer), BB.stopTimer = void 0)
    }
    var XI = ZB(40664),
      LI = ZB(39195);
    class eI {
      constructor(BB, IB, ZB, TB) {
        this.key = BB, this.model = IB, this.host = TB, this.ah = void 0, this.records = void 0, this.origin = [0, 0, 0], this.count = 0, this.AJB = Number.NaN, this.sentOrigin = [Number.NaN, Number.NaN, Number.NaN], this.dirtyList = [], this.isDirty = void 0, this.tail = void 0, this.tailView = void 0, this.tailCut = new Uint8Array(0), this.made = !1, this.WN = !1, this.ah = Math.max(1, Math.ceil(ZB)), this.records = new Float32Array(this.ah * kI.b), this.isDirty = new Uint8Array(this.ah), this.tail = new Uint8Array(this.ah * NB.jc.Bytes), this.tailView = new DataView(this.tail.buffer), this.make(TB.cmd())
      }
      setOrigin(BB, IB, ZB) {
        this.origin[0] = BB, this.origin[1] = IB, this.origin[2] = ZB
      }
      markDirty(BB) {
        !this.WN && BB >= 0 && BB < this.ah && BB < NB.jc.Max && this.uN(BB, BB + 1)
      }
      commit(BB) {
        if (this.WN) return;
        (BB = Math.min(Math.max(Math.floor(BB), 0), this.ah, NB.jc.Max)) > this.count && this.uN(this.count, BB), this.count = BB;
        const {
          origin: IB,
          sentOrigin: ZB,
          dirtyList: TB
        } = this, JB = this.AJB !== BB, oB = ZB[0] !== IB[0] || ZB[1] !== IB[1] || ZB[2] !== IB[2];
        if (0 === TB.length && !JB && !oB) return;
        const GB = this.host.cmd();
        if (!GB || !this.make(GB)) return;
        const vB = TB.length,
          {
            records: kB,
            tailView: cB
          } = this;
        for (let nB = 0; nB < vB; nB++) {
          const BB = TB[nB],
            IB = BB * kI.b,
            ZB = nB * NB.jc.Bytes,
            JB = 0 !== kB[IB + kI.f] ? NB.jc.Hidden : 0;
          cB.setUint32(ZB, (BB | JB) >>> 0, !0), cB.setFloat32(ZB + 4, kB[IB], !0), cB.setFloat32(ZB + 8, kB[IB + 1], !0), cB.setFloat32(ZB + 12, kB[IB + 2], !0)
        }
        if ((0, NB.Se)(GB, 0, this.key, BB, IB, vB, this.tailOf(vB))) {
          for (let BB = 0; BB < vB; BB++) this.isDirty[TB[BB]] = 0;
          TB.length = 0, this.AJB = BB, ZB[0] = IB[0], ZB[1] = IB[1], ZB[2] = IB[2]
        }
      }
      grow(BB) {
        (BB = Math.ceil(BB)) <= this.ah || this.WN || (this.records = (0, LI.c)(this.records, new Float32Array(BB * kI.b)), this.isDirty = (0, LI.c)(this.isDirty, new Uint8Array(BB)), this.tail = new Uint8Array(BB * NB.jc.Bytes), this.tailView = new DataView(this.tail.buffer), this.ah = BB)
      }
      dispose() {
        this.WN || (this.WN = !0, this.host.WN(this, this.made ? this.key : null))
      }
      make(BB) {
        if (!this.made && BB) {
          const {
            item: IB,
            scale: ZB,
            yaw: TB
          } = this.model;
          this.made = (0, NB.We)(BB, 0, this.key, IB, ZB, TB)
        }
        return this.made
      }
      tailOf(BB) {
        const IB = BB * NB.jc.Bytes;
        return this.tailCut.buffer === this.tail.buffer && this.tailCut.length === IB || (this.tailCut = this.tail.subarray(0, IB)), this.tailCut
      }
      uN(BB, IB) {
        const {
          dirtyList: ZB,
          isDirty: TB
        } = this;
        for (let JB = BB; JB < IB; JB++) 0 === TB[JB] && (TB[JB] = 1, ZB.push(JB))
      }
    }
    var uI = ZB(663);
    class fI {
      constructor(BB) {
        this.keys = 0, this.live = new Set, this.owing = new Set, this.host = void 0, this.host = {
          cmd: BB,
          owes: BB => {
            this.owing.add(BB)
          },
          settled: (BB, IB) => {
            this.owing.delete(BB), IB && this.live.delete(BB)
          }
        }
      }
      create(BB, IB) {
        if (ZB = BB, !uI.m.includes(ZB)) return null;
        var ZB;
        const TB = new lI(++this.keys, nB.i.indexOf(BB), IB, this.host);
        return this.live.add(TB), TB
      }
      disposeAll() {
        for (const BB of [...this.live]) BB.dispose()
      }
      flush() {
        if (0 === this.owing.size) return;
        const BB = this.host.cmd();
        for (const IB of this.owing)
          if (!IB.sync(BB)) return
      }
    }
    class lI {
      constructor(BB, IB, ZB, TB) {
        this.key = BB, this.lifeform = IB, this.scale = ZB, this.host = TB, this.feet = [0, 0, 0], this.yaw = 0, this.visible = !1, this.owed = 1, this.WN = !1, this.sync()
      }
      setPose(BB, IB) {
        this.WN || (this.feet[0] = BB[0], this.feet[1] = BB[1], this.feet[2] = BB[2], this.yaw = IB, this.owed |= 2, this.sync())
      }
      setVisible(BB) {
        this.WN || BB === this.visible || (this.visible = BB, this.owed |= 4, this.sync())
      }
      dispose() {
        this.WN || (this.WN = !0, this.owed = 1 & this.owed ? 0 : 8, this.sync())
      }
      sync() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.host.cmd();
        return this.write(BB) ? (this.host.settled(this, this.WN), !0) : (this.host.owes(this), !1)
      }
      write(BB) {
        if (!BB) return this.owed = 0, !0;
        if (1 & this.owed) {
          if (!(0, NB.$e)(BB, 0, this.key, this.lifeform, this.scale)) return !1;
          this.owed &= -2
        }
        const IB = (2 & this.owed ? NB.Ic.Pose : 0) | (4 & this.owed ? NB.Ic.Visible : 0);
        if (0 !== IB) {
          if (!(0, NB._e)(BB, 0, this.key, IB, this.visible ? 1 : 0, this.feet, this.yaw)) return !1;
          this.owed &= -7
        }
        if (8 & this.owed) {
          if (!(0, NB.Xe)(BB, 0, this.key)) return !1;
          this.owed = 0
        }
        return !0
      }
    }
    var AI = ZB(41028);

    function tI(BB, IB, ZB, TB) {
      return (0, AI.b)(), (0, NB.Hf)(BB, IB, ZB, TB)
    }
    var bI = ZB(39202),
      xI = ZB(40649);
    const EI = [0, 0, 0],
      DI = [0, 0, 0],
      KI = [0, 0, 0],
      VI = [0, 0, 0],
      SI = {
        origin: [0, 0, 0],
        direction: [0, 0, 1]
      },
      BZ = [0, 0, 0],
      IZ = [0, 0],
      ZZ = [1, 1, 1],
      TZ = 1 / 3;
    const JZ = cI.h;

    function oZ(BB) {
      const IB = cI.d[BB],
        ZB = IB && cI.h[IB.mainMultiblock];
      return ZB && {
        main: ZB,
        x: IB.compX,
        y: IB.compY,
        z: IB.compZ
      }
    }

    function GZ(BB) {
      if (null === BB || void 0 === BB) return NB.Rc;
      const IB = +BB;
      return Number.isInteger(IB) && IB >= -2147483648 && IB <= 2147483647 && String(IB) === String(BB) ? IB : NB.Rc
    }

    function vZ(BB, IB, ZB) {
      return (0, NB.Of)(BB, 0, IB, null !== ZB && void 0 !== ZB ? ZB : Number.NaN)
    }
    class kZ {
      constructor(BB) {
        this.deps = BB, this.api = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.tables = void 0, this.meshKeys = 0, this.liveMeshes = new Set, this.poolKeys = 0, this.livePools = new Set, this.cameraTurn = new bI.c((() => this.tables.getClientOption("forcedCameraDirectionTransitionMs")), (BB => {
          var IB, ZB;
          null === (IB = (ZB = this.deps).setLocalOptions) || void 0 === IB || IB.call(ZB, BB)
        })), this.mobModels = new fI((() => this.deps.cmd())), this.owedFrees = [], this.pendingStyle = void 0, this.pendingFar = void 0, this.farSet = !1, this.routeMesh = 0, this.routeOffset = 0, this.routeLook = "", this.routeSlide = {
          uvOffset: [0, 0]
        }, this.poolHost = {
          cmd: () => this.deps.cmd(),
          WN: (BB, IB) => {
            this.livePools.delete(BB), null !== IB && (this.owedFrees.push(IB), this.flushOwed())
          }
        }, this.api = BB.api, this.live = BB.live, this.chunks = BB.chunks, this.items = BB.items, this.tables = BB.tables
      }
      isLocal(BB) {
        return null !== BB && void 0 !== BB && +BB === this.api.localId
      }
      assertLocal(BB, IB) {
        if (!this.isLocal(BB)) throw new Error(`Attempted to ${IB} for a player that is not the local player`)
      }
      aU(BB) {
        const IB = this.api.aU(BB);
        if (!IB) throw new Error(`Entity ${BB} has no replicated position`);
        return IB
      }
      checkValid(BB) {
        return !!this.deps.isSessionLive() && (null === BB || void 0 === BB || this.api.checkValid(BB))
      }
      isAlive(BB) {
        return !1 !== this.api.isAlive(BB)
      }
      getItemStat(BB, IB, ZB) {
        return this.isLocal(BB) || null !== BB && "Player" === this.api.getEntityType(BB) ? this.tables.getItemStat(IB, ZB) : this.tables.getDefaultItemStat(IB, ZB)
      }
      getClientOption(BB, IB) {
        return this.assertLocal(BB, "get a client option"), this.tables.getClientOption(IB)
      }
      openShop(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZB = arguments.length > 2 ? arguments[2] : void 0;
        this.assertLocal(BB, "open shop"), GB.l.Gq("showShopFromServer", {
          toggle: IB,
          kB: ZB
        }, !0)
      }
      sendMessage(BB, IB, ZB) {
        this.assertLocal(BB, "send a message");
        const TB = "string" === typeof IB ? [{
          str: IB,
          style: ZB
        }] : IB;
        GB.l.Gq("chat", {
          content: TB
        }, !0)
      }
      getEntityType(BB) {
        return this.api.getEntityType(BB)
      }
      getEntityName(BB) {
        const IB = GZ(BB);
        return IB === NB.Rc ? void 0 : (0, XI.k)(this.api, IB)
      }
      hasEffect(BB, IB) {
        const ZB = GZ(BB);
        return ZB !== NB.Rc && (0, XI.h)(this.api, ZB, IB)
      }
      getMetaInfo(BB) {
        return this.tables.getMetaInfo(BB)
      }
      getPlayerDbId(BB) {
        return this.assertLocal(BB, "get a DB ID"), this.deps.playerDbId()
      }
      getBlockData(BB, IB, ZB) {
        if (!this.chunks.dataCleared(BB, IB, ZB)) return (0, XI.d)(this.api, BB, IB, ZB)
      }
      UH(BB, IB, ZB, TB) {
        this.setBlockId(BB, IB, ZB, this.tables.getItemId(TB))
      }
      setOtherEntitySetting(BB, IB, ZB, TB) {
        if (!this.isLocal(BB)) throw new Error("Attempted to set an other-entity setting for a player that is not the local player");
        if (!Object.hasOwn(NB.dd, ZB)) throw new Error(`Unknown other-entity setting ${ZB}`);
        const JB = NB.dd[ZB],
          oB = GZ(IB);
        if (oB === NB.Rc || !this.deps.beforeWrite()) return;
        const GB = (0, rB.i)(TB);
        if (GB.length > 16384) throw new Error(`The other-entity setting ${ZB}'s value is over 16384 bytes`);
        const vB = this.api.memoryView(Uint8Array, this.api.scratch(), GB.length, "set_other_entity_setting's value");
        vB && (vB.set(GB), this.api.queries.setOtherEntitySetting(oB, JB, GB.length))
      }
      getPositionView(BB) {
        return this.live.position(+BB)
      }
      readDrawnPosition(BB, IB) {
        return this.api.readDrawnPosition(GZ(BB), IB)
      }
      getDrawnHeading(BB) {
        const IB = GZ(BB),
          ZB = (IB === NB.Rc ? 0 : this.api.queries.directorEntity(IB)) >= NB.gb.BYTES ? this.api.memoryData(this.api.scratch(), NB.gb.BYTES, 8, "getDrawnHeading's DirectorEntity") : null;
        if (!ZB) return null;
        if (1 === NB.gb.headingIsDrawn(ZB, 0)) return NB.gb.heading(ZB, 0);
        const TB = this.api.apiView;
        return this.isLocal(BB) && 0 === (NB.p.playerFlags(TB, 0) & NB.Bd.FreeCam) ? NB.p.heading(TB, 0) : null
      }
      getLocalPlayerMovement() {
        const BB = NB.p.playerFlags(this.api.apiView, 0);
        return 0 === (BB & NB.Bd.Replay) && this.api.readDrawnPosition(this.api.localId, KI) ? {
          onGround: 0 !== (BB & NB.Bd.OnGround),
          jumpHeld: 0 !== (BB & NB.Bd.JumpHeld)
        } : null
      }
      FZB(BB) {
        return this.isLocal(BB) ? this.items.sv() : null
      }
      getInventoryItems() {
        return this.items.playerItems()
      }
      getHeldGunInaccuracy() {
        var BB, IB;
        return "Gun" === (null === (BB = this.aliveHeld()) || void 0 === BB || null === (IB = BB.typeObj) || void 0 === IB ? void 0 : IB.type) ? this.items.inaccuracy : null
      }
      aliveHeld() {
        return !1 === this.api.isAlive(this.api.localId) ? null : this.items.sv()
      }
      isCrosshairShown() {
        var BB, IB;
        const ZB = (0, hI.d)(TB.d.get("crosshairGameView"), TB.d.get("crosshairShownOverride"));
        if (null !== ZB) return ZB;
        const JB = null === (BB = this.aliveHeld()) || void 0 === BB ? void 0 : BB.typeObj,
          oB = "Gun" === (null === JB || void 0 === JB ? void 0 : JB.type),
          GB = oB || !0 === (null === JB || void 0 === JB ? void 0 : JB.showsAimingUi),
          vB = 0 === (NB.p.playerFlags(this.api.apiView, 0) & NB.Bd.ZoomFirstPerson),
          kB = null !== (IB = this.tables.getClientOption("gunshotOrigin")) && void 0 !== IB ? IB : null;
        return (0, hI.g)({
          gun: oB,
          aimable: GB
        }, vB, (0, zI.c)(), kB)
      }
      setCrosshairShown(BB) {
        TB.d.set({
          crosshairShownOverride: BB
        })
      }
      getInventoryFreeSlotCount(BB) {
        return this.isLocal(BB) ? this.items.freeSlots() : null
      }
      getSelectedInventorySlotI(BB) {
        return this.isLocal(BB) ? this.items.selectedSlot : null
      }
      getItemSlot(BB, IB) {
        return this.isLocal(BB) ? this.items.slot(IB) : null
      }
      swapInventorySlots(BB, IB) {
        return this.items.swap(BB, IB)
      }
      isPlayerCrouching(BB) {
        if (this.isLocal(BB)) return 0 !== (NB.p.playerFlags(this.api.apiView, 0) & NB.Bd.Crouching);
        const IB = GZ(BB);
        return IB !== NB.Rc && 1 === this.api.queries.entityCrouching(IB)
      }
      getMiningBlock() {
        return this.live.breakingPosition()
      }
      isMining() {
        return 0 !== (NB.p.playerFlags(this.api.apiView, 0) & NB.Bd.AttemptingBreak)
      }
      getTargetedBlock() {
        return this.live.lBB()
      }
      getActionRay() {
        const BB = this.api.apiView;
        for (let IB = 0; IB < 3; IB++) SI.origin[IB] = NB.p.vIB(BB, 0, IB), SI.direction[IB] = NB.p.actionDir(BB, 0, IB);
        return SI
      }
      canModifyBlockAt(BB, IB, ZB) {
        return 1 === this.api.queries.canModify(BB, IB, ZB)
      }
      isSolidToPlayerBlockId(BB) {
        return this.tables.isSolidBlockId(BB) && !this.chunks.isWalkThrough(BB)
      }
      blockNameToBlockId(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.tables.blockNameToBlockId(BB, IB)
      }
      blockIdToBlockName(BB) {
        return this.tables.nameOfId(BB)
      }
      HIB(BB, IB, ZB, TB, JB) {
        return 1 === this.api.queries.terrainBlocked(TB, BB, IB, ZB, GZ(null !== JB && void 0 !== JB ? JB : null))
      }
      getChunkVersion(BB, IB, ZB) {
        return this.chunks.version(BB, IB, ZB)
      }
      scanBlocks(BB, IB, ZB, TB, JB, oB, GB, vB) {
        return this.chunks.scan(BB, IB, ZB, TB, JB, oB, GB, vB)
      }
      isBlockInLoadedChunk(BB, IB, ZB) {
        return this.chunks.isLoaded(BB, IB, ZB)
      }
      getBlockId(BB, IB, ZB) {
        return this.chunks.KG(BB, IB, ZB)
      }
      playSound(BB, IB, ZB, TB, JB) {
        let oB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        if (!this.isLocal(BB)) return null;
        const GB = this.playSoundFrom(IB, ZB, JB, oB);
        return 1 === TB ? GB : GB.rate(TB)
      }
      preloadSounds(BB) {
        var IB, ZB;
        null === (IB = (ZB = this.deps).preloadSounds) || void 0 === IB || IB.call(ZB, BB)
      }
      playSoundFrom(BB, IB, ZB, TB) {
        var JB, oB;
        const GB = this.deps.playSound;
        if (!GB) return YI.d;
        const vB = null === ZB || void 0 === ZB ? void 0 : ZB.JB,
          kB = null !== (JB = null === ZB || void 0 === ZB ? void 0 : ZB.maxHearDist) && void 0 !== JB ? JB : nI.g,
          cB = null !== (oB = null === ZB || void 0 === ZB ? void 0 : ZB.refDistance) && void 0 !== oB ? oB : nI.h;
        let nB = null;
        if (Array.isArray(vB)) EI[0] = vB[0], EI[1] = vB[1], EI[2] = vB[2], nB = EI;
        else if (void 0 !== vB && null !== vB) {
          const BB = GZ(vB);
          if (!this.api.isLocal(BB)) {
            if (!this.api.readPosition(BB, EI)) return YI.d;
            nB = EI
          }
        }
        return GB(BB, IB, nB, nB && this.ear(), kB, cB, TB)
      }
      ear() {
        if (this.api.readPosition(this.api.localId, DI)) DI[1] += pI;
        else {
          const BB = this.api.apiView;
          if (0 === NB.p.viewProj(BB, 0, 3) && 0 === NB.p.viewProj(BB, 0, 7) && 0 === NB.p.viewProj(BB, 0, 11)) return null;
          for (let IB = 0; IB < 3; IB++) DI[IB] = NB.p.eye(BB, 0, IB)
        }
        return Number.isFinite(DI[0] + DI[1] + DI[2]) ? DI : null
      }
      setBlockId(BB, IB, ZB, TB) {
        if (!Number.isInteger(TB) || TB < 0 || TB > 65535) throw new Error(`Invalid block id ${TB}`);
        if (!this.deps.beforeWrite() || !this.chunks.isLoaded(BB, IB, ZB)) return;
        const JB = Math.floor(BB),
          oB = Math.floor(IB),
          GB = Math.floor(ZB),
          vB = this.predictedCells(JB, oB, GB, TB);
        if (1 === this.api.queries.UH(JB, oB, GB, TB)) {
          for (let BB = 0; BB < vB.length; BB += 5) this.chunks.setOverlay(vB[BB], vB[BB + 1], vB[BB + 2], vB[BB + 3], 1 === vB[BB + 4]);
          this.live.refreshTarget()
        }
      }
      particlesEnabled() {
        return this.deps.particles.enabled()
      }
      createParticles(BB, IB) {
        return this.deps.particles.create(BB, IB)
      }
      playParticleEffect(BB) {
        this.deps.particles.playEffect(BB)
      }
      burstParticlePreset(BB, IB, ZB) {
        this.deps.particles.burstPreset(BB, IB, ZB)
      }
      createGameMesh(BB, IB, ZB) {
        const TB = ++this.meshKeys,
          JB = this.deps.cmd();
        if (!JB) return TB;
        const {
          look: oB,
          colour: GB
        } = function(BB) {
          switch (BB.kind) {
            case void 0:
            case "flatEmissive":
              return BB.onTop ? {
                look: NB.Pb.FlatOnTop,
                colour: [...BB.rgb, BB.alpha]
              } : BB.opaque ? {
                look: NB.Pb.FlatOpaque,
                colour: [...BB.rgb, 1]
              } : {
                look: NB.Pb.Flat,
                colour: [...BB.rgb, BB.alpha]
              };
            case "chevronPath":
              return {
                look: NB.Pb.Chevrons, colour: [...(0, FI.b)(BB.colour), BB.alpha]
              };
            case "furnaceFire":
              return {
                look: NB.Pb.FurnaceFire, colour: [1, 1, 1, 1]
              }
          }
        }(IB), vB = Math.floor(BB.positions.length / 3), kB = function(BB, IB) {
          const ZB = Math.floor(BB.positions.length / 3),
            TB = BB.indices.length,
            JB = ZB * (IB ? 5 : 3),
            oB = new Uint8Array(4 * (JB + TB)),
            GB = new DataView(oB.buffer);
          for (let cB = 0; cB < 3 * ZB; cB++) GB.setFloat32(4 * cB, BB.positions[cB], !0);
          if (IB) {
            var vB;
            const IB = null !== (vB = BB.uvs) && void 0 !== vB ? vB : [];
            for (let BB = 0; BB < 2 * ZB; BB++) {
              var kB;
              GB.setFloat32(4 * (3 * ZB + BB), null !== (kB = IB[BB]) && void 0 !== kB ? kB : 0, !0)
            }
          }
          for (let cB = 0; cB < TB; cB++) GB.setUint32(4 * (JB + cB), BB.indices[cB], !0);
          return oB
        }(BB, (0, kI.h)(IB));
        return (0, NB.Ee)(JB, 0, TB, oB, GB, ZB, vB, BB.indices.length, kB) && this.liveMeshes.add(TB), TB
      }
      setGameMesh(BB, IB) {
        var ZB;
        const TB = this.deps.cmd();
        if (!TB) return;
        let JB = 0;
        IB.anchor && (JB |= NB.Tb.Anchor, BZ[0] = IB.anchor[0], BZ[1] = IB.anchor[1], BZ[2] = IB.anchor[2]), void 0 !== IB.visible && (JB |= NB.Tb.Visible), IB.uvOffset && (JB |= NB.Tb.UvOffset, IZ[0] = IB.uvOffset[0], IZ[1] = IB.uvOffset[1]);
        const oB = null !== (ZB = IB.visibility) && void 0 !== ZB ? ZB : 1;
        void 0 !== IB.visibility && (JB |= NB.Tb.Visibility), IB.scale && (JB |= NB.Tb.Scale, ZZ[0] = IB.scale[0], ZZ[1] = IB.scale[1], ZZ[2] = IB.scale[2]), 0 !== JB && (0, NB.Le)(TB, 0, BB, JB, IB.visible ? 1 : 0, BZ, IZ, oB, ZZ)
      }
      disposeGameMesh(BB) {
        const IB = this.deps.cmd();
        IB && !(0, NB.He)(IB, 0, BB) || this.liveMeshes.delete(BB)
      }
      hasPackModel(BB) {
        var IB, ZB, TB;
        return null !== (IB = null === (ZB = (TB = this.deps).hasPackModel) || void 0 === ZB ? void 0 : ZB.call(TB, BB)) && void 0 !== IB && IB
      }
      disposeGameOutput() {
        const BB = BB => {
          try {
            BB()
          } catch (IB) {
            console.error("Error freeing client game output", IB)
          }
        };
        for (const IB of [...this.liveMeshes]) BB((() => {
          this.disposeGameMesh(IB)
        }));
        for (const IB of [...this.livePools]) BB((() => {
          IB.dispose()
        }));
        BB((() => {
          this.mobModels.disposeAll()
        })), BB((() => {
          this.setGroundArrowStyle(null)
        })), BB((() => {
          this.setRouteChevrons(null), this.routeOffset = 0, this.routeLook = ""
        })), BB((() => {
          this.setCrosshairShown(null)
        })), BB((() => {
          this.cameraTurn.dispose()
        })), BB((() => {
          this.farSet && (this.farSet = !1, this.setCameraFar(null))
        }))
      }
      createInstancePool(BB, IB) {
        const ZB = this.tables.idOf(BB.item);
        if (void 0 === ZB) return null;
        const TB = new eI(++this.poolKeys, {
          item: ZB,
          scale: BB.scale,
          yaw: BB.yaw
        }, IB, this.poolHost);
        return this.livePools.add(TB), TB
      }
      createMobModel(BB, IB) {
        return this.mobModels.create(BB, IB)
      }
      setRouteChevrons(BB) {
        if (0 !== this.routeMesh && (this.disposeGameMesh(this.routeMesh), this.routeMesh = 0), !BB || 0 === BB.cells.length) return;
        const IB = `${BB.colour} ${BB.alpha}`;
        IB !== this.routeLook && (this.routeLook = IB, this.routeOffset = 0), this.routeMesh = this.createGameMesh(function(BB) {
          const [IB, ZB, TB] = BB[0].pos, JB = [], oB = [], GB = [];
          return BB.forEach(((BB, vB) => {
            let {
              pos: kB,
              way: [cB, nB]
            } = BB;
            const hB = kB[0] - IB + .5,
              zB = kB[1] - ZB + .04,
              FB = kB[2] - TB + .5,
              [NB, gB] = [.35 * -nB, .35 * cB],
              [qB, yB] = [vB * TZ, (vB + 1) * TZ],
              UB = JB.length / 3;
            JB.push(hB - .5 * cB + NB, zB, FB - .5 * nB + gB), JB.push(hB - .5 * cB - NB, zB, FB - .5 * nB - gB), JB.push(hB + .5 * cB + NB, zB, FB + .5 * nB + gB), JB.push(hB + .5 * cB - NB, zB, FB + .5 * nB - gB), oB.push(0, qB, 1, qB, 0, yB, 1, yB), GB.push(UB, UB + 1, UB + 2, UB + 1, UB + 3, UB + 2)
          })), {
            positions: JB,
            uvs: oB,
            indices: GB
          }
        }(BB.cells), {
          kind: "chevronPath",
          colour: BB.colour,
          alpha: BB.alpha
        }, BB.cells[0].pos), this.setRouteSlide()
      }
      slideRoute(BB) {
        0 !== this.routeMesh && (this.routeOffset = (this.routeOffset + Math.min(BB, 250) / 1e3 * 1.2 * TZ) % 1, this.setRouteSlide())
      }
      setRouteSlide() {
        this.routeSlide.uvOffset[1] = -this.routeOffset, this.setGameMesh(this.routeMesh, this.routeSlide)
      }
      setGroundArrowStyle(BB) {
        this.pendingStyle = BB, this.flushOwed()
      }
      flushOwed() {
        this.mobModels.flush();
        const BB = this.owedFrees;
        if (0 === BB.length && void 0 === this.pendingStyle && void 0 === this.pendingFar) return;
        const IB = this.deps.cmd();
        if (!IB) return BB.length = 0, void(this.pendingFar = void 0);
        let ZB = 0;
        for (; ZB < BB.length && (0, NB.Ue)(IB, 0, BB[ZB]);) ZB++;
        BB.splice(0, ZB);
        const TB = this.pendingStyle;
        if (void 0 !== TB) {
          (TB ? (0, NB.Pf)(IB, 0, TB.width, TB.alpha, 1, TB.endAtSolidFace ? 1 : 0) : (0, NB.Pf)(IB, 0, 0, 0, 0, 0)) && (this.pendingStyle = void 0)
        }
        const JB = this.pendingFar;
        void 0 !== JB && (0, NB.Kf)(IB, 0, null !== JB && void 0 !== JB ? JB : 0, null === JB ? 1 : 0) && (this.pendingFar = void 0)
      }
      setNametagOffset(BB, IB) {
        const ZB = this.deps.cmd(),
          TB = GZ(BB);
        ZB && TB !== NB.Rc && (0, NB.Tf)(ZB, 0, TB, IB)
      }
      setFacingTolerance(BB, IB) {
        const ZB = this.deps.cmd(),
          TB = GZ(BB);
        ZB && TB !== NB.Rc && vZ(ZB, TB, IB)
      }
      forEachEntity(BB) {
        const {
          api: IB
        } = this;
        for (let ZB = 0; ZB < IB.idStr.length; ZB++) {
          const TB = IB.idStr[ZB];
          null === TB || CB(IB.kinds[ZB]) || BB(TB)
        }
      }
      getEntityInfo(BB) {
        return this.deps.entityInfo.get(BB)
      }
      isEntityInteractable(BB) {
        const IB = GZ(BB);
        return IB !== NB.Rc && 1 === this.api.queries.entityInteractable(IB)
      }
      isLocalPlayer(BB) {
        return this.isLocal(BB)
      }
      getLineOwner(BB) {
        var IB;
        const ZB = null === (IB = this.deps.entityInfo.get(BB)) || void 0 === IB ? void 0 : IB.meshOpts;
        if (!ZB) return null;
        try {
          const {
            lineToEId: BB
          } = JSON.parse(ZB);
          return null !== BB && void 0 !== BB ? BB : null
        } catch {
          return null
        }
      }
      getCameraPosition() {
        const BB = this.api.apiView;
        return VI[0] = NB.p.eye(BB, 0, 0), VI[1] = NB.p.eye(BB, 0, 1), VI[2] = NB.p.eye(BB, 0, 2), VI
      }
      getCameraFar() {
        return NB.p.cameraFar(this.api.apiView, 0)
      }
      setCameraFar(BB) {
        null !== BB && (this.farSet = !0), this.pendingFar = BB, this.flushOwed()
      }
      turnCamera(BB, IB) {
        this.cameraTurn.turn(BB, IB)
      }
      clearPickupDelay(BB) {
        const IB = this.deps.cmd(),
          ZB = GZ(BB);
        IB && ZB !== NB.Rc && (0, NB.pe)(IB, 0, ZB)
      }
      sendChat(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const ZB = this.deps.sendCmd();
        ZB && tI(ZB, 0, xI.e.Chat, (0, rB.i)((0, xI.l)({
          Xn: BB,
          Ln: IB
        })))
      }
      sendCommand(BB) {
        BB.length <= 119 && this.sendChat(`/${BB}`)
      }
      predictedCells(BB, IB, ZB, TB) {
        const JB = this.chunks,
          oB = [],
          GB = (BB, IB, ZB, TB, JB) => {
            oB.push(BB, IB, ZB, TB, this.tables.blockRootId(JB) === this.tables.blockRootId(TB) ? 0 : 1)
          },
          vB = JB.KG(BB, IB, ZB),
          kB = oZ(vB);
        if (kB) {
          const [TB, oB, cB] = [BB - kB.x, IB - kB.y, ZB - kB.z], nB = JZ[JB.KG(TB, oB, cB)], hB = null === nB || void 0 === nB ? void 0 : nB.positions.some((BB => BB.id === vB && BB.x === kB.x && BB.y === kB.y && BB.z === kB.z));
          for (const BB of (hB && nB ? nB : kB.main).positions) JB.KG(TB + BB.x, oB + BB.y, cB + BB.z) === BB.id && GB(TB + BB.x, oB + BB.y, cB + BB.z, 0, BB.id)
        }
        const cB = oZ(TB);
        if (cB)
          for (const hB of cB.main.positions) {
            const [TB, oB, vB] = [BB + hB.x - cB.x, IB + hB.y - cB.y, ZB + hB.z - cB.z];
            GB(TB, oB, vB, hB.id, JB.KG(TB, oB, vB))
          } else GB(BB, IB, ZB, TB, vB);
        const nB = this.tables;
        if ((0 !== nB.attachedTopOf(vB) || 0 !== nB.attachedTopOf(TB)) && JB.isLoaded(BB, IB + 1, ZB)) {
          let kB = JB.KG(BB, IB + 1, ZB);
          for (let TB = 0; TB < oB.length; TB += 5) oB[TB] === BB && oB[TB + 1] === IB + 1 && oB[TB + 2] === ZB && (kB = oB[TB + 3]);
          const cB = this.attachedTopWrite(vB, TB, kB);
          void 0 !== cB && GB(BB, IB + 1, ZB, cB, kB)
        }
        return oB
      }
      attachedTopWrite(BB, IB, ZB) {
        const TB = this.tables,
          JB = TB.attachedTopOf(BB),
          oB = TB.attachedTopOf(IB),
          GB = 0 !== JB && 0 !== ZB && TB.blockRootId(ZB) === TB.blockRootId(JB);
        return 0 !== JB && 0 !== oB && TB.blockRootId(BB) === TB.blockRootId(IB) ? GB && ZB !== oB ? oB : void 0 : 0 === oB || !GB && 0 !== ZB ? GB ? 0 : void 0 : oB
      }
    }
    const cZ = NB.cc + NB.fc * NB.mc.BYTES,
      nZ = 2147483647,
      hZ = new TextDecoder,
      zZ = new TextEncoder,
      FZ = Object.freeze({
        Hn: 0,
        Dv: null,
        amountAddedToSlot: 0
      }),
      NZ = new Proxy({}, {
        get: () => () => NB.ad
      });

    function gZ(BB) {
      return Number.isInteger(BB) && BB >= 0 && BB <= 65535
    }

    function qZ(BB) {
      return Number.isInteger(BB) && BB >= 0 && BB <= 4294967295
    }
    class yZ {
      constructor(BB) {
        this.deps = BB, this.XJ = [0, 0, 0], this.inaccuracy = 0, this.version = 0, this.notified = 0, this.iconChanged = !1, this.facades = new Array(NB.fc), this.ids = new Uint16Array(NB.fc), this.amounts = new Uint16Array(NB.fc), this.attrRead = new Float64Array(NB.fc).fill(-1), this.stale = new Uint16Array(NB.fc), this.staleVersion = new Uint32Array(NB.fc), this.instances = new Uint32Array(NB.fc), this.viewPtr = 0, this.viewVersion = -1, this.len = 0, this.selected = 0, this.slotIconId = 0, this.stopped = !1, this.listeners = new Set
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
      slot(BB) {
        var IB;
        return Number.isInteger(BB) && BB >= 0 && BB < this.len && 0 !== this.ids[BB] && null !== (IB = this.facades[BB]) && void 0 !== IB ? IB : null
      }
      sv() {
        return this.slot(this.selected)
      }
      playerItems() {
        const BB = [];
        for (let IB = 0; IB < Math.min(NB.nd, this.len); IB++) BB.push(this.slot(IB));
        return BB
      }
      freeSlots() {
        let BB = 0;
        for (let IB = 0; IB < Math.min(NB.nd - NB.f, this.len); IB++) 0 === this.ids[IB] && BB++;
        return BB
      }
      amountOf(BB) {
        let IB = 0;
        for (let TB = 0; TB < Math.min(NB.nd, this.len); TB++) {
          const JB = this.slot(TB);
          var ZB;
          if ((null === JB || void 0 === JB ? void 0 : JB.name) === BB) IB += null !== (ZB = JB.amount) && void 0 !== ZB ? ZB : 1
        }
        return IB
      }
      instance(BB) {
        var IB;
        return null !== (IB = this.instances[BB]) && void 0 !== IB ? IB : 0
      }
      watch(BB) {
        return this.listeners.add(BB), () => {
          this.listeners.delete(BB)
        }
      }
      touch() {
        this.version++
      }
      flush(BB) {
        if (this.version !== this.notified || this.iconChanged) {
          this.notified = this.version, this.iconChanged = !1;
          for (const ZB of [...this.listeners]) try {
            ZB()
          } catch (IB) {
            BB(IB)
          }
        }
      }
      chestOpened(BB, IB, ZB) {
        this.XJ[0] = BB, this.XJ[1] = IB, this.XJ[2] = ZB, this.version++
      }
      refresh() {
        const BB = this.deps.api.apiView,
          IB = NB.p.inventoryViewPtr(BB, 0),
          ZB = NB.p.inventoryVersion(BB, 0),
          TB = NB.p.selectedSlot(BB, 0);
        TB !== this.selected && (this.selected = TB, this.version++);
        const JB = NB.p.slotIcon(BB, 0);
        if (JB !== this.slotIconId && (this.slotIconId = JB, this.iconChanged = !0), IB === this.viewPtr && ZB === this.viewVersion) return;
        this.viewPtr = IB, this.viewVersion = ZB;
        const oB = this.deps.api.memoryData(IB, cZ, 4, "the inventory view"),
          GB = oB ? Math.min(oB.getUint32(0, !0), NB.fc) : 0;
        GB !== this.len && (this.len = GB, this.version++);
        let vB = 0;
        for (let kB = 0; kB < NB.fc; kB++) {
          const BB = NB.cc + kB * NB.mc.BYTES,
            IB = null !== oB && kB < GB ? NB.mc.item(oB, BB) : 0;
          if (0 === IB || null === oB) {
            0 !== this.ids[kB] && (this.ids[kB] = 0, this.attrRead[kB] = -1, this.instances[kB]++, this.version++);
            continue
          }
          const ZB = NB.mc.amount(oB, BB),
            TB = NB.mc.attrVersion(oB, BB);
          IB === this.ids[kB] && ZB === this.amounts[kB] || this.fill(kB, IB, ZB), TB !== this.attrRead[kB] && (this.stale[vB] = kB, this.staleVersion[vB] = TB, vB++)
        }
        vB > 0 && this.fetchAttributes(vB)
      }
      fill(BB, IB, ZB) {
        const {
          tables: TB
        } = this.deps, JB = IB !== this.ids[BB];
        let oB = this.facades[BB];
        oB || (oB = {
          name: "",
          amount: null,
          attributes: {
            customAttributes: {}
          },
          typeObj: null
        }, this.facades[BB] = oB), JB && (oB.name = TB.nameOfId(IB), oB.typeObj = TB.itemType(IB), oB.attributes = {
          customAttributes: {}
        }, this.attrRead[BB] = -1, this.instances[BB]++), oB.amount = 0 === ZB ? null : ZB, this.ids[BB] = IB, this.amounts[BB] = ZB, this.version++
      }
      fetchAttributes(BB) {
        const {
          api: IB,
          onError: ZB
        } = this.deps, TB = IB.memoryView(Uint16Array, IB.scratch(), BB, "item_attributes_batch's slots");
        if (!TB) return void this.markRead(BB);
        TB.set(this.stale.subarray(0, BB));
        const JB = IB.queries.itemAttributesBatch(BB),
          oB = 4294967295 === JB ? null : IB.memoryData(IB.scratch(), JB, 4, "item_attributes_batch's answer");
        if (!oB) return void this.markRead(BB);
        const GB = new Uint8Array(oB.buffer, oB.byteOffset, JB);
        for (let kB = 0; kB + 8 <= JB;) {
          const BB = oB.getUint16(kB, !0),
            IB = oB.getUint32(kB + 4, !0),
            TB = GB.subarray(kB + 8, kB + 8 + IB);
          kB += 8 + (0, zB.xe)(IB);
          const JB = this.facades[BB];
          if (JB && 0 !== this.ids[BB] && 0 !== IB) {
            try {
              JB.attributes = JSON.parse(hZ.decode(TB))
            } catch (vB) {
              ZB(vB)
            }
            this.version++
          }
        }
        this.markRead(BB)
      }
      markRead(BB) {
        for (let IB = 0; IB < BB; IB++) this.attrRead[this.stale[IB]] = this.staleVersion[IB]
      }
      swap(BB, IB) {
        return gZ(BB) && gZ(IB) && this.settle(this.queries().invSwap(BB, IB))
      }
      move(BB, IB, ZB) {
        return gZ(BB) && gZ(IB) && qZ(ZB) && this.settle(this.queries().invMove(BB, IB, ZB))
      }
      quickMove(BB, IB, ZB, TB) {
        var JB, oB;
        if (!gZ(BB) || !gZ(IB) || !gZ(ZB) || null !== TB && !qZ(TB)) return null;
        const GB = this.queries().invQuickMove(BB, IB, ZB, null === TB ? -1 : Math.min(TB, nZ)),
          vB = GB === NB.ad ? NB.zb : null !== (JB = null === (oB = this.extras()) || void 0 === oB ? void 0 : oB[1]) && void 0 !== JB ? JB : NB.zb;
        return this.settle(GB), vB === NB.zb ? null : vB
      }
      remove(BB, IB, ZB) {
        return gZ(BB) && qZ(IB) && this.settle(this.queries().invRemove(BB, IB, ZB ? 1 : 0))
      }
      selectSlot(BB) {
        return gZ(BB) && this.settle(this.queries().selectSlot(BB))
      }
      closeChest() {
        return this.settle(this.queries().closeChest())
      }
      enchant(BB, IB, ZB) {
        if (!gZ(BB) || !Number.isInteger(IB)) return !1;
        const [TB, JB, oB] = ZB;
        return this.settle(this.queries().invEnchant(BB, IB, Math.floor(TB), Math.floor(JB), Math.floor(oB)))
      }
      craft(BB, IB, ZB) {
        let TB;
        try {
          TB = this.deps.tables.getItemId(BB)
        } catch {
          return FZ
        }
        if (!gZ(IB) || null !== ZB && (Number.isNaN(ZB) || ZB < 0)) return FZ;
        const JB = null === ZB || ZB > nZ ? -1 : Math.floor(ZB),
          oB = this.queries().craft(TB, IB, JB);
        let GB = FZ;
        const vB = oB === NB.ad ? null : this.extras();
        if (vB) {
          const [BB, IB, ZB] = vB;
          GB = {
            Hn: BB,
            Dv: IB === NB.zb ? null : IB,
            amountAddedToSlot: ZB
          }
        }
        return this.settle(oB), GB
      }
      salvage(BB, IB, ZB) {
        let TB;
        try {
          TB = this.deps.tables.getItemId(IB)
        } catch {
          return !1
        }
        return gZ(BB) && Number.isInteger(ZB) && this.settle(this.queries().salvage(BB, TB, Math.max(Math.min(ZB, nZ), -nZ)))
      }
      craftingView(BB, IB, ZB) {
        var TB;
        if (this.stopped) return null;
        const {
          api: JB,
          onError: oB
        } = this.deps, GB = BB ? zZ.encode(BB) : null;
        if (null !== GB) {
          if (GB.length > 1024) return oB(new Error(`The crafting station ${BB}'s name is over 1024 bytes`)), null;
          const IB = JB.memoryView(Uint8Array, JB.scratch(), GB.length, "crafting_view's station");
          if (!IB) return null;
          IB.set(GB)
        }
        const vB = gZ(IB) && gZ(ZB),
          kB = JB.queries.craftingView(null !== (TB = null === GB || void 0 === GB ? void 0 : GB.length) && void 0 !== TB ? TB : 0, vB ? IB : 0, vB ? ZB : 0);
        return kB < NB.ab.BYTES ? (JB.reportCorruption(`crafting_view's answer of ${kB} bytes`), null) : JB.memoryData(JB.scratch(), kB, 1, "crafting_view's answer")
      }
      queries() {
        var BB, IB;
        return !1 === (null === (BB = (IB = this.deps).beforeOp) || void 0 === BB ? void 0 : BB.call(IB)) ? (this.stopped = !0, NZ) : this.deps.api.queries
      }
      extras() {
        const {
          api: BB
        } = this.deps;
        return BB.memoryView(Uint32Array, BB.scratch(), 3, "a sync query's extra words")
      }
      settle(BB) {
        if (BB === NB.Zc)(0, AI.b)();
        else if (BB !== NB.ad) {
          const IB = this.deps.cmd();
          IB && function(BB, IB, ZB) {
            return (0, AI.b)(), (0, NB.bg)(BB, IB, ZB)
          }(IB, 0, BB) || this.deps.onError(new Error(`Sync op ${BB}'s marker didn't fit the command ring: its send goes after the next frame's commands`))
        }
        return this.stopped || this.refresh(), BB !== NB.ad
      }
    }
    const UZ = 1 / .6,
      WZ = [0, 1, 0],
      dZ = [0, 0, 0],
      CZ = new Uint8Array(0),
      QZ = 1.2 * NI.f.uq,
      sZ = new TextEncoder,
      wZ = [0, 0, 0],
      OZ = [0, 0, 0],
      YZ = new Map;

    function iZ(BB) {
      let IB = YZ.get(BB);
      return IB || (YZ.size >= 64 && YZ.clear(), IB = sZ.encode(`{"emitRate":${BB}}`), YZ.set(BB, IB)), IB
    }

    function pZ(BB) {
      return Number.isFinite(BB) && BB > 0 ? BB : 0
    }

    function aZ(BB, IB) {
      for (let ZB = 0; ZB < 3; ZB++) {
        const TB = Math.abs(IB[ZB]);
        wZ[ZB] = BB[ZB] - TB, OZ[ZB] = 2 * TB
      }
      return Number.isFinite(wZ[0] + wZ[1] + wZ[2] + OZ[0] + OZ[1] + OZ[2])
    }

    function HZ(BB, IB) {
      return "pos1" === BB || "pos2" === BB ? void 0 : IB
    }

    function MZ(BB, IB, ZB) {
      return BB.length > NB.zd.MaxOpts ? (ZB(new Error(`${IB}'s particle opts are over ${NB.zd.MaxOpts} bytes of JSON`)), null) : BB
    }
    const jZ = {
      moveTo() {},
      setEmitRate() {},
      emit() {},
      emitPoints() {},
      setDirections() {},
      stop() {},
      dispose() {}
    };
    class PZ {
      constructor(BB) {
        this.deps = BB, this.session = 0, this.nextKey = 1, this.live = 0, this.started = !1
      }
      enabled() {
        return null !== this.sink()
      }
      sink() {
        return this.deps.isSessionLive() ? this.deps.cmd() : null
      }
      create(BB, IB) {
        var ZB;
        const TB = this.sink(),
          JB = null !== (ZB = IB.half) && void 0 !== ZB ? ZB : dZ;
        if (!TB || this.live >= NB.zd.MaxLiveKeys || this.nextKey > NB.zd.MaxKey || !aZ(IB.pos, JB)) return jZ;
        const oB = this.nextKey,
          GB = MZ(function(BB) {
            var IB, ZB, TB;
            const JB = JSON.stringify({
              texture: "string" === typeof BB.texture ? BB.texture : "smokePuff",
              ah: BB.ah,
              minLifeTime: BB.minLifeTime,
              maxLifeTime: BB.maxLifeTime,
              minSize: BB.minSize,
              maxSize: BB.maxSize,
              minEmitPower: BB.minEmitPower,
              maxEmitPower: BB.maxEmitPower,
              emitRate: pZ(BB.emitRate),
              gravity: null !== (IB = BB.gravity) && void 0 !== IB ? IB : dZ,
              dir1: null !== (ZB = BB.dir1) && void 0 !== ZB ? ZB : WZ,
              dir2: null !== (TB = BB.dir2) && void 0 !== TB ? TB : WZ,
              colorGradients: BB.colorGradients,
              blendMode: BB.blendMode
            });
            return sZ.encode(JB)
          }(BB), "createParticles", this.deps.onError);
        return GB && (0, NB.kf)(TB, 0, oB, 0, NB.zd.PresetNone, 0, wZ, OZ, GB) ? (this.nextKey++, this.live++, this.started = !0, new RZ(this, this.session, oB, BB, JB)) : jZ
      }
      playEffect(BB) {
        const IB = this.sink(),
          {
            pos1: ZB,
            pos2: TB
          } = BB;
        if (!IB || !ZB || !TB) return;
        for (let oB = 0; oB < 3; oB++) wZ[oB] = Math.min(ZB[oB], TB[oB]), OZ[oB] = Math.abs(TB[oB] - ZB[oB]);
        if (!Number.isFinite(wZ[0] + wZ[1] + wZ[2] + OZ[0] + OZ[1] + OZ[2])) return;
        const JB = MZ(sZ.encode(JSON.stringify(BB, HZ)), "playParticleEffect", this.deps.onError);
        JB && (0, NB.gf)(IB, 0, 0, NB.zd.PresetNone, NB.zd.HasBox, 0, wZ, OZ, JB)
      }
      burstPreset(BB, IB, ZB) {
        const TB = this.sink(),
          JB = Math.min(Math.floor(ZB), NB.zd.MaxBurst);
        if (!TB || !Object.hasOwn(NB.Vb, BB) || !(JB > 0)) return;
        const oB = QZ;
        for (let GB = 0; GB < 3; GB++) wZ[GB] = IB[GB] - oB / 2, OZ[GB] = oB;
        Number.isFinite(wZ[0] + wZ[1] + wZ[2]) && (0, NB.gf)(TB, 0, 0, NB.Vb[BB], NB.zd.HasBox, JB, wZ, OZ, CZ)
      }
      sessionEnded() {
        this.session++;
        const BB = this.started ? this.deps.cmd() : null;
        return this.started = !1, this.nextKey = 1, this.live = 0, !BB || (0, NB.lf)(BB, 0)
      }
      sinkFor(BB) {
        return BB === this.session ? this.deps.cmd() : null
      }
      stop(BB, IB) {
        const ZB = this.sinkFor(BB);
        ZB && (0, NB.mf)(ZB, 0, IB) && this.live--
      }
    }
    class RZ {
      constructor(BB, IB, ZB, TB, JB) {
        this.owner = BB, this.session = IB, this.key = ZB, this.half = void 0, this.rate = void 0, this.stopDelayMs = void 0, this.emitted = void 0, this.stopped = !1, this.freed = !1, this.half = [Math.abs(JB[0]), Math.abs(JB[1]), Math.abs(JB[2])], this.rate = pZ(TB.emitRate), this.emitted = this.rate > 0;
        const oB = TB.maxLifeTime * UZ * 1e3 + 250;
        this.stopDelayMs = oB >= 0 ? Math.min(oB, 2147483647) : 250
      }
      sink() {
        return this.stopped ? null : this.owner.sinkFor(this.session)
      }
      moveTo(BB, IB) {
        const ZB = this.sink();
        if (ZB) {
          if (IB)
            for (let BB = 0; BB < 3; BB++) this.half[BB] = Math.abs(IB[BB]);
          aZ(BB, this.half) && (0, NB.qf)(ZB, 0, this.key, NB.zd.HasBox, wZ, OZ, CZ)
        }
      }
      setEmitRate(BB) {
        const IB = this.sink(),
          ZB = pZ(BB);
        IB && ZB !== this.rate && (0, NB.qf)(IB, 0, this.key, 0, dZ, dZ, iZ(ZB)) && (this.rate = ZB, this.emitted ||= ZB > 0)
      }
      emit(BB) {
        const IB = this.sink(),
          ZB = Math.min(Math.floor(BB), NB.zd.MaxBurst);
        IB && ZB > 0 && (0, NB.gf)(IB, 0, this.key, NB.zd.PresetNone, 0, ZB, dZ, dZ, CZ) && (this.emitted = !0)
      }
      emitPoints(BB, IB, ZB) {
        const TB = this.sink(),
          JB = Math.min(Math.floor(ZB), NB.zd.MaxPoints, Math.floor(IB.length / 4));
        if (!TB || !(JB > 0) || !Number.isFinite(BB[0] + BB[1] + BB[2])) return;
        const oB = new Uint8Array(IB.buffer, IB.byteOffset, JB * NB.zd.PointBytes);
        (0, NB.if)(TB, 0, this.key, JB, BB, oB) && (this.emitted = !0)
      }
      setDirections(BB, IB) {
        const ZB = this.sink();
        if (!ZB || !Number.isFinite(BB[0] + BB[1] + BB[2] + IB[0] + IB[1] + IB[2])) return;
        const TB = sZ.encode(JSON.stringify({
          dir1: [BB[0], BB[1], BB[2]],
          dir2: [IB[0], IB[1], IB[2]]
        }));
        (0, NB.qf)(ZB, 0, this.key, 0, dZ, dZ, TB)
      }
      stop() {
        const BB = this.sink();
        this.stopped = !0, BB && (this.emitted ? (this.rate > 0 && (0, NB.qf)(BB, 0, this.key, 0, dZ, dZ, iZ(0)), setTimeout((() => {
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
    const rZ = uI.p,
      mZ = new TextDecoder;

    function XZ(BB, IB) {
      const {
        serverIds: ZB,
        kinds: TB
      } = BB;
      let JB = 0;
      for (let oB = 0; oB < ZB.length; oB++) {
        const BB = ZB[oB];
        if (BB !== NB.Rc && !CB(TB[oB])) {
          if (JB === IB.length) {
            const BB = new Int32Array(Math.max(64, 2 * JB));
            BB.set(IB), IB = BB
          }
          IB[JB++] = BB
        }
      }
      return {
        ids: IB,
        count: JB
      }
    }

    function LZ(BB, IB) {
      return BB.length >= IB ? BB : new Int32Array(Math.max(IB, 2 * BB.length))
    }

    function eZ(BB, IB, ZB, TB) {
      for (let JB = 0; JB < ZB; JB += 4096) {
        const oB = Math.min(4096, ZB - JB),
          GB = BB.memoryView(Int32Array, BB.scratch(), oB, "entity_info_batch's ids");
        if (!GB) return !1;
        GB.set(IB.subarray(JB, JB + oB));
        const vB = BB.queries.entityInfoBatch(oB),
          kB = 4294967295 === vB ? null : BB.memoryData(BB.scratch(), vB, 4, "entity_info_batch's records");
        if (!kB) return !1;
        for (let BB = 0; BB + NB.Fb.BYTES <= vB;) {
          const IB = NB.Fb.len(kB, BB);
          TB(NB.Fb.serverId(kB, BB), uZ(kB, BB, IB)), BB += NB.Fb.BYTES + (0, zB.xe)(IB)
        }
      }
      return !0
    }

    function uZ(BB, IB, ZB) {
      var TB, JB, oB;
      const GB = NB.Fb.kind(BB, IB),
        vB = 0 === GB ? null : QB(GB);
      if (null === vB) return null;
      const kB = NB.Fb.variation(BB, IB),
        cB = NB.Fb.pose(BB, IB),
        nB = NB.Fb.meta(BB, IB),
        hB = NB.Fb.mesh(BB, IB),
        zB = 0 !== (NB.Fb.flags(BB, IB) & NB.Bb.HasOpts),
        FB = rZ[vB];
      return Object.freeze({
        type: vB,
        variation: kB === NB.Vc ? void 0 : null !== (TB = null !== (JB = null === FB || void 0 === FB ? void 0 : FB[kB]) && void 0 !== JB ? JB : null === FB || void 0 === FB ? void 0 : FB[0]) && void 0 !== TB ? TB : "default",
        pose: cB === NB.ac ? void 0 : null !== (oB = NB.vb[cB]) && void 0 !== oB ? oB : NB.vb[0],
        metaInfo: nB === NB.ac ? void 0 : NB.Gc[nB],
        meshKind: hB === NB.ac ? void 0 : NB.Ec[hB],
        meshOpts: zB ? mZ.decode(new Uint8Array(BB.buffer, BB.byteOffset + IB + NB.Fb.BYTES, ZB)) : void 0
      })
    }
    const fZ = 1,
      lZ = 2;
    class AZ {
      constructor(BB) {
        this.deps = BB, this.wanted = 0, this.sv = !1, this.refused = !1
      }
      get on() {
        return this.sv
      }
      want(BB, IB) {
        this.wanted = IB ? this.wanted | BB : this.wanted & ~BB;
        const ZB = 0 !== this.wanted;
        if (ZB === this.sv) return;
        const TB = this.deps.cmd();
        null !== TB ? (0, NB.hg)(TB, 0, ZB ? 1 : 0) ? (this.sv = ZB, this.refused = !1) : this.refused || (this.refused = !0, this.deps.onError(new Error("WatchEntityInfo didn't fit the command ring"))) : this.sv = !1
      }
    }
    class tZ {
      constructor(BB) {
        this.deps = BB, this.entries = new Map, this.complete = !1, this.refill = !1, this.midFrame = !1, this.pending = new Int32Array(64), this.pendingCount = 0, this.ids = new Int32Array(64)
      }
      get(BB) {
        var IB;
        return this.complete || this.fill(), null !== (IB = this.entries.get("string" === typeof BB ? BB : String(BB))) && void 0 !== IB ? IB : null
      }
      inCoreCall() {
        this.midFrame = !0
      }
      stale(BB) {
        if (this.complete) {
          if (this.pendingCount === this.pending.length) {
            const BB = new Int32Array(2 * this.pending.length);
            BB.set(this.pending), this.pending = BB
          }
          this.pending[this.pendingCount++] = BB
        }
      }
      removed(BB) {
        this.entries.size > 0 && this.entries.delete(String(BB))
      }
      refresh() {
        const BB = this.pendingCount;
        if (this.pendingCount = 0, this.midFrame = !1, !this.deps.watch.on || this.refill) return this.complete = !1, void(this.refill = !1);
        if (BB > 0 && this.complete) {
          const {
            api: IB
          } = this.deps;
          let ZB = 0;
          const TB = this.ids = LZ(this.ids, BB);
          for (let JB = 0; JB < BB; JB++) {
            const BB = this.pending[JB],
              oB = IB.indexById.get(BB);
            void 0 === oB || CB(IB.kinds[oB]) ? this.entries.delete(String(BB)) : TB[ZB++] = BB
          }
          ZB > 0 && !this.batch(TB, ZB) && (this.complete = !1)
        }
      }
      sessionEnded() {
        this.entries.clear(), this.complete = !1, this.refill = !1, this.midFrame = !1, this.pendingCount = 0, this.deps.watch.want(fZ, !1)
      }
      fill() {
        const {
          api: BB
        } = this.deps;
        if (this.complete = !0, this.pendingCount = 0, this.entries.clear(), this.deps.isSessionLive()) {
          const {
            watch: BB
          } = this.deps, IB = BB.on;
          BB.want(fZ, !0), !IB && BB.on && (this.refill = this.midFrame)
        }
        const {
          ids: IB,
          count: ZB
        } = XZ(BB, this.ids);
        this.ids = IB, ZB > 0 && !this.batch(IB, ZB) && (this.refill = !0)
      }
      batch(BB, IB) {
        return eZ(this.deps.api, BB, IB, ((BB, IB) => {
          null === IB ? this.entries.delete(String(BB)) : this.entries.set(String(BB), IB)
        }))
      }
    }
    var bZ = ZB(4975);

    function xZ(BB) {
      if ("message" !== BB.type || BB.Xn !== bZ.nc.NewClientOptions || BB.payloadKind !== zB.nc.Msgpack) return null;
      const IB = (0, rB.e)(BB.payload);
      if (null === IB || "object" !== typeof IB || Array.isArray(IB)) throw new Error("NewClientOptions whose body isn't an object of options");
      return IB
    }
    var EZ = ZB(1300),
      DZ = ZB(36642);

    function KZ(BB, IB, ZB, TB, JB, oB, vB) {
      var kB, cB, nB;
      switch (BB) {
        case NB.de.ToggleMenu: {
          const BB = NB.x[IB];
          GB.l.Gq("toggleMenu", void 0 === BB ? "inventory" : `inventory|${BB}`);
          break
        }
        case NB.de.EditBoard:
          GB.l.Gq("EditBoard", {
            pos: 0 === IB ? null : ZB
          });
          break;
        case NB.de.EditCodeBlock:
        case NB.de.ViewCodeBlock:
          GB.l.Gq("EditCodeBlock", {
            pos: ZB,
            canChangePos: BB === NB.de.EditCodeBlock
          });
          break;
        case NB.de.EditCustomLobbyBlock:
          GB.l.Gq("EditCustomLobbyBlock", {
            pos: ZB
          });
          break;
        case NB.de.OpenIronChest:
          GB.l.Gq("OpenIronChest", {
            pos: ZB
          });
          break;
        case NB.de.EditNameTag:
          GB.l.Gq("EditNameTag", null !== (kB = null === (cB = JB.sv()) || void 0 === cB || null === (nB = cB.attributes.customAttributes) || void 0 === nB ? void 0 : nB.text) && void 0 !== kB ? kB : "");
          break;
        case NB.de.EditBook: {
          var hB, zB, gB;
          const BB = null === (hB = JB.sv()) || void 0 === hB ? void 0 : hB.attributes;
          GB.l.Gq("EditBook", {
            pages: (0, EZ.Y)(null === BB || void 0 === BB || null === (zB = BB.customAttributes) || void 0 === zB ? void 0 : zB.pages),
            title: null !== (gB = null === BB || void 0 === BB ? void 0 : BB.customDisplayName) && void 0 !== gB ? gB : "Title",
            isPublished: !(null === BB || void 0 === BB || !BB.customDescription)
          });
          break
        }
        case NB.de.CantChangeBlock:
          ! function(BB, IB) {
            const ZB = IB.getClientOption("cantChangeError"),
              TB = IB.getClientOption(BB ? "cantBuildError" : "cantBreakError"),
              JB = BB ? ZB : TB;
            (IB.getClientOption("canChange") || JB || "You cannot modify this block" !== ZB) && GB.l.Gq("showBottomMessage", {
              message: TB || ZB,
              type: "Error"
            })
          }(1 === IB, oB);
          break;
        case NB.de.MiddleBarStart:
          GB.l.Gq("middleScreenBarInitiate", {
            duration: TB,
            pJ: 1 === ZB[0],
            horizBarRemOffset: IB
          });
          break;
        case NB.de.MiddleBarStop:
          GB.l.Gq("middleScreenBarRemove");
          break;
        case NB.de.Hitmarker:
          GB.l.Gq("localGunHitmarker", {
            uI: 1 === IB
          });
          break;
        case NB.de.ShotsLeft:
          GB.l.Gq("localPlayerNewShotsLeft", TB);
          break;
        case NB.de.AimingOverlay:
          GB.l.Gq("aimingOverlay", 3 === (3 & IB) ? "sniper" : "none");
          break;
        case NB.de.BottomMessage:
          GB.l.Gq("showBottomMessage", JSON.parse(vB()));
          break;
        case NB.de.Crosshair:
          JB.inaccuracy = (0, mB.f)(TB), (0, DZ.b)().crosshairAccuracy(JB.inaccuracy);
          break;
        case NB.de.ChargeStage:
          break;
        case NB.de.EmoteWheelClose:
          GB.l.Gq("requestEmoteWheelClose");
          break;
        case NB.de.BlockMined:
          GB.l.Gq("localBlockMined");
          break;
        default:
          throw new FB.c(`UiEvent of no kind: what ${BB}`)
      }
    }
    var VZ = ZB(38063),
      SZ = ZB(34197),
      BT = ZB(2046),
      IT = ZB(36837),
      ZT = ZB(34211),
      TT = ZB(4958);
    const JT = 10,
      oT = {
        player: [],
        chestOrCreative: [],
        chest: null,
        creative: !1,
        selectedSlot: 0,
        freeSlots: 0
      },
      GT = {
        items: [],
        ammo: 0,
        selectedSlot: 0
      },
      vT = {
        gun: !1,
        aimable: !1,
        chargeName: null
      };

    function kT(BB, IB) {
      let ZB, TB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        JB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      const oB = () => (ZB = (0, BT.l)(ZB, IB()), ZB);
      return {
        current: oB,
        watch(IB) {
          const ZB = () => {
              IB(oB())
            },
            GB = [BB.watch(ZB)];
          return null !== TB && GB.push((0, BT.o)((BB => {
            BB.some(TB) && ZB()
          }))), null !== JB && GB.push(JB(ZB)), () => {
            for (const BB of GB) BB()
          }
        }
      }
    }

    function cT(BB) {
      return BB && {
        name: BB.name,
        amount: BB.amount,
        attributes: BB.attributes
      }
    }
    const nT = new WeakMap;

    function hT(BB) {
      let IB = nT.get(BB);
      return void 0 === IB && (IB = (0, ZT.creativeItemIds)().map((IB => ({
        name: BB.nameOfId(IB),
        amount: BB.isStackableId(IB) ? 1 : null,
        attributes: (0, VZ.b)("Gun" === (0, ZT.itemTypeOf)(IB) ? {
          type: "Gun",
          clipSize: (0, ZT.clipSizeOf)(IB)
        } : void 0)
      }))), nT.set(BB, IB)), IB
    }

    function zT(BB, IB, ZB, TB) {
      const JB = IB => (BB.flush(TB), IB),
        oB = ZB => {
          var TB, JB, oB, GB, vB, kB, cB;
          const nB = BB.slot(ZB);
          if (!nB) return null;
          const {
            rootName: hB,
            metaStr: zB
          } = IB.getMetaInfo(nB.name);
          return {
            name: nB.name,
            amount: nB.amount,
            attributes: nB.attributes,
            instance: BB.instance(ZB),
            displayName: null !== (TB = nB.attributes.customDisplayName) && void 0 !== TB ? TB : IB.getDisplayName(hB),
            requiresAmmo: "RequiresAmmo" === zB,
            clipSize: null !== (JB = null !== (oB = null === (GB = nB.attributes.customAttributes) || void 0 === GB || null === (vB = GB.gunStats) || void 0 === vB ? void 0 : vB.clipSize) && void 0 !== oB ? oB : null === (kB = IB.getGunStats(hB)) || void 0 === kB ? void 0 : kB.clipSize) && void 0 !== JB ? JB : null === (cB = nB.typeObj) || void 0 === cB ? void 0 : cB.clipSize
          }
        },
        vB = function(BB, IB) {
          let ZB = null,
            TB = {
              focus: null,
              recipes: [],
              detail: null
            },
            JB = -1;
          const oB = new Set;
          return {
            read() {
              var oB, GB;
              if (null === ZB) return null !== TB.focus && (TB = {
                ...TB,
                focus: null
              }), TB;
              if (TB.focus === ZB && JB === BB.changes) return TB;
              if (JB = BB.changes, 0 === BB.length) return TB = {
                focus: ZB,
                recipes: [],
                detail: null
              }, TB;
              let vB = 0;
              if (null !== ZB.recipe) try {
                vB = IB.getItemId(ZB.recipe.name)
              } catch {}
              const kB = BB.craftingView(ZB.station, vB, null !== (oB = null === (GB = ZB.recipe) || void 0 === GB ? void 0 : GB.pn) && void 0 !== oB ? oB : 0);
              return TB = null === kB ? {
                focus: ZB,
                recipes: [],
                detail: null
              } : function(BB, IB, ZB) {
                let TB = NB.ab.BYTES;
                const JB = [];
                for (let nB = NB.ab.recipes(BB, 0); nB > 0; nB--) {
                  const ZB = NB.R.flags(BB, TB),
                    oB = {
                      name: IB.nameOfId(NB.R.item(BB, TB)),
                      pn: NB.R.recipe(BB, TB),
                      requires: [],
                      produces: NB.R.produces(BB, TB),
                      haveIngredients: 0 !== (ZB & NB.P.HaveIngredients),
                      listed: 0 !== (ZB & NB.P.Listed)
                    };
                  let GB = NB.R.requires(BB, TB);
                  for (TB += NB.R.BYTES; GB > 0; GB--) {
                    const ZB = NB.U.items(BB, TB);
                    oB.requires.push({
                      items: gT(BB, TB + NB.U.BYTES, ZB, IB),
                      amt: NB.U.amount(BB, TB)
                    }), TB += NB.U.BYTES + 2 * ZB
                  }
                  JB.push(oB)
                }
                const oB = NB.ab.flags(BB, 0);
                if (null === ZB.recipe || 0 === (oB & NB.Y.Detail)) return {
                  focus: ZB,
                  recipes: JB,
                  detail: null
                };
                const GB = {},
                  vB = {};
                for (let nB = NB.ab.ingredients(BB, 0); nB > 0; nB--) {
                  const ZB = NB.O.item(BB, TB),
                    JB = NB.O.from(BB, TB),
                    oB = NB.O.amount(BB, TB);
                  TB += NB.O.BYTES;
                  const kB = JB === NB.w ? null : gT(BB, TB, JB, IB);
                  if (null !== kB && (TB += 2 * JB), 0 === ZB) continue;
                  const cB = IB.nameOfId(ZB);
                  GB[cB] = oB, null !== kB && (vB[cB] = kB)
                }
                const {
                  name: kB,
                  pn: cB
                } = ZB.recipe;
                return {
                  focus: ZB,
                  recipes: JB,
                  detail: {
                    name: kB,
                    pn: cB,
                    craftAllTimes: NB.ab.craftAllTimes(BB, 0),
                    roomForOne: 0 !== (oB & NB.Y.RoomForOne),
                    resultStackable: Boolean(IB.getItemStat(kB, "stackable")),
                    amounts: GB,
                    ingredientsCraftedFrom: vB
                  }
                }
              }(kB, IB, ZB), TB
            },
            setFocus(BB) {
              ZB = BB;
              for (const IB of [...oB]) IB()
            },
            watchFocus: BB => (oB.add(BB), () => {
              oB.delete(BB)
            })
          }
        }(BB, IB);
      return {
        states: {
          inventory: kT(BB, (() => {
            const ZB = BB.length;
            if (0 === ZB) return oT;
            const TB = [];
            for (let IB = 0; IB < NB.nd; IB++) TB.push(cT(BB.slot(IB)));
            const JB = BB.slotIcon,
              oB = TB[BB.selectedSlot];
            0 !== JB && oB && (TB[BB.selectedSlot] = {
              ...oB,
              icon: IB.nameOfId(JB)
            });
            const GB = !0 === IB.getClientOption("creative");
            let vB = [],
              kB = null;
            if (ZB > NB.nd) {
              for (let IB = NB.nd; IB < ZB; IB++) vB.push(cT(BB.slot(IB)));
              kB = {
                type: null,
                pos: [...BB.XJ],
                numSlots: ZB - NB.nd,
                ironChest: null
              }
            } else GB && (vB = hT(IB));
            return {
              player: TB,
              chestOrCreative: vB,
              chest: kB,
              creative: GB,
              selectedSlot: BB.selectedSlot,
              freeSlots: BB.freeSlots()
            }
          }), (0, BT.f)("creative")),
          hotbar: kT(BB, (() => {
            if (0 === BB.length) return GT;
            const IB = [];
            for (let BB = 0; BB < JT; BB++) IB.push(oB(BB));
            return {
              items: IB,
              ammo: BB.amountOf("Ammo"),
              selectedSlot: BB.selectedSlot
            }
          }), (0, BT.d)("DisplayName", "GunStats")),
          crafting: kT(BB, vB.read, null, vB.watchFocus),
          heldItemAim: kT(BB, (() => {
            var IB;
            if (!ZB()) return vT;
            const TB = null === (IB = BB.sv()) || void 0 === IB ? void 0 : IB.typeObj,
              JB = "Gun" === (null === TB || void 0 === TB ? void 0 : TB.type);
            return {
              gun: JB,
              aimable: JB || !0 === (null === TB || void 0 === TB ? void 0 : TB.showsAimingUi),
              chargeName: "Chargeable" === (null === TB || void 0 === TB ? void 0 : TB.type) ? TB.name : null
            }
          }), null, (BB => function(BB, IB) {
            let ZB = BB();
            return (0, TT.u)((() => {
              const TB = BB();
              TB !== ZB && (ZB = TB, IB(TB))
            }))
          }(ZB, BB)))
        },
        events: {
          hotbarSlotRequested: (0, BT.b)("setSelectedInventorySlotI"),
          hotbarScrolled: (0, BT.b)("ScrollInventorySlot"),
          numberKeyPressed: (0, BT.b)("numkeyPressed"),
          inventoryDropRequested: (0, BT.b)("DropInvenItem"),
          chestToggled: (0, BT.b)("chestToggleFromServer"),
          chestRefreshed: (0, BT.b)("chestRefreshedFromServer", NT),
          inventorySynced: (0, BT.b)("syncedInvenFromServer", NT),
          enchantingTableOpened: (0, BT.b)("enchantingTable", (BB => {
            let {
              position: ZB,
              KG: TB
            } = BB;
            return {
              position: [...ZB],
              blockName: IB.getMetaInfo(TB).rootName
            }
          }))
        },
        commands: {
          selectHotbarSlot(IB) {
            BB.selectSlot(IB), BB.flush(TB)
          },
          removeInventoryItem(IB) {
            let {
              slot: ZB,
              amount: TB,
              drop: oB
            } = IB;
            return JB(BB.remove(ZB, TB, oB))
          },
          swapInventorySlots(IB) {
            let {
              a: ZB,
              b: TB
            } = IB;
            return JB(BB.swap(ZB, TB))
          },
          moveInventoryItem(IB) {
            let {
              from: ZB,
              to: TB,
              amount: oB
            } = IB;
            return JB(BB.move(ZB, TB, oB))
          },
          quickMoveInventoryItem(IB) {
            let {
              slot: ZB,
              start: TB,
              end: oB,
              amount: GB
            } = IB;
            return JB(BB.quickMove(ZB, TB, oB, GB))
          },
          closeChest() {
            BB.closeChest(), BB.flush(TB), GB.l.Gq("chestClosedByPlayer")
          },
          focusCrafting(BB) {
            vB.setFocus(BB)
          },
          craftRecipe(IB) {
            let {
              name: ZB,
              pn: TB,
              times: oB
            } = IB;
            return JB(BB.craft(ZB, TB, oB))
          },
          salvageItem(IB) {
            let {
              slot: ZB,
              name: TB,
              amount: oB
            } = IB;
            return JB(BB.salvage(ZB, TB, oB))
          },
          enchantItem(IB) {
            let {
              slot: ZB,
              level: TB,
              tablePos: JB
            } = IB;
            BB.enchant(ZB, TB, JB)
          }
        },
        queries: {
          enchantingOffer(ZB) {
            let {
              slot: TB,
              blockName: JB
            } = ZB;
            return function(BB, IB, ZB, TB) {
              const JB = BB.slot(ZB);
              if (!JB || !IB.getClientOption("canCraft") || !(0, SZ.m)(TB) || (0, SZ.i)(JB.attributes)) return FT;
              const oB = (0, ZT.enchantmentPerksOf)(IB.getItemId(JB.name));
              if (0 === oB.length) return FT;
              const GB = [];
              for (let vB = 0; vB < IT.e; vB++) {
                const {
                  commonProb: BB,
                  uncommonProb: IB,
                  rareProb: ZB,
                  epicProb: JB,
                  legendaryProb: oB,
                  level: kB
                } = (0, SZ.d)(TB, vB);
                GB.push({
                  level: kB,
                  odds: [BB, IB, ZB, JB, oB].map((BB => 100 * BB))
                })
              }
              return {
                perks: [...oB],
                options: GB
              }
            }(BB, IB, TB, JB)
          }
        }
      }
    }
    const FT = Object.freeze({
      perks: [],
      options: []
    });

    function NT() {
      return null
    }

    function gT(BB, IB, ZB, TB) {
      const JB = [];
      for (let oB = 0; oB < ZB; oB++) {
        const ZB = BB.getUint16(IB + 2 * oB, !0);
        0 !== ZB && JB.push(TB.nameOfId(ZB))
      }
      return JB
    }
    class qT {
      constructor(BB) {
        this.api = BB, this.positions = new Map, this.targeted = {
          n_: 0,
          position: [0, 0, 0],
          normal: [0, 0, 0],
          oq: [0, 0, 0]
        }, this.hasTarget = !1, this.breaking = [0, 0, 0], this.isBreaking = !1
      }
      position(BB) {
        let IB = this.positions.get(BB);
        return IB || (this.api.checkValid(BB) || this.api.isLocal(BB) ? (IB = [NaN, NaN, NaN], this.api.readPosition(BB, IB), this.positions.set(BB, IB), IB) : null)
      }
      lBB() {
        return this.hasTarget ? this.targeted : null
      }
      breakingPosition() {
        return this.isBreaking ? this.breaking : null
      }
      refresh() {
        for (const [IB, ZB] of this.positions) this.api.readPosition(IB, ZB) || this.api.checkValid(IB) || this.api.isLocal(IB) || this.positions.delete(IB);
        const BB = this.api.apiView;
        if (this.refreshTarget(), this.isBreaking = 0 !== (NB.p.playerFlags(BB, 0) & NB.Bd.Breaking) && NB.p.breakingProgress(BB, 0) >= 0, this.isBreaking)
          for (let IB = 0; IB < 3; IB++) this.breaking[IB] = NB.p.breakingPos(BB, 0, IB)
      }
      refreshTarget() {
        const BB = this.api.apiView,
          IB = NB.p.targetBlockId(BB, 0);
        if (this.hasTarget = IB !== NB.Tc, this.hasTarget) {
          const ZB = this.targeted;
          ZB.n_ = IB;
          for (let IB = 0; IB < 3; IB++) ZB.position[IB] = NB.p.targetBlock(BB, 0, IB), ZB.normal[IB] = NB.p.targetNormal(BB, 0, IB), ZB.oq[IB] = NB.p.targetAdjacent(BB, 0, IB)
        }
      }
      despawned(BB) {
        const IB = this.positions.get(BB);
        IB && !this.api.isLocal(BB) && (IB.fill(NaN), this.positions.delete(BB))
      }
    }
    var yT = ZB(40684),
      UT = ZB(40666),
      WT = ZB(36398),
      dT = ZB(36829);
    const CT = 1,
      QT = 2;
    class sT {
      constructor() {
        this.game = new dT.h, this.client = new dT.h, this.sv = 0, this.movesFly = null
      }
      setGame(BB) {
        if (null === BB || "object" !== typeof BB) return !1;
        const {
          key: IB,
          value: ZB
        } = BB;
        return "string" === typeof IB && (this.game.setBooleanType(IB, Boolean(ZB)), !0)
      }
      setClient(BB, IB) {
        this.client.setBooleanType(BB, IB)
      }
      clearGame() {
        this.game = new dT.h, this.movesFly = null
      }
      setMovesFly(BB) {
        this.movesFly = BB
      }
      perms() {
        return (this.game._getTotalBooleanVal() ? CT : 0) | (this.client._getTotalBooleanVal() ? QT : 0)
      }
      write(BB) {
        const IB = this.perms(),
          {
            movesFly: ZB
          } = this;
        if (IB === this.sv && null === ZB) return !0;
        let TB = NB.Ib.Keep;
        return null !== ZB && (TB = ZB ? NB.Ib.On : NB.Ib.Off), !(!BB || !(0, NB.xe)(BB, 0, TB, IB, ZB ? 1 : 0)) && (this.sv = IB, this.movesFly = null, !0)
      }
    }
    class wT {
      constructor(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => 35;
        this.api = BB, this.screenBandPct = void 0, this.clipX = 0, this.clipY = 0, this.clipW = 0, this.eye = [0, 0, 0], this.forward = [0, 0, 1], this.along = [0, 0, 0], this.screenBandPct = {
          x: vB.b,
          get y() {
            return IB()
          }
        }
      }
      get hasView() {
        const BB = this.api.apiView,
          IB = NB.p.viewProj;
        return 0 !== IB(BB, 0, 3) || 0 !== IB(BB, 0, 7) || 0 !== IB(BB, 0, 11) || 0 !== IB(BB, 0, 15)
      }
      get cameraPosition() {
        const BB = this.api.apiView,
          {
            eye: IB
          } = this;
        for (let ZB = 0; ZB < 3; ZB++) IB[ZB] = NB.p.eye(BB, 0, ZB);
        return IB
      }
      get cameraDirection() {
        const BB = this.api.apiView,
          IB = NB.p.viewProj,
          ZB = IB(BB, 0, 3),
          TB = IB(BB, 0, 7),
          JB = IB(BB, 0, 11),
          oB = Math.hypot(ZB, TB, JB),
          {
            forward: GB
          } = this;
        return oB > 0 && (GB[0] = ZB / oB, GB[1] = TB / oB, GB[2] = JB / oB), GB
      }
      get cameraHeading() {
        return NB.p.heading(this.api.apiView, 0)
      }
      get cameraPitch() {
        return NB.p.pitch(this.api.apiView, 0)
      }
      get tanHalfFovX() {
        return NB.p.tanHalfFovX(this.api.apiView, 0)
      }
      get tanHalfFovY() {
        return NB.p.tanHalfFovY(this.api.apiView, 0)
      }
      projectWorldPosToScreenPos(BB) {
        this.clip(BB);
        const {
          clipX: IB,
          clipY: ZB,
          clipW: TB
        } = this;
        if (TB > 0) {
          const BB = IB / TB * 50,
            JB = -ZB / TB * 50;
          return Math.abs(BB) <= this.screenBandPct.x && Math.abs(JB) <= this.screenBandPct.y ? {
            x: 50 + BB,
            y: 50 + JB
          } : this.clampToBand(BB, JB)
        }
        const JB = this.cameraPosition,
          oB = Math.hypot(BB[0] - JB[0], BB[1] - JB[1], BB[2] - JB[2]),
          GB = this.api.apiView,
          vB = NB.p.viewProj,
          kB = oB > 0 ? IB / oB : 0,
          cB = oB > 0 ? -ZB / oB : 0,
          nB = Math.hypot(vB(GB, 0, 1), vB(GB, 0, 5), vB(GB, 0, 9)),
          hB = kB / Math.hypot(vB(GB, 0, 0), vB(GB, 0, 4), vB(GB, 0, 8)),
          zB = cB / nB,
          FB = !(Math.abs(hB) >= .001 || Math.abs(zB) >= .001);
        return this.clampToBand(kB, FB ? -(nB || 1) : cB)
      }
      projectDirectionToScreenPos(BB) {
        if (!this.hasView) return;
        const IB = this.cameraPosition,
          ZB = this.along;
        for (let TB = 0; TB < 3; TB++) ZB[TB] = IB[TB] + 10 * BB[TB];
        return this.projectWorldPosToScreenPos(ZB)
      }
      projectWorldPosToViewport(BB) {
        this.clip(BB);
        const {
          clipX: IB,
          clipY: ZB,
          clipW: TB
        } = this;
        return TB > 0 ? {
          x: 50 + IB / TB * 50,
          y: 50 - ZB / TB * 50
        } : null
      }
      clip(BB) {
        const IB = this.api.apiView,
          ZB = BB[0] - NB.p.origin(IB, 0, 0),
          TB = BB[1] - NB.p.origin(IB, 0, 1),
          JB = BB[2] - NB.p.origin(IB, 0, 2),
          oB = NB.p.viewProj;
        this.clipX = oB(IB, 0, 0) * ZB + oB(IB, 0, 4) * TB + oB(IB, 0, 8) * JB + oB(IB, 0, 12), this.clipY = oB(IB, 0, 1) * ZB + oB(IB, 0, 5) * TB + oB(IB, 0, 9) * JB + oB(IB, 0, 13), this.clipW = oB(IB, 0, 3) * ZB + oB(IB, 0, 7) * TB + oB(IB, 0, 11) * JB + oB(IB, 0, 15)
      }
      clampToBand(BB, IB) {
        return (0, vB.d)(BB, IB, this.screenBandPct.x, this.screenBandPct.y)
      }
    }
    var OT = ZB(4983);
    const YT = new TextEncoder,
      iT = new Uint8Array(NB.z * NB.y);
    class pT {
      constructor() {
        this.buttons = [], this.sv = !0
      }
      set(BB) {
        this.buttons = BB, this.sv = !1
      }
      attached() {
        this.sv = 0 === this.buttons.length
      }
      write(BB) {
        if (this.sv) return;
        const IB = new Uint8Array(NB.z),
          ZB = new Uint8Array(NB.z);
        let TB = 0,
          JB = 0;
        for (const {
            id: oB,
            keycode: GB
          }
          of this.buttons) {
          if (TB === NB.z) break;
          const {
            read: BB,
            written: vB
          } = YT.encodeInto(oB, iT.subarray(JB, JB + NB.y));
          if (BB < oB.length) continue;
          const kB = OT.i[GB];
          IB[TB] = "number" === typeof kB ? kB : 0, ZB[TB] = vB, TB++, JB += vB
        }
        this.sv = (0, NB.oe)(BB, 0, TB, IB, ZB, iT.subarray(0, JB))
      }
    }

    function aT(BB, IB, ZB) {
      const TB = YT.encode(IB);
      return TB.length <= NB.y && function(BB, IB, ZB, TB) {
        return (0, AI.b)(), (0, NB.rf)(BB, IB, ZB, TB)
      }(BB, 0, ZB ? 1 : 0, TB)
    }
    const HT = new TextDecoder,
      MT = new TextEncoder,
      jT = new Uint8Array(0),
      PT = [0, 0, 0],
      RT = {
        off: NB.Fd.Off,
        key: NB.Fd.Key,
        touch: NB.Fd.Touch
      };
    class rT {
      constructor(BB) {
        var IB;
        this.options = BB, this.renderFrame = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.entityInfo = void 0, this.entityInfoWatch = void 0, this.particles = void 0, this.clientApi = void 0, this.scriptedCamera = void 0, this.owners = [], this.tickers = [], this.renderers = [], this.receivers = [], this.failures = [], this.vetoSet = !1, this.hooksSet = !1, this.writtenPublicLobby = !1, this.promptWatch = "off", this.promptWatchSent = "off", this.customButtons = new pT, this.generation = 0, this.sessionLive = !1, this.boundId = 0, this.session = null, this.activeConn = 0, this.closedThrough = 0, this.openSocket = 0, this.socketLeftSinceAttach = !1, this.ticks = 0, this.zoomUnshown = !1, this.zoomHeld = !1, this.overflowGen = 0, this.resyncOwed = !1, this.zoom = 0, this.pendingZoom = null, this.highlight = null, this.highlightOwed = !1, this.cmd = null, this.freeCam = new sT, this.stopped = () => !1, this.onError = void 0, this.api = void 0, this.tables = void 0, this.itemSources = null, this.fault = void 0, this.JN = BB => {
          if ((0, FB.k)(BB)) throw BB;
          this.onError(BB)
        }, this.api = BB.api, this.tables = BB.tables, this.onError = null !== (IB = BB.onError) && void 0 !== IB ? IB : BB => {
          console.error("Error in client game callback", BB)
        }, this.renderFrame = new wT(this.api, BB.screenBandY), this.live = new qT(this.api), this.chunks = new vI(this.api.memory, (() => this.api.apiView)), this.items = new yZ({
          api: this.api,
          tables: BB.tables,
          cmd: () => this.cmd,
          onError: this.onError,
          beforeOp: BB.beforeOp
        });
        const ZB = () => this.stopped() ? null : this.cmd,
          TB = () => this.sessionLive;
        this.entityInfoWatch = new AZ({
          cmd: ZB,
          onError: this.onError
        }), this.entityInfo = new tZ({
          api: this.api,
          watch: this.entityInfoWatch,
          isSessionLive: TB
        }), this.particles = new PZ({
          cmd: ZB,
          isSessionLive: TB,
          onError: this.onError
        }), this.clientApi = new kZ({
          api: this.api,
          live: this.live,
          chunks: this.chunks,
          items: this.items,
          entityInfo: this.entityInfo,
          particles: this.particles,
          tables: BB.tables,
          cmd: ZB,
          sendCmd: () => this.sendCmd(),
          isSessionLive: TB,
          beforeWrite: () => {
            var IB;
            if (this.stopped()) return !1;
            const ZB = this.generation;
            return !1 !== (null === (IB = BB.beforeWrite) || void 0 === IB ? void 0 : IB.call(BB)) && ZB === this.generation
          },
          playerDbId: () => {
            const BB = this.session;
            if (null === BB) throw new Error("No game session has started, so the local player has no DB id");
            return BB.playerDbId
          },
          playSound: BB.playSound,
          preloadSounds: BB.preloadSounds,
          setLocalOptions: BB.setLocalOptions,
          hasPackModel: BB.hasPackModel
        }), this.scriptedCamera = new bB({
          api: this.api,
          cmd: () => this.stopped() ? null : this.cmd,
          screen: BB.cameraScreen,
          showFacing: BB.showCameraFacing
        })
      }
      get itemBridgeSources() {
        return this.itemSources ??= zT(this.items, this.tables, (() => this.localPlayerAlive()), this.JN), this.itemSources
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
      clickCodeBlock(BB) {
        const IB = this.sessionLive ? this.sendCmd() : null;
        return null !== IB && (ZB = IB, TB = 0, JB = BB[0], oB = BB[1], GB = BB[2], (0, AI.b)(), (0, NB.se)(ZB, TB, JB, oB, GB));
        var ZB, TB, JB, oB, GB
      }
      cameraZoom() {
        return this.zoom
      }
      setCameraZoom(BB) {
        const IB = this.liveCmd();
        return null === IB ? (this.pendingZoom = BB, !1) : (this.pendingZoom = null, (0, NB.$f)(IB, 0, BB, 1))
      }
      VY(BB) {
        const IB = this.stopped() ? null : this.cmd;
        return null !== IB && (0, NB.Wf)(IB, 0, BB ? 1 : 0)
      }
      respawn() {
        const BB = this.sessionLive ? this.sendCmd() : null;
        return null !== BB && (IB = BB, ZB = 0, (0, AI.b)(), (0, NB.Df)(IB, ZB));
        var IB, ZB
      }
      bindCustomButtonKeys(BB) {
        this.customButtons.set(BB)
      }
      pressCustomButton(BB, IB) {
        const ZB = this.sessionLive ? this.sendCmd() : null;
        return null !== ZB && aT(ZB, BB, IB)
      }
      padMove(BB, IB, ZB, TB, JB, oB) {
        const GB = this.liveCmd();
        return null !== GB && (0, NB.cf)(GB, 0, BB, IB, ZB, TB, JB, oB)
      }
      thirdPersonFor(BB) {
        const IB = this.liveCmd();
        return null !== IB && (0, NB.dg)(IB, 0, null !== BB && void 0 !== BB ? BB : 1 / 0)
      }
      send(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const TB = 0 !== this.openSocket || this.sessionLive ? this.sendCmd() : null;
        return null !== TB && tI(TB, ZB ? zB.vd : 0, BB, (0, rB.i)(IB))
      }
      socketAttached(BB) {
        this.openSocket = BB, this.socketLeftSinceAttach = !1
      }
      socketDetached(BB) {
        this.openSocket === BB && (this.openSocket = 0)
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
      attach(BB) {
        const IB = () => BB.isStopped;
        this.stopped = IB, this.cmd = BB.rings.cmd, this.promptWatchSent = "off", this.writePromptWatch(), this.customButtons.attached(), this.writeCustomButtons();
        const ZB = this.api.apiView;
        this.overflowGen = NB.p.eventOverflowGen(ZB, 0), this.resyncOwed = 0 !== NB.p.eventOverflowMask(ZB, 0), BB.setGameHost(this), BB.setEventWalker((BB => {
          this.api.walk(BB, this, IB)
        }))
      }
      watchPromptPick(BB) {
        this.promptWatch = BB, this.writePromptWatch()
      }
      get promptEntity() {
        return "off" === this.promptWatch || this.stopped() ? null : mT(NB.p.promptEntity(this.api.apiView, 0))
      }
      get interactLabel() {
        return "touch" !== this.promptWatch || this.stopped() ? NB.kc.None : NB.p.interactLabel(this.api.apiView, 0)
      }
      get interactIcon() {
        return "touch" !== this.promptWatch || this.stopped() ? 0 : NB.p.interactIcon(this.api.apiView, 0)
      }
      closeGame() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        (0 === BB || BB >= this.openSocket) && (this.openSocket = 0), this.closedThrough = Math.max(this.closedThrough, BB, this.activeConn), this.activeConn = 0, this.endSession(), this.endGameGrants(), this.dropGameCamera()
      }
      gameCamera(BB) {
        0 !== this.activeConn && this.scriptedCamera.settingsChanged(BB)
      }
      netEvent(BB) {
        "connection" === BB.type ? BB.phase === zB.G.Activated && BB.conn !== this.activeConn && BB.conn > this.closedThrough ? (this.endSession(), this.activeConn = BB.conn, this.endGameGrants(), this.dropGameCamera()) : BB.phase !== zB.G.Left && BB.phase !== zB.G.Closed || BB.conn !== this.activeConn ? BB.phase === zB.G.Resumed && 0 !== this.activeConn && BB.conn > this.closedThrough && (this.activeConn = BB.conn) : this.closeGame() : BB.conn === this.activeConn && 0 !== BB.conn && (BB.Xn === UT.q ? this.gunHit(BB.payload) : BB.Xn === bZ.nc.EditItemCraftingRecipes || BB.Xn === UT.I ? this.items.touch() : (this.serverOptions(BB), this.gameMessage(BB)));
        const IB = this.options.onNetEvent;
        IB && this.guard((() => {
          IB(BB)
        }))
      }
      serverOptions(BB) {
        const IB = this.options.serverOptions,
          ZB = IB ? this.decoded(xZ, BB) : null;
        IB && ZB && this.guard((() => {
          IB.applyNewClientOptions(ZB)
        }))
      }
      gameMessage(BB) {
        let IB = null;
        try {
          IB = function(BB) {
            if ("message" !== BB.type || BB.Xn !== bZ.nc.GameCodeMessage || BB.payloadKind !== zB.nc.Msgpack) return null;
            const IB = (0, rB.e)(BB.payload);
            if (null === IB || "object" !== typeof IB || "string" !== typeof IB.messageType) throw new Error("GameCodeMessage without a messageType");
            return IB
          }(BB)
        } catch (ZB) {
          this.sessionLive && this.onError(ZB)
        }
        if (IB) {
          const {
            messageType: BB,
            data: ZB
          } = IB;
          if ((0, pB.f)(BB)) return void this.guard((() => {
            (0, pB.c)(BB, ZB)
          }));
          "freeCamPerms" === BB && this.freeCam.setGame(ZB) && this.writeFreeCam(), this.sessionLive && this.round(this.receivers, (IB => {
            IB.onReceivedMessageFromServer(BB, ZB)
          }))
        }
      }
      decoded(BB, IB) {
        try {
          return BB(IB)
        } catch (ZB) {
          return this.onError(ZB), null
        }
      }
      setClientFreeCameraGrant(BB, IB) {
        this.freeCam.setClient(BB, IB), this.writeFreeCam()
      }
      freeCameraAllowed() {
        return 0 !== this.freeCam.perms()
      }
      setFreeCameraMovesFly(BB) {
        this.freeCam.setMovesFly(BB), this.writeFreeCam()
      }
      setBlockHighlight(BB) {
        this.highlight = BB, this.highlightOwed = !0, this.writeOwedHighlight()
      }
      writeOwedHighlight() {
        const BB = this.liveCmd();
        if (null === BB || !this.highlightOwed) return;
        const IB = this.highlight;
        this.highlightOwed = null === IB ? !(0, NB.Oe)(BB, 0, PT, PT, 0) : !(0, NB.Oe)(BB, 0, IB.pos, IB.normal, 1)
      }
      localPlayerBound(BB) {
        var IB, ZB;
        if (0 === this.activeConn || this.sessionLive && BB === this.boundId) return;
        const TB = this.sessionLive;
        let JB, oB, GB, vB;
        this.endSession(), TB && this.restartGameCamera();
        try {
          var kB;
          this.session = null;
          const BB = this.options.sessionInfo(this.activeConn);
          if (this.session = BB, !BB) return;
          JB = BB.gameNameWithVariation, oB = null !== (kB = (0, YB.Pb)(JB)) && void 0 !== kB ? kB : void 0, GB = (0, iB.o)(BB.lobbyName), vB = (0, iB.G)(BB.lobbyName)
        } catch (UB) {
          return void this.onError(UB)
        }
        const cB = {
          localPlayerId: String(BB)
        };
        let nB = {},
          hB = {};
        try {
          var zB, FB;
          nB = null !== (zB = null === (FB = this.options.gameFactory((0, YB.Vb)(JB))) || void 0 === FB ? void 0 : FB(vB, GB, oB, cB)) && void 0 !== zB ? zB : {}
        } catch (UB) {
          this.JN(UB)
        }
        try {
          var NB, gB;
          hB = {
            ...null === (NB = (gB = this.options).defaultPlugins) || void 0 === NB ? void 0 : NB.call(gB, vB, GB, oB, cB),
            ...nB.plugins
          }
        } catch (UB) {
          this.JN(UB)
        }
        const qB = [nB, ...Object.values(hB)];
        this.owners = qB, this.tickers = qB.filter((BB => void 0 !== BB.Iz)), this.renderers = qB.filter((BB => void 0 !== BB.onAfterRender)), this.receivers = qB.filter((BB => void 0 !== BB.onReceivedMessageFromServer)), this.writeAltVeto(qB), this.writeHooks(qB), this.writePublicLobby(vB), this.writeLocalDbId(null !== (IB = null === (ZB = this.session) || void 0 === ZB ? void 0 : ZB.playerDbId) && void 0 !== IB ? IB : null), this.boundId = BB, this.sessionLive = !0, this.generation++, null !== this.pendingZoom && this.setCameraZoom(this.pendingZoom), this.highlightOwed ||= null !== this.highlight, this.writeOwedHighlight(), this.round(qB, (BB => {
          var IB;
          null === (IB = BB.onCreate) || void 0 === IB || IB.call(BB, this.clientApi)
        }));
        const yB = this.generation;
        setTimeout((() => {
          yB === this.generation && !0 === this.tables.getClientOption("creative") && hT(this.tables)
        }), 0)
      }
      chunkSlot(BB, IB, ZB, TB, JB, oB) {
        this.chunks.apply(BB, IB, ZB, TB, JB, oB)
      }
      entityAdded(BB) {
        var IB;
        this.entityInfo.stale(BB), null === (IB = this.options.replayEntities) || void 0 === IB || IB.entityAdded(BB)
      }
      entityInfoChanged(BB) {
        var IB;
        this.entityInfo.stale(BB), null === (IB = this.options.replayEntities) || void 0 === IB || IB.entityInfoChanged(BB)
      }
      afterPrescan() {
        this.items.refresh(), this.entityInfo.refresh(), this.api.rereadDirectory(), this.chunks.refresh(), this.live.refresh()
      }
      tickEnd() {
        if (this.ticks++, this.tickers.length > 0) {
          const BB = performance.now();
          this.round(this.tickers, XT), (0, TT.b)(performance.now() - BB)
        }
      }
      afterWalk(BB) {
        this.ackEventOverflow(), this.clientApi.flushOwed(), this.writeOwedHighlight();
        const IB = this.options.replayEntities;
        IB && this.guard((() => {
          this.entityInfoWatch.want(lZ, IB.wantsWatch), IB.flush(this.entityInfoWatch.on)
        }));
        const ZB = this.api.apiView,
          TB = NB.p.frameMs(ZB, 0);
        WT.o.frame(TB, NB.p.heading(ZB, 0), NB.p.pitch(ZB, 0), WT.j[BB]);
        const JB = (0, TT.g)(BB, TB);
        if (null !== JB) {
          const BB = this.renderFrame;
          this.guard((() => {
            (0, DZ.b)().turnDamageIndicators(BB.cameraHeading)
          })), this.guard((() => {
            this.clientApi.slideRoute(JB)
          })), this.round(this.renderers, (IB => {
            IB.onAfterRender(JB, BB)
          }))
        }
        this.writeFreeCam();
        try {
          this.scriptedCamera.afterFrame(null !== JB)
        } catch (GB) {
          this.JN(GB)
        }
        this.showZoom(), this.items.flush(this.JN), this.writePromptWatch(), this.writeCustomButtons();
        const oB = this.ticks;
        this.ticks = 0, (0, TT.f)(oB, BB, JB, this.JN)
      }
      entityRemoved(BB) {
        this.live.despawned(BB), this.entityInfo.removed(BB)
      }
      ackEventOverflow() {
        const BB = this.api.apiView,
          IB = NB.p.eventOverflowGen(BB, 0),
          ZB = IB - this.overflowGen >>> 0;
        if (0 === ZB && !this.resyncOwed) return;
        this.overflowGen = IB;
        const TB = NB.p.eventOverflowMask(BB, 0),
          JB = this.cmd;
        0 === TB || null === JB || this.stopped() ? this.resyncOwed = !1 : this.resyncOwed = !(0, NB.ve)(JB, 0, TB);
        const oB = this.options.onEventOverflow;
        0 !== ZB && oB && this.guard((() => {
          oB(TB, ZB)
        }))
      }
      gameCall(BB, IB, ZB, TB, JB, oB, GB, vB, kB) {
        if (BB === NB.$b.Director) try {
          return this.scriptedCamera.call(IB, ZB, TB, JB, oB, GB)
        } catch (cB) {
          return this.JN(cB), NB.db.None
        }
        if (!this.sessionLive || void 0 !== this.fault) return BB === NB.$b.AltVeto ? NB.g.Allow : 0;
        try {
          return this.callGames(BB, IB, ZB, TB, JB, oB, GB, vB)
        } catch (cB) {
          throw (0, FB.k)(cB) && (this.fault = cB), cB
        }
      }
      takeFault() {
        const BB = this.fault;
        return this.fault = void 0, BB
      }
      callGames(BB, IB, ZB, TB, JB, oB, GB, vB) {
        this.api.rereadDirectory(), this.chunks.touch(), this.items.refresh(), this.live.refresh(), this.entityInfo.inCoreCall();
        const {
          tables: kB
        } = this.options, cB = String(this.boundId);
        switch (BB) {
          case NB.$b.AltVeto:
          case NB.$b.AltAction: {
            const vB = 0 !== GB,
              [nB, hB, zB] = vB ? [IB, ZB, TB] : [void 0, void 0, void 0],
              FB = vB ? kB.nameOfId(JB) : "Air",
              gB = mT(oB);
            if (BB === NB.$b.AltAction) return this.first((BB => {
              var IB;
              return null === (IB = BB.onPlayerAltAction) || void 0 === IB ? void 0 : IB.call(BB, cB, nB, hB, zB, FB, gB)
            })), 0;
            const qB = this.first((BB => {
              var IB;
              return null === (IB = BB.onPlayerAttemptAltAction) || void 0 === IB ? void 0 : IB.call(BB, cB, nB, hB, zB, FB, gB)
            }));
            return "preventAction" === qB ? NB.g.Prevent : "preventPlacement" === qB ? NB.g.PreventPlacement : NB.g.Allow
          }
          case NB.$b.Click: {
            const BB = vB,
              nB = 0 !== (BB & NB.H.Alt),
              hB = 0 !== (BB & NB.H.HasPos),
              zB = hB ? kB.nameOfId(JB) : "Air",
              [FB, gB, qB] = hB ? [IB, ZB, TB] : [null, null, null],
              yB = mT(oB),
              UB = 0 !== (BB & NB.H.Up),
              WB = mT(GB);
            if (0 === (BB & NB.H.AttackOnly) && this.first((BB => {
                var IB, ZB;
                return UB ? null === (IB = BB.onPlayerClickUp) || void 0 === IB ? void 0 : IB.call(BB, cB, nB, FB, gB, qB, zB, yB) : null === (ZB = BB.onPlayerClick) || void 0 === ZB ? void 0 : ZB.call(BB, cB, nB, FB, gB, qB, zB, yB)
              })), !UB && !nB && null !== WB) {
              const BB = this.clientApi.getPositionView(WB),
                IB = BB ? [BB[0], BB[1], BB[2]] : [0, 0, 0];
              this.first((BB => {
                var ZB;
                return null === (ZB = BB.onPlayerAttackEntity) || void 0 === ZB ? void 0 : ZB.call(BB, cB, WB, IB)
              }))
            }
            return 0
          }
          case NB.$b.ChangeBlock: {
            const BB = kB.nameOfId(JB),
              GB = kB.nameOfId(oB);
            return this.first((JB => {
              var oB;
              return null === (oB = JB.onPlayerChangeBlock) || void 0 === oB ? void 0 : oB.call(JB, cB, IB, ZB, TB, BB, GB)
            })), 0
          }
          case NB.$b.DropItem: {
            const BB = kB.nameOfId(IB);
            return this.first((IB => {
              var JB;
              return null === (JB = IB.onPlayerDropItem) || void 0 === JB ? void 0 : JB.call(IB, cB, BB, ZB, TB)
            })), 0
          }
          default:
            return this.onError(new Error(`Unknown game call kind ${BB}`)), 0
        }
      }
      changeBlockFail(BB, IB, ZB, TB, JB, oB, GB) {
        const vB = JB === NB.Lc ? null : HT.decode(this.api.eventBytes(oB, Math.min(JB, GB)));
        this.failures.push({
          UB: [BB, IB, ZB],
          WB: TB,
          dB: vB
        })
      }
      changeBlockFailEnd() {
        const BB = this.failures;
        this.failures = [], this.sessionLive && this.round(this.owners, (IB => {
          var ZB;
          null === (ZB = IB.onChangeBlockFail) || void 0 === ZB || ZB.call(IB, BB)
        })), this.Gq("EditBoard", {
          pos: null
        }), this.Gq("EditCodeBlock", {
          pos: null,
          canChangePos: null
        })
      }
      inventoryEvent(BB, IB, ZB, TB, JB, oB) {
        BB === NB.pc.ChestOpened ? this.items.chestOpened(ZB, TB, JB) : BB !== NB.pc.Synced && BB !== NB.pc.ChestClosed && BB !== NB.pc.ChestRefreshed || this.items.touch(), this.guard((() => {
          ! function(BB, IB, ZB, TB) {
            switch (BB) {
              case NB.pc.Synced:
                GB.l.Gq("syncedInvenFromServer");
                break;
              case NB.pc.ChestOpened:
              case NB.pc.ChestClosed:
                GB.l.Gq("chestToggleFromServer", BB === NB.pc.ChestOpened, !0);
                break;
              case NB.pc.ChestRefreshed:
                GB.l.Gq("chestRefreshedFromServer");
                break;
              case NB.pc.EnchantingTable:
                GB.l.Gq("enchantingTable", {
                  KG: TB,
                  position: ZB
                });
                break;
              case NB.pc.HotbarRequest:
                GB.l.Gq("setSelectedInventorySlotI", IB, !0);
                break;
              case NB.pc.Scrolled:
                GB.l.Gq("ScrollInventorySlot", IB);
                break;
              case NB.pc.NumberKey:
                GB.l.Gq("numkeyPressed", IB + 1);
                break;
              case NB.pc.DropRequested:
                GB.l.Gq("DropInvenItem", 0 !== IB);
                break;
              default:
                throw new FB.c(`InventoryEvent of no kind: what ${BB}`)
            }
          }(BB, IB, [ZB, TB, JB], oB)
        }))
      }
      heldItemChanged() {
        this.items.touch()
      }
      shotDamage(BB, IB, ZB, TB) {
        this.Gq("shotPlayer", {
          playerId: String(BB),
          damage: IB,
          wasCrit: 0 !== TB,
          distance: ZB
        })
      }
      localHurt(BB, IB) {
        this.Gq("closeShopOnDamaged", null), this.guard((() => {
          GB.l.Gq("damagedByOtherPlayer", {
            yZ: null,
            direction: Number.isNaN(IB) ? null : IB,
            aB: BB
          })
        }))
      }
      attackHit(BB, IB, ZB, TB, JB) {
        this.guard((() => {
          GB.l.Gq("yourAttackHit", {
            uI: TB,
            screenPos: this.renderFrame.projectDirectionToScreenPos([BB, IB, ZB]),
            hitSelf: JB
          })
        }))
      }
      physicsType(BB) {
        this.Gq("PlayerPhysicsTypeUpdate", BB)
      }
      vehicleEffect(BB, IB, ZB, TB, JB) {
        this.guard((() => {
          BB === zB.Jd.UPDATE ? (0, HB.i)(IB, {
            icon: ZB,
            level: TB,
            displayName: null,
            durationMs: JB
          }) : aB.c.remove(IB)
        }))
      }
      zoomChanged(BB) {
        this.zoom = BB, this.zoomUnshown = !0
      }
      zoomDisabled() {
        this.Gq("showBottomMessage", {
          message: "Zoom is disabled",
          timeoutLength: 2e3,
          type: "Error"
        })
      }
      showZoom() {
        const BB = this.scriptedCamera.holdsView();
        !this.zoomUnshown || BB && this.zoomHeld || (this.zoomUnshown = !1, this.Gq("cameraZoomSet", this.zoom)), this.zoomHeld = BB
      }
      gunHit(BB) {
        this.guard((() => {
          const {
            yZ: IB,
            UZ: ZB
          } = (0, yT.e)(UT.q, BB);
          GB.l.Gq("damagedByOtherPlayer", {
            yZ: IB,
            direction: ZB
          })
        }))
      }
      uiEvent(BB, IB, ZB, TB, JB, oB, GB, vB) {
        this.guard((() => {
          KZ(BB, IB, [ZB, TB, JB], oB, this.items, this.options.tables, (() => HT.decode(this.api.eventBytes(GB, vB))))
        }))
      }
      writeAltVeto(BB) {
        const IB = this.cmd;
        if (!IB) return;
        let ZB;
        try {
          ZB = function(BB, IB) {
            const ZB = new Set;
            let TB = !1;
            for (const JB of BB)
              if (JB.onPlayerAttemptAltAction) {
                if (TB = !0, !JB.altVetoBlocks) return {
                  mode: NB.ge.All,
                  roots: []
                };
                for (const BB of JB.altVetoBlocks) ZB.add(IB.getMetaInfo(BB).rootId)
              } return TB ? ZB.size > NB.Cc ? {
              mode: NB.ge.All,
              roots: []
            } : {
              mode: NB.ge.Filter,
              roots: [...ZB]
            } : {
              mode: NB.ge.Off,
              roots: []
            }
          }(BB, this.options.tables)
        } catch (JB) {
          this.onError(JB), ZB = {
            mode: NB.ge.All,
            roots: []
          }
        }
        if (ZB.mode === NB.ge.Off && !this.vetoSet) return;
        const TB = new Uint8Array(new Uint32Array(ZB.roots).buffer);
        (0, NB.Jf)(IB, 0, ZB.mode, ZB.roots.length, TB) ? this.vetoSet = ZB.mode !== NB.ge.Off: this.onError(new Error("SetAltVeto didn't fit the command ring"))
      }
      endGameGrants() {
        this.freeCam.clearGame(), this.writeFreeCam()
      }
      writeFreeCam() {
        this.stopped() || this.freeCam.write(this.cmd)
      }
      writeHooks(BB) {
        const IB = this.cmd;
        if (!IB) return;
        const ZB = function(BB) {
          let IB = 0;
          for (const ZB of BB) ZB.onPlayerAltAction && (IB |= 1 << NB.$b.AltAction), (ZB.onPlayerClick || ZB.onPlayerClickUp || ZB.onPlayerAttackEntity) && (IB |= 1 << NB.$b.Click), ZB.onPlayerChangeBlock && (IB |= 1 << NB.$b.ChangeBlock), ZB.onPlayerDropItem && (IB |= 1 << NB.$b.DropItem);
          return IB
        }(BB);
        (0 !== ZB || this.hooksSet) && ((0, NB.Qf)(IB, 0, ZB) ? this.hooksSet = 0 !== ZB : this.onError(new Error("SetHooks didn't fit the command ring")))
      }
      writeCustomButtons() {
        const BB = this.cmd;
        BB && !this.stopped() && this.customButtons.write(BB)
      }
      writePromptWatch() {
        const BB = this.cmd,
          IB = this.promptWatch;
        IB !== this.promptWatchSent && BB && !this.stopped() && (0, NB.ig)(BB, 0, RT[IB]) && (this.promptWatchSent = IB)
      }
      writePublicLobby(BB) {
        const IB = this.cmd;
        IB && BB !== this.writtenPublicLobby && ((0, NB.Xf)(IB, 0, BB ? 1 : 0) ? this.writtenPublicLobby = BB : this.onError(new Error("SetPublicLobby didn't fit the command ring")))
      }
      writeLocalDbId(BB) {
        const IB = this.cmd;
        IB && ((0, NB.Rf)(IB, 0, null === BB ? 0 : 1, null === BB ? jT : MT.encode(BB)) || this.onError(new Error("SetLocalDbId didn't fit the command ring")))
      }
      first(BB) {
        const IB = this.generation;
        for (const TB of this.owners) {
          if (IB !== this.generation) break;
          try {
            const IB = BB(TB);
            if (void 0 !== IB) return IB
          } catch (ZB) {
            this.JN(ZB)
          }
        }
      }
      Gq(BB, IB) {
        this.guard((() => {
          GB.l.Gq(BB, IB)
        }))
      }
      dropGameCamera() {
        try {
          this.scriptedCamera.reset()
        } catch (BB) {
          this.JN(BB)
        }
      }
      restartGameCamera() {
        try {
          this.scriptedCamera.restart()
        } catch (BB) {
          this.JN(BB)
        }
      }
      endSession() {
        if (!this.sessionLive) return;
        this.sessionLive = !1;
        const BB = this.owners;
        let IB;
        if (this.owners = this.tickers = this.renderers = this.receivers = [], this.generation++, !this.stopped()) try {
          this.writeAltVeto([]), this.writeHooks([]), this.writePublicLobby(!1), this.writeLocalDbId(null)
        } catch (TB) {
          IB = TB
        }
        try {
          this.entityInfo.sessionEnded()
        } catch (TB) {
          IB ??= TB
        }
        this.round(BB, LT, !0);
        try {
          this.particles.sessionEnded() || this.onError(new Error("ParticleStopAll didn't fit the command ring"))
        } catch (TB) {
          IB ??= TB
        }
        try {
          this.clientApi.disposeGameOutput()
        } catch (TB) {
          IB ??= TB
        }
        const ZB = this.options.onSessionEnd;
        if (ZB) try {
          ZB()
        } catch (TB) {
          this.onError(TB)
        }
        void 0 !== IB && this.JN(IB)
      }
      round(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const TB = this.generation;
        for (const oB of BB) {
          if (TB !== this.generation) break;
          try {
            IB(oB)
          } catch (JB) {
            ZB ? this.onError(JB) : this.JN(JB)
          }
        }
      }
      guard(BB) {
        try {
          BB()
        } catch (IB) {
          this.JN(IB)
        }
      }
    }

    function mT(BB) {
      return BB === NB.Pc ? null : String(BB)
    }

    function XT(BB) {
      BB.Iz(zB.Ad)
    }

    function LT(BB) {
      var IB;
      null === (IB = BB.onClose) || void 0 === IB || IB.call(BB)
    }

    function eT(BB, IB) {
      BB.watch((() => {
        const ZB = function(BB) {
          const IB = [],
            ZB = Math.min(JT, BB.length);
          for (let JB = 0; JB < ZB; JB++) {
            var TB;
            const ZB = null === (TB = BB.slot(JB)) || void 0 === TB ? void 0 : TB.typeObj,
              oB = ZB ? (0, ZT.gunTypeOf)(ZB.id) : void 0;
            void 0 !== oB && IB.push(WI[oB])
          }
          return IB
        }(BB);
        ZB.length > 0 && (IB.preload(ZB), IB.preload([dI]))
      }))
    }
    var uT = ZB(36464),
      fT = ZB(5028),
      lT = ZB(36783),
      AT = ZB(36812);

    function tT(BB) {
      const IB = (0, uT.countDecodesAs)(new fT.Howl({
          ...(0, lT.g)(BB),
          pool: 15,
          preload: !1
        }), "sheet"),
        ZB = IB.load.bind(IB);
      return IB.load = () => (IB._preload = !0, (0, AT.b)(BB), ZB()), IB
    }

    function bT(BB, IB, ZB) {
      const TB = BB.listener;
      if (TB.positionX) xT(TB.positionX, IB, ZB, 0), xT(TB.positionY, IB, ZB, 1), xT(TB.positionZ, IB, ZB, 2), xT(TB.forwardX, IB, ZB, 3), xT(TB.forwardY, IB, ZB, 4), xT(TB.forwardZ, IB, ZB, 5), xT(TB.upX, IB, ZB, 6), xT(TB.upY, IB, ZB, 7), xT(TB.upZ, IB, ZB, 8);
      else {
        let BB = !1;
        for (let TB = 0; TB < 9; TB++) BB ||= IB[TB] !== ZB[TB];
        BB && (TB.setPosition(IB[0], IB[1], IB[2]), TB.setOrientation(IB[3], IB[4], IB[5], IB[6], IB[7], IB[8]), ZB.set(IB))
      }
    }

    function xT(BB, IB, ZB, TB) {
      IB[TB] !== ZB[TB] && (BB.value = IB[TB], ZB[TB] = IB[TB])
    }
    class ET {
      constructor() {
        this.pose = new Float64Array(9), this.written = new Float64Array(9).fill(Number.NaN), this.watchedCtx = void 0
      }
      apply(BB) {
        this.pose.set(BB);
        const IB = fT.Howler.ctx;
        return !!IB && (IB !== this.watchedCtx && (this.watchedCtx = IB, this.written.fill(Number.NaN), IB.addEventListener("statechange", (() => {
          "running" === IB.state && bT(IB, this.pose, this.written)
        }))), "running" === IB.state && bT(IB, BB, this.written), !0)
      }
    }
    var DT = ZB(36591),
      KT = ZB(39278);
    let VT = null,
      ST = null;

    function BJ() {
      return null === VT && (VT = document.createElement("div"), VT.className = "WasmCameraLayer", VT.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;pointer-events:none", document.body.append(VT)), VT
    }

    function IJ() {
      return ST ??= new KT.d(new DT.b(BJ)), ST
    }

    function ZJ() {
      var BB;
      null === (BB = ST) || void 0 === BB || BB.clear(), TJ(null)
    }

    function TJ(BB) {
      TB.d.get("scriptedCameraFacing") !== BB && TB.d.set({
        scriptedCameraFacing: BB
      })
    }
    var JJ = ZB(9388),
      oJ = ZB(9340),
      GJ = ZB(39308),
      vJ = ZB(41058),
      kJ = ZB(3461);
    const cJ = Object.entries(NB.Zb).reduce(((BB, IB) => {
      let [ZB, TB] = IB;
      return BB[TB] = ZB, BB
    }), []);

    function nJ(BB, IB) {
      var ZB;
      return 0 !== ((null !== (ZB = BB.itemFlags[IB]) && void 0 !== ZB ? ZB : 0) & NB.tc.Stackable)
    }
    const hJ = /^(0|[1-9][0-9]*)$/,
      zJ = {
        displayName: (BB, IB) => (0, ZT.displayNameOf)(IB),
        description: (BB, IB) => (0, ZT.descriptionOf)(IB),
        type: (BB, IB) => (0, ZT.itemTypeOf)(IB),
        clipSize: (BB, IB) => (0, ZT.clipSizeOf)(IB),
        armourReduction: (BB, IB) => (0, ZT.armourReductionOf)(IB),
        scopeType: (BB, IB) => (0, ZT.scopeTypeOf)(IB),
        stackable: nJ,
        harvestType: (BB, IB) => cJ[BB.blockHarvestTypes[IB]],
        harvestLevel: (BB, IB) => {
          const ZB = BB.blockHarvestLevels[IB];
          return ZB === NB.zc ? void 0 : ZB
        },
        harvests: (BB, IB) => {
          var ZB;
          const TB = null !== (ZB = BB.itemHarvests[IB]) && void 0 !== ZB ? ZB : 0;
          return 0 !== TB ? cJ[TB] : void 0 === (0, ZT.harvestsNullLevelOf)(IB) ? void 0 : null
        },
        level: (BB, IB) => {
          var ZB, TB;
          const JB = null !== (ZB = BB.itemLevels[IB]) && void 0 !== ZB ? ZB : NB.zc;
          return JB !== NB.zc ? JB : null !== (TB = (0, ZT.harvestsNullLevelOf)(IB)) && void 0 !== TB ? TB : void 0
        }
      };

    function FJ(BB, IB, ZB) {
      return gJ(new Uint8Array(Math.floor(BB.length / IB)), BB, IB, ZB)
    }

    function NJ(BB, IB, ZB) {
      return gJ(new Uint16Array(Math.floor(BB.length / IB)), BB, IB, ZB)
    }

    function gJ(BB, IB, ZB, TB) {
      const JB = new DataView(IB.buffer, IB.byteOffset, IB.byteLength);
      for (let oB = 0; oB < BB.length; oB++) BB[oB] = TB(JB, oB * ZB);
      return BB
    }
    class qJ {
      constructor(BB, IB) {
        this.options = IB, this.metas = [], this.types = new Map, this.props = void 0, this.rootIdOf = BB => {
          const IB = this.idOf(BB);
          if (void 0 === IB) throw new Error(`No item is named ${BB}, an item's root`);
          return IB
        };
        const ZB = IB => {
            const ZB = IB();
            return new Uint8Array(BB.memory().buffer, BB.scratch(), ZB).slice()
          },
          TB = (new TextDecoder).decode(ZB((() => BB.queries.itemNames()))).split("\n"),
          JB = ZB((() => BB.queries.blockProps())),
          oB = ZB((() => BB.queries.itemProps()));
        this.props = {
          blockFlags: FJ(JB, NB.t.BYTES, NB.t.flags),
          blockHarvestTypes: FJ(JB, NB.t.BYTES, NB.t.harvestType),
          blockHarvestLevels: FJ(JB, NB.t.BYTES, NB.t.harvestLevel),
          blockAttachedTops: NJ(JB, NB.t.BYTES, NB.t.attachedTop),
          itemFlags: FJ(oB, NB.vc.BYTES, NB.vc.flags),
          itemHarvests: FJ(oB, NB.vc.BYTES, NB.vc.harvests),
          itemLevels: FJ(oB, NB.vc.BYTES, NB.vc.level)
        }, (0, kJ.j)(Object.freeze(TB)), (0, vJ.e)()
      }
      idOf(BB) {
        if ("number" === typeof BB) return void 0 === (0, kJ.e)(BB) ? void 0 : BB;
        const IB = (0, kJ.c)(BB);
        return void 0 === IB && hJ.test(BB) ? void 0 === (0, kJ.e)(+BB) ? void 0 : +BB : IB
      }
      getMetaInfo(BB) {
        if (!BB || BB === JJ.c) return JJ.d;
        const IB = this.idOf(BB);
        if (void 0 === IB) throw new Error(`Item ${BB} not found in registry`);
        return this.metaOf(IB)
      }
      blockRootId(BB) {
        return 0 !== BB && void 0 !== (0, kJ.e)(BB) ? this.metaOf(BB).rootId : BB
      }
      metaOf(BB) {
        return this.metas[BB] ??= (0, oJ.n)((0, kJ.e)(BB), BB, this.rootIdOf, (0, ZT.rootMetaDescOf)(BB))
      }
      getItemId(BB) {
        if (!BB || BB === JJ.c) return 0;
        const IB = this.idOf(BB);
        if (void 0 === IB) throw new Error(`Invalid block name. You sent ${BB}. The only valid item names are 'Air' and those contained within the blockMetadata/itemMetadata files`);
        return IB
      }
      getItemName(BB) {
        if (!BB || BB === JJ.c) return JJ.c;
        const IB = this.idOf(BB);
        if (void 0 === IB) throw new Error(`Item ${BB} not found in registry`);
        return (0, kJ.e)(IB)
      }
      blockNameToBlockId(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (BB === JJ.c) return 0;
        let ZB = this.idOf(BB);
        if (void 0 === ZB || !this.isBlockId(ZB)) {
          const IB = BB.indexOf("|"),
            TB = IB > 0 ? (0, kJ.c)(BB.slice(0, IB)) : void 0;
          ZB = void 0 !== TB && this.isBlockId(TB) && (0, ZT.rootMetaDescOf)(TB) === BB ? TB : void 0
        }
        if (void 0 !== ZB) return ZB;
        if (!IB) throw new Error(`Invalid block name. You sent ${BB}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`);
        return null
      }
      isBlockId(BB) {
        return BB > 0 && BB < this.props.blockFlags.length
      }
      nameOfId(BB) {
        return 0 !== BB && (0, kJ.e)(BB) || JJ.c
      }
      itemType(BB) {
        const IB = BB ? this.idOf(BB) : void 0;
        if (!IB) return null;
        let ZB = this.types.get(IB);
        return void 0 === ZB && (ZB = Object.freeze({
          id: IB,
          name: (0, kJ.e)(IB),
          meta: this.getMetaInfo(IB),
          stackable: nJ(this.props, IB),
          type: (0, ZT.itemTypeNameOf)(IB),
          clipSize: (0, ZT.clipSizeOf)(IB),
          scopeType: (0, ZT.scopeTypeOf)(IB),
          showsAimingUi: (0, ZT.showsAimingUi)(IB)
        }), this.types.set(IB, ZB)), ZB
      }
      getItemStat(BB, IB) {
        if (GJ.d.has(IB)) {
          const ZB = "minChargeStateToUse" === IB ? this.getMetaInfo(BB).rootName : this.getItemName(BB),
            TB = this.options.get((0, GJ.g)(ZB, IB));
          if (null !== TB && void 0 !== TB) return TB
        }
        return this.defaultStat(BB, IB, this.statOf(IB))
      }
      getDisplayName(BB) {
        return this.getItemStat(BB, "displayName")
      }
      getDefaultItemStat(BB, IB) {
        return this.defaultStat(BB, IB, this.statOf(IB))
      }
      statOf(BB) {
        const IB = zJ[BB];
        return void 0 === IB && function(BB, IB) {
          throw new Error(`ClientApi.${BB} is not available yet in the wasm client (${IB})`)
        }(`getItemStat("${BB}")`, `a table of the stat: the wasm client answers ${Object.keys(zJ).join(", ")}`), IB
      }
      defaultStat(BB, IB, ZB) {
        const TB = this.idOf(BB),
          JB = void 0 === TB ? void 0 : ZB(this.props, TB);
        return null !== JB && void 0 !== JB || "displayName" !== IB ? JB : this.getItemName(BB)
      }
      getClientOption(BB) {
        return this.options.get(BB)
      }
      getGunStats(BB) {
        return this.getClientOption(`${BB}GunStats`)
      }
      watchClientOption(BB, IB) {
        return this.options.subscribe(BB, IB)
      }
      isSolidBlockId(BB) {
        var IB;
        return 0 !== ((null !== (IB = this.props.blockFlags[BB]) && void 0 !== IB ? IB : 0) & NB.r.Solid)
      }
      isStackableId(BB) {
        return nJ(this.props, BB)
      }
      isFluidBlockId(BB) {
        var IB;
        return 0 !== ((null !== (IB = this.props.blockFlags[BB]) && void 0 !== IB ? IB : 0) & NB.r.Fluid)
      }
      canPlaceOverBlockId(BB) {
        var IB;
        return 0 !== ((null !== (IB = this.props.blockFlags[BB]) && void 0 !== IB ? IB : 0) & NB.r.PlaceOver)
      }
      attachedTopOf(BB) {
        var IB;
        return null !== (IB = this.props.blockAttachedTops[BB]) && void 0 !== IB ? IB : 0
      }
      isDroplessBlockId(BB) {
        return (0, ZT.dropsNothing)(BB)
      }
    }

    function yJ(BB, IB) {
      const ZB = new Map;
      return (TB, JB) => {
        const oB = IB.idOf(TB),
          GB = void 0 === oB ? null : (TB => {
            let JB = ZB.get(TB);
            if (void 0 === JB) {
              const oB = BB.queries.salvageRecipe(TB),
                GB = new DataView(BB.memory().buffer, BB.scratch(), oB),
                vB = [];
              for (let BB = 0; BB + NB.Sd.BYTES <= oB; BB += NB.Sd.BYTES) vB.push(Object.freeze({
                item: IB.nameOfId(NB.Sd.item(GB, BB)),
                amt: NB.Sd.amount(GB, BB)
              }));
              JB = 0 === vB.length ? null : Object.freeze(vB), ZB.set(TB, JB)
            }
            return JB
          })(oB);
        if (null === GB || void 0 === JB) return GB;
        const vB = JB <= 0 ? 1 : JB;
        return GB.map((BB => {
          let {
            item: IB,
            amt: ZB
          } = BB;
          return {
            item: IB,
            amt: ZB * vB
          }
        }))
      }
    }
    var UJ = ZB(40801),
      WJ = ZB(36979),
      dJ = ZB(36966),
      CJ = ZB(36969),
      QJ = ZB(36529),
      sJ = ZB(40729),
      wJ = ZB(42581);
    const OJ = -1,
      YJ = new Uint8Array(0),
      iJ = new TextEncoder;

    function pJ(BB) {
      if (null === BB) return null;
      const IB = iJ.encode(BB);
      return IB.byteLength < zB.Mc ? IB : IB.subarray(0, zB.Mc - 1)
    }
    class aJ {
      constructor(BB) {
        this.deps = BB, this.lastView = null, this.lastKeyframes = [], this.keyframesVersion = OJ, this.keyframesSettled = !1, this.reloadFrom = OJ
      }
      reloadKeyframes() {
        var BB, IB;
        this.keyframesVersion = OJ, this.reloadFrom = null !== (BB = null === (IB = this.view()) || void 0 === IB ? void 0 : IB.version) && void 0 !== BB ? BB : OJ
      }
      setPlayback(BB) {
        const IB = 1 === this.deps.core.VJB(BB);
        return IB && (this.lastView = null, this.lastKeyframes = [], this.keyframesVersion = OJ, this.reloadFrom = OJ), IB
      }
      async open(BB, IB) {
        const ZB = await this.deps.replay.open(BB, IB);
        return "opening" === ZB && (this.reloadKeyframes(), this.deps.recorder.prefetch()), ZB
      }
      play() {
        this.deps.replay.play()
      }
      pause() {
        this.deps.replay.pause()
      }
      seek(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.deps.replay.seek(Math.max(0, Math.floor(BB)), IB)
      }
      setSpeed(BB) {
        this.deps.replay.setSpeed(BB)
      }
      setCameraMode(BB) {
        this.deps.replay.setCameraMode(wJ.d.indexOf(BB))
      }
      view() {
        var BB;
        const IB = NB.p.replayViewPtr(this.deps.apiView(), 0);
        if (0 === IB) return this.lastView = null, null;
        const ZB = new DataView(this.deps.buffer(), IB, NB.Ld.BYTES),
          TB = NB.Ld.version(ZB, 0),
          JB = this.lastView;
        if (null !== JB && JB.version === TB) return JB;
        const oB = NB.Ld.markIn(ZB, 0),
          GB = {
            version: TB,
            state: NB.Ld.state(ZB, 0),
            cameraMode: null !== (BB = wJ.d[NB.Ld.cameraMode(ZB, 0)]) && void 0 !== BB ? BB : "recording",
            Iz: NB.Ld.Iz(ZB, 0),
            totalTicks: NB.Ld.totalTicks(ZB, 0),
            speed: NB.Ld.speed(ZB, 0),
            mark: oB === NB.Id ? null : {
              inTick: oB,
              outTick: NB.Ld.markOut(ZB, 0)
            },
            editVersion: NB.Ld.editVersion(ZB, 0)
          };
        return this.lastView = GB, GB
      }
      keyframes() {
        const BB = this.view();
        if (null === BB) return [];
        BB.version !== this.reloadFrom && (this.reloadFrom = OJ);
        const IB = this.reloadFrom === OJ && BB.state !== zB.sd.Cropping && BB.state !== zB.sd.None,
          ZB = IB ? BB.editVersion : BB.version;
        if (ZB === this.keyframesVersion && IB === this.keyframesSettled) return this.lastKeyframes;
        const {
          core: TB
        } = this.deps, JB = TB.SJB(), oB = TB.Rq(), GB = [];
        if (0 !== oB && JB > 0) {
          const BB = new DataView(this.deps.buffer(), oB, JB * zB.wc);
          for (let IB = 0; IB < JB; IB++) {
            const ZB = IB * zB.wc,
              TB = IB => BB.getFloat64(ZB + IB, !0);
            GB.push({
              Iz: BB.getUint32(ZB + zB.Jc, !0),
              position: [TB(zB.Fc), TB(zB.Fc + 8), TB(zB.Fc + 16)],
              direction: [TB(zB.yc), TB(zB.yc + 8), TB(zB.yc + 16)],
              easing: [TB(zB.Bc), TB(zB.Bc + 8), TB(zB.Bc + 16), TB(zB.Bc + 24)]
            })
          }
        }
        return this.keyframesVersion = ZB, this.keyframesSettled = IB, this.lastKeyframes = GB, GB
      }
      addKeyframe() {
        const BB = this.deps.apiView(),
          IB = [NB.p.eye(BB, 0, 0), NB.p.eye(BB, 0, 1), NB.p.eye(BB, 0, 2)];
        return this.deps.replay.addKeyframe(IB, function(BB, IB) {
          const ZB = Math.cos(IB);
          return [ZB * Math.sin(BB), -Math.sin(IB), ZB * Math.cos(BB)]
        }(NB.p.heading(BB, 0), NB.p.pitch(BB, 0)))
      }
      setKeyframe(BB) {
        return this.deps.replay.setKeyframe(BB.Iz, Float64Array.from([...BB.position, ...BB.direction, ...BB.easing]))
      }
      moveKeyframe(BB, IB) {
        return this.deps.replay.moveKeyframe(BB, IB)
      }
      deleteKeyframes(BB, IB) {
        return this.deps.replay.deleteKeyframes(BB, IB)
      }
      setMark(BB) {
        var IB, ZB;
        return this.deps.replay.setMark(null !== (IB = null === BB || void 0 === BB ? void 0 : BB.inTick) && void 0 !== IB ? IB : -1, null !== (ZB = null === BB || void 0 === BB ? void 0 : BB.outTick) && void 0 !== ZB ? ZB : -1)
      }
      crop(BB, IB) {
        const ZB = this.deps.replay.crop(BB, IB);
        return ZB && this.reloadKeyframes(), ZB
      }
      save(BB) {
        return this.deps.replay.askSave(), this.deps.recorder.saveEdited(BB)
      }
      recorderControl(BB) {
        this.deps.recorder.control(BB)
      }
      recorderPrefs(BB, IB) {
        this.deps.recorder.prefs(BB, IB)
      }
      recorderOption(BB, IB) {
        const ZB = this.deps.cmd();
        return null !== ZB && (0, NB.yf)(ZB, 0, BB, null === IB ? YJ : iJ.encode(IB))
      }
      recordFlyingText(BB, IB, ZB, TB) {
        const JB = this.deps.cmd(),
          oB = Math.max(0, Math.min(4294967295, Math.round(TB)));
        return null !== JB && (0, NB.vf)(JB, 0, IB, ZB, oB, iJ.encode(BB))
      }
      recordPlayerKilled(BB, IB, ZB, TB) {
        const JB = this.deps.cmd();
        return null !== JB && (0, NB.Bf)(JB, 0, BB, IB, Math.max(0, ZB), iJ.encode(TB))
      }
      recordKillfeed(BB, IB, ZB) {
        var TB, JB;
        const oB = this.deps.cmd(),
          GB = function(BB) {
            const IB = BB.reduce(((BB, IB) => {
                var ZB;
                return BB + bZ.qb + (null !== (ZB = null === IB || void 0 === IB ? void 0 : IB.byteLength) && void 0 !== ZB ? ZB : 0)
              }), 0),
              ZB = new Uint8Array(IB),
              TB = new DataView(ZB.buffer);
            let JB = 0;
            for (const GB of BB) {
              var oB;
              TB.setUint16(JB, null !== (oB = null === GB || void 0 === GB ? void 0 : GB.byteLength) && void 0 !== oB ? oB : zB.Mc, !0), JB += bZ.qb, null !== GB && (ZB.set(GB, JB), JB += GB.byteLength)
            }
            return ZB
          }([pJ(BB.name), pJ(BB.colour), pJ(IB.name), pJ(IB.colour), pJ(ZB)]);
        return null !== oB && (0, NB.xf)(oB, 0, null !== (TB = BB.id) && void 0 !== TB ? TB : NB.Rc, null !== (JB = IB.id) && void 0 !== JB ? JB : NB.Rc, GB)
      }
      recorderSession(BB, IB) {
        this.deps.recorder.session({
          session: IB,
          lobbyType: BB.lobbyType,
          game: BB.gameNameWithVariation,
          lobby: BB.lobbyName
        })
      }
      recorderClose() {
        this.deps.core.BoB()
      }
      filePartDone(BB, IB) {
        this.deps.recorder.filePartDone(BB, IB)
      }
      fileDone(BB) {
        this.deps.recorder.fileDone(BB)
      }
    }
    const HJ = -2147483648;
    class MJ {
      constructor(BB) {
        var IB;
        this.deps = BB, this.state = {
          recording: !1,
          clipping: !1,
          hasClipBuffer: !1,
          seconds: 0
        }, this.recordingSince = null, this.clipTickPending = !1, this.now = void 0, this.now = null !== (IB = BB.now) && void 0 !== IB ? IB : () => performance.now()
      }
      get current() {
        return this.state
      }
      get live() {
        var BB, IB, ZB;
        return null === (BB = null === (IB = (ZB = this.deps).live) || void 0 === IB ? void 0 : IB.call(ZB)) || void 0 === BB || BB
      }
      activated(BB) {
        var IB, ZB;
        this.live && (this.viewerShown(!0 === (null === (IB = (ZB = this.deps).viewerOpen) || void 0 === IB ? void 0 : IB.call(ZB))), this.deps.client.recorderSession(BB, (0, wJ.g)()))
      }
      closed() {
        this.deps.client.recorderClose()
      }
      toggleRecording() {
        var BB, IB;
        this.live && (this.state.recording || !0 !== (null === (BB = (IB = this.deps).viewerOpen) || void 0 === BB ? void 0 : BB.call(IB))) ? this.deps.client.recorderControl(zB.ad.ToggleRecording) : this.deps.notify(CJ.b.closeViewerFirst)
      }
      saveClip() {
        this.live ? this.deps.client.recorderControl(zB.ad.SaveClip) : this.deps.notify(CJ.b.clippingNotOn)
      }
      viewerShown(BB) {
        this.live && this.deps.client.recorderControl(BB ? zB.ad.ViewerOpened : zB.ad.ViewerClosed)
      }
      setPrefs(BB, IB) {
        this.live && this.deps.client.recorderPrefs(BB, IB)
      }
      setOption(BB, IB) {
        this.live && this.deps.client.recorderOption(BB, IB)
      }
      recordFlyingText(BB, IB, ZB, TB) {
        this.live && this.deps.client.recordFlyingText(BB, IB, ZB, TB)
      }
      recordPlayerKilled(BB, IB, ZB, TB) {
        this.live && this.deps.client.recordPlayerKilled(BB, IB, ZB, TB)
      }
      recordKillfeed(BB, IB, ZB) {
        this.live && this.deps.client.recordKillfeed(BB, IB, ZB)
      }
      Iz() {
        let BB = this.state;
        if (this.clipTickPending && (this.clipTickPending = !1, BB = {
            ...BB,
            hasClipBuffer: !0
          }), null !== this.recordingSince) {
          const IB = Math.floor((this.now() - this.recordingSince) / 1e3);
          IB !== BB.seconds && (BB = {
            ...BB,
            seconds: IB
          })
        }
        this.set(BB)
      }
      onEvent(BB) {
        var IB, ZB;
        const {
          notify: TB
        } = this.deps, JB = CJ.b;
        switch (BB.what) {
          case zB.Yc.RecordingStarted:
            this.recordingSince = this.now(), this.set({
              ...this.state,
              recording: !0,
              seconds: 0
            }), TB(JB.recordingStarted);
            break;
          case zB.Yc.RecordingStopped:
            this.stopRecording(), TB(JB.recordingStopped), this.saveState(zB.ld.Recording, "saving");
            break;
          case zB.Yc.RecordingDiscarded:
            this.stopRecording(), TB(JB.recordingDiscarded);
            break;
          case zB.Yc.RecordingTurnedOff:
            this.stopRecording(), TB(JB.recordingTurnedOff);
            break;
          case zB.Yc.LimitReached:
            TB(JB.limitReached);
            break;
          case zB.Yc.ClipSaved:
            this.saveState(zB.ld.Clip, "saving");
            break;
          case zB.Yc.ClipEmpty:
            TB(JB.clipEmpty);
            break;
          case zB.Yc.ClippingNotOn:
            TB(JB.clippingNotOn);
            break;
          case zB.Yc.Disallowed:
            TB(JB.disallowed);
            break;
          case zB.Yc.ClippingOn:
            this.clipTickPending = !0, this.set({
              ...this.state,
              clipping: !0,
              hasClipBuffer: !1
            });
            break;
          case zB.Yc.ClippingOff:
            this.clipTickPending = !1, this.set({
              ...this.state,
              clipping: !1,
              hasClipBuffer: !1
            });
            break;
          case zB.Yc.ClipSettingsChanged:
            this.clipTickPending = this.state.clipping, this.set({
              ...this.state,
              hasClipBuffer: !1
            });
            break;
          case zB.Yc.SaveBusy:
            null === (IB = (ZB = this.deps).onSaveState) || void 0 === IB || IB.call(ZB, BB.kind, "busy"), TB(JB.saveBusy);
            break;
          case zB.Yc.CloseViewerFirst:
            TB(JB.closeViewerFirst)
        }
      }
      fileReady(BB, IB) {
        this.deps.download(IB), this.saveState(BB, "done"), this.deps.notify(BB === zB.ld.Clip ? CJ.b.clipSaved : CJ.b.recordingSaved)
      }
      failed(BB) {
        this.saveState(BB, "failed"), this.deps.notify(BB === zB.ld.Clip ? CJ.b.clipFailed : CJ.b.recordingFailed)
      }
      stopRecording() {
        this.recordingSince = null, this.set({
          ...this.state,
          recording: !1,
          seconds: 0
        })
      }
      saveState(BB, IB) {
        var ZB, TB;
        null === (ZB = (TB = this.deps).onSaveState) || void 0 === ZB || ZB.call(TB, BB, IB)
      }
      set(BB) {
        BB !== this.state && (this.state = BB, this.deps.onState(BB))
      }
    }
    const jJ = new TextDecoder;

    function PJ(BB, IB, ZB, TB) {
      const JB = [];
      for (let oB = 0; oB < TB; oB++) {
        if (IB + bZ.qb > ZB) return null;
        const TB = BB.getUint16(IB, !0);
        if (IB += bZ.qb, TB !== zB.Mc) {
          if (IB + TB > ZB) return null;
          JB.push(jJ.decode(new Uint8Array(BB.buffer, BB.byteOffset + IB, TB))), IB += TB
        } else JB.push(null)
      }
      return IB === ZB ? JB : null
    }

    function RJ(BB, IB) {
      let ZB = new DataView(new ArrayBuffer(0)),
        TB = !0;
      const JB = {
        replayFailed: (IB, ZB, TB) => {
          BB.replayFailed({
            reason: IB,
            code: ZB,
            version: TB
          })
        },
        replayOption: (IB, JB, oB, GB) => {
          const vB = function(BB, IB, ZB, TB) {
            switch (IB) {
              case zB.od.Cleared:
                return 0 === TB ? null : void 0;
              case zB.od.Text:
                return jJ.decode(new Uint8Array(BB.buffer, BB.byteOffset + ZB, TB));
              case zB.od.Int:
                return TB === Int32Array.BYTES_PER_ELEMENT ? BB.getInt32(ZB, !0) : void 0;
              case zB.od.Double:
                return TB === Float64Array.BYTES_PER_ELEMENT ? BB.getFloat64(ZB, !0) : void 0;
              default:
                return
            }
          }(ZB, JB, oB, GB);
          void 0 !== vB ? BB.replayOption({
            key: IB,
            value: vB
          }) : TB = !1
        },
        replayUiEvent: (IB, JB, oB, GB, vB, kB) => {
          const cB = function(BB, IB, ZB, TB, JB, oB, GB) {
            const vB = oB + GB;
            switch (IB) {
              case zB.rd.FlyingText: {
                const GB = PJ(BB, oB, vB, 1);
                return null !== GB && null !== GB[0] ? {
                  what: IB,
                  Ro: ZB,
                  Po: TB,
                  angle: JB,
                  contentJson: GB[0]
                } : null
              }
              case zB.rd.PlayerKilled: {
                const TB = PJ(BB, oB, vB, 3);
                return TB ? {
                  what: IB,
                  killstreak: ZB,
                  dead: TB[0],
                  killer: TB[1],
                  withItem: TB[2]
                } : null
              }
              case zB.rd.Killfeed: {
                const ZB = PJ(BB, oB, vB, 7);
                return ZB ? {
                  what: IB,
                  killerId: ZB[0],
                  killerName: ZB[1],
                  killerColour: ZB[2],
                  victimId: ZB[3],
                  victimName: ZB[4],
                  victimColour: ZB[5],
                  withItem: ZB[6]
                } : null
              }
              default:
                return null
            }
          }(ZB, IB, JB, oB, GB, vB, kB);
          null !== cB ? BB.replayUiEvent(cB) : TB = !1
        },
        replayFilePart: (ZB, JB, oB, GB) => {
          const vB = IB();
          oB + GB > vB.byteLength ? TB = !1 : BB.filePart(ZB, JB, new Uint8Array(vB, oB, GB).slice())
        },
        replayFileReady: (IB, ZB, TB, JB) => {
          BB.fileReady({
            save: IB,
            kind: ZB,
            parts: TB,
            bytes: JB
          })
        },
        recorderEvent: (IB, ZB, TB) => {
          BB.recorderEvent({
            what: IB,
            kind: ZB,
            save: TB
          })
        },
        replayOpened: (IB, TB, JB) => {
          BB.replayOpened(jJ.decode(new Uint8Array(ZB.buffer, ZB.byteOffset + TB, JB)))
        }
      };
      return (BB, IB, oB, GB) => !(BB < zB.X.ReplayFailed || BB > zB.X.RecorderEvent) && (ZB = IB, TB = !0, (0, NB.me)(BB, IB, oB, GB, JB) && TB)
    }

    function rJ(BB) {
      let IB = null;
      const ZB = RJ(BB, (() => {
        if (null === IB) throw new Error("a recorder event read outside recorderEventReader's call");
        return IB.buffer
      }));
      return (BB, TB) => {
        IB = TB;
        try {
          ! function(BB, IB) {
            const ZB = BB.slice(),
              TB = new DataView(ZB.buffer);
            for (let JB = 0; JB < ZB.byteLength;) {
              if (JB + zB.U > ZB.byteLength) throw new Error(`the recorder module's events end mid-head at ${JB}`);
              const BB = TB.getUint32(JB, !0),
                oB = 65535 & BB,
                GB = BB >>> 16,
                vB = JB + zB.U;
              if (vB + GB > ZB.byteLength || !IB(oB, TB, vB, GB)) throw new Error(`the recorder module wrote a malformed event ${oB} (${GB} bytes) at ${JB}`);
              JB = vB + (0, zB.xe)(GB)
            }
          }(BB, ZB)
        } finally {
          IB = null
        }
      }
    }
    class mJ {
      constructor(BB, IB) {
        this.acks = BB, this.handlers = IB, this.parts = new Map
      }
      onPart(BB, IB, ZB) {
        let TB = this.parts.get(BB);
        TB || (TB = [], this.parts.set(BB, TB)), TB[IB] = ZB, this.acks.filePartDone(BB, IB)
      }
      onReady(BB) {
        var IB;
        const ZB = null !== (IB = this.parts.get(BB.save)) && void 0 !== IB ? IB : [];
        this.parts.delete(BB.save);
        const TB = function(BB, IB, ZB) {
          if (BB.length !== IB) return null;
          let TB = 0;
          for (let GB = 0; GB < IB; GB++) {
            if (void 0 === BB[GB]) return null;
            TB += BB[GB].byteLength
          }
          if (TB !== ZB) return null;
          if (1 === IB) return BB[0];
          const JB = new Uint8Array(ZB);
          let oB = 0;
          for (const GB of BB) JB.set(GB, oB), oB += GB.byteLength;
          return JB
        }(ZB, BB.parts, BB.bytes);
        this.acks.fileDone(BB.save), null === TB ? this.handlers.fileIncomplete(BB.save, BB.kind) : this.handlers.fileReady(BB.save, BB.kind, TB)
      }
      onDiscarded(BB) {
        this.parts.delete(BB)
      }
    }

    function XJ() {
      return ZB.e(61).then((() => ZB(60677)))
    }
    class LJ {
      constructor(BB) {
        this.deps = BB, this.sink = void 0, this.recorder = void 0, this.recorderEvents = void 0, this.parts = void 0, this.viewerChunk = null, this.viewer = null;
        const {
          client: IB
        } = BB;
        this.recorder = new MJ({
          client: IB,
          live: () => {
            var BB;
            return !0 !== (null === (BB = this.viewer) || void 0 === BB ? void 0 : BB.inPlayback)
          },
          viewerOpen: BB.viewerOpen,
          notify: BB.notify,
          download: IB => {
            var ZB;
            null === (ZB = BB.download) || void 0 === ZB || ZB.call(BB, IB)
          },
          onState: BB.onRecorderState,
          onSaveState: BB.onSaveState
        }), this.parts = new mJ(IB, {
          fileReady: (BB, IB, ZB) => {
            var TB;
            IB === zB.ld.Edited ? null === (TB = this.viewer) || void 0 === TB || TB.saveDone(ZB) : this.recorder.fileReady(IB, ZB)
          },
          fileIncomplete: (BB, IB) => {
            this.saveFailed(IB)
          }
        });
        const ZB = {
          replayFailed: BB => {
            var IB;
            null === (IB = this.viewer) || void 0 === IB || IB.onFailed(BB)
          },
          replayOption: IB => {
            var ZB;
            null === (ZB = BB.onReplayOption) || void 0 === ZB || ZB.call(BB, IB)
          },
          replayUiEvent: IB => {
            var ZB;
            null === (ZB = BB.onReplayUiEvent) || void 0 === ZB || ZB.call(BB, IB)
          },
          filePart: (BB, IB, ZB) => {
            this.parts.onPart(BB, IB, ZB)
          },
          fileReady: BB => {
            this.parts.onReady(BB)
          },
          replayOpened: IB => {
            var ZB;
            null === (ZB = BB.onReplayOpened) || void 0 === ZB || ZB.call(BB, IB)
          },
          recorderEvent: BB => {
            var IB;
            switch (BB.what) {
              case zB.Yc.FileDiscarded:
                this.parts.onDiscarded(BB.save);
                break;
              case zB.Yc.SaveFailed:
                this.saveFailed(BB.kind);
                break;
              case zB.Yc.SaveBusy:
                if (null !== (IB = this.viewer) && void 0 !== IB && IB.savePending) {
                  this.viewer.saveFailed(!0);
                  break
                }
                this.recorder.onEvent(BB);
                break;
              default:
                this.recorder.onEvent(BB)
            }
          }
        };
        this.sink = function(BB, IB) {
          return {
            onReplayEvent: RJ(BB, IB)
          }
        }(ZB, BB.buffer), this.recorderEvents = rJ(ZB)
      }
      get currentViewer() {
        return this.viewer
      }
      loadViewer() {
        var BB;
        return this.viewer ? Promise.resolve(this.viewer) : (this.viewerChunk ??= (null !== (BB = this.deps.loadViewer) && void 0 !== BB ? BB : XJ)().catch((BB => {
          throw this.viewerChunk = null, BB
        })), this.viewerChunk.then((BB => (this.viewer ??= new BB.ReplayViewer({
          client: this.deps.client,
          setHoldDraws: this.deps.setHoldDraws,
          meshPending: this.deps.meshPending,
          notify: this.deps.notify,
          onChange: () => {
            var BB, IB;
            null === (BB = (IB = this.deps).onViewerChange) || void 0 === BB || BB.call(IB)
          }
        }), this.viewer))))
      }
      activated(BB) {
        this.recorder.activated(BB)
      }
      afterFrame(BB) {
        try {
          BB > 0 && this.recorder.Iz()
        } finally {
          var IB;
          null === (IB = this.viewer) || void 0 === IB || IB.afterFrame()
        }
      }
      end() {
        var BB;
        null === (BB = this.viewer) || void 0 === BB || BB.end()
      }
      saveFailed(BB) {
        var IB;
        BB === zB.ld.Edited ? null === (IB = this.viewer) || void 0 === IB || IB.saveFailed(!1) : this.recorder.failed(BB)
      }
    }
    var eJ = ZB(40675),
      uJ = ZB(40692),
      fJ = ZB(4978),
      lJ = ZB(40946);
    class AJ {
      constructor(BB) {
        this.deps = BB, this.analogue = [0, 0], this.keys = 0, this.unsent = !1
      }
      drag(BB, IB) {
        if (!this.deps.live() || 0 === BB && 0 === IB) return;
        const ZB = (0, mB.v)(0, performance.now()),
          TB = this.deps.dragScale();
        (0, lJ.h)((() => {
          (0, mB.A)(zB.vb.MouseDown, 0, 0, 0, ZB), (0, mB.A)(zB.vb.MouseMove, 0, BB * TB, IB * TB, 0), (0, mB.A)(zB.vb.MouseUp, 0, 0, 0, ZB)
        }))
      }
      move(BB) {
        var IB, ZB;
        this.analogue[0] = null !== (IB = null === BB || void 0 === BB ? void 0 : BB.x) && void 0 !== IB ? IB : 0, this.analogue[1] = null !== (ZB = null === BB || void 0 === BB ? void 0 : BB.y) && void 0 !== ZB ? ZB : 0, this.send()
      }
      holdVertical(BB, IB) {
        const ZB = "freeCamUp" === BB ? NB.Mb.Up : NB.Mb.Down;
        this.keys = IB ? this.keys | ZB : this.keys & ~ZB, this.send()
      }
      flush() {
        this.unsent && this.send()
      }
      send() {
        const BB = this.deps.live() ? this.deps.cmd() : null;
        this.unsent = null !== BB && !(0, NB.Ae)(BB, 0, this.analogue, this.keys)
      }
    }
    var tJ = ZB(3726),
      bJ = ZB(760),
      xJ = ZB(282),
      EJ = ZB(105),
      DJ = ZB(34103),
      KJ = ZB(747),
      VJ = ZB(36609);

    function SJ() {
      const BB = TB.d.get("clientEscMenuOptions"),
        IB = (0, bJ.k)(BB);
      return {
        mouse: (0, EJ.isMobile)() ? IB : BB.mouseSensitivity,
        touch: IB,
        fovPercent: BB.cameraFOV
      }
    }

    function Bo() {
      const BB = TB.d.get("clientEscMenuOptions"),
        IB = TB.d.get("isTouchScreen") ? (0, bJ.k)(BB) : BB.mouseSensitivity,
        ZB = SJ().mouse;
      return ZB > 0 ? IB / ZB : 1
    }

    function Io(BB) {
      const IB = () => {
        BB.setSoundPrefs(TB.d.get("soundVolume"), TB.d.get("soundOnFromAd"))
      };
      let ZB = null;
      const JB = () => {
        const {
          showFog: IB,
          enableLighting: JB,
          fogChunkDistance: oB,
          chunkFadeIn: GB
        } = TB.d.get("clientEscMenuOptions"), vB = {
          showFog: IB,
          lighting: JB,
          fogChunks: oB,
          chunkFade: GB,
          cellLight: (0, tJ.k)("cellLight") ? (0, tJ.k)("cellLightUnlit") ? "all" : "lit" : "off"
        };
        ZB && (0, zB.he)(ZB) === (0, zB.he)(vB) && ZB.fogChunks === oB || (ZB = vB, BB.setEnvPrefs(ZB))
      };
      let oB = null;
      const vB = () => {
        const IB = function() {
          const BB = TB.d.get("clientEscMenuOptions");
          return {
            nametagsHidden: TB.d.get("areNametagsHidden"),
            crouchToggle: BB.crouchIsToggle,
            bhopDisabled: BB.disableBunnyHopping,
            disableBobbing: BB.disableBobbing,
            ezTowering: BB.ezTowering ? (0, xJ.g)() : null,
            ezBridging: BB.ezBridging,
            showChunkBorders: BB.showChunkBorders,
            touchWalk: !(0, VJ.h)(),
            edgeGuard: BB.touchEdgeGuard,
            edgeGuardLong: (0, KJ.c)(),
            nametagCutDistance: (0, DJ.d)()
          }
        }();
        (0, YB.he)(oB, IB) || (oB = IB, BB.setUiPrefs(IB))
      };
      let kB = null;
      const cB = () => {
        const IB = SJ();
        (0, YB.he)(kB, IB) || (kB = IB, BB.setLookPrefs(IB))
      };
      IB(), JB(), vB(), cB();
      const nB = [(0, GB.p)("appManagerUpdated|soundVolume", IB), (0, GB.p)("appManagerUpdated|soundOnFromAd", IB), (0, GB.p)("appManagerUpdated|clientEscMenuOptions", (() => {
        JB(), vB(), cB()
      })), (0, GB.p)(VJ.d, vB), (0, GB.p)("appManagerUpdated|enabledDebugFeatures", JB), (0, GB.p)("appManagerUpdated|areNametagsHidden", vB), (0, GB.p)("appManagerUpdated|showDistantNametags", vB)];
      return () => {
        for (const BB of nB) BB()
      }
    }
    var Zo = ZB(40919),
      To = ZB(40928);
    var Jo = (0, To.d)("lend"),
      oo = (0, To.d)("starting"),
      Go = (0, To.d)("generation"),
      vo = (0, To.d)("end");
    class ko {
      constructor(BB) {
        this.deps = BB, Object.defineProperty(this, vo, {
          value: co
        }), Object.defineProperty(this, Jo, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, oo, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, Go, {
          writable: !0,
          value: 0
        })
      }
      get active() {
        return null !== (0, Zo.b)(this, Jo)[Jo] || (0, Zo.b)(this, oo)[oo]
      }
      async start(BB) {
        if (this.active) return "busy";
        const IB = (0, Zo.b)(this, Go)[Go];
        (0, Zo.b)(this, oo)[oo] = !0;
        try {
          if (!await this.deps.ensureLoaded()) return "refused"
        } finally {
          (0, Zo.b)(this, oo)[oo] = !1
        }
        if (IB !== (0, Zo.b)(this, Go)[Go]) return "refused";
        const ZB = this.deps.beginSave();
        if (!ZB) return "refused";
        const TB = Number(BigInt.asUintN(32, BB)),
          JB = Number(BigInt.asUintN(32, BB >> 32n));
        let oB = "refused";
        return this.deps.recorderCall(((BB, IB) => {
          const GB = ZB.editState,
            vB = BB.stage(GB.length);
          0 !== vB ? (new Uint8Array(IB.buffer, vB, GB.length).set(GB), BB.IoB(ZB.headLen, TB, JB) && (oB = "sealing")) : oB = "tooLarge"
        }), !0), "sealing" !== oB ? (ZB.end(), oB) : ((0, Zo.b)(this, Jo)[Jo] = ZB, "sealing")
      }
      beforeRecorderStep() {
        const BB = (0, Zo.b)(this, Jo)[Jo];
        if (!BB) return null;
        let IB = -1,
          ZB = 0;
        if (!this.deps.recorderCall((BB => {
            IB = BB.ZoB(), IB > 0 && (ZB = BB.ToB())
          }))) return (0, Zo.b)(this, vo)[vo](BB, "stopped");
        if (IB < 0) return (0, Zo.b)(this, vo)[vo](BB, "read");
        if (0 === IB) return null;
        const TB = BB.head(ZB, IB);
        let JB = !1;
        if (TB && this.deps.recorderCall(((BB, ZB) => {
            const oB = BB.stage(IB);
            0 !== oB && (new Uint8Array(ZB.buffer, oB, IB).set(TB), JB = !0)
          }), !0), JB) return null;
        const oB = BB.givenUp();
        this.deps.recorderCall((BB => {
          BB.JoB()
        }));
        const GB = (0, Zo.b)(this, vo)[vo](BB, oB ? "givenUp" : "stopped");
        return oB && this.deps.givenUp("Reopen the replay you were editing to make your edits again, as they weren't saved when another replay opened."), GB
      }
      stop() {
        (0, Zo.b)(this, Go)[Go]++;
        const BB = (0, Zo.b)(this, Jo)[Jo];
        BB && (this.deps.recorderCall((BB => {
          BB.JoB()
        })), (0, Zo.b)(this, vo)[vo](BB, "stopped"))
      }
    }

    function co(BB, IB) {
      return (0, Zo.b)(this, Jo)[Jo] = null, BB.end(), IB
    }

    function no(BB, IB) {
      const ZB = new Uint8Array(4),
        TB = new DataView(ZB.buffer);
      return TB.setUint8(0, BB ? 1 : 0), TB.setUint16(2, Math.max(0, Math.min(65535, Math.round(IB))), !0), ZB
    }

    function ho(BB, IB) {
      return BB > function(BB) {
        return 16777216 + 314572.8 * Math.max(0, BB)
      }(IB) + 33554432
    }
    let zo = null;

    function Fo(BB) {
      return zo ??= async function(BB) {
        const IB = BB.loadInFlight();
        IB && await IB.catch((() => {}));
        if (BB.trapped()) return "trapped";
        if (BB.busy() || !ho(BB.memoryBytes(), BB.clipSeconds())) return "XF";
        BB.unload();
        let ZB = !1;
        try {
          ZB = await BB.load()
        } catch {
          ZB = !1
        }
        if (!ZB) return BB.trapped() ? "trapped" : BB.WN() ? "WN" : "failed";
        return "recycled"
      }(BB).finally((() => {
        zo = null
      })), zo
    }
    const No = "Replay recording couldn't load, so try again.",
      go = new Set([zB.ad.ToggleRecording, zB.ad.SaveClip]);
    var qo = (0, To.d)("bindings"),
      yo = (0, To.d)("module"),
      Uo = (0, To.d)("memory"),
      Wo = (0, To.d)("trapped"),
      Co = (0, To.d)("WN"),
      Qo = (0, To.d)("recycleDue"),
      so = (0, To.d)("loading"),
      wo = (0, To.d)("generation"),
      Oo = (0, To.d)("viewDrawn"),
      Yo = (0, To.d)("clip"),
      io = (0, To.d)("session"),
      po = (0, To.d)("control"),
      ao = (0, To.d)("deferred"),
      Ho = (0, To.d)("coreU8"),
      Mo = (0, To.d)("coreU32"),
      jo = (0, To.d)("moduleU8"),
      Po = (0, To.d)("edited"),
      Ro = (0, To.d)("sendSession"),
      ro = (0, To.d)("checkNotInEvents"),
      mo = (0, To.d)("clipping"),
      Xo = (0, To.d)("busy"),
      Lo = (0, To.d)("use"),
      eo = (0, To.d)("ensureLoaded"),
      uo = (0, To.d)("loadOnce"),
      fo = (0, To.d)("recycleAfterStep"),
      Ao = (0, To.d)("settleRecycle"),
      to = (0, To.d)("load"),
      bo = (0, To.d)("attach"),
      xo = (0, To.d)("resendHeld"),
      Eo = (0, To.d)("recycle"),
      Do = (0, To.d)("send"),
      Ko = (0, To.d)("unload"),
      Vo = (0, To.d)("dropModule"),
      So = (0, To.d)("coreBytes"),
      BG = (0, To.d)("coreWords"),
      IG = (0, To.d)("moduleBytes"),
      ZG = (0, To.d)("loadFailed"),
      TG = (0, To.d)("call"),
      JG = (0, To.d)("guard"),
      oG = (0, To.d)("trapOn");
    class GG {
      constructor(BB) {
        this.deps = BB, Object.defineProperty(this, oG, {
          value: aG
        }), Object.defineProperty(this, JG, {
          value: pG
        }), Object.defineProperty(this, TG, {
          value: iG
        }), Object.defineProperty(this, ZG, {
          value: YG
        }), Object.defineProperty(this, IG, {
          value: OG
        }), Object.defineProperty(this, BG, {
          value: wG
        }), Object.defineProperty(this, So, {
          value: sG
        }), Object.defineProperty(this, Vo, {
          value: QG
        }), Object.defineProperty(this, Ko, {
          value: CG
        }), Object.defineProperty(this, Do, {
          value: dG
        }), Object.defineProperty(this, Eo, {
          value: WG
        }), Object.defineProperty(this, xo, {
          value: UG
        }), Object.defineProperty(this, bo, {
          value: yG
        }), Object.defineProperty(this, to, {
          value: qG
        }), Object.defineProperty(this, Ao, {
          value: gG
        }), Object.defineProperty(this, fo, {
          value: NG
        }), Object.defineProperty(this, uo, {
          value: FG
        }), Object.defineProperty(this, eo, {
          value: zG
        }), Object.defineProperty(this, Lo, {
          value: hG
        }), Object.defineProperty(this, Xo, {
          value: nG
        }), Object.defineProperty(this, mo, {
          value: cG
        }), Object.defineProperty(this, ro, {
          value: kG
        }), Object.defineProperty(this, Ro, {
          value: vG
        }), Object.defineProperty(this, qo, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, yo, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Uo, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Wo, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, Co, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, Qo, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, so, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, wo, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, Oo, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, Yo, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, io, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, po, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, ao, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Ho, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Mo, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, jo, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Po, {
          writable: !0,
          value: void 0
        }), (0, Zo.b)(this, Po)[Po] = new ko({
          ensureLoaded: () => (0, Zo.b)(this, eo)[eo](),
          recorderCall: (BB, IB) => {
            IB && (0, Zo.b)(this, ro)[ro]("an edited save's stage");
            const ZB = (0, Zo.b)(this, TG)[TG](((IB, ZB) => (BB(IB, ZB), !0)));
            return null !== ZB && void 0 !== ZB && ZB
          },
          beginSave: BB.beginSave,
          givenUp: BB.givenUp
        })
      }
      get active() {
        return null !== (0, Zo.b)(this, yo)[yo]
      }
      get trapped() {
        return (0, Zo.b)(this, Wo)[Wo]
      }
      get loading() {
        return null !== (0, Zo.b)(this, so)[so]
      }
      prefetch() {
        (0, Zo.b)(this, Co)[Co] || (0, Zo.b)(this, Wo)[Wo] || (0, Zo.b)(this, yo)[yo] || (0, Zo.b)(this, so)[so] || this.deps.prefetch()
      }
      viewDrawn() {
        (0, Zo.b)(this, Oo)[Oo] = !0, (0, Zo.b)(this, mo)[mo]() && (0, Zo.b)(this, Lo)[Lo]()
      }
      prefs(BB, IB) {
        (0, Zo.b)(this, Yo)[Yo] = {
          on: BB,
          seconds: IB
        }, (0, Zo.b)(this, Do)[Do](zB.Wc.Prefs, no(BB, IB)), BB && (0, Zo.b)(this, Oo)[Oo] && (0, Zo.b)(this, Lo)[Lo]()
      }
      control(BB) {
        const IB = function(BB) {
          return new Uint8Array([BB, 0, 0, 0])
        }(BB);
        if (go.has(BB)) return (0, Zo.b)(this, yo)[yo] ? void(0, Zo.b)(this, Do)[Do](zB.Wc.Control, IB) : ((0, Zo.b)(this, po)[po] = IB, void(0, Zo.b)(this, Lo)[Lo]());
        (0, Zo.b)(this, Co)[Co] || this.deps.coreCommand(zB.Wc.Control, IB)
      }
      session(BB) {
        (0, Zo.b)(this, io)[io] = BB, (0, Zo.b)(this, Ro)[Ro](BB)
      }
      filePartDone(BB, IB) {
        (0, Zo.b)(this, Do)[Do](zB.Wc.FilePartDone, function(BB, IB) {
          const ZB = new Uint8Array(8),
            TB = new DataView(ZB.buffer);
          return TB.setUint32(0, BB, !0), TB.setUint32(4, IB, !0), ZB
        }(BB, IB))
      }
      fileDone(BB) {
        return (0, Zo.b)(this, Do)[Do](zB.Wc.FileDone, function(BB) {
          const IB = new Uint8Array(4);
          return new DataView(IB.buffer).setUint32(0, BB, !0), IB
        }(BB)), (0, Zo.b)(this, fo)[fo]()
      }
      saveEdited(BB) {
        return (0, Zo.b)(this, ro)[ro]("saveEdited"), (0, Zo.b)(this, Po)[Po].start(BB)
      }
      afterFrame() {
        if (!(0, Zo.b)(this, yo)[yo]) return;
        "read" === (0, Zo.b)(this, Po)[Po].beforeRecorderStep() && (0, Zo.b)(this, fo)[fo]();
        const BB = (0, Zo.b)(this, Qo)[Qo];
        (0, Zo.b)(this, Qo)[Qo] = null;
        const IB = (0, Zo.b)(this, yo)[yo],
          ZB = (0, Zo.b)(this, Uo)[Uo];
        if (!IB || !ZB) return void(null === BB || void 0 === BB || BB.resolve((0, Zo.b)(this, Wo)[Wo] ? "trapped" : "XF"));
        const {
          core: TB
        } = this.deps, JB = TB.voB(2);
        let oB, GB, vB, kB, cB = 0,
          nB = 0;
        if (0 !== JB) {
          var hB, zB;
          const BB = (0, Zo.b)(this, BG)[BG]();
          cB = null !== (hB = BB[JB >>> 2]) && void 0 !== hB ? hB : 0, nB = null !== (zB = BB[1 + (JB >>> 2)]) && void 0 !== zB ? zB : 0
        }
        try {
          if (nB > 0) {
            const BB = IB.feed(nB);
            0 !== BB && (0, Zo.b)(this, IG)[IG](ZB).set((0, Zo.b)(this, So)[So]().subarray(cB, cB + nB), BB)
          }
          oB = IB.step(), GB = IB.koB(), vB = IB.coB(), kB = IB.noB()
        } catch (FB) {
          if (!(0, Zo.b)(this, oG)[oG](FB)) throw null === BB || void 0 === BB || BB.resolve("XF"), FB;
          return void(null === BB || void 0 === BB || BB.resolve("trapped"))
        }
        if (oB > 0) {
          const BB = TB.hoB(2, oB);
          0 !== BB && (0, Zo.b)(this, So)[So]().set((0, Zo.b)(this, IG)[IG](ZB).subarray(GB, GB + oB), BB)
        }
        if (vB > 0) {
          (0, Zo.b)(this, ao)[ao] = [];
          try {
            this.deps.events(new Uint8Array(ZB.buffer, kB, vB), ZB)
          } catch (FB) {
            throw null === BB || void 0 === BB || BB.resolve("XF"), FB
          } finally {
            const BB = (0, Zo.b)(this, ao)[ao];
            (0, Zo.b)(this, ao)[ao] = null;
            for (const [IB, ZB] of BB)(0, Zo.b)(this, Do)[Do](IB, ZB)
          }
        }
        if (!(0, Zo.b)(this, mo)[mo]() && !(0, Zo.b)(this, Xo)[Xo]()) return (0, Zo.b)(this, Ko)[Ko](), void(null === BB || void 0 === BB || BB.resolve("XF"));
        null === BB || void 0 === BB || BB.resolve((0, Zo.b)(this, Eo)[Eo]())
      }
      dispose() {
        (0, Zo.b)(this, Co)[Co] = !0, (0, Zo.b)(this, Ko)[Ko]()
      }
    }

    function vG(BB) {
      (0, Zo.b)(this, Do)[Do](zB.Wc.Session, function(BB) {
        const IB = new TextEncoder,
          ZB = IB.encode(BB.game).subarray(0, 65535),
          TB = IB.encode(BB.lobby).subarray(0, 65535),
          JB = new Uint8Array(22 + ZB.length + 2 + TB.length),
          oB = new DataView(JB.buffer);
        oB.setFloat64(0, BB.unixMs, !0), oB.setBigUint64(8, BigInt.asUintN(64, BB.session), !0), oB.setUint8(16, BB.lobbyType);
        let GB = 20;
        for (const vB of [ZB, TB]) oB.setUint16(GB, vB.length, !0), JB.set(vB, GB + 2), GB += 2 + vB.length;
        return JB
      }({
        ...BB,
        unixMs: this.deps.unixNow()
      }))
    }

    function kG(BB) {
      false
    }

    function cG() {
      var BB, IB;
      return null !== (BB = null === (IB = (0, Zo.b)(this, Yo)[Yo]) || void 0 === IB ? void 0 : IB.on) && void 0 !== BB && BB
    }

    function nG() {
      const BB = (0, Zo.b)(this, yo)[yo];
      let IB = !0;
      if (BB) try {
        IB = BB.busy()
      } catch (ZB) {
        if (!(0, Zo.b)(this, oG)[oG](ZB)) throw ZB
      }
      return IB || (0, Zo.b)(this, Po)[Po].active
    }
    async function hG() {
      !(0, Zo.b)(this, Co)[Co] && this.deps.allowed() ? await (0, Zo.b)(this, eo)[eo]() : (0, Zo.b)(this, po)[po] = null
    }

    function zG() {
      return (0, Zo.b)(this, Wo)[Wo] || (0, Zo.b)(this, Co)[Co] ? Promise.resolve(!1) : (0, Zo.b)(this, yo)[yo] ? Promise.resolve(!0) : ((0, Zo.b)(this, so)[so] ??= (0, Zo.b)(this, uo)[uo](), (0, Zo.b)(this, so)[so])
    }
    async function FG() {
      let BB = !1;
      try {
        return BB = await (0, Zo.b)(this, to)[to](), BB
      } finally {
        BB || ((0, Zo.b)(this, po)[po] = null), (0, Zo.b)(this, so)[so] = null
      }
    }

    function NG() {
      if (!(0, Zo.b)(this, yo)[yo]) return Promise.resolve((0, Zo.b)(this, Wo)[Wo] ? "trapped" : "XF");
      if (!(0, Zo.b)(this, Qo)[Qo]) {
        let BB = () => {};
        const IB = new Promise((IB => {
          BB = IB
        }));
        (0, Zo.b)(this, Qo)[Qo] = {
          promise: IB,
          resolve: BB
        }
      }
      return (0, Zo.b)(this, Qo)[Qo].promise
    }

    function gG(BB) {
      const IB = (0, Zo.b)(this, Qo)[Qo];
      (0, Zo.b)(this, Qo)[Qo] = null, null === IB || void 0 === IB || IB.resolve(BB)
    }
    async function qG() {
      let BB = (0, Zo.b)(this, qo)[qo];
      if (!BB) {
        const IB = (0, Zo.b)(this, wo)[wo];
        try {
          BB = await this.deps.load()
        } catch (ZB) {
          return IB === (0, Zo.b)(this, wo)[wo] && await (0, Zo.b)(this, ZG)[ZG](ZB), !1
        }
        if (IB !== (0, Zo.b)(this, wo)[wo]) return this.deps.unload(), !1;
        const TB = BB,
          JB = (0, Zo.b)(this, JG)[JG]((() => TB.zoB()));
        if (void 0 === JB) return !1;
        const oB = this.deps.core.FoB();
        if (JB !== oB) return await (0, Zo.b)(this, ZG)[ZG](new Error(`recorder port version ${JB}, the core's ${oB}`)), !1;
        (0, Zo.b)(this, qo)[qo] = BB
      }
      const IB = BB;
      try {
        if (!(0, Zo.b)(this, JG)[JG]((() => ((0, Zo.b)(this, yo)[yo] = new IB.NoB, (0, Zo.b)(this, Uo)[Uo] = IB.ooB(), !0)))) return !1;
        (0, Zo.b)(this, xo)[xo]();
        const BB = (0, Zo.b)(this, po)[po];
        return (0, Zo.b)(this, po)[po] = null, BB && (0, Zo.b)(this, Do)[Do](zB.Wc.Control, BB), (0, Zo.b)(this, bo)[bo]()
      } catch (ZB) {
        return (0, Zo.b)(this, Ko)[Ko](), await (0, Zo.b)(this, ZG)[ZG](ZB), !1
      }
    }

    function yG() {
      return this.deps.core.goB(0), 1 === this.deps.core.goB(1) || ((0, Zo.b)(this, Ko)[Ko](), this.deps.failed(No), !1)
    }

    function UG() {
      (0, Zo.b)(this, Yo)[Yo] && (0, Zo.b)(this, Do)[Do](zB.Wc.Prefs, no((0, Zo.b)(this, Yo)[Yo].on, (0, Zo.b)(this, Yo)[Yo].seconds)), (0, Zo.b)(this, io)[io] && (0, Zo.b)(this, Ro)[Ro]((0, Zo.b)(this, io)[io])
    }

    function WG() {
      return Fo({
        memoryBytes: this.deps.memoryBytes,
        clipSeconds: () => {
          var BB, IB;
          return null !== (BB = null === (IB = (0, Zo.b)(this, Yo)[Yo]) || void 0 === IB ? void 0 : IB.seconds) && void 0 !== BB ? BB : 0
        },
        trapped: () => (0, Zo.b)(this, Wo)[Wo],
        busy: () => (0, Zo.b)(this, Xo)[Xo](),
        loadInFlight: () => (0, Zo.b)(this, so)[so],
        WN: () => (0, Zo.b)(this, Co)[Co],
        unload: () => {
          (0, Zo.b)(this, Ko)[Ko]()
        },
        load: () => (0, Zo.b)(this, eo)[eo]()
      })
    }

    function dG(BB, IB) {
      (0, Zo.b)(this, ao)[ao] ? (0, Zo.b)(this, ao)[ao].push([BB, IB]): (0, Zo.b)(this, TG)[TG](((ZB, TB) => {
        const JB = ZB.GoB(IB.length);
        0 !== JB && (new Uint8Array(TB.buffer, JB, IB.length).set(IB), ZB.command(BB, IB.length))
      }))
    }

    function CG() {
      (0, Zo.b)(this, wo)[wo]++, (0, Zo.b)(this, Ao)[Ao]("XF"), (0, Zo.b)(this, Po)[Po].stop(), this.deps.core.goB(0), (0, Zo.b)(this, Vo)[Vo](), (0, Zo.b)(this, Wo)[Wo] || ((0, Zo.b)(this, qo)[qo] = null, this.deps.unload())
    }

    function QG() {
      (0, Zo.b)(this, TG)[TG]((BB => {
        BB.free()
      })), (0, Zo.b)(this, yo)[yo] = null, (0, Zo.b)(this, Uo)[Uo] = null, (0, Zo.b)(this, jo)[jo] = null
    }

    function sG() {
      var BB;
      const IB = this.deps.coreBuffer();
      return (null === (BB = (0, Zo.b)(this, Ho)[Ho]) || void 0 === BB ? void 0 : BB.buffer) !== IB && ((0, Zo.b)(this, Ho)[Ho] = new Uint8Array(IB)), (0, Zo.b)(this, Ho)[Ho]
    }

    function wG() {
      var BB;
      const IB = this.deps.coreBuffer();
      return (null === (BB = (0, Zo.b)(this, Mo)[Mo]) || void 0 === BB ? void 0 : BB.buffer) !== IB && ((0, Zo.b)(this, Mo)[Mo] = new Uint32Array(IB, 0, IB.byteLength >>> 2)), (0, Zo.b)(this, Mo)[Mo]
    }

    function OG(BB) {
      var IB;
      const ZB = BB.buffer;
      return (null === (IB = (0, Zo.b)(this, jo)[jo]) || void 0 === IB ? void 0 : IB.buffer) !== ZB && ((0, Zo.b)(this, jo)[jo] = new Uint8Array(ZB)), (0, Zo.b)(this, jo)[jo]
    }
    async function YG(BB) {
      await this.deps.staleOr(BB, (() => {
        this.deps.failed(No)
      }))
    }

    function iG(BB) {
      const IB = (0, Zo.b)(this, yo)[yo],
        ZB = (0, Zo.b)(this, Uo)[Uo];
      if (IB && ZB) return (0, Zo.b)(this, JG)[JG]((() => BB(IB, ZB)))
    }

    function pG(BB) {
      if (!(0, Zo.b)(this, Wo)[Wo]) try {
        return BB()
      } catch (IB) {
        if (!(0, Zo.b)(this, oG)[oG](IB)) throw IB;
        return
      }
    }

    function aG(BB) {
      return BB instanceof WebAssembly.RuntimeError && ((0, Zo.b)(this, Wo)[Wo] = !0, (0, Zo.b)(this, yo)[yo] = null, (0, Zo.b)(this, Uo)[Uo] = null, (0, Zo.b)(this, jo)[jo] = null, (0, Zo.b)(this, qo)[qo] = null, (0, Zo.b)(this, po)[po] = null, (0, Zo.b)(this, Ao)[Ao]("trapped"), this.deps.core.goB(0), (0, Zo.b)(this, Po)[Po].stop(), this.deps.crash(this.deps.markTrapped(BB)), this.deps.failed("Replay recording stopped working, so reload the page to record replays again."), !0)
    }
    var HG = ZB(38685);
    const MG = new Map([
      ["skyblock", () => ZB.e(52).then((() => ZB(38681)))]
    ]);

    function jG(BB) {
      const IB = MG.get(BB);
      return IB ? IB().then((() => {
        const IB = (0, HG.d)(BB);
        if (!IB) throw new Error(`${BB}'s replay hook module registered no hook`);
        return IB
      })) : null
    }
    class PG {
      constructor(BB) {
        this.deps = BB, this.game = null, this.hook = null, this.generation = 0, this.all = !1, this.pending = new Map, this.ids = new Int32Array(64)
      }
      get wantsWatch() {
        return null !== this.hook
      }
      opened(BB) {
        if (this.pending.clear(), BB === this.game && null !== this.hook) return void(this.all = !0);
        const IB = ++this.generation;
        this.game = BB, this.hook = null, this.all = !1;
        const ZB = this.deps.loadHook(BB);
        null === ZB || void 0 === ZB || ZB.then((BB => {
          IB === this.generation && (this.hook = BB, this.all = !0)
        }), (BB => {
          IB === this.generation && this.deps.onError(BB)
        }))
      }
      ended() {
        this.generation++, this.game = null, this.hook = null, this.all = !1, this.pending.clear()
      }
      entityAdded(BB) {
        null === this.hook || this.all || this.pending.set(BB, !0)
      }
      entityInfoChanged(BB) {
        null === this.hook || this.all || this.pending.has(BB) || this.pending.set(BB, !1)
      }
      flush(BB) {
        const {
          hook: IB
        } = this;
        if (null === IB || !BB || !this.all && 0 === this.pending.size) return;
        const ZB = this.deps.cmd();
        if (null === ZB) return;
        const {
          api: TB
        } = this.deps;
        if (this.all) {
          this.all = !1, this.pending.clear();
          const {
            ids: BB,
            count: IB
          } = XZ(TB, this.ids);
          this.ids = BB;
          for (let ZB = 0; ZB < IB; ZB++) this.pending.set(BB[ZB], !0)
        }
        const JB = this.ids = LZ(this.ids, this.pending.size);
        let oB = 0;
        for (const cB of this.pending.keys()) JB[oB++] = cB;
        const GB = [],
          vB = eZ(TB, JB, oB, ((BB, IB) => {
            null !== IB && GB.push({
              serverId: BB,
              info: IB,
              spawned: !0 === this.pending.get(BB)
            })
          }));
        if (vB) {
          this.pending.clear();
          for (const {
              serverId: BB,
              info: TB,
              spawned: JB
            }
            of GB) try {
            IB(TB, {
              setFacingTolerance: IB => {
                null === IB && JB || vZ(ZB, BB, IB) || this.pending.set(BB, JB)
              }
            })
          } catch (kB) {
            this.deps.onError(kB)
          }
        }
      }
    }
    var RG = (0, To.d)("bindings"),
      rG = (0, To.d)("module"),
      mG = (0, To.d)("memory"),
      XG = (0, To.d)("trapped"),
      LG = (0, To.d)("generation"),
      eG = (0, To.d)("loading"),
      uG = (0, To.d)("lend"),
      fG = (0, To.d)("givenUp"),
      lG = (0, To.d)("afterSave"),
      AG = (0, To.d)("opens"),
      tG = (0, To.d)("saveAskedAt"),
      bG = (0, To.d)("unload"),
      xG = (0, To.d)("dropModule"),
      EG = (0, To.d)("loadFailed"),
      DG = (0, To.d)("saveReadsBody"),
      KG = (0, To.d)("command"),
      VG = (0, To.d)("call"),
      SG = (0, To.d)("guard"),
      Bv = (0, To.d)("trapOn");
    class Iv {
      constructor(BB) {
        this.deps = BB, Object.defineProperty(this, Bv, {
          value: cv
        }), Object.defineProperty(this, SG, {
          value: kv
        }), Object.defineProperty(this, VG, {
          value: vv
        }), Object.defineProperty(this, KG, {
          value: Gv
        }), Object.defineProperty(this, DG, {
          get: ov,
          set: void 0
        }), Object.defineProperty(this, EG, {
          value: Jv
        }), Object.defineProperty(this, xG, {
          value: Tv
        }), Object.defineProperty(this, bG, {
          value: Zv
        }), Object.defineProperty(this, RG, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, rG, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, mG, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, XG, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, LG, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, eG, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, uG, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, fG, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, lG, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, AG, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, tG, {
          writable: !0,
          value: null
        })
      }
      get active() {
        return null !== (0, Zo.b)(this, rG)[rG] && null === (0, Zo.b)(this, lG)[lG]
      }
      async open(BB, IB) {
        if ((0, Zo.b)(this, XG)[XG]) return zB.jd.ModuleTrap;
        let ZB = (0, Zo.b)(this, RG)[RG];
        if (!ZB) {
          const BB = (0, Zo.b)(this, LG)[LG];
          (0, Zo.b)(this, eG)[eG]++;
          try {
            ZB = await this.deps.load()
          } catch (JB) {
            return (0, Zo.b)(this, eG)[eG]--, BB !== (0, Zo.b)(this, LG)[LG] ? "stopped" : (0, Zo.b)(this, EG)[EG](JB, IB)
          }
          if ((0, Zo.b)(this, eG)[eG]--, BB !== (0, Zo.b)(this, LG)[LG]) return (0, Zo.b)(this, RG)[RG] || 0 !== (0, Zo.b)(this, eG)[eG] || (0, Zo.b)(this, XG)[XG] || this.deps.unload(), "stopped";
          if ((0, Zo.b)(this, XG)[XG]) return zB.jd.ModuleTrap;
          const TB = ZB.zoB(),
            oB = this.deps.core.FoB();
          if (TB !== oB) return (0, Zo.b)(this, EG)[EG](new Error(`replay port version ${TB}, the core's ${oB}`), IB);
          (0, Zo.b)(this, RG)[RG] = ZB
        }
        if (!(0, Zo.b)(this, rG)[rG]) {
          const BB = ZB;
          if (!(0, Zo.b)(this, SG)[SG]((() => {
              (0, Zo.b)(this, rG)[rG] = new BB.qoB, (0, Zo.b)(this, mG)[mG] = BB.yoB()
            }))) return zB.jd.ModuleTrap
        }
        let TB = !1;
        return (0, Zo.b)(this, VG)[VG](((IB, ZB) => {
          null !== (0, Zo.b)(this, lG)[lG] && IB.step(0, 0);
          const JB = IB.stage(BB.length);
          0 !== JB && (new Uint8Array(ZB.buffer, JB, BB.length).set(BB), IB.open(), (0, Zo.b)(this, fG)[fG] = (0, Zo.b)(this, uG)[uG], (0, Zo.b)(this, lG)[lG] = null, (0, Zo.b)(this, AG)[AG]++, TB = !0)
        })) ? TB ? "opening" : zB.jd.TooLarge : zB.jd.ModuleTrap
      }
      beforeFrame(BB) {
        const IB = (0, Zo.b)(this, rG)[rG],
          ZB = (0, Zo.b)(this, mG)[mG];
        if (!IB || !ZB || null !== (0, Zo.b)(this, lG)[lG]) return;
        const {
          core: TB
        } = this.deps, JB = TB.UoB(BB);
        if (JB < 0) return;
        const oB = Math.floor(JB);
        let GB, vB;
        try {
          GB = IB.step(oB, JB - oB), vB = IB.koB()
        } catch (cB) {
          return void(0, Zo.b)(this, Bv)[Bv](cB)
        }
        const kB = TB.hoB(1, GB);
        if (0 === kB) {
          const BB = (0, Zo.b)(this, VG)[VG]((BB => {
            BB.close()
          }));
          if (!BB) return;
          return (0, Zo.b)(this, DG)[DG] ? (0, Zo.b)(this, lG)[lG] = "drop" : (0, Zo.b)(this, xG)[xG](), void TB.WoB(zB.jd.Port)
        }
        new Uint8Array(this.deps.coreBuffer(), kB, GB).set(new Uint8Array(ZB.buffer, vB, GB))
      }
      play() {
        (0, Zo.b)(this, KG)[KG]((BB => {
          BB.play()
        }))
      }
      pause() {
        (0, Zo.b)(this, KG)[KG]((BB => {
          BB.pause()
        }))
      }
      seek(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (0, Zo.b)(this, KG)[KG]((ZB => {
          ZB.seek(BB, IB)
        }))
      }
      setMark(BB, IB) {
        return (0, Zo.b)(this, KG)[KG]((ZB => {
          ZB.doB(BB, IB)
        }))
      }
      addKeyframe(BB, IB) {
        return (0, Zo.b)(this, KG)[KG]((ZB => {
          ZB.CoB(BB[0], BB[1], BB[2], IB[0], IB[1], IB[2])
        }))
      }
      setKeyframe(BB, IB) {
        return (0, Zo.b)(this, KG)[KG]((ZB => {
          ZB.QoB(BB, IB)
        }))
      }
      moveKeyframe(BB, IB) {
        return (0, Zo.b)(this, KG)[KG]((ZB => {
          ZB.soB(BB, IB)
        }))
      }
      deleteKeyframes(BB, IB) {
        return (0, Zo.b)(this, KG)[KG]((ZB => {
          ZB.woB(BB, IB)
        }))
      }
      crop(BB, IB) {
        return null === (0, Zo.b)(this, uG)[uG] && (0, Zo.b)(this, KG)[KG]((ZB => {
          ZB.crop(BB, IB)
        }))
      }
      beginSave() {
        const BB = (0, Zo.b)(this, tG)[tG];
        if ((0, Zo.b)(this, tG)[tG] = null, null !== BB && BB !== (0, Zo.b)(this, AG)[AG]) return null;
        let IB = 0,
          ZB = null;
        if ((0, Zo.b)(this, VG)[VG](((BB, TB) => {
            IB = BB.save(), 0 !== IB && (ZB = new Uint8Array(TB.buffer, BB.OoB(), BB.YoB()).slice())
          })), 0 === IB || !ZB) return null;
        const TB = {
          headLen: IB,
          editState: ZB,
          givenUp: () => (0, Zo.b)(this, fG)[fG] === TB,
          head: (BB, IB) => {
            if ((0, Zo.b)(this, uG)[uG] !== TB || !(0, Zo.b)(this, DG)[DG]) return null;
            let ZB = null;
            return (0, Zo.b)(this, VG)[VG](((TB, JB) => {
              const oB = TB.ioB();
              0 !== oB && BB >= 0 && IB >= 0 && BB + IB <= oB && (ZB = new Uint8Array(JB.buffer, TB.poB() + BB, IB))
            })), ZB
          },
          end: () => {
            if ((0, Zo.b)(this, uG)[uG] !== TB) return;
            (0, Zo.b)(this, uG)[uG] = null, (0, Zo.b)(this, fG)[fG] = null, (0, Zo.b)(this, VG)[VG]((BB => {
              BB.aoB()
            }));
            const BB = (0, Zo.b)(this, lG)[lG];
            (0, Zo.b)(this, lG)[lG] = null, "unload" === BB ? (0, Zo.b)(this, bG)[bG]() : "drop" === BB && (0, Zo.b)(this, xG)[xG]()
          }
        };
        return (0, Zo.b)(this, uG)[uG] = TB, TB
      }
      askSave() {
        (0, Zo.b)(this, tG)[tG] = (0, Zo.b)(this, AG)[AG]
      }
      setSpeed(BB) {
        (0, Zo.b)(this, KG)[KG]((IB => {
          IB.HoB(BB)
        }))
      }
      setCameraMode(BB) {
        (0, Zo.b)(this, KG)[KG]((IB => {
          IB.MoB(BB)
        }))
      }
      close() {
        (0, Zo.b)(this, KG)[KG]((BB => {
          BB.close()
        }))
      }
      stop() {
        (0, Zo.b)(this, LG)[LG]++, (0, Zo.b)(this, DG)[DG] && ((0, Zo.b)(this, VG)[VG]((BB => {
          BB.close()
        })), (0, Zo.b)(this, rG)[rG]) ? (0, Zo.b)(this, lG)[lG] = "unload" : (0, Zo.b)(this, bG)[bG]()
      }
    }

    function Zv() {
      (0, Zo.b)(this, xG)[xG](), (0, Zo.b)(this, XG)[XG] || ((0, Zo.b)(this, RG)[RG] = null, this.deps.unload())
    }

    function Tv() {
      (0, Zo.b)(this, VG)[VG]((BB => {
        BB.free()
      })), (0, Zo.b)(this, rG)[rG] = null, (0, Zo.b)(this, mG)[mG] = null
    }
    async function Jv(BB, IB) {
      return await this.deps.staleOr(BB, (() => {}), {
        beforeReload: IB
      }) ? "reloading" : zB.jd.ModuleLoad
    }

    function ov() {
      return null !== (0, Zo.b)(this, uG)[uG] && (0, Zo.b)(this, fG)[fG] !== (0, Zo.b)(this, uG)[uG]
    }

    function Gv(BB) {
      return null === (0, Zo.b)(this, lG)[lG] && (0, Zo.b)(this, VG)[VG](BB)
    }

    function vv(BB) {
      const IB = (0, Zo.b)(this, rG)[rG],
        ZB = (0, Zo.b)(this, mG)[mG];
      return !(!IB || !ZB) && (0, Zo.b)(this, SG)[SG]((() => {
        BB(IB, ZB)
      }))
    }

    function kv(BB) {
      if ((0, Zo.b)(this, XG)[XG]) return !1;
      try {
        return BB(), !0
      } catch (IB) {
        return (0, Zo.b)(this, Bv)[Bv](IB), !1
      }
    }

    function cv(BB) {
      if (!(BB instanceof WebAssembly.RuntimeError)) throw BB;
      (0, Zo.b)(this, XG)[XG] = !0, (0, Zo.b)(this, rG)[rG] = null, (0, Zo.b)(this, mG)[mG] = null, (0, Zo.b)(this, RG)[RG] = null, this.deps.crash(this.deps.markTrapped(BB)), this.deps.core.WoB(zB.jd.ModuleTrap)
    }
    var nv = ZB(6643),
      hv = ZB(41049);
    const zv = "[bloxd-wasm-client]";
    const Fv = String(HJ);

    function Nv(BB) {
      return null === BB || BB === Fv ? void 0 : BB
    }

    function gv(BB) {
      var IB, ZB, TB, JB, oB, vB, kB;
      switch (BB.what) {
        case zB.rd.FlyingText: {
          let IB;
          try {
            IB = JSON.parse(BB.contentJson)
          } catch (cB) {
            return void console.warn(`${zv} a replay's flying text isn't JSON`, cB)
          }
          GB.l.Gq("forceFlyingMiddleMessage", {
            content: IB,
            Po: BB.Po,
            angle: BB.angle,
            Ro: BB.Ro
          });
          break
        }
        case zB.rd.PlayerKilled:
          (0, hv.c)({
            kind: "killed",
            body: {
              deadEId: null !== (IB = Nv(BB.dead)) && void 0 !== IB ? IB : "",
              killerEId: Nv(BB.killer),
              withItem: null !== (ZB = BB.withItem) && void 0 !== ZB ? ZB : "",
              killstreak: BB.killstreak
            }
          });
          break;
        case zB.rd.Killfeed:
          (0, hv.c)({
            kind: "custom",
            body: {
              killer: {
                eId: Nv(BB.killerId),
                name: null !== (TB = BB.killerName) && void 0 !== TB ? TB : void 0,
                colour: null !== (JB = BB.killerColour) && void 0 !== JB ? JB : void 0
              },
              victim: {
                eId: Nv(BB.victimId),
                name: null !== (oB = BB.victimName) && void 0 !== oB ? oB : void 0,
                colour: null !== (vB = BB.victimColour) && void 0 !== vB ? vB : void 0
              },
              withItem: null !== (kB = BB.withItem) && void 0 !== kB ? kB : ""
            }
          })
      }
    }
    const qv = "[bloxd-wasm-client]";

    function yv(BB) {
      if (void 0 === BB || null === BB || "" === BB) return null;
      const IB = Number(BB);
      return Number.isInteger(IB) && IB > HJ && IB <= 2147483647 ? IB : null
    }

    function Uv(BB) {
      return {
        id: yv(BB.eId),
        name: "string" === typeof BB.name ? BB.name : null,
        colour: "string" === typeof BB.colour ? BB.colour : null
      }
    }

    function Wv(BB) {
      const IB = (0, uJ.l)(bZ.nc.PlayerKilled, (IB => {
          var ZB, TB;
          const JB = (0, eJ.f)(IB);
          if (!(0, eJ.d)(JB)) return;
          const {
            deadEId: oB,
            killerEId: GB,
            withItem: vB,
            killstreak: kB
          } = JB;
          BB.recordPlayerKilled(null !== (ZB = yv(oB)) && void 0 !== ZB ? ZB : HJ, null !== (TB = yv(GB)) && void 0 !== TB ? TB : HJ, "number" === typeof kB ? kB : 0, "string" === typeof vB ? vB : "")
        })),
        ZB = (0, uJ.l)(bZ.nc.CustomKillfeed, (IB => {
          const ZB = (0, eJ.f)(IB);
          if (!(0, eJ.d)(ZB) || !(0, eJ.d)(ZB.killer) || !(0, eJ.d)(ZB.victim)) return;
          const {
            killer: TB,
            victim: JB,
            withItem: oB
          } = ZB;
          BB.recordKillfeed(Uv(TB), Uv(JB), "string" === typeof oB ? oB : null)
        }));
      return () => {
        IB(), ZB()
      }
    }

    function dv(BB) {
      var IB;
      return void 0 === BB || null === BB ? null : null !== (IB = JSON.stringify(BB)) && void 0 !== IB ? IB : null
    }

    function Cv(BB) {
      let IB = null;
      const ZB = () => {
        const {
          enableClipping: ZB,
          clipDurationSeconds: JB
        } = TB.d.get("clientEscMenuOptions"), oB = `${ZB}:${JB}`;
        oB !== IB && (IB = oB, BB.recorder.setPrefs(ZB, JB))
      };
      return ZB(), (0, GB.p)("appManagerUpdated|clientEscMenuOptions", ZB)
    }
    const Qv = "replayModule",
      sv = "recorderModule";

    function wv(BB, IB, ZB) {
      return function() {
        return BB.isStopped ? ZB : IB(...arguments)
      }
    }
    const Ov = {
      open: () => Promise.reject(new Error(CJ.b.coreStopped.text)),
      replayKey: () => null,
      encode: () => Promise.resolve(null),
      fileHandle: () => null,
      markSaved: () => {}
    };

    function Yv() {
      return ZB.e(65).then((() => ZB(61495)))
    }

    function iv(BB) {
      (0, CJ.d)({
        text: BB,
        type: "Error"
      })
    }
    class pv {
      constructor(BB) {
        this.deps = BB, this.runtime = void 0, this.entityHooks = void 0, this.recordedOptions = void 0, this.stops = void 0, this.activeConn = 0, this.stopped = !1, this.bench = null, this.replay = void 0, this.recorder = void 0, this.freecam = void 0, this.drawn = !1;
        const {
          running: IB,
          api: TB,
          core: JB
        } = BB, oB = () => BB.memory().buffer, GB = () => IB.isStopped ? null : IB.rings.cmd, vB = wv(IB, ((BB, IB) => JB.hoB(BB, IB)), 0), kB = () => JB.FoB();
        let cB = null;
        this.replay = new Iv({
          core: {
            UoB: wv(IB, (BB => JB.UoB(BB)), -1),
            hoB: vB,
            FoB: kB,
            WoB: wv(IB, (BB => {
              JB.WoB(BB)
            }), void 0)
          },
          coreBuffer: oB,
          load: async () => (cB = await ZB.e(66).then((() => ZB(61507))), cB.loadReplayModule()),
          unload: () => {
            var BB;
            null === (BB = cB) || void 0 === BB || BB.unloadReplayModule()
          },
          markTrapped: BB => cB ? cB.markReplayTrapped(BB) : new Error(String(BB)),
          staleOr: (IB, ZB, TB) => BB.staleOr(Qv, IB, ZB, TB),
          crash: IB => {
            BB.reportFault(Qv, IB)
          }
        });
        let nB = null;
        this.recorder = new GG({
          core: {
            goB: wv(IB, (BB => JB.goB(BB)), 0),
            voB: wv(IB, (BB => JB.voB(BB)), 0),
            hoB: vB,
            FoB: kB
          },
          coreCommand: (BB, IB) => {
            var ZB, TB;
            return null !== (ZB = null === (TB = GB()) || void 0 === TB ? void 0 : TB.writeCmd(BB, 0, IB)) && void 0 !== ZB && ZB
          },
          coreBuffer: oB,
          load: async () => (nB = await Yv(), nB.loadRecorderModule()),
          prefetch: () => {
            Yv().then((BB => BB.prefetchRecorderModule())).catch((BB => {
              console.warn(`${qv} the recorder module didn't prefetch, so a save loads it:`, BB)
            }))
          },
          unload: () => {
            var BB;
            null === (BB = nB) || void 0 === BB || BB.unloadRecorderModule()
          },
          markTrapped: BB => nB ? nB.markRecorderTrapped(BB) : new Error(String(BB)),
          memoryBytes: () => {
            var BB, IB;
            return null !== (BB = null === (IB = nB) || void 0 === IB ? void 0 : IB.recorderMemoryBytes()) && void 0 !== BB ? BB : 0
          },
          staleOr: (IB, ZB) => BB.staleOr(sv, IB, ZB),
          crash: IB => {
            BB.reportFault(sv, IB)
          },
          allowed: () => !0 === BB.options.get("canRecordReplays"),
          failed: iv,
          events: (BB, IB) => {
            this.runtime.recorderEvents(BB, IB)
          },
          beginSave: () => this.replay.beginSave(),
          givenUp: iv,
          unixNow: () => Date.now()
        });
        const hB = new aJ({
          core: {
            VJB: wv(IB, (BB => JB.VJB(BB)), 0),
            BoB: wv(IB, (() => {
              JB.BoB()
            }), void 0),
            Rq: wv(IB, (() => JB.Rq()), 0),
            SJB: wv(IB, (() => JB.SJB()), 0)
          },
          buffer: oB,
          apiView: () => TB.apiView,
          cmd: GB,
          replay: this.replay,
          recorder: this.recorder
        });
        this.entityHooks = new PG({
          api: TB,
          cmd: GB,
          loadHook: jG,
          onError: BB => {
            console.warn(`${qv} the recorded game's replay hooks:`, BB)
          }
        });
        const zB = new LJ({
          client: hB,
          buffer: oB,
          setHoldDraws: BB => {
            IB.setHoldDraws(BB)
          },
          notify: CJ.d,
          onRecorderState: () => {
            var BB;
            null === (BB = (0, sJ.f)()) || void 0 === BB || BB.recorderChanged()
          },
          onViewerChange: () => {
            var BB;
            null === (BB = (0, sJ.f)()) || void 0 === BB || BB.viewerChanged()
          },
          onReplayOption: IB => {
            ! function(BB, IB) {
              var ZB, TB;
              const JB = bZ.pb[IB.key];
              if (void 0 === JB) return;
              let oB = null !== (ZB = IB.value) && void 0 !== ZB ? ZB : JSON.parse(JSON.stringify(null !== (TB = nv.b[JB]) && void 0 !== TB ? TB : null));
              if (null !== IB.value && IB.key < bZ.Vb.Environment && "string" === typeof oB) try {
                oB = JSON.parse(oB)
              } catch (GB) {
                return void console.warn(`${zv} a replay's ${JB} isn't JSON`, GB)
              }
              BB.applyNewClientOptions({
                [JB]: oB
              })
            }(BB.options, IB)
          },
          onReplayUiEvent: gv,
          onReplayOpened: IB => {
            this.entityHooks.opened((0, YB.Vb)(IB)), BB.replayShaderPack(IB)
          },
          meshPending: () => {
            var BB, ZB;
            return null !== (BB = null === (ZB = IB.lastHeader) || void 0 === ZB ? void 0 : ZB.renderPending) && void 0 !== BB ? BB : 0
          },
          viewerOpen: QJ.d,
          download: BB => {
            (0, WJ.j)(BB)
          }
        });
        this.runtime = zB, TB.replay = zB.sink, (0, sJ.p)(zB);
        const FB = new AJ({
          live: () => {
            var BB;
            return !IB.isStopped && !0 === (null === (BB = zB.currentViewer) || void 0 === BB ? void 0 : BB.inPlayback)
          },
          cmd: GB,
          dragScale: Bo
        });
        this.freecam = FB, (0, sJ.o)(FB), this.recordedOptions = function(BB, IB) {
          const ZB = bZ.pb,
            TB = ZB.map(((ZB, TB) => IB.subscribe(ZB, (IB => {
              BB.setOption(TB, dv(IB))
            }))));
          return {
            sendAll() {
              ZB.forEach(((ZB, TB) => {
                BB.setOption(TB, dv(IB.get(ZB)))
              }))
            },
            stop() {
              for (const BB of TB) BB()
            }
          }
        }(zB.recorder, BB.options), this.stops = [(0, TT.j)((BB => {
          FB.flush();
          try {
            this.replay.beforeFrame(BB)
          } catch (IB) {
            this.deps.reportFault("replayFrame", IB)
          }
        })), (0, TT.y)(((BB, IB) => {
          try {
            this.recorder.afterFrame(), IB && !this.drawn && (this.drawn = !0, this.recorder.viewDrawn())
          } catch (ZB) {
            this.deps.reportFault("recorderFrame", ZB)
          }
          try {
            zB.afterFrame(BB)
          } catch (ZB) {
            this.deps.reportFault("replayRuntime", ZB)
          }
        })), Cv(zB), () => {
          this.recordedOptions.stop()
        }, Wv(zB.recorder), (0, fJ.e)((BB => {
          let {
            action: IB,
            down: ZB
          } = BB;
          var TB;
          ZB && (null === (TB = (0, sJ.f)()) || void 0 === TB || TB.keyDown(IB))
        }))];
        const NB = () => {
          const BB = zB.currentViewer;
          return !0 === (null === BB || void 0 === BB ? void 0 : BB.isOpen) ? BB : null
        };
        (0, dJ.g)({
          open: (BB, IB) => this.open(BB, IB),
          replayKey: () => {
            var BB, IB;
            return null !== (BB = null === (IB = NB()) || void 0 === IB ? void 0 : IB.id) && void 0 !== BB ? BB : null
          },
          saveRefusal: () => {
            var BB, IB;
            return null !== (BB = null === (IB = NB()) || void 0 === IB ? void 0 : IB.saveRefusal) && void 0 !== BB ? BB : null
          },
          encode: () => {
            var BB, IB;
            return null !== (BB = null === (IB = NB()) || void 0 === IB ? void 0 : IB.save()) && void 0 !== BB ? BB : Promise.resolve(null)
          },
          fileHandle: () => {
            var BB, IB;
            return null !== (BB = null === (IB = zB.currentViewer) || void 0 === IB ? void 0 : IB.fileHandle) && void 0 !== BB ? BB : null
          },
          markSaved: (BB, IB) => {
            var ZB;
            null === (ZB = zB.currentViewer) || void 0 === ZB || ZB.markSaved(BB, IB)
          }
        })
      }
      netEvent(BB) {
        if ("connection" === BB.type)
          if (BB.phase === zB.G.Activated) {
            this.activeConn = BB.conn;
            const IB = this.deps.sessionInfo(BB.conn);
            null !== IB && (this.runtime.activated({
              lobbyType: (0, iB.o)(IB.lobbyName),
              gameNameWithVariation: IB.gameNameWithVariation,
              lobbyName: IB.lobbyName
            }), this.recordedOptions.sendAll())
          } else BB.phase !== zB.G.Left && BB.phase !== zB.G.Closed || BB.conn !== this.activeConn || (this.activeConn = 0, this.runtime.recorder.closed())
      }
      stop() {
        if (!this.stopped) {
          this.stopped = !0;
          for (const BB of this.stops) BB();
          this.runtime.end(), this.entityHooks.ended(), this.replay.stop(), this.recorder.dispose(), (0, sJ.k)() === this.runtime && (0, sJ.p)(null), (0, sJ.h)() === this.freecam && (0, sJ.o)(null), (0, dJ.g)(Ov), null !== this.bench && window.wasmReplayBench === this.bench && (window.wasmReplayBench = void 0)
        }
      }
      async open(BB, IB) {
        const {
          running: ZB
        } = this.deps;
        if (ZB.isStopped) throw new Error(CJ.b.coreStopped.text);
        if (BB.byteLength > 67108864) throw new Error(CJ.b.cantOpen.text);
        let TB;
        try {
          TB = await async function(BB) {
            const IB = await BB.loadViewer();
            return IB.inPlayback || (0, TT.H)().leaveGame(null), IB
          }(this.runtime)
        } catch (JB) {
          throw console.warn(`${qv} the replay viewer didn't load`, JB), new Error(CJ.b.viewerLoadFailed.text)
        }
        if (ZB.isStopped) throw new Error(CJ.b.coreStopped.text);
        await TB.open(BB, IB)
      }
    }
    var av = ZB(2029);

    function Hv(BB, IB) {
      const {
        aux: ZB,
        payload: TB
      } = function(BB) {
        return {
          aux: BB.reset ? zB.dc.ResetFirst : 0,
          payload: jv(BB.changes)
        }
      }(IB);
      BB.queueOptions(ZB, TB) && (IB.reset && av.c.reset(), av.c.apply(IB.changes))
    }
    const Mv = new TextEncoder;

    function jv(BB) {
      const IB = new Pv;
      return rv(IB, BB), IB.bytes()
    }
    class Pv {
      constructor() {
        this.buf = new Uint8Array(256), this.view = new DataView(this.buf.buffer), this.len = 0
      }
      room(BB) {
        if (this.len + BB <= this.buf.length) return;
        const IB = new Uint8Array(Math.max(2 * this.buf.length, this.len + BB));
        IB.set(this.buf.subarray(0, this.len)), this.buf = IB, this.view = new DataView(IB.buffer)
      }
      u8(BB) {
        this.room(1), this.buf[this.len++] = BB
      }
      tagged(BB, IB, ZB) {
        this.room(1 + IB), this.buf[this.len++] = BB, 1 === IB ? this.view.setUint8(this.len, ZB) : 2 === IB ? this.view.setUint16(this.len, ZB) : this.view.setUint32(this.len, ZB), this.len += IB
      }
      signed(BB, IB, ZB) {
        this.room(1 + IB), this.buf[this.len++] = BB, 1 === IB ? this.view.setInt8(this.len, ZB) : 2 === IB ? this.view.setInt16(this.len, ZB) : this.view.setInt32(this.len, ZB), this.len += IB
      }
      f64(BB) {
        this.room(9), this.buf[this.len++] = 203, this.view.setFloat64(this.len, BB), this.len += 8
      }
      raw(BB) {
        this.room(BB.length), this.buf.set(BB, this.len), this.len += BB.length
      }
      bytes() {
        return this.buf.slice(0, this.len)
      }
    }

    function Rv(BB, IB, ZB, TB, JB, oB, GB) {
      IB < TB ? BB.u8(ZB | IB) : null !== JB && IB < 256 ? BB.tagged(JB, 1, IB) : IB < 65536 ? BB.tagged(oB, 2, IB) : BB.tagged(GB, 4, IB)
    }

    function rv(BB, IB) {
      switch (typeof IB) {
        case "undefined":
          return void BB.raw(mv);
        case "boolean":
          return void BB.u8(IB ? 195 : 194);
        case "number":
          return void
          function(BB, IB) {
            IB >>> 0 === IB ? IB < 128 ? BB.u8(IB) : IB < 256 ? BB.tagged(204, 1, IB) : IB < 65536 ? BB.tagged(205, 2, IB) : BB.tagged(206, 4, IB) : (IB | 0) === IB ? IB >= -32 ? BB.u8(255 & IB) : IB >= -128 ? BB.signed(208, 1, IB) : IB >= -32768 ? BB.signed(209, 2, IB) : BB.signed(210, 4, IB) : BB.f64(IB)
          }(BB, IB);
        case "string": {
          const ZB = Mv.encode(IB);
          return Rv(BB, ZB.length, 160, 32, 217, 218, 219), void BB.raw(ZB)
        }
        case "object":
          break;
        default:
          return void BB.u8(192)
      }
      if (null === IB) BB.u8(192);
      else if (Array.isArray(IB)) {
        Rv(BB, IB.length, 144, 16, null, 220, 221);
        for (const ZB of IB) rv(BB, ZB)
      } else if (IB instanceof Uint8Array) Rv(BB, IB.length, 0, 0, 196, 197, 198), BB.raw(IB);
      else {
        const ZB = Object.keys(IB);
        Rv(BB, ZB.length, 128, 0, null, 222, 223);
        for (const TB of ZB) rv(BB, TB), rv(BB, IB[TB])
      }
    }
    const mv = new Uint8Array([212, 0, 0]);
    var Xv = ZB(42585),
      Lv = ZB(42588),
      ev = ZB(40971),
      uv = ZB(41023),
      fv = ZB(3043);
    const lv = [1e3, 3e3, 9e3];
    class Av {
      constructor(BB) {
        this.host = BB, this.sets = new Map, this.table = [], this.generation = 0, this.WN = !1
      }
      onEvent(BB) {
        const IB = function(BB) {
          if (BB.byteLength !== zB.xd) return null;
          const IB = new DataView(BB.buffer, BB.byteOffset, BB.byteLength);
          return {
            want: IB.getUint16(0, !0),
            release: IB.getUint16(2, !0)
          }
        }(BB);
        IB && !this.WN && (IB.release !== zB.zd && this.release(IB.release), IB.want !== zB.zd && this.want(IB.want))
      }
      reset(BB) {
        if (!this.WN) {
          for (const [BB, IB] of this.sets) "ready" === IB.state && this.releaseAll(IB.distinct), this.sets.delete(BB);
          this.table = BB, this.generation++
        }
      }
      dispose() {
        if (this.WN) return;
        this.WN = !0, this.generation++, this.table = [];
        const BB = [...this.sets.values()];
        this.sets.clear();
        let IB = null;
        for (const TB of BB)
          for (const BB of "ready" === TB.state ? TB.distinct : []) try {
            this.host.dTB(BB)
          } catch (ZB) {
            IB ??= {
              error: ZB
            }
          }
        if (IB) throw IB.error
      }
      isReady(BB) {
        var IB;
        return "ready" === (null === (IB = this.sets.get(BB)) || void 0 === IB ? void 0 : IB.state)
      }
      want(BB) {
        const IB = this.sets.get(BB);
        if ("loading" === (null === IB || void 0 === IB ? void 0 : IB.state)) return IB.wanted = !0, void this.capAnswer(BB, IB);
        if ("ready" === (null === IB || void 0 === IB ? void 0 : IB.state)) return void this.host.sendReady(bv(BB, IB.images, IB.size));
        const ZB = this.table[BB];
        if (!ZB || 1 !== ZB.urls.length && ZB.urls.length !== bZ.gc.CubeFaces) return this.host.sendReady(xv(BB)), void this.host.onLoadFailed(BB, "", new Error(`no image set ${BB}`));
        const TB = {
          state: "loading",
          wanted: !0
        };
        this.sets.set(BB, TB), this.load(BB, ZB, TB, this.generation, 0), this.capAnswer(BB, TB)
      }
      capAnswer(BB, IB) {
        this.host.wait(4e3, (() => {
          this.sets.get(BB) === IB && IB.wanted && this.host.sendReady(xv(BB))
        }))
      }
      load(BB, IB, ZB, TB, JB) {
        const oB = [...new Set(IB.urls)];
        Promise.allSettled(oB.map((BB => this.host.loadImage(BB, IB.orientation)))).then((GB => {
          const vB = GB.flatMap((BB => "fulfilled" === BB.status ? [BB.value] : [])),
            kB = TB === this.generation && this.sets.get(BB) === ZB,
            cB = GB.findIndex((BB => "rejected" === BB.status));
          if (!kB || !ZB.wanted) return this.WN ? void this.releaseAfterDispose(vB.map(tv)) : (this.releaseAll(vB.map(tv)), void(kB && this.sets.delete(BB)));
          cB < 0 ? this.loaded(BB, IB, oB, vB) : (this.releaseAll(vB.map(tv)), this.host.sendReady(xv(BB)), JB < lv.length ? this.host.wait(lv[JB], (() => {
            TB === this.generation && this.sets.get(BB) === ZB && (ZB.wanted ? this.load(BB, IB, ZB, TB, JB + 1) : this.sets.delete(BB))
          })) : (this.sets.delete(BB), this.host.onLoadFailed(BB, oB[cB], GB[cB].reason)))
        }))
      }
      loaded(BB, IB, ZB, TB) {
        const [JB] = TB, oB = [JB.width, JB.height], GB = TB.every((BB => BB.width === oB[0] && BB.height === oB[1])), vB = IB.urls.length === bZ.gc.CubeFaces;
        if (!GB || oB[0] <= 0 || oB[1] <= 0 || oB[0] > 65535 || oB[1] > 65535 || vB && oB[0] !== oB[1]) {
          this.releaseAll(TB.map(tv)), this.sets.delete(BB), this.host.sendReady(xv(BB));
          const ZB = TB.map((BB => `${BB.width}x${BB.height}`));
          return void this.host.onLoadFailed(BB, IB.urls[0], new Error(`set ${BB}'s images can't make its texture: ${ZB.join(", ")}`))
        }
        const kB = IB.urls.map((BB => TB[ZB.indexOf(BB)].id)),
          cB = TB.map(tv);
        this.sets.set(BB, {
          state: "ready",
          images: kB,
          distinct: cB,
          size: oB
        }), this.host.sendReady(bv(BB, kB, oB))
      }
      release(BB) {
        const IB = this.sets.get(BB);
        "loading" === (null === IB || void 0 === IB ? void 0 : IB.state) ? IB.wanted = !1: "ready" === (null === IB || void 0 === IB ? void 0 : IB.state) && (this.releaseAll(IB.distinct), this.sets.delete(BB))
      }
      releaseAll(BB) {
        for (const IB of BB) this.host.dTB(IB)
      }
      releaseAfterDispose(BB) {
        for (const IB of BB) try {
          this.host.dTB(IB)
        } catch {}
      }
    }

    function tv(BB) {
      return BB.id
    }

    function bv(BB, IB, ZB) {
      const TB = new Uint8Array(bZ.gc.SkyImagesReadyBytes),
        JB = new DataView(TB.buffer);
      return JB.setUint16(0, BB, !0), JB.setUint16(2, IB.length, !0), JB.setUint16(4, ZB[0], !0), JB.setUint16(6, ZB[1], !0), IB.slice(0, bZ.gc.CubeFaces).forEach(((BB, IB) => {
        JB.setUint32(8 + 4 * IB, BB, !0)
      })), TB
    }

    function xv(BB) {
      const IB = new Uint8Array(bZ.gc.SkyImagesReadyBytes),
        ZB = new DataView(IB.buffer);
      return ZB.setUint16(0, BB, !0), ZB.setUint16(2, bZ.gc.Failed, !0), IB
    }
    let Ev = Promise.resolve();
    async function Dv(BB, IB) {
      let ZB;
      try {
        ZB = await (0, fv.K)(BB)
      } catch (oB) {
        throw new ev.c("fetch", BB, {
          cause: oB
        })
      }
      const TB = Ev.then((() => async function(BB, IB) {
        const ZB = new Blob([BB.slice()]);
        let TB = await createImageBitmap(ZB, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: IB
        });
        const JB = 1024 / Math.max(TB.width, TB.height);
        if (JB < 1) {
          const BB = TB;
          try {
            TB = await createImageBitmap(BB, {
              resizeWidth: Math.max(1, Math.round(BB.width * JB)),
              resizeHeight: Math.max(1, Math.round(BB.height * JB)),
              resizeQuality: "high",
              premultiplyAlpha: "none",
              colorSpaceConversion: "none"
            })
          } finally {
            BB.close()
          }
        }
        return TB
      }(ZB, IB)));
      let JB;
      Ev = TB.catch((() => {}));
      try {
        JB = await TB
      } catch (oB) {
        throw new ev.c("decode", BB, {
          cause: oB
        })
      }
      return {
        id: (0, ev.o)(JB),
        width: JB.width,
        height: JB.height
      }
    }
    var Kv = ZB(2236),
      Vv = ZB(34011),
      Sv = ZB(39288);
    const Bk = Kv.h.length,
      Ik = new Set([...Kv.h, "earth"]);

    function Zk(BB) {
      const IB = [],
        ZB = [],
        TB = (BB, TB) => {
          if ("custom" === TB.type) {
            ZB.push({
              id: BB,
              kind: bZ.gc.KindCustom,
              set: IB.length,
              earth: null
            });
            const JB = [TB.px, TB.py, TB.pz, TB.nx, TB.ny, TB.nz];
            IB.push({
              urls: (0, Sv.d)(JB),
              orientation: "none"
            })
          } else ZB.push({
            id: BB,
            kind: bZ.gc.KindEarth,
            set: 0,
            earth: TB
          })
        };
      Kv.h.forEach(((IB, ZB) => {
        var JB;
        TB(ZB, null !== (JB = Tk(BB[IB])) && void 0 !== JB ? JB : Vv.h[IB])
      }));
      const JB = Tk(BB.earth);
      "earth" === (null === JB || void 0 === JB ? void 0 : JB.type) && TB(Bk, JB);
      const oB = new TextEncoder,
        GB = [],
        vB = [];
      for (const [FB, NB] of Object.entries(BB)) {
        const BB = Ik.has(FB) ? null : Tk(NB);
        if (null === BB) continue;
        const IB = oB.encode(FB);
        IB.length > 255 ? vB.push(`Ignoring texture pack skybox ${FB}, whose name is over 255 bytes`) : GB.length === bZ.gc.MaxAdded ? vB.push(`Ignoring texture pack skybox ${FB}, past the ${bZ.gc.MaxAdded} skies a pack can add`) : (GB.push(IB), TB(bZ.gc.AddedId, BB))
      }
      const kB = IB.length;
      IB.push({
        urls: Vv.c.map((BB => Vv.d + BB)),
        orientation: "none"
      }), IB.push({
        urls: [Vv.f],
        orientation: "flipY"
      }), IB.push({
        urls: [Vv.b],
        orientation: "flipY"
      });
      const cB = bZ.gc.SkyTableHeaderBytes + ZB.length * bZ.gc.SkyTableEntryBytes,
        nB = new Uint8Array(cB + GB.reduce(((BB, IB) => BB + 1 + IB.length), 0)),
        hB = new DataView(nB.buffer);
      hB.setUint16(0, kB, !0), hB.setUint16(2, kB + 1, !0), hB.setUint16(4, kB + 2, !0), hB.setUint16(6, ZB.length, !0), ZB.forEach(((BB, IB) => {
        const ZB = bZ.gc.SkyTableHeaderBytes + IB * bZ.gc.SkyTableEntryBytes;
        hB.setUint16(ZB, BB.id, !0), hB.setUint8(ZB + 2, BB.kind);
        const TB = ZB + 4;
        BB.earth ? function(BB, IB, ZB) {
          const TB = BB;
          let JB = 0,
            oB = 0;
          for (const [GB, vB] of Jk) {
            const BB = TB[GB];
            "number" === typeof BB && Number.isFinite(BB) && (IB.setFloat32(ZB + 4 * vB, BB, !0), JB |= 1 << vB)
          }
          for (const [GB, vB, kB] of Gk) {
            const BB = TB[GB];
            Array.isArray(BB) && 3 === BB.length && BB.every((BB => "number" === typeof BB && Number.isFinite(BB))) && (BB.forEach(((BB, TB) => {
              IB.setFloat32(ZB + kB + 4 * TB, BB, !0)
            })), JB |= vB)
          }
          vk.forEach(((BB, oB) => {
            let [GB, vB] = BB;
            const kB = TB[GB];
            "number" === typeof kB && Number.isFinite(kB) && (IB.setFloat32(ZB + bZ.w.CameraOffsetAt + 4 * oB, kB, !0), JB |= vB)
          }));
          for (const [GB, vB] of kk) {
            const BB = TB[GB];
            null !== BB && void 0 !== BB && (JB |= vB, BB && (oB |= vB >>> 14))
          }
          IB.setUint32(ZB + bZ.w.PresentAt, JB, !0), IB.setUint8(ZB + bZ.w.FlagsAt, oB)
        }(BB.earth, hB, TB) : hB.setUint16(TB, BB.set, !0)
      }));
      let zB = cB;
      for (const FB of GB) nB[zB] = FB.length, nB.set(FB, zB + 1), zB += 1 + FB.length;
      return {
        payload: nB,
        sets: IB,
        leftOut: vB
      }
    }

    function Tk(BB) {
      if ("object" !== typeof BB || null === BB) return null;
      const IB = BB;
      if ("earth" === IB.type) return BB;
      return "custom" === IB.type && ["px", "py", "pz", "nx", "ny", "nz"].every((BB => {
        const ZB = IB[BB];
        return "string" === typeof ZB && ZB.length > 0
      })) ? BB : null
    }
    const Jk = [
        ["inclination", bZ.w.Inclination],
        ["turbidity", bZ.w.Turbidity],
        ["luminance", bZ.w.Luminance],
        ["rayleigh", bZ.w.Rayleigh],
        ["mieCoefficient", bZ.w.MieCoefficient],
        ["mieDirectionalG", bZ.w.MieDirectionalG],
        ["distance", bZ.w.Distance],
        ["azimuth", bZ.w.Azimuth]
      ],
      Gk = [
        ["sunPosition", bZ.w.SunPosition, bZ.w.SunPositionAt],
        ["up", bZ.w.Up, bZ.w.UpAt],
        ["vertexTint", bZ.w.VertexTint, bZ.w.VertexTintAt]
      ],
      vk = [
        ["xCameraOffset", bZ.w.CameraOffsetX],
        ["yCameraOffset", bZ.w.CameraOffsetY],
        ["zCameraOffset", bZ.w.CameraOffsetZ]
      ],
      kk = [
        ["useSunPosition", bZ.w.UseSunPosition],
        ["dithering", bZ.w.Dithering],
        ["infiniteDistance", bZ.w.InfiniteDistance]
      ];

    function ck(BB, IB, ZB) {
      const TB = new hk({
        writeCmd: BB,
        warn: IB,
        followPack: nk(ZB, IB)
      });
      return TB.start(), TB
    }

    function nk(BB, IB) {
      return ZB => {
        let TB = () => {};
        const JB = BB((BB => {
          TB(), TB = () => {}, null !== BB ? TB = BB.subscribe((BB => {
            ZB(function(BB, IB, ZB) {
              if ("object" !== typeof BB || null === BB) return null;
              const TB = BB.skyBoxes;
              if ("object" !== typeof TB || null === TB) return null;
              if ("player" === IB) return TB;
              return Object.fromEntries(Object.entries(TB).filter((BB => {
                let [IB, TB] = BB;
                return !! function(BB) {
                  if ("object" !== typeof BB || null === BB) return !1;
                  return "earth" === BB.type || Object.entries(BB).every((BB => {
                    let [IB, ZB] = BB;
                    return "type" === IB || ("" === (TB = ZB) || null !== function(BB) {
                      var IB, ZB, TB;
                      return "string" !== typeof BB ? null : null !== (IB = null === (ZB = zk.exec(BB)) || void 0 === ZB || null === (TB = ZB.groups) || void 0 === TB ? void 0 : TB.base64) && void 0 !== IB ? IB : null
                    }(TB));
                    var TB
                  }))
                }(TB) || (ZB(`Ignoring texture pack skybox ${IB}, whose faces are not all data URLs`, null), !1)
              })))
            }(BB.pack, null === BB.gameSource ? "player" : "customGame", IB))
          })) : ZB(null)
        }));
        return () => {
          JB(), TB()
        }
      }
    }
    class hk {
      constructor(BB) {
        var IB, ZB, TB;
        this.host = BB, this.loader = void 0, this.wait = void 0, this.queue = [], this.written = null, this.stopFollowing = () => {}, this.WN = !1, this.wait = null !== (IB = BB.wait) && void 0 !== IB ? IB : (BB, IB) => {
          setTimeout(IB, BB)
        }, this.loader = new Av({
          loadImage: null !== (ZB = BB.loadImage) && void 0 !== ZB ? ZB : Dv,
          dTB: null !== (TB = BB.dTB) && void 0 !== TB ? TB : ev.s,
          sendReady: BB => {
            this.queue.push({
              kind: bZ.gc.SkyImagesReady,
              payload: BB
            })
          },
          onLoadFailed: (IB, ZB, TB) => {
            BB.warn(`sky image set ${IB} (${ZB}) didn't load: the last sky stays`, TB)
          },
          wait: this.wait
        })
      }
      start() {
        this.wait(uv.e, (() => {
          null === this.written && this.write({})
        })), this.stopFollowing = this.host.followPack((BB => {
          this.write(null !== BB && void 0 !== BB ? BB : {})
        }))
      }
      onEvent(BB) {
        this.loader.onEvent(BB)
      }
      drain() {
        if (0 === this.queue.length) return;
        let BB = 0;
        for (; BB < this.queue.length && this.host.writeCmd(this.queue[BB].kind, 0, this.queue[BB].payload);) BB++;
        BB > 0 && this.queue.splice(0, BB)
      }
      dispose() {
        this.WN = !0, this.stopFollowing(), this.queue = [], this.loader.dispose()
      }
      write(BB) {
        if (this.WN) return;
        const IB = Zk(BB);
        if (!(this.written && (ZB = this.written, TB = IB, ZB.payload.length === TB.payload.length && ZB.payload.every(((BB, IB) => BB === TB.payload[IB])) && ZB.sets.length === TB.sets.length && ZB.sets.every(((BB, IB) => {
            const ZB = TB.sets[IB];
            return BB.orientation === ZB.orientation && BB.urls.length === ZB.urls.length && BB.urls.every(((BB, IB) => BB === ZB.urls[IB]))
          }))))) {
          var ZB, TB;
          for (const BB of IB.leftOut) this.host.warn(BB, null);
          this.written = IB, this.loader.reset(IB.sets), this.queue = this.queue.filter((BB => BB.kind !== bZ.gc.SkyImagesReady)), this.queue.push({
            kind: bZ.gc.SkyTable,
            payload: IB.payload
          })
        }
      }
    }
    const zk = /^data:[\w.+/-]*;base64,(?<base64>[A-Za-z0-9+/]*={0,2})$/;
    var Fk = ZB(2945),
      Nk = ZB(3159),
      gk = ZB(294),
      qk = ZB(190),
      yk = ZB(2953),
      Uk = ZB(2961),
      Wk = ZB(267),
      dk = ZB(273),
      Ck = ZB(3064),
      Qk = ZB(3090),
      sk = ZB(3099),
      wk = ZB(121),
      Ok = ZB(331),
      Yk = ZB(40860);
    class ik {
      constructor() {
        this.id = null, this.sentMs = null, this.roundTripMs = null, this.stopReplies = void 0, this.stopReplies = (0, uJ.l)(UT.E, (BB => {
          this.onReply((0, eJ.e)(UT.E, BB), performance.now())
        }))
      }
      onFrame(BB, IB) {
        null === this.id ? this.id = BB : BB !== this.id && (this.id = BB, this.sentMs = document.hidden ? null : IB)
      }
      onVisibilityChange() {
        this.sentMs = null
      }
      onReply(BB, IB) {
        BB === this.id && null !== this.sentMs && (this.roundTripMs = Math.round(IB - this.sentMs), this.sentMs = null)
      }
      take() {
        const BB = this.roundTripMs;
        return this.roundTripMs = null, BB
      }
      stop() {
        this.stopReplies()
      }
    }
    class pk {
      constructor() {
        this.sampled = 0, this.timed = 0, this.frameUs = 0, this.primed = !1, this.windowTimed = 0, this.windowUs = 0
      }
      onFrame(BB, IB, ZB, TB) {
        const JB = BB - this.sampled >>> 0,
          oB = IB - this.timed >>> 0,
          GB = ZB - this.frameUs >>> 0,
          vB = this.primed;
        return this.sampled = BB, this.timed = IB, this.frameUs = ZB, this.primed = !0, !(!vB || JB > 64 || oB > 64) && (TB && GB <= 1e6 * oB && (this.windowTimed += oB, this.windowUs += GB), TB && JB > 0)
      }
      reset() {}
      snapshotAndReset() {
        const BB = this.windowTimed > 0 ? this.windowUs / this.windowTimed / 1e3 : null;
        return this.windowTimed = 0, this.windowUs = 0, {
          passMs: BB,
          submitToDoneMs: null
        }
      }
    }
    const ak = {
      lagP50Ms: null,
      lagP90Ms: null
    };
    class Hk {
      constructor() {
        this.samples = new Float64Array(4096), this.count = 0
      }
      add(BB, IB) {
        const ZB = Math.min(4096, this.count + IB);
        this.samples.fill(BB, this.count, ZB), this.count = ZB
      }
      clear() {
        this.count = 0
      }
      take() {
        const BB = this.count;
        if (this.count = 0, BB < 30) return ak;
        const IB = this.samples.subarray(0, BB).sort(),
          ZB = ZB => IB[Math.min(BB - 1, Math.floor(ZB * BB))];
        return {
          lagP50Ms: ZB(.5),
          lagP90Ms: ZB(.9)
        }
      }
    }
    class Mk {
      constructor() {
        this.word = 0, this.lagUs = 0, this.primed = !1, this.lags = new Hk
      }
      onFrame(BB, IB) {
        const ZB = BB.headerWord(bZ.J.Pacing),
          TB = BB.headerWord(bZ.J.PacingLagUs),
          JB = (ZB >>> bZ._.LagsShift) - (this.word >>> bZ._.LagsShift) & bZ._.CountMask,
          oB = JB > 0 ? (TB - this.lagUs >>> 0) / JB / 1e3 : 0,
          GB = this.primed && JB <= 64 && oB <= 6e4;
        this.word = ZB, this.lagUs = TB, this.primed = !0, GB && IB && JB > 0 && 0 !== (ZB & bZ._.Defaulted) && this.lags.add(oB, JB)
      }
      onJoin() {
        this.lags.clear()
      }
      snapshotAndReset(BB) {
        return BB ? this.lags.take() : (this.lags.clear(), ak)
      }
    }
    var jk = ZB(313);

    function Pk() {
      return Date.now() - performance.now()
    }
    class Rk {
      constructor() {
        this.rafs = 0, this.sv = 0, this.heldAtRaf = -1, this.heldRunStartMs = 0, this.startMs = performance.now(), this.startClockOffsetMs = Pk(), this.focused = document.hasFocus(), this.blurred = !1, this.resumed = !1, this.embedded = (0, jk.d)(), this.onBlur = () => {
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
        (0 === this.sv || this.heldAtRaf < this.rafs - 1) && (this.heldRunStartMs = 1 === this.rafs ? this.startMs : performance.now()), this.sv++, this.heldAtRaf = this.rafs
      }
      words(BB) {
        const IB = BB ? this.rafs - 1 : this.rafs;
        return function(BB) {
          let IB = 0 === BB.rafs ? "raf:none" : "raf:some";
          return BB.sv > 0 && (IB += " pace:held"), BB.heldRunMs > 1e4 && (IB += " pace:stalled"), BB.blurred && (IB += " blur"), BB.resumed && (IB += " resumed"), BB.embedded && (IB += " embedded"), BB.clockGainMs > 2e3 && (IB += " clockjump"), IB
        }({
          clockGainMs: Pk() - this.startClockOffsetMs,
          rafs: IB,
          sv: this.sv,
          heldRunMs: this.sv > 0 && this.heldAtRaf === IB ? performance.now() - this.heldRunStartMs : 0,
          blurred: this.blurred,
          resumed: this.resumed,
          embedded: this.embedded
        })
      }
      restart(BB) {
        this.rafs = 0, this.sv = 0, this.heldAtRaf = -1, this.startMs = BB, this.startClockOffsetMs = Pk(), this.blurred = !this.focused, this.resumed = !1
      }
      stop() {
        window.removeEventListener("blur", this.onBlur), window.removeEventListener("focus", this.onFocus), document.removeEventListener("freeze", this.onLifecycle), document.removeEventListener("resume", this.onLifecycle)
      }
    }
    var rk = ZB(34118),
      mk = ZB(3071),
      Xk = ZB(40906),
      Lk = ZB(34110),
      ek = ZB(2970),
      uk = ZB(3080);
    const fk = {
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

    function lk(BB) {
      return new Ak(BB)
    }
    class Ak {
      constructor(BB) {
        this.shell = BB, this.tracker = new Uk.b, this.gpu = new pk, this.pacing = new Mk, this.timers = [], this.inGameAtLastFlush = !1, this.hasFlushedSinceConnect = !1, this.sendsDropped = 0, this.pendingLightFailures = 0, this.unsentPage = null, this.game = null, this.fpsSpanStartMs = -1, this.fpsFrames = 0, this.fpsOverTime = null, this.firstSpanFps = null, this.initialFps = null, this.ping = new ik, this.pacedCpuMs = 0, this.sendsStartMs = -1, this.sendsEndMs = -1, this.frameDebug = null, this.lastDrawnMs = -1, this.stallPending = !1, this.stallGap = new Rk, this.onVisibility = () => {
          this.tracker.onVisibilityChange(), this.ping.onVisibilityChange(), this.lastDrawnMs = -1, !document.hidden && this.fpsSpanStartMs >= 0 && (this.fpsFrames = 0, this.fpsSpanStartMs = performance.now())
        }, this.onBeforeUnload = () => {
          this.checkMainStall(performance.now(), !1), this.lastDrawnMs = -1
        }, (0, rk.e)(BB.backend, BB.canvas, BB.adapterVendor), this.tracker.start((() => !BB.inGame()), this.gpu, "wasm"), document.addEventListener("visibilitychange", this.onVisibility), window.addEventListener("beforeunload", this.onBeforeUnload), (0, ek.d)("wasm", (() => {
          const {
            n: IB,
            sampleCount: ZB
          } = (0, Xk.c)();
          return `${BB.backend}, quality steps aim at up to ${uk.e.target.maxFps} fps, pixel n ${IB}, msaa ${ZB}`
        }), (IB => {
          IB.setLoadCounts(BB.readLoadCounts), this.frameDebug = IB
        })), this.timers.push(setInterval((() => {
          this.flush(), this.fpsOverTime = null, this.initialFps = null
        }), 1e4), setInterval((() => {
          this.followGame() && this.shell.canSend() && (this.hasFlushedSinceConnect || (this.flush(), this.hasFlushedSinceConnect = !0))
        }), 250))
      }
      animationFrame(BB) {
        var IB;
        this.stallGap.animationFrame(), this.tracker.onAnimationFrame(BB), null === (IB = this.frameDebug) || void 0 === IB || IB.animationFrame()
      }
      sendsWent(BB, IB, ZB) {
        this.ping.onFrame(BB.headerWord(bZ.J.PingSent), IB), this.sendsStartMs = IB, this.sendsEndMs = ZB
      }
      frameRan(BB, IB, ZB, TB) {
        var JB;
        this.ping.onFrame(BB.headerWord(bZ.J.PingSent), ZB);
        const oB = this.tracker;
        this.pacing.onFrame(BB, oB.isSampling());
        const GB = BB.headerWord(bZ.J.TickUs) / 1e3 + (0, TT.I)();
        var vB;
        (oB.dU(GB), null === (JB = this.frameDebug) || void 0 === JB || JB.wasmFrame(BB, IB, ZB, TB, oB.isSampling(), GB), null !== this.game) && (null === (vB = this.frameDebug) || void 0 === vB || vB.inGame());
        const kB = this.sendsStartMs >= IB ? this.sendsEndMs - this.sendsStartMs : 0,
          cB = Math.max(0, ZB - IB - GB - kB);
        if ("drawn" !== TB) return void("paced" === TB ? (this.pacedCpuMs += cB, this.stallGap.paced()) : "skipped" === TB && (this.lastDrawnMs = -1));
        this.followGame(), this.checkMainStall(IB, !0), oB.onFrameStart(IB);
        this.gpu.onFrame(BB.headerWord(bZ.J.GpuSampled), BB.headerWord(bZ.J.GpuTimed), BB.headerWord(bZ.J.GpuFrameUs), oB.isSampling()) && oB.onGpuSampleStarted(), oB.onFrameCpu(cB + this.pacedCpuMs), this.pacedCpuMs = 0, this.countFpsFrame(IB)
      }
      framePaced() {
        var BB;
        this.stallGap.paced(), null === (BB = this.frameDebug) || void 0 === BB || BB.wasmPeekPaced(this.tracker.isSampling())
      }
      stop() {
        for (const BB of this.timers) clearInterval(BB);
        this.timers.length = 0, document.removeEventListener("visibilitychange", this.onVisibility), window.removeEventListener("beforeunload", this.onBeforeUnload), this.stallGap.stop(), this.ping.stop(), this.tracker.limiterTelemetry.stop()
      }
      followGame() {
        const BB = this.shell.joinedGame();
        if (BB !== this.game) {
          var IB;
          if (this.game = BB, null !== BB) null === (IB = this.frameDebug) || void 0 === IB || IB.joined();
          this.tracker.snapshotAndReset(), this.pacing.onJoin(), this.hasFlushedSinceConnect = !1, this.inGameAtLastFlush = !1, this.fpsSpanStartMs = -1, this.fpsFrames = 0, this.pacedCpuMs = 0, this.firstSpanFps = null, this.fpsOverTime = null, this.initialFps = null, this.lastDrawnMs = -1
        }
        return null !== BB
      }
      checkMainStall(BB, IB) {
        if (!this.tracker.isSampling()) return void(this.lastDrawnMs = -1);
        const ZB = this.tracker.limiterTelemetry.longAnimationFrameTracker,
          TB = this.lastDrawnMs < 0 ? 0 : BB - this.lastDrawnMs;
        this.lastDrawnMs = BB;
        const JB = !this.stallPending && TB > 5e3,
          oB = JB ? this.stallGap.words(IB) : "";
        this.stallGap.restart(BB), this.stallPending || (JB ? (this.stallPending = !0, setTimeout((() => {
          this.stallPending = !1, this.shell.mainStalled(TB, ZB.blockingSinceMark(), oB)
        }), 0)) : ZB.markFrame(BB))
      }
      countFpsFrame(BB) {
        if (this.fpsSpanStartMs < 0) {
          if (!this.shell.inGame()) return;
          this.fpsSpanStartMs = BB
        }
        this.fpsFrames++;
        const IB = BB - this.fpsSpanStartMs;
        if (!(IB < sk.d)) {
          if (!document.hidden) {
            const BB = 1e3 * this.fpsFrames / IB;
            this.firstSpanFps ??= BB, this.initialFps = this.firstSpanFps, this.fpsOverTime = BB
          }
          this.fpsFrames = 0, this.fpsSpanStartMs = BB
        }
      }
      flush() {
        const BB = this.followGame(),
          {
            cpuFrameMs: IB,
            refreshHz: ZB,
            cpuBottleneck: JB,
            frameIntervalCv: oB,
            ...GB
          } = this.tracker.snapshotAndReset(),
          vB = this.shell.inGame(),
          kB = vB && this.inGameAtLastFlush,
          cB = kB ? GB : (0, yk.e)(GB),
          nB = this.pacing.snapshotAndReset(kB);
        if (this.inGameAtLastFlush = vB, this.pendingLightFailures += this.shell.takeFailedMeshJobs(), !BB || !this.shell.canSend()) return;
        const hB = performance.now(),
          FB = (0, Qk.u)((0, Qk.r)(hB), this.unsentPage),
          gB = function(BB, IB, ZB, JB, oB, GB, vB, kB) {
            var cB, nB, hB, zB, FB;
            const NB = {},
              {
                canvas: gB
              } = BB,
              qB = (0, Ck.l)({
                refreshHz: IB.refreshHz,
                msaa: BB.msaa(),
                autoMsaaOff: (0, Lk.e)()
              });
            for (const yB of (0, Nk.d)()) {
              const UB = yB.name;
              let WB;
              if ((0, gk.x)(UB)) WB = (0, Qk.d)(UB);
              else if ((0, Qk.j)(UB)) WB = kB[UB];
              else if ((0, Ck.n)(UB)) WB = qB[UB];
              else switch (UB) {
                case "fps":
                  WB = JB;
                  break;
                case "wk":
                  WB = oB;
                  break;
                case "Hk":
                  WB = (0, mk.G)((0, Xk.c)().n);
                  break;
                case "Mk":
                  WB = Math.max(gB.width, gB.height);
                  break;
                case "jk":
                  WB = Math.min(gB.width, gB.height);
                  break;
                case "Pk":
                  WB = navigator.hardwareConcurrency || null;
                  break;
                case "Rk":
                  WB = (0, EJ.getWebGpuSupported)();
                  break;
                case "rk":
                  WB = null === BB.fallbackReason ? null : fk[BB.fallbackReason];
                  break;
                case "mk":
                  WB = IB.cpuFrameMs;
                  break;
                case "Xk":
                  WB = IB.refreshHz;
                  break;
                case "Lk":
                  WB = IB.cpuBottleneck;
                  break;
                case "uk":
                  WB = IB.frameIntervalCv;
                  break;
                case "fk":
                  WB = IB.frameMs;
                  break;
                case "lk":
                  WB = IB.tickMs;
                  break;
                case "xk":
                  WB = IB.mainBusyShare;
                  break;
                case "Ek":
                  WB = IB.mainProbeDelayMs;
                  break;
                case "Ak":
                  WB = IB.longAnimationFramesPerMin;
                  break;
                case "tk":
                  WB = IB.longAnimationFrameTimeShare;
                  break;
                case "bk":
                  WB = IB.longAnimationFrameScriptShare;
                  break;
                case "Dk":
                  WB = IB.gpuPassMs;
                  break;
                case "Kk":
                  WB = IB.gpuSubmitToDoneMs;
                  break;
                case "Vk":
                  WB = ZB.lagP50Ms;
                  break;
                case "Sk":
                  WB = ZB.lagP90Ms;
                  break;
                case "hc":
                  WB = (0, Fk.f)(GB);
                  break;
                case "ak":
                  WB = vB;
                  break;
                case "Bc":
                case "Ic":
                case "Zc":
                case "Tc":
                case "Jc":
                case "oc":
                case "Gc":
                case "vc":
                case "kc":
                case "cc":
                case "nc":
                case "zc":
                case "Fc":
                case "Nc":
                case "gc":
                  WB = null;
                  break;
                case "Mc":
                  WB = (0, EJ.getPlatformType)();
                  break;
                case "jc":
                  WB = (0, EJ.getGpuVendor)();
                  break;
                case "Pc":
                  WB = Yk.b[BB.backend];
                  break;
                case "Rc":
                  WB = (0, wk.e)();
                  break;
                case "mc":
                  WB = (0, EJ.getOperatingSystem)();
                  break;
                case "Xc":
                  WB = (0, EJ.getTrafficSource)();
                  break;
                case "Lc":
                  WB = null !== (cB = TB.d.get("gameEntrySource")) && void 0 !== cB ? cB : qk.f;
                  break;
                case "ec":
                  WB = null !== (nB = IB.frameLimiter) && void 0 !== nB ? nB : qk.f;
                  break;
                case "uc":
                  WB = (0, Wk.j)();
                  break;
                case "fc":
                  WB = null !== (hB = (0, dk.b)()) && void 0 !== hB ? hB : qk.f;
                  break;
                case "lc":
                  WB = (0, Wk.c)(gB.width, gB.height);
                  break;
                case "Ac":
                  WB = (0, Nk.g)(-(new Date).getTimezoneOffset());
                  break;
                case "xc":
                  WB = null !== (zB = BB.fallbackReason) && void 0 !== zB ? zB : qk.f;
                  break;
                case "Kc":
                  WB = "ready";
                  break;
                case "Vc":
                  WB = (0, EJ.getSoftwareRenderer)();
                  break;
                case "bc":
                  WB = null !== BB.shaderPackReach() ? "true" : "false";
                  break;
                case "Sc":
                  WB = null !== (FB = BB.shaderPackReach()) && void 0 !== FB && FB.sceneDepth ? "true" : "false";
                  break;
                case "Bn": {
                  const IB = BB.shaderPackReach();
                  WB = null !== IB && void 0 !== IB && IB.sunShadow ? "all" : null !== IB && void 0 !== IB && IB.airShadow ? "air" : "none";
                  break
                }
                case "Zn":
                  WB = Ok.G;
                  break;
                case "nn":
                  WB = (0, Qk.l)();
                  break;
                case "tc": {
                  const IB = BB.Xg();
                  WB = null === IB ? qk.f : String(IB);
                  break
                }
                case "Ec":
                case "Dc":
                  WB = qk.f;
                  break;
                default:
                  throw new Error(`Unhandled field name: ${UB}`)
              }
              if (void 0 === WB) throw new Error(`Metric ${UB} has no value`);
              NB[UB] = WB
            }
            return NB
          }(this.shell, {
            cpuFrameMs: IB,
            refreshHz: ZB,
            cpuBottleneck: JB,
            frameIntervalCv: oB,
            ...cB
          }, nB, this.fpsOverTime, this.initialFps, this.pendingLightFailures, this.ping.take(), FB);
        if (! function(BB, IB, ZB) {
            return (0, AI.b)(), BB(NB.j.Send, IB, ZB)
          }(this.shell.writeCmd, zB.vd, function(BB) {
            const IB = (0, rB.i)((0, xI.i)(BB)),
              ZB = new Uint8Array(NB.Wd.BYTES + IB.length);
            return new DataView(ZB.buffer).setUint16(0, xI.e.AnalyticsUpdate, !0), ZB.set(IB, NB.Wd.BYTES), ZB
          }(gB))) return this.unsentPage = FB, void(0 === this.sendsDropped++ && console.warn("[wasm-client] an analytics update found the cmd ring full: dropped"));
        this.unsentPage = null, this.pendingLightFailures -= Math.min(this.pendingLightFailures, Fk.d), (0, Qk.p)(gB, "wasm", hB)
      }
    }
    var tk = ZB(39674);

    function bk(BB, IB, ZB) {
      const TB = new Map;
      return (0, tk.c)(((BB, ZB, TB) => IB.KG(BB, ZB, TB)), ((IB, ZB, JB) => {
        const oB = `${IB},${ZB},${JB}`;
        return TB.has(oB) || TB.set(oB, (0, XI.d)(BB, IB, ZB, JB)), TB.get(oB)
      }), ZB)
    }
    var xk = ZB(39680),
      Ek = ZB(40901);

    function Dk(BB) {
      const IB = null !== BB && 0 !== (NB.p.playerFlags(BB.api.apiView, 0) & NB.Bd.CursorAim);
      IB !== (0, Ek.p)() && (0, Ek.K)(IB, null !== BB)
    }

    function Kk(BB) {
      return (0, yT.e)(UT.y, BB)
    }
    var Vk = ZB(41052);
    const Sk = new oB.h((BB => ZB(42591)(`./${BB}/${BB}Client`)));
    let Bc = null,
      Ic = null;
    async function Zc(BB) {
      Bc ??= ZB.e(27).then((() => ZB(39211))).then((BB => {
        Ic = BB.createDefaultClientPlugins
      }), (BB => {
        throw Bc = null, BB
      })), await Promise.all([Sk.load(BB), Bc])
    }

    function Tc(BB) {
      BB.load(new RI(tT, new ET))
    }
    let Jc = !1;
    const oc = new WeakMap;

    function Gc(BB) {
      try {
        BB()
      } catch (IB) {
        console.error("[bloxd-wasm-client] a session-end step failed", IB)
      }
    }

    function vc(BB, IB) {
      ! function() {
        var BB, IB;
        fT.Howler.volume();
        const ZB = fT.Howler;
        null === (BB = ZB._autoResume) || void 0 === BB || BB.call(ZB), null === (IB = ZB._autoSuspend) || void 0 === IB || IB.call(ZB)
      }(), IB.audio.prepare();
      const ZB = new dB(IB.core, IB.memory, IB.audio);
      let oB;
      try {
        oB = new qJ(ZB, IB.options)
      } catch (zB) {
        return BB.crash(UJ.A, zB), null
      }(0, kB.d)(yJ(ZB, oB));
      const nB = new pv({
        running: BB,
        api: ZB,
        core: IB.core,
        memory: IB.memory,
        staleOr: IB.staleOr,
        reportFault: IB.reportReplayFault,
        options: IB.options,
        sessionInfo: IB.sessionInfo,
        replayShaderPack: IB.replayShaderPack
      });
      (0, TT.A)();
      const hB = new rT({
        api: ZB,
        tables: oB,
        sessionInfo: IB.sessionInfo,
        gameFactory: BB => Sk.loadedFactory(BB),
        defaultPlugins: (BB, IB, ZB, TB) => {
          if (null === Ic) throw new Error("The default plugins started before they loaded");
          return Ic(BB, IB, ZB, TB)
        },
        serverOptions: IB.options,
        onNetEvent: BB => {
          nB.netEvent(BB), IB.onNetEvent(BB)
        },
        setLocalOptions: IB => {
          Hv(BB, {
            changes: IB,
            reset: !1
          })
        },
        playSound: (BB, ZB, TB, JB, oB, GB, vB) => IB.audio.playGame(BB, ZB, TB, JB, oB, GB, vB),
        preloadSounds: BB => {
          IB.audio.preload(function(BB) {
            const IB = [];
            for (const ZB of BB) {
              const BB = jI(ZB);
              BB >= 0 && IB.push(UI[BB])
            }
            return IB
          }(BB))
        },
        onSessionEnd: () => {
          Gc(JB.m), Gc(ZJ), Gc((() => {
            TB.d.set({
              openInGameMenuName: null
            })
          })), Gc((() => {
            IB.audio.endSession()
          }))
        },
        beforeWrite: IB.beforeWrite,
        beforeOp: IB.beforeOp,
        cameraScreen: IJ,
        showCameraFacing: TJ,
        onEventOverflow: IB.onEventOverflow,
        screenBandY: vB.g,
        replayEntities: nB.entityHooks,
        hasPackModel: IB.hasPackModel
      });
      return hB.attach(BB), oc.set(hB, nB), eT(hB.items, IB.audio),
        function(BB) {
          BB.setClientFreeCameraGrant("isDev", !1);
          const IB = IB => {
            BB.setClientFreeCameraGrant("hasDeveloperRank", IB.playerHasRank("developer"))
          };
          (0, GB.p)("userContextUpdated", IB)
        }(hB), Jc || (Jc = !0, (0, GB.p)("appManagerUpdated|openInGameMenuName", (BB => {
          !BB && (0, cB.l)().includes(cB.e) && (0, cB.p)(cB.e)
        }))), hB
    }

    function kc(BB) {
      try {
        BB.closeGame()
      } finally {
        var IB;
        null === (IB = oc.get(BB)) || void 0 === IB || IB.stop(), oc.delete(BB)
      }
    }
  },
  42591: (BB, IB, ZB) => {
    var TB = {
      "./bedwars/bedwarsClient": [39337, 9],
      "./bridgeBattle/bridgeBattleClient": [39346, 10],
      "./buildAFactory2/buildAFactory2Client": [38526, 76, 75, 74, 230, 225, 11],
      "./classic/classicClient": [39350, 12],
      "./clutch/clutchClient": [39354, 13],
      "./containmentBreach/containmentBreachClient": [39363, 224, 14],
      "./cooking/cookingClient": [39485, 15],
      "./defusal/defusalClient": [39492, 16],
      "./frontline/frontlineClient": [39495, 76, 75, 74, 17],
      "./goalRush/goalRushClient": [39497, 18],
      "./luckyBedwars/luckyBedwarsClient": [39500, 19],
      "./ninetyNineNights/ninetyNineNightsClient": [39507, 20],
      "./oneBlock/oneBlockClient": [39515, 21],
      "./plots/plotsClient": [39520, 247, 224, 22],
      "./pvpCiv/pvpCivClient": [39601, 23],
      "./skyIslands/skyIslandsClient": [39610, 24],
      "./skyblock/skyblockClient": [38568, 76, 239, 230, 192, 25],
      "./tsunami/tsunamiClient": [39615, 26]
    };

    function JB(BB) {
      if (!ZB.o(TB, BB)) return Promise.resolve().then((() => {
        var IB = new Error("Cannot find module '" + BB + "'");
        throw IB.code = "MODULE_NOT_FOUND", IB
      }));
      var IB = TB[BB],
        JB = IB[0];
      return Promise.all(IB.slice(1).map(ZB.e)).then((() => ZB(JB)))
    }
    JB.keys = () => Object.keys(TB), JB.id = 42591, BB.exports = JB
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);