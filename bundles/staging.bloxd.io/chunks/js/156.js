export const id = 156;
export const ids = [156];
export const modules = {
  39252: (dd, Jd, kd) => {
    function pd(dd) {
      return !(!dd.lobbyLeaderboardInfo && !dd.lobbyManage)
    }
    kd.d(Jd, {
      e: () => pd
    })
  },
  39228: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Wd,
      f: () => Pd
    });
    var pd = kd(29);
    let Nd = !1;

    function Wd() {
      return Nd
    }

    function Pd(dd) {
      Nd !== dd && (Nd = dd, pd.j.nO("replayViewer|videoExportChanged"))
    }
  },
  39118: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Wd
    });
    var pd = kd(29),
      Nd = kd(1955);

    function Wd(dd) {
      let {
        taskId: Jd,
        progress: kd
      } = dd;
      const pd = Nd.b.get("_tasks");
      null !== pd && void 0 !== pd && pd[Jd] && Nd.b.apply({
        _tasks: {
          ...pd,
          [Jd]: {
            ...pd[Jd],
            progress: kd
          }
        }
      })
    }
    pd.j.subscribe("clientTaskProgress", (dd => {
      Wd(dd)
    }))
  },
  39246: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Od,
      e: () => ed,
      h: () => Ld
    });
    var pd = kd(2704);
    const Nd = 0,
      Wd = 2,
      Pd = 3,
      Zd = 4;
    class gd {
      constructor(dd, Jd) {
        this.width = dd, this.oo = Jd, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(dd * Jd)
      }
      push(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const kd = this.data.subarray(this.next * this.width, (this.next + 1) * this.width);
        for (let pd = 0; pd < this.width; pd++) kd[pd] = dd[Jd + pd];
        return this.next = (this.next + 1) % this.oo, this.size = Math.min(this.size + 1, this.oo), kd
      }
      lines() {
        const dd = [],
          Jd = (this.next - this.size + this.oo) % this.oo;
        for (let kd = 0; kd < this.size; kd++) {
          const pd = (Jd + kd) % this.oo * this.width;
          dd.push(Array.from(this.data.subarray(pd, pd + this.width)).join(","))
        }
        return dd
      }
    }

    function Cd(dd) {
      return Number.isFinite(dd) ? String(Math.round(10 * dd) / 10) : String(dd)
    }

    function Kd(dd) {
      return Number.isFinite(dd) ? dd.toFixed(1) : String(dd)
    }
    class od {
      constructor() {
        this.frames = 0, this.looked = 0, this.idle = 0, this.lE = 0, this.pastLimit = 0, this.lockSkips = 0, this.rO = 0, this.lost = 0, this.dropped = 0, this.longFrames = 0, this.dtMin = 1 / 0, this.dtMax = 0, this.dtSum = 0, this.raw = [0, 0], this.turned = [0, 0], this.peakRate = 0, this.events = 0, this.eventMax = 0, this.bigEvents = 0, this.outliers = 0, this.eventLines = 0, this.suppressed = 0
      }
    }
    class ld {
      constructor() {
        var dd = this;
        this.tally = new od, this.records = new gd(10, 3600), this.events = new gd(4, 12e3), this.event = new Float64Array(4), this.take = null, this.client = "js", this.started = !1, this.record = function(Jd) {
          let kd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          const [pd, gd, od, ld, Qd, Ld, Od, ed, Rd, Id] = dd.records.push(Jd, kd), Gd = dd.tally;
          switch (Gd.frames++, Od) {
            case Nd:
              return void Gd.idle++;
            case Zd:
              return void Gd.rO++;
            case Pd:
              return Gd.lockSkips++, void(0 === od && 0 === ld || dd.outlier(`lock skip dropped raw (${Cd(od)}, ${Cd(ld)}) at ${Kd(pd)} ms`))
          }
          Gd.looked++, Number.isFinite(gd) && (Gd.dtMin = Math.min(Gd.dtMin, gd), Gd.dtMax = Math.max(Gd.dtMax, gd), Gd.dtSum += gd, gd > 0 && (Gd.peakRate = Math.max(Gd.peakRate, Math.hypot(Qd, Ld) / gd))), Gd.raw[0] += od, Gd.raw[1] += ld, Gd.turned[0] += Qd, Gd.turned[1] += Ld;
          const vd = Math.abs(od) > Id || Math.abs(ld) > Id,
            xd = `raw (${Cd(od)}, ${Cd(ld)}) over ${Kd(gd)} ms, limit ${Cd(Id)}, filter v (${ed.toFixed(3)}, ${Rd.toFixed(3)}) px/ms, at ${Kd(pd)} ms`;
          Od === Wd ? (Gd.lE++, dd.outlier(`spike put right: ${xd} -> turned (${Cd(Qd)}, ${Cd(Ld)})`)) : vd ? (Gd.pastLimit++, dd.outlier(`kept past limit: ${xd}`)) : gd > 50 && (Gd.longFrames++, dd.outlier(`long frame: ${xd}, turned in full`))
        }, this.onMouseMove = dd => {
          const Jd = this.tally,
            {
              movementX: kd,
              movementY: pd
            } = dd;
          Jd.events++;
          const Nd = Math.max(Math.abs(kd), Math.abs(pd));
          Jd.eventMax = Math.max(Jd.eventMax, Nd);
          const Wd = null !== document.pointerLockElement,
            Pd = this.event;
          Pd[0] = dd.timeStamp, Pd[1] = kd, Pd[2] = pd, Pd[3] = Wd ? 1 : 0, this.events.push(Pd), Nd >= 200 && (Jd.bigEvents++, this.eventOutlier(`big mousemove (${kd}, ${pd}) at ${Kd(dd.timeStamp)} ms, lock ${Wd?"EC":"free"}`))
        }, this.onLockChange = () => {
          const dd = document.pointerLockElement;
          (0, pd.h)("look", `pointer lock ${dd?`gained (${dd.tagName.toLowerCase()})`:"lost"} at ${Kd(performance.now())} ms`)
        }, this.onLockError = () => {
          (0, pd.h)("look", `pointer lock request failed at ${Kd(performance.now())} ms`)
        }, this.onVisibility = () => {
          (0, pd.h)("look", `page ${document.visibilityState} at ${Kd(performance.now())} ms`)
        }, this.flush = () => {
          this.takeRecords();
          const dd = this.tally;
          if (this.tally = new od, 0 === dd.events && 0 === dd.raw[0] && 0 === dd.raw[1] && 0 === dd.lockSkips && 0 === dd.lE && 0 === dd.dropped) return;
          const Jd = dd.looked > 0 ? dd.dtSum / dd.looked : NaN,
            kd = [`${dd.frames} frames (${dd.looked} looked, ${dd.idle} idle${"wasm"===this.client?`, ${dd.rO} carried`:""})`, `dt avg ${Kd(Jd)} min ${Kd(dd.dtMin)} max ${Kd(dd.dtMax)}, ${dd.longFrames} long`, `${dd.events} mousemoves (max ${Cd(dd.eventMax)} px, ${dd.bigEvents} big)`, `raw (${Cd(dd.raw[0])}, ${Cd(dd.raw[1])}) turned (${Cd(dd.turned[0])}, ${Cd(dd.turned[1])})`, `peak ${dd.peakRate.toFixed(2)} px/ms`, `put right ${dd.lE}, past limit ${dd.pastLimit}, lock skips ${dd.lockSkips}`, "lock " + (document.pointerLockElement ? "EC" : "free")];
          dd.dropped > 0 && kd.push(`${dd.dropped} doubled spike copies dropped`), dd.lost > 0 && kd.push(`${dd.lost} records lost`), dd.suppressed > 0 && kd.push(`${dd.suppressed} outlier lines not shown`), (0, pd.h)("look", `1s: ${kd.join("; ")}`)
        }, this.dump = () => [`look records (${this.client}): nowMs,dtMs,rawX,rawY,turnedX,turnedY,outcome,vX,vY,limit`, ...this.records.lines(), "mousemove events: timeStamp,movementX,movementY,locked", ...this.events.lines()].join("\n")
      }
      start(dd, Jd) {
        this.client = dd, this.take = Jd;
        const {
          screen: kd
        } = window;
        (0, pd.h)("look", `start: ${dd} client, dpr ${window.devicePixelRatio}, screen ${kd.width}x${kd.height}, pointer lock ${document.pointerLockElement?"EC":"free"}`), this.started || (this.started = !0, window.addEventListener("mousemove", this.onMouseMove, {
          capture: !0,
          passive: !0
        }), document.addEventListener("pointerlockchange", this.onLockChange), document.addEventListener("pointerlockerror", this.onLockError), document.addEventListener("visibilitychange", this.onVisibility), setInterval(this.flush, 1e3), (0, pd.g)("look", this.dump))
      }
      outlier(dd) {
        const Jd = this.tally;
        Jd.outliers >= 20 ? Jd.suppressed++ : (Jd.outliers++, (0, pd.h)("look", dd))
      }
      eventOutlier(dd) {
        const Jd = this.tally;
        Jd.eventLines >= 10 ? Jd.suppressed++ : (Jd.eventLines++, (0, pd.h)("look", dd))
      }
      takeRecords() {
        var dd;
        const Jd = null === (dd = this.take) || void 0 === dd ? void 0 : dd.call(this);
        if (Jd && Jd.length >= 2) {
          this.tally.lost += Jd[0], this.tally.dropped += Jd[1];
          for (let dd = 2; dd + 10 <= Jd.length; dd += 10) this.record(Jd, dd)
        }
      }
      droppedCopy() {
        this.tally.dropped++
      }
      endTake() {
        this.takeRecords(), this.take = null
      }
    }
    let Qd = null;

    function Ld(dd) {
      let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return Qd ??= new ld, Qd.start(dd, Jd), Qd.record
    }

    function Od() {
      var dd;
      null === (dd = Qd) || void 0 === dd || dd.endTake()
    }

    function ed() {
      var dd;
      null === (dd = Qd) || void 0 === dd || dd.droppedCopy()
    }
  },
  39115: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => hJ,
      d: () => EJ,
      f: () => cJ
    });
    var pd = kd(3566),
      Nd = kd(149),
      Wd = kd(193),
      Pd = kd(614),
      Zd = kd(33),
      gd = kd(2634),
      Cd = kd(3624),
      Kd = kd(3615),
      od = kd(1245);
    const ld = new WeakMap;
    class Qd {
      constructor(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
          aCd: !0
        };
        this.callbacks = Jd, this.options = kd, this.ykd = void 0, this.sessionId = void 0, this.JF = [], this.MCd = !1, this.pL = !1, this.FCd = void 0, this.rM = 0, this.UNd = 0, this.YCd = (dd, Jd) => {
          if (this.pL) return;
          const kd = Number(dd);
          this.MCd ? this.mCd(kd, Jd) : this.JF.push({
            id: kd,
            payload: Jd
          })
        }, this.dispose = () => {
          this.pL || (this.pL = !0, ld.delete(this), this.JF.length = 0, this.FCd())
        }, this.ykd = dd, this.sessionId = dd.sessionId, ld.set(this, []), this.FCd = this.bCd()
      }
      SCd(dd) {
        this.FCd(), this.ykd = dd, this.sessionId = dd.sessionId, this.rM = 0, this.UNd = 0, this.FCd = this.bCd()
      }
      get bM() {
        return this.UNd
      }
      bCd() {
        const dd = this.ykd.JG("*", this.YCd);
        return this.options.aCd && this.ykd.pG(this.dispose), dd
      }
      mCd(dd, Jd) {
        try {
          (0, Cd.jc)(dd) && (Jd = (0, Cd.d)(dd, Kd.kL.from(Jd)));
          const kd = ld.get(this)[dd];
          if ("function" !== typeof kd) {
            if (this.callbacks.jCd) return void this.callbacks.jCd(dd, Jd);
            throw new Error(`No onMessage handler registered for message id ${dd}`)
          }
          kd(Jd)
        } catch (kd) {
          this.callbacks.XCd(`Error in onMessage ${dd} with payload ${JSON.stringify(Jd)}`, kd)
        } finally {
          this.rM++
        }
      }
      fCd() {
        for (const {
            id: dd,
            payload: Jd
          }
          of this.JF) {
          if (this.pL) break;
          this.mCd(dd, Jd)
        }
        this.JF.length = 0
      }
      lq() {
        return this.pL
      }
      nCd() {
        if (this.MCd || this.pL) throw new Error("Trying to getOnMessageRegistrationHandler after registration finished");
        return {
          JG: (dd, Jd) => {
            if (this.MCd || this.pL) throw new Error("Trying to call onMessage after registration finished");
            this.JG(dd, Jd)
          },
          finishRegistration: () => {
            if (this.pL) throw new Error("Cannot finish message registration after disposal");
            this.MCd = !0, this.fCd()
          }
        }
      }
      JG(dd, Jd) {
        var kd, pd;
        null === (kd = (pd = this.callbacks).UCd) || void 0 === kd || kd.call(pd);
        const Nd = ld.get(this);
        for (; dd > Nd.length;) Nd[Nd.length] = null;
        Nd[dd] = Jd
      }
      send(dd, Jd) {
        this.yCd(), (0, od.D)(Jd) ? this.ykd.vF(dd, Jd) : this.ykd.send(dd, Jd)
      }
      yCd() {
        var dd, Jd;
        (this.UNd++, 5 === Ld++) && (null === (dd = (Jd = this.callbacks).UCd) || void 0 === dd || dd.call(Jd), Ld = 0)
      }
      xR() {
        this.dispose(), this.ykd.xR()
      }
      leave() {
        this.dispose(), this.ykd.leave()
      }
    }
    let Ld = 0;
    var Od = kd(3588);
    class ed extends Qd {
      constructor(dd) {
        super(dd, {
          UCd: () => {
            (0, Zd.o)(!0) && (0, pd.gM)()
          },
          XCd: (dd, Jd) => {
            var kd;
            null === (kd = (0, gd.e)()) || void 0 === kd || kd.PO(dd, Jd)
          }
        }, {
          aCd: !1
        }), (0, Od.c)(dd)
      }
      kF(dd, Jd) {
        return !!(0, Od.h)((0, Od.b)(), this.ykd, dd, Jd) && (this.yCd(), !0)
      }
      SCd(dd) {
        this.DCd(), super.SCd(dd), (0, Od.c)(dd)
      }
      xR() {
        super.xR(), this.DCd()
      }
      DCd() {
        this.ykd.bR.rQ.EY = void 0
      }
    }
    var Rd = kd(29),
      Id = kd(1955),
      Gd = kd(1753),
      vd = kd(36631);

    function xd(dd, Jd, kd, pd, Nd) {
      let Wd = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (!dd.vG.UJd(dd.kU)) return console.log("Got resync inven but don't have inven component"), void Jd.acknowledge(pd);
      Wd && console.error("Had to sync inven"), Jd.Jdd(pd, Nd) && kd.nO("chestToggleFromServer", !1, !0), kd.nO("syncedInvenFromServer")
    }
    var qd = kd(39118),
      Bd = kd(39126),
      sd = kd(38229),
      ad = kd(38004),
      Md = kd(610),
      Fd = kd(38552);

    function Yd(dd, Jd, kd) {
      const pd = function(dd) {
          const Jd = new Int32Array(dd.length * Fd.f);
          return dd.forEach(((dd, kd) => {
            const pd = kd * Fd.f;
            if (4 === dd.length) {
              const [kd, Nd, Wd, Pd] = dd;
              Jd.set([kd, Nd, Wd, kd, Nd, Wd, Pd], pd)
            } else {
              const [kd, Nd, Wd, Pd, Zd, gd, Cd] = dd;
              Jd.set([kd, Wd, Zd, Nd, Pd, gd, Cd], pd)
            }
          })), Jd
        }(kd),
        Nd = (Jd, kd, pd, Nd) => {
          dd.setBlockNoMulti(Jd, kd, pd, Nd, !0)
        };
      dd.client.gameRecorder.isCapturing() ? (0, Fd.rb)(pd, (0, Fd.ob)(pd), Nd) : dd.Jl.Vo.bq(pd, {
        kE: Nd,
        isHookId: Jd => dd.blockChangeHasHooks(Jd),
        watched: () => function(dd, Jd, kd) {
          const pd = [],
            Nd = (dd, Jd, kd) => {
              pd.push(dd, Jd, kd)
            },
            Wd = new Set;
          for (let Pd = 0; Pd < kd.length; Pd += Fd.f)
            for (let Jd = (0, Md.Q)(kd[Pd]); Jd <= (0, Md.Q)(kd[Pd + 3]); Jd++)
              for (let pd = (0, Md.Q)(kd[Pd + 1]); pd <= (0, Md.Q)(kd[Pd + 4]); pd++)
                for (let Zd = (0, Md.Q)(kd[Pd + 2]); Zd <= (0, Md.Q)(kd[Pd + 5]); Zd++) {
                  const kd = `${Jd}|${pd}|${Zd}`;
                  Wd.has(kd) || (Wd.add(kd), dd.blockDataOwner.forEachDataCell(Jd, pd, Zd, Nd))
                }
          return Jd.forEachCell(Nd), Int32Array.from(pd)
        }(dd, Jd, pd)
      }), dd.Jl.Edd()
    }
    var md = kd(37322),
      bd = kd(39128),
      Sd = kd(39131),
      jd = kd(1013),
      Xd = kd(1958);
    var fd = kd(4360);

    function nd(dd) {
      const Jd = dd.Vo;
      let kd = 0,
        Nd = -1,
        Pd = -1 / 0,
        Zd = null,
        gd = !0;
      const Kd = () => {
        if (++kd % 10 !== 0) return;
        const Kd = (0, pd.getLastReceivedPacketId)();
        if (Kd <= Nd) return;
        const [od, ld, Qd] = dd.vG.yI(dd.kU), Ld = ! function(dd) {
          var Jd;
          let kd = null === (Jd = dd.vG.Gkd(dd.kU)) || void 0 === Jd ? void 0 : Jd.zQ;
          if (void 0 === kd) return !1;
          const pd = new Set;
          for (; void 0 !== kd && !pd.has(kd);) {
            var Nd;
            pd.add(kd);
            const Jd = dd.vG.getState(kd, "smoothToServerPos"),
              Wd = Array.isArray(Jd) ? null : null === Jd || void 0 === Jd ? void 0 : Jd.serverPosition;
            if (Wd) {
              const Jd = dd.vG.yI(kd);
              if (Math.abs(Jd[0] - Wd[0]) > 10 || Math.abs(Jd[1] - Wd[1]) > 10 || Math.abs(Jd[2] - Wd[2]) > 10) return !0
            }
            kd = null === (Nd = dd.vG.Gkd(kd)) || void 0 === Nd ? void 0 : Nd.zQ
          }
          return !1
        }(dd) && function(dd, Jd, kd, pd) {
          const Nd = Wd.g.KL;
          for (let Wd = 0; Wd < dd.length; Wd++) {
            const Pd = dd[Wd];
            if (!(0, fd.k)(Jd, kd, pd, Pd[0] * Nd, Pd[1] * Nd, Pd[2] * Nd)) return !1
          }
          return !0
        }(Jd.jO.NL, od, ld, Qd), Od = null === Zd || Math.abs(od - Zd[0]) > 8 || Math.abs(ld - Zd[1]) > 8 || Math.abs(Qd - Zd[2]) > 8, ed = !gd || Od || performance.now() - Pd >= 1e4;
        gd = Ld, Ld && ed && (Nd = Kd, Pd = performance.now(), Zd = [od, ld, Qd], (0, pd.sendColyMessage)(Cd.xg, {
          dP: Kd
        }))
      };
      return dd.on("Do", Kd), () => {
        dd.off("Do", Kd)
      }
    }
    var Ud = kd(36942),
      yd = kd(325),
      Dd = kd.n(yd),
      Td = kd(6347),
      Ed = kd(38256),
      cd = kd(37987),
      hd = kd(37958),
      rd = kd(4379),
      ud = kd(38286),
      td = kd(38115),
      Vd = kd(37593),
      zd = kd(37886),
      Hd = kd(39133),
      wd = kd(36926),
      Ad = kd(36933),
      dJ = kd(39141),
      JJ = kd(39150),
      kJ = kd(3538),
      pJ = kd(1543),
      NJ = kd(2628),
      WJ = kd(2793),
      PJ = kd(38432),
      ZJ = kd(37221),
      gJ = kd(4657),
      CJ = kd(39197),
      KJ = kd(38275),
      oJ = kd(4081),
      lJ = kd(37314),
      QJ = kd(37403),
      LJ = kd(38294),
      OJ = kd(39159),
      eJ = kd(39167),
      RJ = kd(37588);
    class IJ {
      constructor(dd, Jd, kd, pd) {
        this.gameNameWithVariation = dd, this.Jl = kd, this.connectionResume = pd, this.stateReplicationHandler = void 0, this.stopChunkReports = () => {}, this.replayResume = null, this.stateReplicationHandler = new eJ.e(Jd, this.Jl)
      }
      setupStateReplicationHandlers() {
        this.stateReplicationHandler.setup(), (0, pd.onGameResetOnce)((() => {
          this.stateReplicationHandler.dispose()
        }))
      }
      SCd(dd) {
        this.stateReplicationHandler.dispose(), this.stateReplicationHandler = new eJ.e(dd, this.Jl), this.stateReplicationHandler.setup()
      }
      clearBlockRules() {
        const dd = this.Jl.Vo;
        dd.Mkd = new Set, dd.bkd = new Set, dd.Fkd = new Set, dd.Skd = new Set, dd.Ykd = [], dd.jkd = [], dd.pT = new Set, dd.zW = [], dd.lT = []
      }
      clearUiRequestsAndQTEs() {
        gJ.d.reset(), (0, Bd.c)()
      }
      startChunkReports() {
        const dd = function(dd) {
            let Jd = null,
              kd = -1 / 0,
              Nd = null;
            const Wd = () => {
                Nd = null;
                const Wd = Math.ceil(dd.jF[0]),
                  Pd = Math.ceil(dd.jF[1]);
                Jd && Jd[0] === Wd && Jd[1] === Pd || (Jd = [Wd, Pd], kd = performance.now(), (0, pd.sendColyMessage)(Cd.wg, {
                  yC: Wd,
                  DC: Pd
                }))
              },
              Pd = () => {
                null === Nd && (Nd = setTimeout(Wd, Math.max(0, kd + 250 - performance.now())))
              };
            return Wd(), dd.on("addRemoveDistanceChanged", Pd), () => {
              dd.off("addRemoveDistanceChanged", Pd), null !== Nd && (clearTimeout(Nd), Nd = null)
            }
          }(this.Jl.Vo),
          Jd = nd(this.Jl);
        this.stopChunkReports = () => {
          dd(), Jd()
        }
      }
      restartChunkStreaming() {
        (0, zd.l)(this.Jl, (0, gd.d)().recentChunkEdits.chunksEditedSince(this.connectionResume.getDroppedAt() - Hd.c)), this.startChunkReports()
      }
      setupOnMessageListeners(dd, Jd) {
        const kd = this.Jl,
          Nd = this.gameNameWithVariation;
        dd.JG(Cd.pc, (dd => {
          let {
            Hk: Jd,
            wk: pd,
            Ak: Nd,
            dp: Wd,
            Jp: Pd,
            kp: Zd,
            Np: gd,
            Wp: Cd,
            Pp: Kd
          } = dd;
          if (!kd.vG.JJd(Jd, "itemState")) return void(0, cd.p)(kd, Jd, [Pd, Zd, gd], pd, {
            amount: Nd,
            attributes: JSON.parse(Wd),
            Wp: Cd,
            size: Kd
          });
          const od = kd.vG.getState(Jd, "itemState");
          od.amount = Nd, od.Wp = Cd, od.creationTime = Date.now(), (0, hd.setServerPosition)(kd.vG.getState(Jd, "smoothToServerPos"), Pd, Zd, gd)
        })), dd.JG(Cd.gb, (dd => {
          (0, md.d)(kd).setCantPickUp(dd, !0), kd.vG.JJd(dd, "itemState") && (kd.vG.getState(dd, "itemState").Wp = !0)
        })), dd.JG(Cd.Ud, (dd => {
          (0, md.d)(kd).setCantPickUp(dd, !1), kd.vG.JJd(dd, "itemState") && (kd.vG.getState(dd, "itemState").Wp = !1)
        })), dd.JG(Cd.Oc, (dd => {
          Id.b.applyNewClientOptions(dd)
        })), dd.JG(Cd.Sc, (dd => {
          let {
            eId: Jd,
            settings: pd
          } = dd;
          (0, QJ.h)(Jd);
          for (const kd in pd)(0, QJ.d)(Jd, kd, pd[kd]);
          if ("canSee" in pd && kd.vG.JJd(Jd, "hidingMeshManager")) {
            const dd = kd.vG.getState(Jd, "hidingMeshManager");
            dd.canSee = (0, LJ.b)("canSee", pd.canSee), dd._forceUpdate = !0
          }
        })), dd.JG(Cd.nf, (dd => {
          let {
            KJ: Jd,
            oJ: Nd,
            lJ: Wd,
            QJ: Pd
          } = dd;
          const Zd = [Nd, Wd, Pd];
          kd.vG.setPosition(kd.kU, Zd), (0, pd.sendColyMessage)(Cd.Ug, {
            eC: Jd,
            RC: rd.c
          }), Rd.j.nO("localPlayerTeleported", {
            pos: Zd,
            isCorrection: !1
          })
        })), dd.JG(Cd.bd, (dd => {
          let {
            dd: Jd,
            Jd: kd,
            kd: pd,
            pd: Nd
          } = dd;
          this.stateReplicationHandler.setUpIfQueued(Jd);
          const Wd = [kd, pd, Nd];
          Rd.j.nO(`otherPlayerTeleported|${Jd}`, {
            pos: Wd
          })
        })), dd.JG(Cd.vd, (dd => {
          let {
            LN: Jd,
            ON: Nd,
            eN: Wd,
            RN: Pd,
            IN: Zd,
            GN: gd,
            vN: Kd,
            qN: od,
            xN: ld,
            iN: Qd
          } = dd;
          const Ld = [Nd, Wd, Pd];
          kd.vG.setPosition(kd.kU, Ld);
          const Od = kd.vG.RJd(kd.kU),
            ed = kd.vG.qT(kd.kU);
          Dd().set(ed.qD, 0, 0, 0), Dd().set(ed.mD, 0, 0, 0), Dd().set(ed.hO, Zd, gd, Kd), ed.bD(), Od._flying = null !== Qd, Qd ? (Od.flyAccel.aN = Qd.aN, Od.flyAccel.MN = Qd.MN) : Od.flyAccel.reset(), od && Od.movementType === Td.i.GLIDING && (Od.BN = od.BN, Dd().copy(Od.sN, od.sN)), (0, pd.sendColyMessage)(Cd.Ug, {
            eC: Jd,
            RC: rd.c
          }), Rd.j.nO("localPlayerTeleported", {
            pos: Ld,
            isCorrection: !0
          })
        }));

        function Wd() {
          return kd.vG.yJd(kd.kU)
        }
        dd.JG(Cd.mb, (dd => {
          let {
            chatMsgId: Jd,
            content: kd,
            chatterEId: pd
          } = dd;
          Rd.j.nO("chat", {
            serverChatMsgId: Jd,
            content: kd,
            chatterEId: pd
          }, !0)
        })), dd.JG(Cd.jd, (dd => {
          NJ.e.onReceiveColyseusPing(dd)
        })), dd.JG(Cd.Fe, (dd => {
          let {
            key: Jd,
            value: kd
          } = dd;
          (0, Gd.setCookie)(Nd, Jd, kd)
        })), dd.JG(Cd.Ne, (dd => {
          Rd.j.nO("setDiscordReportKey", dd)
        })), (0, pd.onGameResetOnce)((() => {
          this.stopChunkReports()
        })), dd.JG(Cd.lc, (Jd => {
          const {
            BJ: Nd,
            sJ: Wd
          } = Jd;
          if ((0, pd.setAdjustment)(Wd), this.connectionResume.onInitialInfo(Jd.iJ, Jd.aJ), pd.offlineInputReplay.XM(Jd.MJ), this.connectionResume.isResuming()) {
            console.log("Resumed the connection as eId", Nd);
            try {
              null === Jd.FJ && (0, gd.d)().client.inventoryPrediction.dropPending(), this.stopChunkReports(), this.clearBlockRules(), Id.b.apply({
                shopInfo: null,
                _shopVersion: Xd.d
              });
              const pd = kd.vG.DJd(kd.kU);
              pd.Ek && (pd.chestClosed(), Rd.j.nO("chestToggleFromServer", !1, !0)), this.clearUiRequestsAndQTEs(), Rd.j.nO("initInfoReceived", dd)
            } finally {
              const dd = null === Jd.FJ ? null : {
                sync: null,
                endSeq: null
              };
              this.replayResume = dd, this.connectionResume.onResumeInitialInfo(Jd.FJ, (() => {
                dd.endSeq = (0, gd.d)().client.inventoryPrediction.lastActionSeq
              })), null === dd && this.restartChunkStreaming()
            }
          } else console.log("Local client is eId", Nd), Rd.j.nO("loadingScreenState", "loadingPage:loadingWorld"), kd.pJd = Nd, kd.vG.JJd(kd.kU, kd.vG.names.entityName) && kd.vG.nS(kd.kU, kd.vG.names.entityName), (0, gd.d)().setEntityName(kd.pJd, (0, gd.d)().getRawEntityName(kd.kU)), kd.dU[kd.pJd] = {}, kd.vG.bS(kd.kU, kd.vG.names.entityName), Rd.j.nO("initInfoReceived", dd), this.startChunkReports(), Pd.client.onServerConnectionFinalised()
        })), dd.JG(Cd.oe, (() => {
          this.connectionResume.isResuming() ? this.connectionResume.onResumed((() => {
            const dd = this.replayResume;
            if (this.replayResume = null, !dd) return;
            this.restartChunkStreaming();
            const {
              inventoryPrediction: Jd
            } = (0, gd.d)().client, {
              sync: Nd
            } = dd, Wd = new Set(pd.offlineInputReplay.takeDroppedActions());
            if (Nd) {
              var Pd;
              const pd = null !== (Pd = dd.endSeq) && void 0 !== Pd ? Pd : Jd.lastActionSeq;
              Jd.forget((dd => dd > Nd.pJ && dd <= pd || Wd.has(dd))), xd(kd, Jd, Rd.j, Nd.pJ, Nd.load)
            } else Jd.dropPending(), Jd.askForSnapshot()
          })) : console.warn("ResumeComplete arrived without a resume")
        })), dd.JG(Cd.of, (dd => {
          Rd.j.nO("TopRightHelper", dd, !0)
        })), dd.JG(Cd.Bd, (dd => {
          let {
            type: Jd,
            location1: kd,
            location2: pd,
            location3: Nd,
            score: Wd
          } = dd;
          (0, WJ.t)({
            type: Jd,
            location1: kd,
            location2: pd,
            location3: Nd,
            score: Wd
          })
        })), dd.JG(Cd.ne, (dd => {
          let {
            type: Jd,
            resourceType: kd,
            amount: pd,
            category: Nd,
            itemName: Wd
          } = dd;
          (0, WJ.v)({
            type: Jd,
            resourceType: kd,
            amount: pd,
            category: Nd,
            itemName: Wd
          })
        })), dd.JG(Cd.T, (dd => {
          kd.Vo.Mkd.add(dd), kd.Vo.bkd.delete(dd)
        })), dd.JG(Cd.$, (dd => {
          kd.Vo.bkd.add(dd), kd.Vo.Mkd.delete(dd)
        })), dd.JG(Cd.Xd, (dd => {
          kd.Vo.bkd.delete(dd), kd.Vo.Mkd.delete(dd)
        })), dd.JG(Cd._, (dd => {
          kd.Vo.Fkd.add(dd), kd.Vo.Skd.delete(dd)
        })), dd.JG(Cd.eb, (dd => {
          kd.Vo.Skd.add(dd), kd.Vo.Fkd.delete(dd)
        })), dd.JG(Cd.de, (dd => {
          kd.Vo.Skd.delete(dd), kd.Vo.Fkd.delete(dd)
        })), dd.JG(Cd.W, (dd => {
          (0, od.eb)(dd, kd.Vo.jkd), (0, od.eb)(dd, kd.Vo.Ykd), kd.Vo.Ykd.push(dd)
        })), dd.JG(Cd.ab, (dd => {
          (0, od.eb)(dd, kd.Vo.Ykd), (0, od.eb)(dd, kd.Vo.jkd), kd.Vo.jkd.push(dd)
        })), dd.JG(Cd.$d, (dd => {
          (0, od.eb)(dd, kd.Vo.Ykd), (0, od.eb)(dd, kd.Vo.jkd)
        })), dd.JG(Cd.Ff, (dd => {
          let {
            qk: Jd,
            Bk: pd
          } = dd;
          pd ? kd.Vo.pT.delete(Jd) : kd.Vo.pT.add(Jd)
        })), dd.JG(Cd.Ef, (dd => {
          let {
            zW: Jd,
            HW: pd
          } = dd;
          Pd.updateWalkThroughRect(kd.kU, Jd, pd)
        })), (0, pd.onGameResetOnce)((() => {
          this.clearBlockRules()
        })), dd.JG(Cd.mf, (dd => {
          (0, qd.e)(dd)
        })), dd.JG(Cd.dc, (dd => {
          sd.e.applyServerUpdate(dd)
        })), dd.JG(Cd.hb, (dd => {
          Pd.applyServerBlocks((() => {
            ! function(dd, Jd) {
              for (const {
                  uW: kd,
                  tW: pd
                }
                of Jd) {
                const Jd = ad.d[pd];
                if (Jd) {
                  const {
                    compX: pd,
                    compY: Nd,
                    compZ: Wd,
                    mainMultiblock: Pd
                  } = Jd;
                  dd.aY(kd[0] - pd, kd[1] - Nd, kd[2] - Wd, Pd)
                }
              }
              for (const {
                  uW: kd,
                  tW: pd,
                  VW: Nd
                }
                of Jd) dd.setBlockNoMulti(kd[0], kd[1], kd[2], pd, !0), dd.blockDataOwner.setBlockData(kd[0], kd[1], kd[2], null === Nd ? void 0 : JSON.parse(Nd)), dd.blockAdded(kd[0], kd[1], kd[2], pd)
            }(Pd, dd)
          })), Rd.j.nO("changeBlockFail", dd), Pd.client.triggerGameCallback("onChangeBlockFail", dd), Rd.j.nO("EditBoard", {
            pos: null
          }), Rd.j.nO("EditCodeBlock", {
            pos: null,
            canChangePos: null
          })
        })), dd.JG(Cd.id, (dd => {
          let {
            pickUpItems: Jd,
            pickUpAckSeq: kd
          } = dd;
          for (const {
              name: pd,
              amount: Nd,
              attributes: Pd
            }
            of Jd) Wd().pickUpItem({
            name: pd,
            amount: Nd,
            typeObj: cd.D[pd],
            attributes: Pd
          });
          (0, gd.d)().client.inventoryPrediction.serverChangeApplied(kd)
        })), dd.JG(Cd.Re, (dd => {
          let {
            index: Jd,
            name: pd,
            amount: Nd,
            attributes: Wd,
            setSlotAckSeq: Pd
          } = dd;
          const Zd = kd.vG.DJd(kd.kU);
          (Jd < Zd.playerInventory.numSlots || Zd.Ek || Zd.inCreative) && Zd.setItemSlot(Jd, pd, Nd, Wd), (0, gd.d)().client.inventoryPrediction.serverChangeApplied(Pd)
        })), dd.JG(Cd.if, (dd => {
          let {
            Tk: Jd,
            tk: pd,
            pJ: Nd
          } = dd;
          const {
            inventoryPrediction: Wd
          } = (0, gd.d)().client, Pd = () => {
            kd.vG.DJd(kd.kU).loadFromString(Jd)
          };
          this.replayResume && (this.replayResume.sync = {
            pJ: Nd,
            load: Pd
          }), xd(kd, Wd, Rd.j, Nd, Pd, pd)
        })), dd.JG(Cd.oc, (dd => {
          (0, gd.d)().client.inventoryPrediction.acknowledge(dd)
        })), dd.JG(Cd.B, (dd => {
          let {
            Td: Jd,
            Ed: kd,
            hd: pd,
            rd: Nd
          } = dd;
          (0, gd.d)().client.itemDropPrediction.onActionItemDrops(Jd, kd, pd, Nd)
        })), dd.JG(Cd.yb, (dd => {
          Wd().clearInventory(), (0, gd.d)().client.inventoryPrediction.serverChangeApplied(dd)
        })), dd.JG(Cd.Cc, (dd => {
          let {
            leaveEventType: Jd,
            category: kd,
            subCategory: pd,
            value: Nd
          } = dd;
          (0, WJ.G)({
            leaveEventType: Jd,
            category: kd,
            subCategory: pd,
            value: Nd
          })
        })), dd.JG(Cd.Lb, (dd => {
          let {
            cat1: Jd,
            cat2: kd,
            cat3: pd,
            value: Nd
          } = dd;
          (0, WJ.p)({
            cat1: Jd,
            cat2: kd,
            cat3: pd,
            value: Nd
          })
        }));
        const Pd = (0, gd.d)();
        dd.JG(Cd.Fb, (dd => {
          Pd.applyServerBlocks((() => {
            Yd(Pd, sd.e, dd)
          }))
        })), dd.JG(Cd.Ve, (dd => {
          Rd.j.nO("setSelectedInventorySlotI", dd, !0)
        })), dd.JG(Cd.yc, (dd => {
          let {
            category: Jd,
            timeframe: kd,
            data: pd
          } = dd;
          Rd.j.nO("leaderboardResponse", {
            category: Jd,
            timeframe: kd,
            data: pd
          })
        })), dd.JG(Cd.S, (dd => {
          let {
            xJ: Jd,
            qJ: kd
          } = dd;
          this.stateReplicationHandler.setUpIfQueued(Jd), Jd = (0, Ud.b)(Jd), (0, gd.d)().client.gameRecorder.recordBulletShot(Jd, kd), Rd.j.nO(`bulletShot|${Jd}`, {
            bulletDirections: kd
          })
        })), dd.JG(Cd.fc, (dd => {
          let {
            Yp: Jd,
            mp: kd
          } = dd;
          Rd.j.nO("damagedByOtherPlayer", {
            Yp: Jd,
            direction: kd
          }, !0)
        })), dd.JG(Cd.ud, (dd => {
          Rd.j.nO("playerKilled", dd, !0), (0, gd.d)().client.gameRecorder.recordPlayerKilled(dd.deadEId, dd.killerEId, dd.withItem, dd.killstreak)
        })), dd.JG(Cd.Nb, (dd => {
          Rd.j.nO("customKillfeed", dd, !0), (0, gd.d)().client.gameRecorder.recordCustomKillfeed(dd.killer, dd.victim, dd.withItem)
        })), dd.JG(Cd.Ed, (dd => {
          let {
            YN: Jd,
            mN: pd
          } = dd;
          this.stateReplicationHandler.setUpIfQueued(Jd);
          const Nd = kd.vG.Pkd(Jd);
          null !== Nd && void 0 !== Nd && Nd.isGun() && Nd.reload(Date.now(), pd)
        })), dd.JG(Cd.ef, (() => {
          Rd.j.nO("showShopTutorial", null, !0)
        })), dd.JG(Cd.zd, (dd => {
          Rd.j.nO("progressBarUpdate", dd, !0)
        })), dd.JG(Cd.nc, (dd => {
          Rd.j.nO("middleScreenBarInitiate", {
            duration: dd.LJ,
            OJ: dd.OJ,
            horizBarRemOffset: dd.eJ
          }, !0)
        })), dd.JG(Cd.Md, (() => {
          Rd.j.nO("middleScreenBarRemove", !0)
        })), dd.JG(Cd.se, (dd => {
          let {
            Fd: Jd,
            Yd: pd
          } = dd;
          const Nd = pd ? (0, KJ.i)(kd, pd) : void 0;
          Rd.j.nO("sendHitmarker", {
            Fd: Jd,
            screenPos: Nd
          }, !0)
        })), dd.JG(Cd.Je, (dd => {
          let {
            id: Jd,
            position: kd,
            style: pd,
            Ip: Nd,
            vp: Wd
          } = dd;
          Rd.j.nO("setDirectionArrow", {
            id: Jd,
            position: kd,
            style: pd,
            text: (0, Cd.t)(Nd),
            vp: Wd
          }, !0)
        })), dd.JG(Cd.vb, (dd => {
          let {
            id: Jd
          } = dd;
          Rd.j.nO("clearDirectionArrow", {
            id: Jd
          }, !0)
        })), dd.JG(Cd.D, (dd => {
          let {
            Pd: Jd,
            Zd: pd,
            animationScript: Nd,
            Cd: Wd,
            Kd: Pd,
            od: Zd,
            ld: Cd
          } = dd;
          Jd = (0, Ud.b)(Jd);
          const Kd = null === Nd && null !== Zd ? (0, bd.f)(Zd, Cd) : Nd;
          (0, gd.d)().client.gameRecorder.recordAnimateEntity(Jd, pd, Kd, Wd, Pd), (0, md.d)(kd).animations.animateEntity(Jd, pd, Nd, Wd, Pd, Zd, Cd), null !== Nd || Jd === kd.kU && pd === lJ.h.Emote && (0, gd.d)().client.cameraController.endTemporaryThirdPerson()
        })), dd.JG(Cd.wf, (dd => {
          let {
            wW: Jd,
            AW: kd
          } = dd;
          if (Pd.Eu(Jd[0], Jd[1], Jd[2])) {
            const dd = (0, gd.d)().MI(Jd[0], Jd[1], Jd[2]);
            (0, gd.d)().updateMailboxContents(Jd[0], Jd[1], Jd[2], dd, kd)
          }
        })), dd.JG(Cd.qb, (dd => {
          let {
            ud: Jd,
            td: pd,
            Vd: Nd,
            zd: Wd,
            Hd: Pd,
            wd: Zd,
            Ad: Cd,
            dJ: Kd
          } = dd;
          const od = kd.vG.DJd(kd.kU);
          if (Zd) {
            const {
              kJ: dd,
              pJ: Jd
            } = Kd;
            return (0, gd.d)().client.inventoryPrediction.Jdd(Jd, (() => {
              od.chestRefreshed(pd, Nd, Wd, Cd, dd)
            })) && Rd.j.nO("chestToggleFromServer", !1, !0), void Rd.j.nO("chestRefreshedFromServer")
          }(Jd || od.Ek) && (Jd ? (od.chestOpened(pd, Nd, Wd, Pd, Cd), null !== Pd && (0, gd.d)().client.ironChestPasskeyCache.onChestOpened(Wd, Pd)) : od.chestClosed(), Rd.j.nO("chestToggleFromServer", Jd, !0))
        })), dd.JG(Cd.Ob, (dd => {
          let {
            craftingRecipeItemName: Jd,
            recipesForItem: pd
          } = dd;
          Jd ? Pd.craftingManager.editRecipesForPlayer(kd.kU, Jd, pd) : Pd.craftingManager.resetAllPlayerRecipes(kd.kU), Rd.j.nO("craftingRecipesEdited", {
            itemName: Jd,
            recipesForItem: pd
          })
        })), dd.JG(Cd.We, (dd => {
          let {
            vehicleEId: Jd,
            overrides: kd
          } = dd;
          (0, gd.d)().applyRiddenVehicleSettingOverrides(Jd, kd)
        })), dd.JG(Cd.Af, (dd => {
          let {
            Uk: Jd,
            yk: pd,
            Dk: Nd
          } = dd;
          const Wd = kd.vG.RJd(kd.kU).physicsState.type === Td.k.SLEEPING && Jd === Td.k.DEFAULT;
          (0, gd.d)().updatePositionAndPhysics(kd.kU, {
            type: Jd,
            tier: pd
          }, !0, Nd), Wd && (0, gd.d)().updateHeldVehicleStatus()
        })), dd.JG(Cd.ib, (dd => {
          let {
            ap: Jd,
            Mp: pd
          } = dd;
          kd.vG.nJd(kd.kU).setPose(Jd, pd)
        })), dd.JG(Cd.pe, (dd => {
          (0, OJ.e)(dd)
        })), dd.JG(Cd.rd, (dd => {
          for (const Jd of dd)(0, ud.D)(Jd);
          Rd.j.nO("playerCosmeticsUpdated", dd, !0)
        })), dd.JG(Cd.J, (dd => {
          for (const Jd of dd)(0, ZJ.d)(kd, Jd)
        })), dd.JG(Cd.Fc, (dd => {
          let {
            bd: Jd,
            Sd: pd,
            Xd: Nd,
            fd: Wd,
            Ud: Zd,
            yd: gd,
            Dd: Cd
          } = dd;
          this.stateReplicationHandler.setUpIfQueued(Jd), Jd = (0, Ud.b)(Jd);
          const Kd = kd.vG.AJd(Jd);
          if (Kd && (Kd.lastHurtTime = performance.now()), (0, Ed.playRigHurt)(kd, Jd, gd), Rd.j.nO("lifeformHurt", {
              eId: Jd,
              Dd: Cd
            }), pd) {
            const dd = (0, KJ.i)(kd, pd.Yd);
            Rd.j.nO("yourAttackHit", {
              Fd: Wd,
              screenPos: dd,
              hitSelf: Jd === kd.kU
            })
          }
          Jd === kd.kU && (Pd.shakePlayerCamera(Jd, Zd / 40, 200), Rd.j.nO("closeShopOnDamaged", null), Rd.j.nO("damagedByOtherPlayer", {
            Yp: null,
            direction: gd,
            Ud: Zd
          }, !0));
          const od = kd.vG.yI(Jd);
          if (od && (Nd || Wd)) {
            const dd = [od[0], od[1] + 1, od[2]];
            Nd && (0, td.g)(kd, td.u, dd, 15), Wd && (0, td.g)(kd, td.j, dd, 10)
          }
        })), dd.JG(Cd.Ec, (dd => {
          let {
            Ck: Jd,
            Kk: pd,
            lk: Nd
          } = dd;
          (0, md.d)(kd).setHealthFrac((0, Ud.b)(Jd), Nd), Rd.j.nO("lifeformHealthChanged", {
            eId: (0, Ud.b)(Jd),
            Kk: pd,
            lk: Nd
          })
        })), dd.JG(Cd.M, (dd => {
          let {
            ak: Jd,
            Mk: pd
          } = dd;
          (0, gd.d)().playerAttacked(kd.kU, Jd, pd)
        })), dd.JG(Cd.uc, (dd => {
          (0, gd.d)().client.leaveGameUnwanted({
            reason: dd,
            requiresRefresh: !1,
            canReconnect: !1,
            automaticallyReconnect: !1
          }), (0, pJ.navigatePreserveSearch)("/")
        })), dd.JG(Cd.Kd, (dd => {
          let {
            Fk: Jd,
            Yk: kd,
            mk: pd
          } = dd;
          Wd().removeItemName(Jd, kd), (0, gd.d)().client.inventoryPrediction.serverChangeApplied(pd)
        })), dd.JG(Cd.ye, (dd => {
          const {
            nZ: Jd,
            ekd: pd
          } = (0, Vd.f)([dd[0], dd[1], dd[2]]);
          RJ.c.setLookDirection(kd, Jd, pd), (0, zd.w)(Jd, pd);
          const Nd = kd.vG.nJd(kd.kU);
          Nd && (Nd.heading = Jd)
        })), dd.JG(Cd.Be, (dd => {
          Pd.client.cameraController.setCameraZoom(dd)
        })), dd.JG(Cd.af, (dd => {
          let {
            sk: Jd,
            ik: pd
          } = dd;
          Pd.shakePlayerCamera(kd.kU, Jd, pd)
        })), dd.JG(Cd.Ib, (dd => {
          (0, kJ.onCosmeticPackGranted)(dd)
        })), dd.JG(Cd.ve, (dd => {
          Rd.j.nO("serverUpdating", Date.now() + dd, !0)
        })), dd.JG(Cd.Lc, Sd.c), dd.JG(Cd.$c, (dd => {
          let {
            id: Jd,
            yp: kd
          } = dd;
          const {
            type: Nd,
            params: Wd
          } = (0, CJ.e)(kd), Pd = {
            ...Wd
          };
          for (const pd of CJ.b) pd in Pd && Pd[pd] && (Pd[pd] = (0, Cd.t)(Pd[pd]));
          gJ.d.queueQTE(Jd, Nd, Pd).getResult().then((dd => {
            "boolean" === typeof dd && (0, pd.sendColyMessage)(Cd.Di, {
              qteId: Jd,
              qteResponse: dd
            })
          }))
        })), dd.JG(Cd.Qd, (dd => {
          gJ.d.cancelQTE(dd)
        })), (0, pd.onGameResetOnce)((() => {
          gJ.d.reset()
        })), dd.JG(Cd.ad, (dd => {
          let {
            id: Jd,
            clientParameters: kd
          } = dd;
          (0, Bd.e)(Jd, kd)
        })), dd.JG(Cd.Rd, (dd => {
          (0, Bd.h)(dd)
        })), dd.JG(Cd.uf, (dd => {
          let {
            text: Jd,
            id: kd
          } = dd;
          (0, Bd.i)(kd, Jd, (dd => {
            (0, pd.sendColyMessage)(Cd.Yj, {
              RK: kd,
              IK: dd,
              GK: 5
            })
          }))
        })), dd.JG(Cd.Qb, (dd => {
          let {
            tJ: Jd,
            VJ: kd,
            zJ: pd,
            HJ: Nd,
            wJ: Wd,
            AJ: Pd
          } = dd;
          Jd = (0, Ud.b)(Jd), (0, gd.d)().client.updateEffect(Jd, kd, {
            displayName: pd,
            icon: Nd,
            duration: Wd,
            level: Pd
          })
        })), dd.JG(Cd.Id, (dd => {
          let {
            tJ: Jd,
            VJ: kd
          } = dd;
          Jd = (0, Ud.b)(Jd), (0, gd.d)().client.removeEffect(Jd, kd)
        })), dd.JG(Cd.sc, (dd => {
          kd.vG.nJd(kd.kU).jumpMultiplier.setMultiplierType("jumpEffectAmount", dd)
        })), dd.JG(Cd.qf, (dd => {
          Rd.j.nO("ttbEffectMultiplier", dd)
        })), (0, pd.onGameResetOnce)((() => {
          kd.vG.nJd(kd.kU).jumpMultiplier.setMultiplierType("jumpEffectAmount", 1)
        })), dd.JG(Cd.Wc, (dd => {
          (0, td.h)(kd, (0, od.r)(dd))
        })), dd.JG(Cd._c, (dd => {
          oJ.d[dd.FN] ? (0, td.h)(kd, {
            ...oJ.d[dd.FN],
            pos1: dd.pos1,
            pos2: dd.pos2
          }) : console.error(`Unknown preset id: ${dd.FN}`)
        })), dd.JG(Cd.nd, (dd => {
          var Jd, kd;
          let {
            Jk: pd,
            kk: Nd,
            Nk: Wd,
            Wk: Pd
          } = dd, {
            Zk: Zd,
            gk: Cd
          } = null !== Pd && void 0 !== Pd ? Pd : {};
          const {
            Pk: Kd
          } = null !== Pd && void 0 !== Pd ? Pd : {};
          Zd = null !== (Jd = Zd) && void 0 !== Jd ? Jd : void 0, Cd = null !== (kd = Cd) && void 0 !== kd ? kd : void 0, "string" === typeof Kd && this.stateReplicationHandler.setUpIfQueued(Kd), (0, gd.d)().client.gameRecorder.recordPlaySound(pd, Nd, Wd, Pd), wd.b.play((0, Ad.g)(pd), Nd, Kd, Zd, Cd).rate(Wd)
        })), dd.JG(Cd.xe, (dd => {
          let {
            pos: Jd,
            data: kd
          } = dd;
          Pd.blockDataOwner.setBlockData(Jd[0], Jd[1], Jd[2], kd), Pd.blockAdded(Jd[0], Jd[1], Jd[2], Pd.MI(Jd[0], Jd[1], Jd[2]))
        })), dd.JG(Cd.ed, (dd => {
          let {
            info: Jd
          } = dd;
          Rd.j.nO("overShopInfo", Jd, !0)
        })), dd.JG(Cd.Zb, (dd => {
          let {
            Vk: pd,
            zk: Nd
          } = dd;
          Jd.openShop(kd.kU, pd, Nd)
        })), dd.JG(Cd.H, (dd => {
          kd.vG.qT(kd.kU).applyImpulse(dd)
        })), dd.JG(Cd.Ze, (dd => {
          const Jd = kd.vG.qT(kd.kU);
          Dd().set(Jd.qD, 0, 0, 0), Dd().set(Jd.mD, 0, 0, 0), Dd().copy(Jd.hO, dd), Jd.bD()
        })), dd.JG(Cd.Gc, (dd => {
          console.error(`[logErrorToConsole]: ${dd}`)
        })), dd.JG(Cd.Wb, (dd => {
          let {
            bk: Jd,
            Xk: kd,
            fk: pd
          } = dd;
          Rd.j.nO("flyingMiddleMessage", {
            content: (0, Cd.t)(Jd),
            Xk: kd,
            fk: pd
          }, !0)
        })), dd.JG(Cd.Hf, (dd => {
          const Jd = dd === jd.f ? null : {
            message: `Currently loaded as variation: ${dd}`,
            type: "Warning"
          };
          Rd.j.nO("showPermanentBottomMessage", Jd, !0)
        })), dd.JG(Cd.ac, (dd => {
          let {
            messageType: Jd,
            data: kd
          } = dd;
          (0, dJ.d)(Jd) ? (0, dJ.b)(Jd, kd) : ("freeCamPerms" === Jd && Pd.client.freeCameraController.setPerms(kd.key, kd.value), Pd.client.triggerGameCallback("onReceivedMessageFromServer", Jd, kd))
        })), dd.JG(Cd.lb, (() => {
          const dd = kd.vG.Pkd(kd.kU);
          null !== dd && void 0 !== dd && dd.isChargeable() && dd.finishCharging(!1, Date.now())
        })), dd.JG(Cd.Jd, (dd => {
          let {
            nk: Jd
          } = dd;
          Pd.craftingManager.removeRecipes(kd.kU, Jd), Rd.j.nO("craftingRecipesEdited", {
            itemName: Jd,
            recipesForItem: []
          })
        })), dd.JG(Cd.zf, (dd => {
          for (const Jd in dd) {
            const kd = dd[Jd];
            for (const dd in kd) Pd.client.meshCreator.handleParticleSystemUpdate(Jd, dd, kd[dd])
          }
        })), (0, pd.onGameResetOnce)((() => {
          (0, PJ.setFloatingYValue)(kd.vG.getState(kd.kU, "physics"), kd.vG.bV(kd.kU), null)
        })), dd.JG(Cd.Sb, (dd => {
          let {
            bp: Jd,
            Sp: pd,
            jp: Nd
          } = dd;
          const Wd = (0, Ud.b)(Jd);
          if (Wd === kd.kU) {
            const dd = kd.vG.bV(kd.kU).position;
            Nd ??= Math.floor(dd[1]) - 1, (0, PJ.setFloatingYValue)(kd.vG.getState(kd.kU, "physics"), kd.vG.bV(kd.kU), pd ? Nd : null)
          }(0, md.d)(kd).setFloating(Wd, pd, Nd);
          const Pd = kd.vG.getState(Wd, "floating");
          Pd && (Pd.isFloating = pd, Pd.jp = pd ? Nd : null)
        })), dd.JG(Cd.Bb, JJ.k)
      }
    }
    window.addEventListener("beforeunload", (() => {}));
    var GJ = kd(39203),
      vJ = kd(39206),
      xJ = kd(645),
      qJ = kd(2812);
    class BJ {
      constructor(dd, Jd, kd, pd) {
        this.msgHandler = kd, this.listener = pd, this.session = void 0, this.attachedRoom = null, this.detachRoomListeners = null, this.suspended = !1, this.droppedAt = 0, this.session = new GJ.d({
          reconnect: dd,
          isLive: () => pd.isLive(),
          onReconnected: dd => {
            this.resumeOnRoom(dd)
          },
          onGaveUp: (dd, Jd) => {
            pd.onGaveUp(dd, Jd)
          },
          freeze: Jd,
          releaseSeat: Jd => {
            dd(Jd).then((dd => {
              dd.leave(!0)
            }), (dd => {
              console.warn("Couldn't release the held seat of a game left while reconnecting", dd)
            }))
          }
        })
      }
      onInitialInfo(dd, Jd) {
        this.session.onInitialInfo(dd, Jd)
      }
      isResuming() {
        return this.session.isResuming()
      }
      getDroppedAt() {
        return this.droppedAt
      }
      onResumeInitialInfo(dd, Jd) {
        if (this.session.onResuming(), null === dd) {
          try {
            (0, gd.d)().client.itemDropPrediction.reset()
          } catch (kd) {
            console.error("Error dropping the item drop predictions on resuming", kd)
          }
          return pd.offlineInputReplay.discard(), void this.setSuspended(!1)
        }(0, gd.d)().client.itemDropPrediction.onResumeReplayOffered(), pd.offlineInputReplay.replayFrom(dd.mJ, Jd)
      }
      onResumed(dd) {
        this.setSuspended(!1), (0, pd.resendBeacons)();
        try {
          dd()
        } catch (Jd) {
          console.error("Error completing the resume", Jd)
        } finally {
          this.session.onResumed()
        }
      }
      attachRoom(dd) {
        const Jd = (0, xJ.g)((() => dd.connection.isOpen));
        dd.pG(Jd);
        const kd = new vJ.b((() => {
          this.session.canHoldSeat() && this.listener.isLive() && (console.warn("The game server went silent, reconnecting"), this.onConnectionDropped(dd, "silent"), dd.leave(!1))
        }));
        dd.onStateChange((() => {
          kd.heard()
        }));
        const pd = Jd => {
          Jd.persisted || dd.leave(!0)
        };
        window.addEventListener("pagehide", pd), dd.pG(((Jd, kd) => {
          if (dd === this.attachedRoom && this.listener.isLive()) return (0, Wd.h)(Jd) && this.session.canHoldSeat() ? (console.warn(`Connection to the game server dropped with code ${Jd}, reconnecting`), this.listener.onDropped(Jd, kd), void this.onConnectionDropped(dd, String(Jd))) : void this.listener.onRoomLeft(Jd, kd)
        })), this.attachedRoom = dd, this.detachRoomListeners = () => {
          Jd(), kd.dispose(), window.removeEventListener("pagehide", pd)
        }
      }
      dispose() {
        this.detachRoom(), this.session.leave(), this.setSuspended(!1)
      }
      setSuspended(dd) {
        dd !== this.suspended && (this.suspended = dd, (0, pd.setConnectionSuspended)(dd), (0, gd.d)().client.itemDropPrediction.setSuspended(dd))
      }
      detachRoom() {
        var dd;
        null === (dd = this.detachRoomListeners) || void 0 === dd || dd.call(this), this.detachRoomListeners = null, this.attachedRoom = null
      }
      onConnectionDropped(dd, Jd) {
        (0, qJ.f)("disconnect", "Left room", Jd), this.isResuming() || (this.droppedAt = Date.now()), this.detachRoom(), pd.offlineInputReplay.onConnectionLost(), this.setSuspended(!0), this.session.onConnectionLost(dd.reconnectionToken)
      }
      resumeOnRoom(dd) {
        if (!this.listener.isLive()) return console.warn("Left the game while reconnecting, leaving the resumed room"), dd.leave(!0), void this.dispose();
        console.log("Reconnected to the game server, waiting for the game to resume"), (0, OJ.s)(), pd.offlineInputReplay.onConnectionReplaced(), this.msgHandler.SCd(dd), this.listener.onReconnected(dd), this.attachRoom(dd)
      }
    }
    var sJ = kd(3308),
      iJ = kd(3316),
      aJ = kd(1348),
      MJ = kd(1320),
      FJ = kd(4543),
      YJ = kd(3011),
      mJ = kd(1078),
      bJ = kd(37918),
      SJ = kd(39215),
      jJ = kd(8825),
      XJ = kd(39220),
      fJ = kd(1827),
      nJ = kd(39222),
      UJ = kd(1751),
      yJ = kd(2638);

    function DJ(dd) {
      var Jd, kd;
      if ("object" !== typeof dd || null === dd) return {
        errType: typeof dd
      };
      const pd = dd;
      return {
        errType: null !== (Jd = null === (kd = dd.constructor) || void 0 === kd ? void 0 : kd.name) && void 0 !== Jd ? Jd : "",
        errName: "string" === typeof pd.name ? pd.name : "",
        eventType: "string" === typeof pd.type ? pd.type : "",
        errStack: "string" === typeof pd.stack ? pd.stack.split("\n").slice(1).join(" | ") : ""
      }
    }

    function TJ(dd) {
      if ("undefined" !== typeof ProgressEvent && dd instanceof ProgressEvent) return !0;
      if (!(dd instanceof Error)) return !1;
      const Jd = dd.code;
      return "ServerError" === dd.name && void 0 === Jd || "AbortError" === dd.name || "seat reservation expired." === dd.message || "early_leave" === dd.message
    }(0, Od.j)((dd => {
      (0, qJ.f)("wasm_net", dd)
    }));
    let EJ = !0;

    function cJ() {
      EJ = !1
    }
    class hJ {
      constructor(dd) {
        this.gameNameWithVariation = void 0, this.lobbyName = void 0, this.colyClient = void 0, this.userContext = void 0, this.joinedAt = null, this.checkSendPath = () => {}, this.Jl = void 0, this.connectionResume = void 0, this.incomingMsgInitialisor = void 0, this.gameNameWithVariation = dd.gameNameWithVariation, this.lobbyName = dd.lobbyName, this.colyClient = dd.colyClient, this.userContext = dd.userContext
      }
      async connectToServer(dd, Jd, kd) {
        Id.b.reset(), dd.dU = {
          [dd.kU]: {}
        }, dd.pJd = void 0, (0, OJ.s)(), (0, gd.d)().removeAllEntityNames(), (0, gd.d)().setEntityName(dd.kU, this.userContext.getPlayerName()), (0, aJ.r)({
          lobbyName: this.lobbyName
        }), console.log("Waiting for clientConnection passed promise to resolve");
        const Pd = (0, UJ.h)();
        console.log("joining server with game", this.gameNameWithVariation, "lobbyName", this.lobbyName);
        const Zd = performance.now(),
          Cd = (0, XJ.h)(this.userContext, (() => {
            const {
              roomName: pd,
              joinOptions: Nd
            } = (0, vd.g)(this.userContext, this.gameNameWithVariation, this.lobbyName, Jd, (dd => YJ.d.isUsingCustomGameTexturePack(dd)));
            return Nd.joinAdHold = Pd, Nd.renderBackend = (0, yJ.d)(dd.UL), (0, SJ.f)((() => this.colyClient.joinOrCreate(pd, Nd)), kd)
          }));
        return Rd.j.nO("loadingScreenState", "loadingPage:joiningLobby"), await Cd.then((Jd => {
          if (this.joinedAt = performance.now(), this.Jl = dd, Pd) {
            const dd = (0, UJ.q)((() => {
              Jd.send(Nd.g), (0, MJ.k)()
            }));
            Jd.pG(dd), (0, pd.onGameResetOnce)(dd)
          }
          const kd = new ed(Jd);
          this.connectionResume = new BJ((dd => this.colyClient.reconnect(dd)), (Jd => {
            dd.SF(Jd)
          }), kd, {
            isLive: () => (0, gd.d)().client.getMsgHandler() === kd,
            onDropped: (dd, Jd) => {
              (0, iJ.l)(dd) || this.logUnrecognisedConnectionLoss(dd, void 0, {
                site: "drop",
                closeReason: null !== Jd && void 0 !== Jd ? Jd : "",
                sinceJoined: this.sinceJoined()
              })
            },
            onRoomLeft: (dd, Jd) => {
              this.onRoomLeft(dd, Jd)
            },
            onReconnected: dd => {
              this.incomingMsgInitialisor.SCd(dd), this.checkSendPath = (0, bJ.g)(kd, dd, Od.k)
            },
            onGaveUp: (dd, Jd) => {
              this.onResumeGaveUp(dd, Jd)
            }
          }), this.connectionResume.attachRoom(Jd), (0, pd.onGameResetOnce)((() => {
            this.connectionResume.dispose()
          }));
          const Wd = kd.send,
            Zd = kd.JG,
            Cd = kd.ykd.send,
            Kd = kd.ykd.JG,
            od = kd.mCd;
          this.checkSendPath = (0, bJ.g)(kd, Jd, Od.k);
          const ld = setInterval((() => {
            Wd === kd.send && Zd === kd.JG && Cd === kd.ykd.send && Kd === kd.ykd.JG && od === kd.mCd || cJ(), this.checkSendPath()
          }), 1e4);
          return (0, pd.onGameResetOnce)((() => {
            clearInterval(ld)
          })), {
            success: !0,
            successDetails: kd
          }
        })).catch((Jd => {
          if (kd.aborted && Jd === (0, fJ.c)(kd)) return {
            success: !1,
            failDetails: {
              reason: "Left the game while it loaded",
              requiresRefresh: !1,
              canReconnect: !1
            }
          };
          if (Jd instanceof nJ.g) return console.warn("Seat request timed out", this.lobbyName, this.gameNameWithVariation), {
            success: !1,
            failDetails: {
              reason: Jd.message,
              requiresRefresh: !1,
              canReconnect: !1,
              gameServerUnreachable: "timedOut"
            }
          };
          dd.PO(`Failed to connect to bloxd room, check your internet connection. lobbyName: ${this.lobbyName}, gameNameWithVariation: ${this.gameNameWithVariation} code: ${Jd.code}\n`, Jd);
          const pd = Jd.code;
          return pd === Wd.e.serverUpdating.code ? (this.goToUpdateWaiting(), {
            success: !1,
            failDetails: {
              reason: Wd.e.serverUpdating.text,
              requiresRefresh: !1,
              canReconnect: !0,
              goesToUpdateWaiting: !0
            }
          }) : {
            success: !1,
            failDetails: {
              ...this.onConnectionToServerLost(pd, Jd.message, {
                site: "join",
                sinceJoinStart: (0, iJ.d)(performance.now() - Zd),
                ...DJ(Jd)
              }, TJ(Jd)),
              rematch: (0, SJ.b)(Jd),
              gameRefused: (0, jJ.d)(Jd)
            }
          }
        }))
      }
      setupServerListeners(dd, Jd, kd) {
        Rd.j.nO("loadingScreenState", "loadingPage:loadingPlayerInfo"), this.incomingMsgInitialisor = new IJ(this.gameNameWithVariation, Jd.ykd, dd, this.connectionResume), this.incomingMsgInitialisor.setupStateReplicationHandlers();
        const Nd = Jd.nCd();
        this.incomingMsgInitialisor.setupOnMessageListeners(Nd, kd), (0, pd.onConnectionToServerReady)(Nd, Jd), Nd.finishRegistration()
      }
      dispose() {
        this.connectionResume.dispose()
      }
      onResumeGaveUp(dd, Jd) {
        (0, mJ.ZO)(new Error("Reconnect failed"), {
          ...(0, sJ.h)(Jd),
          game: this.gameNameWithVariation
        }), (0, qJ.f)("disconnect", "Reconnect failed", Jd.reason), (0, gd.d)().client.leaveGameUnwanted({
          reason: {
            translationKey: "general:lostConnection"
          },
          canReconnect: !dd,
          canPlayAgain: dd,
          requiresRefresh: !1,
          automaticallyReconnect: !1
        }), (0, pJ.navigatePreserveSearch)("/")
      }
      sinceJoined() {
        return null === this.joinedAt ? "" : (0, iJ.d)(performance.now() - this.joinedAt)
      }
      onRoomLeft(dd, Jd) {
        var kd;
        if (dd === Wd.e.gameOrPluginKick.code) return;
        if (console.log(`Left room with code ${dd}`), dd === Wd.e.serverUpdating.code) return (0, qJ.f)("disconnect", "Left room", "serverUpdating"), (0, gd.d)().client.leaveGame(this.getUpdateWaitingUrl()), void this.goToUpdateWaiting();
        this.Jl.PO(`Kicked from server with code ${dd}`, new Error);
        const pd = Object.keys(Wd.e).find((Jd => Wd.e[Jd].code === dd));
        (0, qJ.f)("disconnect", "Left room", null !== pd && void 0 !== pd ? pd : String(dd));
        const Nd = this.onConnectionToServerLost(dd, void 0, {
          site: "leave",
          closeReason: null !== Jd && void 0 !== Jd ? Jd : "",
          sinceJoined: this.sinceJoined()
        });
        (0, gd.d)().client.leaveGameUnwanted({
          reason: `You have disconnected from the server.\n${Nd.reason}`,
          canReconnect: Nd.canReconnect,
          requiresRefresh: Nd.requiresRefresh,
          automaticallyReconnect: null !== (kd = Nd.automaticallyReconnect) && void 0 !== kd && kd
        }), (0, pJ.navigatePreserveSearch)("/")
      }
      getUpdateWaitingUrl() {
        return (0, FJ.D)(this.gameNameWithVariation, this.lobbyName)
      }
      goToUpdateWaiting() {
        (0, pJ.navigatePreserveSearch)(this.getUpdateWaitingUrl())
      }
      onConnectionToServerLost(dd, Jd, kd) {
        var pd;
        let Nd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (null !== (pd = Jd) && void 0 !== pd && pd.endsWith(Wd.k) && (this.userContext.invalidateTrafficCode(), Jd = Jd.replace(Wd.k, "")), dd === Wd.e.outdatedVersion.code) return console.error("Outdated client with version ", Pd.c, ", refreshing page"), (0, Gd.reloadBloxd)(), {
          reason: "Outdated client",
          requiresRefresh: !0,
          canReconnect: !1
        };
        if (dd === Wd.e.loadRecaptchaError.code) return console.error("Load recaptcha error, refreshing page"), (0, Gd.reloadBloxd)(), {
          reason: "Failed to load recaptcha",
          requiresRefresh: !0,
          canReconnect: !1
        };
        for (const Pd in Wd.e) {
          const {
            code: kd,
            text: pd,
            canReconnect: Nd
          } = Wd.e[Pd];
          if (kd === dd) {
            console.log("matched known error", dd, "leaving game");
            return {
              reason: "" !== pd ? pd : Jd || `Code: ${dd}`,
              requiresRefresh: !1,
              canReconnect: Nd,
              automaticallyReconnect: kd === Wd.e.customGameUpdated.code || kd === Wd.e.duplicateLobbyNameError.code
            }
          }
        }
        return console.log("Didn't match known error, leaving game"), (0, iJ.h)(dd) || Nd ? console.warn("Connection lost", dd, Jd) : this.logUnrecognisedConnectionLoss(dd, Jd, kd), {
          reason: `Either your internet isn't working or this is a bug.\nCode: ${dd}`,
          requiresRefresh: !1,
          canReconnect: !1,
          gameServerUnreachable: Nd ? "failed" : void 0
        }
      }
      logUnrecognisedConnectionLoss(dd, Jd, kd) {
        (0, mJ.ZO)(new Error("Unrecognised connection loss"), {
          code: String(dd),
          cause: null !== Jd && void 0 !== Jd ? Jd : "",
          ...kd,
          game: this.gameNameWithVariation,
          ...(0, iJ.o)()
        })
      }
    }
  },
  39167: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Vk,
      f: () => Jp
    });
    var pd, Nd, Wd, Pd, Zd, gd, Cd, Kd, od, ld, Qd, Ld, Od, ed, Rd, Id, Gd, vd, xd, qd, Bd, sd, ad, Md, Fd, Yd, md, bd, Sd, jd, Xd, fd, nd, Ud, yd, Dd, Td, Ed, cd, hd, rd, ud, td, Vd, zd, Hd, wd, Ad, dJ, JJ, kJ, pJ, NJ, WJ, PJ, ZJ, gJ, CJ, KJ, oJ, lJ, QJ, LJ, OJ, eJ, RJ, IJ, GJ, vJ, xJ, qJ, BJ, sJ, iJ, aJ, MJ, FJ, YJ, mJ, bJ, SJ, jJ, XJ, fJ, nJ, UJ, yJ, DJ, TJ, EJ, cJ, hJ, rJ, uJ, tJ, VJ, zJ, HJ, wJ, AJ = kd(29),
      dk = kd(37322),
      Jk = kd(39184),
      kk = kd(39188),
      pk = kd(9009),
      Nk = kd(605),
      Wk = kd(597),
      Pk = kd(36965);
    let Zk = (pd = (0, pk.type)("number"), Nd = (0, pk.type)("number"), Wd = (0, pk.type)("number"), Pd = (0, pk.type)("number"), Zd = (0, pk.type)("number"), gd = (0, pk.type)("number"), Cd = (0, pk.type)("string"), Kd = class extends pk.Schema {
        constructor() {
          super(...arguments), (0, Jk.b)(this, "id", od, this), (0, Jk.b)(this, "amount", ld, this), (0, Jk.b)(this, "x", Qd, this), (0, Jk.b)(this, "y", Ld, this), (0, Jk.b)(this, "z", Od, this), (0, Jk.b)(this, "size", ed, this), (0, Jk.b)(this, "attributes", Rd, this)
        }
      }, od = (0, kk.d)(Kd.prototype, "id", [pd], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), ld = (0, kk.d)(Kd.prototype, "amount", [Nd], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Qd = (0, kk.d)(Kd.prototype, "x", [Wd], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Ld = (0, kk.d)(Kd.prototype, "y", [Pd], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Od = (0, kk.d)(Kd.prototype, "z", [Zd], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), ed = (0, kk.d)(Kd.prototype, "size", [gd], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 1
        }
      }), Rd = (0, kk.d)(Kd.prototype, "attributes", [Cd], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "{}"
        }
      }), Kd),
      gk = (Id = (0, pk.type)("string"), Gd = (0, pk.type)("string"), vd = class extends pk.Schema {
        constructor() {
          super(...arguments), (0, Jk.b)(this, "itemName", xd, this), (0, Jk.b)(this, "enchantmentTier", qd, this)
        }
      }, xd = (0, kk.d)(vd.prototype, "itemName", [Id], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), qd = (0, kk.d)(vd.prototype, "enchantmentTier", [Gd], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), vd),
      Ck = (Bd = (0, pk.type)("string"), sd = (0, pk.type)("string"), ad = (0, pk.type)("number"), Md = (0, pk.type)("number"), Fd = (0, pk.type)("number"), Yd = (0, pk.type)("float32"), md = (0, pk.type)("float32"), bd = (0, pk.type)("float32"), Sd = (0, pk.type)("string"), jd = (0, pk.type)(["number"]), Xd = (0, pk.type)("boolean"), fd = class extends pk.Schema {
        constructor() {
          super(...arguments), (0, Jk.b)(this, "type", nd, this), (0, Jk.b)(this, "name", Ud, this), (0, Jk.b)(this, "x", yd, this), (0, Jk.b)(this, "y", Dd, this), (0, Jk.b)(this, "z", Td, this), (0, Jk.b)(this, "xRotation", Ed, this), (0, Jk.b)(this, "yRotation", cd, this), (0, Jk.b)(this, "zRotation", hd, this), (0, Jk.b)(this, "followingEId", rd, this), (0, Jk.b)(this, "followingOffset", ud, this), (0, Jk.b)(this, "shouldMatchFollowingEntityRotation", td, this)
        }
      }, nd = (0, kk.d)(fd.prototype, "type", [Bd], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), Ud = (0, kk.d)(fd.prototype, "name", [sd], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return ""
        }
      }), yd = (0, kk.d)(fd.prototype, "x", [ad], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Dd = (0, kk.d)(fd.prototype, "y", [Md], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Td = (0, kk.d)(fd.prototype, "z", [Fd], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Ed = (0, kk.d)(fd.prototype, "xRotation", [Yd], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), cd = (0, kk.d)(fd.prototype, "yRotation", [md], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), hd = (0, kk.d)(fd.prototype, "zRotation", [bd], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), rd = (0, kk.d)(fd.prototype, "followingEId", [Sd], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), ud = (0, kk.d)(fd.prototype, "followingOffset", [jd], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new pk.ArraySchema(0, 0, 0)
        }
      }), td = (0, kk.d)(fd.prototype, "shouldMatchFollowingEntityRotation", [Xd], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !0
        }
      }), fd),
      Kk = (Vd = (0, pk.type)("float32"), zd = (0, pk.type)("float32"), Hd = (0, pk.type)("boolean"), wd = (0, pk.type)("boolean"), Ad = (0, pk.type)("float32"), dJ = (0, pk.type)("boolean"), JJ = (0, pk.type)("string"), kJ = (0, pk.type)("string"), pJ = (0, pk.type)("string"), NJ = (0, pk.type)("string"), WJ = (0, pk.type)(["number"]), PJ = (0, pk.type)("number"), ZJ = (0, pk.type)({
        map: gk
      }), gJ = class extends Ck {
        constructor() {
          super(...arguments), (0, Jk.b)(this, "scale", CJ, this), (0, Jk.b)(this, "speed", KJ, this), (0, Jk.b)(this, "jumping", oJ, this), (0, Jk.b)(this, "crouching", lJ, this), (0, Jk.b)(this, "cameraPitch", QJ, this), (0, Jk.b)(this, "armSwinging", LJ, this), (0, Jk.b)(this, "heldItemName", OJ, this), (0, Jk.b)(this, "heldItemEnchantmentTier", eJ, this), (0, Jk.b)(this, "pose", RJ, this), (0, Jk.b)(this, "ridingVehicleEId", IJ, this), (0, Jk.b)(this, "meshOffset", GJ, this), (0, Jk.b)(this, "baseRenderHeading", vJ, this), (0, Jk.b)(this, "armour", xJ, this)
        }
      }, CJ = (0, kk.d)(gJ.prototype, "scale", [Vd], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 1
        }
      }), KJ = (0, kk.d)(gJ.prototype, "speed", [zd], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), oJ = (0, kk.d)(gJ.prototype, "jumping", [Hd], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), lJ = (0, kk.d)(gJ.prototype, "crouching", [wd], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), QJ = (0, kk.d)(gJ.prototype, "cameraPitch", [Ad], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), LJ = (0, kk.d)(gJ.prototype, "armSwinging", [dJ], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), OJ = (0, kk.d)(gJ.prototype, "heldItemName", [JJ], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), eJ = (0, kk.d)(gJ.prototype, "heldItemEnchantmentTier", [kJ], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), RJ = (0, kk.d)(gJ.prototype, "pose", [pJ], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "standing"
        }
      }), IJ = (0, kk.d)(gJ.prototype, "ridingVehicleEId", [NJ], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), GJ = (0, kk.d)(gJ.prototype, "meshOffset", [WJ], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new pk.ArraySchema(0, 0, 0)
        }
      }), vJ = (0, kk.d)(gJ.prototype, "baseRenderHeading", [PJ], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), xJ = (0, kk.d)(gJ.prototype, "armour", [ZJ], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new pk.MapSchema
        }
      }), gJ),
      lk = (qJ = (0, pk.type)("string"), BJ = (0, pk.type)("string"), sJ = (0, pk.type)("string"), iJ = (0, pk.type)("uint8"), aJ = class extends Kk {
        constructor() {
          super(...arguments), (0, Jk.b)(this, "variation", MJ, this), (0, Jk.b)(this, "ownerDbId", FJ, this), (0, Jk.b)(this, "metaInfo", YJ, this), (0, Jk.b)(this, "aiState", mJ, this)
        }
      }, MJ = (0, kk.d)(aJ.prototype, "variation", [qJ], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "default"
        }
      }), FJ = (0, kk.d)(aJ.prototype, "ownerDbId", [BJ], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), YJ = (0, kk.d)(aJ.prototype, "metaInfo", [sJ], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return ""
        }
      }), mJ = (0, kk.d)(aJ.prototype, "aiState", [iJ], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), aJ);
    bJ = (0, pk.type)("string"), SJ = (0, pk.type)("string"), jJ = (0, pk.type)("string"), XJ = (0, pk.type)("string"), fJ = class extends Ck {
      constructor() {
        super(...arguments), (0, Jk.b)(this, "meshKind", nJ, this), (0, Jk.b)(this, "meshOpts", UJ, this), (0, Jk.b)(this, "pose", yJ, this), (0, Jk.b)(this, "leaderboardTop", DJ, this)
      }
    }, nJ = (0, kk.d)(fJ.prototype, "meshKind", [bJ], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), UJ = (0, kk.d)(fJ.prototype, "meshOpts", [SJ], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), yJ = (0, kk.d)(fJ.prototype, "pose", [jJ], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), DJ = (0, kk.d)(fJ.prototype, "leaderboardTop", [XJ], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    });

    function Qk(dd) {
      return Object.keys(pk.Metadata.getFields(dd))
    }
    const Lk = Qk(lk);
    for (const kp of Nk.t)
      if (!Lk.includes(kp)) throw new Error(`Mob Schema is missing a networked property: "${kp}"`);
    const Ok = Qk((TJ = (0, pk.type)("string"), EJ = (0, pk.type)("float32"), cJ = (0, pk.type)("float32"), hJ = (0, pk.type)("float32"), rJ = (0, pk.type)("float32"), uJ = class extends Ck {
      constructor() {
        super(...arguments), (0, Jk.b)(this, "soundName", tJ, this), (0, Jk.b)(this, "volume", VJ, this), (0, Jk.b)(this, "refDistance", zJ, this), (0, Jk.b)(this, "maxHearDist", HJ, this), (0, Jk.b)(this, "rate", wJ, this)
      }
    }, tJ = (0, kk.d)(uJ.prototype, "soundName", [TJ], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return ""
      }
    }), VJ = (0, kk.d)(uJ.prototype, "volume", [EJ], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return 1
      }
    }), zJ = (0, kk.d)(uJ.prototype, "refDistance", [cJ], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return Pk.h
      }
    }), HJ = (0, kk.d)(uJ.prototype, "maxHearDist", [hJ], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return Pk.d
      }
    }), wJ = (0, kk.d)(uJ.prototype, "rate", [rJ], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return 1
      }
    }), uJ));
    for (const kp of Wk.j)
      if (!Ok.includes(kp)) throw new Error(`AudioEntity Schema is missing a replicated property: "${kp}"`);
    var ek = kd(38583),
      Rk = kd(1260),
      Ik = kd(610),
      Gk = kd(38390),
      vk = kd(4090),
      xk = kd(313),
      qk = kd(37438),
      Bk = kd(38286),
      sk = kd(2196),
      ik = kd(37403),
      ak = kd(38610),
      Mk = kd(37573),
      Fk = kd(325),
      Yk = kd.n(Fk),
      mk = kd(38136),
      bk = kd(37228),
      Sk = kd(38264),
      jk = kd(38307);
    class Xk {
      constructor(dd, Jd) {
        this.bloxd = dd, this.eId = Jd, this.Jl = void 0, this.colyseusEntity = void 0, this.canSeeSub = void 0, this.canAttackSub = void 0, this.interactableSub = void 0, this.overlayColourSub = void 0, this.opacitySub = void 0, this.zIndexSub = void 0, this.multilineTextBoxSub = void 0, this.previousHidingMeshManagerState = void 0, this.meshKind = void 0, this.meshOpts = void 0, this.leaderboardTop = void 0, this.meshRebuildQueued = !1, this.pL = !1, this.Jl = dd.Jl
      }
      initClient(dd) {
        var Jd, kd, pd;
        this.colyseusEntity = dd, this.meshKind = dd.meshKind, this.meshOpts = dd.meshOpts, this.leaderboardTop = dd.leaderboardTop, this.Jl.vG.add([dd.x, dd.y, dd.z], 1, 1, null, null, !1, !1, this.eId), this.Jl.vG.bS(this.eId, "smoothToServerPos");
        const Nd = "Person" === this.meshKind;
        this.Jl.vG.bS(this.eId, "meshRotation", {
          isServerControlled: !0,
          ...Nd ? {
            defaultRotationsPerSecond: .5
          } : {},
          childrenNodeParams: Nd ? [{
            nodeName: "HeadMesh",
            softTolerance: ak.n,
            hardTolerance: null
          }] : []
        }), this.updateHidingMeshMgr(), this.canSeeSub = AJ.j.subscribe(`otherEntitySettings|${this.eId}|canSee`, (dd => {
          this.updateHidingMeshMgr()
        }));
        const Wd = () => {
          const dd = this.Jl.vG.mJd(this.eId);
          if (!dd) return;
          const Jd = (0, Mk.j)(this.eId);
          if ("number" === typeof dd.Rm) {
            var kd, pd, Nd, Wd;
            const Pd = null === (kd = (0, sk.h)("head", null === (Nd = this.getSpec()) || void 0 === Nd || null === (Wd = Nd.opts.textures) || void 0 === Wd ? void 0 : Wd.head)) || void 0 === kd || null === (pd = kd.personModel) || void 0 === pd ? void 0 : pd.fullBody;
            return this.Jl.UL.Qm.setPickable(dd.Rm, Jd && !Pd), void(0, bk.updatePersonAttachmentPickability)(this.Jl, this.eId, Jd)
          }
          const Pd = dd.mesh;
          if (Pd)
            for (const Zd of [Pd, ...Pd.getChildMeshes(!1)]) "iO" in Zd && !Zd.name.startsWith("Cape|") && (Zd.iO = Jd)
        };
        this.canAttackSub = AJ.j.subscribe(`otherEntitySettings|${this.eId}|canAttack`, Wd), this.interactableSub = AJ.j.subscribe(`otherEntitySettings|${this.eId}|interactable`, Wd), this.overlayColourSub = AJ.j.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|overlayColour`, (dd => {
          this.updateOverlayColour(dd)
        })), this.opacitySub = AJ.j.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|opacity`, (dd => {
          this.updateOpacity(dd)
        })), this.zIndexSub = AJ.j.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|zIndex`, (dd => {
          this.updateZIndex(dd)
        }));
        const Pd = this.Jl.dU[this.Jl.kU][this.eId];
        this.updateOverlayColour(null !== (Jd = null === Pd || void 0 === Pd ? void 0 : Pd.overlayColour) && void 0 !== Jd ? Jd : null), this.updateOpacity(null !== (kd = null === Pd || void 0 === Pd ? void 0 : Pd.opacity) && void 0 !== kd ? kd : 1), this.updateZIndex(null !== (pd = null === Pd || void 0 === Pd ? void 0 : Pd.zIndex) && void 0 !== pd ? pd : 0), this.multilineTextBoxSub = (0, ik.s)(this.Jl, this.eId)
      }
      onChangeClient(dd, Jd) {
        if ("xRotation" === dd || "yRotation" === dd || "zRotation" === dd)(0, ik.w)(this.Jl, this.eId, dd, Jd);
        else if ("pose" === dd) {
          const dd = this.Jl.vG.nJd(this.eId);
          dd && (dd.pose = Jd || "standing")
        } else "meshKind" === dd || "meshOpts" === dd ? (this[dd] = Jd, this.queueMeshRebuild()) : "name" === dd && "" !== Jd ? this.updateHidingMeshMgr() : "leaderboardTop" === dd && (this.leaderboardTop = Jd, AJ.j.nO(`leaderboardTop|${this.eId}`, Jd))
      }
      disposeClient() {
        this.pL = !0, this.Jl.vG.deleteEntity(this.eId), AJ.j.unsubscribe(this.canSeeSub), AJ.j.unsubscribe(this.canAttackSub), AJ.j.unsubscribe(this.interactableSub), AJ.j.unsubscribe(this.overlayColourSub), AJ.j.unsubscribe(this.opacitySub), AJ.j.unsubscribe(this.zIndexSub), AJ.j.unsubscribe(this.multilineTextBoxSub)
      }
      getCurrentHidingMeshMgrState() {
        var dd, Jd;
        return {
          canSee: null !== (dd = null === (Jd = this.Jl.dU[this.Jl.kU][this.eId]) || void 0 === Jd ? void 0 : Jd.canSee) && void 0 !== dd && dd,
          name: this.colyseusEntity.name,
          meshKind: this.meshKind,
          meshOpts: this.meshOpts
        }
      }
      updateHidingMeshMgr() {
        var dd, Jd, kd;
        const {
          Jl: pd
        } = this, {
          vG: Nd
        } = pd, Wd = this.getCurrentHidingMeshMgrState();
        if ((0, xk.le)(this.previousHidingMeshManagerState, Wd)) return;
        if (this.previousHidingMeshManagerState = Wd, Nd.nS(this.eId, "hidingMeshManager"), null === (dd = pd.dU[pd.kU][this.eId]) || void 0 === dd || !dd.canSee) return;
        const Pd = this.getSpec();
        if (!Pd) return;
        const {
          type: Zd,
          opts: gd
        } = Pd;
        "Person" === Zd && (gd.textures = (0, sk.o)(gd.textures)), gd.eId = this.eId, Nd.bS(this.eId, "hidingMeshManager", {
          addMeshComponent: () => {
            var dd, Jd, kd;
            "Leaderboard" === Zd && (gd.leaderboardTop = this.leaderboardTop);
            const Wd = this.bloxd.client.meshCreator.getEntityMesh(Zd, gd, (dd => {
              var Jd, kd;
              if ("number" === typeof dd) {
                var Nd, Wd, Pd;
                const Jd = pd.UL.Qm;
                Jd.setEntityId(dd, this.eId);
                const kd = "Person" === Zd && (null === (Nd = (0, sk.h)("head", null === (Pd = gd.textures) || void 0 === Pd ? void 0 : Pd.head)) || void 0 === Nd || null === (Wd = Nd.personModel) || void 0 === Wd ? void 0 : Wd.fullBody);
                return void Jd.setPickable(dd, (0, Mk.j)(this.eId) && !kd)
              }
              const Cd = dd;
              for (const Zd of [Cd, ...Cd.getChildMeshes(!1)]) void 0 === Zd.iO || Zd.name.startsWith("Cape|") || (Zd.iO = (0, Mk.j)(this.eId), Zd.metadata ??= new pd.UL.aO, Zd.metadata.eId = this.eId);
              this.updateOpacity(null !== (Jd = null === (kd = pd.dU[pd.kU][this.eId]) || void 0 === kd ? void 0 : kd.opacity) && void 0 !== Jd ? Jd : 1)
            }));
            if (!Wd) return;
            const {
              Rm: Pd,
              mesh: Cd,
              meshOffset: Kd,
              nameYOffset: od,
              modelLoaded: ld
            } = Wd;
            null === ld || void 0 === ld || ld.then((() => {
              var dd;
              (null === (dd = Nd.mJd(this.eId)) || void 0 === dd ? void 0 : dd.mesh) === Cd && (this.previousHidingMeshManagerState = null, this.updateHidingMeshMgr())
            }));
            const Qd = null === Pd ? null : pd.UL.Qm.qpd(Pd, 0);
            if (Nd.bS(this.eId, Nd.names.mesh, {
                Rm: Pd,
                rkd: Qd,
                mesh: Cd,
                oZd: !1,
                tkd: "Leaderboard" !== Zd,
                offset: Kd.slice(),
                KZd: "ParticleEmitter" === Zd && gd.followTargetMeshOffset ? dd => {
                  var Jd;
                  Yk().copy(dd, Kd);
                  const kd = null === (Jd = Nd.Gkd(this.eId)) || void 0 === Jd ? void 0 : Jd.zQ,
                    pd = void 0 === kd ? null : Nd.nJd(kd);
                  if (pd) {
                    var Wd, Pd;
                    const Jd = this.bloxd.getEntityHeading(null !== (Wd = pd.ridingVehicleEId) && void 0 !== Wd ? Wd : kd, !0),
                      Nd = Math.sin(Jd),
                      Zd = Math.cos(Jd);
                    dd[0] += pd.meshOffset[0] * Zd + pd.meshOffset[2] * Nd, dd[1] += pd.meshOffset[1], dd[2] += pd.meshOffset[2] * Zd - pd.meshOffset[0] * Nd;
                    const gd = null !== (Pd = pd.ridingVehicleEId) && void 0 !== Pd ? Pd : null;
                    null !== gd && (0, jk.d)(this.Jl, gd, dd)
                  }
                } : null
              }), "Person" === Zd) {
              var Ld, Od, ed, Rd;
              Nd.bS(this.eId, Nd.names.meshAttachments, {
                personFullBody: null !== (Ld = null === (Od = (0, sk.h)("head", null === (Rd = gd.textures) || void 0 === Rd ? void 0 : Rd.head)) || void 0 === Od || null === (ed = Od.personModel) || void 0 === ed ? void 0 : ed.fullBody) && void 0 !== Ld && Ld
              });
              for (const dd of Rk.x) {
                var Id, Gd, vd;
                const Jd = null === (Id = gd.textures) || void 0 === Id ? void 0 : Id[dd];
                Jd && null !== (Gd = (0, sk.h)(dd, Jd)) && void 0 !== Gd && null !== (vd = Gd.attachments) && void 0 !== vd && vd.length && Bk.e.Player.meshApi.updatePlayerCosmetic(this.eId, Pd, dd, Jd)
              }
              Nd.bS(this.eId, Nd.names.moveState), Nd.bS(this.eId, "updateWalkingState", {
                Rm: Pd,
                rkd: Qd,
                walkingLegSwingDuration: ak.s
              }), Nd.bS(this.eId, "humanoidMesh", {
                Rm: Pd,
                rkd: Qd,
                heldItemPositionParams: {},
                maxWalkingAngleOverride: null
              }), Nd.bS(this.eId, "animator", {
                Rm: Pd,
                rkd: Qd,
                modelLifeformType: "Player"
              }), Sk.f.hasAnimation("Person") && Nd.bS(this.eId, "rigAnimation", {
                target: "Person",
                Rm: Pd
              }), Nd.nJd(this.eId).pose = this.colyseusEntity.pose || "standing"
            } else if ("BloxdBlock" === Zd && null !== Pd) {
              Nd.bS(this.eId, "animator", {
                Rm: Pd,
                rkd: Qd,
                modelLifeformType: null
              });
              const dd = (0, Gk.n)(gd.blockName);
              null !== dd && Nd.bS(this.eId, "rigAnimation", {
                target: dd,
                Rm: Pd
              })
            }
            Nd.SZd(this.eId, "entityName", {
              name: this.colyseusEntity.name,
              nameYOffset: od
            }), this.bloxd.setEntityName(this.eId, this.colyseusEntity.name), !0 === gd.autoRotate && (Nd.nS(this.eId, "meshRotation"), Nd.bS(this.eId, "autoRotate"));
            const {
              lineToEId: xd
            } = gd;
            (0, Ik.I)(xd) || Nd.bS(this.eId, "lineToEntity", {
              lineToEId: xd
            });
            const qd = pd.dU[pd.kU][this.eId];
            this.updateOverlayColour(null !== (dd = null === qd || void 0 === qd ? void 0 : qd.overlayColour) && void 0 !== dd ? dd : null), this.updateOpacity(null !== (Jd = null === qd || void 0 === qd ? void 0 : qd.opacity) && void 0 !== Jd ? Jd : 1), this.updateZIndex(null !== (kd = null === qd || void 0 === qd ? void 0 : qd.zIndex) && void 0 !== kd ? kd : 0)
          },
          removeMeshComponent: () => {
            "Person" !== Zd && "BloxdBlock" !== Zd || Nd.nS(this.eId, "rigAnimation"), Nd.nS(this.eId, Nd.names.mesh), Nd.JJd(this.eId, Nd.names.meshAttachments) && Nd.nS(this.eId, Nd.names.meshAttachments), Nd.nS(this.eId, "entityName"), Nd.nS(this.eId, "autoRotate"), Nd.nS(this.eId, "lineToEntity"), "Person" === Zd ? (Nd.nS(this.eId, Nd.names.moveState), Nd.nS(this.eId, "updateWalkingState"), Nd.nS(this.eId, "humanoidMesh"), Nd.nS(this.eId, "animator")) : "BloxdBlock" === Zd && Nd.nS(this.eId, "animator")
          },
          hideDist: null !== (Jd = gd.hideDist) && void 0 !== Jd ? Jd : 80,
          movingHideDist: null !== (kd = gd.hideDist) && void 0 !== kd ? kd : 120,
          displayOutsideLoadedChunk: gd.hideDist > 100,
          immediatelyUpdate: !0,
          Hg: "BloxdBlock" === Zd ? gd.blockName : Zd
        })
      }
      queueMeshRebuild() {
        this.meshRebuildQueued || (this.meshRebuildQueued = !0, queueMicrotask((() => {
          this.meshRebuildQueued = !1, this.pL || this.updateHidingMeshMgr()
        })))
      }
      getSpec() {
        return (0, vk.h)({
          meshKind: this.meshKind,
          meshOpts: this.meshOpts
        })
      }
      updateOverlayColour(dd) {
        var Jd, kd;
        if ("Person" !== this.meshKind) return;
        let pd = new qk.c(0, 0, 0, 0);
        if (null !== dd) {
          const Jd = (0, xk.$)(dd);
          pd = new qk.c(Jd[0] / 255, Jd[1] / 255, Jd[2] / 255, .5)
        }
        const Nd = null !== (Jd = null === (kd = this.Jl.vG.mJd(this.eId)) || void 0 === kd ? void 0 : kd.Rm) && void 0 !== Jd ? Jd : null;
        null !== Nd && Bk.e.Player.meshApi.updateMeshOverlayColour(Nd, pd)
      }
      updateZIndex(dd) {
        var Jd;
        if ("Person" !== this.meshKind) return;
        const kd = null === (Jd = this.Jl.vG.mJd(this.eId)) || void 0 === Jd ? void 0 : Jd.Rm;
        "number" === typeof kd && this.Jl.UL.Qm.setRenderingGroupId(kd, dd)
      }
      updateOpacity(dd) {
        const Jd = this.Jl.vG.mJd(this.eId);
        Jd && ("number" !== typeof Jd.Rm ? Jd.mesh && "ParticleEmitter" !== this.meshKind && (0, mk.d)(Jd.mesh, dd) : Bk.e.Player.meshApi.updateMeshOpacity(Jd.Rm, dd))
      }
    }
    var fk = kd(39175);
    class nk {
      constructor(dd, Jd) {
        this.eId = Jd, this.Jl = void 0, this.schema = void 0, this.Jl = dd.Jl
      }
      initClient(dd) {
        this.schema = dd, this.Jl.vG.add([dd.x, dd.y, dd.z], .1, .1, null, null, !1, !1, this.eId), this.Jl.vG.bS(this.eId, "smoothToServerPos"), fk.c.add(this.eId, this.copyOpts())
      }
      onChangeClient(dd) {
        Wk.j.includes(dd) && fk.c.update(this.eId, this.copyOpts())
      }
      disposeClient() {
        fk.c.remove(this.eId), this.Jl.vG.deleteEntity(this.eId)
      }
      copyOpts() {
        const {
          soundName: dd,
          volume: Jd,
          refDistance: kd,
          maxHearDist: pd,
          rate: Nd
        } = this.schema;
        return {
          soundName: dd,
          volume: Jd,
          refDistance: kd,
          maxHearDist: pd,
          rate: Nd
        }
      }
    }
    var Uk = kd(3566),
      yk = kd(36942),
      Dk = kd(6347),
      Tk = kd(37987),
      Ek = kd(2634),
      ck = kd(38330),
      hk = kd(8972),
      rk = kd(38616),
      uk = kd(37958),
      tk = kd(2812);
    class Vk {
      constructor(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
          pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => performance.now();
        this.ykd = dd, this.Jl = Jd, this.setupBudgetMs = kd, this.now = pd, this.createStateCallbacks = void 0, this.roomStateCallbacks = void 0, this.allItems = {}, this.detachers = new Map, this.deferredSetups = new Map, this.queuedSetups = new Map, this.promotedSetups = new Set, this.setupBudgetLeftMs = void 0, this.lastRefillMs = void 0, this.roomState = void 0, this.pL = !1, this.onFrame = () => {
          this.setUpQueuedEntities(!0)
        }, this.mI = () => {
          this.setUpQueuedEntities(this.now() - this.lastRefillMs > 100)
        }, this.setUpPromoted = () => {
          for (const dd of this.promotedSetups) {
            this.promotedSetups.delete(dd);
            const Jd = this.queuedSetups.get(dd);
            Jd && (this.queuedSetups.delete(dd), this.timedSetup(Jd, dd))
          }
        }, this.createStateCallbacks = (0, hk.getStateCallbacks)(dd), this.roomStateCallbacks = this.createStateCallbacks(dd.state), this.roomState = dd.state, this.setupBudgetLeftMs = kd, this.lastRefillMs = pd()
      }
      setup() {
        this.setupEntityHandlers(), this.setupItemHandlers(), this.ykd.onStateChange(this.setUpPromoted), this.Jl.on("beforeInputs", this.onFrame), this.Jl.on("Do", this.mI)
      }
      setUpQueuedEntities(dd) {
        var Jd;
        if ((null === (Jd = (0, Ek.d)().client.getMsgHandler()) || void 0 === Jd ? void 0 : Jd.ykd) !== this.ykd) return this.Jl.off("beforeInputs", this.onFrame), this.Jl.off("Do", this.mI), this.queuedSetups.clear(), void this.promotedSetups.clear();
        if (dd && (this.setupBudgetLeftMs = this.setupBudgetMs, this.lastRefillMs = this.now()), this.setUpPromoted(), 0 !== this.queuedSetups.size)
          for (Yk().copy(zk, this.Jl.vG.yI(this.Jl.kU)); this.setupBudgetLeftMs > 0;) {
            const dd = this.nearestQueued(zk);
            if (null === dd) return;
            this.setUpIfQueued(dd), this.setUpPromoted()
          }
      }
      nearestQueued(dd) {
        let Jd = null,
          kd = 1 / 0;
        return this.queuedSetups.forEach(((pd, Nd) => {
          const Wd = function(dd, Jd) {
            return (Jd.x - dd[0]) ** 2 + (Jd.y - dd[1]) ** 2 + (Jd.z - dd[2]) ** 2
          }(dd, pd);
          (null === Jd || Wd < kd) && (Jd = Nd, kd = Wd)
        })), Jd
      }
      setUpOrQueue(dd, Jd) {
        0 === this.queuedSetups.size && this.setupBudgetLeftMs > 0 || this.mustSetUpNow(dd, Jd) ? this.timedSetup(dd, Jd) : this.queuedSetups.set(Jd, dd)
      }
      mustSetUpNow(dd, Jd) {
        const kd = this.Jl.pJd;
        if (Jd === kd) return !0;
        const pd = this.roomState.entities.get(kd);
        return !(!pd || pd.ridingVehicleEId !== Jd && pd.followingEId !== Jd) || (Hk(dd.type) === ek.c || (0, Ek.d)().getFollowingEntities(Jd).length > 0)
      }
      setUpIfQueued(dd) {
        const Jd = this.queuedSetups.get(dd);
        Jd && (this.queuedSetups.delete(dd), this.timedSetup(Jd, dd))
      }
      promoteIfQueued(dd) {
        null !== dd && this.queuedSetups.has(dd) && this.promotedSetups.add(dd)
      }
      timedSetup(dd, Jd) {
        const kd = this.now();
        this.setupEntity(dd, Jd), this.setupBudgetLeftMs -= this.now() - kd
      }
      setupEntityHandlers() {
        this.roomStateCallbacks.entities.QG(((dd, Jd) => {
          this.Jl.pJd ? this.setUpOrQueue(dd, Jd) : this.deferEntitySetupUntilInitInfo(dd, Jd)
        })), this.roomStateCallbacks.entities.RY(((dd, Jd) => {
          const kd = this.deferredSetups.get(Jd);
          kd && (AJ.j.unsubscribe(kd), this.deferredSetups.delete(Jd)), this.queuedSetups.delete(Jd), this.detach(Jd), (0, Ek.d)().client.disposeEntity(Jd)
        }))
      }
      deferEntitySetupUntilInitInfo(dd, Jd) {
        const kd = AJ.j.oR("initInfoReceived", (() => {
          this.deferredSetups.delete(Jd), this.setUpOrQueue(dd, Jd)
        }));
        this.deferredSetups.set(Jd, kd), (0, Uk.onGameResetOnce)((() => {
          this.deferredSetups.get(Jd) === kd && (AJ.j.unsubscribe(kd), this.deferredSetups.delete(Jd)), (0, Ek.d)().updatePositionAndPhysics(this.Jl.kU, {
            type: Dk.k.DEFAULT,
            tier: null
          }, !0), (0, Ek.d)().takeHeldPlayerBodySize(this.Jl.kU);
          const dd = this.Jl.vG.RJd(this.Jl.kU);
          dd && (dd.movementType = Dk.i.NORMAL)
        }))
      }
      setupEntity(dd, Jd) {
        const kd = Jd === this.Jl.pJd;
        if (kd)(0, Ek.d)().client.mV(this.Jl.kU, null, null);
        else {
          const {
            type: kd
          } = dd, pd = Hk(kd);
          if (void 0 === pd) return void
          function(dd, Jd) {
            const kd = String(dd);
            if (wk.has(kd)) return;
            wk.add(kd);
            const pd = kd.length > 80 ? `${kd.slice(0,80)}...` : kd,
              Nd = `No client handler for entity type ${JSON.stringify(pd)}, so entity ${Jd} is not set up`;
            console.warn(Nd), (0, tk.f)("uncaught", Nd, "unknown_entity_type")
          }(kd, Jd);
          (0, Ek.d)().client.mV(Jd, dd, new pd((0, Ek.d)(), Jd, kd))
        }
        const pd = this.createStateCallbacks(dd);
        if (kd) return this.setupMapSchemaCallbacks(Jd, dd, pd, "armour"), this.setupScalarField(Jd, dd, pd, "scale"), this.setupScalarField(Jd, dd, pd, "ridingVehicleEId"), this.setupScalarField(Jd, dd, pd, "followingEId"), this.setupScalarField(Jd, dd, pd, "followingOffset"), void this.setupScalarField(Jd, dd, pd, "shouldMatchFollowingEntityRotation");
        for (const Nd of Qk(dd.constructor)) dd[Nd] instanceof pk.MapSchema ? this.setupMapSchemaCallbacks(Jd, dd, pd, Nd) : this.setupScalarField(Jd, dd, pd, Nd)
      }
      setupMapSchemaCallbacks(dd, Jd, kd, pd) {
        const Nd = kd[pd],
          Wd = new Map;
        Nd.QG(((kd, Nd) => {
          if (this.onEntityFieldChange(dd, Jd, pd, {
              key: Nd,
              value: kd
            }), !(kd instanceof pk.Schema)) return;
          const Pd = this.createStateCallbacks(kd),
            Zd = [];
          for (const Wd of Qk(kd.constructor)) Zd.push(this.listenForFutureChanges(Pd, Wd, (() => {
            this.onEntityFieldChange(dd, Jd, pd, {
              key: Nd,
              value: kd
            })
          })));
          Wd.set(Nd, (() => {
            for (const dd of Zd) dd()
          }))
        })), Nd.RY(((kd, Nd) => {
          var Pd;
          null === (Pd = Wd.get(Nd)) || void 0 === Pd || Pd(), Wd.delete(Nd), this.onEntityFieldChange(dd, Jd, pd, {
            key: Nd,
            value: null
          })
        })), this.addDetacher(dd, (() => {
          for (const dd of Wd.values()) dd();
          Wd.clear()
        }))
      }
      setupScalarField(dd, Jd, kd, pd) {
        this.onEntityFieldChange(dd, Jd, pd, Jd[pd]);
        const Nd = this.listenForFutureChanges(kd, pd, (kd => {
          this.onEntityFieldChange(dd, Jd, pd, kd)
        }));
        this.addDetacher(dd, Nd)
      }
      addDetacher(dd, Jd) {
        let kd = this.detachers.get(dd);
        kd || (kd = [], this.detachers.set(dd, kd)), kd.push(Jd)
      }
      detach(dd) {
        for (const kd of null !== (Jd = this.detachers.get(dd)) && void 0 !== Jd ? Jd : []) {
          var Jd;
          kd()
        }
        this.detachers.delete(dd)
      }
      listenForFutureChanges(dd, Jd, kd) {
        return dd.listen(Jd, kd, !1)
      }
      onEntityFieldChange(dd, Jd, kd, pd) {
        switch (kd) {
          case "ridingVehicleEId": {
            this.promoteIfQueued(pd);
            const Jd = this.Jl.vG.nJd((0, yk.b)(dd));
            Jd && (Jd.ridingVehicleEId = pd);
            break
          }
          case "armour":
            this.handleArmourChange(dd, pd);
            break;
          case "followingEId":
            this.promoteIfQueued(pd), this.handleFollowingEIdChange(dd, Jd, pd);
            break;
          case "xRotation":
          case "yRotation":
          case "zRotation":
            this.handleRotationChange(dd, kd, pd);
            break;
          case "scale":
            this.handleScaleChange(dd, pd);
            break;
          case "baseRenderHeading":
            this.handleBaseRenderHeadingChange(dd, pd);
            break;
          case "followingOffset":
            this.handleFollowingOffsetChange(dd, pd);
            break;
          case "shouldMatchFollowingEntityRotation":
            this.handleShouldMatchFollowingEntityRotationChange(dd, pd);
            break;
          case "x":
          case "y":
          case "z":
            return void this.handlePositionChange(dd, kd, pd)
        }(0, Ek.d)().client.updateEntityField(dd, kd, pd)
      }
      handleArmourChange(dd, Jd) {
        var kd, pd;
        const {
          key: Nd,
          value: Wd
        } = Jd;
        (0, Bk.B)(dd, Nd, null !== (kd = null === Wd || void 0 === Wd ? void 0 : Wd.itemName) && void 0 !== kd ? kd : null, null !== (pd = null === Wd || void 0 === Wd ? void 0 : Wd.enchantmentTier) && void 0 !== pd ? pd : null)
      }
      handleFollowingEIdChange(dd, Jd, kd) {
        const pd = (0, yk.b)(dd),
          Nd = pd === this.Jl.kU;
        if (this.Jl.vG.nS(pd, this.Jl.vG.names.Tv), kd) this.Jl.vG.nS(pd, "smoothToServerPos"), this.Jl.vG.bS(pd, this.Jl.vG.names.Tv, {
          zQ: (0, yk.b)(kd),
          offset: Array.from(Jd.followingOffset),
          vkd: Jd.shouldMatchFollowingEntityRotation,
          skd: !0,
          ikd: (dd, pd) => {
            if (Yk().copy(dd, Jd.followingOffset), Jd.ridingVehicleEId === kd) {
              const Jd = (0, yk.b)(kd),
                Nd = (0, Ek.d)().getEntityHeading(Jd, pd);
              Yk().gp(dd, dd, Yk().ZERO, Nd)
            }
          }
        });
        else if (!Nd) {
          this.Jl.vG.JJd(pd, "smoothToServerPos") || this.Jl.vG.bS(pd, "smoothToServerPos");
          const dd = this.Jl.vG.getState(pd, "smoothToServerPos"),
            Jd = this.Jl.vG.bV(pd).position;
          (0, uk.setServerPosition)(dd, Jd[0], Jd[1], Jd[2])
        }
      }
      handleRotationChange(dd, Jd, kd) {
        const pd = "xRotation" === Jd ? 0 : "yRotation" === Jd ? 1 : 2;
        for (const Nd of (0, Ek.d)().getFollowingEntities(dd)) {
          const dd = this.Jl.vG.getState(Nd, "meshRotation"),
            Jd = this.Jl.vG.Gkd(Nd);
          dd && Jd.vkd && (dd.serverSetRotation[pd] = kd)
        }
      }
      handleScaleChange(dd, Jd) {
        const kd = (0, yk.b)(dd);
        if (AJ.j.nO(`entityScale|${kd}`, Jd), kd === this.Jl.kU) {
          var pd;
          (0, Ek.d)().removeFromEyeHeightCache(kd);
          const dd = this.Jl.vG.RJd(this.Jl.kU),
            Jd = null !== (pd = null === dd || void 0 === dd ? void 0 : dd.physicsState) && void 0 !== pd ? pd : {
              type: Dk.k.DEFAULT,
              tier: null
            };
          return void(0, Ek.d)().updatePositionAndPhysics(this.Jl.kU, Jd, !1)
        }
        const Nd = (0, Ek.d)().getLifeformType(kd);
        if (null === Nd) return;
        const {
          physicsBodyWidth: Wd,
          physicsBodyHeight: Pd
        } = (0, rk.f)(Jd, Nd);
        this.Jl.vG.Rkd(kd, Wd, Pd, Wd)
      }
      handleBaseRenderHeadingChange(dd, Jd) {
        const kd = this.Jl.vG.getState(dd, "meshRotation");
        kd && (kd.baseRenderRotation[1] = Jd);
        for (const pd of (0, Ek.d)().getFollowingEntities(dd)) {
          const dd = this.Jl.vG.getState(pd, "meshRotation"),
            kd = this.Jl.vG.Gkd(pd);
          dd && kd.vkd && (dd.baseRenderRotation[1] = Jd)
        }
      }
      handleFollowingOffsetChange(dd, Jd) {
        const kd = this.Jl.vG.Gkd((0, yk.b)(dd));
        if (kd && kd.offset) {
          const dd = Jd ? Array.from(Jd) : Yk().ZERO;
          kd.offset[0] = dd[0], kd.offset[1] = dd[1], kd.offset[2] = dd[2]
        }
      }
      handleShouldMatchFollowingEntityRotationChange(dd, Jd) {
        const kd = this.Jl.vG.Gkd((0, yk.b)(dd));
        kd && (kd.vkd = null === Jd || void 0 === Jd || Jd)
      }
      handlePositionChange(dd, Jd, kd) {
        if (this.Jl.vG.JJd(dd, "smoothToServerPos")) {
          const pd = this.Jl.vG.getState(dd, "smoothToServerPos");
          (0, uk.setServerPositionAxis)(pd, Ak[Jd], kd)
        }
      }
      setupItemHandlers() {
        this.roomStateCallbacks.items.QG(((dd, Jd) => {
          this.allItems[Jd] = dd, (0, Tk.p)(this.Jl, Jd, [dd.x, dd.y, dd.z], dd.id, {
            amount: dd.amount,
            attributes: JSON.parse(dd.attributes),
            Wp: (0, dk.d)(this.Jl).cantPickUpItem(Jd),
            size: dd.size,
            predictedAt: (0, Ek.d)().client.itemDropPrediction.onServerItemAdded(Jd)
          });
          const kd = this.createStateCallbacks(dd);
          for (const pd of Qk(Zk)) this.onItemFieldChange(Jd, pd, dd[pd]), this.addDetacher(Jd, this.listenForFutureChanges(kd, pd, (dd => {
            this.onItemFieldChange(Jd, pd, dd)
          })))
        })), this.roomStateCallbacks.items.RY(((dd, Jd) => {
          delete this.allItems[Jd], this.detach(Jd), (0, Ek.d)().client.itemDropPrediction.onServerItemRemoved(Jd), this.Jl.vG.JJd(Jd, this.Jl.vG.names.itemState) && this.Jl.vG.deleteEntity(Jd), (0, dk.d)(this.Jl).disposeEntity(Jd)
        }))
      }
      onItemFieldChange(dd, Jd, kd) {
        if (Jd in Ak) {
          if (this.Jl.vG.JJd(dd, "itemState")) {
            const pd = this.Jl.vG.getState(dd, "smoothToServerPos");
            (0, uk.setServerPositionAxis)(pd, Ak[Jd], kd), (0, Ek.d)().client.itemDropPrediction.onServerItemMoved(dd)
          }
          return
        }
        if (!this.Jl.vG.JJd(dd, "itemState")) return;
        const pd = this.Jl.vG.getState(dd, "itemState");
        "amount" === Jd && kd !== pd.amount && (pd.creationTime = Date.now()), pd[Jd] = "attributes" === Jd ? JSON.parse(kd) : kd
      }
      dispose() {
        if (!this.pL) {
          this.pL = !0, this.Jl.off("beforeInputs", this.onFrame), this.Jl.off("Do", this.mI), this.queuedSetups.clear(), this.promotedSetups.clear();
          for (const dd of this.deferredSetups.values()) AJ.j.unsubscribe(dd);
          this.deferredSetups.clear(), this.Jl.vG.nS(this.Jl.kU, this.Jl.vG.names.Tv);
          for (const dd in this.allItems) this.Jl.vG.deleteEntity(dd), delete this.allItems[dd];
          for (const dd of [...this.detachers.keys()]) this.detach(dd);
          (0, dk.d)(this.Jl).clear();
          for (const dd of (0, Ek.d)().client.iterateEntityIds())(0, Ek.d)().client.disposeEntity(dd)
        }
      }
    }
    const zk = [0, 0, 0];

    function Hk(dd) {
      if ("string" !== typeof dd) return;
      const Jd = dd.indexOf("|"),
        kd = -1 === Jd ? dd : dd.slice(0, Jd),
        pd = Jp();
      return Object.hasOwn(pd, kd) ? pd[kd] : void 0
    }
    const wk = new Set;
    const Ak = {
      x: 0,
      y: 1,
      z: 2
    };
    let dp = null;

    function Jp() {
      return null !== dp || (dp = {
        ...Object.fromEntries(Wk.k.map((dd => {
          const {
            Hg: Jd
          } = (0, ck.d)(dd);
          return [dd, Jd]
        }))),
        Pebble: ek.c,
        Snowball: ek.c,
        "Snowball Launcher": ek.c,
        "Reinforced Pebble": ek.c,
        Bullet: ek.c,
        "Reinforced Ball": ek.c,
        Ball: ek.c,
        Mango: ek.c,
        "Moonstone Orb": ek.c,
        ...Object.fromEntries(Nk.u.map((dd => [(0, xk.cc)(dd), ek.c]))),
        Arrow: ek.c,
        "Arrow of Speed": ek.c,
        "Arrow of Poison": ek.c,
        "Arrow of Slowness": ek.c,
        "Arrow of Weakness": ek.c,
        "Arrow of Knockback": ek.c,
        "Arrow of Strength": ek.c,
        "Arrow of Invisibility": ek.c,
        "Arrow of Jumping": ek.c,
        "Arrow of Defense": ek.c,
        "Arrow of Instant Healing": ek.c,
        "Arrow of Instant Damage": ek.c,
        "Arrow of Regeneration": ek.c,
        "Arrow of Haste": ek.c,
        "Arrow of Shield": ek.c,
        "Arrow of Double Jump": ek.c,
        "Arrow of Heat Resistance": ek.c,
        "Arrow of X-Ray Vision": ek.c,
        "Arrow of Mining Yield": ek.c,
        "Arrow of Brain Rot": ek.c,
        "Arrow of Milk": ek.c,
        Fireball: ek.c,
        "Bouncy Bomb": ek.c,
        RPG: ek.c,
        "Obby RPG": ek.c,
        "Super RPG": ek.c,
        "Grenade Launcher": ek.c,
        Iceball: ek.c,
        Coconut: ek.c,
        "Splash Speed Potion": ek.c,
        "Splash Defense Potion": ek.c,
        "Splash Strength Potion": ek.c,
        "Splash Invisibility Potion": ek.c,
        "Splash Jump Potion": ek.c,
        "Splash Knockback Potion": ek.c,
        "Splash Poison Potion": ek.c,
        "Splash Speed Potion II": ek.c,
        "Splash Defense Potion II": ek.c,
        "Splash Strength Potion II": ek.c,
        "Splash Jump Potion II": ek.c,
        "Splash Knockback Potion II": ek.c,
        "Splash Poison Potion II": ek.c,
        "Splash Slowness Potion": ek.c,
        "Splash Slowness Potion II": ek.c,
        "Splash Weakness Potion": ek.c,
        "Splash Weakness Potion II": ek.c,
        "Splash Milk Potion": ek.c,
        "Splash Instant Damage Potion": ek.c,
        "Splash Instant Damage Potion II": ek.c,
        "Splash Instant Healing Potion": ek.c,
        "Splash Instant Healing Potion II": ek.c,
        "Splash Regeneration Potion": ek.c,
        "Splash Regeneration Potion II": ek.c,
        "Splash Haste Potion": ek.c,
        "Splash Haste Potion II": ek.c,
        "Splash Shield Potion": ek.c,
        "Splash Shield Potion II": ek.c,
        "Splash Double Jump Potion": ek.c,
        "Splash Heat Resistance Potion": ek.c,
        "Splash X-Ray Vision Potion": ek.c,
        "Splash Mining Yield Potion": ek.c,
        "Splash Mining Yield Potion II": ek.c,
        "Splash Brain Rot Potion": ek.c,
        "Yellow Paintball Gun": ek.c,
        "White Paintball Gun": ek.c,
        "Red Paintball Gun": ek.c,
        "Purple Paintball Gun": ek.c,
        "Pink Paintball Gun": ek.c,
        "Orange Paintball Gun": ek.c,
        "Magenta Paintball Gun": ek.c,
        "Lime Paintball Gun": ek.c,
        "Light Gray Paintball Gun": ek.c,
        "Light Blue Paintball Gun": ek.c,
        "Green Paintball Gun": ek.c,
        "Gray Paintball Gun": ek.c,
        "Cyan Paintball Gun": ek.c,
        "Brown Paintball Gun": ek.c,
        "Blue Paintball Gun": ek.c,
        "Black Paintball Gun": ek.c,
        "Yellow Heavy Paintball Gun": ek.c,
        "White Heavy Paintball Gun": ek.c,
        "Red Heavy Paintball Gun": ek.c,
        "Purple Heavy Paintball Gun": ek.c,
        "Pink Heavy Paintball Gun": ek.c,
        "Orange Heavy Paintball Gun": ek.c,
        "Magenta Heavy Paintball Gun": ek.c,
        "Lime Heavy Paintball Gun": ek.c,
        "Light Gray Heavy Paintball Gun": ek.c,
        "Light Blue Heavy Paintball Gun": ek.c,
        "Green Heavy Paintball Gun": ek.c,
        "Gray Heavy Paintball Gun": ek.c,
        "Cyan Heavy Paintball Gun": ek.c,
        "Brown Heavy Paintball Gun": ek.c,
        "Blue Heavy Paintball Gun": ek.c,
        "Black Heavy Paintball Gun": ek.c,
        "Toxin Ball": ek.c,
        "Splash Aura XP Potion": ek.c,
        "Splash Aura XP Potion II": ek.c,
        "Arrow of Aura XP": ek.c,
        Firecracker: ek.c,
        "Rainbow Firecracker": ek.c,
        "White Firecracker": ek.c,
        "Orange Firecracker": ek.c,
        "Magenta Firecracker": ek.c,
        "Light Blue Firecracker": ek.c,
        "Yellow Firecracker": ek.c,
        "Lime Firecracker": ek.c,
        "Pink Firecracker": ek.c,
        "Gray Firecracker": ek.c,
        "Light Gray Firecracker": ek.c,
        "Cyan Firecracker": ek.c,
        "Purple Firecracker": ek.c,
        "Blue Firecracker": ek.c,
        "Brown Firecracker": ek.c,
        "Green Firecracker": ek.c,
        "Red Firecracker": ek.c,
        "Black Firecracker": ek.c,
        "Firecracker Pebble": ek.c,
        "Rainbow Firecracker Pebble": ek.c,
        "White Firecracker Pebble": ek.c,
        "Orange Firecracker Pebble": ek.c,
        "Magenta Firecracker Pebble": ek.c,
        "Light Blue Firecracker Pebble": ek.c,
        "Yellow Firecracker Pebble": ek.c,
        "Lime Firecracker Pebble": ek.c,
        "Pink Firecracker Pebble": ek.c,
        "Gray Firecracker Pebble": ek.c,
        "Light Gray Firecracker Pebble": ek.c,
        "Cyan Firecracker Pebble": ek.c,
        "Purple Firecracker Pebble": ek.c,
        "Blue Firecracker Pebble": ek.c,
        "Brown Firecracker Pebble": ek.c,
        "Green Firecracker Pebble": ek.c,
        "Red Firecracker Pebble": ek.c,
        "Black Firecracker Pebble": ek.c,
        "Blinding Pebble": ek.c,
        Poop: ek.c,
        "Wood Boomerang": ek.c,
        "Stone Boomerang": ek.c,
        "Iron Boomerang": ek.c,
        "Gold Boomerang": ek.c,
        "Diamond Boomerang": ek.c,
        "Amethite Boomerang": ek.c,
        "Magmasteel Boomerang": ek.c,
        "Rubellite Boomerang": ek.c,
        "Serpentite Boomerang": ek.c,
        "Moonstone Boomerang": ek.c,
        "67 Base Projectile": ek.c,
        "67 Boosted Projectile": ek.c,
        "Capitano Grenade": ek.c,
        "Scatter Pellet": ek.c,
        "Lucky Bomb": ek.c,
        "Unlucky Bomb": ek.c,
        "Swap Orb": ek.c,
        Mesh: Xk,
        AudioEntity: nk
      }), dp
    }
  },
  39133: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Wd,
      d: () => Pd
    });
    var pd = kd(610),
      Nd = kd(37923);
    const Wd = 4e4;
    class Pd {
      constructor() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now;
        this.now = dd, this.editedAt = new Map, this.lastChunkX = NaN, this.lastChunkY = NaN, this.lastChunkZ = NaN, this.lastChunkId = ""
      }
      noteEdit(dd, Jd, kd) {
        const Wd = (0, pd.Q)(dd),
          Pd = (0, pd.Q)(Jd),
          Zd = (0, pd.Q)(kd),
          gd = this.now();
        if (Wd !== this.lastChunkX || Pd !== this.lastChunkY || Zd !== this.lastChunkZ) {
          this.lastChunkX = Wd, this.lastChunkY = Pd, this.lastChunkZ = Zd, this.lastChunkId = (0, Nd.e)(Wd, Pd, Zd), this.editedAt.delete(this.lastChunkId), this.editedAt.set(this.lastChunkId, gd);
          for (const [dd, Jd] of this.editedAt) {
            if (Jd >= gd - 3e5) break;
            this.editedAt.delete(dd)
          }
        } else this.editedAt.set(this.lastChunkId, gd)
      }
      chunksEditedSince(dd) {
        const Jd = [];
        for (const [kd, pd] of this.editedAt) pd >= dd && Jd.push(kd);
        return Jd
      }
    }
  },
  39224: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => oJ,
      f: () => yJ,
      j: () => YJ,
      l: () => DJ
    });
    var pd = kd(3566),
      Nd = kd(8673),
      Wd = kd(36848),
      Pd = kd(1453),
      Zd = kd(36926),
      gd = kd(39175),
      Cd = kd(39115),
      Kd = kd(3624),
      od = kd(38069),
      ld = kd(1260),
      Qd = kd(300),
      Ld = kd(29),
      Od = kd(1955),
      ed = kd(95),
      Rd = kd(33),
      Id = kd(1975),
      Gd = kd(1901),
      vd = kd(2837);
    class xd {
      constructor(dd) {
        this.storeForMs = dd, this.clicks = new vd.b
      }
      click() {
        this.clicks.enqueue(Date.now());
        const dd = Date.now() - this.storeForMs;
        for (; this.clicks.size > 0 && this.clicks.peek() < dd;) this.clicks.dequeue()
      }
      getNumClicksInMs(dd) {
        let Jd = 0;
        return this.clicks.forEach((kd => {
          kd > Date.now() - dd && Jd++
        })), Jd
      }
      getMaxClickSeparationInMs(dd) {
        if (0 === this.clicks.size) return this.storeForMs;
        let Jd = 0,
          kd = Date.now() - dd;
        this.clicks.forEach((pd => {
          pd < Date.now() - dd || (Jd = Math.max(Jd, Math.abs(pd - kd)), kd = pd)
        }));
        const pd = Math.abs(Date.now() - kd);
        return Math.max(Jd, pd)
      }
    }
    class qd {
      constructor(dd) {
        this.storeForMs = dd, this.clickDownDurations = new vd.b
      }
      registerClickDownDuration(dd) {
        this.clickDownDurations.enqueue({
          dur: dd,
          atTime: Date.now()
        });
        const Jd = Date.now() - this.storeForMs;
        for (; this.clickDownDurations.size > 0 && this.clickDownDurations.peek().atTime < Jd;) this.clickDownDurations.dequeue()
      }
      clickDownDurationsCheck(dd) {
        if (dd > this.storeForMs) return console.error("overDuration is greater than storeForMs"), "0:0";
        let Jd = 0,
          kd = 0;
        return this.clickDownDurations.forEach((pd => {
          pd.atTime > Date.now() - dd && (Jd++, kd = Math.max(kd, pd.dur))
        })), `${Jd}:${kd}`
      }
    }
    var Bd = kd(36660),
      sd = kd(39228),
      ad = kd(22),
      Md = kd(2634),
      Fd = kd(1348),
      Yd = kd(39150),
      md = kd(4285),
      bd = kd(126),
      Sd = kd(38339),
      jd = kd(38529),
      Xd = kd(610),
      fd = kd(36657),
      nd = kd(10),
      Ud = kd(9331),
      yd = kd(1245),
      Dd = kd(193),
      Td = kd(39233),
      Ed = kd(39240),
      cd = kd(38376),
      hd = kd(39254),
      rd = kd(38275),
      ud = kd(3240),
      td = kd(1670),
      Vd = kd(36779),
      zd = kd(2704),
      Hd = kd(39246),
      wd = kd(39252),
      Ad = kd(38138);
    const dJ = {
      forward: "freeCamForward",
      backward: "freeCamBackward",
      left: "freeCamLeft",
      right: "freeCamRight",
      jump: "freeCamUp",
      crouch: "freeCamDown"
    };

    function JJ() {
      var dd, Jd;
      return !(null === (dd = (0, Md.d)().client) || void 0 === dd || null === (Jd = dd.freeCameraController) || void 0 === Jd || !Jd.movesFly())
    }

    function kJ(dd) {
      const Jd = dd.on.bind(dd);
      dd.on = (dd, kd) => {
        Id.D.has(dd) ? Jd(dd, kd) : Jd(dd, (Jd => {
          var pd;
          return null !== (pd = (0, Md.d)().client) && void 0 !== pd && pd.isReplayMode() ? function(dd) {
            return dd in dJ
          }(dd) && JJ() ? kd(Jd) : void 0 : kd(Jd)
        }))
      }
    }
    const pJ = 5e3,
      NJ = 1;
    let WJ, PJ = NJ,
      ZJ = 0;
    const gJ = !0;
    let CJ = gJ;
    Od.b.subscribe("_ignoreBasicBoards", (dd => {
      CJ = dd
    })), (0, pd.onGameReset)((() => {
      CJ = gJ
    }));
    let KJ = null;
    const oJ = () => KJ;
    let lJ, QJ, LJ;
    var OJ, eJ, RJ, IJ, GJ, vJ, xJ, qJ, BJ;
    const sJ = [110, 0, 1, 8, 221, 222, 178, "g", "e", 6, 4, 255, "length", "b", "c", 199, 151, "undefined", "a", void 0, "d", 206, 2, 63, "fromCodePoint", 7, 12, "push", 133, 78, 91, "f", 8191, 88, 13, 14, 203, "i", 5, "h", 9, 17, 214, 3, 224, 141, 1023, 65536, 10, 55296, 56320, 25, 29, 128, 31, 15, 18, 232, 74, 115, 192, 190, 64, 167, 28, 21, 240, 248, 73, 166, !1, 238, 129, 112, 59, 36, 127, 193, 37, 34, !0, 116, 234, 56319, 20, 64512, 72, 65535, 57343, 158, 19, 156, 16, 4294967168, 4294965248, 4294901760, 4292870144, 27, 237, 207, 223, 196, 123, 108, 157, 2048, 1114111, 87];

    function iJ(...dd) {
      return dd[sJ[12]] = sJ[2], typeof OJ[dd[sJ[1]]] === sJ[17] ? OJ[dd[sJ[1]]] = function(...dd) {
        for (FJ(dd[sJ[12]] = sJ[2], dd[-sJ[5]] = '9TGLcpKOYmahURHAZbrkfiMEnIBFWPCtjv^8udesJQ=N<Xq`V(}@&D~goz1|6"Sl]x[2:;w+/,{!_#?7$%04)3y5*>.', dd[sJ[0]] = "" + (dd[sJ[1]] || ""), dd[sJ[4]] = dd[sJ[0]].length, dd[sJ[10]] = [], dd[sJ[8]] = sJ[1], dd[sJ[9]] = sJ[1], dd[sJ[7]] = -sJ[2]), dd[sJ[3]] = sJ[1]; dd[sJ[3]] < dd[sJ[4]]; dd[sJ[3]]++)
          if (dd[sJ[6]] = dd[-sJ[5]].indexOf(dd[sJ[0]][dd[sJ[3]]]), dd[sJ[6]] !== -sJ[2])
            if (dd[sJ[7]] < sJ[1]) dd[sJ[7]] = dd[sJ[6]];
            else {
              FJ(dd[sJ[7]] += dd[sJ[6]] * sJ[30], dd[sJ[8]] |= dd[sJ[7]] << dd[sJ[9]], dd[sJ[9]] += (dd[sJ[7]] & sJ[32]) > sJ[33] ? sJ[34] : sJ[35]);
              do {
                FJ(dd[sJ[10]].push(dd[sJ[8]] & sJ[11]), dd[sJ[8]] >>= sJ[3], dd[sJ[9]] -= sJ[3])
              } while (dd[sJ[9]] > sJ[25]);
              dd[sJ[7]] = -sJ[2]
            } return dd[sJ[7]] > -sJ[2] && dd[sJ[10]].push((dd[sJ[8]] | dd[sJ[7]] << dd[sJ[9]]) & sJ[11]), aJ(dd[sJ[10]])
      }(eJ[dd[sJ[1]]]) : OJ[dd[sJ[1]]]
    }

    function aJ(...dd) {
      return dd[sJ[12]] = sJ[2], typeof IJ !== sJ[17] && IJ ? (new IJ).decode(new GJ(dd[sJ[1]])) : typeof vJ !== sJ[17] && vJ ? vJ.from(dd[sJ[1]]).toString("utf-8") : BJ(dd[sJ[1]])
    }

    function MJ() {}

    function FJ() {
      FJ = function() {}
    }

    function YJ(dd) {
      function Jd() {
        return dd.vG.Pkd(dd.kU)
      }
      kJ(dd.inputs.down), kJ(dd.inputs.up);
      for (const pd of ["forward", "backward", "left", "right", "sprint", "jump", "crouch"]) {
        const Jd = (Jd, kd) => {
          var Nd, Wd;
          if (JJ()) {
            var Pd;
            const Nd = dJ[pd];
            var Zd, gd;
            if (Nd) null === (Zd = (0, Md.d)().client) || void 0 === Zd || null === (gd = Zd.freeCameraController) || void 0 === gd || gd.handlefreeCamKeyPress(Nd, Jd, kd);
            return void(kd || null !== (Pd = (0, Md.d)().client) && void 0 !== Pd && Pd.isReplayMode() || (dd.vG.okd()[pd] = !1))
          }
          if (null !== (Nd = (0, Md.d)().client) && void 0 !== Nd && null !== (Wd = Nd.freeCameraController) && void 0 !== Wd && Wd.isKeyPressOverriden(Jd)) return;
          dd.vG.okd()[pd] = kd
        };
        dd.inputs.down.on(pd, (dd => Jd(dd, !0))), dd.inputs.up.on(pd, (dd => Jd(dd, !1)))
      }
      dd.inputs.down.on("crouch", (() => {
        if (JJ()) return;
        if (!dd.lG.canCrouch) return;
        const Jd = dd.vG.okd();
        ad.d.get("clientEscMenuOptions").crouchIsToggle && (Jd.crouchToggled = !Jd.crouchToggled && !Jd.padSneakToggled), Jd.padSneakToggled = !1
      }));
      const kd = () => {
        const dd = Jd();
        dd.isGun() && dd.inaccuracyCalculator.jump()
      };
      dd.inputs.down.on("jump", (dd => {
        JJ() || (kd(), lJ(dd))
      }));
      for (const pd of Id.q) dd.inputs.down.on(pd, (dd => {
        var Jd, kd;
        null !== (Jd = (0, Md.d)().client) && void 0 !== Jd && null !== (kd = Jd.freeCameraController) && void 0 !== kd && kd.handlefreeCamKeyPress(pd, dd, !0) && (dd.preventDefault(), dd.stopPropagation())
      })), dd.inputs.up.on(pd, (dd => {
        var Jd, kd;
        null !== (Jd = (0, Md.d)().client) && void 0 !== Jd && null !== (kd = Jd.freeCameraController) && void 0 !== kd && kd.handlefreeCamKeyPress(pd, dd, !1) && (dd.preventDefault(), dd.stopPropagation())
      }));
      dd.inputs.down.on("recordGame", (() => {
        var dd, Jd;
        null === (dd = (0, Md.d)().client) || void 0 === dd || null === (Jd = dd.gameRecorder) || void 0 === Jd || Jd.toggleRecording()
      })), dd.inputs.down.on("recordClip", (() => {
        var dd, Jd;
        (0, Bd.e)() || null === (dd = (0, Md.d)().client) || void 0 === dd || null === (Jd = dd.gameRecorder) || void 0 === Jd || Jd.saveClip()
      }));
      for (const pd of Id.D) dd.inputs.down.on(pd, (() => {
        var dd;
        if ((0, sd.d)()) return;
        if ("replayViewerOpen" === pd) return void Ld.j.nO("replayViewer|requested", "toggle");
        const Jd = null === (dd = (0, Md.d)().client) || void 0 === dd ? void 0 : dd.gameReplayer;
        ((0, Bd.e)() || null !== Jd && void 0 !== Jd && Jd.isReplayMode()) && (null === Jd || void 0 === Jd || Jd.handleAction(pd))
      }));
      const Pd = new xd(3e4),
        od = new qd(4e4);
      let Rd = 0;
      const vd = dd => {
          let Jd = 0,
            kd = null;
          const pd = Jd => null !== Jd && Jd === kd && (kd = null, dd(), !0);
          return {
            press: () => (Jd++, (0, Td.c)() || (pd(kd), kd = Jd), Jd),
            owns: dd => dd === kd,
            release: pd
          }
        },
        md = (dd, kd) => {
          kd && DJ(ld.b.TouchDownFirePrimary), dd ? Ud() : ((0, jd.f)(), Jd().kpd()), kd || DJ(ld.b.DownFirePrimary), yJ(!0), Pd.click();
          const Nd = Pd.getMaxClickSeparationInMs(3e4) < 1e3 / 30,
            Wd = Pd.getMaxClickSeparationInMs(1e4) < 20,
            Zd = Pd.getMaxClickSeparationInMs(4e3) < 1e3 / 70;
          if (Nd || Wd || Zd) {
            let dd;
            if (Nd) dd = 30;
            else if (Wd) dd = 50;
            else {
              if (!Zd) throw new Error("???");
              dd = 70
            }(0, pd.sendColyMessage)(Kd.qk, dd)
          }
        },
        bd = vd((() => {
          const dd = Date.now() - Rd;
          od.registerClickDownDuration(dd), Jd().Akd(), DJ(ld.b.UpFirePrimary), yJ(!1);
          const kd = od.clickDownDurationsCheck(4e4);
          (0, pd.sendColyMessage)(Kd.yg, kd)
        }));
      let Sd = 0;
      dd.inputs.down.on("primary-fire", (function(dd) {
        Sd = bd.press(), bd.owns(Sd) && (Rd = Date.now(), Math.abs(performance.now() - dd.timeStamp) > 5e3 || (md(dd.altKey, "changedTouches" in dd), lJ(dd)))
      })), dd.inputs.up.on("primary-fire", (function(dd) {
        bd.release(Sd) && lJ(dd, !0)
      }));
      const Xd = () => {
          Jd().qCd(), DJ(ld.b.DownFireSecondary), yJ(!0), dd.Ddd && !dd.Ddd.position && (0, Cd.f)()
        },
        fd = vd((() => {
          Jd().wkd(), DJ(ld.b.UpFireSecondary), yJ(!1)
        }));
      let nd = 0;
      dd.inputs.down.on("alt-fire", (function(dd) {
        nd = fd.press(), fd.owns(nd) && (Xd(), lJ(dd))
      })), dd.inputs.up.on("alt-fire", (function(dd) {
        fd.release(nd) && lJ(dd, !0)
      }));
      const Ud = () => Jd().iCd();
      dd.inputs.down.on("mid-fire", (() => {
        (0, Td.c)() || Ud()
      }));
      const hd = dd => {
          (0, pd.sendColyMessage)(Kd.Ph, dd, !0)
        },
        WJ = dd => {
          (0, pd.sendColyMessage)(Kd.Rh, {
            TC: dd,
            EC: gJ()
          }, !0)
        };
      for (const pd of ["SpecialAction1", "SpecialAction2"]) dd.inputs.down.on(pd, (() => {
        hd(pd)
      })), dd.inputs.up.on(pd, (() => {
        WJ(pd)
      }));
      const ZJ = () => {
        const dd = Jd();
        dd.isGun() && dd.reload(Date.now())
      };
      dd.inputs.down.on("ReloadGun", ZJ);
      const gJ = () => {
        let Jd = "a";
        return dd.physics.testSolid.toString().includes("Gl") || (Jd = "b"), Jd
      };
      dd.inputs.down.on("OpenInventory", (dd => {
        dd.preventDefault(), (0, td.x)(dd, "inventory", (0, Ed.c)((0, Md.e)()))
      })), dd.inputs.bind("ShiftHeld", "ShiftLeft", "ShiftRight");
      const CJ = dd => {
        Ld.j.nO("DropItemKeyPressed", dd)
      };
      dd.inputs.down.on("DropItem", (() => {
        CJ(dd.vG.okd().crouch)
      })), dd.inputs.down.on("OpenShop", (Jd => {
        (0, Bd.e)() || "inGame" === ad.d.get("gameState") && (0, td.t)(Jd, Qd.s.SHOP, !(0, Nd.e)(dd.lG.shopInfo))
      })), dd.inputs.down.on("OpenLobbyLeaderboard", (Jd => {
        (0, Bd.e)() || "inGame" === ad.d.get("gameState") && (0, td.t)(Jd, Qd.s.LOBBY_LEADERBOARD, (0, wd.e)(dd.lG))
      })), dd.inputs.down.on("HideUi", (() => {
        Ld.j.nO("showUi", !1)
      })), dd.inputs.up.on("HideUi", (() => {
        Ld.j.nO("showUi", !0)
      }));
      const oJ = dd => {
        0 === dd && (dd = 10), Ld.j.nO("setSelectedInventorySlotI", dd - 1), Ld.j.nO("numkeyPressed", dd)
      };
      for (let pd = 1; pd <= 10; pd++) dd.inputs.down.on("HotBarSlot" + pd.toString(), (() => {
        oJ(pd)
      }));
      dd.inputs.down.on("OpenTasksAndLeaderboard", (Jd => {
        const kd = (0, Vd.m)();
        kd ? (0, td.y)(Jd, !0, kd) : (0, td.x)(Jd, "retentionFeatures", !(!dd.lG._tasks && !dd.lG._availableLeaderboards))
      })), dd.inputs.down.on("OpenCodeEditor", (Jd => {
        (0, td.y)(Jd, (0, Yd.d)((0, Fd.d)()), (() => {
          Ld.j.nO("EditLobbyCode", dd.vG.yI(dd.kU).map(Math.floor))
        }))
      })), dd.inputs.bind("ToggleFullCoordinateOverlay", "F3"), dd.inputs.down.on("ToggleFullCoordinateOverlay", (() => {
        Ld.j.nO("toggleFullCoordinateOverlay")
      }));
      const LJ = () => {
        (0, Md.d)().client.cameraController.swapCameraZoom()
      };
      dd.inputs.down.on("SwapCameraZoom", LJ), dd.inputs.down.on("OpenInviteLink", (dd => {
        (0, td.x)(dd, "inviteLink", ed.featureFlags.canUseInviteLinks)
      })), dd.inputs.bind("Y", "KeyY"), dd.inputs.down.on("Y", (dd => {
        (0, Bd.e)() || Ld.j.nO("YKeyPressed")
      })), dd.inputs.bind("X", "KeyX"), dd.inputs.down.on("X", (dd => {
        (0, Bd.e)() || Ld.j.nO("XKeyPressed")
      })), dd.inputs.down.on("OpenEmoteWheel", (() => {
        Ld.j.nO("requestEmoteWheelHoldOpen")
      })), dd.inputs.up.on("OpenEmoteWheel", (() => {
        Ld.j.nO("requestEmoteWheelHoldRelease")
      })), dd.inputs.down.on("Zoom", (() => {
        if ("inGame" === ad.d.get("gameState")) {
          dd.vG.getState(dd.kU, "playerCameraAdjustment").zoomKeyPressed = !0, (0, Md.d)().client.cameraController.handleZoomKeyPressed()
        }
      })), dd.inputs.up.on("Zoom", (() => {
        dd.vG.getState(dd.kU, "playerCameraAdjustment").zoomKeyPressed = !1
      })), mJ();
      const OJ = dd => function() {
        return QJ(), dd(...arguments)
      };

      function eJ(dd) {
        "inGame" !== ad.d.get("gameState") || (0, td.q)() || (Ld.j.nO("ctrlCrouchWithoutFullscreen"), dd.preventDefault())
      }
      KJ = {
        primaryFireDown: OJ((() => {
          const dd = bd.press();
          return bd.owns(dd) && (Rd = Date.now(), md(!1, !1)), dd
        })),
        primaryFireUp: OJ((dd => {
          bd.release(dd)
        })),
        altFireDown: OJ((() => {
          const dd = fd.press();
          return fd.owns(dd) && Xd(), dd
        })),
        altFireUp: OJ((dd => {
          fd.release(dd)
        })),
        jumpDown: OJ(kd),
        specialActionDown: OJ(hd),
        specialActionUp: OJ(WJ),
        reloadGun: OJ(ZJ),
        dropItem: OJ(CJ),
        swapCameraZoom: OJ(LJ),
        pickBlock: OJ(Ud)
      }, dd.inputs.down.on("ctrlCrouch", eJ), dd.inputs.up.on("ctrlCrouch", eJ), dd.inputs.bind("ctrlCrouch", "ControlLeft");
      const RJ = dd => {
        "inGame" === ad.d.get("gameState") && dd.ctrlKey && !(0, td.q)() && dd.preventDefault()
      };
      document.addEventListener("keydown", RJ), document.addEventListener("keyup", RJ), document.addEventListener("keypress", RJ), dd.inputs.bind("Alt", "AltLeft", "AltRight"), dd.inputs.down.on("Alt", (dd => {
        dd.preventDefault()
      }));
      const IJ = Jd => (0, rd.k)(dd, Jd),
        GJ = Jd => (0, rd.l)(dd, Jd),
        vJ = [0, 0, 0],
        xJ = [0, 0, 1];
      dd.on("afterRender", (Jd => {
        (0, Wd.e)(dd.camera.heading), (0, rd.p)(dd, vJ, xJ), (0, Md.d)().client.triggerGameCallback("onAfterRender", Jd, {
          cameraHeading: dd.camera.heading,
          cameraPitch: dd.camera.pitch,
          cameraPosition: vJ,
          cameraDirection: xJ,
          tanHalfFovX: (0, rd.e)(dd),
          tanHalfFovY: Math.tan(dd.UL.mw().fov / 2),
          screenBandPct: {
            x: ud.b,
            y: (0, ud.k)()
          },
          projectWorldPosToScreenPos: IJ,
          projectWorldPosToViewport: GJ
        })
      })), (0, zd.m)("look") && (dd.camera.ZE = (0, Hd.h)("js"), dd.inputs.Hr = Hd.e), (0, zd.m)("remesh") && (0, Ad.f)(dd), dd.on("beforeInputs", (() => {
        if ((0, sd.d)()) return dd.inputs.ku.dx = 0, void(dd.inputs.ku.dy = 0);
        if (dd.camera.ku.dx += dd.inputs.ku.dx, dd.camera.ku.dy += dd.inputs.ku.dy, 0 !== dd.inputs.ku.dx || 0 !== dd.inputs.ku.dy) {
          dd.vG.getState(dd.kU, "playerCameraAdjustment").lastPointerMove = Date.now()
        }
        dd.inputs.ku.dx = 0, dd.inputs.ku.dy = 0
      }));
      let qJ = 0;
      dd.on("Do", (function(Jd) {
        Ld.j.nO("noaTick", Jd);
        const kd = (0, Md.d)().client;
        if (kd.triggerGameCallback("Do", Jd), kd.isClientGameSessionActive()) try {
          gd.c.Do(Jd)
        } catch (Pd) {
          console.error("Error ticking audio entities", Pd)
        }
        if (!dd.vG.Nkd(dd.kU).isAlive) return;
        Date.now() - qJ > 9e3 && (! function() {
          const dd = (0, Md.e)();
          "number" === typeof dd.lG.speedMultiplier && "number" === typeof dd.lG.jumpAmount && (0, pd.sendColyMessage)(Kd.qi, {
            oP: (0, yd.d)(dd.lG.speedMultiplier),
            lP: (0, yd.b)(dd.lG.jumpAmount),
            QP: (0, yd.d)(dd.lG.crouchingSpeed),
            LP: (0, yd.d)(dd.lG.walkingSpeed),
            OP: (0, yd.d)(dd.lG.runningSpeed),
            eP: (0, yd.b)(dd.bdd),
            RP: dd.vG.RJd(dd.kU).jumpForce,
            IP: dd.vG.bV(1).width,
            GP: dd.vG.bV(1).height,
            vP: dd.vG.qT(1).vP
          }, !0)
        }(), qJ = Date.now());
        const Nd = dd.vG.okd();
        if ((Nd.jump || Nd.forward || Nd.backward || Nd.left || Nd.right || Nd.sprint) && Ld.j.nO("usedKeyboard"), dd.vG.TJd(dd.kU) && !0 === dd.lG.canPickUpItems) {
          const Jd = dd.vG.yI(dd.kU),
            kd = (0, Gd.s)(PJ),
            Nd = (0, Gd.t)(PJ),
            Wd = [Jd[0] - kd, Jd[1] - .6 * Nd, Jd[2] - kd],
            Pd = [Jd[0] + kd, Jd[1] + Dd.g.uR + .6 * Nd, Jd[2] + kd],
            gd = dd.vG.jZd({
              base: Wd,
              max: Pd
            }, dd.vG.names.autoRotate),
            od = dd => {
              const Jd = Dd.g.droppedBlockSize / 2;
              return [0, 1, 2].every((kd => dd[kd] >= Wd[kd] - Jd && dd[kd] <= Pd[kd] + Jd))
            },
            {
              itemDropPrediction: ld
            } = (0, Md.d)().client,
            Qd = pd.offlineInputReplay.holdsInput();
          if (gd.length > 0)
            for (const Ld of gd) {
              const Jd = dd.vG.getState(Ld, "itemState");
              if (void 0 === Jd || Date.now() - Jd.creationTime < 500) continue;
              let kd = Ld,
                Nd = null;
              if (Jd.Wp) {
                const dd = ld.pickupTarget(Ld, od, Qd);
                if (null === dd) continue;
                ({
                  MC: kd,
                  mC: Nd
                } = dd)
              }
              const Wd = dd.vG.getState(kd, "itemState");
              if (Wd.Wp && null === Nd) continue;
              let Pd = 0,
                gd = null,
                Od = !1;
              if (0 === Wd.amount) Od = !0;
              else {
                const {
                  amountPickedUp: Jd
                } = dd.vG.yJd(dd.kU).pickUpItem({
                  name: Wd.name,
                  typeObj: Wd.typeObj,
                  amount: Wd.amount,
                  attributes: Wd.attributes
                });
                if (Pd = Jd, 0 === Pd) continue;
                gd = cd.d.pickUp(Wd, Pd), Wd.amount -= Pd, Wd.amount < 0 ? console.error("Picking up led to less than 0 of item!") : 0 === Wd.amount ? Od = !0 : Wd.creationTime = Date.now() + pJ
              }
              const ed = (0, Md.d)().client.inventoryPrediction.record(gd);
              (0, pd.sendColyMessage)(Kd.Lh, {
                MC: null === Nd ? kd : "",
                FC: Pd,
                YC: Cd.d,
                KP: ed,
                mC: Nd
              }, !0), Od && (Qd && ld.onPickedUpOffline(kd, ed, Nd), null === Nd && dd.vG.deleteEntity(kd));
              Zd.b.play("pickUp", Dd.g.pickupSoundVol).rate(1 + Math.random() * Dd.g.pickupSoundRateVariation)
            }
        }
        if (!dd.vG.mJd(dd.kU)) return;
        const Wd = dd.inputs.ku.qJd;
        if (0 !== Wd) {
          const Jd = Wd > 0 ? 1 : -1;
          dd.inputs.state["mid-fire"] || dd.inputs.state.Alt || !dd.lG.useInventory ? (dd.inputs.state["mid-fire"] && Ld.j.nO("requestEmoteWheelClose"), (0, Md.d)().client.cameraController.handleScrollZoom(Jd)) : Ld.j.nO("ScrollInventorySlot", Jd)
        }
      })), Od.b.subscribe("droppedItemScale", (dd => {
        PJ = "number" === typeof dd && isFinite(dd) ? dd : NJ
      }))
    }

    function mJ() {
      const dd = (0, Md.e)();
      if (dd)
        for (const Jd in Id.x) {
          dd.inputs.unbind(Jd);
          for (const kd of Id.x[Jd]) dd.inputs.bind(Jd, kd)
        }
    }
    FJ(OJ = {}, eJ = ["LlN/@s^uXY)2^}.W2mVm.~*UT[3IdZTN", "ijo,YyqG", '"d<aN"Gr(m.q1;Bu;LrF.v,QJxoo8}g^f~"&0e`kyRLG}d/t~z?tdJz3<Y', '5,egB,+TT~AdNBSEMm}/J~AR"o4PedzErqzYD1U&FxSTT', '%^vFS)EOg1W_eeHB"~Q@^J<JZA>{</}JcB;}l{t%Tz*#H0}We@&#k?hOO', "9~7m$elQ<|1jR/_ejmW{rebI%zb!GwvbNSfg2q7;Z6zi2e2dWdT!u:+Rp", "fEV~Hg?nMk8[ap>^}tO&%_xPKk", "*WtWV!P`{HDn]AYB$xCg9VNTp19?DRbJaE5W3|7@a|)o5G", "em.@w7Tk8~F1keZF8N>~C", "Glv/GDb`L]S&YsgQiqym;7ru*b)2(Ieebl7Kd8an]UQab/fWNzi&c/>T", "~^g,#}FD|x~&&4?J|Va#V(:rTA_oh0>PpAr/R", "SmYmF?w{7lpf_Fz82=Y~zwe1e]<Ou|~^Bqda%z9", "gx.YUV(8<i", "fl4B/6{17A5wA}oWlHoKHVN`rk[[xVvbI:G", "t~t&4SUyBfzOX/pd]JEc})lPYf+(2w68nfeWm%CCfkN;sLxnwE;B+7n&O", 'u:@Pd"6CPr', "d+!pe3JGC|wM3u/tjV:#j&j$K1id5wTn}dNjGqoGpam!=eJr[,o~/%jG", ">@etF~^{iRF", "qBG!w%ZG", "&f.@+%!z`[=OT", 'ld<#8"LI_|V,bdTbmq[D"s9', 'Ez4{3z=GXo"l]A4Q$SM,v"9', '~xQ/ke)qg],2:c8IC~GF;^|Q"Y4pvZrf3K){5+an86g', "c(v~Ky=&Lz!h)+RfH6I/J:TkYbs,%$U", "4dlc2^N`}lqi8}xdX@}D6@5z<HNOB(RfVztWh;E`d]OLn4I8", "BN?WMJ@QU|L@`G%s&V}YR", "BAu#_4&ytA/q4B18ffRO:7R`{hc^7BWP%t6#g^9rrl5Ivc", "qJ)pv`JrOfaK3$,ICJ|YR{,Q<SSIsGhf", "`~$KH}tkczf/ZL[u5V{Dr;iRC[FL>cABMBROX8LQ([;#8e)JQN*msd1G", "gxR&;DOO`ApEj|GriPRgu:%zcz?w^I0W5Kk/i+{CqD=", "I:Pgw7cYT6f7W+ms!tg(k%0UtU{2ewP8ABV~W$0nqi(", "V~nv;^Mn:k8/y;Lrs~G", "y@v/[/TQ$6;[cL=shN:#j~D`K", ",Su#^,+T<xG?LeDWx~l_.X{Uf]32j4cCc~=Fe0IDL", "~+~WK7(3vl_cznxd(9", "mrigb;=n!b){W|}^QST", '6E/Krz{1$lzw]L"uTlJKW`9', "l~>@J8LIWSq[PZ(^g@,j/70n2U2rQZ1PF~c#v~Yr3RtFqR~^l|tCH_ruK", "M62{^?|R$U;#!+yW8LDtG%9", 'TJ1j{ekkrkhZ1d1=|xj@8"E8YfTx<|4Q,KbFO%GYfkV,C0)Ja(2YI', "P:(KZu#Ta|ZdzZunkK%@@@$nzxj;$c", ":b:#|^GCK]2Y{%Gu=x}Px)s8XDf01RHf+X`WmV$1[mBS|HvtO(zY", "=@kP+6RQ3R<cTVNkxE:p@!(Q@~d&3$YkVx.PI|QOp", "x^smm_Mqe1;rqI<e4s6D~oEQq|}h4H/k1:fO2{V1oR)pT", 'UJqcm6My"|KZU|pIS~y&`sDE`l&ioFfWff(F3v4;&]?6}I&J#EE&B,!znf', "/:|YL{(Tx6cR.(ur?x{j%;1JxrK:AFYd;VJ@H_9", "/~sKhysRBSZfn|f^$oR_s(rYD~#{Z6:CjUOm^301Vre", 'N+)DYyxz`AlqgekFnx;c~d{nUb~;H"tdo~<OO^^C&ko', "y@7ced>bFbPS.;_kqKSca;%TO", '|E2#.,"`X[t7eGwnB:(Fj|Knkm[$g0IQ', "%,I?&@I%kkRxp60JU{mKt`r1b62Y_|*=bm+&K6pQP[&", "n@.pX@PQqoy#U)>QRr4jM}9", "LU7WE?ORSYg,E}zERc4p<ovQ!xm:JF]E||T", "oH8PZ%Z&!Hq_!w$Bqxw+:7!QpR<;9", "j^F/Hg0J)]]i7G*^RAEcD#^r|H&W#c", "#xWa`sCydkV,p)m", "bmm!ddv`8~%T}I[uzm9v((Jq~]o$CHLu>=bF7z``g]ow8w3FDx.ps3Yqc", "ezNP$+nqA[!r{%we)wlc;uCU`lQ|k0*8_xd_U}R`)kW", "*|E&34,O^Ue", 'qU}/54gE[l2D:A|PPEEW88TR#HjLS(eI#:I~+7*&obh"`G', "@J|D((J&^kJ7|HLbc6T", ':EoKM;r&k~j;hBcNfBlcQoAQ"YVbV|/reN(Ff}7;j[axT', "5Xia()01r6Vbq(LIEmO_+%>TNY%A/L", 'JdyO8JET#SE7:/2I`K)Bru^U)zj;%u[d"th#,St`!oDWeIh', "B{/,v:(Rf~4o>uLb+xbF~wUG", 'QSFaV)rwaH:AV`PP"E:BF?2!!xPgs1{Ig|TF)eA;bm(&u|(F', "Km~_S6OQ$mi;ouvt1~QFx/$qvU", "p{;BAearSD18~d9=tzx~S6iOwR~$*L3Jw~;{Vo.U?o<aWF3FZUyWj$dRSr", 'h{4j}ql`}kL!"62tj^<{b_|T&m(', 'm8UP;g,l}UWxR/lE0LJm"sDlmx}h@0dk9(],?X9', "N+LjQ!ORVrh16AdtQfsWmVFQxr9x36skGPCt9qpR9mAf$A<s;@/(*+!Trk", "hqomaS(Tqhq;]FtP~Hig~dy:iR0IvcNBE{$(}wbT", "SWpOJ!:{TlZ!D6f^hcI@[)<CqYaEVL", '^mN#66wK_D#A64cn%xE&"#]1QfJ', "~Xc#p;=U+]I1~(`BAz,Yow[UMR0Mf`1Q.9", "TUx~.35Qi]Cgx6*8~JBj{z%P2k$DJFOeQ@A&VlvPK", "Cxb!V!}$M1W&9+iF", "/|s~}([{G6U/1;Cnz+T@J,P;/f+(>cFP#9", "5xr@Hu@RagZ:%c8C&KCt!{E80U>]/AaIdf<Pxuqr(m$rrppemcI@K%iDVDeST", "8dWa6^Gw7DC/+eRsn6@{aVrG", "u~:tn&:16|7D;u8CVfY~I_P8@69K(/EQ^VAmk%]1r~o", "pro~C~xlM]x[,c]d=B3O+^)qJ1o|mu;t/V}@W4+z3~vS4Bo8,x)pF", "dB!j5ewC<HdtT", "b+E&+7JC{|L!oc_e8Kaj,S#@mSc`SdOrfT", '7wj@>ev`9z9:781Prd"a~d}rKa_j1%Gb~zPWzw^rzSF', "::G/cg/y:~7wx;|=7Klc7XDE}mT!3u1Wz9", "br?_)&{q[l/6T", "1+n@Oy0{blxwwR~8;:kj3v{y|b:$x%Fbq:M(5_91`Y]o`G#FVmf{8|;Rkm", "fq;tXo_rER=8SRR", 'FN;tn4(OVlMbV|kQ^^tWP,SK|b"O~"UeKlSO97CrX[G?`H1=_XHvF4{qc', "qtg_/%6:G6nV8B;CyWS_y}oyCr}", 'Hlcaf;SU,HKdH"nW6|TjR%jU"h%wqR^r*@IFf&{UGkywT/9=#xG', ";tT@i3+Qtr4M20)^*fwcP", "+fd{XlS1GzL7=IkJ", '^NecH_:n>fx$R6vb7tAv"D&r+RjgiZl=C:Njb_ZYNbrSnL', "$w_p<@dk:~;i^IRfFT", "4f7cA_>bq[+2kLluO8qOyzy{zb^79)bF3^(FE3H&f~(", "@X_}dJnup", "]m%T5{.k", "a,Xu:GUk", "8S3{04tk", "wLs@r#u", "=@DCtbXF", "@IUo4RTF", ":k;!0?]F", ":k:s@", "Kx|9L3%Q*D4$5^rJdxjR^.1", "D1xub~?igvyA}|LmRKSEp?X]`Wh;(*t", 'ql$|fIa/uJ=x"[?QWlwP[mZ', 'GVWvJTNQ)"t=0d@XinA:eN{rO[3*Fu.', "xU0d1Q~&y[e%k5BE.nzi7~3cuH;Va*l", "QU({.$LeOJ~q{<^V:S(H{|xe$QJ", ")tg`4EL", "8RF5xj)@", "qwz!", "Nxn~|qiT", '"CzY_8Bk', "OD.U", "S.OE#}Zo", "?OKEz3Fo", "=y`B|@Zo", "MCVUFHnk", "3<J$78{", "M+zYY8^k", "vtky.Bp", "fl[jl3rv", "Is?R", "<U7Ut(e1", "Yg+j@Z*", "B:af?.21", "PyncDd2s", "Ei,@m>vs", "gGceyQu", "Me~;U@3s", "eJ0f!+Is", "x{,wzd6s", "x{xce", 'Rk?C_*5iv`.=>GX{"kSpGf|', '|uIW?q15{6w2t~Hf="[`81}xMBa>T09', "gDO]5AQaKT1zIr:/WD96rj0", "0U{k35^|}GM=yfxh&mS8?^L~6;(+XRz", '7]wyJ^S;>3YU8$%V?IjgLSqdQCv",4)', "F(oENia|I>PwEjxC%QoRE/Z|iF>", "@[]lRr)", ")m81G<^A", "zt:e", "{a%^&#H"]), FJ(RJ = function(...dd) {
      FJ(dd[sJ[12]] = sJ[1], dd[-sJ[16]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], dd[sJ[13]] = sJ[19], dd[sJ[14]] = []);
      try {
        FJ(dd[sJ[13]] = Object, dd[sJ[14]][sJ[27]]("".__proto__.constructor.name))
      } catch (eJ) {}
      dd: for (dd[sJ[15]] = sJ[1]; dd[sJ[15]] < dd[-sJ[16]][sJ[12]]; dd[sJ[15]]++) try {
        for (dd[sJ[13]] = dd[-sJ[16]][dd[sJ[15]]](), dd[sJ[8]] = sJ[1]; dd[sJ[8]] < dd[sJ[14]][sJ[12]]; dd[sJ[8]]++)
          if (typeof dd[sJ[13]][dd[sJ[14]][dd[sJ[8]]]] === sJ[17]) continue dd;
        return dd[sJ[13]]
      } catch (eJ) {}
      return dd[sJ[13]] || this
    }() || {}, IJ = RJ.TextDecoder, GJ = RJ.Uint8Array, vJ = RJ.kL, xJ = RJ.String || String, qJ = RJ.Array || Array, BJ = function(...dd) {
      return FJ(dd[sJ[12]] = sJ[1], dd[sJ[18]] = new qJ(sJ[53]), dd[sJ[2]] = xJ[sJ[24]] || xJ.fromCharCode, dd[sJ[14]] = []),
        function(...Jd) {
          for (FJ(Jd[sJ[12]] = sJ[2], Jd[sJ[18]] = sJ[19], Jd[sJ[22]] = sJ[19], Jd[sJ[21]] = Jd[sJ[1]][sJ[12]], dd[sJ[14]][sJ[12]] = sJ[1]), Jd[sJ[20]] = sJ[1]; Jd[sJ[20]] < Jd[sJ[21]];) FJ(Jd[sJ[22]] = Jd[sJ[1]][Jd[sJ[20]]++], Jd[sJ[22]] <= sJ[76] ? Jd[sJ[18]] = Jd[sJ[22]] : Jd[sJ[22]] <= sJ[100] ? Jd[sJ[18]] = (Jd[sJ[22]] & sJ[54]) << sJ[9] | Jd[sJ[1]][Jd[sJ[20]]++] & sJ[23] : Jd[sJ[22]] <= 239 ? Jd[sJ[18]] = (Jd[sJ[22]] & sJ[55]) << sJ[26] | (Jd[sJ[1]][Jd[sJ[20]]++] & sJ[23]) << sJ[9] | Jd[sJ[1]][Jd[sJ[20]]++] & sJ[23] : xJ[sJ[24]] ? Jd[sJ[18]] = (Jd[sJ[22]] & sJ[25]) << sJ[56] | (Jd[sJ[1]][Jd[sJ[20]]++] & sJ[23]) << sJ[26] | (Jd[sJ[1]][Jd[sJ[20]]++] & sJ[23]) << sJ[9] | Jd[sJ[1]][Jd[sJ[20]]++] & sJ[23] : (Jd[sJ[18]] = sJ[23], Jd[sJ[20]] += sJ[43]), dd[sJ[14]][sJ[27]](dd[sJ[18]][Jd[sJ[18]]] || (dd[sJ[18]][Jd[sJ[18]]] = dd[sJ[2]](Jd[sJ[18]]))));
          return dd[sJ[14]].join("")
        }
    }()), FJ(LJ = (...dd) => {
      FJ(dd[sJ[12]] = sJ[2], dd[sJ[18]] = sJ[1]);
      for (const Jd in dd[sJ[1]]) dd[sJ[18]]++;
      return dd[sJ[18]]
    }, QJ = (...dd) => {
      dd[sJ[12]] = sJ[1], iJ(sJ[59]) in MJ && function(...dd) {
        FJ(dd[sJ[12]] = sJ[1], dd[sJ[13]] = function(...Jd) {
          return FJ(Jd[sJ[12]] = sJ[43], Jd[sJ[71]] = {}), Jd[sJ[22]].length !== Jd[sJ[1]].length + Jd[sJ[2]].length ? sJ[70] : dd[sJ[14]](Jd[sJ[1]], Jd[sJ[2]], Jd[sJ[22]], sJ[1], sJ[1], sJ[1], Jd[sJ[71]])
        }, dd[sJ[14]] = function(...Jd) {
          return FJ(Jd[sJ[12]] = sJ[25], Jd[-sJ[72]] = sJ[70]), Jd[sJ[38]] >= Jd[sJ[22]].length ? sJ[80] : Jd[sJ[9]]["" + Jd[sJ[43]] + Jd[sJ[10]] + Jd[sJ[38]]] !== sJ[19] ? Jd[sJ[9]]["" + Jd[sJ[43]] + Jd[sJ[10]] + Jd[sJ[38]]] : (Jd[sJ[22]][Jd[sJ[38]]] === Jd[sJ[1]][Jd[sJ[43]]] && Jd[sJ[22]][Jd[sJ[38]]] === Jd[sJ[2]][Jd[sJ[10]]] ? Jd[-sJ[72]] = dd[sJ[14]](Jd[sJ[1]], Jd[sJ[2]], Jd[sJ[22]], Jd[sJ[43]] + sJ[2], Jd[sJ[10]], Jd[sJ[38]] + sJ[2], Jd[sJ[9]]) || dd[sJ[14]](Jd[sJ[1]], Jd[sJ[2]], Jd[sJ[22]], Jd[sJ[43]], Jd[sJ[10]] + sJ[2], Jd[sJ[38]] + sJ[2], Jd[sJ[9]]) : Jd[sJ[22]][Jd[sJ[38]]] === Jd[sJ[1]][Jd[sJ[43]]] ? Jd[-sJ[72]] = dd[sJ[14]](Jd[sJ[1]], Jd[sJ[2]], Jd[sJ[22]], Jd[sJ[43]] + sJ[2], Jd[sJ[10]], Jd[sJ[38]] + sJ[2], Jd[sJ[9]]) : Jd[sJ[22]][Jd[sJ[38]]] === Jd[sJ[2]][Jd[sJ[10]]] && (Jd[-sJ[72]] = dd[sJ[14]](Jd[sJ[1]], Jd[sJ[2]], Jd[sJ[22]], Jd[sJ[43]], Jd[sJ[10]] + sJ[2], Jd[sJ[38]] + sJ[2], Jd[sJ[9]])), Jd[sJ[9]]["" + Jd[sJ[43]] + Jd[sJ[10]] + Jd[sJ[38]]] = Jd[-sJ[72]], Jd[-sJ[72]])
        }, console.log(dd[sJ[13]]))
      }(), ZJ++ === sJ[38] && ((0, Rd.o)() && (0, od[sJ[13]])("4 "), ZJ = sJ[1])
    }), lJ = function(dd) {
      function Jd(...dd) {
        return dd[sJ[12]] = sJ[2], typeof OJ[dd[sJ[1]]] === sJ[17] ? OJ[dd[sJ[1]]] = function(...dd) {
          for (FJ(dd[sJ[12]] = sJ[2], dd[sJ[18]] = '{okrEZpFiuUw[&:C?dMmzVL"XIB9^K~}>eTAnO)b@taD0.56hRGSQ$,(/qW3+j<!N1s*=]Pf#yH2xY_l78g`J|%v;c4', dd[-sJ[73]] = "" + (dd[sJ[1]] || ""), dd[sJ[43]] = dd[-sJ[73]].length, dd[sJ[20]] = [], dd[-sJ[57]] = sJ[1], dd[sJ[31]] = sJ[1], dd[sJ[25]] = -sJ[2]), dd[sJ[3]] = sJ[1]; dd[sJ[3]] < dd[sJ[43]]; dd[sJ[3]]++)
            if (dd[sJ[37]] = dd[sJ[18]].indexOf(dd[-sJ[73]][dd[sJ[3]]]), dd[sJ[37]] !== -sJ[2])
              if (dd[sJ[25]] < sJ[1]) dd[sJ[25]] = dd[sJ[37]];
              else {
                FJ(dd[sJ[25]] += dd[sJ[37]] * sJ[30], dd[-sJ[57]] |= dd[sJ[25]] << dd[sJ[31]], dd[sJ[31]] += (dd[sJ[25]] & sJ[32]) > sJ[33] ? sJ[34] : sJ[35]);
                do {
                  FJ(dd[sJ[20]].push(dd[-sJ[57]] & sJ[11]), dd[-sJ[57]] >>= sJ[3], dd[sJ[31]] -= sJ[3])
                } while (dd[sJ[31]] > sJ[25]);
                dd[sJ[25]] = -sJ[2]
              } return dd[sJ[25]] > -sJ[2] && dd[sJ[20]].push((dd[-sJ[57]] | dd[sJ[25]] << dd[sJ[31]]) & sJ[11]), aJ(dd[sJ[20]])
        }(eJ[dd[sJ[1]]]) : OJ[dd[sJ[1]]]
      }
      if ((arguments[Jd(sJ[81])] > sJ[2] && arguments[sJ[2]] !== sJ[19] ? arguments[sJ[2]] : sJ[70]) && (0, hd[sJ[20]])(dd)) return;
      const kd = Date[Jd(117)]() < new Date(Jd(118) + Jd(119) + Jd(120) + "0Z")[Jd(121) + sJ[8]](),
        pd = window[Jd(122)];
      if (typeof pd !== Jd(sJ[102]) + "on" || dd instanceof pd || (0, nd.K)(dd)) {
        function Nd(...dd) {
          for (FJ(dd[sJ[12]] = sJ[2], dd[sJ[2]] = '_>v^5PaoRN#SxX{s$B8*9U%qi0(|!=zID"VFeM&[:cTECLh2rp)4j/lfWmO,Y`uw]nbkZ.dgJH6?AQ@7+}3K~1;Gyt<', dd[sJ[22]] = "" + (dd[sJ[1]] || ""), dd[sJ[43]] = dd[sJ[22]].length, dd[sJ[10]] = [], dd[sJ[38]] = sJ[1], dd[sJ[31]] = sJ[1], dd[sJ[25]] = -sJ[2]), dd[sJ[3]] = sJ[1]; dd[sJ[3]] < dd[sJ[43]]; dd[sJ[3]]++)
            if (dd[sJ[37]] = dd[sJ[2]].indexOf(dd[sJ[22]][dd[sJ[3]]]), dd[sJ[37]] !== -sJ[2])
              if (dd[sJ[25]] < sJ[1]) dd[sJ[25]] = dd[sJ[37]];
              else {
                FJ(dd[sJ[25]] += dd[sJ[37]] * sJ[30], dd[sJ[38]] |= dd[sJ[25]] << dd[sJ[31]], dd[sJ[31]] += (dd[sJ[25]] & sJ[32]) > sJ[33] ? sJ[34] : sJ[35]);
                do {
                  FJ(dd[sJ[10]].push(dd[sJ[38]] & sJ[11]), dd[sJ[38]] >>= sJ[3], dd[sJ[31]] -= sJ[3])
                } while (dd[sJ[31]] > sJ[25]);
                dd[sJ[25]] = -sJ[2]
              } return dd[sJ[25]] > -sJ[2] && dd[sJ[10]].push((dd[sJ[38]] | dd[sJ[25]] << dd[sJ[31]]) & sJ[11]), aJ(dd[sJ[10]])
        }

        function Wd(...dd) {
          return dd[sJ[12]] = sJ[2], typeof OJ[dd[sJ[1]]] === sJ[17] ? OJ[dd[sJ[1]]] = Nd(eJ[dd[sJ[1]]]) : OJ[dd[sJ[1]]]
        }
        if (dd[Wd(125) + Wd(126)] === sJ[70]) {
          function Pd(...dd) {
            for (FJ(dd[sJ[12]] = sJ[2], dd[sJ[2]] = '*917,&"+#0~<V!4:a$A%D^/Qio;vHULumkBSbJC(}?e=[E8@YF5ct|wdKgp>n3O2zTIx.l)6fPsZj]yGRMW_`qNrh{X', dd[-sJ[74]] = "" + (dd[sJ[1]] || ""), dd[sJ[43]] = dd[-sJ[74]].length, dd[sJ[10]] = [], dd[sJ[38]] = sJ[1], dd[-sJ[75]] = sJ[1], dd[sJ[25]] = -sJ[2]), dd[sJ[3]] = sJ[1]; dd[sJ[3]] < dd[sJ[43]]; dd[sJ[3]]++)
              if (dd[sJ[40]] = dd[sJ[2]].indexOf(dd[-sJ[74]][dd[sJ[3]]]), dd[sJ[40]] !== -sJ[2])
                if (dd[sJ[25]] < sJ[1]) dd[sJ[25]] = dd[sJ[40]];
                else {
                  FJ(dd[sJ[25]] += dd[sJ[40]] * sJ[30], dd[sJ[38]] |= dd[sJ[25]] << dd[-sJ[75]], dd[-sJ[75]] += (dd[sJ[25]] & sJ[32]) > sJ[33] ? sJ[34] : sJ[35]);
                  do {
                    FJ(dd[sJ[10]].push(dd[sJ[38]] & sJ[11]), dd[sJ[38]] >>= sJ[3], dd[-sJ[75]] -= sJ[3])
                  } while (dd[-sJ[75]] > sJ[25]);
                  dd[sJ[25]] = -sJ[2]
                } return dd[sJ[25]] > -sJ[2] && dd[sJ[10]].push((dd[sJ[38]] | dd[sJ[25]] << dd[-sJ[75]]) & sJ[11]), aJ(dd[sJ[10]])
          }

          function Zd(...dd) {
            return dd[sJ[12]] = sJ[2], typeof OJ[dd[sJ[1]]] === sJ[17] ? OJ[dd[sJ[1]]] = Pd(eJ[dd[sJ[1]]]) : OJ[dd[sJ[1]]]
          }

          function gd(...dd) {
            FJ(dd[sJ[12]] = sJ[1], dd[sJ[18]] = function(...Jd) {
              return FJ(Jd[sJ[12]] = sJ[2], Jd[sJ[18]] = []), (Jd[sJ[1]] === sJ[2] || Jd[sJ[1]] >= sJ[10]) && dd[sJ[13]](Jd[sJ[18]], [], Jd[sJ[1]], sJ[1]), Jd[sJ[18]]
            }, dd[sJ[13]] = function(...Jd) {
              for (Jd[sJ[12]] = sJ[10], Jd[sJ[77]] = Jd[sJ[43]]; Jd[sJ[77]] < Jd[sJ[22]]; Jd[sJ[77]]++) {
                if (Jd[sJ[2]].length !== Jd[sJ[77]]) return;
                for (Jd[sJ[38]] = sJ[1]; Jd[sJ[38]] < Jd[sJ[22]]; Jd[sJ[38]]++) dd[-sJ[79]](Jd[sJ[2]], [Jd[sJ[77]], Jd[sJ[38]]]) && (FJ(Jd[sJ[2]].push([Jd[sJ[77]], Jd[sJ[38]]]), dd[sJ[13]](Jd[sJ[1]], Jd[sJ[2]], Jd[sJ[22]], Jd[sJ[77]] + sJ[2])), Jd[sJ[2]].length === Jd[sJ[22]] && Jd[sJ[1]].push(dd[sJ[20]](Jd[sJ[2]])), Jd[sJ[2]].pop())
              }
            }, dd[sJ[20]] = function(...dd) {
              for (FJ(dd[sJ[12]] = sJ[2], dd[sJ[78]] = [], dd[sJ[13]] = dd[sJ[1]].length), dd[sJ[43]] = sJ[1]; dd[sJ[43]] < dd[sJ[13]]; dd[sJ[43]]++)
                for (dd[sJ[78]][dd[sJ[43]]] = "", dd[sJ[10]] = sJ[1]; dd[sJ[10]] < dd[sJ[13]]; dd[sJ[10]]++) dd[sJ[78]][dd[sJ[43]]] += dd[sJ[1]][dd[sJ[43]]][sJ[2]] === dd[sJ[10]] ? "Q" : ".";
              return dd[sJ[78]]
            }, dd[-sJ[79]] = function(...dd) {
              for (FJ(dd[sJ[12]] = sJ[22], dd[sJ[22]] = dd[sJ[1]].length), dd[-sJ[33]] = sJ[1]; dd[-sJ[33]] < dd[sJ[22]]; dd[-sJ[33]]++) {
                if (dd[sJ[1]][dd[-sJ[33]]][sJ[1]] === dd[sJ[2]][sJ[1]] || dd[sJ[1]][dd[-sJ[33]]][sJ[2]] === dd[sJ[2]][sJ[2]]) return sJ[70];
                if (Math.abs((dd[sJ[1]][dd[-sJ[33]]][sJ[1]] - dd[sJ[2]][sJ[1]]) / (dd[sJ[1]][dd[-sJ[33]]][sJ[2]] - dd[sJ[2]][sJ[2]])) === sJ[2]) return sJ[70]
              }
              return sJ[80]
            }, console.log(dd[sJ[18]]))
          }
          Zd(sJ[76]) + "G" in MJ && gd(), (0, od[sJ[13]])("2 " + (kd ? (new Error)[Zd(sJ[53])] : ""))
        } else if (LJ(dd) < sJ[48]) {
          function Cd(...dd) {
            for (FJ(dd[sJ[12]] = sJ[2], dd[sJ[2]] = 'H1A@zCf%g2Fu)G/LM7xqJibX;Z?(!`c0yk,tPV.r]n=<sT|&{$3jDB6pKaoYI4RQ>vUW:+9he}S#^*8m"d_w~5E[OlN', dd[sJ[13]] = "" + (dd[sJ[1]] || ""), dd[sJ[43]] = dd[sJ[13]].length, dd[sJ[0]] = [], dd[sJ[8]] = sJ[1], dd[sJ[31]] = sJ[1], dd[sJ[7]] = -sJ[2]), dd[sJ[39]] = sJ[1]; dd[sJ[39]] < dd[sJ[43]]; dd[sJ[39]]++)
              if (dd[sJ[34]] = dd[sJ[2]].indexOf(dd[sJ[13]][dd[sJ[39]]]), dd[sJ[34]] !== -sJ[2])
                if (dd[sJ[7]] < sJ[1]) dd[sJ[7]] = dd[sJ[34]];
                else {
                  FJ(dd[sJ[7]] += dd[sJ[34]] * sJ[30], dd[sJ[8]] |= dd[sJ[7]] << dd[sJ[31]], dd[sJ[31]] += (dd[sJ[7]] & sJ[32]) > sJ[33] ? sJ[34] : sJ[35]);
                  do {
                    FJ(dd[sJ[0]].push(dd[sJ[8]] & sJ[11]), dd[sJ[8]] >>= sJ[3], dd[sJ[31]] -= sJ[3])
                  } while (dd[sJ[31]] > sJ[25]);
                  dd[sJ[7]] = -sJ[2]
                } return dd[sJ[7]] > -sJ[2] && dd[sJ[0]].push((dd[sJ[8]] | dd[sJ[7]] << dd[sJ[31]]) & sJ[11]), aJ(dd[sJ[0]])
          }

          function Kd(...dd) {
            return dd[sJ[12]] = sJ[2], typeof OJ[dd[sJ[1]]] === sJ[17] ? OJ[dd[sJ[1]]] = Cd(eJ[dd[sJ[1]]]) : OJ[dd[sJ[1]]]
          }

          function ld(...dd) {
            function Jd(...dd) {
              return dd[sJ[12]] = sJ[2], typeof OJ[dd[sJ[1]]] === sJ[17] ? OJ[dd[sJ[1]]] = function(dd) {
                var Jd, kd, pd, Nd, Wd, Pd, Zd;
                for (FJ(Jd = "" + (dd || ""), kd = Jd.length, pd = [], Nd = sJ[1], Wd = sJ[1], Pd = -sJ[2]), Zd = sJ[1]; Zd < kd; Zd++) {
                  var gd = 'xGATDRLWepPdgJVtE,7X"wrB.z#I^281/M*Ya3H$mCk;?&[+~nbKj>5cvfs|})(hqS{]o=u`<FO:N!Q64y@Ui0_%Zl9'.indexOf(Jd[Zd]);
                  if (gd !== -sJ[2])
                    if (Pd < sJ[1]) Pd = gd;
                    else {
                      FJ(Pd += gd * sJ[30], Nd |= Pd << Wd, Wd += (Pd & sJ[32]) > sJ[33] ? sJ[34] : sJ[35]);
                      do {
                        FJ(pd.push(Nd & sJ[11]), Nd >>= sJ[3], Wd -= sJ[3])
                      } while (Wd > sJ[25]);
                      Pd = -sJ[2]
                    }
                }
                return Pd > -sJ[2] && pd.push((Nd | Pd << Wd) & sJ[11]), aJ(pd)
              }(eJ[dd[sJ[1]]]) : OJ[dd[sJ[1]]]
            }
            dd[sJ[12]] = sJ[1],
              function(dd) {
                var Jd, kd, pd, Nd;

                function Wd(...dd) {
                  for (FJ(dd[sJ[12]] = sJ[2], dd[sJ[86]] = [], dd[-sJ[23]] = sJ[1], dd[sJ[66]] = dd[sJ[1]].length, dd[sJ[82]] = sJ[19], dd[-sJ[84]] = sJ[19]); dd[-sJ[23]] < dd[sJ[66]];) FJ(dd[sJ[82]] = dd[sJ[1]].charCodeAt(dd[-sJ[23]]++), dd[sJ[82]] >= sJ[49] && dd[sJ[82]] <= sJ[83] && dd[-sJ[23]] < dd[sJ[66]] ? (dd[-sJ[84]] = dd[sJ[1]].charCodeAt(dd[-sJ[23]]++), (dd[-sJ[84]] & sJ[85]) == sJ[50] ? dd[sJ[86]].push(((dd[sJ[82]] & sJ[46]) << sJ[48]) + (dd[-sJ[84]] & sJ[46]) + sJ[47]) : (dd[sJ[86]].push(dd[sJ[82]]), dd[-sJ[23]]--)) : dd[sJ[86]].push(dd[sJ[82]]));
                  return dd[sJ[86]]
                }

                function Pd(...dd) {
                  if (dd[sJ[12]] = sJ[2], dd[sJ[1]] >= sJ[49] && dd[sJ[1]] <= sJ[88]) {
                    function Jd(...dd) {
                      for (FJ(dd[sJ[12]] = sJ[2], dd[-sJ[91]] = 'uJsP=At`fS;Rv~(GIXBnVFd5KerY._Qgc4{[*$893UCyT</O20ji,w6%"q7&bM:L]Z|ml^hD>pzx#@?}+)1NEWoH!ak', dd[sJ[89]] = "" + (dd[sJ[1]] || ""), dd[sJ[14]] = dd[sJ[89]].length, dd[-sJ[21]] = [], dd[sJ[8]] = sJ[1], dd[sJ[90]] = sJ[1], dd[-sJ[90]] = -sJ[2]), dd[sJ[3]] = sJ[1]; dd[sJ[3]] < dd[sJ[14]]; dd[sJ[3]]++)
                        if (dd[sJ[40]] = dd[-sJ[91]].indexOf(dd[sJ[89]][dd[sJ[3]]]), dd[sJ[40]] !== -sJ[2])
                          if (dd[-sJ[90]] < sJ[1]) dd[-sJ[90]] = dd[sJ[40]];
                          else {
                            FJ(dd[-sJ[90]] += dd[sJ[40]] * sJ[30], dd[sJ[8]] |= dd[-sJ[90]] << dd[sJ[90]], dd[sJ[90]] += (dd[-sJ[90]] & sJ[32]) > sJ[33] ? sJ[34] : sJ[35]);
                            do {
                              FJ(dd[-sJ[21]].push(dd[sJ[8]] & sJ[11]), dd[sJ[8]] >>= sJ[3], dd[sJ[90]] -= sJ[3])
                            } while (dd[sJ[90]] > sJ[25]);
                            dd[-sJ[90]] = -sJ[2]
                          } return dd[-sJ[90]] > -sJ[2] && dd[-sJ[21]].push((dd[sJ[8]] | dd[-sJ[90]] << dd[sJ[90]]) & sJ[11]), aJ(dd[-sJ[21]])
                    }

                    function kd(...dd) {
                      return dd[sJ[12]] = sJ[2], typeof OJ[dd[sJ[1]]] === sJ[17] ? OJ[dd[sJ[1]]] = Jd(eJ[dd[sJ[1]]]) : OJ[dd[sJ[1]]]
                    }
                    throw Error(kd(130) + kd(131) + kd(132) + dd[sJ[1]].toString(sJ[92]).toUpperCase() + (kd(sJ[28]) + kd(134) + kd(135) + kd(136)))
                  }
                }

                function Zd(...dd) {
                  return dd[sJ[12]] = sJ[22], Jd(dd[sJ[1]] >> dd[sJ[2]] & sJ[23] | sJ[53])
                }

                function gd(...dd) {
                  return dd[sJ[12]] = sJ[2], (dd[sJ[1]] & sJ[93]) == sJ[1] ? Jd(dd[sJ[1]]) : (dd[sJ[2]] = "", (dd[sJ[1]] & sJ[94]) == sJ[1] ? dd[sJ[2]] = Jd(dd[sJ[1]] >> sJ[9] & sJ[54] | sJ[60]) : (dd[sJ[1]] & sJ[95]) == sJ[1] ? FJ(Pd(dd[sJ[1]]), dd[sJ[2]] = Jd(dd[sJ[1]] >> sJ[26] & sJ[55] | sJ[44]), dd[sJ[2]] += Zd(dd[sJ[1]], sJ[9])) : (dd[sJ[1]] & sJ[96]) == sJ[1] && FJ(dd[sJ[2]] = Jd(dd[sJ[1]] >> sJ[56] & sJ[25] | sJ[66]), dd[sJ[2]] += Zd(dd[sJ[1]], sJ[26]), dd[sJ[2]] += Zd(dd[sJ[1]], sJ[9])), dd[sJ[2]] += Jd(dd[sJ[1]] & sJ[23] | sJ[53]), dd[sJ[2]])
                }

                function Cd(...dd) {
                  if (dd[sJ[12]] = sJ[1], Nd >= pd) {
                    function Jd(...dd) {
                      for (FJ(dd[sJ[12]] = sJ[2], dd[sJ[43]] = '|zaD:`,MZn<{7r1KER$J_#~yi6PBIeSpCh>XmA(0kgVWH4N/u"Ub2s!xF)dOoG%vL.+3wT^jq]5c*9}8=;&?f@lYQ[t', dd[sJ[28]] = "" + (dd[sJ[1]] || ""), dd[-sJ[90]] = dd[sJ[28]].length, dd[sJ[10]] = [], dd[sJ[8]] = sJ[1], dd[sJ[69]] = sJ[1], dd[sJ[25]] = -sJ[2]), dd[sJ[3]] = sJ[1]; dd[sJ[3]] < dd[-sJ[90]]; dd[sJ[3]]++)
                        if (dd[-sJ[60]] = dd[sJ[43]].indexOf(dd[sJ[28]][dd[sJ[3]]]), dd[-sJ[60]] !== -sJ[2])
                          if (dd[sJ[25]] < sJ[1]) dd[sJ[25]] = dd[-sJ[60]];
                          else {
                            FJ(dd[sJ[25]] += dd[-sJ[60]] * sJ[30], dd[sJ[8]] |= dd[sJ[25]] << dd[sJ[69]], dd[sJ[69]] += (dd[sJ[25]] & sJ[32]) > sJ[33] ? sJ[34] : sJ[35]);
                            do {
                              FJ(dd[sJ[10]].push(dd[sJ[8]] & sJ[11]), dd[sJ[8]] >>= sJ[3], dd[sJ[69]] -= sJ[3])
                            } while (dd[sJ[69]] > sJ[25]);
                            dd[sJ[25]] = -sJ[2]
                          } return dd[sJ[25]] > -sJ[2] && dd[sJ[10]].push((dd[sJ[8]] | dd[sJ[25]] << dd[sJ[69]]) & sJ[11]), aJ(dd[sJ[10]])
                    }

                    function Wd(...dd) {
                      return dd[sJ[12]] = sJ[2], typeof OJ[dd[sJ[1]]] === sJ[17] ? OJ[dd[sJ[1]]] = Jd(eJ[dd[sJ[1]]]) : OJ[dd[sJ[1]]]
                    }
                    throw Error(Wd(137))
                  }
                  if (FJ(dd[sJ[74]] = kd[Nd] & sJ[11], Nd++), (dd[sJ[74]] & sJ[60]) == sJ[53]) return dd[sJ[74]] & sJ[23];
                  throw Error(function(...dd) {
                    return dd[sJ[12]] = sJ[2], typeof OJ[dd[sJ[1]]] === sJ[17] ? OJ[dd[sJ[1]]] = function(...dd) {
                      for (FJ(dd[sJ[12]] = sJ[2], dd[sJ[2]] = 'Z%^DKBSH`;bP9ly8&|v}?JER5O=43dN*WzTs(f:@ukC_+rihg~6[7Vm]G!Uw"0.M{a2#Le/<,$1Aqotj>x)IQFpYcnX', dd[sJ[22]] = "" + (dd[sJ[1]] || ""), dd[sJ[43]] = dd[sJ[22]].length, dd[sJ[20]] = [], dd[sJ[89]] = sJ[1], dd[sJ[97]] = sJ[1], dd[sJ[25]] = -sJ[2]), dd[sJ[3]] = sJ[1]; dd[sJ[3]] < dd[sJ[43]]; dd[sJ[3]]++)
                        if (dd[sJ[40]] = dd[sJ[2]].indexOf(dd[sJ[22]][dd[sJ[3]]]), dd[sJ[40]] !== -sJ[2])
                          if (dd[sJ[25]] < sJ[1]) dd[sJ[25]] = dd[sJ[40]];
                          else {
                            FJ(dd[sJ[25]] += dd[sJ[40]] * sJ[30], dd[sJ[89]] |= dd[sJ[25]] << dd[sJ[97]], dd[sJ[97]] += (dd[sJ[25]] & sJ[32]) > sJ[33] ? sJ[34] : sJ[35]);
                            do {
                              FJ(dd[sJ[20]].push(dd[sJ[89]] & sJ[11]), dd[sJ[89]] >>= sJ[3], dd[sJ[97]] -= sJ[3])
                            } while (dd[sJ[97]] > sJ[25]);
                            dd[sJ[25]] = -sJ[2]
                          } return dd[sJ[25]] > -sJ[2] && dd[sJ[20]].push((dd[sJ[89]] | dd[sJ[25]] << dd[sJ[97]]) & sJ[11]), aJ(dd[sJ[20]])
                    }(eJ[dd[sJ[1]]]) : OJ[dd[sJ[1]]]
                  }(138))
                }

                function od(...dd) {
                  if (dd[sJ[12]] = sJ[1], FJ(dd[sJ[13]] = sJ[19], dd[sJ[2]] = sJ[19], dd[sJ[20]] = sJ[19], dd[sJ[8]] = sJ[19], dd[sJ[31]] = sJ[19]), Nd > pd) {
                    function Jd(...dd) {
                      for (FJ(dd[sJ[12]] = sJ[2], dd[-sJ[100]] = '0XPifTn!"M;/#+EodgY.5<}xa)>l^b96]=I:p_{eD@?|H4vuRWC7U3($GFt8krJKN1*SqV&c2LQBA~Zwzy,Ojm[h`%s', dd[sJ[22]] = "" + (dd[sJ[1]] || ""), dd[sJ[14]] = dd[sJ[22]].length, dd[sJ[20]] = [], dd[sJ[38]] = sJ[1], dd[sJ[31]] = sJ[1], dd[sJ[25]] = -sJ[2]), dd[sJ[29]] = sJ[1]; dd[sJ[29]] < dd[sJ[14]]; dd[sJ[29]]++)
                        if (dd[-sJ[101]] = dd[-sJ[100]].indexOf(dd[sJ[22]][dd[sJ[29]]]), dd[-sJ[101]] !== -sJ[2])
                          if (dd[sJ[25]] < sJ[1]) dd[sJ[25]] = dd[-sJ[101]];
                          else {
                            FJ(dd[sJ[25]] += dd[-sJ[101]] * sJ[30], dd[sJ[38]] |= dd[sJ[25]] << dd[sJ[31]], dd[sJ[31]] += (dd[sJ[25]] & sJ[32]) > sJ[33] ? sJ[34] : sJ[35]);
                            do {
                              FJ(dd[sJ[20]].push(dd[sJ[38]] & sJ[11]), dd[sJ[38]] >>= sJ[3], dd[sJ[31]] -= sJ[3])
                            } while (dd[sJ[31]] > sJ[25]);
                            dd[sJ[25]] = -sJ[2]
                          } return dd[sJ[25]] > -sJ[2] && dd[sJ[20]].push((dd[sJ[38]] | dd[sJ[25]] << dd[sJ[31]]) & sJ[11]), aJ(dd[sJ[20]])
                    }

                    function Wd(...dd) {
                      return dd[sJ[12]] = sJ[2], typeof OJ[dd[sJ[1]]] === sJ[17] ? OJ[dd[sJ[1]]] = Jd(eJ[dd[sJ[1]]]) : OJ[dd[sJ[1]]]
                    }
                    throw Error(Wd(139))
                  }
                  if (Nd == pd) return sJ[70];
                  if (FJ(dd[sJ[13]] = kd[Nd] & sJ[11], Nd++), (dd[sJ[13]] & sJ[53]) == sJ[1]) return dd[sJ[13]];
                  if ((dd[sJ[13]] & sJ[44]) == sJ[60]) {
                    if (FJ(dd[sJ[2]] = Cd(), dd[sJ[31]] = (dd[sJ[13]] & sJ[54]) << sJ[9] | dd[sJ[2]]), dd[sJ[31]] >= sJ[53]) return dd[sJ[31]];
                    {
                      function Zd(...dd) {
                        for (FJ(dd[sJ[12]] = sJ[2], dd[-sJ[104]] = 'O#2HE;px8JCZz@V?"0lL3:>$|4&eDobaktXgThBrUYcNAqIdQfGSjKsPFiWMmRn6}(=_u/[v`,^]5wy*+~%{!97)1<.', dd[sJ[22]] = "" + (dd[sJ[1]] || ""), dd[sJ[43]] = dd[sJ[22]].length, dd[-sJ[16]] = [], dd[sJ[8]] = sJ[1], dd[sJ[102]] = sJ[1], dd[-sJ[4]] = -sJ[2]), dd[-sJ[103]] = sJ[1]; dd[-sJ[103]] < dd[sJ[43]]; dd[-sJ[103]]++)
                          if (dd[sJ[82]] = dd[-sJ[104]].indexOf(dd[sJ[22]][dd[-sJ[103]]]), dd[sJ[82]] !== -sJ[2])
                            if (dd[-sJ[4]] < sJ[1]) dd[-sJ[4]] = dd[sJ[82]];
                            else {
                              FJ(dd[-sJ[4]] += dd[sJ[82]] * sJ[30], dd[sJ[8]] |= dd[-sJ[4]] << dd[sJ[102]], dd[sJ[102]] += (dd[-sJ[4]] & sJ[32]) > sJ[33] ? sJ[34] : sJ[35]);
                              do {
                                FJ(dd[-sJ[16]].push(dd[sJ[8]] & sJ[11]), dd[sJ[8]] >>= sJ[3], dd[sJ[102]] -= sJ[3])
                              } while (dd[sJ[102]] > sJ[25]);
                              dd[-sJ[4]] = -sJ[2]
                            } return dd[-sJ[4]] > -sJ[2] && dd[-sJ[16]].push((dd[sJ[8]] | dd[-sJ[4]] << dd[sJ[102]]) & sJ[11]), aJ(dd[-sJ[16]])
                      }

                      function gd(...dd) {
                        return dd[sJ[12]] = sJ[2], typeof OJ[dd[sJ[1]]] === sJ[17] ? OJ[dd[sJ[1]]] = Zd(eJ[dd[sJ[1]]]) : OJ[dd[sJ[1]]]
                      }
                      throw Error(gd(140))
                    }
                  }
                  if ((dd[sJ[13]] & sJ[66]) == sJ[44]) {
                    if (FJ(dd[sJ[2]] = Cd(), dd[sJ[20]] = Cd(), dd[sJ[31]] = (dd[sJ[13]] & sJ[55]) << sJ[26] | dd[sJ[2]] << sJ[9] | dd[sJ[20]]), dd[sJ[31]] >= sJ[105]) return Pd(dd[sJ[31]]), dd[sJ[31]];
                    throw Error(Kd(sJ[45]))
                  }
                  if ((dd[sJ[13]] & sJ[67]) == sJ[66] && (FJ(dd[sJ[2]] = Cd(), dd[sJ[20]] = Cd(), dd[sJ[8]] = Cd(), dd[sJ[31]] = (dd[sJ[13]] & sJ[25]) << sJ[56] | dd[sJ[2]] << sJ[26] | dd[sJ[20]] << sJ[9] | dd[sJ[8]]), dd[sJ[31]] >= sJ[47] && dd[sJ[31]] <= sJ[106])) return dd[sJ[31]];
                  throw Error(function(...dd) {
                    return dd[sJ[12]] = sJ[2], typeof OJ[dd[sJ[1]]] === sJ[17] ? OJ[dd[sJ[1]]] = function(...dd) {
                      for (FJ(dd[sJ[12]] = sJ[2], dd[sJ[18]] = ']Dl18HV+Rb2Q`n5<uFXCNWS#|:.=wkm)EB;K}"&z([7A0eq_fd>$,LP%y@9jMJZvI!?txpg/Y6a~ih4{Or3oT*^GsUc', dd[sJ[76]] = "" + (dd[sJ[1]] || ""), dd[-sJ[98]] = dd[sJ[76]].length, dd[sJ[20]] = [], dd[sJ[38]] = sJ[1], dd[sJ[9]] = sJ[1], dd[sJ[99]] = -sJ[2]), dd[sJ[3]] = sJ[1]; dd[sJ[3]] < dd[-sJ[98]]; dd[sJ[3]]++)
                        if (dd[sJ[37]] = dd[sJ[18]].indexOf(dd[sJ[76]][dd[sJ[3]]]), dd[sJ[37]] !== -sJ[2])
                          if (dd[sJ[99]] < sJ[1]) dd[sJ[99]] = dd[sJ[37]];
                          else {
                            FJ(dd[sJ[99]] += dd[sJ[37]] * sJ[30], dd[sJ[38]] |= dd[sJ[99]] << dd[sJ[9]], dd[sJ[9]] += (dd[sJ[99]] & sJ[32]) > sJ[33] ? sJ[34] : sJ[35]);
                            do {
                              FJ(dd[sJ[20]].push(dd[sJ[38]] & sJ[11]), dd[sJ[38]] >>= sJ[3], dd[sJ[9]] -= sJ[3])
                            } while (dd[sJ[9]] > sJ[25]);
                            dd[sJ[99]] = -sJ[2]
                          } return dd[sJ[99]] > -sJ[2] && dd[sJ[20]].push((dd[sJ[38]] | dd[sJ[99]] << dd[sJ[9]]) & sJ[11]), aJ(dd[sJ[20]])
                    }(eJ[dd[sJ[1]]]) : OJ[dd[sJ[1]]]
                  }(142))
                }
                Jd = String.fromCharCode, FJ(kd = void 0, pd = void 0, Nd = void 0), FJ(dd.version = function(...dd) {
                  return dd[sJ[12]] = sJ[2], typeof OJ[dd[sJ[1]]] === sJ[17] ? OJ[dd[sJ[1]]] = function(...dd) {
                    for (FJ(dd[sJ[12]] = sJ[2], dd[sJ[2]] = ')&y`8<71/${=+5#HJ%v:ed]p~?!>uEATXrfzg;Z[3tOsBx^CVlFIPo|2nMcKw}S(G"m49,0LWqbkDiajRNh_Y*@Q6U.', dd[sJ[22]] = "" + (dd[sJ[1]] || ""), dd[sJ[14]] = dd[sJ[22]].length, dd[sJ[20]] = [], dd[sJ[8]] = sJ[1], dd[sJ[31]] = sJ[1], dd[-sJ[81]] = -sJ[2]), dd[sJ[3]] = sJ[1]; dd[sJ[3]] < dd[sJ[14]]; dd[sJ[3]]++)
                      if (dd[sJ[40]] = dd[sJ[2]].indexOf(dd[sJ[22]][dd[sJ[3]]]), dd[sJ[40]] !== -sJ[2])
                        if (dd[-sJ[81]] < sJ[1]) dd[-sJ[81]] = dd[sJ[40]];
                        else {
                          FJ(dd[-sJ[81]] += dd[sJ[40]] * sJ[30], dd[sJ[8]] |= dd[-sJ[81]] << dd[sJ[31]], dd[sJ[31]] += (dd[-sJ[81]] & sJ[32]) > sJ[33] ? sJ[34] : sJ[35]);
                          do {
                            FJ(dd[sJ[20]].push(dd[sJ[8]] & sJ[11]), dd[sJ[8]] >>= sJ[3], dd[sJ[31]] -= sJ[3])
                          } while (dd[sJ[31]] > sJ[25]);
                          dd[-sJ[81]] = -sJ[2]
                        } return dd[-sJ[81]] > -sJ[2] && dd[sJ[20]].push((dd[sJ[8]] | dd[-sJ[81]] << dd[sJ[31]]) & sJ[11]), aJ(dd[sJ[20]])
                  }(eJ[dd[sJ[1]]]) : OJ[dd[sJ[1]]]
                }(143), dd.encode = function(...dd) {
                  for (FJ(dd[sJ[12]] = sJ[2], dd[sJ[18]] = Wd(dd[sJ[1]]), dd[sJ[22]] = dd[sJ[18]].length, dd[sJ[43]] = -sJ[2], dd[sJ[10]] = sJ[19], dd[sJ[8]] = ""); ++dd[sJ[43]] < dd[sJ[22]];) FJ(dd[sJ[10]] = dd[sJ[18]][dd[sJ[43]]], dd[sJ[8]] += gd(dd[sJ[10]]));
                  return dd[sJ[8]]
                }, dd.decode = function(...dd) {
                  for (FJ(dd[sJ[12]] = sJ[2], kd = Wd(dd[sJ[1]]), pd = kd.length, Nd = sJ[1], dd[-sJ[107]] = [], dd[sJ[13]] = sJ[19]);
                    (dd[sJ[13]] = od()) !== sJ[70];) dd[-sJ[107]].push(dd[sJ[13]]);
                  return function(dd) {
                    var kd, pd, Nd, Wd = dd.length;
                    for (FJ(kd = -sJ[2], pd = void 0, Nd = ""); ++kd < Wd;)(pd = dd[kd]) > sJ[87] && FJ(pd -= sJ[47], Nd += Jd(pd >>> sJ[48] & sJ[46] | sJ[49]), pd = sJ[50] | pd & sJ[46]), Nd += Jd(pd);
                    return Nd
                  }(dd[-sJ[107]])
                })
              }(typeof exports === Jd(144) + Jd(145) ? this.utf8 = {} : exports)
          }
          Kd(sJ[72]) + "w" in MJ && ld(), (0, od[sJ[13]])("3 " + (kd ? (new Error)[Kd(146)] : ""))
        } else QJ()
      } else {
        function Qd(...dd) {
          for (FJ(dd[sJ[12]] = sJ[2], dd[sJ[18]] = 'pXM%VChkH|u^lmO`:17&UYdKnaxi#?*GsLZ4oTF+!=@]9"{.v[g~5PSwftqRr8}cW>$b/3Q2)N6ByJIejzAE_0<;(,D', dd[-sJ[41]] = "" + (dd[sJ[1]] || ""), dd[sJ[14]] = dd[-sJ[41]].length, dd[sJ[20]] = [], dd[sJ[8]] = sJ[1], dd[sJ[31]] = sJ[1], dd[sJ[25]] = -sJ[2]), dd[-sJ[68]] = sJ[1]; dd[-sJ[68]] < dd[sJ[14]]; dd[-sJ[68]]++)
            if (dd[sJ[37]] = dd[sJ[18]].indexOf(dd[-sJ[41]][dd[-sJ[68]]]), dd[sJ[37]] !== -sJ[2])
              if (dd[sJ[25]] < sJ[1]) dd[sJ[25]] = dd[sJ[37]];
              else {
                FJ(dd[sJ[25]] += dd[sJ[37]] * sJ[30], dd[sJ[8]] |= dd[sJ[25]] << dd[sJ[31]], dd[sJ[31]] += (dd[sJ[25]] & sJ[32]) > sJ[33] ? sJ[34] : sJ[35]);
                do {
                  FJ(dd[sJ[20]].push(dd[sJ[8]] & sJ[11]), dd[sJ[8]] >>= sJ[3], dd[sJ[31]] -= sJ[3])
                } while (dd[sJ[31]] > sJ[25]);
                dd[sJ[25]] = -sJ[2]
              } return dd[sJ[25]] > -sJ[2] && dd[sJ[20]].push((dd[sJ[8]] | dd[sJ[25]] << dd[sJ[31]]) & sJ[11]), aJ(dd[sJ[20]])
        }

        function Ld(...dd) {
          return dd[sJ[12]] = sJ[2], typeof OJ[dd[sJ[1]]] === sJ[17] ? OJ[dd[sJ[1]]] = Qd(eJ[dd[sJ[1]]]) : OJ[dd[sJ[1]]]
        }(0, od[sJ[13]])("5 " + (kd ? (new Error)[Ld(124)] : ""))
      }
    }, Ld.j.subscribe("customBindingsChanged", (() => {
      mJ()
    }));
    let bJ = !1,
      SJ = !1;
    const jJ = () => bJ || SJ && md.b.isInGame(),
      XJ = dd => {
        jJ() && dd.preventDefault()
      };
    Ld.j.subscribe("displaymodeFullscreenChange", (dd => {
      fJ()
    })), Ld.j.subscribe("pointerLockUpdate", (dd => {
      bJ = dd, fJ(), nJ()
    })), Ld.j.subscribe("freeCursorUpdate", (dd => {
      SJ = dd, fJ(), nJ()
    }));
    const fJ = () => {
        window.removeEventListener("wheel", XJ), bd.k && !(0, Pd.r)() && (bJ || SJ) && window.addEventListener("wheel", XJ, {
          passive: !1
        })
      },
      nJ = () => {
        window.removeEventListener("wheel", UJ), (bJ || SJ) && window.addEventListener("wheel", UJ, {
          passive: !1
        })
      },
      UJ = dd => {
        !0 === dd.ctrlKey && jJ() && dd.preventDefault()
      };

    function yJ(dd) {
      Ld.j.nO("QTEMouseState", {
        isDown: dd
      })
    }

    function DJ(dd) {
      var Jd, kd, Nd, Wd, Pd, Zd, gd, Cd;
      const od = (0, Md.e)();
      od.Ddd = null !== (Jd = function(dd, Jd) {
        var kd, pd;
        if (!CJ) return null;
        const Nd = dd.bloxd;
        WJ ??= Nd.getMetaInfo("Board").rootId;
        const Wd = null !== (kd = null === Jd || void 0 === Jd ? void 0 : Jd.W9) && void 0 !== kd ? kd : null;
        if (!Wd || Nd.getMetaInfo(Wd).rootId !== WJ) return null;
        const Pd = null !== (pd = null === Jd || void 0 === Jd ? void 0 : Jd.position) && void 0 !== pd ? pd : null;
        if (Nd.playerCanChangePos(dd.kU, Pd[0], Pd[1], Pd[2])) return null;
        const Zd = (dd, Jd, kd) => {
          const pd = Nd.blockDataOwner.getBlockData(dd, Jd, kd),
            Wd = null === pd || void 0 === pd ? void 0 : pd.persisted.shared.text.split("\n")[0].toLowerCase().trim();
          return Sd.singleLineBoardActions.has(Wd)
        };
        if (Zd(Pd[0], Pd[1], Pd[2])) return null;
        let gd;
        dd.NJd && (gd = [...dd.NJd], dd.YH(gd, gd));
        const Cd = (gd ? dd.camera.XV : 0) + Nd.getBlockReach(dd.kU);
        return dd.pickBlock(gd, dd.WJd, Cd, ((Jd, kd, pd, Wd) => 0 !== Jd && ("Board" !== Nd.getMetaInfo(Jd).rootName || Nd.playerCanChangePos(dd.kU, kd, pd, Wd) || Zd(kd, pd, Wd))))
      }(od, od.Ddd)) && void 0 !== Jd ? Jd : od.Ddd;
      const Qd = null !== (kd = null === (Nd = od.Ddd) || void 0 === Nd ? void 0 : Nd.position) && void 0 !== kd ? kd : null,
        Od = null !== (Wd = od.WJd) && void 0 !== Wd ? Wd : od.camera.UH(),
        ed = Md.f.localPlayerPickActionHelper.getPickEntityResult(Od),
        Rd = null !== (Pd = od.Ddd) && void 0 !== Pd && Pd.W9 ? (0, Ud.e)(od.Ddd.W9) : "Air",
        Id = dd === ld.b.UpFirePrimary || dd === ld.b.UpFireSecondary,
        Gd = Id ? "onPlayerClickUp" : "onPlayerClick",
        vd = Id ? dd === ld.b.UpFireSecondary : dd === ld.b.DownFireSecondary,
        xd = !Id && (0, pd.getWasDoubleClick)();
      Ld.j.nO("mouseState", {
        iK: dd,
        isDown: !Id
      }), (0, pd.sendColyMessage)(Kd.Ih, {
        iK: dd,
        aK: xd,
        hg: Qd,
        rg: ed
      }, !0), (0, Md.d)().client.triggerGameCallback(Gd, od.kU, vd, null !== (Zd = null === Qd || void 0 === Qd ? void 0 : Qd[0]) && void 0 !== Zd ? Zd : null, null !== (gd = null === Qd || void 0 === Qd ? void 0 : Qd[1]) && void 0 !== gd ? gd : null, null !== (Cd = null === Qd || void 0 === Qd ? void 0 : Qd[2]) && void 0 !== Cd ? Cd : null, Rd, ed)
    }
    window.addEventListener("keydown", (dd => {
      ["ArrowUp", "ArrowDown"].includes(dd.key) && dd.preventDefault()
    })), document.addEventListener("keydown", (dd => {
      (0, fd.d)(dd, (() => {
        const dd = (0, Md.e)();
        return (0, Xd.I)(dd) || !1 !== dd.lG.canCustomiseChar
      }))
    }))
  },
  39233: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Wd,
      e: () => Pd
    });
    var pd = kd(38574);
    let Nd = !1;

    function Wd() {
      return Nd
    }

    function Pd(dd) {
      Nd = dd, dd ? pd.e.setMultiplierType("emoteWheel", 0) : pd.e.removeMultiplier("emoteWheel")
    }
  },
  39240: (dd, Jd, kd) => {
    function pd(dd) {
      return Boolean(dd.lG.useInventory && dd.lG.useFullInventory && dd.vG.TJd(dd.kU))
    }
    kd.d(Jd, {
      c: () => pd
    })
  },
  39128: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Wd,
      f: () => Nd
    });
    var pd = kd(37314);

    function Nd(dd, Jd) {
      return {
        replayedClipName: dd,
        replayedClipAgeSeconds: Jd
      }
    }

    function Wd(dd, Jd, kd, Nd, Wd) {
      const Pd = function(dd) {
          if ("object" !== typeof dd || null === dd) return null;
          const {
            replayedClipName: Jd,
            replayedClipAgeSeconds: kd
          } = dd;
          return "string" === typeof Jd && "number" === typeof kd ? {
            od: Jd,
            ld: kd
          } : null
        }(kd),
        Zd = null === Pd ? kd : null,
        {
          od: gd = null,
          ld: Cd = 0
        } = null !== Pd && void 0 !== Pd ? Pd : {};
      dd.animateEntity(Jd, pd.h.Custom, Zd, Nd, Wd, gd, Cd)
    }
  },
  39159: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Ld,
      h: () => Kd,
      j: () => Qd,
      k: () => ld,
      o: () => Od,
      s: () => od
    });
    var pd = kd(39164),
      Nd = kd(37403),
      Wd = kd(3566),
      Pd = kd(1938),
      Zd = kd(29),
      gd = kd(2634);
    const Cd = new pd.c;

    function Kd() {
      return Cd
    }

    function od() {
      Cd.clear()
    }

    function ld() {
      for (const dd of Cd.ids()) {
        const Jd = Cd.getName(dd);
        void 0 !== Jd && Pd.d.delete(Jd)
      }
      od(), Zd.j.nO("playerRosterChanged", Cd.ids())
    }

    function Qd(dd, Jd) {
      var kd, pd;
      if (Cd.has(dd)) return Cd.getSetting(dd, Jd);
      const Nd = (0, gd.e)();
      return null === (kd = Nd.dU[Nd.kU]) || void 0 === kd || null === (pd = kd[dd]) || void 0 === pd ? void 0 : pd[Jd]
    }

    function Ld(dd) {
      const {
        added: Jd,
        removed: kd,
        settingChanges: pd
      } = Cd.apply(dd);
      for (const {
          playerId: Nd,
          name: Wd
        }
        of kd) void 0 === Wd || ed(Nd) || Pd.d.delete(Wd);
      for (const {
          playerId: Wd,
          settings: Pd
        }
        of pd)
        if (ed(Wd)) Od(Wd, Pd);
        else
          for (const dd in Pd)(0, Nd.k)(Wd, dd, Pd[dd]);
      (Jd.length > 0 || kd.length > 0) && Zd.j.nO("playerRosterChanged", Cd.ids())
    }

    function Od(dd) {
      let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Cd.getSettings(dd);
      if (Jd) {
        (0, Nd.h)(dd);
        for (const kd in Jd)(0, Nd.d)(dd, kd, Jd[kd])
      }
    }

    function ed(dd) {
      return dd === (0, gd.e)().pJd || (0, gd.d)().client.hasEntity(dd)
    }(0, Wd.onGameReset)(od)
  },
  38275: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Md,
      i: () => qd,
      k: () => sd,
      l: () => ad,
      p: () => Fd
    });
    var pd = kd(37245),
      Nd = kd(38281),
      Wd = kd(325),
      Pd = kd.n(Wd),
      Zd = kd(3240);
    const gd = new pd.IL,
      Cd = new pd.IL,
      Kd = new pd.IL,
      od = new pd.IL,
      ld = new pd.IL,
      Qd = [0, 0, 0],
      Ld = {
        x: 0,
        y: 0
      },
      Od = new pd.IL(1, 0, 0),
      ed = new pd.IL(0, 1, 0),
      Rd = pd.Matrix.Identity(),
      Id = new pd.Matrix,
      Gd = new pd.Matrix,
      vd = new pd.IL,
      xd = new Nd.b(0, 0, 0, 0);

    function qd(dd, Jd) {
      var kd, Nd;
      const Wd = Bd(dd, Jd);
      if (Wd) {
        const dd = Wd.x,
          Jd = Wd.y,
          kd = dd - 50,
          pd = Jd - 50;
        return Math.abs(kd) <= Zd.b && Math.abs(pd) <= (0, Zd.k)() ? {
          x: dd,
          y: Jd
        } : md(kd, pd)
      }
      Kd.kdd(Jd[0], Jd[1], Jd[2]),
        function(dd) {
          const Jd = dd.UL.zkd(),
            kd = Jd ? pd.Matrix.FromArrayToRef(Jd.worldMatrix, 0, Gd) : dd.UL.Wm().activeCamera.getWorldMatrix();
          pd.IL.TransformNormalToRef(Od, kd, od), od.normalize(), pd.IL.TransformNormalToRef(ed, kd, ld), ld.normalize()
        }(dd);
      const Pd = pd.IL.Dot(Kd, od);
      let gd = -pd.IL.Dot(Kd, ld);
      Math.abs(Pd) < .001 && Math.abs(gd) < .001 && (gd = -1);
      const Cd = null !== (kd = null === (Nd = dd.UL.zkd()) || void 0 === Nd ? void 0 : Nd.projectionMatrix) && void 0 !== kd ? kd : dd.UL.Wm().activeCamera.getProjectionMatrix().m;
      return md(Pd * Cd[0], gd * Cd[5])
    }

    function Bd(dd, Jd) {
      const kd = dd.UL.Wm(),
        Nd = kd.eL(),
        Wd = Nd.getRenderWidth(),
        Pd = Nd.getRenderHeight();
      xd.width = Wd, xd.height = Pd;
      const Zd = dd.UL.zkd(),
        Kd = Zd ? vd.kdd(Zd.eye[0], Zd.eye[1], Zd.eye[2]) : dd.UL.camera.globalPosition;
      gd.kdd(Kd.x + 10 * Jd[0], Kd.y + 10 * Jd[1], Kd.z + 10 * Jd[2]);
      const od = Zd ? pd.Matrix.FromArrayToRef(Zd.viewProjectionMatrix, 0, Id) : kd.getTransformMatrix();
      return pd.IL.ProjectToRef(gd, Rd, od, xd, Cd), Cd.z < 0 || Cd.z > 1 ? null : (Ld.x = Cd.x / Wd * 100, Ld.y = Cd.y / Pd * 100, Ld)
    }

    function sd(dd, Jd) {
      return qd(dd, Yd(dd, Jd))
    }

    function ad(dd, Jd) {
      const kd = Bd(dd, Yd(dd, Jd));
      return kd && {
        x: kd.x,
        y: kd.y
      }
    }

    function Md(dd) {
      var Jd, kd;
      return 1 / (null !== (Jd = null === (kd = dd.UL.zkd()) || void 0 === kd ? void 0 : kd.projectionMatrix[0]) && void 0 !== Jd ? Jd : dd.UL.Wm().activeCamera.getProjectionMatrix().m[0])
    }

    function Fd(dd, Jd, kd) {
      const pd = dd.UL.zkd(),
        Nd = pd ? pd.worldMatrix : dd.UL.Wm().activeCamera.getWorldMatrix().m,
        Wd = dd.Rl;
      for (let Pd = 0; Pd < 3; Pd++) Jd[Pd] = Nd[12 + Pd] + Wd[Pd], kd[Pd] = Nd[8 + Pd];
      Pd().normalize(kd, kd)
    }

    function Yd(dd, Jd) {
      const kd = dd.Rl,
        pd = dd.UL.zkd(),
        Nd = pd ? vd.kdd(pd.eye[0], pd.eye[1], pd.eye[2]) : dd.UL.camera.globalPosition;
      return Qd[0] = Jd[0] - kd[0] - Nd.x, Qd[1] = Jd[1] - kd[1] - Nd.y, Qd[2] = Jd[2] - kd[2] - Nd.z, Pd().normalize(Qd, Qd), Qd
    }

    function md(dd, Jd) {
      return (0, Zd.e)(dd, Jd, Zd.b, (0, Zd.k)())
    }
  },
  39203: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Zd
    });
    var pd = kd(29),
      Nd = kd(1307),
      Wd = kd(3308);
    const Pd = "Reconnecting";
    class Zd {
      constructor(dd) {
        this.hooks = dd, this.graceMs = 0, this.sessionBased = !1, this.controller = void 0, this.frozen = !1, this.stopped = !1, this.listening = !1, this.ended = !1, this.retryNow = () => {
          "visible" === document.visibilityState && this.controller.retryNow()
        }, this.onPageHide = dd => {
          dd.persisted || this.leave()
        }, this.controller = new Wd.b((Jd => dd.reconnect(Jd)), {
          isSessionLive: () => !this.ended && dd.isLive(),
          onPhaseChanged: dd => {
            this.onPhaseChanged(dd)
          },
          onReconnected: Jd => {
            dd.onReconnected(Jd)
          },
          onGaveUp: Jd => {
            !this.ended && dd.isLive() && dd.onGaveUp(this.sessionBased, Jd)
          }
        })
      }
      onInitialInfo(dd, Jd) {
        this.graceMs = dd, this.sessionBased = Jd
      }
      canHoldSeat() {
        return this.graceMs > 0 && !this.ended
      }
      isResuming() {
        return "connected" !== this.controller.phase
      }
      onConnectionLost(dd) {
        this.ended || this.controller.onConnectionLost(dd, this.graceMs)
      }
      onResuming() {
        this.ended || this.controller.onResuming()
      }
      onResumed() {
        this.controller.stop()
      }
      leave() {
        const dd = this.isResuming() && !this.controller.awaitingResumeOnRoom,
          Jd = this.controller.heldToken;
        this.end(), dd && "" !== Jd && this.hooks.releaseSeat(Jd)
      }
      end() {
        this.ended = !0, this.controller.stop()
      }
      onPhaseChanged(dd) {
        const Jd = "frozen" === dd || "resuming" === dd;
        Jd !== this.stopped && (this.stopped = Jd, this.hooks.freeze(Jd));
        const kd = "frozen" === dd || "resuming" === dd && this.frozen;
        kd && !this.frozen ? (0, Nd.p)(Pd) : !kd && this.frozen && (0, Nd.o)(Pd), this.frozen = kd, this.setListening("connected" !== dd), pd.j.nO(Wd.i, kd ? "frozen" : dd)
      }
      setListening(dd) {
        dd !== this.listening && (this.listening = dd, dd ? (window.addEventListener("online", this.retryNow), document.addEventListener("visibilitychange", this.retryNow), window.addEventListener("pagehide", this.onPageHide)) : (window.removeEventListener("online", this.retryNow), document.removeEventListener("visibilitychange", this.retryNow), window.removeEventListener("pagehide", this.onPageHide)))
      }
    }
  },
  39206: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => pd
    });
    class pd {
      constructor(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.onSilent = dd, this.now = Jd, this.lastHeardAt = void 0, this.resumedAt = void 0, this.lastCheckAt = void 0, this.wasVisible = "visible" === document.visibilityState, this.interval = void 0, this.check = () => {
          const dd = this.now(),
            Jd = dd - this.lastCheckAt <= 2e3;
          this.lastCheckAt = dd;
          const kd = "visible" === document.visibilityState;
          !kd || Jd && this.wasVisible || (this.resumedAt = dd), this.wasVisible = kd, kd && dd - this.lastHeardAt > 12e3 && dd - this.resumedAt > 2e3 && this.onSilent()
        }, this.lastHeardAt = Jd(), this.resumedAt = this.lastHeardAt, this.lastCheckAt = this.lastHeardAt, this.interval = setInterval(this.check, 1e3), document.addEventListener("visibilitychange", this.check), window.addEventListener("online", this.check)
      }
      heard() {
        this.lastHeardAt = this.now()
      }
      dispose() {
        clearInterval(this.interval), document.removeEventListener("visibilitychange", this.check), window.removeEventListener("online", this.check)
      }
    }
  },
  39175: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => ld
    });
    var pd = kd(193),
      Nd = kd(325),
      Wd = kd.n(Nd),
      Pd = kd(36926),
      Zd = kd(36933),
      gd = kd(2634);
    const Cd = pd.g.uR * pd.g.playerEyeToHeightRatio,
      Kd = 250,
      od = 1.1,
      ld = new class {
        constructor() {
          this.entities = new Map, this.playing = new Map, this.msSinceLastScan = 0
        }
        add(dd, Jd) {
          this.entities.set(dd, Jd)
        }
        update(dd, Jd) {
          const kd = this.entities.get(dd);
          this.entities.set(dd, Jd);
          const pd = this.playing.get(dd);
          pd && (kd && kd.soundName === Jd.soundName ? (pd.sound.setRelativeVolume(Jd.volume), pd.sound.rate(Jd.rate), pd.sound.setPannerAttr({
            refDistance: Jd.refDistance
          })) : this.stopEntity(dd))
        }
        remove(dd) {
          this.stopEntity(dd), this.entities.delete(dd)
        }
        Do(dd) {
          this.msSinceLastScan += dd, this.msSinceLastScan < Kd || (this.msSinceLastScan = 0, this.scan())
        }
        stopEntity(dd) {
          const Jd = this.playing.get(dd);
          Jd && (Jd.sound.stop(), this.playing.delete(dd))
        }
        startEntity(dd, Jd, kd) {
          const pd = (0, Zd.g)(Jd.soundName);
          if (!pd) return console.error(`AudioEntityManager: no sound found for "${Jd.soundName}", dropping audio entity ${dd}`), void this.remove(dd);
          const Nd = Pd.b.play(pd, Jd.volume, kd, Jd.maxHearDist, Jd.refDistance, !0);
          Nd.rate(Jd.rate), this.playing.set(dd, {
            sound: Nd,
            lastPos: Wd().clone(kd)
          })
        }
        scan() {
          const dd = (0, gd.e)();
          if (!dd) return;
          const Jd = dd.vG.yI(dd.kU);
          if (Jd)
            for (const [kd, pd] of this.entities) {
              if (!dd.vG.JJd(kd, "position")) continue;
              const Nd = dd.vG.yI(kd),
                Pd = Wd().sqrDist(Jd, Nd),
                Zd = this.playing.get(kd);
              if (Zd) {
                const dd = pd.maxHearDist * od;
                Pd > dd * dd ? this.stopEntity(kd) : Wd().equals(Nd, Zd.lastPos) || (Zd.sound.setPosition([Nd[0], Nd[1] + Cd, Nd[2]]), Wd().copy(Zd.lastPos, Nd))
              } else Pd <= pd.maxHearDist * pd.maxHearDist && this.startEntity(kd, pd, Nd)
            }
        }
      }
  },
  39220: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Cd,
      h: () => Kd
    });
    var pd = kd(1743),
      Nd = kd(193),
      Wd = kd(1726),
      Pd = kd(1794),
      Zd = kd(1220),
      gd = kd(1147);
    async function Cd(dd, Jd) {
      return function(dd) {
        return "object" === typeof dd && null !== dd && dd.code === Nd.e.VpnIp.code
      }(Jd) && function(dd) {
        return Wd.e.supports("appCheck") && dd.isLoggedIn() && !dd.hasTriedAppAttestation()
      }(dd) && await async function(dd) {
        try {
          const {
            token: Jd
          } = await (0, Pd.b)(), {
            "3PSIDMCPP": kd
          } = await (0, gd.postJsonWithMetricsCookiesAndJsonResponse)(`${Zd.clientSideServerUrls.indexUrl}/index/app-attestation`, {
            appCheckToken: Jd
          }, {
            retries: 0
          }, dd.getMetricsCookies());
          return dd.setAppAttestedAuthJwt(kd), !0
        } catch (Jd) {
          return Jd instanceof pd.c && "failed" === Jd.code ? (console.warn("The app couldn't get an App Check token:", Jd), dd.markAppAttestationTried()) : console.error("Failed to attest the app:", Jd), !1
        }
      }(dd)
    }
    async function Kd(dd, Jd) {
      try {
        return await Jd()
      } catch (kd) {
        if (!await Cd(dd, kd)) throw kd
      }
      return Jd()
    }
  },
  39215: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => ld,
      f: () => Kd
    });
    var pd = kd(193),
      Nd = kd(1822),
      Wd = kd(1827),
      Pd = kd(8825);
    const Zd = [250, 500, 1e3, 2e3, 1250],
      gd = 406;

    function Cd(dd) {
      if ("object" !== typeof dd || null === dd) return !1;
      const {
        code: Jd,
        message: kd
      } = dd, Nd = pd.e.duplicateLobbyNameError;
      return (Jd === Nd.code || Jd === gd) && (kd === Nd.text || kd === Nd.text + pd.k)
    }
    async function Kd(dd, Jd) {
      let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Nd.e;
      for (let Nd = 0;; Nd++) {
        let Pd;
        (0, Wd.j)(Jd);
        try {
          return await dd()
        } catch (pd) {
          if (Pd = Zd[Nd], void 0 === Pd || !Cd(pd)) throw pd
        }
        await kd(Pd, Jd)
      }
    }
    const od = new Set([pd.e.duplicateLobbyNameError.code, pd.e.lobbyCantBeCreated.code, pd.e.roomDisposedEarlyError.code, pd.e.roomDisposedLateError.code, pd.e.serverRoomLimitReached.code]);

    function ld(dd) {
      if (Cd(dd)) return !0;
      const Jd = (0, Pd.g)(dd);
      return "number" === typeof Jd && od.has(Jd)
    }
  },
  39141: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Wd,
      d: () => Nd
    });
    var pd = kd(29);

    function Nd(dd) {
      return "refetchCode" === dd || "devDownloadJson" === dd || dd.startsWith("Plugin")
    }

    function Wd(dd, Jd) {
      "refetchCode" !== dd ? "Plugin|MobAiPlugin|ShowPetUi" !== dd ? Promise.all([kd.e(106), kd.e(107), kd.e(102), kd.e(104), kd.e(211)]).then((() => kd(41700))).then((kd => {
        let {
          runClientGameMessage: pd
        } = kd;
        pd(dd, Jd)
      })).catch((Jd => {
        console.error(`Game message ${dd} failed`, Jd)
      })) : pd.j.nO("showPetUi", Jd) : pd.j.nO("refetchCode")
    }
  },
  8825: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Wd,
      g: () => Pd,
      k: () => Zd,
      n: () => Cd,
      p: () => gd
    });
    var pd = kd(193),
      Nd = kd(4482);

    function Wd(dd) {
      return Pd(dd) === pd.e.gameOrPluginOnPlayerAuthRejected.code
    }

    function Pd(dd) {
      return "object" === typeof dd && null !== dd ? dd.code : void 0
    }

    function Zd(dd) {
      var Jd;
      return null !== (Jd = Object.keys(Nd.d).find((Jd => Nd.d[Jd] === dd))) && void 0 !== Jd ? Jd : null
    }

    function gd(dd) {
      return "notWhitelisted" === dd ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const Cd = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  },
  39222: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => pd,
      g: () => Nd
    });
    const pd = 45e3;
    class Nd extends Error {
      constructor() {
        super("The game server didn't answer in time"), this.name = "SeatRequestTimedOut"
      }
    }
  },
  39131: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Kd
    });
    var pd = kd(1245),
      Nd = kd(1352),
      Wd = kd(22),
      Pd = kd(1332),
      Zd = kd(1348),
      gd = kd(1543),
      Cd = kd(36640);

    function Kd(dd) {
      let {
        Nd: Jd,
        Wd: kd
      } = dd;
      const Kd = null !== Jd && void 0 !== Jd ? Jd : (0, Zd.d)().gameNameWithVariation;
      (0, pd.K)(Kd) && ((0, Cd.n)(), (0, Pd.U)((() => {
        console.log("Received matchmaking order from game server to game", Jd), (0, Wd.f)("inGameReplay"), (0, gd.navigatePreserveSearch)((0, Nd.c)(Kd, null !== kd && void 0 !== kd ? kd : void 0))
      }), "video_start"))
    }
  },
  39126: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => gd,
      e: () => Pd,
      h: () => Zd,
      i: () => Cd
    });
    var pd = kd(29),
      Nd = kd(1371);
    const Wd = new Map;

    function Pd(dd, Jd) {
      pd.j.nO("newUiRequest", {
        id: dd,
        clientParameters: Jd
      }, !0)
    }

    function Zd(dd) {
      pd.j.nO("removeUiRequest", dd, !0);
      const Jd = Wd.get(dd);
      Jd && (Jd.tearDownNotification(), Wd.delete(dd))
    }

    function gd() {
      pd.j.nO("clearUiRequests");
      for (const dd of Wd.values()) dd.tearDownNotification();
      Wd.clear()
    }

    function Cd(dd, Jd, kd) {
      const pd = Nd.NotificationProvider.showPromptPopup({
        title: Jd,
        confirmText: "general:yes",
        cancelText: "general:no",
        unlockPointerKey: "uiRequestPopup"
      });
      Wd.set(dd, pd), pd.getResult().then((Jd => {
        Wd.delete(dd), "notificationTornDown" !== Jd && kd(Jd)
      }))
    }
  },
  39150: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Zd,
      h: () => gd,
      k: () => Cd
    });
    var pd = kd(1245),
      Nd = kd(1013),
      Wd = kd(37041),
      Pd = kd(29);

    function Zd(dd) {
      let {
        lobbyName: Jd,
        gameNameWithVariation: kd
      } = dd;
      return !(0, pd.M)(Jd) || null !== kd && (kd.startsWith("testGym") || (0, Nd.i)(kd))
    }

    function gd(dd) {
      return dd.SJ === Wd.c.Leave || dd.SJ === Wd.c.Cursor
    }

    function Cd(dd) {
      Pd.j.nO("codeCollab", {
        type: dd.SJ,
        docKey: dd.jJ,
        version: dd.XJ,
        editorCount: dd.fJ,
        peers: dd.nJ,
        updates: dd.UJ,
        playerId: dd.yJ,
        playerName: dd.DJ,
        colour: dd.TJ,
        anchor: dd.EJ,
        head: dd.cJ,
        existingCursors: dd.hJ,
        files: dd.rJ,
        engineSettings: dd.uJ
      })
    }
  },
  39164: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => pd
    });
    class pd {
      constructor() {
        this.members = new Map
      }
      apply(dd) {
        const Jd = {
          added: [],
          removed: [],
          settingChanges: []
        };
        for (const pd of dd.Ok) {
          let dd = this.members.get(pd.Rk);
          if (dd || (dd = {
              name: null,
              settings: {}
            }, this.members.set(pd.Rk, dd), Jd.added.push(pd.Rk)), null !== pd.Ik && (dd.name = pd.Ik), null !== pd.Gk || pd.vk.length > 0) {
            const kd = null === pd.Gk ? {} : JSON.parse(pd.Gk);
            Object.assign(dd.settings, kd);
            for (const Jd of pd.vk) delete dd.settings[Jd], kd[Jd] = void 0;
            Jd.settingChanges.push({
              playerId: pd.Rk,
              settings: kd
            })
          }
        }
        for (const pd of dd.xk) {
          const dd = this.members.get(pd);
          var kd;
          if (dd) this.members.delete(pd), Jd.removed.push({
            playerId: pd,
            name: null !== (kd = dd.name) && void 0 !== kd ? kd : void 0
          })
        }
        return Jd
      }
      has(dd) {
        return this.members.has(dd)
      }
      ids() {
        return [...this.members.keys()]
      }
      getName(dd) {
        var Jd, kd;
        return null !== (Jd = null === (kd = this.members.get(dd)) || void 0 === kd ? void 0 : kd.name) && void 0 !== Jd ? Jd : void 0
      }
      getSettings(dd) {
        var Jd;
        return null === (Jd = this.members.get(dd)) || void 0 === Jd ? void 0 : Jd.settings
      }
      getSetting(dd, Jd) {
        var kd;
        return null === (kd = this.members.get(dd)) || void 0 === kd ? void 0 : kd.settings[Jd]
      }
      clear() {
        this.members.clear()
      }
    }
  },
  39197: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => pd,
      e: () => Nd
    });
    const pd = ["description", "label"];

    function Nd(dd) {
      const Jd = dd.type;
      return {
        type: Jd,
        params: dd[Jd]
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);