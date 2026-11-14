export const id = 100;
export const ids = [100];
export const modules = {
  37087: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => zR,
      c: () => AW
    });
    var wW = MW(33);
    let CW = !1;

    function zR() {
      return CW
    }

    function AW(WW) {
      CW !== WW && (CW = WW, wW.k.Sz("replayViewer|videoExportChanged"))
    }
  },
  37e3: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => zR
    });
    var wW = MW(33),
      CW = MW(1558);

    function zR(WW) {
      let {
        taskId: RW,
        progress: MW
      } = WW;
      const wW = CW.d.get("_tasks");
      null !== wW && void 0 !== wW && wW[RW] && CW.d.apply({
        _tasks: {
          ...wW,
          [RW]: {
            ...wW[RW],
            progress: MW
          }
        }
      })
    }
    wW.k.subscribe("clientTaskProgress", (WW => {
      zR(WW)
    }))
  },
  36991: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => cM,
      d: () => QR,
      e: () => rM
    });
    var wW = MW(2775),
      CW = MW(173),
      zR = MW(265),
      AW = MW(50),
      bR = MW(2154),
      yR = MW(2826),
      NW = MW(2846),
      eW = MW(1053);
    const BW = new WeakMap;
    class tR {
      constructor(WW, RW) {
        this.callbacks = RW, this.XyW = void 0, this.sessionId = void 0, this.kp = [], this.jYW = !1, this.Qw = !1, this.kYW = void 0, this.rU = 0, this.dispose = () => {
          this.Qw || (this.Qw = !0, BW.delete(this), this.kp.length = 0, this.kYW())
        }, this.XyW = WW, this.sessionId = WW.sessionId, BW.set(this, []), this.kYW = this.XyW.FX("*", ((WW, RW) => {
          if (this.Qw) return;
          const MW = Number(WW);
          this.jYW ? this.aYW(MW, RW) : this.kp.push({
            id: MW,
            payload: RW
          })
        })), this.XyW.EX(this.dispose)
      }
      aYW(WW, RW) {
        try {
          (0, yR.Sb)(WW) && (RW = (0, yR.d)(WW, NW.fw.from(RW)));
          const MW = BW.get(this)[WW];
          if ("function" !== typeof MW) {
            if (this.callbacks.siW) return void this.callbacks.siW(WW, RW);
            throw new Error(`No onMessage handler registered for message id ${WW}`)
          }
          MW(RW)
        } catch (MW) {
          this.callbacks.diW(`Error in onMessage ${WW} with payload ${JSON.stringify(RW)}`, MW)
        } finally {
          this.rU++
        }
      }
      piR() {
        for (const {
            id: WW,
            payload: RW
          }
          of this.kp) {
          if (this.Qw) break;
          this.aYW(WW, RW)
        }
        this.kp.length = 0
      }
      cNW() {
        return this.Qw
      }
      hiR() {
        if (this.jYW || this.Qw) throw new Error("Trying to getOnMessageRegistrationHandler after registration finished");
        return {
          FX: (WW, RW) => {
            if (this.jYW || this.Qw) throw new Error("Trying to call onMessage after registration finished");
            this.FX(WW, RW)
          },
          finishRegistration: () => {
            if (this.Qw) throw new Error("Cannot finish message registration after disposal");
            this.jYW = !0, this.piR()
          }
        }
      }
      FX(WW, RW) {
        var MW, wW;
        null === (MW = (wW = this.callbacks).UiW) || void 0 === MW || MW.call(wW);
        const CW = BW.get(this);
        for (; WW > CW.length;) CW[CW.length] = null;
        CW[WW] = RW
      }
      send(WW, RW) {
        this.EiW(), (0, eW.y)(RW) ? this.XyW.vU(WW, RW) : this.XyW.send(WW, RW)
      }
      EiW() {
        var WW, RW;
        5 === TW++ && (null === (WW = (RW = this.callbacks).UiW) || void 0 === WW || WW.call(RW), TW = 0)
      }
      aN() {
        this.dispose(), this.XyW.aN()
      }
      Cw() {
        this.dispose(), this.XyW.Cw()
      }
    }
    let TW = 0;
    var gR = MW(2790);
    class iR extends tR {
      constructor(WW) {
        super(WW, {
          UiW: () => {
            (0, AW.m)(!0) && (0, wW.zp)()
          },
          diW: (WW, RW) => {
            var MW;
            null === (MW = (0, bR.e)()) || void 0 === MW || MW.rz(WW, RW)
          }
        }), (0, gR.f)(WW)
      }
      upW(WW, RW) {
        return !!(0, gR.m)((0, gR.b)(), this.XyW, WW, RW) && (this.EiW(), !0)
      }
      aN() {
        super.aN(), this.XyW.Uy.pA.IRW = void 0
      }
    }
    var YW = MW(33),
      JW = MW(1558),
      PW = MW(1495),
      IW = MW(932),
      oW = MW(34703),
      lW = MW(37e3),
      FW = MW(37009),
      fW = MW(36098),
      QW = MW(35890),
      rR = MW(564),
      cR = MW(36485);

    function XW(WW, RW, MW) {
      const wW = function(WW) {
          const RW = new Int32Array(WW.length * cR.g);
          return WW.forEach(((WW, MW) => {
            const wW = MW * cR.g;
            if (4 === WW.length) {
              const [MW, CW, zR, AW] = WW;
              RW.set([MW, CW, zR, MW, CW, zR, AW], wW)
            } else {
              const [MW, CW, zR, AW, bR, yR, NW] = WW;
              RW.set([MW, zR, bR, CW, AW, yR, NW], wW)
            }
          })), RW
        }(MW),
        CW = (RW, MW, wW, CW) => {
          WW.setBlockNoMulti(RW, MW, wW, CW, !0)
        };
      WW.client.gameRecorder.isCapturing() ? (0, cR.ib)(wW, (0, cR.hb)(wW), CW) : WW.BR.zM.LMW(wW, {
        qwW: CW,
        isHookId: RW => WW.blockChangeHasHooks(RW),
        watched: () => function(WW, RW, MW) {
          const wW = [],
            CW = (WW, RW, MW) => {
              wW.push(WW, RW, MW)
            },
            zR = new Set;
          for (let AW = 0; AW < MW.length; AW += cR.g)
            for (let RW = (0, rR.W)(MW[AW]); RW <= (0, rR.W)(MW[AW + 3]); RW++)
              for (let wW = (0, rR.W)(MW[AW + 1]); wW <= (0, rR.W)(MW[AW + 4]); wW++)
                for (let bR = (0, rR.W)(MW[AW + 2]); bR <= (0, rR.W)(MW[AW + 5]); bR++) {
                  const MW = `${RW}|${wW}|${bR}`;
                  zR.has(MW) || (zR.add(MW), WW.blockDataOwner.forEachDataCell(RW, wW, bR, CW))
                }
          return RW.forEachCell(CW), Int32Array.from(wW)
        }(WW, RW, wW)
      }), WW.BR.abW()
    }
    var jR = MW(35667),
      kR = MW(37012),
      aR = MW(37016),
      sW = MW(860);
    var dW = MW(3557);

    function pW(WW) {
      const RW = WW.zM;
      let MW = 0,
        zR = -1,
        AW = -1 / 0,
        bR = null,
        NW = !0;
      const eW = () => {
        if (++MW % 10 !== 0) return;
        const eW = (0, wW.getLastReceivedPacketId)();
        if (eW <= zR) return;
        const [BW, tR, TW] = WW.Yk.yX(WW.GRW), gR = ! function(WW) {
          var RW;
          let MW = null === (RW = WW.Yk.NyW(WW.GRW)) || void 0 === RW ? void 0 : RW.iC;
          if (void 0 === MW) return !1;
          const wW = new Set;
          for (; void 0 !== MW && !wW.has(MW);) {
            var CW;
            wW.add(MW);
            const RW = WW.Yk.getState(MW, "smoothToServerPos"),
              zR = Array.isArray(RW) ? null : null === RW || void 0 === RW ? void 0 : RW.serverPosition;
            if (zR) {
              const RW = WW.Yk.yX(MW);
              if (Math.abs(RW[0] - zR[0]) > 10 || Math.abs(RW[1] - zR[1]) > 10 || Math.abs(RW[2] - zR[2]) > 10) return !0
            }
            MW = null === (CW = WW.Yk.NyW(MW)) || void 0 === CW ? void 0 : CW.iC
          }
          return !1
        }(WW) && function(WW, RW, MW, wW) {
          const zR = CW.c.dw;
          for (let CW = 0; CW < WW.length; CW++) {
            const AW = WW[CW];
            if (!(0, dW.j)(RW, MW, wW, AW[0] * zR, AW[1] * zR, AW[2] * zR)) return !1
          }
          return !0
        }(RW.zA.rC, BW, tR, TW), iR = null === bR || Math.abs(BW - bR[0]) > 8 || Math.abs(tR - bR[1]) > 8 || Math.abs(TW - bR[2]) > 8, YW = !NW || iR || performance.now() - AW >= 1e4;
        NW = gR, gR && YW && (zR = eW, AW = performance.now(), bR = [BW, tR, TW], (0, wW.sendColyMessage)(yR.Wf, {
          Qv: eW
        }))
      };
      WW.on("WR", eW), (0, wW.onGameResetOnce)((() => {
        WW.off("WR", eW)
      }))
    }
    var hW = MW(34963),
      UW = MW(290),
      EW = MW.n(UW),
      VW = MW(5473),
      mR = MW(36124),
      xR = MW(35861),
      vR = MW(3563),
      KW = MW(36189),
      uW = MW(35995),
      OW = MW(35434),
      nW = MW(35751),
      GW = MW(34954),
      LW = MW(34960),
      HW = MW(37020),
      DW = MW(37022),
      qR = MW(2727),
      ZW = MW(1330),
      SW = MW(2148),
      WR = MW(2202),
      RR = MW(36342),
      MR = MW(35223),
      wR = MW(3748),
      CR = MW(37064),
      zM = MW(36181),
      AR = MW(3348),
      bM = MW(35669),
      yM = MW(35295),
      NR = MW(36191),
      eR = MW(37031),
      BR = MW(37039),
      tM = MW(35427);
    class TR {
      constructor(WW, RW, MW) {
        this.gameNameWithVariation = WW, this.BR = MW, this.stateReplicationHandler = void 0, this.stateReplicationHandler = new BR.c(RW, this.BR)
      }
      setupStateReplicationHandlers() {
        this.stateReplicationHandler.setup()
      }
      setupOnMessageListeners(WW, RW) {
        const MW = this.BR,
          CW = this.gameNameWithVariation;
        WW.FX(yR.$b, (WW => {
          let {
            K3: RW,
            W4: wW,
            A4: CW,
            B4: zR,
            K4: AW,
            O4: bR,
            Z4: yR,
            Q0: NW,
            size: eW
          } = WW;
          (0, xR.g)(MW, RW, [AW, bR, yR], wW, CW, JSON.parse(zR), NW, eW)
        })), WW.FX(yR.Y, (WW => {
          (0, jR.d)(MW).setCantPickUp(WW, !0), MW.Yk.EAW(WW, "itemState") && (MW.Yk.getState(WW, "itemState").Q0 = !0)
        })), WW.FX(yR.Ad, (WW => {
          (0, jR.d)(MW).setCantPickUp(WW, !1), MW.Yk.EAW(WW, "itemState") && (MW.Yk.getState(WW, "itemState").Q0 = !1)
        })), WW.FX(yR.yc, (WW => {
          JW.d.applyNewClientOptions(WW)
        })), WW.FX(yR.Bc, (WW => {
          let {
            eId: RW,
            settings: wW
          } = WW;
          (0, yM.i)(RW);
          for (const MW in wW)(0, yM.e)(RW, MW, wW[MW]);
          if ("canSee" in wW && MW.Yk.EAW(RW, "hidingMeshManager")) {
            const WW = MW.Yk.getState(RW, "hidingMeshManager");
            WW.canSee = (0, NR.d)("canSee", wW.canSee), WW._forceUpdate = !0
          }
        })), WW.FX(yR.Ee, (WW => {
          let {
            oq: RW,
            lq: CW,
            Fq: zR,
            Qq: AW
          } = WW;
          const bR = [CW, zR, AW];
          MW.Yk.setPosition(MW.GRW, bR), (0, wW.sendColyMessage)(yR.tg, {
            wV: RW,
            YV: vR.d
          }), YW.k.Sz("localPlayerTeleported", {
            pos: bR,
            isCorrection: !1
          })
        })), WW.FX(yR.Lc, (WW => {
          let {
            ZH: RW,
            RD: MW,
            zq: wW,
            bq: CW
          } = WW;
          this.stateReplicationHandler.setUpIfQueued(RW);
          const zR = [MW, wW, CW];
          YW.k.Sz(`otherPlayerTeleported|${RW}`, {
            pos: zR
          })
        })), WW.FX(yR.ed, (WW => {
          let {
            FWW: RW,
            fWW: CW,
            QWW: zR,
            rRW: AW,
            cRW: bR,
            XWW: NW,
            jRW: eW,
            aRW: BW,
            kRW: tR,
            pWW: TW
          } = WW;
          const gR = [CW, zR, AW];
          MW.Yk.setPosition(MW.GRW, gR);
          const iR = MW.Yk.MbW(MW.GRW),
            JW = MW.Yk.EMW(MW.GRW);
          EW().set(JW.QMW, 0, 0, 0), EW().set(JW.rwW, 0, 0, 0), EW().set(JW.lA, bR, NW, eW), JW.cwR(), iR._flying = null !== TW, TW ? (iR.flyAccel.hWW = TW.hWW, iR.flyAccel.UWW = TW.UWW) : iR.flyAccel.reset(), BW && iR.movementType === VW.l.GLIDING && (iR.sWW = BW.sWW, EW().copy(iR.dWW, BW.dWW)), (0, wW.sendColyMessage)(yR.tg, {
            wV: RW,
            YV: vR.d
          }), YW.k.Sz("localPlayerTeleported", {
            pos: gR,
            isCorrection: !0
          })
        }));

        function zR() {
          return MW.Yk.cyW(MW.GRW)
        }
        WW.FX(yR.jb, (WW => {
          let {
            chatMsgId: RW,
            content: MW,
            chatterEId: wW
          } = WW;
          YW.k.Sz("chat", {
            serverChatMsgId: RW,
            content: MW,
            chatterEId: wW
          }, !0)
        })), WW.FX(yR.Vc, (WW => {
          SW.d.onReceiveColyseusPing(WW)
        })), WW.FX(yR.fe, (WW => {
          let {
            key: RW,
            value: MW
          } = WW;
          (0, PW.setCookie)(CW, RW, MW)
        })), WW.FX(yR.je, (WW => {
          YW.k.Sz("setDiscordReportKey", WW)
        })), WW.FX(yR.Wb, (RW => {
          let {
            GWW: CW,
            LWW: zR
          } = RW;
          console.log("Local client is eId", CW), YW.k.Sz("loadingScreenState", "loadingPage:loadingWorld"), (0, wW.setAdjustment)(zR), MW.xbW = CW, MW.Yk.EAW(MW.GRW, MW.Yk.names.entityName) && MW.Yk.VRW(MW.GRW, MW.Yk.names.entityName), (0, bR.b)().setEntityName(MW.xbW, (0, bR.b)().getRawEntityName(MW.GRW)), MW.nRW[MW.xbW] = {}, MW.Yk.ERW(MW.GRW, MW.Yk.names.entityName), YW.k.Sz("initInfoReceived", WW),
            function(WW) {
              let RW = null,
                MW = -1 / 0,
                CW = null;
              const zR = () => {
                  CW = null;
                  const zR = Math.ceil(WW.wRW[0]),
                    AW = Math.ceil(WW.wRW[1]);
                  RW && RW[0] === zR && RW[1] === AW || (RW = [zR, AW], MW = performance.now(), (0, wW.sendColyMessage)(yR.Tf, {
                    mH: zR,
                    xH: AW
                  }))
                },
                AW = () => {
                  null === CW && (CW = setTimeout(zR, Math.max(0, MW + 250 - performance.now())))
                };
              zR(), WW.on("addRemoveDistanceChanged", AW), (0, wW.onGameResetOnce)((() => {
                WW.off("addRemoveDistanceChanged", AW), null !== CW && clearTimeout(CW)
              }))
            }(MW.zM), pW(MW), AW.client.onServerConnectionFinalised()
        })), WW.FX(yR.Fe, (WW => {
          YW.k.Sz("TopRightHelper", WW, !0)
        })), WW.FX(yR.hd, (WW => {
          let {
            type: RW,
            location1: MW,
            location2: wW,
            location3: CW,
            score: zR
          } = WW;
          (0, WR.y)({
            type: RW,
            location1: MW,
            location2: wW,
            location3: CW,
            score: zR
          })
        })), WW.FX(yR.Od, (WW => {
          let {
            type: RW,
            resourceType: MW,
            amount: wW,
            category: CW,
            itemName: zR
          } = WW;
          (0, WR.B)({
            type: RW,
            resourceType: MW,
            amount: wW,
            category: CW,
            itemName: zR
          })
        })), WW.FX(yR.H, (WW => {
          MW.zM.JyW.add(WW), MW.zM.oyW.delete(WW)
        })), WW.FX(yR.R, (WW => {
          MW.zM.oyW.add(WW), MW.zM.JyW.delete(WW)
        })), WW.FX(yR.Bd, (WW => {
          MW.zM.oyW.delete(WW), MW.zM.JyW.delete(WW)
        })), WW.FX(yR.N, (WW => {
          MW.zM.PyW.add(WW), MW.zM.lyW.delete(WW)
        })), WW.FX(yR.U, (WW => {
          MW.zM.lyW.add(WW), MW.zM.PyW.delete(WW)
        })), WW.FX(yR.Gd, (WW => {
          MW.zM.lyW.delete(WW), MW.zM.PyW.delete(WW)
        })), WW.FX(yR.J, (WW => {
          (0, eW.Z)(WW, MW.zM.FyW), (0, eW.Z)(WW, MW.zM.IyW), MW.zM.IyW.push(WW)
        })), WW.FX(yR.T, (WW => {
          (0, eW.Z)(WW, MW.zM.IyW), (0, eW.Z)(WW, MW.zM.FyW), MW.zM.FyW.push(WW)
        })), WW.FX(yR.Cd, (WW => {
          (0, eW.Z)(WW, MW.zM.IyW), (0, eW.Z)(WW, MW.zM.FyW)
        })), WW.FX(yR.Te, (WW => {
          let {
            OZ: RW,
            HZ: wW
          } = WW;
          wW ? MW.zM.dMW.delete(RW) : MW.zM.dMW.add(RW)
        })), WW.FX(yR.Se, (WW => {
          let {
            W8: RW,
            Q8: wW
          } = WW;
          AW.updateWalkThroughRect(MW.GRW, RW, wW)
        })), (0, wW.onGameResetOnce)((() => {
          MW.zM.JyW = new Set, MW.zM.oyW = new Set, MW.zM.PyW = new Set, MW.zM.lyW = new Set, MW.zM.IyW = [], MW.zM.FyW = [], MW.zM.dMW = new Set, MW.zM.W8 = [], MW.zM.pMW = []
        })), WW.FX(yR.De, (WW => {
          (0, lW.b)(WW)
        })), WW.FX(yR.Pb, (WW => {
          fW.b.applyServerUpdate(WW)
        })), WW.FX(yR.$, (WW => {
          ! function(WW, RW) {
            for (const {
                bS: MW,
                eZ: wW
              }
              of RW) {
              const RW = QW.d[wW];
              if (RW) {
                const {
                  compX: wW,
                  compY: CW,
                  compZ: zR,
                  mainMultiblock: AW
                } = RW;
                WW.tMW(MW[0] - wW, MW[1] - CW, MW[2] - zR, AW)
              }
            }
            for (const {
                bS: MW,
                eZ: wW,
                kS: CW
              }
              of RW) WW.setBlockNoMulti(MW[0], MW[1], MW[2], wW, !0), WW.blockDataOwner.setBlockData(MW[0], MW[1], MW[2], null === CW ? void 0 : JSON.parse(CW)), WW.blockAdded(MW[0], MW[1], MW[2], wW)
          }(AW, WW), YW.k.Sz("changeBlockFail", WW), AW.client.triggerGameCallback("onChangeBlockFail", WW), YW.k.Sz("EditBoard", {
            pos: null
          }), YW.k.Sz("EditCodeBlock", {
            pos: null,
            canChangePos: null
          })
        })), WW.FX(yR.Rc, (WW => {
          for (const {
              name: RW,
              amount: MW,
              attributes: wW
            }
            of WW) zR().pickUpItem({
            name: RW,
            amount: MW,
            typeObj: xR.x[RW],
            attributes: wW
          })
        })), WW.FX(yR.me, (WW => {
          let {
            index: RW,
            name: MW,
            amount: wW,
            attributes: CW
          } = WW;
          zR().setItemSlot(RW, MW, wW, CW)
        })), WW.FX(yR.Be, (WW => {
          let {
            r_: RW,
            q_: wW
          } = WW;
          MW.Yk.ryW(MW.GRW) ? (wW && console.error("Had to sync inven"), MW.Yk.XbW(MW.GRW).loadFromString(RW), YW.k.Sz("syncedInvenFromServer")) : console.log("Got resync inven but don't have inven component")
        })), WW.FX(yR.ub, (() => {
          zR().clearInventory()
        })), WW.FX(yR.mc, (WW => {
          let {
            leaveEventType: RW,
            category: MW,
            subCategory: wW,
            value: CW
          } = WW;
          (0, WR.P)({
            leaveEventType: RW,
            category: MW,
            subCategory: wW,
            value: CW
          })
        })), WW.FX(yR.Ab, (WW => {
          let {
            cat1: RW,
            cat2: MW,
            cat3: wW,
            value: CW
          } = WW;
          (0, WR.s)({
            cat1: RW,
            cat2: MW,
            cat3: wW,
            value: CW
          })
        }));
        const AW = (0, bR.b)();
        WW.FX(yR.yb, (WW => {
          XW(AW, fW.b, WW)
        })), WW.FX(yR.ne, (WW => {
          YW.k.Sz("setSelectedInventorySlotI", WW, !0)
        })), WW.FX(yR.kc, (WW => {
          let {
            category: RW,
            timeframe: MW,
            data: wW
          } = WW;
          YW.k.Sz("leaderboardResponse", {
            category: RW,
            timeframe: MW,
            data: wW
          })
        })), WW.FX(yR.E, (WW => {
          let {
            N_: RW,
            xw: MW
          } = WW;
          this.stateReplicationHandler.setUpIfQueued(RW), RW = (0, hW.e)(RW), (0, bR.b)().client.gameRecorder.recordBulletShot(RW, MW), YW.k.Sz(`bulletShot|${RW}`, {
            bulletDirections: MW
          })
        })), WW.FX(yR.Rb, (WW => {
          let {
            U1: RW,
            E1: MW
          } = WW;
          YW.k.Sz("damagedByOtherPlayer", {
            U1: RW,
            direction: MW
          }, !0)
        })), WW.FX(yR.cd, (WW => {
          YW.k.Sz("playerKilled", WW, !0), (0, bR.b)().client.gameRecorder.recordPlayerKilled(WW.deadEId, WW.killerEId, WW.withItem, WW.killstreak)
        })), WW.FX(yR.Cb, (WW => {
          YW.k.Sz("customKillfeed", WW, !0), (0, bR.b)().client.gameRecorder.recordCustomKillfeed(WW.killer, WW.victim, WW.withItem)
        })), WW.FX(yR.jd, (WW => {
          let {
            jWW: RW,
            kWW: wW
          } = WW;
          this.stateReplicationHandler.setUpIfQueued(RW);
          const CW = MW.Yk.HbW(RW);
          null !== CW && void 0 !== CW && CW.isGun() && CW.reload(Date.now(), wW)
        })), WW.FX(yR.ye, (() => {
          YW.k.Sz("showShopTutorial", null, !0)
        })), WW.FX(yR.fd, (WW => {
          YW.k.Sz("progressBarUpdate", WW, !0)
        })), WW.FX(yR._b, (WW => {
          YW.k.Sz("middleScreenBarInitiate", {
            duration: WW.hq,
            xZ: WW.xZ,
            horizBarRemOffset: WW.uq
          }, !0)
        })), WW.FX(yR.td, (() => {
          YW.k.Sz("middleScreenBarRemove", !0)
        })), WW.FX(yR.Vd, (WW => {
          let {
            zWW: RW,
            pE: wW
          } = WW;
          const CW = wW ? (0, zM.d)(MW, wW) : void 0;
          YW.k.Sz("sendHitmarker", {
            zWW: RW,
            screenPos: CW
          }, !0)
        })), WW.FX(yR.he, (WW => {
          let {
            id: RW,
            position: MW,
            style: wW,
            text: CW,
            uZ: zR
          } = WW;
          YW.k.Sz("setDirectionArrow", {
            id: RW,
            position: MW,
            style: wW,
            text: (0, yR.l)(CW),
            uZ: zR
          }, !0)
        })), WW.FX(yR.tb, (WW => {
          let {
            id: RW
          } = WW;
          YW.k.Sz("clearDirectionArrow", {
            id: RW
          }, !0)
        })), WW.FX(yR.q, (WW => {
          let {
            XE: RW,
            vWW: wW,
            animationScript: CW,
            qWW: zR,
            Z2: AW,
            WWW: yR,
            RWW: NW
          } = WW;
          RW = (0, hW.e)(RW);
          const eW = null === CW && null !== yR ? (0, kR.f)(yR, NW) : CW;
          (0, bR.b)().client.gameRecorder.recordAnimateEntity(RW, wW, eW, zR, AW), (0, jR.d)(MW).animations.animateEntity(RW, wW, CW, zR, AW, yR, NW), null !== CW || RW === MW.GRW && wW === bM.c.Emote && (0, bR.b)().client.cameraController.endTemporaryThirdPerson()
        })), WW.FX(yR.Ne, (WW => {
          let {
            aWW: RW,
            xWW: MW
          } = WW;
          if (AW.AwW(RW[0], RW[1], RW[2])) {
            const WW = (0, bR.b)().uF(RW[0], RW[1], RW[2]);
            (0, bR.b)().updateMailboxContents(RW[0], RW[1], RW[2], WW, MW)
          }
        })), WW.FX(yR.lb, (WW => {
          let {
            bWW: RW,
            yWW: wW,
            tWW: CW,
            bV: zR,
            gWW: AW,
            iWW: yR,
            rWW: NW,
            cWW: eW
          } = WW;
          const BW = MW.Yk.XbW(MW.GRW);
          if (yR) return BW.chestContentsRefreshed(wW, eW), void YW.k.Sz("chestRefreshedFromServer");
          (RW || BW.k_) && (RW ? (BW.chestOpened(wW, CW, zR, AW, NW), null !== AW && (0, bR.b)().client.ironChestPasskeyCache.onChestOpened(zR, AW)) : BW.chestClosed(), YW.k.Sz("chestToggleFromServer", RW, !0))
        })), WW.FX(yR.Gb, (WW => {
          let {
            craftingRecipeItemName: RW,
            recipesForItem: wW
          } = WW;
          RW ? AW.craftingManager.editRecipesForPlayer(MW.GRW, RW, wW) : AW.craftingManager.resetAllPlayerRecipes(MW.GRW), YW.k.Sz("craftingRecipesEdited", {
            itemName: RW,
            recipesForItem: wW
          })
        })), WW.FX(yR.qe, (WW => {
          let {
            vehicleEId: RW,
            overrides: MW
          } = WW;
          (0, bR.b)().applyRiddenVehicleSettingOverrides(RW, MW)
        })), WW.FX(yR.Re, (WW => {
          let {
            nH: RW,
            qD: wW,
            Iw: CW
          } = WW;
          (0, bR.b)().updatePositionAndPhysics(MW.GRW, {
            type: RW,
            tier: wW
          }, !0, CW)
        })), WW.FX(yR.db, (WW => {
          let {
            pose: RW,
            E8: wW
          } = WW;
          MW.Yk.QbW(MW.GRW).setPose(RW, wW)
        })), WW.FX(yR.Sd, (WW => {
          (0, eR.d)(WW)
        })), WW.FX(yR._c, (WW => {
          for (const RW of WW)(0, KW.w)(RW);
          YW.k.Sz("playerCosmeticsUpdated", WW, !0)
        })), WW.FX(yR.v, (WW => {
          for (const RW of WW)(0, MR.g)(MW, RW)
        })), WW.FX(yR.qc, (WW => {
          let {
            TWW: RW,
            gRW: wW,
            YWW: CW,
            JWW: zR,
            PWW: bR,
            IWW: yR,
            oWW: NW
          } = WW;
          this.stateReplicationHandler.setUpIfQueued(RW), RW = (0, hW.e)(RW);
          const eW = MW.Yk.vyW(RW);
          if (eW && (eW.lastHurtTime = performance.now()), (0, mR.playRigHurt)(MW, RW, yR), YW.k.Sz("lifeformHurt", {
              eId: RW,
              oWW: NW
            }), wW) {
            const WW = (0, zM.d)(MW, wW.pE);
            YW.k.Sz("yourAttackHit", {
              zWW: zR,
              screenPos: WW,
              hitSelf: RW === MW.GRW
            })
          }
          RW === MW.GRW && (AW.shakePlayerCamera(RW, bR / 40, 200), YW.k.Sz("closeShopOnDamaged", null), YW.k.Sz("damagedByOtherPlayer", {
            U1: null,
            direction: yR,
            PWW: bR
          }, !0));
          const BW = MW.Yk.yX(RW);
          if (BW && (CW || zR)) {
            const WW = [BW[0], BW[1] + 1, BW[2]];
            CW && (0, uW.n)(MW, uW.v, WW, 15), zR && (0, uW.n)(MW, uW.q, WW, 10)
          }
        })), WW.FX(yR.nc, (WW => {
          let {
            eId: RW,
            Jq: wW,
            Iq: CW
          } = WW;
          (0, jR.d)(MW).setHealthFrac((0, hW.e)(RW), CW), YW.k.Sz("lifeformHealthChanged", {
            eId: (0, hW.e)(RW),
            Jq: wW,
            Iq: CW
          })
        })), WW.FX(yR.y, (WW => {
          let {
            g6: RW,
            i6: wW
          } = WW;
          (0, bR.b)().playerAttacked(MW.GRW, RW, wW)
        })), WW.FX(yR.hc, (WW => {
          (0, bR.b)().client.leaveGameUnwanted({
            reason: WW,
            requiresRefresh: !1,
            canReconnect: !1,
            automaticallyReconnect: !1
          }), (0, ZW.navigatePreserveSearch)("/")
        })), WW.FX(yR.qd, (WW => {
          let {
            qS: RW,
            ZZ: wW
          } = WW;
          MW.Yk.cyW(MW.GRW).removeItemName(RW, wW)
        })), WW.FX(yR.be, (WW => {
          const {
            eA: RW,
            AyW: wW
          } = (0, OW.e)([WW[0], WW[1], WW[2]]);
          tM.e.setLookDirection(MW, RW, wW), (0, nW.s)(RW, wW);
          const CW = MW.Yk.QbW(MW.GRW);
          CW && (CW.heading = RW)
        })), WW.FX(yR.de, (WW => {
          AW.client.cameraController.setCameraZoom(WW)
        })), WW.FX(yR.ve, (WW => {
          let {
            RZ: RW,
            wZ: wW
          } = WW;
          AW.shakePlayerCamera(MW.GRW, RW, wW)
        })), WW.FX(yR.zb, (WW => {
          (0, qR.onCosmeticPackGranted)(WW)
        })), WW.FX(yR.Xd, (WW => {
          YW.k.Sz("serverUpdating", Date.now() + WW, !0)
        })), WW.FX(yR.xc, aR.d), WW.FX(yR.Ic, (WW => {
          let {
            id: RW,
            e_: MW
          } = WW;
          const {
            type: CW,
            params: zR
          } = (0, CR.i)(MW), AW = {
            ...zR
          };
          for (const wW of CR.e) wW in AW && AW[wW] && (AW[wW] = (0, yR.l)(AW[wW]));
          wR.e.queueQTE(RW, CW, AW).getResult().then((WW => {
            "boolean" === typeof WW && (0, wW.sendColyMessage)(yR.Hh, {
              qteId: RW,
              qteResponse: WW
            })
          }))
        })), WW.FX(yR.vd, (WW => {
          wR.e.cancelQTE(WW)
        })), (0, wW.onGameResetOnce)((() => {
          wR.e.reset()
        })), WW.FX(yR.Jc, (WW => {
          let {
            id: RW,
            clientParameters: MW
          } = WW;
          (0, FW.d)(RW, MW)
        })), WW.FX(yR.wd, (WW => {
          (0, FW.h)(WW)
        })), WW.FX(yR.Ke, (WW => {
          let {
            text: RW,
            id: MW
          } = WW;
          (0, FW.j)(MW, RW, (WW => {
            (0, wW.sendColyMessage)(yR.cj, {
              mp: MW,
              Qp: WW,
              Xp: 5
            })
          }))
        })), WW.FX(yR.Hb, (WW => {
          let {
            xV: RW,
            vV: MW,
            uE: wW,
            P5: CW,
            I5: zR,
            o5: AW
          } = WW;
          RW = (0, hW.e)(RW), (0, bR.b)().client.updateEffect(RW, MW, {
            displayName: wW,
            icon: CW,
            duration: zR,
            level: AW
          })
        })), WW.FX(yR.nd, (WW => {
          let {
            xV: RW,
            vV: MW
          } = WW;
          RW = (0, hW.e)(RW), (0, bR.b)().client.removeEffect(RW, MW)
        })), WW.FX(yR.dc, (WW => {
          MW.Yk.QbW(MW.GRW).jumpMultiplier.setMultiplierType("jumpEffectAmount", WW)
        })), WW.FX(yR.He, (WW => {
          YW.k.Sz("ttbEffectMultiplier", WW)
        })), (0, wW.onGameResetOnce)((() => {
          MW.Yk.QbW(MW.GRW).jumpMultiplier.setMultiplierType("jumpEffectAmount", 1)
        })), WW.FX(yR.Ec, (WW => {
          (0, uW.o)(MW, (0, eW.n)(WW))
        })), WW.FX(yR.Hc, (WW => {
          AR.d[WW.lWW] ? (0, uW.o)(MW, {
            ...AR.d[WW.lWW],
            pos1: WW.pos1,
            pos2: WW.pos2
          }) : console.error(`Unknown preset id: ${WW.lWW}`)
        })), WW.FX(yR.Yc, (WW => {
          var RW, MW;
          let {
            K8: wW,
            soundVolume: CW,
            R7: zR,
            A7: AW
          } = WW, {
            B7: yR,
            J7: NW
          } = null !== AW && void 0 !== AW ? AW : {};
          const {
            N7: eW
          } = null !== AW && void 0 !== AW ? AW : {};
          yR = null !== (RW = yR) && void 0 !== RW ? RW : void 0, NW = null !== (MW = NW) && void 0 !== MW ? MW : void 0, "string" === typeof eW && this.stateReplicationHandler.setUpIfQueued(eW), (0, bR.b)().client.gameRecorder.recordPlaySound(wW, CW, zR, AW), GW.b.play((0, LW.e)(wW), CW, eW, yR, NW).rate(zR)
        })), WW.FX(yR.Zd, (WW => {
          let {
            pos: RW,
            data: MW
          } = WW;
          AW.blockDataOwner.setBlockData(RW[0], RW[1], RW[2], MW), AW.blockAdded(RW[0], RW[1], RW[2], AW.uF(RW[0], RW[1], RW[2]))
        })), WW.FX(yR.Oc, (WW => {
          let {
            info: RW
          } = WW;
          YW.k.Sz("overShopInfo", RW, !0)
        })), WW.FX(yR.Nb, (WW => {
          let {
            U6: wW,
            b_: CW
          } = WW;
          RW.openShop(MW.GRW, wW, CW)
        })), WW.FX(yR.u, (WW => {
          MW.Yk.EMW(MW.GRW).applyImpulse(WW)
        })), WW.FX(yR.re, (WW => {
          const RW = MW.Yk.EMW(MW.GRW);
          EW().set(RW.QMW, 0, 0, 0), EW().set(RW.rwW, 0, 0, 0), EW().copy(RW.lA, WW), RW.cwR()
        })), WW.FX(yR.tc, (WW => {
          console.error(`[logErrorToConsole]: ${WW}`)
        })), WW.FX(yR.Kb, (WW => {
          let {
            W9: RW,
            N9: MW,
            J9: wW
          } = WW;
          YW.k.Sz("flyingMiddleMessage", {
            content: (0, yR.l)(RW),
            N9: MW,
            J9: wW
          }, !0)
        })), WW.FX(yR.We, (WW => {
          const RW = WW === sW.g ? null : {
            message: `Currently loaded as variation: ${WW}`,
            type: "Warning"
          };
          YW.k.Sz("showPermanentBottomMessage", RW, !0)
        })), WW.FX(yR.Ob, (WW => {
          let {
            messageType: RW,
            data: MW
          } = WW;
          (0, HW.c)(RW) ? (0, HW.b)(RW, MW) : ("freeCamPerms" === RW && AW.client.freeCameraController.setPerms(MW.key, MW.value), AW.client.triggerGameCallback("onReceivedMessageFromServer", RW, MW))
        })), WW.FX(yR.hb, (() => {
          const WW = MW.Yk.HbW(MW.GRW);
          null !== WW && void 0 !== WW && WW.isChargeable() && WW.finishCharging(!1, Date.now())
        })), WW.FX(yR.od, (WW => {
          let {
            aZ: RW
          } = WW;
          AW.craftingManager.removeRecipes(MW.GRW, RW), YW.k.Sz("craftingRecipesEdited", {
            itemName: RW,
            recipesForItem: []
          })
        })), WW.FX(yR.Qe, (WW => {
          for (const RW in WW) {
            const MW = WW[RW];
            for (const WW in MW) AW.client.meshCreator.handleParticleSystemUpdate(RW, WW, MW[WW])
          }
        })), (0, wW.onGameResetOnce)((() => {
          (0, RR.setFloatingYValue)(MW.Yk.getState(MW.GRW, "physics"), MW.Yk.QwW(MW.GRW), null)
        })), WW.FX(yR.Ib, (WW => {
          let {
            R_: RW,
            M_: wW,
            A_: CW
          } = WW;
          const zR = (0, hW.e)(RW);
          if (zR === MW.GRW) {
            const WW = MW.Yk.QwW(MW.GRW).position;
            CW ??= Math.floor(WW[1]) - 1, (0, RR.setFloatingYValue)(MW.Yk.getState(MW.GRW, "physics"), MW.Yk.QwW(MW.GRW), wW ? CW : null)
          }(0, jR.d)(MW).setFloating(zR, wW, CW);
          const AW = MW.Yk.getState(zR, "floating");
          AW && (AW.isFloating = wW, AW.A_ = wW ? CW : null)
        })), WW.FX(yR.wb, DW.i)
      }
    }
    window.addEventListener("beforeunload", (() => {}));
    var gM = MW(1148),
      iM = MW(3662),
      YR = MW(2289),
      JR = MW(920),
      PR = MW(2361),
      IR = MW(35766),
      oR = MW(37069),
      lR = MW(5487);

    function FR(WW) {
      var RW, MW;
      if ("object" !== typeof WW || null === WW) return {
        errType: typeof WW
      };
      const wW = WW;
      return {
        errType: null !== (RW = null === (MW = WW.constructor) || void 0 === MW ? void 0 : MW.name) && void 0 !== RW ? RW : "",
        errName: "string" === typeof wW.name ? wW.name : "",
        eventType: "string" === typeof wW.type ? wW.type : "",
        errStack: "string" === typeof wW.stack ? wW.stack.split("\n").slice(1).join(" | ") : ""
      }
    }

    function fR(WW) {
      if ("undefined" !== typeof ProgressEvent && WW instanceof ProgressEvent) return !0;
      if (!(WW instanceof Error)) return !1;
      const RW = WW.code;
      return "ServerError" === WW.name && void 0 === RW || "AbortError" === WW.name || "seat reservation expired." === WW.message || "early_leave" === WW.message
    }(0, gR.n)((WW => {
      (0, PR.e)("wasm_net", WW)
    }));
    let QR = !0;

    function rM() {
      QR = !1
    }
    class cM {
      constructor(WW) {
        this.gameNameWithVariation = void 0, this.lobbyName = void 0, this.colyClient = void 0, this.userContext = void 0, this.joinedAt = null, this.gameNameWithVariation = WW.gameNameWithVariation, this.lobbyName = WW.lobbyName, this.colyClient = WW.colyClient, this.userContext = WW.userContext
      }
      async connectToServer(WW, RW, MW) {
        JW.d.reset(), WW.nRW = {
          [WW.GRW]: {}
        }, WW.xbW = void 0, (0, eR.q)(), (0, bR.b)().removeAllEntityNames(), (0, bR.b)().setEntityName(WW.GRW, this.userContext.getPlayerName()), (0, gM.n)({
          lobbyName: this.lobbyName
        }), console.log("Waiting for clientConnection passed promise to resolve");
        const {
          roomName: zR,
          joinOptions: AW
        } = (0, oW.c)(this.userContext, this.gameNameWithVariation, this.lobbyName, RW, (WW => YR.d.isUsingCustomGameTexturePack(WW)));
        console.log("joining server with game", this.gameNameWithVariation, "lobbyName", this.lobbyName);
        const yR = performance.now(),
          NW = (0, oR.d)((() => this.colyClient.joinOrCreate(zR, AW)), MW);
        return YW.k.Sz("loadingScreenState", "loadingPage:joiningLobby"), await NW.then((WW => {
          this.joinedAt = performance.now();
          const RW = (0, IW.i)((() => WW.connection.isOpen));
          ! function(WW, RW) {
            WW.EX(RW), (0, wW.onGameResetOnce)(RW)
          }(WW, RW);
          const MW = new iR(WW),
            CW = MW.send,
            zR = MW.FX,
            AW = MW.XyW.send,
            bR = MW.XyW.FX,
            yR = MW.aYW,
            NW = (0, IR.f)(MW, WW, gR.o),
            eW = setInterval((() => {
              CW === MW.send && zR === MW.FX && AW === MW.XyW.send && bR === MW.XyW.FX && yR === MW.aYW || rM(), NW()
            }), 1e4);
          return (0, wW.onGameResetOnce)((() => {
            clearInterval(eW)
          })), {
            success: !0,
            successDetails: MW
          }
        })).catch((RW => {
          if (MW.aborted && RW === (0, lR.e)(MW)) return {
            success: !1,
            failDetails: {
              reason: "Left the game while it loaded",
              requiresRefresh: !1,
              canReconnect: !1
            }
          };
          WW.rz(`Failed to connect to bloxd room, check your internet connection. lobbyName: ${this.lobbyName}, gameNameWithVariation: ${this.gameNameWithVariation} code: ${RW.code}\n`, RW);
          const wW = RW.code;
          return wW === CW.b.serverUpdating.code ? (this.goToUpdateWaiting(), {
            success: !1,
            failDetails: {
              reason: CW.b.serverUpdating.text,
              requiresRefresh: !1,
              canReconnect: !0,
              goesToUpdateWaiting: !0
            }
          }) : {
            success: !1,
            failDetails: this.onConnectionToServerLost(wW, RW.message, {
              site: "join",
              sinceJoinStart: XR(performance.now() - yR),
              ...FR(RW)
            }, fR(RW))
          }
        }))
      }
      setupServerListeners(WW, RW, MW) {
        YW.k.Sz("loadingScreenState", "loadingPage:loadingPlayerInfo");
        const zR = new TR(this.gameNameWithVariation, RW.XyW, WW);
        zR.setupStateReplicationHandlers();
        const AW = RW.hiR();
        zR.setupOnMessageListeners(AW, MW), (0, wW.onConnectionToServerReady)(AW, RW), AW.finishRegistration(), RW.XyW.EX(((RW, MW) => {
          var wW;
          if (RW === CW.b.gameOrPluginKick.code) return;
          if (console.log(`Left room with code ${RW}`), RW === CW.b.serverUpdating.code) return (0, PR.e)("disconnect", "Left room", "serverUpdating"), (0, bR.b)().client.leaveGame(this.getUpdateWaitingUrl()), void this.goToUpdateWaiting();
          WW.rz(`Kicked from server with code ${RW}`, new Error);
          const zR = Object.keys(CW.b).find((WW => CW.b[WW].code === RW));
          (0, PR.e)("disconnect", "Left room", null !== zR && void 0 !== zR ? zR : String(RW));
          const AW = this.onConnectionToServerLost(RW, void 0, {
            site: "Cw",
            closeReason: null !== MW && void 0 !== MW ? MW : "",
            sinceJoined: null === this.joinedAt ? "" : XR(performance.now() - this.joinedAt)
          });
          (0, bR.b)().client.leaveGameUnwanted({
            reason: `You have disconnected from the server.\n${AW.reason}`,
            canReconnect: AW.canReconnect,
            requiresRefresh: AW.requiresRefresh,
            automaticallyReconnect: null !== (wW = AW.automaticallyReconnect) && void 0 !== wW && wW
          }), (0, ZW.navigatePreserveSearch)("/")
        }))
      }
      getUpdateWaitingUrl() {
        return (0, iM.C)(this.gameNameWithVariation, this.lobbyName)
      }
      goToUpdateWaiting() {
        (0, ZW.navigatePreserveSearch)(this.getUpdateWaitingUrl())
      }
      onConnectionToServerLost(WW, RW, MW) {
        var wW;
        let AW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (null !== (wW = RW) && void 0 !== wW && wW.endsWith(CW.d) && (this.userContext.invalidateTrafficCode(), RW = RW.replace(CW.d, "")), WW === CW.b.outdatedVersion.code) return console.error("Outdated client with version ", zR.e, ", refreshing page"), (0, PW.reloadBloxd)(), {
          reason: "Outdated client",
          requiresRefresh: !0,
          canReconnect: !1
        };
        if (WW === CW.b.loadRecaptchaError.code) return console.error("Load recaptcha error, refreshing page"), (0, PW.reloadBloxd)(), {
          reason: "Failed to load recaptcha",
          requiresRefresh: !0,
          canReconnect: !1
        };
        for (const zR in CW.b) {
          const {
            code: MW,
            text: wW,
            canReconnect: AW
          } = CW.b[zR];
          if (MW === WW) {
            console.log("matched known error", WW, "leaving game");
            return {
              reason: "" === wW ? RW : wW,
              requiresRefresh: !1,
              canReconnect: AW,
              automaticallyReconnect: MW === CW.b.customGameUpdated.code || MW === CW.b.duplicateLobbyNameError.code
            }
          }
        }
        var bR;
        (console.log("Didn't match known error, leaving game"), 1006 === WW || 1001 === WW || AW) ? console.warn("Connection lost", WW, RW): (0, JR.jz)(new Error("Unrecognised connection loss"), {
          code: String(WW),
          cause: null !== (bR = RW) && void 0 !== bR ? bR : "",
          ...MW,
          game: this.gameNameWithVariation,
          online: String(navigator.onLine),
          visibility: document.visibilityState
        });
        return {
          reason: `Either your internet isn't working or this is a bug.\nCode: ${WW}`,
          requiresRefresh: !1,
          canReconnect: !1
        }
      }
    }

    function XR(WW) {
      return WW < 1e3 ? "<1s" : WW < 5e3 ? "1-5s" : WW < 3e4 ? "5-30s" : WW < 3e5 ? "30s-5m" : ">5m"
    }
  },
  37039: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => GM,
      f: () => SM
    });
    var wW, CW, zR, AW, bR, yR, NW, eW, BW, tR, TW, gR, iR, YW, JW, PW, IW, oW, lW, FW, fW, QW, rR, cR, XW, jR, kR, aR, sW, dW, pW, hW, UW, EW, VW, mR, xR, vR, KW, uW, OW, nW, GW, LW, HW, DW, qR, ZW, SW, WR, RR, MR, wR, CR, zM, AR, bM, yM, NR, eR, BR, tM, TR, gM, iM, YR, JR, PR, IR, oR, lR, FR, fR, QR, rM, cM, XR, jM, kM, aM, sR, dR, pR, hR, UR, ER, VR, mM, xM, vM, KR, uR, OR, nR, GR, LR, HR, DR, qM, ZR = MW(33),
      SR = MW(35667),
      WM = MW(37050),
      RM = MW(37057),
      MM = MW(7975),
      wM = MW(556),
      CM = MW(548),
      zw = MW(34973);
    let AM = (wW = (0, MM.type)("number"), CW = (0, MM.type)("number"), zR = (0, MM.type)("number"), AW = (0, MM.type)("number"), bR = (0, MM.type)("number"), yR = (0, MM.type)("number"), NW = (0, MM.type)("string"), eW = class extends MM.Schema {
        constructor() {
          super(...arguments), (0, WM.d)(this, "id", BW, this), (0, WM.d)(this, "amount", tR, this), (0, WM.d)(this, "x", TW, this), (0, WM.d)(this, "y", gR, this), (0, WM.d)(this, "z", iR, this), (0, WM.d)(this, "size", YW, this), (0, WM.d)(this, "attributes", JW, this)
        }
      }, BW = (0, RM.e)(eW.prototype, "id", [wW], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), tR = (0, RM.e)(eW.prototype, "amount", [CW], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), TW = (0, RM.e)(eW.prototype, "x", [zR], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), gR = (0, RM.e)(eW.prototype, "y", [AW], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), iR = (0, RM.e)(eW.prototype, "z", [bR], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), YW = (0, RM.e)(eW.prototype, "size", [yR], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 1
        }
      }), JW = (0, RM.e)(eW.prototype, "attributes", [NW], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "{}"
        }
      }), eW),
      bw = (PW = (0, MM.type)("string"), IW = (0, MM.type)("string"), oW = class extends MM.Schema {
        constructor() {
          super(...arguments), (0, WM.d)(this, "itemName", lW, this), (0, WM.d)(this, "enchantmentTier", FW, this)
        }
      }, lW = (0, RM.e)(oW.prototype, "itemName", [PW], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), FW = (0, RM.e)(oW.prototype, "enchantmentTier", [IW], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), oW),
      yw = (fW = (0, MM.type)("string"), QW = (0, MM.type)("string"), rR = (0, MM.type)("number"), cR = (0, MM.type)("number"), XW = (0, MM.type)("number"), jR = (0, MM.type)("float32"), kR = (0, MM.type)("float32"), aR = (0, MM.type)("float32"), sW = (0, MM.type)("string"), dW = (0, MM.type)(["number"]), pW = (0, MM.type)("boolean"), hW = class extends MM.Schema {
        constructor() {
          super(...arguments), (0, WM.d)(this, "type", UW, this), (0, WM.d)(this, "name", EW, this), (0, WM.d)(this, "x", VW, this), (0, WM.d)(this, "y", mR, this), (0, WM.d)(this, "z", xR, this), (0, WM.d)(this, "xRotation", vR, this), (0, WM.d)(this, "yRotation", KW, this), (0, WM.d)(this, "zRotation", uW, this), (0, WM.d)(this, "followingEId", OW, this), (0, WM.d)(this, "followingOffset", nW, this), (0, WM.d)(this, "shouldMatchFollowingEntityRotation", GW, this)
        }
      }, UW = (0, RM.e)(hW.prototype, "type", [fW], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), EW = (0, RM.e)(hW.prototype, "name", [QW], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return ""
        }
      }), VW = (0, RM.e)(hW.prototype, "x", [rR], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), mR = (0, RM.e)(hW.prototype, "y", [cR], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), xR = (0, RM.e)(hW.prototype, "z", [XW], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), vR = (0, RM.e)(hW.prototype, "xRotation", [jR], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), KW = (0, RM.e)(hW.prototype, "yRotation", [kR], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), uW = (0, RM.e)(hW.prototype, "zRotation", [aR], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), OW = (0, RM.e)(hW.prototype, "followingEId", [sW], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), nW = (0, RM.e)(hW.prototype, "followingOffset", [dW], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new MM.ArraySchema(0, 0, 0)
        }
      }), GW = (0, RM.e)(hW.prototype, "shouldMatchFollowingEntityRotation", [pW], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !0
        }
      }), hW),
      NM = (LW = (0, MM.type)("float32"), HW = (0, MM.type)("float32"), DW = (0, MM.type)("boolean"), qR = (0, MM.type)("boolean"), ZW = (0, MM.type)("float32"), SW = (0, MM.type)("boolean"), WR = (0, MM.type)("string"), RR = (0, MM.type)("string"), MR = (0, MM.type)("string"), wR = (0, MM.type)("string"), CR = (0, MM.type)(["number"]), zM = (0, MM.type)("number"), AR = (0, MM.type)({
        map: bw
      }), bM = class extends yw {
        constructor() {
          super(...arguments), (0, WM.d)(this, "scale", yM, this), (0, WM.d)(this, "speed", NR, this), (0, WM.d)(this, "jumping", eR, this), (0, WM.d)(this, "crouching", BR, this), (0, WM.d)(this, "cameraPitch", tM, this), (0, WM.d)(this, "armSwinging", TR, this), (0, WM.d)(this, "heldItemName", gM, this), (0, WM.d)(this, "heldItemEnchantmentTier", iM, this), (0, WM.d)(this, "pose", YR, this), (0, WM.d)(this, "ridingVehicleEId", JR, this), (0, WM.d)(this, "meshOffset", PR, this), (0, WM.d)(this, "baseRenderHeading", IR, this), (0, WM.d)(this, "armour", oR, this)
        }
      }, yM = (0, RM.e)(bM.prototype, "scale", [LW], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 1
        }
      }), NR = (0, RM.e)(bM.prototype, "speed", [HW], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), eR = (0, RM.e)(bM.prototype, "jumping", [DW], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), BR = (0, RM.e)(bM.prototype, "crouching", [qR], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), tM = (0, RM.e)(bM.prototype, "cameraPitch", [ZW], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), TR = (0, RM.e)(bM.prototype, "armSwinging", [SW], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), gM = (0, RM.e)(bM.prototype, "heldItemName", [WR], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), iM = (0, RM.e)(bM.prototype, "heldItemEnchantmentTier", [RR], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), YR = (0, RM.e)(bM.prototype, "pose", [MR], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "standing"
        }
      }), JR = (0, RM.e)(bM.prototype, "ridingVehicleEId", [wR], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), PR = (0, RM.e)(bM.prototype, "meshOffset", [CR], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new MM.ArraySchema(0, 0, 0)
        }
      }), IR = (0, RM.e)(bM.prototype, "baseRenderHeading", [zM], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), oR = (0, RM.e)(bM.prototype, "armour", [AR], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new MM.MapSchema
        }
      }), bM),
      eM = (lR = (0, MM.type)("string"), FR = (0, MM.type)("string"), fR = (0, MM.type)("string"), QR = (0, MM.type)("uint8"), rM = class extends NM {
        constructor() {
          super(...arguments), (0, WM.d)(this, "variation", cM, this), (0, WM.d)(this, "ownerDbId", XR, this), (0, WM.d)(this, "metaInfo", jM, this), (0, WM.d)(this, "aiState", kM, this)
        }
      }, cM = (0, RM.e)(rM.prototype, "variation", [lR], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "default"
        }
      }), XR = (0, RM.e)(rM.prototype, "ownerDbId", [FR], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), jM = (0, RM.e)(rM.prototype, "metaInfo", [fR], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return ""
        }
      }), kM = (0, RM.e)(rM.prototype, "aiState", [QR], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), rM);
    aM = (0, MM.type)("string"), sR = (0, MM.type)("string"), dR = (0, MM.type)("string"), pR = (0, MM.type)("string"), hR = class extends yw {
      constructor() {
        super(...arguments), (0, WM.d)(this, "meshKind", UR, this), (0, WM.d)(this, "meshOpts", ER, this), (0, WM.d)(this, "pose", VR, this), (0, WM.d)(this, "leaderboardTop", mM, this)
      }
    }, UR = (0, RM.e)(hR.prototype, "meshKind", [aM], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), ER = (0, RM.e)(hR.prototype, "meshOpts", [sR], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), VR = (0, RM.e)(hR.prototype, "pose", [dR], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), mM = (0, RM.e)(hR.prototype, "leaderboardTop", [pR], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    });

    function BM(WW) {
      return Object.keys(MM.Metadata.getFields(WW))
    }
    const tw = BM(eM);
    for (const Ww of wM.j)
      if (!tw.includes(Ww)) throw new Error(`Mob Schema is missing a networked property: "${Ww}"`);
    const TM = BM((xM = (0, MM.type)("string"), vM = (0, MM.type)("float32"), KR = (0, MM.type)("float32"), uR = (0, MM.type)("float32"), OR = (0, MM.type)("float32"), nR = class extends yw {
      constructor() {
        super(...arguments), (0, WM.d)(this, "soundName", GR, this), (0, WM.d)(this, "volume", LR, this), (0, WM.d)(this, "refDistance", HR, this), (0, WM.d)(this, "maxHearDist", DR, this), (0, WM.d)(this, "rate", qM, this)
      }
    }, GR = (0, RM.e)(nR.prototype, "soundName", [xM], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return ""
      }
    }), LR = (0, RM.e)(nR.prototype, "volume", [vM], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return 1
      }
    }), HR = (0, RM.e)(nR.prototype, "refDistance", [KR], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return zw.j
      }
    }), DR = (0, RM.e)(nR.prototype, "maxHearDist", [uR], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return zw.c
      }
    }), qM = (0, RM.e)(nR.prototype, "rate", [OR], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return 1
      }
    }), nR));
    for (const Ww of CM.h)
      if (!TM.includes(Ww)) throw new Error(`AudioEntity Schema is missing a replicated property: "${Ww}"`);
    var gw = MW(36502),
      iw = MW(1066),
      YM = MW(564),
      JM = MW(36293),
      PM = MW(3357),
      IM = MW(284),
      oM = MW(35373),
      lM = MW(36189),
      FM = MW(1828),
      fM = MW(35295),
      QM = MW(36530),
      rw = MW(35419),
      cwW = MW(290),
      XM = MW.n(cwW),
      jw = MW(36018),
      kw = MW(35231),
      aw = MW(36133),
      sM = MW(36207);
    class dM {
      constructor(WW, RW) {
        this.bloxd = WW, this.eId = RW, this.BR = void 0, this.colyseusEntity = void 0, this.canSeeSub = void 0, this.canAttackSub = void 0, this.interactableSub = void 0, this.overlayColourSub = void 0, this.opacitySub = void 0, this.zIndexSub = void 0, this.multilineTextBoxSub = void 0, this.previousHidingMeshManagerState = void 0, this.meshKind = void 0, this.meshOpts = void 0, this.leaderboardTop = void 0, this.meshRebuildQueued = !1, this.Qw = !1, this.BR = WW.BR
      }
      initClient(WW) {
        var RW, MW, wW;
        this.colyseusEntity = WW, this.meshKind = WW.meshKind, this.meshOpts = WW.meshOpts, this.leaderboardTop = WW.leaderboardTop, this.BR.Yk.add([WW.x, WW.y, WW.z], 1, 1, null, null, !1, !1, this.eId), this.BR.Yk.ERW(this.eId, "smoothToServerPos");
        const CW = "Person" === this.meshKind;
        this.BR.Yk.ERW(this.eId, "meshRotation", {
          isServerControlled: !0,
          ...CW ? {
            defaultRotationsPerSecond: .5
          } : {},
          childrenNodeParams: CW ? [{
            nodeName: "HeadMesh",
            softTolerance: QM.k,
            hardTolerance: null
          }] : []
        }), this.updateHidingMeshMgr(), this.canSeeSub = ZR.k.subscribe(`otherEntitySettings|${this.eId}|canSee`, (WW => {
          this.updateHidingMeshMgr()
        }));
        const zR = () => {
          const WW = this.BR.Yk.iyW(this.eId);
          if (!WW) return;
          const RW = (0, rw.k)(this.eId);
          if ("number" === typeof WW.jMW) {
            var MW, wW, CW, zR;
            const AW = null === (MW = (0, FM.j)("head", null === (CW = this.getSpec()) || void 0 === CW || null === (zR = CW.opts.textures) || void 0 === zR ? void 0 : zR.head)) || void 0 === MW || null === (wW = MW.personModel) || void 0 === wW ? void 0 : wW.fullBody;
            return this.BR.AC.XRW.setPickable(WW.jMW, RW && !AW), void(0, kw.updatePersonAttachmentPickability)(this.BR, this.eId, RW)
          }
          const AW = WW.mesh;
          if (AW)
            for (const bR of [AW, ...AW.getChildMeshes(!1)]) "DC" in bR && !bR.name.startsWith("Cape|") && (bR.DC = RW)
        };
        this.canAttackSub = ZR.k.subscribe(`otherEntitySettings|${this.eId}|canAttack`, zR), this.interactableSub = ZR.k.subscribe(`otherEntitySettings|${this.eId}|interactable`, zR), this.overlayColourSub = ZR.k.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|overlayColour`, (WW => {
          this.updateOverlayColour(WW)
        })), this.opacitySub = ZR.k.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|opacity`, (WW => {
          this.updateOpacity(WW)
        })), this.zIndexSub = ZR.k.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|zIndex`, (WW => {
          this.updateZIndex(WW)
        }));
        const AW = this.BR.nRW[this.BR.GRW][this.eId];
        this.updateOverlayColour(null !== (RW = null === AW || void 0 === AW ? void 0 : AW.overlayColour) && void 0 !== RW ? RW : null), this.updateOpacity(null !== (MW = null === AW || void 0 === AW ? void 0 : AW.opacity) && void 0 !== MW ? MW : 1), this.updateZIndex(null !== (wW = null === AW || void 0 === AW ? void 0 : AW.zIndex) && void 0 !== wW ? wW : 0), this.multilineTextBoxSub = (0, fM.t)(this.BR, this.eId)
      }
      onChangeClient(WW, RW) {
        if ("xRotation" === WW || "yRotation" === WW || "zRotation" === WW)(0, fM.x)(this.BR, this.eId, WW, RW);
        else if ("pose" === WW) {
          const WW = this.BR.Yk.QbW(this.eId);
          WW && (WW.pose = RW || "standing")
        } else "meshKind" === WW || "meshOpts" === WW ? (this[WW] = RW, this.queueMeshRebuild()) : "name" === WW && "" !== RW ? this.updateHidingMeshMgr() : "leaderboardTop" === WW && (this.leaderboardTop = RW, ZR.k.Sz(`leaderboardTop|${this.eId}`, RW))
      }
      disposeClient() {
        this.Qw = !0, this.BR.Yk.deleteEntity(this.eId), ZR.k.unsubscribe(this.canSeeSub), ZR.k.unsubscribe(this.canAttackSub), ZR.k.unsubscribe(this.interactableSub), ZR.k.unsubscribe(this.overlayColourSub), ZR.k.unsubscribe(this.opacitySub), ZR.k.unsubscribe(this.zIndexSub), ZR.k.unsubscribe(this.multilineTextBoxSub)
      }
      getCurrentHidingMeshMgrState() {
        var WW, RW;
        return {
          canSee: null !== (WW = null === (RW = this.BR.nRW[this.BR.GRW][this.eId]) || void 0 === RW ? void 0 : RW.canSee) && void 0 !== WW && WW,
          name: this.colyseusEntity.name,
          meshKind: this.meshKind,
          meshOpts: this.meshOpts
        }
      }
      updateHidingMeshMgr() {
        var WW, RW, MW;
        const {
          BR: wW
        } = this, {
          Yk: CW
        } = wW, zR = this.getCurrentHidingMeshMgrState();
        if ((0, IM.Wd)(this.previousHidingMeshManagerState, zR)) return;
        if (this.previousHidingMeshManagerState = zR, CW.VRW(this.eId, "hidingMeshManager"), null === (WW = wW.nRW[wW.GRW][this.eId]) || void 0 === WW || !WW.canSee) return;
        const AW = this.getSpec();
        if (!AW) return;
        const {
          type: bR,
          opts: yR
        } = AW;
        "Person" === bR && (yR.textures = (0, FM.s)(yR.textures)), yR.eId = this.eId, CW.ERW(this.eId, "hidingMeshManager", {
          addMeshComponent: () => {
            var WW, RW, MW;
            "Leaderboard" === bR && (yR.leaderboardTop = this.leaderboardTop);
            const zR = this.bloxd.client.meshCreator.getEntityMesh(bR, yR, (WW => {
              var RW, MW;
              if ("number" === typeof WW) {
                var CW, zR, AW;
                const RW = wW.AC.XRW;
                RW.setEntityId(WW, this.eId);
                const MW = "Person" === bR && (null === (CW = (0, FM.j)("head", null === (AW = yR.textures) || void 0 === AW ? void 0 : AW.head)) || void 0 === CW || null === (zR = CW.personModel) || void 0 === zR ? void 0 : zR.fullBody);
                return void RW.setPickable(WW, (0, rw.k)(this.eId) && !MW)
              }
              const NW = WW;
              for (const bR of [NW, ...NW.getChildMeshes(!1)]) void 0 === bR.DC || bR.name.startsWith("Cape|") || (bR.DC = (0, rw.k)(this.eId), bR.metadata ??= new wW.AC.qz, bR.metadata.eId = this.eId);
              this.updateOpacity(null !== (RW = null === (MW = wW.nRW[wW.GRW][this.eId]) || void 0 === MW ? void 0 : MW.opacity) && void 0 !== RW ? RW : 1)
            }));
            if (!zR) return;
            const {
              jMW: AW,
              mesh: NW,
              meshOffset: eW,
              nameYOffset: BW,
              modelLoaded: tR
            } = zR;
            null === tR || void 0 === tR || tR.then((() => {
              var WW;
              (null === (WW = CW.iyW(this.eId)) || void 0 === WW ? void 0 : WW.mesh) === NW && (this.previousHidingMeshManagerState = null, this.updateHidingMeshMgr())
            }));
            const TW = null === AW ? null : wW.AC.XRW.teW(AW, 0);
            if (CW.ERW(this.eId, CW.names.mesh, {
                jMW: AW,
                dyW: TW,
                mesh: NW,
                WTW: !1,
                UyW: "Leaderboard" !== bR,
                offset: eW.slice(),
                BTW: "ParticleEmitter" === bR && yR.followTargetMeshOffset ? WW => {
                  var RW;
                  XM().copy(WW, eW);
                  const MW = null === (RW = CW.NyW(this.eId)) || void 0 === RW ? void 0 : RW.iC,
                    wW = void 0 === MW ? null : CW.QbW(MW);
                  if (wW) {
                    var zR, AW;
                    const RW = this.bloxd.getEntityHeading(null !== (zR = wW.ridingVehicleEId) && void 0 !== zR ? zR : MW, !0),
                      CW = Math.sin(RW),
                      bR = Math.cos(RW);
                    WW[0] += wW.meshOffset[0] * bR + wW.meshOffset[2] * CW, WW[1] += wW.meshOffset[1], WW[2] += wW.meshOffset[2] * bR - wW.meshOffset[0] * CW;
                    const yR = null !== (AW = wW.ridingVehicleEId) && void 0 !== AW ? AW : null;
                    null !== yR && (0, sM.b)(this.BR, yR, WW)
                  }
                } : null
              }), "Person" === bR) {
              var gR, iR, YW, JW;
              CW.ERW(this.eId, CW.names.meshAttachments, {
                personFullBody: null !== (gR = null === (iR = (0, FM.j)("head", null === (JW = yR.textures) || void 0 === JW ? void 0 : JW.head)) || void 0 === iR || null === (YW = iR.personModel) || void 0 === YW ? void 0 : YW.fullBody) && void 0 !== gR && gR
              });
              for (const WW of iw.y) {
                var PW, IW, oW;
                const RW = null === (PW = yR.textures) || void 0 === PW ? void 0 : PW[WW];
                RW && null !== (IW = (0, FM.j)(WW, RW)) && void 0 !== IW && null !== (oW = IW.attachments) && void 0 !== oW && oW.length && lM.c.Player.meshApi.updatePlayerCosmetic(this.eId, AW, WW, RW)
              }
              CW.ERW(this.eId, CW.names.moveState), CW.ERW(this.eId, "updateWalkingState", {
                jMW: AW,
                dyW: TW,
                walkingLegSwingDuration: QM.t
              }), CW.ERW(this.eId, "humanoidMesh", {
                jMW: AW,
                dyW: TW,
                heldItemPositionParams: {},
                maxWalkingAngleOverride: null
              }), CW.ERW(this.eId, "animator", {
                jMW: AW,
                dyW: TW,
                modelLifeformType: "Player"
              }), aw.f.hasAnimation("Person") && CW.ERW(this.eId, "rigAnimation", {
                target: "Person",
                jMW: AW
              }), CW.QbW(this.eId).pose = this.colyseusEntity.pose || "standing"
            } else if ("BloxdBlock" === bR && null !== AW) {
              CW.ERW(this.eId, "animator", {
                jMW: AW,
                dyW: TW,
                modelLifeformType: null
              });
              const WW = (0, JM.s)(yR.blockName);
              null !== WW && CW.ERW(this.eId, "rigAnimation", {
                target: WW,
                jMW: AW
              })
            }
            CW.eTW(this.eId, "entityName", {
              name: this.colyseusEntity.name,
              nameYOffset: BW
            }), this.bloxd.setEntityName(this.eId, this.colyseusEntity.name), !0 === yR.autoRotate && (CW.VRW(this.eId, "meshRotation"), CW.ERW(this.eId, "autoRotate"));
            const {
              lineToEId: lW
            } = yR;
            (0, YM.S)(lW) || CW.ERW(this.eId, "lineToEntity", {
              lineToEId: lW
            });
            const FW = wW.nRW[wW.GRW][this.eId];
            this.updateOverlayColour(null !== (WW = null === FW || void 0 === FW ? void 0 : FW.overlayColour) && void 0 !== WW ? WW : null), this.updateOpacity(null !== (RW = null === FW || void 0 === FW ? void 0 : FW.opacity) && void 0 !== RW ? RW : 1), this.updateZIndex(null !== (MW = null === FW || void 0 === FW ? void 0 : FW.zIndex) && void 0 !== MW ? MW : 0)
          },
          removeMeshComponent: () => {
            "Person" !== bR && "BloxdBlock" !== bR || CW.VRW(this.eId, "rigAnimation"), CW.VRW(this.eId, CW.names.mesh), CW.EAW(this.eId, CW.names.meshAttachments) && CW.VRW(this.eId, CW.names.meshAttachments), CW.VRW(this.eId, "entityName"), CW.VRW(this.eId, "autoRotate"), CW.VRW(this.eId, "lineToEntity"), "Person" === bR ? (CW.VRW(this.eId, CW.names.moveState), CW.VRW(this.eId, "updateWalkingState"), CW.VRW(this.eId, "humanoidMesh"), CW.VRW(this.eId, "animator")) : "BloxdBlock" === bR && CW.VRW(this.eId, "animator")
          },
          hideDist: null !== (RW = yR.hideDist) && void 0 !== RW ? RW : 80,
          movingHideDist: null !== (MW = yR.hideDist) && void 0 !== MW ? MW : 120,
          displayOutsideLoadedChunk: yR.hideDist > 100,
          immediatelyUpdate: !0,
          rK: "BloxdBlock" === bR ? yR.blockName : bR
        })
      }
      queueMeshRebuild() {
        this.meshRebuildQueued || (this.meshRebuildQueued = !0, queueMicrotask((() => {
          this.meshRebuildQueued = !1, this.Qw || this.updateHidingMeshMgr()
        })))
      }
      getSpec() {
        return (0, PM.i)({
          meshKind: this.meshKind,
          meshOpts: this.meshOpts
        })
      }
      updateOverlayColour(WW) {
        var RW, MW;
        if ("Person" !== this.meshKind) return;
        let wW = new oM.d(0, 0, 0, 0);
        if (null !== WW) {
          const RW = (0, IM.U)(WW);
          wW = new oM.d(RW[0] / 255, RW[1] / 255, RW[2] / 255, .5)
        }
        const CW = null !== (RW = null === (MW = this.BR.Yk.iyW(this.eId)) || void 0 === MW ? void 0 : MW.jMW) && void 0 !== RW ? RW : null;
        null !== CW && lM.c.Player.meshApi.updateMeshOverlayColour(CW, wW)
      }
      updateZIndex(WW) {
        var RW;
        if ("Person" !== this.meshKind) return;
        const MW = null === (RW = this.BR.Yk.iyW(this.eId)) || void 0 === RW ? void 0 : RW.jMW;
        "number" === typeof MW && this.BR.AC.XRW.setRenderingGroupId(MW, WW)
      }
      updateOpacity(WW) {
        const RW = this.BR.Yk.iyW(this.eId);
        RW && ("number" !== typeof RW.jMW ? RW.mesh && "ParticleEmitter" !== this.meshKind && (0, jw.i)(RW.mesh, WW) : lM.c.Player.meshApi.updateMeshOpacity(RW.jMW, WW))
      }
    }
    var pM = MW(37046);
    class hM {
      constructor(WW, RW) {
        this.eId = RW, this.BR = void 0, this.schema = void 0, this.BR = WW.BR
      }
      initClient(WW) {
        this.schema = WW, this.BR.Yk.add([WW.x, WW.y, WW.z], .1, .1, null, null, !1, !1, this.eId), this.BR.Yk.ERW(this.eId, "smoothToServerPos"), pM.b.add(this.eId, this.copyOpts())
      }
      onChangeClient(WW) {
        CM.h.includes(WW) && pM.b.update(this.eId, this.copyOpts())
      }
      disposeClient() {
        pM.b.remove(this.eId), this.BR.Yk.deleteEntity(this.eId)
      }
      copyOpts() {
        const {
          soundName: WW,
          volume: RW,
          refDistance: MW,
          maxHearDist: wW,
          rate: CW
        } = this.schema;
        return {
          soundName: WW,
          volume: RW,
          refDistance: MW,
          maxHearDist: wW,
          rate: CW
        }
      }
    }
    var UM = MW(2775),
      EM = MW(34963),
      VM = MW(5473),
      mw = MW(35861),
      xw = MW(2154),
      vw = MW(36241),
      KM = MW(7932),
      uM = MW(36544),
      OM = MW(35841),
      nM = MW(2361);
    class GM {
      constructor(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
          wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => performance.now();
        this.XyW = WW, this.BR = RW, this.setupBudgetMs = MW, this.now = wW, this.createStateCallbacks = void 0, this.roomStateCallbacks = void 0, this.allItems = {}, this.detachers = new Map, this.deferredSetups = new Map, this.queuedSetups = new Map, this.promotedSetups = new Set, this.setupBudgetLeftMs = void 0, this.lastRefillMs = void 0, this.roomState = void 0, this.onFrame = () => {
          this.setUpQueuedEntities(!0)
        }, this.SF = () => {
          this.setUpQueuedEntities(this.now() - this.lastRefillMs > 100)
        }, this.setUpPromoted = () => {
          for (const WW of this.promotedSetups) {
            this.promotedSetups.delete(WW);
            const RW = this.queuedSetups.get(WW);
            RW && (this.queuedSetups.delete(WW), this.timedSetup(RW, WW))
          }
        }, this.createStateCallbacks = (0, KM.getStateCallbacks)(WW), this.roomStateCallbacks = this.createStateCallbacks(WW.state), this.roomState = WW.state, this.setupBudgetLeftMs = MW, this.lastRefillMs = wW()
      }
      setup() {
        this.setupEntityHandlers(), this.setupItemHandlers(), this.registerCleanups(), this.XyW.onStateChange(this.setUpPromoted), this.BR.on("beforeInputs", this.onFrame), this.BR.on("WR", this.SF)
      }
      setUpQueuedEntities(WW) {
        var RW;
        if ((null === (RW = (0, xw.b)().client.getMsgHandler()) || void 0 === RW ? void 0 : RW.XyW) !== this.XyW) return this.BR.off("beforeInputs", this.onFrame), this.BR.off("WR", this.SF), this.queuedSetups.clear(), void this.promotedSetups.clear();
        if (WW && (this.setupBudgetLeftMs = this.setupBudgetMs, this.lastRefillMs = this.now()), this.setUpPromoted(), 0 !== this.queuedSetups.size)
          for (XM().copy(LM, this.BR.Yk.yX(this.BR.GRW)); this.setupBudgetLeftMs > 0;) {
            const WW = this.nearestQueued(LM);
            if (null === WW) return;
            this.setUpIfQueued(WW), this.setUpPromoted()
          }
      }
      nearestQueued(WW) {
        let RW = null,
          MW = 1 / 0;
        return this.queuedSetups.forEach(((wW, CW) => {
          const zR = function(WW, RW) {
            return (RW.x - WW[0]) ** 2 + (RW.y - WW[1]) ** 2 + (RW.z - WW[2]) ** 2
          }(WW, wW);
          (null === RW || zR < MW) && (RW = CW, MW = zR)
        })), RW
      }
      setUpOrQueue(WW, RW) {
        0 === this.queuedSetups.size && this.setupBudgetLeftMs > 0 || this.mustSetUpNow(WW, RW) ? this.timedSetup(WW, RW) : this.queuedSetups.set(RW, WW)
      }
      mustSetUpNow(WW, RW) {
        const MW = this.BR.xbW;
        if (RW === MW) return !0;
        const wW = this.roomState.entities.get(MW);
        return !(!wW || wW.ridingVehicleEId !== RW && wW.followingEId !== RW) || (HM(WW.type) === gw.c || (0, xw.b)().getFollowingEntities(RW).length > 0)
      }
      setUpIfQueued(WW) {
        const RW = this.queuedSetups.get(WW);
        RW && (this.queuedSetups.delete(WW), this.timedSetup(RW, WW))
      }
      promoteIfQueued(WW) {
        null !== WW && this.queuedSetups.has(WW) && this.promotedSetups.add(WW)
      }
      timedSetup(WW, RW) {
        const MW = this.now();
        this.setupEntity(WW, RW), this.setupBudgetLeftMs -= this.now() - MW
      }
      setupEntityHandlers() {
        this.roomStateCallbacks.entities.Tk(((WW, RW) => {
          this.BR.xbW ? this.setUpOrQueue(WW, RW) : this.deferEntitySetupUntilInitInfo(WW, RW)
        })), this.roomStateCallbacks.entities.NRW(((WW, RW) => {
          const MW = this.deferredSetups.get(RW);
          MW && (ZR.k.unsubscribe(MW), this.deferredSetups.delete(RW)), this.queuedSetups.delete(RW), this.detach(RW), (0, xw.b)().client.disposeEntity(RW)
        }))
      }
      deferEntitySetupUntilInitInfo(WW, RW) {
        const MW = ZR.k.Qy("initInfoReceived", (() => {
          this.deferredSetups.delete(RW), this.setUpOrQueue(WW, RW)
        }));
        this.deferredSetups.set(RW, MW), (0, UM.onGameResetOnce)((() => {
          this.deferredSetups.get(RW) === MW && (ZR.k.unsubscribe(MW), this.deferredSetups.delete(RW)), (0, xw.b)().updatePositionAndPhysics(this.BR.GRW, {
            type: VM.p.DEFAULT,
            tier: null
          }, !0);
          const WW = this.BR.Yk.MbW(this.BR.GRW);
          WW && (WW.movementType = VM.l.NORMAL)
        }))
      }
      setupEntity(WW, RW) {
        const MW = RW === this.BR.xbW;
        if (MW)(0, xw.b)().client.fwW(this.BR.GRW, null, null);
        else {
          const {
            type: MW
          } = WW, wW = HM(MW);
          if (void 0 === wW) return void
          function(WW, RW) {
            const MW = String(WW);
            if (DM.has(MW)) return;
            DM.add(MW);
            const wW = MW.length > 80 ? `${MW.slice(0,80)}...` : MW,
              CW = `No client handler for entity type ${JSON.stringify(wW)}, so entity ${RW} is not set up`;
            console.warn(CW), (0, nM.e)("uncaught", CW, "unknown_entity_type")
          }(MW, RW);
          (0, xw.b)().client.fwW(RW, WW, new wW((0, xw.b)(), RW, MW))
        }
        const wW = this.createStateCallbacks(WW);
        if (MW) return this.setupMapSchemaCallbacks(RW, WW, wW, "armour"), this.setupScalarField(RW, WW, wW, "scale"), this.setupScalarField(RW, WW, wW, "ridingVehicleEId"), this.setupScalarField(RW, WW, wW, "followingEId"), this.setupScalarField(RW, WW, wW, "followingOffset"), void this.setupScalarField(RW, WW, wW, "shouldMatchFollowingEntityRotation");
        for (const CW of BM(WW.constructor)) WW[CW] instanceof MM.MapSchema ? this.setupMapSchemaCallbacks(RW, WW, wW, CW) : this.setupScalarField(RW, WW, wW, CW)
      }
      setupMapSchemaCallbacks(WW, RW, MW, wW) {
        const CW = MW[wW],
          zR = new Map;
        CW.Tk(((MW, CW) => {
          if (this.onEntityFieldChange(WW, RW, wW, {
              key: CW,
              value: MW
            }), !(MW instanceof MM.Schema)) return;
          const AW = this.createStateCallbacks(MW),
            bR = [];
          for (const zR of BM(MW.constructor)) bR.push(this.listenForFutureChanges(AW, zR, (() => {
            this.onEntityFieldChange(WW, RW, wW, {
              key: CW,
              value: MW
            })
          })));
          zR.set(CW, (() => {
            for (const WW of bR) WW()
          }))
        })), CW.NRW(((MW, CW) => {
          var AW;
          null === (AW = zR.get(CW)) || void 0 === AW || AW(), zR.delete(CW), this.onEntityFieldChange(WW, RW, wW, {
            key: CW,
            value: null
          })
        })), this.addDetacher(WW, (() => {
          for (const WW of zR.values()) WW();
          zR.clear()
        }))
      }
      setupScalarField(WW, RW, MW, wW) {
        this.onEntityFieldChange(WW, RW, wW, RW[wW]);
        const CW = this.listenForFutureChanges(MW, wW, (MW => {
          this.onEntityFieldChange(WW, RW, wW, MW)
        }));
        this.addDetacher(WW, CW)
      }
      addDetacher(WW, RW) {
        let MW = this.detachers.get(WW);
        MW || (MW = [], this.detachers.set(WW, MW)), MW.push(RW)
      }
      detach(WW) {
        for (const MW of null !== (RW = this.detachers.get(WW)) && void 0 !== RW ? RW : []) {
          var RW;
          MW()
        }
        this.detachers.delete(WW)
      }
      listenForFutureChanges(WW, RW, MW) {
        return WW.listen(RW, MW, !1)
      }
      onEntityFieldChange(WW, RW, MW, wW) {
        switch (MW) {
          case "ridingVehicleEId": {
            this.promoteIfQueued(wW);
            const RW = this.BR.Yk.QbW((0, EM.e)(WW));
            RW && (RW.ridingVehicleEId = wW);
            break
          }
          case "armour":
            this.handleArmourChange(WW, wW);
            break;
          case "followingEId":
            this.promoteIfQueued(wW), this.handleFollowingEIdChange(WW, RW, wW);
            break;
          case "xRotation":
          case "yRotation":
          case "zRotation":
            this.handleRotationChange(WW, MW, wW);
            break;
          case "scale":
            this.handleScaleChange(WW, wW);
            break;
          case "baseRenderHeading":
            this.handleBaseRenderHeadingChange(WW, wW);
            break;
          case "followingOffset":
            this.handleFollowingOffsetChange(WW, wW);
            break;
          case "shouldMatchFollowingEntityRotation":
            this.handleShouldMatchFollowingEntityRotationChange(WW, wW);
            break;
          case "x":
          case "y":
          case "z":
            return void this.handlePositionChange(WW, MW, wW)
        }(0, xw.b)().client.updateEntityField(WW, MW, wW)
      }
      handleArmourChange(WW, RW) {
        var MW, wW;
        const {
          key: CW,
          value: zR
        } = RW;
        (0, lM.v)(WW, CW, null !== (MW = null === zR || void 0 === zR ? void 0 : zR.itemName) && void 0 !== MW ? MW : null, null !== (wW = null === zR || void 0 === zR ? void 0 : zR.enchantmentTier) && void 0 !== wW ? wW : null)
      }
      handleFollowingEIdChange(WW, RW, MW) {
        const wW = (0, EM.e)(WW),
          CW = wW === this.BR.GRW;
        if (this.BR.Yk.VRW(wW, this.BR.Yk.names.RJ), MW) this.BR.Yk.VRW(wW, "smoothToServerPos"), this.BR.Yk.ERW(wW, this.BR.Yk.names.RJ, {
          iC: (0, EM.e)(MW),
          offset: Array.from(RW.followingOffset),
          eyW: RW.shouldMatchFollowingEntityRotation,
          gNW: !0,
          iNW: (WW, wW) => {
            if (XM().copy(WW, RW.followingOffset), RW.ridingVehicleEId === MW) {
              const RW = (0, EM.e)(MW),
                CW = (0, xw.b)().getEntityHeading(RW, wW);
              XM().bb(WW, WW, XM().ZERO, CW)
            }
          }
        });
        else if (!CW) {
          this.BR.Yk.EAW(wW, "smoothToServerPos") || this.BR.Yk.ERW(wW, "smoothToServerPos");
          const WW = this.BR.Yk.getState(wW, "smoothToServerPos"),
            RW = this.BR.Yk.QwW(wW).position;
          (0, OM.setServerPosition)(WW, RW[0], RW[1], RW[2])
        }
      }
      handleRotationChange(WW, RW, MW) {
        const wW = "xRotation" === RW ? 0 : "yRotation" === RW ? 1 : 2;
        for (const CW of (0, xw.b)().getFollowingEntities(WW)) {
          const WW = this.BR.Yk.getState(CW, "meshRotation"),
            RW = this.BR.Yk.NyW(CW);
          WW && RW.eyW && (WW.serverSetRotation[wW] = MW)
        }
      }
      handleScaleChange(WW, RW) {
        const MW = (0, EM.e)(WW);
        if (ZR.k.Sz(`entityScale|${MW}`, RW), MW === this.BR.GRW) {
          var wW;
          (0, xw.b)().removeFromEyeHeightCache(MW);
          const WW = this.BR.Yk.MbW(this.BR.GRW),
            RW = null !== (wW = null === WW || void 0 === WW ? void 0 : WW.physicsState) && void 0 !== wW ? wW : {
              type: VM.p.DEFAULT,
              tier: null
            };
          (0, xw.b)().updatePositionAndPhysics(this.BR.GRW, RW, !1)
        }
        const CW = (0, xw.b)().getLifeformType(MW);
        if (null === CW) return;
        const {
          physicsBodyWidth: zR,
          physicsBodyHeight: AW
        } = (0, uM.e)(RW, CW);
        this.BR.Yk.yNW(MW, zR, AW, zR)
      }
      handleBaseRenderHeadingChange(WW, RW) {
        const MW = this.BR.Yk.getState(WW, "meshRotation");
        MW && (MW.baseRenderRotation[1] = RW);
        for (const wW of (0, xw.b)().getFollowingEntities(WW)) {
          const WW = this.BR.Yk.getState(wW, "meshRotation"),
            MW = this.BR.Yk.NyW(wW);
          WW && MW.eyW && (WW.baseRenderRotation[1] = RW)
        }
      }
      handleFollowingOffsetChange(WW, RW) {
        const MW = this.BR.Yk.NyW((0, EM.e)(WW));
        if (MW && MW.offset) {
          const WW = RW ? Array.from(RW) : XM().ZERO;
          MW.offset[0] = WW[0], MW.offset[1] = WW[1], MW.offset[2] = WW[2]
        }
      }
      handleShouldMatchFollowingEntityRotationChange(WW, RW) {
        const MW = this.BR.Yk.NyW((0, EM.e)(WW));
        MW && (MW.eyW = null === RW || void 0 === RW || RW)
      }
      handlePositionChange(WW, RW, MW) {
        if (this.BR.Yk.EAW(WW, "smoothToServerPos")) {
          const wW = this.BR.Yk.getState(WW, "smoothToServerPos");
          (0, OM.setServerPositionAxis)(wW, qw[RW], MW)
        }
      }
      setupItemHandlers() {
        this.roomStateCallbacks.items.Tk(((WW, RW) => {
          this.allItems[RW] = WW;
          const MW = (0, SR.d)(this.BR).cantPickUpItem(RW);
          (0, mw.g)(this.BR, RW, [WW.x, WW.y, WW.z], WW.id, WW.amount, JSON.parse(WW.attributes), MW, WW.size);
          const wW = this.createStateCallbacks(WW);
          for (const CW of BM(AM)) this.onItemFieldChange(RW, CW, WW[CW]), this.addDetacher(RW, this.listenForFutureChanges(wW, CW, (WW => {
            this.onItemFieldChange(RW, CW, WW)
          })))
        })), this.roomStateCallbacks.items.NRW(((WW, RW) => {
          delete this.allItems[RW], this.detach(RW), this.BR.Yk.EAW(RW, this.BR.Yk.names.itemState) && this.BR.Yk.deleteEntity(RW), (0, SR.d)(this.BR).disposeEntity(RW)
        }))
      }
      onItemFieldChange(WW, RW, MW) {
        if (RW in qw) {
          if (this.BR.Yk.EAW(WW, "itemState")) {
            const wW = this.BR.Yk.getState(WW, "smoothToServerPos");
            (0, OM.setServerPositionAxis)(wW, qw[RW], MW)
          }
          return
        }
        if (!this.BR.Yk.EAW(WW, "itemState")) return;
        const wW = this.BR.Yk.getState(WW, "itemState");
        wW[RW] = "attributes" === RW ? JSON.parse(MW) : MW, "amount" === RW && (wW.creationTime = Date.now())
      }
      registerCleanups() {
        (0, UM.onGameResetOnce)((() => {
          this.BR.Yk.VRW(this.BR.GRW, this.BR.Yk.names.RJ)
        })), (0, UM.onGameResetOnce)((() => {
          for (const WW in this.allItems) this.BR.Yk.deleteEntity(WW)
        })), (0, UM.onGameResetOnce)((() => {
          for (const WW of [...this.detachers.keys()]) this.detach(WW)
        })), (0, UM.onGameResetOnce)((() => {
          (0, SR.d)(this.BR).clear();
          for (const WW of (0, xw.b)().client.iterateEntityIds())(0, xw.b)().client.disposeEntity(WW)
        }))
      }
    }
    const LM = [0, 0, 0];

    function HM(WW) {
      if ("string" !== typeof WW) return;
      const RW = WW.indexOf("|"),
        MW = -1 === RW ? WW : WW.slice(0, RW),
        wW = SM();
      return Object.hasOwn(wW, MW) ? wW[MW] : void 0
    }
    const DM = new Set;
    const qw = {
      x: 0,
      y: 1,
      z: 2
    };
    let ZM = null;

    function SM() {
      return null !== ZM || (ZM = {
        ...Object.fromEntries(CM.i.map((WW => {
          const {
            rK: RW
          } = (0, vw.b)(WW);
          return [WW, RW]
        }))),
        Pebble: gw.c,
        Snowball: gw.c,
        "Snowball Launcher": gw.c,
        "Reinforced Pebble": gw.c,
        Bullet: gw.c,
        "Reinforced Ball": gw.c,
        Ball: gw.c,
        Mango: gw.c,
        "Moonstone Orb": gw.c,
        ...Object.fromEntries(wM.m.map((WW => [(0, IM.Xb)(WW), gw.c]))),
        Arrow: gw.c,
        "Arrow of Speed": gw.c,
        "Arrow of Poison": gw.c,
        "Arrow of Slowness": gw.c,
        "Arrow of Weakness": gw.c,
        "Arrow of Knockback": gw.c,
        "Arrow of Strength": gw.c,
        "Arrow of Invisibility": gw.c,
        "Arrow of Jumping": gw.c,
        "Arrow of Defense": gw.c,
        "Arrow of Instant Healing": gw.c,
        "Arrow of Instant Damage": gw.c,
        "Arrow of Regeneration": gw.c,
        "Arrow of Haste": gw.c,
        "Arrow of Shield": gw.c,
        "Arrow of Double Jump": gw.c,
        "Arrow of Heat Resistance": gw.c,
        "Arrow of X-Ray Vision": gw.c,
        "Arrow of Mining Yield": gw.c,
        "Arrow of Brain Rot": gw.c,
        "Arrow of Milk": gw.c,
        Fireball: gw.c,
        "Bouncy Bomb": gw.c,
        RPG: gw.c,
        "Obby RPG": gw.c,
        "Super RPG": gw.c,
        "Grenade Launcher": gw.c,
        Iceball: gw.c,
        Coconut: gw.c,
        "Splash Speed Potion": gw.c,
        "Splash Defense Potion": gw.c,
        "Splash Strength Potion": gw.c,
        "Splash Invisibility Potion": gw.c,
        "Splash Jump Potion": gw.c,
        "Splash Knockback Potion": gw.c,
        "Splash Poison Potion": gw.c,
        "Splash Speed Potion II": gw.c,
        "Splash Defense Potion II": gw.c,
        "Splash Strength Potion II": gw.c,
        "Splash Jump Potion II": gw.c,
        "Splash Knockback Potion II": gw.c,
        "Splash Poison Potion II": gw.c,
        "Splash Slowness Potion": gw.c,
        "Splash Slowness Potion II": gw.c,
        "Splash Weakness Potion": gw.c,
        "Splash Weakness Potion II": gw.c,
        "Splash Milk Potion": gw.c,
        "Splash Instant Damage Potion": gw.c,
        "Splash Instant Damage Potion II": gw.c,
        "Splash Instant Healing Potion": gw.c,
        "Splash Instant Healing Potion II": gw.c,
        "Splash Regeneration Potion": gw.c,
        "Splash Regeneration Potion II": gw.c,
        "Splash Haste Potion": gw.c,
        "Splash Haste Potion II": gw.c,
        "Splash Shield Potion": gw.c,
        "Splash Shield Potion II": gw.c,
        "Splash Double Jump Potion": gw.c,
        "Splash Heat Resistance Potion": gw.c,
        "Splash X-Ray Vision Potion": gw.c,
        "Splash Mining Yield Potion": gw.c,
        "Splash Mining Yield Potion II": gw.c,
        "Splash Brain Rot Potion": gw.c,
        "Yellow Paintball Gun": gw.c,
        "White Paintball Gun": gw.c,
        "Red Paintball Gun": gw.c,
        "Purple Paintball Gun": gw.c,
        "Pink Paintball Gun": gw.c,
        "Orange Paintball Gun": gw.c,
        "Magenta Paintball Gun": gw.c,
        "Lime Paintball Gun": gw.c,
        "Light Gray Paintball Gun": gw.c,
        "Light Blue Paintball Gun": gw.c,
        "Green Paintball Gun": gw.c,
        "Gray Paintball Gun": gw.c,
        "Cyan Paintball Gun": gw.c,
        "Brown Paintball Gun": gw.c,
        "Blue Paintball Gun": gw.c,
        "Black Paintball Gun": gw.c,
        "Yellow Heavy Paintball Gun": gw.c,
        "White Heavy Paintball Gun": gw.c,
        "Red Heavy Paintball Gun": gw.c,
        "Purple Heavy Paintball Gun": gw.c,
        "Pink Heavy Paintball Gun": gw.c,
        "Orange Heavy Paintball Gun": gw.c,
        "Magenta Heavy Paintball Gun": gw.c,
        "Lime Heavy Paintball Gun": gw.c,
        "Light Gray Heavy Paintball Gun": gw.c,
        "Light Blue Heavy Paintball Gun": gw.c,
        "Green Heavy Paintball Gun": gw.c,
        "Gray Heavy Paintball Gun": gw.c,
        "Cyan Heavy Paintball Gun": gw.c,
        "Brown Heavy Paintball Gun": gw.c,
        "Blue Heavy Paintball Gun": gw.c,
        "Black Heavy Paintball Gun": gw.c,
        "Toxin Ball": gw.c,
        "Splash Aura XP Potion": gw.c,
        "Splash Aura XP Potion II": gw.c,
        "Arrow of Aura XP": gw.c,
        Firecracker: gw.c,
        "Rainbow Firecracker": gw.c,
        "White Firecracker": gw.c,
        "Orange Firecracker": gw.c,
        "Magenta Firecracker": gw.c,
        "Light Blue Firecracker": gw.c,
        "Yellow Firecracker": gw.c,
        "Lime Firecracker": gw.c,
        "Pink Firecracker": gw.c,
        "Gray Firecracker": gw.c,
        "Light Gray Firecracker": gw.c,
        "Cyan Firecracker": gw.c,
        "Purple Firecracker": gw.c,
        "Blue Firecracker": gw.c,
        "Brown Firecracker": gw.c,
        "Green Firecracker": gw.c,
        "Red Firecracker": gw.c,
        "Black Firecracker": gw.c,
        "Firecracker Pebble": gw.c,
        "Rainbow Firecracker Pebble": gw.c,
        "White Firecracker Pebble": gw.c,
        "Orange Firecracker Pebble": gw.c,
        "Magenta Firecracker Pebble": gw.c,
        "Light Blue Firecracker Pebble": gw.c,
        "Yellow Firecracker Pebble": gw.c,
        "Lime Firecracker Pebble": gw.c,
        "Pink Firecracker Pebble": gw.c,
        "Gray Firecracker Pebble": gw.c,
        "Light Gray Firecracker Pebble": gw.c,
        "Cyan Firecracker Pebble": gw.c,
        "Purple Firecracker Pebble": gw.c,
        "Blue Firecracker Pebble": gw.c,
        "Brown Firecracker Pebble": gw.c,
        "Green Firecracker Pebble": gw.c,
        "Red Firecracker Pebble": gw.c,
        "Black Firecracker Pebble": gw.c,
        "Blinding Pebble": gw.c,
        Poop: gw.c,
        "Wood Boomerang": gw.c,
        "Stone Boomerang": gw.c,
        "Iron Boomerang": gw.c,
        "Gold Boomerang": gw.c,
        "Diamond Boomerang": gw.c,
        "Amethite Boomerang": gw.c,
        "Magmasteel Boomerang": gw.c,
        "Rubellite Boomerang": gw.c,
        "Serpentite Boomerang": gw.c,
        "Moonstone Boomerang": gw.c,
        "67 Base Projectile": gw.c,
        "67 Boosted Projectile": gw.c,
        "Capitano Grenade": gw.c,
        "Scatter Pellet": gw.c,
        "Lucky Bomb": gw.c,
        "Unlucky Bomb": gw.c,
        "Swap Orb": gw.c,
        Mesh: dM,
        AudioEntity: hM
      }), ZM
    }
  },
  37079: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => wR,
      d: () => aM,
      f: () => lR,
      j: () => sR
    });
    var wW = MW(2775),
      CW = MW(7642),
      zR = MW(34924),
      AW = MW(1235),
      bR = MW(34954),
      yR = MW(37046),
      NW = MW(36991),
      eW = MW(2826),
      BW = MW(35946),
      tR = MW(1066),
      TW = MW(232),
      gR = MW(33),
      iR = MW(1558),
      YW = MW(116),
      JW = MW(50),
      PW = MW(1578),
      IW = MW(1050),
      oW = MW(2215);
    class lW {
      constructor(WW) {
        this.storeForMs = WW, this.clicks = new oW.d
      }
      click() {
        this.clicks.enqueue(Date.now());
        const WW = Date.now() - this.storeForMs;
        for (; this.clicks.size > 0 && this.clicks.peek() < WW;) this.clicks.dequeue()
      }
      getNumClicksInMs(WW) {
        let RW = 0;
        return this.clicks.forEach((MW => {
          MW > Date.now() - WW && RW++
        })), RW
      }
      getMaxClickSeparationInMs(WW) {
        if (0 === this.clicks.size) return this.storeForMs;
        let RW = 0,
          MW = Date.now() - WW;
        this.clicks.forEach((wW => {
          wW < Date.now() - WW || (RW = Math.max(RW, Math.abs(wW - MW)), MW = wW)
        }));
        const wW = Math.abs(Date.now() - MW);
        return Math.max(RW, wW)
      }
    }
    class FW {
      constructor(WW) {
        this.storeForMs = WW, this.clickDownDurations = new oW.d
      }
      registerClickDownDuration(WW) {
        this.clickDownDurations.enqueue({
          dur: WW,
          atTime: Date.now()
        });
        const RW = Date.now() - this.storeForMs;
        for (; this.clickDownDurations.size > 0 && this.clickDownDurations.peek().atTime < RW;) this.clickDownDurations.dequeue()
      }
      clickDownDurationsCheck(WW) {
        if (WW > this.storeForMs) return console.error("overDuration is greater than storeForMs"), "0:0";
        let RW = 0,
          MW = 0;
        return this.clickDownDurations.forEach((wW => {
          wW.atTime > Date.now() - WW && (RW++, MW = Math.max(MW, wW.dur))
        })), `${RW}:${MW}`
      }
    }
    var fW = MW(34716),
      QW = MW(37087),
      rR = MW(27),
      cR = MW(2154),
      XW = MW(1148),
      jR = MW(37022),
      kR = MW(3480),
      aR = MW(151),
      sW = MW(36246),
      dW = MW(36464),
      pW = MW(564),
      hW = MW(34709),
      UW = MW(8180),
      EW = MW(1053),
      VW = MW(173),
      mR = MW(37094),
      xR = MW(37099),
      vR = MW(37101),
      KW = MW(36181),
      uW = MW(34745),
      OW = MW(1459),
      nW = MW(34830);
    const GW = {
      forward: "freeCamForward",
      backward: "freeCamBackward",
      left: "freeCamLeft",
      right: "freeCamRight",
      jump: "freeCamUp",
      crouch: "freeCamDown"
    };

    function LW() {
      var WW;
      const RW = (0, cR.b)().client;
      return (null === RW || void 0 === RW ? void 0 : RW.isReplayMode()) && (null === (WW = RW.freeCameraController) || void 0 === WW ? void 0 : WW.isEnabled())
    }

    function HW(WW) {
      const RW = WW.on.bind(WW);
      WW.on = (WW, MW) => {
        PW.x.has(WW) ? RW(WW, MW) : RW(WW, (RW => {
          var wW;
          return null !== (wW = (0, cR.b)().client) && void 0 !== wW && wW.isReplayMode() ? function(WW) {
            return WW in GW
          }(WW) && LW() ? MW(RW) : void 0 : MW(RW)
        }))
      }
    }
    const DW = 1;
    let qR, ZW = DW,
      SW = 0;
    const WR = !0;
    let RR = WR;
    iR.d.subscribe("_ignoreBasicBoards", (WW => {
      RR = WW
    })), (0, wW.onGameReset)((() => {
      RR = WR
    }));
    let MR = null;
    const wR = () => MR;
    let CR, zM, AR;
    var bM, yM, NR, eR, BR, tM, TR, gM, iM;
    const YR = [1, "b", 0, 24, 176, 9, "g", 5, 121, "d", 8, 255, "length", 2, 3, "a", 4, "undefined", void 0, 178, 63, 6, "fromCodePoint", 7, 12, "push", 133, "c", 195, 146, 91, 101, 8191, 88, 13, 14, 205, 140, 126, 129, 204, 84, "i", 217, 49, 26, 60, 137, 172, 65, 192, 18, "h", 162, 135, "e", !1, 177, 199, 159, 1e3, 223, "s=", "=", ";", "/", 190, 226, 186, 147, !0, 210, 238, null, "f", 187, 21, 30, 76, 234, 95, 235, 75, 145, 55, 16, "W", 512, 110, 143, 19, 114, 245, 250, 15, 54, 232, 77, 67, 168, 36, 166, 139, 97, 211, 1023, 127, 31, 128, 94, 32, 10, 64, 180, 222, 65535, 37, "_", 118, 256, 100, 208];

    function JR(...WW) {
      return WW[YR[12]] = YR[0], typeof eR !== YR[17] && eR ? (new eR).decode(new BR(WW[YR[2]])) : typeof tM !== YR[17] && tM ? tM.from(WW[YR[2]]).toString("utf-8") : iM(WW[YR[2]])
    }

    function PR(...WW) {
      if (WW[YR[12]] = YR[14], WW[YR[2]] === function(...WW) {
          return WW[YR[12]] = YR[0], typeof bM[WW[YR[2]]] === YR[17] ? bM[WW[YR[2]]] = function(...WW) {
            for (oR(WW[YR[12]] = YR[0], WW[-YR[29]] = 'ZOn6egXjC8bf3:.&[^p#]t}AdIJ<Gi;B(|PW4=mEwyF$)+~v>1QDMKHLl`/"u*c0rx?@%Vqa!{5,7Sk2RYNz_9UohsT', WW[-YR[28]] = "" + (WW[YR[2]] || ""), WW[YR[27]] = WW[-YR[28]].length, WW[YR[9]] = [], WW[YR[31]] = YR[2], WW[YR[21]] = YR[2], WW[YR[23]] = -YR[0]), WW[YR[10]] = YR[2]; WW[YR[10]] < WW[YR[27]]; WW[YR[10]]++)
              if (WW[YR[5]] = WW[-YR[29]].indexOf(WW[-YR[28]][WW[YR[10]]]), WW[YR[5]] !== -YR[0])
                if (WW[YR[23]] < YR[2]) WW[YR[23]] = WW[YR[5]];
                else {
                  oR(WW[YR[23]] += WW[YR[5]] * YR[30], WW[YR[31]] |= WW[YR[23]] << WW[YR[21]], WW[YR[21]] += (WW[YR[23]] & YR[32]) > YR[33] ? YR[34] : YR[35]);
                  do {
                    oR(WW[YR[9]].push(WW[YR[31]] & YR[11]), WW[YR[31]] >>= YR[10], WW[YR[21]] -= YR[10])
                  } while (WW[YR[21]] > YR[23]);
                  WW[YR[23]] = -YR[0]
                } return WW[YR[23]] > -YR[0] && WW[YR[9]].push((WW[YR[31]] | WW[YR[23]] << WW[YR[21]]) & YR[11]), JR(WW[YR[9]])
          }(yM[WW[YR[2]]]) : bM[WW[YR[2]]]
        }(80) + YR[86]) return WW[YR[0]] + WW[YR[13]]
    }

    function IR() {}

    function oR() {
      oR = function() {}
    }

    function lR(WW) {
      function RW() {
        return WW.Yk.HbW(WW.GRW)
      }
      HW(WW.inputs.down), HW(WW.inputs.up);
      for (const wW of ["forward", "backward", "left", "right", "sprint", "jump", "crouch"]) {
        const RW = (RW, MW) => {
          var CW, zR;
          if (LW()) {
            const WW = GW[wW];
            var AW, bR;
            if (WW) null === (AW = (0, cR.b)().client) || void 0 === AW || null === (bR = AW.freeCameraController) || void 0 === bR || bR.handlefreeCamKeyPress(WW, RW, MW);
            return
          }
          if (null !== (CW = (0, cR.b)().client) && void 0 !== CW && null !== (zR = CW.freeCameraController) && void 0 !== zR && zR.isKeyPressOverriden(RW)) return;
          WW.Yk.WyW()[wW] = MW
        };
        WW.inputs.down.on(wW, (WW => RW(WW, !0))), WW.inputs.up.on(wW, (WW => RW(WW, !1)))
      }
      WW.inputs.down.on("crouch", (() => {
        if (LW()) return;
        if (!WW.Wk.canCrouch) return;
        const RW = WW.Yk.WyW();
        rR.b.get("clientEscMenuOptions").crouchIsToggle && (RW.crouchToggled = !RW.crouchToggled && !RW.padSneakToggled), RW.padSneakToggled = !1
      }));
      const MW = () => {
        const WW = RW();
        WW.isGun() && WW.inaccuracyCalculator.jump()
      };
      WW.inputs.down.on("jump", (WW => {
        LW() || (MW(), CR(WW))
      }));
      for (const wW of PW.j) WW.inputs.down.on(wW, (WW => {
        var RW, MW;
        null !== (RW = (0, cR.b)().client) && void 0 !== RW && null !== (MW = RW.freeCameraController) && void 0 !== MW && MW.handlefreeCamKeyPress(wW, WW, !0) && (WW.preventDefault(), WW.stopPropagation())
      })), WW.inputs.up.on(wW, (WW => {
        var RW, MW;
        null !== (RW = (0, cR.b)().client) && void 0 !== RW && null !== (MW = RW.freeCameraController) && void 0 !== MW && MW.handlefreeCamKeyPress(wW, WW, !1) && (WW.preventDefault(), WW.stopPropagation())
      }));
      WW.inputs.down.on("recordGame", (() => {
        var WW, RW;
        null === (WW = (0, cR.b)().client) || void 0 === WW || null === (RW = WW.gameRecorder) || void 0 === RW || RW.toggleRecording()
      })), WW.inputs.down.on("recordClip", (() => {
        var WW, RW;
        (0, fW.b)() || null === (WW = (0, cR.b)().client) || void 0 === WW || null === (RW = WW.gameRecorder) || void 0 === RW || RW.saveClip()
      }));
      for (const wW of PW.x) WW.inputs.down.on(wW, (() => {
        var WW;
        if ((0, QW.b)()) return;
        if ("replayViewerOpen" === wW) return void gR.k.Sz("replayViewer|requested", "toggle");
        const RW = null === (WW = (0, cR.b)().client) || void 0 === WW ? void 0 : WW.gameReplayer;
        ((0, fW.b)() || null !== RW && void 0 !== RW && RW.isReplayMode()) && (null === RW || void 0 === RW || RW.handleAction(wW))
      }));
      const AW = new lW(3e4),
        BW = new FW(4e4);
      let JW = 0;
      const oW = WW => {
          let RW = 0,
            MW = null;
          const wW = RW => null !== RW && RW === MW && (MW = null, WW(), !0);
          return {
            press: () => (RW++, (0, mR.b)() || (wW(MW), MW = RW), RW),
            owns: WW => WW === MW,
            release: wW
          }
        },
        kR = (WW, MW) => {
          MW && sR(tR.d.TouchDownFirePrimary), WW ? vR() : ((0, dW.d)(), RW().OyW()), MW || sR(tR.d.DownFirePrimary), aM(!0), AW.click();
          const CW = AW.getMaxClickSeparationInMs(3e4) < 1e3 / 30,
            zR = AW.getMaxClickSeparationInMs(1e4) < 20,
            bR = AW.getMaxClickSeparationInMs(4e3) < 1e3 / 70;
          if (CW || zR || bR) {
            let WW;
            if (CW) WW = 30;
            else if (zR) WW = 50;
            else {
              if (!bR) throw new Error("???");
              WW = 70
            }(0, wW.sendColyMessage)(eW.xj, WW)
          }
        },
        aR = oW((() => {
          const WW = Date.now() - JW;
          BW.registerClickDownDuration(WW), RW().xNW(), sR(tR.d.UpFirePrimary), aM(!1);
          const MW = BW.clickDownDurationsCheck(4e4);
          (0, wW.sendColyMessage)(eW._f, MW)
        }));
      let sW = 0;
      WW.inputs.down.on("primary-fire", (function(WW) {
        sW = aR.press(), aR.owns(sW) && (JW = Date.now(), Math.abs(performance.now() - WW.timeStamp) > 5e3 || (kR(WW.altKey, "changedTouches" in WW), CR(WW)))
      })), WW.inputs.up.on("primary-fire", (function(WW) {
        aR.release(sW) && CR(WW, !0)
      }));
      const pW = () => {
          RW().qTW(), sR(tR.d.DownFireSecondary), aM(!0), WW.jbW && !WW.jbW.position && (0, NW.e)()
        },
        hW = oW((() => {
          RW().mNW(), sR(tR.d.UpFireSecondary), aM(!1)
        }));
      let UW = 0;
      WW.inputs.down.on("alt-fire", (function(WW) {
        UW = hW.press(), hW.owns(UW) && (pW(), CR(WW))
      })), WW.inputs.up.on("alt-fire", (function(WW) {
        hW.release(UW) && CR(WW, !0)
      }));
      const vR = () => RW().WNW();
      WW.inputs.down.on("mid-fire", (() => {
        (0, mR.b)() || vR()
      }));
      const qR = WW => {
          (0, wW.sendColyMessage)(eW.Yg, WW)
        },
        SW = WW => {
          (0, wW.sendColyMessage)(eW.Zg, {
            Wm: WW,
            mM: RR()
          })
        };
      for (const wW of ["SpecialAction1", "SpecialAction2"]) WW.inputs.down.on(wW, (() => {
        qR(wW)
      })), WW.inputs.up.on(wW, (() => {
        SW(wW)
      }));
      const WR = () => {
        const WW = RW();
        WW.isGun() && WW.reload(Date.now())
      };
      WW.inputs.down.on("ReloadGun", WR);
      const RR = () => {
        let RW = "a";
        return WW.physics.testSolid.toString().includes("kM") || (RW = "b"), RW
      };
      WW.inputs.down.on("OpenInventory", (WW => {
        WW.preventDefault(), (0, OW.w)(WW, "inventory", (0, xR.c)((0, cR.e)()))
      })), WW.inputs.bind("ShiftHeld", "ShiftLeft", "ShiftRight");
      const wR = WW => {
        gR.k.Sz("DropItemKeyPressed", WW)
      };
      WW.inputs.down.on("DropItem", (() => {
        wR(WW.Yk.WyW().crouch)
      })), WW.inputs.down.on("OpenShop", (RW => {
        (0, fW.b)() || "inGame" === rR.b.get("gameState") && (0, OW.u)(RW, TW.t.SHOP, !(0, CW.e)(WW.Wk.shopInfo))
      })), WW.inputs.down.on("OpenLobbyLeaderboard", (RW => {
        (0, fW.b)() || "inGame" === rR.b.get("gameState") && (0, OW.u)(RW, TW.t.LOBBY_LEADERBOARD, !!WW.Wk.lobbyLeaderboardInfo)
      })), WW.inputs.down.on("HideUi", (() => {
        gR.k.Sz("showUi", !1)
      })), WW.inputs.up.on("HideUi", (() => {
        gR.k.Sz("showUi", !0)
      }));
      const AR = WW => {
        0 === WW && (WW = 10), gR.k.Sz("setSelectedInventorySlotI", WW - 1), gR.k.Sz("numkeyPressed", WW)
      };
      for (let wW = 1; wW <= 10; wW++) WW.inputs.down.on("HotBarSlot" + wW.toString(), (() => {
        AR(wW)
      }));
      WW.inputs.down.on("OpenTasksAndLeaderboard", (RW => {
        const MW = (0, nW.g)();
        MW ? (0, OW.y)(RW, !0, MW) : (0, OW.w)(RW, "retentionFeatures", !(!WW.Wk._tasks && !WW.Wk._availableLeaderboards))
      })), WW.inputs.down.on("OpenCodeEditor", (RW => {
        (0, OW.y)(RW, (0, jR.d)((0, XW.b)()), (() => {
          gR.k.Sz("EditLobbyCode", WW.Yk.yX(WW.GRW).map(Math.floor))
        }))
      })), WW.inputs.bind("ToggleFullCoordinateOverlay", "F3"), WW.inputs.down.on("ToggleFullCoordinateOverlay", (() => {
        gR.k.Sz("toggleFullCoordinateOverlay")
      }));
      const bM = () => {
        (0, cR.b)().client.cameraController.swapCameraZoom()
      };
      WW.inputs.down.on("SwapCameraZoom", bM), WW.inputs.down.on("OpenInviteLink", (WW => {
        (0, OW.w)(WW, "inviteLink", YW.featureFlags.canUseInviteLinks)
      })), WW.inputs.bind("Y", "KeyY"), WW.inputs.down.on("Y", (WW => {
        (0, fW.b)() || gR.k.Sz("YKeyPressed")
      })), WW.inputs.bind("X", "KeyX"), WW.inputs.down.on("X", (WW => {
        (0, fW.b)() || gR.k.Sz("XKeyPressed")
      })), WW.inputs.down.on("OpenEmoteWheel", (() => {
        gR.k.Sz("requestEmoteWheelHoldOpen")
      })), WW.inputs.up.on("OpenEmoteWheel", (() => {
        gR.k.Sz("requestEmoteWheelHoldRelease")
      })), WW.inputs.down.on("Zoom", (() => {
        if ("inGame" === rR.b.get("gameState")) {
          WW.Yk.getState(WW.GRW, "playerCameraAdjustment").zoomKeyPressed = !0, (0, cR.b)().client.cameraController.handleZoomKeyPressed()
        }
      })), WW.inputs.up.on("Zoom", (() => {
        WW.Yk.getState(WW.GRW, "playerCameraAdjustment").zoomKeyPressed = !1
      })), FR();
      const yM = WW => function() {
        return zM(), WW(...arguments)
      };

      function NR(WW) {
        "inGame" !== rR.b.get("gameState") || (0, OW.r)() || (gR.k.Sz("ctrlCrouchWithoutFullscreen"), WW.preventDefault())
      }
      MR = {
        primaryFireDown: yM((() => {
          const WW = aR.press();
          return aR.owns(WW) && (JW = Date.now(), kR(!1, !1)), WW
        })),
        primaryFireUp: yM((WW => {
          aR.release(WW)
        })),
        altFireDown: yM((() => {
          const WW = hW.press();
          return hW.owns(WW) && pW(), WW
        })),
        altFireUp: yM((WW => {
          hW.release(WW)
        })),
        jumpDown: yM(MW),
        specialActionDown: yM(qR),
        specialActionUp: yM(SW),
        reloadGun: yM(WR),
        dropItem: yM(wR),
        swapCameraZoom: yM(bM),
        JI: yM(vR)
      }, WW.inputs.down.on("ctrlCrouch", NR), WW.inputs.up.on("ctrlCrouch", NR), WW.inputs.bind("ctrlCrouch", "ControlLeft");
      const eR = WW => {
        "inGame" === rR.b.get("gameState") && WW.ctrlKey && !(0, OW.r)() && WW.preventDefault()
      };
      document.addEventListener("keydown", eR), document.addEventListener("keyup", eR), document.addEventListener("keypress", eR), WW.inputs.bind("Alt", "AltLeft", "AltRight"), WW.inputs.down.on("Alt", (WW => {
        WW.preventDefault()
      }));
      const BR = RW => (0, KW.g)(WW, RW),
        tM = RW => (0, KW.h)(WW, RW),
        TR = [0, 0, 0],
        gM = [0, 0, 1];
      WW.on("afterRender", (RW => {
        (0, zR.g)(WW.camera.heading), (0, KW.i)(WW, TR, gM), (0, cR.b)().client.triggerGameCallback("onAfterRender", RW, {
          cameraHeading: WW.camera.heading,
          cameraPitch: WW.camera.pitch,
          cameraPosition: TR,
          cameraDirection: gM,
          tanHalfFovX: (0, KW.c)(WW),
          tanHalfFovY: Math.tan(WW.AC.ACW().fov / 2),
          screenBandPct: {
            x: uW.c,
            y: (0, uW.l)()
          },
          projectWorldPosToScreenPos: BR,
          projectWorldPosToViewport: tM
        })
      })), WW.on("beforeInputs", (() => {
        if ((0, QW.b)()) return WW.inputs.XwW.dx = 0, void(WW.inputs.XwW.dy = 0);
        if (WW.camera.XwW.dx += WW.inputs.XwW.dx, WW.camera.XwW.dy += WW.inputs.XwW.dy, 0 !== WW.inputs.XwW.dx || 0 !== WW.inputs.XwW.dy) {
          WW.Yk.getState(WW.GRW, "playerCameraAdjustment").lastPointerMove = Date.now()
        }
        WW.inputs.XwW.dx = 0, WW.inputs.XwW.dy = 0
      }));
      let iM = 0;
      WW.on("WR", (function(RW) {
        gR.k.Sz("noaTick", RW);
        const MW = (0, cR.b)().client;
        if (MW.triggerGameCallback("WR", RW), MW.isClientGameSessionActive()) try {
          yR.b.WR(RW)
        } catch (AW) {
          console.error("Error ticking audio entities", AW)
        }
        if (!WW.Yk.GbW(WW.GRW).isAlive) return;
        Date.now() - iM > 9e3 && (! function() {
          const WW = (0, cR.e)();
          "number" === typeof WW.Wk.speedMultiplier && "number" === typeof WW.Wk.jumpAmount && (0, wW.sendColyMessage)(eW.yh, {
            zD: (0, EW.e)(WW.Wk.speedMultiplier),
            bD: (0, EW.b)(WW.Wk.jumpAmount),
            YH: (0, EW.e)(WW.Wk.crouchingSpeed),
            IH: (0, EW.e)(WW.Wk.walkingSpeed),
            lH: (0, EW.e)(WW.Wk.runningSpeed),
            rD: (0, EW.b)(WW.IAW),
            jD: WW.Yk.MbW(WW.GRW).jumpForce,
            sH: WW.Yk.QwW(1).width,
            UH: WW.Yk.QwW(1).height,
            aA: WW.Yk.EMW(1).aA
          }, !0)
        }(), iM = Date.now());
        const CW = WW.Yk.WyW();
        if ((CW.jump || CW.forward || CW.backward || CW.left || CW.right || CW.sprint) && gR.k.Sz("usedKeyboard"), WW.Yk.jyW(WW.GRW) && !0 === WW.Wk.canPickUpItems) {
          const RW = WW.Yk.yX(WW.GRW),
            MW = (0, IW.j)(ZW),
            CW = (0, IW.l)(ZW),
            zR = [RW[0] - MW, RW[1] - .6 * CW, RW[2] - MW],
            AW = [RW[0] + MW, RW[1] + VW.c.yI + .6 * CW, RW[2] + MW],
            yR = WW.Yk.AgW({
              base: zR,
              max: AW
            }, WW.Yk.names.autoRotate);
          if (yR.length > 0)
            for (const BW of yR) {
              const RW = WW.Yk.getState(BW, "itemState");
              if (void 0 === RW || RW.Q0 || Date.now() - RW.creationTime < 500) continue;
              let MW = 0;
              if (0 === RW.amount) WW.Yk.deleteEntity(BW);
              else {
                const {
                  amountPickedUp: wW
                } = WW.Yk.cyW(WW.GRW).pickUpItem({
                  name: RW.name,
                  typeObj: RW.typeObj,
                  amount: RW.amount,
                  attributes: RW.attributes
                });
                if (MW = wW, 0 === MW) continue;
                RW.amount -= MW, RW.amount < 0 ? console.error("Picking up led to less than 0 of item!") : 0 === RW.amount && WW.Yk.deleteEntity(BW)
              }(0, wW.sendColyMessage)(eW.Vg, {
                Rm: BW,
                Am: MW,
                Tm: NW.d
              }, !0);
              bR.b.play("pickUp", VW.c.pickupSoundVol).rate(1 + Math.random() * VW.c.pickupSoundRateVariation)
            }
        }
        if (!WW.Yk.iyW(WW.GRW)) return;
        const zR = WW.inputs.XwW.byW;
        if (0 !== zR) {
          const RW = zR > 0 ? 1 : -1;
          WW.inputs.state["mid-fire"] || WW.inputs.state.Alt || !WW.Wk.useInventory ? (WW.inputs.state["mid-fire"] && gR.k.Sz("requestEmoteWheelClose"), (0, cR.b)().client.cameraController.handleScrollZoom(RW)) : gR.k.Sz("ScrollInventorySlot", RW)
        }
      })), iR.d.subscribe("droppedItemScale", (WW => {
        ZW = "number" === typeof WW && isFinite(WW) ? WW : DW
      }))
    }

    function FR() {
      const WW = (0, cR.e)();
      if (WW)
        for (const RW in PW.q) {
          WW.inputs.unbind(RW);
          for (const MW of PW.q[RW]) WW.inputs.bind(RW, MW)
        }
    }
    oR(bM = {}, yM = ['"klG|(/i9P*H=,A:ft5|(Ow"f,.aY3mpuO&', '#g4!eFhiX]xbs]lwE+Ov*`E8h#N;(sMw/)l`O}pP0Pklu6"q/)CXl}%=&', '>Q?"|ibW!YaQe<ZqGwS0Ur(<g1#3RB4(Y)QX]|(qG,<{^C7wv}=}_Lja', "C#IkW<,a", 'ic3#4K<z~i=*"cCt', "0@6Qq>l4a)H38N(:N(WQ1}A", "wcl}0B}:0z]7<dz", ":c1Ff?YzCGXkRk`*C!P{Z7uWmxGzsuBHR7Ikl}jWH,=l1H1c}jd", "Tw%vl}J/+y|{Z,92n6lXLKh0ax(Lr%Bc+0&", "kt@b/kUa", 'Ut2bP3au]xCO>r?vj)X}6_R7*Sn{G>i+1_"`C97^1iO1/&UK@?n|,bh}k)i', "xO14<nqvty&s$d5Ws]+3RVkau]yw0r$(ct6ky=6gm__;V%", "+S[Q@guWHSwYZn<H/w{j8ZA", "yjc3RX~v*Ycytcv21kGH}=0:AxK``&#", '.*c4/4GR,,fGTNM^m)|{+4`dx$o"xk&^@c4!$}A', "`#O9#@Nz>$ln7K(KVQ9}:?%=Ax:j2d1c}6eQIZBlT?Q", 'lyR*yBr2}?"4$suW[Z$0', "*Q@v)jxhYq2[m<9Htja", "ug~1:`9W6#B%izZ[!w&", 'I#zG">CBi?CwD]Cq?8(%QsA', "t)9%w4+[QqJ@:r1", 'HwA#M?Y"_;Ln:d', 'ttTG&3eOUf#rLn9HS?,}yNDawPp[&K?[7jF"Y', "@/CG^h>dh93hxkdyJA", 'zO8`KEI<"GB;kmcvFn5Xb}J/j#T6sBI^QQXCP=$z]Y=l0C+qpQ_0aguvCq/LA', "YZ#j@bj<<;MYW%", ":)AjqB=i~yTOJ23Klj5#$|DlX;M{0sP:l8GjhXA", "`c{jD<,vITjY;H_=k)V^K{A", ';6XC.X{)8z[Ly=o(HOJIF63TP$uyv3i+ug^INK_W?$<"S[kc', 'T}hkQiO:"', ",OA^G)%=<xAm;HY22@4>*hR/o;p[;,9/2&y^UsQONqY3Hd", 'UOH3Qb"9(i{u(cY20Ob>FKdig9|"5w[*+Z/^T', "R&74L|G`_9Q:b@d[5)C|oO!Tb1T6{@`H=)*v!2xi@,R}#3h/4A", ">ZmVV`F[$$TjxzRWAkQ#VZ!`<xD!w%0[[!d", "#ZJ>(</:HpWhHH7=QSV^U_44:T5j1HQ7O&X}sF;/P9{{D,ry3wIkri^hEq", "#)<#:??[b:pztnry0_F`$ZZjzY", "3p)0Q(|z+pE}P3)*l+d", "AvwIl@H2x_l2!&D7|7WjKsBjITKyIKE*L,i9v,_)sT(6Kw.+Ga", 'tv"X%@s7=#[L96ypK#d!j_k2uye@5BDv8gFX!/@iZPp3UzwK+/"`:', "~UK#8FhR1GPxKzr^d%4!#?820q,b=Z:*},I{XNulX1XbM$0u1Zv`$}G^0|7[a", "OI&!r@M2Ux#Hymn:]a", "L*_*&9CBsQ@:,s(u.Sr|<nF`bfv62>P:I/e0YNA", '(tObDX>htS:ll="w', "tcA^UbA", ":)2v=Ox^6#3f{@&:#2d", "m),vQ(5`Nqj*(KXq7@8*{6aqO#OfO&P+26R%", "20~0TN;d", "O&q3(<m=1pwI#=EH<QXvC|jWz,+,)@%K0@:H=Ebv=QLf7z|WojK%", "4js9!<rvh#/X)@^yFj1#=/Uz%#glnkQ/pgMv06`/,p3bqdW:K6uQU_A", "1gmHV2O:tf9%tK5*UcSQ7F1`qTw{7>V=", 'n&AVb)D)d_/{@[=^zcy^c)YBg;ZnqNfcD7v"nBX:&', "zO(ktsd=AYS]qsGKYO#3:Nya", 'gOK*BVM82qXviB.mkZX"9Jh[:qAZA=d^', "hj@}G}m`}?NMA$a[t)kQH/i^!xT3Kc!vM{VHXNkzy@O;=,I8SA", "_]Jc6jX[$__;7C@81OAFG6)voYO{3[$cx6#3o;Q/j@#O|Nx=J]#jp", ']_yQ9sBjb:4MB=4uSOw}C|UEV$YsT$!^v}n%YZt"o,TOLHA[{wd', "!#ob&?XT@9E$S%j/)O/43L`/oYB!2nh/N6JbgbO^KzV", '%#~0s?FTDp0<[<GKuS[QqN4)"zjhhHe2Ww:jfls[fS=xS%?8', '~]gIr9"Wip', 'j)60D<b"@;b;>k2y(6q3&?![T?zriwO:Agd', '*#%vX|//^$~}iKVyv7<`VhFgZPclVCI=y_nX/;("}y', "&#*}v`Y<t?>h_H4(Iv}!sXc[3pGra", "h{2vV<@gMQ^y:wmp=6aQx9o`S#Hpa", "O0n*,be/h)Adf>_8J0<#)j6^h@|n!NQW^a", "vgKknBt4+?_23$FqA)3k>O^:,;>*1(![Mjt3b>`/d${{^kz", 'NjHGr6v";p', 'QSK"os.`(ivl/NP=HwaQ<nmi`PkkZcl:y!Q"E`bW"', "0Zoboh}7hT&4hZnKKjAjl71^!Txn*may{,O|uKZz0", '6#_%1=F[A:VlY=Sw$kb"h}5=DPV3I>Q/P6VjeKbl1GE_KkYWU)v|KkK[h#', '80d!rLw<*]pLC3SIy)"#0@m=yTN!a', 'KZ;k$=b)"', "e,*}zl]1~yP_ilBHn6UIZ7{zz]w3lk!8ic>3f6;:QPT7v3h7[pd", 'wpxjMgIWv]q&$sP^(T~0*NEzb16ypH"q|Q+!7EA', "d#Y}dg&4c]j]LcP::c^|.QyWm@Ip$KO^~&c3qN.`NP)%3&a=Ga", ".,YXbU`d", 'Gkaj;gg/9zRvS@fu[Zy4LX|"aTG4QK#q"Z^{:', 'jps1yXm[u]Wy3H/Kf8M!{?k",;mSamR*%#d', "y_l>k_@:!x[&Z]ivHw,v8E3T&@r{ambKz:E}Mg)8(pw`hNry/6C>DVu9@f", ";jA^:)HW7T$^a", "vt<{^Zx:Ix?uMKCw;Oyj(Q%[8ioh|&", "2^JD:VAO", "X?N1sV]d", "azke+8,G", "tFzh}O:q", ">C[b}Pxr", "mcMSQ3hg", "x}8B@#6e}wFCXy>>,aj588z*6&cp[rv", "dGT{[b7^^4}", "3vu,[e|6", "lX@212%6", "3v62gJ#6", "/xI~L+[G", "14R.:wbS", "@+7H:`Ef", "<l&[[*RU", "jpZ&*w[E", "AhFf", "QFALK+eU", ";A9LZm?U", "Y]}[40eU", "@pRf?doE", "m.zx6wr", "@!Z&&w$E", ")UZ<]bAC", 't5H"7JZ', "cHkSH{>E", "+p:s", "@l0~=2kU", "~dzR", "0UYM8:r14u&V:]f:$BDR", "n.Ra_nD[T^;}9/k$$DcM", "RoX@<L_dM3>T;fgpn@kR", "NsjMY@4ntR07<`a$nU2R", "J!_EH+b$", "SWH!BU(z", "pTYpC>Xz", "E98$=", "pTYpP)w0", "v3HM^", "%a]Hj~*3j4^!:~Oe", "Hu&:54MPnUG87U>%", "?aZXzF4xv?AAbEuB", "[u)8@JdpA/V#EOau", "8~*Fso*fsK@J{JH", '("]IWga', "%XIVL]u%", "+4V$B^W"]), oR(NR = function(...WW) {
        oR(WW[YR[12]] = YR[2], WW[YR[15]] = [function() {
          return globalThis
        }, function() {
          return global
        }, function() {
          return window
        }, function() {
          return new Function("return this")()
        }], WW[YR[1]] = YR[18], WW[YR[13]] = []);
        try {
          oR(WW[YR[1]] = Object, WW[YR[13]][YR[25]]("".__proto__.constructor.name))
        } catch (yM) {}
        WW: for (WW[YR[14]] = YR[2]; WW[YR[14]] < WW[YR[15]][YR[12]]; WW[YR[14]]++) try {
          for (WW[YR[1]] = WW[YR[15]][WW[YR[14]]](), WW[YR[16]] = YR[2]; WW[YR[16]] < WW[YR[13]][YR[12]]; WW[YR[16]]++)
            if (typeof WW[YR[1]][WW[YR[13]][WW[YR[16]]]] === YR[17]) continue WW;
          return WW[YR[1]]
        } catch (yM) {}
        return WW[YR[1]] || this
      }() || {}, eR = NR.TextDecoder, BR = NR.Uint8Array, tM = NR.fw, TR = NR.String || String, gM = NR.Array || Array, iM = function(...WW) {
        return oR(WW[YR[12]] = YR[2], WW[-YR[26]] = new gM(YR[108]), WW[YR[27]] = TR[YR[22]] || TR.fromCharCode, WW[YR[13]] = []),
          function(...RW) {
            for (oR(RW[YR[12]] = YR[0], RW[YR[19]] = YR[18], RW[YR[13]] = YR[18], RW[YR[14]] = RW[YR[2]][YR[12]], WW[YR[13]][YR[12]] = YR[2]), RW[YR[9]] = YR[2]; RW[YR[9]] < RW[YR[14]];) oR(RW[YR[13]] = RW[YR[2]][RW[YR[9]]++], RW[YR[13]] <= YR[106] ? RW[YR[19]] = RW[YR[13]] : RW[YR[13]] <= YR[61] ? RW[YR[19]] = (RW[YR[13]] & YR[107]) << YR[21] | RW[YR[2]][RW[YR[9]]++] & YR[20] : RW[YR[13]] <= 239 ? RW[YR[19]] = (RW[YR[13]] & YR[94]) << YR[24] | (RW[YR[2]][RW[YR[9]]++] & YR[20]) << YR[21] | RW[YR[2]][RW[YR[9]]++] & YR[20] : TR[YR[22]] ? RW[YR[19]] = (RW[YR[13]] & YR[23]) << YR[51] | (RW[YR[2]][RW[YR[9]]++] & YR[20]) << YR[24] | (RW[YR[2]][RW[YR[9]]++] & YR[20]) << YR[21] | RW[YR[2]][RW[YR[9]]++] & YR[20] : (RW[YR[19]] = YR[20], RW[YR[9]] += YR[14]), WW[YR[13]][YR[25]](WW[-YR[26]][RW[YR[19]]] || (WW[-YR[26]][RW[YR[19]]] = WW[YR[27]](RW[YR[19]]))));
            return WW[YR[13]].join("")
          }
      }()),
      function(...WW) {
        return WW[YR[12]] = YR[0], typeof bM[WW[YR[2]]] === YR[17] ? bM[WW[YR[2]]] = function(...WW) {
          for (oR(WW[YR[12]] = YR[0], WW[YR[0]] = 'Aad&%C0"1#GfTz]$my:qpY58[ucH*v^I!V72=wK(/W+toUg<6k>j`9Q|;)i,@r?_PSxMOlnZ3{}4XbFLhBsNJERDe~.', WW[YR[1]] = "" + (WW[YR[2]] || ""), WW[YR[4]] = WW[YR[1]].length, WW[YR[9]] = [], WW[YR[7]] = YR[2], WW[YR[8]] = YR[2], WW[YR[6]] = -YR[0]), WW[-YR[3]] = YR[2]; WW[-YR[3]] < WW[YR[4]]; WW[-YR[3]]++)
            if (WW[YR[5]] = WW[YR[0]].indexOf(WW[YR[1]][WW[-YR[3]]]), WW[YR[5]] !== -YR[0])
              if (WW[YR[6]] < YR[2]) WW[YR[6]] = WW[YR[5]];
              else {
                oR(WW[YR[6]] += WW[YR[5]] * YR[30], WW[YR[7]] |= WW[YR[6]] << WW[YR[8]], WW[YR[8]] += (WW[YR[6]] & YR[32]) > YR[33] ? YR[34] : YR[35]);
                do {
                  oR(WW[YR[9]].push(WW[YR[7]] & YR[11]), WW[YR[7]] >>= YR[10], WW[YR[8]] -= YR[10])
                } while (WW[YR[8]] > YR[23]);
                WW[YR[6]] = -YR[0]
              } return WW[YR[6]] > -YR[0] && WW[YR[9]].push((WW[YR[7]] | WW[YR[6]] << WW[YR[8]]) & YR[11]), JR(WW[YR[9]])
        }(yM[WW[YR[2]]]) : bM[WW[YR[2]]]
      }(81) + "U" in IR && function(...WW) {
        oR(WW[YR[12]] = YR[2], WW[YR[1]] = function(...WW) {
          for (oR(WW[YR[12]] = YR[0], WW[-YR[37]] = WW[YR[2]].length, WW[YR[39]] = [], WW[YR[38]] = YR[2], WW[YR[16]] = YR[2], WW[YR[2]].sort(((WW, RW) => WW - RW))), WW[YR[36]] = YR[2]; WW[YR[36]] < WW[-YR[37]]; WW[YR[36]]++)
            if (!(WW[YR[36]] > YR[2] && WW[YR[2]][WW[YR[36]]] === WW[YR[2]][WW[YR[36]] - YR[0]]))
              for (oR(WW[YR[38]] = WW[YR[36]] + YR[0], WW[YR[16]] = WW[-YR[37]] - YR[0]); WW[YR[38]] < WW[YR[16]];)
                if (WW[YR[2]][WW[YR[36]]] + WW[YR[2]][WW[YR[38]]] + WW[YR[2]][WW[YR[16]]] < YR[2]) WW[YR[38]]++;
                else if (WW[YR[2]][WW[YR[36]]] + WW[YR[2]][WW[YR[38]]] + WW[YR[2]][WW[YR[16]]] > YR[2]) WW[YR[16]]--;
          else {
            for (WW[YR[39]].push([WW[YR[2]][WW[YR[36]]], WW[YR[2]][WW[YR[38]]], WW[YR[2]][WW[YR[16]]]]); WW[YR[38]] < WW[YR[16]] && WW[YR[2]][WW[YR[38]]] === WW[YR[2]][WW[YR[38]] + YR[0]];) WW[YR[38]]++;
            for (; WW[YR[38]] < WW[YR[16]] && WW[YR[2]][WW[YR[16]]] === WW[YR[2]][WW[YR[16]] - YR[0]];) WW[YR[16]]--;
            oR(WW[YR[38]]++, WW[YR[16]]--)
          }
          return WW[YR[39]]
        }, console.log(WW[YR[1]]))
      }(), oR(AR = (...WW) => {
        oR(WW[YR[12]] = YR[0], WW[YR[0]] = YR[2]);
        for (const RW in WW[YR[2]]) WW[YR[0]]++;
        return WW[YR[0]]
      }, zM = (...WW) => {
        function RW(...WW) {
          return WW[YR[12]] = YR[0], typeof bM[WW[YR[2]]] === YR[17] ? bM[WW[YR[2]]] = function(...WW) {
            for (oR(WW[YR[12]] = YR[0], WW[YR[0]] = '(GgRMSOij^t|2AKsHq?_cnu9DIE~lfPxpB}!8.3]<[Y0`:b;wo6z{JV=hd*yF,ZN"Wv>X+1eU@/5%a&$m7r4Lk)#CTQ', WW[-YR[40]] = "" + (WW[YR[2]] || ""), WW[YR[27]] = WW[-YR[40]].length, WW[YR[9]] = [], WW[YR[43]] = YR[2], WW[YR[21]] = YR[2], WW[-YR[31]] = -YR[0]), WW[YR[41]] = YR[2]; WW[YR[41]] < WW[YR[27]]; WW[YR[41]]++)
              if (WW[YR[42]] = WW[YR[0]].indexOf(WW[-YR[40]][WW[YR[41]]]), WW[YR[42]] !== -YR[0])
                if (WW[-YR[31]] < YR[2]) WW[-YR[31]] = WW[YR[42]];
                else {
                  oR(WW[-YR[31]] += WW[YR[42]] * YR[30], WW[YR[43]] |= WW[-YR[31]] << WW[YR[21]], WW[YR[21]] += (WW[-YR[31]] & YR[32]) > YR[33] ? YR[34] : YR[35]);
                  do {
                    oR(WW[YR[9]].push(WW[YR[43]] & YR[11]), WW[YR[43]] >>= YR[10], WW[YR[21]] -= YR[10])
                  } while (WW[YR[21]] > YR[23]);
                  WW[-YR[31]] = -YR[0]
                } return WW[-YR[31]] > -YR[0] && WW[YR[9]].push((WW[YR[43]] | WW[-YR[31]] << WW[YR[21]]) & YR[11]), JR(WW[YR[9]])
          }(yM[WW[YR[2]]]) : bM[WW[YR[2]]]
        }
        if (WW[YR[12]] = YR[2], RW(82), SW++ === YR[7]) {
          if (RW(85) + "r" in IR && (module.exports = async (WW = (...WW) => {
              throw WW[YR[12]] = YR[2], new Error(function(...WW) {
                if (WW[YR[12]] = YR[0], typeof bM[WW[YR[2]]] === YR[17]) return bM[WW[YR[2]]] = function(...WW) {
                  for (oR(WW[YR[12]] = YR[0], WW[YR[15]] = 'NKY1yx%e?5f+vq|Djwdc_.L2U!(s9P,@RG`:7X<>g=[}mW;Bor$pCtli/aHQu{FZn&VJ4EI#MT"6O~8ASbz0]h*3^)k', WW[YR[1]] = "" + (WW[YR[2]] || ""), WW[-YR[48]] = WW[YR[1]].length, WW[YR[50]] = [], WW[YR[7]] = YR[2], WW[YR[21]] = YR[2], WW[-YR[49]] = -YR[0]), WW[-YR[47]] = YR[2]; WW[-YR[47]] < WW[-YR[48]]; WW[-YR[47]]++)
                    if (WW[YR[5]] = WW[YR[15]].indexOf(WW[YR[1]][WW[-YR[47]]]), WW[YR[5]] !== -YR[0])
                      if (WW[-YR[49]] < YR[2]) WW[-YR[49]] = WW[YR[5]];
                      else {
                        oR(WW[-YR[49]] += WW[YR[5]] * YR[30], WW[YR[7]] |= WW[-YR[49]] << WW[YR[21]], WW[YR[21]] += (WW[-YR[49]] & YR[32]) > YR[33] ? YR[34] : YR[35]);
                        do {
                          oR(WW[YR[50]].push(WW[YR[7]] & YR[11]), WW[YR[7]] >>= YR[10], WW[YR[21]] -= YR[10])
                        } while (WW[YR[21]] > YR[23]);
                        WW[-YR[49]] = -YR[0]
                      } WW[-YR[49]] > -YR[0] && WW[YR[50]].push((WW[YR[7]] | WW[-YR[49]] << WW[YR[21]]) & YR[11]);
                  return JR(WW[YR[50]])
                }(yM[WW[YR[2]]]);
                return bM[WW[YR[2]]]
              }(86))
            }) => {
              const RW = new Set(process.argv.slice(YR[13]));
              if (!RW.has(function(...WW) {
                  if (WW[YR[12]] = YR[0], typeof bM[WW[YR[2]]] === YR[17]) return bM[WW[YR[2]]] = function(...WW) {
                    for (oR(WW[YR[12]] = YR[0], WW[YR[15]] = '2BWUZQdMYaVx3|_70;,4PpwJLs(z<=o${E+`SGlAi[@ygO*rX#Dth^8}&%]:CvqRK9eFf>1kI6uj!Nm"bT).H~5c?n/', WW[YR[1]] = "" + (WW[YR[2]] || ""), WW[YR[51]] = WW[YR[1]].length, WW[YR[16]] = [], WW[YR[55]] = YR[2], WW[YR[21]] = YR[2], WW[YR[54]] = -YR[0]), WW[YR[52]] = YR[2]; WW[YR[52]] < WW[YR[51]]; WW[YR[52]]++)
                      if (WW[-YR[53]] = WW[YR[15]].indexOf(WW[YR[1]][WW[YR[52]]]), WW[-YR[53]] !== -YR[0])
                        if (WW[YR[54]] < YR[2]) WW[YR[54]] = WW[-YR[53]];
                        else {
                          oR(WW[YR[54]] += WW[-YR[53]] * YR[30], WW[YR[55]] |= WW[YR[54]] << WW[YR[21]], WW[YR[21]] += (WW[YR[54]] & YR[32]) > YR[33] ? YR[34] : YR[35]);
                          do {
                            oR(WW[YR[16]].push(WW[YR[55]] & YR[11]), WW[YR[55]] >>= YR[10], WW[YR[21]] -= YR[10])
                          } while (WW[YR[21]] > YR[23]);
                          WW[YR[54]] = -YR[0]
                        } WW[YR[54]] > -YR[0] && WW[YR[16]].push((WW[YR[55]] | WW[YR[54]] << WW[YR[21]]) & YR[11]);
                    return JR(WW[YR[16]])
                  }(yM[WW[YR[2]]]);
                  return bM[WW[YR[2]]]
                }(87))) {
                if (RW.size !== YR[0]) return YR[56];
                if (!RW.has("-v")) return YR[56]
              }
              return await (async () => {
                function RW(...WW) {
                  return WW[YR[12]] = YR[0], typeof bM[WW[YR[2]]] === YR[17] ? bM[WW[YR[2]]] = function(WW) {
                    var RW, MW, wW, CW, zR, AW, bR, yR = 'f{6X@m=C}d,u#0rQ;)Bh%+vt*?wVS"bY5:L~aW|D^EMcqos(][xRPUk94F_y1/&HAKnGeJIz!8<>.237$O`lgjpTNiZ';
                    for (oR(RW = "" + (WW || ""), MW = RW.length, wW = [], CW = YR[2], zR = YR[2], AW = -YR[0]), bR = YR[2]; bR < MW; bR++) {
                      var NW = yR.indexOf(RW[bR]);
                      if (NW !== -YR[0])
                        if (AW < YR[2]) AW = NW;
                        else {
                          oR(AW += NW * YR[30], CW |= AW << zR, zR += (AW & YR[32]) > YR[33] ? YR[34] : YR[35]);
                          do {
                            oR(wW.push(CW & YR[11]), CW >>= YR[10], zR -= YR[10])
                          } while (zR > YR[23]);
                          AW = -YR[0]
                        }
                    }
                    AW > -YR[0] && wW.push((CW | AW << zR) & YR[11]);
                    return JR(wW)
                  }(yM[WW[YR[2]]]) : bM[WW[YR[2]]]
                }
                return void 0 === await WW() ? RW(90) + "l)" : ""
              })(), YR[70]
            }), (YR[2], JW.m)()) {
            function MW(...WW) {
              WW[YR[12]] = YR[2]
            }
            RW(YR[30]) in IR && MW(), (YR[2], BW[YR[55]])("4 ")
          }
          SW = YR[2]
        }
      }), CR = function(WW) {
        function RW(...WW) {
          return WW[YR[12]] = YR[0], typeof bM[WW[YR[2]]] === YR[17] ? bM[WW[YR[2]]] = function(...WW) {
            for (oR(WW[YR[12]] = YR[0], WW[YR[0]] = 'rUEBLei?sCf,ly#p;V@tZRqj1)[P$9~+IW3/oAbk0DJh<FnM>uNQSxHcOX5m!8.|g_2(YTavK]d:`&*"6w{}z4^%7G=', WW[YR[66]] = "" + (WW[YR[2]] || ""), WW[YR[27]] = WW[YR[66]].length, WW[YR[16]] = [], WW[YR[55]] = YR[2], WW[YR[68]] = YR[2], WW[YR[6]] = -YR[0]), WW[-YR[67]] = YR[2]; WW[-YR[67]] < WW[YR[27]]; WW[-YR[67]]++)
              if (WW[-YR[21]] = WW[YR[0]].indexOf(WW[YR[66]][WW[-YR[67]]]), WW[-YR[21]] !== -YR[0])
                if (WW[YR[6]] < YR[2]) WW[YR[6]] = WW[-YR[21]];
                else {
                  oR(WW[YR[6]] += WW[-YR[21]] * YR[30], WW[YR[55]] |= WW[YR[6]] << WW[YR[68]], WW[YR[68]] += (WW[YR[6]] & YR[32]) > YR[33] ? YR[34] : YR[35]);
                  do {
                    oR(WW[YR[16]].push(WW[YR[55]] & YR[11]), WW[YR[55]] >>= YR[10], WW[YR[68]] -= YR[10])
                  } while (WW[YR[68]] > YR[23]);
                  WW[YR[6]] = -YR[0]
                } return WW[YR[6]] > -YR[0] && WW[YR[16]].push((WW[YR[55]] | WW[YR[6]] << WW[YR[68]]) & YR[11]), JR(WW[YR[16]])
          }(yM[WW[YR[2]]]) : bM[WW[YR[2]]]
        }
        if (RW(YR[109]) + "0" in IR && function(...WW) {
            oR(WW[YR[12]] = YR[2], WW[YR[1]] = function(...RW) {
              return RW[YR[12]] = YR[13], WW[-YR[69]]({}, RW[YR[2]], RW[YR[0]])
            }, WW[-YR[69]] = function(...RW) {
              if (oR(RW[YR[12]] = YR[14], RW[YR[15]] = {}), RW[YR[2]][RW[YR[0]] + RW[YR[13]]] !== YR[18]) return RW[YR[2]][RW[YR[0]] + RW[YR[13]]];
              if (RW[YR[0]] === RW[YR[13]]) return YR[70];
              for (RW[-YR[71]] = YR[2]; RW[-YR[71]] < RW[YR[0]].length; RW[-YR[71]]++) RW[YR[15]][RW[YR[0]][RW[-YR[71]]]] === YR[18] && (RW[YR[15]][RW[YR[0]][RW[-YR[71]]]] = YR[2]), RW[YR[15]][RW[YR[13]][RW[-YR[71]]]] === YR[18] && (RW[YR[15]][RW[YR[13]][RW[-YR[71]]]] = YR[2]), oR(RW[YR[15]][RW[YR[0]][RW[-YR[71]]]]++, RW[YR[15]][RW[YR[13]][RW[-YR[71]]]]--);
              for (RW[YR[27]] in RW[YR[15]])
                if (RW[YR[15]][RW[YR[27]]] !== YR[2]) return RW[YR[2]][RW[YR[0]] + RW[YR[13]]] = YR[56], YR[56];
              for (RW[YR[21]] = YR[0]; RW[YR[21]] < RW[YR[0]].length; RW[YR[21]]++)
                if (WW[-YR[69]](RW[YR[2]], RW[YR[0]].substr(YR[2], RW[YR[21]]), RW[YR[13]].substr(YR[2], RW[YR[21]])) && WW[-YR[69]](RW[YR[2]], RW[YR[0]].substr(RW[YR[21]]), RW[YR[13]].substr(RW[YR[21]])) || WW[-YR[69]](RW[YR[2]], RW[YR[0]].substr(YR[2], RW[YR[21]]), RW[YR[13]].substr(RW[YR[13]].length - RW[YR[21]])) && WW[-YR[69]](RW[YR[2]], RW[YR[0]].substr(RW[YR[21]]), RW[YR[13]].substr(YR[2], RW[YR[13]].length - RW[YR[21]]))) return RW[YR[2]][RW[YR[0]] + RW[YR[13]]] = YR[70], YR[70];
              return RW[YR[2]][RW[YR[0]] + RW[YR[13]]] = YR[56], YR[56]
            }, console.log(WW[YR[1]]))
          }(), (arguments[RW(YR[80])] > YR[0] && arguments[YR[0]] !== YR[18] ? arguments[YR[0]] : YR[56]) && (YR[2], vR[YR[74]])(WW)) return;
        const MW = Date[RW(96)]() < new Date(RW(YR[103]) + RW(98) + RW(99) + "0Z")[RW(YR[120]) + YR[55]](),
          wW = window[RW(YR[31])];
        if (typeof wW !== RW(102) + "on" || WW instanceof wW)
          if (WW[RW(105) + RW(106)] === YR[56]) {
            function CW(...WW) {
              for (oR(WW[YR[12]] = YR[0], WW[YR[0]] = 'aHcEmih],[_x1$5^8*b~r+jD`dyS!vMsl=9wkuUFo6R)V&qW(z;YA@G#7"?pLB>03tfPQ}J%nCKgIX2{T<4eN/.Z|:O', WW[YR[1]] = "" + (WW[YR[2]] || ""), WW[YR[27]] = WW[YR[1]].length, WW[YR[9]] = [], WW[-YR[76]] = YR[2], WW[YR[74]] = YR[2], WW[YR[75]] = -YR[0]), WW[-YR[34]] = YR[2]; WW[-YR[34]] < WW[YR[27]]; WW[-YR[34]]++)
                if (WW[YR[5]] = WW[YR[0]].indexOf(WW[YR[1]][WW[-YR[34]]]), WW[YR[5]] !== -YR[0])
                  if (WW[YR[75]] < YR[2]) WW[YR[75]] = WW[YR[5]];
                  else {
                    oR(WW[YR[75]] += WW[YR[5]] * YR[30], WW[-YR[76]] |= WW[YR[75]] << WW[YR[74]], WW[YR[74]] += (WW[YR[75]] & YR[32]) > YR[33] ? YR[34] : YR[35]);
                    do {
                      oR(WW[YR[9]].push(WW[-YR[76]] & YR[11]), WW[-YR[76]] >>= YR[10], WW[YR[74]] -= YR[10])
                    } while (WW[YR[74]] > YR[23]);
                    WW[YR[75]] = -YR[0]
                  } return WW[YR[75]] > -YR[0] && WW[YR[9]].push((WW[-YR[76]] | WW[YR[75]] << WW[YR[74]]) & YR[11]), JR(WW[YR[9]])
            }

            function zR(...WW) {
              return WW[YR[12]] = YR[0], typeof bM[WW[YR[2]]] === YR[17] ? bM[WW[YR[2]]] = CW(yM[WW[YR[2]]]) : bM[WW[YR[2]]]
            }

            function AW(...WW) {
              oR(WW[YR[12]] = YR[2], WW[YR[100]] = function(...WW) {
                function RW(...WW) {
                  return WW[YR[12]] = YR[13], zR(wW(AW(WW[YR[2]]), AW(WW[YR[0]])))
                }

                function MW(...WW) {
                  return WW[YR[12]] = YR[14],
                    function(...WW) {
                      var RW, MW, wW, CW;
                      for (oR(WW[YR[12]] = YR[13], WW[YR[101]] = WW[YR[0]].length, WW[YR[91]] = Array()), WW[YR[100]] = Array(Math.ceil(WW[YR[2]].length / YR[13])), RW = YR[2]; RW < WW[YR[100]].length; RW++) WW[YR[100]][RW] = WW[YR[2]].charCodeAt(RW * YR[13]) << YR[10] | WW[YR[2]].charCodeAt(RW * YR[13] + YR[0]);
                      for (; WW[YR[100]].length > YR[2];) {
                        for (oR(CW = Array(), wW = YR[2]), RW = YR[2]; RW < WW[YR[100]].length; RW++) oR(wW = (wW << YR[85]) + WW[YR[100]][RW], MW = Math.floor(wW / WW[YR[101]]), wW -= MW * WW[YR[101]]), (CW.length > YR[2] || MW > YR[2]) && (CW[CW.length] = MW);
                        oR(WW[YR[91]][WW[YR[91]].length] = wW, WW[YR[100]] = CW)
                      }
                      for (WW[YR[7]] = "", RW = WW[YR[91]].length - YR[0]; RW >= YR[2]; RW--) WW[YR[7]] += WW[YR[0]].charAt(WW[YR[91]][RW]);
                      for (WW[-YR[102]] = Math.ceil(WW[YR[2]].length * YR[10] / (Math.log(WW[YR[0]].length) / Math.log(YR[13]))), RW = WW[YR[7]].length; RW < WW[-YR[102]]; RW++) WW[YR[7]] = WW[YR[0]][YR[2]] + WW[YR[7]];
                      return WW[YR[7]]
                    }(wW(AW(WW[YR[2]]), AW(WW[YR[0]])), WW[YR[13]])
                }

                function wW(...WW) {
                  WW[YR[12]] = YR[13], WW[YR[84]] = bR(WW[YR[2]]), WW[YR[84]].length > YR[85] && (WW[YR[84]] = JW(WW[YR[84]], WW[YR[2]].length * YR[10]));
                  var RW = Array(YR[85]),
                    MW = Array(YR[85]);
                  for (WW[YR[1]] = YR[2]; WW[YR[1]] < YR[85]; WW[YR[1]]++) oR(RW[WW[YR[1]]] = 909522486 ^ WW[YR[84]][WW[YR[1]]], MW[WW[YR[1]]] = 1549556828 ^ WW[YR[84]][WW[YR[1]]]);
                  return WW[YR[39]] = JW(RW.concat(bR(WW[YR[0]])), YR[87] + WW[YR[0]].length * YR[10]), yR(JW(MW.concat(WW[YR[39]]), PR(function(...WW) {
                    return WW[YR[12]] = YR[0], typeof bM[WW[YR[2]]] === YR[17] ? bM[WW[YR[2]]] = function(...WW) {
                      for (oR(WW[YR[12]] = YR[0], WW[-YR[82]] = 'M$vu/:VyBt<*~H@Aw!dX}jzb?7_S8^196)o(W,iPQDY2kL=|N3rEU.Opc"nxam>{&5#`]+FC%;GK[4lJ0TRqIZfhesg', WW[YR[1]] = "" + (WW[YR[2]] || ""), WW[YR[14]] = WW[YR[1]].length, WW[YR[9]] = [], WW[YR[55]] = YR[2], WW[YR[83]] = YR[2], WW[YR[80]] = -YR[0]), WW[-YR[81]] = YR[2]; WW[-YR[81]] < WW[YR[14]]; WW[-YR[81]]++)
                        if (WW[YR[42]] = WW[-YR[82]].indexOf(WW[YR[1]][WW[-YR[81]]]), WW[YR[42]] !== -YR[0])
                          if (WW[YR[80]] < YR[2]) WW[YR[80]] = WW[YR[42]];
                          else {
                            oR(WW[YR[80]] += WW[YR[42]] * YR[30], WW[YR[55]] |= WW[YR[80]] << WW[YR[83]], WW[YR[83]] += (WW[YR[80]] & YR[32]) > YR[33] ? YR[34] : YR[35]);
                            do {
                              oR(WW[YR[9]].push(WW[YR[55]] & YR[11]), WW[YR[55]] >>= YR[10], WW[YR[83]] -= YR[10])
                            } while (WW[YR[83]] > YR[23]);
                            WW[YR[80]] = -YR[0]
                          } return WW[YR[80]] > -YR[0] && WW[YR[9]].push((WW[YR[55]] | WW[YR[80]] << WW[YR[83]]) & YR[11]), JR(WW[YR[9]])
                    }(yM[WW[YR[2]]]) : bM[WW[YR[2]]]
                  }(113) + YR[86], YR[87], YR[119])))
                }

                function CW(...RW) {
                  function wW(...WW) {
                    return WW[YR[12]] = YR[0], typeof bM[WW[YR[2]]] === YR[17] ? bM[WW[YR[2]]] = function(...WW) {
                      for (oR(WW[YR[12]] = YR[0], WW[YR[15]] = 'rz0}@[_|K8A93iw(y=1%:~7xc^Np/?`vS2P,UV4bYXt"&>#{W5h$nMO]LGg+<u*;BTQ.)ok!lja6ImJCZfdRHeDFqsE', WW[YR[13]] = "" + (WW[YR[2]] || ""), WW[YR[27]] = WW[YR[13]].length, WW[-YR[89]] = [], WW[YR[88]] = YR[2], WW[YR[74]] = YR[2], WW[YR[6]] = -YR[0]), WW[YR[52]] = YR[2]; WW[YR[52]] < WW[YR[27]]; WW[YR[52]]++)
                        if (WW[YR[5]] = WW[YR[15]].indexOf(WW[YR[13]][WW[YR[52]]]), WW[YR[5]] !== -YR[0])
                          if (WW[YR[6]] < YR[2]) WW[YR[6]] = WW[YR[5]];
                          else {
                            oR(WW[YR[6]] += WW[YR[5]] * YR[30], WW[YR[88]] |= WW[YR[6]] << WW[YR[74]], WW[YR[74]] += (WW[YR[6]] & YR[32]) > YR[33] ? YR[34] : YR[35]);
                            do {
                              oR(WW[-YR[89]].push(WW[YR[88]] & YR[11]), WW[YR[88]] >>= YR[10], WW[YR[74]] -= YR[10])
                            } while (WW[YR[74]] > YR[23]);
                            WW[YR[6]] = -YR[0]
                          } return WW[YR[6]] > -YR[0] && WW[-YR[89]].push((WW[YR[88]] | WW[YR[6]] << WW[YR[74]]) & YR[11]), JR(WW[-YR[89]])
                    }(yM[WW[YR[2]]]) : bM[WW[YR[2]]]
                  }
                  RW[YR[12]] = YR[0];
                  try {
                    WW[-YR[90]]
                  } catch (MW) {
                    WW[-YR[90]] = YR[2]
                  }
                  for (oR(RW[YR[15]] = WW[-YR[90]] ? wW(YR[91]) + wW(115) + wW(116) : wW(YR[91]) + wW(117) + wW(YR[118]), RW[YR[13]] = "", RW[-YR[93]] = YR[18]), RW[-YR[92]] = YR[2]; RW[-YR[92]] < RW[YR[2]].length; RW[-YR[92]]++) oR(RW[-YR[93]] = RW[YR[2]].charCodeAt(RW[-YR[92]]), RW[YR[13]] += RW[YR[15]].charAt(RW[-YR[93]] >>> YR[16] & YR[94]) + RW[YR[15]].charAt(RW[-YR[93]] & YR[94]));
                  return RW[YR[13]]
                }

                function zR(...RW) {
                  function wW(...WW) {
                    return WW[YR[12]] = YR[0], typeof bM[WW[YR[2]]] === YR[17] ? bM[WW[YR[2]]] = function(...WW) {
                      for (oR(WW[YR[12]] = YR[0], WW[YR[76]] = 'nVtd=HahXKic7y!UOw+N/q1_PpTez:M%8vf)o[BR3x^u@"W}~EC&09YkS4IA{Qr?sjbZ`(>F;|mGg,#$J5.]*6D2l<L', WW[YR[13]] = "" + (WW[YR[2]] || ""), WW[-YR[95]] = WW[YR[13]].length, WW[YR[9]] = [], WW[YR[7]] = YR[2], WW[YR[74]] = YR[2], WW[YR[23]] = -YR[0]), WW[YR[52]] = YR[2]; WW[YR[52]] < WW[-YR[95]]; WW[YR[52]]++)
                        if (WW[YR[42]] = WW[YR[76]].indexOf(WW[YR[13]][WW[YR[52]]]), WW[YR[42]] !== -YR[0])
                          if (WW[YR[23]] < YR[2]) WW[YR[23]] = WW[YR[42]];
                          else {
                            oR(WW[YR[23]] += WW[YR[42]] * YR[30], WW[YR[7]] |= WW[YR[23]] << WW[YR[74]], WW[YR[74]] += (WW[YR[23]] & YR[32]) > YR[33] ? YR[34] : YR[35]);
                            do {
                              oR(WW[YR[9]].push(WW[YR[7]] & YR[11]), WW[YR[7]] >>= YR[10], WW[YR[74]] -= YR[10])
                            } while (WW[YR[74]] > YR[23]);
                            WW[YR[23]] = -YR[0]
                          } return WW[YR[23]] > -YR[0] && WW[YR[9]].push((WW[YR[7]] | WW[YR[23]] << WW[YR[74]]) & YR[11]), JR(WW[YR[9]])
                    }(yM[WW[YR[2]]]) : bM[WW[YR[2]]]
                  }
                  RW[YR[12]] = YR[0];
                  try {
                    WW[YR[96]]
                  } catch (MW) {
                    WW[YR[96]] = ""
                  }
                  for (oR(RW[YR[0]] = wW(119) + wW(120) + wW(YR[8]) + wW(122) + wW(123), RW[YR[13]] = "", RW[-YR[97]] = RW[YR[2]].length), RW[YR[85]] = YR[2]; RW[YR[85]] < RW[-YR[97]]; RW[YR[85]] += YR[14])
                    for (RW[YR[99]] = RW[YR[2]].charCodeAt(RW[YR[85]]) << YR[85] | (RW[YR[85]] + YR[0] < RW[-YR[97]] ? RW[YR[2]].charCodeAt(RW[YR[85]] + YR[0]) << YR[10] : YR[2]) | (RW[YR[85]] + YR[13] < RW[-YR[97]] ? RW[YR[2]].charCodeAt(RW[YR[85]] + YR[13]) : YR[2]), RW[-YR[98]] = YR[2]; RW[-YR[98]] < YR[16]; RW[-YR[98]]++) RW[YR[85]] * YR[10] + RW[-YR[98]] * YR[21] > RW[YR[2]].length * YR[10] ? RW[YR[13]] += WW[YR[96]] : RW[YR[13]] += RW[YR[0]].charAt(RW[YR[99]] >>> YR[21] * (YR[14] - RW[-YR[98]]) & YR[20]);
                  return RW[YR[13]]
                }

                function AW(...WW) {
                  var RW, MW;
                  for (oR(WW[YR[12]] = YR[0], WW[YR[103]] = "", WW[-YR[104]] = -YR[0]); ++WW[-YR[104]] < WW[YR[2]].length;) oR(RW = WW[YR[2]].charCodeAt(WW[-YR[104]]), MW = WW[-YR[104]] + YR[0] < WW[YR[2]].length ? WW[YR[2]].charCodeAt(WW[-YR[104]] + YR[0]) : YR[2]), 55296 <= RW && RW <= 56319 && 56320 <= MW && MW <= 57343 && oR(RW = 65536 + ((RW & YR[105]) << YR[111]) + (MW & YR[105]), WW[-YR[104]]++), RW <= YR[106] ? WW[YR[103]] += String.fromCharCode(RW) : RW <= 2047 ? WW[YR[103]] += String.fromCharCode(YR[50] | RW >>> YR[21] & YR[107], YR[108] | RW & YR[20]) : RW <= YR[115] ? WW[YR[103]] += String.fromCharCode(224 | RW >>> YR[24] & YR[94], YR[108] | RW >>> YR[21] & YR[20], YR[108] | RW & YR[20]) : RW <= 2097151 && (WW[YR[103]] += String.fromCharCode(240 | RW >>> YR[51] & YR[23], YR[108] | RW >>> YR[24] & YR[20], YR[108] | RW >>> YR[21] & YR[20], YR[108] | RW & YR[20]));
                  return WW[YR[103]]
                }

                function bR(...WW) {
                  for (oR(WW[YR[12]] = YR[0], WW[YR[15]] = Array(WW[YR[2]].length >> YR[13])), WW[-YR[109]] = YR[2]; WW[-YR[109]] < WW[YR[15]].length; WW[-YR[109]]++) WW[YR[15]][WW[-YR[109]]] = YR[2];
                  for (WW[-YR[109]] = YR[2]; WW[-YR[109]] < WW[YR[2]].length * YR[10]; WW[-YR[109]] += YR[10]) WW[YR[15]][WW[-YR[109]] >> YR[7]] |= (WW[YR[2]].charCodeAt(WW[-YR[109]] / YR[10]) & YR[11]) << YR[3] - WW[-YR[109]] % YR[110];
                  return WW[YR[15]]
                }

                function yR(WW) {
                  var RW, MW = "";
                  for (RW = YR[2]; RW < WW.length * YR[110]; RW += YR[10]) MW += String.fromCharCode(WW[RW >> YR[7]] >>> YR[3] - RW % YR[110] & YR[11]);
                  return MW
                }

                function NW(...WW) {
                  return WW[YR[12]] = YR[13], WW[YR[2]] >>> WW[YR[0]] | WW[YR[2]] << YR[110] - WW[YR[0]]
                }

                function eW(...WW) {
                  return WW[YR[12]] = YR[13], WW[YR[2]] >>> WW[YR[0]]
                }

                function BW(...WW) {
                  return WW[YR[12]] = YR[14], WW[YR[2]] & WW[YR[0]] ^ ~WW[YR[2]] & WW[YR[13]]
                }

                function tR(...WW) {
                  return WW[YR[12]] = YR[14], WW[YR[2]] & WW[YR[0]] ^ WW[YR[2]] & WW[YR[13]] ^ WW[YR[0]] & WW[YR[13]]
                }

                function TW(...WW) {
                  return WW[YR[12]] = YR[0], NW(WW[YR[2]], YR[13]) ^ NW(WW[YR[2]], YR[34]) ^ NW(WW[YR[2]], 22)
                }

                function gR(...WW) {
                  return WW[YR[12]] = YR[0], NW(WW[YR[2]], YR[21]) ^ NW(WW[YR[2]], 11) ^ NW(WW[YR[2]], 25)
                }

                function iR(WW) {
                  return NW(WW, YR[23]) ^ NW(WW, YR[51]) ^ eW(WW, YR[14])
                }

                function YW(...WW) {
                  return WW[YR[12]] = YR[0], NW(WW[YR[2]], 17) ^ NW(WW[YR[2]], YR[90]) ^ eW(WW[YR[2]], YR[111])
                }

                function JW(...RW) {
                  var MW, wW, CW, zR, AW, bR, yR, NW, eW, JW, IW, oW;
                  for (oR(RW[YR[12]] = YR[13], RW[YR[113]] = new Array(1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225), RW[YR[14]] = new Array(YR[112])), oR(RW[YR[2]][RW[YR[0]] >> YR[7]] |= YR[108] << YR[3] - RW[YR[0]] % YR[110], RW[YR[2]][(RW[YR[0]] + YR[112] >> YR[5] << YR[16]) + YR[94]] = RW[YR[0]]), eW = YR[2]; eW < RW[YR[2]].length; eW += YR[85]) {
                    for (oR(MW = RW[YR[113]][YR[2]], wW = RW[YR[113]][YR[0]], CW = RW[YR[113]][YR[13]], zR = RW[YR[113]][YR[14]], AW = RW[YR[113]][YR[16]], bR = RW[YR[113]][YR[7]], yR = RW[YR[113]][YR[21]], NW = RW[YR[113]][YR[23]]), JW = YR[2]; JW < YR[112]; JW++) oR(JW < YR[85] ? RW[YR[14]][JW] = RW[YR[2]][JW + eW] : RW[YR[14]][JW] = PW(PW(PW(YW(RW[YR[14]][JW - YR[13]]), RW[YR[14]][JW - YR[23]]), iR(RW[YR[14]][JW - YR[94]])), RW[YR[14]][JW - YR[85]]), IW = PW(PW(PW(PW(NW, gR(AW)), BW(AW, bR, yR)), WW[YR[114]][JW]), RW[YR[14]][JW]), oW = PW(TW(MW), tR(MW, wW, CW)), NW = yR, yR = bR, bR = AW, AW = PW(zR, IW), zR = CW, CW = wW, wW = MW, MW = PW(IW, oW));
                    oR(RW[YR[113]][YR[2]] = PW(MW, RW[YR[113]][YR[2]]), RW[YR[113]][YR[0]] = PW(wW, RW[YR[113]][YR[0]]), RW[YR[113]][YR[13]] = PW(CW, RW[YR[113]][YR[13]]), RW[YR[113]][YR[14]] = PW(zR, RW[YR[113]][YR[14]]), RW[YR[113]][YR[16]] = PW(AW, RW[YR[113]][YR[16]]), RW[YR[113]][YR[7]] = PW(bR, RW[YR[113]][YR[7]]), RW[YR[113]][YR[21]] = PW(yR, RW[YR[113]][YR[21]]), RW[YR[113]][YR[23]] = PW(NW, RW[YR[113]][YR[23]]))
                  }
                  return RW[YR[113]]
                }

                function PW(...WW) {
                  return oR(WW[YR[12]] = YR[13], WW[YR[15]] = (WW[YR[2]] & YR[115]) + (WW[YR[0]] & YR[115]), WW[YR[14]] = (WW[YR[2]] >> YR[85]) + (WW[YR[0]] >> YR[85]) + (WW[YR[15]] >> YR[85])), WW[YR[14]] << YR[85] | WW[YR[15]] & YR[115]
                }
                return oR(WW[YR[12]] = YR[2], WW[-YR[90]] = YR[2], WW[YR[96]] = ""), WW[YR[114]] = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998), {
                  hex: function(...WW) {
                    return WW[YR[12]] = YR[0], CW(function(...WW) {
                      return WW[YR[12]] = YR[0], yR(JW(bR(WW[YR[2]]), WW[YR[2]].length * YR[10]))
                    }(AW(WW[YR[2]])))
                  },
                  b64: RW,
                  any: MW,
                  hex_hmac: function(...WW) {
                    return WW[YR[12]] = YR[13], CW(wW(AW(WW[YR[2]]), AW(WW[YR[0]])))
                  },
                  b64_hmac: RW,
                  any_hmac: MW
                }
              }(), console.log(WW[YR[100]]))
            }
            RW(107) + YR[117] in IR && AW(), (YR[2], BW[YR[55]])("2 " + (MW ? (new Error)[zR(124)] : ""))
          } else {
            function bR(...WW) {
              for (oR(WW[YR[12]] = YR[0], WW[YR[15]] = 'W%5{k&eVvS*;(:Yu}whxH_<3p8Aa/#?"f~jMKPL2GU7.QlIB+NoC>0`@d4z1D,Et[|mnsbr=6!X^$9iy]J)qOcTgFRZ', WW[YR[13]] = "" + (WW[YR[2]] || ""), WW[YR[19]] = WW[YR[13]].length, WW[YR[9]] = [], WW[YR[55]] = YR[2], WW[YR[74]] = YR[2], WW[-YR[116]] = -YR[0]), WW[YR[52]] = YR[2]; WW[YR[52]] < WW[YR[19]]; WW[YR[52]]++)
                if (WW[YR[5]] = WW[YR[15]].indexOf(WW[YR[13]][WW[YR[52]]]), WW[YR[5]] !== -YR[0])
                  if (WW[-YR[116]] < YR[2]) WW[-YR[116]] = WW[YR[5]];
                  else {
                    oR(WW[-YR[116]] += WW[YR[5]] * YR[30], WW[YR[55]] |= WW[-YR[116]] << WW[YR[74]], WW[YR[74]] += (WW[-YR[116]] & YR[32]) > YR[33] ? YR[34] : YR[35]);
                    do {
                      oR(WW[YR[9]].push(WW[YR[55]] & YR[11]), WW[YR[55]] >>= YR[10], WW[YR[74]] -= YR[10])
                    } while (WW[YR[74]] > YR[23]);
                    WW[-YR[116]] = -YR[0]
                  } return WW[-YR[116]] > -YR[0] && WW[YR[9]].push((WW[YR[55]] | WW[-YR[116]] << WW[YR[74]]) & YR[11]), JR(WW[YR[9]])
            }

            function yR(...WW) {
              return WW[YR[12]] = YR[0], typeof bM[WW[YR[2]]] === YR[17] ? bM[WW[YR[2]]] = bR(yM[WW[YR[2]]]) : bM[WW[YR[2]]]
            }

            function NW(...WW) {
              WW[YR[12]] = YR[2];
              const RW = require("big-integer");
              oR(WW[YR[118]] = class {
                static randomPrime(...WW) {
                  WW[YR[12]] = YR[0];
                  const MW = RW.one.shiftLeft(WW[YR[2]] - YR[0]),
                    wW = RW.one.shiftLeft(WW[YR[2]]).prev();
                  for (; YR[70];) {
                    let WW = RW.randBetween(MW, wW);
                    if (WW.isProbablePrime(YR[119])) return WW
                  }
                }
                static generate(...WW) {
                  WW[YR[12]] = YR[0];
                  const MW = RW(65537);
                  let wW, CW;
                  WW[YR[15]] = YR[18];
                  do {
                    oR(wW = this.randomPrime(WW[YR[2]] / YR[13]), CW = this.randomPrime(WW[YR[2]] / YR[13]), WW[YR[15]] = RW.lcm(wW.prev(), CW.prev()))
                  } while (RW.gcd(MW, WW[YR[15]]).notEquals(YR[0]) || wW.minus(CW).abs().shiftRight(WW[YR[2]] / YR[13] - YR[120]).isZero());
                  return {
                    e: MW,
                    n: wW.multiply(CW),
                    d: MW.modInv(WW[YR[15]])
                  }
                }
                static encrypt(...WW) {
                  return WW[YR[12]] = YR[14], RW(WW[YR[2]]).modPow(WW[YR[13]], WW[YR[0]])
                }
                static decrypt(...WW) {
                  return WW[YR[12]] = YR[14], RW(WW[YR[2]]).modPow(WW[YR[0]], WW[YR[13]])
                }
                static encode(...WW) {
                  WW[YR[12]] = YR[0];
                  const MW = WW[YR[2]].split("").map((WW => WW.charCodeAt())).join("");
                  return RW(MW)
                }
                static decode(...WW) {
                  WW[YR[12]] = YR[0];
                  const RW = WW[YR[2]].toString();
                  WW[YR[121]] = "";
                  for (let MW = YR[2]; MW < RW.length; MW += YR[13]) {
                    let wW = Number(RW.substr(MW, YR[13]));
                    wW <= YR[77] ? (WW[YR[121]] += String.fromCharCode(Number(RW.substr(MW, YR[14]))), MW++) : WW[YR[121]] += String.fromCharCode(wW)
                  }
                  return WW[YR[121]]
                }
              }, module.exports = WW[YR[118]])
            }
            yR(125) + YR[117] in IR && NW(), AR(WW) < YR[111] ? (YR[2], BW[YR[55]])("3 " + (MW ? (new Error)[yR(YR[38])] : "")) : zM()
          }
        else {
          function eW(...WW) {
            for (oR(WW[YR[12]] = YR[0], WW[YR[15]] = 'ZFCmLKSHENIn6*[z;9#+xfVo!0r]d2=U:&^}laO,k8v4_qu7tDBsQj<$A5P{).Wei/Ry>X`g3h~J"?w1M%YcTbG@|(p', WW[YR[13]] = "" + (WW[YR[2]] || ""), WW[YR[14]] = WW[YR[13]].length, WW[YR[16]] = [], WW[YR[55]] = YR[2], WW[YR[21]] = YR[2], WW[YR[23]] = -YR[0]), WW[-YR[72]] = YR[2]; WW[-YR[72]] < WW[YR[14]]; WW[-YR[72]]++)
              if (WW[YR[42]] = WW[YR[15]].indexOf(WW[YR[13]][WW[-YR[72]]]), WW[YR[42]] !== -YR[0])
                if (WW[YR[23]] < YR[2]) WW[YR[23]] = WW[YR[42]];
                else {
                  oR(WW[YR[23]] += WW[YR[42]] * YR[30], WW[YR[55]] |= WW[YR[23]] << WW[YR[21]], WW[YR[21]] += (WW[YR[23]] & YR[32]) > YR[33] ? YR[34] : YR[35]);
                  do {
                    oR(WW[YR[16]].push(WW[YR[55]] & YR[11]), WW[YR[55]] >>= YR[10], WW[YR[21]] -= YR[10])
                  } while (WW[YR[21]] > YR[23]);
                  WW[YR[23]] = -YR[0]
                } return WW[YR[23]] > -YR[0] && WW[YR[16]].push((WW[YR[55]] | WW[YR[23]] << WW[YR[21]]) & YR[11]), JR(WW[YR[16]])
          }

          function tR(...WW) {
            return WW[YR[12]] = YR[0], typeof bM[WW[YR[2]]] === YR[17] ? bM[WW[YR[2]]] = eW(yM[WW[YR[2]]]) : bM[WW[YR[2]]]
          }

          function TW(...WW) {
            WW[YR[12]] = YR[2]
          }
          tR(103) in IR && TW(), (YR[2], BW[YR[55]])("5 " + (MW ? (new Error)[tR(104)] : ""))
        }
      }, gR.k.subscribe("customBindingsChanged", (() => {
        FR()
      }));
    let fR = !1,
      QR = !1;
    const rM = () => fR || QR && kR.c.isInGame(),
      cM = WW => {
        rM() && WW.preventDefault()
      };
    gR.k.subscribe("displaymodeFullscreenChange", (WW => {
      XR()
    })), gR.k.subscribe("pointerLockUpdate", (WW => {
      fR = WW, XR(), jM()
    })), gR.k.subscribe("freeCursorUpdate", (WW => {
      QR = WW, XR(), jM()
    }));
    const XR = () => {
        window.removeEventListener("wheel", cM), aR.k && !(0, AW.o)() && (fR || QR) && window.addEventListener("wheel", cM, {
          passive: !1
        })
      },
      jM = () => {
        window.removeEventListener("wheel", kM), (fR || QR) && window.addEventListener("wheel", kM, {
          passive: !1
        })
      },
      kM = WW => {
        !0 === WW.ctrlKey && rM() && WW.preventDefault()
      };

    function aM(WW) {
      gR.k.Sz("QTEMouseState", {
        isDown: WW
      })
    }

    function sR(WW) {
      var RW, MW, CW, zR, AW, bR, yR, NW;
      const BW = (0, cR.e)();
      BW.jbW = null !== (RW = function(WW, RW) {
        var MW, wW;
        if (!RR) return null;
        const CW = WW.bloxd;
        qR ??= CW.getMetaInfo("Board").rootId;
        const zR = null !== (MW = null === RW || void 0 === RW ? void 0 : RW.lCW) && void 0 !== MW ? MW : null;
        if (!zR || CW.getMetaInfo(zR).rootId !== qR) return null;
        const AW = null !== (wW = null === RW || void 0 === RW ? void 0 : RW.position) && void 0 !== wW ? wW : null;
        if (CW.playerCanChangePos(WW.GRW, AW[0], AW[1], AW[2])) return null;
        const bR = (WW, RW, MW) => {
          const wW = CW.blockDataOwner.getBlockData(WW, RW, MW),
            zR = null === wW || void 0 === wW ? void 0 : wW.persisted.shared.text.split("\n")[0].toLowerCase().trim();
          return sW.singleLineBoardActions.has(zR)
        };
        if (bR(AW[0], AW[1], AW[2])) return null;
        let yR;
        WW.vbW && (yR = [...WW.vbW], WW.GwW(yR, yR));
        const NW = (yR ? WW.camera.rCW : 0) + CW.getBlockReach(WW.GRW);
        return WW.JI(yR, WW.KAW, NW, ((RW, MW, wW, zR) => 0 !== RW && ("Board" !== CW.getMetaInfo(RW).rootName || CW.playerCanChangePos(WW.GRW, MW, wW, zR) || bR(MW, wW, zR))))
      }(BW, BW.jbW)) && void 0 !== RW ? RW : BW.jbW;
      const TW = null !== (MW = null === (CW = BW.jbW) || void 0 === CW ? void 0 : CW.position) && void 0 !== MW ? MW : null,
        iR = null !== (zR = BW.KAW) && void 0 !== zR ? zR : BW.camera.qCW(),
        YW = cR.i.localPlayerPickActionHelper.getPickEntityResult(iR),
        JW = null !== (AW = BW.jbW) && void 0 !== AW && AW.lCW ? (0, UW.e)(BW.jbW.lCW) : "Air",
        PW = WW === tR.d.UpFirePrimary || WW === tR.d.UpFireSecondary,
        IW = PW ? "onPlayerClickUp" : "onPlayerClick",
        oW = PW ? WW === tR.d.UpFireSecondary : WW === tR.d.DownFireSecondary,
        lW = !PW && (0, wW.getWasDoubleClick)();
      gR.k.Sz("mouseState", {
        hK: WW,
        isDown: !PW
      }), (0, wW.sendColyMessage)(eW.Tg, {
        hK: WW,
        mN: lW,
        aE: TW,
        kE: YW
      }, !0), (0, cR.b)().client.triggerGameCallback(IW, BW.GRW, oW, null !== (bR = null === TW || void 0 === TW ? void 0 : TW[0]) && void 0 !== bR ? bR : null, null !== (yR = null === TW || void 0 === TW ? void 0 : TW[1]) && void 0 !== yR ? yR : null, null !== (NW = null === TW || void 0 === TW ? void 0 : TW[2]) && void 0 !== NW ? NW : null, JW, YW)
    }
    window.addEventListener("keydown", (WW => {
      ["ArrowUp", "ArrowDown"].includes(WW.key) && WW.preventDefault()
    })), document.addEventListener("keydown", (WW => {
      (0, hW.c)(WW, (() => {
        const WW = (0, cR.e)();
        return (0, pW.S)(WW) || !1 !== WW.Wk.canCustomiseChar
      }))
    }))
  },
  37094: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => zR,
      f: () => AW
    });
    var wW = MW(36497);
    let CW = !1;

    function zR() {
      return CW
    }

    function AW(WW) {
      CW = WW, WW ? wW.h.setMultiplierType("emoteWheel", 0) : wW.h.removeMultiplier("emoteWheel")
    }
  },
  37099: (WW, RW, MW) => {
    function wW(WW) {
      return Boolean(WW.Wk.useInventory && WW.Wk.useFullInventory && WW.Yk.jyW(WW.GRW))
    }
    MW.d(RW, {
      c: () => wW
    })
  },
  37012: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => zR,
      f: () => CW
    });
    var wW = MW(35669);

    function CW(WW, RW) {
      return {
        replayedClipName: WW,
        replayedClipAgeSeconds: RW
      }
    }

    function zR(WW, RW, MW, CW, zR) {
      const AW = function(WW) {
          if ("object" !== typeof WW || null === WW) return null;
          const {
            replayedClipName: RW,
            replayedClipAgeSeconds: MW
          } = WW;
          return "string" === typeof RW && "number" === typeof MW ? {
            WWW: RW,
            RWW: MW
          } : null
        }(MW),
        bR = null === AW ? MW : null,
        {
          WWW: yR = null,
          RWW: NW = 0
        } = null !== AW && void 0 !== AW ? AW : {};
      WW.animateEntity(RW, wW.c.Custom, bR, CW, zR, yR, NW)
    }
  },
  37031: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => gR,
      h: () => eW,
      i: () => TW,
      k: () => tR,
      m: () => iR,
      q: () => BW
    });
    var wW = MW(37037),
      CW = MW(35295),
      zR = MW(2775),
      AW = MW(1548),
      bR = MW(33),
      yR = MW(2154);
    const NW = new wW.e;

    function eW() {
      return NW
    }

    function BW() {
      NW.clear()
    }

    function tR() {
      for (const WW of NW.ids()) {
        const RW = NW.getName(WW);
        void 0 !== RW && AW.d.delete(RW)
      }
      BW(), bR.k.Sz("playerRosterChanged", NW.ids())
    }

    function TW(WW, RW) {
      var MW, wW;
      if (NW.has(WW)) return NW.getSetting(WW, RW);
      const CW = (0, yR.e)();
      return null === (MW = CW.nRW[CW.GRW]) || void 0 === MW || null === (wW = MW[WW]) || void 0 === wW ? void 0 : wW[RW]
    }

    function gR(WW) {
      const {
        added: RW,
        removed: MW,
        settingChanges: wW
      } = NW.apply(WW);
      for (const {
          playerId: CW,
          name: zR
        }
        of MW) void 0 === zR || YW(CW) || AW.d.delete(zR);
      for (const {
          playerId: zR,
          settings: AW
        }
        of wW)
        if (YW(zR)) iR(zR, AW);
        else
          for (const WW in AW)(0, CW.l)(zR, WW, AW[WW]);
      (RW.length > 0 || MW.length > 0) && bR.k.Sz("playerRosterChanged", NW.ids())
    }

    function iR(WW) {
      let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : NW.getSettings(WW);
      if (RW) {
        (0, CW.i)(WW);
        for (const MW in RW)(0, CW.e)(WW, MW, RW[MW])
      }
    }

    function YW(WW) {
      return WW === (0, yR.e)().xbW || (0, yR.b)().client.hasEntity(WW)
    }(0, zR.onGameReset)(BW)
  },
  36181: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => cR,
      d: () => FW,
      g: () => QW,
      h: () => rR,
      i: () => XW
    });
    var wW = MW(35317),
      CW = MW(36185),
      zR = MW(290),
      AW = MW.n(zR),
      bR = MW(34745);
    const yR = new wW.vC,
      NW = new wW.vC,
      eW = new wW.vC,
      BW = new wW.vC,
      tR = new wW.vC,
      TW = [0, 0, 0],
      gR = {
        x: 0,
        y: 0
      },
      iR = new wW.vC(1, 0, 0),
      YW = new wW.vC(0, 1, 0),
      JW = wW.Matrix.Identity(),
      PW = new wW.Matrix,
      IW = new wW.Matrix,
      oW = new wW.vC,
      lW = new CW.d(0, 0, 0, 0);

    function FW(WW, RW) {
      var MW, CW;
      const zR = fW(WW, RW);
      if (zR) {
        const WW = zR.x,
          RW = zR.y,
          MW = WW - 50,
          wW = RW - 50;
        return Math.abs(MW) <= bR.c && Math.abs(wW) <= (0, bR.l)() ? {
          x: WW,
          y: RW
        } : kR(MW, wW)
      }
      eW.nzW(RW[0], RW[1], RW[2]),
        function(WW) {
          const RW = WW.AC.vNW(),
            MW = RW ? wW.Matrix.FromArrayToRef(RW.worldMatrix, 0, IW) : WW.AC.QRW().activeCamera.getWorldMatrix();
          wW.vC.TransformNormalToRef(iR, MW, BW), BW.normalize(), wW.vC.TransformNormalToRef(YW, MW, tR), tR.normalize()
        }(WW);
      const AW = wW.vC.Dot(eW, BW);
      let yR = -wW.vC.Dot(eW, tR);
      Math.abs(AW) < .001 && Math.abs(yR) < .001 && (yR = -1);
      const NW = null !== (MW = null === (CW = WW.AC.vNW()) || void 0 === CW ? void 0 : CW.projectionMatrix) && void 0 !== MW ? MW : WW.AC.QRW().activeCamera.getProjectionMatrix().m;
      return kR(AW * NW[0], yR * NW[5])
    }

    function fW(WW, RW) {
      const MW = WW.AC.QRW(),
        CW = MW.mC(),
        zR = CW.getRenderWidth(),
        AW = CW.getRenderHeight();
      lW.width = zR, lW.height = AW;
      const bR = WW.AC.vNW(),
        eW = bR ? oW.nzW(bR.eye[0], bR.eye[1], bR.eye[2]) : WW.AC.camera.globalPosition;
      yR.nzW(eW.x + 10 * RW[0], eW.y + 10 * RW[1], eW.z + 10 * RW[2]);
      const BW = bR ? wW.Matrix.FromArrayToRef(bR.viewProjectionMatrix, 0, PW) : MW.getTransformMatrix();
      return wW.vC.ProjectToRef(yR, JW, BW, lW, NW), NW.z < 0 || NW.z > 1 ? null : (gR.x = NW.x / zR * 100, gR.y = NW.y / AW * 100, gR)
    }

    function QW(WW, RW) {
      return FW(WW, jR(WW, RW))
    }

    function rR(WW, RW) {
      const MW = fW(WW, jR(WW, RW));
      return MW && {
        x: MW.x,
        y: MW.y
      }
    }

    function cR(WW) {
      var RW, MW;
      return 1 / (null !== (RW = null === (MW = WW.AC.vNW()) || void 0 === MW ? void 0 : MW.projectionMatrix[0]) && void 0 !== RW ? RW : WW.AC.QRW().activeCamera.getProjectionMatrix().m[0])
    }

    function XW(WW, RW, MW) {
      const wW = WW.AC.vNW(),
        CW = wW ? wW.worldMatrix : WW.AC.QRW().activeCamera.getWorldMatrix().m,
        zR = WW.XR;
      for (let AW = 0; AW < 3; AW++) RW[AW] = CW[12 + AW] + zR[AW], MW[AW] = CW[8 + AW];
      AW().normalize(MW, MW)
    }

    function jR(WW, RW) {
      const MW = WW.XR,
        wW = WW.AC.vNW(),
        CW = wW ? oW.nzW(wW.eye[0], wW.eye[1], wW.eye[2]) : WW.AC.camera.globalPosition;
      return TW[0] = RW[0] - MW[0] - CW.x, TW[1] = RW[1] - MW[1] - CW.y, TW[2] = RW[2] - MW[2] - CW.z, AW().normalize(TW, TW), TW
    }

    function kR(WW, RW) {
      return (0, bR.f)(WW, RW, bR.c, (0, bR.l)())
    }
  },
  37046: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => tR
    });
    var wW = MW(173),
      CW = MW(290),
      zR = MW.n(CW),
      AW = MW(34954),
      bR = MW(34960),
      yR = MW(2154);
    const NW = wW.c.yI * wW.c.playerEyeToHeightRatio,
      eW = 250,
      BW = 1.1,
      tR = new class {
        constructor() {
          this.entities = new Map, this.playing = new Map, this.msSinceLastScan = 0
        }
        add(WW, RW) {
          this.entities.set(WW, RW)
        }
        update(WW, RW) {
          const MW = this.entities.get(WW);
          this.entities.set(WW, RW);
          const wW = this.playing.get(WW);
          wW && (MW && MW.soundName === RW.soundName ? (wW.sound.setRelativeVolume(RW.volume), wW.sound.rate(RW.rate), wW.sound.setPannerAttr({
            refDistance: RW.refDistance
          })) : this.stopEntity(WW))
        }
        remove(WW) {
          this.stopEntity(WW), this.entities.delete(WW)
        }
        WR(WW) {
          this.msSinceLastScan += WW, this.msSinceLastScan < eW || (this.msSinceLastScan = 0, this.scan())
        }
        stopEntity(WW) {
          const RW = this.playing.get(WW);
          RW && (RW.sound.stop(), this.playing.delete(WW))
        }
        startEntity(WW, RW, MW) {
          const wW = (0, bR.e)(RW.soundName);
          if (!wW) return console.error(`AudioEntityManager: no sound found for "${RW.soundName}", dropping audio entity ${WW}`), void this.remove(WW);
          const CW = AW.b.play(wW, RW.volume, MW, RW.maxHearDist, RW.refDistance, !0);
          CW.rate(RW.rate), this.playing.set(WW, {
            sound: CW,
            lastPos: zR().clone(MW)
          })
        }
        scan() {
          const WW = (0, yR.e)();
          if (!WW) return;
          const RW = WW.Yk.yX(WW.GRW);
          if (RW)
            for (const [MW, wW] of this.entities) {
              if (!WW.Yk.EAW(MW, "position")) continue;
              const CW = WW.Yk.yX(MW),
                AW = zR().sqrDist(RW, CW),
                bR = this.playing.get(MW);
              if (bR) {
                const WW = wW.maxHearDist * BW;
                AW > WW * WW ? this.stopEntity(MW) : zR().equals(CW, bR.lastPos) || (bR.sound.setPosition([CW[0], CW[1] + NW, CW[2]]), zR().copy(bR.lastPos, CW))
              } else AW <= wW.maxHearDist * wW.maxHearDist && this.startEntity(MW, wW, CW)
            }
        }
      }
  },
  5487: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => zR,
      i: () => CW,
      j: () => AW
    });
    const wW = new WeakMap;

    function CW(WW, RW) {
      WW.signal.aborted || wW.set(WW.signal, RW), WW.abort(RW)
    }

    function zR(WW) {
      var RW;
      const MW = null !== (RW = null === WW || void 0 === WW ? void 0 : WW.reason) && void 0 !== RW ? RW : WW && wW.get(WW);
      if (void 0 !== MW && null !== MW) return MW;
      const CW = new DOMException("signal is aborted without reason", "AbortError");
      return null !== WW && void 0 !== WW && WW.aborted && wW.set(WW, CW), CW
    }

    function AW(WW) {
      if (null !== WW && void 0 !== WW && WW.aborted) throw zR(WW)
    }
  },
  37075: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => CW
    });
    var wW = MW(5487);

    function CW(WW, RW) {
      return new Promise(((MW, CW) => {
        if (null !== RW && void 0 !== RW && RW.aborted) return void CW((0, wW.e)(RW));
        const zR = () => {
            clearTimeout(AW), CW((0, wW.e)(RW))
          },
          AW = setTimeout((() => {
            null === RW || void 0 === RW || RW.removeEventListener("abort", zR), MW()
          }), WW);
        null === RW || void 0 === RW || RW.addEventListener("abort", zR, {
          once: !0
        })
      }))
    }
  },
  37069: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => NW
    });
    var wW = MW(173),
      CW = MW(37075),
      zR = MW(5487);
    const AW = [250, 500, 1e3, 2e3, 1250],
      bR = 406;

    function yR(WW) {
      if ("object" !== typeof WW || null === WW) return !1;
      const {
        code: RW,
        message: MW
      } = WW, CW = wW.b.duplicateLobbyNameError;
      return (RW === CW.code || RW === bR) && (MW === CW.text || MW === CW.text + wW.d)
    }
    async function NW(WW, RW) {
      let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : CW.e;
      for (let CW = 0;; CW++) {
        let bR;
        (0, zR.j)(RW);
        try {
          return await WW()
        } catch (wW) {
          if (bR = AW[CW], void 0 === bR || !yR(wW)) throw wW
        }
        await MW(bR, RW)
      }
    }
  },
  37020: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => zR,
      c: () => CW
    });
    var wW = MW(33);

    function CW(WW) {
      return "refetchCode" === WW || "devDownloadJson" === WW || WW.startsWith("Plugin")
    }

    function zR(WW, RW) {
      "refetchCode" !== WW ? "Plugin|MobAiPlugin|ShowPetUi" !== WW ? Promise.all([MW.e(89), MW.e(90), MW.e(86), MW.e(190)]).then((() => MW(39205))).then((MW => {
        let {
          runClientGameMessage: wW
        } = MW;
        wW(WW, RW)
      })).catch((RW => {
        console.error(`Game message ${WW} failed`, RW)
      })) : wW.k.Sz("showPetUi", RW) : wW.k.Sz("refetchCode")
    }
  },
  37016: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => eW
    });
    var wW = MW(1053),
      CW = MW(1379),
      zR = MW(27),
      AW = MW(1135),
      bR = MW(1148),
      yR = MW(1330),
      NW = MW(34706);

    function eW(WW) {
      let {
        HWW: RW,
        DWW: MW
      } = WW;
      const eW = null !== RW && void 0 !== RW ? RW : (0, bR.b)().gameNameWithVariation;
      (0, wW.C)(eW) && ((0, NW.o)(), (0, AW.ab)((() => {
        console.log("Received matchmaking order from game server to game", RW), (0, zR.f)("inGameReplay"), (0, yR.navigatePreserveSearch)((0, CW.d)(eW, null !== MW && void 0 !== MW ? MW : void 0))
      }), "video_start"))
    }
  },
  37009: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => AW,
      h: () => bR,
      j: () => yR
    });
    var wW = MW(33),
      CW = MW(1166);
    const zR = new Map;

    function AW(WW, RW) {
      wW.k.Sz("newUiRequest", {
        id: WW,
        clientParameters: RW
      }, !0)
    }

    function bR(WW) {
      wW.k.Sz("removeUiRequest", WW, !0);
      const RW = zR.get(WW);
      RW && (RW.tearDownNotification(), zR.delete(WW))
    }

    function yR(WW, RW, MW) {
      const wW = CW.NotificationProvider.showPromptPopup({
        title: RW,
        confirmText: "general:yes",
        cancelText: "general:no",
        unlockPointerKey: "uiRequestPopup"
      });
      zR.set(WW, wW), wW.getResult().then((RW => {
        zR.delete(WW), "notificationTornDown" !== RW && MW(RW)
      }))
    }
  },
  37022: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => bR,
      e: () => yR,
      i: () => NW
    });
    var wW = MW(1053),
      CW = MW(860),
      zR = MW(35047),
      AW = MW(33);

    function bR(WW) {
      let {
        lobbyName: RW,
        gameNameWithVariation: MW
      } = WW;
      return !(0, wW.F)(RW) || null !== MW && (MW.startsWith("testGym") || (0, CW.k)(MW))
    }

    function yR(WW) {
      return WW.yV === zR.d.Leave || WW.yV === zR.d.Cursor
    }

    function NW(WW) {
      AW.k.Sz("codeCollab", {
        type: WW.yV,
        docKey: WW.tV,
        version: WW.iV,
        editorCount: WW.ND,
        peers: WW.eD,
        updates: WW.lE,
        playerId: WW.lD,
        playerName: WW.fD,
        colour: WW.dD,
        anchor: WW.FE,
        head: WW.QE,
        existingCursors: WW.pD,
        files: WW.mq,
        engineSettings: WW.KD
      })
    }
  },
  37037: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => wW
    });
    class wW {
      constructor() {
        this.members = new Map
      }
      apply(WW) {
        const RW = {
          added: [],
          removed: [],
          settingChanges: []
        };
        for (const wW of WW.nS) {
          let WW = this.members.get(wW.R6);
          if (WW || (WW = {
              name: null,
              settings: {}
            }, this.members.set(wW.R6, WW), RW.added.push(wW.R6)), null !== wW.M6 && (WW.name = wW.M6), null !== wW.w6 || wW.y5.length > 0) {
            const MW = null === wW.w6 ? {} : JSON.parse(wW.w6);
            Object.assign(WW.settings, MW);
            for (const RW of wW.y5) delete WW.settings[RW], MW[RW] = void 0;
            RW.settingChanges.push({
              playerId: wW.R6,
              settings: MW
            })
          }
        }
        for (const wW of WW.t5) {
          const WW = this.members.get(wW);
          var MW;
          if (WW) this.members.delete(wW), RW.removed.push({
            playerId: wW,
            name: null !== (MW = WW.name) && void 0 !== MW ? MW : void 0
          })
        }
        return RW
      }
      has(WW) {
        return this.members.has(WW)
      }
      ids() {
        return [...this.members.keys()]
      }
      getName(WW) {
        var RW, MW;
        return null !== (RW = null === (MW = this.members.get(WW)) || void 0 === MW ? void 0 : MW.name) && void 0 !== RW ? RW : void 0
      }
      getSettings(WW) {
        var RW;
        return null === (RW = this.members.get(WW)) || void 0 === RW ? void 0 : RW.settings
      }
      getSetting(WW, RW) {
        var MW;
        return null === (MW = this.members.get(WW)) || void 0 === MW ? void 0 : MW.settings[RW]
      }
      clear() {
        this.members.clear()
      }
    }
  },
  37064: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => wW,
      i: () => CW
    });
    const wW = ["description", "label"];

    function CW(WW) {
      const RW = WW.type;
      return {
        type: RW,
        params: WW[RW]
      }
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);