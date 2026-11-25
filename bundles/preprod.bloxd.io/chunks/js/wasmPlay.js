export const id = 66;
export const ids = [66, 119, 120, 140];
export const modules = {
  39911: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => wQ,
      h: () => qQ
    });
    const wQ = "The world isn't loaded, so no blocks can be seen.",
      qQ = "The world isn't loaded, so nothing in it can be seen."
  },
  4997: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => gQ
    });
    var wQ = XQ(26),
      qQ = XQ(31),
      TQ = XQ(1335),
      zQ = XQ(3045);
    const sQ = 3e4,
      FQ = 1e3;

    function PQ() {
      return "visible" === document.visibilityState && "inGame" === wQ.b.get("gameState") && (0, TQ.A)()
    }

    function gQ(QQ, WQ) {
      (0, zQ.n)() || function(QQ, WQ, XQ) {
        let wQ = 0;
        const qQ = setInterval((() => {
          WQ() && (wQ += FQ, wQ >= QQ && (clearInterval(qQ), XQ()))
        }), FQ)
      }(sQ, PQ, (() => {
        WQ().then((() => {
          QQ(`saved for the player after ${sQ/1e3} s of play`), (0, zQ.A)(), qQ.k.mB("chat", {
            content: [{
              str: "Saved a debug file to your downloads: please send it to us with a screenshot of the game.",
              style: {
                color: "#ffd84a"
              }
            }]
          })
        }))
      }))
    }
  },
  34364: (QQ, WQ, XQ) => {
    function wQ(QQ, WQ) {
      return 0 === QQ.length ? 0 : QQ[Math.min(QQ.length - 1, Math.floor(WQ * QQ.length))]
    }

    function qQ(QQ) {
      return QQ.toFixed(1)
    }
    XQ.d(WQ, {
      c: () => qQ,
      f: () => wQ
    })
  },
  38221: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => PQ,
      g: () => gQ,
      h: () => GQ,
      i: () => pQ,
      j: () => DQ
    });
    var wQ = XQ(4997),
      qQ = XQ(34364),
      TQ = XQ(3045);
    const zQ = 20,
      sQ = ["totalMs", "slotMs", "workerMs", "applyMs", "ahead", "inFlight", "yJ", "jobMs"];

    function FQ(QQ) {
      return [...QQ].sort(((QQ, WQ) => QQ - WQ))
    }
    const PQ = [];

    function gQ(QQ, WQ, XQ) {
      return `${QQ},${WQ},${XQ}`
    }
    class JQ {
      constructor() {
        this.pending = new Map, this.jobs = new Map, this.edits = [], this.nextEdit = 0, this.reported = 0, this.windowStart = performance.now(), this.frames = 0, this.lastFrameAt = 0, this.maxFrameMs = 0, this.jobsSent = 0, this.maxAhead = 0, this.maxCapacity = 0, this.roundTrips = [], this.windowEdits = [], this.outliers = 0, this.gaveUp = 0
      }
      edit(QQ, WQ) {
        var XQ;
        const wQ = null !== (XQ = this.pending.get(QQ)) && void 0 !== XQ ? XQ : [];
        wQ.push({
          editAt: WQ,
          meshJobId: 0
        }), this.pending.set(QQ, wQ)
      }
      frame(QQ) {
        this.lastFrameAt > 0 && (this.maxFrameMs = Math.max(this.maxFrameMs, QQ - this.lastFrameAt)), this.lastFrameAt = QQ, this.frames++, QQ - this.windowStart >= 1e3 && this.summarise(QQ)
      }
      sent(QQ, WQ, XQ, wQ, qQ, TQ, zQ) {
        this.jobs.set(WQ, {
          sentAt: zQ,
          receivedAt: 0,
          ahead: XQ,
          inFlight: wQ,
          yJ: qQ,
          jobMs: 0
        }), this.jobsSent++, this.maxAhead = Math.max(this.maxAhead, XQ), this.maxCapacity = Math.max(this.maxCapacity, qQ);
        for (const FQ of null !== (sQ = this.pending.get(QQ)) && void 0 !== sQ ? sQ : []) {
          var sQ;
          TQ.includes(FQ.meshJobId) || (FQ.meshJobId = WQ)
        }
      }
      received(QQ, WQ, XQ) {
        const wQ = this.jobs.get(QQ);
        void 0 !== wQ && (this.roundTrips.push(XQ - wQ.sentAt), wQ.receivedAt = XQ, wQ.jobMs = WQ)
      }
      failed(QQ) {
        this.jobs.delete(QQ)
      }
      reassign(QQ, WQ, XQ) {
        this.jobs.delete(WQ);
        for (const qQ of null !== (wQ = this.pending.get(QQ)) && void 0 !== wQ ? wQ : []) {
          var wQ;
          qQ.meshJobId === WQ && (qQ.meshJobId = XQ)
        }
      }
      applied(QQ, WQ, XQ) {
        const wQ = this.jobs.get(WQ);
        this.jobs.delete(WQ), void 0 !== wQ && this.show(QQ, wQ, XQ, (QQ => QQ.meshJobId === WQ))
      }
      emptied(QQ, WQ) {
        const XQ = {
          sentAt: WQ,
          receivedAt: WQ,
          ahead: 0,
          inFlight: 0,
          yJ: 0,
          jobMs: 0
        };
        this.show(QQ, XQ, WQ, (() => !0))
      }
      show(QQ, WQ, XQ, wQ) {
        const qQ = this.pending.get(QQ);
        if (!qQ) return;
        const TQ = qQ.filter((qQ => !wQ(qQ) || (this.record(QQ, qQ.editAt, WQ, XQ), !1)));
        TQ.length > 0 ? this.pending.set(QQ, TQ) : this.pending.delete(QQ)
      }
      nI(QQ) {
        this.reported += QQ, this === IQ && this.reported >= zQ && null !== jQ && (jQ(), jQ = null)
      }
      record(QQ, WQ, XQ, wQ) {
        const qQ = {
          totalMs: wQ - WQ,
          slotMs: XQ.sentAt - WQ,
          workerMs: XQ.receivedAt - XQ.sentAt,
          applyMs: wQ - XQ.receivedAt,
          ahead: XQ.ahead,
          inFlight: XQ.inFlight,
          yJ: XQ.yJ,
          jobMs: XQ.jobMs
        };
        if (this.edits[this.nextEdit] = qQ, this.nextEdit = (this.nextEdit + 1) % 500, this.windowEdits.push(qQ.totalMs), this.nI(1), qQ.totalMs < 100 || ++this.outliers > 5) return;
        const zQ = QQ => Math.round(QQ);
        (0, TQ.j)("remesh", `slow edit (${QQ}) shown in ${zQ(qQ.totalMs)} ms: slot ${zQ(qQ.slotMs)}, worker ${zQ(qQ.workerMs)} (${qQ.ahead} ahead, ${qQ.inFlight}/${qQ.yJ} in flight; job ${zQ(qQ.jobMs)}), apply ${zQ(qQ.applyMs)}`)
      }
      summarise(QQ) {
        const WQ = (QQ - this.windowStart) / 1e3;
        for (const [XQ, wQ] of this.pending) {
          const WQ = wQ.filter((WQ => QQ - WQ.editAt <= 1e4));
          this.gaveUp += wQ.length - WQ.length, this.nI(wQ.length - WQ.length), WQ.length > 0 ? this.pending.set(XQ, WQ) : this.pending.delete(XQ)
        }
        for (const [XQ, wQ] of this.jobs) QQ - wQ.sentAt > (wQ.receivedAt > 0 ? 1e4 : 6e4) && this.jobs.delete(XQ);
        if (this.jobsSent > 0 || this.roundTrips.length > 0 || this.windowEdits.length > 0 || this.gaveUp > 0) {
          const QQ = FQ(this.roundTrips),
            XQ = FQ(this.windowEdits),
            wQ = Math.max(0, this.outliers - 5);
          (0, TQ.j)("remesh", `${Math.round(this.frames/WQ)} fps (longest ${Math.round(this.maxFrameMs)} ms) | ${this.jobsSent} jobs sent, up to ${this.maxAhead} ahead on a worker, capacity ${this.maxCapacity} | round trip p50 ${Math.round((0,qQ.f)(QQ,.5))} max ${Math.round((0,qQ.f)(QQ,1))} ms | ${XQ.length} edits shown, p50 ${Math.round((0,qQ.f)(XQ,.5))} max ${Math.round((0,qQ.f)(XQ,1))} ms${wQ>0?`, ${wQ} more slow`:""}${this.gaveUp>0?`, ${this.gaveUp} never shown`:""}`)
        }
        this.windowStart = QQ, this.frames = 0, this.maxFrameMs = 0, this.jobsSent = 0, this.maxAhead = 0, this.maxCapacity = 0, this.roundTrips = [], this.windowEdits = [], this.outliers = 0, this.gaveUp = 0
      }
      stats() {
        const QQ = sQ.map((QQ => {
          const WQ = FQ(this.edits.map((WQ => WQ[QQ])));
          return `${QQ}: p50 ${Math.round((0,qQ.f)(WQ,.5))} p90 ${Math.round((0,qQ.f)(WQ,.9))} max ${Math.round((0,qQ.f)(WQ,1))}`
        }));
        return [`${this.edits.length} edits`, ...QQ].join("\n")
      }
      dump() {
        const QQ = this.edits.map((QQ => sQ.map((WQ => Math.round(10 * QQ[WQ]) / 10)).join(",")));
        return [this.stats(), sQ.join(","), ...QQ].join("\n")
      }
    }
    class rQ {
      constructor(QQ, WQ) {
        this.log = QQ, this.KJ = WQ
      }
      edit(QQ, WQ, XQ) {
        const [wQ, qQ, TQ] = this.KJ.nJ.IwQ(QQ, WQ, XQ), zQ = this.KJ.nJ.PB.gB(wQ, qQ, TQ);
        zQ && zQ.sB && this.log.edit(gQ(wQ, qQ, TQ), performance.now())
      }
      sent(QQ, WQ, XQ, wQ, qQ) {
        this.log.sent(gQ(QQ.i, QQ.j, QQ.k), WQ, XQ, wQ, qQ, PQ, performance.now())
      }
      received(QQ) {
        this.log.received(QQ.meshJobId, QQ.jobMs, performance.now())
      }
      failed(QQ) {
        this.log.failed(QQ)
      }
      applied(QQ, WQ) {
        this.log.applied(gQ(QQ.i, QQ.j, QQ.k), WQ, performance.now())
      }
    }
    let IQ = null,
      jQ = null,
      BQ = !1,
      yQ = null;

    function VQ() {
      return new Promise((QQ => {
        null !== IQ && IQ.reported >= zQ ? QQ() : jQ = QQ
      }))
    }

    function DQ() {
      const QQ = new JQ;
      return IQ = QQ, (0, TQ.h)("remesh", (() => QQ.dump())), (0, TQ.e)("remeshStats", (() => {
        console.log(QQ.stats())
      })), BQ || (BQ = !0, (0, wQ.c)((QQ => {
        (0, TQ.j)("remesh", QQ)
      }), VQ)), QQ
    }

    function pQ(QQ) {
      const WQ = DQ();
      yQ = new rQ(WQ, QQ), QQ.RD.meshProbe = yQ, QQ.on("beforeRender", (() => {
        WQ.frame(performance.now())
      }))
    }

    function GQ(QQ, WQ, XQ) {
      var wQ;
      null === (wQ = yQ) || void 0 === wQ || wQ.edit(QQ, WQ, XQ)
    }
  },
  34399: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => wQ
    });
    const wQ = new Set(["chunkBorders"])
  },
  34548: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => zQ,
      c: () => qQ,
      f: () => gQ
    });
    var wQ = XQ(1626);

    function qQ(QQ) {
      var WQ;
      return {
        ...zQ.store,
        yaw: zQ.store.yaw + (null !== (WQ = wQ.c[QQ].previewYaw) && void 0 !== WQ ? WQ : 0)
      }
    }
    const TQ = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      zQ = {
        player: TQ,
        store: {
          ...TQ,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function sQ(QQ, WQ) {
      QQ instanceof Promise ? QQ.then(WQ).catch((QQ => {
        console.error("Couldn't open the preview", QQ)
      })) : WQ(QQ)
    }
    class FQ {
      constructor(QQ) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, sQ(QQ, (QQ => {
          this.closed ? QQ.close() : (this.opened = QQ, null !== this.size && QQ.resize(this.size.width, this.size.height), null !== this.view && QQ.show(this.view))
        }))
      }
      show(QQ) {
        var WQ;
        this.view = QQ, null === (WQ = this.opened) || void 0 === WQ || WQ.show(QQ)
      }
      resize(QQ, WQ) {
        var XQ;
        this.size = {
          width: QQ,
          height: WQ
        }, null === (XQ = this.opened) || void 0 === XQ || XQ.resize(QQ, WQ)
      }
      close() {
        var QQ;
        this.closed = !0, null === (QQ = this.opened) || void 0 === QQ || QQ.close(), this.opened = null
      }
    }
    class PQ {
      constructor(QQ) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(QQ).then((QQ => QQ.ready)), sQ(QQ, (QQ => {
          this.closed ? QQ.close() : (this.opened = QQ, null !== this.size && QQ.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var QQ, WQ;
        return null !== (QQ = null === (WQ = this.opened) || void 0 === WQ ? void 0 : WQ.isReady()) && void 0 !== QQ && QQ
      }
      setCosmetic(QQ, WQ) {
        var XQ;
        null === (XQ = this.opened) || void 0 === XQ || XQ.setCosmetic(QQ, WQ)
      }
      playEmote(QQ) {
        var WQ;
        null === (WQ = this.opened) || void 0 === WQ || WQ.playEmote(QQ)
      }
      setOrbit(QQ) {
        var WQ;
        null === (WQ = this.opened) || void 0 === WQ || WQ.setOrbit(QQ)
      }
      resetCamera() {
        var QQ;
        null === (QQ = this.opened) || void 0 === QQ || QQ.resetCamera()
      }
      async untilDrawn(QQ) {
        var WQ;
        await this.ready, await (null === (WQ = this.opened) || void 0 === WQ ? void 0 : WQ.untilDrawn(QQ))
      }
      resize(QQ, WQ) {
        var XQ;
        this.size = {
          width: QQ,
          height: WQ
        }, null === (XQ = this.opened) || void 0 === XQ || XQ.resize(QQ, WQ)
      }
      close() {
        var QQ;
        this.closed = !0, null === (QQ = this.opened) || void 0 === QQ || QQ.close(), this.opened = null
      }
    }
    const gQ = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(QQ) {
        this.host = QQ
      }
      setDefaultHost(QQ) {
        this.makeDefault = QQ
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(QQ) {
        return new FQ(this.current().openMob(QQ))
      }
      openPet(QQ) {
        return new FQ(this.current().openPet(QQ))
      }
      openMobLineup(QQ) {
        return new FQ(this.current().openMobLineup(QQ))
      }
      openCharacter(QQ, WQ) {
        return new PQ(this.current().openCharacter(QQ, WQ))
      }
    }
  },
  5394: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => wQ.i,
      c: () => qQ,
      g: () => wQ.n
    });
    var wQ = XQ(5396);
    const qQ = [!1, !0].flatMap((QQ => ["terrain", "liquid", "model"].map((WQ => ({
      strict: QQ,
      program: WQ
    })))))
  },
  39494: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      ShaderPackPage: () => FQ,
      harnessShaderPackMode: () => rQ,
      setHarnessUrlShaderPack: () => JQ,
      shaderPackPage: () => gQ
    });
    var wQ = XQ(105),
      qQ = XQ(43),
      TQ = (XQ(3723), XQ(5394), XQ(3716)),
      zQ = XQ(7026);
    XQ(7002);
    const sQ = {
      status: "none"
    };
    class FQ {
      constructor() {
        this.stored = null, this.compiling = null, this.pagePack = null, this.resolved = null
      }
      preload() {
        if (null === this.stored) {
          if ((0, TQ.j)(wQ.featureFlags.settings.canUseShaderPacks)) return this.stored = Promise.resolve(null), PQ().then((QQ => {
            QQ && qQ.i.removeItem(TQ.c)
          })), this.stored;
          this.prefetchHint() && this.compiler().catch((() => {})), this.stored = this.readStored()
        }
        return this.stored
      }
      prefetchHint() {
        return (0, TQ.f)(wQ.featureFlags.settings.canUseShaderPacks)
      }
      async loadActive() {
        const QQ = await this.load();
        return "active" === QQ.status ? QQ.pack : null
      }
      load() {
        return this.pagePack ??= this.read().catch((QQ => (console.error("Failed to load the shader pack", QQ), sQ))).then((QQ => (this.resolved ??= QQ, QQ))), this.pagePack
      }
      hasNone() {
        var QQ;
        return "none" === (null === (QQ = this.resolved) || void 0 === QQ ? void 0 : QQ.status)
      }
      block(QQ) {
        this.resolved = {
          status: "blocked",
          messageKey: QQ,
          variants: null
        }, this.pagePack = Promise.resolve(this.resolved)
      }
      compiler() {
        return this.compiling ??= Promise.all([XQ.e(80), XQ.e(138), XQ.e(144)]).then((() => XQ(41988))).then((QQ => (QQ.prefetchCompiler(), QQ))), this.compiling
      }
      async readStored() {
        const QQ = await PQ();
        return QQ && this.compiler().then((QQ => QQ.reconcileHint())).catch((QQ => {
          console.error("Failed to correct the shader pack hint", QQ)
        })), QQ
      }
      async read() {
        const QQ = await this.preload();
        return QQ ? (await this.compiler()).compilePagePack(QQ) : sQ
      }
    }
    async function PQ() {
      if (!(0, TQ.n)(wQ.featureFlags.settings.canUseShaderPacks)) return null;
      try {
        const QQ = await (0, zQ.f)(!0);
        return QQ || qQ.i.setItem(TQ.c, !1), QQ
      } catch (QQ) {
        return console.error("Failed to read the stored shader pack", QQ), qQ.i.removeItem(TQ.c), null
      }
    }
    const gQ = new FQ;

    function JQ(QQ, WQ) {}

    function rQ() {
      return null
    }
  },
  39551: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => JQ,
      h: () => rQ
    });
    var wQ = XQ(193),
      qQ = XQ(221),
      TQ = XQ(1542),
      zQ = XQ(3176),
      sQ = XQ(1548),
      FQ = XQ(36775),
      PQ = XQ(698),
      gQ = XQ(39494);

    function JQ(QQ) {
      (0, zQ.reportClientError)("matchmake_failed", QQ, wQ.h[wQ.h.SHADER_PACK])
    }
    async function rQ(QQ, WQ) {
      var XQ;
      const wQ = null === (XQ = await gQ.shaderPackPage.preload()) || void 0 === XQ ? void 0 : XQ.listing,
        zQ = (0, FQ.e)();
      wQ && null !== zQ && await sQ.e.reportShaderPackSession(QQ, {
        packId: wQ.packId,
        sourceHash: wQ.sourceHash,
        game: (0, TQ.g)(WQ, qQ.x, "other"),
        playSessionId: zQ,
        visitSessionId: (0, PQ.d)()
      })
    }
  },
  7026: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => qQ,
      f: () => TQ
    });
    var wQ = XQ(43);
    const qQ = "shaderPack";
    async function TQ() {
      var QQ;
      let WQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (QQ = await wQ.f.getItem(qQ, WQ)) && void 0 !== QQ ? QQ : null
    }
  },
  7002: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      loadShaderPackTextures: () => zQ,
      shaderPackTextures: () => sQ
    });
    var wQ = XQ(5396);
    let qQ = null,
      TQ = null;

    function zQ() {
      return TQ ??= Promise.all([XQ.e(75), XQ.e(192)]).then((() => XQ(40738))).then((QQ => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: WQ,
          textureNameToIndex: XQ,
          textureAnimationData: TQ
        } = QQ;
        return qQ ??= (0, wQ.l)(XQ, TQ, WQ), qQ
      })), TQ
    }

    function sQ() {
      if (null === qQ) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return qQ
    }
  },
  34455: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => TQ
    });
    var wQ = XQ(1109);

    function qQ() {
      var QQ, WQ;
      return null !== (QQ = null === (WQ = screen.orientation) || void 0 === WQ ? void 0 : WQ.type) && void 0 !== QQ ? QQ : innerWidth > innerHeight ? "landscape" : "portrait"
    }
    const TQ = new class {
      constructor() {
        this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
          document.hidden || (document.removeEventListener("visibilitychange", this.releaseWhenShown), this.release())
        }
      }
      isHeld() {
        return this.holding && qQ() !== this.heldOrientation && (this.holding = !1), this.holding
      }
      hold() {
        this.heldOrientation = qQ(), this.holding = !0, clearTimeout(this.releaseTimer), document.removeEventListener("visibilitychange", this.releaseWhenShown), clearTimeout(this.longHoldTimer), this.longHoldTimer = setTimeout((() => {
          this.holding && (0, wQ.jB)(new Error("Game view size held for 60 s"))
        }), 6e4)
      }
      release() {
        clearTimeout(this.longHoldTimer), this.releaseTimer = setTimeout((() => {
          if (document.hidden) document.addEventListener("visibilitychange", this.releaseWhenShown);
          else {
            this.holding = !1;
            for (const QQ of this.resizers) QQ()
          }
        }), 1e3)
      }
      heldSizer(QQ) {
        let WQ = !1;
        return () => {
          if (WQ && this.isHeld()) return null;
          const XQ = QQ();
          return WQ ||= null !== XQ, XQ
        }
      }
      onRelease(QQ) {
        return this.resizers.add(QQ), () => {
          this.resizers.delete(QQ)
        }
      }
    }
  },
  39533: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => qQ
    });
    let wQ = !1;
    async function qQ(QQ, WQ) {
      if (!wQ) {
        wQ = !0;
        try {
          const [{
            reloadBloxd: wQ
          }, {
            NotificationProvider: qQ
          }] = await Promise.all([Promise.resolve().then((() => XQ(1802))), Promise.resolve().then((() => XQ(1404)))]);
          if (!QQ || !0 === await qQ.showPromptPopup({
              title: "Unsaved changes",
              subtitle: "Exit and lose your unsaved changes?",
              confirmText: "Exit",
              destructive: !0,
              cancelText: "Cancel",
              unlockPointerKey: "replayExitUnsavedChanges"
            }).getResult()) return void wQ(WQ)
        } catch (qQ) {
          console.error("Leaving the replay failed", qQ)
        }
        wQ = !1
      }
    }
  },
  41184: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => sQ,
      g: () => FQ
    });
    var wQ = XQ(1812);
    const qQ = 33177600,
      TQ = 3e4;
    let zQ = !1;

    function sQ(QQ, WQ, XQ) {
      let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const {
        scale: sQ = 1,
        type: FQ = "image/png",
        quality: PQ
      } = wQ;
      return QQ.pj() ? zQ ? Promise.reject(new Error("A screenshot is already being taken")) : (zQ = !0, new Promise(((wQ, gQ) => {
        let JQ, rQ = 2,
          IQ = null;
        const jQ = () => {
          var WQ;
          zQ = !1, null === (WQ = IQ) || void 0 === WQ || WQ(), clearTimeout(JQ);
          try {
            QQ.restoreSize()
          } catch (XQ) {
            console.error("A screenshot couldn't size the canvas back", XQ)
          }
        };
        JQ = setTimeout((() => {
          jQ(), gQ(new Error("No frame was drawn to capture"))
        }), TQ);
        try {
          const wQ = function(QQ, WQ, XQ) {
            const wQ = Math.max(1, QQ),
              TQ = Math.max(1, WQ),
              zQ = Math.min(1, XQ / Math.max(wQ, TQ), Math.sqrt(qQ / (wQ * TQ)));
            return {
              width: Math.max(1, Math.floor(wQ * zQ)),
              height: Math.max(1, Math.floor(TQ * zQ))
            }
          }(WQ, XQ, QQ.maxTextureSize);
          QQ.resize(wQ.width, wQ.height, sQ * wQ.width / Math.max(1, WQ))
        } catch (BQ) {
          return jQ(), void gQ(BQ)
        }
        IQ = QQ.onFrameDrawn((() => {
          if (rQ--, rQ > 0) return;
          const {
            canvas: WQ
          } = QQ, XQ = {
            width: WQ.width,
            height: WQ.height
          };
          try {
            WQ.toBlob((QQ => {
              QQ ? wQ({
                blob: QQ,
                ...XQ
              }) : gQ(new Error("The canvas gave no image"))
            }), FQ, PQ)
          } catch (BQ) {
            gQ(BQ)
          } finally {
            jQ()
          }
        }))
      }))) : Promise.reject(new Error("Screenshots need a game to be running"))
    }
    async function FQ(QQ, WQ, XQ) {
      try {
        const qQ = await sQ(QQ, WQ, XQ);
        (0, wQ.e)(qQ.blob, `bloxd-screenshot-${qQ.width}x${qQ.height}-${Date.now()}.png`)
      } catch (qQ) {
        console.error("Error taking screenshot:", qQ)
      }
    }
  },
  37959: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => wQ
    });
    const wQ = {
      noaReady: null,
      chunkRequested: null,
      beforeServerListeners: null,
      wasmNetReady: null
    }
  },
  39440: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => zQ
    });
    var wQ = XQ(382),
      qQ = XQ(158),
      TQ = XQ(43);

    function zQ() {
      TQ.i.setItem(wQ.Pb, TQ.i.getItem(wQ.Pb) + 1), (0, qQ.is99NightsCrazyGamesBundle)() && TQ.i.setItem(wQ.Nb, TQ.i.getItem(wQ.Nb) + 1)
    }
  },
  40883: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => sQ
    });
    var wQ = XQ(39911);

    function qQ(QQ) {
      return {
        current: () => QQ,
        watch: () => () => {}
      }
    }

    function TQ() {}
    const zQ = Object.freeze([0, 0, 0]),
      sQ = {
        states: {
          health: qQ({
            health: null,
            maxHealth: null,
            shield: null,
            maxShield: null
          }),
          inventory: qQ({
            player: [],
            chestOrCreative: [],
            chest: null,
            creative: !1,
            selectedSlot: 0,
            freeSlots: 0
          }),
          hotbar: qQ({
            items: [],
            ammo: 0,
            selectedSlot: null
          }),
          stationItems: qQ({
            enchantable: {},
            salvageable: {}
          }),
          itemInfo: qQ({}),
          creativeVisibility: qQ({
            publicLobby: !1,
            shownInGame: {}
          }),
          aura: qQ(null),
          heldItemAim: qQ({
            gun: !1,
            aimable: !1,
            chargeName: null
          }),
          crouching: qQ(!1),
          gliderBoostFuel: qQ(0),
          flight: qQ({
            canFly: !1,
            flying: !1
          }),
          crafting: qQ({
            focus: null,
            recipes: [],
            detail: null
          }),
          players: qQ({
            ids: [],
            byId: {},
            localId: null
          }),
          lobbyLeaderboardRows: qQ({}),
          fullInventory: qQ(!1),
          crosshairTarget: qQ({
            interactPrompt: null,
            blockText: null,
            neededTool: null
          }),
          localPlayerAlive: qQ(!0),
          freeCamera: qQ({
            allowed: !1,
            movesFly: !1
          }),
          replay: qQ(null),
          replayEdits: qQ(null),
          replayRecorder: qQ({
            recording: !1,
            clipping: !1,
            hasClipBuffer: !1,
            seconds: 0
          }),
          replayVideoExporting: qQ(!1)
        },
        events: {
          hotbarSlotRequested: {
            watch: () => () => {}
          },
          hotbarScrolled: {
            watch: () => () => {}
          },
          hotbarDropRequested: {
            watch: () => () => {}
          },
          inventoryDropRequested: {
            watch: () => () => {}
          },
          numberKeyPressed: {
            watch: () => () => {}
          },
          chestToggled: {
            watch: () => () => {}
          },
          chestRefreshed: {
            watch: () => () => {}
          },
          inventorySynced: {
            watch: () => () => {}
          },
          enchantingTableOpened: {
            watch: () => () => {}
          },
          cosmeticsUpdated: {
            watch: () => () => {}
          },
          shotDamageToShow: {
            watch: () => () => {}
          },
          boardEditRequested: {
            watch: () => () => {}
          },
          kill: {
            watch: () => () => {}
          },
          chatReceived: {
            watch: () => () => {}
          },
          ironChestOpenRequested: {
            watch: () => () => {}
          },
          localEffectUpdated: {
            watch: () => () => {}
          },
          localPlayerAliveSet: {
            watch: () => () => {}
          },
          replayUiActionRequested: {
            watch: () => () => {}
          },
          replayViewerRequested: {
            watch: () => () => {}
          }
        },
        commands: {
          selectHotbarSlot: TQ,
          removeInventoryItem: () => !1,
          swapInventorySlots: () => !1,
          moveInventoryItem: () => !1,
          quickMoveInventoryItem: () => null,
          closeChest: TQ,
          setInventoryOpen: TQ,
          changeIronChestPasskey: TQ,
          dragReplayCamera: TQ,
          applyTemporaryThirdPerson: TQ,
          holdEmoteWheel: TQ,
          recordFlyingMiddleText: TQ,
          focusCrafting: TQ,
          craftRecipe: () => ({
            bg: 0,
            QF: null,
            amountAddedToSlot: 0
          }),
          salvageItem: () => !1,
          enchantItem: TQ,
          setShopOpen: TQ,
          buyShopItem: TQ,
          lobbyManage: TQ,
          sendChatMessage: TQ,
          ignorePlayer: TQ,
          reportPlayer: TQ,
          reportWorldCodeChat: TQ,
          requestDiscordReportKey: TQ,
          reportLobbyOrGame: TQ,
          playEmote: TQ,
          updateMyCosmetic: TQ,
          writeOnBoard: TQ,
          writeBook: TQ,
          writeNameTag: TQ,
          setCustomLobbyBlock: TQ,
          openIronChest: TQ,
          sendCodeCollab: TQ,
          clickCodeBlock: TQ,
          bindCustomButtonKeys: TQ,
          pressCustomButton: TQ,
          moveReplayFreecam: TQ,
          holdReplayFreecamVertical: TQ,
          respawn: TQ,
          wakeUp: TQ,
          requestLeaderboard: TQ,
          completeTask: TQ,
          setServerCookie: TQ,
          answerUiRequest: TQ,
          chooseRewardedAd: TQ,
          setCameraZoom: TQ,
          setFreeCameraMovesFly: TQ,
          setBlockHighlight: TQ,
          setCrosshairInteractPrompt: TQ,
          setLookSensitivity: TQ,
          replayAction: TQ,
          setReplayPlaying: TQ,
          seekReplay: TQ,
          setReplayCameraMode: TQ,
          syncReplayCameraMode: TQ,
          setReplayCameraKeyframe: TQ,
          moveReplayCameraKeyframe: TQ,
          deleteReplayCameraKeyframes: TQ,
          setReplayPlaybackMark: TQ,
          cropReplay: () => !1,
          holdReplayForShaderPackFailure: TQ,
          exportReplayVideo: TQ,
          toggleRecording: TQ,
          saveClip: TQ,
          setRecorderPrefs: TQ,
          setReplayViewerOpen: TQ
        },
        queries: {
          enchantingOffer: () => ({
            perks: [],
            options: []
          }),
          worldCodeAiChunk: () => wQ.d,
          worldCodeAiGameState: () => wQ.h
        },
        lookups: {
          localPos: () => zQ,
          targetedBlockPos: () => null,
          blockAtViewPoint: () => null,
          momentumFrac: () => 0,
          screenPos: () => ({
            x: 0,
            y: 0
          }),
          cameraZoom: () => 0,
          freeCameraPos: () => null,
          blocksStandingOn: () => [],
          dropAhead: () => !1,
          replayCamera: () => null,
          leaveGameReloadsPage: () => !1,
          codeBlockClickable: () => !1
        }
      }
  },
  41178: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => zQ,
      g: () => TQ
    });
    var wQ = XQ(2226),
      qQ = XQ(1049);

    function TQ(QQ, WQ) {
      return null !== QQ.gameSource && (0, wQ.h)(WQ, QQ.gameSource)
    }

    function zQ(QQ, WQ) {
      if (null === QQ.gameSource || "" === QQ.gameSource || null === WQ) return !0;
      const XQ = (0, qQ.k)(WQ) ? (0, qQ.n)(WQ) : null;
      return null !== XQ && TQ(QQ, XQ)
    }
  },
  41157: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => sQ
    });
    var wQ = XQ(651),
      qQ = XQ(41164),
      TQ = XQ(41022);
    async function zQ(QQ) {
      const WQ = await (0, qQ.i)({
        Helmet: XQ(38238),
        Chestplate: XQ(38247),
        Gauntlets: XQ(38264),
        Leggings: XQ(38255),
        Boots: XQ(38262)
      } [wQ.b[QQ]]);
      try {
        return (0, TQ.n)(WQ)
      } finally {
        WQ.close()
      }
    }
    const sQ = new class {
      constructor() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : zQ,
          WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : qQ.l;
        this.decode = QQ, this.register = WQ, this.decoded = new Map
      }
      warm() {
        for (let QQ = 0; QQ < wQ.b.length; QQ++) this.part(QQ).catch((WQ => {
          console.warn(`The grayscale armour ${wQ.b[QQ]} image didn't decode ahead of use`, WQ)
        }))
      }
      async load(QQ, WQ) {
        const {
          width: XQ,
          height: TQ,
          pixels: zQ
        } = await this.part(QQ), sQ = new ImageData(function(QQ, WQ) {
          const XQ = new Uint8ClampedArray(QQ.length);
          for (let wQ = 0; wQ < QQ.length; wQ += 4) XQ[wQ] = Math.round(QQ[wQ] * WQ[0] / 255), XQ[wQ + 1] = Math.round(QQ[wQ + 1] * WQ[1] / 255), XQ[wQ + 2] = Math.round(QQ[wQ + 2] * WQ[2] / 255), XQ[wQ + 3] = QQ[wQ + 3];
          return XQ
        }(zQ, function(QQ) {
          return [QQ >>> 16 & 255, QQ >>> 8 & 255, 255 & QQ]
        }(WQ)), XQ, TQ);
        let FQ;
        try {
          FQ = await createImageBitmap(sQ, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none"
          })
        } catch (PQ) {
          throw new qQ.e("decode", `grayscale armour ${wQ.b[QQ]}`, {
            cause: PQ
          })
        }
        return {
          id: this.register(FQ),
          width: XQ,
          height: TQ
        }
      }
      part(QQ) {
        const WQ = this.decoded.get(QQ);
        if (void 0 !== WQ) return WQ;
        const XQ = this.decode(QQ).catch((WQ => {
          throw this.decoded.delete(QQ), WQ instanceof qQ.e ? WQ : new qQ.e("decode", `grayscale armour ${wQ.b[QQ]}`, {
            cause: WQ
          })
        }));
        return this.decoded.set(QQ, XQ), XQ
      }
    }
  },
  41150: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => zQ,
      h: () => yQ,
      k: () => gQ,
      o: () => JQ,
      r: () => BQ
    });
    var wQ = XQ(41010),
      qQ = XQ(41157),
      TQ = XQ(41164);
    const zQ = 396,
      sQ = 1,
      FQ = 2,
      PQ = 3,
      gQ = {
        Glb: 1,
        LifeformAtlas: 2,
        ArmourAtlas: 3,
        Cape: 4,
        GroupAtlas: 5,
        Particle: 6,
        AttachmentImage: 7,
        BlockImage: 8,
        GreyscaleArmour: 9
      },
      JQ = {
        File: 0,
        Item: 1
      },
      rQ = 0,
      IQ = 1,
      jQ = 2;

    function BQ(QQ) {
      const WQ = (0, wQ.o)();
      WQ.catch((() => {}));
      let qQ = null;
      return {
        glbUrl: QQ,
        lifeformAtlasUrl: async QQ => (await WQ).lifeformAtlasUrl(QQ),
        armourAtlasUrl: async () => (await XQ.e(213).then((() => XQ(34609)))).armourAtlasUrl,
        capeUrl: async QQ => (await WQ).capeUrl(QQ),
        attachmentImageUrl: async QQ => (await WQ).attachmentImageUrl(QQ),
        blockImageUrl: async QQ => (await WQ).blockImageUrl(QQ),
        groupAtlasUrl: async QQ => (await WQ).groupAtlasUrl(QQ),
        particleTextureUrl: async QQ => (await WQ).particleTextureUrl(QQ),
        particleItemUrl: async QQ => (qQ ??= XQ.e(39).then((() => XQ(51293))).catch((QQ => {
          throw qQ = null, QQ
        })), (await qQ).particleItemUrl(QQ))
      }
    }
    class yQ {
      constructor(QQ, WQ) {
        var XQ, zQ, sQ, FQ;
        let PQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.sources = QQ, this.onFailure = WQ, this.loading = new Map, this.glbImages = new Map, this.glbWrittenImages = new Map, this.glbTakenCount = new Map, this.answered = new Map, this.ready = [], this.load = void 0, this.release = void 0, this.fetchFile = void 0, this.greyscaleArmour = void 0, this.zj = !1, this.load = null !== (XQ = PQ.load) && void 0 !== XQ ? XQ : (QQ, WQ) => (0, TQ.j)(QQ, PQ.fetchImage, WQ), this.release = null !== (zQ = PQ.release) && void 0 !== zQ ? zQ : TQ.p, this.fetchFile = null !== (sQ = PQ.fetchFile) && void 0 !== sQ ? sQ : QQ => (0, wQ.i)(QQ), this.greyscaleArmour = null !== (FQ = PQ.greyscaleArmour) && void 0 !== FQ ? FQ : qQ.e
      }
      get waiting() {
        return this.ready.length
      }
      get inFlight() {
        return this.loading.size
      }
      glbWritten(QQ, WQ) {
        this.glbWrittenImages.set(QQ, vQ(WQ))
      }
      glbTaken(QQ, WQ) {
        const XQ = this.glbWrittenImages.get(QQ);
        this.glbWrittenImages.delete(QQ), WQ && this.setGlbImages(QQ, void 0 !== XQ && XQ.length > 0 ? XQ : void 0)
      }
      setGlbImages(QQ, WQ) {
        var XQ;
        this.glbTakenCount.set(QQ, (null !== (XQ = this.glbTakenCount.get(QQ)) && void 0 !== XQ ? XQ : 0) + 1), void 0 === WQ ? this.glbImages.delete(QQ) : this.glbImages.set(QQ, WQ);
        const wQ = [];
        for (const {
            key: qQ
          }
          of this.loading.values()) qQ.kind === gQ.Glb && qQ.word === QQ && wQ.push(qQ);
        for (let qQ = this.ready.length - 1; qQ >= 0; qQ--) {
          const {
            key: WQ,
            id: XQ
          } = this.ready[qQ];
          WQ.kind === gQ.Glb && WQ.word === QQ && (this.ready.splice(qQ, 1), null !== XQ && (this.answered.delete(XQ), this.release(XQ)), wQ.push(WQ))
        }
        this.loadAgain(wQ)
      }
      onEvent(QQ) {
        if (this.zj) return;
        const WQ = new DataView(QQ.buffer, QQ.byteOffset, QQ.byteLength);
        for (let XQ = 0; XQ + 8 <= QQ.byteLength; XQ += 8) {
          const QQ = WQ.getUint8(XQ),
            wQ = WQ.getUint32(XQ + 4, !0);
          if (QQ === PQ) {
            this.answered.delete(wQ), this.release(wQ);
            continue
          }
          const qQ = {
            kind: WQ.getUint8(XQ + 1),
            index: WQ.getUint8(XQ + 2),
            word: wQ
          };
          QQ === sQ ? this.want(qQ) : QQ === FQ && this.loading.delete(VQ(qQ))
        }
      }
      reload(QQ, WQ) {
        const XQ = XQ => QQ.includes(XQ.kind) && (void 0 === WQ || WQ(XQ)),
          wQ = new Map;
        for (const qQ of this.answered.values()) XQ(qQ) && wQ.set(VQ(qQ), qQ);
        for (const [qQ, {
            key: TQ
          }] of this.loading) XQ(TQ) && wQ.set(qQ, TQ);
        this.loadAgain(wQ.values())
      }
      loadAgain(QQ) {
        for (const WQ of QQ) this.loading.delete(VQ(WQ)), this.want(WQ)
      }
      drain(QQ) {
        if (null !== QQ)
          for (; this.ready.length > 0;) {
            if (!QQ(zQ, 0, this.ready[0].record)) return;
            this.ready.shift()
          }
      }
      dispose() {
        this.zj = !0, this.loading.clear(), this.ready.length = 0;
        for (const QQ of this.answered.keys()) this.release(QQ);
        this.answered.clear()
      }
      want(QQ) {
        const WQ = VQ(QQ);
        if (this.loading.has(WQ)) return;
        const XQ = {
          key: QQ
        };
        this.loading.set(WQ, XQ), this.loadKey(QQ).then((wQ => {
          this.zj || this.loading.get(WQ) !== XQ ? this.release(wQ.id) : (this.loading.delete(WQ), this.answered.set(wQ.id, QQ), this.ready.push({
            record: pQ(QQ, rQ, wQ),
            key: QQ,
            id: wQ.id
          }))
        }), (wQ => {
          if (this.zj || this.loading.get(WQ) !== XQ) return;
          this.loading.delete(WQ), this.onFailure({
            key: QQ,
            error: wQ
          });
          const qQ = wQ instanceof TQ.e && "decode" === wQ.stage ? IQ : jQ;
          this.ready.push({
            record: pQ(QQ, qQ, null),
            key: QQ,
            id: null
          })
        }))
      }
      async loadKey(QQ) {
        switch (QQ.kind) {
          case gQ.Glb:
            return this.load(await this.glbImage(QQ), "none");
          case gQ.LifeformAtlas:
            return this.load(DQ(await this.sources.lifeformAtlasUrl(QQ.word), QQ), "none");
          case gQ.ArmourAtlas:
            return this.load(DQ(await this.sources.armourAtlasUrl(), QQ), "none");
          case gQ.Cape:
            return this.load(DQ(await this.sources.capeUrl(QQ.word), QQ), "none");
          case gQ.AttachmentImage:
            return this.load(DQ(await this.sources.attachmentImageUrl(QQ.word), QQ), "none");
          case gQ.GroupAtlas:
            return this.load(DQ(await this.sources.groupAtlasUrl(QQ.word), QQ), "none");
          case gQ.BlockImage:
            return this.load(DQ(await this.sources.blockImageUrl(QQ.word), QQ), "none");
          case gQ.Particle: {
            const WQ = await (QQ.index === JQ.Item ? this.sources.particleItemUrl(QQ.word) : this.sources.particleTextureUrl(QQ.word));
            return this.load(DQ(WQ, QQ), "flipY")
          }
          case gQ.GreyscaleArmour:
            return this.greyscaleArmour.load(QQ.index, QQ.word);
          default:
            throw new TQ.e("fetch", `image kind ${QQ.kind}`, {
              cause: null
            })
        }
      }
      async glbImage(QQ) {
        var WQ;
        let XQ = this.glbImages.get(QQ.word);
        if (void 0 === XQ) {
          const WQ = this.glbTakenCount.get(QQ.word),
            wQ = DQ(await this.sources.glbUrl(QQ.word), QQ);
          try {
            XQ = vQ(await this.fetchFile(wQ))
          } catch (qQ) {
            throw new TQ.e("fetch", wQ, {
              cause: qQ
            })
          }
          this.glbTakenCount.get(QQ.word) === WQ && this.glbImages.set(QQ.word, XQ)
        }
        const wQ = null === (WQ = XQ) || void 0 === WQ ? void 0 : WQ[QQ.index];
        if (!wQ) throw new TQ.e("decode", `image ${QQ.index} of file ${2147483647&QQ.word}`, {
          cause: null
        });
        return wQ
      }
    }

    function VQ(QQ) {
      let {
        kind: WQ,
        index: XQ,
        word: wQ
      } = QQ;
      return `${WQ}:${XQ}:${wQ}`
    }

    function DQ(QQ, WQ) {
      if (null === QQ) throw new TQ.e("fetch", `no URL for image ${VQ(WQ)}`, {
        cause: null
      });
      return QQ
    }

    function pQ(QQ, WQ, XQ) {
      var wQ, qQ, TQ;
      const zQ = new Uint8Array(16),
        sQ = new DataView(zQ.buffer);
      return sQ.setUint8(0, QQ.kind), sQ.setUint8(1, QQ.index), sQ.setUint8(2, WQ), sQ.setUint32(4, QQ.word, !0), sQ.setUint32(8, null !== (wQ = null === XQ || void 0 === XQ ? void 0 : XQ.id) && void 0 !== wQ ? wQ : 0, !0), sQ.setUint16(12, Math.min(null !== (qQ = null === XQ || void 0 === XQ ? void 0 : XQ.width) && void 0 !== qQ ? qQ : 0, 65535), !0), sQ.setUint16(14, Math.min(null !== (TQ = null === XQ || void 0 === XQ ? void 0 : XQ.height) && void 0 !== TQ ? TQ : 0, 65535), !0), zQ
    }
    const GQ = 1179937895,
      UQ = 1313821514,
      bQ = 5130562;

    function vQ(QQ) {
      var WQ;
      const XQ = new DataView(QQ.buffer, QQ.byteOffset, QQ.byteLength);
      if (QQ.byteLength < 20 || XQ.getUint32(0, !0) !== GQ || XQ.getUint32(16, !0) !== UQ) return [];
      let wQ, qQ = 20 + XQ.getUint32(12, !0);
      try {
        wQ = JSON.parse((new TextDecoder).decode(QQ.subarray(20, qQ)))
      } catch {
        return []
      }
      for (; qQ + 8 <= QQ.byteLength && XQ.getUint32(qQ + 4, !0) !== bQ;) qQ += 8 + XQ.getUint32(qQ, !0);
      const TQ = null !== (WQ = wQ.images) && void 0 !== WQ ? WQ : [];
      if (0 === TQ.length || qQ + 8 > QQ.byteLength) return TQ.map((() => null));
      const zQ = QQ.subarray(qQ + 8, Math.min(QQ.byteLength, qQ + 8 + XQ.getUint32(qQ, !0)));
      return TQ.map((QQ => {
        var WQ, XQ, qQ;
        const TQ = void 0 === QQ.bufferView || null === (WQ = wQ.bufferViews) || void 0 === WQ ? void 0 : WQ[QQ.bufferView];
        if (!TQ || 0 !== (null !== (XQ = TQ.buffer) && void 0 !== XQ ? XQ : 0) || void 0 === TQ.byteLength) return null;
        const sQ = null !== (qQ = TQ.byteOffset) && void 0 !== qQ ? qQ : 0,
          FQ = sQ + TQ.byteLength;
        return FQ <= zQ.byteLength ? zQ.slice(sQ, FQ) : null
      }))
    }
  },
  40889: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => zQ,
      g: () => TQ,
      k: () => qQ
    });
    let wQ = null;

    function qQ(QQ) {
      wQ = QQ
    }

    function TQ(QQ) {
      wQ === QQ && (wQ = null)
    }

    function zQ() {
      var QQ;
      null === (QQ = wQ) || void 0 === QQ || QQ()
    }
  },
  36883: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => gQ,
      e: () => rQ,
      f: () => VQ,
      g: () => PQ
    });
    var wQ = XQ(26),
      qQ = XQ(2506),
      TQ = XQ(2510),
      zQ = XQ(2518),
      sQ = XQ(2585),
      FQ = XQ(31);

    function PQ(QQ, WQ) {
      return (!(0, zQ.d)() || 0 === QQ && 0 === WQ) && (0, TQ.w)(qQ.j.Joystick, 0, QQ, WQ, 0)
    }
    const gQ = {
      Action1: 1,
      Action2: 2,
      Action3: 3,
      Attack: 4,
      Use: 5,
      Interact: 6,
      Boost: 7
    };

    function JQ(QQ) {
      return QQ.classList.contains("TouchKeyHit") && IQ() ? null : QQ.firstElementChild
    }

    function rQ(QQ) {
      return QQ.classList.contains("TouchKeyHit") && !QQ.classList.contains("CanvasZone") ? {
        whole: !IQ(),
        keyBox: null
      } : {
        whole: !1,
        keyBox: jQ(JQ(QQ))
      }
    }

    function IQ() {
      return document.documentElement.classList.contains(sQ.m)
    }

    function jQ(QQ) {
      return !(QQ instanceof HTMLElement) || QQ.offsetWidth <= 0 || QQ.offsetHeight <= 0 ? null : {
        width: QQ.offsetWidth,
        height: QQ.offsetHeight
      }
    }

    function BQ(QQ, WQ) {
      const XQ = QQ => Math.min(65535, Math.round(4 * QQ));
      return (XQ(QQ) | XQ(WQ) << 16) >>> 0
    }

    function yQ(QQ) {
      return {
        x: QQ.left + QQ.width / 2,
        y: QQ.top + QQ.height / 2,
        radius: Math.min(QQ.width, QQ.height) / 2
      }
    }
    const VQ = new class {
      constructor(QQ) {
        this.write = QQ, this.elements = new Map, this.canvasLeft = 0, this.canvasTop = 0
      }
      set(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        WQ ? this.elements.set(QQ, {
          element: WQ,
          hidden: XQ
        }) : this.elements.delete(QQ), this.measureOne(QQ)
      }
      measure() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          left: this.canvasLeft,
          top: this.canvasTop
        };
        this.canvasLeft = QQ.left, this.canvasTop = QQ.top;
        for (const WQ of this.elements.keys()) this.measureOne(WQ)
      }
      hitZone(QQ, WQ) {
        let XQ = null,
          wQ = 1;
        for (const qQ of this.elements.keys()) {
          const TQ = this.shown(qQ);
          if (!TQ) continue;
          const {
            rect: zQ,
            element: sQ
          } = TQ, FQ = yQ(zQ), PQ = Math.max(0, zQ.width / 2 - FQ.radius), gQ = Math.max(0, zQ.height / 2 - FQ.radius), rQ = Math.max(0, Math.abs(QQ - FQ.x) - PQ), IQ = Math.max(0, Math.abs(WQ - FQ.y) - gQ), BQ = sQ.firstElementChild;
          let VQ = Math.hypot(rQ, IQ) / FQ.radius;
          const DQ = jQ(JQ(sQ));
          DQ && (VQ = Math.min(VQ, Math.max(2 * Math.abs(QQ - FQ.x) / DQ.width, 2 * Math.abs(WQ - FQ.y) / DQ.height))), VQ < wQ && (XQ = {
            code: qQ,
            element: sQ,
            key: BQ,
            ...FQ
          }, wQ = VQ)
        }
        return XQ
      }
      measureOne(QQ) {
        const WQ = this.shown(QQ);
        if (!WQ) return void this.write(qQ.j.TouchZone, QQ, 0, 0, 0);
        const {
          rect: XQ,
          element: wQ
        } = WQ, TQ = yQ(XQ);
        this.write(qQ.j.TouchZone, QQ, TQ.x - this.canvasLeft, TQ.y - this.canvasTop, BQ(XQ.width, XQ.height));
        const zQ = jQ(JQ(wQ));
        this.write(qQ.j.TouchZone, 256 | QQ, 0, 0, zQ ? BQ(zQ.width, zQ.height) : 0)
      }
      shown(QQ) {
        const WQ = this.elements.get(QQ),
          XQ = wQ.b.get("worldPanelHud");
        if (!WQ || WQ.hidden || "none" === XQ) return null;
        const qQ = WQ.element.getBoundingClientRect();
        return qQ.width <= 0 || qQ.height <= 0 ? null : {
          rect: qQ,
          element: WQ.element
        }
      }
    }(TQ.w);
    (0, FQ.o)(sQ.h, (() => {
      VQ.measure()
    }))
  },
  40926: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => FQ,
      d: () => PQ
    });
    var wQ = XQ(41046),
      qQ = XQ(39333),
      TQ = XQ(36766),
      zQ = XQ(40928),
      sQ = XQ(40908);
    const FQ = wQ.c.timeForPlayerToConnect - 1e4;
    async function PQ(QQ, WQ, XQ, wQ) {
      let FQ;
      try {
        FQ = await QQ.getTrafficCode()
      } catch (jQ) {
        throw console.error("[bloxd-wasm-client] could not get a traffic code", jQ), new sQ.B(jQ)
      }
      const {
        gameNameWithVariation: PQ,
        lobbyName: gQ
      } = WQ, JQ = () => {
        const WQ = (0, TQ.e)(QQ, PQ, gQ, FQ, (QQ => {
          var WQ;
          return null !== (WQ = null === XQ || void 0 === XQ ? void 0 : XQ.isUsingCustomGameTexturePack(QQ)) && void 0 !== WQ && WQ
        }));
        WQ.joinOptions.wasmClient = !0;
        const qQ = (0, zQ.B)();
        return null !== qQ && (WQ.joinOptions.renderBackend = qQ), WQ.joinOptions.joinAdHold = wQ, WQ
      }, {
        roomName: rQ,
        joinOptions: IQ
      } = JQ();
      return {
        endpoint: WQ.endpoint,
        roomName: rQ,
        joinOptions: IQ,
        session: {
          gameNameWithVariation: PQ,
          lobbyName: gQ,
          playerDbId: QQ.whamm
        },
        optionsAfterRefusal: async WQ => await (0, qQ.d)(QQ, WQ) ? JQ().joinOptions : null
      }
    }
  },
  41172: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => gQ,
      d: () => TQ,
      h: () => JQ,
      i: () => zQ
    });
    var wQ = XQ(41150),
      qQ = XQ(41010);
    const TQ = new class {
      constructor() {
        this.page = null, this.session = void 0, this.follower = null, this.isWanted = !1, this.listeners = new Set, this.pageListeners = new Set, this.wantedListeners = new Set
      }
      get current() {
        return void 0 === this.session ? this.page : this.session
      }
      setPageFiles(QQ) {
        this.change((() => {
          this.page = QQ
        }))
      }
      setSessionFiles(QQ) {
        const WQ = void 0 !== this.session && void 0 === QQ;
        if (this.change((() => {
            this.session = QQ
          })), WQ)
          for (const XQ of [...this.pageListeners]) XQ()
      }
      showsPage() {
        return void 0 === this.session
      }
      onPageShown(QQ) {
        return this.pageListeners.add(QQ), () => {
          this.pageListeners.delete(QQ)
        }
      }
      setFollower(QQ) {
        this.follower = QQ, this.startFollower()
      }
      wanted() {
        this.isWanted = !0;
        for (const QQ of [...this.wantedListeners]) QQ();
        this.startFollower()
      }
      onWanted(QQ) {
        return this.wantedListeners.add(QQ), () => {
          this.wantedListeners.delete(QQ)
        }
      }
      onChange(QQ) {
        return this.listeners.add(QQ), () => {
          this.listeners.delete(QQ)
        }
      }
      startFollower() {
        const QQ = this.follower;
        this.isWanted && null !== QQ && (this.follower = null, QQ((() => {
          this.follower = QQ
        })))
      }
      change(QQ) {
        const WQ = this.current;
        if (QQ(), this.current !== WQ)
          for (const XQ of this.listeners) XQ()
      }
    };

    function zQ(QQ, WQ) {
      return {
        ...QQ,
        armourAtlasUrl: () => {
          var XQ, wQ;
          return null !== (XQ = null === (wQ = WQ()) || void 0 === wQ ? void 0 : wQ.armourAtlasUrl()) && void 0 !== XQ ? XQ : QQ.armourAtlasUrl()
        },
        lifeformAtlasUrl: XQ => FQ(WQ(), (QQ => QQ.LIFEFORM_ATLAS_PATHS[XQ]), (() => QQ.lifeformAtlasUrl(XQ))),
        groupAtlasUrl: XQ => FQ(WQ(), (QQ => QQ.GROUP_ATLAS_PATHS[XQ]), (() => QQ.groupAtlasUrl(XQ))),
        particleItemUrl: wQ => PQ(WQ(), (async () => {
          const QQ = await XQ.e(39).then((() => XQ(51293))).catch((() => null));
          return (null === QQ || void 0 === QQ ? void 0 : QQ.particleItemSprite(wQ)) || null
        }), (() => QQ.particleItemUrl(wQ))),
        blockImageUrl: XQ => PQ(WQ(), (async () => {
          var QQ, WQ;
          return null !== (QQ = null === (WQ = await sQ()) || void 0 === WQ ? void 0 : WQ.blockImageName(XQ)) && void 0 !== QQ ? QQ : null
        }), (() => QQ.blockImageUrl(XQ)))
      }
    }

    function sQ() {
      return (0, qQ.o)().catch((() => null))
    }

    function FQ(QQ, WQ, XQ) {
      return PQ(QQ, (async () => {
        var QQ;
        const XQ = await sQ(),
          wQ = null === XQ ? null : WQ(XQ),
          qQ = null !== (QQ = null === wQ || void 0 === wQ ? void 0 : wQ.slice(wQ.lastIndexOf("/") + 1)) && void 0 !== QQ ? QQ : null;
        return "Player_Atlas" === qQ ? null : qQ
      }), XQ)
    }
    async function PQ(QQ, WQ, XQ) {
      if (null !== QQ) {
        const XQ = await WQ(),
          wQ = null === XQ ? null : QQ.textureUrl(XQ);
        if (null !== wQ) return wQ
      }
      return XQ()
    }
    const gQ = 0;

    function JQ(QQ) {
      const WQ = [wQ.k.ArmourAtlas, wQ.k.LifeformAtlas, wQ.k.GroupAtlas, wQ.k.BlockImage, wQ.k.Particle];
      QQ.reload(WQ, (QQ => {
        switch (QQ.kind) {
          case wQ.k.Particle:
            return QQ.index === wQ.o.Item;
          case wQ.k.LifeformAtlas:
            return QQ.word !== gQ;
          default:
            return !0
        }
      }))
    }
  },
  41054: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => wQ,
      e: () => sQ,
      g: () => zQ,
      j: () => qQ,
      l: () => TQ
    });
    const wQ = 1e3;

    function qQ() {
      FQ((() => {
        window.location.reload()
      }))
    }

    function TQ() {
      return new Promise((() => {}))
    }

    function zQ(QQ) {
      FQ((() => {
        window.location.replace(QQ(window.location.href))
      }))
    }

    function sQ(QQ) {
      Promise.resolve().then((() => XQ(121))).then((WQ => {
        let {
          currentUrl: XQ
        } = WQ;
        zQ((() => XQ.mergeSearchParamsInto(QQ)))
      }), (() => {
        zQ((() => QQ))
      }))
    }

    function FQ(QQ) {
      null !== window.onbeforeunload ? Promise.resolve().then((() => XQ(1802))).then((WQ => {
        let {
          prepareForUnloadWithoutConfirmation: XQ
        } = WQ;
        try {
          XQ()
        } catch (wQ) {
          console.warn("[bloxd-wasm-client] prepareForUnloadWithoutConfirmation threw: leaving plainly", wQ), window.onbeforeunload = null
        }
        QQ()
      }), (() => {
        window.onbeforeunload = null, QQ()
      })) : QQ()
    }
  },
  5404: (QQ, WQ, XQ) => {
    function wQ(QQ, WQ) {
      return qQ(QQ, WQ)
    }

    function qQ(QQ, WQ) {
      if (QQ === WQ) return !0;
      if ("object" !== typeof QQ || "object" !== typeof WQ || null === QQ || null === WQ || Array.isArray(QQ) !== Array.isArray(WQ)) return !1;
      const XQ = QQ,
        wQ = WQ,
        TQ = Object.keys(XQ);
      return TQ.length === Object.keys(wQ).length && TQ.every((QQ => Object.prototype.hasOwnProperty.call(wQ, QQ) && qQ(XQ[QQ], wQ[QQ])))
    }
    XQ.d(WQ, {
      b: () => wQ
    })
  },
  41126: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => bQ,
      g: () => GQ,
      h: () => BQ,
      j: () => jQ
    });
    var wQ = XQ(1881),
      qQ = XQ(1243),
      TQ = XQ(39331),
      zQ = XQ(36795),
      sQ = XQ(39341),
      FQ = XQ(40908);
    const PQ = {
        "X-Requested-With": "XMLHtttpRequest"
      },
      gQ = 3,
      JQ = [500, 1500];

    function rQ(QQ) {
      const WQ = new URL(QQ);
      return {
        secure: "https:" === WQ.protocol || "wss:" === WQ.protocol,
        host: WQ.host,
        pathname: WQ.pathname.replace(/\/+$/, ""),
        search: WQ.searchParams.toString()
      }
    }

    function IQ(QQ, WQ, XQ) {
      const {
        secure: wQ,
        host: qQ,
        pathname: TQ,
        search: zQ
      } = rQ(QQ);
      return `${wQ?"https":"http"}://${qQ}${TQ}/matchmake/${WQ}/${encodeURIComponent(XQ)}${zQ?`?${zQ}`:""}`
    }

    function jQ(QQ, WQ) {
      var XQ;
      const wQ = null !== (XQ = WQ.protocol) && void 0 !== XQ ? XQ : "ws";
      if ("ws" !== wQ) throw new Error(`seat reservation asks for the ${wQ} transport`);
      const {
        secure: qQ,
        host: TQ,
        pathname: zQ,
        search: sQ
      } = rQ(QQ), FQ = new URLSearchParams(sQ);
      FQ.append("sessionId", WQ.sessionId), WQ.reconnectionToken && FQ.append("reconnectionToken", WQ.reconnectionToken);
      return `${qQ?"wss":"ws"}://${WQ.room.publicAddress||`${TQ}${zQ}`}/${WQ.room.processId}/${WQ.room.roomId}?${FQ.toString()}`
    }
    async function BQ(QQ, WQ, XQ) {
      var sQ;
      let PQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const rQ = null !== (sQ = PQ.sleep) && void 0 !== sQ ? sQ : wQ.e,
        jQ = new qQ.e(PQ.signal),
        BQ = new zQ.c((() => {
          (0, qQ.m)(jQ.controller, new zQ.f("seat"))
        })),
        {
          signal: pQ
        } = jQ;
      try {
        const wQ = await (0, TQ.g)((() => async function(QQ, WQ, XQ, wQ) {
          var TQ;
          const {
            signal: zQ,
            sleep: sQ
          } = wQ, PQ = IQ(QQ, "joinOrCreate", WQ), rQ = JSON.stringify(XQ);
          let jQ = null;
          for (let IQ = 0; IQ < gQ; IQ++) {
            var BQ;
            if (IQ > 0) await sQ(null !== (BQ = JQ[IQ - 1]) && void 0 !== BQ ? BQ : 1500, zQ);
            let QQ;
            (0, qQ.p)(zQ);
            try {
              QQ = await VQ(PQ, rQ, wQ)
            } catch (pQ) {
              (0, qQ.p)(zQ), jQ = yQ(pQ);
              continue
            }
            const {
              response: WQ,
              answer: XQ,
              refusal: TQ,
              lost: gQ
            } = QQ;
            if (null === gQ) {
              if (null !== TQ) throw DQ(TQ, XQ);
              if (WQ.ok && null !== XQ && vQ(XQ)) return XQ;
              jQ = new FQ.x(`seat request answered HTTP ${WQ.status}${null===XQ?" without JSON":" without a seat"}`, !1, void 0, WQ.status)
            } else jQ = yQ(gQ.error)
          }
          throw null !== (TQ = jQ) && void 0 !== TQ ? TQ : new FQ.x("seat request made no attempt", !1)
        }(QQ, WQ, XQ, {
          ...PQ,
          signal: pQ,
          sleep: rQ
        })), pQ, rQ);
        return BQ.answered(), wQ
      } finally {
        BQ.stop(), jQ.unfollow()
      }
    }

    function yQ(QQ) {
      return new FQ.x(QQ instanceof Error ? QQ.message : String(QQ), !0, QQ)
    }
    async function VQ(QQ, WQ, XQ) {
      var wQ;
      const {
        signal: TQ
      } = XQ, zQ = null !== (wQ = XQ.fetch) && void 0 !== wQ ? wQ : fetch, sQ = await zQ(QQ, {
        method: "POST",
        headers: {
          ...PQ,
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: WQ,
        credentials: "include",
        signal: TQ
      }), {
        answer: FQ,
        lost: gQ
      } = await async function(QQ) {
        try {
          const WQ = await QQ.json();
          return {
            answer: "object" === typeof WQ && null !== WQ ? WQ : null,
            lost: null
          }
        } catch (WQ) {
          return {
            answer: null,
            lost: WQ instanceof SyntaxError ? null : {
              error: WQ
            }
          }
        }
      }(sQ), JQ = null !== FQ && "string" === typeof FQ.error ? FQ.error : null;
      var rQ;
      null !== JQ && (null === (rQ = XQ.onRefusal) || void 0 === rQ || rQ.call(XQ));
      return (0, qQ.p)(TQ), {
        response: sQ,
        answer: FQ,
        refusal: JQ,
        lost: gQ
      }
    }

    function DQ(QQ, WQ) {
      return new FQ.q(QQ, "number" === typeof(null === WQ || void 0 === WQ ? void 0 : WQ.code) ? WQ.code : 0, (0, sQ.q)(QQ).text)
    }
    class pQ extends Error {
      constructor(QQ, WQ) {
        super(QQ), this.code = WQ, this.name = "SeatHttpError"
      }
    }
    async function GQ(QQ, WQ, XQ) {
      let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const {
        response: qQ,
        answer: TQ,
        refusal: zQ,
        lost: sQ
      } = await VQ(IQ(QQ, "reconnect", WQ), JSON.stringify({
        reconnectionToken: XQ
      }), wQ);
      if (null !== sQ) throw sQ.error;
      if (!qQ.ok) {
        const QQ = null !== TQ && "number" === typeof TQ.code && 0 !== TQ.code ? TQ.code : qQ.status;
        throw new pQ(`the seat's reconnect was refused: ${null!==zQ&&void 0!==zQ?zQ:`HTTP ${qQ.status}`}`, QQ)
      }
      if (null !== zQ) throw DQ(zQ, TQ);
      if (null === TQ || !vQ(TQ)) throw new Error("the seat's reconnect answered " + (null === TQ ? "without JSON" : "without a seat"));
      return {
        ...TQ,
        reconnectionToken: XQ
      }
    }
    const UQ = 10;

    function bQ(QQ) {
      if (QQ.byteLength < 2 || QQ[0] !== UQ) return null;
      const WQ = 2 + QQ[1];
      return WQ > QQ.byteLength ? null : (new TextDecoder).decode(QQ.subarray(2, WQ))
    }

    function vQ(QQ) {
      const WQ = QQ.room;
      return "string" === typeof QQ.sessionId && "object" === typeof WQ && null !== WQ && "string" === typeof WQ.roomId && "string" === typeof WQ.processId && "string" === typeof WQ.name
    }
  },
  40835: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      $: () => pQ,
      C: () => GQ,
      F: () => UQ,
      G: () => yQ,
      I: () => aQ,
      M: () => AQ,
      Q: () => jQ,
      S: () => EQ,
      U: () => DQ,
      X: () => VQ,
      bb: () => bQ,
      d: () => qQ,
      e: () => RQ,
      g: () => cQ,
      j: () => IQ,
      m: () => BQ,
      p: () => hQ,
      r: () => dQ,
      s: () => lQ,
      t: () => HQ,
      x: () => vQ,
      z: () => iQ
    });
    var wQ = XQ(3243);
    const qQ = {
      Chat: 49,
      UiRequestResponded: 91,
      CodeCollab: 89,
      SetCustomLobbyBlock: 60,
      UpdateBook: 56,
      UpdateBoard: 33,
      UpdateMyCosmetic: 45,
      PlayEmote: 90,
      ReqDiscordReportKey: 9,
      UserReport: 11,
      LobbyReport: 12,
      CustomGameReport: 13,
      IgnoreUser: 34,
      ShopMenuChanged: 26,
      GeneralCookieSet: 72,
      CompleteTask: 69,
      OpenIronChest: 80,
      ChangeIronChestPasskey: 81,
      StopSleeping: 78,
      AnalyticsUpdate: 3,
      UiRequestResp: 15,
      QteResponse: 16,
      ItemBought: 25,
      LeaderboardRequest: 40,
      UpdateNameTag: 53,
      LobbyManage: 96
    };

    function TQ(QQ, WQ) {
      return !ArrayBuffer.isView(QQ) || QQ instanceof DataView ? Array.isArray(QQ) ? QQ.map((QQ => WQ(QQ))) : QQ : Array.from(QQ, (QQ => WQ(QQ)))
    }

    function zQ(QQ) {
      if ("string" !== typeof QQ) return QQ;
      for (let WQ = 0; WQ < QQ.length; WQ++) {
        const XQ = QQ.charCodeAt(WQ);
        if (XQ >= 55296 && XQ <= 57343) return FQ.decode(sQ.encode(QQ))
      }
      return QQ
    }
    const sQ = new TextEncoder,
      FQ = new TextDecoder;

    function PQ(QQ) {
      return QQ
    }
    let gQ;

    function JQ(QQ) {
      return null === QQ || "object" !== typeof QQ ? QQ : [zQ(QQ.mz), zQ(QQ.Mz)]
    }

    function rQ(QQ) {
      return null === QQ || "object" !== typeof QQ ? QQ : [TQ(QQ.Sq, PQ), TQ(QQ.ys, PQ)]
    }

    function IQ(QQ) {
      return null === (WQ = QQ) || "object" !== typeof WQ ? WQ : [zQ(WQ.cg), zQ(WQ.Ag)];
      var WQ
    }

    function jQ(QQ) {
      return null === (WQ = QQ) || "object" !== typeof WQ ? WQ : [WQ.id, WQ.yg];
      var WQ
    }

    function BQ(QQ) {
      return null === (WQ = QQ) || "object" !== typeof WQ ? WQ : [WQ.Zq, zQ(WQ.Oq), WQ.Kq, zQ(WQ.QT), WQ.qT, WQ.TT, WQ.lg, zQ(WQ.hg), zQ(WQ.ig)];
      var WQ
    }

    function yQ(QQ) {
      return null === (WQ = QQ) || "object" !== typeof WQ ? WQ : [TQ(WQ.tz, PQ), WQ.ez];
      var WQ
    }

    function VQ(QQ) {
      return null === (WQ = QQ) || "object" !== typeof WQ ? WQ : [TQ(WQ.kz, (QQ => zQ(QQ))), zQ(WQ.fz), WQ.Sz];
      var WQ
    }

    function DQ(QQ) {
      return null === (WQ = QQ) || "object" !== typeof WQ ? WQ : [TQ(WQ.UF, PQ), zQ(WQ.bF), WQ.vF];
      var WQ
    }

    function pQ(QQ) {
      return null === (WQ = QQ) || "object" !== typeof WQ ? WQ : [zQ(WQ.dT), zQ(WQ.HT)];
      var WQ
    }

    function GQ(QQ) {
      return null === (WQ = QQ) || "object" !== typeof WQ ? WQ : [zQ(WQ.Rs)];
      var WQ
    }

    function UQ(QQ) {
      return zQ(QQ)
    }

    function bQ(QQ) {
      return null === (WQ = QQ) || "object" !== typeof WQ ? WQ : [zQ(WQ.Ig), zQ(WQ.jg), zQ(WQ.mz), zQ(WQ.Mz)];
      var WQ
    }

    function vQ(QQ) {
      return JQ(QQ)
    }

    function dQ(QQ) {
      return JQ(QQ)
    }

    function HQ(QQ) {
      return null === (WQ = QQ) || "object" !== typeof WQ ? WQ : [zQ(WQ.IF)];
      var WQ
    }

    function aQ(QQ) {
      return QQ
    }

    function lQ(QQ) {
      return null === (WQ = QQ) || "object" !== typeof WQ ? WQ : [zQ(WQ.Oz), zQ(WQ.Kz)];
      var WQ
    }

    function hQ(QQ) {
      return zQ(QQ)
    }

    function iQ(QQ) {
      return rQ(QQ)
    }

    function cQ(QQ) {
      return rQ(QQ)
    }

    function AQ(QQ) {
      return null === (WQ = QQ) || "object" !== typeof WQ ? WQ : [zQ(WQ.dF)];
      var WQ
    }

    function RQ(QQ) {
      return (gQ ??= (0, wQ.f)().map((QQ => QQ.name)), gQ).map((WQ => {
        return "string" === typeof(XQ = QQ[WQ]) ? zQ(XQ) : TQ(XQ, PQ);
        var XQ
      }))
    }

    function EQ(QQ) {
      return null === (WQ = QQ) || "object" !== typeof WQ ? WQ : [WQ.gF, WQ.JF, WQ.rF];
      var WQ
    }
  },
  41175: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => TQ
    });
    var wQ = XQ(41178),
      qQ = XQ(41172);
    const TQ = new class {
      constructor(QQ) {
        this.pack = QQ, this.game = void 0, this.settle = null, this.hold = null, this.endedWhileHeld = !1, this.gameListeners = new Set, QQ.onWanted((() => {
          this.release()
        }))
      }
      setGame(QQ) {
        if (void 0 === QQ && null !== this.hold) return void(this.endedWhileHeld = !0);
        this.hold = null, this.endedWhileHeld = !1;
        const WQ = this.inGame();
        if (this.game = QQ, this.update(), this.inGame() !== WQ)
          for (const XQ of this.gameListeners) XQ()
      }
      inGame() {
        return void 0 !== this.game
      }
      onGameChange(QQ) {
        return this.gameListeners.add(QQ), () => {
          this.gameListeners.delete(QQ)
        }
      }
      unwantedLeave(QQ) {
        QQ && void 0 !== this.game ? this.hold = {
          game: this.game
        } : this.release()
      }
      rejoinHold() {
        return this.hold
      }
      releaseHold(QQ) {
        null !== QQ && QQ === this.hold && this.release()
      }
      release() {
        if (null === this.hold) return;
        const QQ = this.endedWhileHeld;
        this.hold = null, this.endedWhileHeld = !1, QQ && this.setGame(void 0)
      }
      setSettled(QQ) {
        this.settle = QQ, this.update()
      }
      update() {
        void 0 === this.game ? this.pack.setSessionFiles(void 0) : null !== this.settle && (0, wQ.c)(this.settle.state, this.game) && this.pack.setSessionFiles(this.settle.files)
      }
    }(qQ.d)
  },
  5401: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => zQ,
      g: () => sQ
    });
    var wQ = XQ(2226),
      qQ = XQ(5404);
    let TQ = null;

    function zQ(QQ) {
      TQ = {
        pack: QQ.metaData.id === wQ.c ? null : QQ
      }
    }

    function sQ(QQ) {
      return !(null === TQ || !(0, qQ.b)(TQ.pack, QQ)) && (TQ = null, !0)
    }
  },
  40897: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      followPageUiPack: () => ug,
      packForGame: () => Cg,
      playWasmGame: () => Zg,
      prefetchWasmPreviews: () => CF,
      setGamePackConfirm: () => YP,
      startWasmPlay: () => tg,
      startWasmPreviews: () => EF
    });
    var wQ = XQ(231),
      qQ = XQ(1280),
      TQ = XQ(193),
      zQ = XQ(39354),
      sQ = XQ(2003),
      FQ = XQ(31),
      PQ = XQ(4992),
      gQ = XQ(1360),
      JQ = XQ(1783),
      rQ = XQ(1376),
      IQ = XQ(39533),
      jQ = XQ(1345),
      BQ = XQ(1863),
      yQ = XQ(3167);
    let VQ = null,
      DQ = null,
      pQ = null,
      GQ = !1;

    function UQ() {
      VQ ??= performance.now()
    }
    const bQ = {
      ready: () => {
        BQ.d.markAdmissionAwaited()
      },
      adEnded: () => {
        BQ.d.markJoinAdEnded()
      },
      admitted: () => {
        BQ.d.markAdmitted()
      }
    };
    var vQ = XQ(39551),
      dQ = XQ(39440),
      HQ = XQ(36775),
      aQ = XQ(39331),
      lQ = XQ(9285),
      hQ = XQ(36795),
      iQ = XQ(40902),
      cQ = XQ(5118),
      AQ = XQ(40829),
      RQ = XQ(40883),
      EQ = XQ(40835);
    const CQ = {
      states: {
        health: !0,
        aura: !0,
        hotbar: !0,
        heldItemAim: !0,
        crouching: !0,
        flight: !0,
        gliderBoostFuel: !0,
        crosshairTarget: !0,
        inventory: !0,
        crafting: !0,
        stationItems: !0,
        itemInfo: !0,
        creativeVisibility: !0,
        fullInventory: !0,
        replay: !0,
        replayEdits: !0,
        replayRecorder: !0,
        replayVideoExporting: !0,
        players: !0,
        lobbyLeaderboardRows: !0,
        freeCamera: !0
      },
      events: {
        hotbarSlotRequested: !0,
        hotbarScrolled: !0,
        numberKeyPressed: !0,
        shotDamageToShow: !0,
        chatReceived: !0,
        chestToggled: !0,
        chestRefreshed: !0,
        inventorySynced: !0,
        inventoryDropRequested: !0,
        enchantingTableOpened: !0,
        localEffectUpdated: !0,
        kill: !0,
        replayUiActionRequested: !0,
        replayViewerRequested: !0,
        cosmeticsUpdated: !0,
        boardEditRequested: !0,
        ironChestOpenRequested: !0
      },
      commands: {
        clickCodeBlock: !0,
        selectHotbarSlot: !0,
        setCrosshairInteractPrompt: !0,
        sendChatMessage: !0,
        removeInventoryItem: !0,
        swapInventorySlots: !0,
        moveInventoryItem: !0,
        quickMoveInventoryItem: !0,
        setInventoryOpen: !0,
        closeChest: !0,
        focusCrafting: !0,
        craftRecipe: !0,
        salvageItem: !0,
        enchantItem: !0,
        changeIronChestPasskey: !0,
        openIronChest: !0,
        completeTask: !0,
        setServerCookie: !0,
        answerUiRequest: !0,
        requestLeaderboard: !0,
        chooseRewardedAd: !0,
        ignorePlayer: !0,
        reportPlayer: !0,
        reportWorldCodeChat: !0,
        requestDiscordReportKey: !0,
        reportLobbyOrGame: !0,
        updateMyCosmetic: !0,
        holdEmoteWheel: !0,
        writeOnBoard: !0,
        writeBook: !0,
        writeNameTag: !0,
        setCustomLobbyBlock: !0,
        sendCodeCollab: !0,
        replayAction: !0,
        setReplayPlaying: !0,
        seekReplay: !0,
        setReplayCameraMode: !0,
        syncReplayCameraMode: !0,
        setReplayCameraKeyframe: !0,
        moveReplayCameraKeyframe: !0,
        deleteReplayCameraKeyframes: !0,
        setReplayPlaybackMark: !0,
        cropReplay: !0,
        holdReplayForShaderPackFailure: !0,
        exportReplayVideo: !0,
        toggleRecording: !0,
        saveClip: !0,
        setRecorderPrefs: !0,
        setReplayViewerOpen: !0,
        recordFlyingMiddleText: !0,
        dragReplayCamera: !0,
        moveReplayFreecam: !0,
        holdReplayFreecamVertical: !0,
        setShopOpen: !0,
        buyShopItem: !0,
        setFreeCameraMovesFly: !0,
        setBlockHighlight: !0,
        lobbyManage: !0
      },
      queries: {
        enchantingOffer: !0,
        worldCodeAiChunk: !0,
        worldCodeAiGameState: !0
      },
      lookups: {
        momentumFrac: !0,
        localPos: !0,
        targetedBlockPos: !0,
        blockAtViewPoint: !0,
        screenPos: !0,
        codeBlockClickable: !0,
        blocksStandingOn: !0,
        dropAhead: !0,
        replayCamera: !0,
        leaveGameReloadsPage: !0,
        freeCameraPos: !0
      }
    };

    function uQ(QQ) {
      const WQ = {
        ...RQ.b[QQ]
      };
      for (const XQ of Object.keys(CQ[QQ])) delete WQ[XQ];
      return WQ
    }

    function LQ() {
      var QQ, WQ;
      return null === (QQ = null === (WQ = (0, AQ.j)()) || void 0 === WQ ? void 0 : WQ.localPlayerAlive()) || void 0 === QQ || QQ
    }

    function kQ() {
      var QQ, WQ;
      return null !== (QQ = null === (WQ = (0, AQ.j)()) || void 0 === WQ ? void 0 : WQ.localDeaths()) && void 0 !== QQ ? QQ : null
    }
    const fQ = {
        current: LQ,
        watch: QQ => {
          let WQ = LQ(),
            XQ = kQ();
          return (0, cQ.w)((() => {
            const wQ = LQ(),
              qQ = kQ(),
              TQ = null !== qQ && null !== XQ && qQ !== XQ;
            XQ = qQ, TQ ? (WQ || QQ(!0), QQ(!1), wQ && QQ(!0), WQ = wQ) : wQ !== WQ && (WQ = wQ, QQ(wQ))
          }))
        }
      },
      SQ = {
        states: {
          ...uQ("states"),
          localPlayerAlive: fQ
        },
        events: {
          ...uQ("events"),
          localPlayerAliveSet: {
            watch: fQ.watch
          }
        },
        commands: {
          ...uQ("commands"),
          respawn: () => {
            var QQ;
            null === (QQ = (0, AQ.j)()) || void 0 === QQ || QQ.respawn()
          },
          playEmote: QQ => {
            var WQ;
            null === (WQ = (0, AQ.j)()) || void 0 === WQ || WQ.send(EQ.d.PlayEmote, (0, EQ.C)({
              Rs: QQ
            }))
          },
          applyTemporaryThirdPerson: QQ => {
            var WQ;
            let {
              durationMs: XQ
            } = QQ;
            null === (WQ = (0, AQ.j)()) || void 0 === WQ || WQ.thirdPersonFor(XQ)
          },
          bindCustomButtonKeys: QQ => {
            var WQ;
            null === (WQ = (0, AQ.j)()) || void 0 === WQ || WQ.bindCustomButtonKeys(QQ)
          },
          pressCustomButton: QQ => {
            var WQ;
            let {
              id: XQ,
              down: wQ
            } = QQ;
            null === (WQ = (0, AQ.j)()) || void 0 === WQ || WQ.pressCustomButton(XQ, wQ)
          },
          setLookSensitivity: () => {},
          wakeUp: QQ => {
            const WQ = (0, EQ.M)({
                dF: QQ
              }),
              XQ = () => {
                const QQ = (0, AQ.j)();
                return !(null !== QQ && void 0 !== QQ && QQ.isSessionLive) || QQ.send(EQ.d.StopSleeping, WQ)
              };
            if (!XQ()) {
              const QQ = (0, cQ.w)((() => {
                XQ() && QQ()
              }))
            }
          },
          setCameraZoom: QQ => {
            var WQ;
            null === (WQ = (0, AQ.j)()) || void 0 === WQ || WQ.setCameraZoom(QQ)
          }
        },
        queries: uQ("queries"),
        lookups: {
          ...uQ("lookups"),
          cameraZoom: () => {
            var QQ, WQ;
            return null !== (QQ = null === (WQ = (0, AQ.j)()) || void 0 === WQ ? void 0 : WQ.cameraZoom()) && void 0 !== QQ ? QQ : 0
          }
        }
      };
    var tQ = XQ(39341),
      oQ = XQ(40908),
      eQ = XQ(40910),
      nQ = XQ(40926),
      xQ = XQ(1290),
      YQ = XQ(121),
      NQ = XQ(4836),
      ZQ = XQ(3955),
      OQ = XQ(1210);
    const KQ = {
      yz: () => (0, xQ.f)(),
      inbuiltOverwritten: () => NQ.f,
      reflectApplyHit: () => OQ.b,
      definerHit: () => YQ.currentUrl.c,
      emitReplaced: () => (0, FQ.d)(),
      confirmMesh: () => (0, ZQ.d)(),
      confirmMeshHitStack: () => (0, ZQ.e)()
    };
    var mQ = XQ(40915),
      MQ = XQ(41054);
    var QW = XQ(26),
      WW = XQ(2010),
      XW = XQ(2061),
      wW = XQ(1707),
      qW = XQ(2098),
      TW = XQ(1226),
      zW = XQ(1285),
      sW = XQ(41056);

    function FW() {
      return zW.h.get().getCurrentLanguageCode()
    }

    function PW(QQ) {
      const WQ = () => {
        QQ({
          translate: (QQ, WQ) => (0, TW.u)(FW(), QQ, WQ),
          keyBindingText: QQ => {
            const WQ = (0, XW.q)(QQ, QW.b.get("isTouchScreen"));
            return null !== WQ ? (0, TW.x)(FW(), WQ.translationKey, WQ.params) : (0, XW.n)((0, XW.p)(QQ))
          },
          isFriend: qW.g,
          hiddenNames: WW.e.shown,
          loadsFontRest: (0, sW.c)(FW())
        })
      };
      let XQ = !1;
      const wQ = () => {
          const QQ = FW();
          (0, TW.m)(QQ).then((() => {
            XQ || QQ !== FW() || WQ()
          }))
        },
        qQ = () => wW.d.getSocialState().friends.map((QQ => QQ.name.toLowerCase())).sort().join(" ");
      let TQ = qQ();
      WQ(), wQ();
      const zQ = [(0, zW.l)((() => {
        WQ(), wQ()
      })), (0, FQ.o)("customBindingsChanged", WQ), (0, FQ.o)("appManagerUpdated|isTouchScreen", WQ), (0, qW.d)((() => {
        const QQ = qQ();
        QQ !== TQ && (TQ = QQ, WQ())
      })), WW.e.subscribe(WQ)];
      return () => {
        XQ = !0;
        for (const QQ of zQ) QQ()
      }
    }
    var gW = XQ(670),
      JW = XQ(1049),
      rW = XQ(2043),
      IW = XQ(382),
      jW = XQ(221),
      BW = XQ(3107),
      yW = XQ(3110),
      VW = XQ(39002),
      DW = XQ(5002),
      pW = XQ(41076),
      GW = XQ(714),
      UW = XQ(691),
      bW = XQ(3188),
      vW = XQ(2036),
      dW = XQ(3959),
      HW = XQ(3547);
    let aW = null;
    var lW = XQ(1238),
      hW = XQ(1243),
      iW = XQ(4747),
      cW = XQ(3708),
      AW = XQ(55),
      RW = XQ(374),
      EW = XQ(367),
      CW = XQ(41094),
      uW = XQ(5126),
      LW = XQ(39038);
    var kW = XQ(37959),
      fW = XQ(41102);
    class SW {
      constructor(QQ, WQ) {
        this.showView = QQ, this.holdForAd = WQ
      }
      pointerUnlockRequestsChanged() {
        (0, CW.y)()
      }
      pointerLockDebugEntries() {
        return [{
          label: "Locked to the canvas",
          value: String((0, CW.p)())
        }]
      }
      setGameViewShown(QQ) {
        this.showView(QQ)
      }
      setGameView(QQ) {
        (0, fW.i)(QQ)
      }
      videoAdHold(QQ, WQ) {
        this.holdForAd(QQ, WQ)
      }
    }
    class tW {
      leave(QQ) {
        ! function(QQ) {
          if (null !== (0, rQ.e)().websocketUrl) try {
            (0, cQ.H)().leaveGame(QQ)
          } finally {
            (0, rQ.t)({
              websocketUrl: null
            })
          }
        }(QQ)
      }
      isReplay() {
        return !1
      }
    }
    class oW {
      watchFrameStarts(QQ) {
        return (0, cQ.s)(QQ)
      }
      watchFrames(QQ) {
        return (0, cQ.o)(QQ)
      }
      watchTicks(QQ) {
        return (0, cQ.w)(QQ)
      }
    }
    var eW = XQ(41106);

    function nW(QQ) {
      return QQ >= 0 ? Math.min(1, QQ) : 0
    }

    function xW(QQ, WQ) {
      const {
        fade: XQ
      } = QQ;
      return null === XQ || WQ - XQ.at >= XQ.ms ? QQ.volume : XQ.from + (QQ.volume - XQ.from) * Math.max(0, (WQ - XQ.at) / XQ.ms)
    }

    function YW(QQ) {
      const WQ = Object.entries(QQ),
        XQ = new Uint32Array(WQ.length);
      let wQ = 0;
      for (const [zQ, [, sQ]] of WQ.entries()) XQ[zQ] = sQ.length, wQ += sQ.length;
      const qQ = new Float64Array(3 * wQ);
      let TQ = 0;
      for (const [, zQ] of WQ)
        for (const QQ of zQ) qQ.set(QQ, TQ), TQ += 3;
      return {
        blocks: WQ.map((QQ => {
          let [WQ] = QQ;
          return WQ
        })).join("\0"),
        counts: XQ,
        values: qQ
      }
    }
    class NW {
      constructor(QQ, WQ) {
        this.core = QQ, this.warn = WQ, this.latest = 0
      }
      async feed() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ZW;
        const WQ = ++this.latest;
        let XQ;
        try {
          XQ = await QQ()
        } catch (wQ) {
          return void(this.core.isStopped || WQ !== this.latest || this.warn("the block colours didn't load, so block particles draw grey", wQ))
        }
        WQ === this.latest && (this.core.setBlockColours(XQ) || this.core.isStopped || this.warn("the core refused the block colours: block particles draw grey"))
      }
    }
    async function ZW() {
      return YW((await XQ.e(213).then((() => XQ(34609)))).averageColors)
    }
    var OW = XQ(5134),
      KW = XQ(5140),
      mW = XQ(40864),
      MW = XQ(3507),
      QX = XQ(36552),
      WX = XQ(40961),
      XX = XQ(658),
      wX = XQ(37327),
      qX = XQ(651),
      TX = XQ(402),
      zX = XQ(40943);
    const sX = [3e4, 12e4, 3e5];
    class FX extends Error {}
    const PX = {
      mobTypes: XX.j,
      vehicleTypes: wX.e,
      mobAiStates: XX.h,
      playerPoses: qX.l
    };
    var gX = XQ(40930),
      JX = XQ(40954),
      rX = XQ(40984),
      IX = XQ(1109),
      jX = XQ(41114),
      BX = XQ(41122),
      yX = XQ(3223),
      VX = XQ(39320),
      DX = XQ(5153),
      pX = XQ(2506);
    const GX = pX.x.KeysDisabled | pX.x.LookFrozen | pX.x.ClicksSuppressed,
      UX = yX.g;
    var bX = (0, BX.b)("resumingConn");
    class vX {
      constructor(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.shell = QQ, this.now = WQ, this.session = void 0, this.attempt = null, this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, Object.defineProperty(this, bX, {
          writable: !0,
          value: 0
        }), this.drops = 0, this.session = new VX.c({
          reconnect: QQ => this.reconnect(QQ),
          isLive: () => QQ.isLive(),
          onReconnected: WQ => {
            this.landed = WQ, QQ.onReconnected(WQ), this.landIfResumed()
          },
          onGaveUp: (WQ, XQ) => {
            this.abortAttempt(), QQ.onGaveUp(WQ, XQ)
          },
          freeze: WQ => {
            QQ.Bl(WQ), (0, DX.i)(GX, WQ ? GX : 0, "reconnectFreeze")
          },
          releaseSeat: QQ => {
            this.releaseSeat(QQ)
          }
        })
      }
      isResuming() {
        return this.session.isResuming()
      }
      get resumingConn() {
        return (0, jX.d)(this, bX)[bX]
      }
      canHoldSeat() {
        return this.session.canHoldSeat()
      }
      onInitialInfo(QQ) {
        let {
          conn: WQ,
          graceMs: XQ,
          sessionBased: wQ,
          replayOffer: qQ
        } = QQ;
        this.session.onInitialInfo(XQ, wQ), this.isResuming() && (this.initialInfoConn = WQ, this.initialInfoOffer = qQ, this.landIfResumed())
      }
      onResumeComplete(QQ) {
        0 !== QQ && (QQ === (0, jX.d)(this, bX)[bX] ? ((0, jX.d)(this, bX)[bX] = 0, this.session.onResumed()) : this.isResuming() && (this.completedEarlyConn = QQ))
      }
      onDropped(QQ) {
        this.drops++, this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, (0, jX.d)(this, bX)[bX] = 0, this.session.onConnectionLost(QQ)
      }
      leave() {
        this.session.leave(), this.dispose()
      }
      dispose() {
        this.abortAttempt(), this.landed = null, this.completedEarlyConn = 0, (0, jX.d)(this, bX)[bX] = 0, this.session.end()
      }
      reconnect(QQ) {
        const WQ = this.attempt;
        if (null !== WQ && this.awaitingJoinRoom(WQ)) return WQ.result;
        this.abortAttempt();
        const XQ = new AbortController,
          wQ = this.drops,
          qQ = {
            attachedAt: null
          },
          TQ = this.shell.reconnect(QQ, XQ.signal, (() => {
            qQ.attachedAt = this.now()
          })).then((QQ => {
            if (this.clearAttempt(zQ), this.drops !== wQ) throw new Error("the resumed room dropped before its attempt settled");
            return QQ
          }), (QQ => {
            throw this.clearAttempt(zQ), QQ
          })),
          zQ = {
            abort: XQ,
            socket: qQ,
            result: TQ
          };
        return this.attempt = zQ, TQ
      }
      clearAttempt(QQ) {
        this.attempt === QQ && (this.attempt = null)
      }
      abortAttempt() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new DOMException("the reconnect attempt was given up", "AbortError");
        const WQ = this.attempt;
        this.attempt = null, null === WQ || void 0 === WQ || WQ.abort.abort(QQ)
      }
      awaitingJoinRoom(QQ) {
        const WQ = QQ.socket.attachedAt;
        return null !== WQ && this.now() - WQ < UX
      }
      releaseSeat(QQ) {
        const WQ = this.attempt,
          XQ = null !== WQ && this.awaitingJoinRoom(WQ);
        this.abortAttempt(new oQ.t), XQ || this.shell.releaseSeat(QQ)
      }
      landIfResumed() {
        const QQ = this.landed;
        if (null !== QQ && QQ.conn === this.initialInfoConn) {
          const WQ = this.initialInfoOffer && this.completedEarlyConn !== QQ.conn;
          if (this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, this.abortAttempt(), !WQ) return void this.session.onResumed();
          (0, jX.d)(this, bX)[bX] = QQ.conn, this.session.onResuming()
        }
      }
    }
    var dX = XQ(39323),
      HX = XQ(41126),
      aX = XQ(36785),
      lX = XQ(36777),
      hX = XQ(2226),
      iX = XQ(1972),
      cX = XQ(4610),
      AX = XQ(40963),
      RX = XQ(5401);

    function EX(QQ) {
      let {
        pack: WQ,
        gameSource: XQ
      } = QQ;
      if (null !== XQ && "" !== XQ) return `game:${XQ}`;
      if (null === WQ) return "default";
      const {
        id: wQ,
        version: qQ
      } = WQ.metaData;
      if (wQ !== hX.i.CUSTOM) return `${wQ}@${qQ}`;
      const TQ = [];
      for (const zQ of [WQ.textureOverrides, WQ.modelOverrides, WQ.animations])
        for (const [QQ, WQ] of Object.entries(null !== zQ && void 0 !== zQ ? zQ : {})) TQ.push(`${QQ}:${WQ.length}`);
      return `${wQ}:${(0,iX.r)(TQ.join())}`
    }
    var CX = XQ(4737),
      uX = XQ(3523),
      LX = XQ(41128),
      kX = XQ(693),
      fX = XQ(3526),
      SX = XQ(105),
      tX = XQ(3203),
      oX = XQ(3193),
      eX = XQ(4814),
      nX = XQ(43),
      xX = XQ(4625),
      YX = XQ(41020),
      NX = XQ(4766),
      ZX = XQ(2510),
      OX = XQ(1698),
      KX = XQ(1728),
      mX = XQ(1335),
      MX = XQ(129),
      Qw = XQ(350),
      Ww = XQ(39349),
      Xw = XQ(2518),
      ww = XQ(5148);
    const qw = new Set([OW.qb.KeyDown, OW.qb.MouseMove, OW.qb.MouseDown, OW.qb.Wheel, OW.qb.TouchStart, OW.qb.TouchMove]);

    function Tw(QQ) {
      return (QQ.shiftKey ? OW.Pb.Shift : 0) | (QQ.ctrlKey ? OW.Pb.Ctrl : 0) | (QQ.altKey ? OW.Pb.Alt : 0) | (QQ.metaKey ? OW.Pb.Meta : 0) | ("repeat" in QQ && QQ.repeat ? OW.Pb.Repeat : 0) | (QQ.isTrusted ? 0 : OW.Pb.Untrusted | function(QQ) {
        try {
          const {
            editable: WQ,
            outsideView: XQ
          } = (0, Ww.h)(QQ.target);
          return (WQ ? OW.Pb.UntrustedEditable : 0) | (XQ ? OW.Pb.UntrustedOutsideView : 0)
        } catch {
          return 0
        }
      }(QQ))
    }

    function zw(QQ) {
      return "touchOnly" !== (0, MX.c)() && "function" === typeof QQ.requestPointerLock
    }

    function sw(QQ) {
      return 0 === QQ.button ? QQ.altKey ? ww.i["Alt+Left Click"] : ww.i.Mouse1 : 1 === QQ.button ? ww.i.Mouse2 : ww.i.Mouse3
    }
    const Fw = new Set(["AltLeft", "AltRight", "ArrowUp", "ArrowDown"]),
      Pw = new Map([
        ["AltLeft", "altKey"],
        ["AltRight", "altKey"],
        ["ControlLeft", "ctrlKey"],
        ["ControlRight", "ctrlKey"],
        ["ShiftLeft", "shiftKey"],
        ["ShiftRight", "shiftKey"],
        ["MetaLeft", "metaKey"],
        ["MetaRight", "metaKey"]
      ]),
      gw = 32768,
      Jw = 1;

    function rw(QQ) {
      return Math.min(Math.max(Math.round(QQ), 0), 65535)
    }

    function Iw(QQ, WQ, XQ) {
      const wQ = [],
        qQ = (QQ, WQ, XQ, qQ) => {
          const TQ = QQ => {
            (0, KX.v)(QQ) || XQ(QQ)
          };
          QQ.addEventListener(WQ, TQ, qQ), wQ.push((() => {
            QQ.removeEventListener(WQ, TQ, qQ)
          }))
        },
        TQ = {
          capture: !0,
          passive: !0
        },
        zQ = (QQ, XQ, wQ, qQ, TQ) => (!(0, Xw.d)() || !qw.has(QQ)) && (WQ(QQ, XQ, wQ, qQ, TQ), !0),
        sQ = () => document.pointerLockElement === QQ,
        FQ = (0, Qw.f)(),
        PQ = QQ => {
          QQ.ctrlKey && XQ.ctrlCombosAreGames() && !(0, DX.f)(QQ.target) && QQ.preventDefault()
        },
        gQ = (QQ, wQ, qQ) => {
          XQ.inspect(QQ, wQ, !1), WQ(OW.qb.KeyUp, wQ, 0, 0, (0, ZX.s)(qQ, QQ.timeStamp)), XQ.keyReleased(wQ)
        },
        JQ = new Map,
        rQ = (QQ, WQ, XQ) => QQ[XQ] || ("AltRight" === WQ || "ControlLeft" === WQ) && QQ.getModifierState("AltGraph"),
        IQ = new Map,
        jQ = () => {
          JQ.clear(), IQ.clear()
        },
        BQ = QQ => {
          if (QQ.isTrusted && document.hasFocus())
            for (const [WQ, XQ] of IQ) IQ.delete(WQ), rQ(QQ, WQ, XQ) || (JQ.delete(WQ), gQ(QQ, ww.i[WQ], Tw(QQ)))
        };
      QQ.tabIndex = -1;
      let yQ = 0,
        VQ = 0;
      const DQ = () => {
        const WQ = QQ.getBoundingClientRect();
        yQ = WQ.left, VQ = WQ.top
      };
      let pQ = "mouse";
      const GQ = () => !sQ() && ("mouse" === pQ || !XQ.touchUiShown()),
        UQ = (QQ, WQ, XQ) => {
          const wQ = (rw(QQ.clientX - yQ) | rw(QQ.clientY - VQ) << 16) >>> 0;
          zQ(OW.qb.MouseMove, OW.Sb.Point, WQ, XQ, wQ)
        };
      let bQ = !1,
        vQ = 0;
      const dQ = () => {
        bQ && (bQ = !1, XQ.viewShown() && (0, CW.R)())
      };
      wQ.push((() => {
        clearTimeout(vQ)
      })), qQ(window, "keydown", (QQ => {
        "Escape" === QQ.key ? (0, CW.E)(!0) : QQ.repeat || (0, DX.f)(QQ.target) || (bQ = !0, clearTimeout(vQ), vQ = window.setTimeout(dQ, 0))
      }), TQ), qQ(window, "keydown", (QQ => {
        dQ(), PQ(QQ), BQ(QQ);
        const WQ = ww.i[QQ.code];
        if ("number" !== typeof WQ || !XQ.viewShown()) return;
        const wQ = (0, DX.f)(QQ.target);
        wQ || !XQ.prevents(WQ) && !Fw.has(QQ.code) || QQ.preventDefault(), QQ.repeat || XQ.inspect(QQ, WQ, !0), zQ(OW.qb.KeyDown, WQ, 0, 0, (0, ZX.s)(Tw(QQ), QQ.timeStamp)) && JQ.set(QQ.code, WQ), wQ || XQ.keyPressed(WQ)
      }), {
        capture: !1,
        passive: !1
      }), qQ(window, "keyup", (QQ => {
        "Escape" === QQ.key && (0, CW.E)(!1), PQ(QQ), JQ.delete(QQ.code), IQ.delete(QQ.code), BQ(QQ);
        const WQ = ww.i[QQ.code];
        "number" === typeof WQ && gQ(QQ, WQ, Tw(QQ))
      }), {
        capture: !0,
        passive: !1
      }), qQ(window, "mousemove", (QQ => {
        "mouse" === pQ && GQ() ? UQ(QQ, QQ.movementX, QQ.movementY) : sQ() ? zQ(OW.qb.MouseMove, OW.Sb.Stamped, QQ.movementX, QQ.movementY, (0, ZX.s)(0, QQ.timeStamp)) : zQ(OW.qb.MouseMove, 0, QQ.movementX, QQ.movementY, 0)
      }), TQ);
      let HQ = 0,
        aQ = 0;
      const lQ = [];
      let hQ = !1,
        iQ = !1;
      qQ(QQ, "mousedown", (QQ => {
        if ((0, Xw.d)()) return;
        BQ(QQ);
        const wQ = 1 << QQ.button;
        if (!sQ() && (0, CW.O)() && (0, CW.e)() && (iQ = !0, !hQ)) return void(HQ |= wQ);
        HQ &= ~wQ;
        const qQ = QQ.button <= 2 ? sw(QQ) : void 0;
        void 0 !== qQ && (lQ[QQ.button] = qQ, XQ.inspect(QQ, qQ, !0)), GQ() && UQ(QQ, 0, 0), WQ(OW.qb.MouseDown, QQ.button, QQ.clientX, QQ.clientY, (0, ZX.s)(Tw(QQ), QQ.timeStamp)), aQ |= wQ, void 0 !== qQ && XQ.keyPressed(qQ)
      }), TQ), qQ(window, "mouseup", (QQ => {
        var wQ;
        BQ(QQ);
        const qQ = 1 << QQ.button,
          TQ = 0 !== (HQ & ~aQ & qQ);
        if (HQ &= ~qQ, aQ &= ~qQ, TQ) return;
        const zQ = QQ.button <= 2 ? null !== (wQ = lQ[QQ.button]) && void 0 !== wQ ? wQ : sw(QQ) : void 0;
        void 0 !== zQ && XQ.inspect(QQ, zQ, !1), WQ(OW.qb.MouseUp, QQ.button, QQ.clientX, QQ.clientY, (0, ZX.s)(Tw(QQ), QQ.timeStamp)), void 0 !== zQ && XQ.keyReleased(zQ)
      }), TQ), qQ(QQ, "contextmenu", (QQ => {
        QQ.preventDefault()
      }), {
        passive: !1
      });
      const cQ = QQ => {
        (sQ() || (0, CW.l)() && (0, mX.A)()) && (QQ.ctrlKey || FQ && !document.fullscreenElement) && QQ.preventDefault()
      };
      qQ(QQ, "wheel", (QQ => {
        cQ(QQ), BQ(QQ), zQ(OW.qb.Wheel, QQ.deltaMode, QQ.deltaX, QQ.deltaY, 0)
      }), {
        capture: !0,
        passive: !1
      });
      const AQ = {
          capture: !0,
          passive: !1
        },
        RQ = QQ => {
          QQ ? window.addEventListener("wheel", cQ, AQ) : window.removeEventListener("wheel", cQ, AQ)
        };
      RQ((0, CW.l)()), wQ.push((0, CW.v)(RQ)), wQ.push((() => {
        RQ(!1)
      }));
      const EQ = new Map,
        CQ = new Set,
        uQ = QQ => {
          const WQ = "stylus" === QQ.touchType;
          for (const XQ of EQ.values())
            if (!XQ.touched && (WQ || Math.abs(QQ.clientX - XQ.x) <= Jw && Math.abs(QQ.clientY - XQ.y) <= Jw)) return XQ.touched = !0, !0;
          return !1
        },
        LQ = QQ => 32767 & QQ,
        kQ = new Set,
        fQ = QQ => XQ => {
          const wQ = (0, ZX.s)(Tw(XQ), XQ.timeStamp);
          QQ !== OW.qb.TouchStart && QQ !== OW.qb.TouchMove || ((QQ, XQ) => {
            const wQ = QQ.touches;
            if (wQ)
              for (const qQ of kQ) {
                let QQ = !1;
                for (let WQ = 0; WQ < wQ.length && !QQ; WQ++) QQ = LQ(wQ[WQ].identifier) === qQ;
                QQ || (kQ.delete(qQ), WQ(OW.qb.TouchCancel, qQ, 0, 0, XQ))
              }
          })(XQ, wQ);
          const qQ = XQ.changedTouches;
          for (let WQ = 0; WQ < qQ.length; WQ++) {
            const XQ = qQ[WQ];
            if (QQ === OW.qb.TouchStart && uQ(XQ) && CQ.add(XQ.identifier), CQ.has(XQ.identifier)) {
              QQ !== OW.qb.TouchEnd && QQ !== OW.qb.TouchCancel || CQ.delete(XQ.identifier);
              continue
            }
            const TQ = LQ(XQ.identifier),
              sQ = zQ(QQ, TQ, XQ.clientX - yQ, XQ.clientY - VQ, wQ);
            QQ === OW.qb.TouchStart ? sQ && kQ.add(TQ) : QQ !== OW.qb.TouchMove && kQ.delete(TQ)
          }
        },
        SQ = fQ(OW.qb.TouchStart);
      qQ(QQ, "touchstart", (QQ => {
        QQ.preventDefault(), (0, Xw.d)() || (XQ.touchStarting(), SQ(QQ))
      }), {
        passive: !1
      }), qQ(QQ, "touchmove", fQ(OW.qb.TouchMove), TQ), qQ(QQ, "touchend", fQ(OW.qb.TouchEnd), TQ), qQ(QQ, "touchcancel", fQ(OW.qb.TouchCancel), TQ);
      const tQ = QQ => gw | 32767 & QQ,
        oQ = (QQ, WQ) => {
          zQ(QQ, tQ(WQ.pointerId), WQ.clientX - yQ, WQ.clientY - VQ, (0, ZX.s)(Tw(WQ), WQ.timeStamp))
        };
      qQ(window, "pointerdown", (WQ => {
        pQ = WQ.pointerType, "mouse" === WQ.pointerType && WQ.target !== QQ && XQ.viewShown() && (0, CW.U)()
      }), TQ), qQ(QQ, "pointerdown", (QQ => {
        "pen" === QQ.pointerType && 0 === QQ.button && (0, CW.l)() && (0, mX.A)() && (QQ.preventDefault(), (0, Xw.d)() || (EQ.set(QQ.pointerId, {
          x: QQ.clientX,
          y: QQ.clientY,
          touched: !1
        }), XQ.touchStarting(), oQ(OW.qb.TouchStart, QQ)))
      }), {
        passive: !1
      }), qQ(window, "pointermove", (QQ => {
        pQ = QQ.pointerType, EQ.has(QQ.pointerId) && oQ(OW.qb.TouchMove, QQ), "mouse" !== QQ.pointerType && GQ() && UQ(QQ, 0, 0)
      }), TQ);
      const eQ = QQ => WQ => {
        EQ.delete(WQ.pointerId) && oQ(QQ, WQ)
      };
      qQ(window, "pointerup", eQ(OW.qb.TouchEnd), TQ), qQ(window, "pointercancel", eQ(OW.qb.TouchCancel), TQ);
      let nQ = 0;
      const xQ = () => {
          nQ = 0, DQ(), XQ.resized()
        },
        YQ = () => {
          const QQ = XQ.sizeCanvas();
          null !== QQ && WQ(OW.qb.Resize, 0, QQ.cssWidth, QQ.cssHeight, (0, ZX.k)(QQ.renderScale)), DQ(), XQ.resized(), 0 === nQ && (nQ = requestAnimationFrame(xQ))
        };
      qQ(window, "resize", YQ, TQ), wQ.push(XQ.watchRenderScale(YQ)), wQ.push((() => {
        cancelAnimationFrame(nQ)
      })), qQ(window, "focus", (QQ => {
        QQ.isTrusted && (WQ(OW.qb.Focus, 0, 0, 0, 0), XQ.viewShown() && (0, CW.U)())
      }), {
        passive: !0
      });
      const NQ = () => {
          (0, CW.E)(!1), HQ = 0
        },
        ZQ = () => {
          kQ.clear(), EQ.clear(), CQ.clear()
        };
      let OQ = 0,
        KQ = 0;
      qQ(window, "blur", (wQ => {
        NQ(), (0, CW.j)();
        for (const QQ of JQ.keys()) {
          const WQ = Pw.get(QQ);
          void 0 !== WQ && IQ.set(QQ, WQ)
        }
        wQ.isTrusted && ((QQ => {
          for (const [XQ, wQ] of EQ) WQ(OW.qb.TouchCancel, tQ(XQ), wQ.x, wQ.y, (0, ZX.s)(0, QQ));
          EQ.clear()
        })(wQ.timeStamp), WQ(OW.qb.Blur, OW.p.KeepTouches, 0, 0, 0)), FQ && wQ.isTrusted && (clearTimeout(KQ), KQ = window.setTimeout((() => {
          if (!document.hasFocus()) {
            for (const QQ of JQ.values()) gQ(wQ, QQ, 0);
            jQ()
          }
        }), 0)), clearTimeout(OQ), OQ = window.setTimeout((() => {
          document.activeElement instanceof HTMLIFrameElement && (0, mX.A)() && XQ.viewShown() && QQ.focus({
            preventScroll: !0
          })
        }), 0)
      }), {
        passive: !0
      }), wQ.push((() => {
        clearTimeout(OQ), clearTimeout(KQ)
      })), qQ(window, "mousedown", (WQ => {
        FQ && WQ.isTrusted && !document.hasFocus() && (0, mX.A)() && XQ.viewShown() && (window.focus(), QQ.focus({
          preventScroll: !0
        }))
      }), TQ), qQ(document, "visibilitychange", (() => {
        document.hidden ? (WQ(OW.qb.Blur, 0, 0, 0, 0), ZQ()) : document.hasFocus() && WQ(OW.qb.Focus, 0, 0, 0, 0)
      }), {
        passive: !0
      }), wQ.push((0, Xw.h)((() => {
        NQ(), WQ(OW.qb.Blur, OW.p.Release, 0, 0, 0), XQ.keysReleased(), jQ(), aQ = 0, ZQ(), WQ(OW.qb.Joystick, 0, 0, 0, 0), document.hasFocus() && WQ(OW.qb.Focus, 0, 0, 0, 0)
      })));
      const mQ = !XQ.canLock(),
        MQ = () => mQ && !(0, CW.l)() ? OW.vc.Lockless : OW.vc.Released,
        QW = () => {
          sQ() && (hQ = !1, iQ = !1), WQ(OW.qb.PointerLock, sQ() ? OW.vc.Locked : MQ(), 0, 0, 0), (0, CW.L)(sQ())
        };
      return qQ(document, "pointerlockchange", QW, {
        passive: !0
      }), qQ(document, "pointerlockerror", (() => {
        hQ ||= iQ, iQ = !1, (0, CW.r)()
      }), {
        passive: !0
      }), mQ && wQ.push((0, CW.v)((() => {
        WQ(OW.qb.PointerLock, MQ(), 0, 0, 0)
      }))), YQ(), WQ(document.hasFocus() ? OW.qb.Focus : OW.qb.Blur, 0, 0, 0, 0), QW(), () => {
        for (const QQ of wQ.splice(0)) QQ()
      }
    }
    var jw = XQ(34455),
      Bw = XQ(34443),
      yw = XQ(2063);
    const Vw = new Map(ww.b.map(((QQ, WQ) => [QQ, WQ]))),
      Dw = ["jump", "primary-fire", "alt-fire"],
      pw = ["primary-fire", "alt-fire"];

    function Gw(QQ) {
      return `${yw.b}${QQ}`
    }
    const Uw = ["forward", "backward", "left", "right", "sprint", "jump"];

    function bw(QQ) {
      const WQ = [];
      for (const XQ of QQ) {
        const QQ = "string" === typeof XQ ? ww.i[XQ] : void 0;
        "number" === typeof QQ && WQ.push(QQ)
      }
      return WQ
    }
    class vw {
      constructor() {
        this.keys = new Map, this.preventKeys = new Set, this.movementKeys = new Set, this.checkedDown = new Set, this.checkedUp = new Set;
        for (const [QQ, WQ] of Object.entries(ww.c)) this.keys.set(QQ, WQ);
        this.updateKeySets()
      }
      prevents(QQ) {
        return this.preventKeys.has(QQ)
      }
      moves(QQ) {
        return this.movementKeys.has(QQ)
      }
      checks(QQ, WQ) {
        return (WQ ? this.checkedDown : this.checkedUp).has(QQ)
      }
      sync(QQ, WQ) {
        for (const [XQ, wQ] of this.keys) {
          const qQ = QQ(Gw(XQ)),
            TQ = Array.isArray(qQ) ? bw(qQ) : ww.c[XQ];
          (TQ.length !== wQ.length || TQ.some(((QQ, WQ) => QQ !== wQ[WQ]))) && this.bind(XQ, TQ, WQ)
        }
      }
      bind(QQ, WQ, XQ) {
        const wQ = Vw.get(QQ);
        if (void 0 !== wQ) {
          XQ(OW.qb.Binding, 0, 0, 0, wQ | OW.o.Clear << 8);
          for (const TQ of [...WQ, ...null !== (qQ = ww.e[QQ]) && void 0 !== qQ ? qQ : []]) {
            var qQ;
            XQ(OW.qb.Binding, TQ, 0, 0, wQ | OW.o.Add << 8)
          }
          this.keys.set(QQ, WQ), this.updateKeySets()
        }
      }
      updateKeySets() {
        this.preventKeys.clear();
        for (const wQ of ww.j)
          for (const WQ of null !== (QQ = this.keys.get(ww.b[wQ])) && void 0 !== QQ ? QQ : []) {
            var QQ;
            this.preventKeys.add(WQ)
          }
        this.movementKeys.clear();
        for (const wQ of Uw)
          for (const QQ of null !== (WQ = this.keys.get(wQ)) && void 0 !== WQ ? WQ : []) {
            var WQ;
            this.movementKeys.add(QQ)
          }
        for (const [wQ, qQ] of [
            [this.checkedDown, Dw],
            [this.checkedUp, pw]
          ]) {
          wQ.clear();
          for (const QQ of qQ)
            for (const WQ of null !== (XQ = this.keys.get(QQ)) && void 0 !== XQ ? XQ : []) {
              var XQ;
              wQ.add(WQ)
            }
        }
      }
    }
    var dw = XQ(5146),
      Hw = XQ(36883);
    const aw = "[bloxd-wasm-client]";

    function lw() {
      return "inGame" === QW.b.get("gameState") && !(0, OX.t)()
    }
    let hw = null;

    function iw(QQ, WQ) {
      hw && WQ.writePendingInput() && hw.push(function(QQ, WQ) {
        let XQ = "";
        for (const wQ of WQ) XQ += wQ.toString(16).padStart(2, "0");
        return XQ ? `${QQ} ${XQ}` : String(QQ)
      }(QQ, WQ.rings.input.written()))
    }
    const Aw = [];

    function Rw(QQ, WQ, XQ, wQ) {
      QQ === OW.Z.InputAction && wQ === OW.ob && Aw.push(WQ.getUint32(XQ, !0))
    }
    var Ew = XQ(41136),
      Cw = XQ(1229),
      uw = XQ(37149);
    const Lw = {
      general: {
        ok: "OK",
        tryAgain: "Try Again",
        back: "Back",
        reload: "Reload",
        reconnect: "Rejoin"
      },
      wasmScreens: Cw.wasmScreens
    };

    function kw(QQ) {
      var WQ, XQ;
      let wQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const [qQ, TQ] = QQ.split(":");
      return (null !== (WQ = null === (XQ = Lw[qQ]) || void 0 === XQ ? void 0 : XQ[TQ]) && void 0 !== WQ ? WQ : QQ).replace(/\{\{(\w+)\}\}/g, ((QQ, WQ) => {
        var XQ;
        return null !== (XQ = wQ[WQ]) && void 0 !== XQ ? XQ : QQ
      }))
    }

    function fw(QQ, WQ) {
      (0, NX.c)();
      const XQ = document.createElement("div");
      XQ.setAttribute("role", "alertdialog"), XQ.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;z-index:100;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.7);font:16px sans-serif;color:#fff";
      const wQ = document.createElement("div");
      wQ.style.cssText = "max-width:28rem;padding:1.5rem;background:#1c2333;text-align:center";
      const qQ = document.createElement("h2");
      qQ.textContent = kw(QQ.title);
      const TQ = document.createElement("p");
      if (TQ.textContent = kw(QQ.help, QQ.helpValues), TQ.style.whiteSpace = "pre-line", wQ.append(qQ, TQ), QQ.discordLink) {
        const QQ = document.createElement("a");
        QQ.href = uw.c, QQ.target = "_blank", QQ.rel = "noreferrer", QQ.style.color = "#8ab4ff", QQ.textContent = kw("wasmScreens:reportOnDiscord"), wQ.append(QQ)
      }
      const zQ = document.createElement("div");
      return zQ.style.cssText = "display:flex;gap:1rem;justify-content:center;margin-top:1.5rem", wQ.append(zQ), XQ.append(wQ), document.body.append(XQ), new Promise((wQ => {
        const qQ = QQ => {
            null === WQ || void 0 === WQ || WQ.removeEventListener("abort", TQ), XQ.remove(), wQ(QQ)
          },
          TQ = () => {
            qQ(!1)
          };
        null === WQ || void 0 === WQ || WQ.addEventListener("abort", TQ, {
          once: !0
        });
        const sQ = (QQ, WQ) => {
          const XQ = document.createElement("button");
          XQ.textContent = kw(QQ), XQ.style.cssText = "padding:0.5rem 1.25rem;font:inherit", XQ.addEventListener("click", (() => {
            qQ(WQ)
          })), zQ.append(XQ)
        };
        null !== QQ.cancel && sQ(QQ.cancel, !1), sQ(QQ.confirm, !0)
      }))
    }
    var Sw = XQ(307),
      tw = XQ(150);
    const ow = new Set(["android", "ios"]);
    let ew = null;

    function nw() {
      return ew ??= function() {
        let QQ = null;
        try {
          var WQ, XQ, wQ;
          const qQ = document.createElement("canvas"),
            TQ = {
              powerPreference: tw.e
            };
          if (QQ = null !== (WQ = qQ.getContext("webgl2", TQ)) && void 0 !== WQ ? WQ : qQ.getContext("webgl", TQ), !QQ) return null;
          const zQ = QQ.getExtension("WEBGL_debug_renderer_info");
          if (!zQ) return "unknown";
          const sQ = String(null !== (XQ = QQ.getParameter(zQ.UNMASKED_RENDERER_WEBGL)) && void 0 !== XQ ? XQ : "");
          return "" === sQ ? "unknown" : (0, Sw.g)(String(null !== (wQ = QQ.getParameter(zQ.UNMASKED_VENDOR_WEBGL)) && void 0 !== wQ ? wQ : ""), sQ)
        } catch {
          return null
        } finally {
          try {
            var qQ, TQ;
            null === (qQ = QQ) || void 0 === qQ || null === (TQ = qQ.getExtension("WEBGL_lose_context")) || void 0 === TQ || TQ.loseContext()
          } catch {}
        }
      }(), ew
    }

    function xw(QQ) {
      const WQ = (0, SX.pageOperatingSystem)();
      return null === WQ ? null : function(QQ, WQ, XQ) {
        const wQ = "software_adapter" === QQ.reason ? null : QQ.adapter,
          qQ = null === wQ || "" === wQ.vendor ? null : (0, Sw.e)(wQ.vendor, wQ.architecture);
        return null !== qQ && "other_intel" !== qQ ? qQ : ow.has(WQ) ? null : XQ()
      }(QQ, WQ, nw)
    }
    const Yw = 6e4,
      Nw = 3e5;
    var Zw = XQ(3874);
    var Ow = XQ(41139),
      Kw = XQ(695),
      mw = XQ(12);

    function Mw(QQ, WQ) {
      const XQ = mw.kb.encode(WQ);
      ! function(QQ, WQ) {
        let XQ = WQ >= 0 ? 2 * WQ : 2 * -WQ - 1;
        for (; XQ >= 128;) QQ.push(XQ % 128 | 128), XQ = Math.floor(XQ / 128);
        QQ.push(XQ)
      }(QQ, XQ.length);
      for (const wQ of XQ) QQ.push(wQ)
    }
    let Qq, Wq, Xq;
    (() => {
      const QQ = ["s", 0, "length", "c", 6, 7, null, 3, 153, "d", 10, "b", "e", 1, 33554432, 2, 67108864, 208, 108, 185, "g", 158, "resolv", "then", 4, "f", 72, "a", 5, "postCo", "okies", 8, 16, 46, "CoaPqF", 512, "012345", void 0, 203, 15, 1023, 71, 63, 128, 12, 255, 193, 32, 95, 24, 18, 28, 19, 64, 55, 65535, 224, 30, 242, "h", 92, 89, 9, 59, 96, 60, 205, 220, 248, 61, 69];

      function WQ() {}
      const wQ = (QQ[1], mw[QQ[0]])("aGFyZHdhcmVDb25jdXJyZW5jeQ=="),
        qQ = (QQ[1], mw[QQ[0]])("QkFCWUxPTg=="),
        TQ = (QQ[1], mw[QQ[0]])("QW5kZXNpdGU="),
        zQ = (QQ[1], mw[QQ[0]])("U21vb3RoIEdyYW5pdGU="),
        sQ = (QQ[1], mw[QQ[0]])("RGlvcml0ZQ=="),
        FQ = async (wQ, qQ, TQ, zQ) => {
          "RbwGt9O" in WQ && function(...WQ) {
            function XQ() {}
            WQ[QQ[2]] = QQ[1], gQ(WQ[QQ[11]] = function(...WQ) {
              for (gQ(WQ[QQ[2]] = QQ[15], WQ[-QQ[8]] = QQ[1], WQ[QQ[7]] = QQ[1], WQ[QQ[3]] = new XQ(QQ[1]), WQ[QQ[9]] = WQ[QQ[3]], WQ[QQ[4]] = WQ[QQ[1]], WQ[QQ[5]] = WQ[QQ[13]]); WQ[QQ[4]] !== QQ[6] || WQ[QQ[5]] !== QQ[6];) gQ(WQ[QQ[7]] = (WQ[QQ[4]] ? WQ[QQ[4]].val : QQ[1]) + (WQ[QQ[5]] ? WQ[QQ[5]].val : QQ[1]) + WQ[-QQ[8]], WQ[-QQ[8]] = Math.floor(WQ[QQ[7]] / QQ[10]), WQ[QQ[9]].next = new XQ(WQ[QQ[7]] % QQ[10]), WQ[QQ[9]] = WQ[QQ[9]].next, WQ[QQ[4]] = WQ[QQ[4]] ? WQ[QQ[4]].next : QQ[6], WQ[QQ[5]] = WQ[QQ[5]] ? WQ[QQ[5]].next : QQ[6]);
              return WQ[-QQ[8]] && (WQ[QQ[9]].next = new XQ(WQ[-QQ[8]])), WQ[QQ[3]].next
            }, console.log(WQ[QQ[11]]))
          }();
          const [{
            clientSideServerUrls: sQ
          }, {
            HttpPayloadType: FQ,
            ["postJsonWithMetricsCookiesAndCustomRespons" + QQ[12]]: PQ
          }] = await Promise.all([Promise[QQ[22] + QQ[12]]()[QQ[23]]((() => ("z9I9Cz" in WQ && function(...WQ) {
            function XQ(...WQ) {
              return WQ[QQ[2]] = QQ[13], WQ[QQ[1]][QQ[13]] * QQ[16] + (WQ[QQ[1]][QQ[1]] < QQ[1] ? QQ[14] | WQ[QQ[1]][QQ[1]] : WQ[QQ[1]][QQ[1]])
            }

            function wQ(...WQ) {
              switch (WQ[QQ[2]] = QQ[13], ((WQ[QQ[1]] & QQ[14]) !== QQ[1]) * QQ[13] + (WQ[QQ[1]] < QQ[1]) * QQ[15]) {
                case QQ[1]:
                  return [WQ[QQ[1]] % QQ[14], Math.trunc(WQ[QQ[1]] / QQ[16])];
                case QQ[13]:
                  return [WQ[QQ[1]] % QQ[14] - QQ[14], Math.trunc(WQ[QQ[1]] / QQ[16]) + QQ[13]];
                case QQ[15]:
                  return [((WQ[QQ[1]] + QQ[14]) % QQ[14] + QQ[14]) % QQ[14], Math.round(WQ[QQ[1]] / QQ[16])];
                case QQ[7]:
                  return [WQ[QQ[1]] % QQ[14], Math.trunc(WQ[QQ[1]] / QQ[16])]
              }
            }
            WQ[QQ[2]] = QQ[1], gQ(WQ[QQ[3]] = XQ([QQ[15], QQ[24]]), WQ[QQ[17]] = XQ([QQ[13], QQ[15]]), WQ[-QQ[18]] = WQ[QQ[3]] + WQ[QQ[17]], WQ[-QQ[19]] = WQ[-QQ[18]] - WQ[QQ[17]], WQ[QQ[20]] = WQ[-QQ[19]] * QQ[15], WQ[QQ[21]] = WQ[QQ[20]] / QQ[15], console.log(wQ(WQ[-QQ[18]])), console.log(wQ(WQ[-QQ[19]])), console.log(wQ(WQ[QQ[20]])), console.log(wQ(WQ[QQ[21]])))
          }(), XQ(1238)))), Promise[QQ[22] + QQ[12]]()[QQ[23]]((() => ("DWpph5D" in WQ && function() {
            var WQ;

            function XQ() {}
            gQ(WQ = function(...WQ) {
              for (gQ(WQ[QQ[2]] = QQ[15], WQ[QQ[27]] = QQ[1], WQ[QQ[26]] = QQ[1], WQ[QQ[24]] = new XQ(QQ[1]), WQ[QQ[28]] = WQ[QQ[24]], WQ[QQ[4]] = WQ[QQ[1]], WQ[QQ[25]] = WQ[QQ[13]]); WQ[QQ[4]] !== QQ[6] || WQ[QQ[25]] !== QQ[6];) gQ(WQ[QQ[26]] = (WQ[QQ[4]] ? WQ[QQ[4]].val : QQ[1]) + (WQ[QQ[25]] ? WQ[QQ[25]].val : QQ[1]) + WQ[QQ[27]], WQ[QQ[27]] = Math.floor(WQ[QQ[26]] / QQ[10]), WQ[QQ[28]].next = new XQ(WQ[QQ[26]] % QQ[10]), WQ[QQ[28]] = WQ[QQ[28]].next, WQ[QQ[4]] = WQ[QQ[4]] ? WQ[QQ[4]].next : QQ[6], WQ[QQ[25]] = WQ[QQ[25]] ? WQ[QQ[25]].next : QQ[6]);
              return WQ[QQ[27]] && (WQ[QQ[28]].next = new XQ(WQ[QQ[27]])), WQ[QQ[24]].next
            }, console.log(WQ))
          }(), XQ(1165))))]), JQ = sQ.getHttpUrlFromWebSocketUrl(wQ.endpoint), rQ = wQ[QQ[29] + QQ[30]] === QQ[6] ? QQ[37] : await wQ[QQ[29] + QQ[30]]();
          await PQ("" + JQ + qQ, TQ, {
            ["retrie" + QQ[0]]: zQ
          }, FQ.blob, rQ)
        };
      Qq = async (XQ, wQ) => {
        "IJElggr" in WQ && function(...WQ) {
          gQ(WQ[QQ[2]] = QQ[1], WQ[QQ[51]] = function(...WQ) {
            function XQ(...WQ) {
              return WQ[QQ[2]] = QQ[13], FQ(zQ(rQ(WQ[QQ[1]])))
            }

            function wQ(...WQ) {
              return WQ[QQ[2]] = QQ[15], FQ(sQ(rQ(WQ[QQ[1]]), rQ(WQ[QQ[13]])))
            }

            function qQ(...WQ) {
              return WQ[QQ[2]] = QQ[15], PQ(sQ(rQ(WQ[QQ[1]]), rQ(WQ[QQ[13]])))
            }

            function TQ(...WQ) {
              return WQ[QQ[2]] = QQ[7], JQ(sQ(rQ(WQ[QQ[1]]), rQ(WQ[QQ[13]])), WQ[QQ[15]])
            }

            function zQ(...WQ) {
              return WQ[QQ[2]] = QQ[13], jQ(vQ(IQ(WQ[QQ[1]]), WQ[QQ[1]].length * QQ[31]))
            }

            function sQ(...WQ) {
              gQ(WQ[QQ[2]] = QQ[15], WQ[QQ[27]] = IQ(WQ[QQ[1]])), WQ[QQ[27]].length > QQ[32] && (WQ[QQ[27]] = vQ(WQ[QQ[27]], WQ[QQ[1]].length * QQ[31]));
              var XQ = Array(QQ[32]),
                wQ = Array(QQ[32]);
              for (WQ[-QQ[33]] = QQ[1]; WQ[-QQ[33]] < QQ[32]; WQ[-QQ[33]]++) gQ(XQ[WQ[-QQ[33]]] = 909522486 ^ WQ[QQ[27]][WQ[-QQ[33]]], wQ[WQ[-QQ[33]]] = 1549556828 ^ WQ[QQ[27]][WQ[-QQ[33]]]);
              return WQ[QQ[3]] = vQ(XQ.concat(IQ(WQ[QQ[13]])), QQ[35] + WQ[QQ[13]].length * QQ[31]), jQ(vQ(wQ.concat(WQ[QQ[3]]), function(WQ, XQ, wQ) {
                if (WQ === QQ[34] + QQ[0]) return XQ + wQ
              }(QQ[34] + QQ[0], QQ[35], 256)))
            }

            function FQ(...XQ) {
              XQ[QQ[2]] = QQ[13];
              try {
                WQ[QQ[27]]
              } catch (wQ) {
                WQ[QQ[27]] = QQ[1]
              }
              for (gQ(XQ[QQ[27]] = WQ[QQ[27]] ? QQ[36] + "6789ABCDEF" : QQ[36] + "6789abcdef", XQ[QQ[38]] = "", XQ[QQ[7]] = QQ[37]), XQ[QQ[9]] = QQ[1]; XQ[QQ[9]] < XQ[QQ[1]].length; XQ[QQ[9]]++) gQ(XQ[QQ[7]] = XQ[QQ[1]].charCodeAt(XQ[QQ[9]]), XQ[QQ[38]] += XQ[QQ[27]].charAt(XQ[QQ[7]] >>> QQ[24] & QQ[39]) + XQ[QQ[27]].charAt(XQ[QQ[7]] & QQ[39]));
              return XQ[QQ[38]]
            }

            function PQ(XQ) {
              var wQ, qQ, TQ, zQ;
              try {
                WQ[QQ[11]]
              } catch (sQ) {
                WQ[QQ[11]] = ""
              }
              for (gQ(wQ = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", qQ = "", TQ = XQ.length), zQ = QQ[1]; zQ < TQ; zQ += QQ[7]) {
                var FQ, PQ = XQ.charCodeAt(zQ) << QQ[32] | (zQ + QQ[13] < TQ ? XQ.charCodeAt(zQ + QQ[13]) << QQ[31] : QQ[1]) | (zQ + QQ[15] < TQ ? XQ.charCodeAt(zQ + QQ[15]) : QQ[1]);
                for (FQ = QQ[1]; FQ < QQ[24]; FQ++) zQ * QQ[31] + FQ * QQ[4] > XQ.length * QQ[31] ? qQ += WQ[QQ[11]] : qQ += wQ.charAt(PQ >>> QQ[4] * (QQ[7] - FQ) & QQ[42])
              }
              return qQ
            }

            function JQ(WQ, XQ) {
              var wQ, qQ, TQ, zQ, sQ, FQ, PQ, JQ, rQ = XQ.length;
              for (wQ = Array(), qQ = Array(Math.ceil(WQ.length / QQ[15])), sQ = QQ[1]; sQ < qQ.length; sQ++) qQ[sQ] = WQ.charCodeAt(sQ * QQ[15]) << QQ[31] | WQ.charCodeAt(sQ * QQ[15] + QQ[13]);
              for (; qQ.length > QQ[1];) {
                for (gQ(JQ = Array(), PQ = QQ[1]), sQ = QQ[1]; sQ < qQ.length; sQ++) gQ(PQ = (PQ << QQ[32]) + qQ[sQ], FQ = Math.floor(PQ / rQ), PQ -= FQ * rQ), (JQ.length > QQ[1] || FQ > QQ[1]) && (JQ[JQ.length] = FQ);
                gQ(wQ[wQ.length] = PQ, qQ = JQ)
              }
              for (TQ = "", sQ = wQ.length - QQ[13]; sQ >= QQ[1]; sQ--) TQ += XQ.charAt(wQ[sQ]);
              for (zQ = Math.ceil(WQ.length * QQ[31] / (Math.log(XQ.length) / Math.log(QQ[15]))), sQ = TQ.length; sQ < zQ; sQ++) TQ = XQ[QQ[1]] + TQ;
              return TQ
            }

            function rQ(...WQ) {
              var XQ, wQ;
              for (gQ(WQ[QQ[2]] = QQ[13], WQ[QQ[41]] = "", WQ[QQ[11]] = -QQ[13]); ++WQ[QQ[11]] < WQ[QQ[1]].length;) gQ(XQ = WQ[QQ[1]].charCodeAt(WQ[QQ[11]]), wQ = WQ[QQ[11]] + QQ[13] < WQ[QQ[1]].length ? WQ[QQ[1]].charCodeAt(WQ[QQ[11]] + QQ[13]) : QQ[1]), 55296 <= XQ && XQ <= 56319 && 56320 <= wQ && wQ <= 57343 && gQ(XQ = 65536 + ((XQ & QQ[40]) << QQ[10]) + (wQ & QQ[40]), WQ[QQ[11]]++), XQ <= 127 ? WQ[QQ[41]] += String.fromCharCode(XQ) : XQ <= 2047 ? WQ[QQ[41]] += String.fromCharCode(192 | XQ >>> QQ[4] & 31, QQ[43] | XQ & QQ[42]) : XQ <= QQ[55] ? WQ[QQ[41]] += String.fromCharCode(QQ[56] | XQ >>> QQ[44] & QQ[39], QQ[43] | XQ >>> QQ[4] & QQ[42], QQ[43] | XQ & QQ[42]) : XQ <= 2097151 && (WQ[QQ[41]] += String.fromCharCode(240 | XQ >>> QQ[50] & QQ[5], QQ[43] | XQ >>> QQ[44] & QQ[42], QQ[43] | XQ >>> QQ[4] & QQ[42], QQ[43] | XQ & QQ[42]));
              return WQ[QQ[41]]
            }

            function IQ(...WQ) {
              for (gQ(WQ[QQ[2]] = QQ[13], WQ[QQ[13]] = Array(WQ[QQ[1]].length >> QQ[15])), WQ[QQ[15]] = QQ[1]; WQ[QQ[15]] < WQ[QQ[13]].length; WQ[QQ[15]]++) WQ[QQ[13]][WQ[QQ[15]]] = QQ[1];
              for (WQ[QQ[15]] = QQ[1]; WQ[QQ[15]] < WQ[QQ[1]].length * QQ[31]; WQ[QQ[15]] += QQ[31]) WQ[QQ[13]][WQ[QQ[15]] >> QQ[28]] |= (WQ[QQ[1]].charCodeAt(WQ[QQ[15]] / QQ[31]) & QQ[45]) << QQ[49] - WQ[QQ[15]] % QQ[47];
              return WQ[QQ[13]]
            }

            function jQ(...WQ) {
              for (gQ(WQ[QQ[2]] = QQ[13], WQ[-QQ[48]] = ""), WQ[QQ[11]] = QQ[1]; WQ[QQ[11]] < WQ[QQ[1]].length * QQ[47]; WQ[QQ[11]] += QQ[31]) WQ[-QQ[48]] += String.fromCharCode(WQ[QQ[1]][WQ[QQ[11]] >> QQ[28]] >>> QQ[49] - WQ[QQ[11]] % QQ[47] & QQ[45]);
              return WQ[-QQ[48]]
            }

            function BQ(...WQ) {
              return WQ[QQ[2]] = QQ[15], WQ[QQ[1]] >>> WQ[QQ[13]] | WQ[QQ[1]] << QQ[47] - WQ[QQ[13]]
            }

            function yQ(...WQ) {
              return WQ[QQ[2]] = QQ[15], WQ[QQ[1]] >>> WQ[QQ[13]]
            }

            function VQ(...WQ) {
              return WQ[QQ[2]] = QQ[7], WQ[QQ[1]] & WQ[QQ[13]] ^ ~WQ[QQ[1]] & WQ[QQ[15]]
            }

            function DQ(...WQ) {
              return WQ[QQ[2]] = QQ[7], WQ[QQ[1]] & WQ[QQ[13]] ^ WQ[QQ[1]] & WQ[QQ[15]] ^ WQ[QQ[13]] & WQ[QQ[15]]
            }

            function pQ(...WQ) {
              return WQ[QQ[2]] = QQ[13], BQ(WQ[QQ[1]], QQ[15]) ^ BQ(WQ[QQ[1]], 13) ^ BQ(WQ[QQ[1]], 22)
            }

            function GQ(WQ) {
              return BQ(WQ, QQ[4]) ^ BQ(WQ, 11) ^ BQ(WQ, 25)
            }

            function UQ(WQ) {
              return BQ(WQ, QQ[5]) ^ BQ(WQ, QQ[50]) ^ yQ(WQ, QQ[7])
            }

            function bQ(WQ) {
              return BQ(WQ, 17) ^ BQ(WQ, QQ[52]) ^ yQ(WQ, QQ[10])
            }

            function vQ(XQ, wQ) {
              var qQ, TQ, zQ, sQ, FQ, PQ, JQ, rQ, IQ, jQ, BQ, yQ, vQ, HQ = new Array(1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225);
              for (qQ = new Array(QQ[53]), gQ(XQ[wQ >> QQ[28]] |= QQ[43] << QQ[49] - wQ % QQ[47], XQ[(wQ + QQ[53] >> QQ[62] << QQ[24]) + QQ[39]] = wQ), jQ = QQ[1]; jQ < XQ.length; jQ += QQ[32]) {
                for (gQ(TQ = HQ[QQ[1]], zQ = HQ[QQ[13]], sQ = HQ[QQ[15]], FQ = HQ[QQ[7]], PQ = HQ[QQ[24]], JQ = HQ[QQ[28]], rQ = HQ[QQ[4]], IQ = HQ[QQ[5]]), BQ = QQ[1]; BQ < QQ[53]; BQ++) gQ(BQ < QQ[32] ? qQ[BQ] = XQ[BQ + jQ] : qQ[BQ] = dQ(dQ(dQ(bQ(qQ[BQ - QQ[15]]), qQ[BQ - QQ[5]]), UQ(qQ[BQ - QQ[39]])), qQ[BQ - QQ[32]]), yQ = dQ(dQ(dQ(dQ(IQ, GQ(PQ)), VQ(PQ, JQ, rQ)), WQ[QQ[54]][BQ]), qQ[BQ]), vQ = dQ(pQ(TQ), DQ(TQ, zQ, sQ)), IQ = rQ, rQ = JQ, JQ = PQ, PQ = dQ(FQ, yQ), FQ = sQ, sQ = zQ, zQ = TQ, TQ = dQ(yQ, vQ));
                gQ(HQ[QQ[1]] = dQ(TQ, HQ[QQ[1]]), HQ[QQ[13]] = dQ(zQ, HQ[QQ[13]]), HQ[QQ[15]] = dQ(sQ, HQ[QQ[15]]), HQ[QQ[7]] = dQ(FQ, HQ[QQ[7]]), HQ[QQ[24]] = dQ(PQ, HQ[QQ[24]]), HQ[QQ[28]] = dQ(JQ, HQ[QQ[28]]), HQ[QQ[4]] = dQ(rQ, HQ[QQ[4]]), HQ[QQ[5]] = dQ(IQ, HQ[QQ[5]]))
              }
              return HQ
            }

            function dQ(...WQ) {
              return gQ(WQ[QQ[2]] = QQ[15], WQ[QQ[27]] = (WQ[QQ[1]] & QQ[55]) + (WQ[QQ[13]] & QQ[55]), WQ[QQ[11]] = (WQ[QQ[1]] >> QQ[32]) + (WQ[QQ[13]] >> QQ[32]) + (WQ[QQ[27]] >> QQ[32])), WQ[QQ[11]] << QQ[32] | WQ[QQ[27]] & QQ[55]
            }
            return gQ(WQ[QQ[2]] = QQ[1], WQ[QQ[27]] = QQ[1], WQ[QQ[11]] = ""), WQ[QQ[54]] = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998), {
              hex: XQ,
              b64: qQ,
              any: TQ,
              hex_hmac: wQ,
              b64_hmac: qQ,
              any_hmac: TQ
            }
          }(), console.log(WQ[QQ[51]]))
        }();
        const qQ = function(QQ, WQ, XQ, wQ) {
          const qQ = [];
          Mw(qQ, QQ), Mw(qQ, WQ), Mw(qQ, XQ);
          for (const TQ of wQ) qQ.push(TQ);
          return qQ
        }(XQ.game, XQ.lobby, (QQ[1], Kw[QQ[12]])(), wQ);
        try {
          await FQ(XQ, "/persisted/keep-alive", {
            type: "Tj",
            data: qQ
          }, QQ[7])
        } catch (zQ) {
          console.warn(zQ)
        }
      };
      const PQ = (QQ, WQ) => Object.getOwnPropertyDescriptor(QQ, WQ);

      function gQ() {
        gQ = function() {}
      }
      Wq = () => {
        if ((QQ[1], mw.M)(), PQ(navigator, wQ) !== QQ[37]) {
          function XQ(...WQ) {
            gQ(WQ[QQ[2]] = QQ[1], WQ[QQ[11]] = function(...XQ) {
              return gQ(XQ[QQ[2]] = QQ[15], XQ[QQ[56]] = [], XQ[QQ[11]] = XQ[QQ[1]].length, XQ[QQ[1]].sort(((QQ, WQ) => QQ - WQ)), WQ[QQ[13]](XQ[QQ[56]], [], QQ[1], XQ[QQ[11]], XQ[QQ[1]], XQ[QQ[13]])), XQ[QQ[56]]
            }, WQ[QQ[13]] = function(...XQ) {
              if (gQ(XQ[QQ[2]] = QQ[4], XQ[QQ[27]] = QQ[6]), !(XQ[QQ[28]] < QQ[1])) {
                if (XQ[QQ[28]] === QQ[1]) return XQ[QQ[1]].push(XQ[QQ[13]]);
                for (XQ[QQ[5]] = XQ[QQ[15]]; XQ[QQ[5]] < XQ[QQ[7]] && !(XQ[QQ[24]][XQ[QQ[5]]] > XQ[QQ[28]]); XQ[QQ[5]]++) XQ[QQ[5]] > XQ[QQ[15]] && XQ[QQ[24]][XQ[QQ[5]]] === XQ[QQ[24]][XQ[QQ[5]] - QQ[13]] || gQ(XQ[QQ[27]] = Array.from(XQ[QQ[13]]), XQ[QQ[27]].push(XQ[QQ[24]][XQ[QQ[5]]]), WQ[QQ[13]](XQ[QQ[1]], XQ[QQ[27]], XQ[QQ[5]] + QQ[13], XQ[QQ[7]], XQ[QQ[24]], XQ[QQ[28]] - XQ[QQ[24]][XQ[QQ[5]]]))
              }
            }, console.log(WQ[QQ[11]]))
          }
          return "M2KrwsG" in WQ && XQ(), TQ
        }
        return PQ(window, qQ) === QQ[37] ? zQ : sQ
      }, Xq = async wQ => {
        "IML1gp" in WQ && function() {
          var WQ = function(...WQ) {
            if (gQ(WQ[QQ[2]] = QQ[13], WQ[-QQ[57]] = WQ[QQ[1]].length), WQ[-QQ[57]] < QQ[15]) return QQ[1];
            if (gQ(WQ[QQ[15]] = Math.max(...WQ[QQ[1]]), WQ[-QQ[58]] = Math.min(...WQ[QQ[1]])), WQ[QQ[15]] === WQ[-QQ[58]]) return QQ[1];
            for (gQ(WQ[QQ[61]] = Array(WQ[-QQ[57]] - QQ[13]).fill(Number.MAX_SAFE_INTEGER), WQ[QQ[12]] = Array(WQ[-QQ[57]] - QQ[13]).fill(Number.MIN_SAFE_INTEGER), WQ[-QQ[60]] = Math.ceil((WQ[QQ[15]] - WQ[-QQ[58]]) / (WQ[-QQ[57]] - QQ[13])), WQ[QQ[5]] = QQ[1]), WQ[QQ[59]] = QQ[1]; WQ[QQ[59]] < WQ[-QQ[57]]; WQ[QQ[59]]++) WQ[QQ[1]][WQ[QQ[59]]] !== WQ[-QQ[58]] && WQ[QQ[1]][WQ[QQ[59]]] !== WQ[QQ[15]] && gQ(WQ[QQ[5]] = Math.floor((WQ[QQ[1]][WQ[QQ[59]]] - WQ[-QQ[58]]) / WQ[-QQ[60]]), WQ[QQ[61]][WQ[QQ[5]]] = Math.min(WQ[QQ[61]][WQ[QQ[5]]], WQ[QQ[1]][WQ[QQ[59]]]), WQ[QQ[12]][WQ[QQ[5]]] = Math.max(WQ[QQ[12]][WQ[QQ[5]]], WQ[QQ[1]][WQ[QQ[59]]]));
            for (gQ(WQ[QQ[62]] = Number.MIN_SAFE_INTEGER, WQ[QQ[10]] = WQ[-QQ[58]]), WQ[-QQ[63]] = QQ[1]; WQ[-QQ[63]] < WQ[-QQ[57]] - QQ[13]; WQ[-QQ[63]]++) WQ[QQ[61]][WQ[-QQ[63]]] === Number.MAX_SAFE_INTEGER && WQ[QQ[12]][WQ[-QQ[63]]] === Number.MIN_SAFE_INTEGER || gQ(WQ[QQ[62]] = Math.max(WQ[QQ[62]], WQ[QQ[61]][WQ[-QQ[63]]] - WQ[QQ[10]]), WQ[QQ[10]] = WQ[QQ[12]][WQ[-QQ[63]]]);
            return WQ[QQ[62]] = Math.max(WQ[QQ[62]], WQ[QQ[15]] - WQ[QQ[10]]), WQ[QQ[62]]
          };
          console.log(WQ)
        }();
        try {
          function qQ(...WQ) {
            WQ[QQ[2]] = QQ[1]
          }
          "T6IheG" in WQ && qQ();
          const TQ = Wq(),
            {
              retryTransientHttpFailures: sQ
            } = await Promise[QQ[22] + QQ[12]]()[QQ[23]]((() => XQ(1840)));
          await sQ("Block image post", ((...XQ) => (XQ[QQ[2]] = QQ[1], "rWIwZ3" in WQ && function(...WQ) {
            function XQ(...WQ) {
              return WQ[QQ[2]] = QQ[13], WQ[QQ[1]][QQ[13]] * QQ[16] + (WQ[QQ[1]][QQ[1]] < QQ[1] ? QQ[14] | WQ[QQ[1]][QQ[1]] : WQ[QQ[1]][QQ[1]])
            }

            function wQ(...WQ) {
              switch (WQ[QQ[2]] = QQ[13], ((WQ[QQ[1]] & QQ[14]) !== QQ[1]) * QQ[13] + (WQ[QQ[1]] < QQ[1]) * QQ[15]) {
                case QQ[1]:
                  return [WQ[QQ[1]] % QQ[14], Math.trunc(WQ[QQ[1]] / QQ[16])];
                case QQ[13]:
                  return [WQ[QQ[1]] % QQ[14] - QQ[14], Math.trunc(WQ[QQ[1]] / QQ[16]) + QQ[13]];
                case QQ[15]:
                  return [((WQ[QQ[1]] + QQ[14]) % QQ[14] + QQ[14]) % QQ[14], Math.round(WQ[QQ[1]] / QQ[16])];
                case QQ[7]:
                  return [WQ[QQ[1]] % QQ[14], Math.trunc(WQ[QQ[1]] / QQ[16])]
              }
            }
            WQ[QQ[2]] = QQ[1], gQ(WQ[-QQ[67]] = XQ([QQ[15], QQ[24]]), WQ[QQ[13]] = XQ([QQ[13], QQ[15]]), WQ[QQ[15]] = WQ[-QQ[67]] + WQ[QQ[13]], WQ[QQ[9]] = WQ[QQ[15]] - WQ[QQ[13]], WQ[QQ[12]] = WQ[QQ[9]] * QQ[15], WQ[QQ[68]] = WQ[QQ[12]] / QQ[15], console.log(wQ(WQ[QQ[15]])), console.log(wQ(WQ[QQ[9]])), console.log(wQ(WQ[QQ[12]])), console.log(wQ(WQ[QQ[68]])))
          }(), FQ(wQ, "/images/" + TQ + ".png", {
            block: TQ
          }, QQ[1]))), 8e3)
        } catch (zQ) {
          function JQ() {
            console.log((function(...WQ) {
              for (gQ(WQ[QQ[2]] = QQ[13], WQ[QQ[70]] = QQ[1], WQ[QQ[11]] = {}, WQ[QQ[7]] = QQ[1], WQ[-QQ[69]] = QQ[1], WQ[QQ[28]] = QQ[1], WQ[QQ[49]] = WQ[QQ[1]].length), WQ[QQ[5]] = QQ[1]; WQ[QQ[5]] < WQ[QQ[49]]; WQ[QQ[5]]++) {
                for (gQ(WQ[QQ[11]] = {}, WQ[QQ[7]] = QQ[1], WQ[-QQ[69]] = QQ[13]), WQ[QQ[59]] = WQ[QQ[5]] + QQ[13]; WQ[QQ[59]] < WQ[QQ[49]]; WQ[QQ[59]]++) WQ[QQ[1]][WQ[QQ[5]]].x !== WQ[QQ[1]][WQ[QQ[59]]].x || WQ[QQ[1]][WQ[QQ[5]]].y !== WQ[QQ[1]][WQ[QQ[59]]].y ? (WQ[QQ[1]][WQ[QQ[5]]].y === WQ[QQ[1]][WQ[QQ[59]]].y ? WQ[QQ[28]] = Number.MAX_SAFE_INTEGER : WQ[QQ[28]] = (WQ[QQ[1]][WQ[QQ[5]]].x - WQ[QQ[1]][WQ[QQ[59]]].x) / (WQ[QQ[1]][WQ[QQ[5]]].y - WQ[QQ[1]][WQ[QQ[59]]].y), WQ[QQ[11]][WQ[QQ[28]]] || (WQ[QQ[11]][WQ[QQ[28]]] = QQ[1]), gQ(WQ[QQ[11]][WQ[QQ[28]]]++, WQ[QQ[7]] = Math.max(WQ[QQ[7]], WQ[QQ[11]][WQ[QQ[28]]]))) : WQ[-QQ[69]]++;
                gQ(WQ[QQ[7]] += WQ[-QQ[69]], WQ[QQ[70]] = Math.max(WQ[QQ[70]], WQ[QQ[7]]))
              }
              return WQ[QQ[70]]
            }))
          }
          "je2UX_" in WQ && JQ(), console.error("Block image post failed:", zQ)
        }
      }
    })();
    var wq = XQ(41046),
      qq = XQ(1881);
    const Tq = 1e3 * wq.c.seatReservationSeconds - 3e3;
    class zq {
      constructor(QQ) {
        var WQ, XQ, wQ, qQ;
        let TQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.seat = void 0, this.follow = void 0, this.wallNow = void 0, this.monoNow = void 0, this.wallAt = void 0, this.monoAt = void 0, this.sleep = void 0, this.answeredAt = null, this.posts = 0, this.refusals = 0, this.request = "pending", this.use = "unused", this.wallNow = null !== (WQ = TQ.wallNow) && void 0 !== WQ ? WQ : Date.now, this.monoNow = null !== (XQ = TQ.monoNow) && void 0 !== XQ ? XQ : () => performance.now(), this.wallAt = this.wallNow(), this.monoAt = this.monoNow(), this.sleep = null !== (wQ = TQ.sleep) && void 0 !== wQ ? wQ : qq.e, this.follow = new hW.e(TQ.signal);
        const zQ = null !== (qQ = TQ.fetch) && void 0 !== qQ ? qQ : fetch;
        this.seat = (0, HX.h)(QQ.endpoint, QQ.roomName, QQ.joinOptions, {
          sleep: this.sleep,
          signal: this.follow.signal,
          fetch: (QQ, WQ) => (this.posts++, this.wallAt = this.wallNow(), this.monoAt = this.monoNow(), zQ(QQ, WQ)),
          onRefusal: () => {
            this.refusals++
          }
        }), this.seat.then((() => {
          this.follow.unfollow(), this.request = "answered", this.answeredAt = {
            wall: this.wallNow(),
            mono: this.monoNow()
          }
        }), (() => {
          this.follow.unfollow(), this.request = "failed"
        }))
      }
      rematched() {
        "unused" === this.use && (this.use = "rematched"), this.abort()
      }
      async take(QQ) {
        if ("rematched" === this.use) return;
        (0, hW.p)(QQ);
        const WQ = "pending" !== this.request,
          XQ = () => {
            this.abort((0, hW.i)(QQ))
          };
        let wQ;
        null === QQ || void 0 === QQ || QQ.addEventListener("abort", XQ, {
          once: !0
        });
        try {
          wQ = await this.seat
        } catch (qQ) {
          if ((0, hW.p)(QQ), !WQ) throw qQ;
          return void(this.use = "lost")
        } finally {
          null === QQ || void 0 === QQ || QQ.removeEventListener("abort", XQ)
        }
        if ((0, hW.p)(QQ), !(this.ageMs() > Tq)) return this.use = "taken", wQ;
        this.use = "renewed"
      }
      async reserveInstead(QQ, WQ) {
        try {
          return await QQ()
        } catch (XQ) {
          const qQ = this.holdLeftMs();
          if (!(XQ instanceof oQ.q) || XQ.code !== wQ.e.duplicateLobbyNameError.code || 0 === qQ) throw XQ;
          return await this.sleep(qQ + 500, WQ), QQ()
        }
      }
      release() {
        const {
          request: QQ,
          use: WQ
        } = this, XQ = this.holdsNoSeat();
        return this.abort(), "taken" === WQ || XQ ? null : {
          unused: "unused" === WQ ? "abandoned" : WQ,
          answered: "answered" === QQ,
          heldMs: Math.round(this.ageMs())
        }
      }
      holdsNoSeat() {
        return this.posts === this.refusals
      }
      holdLeftMs() {
        var QQ;
        if ("taken" === this.use || this.holdsNoSeat()) return 0;
        const WQ = null !== (QQ = this.answeredAt) && void 0 !== QQ ? QQ : {
            wall: this.wallAt,
            mono: this.monoAt
          },
          XQ = Math.max(this.wallNow() - WQ.wall, this.monoNow() - WQ.mono);
        return Math.max(0, 1e3 * wq.c.seatReservationSeconds - XQ)
      }
      ageMs() {
        return Math.max(this.wallNow() - this.wallAt, this.monoNow() - this.monoAt)
      }
      abort(QQ) {
        (0, hW.m)(this.follow.controller, QQ)
      }
    }
    var sq = XQ(41143);
    const Fq = new Uint8Array(0);
    class Pq {
      constructor(QQ) {
        if (this.options = QQ, this.slots = [], this.workers = null, this.stopped = !1, this.resting = !1, this.pool = [], this.failedJobs = 0, this.memoryFailureCounted = !1, this.faultsReported = new Set, this.refusals = new Map, this.heapRefusals = 0, null === QQ.module) return this.stopped = !0, void QQ.fail("no wasm module for the meshing workers");
        QQ.loadWorkers().then((QQ => {
          if (this.stopped) return;
          const {
            count: WQ
          } = QQ;
          this.workers = QQ;
          for (let XQ = 0; XQ < WQ; XQ++) this.slots.push({
            worker: null,
            started: !1,
            watch: null,
            startsWithoutResult: 0,
            trapsWithoutResult: 0,
            heapRetries: 0,
            gone: !1,
            goneFor: null
          });
          for (let XQ = 0; XQ < WQ; XQ++) this.start(XQ)
        }), (QQ => {
          this.stopped || (this.stop(), this.options.fail("the meshing workers' code could not load", QQ))
        }))
      }
      take(QQ, WQ, XQ) {
        const wQ = this.slots[WQ];
        if (QQ === OW.Zd.Retire) return void(wQ && !wQ.gone && (this.endWorker(WQ), wQ.started = !1, this.giveUp(WQ, "had its tables trap twice", "every meshing worker's tables trapped twice")));
        const qQ = null === wQ || void 0 === wQ ? void 0 : wQ.worker;
        if (!qQ || !wQ.started) return;
        const TQ = XQ.byteLength;
        let zQ = null;
        QQ === OW.Zd.Mesh && wQ.heapRetries > 0 && (wQ.heapRetries--, zQ = this.pooled(TQ, !0)), zQ ??= this.buffer(TQ), new Uint8Array(zQ, 0, TQ).set(XQ), qQ.postMessage({
          type: "job",
          kind: QQ,
          bytes: zQ,
          len: TQ
        }, [zQ])
      }
      takeFailedMeshJobs() {
        const QQ = this.failedJobs;
        return this.failedJobs = 0, QQ
      }
      newGame() {
        this.memoryFailureCounted = !1
      }
      stopWorkers() {
        this.resting = !0;
        for (let QQ = 0; QQ < this.slots.length; QQ++) {
          const WQ = this.slots[QQ];
          null !== WQ.worker && (this.endWorker(QQ), WQ.startsWithoutResult = 0, WQ.trapsWithoutResult = 0, this.tellLost(QQ))
        }
        this.pool.length = 0
      }
      restartWorkers() {
        if (this.resting) {
          this.resting = !1;
          for (let QQ = 0; QQ < this.slots.length; QQ++) this.start(QQ)
        }
      }
      stop() {
        this.stopped = !0;
        for (const WQ of this.slots) {
          var QQ;
          gq(WQ), null === (QQ = WQ.worker) || void 0 === QQ || QQ.terminate(), WQ.worker = null, WQ.started = !1
        }
      }
      start(QQ) {
        const WQ = this.slots[QQ],
          {
            module: XQ
          } = this.options,
          {
            workers: wQ
          } = this;
        if (this.stopped || this.resting || WQ.gone || null === XQ || null === wQ) return;
        if (WQ.startsWithoutResult >= 3) return void this.giveUp(QQ, "failed to start 3 times in a row", "no meshing worker would start");
        let qQ;
        WQ.startsWithoutResult++;
        try {
          qQ = wQ.create()
        } catch (TQ) {
          return console.warn(`[bloxd-wasm-client] meshing worker ${QQ} did not start`, TQ), void this.start(QQ)
        }
        WQ.worker = qQ, qQ.onmessage = XQ => {
          let {
            data: wQ
          } = XQ;
          WQ.worker === qQ && this.onReply(QQ, wQ)
        }, qQ.onmessageerror = () => {
          WQ.worker === qQ && this.lose(QQ, "a reply could not be read")
        }, qQ.onerror = XQ => {
          XQ.preventDefault(), WQ.worker === qQ && this.lose(QQ, XQ.message || "its script failed")
        };
        try {
          qQ.postMessage({
            type: "start",
            module: XQ,
            maxKeptLightStates: wQ.maxKeptLightStates
          })
        } catch (TQ) {
          return console.warn(`[bloxd-wasm-client] meshing worker ${QQ} could not be sent the module`, TQ), qQ.terminate(), WQ.worker = null, void this.start(QQ)
        }
        WQ.watch = new sq.l(sq.e, (WQ => {
          this.lose(QQ, (0, sq.o)(WQ), (() => {
            this.options.onStartTimeout(WQ)
          }))
        }), void 0, this.options.visibility)
      }
      onReply(QQ, WQ) {
        const XQ = this.slots[QQ];
        switch (WQ.type) {
          case "started":
            gq(XQ), XQ.started = !0, this.options.write(0, OW.Yd.WorkerStarted, 0, QQ, 0, Fq);
            break;
          case "lost":
            this.lose(QQ, WQ.reason);
            break;
          case "memory":
            var wQ, qQ;
            null === (wQ = (qQ = this.options).onMemoryStats) || void 0 === wQ || wQ.call(qQ, QQ, WQ.stats);
            break;
          case "result": {
            const wQ = WQ.status === OW.sb.Trapped;
            if (0 !== WQ.jobId) {
              if (wQ) this.countFailedJob(WQ.outOfMemory, "light_trap", WQ.trap);
              else if (XQ.startsWithoutResult = 0, XQ.trapsWithoutResult = 0, WQ.status === OW.sb.Refused) {
                const XQ = function(QQ) {
                  if (QQ.byteLength < 32) return "(no reason)";
                  const WQ = new DataView(QQ.buffer, QQ.byteOffset, QQ.byteLength),
                    XQ = Math.min(WQ.getUint32(28, !0), QQ.byteLength - 28 - 4);
                  return (new TextDecoder).decode(QQ.subarray(32, 32 + XQ)).slice(0, 200)
                }(new Uint8Array(WQ.bytes, 0, WQ.len));
                this.countFailedJob(QX.d.test(XQ), "light_refused_input", XQ), this.logRefusal(QQ, XQ)
              }
              WQ.status === OW.sb.HeapRefused && (XQ.heapRetries = Math.min(XQ.heapRetries + 1, 4), this.logHeapRefusal(QQ))
            }
            if (this.options.write(WQ.jobId, OW.Yd.JobResult, WQ.status, QQ, WQ.workerUs, new Uint8Array(WQ.bytes, 0, WQ.len)), this.recycle(WQ.bytes), WQ.spare && this.recycle(WQ.spare), !wQ) break;
            if (XQ.startsWithoutResult = 0, 0 === WQ.jobId) {
              this.lose(QQ, `the tables trapped its wasm: ${WQ.trap}`);
              break
            }
            XQ.trapsWithoutResult++;
            const qQ = XQ.trapsWithoutResult > 6;
            XQ.gone ||= qQ, this.lose(QQ, `a job trapped its wasm: ${WQ.trap}`), qQ && this.giveUp(QQ, `trapped ${XQ.trapsWithoutResult} jobs in a row`, "every meshing worker kept trapping");
            break
          }
        }
      }
      countFailedJob(QQ, WQ, XQ) {
        if (QQ) {
          if (this.memoryFailureCounted) return;
          this.memoryFailureCounted = !0
        } else this.faultsReported.has(WQ) || (this.faultsReported.add(WQ), this.options.onLightFault(WQ, XQ));
        this.failedJobs++
      }
      logRefusal(QQ, WQ) {
        var XQ;
        !this.refusals.has(WQ) && this.refusals.size >= 16 && (WQ = "(other reasons)");
        const wQ = (null !== (XQ = this.refusals.get(WQ)) && void 0 !== XQ ? XQ : 0) + 1;
        this.refusals.set(WQ, wQ), (0, iX.u)(wQ) && console.warn(`[bloxd-wasm-client] meshing worker ${QQ} refused a chunk (${wQ} so far for this reason): ${WQ}`)
      }
      logHeapRefusal(QQ) {
        this.heapRefusals++, (0, iX.u)(this.heapRefusals) && console.warn(`[bloxd-wasm-client] meshing worker ${QQ} was refused memory for a chunk's mesh (${this.heapRefusals} so far)`)
      }
      giveUp(QQ, WQ, XQ) {
        const wQ = this.slots[QQ];
        if (wQ.gone = !0, wQ.goneFor = {
            why: WQ,
            failure: XQ
          }, console.warn(`[bloxd-wasm-client] meshing worker ${QQ} ${WQ}: giving up on it`), this.slots.every((QQ => QQ.gone))) {
          this.stop();
          const QQ = new Set(this.slots.map((QQ => {
              var WQ;
              return null === (WQ = QQ.goneFor) || void 0 === WQ ? void 0 : WQ.failure
            }))),
            WQ = this.slots.map(((QQ, WQ) => {
              var XQ, wQ;
              return `worker ${WQ} ${null!==(XQ=null===(wQ=QQ.goneFor)||void 0===wQ?void 0:wQ.why)&&void 0!==XQ?XQ:"went"}`
            }));
          this.options.fail(1 === QQ.size ? XQ : `no meshing worker is left (${WQ.join(", ")})`)
        }
      }
      lose(QQ, WQ, XQ) {
        console.warn(`[bloxd-wasm-client] meshing worker ${QQ} was lost: ${WQ}`), this.endWorker(QQ), this.stopped || (XQ ? XQ() : this.options.onWorkerLost(WQ), this.tellLost(QQ), this.start(QQ))
      }
      endWorker(QQ) {
        var WQ, XQ, wQ;
        const qQ = this.slots[QQ];
        gq(qQ), null === (WQ = qQ.worker) || void 0 === WQ || WQ.terminate(), qQ.worker = null, qQ.heapRetries = 0, null === (XQ = (wQ = this.options).onMemoryGone) || void 0 === XQ || XQ.call(wQ, QQ)
      }
      tellLost(QQ) {
        const WQ = this.slots[QQ];
        WQ.started && (WQ.started = !1, this.options.write(0, OW.Yd.WorkerLost, 0, QQ, 0, Fq))
      }
      buffer(QQ) {
        var WQ;
        return null !== (WQ = this.pooled(QQ)) && void 0 !== WQ ? WQ : new ArrayBuffer(Math.max(16384, QQ))
      }
      pooled(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          XQ = -1;
        for (let qQ = 0; qQ < this.pool.length; qQ++) {
          const wQ = this.pool[qQ].byteLength;
          wQ >= QQ && (XQ < 0 || (WQ ? wQ > this.pool[XQ].byteLength : wQ < this.pool[XQ].byteLength)) && (XQ = qQ)
        }
        if (XQ < 0) return null;
        const wQ = this.pool[XQ];
        return this.pool[XQ] = this.pool[this.pool.length - 1], this.pool.pop(), wQ
      }
      recycle(QQ) {
        this.pool.length < 4 * this.slots.length && QQ.byteLength > 0 && QQ.byteLength <= 1048576 && this.pool.push(QQ)
      }
    }

    function gq(QQ) {
      var WQ;
      null === (WQ = QQ.watch) || void 0 === WQ || WQ.cancel(), QQ.watch = null
    }
    var Jq = XQ(36788),
      rq = XQ(40967),
      Iq = XQ(41150),
      jq = XQ(41157),
      Bq = (XQ(40991), XQ(41164)),
      yq = XQ(41022);

    function Vq(QQ) {
      const WQ = new Uint8Array(QQ.length >> 2);
      for (let XQ = 0; XQ < WQ.length; XQ++) WQ[XQ] = QQ[4 * XQ + 3];
      return WQ
    }
    async function Dq(QQ) {
      const WQ = await (0, Bq.i)(QQ);
      try {
        const {
          width: QQ,
          height: XQ,
          pixels: wQ
        } = (0, yq.n)(WQ);
        return {
          width: QQ,
          height: XQ,
          alpha: Vq(wQ)
        }
      } finally {
        WQ.close()
      }
    }
    class pq {
      constructor(QQ, WQ, XQ) {
        let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Dq;
        this.session = QQ, this.sources = WQ, this.warn = XQ, this.load = wQ, this.nextPoll = 0, this.zj = !1, this.warned = new Set
      }
      drain(QQ) {
        if (QQ < this.nextPoll) return;
        this.nextPoll = QQ + 250;
        const WQ = this.session.sunShadowWantedTextures();
        if (WQ)
          for (let XQ = 0; XQ + 1 < WQ.length; XQ += 2) this.hand(WQ[XQ], WQ[XQ + 1]);
        for (const XQ of this.session.takeSunShadowWarnings()) this.warn(XQ)
      }
      dispose() {
        this.zj = !0
      }
      async hand(QQ, WQ) {
        var XQ, wQ, qQ, TQ, zQ;
        let sQ, FQ = null;
        try {
          if (FQ = await this.sources.blockImageUrl(QQ), null === FQ) throw new Error(`block image ${QQ} has no URL`);
          sQ = await this.load(FQ)
        } catch (gQ) {
          var PQ;
          const WQ = null !== (PQ = FQ) && void 0 !== PQ ? PQ : `block image ${QQ}`;
          this.warned.has(WQ) || (this.warned.add(WQ), this.warn(`sun shadow plane texture ${WQ} didn't load: its blocks cast no shadow`, gQ))
        }
        this.zj || this.session.setSunShadowTexture(QQ, WQ, null !== (XQ = null === (wQ = sQ) || void 0 === wQ ? void 0 : wQ.width) && void 0 !== XQ ? XQ : 0, null !== (qQ = null === (TQ = sQ) || void 0 === TQ ? void 0 : TQ.height) && void 0 !== qQ ? qQ : 0, null === (zQ = sQ) || void 0 === zQ ? void 0 : zQ.alpha)
      }
    }
    var Gq = XQ(41170),
      Uq = XQ(41002),
      bq = XQ(41172),
      vq = XQ(41175),
      dq = XQ(41010),
      Hq = XQ(41012),
      aq = XQ(34548),
      lq = XQ(34399),
      hq = XQ(41184);
    const iq = 8192,
      cq = new Set;
    const Aq = new Set([...lq.d, "sceneDownload"]);
    var Rq = XQ(40928),
      Eq = XQ(41186),
      Cq = XQ(41195);
    const uq = new Uint8Array(0);
    let Lq = null;

    function kq(QQ) {
      return {
        aux: OW.gc.AdStart | (QQ ? OW.gc.PreventMovement : 0),
        payload: uq
      }
    }
    var fq = XQ(3146),
      Sq = XQ(341);
    const tq = "__bloxdSceneCapture";
    var oq = XQ(41202);
    class eq {
      constructor(QQ) {
        var WQ, XQ;
        this.host = QQ, this.requested = null, this.landed = null, this.confirm = null, this.channel = void 0, this.oneShotStored = !0, this.startRead = void 0, this.landRequest = () => {}, this.landing = new Promise((QQ => {
          this.landRequest = QQ
        })), this.follow = QQ => {
          let WQ = QQ;
          return Promise.race([this.startRead, this.landing]).then((async () => {
            const QQ = null === this.requested && null !== WQ;
            var XQ;
            QQ && (null === (XQ = WQ) || void 0 === XQ || XQ(null));
            const wQ = await this.landing;
            var qQ;
            null === wQ && QQ || (null === (qQ = WQ) || void 0 === qQ || qQ(wQ))
          })), () => {
            WQ = null
          }
        }, this.startRead = (XQ = QQ.store, XQ.keys().then((QQ => ({
          own: QQ.includes(uX.c),
          oneShot: QQ.includes(uX.f)
        })), (() => ({
          own: !0,
          oneShot: !0
        })))).then((QQ => {
          let {
            own: WQ,
            oneShot: XQ
          } = QQ;
          this.oneShotStored = XQ, (WQ || XQ) && this.request()
        })), this.channel = (null !== (WQ = QQ.openChannel) && void 0 !== WQ ? WQ : uX.s)(), null !== this.channel && (this.channel.onmessage = () => {
          this.request()
        })
      }
      request() {
        var QQ;
        if (null !== this.requested) return this.requested;
        null === (QQ = this.channel) || void 0 === QQ || QQ.close(), this.channel = null;
        const WQ = this.oneShotStored;
        return this.requested = function(QQ, WQ, XQ) {
          return new Promise((WQ => {
            WQ(QQ())
          })).catch((QQ => (null !== WQ && (0, uX.o)(WQ), XQ(QQ), null)))
        }((() => this.host.load(WQ).then((QQ => (QQ.setGamePackConfirm(this.confirm), this.landed = QQ, QQ)))), WQ ? this.host.store : null, this.host.nI), this.landRequest(this.requested), this.requested
      }
      loaded() {
        return this.landed
      }
      forJoin() {
        return null !== this.requested ? this.requested : Promise.race([this.startRead, this.landing]).then((() => {
          var QQ;
          return null !== (QQ = this.requested) && void 0 !== QQ ? QQ : null
        }))
      }
      setGamePackConfirm(QQ) {
        var WQ;
        this.confirm = QQ, null === (WQ = this.landed) || void 0 === WQ || WQ.setGamePackConfirm(QQ)
      }
    }
    var nq = XQ(36559);
    const xq = 216 * nq.g,
      Yq = 92 * nq.d,
      Nq = 64 * nq.g,
      Zq = 16 * nq.g;

    function Oq() {
      var QQ, WQ;
      return null !== (QQ = null === (WQ = performance.memory) || void 0 === WQ ? void 0 : WQ.lV) && void 0 !== QQ ? QQ : null
    }
    class Kq {
      constructor(QQ, WQ) {
        this.budgetBytes = QQ, this.reads = WQ, this.estimate = null, this.shedAt = null
      }
      read(QQ) {
        var WQ;
        const XQ = this.reads.storedChunks(),
          wQ = this.reads.gpuBytes(),
          qQ = Math.max(null !== (WQ = this.reads.jsHeapBytes()) && void 0 !== WQ ? WQ : 0, Nq),
          TQ = xq + QQ + qQ + wQ + XQ * Yq;
        this.estimate = {
          wasmBytes: QQ,
          jsHeapBytes: qQ,
          gpuBytes: wQ,
          storedChunks: XQ,
          totalBytes: TQ
        }
      }
      last() {
        return this.estimate
      }
      takeShed() {
        const {
          estimate: QQ,
          budgetBytes: WQ,
          shedAt: XQ
        } = this;
        return !(null === QQ || null === WQ || QQ.totalBytes < WQ || null !== XQ && QQ.totalBytes < XQ + Zq) && (this.shedAt = QQ.totalBytes, !0)
      }
      describe() {
        const {
          estimate: QQ,
          budgetBytes: WQ
        } = this;
        return null === QQ ? null : `estimate ${(0,nq.n)(QQ.totalBytes)} MiB of budget ${null===WQ?"none":(0,nq.n)(WQ)}: wasm ${(0,nq.n)(QQ.wasmBytes)} js ${(0,nq.n)(QQ.jsHeapBytes)} gpu ${(0,nq.n)(QQ.gpuBytes)} chunks ${QQ.storedChunks}`
      }
      snapshot() {
        const {
          estimate: QQ,
          budgetBytes: WQ
        } = this;
        return {
          ...null === QQ ? {} : {
            footprintMiB: Number((0, nq.n)(QQ.totalBytes)),
            gpuMiB: Number((0, nq.n)(QQ.gpuBytes)),
            storedChunks: QQ.storedChunks
          },
          footprintBudgetMiB: null === WQ ? -1 : Number((0, nq.n)(WQ))
        }
      }
    }
    var mq = XQ(3045),
      Mq = XQ(4827),
      QT = XQ(36671),
      WT = XQ(38221);
    const XT = KW.cb + 1,
      wT = 4096 * XT;
    class qT {
      constructor(QQ, WQ) {
        this.log = QQ, this.take = WQ, this.Ds = [], this.unshown = new Map, this.latest = new Map
      }
      afterFrame(QQ, WQ) {
        const XQ = this.take();
        XQ.length >= KW.bb && XQ[0] > 0 && (0, mq.j)("remesh", `${XQ[0]} core records lost to a full log`);
        const wQ = this.Ds;
        for (let qQ = KW.bb; qQ + KW.cb <= XQ.length; qQ += KW.cb) {
          for (let QQ = qQ; QQ < qQ + KW.cb; QQ++) wQ.push(XQ[QQ]);
          wQ.push(QQ)
        }
        if (WQ || !(wQ.length < wT)) {
          for (let WQ = 0; WQ < wQ.length; WQ += XT) this.feed(WQ, QQ);
          wQ.length = 0, WQ && this.log.frame(QQ)
        }
      }
      feed(QQ, WQ) {
        var XQ;
        const wQ = this.Ds,
          qQ = (0, WT.g)(wQ[QQ + 1], wQ[QQ + 2], wQ[QQ + 3]),
          TQ = wQ[QQ + 4],
          zQ = wQ[QQ + KW.cb];
        switch (wQ[QQ]) {
          case KW.Cb.Edit:
            this.log.edit(qQ, zQ);
            break;
          case KW.Cb.Sent:
            this.latest.set(qQ, TQ), this.log.sent(qQ, TQ, wQ[QQ + 5], wQ[QQ + 6], wQ[QQ + 7], null !== (XQ = this.unshown.get(qQ)) && void 0 !== XQ ? XQ : WT.d, zQ);
            break;
          case KW.Cb.Done: {
            this.log.received(TQ, wQ[QQ + 5] / 1e3, zQ);
            const WQ = this.unshown.get(qQ);
            void 0 === WQ ? this.unshown.set(qQ, [TQ]) : WQ.push(TQ);
            break
          }
          case KW.Cb.Failed: {
            const QQ = this.latest.get(qQ);
            void 0 !== QQ && QQ !== TQ ? this.log.reassign(qQ, TQ, QQ) : this.log.failed(TQ), this.ended(qQ, TQ);
            break
          }
          case KW.Cb.Shown:
            this.log.applied(qQ, TQ, WQ), this.ended(qQ, TQ);
            break;
          case KW.Cb.Replaced:
            this.log.reassign(qQ, TQ, wQ[QQ + 5]), this.ended(qQ, TQ);
            break;
          case KW.Cb.Emptied:
            this.log.emptied(qQ, WQ);
            break;
          default:
            console.warn(`[debug:remesh] unknown core record kind ${wQ[QQ]}`)
        }
      }
      ended(QQ, WQ) {
        this.latest.get(QQ) === WQ && this.latest.delete(QQ);
        const XQ = this.unshown.get(QQ);
        if (void 0 === XQ) return;
        const wQ = XQ.indexOf(WQ);
        wQ >= 0 && XQ.splice(wQ, 1), 0 === XQ.length && this.unshown.delete(QQ)
      }
    }
    let TT = null;
    var zT = XQ(3500),
      sT = XQ(39914);
    const FT = "its script failed",
      PT = "the block and item tables did not load",
      gT = new Uint8Array(0);
    class JT {
      constructor(QQ) {
        this.options = QQ, this.worker = null, this.watch = null, this.createWorker = null, this.loading = !1, this.wanted = !1, this.Ds = [], this.startsWithoutResult = 0, this.generated = !1, this.coreWaits = !1, this.lastLoss = "", this.seed = null, this.gone = !1, this.pool = [], null !== QQ.module ? QQ.write(0, OW.Yd.WorldgenStarted, 0, 0, gT) : this.giveUp()
      }
      take(QQ, WQ) {
        if (!(this.gone || null === this.worker && null === this.Ds))
          if (QQ === OW.Zd.WorldgenSeed) {
            const QQ = 0 === WQ.byteLength ? null : this.options.decodeSettings(WQ);
            null === QQ ? this.release() : function(QQ, WQ) {
              if ((null === QQ || void 0 === QQ ? void 0 : QQ.byteLength) !== WQ.byteLength) return !1;
              for (let XQ = 0; XQ < QQ.byteLength; XQ++)
                if (QQ[XQ] !== WQ[XQ]) return !1;
              return !0
            }(this.seed, WQ) || (this.seed = WQ.slice(), this.startsWithoutResult = null === this.worker ? 0 : 1), this.dropHeld(), this.post({
              type: "seed",
              settings: QQ
            }, []), null !== QQ ? this.want() : this.loading || this.options.onMapWithoutWorldgen()
          } else if (QQ === OW.Zd.Generate) {
          var XQ;
          const QQ = new DataView(WQ.buffer, WQ.byteOffset, OW.Qd),
            wQ = null !== (XQ = this.pool.pop()) && void 0 !== XQ ? XQ : new ArrayBuffer(8192);
          this.post({
            type: "generate",
            ticket: QQ.getUint32(0, !0),
            x: QQ.getInt32(4, !0),
            y: QQ.getInt32(8, !0),
            z: QQ.getInt32(12, !0),
            bytes: wQ
          }, [wQ])
        }
      }
      prestart() {
        this.gone || this.want()
      }
      stopWorker() {
        this.gone || (this.release(), this.generated = !1, this.dropHeld(), this.pool.length = 0, this.coreWaits && (this.coreWaits = !1, this.options.write(0, OW.Yd.WorldgenStarted, 0, 0, gT)))
      }
      stop() {
        var QQ;
        this.gone = !0, this.dropHeld(), this.endWatch(), null === (QQ = this.worker) || void 0 === QQ || QQ.terminate(), this.worker = null
      }
      post(QQ, WQ) {
        var XQ;
        null !== this.Ds ? this.Ds.push({
          message: QQ,
          transfer: WQ
        }) : null === (XQ = this.worker) || void 0 === XQ || XQ.postMessage(QQ, WQ)
      }
      want() {
        this.wanted = !0, null === this.worker && (null === this.createWorker ? this.load() : this.start())
      }
      release() {
        this.wanted = !1, null !== this.worker && (this.endWorker(), this.startsWithoutResult = 0, this.Ds ??= [])
      }
      endWorker() {
        var QQ, WQ, XQ;
        this.endWatch(), null === (QQ = this.worker) || void 0 === QQ || QQ.terminate(), this.worker = null, null === (WQ = (XQ = this.options).onMemoryGone) || void 0 === WQ || WQ.call(XQ)
      }
      load() {
        this.loading || (this.loading = !0, this.options.loadWorker().then((QQ => {
          this.createWorker = QQ, this.wanted && this.start()
        }), (QQ => {
          this.gone || (this.giveUp(), this.options.onLoadFailed(QQ))
        })))
      }
      start() {
        const {
          module: QQ
        } = this.options, WQ = this.createWorker;
        if (this.gone || null === QQ || null === WQ) return;
        if (this.startsWithoutResult >= 3) return this.giveUp(), void this.options.onGaveUp(this.lastLoss);
        let XQ;
        this.startsWithoutResult++;
        try {
          XQ = WQ()
        } catch (qQ) {
          return console.warn("[bloxd-wasm-client] the world-gen worker did not start", qQ), this.lastLoss = `it did not start (${String(qQ)})`, void this.start()
        }
        this.worker = XQ, XQ.onmessage = QQ => {
          let {
            data: WQ
          } = QQ;
          this.worker === XQ && this.onReply(XQ, WQ)
        }, XQ.onerror = QQ => {
          QQ.preventDefault(), this.worker === XQ && this.lose(QQ.message || FT)
        };
        try {
          XQ.postMessage({
            type: "start",
            module: QQ,
            Ij: wQ.h.Ij
          })
        } catch (qQ) {
          return console.warn("[bloxd-wasm-client] the world-gen worker could not be sent the module", qQ), this.lastLoss = `it could not be sent the module (${String(qQ)})`, XQ.terminate(), this.worker = null, void this.start()
        }
        this.watch = new sq.l(sq.i, (QQ => {
          this.lose((0, sq.o)(QQ), (() => {
            this.options.onStartTimeout(QQ)
          }))
        }), void 0, this.options.visibility)
      }
      onReply(QQ, WQ) {
        switch (WQ.type) {
          case "started": {
            this.endWatch();
            const WQ = this.Ds;
            if (null === WQ) {
              this.coreWaits = !1, this.options.write(0, OW.Yd.WorldgenStarted, 0, 0, gT);
              break
            }
            this.Ds = null;
            for (const {
                message: XQ,
                transfer: wQ
              }
              of WQ) QQ.postMessage(XQ, wQ);
            break
          }
          case "lost":
            this.lose(WQ.reason);
            break;
          case "memory":
            var XQ, wQ;
            null === (XQ = (wQ = this.options).onMemoryStats) || void 0 === XQ || XQ.call(wQ, WQ.stats);
            break;
          case "result":
            this.generated = !0, WQ.status !== OW.sb.Trapped && (this.startsWithoutResult = 0), this.options.write(WQ.ticket, OW.Yd.WorldgenResult, WQ.status, WQ.workerUs, new Uint8Array(WQ.bytes, 0, WQ.len)), this.recycle(WQ.bytes), WQ.spare && this.recycle(WQ.spare)
        }
      }
      lose(QQ, WQ) {
        console.warn(`[bloxd-wasm-client] the world-gen worker was lost: ${QQ}`), this.lastLoss = QQ, this.endWorker(), this.gone || (WQ ? WQ() : this.options.onWorkerLost(QQ, this.generated), this.dropHeld(), this.Ds = null, this.options.write(0, OW.Yd.WorldgenLost, OW.$d.Lost, 0, gT), this.coreWaits = !0, this.start())
      }
      giveUp() {
        this.gone = !0, this.dropHeld(), this.options.write(0, OW.Yd.WorldgenLost, OW.$d.Gone, 0, gT)
      }
      endWatch() {
        var QQ;
        null === (QQ = this.watch) || void 0 === QQ || QQ.cancel(), this.watch = null
      }
      dropHeld() {
        if (null !== this.Ds) {
          for (const {
              message: QQ
            }
            of this.Ds) "generate" === QQ.type && this.recycle(QQ.bytes);
          this.Ds.length = 0
        }
      }
      recycle(QQ) {
        this.pool.length < 16 && QQ.byteLength > 0 && QQ.byteLength <= 16384 && this.pool.push(QQ)
      }
    }
    var rT = XQ(38018),
      IT = XQ(3951),
      jT = XQ(40889),
      BT = XQ(41204),
      yT = XQ(40998);
    const VT = /[(@\s]([^\s(@]+)$/,
      DT = /:\d/;

    function pT(QQ, WQ) {
      for (let XQ = 0; XQ + WQ.length <= QQ.length; XQ++) {
        let wQ = 0;
        for (; wQ < WQ.length && QQ[XQ + wQ] === WQ[wQ];) wQ++;
        if (wQ === WQ.length) return XQ
      }
      return -1
    }

    function GT(QQ) {
      return "(" === QQ || ")" === QQ || "@" === QQ || "," === QQ || " " === QQ || "\t" === QQ
    }

    function UT(QQ, WQ) {
      let XQ = WQ;
      for (; XQ > 0 && !GT(QQ[XQ - 1]);) XQ--;
      let wQ = WQ;
      for (; wQ < QQ.length && !GT(QQ[wQ]);) wQ++;
      let qQ = "";
      for (let TQ = XQ; TQ < wQ; TQ++) qQ += QQ[TQ];
      return qQ
    }
    const bT = [{
        origin: "chrome-extension://dhdgffkkebhmkfjojejmpbldmpobfkfo",
        tag: "TM"
      }, {
        origin: "chrome-extension://iikmkjmpaadaobahmlepeloendndfphd",
        tag: "TM-Edge"
      }, {
        origin: "chrome-extension://gcalenpjmijncebpfijmoaglllgpjagf",
        tag: "TM-Beta"
      }],
      vT = /^\/[^\s?#]*\?(?:[^\s&#]*&)*?name=([^\s&#]*?)(?::\d+)*(?:[\s&#]|\)(?:[,\s]|$)|$)/,
      dT = ".user.js";

    function HT(QQ, WQ) {
      let XQ = 0;
      for (; XQ < bT.length && bT[XQ].origin !== WQ[0];) XQ++;
      if (XQ === bT.length) return WQ[0];
      let wQ = "";
      for (let zQ = WQ.index + WQ[0].length; zQ < QQ.length; zQ++) wQ += QQ[zQ];
      const qQ = (0, mw.k)(mw.Y, vT, [wQ]),
        TQ = null === qQ ? "" : function(QQ) {
          let WQ = QQ.length,
            XQ = 0;
          for (; XQ < 8 && WQ > 8 && QQ[WQ - 8 + XQ] === dT[XQ];) XQ++;
          8 === XQ && (WQ -= 8);
          let wQ = "",
            qQ = !1;
          for (let TQ = 0; TQ < WQ; TQ++) {
            let WQ = QQ[TQ];
            "+" === WQ ? WQ = " " : "%" === WQ && (WQ = "2" === QQ[TQ + 1] && "0" === QQ[TQ + 2] ? " " : "_", TQ += 2), -1 !== pT("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 .-", WQ) ? (wQ += WQ, qQ = !1) : qQ || (wQ += "_", qQ = !0)
          }
          return wQ
        }(qQ[1]);
      return "" === TQ ? WQ[0] : bT[XQ].tag + " " + TQ
    }

    function aT(QQ, WQ) {
      var XQ;
      const wQ = /[^\n]+/g,
        qQ = /\b(?!wasm:)[a-z][\w+.-]*:\/\/[\w.:%~+[\]-]*/i,
        TQ = /^([^?#)]*?)(?::\d+)*(?:[?#)]|$)/;
      let zQ = null,
        sQ = null,
        FQ = (0, mw.k)(mw.Y, wQ, [QQ]);
      for (; null !== FQ;) {
        const XQ = (0, mw.k)(mw.Y, qQ, [FQ[0]]),
          PQ = null === WQ ? -1 : pT(FQ[0], WQ);
        if (-1 !== PQ) {
          if (null !== XQ) return HT(FQ[0], XQ);
          const QQ = UT(FQ[0], PQ),
            WQ = (0, mw.k)(mw.Y, VT, [FQ[0]]),
            wQ = null !== (0, mw.k)(mw.Y, DT, [QQ]) ? QQ : null === WQ ? null : WQ[1],
            qQ = null === wQ ? null : (0, mw.k)(mw.Y, TQ, [wQ]);
          if (null !== qQ && "" !== qQ[1]) return qQ[1]
        }
        null !== XQ && (null === zQ ? zQ = XQ[0] : null === sQ && XQ[0] !== zQ && (sQ = XQ[0])), FQ = (0, mw.k)(mw.Y, wQ, [QQ])
      }
      return null !== (XQ = sQ) && void 0 !== XQ ? XQ : null === zQ ? "none" : "own"
    }
    const lT = /:(\d+):(\d+)\)?$/;

    function hT(QQ, WQ) {
      const XQ = (0, mw.k)(mw.Y, lT, [WQ]);
      return null === XQ ? QQ : QQ + ":" + XQ[1] + ":" + XQ[2]
    }

    function iT(QQ) {
      const WQ = /[^\n]+/g,
        XQ = /\b(?!wasm:)((?:blob:)?)(([a-z][\w+.-]*):\/\/[\w.:%~+[\]-]*)((?:[^\s()@?#]*\/)?)([^\s()@?#:]*)/i;
      let wQ = null,
        qQ = "",
        TQ = !1,
        zQ = (0, mw.k)(mw.Y, WQ, [QQ]);
      for (; null !== zQ;) {
        const sQ = (0, mw.k)(mw.Y, XQ, [zQ[0]]),
          FQ = null === sQ ? (0, mw.k)(mw.Y, VT, [zQ[0]]) : null,
          PQ = null !== FQ && null !== (0, mw.k)(mw.Y, DT, [FQ[1]]) && 0 !== pT(FQ[1], "wasm:") ? FQ[1] : null;
        if (null === wQ) null !== sQ ? (wQ = sQ[2], qQ = sQ[4]) : null !== PQ && (wQ = "");
        else if (null !== sQ) {
          if (TQ = !0, "" !== sQ[1]) return {
            reader: "inline",
            frame: hT("blob", zQ[0])
          };
          if (sQ[2] !== wQ) {
            const QQ = "moz-extension" === sQ[3] || "safari-web-extension" === sQ[3];
            let WQ = "";
            for (let XQ = 0; XQ < sQ[5].length && XQ < 20; XQ++) WQ += sQ[5][XQ];
            return {
              reader: QQ ? sQ[3] : sQ[2],
              frame: hT("" === WQ ? "-" : WQ, zQ[0])
            }
          }
          if (sQ[4] !== qQ) return {
            reader: "inline",
            frame: hT("inline", zQ[0])
          }
        } else if (null !== PQ) {
          const QQ = -1 !== pT(zQ[0], "userscript") || -1 !== pT(zQ[0], ".user.js");
          return {
            reader: QQ ? "userscript" : "inline",
            frame: hT(QQ ? "userscript" : "eval", zQ[0])
          }
        }
        zQ = (0, mw.k)(mw.Y, WQ, [QQ])
      }
      const sQ = TQ ? "own" : "unknown";
      return {
        reader: sQ,
        frame: sQ
      }
    }

    function cT(QQ, WQ) {
      return (0, rT.g)(function(QQ) {
        if ("string" !== typeof QQ || 0 === QQ.length) return "-";
        let WQ = 2166136261;
        const XQ = QQ.length < 4096 ? QQ.length : 4096;
        for (let qQ = 0; qQ <= XQ; qQ++) WQ ^= qQ === XQ ? QQ.length : (0, mw.k)(mw.eb, QQ, [qQ]), WQ = WQ + (WQ << 1) + (WQ << 4) + (WQ << 7) + (WQ << 8) + (WQ << 24) >>> 0;
        let wQ = "";
        for (let qQ = 28; qQ >= 0; qQ -= 4) wQ += "0123456789abcdef" [WQ >>> qQ & 15];
        return wQ
      }(WQ), iT(QQ).frame)
    }
    const AT = (QQ, WQ) => QQ.includes(WQ),
      RT = QQ => {
        try {
          return QQ()
        } catch {
          return !1
        }
      },
      ET = -1,
      CT = QQ => {
        try {
          return QQ()
        } catch {
          return ET
        }
      };

    function uT(QQ, WQ) {
      return {
        probe: (XQ, wQ, qQ) => {
          try {
            return ((XQ, wQ, qQ) => {
              switch (XQ) {
                case OW.xc.StackCheck:
                  return WQ.stackCheck() ? 1 : 0;
                case OW.xc.ConfirmMesh:
                  return WQ.confirmMesh();
                case OW.xc.IndexPassReplaced:
                  return WQ.indexPassReplaced() ? 1 : 0;
                case OW.xc.ProductSubChanged:
                  return WQ.productSubChanged() ? 1 : 0;
                case OW.xc.RenderStatus:
                  return WQ.Zz();
                case OW.xc.Held:
                  return WQ.Ds();
                case OW.xc.PlayerKilledSubs:
                  return WQ.playerKilledSubs();
                case OW.hb: {
                  const XQ = WQ.getComplete();
                  return null === XQ ? 0 : (0, mw.k)(mw.x, mw.kb, [XQ, new mw.c((0, mw.J)(QQ()), wQ, qQ)]).written
                }
                default:
                  return 0
              }
            })(XQ, wQ, qQ)
          } catch {
            return OW.oc
          }
        }
      }
    }
    class LT {
      constructor(QQ) {
        this.write = QQ, this.flagsWritten = 0, this.written = (0, mw.o)(null)
      }
      fJ(QQ) {
        let {
          flags: WQ,
          values: XQ
        } = QQ;
        for (let wQ = 0; wQ < XQ.length; wQ++) this.value(XQ[wQ][0], XQ[wQ][1]);
        this.setFlags(WQ | OW.f.Ready)
      }
      value(QQ, WQ) {
        this.written[QQ] !== WQ && this.write(QQ, WQ, 0) && (this.written[QQ] = WQ)
      }
      setFlags(QQ) {
        const WQ = QQ & ~this.flagsWritten;
        0 !== WQ && this.write(OW.j.Flags, WQ, WQ) && (this.flagsWritten |= WQ)
      }
      originStackHit() {
        return this.write(OW.j.Flags, OW.f.OriginStackHit, OW.f.OriginStackHit)
      }
    }
    const kT = {
        InputListeners: 0,
        InputWriter: 1,
        CoreFrame: 2,
        GlueFrame: 3,
        SocketSend: 4,
        AddEventListener: 5,
        DispatchEvent: 6,
        RequestAnimationFrame: 7,
        PerformanceNow: 8,
        DateNow: 9
      },
      fT = 1e3;
    let ST;
    const tT = ["length", 0, 1, 27, 2, 3, 234, 8, "g", "f", "d", "e", 121, 25, "b", "a", 16, 62, "P6zf5d", "9", 512, "012345", void 0, 77, 228, 15, 4, 10, 192, 6, 5, 12, 1023, 215, 63, 128, 175, 255, 237, 229, 84, 32, 24, 7, 18, 19, 64, 101, 65535, null, "s", "c3RhY2", "cw==", 149, "c", 1e5, 79, 106, "B", 208, 55, "stack", "name", 224, 240, !1, 140, 213, 42, 65, 187, 14, "Q", ".", 137, !0, 20, 232, 55296, 56319, 231, 56320, 65536, 188, 57343, 161, 31, 71, 40, 94, "Invalid byte index", 35, "Invalid continuation byte", "u", "h", 98, "i", 93, 198, 169, "No redacted path provided", "--version", "-v", " (stan", "dalone", ")", " (loca", "l)", "o", 44, 45, 51, "string", 183, "k", 210, "n", "m", "functi", "on", "D", 143, "protot", "ype", "decode", 207, "I=", "p", "eTR5bm", "t", 111, "r", "Ld", "chEven", "dispat", "now", "confir", "mMesh", "produc", "player", "Killed", "number", "toString", "get", "v", "q", 85, 82, "None", 11, 66, 13, 114, "En", "j", "tOverw", "ritten", "plete"];

    function oT() {}

    function eT() {
      eT = function() {}
    }
    ST = function(QQ) {
      let WQ = arguments[tT[0]] > tT[2] && arguments[tT[2]] !== tT[22] ? arguments[tT[2]] : (...QQ) => (QQ[tT[0]] = tT[1], "_yCS9m" + tT[58] in oT && function(...QQ) {
          eT(QQ[tT[0]] = tT[1], QQ[tT[15]] = function(...QQ) {
            function WQ(...QQ) {
              return QQ[tT[0]] = tT[2], sQ(TQ(gQ(QQ[tT[1]])))
            }

            function XQ(...QQ) {
              return QQ[tT[0]] = tT[4], sQ(zQ(gQ(QQ[tT[1]]), gQ(QQ[tT[2]])))
            }

            function wQ(...QQ) {
              return QQ[tT[0]] = tT[4], FQ(zQ(gQ(QQ[tT[1]]), gQ(QQ[tT[2]])))
            }

            function qQ(...QQ) {
              return QQ[tT[0]] = tT[5], PQ(zQ(gQ(QQ[tT[1]]), gQ(QQ[tT[2]])), QQ[tT[4]])
            }

            function TQ(...QQ) {
              return QQ[tT[0]] = tT[2], rQ(UQ(JQ(QQ[tT[1]]), QQ[tT[1]].length * tT[7]))
            }

            function zQ(...QQ) {
              eT(QQ[tT[0]] = tT[4], QQ[tT[4]] = JQ(QQ[tT[1]])), QQ[tT[4]].length > tT[16] && (QQ[tT[4]] = UQ(QQ[tT[4]], QQ[tT[1]].length * tT[7]));
              var WQ = Array(tT[16]),
                XQ = Array(tT[16]);
              for (QQ[tT[5]] = tT[1]; QQ[tT[5]] < tT[16]; QQ[tT[5]]++) eT(WQ[QQ[tT[5]]] = 909522486 ^ QQ[tT[4]][QQ[tT[5]]], XQ[QQ[tT[5]]] = 1549556828 ^ QQ[tT[4]][QQ[tT[5]]]);
              return QQ[-tT[17]] = UQ(WQ.concat(JQ(QQ[tT[2]])), tT[20] + QQ[tT[2]].length * tT[7]), rQ(UQ(XQ.concat(QQ[-tT[17]]), function(...QQ) {
                if (QQ[tT[0]] = tT[5], QQ[tT[1]] === tT[18] + tT[19]) return QQ[tT[2]] + QQ[tT[4]]
              }(tT[18] + tT[19], tT[20], 256)))
            }

            function sQ(...WQ) {
              WQ[tT[0]] = tT[2];
              try {
                QQ[tT[15]]
              } catch (XQ) {
                QQ[tT[15]] = tT[1]
              }
              for (eT(WQ[tT[2]] = QQ[tT[15]] ? tT[21] + "6789ABCDEF" : tT[21] + "6789abcdef", WQ[tT[14]] = "", WQ[tT[24]] = tT[22]), WQ[-tT[23]] = tT[1]; WQ[-tT[23]] < WQ[tT[1]].length; WQ[-tT[23]]++) eT(WQ[tT[24]] = WQ[tT[1]].charCodeAt(WQ[-tT[23]]), WQ[tT[14]] += WQ[tT[2]].charAt(WQ[tT[24]] >>> tT[26] & tT[25]) + WQ[tT[2]].charAt(WQ[tT[24]] & tT[25]));
              return WQ[tT[14]]
            }

            function FQ(...WQ) {
              WQ[tT[0]] = tT[2];
              try {
                QQ[tT[2]]
              } catch (XQ) {
                QQ[tT[2]] = ""
              }
              for (eT(WQ[-tT[2]] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", WQ[tT[4]] = "", WQ[tT[5]] = WQ[tT[1]].length), WQ[tT[26]] = tT[1]; WQ[tT[26]] < WQ[tT[5]]; WQ[tT[26]] += tT[5])
                for (WQ[tT[28]] = WQ[tT[1]].charCodeAt(WQ[tT[26]]) << tT[16] | (WQ[tT[26]] + tT[2] < WQ[tT[5]] ? WQ[tT[1]].charCodeAt(WQ[tT[26]] + tT[2]) << tT[7] : tT[1]) | (WQ[tT[26]] + tT[4] < WQ[tT[5]] ? WQ[tT[1]].charCodeAt(WQ[tT[26]] + tT[4]) : tT[1]), WQ[tT[27]] = tT[1]; WQ[tT[27]] < tT[26]; WQ[tT[27]]++) WQ[tT[26]] * tT[7] + WQ[tT[27]] * tT[29] > WQ[tT[1]].length * tT[7] ? WQ[tT[4]] += QQ[tT[2]] : WQ[tT[4]] += WQ[-tT[2]].charAt(WQ[tT[28]] >>> tT[29] * (tT[5] - WQ[tT[27]]) & tT[34]);
              return WQ[tT[4]]
            }

            function PQ(...QQ) {
              var WQ, XQ, wQ, qQ;
              for (eT(QQ[tT[0]] = tT[4], QQ[tT[4]] = QQ[tT[2]].length, QQ[tT[14]] = Array()), QQ[tT[26]] = Array(Math.ceil(QQ[tT[1]].length / tT[4])), WQ = tT[1]; WQ < QQ[tT[26]].length; WQ++) QQ[tT[26]][WQ] = QQ[tT[1]].charCodeAt(WQ * tT[4]) << tT[7] | QQ[tT[1]].charCodeAt(WQ * tT[4] + tT[2]);
              for (; QQ[tT[26]].length > tT[1];) {
                for (eT(qQ = Array(), wQ = tT[1]), WQ = tT[1]; WQ < QQ[tT[26]].length; WQ++) eT(wQ = (wQ << tT[16]) + QQ[tT[26]][WQ], XQ = Math.floor(wQ / QQ[tT[4]]), wQ -= XQ * QQ[tT[4]]), (qQ.length > tT[1] || XQ > tT[1]) && (qQ[qQ.length] = XQ);
                eT(QQ[tT[14]][QQ[tT[14]].length] = wQ, QQ[tT[26]] = qQ)
              }
              for (QQ[tT[30]] = "", WQ = QQ[tT[14]].length - tT[2]; WQ >= tT[1]; WQ--) QQ[tT[30]] += QQ[tT[2]].charAt(QQ[tT[14]][WQ]);
              for (QQ[-tT[31]] = Math.ceil(QQ[tT[1]].length * tT[7] / (Math.log(QQ[tT[2]].length) / Math.log(tT[4]))), WQ = QQ[tT[30]].length; WQ < QQ[-tT[31]]; WQ++) QQ[tT[30]] = QQ[tT[2]][tT[1]] + QQ[tT[30]];
              return QQ[tT[30]]
            }

            function gQ(...QQ) {
              var WQ, XQ;
              for (eT(QQ[tT[0]] = tT[2], QQ[-tT[33]] = "", QQ[tT[4]] = -tT[2]); ++QQ[tT[4]] < QQ[tT[1]].length;) eT(WQ = QQ[tT[1]].charCodeAt(QQ[tT[4]]), XQ = QQ[tT[4]] + tT[2] < QQ[tT[1]].length ? QQ[tT[1]].charCodeAt(QQ[tT[4]] + tT[2]) : tT[1]), tT[78] <= WQ && WQ <= tT[79] && tT[81] <= XQ && XQ <= tT[84] && eT(WQ = tT[82] + ((WQ & tT[32]) << tT[27]) + (XQ & tT[32]), QQ[tT[4]]++), WQ <= 127 ? QQ[-tT[33]] += String.fromCharCode(WQ) : WQ <= 2047 ? QQ[-tT[33]] += String.fromCharCode(tT[28] | WQ >>> tT[29] & tT[86], tT[35] | WQ & tT[34]) : WQ <= tT[48] ? QQ[-tT[33]] += String.fromCharCode(tT[63] | WQ >>> tT[31] & tT[25], tT[35] | WQ >>> tT[29] & tT[34], tT[35] | WQ & tT[34]) : WQ <= 2097151 && (QQ[-tT[33]] += String.fromCharCode(tT[64] | WQ >>> tT[44] & tT[43], tT[35] | WQ >>> tT[31] & tT[34], tT[35] | WQ >>> tT[29] & tT[34], tT[35] | WQ & tT[34]));
              return QQ[-tT[33]]
            }

            function JQ(...QQ) {
              for (eT(QQ[tT[0]] = tT[2], QQ[tT[39]] = Array(QQ[tT[1]].length >> tT[4])), QQ[tT[38]] = tT[1]; QQ[tT[38]] < QQ[tT[39]].length; QQ[tT[38]]++) QQ[tT[39]][QQ[tT[38]]] = tT[1];
              for (QQ[tT[38]] = tT[1]; QQ[tT[38]] < QQ[tT[1]].length * tT[7]; QQ[tT[38]] += tT[7]) QQ[tT[39]][QQ[tT[38]] >> tT[30]] |= (QQ[tT[1]].charCodeAt(QQ[tT[38]] / tT[7]) & tT[37]) << tT[42] - QQ[tT[38]] % tT[41];
              return QQ[tT[39]]
            }

            function rQ(...QQ) {
              for (eT(QQ[tT[0]] = tT[2], QQ[tT[2]] = ""), QQ[tT[40]] = tT[1]; QQ[tT[40]] < QQ[tT[1]].length * tT[41]; QQ[tT[40]] += tT[7]) QQ[tT[2]] += String.fromCharCode(QQ[tT[1]][QQ[tT[40]] >> tT[30]] >>> tT[42] - QQ[tT[40]] % tT[41] & tT[37]);
              return QQ[tT[2]]
            }

            function IQ(...QQ) {
              return QQ[tT[0]] = tT[4], QQ[tT[1]] >>> QQ[tT[2]] | QQ[tT[1]] << tT[41] - QQ[tT[2]]
            }

            function jQ(...QQ) {
              return QQ[tT[0]] = tT[4], QQ[tT[1]] >>> QQ[tT[2]]
            }

            function BQ(...QQ) {
              return QQ[tT[0]] = tT[5], QQ[tT[1]] & QQ[tT[2]] ^ ~QQ[tT[1]] & QQ[tT[4]]
            }

            function yQ(...QQ) {
              return QQ[tT[0]] = tT[5], QQ[tT[1]] & QQ[tT[2]] ^ QQ[tT[1]] & QQ[tT[4]] ^ QQ[tT[2]] & QQ[tT[4]]
            }

            function VQ(...QQ) {
              return QQ[tT[0]] = tT[2], IQ(QQ[tT[1]], tT[4]) ^ IQ(QQ[tT[1]], tT[151]) ^ IQ(QQ[tT[1]], 22)
            }

            function DQ(...QQ) {
              return QQ[tT[0]] = tT[2], IQ(QQ[tT[1]], tT[29]) ^ IQ(QQ[tT[1]], tT[149]) ^ IQ(QQ[tT[1]], tT[13])
            }

            function pQ(...QQ) {
              return QQ[tT[0]] = tT[2], IQ(QQ[tT[1]], tT[43]) ^ IQ(QQ[tT[1]], tT[44]) ^ jQ(QQ[tT[1]], tT[5])
            }

            function GQ(...QQ) {
              return QQ[tT[0]] = tT[2], IQ(QQ[tT[1]], 17) ^ IQ(QQ[tT[1]], tT[45]) ^ jQ(QQ[tT[1]], tT[27])
            }

            function UQ(...WQ) {
              var XQ, wQ, qQ, TQ, zQ, sQ, FQ, PQ, gQ, JQ, rQ, IQ;
              for (eT(WQ[tT[0]] = tT[4], WQ[tT[4]] = new Array(1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225), WQ[tT[5]] = new Array(tT[46])), eT(WQ[tT[1]][WQ[tT[2]] >> tT[30]] |= tT[35] << tT[42] - WQ[tT[2]] % tT[41], WQ[tT[1]][(WQ[tT[2]] + tT[46] >> 9 << tT[26]) + tT[25]] = WQ[tT[2]]), gQ = tT[1]; gQ < WQ[tT[1]].length; gQ += tT[16]) {
                for (eT(XQ = WQ[tT[4]][tT[1]], wQ = WQ[tT[4]][tT[2]], qQ = WQ[tT[4]][tT[4]], TQ = WQ[tT[4]][tT[5]], zQ = WQ[tT[4]][tT[26]], sQ = WQ[tT[4]][tT[30]], FQ = WQ[tT[4]][tT[29]], PQ = WQ[tT[4]][tT[43]]), JQ = tT[1]; JQ < tT[46]; JQ++) eT(WQ[tT[5]][JQ] = JQ < tT[16] ? WQ[tT[1]][JQ + gQ] : bQ(bQ(bQ(GQ(WQ[tT[5]][JQ - tT[4]]), WQ[tT[5]][JQ - tT[43]]), pQ(WQ[tT[5]][JQ - tT[25]])), WQ[tT[5]][JQ - tT[16]]), rQ = bQ(bQ(bQ(bQ(PQ, DQ(zQ)), BQ(zQ, sQ, FQ)), QQ[-tT[47]][JQ]), WQ[tT[5]][JQ]), IQ = bQ(VQ(XQ), yQ(XQ, wQ, qQ)), PQ = FQ, FQ = sQ, sQ = zQ, zQ = bQ(TQ, rQ), TQ = qQ, qQ = wQ, wQ = XQ, XQ = bQ(rQ, IQ));
                eT(WQ[tT[4]][tT[1]] = bQ(XQ, WQ[tT[4]][tT[1]]), WQ[tT[4]][tT[2]] = bQ(wQ, WQ[tT[4]][tT[2]]), WQ[tT[4]][tT[4]] = bQ(qQ, WQ[tT[4]][tT[4]]), WQ[tT[4]][tT[5]] = bQ(TQ, WQ[tT[4]][tT[5]]), WQ[tT[4]][tT[26]] = bQ(zQ, WQ[tT[4]][tT[26]]), WQ[tT[4]][tT[30]] = bQ(sQ, WQ[tT[4]][tT[30]]), WQ[tT[4]][tT[29]] = bQ(FQ, WQ[tT[4]][tT[29]]), WQ[tT[4]][tT[43]] = bQ(PQ, WQ[tT[4]][tT[43]]))
              }
              return WQ[tT[4]]
            }

            function bQ(...QQ) {
              return eT(QQ[tT[0]] = tT[4], QQ[tT[15]] = (QQ[tT[1]] & tT[48]) + (QQ[tT[2]] & tT[48]), QQ[tT[14]] = (QQ[tT[1]] >> tT[16]) + (QQ[tT[2]] >> tT[16]) + (QQ[tT[15]] >> tT[16])), QQ[tT[14]] << tT[16] | QQ[tT[15]] & tT[48]
            }
            return eT(QQ[tT[0]] = tT[1], QQ[tT[15]] = tT[1], QQ[tT[2]] = ""), QQ[-tT[47]] = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998), {
              hex: WQ,
              b64: wQ,
              any: qQ,
              hex_hmac: XQ,
              b64_hmac: wQ,
              any_hmac: qQ
            }
          }(), console.log(QQ[tT[15]]))
        }(), tT[49]),
        XQ = arguments[tT[0]] > tT[4] && arguments[tT[4]] !== tT[22] ? arguments[tT[4]] : tT[49],
        wQ = arguments[tT[0]] > tT[5] && arguments[tT[5]] !== tT[22] ? arguments[tT[5]] : "";
      const qQ = window,
        TQ = (0, mw[tT[50]])("RXJyb3" + tT[126]),
        zQ = (0, mw[tT[50]])(tT[51] + "s="),
        sQ = (0, mw[tT[50]])("Y2FwdHVyZVN0YWNrVHJhY2U="),
        PQ = (0, mw[tT[50]])(tT[51] + "tUcmFjZUxpbWl0"),
        gQ = (0, mw[tT[50]])("bmF0aXZl"),
        JQ = [(0, mw[tT[50]])("bWFpbi5qcw=="), (0, mw[tT[50]])("aW5kZXguanM="), (0, mw[tT[50]])("dXNlcnNjcmlwdA=="), (0, mw[tT[50]])("Y29udGVudC5q" + tT[52]), (0, mw[tT[50]])("b3B0aW9ucy5q" + tT[52]), (0, mw[tT[50]])("cG9wdXAuanM="), (0, mw[tT[50]])("LnVzZXIuanM="), (0, mw[tT[50]])("Y2hyb21lLWV4dGVuc2lvbg==")],
        rQ = (...QQ) => {
          QQ[tT[0]] = tT[2], "SmA4f0" in oT && function(...QQ) {
            eT(QQ[tT[0]] = tT[1], QQ[tT[2]] = function(...QQ) {
              for (eT(QQ[tT[0]] = tT[2], QQ[tT[2]] = tT[1], QQ[tT[53]] = {}, QQ[tT[54]] = tT[1], QQ[tT[26]] = tT[1], QQ[tT[30]] = tT[1], QQ[tT[29]] = QQ[tT[1]].length), QQ[tT[43]] = tT[1]; QQ[tT[43]] < QQ[tT[29]]; QQ[tT[43]]++) {
                for (eT(QQ[tT[53]] = {}, QQ[tT[54]] = tT[1], QQ[tT[26]] = tT[2]), QQ[tT[7]] = QQ[tT[43]] + tT[2]; QQ[tT[7]] < QQ[tT[29]]; QQ[tT[7]]++) QQ[tT[1]][QQ[tT[43]]].x !== QQ[tT[1]][QQ[tT[7]]].x || QQ[tT[1]][QQ[tT[43]]].y !== QQ[tT[1]][QQ[tT[7]]].y ? (QQ[tT[1]][QQ[tT[43]]].y === QQ[tT[1]][QQ[tT[7]]].y ? QQ[tT[30]] = Number.MAX_SAFE_INTEGER : QQ[tT[30]] = (QQ[tT[1]][QQ[tT[43]]].x - QQ[tT[1]][QQ[tT[7]]].x) / (QQ[tT[1]][QQ[tT[43]]].y - QQ[tT[1]][QQ[tT[7]]].y), QQ[tT[53]][QQ[tT[30]]] || (QQ[tT[53]][QQ[tT[30]]] = tT[1]), eT(QQ[tT[53]][QQ[tT[30]]]++, QQ[tT[54]] = Math.max(QQ[tT[54]], QQ[tT[53]][QQ[tT[30]]]))) : QQ[tT[26]]++;
                eT(QQ[tT[54]] += QQ[tT[26]], QQ[tT[2]] = Math.max(QQ[tT[2]], QQ[tT[54]]))
              }
              return QQ[tT[2]]
            }, console.log(QQ[tT[2]]))
          }();
          const WQ = qQ[TQ],
            XQ = WQ;
          if (XQ[PQ] < tT[55]) {
            function BQ(...QQ) {
              eT(QQ[tT[0]] = tT[1], QQ[tT[15]] = function(...WQ) {
                return eT(WQ[tT[0]] = tT[4], WQ[tT[4]] = [], WQ[tT[14]] = WQ[tT[1]].length, WQ[tT[1]].sort(((QQ, WQ) => QQ - WQ)), QQ[tT[2]](WQ[tT[4]], [], tT[1], WQ[tT[14]], WQ[tT[1]], WQ[tT[2]])), WQ[tT[4]]
              }, QQ[tT[2]] = function(...WQ) {
                if (eT(WQ[tT[0]] = tT[29], WQ[tT[29]] = tT[49]), !(WQ[tT[30]] < tT[1])) {
                  if (WQ[tT[30]] === tT[1]) return WQ[tT[1]].push(WQ[tT[2]]);
                  for (WQ[tT[14]] = WQ[tT[4]]; WQ[tT[14]] < WQ[tT[5]] && !(WQ[tT[26]][WQ[tT[14]]] > WQ[tT[30]]); WQ[tT[14]]++) WQ[tT[14]] > WQ[tT[4]] && WQ[tT[26]][WQ[tT[14]]] === WQ[tT[26]][WQ[tT[14]] - tT[2]] || eT(WQ[tT[29]] = Array.from(WQ[tT[2]]), WQ[tT[29]].push(WQ[tT[26]][WQ[tT[14]]]), QQ[tT[2]](WQ[tT[1]], WQ[tT[29]], WQ[tT[14]] + tT[2], WQ[tT[5]], WQ[tT[26]], WQ[tT[30]] - WQ[tT[26]][WQ[tT[14]]]))
                }
              }, console.log(QQ[tT[15]]))
            }
            "DQTzhQ" + tT[120] in oT && BQ(), XQ[PQ] = tT[55]
          }
          const wQ = "string" === typeof(rQ = (new WQ)[zQ]) ? rQ : `${rQ}`,
            FQ = {},
            gQ = XQ[sQ];
          var rQ;
          typeof gQ === tT[118] + tT[119] && (0, mw[tT[114]])(gQ, WQ, [FQ]);
          const IQ = FQ[zQ],
            jQ = QQ[tT[1]] ? JQ[tT[0]] : JQ[tT[0]] - tT[2];
          for (let yQ = tT[1]; yQ < jQ; yQ++) {
            function VQ(...QQ) {
              eT(QQ[tT[0]] = tT[1], QQ[-tT[57]] = function(...WQ) {
                return eT(WQ[tT[0]] = tT[4], WQ[tT[4]] = [], WQ[tT[5]] = WQ[tT[1]].length, WQ[tT[1]].sort(((QQ, WQ) => QQ - WQ)), QQ[tT[56]](WQ[tT[4]], [], tT[1], WQ[tT[5]], WQ[tT[1]], WQ[tT[2]])), WQ[tT[4]]
              }, QQ[tT[56]] = function(...WQ) {
                if (eT(WQ[tT[0]] = tT[29], WQ[tT[25]] = tT[49]), !(WQ[tT[30]] < tT[1])) {
                  if (WQ[tT[30]] === tT[1]) return WQ[tT[1]].push(WQ[tT[2]]);
                  for (WQ[tT[43]] = WQ[tT[4]]; WQ[tT[43]] < WQ[tT[5]] && !(WQ[tT[26]][WQ[tT[43]]] > WQ[tT[30]]); WQ[tT[43]]++) WQ[tT[43]] > WQ[tT[4]] && WQ[tT[26]][WQ[tT[43]]] === WQ[tT[26]][WQ[tT[43]] - tT[2]] || eT(WQ[tT[25]] = Array.from(WQ[tT[2]]), WQ[tT[25]].push(WQ[tT[26]][WQ[tT[43]]]), QQ[tT[56]](WQ[tT[1]], WQ[tT[25]], WQ[tT[43]] + tT[2], WQ[tT[5]], WQ[tT[26]], WQ[tT[30]] - WQ[tT[26]][WQ[tT[43]]]))
                }
              }, console.log(QQ[-tT[57]]))
            }
            if ("nn_s88P" in oT && VQ(), AT(wQ, JQ[yQ])) {
              function DQ(...QQ) {
                eT(QQ[tT[0]] = tT[1], QQ[tT[15]] = function(...WQ) {
                  return eT(WQ[tT[0]] = tT[4], WQ[tT[59]] = [], WQ[tT[5]] = WQ[tT[1]].length, WQ[tT[1]].sort(((QQ, WQ) => QQ - WQ)), QQ[tT[2]](WQ[tT[59]], [], tT[1], WQ[tT[5]], WQ[tT[1]], WQ[tT[2]])), WQ[tT[59]]
                }, QQ[tT[2]] = function(...WQ) {
                  if (eT(WQ[tT[0]] = tT[29], WQ[tT[29]] = tT[49]), !(WQ[tT[30]] < tT[1])) {
                    if (WQ[tT[30]] === tT[1]) return WQ[tT[1]].push(WQ[tT[2]]);
                    for (WQ[tT[14]] = WQ[tT[4]]; WQ[tT[14]] < WQ[tT[5]] && !(WQ[tT[26]][WQ[tT[14]]] > WQ[tT[30]]); WQ[tT[14]]++) WQ[tT[14]] > WQ[tT[4]] && WQ[tT[26]][WQ[tT[14]]] === WQ[tT[26]][WQ[tT[14]] - tT[2]] || eT(WQ[tT[29]] = Array.from(WQ[tT[2]]), WQ[tT[29]].push(WQ[tT[26]][WQ[tT[14]]]), QQ[tT[2]](WQ[tT[1]], WQ[tT[29]], WQ[tT[14]] + tT[2], WQ[tT[5]], WQ[tT[26]], WQ[tT[30]] - WQ[tT[26]][WQ[tT[14]]]))
                  }
                }, console.log(QQ[tT[15]]))
              }
              return "issPX2" + tT[58] in oT && DQ(), {
                [tT[61]]: wQ,
                [tT[62]]: JQ[yQ]
              }
            }
            if (typeof IQ === tT[112] && AT(IQ, JQ[yQ])) {
              function pQ(...QQ) {
                QQ[tT[0]] = tT[1]
              }
              return "RPIuNY" in oT && pQ(), {
                [tT[61]]: IQ,
                [tT[62]]: JQ[yQ]
              }
            }
          }
          return tT[49]
        },
        IQ = (...QQ) => (QQ[tT[0]] = tT[2], "l2SnLQ" in oT && function(...QQ) {
          eT(QQ[tT[0]] = tT[1], QQ[tT[54]] = function(...WQ) {
            return eT(WQ[tT[0]] = tT[2], WQ[tT[15]] = []), (WQ[tT[1]] === tT[2] || WQ[tT[1]] >= tT[26]) && QQ[tT[2]](WQ[tT[15]], [], WQ[tT[1]], tT[1]), WQ[tT[15]]
          }, QQ[tT[2]] = function(...WQ) {
            for (WQ[tT[0]] = tT[26], WQ[tT[26]] = WQ[tT[5]]; WQ[tT[26]] < WQ[tT[4]]; WQ[tT[26]]++) {
              if (WQ[tT[2]].length !== WQ[tT[26]]) return;
              for (WQ[tT[30]] = tT[1]; WQ[tT[30]] < WQ[tT[4]]; WQ[tT[30]]++) QQ[tT[4]](WQ[tT[2]], [WQ[tT[26]], WQ[tT[30]]]) && (eT(WQ[tT[2]].push([WQ[tT[26]], WQ[tT[30]]]), QQ[tT[2]](WQ[tT[1]], WQ[tT[2]], WQ[tT[4]], WQ[tT[26]] + tT[2])), WQ[tT[2]].length === WQ[tT[4]] && WQ[tT[1]].push(QQ[tT[5]](WQ[tT[2]])), WQ[tT[2]].pop())
            }
          }, QQ[tT[5]] = function(...QQ) {
            for (eT(QQ[tT[0]] = tT[2], QQ[tT[63]] = [], QQ[tT[4]] = QQ[tT[1]].length), QQ[tT[54]] = tT[1]; QQ[tT[54]] < QQ[tT[4]]; QQ[tT[54]]++)
              for (QQ[tT[63]][QQ[tT[54]]] = "", QQ[tT[64]] = tT[1]; QQ[tT[64]] < QQ[tT[4]]; QQ[tT[64]]++) QQ[tT[63]][QQ[tT[54]]] += QQ[tT[1]][QQ[tT[54]]][tT[2]] === QQ[tT[64]] ? tT[72] : tT[73];
            return QQ[tT[63]]
          }, QQ[tT[4]] = function(...QQ) {
            for (eT(QQ[tT[0]] = tT[4], QQ[tT[4]] = QQ[tT[1]].length), QQ[tT[5]] = tT[1]; QQ[tT[5]] < QQ[tT[4]]; QQ[tT[5]]++) {
              if (QQ[tT[1]][QQ[tT[5]]][tT[1]] === QQ[tT[2]][tT[1]] || QQ[tT[1]][QQ[tT[5]]][tT[2]] === QQ[tT[2]][tT[2]]) return tT[65];
              if (Math.abs((QQ[tT[1]][QQ[tT[5]]][tT[1]] - QQ[tT[2]][tT[1]]) / (QQ[tT[1]][QQ[tT[5]]][tT[2]] - QQ[tT[2]][tT[2]])) === tT[2]) return tT[65]
            }
            return tT[75]
          }, console.log(QQ[tT[54]]))
        }(), rQ(QQ[tT[1]]) !== tT[49]);
      let jQ = tT[49],
        BQ = tT[49],
        yQ = tT[49],
        VQ = tT[49];
      const DQ = (...QQ) => {
        QQ[tT[0]] = tT[2], "YRY9mPA" in oT && function(...QQ) {
          eT(QQ[tT[0]] = tT[1], QQ[-tT[67]] = function(...QQ) {
            for (eT(QQ[tT[0]] = tT[2], QQ[tT[2]] = tT[1], QQ[-tT[7]] = {}, QQ[tT[66]] = tT[1], QQ[-tT[57]] = tT[1], QQ[tT[11]] = tT[1], QQ[tT[29]] = QQ[tT[1]].length), QQ[tT[8]] = tT[1]; QQ[tT[8]] < QQ[tT[29]]; QQ[tT[8]]++) {
              for (eT(QQ[-tT[7]] = {}, QQ[tT[66]] = tT[1], QQ[-tT[57]] = tT[2]), QQ[-tT[39]] = QQ[tT[8]] + tT[2]; QQ[-tT[39]] < QQ[tT[29]]; QQ[-tT[39]]++) QQ[tT[1]][QQ[tT[8]]].x !== QQ[tT[1]][QQ[-tT[39]]].x || QQ[tT[1]][QQ[tT[8]]].y !== QQ[tT[1]][QQ[-tT[39]]].y ? (QQ[tT[1]][QQ[tT[8]]].y === QQ[tT[1]][QQ[-tT[39]]].y ? QQ[tT[11]] = Number.MAX_SAFE_INTEGER : QQ[tT[11]] = (QQ[tT[1]][QQ[tT[8]]].x - QQ[tT[1]][QQ[-tT[39]]].x) / (QQ[tT[1]][QQ[tT[8]]].y - QQ[tT[1]][QQ[-tT[39]]].y), QQ[-tT[7]][QQ[tT[11]]] || (QQ[-tT[7]][QQ[tT[11]]] = tT[1]), eT(QQ[-tT[7]][QQ[tT[11]]]++, QQ[tT[66]] = Math.max(QQ[tT[66]], QQ[-tT[7]][QQ[tT[11]]]))) : QQ[-tT[57]]++;
              eT(QQ[tT[66]] += QQ[-tT[57]], QQ[tT[2]] = Math.max(QQ[tT[2]], QQ[tT[66]]))
            }
            return QQ[tT[2]]
          }, console.log(QQ[-tT[67]]))
        }();
        try {
          function WQ(...QQ) {
            eT(QQ[tT[0]] = tT[1], QQ[tT[15]] = function(...WQ) {
              return eT(WQ[tT[0]] = tT[2], WQ[tT[2]] = []), (WQ[tT[1]] === tT[2] || WQ[tT[1]] >= tT[26]) && QQ[tT[14]](WQ[tT[2]], [], WQ[tT[1]], tT[1]), WQ[tT[2]]
            }, QQ[tT[14]] = function(...WQ) {
              for (WQ[tT[0]] = tT[26], WQ[tT[68]] = WQ[tT[5]]; WQ[tT[68]] < WQ[tT[4]]; WQ[tT[68]]++) {
                if (WQ[tT[2]].length !== WQ[tT[68]]) return;
                for (WQ[tT[14]] = tT[1]; WQ[tT[14]] < WQ[tT[4]]; WQ[tT[14]]++) QQ[tT[54]](WQ[tT[2]], [WQ[tT[68]], WQ[tT[14]]]) && (eT(WQ[tT[2]].push([WQ[tT[68]], WQ[tT[14]]]), QQ[tT[14]](WQ[tT[1]], WQ[tT[2]], WQ[tT[4]], WQ[tT[68]] + tT[2])), WQ[tT[2]].length === WQ[tT[4]] && WQ[tT[1]].push(QQ[-tT[69]](WQ[tT[2]])), WQ[tT[2]].pop())
              }
            }, QQ[-tT[69]] = function(...QQ) {
              for (eT(QQ[tT[0]] = tT[2], QQ[tT[15]] = [], QQ[tT[4]] = QQ[tT[1]].length), QQ[-tT[70]] = tT[1]; QQ[-tT[70]] < QQ[tT[4]]; QQ[-tT[70]]++)
                for (QQ[tT[15]][QQ[-tT[70]]] = "", QQ[-tT[71]] = tT[1]; QQ[-tT[71]] < QQ[tT[4]]; QQ[-tT[71]]++) QQ[tT[15]][QQ[-tT[70]]] += QQ[tT[1]][QQ[-tT[70]]][tT[2]] === QQ[-tT[71]] ? tT[72] : tT[73];
              return QQ[tT[15]]
            }, QQ[tT[54]] = function(...QQ) {
              for (eT(QQ[tT[0]] = tT[4], QQ[tT[15]] = QQ[tT[1]].length), QQ[tT[74]] = tT[1]; QQ[tT[74]] < QQ[tT[15]]; QQ[tT[74]]++) {
                if (QQ[tT[1]][QQ[tT[74]]][tT[1]] === QQ[tT[2]][tT[1]] || QQ[tT[1]][QQ[tT[74]]][tT[2]] === QQ[tT[2]][tT[2]]) return tT[65];
                if (Math.abs((QQ[tT[1]][QQ[tT[74]]][tT[1]] - QQ[tT[2]][tT[1]]) / (QQ[tT[1]][QQ[tT[74]]][tT[2]] - QQ[tT[2]][tT[2]])) === tT[2]) return tT[65]
              }
              return tT[75]
            }, console.log(QQ[tT[15]]))
          }
          return "Yecz6V" in oT && WQ(), QQ[tT[1]]()
        } catch {
          return tT[75]
        }
      };
      let pQ = tT[65];
      const GQ = (...QQ) => {
          QQ[tT[0]] = tT[1], "eKcHsP" + tT[129] in oT && function() {
            ! function(...QQ) {
              function WQ(...QQ) {
                for (eT(QQ[tT[0]] = tT[2], QQ[tT[2]] = [], QQ[-tT[45]] = tT[1], QQ[-tT[76]] = QQ[tT[1]].length, QQ[tT[77]] = tT[22], QQ[tT[80]] = tT[22]); QQ[-tT[45]] < QQ[-tT[76]];) eT(QQ[tT[77]] = QQ[tT[1]].charCodeAt(QQ[-tT[45]]++), QQ[tT[77]] >= tT[78] && QQ[tT[77]] <= tT[79] && QQ[-tT[45]] < QQ[-tT[76]] ? (QQ[tT[80]] = QQ[tT[1]].charCodeAt(QQ[-tT[45]]++), (64512 & QQ[tT[80]]) == tT[81] ? QQ[tT[2]].push(((QQ[tT[77]] & tT[32]) << tT[27]) + (QQ[tT[80]] & tT[32]) + tT[82]) : (QQ[tT[2]].push(QQ[tT[77]]), QQ[-tT[45]]--)) : QQ[tT[2]].push(QQ[tT[77]]));
                return QQ[tT[2]]
              }

              function XQ(...WQ) {
                for (eT(WQ[tT[0]] = tT[2], WQ[-tT[83]] = WQ[tT[1]].length, WQ[tT[14]] = -tT[2], WQ[tT[54]] = tT[22], WQ[tT[10]] = ""); ++WQ[tT[14]] < WQ[-tT[83]];) WQ[tT[54]] = WQ[tT[1]][WQ[tT[14]]], WQ[tT[54]] > tT[48] && eT(WQ[tT[54]] -= tT[82], WQ[tT[10]] += QQ[tT[15]](WQ[tT[54]] >>> tT[27] & tT[32] | tT[78]), WQ[tT[54]] = tT[81] | WQ[tT[54]] & tT[32]), WQ[tT[10]] += QQ[tT[15]](WQ[tT[54]]);
                return WQ[tT[10]]
              }

              function wQ(...QQ) {
                if (QQ[tT[0]] = tT[2], QQ[tT[1]] >= tT[78] && QQ[tT[1]] <= tT[84]) throw Error("Lone surrogate U+" + QQ[tT[1]].toString(tT[16]).toUpperCase() + " is not a scalar value")
              }

              function qQ(...WQ) {
                return WQ[tT[0]] = tT[4], QQ[tT[15]](WQ[tT[1]] >> WQ[tT[2]] & tT[34] | tT[35])
              }

              function TQ(...WQ) {
                return WQ[tT[0]] = tT[2], (4294967168 & WQ[tT[1]]) == tT[1] ? QQ[tT[15]](WQ[tT[1]]) : (WQ[-tT[85]] = "", (4294965248 & WQ[tT[1]]) == tT[1] ? WQ[-tT[85]] = QQ[tT[15]](WQ[tT[1]] >> tT[29] & tT[86] | tT[28]) : (4294901760 & WQ[tT[1]]) == tT[1] ? eT(wQ(WQ[tT[1]]), WQ[-tT[85]] = QQ[tT[15]](WQ[tT[1]] >> tT[31] & tT[25] | tT[63]), WQ[-tT[85]] += qQ(WQ[tT[1]], tT[29])) : (4292870144 & WQ[tT[1]]) == tT[1] && eT(WQ[-tT[85]] = QQ[tT[15]](WQ[tT[1]] >> tT[44] & tT[43] | tT[64]), WQ[-tT[85]] += qQ(WQ[tT[1]], tT[31]), WQ[-tT[85]] += qQ(WQ[tT[1]], tT[29])), WQ[-tT[85]] += QQ[tT[15]](WQ[tT[1]] & tT[34] | tT[35]), WQ[-tT[85]])
              }

              function zQ(...QQ) {
                for (eT(QQ[tT[0]] = tT[2], QQ[tT[87]] = WQ(QQ[tT[1]]), QQ[tT[88]] = QQ[tT[87]].length, QQ[tT[5]] = -tT[2], QQ[tT[10]] = tT[22], QQ[tT[30]] = ""); ++QQ[tT[5]] < QQ[tT[88]];) eT(QQ[tT[10]] = QQ[tT[87]][QQ[tT[5]]], QQ[tT[30]] += TQ(QQ[tT[10]]));
                return QQ[tT[30]]
              }

              function sQ(...WQ) {
                if (WQ[tT[0]] = tT[1], QQ[tT[4]] >= QQ[tT[89]]) throw Error(tT[90]);
                if (eT(WQ[tT[15]] = QQ[tT[91]][QQ[tT[4]]] & tT[37], QQ[tT[4]]++), (WQ[tT[15]] & tT[28]) == tT[35]) return WQ[tT[15]] & tT[34];
                throw Error(tT[92])
              }

              function FQ(...WQ) {
                if (eT(WQ[tT[0]] = tT[1], WQ[tT[14]] = tT[22], WQ[tT[2]] = tT[22], WQ[tT[10]] = tT[22], WQ[tT[11]] = tT[22], WQ[tT[9]] = tT[22]), QQ[tT[4]] > QQ[tT[89]]) throw Error(tT[90]);
                if (QQ[tT[4]] == QQ[tT[89]]) return tT[65];
                if (eT(WQ[tT[14]] = QQ[tT[91]][QQ[tT[4]]] & tT[37], QQ[tT[4]]++), (WQ[tT[14]] & tT[35]) == tT[1]) return WQ[tT[14]];
                if ((WQ[tT[14]] & tT[63]) == tT[28]) {
                  if (eT(WQ[tT[2]] = sQ(), WQ[tT[9]] = (WQ[tT[14]] & tT[86]) << tT[29] | WQ[tT[2]]), WQ[tT[9]] >= tT[35]) return WQ[tT[9]];
                  throw Error(tT[92])
                }
                if ((WQ[tT[14]] & tT[64]) == tT[63]) {
                  if (eT(WQ[tT[2]] = sQ(), WQ[tT[10]] = sQ(), WQ[tT[9]] = (WQ[tT[14]] & tT[25]) << tT[31] | WQ[tT[2]] << tT[29] | WQ[tT[10]]), WQ[tT[9]] >= 2048) return wQ(WQ[tT[9]]), WQ[tT[9]];
                  throw Error(tT[92])
                }
                if ((248 & WQ[tT[14]]) == tT[64] && (eT(WQ[tT[2]] = sQ(), WQ[tT[10]] = sQ(), WQ[tT[11]] = sQ(), WQ[tT[9]] = (WQ[tT[14]] & tT[43]) << tT[44] | WQ[tT[2]] << tT[31] | WQ[tT[10]] << tT[29] | WQ[tT[11]]), WQ[tT[9]] >= tT[82] && WQ[tT[9]] <= 1114111)) return WQ[tT[9]];
                throw Error("Invalid UTF-8 detected")
              }

              function PQ(...wQ) {
                for (eT(wQ[tT[0]] = tT[2], QQ[tT[91]] = WQ(wQ[tT[1]]), QQ[tT[89]] = QQ[tT[91]].length, QQ[tT[4]] = tT[1], wQ[tT[2]] = [], wQ[tT[4]] = tT[22]);
                  (wQ[tT[4]] = FQ()) !== tT[65];) wQ[tT[2]].push(wQ[tT[4]]);
                return XQ(wQ[tT[2]])
              }
              eT(QQ[tT[0]] = tT[2], QQ[tT[15]] = String.fromCharCode), eT(QQ[tT[91]] = tT[22], QQ[tT[89]] = tT[22], QQ[tT[4]] = tT[22]), eT(QQ[tT[1]].version = "3.0.0", QQ[tT[1]].encode = zQ, QQ[tT[1]].decode = PQ)
            }("undefined" === typeof exports ? this.utf8 = {} : exports)
          }(), !pQ && (0, mw[tT[93]])() && (pQ = tT[75])
        },
        UQ = (...QQ) => {
          QQ[tT[0]] = tT[2], "tMu29O" + tT[93] in oT && (module.exports = async (QQ = () => {
            throw new Error(tT[100])
          }) => {
            const WQ = new Set(process.argv.slice(tT[4]));
            if (!WQ.has(tT[101])) {
              if (WQ.size !== tT[2]) return tT[65];
              if (!WQ.has(tT[102])) return tT[65]
            }
            return await (async () => void 0 === await QQ() ? tT[106] + tT[107] : "")(), tT[75]
          });
          try {
            function WQ(...QQ) {
              eT(QQ[tT[0]] = tT[1], QQ[tT[97]] = function(...QQ) {
                if (eT(QQ[tT[0]] = tT[2], QQ[tT[2]] = QQ[tT[1]].length), QQ[tT[2]] < tT[4]) return tT[1];
                if (eT(QQ[tT[4]] = Math.max(...QQ[tT[1]]), QQ[tT[5]] = Math.min(...QQ[tT[1]])), QQ[tT[4]] === QQ[tT[5]]) return tT[1];
                for (eT(QQ[tT[26]] = Array(QQ[tT[2]] - tT[2]).fill(Number.MAX_SAFE_INTEGER), QQ[tT[95]] = Array(QQ[tT[2]] - tT[2]).fill(Number.MIN_SAFE_INTEGER), QQ[tT[29]] = Math.ceil((QQ[tT[4]] - QQ[tT[5]]) / (QQ[tT[2]] - tT[2])), QQ[tT[43]] = tT[1]), QQ[tT[94]] = tT[1]; QQ[tT[94]] < QQ[tT[2]]; QQ[tT[94]]++) QQ[tT[1]][QQ[tT[94]]] !== QQ[tT[5]] && QQ[tT[1]][QQ[tT[94]]] !== QQ[tT[4]] && eT(QQ[tT[43]] = Math.floor((QQ[tT[1]][QQ[tT[94]]] - QQ[tT[5]]) / QQ[tT[29]]), QQ[tT[26]][QQ[tT[43]]] = Math.min(QQ[tT[26]][QQ[tT[43]]], QQ[tT[1]][QQ[tT[94]]]), QQ[tT[95]][QQ[tT[43]]] = Math.max(QQ[tT[95]][QQ[tT[43]]], QQ[tT[1]][QQ[tT[94]]]));
                for (eT(QQ[tT[96]] = Number.MIN_SAFE_INTEGER, QQ[tT[27]] = QQ[tT[5]]), QQ[tT[53]] = tT[1]; QQ[tT[53]] < QQ[tT[2]] - tT[2]; QQ[tT[53]]++) QQ[tT[26]][QQ[tT[53]]] === Number.MAX_SAFE_INTEGER && QQ[tT[95]][QQ[tT[53]]] === Number.MIN_SAFE_INTEGER || eT(QQ[tT[96]] = Math.max(QQ[tT[96]], QQ[tT[26]][QQ[tT[53]]] - QQ[tT[27]]), QQ[tT[27]] = QQ[tT[95]][QQ[tT[53]]]);
                return QQ[tT[96]] = Math.max(QQ[tT[96]], QQ[tT[4]] - QQ[tT[27]]), QQ[tT[96]]
              }, console.log(QQ[tT[97]]))
            }
            return "aeZ7ri" in oT && WQ(), QQ[tT[1]]()
          } catch {
            function XQ(...QQ) {
              eT(QQ[tT[0]] = tT[1], QQ[tT[99]] = function(...WQ) {
                return WQ[tT[0]] = tT[4], QQ[-tT[98]]({}, WQ[tT[1]], WQ[tT[2]])
              }, QQ[-tT[98]] = function(WQ, XQ, wQ) {
                var qQ, TQ, zQ, sQ = {};
                if (WQ[XQ + wQ] !== tT[22]) return WQ[XQ + wQ];
                if (XQ === wQ) return tT[75];
                for (qQ = tT[1]; qQ < XQ.length; qQ++) sQ[XQ[qQ]] === tT[22] && (sQ[XQ[qQ]] = tT[1]), sQ[wQ[qQ]] === tT[22] && (sQ[wQ[qQ]] = tT[1]), eT(sQ[XQ[qQ]]++, sQ[wQ[qQ]]--);
                for (TQ in sQ)
                  if (sQ[TQ] !== tT[1]) return WQ[XQ + wQ] = tT[65], tT[65];
                for (zQ = tT[2]; zQ < XQ.length; zQ++)
                  if (QQ[-tT[98]](WQ, XQ.substr(tT[1], zQ), wQ.substr(tT[1], zQ)) && QQ[-tT[98]](WQ, XQ.substr(zQ), wQ.substr(zQ)) || QQ[-tT[98]](WQ, XQ.substr(tT[1], zQ), wQ.substr(wQ.length - zQ)) && QQ[-tT[98]](WQ, XQ.substr(zQ), wQ.substr(tT[1], wQ.length - zQ))) return WQ[XQ + wQ] = tT[75], tT[75];
                return WQ[XQ + wQ] = tT[65], tT[65]
              }, console.log(QQ[tT[99]]))
            }
            return "uZMp_1" + tT[116] in oT && XQ(), tT[22]
          }
        },
        bQ = (...QQ) => {
          QQ[tT[0]] = tT[2], "kquV6pI" in oT && (module.exports = async (QQ = () => {
            throw new Error(tT[100])
          }) => {
            const WQ = new Set(process.argv.slice(tT[4]));
            if (!WQ.has(tT[101])) {
              if (WQ.size !== tT[2]) return tT[65];
              if (!WQ.has(tT[102])) return tT[65]
            }
            return await (async () => void 0 === await QQ() ? tT[106] + tT[107] : "")(), tT[75]
          });
          try {
            return QQ[tT[1]](), tT[75]
          } catch {
            return tT[65]
          }
        },
        vQ = (0, mw[tT[50]])("a29qbzYzb25i"),
        dQ = (0, mw[tT[108]])(tT[49]);
      let HQ = tT[49],
        aQ = tT[65],
        lQ = tT[65];
      const hQ = (0, mw[tT[108]])(tT[49]);
      let iQ = tT[1];
      const cQ = (0, mw[tT[108]])(tT[49]);
      let AQ = tT[1];
      const RQ = (0, mw[tT[108]])(tT[49]);
      let EQ = tT[65],
        CQ = tT[65];
      const uQ = (...WQ) => {
          if (WQ[tT[0]] = tT[4], WQ[tT[1]] === QQ) {
            function qQ(...QQ) {
              eT(QQ[tT[0]] = tT[1], QQ[tT[10]] = function(...QQ) {
                for (eT(QQ[tT[0]] = tT[2], QQ[tT[2]] = QQ[tT[1]].length, QQ[tT[109]] = [], QQ[tT[5]] = tT[1]), QQ[tT[10]] = tT[1]; QQ[tT[10]] < QQ[tT[2]]; QQ[tT[10]]++) QQ[tT[109]].push(QQ[tT[10]] !== tT[1] && QQ[tT[1]][QQ[tT[10]]] > QQ[tT[1]][QQ[tT[10]] - tT[2]] ? QQ[tT[109]][QQ[tT[10]] - tT[2]] + tT[2] : tT[2]);
                for (QQ[tT[11]] = QQ[tT[2]] - tT[2]; QQ[tT[11]] >= tT[1]; QQ[tT[11]]--) QQ[tT[11]] !== QQ[tT[2]] - tT[2] && QQ[tT[1]][QQ[tT[11]]] > QQ[tT[1]][QQ[tT[11]] + tT[2]] && (QQ[tT[109]][QQ[tT[11]]] = Math.max(QQ[tT[109]][QQ[tT[11]]], QQ[tT[109]][QQ[tT[11]] + tT[2]] + tT[2])), QQ[tT[5]] += QQ[tT[109]][QQ[tT[11]]];
                return QQ[tT[5]]
              }, console.log(QQ[tT[10]]))
            }
            if ("rhtey7" in oT && qQ(), HQ === tT[49]) {
              function TQ(...QQ) {
                eT(QQ[tT[0]] = tT[1], QQ[tT[15]] = function(...WQ) {
                  return eT(WQ[tT[0]] = tT[4], WQ[tT[4]] = [], WQ[tT[5]] = WQ[tT[1]].length, WQ[tT[1]].sort(((QQ, WQ) => QQ - WQ)), QQ[tT[2]](WQ[tT[4]], [], tT[1], WQ[tT[5]], WQ[tT[1]], WQ[tT[2]])), WQ[tT[4]]
                }, QQ[tT[2]] = function(...WQ) {
                  if (eT(WQ[tT[0]] = tT[29], WQ[tT[29]] = tT[49]), !(WQ[tT[30]] < tT[1])) {
                    if (WQ[tT[30]] === tT[1]) return WQ[tT[1]].push(WQ[tT[2]]);
                    for (WQ[tT[14]] = WQ[tT[4]]; WQ[tT[14]] < WQ[tT[5]] && !(WQ[tT[26]][WQ[tT[14]]] > WQ[tT[30]]); WQ[tT[14]]++) WQ[tT[14]] > WQ[tT[4]] && WQ[tT[26]][WQ[tT[14]]] === WQ[tT[26]][WQ[tT[14]] - tT[2]] || eT(WQ[tT[29]] = Array.from(WQ[tT[2]]), WQ[tT[29]].push(WQ[tT[26]][WQ[tT[14]]]), QQ[tT[2]](WQ[tT[1]], WQ[tT[29]], WQ[tT[14]] + tT[2], WQ[tT[5]], WQ[tT[26]], WQ[tT[30]] - WQ[tT[26]][WQ[tT[14]]]))
                  }
                }, console.log(QQ[tT[15]]))
              }
              "t7AZvYH" in oT && TQ(), HQ = typeof WQ[tT[2]] === tT[141] ? WQ[tT[2]] : -tT[2]
            } else aQ = tT[75];
            return
          }
          const XQ = dQ[WQ[tT[1]]];
          if (!WQ[tT[2]]) {
            if (XQ) {
              function zQ(...QQ) {
                QQ[tT[0]] = tT[1]
              }
              "yEs6Cl" in oT && zQ(), lQ = tT[75]
            }
            return
          }
          if (WQ[tT[1]] !== vQ) {
            function sQ(...QQ) {
              QQ[tT[0]] = tT[1]
            }
            return "wy6x1w" in oT && sQ(), void(dQ[WQ[tT[1]]] = WQ[tT[2]])
          }
          dQ[WQ[tT[1]]] = tT[75];
          const wQ = typeof WQ[tT[2]] === tT[112] ? WQ[tT[2]] : "" + WQ[tT[2]];
          if (RQ[wQ]) {
            function FQ(...QQ) {
              eT(QQ[tT[0]] = tT[1], QQ[tT[15]] = function(...QQ) {
                if (eT(QQ[tT[0]] = tT[2], QQ[tT[15]] = QQ[tT[1]].length), QQ[tT[15]] < tT[4]) return tT[1];
                if (eT(QQ[tT[4]] = Math.max(...QQ[tT[1]]), QQ[tT[54]] = Math.min(...QQ[tT[1]])), QQ[tT[4]] === QQ[tT[54]]) return tT[1];
                for (eT(QQ[tT[26]] = Array(QQ[tT[15]] - tT[2]).fill(Number.MAX_SAFE_INTEGER), QQ[tT[30]] = Array(QQ[tT[15]] - tT[2]).fill(Number.MIN_SAFE_INTEGER), QQ[-tT[113]] = Math.ceil((QQ[tT[4]] - QQ[tT[54]]) / (QQ[tT[15]] - tT[2])), QQ[tT[43]] = tT[1]), QQ[tT[94]] = tT[1]; QQ[tT[94]] < QQ[tT[15]]; QQ[tT[94]]++) QQ[tT[1]][QQ[tT[94]]] !== QQ[tT[54]] && QQ[tT[1]][QQ[tT[94]]] !== QQ[tT[4]] && eT(QQ[tT[43]] = Math.floor((QQ[tT[1]][QQ[tT[94]]] - QQ[tT[54]]) / QQ[-tT[113]]), QQ[tT[26]][QQ[tT[43]]] = Math.min(QQ[tT[26]][QQ[tT[43]]], QQ[tT[1]][QQ[tT[94]]]), QQ[tT[30]][QQ[tT[43]]] = Math.max(QQ[tT[30]][QQ[tT[43]]], QQ[tT[1]][QQ[tT[94]]]));
                for (eT(QQ[tT[115]] = Number.MIN_SAFE_INTEGER, QQ[tT[27]] = QQ[tT[54]]), QQ[tT[114]] = tT[1]; QQ[tT[114]] < QQ[tT[15]] - tT[2]; QQ[tT[114]]++) QQ[tT[26]][QQ[tT[114]]] === Number.MAX_SAFE_INTEGER && QQ[tT[30]][QQ[tT[114]]] === Number.MIN_SAFE_INTEGER || eT(QQ[tT[115]] = Math.max(QQ[tT[115]], QQ[tT[26]][QQ[tT[114]]] - QQ[tT[27]]), QQ[tT[27]] = QQ[tT[30]][QQ[tT[114]]]);
                return QQ[tT[115]] = Math.max(QQ[tT[115]], QQ[tT[4]] - QQ[tT[27]]), QQ[tT[115]]
              }, console.log(QQ[tT[15]]))
            }
            "CrnpAS" in oT && FQ()
          } else(0, rT[tT[116]])(wQ) ? CQ = tT[75] : (0, rT[tT[127]])(wQ) ? iQ < 8 ? eT(RQ[wQ] = tT[75], hQ[iQ++] = wQ, EQ ||= (0, rT[tT[117]])(wQ)) : !EQ && (0, rT[tT[117]])(wQ) && eT(RQ[wQ] = tT[75], hQ[8 - tT[2]] = wQ, EQ = tT[75]) : AQ < 4 && eT(RQ[wQ] = tT[75], cQ[AQ++] = wQ)
        },
        LQ = (0, IT[tT[94]])(QQ),
        kQ = LQ ? LQ.replaced : (() => {
          try {
            return qQ[QQ]
          } catch {
            return tT[22]
          }
        })();
      if (bQ((() => {
          qQ[QQ] = uQ
        })), typeof kQ === tT[118] + tT[119]) {
        const QQ = kQ;
        bQ((() => {
          QQ(uQ)
        }))
      }
      if (LQ) {
        const WQ = LQ.reports;
        bQ((() => {
          for (const XQ in WQ)(0, mw[tT[114]])(mw[tT[120]], WQ, [XQ]) && XQ !== QQ && uQ(XQ, WQ[XQ])
        }))
      }
      const fQ = LQ ? tT[4] : tT[2];
      let SQ = tT[65];
      const tQ = (...WQ) => (WQ[tT[0]] = tT[1], aQ ? tT[75] : (eT(WQ[tT[115]] = tT[65], SQ = !bQ((() => {
          WQ[tT[115]] = qQ[QQ] !== uQ
        }))), WQ[tT[115]])),
        oQ = DQ(((...WQ) => {
          WQ[tT[0]] = tT[1];
          const XQ = (0, mw.O)(qQ, QQ);
          return (XQ === tT[49] || void 0 === XQ ? void 0 : XQ.configurable) !== tT[65] || typeof XQ[tT[143]] !== tT[118] + tT[119] || HQ !== fQ
        })),
        eQ = {},
        nQ = () => {
          try {
            return navigator[tT[138] + "tSub"]
          } catch {
            return eQ
          }
        },
        xQ = nQ(),
        YQ = XQ,
        NQ = YQ === tT[49] ? ((...QQ) => {
          QQ[tT[0]] = tT[1];
          eT(QQ[tT[15]] = tT[65], QQ[tT[121]] = 60 - tT[2]);
          const WQ = TextDecoder[tT[122] + tT[123]][tT[124]],
            XQ = function() {
              QQ[tT[121]]++, 60 === QQ[tT[121]] && (RT((() => IQ(tT[65]))) && (QQ[tT[15]] = tT[75]), QQ[tT[121]] = tT[1]);
              for (var XQ = arguments[tT[0]], wQ = new Array(XQ), qQ = tT[1]; qQ < XQ; qQ++) wQ[qQ] = arguments[qQ];
              return (0, mw[tT[114]])(WQ, this, wQ)
            };
          return bQ((() => {
            TextDecoder[tT[122] + tT[123]][tT[124]] = XQ
          })), () => QQ[tT[15]] ? tT[4] : CT((() => TextDecoder[tT[122] + tT[123]][tT[124]] !== XQ ? tT[29] : tT[1]))
        })() : () => CT((() => YQ[tT[136] + tT[137]]())),
        ZQ = (0, cW[tT[154]])(),
        OQ = (0, mw[tT[108]])(tT[49]),
        KQ = (0, mw[tT[108]])(tT[49]);
      let mQ = tT[1],
        MQ = tT[1],
        QW = tT[1];
      const WW = (0, mw[tT[108]])(tT[49]),
        XW = (0, mw[tT[108]])(tT[49]);
      let wW = tT[49],
        qW = (0, mw[tT[108]])(tT[49]);
      const TW = (...QQ) => {
          eT(QQ[tT[0]] = tT[4], OQ[mQ] = QQ[tT[1]], KQ[mQ] = QQ[tT[2]], mQ++)
        },
        zW = (...QQ) => (eT(QQ[tT[0]] = tT[2], QQ[-tT[125]] = tT[22]), (QQ[-tT[125]] = (KQ[QQ[tT[1]]] ? XW : WW)[OQ[QQ[tT[1]]]]) !== tT[49] && void 0 !== QQ[-tT[125]] ? QQ[-tT[125]] : -tT[2]),
        sW = (0, mw[tT[50]])("d2lvNjQz"),
        FW = (0, mw[tT[50]])("amtsa2plZndu"),
        PW = [
          [(0, mw[tT[50]])("aW9qZndlODNq"), "2"],
          [(0, mw[tT[50]])("a3Bq"), "4"],
          [(0, mw[tT[50]])("dXJocmZm"), "5"]
        ],
        gW = [
          [(0, mw[tT[50]])(tT[128] + tT[126]), tT[127]],
          [(0, mw[tT[50]])(tT[128] + "w="), tT[108]]
        ],
        JW = (0, mw[tT[50]])("eTR5bnM="),
        rW = (0, mw[tT[50]])("aHRleWpldA=="),
        IW = (0, mw[tT[50]])("c2RmbGpneGxmY2pr"),
        jW = [
          [(0, mw[tT[50]])("a3NhZmR1"), tT[131]],
          [(0, mw[tT[50]])("ZGZnYWFzZGFz"), tT[50]],
          [IW, tT[129]],
          [(0, mw[tT[50]])("bGFzZWRraGFz"), tT[93]],
          [(0, mw[tT[50]])("cW16ZjhrM24="), tT[15]]
        ],
        BW = [
          [JW, tT[144]],
          [rW, tT[145]],
          [(0, mw[tT[50]])("bmI3ZnEy"), tT[14]]
        ],
        yW = (0, mw[tT[50]])("bGtxM20="),
        VW = (0, mw[tT[50]])("bWtxN3" + tT[126]),
        pW = ["mk:tw", "mk:jf"],
        GW = ((...QQ) => {
          QQ[tT[0]] = tT[1];
          try {
            return QQ[tT[130]] = tT[22], (QQ[tT[130]] = qQ[(0, mw[tT[50]])("V2ViU29ja2V0")]) === tT[49] || void 0 === QQ[tT[130]] ? void 0 : QQ[tT[130]][tT[122] + tT[123]]
          } catch {
            return tT[22]
          }
        })(),
        UW = ["send", "close", "addEventListener", "removeEventListener", tT[134] + tT[133] + tT[129]],
        bW = ["onmessage", "onopen", "onclos" + tT[11], "onerro" + tT[131]];
      let vW = tT[65];
      const dW = (...QQ) => {
          QQ[tT[0]] = tT[1];
          const XQ = WQ();
          XQ === tT[49] || vW || (vW = DQ((() => {
            if (GW !== tT[22] && (0, mw[tT[72]])(XQ) !== GW) return tT[75];
            for (let QQ = tT[1]; QQ < UW[tT[0]]; QQ++)
              if ((0, mw[tT[114]])(mw[tT[120]], XQ, [UW[QQ]])) return tT[75];
            for (let QQ = tT[1]; QQ < bW[tT[0]]; QQ++)
              if (XQ[bW[QQ]] !== tT[49] && XQ[bW[QQ]] !== tT[22]) return tT[75];
            return tT[65]
          })))
        },
        HW = (0, mw[tT[50]])("RXZlbnQ=");
      let aW = OW[tT[132]][tT[148]],
        lW = tT[1];
      const hW = () => lW++ === tT[30] ? (lW = tT[1], IQ(tT[65]) ? OW[tT[9]].CheckFuncHit : tT[1]) : tT[1],
        iW = (0, mw[tT[108]])(tT[49]),
        AW = wQ[tT[0]];
      for (let FQ = tT[1]; FQ < AW; FQ++) {
        const QQ = (0, mw[tT[114]])(mw.eb, wQ, [FQ]);
        iW[FQ] = QQ >= 99 && QQ <= 122 ? QQ : tT[1]
      }
      const RW = (...QQ) => {
          return QQ[tT[0]] = tT[4], typeof QQ[tT[1]] === tT[118] + tT[119] && (0, mw[tT[114]])(mw.Y, QQ[tT[2]], [(WQ = QQ[tT[1]], (0, mw.k)(mw.z, WQ, []))]) !== tT[49];
          var WQ
        },
        EW = new RegExp("^function dispatchEvent\\(\\) \\{\\s*\\[native code\\]\\s*\\}$", ""),
        CW = new RegExp("^function now\\(\\) \\{\\s*\\[native code\\]\\s*\\}$", ""),
        uW = [
          [kT["Dispat" + tT[133] + tT[129]], () => !RW(EventTarget[tT[122] + tT[123]][tT[134] + tT[133] + tT[129]], EW)],
          [kT.PerformanceNow, () => !RW(performance[tT[135]], CW)],
          [kT.DateNow, () => !RW(Date[tT[135]], CW)]
        ],
        LW = (0, mw[tT[108]])(tT[49]);
      let kW = tT[1];
      const fW = {
        stackCheck: () => {
          let QQ = tT[49];
          const WQ = RT((() => (QQ = rQ(tT[75]), QQ !== tT[49])));
          var XQ, wQ;
          return QQ !== tT[49] && jQ === tT[49] && (XQ = QQ[tT[61]], wQ = QQ[tT[62]], jQ = (0, rT.r)(aT(XQ, wQ))), WQ
        },
        [tT[136] + tT[137]]: (...QQ) => {
          QQ[tT[0]] = tT[1];
          const WQ = NQ();
          if (WQ === tT[4]) return tT[4];
          if (dQ[sW]) return tT[5];
          const XQ = CT((() => qQ[FW] ? tT[26] : tT[1]));
          return XQ !== tT[1] ? XQ === tT[26] ? tT[26] : tT[1] : WQ === ET ? tT[1] : WQ === tT[29] ? tT[29] : (GQ(), wQ = Function[tT[122] + tT[123]], TQ = tT[142], zQ = (...QQ) => (QQ[tT[0]] = tT[2], QQ[tT[1]].writable !== tT[75]), RT((() => {
            const QQ = Object.getOwnPropertyDescriptor(wQ, TQ);
            return void 0 !== QQ && zQ(QQ)
          })) ? tT[43] : tT[1]);
          var wQ, TQ, zQ
        },
        indexPassReplaced: tQ,
        [tT[138] + "tSubChanged"]: (...QQ) => {
          if (QQ[tT[0]] = tT[1], xQ === eQ || SQ) return tT[65];
          const WQ = nQ();
          return WQ !== eQ && WQ !== xQ
        },
        Ds: (...QQ) => {
          eT(QQ[tT[0]] = tT[1], QQ[tT[15]] = AW);
          for (let WQ = tT[1]; WQ < uW[tT[0]] + kW; WQ++) {
            const XQ = WQ < uW[tT[0]] ? uW[WQ] : LW[WQ - uW[tT[0]]];
            XQ[tT[1]] < QQ[tT[15]] && DQ(XQ[tT[2]]) && (QQ[tT[15]] = XQ[tT[1]])
          }
          return QQ[tT[15]] < AW ? iW[QQ[tT[15]]] : tT[1]
        },
        Zz: () => ZQ ? cW[tT[114]] : tT[7],
        [tT[139] + tT[140] + "Subs"]: (...QQ) => {
          QQ[tT[0]] = tT[1];
          const WQ = FQ[tT[114]].qV[tT[139] + tT[140]];
          return typeof WQ === tT[141] && WQ > tT[1] ? WQ > tT[48] ? tT[48] : WQ : tT[1]
        },
        ["getCom" + tT[157]]: (...QQ) => {
          eT(QQ[tT[0]] = tT[1], QQ[-tT[147]] = tT[22], mQ = tT[1]);
          for (let XQ = tT[1]; XQ < iQ; XQ++) TW(hQ[XQ], tT[75]);
          for (let XQ = tT[1]; XQ < PW[tT[0]]; XQ++) dQ[PW[XQ][tT[1]]] && TW(PW[XQ][tT[2]], tT[75]);
          const WQ = CT((() => AT(atob[tT[142]](), gQ) ? tT[1] : tT[2]));
          WQ === tT[2] && TW(tT[8], tT[75]), GQ();
          const wQ = WQ === ET ? ET : CT(((...QQ) => {
            QQ[tT[0]] = tT[1];
            const WQ = Object.getOwnPropertyDescriptor(window, "atob");
            return WQ === tT[22] ? ET : WQ[tT[143]] !== tT[22] ? tT[2] : tT[1]
          }));
          wQ === tT[2] && TW(tT[9], tT[75]);
          const qQ = wQ === ET;
          for (let XQ = tT[1]; XQ < gW[tT[0]] && !qQ; XQ++) dQ[gW[XQ][tT[1]]] && TW(gW[XQ][tT[2]], tT[75]);
          const TQ = mQ > iQ;
          QQ[tT[45]] = tT[49], iQ === tT[1] && (AQ > tT[1] ? QQ[tT[45]] = cQ[tT[1]] : CQ ? QQ[tT[45]] = "fp" : TQ || (QQ[tT[45]] = dQ[JW] ? tT[144] : dQ[rW] ? tT[145] : tT[49]));
          for (let XQ = tT[1]; XQ < jW[tT[0]] && !qQ; XQ++) dQ[jW[XQ][tT[1]]] && TW(jW[XQ][tT[2]], tT[75]);
          const zQ = mQ,
            sQ = (0, yT[tT[14]])(),
            FQ = sQ !== tT[49] && (0, DW[tT[108]])(sQ);
          FQ && !qQ && TW(sQ, tT[65]), oQ && TW("ix", tT[65]), lQ && TW("il", tT[65]);
          for (let XQ = tT[1]; XQ < AQ; XQ++) TW(cQ[XQ], tT[75]);
          for (let XQ = tT[1]; XQ < BW[tT[0]]; XQ++) dQ[BW[XQ][tT[1]]] && TW(BW[XQ][tT[2]], tT[75]);
          dQ[yW] && TW("mk:lk", tT[75]);
          const PQ = ((...QQ) => {
            QQ[tT[0]] = tT[2];
            for (let WQ = tT[1]; WQ < pW[tT[0]]; WQ++)
              if (QQ[tT[1]] === pW[WQ]) return pW[WQ];
            return tT[49]
          })(dQ[VW]);
          if (PQ !== tT[49] && TW(PQ, tT[75]), XQ !== tT[49] && UQ(XQ.emitReplaced) === tT[75] && TW("mk:em", tT[75]), vW && TW("3s", tT[65]), mw.$ && TW("3b", tT[65]), GQ(), pQ && TW("3d", tT[65]), qQ && TW("3g", tT[65]), sQ === tT[49] || FQ || TW(sQ, tT[65]), jQ !== tT[49] && TW(jQ, tT[65]), VQ === tT[49] && XQ !== tT[49]) {
            const QQ = UQ(XQ[tT[136] + "mMeshHitStac" + tT[114]]);
            typeof QQ === tT[112] && (VQ = function(QQ, WQ, XQ) {
              let wQ = 0;
              for (; wQ < XQ && -1 === pT(QQ, WQ[wQ]);) wQ++;
              return (0, rT.i)(aT(QQ, wQ < XQ ? WQ[wQ] : null))
            }(QQ, JQ, JQ[tT[0]] - tT[2]))
          }
          var rQ;
          if (VQ !== tT[49] && TW(VQ, tT[65]), BQ === tT[49] && cW[tT[9]] !== tT[49] && eT((rQ = cW[tT[9]], BQ = (0, rT.h)(iT(rQ).reader)), yQ = cT(cW[tT[9]], UQ((() => cW[tT[14]] === tT[49] ? tT[49] : (0, mw.gb)(cW[tT[14]]))))), BQ !== tT[49] && TW(BQ, tT[65]), yQ !== tT[49] && TW(yQ, tT[65]), mQ === tT[1]) return tT[49];
          if (QQ[tT[45]] === tT[49] && KQ[tT[1]] && !(0, rT[tT[117]])(OQ[tT[1]]))
            for (let XQ = tT[2]; XQ < zQ; XQ++)
              if (KQ[XQ] && (0, rT[tT[117]])(OQ[XQ])) {
                const QQ = OQ[XQ];
                for (let WQ = XQ; WQ > tT[1]; WQ--) eT(OQ[WQ] = OQ[WQ - tT[2]], KQ[WQ] = KQ[WQ - tT[2]]);
                eT(OQ[tT[1]] = QQ, KQ[tT[1]] = tT[75]);
                break
              } if (eT(QQ[tT[4]] = tT[1], QQ[-tT[146]] = QQ[tT[45]] === tT[49] ? tT[1] : zQ), QQ[-tT[146]] > tT[1] && sQ !== tT[49] && FQ && !qQ) {
            for (let WQ = QQ[-tT[146]]; WQ > tT[1]; WQ--) eT(OQ[WQ] = OQ[WQ - tT[2]], KQ[WQ] = KQ[WQ - tT[2]]);
            eT(OQ[tT[1]] = sQ, KQ[tT[1]] = tT[65], QQ[tT[4]] = tT[2], QQ[-tT[146]]++)
          }
          if (QQ[tT[11]] = tT[1], MQ++ % tT[4] === tT[2])
            for (let XQ = tT[2]; XQ < mQ; XQ++) zW(XQ) < zW(QQ[tT[11]]) && (QQ[tT[11]] = XQ);
          const IQ = OQ[QQ[tT[11]]];
          (KQ[QQ[tT[11]]] ? XW : WW)[IQ] = QW++;
          const DQ = QQ[tT[11]] >= QQ[tT[4]] && QQ[tT[11]] < QQ[-tT[146]];
          if (!KQ[QQ[tT[11]]] || IQ === QQ[tT[45]] || QQ[tT[11]] === tT[1] && !DQ) return IQ === tT[129] ? (0, rT[tT[50]])(dQ[IW], rT[tT[54]]) : IQ;
          const bQ = (QQ[-tT[147]] = QQ[tT[45]]) !== tT[49] && void 0 !== QQ[-tT[147]] ? QQ[-tT[147]] : OQ[tT[1]];
          return bQ !== wW && eT(wW = bQ, qW = (0, mw[tT[108]])(tT[49])), qW[IQ] ??= (0, rT[tT[145]])(IQ, bQ)
        }
      };
      let SW = OW[tT[132]][tT[148]];
      const tW = () => aW !== OW[tT[132]][tT[148]] ? aW : SW;
      let oW = tT[1],
        eW = tT[4],
        nW = tT[1],
        xW = tT[1];
      return {
        checks: fW,
        checkEvent: (...QQ) => {
          QQ[tT[0]] = tT[2];
          try {
            const WQ = qQ[HW];
            if (typeof WQ === tT[118] + tT[119] && !(QQ[tT[1]] instanceof WQ) && !(0, mw.G)(QQ[tT[1]])) return aW = OW[tT[132]].NotEvent, tT[1];
            if (QQ[tT[1]].isTrusted === tT[65]) return tT[1];
            let XQ = tT[1];
            for (const wQ in QQ[tT[1]]) XQ++;
            return XQ < tT[27] ? (aW = OW[tT[132]]["FewPropertie" + tT[50]], tT[1]) : hW()
          } catch {}
          return tT[1]
        },
        checkPadCall: () => {
          try {
            return hW()
          } catch {
            return tT[1]
          }
        },
        usedProp: tW,
        watchHeld: (...QQ) => {
          eT(QQ[tT[0]] = tT[4], QQ[tT[152]] = tT[22]);
          const WQ = bQ((() => {
            QQ[tT[152]] = QQ[tT[2]]()
          }));
          LW[kW++] = [QQ[tT[1]], () => !WQ || QQ[tT[2]]() !== QQ[tT[152]]]
        },
        fJ: (...QQ) => {
          QQ[tT[0]] = tT[1];
          const WQ = tQ();
          return ((...QQ) => {
            if (eT(QQ[tT[0]] = tT[2], QQ[-tT[150]] = tT[22], QQ[tT[14]] = tT[22]), XQ !== tT[49]) {
              const WQ = UQ(XQ.yz),
                wQ = "v3" === WQ ? tT[5] : "v5" === WQ ? tT[30] : "v6" === WQ ? tT[29] : tT[4];
              wQ !== tT[4] && (eW = wQ);
              const qQ = UQ(XQ["inbuil" + tT[155] + tT[156]]);
              typeof qQ === tT[141] && qQ >= tT[1] && qQ <= tT[149] && (qQ | tT[1]) === qQ && (nW = qQ), eT(QQ[-tT[150]] = UQ(XQ.reflectApplyHit), QQ[tT[14]] = UQ(XQ.definerHit))
            }
            const WQ = QQ[tT[1]] ? tT[25] : "11" === QQ[tT[14]] ? tT[149] : "13" === QQ[tT[14]] ? tT[151] : QQ[-tT[150]] !== tT[22] && QQ[-tT[150]] !== tT[49] ? tT[4] : "10" === QQ[tT[14]] ? tT[27] : "12" === QQ[tT[14]] ? tT[31] : tT[1];
            WQ !== tT[1] && (xW = WQ)
          })(WQ), oW++ % 10 === tT[1] && (dW(), RT((() => !AT(qQ[TQ][tT[142]][tT[142]](), gQ))) && (SW = SW === OW[tT[132]][tT[153]] ? OW[tT[132]][tT[153]] : OW[tT[132]].Fr), RT((() => !AT(qQ[TQ][tT[142]](), gQ))) && (SW = OW[tT[132]][tT[153]])), {
            flags: WQ ? OW[tT[9]].Butto : tT[1],
            values: [
              [OW[tT[154]].PhysicsVersion, eW],
              [OW[tT[154]]["Inbuil" + tT[155] + tT[156]], nW],
              [OW[tT[154]]["AltCom" + tT[157]], xW],
              [OW[tT[154]]["ProbeUsedPro" + tT[127]], tW()]
            ]
          }
        }
      }
    };
    const nT = "[bloxd-wasm-client]",
      xT = "bloxdWasmDownloadFailed",
      YT = gX.f,
      NT = "boot",
      ZT = "playSources",
      OT = "wasmBuild",
      KT = "bloxd-wasm-joined",
      mT = "bloxd-wasm-first-view",
      MT = "bloxd-wasm-playable-legacy",
      Qz = 1048576,
      Wz = 8 * Qz,
      Xz = 1006,
      wz = 1e3,
      qz = "You lost connection to the server.",
      Tz = "general:lostConnection",
      zz = 1048576,
      sz = 5e3,
      Fz = 100,
      Pz = [2e3, 1e4, 3e4],
      gz = 3e4;
    let Jz = null,
      rz = null,
      Iz = !1,
      jz = !1,
      Bz = !1,
      yz = null,
      Vz = null,
      Dz = null,
      pz = null,
      Gz = null,
      Uz = null,
      bz = null;
    const vz = new class {
      constructor(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now();
        this.master = QQ, this.soundOn = WQ, this.now = XQ, this.player = null, this.local = [], this.stopped = !1
      }
      get loaded() {
        return null !== this.player
      }
      get queued() {
        return this.local.length
      }
      prepare() {
        var QQ;
        null === (QQ = this.player) || void 0 === QQ || QQ.prepare()
      }
      preload(QQ) {
        var WQ;
        this.stopped || (null === (WQ = this.player) || void 0 === WQ || WQ.preload(QQ))
      }
      endSession() {
        var QQ;
        null === (QQ = this.player) || void 0 === QQ || QQ.cancelPreload(), this.freeSheets()
      }
      freeSheets() {
        var QQ;
        null === (QQ = this.player) || void 0 === QQ || QQ.freeSheetsAfterGame()
      }
      load(QQ) {
        if (null !== this.player || this.stopped) return;
        this.player = QQ, QQ.setMaster(this.master, this.soundOn);
        const WQ = this.now(),
          XQ = this.local;
        this.local = [];
        for (const qQ of XQ)
          if (!(qQ.stopped || !qQ.loop && WQ - qQ.at >= 300)) try {
            this.start(qQ, QQ, WQ)
          } catch (wQ) {
            console.error("[bloxd-wasm-client] a queued sound wouldn't start", wQ)
          }
      }
      start(QQ, WQ, XQ) {
        const {
          name: wQ,
          pos: qQ,
          ear: TQ,
          maxHearDist: zQ,
          refDistance: sQ,
          loop: FQ,
          fade: PQ
        } = QQ, gQ = WQ.playGame(wQ, xW(QQ, XQ), qQ, TQ, zQ, sQ, FQ);
        if (QQ.sound = gQ, 1 !== QQ.rate && gQ.rate(QQ.rate), null !== QQ.panner && gQ.setPannerAttr(QQ.panner), null !== QQ.moved && gQ.setPosition(QQ.moved), null !== PQ && XQ - PQ.at < PQ.ms) {
          const WQ = nW(this.master);
          WQ > 0 ? gQ.fade(0, QQ.volume * WQ, PQ.at + PQ.ms - XQ) : gQ.setRelativeVolume(QQ.volume)
        }
      }
      onAudioEvent(QQ, WQ, XQ, wQ) {
        var qQ, TQ;
        return null === (qQ = null === (TQ = this.player) || void 0 === TQ ? void 0 : TQ.onAudioEvent(QQ, WQ, XQ, wQ)) || void 0 === qQ || qQ
      }
      applyListener(QQ) {
        var WQ;
        null === (WQ = this.player) || void 0 === WQ || WQ.applyListener(QQ)
      }
      playGame(QQ, WQ, XQ, wQ, qQ, TQ, zQ) {
        if (this.stopped) return eW.e;
        if (this.player) return this.player.playGame(QQ, WQ, XQ, wQ, qQ, TQ, zQ);
        const sQ = this.now();
        this.local = this.local.filter((QQ => !QQ.stopped && (QQ.loop || sQ - QQ.at < 300)));
        const FQ = {
          name: QQ,
          volume: nW(WQ),
          fade: null,
          pos: XQ && [XQ[0], XQ[1], XQ[2]],
          ear: wQ && [wQ[0], wQ[1], wQ[2]],
          maxHearDist: qQ,
          refDistance: TQ,
          loop: zQ,
          rate: 1,
          panner: null,
          moved: null,
          at: sQ,
          stopped: !1,
          sound: null
        };
        this.local.push(FQ);
        const PQ = {
          stop: () => {
            var QQ;
            return FQ.stopped = !0, null === (QQ = FQ.sound) || void 0 === QQ || QQ.stop(), PQ
          },
          fade: (QQ, WQ, XQ) => {
            if (FQ.sound) return FQ.sound.fade(QQ, WQ, XQ), PQ;
            const wQ = nW(this.master),
              qQ = nW(wQ > 0 ? WQ / wQ : WQ > 0 ? FQ.volume : 0),
              TQ = this.now(),
              zQ = xW(FQ, TQ);
            return FQ.volume = qQ, FQ.fade = XQ > 0 && zQ !== qQ ? {
              from: zQ,
              at: TQ,
              ms: XQ
            } : null, PQ
          },
          rate: QQ => (FQ.sound ? FQ.sound.rate(QQ) : FQ.rate = QQ, PQ),
          getVolume: () => FQ.sound ? FQ.sound.getVolume() : FQ.volume * nW(this.master),
          getRelativeVolume: () => FQ.sound ? FQ.sound.getRelativeVolume() : FQ.volume,
          setRelativeVolume: QQ => (FQ.sound ? FQ.sound.setRelativeVolume(QQ) : (FQ.volume = nW(QQ), FQ.fade = null), PQ),
          setPannerAttr: QQ => (FQ.sound ? FQ.sound.setPannerAttr(QQ) : FQ.panner = {
            ...QQ
          }, PQ),
          setPosition: QQ => (FQ.sound ? FQ.sound.setPosition(QQ) : FQ.moved = [QQ[0], QQ[1], QQ[2]], PQ)
        };
        return PQ
      }
      setMaster(QQ, WQ) {
        var XQ;
        this.master = QQ, this.soundOn = WQ, null === (XQ = this.player) || void 0 === XQ || XQ.setMaster(QQ, WQ)
      }
      stop() {
        var QQ;
        this.stopped = !0, null === (QQ = this.player) || void 0 === QQ || QQ.stopAll();
        for (const WQ of this.local) WQ.stopped = !0;
        this.local = []
      }
    }((0, AW.c)(), !0);
    let dz = {
        wasm: "unknown",
        client: String(gW.c)
      },
      Hz = null,
      az = () => {};
    const lz = new Promise((QQ => {
      az = QQ
    }));
    let hz = () => {};
    const iz = new Promise((QQ => {
      hz = QQ
    }));
    let cz, Az = null,
      Rz = null,
      Ez = null,
      Cz = null,
      uz = null,
      Lz = null,
      kz = null,
      fz = null,
      Sz = null,
      tz = null,
      oz = null,
      ez = null,
      nz = null,
      xz = null,
      Yz = null,
      Nz = null,
      Zz = null,
      Oz = null,
      Kz = null,
      mz = !1,
      Mz = null;
    const Qs = new Set,
      Ws = new Set;

    function Xs(QQ) {
      if (!Qs.has(QQ)) {
        Qs.add(QQ);
        for (const XQ of Ws) try {
          XQ(QQ)
        } catch (WQ) {
          console.error(`${nT} a startup listener threw`, WQ)
        }
      }
    }

    function ws(QQ) {
      mz = !0, QQ.isStopped || Xs("texturesIn")
    }
    let qs = 1,
      Ts = -1 / 0,
      zs = -1 / 0,
      ss = -1 / 0,
      Fs = !1,
      Ps = null,
      gs = !1,
      rs = !1,
      Is = 0,
      Bs = null,
      ys = !1;
    const Vs = {
      dropped: -1 / 0,
      pause: -1 / 0,
      backlog: -1 / 0
    };
    let Ds = 0,
      ps = 0,
      Gs = null,
      Us = null,
      bs = null,
      vs = null;
    const ds = new WeakMap;
    let Hs = null,
      as = null,
      ls = !1,
      hs = null,
      is = null,
      cs = null,
      As = null,
      Rs = null,
      Es = null,
      Cs = 0;
    const us = new Set;
    let Ls = 0,
      ks = 0,
      fs = 0,
      Ss = null,
      ts = null,
      os = null,
      es = null,
      ns = -1 / 0,
      xs = null;
    const Ys = new Set;
    let Ns = !1,
      Zs = null;
    const Os = new Map,
      Ks = new Set;
    let ms = !1;
    const Ms = {
      adapter: null,
      boundAtMs: null,
      indirectHangs: null,
      restoresSkipped: null
    };
    let QF = null,
      WF = () => [0, 0],
      XF = () => {},
      wF = () => {},
      qF = null,
      TF = null;
    const zF = new class {
      constructor(QQ) {
        this.reached = QQ, this.next = 1
      }
      observe(QQ) {
        if (!(QQ < this.next)) {
          for (; this.next <= QQ;) this.next *= 2;
          this.reached(QQ)
        }
      }
    }((QQ => {
      console.warn(`${nT} chunk cancels from the server this session: ${QQ}`)
    }));
    let sF = 1,
      FF = null,
      PF = null,
      gF = null,
      JF = null,
      rF = null,
      IF = !1,
      jF = !1,
      BF = 0,
      yF = null,
      VF = !1,
      DF = null,
      pF = null,
      GF = null,
      UF = !1;
    const bF = new class {
        constructor(QQ) {
          this.mB = QQ, this.lossPending = !1, this.undrawnSinceMs = null, this.lastFrameMs = 0, this.shown = !1
        }
        deviceLost() {
          this.lossPending = !0
        }
        frame(QQ, WQ, XQ) {
          (0, uW.b)(QQ) && (this.lossPending = !1);
          const wQ = XQ - this.lastFrameMs;
          this.lastFrameMs = XQ, this.lossPending && WQ && (0, uW.f)(QQ) ? (null === this.undrawnSinceMs || wQ > 1e3) && (this.undrawnSinceMs = XQ) : this.undrawnSinceMs = null, this.show(null !== this.undrawnSinceMs && XQ - this.undrawnSinceMs >= 2e3)
        }
        stop() {
          this.lossPending = !1, this.undrawnSinceMs = null, this.show(!1)
        }
        show(QQ) {
          QQ !== this.shown && (this.shown = QQ, this.mB(QQ))
        }
      }((QQ => {
        FQ.k.mB(jQ.d, QQ)
      })),
      vF = new class {
        constructor(QQ) {
          let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => performance.now();
          this.nI = QQ, this.now = WQ, this.lostAtMs = null, this.asked = !1, this.lastRestore = null, this.watched = new WeakSet
        }
        watch(QQ, WQ) {
          this.watched.has(QQ) || (this.watched.add(QQ), QQ.addEventListener("webglcontextlost", (() => {
            WQ() && this.contextLost()
          })), QQ.addEventListener("webglcontextrestored", (() => {
            WQ() ? this.contextRestored() : (this.take(), this.lastRestore = null)
          })))
        }
        frame(QQ, WQ) {
          (0, uW.f)(QQ) && WQ && null !== this.lostAtMs && this.now() - this.lostAtMs >= 1e3 && (this.asked = !0)
        }
        contextLost() {
          null === this.lostAtMs && (this.lostAtMs = this.now(), this.asked = !1)
        }
        unheldRestore(QQ) {
          const WQ = this.lastRestore;
          return null !== WQ && QQ - WQ.atMs < 3e4 ? WQ : null
        }
        contextRestored() {
          const QQ = this.take();
          if (null === QQ) this.lastRestore = null;
          else {
            var WQ, XQ;
            const wQ = this.unheldRestore(QQ.lostAtMs);
            this.lastRestore = {
              atMs: this.now(),
              firstLostAtMs: null !== (WQ = null === wQ || void 0 === wQ ? void 0 : wQ.firstLostAtMs) && void 0 !== WQ ? WQ : QQ.lostAtMs,
              asked: null !== (XQ = null === wQ || void 0 === wQ ? void 0 : wQ.asked) && void 0 !== XQ && XQ || QQ.asked
            };
            const qQ = QQ.asked ? "restore_context" : "natural";
            this.nI(`webgl_restored_${qQ}_${QQ.delay}`, `WebGL2 context restored (${qQ}, wasm)`)
          }
        }
        gaveUp() {
          const QQ = this.take();
          if (null !== QQ) {
            var WQ;
            const XQ = this.unheldRestore(QQ.lostAtMs),
              wQ = null === XQ ? QQ.delay : (0, LW.n)(this.now() - XQ.firstLostAtMs),
              qQ = QQ.asked || null !== (WQ = null === XQ || void 0 === XQ ? void 0 : XQ.asked) && void 0 !== WQ && WQ ? "restore_tried" : "restore_untried";
            this.nI(`webgl_rejoin_${qQ}_${wQ}`, "WebGL2 context not restored: rejoining (wasm)")
          }
          this.lastRestore = null
        }
        take() {
          const QQ = this.lostAtMs;
          return null === QQ ? null : (this.lostAtMs = null, {
            lostAtMs: QQ,
            delay: (0, LW.n)(this.now() - QQ),
            asked: this.asked
          })
        }
      }(AX.reportRenderRecovery);
    let dF = !1,
      HF = !0,
      aF = null,
      lF = !1,
      hF = !1,
      iF = !1;

    function cF() {
      return Dz ??= Promise.all([XQ.e(206), XQ.e(146), XQ.e(62)]).then((() => XQ(51202))).then((QQ => (Vz = QQ, Object.assign(globalThis, {
        bloxdPreviewPage: QQ.pagePreviews()
      }), QQ)), (QQ => {
        throw Dz = null, QQ
      })), Dz
    }

    function AF() {
      return yz ??= XQ.e(60).then((() => XQ(51218))).catch((QQ => {
        throw yz = null, new AQ.c(QQ)
      })), yz
    }
    class RF {
      constructor() {
        this.host = null
      }
      open(QQ) {
        return null !== this.host ? QQ(this.host) : cF().then((WQ => (this.host ??= new WQ.WasmPreviewHost(WQ.pagePreviews()), QQ(this.host))))
      }
      openMob(QQ) {
        return this.open((WQ => WQ.openMob(QQ)))
      }
      openPet(QQ) {
        return this.open((WQ => WQ.openPet(QQ)))
      }
      openMobLineup(QQ) {
        return this.open((WQ => WQ.openMobLineup(QQ)))
      }
      openCharacter(QQ, WQ) {
        return this.open((XQ => XQ.openCharacter(QQ, WQ)))
      }
    }

    function EF() {
      Bz || (Bz = !0, aq.f.setHost(new RF), (0, uX.n)(), bq.d.setFollower(fP), Object.assign(globalThis, {
        bloxdPreviews: aq.f
      }))
    }

    function CF() {
      cF().then((QQ => {
        QQ.pagePreviews().prefetch()
      }), (() => {}))
    }

    function uF() {
      let QQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      if (jz) return;
      jz = !0, dF = "play" === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "shell"), HF = !dF, console.info(`${nT} starting`), Iz || (Iz = !0, (0, jQ.K)(new SW(WP, PP)), (0, rQ.r)(new tW), (0, jQ.H)(new oW), (0, jQ.y)()), dF && FQ.k.subscribe("appManagerUpdated|gameState", QP), EF(), (0, AX.setCrashScreen)((QQ => {
        let {
          text: WQ,
          reload: XQ
        } = QQ;
        ! function(QQ, WQ) {
          var XQ, wQ;
          if (lF) return;
          lF = !0, (0, kX.V)(), null === (XQ = xs) || void 0 === XQ || XQ.abort(), xs = null, vq.b.release();
          const qQ = dF ? null !== (wQ = QQ.cancel) && void 0 !== wQ ? wQ : "general:back" : null;
          fw({
            ...QQ,
            cancel: qQ
          }).then((QQ => {
            QQ && WQ && hF ? ((0, UW.s)("reloadOntoJs"), (0, MQ.g)(UW.B)) : QQ && WQ ? (0, MQ.j)() : dF && (0, MQ.e)("/")
          }))
        }(WQ, XQ)
      })), (0, rq.i)(), (0, cW.j)();
      let WQ = null;
      try {
        WQ = ST("vufcrsr7kke", (() => {
          var QQ, WQ;
          return null !== (QQ = null === (WQ = Az) || void 0 === WQ ? void 0 : WQ.ws) && void 0 !== QQ ? QQ : null
        }), QQ, "euyfsxnmtv")
      } catch (qQ) {
        console.error(`${nT} probes`, qQ)
      }
      const wQ = function() {
        const QQ = (0, Zw.m)(),
          WQ = (0, Zw.j)();
        let XQ = !1;
        return wQ => {
          QQ && !XQ && (XQ = !0, (0, AX.reportStaleBuildReload)(QQ, WQ, wQ))
        }
      }();
      tP(), dF || function() {
        const QQ = function(QQ) {
          var WQ;
          const XQ = new URLSearchParams(QQ),
            wQ = XQ.get("game");
          return wQ ? {
            game: wQ,
            lobby: null !== (WQ = XQ.get("lobby")) && void 0 !== WQ ? WQ : null
          } : null
        }(window.location.search);
        if (QQ) return (0, JW.k)(QQ.game) && tP().request(), void fF(QQ.game, QQ.lobby);
        const WQ = new URLSearchParams(window.location.search).get("ws");
        if (!WQ) return;
        lz.then((QQ => {
          QQ && async function(QQ, WQ) {
            try {
              await (0, AQ.m)(QQ), hs = jP(new WebSocket(WQ)), null !== hs && vq.b.setGame(null), LF()
            } catch (qQ) {
              console.error(`${nT} ?ws=${WQ} did not attach`, qQ)
            }
          }(QQ, WQ)
        }))
      }(), async function(QQ) {
        var WQ, wQ, TQ, zQ, sQ, PQ;
        if ("undefined" === typeof WebAssembly) return iP("noWebAssembly", "unsupported", "This browser has no WebAssembly"), null;
        const gQ = (0, Rq.S)(),
          rQ = await async function(QQ, WQ) {
            const XQ = (0, gX.n)(QQ) ? AP(QQ, WQ) : null;
            if (null === XQ || void 0 === XQ || !XQ.retries) return QQ;
            console.warn(`${nT} ${XQ.detail}: picking again in ${cP} ms`), await new Promise((QQ => {
              setTimeout(QQ, cP)
            }));
            const wQ = await (0, Rq.V)();
            if (!(0, gX.n)(wQ)) {
              var qQ;
              (0, AX.reportNoBackendRetry)("reprobed", XQ.decline, XQ.detail, {
                ...XQ.details,
                backend: null !== (qQ = null === wQ || void 0 === wQ ? void 0 : wQ.backend) && void 0 !== qQ ? qQ : "none"
              }), null !== wQ && (0, Rq.O)(wQ.backend)
            }
            return wQ
          }(await (0, Rq.J)(), gQ);
        if ((0, AX.setCrashBackend)((0, gX.n)(rQ) ? "unsupported" : null !== (WQ = null === rQ || void 0 === rQ ? void 0 : rQ.backend) && void 0 !== WQ ? WQ : "none"), (0, gX.n)(rQ)) return function(QQ) {
          let {
            decline: WQ,
            detail: XQ,
            details: wQ,
            retries: qQ
          } = QQ;
          if (qQ && (0, UW.h)()) return (0, AX.reportNoBackendRetry)("reload", WQ, XQ, wQ), void RP(`${XQ}, again after ${cP} ms`);
          iP("browser", WQ, XQ, qQ ? {
            ...wQ,
            afterReload: String(UW.r)
          } : wQ)
        }(AP(rQ, gQ)), null;
        if ((0, mq.m)("render")) try {
          const {
            startRenderDebug: QQ
          } = await Promise.all([XQ.e(80), XQ.e(51)]).then((() => XQ(4995)));
          QQ(rQ)
        } catch (GW) {
          console.warn("The render debug topic didn't load", GW)
        }
        if ((0, mq.m)("renderlite")) try {
          const {
            startRenderLite: QQ
          } = await Promise.all([XQ.e(277), XQ.e(52)]).then((() => XQ(51231)));
          gF = QQ(rQ)
        } catch (GW) {
          console.warn("The renderlite debug topic didn't load", GW)
        }
        if ((0, mq.m)("renderprobe")) try {
          const {
            startRenderProbe: QQ
          } = await XQ.e(53).then((() => XQ(51238)));
          QQ(rQ)
        } catch (GW) {
          console.warn("The renderprobe debug topic didn't load", GW)
        }
        if ("webgl" === (null === rQ || void 0 === rQ ? void 0 : rQ.backend) && dF && "wasm" !== (0, UW.e)(window.location.search)) {
          const QQ = xw(rQ);
          null !== QQ && (0, bW.j)(QQ)
        }
        const IQ = null !== (wQ = null === rQ || void 0 === rQ ? void 0 : rQ.backend) && void 0 !== wQ ? wQ : null;
        Ms.adapter = null !== (TQ = null === rQ || void 0 === rQ ? void 0 : rQ.adapter) && void 0 !== TQ ? TQ : null, Ms.boundAtMs = null, Ms.indirectHangs = null, Ms.restoresSkipped = null;
        const jQ = !(0, gX.cb)();
        null === rQ || (0, gX.B)(rQ.reason) || console.info(`${nT} drawing with ${rQ.backend}: ${rQ.reason}`);
        const BQ = (0, Rq.z)();
        hz(!0), (0, AQ.y)((QQ => {
          try {
            null !== IQ && (qF = QQ.startSkyFeed, LP(), function(QQ) {
              var WQ, XQ;
              WF = QQ.rasterText, cs = QQ.setTextLocalPlayer, QQ.setTextLocalPlayer(null !== (WQ = null === (XQ = is) || void 0 === XQ ? void 0 : XQ.info.playerDbId) && void 0 !== WQ ? WQ : null), XF = QQ.drainTextRerasters, wF = QQ.loadTextIcons, QQ.warmText((() => IF)), QQ.textChanged(), IF && setTimeout(wF, 0)
            }(QQ), TF = QQ.startShellAnalytics, NP())
          } finally {
            iF || (JF = QQ.followMenuPrefs({
              setSoundPrefs: JP,
              setEnvPrefs: rP,
              setUiPrefs: gP,
              setLookPrefs: IP
            }))
          }
        })), (0, AQ.p)(vz).catch((QQ => {
          console.warn(`${nT} the game code did not load: a join asks again`, QQ)
        }));
        const yQ = (0, Rq.j)(rQ);
        let VQ, pQ;
        yQ.catch((() => {})), "loading" === (0, BW.z)() && UQ();
        try {
          VQ = function(QQ) {
            const WQ = null !== QQ && void 0 !== QQ ? QQ : document.createElement("canvas");
            WQ.id = "wasm-game-canvas", vF.watch(WQ, (() => null !== vs && Jg())), (0, Sq.k)();
            const XQ = (0, fW.f)(),
              wQ = (0, fW.h)(XQ);
            WQ.style.cssText = "position:absolute;top:0;left:0;display:block;touch-action:none;outline:none;background:#000", (0, fq.c)(WQ, wQ), (0, fW.d)(WQ, XQ), WQ.width = wQ.bufferWidth, WQ.height = wQ.bufferHeight;
            const qQ = document.createElement("div");
            return qQ.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;overflow:hidden", qQ.append(WQ), XP(qQ, HF), aF = qQ, document.body.append(qQ), WQ
          }(null === IQ ? null : await (await cF()).pagePreviews().beginSession())
        } catch (qQ) {
          return await Rg({
            site: OT,
            error: qQ
          }, (() => {
            (0, AX.showUnsupported)((0, uw.m)("fetch"), zT.c.fetch, `the previews did not load: ${String(qQ)}`)
          })), null
        }
        UQ();
        try {
          pQ = await yQ
        } catch (qQ) {
          return await Rg({
            site: OT,
            error: qQ
          }, (() => {
            (0, AX.showUnsupported)((0, uw.m)("fetch"), zT.c.fetch, `the ${null!==IQ&&void 0!==IQ?IQ:"client"} build did not load: ${String(qQ)}`)
          })), null
        }
        const GQ = (0, Rq.e)(),
          bQ = !GQ && !0 !== nX.m.getItem(xT),
          vQ = !GQ && "loading" === (0, BW.z)();
        await (0, Eq.e)(pQ, {
          reloadFailedDownload: bQ
        }), vQ && !(0, BW.O)() && await (0, Eq.e)(pQ, {
          reloadFailedDownload: bQ
        });
        DQ = performance.now();
        const dQ = dz;
        if (!(0, BW.O)()) {
          (0, BW.M)() && nX.m.setItem(xT, !0);
          const QQ = (0, BW.r)();
          if ("call" === QQ) Vg({
            site: rX.y,
            error: (0, BW.n)(),
            header: null
          }, dQ);
          else {
            const WQ = null !== QQ && void 0 !== QQ ? QQ : "instantiate",
              XQ = () => {
                (0, AX.showUnsupported)((0, uw.m)(WQ), zT.c[WQ], (0, BW.h)())
              };
            if ("compile" !== QQ && "instantiate" !== QQ || !EP())
              if ("fetch" === WQ) {
                const QQ = [pQ.url().href, pW.e.url().href];
                await Rg({
                  site: OT,
                  error: (0, BW.h)(),
                  urls: QQ
                }, XQ)
              } else XQ();
            else {
              const WQ = (0, BW.h)(),
                XQ = (0, MW.e)((0, BW.n)());
              if (XQ && (0, UW.h)()) return (0, AX.reportCountedLoadFallback)((0, uw.m)(QQ), zT.c[QQ], WQ, "wasmReload"), RP(`the wasm client ran out of memory to ${QQ} here (${WQ})`), null;
              (0, AX.reportCountedLoadFallback)((0, uw.m)(QQ), zT.c[QQ], WQ, XQ ? "declined" : "pageAlone"), CP(`the wasm client did not ${QQ} here (${WQ})`, XQ ? "oom" : null)
            }
          }
          return null
        }(0, yW.R)(pQ.url()) && (0, AX.reportUnstreamedCoreLoad)();
        const HQ = (0, BW.B)();
        let aQ, lQ = dQ;
        try {
          lQ = {
            ...dQ,
            wasm: HQ.IJ()
          };
          const {
            Ry: QQ
          } = pQ.bindings, WQ = QQ.pwQ();
          if (WQ !== OW.A) return Vg({
            site: rX.d,
            error: `core ABI ${WQ}, page ABI ${OW.A}`,
            header: null
          }, lQ), null;
          const [XQ, wQ] = (0, OW.se)();
          aQ = new QQ(XQ, wQ)
        } catch (qQ) {
          return Vg({
            site: rX.d,
            error: qQ,
            header: null
          }, lQ), null
        }
        dz = lQ, Hz = pQ.bindings;
        const hQ = new rX.h(aQ, BW.w, {
          onCrash: QQ => {
            var WQ;
            null === (WQ = gF) || void 0 === WQ || WQ.crashed(QQ),
              function(QQ, WQ, XQ, wQ) {
                if ("webgpu" !== WQ || (0, Rq.b)()) return !1;
                const qQ = function(QQ) {
                  if (QQ.site === rX.e && (0, gX.o)(QQ.error)) return "frames_refused";
                  return QQ.site === YT && (0, gX.p)(QQ.error) ? "start_failed" : null
                }(QQ);
                if (null === qQ) return !1;
                if (null !== (0, gX.$)(qQ, wQ, (0, JX.d)(QQ.error))) return (0, AX.countRenderLost)(qQ, QQ.error, Ms), !1;
                return EW.C.reloaded(null, !1), (0, AX.reportRenderReload)("webgpu", "start_failed" === qQ ? 0 : 1, XQ, {
                  cause: qQ,
                  error: QQ.error,
                  context: Ms,
                  session: Ug(null)
                }), Wg(), !0
              }(QQ, IQ, lQ, jQ) || Vg(QQ, lQ)
          },
          onNetEvent: mP,
          onReconnectGrace: aP,
          onJoinPreloadEnded: HP,
          onCoreErrors: (QQ, WQ) => {
            var XQ, wQ;
            QQ.some((QQ => {
              let {
                code: WQ
              } = QQ;
              return WQ === OW.K.RenderDeviceLost
            })) && ((0, Rq.w)(), bF.deviceLost(), "webgpu" === IQ && ((0, JX.h)(QF), EW.C.lost())), null === (XQ = gF) || void 0 === XQ || XQ.coreErrors(QQ);
            const qQ = () => {
              (0, AX.reportCoreErrors)(QQ, WQ, lQ, ((QQ, WQ) => {
                var XQ;
                return QQ === OW.K.EnvUnknownSky ? (0, AX.unknownSkyWords)(vW.e.get("skyBox")) : QQ === OW.K.RenderDeviceLost ? (0, AX.deviceLossWords)(WQ, Ms.boundAtMs) : null === (XQ = QF) || void 0 === XQ ? void 0 : XQ.GwQ(QQ, WQ)
              }))
            };
            QQ.some((QQ => {
              let {
                code: WQ
              } = QQ;
              return WQ === OW.K.EnvUnknownSky
            })) ? queueMicrotask(qQ) : qQ(), null === (wQ = Mz) || void 0 === wQ || wQ.coreErrors(QQ)
          },
          onRenderReload: (QQ, WQ, XQ) => {
            ! function(QQ, WQ, XQ, wQ, qQ, TQ) {
              var zQ;
              if ((0, Rq.b)()) return;
              const sQ = WQ === OW.cd.WEBGPU,
                FQ = wQ === OW.cd.PIPELINE_FAILED ? "pipeline_failed" : "lost",
                PQ = wQ === OW.cd.RESTORE_LOST,
                gQ = sQ && (0, EW.p)(Ms.adapter, XQ, "lost" === FQ, PQ),
                rQ = (0, JX.j)(QF);
              null === (zQ = gF) || void 0 === zQ || zQ.reload(sQ, XQ, FQ, null === rQ || void 0 === rQ ? void 0 : rQ.message);
              const IQ = sQ ? (0, gX.$)(FQ, qQ, rQ) : null;
              if (null !== IQ) {
                (0, AX.countRenderLost)(FQ, rQ, Ms);
                const WQ = void 0 === rQ ? "" : ` (${rQ.message})`;
                return void QQ.crash(AX.RENDER_RELOAD_SITE, new Error(`${(0,AX.renderReloadMessage)("webgpu",FQ,XQ)} and ${IQ}${WQ}`))
              }
              const jQ = sQ ? "webgpu" : "webgl1" === TQ ? "webgl1" : "webgl";
              "lost" === FQ && (0, Rq.w)();
              sQ || ((0, UW.o)(), vF.gaveUp());
              (0, AX.reportRenderReload)(jQ, XQ, dz, {
                from: "game",
                cause: FQ,
                restoreLost: PQ,
                adapterRemembered: gQ,
                error: rQ,
                context: Ms,
                session: Ug(QQ.sunShadowsHeld())
              }), (0, Rq.q)();
              const BQ = (0, JQ.e)();
              let yQ = !1;
              const VQ = () => {
                yQ || (yQ = !0, Wg())
              };
              let DQ = null;
              const pQ = (0, JQ.n)((() => {
                null !== DQ && clearTimeout(DQ), BQ ? setTimeout(VQ, Qg) : VQ()
              }));
              !yQ && BQ && (DQ = setTimeout((() => {
                pQ(), VQ()
              }), MP))
            }(hQ, QQ, WQ, XQ, jQ, IQ)
          },
          onEnvEvent: QQ => {
            var WQ;
            QQ.kind === OW.Z.SkyImages ? null === (WQ = Nz) || void 0 === WQ || WQ.onEvent(QQ.payload) : QQ.kind === OW.Z.EnvLighting && (Zz = 1 === QQ.payload[0])
          },
          onImages: QQ => {
            var WQ;
            null === (WQ = Oz) || void 0 === WQ || WQ.onEvent(QQ)
          },
          onModelRequest: QQ => {
            var WQ;
            null === (WQ = nz) || void 0 === WQ || WQ.request(QQ)
          },
          onModelTaken: (QQ, WQ) => {
            var XQ;
            null === (XQ = nz) || void 0 === XQ || XQ.taken(QQ, WQ)
          },
          onTerrainTexturesWanted: () => {
            queueMicrotask((() => {
              ! function(QQ, WQ) {
                const XQ = bz;
                if (null === XQ || QQ.isStopped) return;
                XQ.restore((QQ => {
                  (0, AX.reportTerrainTextureFailure)(QQ, WQ)
                })).then((WQ => {
                  !1 !== WQ || QQ.isStopped ? !0 === WQ && console.info(`${nT} terrain textures handed over again after the renderer lost them`) : console.warn(`${nT} the terrain textures couldn't be handed over again: the terrain draws blank`)
                }))
              }(hQ, lQ)
            }))
          },
          onKeepAlive: QQ => {
            const WQ = null === vs ? void 0 : ds.get(vs);
            void 0 !== WQ && Qq(WQ, QQ)
          },
          onSends: () => {
            ! function(QQ) {
              const WQ = performance.now();
              if (QQ.forEachNetOut(jg), gg(QQ), (0, rX.S)(QQ, {
                  worldgen: Ez,
                  mesh: uz
                }), null !== PF) try {
                PF.sendsWent(QQ, WQ, performance.now())
              } catch (qQ) {
                KP(qQ)
              }
            }(hQ)
          }
        });
        if (pz = hQ, null === (zQ = kW.e.wasmNetReady) || void 0 === zQ || zQ.call(kW.e, (() => hQ.isStopped ? 0 : hQ.netKeptFrames)), null !== QQ) {
          hQ.setAntiCheatProbes(uT(BW.w, QQ.checks)), QQ.watchHeld(kT.CoreFrame, (() => hQ.frame)), QQ.watchHeld(kT.GlueFrame, (() => aQ.frame));
          const WQ = function(QQ, WQ) {
            const XQ = new LT(WQ);
            let wQ = !1;
            XQ.fJ(QQ.fJ());
            const qQ = (0, mw.ab)((() => {
              XQ.fJ(QQ.fJ())
            }), fT);
            let TQ = 6 * (0, mw.T)() | 0;
            const zQ = () => {
              ++TQ < 6 || (TQ = 0, QQ.checks.stackCheck() && (wQ = !0))
            };
            (0, BT.f)(zQ);
            const sQ = () => {
              const WQ = QQ.checkPadCall();
              0 !== WQ && XQ.setFlags(WQ)
            };
            return (0, jT.k)(sQ), {
              onSend: zQ,
              beforeFrame: () => {
                wQ && XQ.originStackHit() && (wQ = !1)
              },
              onEvent: WQ => {
                const wQ = QQ.checkEvent(WQ);
                XQ.value(OW.j.ProbeUsedProp, QQ.usedProp()), 0 !== wQ && XQ.setFlags(wQ)
              },
              stop: () => {
                (0, mw.db)(qQ), (0, BT.d)(zQ), (0, jT.g)(sQ)
              }
            }
          }(QQ, ((QQ, WQ, XQ) => {
            let wQ = !1;
            return Hg(hQ, (() => {
              wQ = hQ.rings.input.writeRecord(OW.qb.AntiCheat, QQ, WQ, XQ, 0)
            })), wQ
          }));
          hQ.isStopped ? WQ.stop() : oz = WQ
        }
        Jz = (QQ, WQ, XQ) => hQ.rings.cmd.writeCmd(QQ, WQ, XQ), rz = QQ => hQ.rings.cmd.growForCmd(QQ), ys = !1, LP(), (0, AQ.B)(hQ, {
          core: aQ,
          memory: BW.w,
          staleOr: (QQ, WQ, XQ, wQ) => Rg({
            site: QQ,
            error: WQ
          }, XQ, wQ),
          reportReplayFault: (QQ, WQ) => {
            (0, AX.reportReplayFault)(QQ, WQ, dz)
          },
          audio: vz,
          options: vW.e,
          onNetEvent: mP,
          sessionInfo: QQ => {
            var WQ;
            return (null === (WQ = is) || void 0 === WQ ? void 0 : WQ.conn) === QQ ? is.info : null
          },
          onEventOverflow: mF,
          replayShaderPack: QQ => {
            var WQ;
            null === (WQ = Mz) || void 0 === WQ || WQ.replay(QQ)
          },
          hasPackModel: QQ => {
            var WQ, XQ;
            return null !== (null !== (WQ = null === (XQ = kP()) || void 0 === XQ ? void 0 : XQ.modelUrl(QQ)) && void 0 !== WQ ? WQ : null)
          },
          beforeWrite: () => (!gs && hQ.rings.net.cursor > 0 && qg(hQ, !1, "all"), !hQ.isStopped),
          beforeOp: () => (!gs && hQ.netWrittenSinceFrame > 0 && qg(hQ, !1, "budget"), !hQ.isStopped)
        }), (0, cQ.F)({
          lockPointer: () => {
            if (!zw(VQ)) return !1;
            try {
              Promise.resolve(VQ.requestPointerLock()).catch((() => {}))
            } catch {
              return !1
            }
            return !0
          },
          unlockPointer: () => {
            (0, NX.c)()
          },
          leaveGame: () => {
            KF()
          },
          canvas: () => VQ
        }), ez = (0, cQ.w)((() => {
          var QQ;
          const WQ = (0, AQ.j)();
          null === (QQ = (0, AQ.u)()) || void 0 === QQ || QQ.followCursorAim(!0 === (null === WQ || void 0 === WQ ? void 0 : WQ.isSessionLive) ? WQ : null)
        })), Gs && hQ.setUiPrefs(Gs);
        Us && hQ.setEnvPrefs(Us);
        bs && hQ.setLookPrefs(bs);
        const iQ = Lq ? kq(Lq.preventMovement) : null;
        iQ && FP(iQ);
        const RQ = (0, lX.j)(),
          EQ = (0, lX.f)(hQ, RQ);
        Sz = RQ.basis, (0, eX.m)(null === EQ ? null : (0, aX.o)(EQ)), fz = EQ;
        const CQ = (0, VW.c)();
        let uQ = 1 / 0,
          LQ = !0,
          kQ = RQ.shedFootprintBytes;
        const fQ = new Jq.b(CQ, (() => aQ.Zy()), (QQ => {
          hQ.crash(rX.n, QQ)
        }));
        Lz = fQ, kz = fQ, null !== EQ && fQ.setCeiling(Math.min((0, Jq.o)(EQ), uQ, (0, lX.m)()));
        if (LQ) {
          fQ.setShed((QQ => {
            const WQ = hQ.shedMemory("joinReserve" !== QQ && "gcPressure" !== QQ);
            return null !== WQ && (null === fz || WQ < fz) && (fz = WQ, (0, eX.m)((0, aX.o)(WQ))), WQ
          }), ((QQ, WQ, XQ) => {
            1 === WQ ? (0, AX.reportMemoryShed)(QQ, XQ, dz) : console.warn(`${nT} wasm memory: shed again (${QQ}): shed ${WQ}`, XQ.wasmMemoryShed)
          }), (() => hQ.addDistanceInUse()));
          const QQ = (0, gX.P)(HQ);
          fQ.setFootprint(new Kq(kQ, {
            storedChunks: () => aQ.UwQ(),
            gpuBytes: () => {
              var WQ;
              return null !== (WQ = null === QQ || void 0 === QQ ? void 0 : QQ.bwQ()) && void 0 !== WQ ? WQ : 0
            },
            jsHeapBytes: Oq
          })), (0, oX.i)("wasm", fQ, (() => {
            vz.freeSheets()
          }))
        }
        window.addEventListener("pagehide", (() => {
          Lz === fQ && (fQ.refreshStats(), dg(fQ))
        })), window.addEventListener("pagehide", Xg), window.addEventListener("pagehide", wg), !1;
        const [SQ, tQ] = (0, CX.g)();
        rF = (0, LX.h)((QQ => hQ.setChunkAddDistance(QQ.horizontal, QQ.vertical)), {
          horizontal: SQ,
          vertical: tQ
        }), hQ.setAmbientOcclusion(!0 !== nX.i.getItem("disableAmbientOcclusion")), hQ.setPoseLod(!0 !== nX.i.getItem(IW.S)), hQ.setDebugLog(OW.P.Look, !0), hQ.setDebugLog(OW.P.CameraSet, !0), (0, QT.startLookDebug)("wasm", {
          look: () => hQ.takeDebugLog(OW.P.Look),
          cameraSets: () => hQ.takeDebugLog(OW.P.CameraSet)
        }), (0, mq.m)("remesh") && (hQ.setDebugLog(OW.P.Remesh, !0), oQ = () => hQ.takeDebugLog(OW.P.Remesh), TT = new qT((0, WT.j)(), oQ));
        var oQ;
        const eQ = function(QQ, WQ, XQ, wQ) {
          const qQ = new vw,
            TQ = QQ => nX.i.getItem(QQ);
          qQ.sync(TQ, WQ), (0, CW.Y)();
          const zQ = (0, FQ.o)("customBindingsChanged", (() => {
            qQ.sync(TQ, WQ)
          }));
          (0, ZX.q)(WQ);
          const sQ = new Set,
            PQ = (0, cQ.w)((() => {
              var QQ;
              sQ.size > 0 && lw() && !0 === (null === (QQ = (0, AQ.j)()) || void 0 === QQ ? void 0 : QQ.localPlayerAlive()) && FQ.k.mB("usedKeyboard")
            })),
            gQ = jw.c.heldSizer((() => (0, fW.l)(QQ))),
            JQ = Iw(QQ, WQ, {
              prevents: QQ => qQ.prevents(QQ),
              keyPressed: QQ => {
                qQ.moves(QQ) && (sQ.add(QQ), lw() && FQ.k.mB("usedKeyboard"))
              },
              keyReleased: QQ => {
                sQ.delete(QQ)
              },
              keysReleased: () => {
                sQ.clear()
              },
              resized: () => {
                Hw.f.measure(QQ.getBoundingClientRect()), (0, Bw.m)()
              },
              sizeCanvas: gQ,
              watchRenderScale: WQ => {
                const XQ = (0, fW.o)(QQ, WQ),
                  wQ = jw.c.onRelease(WQ);
                return () => {
                  XQ(), wQ()
                }
              },
              touchStarting: () => {
                Hw.f.measure(QQ.getBoundingClientRect())
              },
              viewShown: XQ,
              touchUiShown: () => QW.b.get("isTouchScreen"),
              ctrlCombosAreGames: lw,
              inspect: (QQ, WQ, XQ) => {
                qQ.checks(WQ, XQ) && wQ(QQ)
              },
              canLock: () => zw(QQ)
            }),
            rQ = (0, DX.b)(WQ);
          return () => {
            zQ(), PQ(), (0, ZX.q)(null), rQ(), JQ()
          }
        }(VQ, ((QQ, WQ, XQ, wQ, qQ) => {
          Hg(hQ, (() => {
            hQ.rings.input.writeRecord(QQ, WQ, XQ, wQ, qQ)
          })), !rs && (0, Ew.e)(QQ, qQ) && (0, Ew.d)((() => {
            pz !== hQ || iF || hQ.isStopped || !rg() || qg(hQ, !1, "budget", !1)
          }))
        }), (() => HF), (QQ => {
          var WQ;
          null === (WQ = oz) || void 0 === WQ || WQ.onEvent(QQ)
        }));
        if (hQ.isStopped) return eQ(), null;
        Rz = eQ;
        const nQ = () => !hQ.isStopped && !lF;
        if (hQ.isStopped) return null;
        (0, BW.U)((() => {
          "call" === (0, BW.r)() && hQ.crash(rX.y, (0, BW.n)())
        }));
        const xQ = (0, rX.V)(hQ.rings.worker, (() => {
          qg(hQ, !1, document.hidden ? "all" : "budget")
        }));
        Ez = function(QQ, WQ, XQ) {
          return ag().then((QQ => {
            let {
              prefetchWorldgenWorker: WQ
            } = QQ;
            WQ()
          }), (() => {})), new JT({
            module: (0, BW.y)(),
            decodeSettings: QQ => {
              const WQ = (0, AQ.u)();
              if (null === WQ) throw new Error("no game code to decode the world-gen seed with");
              return WQ.decodeMapSettings(QQ)
            },
            loadWorker: lg,
            onMapWithoutWorldgen: () => {
              hg((QQ => {
                let {
                  stopWorldgenWorkerPrefetch: WQ
                } = QQ;
                WQ()
              }))
            },
            onLoadFailed: QQ => {
              (0, AX.reportWorldgenLoadFailure)(QQ, dz)
            },
            onWorkerLost: (QQ, WQ) => {
              !async function(QQ, WQ, XQ) {
                const wQ = QQ === FT || QQ.startsWith(PT);
                if (!wQ || WQ) return void XQ.nI(wQ);
                const qQ = () => {
                  XQ.nI(!0)
                };
                let TQ;
                try {
                  TQ = await XQ.scriptUrl()
                } catch {
                  return void qQ()
                }
                await XQ.staleOr({
                  site: rX.I,
                  error: new Error(`a world-gen worker's load failed (${QQ}): ${TQ}`),
                  urls: [TQ]
                }, qQ)
              }(QQ, WQ, {
                scriptUrl: async () => {
                  const {
                    worldgenWorkerScriptUrl: QQ
                  } = await ag();
                  return QQ()
                },
                staleOr: (QQ, WQ) => Rg(QQ, WQ, {
                  stillWanted: XQ
                }),
                nI: WQ => {
                  (0, AX.reportWorldgenWorkerLost)(QQ, WQ, dz, {
                    build: (0, Zw.j)(),
                    ageMs: (0, kX.y)()
                  })
                }
              })
            },
            onStartTimeout: QQ => {
              (0, AX.reportWorkerStartTimeout)(rX.I, QQ, dz)
            },
            onGaveUp: QQ => {
              (0, AX.reportWorldgenGaveUp)(QQ, dz)
            },
            onMemoryStats: QQ => {
              var WQ;
              null === (WQ = Lz) || void 0 === WQ || WQ.noteWorldgen(QQ)
            },
            onMemoryGone: () => {
              var QQ;
              null === (QQ = Lz) || void 0 === QQ || QQ.worldgenGone()
            },
            write: (XQ, wQ, qQ, TQ, zQ) => {
              Hg(QQ, (() => {
                QQ.rings.worker.writeWorkerRecord(XQ, wQ, qQ, 0, TQ, zQ) || QQ.crash(rX.I, `a world-gen record of kind ${wQ} did not fit the worker-in ring`)
              })), WQ()
            }
          })
        }(hQ, xQ, nQ), uz = function(QQ, WQ) {
          return new Pq({
            module: (0, BW.y)(),
            loadWorkers: async () => {
              const [{
                createMeshWorker: QQ
              }, WQ] = await Promise.all([XQ.e(43).then((() => XQ(51275))), Promise.resolve().then((() => XQ(105))).then((QQ => {
                let {
                  isMobile: WQ
                } = QQ;
                return WQ()
              }), (() => !1))]);
              return {
                create: QQ,
                count: (0, iW.g)(WQ),
                maxKeptLightStates: WQ ? 1 : void 0
              }
            },
            write: (XQ, wQ, qQ, TQ, zQ, sQ) => {
              (0, Bw.i)(), Hg(QQ, (() => {
                QQ.rings.worker.writeWorkerRecord(XQ, wQ, qQ, TQ, zQ, sQ) || QQ.crash(rX.q, `a meshing record of kind ${wQ} did not fit the worker-in ring`)
              })), WQ()
            },
            onWorkerLost: QQ => {
              (0, AX.reportWorkerLost)(rX.q, QQ, dz)
            },
            onLightFault: (QQ, WQ) => {
              (0, AX.reportLightFault)(QQ, WQ, dz)
            },
            onStartTimeout: QQ => {
              (0, AX.reportWorkerStartTimeout)(rX.q, QQ, dz)
            },
            onMemoryStats: (QQ, WQ) => {
              var XQ;
              null === (XQ = Lz) || void 0 === XQ || XQ.noteMeshWorker(QQ, WQ)
            },
            onMemoryGone: QQ => {
              var WQ;
              null === (WQ = Lz) || void 0 === WQ || WQ.meshWorkerGone(QQ)
            },
            fail: (WQ, XQ) => {
              const wQ = () => {
                QQ.crash(rX.q, void 0 === XQ ? WQ : new Error(WQ, {
                  cause: XQ
                }))
              };
              void 0 !== XQ ? Rg({
                site: rX.q,
                error: XQ
              }, wQ) : wQ()
            }
          })
        }(hQ, xQ), QP();
        const YQ = (0, dq.p)(lW.clientSideServerUrls.staticUrl, {
            onTableFailed: QQ => {
              Rg({
                site: AX.MODEL_FEED_SITE,
                error: QQ
              }, (() => {}), {
                stillWanted: nQ
              })
            },
            packUrl: QQ => {
              var WQ, XQ;
              return null !== (WQ = null === (XQ = kP()) || void 0 === XQ ? void 0 : XQ.modelUrl(QQ)) && void 0 !== WQ ? WQ : null
            }
          }),
          NQ = function(QQ, WQ, XQ) {
            const wQ = XQ => {
              var wQ, qQ;
              return null !== (wQ = null === (qQ = WQ()) || void 0 === qQ ? void 0 : qQ.drawnUrl(XQ)) && void 0 !== wQ ? wQ : QQ.url(XQ)
            };
            return (0, bq.i)((0, Iq.r)(wQ), XQ)
          }(YQ, (() => nz), kP),
          ZQ = new Iq.h(NQ, (QQ => {
            console.warn(`${nT} image ${QQ.key.kind}:${QQ.key.index}:${QQ.key.word} failed`, QQ.error)
          }));
        Oz = ZQ, Kz = new pq(hQ, NQ, ((QQ, WQ) => {
          void 0 === WQ ? console.warn(`${nT} ${QQ}`) : SP(QQ, WQ)
        }));
        const OQ = new Uq.i(YQ, function(QQ, WQ) {
          let wQ = !1,
            qQ = null,
            TQ = null;
          const zQ = {
              onUnavailable: (XQ, wQ) => {
                TQ ??= Rg({
                  site: AX.MODEL_POOL_SITE,
                  error: XQ,
                  urls: wQ
                }, (() => {
                  (0, AX.reportModelPoolFailure)(XQ, QQ)
                }), {
                  stillWanted: WQ
                })
              },
              onDecoderFailed: (XQ, wQ) => {
                const qQ = () => {
                  (0, AX.reportDracoDecoderFailure)(XQ, QQ)
                };
                void 0 !== wQ ? Rg({
                  site: AX.MODEL_POOL_SITE,
                  error: XQ,
                  urls: wQ
                }, qQ, {
                  stillWanted: WQ
                }) : qQ()
              },
              onWorkerLost: WQ => {
                (0, AX.reportWorkerLost)(AX.MODEL_POOL_SITE, WQ, QQ)
              },
              onModuleRetry: (WQ, XQ) => {
                (0, AX.reportModelsModuleRetry)(WQ, XQ, QQ)
              }
            },
            sQ = XQ.e(45).then((() => XQ(51279))).then((QQ => {
              let {
                pageModelPool: WQ
              } = QQ;
              if (wQ) return null;
              const XQ = WQ(zQ);
              return qQ = XQ.unlisten, xz = XQ.pool, QP(), XQ.pool
            }), (QQ => (wQ || zQ.onUnavailable(QQ, void 0), null)));
          return Yz = () => {
            var QQ;
            wQ = !0, null === (QQ = qQ) || void 0 === QQ || QQ(), xz = null
          }, (QQ, WQ) => sQ.then((XQ => {
            var wQ;
            return null !== (wQ = null === XQ || void 0 === XQ ? void 0 : XQ.build(QQ, WQ)) && void 0 !== wQ ? wQ : (0, Hq.r)(QQ, "the model workers did not load")
          })).then((QQ => null !== TQ && (0, Hq.l)(QQ) ? TQ.then((() => QQ)) : QQ))
        }(lQ, nQ), (QQ => {
          QQ.startup ? (yg(), Rg({
            site: AX.MODEL_FEED_SITE,
            error: QQ.error,
            urls: "" === QQ.url ? void 0 : [QQ.url]
          }, (() => {
            (0, AX.reportModelFailure)(QQ, lQ)
          }))) : (0, AX.reportModelFailure)(QQ, lQ)
        }), {
          onWritten: (QQ, WQ) => {
            ZQ.glbWritten(QQ, WQ)
          },
          onTaken: (QQ, WQ) => {
            ZQ.glbTaken(QQ, WQ)
          },
          onPackFileFailed: (QQ, WQ) => {
            console.warn(`${nT} the texture pack's model file ${QQ} failed: the shipped one loads`, WQ)
          }
        });
        nz = OQ;
        const KQ = new yq.f(hQ);
        bz = KQ, KQ.swap((QQ => {
          const WQ = () => {
            (0, AX.reportTerrainTextureFailure)(QQ, lQ)
          };
          if (IF) return void WQ();
          const XQ = () => !IF,
            wQ = null === QQ.url ? void 0 : [QQ.url];
          Rg({
            site: rX.E,
            error: QQ.error,
            urls: wQ
          }, WQ, {
            stillWanted: XQ
          })
        })).then((QQ => {
          null !== QQ && (QQ || hQ.isStopped || console.warn(`${nT} the core refused the terrain textures: terrain draws untextured`), ws(hQ))
        }));
        const WW = new NW(hQ, ((QQ, WQ) => {
          console.warn(`${nT} ${QQ}`, ...void 0 === WQ ? [] : [WQ])
        }));
        WW.feed(), null !== IQ && function(QQ, WQ, wQ, qQ, TQ, zQ) {
          let sQ = null,
            PQ = null,
            gQ = !1;
          const JQ = {
            textures: null,
            stop: () => {
              var QQ, WQ;
              gQ = !0, null === (QQ = PQ) || void 0 === QQ || QQ(), null === (WQ = sQ) || void 0 === WQ || WQ(), vq.b.setSettled(null), null !== Hz && kF.clear(Hz)
            }
          };
          Uz = JQ, PQ = tP().follow((PQ => {
            null !== PQ && Promise.all([XQ.e(210), XQ.e(48)]).then((() => XQ(51243))).then((XQ => {
              let {
                PackTextures: rQ
              } = XQ;
              if (gQ || QQ.isStopped) return;
              const IQ = new rQ({
                feed: PQ,
                terrain: WQ,
                backend: wQ,
                stopped: () => QQ.isStopped,
                landed: () => {
                  ws(QQ)
                },
                packSwapped: () => {
                  (0, bq.h)(qQ), zQ.feed((() => async function(QQ) {
                    const WQ = null === QQ ? null : await QQ.averageColours;
                    return null === WQ ? ZW() : YW(WQ)
                  }(IQ.assets))), (0, Gq.m)(IQ.files()), TQ.refresh().then((QQ => {
                    null !== QQ && console.info(`${nT} texture pack models: ${QQ.resent} of ${QQ.delivered} files written again, ${QQ.refetched} refetched`)
                  }))
                },
                settled: (QQ, WQ, XQ) => {
                  var wQ;
                  (vq.b.setSettled({
                    state: QQ,
                    files: WQ
                  }), function(QQ, WQ, XQ) {
                    const wQ = null === QQ.gameSource && (0, RX.g)(QQ.pack);
                    if (null === WQ) return;
                    const qQ = (0, cX.j)(WQ.error),
                      TQ = wQ ? "settings" : WQ.source;
                    FQ.k.mB(cX.b, {
                      failure: qQ,
                      source: TQ,
                      pack: EX(QQ)
                    }), (0, AX.reportTexturePackKeptOut)(TQ, qQ, WQ.error, XQ)
                  }(QQ, XQ, dz), null === XQ) && function(QQ) {
                    const WQ = Hz;
                    null !== WQ && kF.apply(WQ, QQ).then((WQ => {
                      WQ && QQ && console.info(`${nT} the texture pack's animations are in (${Object.keys(QQ).length} files)`)
                    }))
                  }(null === (wQ = QQ.pack) || void 0 === wQ ? void 0 : wQ.animations)
                },
                settling: () => {
                  vq.b.setSettled(null)
                },
                warn: SP,
                maxTextureSize: () => Promise.resolve((0, gX.gb)(document.createElement("canvas")))
              });
              JQ.textures = IQ, sQ = IQ.start()
            }), (QQ => {
              console.warn(`${nT} the texture pack's terrain didn't load: the built atlas stays`, QQ)
            }))
          }))
        }(hQ, KQ, IQ, ZQ, OQ, WW);
        const XW = () => {
            hQ.setTextureLayers("")
          },
          wW = QQ => {
            (aW ??= XQ.e(56).then((() => XQ(51284))).then((QQ => {
              let {
                TEXTURE_NAMES: WQ
              } = QQ;
              return WQ
            }), (QQ => {
              throw aW = null, QQ
            })), aW).then((QQ => {
              hQ.setTextureLayers(QQ) || hQ.isStopped || (console.warn(`${nT} the core refused the texture names: textured Boxes draw textureNotFound`), XW())
            }), (WQ => {
              if (hQ.isStopped) return;
              const [XQ, ...wQ] = QQ;
              void 0 === XQ ? Rg({
                site: AX.TEXTURE_NAMES_SITE,
                error: WQ
              }, (() => {
                console.warn(`${nT} the texture names didn't load, so textured Boxes draw textureNotFound`, WQ), XW()
              }), {
                stillWanted: nQ
              }) : setTimeout((() => {
                wW(wQ)
              }), XQ)
            }))
          };
        if (wW(Pz), null !== IQ && !await async function(QQ, WQ, XQ, wQ, TQ, zQ) {
            var sQ;
            const FQ = (0, gX.P)(XQ);
            if (null === FQ) return QQ.crash(YT, new Error(`this ${wQ} build has no openRenderer`)), !1;
            let PQ;
            QF = FQ;
            try {
              var gQ, JQ, rQ, IQ;
              const qQ = null !== (gQ = null === (JQ = Vz) || void 0 === JQ ? void 0 : JQ.pagePreviews()) && void 0 !== gQ ? gQ : null,
                sQ = null !== (rQ = null === (IQ = Vz) || void 0 === IQ ? void 0 : IQ.previewModule(XQ)) && void 0 !== rQ ? rQ : null;
              if (null === qQ || null === sQ) {
                null === qQ || void 0 === qQ || qQ.endSession(!1), PQ = (0, fW.f)().sampleCount, await (0, gX.g)(WQ, FQ, zQ, uP, PQ, await TQ);
                const QQ = (0, gX.k)(XQ);
                null === QQ && console.warn(`${nT} this ${wQ} build has no image registry: sky and model images won't show`), (0, Bq.g)(QQ)
              } else {
                (0, Rq.b)() && await (0, MQ.l)();
                const XQ = (0, Rq.D)();
                if (null !== XQ) {
                  const WQ = (0, JX.j)(FQ);
                  return QQ.crash(AX.RENDER_RELOAD_SITE, new Error(`${XQ}${void 0===WQ?"":` (${WQ.message})`}`)), !1
                }
                PQ = await qQ.bindSession(sQ, WQ, (async QQ => (0, gX.r)(FQ, YT, zQ, QQ, uP, await TQ)))
              }
            } catch (qQ) {
              return QQ.crash(YT, qQ), !1
            }(function(QQ, WQ) {
              const XQ = QQ,
                {
                  requestCapture: wQ,
                  takeCapture: qQ
                } = XQ;
              if ("function" !== typeof wQ || "function" !== typeof qQ) return;
              const TQ = {
                request() {
                  wQ.call(XQ, WQ)
                },
                take() {
                  var QQ;
                  return null !== (QQ = qQ.call(XQ)) && void 0 !== QQ ? QQ : null
                }
              };
              window[tq] = TQ
            })(WQ, PQ), sF = PQ, ms = !0;
            const jQ = performance.now();
            return Ms.boundAtMs = null !== (sQ = (0, Rq.G)()) && void 0 !== sQ ? sQ : jQ, Ms.indirectHangs = (0, Rq.y)(), Ms.restoresSkipped = (0, Rq.I)(), console.info(`${nT} ${wQ} renderer bound at ${Math.round(jQ)} ms`), !QQ.isStopped
          }(hQ, aQ, HQ, IQ, BQ, VQ)) return null;
        if (null !== IQ) {
          var qW, TW, zW;
          (0, DW.C)(IQ);
          const QQ = () => !hQ.isStopped && Jg();
          XQ.e(201).then((() => XQ(34393))).then((WQ => {
            let {
              devTools: XQ
            } = WQ;
            hQ.isStopped || XQ.setHost(function(QQ) {
              return {
                tools: Aq,
                async downloadScene(WQ, XQ) {
                  let {
                    width: wQ,
                    height: qQ,
                    colouring: TQ
                  } = XQ;
                  "screenshot" === WQ && null === TQ ? await (0, hq.g)(QQ, wQ, qQ) : console.warn("The Rust client's developer tools take uncoloured screenshots only")
                },
                setAmbientLightIntensity: () => (console.warn("The Rust client's renderer has no ambient light setting"), Promise.resolve()),
                capturePhoto: (WQ, XQ, wQ) => (0, hq.e)(QQ, WQ, XQ, wQ)
              }
            }(function(QQ, WQ) {
              return {
                canvas: QQ,
                maxTextureSize: iq,
                pj: WQ,
                resize: (QQ, WQ, XQ) => {
                  (0, ZX.w)(OW.qb.Resize, 0, QQ / XQ, WQ / XQ, (0, ZX.k)(XQ))
                },
                restoreSize: () => {
                  const WQ = (0, fW.l)(QQ);
                  null !== WQ && (0, ZX.w)(OW.qb.Resize, 0, WQ.cssWidth, WQ.cssHeight, (0, ZX.k)(WQ.renderScale))
                },
                onFrameDrawn: QQ => (cq.add(QQ), () => {
                  cq.delete(QQ)
                })
              }
            }(VQ, QQ)))
          }), (QQ => {
            console.warn(`${nT} the developer tools didn't load: no captures this session`, QQ)
          }));
          const WQ = "webgpu" === IQ && null !== (qW = null === rQ || void 0 === rQ || null === (TW = rQ.adapter) || void 0 === TW ? void 0 : TW.vendor) && void 0 !== qW ? qW : null;
          FF = {
            backend: IQ,
            canvas: VQ,
            fallbackReason: null !== (zW = null === rQ || void 0 === rQ ? void 0 : rQ.reason) && void 0 !== zW ? zW : null,
            adapterVendor: WQ
          }, NP();
          try {
            (0, Bw.v)(IQ, VQ, WQ)
          } catch (qQ) {
            (0, Bw.x)(), console.error(`${nT} the quality steps didn't start`, qQ)
          }
        }
        const {
          storagePullBreaks: sW,
          splitPassBreaks: FW
        } = await BQ;
        FW && console.warn(`${nT} split_pass_breaks on: Windows Adreno 7xx (N-103) or ?sceneDepth=off`);
        const PW = (0, mQ.g)(rQ, (0, EW.j)());
        if ((0, mq.m)("webgpuloss")) {
          var gW, JW;
          const QQ = {
            backend: IQ,
            reason: null !== (gW = null === rQ || void 0 === rQ ? void 0 : rQ.reason) && void 0 !== gW ? gW : null,
            source: null !== (JW = null === rQ || void 0 === rQ ? void 0 : rQ.source) && void 0 !== JW ? JW : null,
            storagePullBreaks: sW,
            noWebGpu: PW.messageKey
          };
          (0, Mq.b)((WQ => {
            WQ.noteWasmPick(QQ)
          }))
        }
        const rW = "webgpu" === IQ;
        if (Mz = (0, mQ.j)(rW ? hQ : null, rW && null !== (sQ = null === (PQ = Vz) || void 0 === PQ ? void 0 : PQ.pagePreviews().xI) && void 0 !== sQ ? sQ : null, PW, SP), iF) return null;
        if (fQ.reserveAtJoin((0, Jq.k)(null !== EQ && void 0 !== EQ ? EQ : aX.h)), hQ.isStopped) return null;
        const jW = QQ => {
          if (ss = performance.now(), Fs = !1, null !== PF) try {
            PF.animationFrame(QQ)
          } catch (qQ) {
            KP(qQ)
          }
          if (function(QQ, WQ) {
              return WQ && !iF && !rs && rg() && Jg() && QQ.framePaces(performance.now())
            }(hQ, HF)) {
            if (hQ.writePendingInput(), (0, cQ.e)(QQ, Tg), ZP(!1, QQ), null !== PF) try {
              PF.framePaced()
            } catch (qQ) {
              KP(qQ)
            }
            requestAnimationFrame(jW)
          } else qg(hQ, HF, "budget") && ((0, uW.f)(hQ.lastFrameKind) && Jg() && (0, cQ.e)(QQ, Tg), ZP(HF && UF, QQ), bF.frame(hQ.lastFrameKind, HF && Jg(), QQ), vF.frame(hQ.lastFrameKind, HF && Jg()), (0, uW.b)(hQ.lastFrameKind) && EW.C.drew(), pg(hQ), fQ.afterFrame(), requestAnimationFrame(jW))
        };
        requestAnimationFrame(jW);
        return function(QQ) {
          if (QQ.has("inputLog") && (0, dw.j)((QQ => {
              let {
                action: WQ,
                down: XQ,
                press: wQ
              } = QQ;
              console.info(`${aw} input ${WQ} ${XQ?"down":"up"} press ${wQ} at ${performance.now().toFixed(1)}`)
            })), QQ.has("inputDump")) {
            const QQ = [];
            hw = QQ, Object.assign(window, {
              bloxdInputDump: () => QQ.join("\n")
            })
          }
        }(new URLSearchParams(window.location.search)), tz = function(QQ) {
          let WQ = null;
          const XQ = () => {
              null !== WQ && (clearInterval(WQ), WQ = null)
            },
            wQ = () => {
              document.hidden ? WQ ??= setInterval((() => {
                cg(QQ) || XQ()
              }), Fz) : XQ()
            };
          return document.addEventListener("visibilitychange", wQ), wQ(), () => {
            XQ(), document.removeEventListener("visibilitychange", wQ)
          }
        }(hQ), hQ
      }(WQ).then((QQ => {
        var WQ;
        (wQ(dz), hz(null !== QQ), null !== QQ && (pQ = performance.now()), az(QQ), null === QQ) ? null === (WQ = Vz) || void 0 === WQ || WQ.pagePreviews().endSession(null === (0, BW.r)()): Xs("booted")
      }), (QQ => {
        wQ(dz), hz(!1), az(null), Vg({
          site: NT,
          error: QQ,
          header: null
        }, dz)
      }))
    }

    function LF() {
      const QQ = Hz;
      null !== QQ && cF().then((WQ => {
        let {
          pageBuiltInAnimationPack: XQ
        } = WQ;
        XQ().provide(QQ)
      }), (QQ => {
        console.warn(`${nT} the built-in animation pack's chunk did not load: lifeforms stay in their rest pose`, QQ)
      }))
    }
    const kF = new class {
      constructor(QQ) {
        this.deps = QQ, this.latest = 0, this.Ds = null
      }
      apply(QQ, WQ) {
        return this.load(QQ, WQ, 0)
      }
      async load(QQ, WQ, XQ) {
        var wQ;
        const qQ = ++this.latest,
          TQ = this.deps.compiler;
        if (void 0 === WQ || null === WQ || "object" !== typeof WQ || 0 === Object.keys(WQ).length || null === TQ) return this.drop(QQ), !1;
        if ((null === (wQ = this.Ds) || void 0 === wQ ? void 0 : wQ.module) === QQ && (0, TX.Wd)(this.Ds.files, WQ)) return !1;
        try {
          const [XQ, wQ] = await Promise.all([TQ(), this.deps.builtIns()]);
          if (qQ !== this.latest) return !1;
          const zQ = await XQ(WQ, PX, {
            builtIns: wQ
          });
          if (qQ !== this.latest) return !1;
          const sQ = this.call(QQ, zQ);
          if (void 0 === sQ) throw new FX("the compiled animations didn't read against the built-in pack");
          return this.Ds = {
              module: QQ,
              files: WQ
            },
            function(QQ) {
              for (let WQ = 0; WQ + 2 < QQ.length; WQ += 3) {
                ("error" === QQ[WQ] ? console.error : console.warn)(`Animation for the texture pack: ${QQ[WQ+1]}: ${QQ[WQ+2]}`)
              }
            }(sQ), !0
        } catch (sQ) {
          var zQ;
          if (qQ !== this.latest) return !1;
          this.drop(QQ), 0 === XQ && this.deps.warn("the texture pack's animations didn't load: lifeforms play the built-in ones", sQ);
          const wQ = (null !== (zQ = this.deps.retryAfterMs) && void 0 !== zQ ? zQ : sX)[XQ];
          return void 0 === wQ || sQ instanceof FX || (0, zX.m)(QQ) || setTimeout((() => {
            qQ === this.latest && this.load(QQ, WQ, XQ + 1)
          }), wQ), !1
        }
      }
      call(QQ, WQ) {
        try {
          return QQ.VwQ(WQ)
        } catch (XQ) {
          throw (0, zX.q)(QQ, XQ), XQ
        }
      }
      clear(QQ) {
        this.latest++, this.drop(QQ)
      }
      drop(QQ) {
        const WQ = this.Ds;
        if (this.Ds = null, (null === WQ || void 0 === WQ ? void 0 : WQ.module) === QQ && !(0, zX.m)(QQ)) try {
          this.call(QQ, null)
        } catch {}
      }
    }({
      compiler: WX.c,
      builtIns: async () => {
        const {
          pageBuiltInAnimationPack: QQ
        } = await cF();
        return QQ().whenSet()
      },
      warn: SP
    });
    async function fF(QQ, WQ) {
      let wQ = !1;
      await SF({
        matchmake: async () => {
          const {
            guestJoinTarget: qQ,
            guestJoinWithPack: TQ
          } = await XQ.e(281).then((() => XQ(51222)));
          return wQ ? qQ(QQ, WQ, eP()) : (wQ = !0, TQ(QQ, WQ, (WQ => nP(QQ, WQ)), eP))
        },
        onFailure: QQ => {
          (0, AX.showJoinFailure)(QQ, dz)
        },
        rejoin: wP,
        invalidateTrafficCode: qP
      })
    }
    async function SF(QQ) {
      let {
        matchmake: WQ,
        onFailure: XQ,
        rejoin: qQ,
        invalidateTrafficCode: TQ,
        pageReady: zQ,
        signal: sQ
      } = QQ;
      const FQ = () => !0 === (null === sQ || void 0 === sQ ? void 0 : sQ.aborted);
      let PQ;
      const gQ = vq.b.rejoinHold();
      as = null, (0, tX.h)();
      const JQ = (0, kX.U)("wasm", vg);
      let rQ = !1,
        IQ = performance.now();
      try {
        if (!await iz) return {
          kind: "stopped"
        };
        if (FQ()) return {
          kind: "fX"
        };
        AF().catch((() => {}));
        let QQ = await WQ();
        var UQ, bQ;
        if (IQ = performance.now(), !FQ()) bg(null !== (UQ = null === (bQ = QQ.target.session) || void 0 === bQ ? void 0 : bQ.gameNameWithVariation) && void 0 !== UQ ? UQ : null);
        const XQ = () => performance.now() - QQ.matchedAt <= QQ.freshMs,
          wQ = oF(QQ.target).catch((() => {}));
        XQ() && !FQ() && (PQ = new zq(QQ.target, {
          signal: sQ
        }));
        const TQ = performance.now();
        if (null === await lz) return {
          kind: "stopped"
        };
        var vQ, dQ;
        if (function(QQ) {
            var WQ, XQ;
            if (BQ.d.markGameEngineConstructed(), GQ) return;
            GQ = !0;
            const wQ = Math.max(QQ, null !== (WQ = VQ) && void 0 !== WQ ? WQ : QQ);
            (0, yQ.j)("ready", Math.max(0, (null !== (XQ = DQ) && void 0 !== XQ ? XQ : wQ) - wQ) / 1e3)
          }(TQ), !FQ())
          if (null !== DQ && null !== pQ ? ((0, jQ.n)("wasm_loaded", DQ), (0, jQ.n)("wasm_core_ready", pQ)) : console.warn("[bloxd-wasm-client] a join found the core before boot marked its steps"), QQ.target.session && (0, sT.e)(QQ.target.session.gameNameWithVariation)) null === (vQ = Ez) || void 0 === vQ || vQ.prestart();
        if (await wQ, !XQ() && !FQ()) null === (dQ = PQ) || void 0 === dQ || dQ.rematched(), QQ = await WQ(), IQ = performance.now();
        if (FQ()) return {
          kind: "fX"
        };
        const gQ = await async function(QQ) {
          var WQ, XQ, wQ;
          let {
            signal: qQ,
            rejoin: TQ = null,
            early: zQ,
            pageReady: sQ
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (null !== qQ && void 0 !== qQ && qQ.aborted) throw new DOMException("the join was left", "AbortError");
          const FQ = (PQ = ts, gQ = performance.now(), null !== PQ && gQ - PQ < Yw);
          var PQ, gQ;
          ts = null;
          const JQ = new AbortController,
            rQ = null !== (WQ = null === (XQ = QQ.session) || void 0 === XQ ? void 0 : XQ.gameNameWithVariation) && void 0 !== WQ ? WQ : null;
          bg(rQ), xF({
            controller: JQ,
            game: rQ
          }), os = null, null === (wQ = xs) || void 0 === wQ || wQ.abort(), xs = null, Ns = !1, Zs = null, Os.clear();
          const IQ = () => {
            (0, hW.m)(JQ, (0, hW.i)(qQ))
          };
          null === qQ || void 0 === qQ || qQ.addEventListener("abort", IQ, {
            once: !0
          });
          try {
            var BQ, yQ, VQ;
            const WQ = await lz;
            if (null === WQ || WQ.isStopped || iF) throw new Error("no core is running to join a game with");
            if (QQ.session && null !== Mz) {
              const WQ = await eF(Mz.join(QQ.session.gameNameWithVariation), JQ.signal);
              if ((0, mq.m)("webgpuloss")) {
                const XQ = QQ.session.gameNameWithVariation,
                  wQ = Mz.couldntRunInJoinedGame();
                (0, Mq.b)((QQ => QQ.noteWasmJoin(XQ, WQ, wQ)))
              }
              if (null !== WQ) throw new mQ.c(WQ)
            }
            const [, , , {
              joinRoom: XQ
            }] = await eF(Promise.all([(0, AQ.m)(WQ), oF(QQ), null === sQ || void 0 === sQ ? void 0 : sQ(), AF()]), JQ.signal), wQ = QQ.session, qQ = wQ ? {
              ...sP,
              attachSocket: WQ => {
                const XQ = jP(WQ, QQ.endpoint);
                var qQ;
                null !== XQ && (is = {
                  conn: XQ,
                  info: wQ
                }, null === (qQ = cs) || void 0 === qQ || qQ(wQ.playerDbId));
                return XQ
              }
            } : sP, PQ = await XQ(qQ, QQ, {
              signal: JQ.signal,
              early: zQ
            }).catch((QQ => {
              throw function(QQ) {
                if (!(QQ instanceof oQ.d)) return QQ;
                if ("roomError" === QQ.stage && null !== Zs) return tF(new oQ.d(QQ.message, QQ.stage, QQ.code, Zs), QQ);
                const WQ = "closed" === QQ.stage && null !== es ? Os.get(es.conn) : void 0;
                return void 0 === WQ ? QQ : tF(new oQ.d(QQ.message, QQ.stage, WQ.code, null, QQ.socketOpened), QQ)
              }(QQ)
            }));
            if (Hs !== JQ) throw PQ.leave(), new DOMException("the join was left", "AbortError");
            NF(PQ), null === (BQ = uz) || void 0 === BQ || BQ.newGame();
            const gQ = function(QQ) {
              var WQ, XQ;
              const {
                session: wQ
              } = QQ, qQ = void 0 === wQ ? QQ.joinOptions.lobbyName : wQ.lobbyName;
              return {
                endpoint: QQ.endpoint,
                game: null !== (WQ = null === wQ || void 0 === wQ ? void 0 : wQ.gameNameWithVariation) && void 0 !== WQ ? WQ : QQ.roomName,
                lobby: String(null !== qQ && void 0 !== qQ ? qQ : null),
                postCookies: null !== (XQ = QQ.postCookies) && void 0 !== XQ ? XQ : null
              }
            }(QQ);
            ds.set(PQ, gQ), Xq(gQ);
            const rQ = performance.now(),
              IQ = {
                conn: PQ.conn,
                rejoin: TQ,
                game: null !== (yQ = null === (VQ = QQ.session) || void 0 === VQ ? void 0 : VQ.gameNameWithVariation) && void 0 !== yQ ? yQ : "",
                joinedAt: rQ,
                rejoinedAt: FQ ? rQ : null,
                overflow: null
              };
            As = IQ,
              function(QQ, WQ) {
                bP();
                const XQ = {
                  endpoint: WQ,
                  roomId: QQ.seat.room.roomId,
                  heldConn: 0,
                  dropCode: 0,
                  pendingHold: null,
                  resume: new vX({
                    reconnect: (QQ, WQ, wQ) => async function(QQ, WQ, XQ, wQ) {
                      const {
                        roomId: qQ,
                        roomToken: TQ
                      } = dP(QQ, WQ), zQ = pz;
                      if (null === zQ || zQ.isStopped || iF) throw new Error("no core is running to resume the game on");
                      const {
                        resumeRoom: sQ
                      } = await eF(AF(), XQ), FQ = {
                        ...sP,
                        attachSocket: WQ => Rs !== QQ || 0 === QQ.heldConn ? (WQ.close(), null) : jP(WQ, QQ.endpoint, !0)
                      };
                      return sQ(FQ, QQ.endpoint, qQ, TQ, {
                        signal: XQ,
                        onAttached: wQ
                      })
                    }(XQ, QQ, WQ, wQ),
                    releaseSeat: QQ => {
                      !async function(QQ, WQ) {
                        const {
                          roomId: XQ,
                          roomToken: wQ
                        } = dP(QQ, WQ);
                        try {
                          const {
                            leaveHeldSeat: WQ
                          } = await AF();
                          await WQ(QQ.endpoint, XQ, wQ)
                        } catch (qQ) {
                          console.warn(`${nT} the held seat of a game left while it reconnected couldn't be released`, qQ)
                        }
                      }(XQ, QQ)
                    },
                    isLive: () => Rs === XQ && null !== As && !iF,
                    Bl: QQ => {
                      Ss = QQ, UP()
                    },
                    onReconnected: QQ => {
                      ! function(QQ) {
                        const WQ = vs;
                        if (null !== WQ && WQ !== QQ) {
                          const XQ = ds.get(WQ);
                          void 0 !== XQ && ds.set(QQ, XQ), GF === WQ && (GF = QQ), WQ.detach()
                        }
                        NF(QQ)
                      }(QQ)
                    },
                    onGaveUp: (QQ, WQ) => {
                      ! function(QQ, WQ, XQ) {
                        var wQ, qQ;
                        console.warn(`${nT} gave up reconnecting (${XQ.reason}, ${XQ.attempts} attempts)`, XQ.lastError), (0, AX.reportReconnectGaveUp)(XQ, dz);
                        const TQ = null !== (wQ = null === (qQ = As) || void 0 === qQ ? void 0 : qQ.rejoin) && void 0 !== wQ ? wQ : null;
                        vP(QQ, "gaveUp"), OF();
                        const zQ = {
                          code: QQ.dropCode,
                          name: null,
                          reason: qz,
                          canReconnect: !WQ,
                          automaticallyReconnect: !1,
                          requiresRefresh: !1
                        };
                        zP(zQ, WQ ? null : TQ, !1, {
                          reasonKey: Tz,
                          canPlayAgain: WQ
                        })
                      }(XQ, QQ, WQ)
                    }
                  })
                };
                Rs = XQ, null !== Es && Es.conn === QQ.conn && XQ.resume.onInitialInfo(Es)
              }(PQ, QQ.endpoint), performance.mark(KT), (0, jQ.n)("wasm_joined", rQ), setTimeout((() => {
                vs === PQ && (0, jQ.e)()
              }), 0), LF(), console.info(`${nT} joined ${QQ.roomName} as ${PQ.seat.sessionId} at ${Math.round(performance.now())} ms`);
            const DQ = os;
            os = null, null !== DQ && MF(IQ, DQ.mask, DQ.frames);
            const pQ = Os.get(PQ.conn);
            return Os.clear(), void 0 !== pQ && (NF(null), TP(PQ.conn, pQ.code, pQ.reason)), PQ
          } finally {
            var DQ;
            null === qQ || void 0 === qQ || qQ.removeEventListener("abort", IQ), Hs === JQ && YF(vs, null), (null === (DQ = es) || void 0 === DQ ? void 0 : DQ.join) === JQ && (es = null)
          }
        }(QQ.target, {
          signal: sQ,
          rejoin: qQ(QQ.target),
          early: PQ,
          pageReady: zQ
        });
        return rQ = !0, {
          kind: "joined",
          game: gQ
        }
      } catch (aQ) {
        if (aQ instanceof DOMException && "AbortError" === aQ.name || FQ()) return {
          kind: "fX"
        };
        if (iF) return {
          kind: "stopped"
        };
        if (Ns && (Ns = !1, await TQ().catch((QQ => {
            console.warn(`${nT} the cached traffic code could not be dropped`, QQ)
          }))), null === await lz) return {
          kind: "stopped"
        };
        if (aQ instanceof mQ.c) return XQ(aQ, performance.now() - IQ), {
          kind: "failed",
          error: aQ,
          reloading: !1
        };
        if (aQ instanceof oQ.d && aQ.code === wQ.e.wasmClientNotAllowed.code && dF) return CP("this server refused the wasm client to this account", "refused"), {
          kind: "failed",
          error: aQ,
          reloading: !0
        };
        const QQ = aQ instanceof oQ.d && aQ.code === wQ.e.outdatedVersion.code,
          WQ = () => null === vs,
          qQ = await Rg({
            site: AX.JOIN_SITE,
            error: aQ,
            outdated: QQ
          }, (() => {
            XQ(aQ, performance.now() - IQ)
          }), {
            stillWanted: WQ
          });
        return {
          kind: "failed",
          error: aQ,
          reloading: qQ
        }
      } finally {
        var HQ;
        rQ || JQ.end(), vq.b.releaseHold(gQ);
        const QQ = null === (HQ = PQ) || void 0 === HQ ? void 0 : HQ.release();
        QQ && (0, AX.reportUnusedSeat)(QQ, dz)
      }
    }

    function tF(QQ, WQ) {
      return QQ.stack = WQ.stack, QQ
    }

    function oF(QQ) {
      return QQ.session ? (0, AQ.t)(vz, QQ.session.gameNameWithVariation) : Promise.resolve()
    }

    function eF(QQ, WQ) {
      return (0, hW.p)(WQ), new Promise(((XQ, wQ) => {
        const qQ = () => {
          wQ((0, hW.i)(WQ))
        };
        WQ.addEventListener("abort", qQ, {
          once: !0
        }), QQ.then((QQ => {
          WQ.removeEventListener("abort", qQ), XQ(QQ)
        }), (QQ => {
          WQ.removeEventListener("abort", qQ), wQ(QQ)
        }))
      }))
    }

    function nF() {
      xF(null)
    }

    function xF(QQ) {
      var WQ, XQ, wQ;
      (function() {
        const QQ = Rs;
        null !== QQ && vP(QQ, "left")
      }(), null === Az || Az.left) || (Az.left = !0, null === (wQ = (0, AQ.j)()) || void 0 === wQ || wQ.socketLeft(), (0, rQ.t)({
        websocketUrl: null
      }));
      Hs && (0, hW.m)(Hs, new DOMException("the join was left", "AbortError")), OF(null !== QQ), null === (WQ = Mz) || void 0 === WQ || WQ.leave();
      const qQ = vs;
      null !== QQ && vq.b.setGame(QQ.game), YF(null, null !== (XQ = null === QQ || void 0 === QQ ? void 0 : QQ.controller) && void 0 !== XQ ? XQ : null), null === qQ || void 0 === qQ || qQ.leave(), ZF(0), (0, dW.g)()
    }

    function YF(QQ, WQ) {
      vs = QQ, Hs = WQ, null === vs && null === Hs && vq.b.setGame(void 0)
    }

    function NF(QQ) {
      YF(QQ, Hs)
    }

    function ZF(QQ) {
      const WQ = pz;
      return null !== Jz && !iF && null !== WQ && !WQ.isStopped && (!!Jz(oQ.j, 0, (0, oQ.C)(QQ)) && (ys = !0, 0 === QQ || rs || qg(WQ, !1, "all"), !0))
    }

    function OF() {
      var QQ, WQ;
      arguments.length > 0 && void 0 !== arguments[0] && arguments[0] || (0, kX.h)();
      const XQ = null !== (QQ = null === (WQ = As) || void 0 === WQ ? void 0 : WQ.overflow) && void 0 !== QQ ? QQ : null;
      As = null, null !== XQ && (0, AX.reportEventOverflow)(XQ, dz)
    }

    function KF() {
      null !== vs || null !== Hs ? nF() : BP()
    }

    function mF(QQ, WQ) {
      console.warn(`${nT} the event buffer refused records in ${WQ} frames (categories ${QQ})`), iF || (null !== As ? MF(As, QQ, WQ) : null !== Hs && function(QQ, WQ, XQ) {
        var wQ;
        const qQ = function(QQ, WQ) {
          return null === QQ ? "drop" : QQ.activated ? "keep" : 0 !== (WQ & KW.u.NetSession) ? "fail" : "drop"
        }((null === (wQ = es) || void 0 === wQ ? void 0 : wQ.join) === QQ ? es : null, WQ);
        "keep" === qQ ? os = {
          mask: WQ,
          frames: XQ
        } : "fail" === qQ && (0, hW.m)(QQ, new Error("the join's net session was lost to an event overflow"))
      }(Hs, QQ, WQ))
    }

    function MF(QQ, WQ, XQ) {
      const wQ = QQ.overflow ??= {
        frames: 0,
        acks: 0,
        mask: 0,
        outcome: null
      };
      wQ.frames += XQ, wQ.acks++, wQ.mask |= WQ;
      const qQ = function(QQ, WQ, XQ) {
        if (0 === (QQ & KW.u.NetSession)) return "none";
        const wQ = null !== WQ.rejoinedAt && XQ - WQ.rejoinedAt < Nw;
        return null === WQ.rejoin || wQ ? "fail" : "rejoin"
      }(WQ, QQ, performance.now());
      "none" !== qQ && queueMicrotask((() => {
        if (As !== QQ) return;
        const WQ = "rejoin" === qQ && performance.now() - ns >= tQ.e;
        wQ.outcome = WQ ? "rejoined" : "failed", zP(function(QQ, WQ) {
          return {
            code: 0,
            name: "eventOverflow",
            reason: "Your game fell behind the server.",
            canReconnect: QQ,
            automaticallyReconnect: WQ,
            requiresRefresh: !1
          }
        }(null !== QQ.rejoin, WQ), QQ.rejoin, WQ), nF(), WQ && (ts = performance.now())
      }))
    }

    function QP() {
      dF && function(QQ, WQ) {
        let {
          mesh: XQ,
          worldgen: wQ,
          modelPool: qQ
        } = QQ;
        "landingPage" === WQ ? (null === XQ || void 0 === XQ || XQ.stopWorkers(), null === wQ || void 0 === wQ || wQ.stopWorker(), null === qQ || void 0 === qQ || qQ.stopWorkers()) : ((0, QW.i)(WQ) || "inGame" === WQ) && (null === XQ || void 0 === XQ || XQ.restartWorkers(), null === qQ || void 0 === qQ || qQ.startWorkers())
      }({
        mesh: uz,
        worldgen: Ez,
        modelPool: xz
      }, QW.b.get("gameState"))
    }

    function WP(QQ) {
      HF = QQ, aF && XP(aF, QQ)
    }

    function XP(QQ, WQ) {
      QQ.style.visibility = WQ ? "visible" : "hidden"
    }

    function wP(QQ) {
      var WQ;
      const XQ = QQ.roomName,
        wQ = null !== (WQ = QQ.joinOptions.lobbyName) && void 0 !== WQ ? WQ : null;
      return () => {
        fF(XQ, wQ)
      }
    }

    function qP() {
      return XQ.e(281).then((() => XQ(51222))).then((QQ => {
        let {
          invalidateGuestTrafficCode: WQ
        } = QQ;
        return WQ()
      })).catch((QQ => {
        console.warn(`${nT} the cached traffic code could not be dropped`, QQ)
      }))
    }

    function TP(QQ, WQ, XQ) {
      var qQ, TQ;
      let zQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (iF) return;
      if ((null === (qQ = As) || void 0 === qQ ? void 0 : qQ.conn) !== QQ) return void(null !== Hs && Os.set(QQ, {
        code: WQ,
        reason: XQ
      }));
      const {
        rejoin: sQ,
        game: FQ,
        joinedAt: PQ
      } = As;
      OF(), bP();
      const gQ = (0, tQ.m)(WQ, (0, Ow.g)(QQ));
      if (console.info(`${nT} the game's connection closed with code ${WQ} (${null!==(TQ=gQ.name)&&void 0!==TQ?TQ:"unrecognised"})`), WQ === wQ.e.gameOrPluginKick.code || zQ || (0, AX.reportDisconnect)(gQ, dz, {
          closeReason: XQ,
          sinceJoinedMs: performance.now() - PQ,
          game: FQ
        }), gQ.requiresRefresh) {
        const QQ = "outdatedVersion" === gQ.name,
          XQ = new Error(`the game's connection closed with code ${WQ}`),
          wQ = () => null === As && null === Hs;
        return void Rg({
          site: AX.JOIN_SITE,
          error: XQ,
          outdated: QQ
        }, (() => {
          wQ() && zP(gQ, null, !1)
        }), {
          stillWanted: wQ
        })
      }
      const JQ = gQ.canReconnect ? sQ : null,
        rQ = null !== JQ && gQ.automaticallyReconnect && performance.now() - ns >= tQ.e;
      zP(gQ, JQ, rQ)
    }

    function zP(QQ, WQ, XQ) {
      var wQ;
      let qQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
        reasonKey: null,
        canPlayAgain: !1
      };
      if (lF) return;
      vq.b.unwantedLeave(XQ && null !== WQ && 0 === Ys.size), null === (wQ = xs) || void 0 === wQ || wQ.abort();
      const TQ = new AbortController;
      xs = TQ;
      const zQ = null === WQ ? null : () => {
        TQ.signal.aborted || (TQ.abort(), WQ())
      };
      if (XQ && null !== zQ) {
        ns = performance.now();
        const QQ = setTimeout(zQ, tQ.d);
        TQ.signal.addEventListener("abort", (() => {
          clearTimeout(QQ)
        }))
      }
      const sQ = {
        code: QQ.code,
        name: QQ.name,
        reason: QQ.reason,
        reasonKey: qQ.reasonKey,
        reconnect: zQ,
        reconnecting: XQ,
        requiresRefresh: QQ.requiresRefresh,
        canPlayAgain: qQ.canPlayAgain
      };
      if (Ys.size > 0)
        for (const PQ of [...Ys]) try {
          PQ(sQ)
        } catch (FQ) {
          console.error(`${nT} an unwanted-leave listener threw`, FQ)
        } else fw((0, uw.h)(QQ, null !== zQ, XQ), TQ.signal).then((WQ => {
          WQ && (null !== zQ ? zQ() : QQ.requiresRefresh && (0, MQ.j)())
        }))
    }
    const sP = {
      attachSocket: QQ => jP(QQ),
      onConnection: QQ => (Ks.add(QQ), () => {
        Ks.delete(QQ)
      }),
      sendRaw: (QQ, WQ) => {
        const XQ = Az;
        return null !== XQ && XQ.conn === QQ && Bg(XQ, WQ)
      },
      leaveRoom: ZF,
      closeSocket: QQ => {
        var WQ;
        (null === (WQ = Az) || void 0 === WQ ? void 0 : WQ.conn) === QQ && BP()
      },
      flushNet: yP
    };

    function FP(QQ) {
      var WQ;
      let {
        aux: XQ,
        payload: wQ
      } = QQ;
      null === (WQ = pz) || void 0 === WQ || WQ.queueOptions(XQ, wQ)
    }

    function PP(QQ, WQ) {
      FP(function(QQ, WQ) {
        return Lq = QQ ? {
          preventMovement: WQ
        } : null, QQ ? kq(WQ) : {
          aux: OW.gc.AdEnd,
          payload: uq
        }
      }(QQ, WQ))
    }

    function gP(QQ) {
      var WQ;
      Gs = QQ, null === (WQ = pz) || void 0 === WQ || WQ.setUiPrefs(QQ)
    }

    function JP(QQ, WQ) {
      vz.setMaster(QQ, WQ)
    }

    function rP(QQ) {
      var WQ;
      Us = QQ, null === (WQ = pz) || void 0 === WQ || WQ.setEnvPrefs(QQ)
    }

    function IP(QQ) {
      var WQ;
      bs = QQ, null === (WQ = pz) || void 0 === WQ || WQ.setLookPrefs(QQ)
    }

    function jP(QQ) {
      var WQ;
      let XQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new URL(QQ.url).origin,
        wQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      if (QQ.readyState === WebSocket.CLOSING || QQ.readyState === WebSocket.CLOSED) return console.warn(`${nT} a closing or closed socket can't be attached`), null;
      const qQ = pz;
      if (!qQ || qQ.isStopped) return console.warn(`${nT} no core is running to attach a socket to`), QQ.close(), null;
      if (null === (0, AQ.j)()) return console.warn(`${nT} the game has not started to attach a socket to`), QQ.close(), null;
      if (qs > OW.x) return console.warn(`${nT} this core has attached all the sockets it can; reload to play on`), QQ.close(), null;
      if (ys && !rs && (qg(qQ, !1, "all"), qQ.isStopped || iF)) return QQ.close(), null;
      BP();
      const TQ = qs++;
      if (!hP(qQ, "open", TQ, wQ ? OW.dc.Resume : 0)) return QQ.close(), null;
      wQ || vW.e.reset(), es = null === Hs ? null : {
        join: Hs,
        conn: TQ,
        activated: !1
      }, QQ.binaryType = "arraybuffer";
      const zQ = new dX.d((() => {
          ! function(QQ, WQ) {
            if (Az !== WQ || QQ.isStopped || null === pP(WQ, Xz)) return;
            WQ.detach(), Az = null, DP(QQ, WQ, Xz, "", !0), WQ.ws.close()
          }(qQ, sQ)
        })),
        sQ = {
          ws: QQ,
          conn: TQ,
          pending: [],
          pendingBytes: 0,
          left: !1,
          resume: wQ,
          token: null,
          detach: () => {
            zQ.dispose(), QQ.removeEventListener("message", FQ), QQ.removeEventListener("open", PQ), QQ.removeEventListener("close", gQ)
          }
        },
        FQ = QQ => {
          if (QQ.data instanceof ArrayBuffer) {
            var WQ;
            const XQ = new Uint8Array(QQ.data);
            zQ.heard(), sQ.token = null !== (WQ = (0, HX.d)(XQ)) && void 0 !== WQ ? WQ : sQ.token,
              function(QQ, WQ, XQ) {
                Hg(QQ, (() => {
                  QQ.rings.net.writeFrame(WQ, XQ) || QQ.crash(rX.u, `a socket frame of ${XQ.byteLength} bytes did not fit the net-in ring`)
                }));
                const wQ = QQ.rings.net.cursor >= Wz;
                !ig() && (wQ || QQ.netWrittenSinceFrame >= Qz) && qg(QQ, !1, document.hidden ? "all" : "budget");
                Ag(QQ)
              }(qQ, TQ, XQ)
          }
        },
        PQ = () => {
          wQ || (0, jQ.n)("wasm_socket_open", performance.now());
          for (const WQ of sQ.pending.splice(0)) QQ.send(WQ);
          sQ.pendingBytes = 0
        },
        gQ = QQ => {
          if (Az === sQ && qQ.rings.net.cursor > 0 && qg(qQ, !1, "all"), Az === sQ) {
            if (sQ.detach(), Az = null, DP(qQ, sQ, QQ.code, QQ.reason) || VP(qQ, sQ)) return;
            hP(qQ, "close", TQ), GP(TQ, sQ.left), TP(TQ, QQ.code, QQ.reason)
          }
        };
      return QQ.addEventListener("message", FQ), QQ.addEventListener("open", PQ), QQ.addEventListener("close", gQ), Az = sQ, null === (WQ = (0, AQ.j)()) || void 0 === WQ || WQ.socketAttached(TQ), (0, rQ.t)({
        websocketUrl: XQ
      }), TQ
    }

    function BP() {
      const QQ = Az;
      if (!QQ) return;
      const WQ = pz,
        XQ = QQ.resume;
      XQ && (yP(), Az !== QQ) || (Az = null, QQ.detach(), QQ.ws.close(), null !== WQ && (VP(WQ, QQ) || XQ && DP(WQ, QQ, wz)) || (null !== WQ && hP(WQ, "close", QQ.conn), GP(QQ.conn, QQ.left)))
    }

    function yP() {
      const QQ = pz;
      null !== QQ && !QQ.isStopped && !iF && !rs && QQ.rings.net.cursor > 0 && qg(QQ, !1, "all")
    }

    function VP(QQ, WQ) {
      var XQ;
      if (!WQ.resume) return !1;
      const wQ = Rs;
      return null !== wQ && null !== WQ.token && "" !== WQ.token && (wQ.pendingHold = {
        conn: WQ.conn,
        token: `${wQ.roomId}:${WQ.token}`
      }), hP(QQ, "close", WQ.conn), null === (XQ = (0, AQ.j)()) || void 0 === XQ || XQ.socketDetached(WQ.conn), !0
    }

    function DP(QQ, WQ, XQ) {
      let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
        qQ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      const TQ = pP(WQ, XQ);
      if (null === TQ) return !1;
      const {
        Ds: zQ,
        token: sQ,
        game: FQ,
        joinedAt: PQ
      } = TQ;
      if (!hP(QQ, "close", WQ.conn, OW.D.Held)) return !0;
      console.warn(`${nT} the game's connection ${qQ?"went silent":`dropped with code ${XQ}`}, holding it`);
      const gQ = {
        closeReason: wQ,
        sinceJoinedMs: performance.now() - PQ,
        game: FQ
      };
      return (0, AX.reportDisconnect)((0, tQ.m)(XQ), dz, gQ, qQ ? "silent" : void 0), zQ.heldConn = WQ.conn, zQ.dropCode = XQ, zQ.pendingHold = {
        conn: WQ.conn,
        token: `${zQ.roomId}:${sQ}`
      }, rs || qg(QQ, !1, "all"), !0
    }

    function pP(QQ, WQ) {
      const XQ = Rs,
        qQ = As,
        TQ = QQ.token;
      return null === XQ || null === qQ || iF || QQ.left || qQ.conn !== QQ.conn || null === TQ || "" === TQ ? null : (0, wQ.l)(WQ) && XQ.resume.canHoldSeat() ? {
        Ds: XQ,
        token: TQ,
        game: qQ.game,
        joinedAt: qQ.joinedAt
      } : null
    }

    function GP(QQ, WQ) {
      var XQ;
      null === (XQ = (0, AQ.j)()) || void 0 === XQ || XQ.closeGame(QQ), (0, Cq.c)().close(QQ), WQ || (0, rQ.t)({
        websocketUrl: null
      })
    }

    function UP() {
      const QQ = Ss;
      if (null === QQ) return;
      const WQ = (0, AQ.j)();
      iF || null === WQ || WQ.Bl(QQ) ? Ss = null : performance.now() - Vs.pause >= sz && (Vs.pause = performance.now(), console.warn(`${nT} the cmd ring had no room for SetPaused(${QQ}): written before the next frame`))
    }

    function bP() {
      const QQ = Rs;
      Rs = null, null === QQ || void 0 === QQ || QQ.resume.dispose()
    }

    function vP(QQ, WQ) {
      var XQ, wQ;
      const {
        heldConn: qQ
      } = QQ, TQ = QQ.resume.resumingConn;
      QQ.heldConn = 0, QQ.pendingHold = null, Rs === QQ && (Rs = null), "left" === WQ ? QQ.resume.leave() : QQ.resume.dispose(), 0 === fs || (null === (XQ = Az) || void 0 === XQ ? void 0 : XQ.conn) !== fs || "left" === WQ && (null === (wQ = vs) || void 0 === wQ ? void 0 : wQ.conn) === fs || lP(fs), "gaveUp" === WQ && 0 !== TQ && lP(TQ), 0 !== qQ && "refused" !== WQ && (console.info(`${nT} the game held through its drop ${"left"===WQ?"was left":"is given up"}`), null === pz || pz.isStopped || hP(pz, "close", qQ), GP(qQ, !1))
    }

    function dP(QQ, WQ) {
      const XQ = WQ.indexOf(":");
      return {
        roomId: XQ < 0 ? QQ.roomId : WQ.slice(0, XQ),
        roomToken: WQ.slice(XQ + 1)
      }
    }

    function HP(QQ) {
      (0, IX.logClientMeasurement)("join_preload", QQ, {
        client: "wasm"
      })
    }

    function aP(QQ) {
      var WQ;
      Es = QQ;
      const XQ = QQ.replayOffer && ks !== QQ.conn;
      Ls = XQ ? QQ.conn : 0, Cs = XQ || us.has(QQ.conn) ? 0 : QQ.conn, bQ.admitted(), QQ.conn === fs && (fs = 0);
      const wQ = Rs;
      null !== wQ && (null === (WQ = As) || void 0 === WQ ? void 0 : WQ.conn) === QQ.conn && wQ.resume.onInitialInfo(QQ)
    }

    function lP(QQ) {
      var WQ;
      const XQ = Az;
      (null === XQ || void 0 === XQ ? void 0 : XQ.conn) === QQ && (XQ.left = !0, null === (WQ = (0, AQ.j)()) || void 0 === WQ || WQ.socketLeft(), (0, rQ.t)({
        websocketUrl: null
      }), ZF(QQ) ? setTimeout((() => {
        Az === XQ && BP()
      }), oQ.f) : BP())
    }

    function hP(QQ, WQ, XQ) {
      let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        qQ = !1;
      return Hg(QQ, (() => {
        const {
          net: TQ
        } = QQ.rings;
        qQ = "open" === WQ ? TQ.writeOpen(XQ, wQ) : TQ.writeClose(XQ, wQ), qQ || QQ.crash(rX.u, `a socket ${WQ} did not fit the net-in ring`)
      })), qQ
    }

    function iP(QQ, WQ, XQ) {
      let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      if (EP()) return (0, AX.reportUnsupportedFallback)(QQ, WQ, XQ, wQ), void CP(`the wasm client can't run here (${XQ}; ${WQ})`, WQ);
      (0, AX.showUnsupported)(QQ, "unsupported", XQ, wQ)
    }
    const cP = 1500;

    function AP(QQ, WQ) {
      const XQ = 1 === QQ.missing.length && QQ.missing[0] === gX.c,
        wQ = WQ ? "blockedAfterLoss" : XQ ? "noContext" : "unsupported";
      return {
        decline: wQ,
        detail: `No WebGPU or WebGL2, and WebGL1 lacks ${QQ.missing.join(", ")}`,
        details: {
          missing: QQ.missing.join(",")
        },
        retries: "unsupported" !== wQ && EP()
      }
    }

    function RP(QQ) {
      console.warn(`${nT} ${QQ}: reloading once more onto the wasm client`), (0, Rq.q)(), (0, AX.flushCrashReports)(MQ.c).then(MQ.j, MQ.j)
    }

    function EP() {
      return dF && "wasm" !== (0, UW.e)(window.location.search)
    }

    function CP(QQ, WQ) {
      console.warn(`${nT} ${QQ}: reloading on the JS client`), null !== WQ && (0, UW.u)(WQ), (0, UW.s)(null === WQ ? "reloadOntoJs" : "decline");
      const XQ = () => {
        (0, MQ.g)(UW.B)
      };
      (0, AX.flushCrashReports)(MQ.c).then(XQ, XQ)
    }

    function uP(QQ, WQ, XQ, wQ) {
      return WF(QQ, WQ, XQ, wQ)
    }

    function LP() {
      null === qF || null === pz || pz.isStopped || iF || null !== Nz || null === Jz || (Nz = qF(Jz, SP, tP().follow))
    }

    function kP() {
      var QQ, WQ, XQ;
      return null !== (QQ = null === (WQ = Uz) || void 0 === WQ || null === (XQ = WQ.textures) || void 0 === XQ ? void 0 : XQ.files()) && void 0 !== QQ ? QQ : null
    }

    function fP(QQ) {
      tP().follow((WQ => {
        null !== WQ && Promise.all([Promise.all([XQ.e(210), XQ.e(48)]).then((() => XQ(51257))), (0, Rq.J)()]).then((QQ => {
          let [{
            followPagePackFiles: XQ
          }, wQ] = QQ;
          const qQ = null === wQ || (0, gX.n)(wQ) ? "webgl" : wQ.backend;
          XQ(WQ, bq.d, qQ, (QQ => {
            bq.d.setPageFiles(QQ)
          }), SP)
        }), (WQ => {
          console.warn(`${nT} the texture pack's files didn't load: the previews draw the shipped ones until the next opens`, WQ), QQ()
        }))
      }))
    }

    function SP(QQ, WQ) {
      console.warn(`${nT} ${QQ}`, WQ)
    }

    function tP() {
      return Gz ??= new eq({
        load: QQ => Promise.all([XQ.e(210), XQ.e(57)]).then((() => XQ(51265))).then((WQ => {
          let {
            startPageTexturePackFeed: XQ
          } = WQ;
          return XQ(SP, QQ)
        })),
        store: nX.f,
        nI: QQ => {
          lz.then((() => {
            (0, AX.reportTexturePackFeedLoadFailure)(QQ, dz)
          }))
        }
      }), Gz
    }
    const oP = QQ => tP().follow(QQ);

    function eP() {
      return tP().loaded()
    }
    const nP = function(QQ, WQ, XQ) {
        let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => performance.now(),
          qQ = 0;
        return async function(TQ, zQ) {
          let sQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
          const FQ = ++qQ,
            PQ = wQ() + WQ,
            gQ = await
          function(QQ, WQ) {
            let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {};
            return new Promise((wQ => {
              const qQ = setTimeout((() => {
                wQ(null), QQ.then((QQ => {
                  null !== QQ && (QQ.joinedWithout(), XQ(QQ))
                }))
              }), WQ);
              QQ.then((QQ => {
                clearTimeout(qQ), wQ(QQ)
              }))
            }))
          }(QQ(TQ), WQ, (QQ => {
            FQ === qQ && sQ() && zQ(QQ, wQ() + WQ).catch((QQ => {
              XQ("the texture pack step after the join failed", QQ)
            }))
          }));
          return null === gQ ? null : zQ(gQ, PQ)
        }
      }((QQ => (0, JW.k)(QQ) ? tP().request() : tP().forJoin()), oq.c, SP),
      xP = function(QQ, WQ) {
        let XQ = !1;
        return {
          setGamePackConfirm: QQ => {
            XQ = null !== QQ, WQ(QQ)
          },
          packStep: (WQ, wQ, qQ) => QQ(WQ, wQ, (() => XQ && qQ()))
        }
      }(nP, (QQ => {
        tP().setGamePackConfirm(QQ)
      }));

    function YP(QQ) {
      xP.setGamePackConfirm(QQ)
    }

    function NP() {
      if (iF || null !== PF || null === TF || null === FF) return;
      const {
        backend: QQ,
        canvas: WQ,
        fallbackReason: XQ,
        adapterVendor: wQ
      } = FF, qQ = TF;
      TF = null;
      try {
        PF = qQ({
          backend: QQ,
          canvas: WQ,
          fallbackReason: XQ,
          adapterVendor: wQ,
          joinedGame: () => iF ? null : vs,
          canSend: () => !iF && null !== vs && vs.conn === Cs,
          inGame: OP,
          shaderPackReach: () => {
            var QQ, WQ;
            return null !== (QQ = null === (WQ = Mz) || void 0 === WQ ? void 0 : WQ.reachInJoinedGame()) && void 0 !== QQ ? QQ : null
          },
          HB: () => Zz,
          msaa: () => sF > 1,
          writeCmd: (QQ, WQ, XQ) => null !== Jz && Jz(QQ, WQ, XQ),
          takeFailedMeshJobs: () => {
            var QQ, WQ;
            return null !== (QQ = null === (WQ = uz) || void 0 === WQ ? void 0 : WQ.takeFailedMeshJobs()) && void 0 !== QQ ? QQ : 0
          },
          readLoadCounts: QQ => {
            var WQ, XQ;
            return null !== (WQ = null === (XQ = pz) || void 0 === XQ ? void 0 : XQ.readLoadCounts(QQ)) && void 0 !== WQ && WQ
          },
          mainStalled: (QQ, WQ, XQ, wQ) => {
            (0, AX.reportMainStall)(QQ, WQ, XQ, wQ, dz)
          }
        })
      } catch (TQ) {
        console.error(`${nT} the frame telemetry didn't start`, TQ)
      }
    }

    function ZP(QQ, WQ) {
      try {
        var XQ, wQ, qQ;
        const TQ = ms && null !== (XQ = null === (wQ = pz) || void 0 === wQ || null === (qQ = wQ.lastHeader) || void 0 === qQ ? void 0 : qQ.renderPending) && void 0 !== XQ ? XQ : 0;
        (0, Bw.f)(WQ, QQ, OP() && !(null !== Lq), TQ)
      } catch (TQ) {
        (0, Bw.x)(), console.error(`${nT} the quality steps stopped`, TQ)
      }
    }

    function OP() {
      return null !== vs && GF === vs && !iF
    }

    function KP(QQ) {
      const WQ = PF;
      PF = null;
      try {
        null === WQ || void 0 === WQ || WQ.stop()
      } catch {}
      console.error(`${nT} the frame telemetry threw: it stops`, QQ)
    }

    function mP(QQ) {
      var WQ, XQ, wQ, qQ;
      if ((0, Cq.c)().fire(QQ), "message" === QQ.type) {
        if (Is++, QQ.cg === OW.Uc.ERROR && null !== Hs) {
          var TQ;
          const {
            text: WQ,
            dropsCache: XQ
          } = (0, tQ.q)((new TextDecoder).decode(QQ.payload));
          Ns ||= XQ, (null === (TQ = es) || void 0 === TQ ? void 0 : TQ.conn) === QQ.conn && (Zs = WQ)
        } else if (QQ.cg === KW.gc.ResumeComplete) {
          var zQ;
          ks = QQ.conn, QQ.conn === Ls && (Ls = 0, Cs = us.has(QQ.conn) ? 0 : QQ.conn), null === (zQ = Rs) || void 0 === zQ || zQ.resume.onResumeComplete(QQ.conn)
        }
        return
      }
      QQ.phase === OW.E.Left ? Bs = QQ.conn : QQ.phase === OW.E.Activated && (null === (WQ = es) || void 0 === WQ ? void 0 : WQ.conn) === QQ.conn ? es.activated = !0 : QQ.phase === OW.E.Resumed ? function(QQ) {
        var WQ, XQ;
        fs = QQ;
        const wQ = Rs;
        if (null === wQ || 0 === wQ.heldConn || (null === (WQ = Az) || void 0 === WQ ? void 0 : WQ.conn) !== QQ || !Az.resume || null === As) return;
        console.info(`${nT} the game resumed on conn ${QQ}, waiting for its InitialInfo`);
        const qQ = wQ.heldConn;
        wQ.heldConn = 0, Az.resume = !1, As.conn = QQ, (null === (XQ = is) || void 0 === XQ ? void 0 : XQ.conn) === qQ && (is = {
          conn: QQ,
          info: is.info
        }), vW.e.apply({
          shopInfo: null,
          _shopVersion: rW.c
        })
      }(QQ.conn) : QQ.phase === OW.E.Held ? function(QQ) {
        var WQ;
        const XQ = Rs,
          wQ = null !== (WQ = null === XQ || void 0 === XQ ? void 0 : XQ.pendingHold) && void 0 !== WQ ? WQ : null;
        if (null !== XQ && null !== wQ && wQ.conn === QQ) return XQ.pendingHold = null, XQ.heldConn = QQ, fs = 0, console.warn(`${nT} the core holds the game, reconnecting`), void XQ.resume.onDropped(wQ.token);
        if (QQ === fs) {
          fs = 0;
          const WQ = pz;
          null === WQ || WQ.isStopped || (console.info(`${nT} the core held again a resumed game the shell ended before its InitialInfo: closing it again`), hP(WQ, "close", QQ))
        }
      }(QQ.conn) : QQ.phase === OW.E.Closed && (null === (XQ = Rs) || void 0 === XQ || null === (wQ = XQ.pendingHold) || void 0 === wQ ? void 0 : wQ.conn) === QQ.conn && (Rs.heldConn === QQ.conn ? function(QQ) {
        const WQ = QQ.heldConn,
          XQ = QQ.dropCode;
        vP(QQ, "refused"), console.info(`${nT} the core didn't hold the game through its drop: it hadn't started`), queueMicrotask((() => {
          GP(WQ, !1), TP(WQ, XQ, "", !0)
        }))
      }(Rs) : Rs.pendingHold = null), QQ.phase !== OW.E.Held && QQ.phase !== OW.E.Left && QQ.phase !== OW.E.Closed || (us.add(QQ.conn), QQ.conn === Cs && (Cs = 0));
      const sQ = Object.keys(OW.E).find((WQ => OW.E[WQ] === QQ.phase)),
        FQ = 0 === QQ.code ? "" : ` (code ${QQ.code})`;
      console.info(`${nT} conn ${QQ.conn}: ${null!==sQ&&void 0!==sQ?sQ:QQ.phase}${FQ}, ${Is} raw messages so far`), (null === (qQ = vs) || void 0 === qQ ? void 0 : qQ.conn) !== QQ.conn || QQ.phase !== OW.E.Left && QQ.phase !== OW.E.Closed || NF(null), hs !== QQ.conn || QQ.phase !== OW.E.Left && QQ.phase !== OW.E.Closed || (hs = null, null === vs && null === Hs && vq.b.setGame(void 0));
      for (const gQ of [...Ks]) try {
        gQ(QQ.conn, QQ.phase, QQ.code)
      } catch (PQ) {
        (0, mW.m)(PQ, `${nT} a connection listener threw`)
      }
    }
    const MP = 9e4,
      Qg = 1e3;

    function Wg() {
      (0, Rq.q)(), null === vs && null === Hs || (0, xX.e)(), queueMicrotask((() => {
        try {
          yg()
        } catch (QQ) {
          console.warn(`${nT} stopping before the reload threw`, QQ)
        }(0, AX.flushCrashReports)(MQ.c).then(MQ.j, MQ.j)
      }))
    }

    function Xg() {
      const QQ = pz;
      null === QQ || QQ.isStopped || null === Az || rs || !QQ.hasPendingCommands() || qg(QQ, !1, "budget")
    }

    function wg(QQ) {
      var WQ;
      const XQ = vs;
      QQ.persisted || null === XQ || (null === (WQ = Az) || void 0 === WQ ? void 0 : WQ.conn) !== XQ.conn || Az.left || XQ.leave()
    }

    function qg(QQ, WQ, wQ) {
      let qQ = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const TQ = rs;
      rs = !0;
      try {
        const TQ = QQ.rings.net.cursor >= Wz;
        TQ && "all" !== wQ && !document.hidden && Dg("backlog", `a shown tab's net-in is ${QQ.rings.net.cursor} bytes behind: one frame reads it all`);
        return function(QQ, WQ, wQ, qQ) {
          var TQ, zQ, sQ, FQ;
          if (iF) return !1;
          if (Hg(QQ, zg), iF || QQ.isStopped) return !1;
          Ig() && Xs("modelsIn");
          UP(), Ts = performance.now(), Bs = null, ys = !1, (0, cQ.I)(), null === (TQ = oz) || void 0 === TQ || TQ.beforeFrame(), iw(Ts, QQ), (0, cQ.B)(Ts, sg), gs = !0;
          const PQ = WQ && rg();
          let gQ;
          try {
            gQ = QQ.frame(Ts, PQ, wQ)
          } finally {
            gs = !1
          }
          if (!gQ) return !1;
          zF.observe(null !== (zQ = null === (sQ = QQ.lastHeader) || void 0 === sQ ? void 0 : sQ.chunksCancelled) && void 0 !== zQ ? zQ : 0);
          const JQ = QQ.lastFrameKind,
            rQ = (0, uW.b)(JQ);
          (function(QQ) {
            null !== TT && TT.afterFrame(performance.now(), QQ)
          })(rQ), null === (FQ = gF) || void 0 === FQ || FQ.frame(QQ, Ts, JQ), WQ && (UF = rQ);
          rQ && (0, RW.d)(Ts);
          if (null !== PF) try {
            PF.frameRan(QQ, Ts, performance.now(), JQ)
          } catch (BQ) {
            KP(BQ)
          }
          "drawn" === JQ && Jg() && function() {
            for (const QQ of [...cq]) QQ()
          }();
          QQ.forEachNetOut(jg);
          const IQ = Az;
          null !== Bs && (null === IQ || void 0 === IQ ? void 0 : IQ.conn) === Bs && Bg(IQ, oQ.m);
          gg(QQ),
            function(QQ) {
              const WQ = 0 !== (QQ.headerWord(KW.F.LoadSteps) & KW.U.JoinPreload);
              WQ !== ls && (ls = WQ, (0, AX.setCrashAdPreload)(WQ), (0, kX.J)())
            }(QQ), WQ && function(QQ) {
              var WQ, wQ, qQ;
              if (null === vs || !rg()) return;
              const TQ = QQ.headerWord(KW.F.LoadSteps);
              null === pF || GF === vs && !pF.frame(Ts, 0 !== (TQ & KW.V.TerrainDrawn)) || (pF = null);
              if (0 === (TQ & KW.U.PlayerBound)) return;
              const zQ = QQ.lastHeader,
                sQ = !ms || 0 === (null === zQ || void 0 === zQ ? void 0 : zQ.renderPending);
              !jF && sQ && (jF = !0, performance.mark(MT));
              if (GF === vs) return;
              const FQ = null !== (WQ = null === zQ || void 0 === zQ ? void 0 : zQ.firstView) && void 0 !== WQ ? WQ : OW.$.NotYet;
              if (ms && FQ === OW.$.NotYet) return;
              if (IF && (!0 !== (null === (wQ = (0, AQ.j)()) || void 0 === wQ ? void 0 : wQ.isSessionLive) || !sQ)) return;
              GF = vs;
              const PQ = vs;
              if (setTimeout((() => {
                  vs === PQ && (0, jQ.i)()
                }), 0), null === (qQ = Mz) || void 0 === qQ || qQ.playable(), function() {
                  clearTimeout(cz), cz = setTimeout((() => {
                    OP() && hg((QQ => {
                      let {
                        prefetchWorldgenWorker: WQ
                      } = QQ;
                      WQ()
                    }))
                  }), gz)
                }(), IF) return;
              IF = !0, performance.mark(mT), (0, mq.m)("render") && Promise.all([XQ.e(80), XQ.e(51)]).then((() => XQ(4995))).then((QQ => {
                let {
                  renderDebugPlayable: WQ
                } = QQ;
                WQ()
              }), (QQ => {
                console.warn("The render debug topic didn't load", QQ)
              }));
              const gQ = Math.round(performance.now()),
                JQ = QQ.readViewQueuedPrograms();
              null !== JQ && (0, jQ.n)("wasm_view_links", gQ, (0, jW.xb)(JQ));
              const rQ = null === DF || null === yF ? 0 : Math.max(0, yF - DF),
                IQ = null === DF ? 0 : Math.max(0, gQ - DF),
                BQ = ms ? QQ.readFirstViewWait(rQ, IQ) : null;
              null !== BQ && (0, jQ.m)(BQ);
              if (ms && FQ !== OW.$.Drawn) {
                const WQ = FQ === OW.$.HeldBackstop ? "held_draws" : "long",
                  {
                    cause: XQ
                  } = Fg(QQ);
                if (console.warn(`${nT} playable at ${gQ} ms on the first view's ${WQ} backstop, ${XQ}: it wasn't drawn whole in time`), (0, jQ.n)("wasm_view_backstop", gQ, `${WQ}:${XQ}`), "long" === WQ) {
                  var yQ, VQ;
                  const WQ = null !== (yQ = null === (VQ = As) || void 0 === VQ ? void 0 : VQ.game) && void 0 !== yQ ? yQ : "";
                  pF = new YX.d((() => {
                    const {
                      cause: XQ,
                      census: wQ
                    } = Fg(QQ);
                    (0, AX.reportFirstViewNoTerrain)(WQ, XQ, wQ, dz), (0, GW.A)("noTerrain")
                  }))
                }
              } else console.info(`${nT} playable at ${gQ} ms${ms?"":" (no renderer)"}`);
              setTimeout(wF, 0), (0, HW.e)().catch((QQ => {
                console.error(`${nT} item sprites didn't load, so item particles show the missing texture`, QQ)
              })), jq.e.warm()
            }(QQ);
          (0, rX.S)(QQ, {
            worldgen: Ez,
            mesh: uz
          }),
          function(QQ) {
            QQ.forEachEvent(Rw);
            for (const WQ of Aw) try {
              (0, dw.e)(WQ)
            } catch (BQ) {
              if ((0, mW.h)(BQ)) {
                QQ.crashOn(rX.j, BQ);
                break
              }
              console.error(`${aw} an input action listener threw`, BQ)
            }
            Aw.length = 0
          }(QQ), qQ && (0, CW.b)();
          return !QQ.isStopped
        }(QQ, WQ, "all" === wQ || TQ, qQ)
      } finally {
        rs = TQ, TQ || (zs = performance.now())
      }
    }

    function Tg(QQ) {
      console.error(`${nT} a frame-start listener threw`, QQ)
    }

    function zg() {
      var QQ, WQ, XQ, wQ;
      null === (QQ = nz) || void 0 === QQ || QQ.drain(Jz, rz), null === (WQ = Oz) || void 0 === WQ || WQ.drain(Jz), null === (XQ = Kz) || void 0 === XQ || XQ.drain(performance.now()), XF(Jz), null === (wQ = Nz) || void 0 === wQ || wQ.drain()
    }

    function sg(QQ) {
      console.error(`${nT} a before-frame listener threw`, QQ)
    }

    function Fg(QQ) {
      const WQ = (0, AQ.j)(),
        XQ = (0, AQ.u)(),
        wQ = null === WQ || null === XQ ? null : XQ.readDrawCensus(WQ.api);
      return {
        cause: (0, YX.k)(QQ.headerWord(KW.F.LoadSteps), wQ),
        census: wQ
      }
    }
    const Pg = {
      ChunkRequested: "wasm_chunk_requested",
      ChunkStored: "wasm_chunk_stored",
      MeshLanded: "wasm_mesh_landed",
      PlayerChunk: "wasm_player_chunk",
      TerrainDrawn: "wasm_terrain_drawn"
    };

    function gg(QQ) {
      var WQ;
      if (IF) return;
      if (null === yF && rg() && (yF = performance.now()), null === vs || 0 === (QQ.headerWord(KW.F.LoadSteps) & KW.U.PlayerBound) ? DF = null : DF ??= performance.now(), null === Hs && null === vs) return;
      null === yF || VF || (VF = !0, (0, jQ.n)("wasm_startup_loaded", yF));
      let XQ = 0;
      null !== vs ? XQ = -1 : !0 === (null === (WQ = es) || void 0 === WQ ? void 0 : WQ.activated) && (XQ = ~KW.V.TerrainDrawn);
      const wQ = QQ.headerWord(KW.F.LoadSteps) & XQ & ~BF;
      if (0 === wQ) return;
      BF |= wQ;
      const qQ = performance.now();
      for (const [TQ, zQ] of Object.entries(Pg)) 0 !== (wQ & KW.V[TQ]) && (0, jQ.n)(zQ, qQ)
    }

    function Jg() {
      return ms && rg()
    }

    function rg() {
      return mz && Ig()
    }

    function Ig() {
      return null === nz || nz.startupDone
    }

    function jg(QQ, WQ) {
      const XQ = Az;
      (null === XQ || void 0 === XQ ? void 0 : XQ.conn) === QQ ? Bg(XQ, WQ) : ps++
    }

    function Bg(QQ, WQ) {
      const {
        ws: XQ
      } = QQ;
      return XQ.readyState === WebSocket.OPEN ? (XQ.send(WQ), !0) : XQ.readyState === WebSocket.CONNECTING && QQ.pendingBytes + WQ.byteLength <= zz ? (QQ.pending.push(WQ.slice()), QQ.pendingBytes += WQ.byteLength, !0) : (ps++, !1)
    }

    function yg() {
      var QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ, FQ, PQ, gQ, JQ, rQ, IQ, jQ, BQ, yQ;
      iF = !0, bF.stop(), (0, QT.endLookDebugTake)(), TT = null, bP(), (0, cQ.H)().unlockPointer(), (0, cQ.F)(null), null === (QQ = ez) || void 0 === QQ || QQ(), ez = null, null === (WQ = (0, AQ.u)()) || void 0 === WQ || WQ.followCursorAim(null), (0, CW.B)(), (0, AQ.f)(), vz.stop(), null === (XQ = JF) || void 0 === XQ || XQ(), JF = null, null === (wQ = rF) || void 0 === wQ || wQ(), rF = null, null === (qQ = PF) || void 0 === qQ || qQ.stop(), PF = null, (0, ZX.q)(null), null === (TQ = Rz) || void 0 === TQ || TQ(), Rz = null, null === (zQ = Ez) || void 0 === zQ || zQ.stop(), Ez = null, null === (sQ = uz) || void 0 === sQ || sQ.stop(), uz = null, null !== (FQ = Uz) && void 0 !== FQ && null !== (PQ = FQ.textures) && void 0 !== PQ && PQ.assets && (0, Gq.m)(null), null === (gQ = Uz) || void 0 === gQ || gQ.stop(), Uz = null, bz = null;
      const VQ = Lz;
      Lz = null, VQ && (VQ.stop(), dg(VQ)), null === (JQ = Oz) || void 0 === JQ || JQ.dispose(), Oz = null, null === (rQ = Kz) || void 0 === rQ || rQ.dispose(), Kz = null, nz = null, null === (IQ = Yz) || void 0 === IQ || IQ(), Yz = null, null === (jQ = tz) || void 0 === jQ || jQ(), tz = null, null !== Ps && (clearTimeout(Ps), Ps = null), null === (BQ = oz) || void 0 === BQ || BQ.stop(), oz = null, nF(), vq.b.release(), BP();
      const DQ = Nz;
      Nz = null;
      try {
        null === DQ || void 0 === DQ || DQ.dispose()
      } catch (pQ) {
        console.warn(`${nT} the sky's images didn't release`, pQ)
      }(0, Bq.g)(null), null === (yQ = Vz) || void 0 === yQ || yQ.pagePreviews().endSession(null === (0, BW.r)())
    }

    function Vg(QQ, WQ) {
      var XQ, wQ;
      const qQ = null !== (XQ = null === (wQ = Lz) || void 0 === wQ ? void 0 : wQ.details()) && void 0 !== XQ ? XQ : {},
        TQ = QQ.site === YT || QQ.site === NT || QQ.site === AX.RENDER_RELOAD_SITE || QQ.site === ZT ? QQ.error instanceof WebAssembly.RuntimeError || QQ.error instanceof zX.e : !(0, gX.o)(QQ.error) && (0, rX.L)(QQ);
      TQ && QQ.error instanceof Error && (0, BW.S)(QQ.error);
      const zQ = TQ || QQ.site === rX.y ? (0, AX.readTrap)(QQ.error) : null,
        sQ = null !== zQ && (0, QX.f)(zQ.kind, zQ.refusedBytes) ? zQ.refusedBytes : 0,
        FQ = (0, lX.m)(),
        PQ = null === kz ? (0, Jq.q)(function() {
          try {
            return (0, BW.w)().buffer.byteLength
          } catch {
            return 0
          }
        }(), sQ, FQ) : kz.ceilingMayRefuse(sQ, FQ),
        gQ = sQ > 0 && !PQ && EP();
      var JQ;
      if (gQ && ((0, UW.u)("oom"), (0, UW.s)("decline"), hF = !0), yg(), (0, Rq.b)()) return console.warn(`${nT} the session stopped at ${QQ.site} as the page reloads`, QQ.error), void((0, gX.o)(QQ.error) || (null === (JQ = QQ.header) || void 0 === JQ ? void 0 : JQ.lastError) === OW.K.CoreBusy || (0, AX.reportStoppedCore)(QQ, WQ, zQ, {
        memoryDetails: qQ,
        declined: gQ
      }));
      (0, AX.showCrash)(QQ, WQ, zQ, {
        memoryDetails: qQ,
        declined: gQ
      })
    }

    function Dg(QQ, WQ) {
      const XQ = performance.now();
      return !(XQ - Vs[QQ] < sz) && (Vs[QQ] = XQ, console.warn(`${nT} ${WQ}`), !0)
    }

    function pg(QQ) {
      const {
        input: WQ,
        net: XQ,
        worker: wQ
      } = QQ.rings, qQ = QQ.optionsDropped, TQ = WQ.dropped + qQ + XQ.dropped + wQ.dropped + ps;
      TQ !== Ds && Dg("dropped", `${TQ} records dropped so far (input ${WQ.dropped}, options ${qQ}, net ${XQ.dropped}, worker ${wQ.dropped}, net-out ${ps})`) && (Ds = TQ)
    }

    function Gg() {
      var QQ, WQ;
      const XQ = (0, LX.e)();
      if (null === XQ) return null;
      const wQ = (0, eX.s)(XQ);
      return {
        ...wQ,
        horizontal: Math.min(wQ.horizontal, null !== (QQ = null === (WQ = Lz) || void 0 === WQ ? void 0 : WQ.shedDistanceInUse()) && void 0 !== QQ ? QQ : 1 / 0)
      }
    }

    function Ug(QQ) {
      var WQ, XQ;
      return {
        samples: ms ? sF : null,
        sunShadows: QQ,
        renderDistance: null !== (WQ = null === (XQ = Gg()) || void 0 === XQ ? void 0 : XQ.horizontal) && void 0 !== WQ ? WQ : null
      }
    }

    function bg(QQ) {
      as = QQ, (0, kX.J)()
    }

    function vg() {
      var QQ, WQ, XQ;
      const wQ = Gg();
      return {
        ...null === (QQ = Lz) || void 0 === QQ ? void 0 : QQ.pageKillSnapshot(),
        renderDistance: null !== (WQ = null === wQ || void 0 === wQ ? void 0 : wQ.horizontal) && void 0 !== WQ ? WQ : null,
        renderDistanceVertical: null !== (XQ = null === wQ || void 0 === wQ ? void 0 : wQ.vertical) && void 0 !== XQ ? XQ : null,
        chunkCap: fz,
        budgetBasis: Sz,
        renderBackend: (0, Rq.B)(),
        adPreload: ls,
        ...(0, fX.e)(as)
      }
    }

    function dg(QQ) {
      var WQ;
      console.info(`${nT} wasm memory at the session's end`, QQ.details());
      const {
        wasmMainMiB: XQ,
        wasmWorkersMiB: wQ,
        peakStoredChunks: qQ
      } = QQ.pageKillSnapshot(), TQ = navigator.deviceMemory;
      (0, IX.logClientMeasurement)("wasm_memory_end", {
        wasmMainMiB: XQ,
        wasmWorkersMiB: wQ,
        peakStoredChunks: qQ
      }, {
        client: "wasm",
        renderBackend: null !== (WQ = (0, Rq.B)()) && void 0 !== WQ ? WQ : "none",
        os: (0, SX.getOperatingSystem)(),
        deviceMemory: String(null !== TQ && void 0 !== TQ ? TQ : "unreported")
      })
    }

    function Hg(QQ, WQ) {
      if (!QQ.isStopped) try {
        WQ()
      } catch (XQ) {
        QQ.crash(rX.A, XQ)
      }
    }

    function ag() {
      return Cz ??= XQ.e(74).then((() => XQ(51269))).catch((QQ => {
        throw Cz = null, QQ
      })), Cz
    }
    async function lg() {
      const {
        createWorldgenWorker: QQ,
        worldgenWorkerReady: WQ
      } = await ag();
      return await WQ(), QQ
    }

    function hg(QQ) {
      var WQ;
      null === (WQ = Cz) || void 0 === WQ || WQ.then(QQ, (() => {}))
    }

    function ig() {
      return performance.now() - Math.max(zs, ss) >= Fz
    }

    function cg(QQ) {
      const WQ = document.hidden || Fs ? "all" : "budget";
      Fs = !0;
      const XQ = qg(QQ, !1, WQ);
      var wQ;
      XQ && (pg(QQ), null === (wQ = Lz) || void 0 === wQ || wQ.afterFrame());
      return XQ
    }

    function Ag(QQ) {
      QQ.isStopped || 0 === QQ.rings.net.cursor || ig() && !cg(QQ) || QQ.rings.net.cursor > 0 && performance.now() - ss >= Fz / 2 && function(QQ) {
        Ps ??= setTimeout((() => {
          Ps = null, Ag(QQ)
        }), Fz)
      }(QQ)
    }

    function Rg(QQ, WQ) {
      return async function(QQ, WQ, XQ) {
        let {
          stop: wQ,
          stillWanted: qQ,
          beforeReload: TQ
        } = XQ;
        const zQ = await (0, Zw.k)(QQ, {
          stillWanted: qQ,
          beforeReload: async () => {
            wQ(), await Promise.all([(0, AX.flushCrashReports)(MQ.c), null === TQ || void 0 === TQ ? void 0 : TQ()])
          },
          reload: MQ.j
        });
        return zQ || WQ(), zQ
      }(QQ, WQ, {
        ...arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        stop: yg
      })
    }
    let Eg = !1;

    function Cg() {
      return Eg = !0, async function(QQ, WQ, wQ) {
        const {
          gamePackSource: qQ
        } = await XQ.e(280).then((() => XQ(41265)));
        await xP.packStep(QQ, ((XQ, wQ) => XQ.packForGame(QQ, qQ(WQ), wQ)), wQ)
      }(...arguments)
    }

    function ug(QQ) {
      ! function(QQ, WQ) {
        QQ((QQ => {
          null === QQ || void 0 === QQ || QQ.subscribe((QQ => {
            let {
              pack: XQ,
              gameSource: wQ
            } = QQ;
            WQ(null === wQ || null === XQ ? null : {
              pack: XQ,
              source: "" === wQ ? null : wQ
            })
          }))
        }))
      }(oP, QQ)
    }
    let Lg = !1,
      kg = null,
      fg = !1,
      Sg = !1;

    function tg() {
      var QQ;
      Lg || (Lg = !0, uF("play", KQ), (0, rQ.r)(new QJ), sQ.gameBridge.attach(SQ), Ng().catch((() => {})), (0, AQ.y)((QQ => {
        PW(QQ.setTextHost)
      })), QQ = ng, Ys.add(QQ), function(QQ) {
        for (const WQ of Qs) QQ(WQ);
        Ws.add(QQ)
      }((QQ => {
        eg(og[QQ])
      })))
    }
    const og = {
      booted: TQ.h.INITIALISE_NOA,
      texturesIn: TQ.h.REGISTRATION,
      modelsIn: TQ.h.SETUP_LIFEFORMS
    };

    function eg(QQ) {
      FQ.k.mB("matchmakeAndPlayStepCompleted", {
        step: QQ,
        totalSubSteps: 1
      })
    }

    function ng(QQ) {
      if (!fg) return;
      const {
        gameNameWithVariation: WQ,
        lobbyName: XQ
      } = (0, rQ.e)();
      if (QQ.code === wQ.e.serverUpdating.code) return (new QJ).leaveLive(), void Yg(WQ, XQ);
      FQ.k.mB("unwantedLeftGame", {
        reason: xg(QQ),
        requiresRefresh: QQ.requiresRefresh,
        canReconnect: null !== QQ.reconnect,
        automaticallyReconnect: QQ.reconnecting,
        canPlayAgain: QQ.canPlayAgain,
        gameNameWithVariation: WQ,
        lobbyName: XQ
      }), (new QJ).leaveLive()
    }

    function xg(QQ) {
      return null !== QQ.reasonKey ? {
        translationKey: QQ.reasonKey
      } : "gameOrPluginKick" === QQ.name ? QQ.reason : `You have disconnected from the server.\n${QQ.reason}`
    }

    function Yg(QQ, WQ) {
      var wQ;
      wQ = (0, PQ.D)(QQ, WQ), Promise.resolve().then((() => XQ(1567))).then((QQ => {
        let {
          navigatePreserveSearch: WQ
        } = QQ;
        WQ(wQ)
      })).catch((QQ => {
        console.warn("[bloxd-wasm-client] the page's router didn't navigate: loading the page instead", QQ), (0, MQ.e)(wQ)
      }))
    }

    function Ng() {
      return kg ??= Promise.all([XQ.e(75), XQ.e(78), XQ.e(77), XQ.e(76), XQ.e(93), XQ.e(90), XQ.e(277), XQ.e(193), XQ.e(232), XQ.e(256), XQ.e(279), XQ.e(49)]).then((() => XQ(41206))).then((QQ => {
        try {
          QQ.attachPlayGameSources()
        } catch (WQ) {
          throw console.error("[bloxd-wasm-client] the play sources did not attach", WQ),
            function(QQ) {
              lz.then((WQ => {
                null === WQ || WQ.isStopped || iF ? console.warn(`${nT} the play sources threw as they attached, after the client stopped`, QQ) : Vg({
                  site: ZT,
                  error: QQ,
                  header: null
                }, dz)
              }))
            }(WQ), WQ
        }
      }), (QQ => {
        throw kg = null, new AQ.c(QQ)
      })), kg
    }
    async function Zg(QQ, WQ) {
      tg(), Eg = !0, fg = !0;
      let XQ = {
          place: QQ.place,
          matchedAt: QQ.matchedAt
        },
        zQ = QQ.place.gameNameWithVariation;
      const sQ = (0, JQ.e)();
      let FQ = null;
      const PQ = await SF({
        matchmake: async () => {
          let WQ = XQ;
          if (XQ = null, null === WQ) {
            const XQ = await QQ.rematch();
            if (XQ.isError()) throw FQ = XQ.asError().forward(), new Error(XQ.asError().message);
            WQ = {
              place: XQ.getValue(),
              matchedAt: performance.now()
            }
          }
          zQ = WQ.place.gameNameWithVariation;
          return {
            target: await (0, nQ.d)(QQ.userContext, WQ.place, eP(), sQ),
            matchedAt: WQ.matchedAt,
            freshMs: nQ.b
          }
        },
        pageReady: Ng,
        onFailure: (QQ, WQ) => {
          null === FQ && function(QQ, WQ) {
            (0, AX.reportPageJoinFailure)(QQ, dz, WQ)
          }(QQ, {
            sinceJoinStartMs: WQ,
            game: zQ
          })
        },
        rejoin: () => () => {},
        invalidateTrafficCode: () => QQ.userContext.invalidateTrafficCode(),
        signal: WQ
      });
      switch (PQ.kind) {
        case "joined":
          if (sQ) {
            setTimeout((() => {
              bQ.ready()
            }), 0);
            const {
              game: QQ
            } = PQ;
            (0, JQ.n)((() => {
              QQ.endJoinAd() && ((0, jQ.k)(), bQ.adEnded())
            }))
          }
          return Sg || (Sg = !0, (0, dQ.c)()), fg ? (eg(TQ.h.CONNECT_TO_GAME_SERVER), eg(TQ.h.SHADER_PACK), function() {
            var QQ, WQ;
            return null !== (QQ = null === (WQ = Mz) || void 0 === WQ ? void 0 : WQ.runsInJoinedGame()) && void 0 !== QQ && QQ
          }() && (0, vQ.h)(QQ.userContext, zQ).catch((QQ => {
            console.error("Failed to report the shader pack session", QQ)
          })), function() {
            const QQ = function() {
              var QQ, WQ;
              return null !== (QQ = null === (WQ = Mz) || void 0 === WQ ? void 0 : WQ.couldntRunInJoinedGame()) && void 0 !== QQ ? QQ : null
            }();
            null !== QQ && (0, vQ.d)(QQ)
          }(), qQ.e.value(void 0)) : Mg("The server ended the game as it joined");
        case "failed":
          if (!PQ.reloading) {
            if (null !== FQ) return FQ;
            if ((PQ.error instanceof oQ.q || PQ.error instanceof oQ.d) && PQ.error.code === wQ.e.serverUpdating.code) {
              if (WQ.aborted) return Mg("Left the game while it loaded");
              const {
                gameNameWithVariation: QQ,
                lobbyName: XQ
              } = (0, rQ.e)();
              return Yg(QQ, XQ), Mg("The server is updating")
            }
            return PQ.error instanceof mQ.c ? qQ.e.errorWithCode(PQ.error.messageKey, TQ.h.SHADER_PACK, {
              severity: "medium"
            }) : qQ.e.errorWithCode(function(QQ) {
              if (QQ instanceof oQ.B || QQ instanceof hQ.f) return QQ.message;
              if (Og(QQ)) return (0, tQ.o)(QQ.code, QQ.serverText);
              return tQ.i
            }(PQ.error), TQ.h.CONNECT_TO_GAME_SERVER, {
              error: Kg(PQ.error) ? PQ.error : void 0,
              severity: mg(PQ.error),
              gameServerUnreachable: (0, eQ.b)(PQ.error),
              joinFailure: (0, eQ.g)(PQ.error),
              rematch: (0, aQ.e)(PQ.error),
              gameRefused: (0, lQ.e)(PQ.error)
            })
          }
          return Mg("Reloading into the new build");
        case "stopped":
          return Mg("The game client stopped, and shows why");
        case "fX":
          return Mg("Left the game while it loaded")
      }
    }

    function Og(QQ) {
      return QQ instanceof oQ.q || QQ instanceof oQ.d && "attach" !== QQ.stage
    }

    function Kg(QQ) {
      return !(QQ instanceof oQ.B) && !Og(QQ) && void 0 === (0, eQ.b)(QQ)
    }

    function mg(QQ) {
      return Og(QQ) ? QQ instanceof oQ.d && (0, tQ.m)(QQ.code).requiresRefresh ? "medium" : "low" : Kg(QQ) || QQ instanceof oQ.B ? "medium" : "low"
    }

    function Mg(QQ) {
      return qQ.e.errorWithCode(QQ, TQ.h.CONNECT_TO_GAME_SERVER, {
        severity: "low",
        fX: !0
      })
    }
    class QJ {
      leave(QQ) {
        if ((0, iQ.c)()) {
          var WQ, XQ;
          if ((0, zQ.d)()) return;
          (0, IQ.d)(!0 === (null === (WQ = (0, iQ.f)()) || void 0 === WQ || null === (XQ = WQ.currentViewer) || void 0 === XQ ? void 0 : XQ.unsavedChanges), QQ)
        } else this.leaveLive()
      }
      leaveLive() {
        var QQ;
        Eg && (null === (QQ = eP()) || void 0 === QQ || QQ.endGamePack());
        if (!fg) return;
        fg = !1, (0, HQ.h)();
        try {
          var WQ;
          null === (WQ = (0, AQ.u)()) || void 0 === WQ || WQ.clearWasmCameraScreen()
        } catch (wQ) {
          console.error("[bloxd-wasm-client] the camera screen didn't clear", wQ)
        }
        const {
          gameNameWithVariation: XQ
        } = (0, rQ.e)();
        try {
          KF()
        } finally {
          (0, rQ.t)({
            websocketUrl: null
          }), FQ.k.mB("leaveGame", {
            gameNameWithVariation: XQ
          }), (0, gQ.K)()
        }
      }
      isReplay() {
        return (0, iQ.c)()
      }
    }
  },
  41143: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => qQ,
      i: () => wQ,
      l: () => sQ,
      o: () => zQ
    });
    const wQ = 12e4,
      qQ = 3e4,
      TQ = {
        hidden: () => "undefined" !== typeof document && document.hidden,
        listen: QQ => "undefined" === typeof document ? () => {} : (document.addEventListener("visibilitychange", QQ), () => {
          document.removeEventListener("visibilitychange", QQ)
        })
      };

    function zQ(QQ) {
      return `it sent no start within ${Math.round(QQ)} ms`
    }
    class sQ {
      constructor(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now(),
          wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : TQ;
        this.timeoutMs = QQ, this.onTimeout = WQ, this.now = XQ, this.visibility = wQ, this.timer = null, this.counted = 0, this.step = null, this.unlisten = void 0, this.unlisten = wQ.listen((() => {
          this.onVisibility()
        })), wQ.hidden() || this.next()
      }
      cancel() {
        this.pause(), this.unlisten()
      }
      onVisibility() {
        this.visibility.hidden() ? (this.counted += this.credit(), this.pause()) : null === this.timer && this.next()
      }
      credit() {
        const QQ = this.step;
        return null === QQ ? 0 : Math.min(this.now() - QQ.at, QQ.ms)
      }
      pause() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null), this.step = null
      }
      next() {
        const QQ = this.timeoutMs - this.counted;
        if (QQ <= 0) return void this.arm(1e3, (() => {
          this.cancel(), this.onTimeout(this.counted)
        }));
        const WQ = Math.min(QQ, 5e3);
        this.step = {
          at: this.now(),
          ms: WQ
        }, this.arm(WQ, (() => {
          this.counted += this.credit(), this.step = null, this.next()
        }))
      }
      arm(QQ, WQ) {
        this.timer = setTimeout((() => {
          this.timer = null, WQ()
        }), QQ)
      }
    }
  },
  39914: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => sQ
    });
    var wQ = XQ(402),
      qQ = XQ(1049);
    const TQ = new Set(["bingo", "buildAFactory2", "classic", "testGym"]),
      zQ = new Set(["creativeFlat", "skyGrid"]);

    function sQ(QQ) {
      const WQ = (0, wQ.Mb)(QQ);
      return "classic" !== WQ ? TQ.has(WQ) : !(0, qQ.k)(QQ) && !zQ.has((0, wQ.Fb)(QQ))
    }
  },
  38018: (QQ, WQ, XQ) => {
    function wQ(QQ) {
      return "string" !== typeof QQ || 2 !== QQ.length && ":" !== QQ[2] ? null : QQ[0] + QQ[1]
    }
    XQ.d(WQ, {
      c: () => yQ,
      g: () => bQ,
      h: () => UQ,
      i: () => vQ,
      m: () => sQ,
      n: () => zQ,
      p: () => TQ,
      q: () => FQ,
      r: () => VQ,
      s: () => BQ
    });
    const qQ = ["op:ytInitialPlayerResponse.adPlacements", "op:ytInitialPlayerResponse.playerAds", "op:ytInitialPlayerResponse.adSlots", "op:playerResponse.adPlacements", "op:playerResponse.playerAds", "op:playerResponse.adSlots"];

    function TQ(QQ) {
      if (function(QQ) {
          for (let WQ = 0; WQ < qQ.length; WQ++)
            if (QQ === qQ[WQ]) return !0;
          return !1
        }(QQ)) return !1;
      const WQ = wQ(QQ);
      return "op" === WQ || "ep" === WQ || "wi" === WQ || "pp" === WQ || "fp:call" === QQ || "fp:t" === QQ
    }

    function zQ(QQ) {
      return "fp" === wQ(QQ) && !TQ(QQ)
    }

    function sQ(QQ) {
      if ("string" !== typeof QQ) return !1;
      return "o" === QQ[0] && "p" === QQ[1] && (2 === QQ.length || ":" === QQ[2]) || "fp:call" === QQ || "2" === QQ || "t" === QQ || "a" === QQ
    }

    function FQ(QQ, WQ) {
      return `~${function(QQ){return QQ.length<2?QQ:":"===QQ[1]?QQ[0]:QQ[0]+QQ[1]}(WQ)}~${QQ}`
    }
    const PQ = 200;

    function gQ(QQ) {
      let WQ = QQ.length - 1;
      for (let XQ = 0; XQ < 2; XQ++) {
        const XQ = WQ;
        for (; WQ >= 0 && QQ[WQ] >= "0" && QQ[WQ] <= "9";) WQ--;
        if (WQ < 0 || WQ === XQ || ":" !== QQ[WQ]) return -1;
        WQ--
      }
      return WQ + 1
    }

    function JQ(QQ) {
      return "unknown" === QQ || gQ(QQ) >= 0
    }

    function rQ(QQ, WQ) {
      return QQ[WQ] >= "\ud800" && QQ[WQ] <= "\udbff" && WQ + 1 < QQ.length && QQ[WQ + 1] >= "\udc00" && QQ[WQ + 1] <= "\udfff" ? 2 : 1
    }

    function IQ(QQ, WQ, XQ) {
      return 2 === XQ ? 4 : QQ[WQ] <= "\x7f" ? 1 : QQ[WQ] <= "\u07ff" ? 2 : 3
    }

    function jQ(QQ, WQ, XQ) {
      let wQ = 0;
      for (; wQ < WQ;) {
        const WQ = rQ(QQ, wQ),
          qQ = IQ(QQ, wQ, WQ);
        if (qQ > XQ) break;
        XQ -= qQ, wQ += WQ
      }
      return wQ
    }

    function BQ(QQ) {
      let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1 / 0;
      if ("string" !== typeof QQ || QQ.length > PQ || !JQ(QQ)) return "t";
      let XQ = 2;
      for (let sQ = 0; sQ < QQ.length;) {
        const WQ = rQ(QQ, sQ);
        XQ += IQ(QQ, sQ, WQ), sQ += WQ
      }
      if (XQ <= WQ) return `t ${QQ}`;
      const wQ = gQ(QQ),
        qQ = WQ - 2 - (QQ.length - wQ);
      if (qQ < 0) return "t";
      const TQ = jQ(QQ, wQ, qQ);
      let zQ = "t ";
      for (let sQ = 0; sQ < TQ; sQ++) zQ += QQ[sQ];
      for (let sQ = wQ; sQ < QQ.length; sQ++) zQ += QQ[sQ];
      return zQ
    }
    const yQ = 62;

    function VQ(QQ) {
      let WQ = "so:";
      const XQ = jQ(QQ, QQ.length, yQ - WQ.length);
      for (let wQ = 0; wQ < XQ; wQ++) WQ += QQ[wQ];
      return WQ
    }
    const DQ = "BABYLON ",
      pQ = "DECODE ",
      GQ = "BABYLON@ ";

    function UQ(QQ) {
      return VQ(DQ + QQ)
    }

    function bQ(QQ, WQ) {
      return VQ(GQ + QQ + " " + WQ)
    }

    function vQ(QQ) {
      return VQ(pQ + QQ)
    }
  },
  41046: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => wQ
    });
    const wQ = {
      roomsPerServerMax: 30,
      timeForPlayerToConnect: 3e4,
      seatReservationSeconds: 15,
      healthWindowMs: 3e5,
      minAttemptsForRoomHealthWindow: 6,
      minAttemptsForServerHealthWindow: 20,
      minAttemptsForEmptyServerHealthWindow: 6,
      playerTimeoutThreshold: .8,
      gameServerMatchmakingHeartbeatInterval: 2e3,
      gameServerMatchmakingAnalyticsHeartbeatInterval: 1e4,
      SetRoomsHeartbeatBackoffMultiplier: 1.5,
      SetRoomsHeartbeatMaxInterval: 1e4,
      AnalyticsHeartbeatBackoffMultiplier: 1.2,
      AnalyticsHeartbeatMaxInterval: 3e4,
      defaultSubtractionFromMaxPlayersForSoftCap: 2,
      saveExpectedPlayersEvery: 1e4,
      unregisterFrozenGameServersIntervalMs: 1e3,
      gameServerFrozenThresholdMs: 3e4,
      matchmakingSkipsDrainingLobbies: !0,
      minNotDrainingShareToSkipDrainingLobbies: .5,
      drainingSessionLobbyFillMs: 3e5
    }
  },
  38262: QQ => {
    QQ.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v+LFy8yvH//noGXl/ccuq8A/vQKd00yOdIAAAAASUVORK5CYII="
  },
  38247: QQ => {
    QQ.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAALUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMnBzczN8/PjxHLLPAORwCnfkvOdNAAAAAElFTkSuQmCC"
  },
  38264: QQ => {
    QQ.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMvz58+ccuq8A8vQKd2AxC9MAAAAASUVORK5CYII="
  },
  38238: QQ => {
    QQ.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAANUlEQVQYGWM8CwQMeAATHjmw1JBQAHLp/wMHDvy/ePHi/4CAgP937tz5Ly6u+5/P3uw/KAgAgjwWhHm22JoAAAAASUVORK5CYII="
  },
  38255: QQ => {
    QQ.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMvz58+ccuq8A8vQKd2AxC9MAAAAASUVORK5CYII="
  },
  39002: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => TQ
    });
    var wQ = XQ(3107);
    const qQ = ["none", "idle", "now"];

    function TQ() {
      const QQ = () => (0, wQ.B)();
      return {
        memoryBytes: () => (0, wQ.w)().buffer.byteLength,
        reserveUpFront: WQ => QQ().wJ(WQ),
        reserveAhead: WQ => QQ().XJ(WQ),
        setCeiling: WQ => {
          QQ().qJ(WQ)
        },
        lowWater: () => qQ[QQ().WJ()] ?? "none",
        stats: () => function(QQ) {
          const WQ = new Uint32Array((0, wQ.w)().buffer, QQ, 17),
            XQ = QQ => WQ[QQ] ?? 0,
            qQ = QQ => ({
              upFront: XQ(QQ),
              ahead: XQ(QQ + 1),
              onDemandInFrame: XQ(QQ + 2),
              onDemand: XQ(QQ + 3)
            });
          return {
            memoryBytes: XQ(0),
            initialBytes: XQ(1),
            liveBytes: XQ(2),
            peakLiveBytes: XQ(3),
            headroomBytes: XQ(4),
            unusedBytes: XQ(5),
            ceilingBytes: XQ(6),
            reservesRefused: XQ(7),
            grows: qQ(8),
            grownBytes: qQ(12),
            allocationsRefused: XQ(16)
          }
        }(QQ().TJ()),
        takeBallast: () => QQ().zJ(),
        takePressure: () => QQ().sJ()
      }
    }
  },
  5396: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => sQ,
      f: () => zQ,
      i: () => wQ,
      l: () => BQ,
      m: () => JQ,
      n: () => qQ,
      r: () => TQ,
      t: () => PQ,
      w: () => gQ,
      z: () => rQ
    });
    const wQ = 5;

    function qQ(QQ) {
      return QQ === wQ
    }

    function TQ(QQ) {
      return [...QQ.features]
    }
    const zQ = 262144,
      sQ = 256,
      FQ = 256;

    function PQ(QQ) {
      if ("object" !== typeof QQ || null === QQ || Array.isArray(QQ)) return "The pack has no files.";
      const WQ = [];
      for (const [XQ, wQ] of Object.entries(QQ)) {
        if ("string" !== typeof wQ) return `${XQ} isn't text.`;
        WQ.push({
          path: XQ,
          source: wQ
        })
      }
      return WQ.sort(((QQ, WQ) => JQ(QQ.path, WQ.path))),
        function(QQ) {
          if (0 === QQ.length) return "The pack has no .wgsl files.";
          if (QQ.length > sQ) return `The pack has more than ${sQ} .wgsl files.`;
          const WQ = new Set;
          for (const {
              path: XQ
            }
            of QQ) {
            const QQ = IQ(XQ);
            if (null !== QQ) return QQ;
            if (WQ.has(XQ)) return `The pack has two files at ${XQ}.`;
            WQ.add(XQ)
          }
          return rQ(QQ) > zQ ? `The pack's .wgsl files are over ${zQ/1024} KB in total.` : null
        }(WQ) ?? WQ
    }

    function gQ(QQ) {
      const WQ = {};
      for (const XQ of QQ) WQ[XQ.path] = XQ.source;
      return WQ
    }

    function JQ(QQ, WQ) {
      return QQ < WQ ? -1 : QQ > WQ ? 1 : 0
    }

    function rQ(QQ) {
      const WQ = new TextEncoder;
      let XQ = 0;
      for (const {
          source: wQ
        }
        of QQ) XQ += WQ.encode(wQ).byteLength;
      return XQ
    }

    function IQ(QQ) {
      if (!QQ.toLowerCase().endsWith(".wgsl")) return `${QQ} isn't a .wgsl file.`;
      if (QQ.length > FQ) return `A file path is over ${FQ} characters.`;
      if (QQ.includes("\\") || /[\u0000-\u001f]/.test(QQ)) return `${QQ} isn't a valid file path.`;
      return QQ.split("/").some((QQ => "" === QQ || "." === QQ || ".." === QQ)) ? `${QQ} isn't a valid file path.` : null
    }
    const jQ = /^(.*)\[rot\[([1-4])$/;

    function BQ(QQ, WQ) {
      let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const wQ = new Map;
      WQ.forEach(((QQ, WQ) => {
        let {
          numAnimStates: XQ,
          animStartIdx: qQ
        } = QQ;
        for (let TQ = 1; TQ < XQ; TQ++) wQ.set(qQ + TQ - 1, WQ)
      }));
      const qQ = Object.entries(QQ),
        TQ = new Map;
      for (const [BQ, yQ] of qQ) {
        const QQ = jQ.exec(BQ);
        "1" === QQ?.[2] && TQ.set(QQ[1], yQ + 1)
      }
      const zQ = QQ => {
          const WQ = jQ.exec(QQ);
          return WQ && TQ.has(WQ[1]) ? {
            root: WQ[1],
            rotation: Number(WQ[2]) - 1
          } : null
        },
        sQ = new Set(qQ.map((QQ => {
          let [WQ] = QQ;
          return zQ(WQ)?.root ?? WQ
        }))),
        FQ = (QQ, XQ) => {
          const wQ = QQ.replace(/_?0$/, "");
          return (WQ[XQ]?.numAnimStates ?? 0) > 1 && !sQ.has(wQ) ? wQ : QQ
        },
        PQ = new Map;
      for (const [jQ, BQ] of qQ) PQ.set(BQ, FQ(zQ(jQ)?.root ?? jQ, BQ));
      const gQ = qQ.reduce(((QQ, WQ) => {
          let [, XQ] = WQ;
          return Math.max(QQ, XQ + 1)
        }), 0),
        JQ = Array.from({
          length: gQ
        }, ((QQ, WQ) => ({
          id: WQ + 1,
          rotation: 0
        }))),
        rQ = new Map,
        IQ = new Map;
      for (const [jQ, BQ] of qQ) {
        const QQ = zQ(jQ),
          WQ = wQ.get(BQ);
        if (void 0 !== WQ) {
          const XQ = PQ.get(WQ);
          IQ.set(jQ, {
            name: jQ,
            texture: XQ,
            kind: "frame"
          }), QQ && !IQ.has(QQ.root) && IQ.set(QQ.root, {
            name: QQ.root,
            texture: XQ,
            kind: "frame"
          });
          continue
        }
        const XQ = PQ.get(BQ),
          qQ = QQ?.root ?? jQ;
        if (XQ !== qQ && IQ.set(qQ, {
            name: qQ,
            texture: XQ,
            kind: "frame"
          }), QQ) {
          const WQ = TQ.get(QQ.root);
          JQ[BQ] = {
            id: WQ,
            rotation: QQ.rotation
          }, rQ.set(XQ, WQ), IQ.set(jQ, {
            name: jQ,
            texture: XQ,
            kind: "rotation"
          })
        } else rQ.set(XQ, BQ + 1)
      }
      for (const jQ of rQ.keys()) IQ.delete(jQ);
      for (const [jQ, BQ] of XQ) {
        const QQ = rQ.get(BQ);
        void 0 === QQ || rQ.has(jQ) || (rQ.set(jQ, QQ), IQ.delete(jQ))
      }
      return {
        named: [...rQ].sort(((QQ, WQ) => {
          let [XQ] = QQ, [wQ] = WQ;
          return XQ < wQ ? -1 : XQ > wQ ? 1 : 0
        })).map((QQ => {
          let [WQ, XQ] = QQ;
          return {
            name: WQ,
            id: XQ
          }
        })),
        aliases: [...IQ.values()],
        layers: JQ
      }
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);