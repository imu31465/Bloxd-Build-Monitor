export const id = 155;
export const ids = [155];
export const modules = {
  38719: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => ak,
      e: () => Xk
    });
    var Rk = Bk(29);
    let tk = !1;

    function ak() {
      return tk
    }

    function Xk(kk) {
      tk !== kk && (tk = kk, Rk.o.Hf("replayViewer|videoExportChanged"))
    }
  },
  38617: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => ak
    });
    var Rk = Bk(29),
      tk = Bk(1863);

    function ak(kk) {
      let {
        taskId: Fk,
        progress: Bk
      } = kk;
      const Rk = tk.b.get("_tasks");
      null !== Rk && void 0 !== Rk && Rk[Fk] && tk.b.apply({
        _tasks: {
          ...Rk,
          [Fk]: {
            ...Rk[Fk],
            progress: Bk
          }
        }
      })
    }
    Rk.o.subscribe("clientTaskProgress", (kk => {
      ak(kk)
    }))
  },
  38731: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => yk,
      f: () => fk,
      i: () => ek
    });
    var Rk = Bk(2711);
    const tk = 0,
      ak = 2,
      Xk = 3,
      bk = 4;
    class wk {
      constructor(kk, Fk) {
        this.width = kk, this.KV = Fk, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(kk * Fk)
      }
      push(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const Bk = this.data.subarray(this.next * this.width, (this.next + 1) * this.width);
        for (let Rk = 0; Rk < this.width; Rk++) Bk[Rk] = kk[Fk + Rk];
        return this.next = (this.next + 1) % this.KV, this.size = Math.min(this.size + 1, this.KV), Bk
      }
      lines() {
        const kk = [],
          Fk = (this.next - this.size + this.KV) % this.KV;
        for (let Bk = 0; Bk < this.size; Bk++) {
          const Rk = (Fk + Bk) % this.KV * this.width;
          kk.push(Array.from(this.data.subarray(Rk, Rk + this.width)).join(","))
        }
        return kk
      }
    }

    function dk(kk) {
      return Number.isFinite(kk) ? String(Math.round(10 * kk) / 10) : String(kk)
    }

    function sk(kk) {
      return Number.isFinite(kk) ? kk.toFixed(1) : String(kk)
    }
    class Vk {
      constructor() {
        this.frames = 0, this.looked = 0, this.idle = 0, this.dD = 0, this.pastLimit = 0, this.lockSkips = 0, this.ws = 0, this.lost = 0, this.dropped = 0, this.longFrames = 0, this.dtMin = 1 / 0, this.dtMax = 0, this.dtSum = 0, this.raw = [0, 0], this.turned = [0, 0], this.peakRate = 0, this.events = 0, this.eventMax = 0, this.bigEvents = 0, this.outliers = 0, this.eventLines = 0, this.suppressed = 0
      }
    }
    class Jk {
      constructor() {
        var kk = this;
        this.tally = new Vk, this.records = new wk(10, 3600), this.events = new wk(4, 12e3), this.event = new Float64Array(4), this.take = null, this.client = "js", this.started = !1, this.record = function(Fk) {
          let Bk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          const [Rk, wk, Vk, Jk, Ak, ek, yk, fk, mk, Wk] = kk.records.push(Fk, Bk), vk = kk.tally;
          switch (vk.frames++, yk) {
            case tk:
              return void vk.idle++;
            case bk:
              return void vk.ws++;
            case Xk:
              return vk.lockSkips++, void(0 === Vk && 0 === Jk || kk.outlier(`lock skip dropped raw (${dk(Vk)}, ${dk(Jk)}) at ${sk(Rk)} ms`))
          }
          vk.looked++, Number.isFinite(wk) && (vk.dtMin = Math.min(vk.dtMin, wk), vk.dtMax = Math.max(vk.dtMax, wk), vk.dtSum += wk, wk > 0 && (vk.peakRate = Math.max(vk.peakRate, Math.hypot(Ak, ek) / wk))), vk.raw[0] += Vk, vk.raw[1] += Jk, vk.turned[0] += Ak, vk.turned[1] += ek;
          const ik = Math.abs(Vk) > Wk || Math.abs(Jk) > Wk,
            Yk = `raw (${dk(Vk)}, ${dk(Jk)}) over ${sk(wk)} ms, limit ${dk(Wk)}, filter v (${fk.toFixed(3)}, ${mk.toFixed(3)}) px/ms, at ${sk(Rk)} ms`;
          yk === ak ? (vk.dD++, kk.outlier(`spike put right: ${Yk} -> turned (${dk(Ak)}, ${dk(ek)})`)) : ik ? (vk.pastLimit++, kk.outlier(`kept past limit: ${Yk}`)) : wk > 50 && (vk.longFrames++, kk.outlier(`long frame: ${Yk}, turned in full`))
        }, this.onMouseMove = kk => {
          const Fk = this.tally,
            {
              movementX: Bk,
              movementY: Rk
            } = kk;
          Fk.events++;
          const tk = Math.max(Math.abs(Bk), Math.abs(Rk));
          Fk.eventMax = Math.max(Fk.eventMax, tk);
          const ak = null !== document.pointerLockElement,
            Xk = this.event;
          Xk[0] = kk.timeStamp, Xk[1] = Bk, Xk[2] = Rk, Xk[3] = ak ? 1 : 0, this.events.push(Xk), tk >= 200 && (Fk.bigEvents++, this.eventOutlier(`big mousemove (${Bk}, ${Rk}) at ${sk(kk.timeStamp)} ms, lock ${ak?"Hb":"free"}`))
        }, this.onLockChange = () => {
          const kk = document.pointerLockElement;
          (0, Rk.k)("look", `pointer lock ${kk?`gained (${kk.tagName.toLowerCase()})`:"lost"} at ${sk(performance.now())} ms`)
        }, this.onLockError = () => {
          (0, Rk.k)("look", `pointer lock request failed at ${sk(performance.now())} ms`)
        }, this.onVisibility = () => {
          (0, Rk.k)("look", `page ${document.visibilityState} at ${sk(performance.now())} ms`)
        }, this.flush = () => {
          this.takeRecords();
          const kk = this.tally;
          if (this.tally = new Vk, 0 === kk.events && 0 === kk.raw[0] && 0 === kk.raw[1] && 0 === kk.lockSkips && 0 === kk.dD && 0 === kk.dropped) return;
          const Fk = kk.looked > 0 ? kk.dtSum / kk.looked : NaN,
            Bk = [`${kk.frames} frames (${kk.looked} looked, ${kk.idle} idle${"wasm"===this.client?`, ${kk.ws} carried`:""})`, `dt avg ${sk(Fk)} min ${sk(kk.dtMin)} max ${sk(kk.dtMax)}, ${kk.longFrames} long`, `${kk.events} mousemoves (max ${dk(kk.eventMax)} px, ${kk.bigEvents} big)`, `raw (${dk(kk.raw[0])}, ${dk(kk.raw[1])}) turned (${dk(kk.turned[0])}, ${dk(kk.turned[1])})`, `peak ${kk.peakRate.toFixed(2)} px/ms`, `put right ${kk.dD}, past limit ${kk.pastLimit}, lock skips ${kk.lockSkips}`, "lock " + (document.pointerLockElement ? "Hb" : "free")];
          kk.dropped > 0 && Bk.push(`${kk.dropped} doubled spike copies dropped`), kk.lost > 0 && Bk.push(`${kk.lost} records lost`), kk.suppressed > 0 && Bk.push(`${kk.suppressed} outlier lines not shown`), (0, Rk.k)("look", `1s: ${Bk.join("; ")}`)
        }, this.dump = () => [`look records (${this.client}): nowMs,dtMs,rawX,rawY,turnedX,turnedY,outcome,vX,vY,limit`, ...this.records.lines(), "mousemove events: timeStamp,movementX,movementY,locked", ...this.events.lines()].join("\n")
      }
      start(kk, Fk) {
        this.client = kk, this.take = Fk;
        const {
          screen: Bk
        } = window;
        (0, Rk.k)("look", `start: ${kk} client, dpr ${window.devicePixelRatio}, screen ${Bk.width}x${Bk.height}, pointer lock ${document.pointerLockElement?"Hb":"free"}`), this.started || (this.started = !0, window.addEventListener("mousemove", this.onMouseMove, {
          capture: !0,
          passive: !0
        }), document.addEventListener("pointerlockchange", this.onLockChange), document.addEventListener("pointerlockerror", this.onLockError), document.addEventListener("visibilitychange", this.onVisibility), setInterval(this.flush, 1e3), (0, Rk.i)("look", this.dump))
      }
      outlier(kk) {
        const Fk = this.tally;
        Fk.outliers >= 20 ? Fk.suppressed++ : (Fk.outliers++, (0, Rk.k)("look", kk))
      }
      eventOutlier(kk) {
        const Fk = this.tally;
        Fk.eventLines >= 10 ? Fk.suppressed++ : (Fk.eventLines++, (0, Rk.k)("look", kk))
      }
      takeRecords() {
        var kk;
        const Fk = null === (kk = this.take) || void 0 === kk ? void 0 : kk.call(this);
        if (Fk && Fk.length >= 2) {
          this.tally.lost += Fk[0], this.tally.dropped += Fk[1];
          for (let kk = 2; kk + 10 <= Fk.length; kk += 10) this.record(Fk, kk)
        }
      }
      droppedCopy() {
        this.tally.dropped++
      }
      endTake() {
        this.takeRecords(), this.take = null
      }
    }
    let Ak = null;

    function ek(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return Ak ??= new Jk, Ak.start(kk, Fk), Ak.record
    }

    function yk() {
      var kk;
      null === (kk = Ak) || void 0 === kk || kk.endTake()
    }

    function fk() {
      var kk;
      null === (kk = Ak) || void 0 === kk || kk.droppedCopy()
    }
  },
  38608: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => CF,
      i: () => hF,
      m: () => qF
    });
    var Rk = Bk(3478),
      tk = Bk(152),
      ak = Bk(182),
      Xk = Bk(608),
      bk = Bk(42),
      wk = Bk(2626),
      dk = Bk(3546),
      sk = Bk(3528),
      Vk = Bk(1173);
    const Jk = new WeakMap;
    class Ak {
      constructor(kk, Fk) {
        let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
          fdk: !0
        };
        this.callbacks = Fk, this.options = Bk, this.RBk = void 0, this.sessionId = void 0, this.tL = [], this.mdk = !1, this.Te = !1, this.Wdk = void 0, this.RL = 0, this.Rtk = 0, this.vdk = (kk, Fk) => {
          if (this.Te) return;
          const Bk = Number(kk);
          this.mdk ? this.Ydk(Bk, Fk) : this.tL.push({
            id: Bk,
            payload: Fk
          })
        }, this.dispose = () => {
          this.Te || (this.Te = !0, Jk.delete(this), this.tL.length = 0, this.Wdk())
        }, this.RBk = kk, this.sessionId = kk.sessionId, Jk.set(this, []), this.Wdk = this.odk()
      }
      Ldk(kk) {
        this.Wdk(), this.RBk = kk, this.sessionId = kk.sessionId, this.RL = 0, this.Rtk = 0, this.Wdk = this.odk()
      }
      get pY() {
        return this.Rtk
      }
      odk() {
        const kk = this.RBk.zW("*", this.vdk);
        return this.options.fdk && this.RBk.pW(this.dispose), kk
      }
      Ydk(kk, Fk) {
        try {
          (0, dk.vc)(kk) && (Fk = (0, dk.c)(kk, sk.Ge.from(Fk)));
          const Bk = Jk.get(this)[kk];
          if ("function" !== typeof Bk) {
            if (this.callbacks.Odk) return void this.callbacks.Odk(kk, Fk);
            throw new Error(`No onMessage handler registered for message id ${kk}`)
          }
          Bk(Fk)
        } catch (Bk) {
          this.callbacks.Edk(`Error in onMessage ${kk} with payload ${JSON.stringify(Fk)}`, Bk)
        } finally {
          this.RL++
        }
      }
      Ndk() {
        for (const {
            id: kk,
            payload: Fk
          }
          of this.tL) {
          if (this.Te) break;
          this.Ydk(kk, Fk)
        }
        this.tL.length = 0
      }
      BBk() {
        return this.Te
      }
      Hdk() {
        if (this.mdk || this.Te) throw new Error("Trying to getOnMessageRegistrationHandler after registration finished");
        return {
          zW: (kk, Fk) => {
            if (this.mdk || this.Te) throw new Error("Trying to call onMessage after registration finished");
            this.zW(kk, Fk)
          },
          finishRegistration: () => {
            if (this.Te) throw new Error("Cannot finish message registration after disposal");
            this.mdk = !0, this.Ndk()
          }
        }
      }
      zW(kk, Fk) {
        var Bk, Rk;
        null === (Bk = (Rk = this.callbacks).udk) || void 0 === Bk || Bk.call(Rk);
        const tk = Jk.get(this);
        for (; kk > tk.length;) tk[tk.length] = null;
        tk[kk] = Fk
      }
      send(kk, Fk) {
        this.Mdk(), (0, Vk.E)(Fk) ? this.RBk.uL(kk, Fk) : this.RBk.send(kk, Fk)
      }
      Mdk() {
        var kk, Fk;
        (this.Rtk++, 5 === ek++) && (null === (kk = (Fk = this.callbacks).udk) || void 0 === kk || kk.call(Fk), ek = 0)
      }
      qm() {
        this.dispose(), this.RBk.qm()
      }
      leave() {
        this.dispose(), this.RBk.leave()
      }
    }
    let ek = 0;
    var yk = Bk(3487);
    class fk extends Ak {
      constructor(kk) {
        super(kk, {
          udk: () => {
            (0, bk.m)(!0) && (0, Rk.ZY)()
          },
          Edk: (kk, Fk) => {
            var Bk;
            null === (Bk = (0, wk.d)()) || void 0 === Bk || Bk.xy(kk, Fk)
          }
        }, {
          fdk: !1
        }), (0, yk.d)(kk)
      }
      wL(kk, Fk) {
        return !!(0, yk.h)((0, yk.b)(), this.RBk, kk, Fk) && (this.Mdk(), !0)
      }
      Ldk(kk) {
        this.gdk(), super.Ldk(kk), (0, yk.d)(kk)
      }
      qm() {
        super.qm(), this.gdk()
      }
      gdk() {
        this.RBk.Zm.Le.kS = void 0
      }
    }
    var mk = Bk(29),
      Wk = Bk(1863),
      vk = Bk(1650),
      ik = Bk(36194);

    function Yk(kk, Fk, Bk, Rk, tk) {
      let ak = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (!kk.Tv.BFk(kk.DH)) return console.log("Got resync inven but don't have inven component"), void Fk.acknowledge(Rk);
      ak && console.error("Had to sync inven"), Fk.Z2(Rk, tk) && Bk.Hf("chestToggleFromServer", !1, !0), Bk.Hf("syncedInvenFromServer")
    }
    var Lk = Bk(38617),
      Ok = Bk(38624),
      Ek = Bk(37714),
      Sk = Bk(37497),
      Nk = Bk(606),
      Hk = Bk(38055);

    function uk(kk, Fk, Bk) {
      const Rk = function(kk) {
          const Fk = new Int32Array(kk.length * Hk.h);
          return kk.forEach(((kk, Bk) => {
            const Rk = Bk * Hk.h;
            if (4 === kk.length) {
              const [Bk, tk, ak, Xk] = kk;
              Fk.set([Bk, tk, ak, Bk, tk, ak, Xk], Rk)
            } else {
              const [Bk, tk, ak, Xk, bk, wk, dk] = kk;
              Fk.set([Bk, ak, bk, tk, Xk, wk, dk], Rk)
            }
          })), Fk
        }(Bk),
        tk = (Fk, Bk, Rk, tk) => {
          kk.setBlockNoMulti(Fk, Bk, Rk, tk, !0)
        };
      kk.client.gameRecorder.isCapturing() ? (0, Hk.lb)(Rk, (0, Hk.ib)(Rk), tk) : kk.SJ.iJ.lT(Rk, {
        Kr: tk,
        isHookId: Fk => kk.blockChangeHasHooks(Fk),
        watched: () => function(kk, Fk, Bk) {
          const Rk = [],
            tk = (kk, Fk, Bk) => {
              Rk.push(kk, Fk, Bk)
            },
            ak = new Set;
          for (let Xk = 0; Xk < Bk.length; Xk += Hk.h)
            for (let Fk = (0, Nk.P)(Bk[Xk]); Fk <= (0, Nk.P)(Bk[Xk + 3]); Fk++)
              for (let Rk = (0, Nk.P)(Bk[Xk + 1]); Rk <= (0, Nk.P)(Bk[Xk + 4]); Rk++)
                for (let bk = (0, Nk.P)(Bk[Xk + 2]); bk <= (0, Nk.P)(Bk[Xk + 5]); bk++) {
                  const Bk = `${Fk}|${Rk}|${bk}`;
                  ak.has(Bk) || (ak.add(Bk), kk.blockDataOwner.forEachDataCell(Fk, Rk, bk, tk))
                }
          return Fk.forEachCell(tk), Int32Array.from(Rk)
        }(kk, Fk, Rk)
      }), kk.SJ.Xkk()
    }
    var Mk = Bk(36810),
      gk = Bk(38631),
      Uk = Bk(38640),
      ck = Bk(994),
      Gk = Bk(1870);
    var Tk = Bk(4249);

    function rk(kk) {
      const Fk = kk.iJ;
      let Bk = 0,
        tk = -1,
        Xk = -1 / 0,
        bk = null,
        wk = !0;
      const sk = () => {
        if (++Bk % 10 !== 0) return;
        const sk = (0, Rk.getLastReceivedPacketId)();
        if (sk <= tk) return;
        const [Vk, Jk, Ak] = kk.Tv.rW(kk.DH), ek = ! function(kk) {
          var Fk;
          let Bk = null === (Fk = kk.Tv.DFk(kk.DH)) || void 0 === Fk ? void 0 : Fk.Ne;
          if (void 0 === Bk) return !1;
          const Rk = new Set;
          for (; void 0 !== Bk && !Rk.has(Bk);) {
            var tk;
            Rk.add(Bk);
            const Fk = kk.Tv.getState(Bk, "smoothToServerPos"),
              ak = Array.isArray(Fk) ? null : null === Fk || void 0 === Fk ? void 0 : Fk.serverPosition;
            if (ak) {
              const Fk = kk.Tv.rW(Bk);
              if (Math.abs(Fk[0] - ak[0]) > 10 || Math.abs(Fk[1] - ak[1]) > 10 || Math.abs(Fk[2] - ak[2]) > 10) return !0
            }
            Bk = null === (tk = kk.Tv.DFk(Bk)) || void 0 === tk ? void 0 : tk.Ne
          }
          return !1
        }(kk) && function(kk, Fk, Bk, Rk) {
          const tk = ak.h.Ze;
          for (let ak = 0; ak < kk.length; ak++) {
            const Xk = kk[ak];
            if (!(0, Tk.h)(Fk, Bk, Rk, Xk[0] * tk, Xk[1] * tk, Xk[2] * tk)) return !1
          }
          return !0
        }(Fk.Nf.De, Vk, Jk, Ak), yk = null === bk || Math.abs(Vk - bk[0]) > 8 || Math.abs(Jk - bk[1]) > 8 || Math.abs(Ak - bk[2]) > 8, fk = !wk || yk || performance.now() - Xk >= 1e4;
        wk = ek, ek && fk && (tk = sk, Xk = performance.now(), bk = [Vk, Jk, Ak], (0, Rk.sendColyMessage)(dk.Wg, {
          Nd: sk
        }))
      };
      return kk.on("yJ", sk), () => {
        kk.off("yJ", sk)
      }
    }
    var Dk = Bk(36451),
      zk = Bk(302),
      Pk = Bk.n(zk),
      hk = Bk(6167),
      qk = Bk(37735),
      Ck = Bk(37484),
      Zk = Bk(37451),
      pk = Bk(4258),
      Kk = Bk(37763),
      xk = Bk(37592),
      jk = Bk(37040),
      lk = Bk(37345),
      nk = Bk(38642),
      Ik = Bk(36442),
      Qk = Bk(36445),
      kF = Bk(38649),
      FF = Bk(38651),
      BF = Bk(3449),
      RF = Bk(1459),
      tF = Bk(2618),
      aF = Bk(2728),
      XF = Bk(37901),
      bF = Bk(36737),
      wF = Bk(4507),
      dF = Bk(38685),
      sF = Bk(37751),
      VF = Bk(3980),
      JF = Bk(36805),
      AF = Bk(36881),
      eF = Bk(37766),
      yF = Bk(38660),
      fF = Bk(38670),
      mF = Bk(37034);
    class WF {
      constructor(kk, Fk, Bk, Rk) {
        this.gameNameWithVariation = kk, this.SJ = Bk, this.connectionResume = Rk, this.stateReplicationHandler = void 0, this.stopChunkReports = () => {}, this.replayResume = null, this.stateReplicationHandler = new fF.b(Fk, this.SJ)
      }
      setupStateReplicationHandlers() {
        this.stateReplicationHandler.setup(), (0, Rk.onGameResetOnce)((() => {
          this.stateReplicationHandler.dispose()
        }))
      }
      Ldk(kk) {
        this.stateReplicationHandler.dispose(), this.stateReplicationHandler = new fF.b(kk, this.SJ), this.stateReplicationHandler.setup()
      }
      clearBlockRules() {
        const kk = this.SJ.iJ;
        kk.KFk = new Set, kk.lFk = new Set, kk.xFk = new Set, kk.nFk = new Set, kk.jFk = [], kk.IFk = [], kk.hG = new Set, kk.Da = [], kk.pG = []
      }
      clearUiRequestsAndQTEs() {
        wF.b.reset(), (0, Ok.d)()
      }
      startChunkReports() {
        const kk = function(kk) {
            let Fk = null,
              Bk = -1 / 0,
              tk = null;
            const ak = () => {
                tk = null;
                const ak = Math.ceil(kk.LO[0]),
                  Xk = Math.ceil(kk.LO[1]);
                Fk && Fk[0] === ak && Fk[1] === Xk || (Fk = [ak, Xk], Bk = performance.now(), (0, Rk.sendColyMessage)(dk.Vg, {
                  bX: ak,
                  wX: Xk
                }))
              },
              Xk = () => {
                null === tk && (tk = setTimeout(ak, Math.max(0, Bk + 250 - performance.now())))
              };
            return ak(), kk.on("addRemoveDistanceChanged", Xk), () => {
              kk.off("addRemoveDistanceChanged", Xk), null !== tk && (clearTimeout(tk), tk = null)
            }
          }(this.SJ.iJ),
          Fk = rk(this.SJ);
        this.stopChunkReports = () => {
          kk(), Fk()
        }
      }
      restartChunkStreaming() {
        (0, lk.i)(this.SJ, (0, wk.b)().recentChunkEdits.chunksEditedSince(this.connectionResume.getDroppedAt() - nk.d)), this.startChunkReports()
      }
      setupOnMessageListeners(kk, Fk) {
        const Bk = this.SJ,
          tk = this.gameNameWithVariation;
        kk.zW(dk.Gc, (kk => {
          let {
            lB: Fk,
            nB: Rk,
            IB: tk,
            QB: ak,
            kR: Xk,
            FR: bk,
            BR: wk,
            RR: dk,
            tR: sk
          } = kk;
          if (!Bk.Tv.fkk(Fk, "itemState")) return void(0, Ck.l)(Bk, Fk, [Xk, bk, wk], Rk, {
            amount: tk,
            attributes: JSON.parse(ak),
            RR: dk,
            size: sk
          });
          const Vk = Bk.Tv.getState(Fk, "itemState");
          Vk.amount = tk, Vk.RR = dk, Vk.creationTime = Date.now(), (0, Zk.setServerPosition)(Bk.Tv.getState(Fk, "smoothToServerPos"), Xk, bk, wk)
        })), kk.zW(dk.pb, (kk => {
          (0, Mk.e)(Bk).setCantPickUp(kk, !0), Bk.Tv.fkk(kk, "itemState") && (Bk.Tv.getState(kk, "itemState").RR = !0)
        })), kk.zW(dk.ke, (kk => {
          (0, Mk.e)(Bk).setCantPickUp(kk, !1), Bk.Tv.fkk(kk, "itemState") && (Bk.Tv.getState(kk, "itemState").RR = !1)
        })), kk.zW(dk.dd, (kk => {
          Wk.b.applyNewClientOptions(kk)
        })), kk.zW(dk.gd, (kk => {
          let {
            eId: Fk,
            settings: Rk
          } = kk;
          (0, AF.g)(Fk);
          for (const Bk in Rk)(0, AF.d)(Fk, Bk, Rk[Bk]);
          if ("canSee" in Rk && Bk.Tv.fkk(Fk, "hidingMeshManager")) {
            const kk = Bk.Tv.getState(Fk, "hidingMeshManager");
            kk.canSee = (0, eF.b)("canSee", Rk.canSee), kk._forceUpdate = !0
          }
        })), kk.zW(dk.yf, (kk => {
          let {
            XB: Fk,
            bB: tk,
            wB: ak,
            dB: Xk
          } = kk;
          const bk = [tk, ak, Xk];
          Bk.Tv.setPosition(Bk.DH, bk), (0, Rk.sendColyMessage)(dk.mh, {
            hs: Fk,
            qs: pk.d
          }), mk.o.Hf("localPlayerTeleported", {
            pos: bk,
            isCorrection: !1
          })
        })), kk.zW(dk.ud, (kk => {
          let {
            Xt: Fk,
            dt: Bk,
            Vt: Rk,
            Jt: tk
          } = kk;
          this.stateReplicationHandler.setUpIfQueued(Fk);
          const ak = [Bk, Rk, tk];
          mk.o.Hf(`otherPlayerTeleported|${Fk}`, {
            pos: ak
          })
        })), kk.zW(dk.Ld, (kk => {
          let {
            Gt: Fk,
            Tt: tk,
            rt: ak,
            Dt: Xk,
            zt: bk,
            Pt: wk,
            qt: sk,
            Zt: Vk,
            Ct: Jk,
            jt: Ak
          } = kk;
          const ek = [tk, ak, Xk];
          Bk.Tv.setPosition(Bk.DH, ek);
          const yk = Bk.Tv.ckk(Bk.DH),
            fk = Bk.Tv.nG(Bk.DH);
          Pk().set(fk.JG, 0, 0, 0), Pk().set(fk.yG, 0, 0, 0), Pk().set(fk.bs, bk, wk, sk), fk.mG(), yk._flying = null !== Ak, Ak ? (yk.flyAccel.lt = Ak.lt, yk.flyAccel.Qt = Ak.Qt) : yk.flyAccel.reset(), Vk && yk.movementType === hk.j.GLIDING && (yk.Kt = Vk.Kt, Pk().copy(yk.xt, Vk.xt)), (0, Rk.sendColyMessage)(dk.mh, {
            hs: Fk,
            qs: pk.d
          }), mk.o.Hf("localPlayerTeleported", {
            pos: ek,
            isCorrection: !0
          })
        }));

        function ak() {
          return Bk.Tv.RFk(Bk.DH)
        }
        kk.zW(dk.yb, (kk => {
          let {
            chatMsgId: Fk,
            content: Bk,
            chatterEId: Rk
          } = kk;
          mk.o.Hf("chat", {
            serverChatMsgId: Fk,
            content: Bk,
            chatterEId: Rk
          }, !0)
        })), kk.zW(dk.Ed, (kk => {
          tF.b.onReceiveColyseusPing(kk)
        })), kk.zW(dk.Ze, (kk => {
          let {
            key: Fk,
            value: Bk
          } = kk;
          (0, vk.setCookie)(tk, Fk, Bk)
        })), kk.zW(dk.ef, (kk => {
          mk.o.Hf("setDiscordReportKey", kk)
        })), (0, Rk.onGameResetOnce)((() => {
          this.stopChunkReports()
        })), kk.zW(dk.wc, (Fk => {
          const {
            PF: tk,
            hF: ak
          } = Fk;
          if ((0, Rk.setAdjustment)(ak), this.connectionResume.onInitialInfo(Fk.qF, Fk.CF), Rk.offlineInputReplay.lY(Fk.ZF), this.connectionResume.isResuming()) {
            console.log("Resumed the connection as eId", tk);
            try {
              null === Fk.pF && (0, wk.b)().client.inventoryPrediction.dropPending(), this.stopChunkReports(), this.clearBlockRules(), Wk.b.apply({
                shopInfo: null,
                _shopVersion: Gk.d
              });
              const Rk = Bk.Tv.tFk(Bk.DH);
              Rk.SB && (Rk.chestClosed(), mk.o.Hf("chestToggleFromServer", !1, !0)), this.clearUiRequestsAndQTEs(), mk.o.Hf("initInfoReceived", kk)
            } finally {
              const kk = null === Fk.pF ? null : {
                sync: null,
                endSeq: null
              };
              this.replayResume = kk, this.connectionResume.onResumeInitialInfo(Fk.pF, (() => {
                kk.endSeq = (0, wk.b)().client.inventoryPrediction.lastActionSeq
              })), null === kk && this.restartChunkStreaming()
            }
          } else console.log("Local client is eId", tk), mk.o.Hf("loadingScreenState", "loadingPage:loadingWorld"), Bk.Wkk = tk, Bk.Tv.fkk(Bk.DH, Bk.Tv.names.entityName) && Bk.Tv.mH(Bk.DH, Bk.Tv.names.entityName), (0, wk.b)().setEntityName(Bk.Wkk, (0, wk.b)().getRawEntityName(Bk.DH)), Bk.UH[Bk.Wkk] = {}, Bk.Tv.sH(Bk.DH, Bk.Tv.names.entityName), mk.o.Hf("initInfoReceived", kk), this.startChunkReports(), Xk.client.onServerConnectionFinalised()
        })), kk.zW(dk.He, (() => {
          this.connectionResume.isResuming() ? this.connectionResume.onResumed((() => {
            const kk = this.replayResume;
            if (this.replayResume = null, !kk) return;
            this.restartChunkStreaming();
            const {
              inventoryPrediction: Fk
            } = (0, wk.b)().client, {
              sync: tk
            } = kk, ak = new Set(Rk.offlineInputReplay.takeDroppedActions());
            if (tk) {
              var Xk;
              const Rk = null !== (Xk = kk.endSeq) && void 0 !== Xk ? Xk : Fk.lastActionSeq;
              Fk.forget((kk => kk > tk.UB && kk <= Rk || ak.has(kk))), Yk(Bk, Fk, mk.o, tk.UB, tk.load)
            } else Fk.dropPending(), Fk.askForSnapshot()
          })) : console.warn("ResumeComplete arrived without a resume")
        })), kk.zW(dk.Af, (kk => {
          mk.o.Hf("TopRightHelper", kk, !0)
        })), kk.zW(dk.Sd, (kk => {
          let {
            type: Fk,
            location1: Bk,
            location2: Rk,
            location3: tk,
            score: ak
          } = kk;
          (0, aF.v)({
            type: Fk,
            location1: Bk,
            location2: Rk,
            location3: tk,
            score: ak
          })
        })), kk.zW(dk.De, (kk => {
          let {
            type: Fk,
            resourceType: Bk,
            amount: Rk,
            category: tk,
            itemName: ak
          } = kk;
          (0, aF.z)({
            type: Fk,
            resourceType: Bk,
            amount: Rk,
            category: tk,
            itemName: ak
          })
        })), kk.zW(dk.ab, (kk => {
          Bk.iJ.KFk.add(kk), Bk.iJ.lFk.delete(kk)
        })), kk.zW(dk.ib, (kk => {
          Bk.iJ.lFk.add(kk), Bk.iJ.KFk.delete(kk)
        })), kk.zW(dk.me, (kk => {
          Bk.iJ.lFk.delete(kk), Bk.iJ.KFk.delete(kk)
        })), kk.zW(dk.fb, (kk => {
          Bk.iJ.xFk.add(kk), Bk.iJ.nFk.delete(kk)
        })), kk.zW(dk.nb, (kk => {
          Bk.iJ.nFk.add(kk), Bk.iJ.xFk.delete(kk)
        })), kk.zW(dk.te, (kk => {
          Bk.iJ.nFk.delete(kk), Bk.iJ.xFk.delete(kk)
        })), kk.zW(dk.cb, (kk => {
          (0, Vk.fb)(kk, Bk.iJ.IFk), (0, Vk.fb)(kk, Bk.iJ.jFk), Bk.iJ.jFk.push(kk)
        })), kk.zW(dk.mb, (kk => {
          (0, Vk.fb)(kk, Bk.iJ.jFk), (0, Vk.fb)(kk, Bk.iJ.IFk), Bk.iJ.IFk.push(kk)
        })), kk.zW(dk.pe, (kk => {
          (0, Vk.fb)(kk, Bk.iJ.jFk), (0, Vk.fb)(kk, Bk.iJ.IFk)
        })), kk.zW(dk.Xf, (kk => {
          let {
            CB: Fk,
            ZB: Rk
          } = kk;
          Rk ? Bk.iJ.hG.delete(Fk) : Bk.iJ.hG.add(Fk)
        })), kk.zW(dk.Tf, (kk => {
          let {
            Da: Fk,
            za: Rk
          } = kk;
          Xk.updateWalkThroughRect(Bk.DH, Fk, Rk)
        })), (0, Rk.onGameResetOnce)((() => {
          this.clearBlockRules()
        })), kk.zW(dk.xf, (kk => {
          (0, Lk.e)(kk)
        })), kk.zW(dk.qc, (kk => {
          Ek.b.applyServerUpdate(kk)
        })), kk.zW(dk.sb, (kk => {
          Xk.applyServerBlocks((() => {
            ! function(kk, Fk) {
              for (const {
                  Pa: Bk,
                  ha: Rk
                }
                of Fk) {
                const Fk = Sk.e[Rk];
                if (Fk) {
                  const {
                    compX: Rk,
                    compY: tk,
                    compZ: ak,
                    mainMultiblock: Xk
                  } = Fk;
                  kk.uE(Bk[0] - Rk, Bk[1] - tk, Bk[2] - ak, Xk)
                }
              }
              for (const {
                  Pa: Bk,
                  ha: Rk,
                  qa: tk
                }
                of Fk) kk.setBlockNoMulti(Bk[0], Bk[1], Bk[2], Rk, !0), kk.blockDataOwner.setBlockData(Bk[0], Bk[1], Bk[2], null === tk ? void 0 : JSON.parse(tk)), kk.blockAdded(Bk[0], Bk[1], Bk[2], Rk)
            }(Xk, kk)
          })), mk.o.Hf("changeBlockFail", kk), Xk.client.triggerGameCallback("onChangeBlockFail", kk), mk.o.Hf("EditBoard", {
            pos: null
          }), mk.o.Hf("EditCodeBlock", {
            pos: null,
            canChangePos: null
          })
        })), kk.zW(dk.Bd, (kk => {
          let {
            pickUpItems: Fk,
            pickUpAckSeq: Bk
          } = kk;
          for (const {
              name: Rk,
              amount: tk,
              attributes: Xk
            }
            of Fk) ak().pickUpItem({
            name: Rk,
            amount: tk,
            typeObj: Ck.t[Rk],
            attributes: Xk
          });
          (0, wk.b)().client.inventoryPrediction.serverChangeApplied(Bk)
        })), kk.zW(dk.hf, (kk => {
          let {
            index: Fk,
            name: Rk,
            amount: tk,
            attributes: ak,
            setSlotAckSeq: Xk
          } = kk;
          const bk = Bk.Tv.tFk(Bk.DH);
          (Fk < bk.playerInventory.numSlots || bk.SB || bk.inCreative) && bk.setItemSlot(Fk, Rk, tk, ak), (0, wk.b)().client.inventoryPrediction.serverChangeApplied(Xk)
        })), kk.zW(dk.wf, (kk => {
          let {
            OB: Fk,
            gB: Rk,
            UB: tk
          } = kk;
          const {
            inventoryPrediction: ak
          } = (0, wk.b)().client, Xk = () => {
            Bk.Tv.tFk(Bk.DH).loadFromString(Fk)
          };
          this.replayResume && (this.replayResume.sync = {
            UB: tk,
            load: Xk
          }), Yk(Bk, ak, mk.o, tk, Xk, Rk)
        })), kk.zW(dk.Ec, (kk => {
          (0, wk.b)().client.inventoryPrediction.acknowledge(kk)
        })), kk.zW(dk.J, (kk => {
          let {
            Ja: Fk,
            Aa: Bk,
            ea: Rk,
            ya: tk
          } = kk;
          (0, wk.b)().client.itemDropPrediction.onActionItemDrops(Fk, Bk, Rk, tk)
        })), kk.zW(dk.Mb, (kk => {
          ak().clearInventory(), (0, wk.b)().client.inventoryPrediction.serverChangeApplied(kk)
        })), kk.zW(dk.Qc, (kk => {
          let {
            leaveEventType: Fk,
            category: Bk,
            subCategory: Rk,
            value: tk
          } = kk;
          (0, aF.I)({
            leaveEventType: Fk,
            category: Bk,
            subCategory: Rk,
            value: tk
          })
        })), kk.zW(dk._b, (kk => {
          let {
            cat1: Fk,
            cat2: Bk,
            cat3: Rk,
            value: tk
          } = kk;
          (0, aF.r)({
            cat1: Fk,
            cat2: Bk,
            cat3: Rk,
            value: tk
          })
        }));
        const Xk = (0, wk.b)();
        kk.zW(dk.Tb, (kk => {
          Xk.applyServerBlocks((() => {
            uk(Xk, Ek.b, kk)
          }))
        })), kk.zW(dk.jf, (kk => {
          mk.o.Hf("setSelectedInventorySlotI", kk, !0)
        })), kk.zW(dk.Nc, (kk => {
          let {
            category: Fk,
            timeframe: Bk,
            data: Rk
          } = kk;
          mk.o.Hf("leaderboardResponse", {
            category: Fk,
            timeframe: Bk,
            data: Rk
          })
        })), kk.zW(dk.Y, (kk => {
          let {
            ba: Fk,
            da: Bk
          } = kk;
          this.stateReplicationHandler.setUpIfQueued(Fk), Fk = (0, Dk.e)(Fk), (0, wk.b)().client.gameRecorder.recordBulletShot(Fk, Bk), mk.o.Hf(`bulletShot|${Fk}`, {
            bulletDirections: Bk
          })
        })), kk.zW(dk.rc, (kk => {
          let {
            xB: Fk,
            jB: Bk
          } = kk;
          mk.o.Hf("damagedByOtherPlayer", {
            xB: Fk,
            direction: Bk
          }, !0)
        })), kk.zW(dk.Id, (kk => {
          mk.o.Hf("playerKilled", kk, !0), (0, wk.b)().client.gameRecorder.recordPlayerKilled(kk.deadEId, kk.killerEId, kk.withItem, kk.killstreak)
        })), kk.zW(dk.$b, (kk => {
          mk.o.Hf("customKillfeed", kk, !0), (0, wk.b)().client.gameRecorder.recordCustomKillfeed(kk.killer, kk.victim, kk.withItem)
        })), kk.zW(dk.Td, (kk => {
          let {
            tB: Fk,
            aB: Rk
          } = kk;
          this.stateReplicationHandler.setUpIfQueued(Fk);
          const tk = Bk.Tv.LFk(Fk);
          null !== tk && void 0 !== tk && tk.isGun() && tk.reload(Date.now(), Rk)
        })), kk.zW(dk.uf, (() => {
          mk.o.Hf("showShopTutorial", null, !0)
        })), kk.zW(dk.Pd, (kk => {
          mk.o.Hf("progressBarUpdate", kk, !0)
        })), kk.zW(dk.Ac, (kk => {
          mk.o.Hf("middleScreenBarInitiate", {
            duration: kk.aR,
            XR: kk.XR,
            horizBarRemOffset: kk.bR
          }, !0)
        })), kk.zW(dk.$d, (() => {
          mk.o.Hf("middleScreenBarRemove", !0)
        })), kk.zW(dk.Pe, (kk => {
          let {
            BB: Fk,
            RB: Rk
          } = kk;
          const tk = Rk ? (0, sF.g)(Bk, Rk) : void 0;
          mk.o.Hf("sendHitmarker", {
            BB: Fk,
            screenPos: tk
          }, !0)
        })), kk.zW(dk.af, (kk => {
          let {
            id: Fk,
            position: Bk,
            style: Rk,
            Ra: tk,
            Xa: ak
          } = kk;
          mk.o.Hf("setDirectionArrow", {
            id: Fk,
            position: Bk,
            style: Rk,
            text: (0, dk.z)(tk),
            Xa: ak
          }, !0)
        })), kk.zW(dk.Ib, (kk => {
          let {
            id: Fk
          } = kk;
          mk.o.Hf("clearDirectionArrow", {
            id: Fk
          }, !0)
        })), kk.zW(dk.N, (kk => {
          let {
            fa: Fk,
            ma: Rk,
            animationScript: tk,
            Wa: ak,
            va: Xk,
            ia: bk,
            Ya: dk
          } = kk;
          Fk = (0, Dk.e)(Fk);
          const sk = null === tk && null !== bk ? (0, gk.g)(bk, dk) : tk;
          (0, wk.b)().client.gameRecorder.recordAnimateEntity(Fk, Rk, sk, ak, Xk), (0, Mk.e)(Bk).animations.animateEntity(Fk, Rk, tk, ak, Xk, bk, dk), null !== tk || Fk === Bk.DH && Rk === JF.h.Emote && (0, wk.b)().client.cameraController.endTemporaryThirdPerson()
        })), kk.zW(dk.Kf, (kk => {
          let {
            DB: Fk,
            zB: Bk
          } = kk;
          if (Xk.bq(Fk[0], Fk[1], Fk[2])) {
            const kk = (0, wk.b)().OW(Fk[0], Fk[1], Fk[2]);
            (0, wk.b)().updateMailboxContents(Fk[0], Fk[1], Fk[2], kk, Bk)
          }
        })), kk.zW(dk.Cb, (kk => {
          let {
            Ca: Fk,
            Za: Rk,
            Ka: tk,
            xa: ak,
            ja: Xk,
            la: bk,
            na: dk,
            Ia: sk
          } = kk;
          const Vk = Bk.Tv.tFk(Bk.DH);
          if (bk) {
            const {
              EB: kk,
              UB: Fk
            } = sk;
            return (0, wk.b)().client.inventoryPrediction.Z2(Fk, (() => {
              Vk.chestRefreshed(Rk, tk, ak, dk, kk)
            })) && mk.o.Hf("chestToggleFromServer", !1, !0), void mk.o.Hf("chestRefreshedFromServer")
          }(Fk || Vk.SB) && (Fk ? (Vk.chestOpened(Rk, tk, ak, Xk, dk), null !== Xk && (0, wk.b)().client.ironChestPasskeyCache.onChestOpened(ak, Xk)) : Vk.chestClosed(), mk.o.Hf("chestToggleFromServer", Fk, !0))
        })), kk.zW(dk.bc, (kk => {
          let {
            craftingRecipeItemName: Fk,
            recipesForItem: Rk
          } = kk;
          Fk ? Xk.craftingManager.editRecipesForPlayer(Bk.DH, Fk, Rk) : Xk.craftingManager.resetAllPlayerRecipes(Bk.DH), mk.o.Hf("craftingRecipesEdited", {
            itemName: Fk,
            recipesForItem: Rk
          })
        })), kk.zW(dk.kf, (kk => {
          let {
            vehicleEId: Fk,
            overrides: Bk
          } = kk;
          (0, wk.b)().applyRiddenVehicleSettingOverrides(Fk, Bk)
        })), kk.zW(dk.Sf, (kk => {
          let {
            yF: Fk,
            fF: Rk,
            mF: tk
          } = kk;
          const ak = Bk.Tv.ckk(Bk.DH).physicsState.type === hk.l.SLEEPING && Fk === hk.l.DEFAULT;
          (0, wk.b)().updatePositionAndPhysics(Bk.DH, {
            type: Fk,
            tier: Rk
          }, !0, tk), ak && (0, wk.b)().updateHeldVehicleStatus()
        })), kk.zW(dk.tb, (kk => {
          let {
            Fa: Fk,
            Ba: Rk
          } = kk;
          Bk.Tv.FFk(Bk.DH).setPose(Fk, Rk)
        })), kk.zW(dk.Le, (kk => {
          (0, yF.d)(kk)
        })), kk.zW(dk.Gd, (kk => {
          for (const Fk of kk)(0, Kk.A)(Fk);
          mk.o.Hf("playerCosmeticsUpdated", kk, !0)
        })), kk.zW(dk.P, (kk => {
          for (const Fk of kk)(0, bF.h)(Bk, Fk)
        })), kk.zW(dk.Xc, (kk => {
          let {
            ft: Fk,
            Wt: Rk,
            Yt: tk,
            ot: ak,
            Lt: bk,
            Ot: wk,
            Et: dk
          } = kk;
          this.stateReplicationHandler.setUpIfQueued(Fk), Fk = (0, Dk.e)(Fk);
          const sk = Bk.Tv.fFk(Fk);
          if (sk && (sk.lastHurtTime = performance.now()), (0, qk.playRigHurt)(Bk, Fk, wk), mk.o.Hf("lifeformHurt", {
              eId: Fk,
              Et: dk
            }), Rk) {
            const kk = (0, sF.g)(Bk, Rk.RB);
            mk.o.Hf("yourAttackHit", {
              BB: ak,
              screenPos: kk,
              hitSelf: Fk === Bk.DH
            })
          }
          Fk === Bk.DH && (Xk.shakePlayerCamera(Fk, bk / 40, 200), mk.o.Hf("closeShopOnDamaged", null), mk.o.Hf("damagedByOtherPlayer", {
            xB: null,
            direction: wk,
            Lt: bk
          }, !0));
          const Vk = Bk.Tv.rW(Fk);
          if (Vk && (tk || ak)) {
            const kk = [Vk[0], Vk[1] + 1, Vk[2]];
            tk && (0, xk.i)(Bk, xk.v, kk, 15), ak && (0, xk.i)(Bk, xk.m, kk, 10)
          }
        })), kk.zW(dk.Tc, (kk => {
          let {
            cF: Fk,
            GF: Rk,
            TF: tk
          } = kk;
          (0, Mk.e)(Bk).setHealthFrac((0, Dk.e)(Fk), tk), mk.o.Hf("lifeformHealthChanged", {
            eId: (0, Dk.e)(Fk),
            GF: Rk,
            TF: tk
          })
        })), kk.zW(dk.S, (kk => {
          let {
            sa: Fk,
            Va: Rk
          } = kk;
          (0, wk.b)().playerAttacked(Bk.DH, Fk, Rk)
        })), kk.zW(dk.Lc, (kk => {
          (0, wk.b)().client.leaveGameUnwanted({
            reason: kk,
            requiresRefresh: !1,
            canReconnect: !1,
            automaticallyReconnect: !1
          }), (0, RF.navigatePreserveSearch)("/")
        })), kk.zW(dk._d, (kk => {
          let {
            rF: Fk,
            DF: Bk,
            zF: Rk
          } = kk;
          ak().removeItemName(Fk, Bk), (0, wk.b)().client.inventoryPrediction.serverChangeApplied(Rk)
        })), kk.zW(dk.We, (kk => {
          const {
            wa: Fk,
            GFk: Rk
          } = (0, jk.i)([kk[0], kk[1], kk[2]]);
          mF.e.setLookDirection(Bk, Fk, Rk), (0, lk.r)(Fk, Rk);
          const tk = Bk.Tv.FFk(Bk.DH);
          tk && (tk.heading = Fk)
        })), kk.zW(dk.Xe, (kk => {
          Xk.client.cameraController.setCameraZoom(kk)
        })), kk.zW(dk.sf, (kk => {
          let {
            nF: Fk,
            IF: Rk
          } = kk;
          Xk.shakePlayerCamera(Bk.DH, Fk, Rk)
        })), kk.zW(dk.Wb, (kk => {
          (0, BF.onCosmeticPackGranted)(kk)
        })), kk.zW(dk.Qe, (kk => {
          mk.o.Hf("serverUpdating", Date.now() + kk, !0)
        })), kk.zW(dk.cd, Uk.e), kk.zW(dk.md, (kk => {
          let {
            id: Fk,
            Hk: Bk
          } = kk;
          const {
            type: tk,
            params: ak
          } = (0, dF.i)(Bk), Xk = {
            ...ak
          };
          for (const Rk of dF.e) Rk in Xk && Xk[Rk] && (Xk[Rk] = (0, dk.z)(Xk[Rk]));
          wF.b.queueQTE(Fk, tk, Xk).getResult().then((kk => {
            "boolean" === typeof kk && (0, Rk.sendColyMessage)(dk.Oi, {
              qteId: Fk,
              qteResponse: kk
            })
          }))
        })), kk.zW(dk.ce, (kk => {
          wF.b.cancelQTE(kk)
        })), (0, Rk.onGameResetOnce)((() => {
          wF.b.reset()
        })), kk.zW(dk.qd, (kk => {
          let {
            id: Fk,
            clientParameters: Bk
          } = kk;
          (0, Ok.f)(Fk, Bk)
        })), kk.zW(dk.ge, (kk => {
          (0, Ok.j)(kk)
        })), kk.zW(dk.Hf, (kk => {
          let {
            text: Fk,
            id: Bk
          } = kk;
          (0, Ok.n)(Bk, Fk, (kk => {
            (0, Rk.sendColyMessage)(dk.$j, {
              Mb: Bk,
              gb: kk,
              Ub: 5
            })
          }))
        })), kk.zW(dk.ec, (kk => {
          let {
            bF: Fk,
            wF: Bk,
            dF: Rk,
            sF: tk,
            VF: ak,
            JF: Xk
          } = kk;
          Fk = (0, Dk.e)(Fk), (0, wk.b)().client.updateEffect(Fk, Bk, {
            displayName: Rk,
            icon: tk,
            duration: ak,
            level: Xk
          })
        })), kk.zW(dk.Wd, (kk => {
          let {
            bF: Fk,
            wF: Bk
          } = kk;
          Fk = (0, Dk.e)(Fk), (0, wk.b)().client.removeEffect(Fk, Bk)
        })), kk.zW(dk.Kc, (kk => {
          Bk.Tv.FFk(Bk.DH).jumpMultiplier.setMultiplierType("jumpEffectAmount", kk)
        })), kk.zW(dk.Ef, (kk => {
          mk.o.Hf("ttbEffectMultiplier", kk)
        })), (0, Rk.onGameResetOnce)((() => {
          Bk.Tv.FFk(Bk.DH).jumpMultiplier.setMultiplierType("jumpEffectAmount", 1)
        })), kk.zW(dk.hd, (kk => {
          (0, xk.k)(Bk, (0, Vk.u)(kk))
        })), kk.zW(dk.jd, (kk => {
          VF.f[kk.ka] ? (0, xk.k)(Bk, {
            ...VF.f[kk.ka],
            pos1: kk.pos1,
            pos2: kk.pos2
          }) : console.error(`Unknown preset id: ${kk.ka}`)
        })), kk.zW(dk.Fd, (kk => {
          var Fk, Bk;
          let {
            Nt: Rk,
            Ht: tk,
            ut: ak,
            Mt: Xk
          } = kk, {
            Ut: bk,
            ct: dk
          } = null !== Xk && void 0 !== Xk ? Xk : {};
          const {
            gt: sk
          } = null !== Xk && void 0 !== Xk ? Xk : {};
          bk = null !== (Fk = bk) && void 0 !== Fk ? Fk : void 0, dk = null !== (Bk = dk) && void 0 !== Bk ? Bk : void 0, "string" === typeof sk && this.stateReplicationHandler.setUpIfQueued(sk), (0, wk.b)().client.gameRecorder.recordPlaySound(Rk, tk, ak, Xk), Ik.c.play((0, Qk.c)(Rk), tk, sk, bk, dk).rate(ak)
        })), kk.zW(dk.Te, (kk => {
          let {
            pos: Fk,
            data: Bk
          } = kk;
          Xk.blockDataOwner.setBlockData(Fk[0], Fk[1], Fk[2], Bk), Xk.blockAdded(Fk[0], Fk[1], Fk[2], Xk.OW(Fk[0], Fk[1], Fk[2]))
        })), kk.zW(dk.xd, (kk => {
          let {
            info: Fk
          } = kk;
          mk.o.Hf("overShopInfo", Fk, !0)
        })), kk.zW(dk.ic, (kk => {
          let {
            AF: Rk,
            eF: tk
          } = kk;
          Fk.openShop(Bk.DH, Rk, tk)
        })), kk.zW(dk.O, (kk => {
          Bk.Tv.nG(Bk.DH).applyImpulse(kk)
        })), kk.zW(dk.of, (kk => {
          const Fk = Bk.Tv.nG(Bk.DH);
          Pk().set(Fk.JG, 0, 0, 0), Pk().set(Fk.yG, 0, 0, 0), Pk().copy(Fk.bs, kk), Fk.mG()
        })), kk.zW(dk.Yc, (kk => {
          console.error(`[logErrorToConsole]: ${kk}`)
        })), kk.zW(dk.gc, (kk => {
          let {
            Ga: Fk,
            Ta: Bk,
            ra: Rk
          } = kk;
          mk.o.Hf("flyingMiddleMessage", {
            content: (0, dk.z)(Fk),
            Ta: Bk,
            ra: Rk
          }, !0)
        })), kk.zW(dk.$f, (kk => {
          const Fk = kk === ck.g ? null : {
            message: `Currently loaded as variation: ${kk}`,
            type: "Warning"
          };
          mk.o.Hf("showPermanentBottomMessage", Fk, !0)
        })), kk.zW(dk.mc, (kk => {
          let {
            messageType: Fk,
            data: Bk
          } = kk;
          (0, kF.h)(Fk) ? (0, kF.d)(Fk, Bk) : ("freeCamPerms" === Fk && Xk.client.freeCameraController.setPerms(Bk.key, Bk.value), Xk.client.triggerGameCallback("onReceivedMessageFromServer", Fk, Bk))
        })), kk.zW(dk.xb, (() => {
          const kk = Bk.Tv.LFk(Bk.DH);
          null !== kk && void 0 !== kk && kk.isChargeable() && kk.finishCharging(!1, Date.now())
        })), kk.zW(dk.Yd, (kk => {
          let {
            St: Fk
          } = kk;
          Xk.craftingManager.removeRecipes(Bk.DH, Fk), mk.o.Hf("craftingRecipesEdited", {
            itemName: Fk,
            recipesForItem: []
          })
        })), kk.zW(dk.Of, (kk => {
          for (const Fk in kk) {
            const Bk = kk[Fk];
            for (const kk in Bk) Xk.client.meshCreator.handleParticleSystemUpdate(Fk, kk, Bk[kk])
          }
        })), (0, Rk.onGameResetOnce)((() => {
          (0, XF.setFloatingYValue)(Bk.Tv.getState(Bk.DH, "physics"), Bk.Tv.Qq(Bk.DH), null)
        })), kk.zW(dk.fc, (kk => {
          let {
            QF: Fk,
            kB: Rk,
            FB: tk
          } = kk;
          const ak = (0, Dk.e)(Fk);
          if (ak === Bk.DH) {
            const kk = Bk.Tv.Qq(Bk.DH).position;
            tk ??= Math.floor(kk[1]) - 1, (0, XF.setFloatingYValue)(Bk.Tv.getState(Bk.DH, "physics"), Bk.Tv.Qq(Bk.DH), Rk ? tk : null)
          }(0, Mk.e)(Bk).setFloating(ak, Rk, tk);
          const Xk = Bk.Tv.getState(ak, "floating");
          Xk && (Xk.isFloating = Rk, Xk.FB = Rk ? tk : null)
        })), kk.zW(dk.Pb, FF.h)
      }
    }
    window.addEventListener("beforeunload", (() => {}));
    var vF = Bk(38692),
      iF = Bk(38696),
      YF = Bk(633),
      oF = Bk(3037);
    class LF {
      constructor(kk, Fk, Bk, Rk) {
        this.msgHandler = Bk, this.listener = Rk, this.session = void 0, this.attachedRoom = null, this.detachRoomListeners = null, this.suspended = !1, this.droppedAt = 0, this.session = new vF.b({
          reconnect: kk,
          isLive: () => Rk.isLive(),
          onReconnected: kk => {
            this.resumeOnRoom(kk)
          },
          onGaveUp: (kk, Fk) => {
            Rk.onGaveUp(kk, Fk)
          },
          freeze: Fk,
          releaseSeat: Fk => {
            kk(Fk).then((kk => {
              kk.leave(!0)
            }), (kk => {
              console.warn("Couldn't release the held seat of a game left while reconnecting", kk)
            }))
          }
        })
      }
      onInitialInfo(kk, Fk) {
        this.session.onInitialInfo(kk, Fk)
      }
      isResuming() {
        return this.session.isResuming()
      }
      getDroppedAt() {
        return this.droppedAt
      }
      onResumeInitialInfo(kk, Fk) {
        if (this.session.onResuming(), null === kk) {
          try {
            (0, wk.b)().client.itemDropPrediction.reset()
          } catch (Bk) {
            console.error("Error dropping the item drop predictions on resuming", Bk)
          }
          return Rk.offlineInputReplay.discard(), void this.setSuspended(!1)
        }(0, wk.b)().client.itemDropPrediction.onResumeReplayOffered(), Rk.offlineInputReplay.replayFrom(kk.jF, Fk)
      }
      onResumed(kk) {
        this.setSuspended(!1), (0, Rk.resendBeacons)();
        try {
          kk()
        } catch (Fk) {
          console.error("Error completing the resume", Fk)
        } finally {
          this.session.onResumed()
        }
      }
      attachRoom(kk) {
        const Fk = (0, YF.i)((() => kk.connection.isOpen));
        kk.pW(Fk);
        const Bk = new iF.e((() => {
          this.session.canHoldSeat() && this.listener.isLive() && (console.warn("The game server went silent, reconnecting"), this.onConnectionDropped(kk, "silent"), kk.leave(!1))
        }));
        kk.onStateChange((() => {
          Bk.heard()
        }));
        const Rk = Fk => {
          Fk.persisted || kk.leave(!0)
        };
        window.addEventListener("pagehide", Rk), kk.pW(((Fk, Bk) => {
          if (kk === this.attachedRoom && this.listener.isLive()) return (0, ak.l)(Fk) && this.session.canHoldSeat() ? (console.warn(`Connection to the game server dropped with code ${Fk}, reconnecting`), this.listener.onDropped(Fk, Bk), void this.onConnectionDropped(kk, String(Fk))) : void this.listener.onRoomLeft(Fk, Bk)
        })), this.attachedRoom = kk, this.detachRoomListeners = () => {
          Fk(), Bk.dispose(), window.removeEventListener("pagehide", Rk)
        }
      }
      dispose() {
        this.detachRoom(), this.session.leave(), this.setSuspended(!1)
      }
      setSuspended(kk) {
        kk !== this.suspended && (this.suspended = kk, (0, Rk.setConnectionSuspended)(kk), (0, wk.b)().client.itemDropPrediction.setSuspended(kk))
      }
      detachRoom() {
        var kk;
        null === (kk = this.detachRoomListeners) || void 0 === kk || kk.call(this), this.detachRoomListeners = null, this.attachedRoom = null
      }
      onConnectionDropped(kk, Fk) {
        (0, oF.g)("disconnect", "Left room", Fk), this.isResuming() || (this.droppedAt = Date.now()), this.detachRoom(), Rk.offlineInputReplay.onConnectionLost(), this.setSuspended(!0), this.session.onConnectionLost(kk.reconnectionToken)
      }
      resumeOnRoom(kk) {
        if (!this.listener.isLive()) return console.warn("Left the game while reconnecting, leaving the resumed room"), kk.leave(!0), void this.dispose();
        console.log("Reconnected to the game server, waiting for the game to resume"), (0, yF.v)(), Rk.offlineInputReplay.onConnectionReplaced(), this.msgHandler.Ldk(kk), this.listener.onReconnected(kk), this.attachRoom(kk)
      }
    }
    var OF = Bk(3272),
      EF = Bk(3276),
      SF = Bk(1267),
      NF = Bk(4409),
      HF = Bk(2943),
      uF = Bk(1047),
      MF = Bk(37377),
      gF = Bk(38699),
      UF = Bk(8577),
      cF = Bk(38701),
      GF = Bk(1733),
      TF = Bk(38708),
      rF = Bk(1646),
      DF = Bk(2629);

    function zF(kk) {
      var Fk, Bk;
      if ("object" !== typeof kk || null === kk) return {
        errType: typeof kk
      };
      const Rk = kk;
      return {
        errType: null !== (Fk = null === (Bk = kk.constructor) || void 0 === Bk ? void 0 : Bk.name) && void 0 !== Fk ? Fk : "",
        errName: "string" === typeof Rk.name ? Rk.name : "",
        eventType: "string" === typeof Rk.type ? Rk.type : "",
        errStack: "string" === typeof Rk.stack ? Rk.stack.split("\n").slice(1).join(" | ") : ""
      }
    }

    function PF(kk) {
      if ("undefined" !== typeof ProgressEvent && kk instanceof ProgressEvent) return !0;
      if (!(kk instanceof Error)) return !1;
      const Fk = kk.code;
      return "ServerError" === kk.name && void 0 === Fk || "AbortError" === kk.name || "seat reservation expired." === kk.message || "early_leave" === kk.message
    }(0, yk.l)((kk => {
      (0, oF.g)("wasm_net", kk)
    }));
    let hF = !0;

    function qF() {
      hF = !1
    }
    class CF {
      constructor(kk) {
        this.gameNameWithVariation = void 0, this.lobbyName = void 0, this.colyClient = void 0, this.userContext = void 0, this.joinedAt = null, this.checkSendPath = () => {}, this.SJ = void 0, this.connectionResume = void 0, this.incomingMsgInitialisor = void 0, this.gameNameWithVariation = kk.gameNameWithVariation, this.lobbyName = kk.lobbyName, this.colyClient = kk.colyClient, this.userContext = kk.userContext
      }
      async connectToServer(kk, Fk, Bk) {
        Wk.b.reset(), kk.UH = {
          [kk.DH]: {}
        }, kk.Wkk = void 0, (0, yF.v)(), (0, wk.b)().removeAllEntityNames(), (0, wk.b)().setEntityName(kk.DH, this.userContext.getPlayerName()), (0, SF.u)({
          lobbyName: this.lobbyName
        }), console.log("Waiting for clientConnection passed promise to resolve");
        const Xk = (0, rF.f)();
        console.log("joining server with game", this.gameNameWithVariation, "lobbyName", this.lobbyName);
        const bk = performance.now(),
          dk = (0, cF.i)(this.userContext, (() => {
            const {
              roomName: Rk,
              joinOptions: tk
            } = (0, ik.f)(this.userContext, this.gameNameWithVariation, this.lobbyName, Fk, (kk => HF.e.isUsingCustomGameTexturePack(kk)));
            return tk.joinAdHold = Xk, tk.renderBackend = (0, DF.c)(kk.Ly), (0, gF.f)((() => this.colyClient.joinOrCreate(Rk, tk)), Bk)
          }));
        return mk.o.Hf("loadingScreenState", "loadingPage:joiningLobby"), await dk.then((Fk => {
          if (this.joinedAt = performance.now(), this.SJ = kk, Xk) {
            const kk = (0, rF.t)((() => {
              Fk.send(tk.e)
            }));
            Fk.pW(kk), (0, Rk.onGameResetOnce)(kk)
          }
          const Bk = new fk(Fk);
          this.connectionResume = new LF((kk => this.colyClient.reconnect(kk)), (Fk => {
            kk.lL(Fk)
          }), Bk, {
            isLive: () => (0, wk.b)().client.getMsgHandler() === Bk,
            onDropped: (kk, Fk) => {
              (0, EF.i)(kk) || this.logUnrecognisedConnectionLoss(kk, void 0, {
                site: "drop",
                closeReason: null !== Fk && void 0 !== Fk ? Fk : "",
                sinceJoined: this.sinceJoined()
              })
            },
            onRoomLeft: (kk, Fk) => {
              this.onRoomLeft(kk, Fk)
            },
            onReconnected: kk => {
              this.incomingMsgInitialisor.Ldk(kk), this.checkSendPath = (0, MF.d)(Bk, kk, yk.n)
            },
            onGaveUp: (kk, Fk) => {
              this.onResumeGaveUp(kk, Fk)
            }
          }), this.connectionResume.attachRoom(Fk), (0, Rk.onGameResetOnce)((() => {
            this.connectionResume.dispose()
          }));
          const ak = Bk.send,
            bk = Bk.zW,
            dk = Bk.RBk.send,
            sk = Bk.RBk.zW,
            Vk = Bk.Ydk;
          this.checkSendPath = (0, MF.d)(Bk, Fk, yk.n);
          const Jk = setInterval((() => {
            ak === Bk.send && bk === Bk.zW && dk === Bk.RBk.send && sk === Bk.RBk.zW && Vk === Bk.Ydk || qF(), this.checkSendPath()
          }), 1e4);
          return (0, Rk.onGameResetOnce)((() => {
            clearInterval(Jk)
          })), {
            success: !0,
            successDetails: Bk
          }
        })).catch((Fk => {
          if (Bk.aborted && Fk === (0, GF.e)(Bk)) return {
            success: !1,
            failDetails: {
              reason: "Left the game while it loaded",
              requiresRefresh: !1,
              canReconnect: !1
            }
          };
          if (Fk instanceof TF.e) return console.warn("Seat request timed out", this.lobbyName, this.gameNameWithVariation), {
            success: !1,
            failDetails: {
              reason: Fk.message,
              requiresRefresh: !1,
              canReconnect: !1,
              gameServerUnreachable: "timedOut"
            }
          };
          kk.xy(`Failed to connect to bloxd room, check your internet connection. lobbyName: ${this.lobbyName}, gameNameWithVariation: ${this.gameNameWithVariation} code: ${Fk.code}\n`, Fk);
          const Rk = Fk.code;
          return Rk === ak.e.serverUpdating.code ? (this.goToUpdateWaiting(), {
            success: !1,
            failDetails: {
              reason: ak.e.serverUpdating.text,
              requiresRefresh: !1,
              canReconnect: !0,
              goesToUpdateWaiting: !0
            }
          }) : {
            success: !1,
            failDetails: {
              ...this.onConnectionToServerLost(Rk, Fk.message, {
                site: "join",
                sinceJoinStart: (0, EF.d)(performance.now() - bk),
                ...zF(Fk)
              }, PF(Fk)),
              rematch: (0, gF.e)(Fk),
              gameRefused: (0, UF.c)(Fk)
            }
          }
        }))
      }
      setupServerListeners(kk, Fk, Bk) {
        mk.o.Hf("loadingScreenState", "loadingPage:loadingPlayerInfo"), this.incomingMsgInitialisor = new WF(this.gameNameWithVariation, Fk.RBk, kk, this.connectionResume), this.incomingMsgInitialisor.setupStateReplicationHandlers();
        const tk = Fk.Hdk();
        this.incomingMsgInitialisor.setupOnMessageListeners(tk, Bk), (0, Rk.onConnectionToServerReady)(tk, Fk), tk.finishRegistration()
      }
      dispose() {
        this.connectionResume.dispose()
      }
      onResumeGaveUp(kk, Fk) {
        (0, uF.ly)(new Error("Reconnect failed"), {
          ...(0, OF.k)(Fk),
          game: this.gameNameWithVariation
        }), (0, oF.g)("disconnect", "Reconnect failed", Fk.reason), (0, wk.b)().client.leaveGameUnwanted({
          reason: {
            translationKey: "general:lostConnection"
          },
          canReconnect: !kk,
          canPlayAgain: kk,
          requiresRefresh: !1,
          automaticallyReconnect: !1
        }), (0, RF.navigatePreserveSearch)("/")
      }
      sinceJoined() {
        return null === this.joinedAt ? "" : (0, EF.d)(performance.now() - this.joinedAt)
      }
      onRoomLeft(kk, Fk) {
        var Bk;
        if (kk === ak.e.gameOrPluginKick.code) return;
        if (console.log(`Left room with code ${kk}`), kk === ak.e.serverUpdating.code) return (0, oF.g)("disconnect", "Left room", "serverUpdating"), (0, wk.b)().client.leaveGame(this.getUpdateWaitingUrl()), void this.goToUpdateWaiting();
        this.SJ.xy(`Kicked from server with code ${kk}`, new Error);
        const Rk = Object.keys(ak.e).find((Fk => ak.e[Fk].code === kk));
        (0, oF.g)("disconnect", "Left room", null !== Rk && void 0 !== Rk ? Rk : String(kk));
        const tk = this.onConnectionToServerLost(kk, void 0, {
          site: "leave",
          closeReason: null !== Fk && void 0 !== Fk ? Fk : "",
          sinceJoined: this.sinceJoined()
        });
        (0, wk.b)().client.leaveGameUnwanted({
          reason: `You have disconnected from the server.\n${tk.reason}`,
          canReconnect: tk.canReconnect,
          requiresRefresh: tk.requiresRefresh,
          automaticallyReconnect: null !== (Bk = tk.automaticallyReconnect) && void 0 !== Bk && Bk
        }), (0, RF.navigatePreserveSearch)("/")
      }
      getUpdateWaitingUrl() {
        return (0, NF.D)(this.gameNameWithVariation, this.lobbyName)
      }
      goToUpdateWaiting() {
        (0, RF.navigatePreserveSearch)(this.getUpdateWaitingUrl())
      }
      onConnectionToServerLost(kk, Fk, Bk) {
        var Rk;
        let tk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (null !== (Rk = Fk) && void 0 !== Rk && Rk.endsWith(ak.p) && (this.userContext.invalidateTrafficCode(), Fk = Fk.replace(ak.p, "")), kk === ak.e.outdatedVersion.code) return console.error("Outdated client with version ", Xk.e, ", refreshing page"), (0, vk.reloadBloxd)(), {
          reason: "Outdated client",
          requiresRefresh: !0,
          canReconnect: !1
        };
        if (kk === ak.e.loadRecaptchaError.code) return console.error("Load recaptcha error, refreshing page"), (0, vk.reloadBloxd)(), {
          reason: "Failed to load recaptcha",
          requiresRefresh: !0,
          canReconnect: !1
        };
        for (const Xk in ak.e) {
          const {
            code: Bk,
            text: Rk,
            canReconnect: tk
          } = ak.e[Xk];
          if (Bk === kk) {
            console.log("matched known error", kk, "leaving game");
            return {
              reason: "" !== Rk ? Rk : Fk || `Code: ${kk}`,
              requiresRefresh: !1,
              canReconnect: tk,
              automaticallyReconnect: Bk === ak.e.customGameUpdated.code || Bk === ak.e.duplicateLobbyNameError.code
            }
          }
        }
        return console.log("Didn't match known error, leaving game"), (0, EF.h)(kk) || tk ? console.warn("Connection lost", kk, Fk) : this.logUnrecognisedConnectionLoss(kk, Fk, Bk), {
          reason: `Either your internet isn't working or this is a bug.\nCode: ${kk}`,
          requiresRefresh: !1,
          canReconnect: !1,
          gameServerUnreachable: tk ? "failed" : void 0
        }
      }
      logUnrecognisedConnectionLoss(kk, Fk, Bk) {
        (0, uF.ly)(new Error("Unrecognised connection loss"), {
          code: String(kk),
          cause: null !== Fk && void 0 !== Fk ? Fk : "",
          ...Bk,
          game: this.gameNameWithVariation,
          ...(0, EF.l)()
        })
      }
    }
  },
  38670: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => xB,
      f: () => kR
    });
    var Rk, tk, ak, Xk, bk, wk, dk, sk, Vk, Jk, Ak, ek, yk, fk, mk, Wk, vk, ik, Yk, Lk, Ok, Ek, Sk, Nk, Hk, uk, Mk, gk, Uk, ck, Gk, Tk, rk, Dk, zk, Pk, hk, qk, Ck, Zk, pk, Kk, xk, jk, lk, nk, Ik, Qk, kF, FF, BF, RF, tF, aF, XF, bF, wF, dF, sF, VF, JF, AF, eF, yF, fF, mF, WF, vF, iF, YF, oF, LF, OF, EF, SF, NF, HF, uF, MF, gF, UF, cF, GF, TF, rF, DF, zF, PF, hF, qF, CF, ZF, pF, KF, xF, jF, lF, nF, IF, QF = Bk(29),
      kB = Bk(36810),
      FB = Bk(38674),
      BB = Bk(38677),
      RB = Bk(8783),
      tB = Bk(597),
      aB = Bk(594),
      XB = Bk(36466);
    let bB = (Rk = (0, RB.type)("number"), tk = (0, RB.type)("number"), ak = (0, RB.type)("number"), Xk = (0, RB.type)("number"), bk = (0, RB.type)("number"), wk = (0, RB.type)("number"), dk = (0, RB.type)("string"), sk = class extends RB.Schema {
        constructor() {
          super(...arguments), (0, FB.b)(this, "id", Vk, this), (0, FB.b)(this, "amount", Jk, this), (0, FB.b)(this, "x", Ak, this), (0, FB.b)(this, "y", ek, this), (0, FB.b)(this, "z", yk, this), (0, FB.b)(this, "size", fk, this), (0, FB.b)(this, "attributes", mk, this)
        }
      }, Vk = (0, BB.c)(sk.prototype, "id", [Rk], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Jk = (0, BB.c)(sk.prototype, "amount", [tk], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Ak = (0, BB.c)(sk.prototype, "x", [ak], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), ek = (0, BB.c)(sk.prototype, "y", [Xk], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), yk = (0, BB.c)(sk.prototype, "z", [bk], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), fk = (0, BB.c)(sk.prototype, "size", [wk], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 1
        }
      }), mk = (0, BB.c)(sk.prototype, "attributes", [dk], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "{}"
        }
      }), sk),
      wB = (Wk = (0, RB.type)("string"), vk = (0, RB.type)("string"), ik = class extends RB.Schema {
        constructor() {
          super(...arguments), (0, FB.b)(this, "itemName", Yk, this), (0, FB.b)(this, "enchantmentTier", Lk, this)
        }
      }, Yk = (0, BB.c)(ik.prototype, "itemName", [Wk], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), Lk = (0, BB.c)(ik.prototype, "enchantmentTier", [vk], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), ik),
      dB = (Ok = (0, RB.type)("string"), Ek = (0, RB.type)("string"), Sk = (0, RB.type)("number"), Nk = (0, RB.type)("number"), Hk = (0, RB.type)("number"), uk = (0, RB.type)("float32"), Mk = (0, RB.type)("float32"), gk = (0, RB.type)("float32"), Uk = (0, RB.type)("string"), ck = (0, RB.type)(["number"]), Gk = (0, RB.type)("boolean"), Tk = class extends RB.Schema {
        constructor() {
          super(...arguments), (0, FB.b)(this, "type", rk, this), (0, FB.b)(this, "name", Dk, this), (0, FB.b)(this, "x", zk, this), (0, FB.b)(this, "y", Pk, this), (0, FB.b)(this, "z", hk, this), (0, FB.b)(this, "xRotation", qk, this), (0, FB.b)(this, "yRotation", Ck, this), (0, FB.b)(this, "zRotation", Zk, this), (0, FB.b)(this, "followingEId", pk, this), (0, FB.b)(this, "followingOffset", Kk, this), (0, FB.b)(this, "shouldMatchFollowingEntityRotation", xk, this)
        }
      }, rk = (0, BB.c)(Tk.prototype, "type", [Ok], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), Dk = (0, BB.c)(Tk.prototype, "name", [Ek], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return ""
        }
      }), zk = (0, BB.c)(Tk.prototype, "x", [Sk], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Pk = (0, BB.c)(Tk.prototype, "y", [Nk], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), hk = (0, BB.c)(Tk.prototype, "z", [Hk], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), qk = (0, BB.c)(Tk.prototype, "xRotation", [uk], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Ck = (0, BB.c)(Tk.prototype, "yRotation", [Mk], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Zk = (0, BB.c)(Tk.prototype, "zRotation", [gk], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), pk = (0, BB.c)(Tk.prototype, "followingEId", [Uk], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), Kk = (0, BB.c)(Tk.prototype, "followingOffset", [ck], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new RB.ArraySchema(0, 0, 0)
        }
      }), xk = (0, BB.c)(Tk.prototype, "shouldMatchFollowingEntityRotation", [Gk], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !0
        }
      }), Tk),
      sB = (jk = (0, RB.type)("float32"), lk = (0, RB.type)("float32"), nk = (0, RB.type)("boolean"), Ik = (0, RB.type)("boolean"), Qk = (0, RB.type)("float32"), kF = (0, RB.type)("boolean"), FF = (0, RB.type)("string"), BF = (0, RB.type)("string"), RF = (0, RB.type)("string"), tF = (0, RB.type)("string"), aF = (0, RB.type)(["number"]), XF = (0, RB.type)("number"), bF = (0, RB.type)({
        map: wB
      }), wF = class extends dB {
        constructor() {
          super(...arguments), (0, FB.b)(this, "scale", dF, this), (0, FB.b)(this, "speed", sF, this), (0, FB.b)(this, "jumping", VF, this), (0, FB.b)(this, "crouching", JF, this), (0, FB.b)(this, "cameraPitch", AF, this), (0, FB.b)(this, "armSwinging", eF, this), (0, FB.b)(this, "heldItemName", yF, this), (0, FB.b)(this, "heldItemEnchantmentTier", fF, this), (0, FB.b)(this, "pose", mF, this), (0, FB.b)(this, "ridingVehicleEId", WF, this), (0, FB.b)(this, "meshOffset", vF, this), (0, FB.b)(this, "baseRenderHeading", iF, this), (0, FB.b)(this, "armour", YF, this)
        }
      }, dF = (0, BB.c)(wF.prototype, "scale", [jk], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 1
        }
      }), sF = (0, BB.c)(wF.prototype, "speed", [lk], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), VF = (0, BB.c)(wF.prototype, "jumping", [nk], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), JF = (0, BB.c)(wF.prototype, "crouching", [Ik], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), AF = (0, BB.c)(wF.prototype, "cameraPitch", [Qk], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), eF = (0, BB.c)(wF.prototype, "armSwinging", [kF], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), yF = (0, BB.c)(wF.prototype, "heldItemName", [FF], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), fF = (0, BB.c)(wF.prototype, "heldItemEnchantmentTier", [BF], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), mF = (0, BB.c)(wF.prototype, "pose", [RF], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "standing"
        }
      }), WF = (0, BB.c)(wF.prototype, "ridingVehicleEId", [tF], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), vF = (0, BB.c)(wF.prototype, "meshOffset", [aF], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new RB.ArraySchema(0, 0, 0)
        }
      }), iF = (0, BB.c)(wF.prototype, "baseRenderHeading", [XF], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), YF = (0, BB.c)(wF.prototype, "armour", [bF], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new RB.MapSchema
        }
      }), wF),
      VB = (oF = (0, RB.type)("string"), LF = (0, RB.type)("string"), OF = (0, RB.type)("string"), EF = (0, RB.type)("uint8"), SF = class extends sB {
        constructor() {
          super(...arguments), (0, FB.b)(this, "variation", NF, this), (0, FB.b)(this, "ownerDbId", HF, this), (0, FB.b)(this, "metaInfo", uF, this), (0, FB.b)(this, "aiState", MF, this)
        }
      }, NF = (0, BB.c)(SF.prototype, "variation", [oF], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "default"
        }
      }), HF = (0, BB.c)(SF.prototype, "ownerDbId", [LF], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), uF = (0, BB.c)(SF.prototype, "metaInfo", [OF], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return ""
        }
      }), MF = (0, BB.c)(SF.prototype, "aiState", [EF], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), SF);
    gF = (0, RB.type)("string"), UF = (0, RB.type)("string"), cF = (0, RB.type)("string"), GF = (0, RB.type)("string"), TF = class extends dB {
      constructor() {
        super(...arguments), (0, FB.b)(this, "meshKind", rF, this), (0, FB.b)(this, "meshOpts", DF, this), (0, FB.b)(this, "pose", zF, this), (0, FB.b)(this, "leaderboardTop", PF, this)
      }
    }, rF = (0, BB.c)(TF.prototype, "meshKind", [gF], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), DF = (0, BB.c)(TF.prototype, "meshOpts", [UF], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), zF = (0, BB.c)(TF.prototype, "pose", [cF], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), PF = (0, BB.c)(TF.prototype, "leaderboardTop", [GF], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    });

    function JB(kk) {
      return Object.keys(RB.Metadata.getFields(kk))
    }
    const AB = JB(VB);
    for (const FR of tB.w)
      if (!AB.includes(FR)) throw new Error(`Mob Schema is missing a networked property: "${FR}"`);
    const eB = JB((hF = (0, RB.type)("string"), qF = (0, RB.type)("float32"), CF = (0, RB.type)("float32"), ZF = (0, RB.type)("float32"), pF = (0, RB.type)("float32"), KF = class extends dB {
      constructor() {
        super(...arguments), (0, FB.b)(this, "soundName", xF, this), (0, FB.b)(this, "volume", jF, this), (0, FB.b)(this, "refDistance", lF, this), (0, FB.b)(this, "maxHearDist", nF, this), (0, FB.b)(this, "rate", IF, this)
      }
    }, xF = (0, BB.c)(KF.prototype, "soundName", [hF], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return ""
      }
    }), jF = (0, BB.c)(KF.prototype, "volume", [qF], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return 1
      }
    }), lF = (0, BB.c)(KF.prototype, "refDistance", [CF], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return XB.g
      }
    }), nF = (0, BB.c)(KF.prototype, "maxHearDist", [ZF], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return XB.b
      }
    }), IF = (0, BB.c)(KF.prototype, "rate", [pF], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return 1
      }
    }), KF));
    for (const FR of aB.h)
      if (!eB.includes(FR)) throw new Error(`AudioEntity Schema is missing a replicated property: "${FR}"`);
    var yB = Bk(38084),
      fB = Bk(1192),
      mB = Bk(606),
      WB = Bk(37856),
      vB = Bk(4002),
      iB = Bk(291),
      YB = Bk(36911),
      oB = Bk(37763),
      LB = Bk(2124),
      OB = Bk(36881),
      EB = Bk(38115),
      SB = Bk(37023),
      NB = Bk(302),
      HB = Bk.n(NB),
      uB = Bk(37617),
      MB = Bk(36741),
      gB = Bk(37742),
      UB = Bk(37773);
    class cB {
      constructor(kk, Fk) {
        this.bloxd = kk, this.eId = Fk, this.SJ = void 0, this.colyseusEntity = void 0, this.canSeeSub = void 0, this.canAttackSub = void 0, this.interactableSub = void 0, this.overlayColourSub = void 0, this.opacitySub = void 0, this.zIndexSub = void 0, this.multilineTextBoxSub = void 0, this.previousHidingMeshManagerState = void 0, this.meshKind = void 0, this.meshOpts = void 0, this.leaderboardTop = void 0, this.meshRebuildQueued = !1, this.Te = !1, this.SJ = kk.SJ
      }
      initClient(kk) {
        var Fk, Bk, Rk;
        this.colyseusEntity = kk, this.meshKind = kk.meshKind, this.meshOpts = kk.meshOpts, this.leaderboardTop = kk.leaderboardTop, this.SJ.Tv.add([kk.x, kk.y, kk.z], 1, 1, null, null, !1, !1, this.eId), this.SJ.Tv.sH(this.eId, "smoothToServerPos");
        const tk = "Person" === this.meshKind;
        this.SJ.Tv.sH(this.eId, "meshRotation", {
          isServerControlled: !0,
          ...tk ? {
            defaultRotationsPerSecond: .5
          } : {},
          childrenNodeParams: tk ? [{
            nodeName: "HeadMesh",
            softTolerance: EB.m,
            hardTolerance: null
          }] : []
        }), this.updateHidingMeshMgr(), this.canSeeSub = QF.o.subscribe(`otherEntitySettings|${this.eId}|canSee`, (kk => {
          this.updateHidingMeshMgr()
        }));
        const ak = () => {
          const kk = this.SJ.Tv.xkk(this.eId);
          if (!kk) return;
          const Fk = (0, SB.h)(this.eId);
          if ("number" === typeof kk.iN) {
            var Bk, Rk, tk, ak;
            const Xk = null === (Bk = (0, LB.o)("head", null === (tk = this.getSpec()) || void 0 === tk || null === (ak = tk.opts.textures) || void 0 === ak ? void 0 : ak.head)) || void 0 === Bk || null === (Rk = Bk.personModel) || void 0 === Rk ? void 0 : Rk.fullBody;
            return this.SJ.Ly.vN.setPickable(kk.iN, Fk && !Xk), void(0, MB.updatePersonAttachmentPickability)(this.SJ, this.eId, Fk)
          }
          const Xk = kk.mesh;
          if (Xk)
            for (const bk of [Xk, ...Xk.getChildMeshes(!1)]) "ff" in bk && !bk.name.startsWith("Cape|") && (bk.ff = Fk)
        };
        this.canAttackSub = QF.o.subscribe(`otherEntitySettings|${this.eId}|canAttack`, ak), this.interactableSub = QF.o.subscribe(`otherEntitySettings|${this.eId}|interactable`, ak), this.overlayColourSub = QF.o.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|overlayColour`, (kk => {
          this.updateOverlayColour(kk)
        })), this.opacitySub = QF.o.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|opacity`, (kk => {
          this.updateOpacity(kk)
        })), this.zIndexSub = QF.o.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|zIndex`, (kk => {
          this.updateZIndex(kk)
        }));
        const Xk = this.SJ.UH[this.SJ.DH][this.eId];
        this.updateOverlayColour(null !== (Fk = null === Xk || void 0 === Xk ? void 0 : Xk.overlayColour) && void 0 !== Fk ? Fk : null), this.updateOpacity(null !== (Bk = null === Xk || void 0 === Xk ? void 0 : Xk.opacity) && void 0 !== Bk ? Bk : 1), this.updateZIndex(null !== (Rk = null === Xk || void 0 === Xk ? void 0 : Xk.zIndex) && void 0 !== Rk ? Rk : 0), this.multilineTextBoxSub = (0, OB.q)(this.SJ, this.eId)
      }
      onChangeClient(kk, Fk) {
        if ("xRotation" === kk || "yRotation" === kk || "zRotation" === kk)(0, OB.s)(this.SJ, this.eId, kk, Fk);
        else if ("pose" === kk) {
          const kk = this.SJ.Tv.FFk(this.eId);
          kk && (kk.pose = Fk || "standing")
        } else "meshKind" === kk || "meshOpts" === kk ? (this[kk] = Fk, this.queueMeshRebuild()) : "name" === kk && "" !== Fk ? this.updateHidingMeshMgr() : "leaderboardTop" === kk && (this.leaderboardTop = Fk, QF.o.Hf(`leaderboardTop|${this.eId}`, Fk))
      }
      disposeClient() {
        this.Te = !0, this.SJ.Tv.deleteEntity(this.eId), QF.o.unsubscribe(this.canSeeSub), QF.o.unsubscribe(this.canAttackSub), QF.o.unsubscribe(this.interactableSub), QF.o.unsubscribe(this.overlayColourSub), QF.o.unsubscribe(this.opacitySub), QF.o.unsubscribe(this.zIndexSub), QF.o.unsubscribe(this.multilineTextBoxSub)
      }
      getCurrentHidingMeshMgrState() {
        var kk, Fk;
        return {
          canSee: null !== (kk = null === (Fk = this.SJ.UH[this.SJ.DH][this.eId]) || void 0 === Fk ? void 0 : Fk.canSee) && void 0 !== kk && kk,
          name: this.colyseusEntity.name,
          meshKind: this.meshKind,
          meshOpts: this.meshOpts
        }
      }
      updateHidingMeshMgr() {
        var kk, Fk, Bk;
        const {
          SJ: Rk
        } = this, {
          Tv: tk
        } = Rk, ak = this.getCurrentHidingMeshMgrState();
        if ((0, iB.ge)(this.previousHidingMeshManagerState, ak)) return;
        if (this.previousHidingMeshManagerState = ak, tk.mH(this.eId, "hidingMeshManager"), null === (kk = Rk.UH[Rk.DH][this.eId]) || void 0 === kk || !kk.canSee) return;
        const Xk = this.getSpec();
        if (!Xk) return;
        const {
          type: bk,
          opts: wk
        } = Xk;
        "Person" === bk && (wk.textures = (0, LB.u)(wk.textures)), wk.eId = this.eId, tk.sH(this.eId, "hidingMeshManager", {
          addMeshComponent: () => {
            var kk, Fk, Bk;
            "Leaderboard" === bk && (wk.leaderboardTop = this.leaderboardTop);
            const ak = this.bloxd.client.meshCreator.getEntityMesh(bk, wk, (kk => {
              var Fk, Bk;
              if ("number" === typeof kk) {
                var tk, ak, Xk;
                const Fk = Rk.Ly.vN;
                Fk.setEntityId(kk, this.eId);
                const Bk = "Person" === bk && (null === (tk = (0, LB.o)("head", null === (Xk = wk.textures) || void 0 === Xk ? void 0 : Xk.head)) || void 0 === tk || null === (ak = tk.personModel) || void 0 === ak ? void 0 : ak.fullBody);
                return void Fk.setPickable(kk, (0, SB.h)(this.eId) && !Bk)
              }
              const dk = kk;
              for (const bk of [dk, ...dk.getChildMeshes(!1)]) void 0 === bk.ff || bk.name.startsWith("Cape|") || (bk.ff = (0, SB.h)(this.eId), bk.metadata ??= new Rk.Ly.mf, bk.metadata.eId = this.eId);
              this.updateOpacity(null !== (Fk = null === (Bk = Rk.UH[Rk.DH][this.eId]) || void 0 === Bk ? void 0 : Bk.opacity) && void 0 !== Fk ? Fk : 1)
            }));
            if (!ak) return;
            const {
              iN: Xk,
              mesh: dk,
              meshOffset: sk,
              nameYOffset: Vk,
              modelLoaded: Jk
            } = ak;
            null === Jk || void 0 === Jk || Jk.then((() => {
              var kk;
              (null === (kk = tk.xkk(this.eId)) || void 0 === kk ? void 0 : kk.mesh) === dk && (this.previousHidingMeshManagerState = null, this.updateHidingMeshMgr())
            }));
            const Ak = null === Xk ? null : Rk.Ly.vN.DBk(Xk, 0);
            if (tk.sH(this.eId, tk.names.mesh, {
                iN: Xk,
                wBk: Ak,
                mesh: dk,
                zXk: !1,
                VBk: "Leaderboard" !== bk,
                offset: sk.slice(),
                DXk: "ParticleEmitter" === bk && wk.followTargetMeshOffset ? kk => {
                  var Fk;
                  HB().copy(kk, sk);
                  const Bk = null === (Fk = tk.DFk(this.eId)) || void 0 === Fk ? void 0 : Fk.Ne,
                    Rk = void 0 === Bk ? null : tk.FFk(Bk);
                  if (Rk) {
                    var ak, Xk;
                    const Fk = this.bloxd.getEntityHeading(null !== (ak = Rk.ridingVehicleEId) && void 0 !== ak ? ak : Bk, !0),
                      tk = Math.sin(Fk),
                      bk = Math.cos(Fk);
                    kk[0] += Rk.meshOffset[0] * bk + Rk.meshOffset[2] * tk, kk[1] += Rk.meshOffset[1], kk[2] += Rk.meshOffset[2] * bk - Rk.meshOffset[0] * tk;
                    const wk = null !== (Xk = Rk.ridingVehicleEId) && void 0 !== Xk ? Xk : null;
                    null !== wk && (0, UB.b)(this.SJ, wk, kk)
                  }
                } : null
              }), "Person" === bk) {
              var ek, yk, fk, mk;
              tk.sH(this.eId, tk.names.meshAttachments, {
                personFullBody: null !== (ek = null === (yk = (0, LB.o)("head", null === (mk = wk.textures) || void 0 === mk ? void 0 : mk.head)) || void 0 === yk || null === (fk = yk.personModel) || void 0 === fk ? void 0 : fk.fullBody) && void 0 !== ek && ek
              });
              for (const kk of fB.t) {
                var Wk, vk, ik;
                const Fk = null === (Wk = wk.textures) || void 0 === Wk ? void 0 : Wk[kk];
                Fk && null !== (vk = (0, LB.o)(kk, Fk)) && void 0 !== vk && null !== (ik = vk.attachments) && void 0 !== ik && ik.length && oB.c.Player.meshApi.updatePlayerCosmetic(this.eId, Xk, kk, Fk)
              }
              tk.sH(this.eId, tk.names.moveState), tk.sH(this.eId, "updateWalkingState", {
                iN: Xk,
                wBk: Ak,
                walkingLegSwingDuration: EB.s
              }), tk.sH(this.eId, "humanoidMesh", {
                iN: Xk,
                wBk: Ak,
                heldItemPositionParams: {},
                maxWalkingAngleOverride: null
              }), tk.sH(this.eId, "animator", {
                iN: Xk,
                wBk: Ak,
                modelLifeformType: "Player"
              }), gB.g.hasAnimation("Person") && tk.sH(this.eId, "rigAnimation", {
                target: "Person",
                iN: Xk
              }), tk.FFk(this.eId).pose = this.colyseusEntity.pose || "standing"
            } else if ("BloxdBlock" === bk && null !== Xk) {
              tk.sH(this.eId, "animator", {
                iN: Xk,
                wBk: Ak,
                modelLifeformType: null
              });
              const kk = (0, WB.v)(wk.blockName);
              null !== kk && tk.sH(this.eId, "rigAnimation", {
                target: kk,
                iN: Xk
              })
            }
            tk.ebk(this.eId, "entityName", {
              name: this.colyseusEntity.name,
              nameYOffset: Vk
            }), this.bloxd.setEntityName(this.eId, this.colyseusEntity.name), !0 === wk.autoRotate && (tk.mH(this.eId, "meshRotation"), tk.sH(this.eId, "autoRotate"));
            const {
              lineToEId: Yk
            } = wk;
            (0, mB.F)(Yk) || tk.sH(this.eId, "lineToEntity", {
              lineToEId: Yk
            });
            const Lk = Rk.UH[Rk.DH][this.eId];
            this.updateOverlayColour(null !== (kk = null === Lk || void 0 === Lk ? void 0 : Lk.overlayColour) && void 0 !== kk ? kk : null), this.updateOpacity(null !== (Fk = null === Lk || void 0 === Lk ? void 0 : Lk.opacity) && void 0 !== Fk ? Fk : 1), this.updateZIndex(null !== (Bk = null === Lk || void 0 === Lk ? void 0 : Lk.zIndex) && void 0 !== Bk ? Bk : 0)
          },
          removeMeshComponent: () => {
            "Person" !== bk && "BloxdBlock" !== bk || tk.mH(this.eId, "rigAnimation"), tk.mH(this.eId, tk.names.mesh), tk.fkk(this.eId, tk.names.meshAttachments) && tk.mH(this.eId, tk.names.meshAttachments), tk.mH(this.eId, "entityName"), tk.mH(this.eId, "autoRotate"), tk.mH(this.eId, "lineToEntity"), "Person" === bk ? (tk.mH(this.eId, tk.names.moveState), tk.mH(this.eId, "updateWalkingState"), tk.mH(this.eId, "humanoidMesh"), tk.mH(this.eId, "animator")) : "BloxdBlock" === bk && tk.mH(this.eId, "animator")
          },
          hideDist: null !== (Fk = wk.hideDist) && void 0 !== Fk ? Fk : 80,
          movingHideDist: null !== (Bk = wk.hideDist) && void 0 !== Bk ? Bk : 120,
          displayOutsideLoadedChunk: wk.hideDist > 100,
          immediatelyUpdate: !0,
          yV: "BloxdBlock" === bk ? wk.blockName : bk
        })
      }
      queueMeshRebuild() {
        this.meshRebuildQueued || (this.meshRebuildQueued = !0, queueMicrotask((() => {
          this.meshRebuildQueued = !1, this.Te || this.updateHidingMeshMgr()
        })))
      }
      getSpec() {
        return (0, vB.h)({
          meshKind: this.meshKind,
          meshOpts: this.meshOpts
        })
      }
      updateOverlayColour(kk) {
        var Fk, Bk;
        if ("Person" !== this.meshKind) return;
        let Rk = new YB.c(0, 0, 0, 0);
        if (null !== kk) {
          const Fk = (0, iB.Y)(kk);
          Rk = new YB.c(Fk[0] / 255, Fk[1] / 255, Fk[2] / 255, .5)
        }
        const tk = null !== (Fk = null === (Bk = this.SJ.Tv.xkk(this.eId)) || void 0 === Bk ? void 0 : Bk.iN) && void 0 !== Fk ? Fk : null;
        null !== tk && oB.c.Player.meshApi.updateMeshOverlayColour(tk, Rk)
      }
      updateZIndex(kk) {
        var Fk;
        if ("Person" !== this.meshKind) return;
        const Bk = null === (Fk = this.SJ.Tv.xkk(this.eId)) || void 0 === Fk ? void 0 : Fk.iN;
        "number" === typeof Bk && this.SJ.Ly.vN.setRenderingGroupId(Bk, kk)
      }
      updateOpacity(kk) {
        const Fk = this.SJ.Tv.xkk(this.eId);
        Fk && ("number" !== typeof Fk.iN ? Fk.mesh && "ParticleEmitter" !== this.meshKind && (0, uB.f)(Fk.mesh, kk) : oB.c.Player.meshApi.updateMeshOpacity(Fk.iN, kk))
      }
    }
    var GB = Bk(38672);
    class TB {
      constructor(kk, Fk) {
        this.eId = Fk, this.SJ = void 0, this.schema = void 0, this.SJ = kk.SJ
      }
      initClient(kk) {
        this.schema = kk, this.SJ.Tv.add([kk.x, kk.y, kk.z], .1, .1, null, null, !1, !1, this.eId), this.SJ.Tv.sH(this.eId, "smoothToServerPos"), GB.c.add(this.eId, this.copyOpts())
      }
      onChangeClient(kk) {
        aB.h.includes(kk) && GB.c.update(this.eId, this.copyOpts())
      }
      disposeClient() {
        GB.c.remove(this.eId), this.SJ.Tv.deleteEntity(this.eId)
      }
      copyOpts() {
        const {
          soundName: kk,
          volume: Fk,
          refDistance: Bk,
          maxHearDist: Rk,
          rate: tk
        } = this.schema;
        return {
          soundName: kk,
          volume: Fk,
          refDistance: Bk,
          maxHearDist: Rk,
          rate: tk
        }
      }
    }
    var rB = Bk(3478),
      DB = Bk(36451),
      zB = Bk(6167),
      PB = Bk(37484),
      hB = Bk(2626),
      qB = Bk(37805),
      CB = Bk(8745),
      ZB = Bk(38124),
      pB = Bk(37451),
      KB = Bk(3037);
    class xB {
      constructor(kk, Fk) {
        let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
          Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => performance.now();
        this.RBk = kk, this.SJ = Fk, this.setupBudgetMs = Bk, this.now = Rk, this.createStateCallbacks = void 0, this.roomStateCallbacks = void 0, this.allItems = {}, this.detachers = new Map, this.deferredSetups = new Map, this.queuedSetups = new Map, this.promotedSetups = new Set, this.setupBudgetLeftMs = void 0, this.lastRefillMs = void 0, this.roomState = void 0, this.Te = !1, this.onFrame = () => {
          this.setUpQueuedEntities(!0)
        }, this.EW = () => {
          this.setUpQueuedEntities(this.now() - this.lastRefillMs > 100)
        }, this.setUpPromoted = () => {
          for (const kk of this.promotedSetups) {
            this.promotedSetups.delete(kk);
            const Fk = this.queuedSetups.get(kk);
            Fk && (this.queuedSetups.delete(kk), this.timedSetup(Fk, kk))
          }
        }, this.createStateCallbacks = (0, CB.getStateCallbacks)(kk), this.roomStateCallbacks = this.createStateCallbacks(kk.state), this.roomState = kk.state, this.setupBudgetLeftMs = Bk, this.lastRefillMs = Rk()
      }
      setup() {
        this.setupEntityHandlers(), this.setupItemHandlers(), this.RBk.onStateChange(this.setUpPromoted), this.SJ.on("beforeInputs", this.onFrame), this.SJ.on("yJ", this.EW)
      }
      setUpQueuedEntities(kk) {
        var Fk;
        if ((null === (Fk = (0, hB.b)().client.getMsgHandler()) || void 0 === Fk ? void 0 : Fk.RBk) !== this.RBk) return this.SJ.off("beforeInputs", this.onFrame), this.SJ.off("yJ", this.EW), this.queuedSetups.clear(), void this.promotedSetups.clear();
        if (kk && (this.setupBudgetLeftMs = this.setupBudgetMs, this.lastRefillMs = this.now()), this.setUpPromoted(), 0 !== this.queuedSetups.size)
          for (HB().copy(jB, this.SJ.Tv.rW(this.SJ.DH)); this.setupBudgetLeftMs > 0;) {
            const kk = this.nearestQueued(jB);
            if (null === kk) return;
            this.setUpIfQueued(kk), this.setUpPromoted()
          }
      }
      nearestQueued(kk) {
        let Fk = null,
          Bk = 1 / 0;
        return this.queuedSetups.forEach(((Rk, tk) => {
          const ak = function(kk, Fk) {
            return (Fk.x - kk[0]) ** 2 + (Fk.y - kk[1]) ** 2 + (Fk.z - kk[2]) ** 2
          }(kk, Rk);
          (null === Fk || ak < Bk) && (Fk = tk, Bk = ak)
        })), Fk
      }
      setUpOrQueue(kk, Fk) {
        0 === this.queuedSetups.size && this.setupBudgetLeftMs > 0 || this.mustSetUpNow(kk, Fk) ? this.timedSetup(kk, Fk) : this.queuedSetups.set(Fk, kk)
      }
      mustSetUpNow(kk, Fk) {
        const Bk = this.SJ.Wkk;
        if (Fk === Bk) return !0;
        const Rk = this.roomState.entities.get(Bk);
        return !(!Rk || Rk.ridingVehicleEId !== Fk && Rk.followingEId !== Fk) || (lB(kk.type) === yB.b || (0, hB.b)().getFollowingEntities(Fk).length > 0)
      }
      setUpIfQueued(kk) {
        const Fk = this.queuedSetups.get(kk);
        Fk && (this.queuedSetups.delete(kk), this.timedSetup(Fk, kk))
      }
      promoteIfQueued(kk) {
        null !== kk && this.queuedSetups.has(kk) && this.promotedSetups.add(kk)
      }
      timedSetup(kk, Fk) {
        const Bk = this.now();
        this.setupEntity(kk, Fk), this.setupBudgetLeftMs -= this.now() - Bk
      }
      setupEntityHandlers() {
        this.roomStateCallbacks.entities.Av(((kk, Fk) => {
          this.SJ.Wkk ? this.setUpOrQueue(kk, Fk) : this.deferEntitySetupUntilInitInfo(kk, Fk)
        })), this.roomStateCallbacks.entities.yE(((kk, Fk) => {
          const Bk = this.deferredSetups.get(Fk);
          Bk && (QF.o.unsubscribe(Bk), this.deferredSetups.delete(Fk)), this.queuedSetups.delete(Fk), this.detach(Fk), (0, hB.b)().client.disposeEntity(Fk)
        }))
      }
      deferEntitySetupUntilInitInfo(kk, Fk) {
        const Bk = QF.o.Om("initInfoReceived", (() => {
          this.deferredSetups.delete(Fk), this.setUpOrQueue(kk, Fk)
        }));
        this.deferredSetups.set(Fk, Bk), (0, rB.onGameResetOnce)((() => {
          this.deferredSetups.get(Fk) === Bk && (QF.o.unsubscribe(Bk), this.deferredSetups.delete(Fk)), (0, hB.b)().updatePositionAndPhysics(this.SJ.DH, {
            type: zB.l.DEFAULT,
            tier: null
          }, !0), (0, hB.b)().takeHeldPlayerBodySize(this.SJ.DH);
          const kk = this.SJ.Tv.ckk(this.SJ.DH);
          kk && (kk.movementType = zB.j.NORMAL)
        }))
      }
      setupEntity(kk, Fk) {
        const Bk = Fk === this.SJ.Wkk;
        if (Bk)(0, hB.b)().client.Iq(this.SJ.DH, null, null);
        else {
          const {
            type: Bk
          } = kk, Rk = lB(Bk);
          if (void 0 === Rk) return void
          function(kk, Fk) {
            const Bk = String(kk);
            if (nB.has(Bk)) return;
            nB.add(Bk);
            const Rk = Bk.length > 80 ? `${Bk.slice(0,80)}...` : Bk,
              tk = `No client handler for entity type ${JSON.stringify(Rk)}, so entity ${Fk} is not set up`;
            console.warn(tk), (0, KB.g)("uncaught", tk, "unknown_entity_type")
          }(Bk, Fk);
          (0, hB.b)().client.Iq(Fk, kk, new Rk((0, hB.b)(), Fk, Bk))
        }
        const Rk = this.createStateCallbacks(kk);
        if (Bk) return this.setupMapSchemaCallbacks(Fk, kk, Rk, "armour"), this.setupScalarField(Fk, kk, Rk, "scale"), this.setupScalarField(Fk, kk, Rk, "ridingVehicleEId"), this.setupScalarField(Fk, kk, Rk, "followingEId"), this.setupScalarField(Fk, kk, Rk, "followingOffset"), void this.setupScalarField(Fk, kk, Rk, "shouldMatchFollowingEntityRotation");
        for (const tk of JB(kk.constructor)) kk[tk] instanceof RB.MapSchema ? this.setupMapSchemaCallbacks(Fk, kk, Rk, tk) : this.setupScalarField(Fk, kk, Rk, tk)
      }
      setupMapSchemaCallbacks(kk, Fk, Bk, Rk) {
        const tk = Bk[Rk],
          ak = new Map;
        tk.Av(((Bk, tk) => {
          if (this.onEntityFieldChange(kk, Fk, Rk, {
              key: tk,
              value: Bk
            }), !(Bk instanceof RB.Schema)) return;
          const Xk = this.createStateCallbacks(Bk),
            bk = [];
          for (const ak of JB(Bk.constructor)) bk.push(this.listenForFutureChanges(Xk, ak, (() => {
            this.onEntityFieldChange(kk, Fk, Rk, {
              key: tk,
              value: Bk
            })
          })));
          ak.set(tk, (() => {
            for (const kk of bk) kk()
          }))
        })), tk.yE(((Bk, tk) => {
          var Xk;
          null === (Xk = ak.get(tk)) || void 0 === Xk || Xk(), ak.delete(tk), this.onEntityFieldChange(kk, Fk, Rk, {
            key: tk,
            value: null
          })
        })), this.addDetacher(kk, (() => {
          for (const kk of ak.values()) kk();
          ak.clear()
        }))
      }
      setupScalarField(kk, Fk, Bk, Rk) {
        this.onEntityFieldChange(kk, Fk, Rk, Fk[Rk]);
        const tk = this.listenForFutureChanges(Bk, Rk, (Bk => {
          this.onEntityFieldChange(kk, Fk, Rk, Bk)
        }));
        this.addDetacher(kk, tk)
      }
      addDetacher(kk, Fk) {
        let Bk = this.detachers.get(kk);
        Bk || (Bk = [], this.detachers.set(kk, Bk)), Bk.push(Fk)
      }
      detach(kk) {
        for (const Bk of null !== (Fk = this.detachers.get(kk)) && void 0 !== Fk ? Fk : []) {
          var Fk;
          Bk()
        }
        this.detachers.delete(kk)
      }
      listenForFutureChanges(kk, Fk, Bk) {
        return kk.listen(Fk, Bk, !1)
      }
      onEntityFieldChange(kk, Fk, Bk, Rk) {
        switch (Bk) {
          case "ridingVehicleEId": {
            this.promoteIfQueued(Rk);
            const Fk = this.SJ.Tv.FFk((0, DB.e)(kk));
            Fk && (Fk.ridingVehicleEId = Rk);
            break
          }
          case "armour":
            this.handleArmourChange(kk, Rk);
            break;
          case "followingEId":
            this.promoteIfQueued(Rk), this.handleFollowingEIdChange(kk, Fk, Rk);
            break;
          case "xRotation":
          case "yRotation":
          case "zRotation":
            this.handleRotationChange(kk, Bk, Rk);
            break;
          case "scale":
            this.handleScaleChange(kk, Rk);
            break;
          case "baseRenderHeading":
            this.handleBaseRenderHeadingChange(kk, Rk);
            break;
          case "followingOffset":
            this.handleFollowingOffsetChange(kk, Rk);
            break;
          case "shouldMatchFollowingEntityRotation":
            this.handleShouldMatchFollowingEntityRotationChange(kk, Rk);
            break;
          case "x":
          case "y":
          case "z":
            return void this.handlePositionChange(kk, Bk, Rk)
        }(0, hB.b)().client.updateEntityField(kk, Bk, Rk)
      }
      handleArmourChange(kk, Fk) {
        var Bk, Rk;
        const {
          key: tk,
          value: ak
        } = Fk;
        (0, oB.y)(kk, tk, null !== (Bk = null === ak || void 0 === ak ? void 0 : ak.itemName) && void 0 !== Bk ? Bk : null, null !== (Rk = null === ak || void 0 === ak ? void 0 : ak.enchantmentTier) && void 0 !== Rk ? Rk : null)
      }
      handleFollowingEIdChange(kk, Fk, Bk) {
        const Rk = (0, DB.e)(kk),
          tk = Rk === this.SJ.DH;
        if (this.SJ.Tv.mH(Rk, this.SJ.Tv.names.rY), Bk) this.SJ.Tv.mH(Rk, "smoothToServerPos"), this.SJ.Tv.sH(Rk, this.SJ.Tv.names.rY, {
          Ne: (0, DB.e)(Bk),
          offset: Array.from(Fk.followingOffset),
          zFk: Fk.shouldMatchFollowingEntityRotation,
          CFk: !0,
          ZFk: (kk, Rk) => {
            if (HB().copy(kk, Fk.followingOffset), Fk.ridingVehicleEId === Bk) {
              const Fk = (0, DB.e)(Bk),
                tk = (0, hB.b)().getEntityHeading(Fk, Rk);
              HB().ht(kk, kk, HB().ZERO, tk)
            }
          }
        });
        else if (!tk) {
          this.SJ.Tv.fkk(Rk, "smoothToServerPos") || this.SJ.Tv.sH(Rk, "smoothToServerPos");
          const kk = this.SJ.Tv.getState(Rk, "smoothToServerPos"),
            Fk = this.SJ.Tv.Qq(Rk).position;
          (0, pB.setServerPosition)(kk, Fk[0], Fk[1], Fk[2])
        }
      }
      handleRotationChange(kk, Fk, Bk) {
        const Rk = "xRotation" === Fk ? 0 : "yRotation" === Fk ? 1 : 2;
        for (const tk of (0, hB.b)().getFollowingEntities(kk)) {
          const kk = this.SJ.Tv.getState(tk, "meshRotation"),
            Fk = this.SJ.Tv.DFk(tk);
          kk && Fk.zFk && (kk.serverSetRotation[Rk] = Bk)
        }
      }
      handleScaleChange(kk, Fk) {
        const Bk = (0, DB.e)(kk);
        if (QF.o.Hf(`entityScale|${Bk}`, Fk), Bk === this.SJ.DH) {
          var Rk;
          (0, hB.b)().removeFromEyeHeightCache(Bk);
          const kk = this.SJ.Tv.ckk(this.SJ.DH),
            Fk = null !== (Rk = null === kk || void 0 === kk ? void 0 : kk.physicsState) && void 0 !== Rk ? Rk : {
              type: zB.l.DEFAULT,
              tier: null
            };
          return void(0, hB.b)().updatePositionAndPhysics(this.SJ.DH, Fk, !1)
        }
        const tk = (0, hB.b)().getLifeformType(Bk);
        if (null === tk) return;
        const {
          physicsBodyWidth: ak,
          physicsBodyHeight: Xk
        } = (0, ZB.f)(Fk, tk);
        this.SJ.Tv.TFk(Bk, ak, Xk, ak)
      }
      handleBaseRenderHeadingChange(kk, Fk) {
        const Bk = this.SJ.Tv.getState(kk, "meshRotation");
        Bk && (Bk.baseRenderRotation[1] = Fk);
        for (const Rk of (0, hB.b)().getFollowingEntities(kk)) {
          const kk = this.SJ.Tv.getState(Rk, "meshRotation"),
            Bk = this.SJ.Tv.DFk(Rk);
          kk && Bk.zFk && (kk.baseRenderRotation[1] = Fk)
        }
      }
      handleFollowingOffsetChange(kk, Fk) {
        const Bk = this.SJ.Tv.DFk((0, DB.e)(kk));
        if (Bk && Bk.offset) {
          const kk = Fk ? Array.from(Fk) : HB().ZERO;
          Bk.offset[0] = kk[0], Bk.offset[1] = kk[1], Bk.offset[2] = kk[2]
        }
      }
      handleShouldMatchFollowingEntityRotationChange(kk, Fk) {
        const Bk = this.SJ.Tv.DFk((0, DB.e)(kk));
        Bk && (Bk.zFk = null === Fk || void 0 === Fk || Fk)
      }
      handlePositionChange(kk, Fk, Bk) {
        if (this.SJ.Tv.fkk(kk, "smoothToServerPos")) {
          const Rk = this.SJ.Tv.getState(kk, "smoothToServerPos");
          (0, pB.setServerPositionAxis)(Rk, IB[Fk], Bk)
        }
      }
      setupItemHandlers() {
        this.roomStateCallbacks.items.Av(((kk, Fk) => {
          this.allItems[Fk] = kk, (0, PB.l)(this.SJ, Fk, [kk.x, kk.y, kk.z], kk.id, {
            amount: kk.amount,
            attributes: JSON.parse(kk.attributes),
            RR: (0, kB.e)(this.SJ).cantPickUpItem(Fk),
            size: kk.size,
            predictedAt: (0, hB.b)().client.itemDropPrediction.onServerItemAdded(Fk)
          });
          const Bk = this.createStateCallbacks(kk);
          for (const Rk of JB(bB)) this.onItemFieldChange(Fk, Rk, kk[Rk]), this.addDetacher(Fk, this.listenForFutureChanges(Bk, Rk, (kk => {
            this.onItemFieldChange(Fk, Rk, kk)
          })))
        })), this.roomStateCallbacks.items.yE(((kk, Fk) => {
          delete this.allItems[Fk], this.detach(Fk), (0, hB.b)().client.itemDropPrediction.onServerItemRemoved(Fk), this.SJ.Tv.fkk(Fk, this.SJ.Tv.names.itemState) && this.SJ.Tv.deleteEntity(Fk), (0, kB.e)(this.SJ).disposeEntity(Fk)
        }))
      }
      onItemFieldChange(kk, Fk, Bk) {
        if (Fk in IB) {
          if (this.SJ.Tv.fkk(kk, "itemState")) {
            const Rk = this.SJ.Tv.getState(kk, "smoothToServerPos");
            (0, pB.setServerPositionAxis)(Rk, IB[Fk], Bk), (0, hB.b)().client.itemDropPrediction.onServerItemMoved(kk)
          }
          return
        }
        if (!this.SJ.Tv.fkk(kk, "itemState")) return;
        const Rk = this.SJ.Tv.getState(kk, "itemState");
        "amount" === Fk && Bk !== Rk.amount && (Rk.creationTime = Date.now()), Rk[Fk] = "attributes" === Fk ? JSON.parse(Bk) : Bk
      }
      dispose() {
        if (!this.Te) {
          this.Te = !0, this.SJ.off("beforeInputs", this.onFrame), this.SJ.off("yJ", this.EW), this.queuedSetups.clear(), this.promotedSetups.clear();
          for (const kk of this.deferredSetups.values()) QF.o.unsubscribe(kk);
          this.deferredSetups.clear(), this.SJ.Tv.mH(this.SJ.DH, this.SJ.Tv.names.rY);
          for (const kk in this.allItems) this.SJ.Tv.deleteEntity(kk), delete this.allItems[kk];
          for (const kk of [...this.detachers.keys()]) this.detach(kk);
          (0, kB.e)(this.SJ).clear();
          for (const kk of (0, hB.b)().client.iterateEntityIds())(0, hB.b)().client.disposeEntity(kk)
        }
      }
    }
    const jB = [0, 0, 0];

    function lB(kk) {
      if ("string" !== typeof kk) return;
      const Fk = kk.indexOf("|"),
        Bk = -1 === Fk ? kk : kk.slice(0, Fk),
        Rk = kR();
      return Object.hasOwn(Rk, Bk) ? Rk[Bk] : void 0
    }
    const nB = new Set;
    const IB = {
      x: 0,
      y: 1,
      z: 2
    };
    let QB = null;

    function kR() {
      return null !== QB || (QB = {
        ...Object.fromEntries(aB.i.map((kk => {
          const {
            yV: Fk
          } = (0, qB.b)(kk);
          return [kk, Fk]
        }))),
        Pebble: yB.b,
        Snowball: yB.b,
        "Snowball Launcher": yB.b,
        "Reinforced Pebble": yB.b,
        Bullet: yB.b,
        "Reinforced Ball": yB.b,
        Ball: yB.b,
        Mango: yB.b,
        "Moonstone Orb": yB.b,
        ...Object.fromEntries(tB.y.map((kk => [(0, iB._b)(kk), yB.b]))),
        Arrow: yB.b,
        "Arrow of Speed": yB.b,
        "Arrow of Poison": yB.b,
        "Arrow of Slowness": yB.b,
        "Arrow of Weakness": yB.b,
        "Arrow of Knockback": yB.b,
        "Arrow of Strength": yB.b,
        "Arrow of Invisibility": yB.b,
        "Arrow of Jumping": yB.b,
        "Arrow of Defense": yB.b,
        "Arrow of Instant Healing": yB.b,
        "Arrow of Instant Damage": yB.b,
        "Arrow of Regeneration": yB.b,
        "Arrow of Haste": yB.b,
        "Arrow of Shield": yB.b,
        "Arrow of Double Jump": yB.b,
        "Arrow of Heat Resistance": yB.b,
        "Arrow of X-Ray Vision": yB.b,
        "Arrow of Mining Yield": yB.b,
        "Arrow of Brain Rot": yB.b,
        "Arrow of Milk": yB.b,
        Fireball: yB.b,
        "Bouncy Bomb": yB.b,
        RPG: yB.b,
        "Obby RPG": yB.b,
        "Super RPG": yB.b,
        "Grenade Launcher": yB.b,
        Iceball: yB.b,
        Coconut: yB.b,
        "Splash Speed Potion": yB.b,
        "Splash Defense Potion": yB.b,
        "Splash Strength Potion": yB.b,
        "Splash Invisibility Potion": yB.b,
        "Splash Jump Potion": yB.b,
        "Splash Knockback Potion": yB.b,
        "Splash Poison Potion": yB.b,
        "Splash Speed Potion II": yB.b,
        "Splash Defense Potion II": yB.b,
        "Splash Strength Potion II": yB.b,
        "Splash Jump Potion II": yB.b,
        "Splash Knockback Potion II": yB.b,
        "Splash Poison Potion II": yB.b,
        "Splash Slowness Potion": yB.b,
        "Splash Slowness Potion II": yB.b,
        "Splash Weakness Potion": yB.b,
        "Splash Weakness Potion II": yB.b,
        "Splash Milk Potion": yB.b,
        "Splash Instant Damage Potion": yB.b,
        "Splash Instant Damage Potion II": yB.b,
        "Splash Instant Healing Potion": yB.b,
        "Splash Instant Healing Potion II": yB.b,
        "Splash Regeneration Potion": yB.b,
        "Splash Regeneration Potion II": yB.b,
        "Splash Haste Potion": yB.b,
        "Splash Haste Potion II": yB.b,
        "Splash Shield Potion": yB.b,
        "Splash Shield Potion II": yB.b,
        "Splash Double Jump Potion": yB.b,
        "Splash Heat Resistance Potion": yB.b,
        "Splash X-Ray Vision Potion": yB.b,
        "Splash Mining Yield Potion": yB.b,
        "Splash Mining Yield Potion II": yB.b,
        "Splash Brain Rot Potion": yB.b,
        "Yellow Paintball Gun": yB.b,
        "White Paintball Gun": yB.b,
        "Red Paintball Gun": yB.b,
        "Purple Paintball Gun": yB.b,
        "Pink Paintball Gun": yB.b,
        "Orange Paintball Gun": yB.b,
        "Magenta Paintball Gun": yB.b,
        "Lime Paintball Gun": yB.b,
        "Light Gray Paintball Gun": yB.b,
        "Light Blue Paintball Gun": yB.b,
        "Green Paintball Gun": yB.b,
        "Gray Paintball Gun": yB.b,
        "Cyan Paintball Gun": yB.b,
        "Brown Paintball Gun": yB.b,
        "Blue Paintball Gun": yB.b,
        "Black Paintball Gun": yB.b,
        "Yellow Heavy Paintball Gun": yB.b,
        "White Heavy Paintball Gun": yB.b,
        "Red Heavy Paintball Gun": yB.b,
        "Purple Heavy Paintball Gun": yB.b,
        "Pink Heavy Paintball Gun": yB.b,
        "Orange Heavy Paintball Gun": yB.b,
        "Magenta Heavy Paintball Gun": yB.b,
        "Lime Heavy Paintball Gun": yB.b,
        "Light Gray Heavy Paintball Gun": yB.b,
        "Light Blue Heavy Paintball Gun": yB.b,
        "Green Heavy Paintball Gun": yB.b,
        "Gray Heavy Paintball Gun": yB.b,
        "Cyan Heavy Paintball Gun": yB.b,
        "Brown Heavy Paintball Gun": yB.b,
        "Blue Heavy Paintball Gun": yB.b,
        "Black Heavy Paintball Gun": yB.b,
        "Toxin Ball": yB.b,
        "Splash Aura XP Potion": yB.b,
        "Splash Aura XP Potion II": yB.b,
        "Arrow of Aura XP": yB.b,
        Firecracker: yB.b,
        "Rainbow Firecracker": yB.b,
        "White Firecracker": yB.b,
        "Orange Firecracker": yB.b,
        "Magenta Firecracker": yB.b,
        "Light Blue Firecracker": yB.b,
        "Yellow Firecracker": yB.b,
        "Lime Firecracker": yB.b,
        "Pink Firecracker": yB.b,
        "Gray Firecracker": yB.b,
        "Light Gray Firecracker": yB.b,
        "Cyan Firecracker": yB.b,
        "Purple Firecracker": yB.b,
        "Blue Firecracker": yB.b,
        "Brown Firecracker": yB.b,
        "Green Firecracker": yB.b,
        "Red Firecracker": yB.b,
        "Black Firecracker": yB.b,
        "Firecracker Pebble": yB.b,
        "Rainbow Firecracker Pebble": yB.b,
        "White Firecracker Pebble": yB.b,
        "Orange Firecracker Pebble": yB.b,
        "Magenta Firecracker Pebble": yB.b,
        "Light Blue Firecracker Pebble": yB.b,
        "Yellow Firecracker Pebble": yB.b,
        "Lime Firecracker Pebble": yB.b,
        "Pink Firecracker Pebble": yB.b,
        "Gray Firecracker Pebble": yB.b,
        "Light Gray Firecracker Pebble": yB.b,
        "Cyan Firecracker Pebble": yB.b,
        "Purple Firecracker Pebble": yB.b,
        "Blue Firecracker Pebble": yB.b,
        "Brown Firecracker Pebble": yB.b,
        "Green Firecracker Pebble": yB.b,
        "Red Firecracker Pebble": yB.b,
        "Black Firecracker Pebble": yB.b,
        "Blinding Pebble": yB.b,
        Poop: yB.b,
        "Wood Boomerang": yB.b,
        "Stone Boomerang": yB.b,
        "Iron Boomerang": yB.b,
        "Gold Boomerang": yB.b,
        "Diamond Boomerang": yB.b,
        "Amethite Boomerang": yB.b,
        "Magmasteel Boomerang": yB.b,
        "Rubellite Boomerang": yB.b,
        "Serpentite Boomerang": yB.b,
        "Moonstone Boomerang": yB.b,
        "67 Base Projectile": yB.b,
        "67 Boosted Projectile": yB.b,
        "Capitano Grenade": yB.b,
        "Scatter Pellet": yB.b,
        "Lucky Bomb": yB.b,
        "Unlucky Bomb": yB.b,
        "Swap Orb": yB.b,
        Mesh: cB,
        AudioEntity: TB
      }), QB
    }
  },
  38642: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => ak,
      e: () => Xk
    });
    var Rk = Bk(606),
      tk = Bk(37407);
    const ak = 4e4;
    class Xk {
      constructor() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now;
        this.now = kk, this.editedAt = new Map, this.lastChunkX = NaN, this.lastChunkY = NaN, this.lastChunkZ = NaN, this.lastChunkId = ""
      }
      noteEdit(kk, Fk, Bk) {
        const ak = (0, Rk.P)(kk),
          Xk = (0, Rk.P)(Fk),
          bk = (0, Rk.P)(Bk),
          wk = this.now();
        if (ak !== this.lastChunkX || Xk !== this.lastChunkY || bk !== this.lastChunkZ) {
          this.lastChunkX = ak, this.lastChunkY = Xk, this.lastChunkZ = bk, this.lastChunkId = (0, tk.d)(ak, Xk, bk), this.editedAt.delete(this.lastChunkId), this.editedAt.set(this.lastChunkId, wk);
          for (const [kk, Fk] of this.editedAt) {
            if (Fk >= wk - 3e5) break;
            this.editedAt.delete(kk)
          }
        } else this.editedAt.set(this.lastChunkId, wk)
      }
      chunksEditedSince(kk) {
        const Fk = [];
        for (const [Bk, Rk] of this.editedAt) Rk >= kk && Fk.push(Bk);
        return Fk
      }
    }
  },
  38710: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => sF,
      f: () => rF,
      h: () => NF,
      i: () => DF
    });
    var Rk = Bk(3478),
      tk = Bk(8437),
      ak = Bk(36414),
      Xk = Bk(1379),
      bk = Bk(36442),
      wk = Bk(38672),
      dk = Bk(38608),
      sk = Bk(3546),
      Vk = Bk(37554),
      Jk = Bk(1192),
      Ak = Bk(279),
      ek = Bk(29),
      yk = Bk(1863),
      fk = Bk(98),
      mk = Bk(42),
      Wk = Bk(1881),
      vk = Bk(1808),
      ik = Bk(2775);
    class Yk {
      constructor(kk) {
        this.storeForMs = kk, this.clicks = new ik.e
      }
      click() {
        this.clicks.enqueue(Date.now());
        const kk = Date.now() - this.storeForMs;
        for (; this.clicks.size > 0 && this.clicks.peek() < kk;) this.clicks.dequeue()
      }
      getNumClicksInMs(kk) {
        let Fk = 0;
        return this.clicks.forEach((Bk => {
          Bk > Date.now() - kk && Fk++
        })), Fk
      }
      getMaxClickSeparationInMs(kk) {
        if (0 === this.clicks.size) return this.storeForMs;
        let Fk = 0,
          Bk = Date.now() - kk;
        this.clicks.forEach((Rk => {
          Rk < Date.now() - kk || (Fk = Math.max(Fk, Math.abs(Rk - Bk)), Bk = Rk)
        }));
        const Rk = Math.abs(Date.now() - Bk);
        return Math.max(Fk, Rk)
      }
    }
    class Lk {
      constructor(kk) {
        this.storeForMs = kk, this.clickDownDurations = new ik.e
      }
      registerClickDownDuration(kk) {
        this.clickDownDurations.enqueue({
          dur: kk,
          atTime: Date.now()
        });
        const Fk = Date.now() - this.storeForMs;
        for (; this.clickDownDurations.size > 0 && this.clickDownDurations.peek().atTime < Fk;) this.clickDownDurations.dequeue()
      }
      clickDownDurationsCheck(kk) {
        if (kk > this.storeForMs) return console.error("overDuration is greater than storeForMs"), "0:0";
        let Fk = 0,
          Bk = 0;
        return this.clickDownDurations.forEach((Rk => {
          Rk.atTime > Date.now() - kk && (Fk++, Bk = Math.max(Bk, Rk.dur))
        })), `${Fk}:${Bk}`
      }
    }
    var Ok = Bk(36232),
      Ek = Bk(38719),
      Sk = Bk(22),
      Nk = Bk(2626),
      Hk = Bk(1267),
      uk = Bk(38651),
      Mk = Bk(4171),
      gk = Bk(132),
      Uk = Bk(37811),
      ck = Bk(38021),
      Gk = Bk(606),
      Tk = Bk(36225),
      rk = Bk(6),
      Dk = Bk(9095),
      zk = Bk(1173),
      Pk = Bk(182),
      hk = Bk(38722),
      qk = Bk(38729),
      Ck = Bk(37840),
      Zk = Bk(38738),
      pk = Bk(37751),
      Kk = Bk(3202),
      xk = Bk(1585),
      jk = Bk(36332),
      lk = Bk(2711),
      nk = Bk(38731),
      Ik = Bk(37625);
    const Qk = {
      forward: "freeCamForward",
      backward: "freeCamBackward",
      left: "freeCamLeft",
      right: "freeCamRight",
      jump: "freeCamUp",
      crouch: "freeCamDown"
    };

    function kF() {
      var kk, Fk;
      return !(null === (kk = (0, Nk.b)().client) || void 0 === kk || null === (Fk = kk.freeCameraController) || void 0 === Fk || !Fk.movesFly())
    }

    function FF(kk) {
      const Fk = kk.on.bind(kk);
      kk.on = (kk, Bk) => {
        Wk.x.has(kk) ? Fk(kk, Bk) : Fk(kk, (Fk => {
          var Rk;
          return null !== (Rk = (0, Nk.b)().client) && void 0 !== Rk && Rk.isReplayMode() ? function(kk) {
            return kk in Qk
          }(kk) && kF() ? Bk(Fk) : void 0 : Bk(Fk)
        }))
      }
    }
    const BF = 5e3,
      RF = 1;
    let tF, aF = RF,
      XF = 0;
    const bF = !0;
    let wF = bF;
    yk.b.subscribe("_ignoreBasicBoards", (kk => {
      wF = kk
    })), (0, Rk.onGameReset)((() => {
      wF = bF
    }));
    let dF = null;
    const sF = () => dF;
    let VF, JF, AF;
    var eF, yF, fF, mF, WF, vF, iF, YF, oF;
    const LF = [2, 0, 1, 8, 3, "a", 193, 80, 5, 7, 4, 255, "length", 181, "d", 162, 43, "undefined", void 0, "b", "c", 62, 63, 6, "fromCodePoint", 12, "push", 30, 205, !1, !0, 139, 91, 8191, 88, 13, 14, 84, "e", 19, 108, 131, 9, 114, 99, "g", 210, "i", 156, 92, 168, 67, 96, 179, 216, 176, 157, 125, 93, null, 166, 10, 138, 233, 153, 232, 202, 22, "f", 170, 56, 148, 178, 220, 241, 69, 38, "h", 203, 242, 33554432, 67108864];

    function OF(kk) {
      return typeof mF !== LF[17] && mF ? (new mF).decode(new WF(kk)) : typeof vF !== LF[17] && vF ? vF.from(kk).toString("utf-8") : oF(kk)
    }

    function EF() {}

    function SF() {
      SF = function() {}
    }

    function NF(kk) {
      function Fk() {
        return kk.Tv.LFk(kk.DH)
      }
      FF(kk.inputs.down), FF(kk.inputs.up);
      for (const Rk of ["forward", "backward", "left", "right", "sprint", "jump", "crouch"]) {
        const Fk = (Fk, Bk) => {
          var tk, ak;
          if (kF()) {
            var Xk;
            const tk = Qk[Rk];
            var bk, wk;
            if (tk) null === (bk = (0, Nk.b)().client) || void 0 === bk || null === (wk = bk.freeCameraController) || void 0 === wk || wk.handlefreeCamKeyPress(tk, Fk, Bk);
            return void(Bk || null !== (Xk = (0, Nk.b)().client) && void 0 !== Xk && Xk.isReplayMode() || (kk.Tv.HFk()[Rk] = !1))
          }
          if (null !== (tk = (0, Nk.b)().client) && void 0 !== tk && null !== (ak = tk.freeCameraController) && void 0 !== ak && ak.isKeyPressOverriden(Fk)) return;
          kk.Tv.HFk()[Rk] = Bk
        };
        kk.inputs.down.on(Rk, (kk => Fk(kk, !0))), kk.inputs.up.on(Rk, (kk => Fk(kk, !1)))
      }
      kk.inputs.down.on("crouch", (() => {
        if (kF()) return;
        if (!kk.Fv.canCrouch) return;
        const Fk = kk.Tv.HFk();
        Sk.c.get("clientEscMenuOptions").crouchIsToggle && (Fk.crouchToggled = !Fk.crouchToggled && !Fk.padSneakToggled), Fk.padSneakToggled = !1
      }));
      const Bk = () => {
        const kk = Fk();
        kk.isGun() && kk.inaccuracyCalculator.jump()
      };
      kk.inputs.down.on("jump", (kk => {
        kF() || (Bk(), VF(kk))
      }));
      for (const Rk of Wk.j) kk.inputs.down.on(Rk, (kk => {
        var Fk, Bk;
        null !== (Fk = (0, Nk.b)().client) && void 0 !== Fk && null !== (Bk = Fk.freeCameraController) && void 0 !== Bk && Bk.handlefreeCamKeyPress(Rk, kk, !0) && (kk.preventDefault(), kk.stopPropagation())
      })), kk.inputs.up.on(Rk, (kk => {
        var Fk, Bk;
        null !== (Fk = (0, Nk.b)().client) && void 0 !== Fk && null !== (Bk = Fk.freeCameraController) && void 0 !== Bk && Bk.handlefreeCamKeyPress(Rk, kk, !1) && (kk.preventDefault(), kk.stopPropagation())
      }));
      kk.inputs.down.on("recordGame", (() => {
        var kk, Fk;
        null === (kk = (0, Nk.b)().client) || void 0 === kk || null === (Fk = kk.gameRecorder) || void 0 === Fk || Fk.toggleRecording()
      })), kk.inputs.down.on("recordClip", (() => {
        var kk, Fk;
        (0, Ok.d)() || null === (kk = (0, Nk.b)().client) || void 0 === kk || null === (Fk = kk.gameRecorder) || void 0 === Fk || Fk.saveClip()
      }));
      for (const Rk of Wk.x) kk.inputs.down.on(Rk, (() => {
        var kk;
        if ((0, Ek.b)()) return;
        if ("replayViewerOpen" === Rk) return void ek.o.Hf("replayViewer|requested", "toggle");
        const Fk = null === (kk = (0, Nk.b)().client) || void 0 === kk ? void 0 : kk.gameReplayer;
        ((0, Ok.d)() || null !== Fk && void 0 !== Fk && Fk.isReplayMode()) && (null === Fk || void 0 === Fk || Fk.handleAction(Rk))
      }));
      const Xk = new Yk(3e4),
        Vk = new Lk(4e4);
      let mk = 0;
      const ik = kk => {
          let Fk = 0,
            Bk = null;
          const Rk = Fk => null !== Fk && Fk === Bk && (Bk = null, kk(), !0);
          return {
            press: () => (Fk++, (0, hk.d)() || (Rk(Bk), Bk = Fk), Fk),
            owns: kk => kk === Bk,
            release: Rk
          }
        },
        Mk = (kk, Bk) => {
          Bk && DF(Jk.b.TouchDownFirePrimary), kk ? Dk() : ((0, ck.f)(), Fk().vBk()), Bk || DF(Jk.b.DownFirePrimary), rF(!0), Xk.click();
          const tk = Xk.getMaxClickSeparationInMs(3e4) < 1e3 / 30,
            ak = Xk.getMaxClickSeparationInMs(1e4) < 20,
            bk = Xk.getMaxClickSeparationInMs(4e3) < 1e3 / 70;
          if (tk || ak || bk) {
            let kk;
            if (tk) kk = 30;
            else if (ak) kk = 50;
            else {
              if (!bk) throw new Error("???");
              kk = 70
            }(0, Rk.sendColyMessage)(sk.vk, kk)
          }
        },
        gk = ik((() => {
          const kk = Date.now() - mk;
          Vk.registerClickDownDuration(kk), Fk().fBk(), DF(Jk.b.UpFirePrimary), rF(!1);
          const Bk = Vk.clickDownDurationsCheck(4e4);
          (0, Rk.sendColyMessage)(sk.Xg, Bk)
        }));
      let Uk = 0;
      kk.inputs.down.on("primary-fire", (function(kk) {
        Uk = gk.press(), gk.owns(Uk) && (mk = Date.now(), Math.abs(performance.now() - kk.timeStamp) > 5e3 || (Mk(kk.altKey, "changedTouches" in kk), VF(kk)))
      })), kk.inputs.up.on("primary-fire", (function(kk) {
        gk.release(Uk) && VF(kk, !0)
      }));
      const Gk = () => {
          Fk().Jdk(), DF(Jk.b.DownFireSecondary), rF(!0), kk.tkk && !kk.tkk.position && (0, dk.m)()
        },
        Tk = ik((() => {
          Fk().yBk(), DF(Jk.b.UpFireSecondary), rF(!1)
        }));
      let rk = 0;
      kk.inputs.down.on("alt-fire", (function(kk) {
        rk = Tk.press(), Tk.owns(rk) && (Gk(), VF(kk))
      })), kk.inputs.up.on("alt-fire", (function(kk) {
        Tk.release(rk) && VF(kk, !0)
      }));
      const Dk = () => Fk().ydk();
      kk.inputs.down.on("mid-fire", (() => {
        (0, hk.d)() || Dk()
      }));
      const Zk = kk => {
          (0, Rk.sendColyMessage)(sk.ai, kk, !0)
        },
        tF = kk => {
          (0, Rk.sendColyMessage)(sk.ci, {
            Nb: kk,
            Hb: bF()
          }, !0)
        };
      for (const Rk of ["SpecialAction1", "SpecialAction2"]) kk.inputs.down.on(Rk, (() => {
        Zk(Rk)
      })), kk.inputs.up.on(Rk, (() => {
        tF(Rk)
      }));
      const XF = () => {
        const kk = Fk();
        kk.isGun() && kk.reload(Date.now())
      };
      kk.inputs.down.on("ReloadGun", XF);
      const bF = () => {
        let Fk = "a";
        return kk.physics.testSolid.toString().includes("pJ") || (Fk = "b"), Fk
      };
      kk.inputs.down.on("OpenInventory", (kk => {
        kk.preventDefault(), (0, xk.B)(kk, "inventory", (0, qk.c)((0, Nk.d)()))
      })), kk.inputs.bind("ShiftHeld", "ShiftLeft", "ShiftRight");
      const wF = kk => {
        ek.o.Hf("DropItemKeyPressed", kk)
      };
      kk.inputs.down.on("DropItem", (() => {
        wF(kk.Tv.HFk().crouch)
      })), kk.inputs.down.on("OpenShop", (Fk => {
        (0, Ok.d)() || "inGame" === Sk.c.get("gameState") && (0, xk.x)(Fk, Ak.p.SHOP, !(0, tk.b)(kk.Fv.shopInfo))
      })), kk.inputs.down.on("OpenLobbyLeaderboard", (Fk => {
        (0, Ok.d)() || "inGame" === Sk.c.get("gameState") && (0, xk.x)(Fk, Ak.p.LOBBY_LEADERBOARD, !!kk.Fv.lobbyLeaderboardInfo)
      })), kk.inputs.down.on("HideUi", (() => {
        ek.o.Hf("showUi", !1)
      })), kk.inputs.up.on("HideUi", (() => {
        ek.o.Hf("showUi", !0)
      }));
      const sF = kk => {
        0 === kk && (kk = 10), ek.o.Hf("setSelectedInventorySlotI", kk - 1), ek.o.Hf("numkeyPressed", kk)
      };
      for (let Rk = 1; Rk <= 10; Rk++) kk.inputs.down.on("HotBarSlot" + Rk.toString(), (() => {
        sF(Rk)
      }));
      kk.inputs.down.on("OpenTasksAndLeaderboard", (Fk => {
        const Bk = (0, jk.l)();
        Bk ? (0, xk.F)(Fk, !0, Bk) : (0, xk.B)(Fk, "retentionFeatures", !(!kk.Fv._tasks && !kk.Fv._availableLeaderboards))
      })), kk.inputs.down.on("OpenCodeEditor", (Fk => {
        (0, xk.F)(Fk, (0, uk.b)((0, Hk.e)()), (() => {
          ek.o.Hf("EditLobbyCode", kk.Tv.rW(kk.DH).map(Math.floor))
        }))
      })), kk.inputs.bind("ToggleFullCoordinateOverlay", "F3"), kk.inputs.down.on("ToggleFullCoordinateOverlay", (() => {
        ek.o.Hf("toggleFullCoordinateOverlay")
      }));
      const AF = () => {
        (0, Nk.b)().client.cameraController.swapCameraZoom()
      };
      kk.inputs.down.on("SwapCameraZoom", AF), kk.inputs.down.on("OpenInviteLink", (kk => {
        (0, xk.B)(kk, "inviteLink", fk.featureFlags.canUseInviteLinks)
      })), kk.inputs.bind("Y", "KeyY"), kk.inputs.down.on("Y", (kk => {
        (0, Ok.d)() || ek.o.Hf("YKeyPressed")
      })), kk.inputs.bind("X", "KeyX"), kk.inputs.down.on("X", (kk => {
        (0, Ok.d)() || ek.o.Hf("XKeyPressed")
      })), kk.inputs.down.on("OpenEmoteWheel", (() => {
        ek.o.Hf("requestEmoteWheelHoldOpen")
      })), kk.inputs.up.on("OpenEmoteWheel", (() => {
        ek.o.Hf("requestEmoteWheelHoldRelease")
      })), kk.inputs.down.on("Zoom", (() => {
        if ("inGame" === Sk.c.get("gameState")) {
          kk.Tv.getState(kk.DH, "playerCameraAdjustment").zoomKeyPressed = !0, (0, Nk.b)().client.cameraController.handleZoomKeyPressed()
        }
      })), kk.inputs.up.on("Zoom", (() => {
        kk.Tv.getState(kk.DH, "playerCameraAdjustment").zoomKeyPressed = !1
      })), HF();
      const eF = kk => function() {
        return JF(), kk(...arguments)
      };

      function yF(kk) {
        "inGame" !== Sk.c.get("gameState") || (0, xk.v)() || (ek.o.Hf("ctrlCrouchWithoutFullscreen"), kk.preventDefault())
      }
      dF = {
        primaryFireDown: eF((() => {
          const kk = gk.press();
          return gk.owns(kk) && (mk = Date.now(), Mk(!1, !1)), kk
        })),
        primaryFireUp: eF((kk => {
          gk.release(kk)
        })),
        altFireDown: eF((() => {
          const kk = Tk.press();
          return Tk.owns(kk) && Gk(), kk
        })),
        altFireUp: eF((kk => {
          Tk.release(kk)
        })),
        jumpDown: eF(Bk),
        specialActionDown: eF(Zk),
        specialActionUp: eF(tF),
        reloadGun: eF(XF),
        dropItem: eF(wF),
        swapCameraZoom: eF(AF),
        pickBlock: eF(Dk)
      }, kk.inputs.down.on("ctrlCrouch", yF), kk.inputs.up.on("ctrlCrouch", yF), kk.inputs.bind("ctrlCrouch", "ControlLeft");
      const fF = kk => {
        "inGame" === Sk.c.get("gameState") && kk.ctrlKey && !(0, xk.v)() && kk.preventDefault()
      };
      document.addEventListener("keydown", fF), document.addEventListener("keyup", fF), document.addEventListener("keypress", fF), kk.inputs.bind("Alt", "AltLeft", "AltRight"), kk.inputs.down.on("Alt", (kk => {
        kk.preventDefault()
      }));
      const mF = Fk => (0, pk.i)(kk, Fk),
        WF = Fk => (0, pk.m)(kk, Fk),
        vF = [0, 0, 0],
        iF = [0, 0, 1];
      kk.on("afterRender", (Fk => {
        (0, ak.g)(kk.camera.heading), (0, pk.n)(kk, vF, iF), (0, Nk.b)().client.triggerGameCallback("onAfterRender", Fk, {
          cameraHeading: kk.camera.heading,
          cameraPitch: kk.camera.pitch,
          cameraPosition: vF,
          cameraDirection: iF,
          tanHalfFovX: (0, pk.e)(kk),
          tanHalfFovY: Math.tan(kk.Ly.Qp().fov / 2),
          screenBandPct: {
            x: Kk.c,
            y: (0, Kk.h)()
          },
          projectWorldPosToScreenPos: mF,
          projectWorldPosToViewport: WF
        })
      })), (0, lk.p)("look") && (kk.camera.bD = (0, nk.i)("js"), kk.inputs.lD = nk.f), (0, lk.p)("remesh") && (0, Ik.l)(kk), kk.on("beforeInputs", (() => {
        if ((0, Ek.b)()) return kk.inputs.nD.dx = 0, void(kk.inputs.nD.dy = 0);
        if (kk.camera.nD.dx += kk.inputs.nD.dx, kk.camera.nD.dy += kk.inputs.nD.dy, 0 !== kk.inputs.nD.dx || 0 !== kk.inputs.nD.dy) {
          kk.Tv.getState(kk.DH, "playerCameraAdjustment").lastPointerMove = Date.now()
        }
        kk.inputs.nD.dx = 0, kk.inputs.nD.dy = 0
      }));
      let YF = 0;
      kk.on("yJ", (function(Fk) {
        ek.o.Hf("noaTick", Fk);
        const Bk = (0, Nk.b)().client;
        if (Bk.triggerGameCallback("yJ", Fk), Bk.isClientGameSessionActive()) try {
          wk.c.yJ(Fk)
        } catch (Xk) {
          console.error("Error ticking audio entities", Xk)
        }
        if (!kk.Tv.YFk(kk.DH).isAlive) return;
        Date.now() - YF > 9e3 && (! function() {
          const kk = (0, Nk.d)();
          "number" === typeof kk.Fv.speedMultiplier && "number" === typeof kk.Fv.jumpAmount && (0, Rk.sendColyMessage)(sk.Di, {
            zX: (0, zk.e)(kk.Fv.speedMultiplier),
            PX: (0, zk.b)(kk.Fv.jumpAmount),
            hX: (0, zk.e)(kk.Fv.crouchingSpeed),
            qX: (0, zk.e)(kk.Fv.walkingSpeed),
            CX: (0, zk.e)(kk.Fv.runningSpeed),
            ZX: (0, zk.b)(kk.o9),
            pX: kk.Tv.ckk(kk.DH).jumpForce,
            KX: kk.Tv.Qq(1).width,
            xX: kk.Tv.Qq(1).height,
            jX: kk.Tv.nG(1).jX
          }, !0)
        }(), YF = Date.now());
        const tk = kk.Tv.HFk();
        if ((tk.jump || tk.forward || tk.backward || tk.left || tk.right || tk.sprint) && ek.o.Hf("usedKeyboard"), kk.Tv.aFk(kk.DH) && !0 === kk.Fv.canPickUpItems) {
          const Fk = kk.Tv.rW(kk.DH),
            Bk = (0, vk.l)(aF),
            tk = (0, vk.m)(aF),
            ak = [Fk[0] - Bk, Fk[1] - .6 * tk, Fk[2] - Bk],
            Xk = [Fk[0] + Bk, Fk[1] + Pk.h.FW + .6 * tk, Fk[2] + Bk],
            wk = kk.Tv.ybk({
              base: ak,
              max: Xk
            }, kk.Tv.names.autoRotate),
            Vk = kk => {
              const Fk = Pk.h.droppedBlockSize / 2;
              return [0, 1, 2].every((Bk => kk[Bk] >= ak[Bk] - Fk && kk[Bk] <= Xk[Bk] + Fk))
            },
            {
              itemDropPrediction: Jk
            } = (0, Nk.b)().client,
            Ak = Rk.offlineInputReplay.holdsInput();
          if (wk.length > 0)
            for (const ek of wk) {
              const Fk = kk.Tv.getState(ek, "itemState");
              if (void 0 === Fk || Date.now() - Fk.creationTime < 500) continue;
              let Bk = ek,
                tk = null;
              if (Fk.RR) {
                const kk = Jk.pickupTarget(ek, Vk, Ak);
                if (null === kk) continue;
                ({
                  Td: Bk,
                  zd: tk
                } = kk)
              }
              const ak = kk.Tv.getState(Bk, "itemState");
              if (ak.RR && null === tk) continue;
              let Xk = 0,
                wk = null,
                yk = !1;
              if (0 === ak.amount) yk = !0;
              else {
                const {
                  amountPickedUp: Fk
                } = kk.Tv.RFk(kk.DH).pickUpItem({
                  name: ak.name,
                  typeObj: ak.typeObj,
                  amount: ak.amount,
                  attributes: ak.attributes
                });
                if (Xk = Fk, 0 === Xk) continue;
                wk = Ck.d.pickUp(ak, Xk), ak.amount -= Xk, ak.amount < 0 ? console.error("Picking up led to less than 0 of item!") : 0 === ak.amount ? yk = !0 : ak.creationTime = Date.now() + BF
              }
              const fk = (0, Nk.b)().client.inventoryPrediction.record(wk);
              (0, Rk.sendColyMessage)(sk.Wh, {
                Td: null === tk ? Bk : "",
                rd: Xk,
                Dd: dk.i,
                YX: fk,
                zd: tk
              }, !0), yk && (Ak && Jk.onPickedUpOffline(Bk, fk, tk), null === tk && kk.Tv.deleteEntity(Bk));
              bk.c.play("pickUp", Pk.h.pickupSoundVol).rate(1 + Math.random() * Pk.h.pickupSoundRateVariation)
            }
        }
        if (!kk.Tv.xkk(kk.DH)) return;
        const ak = kk.inputs.nD.zkk;
        if (0 !== ak) {
          const Fk = ak > 0 ? 1 : -1;
          kk.inputs.state["mid-fire"] || kk.inputs.state.Alt || !kk.Fv.useInventory ? (kk.inputs.state["mid-fire"] && ek.o.Hf("requestEmoteWheelClose"), (0, Nk.b)().client.cameraController.handleScrollZoom(Fk)) : ek.o.Hf("ScrollInventorySlot", Fk)
        }
      })), yk.b.subscribe("droppedItemScale", (kk => {
        aF = "number" === typeof kk && isFinite(kk) ? kk : RF
      }))
    }

    function HF() {
      const kk = (0, Nk.d)();
      if (kk)
        for (const Fk in Wk.s) {
          kk.inputs.unbind(Fk);
          for (const Bk of Wk.s[Fk]) kk.inputs.bind(Fk, Bk)
        }
    }
    SF(eF = {}, yF = ["mIf4o(LkD~UA&UsknhcxD&Eo>i_2]ggSjPHSA6W#g", ';f2"E%Vxn~eUTy0j0K%*/*dqcXX64X>GXmERjCOuCzK)h5;G', "ZyyaT@T7GkR@mA$F7y,F%CYk<B", '[0mx}30Fl?M.~&|P[Up:#"!BYQTn5UmG3{[08#,Ge?PGaVwjfXen', "sP*Sq6BzNB]", ">67:6*fo>$?G`rsV{ird_#=Rjzes.|dSYR)y7xE", ")6Tv0<kkQv{0E", "lPK4(W:q&n#s<!]YdQbF0oRH6k^=ZmlP2S$S(W>F!Xu|frNHyRnV$z?QNvG", "#~RS7zMcor@oL", "LgjvK0xr~2.2?>O", ",j/pp5Ad$*Ux}X>Y[slO%$pdHX4", "Oynv~<rqlk_<M1*qrX.hy+Oo3YC:S.IeQP?vV8Y1yisxXV(aC#y|5@sc", "QQ=3D,<q1Qv=qMxju610N|?BonUf$r_a{sp:)2|q4?eG<5IjO9N4i+U)g", 'wAC7s<6uh#oU3X"kxRzT&zhB"*DAL', "lmQxaGd*x>$an5&m9s(y((lG<2N@z=Xe?RiFK{*dw$32<2sisyPVk$_tn~I", 'pt(So]?Hu{?l"5jqP&=Sr#HQwY,XL', ";W(m}3@4E2o`hVGHe&Rd9fP7o?ZSW5FFJ~o:DwDr5rXVL", "lt~v/@Hw3$r~oy%PxY#4F1OoHQk&a1HoVy!vPvETB$a@1X8m", '*nMRUfhw99h@Wg^qmvAO74G<1*hij5BmyAudy2p9h2P0"g?A+Wd7T&E', "[=MRi>KHTrOMGzR", 'TB3"1z&Pp?L5Izmq)Yeg%CJouD!|%y)k2P?R@y+PNX', "[i93|=MT4kG", "j62*2=tkz>/{+jGHdL", "s|J|I.cH~BW3X>cJf62w@:erb>F5{J0jdL", '!W_a<yOo2{%B.<tqoUv:[(Xrl?%{f]xC.>O"w<Lrg', "Ogrd_(KJ0ia48j/SkQJH_yO7JY0GhycopQ@3s:CcbDqYz)yA@>Ups", "Uthn<7m7!n0{|2WVXn|v((E", '"4JxR[7QSlA3eC~AVI^hI057fBD5#</Y1~NhHvwJPicHzAgI*#1nH', "$~!Rl7D)erkShV=S", "}&Jv1|:LMnUvN&zFE#C7j8q#)rf@HpYm~E", "%&adA6aQXX3!>.hHYuU", "gBQ4HPeL[rgM<&dj6&~vyf(d*k?0E%_q[&B:J+E", 'Ft"ym,p9Z?%Xp5ej1~UO()njW{N@CjNYbA6*+|^J;isH5Vbj,E', "Fw2*D&A1ITB@x,JG9>m4TwsTg", "oB^h+z+7ni;<NM%qEn6+(#kkms", 'X#a"a7j1<9Y~Krsmo2V5;#oc', "G4e|@:9r6?zs~J!e=0.4E[IGd", "?tC3T$bc", "m6cVOowH2*C", 'jX6"19@4[khJvjbecFowY3G#d?Qxuc', "DB>TywS#ms4", 'qRC7PGWG`9;"m<!V2$>Ow$n*b~_Ftc', "o4wp0&NqQ#3oMV!f6ULH4eHc|Q(=a,ao^~[nw3zz2{M55XUA", "!0Ev?eT7}Y49ICVY4UOx(+LruQP3t.0S#nc", '.ArSB[KHY2"Ll5FG|m<R7.x4miH5c<StqIfx}C5Bd', 'A4x"}C<L&9/QQ]^onPmVQ+8fk2&g}1SFYPU', "d6nV|{NG7rt&PVCSCviw:%|G^s/!J1~YJ4awk", "5v4wP9^fz~./MoAJ{4Fg;7$R|BZ3ty0jpm^T", "I$e3Q<E", "h#:|7.}7{zjRlowm)iAd1.ac", "Mu@vky<G^i", "}UaFX,2!bT6=AABip9sd", "AIYv#5EQDs90y,nSt2bO.,,Gir|3S,FGcQ|V:z%J?2dn},}aSwMnPx<(WD*", "YhP|b{7?k#(Z%X~Jf#,hbARu?BjJ*&T", 'Ay"y!3kF1BV$n%}Md6Wa,$E', "DI:7.3~tdz]a4=^a#4Vh,<^uon,QiXPS:y9vz=0q%kMxlMLY", "*nG5S1r<W**!LpVqy$#4}7qG4vX~L", ";$j87eTJa~iU5y`A44?|W.X*LBZAdCtFYhU", "sh>FD+Ur|`HfL", 'du;R#4DqFstzSmrkmm|vC1|r"QSf7U|m}YqV)wgzv?xuu|iPSw.T<ozcxi', "TBt|&.E", "A&0Tu.(F0id6y,tFR#Mn", "ly2:U$8[h2LntCAkvyVFcu?w!Qfs02^aNn>FH]vP3*/le.`J`fEna", "NwudK=t*ms", "`$N4!w6u^$:=~rzK>&T8%)7c;sSS%1TC$$2FS057qz60L", "(Ss:P0lq2$r:z]iVp|eHe(/rB>N~^)FG,=9|i$@@5i7", "Y2yvR&VG!Q^kL", "WR@7`5!B4B", "[~VO*xo!!B^k:.?J:E", "/tnV!,ek|B`aJU9Y/W*a%ypjYX&>bU~JJXc", "<s93Z);G4nulkmpH_WnR", "?t3F19E", "rQOVI]w7<#QUHpUJ`6k5~u}u99RHHpneo2=3m", 'z&m5_yOo#zx9*2_Z[U9|]22QRzR@ss?oTGBF"#`u?#!X[<oHH#c', "}sBOT[8wW*Q$3,zqfn$g8W/L`nL5#o*V1~aSu.Quyrgvo>R", "sn*SKGN9nYgML", 'I6m"qvl<1X;2vA#G/$>F24rkb{~lxm>YjL', "8YYR^,>L", 'b6/"o6OHDs[/J1SAPy(S=::tDYt@b1!f(Ss:GxlG3Y8"kXTm)iu:O<co{~a', "XIC:[(>1inKsl&]o$$Ad@+K7U", "T9$:K!F)Q2+aEVHo(4ZdGGU9ArG&MUoY;~bw|=Uqd?T6.m1VqFnHC!,FU", '8654P{"r1X"D<&%Phv|5yfOJ(?t4fp', 'W6un=o<LQkud"5QiX4*d^>?Hd:}k<gdC!03FguRT;iw"_yUQ=&Zn8wzu^i:', "64GhG1y9wiL.Fg", "+AaOk<#L", "][*kfU|0", 'Y#L)flC"', "xVHe>3h7", "v;A5`Se2", "b(][{fQE", "5=,_U6HH", "CrJj", "5JCdUWD2", "RCgdHqZ2", ";s=h4|D2", "?V:jZ~(7", "qI<ou3a", "?vHee3#7", "!ty!>cfd", "@iv4:*?", "A(Mts)5@", "$;U);S4@", "j[t8", 'jwaOcAZ"', "n[(/0Nsz)M", '*f&im/v,"&', "w^/XWt?h?=", "PjWRy$iiG.", "qk+Vj$s*", ",eWC`@`SX3qrv", 'T"ElQza*&)b{}', "1fYX[TaGm`A8}", '{"7/*<aG<_V8v', "ahrbgUJ{}u4av", "m(n/48aGEV{:}", '1DxbKnH*d6OQ8YfblhkRBFc#,?G2"SG', "l6=RmrM8.moa|%0jS28Qdq%eFl>ai?f", "JJVw/7G7k`OQ*Qu_122/+q^3l)03]nG", 'c"3ihqG7R)~TY~K_4Y%wS7.0{AFnT~5', "4YiQvsQ#,?6a|%0jS24Qdq%e[&^:{P&", "VhiQNH/^J)03o,{Z4!9;YqJGZg>:}", "E5@mgS_", "(ZQ{Sm0A", "XX|{ACBO", "ab3/AfD", 'xP]3+"IA']), SF(fF = function(...kk) {
      SF(kk[LF[12]] = LF[1], kk[-LF[15]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], kk[-LF[13]] = LF[18], kk[LF[0]] = []);
      try {
        SF(kk[-LF[13]] = Object, kk[LF[0]][LF[26]]("".__proto__.constructor.name))
      } catch (yF) {}
      kk: for (kk[LF[14]] = LF[1]; kk[LF[14]] < kk[-LF[15]][LF[12]]; kk[LF[14]]++) try {
        for (kk[-LF[13]] = kk[-LF[15]][kk[LF[14]]](), kk[-LF[16]] = LF[1]; kk[-LF[16]] < kk[LF[0]][LF[12]]; kk[-LF[16]]++)
          if (typeof kk[-LF[13]][kk[LF[0]][kk[-LF[16]]]] === LF[17]) continue kk;
        return kk[-LF[13]]
      } catch (yF) {}
      return kk[-LF[13]] || this
    }() || {}, mF = fF.TextDecoder, WF = fF.Uint8Array, vF = fF.Ge, iF = fF.String || String, YF = fF.Array || Array, oF = function(...kk) {
      return SF(kk[LF[12]] = LF[1], kk[LF[27]] = new YF(128), kk[LF[19]] = iF[LF[24]] || iF.fromCharCode, kk[LF[20]] = []),
        function(...Fk) {
          for (SF(Fk[LF[12]] = LF[2], Fk[LF[2]] = LF[18], Fk[LF[19]] = LF[18], Fk[LF[4]] = Fk[LF[1]][LF[12]], kk[LF[20]][LF[12]] = LF[1]), Fk[-LF[21]] = LF[1]; Fk[-LF[21]] < Fk[LF[4]];) SF(Fk[LF[19]] = Fk[LF[1]][Fk[-LF[21]]++], Fk[LF[19]] <= 127 ? Fk[LF[2]] = Fk[LF[19]] : Fk[LF[19]] <= 223 ? Fk[LF[2]] = (31 & Fk[LF[19]]) << LF[23] | Fk[LF[1]][Fk[-LF[21]]++] & LF[22] : Fk[LF[19]] <= 239 ? Fk[LF[2]] = (15 & Fk[LF[19]]) << LF[25] | (Fk[LF[1]][Fk[-LF[21]]++] & LF[22]) << LF[23] | Fk[LF[1]][Fk[-LF[21]]++] & LF[22] : iF[LF[24]] ? Fk[LF[2]] = (Fk[LF[19]] & LF[9]) << 18 | (Fk[LF[1]][Fk[-LF[21]]++] & LF[22]) << LF[25] | (Fk[LF[1]][Fk[-LF[21]]++] & LF[22]) << LF[23] | Fk[LF[1]][Fk[-LF[21]]++] & LF[22] : (Fk[LF[2]] = LF[22], Fk[-LF[21]] += LF[4]), kk[LF[20]][LF[26]](kk[LF[27]][Fk[LF[2]]] || (kk[LF[27]][Fk[LF[2]]] = kk[LF[19]](Fk[LF[2]]))));
          return kk[LF[20]].join("")
        }
    }()), SF(AF = (...kk) => {
      kk[LF[12]] = LF[2],
        function(...kk) {
          return kk[LF[12]] = LF[2], typeof eF[kk[LF[1]]] === LF[17] ? eF[kk[LF[1]]] = function(...kk) {
            for (SF(kk[LF[12]] = LF[2], kk[LF[2]] = '/}08)"x!`y9{[1wz^@fpMS&>b7%cWk+5tq:sH4$]omj#.NvTIL|=(V<23B,uD?UORGdlnreYXgFKQCPaJ_EA*iZh6;~', kk[LF[0]] = "" + (kk[LF[1]] || ""), kk[-LF[25]] = kk[LF[0]].length, kk[LF[10]] = [], kk[LF[8]] = LF[1], kk[LF[23]] = LF[1], kk[LF[9]] = -LF[2]), kk[LF[3]] = LF[1]; kk[LF[3]] < kk[-LF[25]]; kk[LF[3]]++)
              if (kk[LF[31]] = kk[LF[2]].indexOf(kk[LF[0]][kk[LF[3]]]), kk[LF[31]] !== -LF[2])
                if (kk[LF[9]] < LF[1]) kk[LF[9]] = kk[LF[31]];
                else {
                  SF(kk[LF[9]] += kk[LF[31]] * LF[32], kk[LF[8]] |= kk[LF[9]] << kk[LF[23]], kk[LF[23]] += (kk[LF[9]] & LF[33]) > LF[34] ? LF[35] : LF[36]);
                  do {
                    SF(kk[LF[10]].push(kk[LF[8]] & LF[11]), kk[LF[8]] >>= LF[3], kk[LF[23]] -= LF[3])
                  } while (kk[LF[23]] > LF[9]);
                  kk[LF[9]] = -LF[2]
                } return kk[LF[9]] > -LF[2] && kk[LF[10]].push((kk[LF[8]] | kk[LF[9]] << kk[LF[23]]) & LF[11]), OF(kk[LF[10]])
          }(yF[kk[LF[1]]]) : eF[kk[LF[1]]]
        }(85) + "5" in EF && function() {
          var kk = function(...kk) {
            for (SF(kk[LF[12]] = LF[2], kk[LF[5]] = kk[LF[1]].length, kk[LF[19]] = [], kk[LF[37]] = LF[1], kk[-LF[39]] = LF[1], kk[LF[1]].sort(((kk, Fk) => kk - Fk))), kk[LF[38]] = LF[1]; kk[LF[38]] < kk[LF[5]]; kk[LF[38]]++)
              if (!(kk[LF[38]] > LF[1] && kk[LF[1]][kk[LF[38]]] === kk[LF[1]][kk[LF[38]] - LF[2]]))
                for (SF(kk[LF[37]] = kk[LF[38]] + LF[2], kk[-LF[39]] = kk[LF[5]] - LF[2]); kk[LF[37]] < kk[-LF[39]];)
                  if (kk[LF[1]][kk[LF[38]]] + kk[LF[1]][kk[LF[37]]] + kk[LF[1]][kk[-LF[39]]] < LF[1]) kk[LF[37]]++;
                  else if (kk[LF[1]][kk[LF[38]]] + kk[LF[1]][kk[LF[37]]] + kk[LF[1]][kk[-LF[39]]] > LF[1]) kk[-LF[39]]--;
            else {
              for (kk[LF[19]].push([kk[LF[1]][kk[LF[38]]], kk[LF[1]][kk[LF[37]]], kk[LF[1]][kk[-LF[39]]]]); kk[LF[37]] < kk[-LF[39]] && kk[LF[1]][kk[LF[37]]] === kk[LF[1]][kk[LF[37]] + LF[2]];) kk[LF[37]]++;
              for (; kk[LF[37]] < kk[-LF[39]] && kk[LF[1]][kk[-LF[39]]] === kk[LF[1]][kk[-LF[39]] - LF[2]];) kk[-LF[39]]--;
              SF(kk[LF[37]]++, kk[-LF[39]]--)
            }
            return kk[LF[19]]
          };
          console.log(kk)
        }(), kk[LF[40]] = LF[1];
      for (const Fk in kk[LF[1]]) kk[LF[40]]++;
      return kk[LF[40]]
    }, JF = (...kk) => {
      kk[LF[12]] = LF[1],
        function(...kk) {
          return kk[LF[12]] = LF[2], typeof eF[kk[LF[1]]] === LF[17] ? eF[kk[LF[1]]] = function(...kk) {
            for (SF(kk[LF[12]] = LF[2], kk[LF[5]] = '0."}^5noA)?TRUuvLe2x{,3VMB!=#yPW:&mkt9XzCO8JFQcfi_>NZ%qGKjS+*$[@b(~4pwlH1D6s/I]drhaY<E`7|;g', kk[LF[41]] = "" + (kk[LF[1]] || ""), kk[LF[4]] = kk[LF[41]].length, kk[LF[10]] = [], kk[LF[38]] = LF[1], kk[LF[43]] = LF[1], kk[LF[9]] = -LF[2]), kk[LF[3]] = LF[1]; kk[LF[3]] < kk[LF[4]]; kk[LF[3]]++)
              if (kk[LF[42]] = kk[LF[5]].indexOf(kk[LF[41]][kk[LF[3]]]), kk[LF[42]] !== -LF[2])
                if (kk[LF[9]] < LF[1]) kk[LF[9]] = kk[LF[42]];
                else {
                  SF(kk[LF[9]] += kk[LF[42]] * LF[32], kk[LF[38]] |= kk[LF[9]] << kk[LF[43]], kk[LF[43]] += (kk[LF[9]] & LF[33]) > LF[34] ? LF[35] : LF[36]);
                  do {
                    SF(kk[LF[10]].push(kk[LF[38]] & LF[11]), kk[LF[38]] >>= LF[3], kk[LF[43]] -= LF[3])
                  } while (kk[LF[43]] > LF[9]);
                  kk[LF[9]] = -LF[2]
                } return kk[LF[9]] > -LF[2] && kk[LF[10]].push((kk[LF[38]] | kk[LF[9]] << kk[LF[43]]) & LF[11]), OF(kk[LF[10]])
          }(yF[kk[LF[1]]]) : eF[kk[LF[1]]]
        }(86) in EF && function(...kk) {
          kk[LF[12]] = LF[1]
        }(), XF++ === LF[8] && ((LF[1], mk.m)() && (LF[1], Vk[LF[19]])("4 "), XF = LF[1])
    }), VF = function(kk) {
      function Fk(...kk) {
        return kk[LF[12]] = LF[2], typeof eF[kk[LF[1]]] === LF[17] ? eF[kk[LF[1]]] = function(...kk) {
          for (SF(kk[LF[12]] = LF[2], kk[LF[2]] = 'a27ydDkZOpj]`t"VR{?TH:cx$whE#g)Wl9^%(CL!|@Qr,J80SX_5Pof6BbFqvGIzKYA&;MNmUs~*ie>.u31=<4}[/+n', kk[LF[19]] = "" + (kk[LF[1]] || ""), kk[LF[44]] = kk[LF[19]].length, kk[-LF[46]] = [], kk[LF[38]] = LF[1], kk[LF[23]] = LF[1], kk[LF[45]] = -LF[2]), kk[LF[3]] = LF[1]; kk[LF[3]] < kk[LF[44]]; kk[LF[3]]++)
            if (kk[LF[42]] = kk[LF[2]].indexOf(kk[LF[19]][kk[LF[3]]]), kk[LF[42]] !== -LF[2])
              if (kk[LF[45]] < LF[1]) kk[LF[45]] = kk[LF[42]];
              else {
                SF(kk[LF[45]] += kk[LF[42]] * LF[32], kk[LF[38]] |= kk[LF[45]] << kk[LF[23]], kk[LF[23]] += (kk[LF[45]] & LF[33]) > LF[34] ? LF[35] : LF[36]);
                do {
                  SF(kk[-LF[46]].push(kk[LF[38]] & LF[11]), kk[LF[38]] >>= LF[3], kk[LF[23]] -= LF[3])
                } while (kk[LF[23]] > LF[9]);
                kk[LF[45]] = -LF[2]
              } return kk[LF[45]] > -LF[2] && kk[-LF[46]].push((kk[LF[38]] | kk[LF[45]] << kk[LF[23]]) & LF[11]), OF(kk[-LF[46]])
        }(yF[kk[LF[1]]]) : eF[kk[LF[1]]]
      }
      if ((arguments[Fk(87)] > LF[2] && arguments[LF[2]] !== LF[18] ? arguments[LF[2]] : LF[29]) && (LF[1], Zk[LF[77]])(kk)) {
        function tk(...kk) {
          function Fk(...kk) {
            return kk[LF[12]] = LF[2], typeof eF[kk[LF[1]]] === LF[17] ? eF[kk[LF[1]]] = function(...kk) {
              for (SF(kk[LF[12]] = LF[2], kk[LF[5]] = '>HEdPJDjZ=~?%F]tiRQx03X.ve89WC1{_wpTlY$(Bc;y7k5)a[<h2#OUV+4|qzGL}!A,NS6f"gr*mK@`Ib&n:sMo^/u', kk[LF[0]] = "" + (kk[LF[1]] || ""), kk[LF[20]] = kk[LF[0]].length, kk[LF[14]] = [], kk[LF[50]] = LF[1], kk[LF[51]] = LF[1], kk[LF[49]] = -LF[2]), kk[LF[47]] = LF[1]; kk[LF[47]] < kk[LF[20]]; kk[LF[47]]++)
                if (kk[-LF[48]] = kk[LF[5]].indexOf(kk[LF[0]][kk[LF[47]]]), kk[-LF[48]] !== -LF[2])
                  if (kk[LF[49]] < LF[1]) kk[LF[49]] = kk[-LF[48]];
                  else {
                    SF(kk[LF[49]] += kk[-LF[48]] * LF[32], kk[LF[50]] |= kk[LF[49]] << kk[LF[51]], kk[LF[51]] += (kk[LF[49]] & LF[33]) > LF[34] ? LF[35] : LF[36]);
                    do {
                      SF(kk[LF[14]].push(kk[LF[50]] & LF[11]), kk[LF[50]] >>= LF[3], kk[LF[51]] -= LF[3])
                    } while (kk[LF[51]] > LF[9]);
                    kk[LF[49]] = -LF[2]
                  } return kk[LF[49]] > -LF[2] && kk[LF[14]].push((kk[LF[50]] | kk[LF[49]] << kk[LF[51]]) & LF[11]), OF(kk[LF[14]])
            }(yF[kk[LF[1]]]) : eF[kk[LF[1]]]
          }
          kk[LF[12]] = LF[1];
          const Bk = require("path"),
            {
              version: Rk
            } = require("../../package"),
            {
              version: tk
            } = require("@redacted/enterprise-plugin/package"),
            {
              version: ak
            } = require("@redacted/components/package"),
            {
              sdkVersion: Xk
            } = require("@redacted/enterprise-plugin");
          require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), Bk.resolve(__dirname, Fk(89) + Fk(90) + "js")
        }
        return void(Fk(LF[34]) in EF && tk())
      }
      const Bk = Date[Fk(LF[32])]() < new Date(Fk(LF[49]) + Fk(LF[58]) + Fk(94) + "0Z")[Fk(95) + LF[38]](),
        Rk = window[Fk(LF[52])];
      if (typeof Rk !== Fk(97) + "on" || kk instanceof Rk || (LF[1], rk.D)(kk)) {
        function ak(kk) {
          var Fk, Bk, Rk, tk, ak, Xk, bk;
          for (SF(Fk = "" + (kk || ""), Bk = Fk.length, Rk = [], tk = LF[1], ak = LF[1], Xk = -LF[2]), bk = LF[1]; bk < Bk; bk++) {
            var wk = 'Ak@1l:L}8x^>aXw[Bh~=.iv+M]&b37,j`0"fTH6U/Zz!9GgR4|?r)u;$*(<qoe5{%2#_QVmdFYCtDOIEnKSWcNsJPpy'.indexOf(Fk[bk]);
            if (wk !== -LF[2])
              if (Xk < LF[1]) Xk = wk;
              else {
                SF(Xk += wk * LF[32], tk |= Xk << ak, ak += (Xk & LF[33]) > LF[34] ? LF[35] : LF[36]);
                do {
                  SF(Rk.push(tk & LF[11]), tk >>= LF[3], ak -= LF[3])
                } while (ak > LF[9]);
                Xk = -LF[2]
              }
          }
          return Xk > -LF[2] && Rk.push((tk | Xk << ak) & LF[11]), OF(Rk)
        }

        function Xk(kk) {
          return typeof eF[kk] === LF[17] ? eF[kk] = ak(yF[kk]) : eF[kk]
        }

        function bk(...kk) {
          function Fk() {}
          kk[LF[12]] = LF[1], SF(kk[-LF[67]] = function(...kk) {
            for (SF(kk[LF[12]] = LF[0], kk[-LF[66]] = LF[1], kk[LF[65]] = LF[1], kk[-LF[63]] = new Fk(LF[1]), kk[LF[8]] = kk[-LF[63]], kk[LF[64]] = kk[LF[1]], kk[LF[9]] = kk[LF[2]]); kk[LF[64]] !== LF[59] || kk[LF[9]] !== LF[59];) SF(kk[LF[65]] = (kk[LF[64]] ? kk[LF[64]].val : LF[1]) + (kk[LF[9]] ? kk[LF[9]].val : LF[1]) + kk[-LF[66]], kk[-LF[66]] = Math.floor(kk[LF[65]] / LF[61]), kk[LF[8]].next = new Fk(kk[LF[65]] % LF[61]), kk[LF[8]] = kk[LF[8]].next, kk[LF[64]] = kk[LF[64]] ? kk[LF[64]].next : LF[59], kk[LF[9]] = kk[LF[9]] ? kk[LF[9]].next : LF[59]);
            return kk[-LF[66]] && (kk[LF[8]].next = new Fk(kk[-LF[66]])), kk[-LF[63]].next
          }, console.log(kk[-LF[67]]))
        }
        if (Xk(100) in EF && bk(), kk[Xk(101) + Xk(102)] === LF[29]) {
          function wk(...kk) {
            for (SF(kk[LF[12]] = LF[2], kk[LF[5]] = '_"~(u.*@0LG!D2KkhF+J:}%Zt=3I{1BvfeTsVdc^|yU)4o`gEAHlCj&NX5n?/b<6xw89piq#MOzSmP][W,$r>RaYQ7;', kk[LF[53]] = "" + (kk[LF[1]] || ""), kk[LF[4]] = kk[LF[53]].length, kk[LF[10]] = [], kk[LF[8]] = LF[1], kk[LF[68]] = LF[1], kk[LF[43]] = -LF[2]), kk[LF[3]] = LF[1]; kk[LF[3]] < kk[LF[4]]; kk[LF[3]]++)
              if (kk[LF[47]] = kk[LF[5]].indexOf(kk[LF[53]][kk[LF[3]]]), kk[LF[47]] !== -LF[2])
                if (kk[LF[43]] < LF[1]) kk[LF[43]] = kk[LF[47]];
                else {
                  SF(kk[LF[43]] += kk[LF[47]] * LF[32], kk[LF[8]] |= kk[LF[43]] << kk[LF[68]], kk[LF[68]] += (kk[LF[43]] & LF[33]) > LF[34] ? LF[35] : LF[36]);
                  do {
                    SF(kk[LF[10]].push(kk[LF[8]] & LF[11]), kk[LF[8]] >>= LF[3], kk[LF[68]] -= LF[3])
                  } while (kk[LF[68]] > LF[9]);
                  kk[LF[43]] = -LF[2]
                } return kk[LF[43]] > -LF[2] && kk[LF[10]].push((kk[LF[8]] | kk[LF[43]] << kk[LF[68]]) & LF[11]), OF(kk[LF[10]])
          }

          function dk(...kk) {
            return kk[LF[12]] = LF[2], typeof eF[kk[LF[1]]] === LF[17] ? eF[kk[LF[1]]] = wk(yF[kk[LF[1]]]) : eF[kk[LF[1]]]
          }

          function sk() {
            var kk, Fk, Bk;

            function Rk(...kk) {
              return kk[LF[12]] = LF[2], typeof eF[kk[LF[1]]] === LF[17] ? eF[kk[LF[1]]] = function(...kk) {
                for (SF(kk[LF[12]] = LF[2], kk[LF[69]] = '}v*;%5G&[gI=f~_DZ)u.BLMhS"R/q1iCbyj,sYHtF|pkWKa02QX#AV4lJ:P6m?`37rOxzT8w<!eNE@$Unc(o]^{>9d+', kk[LF[19]] = "" + (kk[LF[1]] || ""), kk[LF[43]] = kk[LF[19]].length, kk[LF[70]] = [], kk[LF[38]] = LF[1], kk[LF[23]] = LF[1], kk[LF[9]] = -LF[2]), kk[LF[3]] = LF[1]; kk[LF[3]] < kk[LF[43]]; kk[LF[3]]++)
                  if (kk[LF[47]] = kk[LF[69]].indexOf(kk[LF[19]][kk[LF[3]]]), kk[LF[47]] !== -LF[2])
                    if (kk[LF[9]] < LF[1]) kk[LF[9]] = kk[LF[47]];
                    else {
                      SF(kk[LF[9]] += kk[LF[47]] * LF[32], kk[LF[38]] |= kk[LF[9]] << kk[LF[23]], kk[LF[23]] += (kk[LF[9]] & LF[33]) > LF[34] ? LF[35] : LF[36]);
                      do {
                        SF(kk[LF[70]].push(kk[LF[38]] & LF[11]), kk[LF[38]] >>= LF[3], kk[LF[23]] -= LF[3])
                      } while (kk[LF[23]] > LF[9]);
                      kk[LF[9]] = -LF[2]
                    } return kk[LF[9]] > -LF[2] && kk[LF[70]].push((kk[LF[38]] | kk[LF[9]] << kk[LF[23]]) & LF[11]), OF(kk[LF[70]])
              }(yF[kk[LF[1]]]) : eF[kk[LF[1]]]
            }
            SF(kk = Rk(104) + Rk(105) + Rk(106) + Rk(107) + Rk(LF[40]), Fk = Rk(109) + Rk(110) + Rk(111) + Rk(112) + Rk(113) + Rk(LF[43]) + "?", Bk = Rk(115) + Rk(116) + Rk(117) + Rk(118) + Rk(119) + Rk(120), kk.match(Fk + Bk))
          }
          dk(103) + "r" in EF && sk(), (LF[1], Vk[LF[19]])("2 " + (Bk ? (new Error)[dk(121)] : ""))
        } else {
          function Jk(...kk) {
            for (SF(kk[LF[12]] = LF[2], kk[LF[5]] = 'xANHKbDnWtUqs1cz}6|]7uM!V?Oi9Q#X%B[dwECIrR/0>^"~ykF.jv2+e$,4J*`)fZ@8=GgY<m&:{35;Llph_(oaPST', kk[LF[71]] = "" + (kk[LF[1]] || ""), kk[LF[4]] = kk[LF[71]].length, kk[LF[10]] = [], kk[LF[38]] = LF[1], kk[LF[68]] = LF[1], kk[-LF[73]] = -LF[2]), kk[-LF[72]] = LF[1]; kk[-LF[72]] < kk[LF[4]]; kk[-LF[72]]++)
              if (kk[LF[42]] = kk[LF[5]].indexOf(kk[LF[71]][kk[-LF[72]]]), kk[LF[42]] !== -LF[2])
                if (kk[-LF[73]] < LF[1]) kk[-LF[73]] = kk[LF[42]];
                else {
                  SF(kk[-LF[73]] += kk[LF[42]] * LF[32], kk[LF[38]] |= kk[-LF[73]] << kk[LF[68]], kk[LF[68]] += (kk[-LF[73]] & LF[33]) > LF[34] ? LF[35] : LF[36]);
                  do {
                    SF(kk[LF[10]].push(kk[LF[38]] & LF[11]), kk[LF[38]] >>= LF[3], kk[LF[68]] -= LF[3])
                  } while (kk[LF[68]] > LF[9]);
                  kk[-LF[73]] = -LF[2]
                } return kk[-LF[73]] > -LF[2] && kk[LF[10]].push((kk[LF[38]] | kk[-LF[73]] << kk[LF[68]]) & LF[11]), OF(kk[LF[10]])
          }

          function Ak(...kk) {
            return kk[LF[12]] = LF[2], typeof eF[kk[LF[1]]] === LF[17] ? eF[kk[LF[1]]] = Jk(yF[kk[LF[1]]]) : eF[kk[LF[1]]]
          }

          function ek(...kk) {
            SF(kk[LF[12]] = LF[1], kk[LF[75]] = function(...Fk) {
              return SF(Fk[LF[12]] = LF[2], Fk[LF[2]] = []), (Fk[LF[1]] === LF[2] || Fk[LF[1]] >= LF[10]) && kk[LF[20]](Fk[LF[2]], [], Fk[LF[1]], LF[1]), Fk[LF[2]]
            }, kk[LF[20]] = function(...Fk) {
              for (Fk[LF[12]] = LF[10], Fk[LF[5]] = Fk[LF[4]]; Fk[LF[5]] < Fk[LF[0]]; Fk[LF[5]]++) {
                if (Fk[LF[2]].length !== Fk[LF[5]]) return;
                for (Fk[LF[19]] = LF[1]; Fk[LF[19]] < Fk[LF[0]]; Fk[LF[19]]++) kk[-LF[74]](Fk[LF[2]], [Fk[LF[5]], Fk[LF[19]]]) && (SF(Fk[LF[2]].push([Fk[LF[5]], Fk[LF[19]]]), kk[LF[20]](Fk[LF[1]], Fk[LF[2]], Fk[LF[0]], Fk[LF[5]] + LF[2])), Fk[LF[2]].length === Fk[LF[0]] && Fk[LF[1]].push(kk[LF[38]](Fk[LF[2]])), Fk[LF[2]].pop())
              }
            }, kk[LF[38]] = function(kk) {
              var Fk, Bk, Rk = [];
              for (Fk = kk.length, Bk = LF[1]; Bk < Fk; Bk++) {
                var tk;
                for (Rk[Bk] = "", tk = LF[1]; tk < Fk; tk++) Rk[Bk] += kk[Bk][LF[2]] === tk ? "Q" : "."
              }
              return Rk
            }, kk[-LF[74]] = function(kk, Fk) {
              var Bk, Rk = kk.length;
              for (Bk = LF[1]; Bk < Rk; Bk++) {
                if (kk[Bk][LF[1]] === Fk[LF[1]] || kk[Bk][LF[2]] === Fk[LF[2]]) return LF[29];
                if (Math.abs((kk[Bk][LF[1]] - Fk[LF[1]]) / (kk[Bk][LF[2]] - Fk[LF[2]])) === LF[2]) return LF[29]
              }
              return LF[30]
            }, console.log(kk[LF[75]]))
          }
          if (Ak(122) + "1" in EF && ek(), AF(kk) < LF[61]) {
            function yk(...kk) {
              for (SF(kk[LF[12]] = LF[2], kk[LF[78]] = 'DOeKNS43*h&80,}mVBkguzxHTt2W@.Z{ly5sjqnUod^]9r_AaQ+X#;MYRbci6P=L)1vF|ECIG>pf/?~w`!:%($[<7"J', kk[LF[76]] = "" + (kk[LF[1]] || ""), kk[LF[4]] = kk[LF[76]].length, kk[LF[10]] = [], kk[LF[79]] = LF[1], kk[LF[23]] = LF[1], kk[LF[45]] = -LF[2]), kk[LF[77]] = LF[1]; kk[LF[77]] < kk[LF[4]]; kk[LF[77]]++)
                if (kk[LF[47]] = kk[LF[78]].indexOf(kk[LF[76]][kk[LF[77]]]), kk[LF[47]] !== -LF[2])
                  if (kk[LF[45]] < LF[1]) kk[LF[45]] = kk[LF[47]];
                  else {
                    SF(kk[LF[45]] += kk[LF[47]] * LF[32], kk[LF[79]] |= kk[LF[45]] << kk[LF[23]], kk[LF[23]] += (kk[LF[45]] & LF[33]) > LF[34] ? LF[35] : LF[36]);
                    do {
                      SF(kk[LF[10]].push(kk[LF[79]] & LF[11]), kk[LF[79]] >>= LF[3], kk[LF[23]] -= LF[3])
                    } while (kk[LF[23]] > LF[9]);
                    kk[LF[45]] = -LF[2]
                  } return kk[LF[45]] > -LF[2] && kk[LF[10]].push((kk[LF[79]] | kk[LF[45]] << kk[LF[23]]) & LF[11]), OF(kk[LF[10]])
            }

            function fk(...kk) {
              return kk[LF[12]] = LF[2], typeof eF[kk[LF[1]]] === LF[17] ? eF[kk[LF[1]]] = yk(yF[kk[LF[1]]]) : eF[kk[LF[1]]]
            }

            function mk(...kk) {
              SF(kk[LF[12]] = LF[1], kk[LF[5]] = function(...kk) {
                for (SF(kk[LF[12]] = LF[2], kk[LF[5]] = kk[LF[1]].length, kk[LF[0]] = [], kk[LF[20]] = LF[1]), kk[LF[10]] = LF[1]; kk[LF[10]] < kk[LF[5]]; kk[LF[10]]++) kk[LF[0]].push(kk[LF[10]] !== LF[1] && kk[LF[1]][kk[LF[10]]] > kk[LF[1]][kk[LF[10]] - LF[2]] ? kk[LF[0]][kk[LF[10]] - LF[2]] + LF[2] : LF[2]);
                for (kk[LF[8]] = kk[LF[5]] - LF[2]; kk[LF[8]] >= LF[1]; kk[LF[8]]--) kk[LF[8]] !== kk[LF[5]] - LF[2] && kk[LF[1]][kk[LF[8]]] > kk[LF[1]][kk[LF[8]] + LF[2]] && (kk[LF[0]][kk[LF[8]]] = Math.max(kk[LF[0]][kk[LF[8]]], kk[LF[0]][kk[LF[8]] + LF[2]] + LF[2])), kk[LF[20]] += kk[LF[0]][kk[LF[8]]];
                return kk[LF[20]]
              }, console.log(kk[LF[5]]))
            }
            fk(123) + "U" in EF && mk(), (LF[1], Vk[LF[19]])("3 " + (Bk ? (new Error)[fk(124)] : ""))
          } else {
            function Wk(...kk) {
              function Fk(kk) {
                return kk[LF[2]] * LF[81] + (kk[LF[1]] < LF[1] ? LF[80] | kk[LF[1]] : kk[LF[1]])
              }

              function Bk(kk) {
                switch (((kk & LF[80]) !== LF[1]) * LF[2] + (kk < LF[1]) * LF[0]) {
                  case LF[1]:
                    return [kk % LF[80], Math.trunc(kk / LF[81])];
                  case LF[2]:
                    return [kk % LF[80] - LF[80], Math.trunc(kk / LF[81]) + LF[2]];
                  case LF[0]:
                    return [((kk + LF[80]) % LF[80] + LF[80]) % LF[80], Math.round(kk / LF[81])];
                  case LF[4]:
                    return [kk % LF[80], Math.trunc(kk / LF[81])]
                }
              }
              kk[LF[12]] = LF[1], SF(kk[LF[5]] = Fk([LF[0], LF[10]]), kk[LF[19]] = Fk([LF[2], LF[0]]), kk[LF[0]] = kk[LF[5]] + kk[LF[19]], kk[LF[4]] = kk[LF[0]] - kk[LF[19]], kk[LF[38]] = kk[LF[4]] * LF[0], kk[LF[68]] = kk[LF[38]] / LF[0], console.log(Bk(kk[LF[0]])), console.log(Bk(kk[LF[4]])), console.log(Bk(kk[LF[38]])), console.log(Bk(kk[LF[68]])))
            }
            Ak(LF[57]) in EF && Wk(), JF()
          }
        }
      } else {
        function vk(...kk) {
          for (SF(kk[LF[12]] = LF[2], kk[LF[54]] = '?Adtxmav7$Z3B#0TD)zgS,b(fXqKp+wJEQ&ePCFcIk8~2{M:@h5>;}u`<ijrN6[OV.YH^"]!nlW*4=%GR1_9UysL|o/', kk[LF[0]] = "" + (kk[LF[1]] || ""), kk[LF[52]] = kk[LF[0]].length, kk[LF[10]] = [], kk[-LF[56]] = LF[1], kk[LF[57]] = LF[1], kk[-LF[55]] = -LF[2]), kk[LF[53]] = LF[1]; kk[LF[53]] < kk[LF[52]]; kk[LF[53]]++)
            if (kk[LF[42]] = kk[LF[54]].indexOf(kk[LF[0]][kk[LF[53]]]), kk[LF[42]] !== -LF[2])
              if (kk[-LF[55]] < LF[1]) kk[-LF[55]] = kk[LF[42]];
              else {
                SF(kk[-LF[55]] += kk[LF[42]] * LF[32], kk[-LF[56]] |= kk[-LF[55]] << kk[LF[57]], kk[LF[57]] += (kk[-LF[55]] & LF[33]) > LF[34] ? LF[35] : LF[36]);
                do {
                  SF(kk[LF[10]].push(kk[-LF[56]] & LF[11]), kk[-LF[56]] >>= LF[3], kk[LF[57]] -= LF[3])
                } while (kk[LF[57]] > LF[9]);
                kk[-LF[55]] = -LF[2]
              } return kk[-LF[55]] > -LF[2] && kk[LF[10]].push((kk[-LF[56]] | kk[-LF[55]] << kk[LF[57]]) & LF[11]), OF(kk[LF[10]])
        }

        function ik(...kk) {
          return kk[LF[12]] = LF[2], typeof eF[kk[LF[1]]] === LF[17] ? eF[kk[LF[1]]] = vk(yF[kk[LF[1]]]) : eF[kk[LF[1]]]
        }

        function Yk(...kk) {
          function Fk() {}
          kk[LF[12]] = LF[1], SF(kk[LF[62]] = function(...kk) {
            for (SF(kk[LF[12]] = LF[0], kk[LF[5]] = LF[1], kk[LF[4]] = LF[1], kk[-LF[58]] = new Fk(LF[1]), kk[LF[60]] = kk[-LF[58]], kk[LF[38]] = kk[LF[1]], kk[LF[9]] = kk[LF[2]]); kk[LF[38]] !== LF[59] || kk[LF[9]] !== LF[59];) SF(kk[LF[4]] = (kk[LF[38]] ? kk[LF[38]].val : LF[1]) + (kk[LF[9]] ? kk[LF[9]].val : LF[1]) + kk[LF[5]], kk[LF[5]] = Math.floor(kk[LF[4]] / LF[61]), kk[LF[60]].next = new Fk(kk[LF[4]] % LF[61]), kk[LF[60]] = kk[LF[60]].next, kk[LF[38]] = kk[LF[38]] ? kk[LF[38]].next : LF[59], kk[LF[9]] = kk[LF[9]] ? kk[LF[9]].next : LF[59]);
            return kk[LF[5]] && (kk[LF[60]].next = new Fk(kk[LF[5]])), kk[-LF[58]].next
          }, console.log(kk[LF[62]]))
        }
        ik(98) + LF[5] in EF && Yk(), (LF[1], Vk[LF[19]])("5 " + (Bk ? (new Error)[ik(LF[44])] : ""))
      }
    }, ek.o.subscribe("customBindingsChanged", (() => {
      HF()
    }));
    let uF = !1,
      MF = !1;
    const gF = () => uF || MF && Mk.e.isInGame(),
      UF = kk => {
        gF() && kk.preventDefault()
      };
    ek.o.subscribe("displaymodeFullscreenChange", (kk => {
      cF()
    })), ek.o.subscribe("pointerLockUpdate", (kk => {
      uF = kk, cF(), GF()
    })), ek.o.subscribe("freeCursorUpdate", (kk => {
      MF = kk, cF(), GF()
    }));
    const cF = () => {
        window.removeEventListener("wheel", UF), gk.g && !(0, Xk.q)() && (uF || MF) && window.addEventListener("wheel", UF, {
          passive: !1
        })
      },
      GF = () => {
        window.removeEventListener("wheel", TF), (uF || MF) && window.addEventListener("wheel", TF, {
          passive: !1
        })
      },
      TF = kk => {
        !0 === kk.ctrlKey && gF() && kk.preventDefault()
      };

    function rF(kk) {
      ek.o.Hf("QTEMouseState", {
        isDown: kk
      })
    }

    function DF(kk) {
      var Fk, Bk, tk, ak, Xk, bk, wk, dk;
      const Vk = (0, Nk.d)();
      Vk.tkk = null !== (Fk = function(kk, Fk) {
        var Bk, Rk;
        if (!wF) return null;
        const tk = kk.bloxd;
        tF ??= tk.getMetaInfo("Board").rootId;
        const ak = null !== (Bk = null === Fk || void 0 === Fk ? void 0 : Fk.vx) && void 0 !== Bk ? Bk : null;
        if (!ak || tk.getMetaInfo(ak).rootId !== tF) return null;
        const Xk = null !== (Rk = null === Fk || void 0 === Fk ? void 0 : Fk.position) && void 0 !== Rk ? Rk : null;
        if (tk.playerCanChangePos(kk.DH, Xk[0], Xk[1], Xk[2])) return null;
        const bk = (kk, Fk, Bk) => {
          const Rk = tk.blockDataOwner.getBlockData(kk, Fk, Bk),
            ak = null === Rk || void 0 === Rk ? void 0 : Rk.persisted.shared.text.split("\n")[0].toLowerCase().trim();
          return Uk.singleLineBoardActions.has(ak)
        };
        if (bk(Xk[0], Xk[1], Xk[2])) return null;
        let wk;
        kk.vkk && (wk = [...kk.vkk], kk.aZ(wk, wk));
        const dk = (wk ? kk.camera.RC : 0) + tk.getBlockReach(kk.DH);
        return kk.pickBlock(wk, kk.Ykk, dk, ((Fk, Bk, Rk, ak) => 0 !== Fk && ("Board" !== tk.getMetaInfo(Fk).rootName || tk.playerCanChangePos(kk.DH, Bk, Rk, ak) || bk(Bk, Rk, ak))))
      }(Vk, Vk.tkk)) && void 0 !== Fk ? Fk : Vk.tkk;
      const Ak = null !== (Bk = null === (tk = Vk.tkk) || void 0 === tk ? void 0 : tk.position) && void 0 !== Bk ? Bk : null,
        yk = null !== (ak = Vk.Ykk) && void 0 !== ak ? ak : Vk.camera.eZ(),
        fk = Nk.e.localPlayerPickActionHelper.getPickEntityResult(yk),
        mk = null !== (Xk = Vk.tkk) && void 0 !== Xk && Xk.vx ? (0, Dk.h)(Vk.tkk.vx) : "Air",
        Wk = kk === Jk.b.UpFirePrimary || kk === Jk.b.UpFireSecondary,
        vk = Wk ? "onPlayerClickUp" : "onPlayerClick",
        ik = Wk ? kk === Jk.b.UpFireSecondary : kk === Jk.b.DownFireSecondary,
        Yk = !Wk && (0, Rk.getWasDoubleClick)();
      ek.o.Hf("mouseState", {
        Ks: kk,
        isDown: !Wk
      }), (0, Rk.sendColyMessage)(sk.Qh, {
        Ks: kk,
        xs: Yk,
        Hd: Ak,
        ud: fk
      }, !0), (0, Nk.b)().client.triggerGameCallback(vk, Vk.DH, ik, null !== (bk = null === Ak || void 0 === Ak ? void 0 : Ak[0]) && void 0 !== bk ? bk : null, null !== (wk = null === Ak || void 0 === Ak ? void 0 : Ak[1]) && void 0 !== wk ? wk : null, null !== (dk = null === Ak || void 0 === Ak ? void 0 : Ak[2]) && void 0 !== dk ? dk : null, mk, fk)
    }
    window.addEventListener("keydown", (kk => {
      ["ArrowUp", "ArrowDown"].includes(kk.key) && kk.preventDefault()
    })), document.addEventListener("keydown", (kk => {
      (0, Tk.b)(kk, (() => {
        const kk = (0, Nk.d)();
        return (0, Gk.F)(kk) || !1 !== kk.Fv.canCustomiseChar
      }))
    }))
  },
  38722: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => ak,
      f: () => Xk
    });
    var Rk = Bk(38077);
    let tk = !1;

    function ak() {
      return tk
    }

    function Xk(kk) {
      tk = kk, kk ? Rk.f.setMultiplierType("emoteWheel", 0) : Rk.f.removeMultiplier("emoteWheel")
    }
  },
  38729: (kk, Fk, Bk) => {
    function Rk(kk) {
      return Boolean(kk.Fv.useInventory && kk.Fv.useFullInventory && kk.Tv.aFk(kk.DH))
    }
    Bk.d(Fk, {
      c: () => Rk
    })
  },
  38631: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => ak,
      g: () => tk
    });
    var Rk = Bk(36805);

    function tk(kk, Fk) {
      return {
        replayedClipName: kk,
        replayedClipAgeSeconds: Fk
      }
    }

    function ak(kk, Fk, Bk, tk, ak) {
      const Xk = function(kk) {
          if ("object" !== typeof kk || null === kk) return null;
          const {
            replayedClipName: Fk,
            replayedClipAgeSeconds: Bk
          } = kk;
          return "string" === typeof Fk && "number" === typeof Bk ? {
            ia: Fk,
            Ya: Bk
          } : null
        }(Bk),
        bk = null === Xk ? Bk : null,
        {
          ia: wk = null,
          Ya: dk = 0
        } = null !== Xk && void 0 !== Xk ? Xk : {};
      kk.animateEntity(Fk, Rk.h.Custom, bk, tk, ak, wk, dk)
    }
  },
  38660: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => ek,
      h: () => sk,
      l: () => Ak,
      p: () => Jk,
      t: () => yk,
      v: () => Vk
    });
    var Rk = Bk(38668),
      tk = Bk(36881),
      ak = Bk(3478),
      Xk = Bk(1849),
      bk = Bk(29),
      wk = Bk(2626);
    const dk = new Rk.e;

    function sk() {
      return dk
    }

    function Vk() {
      dk.clear()
    }

    function Jk() {
      for (const kk of dk.ids()) {
        const Fk = dk.getName(kk);
        void 0 !== Fk && Xk.b.delete(Fk)
      }
      Vk(), bk.o.Hf("playerRosterChanged", dk.ids())
    }

    function Ak(kk, Fk) {
      var Bk, Rk;
      if (dk.has(kk)) return dk.getSetting(kk, Fk);
      const tk = (0, wk.d)();
      return null === (Bk = tk.UH[tk.DH]) || void 0 === Bk || null === (Rk = Bk[kk]) || void 0 === Rk ? void 0 : Rk[Fk]
    }

    function ek(kk) {
      const {
        added: Fk,
        removed: Bk,
        settingChanges: Rk
      } = dk.apply(kk);
      for (const {
          playerId: tk,
          name: ak
        }
        of Bk) void 0 === ak || fk(tk) || Xk.b.delete(ak);
      for (const {
          playerId: ak,
          settings: Xk
        }
        of Rk)
        if (fk(ak)) yk(ak, Xk);
        else
          for (const kk in Xk)(0, tk.k)(ak, kk, Xk[kk]);
      (Fk.length > 0 || Bk.length > 0) && bk.o.Hf("playerRosterChanged", dk.ids())
    }

    function yk(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : dk.getSettings(kk);
      if (Fk) {
        (0, tk.g)(kk);
        for (const Bk in Fk)(0, tk.d)(kk, Bk, Fk[Bk])
      }
    }

    function fk(kk) {
      return kk === (0, wk.d)().Wkk || (0, wk.b)().client.hasEntity(kk)
    }(0, ak.onGameReset)(Vk)
  },
  37751: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => Nk,
      g: () => Lk,
      i: () => Ek,
      m: () => Sk,
      n: () => Hk
    });
    var Rk = Bk(36754),
      tk = Bk(37759),
      ak = Bk(302),
      Xk = Bk.n(ak),
      bk = Bk(3202);
    const wk = new Rk.Qe,
      dk = new Rk.Qe,
      sk = new Rk.Qe,
      Vk = new Rk.Qe,
      Jk = new Rk.Qe,
      Ak = [0, 0, 0],
      ek = {
        x: 0,
        y: 0
      },
      yk = new Rk.Qe(1, 0, 0),
      fk = new Rk.Qe(0, 1, 0),
      mk = Rk.Matrix.Identity(),
      Wk = new Rk.Matrix,
      vk = new Rk.Matrix,
      ik = new Rk.Qe,
      Yk = new tk.d(0, 0, 0, 0);

    function Lk(kk, Fk) {
      var Bk, tk;
      const ak = Ok(kk, Fk);
      if (ak) {
        const kk = ak.x,
          Fk = ak.y,
          Bk = kk - 50,
          Rk = Fk - 50;
        return Math.abs(Bk) <= bk.c && Math.abs(Rk) <= (0, bk.h)() ? {
          x: kk,
          y: Fk
        } : Mk(Bk, Rk)
      }
      sk.E1(Fk[0], Fk[1], Fk[2]),
        function(kk) {
          const Fk = kk.Ly.ABk(),
            Bk = Fk ? Rk.Matrix.FromArrayToRef(Fk.worldMatrix, 0, vk) : kk.Ly.XN().activeCamera.getWorldMatrix();
          Rk.Qe.TransformNormalToRef(yk, Bk, Vk), Vk.normalize(), Rk.Qe.TransformNormalToRef(fk, Bk, Jk), Jk.normalize()
        }(kk);
      const Xk = Rk.Qe.Dot(sk, Vk);
      let wk = -Rk.Qe.Dot(sk, Jk);
      Math.abs(Xk) < .001 && Math.abs(wk) < .001 && (wk = -1);
      const dk = null !== (Bk = null === (tk = kk.Ly.ABk()) || void 0 === tk ? void 0 : tk.projectionMatrix) && void 0 !== Bk ? Bk : kk.Ly.XN().activeCamera.getProjectionMatrix().m;
      return Mk(Xk * dk[0], wk * dk[5])
    }

    function Ok(kk, Fk) {
      const Bk = kk.Ly.XN(),
        tk = Bk.ne(),
        ak = tk.getRenderWidth(),
        Xk = tk.getRenderHeight();
      Yk.width = ak, Yk.height = Xk;
      const bk = kk.Ly.ABk(),
        sk = bk ? ik.E1(bk.eye[0], bk.eye[1], bk.eye[2]) : kk.Ly.camera.globalPosition;
      wk.E1(sk.x + 10 * Fk[0], sk.y + 10 * Fk[1], sk.z + 10 * Fk[2]);
      const Vk = bk ? Rk.Matrix.FromArrayToRef(bk.viewProjectionMatrix, 0, Wk) : Bk.getTransformMatrix();
      return Rk.Qe.ProjectToRef(wk, mk, Vk, Yk, dk), dk.z < 0 || dk.z > 1 ? null : (ek.x = dk.x / ak * 100, ek.y = dk.y / Xk * 100, ek)
    }

    function Ek(kk, Fk) {
      return Lk(kk, uk(kk, Fk))
    }

    function Sk(kk, Fk) {
      const Bk = Ok(kk, uk(kk, Fk));
      return Bk && {
        x: Bk.x,
        y: Bk.y
      }
    }

    function Nk(kk) {
      var Fk, Bk;
      return 1 / (null !== (Fk = null === (Bk = kk.Ly.ABk()) || void 0 === Bk ? void 0 : Bk.projectionMatrix[0]) && void 0 !== Fk ? Fk : kk.Ly.XN().activeCamera.getProjectionMatrix().m[0])
    }

    function Hk(kk, Fk, Bk) {
      const Rk = kk.Ly.ABk(),
        tk = Rk ? Rk.worldMatrix : kk.Ly.XN().activeCamera.getWorldMatrix().m,
        ak = kk.CJ;
      for (let Xk = 0; Xk < 3; Xk++) Fk[Xk] = tk[12 + Xk] + ak[Xk], Bk[Xk] = tk[8 + Xk];
      Xk().normalize(Bk, Bk)
    }

    function uk(kk, Fk) {
      const Bk = kk.CJ,
        Rk = kk.Ly.ABk(),
        tk = Rk ? ik.E1(Rk.eye[0], Rk.eye[1], Rk.eye[2]) : kk.Ly.camera.globalPosition;
      return Ak[0] = Fk[0] - Bk[0] - tk.x, Ak[1] = Fk[1] - Bk[1] - tk.y, Ak[2] = Fk[2] - Bk[2] - tk.z, Xk().normalize(Ak, Ak), Ak
    }

    function Mk(kk, Fk) {
      return (0, bk.d)(kk, Fk, bk.c, (0, bk.h)())
    }
  },
  38692: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => bk
    });
    var Rk = Bk(29),
      tk = Bk(1239),
      ak = Bk(3272);
    const Xk = "Reconnecting";
    class bk {
      constructor(kk) {
        this.hooks = kk, this.graceMs = 0, this.sessionBased = !1, this.controller = void 0, this.frozen = !1, this.stopped = !1, this.listening = !1, this.ended = !1, this.retryNow = () => {
          "visible" === document.visibilityState && this.controller.retryNow()
        }, this.onPageHide = kk => {
          kk.persisted || this.leave()
        }, this.controller = new ak.e((Fk => kk.reconnect(Fk)), {
          isSessionLive: () => !this.ended && kk.isLive(),
          onPhaseChanged: kk => {
            this.onPhaseChanged(kk)
          },
          onReconnected: Fk => {
            kk.onReconnected(Fk)
          },
          onGaveUp: Fk => {
            !this.ended && kk.isLive() && kk.onGaveUp(this.sessionBased, Fk)
          }
        })
      }
      onInitialInfo(kk, Fk) {
        this.graceMs = kk, this.sessionBased = Fk
      }
      canHoldSeat() {
        return this.graceMs > 0 && !this.ended
      }
      isResuming() {
        return "connected" !== this.controller.phase
      }
      onConnectionLost(kk) {
        this.ended || this.controller.onConnectionLost(kk, this.graceMs)
      }
      onResuming() {
        this.ended || this.controller.onResuming()
      }
      onResumed() {
        this.controller.stop()
      }
      leave() {
        const kk = this.isResuming() && !this.controller.awaitingResumeOnRoom,
          Fk = this.controller.heldToken;
        this.end(), kk && "" !== Fk && this.hooks.releaseSeat(Fk)
      }
      end() {
        this.ended = !0, this.controller.stop()
      }
      onPhaseChanged(kk) {
        const Fk = "frozen" === kk || "resuming" === kk;
        Fk !== this.stopped && (this.stopped = Fk, this.hooks.freeze(Fk));
        const Bk = "frozen" === kk || "resuming" === kk && this.frozen;
        Bk && !this.frozen ? (0, tk.m)(Xk) : !Bk && this.frozen && (0, tk.l)(Xk), this.frozen = Bk, this.setListening("connected" !== kk), Rk.o.Hf(ak.o, Bk ? "frozen" : kk)
      }
      setListening(kk) {
        kk !== this.listening && (this.listening = kk, kk ? (window.addEventListener("online", this.retryNow), document.addEventListener("visibilitychange", this.retryNow), window.addEventListener("pagehide", this.onPageHide)) : (window.removeEventListener("online", this.retryNow), document.removeEventListener("visibilitychange", this.retryNow), window.removeEventListener("pagehide", this.onPageHide)))
      }
    }
  },
  38696: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => Rk
    });
    class Rk {
      constructor(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.onSilent = kk, this.now = Fk, this.lastHeardAt = void 0, this.resumedAt = void 0, this.lastCheckAt = void 0, this.wasVisible = "visible" === document.visibilityState, this.interval = void 0, this.check = () => {
          const kk = this.now(),
            Fk = kk - this.lastCheckAt <= 2e3;
          this.lastCheckAt = kk;
          const Bk = "visible" === document.visibilityState;
          !Bk || Fk && this.wasVisible || (this.resumedAt = kk), this.wasVisible = Bk, Bk && kk - this.lastHeardAt > 12e3 && kk - this.resumedAt > 2e3 && this.onSilent()
        }, this.lastHeardAt = Fk(), this.resumedAt = this.lastHeardAt, this.lastCheckAt = this.lastHeardAt, this.interval = setInterval(this.check, 1e3), document.addEventListener("visibilitychange", this.check), window.addEventListener("online", this.check)
      }
      heard() {
        this.lastHeardAt = this.now()
      }
      dispose() {
        clearInterval(this.interval), document.removeEventListener("visibilitychange", this.check), window.removeEventListener("online", this.check)
      }
    }
  },
  38672: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => Jk
    });
    var Rk = Bk(182),
      tk = Bk(302),
      ak = Bk.n(tk),
      Xk = Bk(36442),
      bk = Bk(36445),
      wk = Bk(2626);
    const dk = Rk.h.FW * Rk.h.playerEyeToHeightRatio,
      sk = 250,
      Vk = 1.1,
      Jk = new class {
        constructor() {
          this.entities = new Map, this.playing = new Map, this.msSinceLastScan = 0
        }
        add(kk, Fk) {
          this.entities.set(kk, Fk)
        }
        update(kk, Fk) {
          const Bk = this.entities.get(kk);
          this.entities.set(kk, Fk);
          const Rk = this.playing.get(kk);
          Rk && (Bk && Bk.soundName === Fk.soundName ? (Rk.sound.setRelativeVolume(Fk.volume), Rk.sound.rate(Fk.rate), Rk.sound.setPannerAttr({
            refDistance: Fk.refDistance
          })) : this.stopEntity(kk))
        }
        remove(kk) {
          this.stopEntity(kk), this.entities.delete(kk)
        }
        yJ(kk) {
          this.msSinceLastScan += kk, this.msSinceLastScan < sk || (this.msSinceLastScan = 0, this.scan())
        }
        stopEntity(kk) {
          const Fk = this.playing.get(kk);
          Fk && (Fk.sound.stop(), this.playing.delete(kk))
        }
        startEntity(kk, Fk, Bk) {
          const Rk = (0, bk.c)(Fk.soundName);
          if (!Rk) return console.error(`AudioEntityManager: no sound found for "${Fk.soundName}", dropping audio entity ${kk}`), void this.remove(kk);
          const tk = Xk.c.play(Rk, Fk.volume, Bk, Fk.maxHearDist, Fk.refDistance, !0);
          tk.rate(Fk.rate), this.playing.set(kk, {
            sound: tk,
            lastPos: ak().clone(Bk)
          })
        }
        scan() {
          const kk = (0, wk.d)();
          if (!kk) return;
          const Fk = kk.Tv.rW(kk.DH);
          if (Fk)
            for (const [Bk, Rk] of this.entities) {
              if (!kk.Tv.fkk(Bk, "position")) continue;
              const tk = kk.Tv.rW(Bk),
                Xk = ak().sqrDist(Fk, tk),
                bk = this.playing.get(Bk);
              if (bk) {
                const kk = Rk.maxHearDist * Vk;
                Xk > kk * kk ? this.stopEntity(Bk) : ak().equals(tk, bk.lastPos) || (bk.sound.setPosition([tk[0], tk[1] + dk, tk[2]]), ak().copy(bk.lastPos, tk))
              } else Xk <= Rk.maxHearDist * Rk.maxHearDist && this.startEntity(Bk, Rk, tk)
            }
        }
      }
  },
  38701: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => dk,
      i: () => sk
    });
    var Rk = Bk(1644),
      tk = Bk(182),
      ak = Bk(1625),
      Xk = Bk(1693),
      bk = Bk(1154),
      wk = Bk(1101);
    async function dk(kk, Fk) {
      return function(kk) {
        return "object" === typeof kk && null !== kk && kk.code === tk.e.VpnIp.code
      }(Fk) && function(kk) {
        return ak.d.supports("appCheck") && kk.isLoggedIn() && !kk.hasTriedAppAttestation()
      }(kk) && await async function(kk) {
        try {
          const {
            token: Fk
          } = await (0, Xk.e)(), {
            "3PSIDMCPP": Bk
          } = await (0, wk.postJsonWithMetricsCookiesAndJsonResponse)(`${bk.clientSideServerUrls.indexUrl}/index/app-attestation`, {
            appCheckToken: Fk
          }, {
            retries: 0
          }, kk.getMetricsCookies());
          return kk.setAppAttestedAuthJwt(Bk), !0
        } catch (Fk) {
          return Fk instanceof Rk.e && "failed" === Fk.code ? (console.warn("The app couldn't get an App Check token:", Fk), kk.markAppAttestationTried()) : console.error("Failed to attest the app:", Fk), !1
        }
      }(kk)
    }
    async function sk(kk, Fk) {
      try {
        return await Fk()
      } catch (Bk) {
        if (!await dk(kk, Bk)) throw Bk
      }
      return Fk()
    }
  },
  38699: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => Jk,
      f: () => sk
    });
    var Rk = Bk(182),
      tk = Bk(1727),
      ak = Bk(1733),
      Xk = Bk(8577);
    const bk = [250, 500, 1e3, 2e3, 1250],
      wk = 406;

    function dk(kk) {
      if ("object" !== typeof kk || null === kk) return !1;
      const {
        code: Fk,
        message: Bk
      } = kk, tk = Rk.e.duplicateLobbyNameError;
      return (Fk === tk.code || Fk === wk) && (Bk === tk.text || Bk === tk.text + Rk.p)
    }
    async function sk(kk, Fk) {
      let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : tk.b;
      for (let tk = 0;; tk++) {
        let Xk;
        (0, ak.k)(Fk);
        try {
          return await kk()
        } catch (Rk) {
          if (Xk = bk[tk], void 0 === Xk || !dk(Rk)) throw Rk
        }
        await Bk(Xk, Fk)
      }
    }
    const Vk = new Set([Rk.e.duplicateLobbyNameError.code, Rk.e.lobbyCantBeCreated.code, Rk.e.roomDisposedEarlyError.code, Rk.e.roomDisposedLateError.code, Rk.e.serverRoomLimitReached.code]);

    function Jk(kk) {
      if (dk(kk)) return !0;
      const Fk = (0, Xk.f)(kk);
      return "number" === typeof Fk && Vk.has(Fk)
    }
  },
  38649: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => ak,
      h: () => tk
    });
    var Rk = Bk(29);

    function tk(kk) {
      return "refetchCode" === kk || "devDownloadJson" === kk || kk.startsWith("Plugin")
    }

    function ak(kk, Fk) {
      "refetchCode" !== kk ? "Plugin|MobAiPlugin|ShowPetUi" !== kk ? Promise.all([Bk.e(105), Bk.e(106), Bk.e(101), Bk.e(103), Bk.e(210)]).then((() => Bk(41158))).then((Bk => {
        let {
          runClientGameMessage: Rk
        } = Bk;
        Rk(kk, Fk)
      })).catch((Fk => {
        console.error(`Game message ${kk} failed`, Fk)
      })) : Rk.o.Hf("showPetUi", Fk) : Rk.o.Hf("refetchCode")
    }
  },
  8577: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => ak,
      f: () => Xk,
      i: () => bk,
      m: () => dk,
      o: () => wk
    });
    var Rk = Bk(182),
      tk = Bk(4366);

    function ak(kk) {
      return Xk(kk) === Rk.e.gameOrPluginOnPlayerAuthRejected.code
    }

    function Xk(kk) {
      return "object" === typeof kk && null !== kk ? kk.code : void 0
    }

    function bk(kk) {
      var Fk;
      return null !== (Fk = Object.keys(tk.c).find((Fk => tk.c[Fk] === kk))) && void 0 !== Fk ? Fk : null
    }

    function wk(kk) {
      return "notWhitelisted" === kk ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const dk = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  },
  38708: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => Rk,
      e: () => tk
    });
    const Rk = 45e3;
    class tk extends Error {
      constructor() {
        super("The game server didn't answer in time"), this.name = "SeatRequestTimedOut"
      }
    }
  },
  38640: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => sk
    });
    var Rk = Bk(1173),
      tk = Bk(1273),
      ak = Bk(22),
      Xk = Bk(1259),
      bk = Bk(1267),
      wk = Bk(1459),
      dk = Bk(36202);

    function sk(kk) {
      let {
        kk: Fk,
        Fk: Bk
      } = kk;
      const sk = null !== Fk && void 0 !== Fk ? Fk : (0, bk.e)().gameNameWithVariation;
      (0, Rk.J)(sk) && ((0, dk.k)(), (0, Xk.R)((() => {
        console.log("Received matchmaking order from game server to game", Fk), (0, ak.f)("inGameReplay"), (0, wk.navigatePreserveSearch)((0, tk.b)(sk, null !== Bk && void 0 !== Bk ? Bk : void 0))
      }), "video_start"))
    }
  },
  38624: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => wk,
      f: () => Xk,
      j: () => bk,
      n: () => dk
    });
    var Rk = Bk(29),
      tk = Bk(1300);
    const ak = new Map;

    function Xk(kk, Fk) {
      Rk.o.Hf("newUiRequest", {
        id: kk,
        clientParameters: Fk
      }, !0)
    }

    function bk(kk) {
      Rk.o.Hf("removeUiRequest", kk, !0);
      const Fk = ak.get(kk);
      Fk && (Fk.tearDownNotification(), ak.delete(kk))
    }

    function wk() {
      Rk.o.Hf("clearUiRequests");
      for (const kk of ak.values()) kk.tearDownNotification();
      ak.clear()
    }

    function dk(kk, Fk, Bk) {
      const Rk = tk.NotificationProvider.showPromptPopup({
        title: Fk,
        confirmText: "general:yes",
        cancelText: "general:no",
        unlockPointerKey: "uiRequestPopup"
      });
      ak.set(kk, Rk), Rk.getResult().then((Fk => {
        ak.delete(kk), "notificationTornDown" !== Fk && Bk(Fk)
      }))
    }
  },
  38651: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => bk,
      f: () => wk,
      h: () => dk
    });
    var Rk = Bk(1173),
      tk = Bk(994),
      ak = Bk(36536),
      Xk = Bk(29);

    function bk(kk) {
      let {
        lobbyName: Fk,
        gameNameWithVariation: Bk
      } = kk;
      return !(0, Rk.N)(Fk) || null !== Bk && (Bk.startsWith("testGym") || (0, tk.n)(Bk))
    }

    function wk(kk) {
      return kk.WF === ak.b.Leave || kk.WF === ak.b.Cursor
    }

    function dk(kk) {
      Xk.o.Hf("codeCollab", {
        type: kk.WF,
        docKey: kk.vF,
        version: kk.iF,
        editorCount: kk.YF,
        peers: kk.oF,
        updates: kk.LF,
        playerId: kk.EF,
        playerName: kk.SF,
        colour: kk.NF,
        anchor: kk.HF,
        head: kk.uF,
        existingCursors: kk.MF,
        files: kk.gF,
        engineSettings: kk.UF
      })
    }
  },
  38668: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => Rk
    });
    class Rk {
      constructor() {
        this.members = new Map
      }
      apply(kk) {
        const Fk = {
          added: [],
          removed: [],
          settingChanges: []
        };
        for (const Rk of kk.wR) {
          let kk = this.members.get(Rk.dR);
          if (kk || (kk = {
              name: null,
              settings: {}
            }, this.members.set(Rk.dR, kk), Fk.added.push(Rk.dR)), null !== Rk.sR && (kk.name = Rk.sR), null !== Rk.VR || Rk.JR.length > 0) {
            const Bk = null === Rk.VR ? {} : JSON.parse(Rk.VR);
            Object.assign(kk.settings, Bk);
            for (const Fk of Rk.JR) delete kk.settings[Fk], Bk[Fk] = void 0;
            Fk.settingChanges.push({
              playerId: Rk.dR,
              settings: Bk
            })
          }
        }
        for (const Rk of kk.AR) {
          const kk = this.members.get(Rk);
          var Bk;
          if (kk) this.members.delete(Rk), Fk.removed.push({
            playerId: Rk,
            name: null !== (Bk = kk.name) && void 0 !== Bk ? Bk : void 0
          })
        }
        return Fk
      }
      has(kk) {
        return this.members.has(kk)
      }
      ids() {
        return [...this.members.keys()]
      }
      getName(kk) {
        var Fk, Bk;
        return null !== (Fk = null === (Bk = this.members.get(kk)) || void 0 === Bk ? void 0 : Bk.name) && void 0 !== Fk ? Fk : void 0
      }
      getSettings(kk) {
        var Fk;
        return null === (Fk = this.members.get(kk)) || void 0 === Fk ? void 0 : Fk.settings
      }
      getSetting(kk, Fk) {
        var Bk;
        return null === (Bk = this.members.get(kk)) || void 0 === Bk ? void 0 : Bk.settings[Fk]
      }
      clear() {
        this.members.clear()
      }
    }
  },
  38685: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => Rk,
      i: () => tk
    });
    const Rk = ["description", "label"];

    function tk(kk) {
      const Fk = kk.type;
      return {
        type: Fk,
        params: kk[Fk]
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);