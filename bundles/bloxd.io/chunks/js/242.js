export const id = 242;
export const ids = [242];
export const modules = {
  39237: (mm, Tm, fm) => {
    function hm(mm) {
      return !(!mm.lobbyLeaderboardInfo && !mm.lobbyManage)
    }
    fm.d(Tm, {
      c: () => hm
    })
  },
  39209: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => am,
      d: () => xm
    });
    var hm = fm(31);
    let Am = !1;

    function am() {
      return Am
    }

    function xm(mm) {
      Am !== mm && (Am = mm, hm.j.gp("replayViewer|videoExportChanged"))
    }
  },
  39140: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => am
    });
    var hm = fm(31),
      Am = fm(1928);

    function am(mm) {
      let {
        taskId: Tm,
        progress: fm
      } = mm;
      const hm = Am.b.get("_tasks");
      null !== hm && void 0 !== hm && hm[Tm] && Am.b.apply({
        _tasks: {
          ...hm,
          [Tm]: {
            ...hm[Tm],
            progress: fm
          }
        }
      })
    }
    hm.j.subscribe("clientTaskProgress", (mm => {
      am(mm)
    }))
  },
  39229: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => Km,
      e: () => Qm,
      g: () => Im
    });
    var hm = fm(4741),
      Am = fm(2813),
      am = fm(1877);
    const xm = new Map(Object.entries(hm.m).map((mm => {
      let [Tm, fm] = mm;
      return [fm, Tm]
    })));

    function wm(mm) {
      return (0, am.F)(mm).toFixed(1)
    }

    function Dm(mm, Tm) {
      return `camera set by ${xm.get(mm[Tm+1])}: heading ${`${wm(mm[Tm+2])} -> ${wm(mm[Tm+4])}`} deg, pitch ${`${wm(mm[Tm+3])} -> ${wm(mm[Tm+5])}`} deg, at ${mm[Tm].toFixed(1)} ms`
    }
    class im {
      constructor(mm, Tm) {
        this.width = mm, this.yp = Tm, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(mm * Tm)
      }
      push(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const fm = this.data.subarray(this.next * this.width, (this.next + 1) * this.width);
        for (let hm = 0; hm < this.width; hm++) fm[hm] = mm[Tm + hm];
        return this.next = (this.next + 1) % this.yp, this.size = Math.min(this.size + 1, this.yp), fm
      }
      lines() {
        const mm = [],
          Tm = (this.next - this.size + this.yp) % this.yp;
        for (let fm = 0; fm < this.size; fm++) {
          const hm = (Tm + fm) % this.yp * this.width;
          mm.push(Array.from(this.data.subarray(hm, hm + this.width)).join(","))
        }
        return mm
      }
    }
    const Rm = 0,
      pm = 2,
      Em = 3,
      om = 4;

    function Om(mm) {
      return Number.isFinite(mm) ? String(Math.round(10 * mm) / 10) : String(mm)
    }

    function Ym(mm) {
      return Number.isFinite(mm) ? mm.toFixed(1) : String(mm)
    }
    class qm {
      constructor() {
        this.frames = 0, this.looked = 0, this.idle = 0, this.Fs = 0, this.pastLimit = 0, this.lockSkips = 0, this.jq = 0, this.lost = 0, this.dropped = 0, this.longFrames = 0, this.dtMin = 1 / 0, this.dtMax = 0, this.dtSum = 0, this.raw = [0, 0], this.turned = [0, 0], this.peakRate = 0, this.events = 0, this.eventMax = 0, this.bigEvents = 0, this.cameraSets = 0, this.cameraSetsLost = 0, this.outliers = 0, this.eventLines = 0, this.suppressed = 0
      }
      moved() {
        return this.events > 0 || 0 !== this.raw[0] || 0 !== this.raw[1] || this.lockSkips > 0 || this.Fs > 0 || this.dropped > 0 || this.cameraSets > 0
      }
      hasEvent() {
        return this.Fs > 0 || this.pastLimit > 0 || this.bigEvents > 0 || this.dropped > 0 || this.cameraSets > 0
      }
    }
    class jm {
      constructor() {
        var mm = this;
        this.remote = (0, Am.p)(), this.tally = new qm, this.records = new im(10, this.remote ? 1 : 3600), this.events = new im(4, this.remote ? 1 : 12e3), this.event = new Float64Array(4), this.takes = null, this.client = "js", this.started = !1, this.record = function(Tm) {
          let fm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          const [hm, Am, am, xm, wm, Dm, im, qm, jm, Vm] = mm.records.push(Tm, fm), Im = mm.tally;
          switch (Im.frames++, im) {
            case Rm:
              return void Im.idle++;
            case om:
              return void Im.jq++;
            case Em:
              return Im.lockSkips++, void(0 === am && 0 === xm || mm.outlier(`lock skip dropped raw (${Om(am)}, ${Om(xm)}) at ${Ym(hm)} ms`))
          }
          Im.looked++, Number.isFinite(Am) && (Im.dtMin = Math.min(Im.dtMin, Am), Im.dtMax = Math.max(Im.dtMax, Am), Im.dtSum += Am, Am > 0 && (Im.peakRate = Math.max(Im.peakRate, Math.hypot(wm, Dm) / Am))), Im.raw[0] += am, Im.raw[1] += xm, Im.turned[0] += wm, Im.turned[1] += Dm;
          const Km = Math.abs(am) > Vm || Math.abs(xm) > Vm,
            Qm = `raw (${Om(am)}, ${Om(xm)}) over ${Ym(Am)} ms, limit ${Om(Vm)}, filter v (${qm.toFixed(3)}, ${jm.toFixed(3)}) px/ms, at ${Ym(hm)} ms`;
          im === pm ? (Im.Fs++, mm.outlier(`spike put right: ${Qm} -> turned (${Om(wm)}, ${Om(Dm)})`)) : Km ? (Im.pastLimit++, mm.outlier(`kept past limit: ${Qm}`)) : Am > 50 && (Im.longFrames++, mm.remote || mm.outlier(`long frame: ${Qm}, turned in full`))
        }, this.onMouseMove = mm => {
          const Tm = this.tally,
            {
              movementX: fm,
              movementY: hm
            } = mm;
          Tm.events++;
          const Am = Math.max(Math.abs(fm), Math.abs(hm));
          Tm.eventMax = Math.max(Tm.eventMax, Am);
          const am = null !== document.pointerLockElement,
            xm = this.event;
          xm[0] = mm.timeStamp, xm[1] = fm, xm[2] = hm, xm[3] = am ? 1 : 0, this.events.push(xm), Am >= 200 && (Tm.bigEvents++, this.eventOutlier(`big mousemove (${fm}, ${hm}) at ${Ym(mm.timeStamp)} ms, lock ${am?"ni":"free"}`))
        }, this.onLockChange = () => {
          const mm = document.pointerLockElement;
          (0, Am.g)("look", `pointer lock ${mm?`gained (${mm.tagName.toLowerCase()})`:"lost"} at ${Ym(performance.now())} ms`)
        }, this.onLockError = () => {
          (0, Am.g)("look", `pointer lock request failed at ${Ym(performance.now())} ms`)
        }, this.onVisibility = () => {
          (0, Am.g)("look", `page ${document.visibilityState} at ${Ym(performance.now())} ms`)
        }, this.flush = () => {
          this.takeRecords();
          const mm = this.tally;
          if (this.tally = new qm, !mm.moved() || this.remote && !mm.hasEvent()) return;
          const Tm = mm.looked > 0 ? mm.dtSum / mm.looked : NaN,
            fm = [`${mm.frames} frames (${mm.looked} looked, ${mm.idle} idle${"wasm"===this.client?`, ${mm.jq} carried`:""})`, `dt avg ${Ym(Tm)} min ${Ym(mm.dtMin)} max ${Ym(mm.dtMax)}, ${mm.longFrames} long`, `${mm.events} mousemoves (max ${Om(mm.eventMax)} px, ${mm.bigEvents} big)`, `raw (${Om(mm.raw[0])}, ${Om(mm.raw[1])}) turned (${Om(mm.turned[0])}, ${Om(mm.turned[1])})`, `peak ${mm.peakRate.toFixed(2)} px/ms`, `put right ${mm.Fs}, past limit ${mm.pastLimit}, lock skips ${mm.lockSkips}`, "lock " + (document.pointerLockElement ? "ni" : "free")];
          mm.dropped > 0 && fm.push(`${mm.dropped} doubled spike copies dropped`), mm.cameraSets > 0 && fm.push(`${mm.cameraSets} camera sets`), mm.cameraSetsLost > 0 && fm.push(`${mm.cameraSetsLost} camera set records lost`), mm.lost > 0 && fm.push(`${mm.lost} records lost`), mm.suppressed > 0 && fm.push(`${mm.suppressed} outlier lines not shown`), (0, Am.g)("look", `1s: ${fm.join("; ")}`)
        }, this.dump = () => [`look records (${this.client}): nowMs,dtMs,rawX,rawY,turnedX,turnedY,outcome,vX,vY,limit`, ...this.records.lines(), "mousemove events: timeStamp,movementX,movementY,locked", ...this.events.lines()].join("\n")
      }
      start(mm, Tm) {
        this.client = mm, this.takes = Tm;
        const {
          screen: fm
        } = window;
        (0, Am.g)("look", `start: ${mm} client, dpr ${window.devicePixelRatio}, screen ${fm.width}x${fm.height}, pointer lock ${document.pointerLockElement?"ni":"free"}`), this.started || (this.started = !0, window.addEventListener("mousemove", this.onMouseMove, {
          capture: !0,
          passive: !0
        }), document.addEventListener("pointerlockchange", this.onLockChange), document.addEventListener("pointerlockerror", this.onLockError), document.addEventListener("visibilitychange", this.onVisibility), setInterval(this.flush, 1e3), this.remote || (0, Am.f)("look", this.dump))
      }
      outlier(mm) {
        const Tm = this.tally;
        Tm.outliers >= 20 ? Tm.suppressed++ : (Tm.outliers++, (0, Am.g)("look", mm))
      }
      eventOutlier(mm) {
        const Tm = this.tally;
        Tm.eventLines >= 10 ? Tm.suppressed++ : (Tm.eventLines++, (0, Am.g)("look", mm))
      }
      takeRecords() {
        if (null === this.takes) return;
        const mm = this.takes.look();
        if (mm.length >= 2) {
          this.tally.lost += mm[0], this.tally.dropped += mm[1];
          for (let Tm = 2; Tm + 10 <= mm.length; Tm += 10) this.record(mm, Tm)
        }
        const Tm = this.takes.cameraSets();
        if (Tm.length >= hm.b) {
          this.tally.cameraSetsLost += Tm[0];
          for (let mm = hm.b; mm + hm.e <= Tm.length; mm += hm.e) this.tally.cameraSets++, this.outlier(Dm(Tm, mm))
        }
      }
      droppedCopy() {
        this.tally.dropped++
      }
      endTake() {
        this.takeRecords(), this.takes = null
      }
    }
    let Vm = null;

    function Im(mm) {
      let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return Vm ??= new jm, Vm.start(mm, Tm), Vm.record
    }

    function Km() {
      var mm;
      null === (mm = Vm) || void 0 === mm || mm.endTake()
    }

    function Qm() {
      var mm;
      null === (mm = Vm) || void 0 === mm || mm.droppedCopy()
    }
  },
  39079: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => mf,
      f: () => WT,
      g: () => FT
    });
    var hm = fm(3672),
      Am = fm(168),
      am = fm(198),
      xm = fm(658),
      wm = fm(37),
      Dm = fm(2760),
      im = fm(3729),
      Rm = fm(3716),
      pm = fm(1235);
    const Em = new WeakMap;
    class om {
      constructor(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
          Nim: !0
        };
        this.callbacks = Tm, this.options = fm, this.nfm = void 0, this.sessionId = void 0, this.Yk = [], this.Gim = !1, this.PO = !1, this.Xim = void 0, this.Rk = 0, this.KAm = 0, this.Pim = (mm, Tm) => {
          if (this.PO) return;
          const fm = Number(mm);
          this.Gim ? this.Him(fm, Tm) : this.Yk.push({
            id: fm,
            payload: Tm
          })
        }, this.dispose = () => {
          this.PO || (this.PO = !0, Em.delete(this), this.Yk.length = 0, this.Xim())
        }, this.nfm = mm, this.sessionId = mm.sessionId, Em.set(this, []), this.Xim = this.yim()
      }
      Cim(mm) {
        this.Xim(), this.nfm = mm, this.sessionId = mm.sessionId, this.Rk = 0, this.KAm = 0, this.Xim = this.yim()
      }
      get uZ() {
        return this.KAm
      }
      yim() {
        const mm = this.nfm.lV("*", this.Pim);
        return this.options.Nim && this.nfm.tV(this.dispose), mm
      }
      Him(mm, Tm) {
        try {
          (0, im.rc)(mm) && (Tm = (0, im.e)(mm, Rm.XO.from(Tm)));
          const fm = Em.get(this)[mm];
          if ("function" !== typeof fm) {
            if (this.callbacks.Mim) return void this.callbacks.Mim(mm, Tm);
            throw new Error(`No onMessage handler registered for message id ${mm}`)
          }
          fm(Tm)
        } catch (fm) {
          this.callbacks.uim(`Error in onMessage ${mm} with payload ${JSON.stringify(Tm)}`, fm)
        } finally {
          this.Rk++
        }
      }
      Bim() {
        for (const {
            id: mm,
            payload: Tm
          }
          of this.Yk) {
          if (this.PO) break;
          this.Him(mm, Tm)
        }
        this.Yk.length = 0
      }
      aJ() {
        return this.PO
      }
      Lim() {
        if (this.Gim || this.PO) throw new Error("Trying to getOnMessageRegistrationHandler after registration finished");
        return {
          lV: (mm, Tm) => {
            if (this.Gim || this.PO) throw new Error("Trying to call onMessage after registration finished");
            this.lV(mm, Tm)
          },
          finishRegistration: () => {
            if (this.PO) throw new Error("Cannot finish message registration after disposal");
            this.Gim = !0, this.Bim()
          }
        }
      }
      lV(mm, Tm) {
        var fm, hm;
        null === (fm = (hm = this.callbacks).vim) || void 0 === fm || fm.call(hm);
        const Am = Em.get(this);
        for (; mm > Am.length;) Am[Am.length] = null;
        Am[mm] = Tm
      }
      send(mm, Tm) {
        this.tim(), (0, pm.x)(Tm) ? this.nfm.Lk(mm, Tm) : this.nfm.send(mm, Tm)
      }
      tim() {
        var mm, Tm;
        (this.KAm++, 5 === Om++) && (null === (mm = (Tm = this.callbacks).vim) || void 0 === mm || mm.call(Tm), Om = 0)
      }
      YV() {
        this.dispose(), this.nfm.YV()
      }
      leave() {
        this.dispose(), this.nfm.leave()
      }
    }
    let Om = 0;
    var Ym = fm(3689);
    class qm extends om {
      constructor(mm) {
        super(mm, {
          vim: () => {
            (0, wm.l)(!0) && (0, hm.sZ)()
          },
          uim: (mm, Tm) => {
            var fm;
            null === (fm = (0, Dm.d)()) || void 0 === fm || fm.sY(mm, Tm)
          }
        }, {
          Nim: !1
        }), (0, Ym.g)(mm)
      }
      Vk(mm, Tm) {
        return !!(0, Ym.l)((0, Ym.e)(), this.nfm, mm, Tm) && (this.tim(), !0)
      }
      Cim(mm) {
        this.Uim(), super.Cim(mm), (0, Ym.g)(mm)
      }
      YV() {
        super.YV(), this.Uim()
      }
      Uim() {
        this.nfm.qV.JO.vN = void 0
      }
    }
    var jm = fm(31),
      Vm = fm(1928),
      Im = fm(1713),
      Km = fm(36545),
      Qm = fm(39088),
      nm = fm(38098),
      Jm = fm(37858),
      cm = fm(653),
      zm = fm(38504);

    function Zm(mm, Tm, fm) {
      const hm = function(mm) {
          const Tm = new Int32Array(mm.length * zm.f);
          return mm.forEach(((mm, fm) => {
            const hm = fm * zm.f;
            if (4 === mm.length) {
              const [fm, Am, am, xm] = mm;
              Tm.set([fm, Am, am, fm, Am, am, xm], hm)
            } else {
              const [fm, Am, am, xm, wm, Dm, im] = mm;
              Tm.set([fm, am, wm, Am, xm, Dm, im], hm)
            }
          })), Tm
        }(fm),
        Am = (Tm, fm, hm, Am) => {
          mm.setBlockNoMulti(Tm, fm, hm, Am, !0)
        };
      mm.client.gameRecorder.isCapturing() ? (0, zm.cb)(hm, (0, zm.bb)(hm), Am) : mm.IE.oE.ZJ(hm, {
        Gs: Am,
        isHookId: Tm => mm.blockChangeHasHooks(Tm),
        watched: () => function(mm, Tm, fm) {
          const hm = [],
            Am = (mm, Tm, fm) => {
              hm.push(mm, Tm, fm)
            },
            am = new Set;
          for (let xm = 0; xm < fm.length; xm += zm.f)
            for (let Tm = (0, cm.M)(fm[xm]); Tm <= (0, cm.M)(fm[xm + 3]); Tm++)
              for (let hm = (0, cm.M)(fm[xm + 1]); hm <= (0, cm.M)(fm[xm + 4]); hm++)
                for (let wm = (0, cm.M)(fm[xm + 2]); wm <= (0, cm.M)(fm[xm + 5]); wm++) {
                  const fm = `${Tm}|${hm}|${wm}`;
                  am.has(fm) || (am.add(fm), mm.blockDataOwner.forEachDataCell(Tm, hm, wm, Am))
                }
          return Tm.forEachCell(Am), Int32Array.from(hm)
        }(mm, Tm, hm)
      }), mm.IE.Jmm()
    }

    function km(mm) {
      mm.pfm = new Set, mm.Ofm = new Set, mm.Efm = new Set, mm.Yfm = new Set, mm.ofm = [], mm.qfm = [], mm.uC = new Set, mm.Sa = [], mm.tC = []
    }
    class bm {
      constructor(mm) {
        this.IE = mm
      }
      register(mm) {
        const Tm = this.IE,
          fm = (0, Dm.c)();
        mm.lV(im.bb, (mm => {
          Tm.oE.pfm.add(mm), Tm.oE.Ofm.delete(mm)
        })), mm.lV(im.kb, (mm => {
          Tm.oE.Ofm.add(mm), Tm.oE.pfm.delete(mm)
        })), mm.lV(im.de, (mm => {
          Tm.oE.Ofm.delete(mm), Tm.oE.pfm.delete(mm)
        })), mm.lV(im.ib, (mm => {
          Tm.oE.Efm.add(mm), Tm.oE.Yfm.delete(mm)
        })), mm.lV(im.pb, (mm => {
          Tm.oE.Yfm.add(mm), Tm.oE.Efm.delete(mm)
        })), mm.lV(im.he, (mm => {
          Tm.oE.Yfm.delete(mm), Tm.oE.Efm.delete(mm)
        })), mm.lV(im.eb, (mm => {
          (0, pm.Z)(mm, Tm.oE.qfm), (0, pm.Z)(mm, Tm.oE.ofm), Tm.oE.ofm.push(mm)
        })), mm.lV(im.mb, (mm => {
          (0, pm.Z)(mm, Tm.oE.ofm), (0, pm.Z)(mm, Tm.oE.qfm), Tm.oE.qfm.push(mm)
        })), mm.lV(im.ge, (mm => {
          (0, pm.Z)(mm, Tm.oE.ofm), (0, pm.Z)(mm, Tm.oE.qfm)
        })), mm.lV(im.Cf, (mm => {
          let {
            Df: fm,
            Rf: hm
          } = mm;
          hm ? Tm.oE.uC.delete(fm) : Tm.oE.uC.add(fm)
        })), mm.lV(im.Bf, (mm => {
          let {
            Sa: hm,
            ea: Am
          } = mm;
          fm.updateWalkThroughRect(Tm.xH, hm, Am)
        })), (0, hm.onGameResetOnce)((() => {
          km(Tm.oE)
        })), mm.lV(im.lc, (mm => {
          nm.b.applyServerUpdate(mm)
        })), mm.lV(im.wb, (mm => {
          fm.applyServerBlocks((() => {
            ! function(mm, Tm) {
              for (const {
                  ua: fm,
                  Ba: hm
                }
                of Tm) {
                const Tm = Jm.c[hm];
                if (Tm) {
                  const {
                    compX: hm,
                    compY: Am,
                    compZ: am,
                    mainMultiblock: xm
                  } = Tm;
                  mm.zN(fm[0] - hm, fm[1] - Am, fm[2] - am, xm)
                }
              }
              for (const {
                  ua: fm,
                  Ba: hm,
                  La: Am
                }
                of Tm) mm.setBlockNoMulti(fm[0], fm[1], fm[2], hm, !0), mm.blockDataOwner.setBlockData(fm[0], fm[1], fm[2], null === Am ? void 0 : JSON.parse(Am)), mm.blockAdded(fm[0], fm[1], fm[2], hm)
            }(fm, mm)
          })), jm.j.gp("changeBlockFail", mm), fm.client.triggerGameCallback("onChangeBlockFail", mm), jm.j.gp("EditBoard", {
            pos: null
          }), jm.j.gp("EditCodeBlock", {
            pos: null,
            canChangePos: null
          })
        })), mm.lV(im.Sb, (mm => {
          fm.applyServerBlocks((() => {
            Zm(fm, nm.b, mm)
          }))
        })), mm.lV(im.tf, (mm => {
          let {
            ma: Tm,
            Ta: hm
          } = mm;
          if (fm.Yu(Tm[0], Tm[1], Tm[2])) {
            const mm = (0, Dm.c)().XV(Tm[0], Tm[1], Tm[2]);
            (0, Dm.c)().updateMailboxContents(Tm[0], Tm[1], Tm[2], mm, hm)
          }
        })), mm.lV(im.Ce, (mm => {
          let {
            pos: Tm,
            data: hm
          } = mm;
          fm.blockDataOwner.setBlockData(Tm[0], Tm[1], Tm[2], hm), fm.blockAdded(Tm[0], Tm[1], Tm[2], fm.XV(Tm[0], Tm[1], Tm[2]))
        }))
      }
    }
    var Sm = fm(37238),
      em = fm(36861),
      Nm = fm(38135),
      Gm = fm(37974),
      Xm = fm(38149);
    class Pm {
      constructor(mm, Tm) {
        this.IE = mm, this.setUpQueuedEntity = Tm
      }
      register(mm) {
        const Tm = this.IE,
          fm = (0, Dm.c)();
        mm.lV(im.Z, (mm => {
          let {
            Fh: Tm,
            mA: fm
          } = mm;
          this.setUpQueuedEntity(Tm), Tm = (0, em.d)(Tm), (0, Dm.c)().client.gameRecorder.recordBulletShot(Tm, fm), jm.j.gp(`bulletShot|${Tm}`, {
            bulletDirections: fm
          })
        })), mm.lV(im.nc, (mm => {
          let {
            Fm: Tm,
            mT: fm
          } = mm;
          jm.j.gp("damagedByOtherPlayer", {
            Fm: Tm,
            direction: fm
          }, !0)
        })), mm.lV(im.Gd, (mm => {
          jm.j.gp("playerKilled", mm, !0), (0, Dm.c)().client.gameRecorder.recordPlayerKilled(mm.deadEId, mm.killerEId, mm.withItem, mm.killstreak)
        })), mm.lV(im.Vb, (mm => {
          jm.j.gp("customKillfeed", mm, !0), (0, Dm.c)().client.gameRecorder.recordCustomKillfeed(mm.killer, mm.victim, mm.withItem)
        })), mm.lV(im.Rd, (mm => {
          let {
            Jh: fm,
            zh: hm
          } = mm;
          this.setUpQueuedEntity(fm);
          const Am = Tm.qI.MTm(fm);
          null !== Am && void 0 !== Am && Am.isGun() && Am.reload(Date.now(), hm)
        })), mm.lV(im.ye, (mm => {
          let {
            Zh: fm,
            kh: hm
          } = mm;
          const Am = hm ? (0, Xm.c)(Tm, hm) : void 0;
          jm.j.gp("sendHitmarker", {
            Zh: fm,
            screenPos: Am
          }, !0)
        })), mm.lV(im.Sc, (mm => {
          let {
            Pa: hm,
            Ha: Am,
            Ca: am,
            ra: xm,
            sa: wm,
            la: Dm,
            Ma: im
          } = mm;
          this.setUpQueuedEntity(hm), hm = (0, em.d)(hm);
          const Rm = Tm.qI.PTm(hm);
          if (Rm && (Rm.lastHurtTime = performance.now()), (0, Nm.playRigHurt)(Tm, hm, Dm), jm.j.gp("lifeformHurt", {
              eId: hm,
              Ma: im
            }), Am) {
            const mm = (0, Xm.c)(Tm, Am.kh);
            jm.j.gp("yourAttackHit", {
              Zh: xm,
              screenPos: mm,
              hitSelf: hm === Tm.xH
            })
          }
          hm === Tm.xH && (fm.shakePlayerCamera(hm, wm / 40, 200), jm.j.gp("closeShopOnDamaged", null), jm.j.gp("damagedByOtherPlayer", {
            Fm: null,
            direction: Dm,
            sa: wm
          }, !0));
          const pm = Tm.qI.rV(hm);
          if (pm && (am || xm)) {
            const mm = [pm[0], pm[1] + 1, pm[2]];
            am && (0, Gm.g)(Tm, Gm.B, mm, 15), xm && (0, Gm.g)(Tm, Gm.n, mm, 10)
          }
        })), mm.lV(im.Rc, (mm => {
          let {
            IT: fm,
            KT: hm,
            QT: Am
          } = mm;
          (0, Sm.d)(Tm).setHealthFrac((0, em.d)(fm), Am), jm.j.gp("lifeformHealthChanged", {
            eId: (0, em.d)(fm),
            KT: hm,
            QT: Am
          })
        })), mm.lV(im.T, (mm => {
          let {
            Mh: fm,
            uh: hm
          } = mm;
          (0, Dm.c)().playerAttacked(Tm.xH, fm, hm)
        })), mm.lV(im.Ab, (() => {
          const mm = Tm.qI.MTm(Tm.xH);
          null !== mm && void 0 !== mm && mm.isChargeable() && mm.finishCharging(!1, Date.now())
        })), mm.lV(im.Zb, (mm => {
          let {
            Kh: Tm,
            Qh: fm,
            nh: hm,
            eA: Am,
            NA: am,
            XA: xm
          } = mm;
          Tm = (0, em.d)(Tm), (0, Dm.c)().client.updateEffect(Tm, fm, {
            displayName: hm,
            icon: Am,
            duration: am,
            level: xm
          })
        })), mm.lV(im.Sd, (mm => {
          let {
            Kh: Tm,
            Qh: fm
          } = mm;
          Tm = (0, em.d)(Tm), (0, Dm.c)().client.removeEffect(Tm, fm)
        })), mm.lV(im.pf, (mm => {
          jm.j.gp("ttbEffectMultiplier", mm)
        }))
      }
    }
    var Hm = fm(39109),
      ym = fm(37233),
      Cm = fm(4160),
      rm = fm(38159),
      sm = fm(36843),
      lm = fm(36846),
      Mm = fm(37168),
      um = fm(37312),
      Bm = fm(38168),
      Lm = fm(39114);
    class tm {
      constructor(mm, Tm) {
        this.IE = mm, this.setUpQueuedEntity = Tm
      }
      register(mm) {
        const Tm = this.IE,
          fm = (0, Dm.c)();
        mm.lV(im.cd, (mm => {
          let {
            eId: fm,
            settings: hm
          } = mm;
          (0, um.f)(fm);
          for (const Tm in hm)(0, um.d)(fm, Tm, hm[Tm]);
          if ("canSee" in hm && Tm.qI.Pmm(fm, "hidingMeshManager")) {
            const mm = Tm.qI.getState(fm, "hidingMeshManager");
            mm.canSee = (0, Bm.c)("canSee", hm.canSee), mm._forceUpdate = !0
          }
        })), mm.lV(im.L, (mm => {
          let {
            fa: fm,
            ha: hm,
            animationScript: Am,
            Aa: am,
            aa: xm,
            xa: wm,
            Da: im
          } = mm;
          fm = (0, em.d)(fm);
          const Rm = null === Am && null !== wm ? (0, Hm.g)(wm, im) : Am;
          (0, Dm.c)().client.gameRecorder.recordAnimateEntity(fm, hm, Rm, am, xm), (0, Sm.d)(Tm).animations.animateEntity(fm, hm, Am, am, xm, wm, im), null !== Am || fm === Tm.xH && hm === ym.h.Emote && (0, Dm.c)().client.cameraController.endTemporaryThirdPerson()
        })), mm.lV(im.xe, (mm => {
          (0, Lm.e)(mm)
        })), mm.lV(im.Fd, (mm => {
          for (const Tm of mm)(0, rm.H)(Tm);
          jm.j.gp("playerCosmeticsUpdated", mm, !0)
        })), mm.lV(im.Q, (mm => {
          for (const fm of mm)(0, Mm.d)(Tm, fm)
        })), mm.lV(im.fd, (mm => {
          (0, Gm.j)(Tm, (0, pm.p)(mm))
        })), mm.lV(im.id, (mm => {
          Cm.g[mm.na] ? (0, Gm.j)(Tm, {
            ...Cm.g[mm.na],
            pos1: mm.pos1,
            pos2: mm.pos2
          }) : console.error(`Unknown preset id: ${mm.na}`)
        })), mm.lV(im.Bd, (mm => {
          var Tm, fm;
          let {
            TA: hm,
            fA: Am,
            hA: am,
            AA: xm
          } = mm, {
            xA: wm,
            wA: im
          } = null !== xm && void 0 !== xm ? xm : {};
          const {
            aA: Rm
          } = null !== xm && void 0 !== xm ? xm : {};
          wm = null !== (Tm = wm) && void 0 !== Tm ? Tm : void 0, im = null !== (fm = im) && void 0 !== fm ? fm : void 0, "string" === typeof Rm && this.setUpQueuedEntity(Rm), (0, Dm.c)().client.gameRecorder.recordPlaySound(hm, Am, am, xm), sm.e.play((0, lm.g)(hm), Am, Rm, wm, im).rate(am)
        })), mm.lV(im.wf, (mm => {
          for (const Tm in mm) {
            const hm = mm[Tm];
            for (const mm in hm) fm.client.meshCreator.handleParticleSystemUpdate(Tm, mm, hm[mm])
          }
        }))
      }
    }
    var Um = fm(37836),
      dm = fm(37811);
    class gm {
      constructor(mm) {
        this.IE = mm
      }
      register(mm) {
        const Tm = this.IE,
          fm = (0, Dm.c)();

        function hm() {
          return Tm.qI.QTm(Tm.xH)
        }
        mm.lV(im.zc, (mm => {
          let {
            AT: fm,
            aT: hm,
            xT: Am,
            wT: am,
            DT: xm,
            iT: wm,
            RT: Dm,
            pT: im,
            ET: Rm
          } = mm;
          if (!Tm.qI.Pmm(fm, "itemState")) return void(0, Um.k)(Tm, fm, [xm, wm, Dm], hm, {
            amount: Am,
            attributes: JSON.parse(am),
            pT: im,
            size: Rm
          });
          const pm = Tm.qI.getState(fm, "itemState");
          pm.amount = Am, pm.pT = im, pm.creationTime = Date.now(), (0, dm.setServerPosition)(Tm.qI.getState(fm, "smoothToServerPos"), xm, wm, Dm)
        })), mm.lV(im.tb, (mm => {
          (0, Sm.d)(Tm).setCantPickUp(mm, !0), Tm.qI.Pmm(mm, "itemState") && (Tm.qI.getState(mm, "itemState").pT = !0)
        })), mm.lV(im.ce, (mm => {
          (0, Sm.d)(Tm).setCantPickUp(mm, !1), Tm.qI.Pmm(mm, "itemState") && (Tm.qI.getState(mm, "itemState").pT = !1)
        })), mm.lV(im.vd, (mm => {
          let {
            pickUpItems: Tm,
            pickUpAckSeq: fm
          } = mm;
          for (const {
              name: Am,
              amount: am,
              attributes: xm
            }
            of Tm) hm().pickUpItem({
            name: Am,
            amount: am,
            typeObj: Um.x[Am],
            attributes: xm
          });
          (0, Dm.c)().client.inventoryPrediction.serverChangeApplied(fm)
        })), mm.lV(im.Oe, (mm => {
          let {
            index: fm,
            name: hm,
            amount: Am,
            attributes: am,
            setSlotAckSeq: xm
          } = mm;
          const wm = Tm.qI.nTm(Tm.xH);
          (fm < wm.playerInventory.numSlots || wm.ph || wm.inCreative) && wm.setItemSlot(fm, hm, Am, am), (0, Dm.c)().client.inventoryPrediction.serverChangeApplied(xm)
        })), mm.lV(im.yc, (mm => {
          (0, Dm.c)().client.inventoryPrediction.acknowledge(mm)
        })), mm.lV(im.K, (mm => {
          let {
            YT: Tm,
            qT: fm,
            jT: hm,
            VT: Am
          } = mm;
          (0, Dm.c)().client.itemDropPrediction.onActionItemDrops(Tm, fm, hm, Am)
        })), mm.lV(im.Nb, (mm => {
          hm().clearInventory(), (0, Dm.c)().client.inventoryPrediction.serverChangeApplied(mm)
        })), mm.lV(im.Re, (mm => {
          jm.j.gp("setSelectedInventorySlotI", mm, !0)
        })), mm.lV(im.Gb, (mm => {
          let {
            Nh: fm,
            Gh: hm,
            Xh: Am,
            Ph: am,
            Hh: xm,
            yh: wm,
            Ch: im,
            rh: Rm
          } = mm;
          const pm = Tm.qI.nTm(Tm.xH);
          if (wm) {
            const {
              Rh: mm,
              qh: Tm
            } = Rm;
            return (0, Dm.c)().client.inventoryPrediction.Q8(Tm, (() => {
              pm.chestRefreshed(hm, Am, am, im, mm)
            })) && jm.j.gp("chestToggleFromServer", !1, !0), void jm.j.gp("chestRefreshedFromServer")
          }(fm || pm.ph) && (fm ? (pm.chestOpened(hm, Am, am, xm, im), null !== xm && (0, Dm.c)().client.ironChestPasskeyCache.onChestOpened(am, xm)) : pm.chestClosed(), jm.j.gp("chestToggleFromServer", fm, !0))
        })), mm.lV(im.Xb, (mm => {
          let {
            craftingRecipeItemName: hm,
            recipesForItem: Am
          } = mm;
          hm ? fm.craftingManager.editRecipesForPlayer(Tm.xH, hm, Am) : fm.craftingManager.resetAllPlayerRecipes(Tm.xH), jm.j.gp("craftingRecipesEdited", {
            itemName: hm,
            recipesForItem: Am
          })
        })), mm.lV(im.Xd, (mm => {
          let {
            TT: Tm,
            fT: fm,
            hT: Am
          } = mm;
          hm().removeItemName(Tm, fm), (0, Dm.c)().client.inventoryPrediction.serverChangeApplied(Am)
        })), mm.lV(im.Vd, (mm => {
          let {
            ba: hm
          } = mm;
          fm.craftingManager.removeRecipes(Tm.xH, hm), jm.j.gp("craftingRecipesEdited", {
            itemName: hm,
            recipesForItem: []
          })
        }))
      }
    }
    var Wm = fm(6451),
      Fm = fm(37461),
      mT = fm(362),
      TT = fm.n(mT),
      fT = fm(4460),
      hT = fm(37751),
      AT = fm(38337),
      aT = fm(37457);
    class xT {
      constructor(mm, Tm) {
        this.IE = mm, this.setUpQueuedEntity = Tm
      }
      register(mm) {
        const Tm = this.IE,
          fm = (0, Dm.c)();
        mm.lV(im.kf, (mm => {
          let {
            dA: fm,
            gA: Am,
            WA: am,
            FA: xm
          } = mm;
          const wm = [Am, am, xm];
          Tm.qI.setPosition(Tm.xH, wm), (0, hm.sendColyMessage)(im._g, {
            Rw: fm,
            pw: fT.e
          }), jm.j.gp("localPlayerTeleported", {
            pos: wm,
            isCorrection: !1
          })
        })), mm.lV(im.qd, (mm => {
          let {
            bT: Tm,
            ST: fm,
            eT: hm,
            NT: Am
          } = mm;
          this.setUpQueuedEntity(Tm);
          const am = [fm, hm, Am];
          jm.j.gp(`otherPlayerTeleported|${Tm}`, {
            pos: am
          })
        })), mm.lV(im.Jd, (mm => {
          let {
            pA: fm,
            EA: Am,
            oA: am,
            OA: xm,
            YA: wm,
            qA: Dm,
            jA: Rm,
            IA: pm,
            VA: Em,
            nA: om
          } = mm;
          const Om = [Am, am, xm];
          Tm.qI.setPosition(Tm.xH, Om);
          const Ym = Tm.qI.mTm(Tm.xH),
            qm = Tm.qI.WC(Tm.xH);
          TT().set(qm.zC, 0, 0, 0), TT().set(qm.ZC, 0, 0, 0), TT().set(qm.qq, wm, Dm, Rm), qm.bC(), Ym._flying = null !== om, om ? (Ym.flyAccel.JA = om.JA, Ym.flyAccel.cA = om.cA) : Ym.flyAccel.reset(), pm && Ym.movementType === Wm.l.GLIDING && (Ym.KA = pm.KA, TT().copy(Ym.QA, pm.QA)), (0, hm.sendColyMessage)(im._g, {
            Rw: fm,
            pw: fT.e
          }), jm.j.gp("localPlayerTeleported", {
            pos: Om,
            isCorrection: !0
          })
        })), mm.lV(im.Ve, (mm => {
          let {
            vehicleEId: Tm,
            overrides: fm
          } = mm;
          (0, Dm.c)().applyRiddenVehicleSettingOverrides(Tm, fm)
        })), mm.lV(im.xf, (mm => {
          let {
            Um: fm,
            dm: hm,
            gm: Am
          } = mm;
          const am = Tm.qI.mTm(Tm.xH).physicsState.type === Wm.m.SLEEPING && fm === Wm.m.DEFAULT;
          (0, Dm.c)().updatePositionAndPhysics(Tm.xH, {
            type: fm,
            tier: hm
          }, !0, Am), am && (0, Dm.c)().updateHeldVehicleStatus()
        })), mm.lV(im.yb, (mm => {
          let {
            oT: fm,
            OT: hm
          } = mm;
          Tm.qI.ITm(Tm.xH).setPose(fm, hm)
        })), mm.lV(im.Ee, (mm => {
          const {
            wi: fm,
            FTm: hm
          } = (0, Fm.f)([mm[0], mm[1], mm[2]]);
          aT.e.setLookDirection(Tm, fm, hm), (0, hT.w)(fm, hm);
          const Am = Tm.qI.ITm(Tm.xH);
          Am && (Am.heading = fm)
        })), mm.lV(im.Ge, (mm => {
          fm.client.cameraController.setCameraZoom(mm)
        })), mm.lV(im.$e, (mm => {
          let {
            PA: hm,
            HA: Am
          } = mm;
          fm.shakePlayerCamera(Tm.xH, hm, Am)
        })), mm.lV(im.Gc, (mm => {
          Tm.qI.ITm(Tm.xH).jumpMultiplier.setMultiplierType("jumpEffectAmount", mm)
        })), (0, hm.onGameResetOnce)((() => {
          Tm.qI.ITm(Tm.xH).jumpMultiplier.setMultiplierType("jumpEffectAmount", 1)
        })), mm.lV(im.N, (mm => {
          Tm.qI.WC(Tm.xH).applyImpulse(mm)
        })), mm.lV(im.Xe, (mm => {
          const fm = Tm.qI.WC(Tm.xH);
          TT().set(fm.zC, 0, 0, 0), TT().set(fm.ZC, 0, 0, 0), TT().copy(fm.qq, mm), fm.bC()
        })), (0, hm.onGameResetOnce)((() => {
          (0, AT.setFloatingYValue)(Tm.qI.getState(Tm.xH, "physics"), Tm.qI.uB(Tm.xH), null)
        })), mm.lV(im.ac, (mm => {
          let {
            Bh: fm,
            Lh: hm,
            Uh: Am
          } = mm;
          const am = (0, em.d)(fm);
          if (am === Tm.xH) {
            const mm = Tm.qI.uB(Tm.xH).position;
            Am ??= Math.floor(mm[1]) - 1, (0, AT.setFloatingYValue)(Tm.qI.getState(Tm.xH, "physics"), Tm.qI.uB(Tm.xH), hm ? Am : null)
          }(0, Sm.d)(Tm).setFloating(am, hm, Am);
          const xm = Tm.qI.getState(am, "floating");
          xm && (xm.isFloating = hm, xm.Uh = hm ? Am : null)
        }))
      }
    }

    function wT(mm, Tm, fm, hm, Am) {
      let am = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (!mm.qI.KTm(mm.xH)) return console.log("Got resync inven but don't have inven component"), void Tm.acknowledge(hm);
      am && console.error("Had to sync inven"), Tm.Q8(hm, Am) && fm.gp("chestToggleFromServer", !1, !0), fm.gp("syncedInvenFromServer")
    }
    var DT = fm(39129),
      iT = fm(39133),
      RT = fm(1934);
    var pT = fm(4441);

    function ET(mm) {
      const Tm = mm.oE;
      let fm = 0,
        Am = -1,
        xm = -1 / 0,
        wm = null,
        Dm = !0;
      const Rm = () => {
        if (++fm % 10 !== 0) return;
        const Rm = (0, hm.getLastReceivedPacketId)();
        if (Rm <= Am) return;
        const [pm, Em, om] = mm.qI.rV(mm.xH), Om = ! function(mm) {
          var Tm;
          let fm = null === (Tm = mm.qI.hfm(mm.xH)) || void 0 === Tm ? void 0 : Tm.kO;
          if (void 0 === fm) return !1;
          const hm = new Set;
          for (; void 0 !== fm && !hm.has(fm);) {
            var Am;
            hm.add(fm);
            const Tm = mm.qI.getState(fm, "smoothToServerPos"),
              am = Array.isArray(Tm) ? null : null === Tm || void 0 === Tm ? void 0 : Tm.serverPosition;
            if (am) {
              const Tm = mm.qI.rV(fm);
              if (Math.abs(Tm[0] - am[0]) > 10 || Math.abs(Tm[1] - am[1]) > 10 || Math.abs(Tm[2] - am[2]) > 10) return !0
            }
            fm = null === (Am = mm.qI.hfm(fm)) || void 0 === Am ? void 0 : Am.kO
          }
          return !1
        }(mm) && function(mm, Tm, fm, hm) {
          const Am = am.f.MO;
          for (let am = 0; am < mm.length; am++) {
            const xm = mm[am];
            if (!(0, pT.h)(Tm, fm, hm, xm[0] * Am, xm[1] * Am, xm[2] * Am)) return !1
          }
          return !0
        }(Tm.Oq.HO, pm, Em, om), Ym = null === wm || Math.abs(pm - wm[0]) > 8 || Math.abs(Em - wm[1]) > 8 || Math.abs(om - wm[2]) > 8, qm = !Dm || Ym || performance.now() - xm >= 1e4;
        Dm = Om, Om && qm && (Am = Rm, xm = performance.now(), wm = [pm, Em, om], (0, hm.sendColyMessage)(im.Dg, {
          fw: Rm
        }))
      };
      return mm.on("DE", Rm), () => {
        mm.off("DE", Rm)
      }
    }
    var oT = fm(39137),
      OT = fm(1519),
      YT = fm(2756),
      qT = fm(2903),
      jT = fm(4717);
    class VT {
      constructor(mm, Tm, fm) {
        this.IE = mm, this.gameNameWithVariation = Tm, this.connectionResume = fm, this.stopChunkReports = () => {}, this.replayResume = null
      }
      clearUiRequestsAndQTEs() {
        jT.d.reset(), (0, DT.c)()
      }
      startChunkReports() {
        const mm = function(mm) {
            let Tm = null,
              fm = -1 / 0,
              Am = null;
            const am = () => {
                Am = null;
                const am = Math.ceil(mm.kS[0]),
                  xm = Math.ceil(mm.kS[1]);
                Tm && Tm[0] === am && Tm[1] === xm || (Tm = [am, xm], fm = performance.now(), (0, hm.sendColyMessage)(im.Bg, {
                  Bx: am,
                  Lx: xm
                }))
              },
              xm = () => {
                null === Am && (Am = setTimeout(am, Math.max(0, fm + 250 - performance.now())))
              };
            return am(), mm.on("addRemoveDistanceChanged", xm), () => {
              mm.off("addRemoveDistanceChanged", xm), null !== Am && (clearTimeout(Am), Am = null)
            }
          }(this.IE.oE),
          Tm = ET(this.IE);
        this.stopChunkReports = () => {
          mm(), Tm()
        }
      }
      restartChunkStreaming() {
        (0, hT.m)(this.IE, (0, Dm.c)().recentChunkEdits.chunksEditedSince(this.connectionResume.getDroppedAt() - oT.b)), this.startChunkReports()
      }
      register(mm) {
        const Tm = this.IE,
          fm = (0, Dm.c)();
        mm.lV(im.ad, (mm => {
          Vm.b.applyNewClientOptions(mm)
        })), mm.lV(im.xd, (mm => {
          YT.e.onReceiveColyseusPing(mm)
        })), mm.lV(im.He, (mm => {
          let {
            key: Tm,
            value: fm
          } = mm;
          (0, Im.setCookie)(this.gameNameWithVariation, Tm, fm)
        })), mm.lV(im.Ke, (mm => {
          jm.j.gp("setDiscordReportKey", mm)
        })), (0, hm.onGameResetOnce)((() => {
          this.stopChunkReports()
        })), mm.lV(im.uc, (Am => {
          const {
            pf: am,
            Ef: xm
          } = Am;
          if ((0, hm.setAdjustment)(xm), this.connectionResume.onInitialInfo(Am.Yf, Am.qf), hm.offlineInputReplay.Dk(Am.jf), this.connectionResume.isResuming()) {
            console.log("Resumed the connection as eId", am);
            try {
              null === Am.Vf && (0, Dm.c)().client.inventoryPrediction.dropPending(), this.stopChunkReports(), km(Tm.oE), Vm.b.apply({
                shopInfo: null,
                _shopVersion: RT.c
              });
              const fm = Tm.qI.nTm(Tm.xH);
              fm.ph && (fm.chestClosed(), jm.j.gp("chestToggleFromServer", !1, !0)), this.clearUiRequestsAndQTEs(), jm.j.gp("initInfoReceived", mm)
            } finally {
              const mm = null === Am.Vf ? null : {
                sync: null,
                endSeq: null
              };
              this.replayResume = mm, this.connectionResume.onResumeInitialInfo(Am.Vf, (() => {
                mm.endSeq = (0, Dm.c)().client.inventoryPrediction.lastActionSeq
              })), null === mm && this.restartChunkStreaming()
            }
          } else console.log("Local client is eId", am), (0, hT.o)(Tm), jm.j.gp("loadingScreenState", "loadingPage:loadingWorld"), Tm.Cmm = am, Tm.qI.Pmm(Tm.xH, Tm.qI.names.entityName) && Tm.qI.WG(Tm.xH, Tm.qI.names.entityName), (0, Dm.c)().setEntityName(Tm.Cmm, (0, Dm.c)().getRawEntityName(Tm.xH)), Tm.mH[Tm.Cmm] = {}, Tm.qI.vG(Tm.xH, Tm.qI.names.entityName), jm.j.gp("initInfoReceived", mm), this.startChunkReports(), fm.client.onServerConnectionFinalised()
        })), mm.lV(im.te, (() => {
          this.connectionResume.isResuming() ? this.connectionResume.onResumed((() => {
            const mm = this.replayResume;
            if (this.replayResume = null, !mm) return;
            this.restartChunkStreaming();
            const {
              inventoryPrediction: fm
            } = (0, Dm.c)().client, {
              sync: Am
            } = mm, am = new Set(hm.offlineInputReplay.takeDroppedActions());
            if (Am) {
              var xm;
              const hm = null !== (xm = mm.endSeq) && void 0 !== xm ? xm : fm.lastActionSeq;
              fm.forget((mm => mm > Am.qh && mm <= hm || am.has(mm))), wT(Tm, fm, jm.j, Am.qh, Am.load)
            } else fm.dropPending(), fm.askForSnapshot()
          })) : console.warn("ResumeComplete arrived without a resume")
        })), mm.lV(im.gf, (mm => {
          let {
            ih: fm,
            Yh: hm,
            qh: Am
          } = mm;
          const {
            inventoryPrediction: am
          } = (0, Dm.c)().client, xm = () => {
            Tm.qI.nTm(Tm.xH).loadFromString(fm)
          };
          this.replayResume && (this.replayResume.sync = {
            qh: Am,
            load: xm
          }), wT(Tm, am, jm.j, Am, xm, hm)
        })), mm.lV(im.Nd, (mm => {
          let {
            type: Tm,
            location1: fm,
            location2: hm,
            location3: Am,
            score: am
          } = mm;
          (0, qT.z)({
            type: Tm,
            location1: fm,
            location2: hm,
            location3: Am,
            score: am
          })
        })), mm.lV(im.se, (mm => {
          let {
            type: Tm,
            resourceType: fm,
            amount: hm,
            category: Am,
            itemName: am
          } = mm;
          (0, qT.D)({
            type: Tm,
            resourceType: fm,
            amount: hm,
            category: Am,
            itemName: am
          })
        })), mm.lV(im.Pc, (mm => {
          let {
            leaveEventType: Tm,
            category: fm,
            subCategory: hm,
            value: Am
          } = mm;
          (0, qT.P)({
            leaveEventType: Tm,
            category: fm,
            subCategory: hm,
            value: Am
          })
        })), mm.lV(im.Ub, (mm => {
          let {
            cat1: Tm,
            cat2: fm,
            cat3: hm,
            value: Am
          } = mm;
          (0, qT.w)({
            cat1: Tm,
            cat2: fm,
            cat3: hm,
            value: Am
          })
        })), mm.lV(im.Kc, (mm => {
          (0, Dm.c)().client.leaveGameUnwanted({
            reason: mm,
            requiresRefresh: !1,
            canReconnect: !1,
            automaticallyReconnect: !1
          }), (0, OT.navigatePreserveSearch)("/")
        })), mm.lV(im.Ae, (mm => {
          jm.j.gp("serverUpdating", Date.now() + mm, !0)
        })), mm.lV(im.Yc, iT.d), mm.lV(im.Tc, (mm => {
          console.error(`[logErrorToConsole]: ${mm}`)
        }))
      }
    }
    var IT = fm(39140),
      KT = fm(39150),
      QT = fm(1041),
      nT = fm(39143),
      JT = fm(39147),
      cT = fm(3634);
    class zT {
      constructor(mm, Tm) {
        this.IE = mm, this.clientApi = Tm
      }
      register(mm) {
        const Tm = this.IE,
          fm = (0, Dm.c)();
        mm.lV(im.Cb, (mm => {
          let {
            chatMsgId: Tm,
            content: fm,
            chatterEId: hm
          } = mm;
          jm.j.gp("chat", {
            serverChatMsgId: Tm,
            content: fm,
            chatterEId: hm
          }, !0)
        })), mm.lV(im.mf, (mm => {
          jm.j.gp("TopRightHelper", mm, !0)
        })), mm.lV(im.jf, (mm => {
          (0, IT.c)(mm)
        })), mm.lV(im.Nc, (mm => {
          let {
            category: Tm,
            timeframe: fm,
            data: hm
          } = mm;
          jm.j.gp("leaderboardResponse", {
            category: Tm,
            timeframe: fm,
            data: hm
          })
        })), mm.lV(im.cf, (() => {
          jm.j.gp("showShopTutorial", null, !0)
        })), mm.lV(im.Md, (mm => {
          jm.j.gp("progressBarUpdate", mm, !0)
        })), mm.lV(im.xc, (mm => {
          jm.j.gp("middleScreenBarInitiate", {
            duration: mm.dh,
            gh: mm.gh,
            horizBarRemOffset: mm.Wh
          }, !0)
        })), mm.lV(im._d, (() => {
          jm.j.gp("middleScreenBarRemove", !0)
        })), mm.lV(im.Ie, (mm => {
          let {
            id: Tm,
            position: fm,
            style: hm,
            jh: Am,
            Ih: am
          } = mm;
          jm.j.gp("setDirectionArrow", {
            id: Tm,
            position: fm,
            style: hm,
            text: (0, im.A)(Am),
            Ih: am
          }, !0)
        })), mm.lV(im.Lb, (mm => {
          let {
            id: Tm
          } = mm;
          jm.j.gp("clearDirectionArrow", {
            id: Tm
          }, !0)
        })), mm.lV(im.Tb, (mm => {
          (0, cT.onCosmeticPackGranted)(mm)
        })), mm.lV(im.ld, (mm => {
          let {
            id: Tm,
            zf: fm
          } = mm;
          const {
            type: Am,
            params: am
          } = (0, KT.e)(fm), xm = {
            ...am
          };
          for (const hm of KT.d) hm in xm && xm[hm] && (xm[hm] = (0, im.A)(xm[hm]));
          jT.d.queueQTE(Tm, Am, xm).getResult().then((mm => {
            "boolean" === typeof mm && (0, hm.sendColyMessage)(im.vi, {
              qteId: Tm,
              qteResponse: mm
            })
          }))
        })), mm.lV(im.$d, (mm => {
          jT.d.cancelQTE(mm)
        })), (0, hm.onGameResetOnce)((() => {
          jT.d.reset()
        })), mm.lV(im.od, (mm => {
          let {
            id: Tm,
            clientParameters: fm
          } = mm;
          (0, DT.d)(Tm, fm)
        })), mm.lV(im.be, (mm => {
          (0, DT.g)(mm)
        })), mm.lV(im.qf, (mm => {
          let {
            text: Tm,
            id: fm,
            destructive: Am
          } = mm;
          (0, DT.k)(fm, Tm, Am, (mm => {
            (0, hm.sendColyMessage)(im.Yj, {
              Li: fm,
              Ui: mm,
              gi: 5
            })
          }))
        })), mm.lV(im.td, (mm => {
          let {
            info: Tm
          } = mm;
          jm.j.gp("overShopInfo", Tm, !0)
        })), mm.lV(im.gc, (mm => {
          let {
            yA: fm,
            CA: hm
          } = mm;
          this.clientApi.openShop(Tm.xH, fm, hm)
        })), mm.lV(im.cc, (mm => {
          let {
            Na: Tm,
            Ga: fm,
            Xa: hm
          } = mm;
          jm.j.gp("flyingMiddleMessage", {
            content: (0, im.A)(Tm),
            Ga: fm,
            Xa: hm
          }, !0)
        })), mm.lV(im.Gf, (mm => {
          const Tm = mm === QT.f ? null : {
            message: `Currently loaded as variation: ${mm}`,
            type: "Warning"
          };
          jm.j.gp("showPermanentBottomMessage", Tm, !0)
        })), mm.lV(im.jc, (mm => {
          let {
            messageType: Tm,
            data: hm
          } = mm;
          (0, nT.f)(Tm) ? (0, nT.e)(Tm, hm) : ("freeCamPerms" === Tm && fm.client.freeCameraController.setPerms(hm.key, hm.value), fm.client.triggerGameCallback("onReceivedMessageFromServer", Tm, hm))
        })), mm.lV(im.Ob, JT.e)
      }
    }
    class ZT {
      constructor(mm, Tm, fm, hm) {
        this.gameNameWithVariation = mm, this.IE = fm, this.connectionResume = hm, this.stateReplicationHandler = void 0, this.stateReplicationHandler = new Qm.d(Tm, this.IE)
      }
      setupStateReplicationHandlers() {
        this.stateReplicationHandler.setup(), (0, hm.onGameResetOnce)((() => {
          this.stateReplicationHandler.dispose()
        }))
      }
      Cim(mm) {
        this.stateReplicationHandler.dispose(), this.stateReplicationHandler = new Qm.d(mm, this.IE), this.stateReplicationHandler.setup()
      }
      setupOnMessageListeners(mm, Tm) {
        const fm = this.IE,
          hm = mm => {
            this.stateReplicationHandler.setUpIfQueued(mm)
          };
        new VT(fm, this.gameNameWithVariation, this.connectionResume).register(mm), new bm(fm).register(mm), new gm(fm).register(mm), new Pm(fm, hm).register(mm), new tm(fm, hm).register(mm), new zT(fm, Tm).register(mm), new xT(fm, hm).register(mm)
      }
    }
    window.addEventListener("beforeunload", (() => {}));
    var kT = fm(39156),
      bT = fm(39164),
      ST = fm(690),
      eT = fm(2932);
    class NT {
      constructor(mm, Tm, fm, hm) {
        this.msgHandler = fm, this.listener = hm, this.session = void 0, this.attachedRoom = null, this.detachRoomListeners = null, this.suspended = !1, this.droppedAt = 0, this.session = new kT.c({
          reconnect: mm,
          isLive: () => hm.isLive(),
          onReconnected: mm => {
            this.resumeOnRoom(mm)
          },
          onGaveUp: (mm, Tm) => {
            hm.onGaveUp(mm, Tm)
          },
          freeze: Tm,
          releaseSeat: Tm => {
            mm(Tm).then((mm => {
              mm.leave(!0)
            }), (mm => {
              console.warn("Couldn't release the held seat of a game left while reconnecting", mm)
            }))
          }
        })
      }
      onInitialInfo(mm, Tm) {
        this.session.onInitialInfo(mm, Tm)
      }
      isResuming() {
        return this.session.isResuming()
      }
      getDroppedAt() {
        return this.droppedAt
      }
      onResumeInitialInfo(mm, Tm) {
        if (this.session.onResuming(), null === mm) {
          try {
            (0, Dm.c)().client.itemDropPrediction.reset()
          } catch (fm) {
            console.error("Error dropping the item drop predictions on resuming", fm)
          }
          return hm.offlineInputReplay.discard(), void this.setSuspended(!1)
        }(0, Dm.c)().client.itemDropPrediction.onResumeReplayOffered(), hm.offlineInputReplay.replayFrom(mm.Qf, Tm)
      }
      onResumed(mm) {
        this.setSuspended(!1), (0, hm.resendBeacons)();
        try {
          mm()
        } catch (Tm) {
          console.error("Error completing the resume", Tm)
        } finally {
          this.session.onResumed()
        }
      }
      attachRoom(mm) {
        const Tm = (0, ST.j)((() => mm.connection.isOpen));
        mm.tV(Tm);
        const fm = new bT.d((() => {
          this.session.canHoldSeat() && this.listener.isLive() && (console.warn("The game server went silent, reconnecting"), this.onConnectionDropped(mm, "silent"), mm.leave(!1))
        }));
        mm.onStateChange((() => {
          fm.heard()
        }));
        const hm = Tm => {
          Tm.persisted || mm.leave(!0)
        };
        window.addEventListener("pagehide", hm), mm.tV(((Tm, fm) => {
          if (mm === this.attachedRoom && this.listener.isLive()) return (0, am.h)(Tm) && this.session.canHoldSeat() ? (console.warn(`Connection to the game server dropped with code ${Tm}, reconnecting`), this.listener.onDropped(Tm, fm), void this.onConnectionDropped(mm, String(Tm))) : void this.listener.onRoomLeft(Tm, fm)
        })), this.attachedRoom = mm, this.detachRoomListeners = () => {
          Tm(), fm.dispose(), window.removeEventListener("pagehide", hm)
        }
      }
      dispose() {
        this.detachRoom(), this.session.leave(), this.setSuspended(!1)
      }
      setSuspended(mm) {
        mm !== this.suspended && (this.suspended = mm, (0, hm.setConnectionSuspended)(mm), (0, Dm.c)().client.itemDropPrediction.setSuspended(mm))
      }
      detachRoom() {
        var mm;
        null === (mm = this.detachRoomListeners) || void 0 === mm || mm.call(this), this.detachRoomListeners = null, this.attachedRoom = null
      }
      onConnectionDropped(mm, Tm) {
        (0, eT.reportClientError)("disconnect", "Left room", Tm), this.isResuming() || (this.droppedAt = Date.now()), this.detachRoom(), hm.offlineInputReplay.onConnectionLost(), this.setSuspended(!0), this.session.onConnectionLost(mm.reconnectionToken)
      }
      resumeOnRoom(mm) {
        if (!this.listener.isLive()) return console.warn("Left the game while reconnecting, leaving the resumed room"), mm.leave(!0), void this.dispose();
        console.log("Reconnected to the game server, waiting for the game to resume"), (0, Lm.s)(), hm.offlineInputReplay.onConnectionReplaced(), this.msgHandler.Cim(mm), this.listener.onReconnected(mm), this.attachRoom(mm)
      }
    }
    var GT = fm(2979),
      XT = fm(2982),
      PT = fm(1321),
      HT = fm(1296),
      yT = fm(4620),
      CT = fm(3148),
      rT = fm(1103),
      sT = fm(37770),
      lT = fm(39169),
      MT = fm(8854),
      uT = fm(39171),
      BT = fm(1223),
      LT = fm(36573),
      vT = fm(39180),
      tT = fm(1698),
      UT = fm(2765);

    function dT(mm) {
      var Tm, fm;
      if ("object" !== typeof mm || null === mm) return {
        errType: typeof mm
      };
      const hm = mm;
      return {
        errType: null !== (Tm = null === (fm = mm.constructor) || void 0 === fm ? void 0 : fm.name) && void 0 !== Tm ? Tm : "",
        errName: "string" === typeof hm.name ? hm.name : "",
        eventType: "string" === typeof hm.type ? hm.type : "",
        errStack: "string" === typeof hm.stack ? hm.stack.split("\n").slice(1).join(" | ") : ""
      }
    }

    function gT(mm) {
      if ("undefined" !== typeof ProgressEvent && mm instanceof ProgressEvent) return !0;
      if (!(mm instanceof Error)) return !1;
      const Tm = mm.code;
      return "ServerError" === mm.name && void 0 === Tm || "AbortError" === mm.name || "seat reservation expired." === mm.message || "early_leave" === mm.message
    }(0, Ym.m)((mm => {
      (0, eT.reportClientError)("wasm_net", mm)
    }));
    let WT = !0;

    function FT() {
      WT = !1
    }
    class mf {
      constructor(mm) {
        this.gameNameWithVariation = void 0, this.lobbyName = void 0, this.colyClient = void 0, this.userContext = void 0, this.joinedAt = null, this.checkSendPath = () => {}, this.IE = void 0, this.connectionResume = void 0, this.incomingMsgInitialisor = void 0, this.gameNameWithVariation = mm.gameNameWithVariation, this.lobbyName = mm.lobbyName, this.colyClient = mm.colyClient, this.userContext = mm.userContext
      }
      async connectToServer(mm, Tm, fm) {
        Vm.b.reset(), mm.mH = {
          [mm.xH]: {}
        }, mm.Cmm = void 0, (0, Lm.s)(), (0, Dm.c)().removeAllEntityNames(), (0, Dm.c)().setEntityName(mm.xH, this.userContext.getPlayerName()), (0, PT.r)({
          lobbyName: this.lobbyName
        }), console.log("Waiting for clientConnection passed promise to resolve");
        const xm = (0, tT.e)();
        console.log("joining server with game", this.gameNameWithVariation, "lobbyName", this.lobbyName);
        const wm = performance.now();
        fm.aborted || (0, HT.j)("wasm_core_ready", wm);
        const im = (0, uT.e)(this.userContext, (() => {
          const {
            roomName: hm,
            joinOptions: Am
          } = (0, Km.d)(this.userContext, this.gameNameWithVariation, this.lobbyName, Tm, (mm => CT.b.isUsingCustomGameTexturePack(mm)));
          return Am.joinAdHold = xm, Am.renderBackend = (0, UT.e)(mm.qY), (0, lT.h)((() => this.colyClient.joinOrCreateUntil(fm, hm, Am)), fm)
        }));
        return jm.j.gp("loadingScreenState", "loadingPage:joiningLobby"), await im.then((Tm => {
          if (this.joinedAt = performance.now(), (0, HT.j)("wasm_joined", this.joinedAt), this.IE = mm, xm) {
            const mm = (0, tT.p)((() => {
              Tm.send(Am.f), (0, HT.i)()
            }));
            Tm.tV(mm), (0, hm.onGameResetOnce)(mm)
          }
          const fm = new qm(Tm);
          this.connectionResume = new NT((mm => this.colyClient.reconnect(mm)), (Tm => {
            mm.nS(Tm)
          }), fm, {
            isLive: () => (0, Dm.c)().client.getMsgHandler() === fm,
            onDropped: (mm, Tm) => {
              (0, XT.j)(mm) || this.logUnrecognisedConnectionLoss(mm, void 0, {
                site: "drop",
                closeReason: null !== Tm && void 0 !== Tm ? Tm : "",
                sinceJoined: this.sinceJoined()
              })
            },
            onRoomLeft: (mm, Tm) => {
              this.onRoomLeft(mm, Tm)
            },
            onReconnected: mm => {
              this.incomingMsgInitialisor.Cim(mm), this.checkSendPath = (0, sT.e)(fm, mm, Ym.p)
            },
            onGaveUp: (mm, Tm) => {
              this.onResumeGaveUp(mm, Tm)
            }
          }), this.connectionResume.attachRoom(Tm), (0, hm.onGameResetOnce)((() => {
            this.connectionResume.dispose()
          }));
          const am = fm.send,
            wm = fm.lV,
            im = fm.nfm.send,
            Rm = fm.nfm.lV,
            pm = fm.Him;
          this.checkSendPath = (0, sT.e)(fm, Tm, Ym.p);
          const Em = setInterval((() => {
            am === fm.send && wm === fm.lV && im === fm.nfm.send && Rm === fm.nfm.lV && pm === fm.Him || FT(), this.checkSendPath()
          }), 1e4);
          return (0, hm.onGameResetOnce)((() => {
            clearInterval(Em)
          })), {
            success: !0,
            successDetails: fm
          }
        })).catch((Tm => {
          if (fm.aborted && Tm === (0, BT.c)(fm)) return {
            success: !1,
            failDetails: {
              reason: "Left the game while it loaded",
              requiresRefresh: !1,
              canReconnect: !1
            }
          };
          if (Tm instanceof LT.e) return console.warn("Seat request timed out", this.lobbyName, this.gameNameWithVariation), {
            success: !1,
            failDetails: {
              reason: Tm.message,
              requiresRefresh: !1,
              canReconnect: !1,
              gameServerUnreachable: "timedOut",
              joinFailure: (0, vT.e)(Tm, Tm.leg)
            }
          };
          mm.sY(`Failed to connect to bloxd room, check your internet connection. lobbyName: ${this.lobbyName}, gameNameWithVariation: ${this.gameNameWithVariation} code: ${Tm.code}\n`, Tm);
          const hm = Tm.code;
          return hm === am.b.serverUpdating.code ? (this.goToUpdateWaiting(), {
            success: !1,
            failDetails: {
              reason: am.b.serverUpdating.text,
              requiresRefresh: !1,
              canReconnect: !0,
              goesToUpdateWaiting: !0
            }
          }) : {
            success: !1,
            failDetails: {
              ...this.onConnectionToServerLost(hm, Tm.message, {
                site: "join",
                sinceJoinStart: (0, XT.c)(performance.now() - wm),
                ...dT(Tm)
              }, gT(Tm)),
              rematch: (0, lT.e)(Tm),
              gameRefused: (0, MT.c)(Tm),
              joinFailure: (0, vT.e)(Tm, this.colyClient.legReached())
            }
          }
        }))
      }
      setupServerListeners(mm, Tm, fm) {
        jm.j.gp("loadingScreenState", "loadingPage:loadingPlayerInfo"), this.incomingMsgInitialisor = new ZT(this.gameNameWithVariation, Tm.nfm, mm, this.connectionResume), this.incomingMsgInitialisor.setupStateReplicationHandlers();
        const Am = Tm.Lim();
        this.incomingMsgInitialisor.setupOnMessageListeners(Am, fm), (0, hm.onConnectionToServerReady)(Am, Tm), Am.finishRegistration()
      }
      dispose() {
        this.connectionResume.dispose()
      }
      onResumeGaveUp(mm, Tm) {
        (0, rT.lY)(new Error("Reconnect failed"), {
          ...(0, GT.k)(Tm),
          game: this.gameNameWithVariation
        }), (0, eT.reportClientError)("disconnect", "Reconnect failed", Tm.reason), (0, Dm.c)().client.leaveGameUnwanted({
          reason: {
            translationKey: "general:lostConnection"
          },
          canReconnect: !mm,
          canPlayAgain: mm,
          requiresRefresh: !1,
          automaticallyReconnect: !1
        }), (0, OT.navigatePreserveSearch)("/")
      }
      sinceJoined() {
        return null === this.joinedAt ? "" : (0, XT.c)(performance.now() - this.joinedAt)
      }
      onRoomLeft(mm, Tm) {
        var fm;
        if (mm === am.b.gameOrPluginKick.code) return;
        if (console.log(`Left room with code ${mm}`), mm === am.b.serverUpdating.code) return (0, eT.reportClientError)("disconnect", "Left room", "serverUpdating"), (0, Dm.c)().client.leaveGame(this.getUpdateWaitingUrl()), void this.goToUpdateWaiting();
        this.IE.sY(`Kicked from server with code ${mm}`, new Error);
        const hm = Object.keys(am.b).find((Tm => am.b[Tm].code === mm));
        (0, eT.reportClientError)("disconnect", "Left room", null !== hm && void 0 !== hm ? hm : String(mm));
        const Am = this.onConnectionToServerLost(mm, void 0, {
          site: "leave",
          closeReason: null !== Tm && void 0 !== Tm ? Tm : "",
          sinceJoined: this.sinceJoined()
        });
        (0, Dm.c)().client.leaveGameUnwanted({
          reason: `You have disconnected from the server.\n${Am.reason}`,
          canReconnect: Am.canReconnect,
          requiresRefresh: Am.requiresRefresh,
          automaticallyReconnect: null !== (fm = Am.automaticallyReconnect) && void 0 !== fm && fm
        }), (0, OT.navigatePreserveSearch)("/")
      }
      getUpdateWaitingUrl() {
        return (0, yT.B)(this.gameNameWithVariation, this.lobbyName)
      }
      goToUpdateWaiting() {
        (0, OT.navigatePreserveSearch)(this.getUpdateWaitingUrl())
      }
      onConnectionToServerLost(mm, Tm, fm) {
        var hm;
        let Am = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (null !== (hm = Tm) && void 0 !== hm && hm.endsWith(am.i) && (this.userContext.invalidateTrafficCode(), Tm = Tm.replace(am.i, "")), mm === am.b.outdatedVersion.code) return console.error("Outdated client with version ", xm.d, ", refreshing page"), (0, Im.reloadBloxd)(), {
          reason: "Outdated client",
          requiresRefresh: !0,
          canReconnect: !1
        };
        if (mm === am.b.loadRecaptchaError.code) return console.error("Load recaptcha error, refreshing page"), (0, Im.reloadBloxd)(), {
          reason: "Failed to load recaptcha",
          requiresRefresh: !0,
          canReconnect: !1
        };
        for (const xm in am.b) {
          const {
            code: fm,
            text: hm,
            canReconnect: Am
          } = am.b[xm];
          if (fm === mm) {
            console.log("matched known error", mm, "leaving game");
            return {
              reason: "" !== hm ? hm : Tm || `Code: ${mm}`,
              requiresRefresh: !1,
              canReconnect: Am,
              automaticallyReconnect: fm === am.b.customGameUpdated.code || fm === am.b.duplicateLobbyNameError.code
            }
          }
        }
        return console.log("Didn't match known error, leaving game"), (0, XT.g)(mm) || Am ? console.warn("Connection lost", mm, Tm) : this.logUnrecognisedConnectionLoss(mm, Tm, fm), {
          reason: `Either your internet isn't working or this is a bug.\nCode: ${mm}`,
          requiresRefresh: !1,
          canReconnect: !1,
          gameServerUnreachable: Am ? "failed" : void 0
        }
      }
      logUnrecognisedConnectionLoss(mm, Tm, fm) {
        (0, rT.lY)(new Error("Unrecognised connection loss"), {
          code: String(mm),
          cause: null !== Tm && void 0 !== Tm ? Tm : "",
          ...fm,
          game: this.gameNameWithVariation,
          ...(0, XT.n)()
        })
      }
    }
  },
  39088: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => df,
      g: () => fh
    });
    var hm, Am, am, xm, wm, Dm, im, Rm, pm, Em, om, Om, Ym, qm, jm, Vm, Im, Km, Qm, nm, Jm, cm, zm, Zm, km, bm, Sm, em, Nm, Gm, Xm, Pm, Hm, ym, Cm, rm, sm, lm, Mm, um, Bm, Lm, tm, Um, dm, gm, Wm, Fm, mT, TT, fT, hT, AT, aT, xT, wT, DT, iT, RT, pT, ET, oT, OT, YT, qT, jT, VT, IT, KT, QT, nT, JT, cT, zT, ZT, kT, bT, ST, eT, NT, GT, XT, PT, HT, yT, CT, rT, sT, lT, MT, uT, BT, LT, vT, tT, UT, dT, gT, WT, FT = fm(31),
      mf = fm(37238),
      Tf = fm(39098),
      ff = fm(39106),
      hf = fm(9050),
      Af = fm(649),
      af = fm(645),
      xf = fm(36886);
    let wf = (hm = (0, hf.type)("number"), Am = (0, hf.type)("number"), am = (0, hf.type)("number"), xm = (0, hf.type)("number"), wm = (0, hf.type)("number"), Dm = (0, hf.type)("number"), im = (0, hf.type)("string"), Rm = class extends hf.Schema {
        constructor() {
          super(...arguments), (0, Tf.e)(this, "id", pm, this), (0, Tf.e)(this, "amount", Em, this), (0, Tf.e)(this, "x", om, this), (0, Tf.e)(this, "y", Om, this), (0, Tf.e)(this, "z", Ym, this), (0, Tf.e)(this, "size", qm, this), (0, Tf.e)(this, "attributes", jm, this)
        }
      }, pm = (0, ff.c)(Rm.prototype, "id", [hm], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Em = (0, ff.c)(Rm.prototype, "amount", [Am], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), om = (0, ff.c)(Rm.prototype, "x", [am], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Om = (0, ff.c)(Rm.prototype, "y", [xm], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Ym = (0, ff.c)(Rm.prototype, "z", [wm], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), qm = (0, ff.c)(Rm.prototype, "size", [Dm], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 1
        }
      }), jm = (0, ff.c)(Rm.prototype, "attributes", [im], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "{}"
        }
      }), Rm),
      Df = (Vm = (0, hf.type)("string"), Im = (0, hf.type)("string"), Km = class extends hf.Schema {
        constructor() {
          super(...arguments), (0, Tf.e)(this, "itemName", Qm, this), (0, Tf.e)(this, "enchantmentTier", nm, this)
        }
      }, Qm = (0, ff.c)(Km.prototype, "itemName", [Vm], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), nm = (0, ff.c)(Km.prototype, "enchantmentTier", [Im], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), Km),
      Rf = (Jm = (0, hf.type)("string"), cm = (0, hf.type)("string"), zm = (0, hf.type)("number"), Zm = (0, hf.type)("number"), km = (0, hf.type)("number"), bm = (0, hf.type)("float32"), Sm = (0, hf.type)("float32"), em = (0, hf.type)("float32"), Nm = (0, hf.type)("string"), Gm = (0, hf.type)(["number"]), Xm = (0, hf.type)("boolean"), Pm = class extends hf.Schema {
        constructor() {
          super(...arguments), (0, Tf.e)(this, "type", Hm, this), (0, Tf.e)(this, "name", ym, this), (0, Tf.e)(this, "x", Cm, this), (0, Tf.e)(this, "y", rm, this), (0, Tf.e)(this, "z", sm, this), (0, Tf.e)(this, "xRotation", lm, this), (0, Tf.e)(this, "yRotation", Mm, this), (0, Tf.e)(this, "zRotation", um, this), (0, Tf.e)(this, "followingEId", Bm, this), (0, Tf.e)(this, "followingOffset", Lm, this), (0, Tf.e)(this, "shouldMatchFollowingEntityRotation", tm, this)
        }
      }, Hm = (0, ff.c)(Pm.prototype, "type", [Jm], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), ym = (0, ff.c)(Pm.prototype, "name", [cm], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return ""
        }
      }), Cm = (0, ff.c)(Pm.prototype, "x", [zm], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), rm = (0, ff.c)(Pm.prototype, "y", [Zm], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), sm = (0, ff.c)(Pm.prototype, "z", [km], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), lm = (0, ff.c)(Pm.prototype, "xRotation", [bm], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Mm = (0, ff.c)(Pm.prototype, "yRotation", [Sm], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), um = (0, ff.c)(Pm.prototype, "zRotation", [em], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Bm = (0, ff.c)(Pm.prototype, "followingEId", [Nm], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), Lm = (0, ff.c)(Pm.prototype, "followingOffset", [Gm], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new hf.ArraySchema(0, 0, 0)
        }
      }), tm = (0, ff.c)(Pm.prototype, "shouldMatchFollowingEntityRotation", [Xm], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !0
        }
      }), Pm),
      pf = (Um = (0, hf.type)("float32"), dm = (0, hf.type)("float32"), gm = (0, hf.type)("boolean"), Wm = (0, hf.type)("boolean"), Fm = (0, hf.type)("float32"), mT = (0, hf.type)("boolean"), TT = (0, hf.type)("string"), fT = (0, hf.type)("string"), hT = (0, hf.type)("string"), AT = (0, hf.type)("string"), aT = (0, hf.type)(["number"]), xT = (0, hf.type)("number"), wT = (0, hf.type)({
        map: Df
      }), DT = class extends Rf {
        constructor() {
          super(...arguments), (0, Tf.e)(this, "scale", iT, this), (0, Tf.e)(this, "speed", RT, this), (0, Tf.e)(this, "jumping", pT, this), (0, Tf.e)(this, "crouching", ET, this), (0, Tf.e)(this, "cameraPitch", oT, this), (0, Tf.e)(this, "armSwinging", OT, this), (0, Tf.e)(this, "heldItemName", YT, this), (0, Tf.e)(this, "heldItemEnchantmentTier", qT, this), (0, Tf.e)(this, "pose", jT, this), (0, Tf.e)(this, "ridingVehicleEId", VT, this), (0, Tf.e)(this, "meshOffset", IT, this), (0, Tf.e)(this, "baseRenderHeading", KT, this), (0, Tf.e)(this, "armour", QT, this)
        }
      }, iT = (0, ff.c)(DT.prototype, "scale", [Um], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 1
        }
      }), RT = (0, ff.c)(DT.prototype, "speed", [dm], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), pT = (0, ff.c)(DT.prototype, "jumping", [gm], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), ET = (0, ff.c)(DT.prototype, "crouching", [Wm], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), oT = (0, ff.c)(DT.prototype, "cameraPitch", [Fm], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), OT = (0, ff.c)(DT.prototype, "armSwinging", [mT], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), YT = (0, ff.c)(DT.prototype, "heldItemName", [TT], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), qT = (0, ff.c)(DT.prototype, "heldItemEnchantmentTier", [fT], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), jT = (0, ff.c)(DT.prototype, "pose", [hT], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "standing"
        }
      }), VT = (0, ff.c)(DT.prototype, "ridingVehicleEId", [AT], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), IT = (0, ff.c)(DT.prototype, "meshOffset", [aT], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new hf.ArraySchema(0, 0, 0)
        }
      }), KT = (0, ff.c)(DT.prototype, "baseRenderHeading", [xT], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), QT = (0, ff.c)(DT.prototype, "armour", [wT], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new hf.MapSchema
        }
      }), DT),
      Ef = (nT = (0, hf.type)("string"), JT = (0, hf.type)("string"), cT = (0, hf.type)("string"), zT = (0, hf.type)("uint8"), ZT = class extends pf {
        constructor() {
          super(...arguments), (0, Tf.e)(this, "variation", kT, this), (0, Tf.e)(this, "ownerDbId", bT, this), (0, Tf.e)(this, "metaInfo", ST, this), (0, Tf.e)(this, "aiState", eT, this)
        }
      }, kT = (0, ff.c)(ZT.prototype, "variation", [nT], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "default"
        }
      }), bT = (0, ff.c)(ZT.prototype, "ownerDbId", [JT], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), ST = (0, ff.c)(ZT.prototype, "metaInfo", [cT], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return ""
        }
      }), eT = (0, ff.c)(ZT.prototype, "aiState", [zT], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), ZT);
    NT = (0, hf.type)("string"), GT = (0, hf.type)("string"), XT = (0, hf.type)("string"), PT = (0, hf.type)("string"), HT = class extends Rf {
      constructor() {
        super(...arguments), (0, Tf.e)(this, "meshKind", yT, this), (0, Tf.e)(this, "meshOpts", CT, this), (0, Tf.e)(this, "pose", rT, this), (0, Tf.e)(this, "leaderboardTop", sT, this)
      }
    }, yT = (0, ff.c)(HT.prototype, "meshKind", [NT], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), CT = (0, ff.c)(HT.prototype, "meshOpts", [GT], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), rT = (0, ff.c)(HT.prototype, "pose", [XT], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), sT = (0, ff.c)(HT.prototype, "leaderboardTop", [PT], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    });

    function of(mm) {
      return Object.keys(hf.Metadata.getFields(mm))
    }
    const Of = of(Ef);
    for (const hh of Af.q)
      if (!Of.includes(hh)) throw new Error(`Mob Schema is missing a networked property: "${hh}"`);
    const Yf = of((lT = (0, hf.type)("string"), MT = (0, hf.type)("float32"), uT = (0, hf.type)("float32"), BT = (0, hf.type)("float32"), LT = (0, hf.type)("float32"), vT = class extends Rf {
      constructor() {
        super(...arguments), (0, Tf.e)(this, "soundName", tT, this), (0, Tf.e)(this, "volume", UT, this), (0, Tf.e)(this, "refDistance", dT, this), (0, Tf.e)(this, "maxHearDist", gT, this), (0, Tf.e)(this, "rate", WT, this)
      }
    }, tT = (0, ff.c)(vT.prototype, "soundName", [lT], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return ""
      }
    }), UT = (0, ff.c)(vT.prototype, "volume", [MT], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return 1
      }
    }), dT = (0, ff.c)(vT.prototype, "refDistance", [uT], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return xf.f
      }
    }), gT = (0, ff.c)(vT.prototype, "maxHearDist", [BT], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return xf.c
      }
    }), WT = (0, ff.c)(vT.prototype, "rate", [LT], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return 1
      }
    }), vT));
    for (const hh of af.k)
      if (!Yf.includes(hh)) throw new Error(`AudioEntity Schema is missing a replicated property: "${hh}"`);
    var qf = fm(38532),
      jf = fm(1247),
      Vf = fm(653),
      If = fm(38298),
      Kf = fm(4171),
      Qf = fm(354),
      nf = fm(37330),
      Jf = fm(38159),
      zf = fm(2208),
      Zf = fm(37312),
      kf = fm(38564),
      bf = fm(37451),
      Sf = fm(362),
      ef = fm.n(Sf),
      Nf = fm(37997),
      Gf = fm(37173),
      Xf = fm(38140),
      Pf = fm(38179);
    class Hf {
      constructor(mm, Tm) {
        this.bloxd = mm, this.eId = Tm, this.IE = void 0, this.colyseusEntity = void 0, this.canSeeSub = void 0, this.canAttackSub = void 0, this.interactableSub = void 0, this.overlayColourSub = void 0, this.opacitySub = void 0, this.zIndexSub = void 0, this.multilineTextBoxSub = void 0, this.previousHidingMeshManagerState = void 0, this.meshKind = void 0, this.meshOpts = void 0, this.leaderboardTop = void 0, this.meshRebuildQueued = !1, this.PO = !1, this.IE = mm.IE
      }
      initClient(mm) {
        var Tm, fm, hm;
        this.colyseusEntity = mm, this.meshKind = mm.meshKind, this.meshOpts = mm.meshOpts, this.leaderboardTop = mm.leaderboardTop, this.IE.qI.add([mm.x, mm.y, mm.z], 1, 1, null, null, !1, !1, this.eId), this.IE.qI.vG(this.eId, "smoothToServerPos");
        const Am = "Person" === this.meshKind;
        this.IE.qI.vG(this.eId, "meshRotation", {
          isServerControlled: !0,
          ...Am ? {
            defaultRotationsPerSecond: .5
          } : {},
          childrenNodeParams: Am ? [{
            nodeName: "HeadMesh",
            softTolerance: kf.i,
            hardTolerance: null
          }] : []
        }), this.updateHidingMeshMgr(), this.canSeeSub = FT.j.subscribe(`otherEntitySettings|${this.eId}|canSee`, (mm => {
          this.updateHidingMeshMgr()
        }));
        const am = () => {
          const mm = this.IE.qI.oTm(this.eId);
          if (!mm) return;
          const Tm = (0, bf.i)(this.eId);
          if ("number" === typeof mm.QG) {
            var fm, hm, Am, am;
            const xm = null === (fm = (0, zf.g)("head", null === (Am = this.getSpec()) || void 0 === Am || null === (am = Am.opts.textures) || void 0 === am ? void 0 : am.head)) || void 0 === fm || null === (hm = fm.personModel) || void 0 === hm ? void 0 : hm.fullBody;
            return this.IE.qY.YG.setPickable(mm.QG, Tm && !xm), void(0, Gf.updatePersonAttachmentPickability)(this.IE, this.eId, Tm)
          }
          const xm = mm.mesh;
          if (xm)
            for (const wm of [xm, ...xm.getChildMeshes(!1)]) "xq" in wm && !wm.name.startsWith("Cape|") && (wm.xq = Tm)
        };
        this.canAttackSub = FT.j.subscribe(`otherEntitySettings|${this.eId}|canAttack`, am), this.interactableSub = FT.j.subscribe(`otherEntitySettings|${this.eId}|interactable`, am), this.overlayColourSub = FT.j.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|overlayColour`, (mm => {
          this.updateOverlayColour(mm)
        })), this.opacitySub = FT.j.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|opacity`, (mm => {
          this.updateOpacity(mm)
        })), this.zIndexSub = FT.j.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|zIndex`, (mm => {
          this.updateZIndex(mm)
        }));
        const xm = this.IE.mH[this.IE.xH][this.eId];
        this.updateOverlayColour(null !== (Tm = null === xm || void 0 === xm ? void 0 : xm.overlayColour) && void 0 !== Tm ? Tm : null), this.updateOpacity(null !== (fm = null === xm || void 0 === xm ? void 0 : xm.opacity) && void 0 !== fm ? fm : 1), this.updateZIndex(null !== (hm = null === xm || void 0 === xm ? void 0 : xm.zIndex) && void 0 !== hm ? hm : 0), this.multilineTextBoxSub = (0, Zf.p)(this.IE, this.eId)
      }
      onChangeClient(mm, Tm) {
        if ("xRotation" === mm || "yRotation" === mm || "zRotation" === mm)(0, Zf.s)(this.IE, this.eId, mm, Tm);
        else if ("pose" === mm) {
          const mm = this.IE.qI.ITm(this.eId);
          mm && (mm.pose = Tm || "standing")
        } else "meshKind" === mm || "meshOpts" === mm ? (this[mm] = Tm, this.queueMeshRebuild()) : "name" === mm && "" !== Tm ? this.updateHidingMeshMgr() : "leaderboardTop" === mm && (this.leaderboardTop = Tm, FT.j.gp(`leaderboardTop|${this.eId}`, Tm))
      }
      disposeClient() {
        this.PO = !0, this.IE.qI.deleteEntity(this.eId), FT.j.unsubscribe(this.canSeeSub), FT.j.unsubscribe(this.canAttackSub), FT.j.unsubscribe(this.interactableSub), FT.j.unsubscribe(this.overlayColourSub), FT.j.unsubscribe(this.opacitySub), FT.j.unsubscribe(this.zIndexSub), FT.j.unsubscribe(this.multilineTextBoxSub)
      }
      getCurrentHidingMeshMgrState() {
        var mm, Tm;
        return {
          canSee: null !== (mm = null === (Tm = this.IE.mH[this.IE.xH][this.eId]) || void 0 === Tm ? void 0 : Tm.canSee) && void 0 !== mm && mm,
          name: this.colyseusEntity.name,
          meshKind: this.meshKind,
          meshOpts: this.meshOpts
        }
      }
      updateHidingMeshMgr() {
        var mm, Tm, fm;
        const {
          IE: hm
        } = this, {
          qI: Am
        } = hm, am = this.getCurrentHidingMeshMgrState();
        if ((0, Qf.Zd)(this.previousHidingMeshManagerState, am)) return;
        if (this.previousHidingMeshManagerState = am, Am.WG(this.eId, "hidingMeshManager"), null === (mm = hm.mH[hm.xH][this.eId]) || void 0 === mm || !mm.canSee) return;
        const xm = this.getSpec();
        if (!xm) return;
        const {
          type: wm,
          opts: Dm
        } = xm;
        "Person" === wm && (Dm.textures = (0, zf.i)(Dm.textures)), Dm.eId = this.eId, Am.vG(this.eId, "hidingMeshManager", {
          addMeshComponent: () => {
            var mm, Tm, fm;
            "Leaderboard" === wm && (Dm.leaderboardTop = this.leaderboardTop);
            const am = this.bloxd.client.meshCreator.getEntityMesh(wm, Dm, (mm => {
              var Tm, fm;
              if ("number" === typeof mm) {
                var Am, am, xm;
                const Tm = hm.qY.YG;
                Tm.setEntityId(mm, this.eId);
                const fm = "Person" === wm && (null === (Am = (0, zf.g)("head", null === (xm = Dm.textures) || void 0 === xm ? void 0 : xm.head)) || void 0 === Am || null === (am = Am.personModel) || void 0 === am ? void 0 : am.fullBody);
                return void Tm.setPickable(mm, (0, bf.i)(this.eId) && !fm)
              }
              const im = mm;
              for (const wm of [im, ...im.getChildMeshes(!1)]) void 0 === wm.xq || wm.name.startsWith("Cape|") || (wm.xq = (0, bf.i)(this.eId), wm.metadata ??= new hm.qY.wq, wm.metadata.eId = this.eId);
              this.updateOpacity(null !== (Tm = null === (fm = hm.mH[hm.xH][this.eId]) || void 0 === fm ? void 0 : fm.opacity) && void 0 !== Tm ? Tm : 1)
            }));
            if (!am) return;
            const {
              QG: xm,
              mesh: im,
              meshOffset: Rm,
              nameYOffset: pm,
              modelLoaded: Em
            } = am;
            null === Em || void 0 === Em || Em.then((() => {
              var mm;
              (null === (mm = Am.oTm(this.eId)) || void 0 === mm ? void 0 : mm.mesh) === im && (this.previousHidingMeshManagerState = null, this.updateHidingMeshMgr())
            }));
            const om = null === xm ? null : hm.qY.YG.hhm(xm, 0);
            if (Am.vG(this.eId, Am.names.mesh, {
                QG: xm,
                kfm: om,
                mesh: im,
                awm: !1,
                Sfm: "Leaderboard" !== wm,
                offset: Rm.slice(),
                Awm: "ParticleEmitter" === wm && Dm.followTargetMeshOffset ? mm => {
                  var Tm;
                  ef().copy(mm, Rm);
                  const fm = null === (Tm = Am.hfm(this.eId)) || void 0 === Tm ? void 0 : Tm.kO,
                    hm = void 0 === fm ? null : Am.ITm(fm);
                  if (hm) {
                    var am, xm;
                    const Tm = this.bloxd.getEntityHeading(null !== (am = hm.ridingVehicleEId) && void 0 !== am ? am : fm, !0),
                      Am = Math.sin(Tm),
                      wm = Math.cos(Tm);
                    mm[0] += hm.meshOffset[0] * wm + hm.meshOffset[2] * Am, mm[1] += hm.meshOffset[1], mm[2] += hm.meshOffset[2] * wm - hm.meshOffset[0] * Am;
                    const Dm = null !== (xm = hm.ridingVehicleEId) && void 0 !== xm ? xm : null;
                    null !== Dm && (0, Pf.e)(this.IE, Dm, mm)
                  }
                } : null
              }), "Person" === wm) {
              var Om, Ym, qm, jm;
              Am.vG(this.eId, Am.names.meshAttachments, {
                personFullBody: null !== (Om = null === (Ym = (0, zf.g)("head", null === (jm = Dm.textures) || void 0 === jm ? void 0 : jm.head)) || void 0 === Ym || null === (qm = Ym.personModel) || void 0 === qm ? void 0 : qm.fullBody) && void 0 !== Om && Om
              });
              for (const mm of jf.r) {
                var Vm, Im, Km;
                const Tm = null === (Vm = Dm.textures) || void 0 === Vm ? void 0 : Vm[mm];
                Tm && null !== (Im = (0, zf.g)(mm, Tm)) && void 0 !== Im && null !== (Km = Im.attachments) && void 0 !== Km && Km.length && Jf.e.Player.meshApi.updatePlayerCosmetic(this.eId, xm, mm, Tm)
              }
              Am.vG(this.eId, Am.names.moveState), Am.vG(this.eId, "updateWalkingState", {
                QG: xm,
                kfm: om,
                walkingLegSwingDuration: kf.o
              }), Am.vG(this.eId, "humanoidMesh", {
                QG: xm,
                kfm: om,
                heldItemPositionParams: {},
                maxWalkingAngleOverride: null
              }), Am.vG(this.eId, "animator", {
                QG: xm,
                kfm: om,
                modelLifeformType: "Player"
              }), Xf.f.hasAnimation("Person") && Am.vG(this.eId, "rigAnimation", {
                target: "Person",
                QG: xm
              }), Am.ITm(this.eId).pose = this.colyseusEntity.pose || "standing"
            } else if ("BloxdBlock" === wm && null !== xm) {
              Am.vG(this.eId, "animator", {
                QG: xm,
                kfm: om,
                modelLifeformType: null
              });
              const mm = (0, If.z)(Dm.blockName);
              null !== mm && Am.vG(this.eId, "rigAnimation", {
                target: mm,
                QG: xm
              })
            }
            Am.Zwm(this.eId, "entityName", {
              name: this.colyseusEntity.name,
              nameYOffset: pm
            }), this.bloxd.setEntityName(this.eId, this.colyseusEntity.name), !0 === Dm.autoRotate && (Am.WG(this.eId, "meshRotation"), Am.vG(this.eId, "autoRotate"));
            const {
              lineToEId: Qm
            } = Dm;
            (0, Vf.H)(Qm) || Am.vG(this.eId, "lineToEntity", {
              lineToEId: Qm
            });
            const nm = hm.mH[hm.xH][this.eId];
            this.updateOverlayColour(null !== (mm = null === nm || void 0 === nm ? void 0 : nm.overlayColour) && void 0 !== mm ? mm : null), this.updateOpacity(null !== (Tm = null === nm || void 0 === nm ? void 0 : nm.opacity) && void 0 !== Tm ? Tm : 1), this.updateZIndex(null !== (fm = null === nm || void 0 === nm ? void 0 : nm.zIndex) && void 0 !== fm ? fm : 0)
          },
          removeMeshComponent: () => {
            "Person" !== wm && "BloxdBlock" !== wm || Am.WG(this.eId, "rigAnimation"), Am.WG(this.eId, Am.names.mesh), Am.Pmm(this.eId, Am.names.meshAttachments) && Am.WG(this.eId, Am.names.meshAttachments), Am.WG(this.eId, "entityName"), Am.WG(this.eId, "autoRotate"), Am.WG(this.eId, "lineToEntity"), "Person" === wm ? (Am.WG(this.eId, Am.names.moveState), Am.WG(this.eId, "updateWalkingState"), Am.WG(this.eId, "humanoidMesh"), Am.WG(this.eId, "animator")) : "BloxdBlock" === wm && Am.WG(this.eId, "animator")
          },
          hideDist: null !== (Tm = Dm.hideDist) && void 0 !== Tm ? Tm : 80,
          movingHideDist: null !== (fm = Dm.hideDist) && void 0 !== fm ? fm : 120,
          displayOutsideLoadedChunk: Dm.hideDist > 100,
          immediatelyUpdate: !0,
          Ix: "BloxdBlock" === wm ? Dm.blockName : wm
        })
      }
      queueMeshRebuild() {
        this.meshRebuildQueued || (this.meshRebuildQueued = !0, queueMicrotask((() => {
          this.meshRebuildQueued = !1, this.PO || this.updateHidingMeshMgr()
        })))
      }
      getSpec() {
        return (0, Kf.k)({
          meshKind: this.meshKind,
          meshOpts: this.meshOpts
        })
      }
      updateOverlayColour(mm) {
        var Tm, fm;
        if ("Person" !== this.meshKind) return;
        let hm = new nf.e(0, 0, 0, 0);
        if (null !== mm) {
          const Tm = (0, Qf.X)(mm);
          hm = new nf.e(Tm[0] / 255, Tm[1] / 255, Tm[2] / 255, .5)
        }
        const Am = null !== (Tm = null === (fm = this.IE.qI.oTm(this.eId)) || void 0 === fm ? void 0 : fm.QG) && void 0 !== Tm ? Tm : null;
        null !== Am && Jf.e.Player.meshApi.updateMeshOverlayColour(Am, hm)
      }
      updateZIndex(mm) {
        var Tm;
        if ("Person" !== this.meshKind) return;
        const fm = null === (Tm = this.IE.qI.oTm(this.eId)) || void 0 === Tm ? void 0 : Tm.QG;
        "number" === typeof fm && this.IE.qY.YG.setRenderingGroupId(fm, mm)
      }
      updateOpacity(mm) {
        const Tm = this.IE.qI.oTm(this.eId);
        Tm && ("number" !== typeof Tm.QG ? Tm.mesh && "ParticleEmitter" !== this.meshKind && (0, Nf.g)(Tm.mesh, mm) : Jf.e.Player.meshApi.updateMeshOpacity(Tm.QG, mm))
      }
    }
    var yf = fm(39093);
    class Cf {
      constructor(mm, Tm) {
        this.eId = Tm, this.IE = void 0, this.schema = void 0, this.IE = mm.IE
      }
      initClient(mm) {
        this.schema = mm, this.IE.qI.add([mm.x, mm.y, mm.z], .1, .1, null, null, !1, !1, this.eId), this.IE.qI.vG(this.eId, "smoothToServerPos"), yf.b.add(this.eId, this.copyOpts())
      }
      onChangeClient(mm) {
        af.k.includes(mm) && yf.b.update(this.eId, this.copyOpts())
      }
      disposeClient() {
        yf.b.remove(this.eId), this.IE.qI.deleteEntity(this.eId)
      }
      copyOpts() {
        const {
          soundName: mm,
          volume: Tm,
          refDistance: fm,
          maxHearDist: hm,
          rate: Am
        } = this.schema;
        return {
          soundName: mm,
          volume: Tm,
          refDistance: fm,
          maxHearDist: hm,
          rate: Am
        }
      }
    }
    var rf = fm(3672),
      sf = fm(36861),
      lf = fm(6451),
      Mf = fm(37836),
      uf = fm(2760),
      Bf = fm(38218),
      Lf = fm(8998),
      vf = fm(38576),
      tf = fm(37811),
      Uf = fm(2932);
    class df {
      constructor(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
          hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => performance.now();
        this.nfm = mm, this.IE = Tm, this.setupBudgetMs = fm, this.now = hm, this.createStateCallbacks = void 0, this.roomStateCallbacks = void 0, this.allItems = {}, this.detachers = new Map, this.deferredSetups = new Map, this.queuedSetups = new Map, this.promotedSetups = new Set, this.setupBudgetLeftMs = void 0, this.lastRefillMs = void 0, this.roomState = void 0, this.PO = !1, this.onFrame = () => {
          this.setUpQueuedEntities(!0)
        }, this.HV = () => {
          this.setUpQueuedEntities(this.now() - this.lastRefillMs > 100)
        }, this.setUpPromoted = () => {
          for (const mm of this.promotedSetups) {
            this.promotedSetups.delete(mm);
            const Tm = this.queuedSetups.get(mm);
            Tm && (this.queuedSetups.delete(mm), this.timedSetup(Tm, mm))
          }
        }, this.createStateCallbacks = (0, Lf.getStateCallbacks)(mm), this.roomStateCallbacks = this.createStateCallbacks(mm.state), this.roomState = mm.state, this.setupBudgetLeftMs = fm, this.lastRefillMs = hm()
      }
      setup() {
        this.setupEntityHandlers(), this.setupItemHandlers(), this.nfm.onStateChange(this.setUpPromoted), this.IE.on("beforeInputs", this.onFrame), this.IE.on("DE", this.HV)
      }
      setUpQueuedEntities(mm) {
        var Tm;
        if ((null === (Tm = (0, uf.c)().client.getMsgHandler()) || void 0 === Tm ? void 0 : Tm.nfm) !== this.nfm) return this.IE.off("beforeInputs", this.onFrame), this.IE.off("DE", this.HV), this.queuedSetups.clear(), void this.promotedSetups.clear();
        if (mm && (this.setupBudgetLeftMs = this.setupBudgetMs, this.lastRefillMs = this.now()), this.setUpPromoted(), 0 !== this.queuedSetups.size)
          for (ef().copy(gf, this.IE.qI.rV(this.IE.xH)); this.setupBudgetLeftMs > 0;) {
            const mm = this.nearestQueued(gf);
            if (null === mm) return;
            this.setUpIfQueued(mm), this.setUpPromoted()
          }
      }
      nearestQueued(mm) {
        let Tm = null,
          fm = 1 / 0;
        return this.queuedSetups.forEach(((hm, Am) => {
          const am = function(mm, Tm) {
            return (Tm.x - mm[0]) ** 2 + (Tm.y - mm[1]) ** 2 + (Tm.z - mm[2]) ** 2
          }(mm, hm);
          (null === Tm || am < fm) && (Tm = Am, fm = am)
        })), Tm
      }
      setUpOrQueue(mm, Tm) {
        0 === this.queuedSetups.size && this.setupBudgetLeftMs > 0 || this.mustSetUpNow(mm, Tm) ? this.timedSetup(mm, Tm) : this.queuedSetups.set(Tm, mm)
      }
      mustSetUpNow(mm, Tm) {
        const fm = this.IE.Cmm;
        if (Tm === fm) return !0;
        const hm = this.roomState.entities.get(fm);
        return !(!hm || hm.ridingVehicleEId !== Tm && hm.followingEId !== Tm) || (Wf(mm.type) === qf.c || (0, uf.c)().getFollowingEntities(Tm).length > 0)
      }
      setUpIfQueued(mm) {
        const Tm = this.queuedSetups.get(mm);
        Tm && (this.queuedSetups.delete(mm), this.timedSetup(Tm, mm))
      }
      promoteIfQueued(mm) {
        null !== mm && this.queuedSetups.has(mm) && this.promotedSetups.add(mm)
      }
      timedSetup(mm, Tm) {
        const fm = this.now();
        this.setupEntity(mm, Tm), this.setupBudgetLeftMs -= this.now() - fm
      }
      setupEntityHandlers() {
        this.roomStateCallbacks.entities.pI(((mm, Tm) => {
          this.IE.Cmm ? this.setUpOrQueue(mm, Tm) : this.deferEntitySetupUntilInitInfo(mm, Tm)
        })), this.roomStateCallbacks.entities.oN(((mm, Tm) => {
          const fm = this.deferredSetups.get(Tm);
          fm && (FT.j.unsubscribe(fm), this.deferredSetups.delete(Tm)), this.queuedSetups.delete(Tm), this.detach(Tm), (0, uf.c)().client.disposeEntity(Tm)
        }))
      }
      deferEntitySetupUntilInitInfo(mm, Tm) {
        const fm = FT.j.wV("initInfoReceived", (() => {
          this.deferredSetups.delete(Tm), this.setUpOrQueue(mm, Tm)
        }));
        this.deferredSetups.set(Tm, fm), (0, rf.onGameResetOnce)((() => {
          this.deferredSetups.get(Tm) === fm && (FT.j.unsubscribe(fm), this.deferredSetups.delete(Tm)), (0, uf.c)().updatePositionAndPhysics(this.IE.xH, {
            type: lf.m.DEFAULT,
            tier: null
          }, !0), (0, uf.c)().takeHeldPlayerBodySize(this.IE.xH);
          const mm = this.IE.qI.mTm(this.IE.xH);
          mm && (mm.movementType = lf.l.NORMAL)
        }))
      }
      setupEntity(mm, Tm) {
        const fm = Tm === this.IE.Cmm;
        if (fm)(0, uf.c)().client.lB(this.IE.xH, null, null);
        else {
          const {
            type: fm
          } = mm, hm = Wf(fm);
          if (void 0 === hm) return void
          function(mm, Tm) {
            const fm = String(mm);
            if (Ff.has(fm)) return;
            Ff.add(fm);
            const hm = fm.length > 80 ? `${fm.slice(0,80)}...` : fm,
              Am = `No client handler for entity type ${JSON.stringify(hm)}, so entity ${Tm} is not set up`;
            console.warn(Am), (0, Uf.reportClientError)("uncaught", Am, "unknown_entity_type")
          }(fm, Tm);
          (0, uf.c)().client.lB(Tm, mm, new hm((0, uf.c)(), Tm, fm))
        }
        const hm = this.createStateCallbacks(mm);
        if (fm) return this.setupMapSchemaCallbacks(Tm, mm, hm, "armour"), this.setupScalarField(Tm, mm, hm, "scale"), this.setupScalarField(Tm, mm, hm, "ridingVehicleEId"), this.setupScalarField(Tm, mm, hm, "followingEId"), this.setupScalarField(Tm, mm, hm, "followingOffset"), void this.setupScalarField(Tm, mm, hm, "shouldMatchFollowingEntityRotation");
        for (const Am of of(mm.constructor)) mm[Am] instanceof hf.MapSchema ? this.setupMapSchemaCallbacks(Tm, mm, hm, Am) : this.setupScalarField(Tm, mm, hm, Am)
      }
      setupMapSchemaCallbacks(mm, Tm, fm, hm) {
        const Am = fm[hm],
          am = new Map;
        Am.pI(((fm, Am) => {
          if (this.onEntityFieldChange(mm, Tm, hm, {
              key: Am,
              value: fm
            }), !(fm instanceof hf.Schema)) return;
          const xm = this.createStateCallbacks(fm),
            wm = [];
          for (const am of of(fm.constructor)) wm.push(this.listenForFutureChanges(xm, am, (() => {
            this.onEntityFieldChange(mm, Tm, hm, {
              key: Am,
              value: fm
            })
          })));
          am.set(Am, (() => {
            for (const mm of wm) mm()
          }))
        })), Am.oN(((fm, Am) => {
          var xm;
          null === (xm = am.get(Am)) || void 0 === xm || xm(), am.delete(Am), this.onEntityFieldChange(mm, Tm, hm, {
            key: Am,
            value: null
          })
        })), this.addDetacher(mm, (() => {
          for (const mm of am.values()) mm();
          am.clear()
        }))
      }
      setupScalarField(mm, Tm, fm, hm) {
        this.onEntityFieldChange(mm, Tm, hm, Tm[hm]);
        const Am = this.listenForFutureChanges(fm, hm, (fm => {
          this.onEntityFieldChange(mm, Tm, hm, fm)
        }));
        this.addDetacher(mm, Am)
      }
      addDetacher(mm, Tm) {
        let fm = this.detachers.get(mm);
        fm || (fm = [], this.detachers.set(mm, fm)), fm.push(Tm)
      }
      detach(mm) {
        for (const fm of null !== (Tm = this.detachers.get(mm)) && void 0 !== Tm ? Tm : []) {
          var Tm;
          fm()
        }
        this.detachers.delete(mm)
      }
      listenForFutureChanges(mm, Tm, fm) {
        return mm.listen(Tm, fm, !1)
      }
      onEntityFieldChange(mm, Tm, fm, hm) {
        switch (fm) {
          case "ridingVehicleEId": {
            this.promoteIfQueued(hm);
            const Tm = this.IE.qI.ITm((0, sf.d)(mm));
            Tm && (Tm.ridingVehicleEId = hm);
            break
          }
          case "armour":
            this.handleArmourChange(mm, hm);
            break;
          case "followingEId":
            this.promoteIfQueued(hm), this.handleFollowingEIdChange(mm, Tm, hm);
            break;
          case "xRotation":
          case "yRotation":
          case "zRotation":
            this.handleRotationChange(mm, fm, hm);
            break;
          case "scale":
            this.handleScaleChange(mm, hm);
            break;
          case "baseRenderHeading":
            this.handleBaseRenderHeadingChange(mm, hm);
            break;
          case "followingOffset":
            this.handleFollowingOffsetChange(mm, hm);
            break;
          case "shouldMatchFollowingEntityRotation":
            this.handleShouldMatchFollowingEntityRotationChange(mm, hm);
            break;
          case "x":
          case "y":
          case "z":
            return void this.handlePositionChange(mm, fm, hm)
        }(0, uf.c)().client.updateEntityField(mm, fm, hm)
      }
      handleArmourChange(mm, Tm) {
        var fm, hm;
        const {
          key: Am,
          value: am
        } = Tm;
        (0, Jf.E)(mm, Am, null !== (fm = null === am || void 0 === am ? void 0 : am.itemName) && void 0 !== fm ? fm : null, null !== (hm = null === am || void 0 === am ? void 0 : am.enchantmentTier) && void 0 !== hm ? hm : null)
      }
      handleFollowingEIdChange(mm, Tm, fm) {
        const hm = (0, sf.d)(mm),
          Am = hm === this.IE.xH;
        if (this.IE.qI.WG(hm, this.IE.qI.names.bK), fm) this.IE.qI.WG(hm, "smoothToServerPos"), this.IE.qI.vG(hm, this.IE.qI.names.bK, {
          kO: (0, sf.d)(fm),
          offset: Array.from(Tm.followingOffset),
          Afm: Tm.shouldMatchFollowingEntityRotation,
          Dfm: !0,
          ifm: (mm, hm) => {
            if (ef().copy(mm, Tm.followingOffset), Tm.ridingVehicleEId === fm) {
              const Tm = (0, sf.d)(fm),
                Am = (0, uf.c)().getEntityHeading(Tm, hm);
              ef().pa(mm, mm, ef().ZERO, Am)
            }
          }
        });
        else if (!Am) {
          this.IE.qI.Pmm(hm, "smoothToServerPos") || this.IE.qI.vG(hm, "smoothToServerPos");
          const mm = this.IE.qI.getState(hm, "smoothToServerPos"),
            Tm = this.IE.qI.uB(hm).position;
          (0, tf.setServerPosition)(mm, Tm[0], Tm[1], Tm[2])
        }
      }
      handleRotationChange(mm, Tm, fm) {
        const hm = "xRotation" === Tm ? 0 : "yRotation" === Tm ? 1 : 2;
        for (const Am of (0, uf.c)().getFollowingEntities(mm)) {
          const mm = this.IE.qI.getState(Am, "meshRotation"),
            Tm = this.IE.qI.hfm(Am);
          mm && Tm.Afm && (mm.serverSetRotation[hm] = fm)
        }
      }
      handleScaleChange(mm, Tm) {
        const fm = (0, sf.d)(mm);
        if (FT.j.gp(`entityScale|${fm}`, Tm), fm === this.IE.xH) {
          var hm;
          (0, uf.c)().removeFromEyeHeightCache(fm);
          const mm = this.IE.qI.mTm(this.IE.xH),
            Tm = null !== (hm = null === mm || void 0 === mm ? void 0 : mm.physicsState) && void 0 !== hm ? hm : {
              type: lf.m.DEFAULT,
              tier: null
            };
          return void(0, uf.c)().updatePositionAndPhysics(this.IE.xH, Tm, !1)
        }
        const Am = (0, uf.c)().getLifeformType(fm);
        if (null === Am) return;
        const {
          physicsBodyWidth: am,
          physicsBodyHeight: xm
        } = (0, vf.e)(Tm, Am);
        this.IE.qI.mfm(fm, am, xm, am)
      }
      handleBaseRenderHeadingChange(mm, Tm) {
        const fm = this.IE.qI.getState(mm, "meshRotation");
        fm && (fm.baseRenderRotation[1] = Tm);
        for (const hm of (0, uf.c)().getFollowingEntities(mm)) {
          const mm = this.IE.qI.getState(hm, "meshRotation"),
            fm = this.IE.qI.hfm(hm);
          mm && fm.Afm && (mm.baseRenderRotation[1] = Tm)
        }
      }
      handleFollowingOffsetChange(mm, Tm) {
        const fm = this.IE.qI.hfm((0, sf.d)(mm));
        if (fm && fm.offset) {
          const mm = Tm ? Array.from(Tm) : ef().ZERO;
          fm.offset[0] = mm[0], fm.offset[1] = mm[1], fm.offset[2] = mm[2]
        }
      }
      handleShouldMatchFollowingEntityRotationChange(mm, Tm) {
        const fm = this.IE.qI.hfm((0, sf.d)(mm));
        fm && (fm.Afm = null === Tm || void 0 === Tm || Tm)
      }
      handlePositionChange(mm, Tm, fm) {
        if (this.IE.qI.Pmm(mm, "smoothToServerPos")) {
          const hm = this.IE.qI.getState(mm, "smoothToServerPos");
          (0, tf.setServerPositionAxis)(hm, mh[Tm], fm)
        }
      }
      setupItemHandlers() {
        this.roomStateCallbacks.items.pI(((mm, Tm) => {
          this.allItems[Tm] = mm, (0, Mf.k)(this.IE, Tm, [mm.x, mm.y, mm.z], mm.id, {
            amount: mm.amount,
            attributes: JSON.parse(mm.attributes),
            pT: (0, mf.d)(this.IE).cantPickUpItem(Tm),
            size: mm.size,
            predictedAt: (0, uf.c)().client.itemDropPrediction.onServerItemAdded(Tm)
          });
          const fm = this.createStateCallbacks(mm);
          for (const hm of of(wf)) this.onItemFieldChange(Tm, hm, mm[hm]), this.addDetacher(Tm, this.listenForFutureChanges(fm, hm, (mm => {
            this.onItemFieldChange(Tm, hm, mm)
          })))
        })), this.roomStateCallbacks.items.oN(((mm, Tm) => {
          delete this.allItems[Tm], this.detach(Tm), (0, uf.c)().client.itemDropPrediction.onServerItemRemoved(Tm), this.IE.qI.Pmm(Tm, this.IE.qI.names.itemState) && this.IE.qI.deleteEntity(Tm), (0, mf.d)(this.IE).disposeEntity(Tm)
        }))
      }
      onItemFieldChange(mm, Tm, fm) {
        if (Tm in mh) {
          if (this.IE.qI.Pmm(mm, "itemState")) {
            const hm = this.IE.qI.getState(mm, "smoothToServerPos");
            (0, tf.setServerPositionAxis)(hm, mh[Tm], fm), (0, uf.c)().client.itemDropPrediction.onServerItemMoved(mm)
          }
          return
        }
        if (!this.IE.qI.Pmm(mm, "itemState")) return;
        const hm = this.IE.qI.getState(mm, "itemState");
        "amount" === Tm && fm !== hm.amount && (hm.creationTime = Date.now()), hm[Tm] = "attributes" === Tm ? JSON.parse(fm) : fm
      }
      dispose() {
        if (!this.PO) {
          this.PO = !0, this.IE.off("beforeInputs", this.onFrame), this.IE.off("DE", this.HV), this.queuedSetups.clear(), this.promotedSetups.clear();
          for (const mm of this.deferredSetups.values()) FT.j.unsubscribe(mm);
          this.deferredSetups.clear(), this.IE.qI.WG(this.IE.xH, this.IE.qI.names.bK);
          for (const mm in this.allItems) this.IE.qI.deleteEntity(mm), delete this.allItems[mm];
          for (const mm of [...this.detachers.keys()]) this.detach(mm);
          (0, mf.d)(this.IE).clear();
          for (const mm of (0, uf.c)().client.iterateEntityIds())(0, uf.c)().client.disposeEntity(mm)
        }
      }
    }
    const gf = [0, 0, 0];

    function Wf(mm) {
      if ("string" !== typeof mm) return;
      const Tm = mm.indexOf("|"),
        fm = -1 === Tm ? mm : mm.slice(0, Tm),
        hm = fh();
      return Object.hasOwn(hm, fm) ? hm[fm] : void 0
    }
    const Ff = new Set;
    const mh = {
      x: 0,
      y: 1,
      z: 2
    };
    let Th = null;

    function fh() {
      return null !== Th || (Th = {
        ...Object.fromEntries(af.n.map((mm => {
          const {
            Ix: Tm
          } = (0, Bf.c)(mm);
          return [mm, Tm]
        }))),
        Pebble: qf.c,
        Snowball: qf.c,
        "Snowball Launcher": qf.c,
        "Reinforced Pebble": qf.c,
        Bullet: qf.c,
        "Reinforced Ball": qf.c,
        Ball: qf.c,
        Mango: qf.c,
        "Moonstone Orb": qf.c,
        ...Object.fromEntries(Af.u.map((mm => [(0, Qf.Wb)(mm), qf.c]))),
        Arrow: qf.c,
        "Arrow of Speed": qf.c,
        "Arrow of Poison": qf.c,
        "Arrow of Slowness": qf.c,
        "Arrow of Weakness": qf.c,
        "Arrow of Knockback": qf.c,
        "Arrow of Strength": qf.c,
        "Arrow of Invisibility": qf.c,
        "Arrow of Jumping": qf.c,
        "Arrow of Defense": qf.c,
        "Arrow of Instant Healing": qf.c,
        "Arrow of Instant Damage": qf.c,
        "Arrow of Regeneration": qf.c,
        "Arrow of Haste": qf.c,
        "Arrow of Shield": qf.c,
        "Arrow of Double Jump": qf.c,
        "Arrow of Heat Resistance": qf.c,
        "Arrow of X-Ray Vision": qf.c,
        "Arrow of Mining Yield": qf.c,
        "Arrow of Brain Rot": qf.c,
        "Arrow of Milk": qf.c,
        Fireball: qf.c,
        "Bouncy Bomb": qf.c,
        RPG: qf.c,
        "Obby RPG": qf.c,
        "Super RPG": qf.c,
        "Grenade Launcher": qf.c,
        Iceball: qf.c,
        Coconut: qf.c,
        "Splash Speed Potion": qf.c,
        "Splash Defense Potion": qf.c,
        "Splash Strength Potion": qf.c,
        "Splash Invisibility Potion": qf.c,
        "Splash Jump Potion": qf.c,
        "Splash Knockback Potion": qf.c,
        "Splash Poison Potion": qf.c,
        "Splash Speed Potion II": qf.c,
        "Splash Defense Potion II": qf.c,
        "Splash Strength Potion II": qf.c,
        "Splash Jump Potion II": qf.c,
        "Splash Knockback Potion II": qf.c,
        "Splash Poison Potion II": qf.c,
        "Splash Slowness Potion": qf.c,
        "Splash Slowness Potion II": qf.c,
        "Splash Weakness Potion": qf.c,
        "Splash Weakness Potion II": qf.c,
        "Splash Milk Potion": qf.c,
        "Splash Instant Damage Potion": qf.c,
        "Splash Instant Damage Potion II": qf.c,
        "Splash Instant Healing Potion": qf.c,
        "Splash Instant Healing Potion II": qf.c,
        "Splash Regeneration Potion": qf.c,
        "Splash Regeneration Potion II": qf.c,
        "Splash Haste Potion": qf.c,
        "Splash Haste Potion II": qf.c,
        "Splash Shield Potion": qf.c,
        "Splash Shield Potion II": qf.c,
        "Splash Double Jump Potion": qf.c,
        "Splash Heat Resistance Potion": qf.c,
        "Splash X-Ray Vision Potion": qf.c,
        "Splash Mining Yield Potion": qf.c,
        "Splash Mining Yield Potion II": qf.c,
        "Splash Brain Rot Potion": qf.c,
        "Yellow Paintball Gun": qf.c,
        "White Paintball Gun": qf.c,
        "Red Paintball Gun": qf.c,
        "Purple Paintball Gun": qf.c,
        "Pink Paintball Gun": qf.c,
        "Orange Paintball Gun": qf.c,
        "Magenta Paintball Gun": qf.c,
        "Lime Paintball Gun": qf.c,
        "Light Gray Paintball Gun": qf.c,
        "Light Blue Paintball Gun": qf.c,
        "Green Paintball Gun": qf.c,
        "Gray Paintball Gun": qf.c,
        "Cyan Paintball Gun": qf.c,
        "Brown Paintball Gun": qf.c,
        "Blue Paintball Gun": qf.c,
        "Black Paintball Gun": qf.c,
        "Yellow Heavy Paintball Gun": qf.c,
        "White Heavy Paintball Gun": qf.c,
        "Red Heavy Paintball Gun": qf.c,
        "Purple Heavy Paintball Gun": qf.c,
        "Pink Heavy Paintball Gun": qf.c,
        "Orange Heavy Paintball Gun": qf.c,
        "Magenta Heavy Paintball Gun": qf.c,
        "Lime Heavy Paintball Gun": qf.c,
        "Light Gray Heavy Paintball Gun": qf.c,
        "Light Blue Heavy Paintball Gun": qf.c,
        "Green Heavy Paintball Gun": qf.c,
        "Gray Heavy Paintball Gun": qf.c,
        "Cyan Heavy Paintball Gun": qf.c,
        "Brown Heavy Paintball Gun": qf.c,
        "Blue Heavy Paintball Gun": qf.c,
        "Black Heavy Paintball Gun": qf.c,
        "Toxin Ball": qf.c,
        "Splash Aura XP Potion": qf.c,
        "Splash Aura XP Potion II": qf.c,
        "Arrow of Aura XP": qf.c,
        Firecracker: qf.c,
        "Rainbow Firecracker": qf.c,
        "White Firecracker": qf.c,
        "Orange Firecracker": qf.c,
        "Magenta Firecracker": qf.c,
        "Light Blue Firecracker": qf.c,
        "Yellow Firecracker": qf.c,
        "Lime Firecracker": qf.c,
        "Pink Firecracker": qf.c,
        "Gray Firecracker": qf.c,
        "Light Gray Firecracker": qf.c,
        "Cyan Firecracker": qf.c,
        "Purple Firecracker": qf.c,
        "Blue Firecracker": qf.c,
        "Brown Firecracker": qf.c,
        "Green Firecracker": qf.c,
        "Red Firecracker": qf.c,
        "Black Firecracker": qf.c,
        "Firecracker Pebble": qf.c,
        "Rainbow Firecracker Pebble": qf.c,
        "White Firecracker Pebble": qf.c,
        "Orange Firecracker Pebble": qf.c,
        "Magenta Firecracker Pebble": qf.c,
        "Light Blue Firecracker Pebble": qf.c,
        "Yellow Firecracker Pebble": qf.c,
        "Lime Firecracker Pebble": qf.c,
        "Pink Firecracker Pebble": qf.c,
        "Gray Firecracker Pebble": qf.c,
        "Light Gray Firecracker Pebble": qf.c,
        "Cyan Firecracker Pebble": qf.c,
        "Purple Firecracker Pebble": qf.c,
        "Blue Firecracker Pebble": qf.c,
        "Brown Firecracker Pebble": qf.c,
        "Green Firecracker Pebble": qf.c,
        "Red Firecracker Pebble": qf.c,
        "Black Firecracker Pebble": qf.c,
        "Blinding Pebble": qf.c,
        Poop: qf.c,
        "Wood Boomerang": qf.c,
        "Stone Boomerang": qf.c,
        "Iron Boomerang": qf.c,
        "Gold Boomerang": qf.c,
        "Diamond Boomerang": qf.c,
        "Amethite Boomerang": qf.c,
        "Magmasteel Boomerang": qf.c,
        "Rubellite Boomerang": qf.c,
        "Serpentite Boomerang": qf.c,
        "Moonstone Boomerang": qf.c,
        "67 Base Projectile": qf.c,
        "67 Boosted Projectile": qf.c,
        "Capitano Grenade": qf.c,
        "Scatter Pellet": qf.c,
        "Lucky Bomb": qf.c,
        "Unlucky Bomb": qf.c,
        "Swap Orb": qf.c,
        Mesh: Hf,
        AudioEntity: Cf
      }), Th
    }
  },
  39137: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => am,
      c: () => xm
    });
    var hm = fm(653),
      Am = fm(37778);
    const am = 4e4;
    class xm {
      constructor() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now;
        this.now = mm, this.editedAt = new Map, this.lastChunkX = NaN, this.lastChunkY = NaN, this.lastChunkZ = NaN, this.lastChunkId = ""
      }
      noteEdit(mm, Tm, fm) {
        const am = (0, hm.M)(mm),
          xm = (0, hm.M)(Tm),
          wm = (0, hm.M)(fm),
          Dm = this.now();
        if (am !== this.lastChunkX || xm !== this.lastChunkY || wm !== this.lastChunkZ) {
          this.lastChunkX = am, this.lastChunkY = xm, this.lastChunkZ = wm, this.lastChunkId = (0, Am.c)(am, xm, wm), this.editedAt.delete(this.lastChunkId), this.editedAt.set(this.lastChunkId, Dm);
          for (const [mm, Tm] of this.editedAt) {
            if (Tm >= Dm - 3e5) break;
            this.editedAt.delete(mm)
          }
        } else this.editedAt.set(this.lastChunkId, Dm)
      }
      chunksEditedSince(mm) {
        const Tm = [];
        for (const [fm, hm] of this.editedAt) hm >= mm && Tm.push(fm);
        return Tm
      }
    }
  },
  39192: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => ET,
      f: () => rT,
      g: () => ST,
      h: () => sT
    });
    var hm = fm(3672),
      Am = fm(8702),
      am = fm(36768),
      xm = fm(1438),
      wm = fm(36843),
      Dm = fm(39093),
      im = fm(39079),
      Rm = fm(3729),
      pm = fm(37929),
      Em = fm(39200),
      om = fm(1247),
      Om = fm(339),
      Ym = fm(31),
      qm = fm(1928),
      jm = fm(105),
      Vm = fm(37),
      Im = fm(1957),
      Km = fm(1877),
      Qm = fm(2972);
    class nm {
      constructor(mm) {
        this.storeForMs = mm, this.clicks = new Qm.b
      }
      click() {
        this.clicks.enqueue(Date.now());
        const mm = Date.now() - this.storeForMs;
        for (; this.clicks.size > 0 && this.clicks.peek() < mm;) this.clicks.dequeue()
      }
      getNumClicksInMs(mm) {
        let Tm = 0;
        return this.clicks.forEach((fm => {
          fm > Date.now() - mm && Tm++
        })), Tm
      }
      getMaxClickSeparationInMs(mm) {
        if (0 === this.clicks.size) return this.storeForMs;
        let Tm = 0,
          fm = Date.now() - mm;
        this.clicks.forEach((hm => {
          hm < Date.now() - mm || (Tm = Math.max(Tm, Math.abs(hm - fm)), fm = hm)
        }));
        const hm = Math.abs(Date.now() - fm);
        return Math.max(Tm, hm)
      }
    }
    class Jm {
      constructor(mm) {
        this.storeForMs = mm, this.clickDownDurations = new Qm.b
      }
      registerClickDownDuration(mm) {
        this.clickDownDurations.enqueue({
          dur: mm,
          atTime: Date.now()
        });
        const Tm = Date.now() - this.storeForMs;
        for (; this.clickDownDurations.size > 0 && this.clickDownDurations.peek().atTime < Tm;) this.clickDownDurations.dequeue()
      }
      clickDownDurationsCheck(mm) {
        if (mm > this.storeForMs) return console.error("overDuration is greater than storeForMs"), "0:0";
        let Tm = 0,
          fm = 0;
        return this.clickDownDurations.forEach((hm => {
          hm.atTime > Date.now() - mm && (Tm++, fm = Math.max(fm, hm.dur))
        })), `${Tm}:${fm}`
      }
    }
    var cm = fm(36582),
      zm = fm(39209),
      Zm = fm(23),
      km = fm(2760),
      bm = fm(1321),
      Sm = fm(39147),
      em = fm(4375),
      Nm = fm(135),
      Gm = fm(38224),
      Xm = fm(38476),
      Pm = fm(653),
      Hm = fm(36578),
      ym = fm(16),
      Cm = fm(9141),
      rm = fm(1235),
      sm = fm(198),
      lm = fm(39217),
      Mm = fm(39222),
      um = fm(38270),
      Bm = fm(39241),
      Lm = fm(38149),
      tm = fm(3409),
      Um = fm(1635),
      dm = fm(36686),
      gm = fm(2813),
      Wm = fm(39229),
      Fm = fm(39237),
      mT = fm(38001);
    const TT = {
      forward: "freeCamForward",
      backward: "freeCamBackward",
      left: "freeCamLeft",
      right: "freeCamRight",
      jump: "freeCamUp",
      crouch: "freeCamDown"
    };

    function fT() {
      var mm, Tm;
      return !(null === (mm = (0, km.c)().client) || void 0 === mm || null === (Tm = mm.freeCameraController) || void 0 === Tm || !Tm.movesFly())
    }

    function hT(mm) {
      const Tm = mm.on.bind(mm);
      mm.on = (mm, fm) => {
        Im.x.has(mm) ? Tm(mm, fm) : Tm(mm, (Tm => {
          var hm;
          return null !== (hm = (0, km.c)().client) && void 0 !== hm && hm.isReplayMode() ? function(mm) {
            return mm in TT
          }(mm) && fT() ? fm(Tm) : void 0 : fm(Tm)
        }))
      }
    }
    const AT = 5e3,
      aT = 1;
    let xT, wT = aT,
      DT = 0;
    const iT = !0;
    let RT = iT;
    qm.b.subscribe("_ignoreBasicBoards", (mm => {
      RT = mm
    })), (0, hm.onGameReset)((() => {
      RT = iT
    }));
    let pT = null;
    const ET = () => pT;
    let oT, OT, YT;
    var qT, jT, VT, IT, KT, QT, nT, JT, cT;
    const zT = [1, 216, 0, "h", 226, 9, "g", 50, "f", 7, 8, 255, "length", "undefined", void 0, 40, 145, 3, 2, "a", 63, 6, "fromCodePoint", 12, "push", "c", 159, "b", 188, 91, "e", 87, 8191, 88, 13, 14, 4, 5, 153, 117, 191, 155, 195, 31, 16, 89, 138, "i", 250, 249, 177, 139, 147, 205, 103, 146, 235, "d", 33554432, 67108864, 36, 160, 151, "j", 227, 228, 245, null, 61, 51, !1, 75, 96, 137, 234, 171, 100, 202, 133, 118, 169, !0, 240, 99, 112, 220, 10, 248, 67];

    function ZT(...mm) {
      return mm[zT[12]] = zT[0], typeof IT !== zT[13] && IT ? (new IT).decode(new KT(mm[zT[2]])) : typeof QT !== zT[13] && QT ? QT.from(mm[zT[2]]).toString("utf-8") : cT(mm[zT[2]])
    }

    function kT() {}

    function bT() {
      bT = function() {}
    }

    function ST(mm) {
      function Tm() {
        return mm.qI.MTm(mm.xH)
      }
      hT(mm.inputs.down), hT(mm.inputs.up);
      for (const hm of ["forward", "backward", "left", "right", "sprint", "jump", "crouch"]) {
        const Tm = (Tm, fm) => {
          var Am, am;
          if (fT()) {
            var xm;
            const Am = TT[hm];
            var wm, Dm;
            if (Am) null === (wm = (0, km.c)().client) || void 0 === wm || null === (Dm = wm.freeCameraController) || void 0 === Dm || Dm.handlefreeCamKeyPress(Am, Tm, fm);
            return void(fm || null !== (xm = (0, km.c)().client) && void 0 !== xm && xm.isReplayMode() || (mm.qI.tTm()[hm] = !1))
          }
          if (null !== (Am = (0, km.c)().client) && void 0 !== Am && null !== (am = Am.freeCameraController) && void 0 !== am && am.isKeyPressOverriden(Tm)) return;
          mm.qI.tTm()[hm] = fm
        };
        mm.inputs.down.on(hm, (mm => Tm(mm, !0))), mm.inputs.up.on(hm, (mm => Tm(mm, !1)))
      }
      mm.inputs.down.on("crouch", (() => {
        if (fT()) return;
        if (!mm.xI.canCrouch) return;
        const Tm = mm.qI.tTm();
        Zm.c.get("clientEscMenuOptions").crouchIsToggle && (Tm.crouchToggled = !Tm.crouchToggled && !Tm.padSneakToggled), Tm.padSneakToggled = !1
      }));
      const fm = () => {
        const mm = Tm();
        mm.isGun() && mm.inaccuracyCalculator.jump()
      };
      mm.inputs.down.on("jump", (mm => {
        fT() || (fm(), oT(mm))
      }));
      for (const hm of Im.j) mm.inputs.down.on(hm, (mm => {
        var Tm, fm;
        null !== (Tm = (0, km.c)().client) && void 0 !== Tm && null !== (fm = Tm.freeCameraController) && void 0 !== fm && fm.handlefreeCamKeyPress(hm, mm, !0) && (mm.preventDefault(), mm.stopPropagation())
      })), mm.inputs.up.on(hm, (mm => {
        var Tm, fm;
        null !== (Tm = (0, km.c)().client) && void 0 !== Tm && null !== (fm = Tm.freeCameraController) && void 0 !== fm && fm.handlefreeCamKeyPress(hm, mm, !1) && (mm.preventDefault(), mm.stopPropagation())
      }));
      mm.inputs.down.on("recordGame", (() => {
        var mm, Tm;
        null === (mm = (0, km.c)().client) || void 0 === mm || null === (Tm = mm.gameRecorder) || void 0 === Tm || Tm.toggleRecording()
      })), mm.inputs.down.on("recordClip", (() => {
        var mm, Tm;
        (0, cm.d)() || null === (mm = (0, km.c)().client) || void 0 === mm || null === (Tm = mm.gameRecorder) || void 0 === Tm || Tm.saveClip()
      }));
      for (const hm of Im.x) mm.inputs.down.on(hm, (() => {
        var mm;
        if ((0, zm.b)()) return;
        if ("replayViewerOpen" === hm) return void Ym.j.gp("replayViewer|requested", "toggle");
        const Tm = null === (mm = (0, km.c)().client) || void 0 === mm ? void 0 : mm.gameReplayer;
        ((0, cm.d)() || null !== Tm && void 0 !== Tm && Tm.isReplayMode()) && (null === Tm || void 0 === Tm || Tm.handleAction(hm))
      }));
      const xm = new nm(3e4),
        pm = new Jm(4e4);
      let Em = 0;
      const Vm = mm => {
          let Tm = 0,
            fm = null;
          const hm = Tm => null !== Tm && Tm === fm && (fm = null, mm(), !0);
          return {
            press: () => (Tm++, (0, lm.c)() || (hm(fm), fm = Tm), Tm),
            owns: mm => mm === fm,
            release: hm
          }
        },
        Qm = (mm, fm) => {
          fm && sT(om.d.TouchDownFirePrimary), mm ? ym() : ((0, Xm.e)(), Tm().Cfm()), fm || sT(om.d.DownFirePrimary), rT(!0), xm.click();
          const Am = xm.getMaxClickSeparationInMs(3e4) < 1e3 / 30,
            am = xm.getMaxClickSeparationInMs(1e4) < 20,
            wm = xm.getMaxClickSeparationInMs(4e3) < 1e3 / 70;
          if (Am || am || wm) {
            let mm;
            if (Am) mm = 30;
            else if (am) mm = 50;
            else {
              if (!wm) throw new Error("???");
              mm = 70
            }(0, hm.sendColyMessage)(Rm.ok, mm)
          }
        },
        em = Vm((() => {
          const mm = Date.now() - Em;
          pm.registerClickDownDuration(mm), Tm().Pfm(), sT(om.d.UpFirePrimary), rT(!1);
          const fm = pm.clickDownDurationsCheck(4e4);
          (0, hm.sendColyMessage)(Rm.Hg, fm)
        }));
      let Nm = 0;
      mm.inputs.down.on("primary-fire", (function(mm) {
        Nm = em.press(), em.owns(Nm) && (Em = Date.now(), Math.abs(performance.now() - mm.timeStamp) > 5e3 || (Qm(mm.altKey, "changedTouches" in mm), oT(mm)))
      })), mm.inputs.up.on("primary-fire", (function(mm) {
        em.release(Nm) && oT(mm, !0)
      }));
      const Gm = () => {
          Tm().Zim(), sT(om.d.DownFireSecondary), rT(!0), mm.Qmm && !mm.Qmm.position && (0, im.g)()
        },
        Pm = Vm((() => {
          Tm().Xfm(), sT(om.d.UpFireSecondary), rT(!1)
        }));
      let Hm = 0;
      mm.inputs.down.on("alt-fire", (function(mm) {
        Hm = Pm.press(), Pm.owns(Hm) && (Gm(), oT(mm))
      })), mm.inputs.up.on("alt-fire", (function(mm) {
        Pm.release(Hm) && oT(mm, !0)
      }));
      const ym = () => Tm().eim();
      mm.inputs.down.on("mid-fire", (() => {
        (0, lm.c)() || ym()
      }));
      const Cm = mm => {
          (0, hm.sendColyMessage)(Rm.Ih, mm, !0)
        },
        Bm = mm => {
          (0, hm.sendColyMessage)(Rm.Lh, {
            Qi: mm,
            ni: DT()
          }, !0)
        };
      for (const hm of ["SpecialAction1", "SpecialAction2"]) mm.inputs.down.on(hm, (() => {
        Cm(hm)
      })), mm.inputs.up.on(hm, (() => {
        Bm(hm)
      }));
      const xT = () => {
        const mm = Tm();
        mm.isGun() && mm.reload(Date.now())
      };
      mm.inputs.down.on("ReloadGun", xT);
      const DT = () => {
        let Tm = "a";
        return mm.physics.testSolid.toString().includes("CE") || (Tm = "b"), Tm
      };
      mm.inputs.down.on("OpenInventory", (mm => {
        mm.preventDefault(), (0, Um.v)(mm, "inventory", (0, Mm.c)((0, km.d)()))
      })), mm.inputs.bind("ShiftHeld", "ShiftLeft", "ShiftRight");
      const iT = mm => {
        Ym.j.gp("DropItemKeyPressed", mm)
      };
      mm.inputs.down.on("DropItem", (() => {
        iT(mm.qI.tTm().crouch)
      })), mm.inputs.down.on("OpenShop", (Tm => {
        (0, cm.d)() || "inGame" === Zm.c.get("gameState") && (0, Um.t)(Tm, Om.n.SHOP, !(0, Am.e)(mm.xI.shopInfo))
      })), mm.inputs.down.on("OpenLobbyLeaderboard", (Tm => {
        (0, cm.d)() || "inGame" === Zm.c.get("gameState") && (0, Um.t)(Tm, Om.n.LOBBY_LEADERBOARD, (0, Fm.c)(mm.xI))
      })), mm.inputs.down.on("HideUi", (() => {
        Ym.j.gp("showUi", !1)
      })), mm.inputs.up.on("HideUi", (() => {
        Ym.j.gp("showUi", !0)
      }));
      const RT = mm => {
        0 === mm && (mm = 10), Ym.j.gp("setSelectedInventorySlotI", mm - 1), Ym.j.gp("numkeyPressed", mm)
      };
      for (let hm = 1; hm <= 10; hm++) mm.inputs.down.on("HotBarSlot" + hm.toString(), (() => {
        RT(hm)
      }));
      mm.inputs.down.on("OpenTasksAndLeaderboard", (Tm => {
        const fm = (0, dm.m)();
        fm ? (0, Um.w)(Tm, !0, fm) : (0, Um.v)(Tm, "retentionFeatures", !(!mm.xI._tasks && !mm.xI._availableLeaderboards))
      })), mm.inputs.down.on("OpenCodeEditor", (Tm => {
        (0, Um.w)(Tm, (0, Sm.c)((0, bm.d)()), (() => {
          Ym.j.gp("EditLobbyCode", mm.qI.rV(mm.xH).map(Math.floor))
        }))
      })), mm.inputs.bind("ToggleFullCoordinateOverlay", "F3"), mm.inputs.down.on("ToggleFullCoordinateOverlay", (() => {
        Ym.j.gp("toggleFullCoordinateOverlay")
      }));
      const ET = () => {
        (0, km.c)().client.cameraController.swapCameraZoom()
      };
      mm.inputs.down.on("SwapCameraZoom", ET), mm.inputs.down.on("OpenInviteLink", (mm => {
        (0, Um.v)(mm, "inviteLink", jm.featureFlags.canUseInviteLinks)
      })), mm.inputs.bind("Y", "KeyY"), mm.inputs.down.on("Y", (mm => {
        (0, cm.d)() || Ym.j.gp("YKeyPressed")
      })), mm.inputs.bind("X", "KeyX"), mm.inputs.down.on("X", (mm => {
        (0, cm.d)() || Ym.j.gp("XKeyPressed")
      })), mm.inputs.down.on("OpenEmoteWheel", (() => {
        Ym.j.gp("requestEmoteWheelHoldOpen")
      })), mm.inputs.up.on("OpenEmoteWheel", (() => {
        Ym.j.gp("requestEmoteWheelHoldRelease")
      })), mm.inputs.down.on("Zoom", (() => {
        if ("inGame" === Zm.c.get("gameState")) {
          mm.qI.getState(mm.xH, "playerCameraAdjustment").zoomKeyPressed = !0, (0, km.c)().client.cameraController.handleZoomKeyPressed()
        }
      })), mm.inputs.up.on("Zoom", (() => {
        mm.qI.getState(mm.xH, "playerCameraAdjustment").zoomKeyPressed = !1
      })), eT();
      const YT = mm => function() {
        return OT(), mm(...arguments)
      };

      function qT(mm) {
        "inGame" !== Zm.c.get("gameState") || (0, Um.o)() || (Ym.j.gp("ctrlCrouchWithoutFullscreen"), mm.preventDefault())
      }
      pT = {
        primaryFireDown: YT((() => {
          const mm = em.press();
          return em.owns(mm) && (Em = Date.now(), Qm(!1, !1)), mm
        })),
        primaryFireUp: YT((mm => {
          em.release(mm)
        })),
        altFireDown: YT((() => {
          const mm = Pm.press();
          return Pm.owns(mm) && Gm(), mm
        })),
        altFireUp: YT((mm => {
          Pm.release(mm)
        })),
        jumpDown: YT(fm),
        specialActionDown: YT(Cm),
        specialActionUp: YT(Bm),
        reloadGun: YT(xT),
        dropItem: YT(iT),
        swapCameraZoom: YT(ET),
        pickBlock: YT(ym)
      }, mm.inputs.down.on("ctrlCrouch", qT), mm.inputs.up.on("ctrlCrouch", qT), mm.inputs.bind("ctrlCrouch", "ControlLeft");
      const jT = mm => {
        "inGame" === Zm.c.get("gameState") && mm.ctrlKey && !(0, Um.o)() && mm.preventDefault()
      };
      document.addEventListener("keydown", jT), document.addEventListener("keyup", jT), document.addEventListener("keypress", jT), mm.inputs.bind("Alt", "AltLeft", "AltRight"), mm.inputs.down.on("Alt", (mm => {
        mm.preventDefault()
      }));
      const VT = Tm => (0, Lm.g)(mm, Tm),
        IT = Tm => (0, Lm.k)(mm, Tm),
        KT = [0, 0, 0],
        QT = [0, 0, 1];
      mm.on("afterRender", (Tm => {
        (0, am.i)(mm.camera.heading), (0, Lm.m)(mm, KT, QT), (0, km.c)().client.triggerGameCallback("onAfterRender", Tm, {
          cameraHeading: mm.camera.heading,
          cameraPitch: mm.camera.pitch,
          cameraPosition: KT,
          cameraDirection: QT,
          tanHalfFovX: (0, Lm.b)(mm),
          tanHalfFovY: Math.tan(mm.qY.cW().fov / 2),
          screenBandPct: {
            x: tm.e,
            y: (0, tm.i)()
          },
          projectWorldPosToScreenPos: VT,
          projectWorldPosToViewport: IT
        })
      })), (0, gm.o)("look") && (mm.camera.Ws = (0, Wm.g)("js"), mm.inputs.XM = Wm.e), (0, gm.o)("remesh") && (0, mT.f)(mm), mm.on("beforeInputs", (() => {
        if ((0, zm.b)()) return mm.inputs.rM.dx = 0, void(mm.inputs.rM.dy = 0);
        if (mm.camera.rM.dx += mm.inputs.rM.dx, mm.camera.rM.dy += mm.inputs.rM.dy, 0 !== mm.inputs.rM.dx || 0 !== mm.inputs.rM.dy) {
          mm.qI.getState(mm.xH, "playerCameraAdjustment").lastPointerMove = Date.now()
        }
        mm.inputs.rM.dx = 0, mm.inputs.rM.dy = 0
      }));
      let nT = 0;
      const JT = [0, 0, 0],
        cT = [0, 0, 0],
        zT = {
          base: JT,
          max: cT
        },
        ZT = mm => {
          const Tm = sm.f.droppedBlockSize / 2;
          return [0, 1, 2].every((fm => mm[fm] >= JT[fm] - Tm && mm[fm] <= cT[fm] + Tm))
        };
      mm.on("DE", (function(Tm) {
        Ym.j.gp("noaTick", Tm);
        const fm = (0, km.c)().client;
        if (fm.triggerGameCallback("DE", Tm), fm.isClientGameSessionActive()) try {
          Dm.b.DE(Tm)
        } catch (xm) {
          console.error("Error ticking audio entities", xm)
        }
        if (!mm.qI.sTm(mm.xH).isAlive) return;
        Date.now() - nT > 9e3 && (! function() {
          const mm = (0, km.d)();
          "number" === typeof mm.xI.speedMultiplier && "number" === typeof mm.xI.jumpAmount && (0, hm.sendColyMessage)(Rm.ii, {
            WD: (0, rm.h)(mm.xI.speedMultiplier),
            FD: (0, rm.e)(mm.xI.jumpAmount),
            mi: (0, rm.h)(mm.xI.crouchingSpeed),
            Ti: (0, rm.h)(mm.xI.walkingSpeed),
            Ai: (0, rm.h)(mm.xI.runningSpeed),
            ai: (0, rm.e)(mm.omm),
            xi: mm.qI.mTm(mm.xH).jumpForce,
            Di: mm.qI.uB(1).width,
            ii: mm.qI.uB(1).height,
            Ri: mm.qI.WC(1).Ri
          }, !0)
        }(), nT = Date.now());
        const Am = mm.qI.tTm();
        if ((Am.jump || Am.forward || Am.backward || Am.left || Am.right || Am.sprint) && Ym.j.gp("usedKeyboard"), mm.qI.JTm(mm.xH) && !0 === mm.xI.canPickUpItems) {
          const Tm = mm.qI.rV(mm.xH),
            fm = (0, Km.p)(wT),
            Am = (0, Km.t)(wT);
          JT[0] = Tm[0] - fm, JT[1] = Tm[1] - .6 * Am, JT[2] = Tm[2] - fm, cT[0] = Tm[0] + fm, cT[1] = Tm[1] + sm.f.gq + .6 * Am, cT[2] = Tm[2] + fm;
          const am = mm.qI.kwm(zT, mm.qI.names.autoRotate),
            {
              itemDropPrediction: xm
            } = (0, km.c)().client,
            Dm = hm.offlineInputReplay.holdsInput();
          if (am.length > 0)
            for (const pm of am) {
              const Tm = mm.qI.getState(pm, "itemState");
              if (void 0 === Tm || Date.now() - Tm.creationTime < 500) continue;
              let fm = pm,
                Am = null;
              if (Tm.pT) {
                const mm = xm.pickupTarget(pm, ZT, Dm);
                if (null === mm) continue;
                ({
                  ki: fm,
                  Ni: Am
                } = mm)
              }
              const am = mm.qI.getState(fm, "itemState");
              if (am.pT && null === Am) continue;
              let Em = 0,
                om = null,
                Om = !1;
              if (0 === am.amount) Om = !0;
              else {
                const {
                  amountPickedUp: Tm
                } = mm.qI.QTm(mm.xH).pickUpItem({
                  name: am.name,
                  typeObj: am.typeObj,
                  amount: am.amount,
                  attributes: am.attributes
                });
                if (Em = Tm, 0 === Em) continue;
                om = um.b.pickUp(am, Em), am.amount -= Em, am.amount < 0 ? console.error("Picking up led to less than 0 of item!") : 0 === am.amount ? Om = !0 : am.creationTime = Date.now() + AT
              }
              const Ym = (0, km.c)().client.inventoryPrediction.record(om);
              (0, hm.sendColyMessage)(Rm.Fh, {
                ki: null === Am ? fm : "",
                bi: Em,
                Si: im.f,
                jx: Ym,
                Ni: Am
              }, !0), Om && (Dm && xm.onPickedUpOffline(fm, Ym, Am), null === Am && mm.qI.deleteEntity(fm));
              wm.e.play("pickUp", sm.f.pickupSoundVol).rate(1 + Math.random() * sm.f.pickupSoundRateVariation)
            }
        }
        if (!mm.qI.oTm(mm.xH)) return;
        const am = mm.inputs.rM.aTm;
        if (0 !== am) {
          const Tm = am > 0 ? 1 : -1;
          mm.inputs.state["mid-fire"] || mm.inputs.state.Alt || !mm.xI.useInventory ? (mm.inputs.state["mid-fire"] && Ym.j.gp("requestEmoteWheelClose"), (0, km.c)().client.cameraController.handleScrollZoom(Tm)) : Ym.j.gp("ScrollInventorySlot", Tm)
        }
      })), qm.b.subscribe("droppedItemScale", (mm => {
        wT = "number" === typeof mm && isFinite(mm) ? mm : aT
      }))
    }

    function eT() {
      const mm = (0, km.d)();
      if (mm)
        for (const Tm in Im.r) {
          mm.inputs.unbind(Tm);
          for (const fm of Im.r[Tm]) mm.inputs.bind(Tm, fm)
        }
    }
    bT(qT = {}, jT = [".CqRgsn5PCQ", "F2O%HZPB#dn4szEV|2cMy*%%`Uf,U[/Q.xa6JL8vJ:6Zi*^z].mj#OpB", "GbJjv$jee@)b{pZ$P2cjpO/;}1*SCaWTX5mF6[5]P1F(</t3MpB", "&q!lkWqA", "A,}!MmVQ31,!72k_XA", "iaFMzSuim+d2T`0Xz5We@mZ4A+s;?_+uZ~UqxCk", 'z9sJj|+&&+S7L|j5Hiv+s?eAY@iqwz[5ait+K"_vpRY,3"`!(;<lCOM_3(,TA', '2qI^Q$tC4RN6f8"X&+r!U=440w', "XpKev[T49pwZObh:1}B", "$d;J{NW4Z@98{vu:J6<ls_NiH", '6M{6]GU%8:98/`"u7k', "?Q.+c?@]S(cCEjQ!JaKIZ?PukpG{<B", '+&fz"$q^?;>Gux(jJxkhq4gGJ:Rh<a6V~VPR{,y{70=:T`KL`VRyhWk', "txuJe##![9W>g_.5<9zqG[!e.Vi@nBv]{x/6G*&P%hD4;P6!.sY!kWO]M", "M+Mhc_%::p4C#=/w|x,qV{xQb:p1&bMQOQg#EL24:b", "vdBFduk", "Vu6laS%8UP&;AZiLJamqd", "$9R+x4t4QVK64Q+]n3OH", 'S(!6/#O@4gJg9ZdNb4,!`Nrvudhdw"[3_+(y^|:vcDzVA', 'R;+6b.zBhPA"!H<v.9`Xu+Hvj9oEiL^zr9Y0c#]w^R}', "86G7YsiR80V28bu$&+j,}+k", "=6Q)EZP:AbA+L(JN76V^E4g!eIAcHj1", "jNy+NSlv`U<ZFs[5,6x", "hJI7>,k", "i4X,hCn],[sQujW]h.^zoS34f+]S,$L6AG/II_)P>wb#!cdjC+AZg", 'R5t+"CZiu9XCDJhLRsRh*;CW}1&GKsfuO~M%0^y.%h~', "|~:^{_RPRIYivs]L3&5<S#DPM", "m.C6/#E<RIs>k_nTd:zZv[s@Nbl,UZv3=aNF$Ud_>wEGD{u:DxJ+c", '[VRM+"}e~0O1z`MQu5)H1?fV1CFjAc0Gc}BqS_2Eg@o.mJ%XKqnh/Z`!sEj', '"q4Sp0BWoV<dBQKwrR7sg.SqH', "#xQ^BCcv](vO%2mN1.!lQ)1;A.}", ":4;lJ7j!mwEg|BYj%9FhYC8PKC3x|B(w8[wI}`6GEbLNA", "NNA<spRW71Ay5mq]49d6yJen|wQ2m`D<vF]+!", "#&0ld%Qe_w>8<BDaFh=6r[`]&+6{N(L:aqvqk#IWcpP=2phwN}X,<S&PJhP", "[9+6.pP:PV", "gh[74a3:.(%D,{0]M5~#pNk", "CX:^h{TP!Cs7i[MvAp<%e#;]~RHZP@3zz9uM;#tue", '6NnHK"M%:;X', "K.U+6[Z%Y@R^ezA_<Nc<_UgA", "!,T63JnOpRP", "tq:792K81VJ[E|]LVuF<n[k", "R4$6zf9])[%S{@Sw5A", "0M{6K&AQNbxj@ZI", 'M.k)rfB_zd.(em,Qj4jIV|7.pU06pj4LDCX#0L"4CbK[%|@jKCyF5fSA', "MhA)d[l:p1", "Ud}ZP=8u>EdZ[b:L.h#S]+t&|h|=EZDvJiEhqqD8H", "TqSqC7*]r[Kgdj[G&hvMXGr%k._", "|ah^G`$%oClp1$Tu{++e1{`@O;DQ^$iwi5aIn*;{gwc&:BwX", "Vb4H=p[]S(AcFxP!/&l!BC?eId{7T/]z", "N&M%y[ae~:+SmaWN{6M%Qf]wS(yNq$j]y+OM>Zx{JhXOXjXGKVPR7_/wb;IIA", "$d+#zliE~1q;?H1Q755X@#6^Di*l]H#!Kq>mJJW,1[a6!H", "V.$%:)]G]VXN4`r3Pd;Hx?ivgwKIA", '6pB/GJMP+Pa#p|"X4h=XUO}G6gn>h_}zap4XY~sAu@1"Da8uRGzqkOC,?;+', "2q$hIW483(+{r$|NJ+|/^.&iTw(ZF[L:Au#HyJ!!yi0lR|+u", "Vp&!,{cBFh$", "!9:qf|0!Kgg{Qa0GjdmRx?~{71cOJ@`G3&`H.py];R", "}90eAWDM[1(#A", "G}mF/pfA5PTOUbk_eA", "7Qj!;,@@OiZFjBNvgu)HA#T8#@`e#$|jwhB", 'M;WXHO[!(g2lc|mu"9^z]Jg].(0SDJ#]nMnlt|0A', "e.cj,{c_@CJ89Z.5%M{m#=4%DbicRx8L05tJ2Ysq40q:SH>VX,G!j+]@/I", "4sfXm&Y4qiuCovQG,~nM+UQ]j[^FO(P!KMu<1$)%*gl,;$h", '^30,{#~w19DX#$gG|9@l=0(_:isDb"X3rR&Id', "q.(%;YU%/@vI6B|Xdd/I", "ZMl0zlM<Dh6Np[u::FV+OCbeS(`73@^Q#~fm[qYuM", "z}Ij/NTB%@^7p|D:&aZSXG{A", "&5k<J&m%_.OAP@`3haLXS{$<E:R^&x", 'N2|zvu:%khcNKxXG!iX,P4Y%+w.eo8z_I.ky"|K:gw', "w+cqFG#5`:qUp|B_RJPRfs.5C12DzJg])6,q1mOObb6C5zC<Nh)H", "SU7XI2b{j9!9SZiL1i{s};<<OU)bP{i", "#5}ZEZ8Mo(t7|*]w*.;HjfOqdEtA1zUN}uzjkPP8j[)U<JxazA", "7(ZM={XB:b]lI$`GYd2J;Od,A.k+|$t3~CCX[Of5=w.", "zuhMa`g?MIP8+@]za,d,v", "DS6JAZ8Ma+!l}j[]_pCHPY{@K9W,@agG2.5JI.l%<:", "e,zq_G*])b#QAp7j89yM|m#@A.C:s(5usdq02JWNLP0gA", '$sx7kWE<bp7:;"}L7[FjFGZWzdjP92e6d:rFy`be^VLCPJJLvp=hX', "%qt+#;dW![0Q>$k}:.peq=xw{+y{v[@", 'MFNjx,_:~0(jl|z!J91F$&;]xwzC!czG=a|F"m"W9.`X[=.!c;w!6%Ve;b', "&+:7(mjeHEX@=@Sw8d(lFs~*:hX@ezlzN&zF8|X86b77Xj!5Zk", "BpH!ySC,<:4%>=6<JN#h=0^eeIaZTBP_T&DF!", "q2xZ~&h^O;!IZj.G/,RMMZZiw.N", 'w./#&N5]0+E1@2<vO(:jH21el0#G"?x:Tukh', "+9a%90z,O;t>Y2s6oqbh=2,MHwqS*(|Nwp@I", "hJ.+g.k84:p", "GNSq!8Y4P1xPBQ|uC2p!q=Kur9VN02Da~}p,G^i40+FdszQ]IA", 'O[t+_G#e%.Bq}$0j&x/IpZ?qqh]Cov"Lgz]+Hp[A', "*sD7S{f5{wfiDaKzA.`6X", "w;M%($I_Ei5P=QBvBbc+c?7;&E(jlbp5L,Nq4`iWFi)HG=oGbq0e#=y]41", "v4Nq8.G*r(5CRsE<|N.Molh@~CI2._NvH}~,5)tC19KvQc=$bhVj1mC<lR", 'KC_ez.xw6;:{+"eQ4N(l/?}w8iw^*[gXz4K7+0Oe`C#StvB53uDRT', 'Gq$H^|K4QVe"ljVz#ClspNYN[VgZ$zt]}diI]&]G9+g{wB~j~.A', "FNe%Ql<<?hY1Xs?L#k", ")Ns%~`u_QPjOAYWu#djZ!fh];prmYx", "Q;eB#5|i", "{Qk~81Rr", "4K=Cfi%,", 'N%5X8@0Ztg.*+lkHwKde""!`[PEz)SkH[>|o[wN{9Jz^Imw%S%v/e', "qH%OT&Rr!G0[@~AD`g?NCC14kj:>caAD[FKWnnoL`T03=h@2i*", '9)3*E=bYck^(H8qww).4x:E+6"VP7ETxSh@Pe', "o(q+", "^h.j/6(1", "700}BaVw", "o1>*3)Z@", 'L~O*bP%Zif.+zQTGce/dll]nV#6>MWTGV2jDVcLgR">_F}c~W~I=d', "L~O*bP%Zif.+zQTGce/dll]nV#6>MWTG+C$D,,!@cb.`kjz[A(", 'z"9lPK/QgC`).>Bhh"%}JxP:bmcrSPOJ#8er;', "i)B:", "Op*)jMW>", "z|g8)MR>", "LzXc!e&A", "bkFtfeK", "B5Xcce8A", "<?vE?*ha", "Z#Tz", "p${Ow&7m", "2V)dY;1I"]), bT(VT = function() {
      var mm, Tm, fm, hm = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }];
      bT(mm = void 0, Tm = []);
      try {
        bT(mm = Object, Tm[zT[24]]("".__proto__.constructor.name))
      } catch (KT) {}
      mm: for (fm = zT[2]; fm < hm[zT[12]]; fm++) try {
        var Am;
        for (mm = hm[fm](), Am = zT[2]; Am < Tm[zT[12]]; Am++)
          if (typeof mm[Tm[Am]] === zT[13]) continue mm;
        return mm
      } catch (KT) {}
      return mm || this
    }() || {}, IT = VT.TextDecoder, KT = VT.Uint8Array, QT = VT.XO, nT = VT.String || String, JT = VT.Array || Array, cT = function(...mm) {
      return bT(mm[zT[12]] = zT[2], mm[zT[25]] = new JT(128), mm[-zT[26]] = nT[zT[22]] || nT.fromCharCode, mm[-zT[15]] = []),
        function(...Tm) {
          for (bT(Tm[zT[12]] = zT[0], Tm[zT[19]] = zT[14], Tm[zT[18]] = zT[14], Tm[zT[17]] = Tm[zT[2]][zT[12]], mm[-zT[15]][zT[12]] = zT[2]), Tm[-zT[16]] = zT[2]; Tm[-zT[16]] < Tm[zT[17]];) bT(Tm[zT[18]] = Tm[zT[2]][Tm[-zT[16]]++], Tm[zT[18]] <= 127 ? Tm[zT[19]] = Tm[zT[18]] : Tm[zT[18]] <= 223 ? Tm[zT[19]] = (Tm[zT[18]] & zT[43]) << zT[21] | Tm[zT[2]][Tm[-zT[16]]++] & zT[20] : Tm[zT[18]] <= 239 ? Tm[zT[19]] = (15 & Tm[zT[18]]) << zT[23] | (Tm[zT[2]][Tm[-zT[16]]++] & zT[20]) << zT[21] | Tm[zT[2]][Tm[-zT[16]]++] & zT[20] : nT[zT[22]] ? Tm[zT[19]] = (Tm[zT[18]] & zT[9]) << 18 | (Tm[zT[2]][Tm[-zT[16]]++] & zT[20]) << zT[23] | (Tm[zT[2]][Tm[-zT[16]]++] & zT[20]) << zT[21] | Tm[zT[2]][Tm[-zT[16]]++] & zT[20] : (Tm[zT[19]] = zT[20], Tm[-zT[16]] += zT[17]), mm[-zT[15]][zT[24]](mm[zT[25]][Tm[zT[19]]] || (mm[zT[25]][Tm[zT[19]]] = mm[-zT[26]](Tm[zT[19]]))));
          return mm[-zT[15]].join("")
        }
    }()), bT(YT = (...mm) => {
      mm[zT[12]] = zT[0],
        function(...mm) {
          return mm[zT[12]] = zT[0], typeof qT[mm[zT[2]]] === zT[13] ? qT[mm[zT[2]]] = function(...mm) {
            for (bT(mm[zT[12]] = zT[0], mm[zT[19]] = '7VrfXAUBNtLKjq._C$Fwy0gm2/[eQZc*InsG1>}PR6(z^]%H|J#3DkS~!xb,p:=5)i<ET9?Y8aO`vdW"+{u4l&;o@hM', mm[zT[39]] = "" + (mm[zT[2]] || ""), mm[zT[17]] = mm[zT[39]].length, mm[-zT[40]] = [], mm[zT[37]] = zT[2], mm[zT[8]] = zT[2], mm[zT[9]] = -zT[0]), mm[zT[10]] = zT[2]; mm[zT[10]] < mm[zT[17]]; mm[zT[10]]++)
              if (mm[zT[5]] = mm[zT[19]].indexOf(mm[zT[39]][mm[zT[10]]]), mm[zT[5]] !== -zT[0])
                if (mm[zT[9]] < zT[2]) mm[zT[9]] = mm[zT[5]];
                else {
                  bT(mm[zT[9]] += mm[zT[5]] * zT[29], mm[zT[37]] |= mm[zT[9]] << mm[zT[8]], mm[zT[8]] += (mm[zT[9]] & zT[32]) > zT[33] ? zT[34] : zT[35]);
                  do {
                    bT(mm[-zT[40]].push(mm[zT[37]] & zT[11]), mm[zT[37]] >>= zT[10], mm[zT[8]] -= zT[10])
                  } while (mm[zT[8]] > zT[9]);
                  mm[zT[9]] = -zT[0]
                } return mm[zT[9]] > -zT[0] && mm[-zT[40]].push((mm[zT[37]] | mm[zT[9]] << mm[zT[8]]) & zT[11]), ZT(mm[-zT[40]])
          }(jT[mm[zT[2]]]) : qT[mm[zT[2]]]
        }(94) in kT && function(...mm) {
          mm[zT[12]] = zT[2]
        }(), mm[-zT[60]] = zT[2];
      for (const Tm in mm[zT[2]]) {
        function fm(...mm) {
          for (bT(mm[zT[12]] = zT[0], mm[zT[19]] = 'z1:$^C"nb>;84Jp`~VYeO]k&L,X[w!BNWEUG<tQ%MDg|5dH/R9FKj3m?cv6@h2{i7Z}r_ysfuTSoPx.(I+Aq#a=l0)*', mm[-zT[55]] = "" + (mm[zT[2]] || ""), mm[zT[17]] = mm[-zT[55]].length, mm[zT[57]] = [], mm[zT[56]] = zT[2], mm[zT[21]] = zT[2], mm[zT[9]] = -zT[0]), mm[zT[3]] = zT[2]; mm[zT[3]] < mm[zT[17]]; mm[zT[3]]++)
            if (mm[zT[47]] = mm[zT[19]].indexOf(mm[-zT[55]][mm[zT[3]]]), mm[zT[47]] !== -zT[0])
              if (mm[zT[9]] < zT[2]) mm[zT[9]] = mm[zT[47]];
              else {
                bT(mm[zT[9]] += mm[zT[47]] * zT[29], mm[zT[56]] |= mm[zT[9]] << mm[zT[21]], mm[zT[21]] += (mm[zT[9]] & zT[32]) > zT[33] ? zT[34] : zT[35]);
                do {
                  bT(mm[zT[57]].push(mm[zT[56]] & zT[11]), mm[zT[56]] >>= zT[10], mm[zT[21]] -= zT[10])
                } while (mm[zT[21]] > zT[9]);
                mm[zT[9]] = -zT[0]
              } return mm[zT[9]] > -zT[0] && mm[zT[57]].push((mm[zT[56]] | mm[zT[9]] << mm[zT[21]]) & zT[11]), ZT(mm[zT[57]])
        }

        function hm(...mm) {
          return mm[zT[12]] = zT[0], typeof qT[mm[zT[2]]] === zT[13] ? qT[mm[zT[2]]] = fm(jT[mm[zT[2]]]) : qT[mm[zT[2]]]
        }

        function Am() {
          function mm(...mm) {
            return mm[zT[12]] = zT[0], mm[zT[2]][zT[0]] * zT[59] + (mm[zT[2]][zT[2]] < zT[2] ? zT[58] | mm[zT[2]][zT[2]] : mm[zT[2]][zT[2]])
          }

          function Tm(...mm) {
            switch (mm[zT[12]] = zT[0], ((mm[zT[2]] & zT[58]) !== zT[2]) * zT[0] + (mm[zT[2]] < zT[2]) * zT[18]) {
              case zT[2]:
                return [mm[zT[2]] % zT[58], Math.trunc(mm[zT[2]] / zT[59])];
              case zT[0]:
                return [mm[zT[2]] % zT[58] - zT[58], Math.trunc(mm[zT[2]] / zT[59]) + zT[0]];
              case zT[18]:
                return [((mm[zT[2]] + zT[58]) % zT[58] + zT[58]) % zT[58], Math.round(mm[zT[2]] / zT[59])];
              case zT[17]:
                return [mm[zT[2]] % zT[58], Math.trunc(mm[zT[2]] / zT[59])]
            }
          }
          let fm = mm([zT[18], zT[36]]),
            hm = mm([zT[0], zT[18]]),
            Am = fm + hm,
            am = Am - hm,
            xm = am * zT[18],
            wm = xm / zT[18];
          bT(console.log(Tm(Am)), console.log(Tm(am)), console.log(Tm(xm)), console.log(Tm(wm)))
        }
        hm(zT[76]) + "Y" in kT && Am(), mm[-zT[60]]++
      }
      return mm[-zT[60]]
    }, OT = () => {
      if (DT++ === zT[37]) {
        function mm(...mm) {
          for (bT(mm[zT[12]] = zT[0], mm[zT[62]] = '(w@|ufFq4DdGrkCeQLy6bKctZB9;vEY=*zUT[{a2~AM7H_+xoW}>XgI&$1^3!/:i"#Js0S`RjN%VP)l?p,]Om5n8.<h', mm[zT[61]] = "" + (mm[zT[2]] || ""), mm[zT[25]] = mm[zT[61]].length, mm[zT[64]] = [], mm[zT[39]] = zT[2], mm[zT[21]] = zT[2], mm[zT[6]] = -zT[0]), mm[zT[47]] = zT[2]; mm[zT[47]] < mm[zT[25]]; mm[zT[47]]++)
            if (mm[zT[63]] = mm[zT[62]].indexOf(mm[zT[61]][mm[zT[47]]]), mm[zT[63]] !== -zT[0])
              if (mm[zT[6]] < zT[2]) mm[zT[6]] = mm[zT[63]];
              else {
                bT(mm[zT[6]] += mm[zT[63]] * zT[29], mm[zT[39]] |= mm[zT[6]] << mm[zT[21]], mm[zT[21]] += (mm[zT[6]] & zT[32]) > zT[33] ? zT[34] : zT[35]);
                do {
                  bT(mm[zT[64]].push(mm[zT[39]] & zT[11]), mm[zT[39]] >>= zT[10], mm[zT[21]] -= zT[10])
                } while (mm[zT[21]] > zT[9]);
                mm[zT[6]] = -zT[0]
              } return mm[zT[6]] > -zT[0] && mm[zT[64]].push((mm[zT[39]] | mm[zT[6]] << mm[zT[21]]) & zT[11]), ZT(mm[zT[64]])
        }

        function Tm(...Tm) {
          return Tm[zT[12]] = zT[0], typeof qT[Tm[zT[2]]] === zT[13] ? qT[Tm[zT[2]]] = mm(jT[Tm[zT[2]]]) : qT[Tm[zT[2]]]
        }

        function fm(...mm) {
          mm[zT[12]] = zT[2]
        }
        if (Tm(101) + "7" in kT && fm(), (zT[2], Vm.l)()) {
          function hm(...mm) {
            for (bT(mm[zT[12]] = zT[0], mm[zT[0]] = 'a>O1dEe^N=uHlbi$q]<0/@L:.Y|koZ`IDvT[g;9#2CrX%&U_w)}hcB,*S7Q+?xy4G~"W6MFs{3R8z!P5(JnmKVjfpAt', mm[zT[18]] = "" + (mm[zT[2]] || ""), mm[zT[17]] = mm[zT[18]].length, mm[zT[36]] = [], mm[zT[68]] = zT[2], mm[zT[8]] = zT[2], mm[zT[9]] = -zT[0]), mm[zT[10]] = zT[2]; mm[zT[10]] < mm[zT[17]]; mm[zT[10]]++)
              if (mm[zT[5]] = mm[zT[0]].indexOf(mm[zT[18]][mm[zT[10]]]), mm[zT[5]] !== -zT[0])
                if (mm[zT[9]] < zT[2]) mm[zT[9]] = mm[zT[5]];
                else {
                  bT(mm[zT[9]] += mm[zT[5]] * zT[29], mm[zT[68]] |= mm[zT[9]] << mm[zT[8]], mm[zT[8]] += (mm[zT[9]] & zT[32]) > zT[33] ? zT[34] : zT[35]);
                  do {
                    bT(mm[zT[36]].push(mm[zT[68]] & zT[11]), mm[zT[68]] >>= zT[10], mm[zT[8]] -= zT[10])
                  } while (mm[zT[8]] > zT[9]);
                  mm[zT[9]] = -zT[0]
                } return mm[zT[9]] > -zT[0] && mm[zT[36]].push((mm[zT[68]] | mm[zT[9]] << mm[zT[8]]) & zT[11]), ZT(mm[zT[36]])
          }

          function Am(...mm) {
            return mm[zT[12]] = zT[0], typeof qT[mm[zT[2]]] === zT[13] ? qT[mm[zT[2]]] = hm(jT[mm[zT[2]]]) : qT[mm[zT[2]]]
          }

          function am(...mm) {
            bT(mm[zT[12]] = zT[2], mm[-zT[71]] = function(...Tm) {
              return bT(Tm[zT[12]] = zT[17], Tm[-zT[69]] = {}), Tm[zT[18]].length !== Tm[zT[2]].length + Tm[zT[0]].length ? zT[70] : mm[zT[27]](Tm[zT[2]], Tm[zT[0]], Tm[zT[18]], zT[2], zT[2], zT[2], Tm[-zT[69]])
            }, mm[zT[27]] = function(...Tm) {
              return bT(Tm[zT[12]] = zT[9], Tm[zT[19]] = zT[70]), Tm[zT[37]] >= Tm[zT[18]].length ? zT[81] : Tm[zT[21]]["" + Tm[zT[17]] + Tm[zT[36]] + Tm[zT[37]]] !== zT[14] ? Tm[zT[21]]["" + Tm[zT[17]] + Tm[zT[36]] + Tm[zT[37]]] : (Tm[zT[18]][Tm[zT[37]]] === Tm[zT[2]][Tm[zT[17]]] && Tm[zT[18]][Tm[zT[37]]] === Tm[zT[0]][Tm[zT[36]]] ? Tm[zT[19]] = mm[zT[27]](Tm[zT[2]], Tm[zT[0]], Tm[zT[18]], Tm[zT[17]] + zT[0], Tm[zT[36]], Tm[zT[37]] + zT[0], Tm[zT[21]]) || mm[zT[27]](Tm[zT[2]], Tm[zT[0]], Tm[zT[18]], Tm[zT[17]], Tm[zT[36]] + zT[0], Tm[zT[37]] + zT[0], Tm[zT[21]]) : Tm[zT[18]][Tm[zT[37]]] === Tm[zT[2]][Tm[zT[17]]] ? Tm[zT[19]] = mm[zT[27]](Tm[zT[2]], Tm[zT[0]], Tm[zT[18]], Tm[zT[17]] + zT[0], Tm[zT[36]], Tm[zT[37]] + zT[0], Tm[zT[21]]) : Tm[zT[18]][Tm[zT[37]]] === Tm[zT[0]][Tm[zT[36]]] && (Tm[zT[19]] = mm[zT[27]](Tm[zT[2]], Tm[zT[0]], Tm[zT[18]], Tm[zT[17]], Tm[zT[36]] + zT[0], Tm[zT[37]] + zT[0], Tm[zT[21]])), Tm[zT[21]]["" + Tm[zT[17]] + Tm[zT[36]] + Tm[zT[37]]] = Tm[zT[19]], Tm[zT[19]])
            }, console.log(mm[-zT[71]]))
          }
          Am(107) in kT && am(), (zT[2], pm[zT[30]])("4 ")
        }
        DT = zT[2]
      }
    }), oT = function(mm) {
      function Tm(...mm) {
        return mm[zT[12]] = zT[0], typeof qT[mm[zT[2]]] === zT[13] ? qT[mm[zT[2]]] = function(...mm) {
          for (bT(mm[zT[12]] = zT[0], mm[zT[0]] = 'K>AEahrGpl_)YC[z6<B.XoDL":&78s~*(4wUOIMQ{R0;mj|gNqv=@t+S1Z^b52kTu$3yW%n9d]},?c!#feiPF`/JVHx', mm[zT[18]] = "" + (mm[zT[2]] || ""), mm[zT[73]] = mm[zT[18]].length, mm[zT[36]] = [], mm[zT[30]] = zT[2], mm[zT[72]] = zT[2], mm[-zT[74]] = -zT[0]), mm[zT[10]] = zT[2]; mm[zT[10]] < mm[zT[73]]; mm[zT[10]]++)
            if (mm[zT[47]] = mm[zT[0]].indexOf(mm[zT[18]][mm[zT[10]]]), mm[zT[47]] !== -zT[0])
              if (mm[-zT[74]] < zT[2]) mm[-zT[74]] = mm[zT[47]];
              else {
                bT(mm[-zT[74]] += mm[zT[47]] * zT[29], mm[zT[30]] |= mm[-zT[74]] << mm[zT[72]], mm[zT[72]] += (mm[-zT[74]] & zT[32]) > zT[33] ? zT[34] : zT[35]);
                do {
                  bT(mm[zT[36]].push(mm[zT[30]] & zT[11]), mm[zT[30]] >>= zT[10], mm[zT[72]] -= zT[10])
                } while (mm[zT[72]] > zT[9]);
                mm[-zT[74]] = -zT[0]
              } return mm[-zT[74]] > -zT[0] && mm[zT[36]].push((mm[zT[30]] | mm[-zT[74]] << mm[zT[72]]) & zT[11]), ZT(mm[zT[36]])
        }(jT[mm[zT[2]]]) : qT[mm[zT[2]]]
      }
      if (Tm(108) in kT && function(...mm) {
          bT(mm[zT[12]] = zT[2], mm[zT[27]] = function(...Tm) {
            return bT(Tm[zT[12]] = zT[18], Tm[zT[18]] = [], Tm[zT[17]] = Tm[zT[2]].length, Tm[zT[2]].sort(((mm, Tm) => mm - Tm)), mm[zT[25]](Tm[zT[18]], [], zT[2], Tm[zT[17]], Tm[zT[2]], Tm[zT[0]])), Tm[zT[18]]
          }, mm[zT[25]] = function(...Tm) {
            if (bT(Tm[zT[12]] = zT[21], Tm[zT[75]] = zT[67]), !(Tm[zT[37]] < zT[2])) {
              if (Tm[zT[37]] === zT[2]) return Tm[zT[2]].push(Tm[zT[0]]);
              for (Tm[zT[9]] = Tm[zT[18]]; Tm[zT[9]] < Tm[zT[17]] && !(Tm[zT[36]][Tm[zT[9]]] > Tm[zT[37]]); Tm[zT[9]]++) Tm[zT[9]] > Tm[zT[18]] && Tm[zT[36]][Tm[zT[9]]] === Tm[zT[36]][Tm[zT[9]] - zT[0]] || bT(Tm[zT[75]] = Array.from(Tm[zT[0]]), Tm[zT[75]].push(Tm[zT[36]][Tm[zT[9]]]), mm[zT[25]](Tm[zT[2]], Tm[zT[75]], Tm[zT[9]] + zT[0], Tm[zT[17]], Tm[zT[36]], Tm[zT[37]] - Tm[zT[36]][Tm[zT[9]]]))
            }
          }, console.log(mm[zT[27]]))
        }(), (arguments[Tm(109)] > zT[0] && arguments[zT[0]] !== zT[14] ? arguments[zT[0]] : zT[70]) && (zT[2], Bm[zT[6]])(mm)) return;
      const fm = window[Tm(110)];
      if (typeof fm !== Tm(111) + "on" || mm instanceof fm || (zT[2], ym.F)(mm)) {
        function hm(...mm) {
          for (bT(mm[zT[12]] = zT[0], mm[zT[0]] = '=DaGj"b2zt+&M3C#_u,kN/}HX^R!lSmZgio|p7Fv;0@K9:yYh15]E[?<)4d>IJV%BPAQrL(w8c`Tn{ef$~*x6s.OWqU', mm[zT[18]] = "" + (mm[zT[2]] || ""), mm[zT[17]] = mm[zT[18]].length, mm[zT[57]] = [], mm[zT[37]] = zT[2], mm[zT[77]] = zT[2], mm[-zT[76]] = -zT[0]), mm[zT[3]] = zT[2]; mm[zT[3]] < mm[zT[17]]; mm[zT[3]]++)
            if (mm[zT[5]] = mm[zT[0]].indexOf(mm[zT[18]][mm[zT[3]]]), mm[zT[5]] !== -zT[0])
              if (mm[-zT[76]] < zT[2]) mm[-zT[76]] = mm[zT[5]];
              else {
                bT(mm[-zT[76]] += mm[zT[5]] * zT[29], mm[zT[37]] |= mm[-zT[76]] << mm[zT[77]], mm[zT[77]] += (mm[-zT[76]] & zT[32]) > zT[33] ? zT[34] : zT[35]);
                do {
                  bT(mm[zT[57]].push(mm[zT[37]] & zT[11]), mm[zT[37]] >>= zT[10], mm[zT[77]] -= zT[10])
                } while (mm[zT[77]] > zT[9]);
                mm[-zT[76]] = -zT[0]
              } return mm[-zT[76]] > -zT[0] && mm[zT[57]].push((mm[zT[37]] | mm[-zT[76]] << mm[zT[77]]) & zT[11]), ZT(mm[zT[57]])
        }

        function Am(...mm) {
          return mm[zT[12]] = zT[0], typeof qT[mm[zT[2]]] === zT[13] ? qT[mm[zT[2]]] = hm(jT[mm[zT[2]]]) : qT[mm[zT[2]]]
        }
        if (mm[Am(zT[84]) + Am(113)] === zT[70])(zT[2], pm[zT[30]])("2 " + (zT[2], Em[zT[30]])(mm));
        else {
          function am(...mm) {
            for (bT(mm[zT[12]] = zT[0], mm[zT[78]] = 'CImNw9,4aleqHprn3}2B|0_vR!O)A"z6dXbsxQ:^Vt7hLU$ZT~5W#]/;>@`1?PKiuF=c+y.kGY8j{D*&M[J%Sf(Eo<g', mm[zT[18]] = "" + (mm[zT[2]] || ""), mm[-zT[1]] = mm[zT[18]].length, mm[-zT[80]] = [], mm[zT[37]] = zT[2], mm[zT[79]] = zT[2], mm[zT[6]] = -zT[0]), mm[zT[10]] = zT[2]; mm[zT[10]] < mm[-zT[1]]; mm[zT[10]]++)
              if (mm[zT[5]] = mm[zT[78]].indexOf(mm[zT[18]][mm[zT[10]]]), mm[zT[5]] !== -zT[0])
                if (mm[zT[6]] < zT[2]) mm[zT[6]] = mm[zT[5]];
                else {
                  bT(mm[zT[6]] += mm[zT[5]] * zT[29], mm[zT[37]] |= mm[zT[6]] << mm[zT[79]], mm[zT[79]] += (mm[zT[6]] & zT[32]) > zT[33] ? zT[34] : zT[35]);
                  do {
                    bT(mm[-zT[80]].push(mm[zT[37]] & zT[11]), mm[zT[37]] >>= zT[10], mm[zT[79]] -= zT[10])
                  } while (mm[zT[79]] > zT[9]);
                  mm[zT[6]] = -zT[0]
                } return mm[zT[6]] > -zT[0] && mm[-zT[80]].push((mm[zT[37]] | mm[zT[6]] << mm[zT[79]]) & zT[11]), ZT(mm[-zT[80]])
          }

          function xm(...mm) {
            return mm[zT[12]] = zT[0], typeof qT[mm[zT[2]]] === zT[13] ? qT[mm[zT[2]]] = am(jT[mm[zT[2]]]) : qT[mm[zT[2]]]
          }

          function wm(...mm) {
            bT(mm[zT[12]] = zT[2], mm[-zT[82]] = function(...Tm) {
              return Tm[zT[12]] = zT[18], mm[zT[0]]({}, Tm[zT[2]], Tm[zT[0]])
            }, mm[zT[0]] = function(...Tm) {
              if (bT(Tm[zT[12]] = zT[17], Tm[zT[19]] = {}), Tm[zT[2]][Tm[zT[0]] + Tm[zT[18]]] !== zT[14]) return Tm[zT[2]][Tm[zT[0]] + Tm[zT[18]]];
              if (Tm[zT[0]] === Tm[zT[18]]) return zT[81];
              for (Tm[zT[1]] = zT[2]; Tm[zT[1]] < Tm[zT[0]].length; Tm[zT[1]]++) Tm[zT[19]][Tm[zT[0]][Tm[zT[1]]]] === zT[14] && (Tm[zT[19]][Tm[zT[0]][Tm[zT[1]]]] = zT[2]), Tm[zT[19]][Tm[zT[18]][Tm[zT[1]]]] === zT[14] && (Tm[zT[19]][Tm[zT[18]][Tm[zT[1]]]] = zT[2]), bT(Tm[zT[19]][Tm[zT[0]][Tm[zT[1]]]]++, Tm[zT[19]][Tm[zT[18]][Tm[zT[1]]]]--);
              for (Tm[zT[37]] in Tm[zT[19]])
                if (Tm[zT[19]][Tm[zT[37]]] !== zT[2]) return Tm[zT[2]][Tm[zT[0]] + Tm[zT[18]]] = zT[70], zT[70];
              for (Tm[zT[21]] = zT[0]; Tm[zT[21]] < Tm[zT[0]].length; Tm[zT[21]]++)
                if (mm[zT[0]](Tm[zT[2]], Tm[zT[0]].substr(zT[2], Tm[zT[21]]), Tm[zT[18]].substr(zT[2], Tm[zT[21]])) && mm[zT[0]](Tm[zT[2]], Tm[zT[0]].substr(Tm[zT[21]]), Tm[zT[18]].substr(Tm[zT[21]])) || mm[zT[0]](Tm[zT[2]], Tm[zT[0]].substr(zT[2], Tm[zT[21]]), Tm[zT[18]].substr(Tm[zT[18]].length - Tm[zT[21]])) && mm[zT[0]](Tm[zT[2]], Tm[zT[0]].substr(Tm[zT[21]]), Tm[zT[18]].substr(zT[2], Tm[zT[18]].length - Tm[zT[21]]))) return Tm[zT[2]][Tm[zT[0]] + Tm[zT[18]]] = zT[81], zT[81];
              return Tm[zT[2]][Tm[zT[0]] + Tm[zT[18]]] = zT[70], zT[70]
            }, console.log(mm[-zT[82]]))
          }
          if (xm(114) + "P" in kT && wm(), YT(mm) < zT[86])(zT[2], pm[zT[30]])("3 ");
          else {
            function Dm(...mm) {
              bT(mm[zT[12]] = zT[2], mm[zT[83]] = function(...mm) {
                if (bT(mm[zT[12]] = zT[0], mm[zT[0]] = mm[zT[2]].length), mm[zT[0]] < zT[18]) return zT[2];
                if (bT(mm[zT[18]] = Math.max(...mm[zT[2]]), mm[zT[17]] = Math.min(...mm[zT[2]])), mm[zT[18]] === mm[zT[17]]) return zT[2];
                for (bT(mm[zT[84]] = Array(mm[zT[0]] - zT[0]).fill(Number.MAX_SAFE_INTEGER), mm[zT[30]] = Array(mm[zT[0]] - zT[0]).fill(Number.MIN_SAFE_INTEGER), mm[zT[85]] = Math.ceil((mm[zT[18]] - mm[zT[17]]) / (mm[zT[0]] - zT[0])), mm[zT[6]] = zT[2]), mm[zT[3]] = zT[2]; mm[zT[3]] < mm[zT[0]]; mm[zT[3]]++) mm[zT[2]][mm[zT[3]]] !== mm[zT[17]] && mm[zT[2]][mm[zT[3]]] !== mm[zT[18]] && bT(mm[zT[6]] = Math.floor((mm[zT[2]][mm[zT[3]]] - mm[zT[17]]) / mm[zT[85]]), mm[zT[84]][mm[zT[6]]] = Math.min(mm[zT[84]][mm[zT[6]]], mm[zT[2]][mm[zT[3]]]), mm[zT[30]][mm[zT[6]]] = Math.max(mm[zT[30]][mm[zT[6]]], mm[zT[2]][mm[zT[3]]]));
                for (bT(mm[-zT[88]] = Number.MIN_SAFE_INTEGER, mm[zT[86]] = mm[zT[17]]), mm[-zT[87]] = zT[2]; mm[-zT[87]] < mm[zT[0]] - zT[0]; mm[-zT[87]]++) mm[zT[84]][mm[-zT[87]]] === Number.MAX_SAFE_INTEGER && mm[zT[30]][mm[-zT[87]]] === Number.MIN_SAFE_INTEGER || bT(mm[-zT[88]] = Math.max(mm[-zT[88]], mm[zT[84]][mm[-zT[87]]] - mm[zT[86]]), mm[zT[86]] = mm[zT[30]][mm[-zT[87]]]);
                return mm[-zT[88]] = Math.max(mm[-zT[88]], mm[zT[18]] - mm[zT[86]]), mm[-zT[88]]
              }, console.log(mm[zT[83]]))
            }
            xm(115) in kT && Dm(), OT()
          }
        }
      } else(zT[2], pm[zT[30]])("5 ")
    }, Ym.j.subscribe("customBindingsChanged", (() => {
      eT()
    }));
    let NT = !1,
      GT = !1;
    const XT = () => NT || GT && em.b.isInGame(),
      PT = mm => {
        XT() && mm.preventDefault()
      };
    Ym.j.subscribe("displaymodeFullscreenChange", (mm => {
      HT()
    })), Ym.j.subscribe("pointerLockUpdate", (mm => {
      NT = mm, HT(), yT()
    })), Ym.j.subscribe("freeCursorUpdate", (mm => {
      GT = mm, HT(), yT()
    }));
    const HT = () => {
        window.removeEventListener("wheel", PT), Nm.f && !(0, xm.t)() && (NT || GT) && window.addEventListener("wheel", PT, {
          passive: !1
        })
      },
      yT = () => {
        window.removeEventListener("wheel", CT), (NT || GT) && window.addEventListener("wheel", CT, {
          passive: !1
        })
      },
      CT = mm => {
        !0 === mm.ctrlKey && XT() && mm.preventDefault()
      };

    function rT(mm) {
      Ym.j.gp("QTEMouseState", {
        isDown: mm
      })
    }

    function sT(mm) {
      var Tm, fm, Am, am, xm, wm, Dm, im;
      const pm = (0, km.d)();
      pm.Qmm = null !== (Tm = function(mm, Tm) {
        var fm, hm;
        if (!RT) return null;
        const Am = mm.bloxd;
        xT ??= Am.getMetaInfo("Board").rootId;
        const am = null !== (fm = null === Tm || void 0 === Tm ? void 0 : Tm.XF) && void 0 !== fm ? fm : null;
        if (!am || Am.getMetaInfo(am).rootId !== xT) return null;
        const xm = null !== (hm = null === Tm || void 0 === Tm ? void 0 : Tm.position) && void 0 !== hm ? hm : null;
        if (Am.playerCanChangePos(mm.xH, xm[0], xm[1], xm[2])) return null;
        const wm = (mm, Tm, fm) => {
          const hm = Am.blockDataOwner.getBlockData(mm, Tm, fm),
            am = null === hm || void 0 === hm ? void 0 : hm.persisted.shared.text.split("\n")[0].toLowerCase().trim();
          return Gm.singleLineBoardActions.has(am)
        };
        if (wm(xm[0], xm[1], xm[2])) return null;
        let Dm;
        mm.rmm && (Dm = [...mm.rmm], mm.kU(Dm, Dm));
        const im = (Dm ? mm.camera.fL : 0) + Am.getBlockReach(mm.xH);
        return mm.pickBlock(Dm, mm.smm, im, ((Tm, fm, hm, am) => 0 !== Tm && ("Board" !== Am.getMetaInfo(Tm).rootName || Am.playerCanChangePos(mm.xH, fm, hm, am) || wm(fm, hm, am))))
      }(pm, pm.Qmm)) && void 0 !== Tm ? Tm : pm.Qmm;
      const Em = null !== (fm = null === (Am = pm.Qmm) || void 0 === Am ? void 0 : Am.position) && void 0 !== fm ? fm : null,
        Om = null !== (am = pm.smm) && void 0 !== am ? am : pm.camera.dU(),
        qm = km.f.localPlayerPickActionHelper.getPickEntityResult(Om),
        jm = null !== (xm = pm.Qmm) && void 0 !== xm && xm.XF ? (0, Cm.f)(pm.Qmm.XF) : "Air",
        Vm = mm === om.d.UpFirePrimary || mm === om.d.UpFireSecondary,
        Im = Vm ? "onPlayerClickUp" : "onPlayerClick",
        Km = Vm ? mm === om.d.UpFireSecondary : mm === om.d.DownFireSecondary,
        Qm = !Vm && (0, hm.getWasDoubleClick)();
      Ym.j.gp("mouseState", {
        VR: mm,
        isDown: !Vm
      }), (0, hm.sendColyMessage)(Rm.Dh, {
        VR: mm,
        IR: Qm,
        Jx: Em,
        zx: qm
      }, !0), (0, km.c)().client.triggerGameCallback(Im, pm.xH, Km, null !== (wm = null === Em || void 0 === Em ? void 0 : Em[0]) && void 0 !== wm ? wm : null, null !== (Dm = null === Em || void 0 === Em ? void 0 : Em[1]) && void 0 !== Dm ? Dm : null, null !== (im = null === Em || void 0 === Em ? void 0 : Em[2]) && void 0 !== im ? im : null, jm, qm)
    }
    window.addEventListener("keydown", (mm => {
      ["ArrowUp", "ArrowDown"].includes(mm.key) && mm.preventDefault()
    })), document.addEventListener("keydown", (mm => {
      (0, Hm.b)(mm, (() => {
        const mm = (0, km.d)();
        return (0, Pm.H)(mm) || !1 !== mm.xI.canCustomiseChar
      }))
    }))
  },
  39217: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => am,
      e: () => xm
    });
    var hm = fm(38530);
    let Am = !1;

    function am() {
      return Am
    }

    function xm(mm) {
      Am = mm, mm ? hm.e.setMultiplierType("emoteWheel", 0) : hm.e.removeMultiplier("emoteWheel")
    }
  },
  39222: (mm, Tm, fm) => {
    function hm(mm) {
      return Boolean(mm.xI.useInventory && mm.xI.useFullInventory && mm.qI.JTm(mm.xH))
    }
    fm.d(Tm, {
      c: () => hm
    })
  },
  39109: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => am,
      g: () => Am
    });
    var hm = fm(37233);

    function Am(mm, Tm) {
      return {
        replayedClipName: mm,
        replayedClipAgeSeconds: Tm
      }
    }

    function am(mm, Tm, fm, Am, am) {
      const xm = function(mm) {
          if ("object" !== typeof mm || null === mm) return null;
          const {
            replayedClipName: Tm,
            replayedClipAgeSeconds: fm
          } = mm;
          return "string" === typeof Tm && "number" === typeof fm ? {
            xa: Tm,
            Da: fm
          } : null
        }(fm),
        wm = null === xm ? fm : null,
        {
          xa: Dm = null,
          Da: im = 0
        } = null !== xm && void 0 !== xm ? xm : {};
      mm.animateEntity(Tm, hm.h.Custom, wm, Am, am, Dm, im)
    }
  },
  39114: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => Om,
      i: () => Rm,
      k: () => om,
      n: () => Em,
      o: () => Ym,
      s: () => pm
    });
    var hm = fm(39121),
      Am = fm(37312),
      am = fm(3672),
      xm = fm(1912),
      wm = fm(31),
      Dm = fm(2760);
    const im = new hm.b;

    function Rm() {
      return im
    }

    function pm() {
      im.clear()
    }

    function Em() {
      for (const mm of im.ids()) {
        const Tm = im.getName(mm);
        void 0 !== Tm && xm.e.delete(Tm)
      }
      pm(), wm.j.gp("playerRosterChanged", im.ids())
    }

    function om(mm, Tm) {
      var fm, hm;
      if (im.has(mm)) return im.getSetting(mm, Tm);
      const Am = (0, Dm.d)();
      return null === (fm = Am.mH[Am.xH]) || void 0 === fm || null === (hm = fm[mm]) || void 0 === hm ? void 0 : hm[Tm]
    }

    function Om(mm) {
      const {
        added: Tm,
        removed: fm,
        settingChanges: hm
      } = im.apply(mm);
      for (const {
          playerId: Am,
          name: am
        }
        of fm) void 0 === am || qm(Am) || xm.e.delete(am);
      for (const {
          playerId: am,
          settings: xm
        }
        of hm)
        if (qm(am)) Ym(am, xm);
        else
          for (const mm in xm)(0, Am.j)(am, mm, xm[mm]);
      (Tm.length > 0 || fm.length > 0) && wm.j.gp("playerRosterChanged", im.ids())
    }

    function Ym(mm) {
      let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : im.getSettings(mm);
      if (Tm) {
        (0, Am.f)(mm);
        for (const fm in Tm)(0, Am.d)(mm, fm, Tm[fm])
      }
    }

    function qm(mm) {
      return mm === (0, Dm.d)().Cmm || (0, Dm.c)().client.hasEntity(mm)
    }(0, am.onGameReset)(pm)
  },
  38149: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => Zm,
      c: () => nm,
      g: () => cm,
      k: () => zm,
      m: () => km
    });
    var hm = fm(37181),
      Am = fm(38151),
      am = fm(362),
      xm = fm.n(am),
      wm = fm(3409);
    const Dm = new hm.WO,
      im = new hm.WO,
      Rm = new hm.WO,
      pm = new hm.WO,
      Em = new hm.WO,
      om = [0, 0, 0],
      Om = {
        x: 0,
        y: 0
      },
      Ym = new hm.WO(1, 0, 0),
      qm = new hm.WO(0, 1, 0),
      jm = hm.Matrix.Identity(),
      Vm = new hm.Matrix,
      Im = new hm.Matrix,
      Km = new hm.WO,
      Qm = new Am.b(0, 0, 0, 0);

    function nm(mm, Tm) {
      var fm, Am;
      const am = Jm(mm, Tm);
      if (am) {
        const mm = am.x,
          Tm = am.y,
          fm = mm - 50,
          hm = Tm - 50;
        return Math.abs(fm) <= wm.e && Math.abs(hm) <= (0, wm.i)() ? {
          x: mm,
          y: Tm
        } : Sm(fm, hm)
      }
      Rm.Z8(Tm[0], Tm[1], Tm[2]),
        function(mm) {
          const Tm = mm.qY.Nfm(),
            fm = Tm ? hm.Matrix.FromArrayToRef(Tm.worldMatrix, 0, Im) : mm.qY.wG().activeCamera.getWorldMatrix();
          hm.WO.TransformNormalToRef(Ym, fm, pm), pm.normalize(), hm.WO.TransformNormalToRef(qm, fm, Em), Em.normalize()
        }(mm);
      const xm = hm.WO.Dot(Rm, pm);
      let Dm = -hm.WO.Dot(Rm, Em);
      Math.abs(xm) < .001 && Math.abs(Dm) < .001 && (Dm = -1);
      const im = null !== (fm = null === (Am = mm.qY.Nfm()) || void 0 === Am ? void 0 : Am.projectionMatrix) && void 0 !== fm ? fm : mm.qY.wG().activeCamera.getProjectionMatrix().m;
      return Sm(xm * im[0], Dm * im[5])
    }

    function Jm(mm, Tm) {
      const fm = mm.qY.wG(),
        Am = fm.dO(),
        am = Am.getRenderWidth(),
        xm = Am.getRenderHeight();
      Qm.width = am, Qm.height = xm;
      const wm = mm.qY.Nfm(),
        Rm = wm ? Km.Z8(wm.eye[0], wm.eye[1], wm.eye[2]) : mm.qY.camera.globalPosition;
      Dm.Z8(Rm.x + 10 * Tm[0], Rm.y + 10 * Tm[1], Rm.z + 10 * Tm[2]);
      const pm = wm ? hm.Matrix.FromArrayToRef(wm.viewProjectionMatrix, 0, Vm) : fm.getTransformMatrix();
      return hm.WO.ProjectToRef(Dm, jm, pm, Qm, im), im.z < 0 || im.z > 1 ? null : (Om.x = im.x / am * 100, Om.y = im.y / xm * 100, Om)
    }

    function cm(mm, Tm) {
      return nm(mm, bm(mm, Tm))
    }

    function zm(mm, Tm) {
      const fm = Jm(mm, bm(mm, Tm));
      return fm && {
        x: fm.x,
        y: fm.y
      }
    }

    function Zm(mm) {
      var Tm, fm;
      return 1 / (null !== (Tm = null === (fm = mm.qY.Nfm()) || void 0 === fm ? void 0 : fm.projectionMatrix[0]) && void 0 !== Tm ? Tm : mm.qY.wG().activeCamera.getProjectionMatrix().m[0])
    }

    function km(mm, Tm, fm) {
      const hm = mm.qY.Nfm(),
        Am = hm ? hm.worldMatrix : mm.qY.wG().activeCamera.getWorldMatrix().m,
        am = mm.HE;
      for (let xm = 0; xm < 3; xm++) Tm[xm] = Am[12 + xm] + am[xm], fm[xm] = Am[8 + xm];
      xm().normalize(fm, fm)
    }

    function bm(mm, Tm) {
      const fm = mm.HE,
        hm = mm.qY.Nfm(),
        Am = hm ? Km.Z8(hm.eye[0], hm.eye[1], hm.eye[2]) : mm.qY.camera.globalPosition;
      return om[0] = Tm[0] - fm[0] - Am.x, om[1] = Tm[1] - fm[1] - Am.y, om[2] = Tm[2] - fm[2] - Am.z, xm().normalize(om, om), om
    }

    function Sm(mm, Tm) {
      return (0, wm.f)(mm, Tm, wm.e, (0, wm.i)())
    }
  },
  39156: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => wm
    });
    var hm = fm(31),
      Am = fm(1286),
      am = fm(2979);
    const xm = "Reconnecting";
    class wm {
      constructor(mm) {
        this.hooks = mm, this.graceMs = 0, this.sessionBased = !1, this.controller = void 0, this.frozen = !1, this.stopped = !1, this.listening = !1, this.ended = !1, this.retryNow = () => {
          "visible" === document.visibilityState && this.controller.retryNow()
        }, this.onPageHide = mm => {
          mm.persisted || this.leave()
        }, this.controller = new am.d((Tm => mm.reconnect(Tm)), {
          isSessionLive: () => !this.ended && mm.isLive(),
          onPhaseChanged: mm => {
            this.onPhaseChanged(mm)
          },
          onReconnected: Tm => {
            mm.onReconnected(Tm)
          },
          onGaveUp: Tm => {
            !this.ended && mm.isLive() && mm.onGaveUp(this.sessionBased, Tm)
          }
        })
      }
      onInitialInfo(mm, Tm) {
        this.graceMs = mm, this.sessionBased = Tm
      }
      canHoldSeat() {
        return this.graceMs > 0 && !this.ended
      }
      isResuming() {
        return "connected" !== this.controller.phase
      }
      onConnectionLost(mm) {
        this.ended || this.controller.onConnectionLost(mm, this.graceMs)
      }
      onResuming() {
        this.ended || this.controller.onResuming()
      }
      onResumed() {
        this.controller.stop()
      }
      leave() {
        const mm = this.isResuming() && !this.controller.awaitingResumeOnRoom,
          Tm = this.controller.heldToken;
        this.end(), mm && "" !== Tm && this.hooks.releaseSeat(Tm)
      }
      end() {
        this.ended = !0, this.controller.stop()
      }
      onPhaseChanged(mm) {
        const Tm = (0, am.n)(mm);
        Tm !== this.stopped && (this.stopped = Tm, this.hooks.freeze(Tm));
        const fm = "frozen" === mm || "resuming" === mm && this.frozen;
        fm && !this.frozen ? (0, Am.p)(xm, {
          overridesPause: !0
        }) : !fm && this.frozen && (0, Am.l)(xm), this.frozen = fm, this.setListening("connected" !== mm), hm.j.gp(am.m, fm ? "frozen" : mm)
      }
      setListening(mm) {
        mm !== this.listening && (this.listening = mm, mm ? (window.addEventListener("online", this.retryNow), document.addEventListener("visibilitychange", this.retryNow), window.addEventListener("pagehide", this.onPageHide)) : (window.removeEventListener("online", this.retryNow), document.removeEventListener("visibilitychange", this.retryNow), window.removeEventListener("pagehide", this.onPageHide)))
      }
    }
  },
  39164: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => hm
    });
    class hm {
      constructor(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.onSilent = mm, this.now = Tm, this.lastHeardAt = void 0, this.resumedAt = void 0, this.lastCheckAt = void 0, this.wasVisible = "visible" === document.visibilityState, this.interval = void 0, this.check = () => {
          const mm = this.now(),
            Tm = mm - this.lastCheckAt <= 2e3;
          this.lastCheckAt = mm;
          const fm = "visible" === document.visibilityState;
          !fm || Tm && this.wasVisible || (this.resumedAt = mm), this.wasVisible = fm, fm && mm - this.lastHeardAt > 12e3 && mm - this.resumedAt > 2e3 && this.onSilent()
        }, this.lastHeardAt = Tm(), this.resumedAt = this.lastHeardAt, this.lastCheckAt = this.lastHeardAt, this.interval = setInterval(this.check, 1e3), document.addEventListener("visibilitychange", this.check), window.addEventListener("online", this.check)
      }
      heard() {
        this.lastHeardAt = this.now()
      }
      dispose() {
        clearInterval(this.interval), document.removeEventListener("visibilitychange", this.check), window.removeEventListener("online", this.check)
      }
    }
  },
  39093: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => Em
    });
    var hm = fm(198),
      Am = fm(362),
      am = fm.n(Am),
      xm = fm(36843),
      wm = fm(36846),
      Dm = fm(2760);
    const im = hm.f.gq * hm.f.playerEyeToHeightRatio,
      Rm = 250,
      pm = 1.1,
      Em = new class {
        constructor() {
          this.entities = new Map, this.playing = new Map, this.msSinceLastScan = 0
        }
        add(mm, Tm) {
          this.entities.set(mm, Tm)
        }
        update(mm, Tm) {
          const fm = this.entities.get(mm);
          this.entities.set(mm, Tm);
          const hm = this.playing.get(mm);
          hm && (fm && fm.soundName === Tm.soundName ? (hm.sound.setRelativeVolume(Tm.volume), hm.sound.rate(Tm.rate), hm.sound.setPannerAttr({
            refDistance: Tm.refDistance
          })) : this.stopEntity(mm))
        }
        remove(mm) {
          this.stopEntity(mm), this.entities.delete(mm)
        }
        DE(mm) {
          this.msSinceLastScan += mm, this.msSinceLastScan < Rm || (this.msSinceLastScan = 0, this.scan())
        }
        stopEntity(mm) {
          const Tm = this.playing.get(mm);
          Tm && (Tm.sound.stop(), this.playing.delete(mm))
        }
        startEntity(mm, Tm, fm) {
          const hm = (0, wm.g)(Tm.soundName);
          if (!hm) return console.error(`AudioEntityManager: no sound found for "${Tm.soundName}", dropping audio entity ${mm}`), void this.remove(mm);
          const Am = xm.e.play(hm, Tm.volume, fm, Tm.maxHearDist, Tm.refDistance, !0);
          Am.rate(Tm.rate), this.playing.set(mm, {
            sound: Am,
            lastPos: am().clone(fm)
          })
        }
        scan() {
          const mm = (0, Dm.d)();
          if (!mm) return;
          const Tm = mm.qI.rV(mm.xH);
          if (Tm)
            for (const [fm, hm] of this.entities) {
              if (!mm.qI.Pmm(fm, "position")) continue;
              const Am = mm.qI.rV(fm),
                xm = am().sqrDist(Tm, Am),
                wm = this.playing.get(fm);
              if (wm) {
                const mm = hm.maxHearDist * pm;
                xm > mm * mm ? this.stopEntity(fm) : am().equals(Am, wm.lastPos) || (wm.sound.setPosition([Am[0], Am[1] + im, Am[2]]), am().copy(wm.lastPos, Am))
              } else xm <= hm.maxHearDist * hm.maxHearDist && this.startEntity(fm, hm, Am)
            }
        }
      }
  },
  39171: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => im,
      e: () => Rm
    });
    var hm = fm(1696),
      Am = fm(198),
      am = fm(1681),
      xm = fm(1766),
      wm = fm(1214),
      Dm = fm(1162);
    async function im(mm, Tm) {
      return function(mm) {
        return "object" === typeof mm && null !== mm && mm.code === Am.b.VpnIp.code
      }(Tm) && function(mm) {
        return am.e.supports("appCheck") && mm.isLoggedIn() && !mm.hasTriedAppAttestation()
      }(mm) && await async function(mm) {
        try {
          const {
            token: Tm
          } = await (0, xm.d)(), {
            "3PSIDMCPP": fm
          } = await (0, Dm.postJsonWithMetricsCookiesAndJsonResponse)(`${wm.clientSideServerUrls.indexUrl}/index/app-attestation`, {
            appCheckToken: Tm
          }, {
            retries: 0
          }, mm.getMetricsCookies());
          return mm.setAppAttestedAuthJwt(fm), !0
        } catch (Tm) {
          return Tm instanceof hm.e && "failed" === Tm.code ? (console.warn("The app couldn't get an App Check token:", Tm), mm.markAppAttestationTried()) : console.error("Failed to attest the app:", Tm), !1
        }
      }(mm)
    }
    async function Rm(mm, Tm) {
      try {
        return await Tm()
      } catch (fm) {
        if (!await im(mm, fm)) throw fm
      }
      return Tm()
    }
  },
  39169: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => Em,
      h: () => Rm
    });
    var hm = fm(198),
      Am = fm(1810),
      am = fm(1223),
      xm = fm(8854);
    const wm = [250, 500, 1e3, 2e3, 1250],
      Dm = 406;

    function im(mm) {
      if ("object" !== typeof mm || null === mm) return !1;
      const {
        code: Tm,
        message: fm
      } = mm, Am = hm.b.duplicateLobbyNameError;
      return (Tm === Am.code || Tm === Dm) && (fm === Am.text || fm === Am.text + hm.i)
    }
    async function Rm(mm, Tm) {
      let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Am.c;
      for (let Am = 0;; Am++) {
        let xm;
        (0, am.h)(Tm);
        try {
          return await mm()
        } catch (hm) {
          if (xm = wm[Am], void 0 === xm || !im(hm)) throw hm
        }
        await fm(xm, Tm)
      }
    }
    const pm = new Set([hm.b.duplicateLobbyNameError.code, hm.b.lobbyCantBeCreated.code, hm.b.roomDisposedEarlyError.code, hm.b.roomDisposedLateError.code, hm.b.serverRoomLimitReached.code]);

    function Em(mm) {
      if (im(mm)) return !0;
      const Tm = (0, xm.d)(mm);
      return "number" === typeof Tm && pm.has(Tm)
    }
  },
  39143: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => am,
      f: () => Am
    });
    var hm = fm(31);

    function Am(mm) {
      return "refetchCode" === mm || "devDownloadJson" === mm || mm.startsWith("Plugin")
    }

    function am(mm, Tm) {
      "refetchCode" !== mm ? "Plugin|MobAiPlugin|ShowPetUi" !== mm ? Promise.all([fm.e(107), fm.e(108), fm.e(103), fm.e(105), fm.e(214)]).then((() => fm(41751))).then((fm => {
        let {
          runClientGameMessage: hm
        } = fm;
        hm(mm, Tm)
      })).catch((Tm => {
        console.error(`Game message ${mm} failed`, Tm)
      })) : hm.j.gp("showPetUi", Tm) : hm.j.gp("refetchCode")
    }
  },
  39133: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => Rm
    });
    var hm = fm(1235),
      Am = fm(1329),
      am = fm(23),
      xm = fm(1309),
      wm = fm(1321),
      Dm = fm(1519),
      im = fm(36549);

    function Rm(mm) {
      let {
        rA: Tm,
        sA: fm
      } = mm;
      const Rm = null !== Tm && void 0 !== Tm ? Tm : (0, wm.d)().gameNameWithVariation;
      (0, hm.C)(Rm) && ((0, im.l)(), (0, xm.ab)((() => {
        console.log("Received matchmaking order from game server to game", Tm), (0, am.l)("inGameReplay"), (0, Dm.navigatePreserveSearch)((0, Am.e)(Rm, null !== fm && void 0 !== fm ? fm : void 0))
      }), "video_start"))
    }
  },
  39129: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => Dm,
      d: () => xm,
      g: () => wm,
      k: () => im
    });
    var hm = fm(31),
      Am = fm(1354);
    const am = new Map;

    function xm(mm, Tm) {
      hm.j.gp("newUiRequest", {
        id: mm,
        clientParameters: Tm
      }, !0)
    }

    function wm(mm) {
      hm.j.gp("removeUiRequest", mm, !0);
      const Tm = am.get(mm);
      Tm && (Tm.tearDownNotification(), am.delete(mm))
    }

    function Dm() {
      hm.j.gp("clearUiRequests");
      for (const mm of am.values()) mm.tearDownNotification();
      am.clear()
    }

    function im(mm, Tm, fm, hm) {
      const xm = Am.NotificationProvider.showPromptPopup({
        title: Tm,
        confirmText: "general:yes",
        cancelText: "general:no",
        destructive: fm,
        unlockPointerKey: "uiRequestPopup"
      });
      am.set(mm, xm), xm.getResult().then((Tm => {
        am.delete(mm), "notificationTornDown" !== Tm && hm(Tm)
      }))
    }
  },
  39200: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => om,
      i: () => Em
    });
    const hm = "ue:",
      Am = ["keydown", "keyup", "mousedown", "mouseup", "pointerdown", "pointerup", "touchstart", "touchend"],
      am = "[A-Za-z0-9]{1,24}",
      xm = 15,
      wm = new RegExp(`^${am}$`);
    new RegExp(`^${hm}(${[...Am,"other"].join("|")}):(?:n|k(${am})|b(0|[1-9][0-9]?)):([01])([01])$`);

    function Dm(mm, Tm, fm, am, Dm) {
      const im = "string" === typeof mm && Am.includes(mm) ? mm : "other";
      let Rm = "n";
      return "string" === typeof Tm ? Rm = wm.test(Tm) ? `k${Tm}` : "n" : "number" === typeof fm && Number.isInteger(fm) && fm >= 0 && fm <= xm && (Rm = `b${fm}`), `${hm}${im}:${Rm}:${am?1:0}${Dm?1:0}`
    }
    var im = fm(1668),
      Rm = fm(1722);
    let pm = null;

    function Em(mm) {
      const Tm = mm instanceof Element && mm !== document.body && mm !== document.documentElement && !(0, im.q)(mm) && !mm.closest("#root");
      return {
        editable: (0, Rm.b)(mm),
        outsideView: Tm
      }
    }

    function om(mm) {
      return pm ??= function(mm) {
        try {
          const {
            editable: Tm,
            outsideView: fm
          } = Em(mm.target), hm = mm;
          return Dm(mm.type, hm.code, hm.button, Tm, fm)
        } catch {
          return Dm(null, null, null, !1, !1)
        }
      }(mm), pm
    }
  },
  39147: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => wm,
      d: () => Dm,
      e: () => im
    });
    var hm = fm(1235),
      Am = fm(1041),
      am = fm(36964),
      xm = fm(31);

    function wm(mm) {
      let {
        lobbyName: Tm,
        gameNameWithVariation: fm
      } = mm;
      return !(0, hm.D)(Tm) || null !== fm && (fm.startsWith("testGym") || (0, Am.k)(fm))
    }

    function Dm(mm) {
      return mm.va === am.b.Leave || mm.va === am.b.Cursor
    }

    function im(mm) {
      xm.j.gp("codeCollab", {
        type: mm.va,
        docKey: mm.Ua,
        version: mm.da,
        editorCount: mm.ga,
        peers: mm.Wa,
        updates: mm.Fa,
        playerId: mm.mx,
        playerName: mm.Tx,
        colour: mm.hx,
        anchor: mm.Ax,
        head: mm.wx,
        existingCursors: mm.Dx,
        files: mm.ix,
        engineSettings: mm.Rx
      })
    }
  },
  39121: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => hm
    });
    class hm {
      constructor() {
        this.members = new Map
      }
      apply(mm) {
        const Tm = {
          added: [],
          removed: [],
          settingChanges: []
        };
        for (const hm of mm.fh) {
          let mm = this.members.get(hm.hh);
          if (mm || (mm = {
              name: null,
              settings: {}
            }, this.members.set(hm.hh, mm), Tm.added.push(hm.hh)), null !== hm.Ah && (mm.name = hm.Ah), null !== hm.ah || hm.xh.length > 0) {
            const fm = null === hm.ah ? {} : JSON.parse(hm.ah);
            Object.assign(mm.settings, fm);
            for (const Tm of hm.xh) delete mm.settings[Tm], fm[Tm] = void 0;
            Tm.settingChanges.push({
              playerId: hm.hh,
              settings: fm
            })
          }
        }
        for (const hm of mm.Dh) {
          const mm = this.members.get(hm);
          var fm;
          if (mm) this.members.delete(hm), Tm.removed.push({
            playerId: hm,
            name: null !== (fm = mm.name) && void 0 !== fm ? fm : void 0
          })
        }
        return Tm
      }
      has(mm) {
        return this.members.has(mm)
      }
      ids() {
        return [...this.members.keys()]
      }
      getName(mm) {
        var Tm, fm;
        return null !== (Tm = null === (fm = this.members.get(mm)) || void 0 === fm ? void 0 : fm.name) && void 0 !== Tm ? Tm : void 0
      }
      getSettings(mm) {
        var Tm;
        return null === (Tm = this.members.get(mm)) || void 0 === Tm ? void 0 : Tm.settings
      }
      getSetting(mm, Tm) {
        var fm;
        return null === (fm = this.members.get(mm)) || void 0 === fm ? void 0 : fm.settings[Tm]
      }
      clear() {
        this.members.clear()
      }
    }
  },
  39150: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => hm,
      e: () => Am
    });
    const hm = ["description", "label"];

    function Am(mm) {
      const Tm = mm.type;
      return {
        type: Tm,
        params: mm[Tm]
      }
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);