export const id = 155;
export const ids = [155];
export const modules = {
  38836: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Qu,
      c: () => mu
    });
    var Eu = yu(34);
    let Ku = !1;

    function Qu() {
      return Ku
    }

    function mu(uu) {
      Ku !== uu && (Ku = uu, Eu.k.Op("replayViewer|videoExportChanged"))
    }
  },
  38710: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Qu
    });
    var Eu = yu(34),
      Ku = yu(1878);

    function Qu(uu) {
      let {
        taskId: Ru,
        progress: yu
      } = uu;
      const Eu = Ku.b.get("_tasks");
      null !== Eu && void 0 !== Eu && Eu[Ru] && Ku.b.apply({
        _tasks: {
          ...Eu,
          [Ru]: {
            ...Eu[Ru],
            progress: yu
          }
        }
      })
    }
    Eu.k.subscribe("clientTaskProgress", (uu => {
      Qu(uu)
    }))
  },
  38847: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => pu,
      d: () => Tu,
      e: () => Su
    });
    var Eu = yu(2707);
    const Ku = 0,
      Qu = 2,
      mu = 3,
      Ju = 4;
    class Nu {
      constructor(uu, Ru) {
        this.width = uu, this.Nr = Ru, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(uu * Ru)
      }
      push(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const yu = this.data.subarray(this.next * this.width, (this.next + 1) * this.width);
        for (let Eu = 0; Eu < this.width; Eu++) yu[Eu] = uu[Ru + Eu];
        return this.next = (this.next + 1) % this.Nr, this.size = Math.min(this.size + 1, this.Nr), yu
      }
      lines() {
        const uu = [],
          Ru = (this.next - this.size + this.Nr) % this.Nr;
        for (let yu = 0; yu < this.size; yu++) {
          const Eu = (Ru + yu) % this.Nr * this.width;
          uu.push(Array.from(this.data.subarray(Eu, Eu + this.width)).join(","))
        }
        return uu
      }
    }

    function Xu(uu) {
      return Number.isFinite(uu) ? String(Math.round(10 * uu) / 10) : String(uu)
    }

    function Vu(uu) {
      return Number.isFinite(uu) ? uu.toFixed(1) : String(uu)
    }
    class ru {
      constructor() {
        this.frames = 0, this.looked = 0, this.idle = 0, this.KF = 0, this.pastLimit = 0, this.lockSkips = 0, this.NT = 0, this.lost = 0, this.dropped = 0, this.longFrames = 0, this.dtMin = 1 / 0, this.dtMax = 0, this.dtSum = 0, this.raw = [0, 0], this.turned = [0, 0], this.peakRate = 0, this.events = 0, this.eventMax = 0, this.bigEvents = 0, this.outliers = 0, this.eventLines = 0, this.suppressed = 0
      }
    }
    class Bu {
      constructor() {
        var uu = this;
        this.tally = new ru, this.records = new Nu(10, 3600), this.events = new Nu(4, 12e3), this.event = new Float64Array(4), this.take = null, this.client = "js", this.started = !1, this.record = function(Ru) {
          let yu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          const [Eu, Nu, ru, Bu, xu, Su, pu, Tu, Wu, ju] = uu.records.push(Ru, yu), Hu = uu.tally;
          switch (Hu.frames++, pu) {
            case Ku:
              return void Hu.idle++;
            case Ju:
              return void Hu.NT++;
            case mu:
              return Hu.lockSkips++, void(0 === ru && 0 === Bu || uu.outlier(`lock skip dropped raw (${Xu(ru)}, ${Xu(Bu)}) at ${Vu(Eu)} ms`))
          }
          Hu.looked++, Number.isFinite(Nu) && (Hu.dtMin = Math.min(Hu.dtMin, Nu), Hu.dtMax = Math.max(Hu.dtMax, Nu), Hu.dtSum += Nu, Nu > 0 && (Hu.peakRate = Math.max(Hu.peakRate, Math.hypot(xu, Su) / Nu))), Hu.raw[0] += ru, Hu.raw[1] += Bu, Hu.turned[0] += xu, Hu.turned[1] += Su;
          const du = Math.abs(ru) > ju || Math.abs(Bu) > ju,
            bu = `raw (${Xu(ru)}, ${Xu(Bu)}) over ${Vu(Nu)} ms, limit ${Xu(ju)}, filter v (${Tu.toFixed(3)}, ${Wu.toFixed(3)}) px/ms, at ${Vu(Eu)} ms`;
          pu === Qu ? (Hu.KF++, uu.outlier(`spike put right: ${bu} -> turned (${Xu(xu)}, ${Xu(Su)})`)) : du ? (Hu.pastLimit++, uu.outlier(`kept past limit: ${bu}`)) : Nu > 50 && (Hu.longFrames++, uu.outlier(`long frame: ${bu}, turned in full`))
        }, this.onMouseMove = uu => {
          const Ru = this.tally,
            {
              movementX: yu,
              movementY: Eu
            } = uu;
          Ru.events++;
          const Ku = Math.max(Math.abs(yu), Math.abs(Eu));
          Ru.eventMax = Math.max(Ru.eventMax, Ku);
          const Qu = null !== document.pointerLockElement,
            mu = this.event;
          mu[0] = uu.timeStamp, mu[1] = yu, mu[2] = Eu, mu[3] = Qu ? 1 : 0, this.events.push(mu), Ku >= 200 && (Ru.bigEvents++, this.eventOutlier(`big mousemove (${yu}, ${Eu}) at ${Vu(uu.timeStamp)} ms, lock ${Qu?"jJ":"free"}`))
        }, this.onLockChange = () => {
          const uu = document.pointerLockElement;
          (0, Eu.i)("look", `pointer lock ${uu?`gained (${uu.tagName.toLowerCase()})`:"lost"} at ${Vu(performance.now())} ms`)
        }, this.onLockError = () => {
          (0, Eu.i)("look", `pointer lock request failed at ${Vu(performance.now())} ms`)
        }, this.onVisibility = () => {
          (0, Eu.i)("look", `page ${document.visibilityState} at ${Vu(performance.now())} ms`)
        }, this.flush = () => {
          this.takeRecords();
          const uu = this.tally;
          if (this.tally = new ru, 0 === uu.events && 0 === uu.raw[0] && 0 === uu.raw[1] && 0 === uu.lockSkips && 0 === uu.KF && 0 === uu.dropped) return;
          const Ru = uu.looked > 0 ? uu.dtSum / uu.looked : NaN,
            yu = [`${uu.frames} frames (${uu.looked} looked, ${uu.idle} idle${"wasm"===this.client?`, ${uu.NT} carried`:""})`, `dt avg ${Vu(Ru)} min ${Vu(uu.dtMin)} max ${Vu(uu.dtMax)}, ${uu.longFrames} long`, `${uu.events} mousemoves (max ${Xu(uu.eventMax)} px, ${uu.bigEvents} big)`, `raw (${Xu(uu.raw[0])}, ${Xu(uu.raw[1])}) turned (${Xu(uu.turned[0])}, ${Xu(uu.turned[1])})`, `peak ${uu.peakRate.toFixed(2)} px/ms`, `put right ${uu.KF}, past limit ${uu.pastLimit}, lock skips ${uu.lockSkips}`, "lock " + (document.pointerLockElement ? "jJ" : "free")];
          uu.dropped > 0 && yu.push(`${uu.dropped} doubled spike copies dropped`), uu.lost > 0 && yu.push(`${uu.lost} records lost`), uu.suppressed > 0 && yu.push(`${uu.suppressed} outlier lines not shown`), (0, Eu.i)("look", `1s: ${yu.join("; ")}`)
        }, this.dump = () => [`look records (${this.client}): nowMs,dtMs,rawX,rawY,turnedX,turnedY,outcome,vX,vY,limit`, ...this.records.lines(), "mousemove events: timeStamp,movementX,movementY,locked", ...this.events.lines()].join("\n")
      }
      start(uu, Ru) {
        this.client = uu, this.take = Ru;
        const {
          screen: yu
        } = window;
        (0, Eu.i)("look", `start: ${uu} client, dpr ${window.devicePixelRatio}, screen ${yu.width}x${yu.height}, pointer lock ${document.pointerLockElement?"jJ":"free"}`), this.started || (this.started = !0, window.addEventListener("mousemove", this.onMouseMove, {
          capture: !0,
          passive: !0
        }), document.addEventListener("pointerlockchange", this.onLockChange), document.addEventListener("pointerlockerror", this.onLockError), document.addEventListener("visibilitychange", this.onVisibility), setInterval(this.flush, 1e3), (0, Eu.g)("look", this.dump))
      }
      outlier(uu) {
        const Ru = this.tally;
        Ru.outliers >= 20 ? Ru.suppressed++ : (Ru.outliers++, (0, Eu.i)("look", uu))
      }
      eventOutlier(uu) {
        const Ru = this.tally;
        Ru.eventLines >= 10 ? Ru.suppressed++ : (Ru.eventLines++, (0, Eu.i)("look", uu))
      }
      takeRecords() {
        var uu;
        const Ru = null === (uu = this.take) || void 0 === uu ? void 0 : uu.call(this);
        if (Ru && Ru.length >= 2) {
          this.tally.lost += Ru[0], this.tally.dropped += Ru[1];
          for (let uu = 2; uu + 10 <= Ru.length; uu += 10) this.record(Ru, uu)
        }
      }
      droppedCopy() {
        this.tally.dropped++
      }
      endTake() {
        this.takeRecords(), this.take = null
      }
    }
    let xu = null;

    function Su(uu) {
      let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return xu ??= new Bu, xu.start(uu, Ru), xu.record
    }

    function pu() {
      var uu;
      null === (uu = xu) || void 0 === uu || uu.endTake()
    }

    function Tu() {
      var uu;
      null === (uu = xu) || void 0 === uu || uu.droppedCopy()
    }
  },
  38706: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => ZR,
      g: () => FR,
      i: () => wR
    });
    var Eu = yu(3490),
      Ku = yu(174),
      Qu = yu(212),
      mu = yu(614),
      Ju = yu(47),
      Nu = yu(2632),
      Xu = yu(3574),
      Vu = yu(3548),
      ru = yu(1199);
    const Bu = new WeakMap;
    class xu {
      constructor(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
          hXu: !0
        };
        this.callbacks = Ru, this.options = yu, this.Zyu = void 0, this.sessionId = void 0, this.gC = [], this.PXu = !1, this.VS = !1, this.iXu = void 0, this.lC = 0, this.FKu = 0, this.YXu = (uu, Ru) => {
          if (this.VS) return;
          const yu = Number(uu);
          this.PXu ? this.oXu(yu, Ru) : this.gC.push({
            id: yu,
            payload: Ru
          })
        }, this.dispose = () => {
          this.VS || (this.VS = !0, Bu.delete(this), this.gC.length = 0, this.iXu())
        }, this.Zyu = uu, this.sessionId = uu.sessionId, Bu.set(this, []), this.iXu = this.qXu()
      }
      OXu(uu) {
        this.iXu(), this.Zyu = uu, this.sessionId = uu.sessionId, this.lC = 0, this.FKu = 0, this.iXu = this.qXu()
      }
      get sC() {
        return this.FKu
      }
      qXu() {
        const uu = this.Zyu.WH("*", this.YXu);
        return this.options.hXu && this.Zyu.jH(this.dispose), uu
      }
      oXu(uu, Ru) {
        try {
          (0, Xu.hc)(uu) && (Ru = (0, Xu.d)(uu, Vu.XS.from(Ru)));
          const yu = Bu.get(this)[uu];
          if ("function" !== typeof yu) {
            if (this.callbacks.vXu) return void this.callbacks.vXu(uu, Ru);
            throw new Error(`No onMessage handler registered for message id ${uu}`)
          }
          yu(Ru)
        } catch (yu) {
          this.callbacks.aXu(`Error in onMessage ${uu} with payload ${JSON.stringify(Ru)}`, yu)
        } finally {
          this.lC++
        }
      }
      fXu() {
        for (const {
            id: uu,
            payload: Ru
          }
          of this.gC) {
          if (this.VS) break;
          this.oXu(uu, Ru)
        }
        this.gC.length = 0
      }
      wyu() {
        return this.VS
      }
      uVu() {
        if (this.PXu || this.VS) throw new Error("Trying to getOnMessageRegistrationHandler after registration finished");
        return {
          WH: (uu, Ru) => {
            if (this.PXu || this.VS) throw new Error("Trying to call onMessage after registration finished");
            this.WH(uu, Ru)
          },
          finishRegistration: () => {
            if (this.VS) throw new Error("Cannot finish message registration after disposal");
            this.PXu = !0, this.fXu()
          }
        }
      }
      WH(uu, Ru) {
        var yu, Eu;
        null === (yu = (Eu = this.callbacks).RVu) || void 0 === yu || yu.call(Eu);
        const Ku = Bu.get(this);
        for (; uu > Ku.length;) Ku[Ku.length] = null;
        Ku[uu] = Ru
      }
      send(uu, Ru) {
        this.yVu(), (0, ru.F)(Ru) ? this.Zyu.Rk(uu, Ru) : this.Zyu.send(uu, Ru)
      }
      yVu() {
        var uu, Ru;
        (this.FKu++, 5 === Su++) && (null === (uu = (Ru = this.callbacks).RVu) || void 0 === uu || uu.call(Ru), Su = 0)
      }
      rW() {
        this.dispose(), this.Zyu.rW()
      }
      leave() {
        this.dispose(), this.Zyu.leave()
      }
    }
    let Su = 0;
    var pu = yu(3506);
    class Tu extends xu {
      constructor(uu) {
        super(uu, {
          RVu: () => {
            (0, Ju.n)(!0) && (0, Eu.nC)()
          },
          aXu: (uu, Ru) => {
            var yu;
            null === (yu = (0, Nu.h)()) || void 0 === yu || yu.Tp(uu, Ru)
          }
        }, {
          hXu: !1
        }), (0, pu.i)(uu)
      }
      zC(uu, Ru) {
        return !!(0, pu.n)((0, pu.e)(), this.Zyu, uu, Ru) && (this.yVu(), !0)
      }
      OXu(uu) {
        this.EVu(), super.OXu(uu), (0, pu.i)(uu)
      }
      rW() {
        super.rW(), this.EVu()
      }
      EVu() {
        this.Zyu.pW.Ox.pD = void 0
      }
    }
    var Wu = yu(34),
      ju = yu(1878),
      Hu = yu(1661),
      du = yu(36316);

    function bu(uu, Ru, yu, Eu, Ku) {
      let Qu = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (!uu.nH.zRu(uu.ZI)) return console.log("Got resync inven but don't have inven component"), void Ru.acknowledge(Eu);
      Qu && console.error("Had to sync inven"), Ru.Quu(Eu, Ku) && yu.Op("chestToggleFromServer", !1, !0), yu.Op("syncedInvenFromServer")
    }
    var Cu = yu(38710),
      ku = yu(38714),
      eu = yu(37793),
      Au = yu(37569),
      Du = yu(610),
      Mu = yu(38176);

    function Iu(uu, Ru, yu) {
      const Eu = function(uu) {
          const Ru = new Int32Array(uu.length * Mu.h);
          return uu.forEach(((uu, yu) => {
            const Eu = yu * Mu.h;
            if (4 === uu.length) {
              const [yu, Ku, Qu, mu] = uu;
              Ru.set([yu, Ku, Qu, yu, Ku, Qu, mu], Eu)
            } else {
              const [yu, Ku, Qu, mu, Ju, Nu, Xu] = uu;
              Ru.set([yu, Qu, Ju, Ku, mu, Nu, Xu], Eu)
            }
          })), Ru
        }(yu),
        Ku = (Ru, yu, Eu, Ku) => {
          uu.setBlockNoMulti(Ru, yu, Eu, Ku, !0)
        };
      uu.client.gameRecorder.isCapturing() ? (0, Mu.Jb)(Eu, (0, Mu.Fb)(Eu), Ku) : uu.Yr.Fr.cL(Eu, {
        qL: Ku,
        isHookId: Ru => uu.blockChangeHasHooks(Ru),
        watched: () => function(uu, Ru, yu) {
          const Eu = [],
            Ku = (uu, Ru, yu) => {
              Eu.push(uu, Ru, yu)
            },
            Qu = new Set;
          for (let mu = 0; mu < yu.length; mu += Mu.h)
            for (let Ru = (0, Du.N)(yu[mu]); Ru <= (0, Du.N)(yu[mu + 3]); Ru++)
              for (let Eu = (0, Du.N)(yu[mu + 1]); Eu <= (0, Du.N)(yu[mu + 4]); Eu++)
                for (let Ju = (0, Du.N)(yu[mu + 2]); Ju <= (0, Du.N)(yu[mu + 5]); Ju++) {
                  const yu = `${Ru}|${Eu}|${Ju}`;
                  Qu.has(yu) || (Qu.add(yu), uu.blockDataOwner.forEachDataCell(Ru, Eu, Ju, Ku))
                }
          return Ru.forEachCell(Ku), Int32Array.from(Eu)
        }(uu, Ru, Eu)
      }), uu.Yr.iuu()
    }
    var Gu = yu(36884),
      Uu = yu(38721),
      nu = yu(38723),
      su = yu(1001),
      tu = yu(1887);
    var lu = yu(4271);

    function gu(uu) {
      const Ru = uu.Fr;
      let yu = 0,
        Ku = -1,
        mu = -1 / 0,
        Ju = null,
        Nu = !0;
      const Vu = () => {
        if (++yu % 10 !== 0) return;
        const Vu = (0, Eu.getLastReceivedPacketId)();
        if (Vu <= Ku) return;
        const [ru, Bu, xu] = uu.nH.mH(uu.ZI), Su = ! function(uu) {
          var Ru;
          let yu = null === (Ru = uu.nH.kyu(uu.ZI)) || void 0 === Ru ? void 0 : Ru.yS;
          if (void 0 === yu) return !1;
          const Eu = new Set;
          for (; void 0 !== yu && !Eu.has(yu);) {
            var Ku;
            Eu.add(yu);
            const Ru = uu.nH.getState(yu, "smoothToServerPos"),
              Qu = Array.isArray(Ru) ? null : null === Ru || void 0 === Ru ? void 0 : Ru.serverPosition;
            if (Qu) {
              const Ru = uu.nH.mH(yu);
              if (Math.abs(Ru[0] - Qu[0]) > 10 || Math.abs(Ru[1] - Qu[1]) > 10 || Math.abs(Ru[2] - Qu[2]) > 10) return !0
            }
            yu = null === (Ku = uu.nH.kyu(yu)) || void 0 === Ku ? void 0 : Ku.yS
          }
          return !1
        }(uu) && function(uu, Ru, yu, Eu) {
          const Ku = Qu.f.jS;
          for (let Qu = 0; Qu < uu.length; Qu++) {
            const mu = uu[Qu];
            if (!(0, lu.g)(Ru, yu, Eu, mu[0] * Ku, mu[1] * Ku, mu[2] * Ku)) return !1
          }
          return !0
        }(Ru.qp.rS, ru, Bu, xu), pu = null === Ju || Math.abs(ru - Ju[0]) > 8 || Math.abs(Bu - Ju[1]) > 8 || Math.abs(xu - Ju[2]) > 8, Tu = !Nu || pu || performance.now() - mu >= 1e4;
        Nu = Su, Su && Tu && (Ku = Vu, mu = performance.now(), Ju = [ru, Bu, xu], (0, Eu.sendColyMessage)(Xu.kg, {
          XX: Vu
        }))
      };
      return uu.on("sr", Vu), () => {
        uu.off("sr", Vu)
      }
    }
    var cu = yu(36556),
      Lu = yu(352),
      zu = yu.n(Lu),
      Fu = yu(6268),
      wu = yu(37826),
      Zu = yu(37541),
      hu = yu(37516),
      Pu = yu(4291),
      iu = yu(37846),
      Yu = yu(37672),
      ou = yu(37127),
      qu = yu(37418),
      Ou = yu(38732),
      vu = yu(36545),
      au = yu(36549),
      fu = yu(38737),
      uR = yu(38746),
      RR = yu(3465),
      yR = yu(1467),
      ER = yu(2623),
      KR = yu(2719),
      QR = yu(38014),
      mR = yu(36809),
      JR = yu(4546),
      NR = yu(38792),
      XR = yu(37838),
      VR = yu(4037),
      rR = yu(36882),
      BR = yu(36960),
      xR = yu(37848),
      SR = yu(38752),
      pR = yu(38767),
      TR = yu(37125);
    class WR {
      constructor(uu, Ru, yu, Eu) {
        this.gameNameWithVariation = uu, this.Yr = yu, this.connectionResume = Eu, this.stateReplicationHandler = void 0, this.stopChunkReports = () => {}, this.replayResume = null, this.stateReplicationHandler = new pR.e(Ru, this.Yr)
      }
      setupStateReplicationHandlers() {
        this.stateReplicationHandler.setup(), (0, Eu.onGameResetOnce)((() => {
          this.stateReplicationHandler.dispose()
        }))
      }
      OXu(uu) {
        this.stateReplicationHandler.dispose(), this.stateReplicationHandler = new pR.e(uu, this.Yr), this.stateReplicationHandler.setup()
      }
      clearBlockRules() {
        const uu = this.Yr.Fr;
        uu.nyu = new Set, uu.lyu = new Set, uu.syu = new Set, uu.gyu = new Set, uu.tyu = [], uu.cyu = [], uu.Ql = new Set, uu.UQ = [], uu.Vl = []
      }
      clearUiRequestsAndQTEs() {
        JR.d.reset(), (0, ku.b)()
      }
      startChunkReports() {
        const uu = function(uu) {
            let Ru = null,
              yu = -1 / 0,
              Ku = null;
            const Qu = () => {
                Ku = null;
                const Qu = Math.ceil(uu.Lk[0]),
                  mu = Math.ceil(uu.Lk[1]);
                Ru && Ru[0] === Qu && Ru[1] === mu || (Ru = [Qu, mu], yu = performance.now(), (0, Eu.sendColyMessage)(Xu.jg, {
                  fQ: Qu,
                  um: mu
                }))
              },
              mu = () => {
                null === Ku && (Ku = setTimeout(Qu, Math.max(0, yu + 250 - performance.now())))
              };
            return Qu(), uu.on("addRemoveDistanceChanged", mu), () => {
              uu.off("addRemoveDistanceChanged", mu), null !== Ku && (clearTimeout(Ku), Ku = null)
            }
          }(this.Yr.Fr),
          Ru = gu(this.Yr);
        this.stopChunkReports = () => {
          uu(), Ru()
        }
      }
      restartChunkStreaming() {
        (0, qu.k)(this.Yr, (0, Nu.e)().recentChunkEdits.chunksEditedSince(this.connectionResume.getDroppedAt() - Ou.e)), this.startChunkReports()
      }
      setupOnMessageListeners(uu, Ru) {
        const yu = this.Yr,
          Ku = this.gameNameWithVariation;
        uu.WH(Xu.qc, (uu => {
          let {
            RE: Ru,
            yE: Eu,
            EE: Ku,
            KE: Qu,
            QE: mu,
            mE: Ju,
            JE: Nu,
            NE: Xu,
            XE: Vu
          } = uu;
          if (!yu.nH.RRu(Ru, "itemState")) return void(0, Zu.h)(yu, Ru, [mu, Ju, Nu], Eu, {
            amount: Ku,
            attributes: JSON.parse(Qu),
            NE: Xu,
            size: Vu
          });
          const ru = yu.nH.getState(Ru, "itemState");
          ru.amount = Ku, ru.NE = Xu, ru.creationTime = Date.now(), (0, hu.setServerPosition)(yu.nH.getState(Ru, "smoothToServerPos"), mu, Ju, Nu)
        })), uu.WH(Xu.kb, (uu => {
          (0, Gu.e)(yu).setCantPickUp(uu, !0), yu.nH.RRu(uu, "itemState") && (yu.nH.getState(uu, "itemState").NE = !0)
        })), uu.WH(Xu.Nd, (uu => {
          (0, Gu.e)(yu).setCantPickUp(uu, !1), yu.nH.RRu(uu, "itemState") && (yu.nH.getState(uu, "itemState").NE = !1)
        })), uu.WH(Xu.Oc, (uu => {
          ju.b.applyNewClientOptions(uu)
        })), uu.WH(Xu.Rc, (uu => {
          let {
            eId: Ru,
            settings: Eu
          } = uu;
          (0, BR.h)(Ru);
          for (const yu in Eu)(0, BR.e)(Ru, yu, Eu[yu]);
          if ("canSee" in Eu && yu.nH.RRu(Ru, "hidingMeshManager")) {
            const uu = yu.nH.getState(Ru, "hidingMeshManager");
            uu.canSee = (0, xR.c)("canSee", Eu.canSee), uu._forceUpdate = !0
          }
        })), uu.WH(Xu.Ze, (uu => {
          let {
            Qy: Ru,
            my: Ku,
            Jy: Qu,
            Ny: mu
          } = uu;
          const Ju = [Ku, Qu, mu];
          yu.nH.setPosition(yu.ZI, Ju), (0, Eu.sendColyMessage)(Xu.Gg, {
            mV: Ru,
            JV: Pu.c
          }), Wu.k.Op("localPlayerTeleported", {
            pos: Ju,
            isCorrection: !1
          })
        })), uu.WH(Xu.ad, (uu => {
          let {
            VK: Ru,
            rK: yu,
            BK: Eu,
            xK: Ku
          } = uu;
          this.stateReplicationHandler.setUpIfQueued(Ru);
          const Qu = [yu, Eu, Ku];
          Wu.k.Op(`otherPlayerTeleported|${Ru}`, {
            pos: Qu
          })
        })), uu.WH(Xu.qd, (uu => {
          let {
            sK: Ru,
            tK: Ku,
            lK: Qu,
            gK: mu,
            cK: Ju,
            LK: Nu,
            zK: Vu,
            wK: ru,
            FK: Bu,
            PK: xu
          } = uu;
          const Su = [Ku, Qu, mu];
          yu.nH.setPosition(yu.ZI, Su);
          const pu = yu.nH.WRu(yu.ZI),
            Tu = yu.nH.Al(yu.ZI);
          zu().set(Tu.Qs, 0, 0, 0), zu().set(Tu.Xs, 0, 0, 0), zu().set(Tu.JT, Ju, Nu, Vu), Tu.Ws(), pu._flying = null !== xu, xu ? (pu.flyAccel.iK = xu.iK, pu.flyAccel.YK = xu.YK) : pu.flyAccel.reset(), ru && pu.movementType === Fu.m.GLIDING && (pu.ZK = ru.ZK, zu().copy(pu.hK, ru.hK)), (0, Eu.sendColyMessage)(Xu.Gg, {
            mV: Ru,
            JV: Pu.c
          }), Wu.k.Op("localPlayerTeleported", {
            pos: Su,
            isCorrection: !0
          })
        }));

        function Qu() {
          return yu.nH.FRu(yu.ZI)
        }
        uu.WH(Xu.ub, (uu => {
          let {
            chatMsgId: Ru,
            content: yu,
            chatterEId: Eu
          } = uu;
          Wu.k.Op("chat", {
            serverChatMsgId: Ru,
            content: yu,
            chatterEId: Eu
          }, !0)
        })), uu.WH(Xu.fd, (uu => {
          ER.c.onReceiveColyseusPing(uu)
        })), uu.WH(Xu.ve, (uu => {
          let {
            key: Ru,
            value: yu
          } = uu;
          (0, Hu.setCookie)(Ku, Ru, yu)
        })), uu.WH(Xu.ye, (uu => {
          Wu.k.Op("setDiscordReportKey", uu)
        })), (0, Eu.onGameResetOnce)((() => {
          this.stopChunkReports()
        })), uu.WH(Xu.kc, (Ru => {
          const {
            LR: Ku,
            zR: Qu
          } = Ru;
          if ((0, Eu.setAdjustment)(Qu), this.connectionResume.onInitialInfo(Ru.FR, Ru.wR), Eu.offlineInputReplay.tC(Ru.ZR), this.connectionResume.isResuming()) {
            console.log("Resumed the connection as eId", Ku);
            try {
              null === Ru.hR && (0, Nu.e)().client.inventoryPrediction.dropPending(), this.stopChunkReports(), this.clearBlockRules(), ju.b.apply({
                shopInfo: null,
                _shopVersion: tu.b
              });
              const Eu = yu.nH.wRu(yu.ZI);
              Eu.Gy && (Eu.chestClosed(), Wu.k.Op("chestToggleFromServer", !1, !0)), this.clearUiRequestsAndQTEs(), Wu.k.Op("initInfoReceived", uu)
            } finally {
              const uu = null === Ru.hR ? null : {
                sync: null,
                endSeq: null
              };
              this.replayResume = uu, this.connectionResume.onResumeInitialInfo(Ru.hR, (() => {
                uu.endSeq = (0, Nu.e)().client.inventoryPrediction.lastActionSeq
              })), null === uu && this.restartChunkStreaming()
            }
          } else console.log("Local client is eId", Ku), Wu.k.Op("loadingScreenState", "loadingPage:loadingWorld"), yu.ERu = Ku, yu.nH.RRu(yu.ZI, yu.nH.names.entityName) && yu.nH.mI(yu.ZI, yu.nH.names.entityName), (0, Nu.e)().setEntityName(yu.ERu, (0, Nu.e)().getRawEntityName(yu.ZI)), yu.MI[yu.ERu] = {}, yu.nH.yI(yu.ZI, yu.nH.names.entityName), Wu.k.Op("initInfoReceived", uu), this.startChunkReports(), mu.client.onServerConnectionFinalised()
        })), uu.WH(Xu.fe, (() => {
          this.connectionResume.isResuming() ? this.connectionResume.onResumed((() => {
            const uu = this.replayResume;
            if (this.replayResume = null, !uu) return;
            this.restartChunkStreaming();
            const {
              inventoryPrediction: Ru
            } = (0, Nu.e)().client, {
              sync: Ku
            } = uu, Qu = new Set(Eu.offlineInputReplay.takeDroppedActions());
            if (Ku) {
              var mu;
              const Eu = null !== (mu = uu.endSeq) && void 0 !== mu ? mu : Ru.lastActionSeq;
              Ru.forget((uu => uu > Ku.ly && uu <= Eu || Qu.has(uu))), bu(yu, Ru, Wu.k, Ku.ly, Ku.load)
            } else Ru.dropPending(), Ru.askForSnapshot()
          })) : console.warn("ResumeComplete arrived without a resume")
        })), uu.WH(Xu.af, (uu => {
          Wu.k.Op("TopRightHelper", uu, !0)
        })), uu.WH(Xu.vd, (uu => {
          let {
            type: Ru,
            location1: yu,
            location2: Eu,
            location3: Ku,
            score: Qu
          } = uu;
          (0, KR.w)({
            type: Ru,
            location1: yu,
            location2: Eu,
            location3: Ku,
            score: Qu
          })
        })), uu.WH(Xu.be, (uu => {
          let {
            type: Ru,
            resourceType: yu,
            amount: Eu,
            category: Ku,
            itemName: Qu
          } = uu;
          (0, KR.y)({
            type: Ru,
            resourceType: yu,
            amount: Eu,
            category: Ku,
            itemName: Qu
          })
        })), uu.WH(Xu.X, (uu => {
          yu.Fr.nyu.add(uu), yu.Fr.lyu.delete(uu)
        })), uu.WH(Xu.eb, (uu => {
          yu.Fr.lyu.add(uu), yu.Fr.nyu.delete(uu)
        })), uu.WH(Xu.Od, (uu => {
          yu.Fr.lyu.delete(uu), yu.Fr.nyu.delete(uu)
        })), uu.WH(Xu.ab, (uu => {
          yu.Fr.syu.add(uu), yu.Fr.gyu.delete(uu)
        })), uu.WH(Xu.ib, (uu => {
          yu.Fr.gyu.add(uu), yu.Fr.syu.delete(uu)
        })), uu.WH(Xu.Td, (uu => {
          yu.Fr.gyu.delete(uu), yu.Fr.syu.delete(uu)
        })), uu.WH(Xu.Y, (uu => {
          (0, ru.gb)(uu, yu.Fr.cyu), (0, ru.gb)(uu, yu.Fr.tyu), yu.Fr.tyu.push(uu)
        })), uu.WH(Xu.gb, (uu => {
          (0, ru.gb)(uu, yu.Fr.tyu), (0, ru.gb)(uu, yu.Fr.cyu), yu.Fr.cyu.push(uu)
        })), uu.WH(Xu.Qd, (uu => {
          (0, ru.gb)(uu, yu.Fr.tyu), (0, ru.gb)(uu, yu.Fr.cyu)
        })), uu.WH(Xu.sf, (uu => {
          let {
            Yy: Ru,
            qy: Eu
          } = uu;
          Eu ? yu.Fr.Ql.delete(Ru) : yu.Fr.Ql.add(Ru)
        })), uu.WH(Xu.pf, (uu => {
          let {
            UQ: Ru,
            nQ: Eu
          } = uu;
          mu.updateWalkThroughRect(yu.ZI, Ru, Eu)
        })), (0, Eu.onGameResetOnce)((() => {
          this.clearBlockRules()
        })), uu.WH(Xu.Ve, (uu => {
          (0, Cu.c)(uu)
        })), uu.WH(Xu.cc, (uu => {
          eu.c.applyServerUpdate(uu)
        })), uu.WH(Xu.nb, (uu => {
          mu.applyServerBlocks((() => {
            ! function(uu, Ru) {
              for (const {
                  sQ: yu,
                  tQ: Eu
                }
                of Ru) {
                const Ru = Au.c[Eu];
                if (Ru) {
                  const {
                    compX: Eu,
                    compY: Ku,
                    compZ: Qu,
                    mainMultiblock: mu
                  } = Ru;
                  uu.sA(yu[0] - Eu, yu[1] - Ku, yu[2] - Qu, mu)
                }
              }
              for (const {
                  sQ: yu,
                  tQ: Eu,
                  lQ: Ku
                }
                of Ru) uu.setBlockNoMulti(yu[0], yu[1], yu[2], Eu, !0), uu.blockDataOwner.setBlockData(yu[0], yu[1], yu[2], null === Ku ? void 0 : JSON.parse(Ku)), uu.blockAdded(yu[0], yu[1], yu[2], Eu)
            }(mu, uu)
          })), Wu.k.Op("changeBlockFail", uu), mu.client.triggerGameCallback("onChangeBlockFail", uu), Wu.k.Op("EditBoard", {
            pos: null
          }), Wu.k.Op("EditCodeBlock", {
            pos: null,
            canChangePos: null
          })
        })), uu.WH(Xu.dd, (uu => {
          let {
            pickUpItems: Ru,
            pickUpAckSeq: yu
          } = uu;
          for (const {
              name: Eu,
              amount: Ku,
              attributes: mu
            }
            of Ru) Qu().pickUpItem({
            name: Eu,
            amount: Ku,
            typeObj: Zu.u[Eu],
            attributes: mu
          });
          (0, Nu.e)().client.inventoryPrediction.serverChangeApplied(yu)
        })), uu.WH(Xu.ze, (uu => {
          let {
            index: Ru,
            name: Eu,
            amount: Ku,
            attributes: Qu,
            setSlotAckSeq: mu
          } = uu;
          const Ju = yu.nH.wRu(yu.ZI);
          (Ru < Ju.playerInventory.numSlots || Ju.Gy || Ju.inCreative) && Ju.setItemSlot(Ru, Eu, Ku, Qu), (0, Nu.e)().client.inventoryPrediction.serverChangeApplied(mu)
        })), uu.WH(Xu.Se, (uu => {
          let {
            My: Ru,
            ty: Eu,
            ly: Ku
          } = uu;
          const {
            inventoryPrediction: Qu
          } = (0, Nu.e)().client, mu = () => {
            yu.nH.wRu(yu.ZI).loadFromString(Ru)
          };
          this.replayResume && (this.replayResume.sync = {
            ly: Ku,
            load: mu
          }), bu(yu, Qu, Wu.k, Ku, mu, Eu)
        })), uu.WH(Xu.oc, (uu => {
          (0, Nu.e)().client.inventoryPrediction.acknowledge(uu)
        })), uu.WH(Xu.D, (uu => {
          let {
            QQ: Ru,
            mQ: yu,
            JQ: Eu,
            NQ: Ku
          } = uu;
          (0, Nu.e)().client.itemDropPrediction.onActionItemDrops(Ru, yu, Eu, Ku)
        })), uu.WH(Xu.Ib, (uu => {
          Qu().clearInventory(), (0, Nu.e)().client.inventoryPrediction.serverChangeApplied(uu)
        })), uu.WH(Xu.yc, (uu => {
          let {
            leaveEventType: Ru,
            category: yu,
            subCategory: Eu,
            value: Ku
          } = uu;
          (0, KR.I)({
            leaveEventType: Ru,
            category: yu,
            subCategory: Eu,
            value: Ku
          })
        })), uu.WH(Xu.Nb, (uu => {
          let {
            cat1: Ru,
            cat2: yu,
            cat3: Eu,
            value: Ku
          } = uu;
          (0, KR.r)({
            cat1: Ru,
            cat2: yu,
            cat3: Eu,
            value: Ku
          })
        }));
        const mu = (0, Nu.e)();
        uu.WH(Xu.Lb, (uu => {
          mu.applyServerBlocks((() => {
            Iu(mu, eu.c, uu)
          }))
        })), uu.WH(Xu.Ae, (uu => {
          Wu.k.Op("setSelectedInventorySlotI", uu, !0)
        })), uu.WH(Xu.wc, (uu => {
          let {
            category: Ru,
            timeframe: yu,
            data: Eu
          } = uu;
          Wu.k.Op("leaderboardResponse", {
            category: Ru,
            timeframe: yu,
            data: Eu
          })
        })), uu.WH(Xu.T, (uu => {
          let {
            RQ: Ru,
            yQ: yu
          } = uu;
          this.stateReplicationHandler.setUpIfQueued(Ru), Ru = (0, cu.b)(Ru), (0, Nu.e)().client.gameRecorder.recordBulletShot(Ru, yu), Wu.k.Op(`bulletShot|${Ru}`, {
            bulletDirections: yu
          })
        })), uu.WH(Xu.fc, (uu => {
          let {
            vy: Ru,
            uE: yu
          } = uu;
          Wu.k.Op("damagedByOtherPlayer", {
            vy: Ru,
            direction: yu
          }, !0)
        })), uu.WH(Xu.md, (uu => {
          Wu.k.Op("playerKilled", uu, !0), (0, Nu.e)().client.gameRecorder.recordPlayerKilled(uu.deadEId, uu.killerEId, uu.withItem, uu.killstreak)
        })), uu.WH(Xu.Rb, (uu => {
          Wu.k.Op("customKillfeed", uu, !0), (0, Nu.e)().client.gameRecorder.recordCustomKillfeed(uu.killer, uu.victim, uu.withItem)
        })), uu.WH(Xu.wd, (uu => {
          let {
            Ey: Ru,
            Ky: Eu
          } = uu;
          this.stateReplicationHandler.setUpIfQueued(Ru);
          const Ku = yu.nH.Xyu(Ru);
          null !== Ku && void 0 !== Ku && Ku.isGun() && Ku.reload(Date.now(), Eu)
        })), uu.WH(Xu.Pe, (() => {
          Wu.k.Op("showShopTutorial", null, !0)
        })), uu.WH(Xu.sd, (uu => {
          Wu.k.Op("progressBarUpdate", uu, !0)
        })), uu.WH(Xu.nc, (uu => {
          Wu.k.Op("middleScreenBarInitiate", {
            duration: uu.VE,
            rE: uu.rE,
            horizBarRemOffset: uu.xE
          }, !0)
        })), uu.WH(Xu.Gd, (() => {
          Wu.k.Op("middleScreenBarRemove", !0)
        })), uu.WH(Xu.ie, (uu => {
          let {
            Ry: Ru,
            yy: Eu
          } = uu;
          const Ku = Eu ? (0, XR.c)(yu, Eu) : void 0;
          Wu.k.Op("sendHitmarker", {
            Ry: Ru,
            screenPos: Ku
          }, !0)
        })), uu.WH(Xu.xe, (uu => {
          let {
            id: Ru,
            position: yu,
            style: Eu,
            aK: Ku,
            uQ: Qu
          } = uu;
          Wu.k.Op("setDirectionArrow", {
            id: Ru,
            position: yu,
            style: Eu,
            text: (0, Xu.r)(Ku),
            uQ: Qu
          }, !0)
        })), uu.WH(Xu.Eb, (uu => {
          let {
            id: Ru
          } = uu;
          Wu.k.Op("clearDirectionArrow", {
            id: Ru
          }, !0)
        })), uu.WH(Xu.G, (uu => {
          let {
            XQ: Ru,
            VQ: Eu,
            animationScript: Ku,
            rQ: Qu,
            BQ: mu,
            xQ: Ju,
            SQ: Xu
          } = uu;
          Ru = (0, cu.b)(Ru);
          const Vu = null === Ku && null !== Ju ? (0, Uu.e)(Ju, Xu) : Ku;
          (0, Nu.e)().client.gameRecorder.recordAnimateEntity(Ru, Eu, Vu, Qu, mu), (0, Gu.e)(yu).animations.animateEntity(Ru, Eu, Ku, Qu, mu, Ju, Xu), null !== Ku || Ru === yu.ZI && Eu === rR.f.Emote && (0, Nu.e)().client.cameraController.endTemporaryThirdPerson()
        })), uu.WH(Xu.hf, (uu => {
          let {
            wy: Ru,
            Zy: yu
          } = uu;
          if (mu.Iw(Ru[0], Ru[1], Ru[2])) {
            const uu = (0, Nu.e)().OW(Ru[0], Ru[1], Ru[2]);
            (0, Nu.e)().updateMailboxContents(Ru[0], Ru[1], Ru[2], uu, yu)
          }
        })), uu.WH(Xu.yb, (uu => {
          let {
            gQ: Ru,
            cQ: Eu,
            LQ: Ku,
            zQ: Qu,
            FQ: mu,
            wQ: Ju,
            ZQ: Xu,
            hQ: Vu
          } = uu;
          const ru = yu.nH.wRu(yu.ZI);
          if (Ju) {
            const {
              Iy: uu,
              ly: Ru
            } = Vu;
            return (0, Nu.e)().client.inventoryPrediction.Quu(Ru, (() => {
              ru.chestRefreshed(Eu, Ku, Qu, Xu, uu)
            })) && Wu.k.Op("chestToggleFromServer", !1, !0), void Wu.k.Op("chestRefreshedFromServer")
          }(Ru || ru.Gy) && (Ru ? (ru.chestOpened(Eu, Ku, Qu, mu, Xu), null !== mu && (0, Nu.e)().client.ironChestPasskeyCache.onChestOpened(Qu, mu)) : ru.chestClosed(), Wu.k.Op("chestToggleFromServer", Ru, !0))
        })), uu.WH(Xu.Ub, (uu => {
          let {
            craftingRecipeItemName: Ru,
            recipesForItem: Eu
          } = uu;
          Ru ? mu.craftingManager.editRecipesForPlayer(yu.ZI, Ru, Eu) : mu.craftingManager.resetAllPlayerRecipes(yu.ZI), Wu.k.Op("craftingRecipesEdited", {
            itemName: Ru,
            recipesForItem: Eu
          })
        })), uu.WH(Xu.Ee, (uu => {
          let {
            vehicleEId: Ru,
            overrides: yu
          } = uu;
          (0, Nu.e)().applyRiddenVehicleSettingOverrides(Ru, yu)
        })), uu.WH(Xu.of, (uu => {
          let {
            SR: Ru,
            pR: Eu,
            TR: Ku
          } = uu;
          const Qu = yu.nH.WRu(yu.ZI).physicsState.type === Fu.n.SLEEPING && Ru === Fu.n.DEFAULT;
          (0, Nu.e)().updatePositionAndPhysics(yu.ZI, {
            type: Ru,
            tier: Eu
          }, !0, Ku), Qu && (0, Nu.e)().updateHeldVehicleStatus()
        })), uu.WH(Xu.qb, (uu => {
          let {
            qK: Ru,
            vK: Eu
          } = uu;
          yu.nH.LRu(yu.ZI).setPose(Ru, Eu)
        })), uu.WH(Xu.he, (uu => {
          (0, SR.d)(uu)
        })), uu.WH(Xu.kd, (uu => {
          for (const Ru of uu)(0, iu.B)(Ru);
          Wu.k.Op("playerCosmeticsUpdated", uu, !0)
        })), uu.WH(Xu.J, (uu => {
          for (const Ru of uu)(0, mR.d)(yu, Ru)
        })), uu.WH(Xu.Dc, (uu => {
          let {
            TK: Ru,
            WK: Eu,
            HK: Ku,
            dK: Qu,
            bK: Ju,
            CK: Nu,
            kK: Xu
          } = uu;
          this.stateReplicationHandler.setUpIfQueued(Ru), Ru = (0, cu.b)(Ru);
          const Vu = yu.nH.yyu(Ru);
          if (Vu && (Vu.lastHurtTime = performance.now()), (0, wu.playRigHurt)(yu, Ru, Nu), Wu.k.Op("lifeformHurt", {
              eId: Ru,
              kK: Xu
            }), Eu) {
            const uu = (0, XR.c)(yu, Eu.yy);
            Wu.k.Op("yourAttackHit", {
              Ry: Qu,
              screenPos: uu,
              hitSelf: Ru === yu.ZI
            })
          }
          Ru === yu.ZI && (mu.shakePlayerCamera(Ru, Ju / 40, 200), Wu.k.Op("closeShopOnDamaged", null), Wu.k.Op("damagedByOtherPlayer", {
            vy: null,
            direction: Nu,
            bK: Ju
          }, !0));
          const ru = yu.nH.mH(Ru);
          if (ru && (Ku || Qu)) {
            const uu = [ru[0], ru[1] + 1, ru[2]];
            Ku && (0, Yu.k)(yu, Yu.t, uu, 15), Qu && (0, Yu.k)(yu, Yu.n, uu, 10)
          }
        })), uu.WH(Xu.zc, (uu => {
          let {
            nR: Ru,
            sR: Eu,
            tR: Ku
          } = uu;
          (0, Gu.e)(yu).setHealthFrac((0, cu.b)(Ru), Ku), Wu.k.Op("lifeformHealthChanged", {
            eId: (0, cu.b)(Ru),
            sR: Eu,
            tR: Ku
          })
        })), uu.WH(Xu.M, (uu => {
          let {
            EQ: Ru,
            KQ: Eu
          } = uu;
          (0, Nu.e)().playerAttacked(yu.ZI, Ru, Eu)
        })), uu.WH(Xu.tc, (uu => {
          (0, Nu.e)().client.leaveGameUnwanted({
            reason: uu,
            requiresRefresh: !1,
            canReconnect: !1,
            automaticallyReconnect: !1
          }), (0, yR.navigatePreserveSearch)("/")
        })), uu.WH(Xu.Fd, (uu => {
          let {
            lR: Ru,
            gR: yu,
            cR: Eu
          } = uu;
          Qu().removeItemName(Ru, yu), (0, Nu.e)().client.inventoryPrediction.serverChangeApplied(Eu)
        })), uu.WH(Xu.oe, (uu => {
          const {
            ep: Ru,
            dyu: Eu
          } = (0, ou.i)([uu[0], uu[1], uu[2]]);
          TR.e.setLookDirection(yu, Ru, Eu), (0, qu.s)(Ru, Eu);
          const Ku = yu.nH.LRu(yu.ZI);
          Ku && (Ku.heading = Ru)
        })), uu.WH(Xu.re, (uu => {
          mu.client.cameraController.setCameraZoom(uu)
        })), uu.WH(Xu.Le, (uu => {
          let {
            oR: Ru,
            qR: Eu
          } = uu;
          mu.shakePlayerCamera(yu.ZI, Ru, Eu)
        })), uu.WH(Xu.Mb, (uu => {
          (0, RR.onCosmeticPackGranted)(uu)
        })), uu.WH(Xu.ke, (uu => {
          Wu.k.Op("serverUpdating", Date.now() + uu, !0)
        })), uu.WH(Xu.Mc, nu.e), uu.WH(Xu.Wc, (uu => {
          let {
            id: Ru,
            Mu: yu
          } = uu;
          const {
            type: Ku,
            params: Qu
          } = (0, NR.d)(yu), mu = {
            ...Qu
          };
          for (const Eu of NR.b) Eu in mu && mu[Eu] && (mu[Eu] = (0, Xu.r)(mu[Eu]));
          JR.d.queueQTE(Ru, Ku, mu).getResult().then((uu => {
            "boolean" === typeof uu && (0, Eu.sendColyMessage)(Xu.gi, {
              qteId: Ru,
              qteResponse: uu
            })
          }))
        })), uu.WH(Xu.Jd, (uu => {
          JR.d.cancelQTE(uu)
        })), (0, Eu.onGameResetOnce)((() => {
          JR.d.reset()
        })), uu.WH(Xu.Zc, (uu => {
          let {
            id: Ru,
            clientParameters: yu
          } = uu;
          (0, ku.f)(Ru, yu)
        })), uu.WH(Xu.Ld, (uu => {
          (0, ku.i)(uu)
        })), uu.WH(Xu.ef, (uu => {
          let {
            text: Ru,
            id: yu
          } = uu;
          (0, ku.m)(yu, Ru, (uu => {
            (0, Eu.sendColyMessage)(Xu.uj, {
              dJ: yu,
              bJ: uu,
              CJ: 5
            })
          }))
        })), uu.WH(Xu.Wb, (uu => {
          let {
            mR: Ru,
            JR: yu,
            NR: Eu,
            XR: Ku,
            VR: Qu,
            rR: mu
          } = uu;
          Ru = (0, cu.b)(Ru), (0, Nu.e)().client.updateEffect(Ru, yu, {
            displayName: Eu,
            icon: Ku,
            duration: Qu,
            level: mu
          })
        })), uu.WH(Xu.Ad, (uu => {
          let {
            mR: Ru,
            JR: yu
          } = uu;
          Ru = (0, cu.b)(Ru), (0, Nu.e)().client.removeEffect(Ru, yu)
        })), uu.WH(Xu.rc, (uu => {
          yu.nH.LRu(yu.ZI).jumpMultiplier.setMultiplierType("jumpEffectAmount", uu)
        })), uu.WH(Xu.cf, (uu => {
          Wu.k.Op("ttbEffectMultiplier", uu)
        })), (0, Eu.onGameResetOnce)((() => {
          yu.nH.LRu(yu.ZI).jumpMultiplier.setMultiplierType("jumpEffectAmount", 1)
        })), uu.WH(Xu.Uc, (uu => {
          (0, Yu.m)(yu, (0, ru.p)(uu))
        })), uu.WH(Xu.Vc, (uu => {
          VR.d[uu.oK] ? (0, Yu.m)(yu, {
            ...VR.d[uu.oK],
            pos1: uu.pos1,
            pos2: uu.pos2
          }) : console.error(`Unknown preset id: ${uu.oK}`)
        })), uu.WH(Xu.id, (uu => {
          var Ru, yu;
          let {
            AK: Eu,
            DK: Ku,
            MK: Qu,
            IK: mu
          } = uu, {
            UK: Ju,
            nK: Xu
          } = null !== mu && void 0 !== mu ? mu : {};
          const {
            GK: Vu
          } = null !== mu && void 0 !== mu ? mu : {};
          Ju = null !== (Ru = Ju) && void 0 !== Ru ? Ru : void 0, Xu = null !== (yu = Xu) && void 0 !== yu ? yu : void 0, "string" === typeof Vu && this.stateReplicationHandler.setUpIfQueued(Vu), (0, Nu.e)().client.gameRecorder.recordPlaySound(Eu, Ku, Qu, mu), vu.d.play((0, au.d)(Eu), Ku, Vu, Ju, Xu).rate(Qu)
        })), uu.WH(Xu.le, (uu => {
          let {
            pos: Ru,
            data: yu
          } = uu;
          mu.blockDataOwner.setBlockData(Ru[0], Ru[1], Ru[2], yu), mu.blockAdded(Ru[0], Ru[1], Ru[2], mu.OW(Ru[0], Ru[1], Ru[2]))
        })), uu.WH(Xu.bd, (uu => {
          let {
            info: Ru
          } = uu;
          Wu.k.Op("overShopInfo", Ru, !0)
        })), uu.WH(Xu.ac, (uu => {
          let {
            BR: Eu,
            xR: Ku
          } = uu;
          Ru.openShop(yu.ZI, Eu, Ku)
        })), uu.WH(Xu.H, (uu => {
          yu.nH.Al(yu.ZI).applyImpulse(uu)
        })), uu.WH(Xu.Ie, (uu => {
          const Ru = yu.nH.Al(yu.ZI);
          zu().set(Ru.Qs, 0, 0, 0), zu().set(Ru.Xs, 0, 0, 0), zu().copy(Ru.JT, uu), Ru.Ws()
        })), uu.WH(Xu.Gc, (uu => {
          console.error(`[logErrorToConsole]: ${uu}`)
        })), uu.WH(Xu._b, (uu => {
          let {
            MQ: Ru,
            IQ: yu,
            GQ: Eu
          } = uu;
          Wu.k.Op("flyingMiddleMessage", {
            content: (0, Xu.r)(Ru),
            IQ: yu,
            GQ: Eu
          }, !0)
        })), uu.WH(Xu.tf, (uu => {
          const Ru = uu === su.d ? null : {
            message: `Currently loaded as variation: ${uu}`,
            type: "Warning"
          };
          Wu.k.Op("showPermanentBottomMessage", Ru, !0)
        })), uu.WH(Xu.bc, (uu => {
          let {
            messageType: Ru,
            data: yu
          } = uu;
          (0, fu.e)(Ru) ? (0, fu.b)(Ru, yu) : ("freeCamPerms" === Ru && mu.client.freeCameraController.setPerms(yu.key, yu.value), mu.client.triggerGameCallback("onReceivedMessageFromServer", Ru, yu))
        })), uu.WH(Xu.sb, (() => {
          const uu = yu.nH.Xyu(yu.ZI);
          null !== uu && void 0 !== uu && uu.isChargeable() && uu.finishCharging(!1, Date.now())
        })), uu.WH(Xu.Dd, (uu => {
          let {
            eK: Ru
          } = uu;
          mu.craftingManager.removeRecipes(yu.ZI, Ru), Wu.k.Op("craftingRecipesEdited", {
            itemName: Ru,
            recipesForItem: []
          })
        })), uu.WH(Xu.kf, (uu => {
          for (const Ru in uu) {
            const yu = uu[Ru];
            for (const uu in yu) mu.client.meshCreator.handleParticleSystemUpdate(Ru, uu, yu[uu])
          }
        })), (0, Eu.onGameResetOnce)((() => {
          (0, QR.setFloatingYValue)(yu.nH.getState(yu.ZI, "physics"), yu.nH.aZ(yu.ZI), null)
        })), uu.WH(Xu.Zb, (uu => {
          let {
            vR: Ru,
            aR: Eu,
            fR: Ku
          } = uu;
          const Qu = (0, cu.b)(Ru);
          if (Qu === yu.ZI) {
            const uu = yu.nH.aZ(yu.ZI).position;
            Ku ??= Math.floor(uu[1]) - 1, (0, QR.setFloatingYValue)(yu.nH.getState(yu.ZI, "physics"), yu.nH.aZ(yu.ZI), Eu ? Ku : null)
          }(0, Gu.e)(yu).setFloating(Qu, Eu, Ku);
          const mu = yu.nH.getState(Qu, "floating");
          mu && (mu.isFloating = Eu, mu.fR = Eu ? Ku : null)
        })), uu.WH(Xu.Kb, uR.l)
      }
    }
    window.addEventListener("beforeunload", (() => {}));
    var jR = yu(38797),
      HR = yu(38802),
      dR = yu(640),
      bR = yu(3032);
    class CR {
      constructor(uu, Ru, yu, Eu) {
        this.msgHandler = yu, this.listener = Eu, this.session = void 0, this.attachedRoom = null, this.detachRoomListeners = null, this.suspended = !1, this.droppedAt = 0, this.session = new jR.b({
          reconnect: uu,
          isLive: () => Eu.isLive(),
          onReconnected: uu => {
            this.resumeOnRoom(uu)
          },
          onGaveUp: (uu, Ru) => {
            Eu.onGaveUp(uu, Ru)
          },
          freeze: Ru,
          releaseSeat: Ru => {
            uu(Ru).then((uu => {
              uu.leave(!0)
            }), (uu => {
              console.warn("Couldn't release the held seat of a game left while reconnecting", uu)
            }))
          }
        })
      }
      onInitialInfo(uu, Ru) {
        this.session.onInitialInfo(uu, Ru)
      }
      isResuming() {
        return this.session.isResuming()
      }
      getDroppedAt() {
        return this.droppedAt
      }
      onResumeInitialInfo(uu, Ru) {
        if (this.session.onResuming(), null === uu) {
          try {
            (0, Nu.e)().client.itemDropPrediction.reset()
          } catch (yu) {
            console.error("Error dropping the item drop predictions on resuming", yu)
          }
          return Eu.offlineInputReplay.discard(), void this.setSuspended(!1)
        }(0, Nu.e)().client.itemDropPrediction.onResumeReplayOffered(), Eu.offlineInputReplay.replayFrom(uu.iR, Ru)
      }
      onResumed(uu) {
        this.setSuspended(!1), (0, Eu.resendBeacons)();
        try {
          uu()
        } catch (Ru) {
          console.error("Error completing the resume", Ru)
        } finally {
          this.session.onResumed()
        }
      }
      attachRoom(uu) {
        const Ru = (0, dR.f)((() => uu.connection.isOpen));
        uu.jH(Ru);
        const yu = new HR.e((() => {
          this.session.canHoldSeat() && this.listener.isLive() && (console.warn("The game server went silent, reconnecting"), this.onConnectionDropped(uu, "silent"), uu.leave(!1))
        }));
        uu.onStateChange((() => {
          yu.heard()
        }));
        const Eu = Ru => {
          Ru.persisted || uu.leave(!0)
        };
        window.addEventListener("pagehide", Eu), uu.jH(((Ru, yu) => {
          if (uu === this.attachedRoom && this.listener.isLive()) return (0, Qu.h)(Ru) && this.session.canHoldSeat() ? (console.warn(`Connection to the game server dropped with code ${Ru}, reconnecting`), this.listener.onDropped(Ru, yu), void this.onConnectionDropped(uu, String(Ru))) : void this.listener.onRoomLeft(Ru, yu)
        })), this.attachedRoom = uu, this.detachRoomListeners = () => {
          Ru(), yu.dispose(), window.removeEventListener("pagehide", Eu)
        }
      }
      dispose() {
        this.detachRoom(), this.session.leave(), this.setSuspended(!1)
      }
      setSuspended(uu) {
        uu !== this.suspended && (this.suspended = uu, (0, Eu.setConnectionSuspended)(uu), (0, Nu.e)().client.itemDropPrediction.setSuspended(uu))
      }
      detachRoom() {
        var uu;
        null === (uu = this.detachRoomListeners) || void 0 === uu || uu.call(this), this.detachRoomListeners = null, this.attachedRoom = null
      }
      onConnectionDropped(uu, Ru) {
        (0, bR.e)("disconnect", "Left room", Ru), this.isResuming() || (this.droppedAt = Date.now()), this.detachRoom(), Eu.offlineInputReplay.onConnectionLost(), this.setSuspended(!0), this.session.onConnectionLost(uu.reconnectionToken)
      }
      resumeOnRoom(uu) {
        if (!this.listener.isLive()) return console.warn("Left the game while reconnecting, leaving the resumed room"), uu.leave(!0), void this.dispose();
        console.log("Reconnected to the game server, waiting for the game to resume"), (0, SR.n)(), Eu.offlineInputReplay.onConnectionReplaced(), this.msgHandler.OXu(uu), this.listener.onReconnected(uu), this.attachRoom(uu)
      }
    }
    var kR = yu(3273),
      eR = yu(3282),
      AR = yu(1280),
      DR = yu(4461),
      MR = yu(2936),
      IR = yu(1056),
      GR = yu(37445),
      UR = yu(38808),
      nR = yu(8652),
      sR = yu(38812),
      tR = yu(1739),
      lR = yu(38818),
      gR = yu(1652),
      cR = yu(2638);

    function LR(uu) {
      var Ru, yu;
      if ("object" !== typeof uu || null === uu) return {
        errType: typeof uu
      };
      const Eu = uu;
      return {
        errType: null !== (Ru = null === (yu = uu.constructor) || void 0 === yu ? void 0 : yu.name) && void 0 !== Ru ? Ru : "",
        errName: "string" === typeof Eu.name ? Eu.name : "",
        eventType: "string" === typeof Eu.type ? Eu.type : "",
        errStack: "string" === typeof Eu.stack ? Eu.stack.split("\n").slice(1).join(" | ") : ""
      }
    }

    function zR(uu) {
      if ("undefined" !== typeof ProgressEvent && uu instanceof ProgressEvent) return !0;
      if (!(uu instanceof Error)) return !1;
      const Ru = uu.code;
      return "ServerError" === uu.name && void 0 === Ru || "AbortError" === uu.name || "seat reservation expired." === uu.message || "early_leave" === uu.message
    }(0, pu.r)((uu => {
      (0, bR.e)("wasm_net", uu)
    }));
    let FR = !0;

    function wR() {
      FR = !1
    }
    class ZR {
      constructor(uu) {
        this.gameNameWithVariation = void 0, this.lobbyName = void 0, this.colyClient = void 0, this.userContext = void 0, this.joinedAt = null, this.checkSendPath = () => {}, this.Yr = void 0, this.connectionResume = void 0, this.incomingMsgInitialisor = void 0, this.gameNameWithVariation = uu.gameNameWithVariation, this.lobbyName = uu.lobbyName, this.colyClient = uu.colyClient, this.userContext = uu.userContext
      }
      async connectToServer(uu, Ru, yu) {
        ju.b.reset(), uu.MI = {
          [uu.ZI]: {}
        }, uu.ERu = void 0, (0, SR.n)(), (0, Nu.e)().removeAllEntityNames(), (0, Nu.e)().setEntityName(uu.ZI, this.userContext.getPlayerName()), (0, AR.n)({
          lobbyName: this.lobbyName
        }), console.log("Waiting for clientConnection passed promise to resolve");
        const mu = (0, gR.h)();
        console.log("joining server with game", this.gameNameWithVariation, "lobbyName", this.lobbyName);
        const Ju = performance.now(),
          Xu = (0, sR.d)(this.userContext, (() => {
            const {
              roomName: Eu,
              joinOptions: Ku
            } = (0, du.c)(this.userContext, this.gameNameWithVariation, this.lobbyName, Ru, (uu => MR.c.isUsingCustomGameTexturePack(uu)));
            return Ku.joinAdHold = mu, Ku.renderBackend = (0, cR.d)(uu.oS), (0, UR.e)((() => this.colyClient.joinOrCreate(Eu, Ku)), yu)
          }));
        return Wu.k.Op("loadingScreenState", "loadingPage:joiningLobby"), await Xu.then((Ru => {
          if (this.joinedAt = performance.now(), this.Yr = uu, mu) {
            const uu = (0, gR.u)((() => {
              Ru.send(Ku.h)
            }));
            Ru.jH(uu), (0, Eu.onGameResetOnce)(uu)
          }
          const yu = new Tu(Ru);
          this.connectionResume = new CR((uu => this.colyClient.reconnect(uu)), (Ru => {
            uu.Dk(Ru)
          }), yu, {
            isLive: () => (0, Nu.e)().client.getMsgHandler() === yu,
            onDropped: (uu, Ru) => {
              (0, eR.i)(uu) || this.logUnrecognisedConnectionLoss(uu, void 0, {
                site: "drop",
                closeReason: null !== Ru && void 0 !== Ru ? Ru : "",
                sinceJoined: this.sinceJoined()
              })
            },
            onRoomLeft: (uu, Ru) => {
              this.onRoomLeft(uu, Ru)
            },
            onReconnected: uu => {
              this.incomingMsgInitialisor.OXu(uu), this.checkSendPath = (0, GR.h)(yu, uu, pu.s)
            },
            onGaveUp: (uu, Ru) => {
              this.onResumeGaveUp(uu, Ru)
            }
          }), this.connectionResume.attachRoom(Ru), (0, Eu.onGameResetOnce)((() => {
            this.connectionResume.dispose()
          }));
          const Qu = yu.send,
            Ju = yu.WH,
            Xu = yu.Zyu.send,
            Vu = yu.Zyu.WH,
            ru = yu.oXu;
          this.checkSendPath = (0, GR.h)(yu, Ru, pu.s);
          const Bu = setInterval((() => {
            Qu === yu.send && Ju === yu.WH && Xu === yu.Zyu.send && Vu === yu.Zyu.WH && ru === yu.oXu || wR(), this.checkSendPath()
          }), 1e4);
          return (0, Eu.onGameResetOnce)((() => {
            clearInterval(Bu)
          })), {
            success: !0,
            successDetails: yu
          }
        })).catch((Ru => {
          if (yu.aborted && Ru === (0, tR.e)(yu)) return {
            success: !1,
            failDetails: {
              reason: "Left the game while it loaded",
              requiresRefresh: !1,
              canReconnect: !1
            }
          };
          if (Ru instanceof lR.i) return console.warn("Seat request timed out", this.lobbyName, this.gameNameWithVariation), {
            success: !1,
            failDetails: {
              reason: Ru.message,
              requiresRefresh: !1,
              canReconnect: !1,
              gameServerUnreachable: "timedOut"
            }
          };
          uu.Tp(`Failed to connect to bloxd room, check your internet connection. lobbyName: ${this.lobbyName}, gameNameWithVariation: ${this.gameNameWithVariation} code: ${Ru.code}\n`, Ru);
          const Eu = Ru.code;
          return Eu === Qu.c.serverUpdating.code ? (this.goToUpdateWaiting(), {
            success: !1,
            failDetails: {
              reason: Qu.c.serverUpdating.text,
              requiresRefresh: !1,
              canReconnect: !0,
              goesToUpdateWaiting: !0
            }
          }) : {
            success: !1,
            failDetails: {
              ...this.onConnectionToServerLost(Eu, Ru.message, {
                site: "join",
                sinceJoinStart: (0, eR.d)(performance.now() - Ju),
                ...LR(Ru)
              }, zR(Ru)),
              rematch: (0, UR.c)(Ru),
              gameRefused: (0, nR.c)(Ru)
            }
          }
        }))
      }
      setupServerListeners(uu, Ru, yu) {
        Wu.k.Op("loadingScreenState", "loadingPage:loadingPlayerInfo"), this.incomingMsgInitialisor = new WR(this.gameNameWithVariation, Ru.Zyu, uu, this.connectionResume), this.incomingMsgInitialisor.setupStateReplicationHandlers();
        const Ku = Ru.uVu();
        this.incomingMsgInitialisor.setupOnMessageListeners(Ku, yu), (0, Eu.onConnectionToServerReady)(Ku, Ru), Ku.finishRegistration()
      }
      dispose() {
        this.connectionResume.dispose()
      }
      onResumeGaveUp(uu, Ru) {
        (0, IR.jp)(new Error("Reconnect failed"), {
          ...(0, kR.m)(Ru),
          game: this.gameNameWithVariation
        }), (0, bR.e)("disconnect", "Reconnect failed", Ru.reason), (0, Nu.e)().client.leaveGameUnwanted({
          reason: {
            translationKey: "general:lostConnection"
          },
          canReconnect: !uu,
          canPlayAgain: uu,
          requiresRefresh: !1,
          automaticallyReconnect: !1
        }), (0, yR.navigatePreserveSearch)("/")
      }
      sinceJoined() {
        return null === this.joinedAt ? "" : (0, eR.d)(performance.now() - this.joinedAt)
      }
      onRoomLeft(uu, Ru) {
        var yu;
        if (uu === Qu.c.gameOrPluginKick.code) return;
        if (console.log(`Left room with code ${uu}`), uu === Qu.c.serverUpdating.code) return (0, bR.e)("disconnect", "Left room", "serverUpdating"), (0, Nu.e)().client.leaveGame(this.getUpdateWaitingUrl()), void this.goToUpdateWaiting();
        this.Yr.Tp(`Kicked from server with code ${uu}`, new Error);
        const Eu = Object.keys(Qu.c).find((Ru => Qu.c[Ru].code === uu));
        (0, bR.e)("disconnect", "Left room", null !== Eu && void 0 !== Eu ? Eu : String(uu));
        const Ku = this.onConnectionToServerLost(uu, void 0, {
          site: "leave",
          closeReason: null !== Ru && void 0 !== Ru ? Ru : "",
          sinceJoined: this.sinceJoined()
        });
        (0, Nu.e)().client.leaveGameUnwanted({
          reason: `You have disconnected from the server.\n${Ku.reason}`,
          canReconnect: Ku.canReconnect,
          requiresRefresh: Ku.requiresRefresh,
          automaticallyReconnect: null !== (yu = Ku.automaticallyReconnect) && void 0 !== yu && yu
        }), (0, yR.navigatePreserveSearch)("/")
      }
      getUpdateWaitingUrl() {
        return (0, DR.u)(this.gameNameWithVariation, this.lobbyName)
      }
      goToUpdateWaiting() {
        (0, yR.navigatePreserveSearch)(this.getUpdateWaitingUrl())
      }
      onConnectionToServerLost(uu, Ru, yu) {
        var Eu;
        let Ku = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (null !== (Eu = Ru) && void 0 !== Eu && Eu.endsWith(Qu.j) && (this.userContext.invalidateTrafficCode(), Ru = Ru.replace(Qu.j, "")), uu === Qu.c.outdatedVersion.code) return console.error("Outdated client with version ", mu.c, ", refreshing page"), (0, Hu.reloadBloxd)(), {
          reason: "Outdated client",
          requiresRefresh: !0,
          canReconnect: !1
        };
        if (uu === Qu.c.loadRecaptchaError.code) return console.error("Load recaptcha error, refreshing page"), (0, Hu.reloadBloxd)(), {
          reason: "Failed to load recaptcha",
          requiresRefresh: !0,
          canReconnect: !1
        };
        for (const mu in Qu.c) {
          const {
            code: yu,
            text: Eu,
            canReconnect: Ku
          } = Qu.c[mu];
          if (yu === uu) {
            console.log("matched known error", uu, "leaving game");
            return {
              reason: "" !== Eu ? Eu : Ru || `Code: ${uu}`,
              requiresRefresh: !1,
              canReconnect: Ku,
              automaticallyReconnect: yu === Qu.c.customGameUpdated.code || yu === Qu.c.duplicateLobbyNameError.code
            }
          }
        }
        return console.log("Didn't match known error, leaving game"), (0, eR.g)(uu) || Ku ? console.warn("Connection lost", uu, Ru) : this.logUnrecognisedConnectionLoss(uu, Ru, yu), {
          reason: `Either your internet isn't working or this is a bug.\nCode: ${uu}`,
          requiresRefresh: !1,
          canReconnect: !1,
          gameServerUnreachable: Ku ? "failed" : void 0
        }
      }
      logUnrecognisedConnectionLoss(uu, Ru, yu) {
        (0, IR.jp)(new Error("Unrecognised connection loss"), {
          code: String(uu),
          cause: null !== Ru && void 0 !== Ru ? Ru : "",
          ...yu,
          game: this.gameNameWithVariation,
          ...(0, eR.k)()
        })
      }
    }
  },
  38767: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Yy,
      i: () => fy
    });
    var Eu, Ku, Qu, mu, Ju, Nu, Xu, Vu, ru, Bu, xu, Su, pu, Tu, Wu, ju, Hu, du, bu, Cu, ku, eu, Au, Du, Mu, Iu, Gu, Uu, nu, su, tu, lu, gu, cu, Lu, zu, Fu, wu, Zu, hu, Pu, iu, Yu, ou, qu, Ou, vu, au, fu, uR, RR, yR, ER, KR, QR, mR, JR, NR, XR, VR, rR, BR, xR, SR, pR, TR, WR, jR, HR, dR, bR, CR, kR, eR, AR, DR, MR, IR, GR, UR, nR, sR, tR, lR, gR, cR, LR, zR, FR, wR, ZR, hR, PR, iR, YR, oR, qR, OR, vR, aR = yu(34),
      fR = yu(36884),
      uy = yu(38783),
      Ry = yu(38786),
      yy = yu(8851),
      Ey = yu(602),
      Ky = yu(599),
      Qy = yu(36565);
    let my = (Eu = (0, yy.type)("number"), Ku = (0, yy.type)("number"), Qu = (0, yy.type)("number"), mu = (0, yy.type)("number"), Ju = (0, yy.type)("number"), Nu = (0, yy.type)("number"), Xu = (0, yy.type)("string"), Vu = class extends yy.Schema {
        constructor() {
          super(...arguments), (0, uy.c)(this, "id", ru, this), (0, uy.c)(this, "amount", Bu, this), (0, uy.c)(this, "x", xu, this), (0, uy.c)(this, "y", Su, this), (0, uy.c)(this, "z", pu, this), (0, uy.c)(this, "size", Tu, this), (0, uy.c)(this, "attributes", Wu, this)
        }
      }, ru = (0, Ry.c)(Vu.prototype, "id", [Eu], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Bu = (0, Ry.c)(Vu.prototype, "amount", [Ku], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), xu = (0, Ry.c)(Vu.prototype, "x", [Qu], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Su = (0, Ry.c)(Vu.prototype, "y", [mu], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), pu = (0, Ry.c)(Vu.prototype, "z", [Ju], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Tu = (0, Ry.c)(Vu.prototype, "size", [Nu], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 1
        }
      }), Wu = (0, Ry.c)(Vu.prototype, "attributes", [Xu], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "{}"
        }
      }), Vu),
      Jy = (ju = (0, yy.type)("string"), Hu = (0, yy.type)("string"), du = class extends yy.Schema {
        constructor() {
          super(...arguments), (0, uy.c)(this, "itemName", bu, this), (0, uy.c)(this, "enchantmentTier", Cu, this)
        }
      }, bu = (0, Ry.c)(du.prototype, "itemName", [ju], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), Cu = (0, Ry.c)(du.prototype, "enchantmentTier", [Hu], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), du),
      Ny = (ku = (0, yy.type)("string"), eu = (0, yy.type)("string"), Au = (0, yy.type)("number"), Du = (0, yy.type)("number"), Mu = (0, yy.type)("number"), Iu = (0, yy.type)("float32"), Gu = (0, yy.type)("float32"), Uu = (0, yy.type)("float32"), nu = (0, yy.type)("string"), su = (0, yy.type)(["number"]), tu = (0, yy.type)("boolean"), lu = class extends yy.Schema {
        constructor() {
          super(...arguments), (0, uy.c)(this, "type", gu, this), (0, uy.c)(this, "name", cu, this), (0, uy.c)(this, "x", Lu, this), (0, uy.c)(this, "y", zu, this), (0, uy.c)(this, "z", Fu, this), (0, uy.c)(this, "xRotation", wu, this), (0, uy.c)(this, "yRotation", Zu, this), (0, uy.c)(this, "zRotation", hu, this), (0, uy.c)(this, "followingEId", Pu, this), (0, uy.c)(this, "followingOffset", iu, this), (0, uy.c)(this, "shouldMatchFollowingEntityRotation", Yu, this)
        }
      }, gu = (0, Ry.c)(lu.prototype, "type", [ku], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), cu = (0, Ry.c)(lu.prototype, "name", [eu], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return ""
        }
      }), Lu = (0, Ry.c)(lu.prototype, "x", [Au], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), zu = (0, Ry.c)(lu.prototype, "y", [Du], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Fu = (0, Ry.c)(lu.prototype, "z", [Mu], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), wu = (0, Ry.c)(lu.prototype, "xRotation", [Iu], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Zu = (0, Ry.c)(lu.prototype, "yRotation", [Gu], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), hu = (0, Ry.c)(lu.prototype, "zRotation", [Uu], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Pu = (0, Ry.c)(lu.prototype, "followingEId", [nu], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), iu = (0, Ry.c)(lu.prototype, "followingOffset", [su], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new yy.ArraySchema(0, 0, 0)
        }
      }), Yu = (0, Ry.c)(lu.prototype, "shouldMatchFollowingEntityRotation", [tu], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !0
        }
      }), lu),
      Xy = (ou = (0, yy.type)("float32"), qu = (0, yy.type)("float32"), Ou = (0, yy.type)("boolean"), vu = (0, yy.type)("boolean"), au = (0, yy.type)("float32"), fu = (0, yy.type)("boolean"), uR = (0, yy.type)("string"), RR = (0, yy.type)("string"), yR = (0, yy.type)("string"), ER = (0, yy.type)("string"), KR = (0, yy.type)(["number"]), QR = (0, yy.type)("number"), mR = (0, yy.type)({
        map: Jy
      }), JR = class extends Ny {
        constructor() {
          super(...arguments), (0, uy.c)(this, "scale", NR, this), (0, uy.c)(this, "speed", XR, this), (0, uy.c)(this, "jumping", VR, this), (0, uy.c)(this, "crouching", rR, this), (0, uy.c)(this, "cameraPitch", BR, this), (0, uy.c)(this, "armSwinging", xR, this), (0, uy.c)(this, "heldItemName", SR, this), (0, uy.c)(this, "heldItemEnchantmentTier", pR, this), (0, uy.c)(this, "pose", TR, this), (0, uy.c)(this, "ridingVehicleEId", WR, this), (0, uy.c)(this, "meshOffset", jR, this), (0, uy.c)(this, "baseRenderHeading", HR, this), (0, uy.c)(this, "armour", dR, this)
        }
      }, NR = (0, Ry.c)(JR.prototype, "scale", [ou], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 1
        }
      }), XR = (0, Ry.c)(JR.prototype, "speed", [qu], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), VR = (0, Ry.c)(JR.prototype, "jumping", [Ou], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), rR = (0, Ry.c)(JR.prototype, "crouching", [vu], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), BR = (0, Ry.c)(JR.prototype, "cameraPitch", [au], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), xR = (0, Ry.c)(JR.prototype, "armSwinging", [fu], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), SR = (0, Ry.c)(JR.prototype, "heldItemName", [uR], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), pR = (0, Ry.c)(JR.prototype, "heldItemEnchantmentTier", [RR], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), TR = (0, Ry.c)(JR.prototype, "pose", [yR], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "standing"
        }
      }), WR = (0, Ry.c)(JR.prototype, "ridingVehicleEId", [ER], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), jR = (0, Ry.c)(JR.prototype, "meshOffset", [KR], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new yy.ArraySchema(0, 0, 0)
        }
      }), HR = (0, Ry.c)(JR.prototype, "baseRenderHeading", [QR], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), dR = (0, Ry.c)(JR.prototype, "armour", [mR], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new yy.MapSchema
        }
      }), JR),
      Vy = (bR = (0, yy.type)("string"), CR = (0, yy.type)("string"), kR = (0, yy.type)("string"), eR = (0, yy.type)("uint8"), AR = class extends Xy {
        constructor() {
          super(...arguments), (0, uy.c)(this, "variation", DR, this), (0, uy.c)(this, "ownerDbId", MR, this), (0, uy.c)(this, "metaInfo", IR, this), (0, uy.c)(this, "aiState", GR, this)
        }
      }, DR = (0, Ry.c)(AR.prototype, "variation", [bR], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "default"
        }
      }), MR = (0, Ry.c)(AR.prototype, "ownerDbId", [CR], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), IR = (0, Ry.c)(AR.prototype, "metaInfo", [kR], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return ""
        }
      }), GR = (0, Ry.c)(AR.prototype, "aiState", [eR], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), AR);
    UR = (0, yy.type)("string"), nR = (0, yy.type)("string"), sR = (0, yy.type)("string"), tR = (0, yy.type)("string"), lR = class extends Ny {
      constructor() {
        super(...arguments), (0, uy.c)(this, "meshKind", gR, this), (0, uy.c)(this, "meshOpts", cR, this), (0, uy.c)(this, "pose", LR, this), (0, uy.c)(this, "leaderboardTop", zR, this)
      }
    }, gR = (0, Ry.c)(lR.prototype, "meshKind", [UR], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), cR = (0, Ry.c)(lR.prototype, "meshOpts", [nR], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), LR = (0, Ry.c)(lR.prototype, "pose", [sR], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), zR = (0, Ry.c)(lR.prototype, "leaderboardTop", [tR], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    });

    function ry(uu) {
      return Object.keys(yy.Metadata.getFields(uu))
    }
    const By = ry(Vy);
    for (const uE of Ey.q)
      if (!By.includes(uE)) throw new Error(`Mob Schema is missing a networked property: "${uE}"`);
    const xy = ry((FR = (0, yy.type)("string"), wR = (0, yy.type)("float32"), ZR = (0, yy.type)("float32"), hR = (0, yy.type)("float32"), PR = (0, yy.type)("float32"), iR = class extends Ny {
      constructor() {
        super(...arguments), (0, uy.c)(this, "soundName", YR, this), (0, uy.c)(this, "volume", oR, this), (0, uy.c)(this, "refDistance", qR, this), (0, uy.c)(this, "maxHearDist", OR, this), (0, uy.c)(this, "rate", vR, this)
      }
    }, YR = (0, Ry.c)(iR.prototype, "soundName", [FR], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return ""
      }
    }), oR = (0, Ry.c)(iR.prototype, "volume", [wR], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return 1
      }
    }), qR = (0, Ry.c)(iR.prototype, "refDistance", [ZR], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return Qy.h
      }
    }), OR = (0, Ry.c)(iR.prototype, "maxHearDist", [hR], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return Qy.d
      }
    }), vR = (0, Ry.c)(iR.prototype, "rate", [PR], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return 1
      }
    }), iR));
    for (const uE of Ky.k)
      if (!xy.includes(uE)) throw new Error(`AudioEntity Schema is missing a replicated property: "${uE}"`);
    var Sy = yu(38209),
      py = yu(1215),
      Ty = yu(610),
      Wy = yu(37971),
      jy = yu(4053),
      Hy = yu(343),
      dy = yu(36986),
      by = yu(37846),
      Cy = yu(2128),
      ky = yu(36960),
      ey = yu(38232),
      Ay = yu(37111),
      Dy = yu(352),
      My = yu.n(Dy),
      Iy = yu(37690),
      Gy = yu(36814),
      Uy = yu(37830),
      ny = yu(37853);
    class sy {
      constructor(uu, Ru) {
        this.bloxd = uu, this.eId = Ru, this.Yr = void 0, this.colyseusEntity = void 0, this.canSeeSub = void 0, this.canAttackSub = void 0, this.interactableSub = void 0, this.overlayColourSub = void 0, this.opacitySub = void 0, this.zIndexSub = void 0, this.multilineTextBoxSub = void 0, this.previousHidingMeshManagerState = void 0, this.meshKind = void 0, this.meshOpts = void 0, this.leaderboardTop = void 0, this.meshRebuildQueued = !1, this.VS = !1, this.Yr = uu.Yr
      }
      initClient(uu) {
        var Ru, yu, Eu;
        this.colyseusEntity = uu, this.meshKind = uu.meshKind, this.meshOpts = uu.meshOpts, this.leaderboardTop = uu.leaderboardTop, this.Yr.nH.add([uu.x, uu.y, uu.z], 1, 1, null, null, !1, !1, this.eId), this.Yr.nH.yI(this.eId, "smoothToServerPos");
        const Ku = "Person" === this.meshKind;
        this.Yr.nH.yI(this.eId, "meshRotation", {
          isServerControlled: !0,
          ...Ku ? {
            defaultRotationsPerSecond: .5
          } : {},
          childrenNodeParams: Ku ? [{
            nodeName: "HeadMesh",
            softTolerance: ey.l,
            hardTolerance: null
          }] : []
        }), this.updateHidingMeshMgr(), this.canSeeSub = aR.k.subscribe(`otherEntitySettings|${this.eId}|canSee`, (uu => {
          this.updateHidingMeshMgr()
        }));
        const Qu = () => {
          const uu = this.Yr.nH.URu(this.eId);
          if (!uu) return;
          const Ru = (0, Ay.i)(this.eId);
          if ("number" === typeof uu.qD) {
            var yu, Eu, Ku, Qu;
            const mu = null === (yu = (0, Cy.k)("head", null === (Ku = this.getSpec()) || void 0 === Ku || null === (Qu = Ku.opts.textures) || void 0 === Qu ? void 0 : Qu.head)) || void 0 === yu || null === (Eu = yu.personModel) || void 0 === Eu ? void 0 : Eu.fullBody;
            return this.Yr.oS.PD.setPickable(uu.qD, Ru && !mu), void(0, Gy.updatePersonAttachmentPickability)(this.Yr, this.eId, Ru)
          }
          const mu = uu.mesh;
          if (mu)
            for (const Ju of [mu, ...mu.getChildMeshes(!1)]) "zp" in Ju && !Ju.name.startsWith("Cape|") && (Ju.zp = Ru)
        };
        this.canAttackSub = aR.k.subscribe(`otherEntitySettings|${this.eId}|canAttack`, Qu), this.interactableSub = aR.k.subscribe(`otherEntitySettings|${this.eId}|interactable`, Qu), this.overlayColourSub = aR.k.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|overlayColour`, (uu => {
          this.updateOverlayColour(uu)
        })), this.opacitySub = aR.k.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|opacity`, (uu => {
          this.updateOpacity(uu)
        })), this.zIndexSub = aR.k.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|zIndex`, (uu => {
          this.updateZIndex(uu)
        }));
        const mu = this.Yr.MI[this.Yr.ZI][this.eId];
        this.updateOverlayColour(null !== (Ru = null === mu || void 0 === mu ? void 0 : mu.overlayColour) && void 0 !== Ru ? Ru : null), this.updateOpacity(null !== (yu = null === mu || void 0 === mu ? void 0 : mu.opacity) && void 0 !== yu ? yu : 1), this.updateZIndex(null !== (Eu = null === mu || void 0 === mu ? void 0 : mu.zIndex) && void 0 !== Eu ? Eu : 0), this.multilineTextBoxSub = (0, ky.w)(this.Yr, this.eId)
      }
      onChangeClient(uu, Ru) {
        if ("xRotation" === uu || "yRotation" === uu || "zRotation" === uu)(0, ky.x)(this.Yr, this.eId, uu, Ru);
        else if ("pose" === uu) {
          const uu = this.Yr.nH.LRu(this.eId);
          uu && (uu.pose = Ru || "standing")
        } else "meshKind" === uu || "meshOpts" === uu ? (this[uu] = Ru, this.queueMeshRebuild()) : "name" === uu && "" !== Ru ? this.updateHidingMeshMgr() : "leaderboardTop" === uu && (this.leaderboardTop = Ru, aR.k.Op(`leaderboardTop|${this.eId}`, Ru))
      }
      disposeClient() {
        this.VS = !0, this.Yr.nH.deleteEntity(this.eId), aR.k.unsubscribe(this.canSeeSub), aR.k.unsubscribe(this.canAttackSub), aR.k.unsubscribe(this.interactableSub), aR.k.unsubscribe(this.overlayColourSub), aR.k.unsubscribe(this.opacitySub), aR.k.unsubscribe(this.zIndexSub), aR.k.unsubscribe(this.multilineTextBoxSub)
      }
      getCurrentHidingMeshMgrState() {
        var uu, Ru;
        return {
          canSee: null !== (uu = null === (Ru = this.Yr.MI[this.Yr.ZI][this.eId]) || void 0 === Ru ? void 0 : Ru.canSee) && void 0 !== uu && uu,
          name: this.colyseusEntity.name,
          meshKind: this.meshKind,
          meshOpts: this.meshOpts
        }
      }
      updateHidingMeshMgr() {
        var uu, Ru, yu;
        const {
          Yr: Eu
        } = this, {
          nH: Ku
        } = Eu, Qu = this.getCurrentHidingMeshMgrState();
        if ((0, Hy.ge)(this.previousHidingMeshManagerState, Qu)) return;
        if (this.previousHidingMeshManagerState = Qu, Ku.mI(this.eId, "hidingMeshManager"), null === (uu = Eu.MI[Eu.ZI][this.eId]) || void 0 === uu || !uu.canSee) return;
        const mu = this.getSpec();
        if (!mu) return;
        const {
          type: Ju,
          opts: Nu
        } = mu;
        "Person" === Ju && (Nu.textures = (0, Cy.n)(Nu.textures)), Nu.eId = this.eId, Ku.yI(this.eId, "hidingMeshManager", {
          addMeshComponent: () => {
            var uu, Ru, yu;
            "Leaderboard" === Ju && (Nu.leaderboardTop = this.leaderboardTop);
            const Qu = this.bloxd.client.meshCreator.getEntityMesh(Ju, Nu, (uu => {
              var Ru, yu;
              if ("number" === typeof uu) {
                var Ku, Qu, mu;
                const Ru = Eu.oS.PD;
                Ru.setEntityId(uu, this.eId);
                const yu = "Person" === Ju && (null === (Ku = (0, Cy.k)("head", null === (mu = Nu.textures) || void 0 === mu ? void 0 : mu.head)) || void 0 === Ku || null === (Qu = Ku.personModel) || void 0 === Qu ? void 0 : Qu.fullBody);
                return void Ru.setPickable(uu, (0, Ay.i)(this.eId) && !yu)
              }
              const Xu = uu;
              for (const Ju of [Xu, ...Xu.getChildMeshes(!1)]) void 0 === Ju.zp || Ju.name.startsWith("Cape|") || (Ju.zp = (0, Ay.i)(this.eId), Ju.metadata ??= new Eu.oS.Fp, Ju.metadata.eId = this.eId);
              this.updateOpacity(null !== (Ru = null === (yu = Eu.MI[Eu.ZI][this.eId]) || void 0 === yu ? void 0 : yu.opacity) && void 0 !== Ru ? Ru : 1)
            }));
            if (!Qu) return;
            const {
              qD: mu,
              mesh: Xu,
              meshOffset: Vu,
              nameYOffset: ru,
              modelLoaded: Bu
            } = Qu;
            null === Bu || void 0 === Bu || Bu.then((() => {
              var uu;
              (null === (uu = Ku.URu(this.eId)) || void 0 === uu ? void 0 : uu.mesh) === Xu && (this.previousHidingMeshManagerState = null, this.updateHidingMeshMgr())
            }));
            const xu = null === mu ? null : Eu.oS.PD.kEu(mu, 0);
            if (Ku.yI(this.eId, Ku.names.mesh, {
                qD: mu,
                oyu: xu,
                mesh: Xu,
                xJu: !1,
                vyu: "Leaderboard" !== Ju,
                offset: Vu.slice(),
                BJu: "ParticleEmitter" === Ju && Nu.followTargetMeshOffset ? uu => {
                  var Ru;
                  My().copy(uu, Vu);
                  const yu = null === (Ru = Ku.kyu(this.eId)) || void 0 === Ru ? void 0 : Ru.yS,
                    Eu = void 0 === yu ? null : Ku.LRu(yu);
                  if (Eu) {
                    var Qu, mu;
                    const Ru = this.bloxd.getEntityHeading(null !== (Qu = Eu.ridingVehicleEId) && void 0 !== Qu ? Qu : yu, !0),
                      Ku = Math.sin(Ru),
                      Ju = Math.cos(Ru);
                    uu[0] += Eu.meshOffset[0] * Ju + Eu.meshOffset[2] * Ku, uu[1] += Eu.meshOffset[1], uu[2] += Eu.meshOffset[2] * Ju - Eu.meshOffset[0] * Ku;
                    const Nu = null !== (mu = Eu.ridingVehicleEId) && void 0 !== mu ? mu : null;
                    null !== Nu && (0, ny.b)(this.Yr, Nu, uu)
                  }
                } : null
              }), "Person" === Ju) {
              var Su, pu, Tu, Wu;
              Ku.yI(this.eId, Ku.names.meshAttachments, {
                personFullBody: null !== (Su = null === (pu = (0, Cy.k)("head", null === (Wu = Nu.textures) || void 0 === Wu ? void 0 : Wu.head)) || void 0 === pu || null === (Tu = pu.personModel) || void 0 === Tu ? void 0 : Tu.fullBody) && void 0 !== Su && Su
              });
              for (const uu of py.w) {
                var ju, Hu, du;
                const Ru = null === (ju = Nu.textures) || void 0 === ju ? void 0 : ju[uu];
                Ru && null !== (Hu = (0, Cy.k)(uu, Ru)) && void 0 !== Hu && null !== (du = Hu.attachments) && void 0 !== du && du.length && by.b.Player.meshApi.updatePlayerCosmetic(this.eId, mu, uu, Ru)
              }
              Ku.yI(this.eId, Ku.names.moveState), Ku.yI(this.eId, "updateWalkingState", {
                qD: mu,
                oyu: xu,
                walkingLegSwingDuration: ey.s
              }), Ku.yI(this.eId, "humanoidMesh", {
                qD: mu,
                oyu: xu,
                heldItemPositionParams: {},
                maxWalkingAngleOverride: null
              }), Ku.yI(this.eId, "animator", {
                qD: mu,
                oyu: xu,
                modelLifeformType: "Player"
              }), Uy.f.hasAnimation("Person") && Ku.yI(this.eId, "rigAnimation", {
                target: "Person",
                qD: mu
              }), Ku.LRu(this.eId).pose = this.colyseusEntity.pose || "standing"
            } else if ("BloxdBlock" === Ju && null !== mu) {
              Ku.yI(this.eId, "animator", {
                qD: mu,
                oyu: xu,
                modelLifeformType: null
              });
              const uu = (0, Wy.w)(Nu.blockName);
              null !== uu && Ku.yI(this.eId, "rigAnimation", {
                target: uu,
                qD: mu
              })
            }
            Ku.ZJu(this.eId, "entityName", {
              name: this.colyseusEntity.name,
              nameYOffset: ru
            }), this.bloxd.setEntityName(this.eId, this.colyseusEntity.name), !0 === Nu.autoRotate && (Ku.mI(this.eId, "meshRotation"), Ku.yI(this.eId, "autoRotate"));
            const {
              lineToEId: bu
            } = Nu;
            (0, Ty.E)(bu) || Ku.yI(this.eId, "lineToEntity", {
              lineToEId: bu
            });
            const Cu = Eu.MI[Eu.ZI][this.eId];
            this.updateOverlayColour(null !== (uu = null === Cu || void 0 === Cu ? void 0 : Cu.overlayColour) && void 0 !== uu ? uu : null), this.updateOpacity(null !== (Ru = null === Cu || void 0 === Cu ? void 0 : Cu.opacity) && void 0 !== Ru ? Ru : 1), this.updateZIndex(null !== (yu = null === Cu || void 0 === Cu ? void 0 : Cu.zIndex) && void 0 !== yu ? yu : 0)
          },
          removeMeshComponent: () => {
            "Person" !== Ju && "BloxdBlock" !== Ju || Ku.mI(this.eId, "rigAnimation"), Ku.mI(this.eId, Ku.names.mesh), Ku.RRu(this.eId, Ku.names.meshAttachments) && Ku.mI(this.eId, Ku.names.meshAttachments), Ku.mI(this.eId, "entityName"), Ku.mI(this.eId, "autoRotate"), Ku.mI(this.eId, "lineToEntity"), "Person" === Ju ? (Ku.mI(this.eId, Ku.names.moveState), Ku.mI(this.eId, "updateWalkingState"), Ku.mI(this.eId, "humanoidMesh"), Ku.mI(this.eId, "animator")) : "BloxdBlock" === Ju && Ku.mI(this.eId, "animator")
          },
          hideDist: null !== (Ru = Nu.hideDist) && void 0 !== Ru ? Ru : 80,
          movingHideDist: null !== (yu = Nu.hideDist) && void 0 !== yu ? yu : 120,
          displayOutsideLoadedChunk: Nu.hideDist > 100,
          immediatelyUpdate: !0,
          UV: "BloxdBlock" === Ju ? Nu.blockName : Ju
        })
      }
      queueMeshRebuild() {
        this.meshRebuildQueued || (this.meshRebuildQueued = !0, queueMicrotask((() => {
          this.meshRebuildQueued = !1, this.VS || this.updateHidingMeshMgr()
        })))
      }
      getSpec() {
        return (0, jy.k)({
          meshKind: this.meshKind,
          meshOpts: this.meshOpts
        })
      }
      updateOverlayColour(uu) {
        var Ru, yu;
        if ("Person" !== this.meshKind) return;
        let Eu = new dy.c(0, 0, 0, 0);
        if (null !== uu) {
          const Ru = (0, Hy.Z)(uu);
          Eu = new dy.c(Ru[0] / 255, Ru[1] / 255, Ru[2] / 255, .5)
        }
        const Ku = null !== (Ru = null === (yu = this.Yr.nH.URu(this.eId)) || void 0 === yu ? void 0 : yu.qD) && void 0 !== Ru ? Ru : null;
        null !== Ku && by.b.Player.meshApi.updateMeshOverlayColour(Ku, Eu)
      }
      updateZIndex(uu) {
        var Ru;
        if ("Person" !== this.meshKind) return;
        const yu = null === (Ru = this.Yr.nH.URu(this.eId)) || void 0 === Ru ? void 0 : Ru.qD;
        "number" === typeof yu && this.Yr.oS.PD.setRenderingGroupId(yu, uu)
      }
      updateOpacity(uu) {
        const Ru = this.Yr.nH.URu(this.eId);
        Ru && ("number" !== typeof Ru.qD ? Ru.mesh && "ParticleEmitter" !== this.meshKind && (0, Iy.e)(Ru.mesh, uu) : by.b.Player.meshApi.updateMeshOpacity(Ru.qD, uu))
      }
    }
    var ty = yu(38775);
    class ly {
      constructor(uu, Ru) {
        this.eId = Ru, this.Yr = void 0, this.schema = void 0, this.Yr = uu.Yr
      }
      initClient(uu) {
        this.schema = uu, this.Yr.nH.add([uu.x, uu.y, uu.z], .1, .1, null, null, !1, !1, this.eId), this.Yr.nH.yI(this.eId, "smoothToServerPos"), ty.b.add(this.eId, this.copyOpts())
      }
      onChangeClient(uu) {
        Ky.k.includes(uu) && ty.b.update(this.eId, this.copyOpts())
      }
      disposeClient() {
        ty.b.remove(this.eId), this.Yr.nH.deleteEntity(this.eId)
      }
      copyOpts() {
        const {
          soundName: uu,
          volume: Ru,
          refDistance: yu,
          maxHearDist: Eu,
          rate: Ku
        } = this.schema;
        return {
          soundName: uu,
          volume: Ru,
          refDistance: yu,
          maxHearDist: Eu,
          rate: Ku
        }
      }
    }
    var gy = yu(3490),
      cy = yu(36556),
      Ly = yu(6268),
      zy = yu(37541),
      Fy = yu(2632),
      wy = yu(37900),
      Zy = yu(8811),
      hy = yu(38249),
      Py = yu(37516),
      iy = yu(3032);
    class Yy {
      constructor(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
          Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => performance.now();
        this.Zyu = uu, this.Yr = Ru, this.setupBudgetMs = yu, this.now = Eu, this.createStateCallbacks = void 0, this.roomStateCallbacks = void 0, this.allItems = {}, this.detachers = new Map, this.deferredSetups = new Map, this.queuedSetups = new Map, this.promotedSetups = new Set, this.setupBudgetLeftMs = void 0, this.lastRefillMs = void 0, this.roomState = void 0, this.VS = !1, this.onFrame = () => {
          this.setUpQueuedEntities(!0)
        }, this.vW = () => {
          this.setUpQueuedEntities(this.now() - this.lastRefillMs > 100)
        }, this.setUpPromoted = () => {
          for (const uu of this.promotedSetups) {
            this.promotedSetups.delete(uu);
            const Ru = this.queuedSetups.get(uu);
            Ru && (this.queuedSetups.delete(uu), this.timedSetup(Ru, uu))
          }
        }, this.createStateCallbacks = (0, Zy.getStateCallbacks)(uu), this.roomStateCallbacks = this.createStateCallbacks(uu.state), this.roomState = uu.state, this.setupBudgetLeftMs = yu, this.lastRefillMs = Eu()
      }
      setup() {
        this.setupEntityHandlers(), this.setupItemHandlers(), this.Zyu.onStateChange(this.setUpPromoted), this.Yr.on("beforeInputs", this.onFrame), this.Yr.on("sr", this.vW)
      }
      setUpQueuedEntities(uu) {
        var Ru;
        if ((null === (Ru = (0, Fy.e)().client.getMsgHandler()) || void 0 === Ru ? void 0 : Ru.Zyu) !== this.Zyu) return this.Yr.off("beforeInputs", this.onFrame), this.Yr.off("sr", this.vW), this.queuedSetups.clear(), void this.promotedSetups.clear();
        if (uu && (this.setupBudgetLeftMs = this.setupBudgetMs, this.lastRefillMs = this.now()), this.setUpPromoted(), 0 !== this.queuedSetups.size)
          for (My().copy(oy, this.Yr.nH.mH(this.Yr.ZI)); this.setupBudgetLeftMs > 0;) {
            const uu = this.nearestQueued(oy);
            if (null === uu) return;
            this.setUpIfQueued(uu), this.setUpPromoted()
          }
      }
      nearestQueued(uu) {
        let Ru = null,
          yu = 1 / 0;
        return this.queuedSetups.forEach(((Eu, Ku) => {
          const Qu = function(uu, Ru) {
            return (Ru.x - uu[0]) ** 2 + (Ru.y - uu[1]) ** 2 + (Ru.z - uu[2]) ** 2
          }(uu, Eu);
          (null === Ru || Qu < yu) && (Ru = Ku, yu = Qu)
        })), Ru
      }
      setUpOrQueue(uu, Ru) {
        0 === this.queuedSetups.size && this.setupBudgetLeftMs > 0 || this.mustSetUpNow(uu, Ru) ? this.timedSetup(uu, Ru) : this.queuedSetups.set(Ru, uu)
      }
      mustSetUpNow(uu, Ru) {
        const yu = this.Yr.ERu;
        if (Ru === yu) return !0;
        const Eu = this.roomState.entities.get(yu);
        return !(!Eu || Eu.ridingVehicleEId !== Ru && Eu.followingEId !== Ru) || (qy(uu.type) === Sy.c || (0, Fy.e)().getFollowingEntities(Ru).length > 0)
      }
      setUpIfQueued(uu) {
        const Ru = this.queuedSetups.get(uu);
        Ru && (this.queuedSetups.delete(uu), this.timedSetup(Ru, uu))
      }
      promoteIfQueued(uu) {
        null !== uu && this.queuedSetups.has(uu) && this.promotedSetups.add(uu)
      }
      timedSetup(uu, Ru) {
        const yu = this.now();
        this.setupEntity(uu, Ru), this.setupBudgetLeftMs -= this.now() - yu
      }
      setupEntityHandlers() {
        this.roomStateCallbacks.entities.UH(((uu, Ru) => {
          this.Yr.ERu ? this.setUpOrQueue(uu, Ru) : this.deferEntitySetupUntilInitInfo(uu, Ru)
        })), this.roomStateCallbacks.entities.JA(((uu, Ru) => {
          const yu = this.deferredSetups.get(Ru);
          yu && (aR.k.unsubscribe(yu), this.deferredSetups.delete(Ru)), this.queuedSetups.delete(Ru), this.detach(Ru), (0, Fy.e)().client.disposeEntity(Ru)
        }))
      }
      deferEntitySetupUntilInitInfo(uu, Ru) {
        const yu = aR.k.aT("initInfoReceived", (() => {
          this.deferredSetups.delete(Ru), this.setUpOrQueue(uu, Ru)
        }));
        this.deferredSetups.set(Ru, yu), (0, gy.onGameResetOnce)((() => {
          this.deferredSetups.get(Ru) === yu && (aR.k.unsubscribe(yu), this.deferredSetups.delete(Ru)), (0, Fy.e)().updatePositionAndPhysics(this.Yr.ZI, {
            type: Ly.n.DEFAULT,
            tier: null
          }, !0), (0, Fy.e)().takeHeldPlayerBodySize(this.Yr.ZI);
          const uu = this.Yr.nH.WRu(this.Yr.ZI);
          uu && (uu.movementType = Ly.m.NORMAL)
        }))
      }
      setupEntity(uu, Ru) {
        const yu = Ru === this.Yr.ERu;
        if (yu)(0, Fy.e)().client.iZ(this.Yr.ZI, null, null);
        else {
          const {
            type: yu
          } = uu, Eu = qy(yu);
          if (void 0 === Eu) return void
          function(uu, Ru) {
            const yu = String(uu);
            if (Oy.has(yu)) return;
            Oy.add(yu);
            const Eu = yu.length > 80 ? `${yu.slice(0,80)}...` : yu,
              Ku = `No client handler for entity type ${JSON.stringify(Eu)}, so entity ${Ru} is not set up`;
            console.warn(Ku), (0, iy.e)("uncaught", Ku, "unknown_entity_type")
          }(yu, Ru);
          (0, Fy.e)().client.iZ(Ru, uu, new Eu((0, Fy.e)(), Ru, yu))
        }
        const Eu = this.createStateCallbacks(uu);
        if (yu) return this.setupMapSchemaCallbacks(Ru, uu, Eu, "armour"), this.setupScalarField(Ru, uu, Eu, "scale"), this.setupScalarField(Ru, uu, Eu, "ridingVehicleEId"), this.setupScalarField(Ru, uu, Eu, "followingEId"), this.setupScalarField(Ru, uu, Eu, "followingOffset"), void this.setupScalarField(Ru, uu, Eu, "shouldMatchFollowingEntityRotation");
        for (const Ku of ry(uu.constructor)) uu[Ku] instanceof yy.MapSchema ? this.setupMapSchemaCallbacks(Ru, uu, Eu, Ku) : this.setupScalarField(Ru, uu, Eu, Ku)
      }
      setupMapSchemaCallbacks(uu, Ru, yu, Eu) {
        const Ku = yu[Eu],
          Qu = new Map;
        Ku.UH(((yu, Ku) => {
          if (this.onEntityFieldChange(uu, Ru, Eu, {
              key: Ku,
              value: yu
            }), !(yu instanceof yy.Schema)) return;
          const mu = this.createStateCallbacks(yu),
            Ju = [];
          for (const Qu of ry(yu.constructor)) Ju.push(this.listenForFutureChanges(mu, Qu, (() => {
            this.onEntityFieldChange(uu, Ru, Eu, {
              key: Ku,
              value: yu
            })
          })));
          Qu.set(Ku, (() => {
            for (const uu of Ju) uu()
          }))
        })), Ku.JA(((yu, Ku) => {
          var mu;
          null === (mu = Qu.get(Ku)) || void 0 === mu || mu(), Qu.delete(Ku), this.onEntityFieldChange(uu, Ru, Eu, {
            key: Ku,
            value: null
          })
        })), this.addDetacher(uu, (() => {
          for (const uu of Qu.values()) uu();
          Qu.clear()
        }))
      }
      setupScalarField(uu, Ru, yu, Eu) {
        this.onEntityFieldChange(uu, Ru, Eu, Ru[Eu]);
        const Ku = this.listenForFutureChanges(yu, Eu, (yu => {
          this.onEntityFieldChange(uu, Ru, Eu, yu)
        }));
        this.addDetacher(uu, Ku)
      }
      addDetacher(uu, Ru) {
        let yu = this.detachers.get(uu);
        yu || (yu = [], this.detachers.set(uu, yu)), yu.push(Ru)
      }
      detach(uu) {
        for (const yu of null !== (Ru = this.detachers.get(uu)) && void 0 !== Ru ? Ru : []) {
          var Ru;
          yu()
        }
        this.detachers.delete(uu)
      }
      listenForFutureChanges(uu, Ru, yu) {
        return uu.listen(Ru, yu, !1)
      }
      onEntityFieldChange(uu, Ru, yu, Eu) {
        switch (yu) {
          case "ridingVehicleEId": {
            this.promoteIfQueued(Eu);
            const Ru = this.Yr.nH.LRu((0, cy.b)(uu));
            Ru && (Ru.ridingVehicleEId = Eu);
            break
          }
          case "armour":
            this.handleArmourChange(uu, Eu);
            break;
          case "followingEId":
            this.promoteIfQueued(Eu), this.handleFollowingEIdChange(uu, Ru, Eu);
            break;
          case "xRotation":
          case "yRotation":
          case "zRotation":
            this.handleRotationChange(uu, yu, Eu);
            break;
          case "scale":
            this.handleScaleChange(uu, Eu);
            break;
          case "baseRenderHeading":
            this.handleBaseRenderHeadingChange(uu, Eu);
            break;
          case "followingOffset":
            this.handleFollowingOffsetChange(uu, Eu);
            break;
          case "shouldMatchFollowingEntityRotation":
            this.handleShouldMatchFollowingEntityRotationChange(uu, Eu);
            break;
          case "x":
          case "y":
          case "z":
            return void this.handlePositionChange(uu, yu, Eu)
        }(0, Fy.e)().client.updateEntityField(uu, yu, Eu)
      }
      handleArmourChange(uu, Ru) {
        var yu, Eu;
        const {
          key: Ku,
          value: Qu
        } = Ru;
        (0, by.z)(uu, Ku, null !== (yu = null === Qu || void 0 === Qu ? void 0 : Qu.itemName) && void 0 !== yu ? yu : null, null !== (Eu = null === Qu || void 0 === Qu ? void 0 : Qu.enchantmentTier) && void 0 !== Eu ? Eu : null)
      }
      handleFollowingEIdChange(uu, Ru, yu) {
        const Eu = (0, cy.b)(uu),
          Ku = Eu === this.Yr.ZI;
        if (this.Yr.nH.mI(Eu, this.Yr.nH.names.WC), yu) this.Yr.nH.mI(Eu, "smoothToServerPos"), this.Yr.nH.yI(Eu, this.Yr.nH.names.WC, {
          yS: (0, cy.b)(yu),
          offset: Array.from(Ru.followingOffset),
          eyu: Ru.shouldMatchFollowingEntityRotation,
          Iyu: !0,
          Gyu: (uu, Eu) => {
            if (My().copy(uu, Ru.followingOffset), Ru.ridingVehicleEId === yu) {
              const Ru = (0, cy.b)(yu),
                Ku = (0, Fy.e)().getEntityHeading(Ru, Eu);
              My().pr(uu, uu, My().ZERO, Ku)
            }
          }
        });
        else if (!Ku) {
          this.Yr.nH.RRu(Eu, "smoothToServerPos") || this.Yr.nH.yI(Eu, "smoothToServerPos");
          const uu = this.Yr.nH.getState(Eu, "smoothToServerPos"),
            Ru = this.Yr.nH.aZ(Eu).position;
          (0, Py.setServerPosition)(uu, Ru[0], Ru[1], Ru[2])
        }
      }
      handleRotationChange(uu, Ru, yu) {
        const Eu = "xRotation" === Ru ? 0 : "yRotation" === Ru ? 1 : 2;
        for (const Ku of (0, Fy.e)().getFollowingEntities(uu)) {
          const uu = this.Yr.nH.getState(Ku, "meshRotation"),
            Ru = this.Yr.nH.kyu(Ku);
          uu && Ru.eyu && (uu.serverSetRotation[Eu] = yu)
        }
      }
      handleScaleChange(uu, Ru) {
        const yu = (0, cy.b)(uu);
        if (aR.k.Op(`entityScale|${yu}`, Ru), yu === this.Yr.ZI) {
          var Eu;
          (0, Fy.e)().removeFromEyeHeightCache(yu);
          const uu = this.Yr.nH.WRu(this.Yr.ZI),
            Ru = null !== (Eu = null === uu || void 0 === uu ? void 0 : uu.physicsState) && void 0 !== Eu ? Eu : {
              type: Ly.n.DEFAULT,
              tier: null
            };
          return void(0, Fy.e)().updatePositionAndPhysics(this.Yr.ZI, Ru, !1)
        }
        const Ku = (0, Fy.e)().getLifeformType(yu);
        if (null === Ku) return;
        const {
          physicsBodyWidth: Qu,
          physicsBodyHeight: mu
        } = (0, hy.d)(Ru, Ku);
        this.Yr.nH.byu(yu, Qu, mu, Qu)
      }
      handleBaseRenderHeadingChange(uu, Ru) {
        const yu = this.Yr.nH.getState(uu, "meshRotation");
        yu && (yu.baseRenderRotation[1] = Ru);
        for (const Eu of (0, Fy.e)().getFollowingEntities(uu)) {
          const uu = this.Yr.nH.getState(Eu, "meshRotation"),
            yu = this.Yr.nH.kyu(Eu);
          uu && yu.eyu && (uu.baseRenderRotation[1] = Ru)
        }
      }
      handleFollowingOffsetChange(uu, Ru) {
        const yu = this.Yr.nH.kyu((0, cy.b)(uu));
        if (yu && yu.offset) {
          const uu = Ru ? Array.from(Ru) : My().ZERO;
          yu.offset[0] = uu[0], yu.offset[1] = uu[1], yu.offset[2] = uu[2]
        }
      }
      handleShouldMatchFollowingEntityRotationChange(uu, Ru) {
        const yu = this.Yr.nH.kyu((0, cy.b)(uu));
        yu && (yu.eyu = null === Ru || void 0 === Ru || Ru)
      }
      handlePositionChange(uu, Ru, yu) {
        if (this.Yr.nH.RRu(uu, "smoothToServerPos")) {
          const Eu = this.Yr.nH.getState(uu, "smoothToServerPos");
          (0, Py.setServerPositionAxis)(Eu, vy[Ru], yu)
        }
      }
      setupItemHandlers() {
        this.roomStateCallbacks.items.UH(((uu, Ru) => {
          this.allItems[Ru] = uu, (0, zy.h)(this.Yr, Ru, [uu.x, uu.y, uu.z], uu.id, {
            amount: uu.amount,
            attributes: JSON.parse(uu.attributes),
            NE: (0, fR.e)(this.Yr).cantPickUpItem(Ru),
            size: uu.size,
            predictedAt: (0, Fy.e)().client.itemDropPrediction.onServerItemAdded(Ru)
          });
          const yu = this.createStateCallbacks(uu);
          for (const Eu of ry(my)) this.onItemFieldChange(Ru, Eu, uu[Eu]), this.addDetacher(Ru, this.listenForFutureChanges(yu, Eu, (uu => {
            this.onItemFieldChange(Ru, Eu, uu)
          })))
        })), this.roomStateCallbacks.items.JA(((uu, Ru) => {
          delete this.allItems[Ru], this.detach(Ru), (0, Fy.e)().client.itemDropPrediction.onServerItemRemoved(Ru), this.Yr.nH.RRu(Ru, this.Yr.nH.names.itemState) && this.Yr.nH.deleteEntity(Ru), (0, fR.e)(this.Yr).disposeEntity(Ru)
        }))
      }
      onItemFieldChange(uu, Ru, yu) {
        if (Ru in vy) {
          if (this.Yr.nH.RRu(uu, "itemState")) {
            const Eu = this.Yr.nH.getState(uu, "smoothToServerPos");
            (0, Py.setServerPositionAxis)(Eu, vy[Ru], yu), (0, Fy.e)().client.itemDropPrediction.onServerItemMoved(uu)
          }
          return
        }
        if (!this.Yr.nH.RRu(uu, "itemState")) return;
        const Eu = this.Yr.nH.getState(uu, "itemState");
        "amount" === Ru && yu !== Eu.amount && (Eu.creationTime = Date.now()), Eu[Ru] = "attributes" === Ru ? JSON.parse(yu) : yu
      }
      dispose() {
        if (!this.VS) {
          this.VS = !0, this.Yr.off("beforeInputs", this.onFrame), this.Yr.off("sr", this.vW), this.queuedSetups.clear(), this.promotedSetups.clear();
          for (const uu of this.deferredSetups.values()) aR.k.unsubscribe(uu);
          this.deferredSetups.clear(), this.Yr.nH.mI(this.Yr.ZI, this.Yr.nH.names.WC);
          for (const uu in this.allItems) this.Yr.nH.deleteEntity(uu), delete this.allItems[uu];
          for (const uu of [...this.detachers.keys()]) this.detach(uu);
          (0, fR.e)(this.Yr).clear();
          for (const uu of (0, Fy.e)().client.iterateEntityIds())(0, Fy.e)().client.disposeEntity(uu)
        }
      }
    }
    const oy = [0, 0, 0];

    function qy(uu) {
      if ("string" !== typeof uu) return;
      const Ru = uu.indexOf("|"),
        yu = -1 === Ru ? uu : uu.slice(0, Ru),
        Eu = fy();
      return Object.hasOwn(Eu, yu) ? Eu[yu] : void 0
    }
    const Oy = new Set;
    const vy = {
      x: 0,
      y: 1,
      z: 2
    };
    let ay = null;

    function fy() {
      return null !== ay || (ay = {
        ...Object.fromEntries(Ky.l.map((uu => {
          const {
            UV: Ru
          } = (0, wy.b)(uu);
          return [uu, Ru]
        }))),
        Pebble: Sy.c,
        Snowball: Sy.c,
        "Snowball Launcher": Sy.c,
        "Reinforced Pebble": Sy.c,
        Bullet: Sy.c,
        "Reinforced Ball": Sy.c,
        Ball: Sy.c,
        Mango: Sy.c,
        "Moonstone Orb": Sy.c,
        ...Object.fromEntries(Ey.u.map((uu => [(0, Hy.hc)(uu), Sy.c]))),
        Arrow: Sy.c,
        "Arrow of Speed": Sy.c,
        "Arrow of Poison": Sy.c,
        "Arrow of Slowness": Sy.c,
        "Arrow of Weakness": Sy.c,
        "Arrow of Knockback": Sy.c,
        "Arrow of Strength": Sy.c,
        "Arrow of Invisibility": Sy.c,
        "Arrow of Jumping": Sy.c,
        "Arrow of Defense": Sy.c,
        "Arrow of Instant Healing": Sy.c,
        "Arrow of Instant Damage": Sy.c,
        "Arrow of Regeneration": Sy.c,
        "Arrow of Haste": Sy.c,
        "Arrow of Shield": Sy.c,
        "Arrow of Double Jump": Sy.c,
        "Arrow of Heat Resistance": Sy.c,
        "Arrow of X-Ray Vision": Sy.c,
        "Arrow of Mining Yield": Sy.c,
        "Arrow of Brain Rot": Sy.c,
        "Arrow of Milk": Sy.c,
        Fireball: Sy.c,
        "Bouncy Bomb": Sy.c,
        RPG: Sy.c,
        "Obby RPG": Sy.c,
        "Super RPG": Sy.c,
        "Grenade Launcher": Sy.c,
        Iceball: Sy.c,
        Coconut: Sy.c,
        "Splash Speed Potion": Sy.c,
        "Splash Defense Potion": Sy.c,
        "Splash Strength Potion": Sy.c,
        "Splash Invisibility Potion": Sy.c,
        "Splash Jump Potion": Sy.c,
        "Splash Knockback Potion": Sy.c,
        "Splash Poison Potion": Sy.c,
        "Splash Speed Potion II": Sy.c,
        "Splash Defense Potion II": Sy.c,
        "Splash Strength Potion II": Sy.c,
        "Splash Jump Potion II": Sy.c,
        "Splash Knockback Potion II": Sy.c,
        "Splash Poison Potion II": Sy.c,
        "Splash Slowness Potion": Sy.c,
        "Splash Slowness Potion II": Sy.c,
        "Splash Weakness Potion": Sy.c,
        "Splash Weakness Potion II": Sy.c,
        "Splash Milk Potion": Sy.c,
        "Splash Instant Damage Potion": Sy.c,
        "Splash Instant Damage Potion II": Sy.c,
        "Splash Instant Healing Potion": Sy.c,
        "Splash Instant Healing Potion II": Sy.c,
        "Splash Regeneration Potion": Sy.c,
        "Splash Regeneration Potion II": Sy.c,
        "Splash Haste Potion": Sy.c,
        "Splash Haste Potion II": Sy.c,
        "Splash Shield Potion": Sy.c,
        "Splash Shield Potion II": Sy.c,
        "Splash Double Jump Potion": Sy.c,
        "Splash Heat Resistance Potion": Sy.c,
        "Splash X-Ray Vision Potion": Sy.c,
        "Splash Mining Yield Potion": Sy.c,
        "Splash Mining Yield Potion II": Sy.c,
        "Splash Brain Rot Potion": Sy.c,
        "Yellow Paintball Gun": Sy.c,
        "White Paintball Gun": Sy.c,
        "Red Paintball Gun": Sy.c,
        "Purple Paintball Gun": Sy.c,
        "Pink Paintball Gun": Sy.c,
        "Orange Paintball Gun": Sy.c,
        "Magenta Paintball Gun": Sy.c,
        "Lime Paintball Gun": Sy.c,
        "Light Gray Paintball Gun": Sy.c,
        "Light Blue Paintball Gun": Sy.c,
        "Green Paintball Gun": Sy.c,
        "Gray Paintball Gun": Sy.c,
        "Cyan Paintball Gun": Sy.c,
        "Brown Paintball Gun": Sy.c,
        "Blue Paintball Gun": Sy.c,
        "Black Paintball Gun": Sy.c,
        "Yellow Heavy Paintball Gun": Sy.c,
        "White Heavy Paintball Gun": Sy.c,
        "Red Heavy Paintball Gun": Sy.c,
        "Purple Heavy Paintball Gun": Sy.c,
        "Pink Heavy Paintball Gun": Sy.c,
        "Orange Heavy Paintball Gun": Sy.c,
        "Magenta Heavy Paintball Gun": Sy.c,
        "Lime Heavy Paintball Gun": Sy.c,
        "Light Gray Heavy Paintball Gun": Sy.c,
        "Light Blue Heavy Paintball Gun": Sy.c,
        "Green Heavy Paintball Gun": Sy.c,
        "Gray Heavy Paintball Gun": Sy.c,
        "Cyan Heavy Paintball Gun": Sy.c,
        "Brown Heavy Paintball Gun": Sy.c,
        "Blue Heavy Paintball Gun": Sy.c,
        "Black Heavy Paintball Gun": Sy.c,
        "Toxin Ball": Sy.c,
        "Splash Aura XP Potion": Sy.c,
        "Splash Aura XP Potion II": Sy.c,
        "Arrow of Aura XP": Sy.c,
        Firecracker: Sy.c,
        "Rainbow Firecracker": Sy.c,
        "White Firecracker": Sy.c,
        "Orange Firecracker": Sy.c,
        "Magenta Firecracker": Sy.c,
        "Light Blue Firecracker": Sy.c,
        "Yellow Firecracker": Sy.c,
        "Lime Firecracker": Sy.c,
        "Pink Firecracker": Sy.c,
        "Gray Firecracker": Sy.c,
        "Light Gray Firecracker": Sy.c,
        "Cyan Firecracker": Sy.c,
        "Purple Firecracker": Sy.c,
        "Blue Firecracker": Sy.c,
        "Brown Firecracker": Sy.c,
        "Green Firecracker": Sy.c,
        "Red Firecracker": Sy.c,
        "Black Firecracker": Sy.c,
        "Firecracker Pebble": Sy.c,
        "Rainbow Firecracker Pebble": Sy.c,
        "White Firecracker Pebble": Sy.c,
        "Orange Firecracker Pebble": Sy.c,
        "Magenta Firecracker Pebble": Sy.c,
        "Light Blue Firecracker Pebble": Sy.c,
        "Yellow Firecracker Pebble": Sy.c,
        "Lime Firecracker Pebble": Sy.c,
        "Pink Firecracker Pebble": Sy.c,
        "Gray Firecracker Pebble": Sy.c,
        "Light Gray Firecracker Pebble": Sy.c,
        "Cyan Firecracker Pebble": Sy.c,
        "Purple Firecracker Pebble": Sy.c,
        "Blue Firecracker Pebble": Sy.c,
        "Brown Firecracker Pebble": Sy.c,
        "Green Firecracker Pebble": Sy.c,
        "Red Firecracker Pebble": Sy.c,
        "Black Firecracker Pebble": Sy.c,
        "Blinding Pebble": Sy.c,
        Poop: Sy.c,
        "Wood Boomerang": Sy.c,
        "Stone Boomerang": Sy.c,
        "Iron Boomerang": Sy.c,
        "Gold Boomerang": Sy.c,
        "Diamond Boomerang": Sy.c,
        "Amethite Boomerang": Sy.c,
        "Magmasteel Boomerang": Sy.c,
        "Rubellite Boomerang": Sy.c,
        "Serpentite Boomerang": Sy.c,
        "Moonstone Boomerang": Sy.c,
        "67 Base Projectile": Sy.c,
        "67 Boosted Projectile": Sy.c,
        "Capitano Grenade": Sy.c,
        "Scatter Pellet": Sy.c,
        "Lucky Bomb": Sy.c,
        "Unlucky Bomb": Sy.c,
        "Swap Orb": Sy.c,
        Mesh: sy,
        AudioEntity: ly
      }), ay
    }
  },
  38732: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Qu,
      f: () => mu
    });
    var Eu = yu(610),
      Ku = yu(37489);
    const Qu = 4e4;
    class mu {
      constructor() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now;
        this.now = uu, this.editedAt = new Map, this.lastChunkX = NaN, this.lastChunkY = NaN, this.lastChunkZ = NaN, this.lastChunkId = ""
      }
      noteEdit(uu, Ru, yu) {
        const Qu = (0, Eu.N)(uu),
          mu = (0, Eu.N)(Ru),
          Ju = (0, Eu.N)(yu),
          Nu = this.now();
        if (Qu !== this.lastChunkX || mu !== this.lastChunkY || Ju !== this.lastChunkZ) {
          this.lastChunkX = Qu, this.lastChunkY = mu, this.lastChunkZ = Ju, this.lastChunkId = (0, Ku.b)(Qu, mu, Ju), this.editedAt.delete(this.lastChunkId), this.editedAt.set(this.lastChunkId, Nu);
          for (const [uu, Ru] of this.editedAt) {
            if (Ru >= Nu - 3e5) break;
            this.editedAt.delete(uu)
          }
        } else this.editedAt.set(this.lastChunkId, Nu)
      }
      chunksEditedSince(uu) {
        const Ru = [];
        for (const [yu, Eu] of this.editedAt) Eu >= uu && Ru.push(yu);
        return Ru
      }
    }
  },
  38827: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => XR,
      i: () => cR,
      k: () => MR,
      o: () => LR
    });
    var Eu = yu(3490),
      Ku = yu(8495),
      Qu = yu(36515),
      mu = yu(1389),
      Ju = yu(36545),
      Nu = yu(38775),
      Xu = yu(38706),
      Vu = yu(3574),
      ru = yu(37635),
      Bu = yu(1215),
      xu = yu(330),
      Su = yu(34),
      pu = yu(1878),
      Tu = yu(106),
      Wu = yu(47),
      ju = yu(1915),
      Hu = yu(1823),
      du = yu(2765);
    class bu {
      constructor(uu) {
        this.storeForMs = uu, this.clicks = new du.b
      }
      click() {
        this.clicks.enqueue(Date.now());
        const uu = Date.now() - this.storeForMs;
        for (; this.clicks.size > 0 && this.clicks.peek() < uu;) this.clicks.dequeue()
      }
      getNumClicksInMs(uu) {
        let Ru = 0;
        return this.clicks.forEach((yu => {
          yu > Date.now() - uu && Ru++
        })), Ru
      }
      getMaxClickSeparationInMs(uu) {
        if (0 === this.clicks.size) return this.storeForMs;
        let Ru = 0,
          yu = Date.now() - uu;
        this.clicks.forEach((Eu => {
          Eu < Date.now() - uu || (Ru = Math.max(Ru, Math.abs(Eu - yu)), yu = Eu)
        }));
        const Eu = Math.abs(Date.now() - yu);
        return Math.max(Ru, Eu)
      }
    }
    class Cu {
      constructor(uu) {
        this.storeForMs = uu, this.clickDownDurations = new du.b
      }
      registerClickDownDuration(uu) {
        this.clickDownDurations.enqueue({
          dur: uu,
          atTime: Date.now()
        });
        const Ru = Date.now() - this.storeForMs;
        for (; this.clickDownDurations.size > 0 && this.clickDownDurations.peek().atTime < Ru;) this.clickDownDurations.dequeue()
      }
      clickDownDurationsCheck(uu) {
        if (uu > this.storeForMs) return console.error("overDuration is greater than storeForMs"), "0:0";
        let Ru = 0,
          yu = 0;
        return this.clickDownDurations.forEach((Eu => {
          Eu.atTime > Date.now() - uu && (Ru++, yu = Math.max(yu, Eu.dur))
        })), `${Ru}:${yu}`
      }
    }
    var ku = yu(36341),
      eu = yu(38836),
      Au = yu(27),
      Du = yu(2632),
      Mu = yu(1280),
      Iu = yu(38746),
      Gu = yu(4201),
      Uu = yu(145),
      nu = yu(37909),
      su = yu(38152),
      tu = yu(610),
      lu = yu(36332),
      gu = yu(13),
      cu = yu(9158),
      Lu = yu(1199),
      zu = yu(212),
      Fu = yu(38841),
      wu = yu(38844),
      Zu = yu(37947),
      hu = yu(38855),
      Pu = yu(37838),
      iu = yu(3199),
      Yu = yu(1583),
      ou = yu(36445),
      qu = yu(2707),
      Ou = yu(38847),
      vu = yu(37692);
    const au = {
      forward: "freeCamForward",
      backward: "freeCamBackward",
      left: "freeCamLeft",
      right: "freeCamRight",
      jump: "freeCamUp",
      crouch: "freeCamDown"
    };

    function fu() {
      var uu, Ru;
      return !(null === (uu = (0, Du.e)().client) || void 0 === uu || null === (Ru = uu.freeCameraController) || void 0 === Ru || !Ru.movesFly())
    }

    function uR(uu) {
      const Ru = uu.on.bind(uu);
      uu.on = (uu, yu) => {
        ju.C.has(uu) ? Ru(uu, yu) : Ru(uu, (Ru => {
          var Eu;
          return null !== (Eu = (0, Du.e)().client) && void 0 !== Eu && Eu.isReplayMode() ? function(uu) {
            return uu in au
          }(uu) && fu() ? yu(Ru) : void 0 : yu(Ru)
        }))
      }
    }
    const RR = 5e3,
      yR = 1;
    let ER, KR = yR,
      QR = 0;
    const mR = !0;
    let JR = mR;
    pu.b.subscribe("_ignoreBasicBoards", (uu => {
      JR = uu
    })), (0, Eu.onGameReset)((() => {
      JR = mR
    }));
    let NR = null;
    const XR = () => NR;
    let VR, rR, BR;
    var xR, SR, pR, TR, WR, jR, HR, dR, bR;
    const CR = [42, 0, 1, "h", "c", "a", 9, "g", 5, 198, "d", 8, 255, "length", "e", "b", 184, "undefined", void 0, 215, 3, 2, 63, 6, "fromCodePoint", 7, 12, "push", 67, "i", 91, 149, 8191, 88, 13, 14, 87, 148, 105, 145, 130, 64, 101, 4, 60, "=", ";", 239, 238, 180, 20, 150, 39, 116, "f", 128, 134, 195, 181, 139, 201, 138, 16, 99, 512, 43, 217, 84, 100, 228, 15, 81, 213, 182, 25, 249, 120, 56, 129, 1023, 127, 31, 18, 218, 24, 32, 10, 19, 73, 65535, null, 17, 113, 11, 192, 199, 169, 202, !1, 224, 40, 33554432, 67108864, 186, 241, 28, 55, 75, !0, 234, 244, 83, 21, 30];

    function kR(...uu) {
      return uu[CR[13]] = CR[2], typeof TR !== CR[17] && TR ? (new TR).decode(new WR(uu[CR[1]])) : typeof jR !== CR[17] && jR ? jR.from(uu[CR[1]]).toString("utf-8") : bR(uu[CR[1]])
    }

    function eR(uu, Ru, yu) {
      if (uu === function(uu) {
          return typeof xR[uu] === CR[17] ? xR[uu] = function(...uu) {
            for (DR(uu[CR[13]] = CR[2], uu[CR[5]] = '@mEUnALcGKNDBRhteJjPpZsSrCgXakWMiQFdbH%49TYO<6f[I5"^{v_qlo;Vx>2|)$#*/1=+uw&y?`z],.(7!8:3}0~', uu[CR[15]] = "" + (uu[CR[1]] || ""), uu[-CR[28]] = uu[CR[15]].length, uu[CR[36]] = [], uu[CR[14]] = CR[1], uu[CR[31]] = CR[1], uu[CR[25]] = -CR[2]), uu[CR[11]] = CR[1]; uu[CR[11]] < uu[-CR[28]]; uu[CR[11]]++)
              if (uu[CR[29]] = uu[CR[5]].indexOf(uu[CR[15]][uu[CR[11]]]), uu[CR[29]] !== -CR[2])
                if (uu[CR[25]] < CR[1]) uu[CR[25]] = uu[CR[29]];
                else {
                  DR(uu[CR[25]] += uu[CR[29]] * CR[30], uu[CR[14]] |= uu[CR[25]] << uu[CR[31]], uu[CR[31]] += (uu[CR[25]] & CR[32]) > CR[33] ? CR[34] : CR[35]);
                  do {
                    DR(uu[CR[36]].push(uu[CR[14]] & CR[12]), uu[CR[14]] >>= CR[11], uu[CR[31]] -= CR[11])
                  } while (uu[CR[31]] > CR[25]);
                  uu[CR[25]] = -CR[2]
                } return uu[CR[25]] > -CR[2] && uu[CR[36]].push((uu[CR[14]] | uu[CR[25]] << uu[CR[31]]) & CR[12]), kR(uu[CR[36]])
          }(SR[uu]) : xR[uu]
        }(CR[36])) return Ru + yu
    }

    function AR() {}

    function DR() {
      DR = function() {}
    }

    function MR(uu) {
      function Ru() {
        return uu.nH.Xyu(uu.ZI)
      }
      uR(uu.inputs.down), uR(uu.inputs.up);
      for (const Eu of ["forward", "backward", "left", "right", "sprint", "jump", "crouch"]) {
        const Ru = (Ru, yu) => {
          var Ku, Qu;
          if (fu()) {
            var mu;
            const Ku = au[Eu];
            var Ju, Nu;
            if (Ku) null === (Ju = (0, Du.e)().client) || void 0 === Ju || null === (Nu = Ju.freeCameraController) || void 0 === Nu || Nu.handlefreeCamKeyPress(Ku, Ru, yu);
            return void(yu || null !== (mu = (0, Du.e)().client) && void 0 !== mu && mu.isReplayMode() || (uu.nH.Syu()[Eu] = !1))
          }
          if (null !== (Ku = (0, Du.e)().client) && void 0 !== Ku && null !== (Qu = Ku.freeCameraController) && void 0 !== Qu && Qu.isKeyPressOverriden(Ru)) return;
          uu.nH.Syu()[Eu] = yu
        };
        uu.inputs.down.on(Eu, (uu => Ru(uu, !0))), uu.inputs.up.on(Eu, (uu => Ru(uu, !1)))
      }
      uu.inputs.down.on("crouch", (() => {
        if (fu()) return;
        if (!uu.IH.canCrouch) return;
        const Ru = uu.nH.Syu();
        Au.d.get("clientEscMenuOptions").crouchIsToggle && (Ru.crouchToggled = !Ru.crouchToggled && !Ru.padSneakToggled), Ru.padSneakToggled = !1
      }));
      const yu = () => {
        const uu = Ru();
        uu.isGun() && uu.inaccuracyCalculator.jump()
      };
      uu.inputs.down.on("jump", (uu => {
        fu() || (yu(), VR(uu))
      }));
      for (const Eu of ju.m) uu.inputs.down.on(Eu, (uu => {
        var Ru, yu;
        null !== (Ru = (0, Du.e)().client) && void 0 !== Ru && null !== (yu = Ru.freeCameraController) && void 0 !== yu && yu.handlefreeCamKeyPress(Eu, uu, !0) && (uu.preventDefault(), uu.stopPropagation())
      })), uu.inputs.up.on(Eu, (uu => {
        var Ru, yu;
        null !== (Ru = (0, Du.e)().client) && void 0 !== Ru && null !== (yu = Ru.freeCameraController) && void 0 !== yu && yu.handlefreeCamKeyPress(Eu, uu, !1) && (uu.preventDefault(), uu.stopPropagation())
      }));
      uu.inputs.down.on("recordGame", (() => {
        var uu, Ru;
        null === (uu = (0, Du.e)().client) || void 0 === uu || null === (Ru = uu.gameRecorder) || void 0 === Ru || Ru.toggleRecording()
      })), uu.inputs.down.on("recordClip", (() => {
        var uu, Ru;
        (0, ku.e)() || null === (uu = (0, Du.e)().client) || void 0 === uu || null === (Ru = uu.gameRecorder) || void 0 === Ru || Ru.saveClip()
      }));
      for (const Eu of ju.C) uu.inputs.down.on(Eu, (() => {
        var uu;
        if ((0, eu.b)()) return;
        if ("replayViewerOpen" === Eu) return void Su.k.Op("replayViewer|requested", "toggle");
        const Ru = null === (uu = (0, Du.e)().client) || void 0 === uu ? void 0 : uu.gameReplayer;
        ((0, ku.e)() || null !== Ru && void 0 !== Ru && Ru.isReplayMode()) && (null === Ru || void 0 === Ru || Ru.handleAction(Eu))
      }));
      const mu = new bu(3e4),
        ru = new Cu(4e4);
      let Wu = 0;
      const du = uu => {
          let Ru = 0,
            yu = null;
          const Eu = Ru => null !== Ru && Ru === yu && (yu = null, uu(), !0);
          return {
            press: () => (Ru++, (0, Fu.d)() || (Eu(yu), yu = Ru), Ru),
            owns: uu => uu === yu,
            release: Eu
          }
        },
        Gu = (uu, yu) => {
          yu && LR(Bu.e.TouchDownFirePrimary), uu ? cu() : ((0, su.d)(), Ru().QEu()), yu || LR(Bu.e.DownFirePrimary), cR(!0), mu.click();
          const Ku = mu.getMaxClickSeparationInMs(3e4) < 1e3 / 30,
            Qu = mu.getMaxClickSeparationInMs(1e4) < 20,
            Ju = mu.getMaxClickSeparationInMs(4e3) < 1e3 / 70;
          if (Ku || Qu || Ju) {
            let uu;
            if (Ku) uu = 30;
            else if (Qu) uu = 50;
            else {
              if (!Ju) throw new Error("???");
              uu = 70
            }(0, Eu.sendColyMessage)(Vu.Kj, uu)
          }
        },
        Uu = du((() => {
          const uu = Date.now() - Wu;
          ru.registerClickDownDuration(uu), Ru().yEu(), LR(Bu.e.UpFirePrimary), cR(!1);
          const yu = ru.clickDownDurationsCheck(4e4);
          (0, Eu.sendColyMessage)(Vu.lg, yu)
        }));
      let nu = 0;
      uu.inputs.down.on("primary-fire", (function(uu) {
        nu = Uu.press(), Uu.owns(nu) && (Wu = Date.now(), Math.abs(performance.now() - uu.timeStamp) > 5e3 || (Gu(uu.altKey, "changedTouches" in uu), VR(uu)))
      })), uu.inputs.up.on("primary-fire", (function(uu) {
        Uu.release(nu) && VR(uu, !0)
      }));
      const tu = () => {
          Ru().zXu(), LR(Bu.e.DownFireSecondary), cR(!0), uu.huu && !uu.huu.position && (0, Xu.i)()
        },
        lu = du((() => {
          Ru().REu(), LR(Bu.e.UpFireSecondary), cR(!1)
        }));
      let gu = 0;
      uu.inputs.down.on("alt-fire", (function(uu) {
        gu = lu.press(), lu.owns(gu) && (tu(), VR(uu))
      })), uu.inputs.up.on("alt-fire", (function(uu) {
        lu.release(gu) && VR(uu, !0)
      }));
      const cu = () => Ru().ZXu();
      uu.inputs.down.on("mid-fire", (() => {
        (0, Fu.d)() || cu()
      }));
      const hu = uu => {
          (0, Eu.sendColyMessage)(Vu.zh, uu, !0)
        },
        ER = uu => {
          (0, Eu.sendColyMessage)(Vu.Dh, {
            WJ: uu,
            jJ: mR()
          }, !0)
        };
      for (const Eu of ["SpecialAction1", "SpecialAction2"]) uu.inputs.down.on(Eu, (() => {
        hu(Eu)
      })), uu.inputs.up.on(Eu, (() => {
        ER(Eu)
      }));
      const QR = () => {
        const uu = Ru();
        uu.isGun() && uu.reload(Date.now())
      };
      uu.inputs.down.on("ReloadGun", QR);
      const mR = () => {
        let Ru = "a";
        return uu.physics.testSolid.toString().includes("SB") || (Ru = "b"), Ru
      };
      uu.inputs.down.on("OpenInventory", (uu => {
        uu.preventDefault(), (0, Yu.y)(uu, "inventory", (0, wu.c)((0, Du.h)()))
      })), uu.inputs.bind("ShiftHeld", "ShiftLeft", "ShiftRight");
      const JR = uu => {
        Su.k.Op("DropItemKeyPressed", uu)
      };
      uu.inputs.down.on("DropItem", (() => {
        JR(uu.nH.Syu().crouch)
      })), uu.inputs.down.on("OpenShop", (Ru => {
        (0, ku.e)() || "inGame" === Au.d.get("gameState") && (0, Yu.u)(Ru, xu.s.SHOP, !(0, Ku.c)(uu.IH.shopInfo))
      })), uu.inputs.down.on("OpenLobbyLeaderboard", (Ru => {
        (0, ku.e)() || "inGame" === Au.d.get("gameState") && (0, Yu.u)(Ru, xu.s.LOBBY_LEADERBOARD, !!uu.IH.lobbyLeaderboardInfo)
      })), uu.inputs.down.on("HideUi", (() => {
        Su.k.Op("showUi", !1)
      })), uu.inputs.up.on("HideUi", (() => {
        Su.k.Op("showUi", !0)
      }));
      const XR = uu => {
        0 === uu && (uu = 10), Su.k.Op("setSelectedInventorySlotI", uu - 1), Su.k.Op("numkeyPressed", uu)
      };
      for (let Eu = 1; Eu <= 10; Eu++) uu.inputs.down.on("HotBarSlot" + Eu.toString(), (() => {
        XR(Eu)
      }));
      uu.inputs.down.on("OpenTasksAndLeaderboard", (Ru => {
        const yu = (0, ou.m)();
        yu ? (0, Yu.B)(Ru, !0, yu) : (0, Yu.y)(Ru, "retentionFeatures", !(!uu.IH._tasks && !uu.IH._availableLeaderboards))
      })), uu.inputs.down.on("OpenCodeEditor", (Ru => {
        (0, Yu.B)(Ru, (0, Iu.e)((0, Mu.c)()), (() => {
          Su.k.Op("EditLobbyCode", uu.nH.mH(uu.ZI).map(Math.floor))
        }))
      })), uu.inputs.bind("ToggleFullCoordinateOverlay", "F3"), uu.inputs.down.on("ToggleFullCoordinateOverlay", (() => {
        Su.k.Op("toggleFullCoordinateOverlay")
      }));
      const BR = () => {
        (0, Du.e)().client.cameraController.swapCameraZoom()
      };
      uu.inputs.down.on("SwapCameraZoom", BR), uu.inputs.down.on("OpenInviteLink", (uu => {
        (0, Yu.y)(uu, "inviteLink", Tu.featureFlags.canUseInviteLinks)
      })), uu.inputs.bind("Y", "KeyY"), uu.inputs.down.on("Y", (uu => {
        (0, ku.e)() || Su.k.Op("YKeyPressed")
      })), uu.inputs.bind("X", "KeyX"), uu.inputs.down.on("X", (uu => {
        (0, ku.e)() || Su.k.Op("XKeyPressed")
      })), uu.inputs.down.on("OpenEmoteWheel", (() => {
        Su.k.Op("requestEmoteWheelHoldOpen")
      })), uu.inputs.up.on("OpenEmoteWheel", (() => {
        Su.k.Op("requestEmoteWheelHoldRelease")
      })), uu.inputs.down.on("Zoom", (() => {
        if ("inGame" === Au.d.get("gameState")) {
          uu.nH.getState(uu.ZI, "playerCameraAdjustment").zoomKeyPressed = !0, (0, Du.e)().client.cameraController.handleZoomKeyPressed()
        }
      })), uu.inputs.up.on("Zoom", (() => {
        uu.nH.getState(uu.ZI, "playerCameraAdjustment").zoomKeyPressed = !1
      })), IR();
      const xR = uu => function() {
        return rR(), uu(...arguments)
      };

      function SR(uu) {
        "inGame" !== Au.d.get("gameState") || (0, Yu.t)() || (Su.k.Op("ctrlCrouchWithoutFullscreen"), uu.preventDefault())
      }
      NR = {
        primaryFireDown: xR((() => {
          const uu = Uu.press();
          return Uu.owns(uu) && (Wu = Date.now(), Gu(!1, !1)), uu
        })),
        primaryFireUp: xR((uu => {
          Uu.release(uu)
        })),
        altFireDown: xR((() => {
          const uu = lu.press();
          return lu.owns(uu) && tu(), uu
        })),
        altFireUp: xR((uu => {
          lu.release(uu)
        })),
        jumpDown: xR(yu),
        specialActionDown: xR(hu),
        specialActionUp: xR(ER),
        reloadGun: xR(QR),
        dropItem: xR(JR),
        swapCameraZoom: xR(BR),
        pickBlock: xR(cu)
      }, uu.inputs.down.on("ctrlCrouch", SR), uu.inputs.up.on("ctrlCrouch", SR), uu.inputs.bind("ctrlCrouch", "ControlLeft");
      const pR = uu => {
        "inGame" === Au.d.get("gameState") && uu.ctrlKey && !(0, Yu.t)() && uu.preventDefault()
      };
      document.addEventListener("keydown", pR), document.addEventListener("keyup", pR), document.addEventListener("keypress", pR), uu.inputs.bind("Alt", "AltLeft", "AltRight"), uu.inputs.down.on("Alt", (uu => {
        uu.preventDefault()
      }));
      const TR = Ru => (0, Pu.e)(uu, Ru),
        WR = Ru => (0, Pu.f)(uu, Ru),
        jR = [0, 0, 0],
        HR = [0, 0, 1];
      uu.on("afterRender", (Ru => {
        (0, Qu.h)(uu.camera.heading), (0, Pu.i)(uu, jR, HR), (0, Du.e)().client.triggerGameCallback("onAfterRender", Ru, {
          cameraHeading: uu.camera.heading,
          cameraPitch: uu.camera.pitch,
          cameraPosition: jR,
          cameraDirection: HR,
          tanHalfFovX: (0, Pu.b)(uu),
          tanHalfFovY: Math.tan(uu.oS.LO().fov / 2),
          screenBandPct: {
            x: iu.b,
            y: (0, iu.l)()
          },
          projectWorldPosToScreenPos: TR,
          projectWorldPosToViewport: WR
        })
      })), (0, qu.m)("look") && (uu.camera.uF = (0, Ou.e)("js"), uu.inputs.mw = Ou.d), (0, qu.m)("remesh") && (0, vu.l)(uu), uu.on("beforeInputs", (() => {
        if ((0, eu.b)()) return uu.inputs.Jw.dx = 0, void(uu.inputs.Jw.dy = 0);
        if (uu.camera.Jw.dx += uu.inputs.Jw.dx, uu.camera.Jw.dy += uu.inputs.Jw.dy, 0 !== uu.inputs.Jw.dx || 0 !== uu.inputs.Jw.dy) {
          uu.nH.getState(uu.ZI, "playerCameraAdjustment").lastPointerMove = Date.now()
        }
        uu.inputs.Jw.dx = 0, uu.inputs.Jw.dy = 0
      }));
      let dR = 0;
      uu.on("sr", (function(Ru) {
        Su.k.Op("noaTick", Ru);
        const yu = (0, Du.e)().client;
        if (yu.triggerGameCallback("sr", Ru), yu.isClientGameSessionActive()) try {
          Nu.b.sr(Ru)
        } catch (mu) {
          console.error("Error ticking audio entities", mu)
        }
        if (!uu.nH.Jyu(uu.ZI).isAlive) return;
        Date.now() - dR > 9e3 && (! function() {
          const uu = (0, Du.h)();
          "number" === typeof uu.IH.speedMultiplier && "number" === typeof uu.IH.jumpAmount && (0, Eu.sendColyMessage)(Vu._h, {
            sm: (0, Lu.c)(uu.IH.speedMultiplier),
            lm: (0, Lu.b)(uu.IH.jumpAmount),
            gm: (0, Lu.c)(uu.IH.crouchingSpeed),
            Lm: (0, Lu.c)(uu.IH.walkingSpeed),
            zm: (0, Lu.c)(uu.IH.runningSpeed),
            Fm: (0, Lu.b)(uu.tuu),
            wm: uu.nH.WRu(uu.ZI).jumpForce,
            Zm: uu.nH.aZ(1).width,
            hm: uu.nH.aZ(1).height,
            Pm: uu.nH.Al(1).Pm
          }, !0)
        }(), dR = Date.now());
        const Ku = uu.nH.Syu();
        if ((Ku.jump || Ku.forward || Ku.backward || Ku.left || Ku.right || Ku.sprint) && Su.k.Op("usedKeyboard"), uu.nH.hRu(uu.ZI) && !0 === uu.IH.canPickUpItems) {
          const Ru = uu.nH.mH(uu.ZI),
            yu = (0, Hu.k)(KR),
            Ku = (0, Hu.l)(KR),
            Qu = [Ru[0] - yu, Ru[1] - .6 * Ku, Ru[2] - yu],
            mu = [Ru[0] + yu, Ru[1] + zu.f.UW + .6 * Ku, Ru[2] + yu],
            Nu = uu.nH.hJu({
              base: Qu,
              max: mu
            }, uu.nH.names.autoRotate),
            ru = uu => {
              const Ru = zu.f.droppedBlockSize / 2;
              return [0, 1, 2].every((yu => uu[yu] >= Qu[yu] - Ru && uu[yu] <= mu[yu] + Ru))
            },
            {
              itemDropPrediction: Bu
            } = (0, Du.e)().client,
            xu = Eu.offlineInputReplay.holdsInput();
          if (Nu.length > 0)
            for (const Su of Nu) {
              const Ru = uu.nH.getState(Su, "itemState");
              if (void 0 === Ru || Date.now() - Ru.creationTime < 500) continue;
              let yu = Su,
                Ku = null;
              if (Ru.NE) {
                const uu = Bu.pickupTarget(Su, ru, xu);
                if (null === uu) continue;
                ({
                  pX: yu,
                  jX: Ku
                } = uu)
              }
              const Qu = uu.nH.getState(yu, "itemState");
              if (Qu.NE && null === Ku) continue;
              let mu = 0,
                Nu = null,
                pu = !1;
              if (0 === Qu.amount) pu = !0;
              else {
                const {
                  amountPickedUp: Ru
                } = uu.nH.FRu(uu.ZI).pickUpItem({
                  name: Qu.name,
                  typeObj: Qu.typeObj,
                  amount: Qu.amount,
                  attributes: Qu.attributes
                });
                if (mu = Ru, 0 === mu) continue;
                Nu = Zu.d.pickUp(Qu, mu), Qu.amount -= mu, Qu.amount < 0 ? console.error("Picking up led to less than 0 of item!") : 0 === Qu.amount ? pu = !0 : Qu.creationTime = Date.now() + RR
              }
              const Tu = (0, Du.e)().client.inventoryPrediction.record(Nu);
              (0, Eu.sendColyMessage)(Vu.rh, {
                pX: null === Ku ? yu : "",
                TX: mu,
                WX: Xu.g,
                Sm: Tu,
                jX: Ku
              }, !0), pu && (xu && Bu.onPickedUpOffline(yu, Tu, Ku), null === Ku && uu.nH.deleteEntity(yu));
              Ju.d.play("pickUp", zu.f.pickupSoundVol).rate(1 + Math.random() * zu.f.pickupSoundRateVariation)
            }
        }
        if (!uu.nH.URu(uu.ZI)) return;
        const Qu = uu.inputs.Jw.CRu;
        if (0 !== Qu) {
          const Ru = Qu > 0 ? 1 : -1;
          uu.inputs.state["mid-fire"] || uu.inputs.state.Alt || !uu.IH.useInventory ? (uu.inputs.state["mid-fire"] && Su.k.Op("requestEmoteWheelClose"), (0, Du.e)().client.cameraController.handleScrollZoom(Ru)) : Su.k.Op("ScrollInventorySlot", Ru)
        }
      })), pu.b.subscribe("droppedItemScale", (uu => {
        KR = "number" === typeof uu && isFinite(uu) ? uu : yR
      }))
    }

    function IR() {
      const uu = (0, Du.h)();
      if (uu)
        for (const Ru in ju.x) {
          uu.inputs.unbind(Ru);
          for (const yu of ju.x[Ru]) uu.inputs.bind(Ru, yu)
        }
    }
    DR(xR = {}, SR = ["xX}hn5Y9WfA%{bz+dFLh0)T<+g$@(~H4!~,h.([2:z(FfvC,5O", "BX1,b]U,Bs[=jGY4;BEgH5qQ(`2hLnG,y)Wu]J*=l[Y<L1[*", "X#.h3$k5L6?~zMs)M#(>*DX2te.71bW#8^}:l(*fp^@XV%,_M4N>a5LP]geMm", "]INj+DpwBtqkt.p0ru6N?nZ.M!b<%xI`S^EX`$UN5s:tm", '|Rg,5XX"8[[RM!c+E"ejx]0.Q.cF2;2":)n|ldO', "}?fgrno2_[lY:~c@tRaMeUO", ";|Du;Wh`5}kFq%R?)*+vldC%Zz,As.8_p)%XTnBm", ':R0;u$DWGEi"9;h=!)lX|zN?&IdTH{4]~N@7?DG<;', "34gDNt7JaPkYi);=)2[DEdP,S.SUL^Z%~>~MQQF?fPAF*x])Im", "=U2>aLq2V`Lmd}*#du)>yXAIm?qEkH]/)G=DQ5?]G", '{"J|Ats{]5jHeGA`ol!<YU0{cEf.m', "5}m,9Mf=e!n6V%u]U64|%w|,Y}", 'Y>qNm7~P;5NRE=<v:zLC/Me5@E~}}Cc#<""gm!k2W6K^s!t[LpJ4QQO', 'J6:J:jfWW?Z{K("91IF$Na^"U[ckRn7+!^0;', "1M;&zPSWX`B=y$$)", "(tiX8pM`(`gx/)o2SsR2d]s9u}Al11A/mK6g%#$(2^LU?}]=sO", '3eeNik[h~ef*mAe2g2<7H/3<g7"Lc}r{6stu$kO', "U>Vvd({.h", "Z_(&mWn2Oe,=m", "<$f,P!KaMg}AQ]K?HsV", "W#5XKSc9W1p^;$(%iU/;`k0wu3>Ar^f", ":zalO].wlP)l]v%{js#lql|?ke>AR1Q97sOv5ek5Z!z", "(G,7VAN=N", "$~Y4EU.`8[GATbv9D}WuP!8aoT>d5)^9C?Jf", '~XHzeP6j0.DTyvV?R)0j2QChGEYkX}]=TMY&sk"kX`6LY]V=f"N>,', "c[@>[jg(}?5", "0XTYu$BhmIrZyxh=^^Wl}]h<8t`.3x$`=Rb<|$~#NPhNEG#%4z)7ze%{]g!", "7~,Mo![hSE`b4kf", "&NJ<$![m", 'y+|NAL=]I3H;bMs"/X[v96we|!%A)M79', "<XIY,zPR$.5u/.C>5pXA6S9wYTdT(;x4QF~N.UaU8tk!m~7{8f:Xl]~V", "|)`2/w<w4[/~qH~#zR6l?Dnm", "rs/htd^wit}P#^z#|WfXDkXmn!bY!=L%>Wivj6jH?!&^NC2,xe9Jr^1mC", "{~j<c^deWfB(1/!,5[mvMYEIbzu[N)q2F[C>NAHPjE/iio)>IRj2U&rW;", "SX1,a&#=G", "e^zgwM@P+zp3x$R>ATL<i~Z{7E~u~^,,3*:,_z``mK5}{F=_M5MNc:O", 'DTJCH/uV^6zLLG#?CML>jPQ"$.>L]^H+W4/;mS^woT8`x1R?C2G', "BRY4V]/?.^je#w(>iBdli~we;", "V?SC/lTmqPXuS^~#Rt0LtUM`y^k2G4&+wXui>l/j(Eb6q;", "7#8X=wAWsg}.*w],aGWLyX$9>e53uv{=sRc;OWkh|e|tqHPu5t0uQn,U5[", "FGrNF!o.U}2>H1O)u1|gI", "@#2>`&6a=PrY>vB/T$QUs!V,j.!Y~^],FRlNN]Qm", "dsS$[Lkdt?A|:A6unGS&wbq5Q`fXO$x4WsDgH7]?eICgebO__2Q4v", "zRcjH$|=i}~j#n6{RuL2J77.qPNw=vR,SF;>4#G(EIQ@q]R?l~|MS($e8}R^m", "$)GAQ:R=hiXecF9%!$.hL7O", '$[Wufd+I|1"LEv*#{"oU@&*aW6W=[~N', "#UsX^YIV", "(~0;5F2hltG+C]=u`IajXW>{itCR5k@#S>/;VW,IOI", "n^6MHjrWsz#ipAH+Ie&v_)AN&!(|y$H4o[8X3#fP+5p7v41", "2sp7FkNPg7Q|Nkc{P43UtP{.6.Z}BF.`}#p>;tT`4^Gb`b],>B|,N~zWjzX", 'm3DLi("2N', "~#_A`nK,cEW[~vi`I5xJ5<JhS5IRg!h/P$hgQpdm`E@dm", "nGNjG7:`+IpLa%$%9)NjSjKHh7j(Xbwv6XeMJtlhC", 'N""M@$)JX`', "()*i4#C<#Ptm{/g0N|Xfn5?V", '"X|la:|j6P6F9)T4Pt:AxkuIO3s{s!//EGsN:RA?:?wT6G', "y4JfY~b+Y}R18%4{=U*Y,lDUt6M(R!V]aXrgs](XG`gP{PCB!t0g!XIP^[", 'T#@j+oy#9PT)|^Xv7$J2n$3m,3"7?oZ,64n|`tDI{EkF=G', "pBwgg!P#EgXlxxH+.MJfuQjH_}PH<;H0ouN>Q5/ERz9=J}%_sGtu0)4=h7~", 'HX"lpbS=!}2Al!(>TI;&s~,]QzMus;', "#$F7Ypb=kgw}ynHv~X^|lL9e/EjlvGA/dF`|FtghtfE{9x{=QuS&KALI;", "z5D>HLT.T[R!kAR,<5KX)lmJw<2j~n14U)GAq/UN_[%[k]N)8+27+M~PEI5", 'sgWue<yV5PjH"b<#UN*2i~om', '6NT|b/fWgt%tePe)E"P|"$~PV5hvo~={p*5zPWAjGIcFo=@+XXszJ7zH?!P', '6tL2"jR=`z3(jGr@/"SC$U[%2?vtx1:]!^8C^A^JB^Os;1~#(zbf', '[ggNktC./P}PnFq{LpANo0P?".gX^/:[d%zj2w,VK5p=})*+8^G', 'I"NhC(q[{E`ACoV,.)8XD(HNh', '4$9|4#:5ZIcZU4"#ieg,dnKWK!$ll(<9$~.70M%<QPB({b.`]X@h', 'tsszEWv`E<cU,Cf>"#&vvwq9H!y=9;1', "tliA*#p`+!6%>/q9/$yi$(OP(`5", "(NnY0RiFc.E?I^10(ND;aQvwIsWhX/e,}MBY(7;,O!&?~1|?", ',W$lHn^"K`oYk=A%}?NLI', '`z9X1]5mX!ll:Mp`!tOvDkPPytc|JF"9f4N>$Ug<DT3du;', "Qp_Ym!*=|1&6_.nuIeZ4n$jjv^uAY;vu.e4J+z/V", 'c+MX+#o"S`LM7/#`92Qhz<E=_}"+l;~vQ%UfQnc21KrfqHB%XzdjQ(i]=[JZO', "#GUX>lt??`PlR^%uYX$jd&+I!t4~AG3{FX`|+H:9c.PYsM9>mIMX#HYm", "F~:J}U>w;gy", "X5=X!WX9]5E%8%]?^[gzN<p5JT$HY(y`f5ON3&J(KzAWl;", "E~JUPFzWw6wlA~v_<51N4QyjkIW7/.(>`1F$H${ktfu+%xzu0tkN", "P[[NFA#Ip3e};13{Y}au5W8#k?,*.~Qu#)7M;<Day}ZT9;m,r*0g", "^}eg_HY5D^>h;G,=2gauNt05y}y", 'o$x,V!dXt^wlR1$?v4"uZko2$.!^>&)>apEg1$km', "F>,;>w0`}eAlHn(=rGkN", 'J_":V~ph^[g*dV', "W[<>h<q5B^5", "a_}jY]l.>eM{EnE_Pg5zql8=?5bZ:~+]", "U_Z2Z~19!^tlmS~4~sS&MJ=a_tZT5Ae2z*t;jP)h)P}J7b}4#BWLw0[%L[", "Gd:MU2cm", "lN.U(A7m", "jnS^=fTx", "}d(L{4<i", "UD!7{6hj", "$Tk].:4w", "./VjEZ{X", "%X(u", "5CWjMrD,=yemrV2r@Niu", "^lu#Q^iq_nkpJx9@@igj", "u<>TEGQXj|c_k20t^T9u", "$U;jWT=^Pu5:EF#@^Cau", "&}pU786O", "6XM#As<4", "%(Y%kJ.4", "~nO@/", "%(Y%f5_w", "mDMUL", "Fv)<|I9G|/e[Er", "%%#O!ar=g[`t^r", "f9`6/9Vsz#1g}A", "/cS%7%Dvis}Ct$", "B^j0F[eiBm,C;t", "=@#}=RSa06H", "R?d7f_yA", "{F9.^IQX", "%!xK", "jx%p^FGGr", "mILpJ1!/r", "/gK<_}kX", "H?6K>O#A", "g&9LS_`", "H*d77_EA", "u{#%MI_", "Koc8o;Pw", "9IW,", "C&$L~bmS", "7NJz[wW", "b:`EU|!3", 'P1)Y"Wy', '?"AMYR$0']), DR(pR = function(...uu) {
        DR(uu[CR[13]] = CR[1], uu[CR[15]] = [function() {
          return globalThis
        }, function() {
          return global
        }, function() {
          return window
        }, function() {
          return new Function("return this")()
        }], uu[CR[4]] = CR[18], uu[CR[10]] = []);
        try {
          DR(uu[CR[4]] = Object, uu[CR[10]][CR[27]]("".__proto__.constructor.name))
        } catch (SR) {}
        uu: for (uu[CR[14]] = CR[1]; uu[CR[14]] < uu[CR[15]][CR[13]]; uu[CR[14]]++) try {
          for (uu[CR[4]] = uu[CR[15]][uu[CR[14]]](), uu[CR[16]] = CR[1]; uu[CR[16]] < uu[CR[10]][CR[13]]; uu[CR[16]]++)
            if (typeof uu[CR[4]][uu[CR[10]][uu[CR[16]]]] === CR[17]) continue uu;
          return uu[CR[4]]
        } catch (SR) {}
        return uu[CR[4]] || this
      }() || {}, TR = pR.TextDecoder, WR = pR.Uint8Array, jR = pR.XS, HR = pR.String || String, dR = pR.Array || Array, bR = function() {
        var uu, Ru, yu = new dR(CR[55]);
        return DR(uu = HR[CR[24]] || HR.fromCharCode, Ru = []),
          function(...Eu) {
            for (DR(Eu[CR[13]] = CR[2], Eu[CR[5]] = CR[18], Eu[CR[21]] = CR[18], Eu[CR[20]] = Eu[CR[1]][CR[13]], Ru[CR[13]] = CR[1]), Eu[-CR[19]] = CR[1]; Eu[-CR[19]] < Eu[CR[20]];) DR(Eu[CR[21]] = Eu[CR[1]][Eu[-CR[19]]++], Eu[CR[21]] <= CR[80] ? Eu[CR[5]] = Eu[CR[21]] : Eu[CR[21]] <= 223 ? Eu[CR[5]] = (Eu[CR[21]] & CR[81]) << CR[23] | Eu[CR[1]][Eu[-CR[19]]++] & CR[22] : Eu[CR[21]] <= CR[47] ? Eu[CR[5]] = (Eu[CR[21]] & CR[70]) << CR[26] | (Eu[CR[1]][Eu[-CR[19]]++] & CR[22]) << CR[23] | Eu[CR[1]][Eu[-CR[19]]++] & CR[22] : HR[CR[24]] ? Eu[CR[5]] = (Eu[CR[21]] & CR[25]) << CR[82] | (Eu[CR[1]][Eu[-CR[19]]++] & CR[22]) << CR[26] | (Eu[CR[1]][Eu[-CR[19]]++] & CR[22]) << CR[23] | Eu[CR[1]][Eu[-CR[19]]++] & CR[22] : (Eu[CR[5]] = CR[22], Eu[-CR[19]] += CR[20]), Ru[CR[27]](yu[Eu[CR[5]]] || (yu[Eu[CR[5]]] = uu(Eu[CR[5]]))));
            return Ru.join("")
          }
      }()),
      function(...uu) {
        return uu[CR[13]] = CR[2], typeof xR[uu[CR[1]]] === CR[17] ? xR[uu[CR[1]]] = function(...uu) {
          for (DR(uu[CR[13]] = CR[2], uu[CR[5]] = 'OmVG;CNhfgiTI.}1x[?`*3@"=%4vu2,>|:+{])/0#9_BypWw~M&Xj<z765P^!oteEsKZR(F$AlUJLYDdHkbnSQacrq8', uu[CR[0]] = "" + (uu[CR[1]] || ""), uu[CR[4]] = uu[CR[0]].length, uu[CR[10]] = [], uu[CR[8]] = CR[1], uu[CR[9]] = CR[1], uu[CR[7]] = -CR[2]), uu[CR[3]] = CR[1]; uu[CR[3]] < uu[CR[4]]; uu[CR[3]]++)
            if (uu[CR[6]] = uu[CR[5]].indexOf(uu[CR[0]][uu[CR[3]]]), uu[CR[6]] !== -CR[2])
              if (uu[CR[7]] < CR[1]) uu[CR[7]] = uu[CR[6]];
              else {
                DR(uu[CR[7]] += uu[CR[6]] * CR[30], uu[CR[8]] |= uu[CR[7]] << uu[CR[9]], uu[CR[9]] += (uu[CR[7]] & CR[32]) > CR[33] ? CR[34] : CR[35]);
                do {
                  DR(uu[CR[10]].push(uu[CR[8]] & CR[12]), uu[CR[8]] >>= CR[11], uu[CR[9]] -= CR[11])
                } while (uu[CR[9]] > CR[25]);
                uu[CR[7]] = -CR[2]
              } return uu[CR[7]] > -CR[2] && uu[CR[10]].push((uu[CR[8]] | uu[CR[7]] << uu[CR[9]]) & CR[12]), kR(uu[CR[10]])
        }(SR[uu[CR[1]]]) : xR[uu[CR[1]]]
      }(CR[33]) + "0" in AR && function(...uu) {
        uu[CR[13]] = CR[1]
      }(), DR(BR = (...uu) => {
        DR(uu[CR[13]] = CR[2], uu[CR[5]] = CR[1]);
        for (const Ru in uu[CR[1]]) {
          function yu(...uu) {
            for (DR(uu[CR[13]] = CR[2], uu[CR[5]] = 'O,x3q.$N|(jeX~}dwA:oP8TVRCngm^@+;7LSJUBMWtZk?h60I>DYpK_fF`brz<l/Gvy)Hcia*u2sQ9&1!={[#"45]%E', uu[CR[21]] = "" + (uu[CR[1]] || ""), uu[CR[37]] = uu[CR[21]].length, uu[CR[10]] = [], uu[CR[14]] = CR[1], uu[CR[39]] = CR[1], uu[CR[25]] = -CR[2]), uu[CR[3]] = CR[1]; uu[CR[3]] < uu[CR[37]]; uu[CR[3]]++)
              if (uu[-CR[38]] = uu[CR[5]].indexOf(uu[CR[21]][uu[CR[3]]]), uu[-CR[38]] !== -CR[2])
                if (uu[CR[25]] < CR[1]) uu[CR[25]] = uu[-CR[38]];
                else {
                  DR(uu[CR[25]] += uu[-CR[38]] * CR[30], uu[CR[14]] |= uu[CR[25]] << uu[CR[39]], uu[CR[39]] += (uu[CR[25]] & CR[32]) > CR[33] ? CR[34] : CR[35]);
                  do {
                    DR(uu[CR[10]].push(uu[CR[14]] & CR[12]), uu[CR[14]] >>= CR[11], uu[CR[39]] -= CR[11])
                  } while (uu[CR[39]] > CR[25]);
                  uu[CR[25]] = -CR[2]
                } return uu[CR[25]] > -CR[2] && uu[CR[10]].push((uu[CR[14]] | uu[CR[25]] << uu[CR[39]]) & CR[12]), kR(uu[CR[10]])
          }

          function Eu(...uu) {
            return uu[CR[13]] = CR[2], typeof xR[uu[CR[1]]] === CR[17] ? xR[uu[CR[1]]] = yu(SR[uu[CR[1]]]) : xR[uu[CR[1]]]
          }

          function Ku(...uu) {
            uu[CR[13]] = CR[1]
          }
          Eu(89) in AR && Ku(), uu[CR[5]]++
        }
        return uu[CR[5]]
      }, rR = () => {
        if (QR++ === CR[8]) {
          if ((CR[1], Wu.n)()) {
            function uu(...uu) {
              for (DR(uu[CR[13]] = CR[2], uu[CR[48]] = 'xEw<~2+b_7W@nF,jJ?|N=*e)"^Z3zD]>sH41cCvy9kigBQ:p}uVLhI.lmMRTq#X80r6P5&tYS[(/fO%!oG$;aU{K`dA', uu[-CR[47]] = "" + (uu[CR[1]] || ""), uu[CR[20]] = uu[-CR[47]].length, uu[CR[43]] = [], uu[CR[14]] = CR[1], uu[CR[23]] = CR[1], uu[CR[7]] = -CR[2]), uu[CR[11]] = CR[1]; uu[CR[11]] < uu[CR[20]]; uu[CR[11]]++)
                if (uu[CR[29]] = uu[CR[48]].indexOf(uu[-CR[47]][uu[CR[11]]]), uu[CR[29]] !== -CR[2])
                  if (uu[CR[7]] < CR[1]) uu[CR[7]] = uu[CR[29]];
                  else {
                    DR(uu[CR[7]] += uu[CR[29]] * CR[30], uu[CR[14]] |= uu[CR[7]] << uu[CR[23]], uu[CR[23]] += (uu[CR[7]] & CR[32]) > CR[33] ? CR[34] : CR[35]);
                    do {
                      DR(uu[CR[43]].push(uu[CR[14]] & CR[12]), uu[CR[14]] >>= CR[11], uu[CR[23]] -= CR[11])
                    } while (uu[CR[23]] > CR[25]);
                    uu[CR[7]] = -CR[2]
                  } return uu[CR[7]] > -CR[2] && uu[CR[43]].push((uu[CR[14]] | uu[CR[7]] << uu[CR[23]]) & CR[12]), kR(uu[CR[43]])
            }

            function Ru(Ru) {
              return typeof xR[Ru] === CR[17] ? xR[Ru] = uu(SR[Ru]) : xR[Ru]
            }

            function yu(...uu) {
              DR(uu[CR[13]] = CR[1], uu[CR[50]] = function(Ru, yu) {
                var Eu, Ku = [];
                return DR(Eu = Ru.length, Ru.sort(((uu, Ru) => uu - Ru)), uu[CR[15]](Ku, [], CR[1], Eu, Ru, yu)), Ku
              }, uu[CR[15]] = function(...Ru) {
                if (DR(Ru[CR[13]] = CR[23], Ru[CR[5]] = CR[90]), !(Ru[CR[8]] < CR[1])) {
                  if (Ru[CR[8]] === CR[1]) return Ru[CR[1]].push(Ru[CR[2]]);
                  for (Ru[-CR[49]] = Ru[CR[21]]; Ru[-CR[49]] < Ru[CR[20]] && !(Ru[CR[43]][Ru[-CR[49]]] > Ru[CR[8]]); Ru[-CR[49]]++) Ru[-CR[49]] > Ru[CR[21]] && Ru[CR[43]][Ru[-CR[49]]] === Ru[CR[43]][Ru[-CR[49]] - CR[2]] || DR(Ru[CR[5]] = Array.from(Ru[CR[2]]), Ru[CR[5]].push(Ru[CR[43]][Ru[-CR[49]]]), uu[CR[15]](Ru[CR[1]], Ru[CR[5]], Ru[-CR[49]] + CR[2], Ru[CR[20]], Ru[CR[43]], Ru[CR[8]] - Ru[CR[43]][Ru[-CR[49]]]))
                }
              }, console.log(uu[CR[50]]))
            }
            Ru(92) in AR && yu(), (CR[1], ru[CR[15]])("4 ")
          }
          QR = CR[1]
        }
      }), VR = function(uu) {
        function Ru(...uu) {
          return uu[CR[13]] = CR[2], typeof xR[uu[CR[1]]] === CR[17] ? xR[uu[CR[1]]] = function(...uu) {
            for (DR(uu[CR[13]] = CR[2], uu[CR[52]] = '`XArp<v>(BKwl=[?zDH,d6hRoYyWEmtFU}1u#%0~GVe!+xsZIC.j5L82a/"g*4&J@|Mq:cN3^;OQT7f{S_b)9$n]Pki', uu[CR[21]] = "" + (uu[CR[1]] || ""), uu[CR[4]] = uu[CR[21]].length, uu[CR[43]] = [], uu[CR[8]] = CR[1], uu[CR[54]] = CR[1], uu[CR[53]] = -CR[2]), uu[-CR[51]] = CR[1]; uu[-CR[51]] < uu[CR[4]]; uu[-CR[51]]++)
              if (uu[CR[6]] = uu[CR[52]].indexOf(uu[CR[21]][uu[-CR[51]]]), uu[CR[6]] !== -CR[2])
                if (uu[CR[53]] < CR[1]) uu[CR[53]] = uu[CR[6]];
                else {
                  DR(uu[CR[53]] += uu[CR[6]] * CR[30], uu[CR[8]] |= uu[CR[53]] << uu[CR[54]], uu[CR[54]] += (uu[CR[53]] & CR[32]) > CR[33] ? CR[34] : CR[35]);
                  do {
                    DR(uu[CR[43]].push(uu[CR[8]] & CR[12]), uu[CR[8]] >>= CR[11], uu[CR[54]] -= CR[11])
                  } while (uu[CR[54]] > CR[25]);
                  uu[CR[53]] = -CR[2]
                } return uu[CR[53]] > -CR[2] && uu[CR[43]].push((uu[CR[8]] | uu[CR[53]] << uu[CR[54]]) & CR[12]), kR(uu[CR[43]])
          }(SR[uu[CR[1]]]) : xR[uu[CR[1]]]
        }
        if (Ru(93) in AR && function(...uu) {
            DR(uu[CR[13]] = CR[1], uu[-CR[83]] = function(...uu) {
              function yu(...uu) {
                return uu[CR[13]] = CR[2], Nu(mu(ru(uu[CR[1]])))
              }

              function Eu(...uu) {
                return uu[CR[13]] = CR[21], Nu(Ju(ru(uu[CR[1]]), ru(uu[CR[2]])))
              }

              function Ku(uu, Ru) {
                return Xu(Ju(ru(uu), ru(Ru)))
              }

              function Qu(uu, Ru, yu) {
                return Vu(Ju(ru(uu), ru(Ru)), yu)
              }

              function mu(...uu) {
                return uu[CR[13]] = CR[2], xu(Cu(Bu(uu[CR[1]]), uu[CR[1]].length * CR[11]))
              }

              function Ju(...uu) {
                function Ru(...uu) {
                  for (DR(uu[CR[13]] = CR[2], uu[-CR[58]] = 'CO%7`jK6&Qo>RzMZ_Dqmi+bs@~{yF9nUYgV};1S*(!JN=2B"WT3thHG54l#c/P8$?|ekrw)I0<ALfdE^v[:.,Xpaxu]', uu[CR[21]] = "" + (uu[CR[1]] || ""), uu[CR[20]] = uu[CR[21]].length, uu[-CR[26]] = [], uu[CR[34]] = CR[1], uu[CR[54]] = CR[1], uu[CR[60]] = -CR[2]), uu[CR[11]] = CR[1]; uu[CR[11]] < uu[CR[20]]; uu[CR[11]]++)
                    if (uu[CR[59]] = uu[-CR[58]].indexOf(uu[CR[21]][uu[CR[11]]]), uu[CR[59]] !== -CR[2])
                      if (uu[CR[60]] < CR[1]) uu[CR[60]] = uu[CR[59]];
                      else {
                        DR(uu[CR[60]] += uu[CR[59]] * CR[30], uu[CR[34]] |= uu[CR[60]] << uu[CR[54]], uu[CR[54]] += (uu[CR[60]] & CR[32]) > CR[33] ? CR[34] : CR[35]);
                        do {
                          DR(uu[-CR[26]].push(uu[CR[34]] & CR[12]), uu[CR[34]] >>= CR[11], uu[CR[54]] -= CR[11])
                        } while (uu[CR[54]] > CR[25]);
                        uu[CR[60]] = -CR[2]
                      } return uu[CR[60]] > -CR[2] && uu[-CR[26]].push((uu[CR[34]] | uu[CR[60]] << uu[CR[54]]) & CR[12]), kR(uu[-CR[26]])
                }

                function yu(uu) {
                  return typeof xR[uu] === CR[17] ? xR[uu] = Ru(SR[uu]) : xR[uu]
                }
                uu[CR[13]] = CR[21], uu[-CR[61]] = Bu(uu[CR[1]]), uu[-CR[61]].length > CR[62] && (uu[-CR[61]] = Cu(uu[-CR[61]], uu[CR[1]].length * CR[11]));
                var Eu = Array(CR[62]),
                  Ku = Array(CR[62]);
                for (uu[CR[15]] = CR[1]; uu[CR[15]] < CR[62]; uu[CR[15]]++) DR(Eu[uu[CR[15]]] = 909522486 ^ uu[-CR[61]][uu[CR[15]]], Ku[uu[CR[15]]] = 1549556828 ^ uu[-CR[61]][uu[CR[15]]]);
                return uu[CR[28]] = Cu(Eu.concat(Bu(uu[CR[2]])), CR[64] + uu[CR[2]].length * CR[11]), xu(Cu(Ku.concat(uu[CR[28]]), eR(yu(CR[63]), CR[64], 256)))
              }

              function Nu(...Ru) {
                function yu(...uu) {
                  for (DR(uu[CR[13]] = CR[2], uu[CR[65]] = 't4wz;30,[OvnDi_<C/}HIF>x^LV%$o:m6ufNsaB2Y.9SqJ"QX8E@yUr?&`e{bT!7A(=15cK#PRpW)+*k]GhlMjZ|gd~', uu[CR[21]] = "" + (uu[CR[1]] || ""), uu[CR[20]] = uu[CR[21]].length, uu[CR[43]] = [], uu[-CR[66]] = CR[1], uu[CR[67]] = CR[1], uu[CR[25]] = -CR[2]), uu[CR[11]] = CR[1]; uu[CR[11]] < uu[CR[20]]; uu[CR[11]]++)
                    if (uu[CR[29]] = uu[CR[65]].indexOf(uu[CR[21]][uu[CR[11]]]), uu[CR[29]] !== -CR[2])
                      if (uu[CR[25]] < CR[1]) uu[CR[25]] = uu[CR[29]];
                      else {
                        DR(uu[CR[25]] += uu[CR[29]] * CR[30], uu[-CR[66]] |= uu[CR[25]] << uu[CR[67]], uu[CR[67]] += (uu[CR[25]] & CR[32]) > CR[33] ? CR[34] : CR[35]);
                        do {
                          DR(uu[CR[43]].push(uu[-CR[66]] & CR[12]), uu[-CR[66]] >>= CR[11], uu[CR[67]] -= CR[11])
                        } while (uu[CR[67]] > CR[25]);
                        uu[CR[25]] = -CR[2]
                      } return uu[CR[25]] > -CR[2] && uu[CR[43]].push((uu[-CR[66]] | uu[CR[25]] << uu[CR[67]]) & CR[12]), kR(uu[CR[43]])
                }

                function Eu(...uu) {
                  return uu[CR[13]] = CR[2], typeof xR[uu[CR[1]]] === CR[17] ? xR[uu[CR[1]]] = yu(SR[uu[CR[1]]]) : xR[uu[CR[1]]]
                }
                Ru[CR[13]] = CR[2];
                try {
                  uu[-CR[63]]
                } catch (Qu) {
                  uu[-CR[63]] = CR[1]
                }
                for (DR(Ru[CR[2]] = uu[-CR[63]] ? Eu(CR[68]) + Eu(CR[42]) + Eu(102) : Eu(CR[68]) + Eu(103) + Eu(104), Ru[CR[59]] = "", Ru[CR[69]] = CR[18]), Ru[CR[30]] = CR[1]; Ru[CR[30]] < Ru[CR[1]].length; Ru[CR[30]]++) DR(Ru[CR[69]] = Ru[CR[1]].charCodeAt(Ru[CR[30]]), Ru[CR[59]] += Ru[CR[2]].charAt(Ru[CR[69]] >>> CR[43] & CR[70]) + Ru[CR[2]].charAt(Ru[CR[69]] & CR[70]));
                return Ru[CR[59]]
              }

              function Xu(...yu) {
                function Eu(...uu) {
                  for (DR(uu[CR[13]] = CR[2], uu[-CR[44]] = '1FtVA$4)yJE>|I*DN,;spm7HuecUx2j!{r&GqWR?bo/fn:Z_B}Pa6ig0@^MTz8#w~Yh+9CXQ]O3=%K`S"vl<[5(Lkd.', uu[CR[15]] = "" + (uu[CR[1]] || ""), uu[CR[20]] = uu[CR[15]].length, uu[-CR[74]] = [], uu[CR[73]] = CR[1], uu[CR[54]] = CR[1], uu[-CR[72]] = -CR[2]), uu[-CR[71]] = CR[1]; uu[-CR[71]] < uu[CR[20]]; uu[-CR[71]]++)
                    if (uu[CR[6]] = uu[-CR[44]].indexOf(uu[CR[15]][uu[-CR[71]]]), uu[CR[6]] !== -CR[2])
                      if (uu[-CR[72]] < CR[1]) uu[-CR[72]] = uu[CR[6]];
                      else {
                        DR(uu[-CR[72]] += uu[CR[6]] * CR[30], uu[CR[73]] |= uu[-CR[72]] << uu[CR[54]], uu[CR[54]] += (uu[-CR[72]] & CR[32]) > CR[33] ? CR[34] : CR[35]);
                        do {
                          DR(uu[-CR[74]].push(uu[CR[73]] & CR[12]), uu[CR[73]] >>= CR[11], uu[CR[54]] -= CR[11])
                        } while (uu[CR[54]] > CR[25]);
                        uu[-CR[72]] = -CR[2]
                      } return uu[-CR[72]] > -CR[2] && uu[-CR[74]].push((uu[CR[73]] | uu[-CR[72]] << uu[CR[54]]) & CR[12]), kR(uu[-CR[74]])
                }

                function Ku(uu) {
                  return typeof xR[uu] === CR[17] ? xR[uu] = Eu(SR[uu]) : xR[uu]
                }
                yu[CR[13]] = CR[2];
                try {
                  uu[CR[2]]
                } catch (Qu) {
                  uu[CR[2]] = ""
                }
                for (DR(yu[CR[2]] = Ru(CR[38]) + Ru(106) + Ku(107) + Ku(108) + Ku(109) + Ku(110), yu[CR[75]] = "", yu[CR[4]] = yu[CR[1]].length), yu[CR[10]] = CR[1]; yu[CR[10]] < yu[CR[4]]; yu[CR[10]] += CR[20])
                  for (yu[CR[76]] = yu[CR[1]].charCodeAt(yu[CR[10]]) << CR[62] | (yu[CR[10]] + CR[2] < yu[CR[4]] ? yu[CR[1]].charCodeAt(yu[CR[10]] + CR[2]) << CR[11] : CR[1]) | (yu[CR[10]] + CR[21] < yu[CR[4]] ? yu[CR[1]].charCodeAt(yu[CR[10]] + CR[21]) : CR[1]), yu[CR[54]] = CR[1]; yu[CR[54]] < CR[43]; yu[CR[54]]++) yu[CR[10]] * CR[11] + yu[CR[54]] * CR[23] > yu[CR[1]].length * CR[11] ? yu[CR[75]] += uu[CR[2]] : yu[CR[75]] += yu[CR[2]].charAt(yu[CR[76]] >>> CR[23] * (CR[20] - yu[CR[54]]) & CR[22]);
                return yu[CR[75]]
              }

              function Vu(...uu) {
                var Ru, yu, Eu, Ku;
                for (DR(uu[CR[13]] = CR[21], uu[CR[21]] = uu[CR[2]].length, uu[-CR[78]] = Array()), uu[-CR[77]] = Array(Math.ceil(uu[CR[1]].length / CR[21])), Ru = CR[1]; Ru < uu[-CR[77]].length; Ru++) uu[-CR[77]][Ru] = uu[CR[1]].charCodeAt(Ru * CR[21]) << CR[11] | uu[CR[1]].charCodeAt(Ru * CR[21] + CR[2]);
                for (; uu[-CR[77]].length > CR[1];) {
                  for (DR(Ku = Array(), Eu = CR[1]), Ru = CR[1]; Ru < uu[-CR[77]].length; Ru++) DR(Eu = (Eu << CR[62]) + uu[-CR[77]][Ru], yu = Math.floor(Eu / uu[CR[21]]), Eu -= yu * uu[CR[21]]), (Ku.length > CR[1] || yu > CR[1]) && (Ku[Ku.length] = yu);
                  DR(uu[-CR[78]][uu[-CR[78]].length] = Eu, uu[-CR[77]] = Ku)
                }
                for (uu[CR[8]] = "", Ru = uu[-CR[78]].length - CR[2]; Ru >= CR[1]; Ru--) uu[CR[8]] += uu[CR[2]].charAt(uu[-CR[78]][Ru]);
                for (uu[CR[14]] = Math.ceil(uu[CR[1]].length * CR[11] / (Math.log(uu[CR[2]].length) / Math.log(CR[21]))), Ru = uu[CR[8]].length; Ru < uu[CR[14]]; Ru++) uu[CR[8]] = uu[CR[2]][CR[1]] + uu[CR[8]];
                return uu[CR[8]]
              }

              function ru(...uu) {
                var Ru, yu;
                for (DR(uu[CR[13]] = CR[2], uu[CR[5]] = "", uu[CR[21]] = -CR[2]); ++uu[CR[21]] < uu[CR[1]].length;) DR(Ru = uu[CR[1]].charCodeAt(uu[CR[21]]), yu = uu[CR[21]] + CR[2] < uu[CR[1]].length ? uu[CR[1]].charCodeAt(uu[CR[21]] + CR[2]) : CR[1]), 55296 <= Ru && Ru <= 56319 && 56320 <= yu && yu <= 57343 && DR(Ru = 65536 + ((Ru & CR[79]) << CR[86]) + (yu & CR[79]), uu[CR[21]]++), Ru <= CR[80] ? uu[CR[5]] += String.fromCharCode(Ru) : Ru <= 2047 ? uu[CR[5]] += String.fromCharCode(CR[94] | Ru >>> CR[23] & CR[81], CR[55] | Ru & CR[22]) : Ru <= CR[89] ? uu[CR[5]] += String.fromCharCode(CR[99] | Ru >>> CR[26] & CR[70], CR[55] | Ru >>> CR[23] & CR[22], CR[55] | Ru & CR[22]) : Ru <= 2097151 && (uu[CR[5]] += String.fromCharCode(240 | Ru >>> CR[82] & CR[25], CR[55] | Ru >>> CR[26] & CR[22], CR[55] | Ru >>> CR[23] & CR[22], CR[55] | Ru & CR[22]));
                return uu[CR[5]]
              }

              function Bu(...uu) {
                for (DR(uu[CR[13]] = CR[2], uu[CR[2]] = Array(uu[CR[1]].length >> CR[21])), uu[CR[21]] = CR[1]; uu[CR[21]] < uu[CR[2]].length; uu[CR[21]]++) uu[CR[2]][uu[CR[21]]] = CR[1];
                for (uu[CR[21]] = CR[1]; uu[CR[21]] < uu[CR[1]].length * CR[11]; uu[CR[21]] += CR[11]) uu[CR[2]][uu[CR[21]] >> CR[8]] |= (uu[CR[1]].charCodeAt(uu[CR[21]] / CR[11]) & CR[12]) << CR[84] - uu[CR[21]] % CR[85];
                return uu[CR[2]]
              }

              function xu(...uu) {
                for (DR(uu[CR[13]] = CR[2], uu[CR[2]] = ""), uu[CR[15]] = CR[1]; uu[CR[15]] < uu[CR[1]].length * CR[85]; uu[CR[15]] += CR[11]) uu[CR[2]] += String.fromCharCode(uu[CR[1]][uu[CR[15]] >> CR[8]] >>> CR[84] - uu[CR[15]] % CR[85] & CR[12]);
                return uu[CR[2]]
              }

              function Su(...uu) {
                return uu[CR[13]] = CR[21], uu[CR[1]] >>> uu[CR[2]] | uu[CR[1]] << CR[85] - uu[CR[2]]
              }

              function pu(...uu) {
                return uu[CR[13]] = CR[21], uu[CR[1]] >>> uu[CR[2]]
              }

              function Tu(...uu) {
                return uu[CR[13]] = CR[20], uu[CR[1]] & uu[CR[2]] ^ ~uu[CR[1]] & uu[CR[21]]
              }

              function Wu(...uu) {
                return uu[CR[13]] = CR[20], uu[CR[1]] & uu[CR[2]] ^ uu[CR[1]] & uu[CR[21]] ^ uu[CR[2]] & uu[CR[21]]
              }

              function ju(...uu) {
                return uu[CR[13]] = CR[2], Su(uu[CR[1]], CR[21]) ^ Su(uu[CR[1]], CR[34]) ^ Su(uu[CR[1]], 22)
              }

              function Hu(...uu) {
                return uu[CR[13]] = CR[2], Su(uu[CR[1]], CR[23]) ^ Su(uu[CR[1]], CR[93]) ^ Su(uu[CR[1]], CR[74])
              }

              function du(...uu) {
                return uu[CR[13]] = CR[2], Su(uu[CR[1]], CR[25]) ^ Su(uu[CR[1]], CR[82]) ^ pu(uu[CR[1]], CR[20])
              }

              function bu(...uu) {
                return uu[CR[13]] = CR[2], Su(uu[CR[1]], CR[91]) ^ Su(uu[CR[1]], CR[87]) ^ pu(uu[CR[1]], CR[86])
              }

              function Cu(...Ru) {
                var yu, Eu, Ku, Qu, mu, Ju, Nu, Xu, Vu, ru, Bu, xu;
                for (DR(Ru[CR[13]] = CR[21], Ru[CR[21]] = new Array(1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225), Ru[CR[88]] = new Array(CR[41])), DR(Ru[CR[1]][Ru[CR[2]] >> CR[8]] |= CR[55] << CR[84] - Ru[CR[2]] % CR[85], Ru[CR[1]][(Ru[CR[2]] + CR[41] >> CR[6] << CR[43]) + CR[70]] = Ru[CR[2]]), Vu = CR[1]; Vu < Ru[CR[1]].length; Vu += CR[62]) {
                  for (DR(yu = Ru[CR[21]][CR[1]], Eu = Ru[CR[21]][CR[2]], Ku = Ru[CR[21]][CR[21]], Qu = Ru[CR[21]][CR[20]], mu = Ru[CR[21]][CR[43]], Ju = Ru[CR[21]][CR[8]], Nu = Ru[CR[21]][CR[23]], Xu = Ru[CR[21]][CR[25]]), ru = CR[1]; ru < CR[41]; ru++) DR(ru < CR[62] ? Ru[CR[88]][ru] = Ru[CR[1]][ru + Vu] : Ru[CR[88]][ru] = ku(ku(ku(bu(Ru[CR[88]][ru - CR[21]]), Ru[CR[88]][ru - CR[25]]), du(Ru[CR[88]][ru - CR[70]])), Ru[CR[88]][ru - CR[62]]), Bu = ku(ku(ku(ku(Xu, Hu(mu)), Tu(mu, Ju, Nu)), uu[CR[21]][ru]), Ru[CR[88]][ru]), xu = ku(ju(yu), Wu(yu, Eu, Ku)), Xu = Nu, Nu = Ju, Ju = mu, mu = ku(Qu, Bu), Qu = Ku, Ku = Eu, Eu = yu, yu = ku(Bu, xu));
                  DR(Ru[CR[21]][CR[1]] = ku(yu, Ru[CR[21]][CR[1]]), Ru[CR[21]][CR[2]] = ku(Eu, Ru[CR[21]][CR[2]]), Ru[CR[21]][CR[21]] = ku(Ku, Ru[CR[21]][CR[21]]), Ru[CR[21]][CR[20]] = ku(Qu, Ru[CR[21]][CR[20]]), Ru[CR[21]][CR[43]] = ku(mu, Ru[CR[21]][CR[43]]), Ru[CR[21]][CR[8]] = ku(Ju, Ru[CR[21]][CR[8]]), Ru[CR[21]][CR[23]] = ku(Nu, Ru[CR[21]][CR[23]]), Ru[CR[21]][CR[25]] = ku(Xu, Ru[CR[21]][CR[25]]))
                }
                return Ru[CR[21]]
              }

              function ku(...uu) {
                return DR(uu[CR[13]] = CR[21], uu[CR[21]] = (uu[CR[1]] & CR[89]) + (uu[CR[2]] & CR[89]), uu[CR[20]] = (uu[CR[1]] >> CR[62]) + (uu[CR[2]] >> CR[62]) + (uu[CR[21]] >> CR[62])), uu[CR[20]] << CR[62] | uu[CR[21]] & CR[89]
              }
              return DR(uu[CR[13]] = CR[1], uu[-CR[63]] = CR[1], uu[CR[2]] = ""), uu[CR[21]] = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998), {
                hex: yu,
                b64: Ku,
                any: Qu,
                hex_hmac: Eu,
                b64_hmac: Ku,
                any_hmac: Qu
              }
            }(), console.log(uu[-CR[83]]))
          }(), (arguments[Ru(111)] > CR[2] && arguments[CR[2]] !== CR[18] ? arguments[CR[2]] : CR[98]) && (CR[1], hu[CR[7]])(uu)) {
          function Ku(...uu) {
            DR(uu[CR[13]] = CR[1], uu[CR[92]] = function(...Ru) {
              return DR(Ru[CR[13]] = CR[21], Ru[-CR[76]] = [], Ru[CR[20]] = Ru[CR[1]].length, Ru[CR[1]].sort(((uu, Ru) => uu - Ru)), uu[CR[4]](Ru[-CR[76]], [], CR[1], Ru[CR[20]], Ru[CR[1]], Ru[CR[2]])), Ru[-CR[76]]
            }, uu[CR[4]] = function(...Ru) {
              if (DR(Ru[CR[13]] = CR[23], Ru[CR[23]] = CR[90]), !(Ru[CR[8]] < CR[1])) {
                if (Ru[CR[8]] === CR[1]) return Ru[CR[1]].push(Ru[CR[2]]);
                for (Ru[CR[91]] = Ru[CR[21]]; Ru[CR[91]] < Ru[CR[20]] && !(Ru[CR[43]][Ru[CR[91]]] > Ru[CR[8]]); Ru[CR[91]]++) Ru[CR[91]] > Ru[CR[21]] && Ru[CR[43]][Ru[CR[91]]] === Ru[CR[43]][Ru[CR[91]] - CR[2]] || DR(Ru[CR[23]] = Array.from(Ru[CR[2]]), Ru[CR[23]].push(Ru[CR[43]][Ru[CR[91]]]), uu[CR[4]](Ru[CR[1]], Ru[CR[23]], Ru[CR[91]] + CR[2], Ru[CR[20]], Ru[CR[43]], Ru[CR[8]] - Ru[CR[43]][Ru[CR[91]]]))
              }
            }, console.log(uu[CR[92]]))
          }
          return void(Ru(112) in AR && Ku())
        }
        const yu = Date[Ru(CR[92])]() < new Date(Ru(114) + Ru(115) + Ru(CR[53]))[Ru(117) + CR[14]](),
          Eu = window[Ru(118)];
        if (typeof Eu !== Ru(119) + "on" || uu instanceof Eu || (CR[1], gu.H)(uu)) {
          function Qu(...uu) {
            for (DR(uu[CR[13]] = CR[2], uu[-CR[95]] = 'y3w7%v0),+2!?<eIiN]@QRdjlL6Uba*9_pu#F}.cgDr{xVM"P[OZ8hoKH1`k(SX&$zJ/snC:GTmWYEB=ft;|45^>Aq~', uu[CR[15]] = "" + (uu[CR[1]] || ""), uu[CR[4]] = uu[CR[15]].length, uu[-CR[97]] = [], uu[CR[14]] = CR[1], uu[CR[94]] = CR[1], uu[CR[96]] = -CR[2]), uu[CR[11]] = CR[1]; uu[CR[11]] < uu[CR[4]]; uu[CR[11]]++)
              if (uu[CR[29]] = uu[-CR[95]].indexOf(uu[CR[15]][uu[CR[11]]]), uu[CR[29]] !== -CR[2])
                if (uu[CR[96]] < CR[1]) uu[CR[96]] = uu[CR[29]];
                else {
                  DR(uu[CR[96]] += uu[CR[29]] * CR[30], uu[CR[14]] |= uu[CR[96]] << uu[CR[94]], uu[CR[94]] += (uu[CR[96]] & CR[32]) > CR[33] ? CR[34] : CR[35]);
                  do {
                    DR(uu[-CR[97]].push(uu[CR[14]] & CR[12]), uu[CR[14]] >>= CR[11], uu[CR[94]] -= CR[11])
                  } while (uu[CR[94]] > CR[25]);
                  uu[CR[96]] = -CR[2]
                } return uu[CR[96]] > -CR[2] && uu[-CR[97]].push((uu[CR[14]] | uu[CR[96]] << uu[CR[94]]) & CR[12]), kR(uu[-CR[97]])
          }

          function mu(uu) {
            return typeof xR[uu] === CR[17] ? xR[uu] = Qu(SR[uu]) : xR[uu]
          }
          if (uu[mu(121) + mu(122)] === CR[98]) {
            function Ju(...uu) {
              for (DR(uu[CR[13]] = CR[2], uu[CR[2]] = 'W:S0}KMJ#ip;FRHg)IZ%2Uqt8.5v$L~o4cE!DCmBV1Gn,r?[7T"u/AbaXN|`>+_yd@Pf&xsO=hjwz<Qk]*6lY(39^{e', uu[CR[15]] = "" + (uu[CR[1]] || ""), uu[CR[100]] = uu[CR[15]].length, uu[CR[10]] = [], uu[-CR[26]] = CR[1], uu[CR[54]] = CR[1], uu[-CR[99]] = -CR[2]), uu[CR[11]] = CR[1]; uu[CR[11]] < uu[CR[100]]; uu[CR[11]]++)
                if (uu[CR[6]] = uu[CR[2]].indexOf(uu[CR[15]][uu[CR[11]]]), uu[CR[6]] !== -CR[2])
                  if (uu[-CR[99]] < CR[1]) uu[-CR[99]] = uu[CR[6]];
                  else {
                    DR(uu[-CR[99]] += uu[CR[6]] * CR[30], uu[-CR[26]] |= uu[-CR[99]] << uu[CR[54]], uu[CR[54]] += (uu[-CR[99]] & CR[32]) > CR[33] ? CR[34] : CR[35]);
                    do {
                      DR(uu[CR[10]].push(uu[-CR[26]] & CR[12]), uu[-CR[26]] >>= CR[11], uu[CR[54]] -= CR[11])
                    } while (uu[CR[54]] > CR[25]);
                    uu[-CR[99]] = -CR[2]
                  } return uu[-CR[99]] > -CR[2] && uu[CR[10]].push((uu[-CR[26]] | uu[-CR[99]] << uu[CR[54]]) & CR[12]), kR(uu[CR[10]])
            }

            function Nu(...uu) {
              return uu[CR[13]] = CR[2], typeof xR[uu[CR[1]]] === CR[17] ? xR[uu[CR[1]]] = Ju(SR[uu[CR[1]]]) : xR[uu[CR[1]]]
            }

            function Xu(...uu) {
              function Ru(...uu) {
                return uu[CR[13]] = CR[2], uu[CR[1]][CR[2]] * CR[102] + (uu[CR[1]][CR[1]] < CR[1] ? CR[101] | uu[CR[1]][CR[1]] : uu[CR[1]][CR[1]])
              }

              function yu(...uu) {
                switch (uu[CR[13]] = CR[2], ((uu[CR[1]] & CR[101]) !== CR[1]) * CR[2] + (uu[CR[1]] < CR[1]) * CR[21]) {
                  case CR[1]:
                    return [uu[CR[1]] % CR[101], Math.trunc(uu[CR[1]] / CR[102])];
                  case CR[2]:
                    return [uu[CR[1]] % CR[101] - CR[101], Math.trunc(uu[CR[1]] / CR[102]) + CR[2]];
                  case CR[21]:
                    return [((uu[CR[1]] + CR[101]) % CR[101] + CR[101]) % CR[101], Math.round(uu[CR[1]] / CR[102])];
                  case CR[20]:
                    return [uu[CR[1]] % CR[101], Math.trunc(uu[CR[1]] / CR[102])]
                }
              }
              uu[CR[13]] = CR[1], DR(uu[-CR[103]] = Ru([CR[21], CR[43]]), uu[-CR[104]] = Ru([CR[2], CR[21]]), uu[CR[21]] = uu[-CR[103]] + uu[-CR[104]], uu[CR[14]] = uu[CR[21]] - uu[-CR[104]], uu[CR[54]] = uu[CR[14]] * CR[21], uu[CR[105]] = uu[CR[54]] / CR[21], console.log(yu(uu[CR[21]])), console.log(yu(uu[CR[14]])), console.log(yu(uu[CR[54]])), console.log(yu(uu[CR[105]])))
            }
            Nu(123) in AR && Xu(), (CR[1], ru[CR[15]])("2 " + (yu ? (new Error)[Nu(124)] : ""))
          } else {
            function Vu(...uu) {
              DR(uu[CR[13]] = CR[1], uu[CR[109]] = function(...Ru) {
                return Ru[CR[13]] = CR[21], uu[-CR[106]]({}, Ru[CR[1]], Ru[CR[2]])
              }, uu[-CR[106]] = function(...Ru) {
                if (DR(Ru[CR[13]] = CR[20], Ru[-CR[107]] = {}), Ru[CR[1]][Ru[CR[2]] + Ru[CR[21]]] !== CR[18]) return Ru[CR[1]][Ru[CR[2]] + Ru[CR[21]]];
                if (Ru[CR[2]] === Ru[CR[21]]) return CR[108];
                for (Ru[CR[15]] = CR[1]; Ru[CR[15]] < Ru[CR[2]].length; Ru[CR[15]]++) Ru[-CR[107]][Ru[CR[2]][Ru[CR[15]]]] === CR[18] && (Ru[-CR[107]][Ru[CR[2]][Ru[CR[15]]]] = CR[1]), Ru[-CR[107]][Ru[CR[21]][Ru[CR[15]]]] === CR[18] && (Ru[-CR[107]][Ru[CR[21]][Ru[CR[15]]]] = CR[1]), DR(Ru[-CR[107]][Ru[CR[2]][Ru[CR[15]]]]++, Ru[-CR[107]][Ru[CR[21]][Ru[CR[15]]]]--);
                for (Ru[CR[4]] in Ru[-CR[107]])
                  if (Ru[-CR[107]][Ru[CR[4]]] !== CR[1]) return Ru[CR[1]][Ru[CR[2]] + Ru[CR[21]]] = CR[98], CR[98];
                for (Ru[CR[10]] = CR[2]; Ru[CR[10]] < Ru[CR[2]].length; Ru[CR[10]]++)
                  if (uu[-CR[106]](Ru[CR[1]], Ru[CR[2]].substr(CR[1], Ru[CR[10]]), Ru[CR[21]].substr(CR[1], Ru[CR[10]])) && uu[-CR[106]](Ru[CR[1]], Ru[CR[2]].substr(Ru[CR[10]]), Ru[CR[21]].substr(Ru[CR[10]])) || uu[-CR[106]](Ru[CR[1]], Ru[CR[2]].substr(CR[1], Ru[CR[10]]), Ru[CR[21]].substr(Ru[CR[21]].length - Ru[CR[10]])) && uu[-CR[106]](Ru[CR[1]], Ru[CR[2]].substr(Ru[CR[10]]), Ru[CR[21]].substr(CR[1], Ru[CR[21]].length - Ru[CR[10]]))) return Ru[CR[1]][Ru[CR[2]] + Ru[CR[21]]] = CR[108], CR[108];
                return Ru[CR[1]][Ru[CR[2]] + Ru[CR[21]]] = CR[98], CR[98]
              }, console.log(uu[CR[109]]))
            }
            if (mu(125) + "X" in AR && Vu(), BR(uu) < CR[86])(CR[1], ru[CR[15]])("3 " + (yu ? (new Error)[mu(126)] : ""));
            else {
              function Bu(...uu) {
                for (DR(uu[CR[13]] = CR[2], uu[CR[110]] = 'y0~81W[<%S:&knUD@>I4XL7sqK!ge23MC6m)9/?5zJoQB]law}PxZH*(`"r.cpF=f^{vAR_|V+;OYTGhNtu$jdEbi#,', uu[CR[15]] = "" + (uu[CR[1]] || ""), uu[CR[56]] = uu[CR[15]].length, uu[-CR[113]] = [], uu[-CR[111]] = CR[1], uu[-CR[112]] = CR[1], uu[CR[25]] = -CR[2]), uu[CR[3]] = CR[1]; uu[CR[3]] < uu[CR[56]]; uu[CR[3]]++)
                  if (uu[CR[29]] = uu[CR[110]].indexOf(uu[CR[15]][uu[CR[3]]]), uu[CR[29]] !== -CR[2])
                    if (uu[CR[25]] < CR[1]) uu[CR[25]] = uu[CR[29]];
                    else {
                      DR(uu[CR[25]] += uu[CR[29]] * CR[30], uu[-CR[111]] |= uu[CR[25]] << uu[-CR[112]], uu[-CR[112]] += (uu[CR[25]] & CR[32]) > CR[33] ? CR[34] : CR[35]);
                      do {
                        DR(uu[-CR[113]].push(uu[-CR[111]] & CR[12]), uu[-CR[111]] >>= CR[11], uu[-CR[112]] -= CR[11])
                      } while (uu[-CR[112]] > CR[25]);
                      uu[CR[25]] = -CR[2]
                    } return uu[CR[25]] > -CR[2] && uu[-CR[113]].push((uu[-CR[111]] | uu[CR[25]] << uu[-CR[112]]) & CR[12]), kR(uu[-CR[113]])
              }

              function xu(...uu) {
                return uu[CR[13]] = CR[2], typeof xR[uu[CR[1]]] === CR[17] ? xR[uu[CR[1]]] = Bu(SR[uu[CR[1]]]) : xR[uu[CR[1]]]
              }

              function Su(...uu) {
                DR(uu[CR[13]] = CR[1], uu[CR[15]] = function(...uu) {
                  for (DR(uu[CR[13]] = CR[2], uu[CR[5]] = uu[CR[1]].length, uu[CR[15]] = [], uu[CR[4]] = CR[1]), uu[-CR[71]] = CR[1]; uu[-CR[71]] < uu[CR[5]]; uu[-CR[71]]++) uu[CR[15]].push(uu[-CR[71]] !== CR[1] && uu[CR[1]][uu[-CR[71]]] > uu[CR[1]][uu[-CR[71]] - CR[2]] ? uu[CR[15]][uu[-CR[71]] - CR[2]] + CR[2] : CR[2]);
                  for (uu[CR[14]] = uu[CR[5]] - CR[2]; uu[CR[14]] >= CR[1]; uu[CR[14]]--) uu[CR[14]] !== uu[CR[5]] - CR[2] && uu[CR[1]][uu[CR[14]]] > uu[CR[1]][uu[CR[14]] + CR[2]] && (uu[CR[15]][uu[CR[14]]] = Math.max(uu[CR[15]][uu[CR[14]]], uu[CR[15]][uu[CR[14]] + CR[2]] + CR[2])), uu[CR[4]] += uu[CR[15]][uu[CR[14]]];
                  return uu[CR[4]]
                }, console.log(uu[CR[15]]))
              }
              xu(CR[80]) in AR && Su(), rR()
            }
          }
        } else {
          function pu(...uu) {
            for (DR(uu[CR[13]] = CR[2], uu[CR[5]] = '_y:&0`9#](+4L|x1l?.W5cXmE)hrD7Tq~oeb!S[sw@vfQ<^MuZ,pn;CK3{8a6JF/j$O*"gHB=>RI%YAtGk2UNzPd}iV', uu[-CR[93]] = "" + (uu[CR[1]] || ""), uu[CR[4]] = uu[-CR[93]].length, uu[CR[43]] = [], uu[CR[14]] = CR[1], uu[CR[54]] = CR[1], uu[CR[25]] = -CR[2]), uu[CR[3]] = CR[1]; uu[CR[3]] < uu[CR[4]]; uu[CR[3]]++)
              if (uu[CR[68]] = uu[CR[5]].indexOf(uu[-CR[93]][uu[CR[3]]]), uu[CR[68]] !== -CR[2])
                if (uu[CR[25]] < CR[1]) uu[CR[25]] = uu[CR[68]];
                else {
                  DR(uu[CR[25]] += uu[CR[68]] * CR[30], uu[CR[14]] |= uu[CR[25]] << uu[CR[54]], uu[CR[54]] += (uu[CR[25]] & CR[32]) > CR[33] ? CR[34] : CR[35]);
                  do {
                    DR(uu[CR[43]].push(uu[CR[14]] & CR[12]), uu[CR[14]] >>= CR[11], uu[CR[54]] -= CR[11])
                  } while (uu[CR[54]] > CR[25]);
                  uu[CR[25]] = -CR[2]
                } return uu[CR[25]] > -CR[2] && uu[CR[43]].push((uu[CR[14]] | uu[CR[25]] << uu[CR[54]]) & CR[12]), kR(uu[CR[43]])
          }

          function Tu(...uu) {
            return uu[CR[13]] = CR[2], typeof xR[uu[CR[1]]] === CR[17] ? xR[uu[CR[1]]] = pu(SR[uu[CR[1]]]) : xR[uu[CR[1]]]
          }(CR[1], ru[CR[15]])("5 " + (yu ? (new Error)[Tu(CR[76])] : ""))
        }
      }, Su.k.subscribe("customBindingsChanged", (() => {
        IR()
      }));
    let GR = !1,
      UR = !1;
    const nR = () => GR || UR && Gu.e.isInGame(),
      sR = uu => {
        nR() && uu.preventDefault()
      };
    Su.k.subscribe("displaymodeFullscreenChange", (uu => {
      tR()
    })), Su.k.subscribe("pointerLockUpdate", (uu => {
      GR = uu, tR(), lR()
    })), Su.k.subscribe("freeCursorUpdate", (uu => {
      UR = uu, tR(), lR()
    }));
    const tR = () => {
        window.removeEventListener("wheel", sR), Uu.j && !(0, mu.n)() && (GR || UR) && window.addEventListener("wheel", sR, {
          passive: !1
        })
      },
      lR = () => {
        window.removeEventListener("wheel", gR), (GR || UR) && window.addEventListener("wheel", gR, {
          passive: !1
        })
      },
      gR = uu => {
        !0 === uu.ctrlKey && nR() && uu.preventDefault()
      };

    function cR(uu) {
      Su.k.Op("QTEMouseState", {
        isDown: uu
      })
    }

    function LR(uu) {
      var Ru, yu, Ku, Qu, mu, Ju, Nu, Xu;
      const ru = (0, Du.h)();
      ru.huu = null !== (Ru = function(uu, Ru) {
        var yu, Eu;
        if (!JR) return null;
        const Ku = uu.bloxd;
        ER ??= Ku.getMetaInfo("Board").rootId;
        const Qu = null !== (yu = null === Ru || void 0 === Ru ? void 0 : Ru.M6) && void 0 !== yu ? yu : null;
        if (!Qu || Ku.getMetaInfo(Qu).rootId !== ER) return null;
        const mu = null !== (Eu = null === Ru || void 0 === Ru ? void 0 : Ru.position) && void 0 !== Eu ? Eu : null;
        if (Ku.playerCanChangePos(uu.ZI, mu[0], mu[1], mu[2])) return null;
        const Ju = (uu, Ru, yu) => {
          const Eu = Ku.blockDataOwner.getBlockData(uu, Ru, yu),
            Qu = null === Eu || void 0 === Eu ? void 0 : Eu.persisted.shared.text.split("\n")[0].toLowerCase().trim();
          return nu.singleLineBoardActions.has(Qu)
        };
        if (Ju(mu[0], mu[1], mu[2])) return null;
        let Nu;
        uu.KRu && (Nu = [...uu.KRu], uu.mq(Nu, Nu));
        const Xu = (Nu ? uu.camera.RP : 0) + Ku.getBlockReach(uu.ZI);
        return uu.pickBlock(Nu, uu.QRu, Xu, ((Ru, yu, Eu, Qu) => 0 !== Ru && ("Board" !== Ku.getMetaInfo(Ru).rootName || Ku.playerCanChangePos(uu.ZI, yu, Eu, Qu) || Ju(yu, Eu, Qu))))
      }(ru, ru.huu)) && void 0 !== Ru ? Ru : ru.huu;
      const xu = null !== (yu = null === (Ku = ru.huu) || void 0 === Ku ? void 0 : Ku.position) && void 0 !== yu ? yu : null,
        pu = null !== (Qu = ru.QRu) && void 0 !== Qu ? Qu : ru.camera.Mq(),
        Tu = Du.i.localPlayerPickActionHelper.getPickEntityResult(pu),
        Wu = null !== (mu = ru.huu) && void 0 !== mu && mu.M6 ? (0, cu.g)(ru.huu.M6) : "Air",
        ju = uu === Bu.e.UpFirePrimary || uu === Bu.e.UpFireSecondary,
        Hu = ju ? "onPlayerClickUp" : "onPlayerClick",
        du = ju ? uu === Bu.e.UpFireSecondary : uu === Bu.e.DownFireSecondary,
        bu = !ju && (0, Eu.getWasDoubleClick)();
      Su.k.Op("mouseState", {
        VV: uu,
        isDown: !ju
      }), (0, Eu.sendColyMessage)(Vu.mh, {
        VV: uu,
        rV: bu,
        VX: xu,
        rX: Tu
      }, !0), (0, Du.e)().client.triggerGameCallback(Hu, ru.ZI, du, null !== (Ju = null === xu || void 0 === xu ? void 0 : xu[0]) && void 0 !== Ju ? Ju : null, null !== (Nu = null === xu || void 0 === xu ? void 0 : xu[1]) && void 0 !== Nu ? Nu : null, null !== (Xu = null === xu || void 0 === xu ? void 0 : xu[2]) && void 0 !== Xu ? Xu : null, Wu, Tu)
    }
    window.addEventListener("keydown", (uu => {
      ["ArrowUp", "ArrowDown"].includes(uu.key) && uu.preventDefault()
    })), document.addEventListener("keydown", (uu => {
      (0, lu.d)(uu, (() => {
        const uu = (0, Du.h)();
        return (0, tu.E)(uu) || !1 !== uu.IH.canCustomiseChar
      }))
    }))
  },
  38841: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Qu,
      f: () => mu
    });
    var Eu = yu(38207);
    let Ku = !1;

    function Qu() {
      return Ku
    }

    function mu(uu) {
      Ku = uu, uu ? Eu.g.setMultiplierType("emoteWheel", 0) : Eu.g.removeMultiplier("emoteWheel")
    }
  },
  38844: (uu, Ru, yu) => {
    function Eu(uu) {
      return Boolean(uu.IH.useInventory && uu.IH.useFullInventory && uu.nH.hRu(uu.ZI))
    }
    yu.d(Ru, {
      c: () => Eu
    })
  },
  38721: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Qu,
      e: () => Ku
    });
    var Eu = yu(36882);

    function Ku(uu, Ru) {
      return {
        replayedClipName: uu,
        replayedClipAgeSeconds: Ru
      }
    }

    function Qu(uu, Ru, yu, Ku, Qu) {
      const mu = function(uu) {
          if ("object" !== typeof uu || null === uu) return null;
          const {
            replayedClipName: Ru,
            replayedClipAgeSeconds: yu
          } = uu;
          return "string" === typeof Ru && "number" === typeof yu ? {
            xQ: Ru,
            SQ: yu
          } : null
        }(yu),
        Ju = null === mu ? yu : null,
        {
          xQ: Nu = null,
          SQ: Xu = 0
        } = null !== mu && void 0 !== mu ? mu : {};
      uu.animateEntity(Ru, Eu.f.Custom, Ju, Ku, Qu, Nu, Xu)
    }
  },
  38752: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Su,
      e: () => Vu,
      g: () => xu,
      j: () => Bu,
      l: () => pu,
      n: () => ru
    });
    var Eu = yu(38760),
      Ku = yu(36960),
      Qu = yu(3490),
      mu = yu(1862),
      Ju = yu(34),
      Nu = yu(2632);
    const Xu = new Eu.d;

    function Vu() {
      return Xu
    }

    function ru() {
      Xu.clear()
    }

    function Bu() {
      for (const uu of Xu.ids()) {
        const Ru = Xu.getName(uu);
        void 0 !== Ru && mu.d.delete(Ru)
      }
      ru(), Ju.k.Op("playerRosterChanged", Xu.ids())
    }

    function xu(uu, Ru) {
      var yu, Eu;
      if (Xu.has(uu)) return Xu.getSetting(uu, Ru);
      const Ku = (0, Nu.h)();
      return null === (yu = Ku.MI[Ku.ZI]) || void 0 === yu || null === (Eu = yu[uu]) || void 0 === Eu ? void 0 : Eu[Ru]
    }

    function Su(uu) {
      const {
        added: Ru,
        removed: yu,
        settingChanges: Eu
      } = Xu.apply(uu);
      for (const {
          playerId: Ku,
          name: Qu
        }
        of yu) void 0 === Qu || Tu(Ku) || mu.d.delete(Qu);
      for (const {
          playerId: Qu,
          settings: mu
        }
        of Eu)
        if (Tu(Qu)) pu(Qu, mu);
        else
          for (const uu in mu)(0, Ku.m)(Qu, uu, mu[uu]);
      (Ru.length > 0 || yu.length > 0) && Ju.k.Op("playerRosterChanged", Xu.ids())
    }

    function pu(uu) {
      let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Xu.getSettings(uu);
      if (Ru) {
        (0, Ku.h)(uu);
        for (const yu in Ru)(0, Ku.e)(uu, yu, Ru[yu])
      }
    }

    function Tu(uu) {
      return uu === (0, Nu.h)().ERu || (0, Nu.e)().client.hasEntity(uu)
    }(0, Qu.onGameReset)(ru)
  },
  37838: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Du,
      c: () => Cu,
      e: () => eu,
      f: () => Au,
      i: () => Mu
    });
    var Eu = yu(36828),
      Ku = yu(37842),
      Qu = yu(352),
      mu = yu.n(Qu),
      Ju = yu(3199);
    const Nu = new Eu.MS,
      Xu = new Eu.MS,
      Vu = new Eu.MS,
      ru = new Eu.MS,
      Bu = new Eu.MS,
      xu = [0, 0, 0],
      Su = {
        x: 0,
        y: 0
      },
      pu = new Eu.MS(1, 0, 0),
      Tu = new Eu.MS(0, 1, 0),
      Wu = Eu.Matrix.Identity(),
      ju = new Eu.Matrix,
      Hu = new Eu.Matrix,
      du = new Eu.MS,
      bu = new Ku.c(0, 0, 0, 0);

    function Cu(uu, Ru) {
      var yu, Ku;
      const Qu = ku(uu, Ru);
      if (Qu) {
        const uu = Qu.x,
          Ru = Qu.y,
          yu = uu - 50,
          Eu = Ru - 50;
        return Math.abs(yu) <= Ju.b && Math.abs(Eu) <= (0, Ju.l)() ? {
          x: uu,
          y: Ru
        } : Gu(yu, Eu)
      }
      Vu.muu(Ru[0], Ru[1], Ru[2]),
        function(uu) {
          const Ru = uu.oS.fyu(),
            yu = Ru ? Eu.Matrix.FromArrayToRef(Ru.worldMatrix, 0, Hu) : uu.oS.lD().activeCamera.getWorldMatrix();
          Eu.MS.TransformNormalToRef(pu, yu, ru), ru.normalize(), Eu.MS.TransformNormalToRef(Tu, yu, Bu), Bu.normalize()
        }(uu);
      const mu = Eu.MS.Dot(Vu, ru);
      let Nu = -Eu.MS.Dot(Vu, Bu);
      Math.abs(mu) < .001 && Math.abs(Nu) < .001 && (Nu = -1);
      const Xu = null !== (yu = null === (Ku = uu.oS.fyu()) || void 0 === Ku ? void 0 : Ku.projectionMatrix) && void 0 !== yu ? yu : uu.oS.lD().activeCamera.getProjectionMatrix().m;
      return Gu(mu * Xu[0], Nu * Xu[5])
    }

    function ku(uu, Ru) {
      const yu = uu.oS.lD(),
        Ku = yu.eS(),
        Qu = Ku.getRenderWidth(),
        mu = Ku.getRenderHeight();
      bu.width = Qu, bu.height = mu;
      const Ju = uu.oS.fyu(),
        Vu = Ju ? du.muu(Ju.eye[0], Ju.eye[1], Ju.eye[2]) : uu.oS.camera.globalPosition;
      Nu.muu(Vu.x + 10 * Ru[0], Vu.y + 10 * Ru[1], Vu.z + 10 * Ru[2]);
      const ru = Ju ? Eu.Matrix.FromArrayToRef(Ju.viewProjectionMatrix, 0, ju) : yu.getTransformMatrix();
      return Eu.MS.ProjectToRef(Nu, Wu, ru, bu, Xu), Xu.z < 0 || Xu.z > 1 ? null : (Su.x = Xu.x / Qu * 100, Su.y = Xu.y / mu * 100, Su)
    }

    function eu(uu, Ru) {
      return Cu(uu, Iu(uu, Ru))
    }

    function Au(uu, Ru) {
      const yu = ku(uu, Iu(uu, Ru));
      return yu && {
        x: yu.x,
        y: yu.y
      }
    }

    function Du(uu) {
      var Ru, yu;
      return 1 / (null !== (Ru = null === (yu = uu.oS.fyu()) || void 0 === yu ? void 0 : yu.projectionMatrix[0]) && void 0 !== Ru ? Ru : uu.oS.lD().activeCamera.getProjectionMatrix().m[0])
    }

    function Mu(uu, Ru, yu) {
      const Eu = uu.oS.fyu(),
        Ku = Eu ? Eu.worldMatrix : uu.oS.lD().activeCamera.getWorldMatrix().m,
        Qu = uu.BB;
      for (let mu = 0; mu < 3; mu++) Ru[mu] = Ku[12 + mu] + Qu[mu], yu[mu] = Ku[8 + mu];
      mu().normalize(yu, yu)
    }

    function Iu(uu, Ru) {
      const yu = uu.BB,
        Eu = uu.oS.fyu(),
        Ku = Eu ? du.muu(Eu.eye[0], Eu.eye[1], Eu.eye[2]) : uu.oS.camera.globalPosition;
      return xu[0] = Ru[0] - yu[0] - Ku.x, xu[1] = Ru[1] - yu[1] - Ku.y, xu[2] = Ru[2] - yu[2] - Ku.z, mu().normalize(xu, xu), xu
    }

    function Gu(uu, Ru) {
      return (0, Ju.f)(uu, Ru, Ju.b, (0, Ju.l)())
    }
  },
  38797: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Ju
    });
    var Eu = yu(34),
      Ku = yu(1250),
      Qu = yu(3273);
    const mu = "Reconnecting";
    class Ju {
      constructor(uu) {
        this.hooks = uu, this.graceMs = 0, this.sessionBased = !1, this.controller = void 0, this.frozen = !1, this.stopped = !1, this.listening = !1, this.ended = !1, this.retryNow = () => {
          "visible" === document.visibilityState && this.controller.retryNow()
        }, this.onPageHide = uu => {
          uu.persisted || this.leave()
        }, this.controller = new Qu.d((Ru => uu.reconnect(Ru)), {
          isSessionLive: () => !this.ended && uu.isLive(),
          onPhaseChanged: uu => {
            this.onPhaseChanged(uu)
          },
          onReconnected: Ru => {
            uu.onReconnected(Ru)
          },
          onGaveUp: Ru => {
            !this.ended && uu.isLive() && uu.onGaveUp(this.sessionBased, Ru)
          }
        })
      }
      onInitialInfo(uu, Ru) {
        this.graceMs = uu, this.sessionBased = Ru
      }
      canHoldSeat() {
        return this.graceMs > 0 && !this.ended
      }
      isResuming() {
        return "connected" !== this.controller.phase
      }
      onConnectionLost(uu) {
        this.ended || this.controller.onConnectionLost(uu, this.graceMs)
      }
      onResuming() {
        this.ended || this.controller.onResuming()
      }
      onResumed() {
        this.controller.stop()
      }
      leave() {
        const uu = this.isResuming() && !this.controller.awaitingResumeOnRoom,
          Ru = this.controller.heldToken;
        this.end(), uu && "" !== Ru && this.hooks.releaseSeat(Ru)
      }
      end() {
        this.ended = !0, this.controller.stop()
      }
      onPhaseChanged(uu) {
        const Ru = "frozen" === uu || "resuming" === uu;
        Ru !== this.stopped && (this.stopped = Ru, this.hooks.freeze(Ru));
        const yu = "frozen" === uu || "resuming" === uu && this.frozen;
        yu && !this.frozen ? (0, Ku.o)(mu) : !yu && this.frozen && (0, Ku.m)(mu), this.frozen = yu, this.setListening("connected" !== uu), Eu.k.Op(Qu.n, yu ? "frozen" : uu)
      }
      setListening(uu) {
        uu !== this.listening && (this.listening = uu, uu ? (window.addEventListener("online", this.retryNow), document.addEventListener("visibilitychange", this.retryNow), window.addEventListener("pagehide", this.onPageHide)) : (window.removeEventListener("online", this.retryNow), document.removeEventListener("visibilitychange", this.retryNow), window.removeEventListener("pagehide", this.onPageHide)))
      }
    }
  },
  38802: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Eu
    });
    class Eu {
      constructor(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.onSilent = uu, this.now = Ru, this.lastHeardAt = void 0, this.resumedAt = void 0, this.lastCheckAt = void 0, this.wasVisible = "visible" === document.visibilityState, this.interval = void 0, this.check = () => {
          const uu = this.now(),
            Ru = uu - this.lastCheckAt <= 2e3;
          this.lastCheckAt = uu;
          const yu = "visible" === document.visibilityState;
          !yu || Ru && this.wasVisible || (this.resumedAt = uu), this.wasVisible = yu, yu && uu - this.lastHeardAt > 12e3 && uu - this.resumedAt > 2e3 && this.onSilent()
        }, this.lastHeardAt = Ru(), this.resumedAt = this.lastHeardAt, this.lastCheckAt = this.lastHeardAt, this.interval = setInterval(this.check, 1e3), document.addEventListener("visibilitychange", this.check), window.addEventListener("online", this.check)
      }
      heard() {
        this.lastHeardAt = this.now()
      }
      dispose() {
        clearInterval(this.interval), document.removeEventListener("visibilitychange", this.check), window.removeEventListener("online", this.check)
      }
    }
  },
  38775: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Bu
    });
    var Eu = yu(212),
      Ku = yu(352),
      Qu = yu.n(Ku),
      mu = yu(36545),
      Ju = yu(36549),
      Nu = yu(2632);
    const Xu = Eu.f.UW * Eu.f.playerEyeToHeightRatio,
      Vu = 250,
      ru = 1.1,
      Bu = new class {
        constructor() {
          this.entities = new Map, this.playing = new Map, this.msSinceLastScan = 0
        }
        add(uu, Ru) {
          this.entities.set(uu, Ru)
        }
        update(uu, Ru) {
          const yu = this.entities.get(uu);
          this.entities.set(uu, Ru);
          const Eu = this.playing.get(uu);
          Eu && (yu && yu.soundName === Ru.soundName ? (Eu.sound.setRelativeVolume(Ru.volume), Eu.sound.rate(Ru.rate), Eu.sound.setPannerAttr({
            refDistance: Ru.refDistance
          })) : this.stopEntity(uu))
        }
        remove(uu) {
          this.stopEntity(uu), this.entities.delete(uu)
        }
        sr(uu) {
          this.msSinceLastScan += uu, this.msSinceLastScan < Vu || (this.msSinceLastScan = 0, this.scan())
        }
        stopEntity(uu) {
          const Ru = this.playing.get(uu);
          Ru && (Ru.sound.stop(), this.playing.delete(uu))
        }
        startEntity(uu, Ru, yu) {
          const Eu = (0, Ju.d)(Ru.soundName);
          if (!Eu) return console.error(`AudioEntityManager: no sound found for "${Ru.soundName}", dropping audio entity ${uu}`), void this.remove(uu);
          const Ku = mu.d.play(Eu, Ru.volume, yu, Ru.maxHearDist, Ru.refDistance, !0);
          Ku.rate(Ru.rate), this.playing.set(uu, {
            sound: Ku,
            lastPos: Qu().clone(yu)
          })
        }
        scan() {
          const uu = (0, Nu.h)();
          if (!uu) return;
          const Ru = uu.nH.mH(uu.ZI);
          if (Ru)
            for (const [yu, Eu] of this.entities) {
              if (!uu.nH.RRu(yu, "position")) continue;
              const Ku = uu.nH.mH(yu),
                mu = Qu().sqrDist(Ru, Ku),
                Ju = this.playing.get(yu);
              if (Ju) {
                const uu = Eu.maxHearDist * ru;
                mu > uu * uu ? this.stopEntity(yu) : Qu().equals(Ku, Ju.lastPos) || (Ju.sound.setPosition([Ku[0], Ku[1] + Xu, Ku[2]]), Qu().copy(Ju.lastPos, Ku))
              } else mu <= Eu.maxHearDist * Eu.maxHearDist && this.startEntity(yu, Eu, Ku)
            }
        }
      }
  },
  38812: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Xu,
      d: () => Vu
    });
    var Eu = yu(1646),
      Ku = yu(212),
      Qu = yu(1626),
      mu = yu(1690),
      Ju = yu(1176),
      Nu = yu(1110);
    async function Xu(uu, Ru) {
      return function(uu) {
        return "object" === typeof uu && null !== uu && uu.code === Ku.c.VpnIp.code
      }(Ru) && function(uu) {
        return Qu.d.supports("appCheck") && uu.isLoggedIn() && !uu.hasTriedAppAttestation()
      }(uu) && await async function(uu) {
        try {
          const {
            token: Ru
          } = await (0, mu.e)(), {
            "3PSIDMCPP": yu
          } = await (0, Nu.postJsonWithMetricsCookiesAndJsonResponse)(`${Ju.clientSideServerUrls.indexUrl}/index/app-attestation`, {
            appCheckToken: Ru
          }, {
            retries: 0
          }, uu.getMetricsCookies());
          return uu.setAppAttestedAuthJwt(yu), !0
        } catch (Ru) {
          return Ru instanceof Eu.c && "failed" === Ru.code ? (console.warn("The app couldn't get an App Check token:", Ru), uu.markAppAttestationTried()) : console.error("Failed to attest the app:", Ru), !1
        }
      }(uu)
    }
    async function Vu(uu, Ru) {
      try {
        return await Ru()
      } catch (yu) {
        if (!await Xu(uu, yu)) throw yu
      }
      return Ru()
    }
  },
  38808: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Bu,
      e: () => Vu
    });
    var Eu = yu(212),
      Ku = yu(1731),
      Qu = yu(1739),
      mu = yu(8652);
    const Ju = [250, 500, 1e3, 2e3, 1250],
      Nu = 406;

    function Xu(uu) {
      if ("object" !== typeof uu || null === uu) return !1;
      const {
        code: Ru,
        message: yu
      } = uu, Ku = Eu.c.duplicateLobbyNameError;
      return (Ru === Ku.code || Ru === Nu) && (yu === Ku.text || yu === Ku.text + Eu.j)
    }
    async function Vu(uu, Ru) {
      let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Ku.d;
      for (let Ku = 0;; Ku++) {
        let mu;
        (0, Qu.p)(Ru);
        try {
          return await uu()
        } catch (Eu) {
          if (mu = Ju[Ku], void 0 === mu || !Xu(Eu)) throw Eu
        }
        await yu(mu, Ru)
      }
    }
    const ru = new Set([Eu.c.duplicateLobbyNameError.code, Eu.c.lobbyCantBeCreated.code, Eu.c.roomDisposedEarlyError.code, Eu.c.roomDisposedLateError.code, Eu.c.serverRoomLimitReached.code]);

    function Bu(uu) {
      if (Xu(uu)) return !0;
      const Ru = (0, mu.g)(uu);
      return "number" === typeof Ru && ru.has(Ru)
    }
  },
  38737: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Qu,
      e: () => Ku
    });
    var Eu = yu(34);

    function Ku(uu) {
      return "refetchCode" === uu || "devDownloadJson" === uu || uu.startsWith("Plugin")
    }

    function Qu(uu, Ru) {
      "refetchCode" !== uu ? "Plugin|MobAiPlugin|ShowPetUi" !== uu ? Promise.all([yu.e(105), yu.e(106), yu.e(101), yu.e(103), yu.e(210)]).then((() => yu(41326))).then((yu => {
        let {
          runClientGameMessage: Eu
        } = yu;
        Eu(uu, Ru)
      })).catch((Ru => {
        console.error(`Game message ${uu} failed`, Ru)
      })) : Eu.k.Op("showPetUi", Ru) : Eu.k.Op("refetchCode")
    }
  },
  8652: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Qu,
      g: () => mu,
      j: () => Ju,
      l: () => Xu,
      p: () => Nu
    });
    var Eu = yu(212),
      Ku = yu(4409);

    function Qu(uu) {
      return mu(uu) === Eu.c.gameOrPluginOnPlayerAuthRejected.code
    }

    function mu(uu) {
      return "object" === typeof uu && null !== uu ? uu.code : void 0
    }

    function Ju(uu) {
      var Ru;
      return null !== (Ru = Object.keys(Ku.e).find((Ru => Ku.e[Ru] === uu))) && void 0 !== Ru ? Ru : null
    }

    function Nu(uu) {
      return "notWhitelisted" === uu ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const Xu = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  },
  38818: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Eu,
      i: () => Ku
    });
    const Eu = 45e3;
    class Ku extends Error {
      constructor() {
        super("The game server didn't answer in time"), this.name = "SeatRequestTimedOut"
      }
    }
  },
  38723: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Vu
    });
    var Eu = yu(1199),
      Ku = yu(1289),
      Qu = yu(27),
      mu = yu(1269),
      Ju = yu(1280),
      Nu = yu(1467),
      Xu = yu(36322);

    function Vu(uu) {
      let {
        uu: Ru,
        Ru: yu
      } = uu;
      const Vu = null !== Ru && void 0 !== Ru ? Ru : (0, Ju.c)().gameNameWithVariation;
      (0, Eu.J)(Vu) && ((0, Xu.n)(), (0, mu.lb)((() => {
        console.log("Received matchmaking order from game server to game", Ru), (0, Qu.i)("inGameReplay"), (0, Nu.navigatePreserveSearch)((0, Ku.b)(Vu, null !== yu && void 0 !== yu ? yu : void 0))
      }), "video_start"))
    }
  },
  38714: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Nu,
      f: () => mu,
      i: () => Ju,
      m: () => Xu
    });
    var Eu = yu(34),
      Ku = yu(1311);
    const Qu = new Map;

    function mu(uu, Ru) {
      Eu.k.Op("newUiRequest", {
        id: uu,
        clientParameters: Ru
      }, !0)
    }

    function Ju(uu) {
      Eu.k.Op("removeUiRequest", uu, !0);
      const Ru = Qu.get(uu);
      Ru && (Ru.tearDownNotification(), Qu.delete(uu))
    }

    function Nu() {
      Eu.k.Op("clearUiRequests");
      for (const uu of Qu.values()) uu.tearDownNotification();
      Qu.clear()
    }

    function Xu(uu, Ru, yu) {
      const Eu = Ku.NotificationProvider.showPromptPopup({
        title: Ru,
        confirmText: "general:yes",
        cancelText: "general:no",
        unlockPointerKey: "uiRequestPopup"
      });
      Qu.set(uu, Eu), Eu.getResult().then((Ru => {
        Qu.delete(uu), "notificationTornDown" !== Ru && yu(Ru)
      }))
    }
  },
  38746: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Ju,
      i: () => Nu,
      l: () => Xu
    });
    var Eu = yu(1199),
      Ku = yu(1001),
      Qu = yu(36632),
      mu = yu(34);

    function Ju(uu) {
      let {
        lobbyName: Ru,
        gameNameWithVariation: yu
      } = uu;
      return !(0, Eu.N)(Ru) || null !== yu && (yu.startsWith("testGym") || (0, Ku.i)(yu))
    }

    function Nu(uu) {
      return uu.WR === Qu.e.Leave || uu.WR === Qu.e.Cursor
    }

    function Xu(uu) {
      mu.k.Op("codeCollab", {
        type: uu.WR,
        docKey: uu.jR,
        version: uu.HR,
        editorCount: uu.dR,
        peers: uu.bR,
        updates: uu.CR,
        playerId: uu.kR,
        playerName: uu.eR,
        colour: uu.AR,
        anchor: uu.DR,
        head: uu.MR,
        existingCursors: uu.IR,
        files: uu.GR,
        engineSettings: uu.UR
      })
    }
  },
  38760: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Eu
    });
    class Eu {
      constructor() {
        this.members = new Map
      }
      apply(uu) {
        const Ru = {
          added: [],
          removed: [],
          settingChanges: []
        };
        for (const Eu of uu.SE) {
          let uu = this.members.get(Eu.pE);
          if (uu || (uu = {
              name: null,
              settings: {}
            }, this.members.set(Eu.pE, uu), Ru.added.push(Eu.pE)), null !== Eu.TE && (uu.name = Eu.TE), null !== Eu.WE || Eu.jE.length > 0) {
            const yu = null === Eu.WE ? {} : JSON.parse(Eu.WE);
            Object.assign(uu.settings, yu);
            for (const Ru of Eu.jE) delete uu.settings[Ru], yu[Ru] = void 0;
            Ru.settingChanges.push({
              playerId: Eu.pE,
              settings: yu
            })
          }
        }
        for (const Eu of uu.HE) {
          const uu = this.members.get(Eu);
          var yu;
          if (uu) this.members.delete(Eu), Ru.removed.push({
            playerId: Eu,
            name: null !== (yu = uu.name) && void 0 !== yu ? yu : void 0
          })
        }
        return Ru
      }
      has(uu) {
        return this.members.has(uu)
      }
      ids() {
        return [...this.members.keys()]
      }
      getName(uu) {
        var Ru, yu;
        return null !== (Ru = null === (yu = this.members.get(uu)) || void 0 === yu ? void 0 : yu.name) && void 0 !== Ru ? Ru : void 0
      }
      getSettings(uu) {
        var Ru;
        return null === (Ru = this.members.get(uu)) || void 0 === Ru ? void 0 : Ru.settings
      }
      getSetting(uu, Ru) {
        var yu;
        return null === (yu = this.members.get(uu)) || void 0 === yu ? void 0 : yu.settings[Ru]
      }
      clear() {
        this.members.clear()
      }
    }
  },
  38792: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Eu,
      d: () => Ku
    });
    const Eu = ["description", "label"];

    function Ku(uu) {
      const Ru = uu.type;
      return {
        type: Ru,
        params: uu[Ru]
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);