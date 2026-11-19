export const id = 155;
export const ids = [155];
export const modules = {
  38431: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => iD,
      h: () => fD
    });
    var ID = cD(20);
    let pD = !1;

    function iD() {
      return pD
    }

    function fD(DD) {
      pD !== DD && (pD = DD, ID.i.Uo("replayViewer|videoExportChanged"))
    }
  },
  38323: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => iD
    });
    var ID = cD(20),
      pD = cD(1928);

    function iD(DD) {
      let {
        taskId: CD,
        progress: cD
      } = DD;
      const ID = pD.d.get("_tasks");
      null !== ID && void 0 !== ID && ID[CD] && pD.d.apply({
        _tasks: {
          ...ID,
          [CD]: {
            ...ID[CD],
            progress: cD
          }
        }
      })
    }
    ID.i.subscribe("clientTaskProgress", (DD => {
      iD(DD)
    }))
  },
  38447: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => ZD,
      e: () => oD,
      f: () => tD
    });
    var ID = cD(2727);
    const pD = 0,
      iD = 2,
      fD = 3,
      bD = 4;
    class QD {
      constructor(DD, CD) {
        this.width = DD, this.LB = CD, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(DD * CD)
      }
      push(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const cD = this.data.subarray(this.next * this.width, (this.next + 1) * this.width);
        for (let ID = 0; ID < this.width; ID++) cD[ID] = DD[CD + ID];
        return this.next = (this.next + 1) % this.LB, this.size = Math.min(this.size + 1, this.LB), cD
      }
      lines() {
        const DD = [],
          CD = (this.next - this.size + this.LB) % this.LB;
        for (let cD = 0; cD < this.size; cD++) {
          const ID = (CD + cD) % this.LB * this.width;
          DD.push(Array.from(this.data.subarray(ID, ID + this.width)).join(","))
        }
        return DD
      }
    }

    function wD(DD) {
      return Number.isFinite(DD) ? String(Math.round(10 * DD) / 10) : String(DD)
    }

    function SD(DD) {
      return Number.isFinite(DD) ? DD.toFixed(1) : String(DD)
    }
    class BD {
      constructor() {
        this.frames = 0, this.looked = 0, this.idle = 0, this.lL = 0, this.pastLimit = 0, this.lockSkips = 0, this.eb = 0, this.lost = 0, this.dropped = 0, this.longFrames = 0, this.dtMin = 1 / 0, this.dtMax = 0, this.dtSum = 0, this.raw = [0, 0], this.turned = [0, 0], this.peakRate = 0, this.events = 0, this.eventMax = 0, this.bigEvents = 0, this.outliers = 0, this.eventLines = 0, this.suppressed = 0
      }
    }
    class yD {
      constructor() {
        var DD = this;
        this.tally = new BD, this.records = new QD(10, 3600), this.events = new QD(4, 12e3), this.event = new Float64Array(4), this.take = null, this.client = "js", this.started = !1, this.record = function(CD) {
          let cD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          const [ID, QD, BD, yD, MD, tD, ZD, oD, vD, ND] = DD.records.push(CD, cD), gD = DD.tally;
          switch (gD.frames++, ZD) {
            case pD:
              return void gD.idle++;
            case bD:
              return void gD.eb++;
            case fD:
              return gD.lockSkips++, void(0 === BD && 0 === yD || DD.outlier(`lock skip dropped raw (${wD(BD)}, ${wD(yD)}) at ${SD(ID)} ms`))
          }
          gD.looked++, Number.isFinite(QD) && (gD.dtMin = Math.min(gD.dtMin, QD), gD.dtMax = Math.max(gD.dtMax, QD), gD.dtSum += QD, QD > 0 && (gD.peakRate = Math.max(gD.peakRate, Math.hypot(MD, tD) / QD))), gD.raw[0] += BD, gD.raw[1] += yD, gD.turned[0] += MD, gD.turned[1] += tD;
          const XD = Math.abs(BD) > ND || Math.abs(yD) > ND,
            mD = `raw (${wD(BD)}, ${wD(yD)}) over ${SD(QD)} ms, limit ${wD(ND)}, filter v (${oD.toFixed(3)}, ${vD.toFixed(3)}) px/ms, at ${SD(ID)} ms`;
          ZD === iD ? (gD.lL++, DD.outlier(`spike put right: ${mD} -> turned (${wD(MD)}, ${wD(tD)})`)) : XD ? (gD.pastLimit++, DD.outlier(`kept past limit: ${mD}`)) : QD > 50 && (gD.longFrames++, DD.outlier(`long frame: ${mD}, turned in full`))
        }, this.onMouseMove = DD => {
          const CD = this.tally,
            {
              movementX: cD,
              movementY: ID
            } = DD;
          CD.events++;
          const pD = Math.max(Math.abs(cD), Math.abs(ID));
          CD.eventMax = Math.max(CD.eventMax, pD);
          const iD = null !== document.pointerLockElement,
            fD = this.event;
          fD[0] = DD.timeStamp, fD[1] = cD, fD[2] = ID, fD[3] = iD ? 1 : 0, this.events.push(fD), pD >= 200 && (CD.bigEvents++, this.eventOutlier(`big mousemove (${cD}, ${ID}) at ${SD(DD.timeStamp)} ms, lock ${iD?"Lb":"free"}`))
        }, this.onLockChange = () => {
          const DD = document.pointerLockElement;
          (0, ID.j)("look", `pointer lock ${DD?`gained (${DD.tagName.toLowerCase()})`:"lost"} at ${SD(performance.now())} ms`)
        }, this.onLockError = () => {
          (0, ID.j)("look", `pointer lock request failed at ${SD(performance.now())} ms`)
        }, this.onVisibility = () => {
          (0, ID.j)("look", `page ${document.visibilityState} at ${SD(performance.now())} ms`)
        }, this.flush = () => {
          this.takeRecords();
          const DD = this.tally;
          if (this.tally = new BD, 0 === DD.events && 0 === DD.raw[0] && 0 === DD.raw[1] && 0 === DD.lockSkips && 0 === DD.lL && 0 === DD.dropped) return;
          const CD = DD.looked > 0 ? DD.dtSum / DD.looked : NaN,
            cD = [`${DD.frames} frames (${DD.looked} looked, ${DD.idle} idle${"wasm"===this.client?`, ${DD.eb} carried`:""})`, `dt avg ${SD(CD)} min ${SD(DD.dtMin)} max ${SD(DD.dtMax)}, ${DD.longFrames} long`, `${DD.events} mousemoves (max ${wD(DD.eventMax)} px, ${DD.bigEvents} big)`, `raw (${wD(DD.raw[0])}, ${wD(DD.raw[1])}) turned (${wD(DD.turned[0])}, ${wD(DD.turned[1])})`, `peak ${DD.peakRate.toFixed(2)} px/ms`, `put right ${DD.lL}, past limit ${DD.pastLimit}, lock skips ${DD.lockSkips}`, "lock " + (document.pointerLockElement ? "Lb" : "free")];
          DD.dropped > 0 && cD.push(`${DD.dropped} doubled spike copies dropped`), DD.lost > 0 && cD.push(`${DD.lost} records lost`), DD.suppressed > 0 && cD.push(`${DD.suppressed} outlier lines not shown`), (0, ID.j)("look", `1s: ${cD.join("; ")}`)
        }, this.dump = () => [`look records (${this.client}): nowMs,dtMs,rawX,rawY,turnedX,turnedY,outcome,vX,vY,limit`, ...this.records.lines(), "mousemove events: timeStamp,movementX,movementY,locked", ...this.events.lines()].join("\n")
      }
      start(DD, CD) {
        this.client = DD, this.take = CD;
        const {
          screen: cD
        } = window;
        (0, ID.j)("look", `start: ${DD} client, dpr ${window.devicePixelRatio}, screen ${cD.width}x${cD.height}, pointer lock ${document.pointerLockElement?"Lb":"free"}`), this.started || (this.started = !0, window.addEventListener("mousemove", this.onMouseMove, {
          capture: !0,
          passive: !0
        }), document.addEventListener("pointerlockchange", this.onLockChange), document.addEventListener("pointerlockerror", this.onLockError), document.addEventListener("visibilitychange", this.onVisibility), setInterval(this.flush, 1e3), (0, ID.h)("look", this.dump))
      }
      outlier(DD) {
        const CD = this.tally;
        CD.outliers >= 20 ? CD.suppressed++ : (CD.outliers++, (0, ID.j)("look", DD))
      }
      eventOutlier(DD) {
        const CD = this.tally;
        CD.eventLines >= 10 ? CD.suppressed++ : (CD.eventLines++, (0, ID.j)("look", DD))
      }
      takeRecords() {
        var DD;
        const CD = null === (DD = this.take) || void 0 === DD ? void 0 : DD.call(this);
        if (CD && CD.length >= 2) {
          this.tally.lost += CD[0], this.tally.dropped += CD[1];
          for (let DD = 2; DD + 10 <= CD.length; DD += 10) this.record(CD, DD)
        }
      }
      droppedCopy() {
        this.tally.dropped++
      }
      endTake() {
        this.takeRecords(), this.take = null
      }
    }
    let MD = null;

    function tD(DD) {
      let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return MD ??= new yD, MD.start(DD, CD), MD.record
    }

    function ZD() {
      var DD;
      null === (DD = MD) || void 0 === DD || DD.endTake()
    }

    function oD() {
      var DD;
      null === (DD = MD) || void 0 === DD || DD.droppedCopy()
    }
  },
  38314: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => dC,
      f: () => RC,
      j: () => kC
    });
    var ID = cD(3501),
      pD = cD(162),
      iD = cD(194),
      fD = cD(630),
      bD = cD(36),
      QD = cD(2642),
      wD = cD(3583),
      SD = cD(3563),
      BD = cD(1221);
    const yD = new WeakMap;
    class MD {
      constructor(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
          ywD: !0
        };
        this.callbacks = CD, this.options = cD, this.lCD = void 0, this.sessionId = void 0, this.WH = [], this.MwD = !1, this.Lt = !1, this.twD = void 0, this.YH = 0, this.sID = 0, this.ZwD = (DD, CD) => {
          if (this.Lt) return;
          const cD = Number(DD);
          this.MwD ? this.vwD(cD, CD) : this.WH.push({
            id: cD,
            payload: CD
          })
        }, this.dispose = () => {
          this.Lt || (this.Lt = !0, yD.delete(this), this.WH.length = 0, this.twD())
        }, this.lCD = DD, this.sessionId = DD.sessionId, yD.set(this, []), this.twD = this.NwD()
      }
      gwD(DD) {
        this.twD(), this.lCD = DD, this.sessionId = DD.sessionId, this.YH = 0, this.sID = 0, this.twD = this.NwD()
      }
      get jH() {
        return this.sID
      }
      NwD() {
        const DD = this.lCD.Qm("*", this.ZwD);
        return this.options.ywD && this.lCD.Zm(this.dispose), DD
      }
      vwD(DD, CD) {
        try {
          (0, wD.tc)(DD) && (CD = (0, wD.c)(DD, SD.lt.from(CD)));
          const cD = yD.get(this)[DD];
          if ("function" !== typeof cD) {
            if (this.callbacks.XwD) return void this.callbacks.XwD(DD, CD);
            throw new Error(`No onMessage handler registered for message id ${DD}`)
          }
          cD(CD)
        } catch (cD) {
          this.callbacks.mwD(`Error in onMessage ${DD} with payload ${JSON.stringify(CD)}`, cD)
        } finally {
          this.YH++
        }
      }
      nwD() {
        for (const {
            id: DD,
            payload: CD
          }
          of this.WH) {
          if (this.Lt) break;
          this.vwD(DD, CD)
        }
        this.WH.length = 0
      }
      jCD() {
        return this.Lt
      }
      OwD() {
        if (this.MwD || this.Lt) throw new Error("Trying to getOnMessageRegistrationHandler after registration finished");
        return {
          Qm: (DD, CD) => {
            if (this.MwD || this.Lt) throw new Error("Trying to call onMessage after registration finished");
            this.Qm(DD, CD)
          },
          finishRegistration: () => {
            if (this.Lt) throw new Error("Cannot finish message registration after disposal");
            this.MwD = !0, this.nwD()
          }
        }
      }
      Qm(DD, CD) {
        var cD, ID;
        null === (cD = (ID = this.callbacks).PwD) || void 0 === cD || cD.call(ID);
        const pD = yD.get(this);
        for (; DD > pD.length;) pD[pD.length] = null;
        pD[DD] = CD
      }
      send(DD, CD) {
        this.HwD(), (0, BD.C)(CD) ? this.lCD.vU(DD, CD) : this.lCD.send(DD, CD)
      }
      HwD() {
        var DD, CD;
        (this.sID++, 5 === tD++) && (null === (DD = (CD = this.callbacks).PwD) || void 0 === DD || DD.call(CD), tD = 0)
      }
      iN() {
        this.dispose(), this.lCD.iN()
      }
      leave() {
        this.dispose(), this.lCD.leave()
      }
    }
    let tD = 0;
    var ZD = cD(3516);
    class oD extends MD {
      constructor(DD) {
        super(DD, {
          PwD: () => {
            (0, bD.k)(!0) && (0, ID.xH)()
          },
          mwD: (DD, CD) => {
            var cD;
            null === (cD = (0, QD.i)()) || void 0 === cD || cD.dZ(DD, CD)
          }
        }, {
          ywD: !1
        }), (0, ZD.f)(DD)
      }
      sH(DD, CD) {
        return !!(0, ZD.l)((0, ZD.c)(), this.lCD, DD, CD) && (this.HwD(), !0)
      }
      gwD(DD) {
        this.UwD(), super.gwD(DD), (0, ZD.f)(DD)
      }
      iN() {
        super.iN(), this.UwD()
      }
      UwD() {
        this.lCD.yN.Pt.mq = void 0
      }
    }
    var vD = cD(20),
      ND = cD(1928),
      gD = cD(1701),
      XD = cD(35879);

    function mD(DD, CD, cD, ID, pD) {
      let iD = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (!DD.Km.JDD(DD.aJ)) return console.log("Got resync inven but don't have inven component"), void CD.acknowledge(ID);
      iD && console.error("Had to sync inven"), CD.O4(ID, pD) && cD.Uo("chestToggleFromServer", !1, !0), cD.Uo("syncedInvenFromServer")
    }
    var nD = cD(38323),
      OD = cD(38331),
      PD = cD(37428),
      HD = cD(37194),
      UD = cD(624),
      xD = cD(37782);

    function qD(DD, CD, cD) {
      const ID = function(DD) {
          const CD = new Int32Array(DD.length * xD.e);
          return DD.forEach(((DD, cD) => {
            const ID = cD * xD.e;
            if (4 === DD.length) {
              const [cD, pD, iD, fD] = DD;
              CD.set([cD, pD, iD, cD, pD, iD, fD], ID)
            } else {
              const [cD, pD, iD, fD, bD, QD, wD] = DD;
              CD.set([cD, iD, bD, pD, fD, QD, wD], ID)
            }
          })), CD
        }(cD),
        pD = (CD, cD, ID, pD) => {
          DD.setBlockNoMulti(CD, cD, ID, pD, !0)
        };
      DD.client.gameRecorder.isCapturing() ? (0, xD.fb)(ID, (0, xD.db)(ID), pD) : DD.ny.Zy.Al(ID, {
        wL: pD,
        isHookId: CD => DD.blockChangeHasHooks(CD),
        watched: () => function(DD, CD, cD) {
          const ID = [],
            pD = (DD, CD, cD) => {
              ID.push(DD, CD, cD)
            },
            iD = new Set;
          for (let fD = 0; fD < cD.length; fD += xD.e)
            for (let CD = (0, UD.I)(cD[fD]); CD <= (0, UD.I)(cD[fD + 3]); CD++)
              for (let ID = (0, UD.I)(cD[fD + 1]); ID <= (0, UD.I)(cD[fD + 4]); ID++)
                for (let bD = (0, UD.I)(cD[fD + 2]); bD <= (0, UD.I)(cD[fD + 5]); bD++) {
                  const cD = `${CD}|${ID}|${bD}`;
                  iD.has(cD) || (iD.add(cD), DD.blockDataOwner.forEachDataCell(CD, ID, bD, pD))
                }
          return CD.forEachCell(pD), Int32Array.from(ID)
        }(DD, CD, ID)
      }), DD.ny.Y_()
    }
    var JD = cD(36509),
      KD = cD(38335),
      aD = cD(38339),
      VD = cD(1011),
      zD = cD(1937);
    var jD = cD(4301);

    function lD(DD) {
      const CD = DD.Zy;
      let cD = 0,
        pD = -1,
        fD = -1 / 0,
        bD = null,
        QD = !0;
      const SD = () => {
        if (++cD % 10 !== 0) return;
        const SD = (0, ID.getLastReceivedPacketId)();
        if (SD <= pD) return;
        const [BD, yD, MD] = DD.Km.FX(DD.aJ), tD = ! function(DD) {
          var CD;
          let cD = null === (CD = DD.Km.ZCD(DD.aJ)) || void 0 === CD ? void 0 : CD.qt;
          if (void 0 === cD) return !1;
          const ID = new Set;
          for (; void 0 !== cD && !ID.has(cD);) {
            var pD;
            ID.add(cD);
            const CD = DD.Km.getState(cD, "smoothToServerPos"),
              iD = Array.isArray(CD) ? null : null === CD || void 0 === CD ? void 0 : CD.serverPosition;
            if (iD) {
              const CD = DD.Km.FX(cD);
              if (Math.abs(CD[0] - iD[0]) > 10 || Math.abs(CD[1] - iD[1]) > 10 || Math.abs(CD[2] - iD[2]) > 10) return !0
            }
            cD = null === (pD = DD.Km.ZCD(cD)) || void 0 === pD ? void 0 : pD.qt
          }
          return !1
        }(DD) && function(DD, CD, cD, ID) {
          const pD = iD.h.Wt;
          for (let iD = 0; iD < DD.length; iD++) {
            const fD = DD[iD];
            if (!(0, jD.i)(CD, cD, ID, fD[0] * pD, fD[1] * pD, fD[2] * pD)) return !1
          }
          return !0
        }(CD.Ho.Tt, BD, yD, MD), ZD = null === bD || Math.abs(BD - bD[0]) > 8 || Math.abs(yD - bD[1]) > 8 || Math.abs(MD - bD[2]) > 8, oD = !QD || ZD || performance.now() - fD >= 1e4;
        QD = tD, tD && oD && (pD = SD, fD = performance.now(), bD = [BD, yD, MD], (0, ID.sendColyMessage)(wD.eg, {
          aw: SD
        }))
      };
      return DD.on("wy", SD), () => {
        DD.off("wy", SD)
      }
    }
    var LD = cD(36125),
      TD = cD(335),
      GD = cD.n(TD),
      RD = cD(6212),
      kD = cD(37460),
      dD = cD(37180),
      YD = cD(37154),
      WD = cD(4321),
      sD = cD(37481),
      ED = cD(37303),
      eD = cD(36748),
      uD = cD(37055),
      hD = cD(38344),
      rD = cD(36113),
      AD = cD(36122),
      FD = cD(38353),
      DC = cD(38356),
      CC = cD(3460),
      cC = cD(1508),
      IC = cD(2635),
      pC = cD(2737),
      iC = cD(37630),
      fC = cD(36422),
      bC = cD(4562),
      QC = cD(38388),
      wC = cD(37472),
      SC = cD(4068),
      BC = cD(36501),
      yC = cD(36591),
      MC = cD(37489),
      tC = cD(38362),
      ZC = cD(38369),
      oC = cD(36744);
    class vC {
      constructor(DD, CD, cD, ID) {
        this.gameNameWithVariation = DD, this.ny = cD, this.connectionResume = ID, this.stateReplicationHandler = void 0, this.stopChunkReports = () => {}, this.replayResume = null, this.stateReplicationHandler = new ZC.e(CD, this.ny)
      }
      setupStateReplicationHandlers() {
        this.stateReplicationHandler.setup(), (0, ID.onGameResetOnce)((() => {
          this.stateReplicationHandler.dispose()
        }))
      }
      gwD(DD) {
        this.stateReplicationHandler.dispose(), this.stateReplicationHandler = new ZC.e(DD, this.ny), this.stateReplicationHandler.setup()
      }
      clearBlockRules() {
        const DD = this.ny.Zy;
        DD.PCD = new Set, DD.qCD = new Set, DD.HCD = new Set, DD.JCD = new Set, DD.xCD = [], DD.KCD = [], DD.YV = new Set, DD.li = [], DD.sV = []
      }
      clearUiRequestsAndQTEs() {
        bC.e.reset(), (0, OD.c)()
      }
      startChunkReports() {
        const DD = function(DD) {
            let CD = null,
              cD = -1 / 0,
              pD = null;
            const iD = () => {
                pD = null;
                const iD = Math.ceil(DD.dU[0]),
                  fD = Math.ceil(DD.dU[1]);
                CD && CD[0] === iD && CD[1] === fD || (CD = [iD, fD], cD = performance.now(), (0, ID.sendColyMessage)(wD.ag, {
                  Bf: iD,
                  yf: fD
                }))
              },
              fD = () => {
                null === pD && (pD = setTimeout(iD, Math.max(0, cD + 250 - performance.now())))
              };
            return iD(), DD.on("addRemoveDistanceChanged", fD), () => {
              DD.off("addRemoveDistanceChanged", fD), null !== pD && (clearTimeout(pD), pD = null)
            }
          }(this.ny.Zy),
          CD = lD(this.ny);
        this.stopChunkReports = () => {
          DD(), CD()
        }
      }
      restartChunkStreaming() {
        (0, uD.o)(this.ny, (0, QD.e)().recentChunkEdits.chunksEditedSince(this.connectionResume.getDroppedAt() - hD.c)), this.startChunkReports()
      }
      setupOnMessageListeners(DD, CD) {
        const cD = this.ny,
          pD = this.gameNameWithVariation;
        DD.Qm(wD.Cc, (DD => {
          let {
            Ec: CD,
            uc: ID,
            hc: pD,
            Ac: iD,
            Fc: fD,
            DI: bD,
            CI: QD,
            cI: wD,
            II: SD
          } = DD;
          if (!cD.Km.R7(CD, "itemState")) return void(0, dD.i)(cD, CD, [fD, bD, QD], ID, {
            amount: pD,
            attributes: JSON.parse(iD),
            cI: wD,
            size: SD
          });
          const BD = cD.Km.getState(CD, "itemState");
          BD.amount = pD, BD.cI = wD, BD.creationTime = Date.now(), (0, YD.setServerPosition)(cD.Km.getState(CD, "smoothToServerPos"), fD, bD, QD)
        })), DD.Qm(wD.nb, (DD => {
          (0, JD.b)(cD).setCantPickUp(DD, !0), cD.Km.R7(DD, "itemState") && (cD.Km.getState(DD, "itemState").cI = !0)
        })), DD.Qm(wD.Yd, (DD => {
          (0, JD.b)(cD).setCantPickUp(DD, !1), cD.Km.R7(DD, "itemState") && (cD.Km.getState(DD, "itemState").cI = !1)
        })), DD.Qm(wD.Zc, (DD => {
          ND.d.applyNewClientOptions(DD)
        })), DD.Qm(wD.bd, (DD => {
          let {
            eId: CD,
            settings: ID
          } = DD;
          (0, yC.h)(CD);
          for (const cD in ID)(0, yC.e)(CD, cD, ID[cD]);
          if ("canSee" in ID && cD.Km.R7(CD, "hidingMeshManager")) {
            const DD = cD.Km.getState(CD, "hidingMeshManager");
            DD.canSee = (0, MC.d)("canSee", ID.canSee), DD._forceUpdate = !0
          }
        })), DD.Qm(wD.Ve, (DD => {
          let {
            Cc: CD,
            Ic: pD,
            fc: iD,
            bc: fD
          } = DD;
          const bD = [pD, iD, fD];
          cD.Km.setPosition(cD.aJ, bD), (0, ID.sendColyMessage)(wD.Dg, {
            KS: CD,
            aS: WD.h
          }), vD.i.Uo("localPlayerTeleported", {
            pos: bD,
            isCorrection: !1
          })
        })), DD.Qm(wD.md, (DD => {
          let {
            ip: CD,
            bp: cD,
            Qp: ID,
            wp: pD
          } = DD;
          this.stateReplicationHandler.setUpIfQueued(CD);
          const iD = [cD, ID, pD];
          vD.i.Uo(`otherPlayerTeleported|${CD}`, {
            pos: iD
          })
        })), DD.Qm(wD.Bd, (DD => {
          let {
            Kp: CD,
            ap: pD,
            Vp: iD,
            zp: fD,
            jp: bD,
            lp: QD,
            Lp: SD,
            Gp: BD,
            Tp: yD,
            dp: MD
          } = DD;
          const tD = [pD, iD, fD];
          cD.Km.setPosition(cD.aJ, tD);
          const ZD = cD.Km.QDD(cD.aJ),
            oD = cD.Km.Yz(cD.aJ);
          GD().set(oD.qV, 0, 0, 0), GD().set(oD.JV, 0, 0, 0), GD().set(oD.lb, bD, QD, SD), oD.KV(), ZD._flying = null !== MD, MD ? (ZD.flyAccel.Yp = MD.Yp, ZD.flyAccel.Wp = MD.Wp) : ZD.flyAccel.reset(), BD && ZD.movementType === RD.n.GLIDING && (ZD.Rp = BD.Rp, GD().copy(ZD.kp, BD.kp)), (0, ID.sendColyMessage)(wD.Dg, {
            KS: CD,
            aS: WD.h
          }), vD.i.Uo("localPlayerTeleported", {
            pos: tD,
            isCorrection: !0
          })
        }));

        function iD() {
          return cD.Km.KDD(cD.aJ)
        }
        DD.Qm(wD.xb, (DD => {
          let {
            chatMsgId: CD,
            content: cD,
            chatterEId: ID
          } = DD;
          vD.i.Uo("chat", {
            serverChatMsgId: CD,
            content: cD,
            chatterEId: ID
          }, !0)
        })), DD.Qm(wD.sd, (DD => {
          IC.b.onReceiveColyseusPing(DD)
        })), DD.Qm(wD.ze, (DD => {
          let {
            key: CD,
            value: cD
          } = DD;
          (0, gD.setCookie)(pD, CD, cD)
        })), DD.Qm(wD.De, (DD => {
          vD.i.Uo("setDiscordReportKey", DD)
        })), (0, ID.onGameResetOnce)((() => {
          this.stopChunkReports()
        })), DD.Qm(wD.vc, (CD => {
          const {
            jC: pD,
            lC: iD
          } = CD;
          if ((0, ID.setAdjustment)(iD), this.connectionResume.onInitialInfo(CD.LC, CD.TC), ID.offlineInputReplay.lH(CD.RC), this.connectionResume.isResuming()) {
            console.log("Resumed the connection as eId", pD);
            try {
              null === CD.kC && (0, QD.e)().client.inventoryPrediction.dropPending(), this.stopChunkReports(), this.clearBlockRules(), ND.d.apply({
                shopInfo: null,
                _shopVersion: zD.c
              });
              const ID = cD.Km.aDD(cD.aJ);
              ID.Hc && (ID.chestClosed(), vD.i.Uo("chestToggleFromServer", !1, !0)), this.clearUiRequestsAndQTEs(), vD.i.Uo("initInfoReceived", DD)
            } finally {
              const DD = null === CD.kC ? null : {
                sync: null,
                endSeq: null
              };
              this.replayResume = DD, this.connectionResume.onResumeInitialInfo(CD.kC, (() => {
                DD.endSeq = (0, QD.e)().client.inventoryPrediction.lastActionSeq
              })), null === DD && this.restartChunkStreaming()
            }
          } else console.log("Local client is eId", pD), vD.i.Uo("loadingScreenState", "loadingPage:loadingWorld"), cD.o9 = pD, cD.Km.R7(cD.aJ, cD.Km.names.entityName) && cD.Km.mJ(cD.aJ, cD.Km.names.entityName), (0, QD.e)().setEntityName(cD.o9, (0, QD.e)().getRawEntityName(cD.aJ)), cD.KJ[cD.o9] = {}, cD.Km.gJ(cD.aJ, cD.Km.names.entityName), vD.i.Uo("initInfoReceived", DD), this.startChunkReports(), fD.client.onServerConnectionFinalised()
        })), DD.Qm(wD.ke, (() => {
          this.connectionResume.isResuming() ? this.connectionResume.onResumed((() => {
            const DD = this.replayResume;
            if (this.replayResume = null, !DD) return;
            this.restartChunkStreaming();
            const {
              inventoryPrediction: CD
            } = (0, QD.e)().client, {
              sync: pD
            } = DD, iD = new Set(ID.offlineInputReplay.takeDroppedActions());
            if (pD) {
              var fD;
              const ID = null !== (fD = DD.endSeq) && void 0 !== fD ? fD : CD.lastActionSeq;
              CD.forget((DD => DD > pD.Kc && DD <= ID || iD.has(DD))), mD(cD, CD, vD.i, pD.Kc, pD.load)
            } else CD.dropPending(), CD.askForSnapshot()
          })) : console.warn("ResumeComplete arrived without a resume")
        })), DD.Qm(wD.We, (DD => {
          vD.i.Uo("TopRightHelper", DD, !0)
        })), DD.Qm(wD.Ed, (DD => {
          let {
            type: CD,
            location1: cD,
            location2: ID,
            location3: pD,
            score: iD
          } = DD;
          (0, pC.x)({
            type: CD,
            location1: cD,
            location2: ID,
            location3: pD,
            score: iD
          })
        })), DD.Qm(wD.je, (DD => {
          let {
            type: CD,
            resourceType: cD,
            amount: ID,
            category: pD,
            itemName: iD
          } = DD;
          (0, pC.A)({
            type: CD,
            resourceType: cD,
            amount: ID,
            category: pD,
            itemName: iD
          })
        })), DD.Qm(wD._, (DD => {
          cD.Zy.PCD.add(DD), cD.Zy.qCD.delete(DD)
        })), DD.Qm(wD.eb, (DD => {
          cD.Zy.qCD.add(DD), cD.Zy.PCD.delete(DD)
        })), DD.Qm(wD._d, (DD => {
          cD.Zy.qCD.delete(DD), cD.Zy.PCD.delete(DD)
        })), DD.Qm(wD.db, (DD => {
          cD.Zy.HCD.add(DD), cD.Zy.JCD.delete(DD)
        })), DD.Qm(wD.lb, (DD => {
          cD.Zy.JCD.add(DD), cD.Zy.HCD.delete(DD)
        })), DD.Qm(wD.ce, (DD => {
          cD.Zy.JCD.delete(DD), cD.Zy.HCD.delete(DD)
        })), DD.Qm(wD.cb, (DD => {
          (0, BD.hb)(DD, cD.Zy.KCD), (0, BD.hb)(DD, cD.Zy.xCD), cD.Zy.xCD.push(DD)
        })), DD.Qm(wD.ib, (DD => {
          (0, BD.hb)(DD, cD.Zy.xCD), (0, BD.hb)(DD, cD.Zy.KCD), cD.Zy.KCD.push(DD)
        })), DD.Qm(wD.$d, (DD => {
          (0, BD.hb)(DD, cD.Zy.xCD), (0, BD.hb)(DD, cD.Zy.KCD)
        })), DD.Qm(wD.jf, (DD => {
          let {
            kc: CD,
            dc: ID
          } = DD;
          ID ? cD.Zy.YV.delete(CD) : cD.Zy.YV.add(CD)
        })), DD.Qm(wD.hf, (DD => {
          let {
            li: CD,
            Li: ID
          } = DD;
          fD.updateWalkThroughRect(cD.aJ, CD, ID)
        })), (0, ID.onGameResetOnce)((() => {
          this.clearBlockRules()
        })), DD.Qm(wD.Te, (DD => {
          (0, nD.d)(DD)
        })), DD.Qm(wD.oc, (DD => {
          PD.e.applyServerUpdate(DD)
        })), DD.Qm(wD.pb, (DD => {
          fD.applyServerBlocks((() => {
            ! function(DD, CD) {
              for (const {
                  Ti: cD,
                  Gi: ID
                }
                of CD) {
                const CD = HD.e[ID];
                if (CD) {
                  const {
                    compX: ID,
                    compY: pD,
                    compZ: iD,
                    mainMultiblock: fD
                  } = CD;
                  DD.Hx(cD[0] - ID, cD[1] - pD, cD[2] - iD, fD)
                }
              }
              for (const {
                  Ti: cD,
                  Gi: ID,
                  Ri: pD
                }
                of CD) DD.setBlockNoMulti(cD[0], cD[1], cD[2], ID, !0), DD.blockDataOwner.setBlockData(cD[0], cD[1], cD[2], null === pD ? void 0 : JSON.parse(pD)), DD.blockAdded(cD[0], cD[1], cD[2], ID)
            }(fD, DD)
          })), vD.i.Uo("changeBlockFail", DD), fD.client.triggerGameCallback("onChangeBlockFail", DD), vD.i.Uo("EditBoard", {
            pos: null
          }), vD.i.Uo("EditCodeBlock", {
            pos: null,
            canChangePos: null
          })
        })), DD.Qm(wD.qd, (DD => {
          let {
            pickUpItems: CD,
            pickUpAckSeq: cD
          } = DD;
          for (const {
              name: ID,
              amount: pD,
              attributes: fD
            }
            of CD) iD().pickUpItem({
            name: ID,
            amount: pD,
            typeObj: dD.u[ID],
            attributes: fD
          });
          (0, QD.e)().client.inventoryPrediction.serverChangeApplied(cD)
        })), DD.Qm(wD.He, (DD => {
          let {
            index: CD,
            name: ID,
            amount: pD,
            attributes: iD,
            setSlotAckSeq: fD
          } = DD;
          const bD = cD.Km.aDD(cD.aJ);
          (CD < bD.playerInventory.numSlots || bD.Hc || bD.inCreative) && bD.setItemSlot(CD, ID, pD, iD), (0, QD.e)().client.inventoryPrediction.serverChangeApplied(fD)
        })), DD.Qm(wD.Se, (DD => {
          let {
            Oc: CD,
            Jc: ID,
            Kc: pD
          } = DD;
          const {
            inventoryPrediction: iD
          } = (0, QD.e)().client, fD = () => {
            cD.Km.aDD(cD.aJ).loadFromString(CD)
          };
          this.replayResume && (this.replayResume.sync = {
            Kc: pD,
            load: fD
          }), mD(cD, iD, vD.i, pD, fD, ID)
        })), DD.Qm(wD.yc, (DD => {
          (0, QD.e)().client.inventoryPrediction.acknowledge(DD)
        })), DD.Qm(wD.K, (DD => {
          let {
            bi: CD,
            Qi: cD,
            Si: ID,
            Bi: pD
          } = DD;
          (0, QD.e)().client.itemDropPrediction.onActionItemDrops(CD, cD, ID, pD)
        })), DD.Qm(wD.Jb, (DD => {
          iD().clearInventory(), (0, QD.e)().client.inventoryPrediction.serverChangeApplied(DD)
        })), DD.Qm(wD.Jc, (DD => {
          let {
            leaveEventType: CD,
            category: cD,
            subCategory: ID,
            value: pD
          } = DD;
          (0, pC.G)({
            leaveEventType: CD,
            category: cD,
            subCategory: ID,
            value: pD
          })
        })), DD.Qm(wD.Vb, (DD => {
          let {
            cat1: CD,
            cat2: cD,
            cat3: ID,
            value: pD
          } = DD;
          (0, pC.q)({
            cat1: CD,
            cat2: cD,
            cat3: ID,
            value: pD
          })
        }));
        const fD = (0, QD.e)();
        DD.Qm(wD.Pb, (DD => {
          fD.applyServerBlocks((() => {
            qD(fD, PD.e, DD)
          }))
        })), DD.Qm(wD.Ie, (DD => {
          vD.i.Uo("setSelectedInventorySlotI", DD, !0)
        })), DD.Qm(wD.Gc, (DD => {
          let {
            category: CD,
            timeframe: cD,
            data: ID
          } = DD;
          vD.i.Uo("leaderboardResponse", {
            category: CD,
            timeframe: cD,
            data: ID
          })
        })), DD.Qm(wD.Z, (DD => {
          let {
            Di: CD,
            Ci: cD
          } = DD;
          this.stateReplicationHandler.setUpIfQueued(CD), CD = (0, LD.b)(CD), (0, QD.e)().client.gameRecorder.recordBulletShot(CD, cD), vD.i.Uo(`bulletShot|${CD}`, {
            bulletDirections: cD
          })
        })), DD.Qm(wD.rc, (DD => {
          let {
            Wc: CD,
            sc: cD
          } = DD;
          vD.i.Uo("damagedByOtherPlayer", {
            Wc: CD,
            direction: cD
          }, !0)
        })), DD.Qm(wD.xd, (DD => {
          vD.i.Uo("playerKilled", DD, !0), (0, QD.e)().client.gameRecorder.recordPlayerKilled(DD.deadEId, DD.killerEId, DD.withItem, DD.killstreak)
        })), DD.Qm(wD.Xb, (DD => {
          vD.i.Uo("customKillfeed", DD, !0), (0, QD.e)().client.gameRecorder.recordCustomKillfeed(DD.killer, DD.victim, DD.withItem)
        })), DD.Qm(wD.Fd, (DD => {
          let {
            FC: CD,
            Dc: ID
          } = DD;
          this.stateReplicationHandler.setUpIfQueued(CD);
          const pD = cD.Km.FDD(CD);
          null !== pD && void 0 !== pD && pD.isGun() && pD.reload(Date.now(), ID)
        })), DD.Qm(wD.Pe, (() => {
          vD.i.Uo("showShopTutorial", null, !0)
        })), DD.Qm(wD.Dd, (DD => {
          vD.i.Uo("progressBarUpdate", DD, !0)
        })), DD.Qm(wD.xc, (DD => {
          vD.i.Uo("middleScreenBarInitiate", {
            duration: DD.pI,
            iI: DD.iI,
            horizBarRemOffset: DD.fI
          }, !0)
        })), DD.Qm(wD.Qd, (() => {
          vD.i.Uo("middleScreenBarRemove", !0)
        })), DD.Qm(wD.me, (DD => {
          let {
            rC: CD,
            AC: ID
          } = DD;
          const pD = ID ? (0, wC.d)(cD, ID) : void 0;
          vD.i.Uo("sendHitmarker", {
            rC: CD,
            screenPos: pD
          }, !0)
        })), DD.Qm(wD.Ce, (DD => {
          let {
            id: CD,
            position: cD,
            style: ID,
            rp: pD,
            Fp: iD
          } = DD;
          vD.i.Uo("setDirectionArrow", {
            id: CD,
            position: cD,
            style: ID,
            text: (0, wD.x)(pD),
            Fp: iD
          }, !0)
        })), DD.Qm(wD.Hb, (DD => {
          let {
            id: CD
          } = DD;
          vD.i.Uo("clearDirectionArrow", {
            id: CD
          }, !0)
        })), DD.Qm(wD.N, (DD => {
          let {
            yi: CD,
            Mi: ID,
            animationScript: pD,
            Zi: iD,
            oi: fD,
            Ni: bD,
            gi: wD
          } = DD;
          CD = (0, LD.b)(CD);
          const SD = null === pD && null !== bD ? (0, KD.g)(bD, wD) : pD;
          (0, QD.e)().client.gameRecorder.recordAnimateEntity(CD, ID, SD, iD, fD), (0, JD.b)(cD).animations.animateEntity(CD, ID, pD, iD, fD, bD, wD), null !== pD || CD === cD.aJ && ID === BC.d.Emote && (0, QD.e)().client.cameraController.endTemporaryThirdPerson()
        })), DD.Qm(wD.cf, (DD => {
          let {
            lc: CD,
            Lc: cD
          } = DD;
          if (fD.vG(CD[0], CD[1], CD[2])) {
            const DD = (0, QD.e)().hN(CD[0], CD[1], CD[2]);
            (0, QD.e)().updateMailboxContents(CD[0], CD[1], CD[2], DD, cD)
          }
        })), DD.Qm(wD.Ab, (DD => {
          let {
            ki: CD,
            Yi: ID,
            Wi: pD,
            si: iD,
            Ei: fD,
            ui: bD,
            Ai: wD,
            Fi: SD
          } = DD;
          const BD = cD.Km.aDD(cD.aJ);
          if (bD) {
            const {
              Pc: DD,
              Kc: CD
            } = SD;
            return (0, QD.e)().client.inventoryPrediction.O4(CD, (() => {
              BD.chestRefreshed(ID, pD, iD, wD, DD)
            })) && vD.i.Uo("chestToggleFromServer", !1, !0), void vD.i.Uo("chestRefreshedFromServer")
          }(CD || BD.Hc) && (CD ? (BD.chestOpened(ID, pD, iD, fD, wD), null !== fD && (0, QD.e)().client.ironChestPasskeyCache.onChestOpened(iD, fD)) : BD.chestClosed(), vD.i.Uo("chestToggleFromServer", CD, !0))
        })), DD.Qm(wD.$b, (DD => {
          let {
            craftingRecipeItemName: CD,
            recipesForItem: ID
          } = DD;
          CD ? fD.craftingManager.editRecipesForPlayer(cD.aJ, CD, ID) : fD.craftingManager.resetAllPlayerRecipes(cD.aJ), vD.i.Uo("craftingRecipesEdited", {
            itemName: CD,
            recipesForItem: ID
          })
        })), DD.Qm(wD.Je, (DD => {
          let {
            vehicleEId: CD,
            overrides: cD
          } = DD;
          (0, QD.e)().applyRiddenVehicleSettingOverrides(CD, cD)
        })), DD.Qm(wD.ff, (DD => {
          let {
            BC: CD,
            yC: ID,
            MC: pD
          } = DD;
          const iD = cD.Km.QDD(cD.aJ).physicsState.type === RD.p.SLEEPING && CD === RD.p.DEFAULT;
          (0, QD.e)().updatePositionAndPhysics(cD.aJ, {
            type: CD,
            tier: ID
          }, !0, pD), iD && (0, QD.e)().updateHeldVehicleStatus()
        })), DD.Qm(wD.tb, (DD => {
          let {
            Ep: CD,
            hp: ID
          } = DD;
          cD.Km.qDD(cD.aJ).setPose(CD, ID)
        })), DD.Qm(wD.le, (DD => {
          (0, tC.e)(DD)
        })), DD.Qm(wD.wd, (DD => {
          for (const CD of DD)(0, sD.y)(CD);
          vD.i.Uo("playerCosmeticsUpdated", DD, !0)
        })), DD.Qm(wD.T, (DD => {
          for (const CD of DD)(0, fC.e)(cD, CD)
        })), DD.Qm(wD.Lc, (DD => {
          let {
            yp: CD,
            Mp: ID,
            Zp: pD,
            vp: iD,
            Np: bD,
            Xp: QD,
            mp: wD
          } = DD;
          this.stateReplicationHandler.setUpIfQueued(CD), CD = (0, LD.b)(CD);
          const SD = cD.Km.WDD(CD);
          if (SD && (SD.lastHurtTime = performance.now()), (0, kD.playRigHurt)(cD, CD, QD), vD.i.Uo("lifeformHurt", {
              eId: CD,
              mp: wD
            }), ID) {
            const DD = (0, wC.d)(cD, ID.AC);
            vD.i.Uo("yourAttackHit", {
              rC: iD,
              screenPos: DD,
              hitSelf: CD === cD.aJ
            })
          }
          CD === cD.aJ && (fD.shakePlayerCamera(CD, bD / 40, 200), vD.i.Uo("closeShopOnDamaged", null), vD.i.Uo("damagedByOtherPlayer", {
            Wc: null,
            direction: QD,
            Np: bD
          }, !0));
          const BD = cD.Km.FX(CD);
          if (BD && (pD || iD)) {
            const DD = [BD[0], BD[1] + 1, BD[2]];
            pD && (0, ED.p)(cD, ED.B, DD, 15), iD && (0, ED.p)(cD, ED.t, DD, 10)
          }
        })), DD.Qm(wD.Kc, (DD => {
          let {
            qC: CD,
            JC: ID,
            KC: pD
          } = DD;
          (0, JD.b)(cD).setHealthFrac((0, LD.b)(CD), pD), vD.i.Uo("lifeformHealthChanged", {
            eId: (0, LD.b)(CD),
            JC: ID,
            KC: pD
          })
        })), DD.Qm(wD.W, (DD => {
          let {
            Ii: CD,
            ii: ID
          } = DD;
          (0, QD.e)().playerAttacked(cD.aJ, CD, ID)
        })), DD.Qm(wD.Fc, (DD => {
          (0, QD.e)().client.leaveGameUnwanted({
            reason: DD,
            requiresRefresh: !1,
            canReconnect: !1,
            automaticallyReconnect: !1
          }), (0, cC.navigatePreserveSearch)("/")
        })), DD.Qm(wD.Md, (DD => {
          let {
            aC: CD,
            VC: cD,
            zC: ID
          } = DD;
          iD().removeItemName(CD, cD), (0, QD.e)().client.inventoryPrediction.serverChangeApplied(ID)
        })), DD.Qm(wD.se, (DD => {
          const {
            fi: CD,
            yCD: ID
          } = (0, eD.e)([DD[0], DD[1], DD[2]]);
          oC.d.setLookDirection(cD, CD, ID), (0, uD.u)(CD, ID);
          const pD = cD.Km.qDD(cD.aJ);
          pD && (pD.heading = CD)
        })), DD.Qm(wD.we, (DD => {
          fD.client.cameraController.setCameraZoom(DD)
        })), DD.Qm(wD.Me, (DD => {
          let {
            sC: CD,
            EC: ID
          } = DD;
          fD.shakePlayerCamera(cD.aJ, CD, ID)
        })), DD.Qm(wD.Tb, (DD => {
          (0, CC.onCosmeticPackGranted)(DD)
        })), DD.Qm(wD.ne, (DD => {
          vD.i.Uo("serverUpdating", Date.now() + DD, !0)
        })), DD.Qm(wD.Vc, aD.d), DD.Qm(wD.jd, (DD => {
          let {
            id: CD,
            UD: cD
          } = DD;
          const {
            type: pD,
            params: iD
          } = (0, QC.h)(cD), fD = {
            ...iD
          };
          for (const ID of QC.d) ID in fD && fD[ID] && (fD[ID] = (0, wD.x)(fD[ID]));
          bC.e.queueQTE(CD, pD, fD).getResult().then((DD => {
            "boolean" === typeof DD && (0, ID.sendColyMessage)(wD.$h, {
              qteId: CD,
              qteResponse: DD
            })
          }))
        })), DD.Qm(wD.Sd, (DD => {
          bC.e.cancelQTE(DD)
        })), (0, ID.onGameResetOnce)((() => {
          bC.e.reset()
        })), DD.Qm(wD.kd, (DD => {
          let {
            id: CD,
            clientParameters: cD
          } = DD;
          (0, OD.g)(CD, cD)
        })), DD.Qm(wD.Ud, (DD => {
          (0, OD.i)(DD)
        })), DD.Qm(wD.$e, (DD => {
          let {
            text: CD,
            id: cD
          } = DD;
          (0, OD.m)(cD, CD, (DD => {
            (0, ID.sendColyMessage)(wD.vj, {
              Gb: cD,
              Rb: DD,
              kb: 5
            })
          }))
        })), DD.Qm(wD.ac, (DD => {
          let {
            IC: CD,
            pC: cD,
            iC: ID,
            fC: pD,
            bC: iD,
            QC: fD
          } = DD;
          CD = (0, LD.b)(CD), (0, QD.e)().client.updateEffect(CD, cD, {
            displayName: ID,
            icon: pD,
            duration: iD,
            level: fD
          })
        })), DD.Qm(wD.Hd, (DD => {
          let {
            IC: CD,
            pC: cD
          } = DD;
          CD = (0, LD.b)(CD), (0, QD.e)().client.removeEffect(CD, cD)
        })), DD.Qm(wD.Ec, (DD => {
          cD.Km.qDD(cD.aJ).jumpMultiplier.setMultiplierType("jumpEffectAmount", DD)
        })), DD.Qm(wD._e, (DD => {
          vD.i.Uo("ttbEffectMultiplier", DD)
        })), (0, ID.onGameResetOnce)((() => {
          cD.Km.qDD(cD.aJ).jumpMultiplier.setMultiplierType("jumpEffectAmount", 1)
        })), DD.Qm(wD.ed, (DD => {
          (0, ED.q)(cD, (0, BD.o)(DD))
        })), DD.Qm(wD.id, (DD => {
          SC.i[DD.sp] ? (0, ED.q)(cD, {
            ...SC.i[DD.sp],
            pos1: DD.pos1,
            pos2: DD.pos2
          }) : console.error(`Unknown preset id: ${DD.sp}`)
        })), DD.Qm(wD.td, (DD => {
          var CD, cD;
          let {
            Op: ID,
            Pp: pD,
            Hp: iD,
            Up: fD
          } = DD, {
            qp: bD,
            Jp: wD
          } = null !== fD && void 0 !== fD ? fD : {};
          const {
            xp: SD
          } = null !== fD && void 0 !== fD ? fD : {};
          bD = null !== (CD = bD) && void 0 !== CD ? CD : void 0, wD = null !== (cD = wD) && void 0 !== cD ? cD : void 0, "string" === typeof SD && this.stateReplicationHandler.setUpIfQueued(SD), (0, QD.e)().client.gameRecorder.recordPlaySound(ID, pD, iD, fD), rD.e.play((0, AD.c)(ID), pD, SD, bD, wD).rate(iD)
        })), DD.Qm(wD.qe, (DD => {
          let {
            pos: CD,
            data: cD
          } = DD;
          fD.blockDataOwner.setBlockData(CD[0], CD[1], CD[2], cD), fD.blockAdded(CD[0], CD[1], CD[2], fD.hN(CD[0], CD[1], CD[2]))
        })), DD.Qm(wD.od, (DD => {
          let {
            info: CD
          } = DD;
          vD.i.Uo("overShopInfo", CD, !0)
        })), DD.Qm(wD.jc, (DD => {
          let {
            wC: ID,
            SC: pD
          } = DD;
          CD.openShop(cD.aJ, ID, pD)
        })), DD.Qm(wD.Q, (DD => {
          cD.Km.Yz(cD.aJ).applyImpulse(DD)
        })), DD.Qm(wD.Ke, (DD => {
          const CD = cD.Km.Yz(cD.aJ);
          GD().set(CD.qV, 0, 0, 0), GD().set(CD.JV, 0, 0, 0), GD().copy(CD.lb, DD), CD.KV()
        })), DD.Qm(wD.Oc, (DD => {
          console.error(`[logErrorToConsole]: ${DD}`)
        })), DD.Qm(wD.ic, (DD => {
          let {
            Vi: CD,
            zi: cD,
            ji: ID
          } = DD;
          vD.i.Uo("flyingMiddleMessage", {
            content: (0, wD.x)(CD),
            zi: cD,
            ji: ID
          }, !0)
        })), DD.Qm(wD.lf, (DD => {
          const CD = DD === VD.g ? null : {
            message: `Currently loaded as variation: ${DD}`,
            type: "Warning"
          };
          vD.i.Uo("showPermanentBottomMessage", CD, !0)
        })), DD.Qm(wD.mc, (DD => {
          let {
            messageType: CD,
            data: cD
          } = DD;
          (0, FD.e)(CD) ? (0, FD.b)(CD, cD) : ("freeCamPerms" === CD && fD.client.freeCameraController.setPerms(cD.key, cD.value), fD.client.triggerGameCallback("onReceivedMessageFromServer", CD, cD))
        })), DD.Qm(wD.ub, (() => {
          const DD = cD.Km.FDD(cD.aJ);
          null !== DD && void 0 !== DD && DD.isChargeable() && DD.finishCharging(!1, Date.now())
        })), DD.Qm(wD.Jd, (DD => {
          let {
            np: CD
          } = DD;
          fD.craftingManager.removeRecipes(cD.aJ, CD), vD.i.Uo("craftingRecipesEdited", {
            itemName: CD,
            recipesForItem: []
          })
        })), DD.Qm(wD.ef, (DD => {
          for (const CD in DD) {
            const cD = DD[CD];
            for (const DD in cD) fD.client.meshCreator.handleParticleSystemUpdate(CD, DD, cD[DD])
          }
        })), (0, ID.onGameResetOnce)((() => {
          (0, iC.setFloatingYValue)(cD.Km.getState(cD.aJ, "physics"), cD.Km.fR(cD.aJ), null)
        })), DD.Qm(wD.ec, (DD => {
          let {
            eC: CD,
            uC: ID,
            hC: pD
          } = DD;
          const iD = (0, LD.b)(CD);
          if (iD === cD.aJ) {
            const DD = cD.Km.fR(cD.aJ).position;
            pD ??= Math.floor(DD[1]) - 1, (0, iC.setFloatingYValue)(cD.Km.getState(cD.aJ, "physics"), cD.Km.fR(cD.aJ), ID ? pD : null)
          }(0, JD.b)(cD).setFloating(iD, ID, pD);
          const fD = cD.Km.getState(iD, "floating");
          fD && (fD.isFloating = ID, fD.hC = ID ? pD : null)
        })), DD.Qm(wD.Nb, DC.e)
      }
    }
    window.addEventListener("beforeunload", (() => {}));
    var NC = cD(38396),
      gC = cD(38404),
      XC = cD(659),
      mC = cD(3032);
    class nC {
      constructor(DD, CD, cD, ID) {
        this.msgHandler = cD, this.listener = ID, this.session = void 0, this.attachedRoom = null, this.detachRoomListeners = null, this.suspended = !1, this.droppedAt = 0, this.session = new NC.e({
          reconnect: DD,
          isLive: () => ID.isLive(),
          onReconnected: DD => {
            this.resumeOnRoom(DD)
          },
          onGaveUp: (DD, CD) => {
            ID.onGaveUp(DD, CD)
          },
          freeze: CD,
          releaseSeat: CD => {
            DD(CD).then((DD => {
              DD.leave(!0)
            }), (DD => {
              console.warn("Couldn't release the held seat of a game left while reconnecting", DD)
            }))
          }
        })
      }
      onInitialInfo(DD, CD) {
        this.session.onInitialInfo(DD, CD)
      }
      isResuming() {
        return this.session.isResuming()
      }
      getDroppedAt() {
        return this.droppedAt
      }
      onResumeInitialInfo(DD, CD) {
        if (this.session.onResuming(), null === DD) {
          try {
            (0, QD.e)().client.itemDropPrediction.reset()
          } catch (cD) {
            console.error("Error dropping the item drop predictions on resuming", cD)
          }
          return ID.offlineInputReplay.discard(), void this.setSuspended(!1)
        }(0, QD.e)().client.itemDropPrediction.onResumeReplayOffered(), ID.offlineInputReplay.replayFrom(DD.YC, CD)
      }
      onResumed(DD) {
        this.setSuspended(!1), (0, ID.resendBeacons)();
        try {
          DD()
        } catch (CD) {
          console.error("Error completing the resume", CD)
        } finally {
          this.session.onResumed()
        }
      }
      attachRoom(DD) {
        const CD = (0, XC.e)((() => DD.connection.isOpen));
        DD.Zm(CD);
        const cD = new gC.d((() => {
          this.session.canHoldSeat() && this.listener.isLive() && (console.warn("The game server went silent, reconnecting"), this.onConnectionDropped(DD, "silent"), DD.leave(!1))
        }));
        DD.onStateChange((() => {
          cD.heard()
        }));
        const ID = CD => {
          CD.persisted || DD.leave(!0)
        };
        window.addEventListener("pagehide", ID), DD.Zm(((CD, cD) => {
          if (DD === this.attachedRoom && this.listener.isLive()) return (0, iD.k)(CD) && this.session.canHoldSeat() ? (console.warn(`Connection to the game server dropped with code ${CD}, reconnecting`), this.listener.onDropped(CD, cD), void this.onConnectionDropped(DD, String(CD))) : void this.listener.onRoomLeft(CD, cD)
        })), this.attachedRoom = DD, this.detachRoomListeners = () => {
          CD(), cD.dispose(), window.removeEventListener("pagehide", ID)
        }
      }
      dispose() {
        this.detachRoom(), this.session.leave(), this.setSuspended(!1)
      }
      setSuspended(DD) {
        DD !== this.suspended && (this.suspended = DD, (0, ID.setConnectionSuspended)(DD), (0, QD.e)().client.itemDropPrediction.setSuspended(DD))
      }
      detachRoom() {
        var DD;
        null === (DD = this.detachRoomListeners) || void 0 === DD || DD.call(this), this.detachRoomListeners = null, this.attachedRoom = null
      }
      onConnectionDropped(DD, CD) {
        (0, mC.h)("disconnect", "Left room", CD), this.isResuming() || (this.droppedAt = Date.now()), this.detachRoom(), ID.offlineInputReplay.onConnectionLost(), this.setSuspended(!0), this.session.onConnectionLost(DD.reconnectionToken)
      }
      resumeOnRoom(DD) {
        if (!this.listener.isLive()) return console.warn("Left the game while reconnecting, leaving the resumed room"), DD.leave(!0), void this.dispose();
        console.log("Reconnected to the game server, waiting for the game to resume"), (0, tC.r)(), ID.offlineInputReplay.onConnectionReplaced(), this.msgHandler.gwD(DD), this.listener.onReconnected(DD), this.attachRoom(DD)
      }
    }
    var OC = cD(3275),
      PC = cD(3280),
      HC = cD(1317),
      UC = cD(4476),
      xC = cD(2946),
      qC = cD(1077),
      JC = cD(37079),
      KC = cD(38409),
      aC = cD(8598),
      VC = cD(38418),
      zC = cD(1796),
      jC = cD(38423),
      lC = cD(1694),
      LC = cD(2644);

    function TC(DD) {
      var CD, cD;
      if ("object" !== typeof DD || null === DD) return {
        errType: typeof DD
      };
      const ID = DD;
      return {
        errType: null !== (CD = null === (cD = DD.constructor) || void 0 === cD ? void 0 : cD.name) && void 0 !== CD ? CD : "",
        errName: "string" === typeof ID.name ? ID.name : "",
        eventType: "string" === typeof ID.type ? ID.type : "",
        errStack: "string" === typeof ID.stack ? ID.stack.split("\n").slice(1).join(" | ") : ""
      }
    }

    function GC(DD) {
      if ("undefined" !== typeof ProgressEvent && DD instanceof ProgressEvent) return !0;
      if (!(DD instanceof Error)) return !1;
      const CD = DD.code;
      return "ServerError" === DD.name && void 0 === CD || "AbortError" === DD.name || "seat reservation expired." === DD.message || "early_leave" === DD.message
    }(0, ZD.o)((DD => {
      (0, mC.h)("wasm_net", DD)
    }));
    let RC = !0;

    function kC() {
      RC = !1
    }
    class dC {
      constructor(DD) {
        this.gameNameWithVariation = void 0, this.lobbyName = void 0, this.colyClient = void 0, this.userContext = void 0, this.joinedAt = null, this.checkSendPath = () => {}, this.ny = void 0, this.connectionResume = void 0, this.incomingMsgInitialisor = void 0, this.gameNameWithVariation = DD.gameNameWithVariation, this.lobbyName = DD.lobbyName, this.colyClient = DD.colyClient, this.userContext = DD.userContext
      }
      async connectToServer(DD, CD, cD) {
        ND.d.reset(), DD.KJ = {
          [DD.aJ]: {}
        }, DD.o9 = void 0, (0, tC.r)(), (0, QD.e)().removeAllEntityNames(), (0, QD.e)().setEntityName(DD.aJ, this.userContext.getPlayerName()), (0, HC.o)({
          lobbyName: this.lobbyName
        }), console.log("Waiting for clientConnection passed promise to resolve");
        const fD = (0, lC.e)();
        console.log("joining server with game", this.gameNameWithVariation, "lobbyName", this.lobbyName);
        const bD = performance.now(),
          wD = (0, VC.f)(this.userContext, (() => {
            const {
              roomName: ID,
              joinOptions: pD
            } = (0, XD.h)(this.userContext, this.gameNameWithVariation, this.lobbyName, CD, (DD => xC.e.isUsingCustomGameTexturePack(DD)));
            return pD.joinAdHold = fD, pD.renderBackend = (0, LC.b)(DD.XZ), (0, KC.c)((() => this.colyClient.joinOrCreate(ID, pD)), cD)
          }));
        return vD.i.Uo("loadingScreenState", "loadingPage:joiningLobby"), await wD.then((CD => {
          if (this.joinedAt = performance.now(), this.ny = DD, fD) {
            const DD = (0, lC.m)((() => {
              CD.send(pD.h)
            }));
            CD.Zm(DD), (0, ID.onGameResetOnce)(DD)
          }
          const cD = new oD(CD);
          this.connectionResume = new nC((DD => this.colyClient.reconnect(DD)), (CD => {
            DD.kU(CD)
          }), cD, {
            isLive: () => (0, QD.e)().client.getMsgHandler() === cD,
            onDropped: (DD, CD) => {
              (0, PC.f)(DD) || this.logUnrecognisedConnectionLoss(DD, void 0, {
                site: "drop",
                closeReason: null !== CD && void 0 !== CD ? CD : "",
                sinceJoined: this.sinceJoined()
              })
            },
            onRoomLeft: (DD, CD) => {
              this.onRoomLeft(DD, CD)
            },
            onReconnected: DD => {
              this.incomingMsgInitialisor.gwD(DD), this.checkSendPath = (0, JC.d)(cD, DD, ZD.p)
            },
            onGaveUp: (DD, CD) => {
              this.onResumeGaveUp(DD, CD)
            }
          }), this.connectionResume.attachRoom(CD), (0, ID.onGameResetOnce)((() => {
            this.connectionResume.dispose()
          }));
          const iD = cD.send,
            bD = cD.Qm,
            wD = cD.lCD.send,
            SD = cD.lCD.Qm,
            BD = cD.vwD;
          this.checkSendPath = (0, JC.d)(cD, CD, ZD.p);
          const yD = setInterval((() => {
            iD === cD.send && bD === cD.Qm && wD === cD.lCD.send && SD === cD.lCD.Qm && BD === cD.vwD || kC(), this.checkSendPath()
          }), 1e4);
          return (0, ID.onGameResetOnce)((() => {
            clearInterval(yD)
          })), {
            success: !0,
            successDetails: cD
          }
        })).catch((CD => {
          if (cD.aborted && CD === (0, zC.g)(cD)) return {
            success: !1,
            failDetails: {
              reason: "Left the game while it loaded",
              requiresRefresh: !1,
              canReconnect: !1
            }
          };
          if (CD instanceof jC.g) return console.warn("Seat request timed out", this.lobbyName, this.gameNameWithVariation), {
            success: !1,
            failDetails: {
              reason: CD.message,
              requiresRefresh: !1,
              canReconnect: !1,
              gameServerUnreachable: "timedOut"
            }
          };
          DD.dZ(`Failed to connect to bloxd room, check your internet connection. lobbyName: ${this.lobbyName}, gameNameWithVariation: ${this.gameNameWithVariation} code: ${CD.code}\n`, CD);
          const ID = CD.code;
          return ID === iD.e.serverUpdating.code ? (this.goToUpdateWaiting(), {
            success: !1,
            failDetails: {
              reason: iD.e.serverUpdating.text,
              requiresRefresh: !1,
              canReconnect: !0,
              goesToUpdateWaiting: !0
            }
          }) : {
            success: !1,
            failDetails: {
              ...this.onConnectionToServerLost(ID, CD.message, {
                site: "join",
                sinceJoinStart: (0, PC.d)(performance.now() - bD),
                ...TC(CD)
              }, GC(CD)),
              rematch: (0, KC.b)(CD),
              gameRefused: (0, aC.c)(CD)
            }
          }
        }))
      }
      setupServerListeners(DD, CD, cD) {
        vD.i.Uo("loadingScreenState", "loadingPage:loadingPlayerInfo"), this.incomingMsgInitialisor = new vC(this.gameNameWithVariation, CD.lCD, DD, this.connectionResume), this.incomingMsgInitialisor.setupStateReplicationHandlers();
        const pD = CD.OwD();
        this.incomingMsgInitialisor.setupOnMessageListeners(pD, cD), (0, ID.onConnectionToServerReady)(pD, CD), pD.finishRegistration()
      }
      dispose() {
        this.connectionResume.dispose()
      }
      onResumeGaveUp(DD, CD) {
        (0, qC.WZ)(new Error("Reconnect failed"), {
          ...(0, OC.j)(CD),
          game: this.gameNameWithVariation
        }), (0, mC.h)("disconnect", "Reconnect failed", CD.reason), (0, QD.e)().client.leaveGameUnwanted({
          reason: {
            translationKey: "general:lostConnection"
          },
          canReconnect: !DD,
          canPlayAgain: DD,
          requiresRefresh: !1,
          automaticallyReconnect: !1
        }), (0, cC.navigatePreserveSearch)("/")
      }
      sinceJoined() {
        return null === this.joinedAt ? "" : (0, PC.d)(performance.now() - this.joinedAt)
      }
      onRoomLeft(DD, CD) {
        var cD;
        if (DD === iD.e.gameOrPluginKick.code) return;
        if (console.log(`Left room with code ${DD}`), DD === iD.e.serverUpdating.code) return (0, mC.h)("disconnect", "Left room", "serverUpdating"), (0, QD.e)().client.leaveGame(this.getUpdateWaitingUrl()), void this.goToUpdateWaiting();
        this.ny.dZ(`Kicked from server with code ${DD}`, new Error);
        const ID = Object.keys(iD.e).find((CD => iD.e[CD].code === DD));
        (0, mC.h)("disconnect", "Left room", null !== ID && void 0 !== ID ? ID : String(DD));
        const pD = this.onConnectionToServerLost(DD, void 0, {
          site: "leave",
          closeReason: null !== CD && void 0 !== CD ? CD : "",
          sinceJoined: this.sinceJoined()
        });
        (0, QD.e)().client.leaveGameUnwanted({
          reason: `You have disconnected from the server.\n${pD.reason}`,
          canReconnect: pD.canReconnect,
          requiresRefresh: pD.requiresRefresh,
          automaticallyReconnect: null !== (cD = pD.automaticallyReconnect) && void 0 !== cD && cD
        }), (0, cC.navigatePreserveSearch)("/")
      }
      getUpdateWaitingUrl() {
        return (0, UC.D)(this.gameNameWithVariation, this.lobbyName)
      }
      goToUpdateWaiting() {
        (0, cC.navigatePreserveSearch)(this.getUpdateWaitingUrl())
      }
      onConnectionToServerLost(DD, CD, cD) {
        var ID;
        let pD = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (null !== (ID = CD) && void 0 !== ID && ID.endsWith(iD.o) && (this.userContext.invalidateTrafficCode(), CD = CD.replace(iD.o, "")), DD === iD.e.outdatedVersion.code) return console.error("Outdated client with version ", fD.c, ", refreshing page"), (0, gD.reloadBloxd)(), {
          reason: "Outdated client",
          requiresRefresh: !0,
          canReconnect: !1
        };
        if (DD === iD.e.loadRecaptchaError.code) return console.error("Load recaptcha error, refreshing page"), (0, gD.reloadBloxd)(), {
          reason: "Failed to load recaptcha",
          requiresRefresh: !0,
          canReconnect: !1
        };
        for (const fD in iD.e) {
          const {
            code: cD,
            text: ID,
            canReconnect: pD
          } = iD.e[fD];
          if (cD === DD) {
            console.log("matched known error", DD, "leaving game");
            return {
              reason: "" !== ID ? ID : CD || `Code: ${DD}`,
              requiresRefresh: !1,
              canReconnect: pD,
              automaticallyReconnect: cD === iD.e.customGameUpdated.code || cD === iD.e.duplicateLobbyNameError.code
            }
          }
        }
        return console.log("Didn't match known error, leaving game"), (0, PC.e)(DD) || pD ? console.warn("Connection lost", DD, CD) : this.logUnrecognisedConnectionLoss(DD, CD, cD), {
          reason: `Either your internet isn't working or this is a bug.\nCode: ${DD}`,
          requiresRefresh: !1,
          canReconnect: !1,
          gameServerUnreachable: pD ? "failed" : void 0
        }
      }
      logUnrecognisedConnectionLoss(DD, CD, cD) {
        (0, qC.WZ)(new Error("Unrecognised connection loss"), {
          code: String(DD),
          cause: null !== CD && void 0 !== CD ? CD : "",
          ...cD,
          game: this.gameNameWithVariation,
          ...(0, PC.j)()
        })
      }
    }
  },
  38369: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => Ec,
      g: () => Fc
    });
    var ID, pD, iD, fD, bD, QD, wD, SD, BD, yD, MD, tD, ZD, oD, vD, ND, gD, XD, mD, nD, OD, PD, HD, UD, xD, qD, JD, KD, aD, VD, zD, jD, lD, LD, TD, GD, RD, kD, dD, YD, WD, sD, ED, eD, uD, hD, rD, AD, FD, DC, CC, cC, IC, pC, iC, fC, bC, QC, wC, SC, BC, yC, MC, tC, ZC, oC, vC, NC, gC, XC, mC, nC, OC, PC, HC, UC, xC, qC, JC, KC, aC, VC, zC, jC, lC, LC, TC, GC, RC, kC, dC, YC, WC, sC, EC, eC, uC, hC, rC, AC = cD(20),
      FC = cD(36509),
      Dc = cD(38382),
      Cc = cD(38384),
      cc = cD(8811),
      Ic = cD(618),
      pc = cD(613),
      ic = cD(36139);
    let fc = (ID = (0, cc.type)("number"), pD = (0, cc.type)("number"), iD = (0, cc.type)("number"), fD = (0, cc.type)("number"), bD = (0, cc.type)("number"), QD = (0, cc.type)("number"), wD = (0, cc.type)("string"), SD = class extends cc.Schema {
        constructor() {
          super(...arguments), (0, Dc.c)(this, "id", BD, this), (0, Dc.c)(this, "amount", yD, this), (0, Dc.c)(this, "x", MD, this), (0, Dc.c)(this, "y", tD, this), (0, Dc.c)(this, "z", ZD, this), (0, Dc.c)(this, "size", oD, this), (0, Dc.c)(this, "attributes", vD, this)
        }
      }, BD = (0, Cc.d)(SD.prototype, "id", [ID], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), yD = (0, Cc.d)(SD.prototype, "amount", [pD], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), MD = (0, Cc.d)(SD.prototype, "x", [iD], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), tD = (0, Cc.d)(SD.prototype, "y", [fD], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), ZD = (0, Cc.d)(SD.prototype, "z", [bD], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), oD = (0, Cc.d)(SD.prototype, "size", [QD], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 1
        }
      }), vD = (0, Cc.d)(SD.prototype, "attributes", [wD], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "{}"
        }
      }), SD),
      bc = (ND = (0, cc.type)("string"), gD = (0, cc.type)("string"), XD = class extends cc.Schema {
        constructor() {
          super(...arguments), (0, Dc.c)(this, "itemName", mD, this), (0, Dc.c)(this, "enchantmentTier", nD, this)
        }
      }, mD = (0, Cc.d)(XD.prototype, "itemName", [ND], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), nD = (0, Cc.d)(XD.prototype, "enchantmentTier", [gD], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), XD),
      Qc = (OD = (0, cc.type)("string"), PD = (0, cc.type)("string"), HD = (0, cc.type)("number"), UD = (0, cc.type)("number"), xD = (0, cc.type)("number"), qD = (0, cc.type)("float32"), JD = (0, cc.type)("float32"), KD = (0, cc.type)("float32"), aD = (0, cc.type)("string"), VD = (0, cc.type)(["number"]), zD = (0, cc.type)("boolean"), jD = class extends cc.Schema {
        constructor() {
          super(...arguments), (0, Dc.c)(this, "type", lD, this), (0, Dc.c)(this, "name", LD, this), (0, Dc.c)(this, "x", TD, this), (0, Dc.c)(this, "y", GD, this), (0, Dc.c)(this, "z", RD, this), (0, Dc.c)(this, "xRotation", kD, this), (0, Dc.c)(this, "yRotation", dD, this), (0, Dc.c)(this, "zRotation", YD, this), (0, Dc.c)(this, "followingEId", WD, this), (0, Dc.c)(this, "followingOffset", sD, this), (0, Dc.c)(this, "shouldMatchFollowingEntityRotation", ED, this)
        }
      }, lD = (0, Cc.d)(jD.prototype, "type", [OD], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), LD = (0, Cc.d)(jD.prototype, "name", [PD], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return ""
        }
      }), TD = (0, Cc.d)(jD.prototype, "x", [HD], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), GD = (0, Cc.d)(jD.prototype, "y", [UD], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), RD = (0, Cc.d)(jD.prototype, "z", [xD], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), kD = (0, Cc.d)(jD.prototype, "xRotation", [qD], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), dD = (0, Cc.d)(jD.prototype, "yRotation", [JD], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), YD = (0, Cc.d)(jD.prototype, "zRotation", [KD], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), WD = (0, Cc.d)(jD.prototype, "followingEId", [aD], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), sD = (0, Cc.d)(jD.prototype, "followingOffset", [VD], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new cc.ArraySchema(0, 0, 0)
        }
      }), ED = (0, Cc.d)(jD.prototype, "shouldMatchFollowingEntityRotation", [zD], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !0
        }
      }), jD),
      wc = (eD = (0, cc.type)("float32"), uD = (0, cc.type)("float32"), hD = (0, cc.type)("boolean"), rD = (0, cc.type)("boolean"), AD = (0, cc.type)("float32"), FD = (0, cc.type)("boolean"), DC = (0, cc.type)("string"), CC = (0, cc.type)("string"), cC = (0, cc.type)("string"), IC = (0, cc.type)("string"), pC = (0, cc.type)(["number"]), iC = (0, cc.type)("number"), fC = (0, cc.type)({
        map: bc
      }), bC = class extends Qc {
        constructor() {
          super(...arguments), (0, Dc.c)(this, "scale", QC, this), (0, Dc.c)(this, "speed", wC, this), (0, Dc.c)(this, "jumping", SC, this), (0, Dc.c)(this, "crouching", BC, this), (0, Dc.c)(this, "cameraPitch", yC, this), (0, Dc.c)(this, "armSwinging", MC, this), (0, Dc.c)(this, "heldItemName", tC, this), (0, Dc.c)(this, "heldItemEnchantmentTier", ZC, this), (0, Dc.c)(this, "pose", oC, this), (0, Dc.c)(this, "ridingVehicleEId", vC, this), (0, Dc.c)(this, "meshOffset", NC, this), (0, Dc.c)(this, "baseRenderHeading", gC, this), (0, Dc.c)(this, "armour", XC, this)
        }
      }, QC = (0, Cc.d)(bC.prototype, "scale", [eD], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 1
        }
      }), wC = (0, Cc.d)(bC.prototype, "speed", [uD], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), SC = (0, Cc.d)(bC.prototype, "jumping", [hD], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), BC = (0, Cc.d)(bC.prototype, "crouching", [rD], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), yC = (0, Cc.d)(bC.prototype, "cameraPitch", [AD], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), MC = (0, Cc.d)(bC.prototype, "armSwinging", [FD], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), tC = (0, Cc.d)(bC.prototype, "heldItemName", [DC], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), ZC = (0, Cc.d)(bC.prototype, "heldItemEnchantmentTier", [CC], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), oC = (0, Cc.d)(bC.prototype, "pose", [cC], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "standing"
        }
      }), vC = (0, Cc.d)(bC.prototype, "ridingVehicleEId", [IC], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), NC = (0, Cc.d)(bC.prototype, "meshOffset", [pC], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new cc.ArraySchema(0, 0, 0)
        }
      }), gC = (0, Cc.d)(bC.prototype, "baseRenderHeading", [iC], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), XC = (0, Cc.d)(bC.prototype, "armour", [fC], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new cc.MapSchema
        }
      }), bC),
      Sc = (mC = (0, cc.type)("string"), nC = (0, cc.type)("string"), OC = (0, cc.type)("string"), PC = (0, cc.type)("uint8"), HC = class extends wc {
        constructor() {
          super(...arguments), (0, Dc.c)(this, "variation", UC, this), (0, Dc.c)(this, "ownerDbId", xC, this), (0, Dc.c)(this, "metaInfo", qC, this), (0, Dc.c)(this, "aiState", JC, this)
        }
      }, UC = (0, Cc.d)(HC.prototype, "variation", [mC], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "default"
        }
      }), xC = (0, Cc.d)(HC.prototype, "ownerDbId", [nC], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), qC = (0, Cc.d)(HC.prototype, "metaInfo", [OC], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return ""
        }
      }), JC = (0, Cc.d)(HC.prototype, "aiState", [PC], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), HC);
    KC = (0, cc.type)("string"), aC = (0, cc.type)("string"), VC = (0, cc.type)("string"), zC = (0, cc.type)("string"), jC = class extends Qc {
      constructor() {
        super(...arguments), (0, Dc.c)(this, "meshKind", lC, this), (0, Dc.c)(this, "meshOpts", LC, this), (0, Dc.c)(this, "pose", TC, this), (0, Dc.c)(this, "leaderboardTop", GC, this)
      }
    }, lC = (0, Cc.d)(jC.prototype, "meshKind", [KC], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), LC = (0, Cc.d)(jC.prototype, "meshOpts", [aC], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), TC = (0, Cc.d)(jC.prototype, "pose", [VC], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), GC = (0, Cc.d)(jC.prototype, "leaderboardTop", [zC], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    });

    function Bc(DD) {
      return Object.keys(cc.Metadata.getFields(DD))
    }
    const yc = Bc(Sc);
    for (const DI of Ic.u)
      if (!yc.includes(DI)) throw new Error(`Mob Schema is missing a networked property: "${DI}"`);
    const Mc = Bc((RC = (0, cc.type)("string"), kC = (0, cc.type)("float32"), dC = (0, cc.type)("float32"), YC = (0, cc.type)("float32"), WC = (0, cc.type)("float32"), sC = class extends Qc {
      constructor() {
        super(...arguments), (0, Dc.c)(this, "soundName", EC, this), (0, Dc.c)(this, "volume", eC, this), (0, Dc.c)(this, "refDistance", uC, this), (0, Dc.c)(this, "maxHearDist", hC, this), (0, Dc.c)(this, "rate", rC, this)
      }
    }, EC = (0, Cc.d)(sC.prototype, "soundName", [RC], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return ""
      }
    }), eC = (0, Cc.d)(sC.prototype, "volume", [kC], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return 1
      }
    }), uC = (0, Cc.d)(sC.prototype, "refDistance", [dC], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return ic.h
      }
    }), hC = (0, Cc.d)(sC.prototype, "maxHearDist", [YC], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return ic.c
      }
    }), rC = (0, Cc.d)(sC.prototype, "rate", [WC], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return 1
      }
    }), sC));
    for (const DI of pc.h)
      if (!Mc.includes(DI)) throw new Error(`AudioEntity Schema is missing a replicated property: "${DI}"`);
    var tc = cD(37813),
      Zc = cD(1240),
      oc = cD(624),
      vc = cD(37581),
      Nc = cD(4081),
      gc = cD(326),
      Xc = cD(36613),
      mc = cD(37481),
      nc = cD(2192),
      Oc = cD(36591),
      Pc = cD(37837),
      Hc = cD(36730),
      Uc = cD(335),
      xc = cD.n(Uc),
      qc = cD(37321),
      Jc = cD(36429),
      Kc = cD(37464),
      ac = cD(37494);
    class Vc {
      constructor(DD, CD) {
        this.bloxd = DD, this.eId = CD, this.ny = void 0, this.colyseusEntity = void 0, this.canSeeSub = void 0, this.canAttackSub = void 0, this.interactableSub = void 0, this.overlayColourSub = void 0, this.opacitySub = void 0, this.zIndexSub = void 0, this.multilineTextBoxSub = void 0, this.previousHidingMeshManagerState = void 0, this.meshKind = void 0, this.meshOpts = void 0, this.leaderboardTop = void 0, this.meshRebuildQueued = !1, this.Lt = !1, this.ny = DD.ny
      }
      initClient(DD) {
        var CD, cD, ID;
        this.colyseusEntity = DD, this.meshKind = DD.meshKind, this.meshOpts = DD.meshOpts, this.leaderboardTop = DD.leaderboardTop, this.ny.Km.add([DD.x, DD.y, DD.z], 1, 1, null, null, !1, !1, this.eId), this.ny.Km.gJ(this.eId, "smoothToServerPos");
        const pD = "Person" === this.meshKind;
        this.ny.Km.gJ(this.eId, "meshRotation", {
          isServerControlled: !0,
          ...pD ? {
            defaultRotationsPerSecond: .5
          } : {},
          childrenNodeParams: pD ? [{
            nodeName: "HeadMesh",
            softTolerance: Pc.l,
            hardTolerance: null
          }] : []
        }), this.updateHidingMeshMgr(), this.canSeeSub = AC.i.subscribe(`otherEntitySettings|${this.eId}|canSee`, (DD => {
          this.updateHidingMeshMgr()
        }));
        const iD = () => {
          const DD = this.ny.Km.mDD(this.eId);
          if (!DD) return;
          const CD = (0, Hc.m)(this.eId);
          if ("number" === typeof DD.bJ) {
            var cD, ID, pD, iD;
            const fD = null === (cD = (0, nc.k)("head", null === (pD = this.getSpec()) || void 0 === pD || null === (iD = pD.opts.textures) || void 0 === iD ? void 0 : iD.head)) || void 0 === cD || null === (ID = cD.personModel) || void 0 === ID ? void 0 : ID.fullBody;
            return this.ny.XZ.iJ.setPickable(DD.bJ, CD && !fD), void(0, Jc.updatePersonAttachmentPickability)(this.ny, this.eId, CD)
          }
          const fD = DD.mesh;
          if (fD)
            for (const bD of [fD, ...fD.getChildMeshes(!1)]) "yo" in bD && !bD.name.startsWith("Cape|") && (bD.yo = CD)
        };
        this.canAttackSub = AC.i.subscribe(`otherEntitySettings|${this.eId}|canAttack`, iD), this.interactableSub = AC.i.subscribe(`otherEntitySettings|${this.eId}|interactable`, iD), this.overlayColourSub = AC.i.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|overlayColour`, (DD => {
          this.updateOverlayColour(DD)
        })), this.opacitySub = AC.i.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|opacity`, (DD => {
          this.updateOpacity(DD)
        })), this.zIndexSub = AC.i.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|zIndex`, (DD => {
          this.updateZIndex(DD)
        }));
        const fD = this.ny.KJ[this.ny.aJ][this.eId];
        this.updateOverlayColour(null !== (CD = null === fD || void 0 === fD ? void 0 : fD.overlayColour) && void 0 !== CD ? CD : null), this.updateOpacity(null !== (cD = null === fD || void 0 === fD ? void 0 : fD.opacity) && void 0 !== cD ? cD : 1), this.updateZIndex(null !== (ID = null === fD || void 0 === fD ? void 0 : fD.zIndex) && void 0 !== ID ? ID : 0), this.multilineTextBoxSub = (0, Oc.w)(this.ny, this.eId)
      }
      onChangeClient(DD, CD) {
        if ("xRotation" === DD || "yRotation" === DD || "zRotation" === DD)(0, Oc.z)(this.ny, this.eId, DD, CD);
        else if ("pose" === DD) {
          const DD = this.ny.Km.qDD(this.eId);
          DD && (DD.pose = CD || "standing")
        } else "meshKind" === DD || "meshOpts" === DD ? (this[DD] = CD, this.queueMeshRebuild()) : "name" === DD && "" !== CD ? this.updateHidingMeshMgr() : "leaderboardTop" === DD && (this.leaderboardTop = CD, AC.i.Uo(`leaderboardTop|${this.eId}`, CD))
      }
      disposeClient() {
        this.Lt = !0, this.ny.Km.deleteEntity(this.eId), AC.i.unsubscribe(this.canSeeSub), AC.i.unsubscribe(this.canAttackSub), AC.i.unsubscribe(this.interactableSub), AC.i.unsubscribe(this.overlayColourSub), AC.i.unsubscribe(this.opacitySub), AC.i.unsubscribe(this.zIndexSub), AC.i.unsubscribe(this.multilineTextBoxSub)
      }
      getCurrentHidingMeshMgrState() {
        var DD, CD;
        return {
          canSee: null !== (DD = null === (CD = this.ny.KJ[this.ny.aJ][this.eId]) || void 0 === CD ? void 0 : CD.canSee) && void 0 !== DD && DD,
          name: this.colyseusEntity.name,
          meshKind: this.meshKind,
          meshOpts: this.meshOpts
        }
      }
      updateHidingMeshMgr() {
        var DD, CD, cD;
        const {
          ny: ID
        } = this, {
          Km: pD
        } = ID, iD = this.getCurrentHidingMeshMgrState();
        if ((0, gc.Xd)(this.previousHidingMeshManagerState, iD)) return;
        if (this.previousHidingMeshManagerState = iD, pD.mJ(this.eId, "hidingMeshManager"), null === (DD = ID.KJ[ID.aJ][this.eId]) || void 0 === DD || !DD.canSee) return;
        const fD = this.getSpec();
        if (!fD) return;
        const {
          type: bD,
          opts: QD
        } = fD;
        "Person" === bD && (QD.textures = (0, nc.p)(QD.textures)), QD.eId = this.eId, pD.gJ(this.eId, "hidingMeshManager", {
          addMeshComponent: () => {
            var DD, CD, cD;
            "Leaderboard" === bD && (QD.leaderboardTop = this.leaderboardTop);
            const iD = this.bloxd.client.meshCreator.getEntityMesh(bD, QD, (DD => {
              var CD, cD;
              if ("number" === typeof DD) {
                var pD, iD, fD;
                const CD = ID.XZ.iJ;
                CD.setEntityId(DD, this.eId);
                const cD = "Person" === bD && (null === (pD = (0, nc.k)("head", null === (fD = QD.textures) || void 0 === fD ? void 0 : fD.head)) || void 0 === pD || null === (iD = pD.personModel) || void 0 === iD ? void 0 : iD.fullBody);
                return void CD.setPickable(DD, (0, Hc.m)(this.eId) && !cD)
              }
              const wD = DD;
              for (const bD of [wD, ...wD.getChildMeshes(!1)]) void 0 === bD.yo || bD.name.startsWith("Cape|") || (bD.yo = (0, Hc.m)(this.eId), bD.metadata ??= new ID.XZ.Mo, bD.metadata.eId = this.eId);
              this.updateOpacity(null !== (CD = null === (cD = ID.KJ[ID.aJ][this.eId]) || void 0 === cD ? void 0 : cD.opacity) && void 0 !== CD ? CD : 1)
            }));
            if (!iD) return;
            const {
              bJ: fD,
              mesh: wD,
              meshOffset: SD,
              nameYOffset: BD,
              modelLoaded: yD
            } = iD;
            null === yD || void 0 === yD || yD.then((() => {
              var DD;
              (null === (DD = pD.mDD(this.eId)) || void 0 === DD ? void 0 : DD.mesh) === wD && (this.previousHidingMeshManagerState = null, this.updateHidingMeshMgr())
            }));
            const MD = null === fD ? null : ID.XZ.iJ.NcD(fD, 0);
            if (pD.gJ(this.eId, pD.names.mesh, {
                bJ: fD,
                kCD: MD,
                mesh: wD,
                PfD: !1,
                WCD: "Leaderboard" !== bD,
                offset: SD.slice(),
                OfD: "ParticleEmitter" === bD && QD.followTargetMeshOffset ? DD => {
                  var CD;
                  xc().copy(DD, SD);
                  const cD = null === (CD = pD.ZCD(this.eId)) || void 0 === CD ? void 0 : CD.qt,
                    ID = void 0 === cD ? null : pD.qDD(cD);
                  if (ID) {
                    var iD, fD;
                    const CD = this.bloxd.getEntityHeading(null !== (iD = ID.ridingVehicleEId) && void 0 !== iD ? iD : cD, !0),
                      pD = Math.sin(CD),
                      bD = Math.cos(CD);
                    DD[0] += ID.meshOffset[0] * bD + ID.meshOffset[2] * pD, DD[1] += ID.meshOffset[1], DD[2] += ID.meshOffset[2] * bD - ID.meshOffset[0] * pD;
                    const QD = null !== (fD = ID.ridingVehicleEId) && void 0 !== fD ? fD : null;
                    null !== QD && (0, ac.c)(this.ny, QD, DD)
                  }
                } : null
              }), "Person" === bD) {
              var tD, ZD, oD, vD;
              pD.gJ(this.eId, pD.names.meshAttachments, {
                personFullBody: null !== (tD = null === (ZD = (0, nc.k)("head", null === (vD = QD.textures) || void 0 === vD ? void 0 : vD.head)) || void 0 === ZD || null === (oD = ZD.personModel) || void 0 === oD ? void 0 : oD.fullBody) && void 0 !== tD && tD
              });
              for (const DD of Zc.u) {
                var ND, gD, XD;
                const CD = null === (ND = QD.textures) || void 0 === ND ? void 0 : ND[DD];
                CD && null !== (gD = (0, nc.k)(DD, CD)) && void 0 !== gD && null !== (XD = gD.attachments) && void 0 !== XD && XD.length && mc.b.Player.meshApi.updatePlayerCosmetic(this.eId, fD, DD, CD)
              }
              pD.gJ(this.eId, pD.names.moveState), pD.gJ(this.eId, "updateWalkingState", {
                bJ: fD,
                kCD: MD,
                walkingLegSwingDuration: Pc.w
              }), pD.gJ(this.eId, "humanoidMesh", {
                bJ: fD,
                kCD: MD,
                heldItemPositionParams: {},
                maxWalkingAngleOverride: null
              }), pD.gJ(this.eId, "animator", {
                bJ: fD,
                kCD: MD,
                modelLifeformType: "Player"
              }), Kc.i.hasAnimation("Person") && pD.gJ(this.eId, "rigAnimation", {
                target: "Person",
                bJ: fD
              }), pD.qDD(this.eId).pose = this.colyseusEntity.pose || "standing"
            } else if ("BloxdBlock" === bD && null !== fD) {
              pD.gJ(this.eId, "animator", {
                bJ: fD,
                kCD: MD,
                modelLifeformType: null
              });
              const DD = (0, vc.p)(QD.blockName);
              null !== DD && pD.gJ(this.eId, "rigAnimation", {
                target: DD,
                bJ: fD
              })
            }
            pD.CbD(this.eId, "entityName", {
              name: this.colyseusEntity.name,
              nameYOffset: BD
            }), this.bloxd.setEntityName(this.eId, this.colyseusEntity.name), !0 === QD.autoRotate && (pD.mJ(this.eId, "meshRotation"), pD.gJ(this.eId, "autoRotate"));
            const {
              lineToEId: mD
            } = QD;
            (0, oc.C)(mD) || pD.gJ(this.eId, "lineToEntity", {
              lineToEId: mD
            });
            const nD = ID.KJ[ID.aJ][this.eId];
            this.updateOverlayColour(null !== (DD = null === nD || void 0 === nD ? void 0 : nD.overlayColour) && void 0 !== DD ? DD : null), this.updateOpacity(null !== (CD = null === nD || void 0 === nD ? void 0 : nD.opacity) && void 0 !== CD ? CD : 1), this.updateZIndex(null !== (cD = null === nD || void 0 === nD ? void 0 : nD.zIndex) && void 0 !== cD ? cD : 0)
          },
          removeMeshComponent: () => {
            "Person" !== bD && "BloxdBlock" !== bD || pD.mJ(this.eId, "rigAnimation"), pD.mJ(this.eId, pD.names.mesh), pD.R7(this.eId, pD.names.meshAttachments) && pD.mJ(this.eId, pD.names.meshAttachments), pD.mJ(this.eId, "entityName"), pD.mJ(this.eId, "autoRotate"), pD.mJ(this.eId, "lineToEntity"), "Person" === bD ? (pD.mJ(this.eId, pD.names.moveState), pD.mJ(this.eId, "updateWalkingState"), pD.mJ(this.eId, "humanoidMesh"), pD.mJ(this.eId, "animator")) : "BloxdBlock" === bD && pD.mJ(this.eId, "animator")
          },
          hideDist: null !== (CD = QD.hideDist) && void 0 !== CD ? CD : 80,
          movingHideDist: null !== (cD = QD.hideDist) && void 0 !== cD ? cD : 120,
          displayOutsideLoadedChunk: QD.hideDist > 100,
          immediatelyUpdate: !0,
          pB: "BloxdBlock" === bD ? QD.blockName : bD
        })
      }
      queueMeshRebuild() {
        this.meshRebuildQueued || (this.meshRebuildQueued = !0, queueMicrotask((() => {
          this.meshRebuildQueued = !1, this.Lt || this.updateHidingMeshMgr()
        })))
      }
      getSpec() {
        return (0, Nc.d)({
          meshKind: this.meshKind,
          meshOpts: this.meshOpts
        })
      }
      updateOverlayColour(DD) {
        var CD, cD;
        if ("Person" !== this.meshKind) return;
        let ID = new Xc.c(0, 0, 0, 0);
        if (null !== DD) {
          const CD = (0, gc.V)(DD);
          ID = new Xc.c(CD[0] / 255, CD[1] / 255, CD[2] / 255, .5)
        }
        const pD = null !== (CD = null === (cD = this.ny.Km.mDD(this.eId)) || void 0 === cD ? void 0 : cD.bJ) && void 0 !== CD ? CD : null;
        null !== pD && mc.b.Player.meshApi.updateMeshOverlayColour(pD, ID)
      }
      updateZIndex(DD) {
        var CD;
        if ("Person" !== this.meshKind) return;
        const cD = null === (CD = this.ny.Km.mDD(this.eId)) || void 0 === CD ? void 0 : CD.bJ;
        "number" === typeof cD && this.ny.XZ.iJ.setRenderingGroupId(cD, DD)
      }
      updateOpacity(DD) {
        const CD = this.ny.Km.mDD(this.eId);
        CD && ("number" !== typeof CD.bJ ? CD.mesh && "ParticleEmitter" !== this.meshKind && (0, qc.f)(CD.mesh, DD) : mc.b.Player.meshApi.updateMeshOpacity(CD.bJ, DD))
      }
    }
    var zc = cD(38373);
    class jc {
      constructor(DD, CD) {
        this.eId = CD, this.ny = void 0, this.schema = void 0, this.ny = DD.ny
      }
      initClient(DD) {
        this.schema = DD, this.ny.Km.add([DD.x, DD.y, DD.z], .1, .1, null, null, !1, !1, this.eId), this.ny.Km.gJ(this.eId, "smoothToServerPos"), zc.e.add(this.eId, this.copyOpts())
      }
      onChangeClient(DD) {
        pc.h.includes(DD) && zc.e.update(this.eId, this.copyOpts())
      }
      disposeClient() {
        zc.e.remove(this.eId), this.ny.Km.deleteEntity(this.eId)
      }
      copyOpts() {
        const {
          soundName: DD,
          volume: CD,
          refDistance: cD,
          maxHearDist: ID,
          rate: pD
        } = this.schema;
        return {
          soundName: DD,
          volume: CD,
          refDistance: cD,
          maxHearDist: ID,
          rate: pD
        }
      }
    }
    var lc = cD(3501),
      Lc = cD(36125),
      Tc = cD(6212),
      Gc = cD(37180),
      Rc = cD(2642),
      kc = cD(37519),
      dc = cD(8764),
      Yc = cD(37848),
      Wc = cD(37154),
      sc = cD(3032);
    class Ec {
      constructor(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
          ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => performance.now();
        this.lCD = DD, this.ny = CD, this.setupBudgetMs = cD, this.now = ID, this.createStateCallbacks = void 0, this.roomStateCallbacks = void 0, this.allItems = {}, this.detachers = new Map, this.deferredSetups = new Map, this.queuedSetups = new Map, this.promotedSetups = new Set, this.setupBudgetLeftMs = void 0, this.lastRefillMs = void 0, this.roomState = void 0, this.Lt = !1, this.onFrame = () => {
          this.setUpQueuedEntities(!0)
        }, this.BX = () => {
          this.setUpQueuedEntities(this.now() - this.lastRefillMs > 100)
        }, this.setUpPromoted = () => {
          for (const DD of this.promotedSetups) {
            this.promotedSetups.delete(DD);
            const CD = this.queuedSetups.get(DD);
            CD && (this.queuedSetups.delete(DD), this.timedSetup(CD, DD))
          }
        }, this.createStateCallbacks = (0, dc.getStateCallbacks)(DD), this.roomStateCallbacks = this.createStateCallbacks(DD.state), this.roomState = DD.state, this.setupBudgetLeftMs = cD, this.lastRefillMs = ID()
      }
      setup() {
        this.setupEntityHandlers(), this.setupItemHandlers(), this.lCD.onStateChange(this.setUpPromoted), this.ny.on("beforeInputs", this.onFrame), this.ny.on("wy", this.BX)
      }
      setUpQueuedEntities(DD) {
        var CD;
        if ((null === (CD = (0, Rc.e)().client.getMsgHandler()) || void 0 === CD ? void 0 : CD.lCD) !== this.lCD) return this.ny.off("beforeInputs", this.onFrame), this.ny.off("wy", this.BX), this.queuedSetups.clear(), void this.promotedSetups.clear();
        if (DD && (this.setupBudgetLeftMs = this.setupBudgetMs, this.lastRefillMs = this.now()), this.setUpPromoted(), 0 !== this.queuedSetups.size)
          for (xc().copy(ec, this.ny.Km.FX(this.ny.aJ)); this.setupBudgetLeftMs > 0;) {
            const DD = this.nearestQueued(ec);
            if (null === DD) return;
            this.setUpIfQueued(DD), this.setUpPromoted()
          }
      }
      nearestQueued(DD) {
        let CD = null,
          cD = 1 / 0;
        return this.queuedSetups.forEach(((ID, pD) => {
          const iD = function(DD, CD) {
            return (CD.x - DD[0]) ** 2 + (CD.y - DD[1]) ** 2 + (CD.z - DD[2]) ** 2
          }(DD, ID);
          (null === CD || iD < cD) && (CD = pD, cD = iD)
        })), CD
      }
      setUpOrQueue(DD, CD) {
        0 === this.queuedSetups.size && this.setupBudgetLeftMs > 0 || this.mustSetUpNow(DD, CD) ? this.timedSetup(DD, CD) : this.queuedSetups.set(CD, DD)
      }
      mustSetUpNow(DD, CD) {
        const cD = this.ny.o9;
        if (CD === cD) return !0;
        const ID = this.roomState.entities.get(cD);
        return !(!ID || ID.ridingVehicleEId !== CD && ID.followingEId !== CD) || (uc(DD.type) === tc.c || (0, Rc.e)().getFollowingEntities(CD).length > 0)
      }
      setUpIfQueued(DD) {
        const CD = this.queuedSetups.get(DD);
        CD && (this.queuedSetups.delete(DD), this.timedSetup(CD, DD))
      }
      promoteIfQueued(DD) {
        null !== DD && this.queuedSetups.has(DD) && this.promotedSetups.add(DD)
      }
      timedSetup(DD, CD) {
        const cD = this.now();
        this.setupEntity(DD, CD), this.setupBudgetLeftMs -= this.now() - cD
      }
      setupEntityHandlers() {
        this.roomStateCallbacks.entities.Jm(((DD, CD) => {
          this.ny.o9 ? this.setUpOrQueue(DD, CD) : this.deferEntitySetupUntilInitInfo(DD, CD)
        })), this.roomStateCallbacks.entities.Zx(((DD, CD) => {
          const cD = this.deferredSetups.get(CD);
          cD && (AC.i.unsubscribe(cD), this.deferredSetups.delete(CD)), this.queuedSetups.delete(CD), this.detach(CD), (0, Rc.e)().client.disposeEntity(CD)
        }))
      }
      deferEntitySetupUntilInitInfo(DD, CD) {
        const cD = AC.i.Fv("initInfoReceived", (() => {
          this.deferredSetups.delete(CD), this.setUpOrQueue(DD, CD)
        }));
        this.deferredSetups.set(CD, cD), (0, lc.onGameResetOnce)((() => {
          this.deferredSetups.get(CD) === cD && (AC.i.unsubscribe(cD), this.deferredSetups.delete(CD)), (0, Rc.e)().updatePositionAndPhysics(this.ny.aJ, {
            type: Tc.p.DEFAULT,
            tier: null
          }, !0), (0, Rc.e)().takeHeldPlayerBodySize(this.ny.aJ);
          const DD = this.ny.Km.QDD(this.ny.aJ);
          DD && (DD.movementType = Tc.n.NORMAL)
        }))
      }
      setupEntity(DD, CD) {
        const cD = CD === this.ny.o9;
        if (cD)(0, Rc.e)().client.pR(this.ny.aJ, null, null);
        else {
          const {
            type: cD
          } = DD, ID = uc(cD);
          if (void 0 === ID) return void
          function(DD, CD) {
            const cD = String(DD);
            if (hc.has(cD)) return;
            hc.add(cD);
            const ID = cD.length > 80 ? `${cD.slice(0,80)}...` : cD,
              pD = `No client handler for entity type ${JSON.stringify(ID)}, so entity ${CD} is not set up`;
            console.warn(pD), (0, sc.h)("uncaught", pD, "unknown_entity_type")
          }(cD, CD);
          (0, Rc.e)().client.pR(CD, DD, new ID((0, Rc.e)(), CD, cD))
        }
        const ID = this.createStateCallbacks(DD);
        if (cD) return this.setupMapSchemaCallbacks(CD, DD, ID, "armour"), this.setupScalarField(CD, DD, ID, "scale"), this.setupScalarField(CD, DD, ID, "ridingVehicleEId"), this.setupScalarField(CD, DD, ID, "followingEId"), this.setupScalarField(CD, DD, ID, "followingOffset"), void this.setupScalarField(CD, DD, ID, "shouldMatchFollowingEntityRotation");
        for (const pD of Bc(DD.constructor)) DD[pD] instanceof cc.MapSchema ? this.setupMapSchemaCallbacks(CD, DD, ID, pD) : this.setupScalarField(CD, DD, ID, pD)
      }
      setupMapSchemaCallbacks(DD, CD, cD, ID) {
        const pD = cD[ID],
          iD = new Map;
        pD.Jm(((cD, pD) => {
          if (this.onEntityFieldChange(DD, CD, ID, {
              key: pD,
              value: cD
            }), !(cD instanceof cc.Schema)) return;
          const fD = this.createStateCallbacks(cD),
            bD = [];
          for (const iD of Bc(cD.constructor)) bD.push(this.listenForFutureChanges(fD, iD, (() => {
            this.onEntityFieldChange(DD, CD, ID, {
              key: pD,
              value: cD
            })
          })));
          iD.set(pD, (() => {
            for (const DD of bD) DD()
          }))
        })), pD.Zx(((cD, pD) => {
          var fD;
          null === (fD = iD.get(pD)) || void 0 === fD || fD(), iD.delete(pD), this.onEntityFieldChange(DD, CD, ID, {
            key: pD,
            value: null
          })
        })), this.addDetacher(DD, (() => {
          for (const DD of iD.values()) DD();
          iD.clear()
        }))
      }
      setupScalarField(DD, CD, cD, ID) {
        this.onEntityFieldChange(DD, CD, ID, CD[ID]);
        const pD = this.listenForFutureChanges(cD, ID, (cD => {
          this.onEntityFieldChange(DD, CD, ID, cD)
        }));
        this.addDetacher(DD, pD)
      }
      addDetacher(DD, CD) {
        let cD = this.detachers.get(DD);
        cD || (cD = [], this.detachers.set(DD, cD)), cD.push(CD)
      }
      detach(DD) {
        for (const cD of null !== (CD = this.detachers.get(DD)) && void 0 !== CD ? CD : []) {
          var CD;
          cD()
        }
        this.detachers.delete(DD)
      }
      listenForFutureChanges(DD, CD, cD) {
        return DD.listen(CD, cD, !1)
      }
      onEntityFieldChange(DD, CD, cD, ID) {
        switch (cD) {
          case "ridingVehicleEId": {
            this.promoteIfQueued(ID);
            const CD = this.ny.Km.qDD((0, Lc.b)(DD));
            CD && (CD.ridingVehicleEId = ID);
            break
          }
          case "armour":
            this.handleArmourChange(DD, ID);
            break;
          case "followingEId":
            this.promoteIfQueued(ID), this.handleFollowingEIdChange(DD, CD, ID);
            break;
          case "xRotation":
          case "yRotation":
          case "zRotation":
            this.handleRotationChange(DD, cD, ID);
            break;
          case "scale":
            this.handleScaleChange(DD, ID);
            break;
          case "baseRenderHeading":
            this.handleBaseRenderHeadingChange(DD, ID);
            break;
          case "followingOffset":
            this.handleFollowingOffsetChange(DD, ID);
            break;
          case "shouldMatchFollowingEntityRotation":
            this.handleShouldMatchFollowingEntityRotationChange(DD, ID);
            break;
          case "x":
          case "y":
          case "z":
            return void this.handlePositionChange(DD, cD, ID)
        }(0, Rc.e)().client.updateEntityField(DD, cD, ID)
      }
      handleArmourChange(DD, CD) {
        var cD, ID;
        const {
          key: pD,
          value: iD
        } = CD;
        (0, mc.u)(DD, pD, null !== (cD = null === iD || void 0 === iD ? void 0 : iD.itemName) && void 0 !== cD ? cD : null, null !== (ID = null === iD || void 0 === iD ? void 0 : iD.enchantmentTier) && void 0 !== ID ? ID : null)
      }
      handleFollowingEIdChange(DD, CD, cD) {
        const ID = (0, Lc.b)(DD),
          pD = ID === this.ny.aJ;
        if (this.ny.Km.mJ(ID, this.ny.Km.names.mH), cD) this.ny.Km.mJ(ID, "smoothToServerPos"), this.ny.Km.gJ(ID, this.ny.Km.names.mH, {
          qt: (0, Lc.b)(cD),
          offset: Array.from(CD.followingOffset),
          oCD: CD.shouldMatchFollowingEntityRotation,
          mCD: !0,
          nCD: (DD, ID) => {
            if (xc().copy(DD, CD.followingOffset), CD.ridingVehicleEId === cD) {
              const CD = (0, Lc.b)(cD),
                pD = (0, Rc.e)().getEntityHeading(CD, ID);
              xc().gp(DD, DD, xc().ZERO, pD)
            }
          }
        });
        else if (!pD) {
          this.ny.Km.R7(ID, "smoothToServerPos") || this.ny.Km.gJ(ID, "smoothToServerPos");
          const DD = this.ny.Km.getState(ID, "smoothToServerPos"),
            CD = this.ny.Km.fR(ID).position;
          (0, Wc.setServerPosition)(DD, CD[0], CD[1], CD[2])
        }
      }
      handleRotationChange(DD, CD, cD) {
        const ID = "xRotation" === CD ? 0 : "yRotation" === CD ? 1 : 2;
        for (const pD of (0, Rc.e)().getFollowingEntities(DD)) {
          const DD = this.ny.Km.getState(pD, "meshRotation"),
            CD = this.ny.Km.ZCD(pD);
          DD && CD.oCD && (DD.serverSetRotation[ID] = cD)
        }
      }
      handleScaleChange(DD, CD) {
        const cD = (0, Lc.b)(DD);
        if (AC.i.Uo(`entityScale|${cD}`, CD), cD === this.ny.aJ) {
          var ID;
          (0, Rc.e)().removeFromEyeHeightCache(cD);
          const DD = this.ny.Km.QDD(this.ny.aJ),
            CD = null !== (ID = null === DD || void 0 === DD ? void 0 : DD.physicsState) && void 0 !== ID ? ID : {
              type: Tc.p.DEFAULT,
              tier: null
            };
          return void(0, Rc.e)().updatePositionAndPhysics(this.ny.aJ, CD, !1)
        }
        const pD = (0, Rc.e)().getLifeformType(cD);
        if (null === pD) return;
        const {
          physicsBodyWidth: iD,
          physicsBodyHeight: fD
        } = (0, Yc.f)(CD, pD);
        this.ny.Km.MCD(cD, iD, fD, iD)
      }
      handleBaseRenderHeadingChange(DD, CD) {
        const cD = this.ny.Km.getState(DD, "meshRotation");
        cD && (cD.baseRenderRotation[1] = CD);
        for (const ID of (0, Rc.e)().getFollowingEntities(DD)) {
          const DD = this.ny.Km.getState(ID, "meshRotation"),
            cD = this.ny.Km.ZCD(ID);
          DD && cD.oCD && (DD.baseRenderRotation[1] = CD)
        }
      }
      handleFollowingOffsetChange(DD, CD) {
        const cD = this.ny.Km.ZCD((0, Lc.b)(DD));
        if (cD && cD.offset) {
          const DD = CD ? Array.from(CD) : xc().ZERO;
          cD.offset[0] = DD[0], cD.offset[1] = DD[1], cD.offset[2] = DD[2]
        }
      }
      handleShouldMatchFollowingEntityRotationChange(DD, CD) {
        const cD = this.ny.Km.ZCD((0, Lc.b)(DD));
        cD && (cD.oCD = null === CD || void 0 === CD || CD)
      }
      handlePositionChange(DD, CD, cD) {
        if (this.ny.Km.R7(DD, "smoothToServerPos")) {
          const ID = this.ny.Km.getState(DD, "smoothToServerPos");
          (0, Wc.setServerPositionAxis)(ID, rc[CD], cD)
        }
      }
      setupItemHandlers() {
        this.roomStateCallbacks.items.Jm(((DD, CD) => {
          this.allItems[CD] = DD, (0, Gc.i)(this.ny, CD, [DD.x, DD.y, DD.z], DD.id, {
            amount: DD.amount,
            attributes: JSON.parse(DD.attributes),
            cI: (0, FC.b)(this.ny).cantPickUpItem(CD),
            size: DD.size,
            predictedAt: (0, Rc.e)().client.itemDropPrediction.onServerItemAdded(CD)
          });
          const cD = this.createStateCallbacks(DD);
          for (const ID of Bc(fc)) this.onItemFieldChange(CD, ID, DD[ID]), this.addDetacher(CD, this.listenForFutureChanges(cD, ID, (DD => {
            this.onItemFieldChange(CD, ID, DD)
          })))
        })), this.roomStateCallbacks.items.Zx(((DD, CD) => {
          delete this.allItems[CD], this.detach(CD), (0, Rc.e)().client.itemDropPrediction.onServerItemRemoved(CD), this.ny.Km.R7(CD, this.ny.Km.names.itemState) && this.ny.Km.deleteEntity(CD), (0, FC.b)(this.ny).disposeEntity(CD)
        }))
      }
      onItemFieldChange(DD, CD, cD) {
        if (CD in rc) {
          if (this.ny.Km.R7(DD, "itemState")) {
            const ID = this.ny.Km.getState(DD, "smoothToServerPos");
            (0, Wc.setServerPositionAxis)(ID, rc[CD], cD), (0, Rc.e)().client.itemDropPrediction.onServerItemMoved(DD)
          }
          return
        }
        if (!this.ny.Km.R7(DD, "itemState")) return;
        const ID = this.ny.Km.getState(DD, "itemState");
        "amount" === CD && cD !== ID.amount && (ID.creationTime = Date.now()), ID[CD] = "attributes" === CD ? JSON.parse(cD) : cD
      }
      dispose() {
        if (!this.Lt) {
          this.Lt = !0, this.ny.off("beforeInputs", this.onFrame), this.ny.off("wy", this.BX), this.queuedSetups.clear(), this.promotedSetups.clear();
          for (const DD of this.deferredSetups.values()) AC.i.unsubscribe(DD);
          this.deferredSetups.clear(), this.ny.Km.mJ(this.ny.aJ, this.ny.Km.names.mH);
          for (const DD in this.allItems) this.ny.Km.deleteEntity(DD), delete this.allItems[DD];
          for (const DD of [...this.detachers.keys()]) this.detach(DD);
          (0, FC.b)(this.ny).clear();
          for (const DD of (0, Rc.e)().client.iterateEntityIds())(0, Rc.e)().client.disposeEntity(DD)
        }
      }
    }
    const ec = [0, 0, 0];

    function uc(DD) {
      if ("string" !== typeof DD) return;
      const CD = DD.indexOf("|"),
        cD = -1 === CD ? DD : DD.slice(0, CD),
        ID = Fc();
      return Object.hasOwn(ID, cD) ? ID[cD] : void 0
    }
    const hc = new Set;
    const rc = {
      x: 0,
      y: 1,
      z: 2
    };
    let Ac = null;

    function Fc() {
      return null !== Ac || (Ac = {
        ...Object.fromEntries(pc.j.map((DD => {
          const {
            pB: CD
          } = (0, kc.c)(DD);
          return [DD, CD]
        }))),
        Pebble: tc.c,
        Snowball: tc.c,
        "Snowball Launcher": tc.c,
        "Reinforced Pebble": tc.c,
        Bullet: tc.c,
        "Reinforced Ball": tc.c,
        Ball: tc.c,
        Mango: tc.c,
        "Moonstone Orb": tc.c,
        ...Object.fromEntries(Ic.v.map((DD => [(0, gc.Xb)(DD), tc.c]))),
        Arrow: tc.c,
        "Arrow of Speed": tc.c,
        "Arrow of Poison": tc.c,
        "Arrow of Slowness": tc.c,
        "Arrow of Weakness": tc.c,
        "Arrow of Knockback": tc.c,
        "Arrow of Strength": tc.c,
        "Arrow of Invisibility": tc.c,
        "Arrow of Jumping": tc.c,
        "Arrow of Defense": tc.c,
        "Arrow of Instant Healing": tc.c,
        "Arrow of Instant Damage": tc.c,
        "Arrow of Regeneration": tc.c,
        "Arrow of Haste": tc.c,
        "Arrow of Shield": tc.c,
        "Arrow of Double Jump": tc.c,
        "Arrow of Heat Resistance": tc.c,
        "Arrow of X-Ray Vision": tc.c,
        "Arrow of Mining Yield": tc.c,
        "Arrow of Brain Rot": tc.c,
        "Arrow of Milk": tc.c,
        Fireball: tc.c,
        "Bouncy Bomb": tc.c,
        RPG: tc.c,
        "Obby RPG": tc.c,
        "Super RPG": tc.c,
        "Grenade Launcher": tc.c,
        Iceball: tc.c,
        Coconut: tc.c,
        "Splash Speed Potion": tc.c,
        "Splash Defense Potion": tc.c,
        "Splash Strength Potion": tc.c,
        "Splash Invisibility Potion": tc.c,
        "Splash Jump Potion": tc.c,
        "Splash Knockback Potion": tc.c,
        "Splash Poison Potion": tc.c,
        "Splash Speed Potion II": tc.c,
        "Splash Defense Potion II": tc.c,
        "Splash Strength Potion II": tc.c,
        "Splash Jump Potion II": tc.c,
        "Splash Knockback Potion II": tc.c,
        "Splash Poison Potion II": tc.c,
        "Splash Slowness Potion": tc.c,
        "Splash Slowness Potion II": tc.c,
        "Splash Weakness Potion": tc.c,
        "Splash Weakness Potion II": tc.c,
        "Splash Milk Potion": tc.c,
        "Splash Instant Damage Potion": tc.c,
        "Splash Instant Damage Potion II": tc.c,
        "Splash Instant Healing Potion": tc.c,
        "Splash Instant Healing Potion II": tc.c,
        "Splash Regeneration Potion": tc.c,
        "Splash Regeneration Potion II": tc.c,
        "Splash Haste Potion": tc.c,
        "Splash Haste Potion II": tc.c,
        "Splash Shield Potion": tc.c,
        "Splash Shield Potion II": tc.c,
        "Splash Double Jump Potion": tc.c,
        "Splash Heat Resistance Potion": tc.c,
        "Splash X-Ray Vision Potion": tc.c,
        "Splash Mining Yield Potion": tc.c,
        "Splash Mining Yield Potion II": tc.c,
        "Splash Brain Rot Potion": tc.c,
        "Yellow Paintball Gun": tc.c,
        "White Paintball Gun": tc.c,
        "Red Paintball Gun": tc.c,
        "Purple Paintball Gun": tc.c,
        "Pink Paintball Gun": tc.c,
        "Orange Paintball Gun": tc.c,
        "Magenta Paintball Gun": tc.c,
        "Lime Paintball Gun": tc.c,
        "Light Gray Paintball Gun": tc.c,
        "Light Blue Paintball Gun": tc.c,
        "Green Paintball Gun": tc.c,
        "Gray Paintball Gun": tc.c,
        "Cyan Paintball Gun": tc.c,
        "Brown Paintball Gun": tc.c,
        "Blue Paintball Gun": tc.c,
        "Black Paintball Gun": tc.c,
        "Yellow Heavy Paintball Gun": tc.c,
        "White Heavy Paintball Gun": tc.c,
        "Red Heavy Paintball Gun": tc.c,
        "Purple Heavy Paintball Gun": tc.c,
        "Pink Heavy Paintball Gun": tc.c,
        "Orange Heavy Paintball Gun": tc.c,
        "Magenta Heavy Paintball Gun": tc.c,
        "Lime Heavy Paintball Gun": tc.c,
        "Light Gray Heavy Paintball Gun": tc.c,
        "Light Blue Heavy Paintball Gun": tc.c,
        "Green Heavy Paintball Gun": tc.c,
        "Gray Heavy Paintball Gun": tc.c,
        "Cyan Heavy Paintball Gun": tc.c,
        "Brown Heavy Paintball Gun": tc.c,
        "Blue Heavy Paintball Gun": tc.c,
        "Black Heavy Paintball Gun": tc.c,
        "Toxin Ball": tc.c,
        "Splash Aura XP Potion": tc.c,
        "Splash Aura XP Potion II": tc.c,
        "Arrow of Aura XP": tc.c,
        Firecracker: tc.c,
        "Rainbow Firecracker": tc.c,
        "White Firecracker": tc.c,
        "Orange Firecracker": tc.c,
        "Magenta Firecracker": tc.c,
        "Light Blue Firecracker": tc.c,
        "Yellow Firecracker": tc.c,
        "Lime Firecracker": tc.c,
        "Pink Firecracker": tc.c,
        "Gray Firecracker": tc.c,
        "Light Gray Firecracker": tc.c,
        "Cyan Firecracker": tc.c,
        "Purple Firecracker": tc.c,
        "Blue Firecracker": tc.c,
        "Brown Firecracker": tc.c,
        "Green Firecracker": tc.c,
        "Red Firecracker": tc.c,
        "Black Firecracker": tc.c,
        "Firecracker Pebble": tc.c,
        "Rainbow Firecracker Pebble": tc.c,
        "White Firecracker Pebble": tc.c,
        "Orange Firecracker Pebble": tc.c,
        "Magenta Firecracker Pebble": tc.c,
        "Light Blue Firecracker Pebble": tc.c,
        "Yellow Firecracker Pebble": tc.c,
        "Lime Firecracker Pebble": tc.c,
        "Pink Firecracker Pebble": tc.c,
        "Gray Firecracker Pebble": tc.c,
        "Light Gray Firecracker Pebble": tc.c,
        "Cyan Firecracker Pebble": tc.c,
        "Purple Firecracker Pebble": tc.c,
        "Blue Firecracker Pebble": tc.c,
        "Brown Firecracker Pebble": tc.c,
        "Green Firecracker Pebble": tc.c,
        "Red Firecracker Pebble": tc.c,
        "Black Firecracker Pebble": tc.c,
        "Blinding Pebble": tc.c,
        Poop: tc.c,
        "Wood Boomerang": tc.c,
        "Stone Boomerang": tc.c,
        "Iron Boomerang": tc.c,
        "Gold Boomerang": tc.c,
        "Diamond Boomerang": tc.c,
        "Amethite Boomerang": tc.c,
        "Magmasteel Boomerang": tc.c,
        "Rubellite Boomerang": tc.c,
        "Serpentite Boomerang": tc.c,
        "Moonstone Boomerang": tc.c,
        "67 Base Projectile": tc.c,
        "67 Boosted Projectile": tc.c,
        "Capitano Grenade": tc.c,
        "Scatter Pellet": tc.c,
        "Lucky Bomb": tc.c,
        "Unlucky Bomb": tc.c,
        "Swap Orb": tc.c,
        Mesh: Vc,
        AudioEntity: jc
      }), Ac
    }
  },
  38344: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => iD,
      d: () => fD
    });
    var ID = cD(624),
      pD = cD(37110);
    const iD = 4e4;
    class fD {
      constructor() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now;
        this.now = DD, this.editedAt = new Map, this.lastChunkX = NaN, this.lastChunkY = NaN, this.lastChunkZ = NaN, this.lastChunkId = ""
      }
      noteEdit(DD, CD, cD) {
        const iD = (0, ID.I)(DD),
          fD = (0, ID.I)(CD),
          bD = (0, ID.I)(cD),
          QD = this.now();
        if (iD !== this.lastChunkX || fD !== this.lastChunkY || bD !== this.lastChunkZ) {
          this.lastChunkX = iD, this.lastChunkY = fD, this.lastChunkZ = bD, this.lastChunkId = (0, pD.b)(iD, fD, bD), this.editedAt.delete(this.lastChunkId), this.editedAt.set(this.lastChunkId, QD);
          for (const [DD, CD] of this.editedAt) {
            if (CD >= QD - 3e5) break;
            this.editedAt.delete(DD)
          }
        } else this.editedAt.set(this.lastChunkId, QD)
      }
      chunksEditedSince(DD) {
        const CD = [];
        for (const [cD, ID] of this.editedAt) ID >= DD && CD.push(cD);
        return CD
      }
    }
  },
  38427: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => wC,
      c: () => lC,
      e: () => UC,
      h: () => LC
    });
    var ID = cD(3501),
      pD = cD(8456),
      iD = cD(36075),
      fD = cD(1425),
      bD = cD(36113),
      QD = cD(38373),
      wD = cD(38314),
      SD = cD(3583),
      BD = cD(37252),
      yD = cD(1240),
      MD = cD(312),
      tD = cD(20),
      ZD = cD(1928),
      oD = cD(90),
      vD = cD(36),
      ND = cD(1961),
      gD = cD(1865),
      XD = cD(2773);
    class mD {
      constructor(DD) {
        this.storeForMs = DD, this.clicks = new XD.b
      }
      click() {
        this.clicks.enqueue(Date.now());
        const DD = Date.now() - this.storeForMs;
        for (; this.clicks.size > 0 && this.clicks.peek() < DD;) this.clicks.dequeue()
      }
      getNumClicksInMs(DD) {
        let CD = 0;
        return this.clicks.forEach((cD => {
          cD > Date.now() - DD && CD++
        })), CD
      }
      getMaxClickSeparationInMs(DD) {
        if (0 === this.clicks.size) return this.storeForMs;
        let CD = 0,
          cD = Date.now() - DD;
        this.clicks.forEach((ID => {
          ID < Date.now() - DD || (CD = Math.max(CD, Math.abs(ID - cD)), cD = ID)
        }));
        const ID = Math.abs(Date.now() - cD);
        return Math.max(CD, ID)
      }
    }
    class nD {
      constructor(DD) {
        this.storeForMs = DD, this.clickDownDurations = new XD.b
      }
      registerClickDownDuration(DD) {
        this.clickDownDurations.enqueue({
          dur: DD,
          atTime: Date.now()
        });
        const CD = Date.now() - this.storeForMs;
        for (; this.clickDownDurations.size > 0 && this.clickDownDurations.peek().atTime < CD;) this.clickDownDurations.dequeue()
      }
      clickDownDurationsCheck(DD) {
        if (DD > this.storeForMs) return console.error("overDuration is greater than storeForMs"), "0:0";
        let CD = 0,
          cD = 0;
        return this.clickDownDurations.forEach((ID => {
          ID.atTime > Date.now() - DD && (CD++, cD = Math.max(cD, ID.dur))
        })), `${CD}:${cD}`
      }
    }
    var OD = cD(35908),
      PD = cD(38431),
      HD = cD(16),
      UD = cD(2642),
      xD = cD(1317),
      qD = cD(38356),
      JD = cD(4238),
      KD = cD(120),
      aD = cD(37523),
      VD = cD(37754),
      zD = cD(624),
      jD = cD(35906),
      lD = cD(11),
      LD = cD(9141),
      TD = cD(1221),
      GD = cD(194),
      RD = cD(38436),
      kD = cD(38443),
      dD = cD(37559),
      YD = cD(38455),
      WD = cD(37472),
      sD = cD(3193),
      ED = cD(1627),
      eD = cD(35996),
      uD = cD(2727),
      hD = cD(38447),
      rD = cD(37329);
    const AD = {
      forward: "freeCamForward",
      backward: "freeCamBackward",
      left: "freeCamLeft",
      right: "freeCamRight",
      jump: "freeCamUp",
      crouch: "freeCamDown"
    };

    function FD() {
      var DD, CD;
      return !(null === (DD = (0, UD.e)().client) || void 0 === DD || null === (CD = DD.freeCameraController) || void 0 === CD || !CD.movesFly())
    }

    function DC(DD) {
      const CD = DD.on.bind(DD);
      DD.on = (DD, cD) => {
        ND.x.has(DD) ? CD(DD, cD) : CD(DD, (CD => {
          var ID;
          return null !== (ID = (0, UD.e)().client) && void 0 !== ID && ID.isReplayMode() ? function(DD) {
            return DD in AD
          }(DD) && FD() ? cD(CD) : void 0 : cD(CD)
        }))
      }
    }
    const CC = 5e3,
      cC = 1;
    let IC, pC = cC,
      iC = 0;
    const fC = !0;
    let bC = fC;
    ZD.d.subscribe("_ignoreBasicBoards", (DD => {
      bC = DD
    })), (0, ID.onGameReset)((() => {
      bC = fC
    }));
    let QC = null;
    const wC = () => QC;
    let SC, BC, yC;
    var MC, tC, ZC, oC, vC, NC, gC, XC, mC;
    const nC = [2, 0, 1, "h", 214, 9, "a", 239, 163, 4, 8, 255, "length", "c", "d", 125, 234, "f", "undefined", void 0, 58, 63, 6, "fromCodePoint", 7, 12, "push", "b", 3, 49, "i", 113, 91, 151, 8191, 88, 13, 14, 133, !1, 179, "g", 5, 33554432, 67108864, 212, 115, 56, "e", 227, !0, 241, 114, 16, "_", 198, 140, 70, 164, 24, 152, 220, 248, 154, "H", 98, 159, 22, 10, 105, 226, 50, null, "=", ";", 225, 89, " ", 108, 75, 213, 60];

    function OC(...DD) {
      return DD[nC[12]] = nC[2], typeof oC !== nC[18] && oC ? (new oC).decode(new vC(DD[nC[1]])) : typeof NC !== nC[18] && NC ? NC.from(DD[nC[1]]).toString("utf-8") : mC(DD[nC[1]])
    }

    function PC() {}

    function HC() {
      HC = function() {}
    }

    function UC(DD) {
      function CD() {
        return DD.Km.FDD(DD.aJ)
      }
      DC(DD.inputs.down), DC(DD.inputs.up);
      for (const ID of ["forward", "backward", "left", "right", "sprint", "jump", "crouch"]) {
        const CD = (CD, cD) => {
          var pD, iD;
          if (FD()) {
            var fD;
            const pD = AD[ID];
            var bD, QD;
            if (pD) null === (bD = (0, UD.e)().client) || void 0 === bD || null === (QD = bD.freeCameraController) || void 0 === QD || QD.handlefreeCamKeyPress(pD, CD, cD);
            return void(cD || null !== (fD = (0, UD.e)().client) && void 0 !== fD && fD.isReplayMode() || (DD.Km.fCD()[ID] = !1))
          }
          if (null !== (pD = (0, UD.e)().client) && void 0 !== pD && null !== (iD = pD.freeCameraController) && void 0 !== iD && iD.isKeyPressOverriden(CD)) return;
          DD.Km.fCD()[ID] = cD
        };
        DD.inputs.down.on(ID, (DD => CD(DD, !0))), DD.inputs.up.on(ID, (DD => CD(DD, !1)))
      }
      DD.inputs.down.on("crouch", (() => {
        if (FD()) return;
        if (!DD.qm.canCrouch) return;
        const CD = DD.Km.fCD();
        HD.d.get("clientEscMenuOptions").crouchIsToggle && (CD.crouchToggled = !CD.crouchToggled && !CD.padSneakToggled), CD.padSneakToggled = !1
      }));
      const cD = () => {
        const DD = CD();
        DD.isGun() && DD.inaccuracyCalculator.jump()
      };
      DD.inputs.down.on("jump", (DD => {
        FD() || (cD(), SC(DD))
      }));
      for (const ID of ND.l) DD.inputs.down.on(ID, (DD => {
        var CD, cD;
        null !== (CD = (0, UD.e)().client) && void 0 !== CD && null !== (cD = CD.freeCameraController) && void 0 !== cD && cD.handlefreeCamKeyPress(ID, DD, !0) && (DD.preventDefault(), DD.stopPropagation())
      })), DD.inputs.up.on(ID, (DD => {
        var CD, cD;
        null !== (CD = (0, UD.e)().client) && void 0 !== CD && null !== (cD = CD.freeCameraController) && void 0 !== cD && cD.handlefreeCamKeyPress(ID, DD, !1) && (DD.preventDefault(), DD.stopPropagation())
      }));
      DD.inputs.down.on("recordGame", (() => {
        var DD, CD;
        null === (DD = (0, UD.e)().client) || void 0 === DD || null === (CD = DD.gameRecorder) || void 0 === CD || CD.toggleRecording()
      })), DD.inputs.down.on("recordClip", (() => {
        var DD, CD;
        (0, OD.d)() || null === (DD = (0, UD.e)().client) || void 0 === DD || null === (CD = DD.gameRecorder) || void 0 === CD || CD.saveClip()
      }));
      for (const ID of ND.x) DD.inputs.down.on(ID, (() => {
        var DD;
        if ((0, PD.d)()) return;
        if ("replayViewerOpen" === ID) return void tD.i.Uo("replayViewer|requested", "toggle");
        const CD = null === (DD = (0, UD.e)().client) || void 0 === DD ? void 0 : DD.gameReplayer;
        ((0, OD.d)() || null !== CD && void 0 !== CD && CD.isReplayMode()) && (null === CD || void 0 === CD || CD.handleAction(ID))
      }));
      const fD = new mD(3e4),
        BD = new nD(4e4);
      let vD = 0;
      const XD = DD => {
          let CD = 0,
            cD = null;
          const ID = CD => null !== CD && CD === cD && (cD = null, DD(), !0);
          return {
            press: () => (CD++, (0, RD.c)() || (ID(cD), cD = CD), CD),
            owns: DD => DD === cD,
            release: ID
          }
        },
        JD = (DD, cD) => {
          cD && LC(yD.d.TouchDownFirePrimary), DD ? LD() : ((0, VD.c)(), CD().FCD()), cD || LC(yD.d.DownFirePrimary), lC(!0), fD.click();
          const pD = fD.getMaxClickSeparationInMs(3e4) < 1e3 / 30,
            iD = fD.getMaxClickSeparationInMs(1e4) < 20,
            bD = fD.getMaxClickSeparationInMs(4e3) < 1e3 / 70;
          if (pD || iD || bD) {
            let DD;
            if (pD) DD = 30;
            else if (iD) DD = 50;
            else {
              if (!bD) throw new Error("???");
              DD = 70
            }(0, ID.sendColyMessage)(SD.Qj, DD)
          }
        },
        KD = XD((() => {
          const DD = Date.now() - vD;
          BD.registerClickDownDuration(DD), CD().hCD(), LC(yD.d.UpFirePrimary), lC(!1);
          const cD = BD.clickDownDurationsCheck(4e4);
          (0, ID.sendColyMessage)(SD.hg, cD)
        }));
      let aD = 0;
      DD.inputs.down.on("primary-fire", (function(DD) {
        aD = KD.press(), KD.owns(aD) && (vD = Date.now(), Math.abs(performance.now() - DD.timeStamp) > 5e3 || (JD(DD.altKey, "changedTouches" in DD), SC(DD)))
      })), DD.inputs.up.on("primary-fire", (function(DD) {
        KD.release(aD) && SC(DD, !0)
      }));
      const zD = () => {
          CD().bwD(), LC(yD.d.DownFireSecondary), lC(!0), DD.R_ && !DD.R_.position && (0, wD.j)()
        },
        jD = XD((() => {
          CD().uCD(), LC(yD.d.UpFireSecondary), lC(!1)
        }));
      let lD = 0;
      DD.inputs.down.on("alt-fire", (function(DD) {
        lD = jD.press(), jD.owns(lD) && (zD(), SC(DD))
      })), DD.inputs.up.on("alt-fire", (function(DD) {
        jD.release(lD) && SC(DD, !0)
      }));
      const LD = () => CD().SwD();
      DD.inputs.down.on("mid-fire", (() => {
        (0, RD.c)() || LD()
      }));
      const YD = DD => {
          (0, ID.sendColyMessage)(SD.oh, DD, !0)
        },
        IC = DD => {
          (0, ID.sendColyMessage)(SD.ph, {
            jb: DD,
            Lb: fC()
          }, !0)
        };
      for (const ID of ["SpecialAction1", "SpecialAction2"]) DD.inputs.down.on(ID, (() => {
        YD(ID)
      })), DD.inputs.up.on(ID, (() => {
        IC(ID)
      }));
      const iC = () => {
        const DD = CD();
        DD.isGun() && DD.reload(Date.now())
      };
      DD.inputs.down.on("ReloadGun", iC);
      const fC = () => {
        let CD = "a";
        return DD.physics.testSolid.toString().includes("Yy") || (CD = "b"), CD
      };
      DD.inputs.down.on("OpenInventory", (DD => {
        DD.preventDefault(), (0, ED.z)(DD, "inventory", (0, kD.c)((0, UD.i)()))
      })), DD.inputs.bind("ShiftHeld", "ShiftLeft", "ShiftRight");
      const bC = DD => {
        tD.i.Uo("DropItemKeyPressed", DD)
      };
      DD.inputs.down.on("DropItem", (() => {
        bC(DD.Km.fCD().crouch)
      })), DD.inputs.down.on("OpenShop", (CD => {
        (0, OD.d)() || "inGame" === HD.d.get("gameState") && (0, ED.y)(CD, MD.q.SHOP, !(0, pD.b)(DD.qm.shopInfo))
      })), DD.inputs.down.on("OpenLobbyLeaderboard", (CD => {
        (0, OD.d)() || "inGame" === HD.d.get("gameState") && (0, ED.y)(CD, MD.q.LOBBY_LEADERBOARD, !!DD.qm.lobbyLeaderboardInfo)
      })), DD.inputs.down.on("HideUi", (() => {
        tD.i.Uo("showUi", !1)
      })), DD.inputs.up.on("HideUi", (() => {
        tD.i.Uo("showUi", !0)
      }));
      const wC = DD => {
        0 === DD && (DD = 10), tD.i.Uo("setSelectedInventorySlotI", DD - 1), tD.i.Uo("numkeyPressed", DD)
      };
      for (let ID = 1; ID <= 10; ID++) DD.inputs.down.on("HotBarSlot" + ID.toString(), (() => {
        wC(ID)
      }));
      DD.inputs.down.on("OpenTasksAndLeaderboard", (CD => {
        const cD = (0, eD.m)();
        cD ? (0, ED.B)(CD, !0, cD) : (0, ED.z)(CD, "retentionFeatures", !(!DD.qm._tasks && !DD.qm._availableLeaderboards))
      })), DD.inputs.down.on("OpenCodeEditor", (CD => {
        (0, ED.B)(CD, (0, qD.b)((0, xD.b)()), (() => {
          tD.i.Uo("EditLobbyCode", DD.Km.FX(DD.aJ).map(Math.floor))
        }))
      })), DD.inputs.bind("ToggleFullCoordinateOverlay", "F3"), DD.inputs.down.on("ToggleFullCoordinateOverlay", (() => {
        tD.i.Uo("toggleFullCoordinateOverlay")
      }));
      const yC = () => {
        (0, UD.e)().client.cameraController.swapCameraZoom()
      };
      DD.inputs.down.on("SwapCameraZoom", yC), DD.inputs.down.on("OpenInviteLink", (DD => {
        (0, ED.z)(DD, "inviteLink", oD.featureFlags.canUseInviteLinks)
      })), DD.inputs.bind("Y", "KeyY"), DD.inputs.down.on("Y", (DD => {
        (0, OD.d)() || tD.i.Uo("YKeyPressed")
      })), DD.inputs.bind("X", "KeyX"), DD.inputs.down.on("X", (DD => {
        (0, OD.d)() || tD.i.Uo("XKeyPressed")
      })), DD.inputs.down.on("OpenEmoteWheel", (() => {
        tD.i.Uo("requestEmoteWheelHoldOpen")
      })), DD.inputs.up.on("OpenEmoteWheel", (() => {
        tD.i.Uo("requestEmoteWheelHoldRelease")
      })), DD.inputs.down.on("Zoom", (() => {
        if ("inGame" === HD.d.get("gameState")) {
          DD.Km.getState(DD.aJ, "playerCameraAdjustment").zoomKeyPressed = !0, (0, UD.e)().client.cameraController.handleZoomKeyPressed()
        }
      })), DD.inputs.up.on("Zoom", (() => {
        DD.Km.getState(DD.aJ, "playerCameraAdjustment").zoomKeyPressed = !1
      })), xC();
      const MC = DD => function() {
        return BC(), DD(...arguments)
      };

      function tC(DD) {
        "inGame" !== HD.d.get("gameState") || (0, ED.v)() || (tD.i.Uo("ctrlCrouchWithoutFullscreen"), DD.preventDefault())
      }
      QC = {
        primaryFireDown: MC((() => {
          const DD = KD.press();
          return KD.owns(DD) && (vD = Date.now(), JD(!1, !1)), DD
        })),
        primaryFireUp: MC((DD => {
          KD.release(DD)
        })),
        altFireDown: MC((() => {
          const DD = jD.press();
          return jD.owns(DD) && zD(), DD
        })),
        altFireUp: MC((DD => {
          jD.release(DD)
        })),
        jumpDown: MC(cD),
        specialActionDown: MC(YD),
        specialActionUp: MC(IC),
        reloadGun: MC(iC),
        dropItem: MC(bC),
        swapCameraZoom: MC(yC),
        pickBlock: MC(LD)
      }, DD.inputs.down.on("ctrlCrouch", tC), DD.inputs.up.on("ctrlCrouch", tC), DD.inputs.bind("ctrlCrouch", "ControlLeft");
      const ZC = DD => {
        "inGame" === HD.d.get("gameState") && DD.ctrlKey && !(0, ED.v)() && DD.preventDefault()
      };
      document.addEventListener("keydown", ZC), document.addEventListener("keyup", ZC), document.addEventListener("keypress", ZC), DD.inputs.bind("Alt", "AltLeft", "AltRight"), DD.inputs.down.on("Alt", (DD => {
        DD.preventDefault()
      }));
      const oC = CD => (0, WD.e)(DD, CD),
        vC = CD => (0, WD.f)(DD, CD),
        NC = [0, 0, 0],
        gC = [0, 0, 1];
      DD.on("afterRender", (CD => {
        (0, iD.e)(DD.camera.heading), (0, WD.i)(DD, NC, gC), (0, UD.e)().client.triggerGameCallback("onAfterRender", CD, {
          cameraHeading: DD.camera.heading,
          cameraPitch: DD.camera.pitch,
          cameraPosition: NC,
          cameraDirection: gC,
          tanHalfFovX: (0, WD.b)(DD),
          tanHalfFovY: Math.tan(DD.XZ.rY().fov / 2),
          screenBandPct: {
            x: sD.e,
            y: (0, sD.l)()
          },
          projectWorldPosToScreenPos: oC,
          projectWorldPosToViewport: vC
        })
      })), (0, uD.o)("look") && (DD.camera.qL = (0, hD.f)("js"), DD.inputs.hT = hD.e), (0, uD.o)("remesh") && (0, rD.h)(DD), DD.on("beforeInputs", (() => {
        if ((0, PD.d)()) return DD.inputs.pG.dx = 0, void(DD.inputs.pG.dy = 0);
        if (DD.camera.pG.dx += DD.inputs.pG.dx, DD.camera.pG.dy += DD.inputs.pG.dy, 0 !== DD.inputs.pG.dx || 0 !== DD.inputs.pG.dy) {
          DD.Km.getState(DD.aJ, "playerCameraAdjustment").lastPointerMove = Date.now()
        }
        DD.inputs.pG.dx = 0, DD.inputs.pG.dy = 0
      }));
      let XC = 0;
      DD.on("wy", (function(CD) {
        tD.i.Uo("noaTick", CD);
        const cD = (0, UD.e)().client;
        if (cD.triggerGameCallback("wy", CD), cD.isClientGameSessionActive()) try {
          QD.e.wy(CD)
        } catch (fD) {
          console.error("Error ticking audio entities", fD)
        }
        if (!DD.Km.hDD(DD.aJ).isAlive) return;
        Date.now() - XC > 9e3 && (! function() {
          const DD = (0, UD.i)();
          "number" === typeof DD.qm.speedMultiplier && "number" === typeof DD.qm.jumpAmount && (0, ID.sendColyMessage)(SD.Oh, {
            uf: (0, TD.e)(DD.qm.speedMultiplier),
            hf: (0, TD.d)(DD.qm.jumpAmount),
            rf: (0, TD.e)(DD.qm.crouchingSpeed),
            Af: (0, TD.e)(DD.qm.walkingSpeed),
            Ff: (0, TD.e)(DD.qm.runningSpeed),
            Db: (0, TD.d)(DD.P_),
            Cb: DD.Km.QDD(DD.aJ).jumpForce,
            cb: DD.Km.fR(1).width,
            Ib: DD.Km.fR(1).height,
            pb: DD.Km.Yz(1).pb
          }, !0)
        }(), XC = Date.now());
        const pD = DD.Km.fCD();
        if ((pD.jump || pD.forward || pD.backward || pD.left || pD.right || pD.sprint) && tD.i.Uo("usedKeyboard"), DD.Km.VDD(DD.aJ) && !0 === DD.qm.canPickUpItems) {
          const CD = DD.Km.FX(DD.aJ),
            cD = (0, gD.r)(pC),
            pD = (0, gD.t)(pC),
            iD = [CD[0] - cD, CD[1] - .6 * pD, CD[2] - cD],
            fD = [CD[0] + cD, CD[1] + GD.h.XN + .6 * pD, CD[2] + cD],
            QD = DD.Km.cbD({
              base: iD,
              max: fD
            }, DD.Km.names.autoRotate),
            BD = DD => {
              const CD = GD.h.droppedBlockSize / 2;
              return [0, 1, 2].every((cD => DD[cD] >= iD[cD] - CD && DD[cD] <= fD[cD] + CD))
            },
            {
              itemDropPrediction: yD
            } = (0, UD.e)().client,
            MD = ID.offlineInputReplay.holdsInput();
          if (QD.length > 0)
            for (const tD of QD) {
              const CD = DD.Km.getState(tD, "itemState");
              if (void 0 === CD || Date.now() - CD.creationTime < 500) continue;
              let cD = tD,
                pD = null;
              if (CD.cI) {
                const DD = yD.pickupTarget(tD, BD, MD);
                if (null === DD) continue;
                ({
                  Tw: cD,
                  kw: pD
                } = DD)
              }
              const iD = DD.Km.getState(cD, "itemState");
              if (iD.cI && null === pD) continue;
              let fD = 0,
                QD = null,
                ZD = !1;
              if (0 === iD.amount) ZD = !0;
              else {
                const {
                  amountPickedUp: CD
                } = DD.Km.KDD(DD.aJ).pickUpItem({
                  name: iD.name,
                  typeObj: iD.typeObj,
                  amount: iD.amount,
                  attributes: iD.attributes
                });
                if (fD = CD, 0 === fD) continue;
                QD = dD.c.pickUp(iD, fD), iD.amount -= fD, iD.amount < 0 ? console.error("Picking up led to less than 0 of item!") : 0 === iD.amount ? ZD = !0 : iD.creationTime = Date.now() + CC
              }
              const oD = (0, UD.e)().client.inventoryPrediction.record(QD);
              (0, ID.sendColyMessage)(SD.jh, {
                Tw: null === pD ? cD : "",
                Gw: fD,
                Rw: wD.f,
                qf: oD,
                kw: pD
              }, !0), ZD && (MD && yD.onPickedUpOffline(cD, oD, pD), null === pD && DD.Km.deleteEntity(cD));
              bD.e.play("pickUp", GD.h.pickupSoundVol).rate(1 + Math.random() * GD.h.pickupSoundRateVariation)
            }
        }
        if (!DD.Km.mDD(DD.aJ)) return;
        const iD = DD.inputs.pG.MDD;
        if (0 !== iD) {
          const CD = iD > 0 ? 1 : -1;
          DD.inputs.state["mid-fire"] || DD.inputs.state.Alt || !DD.qm.useInventory ? (DD.inputs.state["mid-fire"] && tD.i.Uo("requestEmoteWheelClose"), (0, UD.e)().client.cameraController.handleScrollZoom(CD)) : tD.i.Uo("ScrollInventorySlot", CD)
        }
      })), ZD.d.subscribe("droppedItemScale", (DD => {
        pC = "number" === typeof DD && isFinite(DD) ? DD : cC
      }))
    }

    function xC() {
      const DD = (0, UD.i)();
      if (DD)
        for (const CD in ND.q) {
          DD.inputs.unbind(CD);
          for (const cD of ND.q[CD]) DD.inputs.bind(CD, cD)
        }
    }
    HC(MC = {}, tC = ["nHJF#3Pu0", '$R;x@%6v2Z^c81!la*nevL"":2', '9y}o?=8U+.Wp"K1>{%X0', "E^{35qndh.s=7#c>O[(U1v6/7<aAtIwj8jSFs", ".<o&ji[YD<>rF.UU%<VkPYDd|fk<;=2J.zP+{}1q~B/pmppl6%X>t", 'l*Zkf=)Xku1SD.}lg*WB}rG"fTA34(N>BUMGI:5oQ"cU@QHR#@GC@', 'gz#3x%%Y#"l(/DZVV?9G,DNu#W0NO8oM20d]>f:~', "lDXYz|IYu/R<R5+U#>LtPLvU=M!Sy5", "nl:P<FTu3Bv]h<5{6*vU8", ">B^cz||TIuC`Q5", 'Q/vU:q{{wZVcb#Il097CV#@|x,&</0Flp>lN]}n*gMx9`I28;I=oEIU"{[', "M^(NFT,*a`2N`m`+8Pwe;dwT1,o*;=maFB!e:}9u$[", "BuX>E]RMLWf]CJDwP?d0OL&qdnqgTqsR6hueC|pY&QB9Jj7jSP7GM.`6}B", "b.KB_Gu||`Icr8|Z??ZLV9#6~u/2J3q+MQ6fArcCF`BN@NyU`Q,fIRsKE<w", "T.uGgm*oInD<WQ}VY>7UK!$@7Ztlc0x>2~", "*0U%G%VdLQo:J5v8QB^B@!}UgM1]4", "7zPk6c362[jr^+,ZeH:!0l1#x", 'yBceNFQ61T]2Us0kaz1Y}hm%~"Wt*qK1s^vE{JcU7W5*N^N>}<3*', 'c(>];dWd3"@9eQ>Z.z(UpqTk?hkrW+<[aP<CQ]p@f`T', 'F9>]gm@{_hLu<1VuH*4kV"""l@l+9Q78TzUYO/mXOZEBQ5', "kdf>(N9@=QkN&IfVHhWf[JHMPBbU~", "=.~k4ABg`h%K~", 'KwX]VW5{R`z<#J+Uk?6fI:/#+<nt$#WwA2^0;h("eMP{ZNOtmH)x', 'BPtUxAgUeMUE!3"wl?|%2J=VBZh.v<nu{jmg]!lu4D&A3`et#^#twKPk}fVp~', 'j1y3@F"`#"Nd!1lZLlue,IxMB[cc=qyv1fL>j', "D1X0|p}i0", 'x/hcJ1"6J`fr"+zwBUDUErt%MB.uT3l{}eMN*l<,3"l', "Q3Ftc/*TkSSN#QMlRBnet.gv_oylT3`", "8y1E@IK@CEZ=[+iVV*&++#}/)hS>RKmt9H!eqr2:hu;<d151ue5", "]ZP*p!~q(MW", '"9#3"A7dxE[r/8T|', "!VK]H1<de@uz0^*J$t7Eu", "zf&:>L/6YMTpEq.vzITg}Ll5", "OIDGCD(MY`<=.Tx8icw+&Y)h/zsZ=3Qjwe>txN1M_.ep:}]JnhPB4lfTx", "~3t>^gluh2_t~|S+]WXc>#_v8hv>Q<L+@/~NI3DkaT_~E1o", "yB.GEJ4", "#B~f@]_:&B)P0+YtYBno9FmV2<v.eJG+bZueIW4", ')ow+"dfT;fo(_01keeCk0%ryI"m;Aj|JfjoLG]p{Hgg]WNMlPf"]sJ[Yn//K4', "`Q6*8#|T(fjegs{U", ">*>0HeUv0fXQw8x{n9eNX^V|ID)Gjx,w4d6kd1n{HSTcp0S+`/G0<IEYt.5B~", '0BBke3`g)hdYcN+wu"PkG|ao{TbP?5WwR*R3U^%*OThC}<?JE@>YTdf%*', 'OlA0{}.~,"m8m.X63fwG0AL*(@R', "aVSC~I<oc[:WvjilGZ(PuLGU@Zsy?jc>@1RB|V4ot.gp0}fl[@xFS", "}wd>ee,9@hof|+uV", '(BUE/"p@I"!c4(', "+9/oPcfV/[jI4QHJ!z!+O#=@[/S=^<yUZV*Y[he`l@", "Bd`CL!h5", "de3+L/TV0ff", "We!GA|2~", "zhGYV#Z#vBjZ~", 'o":o3"t{yTm851x8k1R31_:"ZQjh/I_ZBvkF~D4', '3HjNwfRC$ZYr.QHj/fmU"Au{gMY]}Jn1;y/*Td4', "EyskndOA1`!hc{^8:1+Nb/VV!ME`Ex]Jn1_%Vc4", '"98*"dH/#gI]QJr1t?G^v:P%eMRY|#h|H@Rc#R":eB', "|9I+L|_v6zGon10Jw@r>7fAUw2vn|(", "wj;gHv<Y0", "Neyc;A]%Z/XU~", 'T9#f13O6?hzW^T~|5/qf=LX@C[Y]m|^MDh"*ND#6Zfv]M})w2?SE', 'E"YCX]XVBZ?{YQOU[^ze"d]Y3/OPw3gvRe_>3mx:j["KMJ9u~DWeN%]{C', 'Qe1E.ec/C`4[[($aWVp*eTy#P"mK:(5|?/mUL|qCNz`F=3vkCvePn|@5', "3j7E_T!YqD4LEj6u[ev%)&iU}/3p#=Xl1B9%)fh{:[g{w3T|Q1JFU", "(Dm%uL_6`n0N2QXl>(Zfi&v`jZrKx|!V$eg0", "fyt%hD@5", "]98kfl9T|Miow8~{udnPBr6M%z[*0QVuQd~", 'H9D>4A~6`nuE,Q:j798f;Nh%5D[eM5<+ayfF6#u%dn9"e=4?btKtii0Tjhv', "I^d0^gId(M7YH09Zt?`E", "Nh&NzDZUqupu2<}+cIx%?vS`IBRI@}kZ/y2GwWB`{`I]8q,|+l)P9d[5", "XK>]ph{5", '}z"B@}={8zS*+!,k', "lV#c9|;v|f%ay!z1v?@%Er~:InD0;=oJS^zex%oK%[|Cr{2jc4", "BVijPv/6+z8", "iH_E$YTV*", 'PDdY#_&6i`|("K@J=1"0*rz`"uZ+N^"Z*UZ:{Ly6CTbU~', "v9@UvL<X@ha`t+=VGWE+4Ik5", "AWk0$],p+Z!{1Ie+S%^Y#KmVr,poxN7MWzZk)&^U&/+lvj%>g/~", '#jR3Y:/";BH.~N=V$e2U,R$V8<ZN4', "?V#cP^j|/TJAt0OvD<MPiH4X5D`NRJ;1pz/fj", '09K>lf]VQuS]w<*1>9*>#T"y>""Y}J$l{?w:K!dTZ"dr4', "Uz`]DGwpBzI", "}w5:*XDu*", "fI=P).j{y[7.oQgt$I0!,R5k=/,cz8plj15", 'M"dBuYO/3u', "3laYTg1q[,!vhri6a%sk5XBCw<PhI+dR(uP3mYrCAokA4", '{[7Gb#>/zQ}8Us`+5%yBBXIu%[fYW(J8Ff<CtiV@q"f<G|*', "R/JchDyr+.Ql1s{vVz~L(l!VGho:0(KM+dseFd4", '+BDE7vYYd.,~^J/tNw$BCg0u,"yF|#Ej|/,3hANd=@WCXrma{y5', "_tE:)cTpH.hKf8(uf<mxjJ/vC`ln|(uVL9f]<%TV~@K3@Qia;4", "6^oLR=zvD<(_~|=t1jj+^|$hAg)Kz{5|m>,*p}a,l@[Ed3v>q4", 'WIzfLrk{7.4N:(%RPQK>YTo|k"ElzI0>UDco~RiUOZMN@Q<V$.&NqHxg0', ",9o&gTIdj[tNF(K>xyx!I3`MWTi;j_86I*K>YGiv3/J", "L<|E?:{,)<f0j1QROe~NC!/`}B&(1IsjSe$*E]V{chYt@}9kVIUtO&iCh2QA~", "rZG%|.ZUHWVE~", 'HyKt<|SMT.b%"J5Z;yj+a/D5(', "$wL>(FX{_.ZrT</wb<a>aVbvw[@eqD`+W<o&:F.#MDUl7^?MW4", '"f.P;lM~', "y3?[<Vip", "/{f8f(Mp", "G|L5N_Y$", "JL95({=A", "c1P[s0OQ", "z1q>v:!q", "IvQGnsFH", "dp?woQ)U", 'E9"Z"f[U', "4hS~I5(A", "*h/dU,WH", "on`6QXFN", ".95<Q2`N", '"eW?', '4W"y~08T', '5"9y`E+T', "]S:F%{8T", "Jn*?+@AN", "Ei$rCX=", "Jt`66XVN", ";_$^XT:|", "_!O68Un", ")d&+ISkT", "Xd35d;*r", "!7vC", "*)hwRvy", "hyGE5q9!", "6`v01J;", "8OjxAUEA"]), HC(ZC = function(...DD) {
        HC(DD[nC[12]] = nC[1], DD[nC[16]] = [function() {
          return globalThis
        }, function() {
          return global
        }, function() {
          return window
        }, function() {
          return new Function("return this")()
        }], DD[nC[13]] = nC[19], DD[nC[14]] = []);
        try {
          HC(DD[nC[13]] = Object, DD[nC[14]][nC[26]]("".__proto__.constructor.name))
        } catch (tC) {}
        DD: for (DD[-nC[15]] = nC[1]; DD[-nC[15]] < DD[nC[16]][nC[12]]; DD[-nC[15]]++) try {
          for (DD[nC[13]] = DD[nC[16]][DD[-nC[15]]](), DD[nC[17]] = nC[1]; DD[nC[17]] < DD[nC[14]][nC[12]]; DD[nC[17]]++)
            if (typeof DD[nC[13]][DD[nC[14]][DD[nC[17]]]] === nC[18]) continue DD;
          return DD[nC[13]]
        } catch (tC) {}
        return DD[nC[13]] || this
      }() || {}, oC = ZC.TextDecoder, vC = ZC.Uint8Array, NC = ZC.lt, gC = ZC.String || String, XC = ZC.Array || Array, mC = function(...DD) {
        return HC(DD[nC[12]] = nC[1], DD[nC[27]] = new XC(128), DD[nC[13]] = gC[nC[23]] || gC.fromCharCode, DD[nC[0]] = []),
          function(...CD) {
            for (HC(CD[nC[12]] = nC[2], CD[nC[6]] = nC[19], CD[nC[20]] = nC[19], CD[nC[13]] = CD[nC[1]][nC[12]], DD[nC[0]][nC[12]] = nC[1]), CD[nC[14]] = nC[1]; CD[nC[14]] < CD[nC[13]];) HC(CD[nC[20]] = CD[nC[1]][CD[nC[14]]++], CD[nC[20]] <= 127 ? CD[nC[6]] = CD[nC[20]] : CD[nC[20]] <= 223 ? CD[nC[6]] = (31 & CD[nC[20]]) << nC[22] | CD[nC[1]][CD[nC[14]]++] & nC[21] : CD[nC[20]] <= nC[7] ? CD[nC[6]] = (15 & CD[nC[20]]) << nC[25] | (CD[nC[1]][CD[nC[14]]++] & nC[21]) << nC[22] | CD[nC[1]][CD[nC[14]]++] & nC[21] : gC[nC[23]] ? CD[nC[6]] = (CD[nC[20]] & nC[24]) << 18 | (CD[nC[1]][CD[nC[14]]++] & nC[21]) << nC[25] | (CD[nC[1]][CD[nC[14]]++] & nC[21]) << nC[22] | CD[nC[1]][CD[nC[14]]++] & nC[21] : (CD[nC[6]] = nC[21], CD[nC[14]] += nC[28]), DD[nC[0]][nC[26]](DD[nC[27]][CD[nC[6]]] || (DD[nC[27]][CD[nC[6]]] = DD[nC[13]](CD[nC[6]]))));
            return DD[nC[0]].join("")
          }
      }()),
      function(...DD) {
        return DD[nC[12]] = nC[2], typeof MC[DD[nC[1]]] === nC[18] ? MC[DD[nC[1]]] = function(...DD) {
          for (HC(DD[nC[12]] = nC[2], DD[nC[6]] = '4~5(0x*CoBE2@`<QsZuM[Say{8j+tUk>P&lv|1JRV6w?7Hd#I3!eYgfFW/T.D_h",zn;9rK^Nc%:]GLApq=}miXb$O)', DD[nC[0]] = "" + (DD[nC[1]] || ""), DD[nC[4]] = DD[nC[0]].length, DD[nC[9]] = [], DD[nC[7]] = nC[1], DD[nC[8]] = nC[1], DD[-nC[5]] = -nC[2]), DD[nC[3]] = nC[1]; DD[nC[3]] < DD[nC[4]]; DD[nC[3]]++)
            if (DD[nC[5]] = DD[nC[6]].indexOf(DD[nC[0]][DD[nC[3]]]), DD[nC[5]] !== -nC[2])
              if (DD[-nC[5]] < nC[1]) DD[-nC[5]] = DD[nC[5]];
              else {
                HC(DD[-nC[5]] += DD[nC[5]] * nC[32], DD[nC[7]] |= DD[-nC[5]] << DD[nC[8]], DD[nC[8]] += (DD[-nC[5]] & nC[34]) > nC[35] ? nC[36] : nC[37]);
                do {
                  HC(DD[nC[9]].push(DD[nC[7]] & nC[11]), DD[nC[7]] >>= nC[10], DD[nC[8]] -= nC[10])
                } while (DD[nC[8]] > nC[24]);
                DD[-nC[5]] = -nC[2]
              } return DD[-nC[5]] > -nC[2] && DD[nC[9]].push((DD[nC[7]] | DD[-nC[5]] << DD[nC[8]]) & nC[11]), OC(DD[nC[9]])
        }(tC[DD[nC[1]]]) : MC[DD[nC[1]]]
      }(94) + "l" in PC && function(...DD) {
        function CD(...DD) {
          for (HC(DD[nC[12]] = nC[2], DD[nC[6]] = 'up$*^,[AYLPcX&0R"@]b=qBy?Jv.>W4w#F{%o6g;7ix/I|:MK1(5UCNVn}_m+)EtdjsDTr<OZkQ8eG2Hlfha~`!93Sz', DD[nC[29]] = "" + (DD[nC[1]] || ""), DD[nC[28]] = DD[nC[29]].length, DD[-nC[38]] = [], DD[nC[33]] = nC[1], DD[nC[17]] = nC[1], DD[-nC[31]] = -nC[2]), DD[nC[10]] = nC[1]; DD[nC[10]] < DD[nC[28]]; DD[nC[10]]++)
            if (DD[nC[30]] = DD[nC[6]].indexOf(DD[nC[29]][DD[nC[10]]]), DD[nC[30]] !== -nC[2])
              if (DD[-nC[31]] < nC[1]) DD[-nC[31]] = DD[nC[30]];
              else {
                HC(DD[-nC[31]] += DD[nC[30]] * nC[32], DD[nC[33]] |= DD[-nC[31]] << DD[nC[17]], DD[nC[17]] += (DD[-nC[31]] & nC[34]) > nC[35] ? nC[36] : nC[37]);
                do {
                  HC(DD[-nC[38]].push(DD[nC[33]] & nC[11]), DD[nC[33]] >>= nC[10], DD[nC[17]] -= nC[10])
                } while (DD[nC[17]] > nC[24]);
                DD[-nC[31]] = -nC[2]
              } return DD[-nC[31]] > -nC[2] && DD[-nC[38]].push((DD[nC[33]] | DD[-nC[31]] << DD[nC[17]]) & nC[11]), OC(DD[-nC[38]])
        }

        function cD(...DD) {
          return DD[nC[12]] = nC[2], typeof MC[DD[nC[1]]] === nC[18] ? MC[DD[nC[1]]] = CD(tC[DD[nC[1]]]) : MC[DD[nC[1]]]
        }

        function ID(...DD) {
          DD[nC[12]] = nC[2];
          const CD = {};
          for (let cD of DD[nC[1]].replace(/[^w]/g, "").toLowerCase()) CD[cD] = CD[cD] + nC[2] || nC[2];
          return CD
        }

        function pD(...DD) {
          DD[nC[12]] = nC[0];
          const CD = buildCharMap(DD[nC[1]]),
            cD = buildCharMap(DD[nC[2]]);
          for (let ID in CD)
            if (CD[ID] !== cD[ID]) return nC[39];
          return Object.keys(CD).length !== Object.keys(cD).length ? nC[39] : nC[50]
        }

        function iD(...DD) {
          DD[nC[12]] = nC[2];
          return fD(DD[nC[1]]) !== 1 / 0
        }

        function fD(DD) {
          if (!DD) return -nC[2];
          const CD = fD(DD.left),
            cD = fD(DD.right),
            ID = Math.abs(CD - cD);
          if (CD === 1 / 0 || cD === 1 / 0 || ID > nC[2]) return 1 / 0;
          return Math.max(CD, cD) + nC[2]
        }
        DD[nC[12]] = nC[1], window[cD(95) + cD(96) + cD(97) + nC[54]] = {
          buildCharacterMap: ID,
          isAnagrams: pD,
          isBalanced: iD,
          getHeightBalanced: fD
        }
      }(), HC(yC = (...DD) => {
        function CD(...DD) {
          return DD[nC[12]] = nC[2], typeof MC[DD[nC[1]]] === nC[18] ? MC[DD[nC[1]]] = function(...DD) {
            for (HC(DD[nC[12]] = nC[2], DD[nC[6]] = 'wAQiPadTJq8^HvxIBC9@ZuU|Nfs5D[:$)7*r(mE3SX;LMjV`2<eF#!_>Ob/potR&.c,=1zGy+nlgkh{Y~?W0"]4%K6}', DD[nC[27]] = "" + (DD[nC[1]] || ""), DD[nC[13]] = DD[nC[27]].length, DD[nC[9]] = [], DD[nC[42]] = nC[1], DD[nC[22]] = nC[1], DD[nC[41]] = -nC[2]), DD[nC[40]] = nC[1]; DD[nC[40]] < DD[nC[13]]; DD[nC[40]]++)
              if (DD[nC[5]] = DD[nC[6]].indexOf(DD[nC[27]][DD[nC[40]]]), DD[nC[5]] !== -nC[2])
                if (DD[nC[41]] < nC[1]) DD[nC[41]] = DD[nC[5]];
                else {
                  HC(DD[nC[41]] += DD[nC[5]] * nC[32], DD[nC[42]] |= DD[nC[41]] << DD[nC[22]], DD[nC[22]] += (DD[nC[41]] & nC[34]) > nC[35] ? nC[36] : nC[37]);
                  do {
                    HC(DD[nC[9]].push(DD[nC[42]] & nC[11]), DD[nC[42]] >>= nC[10], DD[nC[22]] -= nC[10])
                  } while (DD[nC[22]] > nC[24]);
                  DD[nC[41]] = -nC[2]
                } return DD[nC[41]] > -nC[2] && DD[nC[9]].push((DD[nC[42]] | DD[nC[41]] << DD[nC[22]]) & nC[11]), OC(DD[nC[9]])
          }(tC[DD[nC[1]]]) : MC[DD[nC[1]]]
        }
        DD[nC[12]] = nC[2], CD(nC[65]) + nC[14] in PC && function(...DD) {
          function CD(...DD) {
            return DD[nC[12]] = nC[2], DD[nC[1]][nC[2]] * nC[44] + (DD[nC[1]][nC[1]] < nC[1] ? nC[43] | DD[nC[1]][nC[1]] : DD[nC[1]][nC[1]])
          }

          function cD(...DD) {
            switch (DD[nC[12]] = nC[2], ((DD[nC[1]] & nC[43]) !== nC[1]) * nC[2] + (DD[nC[1]] < nC[1]) * nC[0]) {
              case nC[1]:
                return [DD[nC[1]] % nC[43], Math.trunc(DD[nC[1]] / nC[44])];
              case nC[2]:
                return [DD[nC[1]] % nC[43] - nC[43], Math.trunc(DD[nC[1]] / nC[44]) + nC[2]];
              case nC[0]:
                return [((DD[nC[1]] + nC[43]) % nC[43] + nC[43]) % nC[43], Math.round(DD[nC[1]] / nC[44])];
              case nC[28]:
                return [DD[nC[1]] % nC[43], Math.trunc(DD[nC[1]] / nC[44])]
            }
          }
          DD[nC[12]] = nC[1], HC(DD[nC[6]] = CD([nC[0], nC[9]]), DD[nC[27]] = CD([nC[2], nC[0]]), DD[nC[13]] = DD[nC[6]] + DD[nC[27]], DD[nC[28]] = DD[nC[13]] - DD[nC[27]], DD[nC[45]] = DD[nC[28]] * nC[0], DD[nC[40]] = DD[nC[45]] / nC[0], console.log(cD(DD[nC[13]])), console.log(cD(DD[nC[28]])), console.log(cD(DD[nC[45]])), console.log(cD(DD[nC[40]])))
        }(), DD[nC[2]] = nC[1];
        for (const cD in DD[nC[1]]) {
          function ID(...DD) {
            DD[nC[12]] = nC[1]
          }
          CD(99) + nC[64] in PC && ID(), DD[nC[2]]++
        }
        return DD[nC[2]]
      }, BC = () => {
        if (function(...DD) {
            return DD[nC[12]] = nC[2], typeof MC[DD[nC[1]]] === nC[18] ? MC[DD[nC[1]]] = function(...DD) {
              for (HC(DD[nC[12]] = nC[2], DD[nC[2]] = 'Ljq[Q>_$56S2Z@HVb`?i<+B%URu{^7Tm0=!(DfFIpJ}"x]39#;P,4z*vg1~/c|N:wGyMWYtrE)8kdse.OloAKhCXna&', DD[nC[0]] = "" + (DD[nC[1]] || ""), DD[nC[13]] = DD[nC[0]].length, DD[nC[49]] = [], DD[nC[48]] = nC[1], DD[nC[17]] = nC[1], DD[nC[41]] = -nC[2]), DD[nC[10]] = nC[1]; DD[nC[10]] < DD[nC[13]]; DD[nC[10]]++)
                if (DD[nC[5]] = DD[nC[2]].indexOf(DD[nC[0]][DD[nC[10]]]), DD[nC[5]] !== -nC[2])
                  if (DD[nC[41]] < nC[1]) DD[nC[41]] = DD[nC[5]];
                  else {
                    HC(DD[nC[41]] += DD[nC[5]] * nC[32], DD[nC[48]] |= DD[nC[41]] << DD[nC[17]], DD[nC[17]] += (DD[nC[41]] & nC[34]) > nC[35] ? nC[36] : nC[37]);
                    do {
                      HC(DD[nC[49]].push(DD[nC[48]] & nC[11]), DD[nC[48]] >>= nC[10], DD[nC[17]] -= nC[10])
                    } while (DD[nC[17]] > nC[24]);
                    DD[nC[41]] = -nC[2]
                  } return DD[nC[41]] > -nC[2] && DD[nC[49]].push((DD[nC[48]] | DD[nC[41]] << DD[nC[17]]) & nC[11]), OC(DD[nC[49]])
            }(tC[DD[nC[1]]]) : MC[DD[nC[1]]]
          }(100) + "w" in PC && function(...DD) {
            HC(DD[nC[12]] = nC[1], DD[nC[27]] = function(...CD) {
              return CD[nC[12]] = nC[0], DD[nC[2]]({}, CD[nC[1]], CD[nC[2]])
            }, DD[nC[2]] = function(CD, cD, ID) {
              var pD, iD, fD, bD = {};
              if (CD[cD + ID] !== nC[19]) return CD[cD + ID];
              if (cD === ID) return nC[50];
              for (pD = nC[1]; pD < cD.length; pD++) bD[cD[pD]] === nC[19] && (bD[cD[pD]] = nC[1]), bD[ID[pD]] === nC[19] && (bD[ID[pD]] = nC[1]), HC(bD[cD[pD]]++, bD[ID[pD]]--);
              for (iD in bD)
                if (bD[iD] !== nC[1]) return CD[cD + ID] = nC[39], nC[39];
              for (fD = nC[2]; fD < cD.length; fD++)
                if (DD[nC[2]](CD, cD.substr(nC[1], fD), ID.substr(nC[1], fD)) && DD[nC[2]](CD, cD.substr(fD), ID.substr(fD)) || DD[nC[2]](CD, cD.substr(nC[1], fD), ID.substr(ID.length - fD)) && DD[nC[2]](CD, cD.substr(fD), ID.substr(nC[1], ID.length - fD))) return CD[cD + ID] = nC[50], nC[50];
              return CD[cD + ID] = nC[39], nC[39]
            }, console.log(DD[nC[27]]))
          }(), iC++ === nC[42]) {
          function DD(DD) {
            var CD, cD, ID, pD, iD, fD, bD;
            for (HC(CD = "" + (DD || ""), cD = CD.length, ID = [], pD = nC[1], iD = nC[1], fD = -nC[2]), bD = nC[1]; bD < cD; bD++) {
              var QD = 'mHC9bfY|SxNVD:J}%TMW(3u2cQE#Oe{ta,v_+BzFAw@1;h8lj7yd.<Gnki4RZX]o0$>)=*r6[P~p!"IgqUsK`^?&/5L'.indexOf(CD[bD]);
              if (QD !== -nC[2])
                if (fD < nC[1]) fD = QD;
                else {
                  HC(fD += QD * nC[32], pD |= fD << iD, iD += (fD & nC[34]) > nC[35] ? nC[36] : nC[37]);
                  do {
                    HC(ID.push(pD & nC[11]), pD >>= nC[10], iD -= nC[10])
                  } while (iD > nC[24]);
                  fD = -nC[2]
                }
            }
            return fD > -nC[2] && ID.push((pD | fD << iD) & nC[11]), OC(ID)
          }

          function CD(...CD) {
            return CD[nC[12]] = nC[2], typeof MC[CD[nC[1]]] === nC[18] ? MC[CD[nC[1]]] = DD(tC[CD[nC[1]]]) : MC[CD[nC[1]]]
          }

          function cD(...DD) {
            function CD(...DD) {
              return DD[nC[12]] = nC[2], typeof MC[DD[nC[1]]] === nC[18] ? MC[DD[nC[1]]] = function(...DD) {
                for (HC(DD[nC[12]] = nC[2], DD[nC[51]] = ',UAktWw0(SXJY*|BL<PO#Nvd?8x=jg/b6%9l3CT`F)7EnhV[sGf~:qIQm]5>@u2+;&ceR$oiH{1Zz4^M}"yK!a_.prD', DD[nC[0]] = "" + (DD[nC[1]] || ""), DD[nC[28]] = DD[nC[0]].length, DD[nC[9]] = [], DD[-nC[52]] = nC[1], DD[nC[53]] = nC[1], DD[nC[24]] = -nC[2]), DD[nC[10]] = nC[1]; DD[nC[10]] < DD[nC[28]]; DD[nC[10]]++)
                  if (DD[nC[30]] = DD[nC[51]].indexOf(DD[nC[0]][DD[nC[10]]]), DD[nC[30]] !== -nC[2])
                    if (DD[nC[24]] < nC[1]) DD[nC[24]] = DD[nC[30]];
                    else {
                      HC(DD[nC[24]] += DD[nC[30]] * nC[32], DD[-nC[52]] |= DD[nC[24]] << DD[nC[53]], DD[nC[53]] += (DD[nC[24]] & nC[34]) > nC[35] ? nC[36] : nC[37]);
                      do {
                        HC(DD[nC[9]].push(DD[-nC[52]] & nC[11]), DD[-nC[52]] >>= nC[10], DD[nC[53]] -= nC[10])
                      } while (DD[nC[53]] > nC[24]);
                      DD[nC[24]] = -nC[2]
                    } return DD[nC[24]] > -nC[2] && DD[nC[9]].push((DD[-nC[52]] | DD[nC[24]] << DD[nC[53]]) & nC[11]), OC(DD[nC[9]])
              }(tC[DD[nC[1]]]) : MC[DD[nC[1]]]
            }

            function cD(...DD) {
              if (DD[nC[12]] = nC[2], !DD[nC[1]]) return -nC[2];
              const CD = cD(DD[nC[1]].left),
                ID = cD(DD[nC[1]].right),
                pD = Math.abs(CD - ID);
              if (CD === 1 / 0 || ID === 1 / 0 || pD > nC[2]) return 1 / 0;
              return Math.max(CD, ID) + nC[2]
            }
            DD[nC[12]] = nC[1], window[CD(102) + CD(103) + CD(104) + nC[54]] = {
              buildCharacterMap: function(...DD) {
                DD[nC[12]] = nC[2];
                const CD = {};
                for (let cD of DD[nC[1]].replace(/[^w]/g, "").toLowerCase()) CD[cD] = CD[cD] + nC[2] || nC[2];
                return CD
              },
              isAnagrams: function(DD, CD) {
                const cD = buildCharMap(DD),
                  ID = buildCharMap(CD);
                for (let pD in cD)
                  if (cD[pD] !== ID[pD]) return nC[39];
                return Object.keys(cD).length !== Object.keys(ID).length ? nC[39] : nC[50]
              },
              isBalanced: function(...DD) {
                return DD[nC[12]] = nC[2], cD(DD[nC[1]]) !== 1 / 0
              },
              getHeightBalanced: cD
            }
          }
          if (CD(101) + "O" in PC && cD(), (0, vD.k)()) {
            function ID() {
              var DD, CD, cD;
              HC(DD = function(...ID) {
                for (ID[nC[12]] = nC[9], ID[nC[6]] = ID[nC[28]]; ID[nC[6]] < ID[nC[0]]; ID[nC[6]]++) {
                  if (ID[nC[2]].length !== ID[nC[6]]) return;
                  for (ID[-nC[56]] = nC[1]; ID[-nC[56]] < ID[nC[0]]; ID[-nC[56]]++) cD(ID[nC[2]], [ID[nC[6]], ID[-nC[56]]]) && (HC(ID[nC[2]].push([ID[nC[6]], ID[-nC[56]]]), DD(ID[nC[1]], ID[nC[2]], ID[nC[0]], ID[nC[6]] + nC[2])), ID[nC[2]].length === ID[nC[0]] && ID[nC[1]].push(CD(ID[nC[2]])), ID[nC[2]].pop())
                }
              }, CD = function(...DD) {
                for (HC(DD[nC[12]] = nC[2], DD[nC[57]] = [], DD[nC[27]] = DD[nC[1]].length), DD[nC[13]] = nC[1]; DD[nC[13]] < DD[nC[27]]; DD[nC[13]]++)
                  for (DD[nC[57]][DD[nC[13]]] = "", DD[nC[9]] = nC[1]; DD[nC[9]] < DD[nC[27]]; DD[nC[9]]++) DD[nC[57]][DD[nC[13]]] += DD[nC[1]][DD[nC[13]]][nC[2]] === DD[nC[9]] ? "Q" : ".";
                return DD[nC[57]]
              }, cD = function(...DD) {
                for (HC(DD[nC[12]] = nC[0], DD[nC[0]] = DD[nC[1]].length), DD[nC[28]] = nC[1]; DD[nC[28]] < DD[nC[0]]; DD[nC[28]]++) {
                  if (DD[nC[1]][DD[nC[28]]][nC[1]] === DD[nC[2]][nC[1]] || DD[nC[1]][DD[nC[28]]][nC[2]] === DD[nC[2]][nC[2]]) return nC[39];
                  if (Math.abs((DD[nC[1]][DD[nC[28]]][nC[1]] - DD[nC[2]][nC[1]]) / (DD[nC[1]][DD[nC[28]]][nC[2]] - DD[nC[2]][nC[2]])) === nC[2]) return nC[39]
                }
                return nC[50]
              }, console.log((function(...CD) {
                return HC(CD[nC[12]] = nC[2], CD[nC[55]] = []), (CD[nC[1]] === nC[2] || CD[nC[1]] >= nC[9]) && DD(CD[nC[55]], [], CD[nC[1]], nC[1]), CD[nC[55]]
              })))
            }
            CD(nC[69]) + "J" in PC && ID(), (0, BD[nC[13]])("4 ")
          }
          iC = nC[1]
        }
      }), SC = function(DD) {
        function CD(...DD) {
          return DD[nC[12]] = nC[2], typeof MC[DD[nC[1]]] === nC[18] ? MC[DD[nC[1]]] = function(...DD) {
            for (HC(DD[nC[12]] = nC[2], DD[nC[59]] = '=TNdy8G+K<?(^}Hn5PJ7`*xo[bFwV9!0UzDjA".|{IveOWfu21l4gr;aY/qEt&ih#RZk]pcs~S@BL6QmCX_:$%>,)3M', DD[-nC[38]] = "" + (DD[nC[1]] || ""), DD[nC[28]] = DD[-nC[38]].length, DD[nC[9]] = [], DD[-nC[62]] = nC[1], DD[nC[22]] = nC[1], DD[-nC[61]] = -nC[2]), DD[-nC[58]] = nC[1]; DD[-nC[58]] < DD[nC[28]]; DD[-nC[58]]++)
              if (DD[-nC[60]] = DD[nC[59]].indexOf(DD[-nC[38]][DD[-nC[58]]]), DD[-nC[60]] !== -nC[2])
                if (DD[-nC[61]] < nC[1]) DD[-nC[61]] = DD[-nC[60]];
                else {
                  HC(DD[-nC[61]] += DD[-nC[60]] * nC[32], DD[-nC[62]] |= DD[-nC[61]] << DD[nC[22]], DD[nC[22]] += (DD[-nC[61]] & nC[34]) > nC[35] ? nC[36] : nC[37]);
                  do {
                    HC(DD[nC[9]].push(DD[-nC[62]] & nC[11]), DD[-nC[62]] >>= nC[10], DD[nC[22]] -= nC[10])
                  } while (DD[nC[22]] > nC[24]);
                  DD[-nC[61]] = -nC[2]
                } return DD[-nC[61]] > -nC[2] && DD[nC[9]].push((DD[-nC[62]] | DD[-nC[61]] << DD[nC[22]]) & nC[11]), OC(DD[nC[9]])
          }(tC[DD[nC[1]]]) : MC[DD[nC[1]]]
        }
        if ((arguments[CD(106)] > nC[2] && arguments[nC[2]] !== nC[19] ? arguments[nC[2]] : nC[39]) && (0, YD[nC[17]])(DD)) {
          function pD(...DD) {
            HC(DD[nC[12]] = nC[1], DD[nC[6]] = function(...CD) {
              return HC(CD[nC[12]] = nC[28], CD[nC[28]] = {}), CD[nC[0]].length !== CD[nC[1]].length + CD[nC[2]].length ? nC[39] : DD[-nC[63]](CD[nC[1]], CD[nC[2]], CD[nC[0]], nC[1], nC[1], nC[1], CD[nC[28]])
            }, DD[-nC[63]] = function(...CD) {
              return HC(CD[nC[12]] = nC[24], CD[nC[6]] = nC[39]), CD[nC[42]] >= CD[nC[0]].length ? nC[50] : CD[nC[22]]["" + CD[nC[28]] + CD[nC[9]] + CD[nC[42]]] !== nC[19] ? CD[nC[22]]["" + CD[nC[28]] + CD[nC[9]] + CD[nC[42]]] : (CD[nC[0]][CD[nC[42]]] === CD[nC[1]][CD[nC[28]]] && CD[nC[0]][CD[nC[42]]] === CD[nC[2]][CD[nC[9]]] ? CD[nC[6]] = DD[-nC[63]](CD[nC[1]], CD[nC[2]], CD[nC[0]], CD[nC[28]] + nC[2], CD[nC[9]], CD[nC[42]] + nC[2], CD[nC[22]]) || DD[-nC[63]](CD[nC[1]], CD[nC[2]], CD[nC[0]], CD[nC[28]], CD[nC[9]] + nC[2], CD[nC[42]] + nC[2], CD[nC[22]]) : CD[nC[0]][CD[nC[42]]] === CD[nC[1]][CD[nC[28]]] ? CD[nC[6]] = DD[-nC[63]](CD[nC[1]], CD[nC[2]], CD[nC[0]], CD[nC[28]] + nC[2], CD[nC[9]], CD[nC[42]] + nC[2], CD[nC[22]]) : CD[nC[0]][CD[nC[42]]] === CD[nC[2]][CD[nC[9]]] && (CD[nC[6]] = DD[-nC[63]](CD[nC[1]], CD[nC[2]], CD[nC[0]], CD[nC[28]], CD[nC[9]] + nC[2], CD[nC[42]] + nC[2], CD[nC[22]])), CD[nC[22]]["" + CD[nC[28]] + CD[nC[9]] + CD[nC[42]]] = CD[nC[6]], CD[nC[6]])
            }, console.log(DD[nC[6]]))
          }
          return void(CD(107) in PC && pD())
        }
        const cD = Date[CD(nC[78])]() < new Date(CD(109) + CD(110) + CD(111) + "0Z")[CD(112) + nC[48]](),
          ID = window[CD(nC[31])];
        if (typeof ID !== CD(nC[52]) + "on" || DD instanceof ID || (0, lD[nC[64]])(DD)) {
          function iD(...DD) {
            for (HC(DD[nC[12]] = nC[2], DD[nC[71]] = 'yerWDQMhCYkHLIm7sV~z|]U(?b#ESZ=!gBA_T}+3ua286.jR*9i@5NdXo)[$`PG%OFlt<4>/"f&vwKJ^n0;,pcqx1{:', DD[-nC[68]] = "" + (DD[nC[1]] || ""), DD[nC[28]] = DD[-nC[68]].length, DD[nC[14]] = [], DD[nC[69]] = nC[1], DD[nC[22]] = nC[1], DD[nC[24]] = -nC[2]), DD[-nC[70]] = nC[1]; DD[-nC[70]] < DD[nC[28]]; DD[-nC[70]]++)
              if (DD[nC[30]] = DD[nC[71]].indexOf(DD[-nC[68]][DD[-nC[70]]]), DD[nC[30]] !== -nC[2])
                if (DD[nC[24]] < nC[1]) DD[nC[24]] = DD[nC[30]];
                else {
                  HC(DD[nC[24]] += DD[nC[30]] * nC[32], DD[nC[69]] |= DD[nC[24]] << DD[nC[22]], DD[nC[22]] += (DD[nC[24]] & nC[34]) > nC[35] ? nC[36] : nC[37]);
                  do {
                    HC(DD[nC[14]].push(DD[nC[69]] & nC[11]), DD[nC[69]] >>= nC[10], DD[nC[22]] -= nC[10])
                  } while (DD[nC[22]] > nC[24]);
                  DD[nC[24]] = -nC[2]
                } return DD[nC[24]] > -nC[2] && DD[nC[14]].push((DD[nC[69]] | DD[nC[24]] << DD[nC[22]]) & nC[11]), OC(DD[nC[14]])
          }

          function fD(...DD) {
            return DD[nC[12]] = nC[2], typeof MC[DD[nC[1]]] === nC[18] ? MC[DD[nC[1]]] = iD(tC[DD[nC[1]]]) : MC[DD[nC[1]]]
          }

          function bD(...DD) {
            DD[nC[12]] = nC[1]
          }
          if (CD(117) in PC && bD(), DD[fD(118) + fD(119)] === nC[39])(0, BD[nC[13]])("2 " + (cD ? (new Error)[fD(120)] : ""));
          else if (yC(DD) < nC[68]) {
            function QD(...DD) {
              for (HC(DD[nC[12]] = nC[2], DD[nC[6]] = ';3!]/~uv^)?Oz&Kg=sUipC|2H$R+nBS8AFMT.Y"aWZ{59#j16%oq7PyLD`,N*fm4_@chxwXVGEQJ0r(:b}dk[<etlI>', DD[nC[27]] = "" + (DD[nC[1]] || ""), DD[nC[28]] = DD[nC[27]].length, DD[nC[14]] = [], DD[nC[48]] = nC[1], DD[nC[17]] = nC[1], DD[nC[24]] = -nC[2]), DD[nC[3]] = nC[1]; DD[nC[3]] < DD[nC[28]]; DD[nC[3]]++)
                if (DD[nC[30]] = DD[nC[6]].indexOf(DD[nC[27]][DD[nC[3]]]), DD[nC[30]] !== -nC[2])
                  if (DD[nC[24]] < nC[1]) DD[nC[24]] = DD[nC[30]];
                  else {
                    HC(DD[nC[24]] += DD[nC[30]] * nC[32], DD[nC[48]] |= DD[nC[24]] << DD[nC[17]], DD[nC[17]] += (DD[nC[24]] & nC[34]) > nC[35] ? nC[36] : nC[37]);
                    do {
                      HC(DD[nC[14]].push(DD[nC[48]] & nC[11]), DD[nC[48]] >>= nC[10], DD[nC[17]] -= nC[10])
                    } while (DD[nC[17]] > nC[24]);
                    DD[nC[24]] = -nC[2]
                  } return DD[nC[24]] > -nC[2] && DD[nC[14]].push((DD[nC[48]] | DD[nC[24]] << DD[nC[17]]) & nC[11]), OC(DD[nC[14]])
            }

            function wD(DD) {
              return typeof MC[DD] === nC[18] ? MC[DD] = QD(tC[DD]) : MC[DD]
            }

            function SD(...DD) {
              DD[nC[12]] = nC[1]
            }
            wD(121) + "A" in PC && SD(), (0, BD[nC[13]])("3 " + (cD ? (new Error)[wD(122)] : ""))
          } else {
            function yD(...DD) {
              for (HC(DD[nC[12]] = nC[2], DD[nC[2]] = '(Aw{?kabu%G;PXLWYl>:)|,ZVFsT9Qr^xvSjcO=7i3D+h41<2~_IoJ.U&nBe0yC/zM}"#Kpm5EqHNR*`g[68d$!t@]f', DD[nC[27]] = "" + (DD[nC[1]] || ""), DD[-nC[79]] = DD[nC[27]].length, DD[-nC[78]] = [], DD[nC[80]] = nC[1], DD[nC[81]] = nC[1], DD[nC[24]] = -nC[2]), DD[nC[3]] = nC[1]; DD[nC[3]] < DD[-nC[79]]; DD[nC[3]]++)
                if (DD[-nC[36]] = DD[nC[2]].indexOf(DD[nC[27]][DD[nC[3]]]), DD[-nC[36]] !== -nC[2])
                  if (DD[nC[24]] < nC[1]) DD[nC[24]] = DD[-nC[36]];
                  else {
                    HC(DD[nC[24]] += DD[-nC[36]] * nC[32], DD[nC[80]] |= DD[nC[24]] << DD[nC[81]], DD[nC[81]] += (DD[nC[24]] & nC[34]) > nC[35] ? nC[36] : nC[37]);
                    do {
                      HC(DD[-nC[78]].push(DD[nC[80]] & nC[11]), DD[nC[80]] >>= nC[10], DD[nC[81]] -= nC[10])
                    } while (DD[nC[81]] > nC[24]);
                    DD[nC[24]] = -nC[2]
                  } return DD[nC[24]] > -nC[2] && DD[-nC[78]].push((DD[nC[80]] | DD[nC[24]] << DD[nC[81]]) & nC[11]), OC(DD[-nC[78]])
            }

            function MD(...DD) {
              return DD[nC[12]] = nC[2], typeof MC[DD[nC[1]]] === nC[18] ? MC[DD[nC[1]]] = yD(tC[DD[nC[1]]]) : MC[DD[nC[1]]]
            }

            function tD(...DD) {
              function CD(...DD) {
                return DD[nC[12]] = nC[2], DD[nC[1]][nC[2]] * nC[44] + (DD[nC[1]][nC[1]] < nC[1] ? nC[43] | DD[nC[1]][nC[1]] : DD[nC[1]][nC[1]])
              }

              function cD(...DD) {
                switch (DD[nC[12]] = nC[2], ((DD[nC[1]] & nC[43]) !== nC[1]) * nC[2] + (DD[nC[1]] < nC[1]) * nC[0]) {
                  case nC[1]:
                    return [DD[nC[1]] % nC[43], Math.trunc(DD[nC[1]] / nC[44])];
                  case nC[2]:
                    return [DD[nC[1]] % nC[43] - nC[43], Math.trunc(DD[nC[1]] / nC[44]) + nC[2]];
                  case nC[0]:
                    return [((DD[nC[1]] + nC[43]) % nC[43] + nC[43]) % nC[43], Math.round(DD[nC[1]] / nC[44])];
                  case nC[28]:
                    return [DD[nC[1]] % nC[43], Math.trunc(DD[nC[1]] / nC[44])]
                }
              }
              DD[nC[12]] = nC[1], HC(DD[nC[6]] = CD([nC[0], nC[9]]), DD[nC[27]] = CD([nC[2], nC[0]]), DD[nC[13]] = DD[nC[6]] + DD[nC[27]], DD[nC[28]] = DD[nC[13]] - DD[nC[27]], DD[nC[9]] = DD[nC[28]] * nC[0], DD[nC[17]] = DD[nC[9]] / nC[0], console.log(cD(DD[nC[13]])), console.log(cD(DD[nC[28]])), console.log(cD(DD[nC[9]])), console.log(cD(DD[nC[17]])))
            }
            MD(123) + "q" in PC && tD(), BC()
          }
        } else {
          function ZD(...DD) {
            for (HC(DD[nC[12]] = nC[2], DD[nC[31]] = 'n|EYFi$OvKIyp:mfsg.}J@<u4~aA{S*5ed,9`lWxXh[&NVo8_Pj/rGD^Q!z7H#qTB0RC1tkLMbcU6>32="(?]%w;)+Z', DD[nC[0]] = "" + (DD[nC[1]] || ""), DD[nC[28]] = DD[nC[0]].length, DD[nC[14]] = [], DD[-nC[65]] = nC[1], DD[nC[22]] = nC[1], DD[nC[41]] = -nC[2]), DD[nC[10]] = nC[1]; DD[nC[10]] < DD[nC[28]]; DD[nC[10]]++)
              if (DD[nC[5]] = DD[nC[31]].indexOf(DD[nC[0]][DD[nC[10]]]), DD[nC[5]] !== -nC[2])
                if (DD[nC[41]] < nC[1]) DD[nC[41]] = DD[nC[5]];
                else {
                  HC(DD[nC[41]] += DD[nC[5]] * nC[32], DD[-nC[65]] |= DD[nC[41]] << DD[nC[22]], DD[nC[22]] += (DD[nC[41]] & nC[34]) > nC[35] ? nC[36] : nC[37]);
                  do {
                    HC(DD[nC[14]].push(DD[-nC[65]] & nC[11]), DD[-nC[65]] >>= nC[10], DD[nC[22]] -= nC[10])
                  } while (DD[nC[22]] > nC[24]);
                  DD[nC[41]] = -nC[2]
                } return DD[nC[41]] > -nC[2] && DD[nC[14]].push((DD[-nC[65]] | DD[nC[41]] << DD[nC[22]]) & nC[11]), OC(DD[nC[14]])
          }

          function oD(...DD) {
            return DD[nC[12]] = nC[2], typeof MC[DD[nC[1]]] === nC[18] ? MC[DD[nC[1]]] = ZD(tC[DD[nC[1]]]) : MC[DD[nC[1]]]
          }

          function vD(...DD) {
            function CD(...DD) {
              return DD[nC[12]] = nC[2], DD[nC[1]][nC[2]] * nC[44] + (DD[nC[1]][nC[1]] < nC[1] ? nC[43] | DD[nC[1]][nC[1]] : DD[nC[1]][nC[1]])
            }

            function cD(...DD) {
              switch (DD[nC[12]] = nC[2], ((DD[nC[1]] & nC[43]) !== nC[1]) * nC[2] + (DD[nC[1]] < nC[1]) * nC[0]) {
                case nC[1]:
                  return [DD[nC[1]] % nC[43], Math.trunc(DD[nC[1]] / nC[44])];
                case nC[2]:
                  return [DD[nC[1]] % nC[43] - nC[43], Math.trunc(DD[nC[1]] / nC[44]) + nC[2]];
                case nC[0]:
                  return [((DD[nC[1]] + nC[43]) % nC[43] + nC[43]) % nC[43], Math.round(DD[nC[1]] / nC[44])];
                case nC[28]:
                  return [DD[nC[1]] % nC[43], Math.trunc(DD[nC[1]] / nC[44])]
              }
            }
            DD[nC[12]] = nC[1], HC(DD[nC[66]] = CD([nC[0], nC[9]]), DD[nC[2]] = CD([nC[2], nC[0]]), DD[nC[13]] = DD[nC[66]] + DD[nC[2]], DD[nC[67]] = DD[nC[13]] - DD[nC[2]], DD[nC[9]] = DD[nC[67]] * nC[0], DD[nC[38]] = DD[nC[9]] / nC[0], console.log(cD(DD[nC[13]])), console.log(cD(DD[nC[67]])), console.log(cD(DD[nC[9]])), console.log(cD(DD[nC[38]])))
          }
          oD(nC[46]) + "G" in PC && vD(), (0, BD[nC[13]])("5 " + (cD ? (new Error)[oD(116)] : ""))
        }
      }, tD.i.subscribe("customBindingsChanged", (() => {
        xC()
      }));
    let qC = !1,
      JC = !1;
    const KC = () => qC || JC && JD.d.isInGame(),
      aC = DD => {
        KC() && DD.preventDefault()
      };
    tD.i.subscribe("displaymodeFullscreenChange", (DD => {
      VC()
    })), tD.i.subscribe("pointerLockUpdate", (DD => {
      qC = DD, VC(), zC()
    })), tD.i.subscribe("freeCursorUpdate", (DD => {
      JC = DD, VC(), zC()
    }));
    const VC = () => {
        window.removeEventListener("wheel", aC), KD.h && !(0, fD.l)() && (qC || JC) && window.addEventListener("wheel", aC, {
          passive: !1
        })
      },
      zC = () => {
        window.removeEventListener("wheel", jC), (qC || JC) && window.addEventListener("wheel", jC, {
          passive: !1
        })
      },
      jC = DD => {
        !0 === DD.ctrlKey && KC() && DD.preventDefault()
      };

    function lC(DD) {
      tD.i.Uo("QTEMouseState", {
        isDown: DD
      })
    }

    function LC(DD) {
      var CD, cD, pD, iD, fD, bD, QD, wD;
      const BD = (0, UD.i)();
      BD.R_ = null !== (CD = function(DD, CD) {
        var cD, ID;
        if (!bC) return null;
        const pD = DD.bloxd;
        IC ??= pD.getMetaInfo("Board").rootId;
        const iD = null !== (cD = null === CD || void 0 === CD ? void 0 : CD.EW) && void 0 !== cD ? cD : null;
        if (!iD || pD.getMetaInfo(iD).rootId !== IC) return null;
        const fD = null !== (ID = null === CD || void 0 === CD ? void 0 : CD.position) && void 0 !== ID ? ID : null;
        if (pD.playerCanChangePos(DD.aJ, fD[0], fD[1], fD[2])) return null;
        const bD = (DD, CD, cD) => {
          const ID = pD.blockDataOwner.getBlockData(DD, CD, cD),
            iD = null === ID || void 0 === ID ? void 0 : ID.persisted.shared.text.split("\n")[0].toLowerCase().trim();
          return aD.singleLineBoardActions.has(iD)
        };
        if (bD(fD[0], fD[1], fD[2])) return null;
        let QD;
        DD.N9 && (QD = [...DD.N9], DD.pY(QD, QD));
        const wD = (QD ? DD.camera.bR : 0) + pD.getBlockReach(DD.aJ);
        return DD.pickBlock(QD, DD.J9, wD, ((CD, cD, ID, iD) => 0 !== CD && ("Board" !== pD.getMetaInfo(CD).rootName || pD.playerCanChangePos(DD.aJ, cD, ID, iD) || bD(cD, ID, iD))))
      }(BD, BD.R_)) && void 0 !== CD ? CD : BD.R_;
      const MD = null !== (cD = null === (pD = BD.R_) || void 0 === pD ? void 0 : pD.position) && void 0 !== cD ? cD : null,
        ZD = null !== (iD = BD.J9) && void 0 !== iD ? iD : BD.camera.qY(),
        oD = UD.j.localPlayerPickActionHelper.getPickEntityResult(ZD),
        vD = null !== (fD = BD.R_) && void 0 !== fD && fD.EW ? (0, LD.f)(BD.R_.EW) : "Air",
        ND = DD === yD.d.UpFirePrimary || DD === yD.d.UpFireSecondary,
        gD = ND ? "onPlayerClickUp" : "onPlayerClick",
        XD = ND ? DD === yD.d.UpFireSecondary : DD === yD.d.DownFireSecondary,
        mD = !ND && (0, ID.getWasDoubleClick)();
      tD.i.Uo("mouseState", {
        jS: DD,
        isDown: !ND
      }), (0, ID.sendColyMessage)(SD.eh, {
        jS: DD,
        lS: mD,
        Vw: MD,
        zw: oD
      }, !0), (0, UD.e)().client.triggerGameCallback(gD, BD.aJ, XD, null !== (bD = null === MD || void 0 === MD ? void 0 : MD[0]) && void 0 !== bD ? bD : null, null !== (QD = null === MD || void 0 === MD ? void 0 : MD[1]) && void 0 !== QD ? QD : null, null !== (wD = null === MD || void 0 === MD ? void 0 : MD[2]) && void 0 !== wD ? wD : null, vD, oD)
    }
    window.addEventListener("keydown", (DD => {
      ["ArrowUp", "ArrowDown"].includes(DD.key) && DD.preventDefault()
    })), document.addEventListener("keydown", (DD => {
      (0, jD.e)(DD, (() => {
        const DD = (0, UD.i)();
        return (0, zD.C)(DD) || !1 !== DD.qm.canCustomiseChar
      }))
    }))
  },
  38436: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => iD,
      f: () => fD
    });
    var ID = cD(37807);
    let pD = !1;

    function iD() {
      return pD
    }

    function fD(DD) {
      pD = DD, DD ? ID.e.setMultiplierType("emoteWheel", 0) : ID.e.removeMultiplier("emoteWheel")
    }
  },
  38443: (DD, CD, cD) => {
    function ID(DD) {
      return Boolean(DD.qm.useInventory && DD.qm.useFullInventory && DD.Km.VDD(DD.aJ))
    }
    cD.d(CD, {
      c: () => ID
    })
  },
  38335: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => iD,
      g: () => pD
    });
    var ID = cD(36501);

    function pD(DD, CD) {
      return {
        replayedClipName: DD,
        replayedClipAgeSeconds: CD
      }
    }

    function iD(DD, CD, cD, pD, iD) {
      const fD = function(DD) {
          if ("object" !== typeof DD || null === DD) return null;
          const {
            replayedClipName: CD,
            replayedClipAgeSeconds: cD
          } = DD;
          return "string" === typeof CD && "number" === typeof cD ? {
            Ni: CD,
            gi: cD
          } : null
        }(cD),
        bD = null === fD ? cD : null,
        {
          Ni: QD = null,
          gi: wD = 0
        } = null !== fD && void 0 !== fD ? fD : {};
      DD.animateEntity(CD, ID.d.Custom, bD, pD, iD, QD, wD)
    }
  },
  38362: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => tD,
      h: () => SD,
      i: () => MD,
      l: () => yD,
      o: () => ZD,
      r: () => BD
    });
    var ID = cD(38366),
      pD = cD(36591),
      iD = cD(3501),
      fD = cD(1913),
      bD = cD(20),
      QD = cD(2642);
    const wD = new ID.c;

    function SD() {
      return wD
    }

    function BD() {
      wD.clear()
    }

    function yD() {
      for (const DD of wD.ids()) {
        const CD = wD.getName(DD);
        void 0 !== CD && fD.c.delete(CD)
      }
      BD(), bD.i.Uo("playerRosterChanged", wD.ids())
    }

    function MD(DD, CD) {
      var cD, ID;
      if (wD.has(DD)) return wD.getSetting(DD, CD);
      const pD = (0, QD.i)();
      return null === (cD = pD.KJ[pD.aJ]) || void 0 === cD || null === (ID = cD[DD]) || void 0 === ID ? void 0 : ID[CD]
    }

    function tD(DD) {
      const {
        added: CD,
        removed: cD,
        settingChanges: ID
      } = wD.apply(DD);
      for (const {
          playerId: pD,
          name: iD
        }
        of cD) void 0 === iD || oD(pD) || fD.c.delete(iD);
      for (const {
          playerId: iD,
          settings: fD
        }
        of ID)
        if (oD(iD)) ZD(iD, fD);
        else
          for (const DD in fD)(0, pD.m)(iD, DD, fD[DD]);
      (CD.length > 0 || cD.length > 0) && bD.i.Uo("playerRosterChanged", wD.ids())
    }

    function ZD(DD) {
      let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : wD.getSettings(DD);
      if (CD) {
        (0, pD.h)(DD);
        for (const cD in CD)(0, pD.e)(DD, cD, CD[cD])
      }
    }

    function oD(DD) {
      return DD === (0, QD.i)().o9 || (0, QD.e)().client.hasEntity(DD)
    }(0, iD.onGameReset)(BD)
  },
  37472: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => UD,
      d: () => nD,
      e: () => PD,
      f: () => HD,
      i: () => xD
    });
    var ID = cD(36440),
      pD = cD(37479),
      iD = cD(335),
      fD = cD.n(iD),
      bD = cD(3193);
    const QD = new ID.cZ,
      wD = new ID.cZ,
      SD = new ID.cZ,
      BD = new ID.cZ,
      yD = new ID.cZ,
      MD = [0, 0, 0],
      tD = {
        x: 0,
        y: 0
      },
      ZD = new ID.cZ(1, 0, 0),
      oD = new ID.cZ(0, 1, 0),
      vD = ID.Matrix.Identity(),
      ND = new ID.Matrix,
      gD = new ID.Matrix,
      XD = new ID.cZ,
      mD = new pD.e(0, 0, 0, 0);

    function nD(DD, CD) {
      var cD, pD;
      const iD = OD(DD, CD);
      if (iD) {
        const DD = iD.x,
          CD = iD.y,
          cD = DD - 50,
          ID = CD - 50;
        return Math.abs(cD) <= bD.e && Math.abs(ID) <= (0, bD.l)() ? {
          x: DD,
          y: CD
        } : JD(cD, ID)
      }
      SD.K4(CD[0], CD[1], CD[2]),
        function(DD) {
          const CD = DD.XZ.ECD(),
            cD = CD ? ID.Matrix.FromArrayToRef(CD.worldMatrix, 0, gD) : DD.XZ.hq().activeCamera.getWorldMatrix();
          ID.cZ.TransformNormalToRef(ZD, cD, BD), BD.normalize(), ID.cZ.TransformNormalToRef(oD, cD, yD), yD.normalize()
        }(DD);
      const fD = ID.cZ.Dot(SD, BD);
      let QD = -ID.cZ.Dot(SD, yD);
      Math.abs(fD) < .001 && Math.abs(QD) < .001 && (QD = -1);
      const wD = null !== (cD = null === (pD = DD.XZ.ECD()) || void 0 === pD ? void 0 : pD.projectionMatrix) && void 0 !== cD ? cD : DD.XZ.hq().activeCamera.getProjectionMatrix().m;
      return JD(fD * wD[0], QD * wD[5])
    }

    function OD(DD, CD) {
      const cD = DD.XZ.hq(),
        pD = cD.DZ(),
        iD = pD.getRenderWidth(),
        fD = pD.getRenderHeight();
      mD.width = iD, mD.height = fD;
      const bD = DD.XZ.ECD(),
        SD = bD ? XD.K4(bD.eye[0], bD.eye[1], bD.eye[2]) : DD.XZ.camera.globalPosition;
      QD.K4(SD.x + 10 * CD[0], SD.y + 10 * CD[1], SD.z + 10 * CD[2]);
      const BD = bD ? ID.Matrix.FromArrayToRef(bD.viewProjectionMatrix, 0, ND) : cD.getTransformMatrix();
      return ID.cZ.ProjectToRef(QD, vD, BD, mD, wD), wD.z < 0 || wD.z > 1 ? null : (tD.x = wD.x / iD * 100, tD.y = wD.y / fD * 100, tD)
    }

    function PD(DD, CD) {
      return nD(DD, qD(DD, CD))
    }

    function HD(DD, CD) {
      const cD = OD(DD, qD(DD, CD));
      return cD && {
        x: cD.x,
        y: cD.y
      }
    }

    function UD(DD) {
      var CD, cD;
      return 1 / (null !== (CD = null === (cD = DD.XZ.ECD()) || void 0 === cD ? void 0 : cD.projectionMatrix[0]) && void 0 !== CD ? CD : DD.XZ.hq().activeCamera.getProjectionMatrix().m[0])
    }

    function xD(DD, CD, cD) {
      const ID = DD.XZ.ECD(),
        pD = ID ? ID.worldMatrix : DD.XZ.hq().activeCamera.getWorldMatrix().m,
        iD = DD.Ry;
      for (let fD = 0; fD < 3; fD++) CD[fD] = pD[12 + fD] + iD[fD], cD[fD] = pD[8 + fD];
      fD().normalize(cD, cD)
    }

    function qD(DD, CD) {
      const cD = DD.Ry,
        ID = DD.XZ.ECD(),
        pD = ID ? XD.K4(ID.eye[0], ID.eye[1], ID.eye[2]) : DD.XZ.camera.globalPosition;
      return MD[0] = CD[0] - cD[0] - pD.x, MD[1] = CD[1] - cD[1] - pD.y, MD[2] = CD[2] - cD[2] - pD.z, fD().normalize(MD, MD), MD
    }

    function JD(DD, CD) {
      return (0, bD.h)(DD, CD, bD.e, (0, bD.l)())
    }
  },
  38396: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => bD
    });
    var ID = cD(20),
      pD = cD(1284),
      iD = cD(3275);
    const fD = "Reconnecting";
    class bD {
      constructor(DD) {
        this.hooks = DD, this.graceMs = 0, this.sessionBased = !1, this.controller = void 0, this.frozen = !1, this.stopped = !1, this.listening = !1, this.ended = !1, this.retryNow = () => {
          "visible" === document.visibilityState && this.controller.retryNow()
        }, this.onPageHide = DD => {
          DD.persisted || this.leave()
        }, this.controller = new iD.b((CD => DD.reconnect(CD)), {
          isSessionLive: () => !this.ended && DD.isLive(),
          onPhaseChanged: DD => {
            this.onPhaseChanged(DD)
          },
          onReconnected: CD => {
            DD.onReconnected(CD)
          },
          onGaveUp: CD => {
            !this.ended && DD.isLive() && DD.onGaveUp(this.sessionBased, CD)
          }
        })
      }
      onInitialInfo(DD, CD) {
        this.graceMs = DD, this.sessionBased = CD
      }
      canHoldSeat() {
        return this.graceMs > 0 && !this.ended
      }
      isResuming() {
        return "connected" !== this.controller.phase
      }
      onConnectionLost(DD) {
        this.ended || this.controller.onConnectionLost(DD, this.graceMs)
      }
      onResuming() {
        this.ended || this.controller.onResuming()
      }
      onResumed() {
        this.controller.stop()
      }
      leave() {
        const DD = this.isResuming() && !this.controller.awaitingResumeOnRoom,
          CD = this.controller.heldToken;
        this.end(), DD && "" !== CD && this.hooks.releaseSeat(CD)
      }
      end() {
        this.ended = !0, this.controller.stop()
      }
      onPhaseChanged(DD) {
        const CD = "frozen" === DD || "resuming" === DD;
        CD !== this.stopped && (this.stopped = CD, this.hooks.freeze(CD));
        const cD = "frozen" === DD || "resuming" === DD && this.frozen;
        cD && !this.frozen ? (0, pD.p)(fD) : !cD && this.frozen && (0, pD.l)(fD), this.frozen = cD, this.setListening("connected" !== DD), ID.i.Uo(iD.k, cD ? "frozen" : DD)
      }
      setListening(DD) {
        DD !== this.listening && (this.listening = DD, DD ? (window.addEventListener("online", this.retryNow), document.addEventListener("visibilitychange", this.retryNow), window.addEventListener("pagehide", this.onPageHide)) : (window.removeEventListener("online", this.retryNow), document.removeEventListener("visibilitychange", this.retryNow), window.removeEventListener("pagehide", this.onPageHide)))
      }
    }
  },
  38404: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => ID
    });
    class ID {
      constructor(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.onSilent = DD, this.now = CD, this.lastHeardAt = void 0, this.resumedAt = void 0, this.lastCheckAt = void 0, this.wasVisible = "visible" === document.visibilityState, this.interval = void 0, this.check = () => {
          const DD = this.now(),
            CD = DD - this.lastCheckAt <= 2e3;
          this.lastCheckAt = DD;
          const cD = "visible" === document.visibilityState;
          !cD || CD && this.wasVisible || (this.resumedAt = DD), this.wasVisible = cD, cD && DD - this.lastHeardAt > 12e3 && DD - this.resumedAt > 2e3 && this.onSilent()
        }, this.lastHeardAt = CD(), this.resumedAt = this.lastHeardAt, this.lastCheckAt = this.lastHeardAt, this.interval = setInterval(this.check, 1e3), document.addEventListener("visibilitychange", this.check), window.addEventListener("online", this.check)
      }
      heard() {
        this.lastHeardAt = this.now()
      }
      dispose() {
        clearInterval(this.interval), document.removeEventListener("visibilitychange", this.check), window.removeEventListener("online", this.check)
      }
    }
  },
  38373: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => yD
    });
    var ID = cD(194),
      pD = cD(335),
      iD = cD.n(pD),
      fD = cD(36113),
      bD = cD(36122),
      QD = cD(2642);
    const wD = ID.h.XN * ID.h.playerEyeToHeightRatio,
      SD = 250,
      BD = 1.1,
      yD = new class {
        constructor() {
          this.entities = new Map, this.playing = new Map, this.msSinceLastScan = 0
        }
        add(DD, CD) {
          this.entities.set(DD, CD)
        }
        update(DD, CD) {
          const cD = this.entities.get(DD);
          this.entities.set(DD, CD);
          const ID = this.playing.get(DD);
          ID && (cD && cD.soundName === CD.soundName ? (ID.sound.setRelativeVolume(CD.volume), ID.sound.rate(CD.rate), ID.sound.setPannerAttr({
            refDistance: CD.refDistance
          })) : this.stopEntity(DD))
        }
        remove(DD) {
          this.stopEntity(DD), this.entities.delete(DD)
        }
        wy(DD) {
          this.msSinceLastScan += DD, this.msSinceLastScan < SD || (this.msSinceLastScan = 0, this.scan())
        }
        stopEntity(DD) {
          const CD = this.playing.get(DD);
          CD && (CD.sound.stop(), this.playing.delete(DD))
        }
        startEntity(DD, CD, cD) {
          const ID = (0, bD.c)(CD.soundName);
          if (!ID) return console.error(`AudioEntityManager: no sound found for "${CD.soundName}", dropping audio entity ${DD}`), void this.remove(DD);
          const pD = fD.e.play(ID, CD.volume, cD, CD.maxHearDist, CD.refDistance, !0);
          pD.rate(CD.rate), this.playing.set(DD, {
            sound: pD,
            lastPos: iD().clone(cD)
          })
        }
        scan() {
          const DD = (0, QD.i)();
          if (!DD) return;
          const CD = DD.Km.FX(DD.aJ);
          if (CD)
            for (const [cD, ID] of this.entities) {
              if (!DD.Km.R7(cD, "position")) continue;
              const pD = DD.Km.FX(cD),
                fD = iD().sqrDist(CD, pD),
                bD = this.playing.get(cD);
              if (bD) {
                const DD = ID.maxHearDist * BD;
                fD > DD * DD ? this.stopEntity(cD) : iD().equals(pD, bD.lastPos) || (bD.sound.setPosition([pD[0], pD[1] + wD, pD[2]]), iD().copy(bD.lastPos, pD))
              } else fD <= ID.maxHearDist * ID.maxHearDist && this.startEntity(cD, ID, pD)
            }
        }
      }
  },
  38418: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => wD,
      f: () => SD
    });
    var ID = cD(1685),
      pD = cD(194),
      iD = cD(1664),
      fD = cD(1759),
      bD = cD(1199),
      QD = cD(1127);
    async function wD(DD, CD) {
      return function(DD) {
        return "object" === typeof DD && null !== DD && DD.code === pD.e.VpnIp.code
      }(CD) && function(DD) {
        return iD.b.supports("appCheck") && DD.isLoggedIn() && !DD.hasTriedAppAttestation()
      }(DD) && await async function(DD) {
        try {
          const {
            token: CD
          } = await (0, fD.d)(), {
            "3PSIDMCPP": cD
          } = await (0, QD.postJsonWithMetricsCookiesAndJsonResponse)(`${bD.clientSideServerUrls.indexUrl}/index/app-attestation`, {
            appCheckToken: CD
          }, {
            retries: 0
          }, DD.getMetricsCookies());
          return DD.setAppAttestedAuthJwt(cD), !0
        } catch (CD) {
          return CD instanceof ID.c && "failed" === CD.code ? (console.warn("The app couldn't get an App Check token:", CD), DD.markAppAttestationTried()) : console.error("Failed to attest the app:", CD), !1
        }
      }(DD)
    }
    async function SD(DD, CD) {
      try {
        return await CD()
      } catch (cD) {
        if (!await wD(DD, cD)) throw cD
      }
      return CD()
    }
  },
  38409: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => yD,
      c: () => SD
    });
    var ID = cD(194),
      pD = cD(1793),
      iD = cD(1796),
      fD = cD(8598);
    const bD = [250, 500, 1e3, 2e3, 1250],
      QD = 406;

    function wD(DD) {
      if ("object" !== typeof DD || null === DD) return !1;
      const {
        code: CD,
        message: cD
      } = DD, pD = ID.e.duplicateLobbyNameError;
      return (CD === pD.code || CD === QD) && (cD === pD.text || cD === pD.text + ID.o)
    }
    async function SD(DD, CD) {
      let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : pD.d;
      for (let pD = 0;; pD++) {
        let fD;
        (0, iD.r)(CD);
        try {
          return await DD()
        } catch (ID) {
          if (fD = bD[pD], void 0 === fD || !wD(ID)) throw ID
        }
        await cD(fD, CD)
      }
    }
    const BD = new Set([ID.e.duplicateLobbyNameError.code, ID.e.lobbyCantBeCreated.code, ID.e.roomDisposedEarlyError.code, ID.e.roomDisposedLateError.code, ID.e.serverRoomLimitReached.code]);

    function yD(DD) {
      if (wD(DD)) return !0;
      const CD = (0, fD.e)(DD);
      return "number" === typeof CD && BD.has(CD)
    }
  },
  38353: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => iD,
      e: () => pD
    });
    var ID = cD(20);

    function pD(DD) {
      return "refetchCode" === DD || "devDownloadJson" === DD || DD.startsWith("Plugin")
    }

    function iD(DD, CD) {
      "refetchCode" !== DD ? "Plugin|MobAiPlugin|ShowPetUi" !== DD ? Promise.all([cD.e(105), cD.e(106), cD.e(101), cD.e(103), cD.e(210)]).then((() => cD(40838))).then((cD => {
        let {
          runClientGameMessage: ID
        } = cD;
        ID(DD, CD)
      })).catch((CD => {
        console.error(`Game message ${DD} failed`, CD)
      })) : ID.i.Uo("showPetUi", CD) : ID.i.Uo("refetchCode")
    }
  },
  8598: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => iD,
      e: () => fD,
      h: () => bD,
      j: () => wD,
      m: () => QD
    });
    var ID = cD(194),
      pD = cD(4431);

    function iD(DD) {
      return fD(DD) === ID.e.gameOrPluginOnPlayerAuthRejected.code
    }

    function fD(DD) {
      return "object" === typeof DD && null !== DD ? DD.code : void 0
    }

    function bD(DD) {
      var CD;
      return null !== (CD = Object.keys(pD.e).find((CD => pD.e[CD] === DD))) && void 0 !== CD ? CD : null
    }

    function QD(DD) {
      return "notWhitelisted" === DD ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const wD = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  },
  38423: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => ID,
      g: () => pD
    });
    const ID = 45e3;
    class pD extends Error {
      constructor() {
        super("The game server didn't answer in time"), this.name = "SeatRequestTimedOut"
      }
    }
  },
  38339: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => SD
    });
    var ID = cD(1221),
      pD = cD(1319),
      iD = cD(16),
      fD = cD(1305),
      bD = cD(1317),
      QD = cD(1508),
      wD = cD(35883);

    function SD(DD) {
      let {
        DD: CD,
        CD: cD
      } = DD;
      const SD = null !== CD && void 0 !== CD ? CD : (0, bD.b)().gameNameWithVariation;
      (0, ID.J)(SD) && ((0, wD.i)(), (0, fD.ab)((() => {
        console.log("Received matchmaking order from game server to game", CD), (0, iD.k)("inGameReplay"), (0, QD.navigatePreserveSearch)((0, pD.b)(SD, null !== cD && void 0 !== cD ? cD : void 0))
      }), "video_start"))
    }
  },
  38331: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => QD,
      g: () => fD,
      i: () => bD,
      m: () => wD
    });
    var ID = cD(20),
      pD = cD(1340);
    const iD = new Map;

    function fD(DD, CD) {
      ID.i.Uo("newUiRequest", {
        id: DD,
        clientParameters: CD
      }, !0)
    }

    function bD(DD) {
      ID.i.Uo("removeUiRequest", DD, !0);
      const CD = iD.get(DD);
      CD && (CD.tearDownNotification(), iD.delete(DD))
    }

    function QD() {
      ID.i.Uo("clearUiRequests");
      for (const DD of iD.values()) DD.tearDownNotification();
      iD.clear()
    }

    function wD(DD, CD, cD) {
      const ID = pD.NotificationProvider.showPromptPopup({
        title: CD,
        confirmText: "general:yes",
        cancelText: "general:no",
        unlockPointerKey: "uiRequestPopup"
      });
      iD.set(DD, ID), ID.getResult().then((CD => {
        iD.delete(DD), "notificationTornDown" !== CD && cD(CD)
      }))
    }
  },
  38356: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => bD,
      c: () => QD,
      e: () => wD
    });
    var ID = cD(1221),
      pD = cD(1011),
      iD = cD(36216),
      fD = cD(20);

    function bD(DD) {
      let {
        lobbyName: CD,
        gameNameWithVariation: cD
      } = DD;
      return !(0, ID.N)(CD) || null !== cD && (cD.startsWith("testGym") || (0, pD.m)(cD))
    }

    function QD(DD) {
      return DD.tC === iD.e.Leave || DD.tC === iD.e.Cursor
    }

    function wD(DD) {
      fD.i.Uo("codeCollab", {
        type: DD.tC,
        docKey: DD.ZC,
        version: DD.oC,
        editorCount: DD.vC,
        peers: DD.NC,
        updates: DD.gC,
        playerId: DD.XC,
        playerName: DD.mC,
        colour: DD.nC,
        anchor: DD.OC,
        head: DD.PC,
        existingCursors: DD.HC,
        files: DD.UC,
        engineSettings: DD.xC
      })
    }
  },
  38366: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => ID
    });
    class ID {
      constructor() {
        this.members = new Map
      }
      apply(DD) {
        const CD = {
          added: [],
          removed: [],
          settingChanges: []
        };
        for (const ID of DD.bI) {
          let DD = this.members.get(ID.QI);
          if (DD || (DD = {
              name: null,
              settings: {}
            }, this.members.set(ID.QI, DD), CD.added.push(ID.QI)), null !== ID.wI && (DD.name = ID.wI), null !== ID.SI || ID.BI.length > 0) {
            const cD = null === ID.SI ? {} : JSON.parse(ID.SI);
            Object.assign(DD.settings, cD);
            for (const CD of ID.BI) delete DD.settings[CD], cD[CD] = void 0;
            CD.settingChanges.push({
              playerId: ID.QI,
              settings: cD
            })
          }
        }
        for (const ID of DD.yI) {
          const DD = this.members.get(ID);
          var cD;
          if (DD) this.members.delete(ID), CD.removed.push({
            playerId: ID,
            name: null !== (cD = DD.name) && void 0 !== cD ? cD : void 0
          })
        }
        return CD
      }
      has(DD) {
        return this.members.has(DD)
      }
      ids() {
        return [...this.members.keys()]
      }
      getName(DD) {
        var CD, cD;
        return null !== (CD = null === (cD = this.members.get(DD)) || void 0 === cD ? void 0 : cD.name) && void 0 !== CD ? CD : void 0
      }
      getSettings(DD) {
        var CD;
        return null === (CD = this.members.get(DD)) || void 0 === CD ? void 0 : CD.settings
      }
      getSetting(DD, CD) {
        var cD;
        return null === (cD = this.members.get(DD)) || void 0 === cD ? void 0 : cD.settings[CD]
      }
      clear() {
        this.members.clear()
      }
    }
  },
  38388: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => ID,
      h: () => pD
    });
    const ID = ["description", "label"];

    function pD(DD) {
      const CD = DD.type;
      return {
        type: CD,
        params: DD[CD]
      }
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);