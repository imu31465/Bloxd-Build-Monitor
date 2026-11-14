export const id = 100;
export const ids = [100];
export const modules = {
  37454: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => uF,
      e: () => hF
    });
    var CF = SF(20);
    let AF = !1;

    function uF() {
      return AF
    }

    function hF(FF) {
      AF !== FF && (AF = FF, CF.j.Uu("replayViewer|videoExportChanged"))
    }
  },
  37365: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => uF
    });
    var CF = SF(20),
      AF = SF(1594);

    function uF(FF) {
      let {
        taskId: WF,
        progress: SF
      } = FF;
      const CF = AF.d.get("_tasks");
      null !== CF && void 0 !== CF && CF[WF] && AF.d.apply({
        _tasks: {
          ...CF,
          [WF]: {
            ...CF[WF],
            progress: SF
          }
        }
      })
    }
    CF.j.subscribe("clientTaskProgress", (FF => {
      uF(FF)
    }))
  },
  37356: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => mS,
      g: () => DW,
      k: () => LW
    });
    var CF = SF(2877),
      AF = SF(161),
      uF = SF(247),
      hF = SF(33),
      bW = SF(2180),
      dF = SF(2940),
      PF = SF(2978),
      RF = SF(1085);
    const iW = new WeakMap;
    class eF {
      constructor(FF, WF) {
        this.callbacks = WF, this.odF = void 0, this.sessionId = void 0, this.LO = [], this.ygF = !1, this.DC = !1, this.srF = void 0, this.xZ = 0, this.dispose = () => {
          this.DC || (this.DC = !0, iW.delete(this), this.LO.length = 0, this.srF())
        }, this.odF = FF, this.sessionId = FF.sessionId, iW.set(this, []), this.srF = this.odF.KD("*", ((FF, WF) => {
          if (this.DC) return;
          const SF = Number(FF);
          this.ygF ? this.nrF(SF, WF) : this.LO.push({
            id: SF,
            payload: WF
          })
        })), this.odF.pD(this.dispose)
      }
      nrF(FF, WF) {
        try {
          (0, dF.Ob)(FF) && (WF = (0, dF.c)(FF, PF.NC.from(WF)));
          const SF = iW.get(this)[FF];
          if ("function" !== typeof SF) {
            if (this.callbacks.HrF) return void this.callbacks.HrF(FF, WF);
            throw new Error(`No onMessage handler registered for message id ${FF}`)
          }
          SF(WF)
        } catch (SF) {
          this.callbacks.KrF(`Error in onMessage ${FF} with payload ${JSON.stringify(WF)}`, SF)
        } finally {
          this.xZ++
        }
      }
      wrF() {
        for (const {
            id: FF,
            payload: WF
          }
          of this.LO) {
          if (this.DC) break;
          this.nrF(FF, WF)
        }
        this.LO.length = 0
      }
      ZdF() {
        return this.DC
      }
      XrF() {
        if (this.ygF || this.DC) throw new Error("Trying to getOnMessageRegistrationHandler after registration finished");
        return {
          KD: (FF, WF) => {
            if (this.ygF || this.DC) throw new Error("Trying to call onMessage after registration finished");
            this.KD(FF, WF)
          },
          finishRegistration: () => {
            if (this.DC) throw new Error("Cannot finish message registration after disposal");
            this.ygF = !0, this.wrF()
          }
        }
      }
      KD(FF, WF) {
        var SF, CF;
        null === (SF = (CF = this.callbacks).UrF) || void 0 === SF || SF.call(CF);
        const AF = iW.get(this);
        for (; FF > AF.length;) AF[AF.length] = null;
        AF[FF] = WF
      }
      send(FF, WF) {
        this.BrF(), (0, RF.A)(WF) ? this.odF.Bx(FF, WF) : this.odF.send(FF, WF)
      }
      BrF() {
        var FF, WF;
        5 === EF++ && (null === (FF = (WF = this.callbacks).UrF) || void 0 === FF || FF.call(WF), EF = 0)
      }
      JR() {
        this.dispose(), this.odF.JR()
      }
      AC() {
        this.dispose(), this.odF.AC()
      }
    }
    let EF = 0;
    var QF = SF(2897);
    class rW extends eF {
      constructor(FF) {
        super(FF, {
          UrF: () => {
            (0, hF.o)(!0) && (0, CF.Jm)()
          },
          KrF: (FF, WF) => {
            var SF;
            null === (SF = (0, bW.h)()) || void 0 === SF || SF.OA(FF, WF)
          }
        }), (0, QF.f)(FF)
      }
      aZ(FF, WF) {
        return !!(0, QF.m)((0, QF.b)(), this.odF, FF, WF) && (this.BrF(), !0)
      }
      JR() {
        super.JR(), this.odF.pR.cb.VWF = void 0
      }
    }
    var gW = SF(20),
      tW = SF(1594),
      TF = SF(1510),
      aW = SF(958),
      kW = SF(34989),
      qW = SF(37365),
      VF = SF(37368),
      NF = SF(36445),
      DF = SF(36208),
      LF = SF(568),
      mW = SF(36858);

    function OF(FF, WF, SF) {
      const CF = function(FF) {
          const WF = new Int32Array(FF.length * mW.h);
          return FF.forEach(((FF, SF) => {
            const CF = SF * mW.h;
            if (4 === FF.length) {
              const [SF, AF, uF, hF] = FF;
              WF.set([SF, AF, uF, SF, AF, uF, hF], CF)
            } else {
              const [SF, AF, uF, hF, bW, dF, PF] = FF;
              WF.set([SF, uF, bW, AF, hF, dF, PF], CF)
            }
          })), WF
        }(SF),
        AF = (WF, SF, CF, AF) => {
          FF.setBlockNoMulti(WF, SF, CF, AF, !0)
        };
      FF.client.gameRecorder.isCapturing() ? (0, mW.mb)(CF, (0, mW.ib)(CF), AF) : FF.iS.uW.vCF(CF, {
        lSF: AF,
        isHookId: WF => FF.blockChangeHasHooks(WF),
        watched: () => function(FF, WF, SF) {
          const CF = [],
            AF = (FF, WF, SF) => {
              CF.push(FF, WF, SF)
            },
            uF = new Set;
          for (let hF = 0; hF < SF.length; hF += mW.h)
            for (let WF = (0, LF.X)(SF[hF]); WF <= (0, LF.X)(SF[hF + 3]); WF++)
              for (let CF = (0, LF.X)(SF[hF + 1]); CF <= (0, LF.X)(SF[hF + 4]); CF++)
                for (let bW = (0, LF.X)(SF[hF + 2]); bW <= (0, LF.X)(SF[hF + 5]); bW++) {
                  const SF = `${WF}|${CF}|${bW}`;
                  uF.has(SF) || (uF.add(SF), FF.blockDataOwner.forEachDataCell(WF, CF, bW, AF))
                }
          return WF.forEachCell(AF), Int32Array.from(CF)
        }(FF, WF, CF)
      }), FF.iS.IhF()
    }
    var xW = SF(35972),
      ZF = SF(37377),
      oF = SF(37384),
      YF = SF(874);
    var MF = SF(3600);

    function cW(FF) {
      const WF = FF.uW;
      let SF = 0,
        uF = -1,
        hF = -1 / 0,
        bW = null,
        PF = !0;
      const RF = () => {
        if (++SF % 10 !== 0) return;
        const RF = (0, CF.getLastReceivedPacketId)();
        if (RF <= uF) return;
        const [iW, eF, EF] = FF.qm.fD(FF.vSF), QF = ! function(FF) {
          var WF;
          let SF = null === (WF = FF.qm.edF(FF.vSF)) || void 0 === WF ? void 0 : WF.rA;
          if (void 0 === SF) return !1;
          const CF = new Set;
          for (; void 0 !== SF && !CF.has(SF);) {
            var AF;
            CF.add(SF);
            const WF = FF.qm.getState(SF, "smoothToServerPos"),
              uF = Array.isArray(WF) ? null : null === WF || void 0 === WF ? void 0 : WF.serverPosition;
            if (uF) {
              const WF = FF.qm.fD(SF);
              if (Math.abs(WF[0] - uF[0]) > 10 || Math.abs(WF[1] - uF[1]) > 10 || Math.abs(WF[2] - uF[2]) > 10) return !0
            }
            SF = null === (AF = FF.qm.edF(SF)) || void 0 === AF ? void 0 : AF.rA
          }
          return !1
        }(FF) && function(FF, WF, SF, CF) {
          const uF = AF.h.MC;
          for (let AF = 0; AF < FF.length; AF++) {
            const hF = FF[AF];
            if (!(0, MF.k)(WF, SF, CF, hF[0] * uF, hF[1] * uF, hF[2] * uF)) return !1
          }
          return !0
        }(WF.hu.LC, iW, eF, EF), rW = null === bW || Math.abs(iW - bW[0]) > 8 || Math.abs(eF - bW[1]) > 8 || Math.abs(EF - bW[2]) > 8, gW = !PF || rW || performance.now() - hF >= 1e4;
        PF = QF, QF && gW && (uF = RF, hF = performance.now(), bW = [iW, eF, EF], (0, CF.sendColyMessage)(dF.wf, {
          dU: RF
        }))
      };
      FF.on("lF", RF), (0, CF.onGameResetOnce)((() => {
        FF.off("lF", RF)
      }))
    }
    var GF = SF(35256),
      zW = SF(282),
      IF = SF.n(zW),
      fF = SF(5450),
      yW = SF(36475),
      sF = SF(36191),
      nF = SF(3607),
      HF = SF(36549),
      KF = SF(36323),
      wF = SF(35761),
      XF = SF(36076),
      UF = SF(35243),
      BF = SF(35247),
      jW = SF(37390),
      vW = SF(37392),
      JF = SF(2836),
      pF = SF(1352),
      lF = SF(2174),
      FW = SF(2241),
      WW = SF(36705),
      SW = SF(35525),
      CW = SF(3764),
      AW = SF(37435),
      uW = SF(36538),
      hW = SF(3416),
      bS = SF(35977),
      dW = SF(35596),
      PW = SF(36555),
      RW = SF(37400),
      iS = SF(37412),
      eW = SF(35754);
    class EW {
      constructor(FF, WF, SF) {
        this.gameNameWithVariation = FF, this.iS = SF, this.stateReplicationHandler = void 0, this.stateReplicationHandler = new iS.c(WF, this.iS)
      }
      setupStateReplicationHandlers() {
        this.stateReplicationHandler.setup()
      }
      setupOnMessageListeners(FF, WF) {
        const SF = this.iS,
          AF = this.gameNameWithVariation;
        FF.KD(dF.Sb, (FF => {
          let {
            M6: WF,
            cFF: CF,
            zFF: AF,
            I6: uF,
            f6: hF,
            yFF: bW,
            w6: dF,
            U6: PF,
            size: RF
          } = FF;
          (0, sF.l)(SF, WF, [hF, bW, dF], CF, AF, JSON.parse(uF), PF, RF)
        })), FF.KD(dF.P, (FF => {
          (0, xW.c)(SF).setCantPickUp(FF, !0), SF.qm.KhF(FF, "itemState") && (SF.qm.getState(FF, "itemState").U6 = !0)
        })), FF.KD(dF.pd, (FF => {
          (0, xW.c)(SF).setCantPickUp(FF, !1), SF.qm.KhF(FF, "itemState") && (SF.qm.getState(FF, "itemState").U6 = !1)
        })), FF.KD(dF.pc, (FF => {
          tW.d.applyNewClientOptions(FF)
        })), FF.KD(dF.qc, (FF => {
          let {
            eId: WF,
            settings: CF
          } = FF;
          (0, dW.i)(WF);
          for (const SF in CF)(0, dW.e)(WF, SF, CF[SF]);
          if ("canSee" in CF && SF.qm.KhF(WF, "hidingMeshManager")) {
            const FF = SF.qm.getState(WF, "hidingMeshManager");
            FF.canSee = (0, PW.b)("canSee", CF.canSee), FF._forceUpdate = !0
          }
        })), FF.KD(dF.me, (FF => {
          let {
            gWF: WF,
            tWF: AF,
            TFF: uF,
            aWF: hF
          } = FF;
          const bW = [AF, uF, hF];
          SF.qm.setPosition(SF.vSF, bW), (0, CF.sendColyMessage)(dF.Lf, {
            rG: WF,
            aG: nF.f
          }), gW.j.Uu("localPlayerTeleported", {
            pos: bW,
            isCorrection: !1
          })
        })), FF.KD(dF.Ec, (FF => {
          let {
            vFF: WF,
            WFF: SF,
            SFF: CF,
            CFF: AF
          } = FF;
          this.stateReplicationHandler.setUpIfQueued(WF);
          const uF = [SF, CF, AF];
          gW.j.Uu(`otherPlayerTeleported|${WF}`, {
            pos: uF
          })
        })), FF.KD(dF.Mc, (FF => {
          let {
            x_: WF,
            o9: AF,
            I9: uF,
            y_: hF,
            K9: bW,
            j_: PF,
            v_: RF,
            F_: iW,
            J9: eF,
            h_: EF
          } = FF;
          const QF = [AF, uF, hF];
          SF.qm.setPosition(SF.vSF, QF);
          const rW = SF.qm.bdF(SF.vSF),
            tW = SF.qm.yCF(SF.vSF);
          IF().set(tW.mCF, 0, 0, 0), IF().set(tW.OSF, 0, 0, 0), IF().set(tW.Th, bW, PF, RF), tW.xCF(), rW._flying = null !== EF, EF ? (rW.flyAccel.P_ = EF.P_, rW.flyAccel.R_ = EF.R_) : rW.flyAccel.reset(), iW && rW.movementType === fF.j.GLIDING && (rW.S_ = iW.S_, IF().copy(rW.A_, iW.A_)), (0, CF.sendColyMessage)(dF.Lf, {
            rG: WF,
            aG: nF.f
          }), gW.j.Uu("localPlayerTeleported", {
            pos: QF,
            isCorrection: !0
          })
        }));

        function uF() {
          return SF.qm.obF(SF.vSF)
        }
        FF.KD(dF.Z, (FF => {
          let {
            chatMsgId: WF,
            content: SF,
            chatterEId: CF
          } = FF;
          gW.j.Uu("chat", {
            serverChatMsgId: WF,
            content: SF,
            chatterEId: CF
          }, !0)
        })), FF.KD(dF.Hc, (FF => {
          lF.c.onReceiveColyseusPing(FF)
        })), FF.KD(dF.Pd, (FF => {
          let {
            key: WF,
            value: SF
          } = FF;
          (0, TF.setCookie)(AF, WF, SF)
        })), FF.KD(dF.Sd, (FF => {
          gW.j.Uu("setDiscordReportKey", FF)
        })), FF.KD(dF.Pb, (WF => {
          let {
            AFF: AF,
            uFF: uF
          } = WF;
          console.log("Local client is eId", AF), gW.j.Uu("loadingScreenState", "loadingPage:loadingWorld"), (0, CF.setAdjustment)(uF), SF.UhF = AF, SF.qm.KhF(SF.vSF, SF.qm.names.entityName) && SF.qm.HWF(SF.vSF, SF.qm.names.entityName), (0, bW.e)().setEntityName(SF.UhF, (0, bW.e)().getRawEntityName(SF.vSF)), SF.jSF[SF.UhF] = {}, SF.qm.nWF(SF.vSF, SF.qm.names.entityName), gW.j.Uu("initInfoReceived", FF),
            function(FF) {
              let WF = null,
                SF = -1 / 0,
                AF = null;
              const uF = () => {
                  AF = null;
                  const uF = Math.ceil(FF.AWF[0]),
                    hF = Math.ceil(FF.AWF[1]);
                  WF && WF[0] === uF && WF[1] === hF || (WF = [uF, hF], SF = performance.now(), (0, CF.sendColyMessage)(dF.tf, {
                    mw: uF,
                    cwF: hF
                  }))
                },
                hF = () => {
                  null === AF && (AF = setTimeout(uF, Math.max(0, SF + 250 - performance.now())))
                };
              uF(), FF.on("addRemoveDistanceChanged", hF), (0, CF.onGameResetOnce)((() => {
                FF.off("addRemoveDistanceChanged", hF), null !== AF && clearTimeout(AF)
              }))
            }(SF.uW), cW(SF), hF.client.onServerConnectionFinalised()
        })), FF.KD(dF.qe, (FF => {
          gW.j.Uu("TopRightHelper", FF, !0)
        })), FF.KD(dF.Sc, (FF => {
          let {
            type: WF,
            location1: SF,
            location2: CF,
            location3: AF,
            score: uF
          } = FF;
          (0, FW.u)({
            type: WF,
            location1: SF,
            location2: CF,
            location3: AF,
            score: uF
          })
        })), FF.KD(dF.Ad, (FF => {
          let {
            type: WF,
            resourceType: SF,
            amount: CF,
            category: AF,
            itemName: uF
          } = FF;
          (0, FW.y)({
            type: WF,
            resourceType: SF,
            amount: CF,
            category: AF,
            itemName: uF
          })
        })), FF.KD(dF.B, (FF => {
          SF.uW.kPF.add(FF), SF.uW.NdF.delete(FF)
        })), FF.KD(dF.J, (FF => {
          SF.uW.NdF.add(FF), SF.uW.kPF.delete(FF)
        })), FF.KD(dF.rd, (FF => {
          SF.uW.NdF.delete(FF), SF.uW.kPF.delete(FF)
        })), FF.KD(dF.I, (FF => {
          SF.uW.qPF.add(FF), SF.uW.DdF.delete(FF)
        })), FF.KD(dF.M, (FF => {
          SF.uW.DdF.add(FF), SF.uW.qPF.delete(FF)
        })), FF.KD(dF.ud, (FF => {
          SF.uW.DdF.delete(FF), SF.uW.qPF.delete(FF)
        })), FF.KD(dF.F, (FF => {
          (0, RF.hb)(FF, SF.uW.LdF), (0, RF.hb)(FF, SF.uW.VdF), SF.uW.VdF.push(FF)
        })), FF.KD(dF.K, (FF => {
          (0, RF.hb)(FF, SF.uW.VdF), (0, RF.hb)(FF, SF.uW.LdF), SF.uW.LdF.push(FF)
        })), FF.KD(dF.td, (FF => {
          (0, RF.hb)(FF, SF.uW.VdF), (0, RF.hb)(FF, SF.uW.LdF)
        })), FF.KD(dF.Fe, (FF => {
          let {
            U1: WF,
            W9: CF
          } = FF;
          CF ? SF.uW.GSF.delete(WF) : SF.uW.GSF.add(WF)
        })), FF.KD(dF.Ee, (FF => {
          let {
            i4: WF,
            r4: CF
          } = FF;
          hF.updateWalkThroughRect(SF.vSF, WF, CF)
        })), (0, CF.onGameResetOnce)((() => {
          SF.uW.kPF = new Set, SF.uW.NdF = new Set, SF.uW.qPF = new Set, SF.uW.DdF = new Set, SF.uW.VdF = [], SF.uW.LdF = [], SF.uW.GSF = new Set, SF.uW.i4 = [], SF.uW.zCF = []
        })), FF.KD(dF.ie, (FF => {
          (0, qW.b)(FF)
        })), FF.KD(dF.Kb, (FF => {
          NF.c.applyServerUpdate(FF)
        })), FF.KD(dF.Q, (FF => {
          ! function(FF, WF) {
            for (const {
                nB: SF,
                XB: CF
              }
              of WF) {
              const WF = DF.d[CF];
              if (WF) {
                const {
                  compX: CF,
                  compY: AF,
                  compZ: uF,
                  mainMultiblock: hF
                } = WF;
                FF.rSF(SF[0] - CF, SF[1] - AF, SF[2] - uF, hF)
              }
            }
            for (const {
                nB: SF,
                XB: CF,
                JB: AF
              }
              of WF) FF.setBlockNoMulti(SF[0], SF[1], SF[2], CF, !0), FF.blockDataOwner.setBlockData(SF[0], SF[1], SF[2], null === AF ? void 0 : JSON.parse(AF)), FF.blockAdded(SF[0], SF[1], SF[2], CF)
          }(hF, FF), gW.j.Uu("changeBlockFail", FF), hF.client.triggerGameCallback("onChangeBlockFail", FF), gW.j.Uu("EditBoard", {
            pos: null
          }), gW.j.Uu("EditCodeBlock", {
            pos: null,
            canChangePos: null
          })
        })), FF.KD(dF.Gc, (FF => {
          for (const {
              name: WF,
              amount: SF,
              attributes: CF
            }
            of FF) uF().pickUpItem({
            name: WF,
            amount: SF,
            typeObj: sF.G[WF],
            attributes: CF
          })
        })), FF.KD(dF.Td, (FF => {
          let {
            index: WF,
            name: SF,
            amount: CF,
            attributes: AF
          } = FF;
          uF().setItemSlot(WF, SF, CF, AF)
        })), FF.KD(dF.he, (FF => {
          let {
            f_: WF,
            p_: CF
          } = FF;
          SF.qm.ZbF(SF.vSF) ? (CF && console.error("Had to sync inven"), SF.qm.YbF(SF.vSF).loadFromString(WF), gW.j.Uu("syncedInvenFromServer")) : console.log("Got resync inven but don't have inven component")
        })), FF.KD(dF.db, (() => {
          uF().clearInventory()
        })), FF.KD(dF.cc, (FF => {
          let {
            leaveEventType: WF,
            category: SF,
            subCategory: CF,
            value: AF
          } = FF;
          (0, FW.F)({
            leaveEventType: WF,
            category: SF,
            subCategory: CF,
            value: AF
          })
        })), FF.KD(dF.pb, (FF => {
          let {
            cat1: WF,
            cat2: SF,
            cat3: CF,
            value: AF
          } = FF;
          (0, FW.n)({
            cat1: WF,
            cat2: SF,
            cat3: CF,
            value: AF
          })
        }));
        const hF = (0, bW.e)();
        FF.KD(dF.kb, (FF => {
          OF(hF, NF.c, FF)
        })), FF.KD(dF.Vd, (FF => {
          gW.j.Uu("setSelectedInventorySlotI", FF, !0)
        })), FF.KD(dF.bc, (FF => {
          let {
            category: WF,
            timeframe: SF,
            data: CF
          } = FF;
          gW.j.Uu("leaderboardResponse", {
            category: WF,
            timeframe: SF,
            data: CF
          })
        })), FF.KD(dF.y, (FF => {
          let {
            B7: WF,
            sS: SF
          } = FF;
          this.stateReplicationHandler.setUpIfQueued(WF), WF = (0, GF.e)(WF), (0, bW.e)().client.gameRecorder.recordBulletShot(WF, SF), gW.j.Uu(`bulletShot|${WF}`, {
            bulletDirections: SF
          })
        })), FF.KD(dF.Nb, (FF => {
          let {
            upF: WF,
            Qp: SF
          } = FF;
          gW.j.Uu("damagedByOtherPlayer", {
            upF: WF,
            direction: SF
          }, !0)
        })), FF.KD(dF.Lc, (FF => {
          gW.j.Uu("playerKilled", FF, !0), (0, bW.e)().client.gameRecorder.recordPlayerKilled(FF.deadEId, FF.killerEId, FF.withItem, FF.killstreak)
        })), FF.KD(dF.sb, (FF => {
          gW.j.Uu("customKillfeed", FF, !0), (0, bW.e)().client.gameRecorder.recordCustomKillfeed(FF.killer, FF.victim, FF.withItem)
        })), FF.KD(dF.Tc, (FF => {
          let {
            i5: WF,
            e_: CF
          } = FF;
          this.stateReplicationHandler.setUpIfQueued(WF);
          const AF = SF.qm.pbF(WF);
          null !== AF && void 0 !== AF && AF.isGun() && AF.reload(Date.now(), CF)
        })), FF.KD(dF.ee, (() => {
          gW.j.Uu("showShopTutorial", null, !0)
        })), FF.KD(dF.Qc, (FF => {
          gW.j.Uu("progressBarUpdate", FF, !0)
        })), FF.KD(dF.Qb, (FF => {
          gW.j.Uu("middleScreenBarInitiate", {
            duration: FF.Q8,
            K8: FF.K8,
            horizBarRemOffset: FF.A7
          }, !0)
        })), FF.KD(dF.fd, (() => {
          gW.j.Uu("middleScreenBarRemove", !0)
        })), FF.KD(dF.Dd, (FF => {
          let {
            MJ: WF,
            lY: CF
          } = FF;
          const AF = CF ? (0, uW.h)(SF, CF) : void 0;
          gW.j.Uu("sendHitmarker", {
            MJ: WF,
            screenPos: AF
          }, !0)
        })), FF.KD(dF.Rd, (FF => {
          let {
            id: WF,
            position: SF,
            style: CF,
            text: AF,
            o3: uF
          } = FF;
          gW.j.Uu("setDirectionArrow", {
            id: WF,
            position: SF,
            style: CF,
            text: (0, dF.m)(AF),
            o3: uF
          }, !0)
        })), FF.KD(dF.bb, (FF => {
          let {
            id: WF
          } = FF;
          gW.j.Uu("clearDirectionArrow", {
            id: WF
          }, !0)
        })), FF.KD(dF.q, (FF => {
          let {
            JY: WF,
            kWF: CF,
            animationScript: AF,
            qWF: uF,
            VFF: hF,
            NFF: dF,
            DFF: PF
          } = FF;
          WF = (0, GF.e)(WF);
          const RF = null === AF && null !== dF ? (0, ZF.g)(dF, PF) : AF;
          (0, bW.e)().client.gameRecorder.recordAnimateEntity(WF, CF, RF, uF, hF), (0, xW.c)(SF).animations.animateEntity(WF, CF, AF, uF, hF, dF, PF), null !== AF || WF === SF.vSF && CF === bS.d.Emote && (0, bW.e)().client.cameraController.endTemporaryThirdPerson()
        })), FF.KD(dF.xe, (FF => {
          let {
            J7: WF,
            Q0: SF
          } = FF;
          if (hF.bAF(WF[0], WF[1], WF[2])) {
            const FF = (0, bW.e)().dD(WF[0], WF[1], WF[2]);
            (0, bW.e)().updateMailboxContents(WF[0], WF[1], WF[2], FF, SF)
          }
        })), FF.KD(dF._, (FF => {
          let {
            A4: WF,
            O4: CF,
            Z4: AF,
            vY: uF,
            K4: hF,
            B4: dF,
            W8: PF,
            E8: RF
          } = FF;
          const iW = SF.qm.YbF(SF.vSF);
          if (dF) return iW.chestContentsRefreshed(CF, RF), void gW.j.Uu("chestRefreshedFromServer");
          (WF || iW.n_) && (WF ? (iW.chestOpened(CF, AF, uF, hF, PF), null !== hF && (0, bW.e)().client.ironChestPasskeyCache.onChestOpened(uF, hF)) : iW.chestClosed(), gW.j.Uu("chestToggleFromServer", WF, !0))
        })), FF.KD(dF.ub, (FF => {
          let {
            craftingRecipeItemName: WF,
            recipesForItem: CF
          } = FF;
          WF ? hF.craftingManager.editRecipesForPlayer(SF.vSF, WF, CF) : hF.craftingManager.resetAllPlayerRecipes(SF.vSF), gW.j.Uu("craftingRecipesEdited", {
            itemName: WF,
            recipesForItem: CF
          })
        })), FF.KD(dF.Wd, (FF => {
          let {
            vehicleEId: WF,
            overrides: SF
          } = FF;
          (0, bW.e)().applyRiddenVehicleSettingOverrides(WF, SF)
        })), FF.KD(dF.Be, (FF => {
          let {
            lFF: WF,
            FWF: CF,
            aA: AF
          } = FF;
          (0, bW.e)().updatePositionAndPhysics(SF.vSF, {
            type: WF,
            tier: CF
          }, !0, AF)
        })), FF.KD(dF.U, (FF => {
          let {
            pose: WF,
            pB: CF
          } = FF;
          SF.qm.xdF(SF.vSF).setPose(WF, CF)
        })), FF.KD(dF.Cd, (FF => {
          (0, RW.d)(FF)
        })), FF.KD(dF.Jc, (FF => {
          for (const WF of FF)(0, HF.A)(WF);
          gW.j.Uu("playerCosmeticsUpdated", FF, !0)
        })), FF.KD(dF.t, (FF => {
          for (const WF of FF)(0, SW.i)(SF, WF)
        })), FF.KD(dF.gc, (FF => {
          let {
            yWF: WF,
            sFF: CF,
            HFF: AF,
            KFF: uF,
            wFF: bW,
            XFF: dF,
            UFF: PF
          } = FF;
          this.stateReplicationHandler.setUpIfQueued(WF), WF = (0, GF.e)(WF);
          const RF = SF.qm.wbF(WF);
          if (RF && (RF.lastHurtTime = performance.now()), (0, yW.playRigHurt)(SF, WF, dF), gW.j.Uu("lifeformHurt", {
              eId: WF,
              UFF: PF
            }), CF) {
            const FF = (0, uW.h)(SF, CF.lY);
            gW.j.Uu("yourAttackHit", {
              MJ: uF,
              screenPos: FF,
              hitSelf: WF === SF.vSF
            })
          }
          WF === SF.vSF && (hF.shakePlayerCamera(WF, bW / 40, 200), gW.j.Uu("closeShopOnDamaged", null), gW.j.Uu("damagedByOtherPlayer", {
            upF: null,
            direction: dF,
            wFF: bW
          }, !0));
          const iW = SF.qm.fD(WF);
          if (iW && (AF || uF)) {
            const FF = [iW[0], iW[1] + 1, iW[2]];
            AF && (0, KF.l)(SF, KF.x, FF, 15), uF && (0, KF.l)(SF, KF.p, FF, 10)
          }
        })), FF.KD(dF.dc, (FF => {
          let {
            eId: WF,
            A3: CF,
            i6: AF
          } = FF;
          (0, xW.c)(SF).setHealthFrac((0, GF.e)(WF), AF), gW.j.Uu("lifeformHealthChanged", {
            eId: (0, GF.e)(WF),
            A3: CF,
            i6: AF
          })
        })), FF.KD(dF.u, (FF => {
          let {
            R7: WF,
            N7: CF
          } = FF;
          (0, bW.e)().playerAttacked(SF.vSF, WF, CF)
        })), FF.KD(dF._b, (FF => {
          (0, bW.e)().client.leaveGameUnwanted({
            reason: FF,
            requiresRefresh: !1,
            canReconnect: !1,
            automaticallyReconnect: !1
          }), (0, pF.navigatePreserveSearch)("/")
        })), FF.KD(dF.cd, (FF => {
          let {
            K3: WF,
            X3: CF
          } = FF;
          SF.qm.obF(SF.vSF).removeItemName(WF, CF)
        })), FF.KD(dF.Ld, (FF => {
          const {
            uh: WF,
            PdF: CF
          } = (0, wF.d)([FF[0], FF[1], FF[2]]);
          eW.d.setLookDirection(SF, WF, CF), (0, XF.q)(WF, CF);
          const AF = SF.qm.xdF(SF.vSF);
          AF && (AF.heading = WF)
        })), FF.KD(dF.Md, (FF => {
          hF.client.cameraController.setCameraZoom(FF)
        })), FF.KD(dF.ae, (FF => {
          let {
            qFF: WF,
            mFF: CF
          } = FF;
          hF.shakePlayerCamera(SF.vSF, WF, CF)
        })), FF.KD(dF.ob, (FF => {
          (0, JF.onCosmeticPackGranted)(FF)
        })), FF.KD(dF.Fd, (FF => {
          gW.j.Uu("serverUpdating", Date.now() + FF, !0)
        })), FF.KD(dF.nc, oF.b), FF.KD(dF.zc, (FF => {
          let {
            id: WF,
            Fv: SF
          } = FF;
          const {
            type: AF,
            params: uF
          } = (0, AW.h)(SF), hF = {
            ...uF
          };
          for (const CF of AW.d) CF in hF && hF[CF] && (hF[CF] = (0, dF.m)(hF[CF]));
          CW.c.queueQTE(WF, AF, hF).getResult().then((FF => {
            "boolean" === typeof FF && (0, CF.sendColyMessage)(dF.oh, {
              qteId: WF,
              qteResponse: FF
            })
          }))
        })), FF.KD(dF.jd, (FF => {
          CW.c.cancelQTE(FF)
        })), (0, CF.onGameResetOnce)((() => {
          CW.c.reset()
        })), FF.KD(dF.Ac, (FF => {
          let {
            id: WF,
            clientParameters: SF
          } = FF;
          (0, VF.c)(WF, SF)
        })), FF.KD(dF.nd, (FF => {
          (0, VF.g)(FF)
        })), FF.KD(dF.ve, (FF => {
          let {
            text: WF,
            id: SF
          } = FF;
          (0, VF.k)(SF, WF, (FF => {
            (0, CF.sendColyMessage)(dF.Hi, {
              HO: SF,
              vx: FF,
              iZ: 5
            })
          }))
        })), FF.KD(dF.wb, (FF => {
          let {
            bM: WF,
            RY: SF,
            EY: CF,
            Y5: AF,
            I5: uF,
            B5: hF
          } = FF;
          WF = (0, GF.e)(WF), (0, bW.e)().client.updateEffect(WF, SF, {
            displayName: CF,
            icon: AF,
            duration: uF,
            level: hF
          })
        })), FF.KD(dF.Xc, (FF => {
          let {
            bM: WF,
            RY: SF
          } = FF;
          WF = (0, GF.e)(WF), (0, bW.e)().client.removeEffect(WF, SF)
        })), FF.KD(dF.Wb, (FF => {
          SF.qm.xdF(SF.vSF).jumpMultiplier.setMultiplierType("jumpEffectAmount", FF)
        })), FF.KD(dF.re, (FF => {
          gW.j.Uu("ttbEffectMultiplier", FF)
        })), (0, CF.onGameResetOnce)((() => {
          SF.qm.xdF(SF.vSF).jumpMultiplier.setMultiplierType("jumpEffectAmount", 1)
        })), FF.KD(dF.tc, (FF => {
          (0, KF.o)(SF, (0, RF.p)(FF))
        })), FF.KD(dF.xc, (FF => {
          hW.g[FF.M_] ? (0, KF.o)(SF, {
            ...hW.g[FF.M_],
            pos1: FF.pos1,
            pos2: FF.pos2
          }) : console.error(`Unknown preset id: ${FF.M_}`)
        })), FF.KD(dF.Ic, (FF => {
          var WF, SF;
          let {
            RFF: CF,
            soundVolume: AF,
            iWF: uF,
            eFF: hF
          } = FF, {
            QFF: dF,
            rWF: PF
          } = null !== hF && void 0 !== hF ? hF : {};
          const {
            EFF: RF
          } = null !== hF && void 0 !== hF ? hF : {};
          dF = null !== (WF = dF) && void 0 !== WF ? WF : void 0, PF = null !== (SF = PF) && void 0 !== SF ? SF : void 0, "string" === typeof RF && this.stateReplicationHandler.setUpIfQueued(RF), (0, bW.e)().client.gameRecorder.recordPlaySound(CF, AF, uF, hF), UF.d.play((0, BF.e)(CF), AF, RF, dF, PF).rate(uF)
        })), FF.KD(dF.Id, (FF => {
          let {
            pos: WF,
            data: SF
          } = FF;
          hF.blockDataOwner.setBlockData(WF[0], WF[1], WF[2], SF), hF.blockAdded(WF[0], WF[1], WF[2], hF.dD(WF[0], WF[1], WF[2]))
        })), FF.KD(dF.Fc, (FF => {
          let {
            info: WF
          } = FF;
          gW.j.Uu("overShopInfo", WF, !0)
        })), FF.KD(dF.Eb, (FF => {
          let {
            aFF: CF,
            kFF: AF
          } = FF;
          WF.openShop(SF.vSF, CF, AF)
        })), FF.KD(dF.s, (FF => {
          SF.qm.yCF(SF.vSF).applyImpulse(FF)
        })), FF.KD(dF.Yd, (FF => {
          const WF = SF.qm.yCF(SF.vSF);
          IF().set(WF.mCF, 0, 0, 0), IF().set(WF.OSF, 0, 0, 0), IF().copy(WF.Th, FF), WF.xCF()
        })), FF.KD(dF.kc, (FF => {
          console.error(`[logErrorToConsole]: ${FF}`)
        })), FF.KD(dF.Db, (FF => {
          let {
            GJ: WF,
            zp: SF,
            HJ: CF
          } = FF;
          gW.j.Uu("flyingMiddleMessage", {
            content: (0, dF.m)(WF),
            zp: SF,
            HJ: CF
          }, !0)
        })), FF.KD(dF.He, (FF => {
          const WF = FF === YF.f ? null : {
            message: `Currently loaded as variation: ${FF}`,
            type: "Warning"
          };
          gW.j.Uu("showPermanentBottomMessage", WF, !0)
        })), FF.KD(dF.Hb, (FF => {
          let {
            messageType: WF,
            data: SF
          } = FF;
          (0, jW.f)(WF) ? (0, jW.c)(WF, SF) : ("freeCamPerms" === WF && hF.client.freeCameraController.setPerms(SF.key, SF.value), hF.client.triggerGameCallback("onReceivedMessageFromServer", WF, SF))
        })), FF.KD(dF.W, (() => {
          const FF = SF.qm.pbF(SF.vSF);
          null !== FF && void 0 !== FF && FF.isChargeable() && FF.finishCharging(!1, Date.now())
        })), FF.KD(dF.$c, (FF => {
          let {
            I3: WF
          } = FF;
          hF.craftingManager.removeRecipes(SF.vSF, WF), gW.j.Uu("craftingRecipesEdited", {
            itemName: WF,
            recipesForItem: []
          })
        })), FF.KD(dF.ze, (FF => {
          for (const WF in FF) {
            const SF = FF[WF];
            for (const FF in SF) hF.client.meshCreator.handleParticleSystemUpdate(WF, FF, SF[FF])
          }
        })), (0, CF.onGameResetOnce)((() => {
          (0, WW.setFloatingYValue)(SF.qm.getState(SF.vSF, "physics"), SF.qm.ZCF(SF.vSF), null)
        })), FF.KD(dF.Ab, (FF => {
          let {
            l_: WF,
            P5: CF,
            o5: AF
          } = FF;
          const uF = (0, GF.e)(WF);
          if (uF === SF.vSF) {
            const FF = SF.qm.ZCF(SF.vSF).position;
            AF ??= Math.floor(FF[1]) - 1, (0, WW.setFloatingYValue)(SF.qm.getState(SF.vSF, "physics"), SF.qm.ZCF(SF.vSF), CF ? AF : null)
          }(0, xW.c)(SF).setFloating(uF, CF, AF);
          const hF = SF.qm.getState(uF, "floating");
          hF && (hF.isFloating = CF, hF.o5 = CF ? AF : null)
        })), FF.KD(dF.hb, vW.e)
      }
    }
    window.addEventListener("beforeunload", (() => {}));
    var QW = SF(1175),
      rS = SF(3690),
      gS = SF(2344),
      tS = SF(948),
      TW = SF(2418),
      aS = SF(36100),
      kS = SF(37439),
      qS = SF(5458);

    function VW(FF) {
      var WF, SF;
      if ("object" !== typeof FF || null === FF) return {
        errType: typeof FF
      };
      const CF = FF;
      return {
        errType: null !== (WF = null === (SF = FF.constructor) || void 0 === SF ? void 0 : SF.name) && void 0 !== WF ? WF : "",
        errName: "string" === typeof CF.name ? CF.name : "",
        eventType: "string" === typeof CF.type ? CF.type : "",
        errStack: "string" === typeof CF.stack ? CF.stack.split("\n").slice(1).join(" | ") : ""
      }
    }

    function NW(FF) {
      if ("undefined" !== typeof ProgressEvent && FF instanceof ProgressEvent) return !0;
      if (!(FF instanceof Error)) return !1;
      const WF = FF.code;
      return "ServerError" === FF.name && void 0 === WF || "AbortError" === FF.name || "seat reservation expired." === FF.message || "early_leave" === FF.message
    }(0, QF.q)((FF => {
      (0, TW.h)("wasm_net", FF)
    }));
    let DW = !0;

    function LW() {
      DW = !1
    }
    class mS {
      constructor(FF) {
        this.gameNameWithVariation = void 0, this.lobbyName = void 0, this.colyClient = void 0, this.userContext = void 0, this.joinedAt = null, this.gameNameWithVariation = FF.gameNameWithVariation, this.lobbyName = FF.lobbyName, this.colyClient = FF.colyClient, this.userContext = FF.userContext
      }
      async connectToServer(FF, WF, SF) {
        tW.d.reset(), FF.jSF = {
          [FF.vSF]: {}
        }, FF.UhF = void 0, (0, RW.s)(), (0, bW.e)().removeAllEntityNames(), (0, bW.e)().setEntityName(FF.vSF, this.userContext.getPlayerName()), (0, QW.w)({
          lobbyName: this.lobbyName
        }), console.log("Waiting for clientConnection passed promise to resolve");
        const {
          roomName: uF,
          joinOptions: hF
        } = (0, kW.h)(this.userContext, this.gameNameWithVariation, this.lobbyName, WF, (FF => gS.e.isUsingCustomGameTexturePack(FF)));
        console.log("joining server with game", this.gameNameWithVariation, "lobbyName", this.lobbyName);
        const dF = performance.now(),
          PF = (0, kS.c)((() => this.colyClient.joinOrCreate(uF, hF)), SF);
        return gW.j.Uu("loadingScreenState", "loadingPage:joiningLobby"), await PF.then((FF => {
          this.joinedAt = performance.now();
          const WF = (0, aW.c)((() => FF.connection.isOpen));
          ! function(FF, WF) {
            FF.pD(WF), (0, CF.onGameResetOnce)(WF)
          }(FF, WF);
          const SF = new rW(FF),
            AF = SF.send,
            uF = SF.KD,
            hF = SF.odF.send,
            bW = SF.odF.KD,
            dF = SF.nrF,
            PF = (0, aS.c)(SF, FF, QF.t),
            RF = setInterval((() => {
              AF === SF.send && uF === SF.KD && hF === SF.odF.send && bW === SF.odF.KD && dF === SF.nrF || LW(), PF()
            }), 1e4);
          return (0, CF.onGameResetOnce)((() => {
            clearInterval(RF)
          })), {
            success: !0,
            successDetails: SF
          }
        })).catch((WF => {
          if (SF.aborted && WF === (0, qS.b)(SF)) return {
            success: !1,
            failDetails: {
              reason: "Left the game while it loaded",
              requiresRefresh: !1,
              canReconnect: !1
            }
          };
          FF.OA(`Failed to connect to bloxd room, check your internet connection. lobbyName: ${this.lobbyName}, gameNameWithVariation: ${this.gameNameWithVariation} code: ${WF.code}\n`, WF);
          const CF = WF.code;
          return CF === AF.e.serverUpdating.code ? (this.goToUpdateWaiting(), {
            success: !1,
            failDetails: {
              reason: AF.e.serverUpdating.text,
              requiresRefresh: !1,
              canReconnect: !0,
              goesToUpdateWaiting: !0
            }
          }) : {
            success: !1,
            failDetails: this.onConnectionToServerLost(CF, WF.message, {
              site: "join",
              sinceJoinStart: OW(performance.now() - dF),
              ...VW(WF)
            }, NW(WF))
          }
        }))
      }
      setupServerListeners(FF, WF, SF) {
        gW.j.Uu("loadingScreenState", "loadingPage:loadingPlayerInfo");
        const uF = new EW(this.gameNameWithVariation, WF.odF, FF);
        uF.setupStateReplicationHandlers();
        const hF = WF.XrF();
        uF.setupOnMessageListeners(hF, SF), (0, CF.onConnectionToServerReady)(hF, WF), hF.finishRegistration(), WF.odF.pD(((WF, SF) => {
          var CF;
          if (WF === AF.e.gameOrPluginKick.code) return;
          if (console.log(`Left room with code ${WF}`), WF === AF.e.serverUpdating.code) return (0, TW.h)("disconnect", "Left room", "serverUpdating"), (0, bW.e)().client.leaveGame(this.getUpdateWaitingUrl()), void this.goToUpdateWaiting();
          FF.OA(`Kicked from server with code ${WF}`, new Error);
          const uF = Object.keys(AF.e).find((FF => AF.e[FF].code === WF));
          (0, TW.h)("disconnect", "Left room", null !== uF && void 0 !== uF ? uF : String(WF));
          const hF = this.onConnectionToServerLost(WF, void 0, {
            site: "AC",
            closeReason: null !== SF && void 0 !== SF ? SF : "",
            sinceJoined: null === this.joinedAt ? "" : OW(performance.now() - this.joinedAt)
          });
          (0, bW.e)().client.leaveGameUnwanted({
            reason: `You have disconnected from the server.\n${hF.reason}`,
            canReconnect: hF.canReconnect,
            requiresRefresh: hF.requiresRefresh,
            automaticallyReconnect: null !== (CF = hF.automaticallyReconnect) && void 0 !== CF && CF
          }), (0, pF.navigatePreserveSearch)("/")
        }))
      }
      getUpdateWaitingUrl() {
        return (0, rS.z)(this.gameNameWithVariation, this.lobbyName)
      }
      goToUpdateWaiting() {
        (0, pF.navigatePreserveSearch)(this.getUpdateWaitingUrl())
      }
      onConnectionToServerLost(FF, WF, SF) {
        var CF;
        let hF = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (null !== (CF = WF) && void 0 !== CF && CF.endsWith(AF.j) && (this.userContext.invalidateTrafficCode(), WF = WF.replace(AF.j, "")), FF === AF.e.outdatedVersion.code) return console.error("Outdated client with version ", uF.c, ", refreshing page"), (0, TF.reloadBloxd)(), {
          reason: "Outdated client",
          requiresRefresh: !0,
          canReconnect: !1
        };
        if (FF === AF.e.loadRecaptchaError.code) return console.error("Load recaptcha error, refreshing page"), (0, TF.reloadBloxd)(), {
          reason: "Failed to load recaptcha",
          requiresRefresh: !0,
          canReconnect: !1
        };
        for (const uF in AF.e) {
          const {
            code: SF,
            text: CF,
            canReconnect: hF
          } = AF.e[uF];
          if (SF === FF) {
            console.log("matched known error", FF, "leaving game");
            return {
              reason: "" === CF ? WF : CF,
              requiresRefresh: !1,
              canReconnect: hF,
              automaticallyReconnect: SF === AF.e.customGameUpdated.code || SF === AF.e.duplicateLobbyNameError.code
            }
          }
        }
        var bW;
        (console.log("Didn't match known error, leaving game"), 1006 === FF || 1001 === FF || hF) ? console.warn("Connection lost", FF, WF): (0, tS.ZA)(new Error("Unrecognised connection loss"), {
          code: String(FF),
          cause: null !== (bW = WF) && void 0 !== bW ? bW : "",
          ...SF,
          game: this.gameNameWithVariation,
          online: String(navigator.onLine),
          visibility: document.visibilityState
        });
        return {
          reason: `Either your internet isn't working or this is a bug.\nCode: ${FF}`,
          requiresRefresh: !1,
          canReconnect: !1
        }
      }
    }

    function OW(FF) {
      return FF < 1e3 ? "<1s" : FF < 5e3 ? "1-5s" : FF < 3e4 ? "5-30s" : FF < 3e5 ? "30s-5m" : ">5m"
    }
  },
  37412: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => US,
      f: () => lS
    });
    var CF, AF, uF, hF, bW, dF, PF, RF, iW, eF, EF, QF, rW, gW, tW, TF, aW, kW, qW, VF, NF, DF, LF, mW, OF, xW, ZF, oF, YF, MF, cW, GF, zW, IF, fF, yW, sF, nF, HF, KF, wF, XF, UF, BF, jW, vW, JF, pF, lF, FW, WW, SW, CW, AW, uW, hW, bS, dW, PW, RW, iS, eW, EW, QW, rS, gS, tS, TW, aS, kS, qS, VW, NW, DW, LW, mS, OW, xS, ZW, oW, YW, MW, cS, GW, zS, IW, fW, yS, sW, nW, HW, KW, wW, XW, UW, BW, jS, vS, JW, pW = SF(20),
      lW = SF(35972),
      FS = SF(37422),
      WS = SF(37427),
      SS = SF(8039),
      CS = SF(565),
      AS = SF(562),
      uS = SF(35269);
    let hS = (CF = (0, SS.type)("number"), AF = (0, SS.type)("number"), uF = (0, SS.type)("number"), hF = (0, SS.type)("number"), bW = (0, SS.type)("number"), dF = (0, SS.type)("number"), PF = (0, SS.type)("string"), RF = class extends SS.Schema {
        constructor() {
          super(...arguments), (0, FS.c)(this, "id", iW, this), (0, FS.c)(this, "amount", eF, this), (0, FS.c)(this, "x", EF, this), (0, FS.c)(this, "y", QF, this), (0, FS.c)(this, "z", rW, this), (0, FS.c)(this, "size", gW, this), (0, FS.c)(this, "attributes", tW, this)
        }
      }, iW = (0, WS.e)(RF.prototype, "id", [CF], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), eF = (0, WS.e)(RF.prototype, "amount", [AF], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), EF = (0, WS.e)(RF.prototype, "x", [uF], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), QF = (0, WS.e)(RF.prototype, "y", [hF], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), rW = (0, WS.e)(RF.prototype, "z", [bW], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), gW = (0, WS.e)(RF.prototype, "size", [dF], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 1
        }
      }), tW = (0, WS.e)(RF.prototype, "attributes", [PF], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "{}"
        }
      }), RF),
      bC = (TF = (0, SS.type)("string"), aW = (0, SS.type)("string"), kW = class extends SS.Schema {
        constructor() {
          super(...arguments), (0, FS.c)(this, "itemName", qW, this), (0, FS.c)(this, "enchantmentTier", VF, this)
        }
      }, qW = (0, WS.e)(kW.prototype, "itemName", [TF], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), VF = (0, WS.e)(kW.prototype, "enchantmentTier", [aW], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), kW),
      dS = (NF = (0, SS.type)("string"), DF = (0, SS.type)("string"), LF = (0, SS.type)("number"), mW = (0, SS.type)("number"), OF = (0, SS.type)("number"), xW = (0, SS.type)("float32"), ZF = (0, SS.type)("float32"), oF = (0, SS.type)("float32"), YF = (0, SS.type)("string"), MF = (0, SS.type)(["number"]), cW = (0, SS.type)("boolean"), GF = class extends SS.Schema {
        constructor() {
          super(...arguments), (0, FS.c)(this, "type", zW, this), (0, FS.c)(this, "name", IF, this), (0, FS.c)(this, "x", fF, this), (0, FS.c)(this, "y", yW, this), (0, FS.c)(this, "z", sF, this), (0, FS.c)(this, "xRotation", nF, this), (0, FS.c)(this, "yRotation", HF, this), (0, FS.c)(this, "zRotation", KF, this), (0, FS.c)(this, "followingEId", wF, this), (0, FS.c)(this, "followingOffset", XF, this), (0, FS.c)(this, "shouldMatchFollowingEntityRotation", UF, this)
        }
      }, zW = (0, WS.e)(GF.prototype, "type", [NF], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), IF = (0, WS.e)(GF.prototype, "name", [DF], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return ""
        }
      }), fF = (0, WS.e)(GF.prototype, "x", [LF], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), yW = (0, WS.e)(GF.prototype, "y", [mW], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), sF = (0, WS.e)(GF.prototype, "z", [OF], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), nF = (0, WS.e)(GF.prototype, "xRotation", [xW], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), HF = (0, WS.e)(GF.prototype, "yRotation", [ZF], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), KF = (0, WS.e)(GF.prototype, "zRotation", [oF], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), wF = (0, WS.e)(GF.prototype, "followingEId", [YF], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), XF = (0, WS.e)(GF.prototype, "followingOffset", [MF], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new SS.ArraySchema(0, 0, 0)
        }
      }), UF = (0, WS.e)(GF.prototype, "shouldMatchFollowingEntityRotation", [cW], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !0
        }
      }), GF),
      PS = (BF = (0, SS.type)("float32"), jW = (0, SS.type)("float32"), vW = (0, SS.type)("boolean"), JF = (0, SS.type)("boolean"), pF = (0, SS.type)("float32"), lF = (0, SS.type)("boolean"), FW = (0, SS.type)("string"), WW = (0, SS.type)("string"), SW = (0, SS.type)("string"), CW = (0, SS.type)("string"), AW = (0, SS.type)(["number"]), uW = (0, SS.type)("number"), hW = (0, SS.type)({
        map: bC
      }), bS = class extends dS {
        constructor() {
          super(...arguments), (0, FS.c)(this, "scale", dW, this), (0, FS.c)(this, "speed", PW, this), (0, FS.c)(this, "jumping", RW, this), (0, FS.c)(this, "crouching", iS, this), (0, FS.c)(this, "cameraPitch", eW, this), (0, FS.c)(this, "armSwinging", EW, this), (0, FS.c)(this, "heldItemName", QW, this), (0, FS.c)(this, "heldItemEnchantmentTier", rS, this), (0, FS.c)(this, "pose", gS, this), (0, FS.c)(this, "ridingVehicleEId", tS, this), (0, FS.c)(this, "meshOffset", TW, this), (0, FS.c)(this, "baseRenderHeading", aS, this), (0, FS.c)(this, "armour", kS, this)
        }
      }, dW = (0, WS.e)(bS.prototype, "scale", [BF], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 1
        }
      }), PW = (0, WS.e)(bS.prototype, "speed", [jW], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), RW = (0, WS.e)(bS.prototype, "jumping", [vW], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), iS = (0, WS.e)(bS.prototype, "crouching", [JF], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), eW = (0, WS.e)(bS.prototype, "cameraPitch", [pF], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), EW = (0, WS.e)(bS.prototype, "armSwinging", [lF], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), QW = (0, WS.e)(bS.prototype, "heldItemName", [FW], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), rS = (0, WS.e)(bS.prototype, "heldItemEnchantmentTier", [WW], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), gS = (0, WS.e)(bS.prototype, "pose", [SW], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "standing"
        }
      }), tS = (0, WS.e)(bS.prototype, "ridingVehicleEId", [CW], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), TW = (0, WS.e)(bS.prototype, "meshOffset", [AW], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new SS.ArraySchema(0, 0, 0)
        }
      }), aS = (0, WS.e)(bS.prototype, "baseRenderHeading", [uW], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), kS = (0, WS.e)(bS.prototype, "armour", [hW], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new SS.MapSchema
        }
      }), bS),
      RS = (qS = (0, SS.type)("string"), VW = (0, SS.type)("string"), NW = (0, SS.type)("string"), DW = (0, SS.type)("uint8"), LW = class extends PS {
        constructor() {
          super(...arguments), (0, FS.c)(this, "variation", mS, this), (0, FS.c)(this, "ownerDbId", OW, this), (0, FS.c)(this, "metaInfo", xS, this), (0, FS.c)(this, "aiState", ZW, this)
        }
      }, mS = (0, WS.e)(LW.prototype, "variation", [qS], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "default"
        }
      }), OW = (0, WS.e)(LW.prototype, "ownerDbId", [VW], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), xS = (0, WS.e)(LW.prototype, "metaInfo", [NW], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return ""
        }
      }), ZW = (0, WS.e)(LW.prototype, "aiState", [DW], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), LW);
    oW = (0, SS.type)("string"), YW = (0, SS.type)("string"), MW = (0, SS.type)("string"), cS = (0, SS.type)("string"), GW = class extends dS {
      constructor() {
        super(...arguments), (0, FS.c)(this, "meshKind", zS, this), (0, FS.c)(this, "meshOpts", IW, this), (0, FS.c)(this, "pose", fW, this), (0, FS.c)(this, "leaderboardTop", yS, this)
      }
    }, zS = (0, WS.e)(GW.prototype, "meshKind", [oW], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), IW = (0, WS.e)(GW.prototype, "meshOpts", [YW], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), fW = (0, WS.e)(GW.prototype, "pose", [MW], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), yS = (0, WS.e)(GW.prototype, "leaderboardTop", [cS], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    });

    function iC(FF) {
      return Object.keys(SS.Metadata.getFields(FF))
    }
    const eS = iC(RS);
    for (const FC of CS.t)
      if (!eS.includes(FC)) throw new Error(`Mob Schema is missing a networked property: "${FC}"`);
    const ES = iC((sW = (0, SS.type)("string"), nW = (0, SS.type)("float32"), HW = (0, SS.type)("float32"), KW = (0, SS.type)("float32"), wW = (0, SS.type)("float32"), XW = class extends dS {
      constructor() {
        super(...arguments), (0, FS.c)(this, "soundName", UW, this), (0, FS.c)(this, "volume", BW, this), (0, FS.c)(this, "refDistance", jS, this), (0, FS.c)(this, "maxHearDist", vS, this), (0, FS.c)(this, "rate", JW, this)
      }
    }, UW = (0, WS.e)(XW.prototype, "soundName", [sW], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return ""
      }
    }), BW = (0, WS.e)(XW.prototype, "volume", [nW], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return 1
      }
    }), jS = (0, WS.e)(XW.prototype, "refDistance", [HW], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return uS.g
      }
    }), vS = (0, WS.e)(XW.prototype, "maxHearDist", [KW], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return uS.c
      }
    }), JW = (0, WS.e)(XW.prototype, "rate", [wW], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return 1
      }
    }), XW));
    for (const FC of AS.e)
      if (!ES.includes(FC)) throw new Error(`AudioEntity Schema is missing a replicated property: "${FC}"`);
    var QS = SF(36878),
      rC = SF(1101),
      gC = SF(568),
      tC = SF(36651),
      TS = SF(3434),
      aC = SF(271),
      kC = SF(35671),
      qC = SF(36549),
      VS = SF(1834),
      NS = SF(35596),
      DS = SF(36907),
      LS = SF(35745),
      mC = SF(282),
      OS = SF.n(mC),
      xC = SF(36352),
      ZS = SF(35533),
      oS = SF(36482),
      YS = SF(36564);
    class MS {
      constructor(FF, WF) {
        this.bloxd = FF, this.eId = WF, this.iS = void 0, this.colyseusEntity = void 0, this.canSeeSub = void 0, this.canAttackSub = void 0, this.interactableSub = void 0, this.overlayColourSub = void 0, this.opacitySub = void 0, this.zIndexSub = void 0, this.multilineTextBoxSub = void 0, this.previousHidingMeshManagerState = void 0, this.meshKind = void 0, this.meshOpts = void 0, this.leaderboardTop = void 0, this.meshRebuildQueued = !1, this.DC = !1, this.iS = FF.iS
      }
      initClient(FF) {
        var WF, SF, CF;
        this.colyseusEntity = FF, this.meshKind = FF.meshKind, this.meshOpts = FF.meshOpts, this.leaderboardTop = FF.leaderboardTop, this.iS.qm.add([FF.x, FF.y, FF.z], 1, 1, null, null, !1, !1, this.eId), this.iS.qm.nWF(this.eId, "smoothToServerPos");
        const AF = "Person" === this.meshKind;
        this.iS.qm.nWF(this.eId, "meshRotation", {
          isServerControlled: !0,
          ...AF ? {
            defaultRotationsPerSecond: .5
          } : {},
          childrenNodeParams: AF ? [{
            nodeName: "HeadMesh",
            softTolerance: DS.k,
            hardTolerance: null
          }] : []
        }), this.updateHidingMeshMgr(), this.canSeeSub = pW.j.subscribe(`otherEntitySettings|${this.eId}|canSee`, (FF => {
          this.updateHidingMeshMgr()
        }));
        const uF = () => {
          const FF = this.iS.qm.kdF(this.eId);
          if (!FF) return;
          const WF = (0, LS.j)(this.eId);
          if ("number" === typeof FF.YWF) {
            var SF, CF, AF, uF;
            const hF = null === (SF = (0, VS.n)("head", null === (AF = this.getSpec()) || void 0 === AF || null === (uF = AF.opts.textures) || void 0 === uF ? void 0 : uF.head)) || void 0 === SF || null === (CF = SF.personModel) || void 0 === CF ? void 0 : CF.fullBody;
            return this.iS.dA.oWF.setPickable(FF.YWF, WF && !hF), void(0, ZS.updatePersonAttachmentPickability)(this.iS, this.eId, WF)
          }
          const hF = FF.mesh;
          if (hF)
            for (const bW of [hF, ...hF.getChildMeshes(!1)]) "JA" in bW && !bW.name.startsWith("Cape|") && (bW.JA = WF)
        };
        this.canAttackSub = pW.j.subscribe(`otherEntitySettings|${this.eId}|canAttack`, uF), this.interactableSub = pW.j.subscribe(`otherEntitySettings|${this.eId}|interactable`, uF), this.overlayColourSub = pW.j.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|overlayColour`, (FF => {
          this.updateOverlayColour(FF)
        })), this.opacitySub = pW.j.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|opacity`, (FF => {
          this.updateOpacity(FF)
        })), this.zIndexSub = pW.j.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|zIndex`, (FF => {
          this.updateZIndex(FF)
        }));
        const hF = this.iS.jSF[this.iS.vSF][this.eId];
        this.updateOverlayColour(null !== (WF = null === hF || void 0 === hF ? void 0 : hF.overlayColour) && void 0 !== WF ? WF : null), this.updateOpacity(null !== (SF = null === hF || void 0 === hF ? void 0 : hF.opacity) && void 0 !== SF ? SF : 1), this.updateZIndex(null !== (CF = null === hF || void 0 === hF ? void 0 : hF.zIndex) && void 0 !== CF ? CF : 0), this.multilineTextBoxSub = (0, NS.t)(this.iS, this.eId)
      }
      onChangeClient(FF, WF) {
        if ("xRotation" === FF || "yRotation" === FF || "zRotation" === FF)(0, NS.v)(this.iS, this.eId, FF, WF);
        else if ("pose" === FF) {
          const FF = this.iS.qm.xdF(this.eId);
          FF && (FF.pose = WF || "standing")
        } else "meshKind" === FF || "meshOpts" === FF ? (this[FF] = WF, this.queueMeshRebuild()) : "name" === FF && "" !== WF ? this.updateHidingMeshMgr() : "leaderboardTop" === FF && (this.leaderboardTop = WF, pW.j.Uu(`leaderboardTop|${this.eId}`, WF))
      }
      disposeClient() {
        this.DC = !0, this.iS.qm.deleteEntity(this.eId), pW.j.unsubscribe(this.canSeeSub), pW.j.unsubscribe(this.canAttackSub), pW.j.unsubscribe(this.interactableSub), pW.j.unsubscribe(this.overlayColourSub), pW.j.unsubscribe(this.opacitySub), pW.j.unsubscribe(this.zIndexSub), pW.j.unsubscribe(this.multilineTextBoxSub)
      }
      getCurrentHidingMeshMgrState() {
        var FF, WF;
        return {
          canSee: null !== (FF = null === (WF = this.iS.jSF[this.iS.vSF][this.eId]) || void 0 === WF ? void 0 : WF.canSee) && void 0 !== FF && FF,
          name: this.colyseusEntity.name,
          meshKind: this.meshKind,
          meshOpts: this.meshOpts
        }
      }
      updateHidingMeshMgr() {
        var FF, WF, SF;
        const {
          iS: CF
        } = this, {
          qm: AF
        } = CF, uF = this.getCurrentHidingMeshMgrState();
        if ((0, aC.be)(this.previousHidingMeshManagerState, uF)) return;
        if (this.previousHidingMeshManagerState = uF, AF.HWF(this.eId, "hidingMeshManager"), null === (FF = CF.jSF[CF.vSF][this.eId]) || void 0 === FF || !FF.canSee) return;
        const hF = this.getSpec();
        if (!hF) return;
        const {
          type: bW,
          opts: dF
        } = hF;
        "Person" === bW && (dF.textures = (0, VS.t)(dF.textures)), dF.eId = this.eId, AF.nWF(this.eId, "hidingMeshManager", {
          addMeshComponent: () => {
            var FF, WF, SF;
            "Leaderboard" === bW && (dF.leaderboardTop = this.leaderboardTop);
            const uF = this.bloxd.client.meshCreator.getEntityMesh(bW, dF, (FF => {
              var WF, SF;
              if ("number" === typeof FF) {
                var AF, uF, hF;
                const WF = CF.dA.oWF;
                WF.setEntityId(FF, this.eId);
                const SF = "Person" === bW && (null === (AF = (0, VS.n)("head", null === (hF = dF.textures) || void 0 === hF ? void 0 : hF.head)) || void 0 === AF || null === (uF = AF.personModel) || void 0 === uF ? void 0 : uF.fullBody);
                return void WF.setPickable(FF, (0, LS.j)(this.eId) && !SF)
              }
              const PF = FF;
              for (const bW of [PF, ...PF.getChildMeshes(!1)]) void 0 === bW.JA || bW.name.startsWith("Cape|") || (bW.JA = (0, LS.j)(this.eId), bW.metadata ??= new CF.dA.pA, bW.metadata.eId = this.eId);
              this.updateOpacity(null !== (WF = null === (SF = CF.jSF[CF.vSF][this.eId]) || void 0 === SF ? void 0 : SF.opacity) && void 0 !== WF ? WF : 1)
            }));
            if (!uF) return;
            const {
              YWF: hF,
              mesh: PF,
              meshOffset: RF,
              nameYOffset: iW,
              modelLoaded: eF
            } = uF;
            null === eF || void 0 === eF || eF.then((() => {
              var FF;
              (null === (FF = AF.kdF(this.eId)) || void 0 === FF ? void 0 : FF.mesh) === PF && (this.previousHidingMeshManagerState = null, this.updateHidingMeshMgr())
            }));
            const EF = null === hF ? null : CF.dA.oWF.rRF(hF, 0);
            if (AF.nWF(this.eId, AF.names.mesh, {
                YWF: hF,
                zPF: EF,
                mesh: PF,
                hEF: !1,
                yPF: "Leaderboard" !== bW,
                offset: RF.slice(),
                TEF: "ParticleEmitter" === bW && dF.followTargetMeshOffset ? FF => {
                  var WF;
                  OS().copy(FF, RF);
                  const SF = null === (WF = AF.edF(this.eId)) || void 0 === WF ? void 0 : WF.rA,
                    CF = void 0 === SF ? null : AF.xdF(SF);
                  if (CF) {
                    var uF, hF;
                    const WF = this.bloxd.getEntityHeading(null !== (uF = CF.ridingVehicleEId) && void 0 !== uF ? uF : SF, !0),
                      AF = Math.sin(WF),
                      bW = Math.cos(WF);
                    FF[0] += CF.meshOffset[0] * bW + CF.meshOffset[2] * AF, FF[1] += CF.meshOffset[1], FF[2] += CF.meshOffset[2] * bW - CF.meshOffset[0] * AF;
                    const dF = null !== (hF = CF.ridingVehicleEId) && void 0 !== hF ? hF : null;
                    null !== dF && (0, YS.e)(this.iS, dF, FF)
                  }
                } : null
              }), "Person" === bW) {
              var QF, rW, gW, tW;
              AF.nWF(this.eId, AF.names.meshAttachments, {
                personFullBody: null !== (QF = null === (rW = (0, VS.n)("head", null === (tW = dF.textures) || void 0 === tW ? void 0 : tW.head)) || void 0 === rW || null === (gW = rW.personModel) || void 0 === gW ? void 0 : gW.fullBody) && void 0 !== QF && QF
              });
              for (const FF of rC.v) {
                var TF, aW, kW;
                const WF = null === (TF = dF.textures) || void 0 === TF ? void 0 : TF[FF];
                WF && null !== (aW = (0, VS.n)(FF, WF)) && void 0 !== aW && null !== (kW = aW.attachments) && void 0 !== kW && kW.length && qC.c.Player.meshApi.updatePlayerCosmetic(this.eId, hF, FF, WF)
              }
              AF.nWF(this.eId, AF.names.moveState), AF.nWF(this.eId, "updateWalkingState", {
                YWF: hF,
                zPF: EF,
                walkingLegSwingDuration: DS.p
              }), AF.nWF(this.eId, "humanoidMesh", {
                YWF: hF,
                zPF: EF,
                heldItemPositionParams: {},
                maxWalkingAngleOverride: null
              }), AF.nWF(this.eId, "animator", {
                YWF: hF,
                zPF: EF,
                modelLifeformType: "Player"
              }), oS.d.hasAnimation("Person") && AF.nWF(this.eId, "rigAnimation", {
                target: "Person",
                YWF: hF
              }), AF.xdF(this.eId).pose = this.colyseusEntity.pose || "standing"
            } else if ("BloxdBlock" === bW && null !== hF) {
              AF.nWF(this.eId, "animator", {
                YWF: hF,
                zPF: EF,
                modelLifeformType: null
              });
              const FF = (0, tC.o)(dF.blockName);
              null !== FF && AF.nWF(this.eId, "rigAnimation", {
                target: FF,
                YWF: hF
              })
            }
            AF.tQF(this.eId, "entityName", {
              name: this.colyseusEntity.name,
              nameYOffset: iW
            }), this.bloxd.setEntityName(this.eId, this.colyseusEntity.name), !0 === dF.autoRotate && (AF.HWF(this.eId, "meshRotation"), AF.nWF(this.eId, "autoRotate"));
            const {
              lineToEId: qW
            } = dF;
            (0, gC.Q)(qW) || AF.nWF(this.eId, "lineToEntity", {
              lineToEId: qW
            });
            const VF = CF.jSF[CF.vSF][this.eId];
            this.updateOverlayColour(null !== (FF = null === VF || void 0 === VF ? void 0 : VF.overlayColour) && void 0 !== FF ? FF : null), this.updateOpacity(null !== (WF = null === VF || void 0 === VF ? void 0 : VF.opacity) && void 0 !== WF ? WF : 1), this.updateZIndex(null !== (SF = null === VF || void 0 === VF ? void 0 : VF.zIndex) && void 0 !== SF ? SF : 0)
          },
          removeMeshComponent: () => {
            "Person" !== bW && "BloxdBlock" !== bW || AF.HWF(this.eId, "rigAnimation"), AF.HWF(this.eId, AF.names.mesh), AF.KhF(this.eId, AF.names.meshAttachments) && AF.HWF(this.eId, AF.names.meshAttachments), AF.HWF(this.eId, "entityName"), AF.HWF(this.eId, "autoRotate"), AF.HWF(this.eId, "lineToEntity"), "Person" === bW ? (AF.HWF(this.eId, AF.names.moveState), AF.HWF(this.eId, "updateWalkingState"), AF.HWF(this.eId, "humanoidMesh"), AF.HWF(this.eId, "animator")) : "BloxdBlock" === bW && AF.HWF(this.eId, "animator")
          },
          hideDist: null !== (WF = dF.hideDist) && void 0 !== WF ? WF : 80,
          movingHideDist: null !== (SF = dF.hideDist) && void 0 !== SF ? SF : 120,
          displayOutsideLoadedChunk: dF.hideDist > 100,
          immediatelyUpdate: !0,
          IK: "BloxdBlock" === bW ? dF.blockName : bW
        })
      }
      queueMeshRebuild() {
        this.meshRebuildQueued || (this.meshRebuildQueued = !0, queueMicrotask((() => {
          this.meshRebuildQueued = !1, this.DC || this.updateHidingMeshMgr()
        })))
      }
      getSpec() {
        return (0, TS.j)({
          meshKind: this.meshKind,
          meshOpts: this.meshOpts
        })
      }
      updateOverlayColour(FF) {
        var WF, SF;
        if ("Person" !== this.meshKind) return;
        let CF = new kC.d(0, 0, 0, 0);
        if (null !== FF) {
          const WF = (0, aC.U)(FF);
          CF = new kC.d(WF[0] / 255, WF[1] / 255, WF[2] / 255, .5)
        }
        const AF = null !== (WF = null === (SF = this.iS.qm.kdF(this.eId)) || void 0 === SF ? void 0 : SF.YWF) && void 0 !== WF ? WF : null;
        null !== AF && qC.c.Player.meshApi.updateMeshOverlayColour(AF, CF)
      }
      updateZIndex(FF) {
        var WF;
        if ("Person" !== this.meshKind) return;
        const SF = null === (WF = this.iS.qm.kdF(this.eId)) || void 0 === WF ? void 0 : WF.YWF;
        "number" === typeof SF && this.iS.dA.oWF.setRenderingGroupId(SF, FF)
      }
      updateOpacity(FF) {
        const WF = this.iS.qm.kdF(this.eId);
        WF && ("number" !== typeof WF.YWF ? WF.mesh && "ParticleEmitter" !== this.meshKind && (0, xC.g)(WF.mesh, FF) : qC.c.Player.meshApi.updateMeshOpacity(WF.YWF, FF))
      }
    }
    var cC = SF(37418);
    class GS {
      constructor(FF, WF) {
        this.eId = WF, this.iS = void 0, this.schema = void 0, this.iS = FF.iS
      }
      initClient(FF) {
        this.schema = FF, this.iS.qm.add([FF.x, FF.y, FF.z], .1, .1, null, null, !1, !1, this.eId), this.iS.qm.nWF(this.eId, "smoothToServerPos"), cC.c.add(this.eId, this.copyOpts())
      }
      onChangeClient(FF) {
        AS.e.includes(FF) && cC.c.update(this.eId, this.copyOpts())
      }
      disposeClient() {
        cC.c.remove(this.eId), this.iS.qm.deleteEntity(this.eId)
      }
      copyOpts() {
        const {
          soundName: FF,
          volume: WF,
          refDistance: SF,
          maxHearDist: CF,
          rate: AF
        } = this.schema;
        return {
          soundName: FF,
          volume: WF,
          refDistance: SF,
          maxHearDist: CF,
          rate: AF
        }
      }
    }
    var zC = SF(2877),
      IS = SF(35256),
      fS = SF(5450),
      yC = SF(36191),
      sS = SF(2180),
      nS = SF(36597),
      HS = SF(7988),
      KS = SF(36914),
      wS = SF(36166),
      XS = SF(2418);
    class US {
      constructor(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
          CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => performance.now();
        this.odF = FF, this.iS = WF, this.setupBudgetMs = SF, this.now = CF, this.createStateCallbacks = void 0, this.roomStateCallbacks = void 0, this.allItems = {}, this.detachers = new Map, this.deferredSetups = new Map, this.queuedSetups = new Map, this.promotedSetups = new Set, this.setupBudgetLeftMs = void 0, this.lastRefillMs = void 0, this.roomState = void 0, this.onFrame = () => {
          this.setUpQueuedEntities(!0)
        }, this.eD = () => {
          this.setUpQueuedEntities(this.now() - this.lastRefillMs > 100)
        }, this.setUpPromoted = () => {
          for (const FF of this.promotedSetups) {
            this.promotedSetups.delete(FF);
            const WF = this.queuedSetups.get(FF);
            WF && (this.queuedSetups.delete(FF), this.timedSetup(WF, FF))
          }
        }, this.createStateCallbacks = (0, HS.getStateCallbacks)(FF), this.roomStateCallbacks = this.createStateCallbacks(FF.state), this.roomState = FF.state, this.setupBudgetLeftMs = SF, this.lastRefillMs = CF()
      }
      setup() {
        this.setupEntityHandlers(), this.setupItemHandlers(), this.registerCleanups(), this.odF.onStateChange(this.setUpPromoted), this.iS.on("beforeInputs", this.onFrame), this.iS.on("lF", this.eD)
      }
      setUpQueuedEntities(FF) {
        var WF;
        if ((null === (WF = (0, sS.e)().client.getMsgHandler()) || void 0 === WF ? void 0 : WF.odF) !== this.odF) return this.iS.off("beforeInputs", this.onFrame), this.iS.off("lF", this.eD), this.queuedSetups.clear(), void this.promotedSetups.clear();
        if (FF && (this.setupBudgetLeftMs = this.setupBudgetMs, this.lastRefillMs = this.now()), this.setUpPromoted(), 0 !== this.queuedSetups.size)
          for (OS().copy(BS, this.iS.qm.fD(this.iS.vSF)); this.setupBudgetLeftMs > 0;) {
            const FF = this.nearestQueued(BS);
            if (null === FF) return;
            this.setUpIfQueued(FF), this.setUpPromoted()
          }
      }
      nearestQueued(FF) {
        let WF = null,
          SF = 1 / 0;
        return this.queuedSetups.forEach(((CF, AF) => {
          const uF = function(FF, WF) {
            return (WF.x - FF[0]) ** 2 + (WF.y - FF[1]) ** 2 + (WF.z - FF[2]) ** 2
          }(FF, CF);
          (null === WF || uF < SF) && (WF = AF, SF = uF)
        })), WF
      }
      setUpOrQueue(FF, WF) {
        0 === this.queuedSetups.size && this.setupBudgetLeftMs > 0 || this.mustSetUpNow(FF, WF) ? this.timedSetup(FF, WF) : this.queuedSetups.set(WF, FF)
      }
      mustSetUpNow(FF, WF) {
        const SF = this.iS.UhF;
        if (WF === SF) return !0;
        const CF = this.roomState.entities.get(SF);
        return !(!CF || CF.ridingVehicleEId !== WF && CF.followingEId !== WF) || (jC(FF.type) === QS.c || (0, sS.e)().getFollowingEntities(WF).length > 0)
      }
      setUpIfQueued(FF) {
        const WF = this.queuedSetups.get(FF);
        WF && (this.queuedSetups.delete(FF), this.timedSetup(WF, FF))
      }
      promoteIfQueued(FF) {
        null !== FF && this.queuedSetups.has(FF) && this.promotedSetups.add(FF)
      }
      timedSetup(FF, WF) {
        const SF = this.now();
        this.setupEntity(FF, WF), this.setupBudgetLeftMs -= this.now() - SF
      }
      setupEntityHandlers() {
        this.roomStateCallbacks.entities.EL(((FF, WF) => {
          this.iS.UhF ? this.setUpOrQueue(FF, WF) : this.deferEntitySetupUntilInitInfo(FF, WF)
        })), this.roomStateCallbacks.entities.eWF(((FF, WF) => {
          const SF = this.deferredSetups.get(WF);
          SF && (pW.j.unsubscribe(SF), this.deferredSetups.delete(WF)), this.queuedSetups.delete(WF), this.detach(WF), (0, sS.e)().client.disposeEntity(WF)
        }))
      }
      deferEntitySetupUntilInitInfo(FF, WF) {
        const SF = pW.j.uR("initInfoReceived", (() => {
          this.deferredSetups.delete(WF), this.setUpOrQueue(FF, WF)
        }));
        this.deferredSetups.set(WF, SF), (0, zC.onGameResetOnce)((() => {
          this.deferredSetups.get(WF) === SF && (pW.j.unsubscribe(SF), this.deferredSetups.delete(WF)), (0, sS.e)().updatePositionAndPhysics(this.iS.vSF, {
            type: fS.m.DEFAULT,
            tier: null
          }, !0);
          const FF = this.iS.qm.bdF(this.iS.vSF);
          FF && (FF.movementType = fS.j.NORMAL)
        }))
      }
      setupEntity(FF, WF) {
        const SF = WF === this.iS.UhF;
        if (SF)(0, sS.e)().client.xAF(this.iS.vSF, null, null);
        else {
          const {
            type: SF
          } = FF, CF = jC(SF);
          if (void 0 === CF) return void
          function(FF, WF) {
            const SF = String(FF);
            if (vC.has(SF)) return;
            vC.add(SF);
            const CF = SF.length > 80 ? `${SF.slice(0,80)}...` : SF,
              AF = `No client handler for entity type ${JSON.stringify(CF)}, so entity ${WF} is not set up`;
            console.warn(AF), (0, XS.h)("uncaught", AF, "unknown_entity_type")
          }(SF, WF);
          (0, sS.e)().client.xAF(WF, FF, new CF((0, sS.e)(), WF, SF))
        }
        const CF = this.createStateCallbacks(FF);
        if (SF) return this.setupMapSchemaCallbacks(WF, FF, CF, "armour"), this.setupScalarField(WF, FF, CF, "scale"), this.setupScalarField(WF, FF, CF, "ridingVehicleEId"), this.setupScalarField(WF, FF, CF, "followingEId"), this.setupScalarField(WF, FF, CF, "followingOffset"), void this.setupScalarField(WF, FF, CF, "shouldMatchFollowingEntityRotation");
        for (const AF of iC(FF.constructor)) FF[AF] instanceof SS.MapSchema ? this.setupMapSchemaCallbacks(WF, FF, CF, AF) : this.setupScalarField(WF, FF, CF, AF)
      }
      setupMapSchemaCallbacks(FF, WF, SF, CF) {
        const AF = SF[CF],
          uF = new Map;
        AF.EL(((SF, AF) => {
          if (this.onEntityFieldChange(FF, WF, CF, {
              key: AF,
              value: SF
            }), !(SF instanceof SS.Schema)) return;
          const hF = this.createStateCallbacks(SF),
            bW = [];
          for (const uF of iC(SF.constructor)) bW.push(this.listenForFutureChanges(hF, uF, (() => {
            this.onEntityFieldChange(FF, WF, CF, {
              key: AF,
              value: SF
            })
          })));
          uF.set(AF, (() => {
            for (const FF of bW) FF()
          }))
        })), AF.eWF(((SF, AF) => {
          var hF;
          null === (hF = uF.get(AF)) || void 0 === hF || hF(), uF.delete(AF), this.onEntityFieldChange(FF, WF, CF, {
            key: AF,
            value: null
          })
        })), this.addDetacher(FF, (() => {
          for (const FF of uF.values()) FF();
          uF.clear()
        }))
      }
      setupScalarField(FF, WF, SF, CF) {
        this.onEntityFieldChange(FF, WF, CF, WF[CF]);
        const AF = this.listenForFutureChanges(SF, CF, (SF => {
          this.onEntityFieldChange(FF, WF, CF, SF)
        }));
        this.addDetacher(FF, AF)
      }
      addDetacher(FF, WF) {
        let SF = this.detachers.get(FF);
        SF || (SF = [], this.detachers.set(FF, SF)), SF.push(WF)
      }
      detach(FF) {
        for (const SF of null !== (WF = this.detachers.get(FF)) && void 0 !== WF ? WF : []) {
          var WF;
          SF()
        }
        this.detachers.delete(FF)
      }
      listenForFutureChanges(FF, WF, SF) {
        return FF.listen(WF, SF, !1)
      }
      onEntityFieldChange(FF, WF, SF, CF) {
        switch (SF) {
          case "ridingVehicleEId": {
            this.promoteIfQueued(CF);
            const WF = this.iS.qm.xdF((0, IS.e)(FF));
            WF && (WF.ridingVehicleEId = CF);
            break
          }
          case "armour":
            this.handleArmourChange(FF, CF);
            break;
          case "followingEId":
            this.promoteIfQueued(CF), this.handleFollowingEIdChange(FF, WF, CF);
            break;
          case "xRotation":
          case "yRotation":
          case "zRotation":
            this.handleRotationChange(FF, SF, CF);
            break;
          case "scale":
            this.handleScaleChange(FF, CF);
            break;
          case "baseRenderHeading":
            this.handleBaseRenderHeadingChange(FF, CF);
            break;
          case "followingOffset":
            this.handleFollowingOffsetChange(FF, CF);
            break;
          case "shouldMatchFollowingEntityRotation":
            this.handleShouldMatchFollowingEntityRotationChange(FF, CF);
            break;
          case "x":
          case "y":
          case "z":
            return void this.handlePositionChange(FF, SF, CF)
        }(0, sS.e)().client.updateEntityField(FF, SF, CF)
      }
      handleArmourChange(FF, WF) {
        var SF, CF;
        const {
          key: AF,
          value: uF
        } = WF;
        (0, qC.z)(FF, AF, null !== (SF = null === uF || void 0 === uF ? void 0 : uF.itemName) && void 0 !== SF ? SF : null, null !== (CF = null === uF || void 0 === uF ? void 0 : uF.enchantmentTier) && void 0 !== CF ? CF : null)
      }
      handleFollowingEIdChange(FF, WF, SF) {
        const CF = (0, IS.e)(FF),
          AF = CF === this.iS.vSF;
        if (this.iS.qm.HWF(CF, this.iS.qm.names.mV), SF) this.iS.qm.HWF(CF, "smoothToServerPos"), this.iS.qm.nWF(CF, this.iS.qm.names.mV, {
          rA: (0, IS.e)(SF),
          offset: Array.from(WF.followingOffset),
          EdF: WF.shouldMatchFollowingEntityRotation,
          tPF: !0,
          TdF: (FF, CF) => {
            if (OS().copy(FF, WF.followingOffset), WF.ridingVehicleEId === SF) {
              const WF = (0, IS.e)(SF),
                AF = (0, sS.e)().getEntityHeading(WF, CF);
              OS().Sh(FF, FF, OS().ZERO, AF)
            }
          }
        });
        else if (!AF) {
          this.iS.qm.KhF(CF, "smoothToServerPos") || this.iS.qm.nWF(CF, "smoothToServerPos");
          const FF = this.iS.qm.getState(CF, "smoothToServerPos"),
            WF = this.iS.qm.ZCF(CF).position;
          (0, wS.setServerPosition)(FF, WF[0], WF[1], WF[2])
        }
      }
      handleRotationChange(FF, WF, SF) {
        const CF = "xRotation" === WF ? 0 : "yRotation" === WF ? 1 : 2;
        for (const AF of (0, sS.e)().getFollowingEntities(FF)) {
          const FF = this.iS.qm.getState(AF, "meshRotation"),
            WF = this.iS.qm.edF(AF);
          FF && WF.EdF && (FF.serverSetRotation[CF] = SF)
        }
      }
      handleScaleChange(FF, WF) {
        const SF = (0, IS.e)(FF);
        if (pW.j.Uu(`entityScale|${SF}`, WF), SF === this.iS.vSF) {
          var CF;
          (0, sS.e)().removeFromEyeHeightCache(SF);
          const FF = this.iS.qm.bdF(this.iS.vSF),
            WF = null !== (CF = null === FF || void 0 === FF ? void 0 : FF.physicsState) && void 0 !== CF ? CF : {
              type: fS.m.DEFAULT,
              tier: null
            };
          (0, sS.e)().updatePositionAndPhysics(this.iS.vSF, WF, !1)
        }
        const AF = (0, sS.e)().getLifeformType(SF);
        if (null === AF) return;
        const {
          physicsBodyWidth: uF,
          physicsBodyHeight: hF
        } = (0, KS.g)(WF, AF);
        this.iS.qm.iPF(SF, uF, hF, uF)
      }
      handleBaseRenderHeadingChange(FF, WF) {
        const SF = this.iS.qm.getState(FF, "meshRotation");
        SF && (SF.baseRenderRotation[1] = WF);
        for (const CF of (0, sS.e)().getFollowingEntities(FF)) {
          const FF = this.iS.qm.getState(CF, "meshRotation"),
            SF = this.iS.qm.edF(CF);
          FF && SF.EdF && (FF.baseRenderRotation[1] = WF)
        }
      }
      handleFollowingOffsetChange(FF, WF) {
        const SF = this.iS.qm.edF((0, IS.e)(FF));
        if (SF && SF.offset) {
          const FF = WF ? Array.from(WF) : OS().ZERO;
          SF.offset[0] = FF[0], SF.offset[1] = FF[1], SF.offset[2] = FF[2]
        }
      }
      handleShouldMatchFollowingEntityRotationChange(FF, WF) {
        const SF = this.iS.qm.edF((0, IS.e)(FF));
        SF && (SF.EdF = null === WF || void 0 === WF || WF)
      }
      handlePositionChange(FF, WF, SF) {
        if (this.iS.qm.KhF(FF, "smoothToServerPos")) {
          const CF = this.iS.qm.getState(FF, "smoothToServerPos");
          (0, wS.setServerPositionAxis)(CF, JS[WF], SF)
        }
      }
      setupItemHandlers() {
        this.roomStateCallbacks.items.EL(((FF, WF) => {
          this.allItems[WF] = FF;
          const SF = (0, lW.c)(this.iS).cantPickUpItem(WF);
          (0, yC.l)(this.iS, WF, [FF.x, FF.y, FF.z], FF.id, FF.amount, JSON.parse(FF.attributes), SF, FF.size);
          const CF = this.createStateCallbacks(FF);
          for (const AF of iC(hS)) this.onItemFieldChange(WF, AF, FF[AF]), this.addDetacher(WF, this.listenForFutureChanges(CF, AF, (FF => {
            this.onItemFieldChange(WF, AF, FF)
          })))
        })), this.roomStateCallbacks.items.eWF(((FF, WF) => {
          delete this.allItems[WF], this.detach(WF), this.iS.qm.KhF(WF, this.iS.qm.names.itemState) && this.iS.qm.deleteEntity(WF), (0, lW.c)(this.iS).disposeEntity(WF)
        }))
      }
      onItemFieldChange(FF, WF, SF) {
        if (WF in JS) {
          if (this.iS.qm.KhF(FF, "itemState")) {
            const CF = this.iS.qm.getState(FF, "smoothToServerPos");
            (0, wS.setServerPositionAxis)(CF, JS[WF], SF)
          }
          return
        }
        if (!this.iS.qm.KhF(FF, "itemState")) return;
        const CF = this.iS.qm.getState(FF, "itemState");
        CF[WF] = "attributes" === WF ? JSON.parse(SF) : SF, "amount" === WF && (CF.creationTime = Date.now())
      }
      registerCleanups() {
        (0, zC.onGameResetOnce)((() => {
          this.iS.qm.HWF(this.iS.vSF, this.iS.qm.names.mV)
        })), (0, zC.onGameResetOnce)((() => {
          for (const FF in this.allItems) this.iS.qm.deleteEntity(FF)
        })), (0, zC.onGameResetOnce)((() => {
          for (const FF of [...this.detachers.keys()]) this.detach(FF)
        })), (0, zC.onGameResetOnce)((() => {
          (0, lW.c)(this.iS).clear();
          for (const FF of (0, sS.e)().client.iterateEntityIds())(0, sS.e)().client.disposeEntity(FF)
        }))
      }
    }
    const BS = [0, 0, 0];

    function jC(FF) {
      if ("string" !== typeof FF) return;
      const WF = FF.indexOf("|"),
        SF = -1 === WF ? FF : FF.slice(0, WF),
        CF = lS();
      return Object.hasOwn(CF, SF) ? CF[SF] : void 0
    }
    const vC = new Set;
    const JS = {
      x: 0,
      y: 1,
      z: 2
    };
    let pS = null;

    function lS() {
      return null !== pS || (pS = {
        ...Object.fromEntries(AS.f.map((FF => {
          const {
            IK: WF
          } = (0, nS.e)(FF);
          return [FF, WF]
        }))),
        Pebble: QS.c,
        Snowball: QS.c,
        "Snowball Launcher": QS.c,
        "Reinforced Pebble": QS.c,
        Bullet: QS.c,
        "Reinforced Ball": QS.c,
        Ball: QS.c,
        Mango: QS.c,
        "Moonstone Orb": QS.c,
        ...Object.fromEntries(CS.x.map((FF => [(0, aC.$b)(FF), QS.c]))),
        Arrow: QS.c,
        "Arrow of Speed": QS.c,
        "Arrow of Poison": QS.c,
        "Arrow of Slowness": QS.c,
        "Arrow of Weakness": QS.c,
        "Arrow of Knockback": QS.c,
        "Arrow of Strength": QS.c,
        "Arrow of Invisibility": QS.c,
        "Arrow of Jumping": QS.c,
        "Arrow of Defense": QS.c,
        "Arrow of Instant Healing": QS.c,
        "Arrow of Instant Damage": QS.c,
        "Arrow of Regeneration": QS.c,
        "Arrow of Haste": QS.c,
        "Arrow of Shield": QS.c,
        "Arrow of Double Jump": QS.c,
        "Arrow of Heat Resistance": QS.c,
        "Arrow of X-Ray Vision": QS.c,
        "Arrow of Mining Yield": QS.c,
        "Arrow of Brain Rot": QS.c,
        "Arrow of Milk": QS.c,
        Fireball: QS.c,
        "Bouncy Bomb": QS.c,
        RPG: QS.c,
        "Obby RPG": QS.c,
        "Super RPG": QS.c,
        "Grenade Launcher": QS.c,
        Iceball: QS.c,
        Coconut: QS.c,
        "Splash Speed Potion": QS.c,
        "Splash Defense Potion": QS.c,
        "Splash Strength Potion": QS.c,
        "Splash Invisibility Potion": QS.c,
        "Splash Jump Potion": QS.c,
        "Splash Knockback Potion": QS.c,
        "Splash Poison Potion": QS.c,
        "Splash Speed Potion II": QS.c,
        "Splash Defense Potion II": QS.c,
        "Splash Strength Potion II": QS.c,
        "Splash Jump Potion II": QS.c,
        "Splash Knockback Potion II": QS.c,
        "Splash Poison Potion II": QS.c,
        "Splash Slowness Potion": QS.c,
        "Splash Slowness Potion II": QS.c,
        "Splash Weakness Potion": QS.c,
        "Splash Weakness Potion II": QS.c,
        "Splash Milk Potion": QS.c,
        "Splash Instant Damage Potion": QS.c,
        "Splash Instant Damage Potion II": QS.c,
        "Splash Instant Healing Potion": QS.c,
        "Splash Instant Healing Potion II": QS.c,
        "Splash Regeneration Potion": QS.c,
        "Splash Regeneration Potion II": QS.c,
        "Splash Haste Potion": QS.c,
        "Splash Haste Potion II": QS.c,
        "Splash Shield Potion": QS.c,
        "Splash Shield Potion II": QS.c,
        "Splash Double Jump Potion": QS.c,
        "Splash Heat Resistance Potion": QS.c,
        "Splash X-Ray Vision Potion": QS.c,
        "Splash Mining Yield Potion": QS.c,
        "Splash Mining Yield Potion II": QS.c,
        "Splash Brain Rot Potion": QS.c,
        "Yellow Paintball Gun": QS.c,
        "White Paintball Gun": QS.c,
        "Red Paintball Gun": QS.c,
        "Purple Paintball Gun": QS.c,
        "Pink Paintball Gun": QS.c,
        "Orange Paintball Gun": QS.c,
        "Magenta Paintball Gun": QS.c,
        "Lime Paintball Gun": QS.c,
        "Light Gray Paintball Gun": QS.c,
        "Light Blue Paintball Gun": QS.c,
        "Green Paintball Gun": QS.c,
        "Gray Paintball Gun": QS.c,
        "Cyan Paintball Gun": QS.c,
        "Brown Paintball Gun": QS.c,
        "Blue Paintball Gun": QS.c,
        "Black Paintball Gun": QS.c,
        "Yellow Heavy Paintball Gun": QS.c,
        "White Heavy Paintball Gun": QS.c,
        "Red Heavy Paintball Gun": QS.c,
        "Purple Heavy Paintball Gun": QS.c,
        "Pink Heavy Paintball Gun": QS.c,
        "Orange Heavy Paintball Gun": QS.c,
        "Magenta Heavy Paintball Gun": QS.c,
        "Lime Heavy Paintball Gun": QS.c,
        "Light Gray Heavy Paintball Gun": QS.c,
        "Light Blue Heavy Paintball Gun": QS.c,
        "Green Heavy Paintball Gun": QS.c,
        "Gray Heavy Paintball Gun": QS.c,
        "Cyan Heavy Paintball Gun": QS.c,
        "Brown Heavy Paintball Gun": QS.c,
        "Blue Heavy Paintball Gun": QS.c,
        "Black Heavy Paintball Gun": QS.c,
        "Toxin Ball": QS.c,
        "Splash Aura XP Potion": QS.c,
        "Splash Aura XP Potion II": QS.c,
        "Arrow of Aura XP": QS.c,
        Firecracker: QS.c,
        "Rainbow Firecracker": QS.c,
        "White Firecracker": QS.c,
        "Orange Firecracker": QS.c,
        "Magenta Firecracker": QS.c,
        "Light Blue Firecracker": QS.c,
        "Yellow Firecracker": QS.c,
        "Lime Firecracker": QS.c,
        "Pink Firecracker": QS.c,
        "Gray Firecracker": QS.c,
        "Light Gray Firecracker": QS.c,
        "Cyan Firecracker": QS.c,
        "Purple Firecracker": QS.c,
        "Blue Firecracker": QS.c,
        "Brown Firecracker": QS.c,
        "Green Firecracker": QS.c,
        "Red Firecracker": QS.c,
        "Black Firecracker": QS.c,
        "Firecracker Pebble": QS.c,
        "Rainbow Firecracker Pebble": QS.c,
        "White Firecracker Pebble": QS.c,
        "Orange Firecracker Pebble": QS.c,
        "Magenta Firecracker Pebble": QS.c,
        "Light Blue Firecracker Pebble": QS.c,
        "Yellow Firecracker Pebble": QS.c,
        "Lime Firecracker Pebble": QS.c,
        "Pink Firecracker Pebble": QS.c,
        "Gray Firecracker Pebble": QS.c,
        "Light Gray Firecracker Pebble": QS.c,
        "Cyan Firecracker Pebble": QS.c,
        "Purple Firecracker Pebble": QS.c,
        "Blue Firecracker Pebble": QS.c,
        "Brown Firecracker Pebble": QS.c,
        "Green Firecracker Pebble": QS.c,
        "Red Firecracker Pebble": QS.c,
        "Black Firecracker Pebble": QS.c,
        "Blinding Pebble": QS.c,
        Poop: QS.c,
        "Wood Boomerang": QS.c,
        "Stone Boomerang": QS.c,
        "Iron Boomerang": QS.c,
        "Gold Boomerang": QS.c,
        "Diamond Boomerang": QS.c,
        "Amethite Boomerang": QS.c,
        "Magmasteel Boomerang": QS.c,
        "Rubellite Boomerang": QS.c,
        "Serpentite Boomerang": QS.c,
        "Moonstone Boomerang": QS.c,
        "67 Base Projectile": QS.c,
        "67 Boosted Projectile": QS.c,
        "Capitano Grenade": QS.c,
        "Scatter Pellet": QS.c,
        "Lucky Bomb": QS.c,
        "Unlucky Bomb": QS.c,
        "Swap Orb": QS.c,
        Mesh: MS,
        AudioEntity: GS
      }), pS
    }
  },
  37450: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => CW,
      h: () => YW,
      k: () => VW,
      m: () => MW
    });
    var CF = SF(2877),
      AF = SF(7670),
      uF = SF(35206),
      hF = SF(1249),
      bW = SF(35243),
      dF = SF(37418),
      PF = SF(37356),
      RF = SF(2940),
      iW = SF(36272),
      eF = SF(1101),
      EF = SF(220),
      QF = SF(20),
      rW = SF(1594),
      gW = SF(89),
      tW = SF(33),
      TF = SF(1621),
      aW = SF(1079),
      kW = SF(2264);
    class qW {
      constructor(FF) {
        this.storeForMs = FF, this.clicks = new kW.c
      }
      click() {
        this.clicks.enqueue(Date.now());
        const FF = Date.now() - this.storeForMs;
        for (; this.clicks.size > 0 && this.clicks.peek() < FF;) this.clicks.dequeue()
      }
      getNumClicksInMs(FF) {
        let WF = 0;
        return this.clicks.forEach((SF => {
          SF > Date.now() - FF && WF++
        })), WF
      }
      getMaxClickSeparationInMs(FF) {
        if (0 === this.clicks.size) return this.storeForMs;
        let WF = 0,
          SF = Date.now() - FF;
        this.clicks.forEach((CF => {
          CF < Date.now() - FF || (WF = Math.max(WF, Math.abs(CF - SF)), SF = CF)
        }));
        const CF = Math.abs(Date.now() - SF);
        return Math.max(WF, CF)
      }
    }
    class VF {
      constructor(FF) {
        this.storeForMs = FF, this.clickDownDurations = new kW.c
      }
      registerClickDownDuration(FF) {
        this.clickDownDurations.enqueue({
          dur: FF,
          atTime: Date.now()
        });
        const WF = Date.now() - this.storeForMs;
        for (; this.clickDownDurations.size > 0 && this.clickDownDurations.peek().atTime < WF;) this.clickDownDurations.dequeue()
      }
      clickDownDurationsCheck(FF) {
        if (FF > this.storeForMs) return console.error("overDuration is greater than storeForMs"), "0:0";
        let WF = 0,
          SF = 0;
        return this.clickDownDurations.forEach((CF => {
          CF.atTime > Date.now() - FF && (WF++, SF = Math.max(SF, CF.dur))
        })), `${WF}:${SF}`
      }
    }
    var NF = SF(35009),
      DF = SF(37454),
      LF = SF(11),
      mW = SF(2180),
      OF = SF(1175),
      xW = SF(37392),
      ZF = SF(3536),
      oF = SF(132),
      YF = SF(36600),
      MF = SF(36831),
      cW = SF(568),
      GF = SF(35e3),
      zW = SF(8242),
      IF = SF(1085),
      fF = SF(161),
      yW = SF(37461),
      sF = SF(37463),
      nF = SF(37468),
      HF = SF(36538),
      KF = SF(35052),
      wF = SF(1475),
      XF = SF(35131);
    const UF = {
      forward: "freeCamForward",
      backward: "freeCamBackward",
      left: "freeCamLeft",
      right: "freeCamRight",
      jump: "freeCamUp",
      crouch: "freeCamDown"
    };

    function BF() {
      var FF;
      const WF = (0, mW.e)().client;
      return (null === WF || void 0 === WF ? void 0 : WF.isReplayMode()) && (null === (FF = WF.freeCameraController) || void 0 === FF ? void 0 : FF.isEnabled())
    }

    function jW(FF) {
      const WF = FF.on.bind(FF);
      FF.on = (FF, SF) => {
        TF.E.has(FF) ? WF(FF, SF) : WF(FF, (WF => {
          var CF;
          return null !== (CF = (0, mW.e)().client) && void 0 !== CF && CF.isReplayMode() ? function(FF) {
            return FF in UF
          }(FF) && BF() ? SF(WF) : void 0 : SF(WF)
        }))
      }
    }
    const vW = 1;
    let JF, pF = vW,
      lF = 0;
    const FW = !0;
    let WW = FW;
    rW.d.subscribe("_ignoreBasicBoards", (FF => {
      WW = FF
    })), (0, CF.onGameReset)((() => {
      WW = FW
    }));
    let SW = null;
    const CW = () => SW;
    let AW, uW, hW;
    var bS, dW, PW, RW, iS, eW, EW, QW, rS;
    const gS = [2, 0, 1, 8, 3, 14, "i", 7, 83, "f", 125, 255, "length", "undefined", void 0, 249, "c", 63, 6, "fromCodePoint", 12, "push", 5, "h", 228, "a", "g", 91, 8191, 88, 13, 184, 182, 98, 44, 158, null, 19, 144, "b", 82, "e", "d", 30, 76, 149, 67, 183, !1, 231, 155, 93, 161, 1023, 65536, 4, 10, 55296, 56320, 128, 26, 31, 15, 18, 74, 246, 113, 106, 9, 123, 192, 224, 21, 58, 198, 240, 204, 212, 127, 36, 171, 81, 135, 124, 203, 172, 233, 16, "K", 512, 22, 102, 187, 147, 71, 37, 238, 53, 56319, 57343, 197, 65535, 42, 78, 24, 32, 239, 64, 165, 199, 194, 193];

    function tS(...FF) {
      return FF[gS[12]] = gS[2], typeof bS[FF[gS[1]]] === gS[13] ? bS[FF[gS[1]]] = function(...FF) {
        for (qS(FF[gS[12]] = gS[2], FF[gS[5]] = '~5:@u1=8!|UDNC<GXhZMqtT*pgkacFYRi;&6]$v9/J4{W"s?Iw)}BlQ>7fPxEOSKy`LV3oAr,jzH(#0_[^+bd.e2n%m', FF[gS[0]] = "" + (FF[gS[1]] || ""), FF[gS[4]] = FF[gS[0]].length, FF[gS[10]] = [], FF[-gS[8]] = gS[1], FF[gS[9]] = gS[1], FF[gS[7]] = -gS[2]), FF[gS[3]] = gS[1]; FF[gS[3]] < FF[gS[4]]; FF[gS[3]]++)
          if (FF[gS[6]] = FF[gS[5]].indexOf(FF[gS[0]][FF[gS[3]]]), FF[gS[6]] !== -gS[2])
            if (FF[gS[7]] < gS[1]) FF[gS[7]] = FF[gS[6]];
            else {
              qS(FF[gS[7]] += FF[gS[6]] * gS[27], FF[-gS[8]] |= FF[gS[7]] << FF[gS[9]], FF[gS[9]] += (FF[gS[7]] & gS[28]) > gS[29] ? gS[30] : gS[5]);
              do {
                qS(FF[gS[10]].push(FF[-gS[8]] & gS[11]), FF[-gS[8]] >>= gS[3], FF[gS[9]] -= gS[3])
              } while (FF[gS[9]] > gS[7]);
              FF[gS[7]] = -gS[2]
            } return FF[gS[7]] > -gS[2] && FF[gS[10]].push((FF[-gS[8]] | FF[gS[7]] << FF[gS[9]]) & gS[11]), TW(FF[gS[10]])
      }(dW[FF[gS[1]]]) : bS[FF[gS[1]]]
    }

    function TW(...FF) {
      return FF[gS[12]] = gS[2], typeof RW !== gS[13] && RW ? (new RW).decode(new iS(FF[gS[1]])) : typeof eW !== gS[13] && eW ? eW.from(FF[gS[1]]).toString("utf-8") : rS(FF[gS[1]])
    }

    function aS(...FF) {
      if (FF[gS[12]] = gS[4], FF[gS[1]] === function(...FF) {
          return FF[gS[12]] = gS[2], typeof bS[FF[gS[1]]] === gS[13] ? bS[FF[gS[1]]] = function(...FF) {
            for (qS(FF[gS[12]] = gS[2], FF[gS[25]] = '"nqMGDOcvWQ!|JAdL/S@e`^3{xFH2Z+igm;tz5sX.up~0[NjlUoBT8#6,=7$]h:r>14)*?yVYP_KI}<E%kCbR9&wf(a', FF[gS[0]] = "" + (FF[gS[1]] || ""), FF[gS[24]] = FF[gS[0]].length, FF[-gS[22]] = [], FF[gS[22]] = gS[1], FF[gS[18]] = gS[1], FF[gS[26]] = -gS[2]), FF[gS[23]] = gS[1]; FF[gS[23]] < FF[gS[24]]; FF[gS[23]]++)
              if (FF[gS[6]] = FF[gS[25]].indexOf(FF[gS[0]][FF[gS[23]]]), FF[gS[6]] !== -gS[2])
                if (FF[gS[26]] < gS[1]) FF[gS[26]] = FF[gS[6]];
                else {
                  qS(FF[gS[26]] += FF[gS[6]] * gS[27], FF[gS[22]] |= FF[gS[26]] << FF[gS[18]], FF[gS[18]] += (FF[gS[26]] & gS[28]) > gS[29] ? gS[30] : gS[5]);
                  do {
                    qS(FF[-gS[22]].push(FF[gS[22]] & gS[11]), FF[gS[22]] >>= gS[3], FF[gS[18]] -= gS[3])
                  } while (FF[gS[18]] > gS[7]);
                  FF[gS[26]] = -gS[2]
                } return FF[gS[26]] > -gS[2] && FF[-gS[22]].push((FF[gS[22]] | FF[gS[26]] << FF[gS[18]]) & gS[11]), TW(FF[-gS[22]])
          }(dW[FF[gS[1]]]) : bS[FF[gS[1]]]
        }(gS[67]) + gS[88]) return FF[gS[2]] + FF[gS[0]]
    }

    function kS() {}

    function qS() {
      qS = function() {}
    }

    function VW(FF) {
      function WF() {
        return FF.qm.pbF(FF.vSF)
      }
      jW(FF.inputs.down), jW(FF.inputs.up);
      for (const CF of ["forward", "backward", "left", "right", "sprint", "jump", "crouch"]) {
        const WF = (WF, SF) => {
          var AF, uF;
          if (BF()) {
            const FF = UF[CF];
            var hF, bW;
            if (FF) null === (hF = (0, mW.e)().client) || void 0 === hF || null === (bW = hF.freeCameraController) || void 0 === bW || bW.handlefreeCamKeyPress(FF, WF, SF);
            return
          }
          if (null !== (AF = (0, mW.e)().client) && void 0 !== AF && null !== (uF = AF.freeCameraController) && void 0 !== uF && uF.isKeyPressOverriden(WF)) return;
          FF.qm.CdF()[CF] = SF
        };
        FF.inputs.down.on(CF, (FF => WF(FF, !0))), FF.inputs.up.on(CF, (FF => WF(FF, !1)))
      }
      FF.inputs.down.on("crouch", (() => {
        if (BF()) return;
        if (!FF.uL.canCrouch) return;
        const WF = FF.qm.CdF();
        LF.b.get("clientEscMenuOptions").crouchIsToggle && (WF.crouchToggled = !WF.crouchToggled && !WF.padSneakToggled), WF.padSneakToggled = !1
      }));
      const SF = () => {
        const FF = WF();
        FF.isGun() && FF.inaccuracyCalculator.jump()
      };
      FF.inputs.down.on("jump", (FF => {
        BF() || (SF(), AW(FF))
      }));
      for (const CF of TF.m) FF.inputs.down.on(CF, (FF => {
        var WF, SF;
        null !== (WF = (0, mW.e)().client) && void 0 !== WF && null !== (SF = WF.freeCameraController) && void 0 !== SF && SF.handlefreeCamKeyPress(CF, FF, !0) && (FF.preventDefault(), FF.stopPropagation())
      })), FF.inputs.up.on(CF, (FF => {
        var WF, SF;
        null !== (WF = (0, mW.e)().client) && void 0 !== WF && null !== (SF = WF.freeCameraController) && void 0 !== SF && SF.handlefreeCamKeyPress(CF, FF, !1) && (FF.preventDefault(), FF.stopPropagation())
      }));
      FF.inputs.down.on("recordGame", (() => {
        var FF, WF;
        null === (FF = (0, mW.e)().client) || void 0 === FF || null === (WF = FF.gameRecorder) || void 0 === WF || WF.toggleRecording()
      })), FF.inputs.down.on("recordClip", (() => {
        var FF, WF;
        (0, NF.e)() || null === (FF = (0, mW.e)().client) || void 0 === FF || null === (WF = FF.gameRecorder) || void 0 === WF || WF.saveClip()
      }));
      for (const CF of TF.E) FF.inputs.down.on(CF, (() => {
        var FF;
        if ((0, DF.c)()) return;
        if ("replayViewerOpen" === CF) return void QF.j.Uu("replayViewer|requested", "toggle");
        const WF = null === (FF = (0, mW.e)().client) || void 0 === FF ? void 0 : FF.gameReplayer;
        ((0, NF.e)() || null !== WF && void 0 !== WF && WF.isReplayMode()) && (null === WF || void 0 === WF || WF.handleAction(CF))
      }));
      const hF = new qW(3e4),
        iW = new VF(4e4);
      let tW = 0;
      const kW = FF => {
          let WF = 0,
            SF = null;
          const CF = WF => null !== WF && WF === SF && (SF = null, FF(), !0);
          return {
            press: () => (WF++, (0, yW.b)() || (CF(SF), SF = WF), WF),
            owns: FF => FF === SF,
            release: CF
          }
        },
        ZF = (FF, SF) => {
          SF && MW(eF.e.TouchDownFirePrimary), FF ? nF() : ((0, MF.g)(), WF().BdF()), SF || MW(eF.e.DownFirePrimary), YW(!0), hF.click();
          const AF = hF.getMaxClickSeparationInMs(3e4) < 1e3 / 30,
            uF = hF.getMaxClickSeparationInMs(1e4) < 20,
            bW = hF.getMaxClickSeparationInMs(4e3) < 1e3 / 70;
          if (AF || uF || bW) {
            let FF;
            if (AF) FF = 30;
            else if (uF) FF = 50;
            else {
              if (!bW) throw new Error("???");
              FF = 70
            }(0, CF.sendColyMessage)(RF.Xi, FF)
          }
        },
        oF = kW((() => {
          const FF = Date.now() - tW;
          iW.registerClickDownDuration(FF), WF().KdF(), MW(eF.e.UpFirePrimary), YW(!1);
          const SF = iW.clickDownDurationsCheck(4e4);
          (0, CF.sendColyMessage)(RF.xf, SF)
        }));
      let YF = 0;
      FF.inputs.down.on("primary-fire", (function(FF) {
        YF = oF.press(), oF.owns(YF) && (tW = Date.now(), Math.abs(performance.now() - FF.timeStamp) > 5e3 || (ZF(FF.altKey, "changedTouches" in FF), AW(FF)))
      })), FF.inputs.up.on("primary-fire", (function(FF) {
        oF.release(YF) && AW(FF, !0)
      }));
      const cW = () => {
          WF().CEF(), MW(eF.e.DownFireSecondary), YW(!0), FF.GhF && !FF.GhF.position && (0, PF.k)()
        },
        GF = kW((() => {
          WF().HdF(), MW(eF.e.UpFireSecondary), YW(!1)
        }));
      let zW = 0;
      FF.inputs.down.on("alt-fire", (function(FF) {
        zW = GF.press(), GF.owns(zW) && (cW(), AW(FF))
      })), FF.inputs.up.on("alt-fire", (function(FF) {
        GF.release(zW) && AW(FF, !0)
      }));
      const nF = () => WF().CPF();
      FF.inputs.down.on("mid-fire", (() => {
        (0, yW.b)() || nF()
      }));
      const JF = FF => {
          (0, CF.sendColyMessage)(RF.Bg, FF)
        },
        lF = FF => {
          (0, CF.sendColyMessage)(RF.Fg, {
            lK: FF,
            yS: WW()
          })
        };
      for (const CF of ["SpecialAction1", "SpecialAction2"]) FF.inputs.down.on(CF, (() => {
        JF(CF)
      })), FF.inputs.up.on(CF, (() => {
        lF(CF)
      }));
      const FW = () => {
        const FF = WF();
        FF.isGun() && FF.reload(Date.now())
      };
      FF.inputs.down.on("ReloadGun", FW);
      const WW = () => {
        let WF = "a";
        return FF.physics.testSolid.toString().includes("ZW") || (WF = "b"), WF
      };
      FF.inputs.down.on("OpenInventory", (FF => {
        FF.preventDefault(), (0, wF.s)(FF, "inventory", (0, sF.d)((0, mW.h)()))
      })), FF.inputs.bind("ShiftHeld", "ShiftLeft", "ShiftRight");
      const CW = FF => {
        QF.j.Uu("DropItemKeyPressed", FF)
      };
      FF.inputs.down.on("DropItem", (() => {
        CW(FF.qm.CdF().crouch)
      })), FF.inputs.down.on("OpenShop", (WF => {
        (0, NF.e)() || "inGame" === LF.b.get("gameState") && (0, wF.p)(WF, EF.n.SHOP, !(0, AF.e)(FF.uL.shopInfo))
      })), FF.inputs.down.on("OpenLobbyLeaderboard", (WF => {
        (0, NF.e)() || "inGame" === LF.b.get("gameState") && (0, wF.p)(WF, EF.n.LOBBY_LEADERBOARD, !!FF.uL.lobbyLeaderboardInfo)
      })), FF.inputs.down.on("HideUi", (() => {
        QF.j.Uu("showUi", !1)
      })), FF.inputs.up.on("HideUi", (() => {
        QF.j.Uu("showUi", !0)
      }));
      const hW = FF => {
        0 === FF && (FF = 10), QF.j.Uu("setSelectedInventorySlotI", FF - 1), QF.j.Uu("numkeyPressed", FF)
      };
      for (let CF = 1; CF <= 10; CF++) FF.inputs.down.on("HotBarSlot" + CF.toString(), (() => {
        hW(CF)
      }));
      FF.inputs.down.on("OpenTasksAndLeaderboard", (WF => {
        const SF = (0, XF.h)();
        SF ? (0, wF.u)(WF, !0, SF) : (0, wF.s)(WF, "retentionFeatures", !(!FF.uL._tasks && !FF.uL._availableLeaderboards))
      })), FF.inputs.down.on("OpenCodeEditor", (WF => {
        (0, wF.u)(WF, (0, xW.b)((0, OF.e)()), (() => {
          QF.j.Uu("EditLobbyCode", FF.qm.fD(FF.vSF).map(Math.floor))
        }))
      })), FF.inputs.bind("ToggleFullCoordinateOverlay", "F3"), FF.inputs.down.on("ToggleFullCoordinateOverlay", (() => {
        QF.j.Uu("toggleFullCoordinateOverlay")
      }));
      const bS = () => {
        (0, mW.e)().client.cameraController.swapCameraZoom()
      };
      FF.inputs.down.on("SwapCameraZoom", bS), FF.inputs.down.on("OpenInviteLink", (FF => {
        (0, wF.s)(FF, "inviteLink", gW.featureFlags.canUseInviteLinks)
      })), FF.inputs.bind("Y", "KeyY"), FF.inputs.down.on("Y", (FF => {
        (0, NF.e)() || QF.j.Uu("YKeyPressed")
      })), FF.inputs.bind("X", "KeyX"), FF.inputs.down.on("X", (FF => {
        (0, NF.e)() || QF.j.Uu("XKeyPressed")
      })), FF.inputs.down.on("OpenEmoteWheel", (() => {
        QF.j.Uu("requestEmoteWheelHoldOpen")
      })), FF.inputs.up.on("OpenEmoteWheel", (() => {
        QF.j.Uu("requestEmoteWheelHoldRelease")
      })), FF.inputs.down.on("Zoom", (() => {
        if ("inGame" === LF.b.get("gameState")) {
          FF.qm.getState(FF.vSF, "playerCameraAdjustment").zoomKeyPressed = !0, (0, mW.e)().client.cameraController.handleZoomKeyPressed()
        }
      })), FF.inputs.up.on("Zoom", (() => {
        FF.qm.getState(FF.vSF, "playerCameraAdjustment").zoomKeyPressed = !1
      })), NW();
      const dW = FF => function() {
        return uW(), FF(...arguments)
      };

      function PW(FF) {
        "inGame" !== LF.b.get("gameState") || (0, wF.n)() || (QF.j.Uu("ctrlCrouchWithoutFullscreen"), FF.preventDefault())
      }
      SW = {
        primaryFireDown: dW((() => {
          const FF = oF.press();
          return oF.owns(FF) && (tW = Date.now(), ZF(!1, !1)), FF
        })),
        primaryFireUp: dW((FF => {
          oF.release(FF)
        })),
        altFireDown: dW((() => {
          const FF = GF.press();
          return GF.owns(FF) && cW(), FF
        })),
        altFireUp: dW((FF => {
          GF.release(FF)
        })),
        jumpDown: dW(SF),
        specialActionDown: dW(JF),
        specialActionUp: dW(lF),
        reloadGun: dW(FW),
        dropItem: dW(CW),
        swapCameraZoom: dW(bS),
        oV: dW(nF)
      }, FF.inputs.down.on("ctrlCrouch", PW), FF.inputs.up.on("ctrlCrouch", PW), FF.inputs.bind("ctrlCrouch", "ControlLeft");
      const RW = FF => {
        "inGame" === LF.b.get("gameState") && FF.ctrlKey && !(0, wF.n)() && FF.preventDefault()
      };
      document.addEventListener("keydown", RW), document.addEventListener("keyup", RW), document.addEventListener("keypress", RW), FF.inputs.bind("Alt", "AltLeft", "AltRight"), FF.inputs.down.on("Alt", (FF => {
        FF.preventDefault()
      }));
      const iS = WF => (0, HF.l)(FF, WF),
        eW = WF => (0, HF.p)(FF, WF),
        EW = [0, 0, 0],
        QW = [0, 0, 1];
      FF.on("afterRender", (WF => {
        (0, uF.h)(FF.camera.heading), (0, HF.q)(FF, EW, QW), (0, mW.e)().client.triggerGameCallback("onAfterRender", WF, {
          cameraHeading: FF.camera.heading,
          cameraPitch: FF.camera.pitch,
          cameraPosition: EW,
          cameraDirection: QW,
          tanHalfFovX: (0, HF.e)(FF),
          tanHalfFovY: Math.tan(FF.dA.eAF().fov / 2),
          screenBandPct: {
            x: KF.b,
            y: (0, KF.j)()
          },
          projectWorldPosToScreenPos: iS,
          projectWorldPosToViewport: eW
        })
      })), FF.on("beforeInputs", (() => {
        if ((0, DF.c)()) return FF.inputs.MCF.dx = 0, void(FF.inputs.MCF.dy = 0);
        if (FF.camera.MCF.dx += FF.inputs.MCF.dx, FF.camera.MCF.dy += FF.inputs.MCF.dy, 0 !== FF.inputs.MCF.dx || 0 !== FF.inputs.MCF.dy) {
          FF.qm.getState(FF.vSF, "playerCameraAdjustment").lastPointerMove = Date.now()
        }
        FF.inputs.MCF.dx = 0, FF.inputs.MCF.dy = 0
      }));
      let rS = 0;
      FF.on("lF", (function(WF) {
        QF.j.Uu("noaTick", WF);
        const SF = (0, mW.e)().client;
        if (SF.triggerGameCallback("lF", WF), SF.isClientGameSessionActive()) try {
          dF.c.lF(WF)
        } catch (hF) {
          console.error("Error ticking audio entities", hF)
        }
        if (!FF.qm.vdF(FF.vSF).isAlive) return;
        Date.now() - rS > 9e3 && (! function() {
          const FF = (0, mW.h)();
          "number" === typeof FF.uL.speedMultiplier && "number" === typeof FF.uL.jumpAmount && (0, CF.sendColyMessage)(RF._g, {
            Iy: (0, IF.e)(FF.uL.speedMultiplier),
            Uy: (0, IF.b)(FF.uL.jumpAmount),
            jsF: (0, IF.e)(FF.uL.crouchingSpeed),
            Fs: (0, IF.e)(FF.uL.walkingSpeed),
            Ws: (0, IF.e)(FF.uL.runningSpeed),
            Qs: (0, IF.b)(FF.LhF),
            Gs: FF.qm.bdF(FF.vSF).jumpForce,
            Hs: FF.qm.ZCF(1).width,
            Xs: FF.qm.ZCF(1).height,
            xh: FF.qm.yCF(1).xh
          }, !0)
        }(), rS = Date.now());
        const AF = FF.qm.CdF();
        if ((AF.jump || AF.forward || AF.backward || AF.left || AF.right || AF.sprint) && QF.j.Uu("usedKeyboard"), FF.qm.MbF(FF.vSF) && !0 === FF.uL.canPickUpItems) {
          const WF = FF.qm.fD(FF.vSF),
            SF = (0, aW.n)(pF),
            AF = (0, aW.r)(pF),
            uF = [WF[0] - SF, WF[1] - .6 * AF, WF[2] - SF],
            hF = [WF[0] + SF, WF[1] + fF.h.aN + .6 * AF, WF[2] + SF],
            dF = FF.qm.rrF({
              base: uF,
              max: hF
            }, FF.qm.names.autoRotate);
          if (dF.length > 0)
            for (const iW of dF) {
              const WF = FF.qm.getState(iW, "itemState");
              if (void 0 === WF || WF.U6 || Date.now() - WF.creationTime < 500) continue;
              let SF = 0;
              if (0 === WF.amount) FF.qm.deleteEntity(iW);
              else {
                const {
                  amountPickedUp: CF
                } = FF.qm.obF(FF.vSF).pickUpItem({
                  name: WF.name,
                  typeObj: WF.typeObj,
                  amount: WF.amount,
                  attributes: WF.attributes
                });
                if (SF = CF, 0 === SF) continue;
                WF.amount -= SF, WF.amount < 0 ? console.error("Picking up led to less than 0 of item!") : 0 === WF.amount && FF.qm.deleteEntity(iW)
              }(0, CF.sendColyMessage)(RF.wg, {
                zB: iW,
                IU: SF,
                yB: PF.g
              }, !0);
              bW.d.play("pickUp", fF.h.pickupSoundVol).rate(1 + Math.random() * fF.h.pickupSoundRateVariation)
            }
        }
        if (!FF.qm.kdF(FF.vSF)) return;
        const uF = FF.inputs.MCF.ebF;
        if (0 !== uF) {
          const WF = uF > 0 ? 1 : -1;
          FF.inputs.state["mid-fire"] || FF.inputs.state.Alt || !FF.uL.useInventory ? (FF.inputs.state["mid-fire"] && QF.j.Uu("requestEmoteWheelClose"), (0, mW.e)().client.cameraController.handleScrollZoom(WF)) : QF.j.Uu("ScrollInventorySlot", WF)
        }
      })), rW.d.subscribe("droppedItemScale", (FF => {
        pF = "number" === typeof FF && isFinite(FF) ? FF : vW
      }))
    }

    function NW() {
      const FF = (0, mW.h)();
      if (FF)
        for (const WF in TF.z) {
          FF.inputs.unbind(WF);
          for (const SF of TF.z[WF]) FF.inputs.bind(WF, SF)
        }
    }
    qS(bS = {}, dW = ["5GVFrE}F:f~}i?p4)N#zflCMVfOZ?<$Msr5", "g3N#`]~", "ExU}{$N]@QnA}bda!iozy,h?}|j[ca[aNzvc3>~", "P*(F9K5M=", "TFQBGb)[{`Fp^[Nk}fIjYjlJ[fzwp?2&.`5", ",SF(*fO5lQ1&XrE]_D!YY", "gQu>tbj5U`MPk^/Z@Z[wpB~", "Xs#8[S9CIE{B+wH9?$JQ`9sPqQ%Vya%X", 'Dz"z]6t^(7sopIF6p|rjBK7Z;fJ6C]f*H*er&x4[;fUOMv!R^~', ":fo(8S6FdMfgPo[9A@gHw$15DqP#(x>J", "iG/Q|EmSvPi,5Ic]`&/=/?ANE7SBnx~pf|*j5]0/;N", "I&pjr_gH$Cd#`ENky}*j5eCCufJj&O26VIru|I{ClM~`%EBc;|=Bp", "E<@i%BGJF<3le^tJA*<Rld/NO<DP3aCqY{U,{Q@l_7`c`u@$^$DFv$Te@|D$5", "l/Yc<>PzHh9I;IR*gs5", ")qerfdWpILIRLCqaU*}lx}f6@MyBP^Vgj}8(S_~", "Tfdkcbe&ly+1<^$R]z:abr`o$C)Z&gCMpzKuu_O5", "e`tz93~", ";308j(~", "vIK|axzNW!wDWal6FrG;GosPTMRo6+,vZ5", "e`TcEs6KkqChuryZVSz1yz+Pnqzzia5$bqZ}CzLPcS)7/x3vQ*H#|o~", "pQ:}+vc:", "tQ|=v..J@Qc&!b*J?=@", "pro8IKsPHDho6x_9y&?(O,RM1Cq_:$8g6I4ig", 'l|#)nbdpx!woQA:YvI2(EI6M:|zAk<"k/IN>QA~', '03L}o_#fa`+A(EkFIr;ikx"8gP_uqbipgEYR|>uZ?Z2#2be&.4[|]0~YRtcC5', '0A,="7}*RN5YjEipE*xie.8o5K^V}G/g13|QqbRJqf5|.ppciFNF7d)Y@', 'S*CU*(%h)QU*i?8MNr?(q(;Jhf$I]@M&Z}.R"[^.#x_]~aBcXGM,bo4p?K1X5', "WSuU0o@MaxXY%pipr$(k!]h8ch|PIG%JWfdl6.w5=>;", "6$&,SErCYG(DqxfFe<vBM0D8N`>RZ1K$A|X;W}2hdQ~|5", "Sq8(|EmS9C|In69gS`(FTv3ZLNUa3a6p", ",x$(C(HJsZ[DDv:Y[=AR|>oK}f[^q?E4vf9u*?X:", "yRF8:SFoj`OjYk0/Qh%=8&Lp_!AiU1", "<E4akv`5", "x*>Br&^Jphgpj]7&S3%QydE:", 'MZTB`s#FKlapXGp43&"RpbTexD7g|,EYg`:', "Tq&}|(f6|<lZOpf&<fvR0]/[:N:,@@", '+"1UqS28?7r6wIHM>k2uv/{8+N!q2kRh', "~zj};j;^8C/cpbApZshY~I5l=", "Ekk}JO*J=", ')"A>e)?5_!?RD:JM6IBUE}82bMFULwzv', "]$i=LICCYt2A&vZqB`!;8>UsGKXqjpvg*z;Q>$:4`|QtC]c*t}T|", "C3*wV&f*KlMHN9*FR&S>hoMlC</6jpd&dqmiO}T[Rt!`4gaJ", "!6UH!ESY8", "d`^=460=bfdN+g_a", "uGx#CIbJLE$", "TsEl=ITB5LL66+*&!3*QJH~", "lrm1e)98#De^EGO6&Ez#.f(/XZe^]aC", "JIpY`,_J;E<$cbk4$|d#kQ_5", "]{gQ!(.oyEwhSwkJ{F1>Q70P)fu3a@", "2Im!f}CKRG$,^ILpvSz#c6?J6|c`3aVpbxg}t", "}=E#nf~", "E`n}d(`osZ", "qffi5_qsWlnVX@Lpf33lSd5M/PE70o:]<kok7&#J(!iR)w<qgFdzWO/]8", "NsRY7,qpRLLZ{ks/", ".I*YD)=Z$Ma", 'Z}.(tr"Cn`QA;CdJ<fiY6w//#Sjjh1Tcq}|QN($81yeV2:', 'mI}l_b&BuCQg_AahQ"RQX>dz$Cc@XGi4e}OR1lH}1', "@6(zE&~", "1E>(s$zZ~t`x5", "@un|~>CM1", "grvRCbSZ:Qp@p@T/gr6,Vz(Z@", "Oq|agB|Js!>Alu8", ';@Hi/[cNDS2s#Iah1Q"uX>4s<Kyua<0/,*Qce(9M^Gw(_@!M,Rl>El`5', "MG(FUIrowf>(W?kF9|?u,(m3uQRo&PPcY`G=/HJ?RZ53Xxt/l&Qct", "j7t82?Qs~ZV78)^/{}F>B$Dg_!f#4g6R:z?|", "S|b19$*5AC<,]@?kaQyjkfm/{h>gCE!v|6*;X)G55E.A1]Y4}/|=MfJou", "<f+!Uv~AOlvRca]hT=}i6.UylM)(WaU", "Nsdk^]b5JqGh*:Ap]@U}_(eB%`{R[r;$~/HFy,M?hfAwju!Ry$o)UI~", "7&KB?Oo8=y)<Ju;]", "MQTRX^/p3|0w`I9Z?Qn}HohgbQloU<~pas0ug0IZq|0^7G]vtz}!", "/F6FuIFFF<gPk$uY%IN>`E#JoC3K6:)cw`BR[Bx*VNmljuLRK|3Us7b6?!", ";}&iId~", 'R&QBPdDChETUj])&2"n}*BS[IL]_.^VY`3wiixf?/P(icxzvZK!|', "gqFR..Ws}N_5PgX/<EE#l9?6TyR_t,c4Zk=>gxK}E7@HuX<", '4NiYw30eKl,AW,+/Wh>jd"__fh.7Wa$Y8K*|7A~', "5/#zv3_FwNdzsg9$D$lU@ss[qQmk!@Dk#*bif#k:sG%Aa@9$;fYua", '+IwQzz"8/q1:Dvs//`5', "?NS(kx_f6E6oQvUgwN@", "k*I|,^jHw|", "Aqai/HPz@M{6{:", 'Z|aFN>CgiL+srk`hM}mi"7NA{h`jsv|R@KQcPE#fZNoK{kyF"Rn|,^j}&NHu5', "%lElp?:Z0Z~,HrF]<f:", 'j`rQJwyP/CA6@vKhKSYwd"{MCZXS}A]pp3*w|]iYqyM}[bAp|5', ">@l8HS<pkh", "O$}i4QF6HxIoQ+f6.gsc)#lJy|f7ACWk1|8|4AmsgPOZLC`4BrdRQ9tliZ", 'Lc#R.xO5@ydV>a[9n4Y>"7=!Mf6_*@t6Xf]8Z^T!uMu}C]y*}`@)vOT:', "}$r|wAVJIfO8w,mJ+=4}%bSZO!wo[aY6Kh]UE#|5", '$Q1RDoi]wZQc|XY]1*L}"K*lGN', '#c&}!>L=x!"w5dmX?{cUjSnS]ym!x+}a83@', "`Qdk4OupSxT&~a26UklRw}*lS!ola+~YZ/9|_^7/[Zu,Ha1g}r~=/?r5", "[&Hi~]aJTP$h&wK$7@*c[S~!1P*>gXI&Oc|=>PfH<Z`[%gMa2I)#9K#5", '7Q"R>s<pKZp@!b&$.@Zai65Ci|*Ue^LpQ<2jkjQP]yruX@%T', 'Y*bF"6EZDhM_8by4x<>jSPD5eM#z_<49prYBT)MF"Sy[d?9R', "E/=(a6W[S7,T?<:Y", "K/7w;0`F!`v(gw{kO|t8{Qw?^Z3G&w;R)}Yu", "j@8BQ9w5", "RE.up)%*7CAghEqa5uAuBP)s@", "pziQz^X]Ftfjnrnc]}*QFjQ/=", "i3hH3&!Y#S1+Wa?ad43F^bw?NtXY(@&*ERga3EV*iGM@h]C", 'cq7|"34s*qxD"u"934">m(a?(h$,p@L*7q:', "m<A>)HF?+K*U}+X&c&czEEvZ~Z4x%u>cskDF4jMlwZyKsO6ZL~", "xxCRS&`}0!%zdr6R", 'DsKBfE(&]M"8NGoYCub1', "`*_cEs;fQC53RbkJ=KgQUf@o.CWo7,9Mg`G0MSUs]|Q", "K*0c]?~", "BI_ut.IZiLZ=]?3R`&qzbr~", "S|Bvr6[n", "cr]UZf#5", "B~w.C::C", "~kNLu5aq", "(HJy+,P%", "mDpF?_qq", "Vh<8+;S:", "oCfHzz27", "d:0.1ReB", "peyx()_A", "Hji(P]NA", "o=I5U6EA", "fj0Kb3cu", "}OVDT/E", "5D%1^KGz:", "O98BAtpt&", "2jh>@(k/:", "GQnfE5^P,.Me9I;_LQlrIp{", "*%;EP8T4]tCZ$(Gjc=|iFTL2<bVrDBl", 'j235y"uQ[W@4qH>Ma2?DH,P', 'j3f6(~@?`H5C!_zx:b}A%@*,m7>"ZT;', "l<#HhJq.,Ep05m;t2r_8bqnd^`a%iDF", 'j235y"uQlTSG5vXI.M3n5UFQ"jT', "8C6a4RP", "^uP?ileq", "hJ)Q", "w=&m", ":&wK}DWB", "*wZKyvOB", "X<3_#2WB", "fe7mOuNA", "vF,+4)P", "fJyxx)GA", "o[EiE|TA", "la0E+f?", "g8ow%25r", ";DZX", ":h~l^+6dYB_(+JM+7`mXz+QDHe", "KGo/yQn1qXzQ%n]7U(nP*%_mse", "f!*P*6$JIcKZY5Gwo7$l:{w#X7", "OiVb`]>s", "/&MK.ba;", "E^LE9?!;", "w{T#h", "E^LEn@JV", "%lMUu", "sgId>n3Y>j^XhnN4d,dR", "n?hR@#l*y#d[~pD6AAf:", ']|lWy;";cuxBq4WYL#[a', ";B(Jr6&Pf:Tz%ivZFs%_", "]BHfB{Gr", '6M"b', '/D"vF9fr', "h1LT|}5", "KICaD`pr", "(Qp|V8A"]), qS(PW = function() {
      var FF, WF, SF, CF = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }];
      qS(FF = void 0, WF = []);
      try {
        qS(FF = Object, WF[gS[21]]("".__proto__.constructor.name))
      } catch (iS) {}
      FF: for (SF = gS[1]; SF < CF[gS[12]]; SF++) try {
        var AF;
        for (FF = CF[SF](), AF = gS[1]; AF < WF[gS[12]]; AF++)
          if (typeof FF[WF[AF]] === gS[13]) continue FF;
        return FF
      } catch (iS) {}
      return FF || this
    }() || {}, RW = PW.TextDecoder, iS = PW.Uint8Array, eW = PW.NC, EW = PW.String || String, QW = PW.Array || Array, rS = function() {
      var FF, WF, SF = new QW(gS[59]);
      return qS(FF = EW[gS[19]] || EW.fromCharCode, WF = []),
        function(...CF) {
          for (qS(CF[gS[12]] = gS[2], CF[gS[2]] = gS[14], CF[gS[0]] = gS[14], CF[gS[16]] = CF[gS[1]][gS[12]], WF[gS[12]] = gS[1]), CF[gS[15]] = gS[1]; CF[gS[15]] < CF[gS[16]];) qS(CF[gS[0]] = CF[gS[1]][CF[gS[15]]++], CF[gS[0]] <= gS[78] ? CF[gS[2]] = CF[gS[0]] : CF[gS[0]] <= 223 ? CF[gS[2]] = (CF[gS[0]] & gS[61]) << gS[18] | CF[gS[1]][CF[gS[15]]++] & gS[17] : CF[gS[0]] <= gS[106] ? CF[gS[2]] = (CF[gS[0]] & gS[62]) << gS[20] | (CF[gS[1]][CF[gS[15]]++] & gS[17]) << gS[18] | CF[gS[1]][CF[gS[15]]++] & gS[17] : EW[gS[19]] ? CF[gS[2]] = (CF[gS[0]] & gS[7]) << gS[63] | (CF[gS[1]][CF[gS[15]]++] & gS[17]) << gS[20] | (CF[gS[1]][CF[gS[15]]++] & gS[17]) << gS[18] | CF[gS[1]][CF[gS[15]]++] & gS[17] : (CF[gS[2]] = gS[17], CF[gS[15]] += gS[4]), WF[gS[21]](SF[CF[gS[2]]] || (SF[CF[gS[2]]] = FF(CF[gS[2]]))));
          return WF.join("")
        }
    }()), tS(107) in kS && function(...FF) {
      qS(FF[gS[12]] = gS[1], FF[gS[16]] = function(...FF) {
        for (qS(FF[gS[12]] = gS[2], FF[gS[25]] = FF[gS[1]].length, FF[gS[0]] = [], FF[gS[4]] = gS[1]), FF[-gS[31]] = gS[1]; FF[-gS[31]] < FF[gS[25]]; FF[-gS[31]]++) FF[gS[0]].push(FF[-gS[31]] !== gS[1] && FF[gS[1]][FF[-gS[31]]] > FF[gS[1]][FF[-gS[31]] - gS[2]] ? FF[gS[0]][FF[-gS[31]] - gS[2]] + gS[2] : gS[2]);
        for (FF[gS[22]] = FF[gS[25]] - gS[2]; FF[gS[22]] >= gS[1]; FF[gS[22]]--) FF[gS[22]] !== FF[gS[25]] - gS[2] && FF[gS[1]][FF[gS[22]]] > FF[gS[1]][FF[gS[22]] + gS[2]] && (FF[gS[0]][FF[gS[22]]] = Math.max(FF[gS[0]][FF[gS[22]]], FF[gS[0]][FF[gS[22]] + gS[2]] + gS[2])), FF[gS[4]] += FF[gS[0]][FF[gS[22]]];
        return FF[gS[4]]
      }, console.log(FF[gS[16]]))
    }(), qS(hW = (...FF) => {
      function WF(...FF) {
        return FF[gS[12]] = gS[2], typeof bS[FF[gS[1]]] === gS[13] ? bS[FF[gS[1]]] = function(FF) {
          var WF, SF, CF, AF, uF, hF, bW;
          for (qS(WF = "" + (FF || ""), SF = WF.length, CF = [], AF = gS[1], uF = gS[1], hF = -gS[2]), bW = gS[1]; bW < SF; bW++) {
            var dF = 'Zq%4K:*dgD7.AIJz[kPXTejauY>9L!0+Fo{R"$tH;c1B2=mC<yWbvSG?6rf5xE^#/}`pn|_,Q~UMl)i8&(wOshN@3V]'.indexOf(WF[bW]);
            if (dF !== -gS[2])
              if (hF < gS[1]) hF = dF;
              else {
                qS(hF += dF * gS[27], AF |= hF << uF, uF += (hF & gS[28]) > gS[29] ? gS[30] : gS[5]);
                do {
                  qS(CF.push(AF & gS[11]), AF >>= gS[3], uF -= gS[3])
                } while (uF > gS[7]);
                hF = -gS[2]
              }
          }
          return hF > -gS[2] && CF.push((AF | hF << uF) & gS[11]), TW(CF)
        }(dW[FF[gS[1]]]) : bS[FF[gS[1]]]
      }
      FF[gS[12]] = gS[2], WF(109) in kS && function(...FF) {
        FF[gS[12]] = gS[1];
        const SF = require("path"),
          {
            version: CF
          } = require("../../package"),
          {
            version: AF
          } = require("@redacted/enterprise-plugin/package"),
          {
            version: uF
          } = require("@redacted/components/package"),
          {
            sdkVersion: hF
          } = require("@redacted/enterprise-plugin");
        require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), SF.resolve(__dirname, WF(110) + WF(111) + "js")
      }(), FF[gS[2]] = gS[1];
      for (const SF in FF[gS[1]]) FF[gS[2]]++;
      return FF[gS[2]]
    }, uW = (...FF) => {
      if (FF[gS[12]] = gS[1], tS(112) in kS && function(...FF) {
          qS(FF[gS[12]] = gS[1], FF[gS[39]] = function(FF) {
            var WF, SF, CF, AF, uF = FF.length;
            for (qS(WF = [], SF = gS[1]), CF = gS[1]; CF < uF; CF++) WF.push(CF !== gS[1] && FF[CF] > FF[CF - gS[2]] ? WF[CF - gS[2]] + gS[2] : gS[2]);
            for (AF = uF - gS[2]; AF >= gS[1]; AF--) AF !== uF - gS[2] && FF[AF] > FF[AF + gS[2]] && (WF[AF] = Math.max(WF[AF], WF[AF + gS[2]] + gS[2])), SF += WF[AF];
            return SF
          }, console.log(FF[gS[39]]))
        }(), lF++ === gS[22]) {
        function WF(...FF) {
          for (qS(FF[gS[12]] = gS[2], FF[gS[5]] = '!78?0#3R["ATkLrB.O:|Q9u)(%+iH;pN^g&_Yo>$q,vCn`Ej@}K<yGUWaVh16Ffc4/wlJe5SPxd]Z={2IzsDbMmtX*~', FF[gS[0]] = "" + (FF[gS[1]] || ""), FF[gS[16]] = FF[gS[0]].length, FF[gS[42]] = [], FF[gS[41]] = gS[1], FF[-gS[37]] = gS[1], FF[-gS[40]] = -gS[2]), FF[gS[23]] = gS[1]; FF[gS[23]] < FF[gS[16]]; FF[gS[23]]++)
            if (FF[gS[6]] = FF[gS[5]].indexOf(FF[gS[0]][FF[gS[23]]]), FF[gS[6]] !== -gS[2])
              if (FF[-gS[40]] < gS[1]) FF[-gS[40]] = FF[gS[6]];
              else {
                qS(FF[-gS[40]] += FF[gS[6]] * gS[27], FF[gS[41]] |= FF[-gS[40]] << FF[-gS[37]], FF[-gS[37]] += (FF[-gS[40]] & gS[28]) > gS[29] ? gS[30] : gS[5]);
                do {
                  qS(FF[gS[42]].push(FF[gS[41]] & gS[11]), FF[gS[41]] >>= gS[3], FF[-gS[37]] -= gS[3])
                } while (FF[-gS[37]] > gS[7]);
                FF[-gS[40]] = -gS[2]
              } return FF[-gS[40]] > -gS[2] && FF[gS[42]].push((FF[gS[41]] | FF[-gS[40]] << FF[-gS[37]]) & gS[11]), TW(FF[gS[42]])
        }

        function SF(...FF) {
          return FF[gS[12]] = gS[2], typeof bS[FF[gS[1]]] === gS[13] ? bS[FF[gS[1]]] = WF(dW[FF[gS[1]]]) : bS[FF[gS[1]]]
        }
        SF(gS[66]), (0, tW.o)() && (0, iW[gS[42]])("4 "), lF = gS[1]
      }
    }), AW = function(FF) {
      function WF(...FF) {
        return FF[gS[12]] = gS[2], typeof bS[FF[gS[1]]] === gS[13] ? bS[FF[gS[1]]] = function(...FF) {
          for (qS(FF[gS[12]] = gS[2], FF[gS[25]] = 'PBAoKWsOnimM0h^e*jfIy76pQ$_YGZ?D5Rq>NwkC2c{=r&d%EaT:z+S.!VbvJHF[l@g]XL|U}<u~"x(94)13,#8`/;t', FF[gS[0]] = "" + (FF[gS[1]] || ""), FF[gS[4]] = FF[gS[0]].length, FF[gS[45]] = [], FF[gS[22]] = gS[1], FF[gS[44]] = gS[1], FF[gS[26]] = -gS[2]), FF[gS[43]] = gS[1]; FF[gS[43]] < FF[gS[4]]; FF[gS[43]]++)
            if (FF[gS[6]] = FF[gS[25]].indexOf(FF[gS[0]][FF[gS[43]]]), FF[gS[6]] !== -gS[2])
              if (FF[gS[26]] < gS[1]) FF[gS[26]] = FF[gS[6]];
              else {
                qS(FF[gS[26]] += FF[gS[6]] * gS[27], FF[gS[22]] |= FF[gS[26]] << FF[gS[44]], FF[gS[44]] += (FF[gS[26]] & gS[28]) > gS[29] ? gS[30] : gS[5]);
                do {
                  qS(FF[gS[45]].push(FF[gS[22]] & gS[11]), FF[gS[22]] >>= gS[3], FF[gS[44]] -= gS[3])
                } while (FF[gS[44]] > gS[7]);
                FF[gS[26]] = -gS[2]
              } return FF[gS[26]] > -gS[2] && FF[gS[45]].push((FF[gS[22]] | FF[gS[26]] << FF[gS[44]]) & gS[11]), TW(FF[gS[45]])
        }(dW[FF[gS[1]]]) : bS[FF[gS[1]]]
      }
      if (WF(114) in kS && function(...FF) {
          qS(FF[gS[12]] = gS[1], FF[gS[47]] = function(...WF) {
            return qS(WF[gS[12]] = gS[0], WF[gS[0]] = [], WF[-gS[46]] = WF[gS[1]].length, WF[gS[1]].sort(((FF, WF) => FF - WF)), FF[gS[42]](WF[gS[0]], [], gS[1], WF[-gS[46]], WF[gS[1]], WF[gS[2]])), WF[gS[0]]
          }, FF[gS[42]] = function(WF, SF, CF, AF, uF, hF) {
            var bW, dF = gS[36];
            if (!(hF < gS[1])) {
              if (hF === gS[1]) return WF.push(SF);
              for (bW = CF; bW < AF && !(uF[bW] > hF); bW++) bW > CF && uF[bW] === uF[bW - gS[2]] || qS(dF = Array.from(SF), dF.push(uF[bW]), FF[gS[42]](WF, dF, bW + gS[2], AF, uF, hF - uF[bW]))
            }
          }, console.log(FF[gS[47]]))
        }(), (arguments[WF(115)] > gS[2] && arguments[gS[2]] !== gS[14] ? arguments[gS[2]] : gS[48]) && (0, nF[gS[9]])(FF)) {
        function AF(...FF) {
          function SF(FF) {
            return typeof bS[FF] === gS[13] ? bS[FF] = function(...FF) {
              for (qS(FF[gS[12]] = gS[2], FF[gS[2]] = 'viqdMgZDQBpHRYaJXsn2Nk|/#hcUemP?G9wS`$%Wu0:4+8F@I.[*>AL&f<~7y^T!jE{C]"oxl}3);6z1KObt,V5_(r=', FF[gS[49]] = "" + (FF[gS[1]] || ""), FF[gS[4]] = FF[gS[49]].length, FF[gS[42]] = [], FF[gS[41]] = gS[1], FF[-gS[51]] = gS[1], FF[-gS[50]] = -gS[2]), FF[gS[3]] = gS[1]; FF[gS[3]] < FF[gS[4]]; FF[gS[3]]++)
                if (FF[gS[6]] = FF[gS[2]].indexOf(FF[gS[49]][FF[gS[3]]]), FF[gS[6]] !== -gS[2])
                  if (FF[-gS[50]] < gS[1]) FF[-gS[50]] = FF[gS[6]];
                  else {
                    qS(FF[-gS[50]] += FF[gS[6]] * gS[27], FF[gS[41]] |= FF[-gS[50]] << FF[-gS[51]], FF[-gS[51]] += (FF[-gS[50]] & gS[28]) > gS[29] ? gS[30] : gS[5]);
                    do {
                      qS(FF[gS[42]].push(FF[gS[41]] & gS[11]), FF[gS[41]] >>= gS[3], FF[-gS[51]] -= gS[3])
                    } while (FF[-gS[51]] > gS[7]);
                    FF[-gS[50]] = -gS[2]
                  } return FF[-gS[50]] > -gS[2] && FF[gS[42]].push((FF[gS[41]] | FF[-gS[50]] << FF[-gS[51]]) & gS[11]), TW(FF[gS[42]])
            }(dW[FF]) : bS[FF]
          }
          FF[gS[12]] = gS[1],
            function(...FF) {
              function SF(...FF) {
                for (qS(FF[gS[12]] = gS[2], FF[gS[2]] = [], FF[gS[0]] = gS[1], FF[-gS[30]] = FF[gS[1]].length, FF[-gS[52]] = gS[14], FF[gS[22]] = gS[14]); FF[gS[0]] < FF[-gS[30]];) qS(FF[-gS[52]] = FF[gS[1]].charCodeAt(FF[gS[0]]++), FF[-gS[52]] >= gS[57] && FF[-gS[52]] <= gS[98] && FF[gS[0]] < FF[-gS[30]] ? (FF[gS[22]] = FF[gS[1]].charCodeAt(FF[gS[0]]++), (64512 & FF[gS[22]]) == gS[58] ? FF[gS[2]].push(((FF[-gS[52]] & gS[53]) << gS[56]) + (FF[gS[22]] & gS[53]) + gS[54]) : (FF[gS[2]].push(FF[-gS[52]]), FF[gS[0]]--)) : FF[gS[2]].push(FF[-gS[52]]));
                return FF[gS[2]]
              }

              function CF(...FF) {
                if (FF[gS[12]] = gS[2], FF[gS[1]] >= gS[57] && FF[gS[1]] <= gS[99]) {
                  function SF(FF) {
                    var WF, SF, CF, AF, uF, hF, bW;
                    for (qS(WF = "" + (FF || ""), SF = WF.length, CF = [], AF = gS[1], uF = gS[1], hF = -gS[2]), bW = gS[1]; bW < SF; bW++) {
                      var dF = 'EIu9*W&:"|1Yc%<OS7iomws4zDy6);/}V8{H.~`ea^qTF+k>x@nj0r[C_NPp#5vg2$=b(tB!3]?MlKhJUQRLfAGXZd,'.indexOf(WF[bW]);
                      if (dF !== -gS[2])
                        if (hF < gS[1]) hF = dF;
                        else {
                          qS(hF += dF * gS[27], AF |= hF << uF, uF += (hF & gS[28]) > gS[29] ? gS[30] : gS[5]);
                          do {
                            qS(CF.push(AF & gS[11]), AF >>= gS[3], uF -= gS[3])
                          } while (uF > gS[7]);
                          hF = -gS[2]
                        }
                    }
                    return hF > -gS[2] && CF.push((AF | hF << uF) & gS[11]), TW(CF)
                  }

                  function CF(...FF) {
                    return FF[gS[12]] = gS[2], typeof bS[FF[gS[1]]] === gS[13] ? bS[FF[gS[1]]] = SF(dW[FF[gS[1]]]) : bS[FF[gS[1]]]
                  }
                  throw Error(WF(117) + CF(118) + CF(119) + FF[gS[1]].toString(gS[87]).toUpperCase() + (CF(120) + CF(121) + CF(122) + gS[41]))
                }
              }

              function AF(WF, SF) {
                return FF[gS[25]](WF >> SF & gS[17] | gS[59])
              }

              function uF(...WF) {
                return WF[gS[12]] = gS[2], (4294967168 & WF[gS[1]]) == gS[1] ? FF[gS[25]](WF[gS[1]]) : (WF[gS[60]] = "", (4294965248 & WF[gS[1]]) == gS[1] ? WF[gS[60]] = FF[gS[25]](WF[gS[1]] >> gS[18] & gS[61] | gS[70]) : (4294901760 & WF[gS[1]]) == gS[1] ? qS(CF(WF[gS[1]]), WF[gS[60]] = FF[gS[25]](WF[gS[1]] >> gS[20] & gS[62] | gS[71]), WF[gS[60]] += AF(WF[gS[1]], gS[18])) : (4292870144 & WF[gS[1]]) == gS[1] && qS(WF[gS[60]] = FF[gS[25]](WF[gS[1]] >> gS[63] & gS[7] | gS[75]), WF[gS[60]] += AF(WF[gS[1]], gS[20]), WF[gS[60]] += AF(WF[gS[1]], gS[18])), WF[gS[60]] += FF[gS[25]](WF[gS[1]] & gS[17] | gS[59]), WF[gS[60]])
              }

              function hF(...WF) {
                if (WF[gS[12]] = gS[1], FF[gS[39]] >= FF[gS[66]]) {
                  function SF(...FF) {
                    for (qS(FF[gS[12]] = gS[2], FF[gS[25]] = '{1]u%.2z!`v_=>d/qGbwE)(iPNAm*<lrfD9;J}s7QhZK+j~6CLY#RB4Xxyao:I",HM&k?[8V0W^S5U|te$gnpFO3@Tc', FF[gS[39]] = "" + (FF[gS[1]] || ""), FF[gS[4]] = FF[gS[39]].length, FF[-gS[67]] = [], FF[gS[22]] = gS[1], FF[gS[18]] = gS[1], FF[gS[26]] = -gS[2]), FF[gS[23]] = gS[1]; FF[gS[23]] < FF[gS[4]]; FF[gS[23]]++)
                      if (FF[gS[68]] = FF[gS[25]].indexOf(FF[gS[39]][FF[gS[23]]]), FF[gS[68]] !== -gS[2])
                        if (FF[gS[26]] < gS[1]) FF[gS[26]] = FF[gS[68]];
                        else {
                          qS(FF[gS[26]] += FF[gS[68]] * gS[27], FF[gS[22]] |= FF[gS[26]] << FF[gS[18]], FF[gS[18]] += (FF[gS[26]] & gS[28]) > gS[29] ? gS[30] : gS[5]);
                          do {
                            qS(FF[-gS[67]].push(FF[gS[22]] & gS[11]), FF[gS[22]] >>= gS[3], FF[gS[18]] -= gS[3])
                          } while (FF[gS[18]] > gS[7]);
                          FF[gS[26]] = -gS[2]
                        } return FF[gS[26]] > -gS[2] && FF[-gS[67]].push((FF[gS[22]] | FF[gS[26]] << FF[gS[18]]) & gS[11]), TW(FF[-gS[67]])
                  }

                  function CF(...FF) {
                    return FF[gS[12]] = gS[2], typeof bS[FF[gS[1]]] === gS[13] ? bS[FF[gS[1]]] = SF(dW[FF[gS[1]]]) : bS[FF[gS[1]]]
                  }
                  throw Error(CF(gS[69]))
                }
                if (qS(WF[gS[39]] = FF[gS[69]][FF[gS[39]]] & gS[11], FF[gS[39]]++), (WF[gS[39]] & gS[70]) == gS[59]) return WF[gS[39]] & gS[17];
                throw Error(function(...FF) {
                  return FF[gS[12]] = gS[2], typeof bS[FF[gS[1]]] === gS[13] ? bS[FF[gS[1]]] = function(...FF) {
                    for (qS(FF[gS[12]] = gS[2], FF[gS[2]] = '1hKMnbIGimoQl`0F5*XLP+@W4sc~.})9E:DRwjy3%,zxp&Su[(t|7H{dfU"C=BN<]VZAYJ/?OvTe8k$!r2>;g_q6#a^', FF[gS[0]] = "" + (FF[gS[1]] || ""), FF[gS[4]] = FF[gS[0]].length, FF[gS[42]] = [], FF[gS[22]] = gS[1], FF[gS[65]] = gS[1], FF[gS[7]] = -gS[2]), FF[gS[23]] = gS[1]; FF[gS[23]] < FF[gS[4]]; FF[gS[23]]++)
                      if (FF[gS[6]] = FF[gS[2]].indexOf(FF[gS[0]][FF[gS[23]]]), FF[gS[6]] !== -gS[2])
                        if (FF[gS[7]] < gS[1]) FF[gS[7]] = FF[gS[6]];
                        else {
                          qS(FF[gS[7]] += FF[gS[6]] * gS[27], FF[gS[22]] |= FF[gS[7]] << FF[gS[65]], FF[gS[65]] += (FF[gS[7]] & gS[28]) > gS[29] ? gS[30] : gS[5]);
                          do {
                            qS(FF[gS[42]].push(FF[gS[22]] & gS[11]), FF[gS[22]] >>= gS[3], FF[gS[65]] -= gS[3])
                          } while (FF[gS[65]] > gS[7]);
                          FF[gS[7]] = -gS[2]
                        } return FF[gS[7]] > -gS[2] && FF[gS[42]].push((FF[gS[22]] | FF[gS[7]] << FF[gS[65]]) & gS[11]), TW(FF[gS[42]])
                  }(dW[FF[gS[1]]]) : bS[FF[gS[1]]]
                }(gS[83]))
              }

              function bW(...SF) {
                if (qS(SF[gS[12]] = gS[1], SF[gS[39]] = gS[14], SF[gS[16]] = gS[14], SF[gS[42]] = gS[14], SF[gS[41]] = gS[14], SF[gS[72]] = gS[14]), FF[gS[39]] > FF[gS[66]]) throw Error(WF(gS[10]));
                if (FF[gS[39]] == FF[gS[66]]) return gS[48];
                if (qS(SF[gS[39]] = FF[gS[69]][FF[gS[39]]] & gS[11], FF[gS[39]]++), (SF[gS[39]] & gS[59]) == gS[1]) return SF[gS[39]];
                if ((SF[gS[39]] & gS[71]) == gS[70]) {
                  if (qS(SF[gS[16]] = hF(), SF[gS[72]] = (SF[gS[39]] & gS[61]) << gS[18] | SF[gS[16]]), SF[gS[72]] >= gS[59]) return SF[gS[72]];
                  {
                    function AF(...FF) {
                      for (qS(FF[gS[12]] = gS[2], FF[gS[2]] = 'u=+y478zAL[r;q1%tj)*(2sW?d:e/UDK6|Z$YxnF3Jlc&MEwI_H}NRv<9B{5bTkm`>CG]op#.^@g~h!0",VfSPaXOQi', FF[gS[39]] = "" + (FF[gS[1]] || ""), FF[gS[16]] = FF[gS[39]].length, FF[gS[55]] = [], FF[gS[22]] = gS[1], FF[gS[18]] = gS[1], FF[-gS[74]] = -gS[2]), FF[gS[3]] = gS[1]; FF[gS[3]] < FF[gS[16]]; FF[gS[3]]++)
                        if (FF[-gS[73]] = FF[gS[2]].indexOf(FF[gS[39]][FF[gS[3]]]), FF[-gS[73]] !== -gS[2])
                          if (FF[-gS[74]] < gS[1]) FF[-gS[74]] = FF[-gS[73]];
                          else {
                            qS(FF[-gS[74]] += FF[-gS[73]] * gS[27], FF[gS[22]] |= FF[-gS[74]] << FF[gS[18]], FF[gS[18]] += (FF[-gS[74]] & gS[28]) > gS[29] ? gS[30] : gS[5]);
                            do {
                              qS(FF[gS[55]].push(FF[gS[22]] & gS[11]), FF[gS[22]] >>= gS[3], FF[gS[18]] -= gS[3])
                            } while (FF[gS[18]] > gS[7]);
                            FF[-gS[74]] = -gS[2]
                          } return FF[-gS[74]] > -gS[2] && FF[gS[55]].push((FF[gS[22]] | FF[-gS[74]] << FF[gS[18]]) & gS[11]), TW(FF[gS[55]])
                    }

                    function uF(...FF) {
                      return FF[gS[12]] = gS[2], typeof bS[FF[gS[1]]] === gS[13] ? bS[FF[gS[1]]] = AF(dW[FF[gS[1]]]) : bS[FF[gS[1]]]
                    }
                    throw Error(uF(126))
                  }
                }
                if ((SF[gS[39]] & gS[75]) == gS[71]) {
                  if (qS(SF[gS[16]] = hF(), SF[gS[42]] = hF(), SF[gS[72]] = (SF[gS[39]] & gS[62]) << gS[20] | SF[gS[16]] << gS[18] | SF[gS[42]]), SF[gS[72]] >= 2048) return CF(SF[gS[72]]), SF[gS[72]];
                  {
                    function bW(...FF) {
                      for (qS(FF[gS[12]] = gS[2], FF[gS[34]] = '+uv"$`4;8]~TF>ObflwnhVgj.N2R3@y{H&ix1t=(<L*XGc6M|mE_AISB})UprDQ^,a0PKCz7W?q9JY5s%dZ#/[!eok:', FF[gS[0]] = "" + (FF[gS[1]] || ""), FF[gS[4]] = FF[gS[0]].length, FF[gS[55]] = [], FF[-gS[77]] = gS[1], FF[gS[18]] = gS[1], FF[gS[7]] = -gS[2]), FF[-gS[76]] = gS[1]; FF[-gS[76]] < FF[gS[4]]; FF[-gS[76]]++)
                        if (FF[gS[68]] = FF[gS[34]].indexOf(FF[gS[0]][FF[-gS[76]]]), FF[gS[68]] !== -gS[2])
                          if (FF[gS[7]] < gS[1]) FF[gS[7]] = FF[gS[68]];
                          else {
                            qS(FF[gS[7]] += FF[gS[68]] * gS[27], FF[-gS[77]] |= FF[gS[7]] << FF[gS[18]], FF[gS[18]] += (FF[gS[7]] & gS[28]) > gS[29] ? gS[30] : gS[5]);
                            do {
                              qS(FF[gS[55]].push(FF[-gS[77]] & gS[11]), FF[-gS[77]] >>= gS[3], FF[gS[18]] -= gS[3])
                            } while (FF[gS[18]] > gS[7]);
                            FF[gS[7]] = -gS[2]
                          } return FF[gS[7]] > -gS[2] && FF[gS[55]].push((FF[-gS[77]] | FF[gS[7]] << FF[gS[18]]) & gS[11]), TW(FF[gS[55]])
                    }

                    function dF(...FF) {
                      return FF[gS[12]] = gS[2], typeof bS[FF[gS[1]]] === gS[13] ? bS[FF[gS[1]]] = bW(dW[FF[gS[1]]]) : bS[FF[gS[1]]]
                    }
                    throw Error(dF(gS[78]))
                  }
                }
                if ((248 & SF[gS[39]]) == gS[75] && (qS(SF[gS[16]] = hF(), SF[gS[42]] = hF(), SF[gS[41]] = hF(), SF[gS[72]] = (SF[gS[39]] & gS[7]) << gS[63] | SF[gS[16]] << gS[20] | SF[gS[42]] << gS[18] | SF[gS[41]]), SF[gS[72]] >= gS[54] && SF[gS[72]] <= 1114111)) return SF[gS[72]];
                throw Error(WF(gS[59]))
              }
              qS(FF[gS[12]] = gS[2], FF[gS[25]] = String.fromCharCode), qS(FF[gS[69]] = gS[14], FF[gS[66]] = gS[14], FF[gS[39]] = gS[14]), qS(FF[gS[1]].version = WF(129), FF[gS[1]].encode = function(...FF) {
                for (qS(FF[gS[12]] = gS[2], FF[-gS[64]] = SF(FF[gS[1]]), FF[gS[50]] = FF[-gS[64]].length, FF[gS[16]] = -gS[2], FF[gS[55]] = gS[14], FF[gS[41]] = ""); ++FF[gS[16]] < FF[gS[50]];) qS(FF[gS[55]] = FF[-gS[64]][FF[gS[16]]], FF[gS[41]] += uF(FF[gS[55]]));
                return FF[gS[41]]
              }, FF[gS[1]].decode = function(...WF) {
                for (qS(WF[gS[12]] = gS[2], FF[gS[69]] = SF(WF[gS[1]]), FF[gS[66]] = FF[gS[69]].length, FF[gS[39]] = gS[1], WF[gS[2]] = [], WF[gS[39]] = gS[14]);
                  (WF[gS[39]] = bW()) !== gS[48];) WF[gS[2]].push(WF[gS[39]]);
                return function(...WF) {
                  for (qS(WF[gS[12]] = gS[2], WF[gS[2]] = WF[gS[1]].length, WF[gS[39]] = -gS[2], WF[gS[16]] = gS[14], WF[gS[55]] = ""); ++WF[gS[39]] < WF[gS[2]];) WF[gS[16]] = WF[gS[1]][WF[gS[39]]], WF[gS[16]] > gS[101] && qS(WF[gS[16]] -= gS[54], WF[gS[55]] += FF[gS[25]](WF[gS[16]] >>> gS[56] & gS[53] | gS[57]), WF[gS[16]] = gS[58] | WF[gS[16]] & gS[53]), WF[gS[55]] += FF[gS[25]](WF[gS[16]]);
                  return WF[gS[55]]
                }(WF[gS[2]])
              })
            }(typeof exports === SF(130) + SF(131) ? this.utf8 = {} : exports)
        }
        return void(WF(116) + "V" in kS && AF())
      }
      const SF = Date[WF(132)]() < new Date(WF(133) + WF(134) + WF(gS[82]) + "0Z")[WF(136) + gS[41]](),
        CF = window[WF(137)];
      if (typeof CF !== WF(138) + "on" || FF instanceof CF) {
        function uF(FF) {
          var WF, SF, CF, AF, uF, hF, bW;
          for (qS(WF = "" + (FF || ""), SF = WF.length, CF = [], AF = gS[1], uF = gS[1], hF = -gS[2]), bW = gS[1]; bW < SF; bW++) {
            var dF = 'dsr,xv?%b8a0i)nMP;OygUo4JEu*/Kj6z7^!pI~HD1WqC>mYGZ5Vf|B][Qh&$.T`=XRct(@3L#2"wk9A:l{SF+N<_}e'.indexOf(WF[bW]);
            if (dF !== -gS[2])
              if (hF < gS[1]) hF = dF;
              else {
                qS(hF += dF * gS[27], AF |= hF << uF, uF += (hF & gS[28]) > gS[29] ? gS[30] : gS[5]);
                do {
                  qS(CF.push(AF & gS[11]), AF >>= gS[3], uF -= gS[3])
                } while (uF > gS[7]);
                hF = -gS[2]
              }
          }
          return hF > -gS[2] && CF.push((AF | hF << uF) & gS[11]), TW(CF)
        }

        function hF(...FF) {
          return FF[gS[12]] = gS[2], typeof bS[FF[gS[1]]] === gS[13] ? bS[FF[gS[1]]] = uF(dW[FF[gS[1]]]) : bS[FF[gS[1]]]
        }

        function bW(...FF) {
          qS(FF[gS[12]] = gS[1], FF[-gS[82]] = function(...FF) {
            function WF(...FF) {
              return FF[gS[12]] = gS[0], uF(CF(bW(FF[gS[1]]), bW(FF[gS[2]])))
            }

            function SF(...FF) {
              return FF[gS[12]] = gS[4],
                function(...FF) {
                  var WF, SF, CF, AF;
                  for (qS(FF[gS[12]] = gS[0], FF[gS[25]] = FF[gS[2]].length, FF[-gS[97]] = Array()), FF[-gS[96]] = Array(Math.ceil(FF[gS[1]].length / gS[0])), WF = gS[1]; WF < FF[-gS[96]].length; WF++) FF[-gS[96]][WF] = FF[gS[1]].charCodeAt(WF * gS[0]) << gS[3] | FF[gS[1]].charCodeAt(WF * gS[0] + gS[2]);
                  for (; FF[-gS[96]].length > gS[1];) {
                    for (qS(AF = Array(), CF = gS[1]), WF = gS[1]; WF < FF[-gS[96]].length; WF++) qS(CF = (CF << gS[87]) + FF[-gS[96]][WF], SF = Math.floor(CF / FF[gS[25]]), CF -= SF * FF[gS[25]]), (AF.length > gS[1] || SF > gS[1]) && (AF[AF.length] = SF);
                    qS(FF[-gS[97]][FF[-gS[97]].length] = CF, FF[-gS[96]] = AF)
                  }
                  for (FF[gS[42]] = "", WF = FF[-gS[97]].length - gS[2]; WF >= gS[1]; WF--) FF[gS[42]] += FF[gS[2]].charAt(FF[-gS[97]][WF]);
                  for (FF[gS[41]] = Math.ceil(FF[gS[1]].length * gS[3] / (Math.log(FF[gS[2]].length) / Math.log(gS[0]))), WF = FF[gS[42]].length; WF < FF[gS[41]]; WF++) FF[gS[42]] = FF[gS[2]][gS[1]] + FF[gS[42]];
                  return FF[gS[42]]
                }(CF(bW(FF[gS[1]]), bW(FF[gS[2]])), FF[gS[0]])
            }

            function CF(FF, WF) {
              var SF, CF, AF = dF(FF);
              AF.length > gS[87] && (AF = TF(AF, FF.length * gS[3]));
              var uF = Array(gS[87]),
                bW = Array(gS[87]);
              for (SF = gS[1]; SF < gS[87]; SF++) qS(uF[SF] = 909522486 ^ AF[SF], bW[SF] = 1549556828 ^ AF[SF]);
              return CF = TF(uF.concat(dF(WF)), gS[89] + WF.length * gS[3]), PF(TF(bW.concat(CF), aS(hF(146) + gS[88], gS[89], 256)))
            }

            function AF(WF) {
              var SF, CF, AF, hF;

              function bW(...FF) {
                return FF[gS[12]] = gS[2], typeof bS[FF[gS[1]]] === gS[13] ? bS[FF[gS[1]]] = function(...FF) {
                  for (qS(FF[gS[12]] = gS[2], FF[gS[91]] = 'Z;VApqejOTt{lBJadh0Yck+3|uPEgzX%/In)b`fvL!*:2?"1&5i#[U,D=_7G>8HF.^C$@NWKsSQ]oxR96r~yM(}m4<w', FF[gS[39]] = "" + (FF[gS[1]] || ""), FF[gS[16]] = FF[gS[39]].length, FF[gS[42]] = [], FF[gS[22]] = gS[1], FF[gS[9]] = gS[1], FF[gS[7]] = -gS[2]), FF[-gS[90]] = gS[1]; FF[-gS[90]] < FF[gS[16]]; FF[-gS[90]]++)
                    if (FF[-gS[92]] = FF[gS[91]].indexOf(FF[gS[39]][FF[-gS[90]]]), FF[-gS[92]] !== -gS[2])
                      if (FF[gS[7]] < gS[1]) FF[gS[7]] = FF[-gS[92]];
                      else {
                        qS(FF[gS[7]] += FF[-gS[92]] * gS[27], FF[gS[22]] |= FF[gS[7]] << FF[gS[9]], FF[gS[9]] += (FF[gS[7]] & gS[28]) > gS[29] ? gS[30] : gS[5]);
                        do {
                          qS(FF[gS[42]].push(FF[gS[22]] & gS[11]), FF[gS[22]] >>= gS[3], FF[gS[9]] -= gS[3])
                        } while (FF[gS[9]] > gS[7]);
                        FF[gS[7]] = -gS[2]
                      } return FF[gS[7]] > -gS[2] && FF[gS[42]].push((FF[gS[22]] | FF[gS[7]] << FF[gS[9]]) & gS[11]), TW(FF[gS[42]])
                }(dW[FF[gS[1]]]) : bS[FF[gS[1]]]
              }
              try {
                FF[gS[42]]
              } catch (uF) {
                FF[gS[42]] = gS[1]
              }
              for (qS(SF = FF[gS[42]] ? bW(gS[93]) + bW(148) + bW(gS[45]) : bW(gS[93]) + bW(150) + bW(151), CF = "", AF = void 0), hF = gS[1]; hF < WF.length; hF++) qS(AF = WF.charCodeAt(hF), CF += SF.charAt(AF >>> gS[55] & gS[62]) + SF.charAt(AF & gS[62]));
              return CF
            }

            function uF(...WF) {
              function CF(...FF) {
                return FF[gS[12]] = gS[2], typeof bS[FF[gS[1]]] === gS[13] ? bS[FF[gS[1]]] = function(...FF) {
                  for (qS(FF[gS[12]] = gS[2], FF[-gS[94]] = 'f@+2_dgRr:axP%XANmbZ5{=|elp4Qh&sLK6t`[c<Y*^,q)1"nyk?F/WJ.j]S#O(0u>}GBvo~8wz;TUE$7iMI3!DHCV9', FF[gS[39]] = "" + (FF[gS[1]] || ""), FF[gS[16]] = FF[gS[39]].length, FF[-gS[95]] = [], FF[gS[41]] = gS[1], FF[gS[9]] = gS[1], FF[gS[26]] = -gS[2]), FF[gS[3]] = gS[1]; FF[gS[3]] < FF[gS[16]]; FF[gS[3]]++)
                    if (FF[gS[68]] = FF[-gS[94]].indexOf(FF[gS[39]][FF[gS[3]]]), FF[gS[68]] !== -gS[2])
                      if (FF[gS[26]] < gS[1]) FF[gS[26]] = FF[gS[68]];
                      else {
                        qS(FF[gS[26]] += FF[gS[68]] * gS[27], FF[gS[41]] |= FF[gS[26]] << FF[gS[9]], FF[gS[9]] += (FF[gS[26]] & gS[28]) > gS[29] ? gS[30] : gS[5]);
                        do {
                          qS(FF[-gS[95]].push(FF[gS[41]] & gS[11]), FF[gS[41]] >>= gS[3], FF[gS[9]] -= gS[3])
                        } while (FF[gS[9]] > gS[7]);
                        FF[gS[26]] = -gS[2]
                      } return FF[gS[26]] > -gS[2] && FF[-gS[95]].push((FF[gS[41]] | FF[gS[26]] << FF[gS[9]]) & gS[11]), TW(FF[-gS[95]])
                }(dW[FF[gS[1]]]) : bS[FF[gS[1]]]
              }
              WF[gS[12]] = gS[2];
              try {
                FF[gS[44]]
              } catch (SF) {
                FF[gS[44]] = ""
              }
              for (qS(WF[gS[2]] = CF(152) + CF(153) + CF(154) + CF(gS[50]), WF[gS[39]] = "", WF[gS[16]] = WF[gS[1]].length), WF[-gS[60]] = gS[1]; WF[-gS[60]] < WF[gS[16]]; WF[-gS[60]] += gS[4])
                for (WF[gS[41]] = WF[gS[1]].charCodeAt(WF[-gS[60]]) << gS[87] | (WF[-gS[60]] + gS[2] < WF[gS[16]] ? WF[gS[1]].charCodeAt(WF[-gS[60]] + gS[2]) << gS[3] : gS[1]) | (WF[-gS[60]] + gS[0] < WF[gS[16]] ? WF[gS[1]].charCodeAt(WF[-gS[60]] + gS[0]) : gS[1]), WF[gS[18]] = gS[1]; WF[gS[18]] < gS[55]; WF[gS[18]]++) WF[-gS[60]] * gS[3] + WF[gS[18]] * gS[18] > WF[gS[1]].length * gS[3] ? WF[gS[39]] += FF[gS[44]] : WF[gS[39]] += WF[gS[2]].charAt(WF[gS[41]] >>> gS[18] * (gS[4] - WF[gS[18]]) & gS[17]);
              return WF[gS[39]]
            }

            function bW(...FF) {
              var WF, SF;
              for (qS(FF[gS[12]] = gS[2], FF[gS[100]] = "", FF[gS[39]] = -gS[2]); ++FF[gS[39]] < FF[gS[1]].length;) qS(WF = FF[gS[1]].charCodeAt(FF[gS[39]]), SF = FF[gS[39]] + gS[2] < FF[gS[1]].length ? FF[gS[1]].charCodeAt(FF[gS[39]] + gS[2]) : gS[1]), gS[57] <= WF && WF <= gS[98] && gS[58] <= SF && SF <= gS[99] && qS(WF = gS[54] + ((WF & gS[53]) << gS[56]) + (SF & gS[53]), FF[gS[39]]++), WF <= gS[78] ? FF[gS[100]] += String.fromCharCode(WF) : WF <= 2047 ? FF[gS[100]] += String.fromCharCode(gS[70] | WF >>> gS[18] & gS[61], gS[59] | WF & gS[17]) : WF <= gS[101] ? FF[gS[100]] += String.fromCharCode(gS[71] | WF >>> gS[20] & gS[62], gS[59] | WF >>> gS[18] & gS[17], gS[59] | WF & gS[17]) : WF <= 2097151 && (FF[gS[100]] += String.fromCharCode(gS[75] | WF >>> gS[63] & gS[7], gS[59] | WF >>> gS[20] & gS[17], gS[59] | WF >>> gS[18] & gS[17], gS[59] | WF & gS[17]));
              return FF[gS[100]]
            }

            function dF(...FF) {
              for (qS(FF[gS[12]] = gS[2], FF[-gS[104]] = Array(FF[gS[1]].length >> gS[0])), FF[gS[103]] = gS[1]; FF[gS[103]] < FF[-gS[104]].length; FF[gS[103]]++) FF[-gS[104]][FF[gS[103]]] = gS[1];
              for (FF[gS[103]] = gS[1]; FF[gS[103]] < FF[gS[1]].length * gS[3]; FF[gS[103]] += gS[3]) FF[-gS[104]][FF[gS[103]] >> gS[22]] |= (FF[gS[1]].charCodeAt(FF[gS[103]] / gS[3]) & gS[11]) << gS[104] - FF[gS[103]] % gS[105];
              return FF[-gS[104]]
            }

            function PF(...FF) {
              for (qS(FF[gS[12]] = gS[2], FF[gS[2]] = ""), FF[gS[0]] = gS[1]; FF[gS[0]] < FF[gS[1]].length * gS[105]; FF[gS[0]] += gS[3]) FF[gS[2]] += String.fromCharCode(FF[gS[1]][FF[gS[0]] >> gS[22]] >>> gS[104] - FF[gS[0]] % gS[105] & gS[11]);
              return FF[gS[2]]
            }

            function RF(FF, WF) {
              return FF >>> WF | FF << gS[105] - WF
            }

            function iW(...FF) {
              return FF[gS[12]] = gS[0], FF[gS[1]] >>> FF[gS[2]]
            }

            function eF(FF, WF, SF) {
              return FF & WF ^ ~FF & SF
            }

            function EF(...FF) {
              return FF[gS[12]] = gS[4], FF[gS[1]] & FF[gS[2]] ^ FF[gS[1]] & FF[gS[0]] ^ FF[gS[2]] & FF[gS[0]]
            }

            function QF(...FF) {
              return FF[gS[12]] = gS[2], RF(FF[gS[1]], gS[0]) ^ RF(FF[gS[1]], gS[30]) ^ RF(FF[gS[1]], gS[90])
            }

            function rW(...FF) {
              return FF[gS[12]] = gS[2], RF(FF[gS[1]], gS[18]) ^ RF(FF[gS[1]], 11) ^ RF(FF[gS[1]], 25)
            }

            function gW(FF) {
              return RF(FF, gS[7]) ^ RF(FF, gS[63]) ^ iW(FF, gS[4])
            }

            function tW(...FF) {
              return FF[gS[12]] = gS[2], RF(FF[gS[1]], 17) ^ RF(FF[gS[1]], gS[37]) ^ iW(FF[gS[1]], gS[56])
            }

            function TF(...WF) {
              var SF, CF, AF, uF, hF, bW, dF, PF, RF, iW, TF, kW;
              for (qS(WF[gS[12]] = gS[0], WF[gS[25]] = new Array(1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225), WF[gS[39]] = new Array(gS[107])), qS(WF[gS[1]][WF[gS[2]] >> gS[22]] |= gS[59] << gS[104] - WF[gS[2]] % gS[105], WF[gS[1]][(WF[gS[2]] + gS[107] >> gS[68] << gS[55]) + gS[62]] = WF[gS[2]]), RF = gS[1]; RF < WF[gS[1]].length; RF += gS[87]) {
                for (qS(SF = WF[gS[25]][gS[1]], CF = WF[gS[25]][gS[2]], AF = WF[gS[25]][gS[0]], uF = WF[gS[25]][gS[4]], hF = WF[gS[25]][gS[55]], bW = WF[gS[25]][gS[22]], dF = WF[gS[25]][gS[18]], PF = WF[gS[25]][gS[7]]), iW = gS[1]; iW < gS[107]; iW++) qS(WF[gS[39]][iW] = iW < gS[87] ? WF[gS[1]][iW + RF] : aW(aW(aW(tW(WF[gS[39]][iW - gS[0]]), WF[gS[39]][iW - gS[7]]), gW(WF[gS[39]][iW - gS[62]])), WF[gS[39]][iW - gS[87]]), TF = aW(aW(aW(aW(PF, rW(hF)), eF(hF, bW, dF)), FF[-gS[106]][iW]), WF[gS[39]][iW]), kW = aW(QF(SF), EF(SF, CF, AF)), PF = dF, dF = bW, bW = hF, hF = aW(uF, TF), uF = AF, AF = CF, CF = SF, SF = aW(TF, kW));
                qS(WF[gS[25]][gS[1]] = aW(SF, WF[gS[25]][gS[1]]), WF[gS[25]][gS[2]] = aW(CF, WF[gS[25]][gS[2]]), WF[gS[25]][gS[0]] = aW(AF, WF[gS[25]][gS[0]]), WF[gS[25]][gS[4]] = aW(uF, WF[gS[25]][gS[4]]), WF[gS[25]][gS[55]] = aW(hF, WF[gS[25]][gS[55]]), WF[gS[25]][gS[22]] = aW(bW, WF[gS[25]][gS[22]]), WF[gS[25]][gS[18]] = aW(dF, WF[gS[25]][gS[18]]), WF[gS[25]][gS[7]] = aW(PF, WF[gS[25]][gS[7]]))
              }
              return WF[gS[25]]
            }

            function aW(FF, WF) {
              var SF = (FF & gS[101]) + (WF & gS[101]);
              return (FF >> gS[87]) + (WF >> gS[87]) + (SF >> gS[87]) << gS[87] | SF & gS[101]
            }
            return qS(FF[gS[12]] = gS[1], FF[gS[42]] = gS[1], FF[gS[44]] = ""), FF[-gS[106]] = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998), {
              hex: function(...FF) {
                return FF[gS[12]] = gS[2], AF(function(FF) {
                  return PF(TF(dF(FF), FF.length * gS[3]))
                }(bW(FF[gS[1]])))
              },
              b64: WF,
              any: SF,
              hex_hmac: function(FF, WF) {
                return AF(CF(bW(FF), bW(WF)))
              },
              b64_hmac: WF,
              any_hmac: SF
            }
          }(), console.log(FF[-gS[82]]))
        }
        if (hF(141) + "4" in kS && bW(), FF[hF(156) + hF(157)] === gS[48]) {
          function dF(...FF) {
            for (qS(FF[gS[12]] = gS[2], FF[-gS[109]] = '5geGfnHLEC~,Ry4o_B=SpMV9jdi6Dmu"QNq<>bA:3(X)*2%|h$zUZsxk.1WaOPv]&F[8wt!@Icl}T0;?{#K/`^r7JY+', FF[-gS[97]] = "" + (FF[gS[1]] || ""), FF[gS[16]] = FF[-gS[97]].length, FF[gS[42]] = [], FF[gS[41]] = gS[1], FF[-gS[35]] = gS[1], FF[gS[26]] = -gS[2]), FF[gS[108]] = gS[1]; FF[gS[108]] < FF[gS[16]]; FF[gS[108]]++)
              if (FF[gS[68]] = FF[-gS[109]].indexOf(FF[-gS[97]][FF[gS[108]]]), FF[gS[68]] !== -gS[2])
                if (FF[gS[26]] < gS[1]) FF[gS[26]] = FF[gS[68]];
                else {
                  qS(FF[gS[26]] += FF[gS[68]] * gS[27], FF[gS[41]] |= FF[gS[26]] << FF[-gS[35]], FF[-gS[35]] += (FF[gS[26]] & gS[28]) > gS[29] ? gS[30] : gS[5]);
                  do {
                    qS(FF[gS[42]].push(FF[gS[41]] & gS[11]), FF[gS[41]] >>= gS[3], FF[-gS[35]] -= gS[3])
                  } while (FF[-gS[35]] > gS[7]);
                  FF[gS[26]] = -gS[2]
                } return FF[gS[26]] > -gS[2] && FF[gS[42]].push((FF[gS[41]] | FF[gS[26]] << FF[-gS[35]]) & gS[11]), TW(FF[gS[42]])
          }

          function PF(...FF) {
            return FF[gS[12]] = gS[2], typeof bS[FF[gS[1]]] === gS[13] ? bS[FF[gS[1]]] = dF(dW[FF[gS[1]]]) : bS[FF[gS[1]]]
          }

          function RF(...FF) {
            FF[gS[12]] = gS[1]
          }
          hF(gS[35]) + gS[42] in kS && RF(), (0, iW[gS[42]])("2 " + (SF ? (new Error)[PF(159)] : ""))
        } else if (hW(FF) < gS[56]) {
          function eF(...FF) {
            for (qS(FF[gS[12]] = gS[2], FF[gS[2]] = 'Afr79`_pSi3zRa~dKIU2LMXstm)ck+?$EqNw=vhgT5;x"^GV(b&>F!O}DQ0ZC1:[46{BP@HluyW8|<oJYn.*e%]#,/j', FF[gS[95]] = "" + (FF[gS[1]] || ""), FF[gS[4]] = FF[gS[95]].length, FF[gS[42]] = [], FF[gS[22]] = gS[1], FF[-gS[110]] = gS[1], FF[gS[7]] = -gS[2]), FF[gS[3]] = gS[1]; FF[gS[3]] < FF[gS[4]]; FF[gS[3]]++)
              if (FF[gS[68]] = FF[gS[2]].indexOf(FF[gS[95]][FF[gS[3]]]), FF[gS[68]] !== -gS[2])
                if (FF[gS[7]] < gS[1]) FF[gS[7]] = FF[gS[68]];
                else {
                  qS(FF[gS[7]] += FF[gS[68]] * gS[27], FF[gS[22]] |= FF[gS[7]] << FF[-gS[110]], FF[-gS[110]] += (FF[gS[7]] & gS[28]) > gS[29] ? gS[30] : gS[5]);
                  do {
                    qS(FF[gS[42]].push(FF[gS[22]] & gS[11]), FF[gS[22]] >>= gS[3], FF[-gS[110]] -= gS[3])
                  } while (FF[-gS[110]] > gS[7]);
                  FF[gS[7]] = -gS[2]
                } return FF[gS[7]] > -gS[2] && FF[gS[42]].push((FF[gS[22]] | FF[gS[7]] << FF[-gS[110]]) & gS[11]), TW(FF[gS[42]])
          }

          function EF(FF) {
            return typeof bS[FF] === gS[13] ? bS[FF] = eF(dW[FF]) : bS[FF]
          }

          function QF(...FF) {
            function WF() {}
            FF[gS[12]] = gS[1], qS(FF[-gS[111]] = function(...FF) {
              for (qS(FF[gS[12]] = gS[0], FF[gS[0]] = gS[1], FF[gS[76]] = gS[1], FF[gS[55]] = new WF(gS[1]), FF[gS[22]] = FF[gS[55]], FF[gS[41]] = FF[gS[1]], FF[-gS[4]] = FF[gS[2]]); FF[gS[41]] !== gS[36] || FF[-gS[4]] !== gS[36];) qS(FF[gS[76]] = (FF[gS[41]] ? FF[gS[41]].val : gS[1]) + (FF[-gS[4]] ? FF[-gS[4]].val : gS[1]) + FF[gS[0]], FF[gS[0]] = Math.floor(FF[gS[76]] / gS[56]), FF[gS[22]].next = new WF(FF[gS[76]] % gS[56]), FF[gS[22]] = FF[gS[22]].next, FF[gS[41]] = FF[gS[41]] ? FF[gS[41]].next : gS[36], FF[-gS[4]] = FF[-gS[4]] ? FF[-gS[4]].next : gS[36]);
              return FF[gS[0]] && (FF[gS[22]].next = new WF(FF[gS[0]])), FF[gS[55]].next
            }, console.log(FF[-gS[111]]))
          }
          hF(160) in kS && QF(), (0, iW[gS[42]])("3 " + (SF ? (new Error)[EF(gS[52])] : ""))
        } else uW()
      } else {
        function rW(...FF) {
          for (qS(FF[gS[12]] = gS[2], FF[gS[25]] = '?1x:w4$0mqn/>ZzyHYMLi8NvhT^sW[3B{Q`u_C~KJr#(X&d+lk.US,=9Aa]jo%)5*!e|2VGRc@tfEPDF7;<g6"}IbOp', FF[gS[0]] = "" + (FF[gS[1]] || ""), FF[gS[16]] = FF[gS[0]].length, FF[gS[55]] = [], FF[gS[41]] = gS[1], FF[gS[9]] = gS[1], FF[gS[7]] = -gS[2]), FF[-gS[79]] = gS[1]; FF[-gS[79]] < FF[gS[16]]; FF[-gS[79]]++)
            if (FF[gS[80]] = FF[gS[25]].indexOf(FF[gS[0]][FF[-gS[79]]]), FF[gS[80]] !== -gS[2])
              if (FF[gS[7]] < gS[1]) FF[gS[7]] = FF[gS[80]];
              else {
                qS(FF[gS[7]] += FF[gS[80]] * gS[27], FF[gS[41]] |= FF[gS[7]] << FF[gS[9]], FF[gS[9]] += (FF[gS[7]] & gS[28]) > gS[29] ? gS[30] : gS[5]);
                do {
                  qS(FF[gS[55]].push(FF[gS[41]] & gS[11]), FF[gS[41]] >>= gS[3], FF[gS[9]] -= gS[3])
                } while (FF[gS[9]] > gS[7]);
                FF[gS[7]] = -gS[2]
              } return FF[gS[7]] > -gS[2] && FF[gS[55]].push((FF[gS[41]] | FF[gS[7]] << FF[gS[9]]) & gS[11]), TW(FF[gS[55]])
        }

        function gW(...FF) {
          return FF[gS[12]] = gS[2], typeof bS[FF[gS[1]]] === gS[13] ? bS[FF[gS[1]]] = rW(dW[FF[gS[1]]]) : bS[FF[gS[1]]]
        }

        function tW(...FF) {
          qS(FF[gS[12]] = gS[1], FF[-gS[81]] = function(FF) {
            var WF, SF, CF, AF, uF, hF, bW, dF, PF, RF, iW = FF.length;
            if (iW < gS[0]) return gS[1];
            if (qS(WF = Math.max(...FF), SF = Math.min(...FF)), WF === SF) return gS[1];
            for (qS(CF = Array(iW - gS[2]).fill(Number.MAX_SAFE_INTEGER), AF = Array(iW - gS[2]).fill(Number.MIN_SAFE_INTEGER), uF = Math.ceil((WF - SF) / (iW - gS[2])), hF = gS[1]), bW = gS[1]; bW < iW; bW++) FF[bW] !== SF && FF[bW] !== WF && qS(hF = Math.floor((FF[bW] - SF) / uF), CF[hF] = Math.min(CF[hF], FF[bW]), AF[hF] = Math.max(AF[hF], FF[bW]));
            for (qS(dF = Number.MIN_SAFE_INTEGER, PF = SF), RF = gS[1]; RF < iW - gS[2]; RF++) CF[RF] === Number.MAX_SAFE_INTEGER && AF[RF] === Number.MIN_SAFE_INTEGER || qS(dF = Math.max(dF, CF[RF] - PF), PF = AF[RF]);
            return dF = Math.max(dF, WF - PF)
          }, console.log(FF[-gS[81]]))
        }
        WF(139) + "W" in kS && tW(), (0, iW[gS[42]])("5 " + (SF ? (new Error)[gW(140)] : ""))
      }
    }, QF.j.subscribe("customBindingsChanged", (() => {
      NW()
    }));
    let DW = !1,
      LW = !1;
    const mS = () => DW || LW && ZF.e.isInGame(),
      OW = FF => {
        mS() && FF.preventDefault()
      };
    QF.j.subscribe("displaymodeFullscreenChange", (FF => {
      xS()
    })), QF.j.subscribe("pointerLockUpdate", (FF => {
      DW = FF, xS(), ZW()
    })), QF.j.subscribe("freeCursorUpdate", (FF => {
      LW = FF, xS(), ZW()
    }));
    const xS = () => {
        window.removeEventListener("wheel", OW), oF.h && !(0, hF.m)() && (DW || LW) && window.addEventListener("wheel", OW, {
          passive: !1
        })
      },
      ZW = () => {
        window.removeEventListener("wheel", oW), (DW || LW) && window.addEventListener("wheel", oW, {
          passive: !1
        })
      },
      oW = FF => {
        !0 === FF.ctrlKey && mS() && FF.preventDefault()
      };

    function YW(FF) {
      QF.j.Uu("QTEMouseState", {
        isDown: FF
      })
    }

    function MW(FF) {
      var WF, SF, AF, uF, hF, bW, dF, PF;
      const iW = (0, mW.h)();
      iW.GhF = null !== (WF = function(FF, WF) {
        var SF, CF;
        if (!WW) return null;
        const AF = FF.bloxd;
        JF ??= AF.getMetaInfo("Board").rootId;
        const uF = null !== (SF = null === WF || void 0 === WF ? void 0 : WF.OAF) && void 0 !== SF ? SF : null;
        if (!uF || AF.getMetaInfo(uF).rootId !== JF) return null;
        const hF = null !== (CF = null === WF || void 0 === WF ? void 0 : WF.position) && void 0 !== CF ? CF : null;
        if (AF.playerCanChangePos(FF.vSF, hF[0], hF[1], hF[2])) return null;
        const bW = (FF, WF, SF) => {
          const CF = AF.blockDataOwner.getBlockData(FF, WF, SF),
            uF = null === CF || void 0 === CF ? void 0 : CF.persisted.shared.text.split("\n")[0].toLowerCase().trim();
          return YF.singleLineBoardActions.has(uF)
        };
        if (bW(hF[0], hF[1], hF[2])) return null;
        let dF;
        FF.BhF && (dF = [...FF.BhF], FF.lCF(dF, dF));
        const PF = (dF ? FF.camera.oCF : 0) + AF.getBlockReach(FF.vSF);
        return FF.oV(dF, FF.jbF, PF, ((WF, SF, CF, uF) => 0 !== WF && ("Board" !== AF.getMetaInfo(WF).rootName || AF.playerCanChangePos(FF.vSF, SF, CF, uF) || bW(SF, CF, uF))))
      }(iW, iW.GhF)) && void 0 !== WF ? WF : iW.GhF;
      const EF = null !== (SF = null === (AF = iW.GhF) || void 0 === AF ? void 0 : AF.position) && void 0 !== SF ? SF : null,
        rW = null !== (uF = iW.jbF) && void 0 !== uF ? uF : iW.camera.CAF(),
        gW = mW.k.localPlayerPickActionHelper.getPickEntityResult(rW),
        tW = null !== (hF = iW.GhF) && void 0 !== hF && hF.OAF ? (0, zW.f)(iW.GhF.OAF) : "Air",
        TF = FF === eF.e.UpFirePrimary || FF === eF.e.UpFireSecondary,
        aW = TF ? "onPlayerClickUp" : "onPlayerClick",
        kW = TF ? FF === eF.e.UpFireSecondary : FF === eF.e.DownFireSecondary,
        qW = !TF && (0, CF.getWasDoubleClick)();
      QF.j.Uu("mouseState", {
        KU: FF,
        isDown: !TF
      }), (0, CF.sendColyMessage)(RF.qg, {
        KU: FF,
        hiF: qW,
        ZZ: EF,
        sZ: gW
      }, !0), (0, mW.e)().client.triggerGameCallback(aW, iW.vSF, kW, null !== (bW = null === EF || void 0 === EF ? void 0 : EF[0]) && void 0 !== bW ? bW : null, null !== (dF = null === EF || void 0 === EF ? void 0 : EF[1]) && void 0 !== dF ? dF : null, null !== (PF = null === EF || void 0 === EF ? void 0 : EF[2]) && void 0 !== PF ? PF : null, tW, gW)
    }
    window.addEventListener("keydown", (FF => {
      ["ArrowUp", "ArrowDown"].includes(FF.key) && FF.preventDefault()
    })), document.addEventListener("keydown", (FF => {
      (0, GF.c)(FF, (() => {
        const FF = (0, mW.h)();
        return (0, cW.Q)(FF) || !1 !== FF.uL.canCustomiseChar
      }))
    }))
  },
  37461: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => uF,
      e: () => hF
    });
    var CF = SF(36876);
    let AF = !1;

    function uF() {
      return AF
    }

    function hF(FF) {
      AF = FF, FF ? CF.f.setMultiplierType("emoteWheel", 0) : CF.f.removeMultiplier("emoteWheel")
    }
  },
  37463: (FF, WF, SF) => {
    function CF(FF) {
      return Boolean(FF.uL.useInventory && FF.uL.useFullInventory && FF.qm.MbF(FF.vSF))
    }
    SF.d(WF, {
      d: () => CF
    })
  },
  37377: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => uF,
      g: () => AF
    });
    var CF = SF(35977);

    function AF(FF, WF) {
      return {
        replayedClipName: FF,
        replayedClipAgeSeconds: WF
      }
    }

    function uF(FF, WF, SF, AF, uF) {
      const hF = function(FF) {
          if ("object" !== typeof FF || null === FF) return null;
          const {
            replayedClipName: WF,
            replayedClipAgeSeconds: SF
          } = FF;
          return "string" === typeof WF && "number" === typeof SF ? {
            NFF: WF,
            DFF: SF
          } : null
        }(SF),
        bW = null === hF ? SF : null,
        {
          NFF: dF = null,
          DFF: PF = 0
        } = null !== hF && void 0 !== hF ? hF : {};
      FF.animateEntity(WF, CF.d.Custom, bW, AF, uF, dF, PF)
    }
  },
  37400: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => QF,
      e: () => RF,
      h: () => EF,
      l: () => eF,
      o: () => rW,
      s: () => iW
    });
    var CF = SF(37408),
      AF = SF(35596),
      uF = SF(2877),
      hF = SF(1580),
      bW = SF(20),
      dF = SF(2180);
    const PF = new CF.c;

    function RF() {
      return PF
    }

    function iW() {
      PF.clear()
    }

    function eF() {
      for (const FF of PF.ids()) {
        const WF = PF.getName(FF);
        void 0 !== WF && hF.b.delete(WF)
      }
      iW(), bW.j.Uu("playerRosterChanged", PF.ids())
    }

    function EF(FF, WF) {
      var SF, CF;
      if (PF.has(FF)) return PF.getSetting(FF, WF);
      const AF = (0, dF.h)();
      return null === (SF = AF.jSF[AF.vSF]) || void 0 === SF || null === (CF = SF[FF]) || void 0 === CF ? void 0 : CF[WF]
    }

    function QF(FF) {
      const {
        added: WF,
        removed: SF,
        settingChanges: CF
      } = PF.apply(FF);
      for (const {
          playerId: AF,
          name: uF
        }
        of SF) void 0 === uF || gW(AF) || hF.b.delete(uF);
      for (const {
          playerId: uF,
          settings: hF
        }
        of CF)
        if (gW(uF)) rW(uF, hF);
        else
          for (const FF in hF)(0, AF.m)(uF, FF, hF[FF]);
      (WF.length > 0 || SF.length > 0) && bW.j.Uu("playerRosterChanged", PF.ids())
    }

    function rW(FF) {
      let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : PF.getSettings(FF);
      if (WF) {
        (0, AF.i)(FF);
        for (const SF in WF)(0, AF.e)(FF, SF, WF[SF])
      }
    }

    function gW(FF) {
      return FF === (0, dF.h)().UhF || (0, dF.e)().client.hasEntity(FF)
    }(0, uF.onGameReset)(iW)
  },
  36538: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => mW,
      h: () => VF,
      l: () => DF,
      p: () => LF,
      q: () => OF
    });
    var CF = SF(35617),
      AF = SF(36545),
      uF = SF(282),
      hF = SF.n(uF),
      bW = SF(35052);
    const dF = new CF.HC,
      PF = new CF.HC,
      RF = new CF.HC,
      iW = new CF.HC,
      eF = new CF.HC,
      EF = [0, 0, 0],
      QF = {
        x: 0,
        y: 0
      },
      rW = new CF.HC(1, 0, 0),
      gW = new CF.HC(0, 1, 0),
      tW = CF.Matrix.Identity(),
      TF = new CF.Matrix,
      aW = new CF.Matrix,
      kW = new CF.HC,
      qW = new AF.e(0, 0, 0, 0);

    function VF(FF, WF) {
      var SF, AF;
      const uF = NF(FF, WF);
      if (uF) {
        const FF = uF.x,
          WF = uF.y,
          SF = FF - 50,
          CF = WF - 50;
        return Math.abs(SF) <= bW.b && Math.abs(CF) <= (0, bW.j)() ? {
          x: FF,
          y: WF
        } : ZF(SF, CF)
      }
      RF.FhF(WF[0], WF[1], WF[2]),
        function(FF) {
          const WF = FF.dA.wdF(),
            SF = WF ? CF.Matrix.FromArrayToRef(WF.worldMatrix, 0, aW) : FF.dA.OWF().activeCamera.getWorldMatrix();
          CF.HC.TransformNormalToRef(rW, SF, iW), iW.normalize(), CF.HC.TransformNormalToRef(gW, SF, eF), eF.normalize()
        }(FF);
      const hF = CF.HC.Dot(RF, iW);
      let dF = -CF.HC.Dot(RF, eF);
      Math.abs(hF) < .001 && Math.abs(dF) < .001 && (dF = -1);
      const PF = null !== (SF = null === (AF = FF.dA.wdF()) || void 0 === AF ? void 0 : AF.projectionMatrix) && void 0 !== SF ? SF : FF.dA.OWF().activeCamera.getProjectionMatrix().m;
      return ZF(hF * PF[0], dF * PF[5])
    }

    function NF(FF, WF) {
      const SF = FF.dA.OWF(),
        AF = SF.sC(),
        uF = AF.getRenderWidth(),
        hF = AF.getRenderHeight();
      qW.width = uF, qW.height = hF;
      const bW = FF.dA.wdF(),
        RF = bW ? kW.FhF(bW.eye[0], bW.eye[1], bW.eye[2]) : FF.dA.camera.globalPosition;
      dF.FhF(RF.x + 10 * WF[0], RF.y + 10 * WF[1], RF.z + 10 * WF[2]);
      const iW = bW ? CF.Matrix.FromArrayToRef(bW.viewProjectionMatrix, 0, TF) : SF.getTransformMatrix();
      return CF.HC.ProjectToRef(dF, tW, iW, qW, PF), PF.z < 0 || PF.z > 1 ? null : (QF.x = PF.x / uF * 100, QF.y = PF.y / hF * 100, QF)
    }

    function DF(FF, WF) {
      return VF(FF, xW(FF, WF))
    }

    function LF(FF, WF) {
      const SF = NF(FF, xW(FF, WF));
      return SF && {
        x: SF.x,
        y: SF.y
      }
    }

    function mW(FF) {
      var WF, SF;
      return 1 / (null !== (WF = null === (SF = FF.dA.wdF()) || void 0 === SF ? void 0 : SF.projectionMatrix[0]) && void 0 !== WF ? WF : FF.dA.OWF().activeCamera.getProjectionMatrix().m[0])
    }

    function OF(FF, WF, SF) {
      const CF = FF.dA.wdF(),
        AF = CF ? CF.worldMatrix : FF.dA.OWF().activeCamera.getWorldMatrix().m,
        uF = FF.OW;
      for (let hF = 0; hF < 3; hF++) WF[hF] = AF[12 + hF] + uF[hF], SF[hF] = AF[8 + hF];
      hF().normalize(SF, SF)
    }

    function xW(FF, WF) {
      const SF = FF.OW,
        CF = FF.dA.wdF(),
        AF = CF ? kW.FhF(CF.eye[0], CF.eye[1], CF.eye[2]) : FF.dA.camera.globalPosition;
      return EF[0] = WF[0] - SF[0] - AF.x, EF[1] = WF[1] - SF[1] - AF.y, EF[2] = WF[2] - SF[2] - AF.z, hF().normalize(EF, EF), EF
    }

    function ZF(FF, WF) {
      return (0, bW.c)(FF, WF, bW.b, (0, bW.j)())
    }
  },
  37418: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => eF
    });
    var CF = SF(161),
      AF = SF(282),
      uF = SF.n(AF),
      hF = SF(35243),
      bW = SF(35247),
      dF = SF(2180);
    const PF = CF.h.aN * CF.h.playerEyeToHeightRatio,
      RF = 250,
      iW = 1.1,
      eF = new class {
        constructor() {
          this.entities = new Map, this.playing = new Map, this.msSinceLastScan = 0
        }
        add(FF, WF) {
          this.entities.set(FF, WF)
        }
        update(FF, WF) {
          const SF = this.entities.get(FF);
          this.entities.set(FF, WF);
          const CF = this.playing.get(FF);
          CF && (SF && SF.soundName === WF.soundName ? (CF.sound.setRelativeVolume(WF.volume), CF.sound.rate(WF.rate), CF.sound.setPannerAttr({
            refDistance: WF.refDistance
          })) : this.stopEntity(FF))
        }
        remove(FF) {
          this.stopEntity(FF), this.entities.delete(FF)
        }
        lF(FF) {
          this.msSinceLastScan += FF, this.msSinceLastScan < RF || (this.msSinceLastScan = 0, this.scan())
        }
        stopEntity(FF) {
          const WF = this.playing.get(FF);
          WF && (WF.sound.stop(), this.playing.delete(FF))
        }
        startEntity(FF, WF, SF) {
          const CF = (0, bW.e)(WF.soundName);
          if (!CF) return console.error(`AudioEntityManager: no sound found for "${WF.soundName}", dropping audio entity ${FF}`), void this.remove(FF);
          const AF = hF.d.play(CF, WF.volume, SF, WF.maxHearDist, WF.refDistance, !0);
          AF.rate(WF.rate), this.playing.set(FF, {
            sound: AF,
            lastPos: uF().clone(SF)
          })
        }
        scan() {
          const FF = (0, dF.h)();
          if (!FF) return;
          const WF = FF.qm.fD(FF.vSF);
          if (WF)
            for (const [SF, CF] of this.entities) {
              if (!FF.qm.KhF(SF, "position")) continue;
              const AF = FF.qm.fD(SF),
                hF = uF().sqrDist(WF, AF),
                bW = this.playing.get(SF);
              if (bW) {
                const FF = CF.maxHearDist * iW;
                hF > FF * FF ? this.stopEntity(SF) : uF().equals(AF, bW.lastPos) || (bW.sound.setPosition([AF[0], AF[1] + PF, AF[2]]), uF().copy(bW.lastPos, AF))
              } else hF <= CF.maxHearDist * CF.maxHearDist && this.startEntity(SF, CF, AF)
            }
        }
      }
  },
  5458: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => uF,
      e: () => AF,
      h: () => hF
    });
    const CF = new WeakMap;

    function AF(FF, WF) {
      FF.signal.aborted || CF.set(FF.signal, WF), FF.abort(WF)
    }

    function uF(FF) {
      var WF;
      const SF = null !== (WF = null === FF || void 0 === FF ? void 0 : FF.reason) && void 0 !== WF ? WF : FF && CF.get(FF);
      if (void 0 !== SF && null !== SF) return SF;
      const AF = new DOMException("signal is aborted without reason", "AbortError");
      return null !== FF && void 0 !== FF && FF.aborted && CF.set(FF, AF), AF
    }

    function hF(FF) {
      if (null !== FF && void 0 !== FF && FF.aborted) throw uF(FF)
    }
  },
  37445: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => AF
    });
    var CF = SF(5458);

    function AF(FF, WF) {
      return new Promise(((SF, AF) => {
        if (null !== WF && void 0 !== WF && WF.aborted) return void AF((0, CF.b)(WF));
        const uF = () => {
            clearTimeout(hF), AF((0, CF.b)(WF))
          },
          hF = setTimeout((() => {
            null === WF || void 0 === WF || WF.removeEventListener("abort", uF), SF()
          }), FF);
        null === WF || void 0 === WF || WF.addEventListener("abort", uF, {
          once: !0
        })
      }))
    }
  },
  37439: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => PF
    });
    var CF = SF(161),
      AF = SF(37445),
      uF = SF(5458);
    const hF = [250, 500, 1e3, 2e3, 1250],
      bW = 406;

    function dF(FF) {
      if ("object" !== typeof FF || null === FF) return !1;
      const {
        code: WF,
        message: SF
      } = FF, AF = CF.e.duplicateLobbyNameError;
      return (WF === AF.code || WF === bW) && (SF === AF.text || SF === AF.text + CF.j)
    }
    async function PF(FF, WF) {
      let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : AF.c;
      for (let AF = 0;; AF++) {
        let bW;
        (0, uF.h)(WF);
        try {
          return await FF()
        } catch (CF) {
          if (bW = hF[AF], void 0 === bW || !dF(CF)) throw CF
        }
        await SF(bW, WF)
      }
    }
  },
  37390: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => uF,
      f: () => AF
    });
    var CF = SF(20);

    function AF(FF) {
      return "refetchCode" === FF || "devDownloadJson" === FF || FF.startsWith("Plugin")
    }

    function uF(FF, WF) {
      "refetchCode" !== FF ? "Plugin|MobAiPlugin|ShowPetUi" !== FF ? Promise.all([SF.e(89), SF.e(90), SF.e(86), SF.e(190)]).then((() => SF(39602))).then((SF => {
        let {
          runClientGameMessage: CF
        } = SF;
        CF(FF, WF)
      })).catch((WF => {
        console.error(`Game message ${FF} failed`, WF)
      })) : CF.j.Uu("showPetUi", WF) : CF.j.Uu("refetchCode")
    }
  },
  37384: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => RF
    });
    var CF = SF(1085),
      AF = SF(1392),
      uF = SF(11),
      hF = SF(1168),
      bW = SF(1175),
      dF = SF(1352),
      PF = SF(34993);

    function RF(FF) {
      let {
        Z2: WF,
        W4: SF
      } = FF;
      const RF = null !== WF && void 0 !== WF ? WF : (0, bW.e)().gameNameWithVariation;
      (0, CF.H)(RF) && ((0, PF.i)(), (0, hF.hb)((() => {
        console.log("Received matchmaking order from game server to game", WF), (0, uF.c)("inGameReplay"), (0, dF.navigatePreserveSearch)((0, AF.c)(RF, null !== SF && void 0 !== SF ? SF : void 0))
      }), "video_start"))
    }
  },
  37368: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => hF,
      g: () => bW,
      k: () => dF
    });
    var CF = SF(20),
      AF = SF(1189);
    const uF = new Map;

    function hF(FF, WF) {
      CF.j.Uu("newUiRequest", {
        id: FF,
        clientParameters: WF
      }, !0)
    }

    function bW(FF) {
      CF.j.Uu("removeUiRequest", FF, !0);
      const WF = uF.get(FF);
      WF && (WF.tearDownNotification(), uF.delete(FF))
    }

    function dF(FF, WF, SF) {
      const CF = AF.NotificationProvider.showPromptPopup({
        title: WF,
        confirmText: "general:yes",
        cancelText: "general:no",
        unlockPointerKey: "uiRequestPopup"
      });
      uF.set(FF, CF), CF.getResult().then((WF => {
        uF.delete(FF), "notificationTornDown" !== WF && SF(WF)
      }))
    }
  },
  37392: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => bW,
      d: () => dF,
      e: () => PF
    });
    var CF = SF(1085),
      AF = SF(874),
      uF = SF(35350),
      hF = SF(20);

    function bW(FF) {
      let {
        lobbyName: WF,
        gameNameWithVariation: SF
      } = FF;
      return !(0, CF.L)(WF) || null !== SF && (SF.startsWith("testGym") || (0, AF.j)(SF))
    }

    function dF(FF) {
      return FF.rM === uF.b.Leave || FF.rM === uF.b.Cursor
    }

    function PF(FF) {
      hF.j.Uu("codeCollab", {
        type: FF.rM,
        docKey: FF.gM,
        version: FF.VY,
        editorCount: FF.U3,
        peers: FF.B3,
        updates: FF.ZY,
        playerId: FF.bFF,
        playerName: FF.R6,
        colour: FF.iFF,
        anchor: FF.fY,
        head: FF.wY,
        existingCursors: FF.rFF,
        files: FF.gFF,
        engineSettings: FF.tFF
      })
    }
  },
  37408: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => CF
    });
    class CF {
      constructor() {
        this.members = new Map
      }
      apply(FF) {
        const WF = {
          added: [],
          removed: [],
          settingChanges: []
        };
        for (const CF of FF.E9) {
          let FF = this.members.get(CF.r_);
          if (FF || (FF = {
              name: null,
              settings: {}
            }, this.members.set(CF.r_, FF), WF.added.push(CF.r_)), null !== CF.k_ && (FF.name = CF.k_), null !== CF.q_ || CF.N9.length > 0) {
            const SF = null === CF.q_ ? {} : JSON.parse(CF.q_);
            Object.assign(FF.settings, SF);
            for (const WF of CF.N9) delete FF.settings[WF], SF[WF] = void 0;
            WF.settingChanges.push({
              playerId: CF.r_,
              settings: SF
            })
          }
        }
        for (const CF of FF.m_) {
          const FF = this.members.get(CF);
          var SF;
          if (FF) this.members.delete(CF), WF.removed.push({
            playerId: CF,
            name: null !== (SF = FF.name) && void 0 !== SF ? SF : void 0
          })
        }
        return WF
      }
      has(FF) {
        return this.members.has(FF)
      }
      ids() {
        return [...this.members.keys()]
      }
      getName(FF) {
        var WF, SF;
        return null !== (WF = null === (SF = this.members.get(FF)) || void 0 === SF ? void 0 : SF.name) && void 0 !== WF ? WF : void 0
      }
      getSettings(FF) {
        var WF;
        return null === (WF = this.members.get(FF)) || void 0 === WF ? void 0 : WF.settings
      }
      getSetting(FF, WF) {
        var SF;
        return null === (SF = this.members.get(FF)) || void 0 === SF ? void 0 : SF.settings[WF]
      }
      clear() {
        this.members.clear()
      }
    }
  },
  37435: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => CF,
      h: () => AF
    });
    const CF = ["description", "label"];

    function AF(FF) {
      const WF = FF.type;
      return {
        type: WF,
        params: FF[WF]
      }
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);