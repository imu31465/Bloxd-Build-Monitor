export const id = 68;
export const ids = [68];
export const modules = {
  53677: (MM, rM, iM) => {
    var OM = {
      "./bedwars/bedwarsClient": [40357, 9],
      "./bridgeBattle/bridgeBattleClient": [40364, 10],
      "./buildAFactory2/buildAFactory2Client": [39483, 87, 85, 248, 267, 11],
      "./classic/classicClient": [40373, 12],
      "./classic/smp2Client": [40376, 13],
      "./clutch/clutchClient": [40383, 14],
      "./containmentBreach/containmentBreachClient": [40388, 243, 15],
      "./cooking/cookingClient": [40502, 16],
      "./defusal/defusalClient": [40511, 17],
      "./frontline/frontlineClient": [40513, 87, 85, 18],
      "./goalRush/goalRushClient": [40528, 19],
      "./greenville/greenvilleClient": [40534, 172, 273, 20],
      "./hideseek/hideseekClient": [40557, 21],
      "./luckyBedwars/luckyBedwarsClient": [40563, 22],
      "./murderMystery/murderMysteryClient": [40569, 23],
      "./ninetyNineNights/ninetyNineNightsClient": [40575, 24],
      "./oneBlock/oneBlockClient": [40582, 25],
      "./plots/plotsClient": [40588, 265, 243, 26],
      "./pvpCiv/pvpCivClient": [40655, 27],
      "./secretSanta/secretSantaClient": [40659, 28],
      "./skyIslands/skyIslandsClient": [40666, 29],
      "./skyblock/skyblockClient": [39519, 87, 257, 248, 172, 237, 30],
      "./tsunami/tsunamiClient": [40668, 31]
    };

    function SM(MM) {
      if (!iM.o(OM, MM)) return Promise.resolve().then((() => {
        var rM = new Error("Cannot find module '" + MM + "'");
        throw rM.code = "MODULE_NOT_FOUND", rM
      }));
      var rM = OM[MM],
        SM = rM[0];
      return Promise.all(rM.slice(1).map(iM.e)).then((() => iM(SM)))
    }
    SM.keys = () => Object.keys(OM), SM.id = 53677, MM.exports = SM
  },
  37316: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => zM,
      f: () => PM,
      i: () => QM,
      j: () => nM,
      l: () => EM
    });
    var OM = iM(632),
      SM = iM(1845),
      jM = iM(5200);
    class aM {
      constructor(MM, rM) {
        this.width = MM, this.vL = rM, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(MM * rM)
      }
      push(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const iM = this.data,
          OM = this.next * this.width;
        for (let SM = 0; SM < this.width; SM++) iM[OM + SM] = MM[rM + SM];
        this.next = (this.next + 1) % this.vL, this.size = Math.min(this.size + 1, this.vL)
      }
      rows() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1 / 0;
        const iM = [],
          OM = (this.next - this.size + this.vL) % this.vL;
        for (let SM = 0; SM < this.size; SM++) {
          const jM = (OM + SM) % this.vL * this.width;
          this.data[jM + MM] >= rM && iM.push(Array.from(this.data.subarray(jM, jM + this.width)))
        }
        return iM
      }
      lines() {
        return this.rows().map((MM => MM.join(",")))
      }
    }
    const PM = 10,
      nM = {
        idle: 0,
        ML: 1,
        pD: 2,
        ZD: 3,
        yd: 4
      },
      QM = {
        none: 0,
        skipped: 1,
        paced: 2,
        drawn: 3
      },
      zM = {
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
      LM = 12e3,
      mM = ["nowMs", "dtMs", "rawX", "rawY", "turnedX", "turnedY", "outcome", "velocityX", "velocityY", "limit"],
      HM = ["timeStamp", "nowMs", "movementX", "movementY", "locked"],
      hM = ["nowMs", "dtMs", "heading", "pitch", "kind"],
      JM = ["nowMs", "source", "headingBefore", "pitchBefore", "headingAfter", "pitchAfter"],
      dM = ["nowMs", "change", "count"];

    function yM(MM) {
      return "js" === MM ? zM.jsClient : zM.wasmClient
    }
    class lM {
      constructor() {
        this.steps = new aM(PM, LM), this.events = new aM(HM.length, LM), this.frames = new aM(hM.length, LM), this.cameraSets = new aM(jM.g, 256), this.changes = new aM(dM.length, 256)
      }
    }
    const EM = new class {
      constructor() {
        this.rings = null, this.sample = new Float64Array(HM.length), this.startedClient = null, this.startedAtMs = 0
      }
      get client() {
        return this.startedClient
      }
      start(MM, rM) {
        this.startedClient = MM, this.startedAtMs = performance.now(), null !== this.rings ? this.change(yM(MM)) : rM && this.allocate()
      }
      lockGained() {
        this.allocate(), this.change(zM.lockGained)
      }
      allocate() {
        null === this.rings && (this.rings = new lM, null !== this.startedClient && this.changeAt(this.startedAtMs, yM(this.startedClient), 1))
      }
      step(MM, rM) {
        var iM;
        MM[rM + 6] !== nM.yd && (null === (iM = this.rings) || void 0 === iM || iM.steps.push(MM, rM))
      }
      cameraSet(MM, rM) {
        var iM;
        null === (iM = this.rings) || void 0 === iM || iM.cameraSets.push(MM, rM)
      }
      mouseMove(MM, rM) {
        const iM = this.rings;
        if (null === iM) return;
        const OM = this.sample;
        OM[0] = MM.timeStamp, OM[1] = performance.now(), OM[2] = MM.movementX, OM[3] = MM.movementY, OM[4] = rM ? 1 : 0, iM.events.push(OM)
      }
      frame(MM, rM, iM, OM) {
        const SM = this.rings;
        if (null === SM || OM === QM.none) return;
        const jM = this.sample;
        jM[0] = performance.now(), jM[1] = MM, jM[2] = rM, jM[3] = iM, jM[4] = OM, SM.frames.push(jM)
      }
      change(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.changeAt(performance.now(), MM, rM)
      }
      changeAt(MM, rM, iM) {
        const OM = this.rings;
        if (null === OM) return;
        const SM = this.sample;
        SM[0] = MM, SM[1] = rM, SM[2] = iM, OM.changes.push(SM)
      }
      dumpText() {
        var MM, rM;
        const iM = this.rings;
        return [`look records (${this.startedClient}): ${mM.join(",")}`, ...null !== (MM = null === iM || void 0 === iM ? void 0 : iM.steps.lines()) && void 0 !== MM ? MM : [], `mousemove events: ${HM.join(",")}`, ...null !== (rM = null === iM || void 0 === iM ? void 0 : iM.events.lines()) && void 0 !== rM ? rM : []].join("\n")
      }
      toJson(MM, rM) {
        var iM;
        const SM = MM - 6e4,
          jM = this.rings,
          aM = function(MM, rM) {
            var iM;
            let OM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            const jM = null !== (iM = null === MM || void 0 === MM ? void 0 : MM.rows(OM, SM)) && void 0 !== iM ? iM : [];
            return {
              columns: rM,
              fromMs: 0 === jM.length ? null : jM[0][OM],
              rows: jM
            }
          };
        return {
          version: OM.c,
          client: null !== (iM = this.startedClient) && void 0 !== iM ? iM : "not started",
          savedAt: (new Date).toISOString(),
          savedAtMs: MM,
          keptMs: 6e4,
          page: window.location.href,
          userAgent: navigator.userAgent,
          devicePixelRatio: window.devicePixelRatio,
          screen: {
            width: window.screen.width,
            height: window.screen.height
          },
          Vd: null !== document.pointerLockElement,
          visibility: document.visibilityState,
          ...rM,
          outcomes: nM,
          frameKinds: QM,
          changes: zM,
          lookSteps: aM(null === jM || void 0 === jM ? void 0 : jM.steps, mM),
          mouseMoves: aM(null === jM || void 0 === jM ? void 0 : jM.events, HM, 1),
          frames: aM(null === jM || void 0 === jM ? void 0 : jM.frames, hM),
          cameraSets: aM(null === jM || void 0 === jM ? void 0 : jM.cameraSets, JM),
          pageChanges: aM(null === jM || void 0 === jM ? void 0 : jM.changes, dM)
        }
      }
      save(MM) {
        const rM = JSON.stringify(this.toJson(performance.now(), MM));
        (0, SM.c)(new Blob([rM], {
          type: "application/json"
        }), `bloxd-mouse-look-${(new Date).toISOString().replace(/[:.]/g,"-")}.json`)
      }
    }
  },
  40065: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => jM,
      d: () => SM
    });
    var OM = iM(22);

    function SM(MM) {
      return "refetchCode" === MM || "devDownloadJson" === MM || MM.startsWith("Plugin")
    }

    function jM(MM, rM) {
      "refetchCode" !== MM ? "Plugin|MobAiPlugin|ShowPetUi" !== MM ? Promise.all([iM.e(121), iM.e(122), iM.e(117), iM.e(119), iM.e(236)]).then((() => iM(44386))).then((iM => {
        let {
          runClientGameMessage: OM
        } = iM;
        OM(MM, rM)
      })).catch((rM => {
        console.error(`Game message ${MM} failed`, rM)
      })) : OM.i.Tz("showPetUi", rM) : OM.i.Tz("refetchCode")
    }
  },
  53658: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => OM,
      e: () => SM
    });
    const OM = ["recording", "freecam", "keyframe"];

    function SM() {
      const MM = crypto.getRandomValues(new Uint32Array(2));
      return BigInt(MM[1]) << 32n | BigInt(MM[0])
    }
  },
  34956: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => PM,
      f: () => nM
    });
    var OM = iM(19);
    const SM = 24,
      jM = "farNametags",
      aM = 1e5;

    function PM() {
      var MM;
      return null === (MM = OM.d.get("showDistantNametags")) || void 0 === MM || MM
    }

    function nM() {
      var MM;
      return null !== (MM = function() {
        const MM = new URLSearchParams(window.location.search).get(jM),
          rM = null === MM || "" === MM ? NaN : Number(MM);
        return Number.isFinite(rM) && rM >= 0 ? Math.min(rM, aM) : null
      }()) && void 0 !== MM ? MM : PM() ? 0 : SM
    }
  },
  45248: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      blockIdOf: () => zQ.e,
      clearWasmCameraScreen: () => lS,
      creativeItemIds: () => yO.creativeItemIds,
      decodeMapSettings: () => HQ,
      drainTextRerasters: () => Mn.b,
      enchantmentPerksOf: () => yO.enchantmentPerksOf,
      endGameHost: () => bQ,
      followCursorAim: () => mQ,
      followMenuPrefs: () => yj,
      loadAudio: () => EQ,
      loadClientGame: () => lQ,
      loadTextIcons: () => Mn.d,
      rasterText: () => cP.e,
      readBoardToEdit: () => QQ,
      readDrawCensus: () => hQ.f,
      setTextHost: () => Mn.g,
      setTextLocalPlayer: () => Mn.j,
      showInCreativeInvenOf: () => yO.showInCreativeInvenOf,
      startGameHost: () => eQ,
      startShellAnalytics: () => aQ,
      startSkyFeed: () => bn,
      textChanged: () => Mn.o,
      warmText: () => cP.h,
      wasmCameraScreen: () => yS
    });
    iM(37451);
    var OM = iM(19),
      SM = iM(37769),
      jM = iM(40240),
      aM = iM(22),
      PM = iM(3809),
      nM = iM(37767),
      QM = iM(1313),
      zM = iM(613),
      LM = iM(39230),
      mM = iM(5198),
      HM = iM(41714),
      hM = iM(41669);
    const JM = hM.Fb / 4,
      dM = hM.o.PlaySound,
      yM = hM.o.SoundReset,
      lM = mM.Y.ReplayFailed,
      EM = mM.Y.RecorderEvent;
    class UM {
      constructor(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.core = MM, this.memory = rM, this.audio = iM, this.serverIds = new Int32Array(256).fill(hM.Nc), this.kinds = new Uint16Array(256), this.idStr = new Array(256).fill(null), this.indexById = new Map, this.queries = void 0, this.buffer = null, this.viewPtr = -1, this.view = new DataView(new ArrayBuffer(hM.v.BYTES)), this.renderPtr = 0, this.vL = 0, this.renderCapacity = 0, this.render = new Float32Array(0), this.visPtr = 0, this.vis = new Uint8Array(0), this.renderBuffer = null, this.eventsBuffer = null, this.eventsPtr = 0, this.eventsLen = 0, this.events = new DataView(new ArrayBuffer(0)), this.audioView = null, this.scratchPtr = -1, this.scratchView = null, this.corruption = null, this.replay = null, this.queries = new hM.V(MM, (() => {
          this.scratchPtr = -1, this.ensureViews()
        }))
      }
      scratch() {
        return this.scratchPtr < 0 && (this.scratchPtr = this.core.eSM(), this.ensureViews()), this.scratchPtr
      }
      eventBytes(MM, rM) {
        const iM = this.eventView();
        return new Uint8Array(iM.buffer, iM.byteOffset + MM, rM)
      }
      get apiView() {
        return this.ensureViews(), this.view
      }
      ensureViews() {
        this.memory().buffer !== this.buffer && this.reView()
      }
      get localId() {
        return hM.v.localId(this.apiView, 0)
      }
      localDeaths() {
        return hM.v.localDeaths(this.apiView, 0)
      }
      rereadDirectory() {
        const MM = this.apiView,
          rM = hM.v.entRenderPtr(MM, 0),
          iM = hM.v.entVisPtr(MM, 0),
          OM = hM.v.entCapacity(MM, 0);
        if (rM !== this.renderPtr || iM !== this.visPtr || OM !== this.vL || this.renderBuffer !== this.buffer) {
          this.renderPtr = rM, this.visPtr = iM, this.vL = OM, this.renderBuffer = this.buffer;
          const MM = this.memoryView(Float32Array, rM, OM * JM, "the render array"),
            SM = this.memoryView(Uint8Array, iM, OM, "the visibility array");
          this.renderCapacity = MM && SM ? OM : 0, this.render = MM && SM ? MM : new Float32Array(0), this.vis = MM && SM ? SM : new Uint8Array(0)
        }
      }
      memoryView(MM, rM, iM, OM) {
        try {
          return (0, HM.l)(MM, this.memory().buffer, rM, iM, OM)
        } catch (SM) {
          return this.keepCorruption(SM), null
        }
      }
      memoryData(MM, rM, iM, OM) {
        try {
          return (0, HM.g)(this.memory().buffer, MM, rM, iM, OM)
        } catch (SM) {
          return this.keepCorruption(SM), null
        }
      }
      scratchData(MM, rM) {
        const iM = this.scratch(),
          OM = this.scratchView;
        return (null === OM || void 0 === OM ? void 0 : OM.buffer) === this.memory().buffer && OM.byteOffset === iM && OM.byteLength >= MM ? OM : (this.scratchView = this.memoryData(iM, MM, 8, rM), this.scratchView)
      }
      reportCorruption(MM) {
        this.keepCorruption(new HM.d(MM))
      }
      keepCorruption(MM) {
        if (!(MM instanceof HM.d)) throw MM;
        this.corruption ??= MM
      }
      throwCorruption() {
        if (this.corruption) throw this.corruption
      }
      walk(MM, rM, iM) {
        this.rereadDirectory(), this.throwCorruption();
        const {
          ptr: OM,
          len: SM
        } = MM;
        this.eventsPtr = OM, this.eventsLen = SM, this.eventsBuffer = null;
        const jM = this.eventView();
        for (let QM = 0; QM < SM;) {
          const MM = jM.getUint32(QM, !0),
            iM = 65535 & MM,
            OM = MM >>> 16,
            SM = QM + mM.U;
          if (iM === hM.o.EntitySpawned) {
            var aM;
            if (OM !== hM.Hb.BYTES) throw wM(iM, QM, OM);
            const MM = hM.Hb.serverId(jM, SM);
            this.spawned(MM, hM.Hb.index(jM, SM), hM.Hb.kind(jM, SM)), null === (aM = rM.entityAdded) || void 0 === aM || aM.call(rM, MM)
          } else if ((iM === hM.o.ChunkSlot || iM === hM.o.EntityInfoChanged) && !(0, hM.ge)(iM, jM, SM, OM, rM)) throw wM(iM, QM, OM);
          QM = SM + (0, mM.oe)(OM)
        }
        try {
          var PM;
          null === (PM = rM.afterPrescan) || void 0 === PM || PM.call(rM), this.throwCorruption(), !iM() && this.dispatch(MM, rM, iM) && (this.throwCorruption(), this.applyListener(), rM.afterWalk(MM.kind)), this.throwCorruption()
        } catch (nM) {
          throw nM instanceof HM.d && (this.corruption ??= nM), nM
        } finally {
          iM() || null !== this.corruption || this.applyDespawns(SM, rM)
        }
      }
      applyDespawns(MM, rM) {
        const iM = this.eventView();
        for (let SM = 0; SM < MM;) {
          const MM = iM.getUint32(SM, !0),
            jM = SM + mM.U;
          if ((65535 & MM) === hM.o.EntityDespawned && MM >>> 16 === hM.Hb.BYTES) {
            const MM = hM.Hb.serverId(iM, jM);
            var OM;
            if (this.despawned(MM, hM.Hb.index(iM, jM))) null === (OM = rM.entityRemoved) || void 0 === OM || OM.call(rM, MM)
          }
          SM = jM + (0, mM.oe)(MM >>> 16)
        }
        this.rereadDirectory()
      }
      dispatch(MM, rM, iM) {
        const {
          len: OM,
          net: SM,
          netOffsets: jM
        } = MM;
        let aM = this.eventView(),
          PM = 0;
        for (let eM = 0; eM < OM;) {
          const MM = aM.getUint32(eM, !0),
            OM = 65535 & MM,
            tM = MM >>> 16,
            gM = eM + mM.U;
          let uM = !1;
          if (PM < SM.length && jM[PM] === eM) rM.netEvent(SM[PM]), PM++, uM = !0;
          else if (OM === mM.Y.LocalPlayerBound) {
            var nM;
            if (tM !== mM.Hb) throw wM(OM, eM, tM);
            null === (nM = rM.localPlayerBound) || void 0 === nM || nM.call(rM, aM.getInt32(gM, !0)), uM = !0
          } else if (OM === mM.Y.LocalHurt) {
            var QM;
            if (tM !== mM.Eb) throw wM(OM, eM, tM);
            null === (QM = rM.localHurt) || void 0 === QM || QM.call(rM, aM.getInt32(gM, !0), aM.getFloat32(gM + 4, !0), aM.getUint32(gM + 8, !0)), uM = !0
          } else if (OM === mM.Y.AttackHit) {
            var zM;
            if (tM !== mM.b) throw wM(OM, eM, tM);
            const MM = aM.getFloat32(gM, !0),
              iM = aM.getFloat32(gM + 4, !0),
              SM = aM.getFloat32(gM + 8, !0),
              jM = aM.getUint32(gM + 12, !0);
            null === (zM = rM.attackHit) || void 0 === zM || zM.call(rM, MM, iM, SM, 0 !== (jM & mM.k.Crit), 0 !== (jM & mM.k.HitSelf))
          } else if (OM === mM.Y.PhysicsType) {
            var LM;
            if (tM !== mM.cc) throw wM(OM, eM, tM);
            null === (LM = rM.physicsType) || void 0 === LM || LM.call(rM, aM.getUint32(gM, !0), aM.getInt32(gM + 4, !0)), uM = !0
          } else if (OM === mM.Y.VehicleEffect) {
            var HM;
            const MM = bM(aM, gM, tM);
            if (null === MM) throw wM(OM, eM, tM);
            null === (HM = rM.vehicleEffect) || void 0 === HM || HM.call(rM, MM.op, MM.name, MM.icon, MM.level, MM.durationMs), uM = !0
          } else if (OM === mM.Y.ZoomChanged) {
            var JM;
            if (tM !== mM.Vd) throw wM(OM, eM, tM);
            null === (JM = rM.zoomChanged) || void 0 === JM || JM.call(rM, aM.getFloat32(gM, !0), aM.getUint8(gM + 4)), uM = !0
          } else if (OM === mM.Y.ZoomDisabled) {
            var UM;
            if (0 !== tM) throw wM(OM, eM, tM);
            null === (UM = rM.zoomDisabled) || void 0 === UM || UM.call(rM), uM = !0
          } else if (OM === mM.Y.BhopDisabled) {
            var GM;
            if (0 !== tM) throw wM(OM, eM, tM);
            null === (GM = rM.bhopDisabled) || void 0 === GM || GM.call(rM), uM = !0
          } else if (OM === mM.Y.GameCamera) {
            var CM;
            null === (CM = rM.gameCamera) || void 0 === CM || CM.call(rM, new Uint8Array(aM.buffer, aM.byteOffset + gM, tM).slice()), uM = !0
          } else if (OM === hM.o.ChunkSlot || OM === hM.o.EntityInfoChanged);
          else if (OM >= dM && OM <= yM) {
            if (this.audio && !this.audio.onAudioEvent(OM, aM, gM, tM)) throw wM(OM, eM, tM)
          } else if (OM >= lM && OM <= EM) {
            if (this.replay) {
              if (!this.replay.onReplayEvent(OM, aM, gM, tM)) throw wM(OM, eM, tM);
              uM = !0
            }
          } else if (OM >= hM.bd && OM <= hM.dd && OM !== mM.Y.EnvLighting) {
            if (!(0, hM.ge)(OM, aM, gM, tM, rM)) throw wM(OM, eM, tM);
            uM = !0
          }
          if (uM) {
            if (iM()) return !1;
            aM = this.eventView()
          }
          eM = gM + (0, mM.oe)(tM)
        }
        return !iM()
      }
      applyListener() {
        var MM;
        if (!this.audio) return;
        const rM = hM.v.audioViewPtr(this.apiView, 0),
          iM = this.memory().buffer;
        let OM = this.audioView;
        (null === (MM = OM) || void 0 === MM ? void 0 : MM.buffer) === iM && OM.byteOffset === rM || (OM = (0, HM.g)(iM, rM, hM.w.BYTES, 8, "the audio view"), this.audioView = OM), OM && this.audio.applyListener(OM)
      }
      indexOf(MM) {
        return this.indexById.get("number" === typeof MM ? MM : +MM)
      }
      isLocal(MM) {
        return MM !== hM.Nc && MM === hM.v.localId(this.apiView, 0)
      }
      XE(MM) {
        const rM = [0, 0, 0];
        return this.readPosition("number" === typeof MM ? MM : +MM, rM) ? rM : null
      }
      readPosition(MM, rM) {
        const iM = this.apiView;
        if (void 0 !== this.indexById.get(MM) && this.isLocal(MM)) {
          for (let MM = 0; MM < 3; MM++) rM[MM] = hM.v.localPos(iM, 0, MM);
          return !0
        }
        return this.readDrawnPosition(MM, rM)
      }
      readDrawnPosition(MM, rM) {
        const iM = this.apiView,
          OM = this.indexById.get(MM);
        if (void 0 === OM || OM >= this.renderCapacity) return rM[0] = rM[1] = rM[2] = NaN, !1;
        const SM = OM * JM;
        for (let jM = 0; jM < 3; jM++) rM[jM] = this.render[SM + jM] + hM.v.origin(iM, 0, jM);
        return !0
      }
      checkValid(MM) {
        return void 0 !== this.indexOf(MM)
      }
      isAlive(MM) {
        const rM = this.indexOf(MM);
        if (void 0 === rM) return null;
        if (this.ensureViews(), rM >= this.renderCapacity) return null;
        const iM = this.vis[rM];
        return 0 === iM ? null : 0 !== (iM & hM.de.Alive)
      }
      getEntityType(MM) {
        const rM = this.indexOf(MM);
        return void 0 === rM ? this.isLocal("number" === typeof MM ? MM : +MM) ? "Player" : null : CM(this.kinds[rM])
      }
      spawned(MM, rM, iM) {
        if (rM >= 1048576) throw new HM.d(`entity ${MM} spawned at index ${rM}`);
        this.ensureIndex(rM), this.serverIds[rM] === MM && null !== this.idStr[rM] || (this.idStr[rM] = String(MM)), this.serverIds[rM] = MM, this.kinds[rM] = iM, this.indexById.set(MM, rM)
      }
      despawned(MM, rM) {
        let iM = !1;
        return this.indexById.get(MM) === rM && (this.indexById.delete(MM), iM = !0), rM < this.serverIds.length && this.serverIds[rM] === MM && (this.serverIds[rM] = hM.Nc, this.kinds[rM] = 0, this.idStr[rM] = null), iM
      }
      ensureIndex(MM) {
        const rM = this.serverIds.length;
        if (MM < rM) return;
        let iM = 2 * rM;
        for (; iM <= MM;) iM *= 2;
        const OM = new Int32Array(iM).fill(hM.Nc);
        OM.set(this.serverIds), this.serverIds = OM;
        const SM = new Uint16Array(iM);
        SM.set(this.kinds), this.kinds = SM;
        for (let jM = rM; jM < iM; jM++) this.idStr.push(null)
      }
      eventView() {
        const MM = this.memory().buffer;
        return MM !== this.eventsBuffer && (this.eventsBuffer = MM, this.events = new DataView(MM, this.eventsPtr, this.eventsLen)), this.events
      }
      reView() {
        const MM = this.memory().buffer;
        this.buffer = MM, this.viewPtr < 0 && (this.viewPtr = this.core.bSM()), this.view = new DataView(MM, this.viewPtr, hM.v.BYTES), this.rereadDirectory()
      }
    }

    function GM(MM) {
      return MM >>> hM.e === hM.s.Item
    }

    function CM(MM) {
      var rM, iM;
      const OM = MM & hM.f;
      switch (MM >>> hM.e) {
        case hM.s.Lifeform:
          return null !== (rM = zM.j[OM]) && void 0 !== rM ? rM : null;
        case hM.s.Throwable:
          return null !== (iM = LM.j[OM]) && void 0 !== iM ? iM : null;
        case hM.s.Mesh:
          return "Mesh";
        case hM.s.Audio:
          return "AudioEntity";
        case hM.s.Item:
          return "Item";
        default:
          return null
      }
    }
    const eM = new TextDecoder;

    function bM(MM, rM, iM) {
      if (iM < mM.Cd.HEAD_BYTES) return null;
      const OM = MM.getUint32(rM, !0),
        SM = MM.getUint32(rM + 20, !0),
        jM = MM.getUint32(rM + 24, !0),
        aM = mM.Cd.HEAD_BYTES + (0, mM.oe)(SM);
      if (OM !== mM.Cd.UPDATE && OM !== mM.Cd.REMOVE || SM > iM || aM + jM > iM) return null;
      const PM = (iM, OM) => eM.decode(new Uint8Array(MM.buffer, MM.byteOffset + rM + iM, OM)),
        nM = MM.getFloat64(rM + 12, !0);
      return {
        op: OM,
        level: MM.getFloat64(rM + 4, !0),
        durationMs: Number.isNaN(nM) ? null : nM,
        name: PM(mM.Cd.HEAD_BYTES, SM),
        icon: PM(aM, jM)
      }
    }

    function wM(MM, rM, iM) {
      return new HM.d(`event ${MM} at ${rM} of ${iM} bytes`)
    }
    var tM = iM(6944),
      gM = iM(332),
      uM = iM(1229),
      RM = iM(40231),
      pM = iM(40065),
      WM = iM(2058),
      sM = iM(42111),
      DM = iM(2e3),
      kM = iM(40261),
      ZM = iM(40287),
      oM = iM(40279),
      fM = iM(41706),
      YM = iM(2622),
      NM = iM(40253),
      AM = iM(40285);

    function xM(MM) {
      if (!(0, AM.g)(MM)) return null;
      const rM = Number(MM);
      return (0 | rM) === rM ? rM : null
    }
    class vM {
      constructor(MM) {
        this.api = MM, this.bodyHeading = 0, this.viewHeading = 0, this.defaultPose = (0, NM.h)(), this.defaultPoseRead = !1, this.defaultFov = 0, this.baseFov = 0, this.aspect = 1, this.QS = null, this.entityLive = !1, this.entityFeet = [0, 0, 0], this.entityAim = [0, 0, 0], this.entityHeading = 0, this.entityPitch = null, this.entityLookHeading = null, this.localId = hM.Nc, this.localName = String(hM.Nc)
      }
      readView() {
        this.defaultPoseRead = !1, this.QS = null;
        const MM = this.api.queries.directorView() >= hM.sb.BYTES ? this.api.scratchData(hM.sb.BYTES, "the director's view") : null;
        null !== MM && (this.defaultFov = (0, DM.J)(hM.sb.fov(MM, 0)), this.baseFov = (0, DM.J)(hM.sb.baseFov(MM, 0)), this.aspect = hM.sb.aspect(MM, 0), this.bodyHeading = hM.sb.bodyHeading(MM, 0))
      }
      getViewHeading() {
        return this.viewHeading
      }
      setViewHeading(MM) {
        this.viewHeading = MM
      }
      get localPlayerId() {
        const MM = hM.v.localId(this.api.apiView, 0);
        return MM !== this.localId && (this.localId = MM, this.localName = String(MM)), this.localName
      }
      getEntityPosition(MM) {
        return this.readEntity(MM) ? this.entityFeet : null
      }
      getEntityAimPoint(MM) {
        return this.readEntity(MM) ? this.entityAim : null
      }
      getEntityHeading(MM) {
        const rM = xM(MM);
        if (null === rM) return null;
        const iM = hM.v.localId(this.api.apiView, 0);
        return rM === iM && iM !== hM.Nc ? this.viewHeading : this.readEntity(MM) ? this.entityHeading : null
      }
      getEntityPitch(MM) {
        return this.readEntity(MM) ? this.entityPitch : null
      }
      getEntityLookHeading(MM) {
        return this.readEntity(MM) ? this.entityLookHeading : null
      }
      raycastTerrain(MM, rM, iM) {
        const OM = this.api.queries.cameraSweep(MM[0], MM[1], MM[2], rM[0], rM[1], rM[2], iM);
        return OM < iM - 1e-6 ? OM : null
      }
      getDefaultPose() {
        if (this.defaultPoseRead) return this.defaultPose;
        this.defaultPoseRead = !0;
        const MM = this.defaultPose;
        MM.fov = this.defaultFov;
        const rM = this.api.queries.directorDefaultPose() >= hM.lb.BYTES ? this.api.scratchData(hM.lb.BYTES, "the director's default pose") : null;
        if (null === rM) return MM;
        for (let iM = 0; iM < 3; iM++) MM.position[iM] = hM.lb.eye(rM, 0, iM);
        return MM.heading = hM.lb.heading(rM, 0), MM.pitch = hM.lb.pitch(rM, 0), MM
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
      readEntity(MM) {
        const rM = xM(MM);
        if (null === rM) return !1;
        if (rM === this.QS) return this.entityLive;
        this.QS = rM;
        const iM = this.api.queries.directorEntity(rM) >= hM.nb.BYTES ? this.api.scratchData(hM.nb.BYTES, "the director's entity") : null;
        if (this.entityLive = null !== iM, null === iM) return !1;
        for (let jM = 0; jM < 3; jM++) this.entityFeet[jM] = hM.nb.feet(iM, 0, jM), this.entityAim[jM] = this.entityFeet[jM];
        this.entityAim[1] += hM.nb.eyeHeight(iM, 0), this.entityHeading = hM.nb.heading(iM, 0);
        const OM = hM.nb.pitch(iM, 0);
        this.entityPitch = Number.isNaN(OM) ? null : OM;
        const SM = hM.nb.lookHeading(iM, 0);
        return this.entityLookHeading = Number.isNaN(SM) ? null : SM, !0
      }
    }
    const FM = {
        mode: "default"
      },
      BM = {
        show: () => {},
        clear: () => {}
      };

    function XM() {
      return "undefined" !== typeof document && "hidden" === document.visibilityState
    }
    class IM {
      constructor(MM) {
        this.options = MM, this.uL = void 0, this.director = void 0, this.latest = FM, this.pending = void 0, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.look = {
          PD: 0,
          nD: 0
        }, this.pointedAt = {
          heading: 0,
          pitch: 0
        }, this.engaged = !1, this.calledThisFrame = !1, this.holding = !1, this.lastCallMs = 0, this.answeredPose = !1, this.Sd = new Int32Array(3 * hM.Kd), this.centresLen = 0, this.centresUnsent = !1, this.next = new Int32Array(3 * hM.Kd), this.uL = new vM(MM.api), this.director = new oM.d(this.uL)
      }
      settingsChanged(MM) {
        let rM = FM;
        if (MM.length > 0) try {
          rM = (0, fM.c)(MM)
        } catch {}
        this.latest = rM, this.pending = rM
      }
      call(MM, rM, iM, OM, SM, jM) {
        var aM, PM;
        let nM;
        this.holding = !1;
        try {
          nM = this.answer(MM, rM, iM, OM, SM, jM)
        } catch (mM) {
          var QM, zM;
          throw this.answeredPose = !1, null === (QM = (zM = this.options).showFacing) || void 0 === QM || QM.call(zM, null), mM
        }
        const LM = this.answeredPose && 0 === (OM & hM.qb.Held);
        return this.answeredPose = nM !== hM.kb.None, this.holding = this.answeredPose && !LM, null === (aM = (PM = this.options).showFacing) || void 0 === aM || aM.call(PM, this.holding ? this.facing : null), nM
      }
      holdsView() {
        return this.holding
      }
      answer(MM, rM, iM, OM, SM, jM) {
        this.calledThisFrame = !0, this.engaged = !0, this.lastCallMs = this.now();
        const {
          uL: aM
        } = this;
        aM.readView();
        if (0 !== (OM & hM.qb.Held) || aM.setViewHeading((0, kM.s)(aM.bodyHeading)), void 0 !== this.pending) {
          const MM = this.pending;
          this.pending = void 0, this.director.setSettings(MM), this.syncShownSettings()
        }
        this.readLook((0, YM.h)(rM), (0, YM.h)(iM), OM, (0, YM.h)(SM), (0, YM.h)(jM));
        const PM = this.director.update(MM / 1e3, this.look);
        if (this.syncShownSettings(), this.writeCentres(this.director.getLoadingPositions()), this.hidden() || this.screen().show(this.director.getScreenFade(), this.director.getSettings()), !PM) return hM.kb.None;
        const [nM, QM, zM] = PM.position;
        if (0 === this.options.api.queries.directorPose(nM, QM, zM, (0, kM.s)(PM.heading), (0, kM.h)(PM.pitch), (0, DM.l)(PM.fov))) return hM.kb.None;
        if ("default" === this.director.getSettings().mode) return hM.kb.Pose;
        switch (this.facing) {
          case "camera":
            return hM.kb.FaceCamera;
          case "cursor":
            return hM.kb.FaceCursor;
          default:
            return hM.kb.FaceMovement
        }
      }
      afterFrame(MM) {
        MM ? (this.calledThisFrame || (this.holding = !1, this.engaged && this.idle()), this.calledThisFrame = !1) : this.centresLen > 0 && this.hidden() && this.now() - this.lastCallMs > 1e3 && this.setCentres(0), this.centresUnsent && this.sendCentres()
      }
      reset() {
        this.latest = FM, this.idle()
      }
      restart() {
        const MM = this.holding;
        this.idle(), this.holding = MM
      }
      idle() {
        var MM, rM;
        this.engaged && this.screen().clear(), this.engaged = !1, this.holding = !1, this.director = new oM.d(this.uL), this.pending = this.latest, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.answeredPose = !1, null === (MM = (rM = this.options).showFacing) || void 0 === MM || MM.call(rM, null), this.setCentres(0)
      }
      syncShownSettings() {
        const MM = this.director.getSettings();
        if (MM === this.shownSettings) return;
        this.shownSettings = MM;
        const rM = (0, ZM.f)(MM);
        this.facing = rM.facing, this.mouseTurns = rM.mouseTurns
      }
      readLook(MM, rM, iM, OM, SM) {
        const jM = this.look,
          aM = 0 !== (iM & hM.qb.LookPointed);
        if (null === this.mouseTurns && !aM) return jM.PD = 0, jM.nD = 0, void(jM.pointedAt = void 0);
        let PM;
        aM && (this.pointedAt.heading = OM, this.pointedAt.pitch = SM, PM = this.pointedAt);
        const {
          uL: nM
        } = this;
        nM.setViewHeading((0, ZM.c)(nM.getViewHeading(), MM, rM, PM, "look" === this.mouseTurns, jM))
      }
      writeCentres(MM) {
        const rM = this.next,
          iM = Math.min(MM.length, hM.Kd);
        for (let OM = 0; OM < iM; OM++)
          for (let iM = 0; iM < 3; iM++) rM[3 * OM + iM] = Math.floor(MM[OM][iM] / hM.A);
        this.setCentres(iM)
      }
      setCentres(MM) {
        const {
          Sd: rM,
          next: iM
        } = this;
        let OM = MM === this.centresLen;
        for (let SM = 0; OM && SM < 3 * MM; SM++) OM = rM[SM] === iM[SM];
        OM || (rM.fill(0), rM.set(iM.subarray(0, 3 * MM)), this.centresLen = MM, this.centresUnsent = !0, this.sendCentres())
      }
      sendCentres() {
        const MM = this.options.cmd();
        null !== MM && (0, hM.Kf)(MM, 0, this.Sd, this.centresLen) && (this.centresUnsent = !1)
      }
      screen() {
        var MM, rM, iM;
        return null !== (MM = null === (rM = (iM = this.options).screen) || void 0 === rM ? void 0 : rM.call(iM)) && void 0 !== MM ? MM : BM
      }
      hidden() {
        var MM;
        return (null !== (MM = this.options.isPageHidden) && void 0 !== MM ? MM : XM)()
      }
      now() {
        var MM, rM, iM;
        return null !== (MM = null === (rM = (iM = this.options).now) || void 0 === rM ? void 0 : rM.call(iM)) && void 0 !== MM ? MM : performance.now()
      }
    }
    var KM = iM(40165),
      qM = iM(41871);
    const TM = hM.A * hM.A * hM.A,
      VM = Math.log2(hM.A),
      cM = hM.A - 1,
      Mr = 65535,
      rr = hM.M.BYTES / 4,
      ir = new Uint16Array(TM);

    function Or(MM, rM, iM) {
      return MM * hM.A * hM.A + rM * hM.A + iM
    }
    class Sr {
      constructor(MM) {
        this.chunk = MM
      }
      get data() {
        return this.chunk.gameVoxels()
      }
      index(MM, rM, iM) {
        return Or(MM, rM, iM)
      }
    }
    class jr {
      constructor() {
        this.ids = new Map, this.cleared = new Set, this.layers = 0, this.patched = null, this.from = null
      }
    }
    class ar {
      constructor(MM, rM, iM, OM) {
        this.table = MM, this.slot = rM, this.generation = iM, this.epoch = OM, this.Xm = new Sr(this), this.writes = null, this.writeCount = 0, this.shownVersion = 0, this.shownCore = -1, this.shownWrites = -1, this.data = ir, this.dataPtr = 0, this.dataBuffer = null, this.dataStamp = -1, this.version = 0, this.layers = null, this.layersVersion = -1, this.layersPtr = -1, this.staleLayers = 0
      }
      get Kh() {
        return this.voxelData(), this.version === this.shownCore && this.writeCount === this.shownWrites || (this.shownCore = this.version, this.shownWrites = this.writeCount, this.shownVersion = this.table.nextVersion()), this.shownVersion
      }
      get NH() {
        const MM = this.gameVoxels(),
          rM = this.layers ??= new Uint16Array(hM.A);
        this.layersVersion === this.version && this.layersPtr === this.dataPtr || (this.layersVersion = this.version, this.layersPtr = this.dataPtr, this.staleLayers = -1);
        for (let iM = 0; 0 !== this.staleLayers; iM++) {
          const OM = 1 << iM;
          0 !== (this.staleLayers & OM) && (this.staleLayers &= ~OM, rM[iM] = Pr(MM, iM))
        }
        return rM
      }
      voxelData() {
        return this.dataStamp === this.table.stamp && 0 !== this.data.length ? this.data : this.reread()
      }
      gameVoxels() {
        const MM = this.voxelData(),
          rM = this.writes;
        if (null === rM || 0 === rM.ids.size) return MM;
        if (rM.from !== MM) {
          const iM = rM.patched ??= new Uint16Array(TM);
          iM.set(MM);
          for (const [MM, OM] of rM.ids) iM[MM] = OM;
          rM.from = MM
        }
        return rM.patched
      }
      written(MM) {
        var rM;
        return null === (rM = this.writes) || void 0 === rM ? void 0 : rM.ids.get(MM)
      }
      hasWrites() {
        return null !== this.writes && 0 !== this.writes.ids.size
      }
      write(MM, rM, iM) {
        const OM = this.writes ??= new jr;
        OM.ids.set(MM, rM), iM && OM.cleared.add(MM), null !== OM.from && (OM.patched[MM] = rM);
        const SM = 1 << (MM >> VM & cM);
        OM.layers |= SM, this.staleLayers |= SM, this.writeCount++
      }
      clearWrites() {
        const MM = this.writes;
        null !== MM && (this.staleLayers |= MM.layers, MM.ids.clear(), MM.cleared.clear(), MM.layers = 0, MM.from = null)
      }
      dataCleared(MM) {
        var rM;
        return !0 === (null === (rM = this.writes) || void 0 === rM ? void 0 : rM.cleared.has(MM))
      }
      reread() {
        this.dataStamp = this.table.stamp;
        const MM = this.table.slotWords(),
          rM = this.slot * rr;
        if (this.epoch !== this.table.epoch || rM + rr > MM.length || 0 === MM[rM + 3] || MM[rM + 2] !== this.generation) return this.data = ir, this.dataPtr = 0, ir;
        this.version = MM[rM + 1];
        const iM = MM[rM + 0],
          OM = MM.buffer;
        return iM === this.dataPtr && OM === this.dataBuffer || (this.dataPtr = iM, this.dataBuffer = OM, this.data = this.table.voxelsAt(OM, iM)), this.data
      }
    }

    function Pr(MM, rM) {
      const iM = MM[rM * hM.A];
      for (let OM = 0; OM < hM.A; OM++) {
        const SM = Or(OM, rM, 0);
        for (let rM = 0; rM < hM.A; rM++)
          if (MM[SM + rM] !== iM) return Mr
      }
      return iM
    }
    const nr = new Uint32Array(0);

    function Qr(MM, rM, iM) {
      return Or(MM & cM, rM & cM, iM & cM)
    }
    class zr {
      constructor(MM, rM) {
        this.memory = MM, this.apiView = rM, this.chunks = new Map, this.written = [], this.lastKey = -1, this.lastChunk = void 0, this.slotsPtr = 0, this.slotsLen = 0, this.slotsBuffer = null, this.slots = nr, this.walkPtr = 0, this.walkLen = 0, this.walkBuffer = null, this.walk = nr, this.epoch = 0, this.stamp = 0, this.versions = 0, this.corruption = null
      }
      apply(MM, rM, iM, OM, SM, jM) {
        if (this.lastKey = -1, this.lastChunk = void 0, this.stamp++, jM === hM.Q.ResetAll) return this.chunks.clear(), void this.epoch++;
        if (jM !== hM.Q.Stored && jM !== hM.Q.Unloaded) throw new HM.d(`ChunkSlot flags ${jM}`);
        const aM = (0, qM.b)(MM, rM, iM);
        if (aM < 0) return;
        if (jM === hM.Q.Unloaded) return void this.chunks.delete(aM);
        const PM = this.chunks.get(aM);
        (null === PM || void 0 === PM ? void 0 : PM.slot) === OM && PM.generation === SM || this.chunks.set(aM, new ar(this, OM, SM, this.epoch))
      }
      touch() {
        this.stamp++, this.clearOverlay(), this.viewWalkThrough()
      }
      refresh() {
        if (this.stamp++, this.corruption) throw this.corruption;
        const MM = this.apiView(),
          rM = hM.v.chunkSlotsPtr(MM, 0),
          iM = hM.v.chunkSlotsLen(MM, 0);
        rM === this.slotsPtr && iM === this.slotsLen || (this.slotsPtr = rM, this.slotsLen = iM, this.slotsBuffer = null, this.slotWords()), this.viewWalkThrough(), this.clearOverlay()
      }
      viewWalkThrough() {
        const MM = this.apiView(),
          rM = hM.v.walkThroughPtr(MM, 0),
          iM = hM.v.walkThroughLen(MM, 0);
        rM === this.walkPtr && iM === this.walkLen || (this.walkPtr = rM, this.walkLen = iM, this.walkBuffer = null, this.walkWords())
      }
      clearOverlay() {
        for (const MM of this.written) MM.clearWrites();
        this.written.length = 0
      }
      nextVersion() {
        return ++this.versions
      }
      slotWords() {
        const MM = this.memory().buffer;
        var rM;
        MM !== this.slotsBuffer && (this.slotsBuffer = MM, this.slots = null !== (rM = (0, HM.l)(Uint32Array, MM, this.slotsPtr, this.slotsLen * rr, "the chunk directory")) && void 0 !== rM ? rM : nr);
        return this.slots
      }
      voxelsAt(MM, rM) {
        try {
          var iM;
          return null !== (iM = (0, HM.l)(Uint16Array, MM, rM, TM, "a chunk's voxels")) && void 0 !== iM ? iM : ir
        } catch (OM) {
          if (!(OM instanceof HM.d)) throw OM;
          return this.corruption ??= OM, ir
        }
      }
      chunk(MM, rM, iM) {
        var OM;
        return null !== (OM = this.chunks.get((0, qM.b)(MM, rM, iM))) && void 0 !== OM ? OM : null
      }
      isLoaded(MM, rM, iM) {
        return void 0 !== this.chunkAt(Math.floor(MM), Math.floor(rM), Math.floor(iM))
      }
      jP(MM, rM, iM) {
        var OM;
        const SM = Math.floor(MM),
          jM = Math.floor(rM),
          aM = Math.floor(iM),
          PM = this.chunkAt(SM, jM, aM);
        if (!PM) return 0;
        const nM = Qr(SM, jM, aM);
        return null !== (OM = PM.written(nM)) && void 0 !== OM ? OM : PM.voxelData()[nM]
      }
      setOverlay(MM, rM, iM, OM) {
        let SM = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const jM = this.chunkAt(MM, rM, iM);
        return !!jM && (jM.hasWrites() || this.written.push(jM), jM.write(Qr(MM, rM, iM), OM, SM), !0)
      }
      version(MM, rM, iM) {
        var OM, SM;
        return null !== (OM = null === (SM = this.chunks.get((0, qM.b)(MM, rM, iM))) || void 0 === SM ? void 0 : SM.Kh) && void 0 !== OM ? OM : null
      }
      scan(MM, rM, iM, OM, SM, jM, aM, PM) {
        const nM = hM.A;
        let QM = 0;
        for (let zM = Math.floor(rM / nM); zM * nM < SM; zM++) {
          const LM = zM * nM,
            mM = Math.min(SM - LM, nM);
          for (let SM = Math.floor(MM / nM); SM * nM < OM; SM++) {
            const HM = SM * nM,
              hM = Math.min(OM - HM, nM);
            for (let OM = Math.floor(iM / nM); OM * nM < jM; OM++) {
              const JM = this.chunks.get((0, qM.b)(SM, zM, OM));
              if (!JM) continue;
              const dM = OM * nM,
                yM = Math.max(iM - dM, 0),
                lM = Math.min(jM - dM, nM),
                EM = JM.NH,
                UM = JM.gameVoxels();
              for (let iM = Math.max(rM - LM, 0); iM < mM; iM++) {
                const rM = EM[iM];
                if (rM === Mr || 0 !== aM[rM]) {
                  QM++;
                  for (let rM = Math.max(MM - HM, 0); rM < hM; rM++) {
                    const MM = Or(rM, iM, 0);
                    for (let OM = yM; OM < lM; OM++) {
                      const SM = UM[MM + OM];
                      0 !== aM[SM] && PM.push(HM + rM, LM + iM, dM + OM, SM)
                    }
                  }
                }
              }
            }
          }
        }
        return QM
      }
      columnTops(MM, rM, iM, OM, SM, jM, aM, PM, nM) {
        (0, KM.e)(((MM, rM, iM) => {
          var OM;
          return null !== (OM = this.chunks.get((0, qM.b)(MM, rM, iM))) && void 0 !== OM ? OM : null
        }), Mr, MM, rM, iM, OM, SM, jM, aM, PM, nM)
      }
      dataCleared(MM, rM, iM) {
        var OM;
        const SM = Math.floor(MM),
          jM = Math.floor(rM),
          aM = Math.floor(iM);
        return !0 === (null === (OM = this.chunkAt(SM, jM, aM)) || void 0 === OM ? void 0 : OM.dataCleared(Qr(SM, jM, aM)))
      }
      isWalkThrough(MM) {
        if (!Number.isInteger(MM) || MM < 0 || MM > 65535) return !1;
        const rM = this.walkWords(),
          iM = MM >>> 5;
        return iM < rM.length && 1 === (rM[iM] >>> (31 & MM) & 1)
      }
      walkWords() {
        const MM = this.memory().buffer;
        var rM;
        MM !== this.walkBuffer && (this.walkBuffer = MM, this.walk = null !== (rM = (0, HM.l)(Uint32Array, MM, this.walkPtr, this.walkLen, "the walk-through bits")) && void 0 !== rM ? rM : nr);
        return this.walk
      }
      chunkAt(MM, rM, iM) {
        if ((0 | MM) !== MM || (0 | rM) !== rM || (0 | iM) !== iM) return;
        const OM = (0, qM.b)(MM >> VM, rM >> VM, iM >> VM);
        return OM !== this.lastKey && (this.lastKey = OM, this.lastChunk = this.chunks.get(OM)), this.lastChunk
      }
    }
    var Lr = iM(39507),
      mr = iM(38784),
      Hr = iM(39210),
      hr = iM(37758),
      Jr = iM(37554),
      dr = iM(34985),
      yr = iM(40173),
      lr = iM(181);
    const Er = ["ambient", "cars", "crowd", "customGame_horror", "dig", "fire", "fishing", "gameStart", "gunMisc", "gunPistol", "gunRifle", "gunSemiAutomatic", "gunShotgun", "gunSubmachineGun", "mobBear", "mobCat", "mobCow", "mobCrone", "mobDeer", "mobDog", "mobFennec", "mobGolem", "mobGorilla", "mobHorse", "mobKnight", "mobPig", "mobReaver", "mobSheep", "mobSkeleton", "mobStag", "mobStalker", "mobWarper", "mobWraith", "mobZombie", "note", "phoneAndMoney", "police", "randomBeep", "randomCannon", "randomCash", "randomExp", "randomFallsmall", "randomFire", "randomFirecracker", "randomItems", "randomLaugh", "randomMagic", "randomSplash", "rpg", "step", "survivalFactory", "town"],
      Ur = [
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
      Gr = Ur.map((MM => {
        let [rM] = MM;
        return rM
      })),
      Cr = Uint8Array.from(Ur, (MM => {
        let [, rM] = MM;
        return rM
      })),
      er = {
        semi_automatic: 11,
        submachine: 13,
        rifle: 10,
        pistol: 9,
        shotgun: 12
      },
      br = 8,
      wr = [
        [20, 3],
        [23, 3],
        [26, 2],
        [30, 3],
        [57, 4],
        [83, 2],
        [86, 2],
        [115, 3],
        [125, 4],
        [129, 4],
        [137, 4],
        [192, 4],
        [196, 3],
        [199, 3],
        [202, 5],
        [219, 2],
        [221, 3],
        [224, 3],
        [227, 4],
        [284, 4],
        [289, 5],
        [295, 5],
        [300, 4],
        [304, 8],
        [319, 5],
        [324, 8],
        [332, 4],
        [344, 4],
        [354, 4],
        [358, 5],
        [363, 4],
        [367, 4],
        [371, 4],
        [375, 6],
        [381, 6],
        [387, 4],
        [392, 4],
        [397, 4],
        [401, 3],
        [404, 9],
        [434, 4]
      ];
    var tr = iM(37713),
      gr = iM(37737),
      ur = iM(37730),
      Rr = iM(222);
    class pr {
      constructor(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Rr.d;
        this.sound = MM, this.onError = rM, this.idle = iM, this.queue = [], this.asked = new Set, this.cancelIdle = null, this.gen = 0, this.onIdle = MM => {
          this.cancelIdle = null;
          try {
            if (MM.timeRemaining() >= 1) {
              let MM = this.queue.shift();
              for (; void 0 !== MM && !this.load(MM);) MM = this.queue.shift()
            }
          } catch (rM) {
            this.onError(rM)
          } finally {
            this.schedule()
          }
        }
      }
      preload(MM) {
        const rM = [...MM].sort(((MM, rM) => MM - rM));
        for (const iM of rM) this.asked.has(iM) || (this.asked.add(iM), this.queue.push(iM));
        this.schedule()
      }
      cancel() {
        var MM;
        this.queue.length = 0, this.asked.clear(), this.gen++, null === (MM = this.cancelIdle) || void 0 === MM || MM.call(this), this.cancelIdle = null
      }
      schedule() {
        null === this.cancelIdle && this.queue.length > 0 && (this.cancelIdle = this.idle(this.onIdle))
      }
      load(MM) {
        const rM = this.sound(MM, !1),
          iM = this.sound(MM, !0),
          [OM, SM] = "unloaded" === rM.state() && "unloaded" !== iM.state() ? [iM, rM] : [rM, iM],
          jM = this.gen,
          aM = () => {
            try {
              jM === this.gen && "unloaded" === SM.state() && SM.load()
            } catch (MM) {
              this.onError(MM)
            }
          },
          PM = OM.state();
        return "unloaded" === PM ? (OM.once("load", aM), OM.load(), !0) : "unloaded" === SM.state() && ("loading" === PM ? (OM.once("load", aM), !1) : (SM.load(), !0))
      }
    }
    var Wr = iM(41993);

    function sr(MM) {
      var rM;
      const iM = function(MM) {
        let rM = 0,
          iM = Gr.length;
        for (; rM < iM;) {
          const OM = rM + iM >>> 1;
          Gr[OM] < MM ? rM = OM + 1 : iM = OM
        }
        return rM
      }(MM);
      if ("" === MM || null === (rM = Gr[iM]) || void 0 === rM || !rM.startsWith(MM)) return null;
      if (Gr[iM] === MM) return [iM, 1];
      let OM = iM + 1;
      for (; OM < Gr.length && Gr[OM].startsWith(MM);) OM++;
      return [iM, OM - iM]
    }

    function Dr(MM) {
      let [rM, iM] = MM, OM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.random;
      return 1 === iM ? rM : rM + Math.floor(OM() * iM)
    }

    function kr(MM) {
      for (const rM of wr)
        if (rM[0] <= MM && MM < rM[0] + rM[1]) return rM;
      return null
    }

    function Zr(MM) {
      const rM = [];
      for (let iM = 0; iM < Cr.length; iM++) Cr[iM] === MM && rM.push(iM);
      return rM
    }
    const or = {
        coneInnerAngle: 360,
        coneOuterAngle: 360,
        coneOuterGain: 0,
        distanceModel: "inverse",
        maxDistance: 1e3,
        panningModel: "HRTF",
        rolloffFactor: 1
      },
      fr = lr.f.jy * lr.f.playerEyeToHeightRatio,
      Yr = [0, 0, -1, 0, 1, 0],
      Nr = Er.indexOf("note");

    function Ar(MM) {
      return MM >= 0 ? Math.min(1, MM) : 0
    }
    class xr {
      constructor(MM, rM, iM, OM, SM) {
        this.group = MM, this.loudness = rM, this.startMs = iM, this.howl = OM, this.host = SM, this.id = 0, this.direct = !1
      }
      getDurationMs() {
        const MM = this.host.alive(this.id);
        return MM ? 1e3 * this.howl.duration(this.id) / MM.rate : 0
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
    class vr {
      constructor(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now(),
          OM = arguments.length > 3 ? arguments[3] : void 0;
        this.createHowl = MM, this.listener = rM, this.now = iM, this.errors = 0, this.howls = new Map, this.live = new Map, this.core = new Map, this.level = 1, this.master = 1, this.pose = new Float64Array(9), this.nextPose = new Float64Array(9), this.posed = !1, this.loader = void 0, this.voices = new ur.e, this.failed = new Set, this.started = new Set, this.voiceHost = {
          alive: MM => this.aliveVoice(MM),
          started: MM => this.started.has(MM),
          drop: MM => {
            var rM;
            null === (rM = this.live.get(MM)) || void 0 === rM || rM.howl.stop(MM), this.forget(MM)
          }
        }, this.handlers = {
          playSound: (MM, rM, iM, OM, SM, jM, aM, PM, nM) => {
            if (OM >= Gr.length) return;
            const QM = 0 !== (SM & hM.Wd.Loop);
            SM & hM.Wd.TwoD ? this.start(OM, !1, aM, jM, PM, QM, kr(OM)) : this.startSpatial(OM, aM, jM, PM, QM, MM, rM, iM, nM, this.earDistSq(MM, rM, iM), kr(OM))
          },
          soundPos: (MM, rM, iM, OM) => {
            const SM = this.core.get(OM);
            var jM;
            void 0 !== SM && (null === (jM = this.live.get(SM)) || void 0 === jM || jM.howl.pos(iM, rM, MM, SM))
          },
          soundSet: (MM, rM, iM, OM) => {
            const SM = this.core.get(MM),
              jM = void 0 === SM ? void 0 : this.live.get(SM);
            void 0 !== SM && jM && (this.setRel(SM, rM), jM.rate = iM, jM.howl.rate(iM, SM), jM.spatial && jM.howl.pannerAttr({
              refDistance: OM
            }, SM))
          },
          soundFade: (MM, rM, iM, OM) => {
            const SM = this.core.get(MM);
            void 0 !== SM && this.fade(SM, rM, iM, 0 !== (OM & hM.Td.StopAfter))
          },
          soundStop: MM => {
            const rM = this.core.get(MM);
            var iM;
            void 0 !== rM && (null === (iM = this.live.get(rM)) || void 0 === iM || iM.howl.stop(rM), this.forget(rM))
          },
          soundReset: () => {
            this.stopCore()
          }
        }, this.loader = new pr(((MM, rM) => this.howl(MM, rM)), (MM => {
          this.errors++, console.error("Audio preload failed", MM)
        }), OM)
      }
      preload(MM) {
        this.loader.preload(MM)
      }
      cancelPreload() {
        this.loader.cancel()
      }
      freeSoundsAfterGame() {
        for (let MM = 0; MM < Gr.length; MM++) {
          if (gr.b.has(Er[Cr[MM]])) continue;
          const rM = [];
          for (const iM of [!1, !0]) {
            const OM = Fr(MM, iM),
              SM = this.howls.get(OM);
            void 0 !== SM && "loading" !== SM.state() && rM.push({
              key: OM,
              howl: SM
            })
          }
          if (rM.some((MM => {
              let {
                howl: rM
              } = MM;
              return "loaded" === rM.state()
            })))
            for (const {
                key: MM,
                howl: iM
              }
              of rM) this.howls.delete(MM), "loaded" === iM.state() ? (0, tr.i)(iM) : iM.unload()
        }
      }
      onAudioEvent(MM, rM, iM, OM) {
        if (MM < hM.o.PlaySound || MM > hM.o.SoundReset) return !1;
        try {
          return (0, hM.ge)(MM, rM, iM, OM, this.handlers)
        } catch (SM) {
          return this.errors++, console.error("Audio event failed", SM), !0
        }
      }
      applyListener(MM) {
        const rM = this.nextPose;
        for (let OM = 0; OM < 3; OM++) rM[2 - OM] = hM.w.listener(MM, 0, OM), rM[5 - OM] = hM.w.forward(MM, 0, OM), rM[8 - OM] = hM.w.up(MM, 0, OM);
        0 === rM[3] && 0 === rM[4] && 0 === rM[5] && rM.set(this.posed ? this.pose.subarray(3) : Yr, 3);
        for (let OM = 0; OM < 9; OM++)
          if (!Number.isFinite(rM[OM])) return;
        const iM = this.pose;
        if (this.posed) {
          let MM = !0;
          for (let OM = 0; OM < 9 && MM; OM++) MM = rM[OM] === iM[OM];
          if (MM) return
        }
        this.listener.apply(rM) && (iM.set(rM), this.posed = !0)
      }
      playGame(MM, rM, iM, OM, SM, jM, aM) {
        const PM = sr(MM);
        if (null === PM) return Wr.b;
        const nM = Dr(PM),
          QM = PM[1] > 1 ? PM : null;
        if (!iM) {
          const {
            howl: MM,
            id: iM
          } = this.start(nM, !1, rM, 0, 1, aM, QM);
          return this.gameSound(MM, iM, !1)
        }
        const zM = iM[0],
          LM = iM[1] + fr,
          mM = iM[2];
        if (!Number.isFinite(zM) || !Number.isFinite(LM) || !Number.isFinite(mM)) return Wr.b;
        let HM;
        if (OM) {
          const MM = zM - OM[0],
            rM = LM - OM[1],
            iM = mM - OM[2];
          if (HM = MM * MM + rM * rM + iM * iM, HM > SM * SM) return Wr.b
        } else HM = this.earDistSq(zM, LM, mM);
        const hM = this.startSpatial(nM, rM, 0, 1, aM, zM, LM, mM, jM, HM, QM);
        return hM ? this.gameSound(hM.howl, hM.id, !0) : Wr.b
      }
      setMaster(MM, rM) {
        this.level = Ar(MM);
        const iM = rM ? this.level : 0;
        if (iM !== this.master) {
          this.master = iM;
          for (const [MM, rM] of this.live) rM.fadeMs = 0, rM.gain = rM.rel * this.master, rM.howl.volume(rM.gain, MM)
        }
      }
      stopCore() {
        for (const rM of [...this.core.values()]) {
          var MM;
          null === (MM = this.live.get(rM)) || void 0 === MM || MM.howl.stop(rM)
        }
        this.core.clear()
      }
      stopAll() {
        this.cancelPreload();
        for (const [MM, rM] of [...this.live]) rM.howl.stop(MM), this.forget(MM);
        this.core.clear()
      }
      gameSound(MM, rM, iM) {
        const OM = {
          stop: () => (this.live.has(rM) && MM.stop(rM), OM),
          fade: (MM, iM, SM) => {
            var jM, aM;
            const PM = this.level > 0 ? iM / this.level : iM > 0 && null !== (jM = null === (aM = this.live.get(rM)) || void 0 === aM ? void 0 : aM.rel) && void 0 !== jM ? jM : 0;
            return this.fade(rM, PM, SM, !1), OM
          },
          rate: iM => {
            const SM = this.live.get(rM);
            return SM && (SM.rate = function(MM) {
              return MM > 0 && MM < 1 / 0 ? MM : 1
            }(iM), MM.rate(SM.rate, rM)), OM
          },
          getVolume: () => {
            var MM, iM;
            return (null !== (MM = null === (iM = this.live.get(rM)) || void 0 === iM ? void 0 : iM.rel) && void 0 !== MM ? MM : 0) * this.level
          },
          getRelativeVolume: () => {
            var MM, iM;
            return null !== (MM = null === (iM = this.live.get(rM)) || void 0 === iM ? void 0 : iM.rel) && void 0 !== MM ? MM : 0
          },
          setRelativeVolume: MM => (this.setRel(rM, MM), OM),
          setPannerAttr: SM => {
            if (iM && this.live.has(rM)) {
              const iM = {
                ...or,
                refDistance: hr.l
              };
              for (const [MM, rM] of Object.entries(SM)) "number" !== typeof rM && "string" !== typeof rM || (iM[MM] = rM);
              MM.pannerAttr({
                coneOuterAngle: iM.coneOuterAngle
              }, rM), MM.pannerAttr(iM, rM)
            }
            return OM
          },
          setPosition: SM => (iM && this.live.has(rM) && Number.isFinite(SM[0] + SM[1] + SM[2]) && MM.pos(SM[2], SM[1], SM[0], rM), OM)
        };
        return OM
      }
      startSpatial(MM, rM, iM, OM, SM, jM, aM, PM, nM, QM, zM) {
        const LM = this.howl(MM, !0);
        let mM = null;
        if (!SM) {
          if (this.failed.has(LM)) return null;
          const iM = Cr[MM] === Nr ? null : (0, ur.i)(Gr[MM]),
            OM = (0, ur.f)(Ar(rM), Math.sqrt(QM), nM);
          if (mM = new xr(iM, OM, this.now(), LM, this.voiceHost), !this.voices.admit(mM)) return null
        }
        const HM = this.start(MM, !0, rM, iM, OM, SM, zM);
        return mM && (mM.id = HM.id, mM.direct = "loaded" === LM.state() && !LM._playLock), LM.pannerAttr({
          coneOuterAngle: 360
        }, HM.id), LM.pannerAttr({
          ...or,
          refDistance: nM
        }, HM.id), LM.pos(PM, aM, jM, HM.id), HM
      }
      aliveVoice(MM) {
        const rM = this.live.get(MM);
        if (!rM) return;
        const iM = rM.howl._soundById(MM);
        if (iM && !iM._ended) return rM;
        this.forget(MM)
      }
      earDistSq(MM, rM, iM) {
        if (!this.posed) return 0;
        const OM = MM - this.pose[2],
          SM = rM - this.pose[1],
          jM = iM - this.pose[0];
        return OM * OM + SM * SM + jM * jM
      }
      start(MM, rM, iM, OM, SM, jM, aM) {
        const PM = Ar(iM),
          nM = this.howl(MM, rM);
        "unloaded" === nM.state() && (nM.load(), null !== aM && this.loadPick(aM, rM));
        const QM = nM.play(tr.e),
          zM = PM * this.master;
        return nM.volume(zM, QM), this.live.set(QM, {
          howl: nM,
          rel: PM,
          gain: zM,
          fadeFrom: zM,
          fadeAt: 0,
          fadeMs: 0,
          rate: SM,
          handle: OM,
          spatial: rM,
          stopTimer: void 0
        }), 0 !== OM && this.core.set(OM, QM), 1 !== SM && nM.rate(SM, QM), jM && nM.loop(!0, QM), {
          howl: nM,
          id: QM
        }
      }
      loadPick(MM, rM) {
        let [iM, OM] = MM;
        for (let jM = iM; jM < iM + OM; jM++) {
          var SM;
          const MM = this.howl(jM, rM);
          "unloaded" === MM.state() && "loading" !== (null === (SM = this.howls.get(Fr(jM, !rM))) || void 0 === SM ? void 0 : SM.state()) && MM.load()
        }
      }
      howl(MM, rM) {
        const iM = Fr(MM, rM);
        let OM = this.howls.get(iM);
        if (!OM) {
          const SM = this.createHowl(Gr[MM], rM);
          SM.on("end", (MM => {
            SM.loop(MM) || this.forget(MM)
          })), SM.on("stop", (MM => {
            this.forget(MM)
          })), SM.on("play", (MM => {
            this.live.has(MM) && this.started.add(MM)
          })), SM.on("loaderror", (MM => {
            if ("loaded" !== SM.state()) {
              this.failed.add(SM);
              for (const [MM, rM] of this.live) rM.howl === SM && this.forget(MM)
            } else "number" === typeof MM && this.forget(MM)
          })), this.howls.set(iM, SM), OM = SM
        }
        return OM
      }
      setRel(MM, rM) {
        const iM = this.live.get(MM);
        iM && (Br(iM), iM.fadeMs = 0, iM.rel = Ar(rM), iM.gain = iM.rel * this.master, iM.howl.volume(iM.gain, MM))
      }
      fade(MM, rM, iM, OM) {
        const SM = this.live.get(MM);
        if (!SM) return;
        Br(SM);
        const {
          howl: jM
        } = SM, aM = this.gainNow(SM);
        SM.rel = Ar(rM), SM.gain = SM.rel * this.master;
        const PM = iM > 0 ? Math.min(iM, 65535) : 0,
          nM = 0 === PM || aM === SM.gain;
        SM.fadeMs = nM ? 0 : PM, nM ? jM.volume(SM.gain, MM) : (SM.fadeFrom = aM, SM.fadeAt = this.now(), jM.fade(aM, SM.gain, PM, MM)), OM && (nM ? jM.stop(MM) : SM.stopTimer = setTimeout((() => {
          SM.stopTimer = void 0, jM.stop(MM)
        }), PM))
      }
      gainNow(MM) {
        if (MM.fadeMs > 0) {
          const rM = (this.now() - MM.fadeAt) / MM.fadeMs;
          if (rM < 1) return MM.fadeFrom + (MM.gain - MM.fadeFrom) * Math.max(0, rM);
          MM.fadeMs = 0
        }
        return MM.gain
      }
      forget(MM) {
        this.started.delete(MM);
        const rM = this.live.get(MM);
        rM && (Br(rM), this.live.delete(MM), 0 !== rM.handle && this.core.get(rM.handle) === MM && this.core.delete(rM.handle))
      }
    }

    function Fr(MM, rM) {
      return 2 * MM + (rM ? 1 : 0)
    }

    function Br(MM) {
      void 0 !== MM.stopTimer && (clearTimeout(MM.stopTimer), MM.stopTimer = void 0)
    }
    var Xr = iM(41695),
      Ir = iM(40181);
    class Kr {
      constructor(MM, rM, iM, OM) {
        this.key = MM, this.model = rM, this.host = OM, this.vL = void 0, this.records = void 0, this.origin = [0, 0, 0], this.count = 0, this.pSM = Number.NaN, this.sentOrigin = [Number.NaN, Number.NaN, Number.NaN], this.dirtyList = [], this.isDirty = void 0, this.tail = void 0, this.tailView = void 0, this.tailCut = new Uint8Array(0), this.made = !1, this.dh = !1, this.vL = Math.max(1, Math.ceil(iM)), this.records = new Float32Array(this.vL * Lr.d), this.isDirty = new Uint8Array(this.vL), this.tail = new Uint8Array(this.vL * hM.gc.Bytes), this.tailView = new DataView(this.tail.buffer), this.make(OM.cmd())
      }
      setOrigin(MM, rM, iM) {
        this.origin[0] = MM, this.origin[1] = rM, this.origin[2] = iM
      }
      markDirty(MM) {
        !this.dh && MM >= 0 && MM < this.vL && MM < hM.gc.Max && this.fh(MM, MM + 1)
      }
      commit(MM) {
        if (this.dh) return;
        (MM = Math.min(Math.max(Math.floor(MM), 0), this.vL, hM.gc.Max)) > this.count && this.fh(this.count, MM), this.count = MM;
        const {
          origin: rM,
          sentOrigin: iM,
          dirtyList: OM
        } = this, SM = this.pSM !== MM, jM = iM[0] !== rM[0] || iM[1] !== rM[1] || iM[2] !== rM[2];
        if (0 === OM.length && !SM && !jM) return;
        const aM = this.host.cmd();
        if (!aM || !this.make(aM)) return;
        const PM = OM.length,
          {
            records: nM,
            tailView: QM
          } = this;
        for (let zM = 0; zM < PM; zM++) {
          const MM = OM[zM],
            rM = MM * Lr.d,
            iM = zM * hM.gc.Bytes,
            SM = 0 !== nM[rM + Lr.h] ? hM.gc.Hidden : 0;
          QM.setUint32(iM, (MM | SM) >>> 0, !0), QM.setFloat32(iM + 4, nM[rM], !0), QM.setFloat32(iM + 8, nM[rM + 1], !0), QM.setFloat32(iM + 12, nM[rM + 2], !0)
        }
        if ((0, hM.Oe)(aM, 0, this.key, MM, rM, PM, this.tailOf(PM))) {
          for (let MM = 0; MM < PM; MM++) this.isDirty[OM[MM]] = 0;
          OM.length = 0, this.pSM = MM, iM[0] = rM[0], iM[1] = rM[1], iM[2] = rM[2]
        }
      }
      grow(MM) {
        (MM = Math.ceil(MM)) <= this.vL || this.dh || (this.records = (0, Ir.e)(this.records, new Float32Array(MM * Lr.d)), this.isDirty = (0, Ir.e)(this.isDirty, new Uint8Array(MM)), this.tail = new Uint8Array(MM * hM.gc.Bytes), this.tailView = new DataView(this.tail.buffer), this.vL = MM)
      }
      dispose() {
        this.dh || (this.dh = !0, this.host.dh(this, this.made ? this.key : null))
      }
      make(MM) {
        if (!this.made && MM) {
          const {
            item: rM,
            scale: iM,
            yaw: OM
          } = this.model;
          this.made = (0, hM.Se)(MM, 0, this.key, rM, iM, OM)
        }
        return this.made
      }
      tailOf(MM) {
        const rM = MM * hM.gc.Bytes;
        return this.tailCut.buffer === this.tail.buffer && this.tailCut.length === rM || (this.tailCut = this.tail.subarray(0, rM)), this.tailCut
      }
      fh(MM, rM) {
        const {
          dirtyList: iM,
          isDirty: OM
        } = this;
        for (let SM = MM; SM < rM; SM++) 0 === OM[SM] && (OM[SM] = 1, iM.push(SM))
      }
    }
    var qr = iM(620),
      Tr = iM(45251);
    const Vr = new TextEncoder,
      cr = new Uint8Array(0),
      Mi = [0, 0, 0];
    class ri {
      constructor(MM, rM) {
        this.keys = 0, this.live = new Set, this.owing = new Set, this.host = void 0, this.host = {
          cmd: MM,
          serverId: rM,
          owes: MM => {
            this.owing.add(MM)
          },
          settled: (MM, rM) => {
            this.owing.delete(MM), rM && this.live.delete(MM)
          }
        }
      }
      create(MM, rM) {
        return iM = MM, qr.p.includes(iM) ? this.add({
          lifeform: zM.j.indexOf(MM)
        }, rM) : null;
        var iM
      }
      createCosmetic(MM, rM) {
        const iM = Tr.COSMETIC_MODEL_KEYS.get(MM);
        return void 0 === iM ? null : this.add({
          attachment: iM
        }, rM)
      }
      add(MM, rM) {
        const iM = new ii(++this.keys, MM, rM, this.host);
        return this.live.add(iM), iM
      }
      disposeAll() {
        for (const MM of [...this.live]) MM.dispose()
      }
      flush() {
        if (0 === this.owing.size) return;
        const MM = this.host.cmd();
        for (const rM of this.owing)
          if (!rM.sync(MM)) return
      }
    }
    class ii {
      constructor(MM, rM, iM, OM) {
        this.key = MM, this.source = rM, this.scale = iM, this.host = OM, this.feet = [0, 0, 0], this.yaw = 0, this.visible = !1, this.clip = null, this.clipBytes = cr, this.perch = null, this.owed = 1, this.dh = !1, this.sync()
      }
      setPose(MM, rM) {
        this.dh || (this.feet[0] = MM[0], this.feet[1] = MM[1], this.feet[2] = MM[2], this.yaw = rM, this.owed |= 2, this.sync())
      }
      setVisible(MM) {
        this.dh || MM === this.visible || (this.visible = MM, this.owed |= 4, this.sync())
      }
      setClip(MM) {
        this.dh || MM === this.clip || (this.clip = MM, this.clipBytes = null === MM ? cr : Vr.encode(MM), this.owed |= 16, this.sync())
      }
      setPerch(MM) {
        this.dh || (this.perch = MM, this.owed |= 32, this.sync())
      }
      dispose() {
        this.dh || (this.dh = !0, this.owed = 1 & this.owed ? 0 : 8, this.sync())
      }
      sync() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.host.cmd();
        return this.write(MM) ? (this.host.settled(this, this.dh), !0) : (this.host.owes(this), !1)
      }
      write(MM) {
        if (!MM) return this.owed = 0, !0;
        if (1 & this.owed) {
          if (!("lifeform" in this.source ? (0, hM.af)(MM, 0, this.key, this.source.lifeform, this.scale) : (0, hM.se)(MM, 0, this.key, this.source.attachment, this.scale))) return !1;
          this.owed &= -2
        }
        const {
          owed: rM,
          perch: iM
        } = this, OM = (2 & rM ? hM.Ic.Pose : 0) | (4 & rM ? hM.Ic.Visible : 0) | (16 & rM ? hM.Ic.Clip : 0) | (32 & rM ? hM.Ic.Perch : 0);
        if (0 !== OM) {
          var SM, jM;
          if (!(0, hM.Ye)(MM, 0, this.key, OM, this.visible ? 1 : 0, iM ? 1 : 0, this.feet, this.yaw, iM ? this.host.serverId(iM.QS) : 0, null !== (SM = null === iM || void 0 === iM ? void 0 : iM.offset) && void 0 !== SM ? SM : Mi, null !== (jM = null === iM || void 0 === iM ? void 0 : iM.yaw) && void 0 !== jM ? jM : 0, 16 & rM ? this.clipBytes : cr)) return !1;
          this.owed &= -55
        }
        if (8 & this.owed) {
          if (!(0, hM.Ue)(MM, 0, this.key)) return !1;
          this.owed = 0
        }
        return !0
      }
    }
    var Oi = iM(42094);

    function Si(MM, rM, iM, OM) {
      return (0, Oi.e)(), (0, hM.Lf)(MM, rM, iM, OM)
    }
    var ji = iM(40199),
      ai = iM(41682),
      Pi = iM(42106);
    const ni = [0, 0, 0],
      Qi = [0, 0, 0],
      zi = [0, 0, 0],
      Li = [0, 0, 0],
      mi = {
        origin: [0, 0, 0],
        direction: [0, 0, 1]
      },
      Hi = [0, 0, 0],
      Ji = [0, 0],
      di = [1, 1, 1],
      yi = 1 / 3;
    const li = mr.g;

    function Ei(MM) {
      const rM = mr.e[MM],
        iM = rM && mr.g[rM.mainMultiblock];
      return iM && {
        main: iM,
        x: rM.compX,
        y: rM.compY,
        z: rM.compZ
      }
    }

    function Ui(MM) {
      if (null === MM || void 0 === MM) return hM.Nc;
      const rM = +MM;
      return Number.isInteger(rM) && rM >= -2147483648 && rM <= 2147483647 && String(rM) === String(MM) ? rM : hM.Nc
    }

    function Gi(MM, rM, iM) {
      return (0, hM.Uf)(MM, 0, rM, null !== iM && void 0 !== iM ? iM : Number.NaN)
    }
    class Ci {
      constructor(MM) {
        this.deps = MM, this.api = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.tables = void 0, this.meshKeys = 0, this.liveMeshes = new Set, this.poolKeys = 0, this.livePools = new Set, this.cameraTurn = new ji.b((() => this.tables.getClientOption("forcedCameraDirectionTransitionMs")), (MM => {
          var rM, iM;
          null === (rM = (iM = this.deps).setLocalOptions) || void 0 === rM || rM.call(iM, MM)
        })), this.mobModels = new ri((() => this.deps.cmd()), Ui), this.owedFrees = [], this.pendingStyle = void 0, this.pendingFar = void 0, this.farSet = !1, this.routeMesh = 0, this.routeOffset = 0, this.routeLook = "", this.routeSlide = {
          uvOffset: [0, 0]
        }, this.poolHost = {
          cmd: () => this.deps.cmd(),
          dh: (MM, rM) => {
            this.livePools.delete(MM), null !== rM && (this.owedFrees.push(rM), this.flushOwed())
          }
        }, this.api = MM.api, this.live = MM.live, this.chunks = MM.chunks, this.items = MM.items, this.tables = MM.tables
      }
      isLocal(MM) {
        return null !== MM && void 0 !== MM && +MM === this.api.localId
      }
      assertLocal(MM, rM) {
        if (!this.isLocal(MM)) throw new Error(`Attempted to ${rM} for a player that is not the local player`)
      }
      XE(MM) {
        const rM = this.api.XE(MM);
        if (!rM) throw new Error(`Entity ${MM} has no replicated position`);
        return rM
      }
      checkValid(MM) {
        return !!this.deps.isSessionLive() && (null === MM || void 0 === MM || this.api.checkValid(MM))
      }
      isAlive(MM) {
        return !1 !== this.api.isAlive(MM)
      }
      getItemStat(MM, rM, iM) {
        return this.isLocal(MM) || null !== MM && "Player" === this.api.getEntityType(MM) ? this.tables.getItemStat(rM, iM) : this.tables.getDefaultItemStat(rM, iM)
      }
      getClientOption(MM, rM) {
        return this.assertLocal(MM, "get a client option"), this.tables.getClientOption(rM)
      }
      openShop(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          iM = arguments.length > 2 ? arguments[2] : void 0;
        this.assertLocal(MM, "open shop"), aM.i.Tz("showShopFromServer", {
          toggle: rM,
          SS: iM
        }, !0)
      }
      sendMessage(MM, rM, iM) {
        this.assertLocal(MM, "send a message");
        const OM = "string" === typeof rM ? [{
          str: rM,
          style: iM
        }] : rM;
        aM.i.Tz("chat", {
          content: OM
        }, !0)
      }
      getEntityType(MM) {
        return this.api.getEntityType(MM)
      }
      getEntityName(MM) {
        const rM = Ui(MM);
        return rM === hM.Nc ? void 0 : (0, Xr.j)(this.api, rM)
      }
      hasEffect(MM, rM) {
        const iM = Ui(MM);
        return iM !== hM.Nc && (0, Xr.i)(this.api, iM, rM)
      }
      getMetaInfo(MM) {
        return this.tables.getMetaInfo(MM)
      }
      getPlayerDbId(MM) {
        return this.assertLocal(MM, "get a DB ID"), this.deps.playerDbId()
      }
      getBlockData(MM, rM, iM) {
        if (!this.chunks.dataCleared(MM, rM, iM)) return (0, Xr.e)(this.api, MM, rM, iM)
      }
      cW(MM, rM, iM, OM) {
        this.setBlockId(MM, rM, iM, this.tables.getItemId(OM))
      }
      setOtherEntitySetting(MM, rM, iM, OM) {
        if (!this.isLocal(MM)) throw new Error("Attempted to set an other-entity setting for a player that is not the local player");
        if (!Object.hasOwn(hM.ad, iM)) throw new Error(`Unknown other-entity setting ${iM}`);
        const SM = hM.ad[iM],
          jM = Ui(rM);
        if (jM === hM.Nc || !this.deps.beforeWrite()) return;
        const aM = (0, fM.f)(OM);
        if (aM.length > 16384) throw new Error(`The other-entity setting ${iM}'s value is over 16384 bytes`);
        const PM = this.api.memoryView(Uint8Array, this.api.scratch(), aM.length, "set_other_entity_setting's value");
        PM && (PM.set(aM), this.api.queries.setOtherEntitySetting(jM, SM, aM.length))
      }
      getPositionView(MM) {
        return this.live.position(+MM)
      }
      readDrawnPosition(MM, rM) {
        return this.api.readDrawnPosition(Ui(MM), rM)
      }
      getDrawnHeading(MM) {
        const rM = this.drawnEntity(MM);
        if (!rM) return null;
        if (1 === hM.nb.headingIsDrawn(rM, 0)) return hM.nb.heading(rM, 0);
        const iM = this.api.apiView;
        return this.isLocal(MM) && 0 === (hM.v.playerFlags(iM, 0) & hM.yd.FreeCam) ? hM.v.heading(iM, 0) : null
      }
      getDrawnEyeHeight(MM) {
        const rM = this.drawnEntity(MM),
          iM = rM ? hM.nb.eyeHeight(rM, 0) : 0;
        return iM > 0 ? iM : null
      }
      drawnEntity(MM) {
        const rM = Ui(MM);
        return rM === hM.Nc || this.api.queries.directorEntity(rM) < hM.nb.BYTES ? null : this.api.scratchData(hM.nb.BYTES, "the drawn DirectorEntity")
      }
      isEntityDrawn(MM) {
        const rM = Ui(MM);
        return rM !== hM.Nc && 1 === this.api.queries.entityDrawn(rM)
      }
      getPlayerIds() {
        return Pi.e.ids()
      }
      getPlayerCosmetics(MM) {
        var rM;
        return null !== (rM = (0, Pi.g)(MM)) && void 0 !== rM ? rM : null
      }
      getLocalPlayerMovement() {
        const MM = hM.v.playerFlags(this.api.apiView, 0);
        return 0 === (MM & hM.yd.Replay) && this.api.readDrawnPosition(this.api.localId, zi) ? {
          onGround: 0 !== (MM & hM.yd.OnGround),
          jumpHeld: 0 !== (MM & hM.yd.JumpHeld)
        } : null
      }
      isLocalPlayerInVehicle() {
        return (0, Hr.B)(this.deps.localPhysicsType())
      }
      TrM(MM) {
        return this.isLocal(MM) ? this.items.sQ() : null
      }
      getInventoryItems() {
        return this.items.playerItems()
      }
      getHeldGunInaccuracy() {
        var MM, rM;
        return "Gun" === (null === (MM = this.aliveHeld()) || void 0 === MM || null === (rM = MM.typeObj) || void 0 === rM ? void 0 : rM.type) ? this.items.inaccuracy : null
      }
      aliveHeld() {
        return !1 === this.api.isAlive(this.api.localId) ? null : this.items.sQ()
      }
      isCrosshairShown() {
        var MM, rM;
        const iM = (0, Jr.e)(OM.d.get("crosshairGameView"), OM.d.get("crosshairShownOverride"));
        if (null !== iM) return iM;
        const SM = null === (MM = this.aliveHeld()) || void 0 === MM ? void 0 : MM.typeObj,
          jM = "Gun" === (null === SM || void 0 === SM ? void 0 : SM.type),
          aM = jM || !0 === (null === SM || void 0 === SM ? void 0 : SM.showsAimingUi),
          PM = 0 === (hM.v.playerFlags(this.api.apiView, 0) & hM.yd.ZoomFirstPerson),
          nM = null !== (rM = this.tables.getClientOption("gunshotOrigin")) && void 0 !== rM ? rM : null;
        return (0, Jr.k)({
          gun: jM,
          aimable: aM
        }, PM, (0, dr.b)(), nM)
      }
      setCrosshairShown(MM) {
        OM.d.set({
          crosshairShownOverride: MM
        })
      }
      getInventoryFreeSlotCount(MM) {
        return this.isLocal(MM) ? this.items.freeSlots() : null
      }
      getSelectedInventorySlotI(MM) {
        return this.isLocal(MM) ? this.items.selectedSlot : null
      }
      getItemSlot(MM, rM) {
        return this.isLocal(MM) ? this.items.slot(rM) : null
      }
      swapInventorySlots(MM, rM) {
        return this.items.swap(MM, rM)
      }
      isPlayerCrouching(MM) {
        if (this.isLocal(MM)) return 0 !== (hM.v.playerFlags(this.api.apiView, 0) & hM.yd.Crouching);
        const rM = Ui(MM);
        return rM !== hM.Nc && 1 === this.api.queries.entityCrouching(rM)
      }
      getMiningBlock() {
        return this.live.breakingPosition()
      }
      isMining() {
        return 0 !== (hM.v.playerFlags(this.api.apiView, 0) & hM.yd.AttemptingBreak)
      }
      getTargetedBlock() {
        return this.live.pMM()
      }
      getActionRay() {
        const MM = this.api.apiView;
        for (let rM = 0; rM < 3; rM++) mi.origin[rM] = hM.v.KMM(MM, 0, rM), mi.direction[rM] = hM.v.actionDir(MM, 0, rM);
        return mi
      }
      canModifyBlockAt(MM, rM, iM) {
        return 1 === this.api.queries.canModify(MM, rM, iM)
      }
      isSolidToPlayerBlockId(MM) {
        return this.tables.isSolidBlockId(MM) && !this.chunks.isWalkThrough(MM)
      }
      blockNameToBlockId(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.tables.blockNameToBlockId(MM, rM)
      }
      blockIdToBlockName(MM) {
        return this.tables.nameOfId(MM)
      }
      lrM(MM, rM, iM, OM, SM) {
        return 1 === this.api.queries.terrainBlocked(OM, MM, rM, iM, Ui(null !== SM && void 0 !== SM ? SM : null))
      }
      getChunkVersion(MM, rM, iM) {
        return this.chunks.version(MM, rM, iM)
      }
      scanBlocks(MM, rM, iM, OM, SM, jM, aM, PM) {
        return this.chunks.scan(MM, rM, iM, OM, SM, jM, aM, PM)
      }
      readColumnTops(MM, rM, iM, OM, SM, jM, aM, PM, nM) {
        this.chunks.columnTops(MM, rM, iM, OM, SM, jM, aM, PM, nM)
      }
      isBlockInLoadedChunk(MM, rM, iM) {
        return this.chunks.isLoaded(MM, rM, iM)
      }
      getBlockId(MM, rM, iM) {
        return this.chunks.jP(MM, rM, iM)
      }
      playSound(MM, rM, iM, OM, SM) {
        let jM = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        if (!this.isLocal(MM)) return null;
        const aM = this.playSoundFrom(rM, iM, SM, jM);
        return 1 === OM ? aM : aM.rate(OM)
      }
      preloadSounds(MM) {
        var rM, iM;
        null === (rM = (iM = this.deps).preloadSounds) || void 0 === rM || rM.call(iM, MM)
      }
      playSoundFrom(MM, rM, iM, OM) {
        var SM, jM;
        const aM = this.deps.playSound;
        if (!aM) return Wr.b;
        const PM = null === iM || void 0 === iM ? void 0 : iM.kS,
          nM = null !== (SM = null === iM || void 0 === iM ? void 0 : iM.maxHearDist) && void 0 !== SM ? SM : hr.i,
          QM = null !== (jM = null === iM || void 0 === iM ? void 0 : iM.refDistance) && void 0 !== jM ? jM : hr.l;
        let zM = null;
        if (Array.isArray(PM)) ni[0] = PM[0], ni[1] = PM[1], ni[2] = PM[2], zM = ni;
        else if (void 0 !== PM && null !== PM) {
          const MM = Ui(PM);
          if (!this.api.isLocal(MM)) {
            if (!this.api.readPosition(MM, ni)) return Wr.b;
            zM = ni
          }
        }
        return aM(MM, rM, zM, zM && this.ear(), nM, QM, OM)
      }
      ear() {
        if (this.api.readPosition(this.api.localId, Qi)) Qi[1] += fr;
        else {
          const MM = this.api.apiView;
          if (0 === hM.v.viewProj(MM, 0, 3) && 0 === hM.v.viewProj(MM, 0, 7) && 0 === hM.v.viewProj(MM, 0, 11)) return null;
          for (let rM = 0; rM < 3; rM++) Qi[rM] = hM.v.eye(MM, 0, rM)
        }
        return Number.isFinite(Qi[0] + Qi[1] + Qi[2]) ? Qi : null
      }
      setBlockId(MM, rM, iM, OM) {
        if (!Number.isInteger(OM) || OM < 0 || OM > 65535) throw new Error(`Invalid block id ${OM}`);
        if (!this.deps.beforeWrite() || !this.chunks.isLoaded(MM, rM, iM)) return;
        const SM = Math.floor(MM),
          jM = Math.floor(rM),
          aM = Math.floor(iM),
          PM = this.predictedCells(SM, jM, aM, OM);
        if (1 === this.api.queries.cW(SM, jM, aM, OM)) {
          for (let MM = 0; MM < PM.length; MM += 5) this.chunks.setOverlay(PM[MM], PM[MM + 1], PM[MM + 2], PM[MM + 3], 1 === PM[MM + 4]);
          this.live.refreshTarget()
        }
      }
      particlesEnabled() {
        return this.deps.particles.enabled()
      }
      createParticles(MM, rM) {
        return this.deps.particles.create(MM, rM)
      }
      playParticleEffect(MM) {
        this.deps.particles.playEffect(MM)
      }
      burstParticlePreset(MM, rM, iM) {
        this.deps.particles.burstPreset(MM, rM, iM)
      }
      createGameMesh(MM, rM, iM) {
        const OM = ++this.meshKeys,
          SM = this.deps.cmd();
        if (!SM) return OM;
        const {
          look: jM,
          colour: aM
        } = function(MM) {
          switch (MM.kind) {
            case void 0:
            case "flatEmissive":
              return MM.onTop ? {
                look: hM.Ob.FlatOnTop,
                colour: [...MM.rgb, MM.alpha]
              } : MM.opaque ? {
                look: hM.Ob.FlatOpaque,
                colour: [...MM.rgb, 1]
              } : {
                look: hM.Ob.Flat,
                colour: [...MM.rgb, MM.alpha]
              };
            case "chevronPath":
              return {
                look: hM.Ob.Chevrons, colour: [...(0, yr.c)(MM.colour), MM.alpha]
              };
            case "furnaceFire":
              return {
                look: hM.Ob.FurnaceFire, colour: [1, 1, 1, 1]
              }
          }
        }(rM), PM = Math.floor(MM.positions.length / 3), nM = function(MM, rM) {
          const iM = Math.floor(MM.positions.length / 3),
            OM = MM.indices.length,
            SM = iM * (rM ? 5 : 3),
            jM = new Uint8Array(4 * (SM + OM)),
            aM = new DataView(jM.buffer);
          for (let QM = 0; QM < 3 * iM; QM++) aM.setFloat32(4 * QM, MM.positions[QM], !0);
          if (rM) {
            var PM;
            const rM = null !== (PM = MM.uvs) && void 0 !== PM ? PM : [];
            for (let MM = 0; MM < 2 * iM; MM++) {
              var nM;
              aM.setFloat32(4 * (3 * iM + MM), null !== (nM = rM[MM]) && void 0 !== nM ? nM : 0, !0)
            }
          }
          for (let QM = 0; QM < OM; QM++) aM.setUint32(4 * (SM + QM), MM.indices[QM], !0);
          return jM
        }(MM, (0, Lr.l)(rM));
        return (0, hM.Be)(SM, 0, OM, jM, aM, iM, PM, MM.indices.length, nM) && this.liveMeshes.add(OM), OM
      }
      setGameMesh(MM, rM) {
        var iM;
        const OM = this.deps.cmd();
        if (!OM) return;
        let SM = 0;
        rM.anchor && (SM |= hM.Sb.Anchor, Hi[0] = rM.anchor[0], Hi[1] = rM.anchor[1], Hi[2] = rM.anchor[2]), void 0 !== rM.visible && (SM |= hM.Sb.Visible), rM.uvOffset && (SM |= hM.Sb.UvOffset, Ji[0] = rM.uvOffset[0], Ji[1] = rM.uvOffset[1]);
        const jM = null !== (iM = rM.visibility) && void 0 !== iM ? iM : 1;
        void 0 !== rM.visibility && (SM |= hM.Sb.Visibility), rM.scale && (SM |= hM.Sb.Scale, di[0] = rM.scale[0], di[1] = rM.scale[1], di[2] = rM.scale[2]), 0 !== SM && (0, hM.Ie)(OM, 0, MM, SM, rM.visible ? 1 : 0, Hi, Ji, jM, di)
      }
      disposeGameMesh(MM) {
        const rM = this.deps.cmd();
        rM && !(0, hM.Ee)(rM, 0, MM) || this.liveMeshes.delete(MM)
      }
      hasPackModel(MM) {
        var rM, iM, OM;
        return null !== (rM = null === (iM = (OM = this.deps).hasPackModel) || void 0 === iM ? void 0 : iM.call(OM, MM)) && void 0 !== rM && rM
      }
      disposeGameOutput() {
        const MM = MM => {
          try {
            MM()
          } catch (rM) {
            console.error("Error freeing client game output", rM)
          }
        };
        for (const rM of [...this.liveMeshes]) MM((() => {
          this.disposeGameMesh(rM)
        }));
        for (const rM of [...this.livePools]) MM((() => {
          rM.dispose()
        }));
        MM((() => {
          this.mobModels.disposeAll()
        })), MM((() => {
          this.setGroundArrowStyle(null)
        })), MM((() => {
          this.setRouteChevrons(null), this.routeOffset = 0, this.routeLook = ""
        })), MM((() => {
          this.setCrosshairShown(null)
        })), MM((() => {
          this.cameraTurn.dispose()
        })), MM((() => {
          this.farSet && (this.farSet = !1, this.setCameraFar(null))
        }))
      }
      createInstancePool(MM, rM) {
        const iM = this.tables.idOf(MM.item);
        if (void 0 === iM) return null;
        const OM = new Kr(++this.poolKeys, {
          item: iM,
          scale: MM.scale,
          yaw: MM.yaw
        }, rM, this.poolHost);
        return this.livePools.add(OM), OM
      }
      createMobModel(MM, rM) {
        return this.mobModels.create(MM, rM)
      }
      createCosmeticModel(MM, rM) {
        return this.mobModels.createCosmetic(MM, rM)
      }
      setRouteChevrons(MM) {
        if (0 !== this.routeMesh && (this.disposeGameMesh(this.routeMesh), this.routeMesh = 0), !MM || 0 === MM.cells.length) return;
        const rM = `${MM.colour} ${MM.alpha}`;
        rM !== this.routeLook && (this.routeLook = rM, this.routeOffset = 0), this.routeMesh = this.createGameMesh(function(MM) {
          const [rM, iM, OM] = MM[0].pos, SM = [], jM = [], aM = [];
          return MM.forEach(((MM, PM) => {
            let {
              pos: nM,
              way: [QM, zM]
            } = MM;
            const LM = nM[0] - rM + .5,
              mM = nM[1] - iM + .04,
              HM = nM[2] - OM + .5,
              [hM, JM] = [.35 * -zM, .35 * QM],
              [dM, yM] = [PM * yi, (PM + 1) * yi],
              lM = SM.length / 3;
            SM.push(LM - .5 * QM + hM, mM, HM - .5 * zM + JM), SM.push(LM - .5 * QM - hM, mM, HM - .5 * zM - JM), SM.push(LM + .5 * QM + hM, mM, HM + .5 * zM + JM), SM.push(LM + .5 * QM - hM, mM, HM + .5 * zM - JM), jM.push(0, dM, 1, dM, 0, yM, 1, yM), aM.push(lM, lM + 1, lM + 2, lM + 1, lM + 3, lM + 2)
          })), {
            positions: SM,
            uvs: jM,
            indices: aM
          }
        }(MM.cells), {
          kind: "chevronPath",
          colour: MM.colour,
          alpha: MM.alpha
        }, MM.cells[0].pos), this.setRouteSlide()
      }
      slideRoute(MM) {
        0 !== this.routeMesh && (this.routeOffset = (this.routeOffset + Math.min(MM, 250) / 1e3 * 1.2 * yi) % 1, this.setRouteSlide())
      }
      setRouteSlide() {
        this.routeSlide.uvOffset[1] = -this.routeOffset, this.setGameMesh(this.routeMesh, this.routeSlide)
      }
      setGroundArrowStyle(MM) {
        this.pendingStyle = MM, this.flushOwed()
      }
      flushOwed() {
        this.mobModels.flush();
        const MM = this.owedFrees;
        if (0 === MM.length && void 0 === this.pendingStyle && void 0 === this.pendingFar) return;
        const rM = this.deps.cmd();
        if (!rM) return MM.length = 0, void(this.pendingFar = void 0);
        let iM = 0;
        for (; iM < MM.length && (0, hM.Qe)(rM, 0, MM[iM]);) iM++;
        MM.splice(0, iM);
        const OM = this.pendingStyle;
        if (void 0 !== OM) {
          (OM ? (0, hM.Vf)(rM, 0, OM.width, OM.alpha, 1, OM.endAtSolidFace ? 1 : 0) : (0, hM.Vf)(rM, 0, 0, 0, 0, 0)) && (this.pendingStyle = void 0)
        }
        const SM = this.pendingFar;
        void 0 !== SM && (0, hM.Qf)(rM, 0, null !== SM && void 0 !== SM ? SM : 0, null === SM ? 1 : 0) && (this.pendingFar = void 0)
      }
      setNametagOffset(MM, rM) {
        const iM = this.deps.cmd(),
          OM = Ui(MM);
        iM && OM !== hM.Nc && (0, hM.bg)(iM, 0, OM, rM)
      }
      setFacingTolerance(MM, rM) {
        const iM = this.deps.cmd(),
          OM = Ui(MM);
        iM && OM !== hM.Nc && Gi(iM, OM, rM)
      }
      forEachEntity(MM) {
        const {
          api: rM
        } = this;
        for (let iM = 0; iM < rM.idStr.length; iM++) {
          const OM = rM.idStr[iM];
          null === OM || GM(rM.kinds[iM]) || MM(OM)
        }
      }
      getEntityInfo(MM) {
        return this.deps.entityInfo.get(MM)
      }
      isEntityInteractable(MM) {
        const rM = Ui(MM);
        return rM !== hM.Nc && 1 === this.api.queries.entityInteractable(rM)
      }
      isLocalPlayer(MM) {
        return this.isLocal(MM)
      }
      getLineOwner(MM) {
        var rM;
        const iM = null === (rM = this.deps.entityInfo.get(MM)) || void 0 === rM ? void 0 : rM.meshOpts;
        if (!iM) return null;
        try {
          const {
            lineToEId: MM
          } = JSON.parse(iM);
          return null !== MM && void 0 !== MM ? MM : null
        } catch {
          return null
        }
      }
      getCameraPosition() {
        const MM = this.api.apiView;
        return Li[0] = hM.v.eye(MM, 0, 0), Li[1] = hM.v.eye(MM, 0, 1), Li[2] = hM.v.eye(MM, 0, 2), Li
      }
      getCameraFar() {
        return hM.v.cameraFar(this.api.apiView, 0)
      }
      setCameraFar(MM) {
        null !== MM && (this.farSet = !0), this.pendingFar = MM, this.flushOwed()
      }
      turnCamera(MM, rM) {
        this.cameraTurn.turn(MM, rM)
      }
      clearPickupDelay(MM) {
        const rM = this.deps.cmd(),
          iM = Ui(MM);
        rM && iM !== hM.Nc && (0, hM.me)(rM, 0, iM)
      }
      sendChat(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const iM = this.deps.sendCmd();
        iM && Si(iM, 0, ai.d.Chat, (0, fM.f)((0, ai.k)({
          Kz: MM,
          qz: rM
        })))
      }
      sendCommand(MM) {
        MM.length <= 119 && this.sendChat(`/${MM}`)
      }
      predictedCells(MM, rM, iM, OM) {
        const SM = this.chunks,
          jM = [],
          aM = (MM, rM, iM, OM, SM) => {
            jM.push(MM, rM, iM, OM, this.tables.blockRootId(SM) === this.tables.blockRootId(OM) ? 0 : 1)
          },
          PM = SM.jP(MM, rM, iM),
          nM = Ei(PM);
        if (nM) {
          const [OM, jM, QM] = [MM - nM.x, rM - nM.y, iM - nM.z], zM = li[SM.jP(OM, jM, QM)], LM = null === zM || void 0 === zM ? void 0 : zM.positions.some((MM => MM.id === PM && MM.x === nM.x && MM.y === nM.y && MM.z === nM.z));
          for (const MM of (LM && zM ? zM : nM.main).positions) SM.jP(OM + MM.x, jM + MM.y, QM + MM.z) === MM.id && aM(OM + MM.x, jM + MM.y, QM + MM.z, 0, MM.id)
        }
        const QM = Ei(OM);
        if (QM)
          for (const LM of QM.main.positions) {
            const [OM, jM, PM] = [MM + LM.x - QM.x, rM + LM.y - QM.y, iM + LM.z - QM.z];
            aM(OM, jM, PM, LM.id, SM.jP(OM, jM, PM))
          } else aM(MM, rM, iM, OM, PM);
        const zM = this.tables;
        if ((0 !== zM.attachedTopOf(PM) || 0 !== zM.attachedTopOf(OM)) && SM.isLoaded(MM, rM + 1, iM)) {
          let nM = SM.jP(MM, rM + 1, iM);
          for (let OM = 0; OM < jM.length; OM += 5) jM[OM] === MM && jM[OM + 1] === rM + 1 && jM[OM + 2] === iM && (nM = jM[OM + 3]);
          const QM = this.attachedTopWrite(PM, OM, nM);
          void 0 !== QM && aM(MM, rM + 1, iM, QM, nM)
        }
        return jM
      }
      attachedTopWrite(MM, rM, iM) {
        const OM = this.tables,
          SM = OM.attachedTopOf(MM),
          jM = OM.attachedTopOf(rM),
          aM = 0 !== SM && 0 !== iM && OM.blockRootId(iM) === OM.blockRootId(SM);
        return 0 !== SM && 0 !== jM && OM.blockRootId(MM) === OM.blockRootId(rM) ? aM && iM !== jM ? jM : void 0 : 0 === jM || !aM && 0 !== iM ? aM ? 0 : void 0 : jM
      }
    }
    const ei = hM.bc + hM.fc * hM.jc.BYTES,
      bi = 2147483647,
      wi = new TextDecoder,
      ti = new TextEncoder,
      gi = Object.freeze({
        Ha: 0,
        Pz: null,
        amountAddedToSlot: 0
      }),
      ui = new Proxy({}, {
        get: () => () => hM.Yc
      });

    function Ri(MM) {
      return Number.isInteger(MM) && MM >= 0 && MM <= 65535
    }

    function Wi(MM) {
      return Number.isInteger(MM) && MM >= 0 && MM <= 4294967295
    }
    class si {
      constructor(MM) {
        this.deps = MM, this.ti = [0, 0, 0], this.inaccuracy = 0, this.version = 0, this.notified = 0, this.iconChanged = !1, this.facades = new Array(hM.fc), this.ids = new Uint16Array(hM.fc), this.amounts = new Uint16Array(hM.fc), this.attrRead = new Float64Array(hM.fc).fill(-1), this.stale = new Uint16Array(hM.fc), this.staleVersion = new Uint32Array(hM.fc), this.instances = new Uint32Array(hM.fc), this.viewPtr = 0, this.viewVersion = -1, this.len = 0, this.selected = 0, this.slotIconId = 0, this.stopped = !1, this.listeners = new Set
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
      slot(MM) {
        var rM;
        return Number.isInteger(MM) && MM >= 0 && MM < this.len && 0 !== this.ids[MM] && null !== (rM = this.facades[MM]) && void 0 !== rM ? rM : null
      }
      sQ() {
        return this.slot(this.selected)
      }
      playerItems() {
        const MM = [];
        for (let rM = 0; rM < Math.min(hM.gd, this.len); rM++) MM.push(this.slot(rM));
        return MM
      }
      freeSlots() {
        let MM = 0;
        for (let rM = 0; rM < Math.min(hM.gd - hM.i, this.len); rM++) 0 === this.ids[rM] && MM++;
        return MM
      }
      amountOf(MM) {
        let rM = 0;
        for (let OM = 0; OM < Math.min(hM.gd, this.len); OM++) {
          const SM = this.slot(OM);
          var iM;
          if ((null === SM || void 0 === SM ? void 0 : SM.name) === MM) rM += null !== (iM = SM.amount) && void 0 !== iM ? iM : 1
        }
        return rM
      }
      instance(MM) {
        var rM;
        return null !== (rM = this.instances[MM]) && void 0 !== rM ? rM : 0
      }
      watch(MM) {
        return this.listeners.add(MM), () => {
          this.listeners.delete(MM)
        }
      }
      touch() {
        this.version++
      }
      flush(MM) {
        if (this.version !== this.notified || this.iconChanged) {
          this.notified = this.version, this.iconChanged = !1;
          for (const iM of [...this.listeners]) try {
            iM()
          } catch (rM) {
            MM(rM)
          }
        }
      }
      chestOpened(MM, rM, iM) {
        this.ti[0] = MM, this.ti[1] = rM, this.ti[2] = iM, this.version++
      }
      refresh() {
        const MM = this.deps.api.apiView,
          rM = hM.v.inventoryViewPtr(MM, 0),
          iM = hM.v.inventoryVersion(MM, 0),
          OM = hM.v.selectedSlot(MM, 0);
        OM !== this.selected && (this.selected = OM, this.version++);
        const SM = hM.v.slotIcon(MM, 0);
        if (SM !== this.slotIconId && (this.slotIconId = SM, this.iconChanged = !0), rM === this.viewPtr && iM === this.viewVersion) return;
        this.viewPtr = rM, this.viewVersion = iM;
        const jM = this.deps.api.memoryData(rM, ei, 4, "the inventory view"),
          aM = jM ? Math.min(jM.getUint32(0, !0), hM.fc) : 0;
        aM !== this.len && (this.len = aM, this.version++);
        let PM = 0;
        for (let nM = 0; nM < hM.fc; nM++) {
          const MM = hM.bc + nM * hM.jc.BYTES,
            rM = null !== jM && nM < aM ? hM.jc.item(jM, MM) : 0;
          if (0 === rM || null === jM) {
            0 !== this.ids[nM] && (this.ids[nM] = 0, this.attrRead[nM] = -1, this.instances[nM]++, this.version++);
            continue
          }
          const iM = hM.jc.amount(jM, MM),
            OM = hM.jc.attrVersion(jM, MM);
          rM === this.ids[nM] && iM === this.amounts[nM] || this.fill(nM, rM, iM), OM !== this.attrRead[nM] && (this.stale[PM] = nM, this.staleVersion[PM] = OM, PM++)
        }
        PM > 0 && this.fetchAttributes(PM)
      }
      fill(MM, rM, iM) {
        const {
          tables: OM
        } = this.deps, SM = rM !== this.ids[MM];
        let jM = this.facades[MM];
        jM || (jM = {
          name: "",
          amount: null,
          attributes: {
            customAttributes: {}
          },
          typeObj: null
        }, this.facades[MM] = jM), SM && (jM.name = OM.nameOfId(rM), jM.typeObj = OM.itemType(rM), jM.attributes = {
          customAttributes: {}
        }, this.attrRead[MM] = -1, this.instances[MM]++), jM.amount = 0 === iM ? null : iM, this.ids[MM] = rM, this.amounts[MM] = iM, this.version++
      }
      fetchAttributes(MM) {
        const {
          api: rM,
          onError: iM
        } = this.deps, OM = rM.memoryView(Uint16Array, rM.scratch(), MM, "item_attributes_batch's slots");
        if (!OM) return void this.markRead(MM);
        OM.set(this.stale.subarray(0, MM));
        const SM = rM.queries.itemAttributesBatch(MM),
          jM = 4294967295 === SM ? null : rM.memoryData(rM.scratch(), SM, 4, "item_attributes_batch's answer");
        if (!jM) return void this.markRead(MM);
        const aM = new Uint8Array(jM.buffer, jM.byteOffset, SM);
        for (let nM = 0; nM + 8 <= SM;) {
          const MM = jM.getUint16(nM, !0),
            rM = jM.getUint32(nM + 4, !0),
            OM = aM.subarray(nM + 8, nM + 8 + rM);
          nM += 8 + (0, mM.oe)(rM);
          const SM = this.facades[MM];
          if (SM && 0 !== this.ids[MM] && 0 !== rM) {
            try {
              SM.attributes = JSON.parse(wi.decode(OM))
            } catch (PM) {
              iM(PM)
            }
            this.version++
          }
        }
        this.markRead(MM)
      }
      markRead(MM) {
        for (let rM = 0; rM < MM; rM++) this.attrRead[this.stale[rM]] = this.staleVersion[rM]
      }
      swap(MM, rM) {
        return Ri(MM) && Ri(rM) && this.settle(this.queries().invSwap(MM, rM))
      }
      move(MM, rM, iM) {
        return Ri(MM) && Ri(rM) && Wi(iM) && this.settle(this.queries().invMove(MM, rM, iM))
      }
      quickMove(MM, rM, iM, OM) {
        var SM, jM;
        if (!Ri(MM) || !Ri(rM) || !Ri(iM) || null !== OM && !Wi(OM)) return null;
        const aM = this.queries().invQuickMove(MM, rM, iM, null === OM ? -1 : Math.min(OM, bi)),
          PM = aM === hM.Yc ? hM.Gb : null !== (SM = null === (jM = this.extras()) || void 0 === jM ? void 0 : jM[1]) && void 0 !== SM ? SM : hM.Gb;
        return this.settle(aM), PM === hM.Gb ? null : PM
      }
      remove(MM, rM, iM) {
        return Ri(MM) && Wi(rM) && this.settle(this.queries().invRemove(MM, rM, iM ? 1 : 0))
      }
      selectSlot(MM) {
        return Ri(MM) && this.settle(this.queries().selectSlot(MM))
      }
      closeChest() {
        return this.settle(this.queries().closeChest())
      }
      enchant(MM, rM, iM) {
        if (!Ri(MM) || !Number.isInteger(rM)) return !1;
        const [OM, SM, jM] = iM;
        return this.settle(this.queries().invEnchant(MM, rM, Math.floor(OM), Math.floor(SM), Math.floor(jM)))
      }
      craft(MM, rM, iM) {
        let OM;
        try {
          OM = this.deps.tables.getItemId(MM)
        } catch {
          return gi
        }
        if (!Ri(rM) || null !== iM && (Number.isNaN(iM) || iM < 0)) return gi;
        const SM = null === iM || iM > bi ? -1 : Math.floor(iM),
          jM = this.queries().craft(OM, rM, SM);
        let aM = gi;
        const PM = jM === hM.Yc ? null : this.extras();
        if (PM) {
          const [MM, rM, iM] = PM;
          aM = {
            Ha: MM,
            Pz: rM === hM.Gb ? null : rM,
            amountAddedToSlot: iM
          }
        }
        return this.settle(jM), aM
      }
      salvage(MM, rM, iM) {
        let OM;
        try {
          OM = this.deps.tables.getItemId(rM)
        } catch {
          return !1
        }
        return Ri(MM) && Number.isInteger(iM) && this.settle(this.queries().salvage(MM, OM, Math.max(Math.min(iM, bi), -bi)))
      }
      craftingView(MM, rM, iM) {
        var OM;
        if (this.stopped) return null;
        const {
          api: SM,
          onError: jM
        } = this.deps, aM = MM ? ti.encode(MM) : null;
        if (null !== aM) {
          if (aM.length > 1024) return jM(new Error(`The crafting station ${MM}'s name is over 1024 bytes`)), null;
          const rM = SM.memoryView(Uint8Array, SM.scratch(), aM.length, "crafting_view's station");
          if (!rM) return null;
          rM.set(aM)
        }
        const PM = Ri(rM) && Ri(iM),
          nM = SM.queries.craftingView(null !== (OM = null === aM || void 0 === aM ? void 0 : aM.length) && void 0 !== OM ? OM : 0, PM ? rM : 0, PM ? iM : 0);
        return nM < hM.gb.BYTES ? (SM.reportCorruption(`crafting_view's answer of ${nM} bytes`), null) : SM.memoryData(SM.scratch(), nM, 1, "crafting_view's answer")
      }
      queries() {
        var MM, rM;
        return !1 === (null === (MM = (rM = this.deps).beforeOp) || void 0 === MM ? void 0 : MM.call(rM)) ? (this.stopped = !0, ui) : this.deps.api.queries
      }
      extras() {
        const {
          api: MM
        } = this.deps;
        return MM.memoryView(Uint32Array, MM.scratch(), 3, "a sync query's extra words")
      }
      settle(MM) {
        if (MM === hM.Uc)(0, Oi.e)();
        else if (MM !== hM.Yc) {
          const rM = this.deps.cmd();
          rM && function(MM, rM, iM) {
            return (0, Oi.e)(), (0, hM.qg)(MM, rM, iM)
          }(rM, 0, MM) || this.deps.onError(new Error(`Sync op ${MM}'s marker didn't fit the command ring: its send goes after the next frame's commands`))
        }
        return this.stopped || this.refresh(), MM !== hM.Yc
      }
    }
    const Di = 1 / .6,
      ki = [0, 1, 0],
      Zi = [0, 0, 0],
      oi = new Uint8Array(0),
      fi = 1.2 * lr.f.Sy,
      Yi = new TextEncoder,
      Ni = [0, 0, 0],
      Ai = [0, 0, 0],
      xi = new Map;

    function vi(MM) {
      let rM = xi.get(MM);
      return rM || (xi.size >= 64 && xi.clear(), rM = Yi.encode(`{"emitRate":${MM}}`), xi.set(MM, rM)), rM
    }

    function Fi(MM) {
      return Number.isFinite(MM) && MM > 0 ? MM : 0
    }

    function Bi(MM, rM) {
      for (let iM = 0; iM < 3; iM++) {
        const OM = Math.abs(rM[iM]);
        Ni[iM] = MM[iM] - OM, Ai[iM] = 2 * OM
      }
      return Number.isFinite(Ni[0] + Ni[1] + Ni[2] + Ai[0] + Ai[1] + Ai[2])
    }

    function Xi(MM, rM) {
      return "pos1" === MM || "pos2" === MM ? void 0 : rM
    }

    function Ii(MM, rM, iM) {
      return MM.length > hM.ud.MaxOpts ? (iM(new Error(`${rM}'s particle opts are over ${hM.ud.MaxOpts} bytes of JSON`)), null) : MM
    }
    const Ki = {
      moveTo() {},
      setEmitRate() {},
      emit() {},
      emitPoints() {},
      setDirections() {},
      stop() {},
      dispose() {}
    };
    class qi {
      constructor(MM) {
        this.deps = MM, this.session = 0, this.nextKey = 1, this.live = 0, this.started = !1
      }
      enabled() {
        return null !== this.sink()
      }
      sink() {
        return this.deps.isSessionLive() ? this.deps.cmd() : null
      }
      create(MM, rM) {
        var iM;
        const OM = this.sink(),
          SM = null !== (iM = rM.half) && void 0 !== iM ? iM : Zi;
        if (!OM || this.live >= hM.ud.MaxLiveKeys || this.nextKey > hM.ud.MaxKey || !Bi(rM.pos, SM)) return Ki;
        const jM = this.nextKey,
          aM = Ii(function(MM) {
            var rM, iM, OM;
            const SM = JSON.stringify({
              texture: "string" === typeof MM.texture ? MM.texture : "smokePuff",
              vL: MM.vL,
              minLifeTime: MM.minLifeTime,
              maxLifeTime: MM.maxLifeTime,
              minSize: MM.minSize,
              maxSize: MM.maxSize,
              minEmitPower: MM.minEmitPower,
              maxEmitPower: MM.maxEmitPower,
              emitRate: Fi(MM.emitRate),
              gravity: null !== (rM = MM.gravity) && void 0 !== rM ? rM : Zi,
              dir1: null !== (iM = MM.dir1) && void 0 !== iM ? iM : ki,
              dir2: null !== (OM = MM.dir2) && void 0 !== OM ? OM : ki,
              colorGradients: MM.colorGradients,
              blendMode: MM.blendMode
            });
            return Yi.encode(SM)
          }(MM), "createParticles", this.deps.onError);
        return aM && (0, hM.jf)(OM, 0, jM, 0, hM.ud.PresetNone, 0, Ni, Ai, aM) ? (this.nextKey++, this.live++, this.started = !0, new Ti(this, this.session, jM, MM, SM)) : Ki
      }
      playEffect(MM) {
        const rM = this.sink(),
          {
            pos1: iM,
            pos2: OM
          } = MM;
        if (!rM || !iM || !OM) return;
        for (let jM = 0; jM < 3; jM++) Ni[jM] = Math.min(iM[jM], OM[jM]), Ai[jM] = Math.abs(OM[jM] - iM[jM]);
        if (!Number.isFinite(Ni[0] + Ni[1] + Ni[2] + Ai[0] + Ai[1] + Ai[2])) return;
        const SM = Ii(Yi.encode(JSON.stringify(MM, Xi)), "playParticleEffect", this.deps.onError);
        SM && (0, hM.hf)(rM, 0, 0, hM.ud.PresetNone, hM.ud.HasBox, 0, Ni, Ai, SM)
      }
      burstPreset(MM, rM, iM) {
        const OM = this.sink(),
          SM = Math.min(Math.floor(iM), hM.ud.MaxBurst);
        if (!OM || !Object.hasOwn(hM.Vb, MM) || !(SM > 0)) return;
        const jM = fi;
        for (let aM = 0; aM < 3; aM++) Ni[aM] = rM[aM] - jM / 2, Ai[aM] = jM;
        Number.isFinite(Ni[0] + Ni[1] + Ni[2]) && (0, hM.hf)(OM, 0, 0, hM.Vb[MM], hM.ud.HasBox, SM, Ni, Ai, oi)
      }
      sessionEnded() {
        this.session++;
        const MM = this.started ? this.deps.cmd() : null;
        return this.started = !1, this.nextKey = 1, this.live = 0, !MM || (0, hM.lf)(MM, 0)
      }
      sinkFor(MM) {
        return MM === this.session ? this.deps.cmd() : null
      }
      stop(MM, rM) {
        const iM = this.sinkFor(MM);
        iM && (0, hM.nf)(iM, 0, rM) && this.live--
      }
    }
    class Ti {
      constructor(MM, rM, iM, OM, SM) {
        this.owner = MM, this.session = rM, this.key = iM, this.half = void 0, this.rate = void 0, this.stopDelayMs = void 0, this.emitted = void 0, this.stopped = !1, this.freed = !1, this.half = [Math.abs(SM[0]), Math.abs(SM[1]), Math.abs(SM[2])], this.rate = Fi(OM.emitRate), this.emitted = this.rate > 0;
        const jM = OM.maxLifeTime * Di * 1e3 + 250;
        this.stopDelayMs = jM >= 0 ? Math.min(jM, 2147483647) : 250
      }
      sink() {
        return this.stopped ? null : this.owner.sinkFor(this.session)
      }
      moveTo(MM, rM) {
        const iM = this.sink();
        if (iM) {
          if (rM)
            for (let MM = 0; MM < 3; MM++) this.half[MM] = Math.abs(rM[MM]);
          Bi(MM, this.half) && (0, hM.rf)(iM, 0, this.key, hM.ud.HasBox, Ni, Ai, oi)
        }
      }
      setEmitRate(MM) {
        const rM = this.sink(),
          iM = Fi(MM);
        rM && iM !== this.rate && (0, hM.rf)(rM, 0, this.key, 0, Zi, Zi, vi(iM)) && (this.rate = iM, this.emitted ||= iM > 0)
      }
      emit(MM) {
        const rM = this.sink(),
          iM = Math.min(Math.floor(MM), hM.ud.MaxBurst);
        rM && iM > 0 && (0, hM.hf)(rM, 0, this.key, hM.ud.PresetNone, 0, iM, Zi, Zi, oi) && (this.emitted = !0)
      }
      emitPoints(MM, rM, iM) {
        const OM = this.sink(),
          SM = Math.min(Math.floor(iM), hM.ud.MaxPoints, Math.floor(rM.length / 4));
        if (!OM || !(SM > 0) || !Number.isFinite(MM[0] + MM[1] + MM[2])) return;
        const jM = new Uint8Array(rM.buffer, rM.byteOffset, SM * hM.ud.PointBytes);
        (0, hM.if)(OM, 0, this.key, SM, MM, jM) && (this.emitted = !0)
      }
      setDirections(MM, rM) {
        const iM = this.sink();
        if (!iM || !Number.isFinite(MM[0] + MM[1] + MM[2] + rM[0] + rM[1] + rM[2])) return;
        const OM = Yi.encode(JSON.stringify({
          dir1: [MM[0], MM[1], MM[2]],
          dir2: [rM[0], rM[1], rM[2]]
        }));
        (0, hM.rf)(iM, 0, this.key, 0, Zi, Zi, OM)
      }
      stop() {
        const MM = this.sink();
        this.stopped = !0, MM && (this.emitted ? (this.rate > 0 && (0, hM.rf)(MM, 0, this.key, 0, Zi, Zi, vi(0)), setTimeout((() => {
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
    const Vi = qr.q,
      ci = new TextDecoder;

    function MO(MM, rM) {
      const {
        serverIds: iM,
        kinds: OM
      } = MM;
      let SM = 0;
      for (let jM = 0; jM < iM.length; jM++) {
        const MM = iM[jM];
        if (MM !== hM.Nc && !GM(OM[jM])) {
          if (SM === rM.length) {
            const MM = new Int32Array(Math.max(64, 2 * SM));
            MM.set(rM), rM = MM
          }
          rM[SM++] = MM
        }
      }
      return {
        ids: rM,
        count: SM
      }
    }

    function rO(MM, rM) {
      return MM.length >= rM ? MM : new Int32Array(Math.max(rM, 2 * MM.length))
    }

    function iO(MM, rM, iM, OM) {
      for (let SM = 0; SM < iM; SM += 4096) {
        const jM = Math.min(4096, iM - SM),
          aM = MM.memoryView(Int32Array, MM.scratch(), jM, "entity_info_batch's ids");
        if (!aM) return !1;
        aM.set(rM.subarray(SM, SM + jM));
        const PM = MM.queries.entityInfoBatch(jM),
          nM = 4294967295 === PM ? null : MM.memoryData(MM.scratch(), PM, 4, "entity_info_batch's records");
        if (!nM) return !1;
        for (let MM = 0; MM + hM.Jb.BYTES <= PM;) {
          const rM = hM.Jb.len(nM, MM);
          OM(hM.Jb.serverId(nM, MM), OO(nM, MM, rM)), MM += hM.Jb.BYTES + (0, mM.oe)(rM)
        }
      }
      return !0
    }

    function OO(MM, rM, iM) {
      var OM, SM, jM;
      const aM = hM.Jb.kind(MM, rM),
        PM = 0 === aM ? null : CM(aM);
      if (null === PM) return null;
      const nM = hM.Jb.variation(MM, rM),
        QM = hM.Jb.pose(MM, rM),
        zM = hM.Jb.meta(MM, rM),
        LM = hM.Jb.mesh(MM, rM),
        mM = 0 !== (hM.Jb.flags(MM, rM) & hM.Ib.HasOpts),
        HM = Vi[PM];
      return Object.freeze({
        type: PM,
        variation: nM === hM.Tc ? void 0 : null !== (OM = null !== (SM = null === HM || void 0 === HM ? void 0 : HM[nM]) && void 0 !== SM ? SM : null === HM || void 0 === HM ? void 0 : HM[0]) && void 0 !== OM ? OM : "default",
        pose: QM === hM.$b ? void 0 : null !== (jM = hM.Bb[QM]) && void 0 !== jM ? jM : hM.Bb[0],
        metaInfo: zM === hM.$b ? void 0 : hM.Fc[zM],
        meshKind: LM === hM.$b ? void 0 : hM.Bc[LM],
        meshOpts: mM ? ci.decode(new Uint8Array(MM.buffer, MM.byteOffset + rM + hM.Jb.BYTES, iM)) : void 0
      })
    }
    const SO = 1,
      jO = 2;
    class aO {
      constructor(MM) {
        this.deps = MM, this.wanted = 0, this.sQ = !1, this.refused = !1
      }
      get on() {
        return this.sQ
      }
      want(MM, rM) {
        this.wanted = rM ? this.wanted | MM : this.wanted & ~MM;
        const iM = 0 !== this.wanted;
        if (iM === this.sQ) return;
        const OM = this.deps.cmd();
        null !== OM ? (0, hM.ug)(OM, 0, iM ? 1 : 0) ? (this.sQ = iM, this.refused = !1) : this.refused || (this.refused = !0, this.deps.onError(new Error("WatchEntityInfo didn't fit the command ring"))) : this.sQ = !1
      }
    }
    class PO {
      constructor(MM) {
        this.deps = MM, this.entries = new Map, this.complete = !1, this.refill = !1, this.midFrame = !1, this.pending = new Int32Array(64), this.pendingCount = 0, this.ids = new Int32Array(64)
      }
      get(MM) {
        var rM;
        return this.complete || this.fill(), null !== (rM = this.entries.get("string" === typeof MM ? MM : String(MM))) && void 0 !== rM ? rM : null
      }
      inCoreCall() {
        this.midFrame = !0
      }
      stale(MM) {
        if (this.complete) {
          if (this.pendingCount === this.pending.length) {
            const MM = new Int32Array(2 * this.pending.length);
            MM.set(this.pending), this.pending = MM
          }
          this.pending[this.pendingCount++] = MM
        }
      }
      removed(MM) {
        this.entries.size > 0 && this.entries.delete(String(MM))
      }
      refresh() {
        const MM = this.pendingCount;
        if (this.pendingCount = 0, this.midFrame = !1, !this.deps.watch.on || this.refill) return this.complete = !1, void(this.refill = !1);
        if (MM > 0 && this.complete) {
          const {
            api: rM
          } = this.deps;
          let iM = 0;
          const OM = this.ids = rO(this.ids, MM);
          for (let SM = 0; SM < MM; SM++) {
            const MM = this.pending[SM],
              jM = rM.indexById.get(MM);
            void 0 === jM || GM(rM.kinds[jM]) ? this.entries.delete(String(MM)) : OM[iM++] = MM
          }
          iM > 0 && !this.batch(OM, iM) && (this.complete = !1)
        }
      }
      sessionEnded() {
        this.entries.clear(), this.complete = !1, this.refill = !1, this.midFrame = !1, this.pendingCount = 0, this.deps.watch.want(SO, !1)
      }
      fill() {
        const {
          api: MM
        } = this.deps;
        if (this.complete = !0, this.pendingCount = 0, this.entries.clear(), this.deps.isSessionLive()) {
          const {
            watch: MM
          } = this.deps, rM = MM.on;
          MM.want(SO, !0), !rM && MM.on && (this.refill = this.midFrame)
        }
        const {
          ids: rM,
          count: iM
        } = MO(MM, this.ids);
        this.ids = rM, iM > 0 && !this.batch(rM, iM) && (this.refill = !0)
      }
      batch(MM, rM) {
        return iO(this.deps.api, MM, rM, ((MM, rM) => {
          null === rM ? this.entries.delete(String(MM)) : this.entries.set(String(MM), rM)
        }))
      }
    }
    var nO = iM(5200);

    function QO(MM) {
      if ("message" !== MM.type || MM.Kz !== nO.hc.NewClientOptions || MM.payloadKind !== mM.hc.Msgpack) return null;
      const rM = (0, fM.c)(MM.payload);
      if (null === rM || "object" !== typeof rM || Array.isArray(rM)) throw new Error("NewClientOptions whose body isn't an object of options");
      return rM
    }
    var zO = iM(1242),
      LO = iM(37559);

    function mO(MM, rM, iM, OM, SM, jM, PM) {
      var nM, QM, zM;
      switch (MM) {
        case hM._d.ToggleMenu: {
          const MM = hM.H[rM];
          aM.i.Tz("toggleMenu", void 0 === MM ? "inventory" : `inventory|${MM}`);
          break
        }
        case hM._d.EditBoard:
          aM.i.Tz("EditBoard", {
            pos: 0 === rM ? null : iM
          });
          break;
        case hM._d.EditCodeBlock:
        case hM._d.ViewCodeBlock:
          aM.i.Tz("EditCodeBlock", {
            pos: iM,
            canChangePos: MM === hM._d.EditCodeBlock
          });
          break;
        case hM._d.EditCustomLobbyBlock:
          aM.i.Tz("EditCustomLobbyBlock", {
            pos: iM
          });
          break;
        case hM._d.OpenIronChest:
          aM.i.Tz("OpenIronChest", {
            pos: iM
          });
          break;
        case hM._d.EditNameTag:
          aM.i.Tz("EditNameTag", null !== (nM = null === (QM = SM.sQ()) || void 0 === QM || null === (zM = QM.attributes.customAttributes) || void 0 === zM ? void 0 : zM.text) && void 0 !== nM ? nM : "");
          break;
        case hM._d.EditBook: {
          var LM, mM, JM;
          const MM = null === (LM = SM.sQ()) || void 0 === LM ? void 0 : LM.attributes;
          aM.i.Tz("EditBook", {
            pages: (0, zO.S)(null === MM || void 0 === MM || null === (mM = MM.customAttributes) || void 0 === mM ? void 0 : mM.pages),
            title: null !== (JM = null === MM || void 0 === MM ? void 0 : MM.customDisplayName) && void 0 !== JM ? JM : "Title",
            isPublished: !(null === MM || void 0 === MM || !MM.customDescription)
          });
          break
        }
        case hM._d.CantChangeBlock:
          ! function(MM, rM) {
            const iM = rM.getClientOption("cantChangeError"),
              OM = rM.getClientOption(MM ? "cantBuildError" : "cantBreakError"),
              SM = MM ? iM : OM;
            (rM.getClientOption("canChange") || SM || "You cannot modify this block" !== iM) && aM.i.Tz("showBottomMessage", {
              message: OM || iM,
              type: "Error"
            })
          }(1 === rM, jM);
          break;
        case hM._d.MiddleBarStart:
          aM.i.Tz("middleScreenBarInitiate", {
            duration: OM,
            zO: 1 === iM[0],
            horizBarRemOffset: rM
          });
          break;
        case hM._d.MiddleBarStop:
          aM.i.Tz("middleScreenBarRemove");
          break;
        case hM._d.Hitmarker:
          aM.i.Tz("localGunHitmarker", {
            mO: 1 === rM
          });
          break;
        case hM._d.ShotsLeft:
          aM.i.Tz("localPlayerNewShotsLeft", OM);
          break;
        case hM._d.AimingOverlay:
          aM.i.Tz("aimingOverlay", 3 === (3 & rM) ? "sniper" : "none");
          break;
        case hM._d.BottomMessage:
          aM.i.Tz("showBottomMessage", JSON.parse(PM()));
          break;
        case hM._d.Crosshair:
          SM.inaccuracy = (0, YM.h)(OM), (0, LO.e)().crosshairAccuracy(SM.inaccuracy);
          break;
        case hM._d.ChargeStage:
          break;
        case hM._d.EmoteWheelClose:
          aM.i.Tz("requestEmoteWheelClose");
          break;
        case hM._d.BlockMined:
          aM.i.Tz("localBlockMined");
          break;
        default:
          throw new HM.d(`UiEvent of no kind: what ${MM}`)
      }
    }
    var HO = iM(38973),
      hO = iM(35029),
      JO = iM(2078),
      dO = iM(37764),
      yO = iM(35037),
      lO = iM(5188);
    const EO = 10,
      UO = {
        player: [],
        chestOrCreative: [],
        chest: null,
        creative: !1,
        selectedSlot: 0,
        freeSlots: 0
      },
      GO = {
        items: [],
        ammo: 0,
        selectedSlot: 0
      },
      CO = {
        gun: !1,
        aimable: !1,
        chargeName: null
      };

    function eO(MM, rM) {
      let iM, OM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        SM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      const jM = () => (iM = (0, JO.r)(iM, rM()), iM);
      return {
        current: jM,
        watch(rM) {
          const iM = () => {
              rM(jM())
            },
            aM = [MM.watch(iM)];
          return null !== OM && aM.push((0, JO.u)((MM => {
            MM.some(OM) && iM()
          }))), null !== SM && aM.push(SM(iM)), () => {
            for (const MM of aM) MM()
          }
        }
      }
    }

    function bO(MM) {
      return MM && {
        name: MM.name,
        amount: MM.amount,
        attributes: MM.attributes
      }
    }
    const wO = new WeakMap;

    function tO(MM) {
      let rM = wO.get(MM);
      return void 0 === rM && (rM = (0, yO.creativeItemIds)().map((rM => ({
        name: MM.nameOfId(rM),
        amount: MM.isStackableId(rM) ? 1 : null,
        attributes: (0, HO.b)("Gun" === (0, yO.itemTypeOf)(rM) ? {
          type: "Gun",
          clipSize: (0, yO.clipSizeOf)(rM)
        } : void 0)
      }))), wO.set(MM, rM)), rM
    }

    function gO(MM, rM, iM, OM) {
      const SM = rM => (MM.flush(OM), rM),
        jM = iM => {
          var OM, SM, jM, aM, PM, nM, QM;
          const zM = MM.slot(iM);
          if (!zM) return null;
          const {
            rootName: LM,
            metaStr: mM
          } = rM.getMetaInfo(zM.name);
          return {
            name: zM.name,
            amount: zM.amount,
            attributes: zM.attributes,
            instance: MM.instance(iM),
            displayName: null !== (OM = zM.attributes.customDisplayName) && void 0 !== OM ? OM : rM.getDisplayName(LM),
            requiresAmmo: "RequiresAmmo" === mM,
            clipSize: null !== (SM = null !== (jM = null === (aM = zM.attributes.customAttributes) || void 0 === aM || null === (PM = aM.gunStats) || void 0 === PM ? void 0 : PM.clipSize) && void 0 !== jM ? jM : null === (nM = rM.getGunStats(LM)) || void 0 === nM ? void 0 : nM.clipSize) && void 0 !== SM ? SM : null === (QM = zM.typeObj) || void 0 === QM ? void 0 : QM.clipSize
          }
        },
        PM = function(MM, rM) {
          let iM = null,
            OM = {
              focus: null,
              recipes: [],
              detail: null
            },
            SM = -1;
          const jM = new Set;
          return {
            read() {
              var jM, aM;
              if (null === iM) return null !== OM.focus && (OM = {
                ...OM,
                focus: null
              }), OM;
              if (OM.focus === iM && SM === MM.changes) return OM;
              if (SM = MM.changes, 0 === MM.length) return OM = {
                focus: iM,
                recipes: [],
                detail: null
              }, OM;
              let PM = 0;
              if (null !== iM.recipe) try {
                PM = rM.getItemId(iM.recipe.name)
              } catch {}
              const nM = MM.craftingView(iM.station, PM, null !== (jM = null === (aM = iM.recipe) || void 0 === aM ? void 0 : aM.ma) && void 0 !== jM ? jM : 0);
              return OM = null === nM ? {
                focus: iM,
                recipes: [],
                detail: null
              } : function(MM, rM, iM) {
                let OM = hM.gb.BYTES;
                const SM = [];
                for (let zM = hM.gb.recipes(MM, 0); zM > 0; zM--) {
                  const iM = hM.$.flags(MM, OM),
                    jM = {
                      name: rM.nameOfId(hM.$.item(MM, OM)),
                      ma: hM.$.recipe(MM, OM),
                      requires: [],
                      produces: hM.$.produces(MM, OM),
                      haveIngredients: 0 !== (iM & hM._.HaveIngredients),
                      listed: 0 !== (iM & hM._.Listed)
                    };
                  let aM = hM.$.requires(MM, OM);
                  for (OM += hM.$.BYTES; aM > 0; aM--) {
                    const iM = hM.cb.items(MM, OM);
                    jM.requires.push({
                      items: pO(MM, OM + hM.cb.BYTES, iM, rM),
                      amt: hM.cb.amount(MM, OM)
                    }), OM += hM.cb.BYTES + 2 * iM
                  }
                  SM.push(jM)
                }
                const jM = hM.gb.flags(MM, 0);
                if (null === iM.recipe || 0 === (jM & hM.eb.Detail)) return {
                  focus: iM,
                  recipes: SM,
                  detail: null
                };
                const aM = {},
                  PM = {};
                for (let zM = hM.gb.ingredients(MM, 0); zM > 0; zM--) {
                  const iM = hM.Y.item(MM, OM),
                    SM = hM.Y.from(MM, OM),
                    jM = hM.Y.amount(MM, OM);
                  OM += hM.Y.BYTES;
                  const nM = SM === hM.E ? null : pO(MM, OM, SM, rM);
                  if (null !== nM && (OM += 2 * SM), 0 === iM) continue;
                  const QM = rM.nameOfId(iM);
                  aM[QM] = jM, null !== nM && (PM[QM] = nM)
                }
                const {
                  name: nM,
                  ma: QM
                } = iM.recipe;
                return {
                  focus: iM,
                  recipes: SM,
                  detail: {
                    name: nM,
                    ma: QM,
                    craftAllTimes: hM.gb.craftAllTimes(MM, 0),
                    roomForOne: 0 !== (jM & hM.eb.RoomForOne),
                    resultStackable: Boolean(rM.getItemStat(nM, "stackable")),
                    amounts: aM,
                    ingredientsCraftedFrom: PM
                  }
                }
              }(nM, rM, iM), OM
            },
            setFocus(MM) {
              iM = MM;
              for (const rM of [...jM]) rM()
            },
            watchFocus: MM => (jM.add(MM), () => {
              jM.delete(MM)
            })
          }
        }(MM, rM);
      return {
        states: {
          inventory: eO(MM, (() => {
            const iM = MM.length;
            if (0 === iM) return UO;
            const OM = [];
            for (let rM = 0; rM < hM.gd; rM++) OM.push(bO(MM.slot(rM)));
            const SM = MM.slotIcon,
              jM = OM[MM.selectedSlot];
            0 !== SM && jM && (OM[MM.selectedSlot] = {
              ...jM,
              icon: rM.nameOfId(SM)
            });
            const aM = !0 === rM.getClientOption("creative");
            let PM = [],
              nM = null;
            if (iM > hM.gd) {
              for (let rM = hM.gd; rM < iM; rM++) PM.push(bO(MM.slot(rM)));
              nM = {
                type: null,
                pos: [...MM.ti],
                numSlots: iM - hM.gd,
                ironChest: null
              }
            } else aM && (PM = tO(rM));
            return {
              player: OM,
              chestOrCreative: PM,
              chest: nM,
              creative: aM,
              selectedSlot: MM.selectedSlot,
              freeSlots: MM.freeSlots()
            }
          }), (0, JO.p)("creative")),
          hotbar: eO(MM, (() => {
            if (0 === MM.length) return GO;
            const rM = [];
            for (let MM = 0; MM < EO; MM++) rM.push(jM(MM));
            return {
              items: rM,
              ammo: MM.amountOf("Ammo"),
              selectedSlot: MM.selectedSlot
            }
          }), (0, JO.l)("DisplayName", "GunStats")),
          crafting: eO(MM, PM.read, null, PM.watchFocus),
          heldItemAim: eO(MM, (() => {
            var rM;
            if (!iM()) return CO;
            const OM = null === (rM = MM.sQ()) || void 0 === rM ? void 0 : rM.typeObj,
              SM = "Gun" === (null === OM || void 0 === OM ? void 0 : OM.type);
            return {
              gun: SM,
              aimable: SM || !0 === (null === OM || void 0 === OM ? void 0 : OM.showsAimingUi),
              chargeName: "Chargeable" === (null === OM || void 0 === OM ? void 0 : OM.type) ? OM.name : null
            }
          }), null, (MM => function(MM, rM) {
            let iM = MM();
            return (0, lO.y)((() => {
              const OM = MM();
              OM !== iM && (iM = OM, rM(OM))
            }))
          }(iM, MM)))
        },
        events: {
          hotbarSlotRequested: (0, JO.d)("setSelectedInventorySlotI"),
          hotbarScrolled: (0, JO.d)("ScrollInventorySlot"),
          numberKeyPressed: (0, JO.d)("numkeyPressed"),
          inventoryDropRequested: (0, JO.d)("DropInvenItem"),
          chestToggled: (0, JO.d)("chestToggleFromServer"),
          chestRefreshed: (0, JO.d)("chestRefreshedFromServer", RO),
          inventorySynced: (0, JO.d)("syncedInvenFromServer", RO),
          enchantingTableOpened: (0, JO.d)("enchantingTable", (MM => {
            let {
              position: iM,
              jP: OM
            } = MM;
            return {
              position: [...iM],
              blockName: rM.getMetaInfo(OM).rootName
            }
          }))
        },
        commands: {
          selectHotbarSlot(rM) {
            MM.selectSlot(rM), MM.flush(OM)
          },
          removeInventoryItem(rM) {
            let {
              slot: iM,
              amount: OM,
              drop: jM
            } = rM;
            return SM(MM.remove(iM, OM, jM))
          },
          swapInventorySlots(rM) {
            let {
              a: iM,
              b: OM
            } = rM;
            return SM(MM.swap(iM, OM))
          },
          moveInventoryItem(rM) {
            let {
              from: iM,
              to: OM,
              amount: jM
            } = rM;
            return SM(MM.move(iM, OM, jM))
          },
          quickMoveInventoryItem(rM) {
            let {
              slot: iM,
              start: OM,
              end: jM,
              amount: aM
            } = rM;
            return SM(MM.quickMove(iM, OM, jM, aM))
          },
          closeChest() {
            MM.closeChest(), MM.flush(OM), aM.i.Tz("chestClosedByPlayer")
          },
          focusCrafting(MM) {
            PM.setFocus(MM)
          },
          craftRecipe(rM) {
            let {
              name: iM,
              ma: OM,
              times: jM
            } = rM;
            return SM(MM.craft(iM, OM, jM))
          },
          salvageItem(rM) {
            let {
              slot: iM,
              name: OM,
              amount: jM
            } = rM;
            return SM(MM.salvage(iM, OM, jM))
          },
          enchantItem(rM) {
            let {
              slot: iM,
              level: OM,
              tablePos: SM
            } = rM;
            MM.enchant(iM, OM, SM)
          }
        },
        queries: {
          enchantingOffer(iM) {
            let {
              slot: OM,
              blockName: SM
            } = iM;
            return function(MM, rM, iM, OM) {
              const SM = MM.slot(iM);
              if (!SM || !rM.getClientOption("canCraft") || !(0, hO.p)(OM) || (0, hO.o)(SM.attributes)) return uO;
              const jM = (0, yO.enchantmentPerksOf)(rM.getItemId(SM.name));
              if (0 === jM.length) return uO;
              const aM = [];
              for (let PM = 0; PM < dO.d; PM++) {
                const {
                  commonProb: MM,
                  uncommonProb: rM,
                  rareProb: iM,
                  epicProb: SM,
                  legendaryProb: jM,
                  level: nM
                } = (0, hO.f)(OM, PM);
                aM.push({
                  level: nM,
                  odds: [MM, rM, iM, SM, jM].map((MM => 100 * MM))
                })
              }
              return {
                perks: [...jM],
                options: aM
              }
            }(MM, rM, OM, SM)
          }
        }
      }
    }
    const uO = Object.freeze({
      perks: [],
      options: []
    });

    function RO() {
      return null
    }

    function pO(MM, rM, iM, OM) {
      const SM = [];
      for (let jM = 0; jM < iM; jM++) {
        const iM = MM.getUint16(rM + 2 * jM, !0);
        0 !== iM && SM.push(OM.nameOfId(iM))
      }
      return SM
    }
    class WO {
      constructor(MM) {
        this.api = MM, this.positions = new Map, this.targeted = {
          VV: 0,
          position: [0, 0, 0],
          normal: [0, 0, 0],
          zd: [0, 0, 0]
        }, this.hasTarget = !1, this.breaking = [0, 0, 0], this.isBreaking = !1
      }
      position(MM) {
        let rM = this.positions.get(MM);
        return rM || (this.api.checkValid(MM) || this.api.isLocal(MM) ? (rM = [NaN, NaN, NaN], this.api.readPosition(MM, rM), this.positions.set(MM, rM), rM) : null)
      }
      pMM() {
        return this.hasTarget ? this.targeted : null
      }
      breakingPosition() {
        return this.isBreaking ? this.breaking : null
      }
      refresh() {
        for (const [rM, iM] of this.positions) this.api.readPosition(rM, iM) || this.api.checkValid(rM) || this.api.isLocal(rM) || this.positions.delete(rM);
        const MM = this.api.apiView;
        if (this.refreshTarget(), this.isBreaking = 0 !== (hM.v.playerFlags(MM, 0) & hM.yd.Breaking) && hM.v.breakingProgress(MM, 0) >= 0, this.isBreaking)
          for (let rM = 0; rM < 3; rM++) this.breaking[rM] = hM.v.breakingPos(MM, 0, rM)
      }
      refreshTarget() {
        const MM = this.api.apiView,
          rM = hM.v.targetBlockId(MM, 0);
        if (this.hasTarget = rM !== hM.Pc, this.hasTarget) {
          const iM = this.targeted;
          iM.VV = rM;
          for (let rM = 0; rM < 3; rM++) iM.position[rM] = hM.v.targetBlock(MM, 0, rM), iM.normal[rM] = hM.v.targetNormal(MM, 0, rM), iM.zd[rM] = hM.v.targetAdjacent(MM, 0, rM)
        }
      }
      despawned(MM) {
        const rM = this.positions.get(MM);
        rM && !this.api.isLocal(MM) && (rM.fill(NaN), this.positions.delete(MM))
      }
    }
    var sO = iM(41710),
      DO = iM(41697),
      kO = iM(37316),
      ZO = iM(37761);
    const oO = 1,
      fO = 2;
    class YO {
      constructor() {
        this.game = new ZO.g, this.client = new ZO.g, this.sQ = 0, this.movesFly = null
      }
      setGame(MM) {
        if (null === MM || "object" !== typeof MM) return !1;
        const {
          key: rM,
          value: iM
        } = MM;
        return "string" === typeof rM && (this.game.setBooleanType(rM, Boolean(iM)), !0)
      }
      setClient(MM, rM) {
        this.client.setBooleanType(MM, rM)
      }
      clearGame() {
        this.game = new ZO.g, this.movesFly = null
      }
      setMovesFly(MM) {
        this.movesFly = MM
      }
      perms() {
        return (this.game._getTotalBooleanVal() ? oO : 0) | (this.client._getTotalBooleanVal() ? fO : 0)
      }
      write(MM) {
        const rM = this.perms(),
          {
            movesFly: iM
          } = this;
        if (rM === this.sQ && null === iM) return !0;
        let OM = hM.Lb.Keep;
        return null !== iM && (OM = iM ? hM.Lb.On : hM.Lb.Off), !(!MM || !(0, hM.xe)(MM, 0, OM, rM, iM ? 1 : 0)) && (this.sQ = rM, this.movesFly = null, !0)
      }
    }
    class NO {
      constructor(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => 35;
        this.api = MM, this.screenBandPct = void 0, this.clipX = 0, this.clipY = 0, this.clipW = 0, this.eye = [0, 0, 0], this.forward = [0, 0, 1], this.along = [0, 0, 0], this.screenBandPct = {
          x: PM.e,
          get y() {
            return rM()
          }
        }
      }
      get hasView() {
        const MM = this.api.apiView,
          rM = hM.v.viewProj;
        return 0 !== rM(MM, 0, 3) || 0 !== rM(MM, 0, 7) || 0 !== rM(MM, 0, 11) || 0 !== rM(MM, 0, 15)
      }
      get cameraPosition() {
        const MM = this.api.apiView,
          {
            eye: rM
          } = this;
        for (let iM = 0; iM < 3; iM++) rM[iM] = hM.v.eye(MM, 0, iM);
        return rM
      }
      get cameraDirection() {
        const MM = this.api.apiView,
          rM = hM.v.viewProj,
          iM = rM(MM, 0, 3),
          OM = rM(MM, 0, 7),
          SM = rM(MM, 0, 11),
          jM = Math.hypot(iM, OM, SM),
          {
            forward: aM
          } = this;
        return jM > 0 && (aM[0] = iM / jM, aM[1] = OM / jM, aM[2] = SM / jM), aM
      }
      get cameraHeading() {
        return hM.v.heading(this.api.apiView, 0)
      }
      get cameraPitch() {
        return hM.v.pitch(this.api.apiView, 0)
      }
      get tanHalfFovX() {
        return hM.v.tanHalfFovX(this.api.apiView, 0)
      }
      get tanHalfFovY() {
        return hM.v.tanHalfFovY(this.api.apiView, 0)
      }
      projectWorldPosToScreenPos(MM) {
        this.clip(MM);
        const {
          clipX: rM,
          clipY: iM,
          clipW: OM
        } = this;
        if (OM > 0) {
          const MM = rM / OM * 50,
            SM = -iM / OM * 50;
          return Math.abs(MM) <= this.screenBandPct.x && Math.abs(SM) <= this.screenBandPct.y ? {
            x: 50 + MM,
            y: 50 + SM
          } : this.clampToBand(MM, SM)
        }
        const SM = this.cameraPosition,
          jM = Math.hypot(MM[0] - SM[0], MM[1] - SM[1], MM[2] - SM[2]),
          aM = this.api.apiView,
          PM = hM.v.viewProj,
          nM = jM > 0 ? rM / jM : 0,
          QM = jM > 0 ? -iM / jM : 0,
          zM = Math.hypot(PM(aM, 0, 1), PM(aM, 0, 5), PM(aM, 0, 9)),
          LM = nM / Math.hypot(PM(aM, 0, 0), PM(aM, 0, 4), PM(aM, 0, 8)),
          mM = QM / zM,
          HM = !(Math.abs(LM) >= .001 || Math.abs(mM) >= .001);
        return this.clampToBand(nM, HM ? -(zM || 1) : QM)
      }
      projectDirectionToScreenPos(MM) {
        if (!this.hasView) return;
        const rM = this.cameraPosition,
          iM = this.along;
        for (let OM = 0; OM < 3; OM++) iM[OM] = rM[OM] + 10 * MM[OM];
        return this.projectWorldPosToScreenPos(iM)
      }
      projectWorldPosToViewport(MM) {
        this.clip(MM);
        const {
          clipX: rM,
          clipY: iM,
          clipW: OM
        } = this;
        return OM > 0 ? {
          x: 50 + rM / OM * 50,
          y: 50 - iM / OM * 50
        } : null
      }
      clip(MM) {
        const rM = this.api.apiView,
          iM = MM[0] - hM.v.origin(rM, 0, 0),
          OM = MM[1] - hM.v.origin(rM, 0, 1),
          SM = MM[2] - hM.v.origin(rM, 0, 2),
          jM = hM.v.viewProj;
        this.clipX = jM(rM, 0, 0) * iM + jM(rM, 0, 4) * OM + jM(rM, 0, 8) * SM + jM(rM, 0, 12), this.clipY = jM(rM, 0, 1) * iM + jM(rM, 0, 5) * OM + jM(rM, 0, 9) * SM + jM(rM, 0, 13), this.clipW = jM(rM, 0, 3) * iM + jM(rM, 0, 7) * OM + jM(rM, 0, 11) * SM + jM(rM, 0, 15)
      }
      clampToBand(MM, rM) {
        return (0, PM.g)(MM, rM, this.screenBandPct.x, this.screenBandPct.y)
      }
    }
    var AO = iM(5207);
    const xO = new TextEncoder,
      vO = new Uint8Array(hM.L * hM.I);
    class FO {
      constructor() {
        this.buttons = [], this.sQ = !0
      }
      set(MM) {
        this.buttons = MM, this.sQ = !1
      }
      attached() {
        this.sQ = 0 === this.buttons.length
      }
      write(MM) {
        if (this.sQ) return;
        const rM = new Uint8Array(hM.L),
          iM = new Uint8Array(hM.L);
        let OM = 0,
          SM = 0;
        for (const {
            id: jM,
            keycode: aM
          }
          of this.buttons) {
          if (OM === hM.L) break;
          const {
            read: MM,
            written: PM
          } = xO.encodeInto(jM, vO.subarray(SM, SM + hM.I));
          if (MM < jM.length) continue;
          const nM = AO.n[aM];
          rM[OM] = "number" === typeof nM ? nM : 0, iM[OM] = PM, OM++, SM += PM
        }
        this.sQ = (0, hM.je)(MM, 0, OM, rM, iM, vO.subarray(0, SM))
      }
    }

    function BO(MM, rM, iM) {
      const OM = xO.encode(rM);
      return OM.length <= hM.I && function(MM, rM, iM, OM) {
        return (0, Oi.e)(), (0, hM.sf)(MM, rM, iM, OM)
      }(MM, 0, iM ? 1 : 0, OM)
    }
    var XO = iM(40312);
    const IO = new TextDecoder,
      KO = new TextEncoder,
      qO = new Uint8Array(0),
      TO = [0, 0, 0],
      VO = {
        off: hM.Cd.Off,
        key: hM.Cd.Key,
        touch: hM.Cd.Touch
      };
    class cO {
      constructor(MM) {
        var rM;
        this.options = MM, this.renderFrame = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.entityInfo = void 0, this.entityInfoWatch = void 0, this.particles = void 0, this.clientApi = void 0, this.scriptedCamera = void 0, this.owners = [], this.tickers = [], this.renderers = [], this.receivers = [], this.failures = [], this.vetoSet = !1, this.hooksSet = !1, this.writtenPublicLobby = !1, this.promptWatch = "off", this.promptWatchSent = "off", this.customButtons = new FO, this.generation = 0, this.sessionLive = !1, this.boundId = 0, this.session = null, this.activeConn = 0, this.closedThrough = 0, this.openSocket = 0, this.socketLeftSinceAttach = !1, this.ticks = 0, this.zoomUnshown = !1, this.zoomHeld = !1, this.overflowGen = 0, this.resyncOwed = !1, this.zoom = 0, this.localPhysicsType = tM.n.DEFAULT, this.pendingZoom = null, this.highlight = null, this.highlightOwed = !1, this.cmd = null, this.freeCam = new YO, this.stopped = () => !1, this.onError = void 0, this.api = void 0, this.tables = void 0, this.itemSources = null, this.fault = void 0, this.aL = MM => {
          if ((0, HM.h)(MM)) throw MM;
          this.onError(MM)
        }, this.api = MM.api, this.tables = MM.tables, this.onError = null !== (rM = MM.onError) && void 0 !== rM ? rM : MM => {
          console.error("Error in client game callback", MM)
        }, this.renderFrame = new NO(this.api, MM.screenBandY), this.live = new WO(this.api), this.chunks = new zr(this.api.memory, (() => this.api.apiView)), this.items = new si({
          api: this.api,
          tables: MM.tables,
          cmd: () => this.cmd,
          onError: this.onError,
          beforeOp: MM.beforeOp
        });
        const iM = () => this.stopped() ? null : this.cmd,
          OM = () => this.sessionLive;
        this.entityInfoWatch = new aO({
          cmd: iM,
          onError: this.onError
        }), this.entityInfo = new PO({
          api: this.api,
          watch: this.entityInfoWatch,
          isSessionLive: OM
        }), this.particles = new qi({
          cmd: iM,
          isSessionLive: OM,
          onError: this.onError
        }), this.clientApi = new Ci({
          api: this.api,
          live: this.live,
          chunks: this.chunks,
          items: this.items,
          entityInfo: this.entityInfo,
          particles: this.particles,
          tables: MM.tables,
          cmd: iM,
          sendCmd: () => this.sendCmd(),
          isSessionLive: OM,
          beforeWrite: () => {
            var rM;
            if (this.stopped()) return !1;
            const iM = this.generation;
            return !1 !== (null === (rM = MM.beforeWrite) || void 0 === rM ? void 0 : rM.call(MM)) && iM === this.generation
          },
          playerDbId: () => {
            const MM = this.session;
            if (null === MM) throw new Error("No game session has started, so the local player has no DB id");
            return MM.playerDbId
          },
          playSound: MM.playSound,
          preloadSounds: MM.preloadSounds,
          setLocalOptions: MM.setLocalOptions,
          hasPackModel: MM.hasPackModel,
          localPhysicsType: () => this.localPhysicsType
        }), this.scriptedCamera = new IM({
          api: this.api,
          cmd: () => this.stopped() ? null : this.cmd,
          screen: MM.cameraScreen,
          showFacing: MM.showCameraFacing
        })
      }
      get itemBridgeSources() {
        return this.itemSources ??= gO(this.items, this.tables, (() => this.localPlayerAlive()), this.aL), this.itemSources
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
      clickCodeBlock(MM) {
        const rM = this.sessionLive ? this.sendCmd() : null;
        return null !== rM && (iM = rM, OM = 0, SM = MM[0], jM = MM[1], aM = MM[2], (0, Oi.e)(), (0, hM.pe)(iM, OM, SM, jM, aM));
        var iM, OM, SM, jM, aM
      }
      cameraZoom() {
        return this.zoom
      }
      setCameraZoom(MM) {
        const rM = this.liveCmd();
        return null === rM ? (this.pendingZoom = MM, !1) : (this.pendingZoom = null, (0, hM.mg)(rM, 0, MM, 1))
      }
      OW(MM) {
        const rM = this.stopped() ? null : this.cmd;
        return null !== rM && (0, hM.eg)(rM, 0, MM ? 1 : 0)
      }
      respawn() {
        const MM = this.sessionLive ? this.sendCmd() : null;
        return null !== MM && (rM = MM, iM = 0, (0, Oi.e)(), (0, hM.Hf)(rM, iM));
        var rM, iM
      }
      bindCustomButtonKeys(MM) {
        this.customButtons.set(MM)
      }
      pressCustomButton(MM, rM) {
        const iM = this.sessionLive ? this.sendCmd() : null;
        return null !== iM && BO(iM, MM, rM)
      }
      padMove(MM, rM, iM, OM, SM, jM) {
        const aM = this.liveCmd();
        return null !== aM && (0, hM.df)(aM, 0, MM, rM, iM, OM, SM, jM)
      }
      thirdPersonFor(MM) {
        const rM = this.liveCmd();
        return null !== rM && (0, hM.tg)(rM, 0, null !== MM && void 0 !== MM ? MM : 1 / 0)
      }
      send(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const OM = 0 !== this.openSocket || this.sessionLive ? this.sendCmd() : null;
        return null !== OM && Si(OM, iM ? mM.ld : 0, MM, (0, fM.f)(rM))
      }
      socketAttached(MM) {
        this.openSocket = MM, this.socketLeftSinceAttach = !1
      }
      socketDetached(MM) {
        this.openSocket === MM && (this.openSocket = 0)
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
      attach(MM) {
        const rM = () => MM.isStopped;
        this.stopped = rM, this.cmd = MM.rings.cmd, this.promptWatchSent = "off", this.writePromptWatch(), this.customButtons.attached(), this.writeCustomButtons();
        const iM = this.api.apiView;
        this.overflowGen = hM.v.eventOverflowGen(iM, 0), this.resyncOwed = 0 !== hM.v.eventOverflowMask(iM, 0), MM.setGameHost(this), MM.setEventWalker((MM => {
          this.api.walk(MM, this, rM)
        }))
      }
      watchPromptPick(MM) {
        this.promptWatch = MM, this.writePromptWatch()
      }
      get promptEntity() {
        return "off" === this.promptWatch || this.stopped() ? null : MS(hM.v.promptEntity(this.api.apiView, 0))
      }
      get interactLabel() {
        return "touch" !== this.promptWatch || this.stopped() ? hM.ic.None : hM.v.interactLabel(this.api.apiView, 0)
      }
      get interactIcon() {
        return "touch" !== this.promptWatch || this.stopped() ? 0 : hM.v.interactIcon(this.api.apiView, 0)
      }
      closeGame() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        (0 === MM || MM >= this.openSocket) && (this.openSocket = 0), this.closedThrough = Math.max(this.closedThrough, MM, this.activeConn), this.activeConn = 0, this.endSession(), this.endGameGrants(), this.dropGameCamera()
      }
      gameCamera(MM) {
        0 !== this.activeConn && this.scriptedCamera.settingsChanged(MM)
      }
      netEvent(MM) {
        "connection" === MM.type ? MM.phase === mM.F.Activated && MM.conn !== this.activeConn && MM.conn > this.closedThrough ? (this.endSession(), this.activeConn = MM.conn, this.endGameGrants(), this.dropGameCamera()) : MM.phase !== mM.F.Left && MM.phase !== mM.F.Closed || MM.conn !== this.activeConn ? MM.phase === mM.F.Resumed && 0 !== this.activeConn && MM.conn > this.closedThrough && (this.activeConn = MM.conn) : this.closeGame() : MM.conn === this.activeConn && 0 !== MM.conn && (MM.Kz === DO.u ? this.gunHit(MM.payload) : MM.Kz === nO.hc.EditItemCraftingRecipes || MM.Kz === DO.R ? this.items.touch() : (this.serverOptions(MM), this.gameMessage(MM)));
        const rM = this.options.onNetEvent;
        rM && this.guard((() => {
          rM(MM)
        }))
      }
      serverOptions(MM) {
        const rM = this.options.serverOptions,
          iM = rM ? this.decoded(QO, MM) : null;
        rM && iM && this.guard((() => {
          rM.applyNewClientOptions(iM)
        }))
      }
      gameMessage(MM) {
        let rM = null;
        try {
          rM = function(MM) {
            if ("message" !== MM.type || MM.Kz !== nO.hc.GameCodeMessage || MM.payloadKind !== mM.hc.Msgpack) return null;
            const rM = (0, fM.c)(MM.payload);
            if (null === rM || "object" !== typeof rM || "string" !== typeof rM.messageType) throw new Error("GameCodeMessage without a messageType");
            return rM
          }(MM)
        } catch (iM) {
          this.sessionLive && this.onError(iM)
        }
        if (rM) {
          const {
            messageType: MM,
            data: iM
          } = rM;
          if ((0, pM.d)(MM)) return void this.guard((() => {
            (0, pM.b)(MM, iM)
          }));
          "freeCamPerms" === MM && this.freeCam.setGame(iM) && this.writeFreeCam(), this.sessionLive && this.round(this.receivers, (rM => {
            rM.onReceivedMessageFromServer(MM, iM)
          }))
        }
      }
      decoded(MM, rM) {
        try {
          return MM(rM)
        } catch (iM) {
          return this.onError(iM), null
        }
      }
      setClientFreeCameraGrant(MM, rM) {
        this.freeCam.setClient(MM, rM), this.writeFreeCam()
      }
      freeCameraAllowed() {
        return 0 !== this.freeCam.perms()
      }
      setFreeCameraMovesFly(MM) {
        this.freeCam.setMovesFly(MM), this.writeFreeCam()
      }
      setBlockHighlight(MM) {
        this.highlight = MM, this.highlightOwed = !0, this.writeOwedHighlight()
      }
      writeOwedHighlight() {
        const MM = this.liveCmd();
        if (null === MM || !this.highlightOwed) return;
        const rM = this.highlight;
        this.highlightOwed = null === rM ? !(0, hM.Me)(MM, 0, TO, TO, 0) : !(0, hM.Me)(MM, 0, rM.pos, rM.normal, 1)
      }
      localPlayerBound(MM) {
        var rM, iM;
        if (0 === this.activeConn || this.sessionLive && MM === this.boundId) return;
        const OM = this.sessionLive;
        let SM, jM, aM, PM;
        this.endSession(), OM && this.restartGameCamera();
        try {
          var nM;
          this.session = null;
          const MM = this.options.sessionInfo(this.activeConn);
          if (this.session = MM, !MM) return;
          SM = MM.gameNameWithVariation, jM = null !== (nM = (0, gM.Jb)(SM)) && void 0 !== nM ? nM : void 0, aM = (0, uM.w)(MM.lobbyName), PM = (0, uM.P)(MM.lobbyName)
        } catch (lM) {
          return void this.onError(lM)
        }
        const QM = {
          localPlayerId: String(MM)
        };
        let zM = {},
          LM = [];
        try {
          var mM, HM;
          zM = null !== (mM = null === (HM = this.options.gameFactory((0, gM.Mb)(SM))) || void 0 === HM ? void 0 : HM(PM, aM, jM, QM)) && void 0 !== mM ? mM : {}
        } catch (lM) {
          this.aL(lM)
        }
        try {
          var hM, JM;
          LM = (0, RM.c)(null === (hM = (JM = this.options).defaultPlugins) || void 0 === hM ? void 0 : hM.call(JM, PM, aM, jM, QM), zM.plugins)
        } catch (lM) {
          this.aL(lM)
        }
        const dM = [zM, ...LM];
        this.owners = dM, this.tickers = dM.filter((MM => void 0 !== MM.bL)), this.renderers = dM.filter((MM => void 0 !== MM.onAfterRender)), this.receivers = dM.filter((MM => void 0 !== MM.onReceivedMessageFromServer)), this.writeAltVeto(dM), this.writeHooks(dM), this.writePublicLobby(PM), this.writeLocalDbId(null !== (rM = null === (iM = this.session) || void 0 === iM ? void 0 : iM.playerDbId) && void 0 !== rM ? rM : null), this.boundId = MM, this.sessionLive = !0, this.generation++, null !== this.pendingZoom && this.setCameraZoom(this.pendingZoom), this.highlightOwed ||= null !== this.highlight, this.writeOwedHighlight(), this.round(dM, (MM => {
          var rM;
          null === (rM = MM.onCreate) || void 0 === rM || rM.call(MM, this.clientApi)
        }));
        const yM = this.generation;
        setTimeout((() => {
          yM === this.generation && !0 === this.tables.getClientOption("creative") && tO(this.tables)
        }), 0)
      }
      chunkSlot(MM, rM, iM, OM, SM, jM) {
        this.chunks.apply(MM, rM, iM, OM, SM, jM)
      }
      entityAdded(MM) {
        var rM;
        this.entityInfo.stale(MM), null === (rM = this.options.replayEntities) || void 0 === rM || rM.entityAdded(MM)
      }
      entityInfoChanged(MM) {
        var rM;
        this.entityInfo.stale(MM), null === (rM = this.options.replayEntities) || void 0 === rM || rM.entityInfoChanged(MM)
      }
      afterPrescan() {
        this.items.refresh(), this.entityInfo.refresh(), this.api.rereadDirectory(), this.chunks.refresh(), this.live.refresh()
      }
      tickEnd() {
        if (this.ticks++, this.tickers.length > 0) {
          const MM = performance.now();
          this.round(this.tickers, rS), (0, lO.e)(performance.now() - MM)
        }
      }
      afterWalk(MM) {
        this.ackEventOverflow(), this.clientApi.flushOwed(), this.writeOwedHighlight();
        const rM = this.options.replayEntities;
        rM && this.guard((() => {
          this.entityInfoWatch.want(jO, rM.wantsWatch), rM.flush(this.entityInfoWatch.on)
        }));
        const iM = this.api.apiView,
          OM = hM.v.frameMs(iM, 0);
        kO.l.frame(OM, hM.v.heading(iM, 0), hM.v.pitch(iM, 0), kO.i[MM]);
        const SM = (0, lO.k)(MM, OM);
        if (null !== SM) {
          const MM = this.renderFrame;
          this.guard((() => {
            (0, LO.e)().turnDamageIndicators(MM.cameraHeading)
          })), this.guard((() => {
            this.clientApi.slideRoute(SM)
          })), this.round(this.renderers, (rM => {
            rM.onAfterRender(SM, MM)
          }))
        }
        this.writeFreeCam();
        try {
          this.scriptedCamera.afterFrame(null !== SM)
        } catch (aM) {
          this.aL(aM)
        }
        this.showZoom(), this.items.flush(this.aL), this.writePromptWatch(), this.writeCustomButtons();
        const jM = this.ticks;
        this.ticks = 0, (0, lO.i)(jM, MM, SM, this.aL)
      }
      entityRemoved(MM) {
        this.live.despawned(MM), this.entityInfo.removed(MM)
      }
      ackEventOverflow() {
        const MM = this.api.apiView,
          rM = hM.v.eventOverflowGen(MM, 0),
          iM = rM - this.overflowGen >>> 0;
        if (0 === iM && !this.resyncOwed) return;
        this.overflowGen = rM;
        const OM = hM.v.eventOverflowMask(MM, 0),
          SM = this.cmd;
        0 === OM || null === SM || this.stopped() ? this.resyncOwed = !1 : this.resyncOwed = !(0, hM.ve)(SM, 0, OM);
        const jM = this.options.onEventOverflow;
        0 !== iM && jM && this.guard((() => {
          jM(OM, iM)
        }))
      }
      gameCall(MM, rM, iM, OM, SM, jM, aM, PM, nM) {
        if (MM === hM._b.Director) try {
          return this.scriptedCamera.call(rM, iM, OM, SM, jM, aM)
        } catch (QM) {
          return this.aL(QM), hM.kb.None
        }
        if (!this.sessionLive || void 0 !== this.fault) return MM === hM._b.AltVeto ? hM.j.Allow : 0;
        try {
          return this.callGames(MM, rM, iM, OM, SM, jM, aM, PM)
        } catch (QM) {
          throw (0, HM.h)(QM) && (this.fault = QM), QM
        }
      }
      takeFault() {
        const MM = this.fault;
        return this.fault = void 0, MM
      }
      callGames(MM, rM, iM, OM, SM, jM, aM, PM) {
        this.api.rereadDirectory(), this.chunks.touch(), this.items.refresh(), this.live.refresh(), this.entityInfo.inCoreCall();
        const {
          tables: nM
        } = this.options, QM = String(this.boundId);
        switch (MM) {
          case hM._b.AltVeto:
          case hM._b.AltAction: {
            const PM = 0 !== aM,
              [zM, LM, mM] = PM ? [rM, iM, OM] : [void 0, void 0, void 0],
              HM = PM ? nM.nameOfId(SM) : "Air",
              JM = MS(jM);
            if (MM === hM._b.AltAction) return this.first((MM => {
              var rM;
              return null === (rM = MM.onPlayerAltAction) || void 0 === rM ? void 0 : rM.call(MM, QM, zM, LM, mM, HM, JM)
            })), 0;
            const dM = this.first((MM => {
              var rM;
              return null === (rM = MM.onPlayerAttemptAltAction) || void 0 === rM ? void 0 : rM.call(MM, QM, zM, LM, mM, HM, JM)
            }));
            return "preventAction" === dM ? hM.j.Prevent : "preventPlacement" === dM ? hM.j.PreventPlacement : hM.j.Allow
          }
          case hM._b.Click: {
            const MM = PM,
              zM = 0 !== (MM & hM.S.Alt),
              LM = 0 !== (MM & hM.S.HasPos),
              mM = LM ? nM.nameOfId(SM) : "Air",
              [HM, JM, dM] = LM ? [rM, iM, OM] : [null, null, null],
              yM = MS(jM),
              lM = 0 !== (MM & hM.S.Up),
              EM = MS(aM);
            if (0 === (MM & hM.S.AttackOnly) && this.first((MM => {
                var rM, iM;
                return lM ? null === (rM = MM.onPlayerClickUp) || void 0 === rM ? void 0 : rM.call(MM, QM, zM, HM, JM, dM, mM, yM) : null === (iM = MM.onPlayerClick) || void 0 === iM ? void 0 : iM.call(MM, QM, zM, HM, JM, dM, mM, yM)
              })), !lM && !zM && null !== EM) {
              const MM = this.clientApi.getPositionView(EM),
                rM = MM ? [MM[0], MM[1], MM[2]] : [0, 0, 0];
              this.first((MM => {
                var iM;
                return null === (iM = MM.onPlayerAttackEntity) || void 0 === iM ? void 0 : iM.call(MM, QM, EM, rM)
              }))
            }
            return 0
          }
          case hM._b.ChangeBlock: {
            const MM = nM.nameOfId(SM),
              aM = nM.nameOfId(jM);
            return this.first((SM => {
              var jM;
              return null === (jM = SM.onPlayerChangeBlock) || void 0 === jM ? void 0 : jM.call(SM, QM, rM, iM, OM, MM, aM)
            })), 0
          }
          case hM._b.DropItem: {
            const MM = nM.nameOfId(rM);
            return this.first((rM => {
              var SM;
              return null === (SM = rM.onPlayerDropItem) || void 0 === SM ? void 0 : SM.call(rM, QM, MM, iM, OM)
            })), 0
          }
          default:
            return this.onError(new Error(`Unknown game call kind ${MM}`)), 0
        }
      }
      changeBlockFail(MM, rM, iM, OM, SM, jM, aM) {
        const PM = SM === hM.Jc ? null : IO.decode(this.api.eventBytes(jM, Math.min(SM, aM)));
        this.failures.push({
          GO: [MM, rM, iM],
          CO: OM,
          eO: PM
        })
      }
      changeBlockFailEnd() {
        const MM = this.failures;
        this.failures = [], this.sessionLive && this.round(this.owners, (rM => {
          var iM;
          null === (iM = rM.onChangeBlockFail) || void 0 === iM || iM.call(rM, MM)
        })), this.Tz("EditBoard", {
          pos: null
        }), this.Tz("EditCodeBlock", {
          pos: null,
          canChangePos: null
        })
      }
      inventoryEvent(MM, rM, iM, OM, SM, jM) {
        MM === hM.lc.ChestOpened ? this.items.chestOpened(iM, OM, SM) : MM !== hM.lc.Synced && MM !== hM.lc.ChestClosed && MM !== hM.lc.ChestRefreshed || this.items.touch(), this.guard((() => {
          ! function(MM, rM, iM, OM) {
            switch (MM) {
              case hM.lc.Synced:
                aM.i.Tz("syncedInvenFromServer");
                break;
              case hM.lc.ChestOpened:
              case hM.lc.ChestClosed:
                aM.i.Tz("chestToggleFromServer", MM === hM.lc.ChestOpened, !0);
                break;
              case hM.lc.ChestRefreshed:
                aM.i.Tz("chestRefreshedFromServer");
                break;
              case hM.lc.EnchantingTable:
                aM.i.Tz("enchantingTable", {
                  jP: OM,
                  position: iM
                });
                break;
              case hM.lc.HotbarRequest:
                aM.i.Tz("setSelectedInventorySlotI", rM, !0);
                break;
              case hM.lc.Scrolled:
                aM.i.Tz("ScrollInventorySlot", rM);
                break;
              case hM.lc.NumberKey:
                aM.i.Tz("numkeyPressed", rM + 1);
                break;
              case hM.lc.DropRequested:
                aM.i.Tz("DropInvenItem", 0 !== rM);
                break;
              default:
                throw new HM.d(`InventoryEvent of no kind: what ${MM}`)
            }
          }(MM, rM, [iM, OM, SM], jM)
        }))
      }
      heldItemChanged() {
        this.items.touch()
      }
      shotDamage(MM, rM, iM, OM) {
        this.Tz("shotPlayer", {
          playerId: String(MM),
          damage: rM,
          wasCrit: 0 !== OM,
          distance: iM
        })
      }
      localHurt(MM, rM) {
        this.Tz("closeShopOnDamaged", null), this.guard((() => {
          aM.i.Tz("damagedByOtherPlayer", {
            xj: null,
            direction: Number.isNaN(rM) ? null : rM,
            Zj: MM
          })
        }))
      }
      attackHit(MM, rM, iM, OM, SM) {
        this.guard((() => {
          aM.i.Tz("yourAttackHit", {
            mO: OM,
            screenPos: this.renderFrame.projectDirectionToScreenPos([MM, rM, iM]),
            hitSelf: SM
          })
        }))
      }
      physicsType(MM) {
        this.localPhysicsType = MM, this.Tz("PlayerPhysicsTypeUpdate", MM)
      }
      vehicleEffect(MM, rM, iM, OM, SM) {
        this.guard((() => {
          MM === mM.Cd.UPDATE ? (0, sM.f)(rM, {
            icon: iM,
            level: OM,
            displayName: null,
            durationMs: SM
          }) : WM.d.remove(rM)
        }))
      }
      zoomChanged(MM) {
        this.zoom = MM, this.zoomUnshown = !0
      }
      zoomDisabled() {
        this.Tz("showBottomMessage", {
          message: "Zoom is disabled",
          timeoutLength: 2e3,
          type: "Error"
        })
      }
      bhopDisabled() {
        this.Tz("showBottomMessage", XO.c)
      }
      showZoom() {
        const MM = this.scriptedCamera.holdsView();
        !this.zoomUnshown || MM && this.zoomHeld || (this.zoomUnshown = !1, this.Tz("cameraZoomSet", this.zoom)), this.zoomHeld = MM
      }
      gunHit(MM) {
        this.guard((() => {
          const {
            xj: rM,
            vj: iM
          } = (0, sO.d)(DO.u, MM);
          aM.i.Tz("damagedByOtherPlayer", {
            xj: rM,
            direction: iM
          })
        }))
      }
      uiEvent(MM, rM, iM, OM, SM, jM, aM, PM) {
        this.guard((() => {
          mO(MM, rM, [iM, OM, SM], jM, this.items, this.options.tables, (() => IO.decode(this.api.eventBytes(aM, PM))))
        }))
      }
      writeAltVeto(MM) {
        const rM = this.cmd;
        if (!rM) return;
        let iM;
        try {
          iM = function(MM, rM) {
            const iM = new Set;
            let OM = !1;
            for (const SM of MM)
              if (SM.onPlayerAttemptAltAction) {
                if (OM = !0, !SM.altVetoBlocks) return {
                  mode: hM.$d.All,
                  roots: []
                };
                for (const MM of SM.altVetoBlocks) iM.add(rM.getMetaInfo(MM).rootId)
              } return OM ? iM.size > hM.yc ? {
              mode: hM.$d.All,
              roots: []
            } : {
              mode: hM.$d.Filter,
              roots: [...iM]
            } : {
              mode: hM.$d.Off,
              roots: []
            }
          }(MM, this.options.tables)
        } catch (SM) {
          this.onError(SM), iM = {
            mode: hM.$d.All,
            roots: []
          }
        }
        if (iM.mode === hM.$d.Off && !this.vetoSet) return;
        const OM = new Uint8Array(new Uint32Array(iM.roots).buffer);
        (0, hM.Mf)(rM, 0, iM.mode, iM.roots.length, OM) ? this.vetoSet = iM.mode !== hM.$d.Off: this.onError(new Error("SetAltVeto didn't fit the command ring"))
      }
      endGameGrants() {
        this.freeCam.clearGame(), this.writeFreeCam()
      }
      writeFreeCam() {
        this.stopped() || this.freeCam.write(this.cmd)
      }
      writeHooks(MM) {
        const rM = this.cmd;
        if (!rM) return;
        const iM = function(MM) {
          let rM = 0;
          for (const iM of MM) iM.onPlayerAltAction && (rM |= 1 << hM._b.AltAction), (iM.onPlayerClick || iM.onPlayerClickUp || iM.onPlayerAttackEntity) && (rM |= 1 << hM._b.Click), iM.onPlayerChangeBlock && (rM |= 1 << hM._b.ChangeBlock), iM.onPlayerDropItem && (rM |= 1 << hM._b.DropItem);
          return rM
        }(MM);
        (0 !== iM || this.hooksSet) && ((0, hM.Zf)(rM, 0, iM) ? this.hooksSet = 0 !== iM : this.onError(new Error("SetHooks didn't fit the command ring")))
      }
      writeCustomButtons() {
        const MM = this.cmd;
        MM && !this.stopped() && this.customButtons.write(MM)
      }
      writePromptWatch() {
        const MM = this.cmd,
          rM = this.promptWatch;
        rM !== this.promptWatchSent && MM && !this.stopped() && (0, hM.xg)(MM, 0, VO[rM]) && (this.promptWatchSent = rM)
      }
      writePublicLobby(MM) {
        const rM = this.cmd;
        rM && MM !== this.writtenPublicLobby && ((0, hM.ig)(rM, 0, MM ? 1 : 0) ? this.writtenPublicLobby = MM : this.onError(new Error("SetPublicLobby didn't fit the command ring")))
      }
      writeLocalDbId(MM) {
        const rM = this.cmd;
        rM && ((0, hM.$f)(rM, 0, null === MM ? 0 : 1, null === MM ? qO : KO.encode(MM)) || this.onError(new Error("SetLocalDbId didn't fit the command ring")))
      }
      first(MM) {
        const rM = this.generation;
        for (const OM of this.owners) {
          if (rM !== this.generation) break;
          try {
            const rM = MM(OM);
            if (void 0 !== rM) return rM
          } catch (iM) {
            this.aL(iM)
          }
        }
      }
      Tz(MM, rM) {
        this.guard((() => {
          aM.i.Tz(MM, rM)
        }))
      }
      dropGameCamera() {
        try {
          this.scriptedCamera.reset()
        } catch (MM) {
          this.aL(MM)
        }
      }
      restartGameCamera() {
        try {
          this.scriptedCamera.restart()
        } catch (MM) {
          this.aL(MM)
        }
      }
      endSession() {
        if (!this.sessionLive) return;
        this.sessionLive = !1, this.localPhysicsType = tM.n.DEFAULT;
        const MM = this.owners;
        let rM;
        if (this.owners = this.tickers = this.renderers = this.receivers = [], this.generation++, !this.stopped()) try {
          this.writeAltVeto([]), this.writeHooks([]), this.writePublicLobby(!1), this.writeLocalDbId(null)
        } catch (OM) {
          rM = OM
        }
        try {
          this.entityInfo.sessionEnded()
        } catch (OM) {
          rM ??= OM
        }
        this.round(MM, iS, !0);
        try {
          this.particles.sessionEnded() || this.onError(new Error("ParticleStopAll didn't fit the command ring"))
        } catch (OM) {
          rM ??= OM
        }
        try {
          this.clientApi.disposeGameOutput()
        } catch (OM) {
          rM ??= OM
        }
        const iM = this.options.onSessionEnd;
        if (iM) try {
          iM()
        } catch (OM) {
          this.onError(OM)
        }
        void 0 !== rM && this.aL(rM)
      }
      round(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const OM = this.generation;
        for (const jM of MM) {
          if (OM !== this.generation) break;
          try {
            rM(jM)
          } catch (SM) {
            iM ? this.onError(SM) : this.aL(SM)
          }
        }
      }
      guard(MM) {
        try {
          MM()
        } catch (rM) {
          this.aL(rM)
        }
      }
    }

    function MS(MM) {
      return MM === hM.Lc ? null : String(MM)
    }

    function rS(MM) {
      MM.bL(mM.td)
    }

    function iS(MM) {
      var rM;
      null === (rM = MM.onClose) || void 0 === rM || rM.call(MM)
    }

    function OS(MM, rM) {
      MM.watch((() => {
        const iM = function(MM) {
          const rM = [],
            iM = Math.min(EO, MM.length);
          for (let SM = 0; SM < iM; SM++) {
            var OM;
            const iM = null === (OM = MM.slot(SM)) || void 0 === OM ? void 0 : OM.typeObj,
              jM = iM ? (0, yO.gunTypeOf)(iM.id) : void 0;
            void 0 !== jM && rM.push(er[jM])
          }
          return rM
        }(MM);
        iM.length > 0 && (rM.preload(iM.flatMap((MM => Zr(MM)))), rM.preload(Zr(br)))
      }))
    }
    var SS = iM(37390),
      jS = iM(5265),
      aS = iM(37705),
      PS = iM(37744);

    function nS(MM) {
      const rM = (0, SS.countDecodesAs)(new jS.Howl({
          src: [...(0, aS.r)(MM).src],
          pool: 15,
          preload: !1
        }), "sound"),
        iM = rM.load.bind(rM);
      return rM.load = () => (rM._preload = !0, (0, PS.c)(MM), iM()), rM
    }

    function QS(MM, rM, iM) {
      const OM = MM.listener;
      if (OM.positionX) zS(OM.positionX, rM, iM, 0), zS(OM.positionY, rM, iM, 1), zS(OM.positionZ, rM, iM, 2), zS(OM.forwardX, rM, iM, 3), zS(OM.forwardY, rM, iM, 4), zS(OM.forwardZ, rM, iM, 5), zS(OM.upX, rM, iM, 6), zS(OM.upY, rM, iM, 7), zS(OM.upZ, rM, iM, 8);
      else {
        let MM = !1;
        for (let OM = 0; OM < 9; OM++) MM ||= rM[OM] !== iM[OM];
        MM && (OM.setPosition(rM[0], rM[1], rM[2]), OM.setOrientation(rM[3], rM[4], rM[5], rM[6], rM[7], rM[8]), iM.set(rM))
      }
    }

    function zS(MM, rM, iM, OM) {
      rM[OM] !== iM[OM] && (MM.value = rM[OM], iM[OM] = rM[OM])
    }
    class LS {
      constructor() {
        this.pose = new Float64Array(9), this.written = new Float64Array(9).fill(Number.NaN), this.watchedCtx = void 0
      }
      apply(MM) {
        this.pose.set(MM);
        const rM = jS.Howler.ctx;
        return !!rM && (rM !== this.watchedCtx && (this.watchedCtx = rM, this.written.fill(Number.NaN), rM.addEventListener("statechange", (() => {
          "running" === rM.state && QS(rM, this.pose, this.written)
        }))), "running" === rM.state && QS(rM, MM, this.written), !0)
      }
    }
    var mS = iM(37501),
      HS = iM(40291);
    let hS = null,
      JS = null;

    function dS() {
      return null === hS && (hS = document.createElement("div"), hS.className = "WasmCameraLayer", hS.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;pointer-events:none", document.body.append(hS)), hS
    }

    function yS() {
      return JS ??= new HS.e(new mS.f(dS)), JS
    }

    function lS() {
      var MM;
      null === (MM = JS) || void 0 === MM || MM.clear(), ES(null)
    }

    function ES(MM) {
      OM.d.get("scriptedCameraFacing") !== MM && OM.d.set({
        scriptedCameraFacing: MM
      })
    }
    var US = iM(9918),
      GS = iM(9863),
      CS = iM(40325),
      eS = iM(42144),
      bS = iM(3693);
    const wS = Object.entries(hM.Wb).reduce(((MM, rM) => {
      let [iM, OM] = rM;
      return MM[OM] = iM, MM
    }), []);

    function tS(MM, rM) {
      var iM;
      return 0 !== ((null !== (iM = MM.itemFlags[rM]) && void 0 !== iM ? iM : 0) & hM.pc.Stackable)
    }
    const gS = /^(0|[1-9][0-9]*)$/,
      uS = {
        displayName: (MM, rM) => (0, yO.displayNameOf)(rM),
        description: (MM, rM) => (0, yO.descriptionOf)(rM),
        type: (MM, rM) => (0, yO.itemTypeOf)(rM),
        clipSize: (MM, rM) => (0, yO.clipSizeOf)(rM),
        armourReduction: (MM, rM) => (0, yO.armourReductionOf)(rM),
        scopeType: (MM, rM) => (0, yO.scopeTypeOf)(rM),
        stackable: tS,
        harvestType: (MM, rM) => wS[MM.blockHarvestTypes[rM]],
        harvestLevel: (MM, rM) => {
          const iM = MM.blockHarvestLevels[rM];
          return iM === hM.tc ? void 0 : iM
        },
        harvests: (MM, rM) => {
          var iM;
          const OM = null !== (iM = MM.itemHarvests[rM]) && void 0 !== iM ? iM : 0;
          return 0 !== OM ? wS[OM] : void 0 === (0, yO.harvestsNullLevelOf)(rM) ? void 0 : null
        },
        level: (MM, rM) => {
          var iM, OM;
          const SM = null !== (iM = MM.itemLevels[rM]) && void 0 !== iM ? iM : hM.tc;
          return SM !== hM.tc ? SM : null !== (OM = (0, yO.harvestsNullLevelOf)(rM)) && void 0 !== OM ? OM : void 0
        }
      };

    function RS(MM, rM, iM) {
      return WS(new Uint8Array(Math.floor(MM.length / rM)), MM, rM, iM)
    }

    function pS(MM, rM, iM) {
      return WS(new Uint16Array(Math.floor(MM.length / rM)), MM, rM, iM)
    }

    function WS(MM, rM, iM, OM) {
      const SM = new DataView(rM.buffer, rM.byteOffset, rM.byteLength);
      for (let jM = 0; jM < MM.length; jM++) MM[jM] = OM(SM, jM * iM);
      return MM
    }
    class sS {
      constructor(MM, rM) {
        this.options = rM, this.metas = [], this.types = new Map, this.props = void 0, this.rootIdOf = MM => {
          const rM = this.idOf(MM);
          if (void 0 === rM) throw new Error(`No item is named ${MM}, an item's root`);
          return rM
        };
        const iM = rM => {
            const iM = rM();
            return new Uint8Array(MM.memory().buffer, MM.scratch(), iM).slice()
          },
          OM = (new TextDecoder).decode(iM((() => MM.queries.itemNames()))).split("\n"),
          SM = iM((() => MM.queries.blockProps())),
          jM = iM((() => MM.queries.itemProps()));
        this.props = {
          blockFlags: RS(SM, hM.z.BYTES, hM.z.flags),
          blockHarvestTypes: RS(SM, hM.z.BYTES, hM.z.harvestType),
          blockHarvestLevels: RS(SM, hM.z.BYTES, hM.z.harvestLevel),
          blockAttachedTops: pS(SM, hM.z.BYTES, hM.z.attachedTop),
          itemFlags: RS(jM, hM.qc.BYTES, hM.qc.flags),
          itemHarvests: RS(jM, hM.qc.BYTES, hM.qc.harvests),
          itemLevels: RS(jM, hM.qc.BYTES, hM.qc.level)
        }, (0, bS.j)(Object.freeze(OM)), (0, eS.h)()
      }
      idOf(MM) {
        if ("number" === typeof MM) return void 0 === (0, bS.g)(MM) ? void 0 : MM;
        const rM = (0, bS.d)(MM);
        return void 0 === rM && gS.test(MM) ? void 0 === (0, bS.g)(+MM) ? void 0 : +MM : rM
      }
      getMetaInfo(MM) {
        if (!MM || MM === US.c) return US.e;
        const rM = this.idOf(MM);
        if (void 0 === rM) throw new Error(`Item ${MM} not found in registry`);
        return this.metaOf(rM)
      }
      blockRootId(MM) {
        return 0 !== MM && void 0 !== (0, bS.g)(MM) ? this.metaOf(MM).rootId : MM
      }
      metaOf(MM) {
        return this.metas[MM] ??= (0, GS.i)((0, bS.g)(MM), MM, this.rootIdOf, (0, yO.rootMetaDescOf)(MM))
      }
      getItemId(MM) {
        if (!MM || MM === US.c) return 0;
        const rM = this.idOf(MM);
        if (void 0 === rM) throw new Error(`Invalid block name. You sent ${MM}. The only valid item names are 'Air' and those contained within the blockMetadata/itemMetadata files`);
        return rM
      }
      getItemName(MM) {
        if (!MM || MM === US.c) return US.c;
        const rM = this.idOf(MM);
        if (void 0 === rM) throw new Error(`Item ${MM} not found in registry`);
        return (0, bS.g)(rM)
      }
      blockNameToBlockId(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (MM === US.c) return 0;
        let iM = this.idOf(MM);
        if (void 0 === iM || !this.isBlockId(iM)) {
          const rM = MM.indexOf("|"),
            OM = rM > 0 ? (0, bS.d)(MM.slice(0, rM)) : void 0;
          iM = void 0 !== OM && this.isBlockId(OM) && (0, yO.rootMetaDescOf)(OM) === MM ? OM : void 0
        }
        if (void 0 !== iM) return iM;
        if (!rM) throw new Error(`Invalid block name. You sent ${MM}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`);
        return null
      }
      isBlockId(MM) {
        return MM > 0 && MM < this.props.blockFlags.length
      }
      nameOfId(MM) {
        return 0 !== MM && (0, bS.g)(MM) || US.c
      }
      itemType(MM) {
        const rM = MM ? this.idOf(MM) : void 0;
        if (!rM) return null;
        let iM = this.types.get(rM);
        return void 0 === iM && (iM = Object.freeze({
          id: rM,
          name: (0, bS.g)(rM),
          meta: this.getMetaInfo(rM),
          stackable: tS(this.props, rM),
          type: (0, yO.itemTypeNameOf)(rM),
          clipSize: (0, yO.clipSizeOf)(rM),
          scopeType: (0, yO.scopeTypeOf)(rM),
          showsAimingUi: (0, yO.showsAimingUi)(rM)
        }), this.types.set(rM, iM)), iM
      }
      getItemStat(MM, rM) {
        if (CS.d.has(rM)) {
          const iM = "minChargeStateToUse" === rM ? this.getMetaInfo(MM).rootName : this.getItemName(MM),
            OM = this.options.get((0, CS.g)(iM, rM));
          if (null !== OM && void 0 !== OM) return OM
        }
        return this.defaultStat(MM, rM, this.statOf(rM))
      }
      getDisplayName(MM) {
        return this.getItemStat(MM, "displayName")
      }
      getDefaultItemStat(MM, rM) {
        return this.defaultStat(MM, rM, this.statOf(rM))
      }
      statOf(MM) {
        const rM = uS[MM];
        return void 0 === rM && function(MM, rM) {
          throw new Error(`ClientApi.${MM} is not available yet in the wasm client (${rM})`)
        }(`getItemStat("${MM}")`, `a table of the stat: the wasm client answers ${Object.keys(uS).join(", ")}`), rM
      }
      defaultStat(MM, rM, iM) {
        const OM = this.idOf(MM),
          SM = void 0 === OM ? void 0 : iM(this.props, OM);
        return null !== SM && void 0 !== SM || "displayName" !== rM ? SM : this.getItemName(MM)
      }
      getClientOption(MM) {
        return this.options.get(MM)
      }
      getGunStats(MM) {
        return this.getClientOption(`${MM}GunStats`)
      }
      watchClientOption(MM, rM) {
        return this.options.subscribe(MM, rM)
      }
      isSolidBlockId(MM) {
        var rM;
        return 0 !== ((null !== (rM = this.props.blockFlags[MM]) && void 0 !== rM ? rM : 0) & hM.x.Solid)
      }
      isStackableId(MM) {
        return tS(this.props, MM)
      }
      isFluidBlockId(MM) {
        var rM;
        return 0 !== ((null !== (rM = this.props.blockFlags[MM]) && void 0 !== rM ? rM : 0) & hM.x.Fluid)
      }
      canPlaceOverBlockId(MM) {
        var rM;
        return 0 !== ((null !== (rM = this.props.blockFlags[MM]) && void 0 !== rM ? rM : 0) & hM.x.PlaceOver)
      }
      attachedTopOf(MM) {
        var rM;
        return null !== (rM = this.props.blockAttachedTops[MM]) && void 0 !== rM ? rM : 0
      }
      isDroplessBlockId(MM) {
        return (0, yO.dropsNothing)(MM)
      }
    }

    function DS(MM, rM) {
      const iM = new Map;
      return (OM, SM) => {
        const jM = rM.idOf(OM),
          aM = void 0 === jM ? null : (OM => {
            let SM = iM.get(OM);
            if (void 0 === SM) {
              const jM = MM.queries.salvageRecipe(OM),
                aM = new DataView(MM.memory().buffer, MM.scratch(), jM),
                PM = [];
              for (let MM = 0; MM + hM.Pd.BYTES <= jM; MM += hM.Pd.BYTES) PM.push(Object.freeze({
                item: rM.nameOfId(hM.Pd.item(aM, MM)),
                amt: hM.Pd.amount(aM, MM)
              }));
              SM = 0 === PM.length ? null : Object.freeze(PM), iM.set(OM, SM)
            }
            return SM
          })(jM);
        if (null === aM || void 0 === SM) return aM;
        const PM = SM <= 0 ? 1 : SM;
        return aM.map((MM => {
          let {
            item: rM,
            amt: iM
          } = MM;
          return {
            item: rM,
            amt: iM * PM
          }
        }))
      }
    }
    var kS = iM(41858),
      ZS = iM(37885),
      oS = iM(37864),
      fS = iM(37872),
      YS = iM(34822),
      NS = iM(41761),
      AS = iM(53658);
    const xS = -1,
      vS = new Uint8Array(0),
      FS = new TextEncoder;

    function BS(MM) {
      if (null === MM) return null;
      const rM = FS.encode(MM);
      return rM.byteLength < mM.Fc ? rM : rM.subarray(0, mM.Fc - 1)
    }
    class XS {
      constructor(MM) {
        this.deps = MM, this.lastView = null, this.lastKeyframes = [], this.keyframesVersion = xS, this.keyframesSettled = !1, this.reloadFrom = xS
      }
      reloadKeyframes() {
        var MM, rM;
        this.keyframesVersion = xS, this.reloadFrom = null !== (MM = null === (rM = this.view()) || void 0 === rM ? void 0 : rM.version) && void 0 !== MM ? MM : xS
      }
      setPlayback(MM) {
        const rM = 1 === this.deps.core.YSM(MM);
        return rM && (this.lastView = null, this.lastKeyframes = [], this.keyframesVersion = xS, this.reloadFrom = xS), rM
      }
      async open(MM, rM) {
        const iM = await this.deps.replay.open(MM, rM);
        return "opening" === iM && (this.reloadKeyframes(), this.deps.recorder.prefetch()), iM
      }
      play() {
        this.deps.replay.play()
      }
      pause() {
        this.deps.replay.pause()
      }
      seek(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.deps.replay.seek(Math.max(0, Math.floor(MM)), rM)
      }
      setSpeed(MM) {
        this.deps.replay.setSpeed(MM)
      }
      setCameraMode(MM) {
        this.deps.replay.setCameraMode(AS.c.indexOf(MM))
      }
      view() {
        var MM;
        const rM = hM.v.replayViewPtr(this.deps.apiView(), 0);
        if (0 === rM) return this.lastView = null, null;
        const iM = new DataView(this.deps.buffer(), rM, hM.Id.BYTES),
          OM = hM.Id.version(iM, 0),
          SM = this.lastView;
        if (null !== SM && SM.version === OM) return SM;
        const jM = hM.Id.markIn(iM, 0),
          aM = {
            version: OM,
            state: hM.Id.state(iM, 0),
            cameraMode: null !== (MM = AS.c[hM.Id.cameraMode(iM, 0)]) && void 0 !== MM ? MM : "recording",
            bL: hM.Id.bL(iM, 0),
            totalTicks: hM.Id.totalTicks(iM, 0),
            speed: hM.Id.speed(iM, 0),
            mark: jM === hM.Ed ? null : {
              inTick: jM,
              outTick: hM.Id.markOut(iM, 0)
            },
            editVersion: hM.Id.editVersion(iM, 0)
          };
        return this.lastView = aM, aM
      }
      keyframes() {
        const MM = this.view();
        if (null === MM) return [];
        MM.version !== this.reloadFrom && (this.reloadFrom = xS);
        const rM = this.reloadFrom === xS && MM.state !== mM.hd.Cropping && MM.state !== mM.hd.None,
          iM = rM ? MM.editVersion : MM.version;
        if (iM === this.keyframesVersion && rM === this.keyframesSettled) return this.lastKeyframes;
        const {
          core: OM
        } = this.deps, SM = OM.ASM(), jM = OM.qd(), aM = [];
        if (0 !== jM && SM > 0) {
          const MM = new DataView(this.deps.buffer(), jM, SM * mM.uc);
          for (let rM = 0; rM < SM; rM++) {
            const iM = rM * mM.uc,
              OM = rM => MM.getFloat64(iM + rM, !0);
            aM.push({
              bL: MM.getUint32(iM + mM.Ec, !0),
              position: [OM(mM.Cc), OM(mM.Cc + 8), OM(mM.Cc + 16)],
              direction: [OM(mM.vc), OM(mM.vc + 8), OM(mM.vc + 16)],
              easing: [OM(mM.zc), OM(mM.zc + 8), OM(mM.zc + 16), OM(mM.zc + 24)]
            })
          }
        }
        return this.keyframesVersion = iM, this.keyframesSettled = rM, this.lastKeyframes = aM, aM
      }
      addKeyframe() {
        const MM = this.deps.apiView(),
          rM = [hM.v.eye(MM, 0, 0), hM.v.eye(MM, 0, 1), hM.v.eye(MM, 0, 2)];
        return this.deps.replay.addKeyframe(rM, function(MM, rM) {
          const iM = Math.cos(rM);
          return [iM * Math.sin(MM), -Math.sin(rM), iM * Math.cos(MM)]
        }(hM.v.heading(MM, 0), hM.v.pitch(MM, 0)))
      }
      setKeyframe(MM) {
        return this.deps.replay.setKeyframe(MM.bL, Float64Array.from([...MM.position, ...MM.direction, ...MM.easing]))
      }
      moveKeyframe(MM, rM) {
        return this.deps.replay.moveKeyframe(MM, rM)
      }
      deleteKeyframes(MM, rM) {
        return this.deps.replay.deleteKeyframes(MM, rM)
      }
      setMark(MM) {
        var rM, iM;
        return this.deps.replay.setMark(null !== (rM = null === MM || void 0 === MM ? void 0 : MM.inTick) && void 0 !== rM ? rM : -1, null !== (iM = null === MM || void 0 === MM ? void 0 : MM.outTick) && void 0 !== iM ? iM : -1)
      }
      crop(MM, rM) {
        const iM = this.deps.replay.crop(MM, rM);
        return iM && this.reloadKeyframes(), iM
      }
      save(MM) {
        return this.deps.replay.askSave(), this.deps.recorder.saveEdited(MM)
      }
      recorderControl(MM) {
        this.deps.recorder.control(MM)
      }
      recorderPrefs(MM, rM) {
        this.deps.recorder.prefs(MM, rM)
      }
      recorderOption(MM, rM) {
        const iM = this.deps.cmd();
        return null !== iM && (0, hM.Ef)(iM, 0, MM, null === rM ? vS : FS.encode(rM))
      }
      recordFlyingText(MM, rM, iM, OM) {
        const SM = this.deps.cmd(),
          jM = Math.max(0, Math.min(4294967295, Math.round(OM)));
        return null !== SM && (0, hM.wf)(SM, 0, rM, iM, jM, FS.encode(MM))
      }
      recordPlayerKilled(MM, rM, iM, OM) {
        const SM = this.deps.cmd();
        return null !== SM && (0, hM.Gf)(SM, 0, MM, rM, Math.max(0, iM), FS.encode(OM))
      }
      recordKillfeed(MM, rM, iM) {
        var OM, SM;
        const jM = this.deps.cmd(),
          aM = function(MM) {
            const rM = MM.reduce(((MM, rM) => {
                var iM;
                return MM + nO.tb + (null !== (iM = null === rM || void 0 === rM ? void 0 : rM.byteLength) && void 0 !== iM ? iM : 0)
              }), 0),
              iM = new Uint8Array(rM),
              OM = new DataView(iM.buffer);
            let SM = 0;
            for (const aM of MM) {
              var jM;
              OM.setUint16(SM, null !== (jM = null === aM || void 0 === aM ? void 0 : aM.byteLength) && void 0 !== jM ? jM : mM.Fc, !0), SM += nO.tb, null !== aM && (iM.set(aM, SM), SM += aM.byteLength)
            }
            return iM
          }([BS(MM.name), BS(MM.colour), BS(rM.name), BS(rM.colour), BS(iM)]);
        return null !== jM && (0, hM.Af)(jM, 0, null !== (OM = MM.id) && void 0 !== OM ? OM : hM.Nc, null !== (SM = rM.id) && void 0 !== SM ? SM : hM.Nc, aM)
      }
      recorderSession(MM, rM) {
        this.deps.recorder.session({
          session: rM,
          lobbyType: MM.lobbyType,
          game: MM.gameNameWithVariation,
          lobby: MM.lobbyName
        })
      }
      recorderClose() {
        this.deps.core.xSM()
      }
      filePartDone(MM, rM) {
        this.deps.recorder.filePartDone(MM, rM)
      }
      fileDone(MM) {
        this.deps.recorder.fileDone(MM)
      }
    }
    const IS = -2147483648;
    class KS {
      constructor(MM) {
        var rM;
        this.deps = MM, this.state = {
          recording: !1,
          clipping: !1,
          hasClipBuffer: !1,
          seconds: 0
        }, this.recordingSince = null, this.clipTickPending = !1, this.now = void 0, this.now = null !== (rM = MM.now) && void 0 !== rM ? rM : () => performance.now()
      }
      get current() {
        return this.state
      }
      get live() {
        var MM, rM, iM;
        return null === (MM = null === (rM = (iM = this.deps).live) || void 0 === rM ? void 0 : rM.call(iM)) || void 0 === MM || MM
      }
      activated(MM) {
        var rM, iM;
        this.live && (this.viewerShown(!0 === (null === (rM = (iM = this.deps).viewerOpen) || void 0 === rM ? void 0 : rM.call(iM))), this.deps.client.recorderSession(MM, (0, AS.e)()))
      }
      closed() {
        this.deps.client.recorderClose()
      }
      toggleRecording() {
        var MM, rM;
        this.live && (this.state.recording || !0 !== (null === (MM = (rM = this.deps).viewerOpen) || void 0 === MM ? void 0 : MM.call(rM))) ? this.deps.client.recorderControl(mM.Sc.ToggleRecording) : this.deps.notify(fS.c.closeViewerFirst)
      }
      saveClip() {
        this.live ? this.deps.client.recorderControl(mM.Sc.SaveClip) : this.deps.notify(fS.c.clippingNotOn)
      }
      viewerShown(MM) {
        this.live && this.deps.client.recorderControl(MM ? mM.Sc.ViewerOpened : mM.Sc.ViewerClosed)
      }
      setPrefs(MM, rM) {
        this.live && this.deps.client.recorderPrefs(MM, rM)
      }
      setOption(MM, rM) {
        this.live && this.deps.client.recorderOption(MM, rM)
      }
      recordFlyingText(MM, rM, iM, OM) {
        this.live && this.deps.client.recordFlyingText(MM, rM, iM, OM)
      }
      recordPlayerKilled(MM, rM, iM, OM) {
        this.live && this.deps.client.recordPlayerKilled(MM, rM, iM, OM)
      }
      recordKillfeed(MM, rM, iM) {
        this.live && this.deps.client.recordKillfeed(MM, rM, iM)
      }
      bL() {
        let MM = this.state;
        if (this.clipTickPending && (this.clipTickPending = !1, MM = {
            ...MM,
            hasClipBuffer: !0
          }), null !== this.recordingSince) {
          const rM = Math.floor((this.now() - this.recordingSince) / 1e3);
          rM !== MM.seconds && (MM = {
            ...MM,
            seconds: rM
          })
        }
        this.set(MM)
      }
      onEvent(MM) {
        var rM, iM;
        const {
          notify: OM
        } = this.deps, SM = fS.c;
        switch (MM.what) {
          case mM.Qc.RecordingStarted:
            this.recordingSince = this.now(), this.set({
              ...this.state,
              recording: !0,
              seconds: 0
            }), OM(SM.recordingStarted);
            break;
          case mM.Qc.RecordingStopped:
            this.stopRecording(), OM(SM.recordingStopped), this.saveState(mM._c.Recording, "saving");
            break;
          case mM.Qc.RecordingDiscarded:
            this.stopRecording(), OM(SM.recordingDiscarded);
            break;
          case mM.Qc.RecordingTurnedOff:
            this.stopRecording(), OM(SM.recordingTurnedOff);
            break;
          case mM.Qc.LimitReached:
            OM(SM.limitReached);
            break;
          case mM.Qc.ClipSaved:
            this.saveState(mM._c.Clip, "saving");
            break;
          case mM.Qc.ClipEmpty:
            OM(SM.clipEmpty);
            break;
          case mM.Qc.ClippingNotOn:
            OM(SM.clippingNotOn);
            break;
          case mM.Qc.Disallowed:
            OM(SM.disallowed);
            break;
          case mM.Qc.ClippingOn:
            this.clipTickPending = !0, this.set({
              ...this.state,
              clipping: !0,
              hasClipBuffer: !1
            });
            break;
          case mM.Qc.ClippingOff:
            this.clipTickPending = !1, this.set({
              ...this.state,
              clipping: !1,
              hasClipBuffer: !1
            });
            break;
          case mM.Qc.ClipSettingsChanged:
            this.clipTickPending = this.state.clipping, this.set({
              ...this.state,
              hasClipBuffer: !1
            });
            break;
          case mM.Qc.SaveBusy:
            null === (rM = (iM = this.deps).onSaveState) || void 0 === rM || rM.call(iM, MM.kind, "busy"), OM(SM.saveBusy);
            break;
          case mM.Qc.CloseViewerFirst:
            OM(SM.closeViewerFirst)
        }
      }
      fileReady(MM, rM) {
        this.deps.download(rM), this.saveState(MM, "done"), this.deps.notify(MM === mM._c.Clip ? fS.c.clipSaved : fS.c.recordingSaved)
      }
      failed(MM) {
        this.saveState(MM, "failed"), this.deps.notify(MM === mM._c.Clip ? fS.c.clipFailed : fS.c.recordingFailed)
      }
      stopRecording() {
        this.recordingSince = null, this.set({
          ...this.state,
          recording: !1,
          seconds: 0
        })
      }
      saveState(MM, rM) {
        var iM, OM;
        null === (iM = (OM = this.deps).onSaveState) || void 0 === iM || iM.call(OM, MM, rM)
      }
      set(MM) {
        MM !== this.state && (this.state = MM, this.deps.onState(MM))
      }
    }
    const qS = new TextDecoder;

    function TS(MM, rM, iM, OM) {
      const SM = [];
      for (let jM = 0; jM < OM; jM++) {
        if (rM + nO.tb > iM) return null;
        const OM = MM.getUint16(rM, !0);
        if (rM += nO.tb, OM !== mM.Fc) {
          if (rM + OM > iM) return null;
          SM.push(qS.decode(new Uint8Array(MM.buffer, MM.byteOffset + rM, OM))), rM += OM
        } else SM.push(null)
      }
      return rM === iM ? SM : null
    }

    function VS(MM, rM) {
      let iM = new DataView(new ArrayBuffer(0)),
        OM = !0;
      const SM = {
        replayFailed: (rM, iM, OM) => {
          MM.replayFailed({
            reason: rM,
            code: iM,
            version: OM
          })
        },
        replayOption: (rM, SM, jM, aM) => {
          const PM = function(MM, rM, iM, OM) {
            switch (rM) {
              case mM.cd.Cleared:
                return 0 === OM ? null : void 0;
              case mM.cd.Text:
                return qS.decode(new Uint8Array(MM.buffer, MM.byteOffset + iM, OM));
              case mM.cd.Int:
                return OM === Int32Array.BYTES_PER_ELEMENT ? MM.getInt32(iM, !0) : void 0;
              case mM.cd.Double:
                return OM === Float64Array.BYTES_PER_ELEMENT ? MM.getFloat64(iM, !0) : void 0;
              default:
                return
            }
          }(iM, SM, jM, aM);
          void 0 !== PM ? MM.replayOption({
            key: rM,
            value: PM
          }) : OM = !1
        },
        replayUiEvent: (rM, SM, jM, aM, PM, nM) => {
          const QM = function(MM, rM, iM, OM, SM, jM, aM) {
            const PM = jM + aM;
            switch (rM) {
              case mM.fd.FlyingText: {
                const aM = TS(MM, jM, PM, 1);
                return null !== aM && null !== aM[0] ? {
                  what: rM,
                  Yi: iM,
                  oi: OM,
                  angle: SM,
                  contentJson: aM[0]
                } : null
              }
              case mM.fd.PlayerKilled: {
                const OM = TS(MM, jM, PM, 3);
                return OM ? {
                  what: rM,
                  killstreak: iM,
                  dead: OM[0],
                  killer: OM[1],
                  withItem: OM[2]
                } : null
              }
              case mM.fd.Killfeed: {
                const iM = TS(MM, jM, PM, 7);
                return iM ? {
                  what: rM,
                  killerId: iM[0],
                  killerName: iM[1],
                  killerColour: iM[2],
                  victimId: iM[3],
                  victimName: iM[4],
                  victimColour: iM[5],
                  withItem: iM[6]
                } : null
              }
              default:
                return null
            }
          }(iM, rM, SM, jM, aM, PM, nM);
          null !== QM ? MM.replayUiEvent(QM) : OM = !1
        },
        replayFilePart: (iM, SM, jM, aM) => {
          const PM = rM();
          jM + aM > PM.byteLength ? OM = !1 : MM.filePart(iM, SM, new Uint8Array(PM, jM, aM).slice())
        },
        replayFileReady: (rM, iM, OM, SM) => {
          MM.fileReady({
            save: rM,
            kind: iM,
            parts: OM,
            bytes: SM
          })
        },
        recorderEvent: (rM, iM, OM) => {
          MM.recorderEvent({
            what: rM,
            kind: iM,
            save: OM
          })
        },
        replayOpened: (rM, OM, SM) => {
          MM.replayOpened(qS.decode(new Uint8Array(iM.buffer, iM.byteOffset + OM, SM)))
        }
      };
      return (MM, rM, jM, aM) => !(MM < mM.Y.ReplayFailed || MM > mM.Y.RecorderEvent) && (iM = rM, OM = !0, (0, hM.ge)(MM, rM, jM, aM, SM) && OM)
    }

    function cS(MM) {
      let rM = null;
      const iM = VS(MM, (() => {
        if (null === rM) throw new Error("a recorder event read outside recorderEventReader's call");
        return rM.buffer
      }));
      return (MM, OM) => {
        rM = OM;
        try {
          ! function(MM, rM) {
            const iM = MM.slice(),
              OM = new DataView(iM.buffer);
            for (let SM = 0; SM < iM.byteLength;) {
              if (SM + mM.U > iM.byteLength) throw new Error(`the recorder module's events end mid-head at ${SM}`);
              const MM = OM.getUint32(SM, !0),
                jM = 65535 & MM,
                aM = MM >>> 16,
                PM = SM + mM.U;
              if (PM + aM > iM.byteLength || !rM(jM, OM, PM, aM)) throw new Error(`the recorder module wrote a malformed event ${jM} (${aM} bytes) at ${SM}`);
              SM = PM + (0, mM.oe)(aM)
            }
          }(MM, iM)
        } finally {
          rM = null
        }
      }
    }
    class Mj {
      constructor(MM, rM) {
        this.acks = MM, this.handlers = rM, this.parts = new Map
      }
      onPart(MM, rM, iM) {
        let OM = this.parts.get(MM);
        OM || (OM = [], this.parts.set(MM, OM)), OM[rM] = iM, this.acks.filePartDone(MM, rM)
      }
      onReady(MM) {
        var rM;
        const iM = null !== (rM = this.parts.get(MM.save)) && void 0 !== rM ? rM : [];
        this.parts.delete(MM.save);
        const OM = function(MM, rM, iM) {
          if (MM.length !== rM) return null;
          let OM = 0;
          for (let aM = 0; aM < rM; aM++) {
            if (void 0 === MM[aM]) return null;
            OM += MM[aM].byteLength
          }
          if (OM !== iM) return null;
          if (1 === rM) return MM[0];
          const SM = new Uint8Array(iM);
          let jM = 0;
          for (const aM of MM) SM.set(aM, jM), jM += aM.byteLength;
          return SM
        }(iM, MM.parts, MM.bytes);
        this.acks.fileDone(MM.save), null === OM ? this.handlers.fileIncomplete(MM.save, MM.kind) : this.handlers.fileReady(MM.save, MM.kind, OM)
      }
      onDiscarded(MM) {
        this.parts.delete(MM)
      }
    }

    function rj() {
      return iM.e(72).then((() => iM(63239)))
    }
    class ij {
      constructor(MM) {
        this.deps = MM, this.sink = void 0, this.recorder = void 0, this.recorderEvents = void 0, this.parts = void 0, this.viewerChunk = null, this.viewer = null;
        const {
          client: rM
        } = MM;
        this.recorder = new KS({
          client: rM,
          live: () => {
            var MM;
            return !0 !== (null === (MM = this.viewer) || void 0 === MM ? void 0 : MM.inPlayback)
          },
          viewerOpen: MM.viewerOpen,
          notify: MM.notify,
          download: rM => {
            var iM;
            null === (iM = MM.download) || void 0 === iM || iM.call(MM, rM)
          },
          onState: MM.onRecorderState,
          onSaveState: MM.onSaveState
        }), this.parts = new Mj(rM, {
          fileReady: (MM, rM, iM) => {
            var OM;
            rM === mM._c.Edited ? null === (OM = this.viewer) || void 0 === OM || OM.saveDone(iM) : this.recorder.fileReady(rM, iM)
          },
          fileIncomplete: (MM, rM) => {
            this.saveFailed(rM)
          }
        });
        const iM = {
          replayFailed: MM => {
            var rM;
            null === (rM = this.viewer) || void 0 === rM || rM.onFailed(MM)
          },
          replayOption: rM => {
            var iM;
            null === (iM = MM.onReplayOption) || void 0 === iM || iM.call(MM, rM)
          },
          replayUiEvent: rM => {
            var iM;
            null === (iM = MM.onReplayUiEvent) || void 0 === iM || iM.call(MM, rM)
          },
          filePart: (MM, rM, iM) => {
            this.parts.onPart(MM, rM, iM)
          },
          fileReady: MM => {
            this.parts.onReady(MM)
          },
          replayOpened: rM => {
            var iM;
            null === (iM = MM.onReplayOpened) || void 0 === iM || iM.call(MM, rM)
          },
          recorderEvent: MM => {
            var rM;
            switch (MM.what) {
              case mM.Qc.FileDiscarded:
                this.parts.onDiscarded(MM.save);
                break;
              case mM.Qc.SaveFailed:
                this.saveFailed(MM.kind);
                break;
              case mM.Qc.SaveBusy:
                if (null !== (rM = this.viewer) && void 0 !== rM && rM.savePending) {
                  this.viewer.saveFailed(!0);
                  break
                }
                this.recorder.onEvent(MM);
                break;
              default:
                this.recorder.onEvent(MM)
            }
          }
        };
        this.sink = function(MM, rM) {
          return {
            onReplayEvent: VS(MM, rM)
          }
        }(iM, MM.buffer), this.recorderEvents = cS(iM)
      }
      get currentViewer() {
        return this.viewer
      }
      loadViewer() {
        var MM;
        return this.viewer ? Promise.resolve(this.viewer) : (this.viewerChunk ??= (null !== (MM = this.deps.loadViewer) && void 0 !== MM ? MM : rj)().catch((MM => {
          throw this.viewerChunk = null, MM
        })), this.viewerChunk.then((MM => (this.viewer ??= new MM.ReplayViewer({
          client: this.deps.client,
          setHoldDraws: this.deps.setHoldDraws,
          meshPending: this.deps.meshPending,
          notify: this.deps.notify,
          onChange: () => {
            var MM, rM;
            null === (MM = (rM = this.deps).onViewerChange) || void 0 === MM || MM.call(rM)
          }
        }), this.viewer))))
      }
      activated(MM) {
        this.recorder.activated(MM)
      }
      afterFrame(MM) {
        try {
          MM > 0 && this.recorder.bL()
        } finally {
          var rM;
          null === (rM = this.viewer) || void 0 === rM || rM.afterFrame()
        }
      }
      end() {
        var MM;
        null === (MM = this.viewer) || void 0 === MM || MM.end()
      }
      saveFailed(MM) {
        var rM;
        MM === mM._c.Edited ? null === (rM = this.viewer) || void 0 === rM || rM.saveFailed(!1) : this.recorder.failed(MM)
      }
    }
    var Oj = iM(41704),
      Sj = iM(41712),
      jj = iM(5204),
      aj = iM(42022);
    class Pj {
      constructor(MM) {
        this.deps = MM, this.analogue = [0, 0], this.keys = 0, this.unsent = !1
      }
      drag(MM, rM) {
        if (!this.deps.live() || 0 === MM && 0 === rM) return;
        const iM = (0, YM.u)(0, performance.now()),
          OM = this.deps.dragScale();
        (0, aj.j)((() => {
          (0, YM.z)(mM.tb.MouseDown, 0, 0, 0, iM), (0, YM.z)(mM.tb.MouseMove, 0, MM * OM, rM * OM, 0), (0, YM.z)(mM.tb.MouseUp, 0, 0, 0, iM)
        }))
      }
      move(MM) {
        var rM, iM;
        this.analogue[0] = null !== (rM = null === MM || void 0 === MM ? void 0 : MM.x) && void 0 !== rM ? rM : 0, this.analogue[1] = null !== (iM = null === MM || void 0 === MM ? void 0 : MM.y) && void 0 !== iM ? iM : 0, this.send()
      }
      holdVertical(MM, rM) {
        const iM = "freeCamUp" === MM ? hM.Nb.Up : hM.Nb.Down;
        this.keys = rM ? this.keys | iM : this.keys & ~iM, this.send()
      }
      flush() {
        this.unsent && this.send()
      }
      send() {
        const MM = this.deps.live() ? this.deps.cmd() : null;
        this.unsent = null !== MM && !(0, hM.Ae)(MM, 0, this.analogue, this.keys)
      }
    }
    var nj = iM(3961),
      Qj = iM(766),
      zj = iM(255),
      Lj = iM(83),
      mj = iM(34956),
      Hj = iM(746),
      hj = iM(37529);

    function Jj() {
      const MM = OM.d.get("clientEscMenuOptions"),
        rM = (0, Qj.t)(MM);
      return {
        mouse: (0, Lj.isMobile)() ? rM : MM.mouseSensitivity,
        touch: rM,
        fovPercent: MM.cameraFOV
      }
    }

    function dj() {
      const MM = OM.d.get("clientEscMenuOptions"),
        rM = OM.d.get("isTouchScreen") ? (0, Qj.t)(MM) : MM.mouseSensitivity,
        iM = Jj().mouse;
      return iM > 0 ? rM / iM : 1
    }

    function yj(MM) {
      const rM = () => {
        MM.setSoundPrefs(OM.d.get("soundVolume"), OM.d.get("soundOnFromAd"))
      };
      let iM = null;
      const SM = () => {
        const {
          showFog: rM,
          enableLighting: SM,
          fogChunkDistance: jM,
          chunkFadeIn: aM
        } = OM.d.get("clientEscMenuOptions"), PM = {
          showFog: rM,
          lighting: SM,
          fogChunks: jM,
          chunkFade: aM,
          cellLight: (0, nj.i)("cellLight") ? (0, nj.i)("cellLightUnlit") ? "all" : "lit" : "off"
        };
        iM && (0, mM.ae)(iM) === (0, mM.ae)(PM) && iM.fogChunks === jM || (iM = PM, MM.setEnvPrefs(iM))
      };
      let jM = null;
      const PM = () => {
        const rM = function() {
          const MM = OM.d.get("clientEscMenuOptions");
          return {
            nametagsHidden: OM.d.get("areNametagsHidden"),
            crouchToggle: MM.crouchIsToggle,
            bhopDisabled: MM.disableBunnyHopping,
            disableBobbing: MM.disableBobbing,
            ezTowering: MM.ezTowering ? (0, zj.f)() : null,
            ezBridging: MM.ezBridging,
            showChunkBorders: MM.showChunkBorders,
            touchWalk: !(0, hj.e)(),
            edgeGuard: MM.touchEdgeGuard,
            edgeGuardLong: (0, Hj.b)(),
            nametagCutDistance: (0, mj.f)()
          }
        }();
        (0, gM.Td)(jM, rM) || (jM = rM, MM.setUiPrefs(rM))
      };
      let nM = null;
      const QM = () => {
        const rM = Jj();
        (0, gM.Td)(nM, rM) || (nM = rM, MM.setLookPrefs(rM))
      };
      rM(), SM(), PM(), QM();
      const zM = [(0, aM.j)("appManagerUpdated|soundVolume", rM), (0, aM.j)("appManagerUpdated|soundOnFromAd", rM), (0, aM.j)("appManagerUpdated|clientEscMenuOptions", (() => {
        SM(), PM(), QM()
      })), (0, aM.j)(hj.c, PM), (0, aM.j)("appManagerUpdated|enabledDebugFeatures", SM), (0, aM.j)("appManagerUpdated|areNametagsHidden", PM), (0, aM.j)("appManagerUpdated|showDistantNametags", PM)];
      return () => {
        for (const MM of zM) MM()
      }
    }
    var lj = iM(41998),
      Ej = iM(42006);
    var Uj = (0, Ej.e)("lend"),
      Gj = (0, Ej.e)("starting"),
      Cj = (0, Ej.e)("generation"),
      ej = (0, Ej.e)("end");
    class bj {
      constructor(MM) {
        this.deps = MM, Object.defineProperty(this, ej, {
          value: wj
        }), Object.defineProperty(this, Uj, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Gj, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, Cj, {
          writable: !0,
          value: 0
        })
      }
      get active() {
        return null !== (0, lj.d)(this, Uj)[Uj] || (0, lj.d)(this, Gj)[Gj]
      }
      async start(MM) {
        if (this.active) return "busy";
        const rM = (0, lj.d)(this, Cj)[Cj];
        (0, lj.d)(this, Gj)[Gj] = !0;
        try {
          if (!await this.deps.ensureLoaded()) return "refused"
        } finally {
          (0, lj.d)(this, Gj)[Gj] = !1
        }
        if (rM !== (0, lj.d)(this, Cj)[Cj]) return "refused";
        const iM = this.deps.beginSave();
        if (!iM) return "refused";
        const OM = Number(BigInt.asUintN(32, MM)),
          SM = Number(BigInt.asUintN(32, MM >> 32n));
        let jM = "refused";
        return this.deps.recorderCall(((MM, rM) => {
          const aM = iM.editState,
            PM = MM.stage(aM.length);
          0 !== PM ? (new Uint8Array(rM.buffer, PM, aM.length).set(aM), MM.vSM(iM.headLen, OM, SM) && (jM = "sealing")) : jM = "tooLarge"
        }), !0), "sealing" !== jM ? (iM.end(), jM) : ((0, lj.d)(this, Uj)[Uj] = iM, "sealing")
      }
      beforeRecorderStep() {
        const MM = (0, lj.d)(this, Uj)[Uj];
        if (!MM) return null;
        let rM = -1,
          iM = 0;
        if (!this.deps.recorderCall((MM => {
            rM = MM.FSM(), rM > 0 && (iM = MM.BSM())
          }))) return (0, lj.d)(this, ej)[ej](MM, "stopped");
        if (rM < 0) return (0, lj.d)(this, ej)[ej](MM, "read");
        if (0 === rM) return null;
        const OM = MM.head(iM, rM);
        let SM = !1;
        if (OM && this.deps.recorderCall(((MM, iM) => {
            const jM = MM.stage(rM);
            0 !== jM && (new Uint8Array(iM.buffer, jM, rM).set(OM), SM = !0)
          }), !0), SM) return null;
        const jM = MM.givenUp();
        this.deps.recorderCall((MM => {
          MM.XSM()
        }));
        const aM = (0, lj.d)(this, ej)[ej](MM, jM ? "givenUp" : "stopped");
        return jM && this.deps.givenUp("Reopen the replay you were editing to make your edits again, as they weren't saved when another replay opened."), aM
      }
      stop() {
        (0, lj.d)(this, Cj)[Cj]++;
        const MM = (0, lj.d)(this, Uj)[Uj];
        MM && (this.deps.recorderCall((MM => {
          MM.XSM()
        })), (0, lj.d)(this, ej)[ej](MM, "stopped"))
      }
    }

    function wj(MM, rM) {
      return (0, lj.d)(this, Uj)[Uj] = null, MM.end(), rM
    }

    function tj(MM, rM) {
      const iM = new Uint8Array(4),
        OM = new DataView(iM.buffer);
      return OM.setUint8(0, MM ? 1 : 0), OM.setUint16(2, Math.max(0, Math.min(65535, Math.round(rM))), !0), iM
    }

    function gj(MM, rM) {
      return MM > function(MM) {
        return 16777216 + 314572.8 * Math.max(0, MM)
      }(rM) + 33554432
    }
    let uj = null;

    function Rj(MM) {
      return uj ??= async function(MM) {
        const rM = MM.loadInFlight();
        rM && await rM.catch((() => {}));
        if (MM.trapped()) return "trapped";
        if (MM.busy() || !gj(MM.memoryBytes(), MM.clipSeconds())) return "ML";
        MM.unload();
        let iM = !1;
        try {
          iM = await MM.load()
        } catch {
          iM = !1
        }
        if (!iM) return MM.trapped() ? "trapped" : MM.dh() ? "dh" : "failed";
        return "recycled"
      }(MM).finally((() => {
        uj = null
      })), uj
    }
    const pj = "Replay recording couldn't load, so try again.",
      Wj = new Set([mM.Sc.ToggleRecording, mM.Sc.SaveClip]);
    var sj = (0, Ej.e)("bindings"),
      Dj = (0, Ej.e)("module"),
      kj = (0, Ej.e)("memory"),
      Zj = (0, Ej.e)("trapped"),
      oj = (0, Ej.e)("dh"),
      fj = (0, Ej.e)("recycleDue"),
      Yj = (0, Ej.e)("loading"),
      Nj = (0, Ej.e)("generation"),
      Aj = (0, Ej.e)("viewDrawn"),
      xj = (0, Ej.e)("clip"),
      vj = (0, Ej.e)("session"),
      Fj = (0, Ej.e)("control"),
      Bj = (0, Ej.e)("deferred"),
      Xj = (0, Ej.e)("coreU8"),
      Ij = (0, Ej.e)("coreU32"),
      Kj = (0, Ej.e)("moduleU8"),
      qj = (0, Ej.e)("edited"),
      Tj = (0, Ej.e)("sendSession"),
      Vj = (0, Ej.e)("checkNotInEvents"),
      cj = (0, Ej.e)("clipping"),
      Ma = (0, Ej.e)("busy"),
      ra = (0, Ej.e)("use"),
      ia = (0, Ej.e)("ensureLoaded"),
      Oa = (0, Ej.e)("loadOnce"),
      Sa = (0, Ej.e)("recycleAfterStep"),
      ja = (0, Ej.e)("settleRecycle"),
      aa = (0, Ej.e)("load"),
      Pa = (0, Ej.e)("attach"),
      na = (0, Ej.e)("resendHeld"),
      Qa = (0, Ej.e)("recycle"),
      za = (0, Ej.e)("send"),
      La = (0, Ej.e)("unload"),
      ma = (0, Ej.e)("dropModule"),
      Ha = (0, Ej.e)("coreBytes"),
      ha = (0, Ej.e)("coreWords"),
      Ja = (0, Ej.e)("moduleBytes"),
      da = (0, Ej.e)("loadFailed"),
      ya = (0, Ej.e)("call"),
      la = (0, Ej.e)("guard"),
      Ea = (0, Ej.e)("trapOn");
    class Ua {
      constructor(MM) {
        this.deps = MM, Object.defineProperty(this, Ea, {
          value: Fa
        }), Object.defineProperty(this, la, {
          value: va
        }), Object.defineProperty(this, ya, {
          value: xa
        }), Object.defineProperty(this, da, {
          value: Aa
        }), Object.defineProperty(this, Ja, {
          value: Na
        }), Object.defineProperty(this, ha, {
          value: Ya
        }), Object.defineProperty(this, Ha, {
          value: fa
        }), Object.defineProperty(this, ma, {
          value: oa
        }), Object.defineProperty(this, La, {
          value: Za
        }), Object.defineProperty(this, za, {
          value: ka
        }), Object.defineProperty(this, Qa, {
          value: Da
        }), Object.defineProperty(this, na, {
          value: sa
        }), Object.defineProperty(this, Pa, {
          value: Wa
        }), Object.defineProperty(this, aa, {
          value: pa
        }), Object.defineProperty(this, ja, {
          value: Ra
        }), Object.defineProperty(this, Sa, {
          value: ua
        }), Object.defineProperty(this, Oa, {
          value: ga
        }), Object.defineProperty(this, ia, {
          value: ta
        }), Object.defineProperty(this, ra, {
          value: wa
        }), Object.defineProperty(this, Ma, {
          value: ba
        }), Object.defineProperty(this, cj, {
          value: ea
        }), Object.defineProperty(this, Vj, {
          value: Ca
        }), Object.defineProperty(this, Tj, {
          value: Ga
        }), Object.defineProperty(this, sj, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Dj, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, kj, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Zj, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, oj, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, fj, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Yj, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Nj, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, Aj, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, xj, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, vj, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Fj, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Bj, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Xj, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Ij, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Kj, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, qj, {
          writable: !0,
          value: void 0
        }), (0, lj.d)(this, qj)[qj] = new bj({
          ensureLoaded: () => (0, lj.d)(this, ia)[ia](),
          recorderCall: (MM, rM) => {
            rM && (0, lj.d)(this, Vj)[Vj]("an edited save's stage");
            const iM = (0, lj.d)(this, ya)[ya](((rM, iM) => (MM(rM, iM), !0)));
            return null !== iM && void 0 !== iM && iM
          },
          beginSave: MM.beginSave,
          givenUp: MM.givenUp
        })
      }
      get active() {
        return null !== (0, lj.d)(this, Dj)[Dj]
      }
      get trapped() {
        return (0, lj.d)(this, Zj)[Zj]
      }
      get loading() {
        return null !== (0, lj.d)(this, Yj)[Yj]
      }
      prefetch() {
        (0, lj.d)(this, oj)[oj] || (0, lj.d)(this, Zj)[Zj] || (0, lj.d)(this, Dj)[Dj] || (0, lj.d)(this, Yj)[Yj] || this.deps.prefetch()
      }
      viewDrawn() {
        (0, lj.d)(this, Aj)[Aj] = !0, (0, lj.d)(this, cj)[cj]() && (0, lj.d)(this, ra)[ra]()
      }
      prefs(MM, rM) {
        (0, lj.d)(this, xj)[xj] = {
          on: MM,
          seconds: rM
        }, (0, lj.d)(this, za)[za](mM.Oc.Prefs, tj(MM, rM)), MM && (0, lj.d)(this, Aj)[Aj] && (0, lj.d)(this, ra)[ra]()
      }
      control(MM) {
        const rM = function(MM) {
          return new Uint8Array([MM, 0, 0, 0])
        }(MM);
        if (Wj.has(MM)) return (0, lj.d)(this, Dj)[Dj] ? void(0, lj.d)(this, za)[za](mM.Oc.Control, rM) : ((0, lj.d)(this, Fj)[Fj] = rM, void(0, lj.d)(this, ra)[ra]());
        (0, lj.d)(this, oj)[oj] || this.deps.coreCommand(mM.Oc.Control, rM)
      }
      session(MM) {
        (0, lj.d)(this, vj)[vj] = MM, (0, lj.d)(this, Tj)[Tj](MM)
      }
      filePartDone(MM, rM) {
        (0, lj.d)(this, za)[za](mM.Oc.FilePartDone, function(MM, rM) {
          const iM = new Uint8Array(8),
            OM = new DataView(iM.buffer);
          return OM.setUint32(0, MM, !0), OM.setUint32(4, rM, !0), iM
        }(MM, rM))
      }
      fileDone(MM) {
        return (0, lj.d)(this, za)[za](mM.Oc.FileDone, function(MM) {
          const rM = new Uint8Array(4);
          return new DataView(rM.buffer).setUint32(0, MM, !0), rM
        }(MM)), (0, lj.d)(this, Sa)[Sa]()
      }
      saveEdited(MM) {
        return (0, lj.d)(this, Vj)[Vj]("saveEdited"), (0, lj.d)(this, qj)[qj].start(MM)
      }
      afterFrame() {
        if (!(0, lj.d)(this, Dj)[Dj]) return;
        "read" === (0, lj.d)(this, qj)[qj].beforeRecorderStep() && (0, lj.d)(this, Sa)[Sa]();
        const MM = (0, lj.d)(this, fj)[fj];
        (0, lj.d)(this, fj)[fj] = null;
        const rM = (0, lj.d)(this, Dj)[Dj],
          iM = (0, lj.d)(this, kj)[kj];
        if (!rM || !iM) return void(null === MM || void 0 === MM || MM.resolve((0, lj.d)(this, Zj)[Zj] ? "trapped" : "ML"));
        const {
          core: OM
        } = this.deps, SM = OM.qSM(2);
        let jM, aM, PM, nM, QM = 0,
          zM = 0;
        if (0 !== SM) {
          var LM, mM;
          const MM = (0, lj.d)(this, ha)[ha]();
          QM = null !== (LM = MM[SM >>> 2]) && void 0 !== LM ? LM : 0, zM = null !== (mM = MM[1 + (SM >>> 2)]) && void 0 !== mM ? mM : 0
        }
        try {
          if (zM > 0) {
            const MM = rM.feed(zM);
            0 !== MM && (0, lj.d)(this, Ja)[Ja](iM).set((0, lj.d)(this, Ha)[Ha]().subarray(QM, QM + zM), MM)
          }
          jM = rM.step(), aM = rM.TSM(), PM = rM.VSM(), nM = rM.cSM()
        } catch (HM) {
          if (!(0, lj.d)(this, Ea)[Ea](HM)) throw null === MM || void 0 === MM || MM.resolve("ML"), HM;
          return void(null === MM || void 0 === MM || MM.resolve("trapped"))
        }
        if (jM > 0) {
          const MM = OM.MjM(2, jM);
          0 !== MM && (0, lj.d)(this, Ha)[Ha]().set((0, lj.d)(this, Ja)[Ja](iM).subarray(aM, aM + jM), MM)
        }
        if (PM > 0) {
          (0, lj.d)(this, Bj)[Bj] = [];
          try {
            this.deps.events(new Uint8Array(iM.buffer, nM, PM), iM)
          } catch (HM) {
            throw null === MM || void 0 === MM || MM.resolve("ML"), HM
          } finally {
            const MM = (0, lj.d)(this, Bj)[Bj];
            (0, lj.d)(this, Bj)[Bj] = null;
            for (const [rM, iM] of MM)(0, lj.d)(this, za)[za](rM, iM)
          }
        }
        if (!(0, lj.d)(this, cj)[cj]() && !(0, lj.d)(this, Ma)[Ma]()) return (0, lj.d)(this, La)[La](), void(null === MM || void 0 === MM || MM.resolve("ML"));
        null === MM || void 0 === MM || MM.resolve((0, lj.d)(this, Qa)[Qa]())
      }
      dispose() {
        (0, lj.d)(this, oj)[oj] = !0, (0, lj.d)(this, La)[La]()
      }
    }

    function Ga(MM) {
      (0, lj.d)(this, za)[za](mM.Oc.Session, function(MM) {
        const rM = new TextEncoder,
          iM = rM.encode(MM.game).subarray(0, 65535),
          OM = rM.encode(MM.lobby).subarray(0, 65535),
          SM = new Uint8Array(22 + iM.length + 2 + OM.length),
          jM = new DataView(SM.buffer);
        jM.setFloat64(0, MM.unixMs, !0), jM.setBigUint64(8, BigInt.asUintN(64, MM.session), !0), jM.setUint8(16, MM.lobbyType);
        let aM = 20;
        for (const PM of [iM, OM]) jM.setUint16(aM, PM.length, !0), SM.set(PM, aM + 2), aM += 2 + PM.length;
        return SM
      }({
        ...MM,
        unixMs: this.deps.unixNow()
      }))
    }

    function Ca(MM) {
      false
    }

    function ea() {
      var MM, rM;
      return null !== (MM = null === (rM = (0, lj.d)(this, xj)[xj]) || void 0 === rM ? void 0 : rM.on) && void 0 !== MM && MM
    }

    function ba() {
      const MM = (0, lj.d)(this, Dj)[Dj];
      let rM = !0;
      if (MM) try {
        rM = MM.busy()
      } catch (iM) {
        if (!(0, lj.d)(this, Ea)[Ea](iM)) throw iM
      }
      return rM || (0, lj.d)(this, qj)[qj].active
    }
    async function wa() {
      !(0, lj.d)(this, oj)[oj] && this.deps.allowed() ? await (0, lj.d)(this, ia)[ia]() : (0, lj.d)(this, Fj)[Fj] = null
    }

    function ta() {
      return (0, lj.d)(this, Zj)[Zj] || (0, lj.d)(this, oj)[oj] ? Promise.resolve(!1) : (0, lj.d)(this, Dj)[Dj] ? Promise.resolve(!0) : ((0, lj.d)(this, Yj)[Yj] ??= (0, lj.d)(this, Oa)[Oa](), (0, lj.d)(this, Yj)[Yj])
    }
    async function ga() {
      let MM = !1;
      try {
        return MM = await (0, lj.d)(this, aa)[aa](), MM
      } finally {
        MM || ((0, lj.d)(this, Fj)[Fj] = null), (0, lj.d)(this, Yj)[Yj] = null
      }
    }

    function ua() {
      if (!(0, lj.d)(this, Dj)[Dj]) return Promise.resolve((0, lj.d)(this, Zj)[Zj] ? "trapped" : "ML");
      if (!(0, lj.d)(this, fj)[fj]) {
        let MM = () => {};
        const rM = new Promise((rM => {
          MM = rM
        }));
        (0, lj.d)(this, fj)[fj] = {
          promise: rM,
          resolve: MM
        }
      }
      return (0, lj.d)(this, fj)[fj].promise
    }

    function Ra(MM) {
      const rM = (0, lj.d)(this, fj)[fj];
      (0, lj.d)(this, fj)[fj] = null, null === rM || void 0 === rM || rM.resolve(MM)
    }
    async function pa() {
      let MM = (0, lj.d)(this, sj)[sj];
      if (!MM) {
        const rM = (0, lj.d)(this, Nj)[Nj];
        try {
          MM = await this.deps.load()
        } catch (iM) {
          return rM === (0, lj.d)(this, Nj)[Nj] && await (0, lj.d)(this, da)[da](iM), !1
        }
        if (rM !== (0, lj.d)(this, Nj)[Nj]) return this.deps.unload(), !1;
        const OM = MM,
          SM = (0, lj.d)(this, la)[la]((() => OM.rjM()));
        if (void 0 === SM) return !1;
        const jM = this.deps.core.ijM();
        if (SM !== jM) return await (0, lj.d)(this, da)[da](new Error(`recorder port version ${SM}, the core's ${jM}`)), !1;
        (0, lj.d)(this, sj)[sj] = MM
      }
      const rM = MM;
      try {
        if (!(0, lj.d)(this, la)[la]((() => ((0, lj.d)(this, Dj)[Dj] = new rM.OjM, (0, lj.d)(this, kj)[kj] = rM.ISM(), !0)))) return !1;
        (0, lj.d)(this, na)[na]();
        const MM = (0, lj.d)(this, Fj)[Fj];
        return (0, lj.d)(this, Fj)[Fj] = null, MM && (0, lj.d)(this, za)[za](mM.Oc.Control, MM), (0, lj.d)(this, Pa)[Pa]()
      } catch (iM) {
        return (0, lj.d)(this, La)[La](), await (0, lj.d)(this, da)[da](iM), !1
      }
    }

    function Wa() {
      return this.deps.core.SjM(0), 1 === this.deps.core.SjM(1) || ((0, lj.d)(this, La)[La](), this.deps.failed(pj), !1)
    }

    function sa() {
      (0, lj.d)(this, xj)[xj] && (0, lj.d)(this, za)[za](mM.Oc.Prefs, tj((0, lj.d)(this, xj)[xj].on, (0, lj.d)(this, xj)[xj].seconds)), (0, lj.d)(this, vj)[vj] && (0, lj.d)(this, Tj)[Tj]((0, lj.d)(this, vj)[vj])
    }

    function Da() {
      return Rj({
        memoryBytes: this.deps.memoryBytes,
        clipSeconds: () => {
          var MM, rM;
          return null !== (MM = null === (rM = (0, lj.d)(this, xj)[xj]) || void 0 === rM ? void 0 : rM.seconds) && void 0 !== MM ? MM : 0
        },
        trapped: () => (0, lj.d)(this, Zj)[Zj],
        busy: () => (0, lj.d)(this, Ma)[Ma](),
        loadInFlight: () => (0, lj.d)(this, Yj)[Yj],
        dh: () => (0, lj.d)(this, oj)[oj],
        unload: () => {
          (0, lj.d)(this, La)[La]()
        },
        load: () => (0, lj.d)(this, ia)[ia]()
      })
    }

    function ka(MM, rM) {
      (0, lj.d)(this, Bj)[Bj] ? (0, lj.d)(this, Bj)[Bj].push([MM, rM]): (0, lj.d)(this, ya)[ya](((iM, OM) => {
        const SM = iM.KSM(rM.length);
        0 !== SM && (new Uint8Array(OM.buffer, SM, rM.length).set(rM), iM.command(MM, rM.length))
      }))
    }

    function Za() {
      (0, lj.d)(this, Nj)[Nj]++, (0, lj.d)(this, ja)[ja]("ML"), (0, lj.d)(this, qj)[qj].stop(), this.deps.core.SjM(0), (0, lj.d)(this, ma)[ma](), (0, lj.d)(this, Zj)[Zj] || ((0, lj.d)(this, sj)[sj] = null, this.deps.unload())
    }

    function oa() {
      (0, lj.d)(this, ya)[ya]((MM => {
        MM.free()
      })), (0, lj.d)(this, Dj)[Dj] = null, (0, lj.d)(this, kj)[kj] = null, (0, lj.d)(this, Kj)[Kj] = null
    }

    function fa() {
      var MM;
      const rM = this.deps.coreBuffer();
      return (null === (MM = (0, lj.d)(this, Xj)[Xj]) || void 0 === MM ? void 0 : MM.buffer) !== rM && ((0, lj.d)(this, Xj)[Xj] = new Uint8Array(rM)), (0, lj.d)(this, Xj)[Xj]
    }

    function Ya() {
      var MM;
      const rM = this.deps.coreBuffer();
      return (null === (MM = (0, lj.d)(this, Ij)[Ij]) || void 0 === MM ? void 0 : MM.buffer) !== rM && ((0, lj.d)(this, Ij)[Ij] = new Uint32Array(rM, 0, rM.byteLength >>> 2)), (0, lj.d)(this, Ij)[Ij]
    }

    function Na(MM) {
      var rM;
      const iM = MM.buffer;
      return (null === (rM = (0, lj.d)(this, Kj)[Kj]) || void 0 === rM ? void 0 : rM.buffer) !== iM && ((0, lj.d)(this, Kj)[Kj] = new Uint8Array(iM)), (0, lj.d)(this, Kj)[Kj]
    }
    async function Aa(MM) {
      await this.deps.staleOr(MM, (() => {
        this.deps.failed(pj)
      }))
    }

    function xa(MM) {
      const rM = (0, lj.d)(this, Dj)[Dj],
        iM = (0, lj.d)(this, kj)[kj];
      if (rM && iM) return (0, lj.d)(this, la)[la]((() => MM(rM, iM)))
    }

    function va(MM) {
      if (!(0, lj.d)(this, Zj)[Zj]) try {
        return MM()
      } catch (rM) {
        if (!(0, lj.d)(this, Ea)[Ea](rM)) throw rM;
        return
      }
    }

    function Fa(MM) {
      return MM instanceof WebAssembly.RuntimeError && ((0, lj.d)(this, Zj)[Zj] = !0, (0, lj.d)(this, Dj)[Dj] = null, (0, lj.d)(this, kj)[kj] = null, (0, lj.d)(this, Kj)[Kj] = null, (0, lj.d)(this, sj)[sj] = null, (0, lj.d)(this, Fj)[Fj] = null, (0, lj.d)(this, ja)[ja]("trapped"), this.deps.core.SjM(0), (0, lj.d)(this, qj)[qj].stop(), this.deps.crash(this.deps.markTrapped(MM)), this.deps.failed("Replay recording stopped working, so reload the page to record replays again."), !0)
    }
    var Ba = iM(39678);
    const Xa = new Map([
      ["skyblock", () => iM.e(58).then((() => iM(39676)))]
    ]);

    function Ia(MM) {
      const rM = Xa.get(MM);
      return rM ? rM().then((() => {
        const rM = (0, Ba.c)(MM);
        if (!rM) throw new Error(`${MM}'s replay hook module registered no hook`);
        return rM
      })) : null
    }
    class Ka {
      constructor(MM) {
        this.deps = MM, this.game = null, this.hook = null, this.generation = 0, this.all = !1, this.pending = new Map, this.ids = new Int32Array(64)
      }
      get wantsWatch() {
        return null !== this.hook
      }
      opened(MM) {
        if (this.pending.clear(), MM === this.game && null !== this.hook) return void(this.all = !0);
        const rM = ++this.generation;
        this.game = MM, this.hook = null, this.all = !1;
        const iM = this.deps.loadHook(MM);
        null === iM || void 0 === iM || iM.then((MM => {
          rM === this.generation && (this.hook = MM, this.all = !0)
        }), (MM => {
          rM === this.generation && this.deps.onError(MM)
        }))
      }
      ended() {
        this.generation++, this.game = null, this.hook = null, this.all = !1, this.pending.clear()
      }
      entityAdded(MM) {
        null === this.hook || this.all || this.pending.set(MM, !0)
      }
      entityInfoChanged(MM) {
        null === this.hook || this.all || this.pending.has(MM) || this.pending.set(MM, !1)
      }
      flush(MM) {
        const {
          hook: rM
        } = this;
        if (null === rM || !MM || !this.all && 0 === this.pending.size) return;
        const iM = this.deps.cmd();
        if (null === iM) return;
        const {
          api: OM
        } = this.deps;
        if (this.all) {
          this.all = !1, this.pending.clear();
          const {
            ids: MM,
            count: rM
          } = MO(OM, this.ids);
          this.ids = MM;
          for (let iM = 0; iM < rM; iM++) this.pending.set(MM[iM], !0)
        }
        const SM = this.ids = rO(this.ids, this.pending.size);
        let jM = 0;
        for (const QM of this.pending.keys()) SM[jM++] = QM;
        const aM = [],
          PM = iO(OM, SM, jM, ((MM, rM) => {
            null !== rM && aM.push({
              serverId: MM,
              info: rM,
              spawned: !0 === this.pending.get(MM)
            })
          }));
        if (PM) {
          this.pending.clear();
          for (const {
              serverId: MM,
              info: OM,
              spawned: SM
            }
            of aM) try {
            rM(OM, {
              setFacingTolerance: rM => {
                null === rM && SM || Gi(iM, MM, rM) || this.pending.set(MM, SM)
              }
            })
          } catch (nM) {
            this.deps.onError(nM)
          }
        }
      }
    }
    var qa = (0, Ej.e)("bindings"),
      Ta = (0, Ej.e)("module"),
      Va = (0, Ej.e)("memory"),
      ca = (0, Ej.e)("trapped"),
      MP = (0, Ej.e)("generation"),
      rP = (0, Ej.e)("loading"),
      iP = (0, Ej.e)("lend"),
      OP = (0, Ej.e)("givenUp"),
      SP = (0, Ej.e)("afterSave"),
      jP = (0, Ej.e)("opens"),
      aP = (0, Ej.e)("saveAskedAt"),
      PP = (0, Ej.e)("unload"),
      nP = (0, Ej.e)("dropModule"),
      QP = (0, Ej.e)("loadFailed"),
      zP = (0, Ej.e)("saveReadsBody"),
      LP = (0, Ej.e)("command"),
      mP = (0, Ej.e)("call"),
      HP = (0, Ej.e)("guard"),
      hP = (0, Ej.e)("trapOn");
    class JP {
      constructor(MM) {
        this.deps = MM, Object.defineProperty(this, hP, {
          value: eP
        }), Object.defineProperty(this, HP, {
          value: CP
        }), Object.defineProperty(this, mP, {
          value: GP
        }), Object.defineProperty(this, LP, {
          value: UP
        }), Object.defineProperty(this, zP, {
          get: EP,
          set: void 0
        }), Object.defineProperty(this, QP, {
          value: lP
        }), Object.defineProperty(this, nP, {
          value: yP
        }), Object.defineProperty(this, PP, {
          value: dP
        }), Object.defineProperty(this, qa, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Ta, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Va, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, ca, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, MP, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, rP, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, iP, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, OP, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, SP, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, jP, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, aP, {
          writable: !0,
          value: null
        })
      }
      get active() {
        return null !== (0, lj.d)(this, Ta)[Ta] && null === (0, lj.d)(this, SP)[SP]
      }
      async open(MM, rM) {
        if ((0, lj.d)(this, ca)[ca]) return mM.Zc.ModuleTrap;
        let iM = (0, lj.d)(this, qa)[qa];
        if (!iM) {
          const MM = (0, lj.d)(this, MP)[MP];
          (0, lj.d)(this, rP)[rP]++;
          try {
            iM = await this.deps.load()
          } catch (SM) {
            return (0, lj.d)(this, rP)[rP]--, MM !== (0, lj.d)(this, MP)[MP] ? "stopped" : (0, lj.d)(this, QP)[QP](SM, rM)
          }
          if ((0, lj.d)(this, rP)[rP]--, MM !== (0, lj.d)(this, MP)[MP]) return (0, lj.d)(this, qa)[qa] || 0 !== (0, lj.d)(this, rP)[rP] || (0, lj.d)(this, ca)[ca] || this.deps.unload(), "stopped";
          if ((0, lj.d)(this, ca)[ca]) return mM.Zc.ModuleTrap;
          const OM = iM.rjM(),
            jM = this.deps.core.ijM();
          if (OM !== jM) return (0, lj.d)(this, QP)[QP](new Error(`replay port version ${OM}, the core's ${jM}`), rM);
          (0, lj.d)(this, qa)[qa] = iM
        }
        if (!(0, lj.d)(this, Ta)[Ta]) {
          const MM = iM;
          if (!(0, lj.d)(this, HP)[HP]((() => {
              (0, lj.d)(this, Ta)[Ta] = new MM.jjM, (0, lj.d)(this, Va)[Va] = MM.ajM()
            }))) return mM.Zc.ModuleTrap
        }
        let OM = !1;
        return (0, lj.d)(this, mP)[mP](((rM, iM) => {
          null !== (0, lj.d)(this, SP)[SP] && rM.step(0, 0);
          const SM = rM.stage(MM.length);
          0 !== SM && (new Uint8Array(iM.buffer, SM, MM.length).set(MM), rM.open(), (0, lj.d)(this, OP)[OP] = (0, lj.d)(this, iP)[iP], (0, lj.d)(this, SP)[SP] = null, (0, lj.d)(this, jP)[jP]++, OM = !0)
        })) ? OM ? "opening" : mM.Zc.TooLarge : mM.Zc.ModuleTrap
      }
      beforeFrame(MM) {
        const rM = (0, lj.d)(this, Ta)[Ta],
          iM = (0, lj.d)(this, Va)[Va];
        if (!rM || !iM || null !== (0, lj.d)(this, SP)[SP]) return;
        const {
          core: OM
        } = this.deps, SM = OM.PjM(MM);
        if (SM < 0) return;
        const jM = Math.floor(SM);
        let aM, PM;
        try {
          aM = rM.step(jM, SM - jM), PM = rM.TSM()
        } catch (QM) {
          return void(0, lj.d)(this, hP)[hP](QM)
        }
        const nM = OM.MjM(1, aM);
        if (0 === nM) {
          const MM = (0, lj.d)(this, mP)[mP]((MM => {
            MM.close()
          }));
          if (!MM) return;
          return (0, lj.d)(this, zP)[zP] ? (0, lj.d)(this, SP)[SP] = "drop" : (0, lj.d)(this, nP)[nP](), void OM.njM(mM.Zc.Port)
        }
        new Uint8Array(this.deps.coreBuffer(), nM, aM).set(new Uint8Array(iM.buffer, PM, aM))
      }
      play() {
        (0, lj.d)(this, LP)[LP]((MM => {
          MM.play()
        }))
      }
      pause() {
        (0, lj.d)(this, LP)[LP]((MM => {
          MM.pause()
        }))
      }
      seek(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (0, lj.d)(this, LP)[LP]((iM => {
          iM.seek(MM, rM)
        }))
      }
      setMark(MM, rM) {
        return (0, lj.d)(this, LP)[LP]((iM => {
          iM.QjM(MM, rM)
        }))
      }
      addKeyframe(MM, rM) {
        return (0, lj.d)(this, LP)[LP]((iM => {
          iM.zjM(MM[0], MM[1], MM[2], rM[0], rM[1], rM[2])
        }))
      }
      setKeyframe(MM, rM) {
        return (0, lj.d)(this, LP)[LP]((iM => {
          iM.LjM(MM, rM)
        }))
      }
      moveKeyframe(MM, rM) {
        return (0, lj.d)(this, LP)[LP]((iM => {
          iM.mjM(MM, rM)
        }))
      }
      deleteKeyframes(MM, rM) {
        return (0, lj.d)(this, LP)[LP]((iM => {
          iM.HjM(MM, rM)
        }))
      }
      crop(MM, rM) {
        return null === (0, lj.d)(this, iP)[iP] && (0, lj.d)(this, LP)[LP]((iM => {
          iM.crop(MM, rM)
        }))
      }
      beginSave() {
        const MM = (0, lj.d)(this, aP)[aP];
        if ((0, lj.d)(this, aP)[aP] = null, null !== MM && MM !== (0, lj.d)(this, jP)[jP]) return null;
        let rM = 0,
          iM = null;
        if ((0, lj.d)(this, mP)[mP](((MM, OM) => {
            rM = MM.save(), 0 !== rM && (iM = new Uint8Array(OM.buffer, MM.hjM(), MM.JjM()).slice())
          })), 0 === rM || !iM) return null;
        const OM = {
          headLen: rM,
          editState: iM,
          givenUp: () => (0, lj.d)(this, OP)[OP] === OM,
          head: (MM, rM) => {
            if ((0, lj.d)(this, iP)[iP] !== OM || !(0, lj.d)(this, zP)[zP]) return null;
            let iM = null;
            return (0, lj.d)(this, mP)[mP](((OM, SM) => {
              const jM = OM.djM();
              0 !== jM && MM >= 0 && rM >= 0 && MM + rM <= jM && (iM = new Uint8Array(SM.buffer, OM.yjM() + MM, rM))
            })), iM
          },
          end: () => {
            if ((0, lj.d)(this, iP)[iP] !== OM) return;
            (0, lj.d)(this, iP)[iP] = null, (0, lj.d)(this, OP)[OP] = null, (0, lj.d)(this, mP)[mP]((MM => {
              MM.ljM()
            }));
            const MM = (0, lj.d)(this, SP)[SP];
            (0, lj.d)(this, SP)[SP] = null, "unload" === MM ? (0, lj.d)(this, PP)[PP]() : "drop" === MM && (0, lj.d)(this, nP)[nP]()
          }
        };
        return (0, lj.d)(this, iP)[iP] = OM, OM
      }
      askSave() {
        (0, lj.d)(this, aP)[aP] = (0, lj.d)(this, jP)[jP]
      }
      setSpeed(MM) {
        (0, lj.d)(this, LP)[LP]((rM => {
          rM.EjM(MM)
        }))
      }
      setCameraMode(MM) {
        (0, lj.d)(this, LP)[LP]((rM => {
          rM.UjM(MM)
        }))
      }
      close() {
        (0, lj.d)(this, LP)[LP]((MM => {
          MM.close()
        }))
      }
      stop() {
        (0, lj.d)(this, MP)[MP]++, (0, lj.d)(this, zP)[zP] && ((0, lj.d)(this, mP)[mP]((MM => {
          MM.close()
        })), (0, lj.d)(this, Ta)[Ta]) ? (0, lj.d)(this, SP)[SP] = "unload" : (0, lj.d)(this, PP)[PP]()
      }
    }

    function dP() {
      (0, lj.d)(this, nP)[nP](), (0, lj.d)(this, ca)[ca] || ((0, lj.d)(this, qa)[qa] = null, this.deps.unload())
    }

    function yP() {
      (0, lj.d)(this, mP)[mP]((MM => {
        MM.free()
      })), (0, lj.d)(this, Ta)[Ta] = null, (0, lj.d)(this, Va)[Va] = null
    }
    async function lP(MM, rM) {
      return await this.deps.staleOr(MM, (() => {}), {
        beforeReload: rM
      }) ? "reloading" : mM.Zc.ModuleLoad
    }

    function EP() {
      return null !== (0, lj.d)(this, iP)[iP] && (0, lj.d)(this, OP)[OP] !== (0, lj.d)(this, iP)[iP]
    }

    function UP(MM) {
      return null === (0, lj.d)(this, SP)[SP] && (0, lj.d)(this, mP)[mP](MM)
    }

    function GP(MM) {
      const rM = (0, lj.d)(this, Ta)[Ta],
        iM = (0, lj.d)(this, Va)[Va];
      return !(!rM || !iM) && (0, lj.d)(this, HP)[HP]((() => {
        MM(rM, iM)
      }))
    }

    function CP(MM) {
      if ((0, lj.d)(this, ca)[ca]) return !1;
      try {
        return MM(), !0
      } catch (rM) {
        return (0, lj.d)(this, hP)[hP](rM), !1
      }
    }

    function eP(MM) {
      if (!(MM instanceof WebAssembly.RuntimeError)) throw MM;
      (0, lj.d)(this, ca)[ca] = !0, (0, lj.d)(this, Ta)[Ta] = null, (0, lj.d)(this, Va)[Va] = null, (0, lj.d)(this, qa)[qa] = null, this.deps.crash(this.deps.markTrapped(MM)), this.deps.core.njM(mM.Zc.ModuleTrap)
    }
    var bP = iM(6950),
      wP = iM(42126);
    const tP = "[bloxd-wasm-client]";
    const gP = String(IS);

    function uP(MM) {
      return null === MM || MM === gP ? void 0 : MM
    }

    function RP(MM) {
      var rM, iM, OM, SM, jM, PM, nM;
      switch (MM.what) {
        case mM.fd.FlyingText: {
          let rM;
          try {
            rM = JSON.parse(MM.contentJson)
          } catch (QM) {
            return void console.warn(`${tP} a replay's flying text isn't JSON`, QM)
          }
          aM.i.Tz("forceFlyingMiddleMessage", {
            content: rM,
            oi: MM.oi,
            angle: MM.angle,
            Yi: MM.Yi
          });
          break
        }
        case mM.fd.PlayerKilled:
          (0, wP.d)({
            kind: "killed",
            body: {
              deadEId: null !== (rM = uP(MM.dead)) && void 0 !== rM ? rM : "",
              killerEId: uP(MM.killer),
              withItem: null !== (iM = MM.withItem) && void 0 !== iM ? iM : "",
              killstreak: MM.killstreak
            }
          });
          break;
        case mM.fd.Killfeed:
          (0, wP.d)({
            kind: "custom",
            body: {
              killer: {
                eId: uP(MM.killerId),
                name: null !== (OM = MM.killerName) && void 0 !== OM ? OM : void 0,
                colour: null !== (SM = MM.killerColour) && void 0 !== SM ? SM : void 0
              },
              victim: {
                eId: uP(MM.victimId),
                name: null !== (jM = MM.victimName) && void 0 !== jM ? jM : void 0,
                colour: null !== (PM = MM.victimColour) && void 0 !== PM ? PM : void 0
              },
              withItem: null !== (nM = MM.withItem) && void 0 !== nM ? nM : ""
            }
          })
      }
    }
    const pP = "[bloxd-wasm-client]";

    function WP(MM) {
      if (void 0 === MM || null === MM || "" === MM) return null;
      const rM = Number(MM);
      return Number.isInteger(rM) && rM > IS && rM <= 2147483647 ? rM : null
    }

    function sP(MM) {
      return {
        id: WP(MM.eId),
        name: "string" === typeof MM.name ? MM.name : null,
        colour: "string" === typeof MM.colour ? MM.colour : null
      }
    }

    function DP(MM) {
      const rM = (0, Sj.h)(nO.hc.PlayerKilled, (rM => {
          var iM, OM;
          const SM = (0, Oj.f)(rM);
          if (!(0, Oj.c)(SM)) return;
          const {
            deadEId: jM,
            killerEId: aM,
            withItem: PM,
            killstreak: nM
          } = SM;
          MM.recordPlayerKilled(null !== (iM = WP(jM)) && void 0 !== iM ? iM : IS, null !== (OM = WP(aM)) && void 0 !== OM ? OM : IS, "number" === typeof nM ? nM : 0, "string" === typeof PM ? PM : "")
        })),
        iM = (0, Sj.h)(nO.hc.CustomKillfeed, (rM => {
          const iM = (0, Oj.f)(rM);
          if (!(0, Oj.c)(iM) || !(0, Oj.c)(iM.killer) || !(0, Oj.c)(iM.victim)) return;
          const {
            killer: OM,
            victim: SM,
            withItem: jM
          } = iM;
          MM.recordKillfeed(sP(OM), sP(SM), "string" === typeof jM ? jM : null)
        }));
      return () => {
        rM(), iM()
      }
    }

    function kP(MM) {
      var rM;
      return void 0 === MM || null === MM ? null : null !== (rM = JSON.stringify(MM)) && void 0 !== rM ? rM : null
    }

    function ZP(MM) {
      let rM = null;
      const iM = () => {
        const {
          enableClipping: iM,
          clipDurationSeconds: SM
        } = OM.d.get("clientEscMenuOptions"), jM = `${iM}:${SM}`;
        jM !== rM && (rM = jM, MM.recorder.setPrefs(iM, SM))
      };
      return iM(), (0, aM.j)("appManagerUpdated|clientEscMenuOptions", iM)
    }
    const oP = "replayModule",
      fP = "recorderModule";

    function YP(MM, rM, iM) {
      return function() {
        return MM.isStopped ? iM : rM(...arguments)
      }
    }
    const NP = {
      open: () => Promise.reject(new Error(fS.c.coreStopped.text)),
      replayKey: () => null,
      encode: () => Promise.resolve(null),
      fileHandle: () => null,
      markSaved: () => {}
    };

    function AP() {
      return iM.e(76).then((() => iM(64109)))
    }

    function xP(MM) {
      (0, fS.d)({
        text: MM,
        type: "Error"
      })
    }
    class vP {
      constructor(MM) {
        this.deps = MM, this.runtime = void 0, this.entityHooks = void 0, this.recordedOptions = void 0, this.stops = void 0, this.activeConn = 0, this.stopped = !1, this.bench = null, this.replay = void 0, this.recorder = void 0, this.freecam = void 0, this.drawn = !1;
        const {
          running: rM,
          api: OM,
          core: SM
        } = MM, jM = () => MM.memory().buffer, aM = () => rM.isStopped ? null : rM.rings.cmd, PM = YP(rM, ((MM, rM) => SM.MjM(MM, rM)), 0), nM = () => SM.ijM();
        let QM = null;
        this.replay = new JP({
          core: {
            PjM: YP(rM, (MM => SM.PjM(MM)), -1),
            MjM: PM,
            ijM: nM,
            njM: YP(rM, (MM => {
              SM.njM(MM)
            }), void 0)
          },
          coreBuffer: jM,
          load: async () => (QM = await iM.e(77).then((() => iM(64121))), QM.loadReplayModule()),
          unload: () => {
            var MM;
            null === (MM = QM) || void 0 === MM || MM.unloadReplayModule()
          },
          markTrapped: MM => QM ? QM.markReplayTrapped(MM) : new Error(String(MM)),
          staleOr: (rM, iM, OM) => MM.staleOr(oP, rM, iM, OM),
          crash: rM => {
            MM.reportFault(oP, rM)
          }
        });
        let zM = null;
        this.recorder = new Ua({
          core: {
            SjM: YP(rM, (MM => SM.SjM(MM)), 0),
            qSM: YP(rM, (MM => SM.qSM(MM)), 0),
            MjM: PM,
            ijM: nM
          },
          coreCommand: (MM, rM) => {
            var iM, OM;
            return null !== (iM = null === (OM = aM()) || void 0 === OM ? void 0 : OM.writeCmd(MM, 0, rM)) && void 0 !== iM && iM
          },
          coreBuffer: jM,
          load: async () => (zM = await AP(), zM.loadRecorderModule()),
          prefetch: () => {
            AP().then((MM => MM.prefetchRecorderModule())).catch((MM => {
              console.warn(`${pP} the recorder module didn't prefetch, so a save loads it:`, MM)
            }))
          },
          unload: () => {
            var MM;
            null === (MM = zM) || void 0 === MM || MM.unloadRecorderModule()
          },
          markTrapped: MM => zM ? zM.markRecorderTrapped(MM) : new Error(String(MM)),
          memoryBytes: () => {
            var MM, rM;
            return null !== (MM = null === (rM = zM) || void 0 === rM ? void 0 : rM.recorderMemoryBytes()) && void 0 !== MM ? MM : 0
          },
          staleOr: (rM, iM) => MM.staleOr(fP, rM, iM),
          crash: rM => {
            MM.reportFault(fP, rM)
          },
          allowed: () => !0 === MM.options.get("canRecordReplays"),
          failed: xP,
          events: (MM, rM) => {
            this.runtime.recorderEvents(MM, rM)
          },
          beginSave: () => this.replay.beginSave(),
          givenUp: xP,
          unixNow: () => Date.now()
        });
        const LM = new XS({
          core: {
            YSM: YP(rM, (MM => SM.YSM(MM)), 0),
            xSM: YP(rM, (() => {
              SM.xSM()
            }), void 0),
            qd: YP(rM, (() => SM.qd()), 0),
            ASM: YP(rM, (() => SM.ASM()), 0)
          },
          buffer: jM,
          apiView: () => OM.apiView,
          cmd: aM,
          replay: this.replay,
          recorder: this.recorder
        });
        this.entityHooks = new Ka({
          api: OM,
          cmd: aM,
          loadHook: Ia,
          onError: MM => {
            console.warn(`${pP} the recorded game's replay hooks:`, MM)
          }
        });
        const mM = new ij({
          client: LM,
          buffer: jM,
          setHoldDraws: MM => {
            rM.setHoldDraws(MM)
          },
          notify: fS.d,
          onRecorderState: () => {
            var MM;
            null === (MM = (0, NS.f)()) || void 0 === MM || MM.recorderChanged()
          },
          onViewerChange: () => {
            var MM;
            null === (MM = (0, NS.f)()) || void 0 === MM || MM.viewerChanged()
          },
          onReplayOption: rM => {
            ! function(MM, rM) {
              var iM, OM;
              const SM = nO.pb[rM.key];
              if (void 0 === SM) return;
              let jM = null !== (iM = rM.value) && void 0 !== iM ? iM : JSON.parse(JSON.stringify(null !== (OM = bP.e[SM]) && void 0 !== OM ? OM : null));
              if (null !== rM.value && rM.key < nO.Qb.Environment && "string" === typeof jM) try {
                jM = JSON.parse(jM)
              } catch (aM) {
                return void console.warn(`${tP} a replay's ${SM} isn't JSON`, aM)
              }
              MM.applyNewClientOptions({
                [SM]: jM
              })
            }(MM.options, rM)
          },
          onReplayUiEvent: RP,
          onReplayOpened: rM => {
            this.entityHooks.opened((0, gM.Mb)(rM)), MM.replayShaderPack(rM)
          },
          meshPending: () => {
            var MM, iM;
            return null !== (MM = null === (iM = rM.lastHeader) || void 0 === iM ? void 0 : iM.renderPending) && void 0 !== MM ? MM : 0
          },
          viewerOpen: YS.b,
          download: MM => {
            (0, ZS.j)(MM)
          }
        });
        this.runtime = mM, OM.replay = mM.sink, (0, NS.v)(mM);
        const HM = new Pj({
          live: () => {
            var MM;
            return !rM.isStopped && !0 === (null === (MM = mM.currentViewer) || void 0 === MM ? void 0 : MM.inPlayback)
          },
          cmd: aM,
          dragScale: dj
        });
        this.freecam = HM, (0, NS.s)(HM), this.recordedOptions = function(MM, rM) {
          const iM = nO.pb,
            OM = iM.map(((iM, OM) => rM.subscribe(iM, (rM => {
              MM.setOption(OM, kP(rM))
            }))));
          return {
            sendAll() {
              iM.forEach(((iM, OM) => {
                MM.setOption(OM, kP(rM.get(iM)))
              }))
            },
            stop() {
              for (const MM of OM) MM()
            }
          }
        }(mM.recorder, MM.options), this.stops = [(0, lO.n)((MM => {
          HM.flush();
          try {
            this.replay.beforeFrame(MM)
          } catch (rM) {
            this.deps.reportFault("replayFrame", rM)
          }
        })), (0, lO.A)(((MM, rM) => {
          try {
            this.recorder.afterFrame(), rM && !this.drawn && (this.drawn = !0, this.recorder.viewDrawn())
          } catch (iM) {
            this.deps.reportFault("recorderFrame", iM)
          }
          try {
            mM.afterFrame(MM)
          } catch (iM) {
            this.deps.reportFault("replayRuntime", iM)
          }
        })), ZP(mM), () => {
          this.recordedOptions.stop()
        }, DP(mM.recorder), (0, jj.f)((MM => {
          let {
            action: rM,
            down: iM
          } = MM;
          var OM;
          iM && (null === (OM = (0, NS.f)()) || void 0 === OM || OM.keyDown(rM))
        }))];
        const hM = () => {
          const MM = mM.currentViewer;
          return !0 === (null === MM || void 0 === MM ? void 0 : MM.isOpen) ? MM : null
        };
        (0, oS.i)({
          open: (MM, rM) => this.open(MM, rM),
          replayKey: () => {
            var MM, rM;
            return null !== (MM = null === (rM = hM()) || void 0 === rM ? void 0 : rM.id) && void 0 !== MM ? MM : null
          },
          saveRefusal: () => {
            var MM, rM;
            return null !== (MM = null === (rM = hM()) || void 0 === rM ? void 0 : rM.saveRefusal) && void 0 !== MM ? MM : null
          },
          encode: () => {
            var MM, rM;
            return null !== (MM = null === (rM = hM()) || void 0 === rM ? void 0 : rM.save()) && void 0 !== MM ? MM : Promise.resolve(null)
          },
          fileHandle: () => {
            var MM, rM;
            return null !== (MM = null === (rM = mM.currentViewer) || void 0 === rM ? void 0 : rM.fileHandle) && void 0 !== MM ? MM : null
          },
          markSaved: (MM, rM) => {
            var iM;
            null === (iM = mM.currentViewer) || void 0 === iM || iM.markSaved(MM, rM)
          }
        })
      }
      netEvent(MM) {
        if ("connection" === MM.type)
          if (MM.phase === mM.F.Activated) {
            this.activeConn = MM.conn;
            const rM = this.deps.sessionInfo(MM.conn);
            null !== rM && (this.runtime.activated({
              lobbyType: (0, uM.w)(rM.lobbyName),
              gameNameWithVariation: rM.gameNameWithVariation,
              lobbyName: rM.lobbyName
            }), this.recordedOptions.sendAll())
          } else MM.phase !== mM.F.Left && MM.phase !== mM.F.Closed || MM.conn !== this.activeConn || (this.activeConn = 0, this.runtime.recorder.closed())
      }
      stop() {
        if (!this.stopped) {
          this.stopped = !0;
          for (const MM of this.stops) MM();
          this.runtime.end(), this.entityHooks.ended(), this.replay.stop(), this.recorder.dispose(), (0, NS.n)() === this.runtime && (0, NS.v)(null), (0, NS.j)() === this.freecam && (0, NS.s)(null), (0, oS.i)(NP), null !== this.bench && window.wasmReplayBench === this.bench && (window.wasmReplayBench = void 0)
        }
      }
      async open(MM, rM) {
        const {
          running: iM
        } = this.deps;
        if (iM.isStopped) throw new Error(fS.c.coreStopped.text);
        if (MM.byteLength > 67108864) throw new Error(fS.c.cantOpen.text);
        let OM;
        try {
          OM = await async function(MM) {
            const rM = await MM.loadViewer();
            return rM.inPlayback || (0, lO.I)().leaveGame(null), rM
          }(this.runtime)
        } catch (SM) {
          throw console.warn(`${pP} the replay viewer didn't load`, SM), new Error(fS.c.viewerLoadFailed.text)
        }
        if (iM.isStopped) throw new Error(fS.c.coreStopped.text);
        await OM.open(MM, rM)
      }
    }
    var FP = iM(2067);

    function BP(MM, rM) {
      const {
        aux: iM,
        payload: OM
      } = function(MM) {
        return {
          aux: MM.reset ? mM.$b.ResetFirst : 0,
          payload: IP(MM.changes)
        }
      }(rM);
      MM.queueOptions(iM, OM) && (rM.reset && FP.d.reset(), FP.d.apply(rM.changes))
    }
    const XP = new TextEncoder;

    function IP(MM) {
      const rM = new KP;
      return TP(rM, MM), rM.bytes()
    }
    class KP {
      constructor() {
        this.buf = new Uint8Array(256), this.view = new DataView(this.buf.buffer), this.len = 0
      }
      room(MM) {
        if (this.len + MM <= this.buf.length) return;
        const rM = new Uint8Array(Math.max(2 * this.buf.length, this.len + MM));
        rM.set(this.buf.subarray(0, this.len)), this.buf = rM, this.view = new DataView(rM.buffer)
      }
      u8(MM) {
        this.room(1), this.buf[this.len++] = MM
      }
      tagged(MM, rM, iM) {
        this.room(1 + rM), this.buf[this.len++] = MM, 1 === rM ? this.view.setUint8(this.len, iM) : 2 === rM ? this.view.setUint16(this.len, iM) : this.view.setUint32(this.len, iM), this.len += rM
      }
      signed(MM, rM, iM) {
        this.room(1 + rM), this.buf[this.len++] = MM, 1 === rM ? this.view.setInt8(this.len, iM) : 2 === rM ? this.view.setInt16(this.len, iM) : this.view.setInt32(this.len, iM), this.len += rM
      }
      f64(MM) {
        this.room(9), this.buf[this.len++] = 203, this.view.setFloat64(this.len, MM), this.len += 8
      }
      raw(MM) {
        this.room(MM.length), this.buf.set(MM, this.len), this.len += MM.length
      }
      bytes() {
        return this.buf.slice(0, this.len)
      }
    }

    function qP(MM, rM, iM, OM, SM, jM, aM) {
      rM < OM ? MM.u8(iM | rM) : null !== SM && rM < 256 ? MM.tagged(SM, 1, rM) : rM < 65536 ? MM.tagged(jM, 2, rM) : MM.tagged(aM, 4, rM)
    }

    function TP(MM, rM) {
      switch (typeof rM) {
        case "undefined":
          return void MM.raw(VP);
        case "boolean":
          return void MM.u8(rM ? 195 : 194);
        case "number":
          return void
          function(MM, rM) {
            rM >>> 0 === rM ? rM < 128 ? MM.u8(rM) : rM < 256 ? MM.tagged(204, 1, rM) : rM < 65536 ? MM.tagged(205, 2, rM) : MM.tagged(206, 4, rM) : (rM | 0) === rM ? rM >= -32 ? MM.u8(255 & rM) : rM >= -128 ? MM.signed(208, 1, rM) : rM >= -32768 ? MM.signed(209, 2, rM) : MM.signed(210, 4, rM) : MM.f64(rM)
          }(MM, rM);
        case "string": {
          const iM = XP.encode(rM);
          return qP(MM, iM.length, 160, 32, 217, 218, 219), void MM.raw(iM)
        }
        case "object":
          break;
        default:
          return void MM.u8(192)
      }
      if (null === rM) MM.u8(192);
      else if (Array.isArray(rM)) {
        qP(MM, rM.length, 144, 16, null, 220, 221);
        for (const iM of rM) TP(MM, iM)
      } else if (rM instanceof Uint8Array) qP(MM, rM.length, 0, 0, 196, 197, 198), MM.raw(rM);
      else {
        const iM = Object.keys(rM);
        qP(MM, iM.length, 128, 0, null, 222, 223);
        for (const OM of iM) TP(MM, OM), TP(MM, rM[OM])
      }
    }
    const VP = new Uint8Array([212, 0, 0]);
    var cP = iM(53661),
      Mn = iM(53668),
      rn = iM(42045),
      On = iM(42090),
      Sn = iM(3188);
    const jn = [1e3, 3e3, 9e3];
    class an {
      constructor(MM) {
        this.host = MM, this.sets = new Map, this.table = [], this.generation = 0, this.dh = !1
      }
      onEvent(MM) {
        const rM = function(MM) {
          if (MM.byteLength !== mM.nd) return null;
          const rM = new DataView(MM.buffer, MM.byteOffset, MM.byteLength);
          return {
            want: rM.getUint16(0, !0),
            release: rM.getUint16(2, !0)
          }
        }(MM);
        rM && !this.dh && (rM.release !== mM.pd && this.release(rM.release), rM.want !== mM.pd && this.want(rM.want))
      }
      reset(MM) {
        if (!this.dh) {
          for (const [MM, rM] of this.sets) "ready" === rM.state && this.releaseAll(rM.distinct), this.sets.delete(MM);
          this.table = MM, this.generation++
        }
      }
      dispose() {
        if (this.dh) return;
        this.dh = !0, this.generation++, this.table = [];
        const MM = [...this.sets.values()];
        this.sets.clear();
        let rM = null;
        for (const OM of MM)
          for (const MM of "ready" === OM.state ? OM.distinct : []) try {
            this.host.SOM(MM)
          } catch (iM) {
            rM ??= {
              error: iM
            }
          }
        if (rM) throw rM.error
      }
      isReady(MM) {
        var rM;
        return "ready" === (null === (rM = this.sets.get(MM)) || void 0 === rM ? void 0 : rM.state)
      }
      want(MM) {
        const rM = this.sets.get(MM);
        if ("loading" === (null === rM || void 0 === rM ? void 0 : rM.state)) return rM.wanted = !0, void this.capAnswer(MM, rM);
        if ("ready" === (null === rM || void 0 === rM ? void 0 : rM.state)) return void this.host.sendReady(nn(MM, rM.images, rM.size));
        const iM = this.table[MM];
        if (!iM || 1 !== iM.urls.length && iM.urls.length !== nO.dc.CubeFaces) return this.host.sendReady(Qn(MM)), void this.host.onLoadFailed(MM, "", new Error(`no image set ${MM}`));
        const OM = {
          state: "loading",
          wanted: !0
        };
        this.sets.set(MM, OM), this.load(MM, iM, OM, this.generation, 0), this.capAnswer(MM, OM)
      }
      capAnswer(MM, rM) {
        this.host.wait(4e3, (() => {
          this.sets.get(MM) === rM && rM.wanted && this.host.sendReady(Qn(MM))
        }))
      }
      load(MM, rM, iM, OM, SM) {
        const jM = [...new Set(rM.urls)];
        Promise.allSettled(jM.map((MM => this.host.loadImage(MM, rM.orientation)))).then((aM => {
          const PM = aM.flatMap((MM => "fulfilled" === MM.status ? [MM.value] : [])),
            nM = OM === this.generation && this.sets.get(MM) === iM,
            QM = aM.findIndex((MM => "rejected" === MM.status));
          if (!nM || !iM.wanted) return this.dh ? void this.releaseAfterDispose(PM.map(Pn)) : (this.releaseAll(PM.map(Pn)), void(nM && this.sets.delete(MM)));
          QM < 0 ? this.loaded(MM, rM, jM, PM) : (this.releaseAll(PM.map(Pn)), this.host.sendReady(Qn(MM)), SM < jn.length ? this.host.wait(jn[SM], (() => {
            OM === this.generation && this.sets.get(MM) === iM && (iM.wanted ? this.load(MM, rM, iM, OM, SM + 1) : this.sets.delete(MM))
          })) : (this.sets.delete(MM), this.host.onLoadFailed(MM, jM[QM], aM[QM].reason)))
        }))
      }
      loaded(MM, rM, iM, OM) {
        const [SM] = OM, jM = [SM.width, SM.height], aM = OM.every((MM => MM.width === jM[0] && MM.height === jM[1])), PM = rM.urls.length === nO.dc.CubeFaces;
        if (!aM || jM[0] <= 0 || jM[1] <= 0 || jM[0] > 65535 || jM[1] > 65535 || PM && jM[0] !== jM[1]) {
          this.releaseAll(OM.map(Pn)), this.sets.delete(MM), this.host.sendReady(Qn(MM));
          const iM = OM.map((MM => `${MM.width}x${MM.height}`));
          return void this.host.onLoadFailed(MM, rM.urls[0], new Error(`set ${MM}'s images can't make its texture: ${iM.join(", ")}`))
        }
        const nM = rM.urls.map((MM => OM[iM.indexOf(MM)].id)),
          QM = OM.map(Pn);
        this.sets.set(MM, {
          state: "ready",
          images: nM,
          distinct: QM,
          size: jM
        }), this.host.sendReady(nn(MM, nM, jM))
      }
      release(MM) {
        const rM = this.sets.get(MM);
        "loading" === (null === rM || void 0 === rM ? void 0 : rM.state) ? rM.wanted = !1: "ready" === (null === rM || void 0 === rM ? void 0 : rM.state) && (this.releaseAll(rM.distinct), this.sets.delete(MM))
      }
      releaseAll(MM) {
        for (const rM of MM) this.host.SOM(rM)
      }
      releaseAfterDispose(MM) {
        for (const rM of MM) try {
          this.host.SOM(rM)
        } catch {}
      }
    }

    function Pn(MM) {
      return MM.id
    }

    function nn(MM, rM, iM) {
      const OM = new Uint8Array(nO.dc.SkyImagesReadyBytes),
        SM = new DataView(OM.buffer);
      return SM.setUint16(0, MM, !0), SM.setUint16(2, rM.length, !0), SM.setUint16(4, iM[0], !0), SM.setUint16(6, iM[1], !0), rM.slice(0, nO.dc.CubeFaces).forEach(((MM, rM) => {
        SM.setUint32(8 + 4 * rM, MM, !0)
      })), OM
    }

    function Qn(MM) {
      const rM = new Uint8Array(nO.dc.SkyImagesReadyBytes),
        iM = new DataView(rM.buffer);
      return iM.setUint16(0, MM, !0), iM.setUint16(2, nO.dc.Failed, !0), rM
    }
    let zn = Promise.resolve();
    async function Ln(MM, rM) {
      let iM;
      try {
        iM = await (0, Sn.F)(MM)
      } catch (jM) {
        throw new rn.d("fetch", MM, {
          cause: jM
        })
      }
      const OM = zn.then((() => async function(MM, rM) {
        const iM = new Blob([MM.slice()]);
        let OM = await createImageBitmap(iM, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: rM
        });
        const SM = 1024 / Math.max(OM.width, OM.height);
        if (SM < 1) {
          const MM = OM;
          try {
            OM = await createImageBitmap(MM, {
              resizeWidth: Math.max(1, Math.round(MM.width * SM)),
              resizeHeight: Math.max(1, Math.round(MM.height * SM)),
              resizeQuality: "high",
              premultiplyAlpha: "none",
              colorSpaceConversion: "none"
            })
          } finally {
            MM.close()
          }
        }
        return OM
      }(iM, rM)));
      let SM;
      zn = OM.catch((() => {}));
      try {
        SM = await OM
      } catch (jM) {
        throw new rn.d("decode", MM, {
          cause: jM
        })
      }
      return {
        id: (0, rn.n)(SM),
        width: SM.width,
        height: SM.height
      }
    }
    var mn = iM(2263),
      Hn = iM(34611),
      hn = iM(40305);
    const Jn = mn.e.length,
      dn = new Set([...mn.e, "earth"]);

    function yn(MM) {
      const rM = [],
        iM = [],
        OM = (MM, OM) => {
          if ("custom" === OM.type) {
            iM.push({
              id: MM,
              kind: nO.dc.KindCustom,
              set: rM.length,
              earth: null
            });
            const SM = [OM.px, OM.py, OM.pz, OM.nx, OM.ny, OM.nz];
            rM.push({
              urls: (0, hn.g)(SM),
              orientation: "none"
            })
          } else iM.push({
            id: MM,
            kind: nO.dc.KindEarth,
            set: 0,
            earth: OM
          })
        };
      mn.e.forEach(((rM, iM) => {
        var SM;
        OM(iM, null !== (SM = En(MM[rM])) && void 0 !== SM ? SM : Hn.j[rM])
      }));
      const SM = En(MM.earth);
      "earth" === (null === SM || void 0 === SM ? void 0 : SM.type) && OM(Jn, SM);
      const jM = new TextEncoder,
        aM = [],
        PM = [];
      for (const [HM, hM] of Object.entries(MM)) {
        const MM = dn.has(HM) ? null : En(hM);
        if (null === MM) continue;
        const rM = jM.encode(HM);
        rM.length > 255 ? PM.push(`Ignoring texture pack skybox ${HM}, whose name is over 255 bytes`) : aM.length === nO.dc.MaxAdded ? PM.push(`Ignoring texture pack skybox ${HM}, past the ${nO.dc.MaxAdded} skies a pack can add`) : (aM.push(rM), OM(nO.dc.AddedId, MM))
      }
      const nM = rM.length;
      rM.push({
        urls: Hn.d.map((MM => Hn.g + MM)),
        orientation: "none"
      }), rM.push({
        urls: [Hn.h],
        orientation: "flipY"
      }), rM.push({
        urls: [Hn.c],
        orientation: "flipY"
      });
      const QM = nO.dc.SkyTableHeaderBytes + iM.length * nO.dc.SkyTableEntryBytes,
        zM = new Uint8Array(QM + aM.reduce(((MM, rM) => MM + 1 + rM.length), 0)),
        LM = new DataView(zM.buffer);
      LM.setUint16(0, nM, !0), LM.setUint16(2, nM + 1, !0), LM.setUint16(4, nM + 2, !0), LM.setUint16(6, iM.length, !0), iM.forEach(((MM, rM) => {
        const iM = nO.dc.SkyTableHeaderBytes + rM * nO.dc.SkyTableEntryBytes;
        LM.setUint16(iM, MM.id, !0), LM.setUint8(iM + 2, MM.kind);
        const OM = iM + 4;
        MM.earth ? function(MM, rM, iM) {
          const OM = MM;
          let SM = 0,
            jM = 0;
          for (const [aM, PM] of Un) {
            const MM = OM[aM];
            "number" === typeof MM && Number.isFinite(MM) && (rM.setFloat32(iM + 4 * PM, MM, !0), SM |= 1 << PM)
          }
          for (const [aM, PM, nM] of Gn) {
            const MM = OM[aM];
            Array.isArray(MM) && 3 === MM.length && MM.every((MM => "number" === typeof MM && Number.isFinite(MM))) && (MM.forEach(((MM, OM) => {
              rM.setFloat32(iM + nM + 4 * OM, MM, !0)
            })), SM |= PM)
          }
          Cn.forEach(((MM, jM) => {
            let [aM, PM] = MM;
            const nM = OM[aM];
            "number" === typeof nM && Number.isFinite(nM) && (rM.setFloat32(iM + nO.t.CameraOffsetAt + 4 * jM, nM, !0), SM |= PM)
          }));
          for (const [aM, PM] of en) {
            const MM = OM[aM];
            null !== MM && void 0 !== MM && (SM |= PM, MM && (jM |= PM >>> 14))
          }
          rM.setUint32(iM + nO.t.PresentAt, SM, !0), rM.setUint8(iM + nO.t.FlagsAt, jM)
        }(MM.earth, LM, OM) : LM.setUint16(OM, MM.set, !0)
      }));
      let mM = QM;
      for (const HM of aM) zM[mM] = HM.length, zM.set(HM, mM + 1), mM += 1 + HM.length;
      return {
        payload: zM,
        sets: rM,
        leftOut: PM
      }
    }

    function En(MM) {
      if ("object" !== typeof MM || null === MM) return null;
      const rM = MM;
      if ("earth" === rM.type) return MM;
      return "custom" === rM.type && ["px", "py", "pz", "nx", "ny", "nz"].every((MM => {
        const iM = rM[MM];
        return "string" === typeof iM && iM.length > 0
      })) ? MM : null
    }
    const Un = [
        ["inclination", nO.t.Inclination],
        ["turbidity", nO.t.Turbidity],
        ["luminance", nO.t.Luminance],
        ["rayleigh", nO.t.Rayleigh],
        ["mieCoefficient", nO.t.MieCoefficient],
        ["mieDirectionalG", nO.t.MieDirectionalG],
        ["distance", nO.t.Distance],
        ["azimuth", nO.t.Azimuth]
      ],
      Gn = [
        ["sunPosition", nO.t.SunPosition, nO.t.SunPositionAt],
        ["up", nO.t.Up, nO.t.UpAt],
        ["vertexTint", nO.t.VertexTint, nO.t.VertexTintAt]
      ],
      Cn = [
        ["xCameraOffset", nO.t.CameraOffsetX],
        ["yCameraOffset", nO.t.CameraOffsetY],
        ["zCameraOffset", nO.t.CameraOffsetZ]
      ],
      en = [
        ["useSunPosition", nO.t.UseSunPosition],
        ["dithering", nO.t.Dithering],
        ["infiniteDistance", nO.t.InfiniteDistance]
      ];

    function bn(MM, rM, iM) {
      const OM = new tn({
        writeCmd: MM,
        warn: rM,
        followPack: wn(iM, rM)
      });
      return OM.start(), OM
    }

    function wn(MM, rM) {
      return iM => {
        let OM = () => {};
        const SM = MM((MM => {
          OM(), OM = () => {}, null !== MM ? OM = MM.subscribe((MM => {
            iM(function(MM, rM, iM) {
              if ("object" !== typeof MM || null === MM) return null;
              const OM = MM.skyBoxes;
              if ("object" !== typeof OM || null === OM) return null;
              if ("player" === rM) return OM;
              return Object.fromEntries(Object.entries(OM).filter((MM => {
                let [rM, OM] = MM;
                return !! function(MM) {
                  if ("object" !== typeof MM || null === MM) return !1;
                  return "earth" === MM.type || Object.entries(MM).every((MM => {
                    let [rM, iM] = MM;
                    return "type" === rM || ("" === (OM = iM) || null !== function(MM) {
                      var rM, iM, OM;
                      return "string" !== typeof MM ? null : null !== (rM = null === (iM = gn.exec(MM)) || void 0 === iM || null === (OM = iM.groups) || void 0 === OM ? void 0 : OM.base64) && void 0 !== rM ? rM : null
                    }(OM));
                    var OM
                  }))
                }(OM) || (iM(`Ignoring texture pack skybox ${rM}, whose faces are not all data URLs`, null), !1)
              })))
            }(MM.pack, null === MM.gameSource ? "player" : "customGame", rM))
          })) : iM(null)
        }));
        return () => {
          SM(), OM()
        }
      }
    }
    class tn {
      constructor(MM) {
        var rM, iM, OM;
        this.host = MM, this.loader = void 0, this.wait = void 0, this.queue = [], this.written = null, this.stopFollowing = () => {}, this.dh = !1, this.wait = null !== (rM = MM.wait) && void 0 !== rM ? rM : (MM, rM) => {
          setTimeout(rM, MM)
        }, this.loader = new an({
          loadImage: null !== (iM = MM.loadImage) && void 0 !== iM ? iM : Ln,
          SOM: null !== (OM = MM.SOM) && void 0 !== OM ? OM : rn.o,
          sendReady: MM => {
            this.queue.push({
              kind: nO.dc.SkyImagesReady,
              payload: MM
            })
          },
          onLoadFailed: (rM, iM, OM) => {
            MM.warn(`sky image set ${rM} (${iM}) didn't load: the last sky stays`, OM)
          },
          wait: this.wait
        })
      }
      start() {
        this.wait(On.d, (() => {
          null === this.written && this.write({})
        })), this.stopFollowing = this.host.followPack((MM => {
          this.write(null !== MM && void 0 !== MM ? MM : {})
        }))
      }
      onEvent(MM) {
        this.loader.onEvent(MM)
      }
      drain() {
        if (0 === this.queue.length) return;
        let MM = 0;
        for (; MM < this.queue.length && this.host.writeCmd(this.queue[MM].kind, 0, this.queue[MM].payload);) MM++;
        MM > 0 && this.queue.splice(0, MM)
      }
      dispose() {
        this.dh = !0, this.stopFollowing(), this.queue = [], this.loader.dispose()
      }
      write(MM) {
        if (this.dh) return;
        const rM = yn(MM);
        if (!(this.written && (iM = this.written, OM = rM, iM.payload.length === OM.payload.length && iM.payload.every(((MM, rM) => MM === OM.payload[rM])) && iM.sets.length === OM.sets.length && iM.sets.every(((MM, rM) => {
            const iM = OM.sets[rM];
            return MM.orientation === iM.orientation && MM.urls.length === iM.urls.length && MM.urls.every(((MM, rM) => MM === iM.urls[rM]))
          }))))) {
          var iM, OM;
          for (const MM of rM.leftOut) this.host.warn(MM, null);
          this.written = rM, this.loader.reset(rM.sets), this.queue = this.queue.filter((MM => MM.kind !== nO.dc.SkyImagesReady)), this.queue.push({
            kind: nO.dc.SkyTable,
            payload: rM.payload
          })
        }
      }
    }
    const gn = /^data:[\w.+/-]*;base64,(?<base64>[A-Za-z0-9+/]*={0,2})$/;
    var un = iM(3096),
      Rn = iM(3349),
      pn = iM(267),
      Wn = iM(166),
      sn = iM(3100),
      Dn = iM(3109),
      kn = iM(236),
      Zn = iM(243),
      fn = iM(3227),
      Yn = iM(3245),
      Nn = iM(3251),
      An = iM(103),
      xn = iM(3317),
      vn = iM(2602),
      Fn = iM(308),
      Bn = iM(41922);
    class Xn {
      constructor() {
        this.id = null, this.sentMs = null, this.roundTripMs = null, this.stopReplies = void 0, this.stopReplies = (0, Sj.h)(DO.M, (MM => {
          this.onReply((0, Oj.d)(DO.M, MM), performance.now())
        }))
      }
      onFrame(MM, rM) {
        null === this.id ? this.id = MM : MM !== this.id && (this.id = MM, this.sentMs = document.hidden ? null : rM)
      }
      onVisibilityChange() {
        this.sentMs = null
      }
      onReply(MM, rM) {
        MM === this.id && null !== this.sentMs && (this.roundTripMs = Math.round(rM - this.sentMs), this.sentMs = null)
      }
      take() {
        const MM = this.roundTripMs;
        return this.roundTripMs = null, MM
      }
      stop() {
        this.stopReplies()
      }
    }
    class In {
      constructor() {
        this.sampled = 0, this.timed = 0, this.frameUs = 0, this.primed = !1, this.windowTimed = 0, this.windowUs = 0
      }
      onFrame(MM, rM, iM, OM) {
        const SM = MM - this.sampled >>> 0,
          jM = rM - this.timed >>> 0,
          aM = iM - this.frameUs >>> 0,
          PM = this.primed;
        return this.sampled = MM, this.timed = rM, this.frameUs = iM, this.primed = !0, !(!PM || SM > 64 || jM > 64) && (OM && aM <= 1e6 * jM && (this.windowTimed += jM, this.windowUs += aM), OM && SM > 0)
      }
      reset() {}
      snapshotAndReset() {
        const MM = this.windowTimed > 0 ? this.windowUs / this.windowTimed / 1e3 : null;
        return this.windowTimed = 0, this.windowUs = 0, {
          passMs: MM,
          submitToDoneMs: null
        }
      }
    }
    const Kn = {
      lagP50Ms: null,
      lagP90Ms: null
    };
    class qn {
      constructor() {
        this.samples = new Float64Array(4096), this.count = 0
      }
      add(MM, rM) {
        const iM = Math.min(4096, this.count + rM);
        this.samples.fill(MM, this.count, iM), this.count = iM
      }
      clear() {
        this.count = 0
      }
      take() {
        const MM = this.count;
        if (this.count = 0, MM < 30) return Kn;
        const rM = this.samples.subarray(0, MM).sort(),
          iM = iM => rM[Math.min(MM - 1, Math.floor(iM * MM))];
        return {
          lagP50Ms: iM(.5),
          lagP90Ms: iM(.9)
        }
      }
    }
    class Tn {
      constructor() {
        this.word = 0, this.lagUs = 0, this.primed = !1, this.lags = new qn
      }
      onFrame(MM, rM) {
        const iM = MM.headerWord(nO.K.Pacing),
          OM = MM.headerWord(nO.K.PacingLagUs),
          SM = (iM >>> nO._.LagsShift) - (this.word >>> nO._.LagsShift) & nO._.CountMask,
          jM = SM > 0 ? (OM - this.lagUs >>> 0) / SM / 1e3 : 0,
          aM = this.primed && SM <= 64 && jM <= 6e4;
        this.word = iM, this.lagUs = OM, this.primed = !0, aM && rM && SM > 0 && 0 !== (iM & nO._.Defaulted) && this.lags.add(jM, SM)
      }
      onJoin() {
        this.lags.clear()
      }
      snapshotAndReset(MM) {
        return MM ? this.lags.take() : (this.lags.clear(), Kn)
      }
    }
    var Vn = iM(3219),
      cn = iM(34962),
      MQ = iM(3230),
      rQ = iM(41984),
      iQ = iM(34959),
      OQ = iM(3118),
      SQ = iM(3235);
    const jQ = {
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

    function aQ(MM) {
      return new PQ(MM)
    }
    class PQ {
      constructor(MM) {
        this.shell = MM, this.tracker = new Dn.e, this.gpu = new In, this.pacing = new Tn, this.timers = [], this.inGameAtLastFlush = !1, this.hasFlushedSinceConnect = !1, this.sendsDropped = 0, this.pendingLightFailures = 0, this.unsentPage = null, this.game = null, this.fpsSpanStartMs = -1, this.fpsFrames = 0, this.fpsOverTime = null, this.firstSpanFps = null, this.initialFps = null, this.ping = new Xn, this.pacedCpuMs = 0, this.sendsStartMs = -1, this.sendsEndMs = -1, this.frameDebug = null, this.mainStall = new Vn.c(this.tracker, ((MM, rM, iM, OM) => {
          this.shell.mainStalled(MM, rM, iM, OM)
        })), this.onVisibility = () => {
          this.tracker.onVisibilityChange(), this.ping.onVisibilityChange(), this.mainStall.reset(), !document.hidden && this.fpsSpanStartMs >= 0 && (this.fpsFrames = 0, this.fpsSpanStartMs = performance.now())
        }, this.onBeforeUnload = () => {
          this.mainStall.unloading()
        }, (0, cn.c)(MM.backend, MM.canvas, MM.adapterVendor), this.tracker.start((() => !MM.inGame()), this.gpu, "wasm"), document.addEventListener("visibilitychange", this.onVisibility), window.addEventListener("beforeunload", this.onBeforeUnload), (0, OQ.c)("wasm", (() => {
          const {
            n: rM,
            sampleCount: iM
          } = (0, rQ.g)();
          return `${MM.backend}, quality steps aim at up to ${SQ.c.target.maxFps} fps, pixel n ${rM}, msaa ${iM}`
        }), (rM => {
          rM.setLoadCounts(MM.readLoadCounts), this.frameDebug = rM
        })), this.timers.push(setInterval((() => {
          this.flush(), this.fpsOverTime = null, this.initialFps = null
        }), 1e4), setInterval((() => {
          this.followGame() && this.shell.canSend() && (this.hasFlushedSinceConnect || (this.flush(), this.hasFlushedSinceConnect = !0))
        }), 250))
      }
      animationFrame(MM) {
        var rM;
        this.mainStall.animationFrame(), this.tracker.onAnimationFrame(MM), null === (rM = this.frameDebug) || void 0 === rM || rM.animationFrame()
      }
      sendsWent(MM, rM, iM) {
        this.ping.onFrame(MM.headerWord(nO.K.PingSent), rM), this.sendsStartMs = rM, this.sendsEndMs = iM
      }
      frameRan(MM, rM, iM, OM) {
        var SM;
        this.ping.onFrame(MM.headerWord(nO.K.PingSent), iM);
        const jM = this.tracker;
        this.pacing.onFrame(MM, jM.isSampling());
        const aM = MM.headerWord(nO.K.TickUs) / 1e3 + (0, lO.K)();
        var PM;
        (jM.kE(aM), null === (SM = this.frameDebug) || void 0 === SM || SM.wasmFrame(MM, rM, iM, OM, jM.isSampling(), aM), null !== this.game) && (null === (PM = this.frameDebug) || void 0 === PM || PM.inGame());
        const nM = this.sendsStartMs >= rM ? this.sendsEndMs - this.sendsStartMs : 0,
          QM = Math.max(0, iM - rM - aM - nM);
        if ("drawn" !== OM) return void("paced" === OM ? (this.pacedCpuMs += QM, this.mainStall.paced()) : "skipped" === OM && this.mainStall.reset());
        this.followGame(), this.mainStall.drawn(rM), jM.onFrameStart(rM);
        this.gpu.onFrame(MM.headerWord(nO.K.GpuSampled), MM.headerWord(nO.K.GpuTimed), MM.headerWord(nO.K.GpuFrameUs), jM.isSampling()) && jM.onGpuSampleStarted(), jM.onFrameCpu(QM + this.pacedCpuMs), this.pacedCpuMs = 0, this.countFpsFrame(rM)
      }
      framePaced() {
        var MM;
        this.mainStall.paced(), null === (MM = this.frameDebug) || void 0 === MM || MM.wasmPeekPaced(this.tracker.isSampling())
      }
      stop() {
        for (const MM of this.timers) clearInterval(MM);
        this.timers.length = 0, document.removeEventListener("visibilitychange", this.onVisibility), window.removeEventListener("beforeunload", this.onBeforeUnload), this.mainStall.stop(), this.ping.stop(), this.tracker.limiterTelemetry.stop()
      }
      followGame() {
        const MM = this.shell.joinedGame();
        if (MM !== this.game) {
          var rM;
          if (this.game = MM, null !== MM) null === (rM = this.frameDebug) || void 0 === rM || rM.joined();
          this.tracker.snapshotAndReset(), this.pacing.onJoin(), this.hasFlushedSinceConnect = !1, this.inGameAtLastFlush = !1, this.fpsSpanStartMs = -1, this.fpsFrames = 0, this.pacedCpuMs = 0, this.firstSpanFps = null, this.fpsOverTime = null, this.initialFps = null, this.mainStall.reset()
        }
        return null !== MM
      }
      countFpsFrame(MM) {
        if (this.fpsSpanStartMs < 0) {
          if (!this.shell.inGame()) return;
          this.fpsSpanStartMs = MM
        }
        this.fpsFrames++;
        const rM = MM - this.fpsSpanStartMs;
        if (!(rM < Nn.b)) {
          if (!document.hidden) {
            const MM = 1e3 * this.fpsFrames / rM;
            this.firstSpanFps ??= MM, this.initialFps = this.firstSpanFps, this.fpsOverTime = MM
          }
          this.fpsFrames = 0, this.fpsSpanStartMs = MM
        }
      }
      flush() {
        const MM = this.followGame(),
          {
            cpuFrameMs: rM,
            refreshHz: iM,
            cpuBottleneck: SM,
            frameIntervalCv: jM,
            ...aM
          } = this.tracker.snapshotAndReset(),
          PM = this.shell.inGame(),
          nM = PM && this.inGameAtLastFlush,
          QM = nM ? aM : (0, sn.h)(aM),
          zM = this.pacing.snapshotAndReset(nM);
        if (this.inGameAtLastFlush = PM, this.pendingLightFailures += this.shell.takeFailedMeshJobs(), !MM || !this.shell.canSend()) return;
        const LM = performance.now(),
          HM = (0, Yn.x)((0, Yn.v)(LM), this.unsentPage),
          JM = function(MM, rM, iM, SM, jM, aM, PM, nM) {
            var QM, zM, LM, mM, HM;
            const hM = {},
              {
                canvas: JM
              } = MM,
              dM = (0, fn.g)({
                refreshHz: rM.refreshHz,
                msaa: MM.msaa(),
                autoMsaaOff: (0, iQ.e)()
              });
            for (const yM of (0, Rn.f)()) {
              const lM = yM.name;
              let EM;
              if ((0, pn.u)(lM)) EM = (0, Yn.d)(lM);
              else if ((0, Yn.j)(lM)) EM = nM[lM];
              else if ((0, fn.j)(lM)) EM = dM[lM];
              else switch (lM) {
                case "fps":
                  EM = SM;
                  break;
                case "aP":
                  EM = jM;
                  break;
                case "LP":
                  EM = (0, MQ.F)((0, rQ.g)().n);
                  break;
                case "mP":
                  EM = Math.max(JM.width, JM.height);
                  break;
                case "HP":
                  EM = Math.min(JM.width, JM.height);
                  break;
                case "hP":
                  EM = navigator.hardwareConcurrency || null;
                  break;
                case "JP":
                  EM = (0, Lj.getWebGpuSupported)();
                  break;
                case "dP":
                  EM = null === MM.fallbackReason ? null : jQ[MM.fallbackReason];
                  break;
                case "yP":
                  EM = rM.cpuFrameMs;
                  break;
                case "lP":
                  EM = rM.refreshHz;
                  break;
                case "EP":
                  EM = rM.cpuBottleneck;
                  break;
                case "UP":
                  EM = rM.frameIntervalCv;
                  break;
                case "GP":
                  EM = rM.frameMs;
                  break;
                case "CP":
                  EM = rM.tickMs;
                  break;
                case "tP":
                  EM = rM.mainBusyShare;
                  break;
                case "gP":
                  EM = rM.mainProbeDelayMs;
                  break;
                case "eP":
                  EM = rM.longAnimationFramesPerMin;
                  break;
                case "bP":
                  EM = rM.longAnimationFrameTimeShare;
                  break;
                case "wP":
                  EM = rM.longAnimationFrameScriptShare;
                  break;
                case "uP":
                  EM = rM.gpuPassMs;
                  break;
                case "RP":
                  EM = rM.gpuSubmitToDoneMs;
                  break;
                case "pP":
                  EM = iM.lagP50Ms;
                  break;
                case "WP":
                  EM = iM.lagP90Ms;
                  break;
                case "FP":
                  EM = (0, un.j)(aM);
                  break;
                case "zP":
                  EM = PM;
                  break;
                case "sP":
                case "DP":
                case "kP":
                case "ZP":
                case "oP":
                case "fP":
                case "YP":
                case "NP":
                case "AP":
                case "xP":
                case "vP":
                case "BP":
                case "XP":
                case "IP":
                case "KP":
                  EM = null;
                  break;
                case "Hn":
                  EM = (0, Lj.getPlatformType)();
                  break;
                case "hn":
                  EM = (0, Lj.getGpuVendor)();
                  break;
                case "Jn":
                  EM = Bn.b[MM.backend];
                  break;
                case "dn":
                  EM = (0, An.c)();
                  break;
                case "yn":
                  EM = (0, Lj.getOperatingSystem)();
                  break;
                case "En":
                  EM = (0, Lj.getTrafficSource)();
                  break;
                case "Un":
                  EM = null !== (QM = OM.d.get("gameEntrySource")) && void 0 !== QM ? QM : Wn.e;
                  break;
                case "Gn":
                  EM = null !== (zM = rM.frameLimiter) && void 0 !== zM ? zM : Wn.e;
                  break;
                case "Cn":
                  EM = (0, kn.j)();
                  break;
                case "bn":
                  EM = null !== (LM = (0, Zn.e)()) && void 0 !== LM ? LM : Wn.e;
                  break;
                case "wn":
                  EM = (0, kn.d)(JM.width, JM.height);
                  break;
                case "tn":
                  EM = (0, Rn.j)(-(new Date).getTimezoneOffset());
                  break;
                case "sn":
                  EM = null !== (mM = MM.fallbackReason) && void 0 !== mM ? mM : Wn.e;
                  break;
                case "Zn":
                  EM = "ready";
                  break;
                case "fn":
                  EM = (0, Lj.getSoftwareRenderer)();
                  break;
                case "un":
                  EM = (0, xn.c)();
                  break;
                case "Rn":
                  EM = (0, vn.d)().replayState;
                  break;
                case "pn":
                  EM = (0, vn.d)().replaySelection;
                  break;
                case "Wn":
                  EM = null !== MM.shaderPackReach() ? "true" : "false";
                  break;
                case "Yn":
                  EM = null !== (HM = MM.shaderPackReach()) && void 0 !== HM && HM.sceneDepth ? "true" : "false";
                  break;
                case "Nn": {
                  const rM = MM.shaderPackReach();
                  EM = null !== rM && void 0 !== rM && rM.sunShadow ? "all" : null !== rM && void 0 !== rM && rM.airShadow ? "air" : "none";
                  break
                }
                case "xn":
                  EM = Fn.A;
                  break;
                case "Tn":
                  EM = (0, Yn.m)();
                  break;
                case "gn": {
                  const rM = MM.DJ();
                  EM = null === rM ? Wn.e : String(rM);
                  break
                }
                case "Dn":
                case "kn":
                  EM = Wn.e;
                  break;
                default:
                  throw new Error(`Unhandled field name: ${lM}`)
              }
              if (void 0 === EM) throw new Error(`Metric ${lM} has no value`);
              hM[lM] = EM
            }
            return hM
          }(this.shell, {
            cpuFrameMs: rM,
            refreshHz: iM,
            cpuBottleneck: SM,
            frameIntervalCv: jM,
            ...QM
          }, zM, this.fpsOverTime, this.initialFps, this.pendingLightFailures, this.ping.take(), HM);
        if (! function(MM, rM, iM) {
            return (0, Oi.e)(), MM(hM.n.Send, rM, iM)
          }(this.shell.writeCmd, mM.ld, function(MM) {
            const rM = (0, fM.f)((0, ai.h)(MM)),
              iM = new Uint8Array(hM.Qd.BYTES + rM.length);
            return new DataView(iM.buffer).setUint16(0, ai.d.AnalyticsUpdate, !0), iM.set(rM, hM.Qd.BYTES), iM
          }(JM))) return this.unsentPage = HM, void(0 === this.sendsDropped++ && console.warn("[wasm-client] an analytics update found the cmd ring full: dropped"));
        this.unsentPage = null, this.pendingLightFailures -= Math.min(this.pendingLightFailures, un.g), (0, Yn.s)(JM, "wasm", LM)
      }
    }
    var nQ = iM(40731);

    function QQ(MM, rM, iM) {
      const OM = new Map;
      return (0, nQ.e)(((MM, iM, OM) => rM.jP(MM, iM, OM)), ((rM, iM, SM) => {
        const jM = `${rM},${iM},${SM}`;
        return OM.has(jM) || OM.set(jM, (0, Xr.e)(MM, rM, iM, SM)), OM.get(jM)
      }), iM)
    }
    var zQ = iM(40739),
      LQ = iM(41975);

    function mQ(MM) {
      const rM = null !== MM && 0 !== (hM.v.playerFlags(MM.api.apiView, 0) & hM.yd.CursorAim);
      rM !== (0, LQ.n)() && (0, LQ.F)(rM, null !== MM)
    }

    function HQ(MM) {
      return (0, sO.d)(DO.D, MM)
    }
    var hQ = iM(42135);
    const JQ = new jM.h((MM => iM(53677)(`./${MM}/${MM}Client`)));
    let dQ = null,
      yQ = null;
    async function lQ(MM) {
      dQ ??= iM.e(32).then((() => iM(40209))).then((MM => {
        yQ = MM.createDefaultClientPlugins
      }), (MM => {
        throw dQ = null, MM
      })), await Promise.all([JQ.load(MM), dQ])
    }

    function EQ(MM) {
      MM.load(new vr(nS, new LS))
    }
    let UQ = !1;
    const GQ = new WeakMap;

    function CQ(MM) {
      try {
        MM()
      } catch (rM) {
        console.error("[bloxd-wasm-client] a session-end step failed", rM)
      }
    }

    function eQ(MM, rM) {
      ! function() {
        var MM, rM;
        jS.Howler.volume();
        const iM = jS.Howler;
        null === (MM = iM._autoResume) || void 0 === MM || MM.call(iM), null === (rM = iM._autoSuspend) || void 0 === rM || rM.call(iM)
      }();
      const iM = new UM(rM.core, rM.memory, rM.audio);
      let jM;
      try {
        jM = new sS(iM, rM.options)
      } catch (mM) {
        return MM.crash(kS.F, mM), null
      }(0, nM.f)(DS(iM, jM));
      const zM = new vP({
        running: MM,
        api: iM,
        core: rM.core,
        memory: rM.memory,
        staleOr: rM.staleOr,
        reportFault: rM.reportReplayFault,
        options: rM.options,
        sessionInfo: rM.sessionInfo,
        replayShaderPack: rM.replayShaderPack
      });
      (0, lO.B)();
      const LM = new cO({
        api: iM,
        tables: jM,
        sessionInfo: rM.sessionInfo,
        gameFactory: MM => JQ.loadedFactory(MM),
        defaultPlugins: (MM, rM, iM, OM) => {
          if (null === yQ) throw new Error("The default plugins started before they loaded");
          return yQ(MM, rM, iM, OM)
        },
        serverOptions: rM.options,
        onNetEvent: MM => {
          zM.netEvent(MM), rM.onNetEvent(MM)
        },
        setLocalOptions: rM => {
          BP(MM, {
            changes: rM,
            reset: !1
          })
        },
        playSound: (MM, iM, OM, SM, jM, aM, PM) => rM.audio.playGame(MM, iM, OM, SM, jM, aM, PM),
        preloadSounds: MM => {
          rM.audio.preload(function(MM) {
            const rM = [];
            for (const iM of MM) {
              const MM = sr(iM);
              if (null !== MM)
                for (let iM = MM[0]; iM < MM[0] + MM[1]; iM++) rM.push(iM)
            }
            return rM
          }(MM))
        },
        onSessionEnd: () => {
          CQ(SM.n), CQ(lS), CQ((() => {
            OM.d.set({
              openInGameMenuName: null
            })
          })), CQ((() => {
            rM.audio.endSession()
          }))
        },
        beforeWrite: rM.beforeWrite,
        beforeOp: rM.beforeOp,
        cameraScreen: yS,
        showCameraFacing: ES,
        onEventOverflow: rM.onEventOverflow,
        screenBandY: PM.k,
        replayEntities: zM.entityHooks,
        hasPackModel: rM.hasPackModel
      });
      return LM.attach(MM), GQ.set(LM, zM), OS(LM.items, rM.audio),
        function(MM) {
          MM.setClientFreeCameraGrant("isDev", !1);
          const rM = rM => {
            MM.setClientFreeCameraGrant("hasDeveloperRank", rM.playerHasRank("developer"))
          };
          (0, aM.j)("userContextUpdated", rM)
        }(LM), UQ || (UQ = !0, (0, aM.j)("appManagerUpdated|openInGameMenuName", (MM => {
          !MM && (0, QM.u)().includes(QM.e) && (0, QM.v)(QM.e)
        }))), LM
    }

    function bQ(MM) {
      try {
        MM.closeGame()
      } finally {
        var rM;
        null === (rM = GQ.get(MM)) || void 0 === rM || rM.stop(), GQ.delete(MM)
      }
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);