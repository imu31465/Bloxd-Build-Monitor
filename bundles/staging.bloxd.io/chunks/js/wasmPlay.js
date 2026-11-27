export const id = 76;
export const ids = [76, 138, 139, 159];
export const modules = {
  41333: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => Zr,
      f: () => Wr
    });
    const Zr = "The world isn't loaded, so no blocks can be seen.",
      Wr = "The world isn't loaded, so nothing in it can be seen."
  },
  5489: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => pr
    });
    var Zr = Qr(26),
      Wr = Qr(34),
      ar = Qr(1353),
      jr = Qr(3909);
    const Ir = 3e4,
      fr = 1e3;

    function Er() {
      return "visible" === document.visibilityState && "inGame" === Zr.c.get("gameState") && (0, ar.v)()
    }

    function pr(rr, Sr) {
      (0, jr.t)() || function(rr, Sr, Qr) {
        let Zr = 0;
        const Wr = setInterval((() => {
          Sr() && (Zr += fr, Zr >= rr && (clearInterval(Wr), Qr()))
        }), fr)
      }(Ir, Er, (() => {
        Sr().then((() => {
          rr(`saved for the player after ${Ir/1e3} s of play`), (0, jr.I)(), Wr.i.Jp("chat", {
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
  35313: (rr, Sr, Qr) => {
    function Zr(rr, Sr) {
      return 0 === rr.length ? 0 : rr[Math.min(rr.length - 1, Math.floor(Sr * rr.length))]
    }

    function Wr(rr) {
      return rr.toFixed(1)
    }
    Qr.d(Sr, {
      d: () => Wr,
      h: () => Zr
    })
  },
  39447: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => Er,
      f: () => pr,
      h: () => er,
      j: () => nr,
      k: () => Yr
    });
    var Zr = Qr(5489),
      Wr = Qr(35313),
      ar = Qr(3909);
    const jr = 20,
      Ir = ["totalMs", "slotMs", "workerMs", "applyMs", "ahead", "inFlight", "sx", "jobMs"];

    function fr(rr) {
      return [...rr].sort(((rr, Sr) => rr - Sr))
    }
    const Er = [];

    function pr(rr, Sr, Qr) {
      return `${rr},${Sr},${Qr}`
    }
    class xr {
      constructor() {
        this.pending = new Map, this.jobs = new Map, this.edits = [], this.nextEdit = 0, this.reported = 0, this.windowStart = performance.now(), this.frames = 0, this.lastFrameAt = 0, this.maxFrameMs = 0, this.jobsSent = 0, this.maxAhead = 0, this.maxCapacity = 0, this.roundTrips = [], this.windowEdits = [], this.outliers = 0, this.gaveUp = 0
      }
      edit(rr, Sr) {
        var Qr;
        const Zr = null !== (Qr = this.pending.get(rr)) && void 0 !== Qr ? Qr : [];
        Zr.push({
          editAt: Sr,
          meshJobId: 0
        }), this.pending.set(rr, Zr)
      }
      frame(rr) {
        this.lastFrameAt > 0 && (this.maxFrameMs = Math.max(this.maxFrameMs, rr - this.lastFrameAt)), this.lastFrameAt = rr, this.frames++, rr - this.windowStart >= 1e3 && this.summarise(rr)
      }
      sent(rr, Sr, Qr, Zr, Wr, ar, jr) {
        this.jobs.set(Sr, {
          sentAt: jr,
          receivedAt: 0,
          ahead: Qr,
          inFlight: Zr,
          sx: Wr,
          jobMs: 0
        }), this.jobsSent++, this.maxAhead = Math.max(this.maxAhead, Qr), this.maxCapacity = Math.max(this.maxCapacity, Wr);
        for (const fr of null !== (Ir = this.pending.get(rr)) && void 0 !== Ir ? Ir : []) {
          var Ir;
          ar.includes(fr.meshJobId) || (fr.meshJobId = Sr)
        }
      }
      received(rr, Sr, Qr) {
        const Zr = this.jobs.get(rr);
        void 0 !== Zr && (this.roundTrips.push(Qr - Zr.sentAt), Zr.receivedAt = Qr, Zr.jobMs = Sr)
      }
      failed(rr) {
        this.jobs.delete(rr)
      }
      reassign(rr, Sr, Qr) {
        this.jobs.delete(Sr);
        for (const Wr of null !== (Zr = this.pending.get(rr)) && void 0 !== Zr ? Zr : []) {
          var Zr;
          Wr.meshJobId === Sr && (Wr.meshJobId = Qr)
        }
      }
      applied(rr, Sr, Qr) {
        const Zr = this.jobs.get(Sr);
        this.jobs.delete(Sr), void 0 !== Zr && this.show(rr, Zr, Qr, (rr => rr.meshJobId === Sr))
      }
      emptied(rr, Sr) {
        const Qr = {
          sentAt: Sr,
          receivedAt: Sr,
          ahead: 0,
          inFlight: 0,
          sx: 0,
          jobMs: 0
        };
        this.show(rr, Qr, Sr, (() => !0))
      }
      show(rr, Sr, Qr, Zr) {
        const Wr = this.pending.get(rr);
        if (!Wr) return;
        const ar = Wr.filter((Wr => !Zr(Wr) || (this.record(rr, Wr.editAt, Sr, Qr), !1)));
        ar.length > 0 ? this.pending.set(rr, ar) : this.pending.delete(rr)
      }
      jx(rr) {
        this.reported += rr, this === Nr && this.reported >= jr && null !== Ur && (Ur(), Ur = null)
      }
      record(rr, Sr, Qr, Zr) {
        const Wr = {
          totalMs: Zr - Sr,
          slotMs: Qr.sentAt - Sr,
          workerMs: Qr.receivedAt - Qr.sentAt,
          applyMs: Zr - Qr.receivedAt,
          ahead: Qr.ahead,
          inFlight: Qr.inFlight,
          sx: Qr.sx,
          jobMs: Qr.jobMs
        };
        if (this.edits[this.nextEdit] = Wr, this.nextEdit = (this.nextEdit + 1) % 500, this.windowEdits.push(Wr.totalMs), this.jx(1), Wr.totalMs < 100 || ++this.outliers > 5) return;
        const jr = rr => Math.round(rr);
        (0, ar.l)("remesh", `slow edit (${rr}) shown in ${jr(Wr.totalMs)} ms: slot ${jr(Wr.slotMs)}, worker ${jr(Wr.workerMs)} (${Wr.ahead} ahead, ${Wr.inFlight}/${Wr.sx} in flight; job ${jr(Wr.jobMs)}), apply ${jr(Wr.applyMs)}`)
      }
      summarise(rr) {
        const Sr = (rr - this.windowStart) / 1e3;
        for (const [Qr, Zr] of this.pending) {
          const Sr = Zr.filter((Sr => rr - Sr.editAt <= 1e4));
          this.gaveUp += Zr.length - Sr.length, this.jx(Zr.length - Sr.length), Sr.length > 0 ? this.pending.set(Qr, Sr) : this.pending.delete(Qr)
        }
        for (const [Qr, Zr] of this.jobs) rr - Zr.sentAt > (Zr.receivedAt > 0 ? 1e4 : 6e4) && this.jobs.delete(Qr);
        if (this.jobsSent > 0 || this.roundTrips.length > 0 || this.windowEdits.length > 0 || this.gaveUp > 0) {
          const rr = fr(this.roundTrips),
            Qr = fr(this.windowEdits),
            Zr = Math.max(0, this.outliers - 5);
          (0, ar.l)("remesh", `${Math.round(this.frames/Sr)} fps (longest ${Math.round(this.maxFrameMs)} ms) | ${this.jobsSent} jobs sent, up to ${this.maxAhead} ahead on a worker, capacity ${this.maxCapacity} | round trip p50 ${Math.round((0,Wr.h)(rr,.5))} max ${Math.round((0,Wr.h)(rr,1))} ms | ${Qr.length} edits shown, p50 ${Math.round((0,Wr.h)(Qr,.5))} max ${Math.round((0,Wr.h)(Qr,1))} ms${Zr>0?`, ${Zr} more slow`:""}${this.gaveUp>0?`, ${this.gaveUp} never shown`:""}`)
        }
        this.windowStart = rr, this.frames = 0, this.maxFrameMs = 0, this.jobsSent = 0, this.maxAhead = 0, this.maxCapacity = 0, this.roundTrips = [], this.windowEdits = [], this.outliers = 0, this.gaveUp = 0
      }
      stats() {
        const rr = Ir.map((rr => {
          const Sr = fr(this.edits.map((Sr => Sr[rr])));
          return `${rr}: p50 ${Math.round((0,Wr.h)(Sr,.5))} p90 ${Math.round((0,Wr.h)(Sr,.9))} max ${Math.round((0,Wr.h)(Sr,1))}`
        }));
        return [`${this.edits.length} edits`, ...rr].join("\n")
      }
      dump() {
        const rr = this.edits.map((rr => Ir.map((Sr => Math.round(10 * rr[Sr]) / 10)).join(",")));
        return [this.stats(), Ir.join(","), ...rr].join("\n")
      }
    }
    class mr {
      constructor(rr, Sr) {
        this.log = rr, this.gm = Sr
      }
      edit(rr, Sr, Qr) {
        const [Zr, Wr, ar] = this.gm.qx.MZr(rr, Sr, Qr), jr = this.gm.qx.vt.Ot(Zr, Wr, ar);
        jr && jr.Bt && this.log.edit(pr(Zr, Wr, ar), performance.now())
      }
      sent(rr, Sr, Qr, Zr, Wr) {
        this.log.sent(pr(rr.i, rr.j, rr.k), Sr, Qr, Zr, Wr, Er, performance.now())
      }
      received(rr) {
        this.log.received(rr.meshJobId, rr.jobMs, performance.now())
      }
      failed(rr) {
        this.log.failed(rr)
      }
      applied(rr, Sr) {
        this.log.applied(pr(rr.i, rr.j, rr.k), Sr, performance.now())
      }
    }
    let Nr = null,
      Ur = null,
      tr = !1,
      hr = null;

    function zr() {
      return new Promise((rr => {
        null !== Nr && Nr.reported >= jr ? rr() : Ur = rr
      }))
    }

    function Yr() {
      const rr = new xr;
      return Nr = rr, (0, ar.i)("remesh", (() => rr.dump())), (0, ar.e)("remeshStats", (() => {
        console.log(rr.stats())
      })), tr || (tr = !0, (0, Zr.c)((rr => {
        (0, ar.l)("remesh", rr)
      }), zr)), rr
    }

    function nr(rr) {
      const Sr = Yr();
      hr = new mr(Sr, rr), rr.qB.meshProbe = hr, rr.on("beforeRender", (() => {
        Sr.frame(performance.now())
      }))
    }

    function er(rr, Sr, Qr) {
      var Zr;
      null === (Zr = hr) || void 0 === Zr || Zr.edit(rr, Sr, Qr)
    }
  },
  35337: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => Zr
    });
    const Zr = new Set(["chunkBorders"])
  },
  38278: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => Wr,
      d: () => Zr
    });
    const Zr = 3,
      Wr = {
        recording: !1,
        clipping: !1,
        hasClipBuffer: !1,
        seconds: 0
      }
  },
  35509: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Ir,
      e: () => Wr,
      i: () => xr
    });
    var Zr = Qr(1686);

    function Wr(rr) {
      var Sr;
      return {
        ...Ir.store,
        yaw: Ir.store.yaw + (null !== (Sr = Zr.e[rr].previewYaw) && void 0 !== Sr ? Sr : 0)
      }
    }
    const ar = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      jr = {
        ...ar,
        radius: 33,
        target: [0, 3.9, 0]
      },
      Ir = {
        player: ar,
        store: jr,
        showcase: {
          ...jr,
          target: [0, 1.9, 0]
        }
      };

    function fr(rr, Sr) {
      rr instanceof Promise ? rr.then(Sr).catch((rr => {
        console.error("Couldn't open the preview", rr)
      })) : Sr(rr)
    }
    class Er {
      constructor(rr) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, fr(rr, (rr => {
          this.closed ? rr.close() : (this.opened = rr, null !== this.size && rr.resize(this.size.width, this.size.height), null !== this.view && rr.show(this.view))
        }))
      }
      show(rr) {
        var Sr;
        this.view = rr, null === (Sr = this.opened) || void 0 === Sr || Sr.show(rr)
      }
      resize(rr, Sr) {
        var Qr;
        this.size = {
          width: rr,
          height: Sr
        }, null === (Qr = this.opened) || void 0 === Qr || Qr.resize(rr, Sr)
      }
      close() {
        var rr;
        this.closed = !0, null === (rr = this.opened) || void 0 === rr || rr.close(), this.opened = null
      }
    }
    class pr {
      constructor(rr) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(rr).then((rr => rr.ready)), fr(rr, (rr => {
          this.closed ? rr.close() : (this.opened = rr, null !== this.size && rr.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var rr, Sr;
        return null !== (rr = null === (Sr = this.opened) || void 0 === Sr ? void 0 : Sr.isReady()) && void 0 !== rr && rr
      }
      setCosmetic(rr, Sr) {
        var Qr;
        null === (Qr = this.opened) || void 0 === Qr || Qr.setCosmetic(rr, Sr)
      }
      setNametag(rr) {
        var Sr;
        null === (Sr = this.opened) || void 0 === Sr || Sr.setNametag(rr)
      }
      playEmote(rr) {
        var Sr;
        null === (Sr = this.opened) || void 0 === Sr || Sr.playEmote(rr)
      }
      setOrbit(rr) {
        var Sr;
        null === (Sr = this.opened) || void 0 === Sr || Sr.setOrbit(rr)
      }
      resetCamera() {
        var rr;
        null === (rr = this.opened) || void 0 === rr || rr.resetCamera()
      }
      async untilDrawn(rr) {
        var Sr;
        await this.ready, await (null === (Sr = this.opened) || void 0 === Sr ? void 0 : Sr.untilDrawn(rr))
      }
      resize(rr, Sr) {
        var Qr;
        this.size = {
          width: rr,
          height: Sr
        }, null === (Qr = this.opened) || void 0 === Qr || Qr.resize(rr, Sr)
      }
      close() {
        var rr;
        this.closed = !0, null === (rr = this.opened) || void 0 === rr || rr.close(), this.opened = null
      }
    }
    const xr = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(rr) {
        this.host = rr
      }
      setDefaultHost(rr) {
        this.makeDefault = rr
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(rr) {
        return new Er(this.current().openMob(rr))
      }
      openPet(rr) {
        return new Er(this.current().openPet(rr))
      }
      openMobLineup(rr) {
        return new Er(this.current().openMobLineup(rr))
      }
      sharesCharacter() {
        return !0 === this.current().sharesCharacter
      }
      openCharacter(rr, Sr) {
        return new pr(this.current().openCharacter(rr, Sr))
      }
    }
  },
  6005: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Zr.j,
      e: () => Wr,
      i: () => Zr.r
    });
    var Zr = Qr(6007);
    const Wr = [!1, !0].flatMap((rr => ["terrain", "liquid", "model"].map((Sr => ({
      strict: rr,
      program: Sr
    })))))
  },
  40792: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      ShaderPackPage: () => fr,
      harnessShaderPackMode: () => mr,
      setHarnessUrlShaderPack: () => xr,
      shaderPackPage: () => pr
    });
    var Zr = Qr(109),
      Wr = Qr(43),
      ar = (Qr(4699), Qr(6005), Qr(4690)),
      jr = Qr(7617);
    Qr(7588);
    const Ir = {
      status: "none"
    };
    class fr {
      constructor() {
        this.stored = null, this.compiling = null, this.pagePack = null, this.resolved = null
      }
      preload() {
        if (null === this.stored) {
          if ((0, ar.g)(Zr.featureFlags.settings.canUseShaderPacks)) return this.stored = Promise.resolve(null), Er().then((rr => {
            rr && Wr.j.removeItem(ar.b)
          })), this.stored;
          this.prefetchHint() && this.compiler().catch((() => {})), this.stored = this.readStored()
        }
        return this.stored
      }
      prefetchHint() {
        return (0, ar.d)(Zr.featureFlags.settings.canUseShaderPacks)
      }
      async loadActive() {
        const rr = await this.load();
        return "active" === rr.status ? rr.pack : null
      }
      load() {
        return this.pagePack ??= this.read().catch((rr => (console.error("Failed to load the shader pack", rr), Ir))).then((rr => (this.resolved ??= rr, rr))), this.pagePack
      }
      hasNone() {
        var rr;
        return "none" === (null === (rr = this.resolved) || void 0 === rr ? void 0 : rr.status)
      }
      block(rr) {
        this.resolved = {
          status: "blocked",
          messageKey: rr,
          variants: null
        }, this.pagePack = Promise.resolve(this.resolved)
      }
      compiler() {
        return this.compiling ??= Promise.all([Qr.e(91), Qr.e(157), Qr.e(163)]).then((() => Qr(54275))).then((rr => (rr.prefetchCompiler(), rr))), this.compiling
      }
      async readStored() {
        const rr = await Er();
        return rr && this.compiler().then((rr => rr.reconcileHint())).catch((rr => {
          console.error("Failed to correct the shader pack hint", rr)
        })), rr
      }
      async read() {
        const rr = await this.preload();
        return rr ? (await this.compiler()).compilePagePack(rr) : Ir
      }
    }
    async function Er() {
      if (!(0, ar.k)(Zr.featureFlags.settings.canUseShaderPacks)) return null;
      try {
        const rr = await (0, jr.e)(!0);
        return rr || Wr.j.setItem(ar.b, !1), rr
      } catch (rr) {
        return console.error("Failed to read the stored shader pack", rr), Wr.j.removeItem(ar.b), null
      }
    }
    const pr = new fr;

    function xr(rr, Sr) {}

    function mr() {
      return null
    }
  },
  40837: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => xr,
      c: () => mr
    });
    var Zr = Qr(161),
      Wr = Qr(194),
      ar = Qr(1621),
      jr = Qr(1912),
      Ir = Qr(1629),
      fr = Qr(38001),
      Er = Qr(727),
      pr = Qr(40792);

    function xr(rr) {
      (0, jr.reportClientError)("matchmake_failed", rr, Zr.i[Zr.i.SHADER_PACK])
    }
    async function mr(rr, Sr) {
      var Qr;
      const Zr = null === (Qr = await pr.shaderPackPage.preload()) || void 0 === Qr ? void 0 : Qr.listing,
        jr = (0, fr.d)();
      Zr && null !== jr && await Ir.c.reportShaderPackSession(rr, {
        packId: Zr.packId,
        sourceHash: Zr.sourceHash,
        game: (0, ar.g)(Sr, Wr.K, "other"),
        playSessionId: jr,
        visitSessionId: (0, Er.getVisitSessionId)()
      })
    }
  },
  7617: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Wr,
      e: () => ar
    });
    var Zr = Qr(43);
    const Wr = "shaderPack";
    async function ar() {
      var rr;
      let Sr = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (rr = await Zr.h.getItem(Wr, Sr)) && void 0 !== rr ? rr : null
    }
  },
  7588: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      loadShaderPackTextures: () => jr,
      shaderPackTextures: () => Ir
    });
    var Zr = Qr(6007);
    let Wr = null,
      ar = null;

    function jr() {
      return ar ??= Promise.all([Qr.e(85), Qr.e(126)]).then((() => Qr(42330))).then((rr => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: Sr,
          textureNameToIndex: Qr,
          textureAnimationData: ar
        } = rr;
        return Wr ??= (0, Zr.k)(Qr, ar, Sr), Wr
      })), ar
    }

    function Ir() {
      if (null === Wr) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return Wr
    }
  },
  40605: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => Ir
    });
    var Zr = Qr(34),
      Wr = Qr(1353),
      ar = Qr(2466);
    const jr = "Reconnecting";
    class Ir {
      constructor(rr) {
        this.hooks = rr, this.graceMs = 0, this.sessionBased = !1, this.controller = void 0, this.frozen = !1, this.stopped = !1, this.listening = !1, this.ended = !1, this.retryNow = () => {
          "visible" === document.visibilityState && this.controller.retryNow()
        }, this.onPageHide = rr => {
          rr.persisted || this.leave()
        }, this.controller = new ar.h((Sr => rr.reconnect(Sr)), {
          isSessionLive: () => !this.ended && rr.isLive(),
          onPhaseChanged: rr => {
            this.onPhaseChanged(rr)
          },
          onReconnected: Sr => {
            rr.onReconnected(Sr)
          },
          onGaveUp: Sr => {
            !this.ended && rr.isLive() && rr.onGaveUp(this.sessionBased, Sr)
          }
        })
      }
      onInitialInfo(rr, Sr) {
        this.graceMs = rr, this.sessionBased = Sr
      }
      canHoldSeat() {
        return this.graceMs > 0 && !this.ended
      }
      isResuming() {
        return "connected" !== this.controller.phase
      }
      onConnectionLost(rr) {
        this.ended || this.controller.onConnectionLost(rr, this.graceMs)
      }
      onResuming() {
        this.ended || this.controller.onResuming()
      }
      onResumed() {
        this.controller.stop()
      }
      leave() {
        const rr = this.isResuming() && !this.controller.awaitingResumeOnRoom,
          Sr = this.controller.heldToken;
        this.end(), rr && "" !== Sr && this.hooks.releaseSeat(Sr)
      }
      end() {
        this.ended = !0, this.controller.stop()
      }
      onPhaseChanged(rr) {
        const Sr = (0, ar.v)(rr);
        Sr !== this.stopped && (this.stopped = Sr, this.hooks.freeze(Sr));
        const Qr = "frozen" === rr || "resuming" === rr && this.frozen;
        Qr && !this.frozen ? (0, Wr.t)(jr, {
          overridesPause: !0
        }) : !Qr && this.frozen && (0, Wr.s)(jr), this.frozen = Qr, this.setListening("connected" !== rr), Zr.i.Jp(ar.u, Qr ? "frozen" : rr)
      }
      setListening(rr) {
        rr !== this.listening && (this.listening = rr, rr ? (window.addEventListener("online", this.retryNow), document.addEventListener("visibilitychange", this.retryNow), window.addEventListener("pagehide", this.onPageHide)) : (window.removeEventListener("online", this.retryNow), document.removeEventListener("visibilitychange", this.retryNow), window.removeEventListener("pagehide", this.onPageHide)))
      }
    }
  },
  40608: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => Zr
    });
    class Zr {
      constructor(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.onSilent = rr, this.now = Sr, this.lastHeardAt = void 0, this.resumedAt = void 0, this.lastCheckAt = void 0, this.wasVisible = "visible" === document.visibilityState, this.interval = void 0, this.check = () => {
          const rr = this.now(),
            Sr = rr - this.lastCheckAt <= 2e3;
          this.lastCheckAt = rr;
          const Qr = "visible" === document.visibilityState;
          !Qr || Sr && this.wasVisible || (this.resumedAt = rr), this.wasVisible = Qr, Qr && rr - this.lastHeardAt > 12e3 && rr - this.resumedAt > 2e3 && this.onSilent()
        }, this.lastHeardAt = Sr(), this.resumedAt = this.lastHeardAt, this.lastCheckAt = this.lastHeardAt, this.interval = setInterval(this.check, 1e3), document.addEventListener("visibilitychange", this.check), window.addEventListener("online", this.check)
      }
      heard() {
        this.lastHeardAt = this.now()
      }
      dispose() {
        clearInterval(this.interval), document.removeEventListener("visibilitychange", this.check), window.removeEventListener("online", this.check)
      }
    }
  },
  35399: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => ar
    });
    var Zr = Qr(1371);

    function Wr() {
      var rr, Sr;
      return null !== (rr = null === (Sr = screen.orientation) || void 0 === Sr ? void 0 : Sr.type) && void 0 !== rr ? rr : innerWidth > innerHeight ? "landscape" : "portrait"
    }
    const ar = new class {
      constructor() {
        this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
          document.hidden || (document.removeEventListener("visibilitychange", this.releaseWhenShown), this.release())
        }
      }
      isHeld() {
        return this.holding && Wr() !== this.heldOrientation && (this.holding = !1), this.holding
      }
      hold() {
        this.heldOrientation = Wr(), this.holding = !0, clearTimeout(this.releaseTimer), document.removeEventListener("visibilitychange", this.releaseWhenShown), clearTimeout(this.longHoldTimer), this.longHoldTimer = setTimeout((() => {
          this.holding && (0, Zr.Pt)(new Error("Game view size held for 60 s"))
        }), 6e4)
      }
      release() {
        clearTimeout(this.longHoldTimer), this.releaseTimer = setTimeout((() => {
          if (document.hidden) document.addEventListener("visibilitychange", this.releaseWhenShown);
          else {
            this.holding = !1;
            for (const rr of this.resizers) rr()
          }
        }), 1e3)
      }
      heldSizer(rr) {
        let Sr = !1;
        return () => {
          if (Sr && this.isHeld()) return null;
          const Qr = rr();
          return Sr ||= null !== Qr, Qr
        }
      }
      onRelease(rr) {
        return this.resizers.add(rr), () => {
          this.resizers.delete(rr)
        }
      }
    }
  },
  10088: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => ar,
      e: () => Wr
    });
    let Zr = Promise.resolve();

    function Wr(rr) {
      Zr = rr
    }

    function ar() {
      return Zr
    }
  },
  40824: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Wr
    });
    let Zr = !1;
    async function Wr(rr, Sr) {
      if (!Zr) {
        Zr = !0;
        try {
          const [{
            reloadBloxd: Zr
          }, {
            NotificationProvider: Wr
          }] = await Promise.all([Promise.resolve().then((() => Qr(1885))), Promise.resolve().then((() => Qr(1475)))]);
          if (!rr || !0 === await Wr.showPromptPopup({
              title: "Unsaved changes",
              subtitle: "Exit and lose your unsaved changes?",
              confirmText: "Exit",
              destructive: !0,
              cancelText: "Cancel",
              unlockPointerKey: "replayExitUnsavedChanges"
            }).getResult()) return void Zr(Sr)
        } catch (Wr) {
          console.error("Leaving the replay failed", Wr)
        }
        Zr = !1
      }
    }
  },
  40625: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Er,
      h: () => pr
    });
    var Zr = Qr(1846),
      Wr = Qr(208),
      ar = Qr(1815),
      jr = Qr(1940),
      Ir = Qr(1262),
      fr = Qr(1187);
    async function Er(rr, Sr) {
      return function(rr) {
        return "object" === typeof rr && null !== rr && rr.code === Wr.e.VpnIp.code
      }(Sr) && function(rr) {
        return ar.b.supports("appCheck") && rr.isLoggedIn() && !rr.hasTriedAppAttestation()
      }(rr) && await async function(rr) {
        try {
          const {
            token: Sr
          } = await (0, jr.d)(), {
            "3PSIDMCPP": Qr
          } = await (0, fr.postJsonWithMetricsCookiesAndJsonResponse)(`${Ir.clientSideServerUrls.indexUrl}/index/app-attestation`, {
            appCheckToken: Sr
          }, {
            retries: 0
          }, rr.getMetricsCookies());
          return rr.setAppAttestedAuthJwt(Qr), !0
        } catch (Sr) {
          return Sr instanceof Zr.e && "failed" === Sr.code ? (console.warn("The app couldn't get an App Check token:", Sr), rr.markAppAttestationTried()) : console.error("Failed to attest the app:", Sr), !1
        }
      }(rr)
    }
    async function pr(rr, Sr) {
      try {
        return await Sr()
      } catch (Qr) {
        if (!await Er(rr, Qr)) throw Qr
      }
      return Sr()
    }
  },
  42836: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Ir,
      f: () => Er,
      i: () => fr
    });
    var Zr = Qr(1904);
    const Wr = 33177600,
      ar = 3e4;
    let jr = !1;

    function Ir(rr, Sr, Qr) {
      let Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const {
        scale: Ir = 1,
        type: fr = "image/png",
        quality: Er
      } = Zr;
      return rr.yx() ? jr ? Promise.reject(new Error("A screenshot is already being taken")) : (jr = !0, new Promise(((Zr, pr) => {
        let xr, mr = 2,
          Nr = null;
        const Ur = () => {
          var Sr;
          jr = !1, null === (Sr = Nr) || void 0 === Sr || Sr(), clearTimeout(xr);
          try {
            rr.restoreSize()
          } catch (Qr) {
            console.error("A screenshot couldn't size the canvas back", Qr)
          }
        };
        xr = setTimeout((() => {
          Ur(), pr(new Error("No frame was drawn to capture"))
        }), ar);
        try {
          const Zr = function(rr, Sr, Qr) {
            const Zr = Math.max(1, rr),
              ar = Math.max(1, Sr),
              jr = Math.min(1, Qr / Math.max(Zr, ar), Math.sqrt(Wr / (Zr * ar)));
            return {
              width: Math.max(1, Math.floor(Zr * jr)),
              height: Math.max(1, Math.floor(ar * jr))
            }
          }(Sr, Qr, rr.maxTextureSize);
          rr.resize(Zr.width, Zr.height, Ir * Zr.width / Math.max(1, Sr))
        } catch (tr) {
          return Ur(), void pr(tr)
        }
        Nr = rr.onFrameDrawn((() => {
          if (mr--, mr > 0) return;
          const {
            canvas: Sr
          } = rr, Qr = {
            width: Sr.width,
            height: Sr.height
          };
          try {
            Sr.toBlob((rr => {
              rr ? Zr({
                blob: rr,
                ...Qr
              }) : pr(new Error("The canvas gave no image"))
            }), fr, Er)
          } catch (tr) {
            pr(tr)
          } finally {
            Ur()
          }
        }))
      }))) : Promise.reject(new Error("Screenshots need a game to be running"))
    }

    function fr(rr) {
      return rr.yx() ? new Promise(((Sr, Qr) => {
        let Zr;
        const Wr = rr.onFrameDrawn((() => {
          Wr(), clearTimeout(Zr), createImageBitmap(rr.canvas).then(Sr, Qr)
        }));
        Zr = setTimeout((() => {
          Wr(), Qr(new Error("No frame was drawn to take"))
        }), ar)
      })) : Promise.reject(new Error("No game is drawing"))
    }
    async function Er(rr, Sr, Qr) {
      try {
        const Wr = await Ir(rr, Sr, Qr);
        (0, Zr.c)(Wr.blob, `bloxd-screenshot-${Wr.width}x${Wr.height}-${Date.now()}.png`)
      } catch (Wr) {
        console.error("Error taking screenshot:", Wr)
      }
    }
  },
  39200: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Zr
    });
    const Zr = {
      noaReady: null,
      chunkRequested: null,
      beforeServerListeners: null,
      wasmNetReady: null
    }
  },
  40617: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => mr,
      d: () => pr
    });
    var Zr = Qr(208),
      Wr = Qr(1974),
      ar = Qr(1267),
      jr = Qr(10062);
    const Ir = [250, 500, 1e3, 2e3, 1250],
      fr = 406;

    function Er(rr) {
      if ("object" !== typeof rr || null === rr) return !1;
      const {
        code: Sr,
        message: Qr
      } = rr, Wr = Zr.e.duplicateLobbyNameError;
      return (Sr === Wr.code || Sr === fr) && (Qr === Wr.text || Qr === Wr.text + Zr.l)
    }
    async function pr(rr, Sr) {
      let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Wr.e;
      for (let Wr = 0;; Wr++) {
        let jr;
        (0, ar.l)(Sr);
        try {
          return await rr()
        } catch (Zr) {
          if (jr = Ir[Wr], void 0 === jr || !Er(Zr)) throw Zr
        }
        await Qr(jr, Sr)
      }
    }
    const xr = new Set([Zr.e.duplicateLobbyNameError.code, Zr.e.lobbyCantBeCreated.code, Zr.e.roomDisposedEarlyError.code, Zr.e.roomDisposedLateError.code, Zr.e.serverRoomLimitReached.code]);

    function mr(rr) {
      if (Er(rr)) return !0;
      const Sr = (0, jr.d)(rr);
      return "number" === typeof Sr && xr.has(Sr)
    }
  },
  10047: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Er,
      f: () => fr
    });
    var Zr = Qr(379);

    function Wr(rr) {
      if (!rr.startsWith("{")) return rr;
      let Sr;
      try {
        Sr = JSON.parse(rr)
      } catch {
        return rr
      }
      return function(rr) {
        if (null === (0, Zr.te)(rr)) return !1;
        const {
          params: Sr
        } = rr;
        return void 0 === Sr || "object" === typeof Sr && null !== Sr && Object.values(Sr).every((rr => "string" === typeof rr))
      }(Sr) ? Sr : rr
    }
    var ar = Qr(1251),
      jr = Qr(1304);

    function Ir(rr) {
      return (0, ar.z)(jr.f.get().getCurrentLanguageCode(), rr.translationKey, rr.params)
    }

    function fr(rr) {
      const Sr = Wr(rr);
      return "string" === typeof Sr ? Sr : Ir(Sr)
    }

    function Er(rr) {
      const Sr = Wr(rr);
      return "string" === typeof Sr ? Sr : Ir({
        translationKey: "moderation:kicked",
        params: {
          reason: Ir(Sr)
        }
      })
    }
  },
  40743: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => jr
    });
    var Zr = Qr(360),
      Wr = Qr(139),
      ar = Qr(43);

    function jr() {
      ar.j.setItem(Zr.Ib, ar.j.getItem(Zr.Ib) + 1), (0, Wr.is99NightsCrazyGamesBundle)() && ar.j.setItem(Zr.Eb, ar.j.getItem(Zr.Eb) + 1)
    }
  },
  37992: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => Kr,
      f: () => yr
    });
    var Zr = Qr(1127),
      Wr = Qr(215),
      ar = Qr(374),
      jr = Qr(692),
      Ir = Qr(379),
      fr = Qr(1131),
      Er = Qr(712),
      pr = Qr(750),
      xr = Qr(5287),
      mr = Qr(109),
      Nr = Qr(139),
      Ur = Qr(1885),
      tr = Qr(124),
      hr = Qr(38001),
      zr = Qr(43),
      Yr = Qr(727),
      nr = Qr(696),
      er = Qr(38006);

    function Kr() {
      var rr, Sr;
      return [...null !== (rr = navigator.languages) && void 0 !== rr ? rr : [null !== (Sr = navigator.language) && void 0 !== Sr ? Sr : "none"], "EN-gb"]
    }

    function yr(rr, Sr, Qr, yr, Br) {
      const Tr = (0, Zr.l)(Sr) ? (0, Zr.q)(Sr) : null,
        vr = rr.isLoggedIn() && void 0 !== (0, Wr.b)(ar.n, Nr.siteUsed) ? (0, nr.e)() : null,
        Or = {
          cookies: (0, Ur.getAllCookiesForGameNameWithVariation)(Sr),
          isMobile: (0, mr.isMobile)(),
          isUsingCustomGameTexturePack: null !== Tr && Br(Tr),
          generalCookies: {
            joinDiscord: !!zr.j.getItem("DiscordPressed"),
            newGo: xr.e,
            ...rr.getMetricsCookies(),
            trafficCode: yr,
            compliance: mr.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, mr.getBrowserName)(),
            version: (0, mr.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, mr.getPlatformType)(),
            deviceType: (0, tr.b)()
          },
          isLoggedIn: rr.isLoggedIn(),
          lobbyName: Qr,
          languages: Kr(),
          version: jr.e,
          siteUsed: Nr.siteUsed,
          subsiteUsed: Nr.subsiteUsed,
          playSessionId: (0, hr.l)(Sr),
          visitSessionId: (0, Yr.getVisitSessionId)(),
          clientReason: Er.B.reason,
          budgetBasis: (0, er.j)(),
          ...null !== pr.q && {
            diagClaim: pr.q.claimId
          },
          ...null !== vr && {
            webGpuLoss: vr
          }
        };
      return null !== Tr && (0, Ir.Ac)(Tr) ? (Or.lobbyName = (0, Zr.i)(Tr, (0, Zr.m)(Sr), Qr), {
        roomName: `classic_${fr.h}`,
        joinOptions: Or
      }) : {
        roomName: Sr,
        joinOptions: Or
      }
    }
  },
  35359: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => ar,
      g: () => Wr
    });
    let Zr = null;

    function Wr() {
      Zr = performance.now()
    }

    function ar() {
      return Zr
    }
  },
  40640: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Nr,
      f: () => mr
    });
    const Zr = "ue:",
      Wr = ["keydown", "keyup", "mousedown", "mouseup", "pointerdown", "pointerup", "touchstart", "touchend"],
      ar = "[A-Za-z0-9]{1,24}",
      jr = 15,
      Ir = new RegExp(`^${ar}$`);
    new RegExp(`^${Zr}(${[...Wr,"other"].join("|")}):(?:n|k(${ar})|b(0|[1-9][0-9]?)):([01])([01])$`);

    function fr(rr, Sr, Qr, ar, fr) {
      const Er = "string" === typeof rr && Wr.includes(rr) ? rr : "other";
      let pr = "n";
      return "string" === typeof Sr ? pr = Ir.test(Sr) ? `k${Sr}` : "n" : "number" === typeof Qr && Number.isInteger(Qr) && Qr >= 0 && Qr <= jr && (pr = `b${Qr}`), `${Zr}${Er}:${pr}:${ar?1:0}${fr?1:0}`
    }
    var Er = Qr(1793),
      pr = Qr(1890);
    let xr = null;

    function mr(rr) {
      const Sr = rr instanceof Element && rr !== document.body && rr !== document.documentElement && !(0, Er.q)(rr) && !rr.closest("#root");
      return {
        editable: (0, pr.e)(rr),
        outsideView: Sr
      }
    }

    function Nr(rr) {
      return xr ??= function(rr) {
        try {
          const {
            editable: Sr,
            outsideView: Qr
          } = mr(rr.target), Zr = rr;
          return fr(rr.type, Zr.code, Zr.button, Sr, Qr)
        } catch {
          return fr(null, null, null, !1, !1)
        }
      }(rr), xr
    }
  },
  42751: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      C: () => Cr,
      G: () => Xr,
      H: () => gr,
      K: () => lr,
      L: () => cr,
      O: () => wr,
      S: () => Hr,
      b: () => Fr,
      e: () => Gr,
      g: () => Or,
      i: () => or,
      m: () => Lr,
      n: () => vr,
      o: () => Mr,
      r: () => Pr,
      v: () => Rr,
      x: () => qr,
      y: () => Dr
    });
    var Zr = Qr(1518),
      Wr = Qr(34),
      ar = Qr(1353),
      jr = Qr(3372),
      Ir = Qr(5628),
      fr = Qr(5602);
    let Er, pr = !1,
      xr = !1,
      mr = !1,
      Nr = !1;
    const Ur = 1300,
      tr = 3e3;
    let hr = 0,
      zr = !1,
      Yr = !1,
      nr = 0;
    const er = 2;
    let Kr = !1,
      yr = !1;
    const Br = new Set,
      Tr = new Set;

    function vr() {
      return pr
    }

    function Or() {
      return Yr
    }

    function Lr() {
      return yr
    }

    function lr() {
      return (0, ar.v)() && !yr
    }

    function Xr(rr) {
      let Sr = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (rr !== yr) {
        yr = rr;
        for (const rr of [...Tr]) rr(yr);
        Sr && wr()
      }
    }

    function Pr(rr) {
      return Tr.add(rr), () => {
        Tr.delete(rr)
      }
    }

    function Hr() {
      (0, Ir.f)(jr.y.Menu, (0, ar.v)() ? 0 : jr.y.Menu)
    }

    function qr() {
      Yr = !1, nr = 0, Hr(), wr()
    }

    function Rr(rr) {
      return Br.add(rr), () => {
        Br.delete(rr)
      }
    }

    function gr(rr) {
      xr = !1, rr !== pr && (pr = rr, Nr = !1, clearTimeout(Er), mr = !pr && Kr, pr ? (zr = !1, Yr = !1, nr = 0) : lr() && !Kr && (Yr = !0), Kr = !1, pr && !lr() && Jr(), dr(), mr && wr())
    }

    function Cr(rr) {
      rr !== zr && (zr = rr, rr || wr())
    }

    function Mr() {
      xr = !1, Nr || !0 !== Vr() || (Nr = !0, clearTimeout(Er), Er = setTimeout(kr, Ur))
    }

    function Gr() {
      return (!xr || performance.now() - hr > tr) && (xr = (0, fr.N)().lockPointer(), hr = performance.now()), xr
    }

    function kr() {
      Ar() && ir() && Gr()
    }

    function Ar() {
      return lr() && !pr && !zr && !(0, Zr.j)()
    }

    function Vr() {
      var rr;
      return "undefined" === typeof navigator || null === (rr = navigator.userActivation) || void 0 === rr ? void 0 : rr.isActive
    }

    function ir() {
      return mr && (!navigator.userAgent.includes("Firefox/") || Boolean(document.fullscreenElement)) || !1 !== Vr()
    }

    function wr() {
      lr() ? Ar() && !Yr && ir() && Gr() : pr && !Kr && Jr()
    }

    function cr() {
      Yr ? navigator.vendor.startsWith("Apple") ? br() : nr = er : wr()
    }

    function Fr() {
      nr > 0 && 0 === --nr && br()
    }

    function or() {
      nr = 0
    }

    function br() {
      Ar() && !0 === Vr() && Gr()
    }

    function Jr() {
      Kr = !0, (0, fr.N)().unlockPointer()
    }

    function Dr() {
      xr = !1, mr = !1, Nr = !1, clearTimeout(Er), zr = !1, Yr = !1, nr = 0, Kr = !1;
      const rr = pr;
      pr = !1, rr && dr()
    }

    function dr() {
      for (const rr of [...Br]) rr(pr);
      Wr.i.Jp("pointerLockUpdate", pr)
    }
  },
  42726: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => mr,
      h: () => Ir,
      i: () => xr,
      l: () => Er,
      o: () => jr,
      r: () => pr,
      t: () => fr
    });
    let Zr = null,
      Wr = null,
      ar = null;

    function jr(rr) {
      Zr = rr
    }

    function Ir() {
      return Zr
    }

    function fr(rr) {
      Wr = rr
    }

    function Er() {
      return Wr
    }

    function pr(rr) {
      ar = rr
    }

    function xr() {
      return ar
    }

    function mr() {
      var rr, Sr;
      return !0 === (null === (rr = Wr) || void 0 === rr || null === (Sr = rr.currentViewer) || void 0 === Sr ? void 0 : Sr.inPlayback)
    }
  },
  42519: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => fr
    });
    var Zr = Qr(41333),
      Wr = Qr(38278);

    function ar(rr) {
      return {
        current: () => rr,
        watch: () => () => {}
      }
    }

    function jr() {}
    const Ir = Object.freeze([0, 0, 0]),
      fr = {
        states: {
          health: ar({
            health: null,
            maxHealth: null,
            shield: null,
            maxShield: null
          }),
          inventory: ar({
            player: [],
            chestOrCreative: [],
            chest: null,
            creative: !1,
            selectedSlot: 0,
            freeSlots: 0
          }),
          hotbar: ar({
            items: [],
            ammo: 0,
            selectedSlot: null
          }),
          stationItems: ar({
            enchantable: {},
            salvageable: {}
          }),
          itemInfo: ar({}),
          creativeVisibility: ar({
            publicLobby: !1,
            shownInGame: {}
          }),
          aura: ar(null),
          heldItemAim: ar({
            gun: !1,
            aimable: !1,
            chargeName: null
          }),
          crouching: ar(!1),
          gliderBoostFuel: ar(0),
          flight: ar({
            canFly: !1,
            flying: !1
          }),
          crafting: ar({
            focus: null,
            recipes: [],
            detail: null
          }),
          players: ar({
            ids: [],
            byId: {},
            localId: null
          }),
          lobbyLeaderboardRows: ar({}),
          fullInventory: ar(!1),
          crosshairTarget: ar({
            interactPrompt: null,
            blockText: null,
            neededTool: null
          }),
          localPlayerAlive: ar(!0),
          freeCamera: ar({
            allowed: !1,
            movesFly: !1
          }),
          replay: ar(null),
          replayEdits: ar(null),
          replayRecorder: ar(Wr.c),
          replayVideoExporting: ar(!1)
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
          chatRemoved: {
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
          selectHotbarSlot: jr,
          removeInventoryItem: () => !1,
          swapInventorySlots: () => !1,
          moveInventoryItem: () => !1,
          quickMoveInventoryItem: () => null,
          closeChest: jr,
          setInventoryOpen: jr,
          changeIronChestPasskey: jr,
          dragReplayCamera: jr,
          applyTemporaryThirdPerson: jr,
          holdEmoteWheel: jr,
          recordFlyingMiddleText: jr,
          focusCrafting: jr,
          craftRecipe: () => ({
            NI: 0,
            bp: null,
            amountAddedToSlot: 0
          }),
          salvageItem: () => !1,
          enchantItem: jr,
          setShopOpen: jr,
          buyShopItem: jr,
          lobbyManage: jr,
          sendChatMessage: () => !1,
          ignorePlayer: jr,
          reportPlayer: jr,
          reportWorldCodeChat: jr,
          requestDiscordReportKey: jr,
          reportLobbyOrGame: jr,
          playEmote: jr,
          updateMyCosmetic: jr,
          writeOnBoard: jr,
          writeBook: jr,
          writeNameTag: jr,
          setCustomLobbyBlock: jr,
          openIronChest: jr,
          sendCodeCollab: jr,
          clickCodeBlock: jr,
          bindCustomButtonKeys: jr,
          pressCustomButton: jr,
          moveReplayFreecam: jr,
          holdReplayFreecamVertical: jr,
          respawn: jr,
          wakeUp: jr,
          requestLeaderboard: jr,
          completeTask: jr,
          setServerCookie: jr,
          answerUiRequest: jr,
          chooseRewardedAd: jr,
          setCameraZoom: jr,
          setFreeCameraMovesFly: jr,
          setBlockHighlight: jr,
          setCrosshairInteractPrompt: jr,
          setLookSensitivity: jr,
          replayAction: jr,
          setReplayPlaying: jr,
          seekReplay: jr,
          setReplayCameraMode: jr,
          syncReplayCameraMode: jr,
          setReplayCameraKeyframe: jr,
          moveReplayCameraKeyframe: jr,
          deleteReplayCameraKeyframes: jr,
          setReplayPlaybackMark: jr,
          cropReplay: () => !1,
          holdReplayForShaderPackFailure: jr,
          exportReplayVideo: jr,
          toggleRecording: jr,
          saveClip: jr,
          setRecorderPrefs: jr,
          setReplayViewerOpen: jr
        },
        queries: {
          enchantingOffer: () => ({
            perks: [],
            options: []
          }),
          worldCodeAiChunk: () => Zr.e,
          worldCodeAiGameState: () => Zr.f
        },
        lookups: {
          localPos: () => Ir,
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
  42526: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => jr,
      h: () => ar,
      l: () => Wr
    });
    let Zr = null;

    function Wr(rr) {
      Zr = rr
    }

    function ar(rr) {
      Zr === rr && (Zr = null)
    }

    function jr() {
      var rr;
      null === (rr = Zr) || void 0 === rr || rr()
    }
  },
  38150: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => pr,
      d: () => mr,
      e: () => zr,
      i: () => Er
    });
    var Zr = Qr(26),
      Wr = Qr(3372),
      ar = Qr(3378),
      jr = Qr(3381),
      Ir = Qr(3515),
      fr = Qr(34);

    function Er(rr, Sr) {
      return (!(0, jr.c)() || 0 === rr && 0 === Sr) && (0, ar.x)(Wr.g.Joystick, 0, rr, Sr, 0)
    }
    const pr = {
      Action1: 1,
      Action2: 2,
      Action3: 3,
      Attack: 4,
      Use: 5,
      Interact: 6,
      Boost: 7
    };

    function xr(rr) {
      return rr.classList.contains("TouchKeyHit") && Nr() ? null : rr.firstElementChild
    }

    function mr(rr) {
      return rr.classList.contains("TouchKeyHit") && !rr.classList.contains("CanvasZone") ? {
        whole: !Nr(),
        keyBox: null
      } : {
        whole: !1,
        keyBox: Ur(xr(rr))
      }
    }

    function Nr() {
      return document.documentElement.classList.contains(Ir.m)
    }

    function Ur(rr) {
      return !(rr instanceof HTMLElement) || rr.offsetWidth <= 0 || rr.offsetHeight <= 0 ? null : {
        width: rr.offsetWidth,
        height: rr.offsetHeight
      }
    }

    function tr(rr, Sr) {
      const Qr = rr => Math.min(65535, Math.round(4 * rr));
      return (Qr(rr) | Qr(Sr) << 16) >>> 0
    }

    function hr(rr) {
      return {
        x: rr.left + rr.width / 2,
        y: rr.top + rr.height / 2,
        radius: Math.min(rr.width, rr.height) / 2
      }
    }
    const zr = new class {
      constructor(rr) {
        this.write = rr, this.elements = new Map, this.canvasLeft = 0, this.canvasTop = 0
      }
      set(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        Sr ? this.elements.set(rr, {
          element: Sr,
          hidden: Qr
        }) : this.elements.delete(rr), this.measureOne(rr)
      }
      measure() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          left: this.canvasLeft,
          top: this.canvasTop
        };
        this.canvasLeft = rr.left, this.canvasTop = rr.top;
        for (const Sr of this.elements.keys()) this.measureOne(Sr)
      }
      hitZone(rr, Sr) {
        let Qr = null,
          Zr = 1;
        for (const Wr of this.elements.keys()) {
          const ar = this.shown(Wr);
          if (!ar) continue;
          const {
            rect: jr,
            element: Ir
          } = ar, fr = hr(jr), Er = Math.max(0, jr.width / 2 - fr.radius), pr = Math.max(0, jr.height / 2 - fr.radius), mr = Math.max(0, Math.abs(rr - fr.x) - Er), Nr = Math.max(0, Math.abs(Sr - fr.y) - pr), tr = Ir.firstElementChild;
          let zr = Math.hypot(mr, Nr) / fr.radius;
          const Yr = Ur(xr(Ir));
          Yr && (zr = Math.min(zr, Math.max(2 * Math.abs(rr - fr.x) / Yr.width, 2 * Math.abs(Sr - fr.y) / Yr.height))), zr < Zr && (Qr = {
            code: Wr,
            element: Ir,
            key: tr,
            ...fr
          }, Zr = zr)
        }
        return Qr
      }
      measureOne(rr) {
        const Sr = this.shown(rr);
        if (!Sr) return void this.write(Wr.g.TouchZone, rr, 0, 0, 0);
        const {
          rect: Qr,
          element: Zr
        } = Sr, ar = hr(Qr);
        this.write(Wr.g.TouchZone, rr, ar.x - this.canvasLeft, ar.y - this.canvasTop, tr(Qr.width, Qr.height));
        const jr = Ur(xr(Zr));
        this.write(Wr.g.TouchZone, 256 | rr, 0, 0, jr ? tr(jr.width, jr.height) : 0)
      }
      shown(rr) {
        const Sr = this.elements.get(rr),
          Qr = Zr.c.get("worldPanelHud");
        if (!Sr || Sr.hidden || "none" === Qr) return null;
        const Wr = Sr.element.getBoundingClientRect();
        return Wr.width <= 0 || Wr.height <= 0 ? null : {
          rect: Wr,
          element: Sr.element
        }
      }
    }(ar.x);
    (0, fr.j)(Ir.g, (() => {
      zr.measure()
    }))
  },
  42735: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => fr,
      g: () => Er
    });
    var Zr = Qr(42741),
      Wr = Qr(40625),
      ar = Qr(37992),
      jr = Qr(42598),
      Ir = Qr(42654);
    const fr = Zr.b.timeForPlayerToConnect - 1e4;
    async function Er(rr, Sr, Qr, Zr) {
      let fr;
      try {
        fr = await rr.getTrafficCode()
      } catch (Ur) {
        throw console.error("[bloxd-wasm-client] could not get a traffic code", Ur), new Ir.C(Ur)
      }
      const {
        gameNameWithVariation: Er,
        lobbyName: pr
      } = Sr, xr = () => {
        const Sr = (0, ar.f)(rr, Er, pr, fr, (rr => {
          var Sr;
          return null !== (Sr = null === Qr || void 0 === Qr ? void 0 : Qr.isUsingCustomGameTexturePack(rr)) && void 0 !== Sr && Sr
        }));
        Sr.joinOptions.wasmClient = !0;
        const Wr = (0, jr.z)();
        return null !== Wr && (Sr.joinOptions.renderBackend = Wr), Sr.joinOptions.joinAdHold = Zr, Sr
      }, {
        roomName: mr,
        joinOptions: Nr
      } = xr();
      return {
        endpoint: Sr.endpoint,
        roomName: mr,
        joinOptions: Nr,
        session: {
          gameNameWithVariation: Er,
          lobbyName: pr,
          playerDbId: rr.whamm
        },
        optionsAfterRefusal: async Sr => await (0, Wr.d)(rr, Sr) ? xr().joinOptions : null
      }
    }
  },
  6017: (rr, Sr, Qr) => {
    function Zr(rr, Sr) {
      return Wr(rr, Sr)
    }

    function Wr(rr, Sr) {
      if (rr === Sr) return !0;
      if ("object" !== typeof rr || "object" !== typeof Sr || null === rr || null === Sr || Array.isArray(rr) !== Array.isArray(Sr)) return !1;
      const Qr = rr,
        Zr = Sr,
        ar = Object.keys(Qr);
      return ar.length === Object.keys(Zr).length && ar.every((rr => Object.prototype.hasOwnProperty.call(Zr, rr) && Wr(Qr[rr], Zr[rr])))
    }
    Qr.d(Sr, {
      b: () => Zr
    })
  },
  42774: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => yr,
      e: () => er,
      i: () => tr,
      m: () => Ur
    });
    var Zr = Qr(1974),
      Wr = Qr(1267),
      ar = Qr(40617),
      jr = Qr(38018),
      Ir = Qr(40632),
      fr = Qr(42654);
    const Er = {
        "X-Requested-With": "XMLHtttpRequest"
      },
      pr = 3,
      xr = [500, 1500];

    function mr(rr) {
      const Sr = new URL(rr);
      return {
        secure: "https:" === Sr.protocol || "wss:" === Sr.protocol,
        host: Sr.host,
        pathname: Sr.pathname.replace(/\/+$/, ""),
        search: Sr.searchParams.toString()
      }
    }

    function Nr(rr, Sr, Qr) {
      const {
        secure: Zr,
        host: Wr,
        pathname: ar,
        search: jr
      } = mr(rr);
      return `${Zr?"https":"http"}://${Wr}${ar}/matchmake/${Sr}/${encodeURIComponent(Qr)}${jr?`?${jr}`:""}`
    }

    function Ur(rr, Sr) {
      var Qr;
      const Zr = null !== (Qr = Sr.protocol) && void 0 !== Qr ? Qr : "ws";
      if ("ws" !== Zr) throw new Error(`seat reservation asks for the ${Zr} transport`);
      const {
        secure: Wr,
        host: ar,
        pathname: jr,
        search: Ir
      } = mr(rr), fr = new URLSearchParams(Ir);
      fr.append("sessionId", Sr.sessionId), Sr.reconnectionToken && fr.append("reconnectionToken", Sr.reconnectionToken);
      return `${Wr?"wss":"ws"}://${Sr.room.publicAddress||`${ar}${jr}`}/${Sr.room.processId}/${Sr.room.roomId}?${fr.toString()}`
    }
    async function tr(rr, Sr, Qr) {
      var Ir;
      let Er = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const mr = null !== (Ir = Er.sleep) && void 0 !== Ir ? Ir : Zr.e,
        Ur = new Wr.b(Er.signal),
        tr = new jr.b((() => {
          (0, Wr.h)(Ur.controller, new jr.c("seat"))
        })),
        {
          signal: nr
        } = Ur;
      try {
        const Zr = await (0, ar.d)((() => async function(rr, Sr, Qr, Zr) {
          var ar;
          const {
            signal: jr,
            sleep: Ir
          } = Zr, Er = Nr(rr, "joinOrCreate", Sr), mr = JSON.stringify(Qr);
          let Ur = null;
          for (let Nr = 0; Nr < pr; Nr++) {
            var tr;
            if (Nr > 0) await Ir(null !== (tr = xr[Nr - 1]) && void 0 !== tr ? tr : 1500, jr);
            let rr;
            (0, Wr.l)(jr);
            try {
              rr = await zr(Er, mr, Zr)
            } catch (nr) {
              (0, Wr.l)(jr), Ur = hr(nr);
              continue
            }
            const {
              response: Sr,
              answer: Qr,
              refusal: ar,
              lost: pr
            } = rr;
            if (null === pr) {
              if (null !== ar) throw Yr(ar, Qr);
              if (Sr.ok && null !== Qr && Br(Qr)) return Qr;
              Ur = new fr.y(`seat request answered HTTP ${Sr.status}${null===Qr?" without JSON":" without a seat"}`, !1, void 0, Sr.status)
            } else Ur = hr(pr.error)
          }
          throw null !== (ar = Ur) && void 0 !== ar ? ar : new fr.y("seat request made no attempt", !1)
        }(rr, Sr, Qr, {
          ...Er,
          signal: nr,
          sleep: mr
        })), nr, mr);
        return tr.answered(), Zr
      } finally {
        tr.stop(), Ur.unfollow()
      }
    }

    function hr(rr) {
      return new fr.y(rr instanceof Error ? rr.message : String(rr), !0, rr)
    }
    async function zr(rr, Sr, Qr) {
      var Zr;
      const {
        signal: ar
      } = Qr, jr = null !== (Zr = Qr.fetch) && void 0 !== Zr ? Zr : fetch, Ir = await jr(rr, {
        method: "POST",
        headers: {
          ...Er,
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: Sr,
        credentials: "include",
        signal: ar
      }), {
        answer: fr,
        lost: pr
      } = await async function(rr) {
        try {
          const Sr = await rr.json();
          return {
            answer: "object" === typeof Sr && null !== Sr ? Sr : null,
            lost: null
          }
        } catch (Sr) {
          return {
            answer: null,
            lost: Sr instanceof SyntaxError ? null : {
              error: Sr
            }
          }
        }
      }(Ir), xr = null !== fr && "string" === typeof fr.error ? fr.error : null;
      var mr;
      null !== xr && (null === (mr = Qr.onRefusal) || void 0 === mr || mr.call(Qr));
      return (0, Wr.l)(ar), {
        response: Ir,
        answer: fr,
        refusal: xr,
        lost: pr
      }
    }

    function Yr(rr, Sr) {
      return new fr.q(rr, "number" === typeof(null === Sr || void 0 === Sr ? void 0 : Sr.code) ? Sr.code : 0, (0, Ir.n)(rr).text)
    }
    class nr extends Error {
      constructor(rr, Sr) {
        super(rr), this.code = Sr, this.name = "SeatHttpError"
      }
    }
    async function er(rr, Sr, Qr) {
      let Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const {
        response: Wr,
        answer: ar,
        refusal: jr,
        lost: Ir
      } = await zr(Nr(rr, "reconnect", Sr), JSON.stringify({
        reconnectionToken: Qr
      }), Zr);
      if (null !== Ir) throw Ir.error;
      if (!Wr.ok) {
        const rr = null !== ar && "number" === typeof ar.code && 0 !== ar.code ? ar.code : Wr.status;
        throw new nr(`the seat's reconnect was refused: ${null!==jr&&void 0!==jr?jr:`HTTP ${Wr.status}`}`, rr)
      }
      if (null !== jr) throw Yr(jr, ar);
      if (null === ar || !Br(ar)) throw new Error("the seat's reconnect answered " + (null === ar ? "without JSON" : "without a seat"));
      return {
        ...ar,
        reconnectionToken: Qr
      }
    }
    const Kr = 10;

    function yr(rr) {
      if (rr.byteLength < 2 || rr[0] !== Kr) return null;
      const Sr = 2 + rr[1];
      return Sr > rr.byteLength ? null : (new TextDecoder).decode(rr.subarray(2, Sr))
    }

    function Br(rr) {
      const Sr = rr.room;
      return "string" === typeof rr.sessionId && "object" === typeof Sr && null !== Sr && "string" === typeof Sr.roomId && "string" === typeof Sr.processId && "string" === typeof Sr.name
    }
  },
  42456: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      C: () => Br,
      E: () => Xr,
      F: () => er,
      I: () => Kr,
      K: () => hr,
      M: () => Or,
      N: () => Hr,
      P: () => Ur,
      R: () => Rr,
      T: () => Yr,
      W: () => zr,
      X: () => nr,
      _: () => yr,
      b: () => Wr,
      e: () => qr,
      g: () => Pr,
      h: () => Nr,
      l: () => tr,
      p: () => lr,
      t: () => Tr,
      w: () => Lr,
      y: () => vr
    });
    var Zr = Qr(2961);
    const Wr = {
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

    function ar(rr, Sr) {
      return !ArrayBuffer.isView(rr) || rr instanceof DataView ? Array.isArray(rr) ? rr.map((rr => Sr(rr))) : rr : Array.from(rr, (rr => Sr(rr)))
    }

    function jr(rr) {
      if ("string" !== typeof rr) return rr;
      for (let Sr = 0; Sr < rr.length; Sr++) {
        const Qr = rr.charCodeAt(Sr);
        if (Qr >= 55296 && Qr <= 57343) return fr.decode(Ir.encode(rr))
      }
      return rr
    }
    const Ir = new TextEncoder,
      fr = new TextDecoder;

    function Er(rr) {
      return rr
    }
    let pr;

    function xr(rr) {
      return null === rr || "object" !== typeof rr ? rr : [jr(rr.policy), jr(rr.jI)]
    }

    function mr(rr) {
      return null === rr || "object" !== typeof rr ? rr : [ar(rr.cW, Er), ar(rr.DI, Er)]
    }

    function Nr(rr) {
      return null === (Sr = rr) || "object" !== typeof Sr ? Sr : [jr(Sr.xj), jr(Sr.mj)];
      var Sr
    }

    function Ur(rr) {
      return null === (Sr = rr) || "object" !== typeof Sr ? Sr : [Sr.id, Sr.ap];
      var Sr
    }

    function tr(rr) {
      return null === (Sr = rr) || "object" !== typeof Sr ? Sr : [Sr.GQ, jr(Sr.kQ), Sr.AQ, jr(Sr.wQ), Sr.bQ, Sr.JQ, Sr.fj, jr(Sr.Ej), jr(Sr.pj)];
      var Sr
    }

    function hr(rr) {
      return null === (Sr = rr) || "object" !== typeof Sr ? Sr : [ar(Sr.WI, Er), Sr.aI];
      var Sr
    }

    function zr(rr) {
      return null === (Sr = rr) || "object" !== typeof Sr ? Sr : [ar(Sr.Np, (rr => jr(rr))), jr(Sr.Up), Sr.tp];
      var Sr
    }

    function Yr(rr) {
      return null === (Sr = rr) || "object" !== typeof Sr ? Sr : [ar(Sr.uI, Er), jr(Sr.rf), jr(Sr.Sf), Sr.Qf];
      var Sr
    }

    function nr(rr) {
      return null === (Sr = rr) || "object" !== typeof Sr ? Sr : [jr(Sr.fW), jr(Sr.EW)];
      var Sr
    }

    function er(rr) {
      return null === (Sr = rr) || "object" !== typeof Sr ? Sr : [jr(Sr.II)];
      var Sr
    }

    function Kr(rr) {
      return jr(rr)
    }

    function yr(rr) {
      return null === (Sr = rr) || "object" !== typeof Sr ? Sr : [jr(Sr.Xp), jr(Sr.Pp), jr(Sr.policy), jr(Sr.jI), ar(Sr.Hp, (rr => jr(rr)))];
      var Sr
    }

    function Br(rr) {
      return xr(rr)
    }

    function Tr(rr) {
      return xr(rr)
    }

    function vr(rr) {
      return null === (Sr = rr) || "object" !== typeof Sr ? Sr : [jr(Sr.Qp)];
      var Sr
    }

    function Or(rr) {
      return rr
    }

    function Lr(rr) {
      return null === (Sr = rr) || "object" !== typeof Sr ? Sr : [jr(Sr.xp), jr(Sr.mp)];
      var Sr
    }

    function lr(rr) {
      return jr(rr)
    }

    function Xr(rr) {
      return mr(rr)
    }

    function Pr(rr) {
      return mr(rr)
    }

    function Hr(rr) {
      return null === (Sr = rr) || "object" !== typeof Sr ? Sr : [jr(Sr.JE)];
      var Sr
    }

    function qr(rr) {
      return (pr ??= (0, Zr.f)().map((rr => rr.name)), pr).map((Sr => {
        return "string" === typeof(Qr = rr[Sr]) ? jr(Qr) : ar(Qr, Er);
        var Qr
      }))
    }

    function Rr(rr) {
      return null === (Sr = rr) || "object" !== typeof Sr ? Sr : [Sr.zj, Sr.Yj, Sr.nj];
      var Sr
    }
  },
  6014: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => jr,
      f: () => Ir
    });
    var Zr = Qr(2325),
      Wr = Qr(6017);
    let ar = null;

    function jr(rr) {
      ar = {
        pack: rr.metaData.id === Zr.e ? null : rr
      }
    }

    function Ir(rr) {
      return !(null === ar || !(0, Wr.b)(ar.pack, rr)) && (ar = null, !0)
    }
  },
  42720: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      followPageUiPack: () => Gx,
      packForGame: () => Mx,
      playWasmGame: () => dx,
      prefetchWasmPreviews: () => BE,
      setGamePackConfirm: () => Vp,
      startWasmPlay: () => wx,
      startWasmPreviews: () => yE
    });
    var Zr = Qr(208),
      Wr = Qr(1295),
      ar = Qr(161),
      jr = Qr(40646),
      Ir = Qr(2089),
      fr = Qr(34),
      Er = Qr(5479),
      pr = Qr(1413),
      xr = Qr(1849),
      mr = Qr(1422),
      Nr = Qr(40824),
      Ur = Qr(1364),
      tr = Qr(10088),
      hr = Qr(194),
      zr = Qr(3991),
      Yr = Qr(1965),
      nr = Qr(4026);
    let er = null,
      Kr = null,
      yr = null,
      Br = !1,
      Tr = "previews",
      vr = null,
      Or = !1,
      Lr = 0;

    function lr(rr) {
      Tr = rr
    }

    function Xr(rr) {
      var Sr;
      const Qr = rr instanceof Error ? rr.name : null;
      return null !== (Sr = hr.e.find((rr => rr === Qr))) && void 0 !== Sr ? Sr : "other"
    }

    function Pr() {
      er ??= performance.now()
    }

    function Hr(rr) {
      Kr ??= performance.now(), vr = rr, Lr > 0 && qr()
    }

    function qr() {
      null !== Kr && null !== vr && (0, Ur.D)("wasm_loaded", Kr, `${vr}:${(0,zr.p)()}`)
    }
    const Rr = {
      ready: () => {
        Yr.c.markAdmissionAwaited()
      },
      adEnded: () => {
        Yr.c.markJoinAdEnded()
      },
      admitted: () => {
        Yr.c.markAdmitted()
      }
    };
    var gr = Qr(40837),
      Cr = Qr(40743),
      Mr = Qr(38001),
      Gr = Qr(1629),
      kr = Qr(40617),
      Ar = Qr(10062),
      Vr = Qr(38018),
      ir = Qr(42726),
      wr = Qr(5602),
      cr = Qr(42451),
      Fr = Qr(42519),
      or = Qr(42456);
    const br = {
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
        chatRemoved: !0,
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

    function Jr(rr) {
      const Sr = {
        ...Fr.b[rr]
      };
      for (const Qr of Object.keys(br[rr])) delete Sr[Qr];
      return Sr
    }

    function Dr() {
      var rr, Sr;
      return null === (rr = null === (Sr = (0, cr.f)()) || void 0 === Sr ? void 0 : Sr.localPlayerAlive()) || void 0 === rr || rr
    }

    function dr() {
      var rr, Sr;
      return null !== (rr = null === (Sr = (0, cr.f)()) || void 0 === Sr ? void 0 : Sr.localDeaths()) && void 0 !== rr ? rr : null
    }
    const sr = {
        current: Dr,
        watch: rr => {
          let Sr = Dr(),
            Qr = dr();
          return (0, wr.z)((() => {
            const Zr = Dr(),
              Wr = dr(),
              ar = null !== Wr && null !== Qr && Wr !== Qr;
            Qr = Wr, ar ? (Sr || rr(!0), rr(!1), Zr && rr(!0), Sr = Zr) : Zr !== Sr && (Sr = Zr, rr(Zr))
          }))
        }
      },
      ur = {
        states: {
          ...Jr("states"),
          localPlayerAlive: sr
        },
        events: {
          ...Jr("events"),
          localPlayerAliveSet: {
            watch: sr.watch
          }
        },
        commands: {
          ...Jr("commands"),
          respawn: () => {
            var rr;
            null === (rr = (0, cr.f)()) || void 0 === rr || rr.respawn()
          },
          playEmote: rr => {
            var Sr;
            null === (Sr = (0, cr.f)()) || void 0 === Sr || Sr.send(or.b.PlayEmote, (0, or.F)({
              II: rr
            }))
          },
          applyTemporaryThirdPerson: rr => {
            var Sr;
            let {
              durationMs: Qr
            } = rr;
            null === (Sr = (0, cr.f)()) || void 0 === Sr || Sr.thirdPersonFor(Qr)
          },
          bindCustomButtonKeys: rr => {
            var Sr;
            null === (Sr = (0, cr.f)()) || void 0 === Sr || Sr.bindCustomButtonKeys(rr)
          },
          pressCustomButton: rr => {
            var Sr;
            let {
              id: Qr,
              down: Zr
            } = rr;
            null === (Sr = (0, cr.f)()) || void 0 === Sr || Sr.pressCustomButton(Qr, Zr)
          },
          setLookSensitivity: () => {},
          wakeUp: rr => {
            const Sr = (0, or.N)({
                JE: rr
              }),
              Qr = () => {
                const rr = (0, cr.f)();
                return !(null !== rr && void 0 !== rr && rr.isSessionLive) || rr.send(or.b.StopSleeping, Sr)
              };
            if (!Qr()) {
              const rr = (0, wr.z)((() => {
                Qr() && rr()
              }))
            }
          },
          setCameraZoom: rr => {
            var Sr;
            null === (Sr = (0, cr.f)()) || void 0 === Sr || Sr.setCameraZoom(rr)
          }
        },
        queries: Jr("queries"),
        lookups: {
          ...Jr("lookups"),
          cameraZoom: () => {
            var rr, Sr;
            return null !== (rr = null === (Sr = (0, cr.f)()) || void 0 === Sr ? void 0 : Sr.cameraZoom()) && void 0 !== rr ? rr : 0
          }
        }
      };
    var rS = Qr(40632),
      SS = Qr(42654),
      QS = Qr(42663),
      ZS = Qr(42735),
      WS = Qr(1308),
      aS = Qr(120),
      jS = Qr(5287),
      IS = Qr(2436),
      fS = Qr(1229);
    const ES = {
      RI: () => (0, WS.c)(),
      inbuiltOverwritten: () => jS.f,
      reflectApplyHit: () => fS.b,
      definerHit: () => aS.currentUrl.c,
      emitReplaced: () => (0, fr.c)(),
      confirmMesh: () => (0, IS.c)(),
      confirmMeshHitStack: () => (0, IS.f)()
    };
    var pS = Qr(42670),
      xS = Qr(42746);
    var mS = Qr(26),
      NS = Qr(2093),
      US = Qr(2135),
      tS = Qr(1761),
      hS = Qr(2171),
      zS = Qr(1251),
      YS = Qr(1304),
      nS = Qr(37748);

    function eS() {
      return YS.f.get().getCurrentLanguageCode()
    }

    function KS(rr) {
      const Sr = () => {
        rr({
          translate: (rr, Sr) => (0, zS.v)(eS(), rr, Sr),
          keyBindingText: rr => {
            const Sr = (0, US.o)(rr, mS.c.get("isTouchScreen"));
            return null !== Sr ? (0, zS.z)(eS(), Sr.translationKey, Sr.params) : (0, US.j)((0, US.m)(rr))
          },
          isFriend: hS.f,
          hiddenNames: NS.b.shown,
          loadsFontRest: (0, nS.b)(eS())
        })
      };
      let Qr = !1;
      const Zr = () => {
          const rr = eS();
          (0, zS.l)(rr).then((() => {
            Qr || rr !== eS() || Sr()
          }))
        },
        Wr = () => tS.e.getSocialState().friends.map((rr => rr.name.toLowerCase())).sort().join(" ");
      let ar = Wr();
      Sr(), Zr();
      const jr = [(0, YS.i)((() => {
        Sr(), Zr()
      })), (0, fr.j)("customBindingsChanged", Sr), (0, fr.j)("appManagerUpdated|isTouchScreen", Sr), (0, hS.d)((() => {
        const rr = Wr();
        rr !== ar && (ar = rr, Sr())
      })), NS.b.subscribe(Sr)];
      return () => {
        Qr = !0;
        for (const rr of jr) rr()
      }
    }
    var yS = Qr(1256),
      BS = Qr(5187),
      TS = Qr(38320);
    const vS = {
      general: {
        ok: "OK",
        tryAgain: "Try Again",
        back: "Back",
        reload: "Reload",
        reconnect: "Rejoin"
      },
      wasmUnsupported: {
        title: "This browser can\u2019t run Bloxd",
        help: "Update your browser, or try another browser or device.",
        noWebAssemblyHelp: "Turn off your browser\u2019s strict security mode, update it, or try another browser.",
        titleApp: "This device can\u2019t run Bloxd",
        helpApp: "Update your device or try another one to play.",
        memoryTitle: "Bloxd ran out of memory",
        memoryHelp: "Close other tabs or apps, then try again.",
        memoryHelpApp: "Close other apps, then try again.",
        noContextTitle: "3D graphics are turned off",
        noContextHelp: "Turn on hardware acceleration in your browser\u2019s settings, or try another browser.",
        noContextHelpApp: "Restart the app, then try again.",
        graphicsLostTitle: "3D graphics stopped working",
        graphicsLostHelp: "Press your browser\u2019s reload button, or restart your browser.",
        graphicsLostHelpApp: "Restart the app, then try again.",
        noContextStillHelp: "Still off. Turn on hardware acceleration in your browser\u2019s settings, then restart your browser.",
        graphicsLostStillHelp: "Still blocked. Press your browser\u2019s reload button, or restart your browser.",
        stillBlockedHelpApp: "Still blocked. Close the app fully, then open it again."
      },
      wasmScreens: yS.wasmScreens
    };
    let OS = null;

    function LS(rr) {
      let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return null === OS ? function(rr) {
        var Sr, Qr;
        let Zr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const [Wr, ar] = rr.split(":"), jr = null !== (Sr = null === (Qr = vS[Wr]) || void 0 === Qr ? void 0 : Qr[ar]) && void 0 !== Sr ? Sr : rr;
        return jr.replace(/\{\{(\w+)\}\}/g, ((rr, Sr) => {
          var Qr;
          return null !== (Qr = Zr[Sr]) && void 0 !== Qr ? Qr : rr
        }))
      }(rr, Sr) : OS(rr, Sr)
    }

    function lS(rr, Sr) {
      (0, BS.d)();
      const Qr = document.createElement("div");
      Qr.setAttribute("role", "alertdialog"), Qr.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;z-index:100;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.7);font:16px sans-serif;color:#fff";
      const Zr = document.createElement("div");
      Zr.style.cssText = "max-width:28rem;padding:1.5rem;background:#1c2333;text-align:center";
      const Wr = document.createElement("h2");
      Wr.textContent = LS(rr.title);
      const ar = document.createElement("p");
      if (ar.textContent = LS(rr.help, rr.helpValues), ar.style.whiteSpace = "pre-line", Zr.append(Wr, ar), rr.discordLink) {
        const rr = document.createElement("a");
        rr.href = TS.d, rr.target = "_blank", rr.rel = "noreferrer", rr.style.color = "#8ab4ff", rr.textContent = LS("wasmScreens:reportOnDiscord"), Zr.append(rr)
      }
      const jr = document.createElement("div");
      return jr.style.cssText = "display:flex;gap:1rem;justify-content:center;margin-top:1.5rem", Zr.append(jr), Qr.append(Zr), document.body.append(Qr), new Promise((Zr => {
        const Wr = rr => {
            null === Sr || void 0 === Sr || Sr.removeEventListener("abort", ar), Qr.remove(), Zr(rr)
          },
          ar = () => {
            Wr(!1)
          };
        null === Sr || void 0 === Sr || Sr.addEventListener("abort", ar, {
          once: !0
        });
        const Ir = (rr, Sr) => {
          const Qr = document.createElement("button");
          Qr.textContent = LS(rr), Qr.style.cssText = "padding:0.5rem 1.25rem;font:inherit", Qr.addEventListener("click", (() => {
            Wr(Sr)
          })), jr.append(Qr)
        };
        null !== rr.cancel && Ir(rr.cancel, !1), Ir(rr.confirm, !0)
      }))
    }
    var XS = Qr(10047),
      PS = Qr(692),
      HS = Qr(1127),
      qS = Qr(2117),
      RS = Qr(360),
      gS = Qr(2396),
      CS = Qr(37566),
      MS = Qr(2398),
      GS = Qr(40304),
      kS = Qr(5498),
      AS = Qr(42550),
      VS = Qr(750),
      iS = Qr(712),
      wS = Qr(741),
      cS = Qr(4045),
      FS = Qr(2114),
      oS = Qr(2442),
      bS = Qr(4485);
    let JS = null;
    var DS = Qr(1262),
      dS = Qr(1267),
      sS = Qr(1974),
      uS = Qr(5104),
      rQ = Qr(5161),
      SQ = Qr(4686),
      QQ = Qr(67),
      ZQ = Qr(351),
      WQ = Qr(345),
      aQ = Qr(35359),
      jQ = Qr(335),
      IQ = Qr(42751),
      fQ = Qr(5604),
      EQ = Qr(5126);
    var pQ = Qr(5138),
      xQ = Qr(43);

    function mQ(rr) {
      let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => document.createElement("canvas");
      try {
        var Qr;
        const Zr = Sr(),
          Wr = rr ? Zr.getContext("webgl") : Zr.getContext("webgl2");
        return null !== Wr && (null === (Qr = Wr.getExtension("WEBGL_lose_context")) || void 0 === Qr || Qr.loseContext(), !0)
      } catch {
        return !1
      }
    }
    var NQ = Qr(1783);
    var UQ = Qr(39200),
      tQ = Qr(42753);
    class hQ {
      constructor(rr, Sr, Qr) {
        this.showView = rr, this.holdForAd = Sr, this.render = Qr
      }
      pointerUnlockRequestsChanged() {
        (0, IQ.x)()
      }
      pointerLockDebugEntries() {
        return [{
          label: "Locked to the canvas",
          value: String((0, IQ.n)())
        }]
      }
      setGameViewShown(rr) {
        this.showView(rr)
      }
      setGameView(rr) {
        (0, tQ.n)(rr)
      }
      videoAdHold(rr, Sr) {
        this.holdForAd(rr, Sr)
      }
      gameRender() {
        return this.render()
      }
    }
    class zQ {
      leave(rr) {
        ! function(rr) {
          if (null !== (0, mr.b)().websocketUrl) try {
            (0, wr.N)().leaveGame(rr)
          } finally {
            (0, mr.m)({
              websocketUrl: null
            })
          }
        }(rr)
      }
      isReplay() {
        return !1
      }
    }
    class YQ {
      constructor(rr) {
        this.workMs = rr
      }
      watchFrameStarts(rr) {
        return (0, wr.v)(rr)
      }
      watchFrames(rr) {
        return (0, wr.u)(rr)
      }
      watchTicks(rr) {
        return (0, wr.z)(rr)
      }
      frameWorkMs() {
        return this.workMs()
      }
    }
    var nQ = Qr(42707),
      eQ = Qr(42756);

    function KQ(rr) {
      return rr >= 0 ? Math.min(1, rr) : 0
    }

    function yQ(rr, Sr) {
      const {
        fade: Qr
      } = rr;
      return null === Qr || Sr - Qr.at >= Qr.ms ? rr.volume : Qr.from + (rr.volume - Qr.from) * Math.max(0, (Sr - Qr.at) / Qr.ms)
    }

    function BQ(rr) {
      const Sr = Object.entries(rr),
        Qr = new Uint32Array(Sr.length);
      let Zr = 0;
      for (const [jr, [, Ir]] of Sr.entries()) Qr[jr] = Ir.length, Zr += Ir.length;
      const Wr = new Float64Array(3 * Zr);
      let ar = 0;
      for (const [, jr] of Sr)
        for (const rr of jr) Wr.set(rr, ar), ar += 3;
      return {
        blocks: Sr.map((rr => {
          let [Sr] = rr;
          return Sr
        })).join("\0"),
        counts: Qr,
        values: Wr
      }
    }
    class TQ {
      constructor(rr, Sr) {
        this.core = rr, this.warn = Sr, this.latest = 0
      }
      async feed() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : vQ;
        const Sr = ++this.latest;
        let Qr;
        try {
          Qr = await rr()
        } catch (Zr) {
          return void(this.core.isStopped || Sr !== this.latest || this.warn("the block colours didn't load, so block particles draw grey", Zr))
        }
        Sr === this.latest && (this.core.setBlockColours(Qr) || this.core.isStopped || this.warn("the core refused the block colours: block particles draw grey"))
      }
    }
    async function vQ() {
      return BQ((await Qr.e(235).then((() => Qr(35587)))).averageColors)
    }
    var OQ = Qr(5610),
      LQ = Qr(5617),
      lQ = Qr(42500),
      XQ = Qr(4440),
      PQ = Qr(37514),
      HQ = Qr(42603),
      qQ = Qr(683),
      RQ = Qr(38528),
      gQ = Qr(679),
      CQ = Qr(379),
      MQ = Qr(42574);
    const GQ = [3e4, 12e4, 3e5];
    class kQ extends Error {}
    const AQ = {
      mobTypes: qQ.n,
      vehicleTypes: RQ.e,
      mobAiStates: qQ.j,
      playerPoses: gQ.s
    };
    var VQ = Qr(42559),
      iQ = Qr(42585),
      wQ = Qr(42627),
      cQ = Qr(1371),
      FQ = Qr(3986),
      oQ = Qr(42758),
      bQ = Qr(42767),
      JQ = Qr(2466),
      DQ = Qr(40605),
      dQ = Qr(5628),
      sQ = Qr(3372);
    const uQ = sQ.y.KeysDisabled | sQ.y.LookFrozen | sQ.y.ClicksSuppressed,
      rZ = JQ.l;
    var SZ = (0, bQ.d)("resumingConn");
    class QZ {
      constructor(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.shell = rr, this.now = Sr, this.session = void 0, this.attempt = null, this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, Object.defineProperty(this, SZ, {
          writable: !0,
          value: 0
        }), this.drops = 0, this.session = new DQ.c({
          reconnect: rr => this.reconnect(rr),
          isLive: () => rr.isLive(),
          onReconnected: Sr => {
            this.landed = Sr, rr.onReconnected(Sr), this.landIfResumed()
          },
          onGaveUp: (Sr, Qr) => {
            this.abortAttempt(), rr.onGaveUp(Sr, Qr)
          },
          freeze: Sr => {
            rr.Qq(Sr), (0, dQ.f)(uQ, Sr ? uQ : 0, "reconnectFreeze")
          },
          releaseSeat: rr => {
            this.releaseSeat(rr)
          }
        })
      }
      isResuming() {
        return this.session.isResuming()
      }
      get resumingConn() {
        return (0, oQ.e)(this, SZ)[SZ]
      }
      canHoldSeat() {
        return this.session.canHoldSeat()
      }
      onInitialInfo(rr) {
        let {
          conn: Sr,
          graceMs: Qr,
          sessionBased: Zr,
          replayOffer: Wr
        } = rr;
        this.session.onInitialInfo(Qr, Zr), this.isResuming() && (this.initialInfoConn = Sr, this.initialInfoOffer = Wr, this.landIfResumed())
      }
      onResumeComplete(rr) {
        0 !== rr && (rr === (0, oQ.e)(this, SZ)[SZ] ? ((0, oQ.e)(this, SZ)[SZ] = 0, this.session.onResumed()) : this.isResuming() && (this.completedEarlyConn = rr))
      }
      onDropped(rr) {
        this.drops++, this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, (0, oQ.e)(this, SZ)[SZ] = 0, this.session.onConnectionLost(rr)
      }
      leave() {
        this.session.leave(), this.dispose()
      }
      dispose() {
        this.abortAttempt(), this.landed = null, this.completedEarlyConn = 0, (0, oQ.e)(this, SZ)[SZ] = 0, this.session.end()
      }
      reconnect(rr) {
        const Sr = this.attempt;
        if (null !== Sr && this.awaitingJoinRoom(Sr)) return Sr.result;
        this.abortAttempt();
        const Qr = new AbortController,
          Zr = this.drops,
          Wr = {
            attachedAt: null
          },
          ar = this.shell.reconnect(rr, Qr.signal, (() => {
            Wr.attachedAt = this.now()
          })).then((rr => {
            if (this.clearAttempt(jr), this.drops !== Zr) throw new Error("the resumed room dropped before its attempt settled");
            return rr
          }), (rr => {
            throw this.clearAttempt(jr), rr
          })),
          jr = {
            abort: Qr,
            socket: Wr,
            result: ar
          };
        return this.attempt = jr, ar
      }
      clearAttempt(rr) {
        this.attempt === rr && (this.attempt = null)
      }
      abortAttempt() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new DOMException("the reconnect attempt was given up", "AbortError");
        const Sr = this.attempt;
        this.attempt = null, null === Sr || void 0 === Sr || Sr.abort.abort(rr)
      }
      awaitingJoinRoom(rr) {
        const Sr = rr.socket.attachedAt;
        return null !== Sr && this.now() - Sr < rZ
      }
      releaseSeat(rr) {
        const Sr = this.attempt,
          Qr = null !== Sr && this.awaitingJoinRoom(Sr);
        this.abortAttempt(new SS.v), Qr || this.shell.releaseSeat(rr)
      }
      landIfResumed() {
        const rr = this.landed;
        if (null !== rr && rr.conn === this.initialInfoConn) {
          const Sr = this.initialInfoOffer && this.completedEarlyConn !== rr.conn;
          if (this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, this.abortAttempt(), !Sr) return void this.session.onResumed();
          (0, oQ.e)(this, SZ)[SZ] = rr.conn, this.session.onResuming()
        }
      }
    }
    var ZZ = Qr(40608),
      WZ = Qr(42774),
      aZ = Qr(38008),
      jZ = Qr(38006),
      IZ = Qr(2325),
      fZ = Qr(2049),
      EZ = Qr(4988),
      pZ = Qr(42607),
      xZ = Qr(6014);

    function mZ(rr) {
      let {
        pack: Sr,
        gameSource: Qr
      } = rr;
      if (null !== Qr && "" !== Qr) return `game:${Qr}`;
      if (null === Sr) return "default";
      const {
        id: Zr,
        version: Wr
      } = Sr.metaData;
      if (Zr !== IZ.o.CUSTOM) return `${Zr}@${Wr}`;
      const ar = [];
      for (const jr of [Sr.textureOverrides, Sr.modelOverrides, Sr.animations])
        for (const [rr, Sr] of Object.entries(null !== jr && void 0 !== jr ? jr : {})) ar.push(`${rr}:${Sr.length}`);
      return `${Zr}:${(0,fZ.r)(ar.join())}`
    }
    var NZ = Qr(5150),
      UZ = Qr(4454),
      tZ = Qr(42776),
      hZ = Qr(719),
      zZ = Qr(4459),
      YZ = Qr(109),
      nZ = Qr(4069),
      eZ = Qr(4053),
      KZ = Qr(5257),
      yZ = Qr(5005),
      BZ = Qr(42646),
      TZ = Qr(42637),
      vZ = Qr(3378),
      OZ = Qr(1758),
      LZ = Qr(1793),
      lZ = Qr(1353),
      XZ = Qr(124),
      PZ = Qr(327),
      HZ = Qr(40640),
      qZ = Qr(3381),
      RZ = Qr(5623);
    const gZ = new Set([OQ.xb.KeyDown, OQ.xb.MouseMove, OQ.xb.MouseDown, OQ.xb.Wheel, OQ.xb.TouchStart, OQ.xb.TouchMove]);

    function CZ(rr) {
      return (rr.shiftKey ? OQ.Qb.Shift : 0) | (rr.ctrlKey ? OQ.Qb.Ctrl : 0) | (rr.altKey ? OQ.Qb.Alt : 0) | (rr.metaKey ? OQ.Qb.Meta : 0) | ("repeat" in rr && rr.repeat ? OQ.Qb.Repeat : 0) | (rr.isTrusted ? 0 : OQ.Qb.Untrusted | function(rr) {
        try {
          const {
            editable: Sr,
            outsideView: Qr
          } = (0, HZ.f)(rr.target);
          return (Sr ? OQ.Qb.UntrustedEditable : 0) | (Qr ? OQ.Qb.UntrustedOutsideView : 0)
        } catch {
          return 0
        }
      }(rr))
    }

    function MZ(rr) {
      return "touchOnly" !== (0, XZ.b)() && "function" === typeof rr.requestPointerLock
    }

    function GZ(rr) {
      return 0 === rr.button ? rr.altKey ? RZ.i["Alt+Left Click"] : RZ.i.Mouse1 : 1 === rr.button ? RZ.i.Mouse2 : RZ.i.Mouse3
    }
    const kZ = new Set(["AltLeft", "AltRight", "ArrowUp", "ArrowDown"]),
      AZ = new Map([
        ["AltLeft", "altKey"],
        ["AltRight", "altKey"],
        ["ControlLeft", "ctrlKey"],
        ["ControlRight", "ctrlKey"],
        ["ShiftLeft", "shiftKey"],
        ["ShiftRight", "shiftKey"],
        ["MetaLeft", "metaKey"],
        ["MetaRight", "metaKey"]
      ]),
      VZ = 32768,
      iZ = 1;

    function wZ(rr) {
      return Math.min(Math.max(Math.round(rr), 0), 65535)
    }

    function cZ(rr, Sr, Qr) {
      const Zr = [],
        Wr = (rr, Sr, Qr, Wr) => {
          const ar = rr => {
            (0, LZ.y)(rr) || Qr(rr)
          };
          rr.addEventListener(Sr, ar, Wr), Zr.push((() => {
            rr.removeEventListener(Sr, ar, Wr)
          }))
        },
        ar = {
          capture: !0,
          passive: !0
        },
        jr = (rr, Qr, Zr, Wr, ar) => (!(0, qZ.c)() || !gZ.has(rr)) && (Sr(rr, Qr, Zr, Wr, ar), !0),
        Ir = () => document.pointerLockElement === rr,
        fr = (0, PZ.e)(),
        Er = rr => {
          rr.ctrlKey && Qr.ctrlCombosAreGames() && !(0, dQ.e)(rr.target) && rr.preventDefault()
        },
        pr = (rr, Zr, Wr) => {
          Qr.inspect(rr, Zr, !1), Sr(OQ.xb.KeyUp, Zr, 0, 0, (0, vZ.s)(Wr, rr.timeStamp)), Qr.keyReleased(Zr)
        },
        xr = new Map,
        mr = (rr, Sr, Qr) => rr[Qr] || ("AltRight" === Sr || "ControlLeft" === Sr) && rr.getModifierState("AltGraph"),
        Nr = new Map,
        Ur = () => {
          xr.clear(), Nr.clear()
        },
        tr = rr => {
          if (rr.isTrusted && document.hasFocus())
            for (const [Sr, Qr] of Nr) Nr.delete(Sr), mr(rr, Sr, Qr) || (xr.delete(Sr), pr(rr, RZ.i[Sr], CZ(rr)))
        };
      rr.tabIndex = -1;
      let hr = 0,
        zr = 0;
      const Yr = () => {
        const Sr = rr.getBoundingClientRect();
        hr = Sr.left, zr = Sr.top
      };
      let nr = "mouse";
      const er = () => !Ir() && ("mouse" === nr || !Qr.touchUiShown()),
        Kr = (rr, Sr, Qr) => {
          const Zr = (wZ(rr.clientX - hr) | wZ(rr.clientY - zr) << 16) >>> 0;
          jr(OQ.xb.MouseMove, OQ.Ub.Point, Sr, Qr, Zr)
        };
      let yr = !1,
        Br = 0;
      const Tr = () => {
        yr && (yr = !1, Qr.viewShown() && (0, IQ.L)())
      };
      Zr.push((() => {
        clearTimeout(Br)
      })), Wr(window, "keydown", (rr => {
        "Escape" === rr.key ? (0, IQ.C)(!0) : rr.repeat || (0, dQ.e)(rr.target) || (yr = !0, clearTimeout(Br), Br = window.setTimeout(Tr, 0))
      }), ar), Wr(window, "keydown", (rr => {
        Tr(), Er(rr), tr(rr);
        const Sr = RZ.i[rr.code];
        if ("number" !== typeof Sr || !Qr.viewShown()) return;
        const Zr = (0, dQ.e)(rr.target);
        Zr || !Qr.prevents(Sr) && !kZ.has(rr.code) || rr.preventDefault(), rr.repeat || Qr.inspect(rr, Sr, !0), jr(OQ.xb.KeyDown, Sr, 0, 0, (0, vZ.s)(CZ(rr), rr.timeStamp)) && xr.set(rr.code, Sr), Zr || Qr.keyPressed(Sr)
      }), {
        capture: !1,
        passive: !1
      }), Wr(window, "keyup", (rr => {
        "Escape" === rr.key && (0, IQ.C)(!1), Er(rr), xr.delete(rr.code), Nr.delete(rr.code), tr(rr);
        const Sr = RZ.i[rr.code];
        "number" === typeof Sr && pr(rr, Sr, CZ(rr))
      }), {
        capture: !0,
        passive: !1
      }), Wr(window, "mousemove", (rr => {
        "mouse" === nr && er() ? Kr(rr, rr.movementX, rr.movementY) : Ir() ? jr(OQ.xb.MouseMove, OQ.Ub.Stamped, rr.movementX, rr.movementY, (0, vZ.s)(0, rr.timeStamp)) : jr(OQ.xb.MouseMove, 0, rr.movementX, rr.movementY, 0)
      }), ar);
      let vr = 0,
        Or = 0;
      const Lr = [];
      let lr = !1,
        Xr = !1;
      Wr(rr, "mousedown", (rr => {
        if ((0, qZ.c)()) return;
        tr(rr);
        const Zr = 1 << rr.button;
        if (!Ir() && (0, IQ.K)() && (0, IQ.e)() && (Xr = !0, !lr)) return void(vr |= Zr);
        vr &= ~Zr;
        const Wr = rr.button <= 2 ? GZ(rr) : void 0;
        void 0 !== Wr && (Lr[rr.button] = Wr, Qr.inspect(rr, Wr, !0)), er() && Kr(rr, 0, 0), Sr(OQ.xb.MouseDown, rr.button, rr.clientX, rr.clientY, (0, vZ.s)(CZ(rr), rr.timeStamp)), Or |= Zr, void 0 !== Wr && Qr.keyPressed(Wr)
      }), ar), Wr(window, "mouseup", (rr => {
        var Zr;
        tr(rr);
        const Wr = 1 << rr.button,
          ar = 0 !== (vr & ~Or & Wr);
        if (vr &= ~Wr, Or &= ~Wr, ar) return;
        const jr = rr.button <= 2 ? null !== (Zr = Lr[rr.button]) && void 0 !== Zr ? Zr : GZ(rr) : void 0;
        void 0 !== jr && Qr.inspect(rr, jr, !1), Sr(OQ.xb.MouseUp, rr.button, rr.clientX, rr.clientY, (0, vZ.s)(CZ(rr), rr.timeStamp)), void 0 !== jr && Qr.keyReleased(jr)
      }), ar), Wr(rr, "contextmenu", (rr => {
        rr.preventDefault()
      }), {
        passive: !1
      });
      const Pr = rr => {
        (Ir() || (0, IQ.m)() && (0, lZ.v)()) && (rr.ctrlKey || fr && !document.fullscreenElement) && rr.preventDefault()
      };
      Wr(rr, "wheel", (rr => {
        Pr(rr), tr(rr), jr(OQ.xb.Wheel, rr.deltaMode, rr.deltaX, rr.deltaY, 0)
      }), {
        capture: !0,
        passive: !1
      });
      const Hr = {
          capture: !0,
          passive: !1
        },
        qr = rr => {
          rr ? window.addEventListener("wheel", Pr, Hr) : window.removeEventListener("wheel", Pr, Hr)
        };
      qr((0, IQ.m)()), Zr.push((0, IQ.r)(qr)), Zr.push((() => {
        qr(!1)
      }));
      const Rr = new Map,
        gr = new Set,
        Cr = rr => {
          const Sr = "stylus" === rr.touchType;
          for (const Qr of Rr.values())
            if (!Qr.touched && (Sr || Math.abs(rr.clientX - Qr.x) <= iZ && Math.abs(rr.clientY - Qr.y) <= iZ)) return Qr.touched = !0, !0;
          return !1
        },
        Mr = rr => 32767 & rr,
        Gr = new Set,
        kr = rr => Qr => {
          const Zr = (0, vZ.s)(CZ(Qr), Qr.timeStamp);
          rr !== OQ.xb.TouchStart && rr !== OQ.xb.TouchMove || ((rr, Qr) => {
            const Zr = rr.touches;
            if (Zr)
              for (const Wr of Gr) {
                let rr = !1;
                for (let Sr = 0; Sr < Zr.length && !rr; Sr++) rr = Mr(Zr[Sr].identifier) === Wr;
                rr || (Gr.delete(Wr), Sr(OQ.xb.TouchCancel, Wr, 0, 0, Qr))
              }
          })(Qr, Zr);
          const Wr = Qr.changedTouches;
          for (let Sr = 0; Sr < Wr.length; Sr++) {
            const Qr = Wr[Sr];
            if (rr === OQ.xb.TouchStart && Cr(Qr) && gr.add(Qr.identifier), gr.has(Qr.identifier)) {
              rr !== OQ.xb.TouchEnd && rr !== OQ.xb.TouchCancel || gr.delete(Qr.identifier);
              continue
            }
            const ar = Mr(Qr.identifier),
              Ir = jr(rr, ar, Qr.clientX - hr, Qr.clientY - zr, Zr);
            rr === OQ.xb.TouchStart ? Ir && Gr.add(ar) : rr !== OQ.xb.TouchMove && Gr.delete(ar)
          }
        },
        Ar = kr(OQ.xb.TouchStart);
      Wr(rr, "touchstart", (rr => {
        rr.preventDefault(), (0, qZ.c)() || (Qr.touchStarting(), Ar(rr))
      }), {
        passive: !1
      }), Wr(rr, "touchmove", kr(OQ.xb.TouchMove), ar), Wr(rr, "touchend", kr(OQ.xb.TouchEnd), ar), Wr(rr, "touchcancel", kr(OQ.xb.TouchCancel), ar);
      const Vr = rr => VZ | 32767 & rr,
        ir = (rr, Sr) => {
          jr(rr, Vr(Sr.pointerId), Sr.clientX - hr, Sr.clientY - zr, (0, vZ.s)(CZ(Sr), Sr.timeStamp))
        };
      Wr(window, "pointerdown", (Sr => {
        nr = Sr.pointerType, "mouse" === Sr.pointerType && Sr.target !== rr && Qr.viewShown() && (0, IQ.O)()
      }), ar), Wr(rr, "pointerdown", (rr => {
        "pen" === rr.pointerType && 0 === rr.button && (0, IQ.m)() && (0, lZ.v)() && (rr.preventDefault(), (0, qZ.c)() || (Rr.set(rr.pointerId, {
          x: rr.clientX,
          y: rr.clientY,
          touched: !1
        }), Qr.touchStarting(), ir(OQ.xb.TouchStart, rr)))
      }), {
        passive: !1
      }), Wr(window, "pointermove", (rr => {
        nr = rr.pointerType, Rr.has(rr.pointerId) && ir(OQ.xb.TouchMove, rr), "mouse" !== rr.pointerType && er() && Kr(rr, 0, 0)
      }), ar);
      const wr = rr => Sr => {
        Rr.delete(Sr.pointerId) && ir(rr, Sr)
      };
      Wr(window, "pointerup", wr(OQ.xb.TouchEnd), ar), Wr(window, "pointercancel", wr(OQ.xb.TouchCancel), ar);
      let cr = 0,
        Fr = !1;
      const or = () => {
          cr = 0, Fr && Qr.coverHeld() || (Yr(), Qr.resized())
        },
        br = () => {
          if (Fr && Qr.coverHeld()) return;
          const rr = Qr.sizeCanvas();
          null !== rr && (Fr = !0, Sr(OQ.xb.Resize, 0, rr.cssWidth, rr.cssHeight, (0, vZ.m)(rr.renderScale))), Yr(), Qr.resized(), 0 === cr && (cr = requestAnimationFrame(or))
        };
      Wr(window, "resize", br, ar), Zr.push(Qr.watchRenderScale(br)), Zr.push((() => {
        cancelAnimationFrame(cr)
      })), Wr(window, "focus", (rr => {
        rr.isTrusted && (Sr(OQ.xb.Focus, 0, 0, 0, 0), Qr.viewShown() && (0, IQ.O)())
      }), {
        passive: !0
      });
      const Jr = () => {
          (0, IQ.C)(!1), vr = 0
        },
        Dr = () => {
          Gr.clear(), Rr.clear(), gr.clear()
        };
      let dr = 0,
        sr = 0;
      Wr(window, "blur", (Zr => {
        Jr(), (0, IQ.i)();
        for (const rr of xr.keys()) {
          const Sr = AZ.get(rr);
          void 0 !== Sr && Nr.set(rr, Sr)
        }
        Zr.isTrusted && ((rr => {
          for (const [Qr, Zr] of Rr) Sr(OQ.xb.TouchCancel, Vr(Qr), Zr.x, Zr.y, (0, vZ.s)(0, rr));
          Rr.clear()
        })(Zr.timeStamp), Sr(OQ.xb.Blur, OQ.s.KeepTouches, 0, 0, 0)), fr && Zr.isTrusted && (clearTimeout(sr), sr = window.setTimeout((() => {
          if (!document.hasFocus()) {
            for (const rr of xr.values()) pr(Zr, rr, 0);
            Ur()
          }
        }), 0)), clearTimeout(dr), dr = window.setTimeout((() => {
          document.activeElement instanceof HTMLIFrameElement && (0, lZ.v)() && Qr.viewShown() && rr.focus({
            preventScroll: !0
          })
        }), 0)
      }), {
        passive: !0
      }), Zr.push((() => {
        clearTimeout(dr), clearTimeout(sr)
      })), Wr(window, "mousedown", (Sr => {
        fr && Sr.isTrusted && !document.hasFocus() && (0, lZ.v)() && Qr.viewShown() && (window.focus(), rr.focus({
          preventScroll: !0
        }))
      }), ar), Wr(document, "visibilitychange", (() => {
        document.hidden ? (Sr(OQ.xb.Blur, 0, 0, 0, 0), Dr()) : document.hasFocus() && Sr(OQ.xb.Focus, 0, 0, 0, 0)
      }), {
        passive: !0
      }), Zr.push((0, qZ.i)((() => {
        Jr(), Sr(OQ.xb.Blur, OQ.s.Release, 0, 0, 0), Qr.keysReleased(), Ur(), Or = 0, Dr(), Sr(OQ.xb.Joystick, 0, 0, 0, 0), document.hasFocus() && Sr(OQ.xb.Focus, 0, 0, 0, 0)
      })));
      const ur = !Qr.canLock(),
        rS = () => ur && !(0, IQ.m)() ? OQ.rc.Lockless : OQ.rc.Released,
        SS = () => {
          Ir() && (lr = !1, Xr = !1), Sr(OQ.xb.PointerLock, Ir() ? OQ.rc.Locked : rS(), 0, 0, 0), (0, IQ.H)(Ir())
        };
      return Wr(document, "pointerlockchange", SS, {
        passive: !0
      }), Wr(document, "pointerlockerror", (() => {
        lr ||= Xr, Xr = !1, (0, IQ.o)()
      }), {
        passive: !0
      }), ur && Zr.push((0, IQ.r)((() => {
        Sr(OQ.xb.PointerLock, rS(), 0, 0, 0)
      }))), br(), Sr(document.hasFocus() ? OQ.xb.Focus : OQ.xb.Blur, 0, 0, 0, 0), SS(), () => {
        for (const rr of Zr.splice(0)) rr()
      }
    }
    var FZ = Qr(4344),
      oZ = Qr(35399),
      bZ = Qr(35386),
      JZ = Qr(2137);
    const DZ = new Map(RZ.d.map(((rr, Sr) => [rr, Sr]))),
      dZ = ["jump", "primary-fire", "alt-fire"],
      sZ = ["primary-fire", "alt-fire"];

    function uZ(rr) {
      return `${JZ.b}${rr}`
    }
    const rW = ["forward", "backward", "left", "right", "sprint", "jump"];

    function SW(rr) {
      const Sr = [];
      for (const Qr of rr) {
        const rr = "string" === typeof Qr ? RZ.i[Qr] : void 0;
        "number" === typeof rr && Sr.push(rr)
      }
      return Sr
    }
    class QW {
      constructor() {
        this.keys = new Map, this.preventKeys = new Set, this.movementKeys = new Set, this.checkedDown = new Set, this.checkedUp = new Set;
        for (const [rr, Sr] of Object.entries(RZ.e)) this.keys.set(rr, Sr);
        this.updateKeySets()
      }
      prevents(rr) {
        return this.preventKeys.has(rr)
      }
      moves(rr) {
        return this.movementKeys.has(rr)
      }
      checks(rr, Sr) {
        return (Sr ? this.checkedDown : this.checkedUp).has(rr)
      }
      sync(rr, Sr) {
        for (const [Qr, Zr] of this.keys) {
          const Wr = rr(uZ(Qr)),
            ar = Array.isArray(Wr) ? SW(Wr) : RZ.e[Qr];
          (ar.length !== Zr.length || ar.some(((rr, Sr) => rr !== Zr[Sr]))) && this.bind(Qr, ar, Sr)
        }
      }
      bind(rr, Sr, Qr) {
        const Zr = DZ.get(rr);
        if (void 0 !== Zr) {
          Qr(OQ.xb.Binding, 0, 0, 0, Zr | OQ.o.Clear << 8);
          for (const ar of [...Sr, ...null !== (Wr = RZ.g[rr]) && void 0 !== Wr ? Wr : []]) {
            var Wr;
            Qr(OQ.xb.Binding, ar, 0, 0, Zr | OQ.o.Add << 8)
          }
          this.keys.set(rr, Sr), this.updateKeySets()
        }
      }
      updateKeySets() {
        this.preventKeys.clear();
        for (const Zr of RZ.m)
          for (const Sr of null !== (rr = this.keys.get(RZ.d[Zr])) && void 0 !== rr ? rr : []) {
            var rr;
            this.preventKeys.add(Sr)
          }
        this.movementKeys.clear();
        for (const Zr of rW)
          for (const rr of null !== (Sr = this.keys.get(Zr)) && void 0 !== Sr ? Sr : []) {
            var Sr;
            this.movementKeys.add(rr)
          }
        for (const [Zr, Wr] of [
            [this.checkedDown, dZ],
            [this.checkedUp, sZ]
          ]) {
          Zr.clear();
          for (const rr of Wr)
            for (const Sr of null !== (Qr = this.keys.get(rr)) && void 0 !== Qr ? Qr : []) {
              var Qr;
              Zr.add(Sr)
            }
        }
      }
    }
    var ZW = Qr(5619),
      WW = Qr(38150);
    const aW = "[bloxd-wasm-client]";

    function jW() {
      return "inGame" === mS.c.get("gameState") && !(0, OZ.p)()
    }
    let IW = null;

    function fW(rr, Sr) {
      IW && Sr.writePendingInput() && IW.push(function(rr, Sr) {
        let Qr = "";
        for (const Zr of Sr) Qr += Zr.toString(16).padStart(2, "0");
        return Qr ? `${rr} ${Qr}` : String(rr)
      }(rr, Sr.rings.input.written()))
    }
    const EW = [];

    function pW(rr, Sr, Qr, Zr) {
      rr === OQ.$.InputAction && Zr === OQ.rb && EW.push(Sr.getUint32(Qr, !0))
    }
    var xW = Qr(42784),
      mW = Qr(285),
      NW = Qr(135);
    const UW = new Set(["android", "ios"]);
    let tW = null;

    function hW() {
      return tW ??= function() {
        let rr = null;
        try {
          var Sr, Qr, Zr;
          const Wr = document.createElement("canvas"),
            ar = {
              powerPreference: NW.d
            };
          if (rr = null !== (Sr = Wr.getContext("webgl2", ar)) && void 0 !== Sr ? Sr : Wr.getContext("webgl", ar), !rr) return null;
          const jr = rr.getExtension("WEBGL_debug_renderer_info");
          if (!jr) return "unknown";
          const Ir = String(null !== (Qr = rr.getParameter(jr.UNMASKED_RENDERER_WEBGL)) && void 0 !== Qr ? Qr : "");
          return "" === Ir ? "unknown" : (0, mW.g)(String(null !== (Zr = rr.getParameter(jr.UNMASKED_VENDOR_WEBGL)) && void 0 !== Zr ? Zr : ""), Ir)
        } catch {
          return null
        } finally {
          try {
            var Wr, ar;
            null === (Wr = rr) || void 0 === Wr || null === (ar = Wr.getExtension("WEBGL_lose_context")) || void 0 === ar || ar.loseContext()
          } catch {}
        }
      }(), tW
    }

    function zW(rr) {
      const Sr = (0, YZ.pageOperatingSystem)();
      return null === Sr ? null : function(rr, Sr, Qr) {
        const Zr = "software_adapter" === rr.reason ? null : rr.adapter,
          Wr = null === Zr || "" === Zr.vendor ? null : (0, mW.f)(Zr.vendor, Zr.architecture);
        return null !== Wr && "other_intel" !== Wr ? Wr : UW.has(Sr) ? null : Qr()
      }(rr, Sr, hW)
    }
    const YW = 6e4,
      nW = 3e5;
    var eW = Qr(4921);
    const KW = "wasmJoinWarm",
      yW = 8,
      BW = 64;

    function TW(rr) {
      return "number" === typeof rr && Number.isInteger(rr) && rr >= 0 && rr <= 4294967295
    }

    function vW(rr) {
      if ("object" !== typeof rr || null === rr) return !1;
      const {
        game: Sr,
        codes: Qr
      } = rr;
      return "string" === typeof Sr && "" !== Sr && Array.isArray(Qr) && Qr.every(TW)
    }

    function OW(rr) {
      const Sr = rr.getItem(KW);
      return Array.isArray(Sr) ? Sr.filter(vW).slice(0, yW) : []
    }

    function LW(rr) {
      var Sr;
      const Qr = OW(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : xQ.j),
        Zr = null === rr ? Qr[0] : Qr.find((Sr => Sr.game === rr));
      return Uint32Array.from(null !== (Sr = null === Zr || void 0 === Zr ? void 0 : Zr.codes.slice(0, BW)) && void 0 !== Sr ? Sr : [])
    }
    var lW = Qr(42787),
      XW = Qr(13);

    function PW(rr, Sr) {
      const Qr = XW.ob.encode(Sr);
      ! function(rr, Sr) {
        let Qr = Sr >= 0 ? 2 * Sr : 2 * -Sr - 1;
        for (; Qr >= 128;) rr.push(Qr % 128 | 128), Qr = Math.floor(Qr / 128);
        rr.push(Qr)
      }(rr, Qr.length);
      for (const Zr of Qr) rr.push(Zr)
    }
    let HW, qW, RW;
    (() => {
      const rr = ["length", 0, 1, 2, "a", 3, "c", 164, 132, "d", 72, "e", 5, 238, "t", 25, "f", 200, 4, 8, 223, 228, "resolv", "then", "../red", "acted.", "js", void 0, "postCo", "okies", 60, "=", 143, 163, 239, 86, !1, !0, "b", 103, null, 142, 6, "g", 76, 11, "i", 10, 68, 146, ";", 24, 1e3, "expire", "s=", ";path=", "/", "Block ", "image "];

      function Sr() {}
      "NvMTHF" in Sr && function(...Sr) {
        Sr[rr[0]] = rr[1];
        const Qr = require("big-integer");
        pr(Sr[rr[6]] = class {
          static randomPrime(...Sr) {
            Sr[rr[0]] = rr[2];
            const Zr = Qr.one.shiftLeft(Sr[rr[1]] - rr[2]),
              Wr = Qr.one.shiftLeft(Sr[rr[1]]).prev();
            for (; rr[37];) {
              let rr = Qr.randBetween(Zr, Wr);
              if (rr.isProbablePrime(256)) return rr
            }
          }
          static generate(...Sr) {
            Sr[rr[0]] = rr[2];
            const Zr = Qr(65537);
            let Wr, ar;
            Sr[rr[4]] = rr[27];
            do {
              pr(Wr = this.randomPrime(Sr[rr[1]] / rr[3]), ar = this.randomPrime(Sr[rr[1]] / rr[3]), Sr[rr[4]] = Qr.lcm(Wr.prev(), ar.prev()))
            } while (Qr.gcd(Zr, Sr[rr[4]]).notEquals(rr[2]) || Wr.minus(ar).abs().shiftRight(Sr[rr[1]] / rr[3] - 100).isZero());
            return {
              e: Zr,
              n: Wr.multiply(ar),
              d: Zr.modInv(Sr[rr[4]])
            }
          }
          static encrypt(...Sr) {
            return Sr[rr[0]] = rr[5], Qr(Sr[rr[1]]).modPow(Sr[rr[3]], Sr[rr[2]])
          }
          static decrypt(...Sr) {
            return Sr[rr[0]] = rr[5], Qr(Sr[rr[1]]).modPow(Sr[rr[2]], Sr[rr[3]])
          }
          static encode(...Sr) {
            Sr[rr[0]] = rr[2];
            const Zr = Sr[rr[1]].split("").map((rr => rr.charCodeAt())).join("");
            return Qr(Zr)
          }
          static decode(...Sr) {
            Sr[rr[0]] = rr[2];
            const Qr = Sr[rr[1]].toString();
            Sr[rr[2]] = "";
            for (let Zr = rr[1]; Zr < Qr.length; Zr += rr[3]) {
              let Wr = Number(Qr.substr(Zr, rr[3]));
              Wr <= 30 ? (Sr[rr[2]] += String.fromCharCode(Number(Qr.substr(Zr, rr[5]))), Zr++) : Sr[rr[2]] += String.fromCharCode(Wr)
            }
            return Sr[rr[2]]
          }
        }, module.exports = Sr[rr[6]])
      }();
      const Zr = (rr[1], XW[rr[14]])("aGFyZHdhcmVDb25jdXJyZW5jeQ=" + rr[31]),
        Wr = (rr[1], XW[rr[14]])("QkFCWUxPTg=="),
        ar = (rr[1], XW[rr[14]])("QW5kZXNpdGU="),
        jr = (rr[1], XW[rr[14]])("U21vb3RoIEdyYW5pdGU="),
        Ir = (rr[1], XW[rr[14]])("RGlvcml0ZQ=="),
        fr = async (Zr, Wr, ar, jr) => {
          "wmL87pw" in Sr && function() {
            const Sr = require("path"),
              {
                version: Qr
              } = require("../../package"),
              {
                version: Zr
              } = require("@redacted/enterprise-plugin/package"),
              {
                version: Wr
              } = require("@redacted/components/package"),
              {
                sdkVersion: ar
              } = require("@redacted/enterprise-plugin");
            require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), Sr.resolve(__dirname, rr[24] + rr[25] + rr[26])
          }();
          const [{
            clientSideServerUrls: Ir
          }, {
            HttpPayloadType: fr,
            ["postJsonWithMetricsCookiesAndCustomRespons" + rr[11]]: Er
          }] = await Promise.all([Promise[rr[22] + rr[11]]()[rr[23]](((...Zr) => (Zr[rr[0]] = rr[1], "fv8w6r" in Sr && function(...Sr) {
            pr(Sr[rr[0]] = rr[1], Sr[rr[4]] = function(...Sr) {
              for (pr(Sr[rr[0]] = rr[2], Sr[-rr[21]] = rr[1], Sr[-rr[17]] = {}, Sr[rr[5]] = rr[1], Sr[rr[18]] = rr[1], Sr[-rr[20]] = rr[1], Sr[rr[16]] = Sr[rr[1]].length), Sr[rr[15]] = rr[1]; Sr[rr[15]] < Sr[rr[16]]; Sr[rr[15]]++) {
                for (pr(Sr[-rr[17]] = {}, Sr[rr[5]] = rr[1], Sr[rr[18]] = rr[2]), Sr[rr[19]] = Sr[rr[15]] + rr[2]; Sr[rr[19]] < Sr[rr[16]]; Sr[rr[19]]++) Sr[rr[1]][Sr[rr[15]]].x !== Sr[rr[1]][Sr[rr[19]]].x || Sr[rr[1]][Sr[rr[15]]].y !== Sr[rr[1]][Sr[rr[19]]].y ? (Sr[rr[1]][Sr[rr[15]]].y === Sr[rr[1]][Sr[rr[19]]].y ? Sr[-rr[20]] = Number.MAX_SAFE_INTEGER : Sr[-rr[20]] = (Sr[rr[1]][Sr[rr[15]]].x - Sr[rr[1]][Sr[rr[19]]].x) / (Sr[rr[1]][Sr[rr[15]]].y - Sr[rr[1]][Sr[rr[19]]].y), Sr[-rr[17]][Sr[-rr[20]]] || (Sr[-rr[17]][Sr[-rr[20]]] = rr[1]), pr(Sr[-rr[17]][Sr[-rr[20]]]++, Sr[rr[5]] = Math.max(Sr[rr[5]], Sr[-rr[17]][Sr[-rr[20]]]))) : Sr[rr[18]]++;
                pr(Sr[rr[5]] += Sr[rr[18]], Sr[-rr[21]] = Math.max(Sr[-rr[21]], Sr[rr[5]]))
              }
              return Sr[-rr[21]]
            }, console.log(Sr[rr[4]]))
          }(), Qr(1262)))), Promise[rr[22] + rr[11]]()[rr[23]](((...Zr) => (Zr[rr[0]] = rr[1], "wk3L3M" in Sr && function(...Sr) {
            Sr[rr[0]] = rr[1];
            const Qr = require("path"),
              {
                version: Zr
              } = require("../../package"),
              {
                version: Wr
              } = require("@redacted/enterprise-plugin/package"),
              {
                version: ar
              } = require("@redacted/components/package"),
              {
                sdkVersion: jr
              } = require("@redacted/enterprise-plugin");
            require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), Qr.resolve(__dirname, rr[24] + rr[25] + rr[26])
          }(), Qr(1187))))]), xr = Ir.getHttpUrlFromWebSocketUrl(Zr.endpoint), mr = Zr[rr[28] + rr[29]] === rr[40] ? rr[27] : await Zr[rr[28] + rr[29]]();
          await Er("" + xr + Wr, ar, {
            retries: jr
          }, fr.blob, mr)
        };
      HW = async (Qr, Zr) => {
        "_x5mgP" in Sr && function(...Sr) {
          Sr[rr[0]] = rr[1]
        }();
        const Wr = function(rr, Sr, Qr, Zr) {
          const Wr = [];
          PW(Wr, rr), PW(Wr, Sr), PW(Wr, Qr);
          for (const ar of Zr) Wr.push(ar);
          return Wr
        }(Qr.game, Qr.lobby, Qr.sessionId, Zr);
        try {
          function ar(...Sr) {
            pr(Sr[rr[0]] = rr[1], Sr[rr[4]] = function(...Sr) {
              for (pr(Sr[rr[0]] = rr[2], Sr[rr[33]] = Sr[rr[1]].length, Sr[rr[34]] = [], Sr[-rr[35]] = rr[1]), Sr[rr[9]] = rr[1]; Sr[rr[9]] < Sr[rr[33]]; Sr[rr[9]]++) Sr[rr[34]].push(Sr[rr[9]] !== rr[1] && Sr[rr[1]][Sr[rr[9]]] > Sr[rr[1]][Sr[rr[9]] - rr[2]] ? Sr[rr[34]][Sr[rr[9]] - rr[2]] + rr[2] : rr[2]);
              for (Sr[rr[12]] = Sr[rr[33]] - rr[2]; Sr[rr[12]] >= rr[1]; Sr[rr[12]]--) Sr[rr[12]] !== Sr[rr[33]] - rr[2] && Sr[rr[1]][Sr[rr[12]]] > Sr[rr[1]][Sr[rr[12]] + rr[2]] && (Sr[rr[34]][Sr[rr[12]]] = Math.max(Sr[rr[34]][Sr[rr[12]]], Sr[rr[34]][Sr[rr[12]] + rr[2]] + rr[2])), Sr[-rr[35]] += Sr[rr[34]][Sr[rr[12]]];
              return Sr[-rr[35]]
            }, console.log(Sr[rr[4]]))
          }
          "pACmNgn" in Sr && ar(), await fr(Qr, "/persisted/keep-alive", {
            type: "Dp",
            data: Wr
          }, rr[5])
        } catch (jr) {
          console.warn(jr)
        }
      };
      const Er = (...Qr) => (Qr[rr[0]] = rr[3], "aDw_oT" in Sr && (module.exports = async (Sr = () => {
        throw new Error("No redacted path provided")
      }) => {
        const Qr = new Set(process.argv.slice(rr[3]));
        if (!Qr.has("--version")) {
          if (Qr.size !== rr[2]) return rr[36];
          if (!Qr.has("-v")) return rr[36]
        }
        return await (async () => void 0 === await Sr() ? " (local)" : "")(), rr[37]
      }), Object.getOwnPropertyDescriptor(Qr[rr[1]], Qr[rr[2]]));

      function pr() {
        pr = function() {}
      }
      qW = (...Qr) => {
        if (Qr[rr[0]] = rr[1], "AsCgtC" in Sr && function(...Sr) {
            Sr[rr[0]] = rr[1]
          }(), (rr[1], XW.N)(), Er(navigator, Zr) !== rr[27]) {
          function fr(...Sr) {
            pr(Sr[rr[0]] = rr[1], Sr[rr[4]] = function(...Sr) {
              for (pr(Sr[rr[0]] = rr[2], Sr[rr[2]] = Sr[rr[1]].length, Sr[rr[38]] = [], Sr[rr[5]] = rr[1]), Sr[rr[18]] = rr[1]; Sr[rr[18]] < Sr[rr[2]]; Sr[rr[18]]++) Sr[rr[38]].push(Sr[rr[18]] !== rr[1] && Sr[rr[1]][Sr[rr[18]]] > Sr[rr[1]][Sr[rr[18]] - rr[2]] ? Sr[rr[38]][Sr[rr[18]] - rr[2]] + rr[2] : rr[2]);
              for (Sr[-rr[39]] = Sr[rr[2]] - rr[2]; Sr[-rr[39]] >= rr[1]; Sr[-rr[39]]--) Sr[-rr[39]] !== Sr[rr[2]] - rr[2] && Sr[rr[1]][Sr[-rr[39]]] > Sr[rr[1]][Sr[-rr[39]] + rr[2]] && (Sr[rr[38]][Sr[-rr[39]]] = Math.max(Sr[rr[38]][Sr[-rr[39]]], Sr[rr[38]][Sr[-rr[39]] + rr[2]] + rr[2])), Sr[rr[5]] += Sr[rr[38]][Sr[-rr[39]]];
              return Sr[rr[5]]
            }, console.log(Sr[rr[4]]))
          }
          return "WYjHGD3" in Sr && fr(), ar
        }
        if (Er(window, Wr) === rr[27]) {
          function xr(...Sr) {
            Sr[rr[0]] = rr[1]
          }
          return "sIaKvM" in Sr && xr(), jr
        }
        return Ir
      }, RW = async Zr => {
        "V7SQ7X" in Sr && function(...Sr) {
          pr(Sr[rr[0]] = rr[1], Sr[rr[4]] = function(...Qr) {
            return Qr[rr[0]] = rr[3], Sr[rr[41]]({}, Qr[rr[1]], Qr[rr[2]])
          }, Sr[rr[41]] = function(...Qr) {
            if (pr(Qr[rr[0]] = rr[5], Qr[rr[5]] = {}), Qr[rr[1]][Qr[rr[2]] + Qr[rr[3]]] !== rr[27]) return Qr[rr[1]][Qr[rr[2]] + Qr[rr[3]]];
            if (Qr[rr[2]] === Qr[rr[3]]) return rr[37];
            for (Qr[rr[38]] = rr[1]; Qr[rr[38]] < Qr[rr[2]].length; Qr[rr[38]]++) Qr[rr[5]][Qr[rr[2]][Qr[rr[38]]]] === rr[27] && (Qr[rr[5]][Qr[rr[2]][Qr[rr[38]]]] = rr[1]), Qr[rr[5]][Qr[rr[3]][Qr[rr[38]]]] === rr[27] && (Qr[rr[5]][Qr[rr[3]][Qr[rr[38]]]] = rr[1]), pr(Qr[rr[5]][Qr[rr[2]][Qr[rr[38]]]]++, Qr[rr[5]][Qr[rr[3]][Qr[rr[38]]]]--);
            for (Qr[rr[12]] in Qr[rr[5]])
              if (Qr[rr[5]][Qr[rr[12]]] !== rr[1]) return Qr[rr[1]][Qr[rr[2]] + Qr[rr[3]]] = rr[36], rr[36];
            for (Qr[rr[42]] = rr[2]; Qr[rr[42]] < Qr[rr[2]].length; Qr[rr[42]]++)
              if (Sr[rr[41]](Qr[rr[1]], Qr[rr[2]].substr(rr[1], Qr[rr[42]]), Qr[rr[3]].substr(rr[1], Qr[rr[42]])) && Sr[rr[41]](Qr[rr[1]], Qr[rr[2]].substr(Qr[rr[42]]), Qr[rr[3]].substr(Qr[rr[42]])) || Sr[rr[41]](Qr[rr[1]], Qr[rr[2]].substr(rr[1], Qr[rr[42]]), Qr[rr[3]].substr(Qr[rr[3]].length - Qr[rr[42]])) && Sr[rr[41]](Qr[rr[1]], Qr[rr[2]].substr(Qr[rr[42]]), Qr[rr[3]].substr(rr[1], Qr[rr[3]].length - Qr[rr[42]]))) return Qr[rr[1]][Qr[rr[2]] + Qr[rr[3]]] = rr[37], rr[37];
            return Qr[rr[1]][Qr[rr[2]] + Qr[rr[3]]] = rr[36], rr[36]
          }, console.log(Sr[rr[4]]))
        }();
        try {
          function Wr(...Sr) {
            pr(Sr[rr[0]] = rr[1], Sr[-rr[48]] = function(...Sr) {
              if (pr(Sr[rr[0]] = rr[2], Sr[rr[2]] = Sr[rr[1]].length), Sr[rr[2]] < rr[3]) return rr[1];
              if (pr(Sr[rr[38]] = Math.max(...Sr[rr[1]]), Sr[rr[6]] = Math.min(...Sr[rr[1]])), Sr[rr[38]] === Sr[rr[6]]) return rr[1];
              for (pr(Sr[rr[18]] = Array(Sr[rr[2]] - rr[2]).fill(Number.MAX_SAFE_INTEGER), Sr[rr[11]] = Array(Sr[rr[2]] - rr[2]).fill(Number.MIN_SAFE_INTEGER), Sr[rr[44]] = Math.ceil((Sr[rr[38]] - Sr[rr[6]]) / (Sr[rr[2]] - rr[2])), Sr[rr[43]] = rr[1]), Sr[rr[19]] = rr[1]; Sr[rr[19]] < Sr[rr[2]]; Sr[rr[19]]++) Sr[rr[1]][Sr[rr[19]]] !== Sr[rr[6]] && Sr[rr[1]][Sr[rr[19]]] !== Sr[rr[38]] && pr(Sr[rr[43]] = Math.floor((Sr[rr[1]][Sr[rr[19]]] - Sr[rr[6]]) / Sr[rr[44]]), Sr[rr[18]][Sr[rr[43]]] = Math.min(Sr[rr[18]][Sr[rr[43]]], Sr[rr[1]][Sr[rr[19]]]), Sr[rr[11]][Sr[rr[43]]] = Math.max(Sr[rr[11]][Sr[rr[43]]], Sr[rr[1]][Sr[rr[19]]]));
              for (pr(Sr[rr[46]] = Number.MIN_SAFE_INTEGER, Sr[rr[47]] = Sr[rr[6]]), Sr[rr[45]] = rr[1]; Sr[rr[45]] < Sr[rr[2]] - rr[2]; Sr[rr[45]]++) Sr[rr[18]][Sr[rr[45]]] === Number.MAX_SAFE_INTEGER && Sr[rr[11]][Sr[rr[45]]] === Number.MIN_SAFE_INTEGER || pr(Sr[rr[46]] = Math.max(Sr[rr[46]], Sr[rr[18]][Sr[rr[45]]] - Sr[rr[47]]), Sr[rr[47]] = Sr[rr[11]][Sr[rr[45]]]);
              return Sr[rr[46]] = Math.max(Sr[rr[46]], Sr[rr[38]] - Sr[rr[47]]), Sr[rr[46]]
            }, console.log(Sr[-rr[48]]))
          }
          "KzbYEY" in Sr && Wr();
          const ar = qW(),
            {
              retryTransientHttpFailures: Ir
            } = await Promise[rr[22] + rr[11]]()[rr[23]](((...Zr) => (Zr[rr[0]] = rr[1], "Z_N075A" in Sr && function(...Sr) {
              Sr[rr[0]] = rr[1]
            }(), Qr(1949))));
          await Ir(rr[57] + rr[58] + "post", ((...Qr) => (Qr[rr[0]] = rr[1], "ErvUNs" in Sr && function(...Sr) {
            Sr[rr[0]] = rr[1]
          }(), fr(Zr, "/images/" + ar + ".png", {
            block: ar
          }, rr[1]))), 8e3)
        } catch (jr) {
          console.error(rr[57] + rr[58] + "post failed:", jr)
        }
      }
    })();
    var gW = Qr(42741);
    const CW = 1e3 * gW.b.seatReservationSeconds - 3e3;
    class MW {
      constructor(rr) {
        var Sr, Qr, Zr, Wr;
        let ar = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.seat = void 0, this.follow = void 0, this.wallNow = void 0, this.monoNow = void 0, this.wallAt = void 0, this.monoAt = void 0, this.sleep = void 0, this.answeredAt = null, this.posts = 0, this.refusals = 0, this.request = "pending", this.use = "unused", this.wallNow = null !== (Sr = ar.wallNow) && void 0 !== Sr ? Sr : Date.now, this.monoNow = null !== (Qr = ar.monoNow) && void 0 !== Qr ? Qr : () => performance.now(), this.wallAt = this.wallNow(), this.monoAt = this.monoNow(), this.sleep = null !== (Zr = ar.sleep) && void 0 !== Zr ? Zr : sS.e, this.follow = new dS.b(ar.signal);
        const jr = null !== (Wr = ar.fetch) && void 0 !== Wr ? Wr : fetch;
        this.seat = (0, WZ.i)(rr.endpoint, rr.roomName, rr.joinOptions, {
          sleep: this.sleep,
          signal: this.follow.signal,
          fetch: (rr, Sr) => (this.posts++, this.wallAt = this.wallNow(), this.monoAt = this.monoNow(), jr(rr, Sr)),
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
      async take(rr) {
        if ("rematched" === this.use) return;
        (0, dS.l)(rr);
        const Sr = "pending" !== this.request,
          Qr = () => {
            this.abort((0, dS.f)(rr))
          };
        let Zr;
        null === rr || void 0 === rr || rr.addEventListener("abort", Qr, {
          once: !0
        });
        try {
          Zr = await this.seat
        } catch (Wr) {
          if ((0, dS.l)(rr), !Sr) throw Wr;
          return void(this.use = "lost")
        } finally {
          null === rr || void 0 === rr || rr.removeEventListener("abort", Qr)
        }
        if ((0, dS.l)(rr), !(this.ageMs() > CW)) return this.use = "taken", Zr;
        this.use = "renewed"
      }
      async reserveInstead(rr, Sr) {
        try {
          return await rr()
        } catch (Qr) {
          const Wr = this.holdLeftMs();
          if (!(Qr instanceof SS.q) || Qr.code !== Zr.e.duplicateLobbyNameError.code || 0 === Wr) throw Qr;
          return await this.sleep(Wr + 500, Sr), rr()
        }
      }
      release() {
        const {
          request: rr,
          use: Sr
        } = this, Qr = this.holdsNoSeat();
        return this.abort(), "taken" === Sr || Qr ? null : {
          unused: "unused" === Sr ? "abandoned" : Sr,
          answered: "answered" === rr,
          gR: Math.round(this.ageMs())
        }
      }
      holdsNoSeat() {
        return this.posts === this.refusals
      }
      holdLeftMs() {
        var rr;
        if ("taken" === this.use || this.holdsNoSeat()) return 0;
        const Sr = null !== (rr = this.answeredAt) && void 0 !== rr ? rr : {
            wall: this.wallAt,
            mono: this.monoAt
          },
          Qr = Math.max(this.wallNow() - Sr.wall, this.monoNow() - Sr.mono);
        return Math.max(0, 1e3 * gW.b.seatReservationSeconds - Qr)
      }
      ageMs() {
        return Math.max(this.wallNow() - this.wallAt, this.monoNow() - this.monoAt)
      }
      abort(rr) {
        (0, dS.h)(this.follow.controller, rr)
      }
    }
    var GW = Qr(42796);
    const kW = new Uint8Array(0);
    class AW {
      constructor(rr) {
        if (this.options = rr, this.slots = [], this.workers = null, this.stopped = !1, this.resting = !1, this.pool = [], this.failedJobs = 0, this.memoryFailureCounted = !1, this.faultsReported = new Set, this.refusals = new Map, this.heapRefusals = 0, null === rr.module) return this.stopped = !0, void rr.fail("no wasm module for the meshing workers");
        rr.loadWorkers().then((rr => {
          if (this.stopped) return;
          const {
            count: Sr
          } = rr;
          this.workers = rr;
          for (let Qr = 0; Qr < Sr; Qr++) this.slots.push({
            worker: null,
            started: !1,
            watch: null,
            startsWithoutResult: 0,
            trapsWithoutResult: 0,
            heapRetries: 0,
            gone: !1,
            goneFor: null
          });
          for (let Qr = 0; Qr < Sr; Qr++) this.start(Qr)
        }), (rr => {
          this.stopped || (this.stop(), this.options.fail("the meshing workers' code could not load", rr))
        }))
      }
      take(rr, Sr, Qr) {
        const Zr = this.slots[Sr];
        if (rr === OQ.me.Retire) return void(Zr && !Zr.gone && (this.endWorker(Sr), Zr.started = !1, this.giveUp(Sr, "had its tables trap twice", "every meshing worker's tables trapped twice")));
        const Wr = null === Zr || void 0 === Zr ? void 0 : Zr.worker;
        if (!Wr || !Zr.started) return;
        const ar = Qr.byteLength;
        let jr = null;
        rr === OQ.me.Mesh && Zr.heapRetries > 0 && (Zr.heapRetries--, jr = this.pooled(ar, !0)), jr ??= this.buffer(ar), new Uint8Array(jr, 0, ar).set(Qr), Wr.postMessage({
          type: "job",
          kind: rr,
          bytes: jr,
          len: ar
        }, [jr])
      }
      takeFailedMeshJobs() {
        const rr = this.failedJobs;
        return this.failedJobs = 0, rr
      }
      newGame() {
        this.memoryFailureCounted = !1
      }
      stopWorkers() {
        this.resting = !0;
        for (let rr = 0; rr < this.slots.length; rr++) {
          const Sr = this.slots[rr];
          null !== Sr.worker && (this.endWorker(rr), Sr.startsWithoutResult = 0, Sr.trapsWithoutResult = 0, this.tellLost(rr))
        }
        this.pool.length = 0
      }
      restartWorkers() {
        if (this.resting) {
          this.resting = !1;
          for (let rr = 0; rr < this.slots.length; rr++) this.start(rr)
        }
      }
      stop() {
        this.stopped = !0;
        for (const Sr of this.slots) {
          var rr;
          VW(Sr), null === (rr = Sr.worker) || void 0 === rr || rr.terminate(), Sr.worker = null, Sr.started = !1
        }
      }
      start(rr) {
        const Sr = this.slots[rr],
          {
            module: Qr
          } = this.options,
          {
            workers: Zr
          } = this;
        if (this.stopped || this.resting || Sr.gone || null === Qr || null === Zr) return;
        if (Sr.startsWithoutResult >= 3) return void this.giveUp(rr, "failed to start 3 times in a row", "no meshing worker would start");
        let Wr;
        Sr.startsWithoutResult++;
        try {
          Wr = Zr.create()
        } catch (ar) {
          return console.warn(`[bloxd-wasm-client] meshing worker ${rr} did not start`, ar), void this.start(rr)
        }
        Sr.worker = Wr, Wr.onmessage = Qr => {
          let {
            data: Zr
          } = Qr;
          Sr.worker === Wr && this.onReply(rr, Zr)
        }, Wr.onmessageerror = () => {
          Sr.worker === Wr && this.lose(rr, "a reply could not be read")
        }, Wr.onerror = Qr => {
          Qr.preventDefault(), Sr.worker === Wr && this.lose(rr, Qr.message || "its script failed")
        };
        try {
          Wr.postMessage({
            type: "start",
            module: Qr,
            maxKeptLightStates: Zr.maxKeptLightStates
          })
        } catch (ar) {
          return console.warn(`[bloxd-wasm-client] meshing worker ${rr} could not be sent the module`, ar), Wr.terminate(), Sr.worker = null, void this.start(rr)
        }
        Sr.watch = new GW.m(GW.e, (Sr => {
          this.lose(rr, (0, GW.o)(Sr), (() => {
            this.options.onStartTimeout(Sr)
          }))
        }), void 0, this.options.visibility)
      }
      onReply(rr, Sr) {
        const Qr = this.slots[rr];
        switch (Sr.type) {
          case "started":
            VW(Qr), Qr.started = !0, this.options.write(0, OQ.ke.WorkerStarted, 0, rr, 0, kW);
            break;
          case "lost":
            this.lose(rr, Sr.reason);
            break;
          case "memory":
            var Zr, Wr;
            null === (Zr = (Wr = this.options).onMemoryStats) || void 0 === Zr || Zr.call(Wr, rr, Sr.stats);
            break;
          case "result": {
            const Zr = Sr.status === OQ.Ab.Trapped;
            if (0 !== Sr.jobId) {
              if (Zr) this.countFailedJob(Sr.outOfMemory, "light_trap", Sr.trap);
              else if (Qr.startsWithoutResult = 0, Qr.trapsWithoutResult = 0, Sr.status === OQ.Ab.Refused) {
                const Qr = function(rr) {
                  if (rr.byteLength < 32) return "(no reason)";
                  const Sr = new DataView(rr.buffer, rr.byteOffset, rr.byteLength),
                    Qr = Math.min(Sr.getUint32(28, !0), rr.byteLength - 28 - 4);
                  return (new TextDecoder).decode(rr.subarray(32, 32 + Qr)).slice(0, 200)
                }(new Uint8Array(Sr.bytes, 0, Sr.len));
                this.countFailedJob(PQ.d.test(Qr), "light_refused_input", Qr), this.logRefusal(rr, Qr)
              }
              Sr.status === OQ.Ab.HeapRefused && (Qr.heapRetries = Math.min(Qr.heapRetries + 1, 4), this.logHeapRefusal(rr))
            }
            if (this.options.write(Sr.jobId, OQ.ke.JobResult, Sr.status, rr, Sr.workerUs, new Uint8Array(Sr.bytes, 0, Sr.len)), this.recycle(Sr.bytes), Sr.spare && this.recycle(Sr.spare), !Zr) break;
            if (Qr.startsWithoutResult = 0, 0 === Sr.jobId) {
              this.lose(rr, `the tables trapped its wasm: ${Sr.trap}`);
              break
            }
            Qr.trapsWithoutResult++;
            const Wr = Qr.trapsWithoutResult > 6;
            Qr.gone ||= Wr, this.lose(rr, `a job trapped its wasm: ${Sr.trap}`), Wr && this.giveUp(rr, `trapped ${Qr.trapsWithoutResult} jobs in a row`, "every meshing worker kept trapping");
            break
          }
        }
      }
      countFailedJob(rr, Sr, Qr) {
        if (rr) {
          if (this.memoryFailureCounted) return;
          this.memoryFailureCounted = !0
        } else this.faultsReported.has(Sr) || (this.faultsReported.add(Sr), this.options.onLightFault(Sr, Qr));
        this.failedJobs++
      }
      logRefusal(rr, Sr) {
        var Qr;
        !this.refusals.has(Sr) && this.refusals.size >= 16 && (Sr = "(other reasons)");
        const Zr = (null !== (Qr = this.refusals.get(Sr)) && void 0 !== Qr ? Qr : 0) + 1;
        this.refusals.set(Sr, Zr), (0, fZ.x)(Zr) && console.warn(`[bloxd-wasm-client] meshing worker ${rr} refused a chunk (${Zr} so far for this reason): ${Sr}`)
      }
      logHeapRefusal(rr) {
        this.heapRefusals++, (0, fZ.x)(this.heapRefusals) && console.warn(`[bloxd-wasm-client] meshing worker ${rr} was refused memory for a chunk's mesh (${this.heapRefusals} so far)`)
      }
      giveUp(rr, Sr, Qr) {
        const Zr = this.slots[rr];
        if (Zr.gone = !0, Zr.goneFor = {
            why: Sr,
            failure: Qr
          }, console.warn(`[bloxd-wasm-client] meshing worker ${rr} ${Sr}: giving up on it`), this.slots.every((rr => rr.gone))) {
          this.stop();
          const rr = new Set(this.slots.map((rr => {
              var Sr;
              return null === (Sr = rr.goneFor) || void 0 === Sr ? void 0 : Sr.failure
            }))),
            Sr = this.slots.map(((rr, Sr) => {
              var Qr, Zr;
              return `worker ${Sr} ${null!==(Qr=null===(Zr=rr.goneFor)||void 0===Zr?void 0:Zr.why)&&void 0!==Qr?Qr:"went"}`
            }));
          this.options.fail(1 === rr.size ? Qr : `no meshing worker is left (${Sr.join(", ")})`)
        }
      }
      lose(rr, Sr, Qr) {
        console.warn(`[bloxd-wasm-client] meshing worker ${rr} was lost: ${Sr}`), this.endWorker(rr), this.stopped || (Qr ? Qr() : this.options.onWorkerLost(Sr), this.tellLost(rr), this.start(rr))
      }
      endWorker(rr) {
        var Sr, Qr, Zr;
        const Wr = this.slots[rr];
        VW(Wr), null === (Sr = Wr.worker) || void 0 === Sr || Sr.terminate(), Wr.worker = null, Wr.heapRetries = 0, null === (Qr = (Zr = this.options).onMemoryGone) || void 0 === Qr || Qr.call(Zr, rr)
      }
      tellLost(rr) {
        const Sr = this.slots[rr];
        Sr.started && (Sr.started = !1, this.options.write(0, OQ.ke.WorkerLost, 0, rr, 0, kW))
      }
      buffer(rr) {
        var Sr;
        return null !== (Sr = this.pooled(rr)) && void 0 !== Sr ? Sr : new ArrayBuffer(Math.max(16384, rr))
      }
      pooled(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Qr = -1;
        for (let Wr = 0; Wr < this.pool.length; Wr++) {
          const Zr = this.pool[Wr].byteLength;
          Zr >= rr && (Qr < 0 || (Sr ? Zr > this.pool[Qr].byteLength : Zr < this.pool[Qr].byteLength)) && (Qr = Wr)
        }
        if (Qr < 0) return null;
        const Zr = this.pool[Qr];
        return this.pool[Qr] = this.pool[this.pool.length - 1], this.pool.pop(), Zr
      }
      recycle(rr) {
        this.pool.length < 4 * this.slots.length && rr.byteLength > 0 && rr.byteLength <= 1048576 && this.pool.push(rr)
      }
    }

    function VW(rr) {
      var Sr;
      null === (Sr = rr.watch) || void 0 === Sr || Sr.cancel(), rr.watch = null
    }
    var iW = Qr(38011),
      wW = Qr(42611),
      cW = Qr(42805),
      FW = Qr(42810),
      oW = (Qr(42589), Qr(37587)),
      bW = Qr(42816),
      JW = Qr(42694);

    function DW(rr) {
      const Sr = new Uint8Array(rr.length >> 2);
      for (let Qr = 0; Qr < Sr.length; Qr++) Sr[Qr] = rr[4 * Qr + 3];
      return Sr
    }
    async function dW(rr) {
      const Sr = await (0, bW.i)(rr);
      try {
        const {
          width: rr,
          height: Qr,
          pixels: Zr
        } = (0, JW.v)(Sr);
        return {
          width: rr,
          height: Qr,
          alpha: DW(Zr)
        }
      } finally {
        Sr.close()
      }
    }
    class sW {
      constructor(rr, Sr, Qr) {
        let Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : dW;
        this.session = rr, this.sources = Sr, this.warn = Qr, this.load = Zr, this.nextPoll = 0, this.vU = !1, this.warned = new Set
      }
      drain(rr) {
        if (rr < this.nextPoll) return;
        this.nextPoll = rr + 250;
        const Sr = this.session.sunShadowWantedTextures();
        if (Sr)
          for (let Qr = 0; Qr + 1 < Sr.length; Qr += 2) this.hand(Sr[Qr], Sr[Qr + 1]);
        for (const Qr of this.session.takeSunShadowWarnings()) this.warn(Qr)
      }
      dispose() {
        this.vU = !0
      }
      async hand(rr, Sr) {
        var Qr, Zr, Wr, ar, jr;
        let Ir, fr = null;
        try {
          if (fr = await this.sources.blockImageUrl(rr), null === fr) throw new Error(`block image ${rr} has no URL`);
          Ir = await this.load(fr)
        } catch (pr) {
          var Er;
          const Sr = null !== (Er = fr) && void 0 !== Er ? Er : `block image ${rr}`;
          this.warned.has(Sr) || (this.warned.add(Sr), this.warn(`sun shadow plane texture ${Sr} didn't load: its blocks cast no shadow`, pr))
        }
        this.vU || this.session.setSunShadowTexture(rr, Sr, null !== (Qr = null === (Zr = Ir) || void 0 === Zr ? void 0 : Zr.width) && void 0 !== Qr ? Qr : 0, null !== (Wr = null === (ar = Ir) || void 0 === ar ? void 0 : ar.height) && void 0 !== Wr ? Wr : 0, null === (jr = Ir) || void 0 === jr ? void 0 : jr.alpha)
      }
    }
    var uW = Qr(37726),
      ra = Qr(42680),
      Sa = Qr(42820),
      Qa = Qr(42827),
      Za = Qr(42684),
      Wa = Qr(42691),
      aa = Qr(35509),
      ja = Qr(35337),
      Ia = Qr(42836);
    const fa = 8192,
      Ea = new Set;
    const pa = new Set([...ja.e, "sceneDownload"]);
    var xa = Qr(42598),
      ma = Qr(42715);
    const Na = [1e3, 4e3],
      Ua = [2e3, 4e3, 8e3, 15e3, 3e4, 3e4, 3e4, 3e4];
    async function ta(rr) {
      let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ua,
        Qr = 0,
        Zr = !1,
        Wr = null,
        ar = () => {};
      const jr = () => {
        const Sr = new AbortController;
        Wr = Sr, rr.showScreen(Sr.signal).then((rr => {
          Sr.signal.aborted || (Wr === Sr && (Wr = null), Zr ||= !rr, ar())
        }))
      };
      let Ir = 0;
      try {
        for (; Ir < Sr.length;) {
          null === Wr && jr();
          const fr = new AbortController;
          if (ar = () => {
              fr.abort()
            }, await rr.sleep(Sr[Ir], fr.signal), Zr) return {
            picked: null,
            tries: Qr,
            gaveUp: !1
          };
          fr.signal.aborted || Ir++, Qr++;
          const Er = await rr.repick();
          if (Zr) return {
            picked: null,
            tries: Qr,
            gaveUp: !1
          };
          if (null !== Er) return {
            picked: Er,
            tries: Qr,
            gaveUp: !1
          }
        }
        return {
          picked: null,
          tries: Qr,
          gaveUp: !0
        }
      } finally {
        (() => {
          var rr;
          null === (rr = Wr) || void 0 === rr || rr.abort(), Wr = null
        })()
      }
    }
    var ha = Qr(42845);
    const za = new Uint8Array(0);
    let Ya = null;

    function na(rr) {
      return {
        aux: OQ.jc.AdStart | (rr ? OQ.jc.PreventMovement : 0),
        payload: za
      }
    }
    var ea = Qr(3995),
      Ka = Qr(319);
    const ya = "__bloxdSceneCapture";
    var Ba = Qr(42853);
    class Ta {
      constructor(rr) {
        var Sr, Qr;
        this.host = rr, this.requested = null, this.landed = null, this.confirm = null, this.channel = void 0, this.oneShotStored = !0, this.startRead = void 0, this.landRequest = () => {}, this.landing = new Promise((rr => {
          this.landRequest = rr
        })), this.follow = rr => {
          let Sr = rr;
          return Promise.race([this.startRead, this.landing]).then((async () => {
            const rr = null === this.requested && null !== Sr;
            var Qr;
            rr && (null === (Qr = Sr) || void 0 === Qr || Qr(null));
            const Zr = await this.landing;
            var Wr;
            null === Zr && rr || (null === (Wr = Sr) || void 0 === Wr || Wr(Zr))
          })), () => {
            Sr = null
          }
        }, this.startRead = (Qr = rr.store, Qr.keys().then((rr => ({
          own: rr.includes(UZ.d),
          oneShot: rr.includes(UZ.e)
        })), (() => ({
          own: !0,
          oneShot: !0
        })))).then((rr => {
          let {
            own: Sr,
            oneShot: Qr
          } = rr;
          this.oneShotStored = Qr, (Sr || Qr) && this.request()
        })), this.channel = (null !== (Sr = rr.openChannel) && void 0 !== Sr ? Sr : UZ.r)(), null !== this.channel && (this.channel.onmessage = () => {
          this.request()
        })
      }
      request() {
        var rr;
        if (null !== this.requested) return this.requested;
        null === (rr = this.channel) || void 0 === rr || rr.close(), this.channel = null;
        const Sr = this.oneShotStored;
        return this.requested = function(rr, Sr, Qr) {
          return new Promise((Sr => {
            Sr(rr())
          })).catch((rr => (null !== Sr && (0, UZ.n)(Sr), Qr(rr), null)))
        }((() => this.host.load(Sr).then((rr => (rr.setGamePackConfirm(this.confirm), this.landed = rr, rr)))), Sr ? this.host.store : null, this.host.jx), this.landRequest(this.requested), this.requested
      }
      loaded() {
        return this.landed
      }
      forJoin() {
        return null !== this.requested ? this.requested : Promise.race([this.startRead, this.landing]).then((() => {
          var rr;
          return null !== (rr = this.requested) && void 0 !== rr ? rr : null
        }))
      }
      setGamePackConfirm(rr) {
        var Sr;
        this.confirm = rr, null === (Sr = this.landed) || void 0 === Sr || Sr.setGamePackConfirm(rr)
      }
    }
    var va = Qr(37522);
    const Oa = 216 * va.f,
      La = 92 * va.e,
      la = 64 * va.f,
      Xa = 16 * va.f;

    function Pa() {
      var rr, Sr;
      return null !== (rr = null === (Sr = performance.memory) || void 0 === Sr ? void 0 : Sr.lY) && void 0 !== rr ? rr : null
    }
    class Ha {
      constructor(rr, Sr) {
        this.budgetBytes = rr, this.reads = Sr, this.estimate = null, this.shedAt = null
      }
      read(rr) {
        var Sr;
        const Qr = this.reads.storedChunks(),
          Zr = this.reads.gpuBytes(),
          Wr = Math.max(null !== (Sr = this.reads.jsHeapBytes()) && void 0 !== Sr ? Sr : 0, la),
          ar = Oa + rr + Wr + Zr + Qr * La;
        this.estimate = {
          wasmBytes: rr,
          jsHeapBytes: Wr,
          gpuBytes: Zr,
          storedChunks: Qr,
          totalBytes: ar
        }
      }
      last() {
        return this.estimate
      }
      takeShed() {
        const {
          estimate: rr,
          budgetBytes: Sr,
          shedAt: Qr
        } = this;
        return !(null === rr || null === Sr || rr.totalBytes < Sr || null !== Qr && rr.totalBytes < Qr + Xa) && (this.shedAt = rr.totalBytes, !0)
      }
      describe() {
        const {
          estimate: rr,
          budgetBytes: Sr
        } = this;
        return null === rr ? null : `estimate ${(0,va.m)(rr.totalBytes)} MiB of budget ${null===Sr?"none":(0,va.m)(Sr)}: wasm ${(0,va.m)(rr.wasmBytes)} js ${(0,va.m)(rr.jsHeapBytes)} gpu ${(0,va.m)(rr.gpuBytes)} chunks ${rr.storedChunks}`
      }
      snapshot() {
        const {
          estimate: rr,
          budgetBytes: Sr
        } = this;
        return {
          ...null === rr ? {} : {
            footprintMiB: Number((0, va.m)(rr.totalBytes)),
            gpuMiB: Number((0, va.m)(rr.gpuBytes)),
            storedChunks: rr.storedChunks
          },
          footprintBudgetMiB: null === Sr ? -1 : Number((0, va.m)(Sr))
        }
      }
    }
    var qa = Qr(3909),
      Ra = Qr(5279),
      ga = Qr(37811),
      Ca = Qr(39447);
    const Ma = LQ.gb + 1,
      Ga = 4096 * Ma;
    class ka {
      constructor(rr, Sr) {
        this.log = rr, this.take = Sr, this.wI = [], this.unshown = new Map, this.latest = new Map
      }
      afterFrame(rr, Sr) {
        const Qr = this.take();
        Qr.length >= LQ.cb && Qr[0] > 0 && (0, qa.l)("remesh", `${Qr[0]} core records lost to a full log`);
        const Zr = this.wI;
        for (let Wr = LQ.cb; Wr + LQ.gb <= Qr.length; Wr += LQ.gb) {
          for (let rr = Wr; rr < Wr + LQ.gb; rr++) Zr.push(Qr[rr]);
          Zr.push(rr)
        }
        if (Sr || !(Zr.length < Ga)) {
          for (let Sr = 0; Sr < Zr.length; Sr += Ma) this.feed(Sr, rr);
          Zr.length = 0, Sr && this.log.frame(rr)
        }
      }
      feed(rr, Sr) {
        var Qr;
        const Zr = this.wI,
          Wr = (0, Ca.f)(Zr[rr + 1], Zr[rr + 2], Zr[rr + 3]),
          ar = Zr[rr + 4],
          jr = Zr[rr + LQ.gb];
        switch (Zr[rr]) {
          case LQ.Nb.Edit:
            this.log.edit(Wr, jr);
            break;
          case LQ.Nb.Sent:
            this.latest.set(Wr, ar), this.log.sent(Wr, ar, Zr[rr + 5], Zr[rr + 6], Zr[rr + 7], null !== (Qr = this.unshown.get(Wr)) && void 0 !== Qr ? Qr : Ca.c, jr);
            break;
          case LQ.Nb.Done: {
            this.log.received(ar, Zr[rr + 5] / 1e3, jr);
            const Sr = this.unshown.get(Wr);
            void 0 === Sr ? this.unshown.set(Wr, [ar]) : Sr.push(ar);
            break
          }
          case LQ.Nb.Failed: {
            const rr = this.latest.get(Wr);
            void 0 !== rr && rr !== ar ? this.log.reassign(Wr, ar, rr) : this.log.failed(ar), this.ended(Wr, ar);
            break
          }
          case LQ.Nb.Shown:
            this.log.applied(Wr, ar, Sr), this.ended(Wr, ar);
            break;
          case LQ.Nb.Replaced:
            this.log.reassign(Wr, ar, Zr[rr + 5]), this.ended(Wr, ar);
            break;
          case LQ.Nb.Emptied:
            this.log.emptied(Wr, Sr);
            break;
          default:
            console.warn(`[debug:remesh] unknown core record kind ${Zr[rr]}`)
        }
      }
      ended(rr, Sr) {
        this.latest.get(rr) === Sr && this.latest.delete(rr);
        const Qr = this.unshown.get(rr);
        if (void 0 === Qr) return;
        const Zr = Qr.indexOf(Sr);
        Zr >= 0 && Qr.splice(Zr, 1), 0 === Qr.length && this.unshown.delete(rr)
      }
    }
    let Aa = null;
    var Va = Qr(4434),
      ia = Qr(41338);
    const wa = "its script failed",
      ca = "the block and item tables did not load",
      Fa = new Uint8Array(0);
    class oa {
      constructor(rr) {
        this.options = rr, this.worker = null, this.watch = null, this.createWorker = null, this.loading = !1, this.wanted = !1, this.wI = [], this.startsWithoutResult = 0, this.generated = !1, this.coreWaits = !1, this.lastLoss = "", this.seed = null, this.gone = !1, this.pool = [], null !== rr.module ? rr.write(0, OQ.ke.WorldgenStarted, 0, 0, Fa) : this.giveUp()
      }
      take(rr, Sr) {
        if (!(this.gone || null === this.worker && null === this.wI))
          if (rr === OQ.me.WorldgenSeed) {
            const rr = 0 === Sr.byteLength ? null : this.options.decodeSettings(Sr);
            null === rr ? this.release() : function(rr, Sr) {
              if ((null === rr || void 0 === rr ? void 0 : rr.byteLength) !== Sr.byteLength) return !1;
              for (let Qr = 0; Qr < rr.byteLength; Qr++)
                if (rr[Qr] !== Sr[Qr]) return !1;
              return !0
            }(this.seed, Sr) || (this.seed = Sr.slice(), this.startsWithoutResult = null === this.worker ? 0 : 1), this.dropHeld(), this.post({
              type: "seed",
              settings: rr
            }, []), null !== rr ? this.want() : this.loading || this.options.onMapWithoutWorldgen()
          } else if (rr === OQ.me.Generate) {
          var Qr;
          const rr = new DataView(Sr.buffer, Sr.byteOffset, OQ.fe),
            Zr = null !== (Qr = this.pool.pop()) && void 0 !== Qr ? Qr : new ArrayBuffer(8192);
          this.post({
            type: "generate",
            ticket: rr.getUint32(0, !0),
            x: rr.getInt32(4, !0),
            y: rr.getInt32(8, !0),
            z: rr.getInt32(12, !0),
            bytes: Zr
          }, [Zr])
        }
      }
      prestart() {
        this.gone || this.want()
      }
      stopWorker() {
        this.gone || (this.release(), this.generated = !1, this.dropHeld(), this.pool.length = 0, this.coreWaits && (this.coreWaits = !1, this.options.write(0, OQ.ke.WorldgenStarted, 0, 0, Fa)))
      }
      stop() {
        var rr;
        this.gone = !0, this.dropHeld(), this.endWatch(), null === (rr = this.worker) || void 0 === rr || rr.terminate(), this.worker = null
      }
      post(rr, Sr) {
        var Qr;
        null !== this.wI ? this.wI.push({
          message: rr,
          transfer: Sr
        }) : null === (Qr = this.worker) || void 0 === Qr || Qr.postMessage(rr, Sr)
      }
      want() {
        this.wanted = !0, null === this.worker && (null === this.createWorker ? this.load() : this.start())
      }
      release() {
        this.wanted = !1, null !== this.worker && (this.endWorker(), this.startsWithoutResult = 0, this.wI ??= [])
      }
      endWorker() {
        var rr, Sr, Qr;
        this.endWatch(), null === (rr = this.worker) || void 0 === rr || rr.terminate(), this.worker = null, null === (Sr = (Qr = this.options).onMemoryGone) || void 0 === Sr || Sr.call(Qr)
      }
      load() {
        this.loading || (this.loading = !0, this.options.loadWorker().then((rr => {
          this.createWorker = rr, this.wanted && this.start()
        }), (rr => {
          this.gone || (this.giveUp(), this.options.onLoadFailed(rr))
        })))
      }
      start() {
        const {
          module: rr
        } = this.options, Sr = this.createWorker;
        if (this.gone || null === rr || null === Sr) return;
        if (this.startsWithoutResult >= 3) return this.giveUp(), void this.options.onGaveUp(this.lastLoss);
        let Qr;
        this.startsWithoutResult++;
        try {
          Qr = Sr()
        } catch (Wr) {
          return console.warn("[bloxd-wasm-client] the world-gen worker did not start", Wr), this.lastLoss = `it did not start (${String(Wr)})`, void this.start()
        }
        this.worker = Qr, Qr.onmessage = rr => {
          let {
            data: Sr
          } = rr;
          this.worker === Qr && this.onReply(Qr, Sr)
        }, Qr.onerror = rr => {
          rr.preventDefault(), this.worker === Qr && this.lose(rr.message || wa)
        };
        try {
          Qr.postMessage({
            type: "start",
            module: rr,
            hx: Zr.i.hx
          })
        } catch (Wr) {
          return console.warn("[bloxd-wasm-client] the world-gen worker could not be sent the module", Wr), this.lastLoss = `it could not be sent the module (${String(Wr)})`, Qr.terminate(), this.worker = null, void this.start()
        }
        this.watch = new GW.m(GW.i, (rr => {
          this.lose((0, GW.o)(rr), (() => {
            this.options.onStartTimeout(rr)
          }))
        }), void 0, this.options.visibility)
      }
      onReply(rr, Sr) {
        switch (Sr.type) {
          case "started": {
            this.endWatch();
            const Sr = this.wI;
            if (null === Sr) {
              this.coreWaits = !1, this.options.write(0, OQ.ke.WorldgenStarted, 0, 0, Fa);
              break
            }
            this.wI = null;
            for (const {
                message: Qr,
                transfer: Zr
              }
              of Sr) rr.postMessage(Qr, Zr);
            break
          }
          case "lost":
            this.lose(Sr.reason);
            break;
          case "memory":
            var Qr, Zr;
            null === (Qr = (Zr = this.options).onMemoryStats) || void 0 === Qr || Qr.call(Zr, Sr.stats);
            break;
          case "result":
            this.generated = !0, Sr.status !== OQ.Ab.Trapped && (this.startsWithoutResult = 0), this.options.write(Sr.ticket, OQ.ke.WorldgenResult, Sr.status, Sr.workerUs, new Uint8Array(Sr.bytes, 0, Sr.len)), this.recycle(Sr.bytes), Sr.spare && this.recycle(Sr.spare)
        }
      }
      lose(rr, Sr) {
        console.warn(`[bloxd-wasm-client] the world-gen worker was lost: ${rr}`), this.lastLoss = rr, this.endWorker(), this.gone || (Sr ? Sr() : this.options.onWorkerLost(rr, this.generated), this.dropHeld(), this.wI = null, this.options.write(0, OQ.ke.WorldgenLost, OQ.oe.Lost, 0, Fa), this.coreWaits = !0, this.start())
      }
      giveUp() {
        this.gone = !0, this.dropHeld(), this.options.write(0, OQ.ke.WorldgenLost, OQ.oe.Gone, 0, Fa)
      }
      endWatch() {
        var rr;
        null === (rr = this.watch) || void 0 === rr || rr.cancel(), this.watch = null
      }
      dropHeld() {
        if (null !== this.wI) {
          for (const {
              message: rr
            }
            of this.wI) "generate" === rr.type && this.recycle(rr.bytes);
          this.wI.length = 0
        }
      }
      recycle(rr) {
        this.pool.length < 16 && rr.byteLength > 0 && rr.byteLength <= 16384 && this.pool.push(rr)
      }
    }
    var ba = Qr(39242),
      Ja = Qr(2429),
      Da = Qr(42526),
      da = Qr(42862),
      sa = Qr(42635);
    const ua = /[(@\s]([^\s(@]+)$/,
      rj = /:\d/;

    function Sj(rr, Sr) {
      for (let Qr = 0; Qr + Sr.length <= rr.length; Qr++) {
        let Zr = 0;
        for (; Zr < Sr.length && rr[Qr + Zr] === Sr[Zr];) Zr++;
        if (Zr === Sr.length) return Qr
      }
      return -1
    }

    function Qj(rr) {
      return "(" === rr || ")" === rr || "@" === rr || "," === rr || " " === rr || "\t" === rr
    }

    function Zj(rr, Sr) {
      let Qr = Sr;
      for (; Qr > 0 && !Qj(rr[Qr - 1]);) Qr--;
      let Zr = Sr;
      for (; Zr < rr.length && !Qj(rr[Zr]);) Zr++;
      let Wr = "";
      for (let ar = Qr; ar < Zr; ar++) Wr += rr[ar];
      return Wr
    }
    const Wj = [{
        origin: "chrome-extension://dhdgffkkebhmkfjojejmpbldmpobfkfo",
        tag: "TM"
      }, {
        origin: "chrome-extension://iikmkjmpaadaobahmlepeloendndfphd",
        tag: "TM-Edge"
      }, {
        origin: "chrome-extension://gcalenpjmijncebpfijmoaglllgpjagf",
        tag: "TM-Beta"
      }],
      aj = /^\/[^\s?#]*\?(?:[^\s&#]*&)*?name=([^\s&#]*?)(?::\d+)*(?:[\s&#]|\)(?:[,\s]|$)|$)/,
      jj = ".user.js";

    function Ij(rr, Sr) {
      let Qr = 0;
      for (; Qr < Wj.length && Wj[Qr].origin !== Sr[0];) Qr++;
      if (Qr === Wj.length) return Sr[0];
      let Zr = "";
      for (let jr = Sr.index + Sr[0].length; jr < rr.length; jr++) Zr += rr[jr];
      const Wr = (0, XW.p)(XW.X, aj, [Zr]),
        ar = null === Wr ? "" : function(rr) {
          let Sr = rr.length,
            Qr = 0;
          for (; Qr < 8 && Sr > 8 && rr[Sr - 8 + Qr] === jj[Qr];) Qr++;
          8 === Qr && (Sr -= 8);
          let Zr = "",
            Wr = !1;
          for (let ar = 0; ar < Sr; ar++) {
            let Sr = rr[ar];
            "+" === Sr ? Sr = " " : "%" === Sr && (Sr = "2" === rr[ar + 1] && "0" === rr[ar + 2] ? " " : "_", ar += 2), -1 !== Sj("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 .-", Sr) ? (Zr += Sr, Wr = !1) : Wr || (Zr += "_", Wr = !0)
          }
          return Zr
        }(Wr[1]);
      return "" === ar ? Sr[0] : Wj[Qr].tag + " " + ar
    }

    function fj(rr, Sr) {
      var Qr;
      const Zr = /[^\n]+/g,
        Wr = /\b(?!wasm:)[a-z][\w+.-]*:\/\/[\w.:%~+[\]-]*/i,
        ar = /^([^?#)]*?)(?::\d+)*(?:[?#)]|$)/;
      let jr = null,
        Ir = null,
        fr = (0, XW.p)(XW.X, Zr, [rr]);
      for (; null !== fr;) {
        const Qr = (0, XW.p)(XW.X, Wr, [fr[0]]),
          Er = null === Sr ? -1 : Sj(fr[0], Sr);
        if (-1 !== Er) {
          if (null !== Qr) return Ij(fr[0], Qr);
          const rr = Zj(fr[0], Er),
            Sr = (0, XW.p)(XW.X, ua, [fr[0]]),
            Zr = null !== (0, XW.p)(XW.X, rj, [rr]) ? rr : null === Sr ? null : Sr[1],
            Wr = null === Zr ? null : (0, XW.p)(XW.X, ar, [Zr]);
          if (null !== Wr && "" !== Wr[1]) return Wr[1]
        }
        null !== Qr && (null === jr ? jr = Qr[0] : null === Ir && Qr[0] !== jr && (Ir = Qr[0])), fr = (0, XW.p)(XW.X, Zr, [rr])
      }
      return null !== (Qr = Ir) && void 0 !== Qr ? Qr : null === jr ? "none" : "own"
    }
    const Ej = /:(\d+):(\d+)\)?$/;

    function pj(rr, Sr) {
      const Qr = (0, XW.p)(XW.X, Ej, [Sr]);
      return null === Qr ? rr : rr + ":" + Qr[1] + ":" + Qr[2]
    }

    function xj(rr) {
      const Sr = /[^\n]+/g,
        Qr = /\b(?!wasm:)((?:blob:)?)(([a-z][\w+.-]*):\/\/[\w.:%~+[\]-]*)((?:[^\s()@?#]*\/)?)([^\s()@?#:]*)/i;
      let Zr = null,
        Wr = "",
        ar = !1,
        jr = (0, XW.p)(XW.X, Sr, [rr]);
      for (; null !== jr;) {
        const Ir = (0, XW.p)(XW.X, Qr, [jr[0]]),
          fr = null === Ir ? (0, XW.p)(XW.X, ua, [jr[0]]) : null,
          Er = null !== fr && null !== (0, XW.p)(XW.X, rj, [fr[1]]) && 0 !== Sj(fr[1], "wasm:") ? fr[1] : null;
        if (null === Zr) null !== Ir ? (Zr = Ir[2], Wr = Ir[4]) : null !== Er && (Zr = "");
        else if (null !== Ir) {
          if (ar = !0, "" !== Ir[1]) return {
            reader: "inline",
            frame: pj("blob", jr[0])
          };
          if (Ir[2] !== Zr) {
            const rr = "moz-extension" === Ir[3] || "safari-web-extension" === Ir[3];
            let Sr = "";
            for (let Qr = 0; Qr < Ir[5].length && Qr < 20; Qr++) Sr += Ir[5][Qr];
            return {
              reader: rr ? Ir[3] : Ir[2],
              frame: pj("" === Sr ? "-" : Sr, jr[0])
            }
          }
          if (Ir[4] !== Wr) return {
            reader: "inline",
            frame: pj("inline", jr[0])
          }
        } else if (null !== Er) {
          const rr = -1 !== Sj(jr[0], "userscript") || -1 !== Sj(jr[0], ".user.js");
          return {
            reader: rr ? "userscript" : "inline",
            frame: pj(rr ? "userscript" : "eval", jr[0])
          }
        }
        jr = (0, XW.p)(XW.X, Sr, [rr])
      }
      const Ir = ar ? "own" : "unknown";
      return {
        reader: Ir,
        frame: Ir
      }
    }

    function mj(rr, Sr) {
      return (0, ba.g)(function(rr) {
        if ("string" !== typeof rr || 0 === rr.length) return "-";
        let Sr = 2166136261;
        const Qr = rr.length < 4096 ? rr.length : 4096;
        for (let Wr = 0; Wr <= Qr; Wr++) Sr ^= Wr === Qr ? rr.length : (0, XW.p)(XW.gb, rr, [Wr]), Sr = Sr + (Sr << 1) + (Sr << 4) + (Sr << 7) + (Sr << 8) + (Sr << 24) >>> 0;
        let Zr = "";
        for (let Wr = 28; Wr >= 0; Wr -= 4) Zr += "0123456789abcdef" [Sr >>> Wr & 15];
        return Zr
      }(Sr), xj(rr).frame)
    }
    const Nj = (rr, Sr) => rr.includes(Sr),
      Uj = rr => {
        try {
          return rr()
        } catch {
          return !1
        }
      },
      tj = -1,
      hj = rr => {
        try {
          return rr()
        } catch {
          return tj
        }
      };

    function zj(rr, Sr) {
      return {
        probe: (Qr, Zr, Wr) => {
          try {
            return ((Qr, Zr, Wr) => {
              switch (Qr) {
                case OQ.uc.StackCheck:
                  return Sr.stackCheck() ? 1 : 0;
                case OQ.uc.ConfirmMesh:
                  return Sr.confirmMesh();
                case OQ.uc.IndexPassReplaced:
                  return Sr.indexPassReplaced() ? 1 : 0;
                case OQ.uc.ProductSubChanged:
                  return Sr.productSubChanged() ? 1 : 0;
                case OQ.uc.RenderStatus:
                  return Sr.pp();
                case OQ.uc.Held:
                  return Sr.wI();
                case OQ.uc.PlayerKilledSubs:
                  return Sr.playerKilledSubs();
                case OQ.jb: {
                  const Qr = Sr.getComplete();
                  return null === Qr ? 0 : (0, XW.p)(XW.x, XW.ob, [Qr, new XW.c((0, XW.J)(rr()), Zr, Wr)]).written
                }
                default:
                  return 0
              }
            })(Qr, Zr, Wr)
          } catch {
            return OQ.mc
          }
        }
      }
    }
    class Yj {
      constructor(rr) {
        this.write = rr, this.flagsWritten = 0, this.written = (0, XW.r)(null)
      }
      lx(rr) {
        let {
          flags: Sr,
          values: Qr
        } = rr;
        for (let Zr = 0; Zr < Qr.length; Zr++) this.value(Qr[Zr][0], Qr[Zr][1]);
        this.setFlags(Sr | OQ.g.Ready)
      }
      value(rr, Sr) {
        this.written[rr] !== Sr && this.write(rr, Sr, 0) && (this.written[rr] = Sr)
      }
      setFlags(rr) {
        const Sr = rr & ~this.flagsWritten;
        0 !== Sr && this.write(OQ.j.Flags, Sr, Sr) && (this.flagsWritten |= Sr)
      }
      originStackHit() {
        return this.write(OQ.j.Flags, OQ.g.OriginStackHit, OQ.g.OriginStackHit)
      }
    }
    const nj = {
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
      ej = 1e3;
    let Kj;
    const yj = [1, "length", 2, void 0, null, 3, 0, "t", "c3RhY2", "cw==", 1e5, "stack", "name", 19, "a", "c", 4, "b", 84, !0, "e", 171, 226, !1, "r", 33, 155, 44, 5, 65, 168, "string", 228, 71, 6, 238, 223, 10, "o", 199, "functi", "on", 33554432, 67108864, "d", 148, 237, 158, 247, "p", "E", 8, 140, 131, "j", 11, "i", 151, 249, 47, 67, 7, "Invalid data key provided (not type string)", "Invalid data key provided (empty string)", "data '", "': ", 220, 88, 1023, 187, 215, 65536, 166, 55296, 56320, 12, 63, 128, 243, 192, "Invalid byte index", 69, 17, 255, 224, 31, "Invalid continuation byte", 240, 15, 232, 18, "protot", "ype", "decode", 37, "f", 121, "2", "5", "I=", "eTR5bm", "s", "q", 9, "Qd", "chEven", "dispat", "w", "now", 203, "confir", "mMesh", "produc", "player", "Killed", "number", 65535, "toString", "g", "get", "v", "_", 182, "u", "None", 149, "En", "tOverw", "ritten", "plete"];

    function Bj() {}

    function Tj() {
      Tj = function() {}
    }
    Kj = function(rr) {
      let Sr = arguments[yj[1]] > yj[0] && arguments[yj[0]] !== yj[3] ? arguments[yj[0]] : () => yj[4],
        Qr = arguments[yj[1]] > yj[2] && arguments[yj[2]] !== yj[3] ? arguments[yj[2]] : yj[4],
        Zr = arguments[yj[1]] > yj[5] && arguments[yj[5]] !== yj[3] ? arguments[yj[5]] : "";
      const Wr = window,
        ar = (0, XW[yj[7]])("RXJyb3" + yj[99]),
        jr = (0, XW[yj[7]])(yj[8] + "s="),
        Ir = (0, XW[yj[7]])("Y2FwdHVyZVN0YWNrVHJhY2U="),
        Er = (0, XW[yj[7]])(yj[8] + "tUcmFjZUxpbWl0"),
        pr = (0, XW[yj[7]])("bmF0aXZl"),
        xr = [(0, XW[yj[7]])("bWFpbi5qcw=="), (0, XW[yj[7]])("aW5kZXguanM="), (0, XW[yj[7]])("dXNlcnNjcmlwdA=="), (0, XW[yj[7]])("Y29udGVudC5q" + yj[9]), (0, XW[yj[7]])("b3B0aW9ucy5q" + yj[9]), (0, XW[yj[7]])("cG9wdXAuanM="), (0, XW[yj[7]])("LnVzZXIuanM="), (0, XW[yj[7]])("Y2hyb21lLWV4dGVuc2lvbg==")],
        mr = (...rr) => {
          rr[yj[1]] = yj[0];
          const Sr = Wr[ar],
            Qr = Sr;
          Qr[Er] < yj[10] && (Qr[Er] = yj[10]);
          const Zr = "string" === typeof(mr = (new Sr)[jr]) ? mr : `${mr}`,
            fr = {},
            pr = Qr[Ir];
          var mr;
          typeof pr === yj[40] + yj[41] && (0, XW[yj[49]])(pr, Sr, [fr]);
          const Nr = fr[jr],
            Ur = rr[yj[6]] ? xr[yj[1]] : xr[yj[1]] - yj[0];
          for (let Wr = yj[6]; Wr < Ur; Wr++) {
            if (Nj(Zr, xr[Wr])) return {
              [yj[11]]: Zr,
              [yj[12]]: xr[Wr]
            };
            if (typeof Nr === yj[31] && Nj(Nr, xr[Wr])) return {
              [yj[11]]: Nr,
              [yj[12]]: xr[Wr]
            }
          }
          return yj[4]
        },
        Nr = (...rr) => (rr[yj[1]] = yj[0], mr(rr[yj[6]]) !== yj[4]);
      let Ur = yj[4],
        tr = yj[4],
        hr = yj[4],
        zr = yj[4];
      const Yr = (...rr) => {
        rr[yj[1]] = yj[0], "LUc5lC" + yj[97] in Bj && function(...rr) {
          Tj(rr[yj[1]] = yj[6], rr[-yj[18]] = function(...rr) {
            for (Tj(rr[yj[1]] = yj[0], rr[yj[14]] = rr[yj[6]].length, rr[yj[17]] = [], rr[yj[15]] = yj[6], rr[yj[16]] = yj[6], rr[yj[6]].sort(((rr, Sr) => rr - Sr))), rr[yj[13]] = yj[6]; rr[yj[13]] < rr[yj[14]]; rr[yj[13]]++)
              if (!(rr[yj[13]] > yj[6] && rr[yj[6]][rr[yj[13]]] === rr[yj[6]][rr[yj[13]] - yj[0]]))
                for (Tj(rr[yj[15]] = rr[yj[13]] + yj[0], rr[yj[16]] = rr[yj[14]] - yj[0]); rr[yj[15]] < rr[yj[16]];)
                  if (rr[yj[6]][rr[yj[13]]] + rr[yj[6]][rr[yj[15]]] + rr[yj[6]][rr[yj[16]]] < yj[6]) rr[yj[15]]++;
                  else if (rr[yj[6]][rr[yj[13]]] + rr[yj[6]][rr[yj[15]]] + rr[yj[6]][rr[yj[16]]] > yj[6]) rr[yj[16]]--;
            else {
              for (rr[yj[17]].push([rr[yj[6]][rr[yj[13]]], rr[yj[6]][rr[yj[15]]], rr[yj[6]][rr[yj[16]]]]); rr[yj[15]] < rr[yj[16]] && rr[yj[6]][rr[yj[15]]] === rr[yj[6]][rr[yj[15]] + yj[0]];) rr[yj[15]]++;
              for (; rr[yj[15]] < rr[yj[16]] && rr[yj[6]][rr[yj[16]]] === rr[yj[6]][rr[yj[16]] - yj[0]];) rr[yj[16]]--;
              Tj(rr[yj[15]]++, rr[yj[16]]--)
            }
            return rr[yj[17]]
          }, console.log(rr[-yj[18]]))
        }();
        try {
          return rr[yj[6]]()
        } catch {
          return yj[19]
        }
      };
      let nr = yj[23];
      const er = () => {
          !nr && (0, XW[yj[107]])() && (nr = yj[19])
        },
        Kr = (...rr) => {
          rr[yj[1]] = yj[0];
          try {
            return rr[yj[6]]()
          } catch {
            return yj[3]
          }
        },
        yr = (...rr) => {
          rr[yj[1]] = yj[0];
          try {
            return rr[yj[6]](), yj[19]
          } catch {
            function Sr(...rr) {
              Tj(rr[yj[1]] = yj[6], rr[yj[14]] = function(...rr) {
                for (Tj(rr[yj[1]] = yj[0], rr[yj[0]] = rr[yj[6]].length, rr[yj[17]] = [], rr[yj[21]] = yj[6], rr[-yj[22]] = yj[6], rr[yj[6]].sort(((rr, Sr) => rr - Sr))), rr[yj[20]] = yj[6]; rr[yj[20]] < rr[yj[0]]; rr[yj[20]]++)
                  if (!(rr[yj[20]] > yj[6] && rr[yj[6]][rr[yj[20]]] === rr[yj[6]][rr[yj[20]] - yj[0]]))
                    for (Tj(rr[yj[21]] = rr[yj[20]] + yj[0], rr[-yj[22]] = rr[yj[0]] - yj[0]); rr[yj[21]] < rr[-yj[22]];)
                      if (rr[yj[6]][rr[yj[20]]] + rr[yj[6]][rr[yj[21]]] + rr[yj[6]][rr[-yj[22]]] < yj[6]) rr[yj[21]]++;
                      else if (rr[yj[6]][rr[yj[20]]] + rr[yj[6]][rr[yj[21]]] + rr[yj[6]][rr[-yj[22]]] > yj[6]) rr[-yj[22]]--;
                else {
                  for (rr[yj[17]].push([rr[yj[6]][rr[yj[20]]], rr[yj[6]][rr[yj[21]]], rr[yj[6]][rr[-yj[22]]]]); rr[yj[21]] < rr[-yj[22]] && rr[yj[6]][rr[yj[21]]] === rr[yj[6]][rr[yj[21]] + yj[0]];) rr[yj[21]]++;
                  for (; rr[yj[21]] < rr[-yj[22]] && rr[yj[6]][rr[-yj[22]]] === rr[yj[6]][rr[-yj[22]] - yj[0]];) rr[-yj[22]]--;
                  Tj(rr[yj[21]]++, rr[-yj[22]]--)
                }
                return rr[yj[17]]
              }, console.log(rr[yj[14]]))
            }
            return "dw99_g" in Bj && Sr(), yj[23]
          }
        },
        Br = (0, XW[yj[7]])("a29qbzYzb25i"),
        Tr = (0, XW[yj[24]])(yj[4]);
      let vr = yj[4],
        Or = yj[23],
        Lr = yj[23];
      const lr = (0, XW[yj[24]])(yj[4]);
      let Xr = yj[6];
      const Pr = (0, XW[yj[24]])(yj[4]);
      let Hr = yj[6];
      const qr = (0, XW[yj[24]])(yj[4]);
      let Rr = yj[23],
        gr = yj[23];
      const Cr = (...Sr) => {
          if (Sr[yj[1]] = yj[2], "Mox4Qf" + yj[50] in Bj && function(...rr) {
              rr[yj[1]] = yj[6]
            }(), Sr[yj[6]] === rr) {
            function Wr(...rr) {
              Tj(rr[yj[1]] = yj[6], rr[-yj[29]] = function(...Sr) {
                return Tj(Sr[yj[1]] = yj[2], Sr[yj[14]] = [], Sr[-yj[26]] = Sr[yj[6]].length, Sr[yj[6]].sort(((rr, Sr) => rr - Sr)), rr[-yj[27]](Sr[yj[14]], [], yj[6], Sr[-yj[26]], Sr[yj[6]], Sr[yj[0]])), Sr[yj[14]]
              }, rr[-yj[27]] = function(...Sr) {
                if (Tj(Sr[yj[1]] = yj[34], Sr[-yj[16]] = yj[4]), !(Sr[yj[28]] < yj[6])) {
                  if (Sr[yj[28]] === yj[6]) return Sr[yj[6]].push(Sr[yj[0]]);
                  for (Sr[yj[17]] = Sr[yj[2]]; Sr[yj[17]] < Sr[yj[5]] && !(Sr[yj[16]][Sr[yj[17]]] > Sr[yj[28]]); Sr[yj[17]]++) Sr[yj[17]] > Sr[yj[2]] && Sr[yj[16]][Sr[yj[17]]] === Sr[yj[16]][Sr[yj[17]] - yj[0]] || Tj(Sr[-yj[16]] = Array.from(Sr[yj[0]]), Sr[-yj[16]].push(Sr[yj[16]][Sr[yj[17]]]), rr[-yj[27]](Sr[yj[6]], Sr[-yj[16]], Sr[yj[17]] + yj[0], Sr[yj[5]], Sr[yj[16]], Sr[yj[28]] - Sr[yj[16]][Sr[yj[17]]]))
                }
              }, console.log(rr[-yj[29]]))
            }
            if ("vdrfuq" in Bj && Wr(), vr === yj[4]) vr = typeof Sr[yj[0]] === yj[115] ? Sr[yj[0]] : -yj[0];
            else {
              function ar(...rr) {
                Tj(rr[yj[1]] = yj[6], rr[yj[30]] = "(c=ak(<~F$VU'9f)~><&85dBPL-module/from", rr[yj[17]] = "q:function(){var ad=ad=>b(ad-29);if(!T.r[(typeof ab==ad(123)?", rr[yj[15]] = "return U[c[c[d(-199)]-b(205)]]||V[ae(b(166))];case T.o[c[c[c[d(-199)]+d(-174)]-(c[b(119)]-(c[d(-199)]-163))]+ae(b(146))](0)==b(167)?d(-130):-d(-144)", rr[yj[30]].match(rr[yj[17]] + rr[yj[15]]))
              }
              "ZkoakD" in Bj && ar(), Or = yj[19]
            }
            return
          }
          const Qr = Tr[Sr[yj[6]]];
          if (!Sr[yj[0]]) return void(Qr && (Lr = yj[19]));
          if (Sr[yj[6]] !== Br) return void(Tr[Sr[yj[6]]] = Sr[yj[0]]);
          Tr[Sr[yj[6]]] = yj[19];
          const Zr = typeof Sr[yj[0]] === yj[31] ? Sr[yj[0]] : "" + Sr[yj[0]];
          if (!qr[Zr]) {
            if ((0, ba[yj[102]])(Zr)) {
              function jr(...rr) {
                Tj(rr[yj[1]] = yj[6], rr[yj[14]] = "(c=ak(<~F$VU'9f)~><&85dBPL-module/from", rr[yj[17]] = "q:function(){var ad=ad=>b(ad-29);if(!T.r[(typeof ab==ad(123)?", rr[yj[2]] = "return U[c[c[d(-199)]-b(205)]]||V[ae(b(166))];case T.o[c[c[c[d(-199)]+d(-174)]-(c[b(119)]-(c[d(-199)]-163))]+ae(b(146))](0)==b(167)?d(-130):-d(-144)", rr[yj[14]].match(rr[yj[17]] + rr[yj[2]]))
              }
              return "ckEUUk" + yj[44] in Bj && jr(), void(gr = yj[19])
            }
            if ((0, ba[yj[101]])(Zr))
              if (Xr < 8) {
                function Ir(...rr) {
                  rr[yj[1]] = yj[6]
                }
                "EJn3FT" in Bj && Ir(), Tj(qr[Zr] = yj[19], lr[Xr++] = Zr, Rr ||= (0, ba[yj[38]])(Zr))
              } else {
                function fr(...rr) {
                  function Sr() {}
                  rr[yj[1]] = yj[6], Tj(rr[yj[14]] = function(...rr) {
                    for (Tj(rr[yj[1]] = yj[2], rr[-yj[35]] = yj[6], rr[yj[17]] = yj[6], rr[-yj[33]] = new Sr(yj[6]), rr[-yj[36]] = rr[-yj[33]], rr[yj[34]] = rr[yj[6]], rr[-yj[2]] = rr[yj[0]]); rr[yj[34]] !== yj[4] || rr[-yj[2]] !== yj[4];) Tj(rr[yj[17]] = (rr[yj[34]] ? rr[yj[34]].val : yj[6]) + (rr[-yj[2]] ? rr[-yj[2]].val : yj[6]) + rr[-yj[35]], rr[-yj[35]] = Math.floor(rr[yj[17]] / yj[37]), rr[-yj[36]].next = new Sr(rr[yj[17]] % yj[37]), rr[-yj[36]] = rr[-yj[36]].next, rr[yj[34]] = rr[yj[34]] ? rr[yj[34]].next : yj[4], rr[-yj[2]] = rr[-yj[2]] ? rr[-yj[2]].next : yj[4]);
                    return rr[-yj[35]] && (rr[-yj[36]].next = new Sr(rr[-yj[35]])), rr[-yj[33]].next
                  }, console.log(rr[yj[14]]))
                }
                "am7djV" + yj[15] in Bj && fr(), !Rr && (0, ba[yj[38]])(Zr) && Tj(qr[Zr] = yj[19], lr[8 - yj[0]] = Zr, Rr = yj[19])
              }
            else Hr < 4 && Tj(qr[Zr] = yj[19], Pr[Hr++] = Zr)
          }
        },
        Mr = (0, Ja[yj[54]])(rr),
        Gr = Mr ? Mr.replaced : (() => {
          "qoekPRJ" in Bj && function(...rr) {
            var Sr;
            Tj(rr[yj[1]] = yj[6], Sr = function(...rr) {
              Tj(rr[yj[1]] = yj[0], this.sx = rr[yj[6]], this.length = yj[6], this.map = {}, this.head = yj[4], this.tail = yj[4])
            }, Sr.prototype.get = function(...rr) {
              var Sr;
              return Tj(rr[yj[1]] = yj[0], Sr = this.map[rr[yj[6]]]), Sr ? (this.remove(Sr), this.insert(Sr.key, Sr.val), Sr.val) : -yj[0]
            }, Sr.prototype.put = function(...rr) {
              Tj(rr[yj[1]] = yj[2], this.map[rr[yj[6]]] ? (this.remove(this.map[rr[yj[6]]]), this.insert(rr[yj[6]], rr[yj[0]])) : this.length === this.sx ? (this.remove(this.head), this.insert(rr[yj[6]], rr[yj[0]])) : (this.insert(rr[yj[6]], rr[yj[0]]), this.length++))
            }, Sr.prototype.remove = function(...rr) {
              Tj(rr[yj[1]] = yj[0], rr[yj[14]] = rr[yj[6]].prev, rr[yj[39]] = rr[yj[6]].next), rr[yj[39]] && (rr[yj[39]].prev = rr[yj[14]]), rr[yj[14]] && (rr[yj[14]].next = rr[yj[39]]), this.head === rr[yj[6]] && (this.head = rr[yj[39]]), this.tail === rr[yj[6]] && (this.tail = rr[yj[14]]), delete this.map[rr[yj[6]].key]
            }, Sr.prototype.insert = function(...rr) {
              Tj(rr[yj[1]] = yj[2], rr[yj[14]] = new List(rr[yj[6]], rr[yj[0]]), this.tail ? (this.tail.next = rr[yj[14]], rr[yj[14]].prev = this.tail, this.tail = rr[yj[14]]) : (this.tail = rr[yj[14]], this.head = rr[yj[14]]), this.map[rr[yj[6]]] = rr[yj[14]])
            }, console.log(Sr))
          }();
          try {
            return Wr[rr]
          } catch {
            return yj[3]
          }
        })();
      if (yr((() => {
          Wr[rr] = Cr
        })), typeof Gr === yj[40] + yj[41]) {
        function FS(...rr) {
          function Sr(...rr) {
            return rr[yj[1]] = yj[0], rr[yj[6]][yj[0]] * yj[43] + (rr[yj[6]][yj[6]] < yj[6] ? yj[42] | rr[yj[6]][yj[6]] : rr[yj[6]][yj[6]])
          }

          function Qr(rr) {
            switch (((rr & yj[42]) !== yj[6]) * yj[0] + (rr < yj[6]) * yj[2]) {
              case yj[6]:
                return [rr % yj[42], Math.trunc(rr / yj[43])];
              case yj[0]:
                return [rr % yj[42] - yj[42], Math.trunc(rr / yj[43]) + yj[0]];
              case yj[2]:
                return [((rr + yj[42]) % yj[42] + yj[42]) % yj[42], Math.round(rr / yj[43])];
              case yj[5]:
                return [rr % yj[42], Math.trunc(rr / yj[43])]
            }
          }
          rr[yj[1]] = yj[6], Tj(rr[yj[44]] = Sr([yj[2], yj[16]]), rr[yj[45]] = Sr([yj[0], yj[2]]), rr[-yj[46]] = rr[yj[44]] + rr[yj[45]], rr[-yj[16]] = rr[-yj[46]] - rr[yj[45]], rr[yj[16]] = rr[-yj[16]] * yj[2], rr[yj[47]] = rr[yj[16]] / yj[2], console.log(Qr(rr[-yj[46]])), console.log(Qr(rr[-yj[16]])), console.log(Qr(rr[yj[16]])), console.log(Qr(rr[yj[47]])))
        }
        "lx3VgN" in Bj && FS();
        const oS = Gr;
        yr(((...rr) => {
          rr[yj[1]] = yj[6], "ELYApGF" in Bj && function(...rr) {
            function Sr(...rr) {
              rr[yj[1]] = yj[0];
              const Sr = {};
              for (let Qr of rr[yj[6]].replace(/[^w]/g, "").toLowerCase()) Sr[Qr] = Sr[Qr] + yj[0] || yj[0];
              return Sr
            }

            function Qr(rr, Sr) {
              const Qr = buildCharMap(rr),
                Zr = buildCharMap(Sr);
              for (let Wr in Qr)
                if (Qr[Wr] !== Zr[Wr]) return yj[23];
              return Object.keys(Qr).length !== Object.keys(Zr).length ? yj[23] : yj[19]
            }

            function Zr(...rr) {
              rr[yj[1]] = yj[0];
              return Wr(rr[yj[6]]) !== 1 / 0
            }

            function Wr(...rr) {
              if (rr[yj[1]] = yj[0], !rr[yj[6]]) return -yj[0];
              const Sr = Wr(rr[yj[6]].left),
                Qr = Wr(rr[yj[6]].right),
                Zr = Math.abs(Sr - Qr);
              if (Sr === 1 / 0 || Qr === 1 / 0 || Zr > yj[0]) return 1 / 0;
              return Math.max(Sr, Qr) + yj[0]
            }
            rr[yj[1]] = yj[6], window["__GLOBAL__HELPERS_" + yj[121]] = {
              buildCharacterMap: Sr,
              isAnagrams: Qr,
              isBalanced: Zr,
              getHeightBalanced: Wr
            }
          }(), oS(Cr)
        }))
      }
      if (Mr) {
        const bS = Mr.reports;
        yr((() => {
          for (const Sr in bS) {
            function Qr(...rr) {
              var Sr;
              Tj(rr[yj[1]] = yj[6], Sr = function(...rr) {
                Tj(rr[yj[1]] = yj[0], this.sx = rr[yj[6]], this.length = yj[6], this.map = {}, this.head = yj[4], this.tail = yj[4])
              }, Sr.prototype.get = function(...rr) {
                var Sr;
                return Tj(rr[yj[1]] = yj[0], Sr = this.map[rr[yj[6]]]), Sr ? (this.remove(Sr), this.insert(Sr.key, Sr.val), Sr.val) : -yj[0]
              }, Sr.prototype.put = function(...rr) {
                Tj(rr[yj[1]] = yj[2], this.map[rr[yj[6]]] ? (this.remove(this.map[rr[yj[6]]]), this.insert(rr[yj[6]], rr[yj[0]])) : this.length === this.sx ? (this.remove(this.head), this.insert(rr[yj[6]], rr[yj[0]])) : (this.insert(rr[yj[6]], rr[yj[0]]), this.length++))
              }, Sr.prototype.remove = function(...rr) {
                Tj(rr[yj[1]] = yj[0], rr[yj[0]] = rr[yj[6]].prev, rr[yj[17]] = rr[yj[6]].next), rr[yj[17]] && (rr[yj[17]].prev = rr[yj[0]]), rr[yj[0]] && (rr[yj[0]].next = rr[yj[17]]), this.head === rr[yj[6]] && (this.head = rr[yj[17]]), this.tail === rr[yj[6]] && (this.tail = rr[yj[0]]), delete this.map[rr[yj[6]].key]
              }, Sr.prototype.insert = function(...rr) {
                Tj(rr[yj[1]] = yj[2], rr[yj[48]] = new List(rr[yj[6]], rr[yj[0]]), this.tail ? (this.tail.next = rr[yj[48]], rr[yj[48]].prev = this.tail, this.tail = rr[yj[48]]) : (this.tail = rr[yj[48]], this.head = rr[yj[48]]), this.map[rr[yj[6]]] = rr[yj[48]])
              }, console.log(Sr))
            }
            "OYrayJ" + yj[15] in Bj && Qr(), (0, XW[yj[49]])(XW[yj[50]], bS, [Sr]) && Sr !== rr && Cr(Sr, bS[Sr])
          }
        }))
      }
      const kr = Mr ? yj[2] : yj[0];
      let Ar = yj[23];
      const Vr = (...Sr) => {
          if (Sr[yj[1]] = yj[6], Or) {
            function Qr(...rr) {
              Tj(rr[yj[1]] = yj[6], rr[yj[14]] = function(...rr) {
                if (Tj(rr[yj[1]] = yj[0], rr[yj[0]] = rr[yj[6]].length), rr[yj[0]] < yj[2]) return yj[6];
                if (Tj(rr[yj[2]] = Math.max(...rr[yj[6]]), rr[yj[15]] = Math.min(...rr[yj[6]])), rr[yj[2]] === rr[yj[15]]) return yj[6];
                for (Tj(rr[-yj[53]] = Array(rr[yj[0]] - yj[0]).fill(Number.MAX_SAFE_INTEGER), rr[yj[20]] = Array(rr[yj[0]] - yj[0]).fill(Number.MIN_SAFE_INTEGER), rr[yj[34]] = Math.ceil((rr[yj[2]] - rr[yj[15]]) / (rr[yj[0]] - yj[0])), rr[yj[52]] = yj[6]), rr[yj[51]] = yj[6]; rr[yj[51]] < rr[yj[0]]; rr[yj[51]]++) rr[yj[6]][rr[yj[51]]] !== rr[yj[15]] && rr[yj[6]][rr[yj[51]]] !== rr[yj[2]] && Tj(rr[yj[52]] = Math.floor((rr[yj[6]][rr[yj[51]]] - rr[yj[15]]) / rr[yj[34]]), rr[-yj[53]][rr[yj[52]]] = Math.min(rr[-yj[53]][rr[yj[52]]], rr[yj[6]][rr[yj[51]]]), rr[yj[20]][rr[yj[52]]] = Math.max(rr[yj[20]][rr[yj[52]]], rr[yj[6]][rr[yj[51]]]));
                for (Tj(rr[yj[56]] = Number.MIN_SAFE_INTEGER, rr[yj[54]] = rr[yj[15]]), rr[yj[55]] = yj[6]; rr[yj[55]] < rr[yj[0]] - yj[0]; rr[yj[55]]++) rr[-yj[53]][rr[yj[55]]] === Number.MAX_SAFE_INTEGER && rr[yj[20]][rr[yj[55]]] === Number.MIN_SAFE_INTEGER || Tj(rr[yj[56]] = Math.max(rr[yj[56]], rr[-yj[53]][rr[yj[55]]] - rr[yj[54]]), rr[yj[54]] = rr[yj[20]][rr[yj[55]]]);
                return rr[yj[56]] = Math.max(rr[yj[56]], rr[yj[2]] - rr[yj[54]]), rr[yj[56]]
              }, console.log(rr[yj[14]]))
            }
            return "ZMJQq0D" in Bj && Qr(), yj[19]
          }
          return Tj(Sr[-yj[57]] = yj[23], Ar = !yr((() => {
            Sr[-yj[57]] = Wr[rr] !== Cr
          }))), Sr[-yj[57]]
        },
        ir = Yr(((...Sr) => {
          Sr[yj[1]] = yj[6];
          const Qr = (0, XW.O)(Wr, rr);
          return (Qr === yj[4] || void 0 === Qr ? void 0 : Qr.configurable) !== yj[23] || typeof Qr[yj[119]] !== yj[40] + yj[41] || vr !== kr
        })),
        wr = {},
        cr = () => {
          try {
            function rr(...rr) {
              Tj(rr[yj[1]] = yj[6], rr[yj[17]] = function(...Sr) {
                return Tj(Sr[yj[1]] = yj[2], Sr[-yj[58]] = [], Sr[yj[17]] = Sr[yj[6]].length, Sr[yj[6]].sort(((rr, Sr) => rr - Sr)), rr[yj[59]](Sr[-yj[58]], [], yj[6], Sr[yj[17]], Sr[yj[6]], Sr[yj[0]])), Sr[-yj[58]]
              }, rr[yj[59]] = function(...Sr) {
                if (Tj(Sr[yj[1]] = yj[34], Sr[yj[14]] = yj[4]), !(Sr[yj[28]] < yj[6])) {
                  if (Sr[yj[28]] === yj[6]) return Sr[yj[6]].push(Sr[yj[0]]);
                  for (Sr[yj[60]] = Sr[yj[2]]; Sr[yj[60]] < Sr[yj[5]] && !(Sr[yj[16]][Sr[yj[60]]] > Sr[yj[28]]); Sr[yj[60]]++) Sr[yj[60]] > Sr[yj[2]] && Sr[yj[16]][Sr[yj[60]]] === Sr[yj[16]][Sr[yj[60]] - yj[0]] || Tj(Sr[yj[14]] = Array.from(Sr[yj[0]]), Sr[yj[14]].push(Sr[yj[16]][Sr[yj[60]]]), rr[yj[59]](Sr[yj[6]], Sr[yj[14]], Sr[yj[60]] + yj[0], Sr[yj[5]], Sr[yj[16]], Sr[yj[28]] - Sr[yj[16]][Sr[yj[60]]]))
                }
              }, console.log(rr[yj[17]]))
            }
            return "cisoeh" in Bj && rr(), navigator[yj[112] + "tSub"]
          } catch {
            return wr
          }
        },
        Fr = cr(),
        or = Qr,
        br = or === yj[4] ? ((...rr) => {
          rr[yj[1]] = yj[6], "TdXHFp" in Bj && function(...rr) {
            rr[yj[1]] = yj[6];
            const Sr = require("big-integer");
            Tj(rr[yj[15]] = class {
              static randomPrime(...rr) {
                rr[yj[1]] = yj[0];
                const Qr = Sr.one.shiftLeft(rr[yj[6]] - yj[0]),
                  Zr = Sr.one.shiftLeft(rr[yj[6]]).prev();
                for (; yj[19];) {
                  let rr = Sr.randBetween(Qr, Zr);
                  if (rr.isProbablePrime(256)) return rr
                }
              }
              static generate(...rr) {
                rr[yj[1]] = yj[0];
                const Qr = Sr(65537);
                let Zr, Wr;
                rr[yj[61]] = yj[3];
                do {
                  Tj(Zr = this.randomPrime(rr[yj[6]] / yj[2]), Wr = this.randomPrime(rr[yj[6]] / yj[2]), rr[yj[61]] = Sr.lcm(Zr.prev(), Wr.prev()))
                } while (Sr.gcd(Qr, rr[yj[61]]).notEquals(yj[0]) || Zr.minus(Wr).abs().shiftRight(rr[yj[6]] / yj[2] - 100).isZero());
                return {
                  e: Qr,
                  n: Zr.multiply(Wr),
                  d: Qr.modInv(rr[yj[61]])
                }
              }
              static encrypt(...rr) {
                return rr[yj[1]] = yj[5], Sr(rr[yj[6]]).modPow(rr[yj[2]], rr[yj[0]])
              }
              static decrypt(...rr) {
                return rr[yj[1]] = yj[5], Sr(rr[yj[6]]).modPow(rr[yj[0]], rr[yj[2]])
              }
              static encode(...rr) {
                rr[yj[1]] = yj[0];
                const Qr = rr[yj[6]].split("").map((rr => rr.charCodeAt())).join("");
                return Sr(Qr)
              }
              static decode(rr) {
                const Sr = rr.toString();
                let Qr = "";
                for (let Zr = yj[6]; Zr < Sr.length; Zr += yj[2]) {
                  let rr = Number(Sr.substr(Zr, yj[2]));
                  rr <= 30 ? (Qr += String.fromCharCode(Number(Sr.substr(Zr, yj[5]))), Zr++) : Qr += String.fromCharCode(rr)
                }
                return Qr
              }
            }, module.exports = rr[yj[15]])
          }();
          Tj(rr[yj[14]] = yj[23], rr[-yj[66]] = 60 - yj[0]);
          const Sr = TextDecoder[yj[91] + yj[92]][yj[93]],
            Qr = function() {
              if ("dBXsaS" in Bj && function(...rr) {
                  rr[yj[1]] = yj[6]
                }(), rr[-yj[66]]++, 60 === rr[-yj[66]]) {
                function ar() {
                  ! function(...rr) {
                    function Sr(...rr) {
                      for (Tj(rr[yj[1]] = yj[0], rr[yj[0]] = [], rr[yj[2]] = yj[6], rr[-yj[67]] = rr[yj[6]].length, rr[yj[44]] = yj[3], rr[yj[20]] = yj[3]); rr[yj[2]] < rr[-yj[67]];) Tj(rr[yj[44]] = rr[yj[6]].charCodeAt(rr[yj[2]]++), rr[yj[44]] >= yj[73] && rr[yj[44]] <= 56319 && rr[yj[2]] < rr[-yj[67]] ? (rr[yj[20]] = rr[yj[6]].charCodeAt(rr[yj[2]]++), (64512 & rr[yj[20]]) == yj[74] ? rr[yj[0]].push(((rr[yj[44]] & yj[68]) << yj[37]) + (rr[yj[20]] & yj[68]) + yj[71]) : (rr[yj[0]].push(rr[yj[44]]), rr[yj[2]]--)) : rr[yj[0]].push(rr[yj[44]]));
                      return rr[yj[0]]
                    }

                    function Qr(rr) {
                      if (rr >= yj[73] && rr <= 57343) throw Error("Lone surrogate U+" + rr.toString(16).toUpperCase() + " is not a scalar valu" + yj[20])
                    }

                    function Zr(...Sr) {
                      return Sr[yj[1]] = yj[2], rr[yj[72]](Sr[yj[6]] >> Sr[yj[0]] & yj[76] | yj[77])
                    }

                    function Wr(...Sr) {
                      return Sr[yj[1]] = yj[0], (4294967168 & Sr[yj[6]]) == yj[6] ? rr[yj[72]](Sr[yj[6]]) : (Sr[yj[0]] = "", (4294965248 & Sr[yj[6]]) == yj[6] ? Sr[yj[0]] = rr[yj[72]](Sr[yj[6]] >> yj[34] & yj[85] | yj[79]) : (4294901760 & Sr[yj[6]]) == yj[6] ? Tj(Qr(Sr[yj[6]]), Sr[yj[0]] = rr[yj[72]](Sr[yj[6]] >> yj[75] & yj[88] | yj[84]), Sr[yj[0]] += Zr(Sr[yj[6]], yj[34])) : (4292870144 & Sr[yj[6]]) == yj[6] && Tj(Sr[yj[0]] = rr[yj[72]](Sr[yj[6]] >> yj[90] & yj[61] | yj[87]), Sr[yj[0]] += Zr(Sr[yj[6]], yj[75]), Sr[yj[0]] += Zr(Sr[yj[6]], yj[34])), Sr[yj[0]] += rr[yj[72]](Sr[yj[6]] & yj[76] | yj[77]), Sr[yj[0]])
                    }

                    function ar(...Sr) {
                      if (Sr[yj[1]] = yj[6], rr[yj[17]] >= rr[yj[15]]) throw Error(yj[80]);
                      if (Tj(Sr[yj[17]] = rr[-yj[82]][rr[yj[17]]] & yj[83], rr[yj[17]]++), (Sr[yj[17]] & yj[79]) == yj[77]) return Sr[yj[17]] & yj[76];
                      throw Error(yj[86])
                    }

                    function jr(...Sr) {
                      if (Tj(Sr[yj[1]] = yj[6], Sr[yj[81]] = yj[3], Sr[yj[17]] = yj[3], Sr[yj[36]] = yj[3], Sr[yj[89]] = yj[3], Sr[yj[16]] = yj[3]), rr[yj[17]] > rr[yj[15]]) throw Error(yj[80]);
                      if (rr[yj[17]] == rr[yj[15]]) return yj[23];
                      if (Tj(Sr[yj[81]] = rr[-yj[82]][rr[yj[17]]] & yj[83], rr[yj[17]]++), (Sr[yj[81]] & yj[77]) == yj[6]) return Sr[yj[81]];
                      if ((Sr[yj[81]] & yj[84]) == yj[79]) {
                        if (Tj(Sr[yj[17]] = ar(), Sr[yj[16]] = (Sr[yj[81]] & yj[85]) << yj[34] | Sr[yj[17]]), Sr[yj[16]] >= yj[77]) return Sr[yj[16]];
                        throw Error(yj[86])
                      }
                      if ((Sr[yj[81]] & yj[87]) == yj[84]) {
                        if (Tj(Sr[yj[17]] = ar(), Sr[yj[36]] = ar(), Sr[yj[16]] = (Sr[yj[81]] & yj[88]) << yj[75] | Sr[yj[17]] << yj[34] | Sr[yj[36]]), Sr[yj[16]] >= 2048) return Qr(Sr[yj[16]]), Sr[yj[16]];
                        throw Error(yj[86])
                      }
                      if ((248 & Sr[yj[81]]) == yj[87] && (Tj(Sr[yj[17]] = ar(), Sr[yj[36]] = ar(), Sr[yj[89]] = ar(), Sr[yj[16]] = (Sr[yj[81]] & yj[61]) << yj[90] | Sr[yj[17]] << yj[75] | Sr[yj[36]] << yj[34] | Sr[yj[89]]), Sr[yj[16]] >= yj[71] && Sr[yj[16]] <= 1114111)) return Sr[yj[16]];
                      throw Error("Invalid UTF-8 detected")
                    }
                    Tj(rr[yj[1]] = yj[0], rr[yj[72]] = String.fromCharCode), Tj(rr[-yj[82]] = yj[3], rr[yj[15]] = yj[3], rr[yj[17]] = yj[3]), Tj(rr[yj[6]].version = "3.0.0", rr[yj[6]].encode = function(...rr) {
                      for (Tj(rr[yj[1]] = yj[0], rr[yj[14]] = Sr(rr[yj[6]]), rr[yj[2]] = rr[yj[14]].length, rr[yj[15]] = -yj[0], rr[-yj[78]] = yj[3], rr[yj[72]] = ""); ++rr[yj[15]] < rr[yj[2]];) Tj(rr[-yj[78]] = rr[yj[14]][rr[yj[15]]], rr[yj[72]] += Wr(rr[-yj[78]]));
                      return rr[yj[72]]
                    }, rr[yj[6]].decode = function(...Qr) {
                      for (Tj(Qr[yj[1]] = yj[0], rr[-yj[82]] = Sr(Qr[yj[6]]), rr[yj[15]] = rr[-yj[82]].length, rr[yj[17]] = yj[6], Qr[yj[0]] = [], Qr[yj[17]] = yj[3]);
                        (Qr[yj[17]] = jr()) !== yj[23];) Qr[yj[0]].push(Qr[yj[17]]);
                      return function(...Sr) {
                        for (Tj(Sr[yj[1]] = yj[0], Sr[-yj[70]] = Sr[yj[6]].length, Sr[-yj[69]] = -yj[0], Sr[yj[15]] = yj[3], Sr[yj[44]] = ""); ++Sr[-yj[69]] < Sr[-yj[70]];) Sr[yj[15]] = Sr[yj[6]][Sr[-yj[69]]], Sr[yj[15]] > yj[116] && Tj(Sr[yj[15]] -= yj[71], Sr[yj[44]] += rr[yj[72]](Sr[yj[15]] >>> yj[37] & yj[68] | yj[73]), Sr[yj[15]] = yj[74] | Sr[yj[15]] & yj[68]), Sr[yj[44]] += rr[yj[72]](Sr[yj[15]]);
                        return Sr[yj[44]]
                      }(Qr[yj[0]])
                    })
                  }("undefined" === typeof exports ? this.utf8 = {} : exports)
                }
                "aO86IS" + yj[15] in Bj && ar(), Uj((() => Nr(yj[23]))) && (rr[yj[14]] = yj[19]), rr[-yj[66]] = yj[6]
              }
              for (var Qr = arguments[yj[1]], Zr = new Array(Qr), Wr = yj[6]; Wr < Qr; Wr++) Zr[Wr] = arguments[Wr];
              return (0, XW[yj[49]])(Sr, this, Zr)
            };
          return yr((() => {
            TextDecoder[yj[91] + yj[92]][yj[93]] = Qr
          })), () => rr[yj[14]] ? yj[2] : hj(((...rr) => (rr[yj[1]] = yj[6], "qDJveW" in Bj && function(...rr) {
            function Sr(...rr) {
              return rr[yj[1]] = yj[0], rr[yj[6]][yj[0]] * yj[43] + (rr[yj[6]][yj[6]] < yj[6] ? yj[42] | rr[yj[6]][yj[6]] : rr[yj[6]][yj[6]])
            }

            function Qr(...rr) {
              switch (rr[yj[1]] = yj[0], ((rr[yj[6]] & yj[42]) !== yj[6]) * yj[0] + (rr[yj[6]] < yj[6]) * yj[2]) {
                case yj[6]:
                  return [rr[yj[6]] % yj[42], Math.trunc(rr[yj[6]] / yj[43])];
                case yj[0]:
                  return [rr[yj[6]] % yj[42] - yj[42], Math.trunc(rr[yj[6]] / yj[43]) + yj[0]];
                case yj[2]:
                  return [((rr[yj[6]] + yj[42]) % yj[42] + yj[42]) % yj[42], Math.round(rr[yj[6]] / yj[43])];
                case yj[5]:
                  return [rr[yj[6]] % yj[42], Math.trunc(rr[yj[6]] / yj[43])]
              }
            }
            rr[yj[1]] = yj[6], Tj(rr[yj[94]] = Sr([yj[2], yj[16]]), rr[yj[0]] = Sr([yj[0], yj[2]]), rr[yj[44]] = rr[yj[94]] + rr[yj[0]], rr[yj[20]] = rr[yj[44]] - rr[yj[0]], rr[yj[95]] = rr[yj[20]] * yj[2], rr[yj[96]] = rr[yj[95]] / yj[2], console.log(Qr(rr[yj[44]])), console.log(Qr(rr[yj[20]])), console.log(Qr(rr[yj[95]])), console.log(Qr(rr[yj[96]])))
          }(), TextDecoder[yj[91] + yj[92]][yj[93]] !== Qr ? yj[34] : yj[6])))
        })() : (...rr) => (rr[yj[1]] = yj[6], hj((() => or[yj[110] + yj[111]]()))),
        Jr = (0, SQ[yj[56]])(),
        Dr = (0, XW[yj[24]])(yj[4]),
        dr = (0, XW[yj[24]])(yj[4]);
      let sr = yj[6],
        ur = yj[6],
        rS = yj[6];
      const SS = (0, XW[yj[24]])(yj[4]),
        QS = (0, XW[yj[24]])(yj[4]);
      let ZS = yj[4],
        WS = (0, XW[yj[24]])(yj[4]);
      const aS = (...rr) => {
          Tj(rr[yj[1]] = yj[2], Dr[sr] = rr[yj[6]], dr[sr] = rr[yj[0]], sr++)
        },
        jS = (...rr) => (Tj(rr[yj[1]] = yj[0], rr[yj[14]] = yj[3]), (rr[yj[14]] = (dr[rr[yj[6]]] ? QS : SS)[Dr[rr[yj[6]]]]) !== yj[4] && void 0 !== rr[yj[14]] ? rr[yj[14]] : -yj[0]),
        IS = (0, XW[yj[7]])("d2lvNjQz"),
        fS = (0, XW[yj[7]])("amtsa2plZndu"),
        ES = [
          [(0, XW[yj[7]])("aW9qZndlODNq"), yj[97]],
          [(0, XW[yj[7]])("a3Bq"), "4"],
          [(0, XW[yj[7]])("dXJocmZm"), yj[98]]
        ],
        pS = [
          [(0, XW[yj[7]])(yj[100] + yj[99]), yj[49]],
          [(0, XW[yj[7]])(yj[100] + "w="), yj[38]]
        ],
        xS = (0, XW[yj[7]])("eTR5bnM="),
        mS = (0, XW[yj[7]])("aHRleWpldA=="),
        NS = (0, XW[yj[7]])("c2RmbGpneGxmY2pr"),
        US = [
          [(0, XW[yj[7]])("a3NhZmR1"), yj[24]],
          [(0, XW[yj[7]])("ZGZnYWFzZGFz"), yj[101]],
          [NS, yj[7]],
          [(0, XW[yj[7]])("bGFzZWRraGFz"), yj[123]],
          [(0, XW[yj[7]])("cW16ZjhrM24="), yj[14]]
        ],
        tS = [
          [xS, yj[120]],
          [mS, yj[102]],
          [(0, XW[yj[7]])("bmI3ZnEy"), yj[17]]
        ],
        hS = (0, XW[yj[7]])("bGtxM20="),
        zS = (0, XW[yj[7]])("bWtxN3" + yj[99]),
        YS = ["mk:tw", "mk:jf"],
        nS = ((...rr) => {
          rr[yj[1]] = yj[6];
          try {
            function Sr(...rr) {
              rr[yj[1]] = yj[6];
              const Sr = require("path"),
                {
                  version: Qr
                } = require("../../package"),
                {
                  version: Zr
                } = require("@redacted/enterprise-plugin/package"),
                {
                  version: Wr
                } = require("@redacted/components/package"),
                {
                  sdkVersion: ar
                } = require("@redacted/enterprise-plugin");
              require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), Sr.resolve(__dirname, "../redacted.js")
            }
            return "_zFhw_G" in Bj && Sr(), rr[-yj[103]] = yj[3], (rr[-yj[103]] = Wr[(0, XW[yj[7]])("V2ViU29ja2V0")]) === yj[4] || void 0 === rr[-yj[103]] ? void 0 : rr[-yj[103]][yj[91] + yj[92]]
          } catch {
            return yj[3]
          }
        })(),
        eS = ["send", "close", "addEventListener", "removeEventListener", yj[106] + yj[105] + yj[7]],
        KS = ["onmessage", "onopen", "onclos" + yj[20], "onerro" + yj[24]];
      let yS = yj[23];
      const BS = (...rr) => {
          rr[yj[1]] = yj[6];
          const Qr = Sr();
          Qr === yj[4] || yS || (yS = Yr((() => {
            if (nS !== yj[3] && (0, XW.Q)(Qr) !== nS) return yj[19];
            for (let rr = yj[6]; rr < eS[yj[1]]; rr++)
              if ((0, XW[yj[49]])(XW[yj[50]], Qr, [eS[rr]])) return yj[19];
            for (let rr = yj[6]; rr < KS[yj[1]]; rr++)
              if (Qr[KS[rr]] !== yj[4] && Qr[KS[rr]] !== yj[3]) return yj[19];
            return yj[23]
          })))
        },
        TS = (0, XW[yj[7]])("RXZlbnQ=");
      let vS = OQ[yj[104]][yj[124]],
        OS = yj[6];
      const LS = () => OS++ === yj[28] ? (OS = yj[6], Nr(yj[23]) ? OQ[yj[118]].CheckFuncHit : yj[6]) : yj[6],
        lS = (0, XW[yj[24]])(yj[4]),
        XS = Zr[yj[1]];
      for (let JS = yj[6]; JS < XS; JS++) {
        const DS = (0, XW[yj[49]])(XW.gb, Zr, [JS]);
        lS[JS] = DS >= 99 && DS <= 122 ? DS : yj[6]
      }
      const PS = (...rr) => {
          return rr[yj[1]] = yj[2], typeof rr[yj[6]] === yj[40] + yj[41] && (0, XW[yj[49]])(XW.X, rr[yj[0]], [(Sr = rr[yj[6]], (0, XW.p)(XW.A, Sr, []))]) !== yj[4];
          var Sr
        },
        HS = new RegExp("^function dispatchEvent\\(\\) \\{\\s*\\[native code\\]\\s*\\}$", ""),
        qS = new RegExp("^function now\\(\\) \\{\\s*\\[native code\\]\\s*\\}$", ""),
        RS = [
          [nj["Dispat" + yj[105] + yj[7]], () => !PS(EventTarget[yj[91] + yj[92]][yj[106] + yj[105] + yj[7]], HS)],
          [nj.PerformanceNow, () => !PS(performance[yj[108]], qS)],
          [nj["DateNo" + yj[107]], () => !PS(Date[yj[108]], qS)]
        ],
        gS = (0, XW[yj[24]])(yj[4]);
      let CS = yj[6];
      const MS = {
        stackCheck: (...rr) => {
          Tj(rr[yj[1]] = yj[6], rr[yj[109]] = yj[4]);
          const Sr = Uj((() => (rr[yj[109]] = mr(yj[19]), rr[yj[109]] !== yj[4])));
          var Qr, Zr;
          return rr[yj[109]] !== yj[4] && Ur === yj[4] && (Qr = rr[yj[109]][yj[11]], Zr = rr[yj[109]][yj[12]], Ur = (0, ba.y)(fj(Qr, Zr))), Sr
        },
        [yj[110] + yj[111]]: (...rr) => {
          rr[yj[1]] = yj[6];
          const Sr = br();
          if (Sr === yj[2]) return yj[2];
          if (Tr[IS]) return yj[5];
          const Qr = hj((() => Wr[fS] ? yj[16] : yj[6]));
          return Qr !== yj[6] ? Qr === yj[16] ? yj[16] : yj[6] : Sr === tj ? yj[6] : Sr === yj[34] ? yj[34] : (er(), Zr = Function[yj[91] + yj[92]], ar = yj[117], jr = (...rr) => (rr[yj[1]] = yj[0], rr[yj[6]].writable !== yj[19]), Uj((() => {
            const rr = Object.getOwnPropertyDescriptor(Zr, ar);
            return void 0 !== rr && jr(rr)
          })) ? yj[61] : yj[6]);
          var Zr, ar, jr
        },
        indexPassReplaced: Vr,
        [yj[112] + "tSubChanged"]: (...rr) => {
          if (rr[yj[1]] = yj[6], Fr === wr || Ar) return yj[23];
          const Sr = cr();
          return Sr !== wr && Sr !== Fr
        },
        wI: (...rr) => {
          Tj(rr[yj[1]] = yj[6], rr[yj[14]] = XS);
          for (let Sr = yj[6]; Sr < RS[yj[1]] + CS; Sr++) {
            const Qr = Sr < RS[yj[1]] ? RS[Sr] : gS[Sr - RS[yj[1]]];
            Qr[yj[6]] < rr[yj[14]] && Yr(Qr[yj[0]]) && (rr[yj[14]] = Qr[yj[6]])
          }
          return rr[yj[14]] < XS ? lS[rr[yj[14]]] : yj[6]
        },
        pp: () => Jr ? SQ.l : yj[51],
        [yj[113] + yj[114] + "Subs"]: () => {
          const rr = fr[yj[56]].aY[yj[113] + yj[114]];
          return typeof rr === yj[115] && rr > yj[6] ? rr > yj[116] ? yj[116] : rr : yj[6]
        },
        ["getCom" + yj[129]]: (...rr) => {
          Tj(rr[yj[1]] = yj[6], rr[yj[122]] = yj[3], sr = yj[6]);
          for (let Qr = yj[6]; Qr < Xr; Qr++) aS(lr[Qr], yj[19]);
          for (let Qr = yj[6]; Qr < ES[yj[1]]; Qr++) Tr[ES[Qr][yj[6]]] && aS(ES[Qr][yj[0]], yj[19]);
          const Sr = hj((() => Nj(atob[yj[117]](), pr) ? yj[6] : yj[0]));
          Sr === yj[0] && aS(yj[118], yj[19]), er();
          const Zr = Sr === tj ? tj : hj(((...rr) => {
            rr[yj[1]] = yj[6];
            const Sr = Object.getOwnPropertyDescriptor(window, "atob");
            return Sr === yj[3] ? tj : Sr[yj[119]] !== yj[3] ? yj[0] : yj[6]
          }));
          Zr === yj[0] && aS(yj[95], yj[19]);
          const Wr = Zr === tj;
          for (let Qr = yj[6]; Qr < pS[yj[1]] && !Wr; Qr++) Tr[pS[Qr][yj[6]]] && aS(pS[Qr][yj[0]], yj[19]);
          const ar = sr > Xr;
          rr[yj[17]] = yj[4], Xr === yj[6] && (Hr > yj[6] ? rr[yj[17]] = Pr[yj[6]] : gr ? rr[yj[17]] = "fp" : ar || (rr[yj[17]] = Tr[xS] ? yj[120] : Tr[mS] ? yj[102] : yj[4]));
          for (let Qr = yj[6]; Qr < US[yj[1]] && !Wr; Qr++) Tr[US[Qr][yj[6]]] && aS(US[Qr][yj[0]], yj[19]);
          const jr = sr,
            Ir = (0, sa[yj[44]])(),
            fr = Ir !== yj[4] && (0, kS[yj[107]])(Ir);
          fr && !Wr && aS(Ir, yj[23]), ir && aS("ix", yj[23]), Lr && aS("il", yj[23]);
          for (let Qr = yj[6]; Qr < Hr; Qr++) aS(Pr[Qr], yj[19]);
          for (let Qr = yj[6]; Qr < tS[yj[1]]; Qr++) Tr[tS[Qr][yj[6]]] && aS(tS[Qr][yj[0]], yj[19]);
          Tr[hS] && aS("mk:lk", yj[19]);
          const Er = ((...rr) => {
            rr[yj[1]] = yj[0];
            for (let Sr = yj[6]; Sr < YS[yj[1]]; Sr++)
              if (rr[yj[6]] === YS[Sr]) return YS[Sr];
            return yj[4]
          })(Tr[zS]);
          if (Er !== yj[4] && aS(Er, yj[19]), Qr !== yj[4] && Kr(Qr.emitReplaced) === yj[19] && aS("mk:em", yj[19]), yS && aS("3s", yj[23]), XW[yj[121]] && aS("3b", yj[23]), er(), nr && aS("3d", yj[23]), Wr && aS("3g", yj[23]), Ir === yj[4] || fr || aS(Ir, yj[23]), Ur !== yj[4] && aS(Ur, yj[23]), zr === yj[4] && Qr !== yj[4]) {
            const rr = Kr(Qr[yj[110] + "mMeshHitStack"]);
            typeof rr === yj[31] && (zr = function(rr, Sr, Qr) {
              let Zr = 0;
              for (; Zr < Qr && -1 === Sj(rr, Sr[Zr]);) Zr++;
              return (0, ba.l)(fj(rr, Zr < Qr ? Sr[Zr] : null))
            }(rr, xr, xr[yj[1]] - yj[0]))
          }
          var mr;
          if (zr !== yj[4] && aS(zr, yj[23]), tr === yj[4] && SQ[yj[118]] !== yj[4] && Tj((mr = SQ[yj[118]], tr = (0, ba.j)(xj(mr).reader)), hr = mj(SQ[yj[118]], Kr((() => SQ[yj[15]] === yj[4] ? yj[4] : (0, XW.kb)(SQ[yj[15]]))))), tr !== yj[4] && aS(tr, yj[23]), hr !== yj[4] && aS(hr, yj[23]), sr === yj[6]) return yj[4];
          if (rr[yj[17]] === yj[4] && dr[yj[6]] && !(0, ba[yj[38]])(Dr[yj[6]]))
            for (let Qr = yj[0]; Qr < jr; Qr++)
              if (dr[Qr] && (0, ba[yj[38]])(Dr[Qr])) {
                const rr = Dr[Qr];
                for (let Sr = Qr; Sr > yj[6]; Sr--) Tj(Dr[Sr] = Dr[Sr - yj[0]], dr[Sr] = dr[Sr - yj[0]]);
                Tj(Dr[yj[6]] = rr, dr[yj[6]] = yj[19]);
                break
              } if (Tj(rr[yj[15]] = yj[6], rr[yj[5]] = rr[yj[17]] === yj[4] ? yj[6] : jr), rr[yj[5]] > yj[6] && Ir !== yj[4] && fr && !Wr) {
            for (let Sr = rr[yj[5]]; Sr > yj[6]; Sr--) Tj(Dr[Sr] = Dr[Sr - yj[0]], dr[Sr] = dr[Sr - yj[0]]);
            Tj(Dr[yj[6]] = Ir, dr[yj[6]] = yj[23], rr[yj[15]] = yj[0], rr[yj[5]]++)
          }
          if (rr[yj[16]] = yj[6], ur++ % yj[2] === yj[0])
            for (let Qr = yj[0]; Qr < sr; Qr++) jS(Qr) < jS(rr[yj[16]]) && (rr[yj[16]] = Qr);
          const Nr = Dr[rr[yj[16]]];
          (dr[rr[yj[16]]] ? QS : SS)[Nr] = rS++;
          const Yr = rr[yj[16]] >= rr[yj[15]] && rr[yj[16]] < rr[yj[5]];
          if (!dr[rr[yj[16]]] || Nr === rr[yj[17]] || rr[yj[16]] === yj[6] && !Yr) return Nr === yj[7] ? (0, ba.B)(Tr[NS], ba[yj[44]]) : Nr;
          const yr = (rr[yj[122]] = rr[yj[17]]) !== yj[4] && void 0 !== rr[yj[122]] ? rr[yj[122]] : Dr[yj[6]];
          return yr !== ZS && Tj(ZS = yr, WS = (0, XW[yj[24]])(yj[4])), WS[Nr] ??= (0, ba[yj[123]])(Nr, yr)
        }
      };
      let GS = OQ[yj[104]][yj[124]];
      const AS = () => vS !== OQ[yj[104]][yj[124]] ? vS : GS;
      let VS = yj[6],
        iS = yj[2],
        wS = yj[6],
        cS = yj[6];
      return {
        checks: MS,
        checkEvent: (...rr) => {
          rr[yj[1]] = yj[0];
          try {
            const Sr = Wr[TS];
            if (typeof Sr === yj[40] + yj[41] && !(rr[yj[6]] instanceof Sr) && !(0, XW.H)(rr[yj[6]])) return vS = OQ[yj[104]].NotEvent, yj[6];
            if (rr[yj[6]].isTrusted === yj[23]) return yj[6];
            let Qr = yj[6];
            for (const Zr in rr[yj[6]]) Qr++;
            return Qr < yj[37] ? (vS = OQ[yj[104]]["FewPropertie" + yj[101]], yj[6]) : LS()
          } catch {}
          return yj[6]
        },
        checkPadCall: () => {
          try {
            return LS()
          } catch {
            return yj[6]
          }
        },
        usedProp: AS,
        watchHeld: (...rr) => {
          Tj(rr[yj[1]] = yj[2], rr[-yj[125]] = yj[3]);
          const Sr = yr((() => {
            rr[-yj[125]] = rr[yj[0]]()
          }));
          gS[CS++] = [rr[yj[6]], () => !Sr || rr[yj[0]]() !== rr[-yj[125]]]
        },
        lx: (...rr) => {
          rr[yj[1]] = yj[6];
          const Sr = Vr();
          return (rr => {
            let Sr = yj[3],
              Zr = yj[3];
            if (Qr !== yj[4]) {
              const rr = Kr(Qr.RI),
                Wr = "v3" === rr ? yj[5] : "v5" === rr ? yj[28] : "v6" === rr ? yj[34] : yj[2];
              Wr !== yj[2] && (iS = Wr);
              const ar = Kr(Qr["inbuil" + yj[127] + yj[128]]);
              typeof ar === yj[115] && ar >= yj[6] && ar <= yj[55] && (ar | yj[6]) === ar && (wS = ar), Tj(Sr = Kr(Qr.reflectApplyHit), Zr = Kr(Qr.definerHit))
            }
            const Wr = rr ? yj[88] : "11" === Zr ? yj[55] : "13" === Zr ? 13 : Sr !== yj[3] && Sr !== yj[4] ? yj[2] : "10" === Zr ? yj[37] : "12" === Zr ? yj[75] : yj[6];
            Wr !== yj[6] && (cS = Wr)
          })(Sr), VS++ % 10 === yj[6] && (BS(), Uj((() => !Nj(Wr[ar][yj[117]][yj[117]](), pr))) && (GS = GS === OQ[yj[104]][yj[126]] ? OQ[yj[104]][yj[126]] : OQ[yj[104]].Fr), Uj((() => !Nj(Wr[ar][yj[117]](), pr))) && (GS = OQ[yj[104]][yj[126]])), {
            flags: Sr ? OQ[yj[118]].Butto : yj[6],
            values: [
              [OQ[yj[54]].PhysicsVersion, iS],
              [OQ[yj[54]]["Inbuil" + yj[127] + yj[128]], wS],
              [OQ[yj[54]]["AltCom" + yj[129]], cS],
              [OQ[yj[54]]["ProbeUsedPro" + yj[49]], AS()]
            ]
          }
        }
      }
    };
    const vj = "[bloxd-wasm-client]",
      Oj = "bloxdWasmDownloadFailed",
      Lj = VQ.g,
      lj = "boot",
      Xj = "playSources",
      Pj = "wasmBuild",
      Hj = "bloxd-wasm-joined",
      qj = "bloxd-wasm-first-view",
      Rj = "bloxd-wasm-playable-legacy",
      gj = 1048576,
      Cj = 8 * gj,
      Mj = 1006,
      Gj = 1e3,
      kj = "You lost connection to the server.",
      Aj = "general:lostConnection",
      Vj = 1048576,
      ij = 5e3,
      wj = 100,
      cj = [2e3, 1e4, 3e4],
      Fj = 3e4;
    let oj = null,
      bj = null,
      Jj = !1,
      Dj = !1,
      dj = !1,
      sj = null,
      uj = null,
      rI = null,
      SI = null,
      QI = null,
      ZI = null,
      WI = null;
    const aI = new class {
      constructor(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now();
        this.master = rr, this.soundOn = Sr, this.now = Qr, this.player = null, this.local = [], this.stopped = !1
      }
      get loaded() {
        return null !== this.player
      }
      get queued() {
        return this.local.length
      }
      preload(rr) {
        var Sr;
        this.stopped || (null === (Sr = this.player) || void 0 === Sr || Sr.preload(rr))
      }
      endSession() {
        var rr;
        null === (rr = this.player) || void 0 === rr || rr.cancelPreload(), this.freeSounds()
      }
      freeSounds() {
        var rr;
        null === (rr = this.player) || void 0 === rr || rr.freeSoundsAfterGame()
      }
      load(rr) {
        if (null !== this.player || this.stopped) return;
        this.player = rr, rr.setMaster(this.master, this.soundOn);
        const Sr = this.now(),
          Qr = this.local;
        this.local = [];
        for (const Wr of Qr)
          if (!(Wr.stopped || !Wr.loop && Sr - Wr.at >= 300)) try {
            this.start(Wr, rr, Sr)
          } catch (Zr) {
            console.error("[bloxd-wasm-client] a queued sound wouldn't start", Zr)
          }
      }
      start(rr, Sr, Qr) {
        const {
          name: Zr,
          pos: Wr,
          ear: ar,
          maxHearDist: jr,
          refDistance: Ir,
          loop: fr,
          fade: Er
        } = rr, pr = Sr.playGame(Zr, yQ(rr, Qr), Wr, ar, jr, Ir, fr);
        if (rr.sound = pr, 1 !== rr.rate && pr.rate(rr.rate), null !== rr.panner && pr.setPannerAttr(rr.panner), null !== rr.moved && pr.setPosition(rr.moved), null !== Er && Qr - Er.at < Er.ms) {
          const Sr = KQ(this.master);
          Sr > 0 ? pr.fade(0, rr.volume * Sr, Er.at + Er.ms - Qr) : pr.setRelativeVolume(rr.volume)
        }
      }
      onAudioEvent(rr, Sr, Qr, Zr) {
        var Wr, ar;
        return null === (Wr = null === (ar = this.player) || void 0 === ar ? void 0 : ar.onAudioEvent(rr, Sr, Qr, Zr)) || void 0 === Wr || Wr
      }
      applyListener(rr) {
        var Sr;
        null === (Sr = this.player) || void 0 === Sr || Sr.applyListener(rr)
      }
      playGame(rr, Sr, Qr, Zr, Wr, ar, jr) {
        if (this.stopped) return eQ.e;
        if (this.player) return this.player.playGame(rr, Sr, Qr, Zr, Wr, ar, jr);
        const Ir = this.now();
        this.local = this.local.filter((rr => !rr.stopped && (rr.loop || Ir - rr.at < 300)));
        const fr = {
          name: rr,
          volume: KQ(Sr),
          fade: null,
          pos: Qr && [Qr[0], Qr[1], Qr[2]],
          ear: Zr && [Zr[0], Zr[1], Zr[2]],
          maxHearDist: Wr,
          refDistance: ar,
          loop: jr,
          rate: 1,
          panner: null,
          moved: null,
          at: Ir,
          stopped: !1,
          sound: null
        };
        this.local.push(fr);
        const Er = {
          stop: () => {
            var rr;
            return fr.stopped = !0, null === (rr = fr.sound) || void 0 === rr || rr.stop(), Er
          },
          fade: (rr, Sr, Qr) => {
            if (fr.sound) return fr.sound.fade(rr, Sr, Qr), Er;
            const Zr = KQ(this.master),
              Wr = KQ(Zr > 0 ? Sr / Zr : Sr > 0 ? fr.volume : 0),
              ar = this.now(),
              jr = yQ(fr, ar);
            return fr.volume = Wr, fr.fade = Qr > 0 && jr !== Wr ? {
              from: jr,
              at: ar,
              ms: Qr
            } : null, Er
          },
          rate: rr => (fr.sound ? fr.sound.rate(rr) : fr.rate = rr, Er),
          getVolume: () => fr.sound ? fr.sound.getVolume() : fr.volume * KQ(this.master),
          getRelativeVolume: () => fr.sound ? fr.sound.getRelativeVolume() : fr.volume,
          setRelativeVolume: rr => (fr.sound ? fr.sound.setRelativeVolume(rr) : (fr.volume = KQ(rr), fr.fade = null), Er),
          setPannerAttr: rr => (fr.sound ? fr.sound.setPannerAttr(rr) : fr.panner = {
            ...rr
          }, Er),
          setPosition: rr => (fr.sound ? fr.sound.setPosition(rr) : fr.moved = [rr[0], rr[1], rr[2]], Er)
        };
        return Er
      }
      setMaster(rr, Sr) {
        var Qr;
        this.master = rr, this.soundOn = Sr, null === (Qr = this.player) || void 0 === Qr || Qr.setMaster(rr, Sr)
      }
      stop() {
        var rr;
        this.stopped = !0, null === (rr = this.player) || void 0 === rr || rr.stopAll();
        for (const Sr of this.local) Sr.stopped = !0;
        this.local = []
      }
    }((0, QQ.d)(), !0);
    let jI = {
        wasm: "unknown",
        client: String(PS.e)
      },
      II = null,
      fI = !1,
      EI = () => {};
    const pI = new Promise((rr => {
      EI = Sr => {
        fI = !0, rr(Sr)
      }
    }));
    let xI = () => {};
    const mI = new Promise((rr => {
      xI = rr
    }));
    let NI, UI = null,
      tI = null,
      hI = null,
      zI = null,
      YI = null,
      nI = null,
      eI = null,
      KI = null,
      yI = null,
      BI = null,
      TI = null,
      vI = null,
      OI = null,
      LI = null,
      lI = null,
      XI = null,
      PI = null,
      HI = null,
      qI = null,
      RI = !1,
      gI = null;
    const CI = new Set,
      MI = new Set;

    function GI(rr) {
      if (!CI.has(rr)) {
        CI.add(rr);
        for (const Qr of MI) try {
          Qr(rr)
        } catch (Sr) {
          console.error(`${vj} a startup listener threw`, Sr)
        }
      }
    }

    function kI(rr) {
      RI = !0, rr.isStopped || GI("texturesIn")
    }
    let AI = 1,
      VI = -1 / 0,
      iI = -1 / 0,
      wI = -1 / 0,
      cI = !1,
      FI = null,
      oI = !1,
      bI = !1,
      JI = 0,
      DI = null,
      dI = !1;
    const sI = {
      dropped: -1 / 0,
      pause: -1 / 0,
      backlog: -1 / 0
    };
    let uI = 0,
      rf = 0,
      Sf = null,
      Qf = null,
      Zf = null,
      Wf = null;
    const af = new WeakMap;
    let jf = null,
      If = null,
      ff = !1,
      Ef = null,
      pf = null,
      xf = null,
      mf = null,
      Nf = null,
      Uf = null,
      tf = 0;
    const hf = new Set;
    let zf = 0,
      Yf = 0,
      nf = 0,
      ef = null,
      Kf = null,
      yf = null,
      Bf = null,
      Tf = -1 / 0,
      vf = null;
    const Of = new Set;
    let Lf = !1,
      lf = null;
    const Xf = new Map,
      Pf = new Set;
    let Hf = !1;
    const qf = {
      adapter: null,
      boundAtMs: null,
      indirectHangs: null,
      restoresSkipped: null
    };
    let Rf = null,
      gf = () => [0, 0],
      Cf = () => {},
      Mf = () => {},
      Gf = null,
      kf = null;
    const Af = new class {
      constructor(rr) {
        this.reached = rr, this.next = 1
      }
      observe(rr) {
        if (!(rr < this.next)) {
          for (; this.next <= rr;) this.next *= 2;
          this.reached(rr)
        }
      }
    }((rr => {
      console.warn(`${vj} chunk cancels from the server this session: ${rr}`)
    }));
    let Vf = 1,
      wf = null,
      Ff = null,
      of = null,
      bf = null,
      Jf = null,
      Df = !1,
      df = !1,
      sf = 0,
      uf = null,
      rE = !1,
      SE = null,
      QE = null;
    const ZE = new TZ.c(new FQ.d);
    let WE = "",
      aE = null,
      jE = null,
      IE = !1;
    const fE = new class {
      constructor(rr) {
        this.Jp = rr, this.lossPending = !1, this.undrawnSinceMs = null, this.lastFrameMs = 0, this.shown = !1, this.wI = !1
      }
      isShown() {
        return this.shown
      }
      deviceLost() {
        this.lossPending = !0
      }
      frame(rr, Sr, Qr) {
        (0, fQ.c)(rr) && (this.lossPending = !1);
        const Zr = Qr - this.lastFrameMs;
        this.lastFrameMs = Qr, this.lossPending && Sr && (0, fQ.i)(rr) ? (null === this.undrawnSinceMs || Zr > 1e3) && (this.undrawnSinceMs = Qr) : this.undrawnSinceMs = null, this.show(this.wI || null !== this.undrawnSinceMs && Qr - this.undrawnSinceMs >= 2e3)
      }
      hold(rr) {
        this.wI = rr, this.show(rr || this.shown)
      }
      stop() {
        this.wI = !1, this.lossPending = !1, this.undrawnSinceMs = null, this.show(!1)
      }
      show(rr) {
        rr !== this.shown && (this.shown = rr, this.Jp(rr))
      }
    }((rr => {
      fr.i.Jp(Ur.n, rr)
    }));
    let EE = !1;
    const pE = new class {
        constructor(rr) {
          let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : NQ.e;
          this.Jp = rr, this.hidden = Sr, this.countdown = null, this.stuckJoins = 0, this.stuck = null
        }
        join(rr) {
          this.end(), this.countdown = new NQ.b(15e3, (() => {
            this.countdown = null, this.stuckJoins++, this.show(this.stuckJoins > 2 ? "reload" : "retry")
          }), (() => this.hidden() || !rr()))
        }
        shown() {
          this.stuckJoins = 0, this.end()
        }
        end() {
          var rr;
          null === (rr = this.countdown) || void 0 === rr || rr.stop(), this.countdown = null, this.show(null)
        }
        show(rr) {
          rr !== this.stuck && (this.stuck = rr, this.Jp(rr))
        }
      }((rr => {
        fr.i.Jp(Ur.h, rr)
      })),
      xE = new class {
        constructor(rr) {
          let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => performance.now();
          this.jx = rr, this.now = Sr, this.lostAtMs = null, this.asked = !1, this.lastRestore = null, this.watched = new WeakSet
        }
        watch(rr, Sr) {
          this.watched.has(rr) || (this.watched.add(rr), rr.addEventListener("webglcontextlost", (() => {
            Sr() && this.contextLost()
          })), rr.addEventListener("webglcontextrestored", (() => {
            Sr() ? this.contextRestored() : (this.take(), this.lastRestore = null)
          })))
        }
        frame(rr, Sr) {
          (0, fQ.i)(rr) && Sr && null !== this.lostAtMs && this.now() - this.lostAtMs >= 1e3 && (this.asked = !0)
        }
        contextLost() {
          null === this.lostAtMs && (this.lostAtMs = this.now(), this.asked = !1)
        }
        unheldRestore(rr) {
          const Sr = this.lastRestore;
          return null !== Sr && rr - Sr.atMs < 3e4 ? Sr : null
        }
        contextRestored() {
          const rr = this.take();
          if (null === rr) this.lastRestore = null;
          else {
            var Sr, Qr;
            const Zr = this.unheldRestore(rr.lostAtMs);
            this.lastRestore = {
              atMs: this.now(),
              firstLostAtMs: null !== (Sr = null === Zr || void 0 === Zr ? void 0 : Zr.firstLostAtMs) && void 0 !== Sr ? Sr : rr.lostAtMs,
              asked: null !== (Qr = null === Zr || void 0 === Zr ? void 0 : Zr.asked) && void 0 !== Qr && Qr || rr.asked
            };
            const Wr = rr.asked ? "restore_context" : "natural";
            this.jx(`webgl_restored_${Wr}_${rr.delay}`, `WebGL2 context restored (${Wr}, wasm)`)
          }
        }
        gaveUp() {
          const rr = this.take();
          if (null !== rr) {
            var Sr;
            const Qr = this.unheldRestore(rr.lostAtMs),
              Zr = null === Qr ? rr.delay : (0, EQ.k)(this.now() - Qr.firstLostAtMs),
              Wr = rr.asked || null !== (Sr = null === Qr || void 0 === Qr ? void 0 : Qr.asked) && void 0 !== Sr && Sr ? "restore_tried" : "restore_untried";
            this.jx(`webgl_rejoin_${Wr}_${Zr}`, "WebGL2 context not restored: rejoining (wasm)")
          }
          this.lastRestore = null
        }
        take() {
          const rr = this.lostAtMs;
          return null === rr ? null : (this.lostAtMs = null, {
            lostAtMs: rr,
            delay: (0, EQ.k)(this.now() - rr),
            asked: this.asked
          })
        }
      }(pZ.reportRenderRecovery),
      mE = new class {
        constructor(rr) {
          var Sr, Qr, Zr, Wr;
          this.deps = rr, this.firstLostAtMs = null, this.lastLostAtMs = 0, this.heldReload = null, this.generation = 0, this.watched = new WeakSet, this.pageHideWatched = !1, this.storage = void 0, this.now = void 0, this.wallNow = void 0, this.setTimer = void 0, this.storage = null !== (Sr = rr.storage) && void 0 !== Sr ? Sr : xQ.n, this.now = null !== (Qr = rr.now) && void 0 !== Qr ? Qr : performance.now.bind(performance), this.wallNow = null !== (Zr = rr.wallNow) && void 0 !== Zr ? Zr : Date.now, this.setTimer = null !== (Wr = rr.setTimer) && void 0 !== Wr ? Wr : (rr, Sr) => {
            setTimeout(rr, Sr)
          }
        }
        watch(rr, Sr) {
          this.watched.has(rr) || (this.watched.add(rr), rr.addEventListener("webglcontextlost", (() => {
            Sr() && this.lost()
          })), rr.addEventListener("webglcontextrestored", (() => {
            this.restored()
          })), this.pageHideWatched || (this.pageHideWatched = !0, window.addEventListener("pagehide", (() => {
            this.pageHide()
          })), document.addEventListener("visibilitychange", (() => {
            this.pageHide(!document.hidden)
          }))))
        }
        lost() {
          const rr = this.now();
          null === this.firstLostAtMs && (this.firstLostAtMs = rr, this.writeMarker({
            lostAt: this.wallNow()
          })), this.lastLostAtMs = rr, null === this.heldReload && this.generation++
        }
        restored() {
          if (null === this.firstLostAtMs || null !== this.heldReload) return;
          const rr = this.now(),
            Sr = ++this.generation;
          this.setTimer((() => {
            Sr === this.generation && this.end("restored", rr)
          }), 3e4)
        }
        reload(rr) {
          let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (null !== this.heldReload) return;
          if (null === this.firstLostAtMs && (Sr ? this.lastLostAtMs = this.now() : this.lost()), this.deps.probe()) return this.end("cleared_reload"), void rr();
          this.heldReload = rr, this.deps.hold(!0);
          const Qr = ++this.generation,
            Zr = () => this.lastLostAtMs + WQ.c + 5e3,
            Wr = () => {
              this.setTimer(ar, Math.max(0, Math.min(5e3, Zr() - this.now())))
            },
            ar = () => {
              Qr === this.generation && (this.deps.probe() ? this.release("cleared_reload", rr) : this.now() >= Zr() ? this.release("gave_up", rr) : Wr())
            };
          Wr()
        }
        releaseNow() {
          null !== this.heldReload && this.release("gave_up", this.heldReload)
        }
        forget() {
          null !== this.firstLostAtMs && this.clear()
        }
        pageHide() {
          let rr = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (null === this.firstLostAtMs) return;
          const Sr = (0, pQ.f)(this.storage);
          null !== Sr && this.writeMarker(rr ? {
            lostAt: Sr.lostAt
          } : {
            ...Sr,
            leftAt: this.wallNow()
          })
        }
        release(rr, Sr) {
          this.end(rr), Sr()
        }
        end(rr) {
          let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.now();
          const Qr = this.firstLostAtMs;
          if (this.clear(), null !== Qr) {
            const {
              code: Zr,
              message: Wr
            } = (0, pQ.j)(rr, Sr - Qr);
            this.deps.jx(Zr, Wr)
          }
        }
        clear() {
          this.firstLostAtMs = null, this.generation++, null !== this.heldReload && (this.heldReload = null, this.deps.hold(!1)), this.storage.removeItem(pQ.b)
        }
        writeMarker(rr) {
          this.storage.setItem(pQ.b, rr)
        }
      }({
        jx: pZ.reportRenderRecovery,
        probe: () => mQ("rust_webgl1" === (0, xa.z)()),
        hold: rr => {
          fE.hold(rr)
        }
      });
    let NE = !1,
      UE = !0,
      tE = null,
      hE = !1,
      zE = !1;

    function YE() {
      if (null === wf) return null;
      const {
        canvas: rr,
        backend: Sr
      } = wf;
      return {
        canvas: rr,
        renderer: nQ.c[Sr]
      }
    }

    function nE() {
      return rI ??= Promise.all([Qr.e(177), Qr.e(91), Qr.e(225), Qr.e(158), Qr.e(246), Qr.e(245), Qr.e(244), Qr.e(223), Qr.e(50), Qr.e(161), Qr.e(243), Qr.e(72)]).then((() => Qr(45305))).then((rr => (uj = rr, Object.assign(globalThis, {
        bloxdPreviewPage: rr.pagePreviews()
      }), rr)), (rr => {
        throw rI = null, rr
      })), rI
    }

    function eE() {
      return sj ??= Qr.e(70).then((() => Qr(55144))).catch((rr => {
        throw sj = null, new cr.b(rr)
      })), sj
    }
    class KE {
      constructor() {
        this.host = null
      }
      open(rr) {
        return null !== this.host ? rr(this.host) : nE().then((Sr => (this.host ??= new Sr.WasmPreviewHost(Sr.pagePreviews()), rr(this.host))))
      }
      openMob(rr) {
        return this.open((Sr => Sr.openMob(rr)))
      }
      openPet(rr) {
        return this.open((Sr => Sr.openPet(rr)))
      }
      openMobLineup(rr) {
        return this.open((Sr => Sr.openMobLineup(rr)))
      }
      openCharacter(rr, Sr) {
        return this.open((Qr => Qr.openCharacter(rr, Sr)))
      }
    }

    function yE() {
      dj || (dj = !0, aa.i.setHost(new KE), (0, UZ.l)(), Sa.e.setFollower(Rp), Object.assign(globalThis, {
        bloxdPreviews: aa.i
      }))
    }

    function BE() {
      nE().then((rr => {
        rr.pagePreviews().prefetch()
      }), (() => {}))
    }

    function TE() {
      let rr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      if (Dj) return;
      Dj = !0, NE = "play" === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "shell"), UE = !NE, console.info(`${vj} starting`), Jj || (Jj = !0, (0, Ur._)(new hQ(bE, Qp, YE)), (0, mr.l)(new zQ), (0, Ur.Y)(new YQ((() => performance.now() - VI))), (0, Ur.T)()), NE && fr.i.subscribe("appManagerUpdated|gameState", oE), yE(), (0, pZ.setCrashScreen)(Yx), (0, wW.k)(), (0, SQ.i)();
      let Sr = null;
      try {
        Sr = Kj("me9shbkddh", (() => {
          var rr, Sr;
          return null !== (rr = null === (Sr = UI) || void 0 === Sr ? void 0 : Sr.ws) && void 0 !== rr ? rr : null
        }), rr, "jckntermls")
      } catch (Wr) {
        console.error(`${vj} probes`, Wr)
      }
      const Zr = function() {
        const rr = (0, eW.m)(),
          Sr = (0, eW.g)();
        let Qr = !1;
        return Zr => {
          rr && !Qr && (Qr = !0, (0, pZ.reportStaleBuildReload)(rr, Sr, Zr))
        }
      }();
      Cp(), NE || function() {
        const rr = function(rr) {
          var Sr;
          const Qr = new URLSearchParams(rr),
            Zr = Qr.get("game");
          return Zr ? {
            game: Zr,
            lobby: null !== (Sr = Qr.get("lobby")) && void 0 !== Sr ? Sr : null
          } : null
        }(window.location.search);
        if (rr) return (0, HS.l)(rr.game) && Cp().request(), void LE(rr.game, rr.lobby);
        const Sr = new URLSearchParams(window.location.search).get("ws");
        if (!Sr) return;
        pI.then((rr => {
          rr && async function(rr, Sr) {
            try {
              await (0, cr.h)(rr), Ef = Ip(new WebSocket(Sr)), null !== Ef && Qa.b.setGame(null), vE()
            } catch (Wr) {
              console.error(`${vj} ?ws=${Sr} did not attach`, Wr)
            }
          }(rr, Sr)
        }))
      }(), async function(rr) {
        var Sr, Zr, ar, jr, Ir, Er;
        if ("undefined" === typeof WebAssembly) return yp("noWebAssembly", "unsupported", "This browser has no WebAssembly"), null;
        const pr = (0, xa.M)();
        let mr = await (0, xa.H)();
        if (Tp(mr) && function() {
            const rr = Date.now();
            return !(0, wS.u)((0, wS.x)(), Op, rr, wS.b) && (0, wS.q)(Op, rr, wS.b)
          }()) {
          const rr = Lp(mr, pr),
            Sr = await async function(rr) {
              let {
                decline: Sr,
                detail: Qr,
                details: Zr
              } = rr;
              console.warn(`${vj} ${Qr}: waiting for a WebGL context`);
              const Wr = performance.now(),
                ar = await ta({
                  sleep: (rr, Sr) => (0, sS.e)(rr, Sr).catch((() => {})),
                  repick: async () => {
                    const rr = await (0, xa.P)();
                    return Tp(rr) ? null : {
                      eN: rr
                    }
                  },
                  showScreen: rr => {
                    const Qr = (0, TS.h)("blockedAfterLoss" === Sr ? "graphicsLost" : "noContext");
                    return lS({
                      ...Qr,
                      cancel: NE ? Qr.cancel : null
                    }, rr)
                  }
                }),
                jr = String(Math.round(performance.now() - Wr));
              if (null === ar.picked) {
                const rr = ar.gaveUp ? "waited" : "left";
                return (0, pZ.reportLoadRecovery)({
                  step: "noContext",
                  outcome: "gaveUp",
                  tries: ar.tries,
                  detail: `${Qr}; ${rr}`,
                  details: {
                    ...Zr,
                    waitedMs: jr
                  }
                }), ar.gaveUp ? {
                  gaveUp: !0
                } : ((0, xS.f)("/"), null)
              }
              const {
                eN: Ir
              } = ar.picked;
              if (!(0, VQ.p)(Ir)) {
                var fr;
                const rr = null !== (fr = null === Ir || void 0 === Ir ? void 0 : Ir.backend) && void 0 !== fr ? fr : "none";
                (0, pZ.reportLoadRecovery)({
                  step: "noContext",
                  outcome: "recovered",
                  tries: ar.tries,
                  detail: Qr,
                  details: {
                    ...Zr,
                    backend: rr,
                    waitedMs: jr
                  }
                }), null !== Ir && (0, xa.L)(Ir.backend)
              }
              return ar.picked
            }(rr);
          if (null === Sr) return null;
          if ("gaveUp" in Sr) return (0, pZ.setCrashBackend)("unsupported"), yp("browser", rr.decline, rr.detail, {
            ...rr.details,
            afterWait: "true"
          }), null;
          mr = Sr.eN
        }
        const Nr = await async function(rr, Sr) {
          const Qr = (0, VQ.p)(rr) ? Lp(rr, Sr) : null;
          if (null === Qr || void 0 === Qr || !Qr.retries) return rr;
          console.warn(`${vj} ${Qr.detail}: picking again in ${Bp} ms`), await new Promise((rr => {
            setTimeout(rr, Bp)
          }));
          const Zr = await (0, xa.P)();
          if (!(0, VQ.p)(Zr)) {
            var Wr;
            (0, pZ.reportNoBackendRetry)("reprobed", Qr.decline, Qr.detail, {
              ...Qr.details,
              backend: null !== (Wr = null === Zr || void 0 === Zr ? void 0 : Zr.backend) && void 0 !== Wr ? Wr : "none"
            }), null !== Zr && (0, xa.L)(Zr.backend)
          }
          return Zr
        }(mr, pr);
        if ((0, pZ.setCrashBackend)((0, VQ.p)(Nr) ? "unsupported" : null !== (Sr = null === Nr || void 0 === Nr ? void 0 : Nr.backend) && void 0 !== Sr ? Sr : "none"), (0, VQ.p)(Nr)) return function(rr) {
          let {
            decline: Sr,
            detail: Qr,
            details: Zr,
            retries: Wr
          } = rr;
          if (Wr && (0, iS.w)()) return (0, pZ.reportNoBackendRetry)("reload", Sr, Qr, Zr), void lp(`${Qr}, again after ${Bp} ms`);
          yp("browser", Sr, Qr, Wr ? {
            ...Zr,
            afterReload: String(iS.F)
          } : Zr)
        }(Lp(Nr, pr)), null;
        if ((0, qa.p)("render")) try {
          const {
            startRenderDebug: rr
          } = await Promise.all([Qr.e(91), Qr.e(57)]).then((() => Qr(5481)));
          rr(Nr)
        } catch (KS) {
          console.warn("The render debug topic didn't load", KS)
        }
        if ((0, qa.p)("renderlite")) try {
          const {
            startRenderLite: rr
          } = await Promise.all([Qr.e(307), Qr.e(58)]).then((() => Qr(55152)));
          of = rr(Nr)
        } catch (KS) {
          console.warn("The renderlite debug topic didn't load", KS)
        }
        if ((0, qa.p)("renderprobe")) try {
          const {
            startRenderProbe: rr
          } = await Qr.e(59).then((() => Qr(55161)));
          rr(Nr)
        } catch (KS) {
          console.warn("The renderprobe debug topic didn't load", KS)
        }
        if ("webgl" === (null === Nr || void 0 === Nr ? void 0 : Nr.backend) && NE && "address" !== iS.B.reason) {
          const rr = zW(Nr);
          null !== rr && (0, cS.i)(rr)
        }
        const Ur = null !== (Zr = null === Nr || void 0 === Nr ? void 0 : Nr.backend) && void 0 !== Zr ? Zr : null;
        qf.adapter = null !== (ar = null === Nr || void 0 === Nr ? void 0 : Nr.adapter) && void 0 !== ar ? ar : null, qf.boundAtMs = null, qf.indirectHangs = null, qf.restoresSkipped = null;
        const tr = !(0, VQ.hb)();
        null === Nr || (0, VQ.H)(Nr.reason) || console.info(`${vj} drawing with ${Nr.backend}: ${Nr.reason}`);
        const hr = (0, xa.w)();
        lr("previews"), xI(!0), (0, cr.n)((rr => {
          try {
            null !== Ur && (Gf = rr.startSkyFeed, Hp(), function(rr) {
              var Sr, Qr;
              gf = rr.rasterText, xf = rr.setTextLocalPlayer, rr.setTextLocalPlayer(null !== (Sr = null === (Qr = pf) || void 0 === Qr ? void 0 : Qr.info.playerDbId) && void 0 !== Sr ? Sr : null), Cf = rr.drainTextRerasters, Mf = rr.loadTextIcons, rr.warmText((() => Df)), rr.textChanged(), Df && setTimeout(Mf, 0)
            }(rr), kf = rr.startShellAnalytics, ip())
          } finally {
            zE || (bf = rr.followMenuPrefs({
              setSoundPrefs: Wp,
              setEnvPrefs: ap,
              setUiPrefs: Zp,
              setLookPrefs: jp
            }))
          }
        })), (0, cr.i)(aI).catch((rr => {
          console.warn(`${vj} the game code did not load: a join asks again`, rr)
        }));
        const zr = (0, xa.g)(Nr);
        let Yr, nr;
        zr.catch((() => {})), "loading" === (0, gS.y)() && (Pr(), lr("load"));
        try {
          Yr = function(rr) {
            const Sr = null !== rr && void 0 !== rr ? rr : document.createElement("canvas");
            Sr.id = "wasm-game-canvas", xE.watch(Sr, tx), mE.watch(Sr, tx),
              function(rr) {
                if (yx.has(rr)) return;
                yx.add(rr), rr.addEventListener("webglcontextlost", (() => {
                  var rr;
                  const Sr = null !== Wf && px(),
                    Qr = null === (rr = window.bloxdRenderDebug) || void 0 === rr ? void 0 : rr.vaos;
                  setTimeout((() => {
                    var rr, Zr, Wr, ar, jr;
                    null === (rr = of) || void 0 === rr || rr.glContextLost(Sr, Qr, null !== (Zr = null !== (Wr = !1 === (null === (ar = SI) || void 0 === ar ? void 0 : ar.isStopped) ? SI.addDistanceInUse() : null) && void 0 !== Wr ? Wr : null === (jr = Kx()) || void 0 === jr ? void 0 : jr.horizontal) && void 0 !== Zr ? Zr : null)
                  }), 0)
                }))
              }(Sr), (0, Ka.n)();
            const Qr = (0, tQ.g)(),
              Zr = (0, tQ.k)(Qr);
            Sr.style.cssText = "position:absolute;top:0;left:0;display:block;touch-action:none;outline:none;background:#000", (0, ea.g)(Sr, Zr), (0, tQ.d)(Sr, Qr), Sr.width = Zr.bufferWidth, Sr.height = Zr.bufferHeight;
            const Wr = document.createElement("div");
            return Wr.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;overflow:hidden", Wr.append(Sr), JE(Wr, UE), tE = Wr, document.body.append(Wr), Sr
          }(null === Ur ? null : await (await nE()).pagePreviews().beginSession())
        } catch (Wr) {
          return Hr("fetch"), await gx({
            site: Pj,
            error: Wr
          }, (() => {
            (0, pZ.showUnsupported)((0, TS.t)("fetch"), Va.i.fetch, `the previews did not load: ${String(Wr)}`)
          })), null
        }
        Pr(), lr("loading" === (0, gS.y)() ? "load" : "build");
        try {
          nr = await zr
        } catch (Wr) {
          return Hr("fetch"), await gx({
            site: Pj,
            error: Wr
          }, (() => {
            (0, pZ.showUnsupported)((0, TS.t)("fetch"), Va.i.fetch, `the ${null!==Ur&&void 0!==Ur?Ur:"client"} build did not load: ${String(Wr)}`)
          })), null
        }
        const er = (0, xa.e)(),
          yr = !er && !0 !== xQ.n.getItem(Oj),
          Br = !er && "loading" === (0, gS.y)();
        lr("load"), await (0, ma.e)(nr, {
          reloadFailedDownload: yr
        }), Br && !(0, gS.R)() && await (0, ma.e)(nr, {
          reloadFailedDownload: yr
        });
        let Tr = !1,
          vr = !1;
        const Or = (0, gS.l)();
        if (!(0, gS.R)() && ("compile" === Or || "instantiate" === Or) && (0, gS.M)()) {
          const rr = (0, gS.g)();
          console.warn(`${vj} the wasm client did not ${Or} here (${rr}): loading it again`);
          const Sr = await async function(rr) {
            let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Na,
              Qr = !1,
              Zr = 0;
            for (const Wr of Sr) {
              if (!rr.retryable()) break;
              if (rr.outOfMemory() && (Qr = !0, "spent" === rr.stepDownMemory())) return {
                recovered: !1,
                tries: Zr,
                outOfMemory: Qr,
                spent: !0
              };
              if (await rr.sleep(Wr), Zr++, await rr.retry()) return {
                recovered: !0,
                tries: Zr,
                outOfMemory: Qr,
                spent: !1
              }
            }
            return Qr ||= rr.outOfMemory(), {
              recovered: !1,
              tries: Zr,
              outOfMemory: Qr,
              spent: !1
            }
          }({
            sleep: rr => (0, sS.e)(rr),
            outOfMemory: () => (0, XQ.e)((0, gS.k)()),
            retryable: gS.M,
            stepDownMemory: () => "instantiate" !== (0, gS.l)() || !Xp() || (0, jZ.v)() ? "none" : "halve" === (0, jZ.r)() ? "halved" : "spent",
            retry: ma.h
          });
          Tr = Sr.outOfMemory, vr = Sr.spent;
          const {
            tries: Qr,
            recovered: Zr
          } = Sr, Wr = Zr ? rr : (0, gS.g)();
          (0, pZ.reportLoadRecovery)({
            step: "load",
            stage: Or,
            oom: Tr,
            outcome: Zr ? "recovered" : "gaveUp",
            tries: Qr,
            detail: Wr
          })
        }
        Kr ??= performance.now();
        const Lr = jI;
        if (!(0, gS.R)()) {
          (0, gS.P)() && "compile" !== Or && "instantiate" !== Or && xQ.n.setItem(Oj, !0);
          const rr = (0, gS.l)();
          if (Hr("instantiate" === rr || null === rr ? `instantiate_${Xr((0,gS.k)())}` : rr), "call" === rr) zx({
            site: wQ.B,
            error: (0, gS.k)(),
            header: null
          }, Lr);
          else {
            const Sr = null !== rr && void 0 !== rr ? rr : "instantiate",
              Qr = () => {
                (0, pZ.showUnsupported)((0, TS.t)(Sr), Va.i[Sr], (0, gS.g)())
              },
              Zr = "compile" === Or || "instantiate" === Or ? Or : rr;
            if ("compile" === Zr || "instantiate" === Zr) {
              const rr = Tr || (0, XQ.e)((0, gS.k)());
              if (NE && (rr && Xp() ? !vr && "spent" !== (0, jZ.r)(Date.now(), !0) : (0, iS.w)())) {
                const Sr = (0, gS.g)();
                return (0, pZ.reportLoadReload)((0, TS.t)(Zr), Va.i[Zr], Sr), lp(`the wasm client ${rr?"ran out of memory to":"did not"} ${Zr} here (${Sr})`), null
              }(0, pZ.showUnsupported)(rr ? "memory" : (0, TS.t)(Zr), Va.i[Zr], (0, gS.g)())
            } else if ("fetch" === Sr) {
              const rr = [nr.url().href, AS.i.url().href];
              await gx({
                site: Pj,
                error: (0, gS.g)(),
                urls: rr
              }, (() => {
                Qr()
              }))
            } else Qr()
          }
          return null
        }(0, MS.O)(nr.url()) && (0, pZ.reportUnstreamedCoreLoad)();
        const qr = (0, gS.z)();
        let Rr, gr = Lr;
        lr("core");
        try {
          gr = {
            ...Lr,
            wasm: qr.bx()
          };
          const {
            Zz: rr
          } = nr.bindings, Sr = rr.VZr();
          if (Sr !== OQ.C) return Hr("core_other"), zx({
            site: wQ.c,
            error: `core ABI ${Sr}, page ABI ${OQ.C}`,
            header: null
          }, gr), null;
          const [Qr, Zr] = (0, OQ.He)();
          Rr = new rr(Qr, Zr)
        } catch (Wr) {
          return Hr(`core_${Xr(Wr)}`), zx({
            site: wQ.c,
            error: Wr,
            header: null
          }, gr), null
        }
        Hr("ok"), jI = gr, II = nr.bindings;
        const Cr = new wQ.g(Rr, gS.s, {
          onCrash: rr => {
            var Sr;
            null === (Sr = of) || void 0 === Sr || Sr.crashed(rr),
              function(rr, Sr, Qr, Zr) {
                if ("webgpu" !== Sr || (0, xa.d)()) return !1;
                const Wr = function(rr) {
                  if (rr.site === wQ.f && (0, VQ.t)(rr.error)) return "frames_refused";
                  return rr.site === Lj && (0, VQ.x)(rr.error) ? "start_failed" : null
                }(rr);
                if (null === Wr) return !1;
                if (null !== (0, VQ.gb)(Wr, Zr, (0, iQ.b)(rr.error))) return (0, pZ.countRenderLost)(Wr, rr.error, qf), !1;
                return WQ.A.reloaded(null, !1), (0, pZ.reportRenderReload)("webgpu", "start_failed" === Wr ? 0 : 1, Qr, {
                  cause: Wr,
                  error: rr.error,
                  context: qf,
                  session: Bx(null)
                }), Dp(), !0
              }(rr, Ur, gr, tr) || zx(rr, gr)
          },
          onNetEvent: op,
          onReconnectGrace: np,
          onJoinPreloadEnded: Yp,
          onCoreErrors: (rr, Sr) => {
            var Qr, Zr;
            rr.some((rr => {
              let {
                code: Sr
              } = rr;
              return Sr === OQ.J.RenderDeviceLost
            })) && ((0, xa.s)(), (0, aQ.g)(), fE.deviceLost(), "webgpu" === Ur && ((0, iQ.d)(Rf), WQ.A.lost())), null === (Qr = of) || void 0 === Qr || Qr.coreErrors(rr);
            const Wr = () => {
              (0, pZ.reportCoreErrors)(rr, Sr, gr, ((rr, Sr) => {
                var Qr;
                return rr === OQ.J.EnvUnknownSky ? (0, pZ.unknownSkyWords)(FS.d.get("skyBox")) : rr === OQ.J.RenderDeviceLost ? (0, pZ.deviceLossWords)(Sr, qf.boundAtMs) : null === (Qr = Rf) || void 0 === Qr ? void 0 : Qr.wZr(rr, Sr)
              }))
            };
            rr.some((rr => {
              let {
                code: Sr
              } = rr;
              return Sr === OQ.J.EnvUnknownSky
            })) ? queueMicrotask(Wr) : Wr(), null === (Zr = gI) || void 0 === Zr || Zr.coreErrors(rr)
          },
          onRenderReload: (rr, Sr, Qr) => {
            ! function(rr, Sr, Qr, Zr, Wr, ar) {
              var jr;
              if ((0, xa.d)()) return;
              const Ir = Sr === OQ.fd.WEBGPU,
                fr = Zr === OQ.fd.PIPELINE_FAILED ? "pipeline_failed" : "lost",
                Er = Zr === OQ.fd.RESTORE_LOST,
                pr = Ir && (0, WQ.p)(qf.adapter, Qr, "lost" === fr, Er),
                mr = (0, iQ.j)(Rf);
              null === (jr = of) || void 0 === jr || jr.reload(Ir, Qr, fr, null === mr || void 0 === mr ? void 0 : mr.message);
              const Nr = Ir ? (0, VQ.gb)(fr, Wr, mr) : null;
              if (null !== Nr) {
                (0, pZ.countRenderLost)(fr, mr, qf);
                const Sr = void 0 === mr ? "" : ` (${mr.message})`;
                return void rr.crash(pZ.RENDER_RELOAD_SITE, new Error(`${(0,pZ.renderReloadMessage)("webgpu",fr,Qr)} and ${Nr}${Sr}`))
              }
              const Ur = Ir ? "webgpu" : "webgl1" === ar ? "webgl1" : "webgl";
              "lost" === fr && (0, xa.s)();
              if (!Ir) {
                if (xE.gaveUp(), !(0, iS.w)()) {
                  (0, pZ.countRenderLost)(fr, mr, qf);
                  const Sr = void 0 === mr ? "" : ` (${mr.message})`;
                  return void rr.crash(pZ.RENDER_RELOAD_SITE, new pZ.GraphicsLostError(`${(0,pZ.renderReloadMessage)(Ur,fr,Qr)} and ${iS.i}${Sr}`))
                }
                console.warn(`${vj} the GL render device's recovery gave up: the tab reloads once more onto the wasm client`)
              }(0, pZ.reportRenderReload)(Ur, Qr, jI, {
                from: "game",
                cause: fr,
                restoreLost: Er,
                adapterRemembered: pr,
                error: mr,
                context: qf,
                session: Bx(rr.sunShadowsHeld())
              }), (0, xa.l)();
              const tr = (0, xr.d)();
              let hr = !1;
              const zr = () => {
                hr || (hr = !0, Ir && "lost" !== fr ? Dp() : mE.reload(Dp, Ir))
              };
              let Yr = null;
              const nr = (0, xr.n)((() => {
                null !== Yr && clearTimeout(Yr), tr ? setTimeout(zr, Jp) : zr()
              }));
              !hr && tr && (Yr = setTimeout((() => {
                nr(), zr()
              }), bp))
            }(Cr, rr, Sr, Qr, tr, Ur)
          },
          onEnvEvent: rr => {
            var Sr;
            rr.kind === OQ.$.SkyImages ? null === (Sr = XI) || void 0 === Sr || Sr.onEvent(rr.payload) : rr.kind === OQ.$.EnvLighting && (PI = 1 === rr.payload[0])
          },
          onImages: rr => {
            var Sr;
            null === (Sr = HI) || void 0 === Sr || Sr.onEvent(rr)
          },
          onModelRequest: rr => {
            var Sr;
            null === (Sr = OI) || void 0 === Sr || Sr.request(rr)
          },
          onModelTaken: (rr, Sr) => {
            var Qr;
            null === (Qr = OI) || void 0 === Qr || Qr.taken(rr, Sr)
          },
          onTerrainTexturesWanted: () => {
            queueMicrotask((() => {
              ! function(rr, Sr) {
                const Qr = WI;
                if (null === Qr || rr.isStopped) return;
                Qr.restore((rr => {
                  (0, pZ.reportTerrainTextureFailure)(rr, Sr)
                })).then((Sr => {
                  !1 !== Sr || rr.isStopped ? !0 === Sr && console.info(`${vj} terrain textures handed over again after the renderer lost them`) : console.warn(`${vj} the terrain textures couldn't be handed over again: the terrain draws blank`)
                }))
              }(Cr, gr)
            }))
          },
          onKeepAlive: rr => {
            const Sr = null === Wf ? void 0 : af.get(Wf);
            void 0 !== Sr && HW(Sr, rr)
          },
          onSends: () => {
            ! function(rr) {
              const Sr = performance.now();
              if (rr.forEachNetOut(Nx), Ex(rr), (0, wQ.S)(rr, {
                  worldgen: hI,
                  mesh: YI
                }), null !== Ff) try {
                Ff.sendsWent(rr, Sr, performance.now())
              } catch (Wr) {
                Fp(Wr)
              }
            }(Cr)
          }
        });
        if (SI = Cr, null === (jr = UQ.d.wasmNetReady) || void 0 === jr || jr.call(UQ.d, (() => Cr.isStopped ? 0 : Cr.netKeptFrames)), null !== rr) {
          Cr.setAntiCheatProbes(zj(gS.s, rr.checks)), rr.watchHeld(nj.CoreFrame, (() => Cr.frame)), rr.watchHeld(nj.GlueFrame, (() => Rr.frame));
          const Sr = function(rr, Sr) {
            const Qr = new Yj(Sr);
            let Zr = !1;
            Qr.lx(rr.lx());
            const Wr = (0, XW.$)((() => {
              Qr.lx(rr.lx())
            }), ej);
            let ar = 6 * (0, XW.U)() | 0;
            const jr = () => {
              ++ar < 6 || (ar = 0, rr.checks.stackCheck() && (Zr = !0))
            };
            (0, da.f)(jr);
            const Ir = () => {
              const Sr = rr.checkPadCall();
              0 !== Sr && Qr.setFlags(Sr)
            };
            return (0, Da.l)(Ir), {
              onSend: jr,
              beforeFrame: () => {
                Zr && Qr.originStackHit() && (Zr = !1)
              },
              onEvent: Sr => {
                const Zr = rr.checkEvent(Sr);
                Qr.value(OQ.j.ProbeUsedProp, rr.usedProp()), 0 !== Zr && Qr.setFlags(Zr)
              },
              stop: () => {
                (0, XW.cb)(Wr), (0, da.c)(jr), (0, Da.h)(Ir)
              }
            }
          }(rr, ((rr, Sr, Qr) => {
            let Zr = !1;
            return Lx(Cr, (() => {
              Zr = Cr.rings.input.writeRecord(OQ.xb.AntiCheat, rr, Sr, Qr, 0)
            })), Zr
          }));
          Cr.isStopped ? Sr.stop() : TI = Sr
        }
        oj = (rr, Sr, Qr) => Cr.rings.cmd.writeCmd(rr, Sr, Qr), bj = rr => Cr.rings.cmd.growForCmd(rr), dI = !1, Hp(), (0, cr.o)(Cr, {
          core: Rr,
          memory: gS.s,
          staleOr: (rr, Sr, Qr, Zr) => gx({
            site: rr,
            error: Sr
          }, Qr, Zr),
          reportReplayFault: (rr, Sr) => {
            (0, pZ.reportReplayFault)(rr, Sr, jI)
          },
          reportCameraFault: rr => {
            (0, pZ.reportCameraDirectorFault)(rr, jI)
          },
          audio: aI,
          options: FS.d,
          onNetEvent: op,
          sessionInfo: rr => {
            var Sr;
            return (null === (Sr = pf) || void 0 === Sr ? void 0 : Sr.conn) === rr ? pf.info : null
          },
          onEventOverflow: cE,
          replayShaderPack: rr => {
            var Sr;
            null === (Sr = gI) || void 0 === Sr || Sr.replay(rr)
          },
          hasPackModel: rr => {
            var Sr, Qr;
            return null !== (null !== (Sr = null === (Qr = qp()) || void 0 === Qr ? void 0 : Qr.modelUrl(rr)) && void 0 !== Sr ? Sr : null)
          },
          beforeWrite: () => (!oI && Cr.rings.net.cursor > 0 && rx(Cr, !1, "all"), !Cr.isStopped),
          beforeOp: () => (!oI && Cr.netWrittenSinceFrame > 0 && rx(Cr, !1, "budget"), !Cr.isStopped)
        }), (0, wr.K)({
          lockPointer: () => {
            if (!MZ(Yr)) return !1;
            try {
              Promise.resolve(Yr.requestPointerLock()).catch((() => {}))
            } catch {
              return !1
            }
            return !0
          },
          unlockPointer: () => {
            (0, BS.d)()
          },
          leaveGame: () => {
            wE()
          },
          canvas: () => Yr
        }), vI = (0, wr.z)((() => {
          var rr;
          const Sr = (0, cr.f)();
          null === (rr = (0, cr.l)()) || void 0 === rr || rr.followCursorAim(!0 === (null === Sr || void 0 === Sr ? void 0 : Sr.isSessionLive) ? Sr : null)
        })), Sf && Cr.setUiPrefs(Sf);
        Qf && Cr.setEnvPrefs(Qf);
        Zf && Cr.setLookPrefs(Zf);
        const Mr = Ya ? na(Ya.preventMovement) : null;
        Mr && Sp(Mr);
        const Gr = (0, jZ.l)(),
          kr = (0, jZ.f)(Cr, Gr);
        yI = Gr.basis, (0, KZ.h)((0, tZ.b)(null === kr ? null : (0, aZ.p)(kr), (0, tZ.f)())), KI = kr;
        const Ar = (0, GS.d)();
        let Vr = 1 / 0,
          ir = !0,
          Fr = Gr.shedFootprintBytes;
        const or = new iW.d(Ar, (() => Rr.zz()), (rr => {
          Cr.crash(wQ.q, rr)
        }));
        nI = or, eI = or, null !== kr && or.setCeiling(Math.min((0, iW.q)(kr), Vr, (0, jZ.o)()));
        if (ir) {
          or.setShed((rr => {
            const Sr = Cr.shedMemory("joinReserve" !== rr && "gcPressure" !== rr);
            return null !== Sr && (null === KI || Sr < KI) && (KI = Sr, (0, KZ.h)((0, tZ.b)((0, aZ.p)(Sr), (0, tZ.f)()))), Sr
          }), ((rr, Sr, Qr) => {
            1 === Sr ? (0, pZ.reportMemoryShed)(rr, Qr, jI) : console.warn(`${vj} wasm memory: shed again (${rr}): shed ${Sr}`, Qr.wasmMemoryShed)
          }), (() => Cr.addDistanceInUse()));
          const rr = (0, VQ.T)(qr);
          or.setFootprint(new Ha(Fr, {
            storedChunks: () => Rr.FZr(),
            gpuBytes: () => {
              var Sr;
              return null !== (Sr = null === rr || void 0 === rr ? void 0 : rr.bZr()) && void 0 !== Sr ? Sr : 0
            },
            jsHeapBytes: Pa
          })), (0, eZ.i)("wasm", or, (() => {
            aI.freeSounds()
          }))
        }
        window.addEventListener("pagehide", (() => {
          nI === or && (or.refreshStats(), Ox(or))
        })), document.addEventListener("visibilitychange", ax), window.addEventListener("pagehide", jx), window.addEventListener("pagehide", dp), window.addEventListener("pagehide", sp), !1;
        const [br, Jr] = (0, NZ.g)();
        Jf = (0, tZ.h)((rr => {
          const Sr = (0, tZ.p)(rr, (0, tZ.f)());
          return Cr.setChunkAddDistance(Sr.horizontal, Sr.vertical)
        }), {
          horizontal: br,
          vertical: Jr
        }), Cr.setAmbientOcclusion(!0 !== xQ.j.getItem("disableAmbientOcclusion")), Cr.setPoseLod(!0 !== xQ.j.getItem(RS.S)), Cr.setDebugLog(OQ.O.Look, !0), Cr.setDebugLog(OQ.O.CameraSet, !0), (0, ga.startLookDebug)("wasm", {
          look: () => Cr.takeDebugLog(OQ.O.Look),
          cameraSets: () => Cr.takeDebugLog(OQ.O.CameraSet)
        }), (0, qa.p)("remesh") && (Cr.setDebugLog(OQ.O.Remesh, !0), Dr = () => Cr.takeDebugLog(OQ.O.Remesh), Aa = new ka((0, Ca.k)(), Dr));
        var Dr;
        const dr = function(rr, Sr, Qr, Zr) {
          const Wr = new QW,
            ar = rr => xQ.j.getItem(rr);
          Wr.sync(ar, Sr), (0, IQ.S)();
          const jr = (0, fr.j)("customBindingsChanged", (() => {
            Wr.sync(ar, Sr)
          }));
          (0, vZ.o)(Sr);
          const Ir = new Set,
            Er = (0, wr.z)((() => {
              var rr;
              Ir.size > 0 && jW() && !0 === (null === (rr = (0, cr.f)()) || void 0 === rr ? void 0 : rr.localPlayerAlive()) && fr.i.Jp("usedKeyboard")
            })),
            pr = oZ.d.heldSizer((() => (0, tQ.q)(rr))),
            xr = cZ(rr, Sr, {
              prevents: rr => Wr.prevents(rr),
              keyPressed: rr => {
                Wr.moves(rr) && (Ir.add(rr), jW() && fr.i.Jp("usedKeyboard"))
              },
              keyReleased: rr => {
                Ir.delete(rr)
              },
              keysReleased: () => {
                Ir.clear()
              },
              resized: () => {
                WW.e.measure(rr.getBoundingClientRect()), (0, bZ.k)()
              },
              sizeCanvas: pr,
              watchRenderScale: Sr => {
                const Qr = (0, tQ.s)(rr, Sr),
                  Zr = oZ.d.onRelease(Sr),
                  Wr = FZ.e.onRelease(Sr);
                return () => {
                  Qr(), Zr(), Wr()
                }
              },
              coverHeld: () => FZ.e.isHeld(),
              touchStarting: () => {
                WW.e.measure(rr.getBoundingClientRect())
              },
              viewShown: Qr,
              touchUiShown: () => mS.c.get("isTouchScreen"),
              ctrlCombosAreGames: jW,
              inspect: (rr, Sr, Qr) => {
                Wr.checks(Sr, Qr) && Zr(rr)
              },
              canLock: () => MZ(rr)
            }),
            mr = (0, dQ.d)(Sr);
          return () => {
            jr(), Er(), (0, vZ.o)(null), mr(), xr()
          }
        }(Yr, ((rr, Sr, Qr, Zr, Wr) => {
          Lx(Cr, (() => {
            Cr.rings.input.writeRecord(rr, Sr, Qr, Zr, Wr)
          })), !bI && (0, xW.e)(rr, Wr) && (0, xW.d)((() => {
            SI !== Cr || zE || Cr.isStopped || !xx() || rx(Cr, !1, "budget", !1)
          }))
        }), (() => UE), (rr => {
          var Sr;
          null === (Sr = TI) || void 0 === Sr || Sr.onEvent(rr)
        }));
        if (Cr.isStopped) return dr(), null;
        tI = dr;
        const sr = () => !Cr.isStopped && !hE;
        if (Cr.isStopped) return null;
        (0, gS.Y)((() => {
          "call" === (0, gS.l)() && Cr.crash(wQ.B, (0, gS.k)())
        }));
        const ur = (0, wQ.W)(Cr.rings.worker, (() => {
          rx(Cr, !1, document.hidden ? "all" : "budget")
        }));
        hI = function(rr, Sr, Qr) {
          return lx().then((rr => {
            let {
              prefetchWorldgenWorker: Sr
            } = rr;
            Sr()
          }), (() => {})), new oa({
            module: (0, gS.u)(),
            decodeSettings: rr => {
              const Sr = (0, cr.l)();
              if (null === Sr) throw new Error("no game code to decode the world-gen seed with");
              return Sr.decodeMapSettings(rr)
            },
            loadWorker: Xx,
            onMapWithoutWorldgen: () => {
              Px((rr => {
                let {
                  stopWorldgenWorkerPrefetch: Sr
                } = rr;
                Sr()
              }))
            },
            onLoadFailed: rr => {
              (0, pZ.reportWorldgenLoadFailure)(rr, jI)
            },
            onWorkerLost: (rr, Sr) => {
              !async function(rr, Sr, Qr) {
                const Zr = rr === wa || rr.startsWith(ca);
                if (!Zr || Sr) return void Qr.jx(Zr);
                const Wr = () => {
                  Qr.jx(!0)
                };
                let ar;
                try {
                  ar = await Qr.scriptUrl()
                } catch {
                  return void Wr()
                }
                await Qr.staleOr({
                  site: wQ.M,
                  error: new Error(`a world-gen worker's load failed (${rr}): ${ar}`),
                  urls: [ar]
                }, Wr)
              }(rr, Sr, {
                scriptUrl: async () => {
                  const {
                    worldgenWorkerScriptUrl: rr
                  } = await lx();
                  return rr()
                },
                staleOr: (rr, Sr) => gx(rr, Sr, {
                  stillWanted: Qr
                }),
                jx: Sr => {
                  (0, pZ.reportWorldgenWorkerLost)(rr, Sr, jI, {
                    build: (0, eW.g)(),
                    ageMs: (0, hZ.C)()
                  })
                }
              })
            },
            onStartTimeout: rr => {
              (0, pZ.reportWorkerStartTimeout)(wQ.M, rr, jI)
            },
            onGaveUp: rr => {
              (0, pZ.reportWorldgenGaveUp)(rr, jI)
            },
            onMemoryStats: rr => {
              var Sr;
              null === (Sr = nI) || void 0 === Sr || Sr.noteWorldgen(rr)
            },
            onMemoryGone: () => {
              var rr;
              null === (rr = nI) || void 0 === rr || rr.worldgenGone()
            },
            write: (Qr, Zr, Wr, ar, jr) => {
              Lx(rr, (() => {
                rr.rings.worker.writeWorkerRecord(Qr, Zr, Wr, 0, ar, jr) || rr.crash(wQ.M, `a world-gen record of kind ${Zr} did not fit the worker-in ring`)
              })), Sr()
            }
          })
        }(Cr, ur, sr), YI = function(rr, Sr) {
          return new AW({
            module: (0, gS.u)(),
            loadWorkers: async () => {
              const [{
                createMeshWorker: rr
              }, Sr] = await Promise.all([Qr.e(49).then((() => Qr(55192))), Promise.resolve().then((() => Qr(109))).then((rr => {
                let {
                  isMobile: Sr
                } = rr;
                return Sr()
              }), (() => !1))]);
              return {
                create: rr,
                count: (0, rQ.i)(Sr),
                maxKeptLightStates: Sr || (0, uS.n)() ? 1 : void 0
              }
            },
            write: (Qr, Zr, Wr, ar, jr, Ir) => {
              (0, bZ.i)(), Lx(rr, (() => {
                rr.rings.worker.writeWorkerRecord(Qr, Zr, Wr, ar, jr, Ir) || rr.crash(wQ.u, `a meshing record of kind ${Zr} did not fit the worker-in ring`)
              })), Sr()
            },
            onWorkerLost: rr => {
              (0, pZ.reportWorkerLost)(wQ.u, rr, jI)
            },
            onLightFault: (rr, Sr) => {
              (0, pZ.reportLightFault)(rr, Sr, jI)
            },
            onStartTimeout: rr => {
              (0, pZ.reportWorkerStartTimeout)(wQ.u, rr, jI)
            },
            onMemoryStats: (rr, Sr) => {
              var Qr;
              null === (Qr = nI) || void 0 === Qr || Qr.noteMeshWorker(rr, Sr)
            },
            onMemoryGone: rr => {
              var Sr;
              null === (Sr = nI) || void 0 === Sr || Sr.meshWorkerGone(rr)
            },
            fail: (Sr, Qr) => {
              const Zr = () => {
                rr.crash(wQ.u, void 0 === Qr ? Sr : new Error(Sr, {
                  cause: Qr
                }))
              };
              void 0 !== Qr ? gx({
                site: wQ.u,
                error: Qr
              }, Zr) : Zr()
            }
          })
        }(Cr, ur), oE();
        const rS = (0, Za.r)(DS.clientSideServerUrls.staticUrl, {
            onTableFailed: rr => {
              gx({
                site: pZ.MODEL_FEED_SITE,
                error: rr
              }, (() => {}), {
                stillWanted: sr
              })
            },
            packUrl: rr => {
              var Sr, Qr;
              return null !== (Sr = null === (Qr = qp()) || void 0 === Qr ? void 0 : Qr.modelUrl(rr)) && void 0 !== Sr ? Sr : null
            }
          }),
          SS = function(rr, Sr, Qr) {
            const Zr = Qr => {
              var Zr, Wr;
              return null !== (Zr = null === (Wr = Sr()) || void 0 === Wr ? void 0 : Wr.drawnUrl(Qr)) && void 0 !== Zr ? Zr : rr.url(Qr)
            };
            return (0, Sa.i)((0, cW.o)(Zr), Qr)
          }(rS, (() => OI), qp),
          QS = new cW.g(SS, (rr => {
            console.warn(`${vj} image ${rr.key.kind}:${rr.key.index}:${rr.key.word} failed`, rr.error)
          }));
        HI = QS, qI = new sW(Cr, SS, ((rr, Sr) => {
          void 0 === Sr ? console.warn(`${vj} ${rr}`) : gp(rr, Sr)
        }));
        const ZS = new ra.j(rS, function(rr, Sr) {
          let Zr = !1,
            Wr = null,
            ar = null;
          const jr = {
              onUnavailable: (Qr, Zr) => {
                ar ??= gx({
                  site: pZ.MODEL_POOL_SITE,
                  error: Qr,
                  urls: Zr
                }, (() => {
                  (0, pZ.reportModelPoolFailure)(Qr, rr)
                }), {
                  stillWanted: Sr
                })
              },
              onWorkerLost: Sr => {
                (0, pZ.reportWorkerLost)(pZ.MODEL_POOL_SITE, Sr, rr)
              },
              onModuleRetry: (Sr, Qr) => {
                (0, pZ.reportModelsModuleRetry)(Sr, Qr, rr)
              }
            },
            Ir = Qr.e(51).then((() => Qr(55199))).then((rr => {
              let {
                pageModelPool: Sr
              } = rr;
              if (Zr) return null;
              const Qr = Sr(jr);
              return Wr = Qr.unlisten, LI = Qr.pool, oE(), Qr.pool
            }), (rr => (Zr || jr.onUnavailable(rr, void 0), null)));
          return lI = () => {
            var rr;
            Zr = !0, null === (rr = Wr) || void 0 === rr || rr(), LI = null
          }, (rr, Sr) => Ir.then((Qr => {
            var Zr;
            return null !== (Zr = null === Qr || void 0 === Qr ? void 0 : Qr.build(rr, Sr)) && void 0 !== Zr ? Zr : (0, Wa.r)(rr, "the model workers did not load")
          })).then((rr => null !== ar && (0, Wa.j)(rr) ? ar.then((() => rr)) : rr))
        }(gr, sr), (rr => {
          rr.startup ? (hx(), gx({
            site: pZ.MODEL_FEED_SITE,
            error: rr.error,
            urls: "" === rr.url ? void 0 : [rr.url]
          }, (() => {
            (0, pZ.reportModelFailure)(rr, gr)
          }))) : (0, pZ.reportModelFailure)(rr, gr)
        }), {
          onWritten: (rr, Sr) => {
            QS.glbWritten(rr, Sr)
          },
          onTaken: (rr, Sr) => {
            QS.glbTaken(rr, Sr)
          },
          onPackFileFailed: (rr, Sr) => {
            console.warn(`${vj} the texture pack's model file ${rr} failed: the shipped one loads`, Sr)
          }
        });
        OI = ZS;
        const WS = new JW.h(Cr);
        WI = WS, WS.swap((rr => {
          const Sr = () => {
            (0, pZ.reportTerrainTextureFailure)(rr, gr)
          };
          if (Df) return void Sr();
          const Qr = () => !Df,
            Zr = null === rr.url ? void 0 : [rr.url];
          gx({
            site: wQ.J,
            error: rr.error,
            urls: Zr
          }, Sr, {
            stillWanted: Qr
          })
        })).then((rr => {
          null !== rr && (rr || Cr.isStopped || console.warn(`${vj} the core refused the terrain textures: terrain draws untextured`), kI(Cr))
        }));
        const aS = new TQ(Cr, ((rr, Sr) => {
          console.warn(`${vj} ${rr}`, ...void 0 === Sr ? [] : [Sr])
        }));
        aS.feed(), null !== Ur && function(rr, Sr, Zr, Wr, ar, jr) {
          let Ir = null,
            Er = null,
            pr = !1;
          const xr = {
            textures: null,
            stop: () => {
              var rr, Sr;
              pr = !0, null === (rr = Er) || void 0 === rr || rr(), null === (Sr = Ir) || void 0 === Sr || Sr(), Qa.b.setSettled(null), null !== II && OE.clear(II)
            }
          };
          ZI = xr, Er = Cp().follow((Er => {
            null !== Er && Promise.all([Qr.e(232), Qr.e(54)]).then((() => Qr(55164))).then((Qr => {
              let {
                PackTextures: mr
              } = Qr;
              if (pr || rr.isStopped) return;
              const Nr = new mr({
                feed: Er,
                terrain: Sr,
                backend: Zr,
                stopped: () => rr.isStopped,
                landed: () => {
                  kI(rr)
                },
                packSwapped: () => {
                  (0, Sa.h)(Wr), jr.feed((() => async function(rr) {
                    const Sr = null === rr ? null : await rr.averageColours;
                    return null === Sr ? vQ() : BQ(Sr)
                  }(Nr.assets))), (0, uW.k)(Nr.files()), ar.refresh().then((rr => {
                    null !== rr && console.info(`${vj} texture pack models: ${rr.resent} of ${rr.delivered} files written again, ${rr.refetched} refetched`)
                  }))
                },
                settled: (rr, Sr, Qr) => {
                  var Zr;
                  (Qa.b.setSettled({
                    state: rr,
                    files: Sr
                  }), function(rr, Sr, Qr) {
                    const Zr = null === rr.gameSource && (0, xZ.f)(rr.pack);
                    if (null === Sr) return;
                    const Wr = (0, EZ.m)(Sr.error),
                      ar = Zr ? "settings" : Sr.source;
                    fr.i.Jp(EZ.e, {
                      failure: Wr,
                      source: ar,
                      pack: mZ(rr)
                    }), (0, pZ.reportTexturePackKeptOut)(ar, Wr, Sr.error, Qr)
                  }(rr, Qr, jI), null === Qr) && function(rr) {
                    const Sr = II;
                    null !== Sr && OE.apply(Sr, rr).then((Sr => {
                      Sr && rr && console.info(`${vj} the texture pack's animations are in (${Object.keys(rr).length} files)`)
                    }))
                  }(null === (Zr = rr.pack) || void 0 === Zr ? void 0 : Zr.animations)
                },
                settling: () => {
                  Qa.b.setSettled(null)
                },
                warn: gp,
                maxTextureSize: () => Promise.resolve((0, VQ.nb)(document.createElement("canvas")))
              });
              xr.textures = Nr, Ir = Nr.start()
            }), (rr => {
              console.warn(`${vj} the texture pack's terrain didn't load: the built atlas stays`, rr)
            }))
          }))
        }(Cr, WS, Ur, QS, ZS, aS);
        const jS = () => {
            Cr.setTextureLayers("")
          },
          IS = rr => {
            (JS ??= Qr.e(66).then((() => Qr(55207))).then((rr => {
              let {
                TEXTURE_NAMES: Sr
              } = rr;
              return Sr
            }), (rr => {
              throw JS = null, rr
            })), JS).then((rr => {
              Cr.setTextureLayers(rr) || Cr.isStopped || (console.warn(`${vj} the core refused the texture names: textured Boxes draw textureNotFound`), jS())
            }), (Sr => {
              if (Cr.isStopped) return;
              const [Qr, ...Zr] = rr;
              void 0 === Qr ? gx({
                site: pZ.TEXTURE_NAMES_SITE,
                error: Sr
              }, (() => {
                console.warn(`${vj} the texture names didn't load, so textured Boxes draw textureNotFound`, Sr), jS()
              }), {
                stillWanted: sr
              }) : setTimeout((() => {
                IS(Zr)
              }), Qr)
            }))
          };
        if (IS(cj), null !== Ur && !await async function(rr, Sr, Qr, Zr, ar, jr) {
            var Ir;
            const fr = (0, VQ.T)(Qr);
            if (null === fr) return rr.crash(Lj, new Error(`this ${Zr} build has no openRenderer`)), !1;
            let Er;
            Rf = fr;
            try {
              var pr, xr, mr, Nr;
              const Wr = null !== (pr = null === (xr = uj) || void 0 === xr ? void 0 : xr.pagePreviews()) && void 0 !== pr ? pr : null,
                Ir = null !== (mr = null === (Nr = uj) || void 0 === Nr ? void 0 : Nr.previewModule(Qr)) && void 0 !== mr ? mr : null;
              if (null === Wr || null === Ir) {
                null === Wr || void 0 === Wr || Wr.endSession(!1), Er = (0, tQ.g)().sampleCount, await (0, VQ.h)(Sr, fr, jr, Pp, Er, await ar);
                const rr = (0, VQ.n)(Qr);
                null === rr && console.warn(`${vj} this ${Zr} build has no image registry: sky and model images won't show`), (0, bW.g)(rr)
              } else {
                (0, xa.d)() && await (0, xS.i)();
                const Qr = (0, xa.B)();
                if (null !== Qr) {
                  const Sr = (0, iQ.j)(fr),
                    Zr = `${Qr.why}${void 0===Sr?"":` (${Sr.message})`}`;
                  return rr.crash(pZ.RENDER_RELOAD_SITE, Qr.webgpu ? new Error(Zr) : new pZ.GraphicsLostError(Zr)), !1
                }
                Er = await Wr.bindSession(Ir, Sr, (async rr => (0, VQ.z)(fr, Lj, jr, rr, Pp, await ar)))
              }
            } catch (Wr) {
              return rr.crash(Lj, Wr), !1
            }(function(rr, Sr) {
              const Qr = rr,
                {
                  requestCapture: Zr,
                  takeCapture: Wr
                } = Qr;
              if ("function" !== typeof Zr || "function" !== typeof Wr) return;
              const ar = {
                request() {
                  Zr.call(Qr, Sr)
                },
                take() {
                  var rr;
                  return null !== (rr = Wr.call(Qr)) && void 0 !== rr ? rr : null
                }
              };
              window[ya] = ar
            })(Sr, Er), Vf = Er, Hf = !0;
            const Ur = performance.now();
            return qf.boundAtMs = null !== (Ir = (0, xa.D)()) && void 0 !== Ir ? Ir : Ur, qf.indirectHangs = (0, xa.t)(), qf.restoresSkipped = (0, xa.F)(), console.info(`${vj} ${Zr} renderer bound at ${Math.round(Ur)} ms`), !rr.isStopped
          }(Cr, Rr, qr, Ur, hr, Yr)) return null;
        if (null !== Ur) {
          var fS, ES, NS;
          (0, kS.N)(Ur);
          const rr = () => !Cr.isStopped && px();
          Qr.e(220).then((() => Qr(35335))).then((Sr => {
            let {
              devTools: Qr
            } = Sr;
            Cr.isStopped || Qr.setHost(function(rr) {
              return {
                tools: pa,
                async downloadScene(Sr, Qr) {
                  let {
                    width: Zr,
                    height: Wr,
                    colouring: ar
                  } = Qr;
                  "screenshot" === Sr && null === ar ? await (0, Ia.f)(rr, Zr, Wr) : console.warn("The Rust client's developer tools take uncoloured screenshots only")
                },
                setAmbientLightIntensity: () => (console.warn("The Rust client's renderer has no ambient light setting"), Promise.resolve()),
                capturePhoto: (Sr, Qr, Zr) => (0, Ia.b)(rr, Sr, Qr, Zr),
                snapshotNextFrame: () => (0, Ia.i)(rr)
              }
            }(function(rr, Sr) {
              return {
                canvas: rr,
                maxTextureSize: fa,
                yx: Sr,
                resize: (rr, Sr, Qr) => {
                  (0, vZ.x)(OQ.xb.Resize, 0, rr / Qr, Sr / Qr, (0, vZ.m)(Qr))
                },
                restoreSize: () => {
                  const Sr = (0, tQ.q)(rr);
                  null !== Sr && (0, vZ.x)(OQ.xb.Resize, 0, Sr.cssWidth, Sr.cssHeight, (0, vZ.m)(Sr.renderScale))
                },
                onFrameDrawn: rr => (Ea.add(rr), () => {
                  Ea.delete(rr)
                })
              }
            }(Yr, rr)))
          }), (rr => {
            console.warn(`${vj} the developer tools didn't load: no captures this session`, rr)
          }));
          const Sr = "webgpu" === Ur && null !== (fS = null === Nr || void 0 === Nr || null === (ES = Nr.adapter) || void 0 === ES ? void 0 : ES.vendor) && void 0 !== fS ? fS : null;
          wf = {
            backend: Ur,
            canvas: Yr,
            fallbackReason: null !== (NS = null === Nr || void 0 === Nr ? void 0 : Nr.reason) && void 0 !== NS ? NS : null,
            adapterVendor: Sr
          }, ip();
          try {
            (0, bZ.w)(Ur, Yr, Sr)
          } catch (Wr) {
            (0, bZ.z)(), console.error(`${vj} the quality steps didn't start`, Wr)
          }
        }
        const {
          storagePullBreaks: US,
          splitPassBreaks: tS
        } = await hr;
        tS && console.warn(`${vj} split_pass_breaks on: Windows Adreno 7xx (N-103) or ?sceneDepth=off`);
        const hS = (0, pS.g)(Nr, (0, WQ.l)(), (0, jQ.i)());
        if ((0, qa.p)("webgpuloss")) {
          var zS, YS;
          const rr = {
            backend: Ur,
            reason: null !== (zS = null === Nr || void 0 === Nr ? void 0 : Nr.reason) && void 0 !== zS ? zS : null,
            source: null !== (YS = null === Nr || void 0 === Nr ? void 0 : Nr.source) && void 0 !== YS ? YS : null,
            storagePullBreaks: US,
            noWebGpu: hS.messageKey
          };
          (0, Ra.c)((Sr => {
            Sr.noteWasmPick(rr)
          }))
        }
        const nS = "webgpu" === Ur;
        if (gI = (0, pS.h)(nS ? Cr : null, nS && null !== (Ir = null === (Er = uj) || void 0 === Er ? void 0 : Er.pagePreviews().zU) && void 0 !== Ir ? Ir : null, hS, gp), zE) return null;
        if (or.reserveAtJoin((0, iW.n)(null !== kr && void 0 !== kr ? kr : aZ.i)), Cr.isStopped) return null;
        const eS = rr => {
          if (wI = performance.now(), cI = !1, null !== Ff) try {
            Ff.animationFrame(rr)
          } catch (Wr) {
            Fp(Wr)
          }
          if (function(rr, Sr) {
              return Sr && !zE && !bI && xx() && px() && rr.framePaces(performance.now())
            }(Cr, UE)) {
            if (ZE.animationFrame(wI, "paced", UE), Cr.writePendingInput(), (0, wr.i)(rr, Sx), wp(!1, rr), null !== Ff) try {
              Ff.framePaced()
            } catch (Wr) {
              Fp(Wr)
            }
            requestAnimationFrame(eS)
          } else rx(Cr, UE, "budget") && (ZE.animationFrame(wI, Cr.lastFrameKind, UE), (0, fQ.i)(Cr.lastFrameKind) && px() && (0, wr.i)(rr, Sx), wp(UE && IE, rr), fE.frame(Cr.lastFrameKind, UE && px(), rr), xE.frame(Cr.lastFrameKind, UE && px()), (0, fQ.c)(Cr.lastFrameKind) && WQ.A.drew(), ex(Cr), or.afterFrame(), requestAnimationFrame(eS))
        };
        requestAnimationFrame(eS), Cr.warmBeforeJoin(LW(null), wQ.n.Home);
        return function(rr) {
          if (rr.has("inputLog") && (0, ZW.l)((rr => {
              let {
                action: Sr,
                down: Qr,
                press: Zr
              } = rr;
              console.info(`${aW} input ${Sr} ${Qr?"down":"up"} press ${Zr} at ${performance.now().toFixed(1)}`)
            })), rr.has("inputDump")) {
            const rr = [];
            IW = rr, Object.assign(window, {
              bloxdInputDump: () => rr.join("\n")
            })
          }
        }(new URLSearchParams(window.location.search)), BI = function(rr) {
          let Sr = null;
          const Qr = () => {
              null !== Sr && (clearInterval(Sr), Sr = null)
            },
            Zr = () => {
              document.hidden ? Sr ??= setInterval((() => {
                qx(rr) || Qr()
              }), wj) : Qr()
            };
          return document.addEventListener("visibilitychange", Zr), Zr(), () => {
            Qr(), document.removeEventListener("visibilitychange", Zr)
          }
        }(Cr), Cr
      }(Sr).then((rr => {
        var Sr;
        (Zr(jI), xI(null !== rr), null !== rr && (yr = performance.now()), EI(rr), null === rr) ? null === (Sr = uj) || void 0 === Sr || Sr.pagePreviews().endSession(null === (0, gS.l)()): GI("booted")
      }), (rr => {
        Zr(jI), xI(!1), EI(null), zx({
          site: lj,
          error: rr,
          header: null
        }, jI)
      }))
    }

    function vE() {
      const rr = II;
      null !== rr && nE().then((Sr => {
        let {
          pageBuiltInAnimationPack: Qr
        } = Sr;
        Qr().provide(rr)
      }), (rr => {
        console.warn(`${vj} the built-in animation pack's chunk did not load: lifeforms stay in their rest pose`, rr)
      }))
    }
    const OE = new class {
      constructor(rr) {
        this.deps = rr, this.latest = 0, this.wI = null
      }
      apply(rr, Sr) {
        return this.load(rr, Sr, 0)
      }
      async load(rr, Sr, Qr) {
        var Zr;
        const Wr = ++this.latest,
          ar = this.deps.compiler;
        if (void 0 === Sr || null === Sr || "object" !== typeof Sr || 0 === Object.keys(Sr).length || null === ar) return this.drop(rr), !1;
        if ((null === (Zr = this.wI) || void 0 === Zr ? void 0 : Zr.module) === rr && (0, CQ.Yd)(this.wI.files, Sr)) return !1;
        try {
          const [Qr, Zr] = await Promise.all([ar(), this.deps.builtIns()]);
          if (Wr !== this.latest) return !1;
          const jr = await Qr(Sr, AQ, {
            builtIns: Zr
          });
          if (Wr !== this.latest) return !1;
          const Ir = this.call(rr, jr);
          if (void 0 === Ir) throw new kQ("the compiled animations didn't read against the built-in pack");
          return this.wI = {
              module: rr,
              files: Sr
            },
            function(rr) {
              for (let Sr = 0; Sr + 2 < rr.length; Sr += 3) {
                ("error" === rr[Sr] ? console.error : console.warn)(`Animation for the texture pack: ${rr[Sr+1]}: ${rr[Sr+2]}`)
              }
            }(Ir), !0
        } catch (Ir) {
          var jr;
          if (Wr !== this.latest) return !1;
          this.drop(rr), 0 === Qr && this.deps.warn("the texture pack's animations didn't load: lifeforms play the built-in ones", Ir);
          const Zr = (null !== (jr = this.deps.retryAfterMs) && void 0 !== jr ? jr : GQ)[Qr];
          return void 0 === Zr || Ir instanceof kQ || (0, MQ.h)(rr) || setTimeout((() => {
            Wr === this.latest && this.load(rr, Sr, Qr + 1)
          }), Zr), !1
        }
      }
      call(rr, Sr) {
        try {
          return rr.kZr(Sr)
        } catch (Qr) {
          throw (0, MQ.l)(rr, Qr), Qr
        }
      }
      clear(rr) {
        this.latest++, this.drop(rr)
      }
      drop(rr) {
        const Sr = this.wI;
        if (this.wI = null, (null === Sr || void 0 === Sr ? void 0 : Sr.module) === rr && !(0, MQ.h)(rr)) try {
          this.call(rr, null)
        } catch {}
      }
    }({
      compiler: HQ.d,
      builtIns: async () => {
        const {
          pageBuiltInAnimationPack: rr
        } = await nE();
        return rr().whenSet()
      },
      warn: gp
    });
    async function LE(rr, Sr) {
      let Zr = !1;
      await lE({
        matchmake: async () => {
          const {
            guestJoinTarget: Wr,
            guestJoinWithPack: ar
          } = await Qr.e(133).then((() => Qr(55146)));
          return Zr ? Wr(rr, Sr, Gp()) : (Zr = !0, ar(rr, Sr, (Sr => kp(rr, Sr)), Gp))
        },
        onFailure: rr => {
          (0, pZ.showJoinFailure)(rr, jI)
        },
        rejoin: DE,
        invalidateTrafficCode: dE
      })
    }
    async function lE(rr) {
      let {
        matchmake: Sr,
        onFailure: Qr,
        rejoin: Wr,
        invalidateTrafficCode: ar,
        pageReady: jr,
        signal: Ir
      } = rr;
      const fr = () => !0 === (null === Ir || void 0 === Ir ? void 0 : Ir.aborted);
      let Er;
      const pr = Qa.b.rejoinHold();
      If = null, (0, nZ.d)();
      const xr = (0, hZ.db)("wasm", vx);
      let mr = !1,
        Nr = performance.now();
      try {
        if (!await mI) return {
          kind: "stopped"
        };
        if (fr()) return {
          kind: "Rr"
        };
        eE().catch((() => {}));
        let rr = await Sr();
        var tr, hr;
        if (Nr = performance.now(), !fr()) Tx(null !== (tr = null === (hr = rr.target.session) || void 0 === hr ? void 0 : hr.gameNameWithVariation) && void 0 !== tr ? tr : null);
        const Qr = () => performance.now() - rr.matchedAt <= rr.freshMs,
          Zr = PE(rr.target).catch((() => {}));
        Qr() && !fr() && (Er = new MW(rr.target, {
          signal: Ir
        }));
        const ar = performance.now();
        let pr = () => {};
        fr() || (pr = function(rr, Sr) {
          qr(), rr || Or || null !== vr && "ok" !== vr || (Or = !0, (0, Ur.D)("wasm_boot_wait", performance.now(), `${Tr}:${Sr()}:${(0,zr.p)()}`)), Lr++;
          let Qr = !1;
          return () => {
            Qr || (Qr = !0, Lr--)
          }
        }(fI, CS.j), null === Ir || void 0 === Ir || Ir.addEventListener("abort", pr, {
          once: !0
        }));
        const xr = await pI;
        if (pr(), null === Ir || void 0 === Ir || Ir.removeEventListener("abort", pr), null === xr) return {
          kind: "stopped"
        };
        var lr, Xr;
        if (function(rr) {
            var Sr, Qr;
            if (Yr.c.markGameEngineConstructed(), Br) return;
            Br = !0;
            const Zr = Math.max(rr, null !== (Sr = er) && void 0 !== Sr ? Sr : rr);
            (0, nr.j)("ready", Math.max(0, (null !== (Qr = Kr) && void 0 !== Qr ? Qr : Zr) - Zr) / 1e3)
          }(ar), !fr())
          if (null !== Kr && null !== yr ? (0, Ur.D)("wasm_core_ready", yr) : console.warn("[bloxd-wasm-client] a join found the core before boot marked its steps"), rr.target.session && (0, ia.d)(rr.target.session.gameNameWithVariation)) null === (lr = hI) || void 0 === lr || lr.prestart();
        if (await Zr, !Qr() && !fr()) null === (Xr = Er) || void 0 === Xr || Xr.rematched(), rr = await Sr(), Nr = performance.now();
        if (fr()) return {
          kind: "Rr"
        };
        const Pr = await async function(rr) {
          var Sr, Qr, Zr;
          let {
            signal: Wr,
            rejoin: ar = null,
            early: jr,
            pageReady: Ir
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (null !== Wr && void 0 !== Wr && Wr.aborted) throw new DOMException("the join was left", "AbortError");
          const fr = (Er = Kf, pr = performance.now(), null !== Er && pr - Er < YW);
          var Er, pr;
          Kf = null;
          const xr = new AbortController,
            mr = null !== (Sr = null === (Qr = rr.session) || void 0 === Qr ? void 0 : Qr.gameNameWithVariation) && void 0 !== Sr ? Sr : null;
          Tx(mr), RE({
            controller: xr,
            game: mr
          }), yf = null, null === (Zr = vf) || void 0 === Zr || Zr.abort(), vf = null, Lf = !1, lf = null, Xf.clear();
          const Nr = () => {
            (0, dS.h)(xr, (0, dS.f)(Wr))
          };
          null === Wr || void 0 === Wr || Wr.addEventListener("abort", Nr, {
            once: !0
          });
          try {
            var tr, hr, zr, Yr, nr;
            const Sr = await pI;
            if (null === Sr || Sr.isStopped || zE) throw new Error("no core is running to join a game with");
            if (Sr.warmBeforeJoin(LW(null !== (tr = null === (hr = rr.session) || void 0 === hr ? void 0 : hr.gameNameWithVariation) && void 0 !== tr ? tr : null), wQ.n.Play), rr.session && null !== gI) {
              const Sr = await HE(gI.join(rr.session.gameNameWithVariation), xr.signal);
              if ((0, qa.p)("webgpuloss")) {
                const Qr = rr.session.gameNameWithVariation,
                  Zr = gI.couldntRunInJoinedGame();
                (0, Ra.c)((rr => rr.noteWasmJoin(Qr, Sr, Zr)))
              }
              if (null !== Sr) throw new pS.c(Sr)
            }
            const [, , , {
              joinRoom: Qr
            }] = await HE(Promise.all([(0, cr.h)(Sr), PE(rr), null === Ir || void 0 === Ir ? void 0 : Ir(), eE()]), xr.signal), Zr = rr.session, Wr = Zr ? {
              ...rp,
              attachSocket: Sr => {
                const Qr = Ip(Sr, rr.endpoint);
                var Wr;
                null !== Qr && (pf = {
                  conn: Qr,
                  info: Zr
                }, null === (Wr = xf) || void 0 === Wr || Wr(Zr.playerDbId));
                return Qr
              }
            } : rp, Er = await Qr(Wr, rr, {
              signal: xr.signal,
              early: jr
            }).catch((rr => {
              throw function(rr) {
                if (!(rr instanceof SS.e)) return rr;
                if ("roomError" === rr.stage && null !== lf) return XE(new SS.e(rr.message, rr.stage, rr.code, lf), rr);
                const Sr = "closed" === rr.stage && null !== Bf ? Xf.get(Bf.conn) : void 0;
                return void 0 === Sr ? rr : XE(new SS.e(rr.message, rr.stage, Sr.code, null, rr.socketOpened), rr)
              }(rr)
            }));
            if (jf !== xr) throw Er.leave(), new DOMException("the join was left", "AbortError");
            AE(Er), null === (zr = YI) || void 0 === zr || zr.newGame();
            const pr = function(rr, Sr) {
              var Qr, Zr;
              const {
                session: Wr
              } = rr, ar = void 0 === Wr ? rr.joinOptions.lobbyName : Wr.lobbyName;
              return {
                endpoint: rr.endpoint,
                game: null !== (Qr = null === Wr || void 0 === Wr ? void 0 : Wr.gameNameWithVariation) && void 0 !== Qr ? Qr : rr.roomName,
                lobby: String(null !== ar && void 0 !== ar ? ar : null),
                sessionId: Sr,
                postCookies: null !== (Zr = rr.postCookies) && void 0 !== Zr ? Zr : null
              }
            }(rr, Er.seat.sessionId);
            af.set(Er, pr), RW(pr);
            const mr = performance.now(),
              Nr = {
                conn: Er.conn,
                rejoin: ar,
                game: null !== (Yr = null === (nr = rr.session) || void 0 === nr ? void 0 : nr.gameNameWithVariation) && void 0 !== Yr ? Yr : "",
                joinedAt: mr,
                rejoinedAt: fr ? mr : null,
                overflow: null
              };
            mf = Nr,
              function(rr, Sr) {
                tp();
                const Qr = {
                  endpoint: Sr,
                  roomId: rr.seat.room.roomId,
                  heldConn: 0,
                  dropCode: 0,
                  pendingHold: null,
                  resume: new QZ({
                    reconnect: (rr, Sr, Zr) => async function(rr, Sr, Qr, Zr) {
                      const {
                        roomId: Wr,
                        roomToken: ar
                      } = zp(rr, Sr), jr = SI;
                      if (null === jr || jr.isStopped || zE) throw new Error("no core is running to resume the game on");
                      const {
                        resumeRoom: Ir
                      } = await HE(eE(), Qr), fr = {
                        ...rp,
                        attachSocket: Sr => Nf !== rr || 0 === rr.heldConn ? (Sr.close(), null) : Ip(Sr, rr.endpoint, !0)
                      };
                      return Ir(fr, rr.endpoint, Wr, ar, {
                        signal: Qr,
                        onAttached: Zr
                      })
                    }(Qr, rr, Sr, Zr),
                    releaseSeat: rr => {
                      !async function(rr, Sr) {
                        const {
                          roomId: Qr,
                          roomToken: Zr
                        } = zp(rr, Sr);
                        try {
                          const {
                            leaveHeldSeat: Sr
                          } = await eE();
                          await Sr(rr.endpoint, Qr, Zr)
                        } catch (Wr) {
                          console.warn(`${vj} the held seat of a game left while it reconnected couldn't be released`, Wr)
                        }
                      }(Qr, rr)
                    },
                    isLive: () => Nf === Qr && null !== mf && !zE,
                    Qq: rr => {
                      ef = rr, Up()
                    },
                    onReconnected: rr => {
                      ! function(rr) {
                        const Sr = Wf;
                        if (null !== Sr && Sr !== rr) {
                          const Qr = af.get(Sr);
                          void 0 !== Qr && af.set(rr, Qr), aE === Sr && (aE = rr), Sr.detach()
                        }
                        AE(rr)
                      }(rr)
                    },
                    onGaveUp: (rr, Sr) => {
                      ! function(rr, Sr, Qr) {
                        var Zr, Wr;
                        console.warn(`${vj} gave up reconnecting (${Qr.reason}, ${Qr.attempts} attempts)`, Qr.lastError), (0, pZ.reportReconnectGaveUp)(Qr, jI);
                        const ar = null !== (Zr = null === (Wr = mf) || void 0 === Wr ? void 0 : Wr.rejoin) && void 0 !== Zr ? Zr : null;
                        hp(rr, "gaveUp"), iE();
                        const jr = {
                          code: rr.dropCode,
                          name: null,
                          reason: kj,
                          canReconnect: !Sr,
                          automaticallyReconnect: !1,
                          requiresRefresh: !1
                        };
                        uE(jr, Sr ? null : ar, !1, {
                          reasonKey: Aj,
                          canPlayAgain: Sr
                        })
                      }(Qr, rr, Sr)
                    }
                  })
                };
                Nf = Qr, null !== Uf && Uf.conn === rr.conn && Qr.resume.onInitialInfo(Uf)
              }(Er, rr.endpoint), performance.mark(Hj), (0, Ur.D)("wasm_joined", mr), Sr.warmBeforeJoin(new Uint32Array, wQ.n.Joined), setTimeout((() => {
                Wf === Er && (0, Ur.p)()
              }), 0), vE(), console.info(`${vj} joined ${rr.roomName} as ${Er.seat.sessionId} at ${Math.round(performance.now())} ms`);
            const er = yf;
            yf = null, null !== er && FE(Nr, er.mask, er.frames);
            const Kr = Xf.get(Er.conn);
            return Xf.clear(), void 0 !== Kr && (AE(null), sE(Er.conn, Kr.code, Kr.reason)), Er
          } finally {
            var er;
            null === Wr || void 0 === Wr || Wr.removeEventListener("abort", Nr), jf === xr && kE(Wf, null), (null === (er = Bf) || void 0 === er ? void 0 : er.join) === xr && (Bf = null)
          }
        }(rr.target, {
          signal: Ir,
          rejoin: Wr(rr.target),
          early: Er,
          pageReady: jr
        });
        return mr = !0, {
          kind: "joined",
          game: Pr
        }
      } catch (Hr) {
        if (Hr instanceof DOMException && "AbortError" === Hr.name || fr()) return {
          kind: "Rr"
        };
        if (zE) return {
          kind: "stopped"
        };
        if (Lf && (Lf = !1, await ar().catch((rr => {
            console.warn(`${vj} the cached traffic code could not be dropped`, rr)
          }))), null === await pI) return {
          kind: "stopped"
        };
        if (Hr instanceof pS.c) return Qr(Hr, performance.now() - Nr), {
          kind: "failed",
          error: Hr,
          reloading: !1
        };
        const rr = Hr instanceof SS.e && Hr.code === Zr.e.wasmClientNotAllowed.code,
          Sr = Hr instanceof SS.e && Hr.code === Zr.e.outdatedVersion.code,
          Wr = () => null === Wf,
          jr = await gx({
            site: pZ.JOIN_SITE,
            error: Hr,
            outdated: Sr
          }, (() => {
            rr && (0, iS.H)(), Qr(Hr, performance.now() - Nr)
          }), {
            stillWanted: Wr
          });
        return {
          kind: "failed",
          error: Hr,
          reloading: jr
        }
      } finally {
        var Pr;
        mr || xr.end(), Qa.b.releaseHold(pr);
        const rr = null === (Pr = Er) || void 0 === Pr ? void 0 : Pr.release();
        rr && (0, pZ.reportUnusedSeat)(rr, jI)
      }
    }

    function XE(rr, Sr) {
      return rr.stack = Sr.stack, rr
    }

    function PE(rr) {
      return rr.session ? (0, cr.k)(aI, rr.session.gameNameWithVariation) : Promise.resolve()
    }

    function HE(rr, Sr) {
      return (0, dS.l)(Sr), new Promise(((Qr, Zr) => {
        const Wr = () => {
          Zr((0, dS.f)(Sr))
        };
        Sr.addEventListener("abort", Wr, {
          once: !0
        }), rr.then((rr => {
          Sr.removeEventListener("abort", Wr), Qr(rr)
        }), (rr => {
          Sr.removeEventListener("abort", Wr), Zr(rr)
        }))
      }))
    }

    function qE() {
      RE(null)
    }

    function RE(rr) {
      var Sr, Qr, Zr;
      (Wx(null === rr ? "left" : "replaced"), function() {
        const rr = Nf;
        null !== rr && hp(rr, "left")
      }(), null === UI || UI.left) || (UI.left = !0, null === (Zr = (0, cr.f)()) || void 0 === Zr || Zr.socketLeft(), (0, mr.m)({
        websocketUrl: null
      }));
      jf && (0, dS.h)(jf, new DOMException("the join was left", "AbortError")), iE(null !== rr), null === (Sr = gI) || void 0 === Sr || Sr.leave();
      const Wr = Wf;
      null !== rr && Qa.b.setGame(rr.game), kE(null, null !== (Qr = null === rr || void 0 === rr ? void 0 : rr.controller) && void 0 !== Qr ? Qr : null), null === Wr || void 0 === Wr || Wr.leave(), null === rr && (ME = !0, GE()), VE(0), (0, oS.g)()
    }

    function gE() {
      return null !== SI && 0 !== (SI.headerWord(LQ.L.LoadSteps) & LQ.T.PlayerBound) && xx() && !fE.isShown()
    }

    function CE() {
      return performance.now() - Tf >= JQ.e
    }
    let ME = !1;

    function GE() {
      const rr = SI;
      !ME || bI || UE || (ME = !1, zE || null === rr || rr.isStopped || rr.releaseLeftGame())
    }

    function kE(rr, Sr) {
      null !== Sr && Sr !== jf && (EE = document.hidden), null === rr ? pE.end() : null === Wf && pE.join(gE), Wf = rr, jf = Sr, null === Wf && null === jf || (ME = !1), null === Wf && null === jf && Qa.b.setGame(void 0)
    }

    function AE(rr) {
      kE(rr, jf)
    }

    function VE(rr) {
      const Sr = SI;
      return null !== oj && !zE && null !== Sr && !Sr.isStopped && (!!oj(SS.k, 0, (0, SS.F)(rr)) && (dI = !0, 0 === rr || bI || rx(Sr, !1, "all"), !0))
    }

    function iE() {
      var rr, Sr;
      arguments.length > 0 && void 0 !== arguments[0] && arguments[0] || (0, hZ.g)();
      const Qr = null !== (rr = null === (Sr = mf) || void 0 === Sr ? void 0 : Sr.overflow) && void 0 !== rr ? rr : null;
      mf = null, null !== Qr && (0, pZ.reportEventOverflow)(Qr, jI)
    }

    function wE() {
      null !== Wf || null !== jf ? qE() : fp()
    }

    function cE(rr, Sr) {
      console.warn(`${vj} the event buffer refused records in ${Sr} frames (categories ${rr})`), zE || (null !== mf ? FE(mf, rr, Sr) : null !== jf && function(rr, Sr, Qr) {
        var Zr;
        const Wr = function(rr, Sr) {
          return null === rr ? "drop" : rr.activated ? "keep" : 0 !== (Sr & LQ.z.NetSession) ? "fail" : "drop"
        }((null === (Zr = Bf) || void 0 === Zr ? void 0 : Zr.join) === rr ? Bf : null, Sr);
        "keep" === Wr ? yf = {
          mask: Sr,
          frames: Qr
        } : "fail" === Wr && (0, dS.h)(rr, new Error("the join's net session was lost to an event overflow"))
      }(jf, rr, Sr))
    }

    function FE(rr, Sr, Qr) {
      const Zr = rr.overflow ??= {
        frames: 0,
        acks: 0,
        mask: 0,
        outcome: null
      };
      Zr.frames += Qr, Zr.acks++, Zr.mask |= Sr;
      const Wr = function(rr, Sr, Qr) {
        if (0 === (rr & LQ.z.NetSession)) return "none";
        const Zr = null !== Sr.rejoinedAt && Qr - Sr.rejoinedAt < nW;
        return null === Sr.rejoin || Zr ? "fail" : "rejoin"
      }(Sr, rr, performance.now());
      "none" !== Wr && queueMicrotask((() => {
        if (mf !== rr) return;
        const Sr = "rejoin" === Wr && CE();
        Zr.outcome = Sr ? "rejoined" : "failed", uE(function(rr, Sr) {
          return {
            code: 0,
            name: "eventOverflow",
            reason: "Your game fell behind the server.",
            canReconnect: rr,
            automaticallyReconnect: Sr,
            requiresRefresh: !1
          }
        }(null !== rr.rejoin, Sr), rr.rejoin, Sr), qE(), Sr && (Kf = performance.now())
      }))
    }

    function oE() {
      NE && function(rr, Sr) {
        let {
          mesh: Qr,
          worldgen: Zr,
          modelPool: Wr
        } = rr;
        "landingPage" === Sr ? (null === Qr || void 0 === Qr || Qr.stopWorkers(), null === Zr || void 0 === Zr || Zr.stopWorker(), null === Wr || void 0 === Wr || Wr.stopWorkers()) : ((0, mS.k)(Sr) || "inGame" === Sr) && (null === Qr || void 0 === Qr || Qr.restartWorkers(), null === Wr || void 0 === Wr || Wr.startWorkers())
      }({
        mesh: YI,
        worldgen: hI,
        modelPool: LI
      }, mS.c.get("gameState"))
    }

    function bE(rr) {
      UE = rr, tE && JE(tE, rr), GE()
    }

    function JE(rr, Sr) {
      rr.style.visibility = Sr ? "visible" : "hidden"
    }

    function DE(rr) {
      var Sr;
      const Qr = rr.roomName,
        Zr = null !== (Sr = rr.joinOptions.lobbyName) && void 0 !== Sr ? Sr : null;
      return () => {
        LE(Qr, Zr)
      }
    }

    function dE() {
      return Qr.e(133).then((() => Qr(55146))).then((rr => {
        let {
          invalidateGuestTrafficCode: Sr
        } = rr;
        return Sr()
      })).catch((rr => {
        console.warn(`${vj} the cached traffic code could not be dropped`, rr)
      }))
    }

    function sE(rr, Sr, Qr) {
      var Wr, ar, jr;
      let Ir = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (zE) return;
      if ((null === (Wr = mf) || void 0 === Wr ? void 0 : Wr.conn) !== rr) return void(null !== jf && Xf.set(rr, {
        code: Sr,
        reason: Qr
      }));
      Wx("lost");
      const fr = (null === (ar = aE) || void 0 === ar ? void 0 : ar.conn) !== rr,
        {
          rejoin: Er,
          game: pr,
          joinedAt: xr
        } = mf;
      iE(), tp();
      const mr = (0, rS.i)(Sr, (0, lW.g)(rr));
      if (console.info(`${vj} the game's connection closed with code ${Sr} (${null!==(jr=mr.name)&&void 0!==jr?jr:"unrecognised"})`), Sr === Zr.e.gameOrPluginKick.code || Ir || (0, pZ.reportDisconnect)(mr, jI, {
          closeReason: Qr,
          sinceJoinedMs: performance.now() - xr,
          game: pr
        }), mr.requiresRefresh) {
        const rr = "outdatedVersion" === mr.name,
          Qr = new Error(`the game's connection closed with code ${Sr}`),
          Zr = () => null === mf && null === jf;
        return void gx({
          site: pZ.JOIN_SITE,
          error: Qr,
          outdated: rr
        }, (() => {
          Zr() && uE(mr, null, !1)
        }), {
          stillWanted: Zr
        })
      }
      const Nr = mr.canReconnect ? Er : null,
        Ur = null !== Nr && (mr.automaticallyReconnect || fr && EE && "inactivity" === mr.name) && CE();
      uE(mr, Nr, Ur)
    }

    function uE(rr, Sr, Qr) {
      var Zr;
      let Wr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
        reasonKey: null,
        canPlayAgain: !1
      };
      if (hE) return;
      Qa.b.unwantedLeave(Qr && null !== Sr && 0 === Of.size), null === (Zr = vf) || void 0 === Zr || Zr.abort();
      const ar = new AbortController;
      vf = ar;
      const jr = null === Sr ? null : () => {
        ar.signal.aborted || (ar.abort(), Sr())
      };
      if (Qr && null !== jr) {
        Tf = performance.now();
        const rr = new NQ.b(JQ.c, (() => {
          Tf = performance.now(), jr()
        }));
        ar.signal.addEventListener("abort", (() => {
          rr.stop()
        }))
      }
      const Ir = {
        code: rr.code,
        name: rr.name,
        reason: rr.reason,
        reasonKey: Wr.reasonKey,
        reconnect: jr,
        reconnecting: Qr,
        requiresRefresh: rr.requiresRefresh,
        canPlayAgain: Wr.canPlayAgain
      };
      if (Of.size > 0)
        for (const Er of [...Of]) try {
          Er(Ir)
        } catch (fr) {
          console.error(`${vj} an unwanted-leave listener threw`, fr)
        } else lS((0, TS.g)(rr, null !== jr, Qr), ar.signal).then((Sr => {
          Sr && (null !== jr ? jr() : rr.requiresRefresh && (0, xS.h)())
        }))
    }
    const rp = {
      attachSocket: rr => Ip(rr),
      onConnection: rr => (Pf.add(rr), () => {
        Pf.delete(rr)
      }),
      sendRaw: (rr, Sr) => {
        const Qr = UI;
        return null !== Qr && Qr.conn === rr && Ux(Qr, Sr)
      },
      leaveRoom: VE,
      closeSocket: rr => {
        var Sr;
        (null === (Sr = UI) || void 0 === Sr ? void 0 : Sr.conn) === rr && fp()
      },
      flushNet: Ep
    };

    function Sp(rr) {
      var Sr;
      let {
        aux: Qr,
        payload: Zr
      } = rr;
      null === (Sr = SI) || void 0 === Sr || Sr.queueOptions(Qr, Zr)
    }

    function Qp(rr, Sr) {
      Sp(function(rr, Sr) {
        return Ya = rr ? {
          preventMovement: Sr
        } : null, rr ? na(Sr) : {
          aux: OQ.jc.AdEnd,
          payload: za
        }
      }(rr, Sr))
    }

    function Zp(rr) {
      var Sr;
      Sf = rr, null === (Sr = SI) || void 0 === Sr || Sr.setUiPrefs(rr)
    }

    function Wp(rr, Sr) {
      aI.setMaster(rr, Sr)
    }

    function ap(rr) {
      var Sr;
      Qf = rr, null === (Sr = SI) || void 0 === Sr || Sr.setEnvPrefs(rr)
    }

    function jp(rr) {
      var Sr;
      Zf = rr, null === (Sr = SI) || void 0 === Sr || Sr.setLookPrefs(rr)
    }

    function Ip(rr) {
      var Sr;
      let Qr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new URL(rr.url).origin,
        Zr = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      if (rr.readyState === WebSocket.CLOSING || rr.readyState === WebSocket.CLOSED) return console.warn(`${vj} a closing or closed socket can't be attached`), null;
      const Wr = SI;
      if (!Wr || Wr.isStopped) return console.warn(`${vj} no core is running to attach a socket to`), rr.close(), null;
      if (null === (0, cr.f)()) return console.warn(`${vj} the game has not started to attach a socket to`), rr.close(), null;
      if (AI > OQ.B) return console.warn(`${vj} this core has attached all the sockets it can; reload to play on`), rr.close(), null;
      if (dI && !bI && (rx(Wr, !1, "all"), Wr.isStopped || zE)) return rr.close(), null;
      fp();
      const ar = AI++;
      if (!Kp(Wr, "open", ar, Zr ? OQ.fc.Resume : 0)) return rr.close(), null;
      Zr || FS.d.reset(), Bf = null === jf ? null : {
        join: jf,
        conn: ar,
        activated: !1
      }, rr.binaryType = "arraybuffer";
      const jr = new ZZ.e((() => {
          ! function(rr, Sr) {
            if (UI !== Sr || rr.isStopped || null === mp(Sr, Mj)) return;
            Sr.detach(), UI = null, xp(rr, Sr, Mj, "", !0), Sr.ws.close()
          }(Wr, Ir)
        })),
        Ir = {
          ws: rr,
          conn: ar,
          pending: [],
          pendingBytes: 0,
          left: !1,
          resume: Zr,
          token: null,
          detach: () => {
            jr.dispose(), rr.removeEventListener("message", fr), rr.removeEventListener("open", Er), rr.removeEventListener("close", pr)
          }
        },
        fr = rr => {
          if (rr.data instanceof ArrayBuffer) {
            var Sr;
            const Qr = new Uint8Array(rr.data);
            jr.heard(), Ir.token = null !== (Sr = (0, WZ.c)(Qr)) && void 0 !== Sr ? Sr : Ir.token,
              function(rr, Sr, Qr) {
                Lx(rr, (() => {
                  rr.rings.net.writeFrame(Sr, Qr) || rr.crash(wQ.x, `a socket frame of ${Qr.byteLength} bytes did not fit the net-in ring`)
                }));
                const Zr = rr.rings.net.cursor >= Cj;
                !Hx() && (Zr || rr.netWrittenSinceFrame >= gj) && rx(rr, !1, document.hidden ? "all" : "budget");
                Rx(rr)
              }(Wr, ar, Qr)
          }
        },
        Er = () => {
          Zr || (0, Ur.D)("wasm_socket_open", performance.now());
          for (const Sr of Ir.pending.splice(0)) rr.send(Sr);
          Ir.pendingBytes = 0
        },
        pr = rr => {
          if (UI === Ir && Wr.rings.net.cursor > 0 && rx(Wr, !1, "all"), UI === Ir) {
            if (Ir.detach(), UI = null, xp(Wr, Ir, rr.code, rr.reason) || pp(Wr, Ir)) return;
            Kp(Wr, "close", ar), Np(ar, Ir.left), sE(ar, rr.code, rr.reason)
          }
        };
      return rr.addEventListener("message", fr), rr.addEventListener("open", Er), rr.addEventListener("close", pr), UI = Ir, null === (Sr = (0, cr.f)()) || void 0 === Sr || Sr.socketAttached(ar), (0, mr.m)({
        websocketUrl: Qr
      }), ar
    }

    function fp() {
      const rr = UI;
      if (!rr) return;
      const Sr = SI,
        Qr = rr.resume;
      Qr && (Ep(), UI !== rr) || (UI = null, rr.detach(), rr.ws.close(), null !== Sr && (pp(Sr, rr) || Qr && xp(Sr, rr, Gj)) || (null !== Sr && Kp(Sr, "close", rr.conn), Np(rr.conn, rr.left)))
    }

    function Ep() {
      const rr = SI;
      null !== rr && !rr.isStopped && !zE && !bI && rr.rings.net.cursor > 0 && rx(rr, !1, "all")
    }

    function pp(rr, Sr) {
      var Qr;
      if (!Sr.resume) return !1;
      const Zr = Nf;
      return null !== Zr && null !== Sr.token && "" !== Sr.token && (Zr.pendingHold = {
        conn: Sr.conn,
        token: `${Zr.roomId}:${Sr.token}`
      }), Kp(rr, "close", Sr.conn), null === (Qr = (0, cr.f)()) || void 0 === Qr || Qr.socketDetached(Sr.conn), !0
    }

    function xp(rr, Sr, Qr) {
      let Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
        Wr = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      const ar = mp(Sr, Qr);
      if (null === ar) return !1;
      const {
        wI: jr,
        token: Ir,
        game: fr,
        joinedAt: Er
      } = ar;
      if (!Kp(rr, "close", Sr.conn, OQ.F.Held)) return !0;
      console.warn(`${vj} the game's connection ${Wr?"went silent":`dropped with code ${Qr}`}, holding it`);
      const pr = {
        closeReason: Zr,
        sinceJoinedMs: performance.now() - Er,
        game: fr
      };
      return (0, pZ.reportDisconnect)((0, rS.i)(Qr), jI, pr, Wr ? "silent" : void 0), jr.heldConn = Sr.conn, jr.dropCode = Qr, jr.pendingHold = {
        conn: Sr.conn,
        token: `${jr.roomId}:${Ir}`
      }, bI || rx(rr, !1, "all"), !0
    }

    function mp(rr, Sr) {
      const Qr = Nf,
        Wr = mf,
        ar = rr.token;
      return null === Qr || null === Wr || zE || rr.left || Wr.conn !== rr.conn || null === ar || "" === ar ? null : (0, Zr.k)(Sr) && Qr.resume.canHoldSeat() ? {
        wI: Qr,
        token: ar,
        game: Wr.game,
        joinedAt: Wr.joinedAt
      } : null
    }

    function Np(rr, Sr) {
      var Qr;
      null === (Qr = (0, cr.f)()) || void 0 === Qr || Qr.closeGame(rr), (0, ha.d)().close(rr), Sr || (0, mr.m)({
        websocketUrl: null
      })
    }

    function Up() {
      const rr = ef;
      if (null === rr) return;
      const Sr = (0, cr.f)();
      zE || null === Sr || Sr.Qq(rr) ? ef = null : performance.now() - sI.pause >= ij && (sI.pause = performance.now(), console.warn(`${vj} the cmd ring had no room for SetPaused(${rr}): written before the next frame`))
    }

    function tp() {
      const rr = Nf;
      Nf = null, null === rr || void 0 === rr || rr.resume.dispose()
    }

    function hp(rr, Sr) {
      var Qr, Zr;
      const {
        heldConn: Wr
      } = rr, ar = rr.resume.resumingConn;
      rr.heldConn = 0, rr.pendingHold = null, Nf === rr && (Nf = null), "left" === Sr ? rr.resume.leave() : rr.resume.dispose(), 0 === nf || (null === (Qr = UI) || void 0 === Qr ? void 0 : Qr.conn) !== nf || "left" === Sr && (null === (Zr = Wf) || void 0 === Zr ? void 0 : Zr.conn) === nf || ep(nf), "gaveUp" === Sr && 0 !== ar && ep(ar), 0 !== Wr && "refused" !== Sr && (console.info(`${vj} the game held through its drop ${"left"===Sr?"was left":"is given up"}`), null === SI || SI.isStopped || Kp(SI, "close", Wr), Np(Wr, !1))
    }

    function zp(rr, Sr) {
      const Qr = Sr.indexOf(":");
      return {
        roomId: Qr < 0 ? rr.roomId : Sr.slice(0, Qr),
        roomToken: Sr.slice(Qr + 1)
      }
    }

    function Yp(rr) {
      (0, cQ.logClientMeasurement)("join_preload", rr, {
        client: "wasm"
      })
    }

    function np(rr) {
      var Sr;
      Uf = rr;
      const Qr = rr.replayOffer && Yf !== rr.conn;
      zf = Qr ? rr.conn : 0, tf = Qr || hf.has(rr.conn) ? 0 : rr.conn, Rr.admitted(), rr.conn === nf && (nf = 0);
      const Zr = Nf;
      null !== Zr && (null === (Sr = mf) || void 0 === Sr ? void 0 : Sr.conn) === rr.conn && Zr.resume.onInitialInfo(rr)
    }

    function ep(rr) {
      var Sr;
      const Qr = UI;
      (null === Qr || void 0 === Qr ? void 0 : Qr.conn) === rr && (Qr.left = !0, null === (Sr = (0, cr.f)()) || void 0 === Sr || Sr.socketLeft(), (0, mr.m)({
        websocketUrl: null
      }), VE(rr) ? setTimeout((() => {
        UI === Qr && fp()
      }), SS.g) : fp())
    }

    function Kp(rr, Sr, Qr) {
      let Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        Wr = !1;
      return Lx(rr, (() => {
        const {
          net: ar
        } = rr.rings;
        Wr = "open" === Sr ? ar.writeOpen(Qr, Zr) : ar.writeClose(Qr, Zr), Wr || rr.crash(wQ.x, `a socket ${Sr} did not fit the net-in ring`)
      })), Wr
    }

    function yp(rr, Sr, Qr) {
      let Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const Wr = "noContext" === Sr ? "noContext" : "blockedAfterLoss" === Sr ? "graphicsLost" : rr;
      (0, pZ.showUnsupported)(Wr, "unsupported", Qr, {
        ...Zr,
        decline: Sr
      })
    }
    const Bp = 1500;

    function Tp(rr) {
      return (0, VQ.p)(rr) && vp(rr)
    }

    function vp(rr) {
      return 1 === rr.missing.length && rr.missing[0] === VQ.e
    }
    const Op = "wasmNoContextWaited";

    function Lp(rr, Sr) {
      const Qr = vp(rr),
        Zr = Qr ? (0, VQ.kb)() : "",
        Wr = Sr || (0, VQ.db)(Zr) ? "blockedAfterLoss" : Qr ? "noContext" : "unsupported",
        ar = `No WebGPU or WebGL2, and WebGL1 lacks ${rr.missing.join(", ")}`;
      return {
        decline: Wr,
        detail: "" === Zr ? ar : `${ar}; ${Zr}`,
        details: {
          missing: rr.missing.join(",")
        },
        retries: "unsupported" !== Wr && NE
      }
    }

    function lp(rr) {
      console.warn(`${vj} ${rr}: reloading once more onto the wasm client`), (0, xa.l)(), (0, pZ.flushCrashReports)(xS.c).then(xS.h, xS.h)
    }

    function Xp() {
      return NE && "address" !== iS.B.reason
    }

    function Pp(rr, Sr, Qr, Zr) {
      return gf(rr, Sr, Qr, Zr)
    }

    function Hp() {
      null === Gf || null === SI || SI.isStopped || zE || null !== XI || null === oj || (XI = Gf(oj, gp, Cp().follow))
    }

    function qp() {
      var rr, Sr, Qr;
      return null !== (rr = null === (Sr = ZI) || void 0 === Sr || null === (Qr = Sr.textures) || void 0 === Qr ? void 0 : Qr.files()) && void 0 !== rr ? rr : null
    }

    function Rp(rr) {
      Cp().follow((Sr => {
        null !== Sr && Promise.all([Promise.all([Qr.e(232), Qr.e(54)]).then((() => Qr(55179))), (0, xa.H)()]).then((rr => {
          let [{
            followPagePackFiles: Qr
          }, Zr] = rr;
          const Wr = null === Zr || (0, VQ.p)(Zr) ? "webgl" : Zr.backend;
          Qr(Sr, Sa.e, Wr, (rr => {
            Sa.e.setPageFiles(rr)
          }), gp)
        }), (Sr => {
          console.warn(`${vj} the texture pack's files didn't load: the previews draw the shipped ones until the next opens`, Sr), rr()
        }))
      }))
    }

    function gp(rr, Sr) {
      console.warn(`${vj} ${rr}`, Sr)
    }

    function Cp() {
      return QI ??= new Ta({
        load: rr => Promise.all([Qr.e(232), Qr.e(67)]).then((() => Qr(55183))).then((Sr => {
          let {
            startPageTexturePackFeed: Qr
          } = Sr;
          return Qr(gp, rr)
        })),
        store: xQ.h,
        jx: rr => {
          pI.then((() => {
            (0, pZ.reportTexturePackFeedLoadFailure)(rr, jI)
          }))
        }
      }), QI
    }
    const Mp = rr => Cp().follow(rr);

    function Gp() {
      return Cp().loaded()
    }
    const kp = function(rr, Sr, Qr) {
        let Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => performance.now(),
          Wr = 0;
        return async function(ar, jr) {
          let Ir = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
          const fr = ++Wr,
            Er = Zr() + Sr,
            pr = await
          function(rr, Sr) {
            let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {};
            return new Promise((Zr => {
              const Wr = setTimeout((() => {
                Zr(null), rr.then((rr => {
                  null !== rr && (rr.joinedWithout(), Qr(rr))
                }))
              }), Sr);
              rr.then((rr => {
                clearTimeout(Wr), Zr(rr)
              }))
            }))
          }(rr(ar), Sr, (rr => {
            fr === Wr && Ir() && jr(rr, Zr() + Sr).catch((rr => {
              Qr("the texture pack step after the join failed", rr)
            }))
          }));
          return null === pr ? null : jr(pr, Er)
        }
      }((rr => (0, HS.l)(rr) ? Cp().request() : Cp().forJoin()), Ba.b, gp),
      Ap = function(rr, Sr) {
        let Qr = !1;
        return {
          setGamePackConfirm: rr => {
            Qr = null !== rr, Sr(rr)
          },
          packStep: (Sr, Zr, Wr) => rr(Sr, Zr, (() => Qr && Wr()))
        }
      }(kp, (rr => {
        Cp().setGamePackConfirm(rr)
      }));

    function Vp(rr) {
      Ap.setGamePackConfirm(rr)
    }

    function ip() {
      if (zE || null !== Ff || null === kf || null === wf) return;
      const {
        backend: rr,
        canvas: Sr,
        fallbackReason: Qr,
        adapterVendor: Zr
      } = wf, Wr = kf;
      kf = null;
      try {
        Ff = Wr({
          backend: rr,
          canvas: Sr,
          fallbackReason: Qr,
          adapterVendor: Zr,
          joinedGame: () => zE ? null : Wf,
          canSend: () => !zE && null !== Wf && Wf.conn === tf,
          inGame: cp,
          shaderPackReach: () => {
            var rr, Sr;
            return null !== (rr = null === (Sr = gI) || void 0 === Sr ? void 0 : Sr.reachInJoinedGame()) && void 0 !== rr ? rr : null
          },
          ct: () => PI,
          msaa: () => Vf > 1,
          writeCmd: (rr, Sr, Qr) => null !== oj && oj(rr, Sr, Qr),
          takeFailedMeshJobs: () => {
            var rr, Sr;
            return null !== (rr = null === (Sr = YI) || void 0 === Sr ? void 0 : Sr.takeFailedMeshJobs()) && void 0 !== rr ? rr : 0
          },
          readLoadCounts: rr => {
            var Sr, Qr;
            return null !== (Sr = null === (Qr = SI) || void 0 === Qr ? void 0 : Qr.readLoadCounts(rr)) && void 0 !== Sr && Sr
          },
          mainStalled: (rr, Sr, Qr, Zr) => {
            (0, pZ.reportMainStall)(rr, Sr, Qr, Zr, jI)
          },
          sH: rr => {
            var Sr, Qr, Zr;
            return null !== (Sr = null === (Qr = Rf) || void 0 === Qr || null === (Zr = Qr.sH) || void 0 === Zr ? void 0 : Zr.call(Qr, rr)) && void 0 !== Sr ? Sr : -1
          }
        })
      } catch (ar) {
        console.error(`${vj} the frame telemetry didn't start`, ar)
      }
    }

    function wp(rr, Sr) {
      try {
        var Qr, Zr, Wr;
        const ar = Hf && null !== (Qr = null === (Zr = SI) || void 0 === Zr || null === (Wr = Zr.lastHeader) || void 0 === Wr ? void 0 : Wr.renderPending) && void 0 !== Qr ? Qr : 0;
        (0, bZ.f)(Sr, rr, cp() && !(null !== Ya), ar)
      } catch (ar) {
        (0, bZ.z)(), console.error(`${vj} the quality steps stopped`, ar)
      }
    }

    function cp() {
      return null !== Wf && aE === Wf && !zE
    }

    function Fp(rr) {
      const Sr = Ff;
      Ff = null;
      try {
        null === Sr || void 0 === Sr || Sr.stop()
      } catch {}
      console.error(`${vj} the frame telemetry threw: it stops`, rr)
    }

    function op(rr) {
      var Sr, Qr, Zr, Wr;
      if ((0, ha.d)().fire(rr), "message" === rr.type) {
        if (JI++, rr.xj === OQ.Sc.ERROR && null !== jf) {
          var ar;
          const {
            text: Sr,
            dropsCache: Qr
          } = (0, rS.n)((new TextDecoder).decode(rr.payload));
          Lf ||= Qr, (null === (ar = Bf) || void 0 === ar ? void 0 : ar.conn) === rr.conn && (lf = Sr)
        } else if (rr.xj === LQ.pc.ResumeComplete) {
          var jr;
          Yf = rr.conn, rr.conn === zf && (zf = 0, tf = hf.has(rr.conn) ? 0 : rr.conn), null === (jr = Nf) || void 0 === jr || jr.resume.onResumeComplete(rr.conn)
        }
        return
      }
      rr.phase === OQ.G.Left ? DI = rr.conn : rr.phase === OQ.G.Activated && (null === (Sr = Bf) || void 0 === Sr ? void 0 : Sr.conn) === rr.conn ? Bf.activated = !0 : rr.phase === OQ.G.Resumed ? function(rr) {
        var Sr, Qr;
        nf = rr;
        const Zr = Nf;
        if (null === Zr || 0 === Zr.heldConn || (null === (Sr = UI) || void 0 === Sr ? void 0 : Sr.conn) !== rr || !UI.resume || null === mf) return;
        console.info(`${vj} the game resumed on conn ${rr}, waiting for its InitialInfo`);
        const Wr = Zr.heldConn;
        Zr.heldConn = 0, UI.resume = !1, mf.conn = rr, (null === (Qr = pf) || void 0 === Qr ? void 0 : Qr.conn) === Wr && (pf = {
          conn: rr,
          info: pf.info
        }), FS.d.apply({
          shopInfo: null,
          _shopVersion: qS.c
        })
      }(rr.conn) : rr.phase === OQ.G.Held ? function(rr) {
        var Sr;
        const Qr = Nf,
          Zr = null !== (Sr = null === Qr || void 0 === Qr ? void 0 : Qr.pendingHold) && void 0 !== Sr ? Sr : null;
        if (null !== Qr && null !== Zr && Zr.conn === rr) return Qr.pendingHold = null, Qr.heldConn = rr, nf = 0, console.warn(`${vj} the core holds the game, reconnecting`), void Qr.resume.onDropped(Zr.token);
        if (rr === nf) {
          nf = 0;
          const Sr = SI;
          null === Sr || Sr.isStopped || (console.info(`${vj} the core held again a resumed game the shell ended before its InitialInfo: closing it again`), Kp(Sr, "close", rr))
        }
      }(rr.conn) : rr.phase === OQ.G.Closed && (null === (Qr = Nf) || void 0 === Qr || null === (Zr = Qr.pendingHold) || void 0 === Zr ? void 0 : Zr.conn) === rr.conn && (Nf.heldConn === rr.conn ? function(rr) {
        const Sr = rr.heldConn,
          Qr = rr.dropCode;
        hp(rr, "refused"), console.info(`${vj} the core didn't hold the game through its drop: it hadn't started`), queueMicrotask((() => {
          Np(Sr, !1), sE(Sr, Qr, "", !0)
        }))
      }(Nf) : Nf.pendingHold = null), rr.phase !== OQ.G.Held && rr.phase !== OQ.G.Left && rr.phase !== OQ.G.Closed || (hf.add(rr.conn), rr.conn === tf && (tf = 0));
      const Ir = Object.keys(OQ.G).find((Sr => OQ.G[Sr] === rr.phase)),
        fr = 0 === rr.code ? "" : ` (code ${rr.code})`;
      console.info(`${vj} conn ${rr.conn}: ${null!==Ir&&void 0!==Ir?Ir:rr.phase}${fr}, ${JI} raw messages so far`), (null === (Wr = Wf) || void 0 === Wr ? void 0 : Wr.conn) !== rr.conn || rr.phase !== OQ.G.Left && rr.phase !== OQ.G.Closed || AE(null), Ef !== rr.conn || rr.phase !== OQ.G.Left && rr.phase !== OQ.G.Closed || (Ef = null, null === Wf && null === jf && Qa.b.setGame(void 0));
      for (const pr of [...Pf]) try {
        pr(rr.conn, rr.phase, rr.code)
      } catch (Er) {
        (0, lQ.k)(Er, `${vj} a connection listener threw`)
      }
    }
    const bp = 9e4,
      Jp = 1e3;

    function Dp() {
      (0, xa.l)(), mE.forget(), null === Wf && null === jf || (0, yZ.e)(), queueMicrotask((() => {
        try {
          hx()
        } catch (rr) {
          console.warn(`${vj} stopping before the reload threw`, rr)
        }(0, pZ.flushCrashReports)(xS.c).then(xS.h, xS.h)
      }))
    }

    function dp() {
      const rr = SI;
      null === rr || rr.isStopped || null === UI || bI || !rr.hasPendingCommands() || rx(rr, !1, "budget")
    }

    function sp(rr) {
      var Sr;
      const Qr = Wf;
      rr.persisted || null === Qr || (null === (Sr = UI) || void 0 === Sr ? void 0 : Sr.conn) !== Qr.conn || UI.left || Qr.leave()
    }

    function rx(rr, Sr, Zr) {
      let Wr = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const ar = bI;
      bI = !0;
      try {
        const ar = rr.rings.net.cursor >= Cj;
        ar && "all" !== Zr && !document.hidden && nx("backlog", `a shown tab's net-in is ${rr.rings.net.cursor} bytes behind: one frame reads it all`);
        return function(rr, Sr, Zr, Wr) {
          var ar, jr, Ir, fr;
          if (zE) return !1;
          if (Lx(rr, Qx), zE || rr.isStopped) return !1;
          mx() && GI("modelsIn");
          Up(), VI = performance.now(), DI = null, dI = !1, (0, wr.Q)(), null === (ar = TI) || void 0 === ar || ar.beforeFrame(), fW(VI, rr), (0, wr.G)(VI, Zx), oI = !0;
          const Er = Sr && xx();
          let pr;
          try {
            pr = rr.frame(VI, Er, Zr)
          } finally {
            oI = !1
          }
          if (!pr) return !1;
          Af.observe(null !== (jr = null === (Ir = rr.lastHeader) || void 0 === Ir ? void 0 : Ir.chunksCancelled) && void 0 !== jr ? jr : 0);
          const xr = rr.lastFrameKind,
            mr = (0, fQ.c)(xr);
          (function(rr) {
            null !== Aa && Aa.afterFrame(performance.now(), rr)
          })(mr), null === (fr = of) || void 0 === fr || fr.frame(rr, VI, xr), Sr && (IE = mr);
          mr && ((0, ZQ.e)(VI), ZE.frame(VI), pE.end());
          if (null !== Ff) try {
            Ff.frameRan(rr, VI, performance.now(), xr)
          } catch (tr) {
            Fp(tr)
          }
          "drawn" === xr && px() && function() {
            for (const rr of [...Ea]) rr()
          }();
          rr.forEachNetOut(Nx);
          const Nr = UI;
          null !== DI && (null === Nr || void 0 === Nr ? void 0 : Nr.conn) === DI && Ux(Nr, SS.o);
          Ex(rr),
            function(rr) {
              const Sr = 0 !== (rr.headerWord(LQ.L.LoadSteps) & LQ.T.JoinPreload);
              Sr !== ff && (ff = Sr, (0, pZ.setCrashAdPreload)(Sr), (0, hZ.U)())
            }(rr), Sr && (! function(rr) {
              var Sr, Zr, Wr;
              if (null === Wf || !xx()) return;
              const ar = rr.headerWord(LQ.L.LoadSteps);
              null === QE || aE === Wf && !QE.frame(VI, 0 !== (ar & LQ.V.TerrainDrawn)) || (QE = null);
              if (0 === (ar & LQ.T.PlayerBound)) return;
              const jr = rr.lastHeader,
                Ir = !Hf || 0 === (null === jr || void 0 === jr ? void 0 : jr.renderPending);
              !df && Ir && (df = !0, performance.mark(Rj));
              if (aE === Wf) return;
              const fr = null !== (Sr = null === jr || void 0 === jr ? void 0 : jr.firstView) && void 0 !== Sr ? Sr : OQ.bb.NotYet;
              if (Hf && fr === OQ.bb.NotYet) return;
              if (Df && (!0 !== (null === (Zr = (0, cr.f)()) || void 0 === Zr ? void 0 : Zr.isSessionLive) || !Ir)) return;
              var Er;
              aE = Wf, pE.shown(), Hf && null !== mf && function(rr, Sr) {
                let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : xQ.j;
                const Zr = Array.from(Sr).filter(TW).slice(0, BW);
                if ("" === rr || 0 === Zr.length) return;
                const Wr = OW(Qr).filter((Sr => Sr.game !== rr));
                Qr.setItem(KW, [{
                  game: rr,
                  codes: Zr
                }, ...Wr].slice(0, yW))
              }(mf.game, null !== (Er = rr.firstViewTerrainCodes()) && void 0 !== Er ? Er : []);
              const pr = Wf;
              if (setTimeout((() => {
                  Wf === pr && (0, Ur.s)()
                }), 0), null === (Wr = gI) || void 0 === Wr || Wr.playable(), function() {
                  clearTimeout(NI), NI = setTimeout((() => {
                    cp() && Px((rr => {
                      let {
                        prefetchWorldgenWorker: Sr
                      } = rr;
                      Sr()
                    }))
                  }), Fj)
                }(), Df) return;
              Df = !0, ZE.shown(), performance.mark(qj), (0, qa.p)("render") && Promise.all([Qr.e(91), Qr.e(57)]).then((() => Qr(5481))).then((rr => {
                let {
                  renderDebugPlayable: Sr
                } = rr;
                Sr()
              }), (rr => {
                console.warn("The render debug topic didn't load", rr)
              }));
              const xr = Math.round(performance.now()),
                mr = rr.readViewQueuedPrograms();
              null !== mr && (0, Ur.D)("wasm_view_links", xr, (0, hr.Tb)(mr));
              const Nr = null === SE || null === uf ? 0 : Math.max(0, uf - SE),
                tr = null === SE ? 0 : Math.max(0, xr - SE),
                zr = Hf ? rr.readFirstViewWait(Nr, tr) : null;
              null !== zr && (0, Ur.z)(zr);
              if (Hf && fr !== OQ.bb.Drawn) {
                const Sr = fr === OQ.bb.HeldBackstop ? "held_draws" : "long",
                  {
                    cause: Qr
                  } = Ix(rr);
                if (console.warn(`${vj} playable at ${xr} ms on the first view's ${Sr} backstop, ${Qr}: it wasn't drawn whole in time`), (0, Ur.D)("wasm_view_backstop", xr, `${Sr}:${Qr}`), "long" === Sr) {
                  var Yr, nr;
                  const Sr = null !== (Yr = null === (nr = mf) || void 0 === nr ? void 0 : nr.game) && void 0 !== Yr ? Yr : "";
                  QE = new BZ.d((() => {
                    const {
                      cause: Qr,
                      census: Zr
                    } = Ix(rr);
                    (0, pZ.reportFirstViewNoTerrain)(Sr, Qr, Zr, jI), (0, VS.x)("noTerrain")
                  }))
                }
              } else console.info(`${vj} playable at ${xr} ms${Hf?"":" (no renderer)"}`);
              setTimeout(Mf, 0), (0, bS.h)().catch((rr => {
                console.error(`${vj} item sprites didn't load, so item particles show the missing texture`, rr)
              })), FW.c.warm()
            }(rr), mr && null !== Wf && 0 !== (rr.headerWord(LQ.L.LoadSteps) & LQ.V.MeshLanded) && (jE = Wf), (0, oW.f)(null !== Wf && jE === Wf && aE !== Wf), (0, oW.i)(null !== Wf));
          (0, wQ.S)(rr, {
            worldgen: hI,
            mesh: YI
          }),
          function(rr) {
            rr.forEachEvent(pW);
            for (const Sr of EW) try {
              (0, ZW.e)(Sr)
            } catch (tr) {
              if ((0, lQ.g)(tr)) {
                rr.crashOn(wQ.k, tr);
                break
              }
              console.error(`${aW} an input action listener threw`, tr)
            }
            EW.length = 0
          }(rr), Wr && (0, IQ.b)();
          return !rr.isStopped
        }(rr, Sr, "all" === Zr || ar, Wr)
      } finally {
        bI = ar, ar || (iI = performance.now(), GE())
      }
    }

    function Sx(rr) {
      console.error(`${vj} a frame-start listener threw`, rr)
    }

    function Qx() {
      var rr, Sr, Qr, Zr;
      null === (rr = OI) || void 0 === rr || rr.drain(oj, bj), null === (Sr = HI) || void 0 === Sr || Sr.drain(oj), null === (Qr = qI) || void 0 === Qr || Qr.drain(performance.now()), Cf(oj), null === (Zr = XI) || void 0 === Zr || Zr.drain()
    }

    function Zx(rr) {
      console.error(`${vj} a before-frame listener threw`, rr)
    }

    function Wx(rr) {
      var Sr, Qr;
      const Zr = SI;
      if (null === Zr) return;
      if (Zr.isStopped || zE || (0, xa.d)()) return void ZE.shown();
      const Wr = ZE.end(rr, performance.now());
      if (null === Wr) return;
      const {
        cause: ar,
        census: jr,
        loadSteps: Ir
      } = Ix(Zr), fr = {
        cause: ar,
        bound: 0 !== (Ir & LQ.T.PlayerBound),
        preload: 0 !== (Ir & LQ.T.JoinPreload),
        startupLoaded: xx(),
        renderPending: null !== (Sr = null === (Qr = Zr.lastHeader) || void 0 === Qr ? void 0 : Qr.renderPending) && void 0 !== Sr ? Sr : 0,
        wait: Zr.readFirstViewWait(0, 0),
        canvasEmpty: null !== wf && (0, TZ.e)(wf.canvas)
      };
      fr.bound && null === fr.wait && console.warn(`${vj} the first view's wait couldn't be read as the load ended: its report says lacked none`), (0, pZ.reportFirstViewUnshown)(WE, Wr, fr, jr, jI), "hidden" !== rr && "pagehide" !== rr || (0, pZ.flushCrashReports)(xS.c)
    }

    function ax() {
      document.hidden ? (EE = !0, Wx("hidden")) : ZE.pageShown(performance.now())
    }

    function jx() {
      Wx(document.hidden ? "hidden" : "pagehide")
    }

    function Ix(rr) {
      const Sr = (0, cr.f)(),
        Qr = (0, cr.l)(),
        Zr = null === Sr || null === Qr ? null : Qr.readDrawCensus(Sr.api),
        Wr = rr.headerWord(LQ.L.LoadSteps);
      return {
        cause: (0, BZ.n)(Wr, Zr),
        census: Zr,
        loadSteps: Wr
      }
    }
    const fx = {
      ChunkRequested: "wasm_chunk_requested",
      ChunkStored: "wasm_chunk_stored",
      MeshLanded: "wasm_mesh_landed",
      PlayerChunk: "wasm_player_chunk",
      TerrainDrawn: "wasm_terrain_drawn"
    };

    function Ex(rr) {
      var Sr;
      if (Df) return;
      if (null === uf && xx() && (uf = performance.now()), null === Wf || 0 === (rr.headerWord(LQ.L.LoadSteps) & LQ.T.PlayerBound) ? SE = null : SE ??= performance.now(), null === jf && null === Wf) return;
      null === uf || rE || (rE = !0, (0, Ur.D)("wasm_startup_loaded", uf));
      let Qr = 0;
      null !== Wf ? Qr = -1 : !0 === (null === (Sr = Bf) || void 0 === Sr ? void 0 : Sr.activated) && (Qr = ~LQ.V.TerrainDrawn);
      const Zr = rr.headerWord(LQ.L.LoadSteps) & Qr & ~sf;
      if (0 === Zr) return;
      sf |= Zr;
      const Wr = performance.now();
      var ar, jr, Ir;
      0 !== (Zr & LQ.V.PlayerChunk) && (ZE.playerChunk(Wr, document.hidden), WE = null !== (ar = null !== (jr = null === (Ir = mf) || void 0 === Ir ? void 0 : Ir.game) && void 0 !== jr ? jr : If) && void 0 !== ar ? ar : "", (0, pZ.warmCrashCounts)());
      for (const [fr, Er] of Object.entries(fx)) 0 !== (Zr & LQ.V[fr]) && (0, Ur.D)(Er, Wr)
    }

    function px() {
      return Hf && xx()
    }

    function xx() {
      return RI && mx()
    }

    function mx() {
      return null === OI || OI.startupDone
    }

    function Nx(rr, Sr) {
      const Qr = UI;
      (null === Qr || void 0 === Qr ? void 0 : Qr.conn) === rr ? Ux(Qr, Sr) : rf++
    }

    function Ux(rr, Sr) {
      const {
        ws: Qr
      } = rr;
      return Qr.readyState === WebSocket.OPEN ? (Qr.send(Sr), !0) : Qr.readyState === WebSocket.CONNECTING && rr.pendingBytes + Sr.byteLength <= Vj ? (rr.pending.push(Sr.slice()), rr.pendingBytes += Sr.byteLength, !0) : (rf++, !1)
    }

    function tx() {
      return null !== Wf && px()
    }

    function hx() {
      var rr, Sr, Qr, Zr, Wr, ar, jr, Ir, fr, Er, pr, xr, mr, Nr, Ur, tr, hr;
      zE = !0, fE.stop(), pE.end(), (0, ga.endLookDebugTake)(), Aa = null, tp(), (0, wr.N)().unlockPointer(), (0, wr.K)(null), null === (rr = vI) || void 0 === rr || rr(), vI = null, null === (Sr = (0, cr.l)()) || void 0 === Sr || Sr.followCursorAim(null), (0, IQ.y)(), (0, cr.e)(), aI.stop(), null === (Qr = bf) || void 0 === Qr || Qr(), bf = null, null === (Zr = Jf) || void 0 === Zr || Zr(), Jf = null, null === (Wr = Ff) || void 0 === Wr || Wr.stop(), Ff = null, (0, vZ.o)(null), null === (ar = tI) || void 0 === ar || ar(), tI = null, null === (jr = hI) || void 0 === jr || jr.stop(), hI = null, null === (Ir = YI) || void 0 === Ir || Ir.stop(), YI = null, null !== (fr = ZI) && void 0 !== fr && null !== (Er = fr.textures) && void 0 !== Er && Er.assets && (0, uW.k)(null), null === (pr = ZI) || void 0 === pr || pr.stop(), ZI = null, WI = null;
      const zr = nI;
      nI = null, zr && (zr.stop(), Ox(zr)), null === (xr = HI) || void 0 === xr || xr.dispose(), HI = null, null === (mr = qI) || void 0 === mr || mr.dispose(), qI = null, OI = null, null === (Nr = lI) || void 0 === Nr || Nr(), lI = null, null === (Ur = BI) || void 0 === Ur || Ur(), BI = null, null !== FI && (clearTimeout(FI), FI = null), null === (tr = TI) || void 0 === tr || tr.stop(), TI = null, qE(), Qa.b.release(), fp();
      const Yr = XI;
      XI = null;
      try {
        null === Yr || void 0 === Yr || Yr.dispose()
      } catch (nr) {
        console.warn(`${vj} the sky's images didn't release`, nr)
      }(0, bW.g)(null), null === (hr = uj) || void 0 === hr || hr.pagePreviews().endSession(null === (0, gS.l)())
    }

    function zx(rr, Sr) {
      var Qr, Zr;
      const Wr = null !== (Qr = null === (Zr = nI) || void 0 === Zr ? void 0 : Zr.details()) && void 0 !== Qr ? Qr : {},
        ar = rr.site === Lj || rr.site === lj || rr.site === pZ.RENDER_RELOAD_SITE || rr.site === Xj ? rr.error instanceof WebAssembly.RuntimeError || rr.error instanceof MQ.d : !(0, VQ.t)(rr.error) && (0, wQ.O)(rr);
      ar && rr.error instanceof Error && (0, gS.V)(rr.error);
      const jr = ar || rr.site === wQ.B ? (0, pZ.readTrap)(rr.error) : null,
        Ir = null !== jr && (0, PQ.e)(jr.kind, jr.refusedBytes) ? jr.refusedBytes : 0,
        fr = (0, jZ.o)(),
        Er = null === eI ? (0, iW.r)(function() {
          try {
            return (0, gS.s)().buffer.byteLength
          } catch {
            return 0
          }
        }(), Ir, fr) : eI.ceilingMayRefuse(Ir, fr),
        pr = Ir > 0 && !Er && Xp() && !(0, xa.d)() ? (0, jZ.r)() : void 0;
      var xr;
      if (hx(), (0, xa.d)()) return mE.releaseNow(), console.warn(`${vj} the session stopped at ${rr.site} as the page reloads`, rr.error), void((0, VQ.t)(rr.error) || (null === (xr = rr.header) || void 0 === xr ? void 0 : xr.lastError) === OQ.J.CoreBusy || (0, pZ.reportStoppedCore)(rr, Sr, jr, {
        memoryDetails: Wr,
        memoryStep: pr
      }));
      (0, pZ.showCrash)(rr, Sr, jr, {
        memoryDetails: Wr,
        memoryStep: pr
      })
    }

    function Yx(rr) {
      var Sr, Qr;
      let {
        text: Zr,
        reload: Wr,
        stillBlocked: ar
      } = rr;
      if (hE) return;
      hE = !0, (0, hZ.eb)(), null === (Sr = vf) || void 0 === Sr || Sr.abort(), vf = null, Qa.b.release();
      const jr = NE ? null !== (Qr = Zr.cancel) && void 0 !== Qr ? Qr : "general:back" : null;
      !async function(rr, Sr, Qr) {
        let Zr = rr;
        for (; await lS(Zr) && Sr;) {
          if (null === Qr || mQ(!1) || mQ(!0)) return void(0, xS.h)();
          Zr = Qr
        }
        NE && (0, xS.f)("/")
      }({
        ...Zr,
        cancel: jr
      }, Wr, null === ar ? null : {
        ...ar,
        cancel: jr
      })
    }

    function nx(rr, Sr) {
      const Qr = performance.now();
      return !(Qr - sI[rr] < ij) && (sI[rr] = Qr, console.warn(`${vj} ${Sr}`), !0)
    }

    function ex(rr) {
      const {
        input: Sr,
        net: Qr,
        worker: Zr
      } = rr.rings, Wr = rr.optionsDropped, ar = Sr.dropped + Wr + Qr.dropped + Zr.dropped + rf;
      ar !== uI && nx("dropped", `${ar} records dropped so far (input ${Sr.dropped}, options ${Wr}, net ${Qr.dropped}, worker ${Zr.dropped}, net-out ${rf})`) && (uI = ar)
    }

    function Kx() {
      var rr, Sr;
      const Qr = (0, tZ.d)();
      if (null === Qr) return null;
      const Zr = (0, KZ.p)(Qr);
      return {
        ...Zr,
        horizontal: Math.min(Zr.horizontal, null !== (rr = null === (Sr = nI) || void 0 === Sr ? void 0 : Sr.shedDistanceInUse()) && void 0 !== rr ? rr : 1 / 0)
      }
    }
    const yx = new WeakSet;

    function Bx(rr) {
      var Sr, Qr;
      return {
        samples: Hf ? Vf : null,
        sunShadows: rr,
        renderDistance: null !== (Sr = null === (Qr = Kx()) || void 0 === Qr ? void 0 : Qr.horizontal) && void 0 !== Sr ? Sr : null
      }
    }

    function Tx(rr) {
      If = rr, (0, hZ.U)()
    }

    function vx() {
      var rr, Sr, Qr;
      const Zr = Kx();
      return {
        ...null === (rr = nI) || void 0 === rr ? void 0 : rr.pageKillSnapshot(),
        renderDistance: null !== (Sr = null === Zr || void 0 === Zr ? void 0 : Zr.horizontal) && void 0 !== Sr ? Sr : null,
        renderDistanceVertical: null !== (Qr = null === Zr || void 0 === Zr ? void 0 : Zr.vertical) && void 0 !== Qr ? Qr : null,
        chunkCap: KI,
        budgetBasis: yI,
        renderBackend: (0, xa.z)(),
        adPreload: ff,
        ...(0, zZ.c)(If)
      }
    }

    function Ox(rr) {
      var Sr;
      console.info(`${vj} wasm memory at the session's end`, rr.details());
      const {
        wasmMainMiB: Qr,
        wasmWorkersMiB: Zr,
        peakStoredChunks: Wr
      } = rr.pageKillSnapshot(), ar = navigator.deviceMemory;
      (0, cQ.logClientMeasurement)("wasm_memory_end", {
        wasmMainMiB: Qr,
        wasmWorkersMiB: Zr,
        peakStoredChunks: Wr
      }, {
        client: "wasm",
        renderBackend: null !== (Sr = (0, xa.z)()) && void 0 !== Sr ? Sr : "none",
        os: (0, YZ.getOperatingSystem)(),
        deviceMemory: String(null !== ar && void 0 !== ar ? ar : "unreported")
      })
    }

    function Lx(rr, Sr) {
      if (!rr.isStopped) try {
        Sr()
      } catch (Qr) {
        rr.crash(wQ.E, Qr)
      }
    }

    function lx() {
      return zI ??= Qr.e(84).then((() => Qr(55186))).catch((rr => {
        throw zI = null, rr
      })), zI
    }
    async function Xx() {
      const {
        createWorldgenWorker: rr,
        worldgenWorkerReady: Sr
      } = await lx();
      return await Sr(), rr
    }

    function Px(rr) {
      var Sr;
      null === (Sr = zI) || void 0 === Sr || Sr.then(rr, (() => {}))
    }

    function Hx() {
      return performance.now() - Math.max(iI, wI) >= wj
    }

    function qx(rr) {
      const Sr = document.hidden || cI ? "all" : "budget";
      cI = !0;
      const Qr = rx(rr, !1, Sr);
      var Zr;
      Qr && (ex(rr), null === (Zr = nI) || void 0 === Zr || Zr.afterFrame());
      return Qr
    }

    function Rx(rr) {
      rr.isStopped || 0 === rr.rings.net.cursor || Hx() && !qx(rr) || rr.rings.net.cursor > 0 && performance.now() - wI >= wj / 2 && function(rr) {
        FI ??= setTimeout((() => {
          FI = null, Rx(rr)
        }), wj)
      }(rr)
    }

    function gx(rr, Sr) {
      return async function(rr, Sr, Qr) {
        let {
          stop: Zr,
          stillWanted: Wr,
          beforeReload: ar
        } = Qr;
        const jr = await (0, eW.i)(rr, {
          stillWanted: Wr,
          beforeReload: async () => {
            Zr(), await Promise.all([(0, pZ.flushCrashReports)(xS.c), null === ar || void 0 === ar ? void 0 : ar()])
          },
          reload: xS.h
        });
        return jr || Sr(), jr
      }(rr, Sr, {
        ...arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        stop: hx
      })
    }
    let Cx = !1;

    function Mx() {
      return Cx = !0, async function(rr, Sr, Zr) {
        const {
          gamePackSource: Wr
        } = await Qr.e(132).then((() => Qr(42906)));
        await Ap.packStep(rr, ((Qr, Zr) => Qr.packForGame(rr, Wr(Sr), Zr)), Zr)
      }(...arguments)
    }

    function Gx(rr) {
      ! function(rr, Sr) {
        rr((rr => {
          null === rr || void 0 === rr || rr.subscribe((rr => {
            let {
              pack: Qr,
              gameSource: Zr
            } = rr;
            Sr(null === Zr || null === Qr ? null : {
              pack: Qr,
              source: "" === Zr ? null : Zr
            })
          }))
        }))
      }(Mp, rr)
    }
    let kx = !1,
      Ax = null,
      Vx = !1,
      ix = !1;

    function wx() {
      var rr;
      kx || (kx = !0, OS = (rr, Sr) => (0, zS.z)(YS.f.get().getCurrentLanguageCode(), rr, Sr), TE("play", ES), (0, mr.l)(new Qm), Ir.gameBridge.attach(ur), Dx().catch((() => {})), (0, cr.n)((rr => {
        KS(rr.setTextHost)
      })), rr = ox, Of.add(rr), function(rr) {
        for (const Sr of CI) rr(Sr);
        MI.add(rr)
      }((rr => {
        Fx(cx[rr])
      })))
    }
    const cx = {
      booted: ar.i.INITIALISE_NOA,
      texturesIn: ar.i.REGISTRATION,
      modelsIn: ar.i.SETUP_LIFEFORMS
    };

    function Fx(rr) {
      fr.i.Jp("matchmakeAndPlayStepCompleted", {
        step: rr,
        totalSubSteps: 1
      })
    }

    function ox(rr) {
      if (!Vx) return;
      const {
        gameNameWithVariation: Sr,
        lobbyName: Qr
      } = (0, mr.b)();
      if (rr.code === Zr.e.serverUpdating.code) return (new Qm).leaveLive(), void Jx(Sr, Qr);
      Gr.c.leftGame(Sr, rr.code), fr.i.Jp("unwantedLeftGame", {
        reason: bx(rr),
        requiresRefresh: rr.requiresRefresh,
        canReconnect: null !== rr.reconnect,
        automaticallyReconnect: rr.reconnecting,
        canPlayAgain: rr.canPlayAgain,
        gameNameWithVariation: Sr,
        lobbyName: Qr
      }), (new Qm).leaveLive()
    }

    function bx(rr) {
      return null !== rr.reasonKey ? {
        translationKey: rr.reasonKey
      } : "gameOrPluginKick" === rr.name ? (0, XS.d)(rr.reason) : `You have disconnected from the server.\n${rr.reason}`
    }

    function Jx(rr, Sr) {
      var Zr;
      Zr = (0, Er.G)(rr, Sr), Promise.resolve().then((() => Qr(1644))).then((rr => {
        let {
          navigatePreserveSearch: Sr
        } = rr;
        Sr(Zr)
      })).catch((rr => {
        console.warn("[bloxd-wasm-client] the page's router didn't navigate: loading the page instead", rr), (0, xS.f)(Zr)
      }))
    }

    function Dx() {
      return Ax ??= Promise.all([Qr.e(85), Qr.e(89), Qr.e(86), Qr.e(87), Qr.e(88), Qr.e(105), Qr.e(102), Qr.e(307), Qr.e(127), Qr.e(281), Qr.e(255), Qr.e(247), Qr.e(55)]).then((() => Qr(42871))).then((rr => {
        try {
          rr.attachPlayGameSources()
        } catch (Sr) {
          throw console.error("[bloxd-wasm-client] the play sources did not attach", Sr),
            function(rr) {
              pI.then((Sr => {
                null === Sr || Sr.isStopped || zE ? console.warn(`${vj} the play sources threw as they attached, after the client stopped`, rr) : zx({
                  site: Xj,
                  error: rr,
                  header: null
                }, jI)
              }))
            }(Sr), Sr
        }
      }), (rr => {
        throw Ax = null, new cr.b(rr)
      })), Ax
    }
    async function dx(rr, Sr) {
      wx(), Cx = !0, Vx = !0;
      let Qr = {
          place: rr.place,
          matchedAt: rr.matchedAt
        },
        jr = rr.place.gameNameWithVariation;
      const Ir = (0, xr.d)();
      let fr = null;
      const Er = await lE({
        matchmake: async () => {
          let Sr = Qr;
          if (Qr = null, null === Sr) {
            const Qr = await rr.rematch();
            if (Qr.isError()) throw fr = Qr.asError().forward(), new Error(Qr.asError().message);
            Sr = {
              place: Qr.getValue(),
              matchedAt: performance.now()
            }
          }
          jr = Sr.place.gameNameWithVariation, await (0, tr.b)();
          return {
            target: await (0, ZS.g)(rr.userContext, Sr.place, Gp(), Ir),
            matchedAt: Sr.matchedAt,
            freshMs: ZS.d
          }
        },
        pageReady: Dx,
        onFailure: (rr, Sr) => {
          null === fr && function(rr, Sr) {
            (0, pZ.reportPageJoinFailure)(rr, jI, Sr)
          }(rr, {
            sinceJoinStartMs: Sr,
            game: jr
          })
        },
        rejoin: () => () => {},
        invalidateTrafficCode: () => rr.userContext.invalidateTrafficCode(),
        signal: Sr
      });
      switch (Er.kind) {
        case "joined":
          if (Ir) {
            setTimeout((() => {
              Rr.ready()
            }), 0);
            const {
              game: rr
            } = Er;
            (0, xr.n)((() => {
              rr.endJoinAd() && ((0, Ur.w)(), Rr.adEnded())
            }))
          }
          return ix || (ix = !0, (0, Cr.c)()), Vx ? (Fx(ar.i.CONNECT_TO_GAME_SERVER), Fx(ar.i.SHADER_PACK), function() {
            var rr, Sr;
            return null !== (rr = null === (Sr = gI) || void 0 === Sr ? void 0 : Sr.runsInJoinedGame()) && void 0 !== rr && rr
          }() && (0, gr.c)(rr.userContext, jr).catch((rr => {
            console.error("Failed to report the shader pack session", rr)
          })), function() {
            const rr = function() {
              var rr, Sr;
              return null !== (rr = null === (Sr = gI) || void 0 === Sr ? void 0 : Sr.couldntRunInJoinedGame()) && void 0 !== rr ? rr : null
            }();
            null !== rr && (0, gr.b)(rr)
          }(), Wr.e.value(void 0)) : Sm("The server ended the game as it joined");
        case "failed":
          if (!Er.reloading) {
            if (null !== fr) return fr;
            if ((Er.error instanceof SS.q || Er.error instanceof SS.e) && Er.error.code === Zr.e.serverUpdating.code) {
              if (Sr.aborted) return Sm("Left the game while it loaded");
              const {
                gameNameWithVariation: rr,
                lobbyName: Qr
              } = (0, mr.b)();
              return Jx(rr, Qr), Sm("The server is updating")
            }
            return Er.error instanceof pS.c ? Wr.e.errorWithCode(Er.error.messageKey, ar.i.SHADER_PACK, {
              severity: "medium"
            }) : Wr.e.errorWithCode(function(rr) {
              if (rr instanceof SS.C || rr instanceof Vr.c) return rr.message;
              if (sx(rr)) return (0, rS.j)(rr.code, rr.serverText);
              return rS.e
            }(Er.error), ar.i.CONNECT_TO_GAME_SERVER, {
              error: ux(Er.error) ? Er.error : void 0,
              severity: rm(Er.error),
              gameServerUnreachable: (0, QS.b)(Er.error),
              joinFailure: (0, QS.j)(Er.error),
              rematch: (0, kr.b)(Er.error),
              gameRefused: (0, Ar.c)(Er.error)
            })
          }
          return Sm("Reloading into the new build");
        case "stopped":
          return Sm("The game client stopped, and shows why");
        case "Rr":
          return Sm("Left the game while it loaded")
      }
    }

    function sx(rr) {
      return rr instanceof SS.q || rr instanceof SS.e && "attach" !== rr.stage
    }

    function ux(rr) {
      return !(rr instanceof SS.C) && !sx(rr) && void 0 === (0, QS.b)(rr)
    }

    function rm(rr) {
      return sx(rr) ? rr instanceof SS.e && (0, rS.i)(rr.code).requiresRefresh ? "medium" : "low" : ux(rr) || rr instanceof SS.C ? "medium" : "low"
    }

    function Sm(rr) {
      return Wr.e.errorWithCode(rr, ar.i.CONNECT_TO_GAME_SERVER, {
        severity: "low",
        Rr: !0
      })
    }
    class Qm {
      leave(rr) {
        if ((0, ir.d)()) {
          var Sr, Qr;
          if ((0, jr.e)()) return;
          (0, Nr.b)(!0 === (null === (Sr = (0, ir.l)()) || void 0 === Sr || null === (Qr = Sr.currentViewer) || void 0 === Qr ? void 0 : Qr.unsavedChanges), rr)
        } else this.leaveLive()
      }
      leaveLive() {
        var rr;
        Cx && (null === (rr = Gp()) || void 0 === rr || rr.endGamePack());
        if (!Vx) return;
        Vx = !1, (0, Mr.h)();
        try {
          var Sr;
          null === (Sr = (0, cr.l)()) || void 0 === Sr || Sr.clearWasmCameraScreen()
        } catch (Zr) {
          console.error("[bloxd-wasm-client] the camera screen didn't clear", Zr)
        }
        const {
          gameNameWithVariation: Qr
        } = (0, mr.b)();
        try {
          wE()
        } finally {
          (0, mr.m)({
            websocketUrl: null
          }), fr.i.Jp("leaveGame", {
            gameNameWithVariation: Qr
          }), (0, pr.G)()
        }
      }
      isReplay() {
        return (0, ir.d)()
      }
    }
  },
  42796: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => Wr,
      i: () => Zr,
      m: () => Ir,
      o: () => jr
    });
    const Zr = 12e4,
      Wr = 3e4,
      ar = {
        hidden: () => "undefined" !== typeof document && document.hidden,
        listen: rr => "undefined" === typeof document ? () => {} : (document.addEventListener("visibilitychange", rr), () => {
          document.removeEventListener("visibilitychange", rr)
        })
      };

    function jr(rr) {
      return `it sent no start within ${Math.round(rr)} ms`
    }
    class Ir {
      constructor(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now(),
          Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ar;
        this.timeoutMs = rr, this.onTimeout = Sr, this.now = Qr, this.visibility = Zr, this.timer = null, this.counted = 0, this.step = null, this.unlisten = void 0, this.unlisten = Zr.listen((() => {
          this.onVisibility()
        })), Zr.hidden() || this.next()
      }
      cancel() {
        this.pause(), this.unlisten()
      }
      onVisibility() {
        this.visibility.hidden() ? (this.counted += this.credit(), this.pause()) : null === this.timer && this.next()
      }
      credit() {
        const rr = this.step;
        return null === rr ? 0 : Math.min(this.now() - rr.at, rr.ms)
      }
      pause() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null), this.step = null
      }
      next() {
        const rr = this.timeoutMs - this.counted;
        if (rr <= 0) return void this.arm(1e3, (() => {
          this.cancel(), this.onTimeout(this.counted)
        }));
        const Sr = Math.min(rr, 5e3);
        this.step = {
          at: this.now(),
          ms: Sr
        }, this.arm(Sr, (() => {
          this.counted += this.credit(), this.step = null, this.next()
        }))
      }
      arm(rr, Sr) {
        this.timer = setTimeout((() => {
          this.timer = null, Sr()
        }), rr)
      }
    }
  },
  41338: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Ir
    });
    var Zr = Qr(379),
      Wr = Qr(1127);
    const ar = new Set(["bingo", "buildAFactory2", "classic", "greenville", "testGym"]),
      jr = new Set(["creativeFlat", "skyGrid"]);

    function Ir(rr) {
      const Sr = (0, Zr.Mb)(rr);
      return "greenville" === Sr ? !(0, Zr.Hb)(rr) : "classic" !== Sr ? ar.has(Sr) : !(0, Wr.l)(rr) && !jr.has((0, Zr.Hb)(rr))
    }
  },
  39242: (rr, Sr, Qr) => {
    function Zr(rr) {
      return "string" !== typeof rr || 2 !== rr.length && ":" !== rr[2] ? null : rr[0] + rr[1]
    }
    Qr.d(Sr, {
      B: () => tr,
      d: () => hr,
      g: () => yr,
      j: () => Kr,
      l: () => Br,
      o: () => Ir,
      q: () => jr,
      s: () => ar,
      u: () => fr,
      y: () => zr
    });
    const Wr = ["op:ytInitialPlayerResponse.adPlacements", "op:ytInitialPlayerResponse.playerAds", "op:ytInitialPlayerResponse.adSlots", "op:playerResponse.adPlacements", "op:playerResponse.playerAds", "op:playerResponse.adSlots"];

    function ar(rr) {
      if (function(rr) {
          for (let Sr = 0; Sr < Wr.length; Sr++)
            if (rr === Wr[Sr]) return !0;
          return !1
        }(rr)) return !1;
      const Sr = Zr(rr);
      return "op" === Sr || "ep" === Sr || "wi" === Sr || "pp" === Sr || "fp:call" === rr || "fp:t" === rr
    }

    function jr(rr) {
      return "fp" === Zr(rr) && !ar(rr)
    }

    function Ir(rr) {
      if ("string" !== typeof rr) return !1;
      return "o" === rr[0] && "p" === rr[1] && (2 === rr.length || ":" === rr[2]) || "fp:call" === rr || "2" === rr || "t" === rr || "a" === rr
    }

    function fr(rr, Sr) {
      return `~${function(rr){return rr.length<2?rr:":"===rr[1]?rr[0]:rr[0]+rr[1]}(Sr)}~${rr}`
    }
    const Er = 200;

    function pr(rr) {
      let Sr = rr.length - 1;
      for (let Qr = 0; Qr < 2; Qr++) {
        const Qr = Sr;
        for (; Sr >= 0 && rr[Sr] >= "0" && rr[Sr] <= "9";) Sr--;
        if (Sr < 0 || Sr === Qr || ":" !== rr[Sr]) return -1;
        Sr--
      }
      return Sr + 1
    }

    function xr(rr) {
      return "unknown" === rr || pr(rr) >= 0
    }

    function mr(rr, Sr) {
      return rr[Sr] >= "\ud800" && rr[Sr] <= "\udbff" && Sr + 1 < rr.length && rr[Sr + 1] >= "\udc00" && rr[Sr + 1] <= "\udfff" ? 2 : 1
    }

    function Nr(rr, Sr, Qr) {
      return 2 === Qr ? 4 : rr[Sr] <= "\x7f" ? 1 : rr[Sr] <= "\u07ff" ? 2 : 3
    }

    function Ur(rr, Sr, Qr) {
      let Zr = 0;
      for (; Zr < Sr;) {
        const Sr = mr(rr, Zr),
          Wr = Nr(rr, Zr, Sr);
        if (Wr > Qr) break;
        Qr -= Wr, Zr += Sr
      }
      return Zr
    }

    function tr(rr) {
      let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1 / 0;
      if ("string" !== typeof rr || rr.length > Er || !xr(rr)) return "t";
      let Qr = 2;
      for (let Ir = 0; Ir < rr.length;) {
        const Sr = mr(rr, Ir);
        Qr += Nr(rr, Ir, Sr), Ir += Sr
      }
      if (Qr <= Sr) return `t ${rr}`;
      const Zr = pr(rr),
        Wr = Sr - 2 - (rr.length - Zr);
      if (Wr < 0) return "t";
      const ar = Ur(rr, Zr, Wr);
      let jr = "t ";
      for (let Ir = 0; Ir < ar; Ir++) jr += rr[Ir];
      for (let Ir = Zr; Ir < rr.length; Ir++) jr += rr[Ir];
      return jr
    }
    const hr = 62;

    function zr(rr) {
      let Sr = "so:";
      const Qr = Ur(rr, rr.length, hr - Sr.length);
      for (let Zr = 0; Zr < Qr; Zr++) Sr += rr[Zr];
      return Sr
    }
    const Yr = "BABYLON ",
      nr = "DECODE ",
      er = "BABYLON@ ";

    function Kr(rr) {
      return zr(Yr + rr)
    }

    function yr(rr, Sr) {
      return zr(er + rr + " " + Sr)
    }

    function Br(rr) {
      return zr(nr + rr)
    }
  },
  42741: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Zr
    });
    const Zr = {
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
  40304: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => ar
    });
    var Zr = Qr(2396);
    const Wr = ["none", "idle", "now"];

    function ar() {
      const rr = () => (0, Zr.z)();
      return {
        memoryBytes: () => (0, Zr.s)().buffer.byteLength,
        reserveUpFront: Sr => rr().gx(Sr),
        reserveAhead: Sr => rr().Rx(Sr),
        setCeiling: Sr => {
          rr().Cx(Sr)
        },
        lowWater: () => Wr[rr().tx()] ?? "none",
        stats: () => function(rr) {
          const Sr = new Uint32Array((0, Zr.s)().buffer, rr, 17),
            Qr = rr => Sr[rr] ?? 0,
            Wr = rr => ({
              upFront: Qr(rr),
              ahead: Qr(rr + 1),
              onDemandInFrame: Qr(rr + 2),
              onDemand: Qr(rr + 3)
            });
          return {
            memoryBytes: Qr(0),
            initialBytes: Qr(1),
            liveBytes: Qr(2),
            peakLiveBytes: Qr(3),
            headroomBytes: Qr(4),
            unusedBytes: Qr(5),
            ceilingBytes: Qr(6),
            reservesRefused: Qr(7),
            grows: Wr(8),
            grownBytes: Wr(12),
            allocationsRefused: Qr(16)
          }
        }(rr().Mx()),
        takeBallast: () => rr().Gx(),
        takePressure: () => rr().kx()
      }
    }
  },
  6007: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => Ir,
      g: () => jr,
      j: () => Zr,
      k: () => tr,
      n: () => xr,
      r: () => Wr,
      s: () => ar,
      v: () => Er,
      w: () => pr,
      z: () => mr
    });
    const Zr = 5;

    function Wr(rr) {
      return rr === Zr
    }

    function ar(rr) {
      return [...rr.features]
    }
    const jr = 262144,
      Ir = 256,
      fr = 256;

    function Er(rr) {
      if ("object" !== typeof rr || null === rr || Array.isArray(rr)) return "The pack has no files.";
      const Sr = [];
      for (const [Qr, Zr] of Object.entries(rr)) {
        if ("string" !== typeof Zr) return `${Qr} isn't text.`;
        Sr.push({
          path: Qr,
          source: Zr
        })
      }
      return Sr.sort(((rr, Sr) => xr(rr.path, Sr.path))),
        function(rr) {
          if (0 === rr.length) return "The pack has no .wgsl files.";
          if (rr.length > Ir) return `The pack has more than ${Ir} .wgsl files.`;
          const Sr = new Set;
          for (const {
              path: Qr
            }
            of rr) {
            const rr = Nr(Qr);
            if (null !== rr) return rr;
            if (Sr.has(Qr)) return `The pack has two files at ${Qr}.`;
            Sr.add(Qr)
          }
          return mr(rr) > jr ? `The pack's .wgsl files are over ${jr/1024} KB in total.` : null
        }(Sr) ?? Sr
    }

    function pr(rr) {
      const Sr = {};
      for (const Qr of rr) Sr[Qr.path] = Qr.source;
      return Sr
    }

    function xr(rr, Sr) {
      return rr < Sr ? -1 : rr > Sr ? 1 : 0
    }

    function mr(rr) {
      const Sr = new TextEncoder;
      let Qr = 0;
      for (const {
          source: Zr
        }
        of rr) Qr += Sr.encode(Zr).byteLength;
      return Qr
    }

    function Nr(rr) {
      if (!rr.toLowerCase().endsWith(".wgsl")) return `${rr} isn't a .wgsl file.`;
      if (rr.length > fr) return `A file path is over ${fr} characters.`;
      if (rr.includes("\\") || /[\u0000-\u001f]/.test(rr)) return `${rr} isn't a valid file path.`;
      return rr.split("/").some((rr => "" === rr || "." === rr || ".." === rr)) ? `${rr} isn't a valid file path.` : null
    }
    const Ur = /^(.*)\[rot\[([1-4])$/;

    function tr(rr, Sr) {
      let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const Zr = new Map;
      Sr.forEach(((rr, Sr) => {
        let {
          numAnimStates: Qr,
          animStartIdx: Wr
        } = rr;
        for (let ar = 1; ar < Qr; ar++) Zr.set(Wr + ar - 1, Sr)
      }));
      const Wr = Object.entries(rr),
        ar = new Map;
      for (const [tr, hr] of Wr) {
        const rr = Ur.exec(tr);
        "1" === rr?.[2] && ar.set(rr[1], hr + 1)
      }
      const jr = rr => {
          const Sr = Ur.exec(rr);
          return Sr && ar.has(Sr[1]) ? {
            root: Sr[1],
            rotation: Number(Sr[2]) - 1
          } : null
        },
        Ir = new Set(Wr.map((rr => {
          let [Sr] = rr;
          return jr(Sr)?.root ?? Sr
        }))),
        fr = (rr, Qr) => {
          const Zr = rr.replace(/_?0$/, "");
          return (Sr[Qr]?.numAnimStates ?? 0) > 1 && !Ir.has(Zr) ? Zr : rr
        },
        Er = new Map;
      for (const [Ur, tr] of Wr) Er.set(tr, fr(jr(Ur)?.root ?? Ur, tr));
      const pr = Wr.reduce(((rr, Sr) => {
          let [, Qr] = Sr;
          return Math.max(rr, Qr + 1)
        }), 0),
        xr = Array.from({
          length: pr
        }, ((rr, Sr) => ({
          id: Sr + 1,
          rotation: 0
        }))),
        mr = new Map,
        Nr = new Map;
      for (const [Ur, tr] of Wr) {
        const rr = jr(Ur),
          Sr = Zr.get(tr);
        if (void 0 !== Sr) {
          const Qr = Er.get(Sr);
          Nr.set(Ur, {
            name: Ur,
            texture: Qr,
            kind: "frame"
          }), rr && !Nr.has(rr.root) && Nr.set(rr.root, {
            name: rr.root,
            texture: Qr,
            kind: "frame"
          });
          continue
        }
        const Qr = Er.get(tr),
          Wr = rr?.root ?? Ur;
        if (Qr !== Wr && Nr.set(Wr, {
            name: Wr,
            texture: Qr,
            kind: "frame"
          }), rr) {
          const Sr = ar.get(rr.root);
          xr[tr] = {
            id: Sr,
            rotation: rr.rotation
          }, mr.set(Qr, Sr), Nr.set(Ur, {
            name: Ur,
            texture: Qr,
            kind: "rotation"
          })
        } else mr.set(Qr, tr + 1)
      }
      for (const Ur of mr.keys()) Nr.delete(Ur);
      for (const [Ur, tr] of Qr) {
        const rr = mr.get(tr);
        void 0 === rr || mr.has(Ur) || (mr.set(Ur, rr), Nr.delete(Ur))
      }
      return {
        named: [...mr].sort(((rr, Sr) => {
          let [Qr] = rr, [Zr] = Sr;
          return Qr < Zr ? -1 : Qr > Zr ? 1 : 0
        })).map((rr => {
          let [Sr, Qr] = rr;
          return {
            name: Sr,
            id: Qr
          }
        })),
        aliases: [...Nr.values()],
        layers: xr
      }
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);