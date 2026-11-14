export const id = 103;
export const ids = [103];
export const modules = {
  37554: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => rB,
      f: () => uc
    });
    var Vc = nc(35);
    let Ic = !1;

    function rB() {
      return Ic
    }

    function uc(cB) {
      Ic !== cB && (Ic = cB, Vc.i.Vu("replayViewer|videoExportChanged"))
    }
  },
  37463: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => rB
    });
    var Vc = nc(35),
      Ic = nc(1594);

    function rB(cB) {
      let {
        taskId: Bc,
        progress: nc
      } = cB;
      const Vc = Ic.d.get("_tasks");
      null !== Vc && void 0 !== Vc && Vc[Bc] && Ic.d.apply({
        _tasks: {
          ...Vc,
          [Bc]: {
            ...Vc[Bc],
            progress: nc
          }
        }
      })
    }
    Vc.i.subscribe("clientTaskProgress", (cB => {
      rB(cB)
    }))
  },
  37461: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => gn,
      f: () => YB,
      i: () => LB
    });
    var Vc = nc(2848),
      Ic = nc(174),
      rB = nc(283),
      uc = nc(51),
      sc = nc(2187),
      Mc = nc(2903),
      Pc = nc(2945),
      qB = nc(1090);
    const Oc = new WeakMap;
    class Tc {
      constructor(cB, Bc) {
        this.callbacks = Bc, this.VPc = void 0, this.sessionId = void 0, this.bD = [], this.Ytc = !1, this.CV = !1, this.Ltc = void 0, this.Av = 0, this.dispose = () => {
          this.CV || (this.CV = !0, Oc.delete(this), this.bD.length = 0, this.Ltc())
        }, this.VPc = cB, this.sessionId = cB.sessionId, Oc.set(this, []), this.Ltc = this.VPc.tC("*", ((cB, Bc) => {
          if (this.CV) return;
          const nc = Number(cB);
          this.Ytc ? this.gSc(nc, Bc) : this.bD.push({
            id: nc,
            payload: Bc
          })
        })), this.VPc.yC(this.dispose)
      }
      gSc(cB, Bc) {
        try {
          (0, Mc.Pb)(cB) && (Bc = (0, Mc.d)(cB, Pc.QV.from(Bc)));
          const nc = Oc.get(this)[cB];
          if ("function" !== typeof nc) {
            if (this.callbacks.Utc) return void this.callbacks.Utc(cB, Bc);
            throw new Error(`No onMessage handler registered for message id ${cB}`)
          }
          nc(Bc)
        } catch (nc) {
          this.callbacks.bSc(`Error in onMessage ${cB} with payload ${JSON.stringify(Bc)}`, nc)
        } finally {
          this.Av++
        }
      }
      Ztc() {
        for (const {
            id: cB,
            payload: Bc
          }
          of this.bD) {
          if (this.CV) break;
          this.gSc(cB, Bc)
        }
        this.bD.length = 0
      }
      nPc() {
        return this.CV
      }
      Qtc() {
        if (this.Ytc || this.CV) throw new Error("Trying to getOnMessageRegistrationHandler after registration finished");
        return {
          tC: (cB, Bc) => {
            if (this.Ytc || this.CV) throw new Error("Trying to call onMessage after registration finished");
            this.tC(cB, Bc)
          },
          finishRegistration: () => {
            if (this.CV) throw new Error("Cannot finish message registration after disposal");
            this.Ytc = !0, this.Ztc()
          }
        }
      }
      tC(cB, Bc) {
        var nc, Vc;
        null === (nc = (Vc = this.callbacks).Ctc) || void 0 === nc || nc.call(Vc);
        const Ic = Oc.get(this);
        for (; cB > Ic.length;) Ic[Ic.length] = null;
        Ic[cB] = Bc
      }
      send(cB, Bc) {
        this.vSc(), (0, qB.y)(Bc) ? this.VPc.fD(cB, Bc) : this.VPc.send(cB, Bc)
      }
      vSc() {
        var cB, Bc;
        5 === fc++ && (null === (cB = (Bc = this.callbacks).Ctc) || void 0 === cB || cB.call(Bc), fc = 0)
      }
      uq() {
        this.dispose(), this.VPc.uq()
      }
      OV() {
        this.dispose(), this.VPc.OV()
      }
    }
    let fc = 0;
    var mB = nc(2862);
    class ec extends Tc {
      constructor(cB) {
        super(cB, {
          Ctc: () => {
            (0, uc.j)(!0) && (0, Vc.zD)()
          },
          bSc: (cB, Bc) => {
            var nc;
            null === (nc = (0, sc.g)()) || void 0 === nc || nc.oI(cB, Bc)
          }
        }), (0, mB.e)(cB)
      }
      jD(cB, Bc) {
        return !!(0, mB.j)((0, mB.b)(), this.VPc, cB, Bc) && (this.vSc(), !0)
      }
      uq() {
        super.uq(), this.VPc.hq.an.NBc = void 0
      }
    }
    var tB = nc(35),
      Sc = nc(1594),
      yB = nc(1495),
      zB = nc(946),
      pc = nc(35121),
      hc = nc(37463),
      aB = nc(37470),
      lc = nc(36594),
      Yc = nc(36361),
      Lc = nc(569),
      gB = nc(36966);

    function Uc(cB, Bc, nc) {
      const Vc = function(cB) {
          const Bc = new Int32Array(cB.length * gB.d);
          return cB.forEach(((cB, nc) => {
            const Vc = nc * gB.d;
            if (4 === cB.length) {
              const [nc, Ic, rB, uc] = cB;
              Bc.set([nc, Ic, rB, nc, Ic, rB, uc], Vc)
            } else {
              const [nc, Ic, rB, uc, sc, Mc, Pc] = cB;
              Bc.set([nc, rB, sc, Ic, uc, Mc, Pc], Vc)
            }
          })), Bc
        }(nc),
        Ic = (Bc, nc, Vc, Ic) => {
          cB.setBlockNoMulti(Bc, nc, Vc, Ic, !0)
        };
      cB.client.gameRecorder.isCapturing() ? (0, gB.gb)(Vc, (0, gB.cb)(Vc), Ic) : cB.TB.rn.qIc(Vc, {
        fVc: Ic,
        isHookId: Bc => cB.blockChangeHasHooks(Bc),
        watched: () => function(cB, Bc, nc) {
          const Vc = [],
            Ic = (cB, Bc, nc) => {
              Vc.push(cB, Bc, nc)
            },
            rB = new Set;
          for (let uc = 0; uc < nc.length; uc += gB.d)
            for (let Bc = (0, Lc.N)(nc[uc]); Bc <= (0, Lc.N)(nc[uc + 3]); Bc++)
              for (let Vc = (0, Lc.N)(nc[uc + 1]); Vc <= (0, Lc.N)(nc[uc + 4]); Vc++)
                for (let sc = (0, Lc.N)(nc[uc + 2]); sc <= (0, Lc.N)(nc[uc + 5]); sc++) {
                  const nc = `${Bc}|${Vc}|${sc}`;
                  rB.has(nc) || (rB.add(nc), cB.blockDataOwner.forEachDataCell(Bc, Vc, sc, Ic))
                }
          return Bc.forEachCell(Ic), Int32Array.from(Vc)
        }(cB, Bc, Vc)
      }), cB.TB.usc()
    }
    var bB = nc(36127),
      Zc = nc(37474),
      Qc = nc(37479),
      Cc = nc(867);
    var vB = nc(3630);

    function Dc(cB) {
      const Bc = cB.rn;
      let nc = 0,
        rB = -1,
        uc = -1 / 0,
        sc = null,
        Pc = !0;
      const qB = () => {
        if (++nc % 10 !== 0) return;
        const qB = (0, Vc.getLastReceivedPacketId)();
        if (qB <= rB) return;
        const [Oc, Tc, fc] = cB.BC.rC(cB.Pnc), mB = ! function(cB) {
          var Bc;
          let nc = null === (Bc = cB.BC.WMc(cB.Pnc)) || void 0 === Bc ? void 0 : Bc.aI;
          if (void 0 === nc) return !1;
          const Vc = new Set;
          for (; void 0 !== nc && !Vc.has(nc);) {
            var Ic;
            Vc.add(nc);
            const Bc = cB.BC.getState(nc, "smoothToServerPos"),
              rB = Array.isArray(Bc) ? null : null === Bc || void 0 === Bc ? void 0 : Bc.serverPosition;
            if (rB) {
              const Bc = cB.BC.rC(nc);
              if (Math.abs(Bc[0] - rB[0]) > 10 || Math.abs(Bc[1] - rB[1]) > 10 || Math.abs(Bc[2] - rB[2]) > 10) return !0
            }
            nc = null === (Ic = cB.BC.WMc(nc)) || void 0 === Ic ? void 0 : Ic.aI
          }
          return !1
        }(cB) && function(cB, Bc, nc, Vc) {
          const rB = Ic.e.kI;
          for (let Ic = 0; Ic < cB.length; Ic++) {
            const uc = cB[Ic];
            if (!(0, vB.j)(Bc, nc, Vc, uc[0] * rB, uc[1] * rB, uc[2] * rB)) return !1
          }
          return !0
        }(Bc.tu.vI, Oc, Tc, fc), ec = null === sc || Math.abs(Oc - sc[0]) > 8 || Math.abs(Tc - sc[1]) > 8 || Math.abs(fc - sc[2]) > 8, tB = !Pc || ec || performance.now() - uc >= 1e4;
        Pc = mB, mB && tB && (rB = qB, uc = performance.now(), sc = [Oc, Tc, fc], (0, Vc.sendColyMessage)(Mc._f, {
          PJ: qB
        }))
      };
      cB.on("cn", qB), (0, Vc.onGameResetOnce)((() => {
        cB.off("cn", qB)
      }))
    }
    var Nc = nc(35377),
      Ec = nc(309),
      oc = nc.n(Ec),
      Wc = nc(5454),
      wc = nc(36618),
      kB = nc(36340),
      Xc = nc(3638),
      Hc = nc(36678),
      Fc = nc(36477),
      Jc = nc(35891),
      jB = nc(36223),
      Rc = nc(35363),
      iB = nc(35371),
      Kc = nc(37488),
      xB = nc(37494),
      dc = nc(2819),
      Ac = nc(1330),
      Gc = nc(2180),
      cn = nc(2230),
      BB = nc(36819),
      nB = nc(35656),
      VB = nc(3823),
      IB = nc(37528),
      rn = nc(36673),
      uB = nc(3422),
      sB = nc(36130),
      MB = nc(35730),
      PB = nc(36683),
      qn = nc(37501),
      OB = nc(37505),
      TB = nc(35887);
    class fB {
      constructor(cB, Bc, nc) {
        this.gameNameWithVariation = cB, this.TB = nc, this.stateReplicationHandler = void 0, this.stateReplicationHandler = new OB.e(Bc, this.TB)
      }
      setupStateReplicationHandlers() {
        this.stateReplicationHandler.setup()
      }
      setupOnMessageListeners(cB, Bc) {
        const nc = this.TB,
          Ic = this.gameNameWithVariation;
        cB.tC(Mc.Zb, (cB => {
          let {
            occ: Bc,
            Wcc: Vc,
            kBc: Ic,
            Xcc: rB,
            Hcc: uc,
            Fcc: sc,
            Jcc: Mc,
            jBc: Pc,
            size: qB
          } = cB;
          (0, kB.j)(nc, Bc, [uc, sc, Mc], Vc, Ic, JSON.parse(rB), Pc, qB)
        })), cB.tC(Mc.W, (cB => {
          (0, bB.b)(nc).setCantPickUp(cB, !0), nc.BC.Tsc(cB, "itemState") && (nc.BC.getState(cB, "itemState").jBc = !0)
        })), cB.tC(Mc.Kd, (cB => {
          (0, bB.b)(nc).setCantPickUp(cB, !1), nc.BC.Tsc(cB, "itemState") && (nc.BC.getState(cB, "itemState").jBc = !1)
        })), cB.tC(Mc.Bc, (cB => {
          Sc.d.applyNewClientOptions(cB)
        })), cB.tC(Mc.Cc, (cB => {
          let {
            eId: Bc,
            settings: Vc
          } = cB;
          (0, MB.h)(Bc);
          for (const nc in Vc)(0, MB.e)(Bc, nc, Vc[nc]);
          if ("canSee" in Vc && nc.BC.Tsc(Bc, "hidingMeshManager")) {
            const cB = nc.BC.getState(Bc, "hidingMeshManager");
            cB.canSee = (0, PB.d)("canSee", Vc.canSee), cB._forceUpdate = !0
          }
        })), cB.tC(Mc.Ue, (cB => {
          let {
            hic: Bc,
            bK: Ic,
            jK: rB,
            iK: uc
          } = cB;
          const sc = [Ic, rB, uc];
          nc.BC.setPosition(nc.Pnc, sc), (0, Vc.sendColyMessage)(Mc.wg, {
            nH: Bc,
            IH: Xc.e
          }), tB.i.Vu("localPlayerTeleported", {
            pos: sc,
            isCorrection: !1
          })
        })), cB.tC(Mc.Pc, (cB => {
          let {
            qBc: Bc,
            Occ: nc,
            Tcc: Vc,
            fcc: Ic
          } = cB;
          this.stateReplicationHandler.setUpIfQueued(Bc);
          const rB = [nc, Vc, Ic];
          tB.i.Vu(`otherPlayerTeleported|${Bc}`, {
            pos: rB
          })
        })), cB.tC(Mc.jd, (cB => {
          let {
            xBc: Bc,
            dcc: Ic,
            Acc: rB,
            Gcc: uc,
            cnc: sc,
            BBc: Pc,
            nBc: qB,
            IBc: Oc,
            VBc: Tc,
            sBc: fc
          } = cB;
          const mB = [Ic, rB, uc];
          nc.BC.setPosition(nc.Pnc, mB);
          const ec = nc.BC.Qsc(nc.Pnc),
            Sc = nc.BC.cIc(nc.Pnc);
          oc().set(Sc.Xnc, 0, 0, 0), oc().set(Sc.Hnc, 0, 0, 0), oc().set(Sc.Qu, sc, Pc, qB), Sc.Fnc(), ec._flying = null !== fc, fc ? (ec.flyAccel.MBc = fc.MBc, ec.flyAccel.PBc = fc.PBc) : ec.flyAccel.reset(), Oc && ec.movementType === Wc.n.GLIDING && (ec.rnc = Oc.rnc, oc().copy(ec.uBc, Oc.uBc)), (0, Vc.sendColyMessage)(Mc.wg, {
            nH: Bc,
            IH: Xc.e
          }), tB.i.Vu("localPlayerTeleported", {
            pos: mB,
            isCorrection: !0
          })
        }));

        function rB() {
          return nc.BC.nMc(nc.Pnc)
        }
        cB.tC(Mc.bb, (cB => {
          let {
            chatMsgId: Bc,
            content: nc,
            chatterEId: Vc
          } = cB;
          tB.i.Vu("chat", {
            serverChatMsgId: Bc,
            content: nc,
            chatterEId: Vc
          }, !0)
        })), cB.tC(Mc._c, (cB => {
          Gc.c.onReceiveColyseusPing(cB)
        })), cB.tC(Mc.re, (cB => {
          let {
            key: Bc,
            value: nc
          } = cB;
          (0, yB.setCookie)(Ic, Bc, nc)
        })), cB.tC(Mc.we, (cB => {
          tB.i.Vu("setDiscordReportKey", cB)
        })), cB.tC(Mc.Sb, (Bc => {
          let {
            Q0: Ic,
            Q8: rB
          } = Bc;
          console.log("Local client is eId", Ic), tB.i.Vu("loadingScreenState", "loadingPage:loadingWorld"), (0, Vc.setAdjustment)(rB), nc.tMc = Ic, nc.BC.Tsc(nc.Pnc, nc.BC.names.entityName) && nc.BC.Bnc(nc.Pnc, nc.BC.names.entityName), (0, sc.e)().setEntityName(nc.tMc, (0, sc.e)().getRawEntityName(nc.Pnc)), nc.Mnc[nc.tMc] = {}, nc.BC.cVc(nc.Pnc, nc.BC.names.entityName), tB.i.Vu("initInfoReceived", cB),
            function(cB) {
              let Bc = null,
                nc = -1 / 0,
                Ic = null;
              const rB = () => {
                  Ic = null;
                  const rB = Math.ceil(cB.tnc[0]),
                    uc = Math.ceil(cB.tnc[1]);
                  Bc && Bc[0] === rB && Bc[1] === uc || (Bc = [rB, uc], nc = performance.now(), (0, Vc.sendColyMessage)(Mc.Wf, {
                    UH: rB,
                    ZH: uc
                  }))
                },
                uc = () => {
                  null === Ic && (Ic = setTimeout(rB, Math.max(0, nc + 250 - performance.now())))
                };
              rB(), cB.on("addRemoveDistanceChanged", uc), (0, Vc.onGameResetOnce)((() => {
                cB.off("addRemoveDistanceChanged", uc), null !== Ic && clearTimeout(Ic)
              }))
            }(nc.rn), Dc(nc), uc.client.onServerConnectionFinalised()
        })), cB.tC(Mc.We, (cB => {
          tB.i.Vu("TopRightHelper", cB, !0)
        })), cB.tC(Mc.od, (cB => {
          let {
            type: Bc,
            location1: nc,
            location2: Vc,
            location3: Ic,
            score: rB
          } = cB;
          (0, cn.C)({
            type: Bc,
            location1: nc,
            location2: Vc,
            location3: Ic,
            score: rB
          })
        })), cB.tC(Mc.Zd, (cB => {
          let {
            type: Bc,
            resourceType: nc,
            amount: Vc,
            category: Ic,
            itemName: rB
          } = cB;
          (0, cn.D)({
            type: Bc,
            resourceType: nc,
            amount: Vc,
            category: Ic,
            itemName: rB
          })
        })), cB.tC(Mc.G, (cB => {
          nc.rn.RMc.add(cB), nc.rn.xPc.delete(cB)
        })), cB.tC(Mc.P, (cB => {
          nc.rn.xPc.add(cB), nc.rn.RMc.delete(cB)
        })), cB.tC(Mc.Od, (cB => {
          nc.rn.xPc.delete(cB), nc.rn.RMc.delete(cB)
        })), cB.tC(Mc.L, (cB => {
          nc.rn.iPc.add(cB), nc.rn.dMc.delete(cB)
        })), cB.tC(Mc.S, (cB => {
          nc.rn.dMc.add(cB), nc.rn.iPc.delete(cB)
        })), cB.tC(Mc.Rd, (cB => {
          nc.rn.dMc.delete(cB), nc.rn.iPc.delete(cB)
        })), cB.tC(Mc.I, (cB => {
          (0, qB.$)(cB, nc.rn.AMc), (0, qB.$)(cB, nc.rn.KMc), nc.rn.KMc.push(cB)
        })), cB.tC(Mc.R, (cB => {
          (0, qB.$)(cB, nc.rn.KMc), (0, qB.$)(cB, nc.rn.AMc), nc.rn.AMc.push(cB)
        })), cB.tC(Mc.Qd, (cB => {
          (0, qB.$)(cB, nc.rn.KMc), (0, qB.$)(cB, nc.rn.AMc)
        })), cB.tC(Mc.ff, (cB => {
          let {
            y5: Bc,
            p_: Vc
          } = cB;
          Vc ? nc.rn.xVc.delete(Bc) : nc.rn.xVc.add(Bc)
        })), cB.tC(Mc.ef, (cB => {
          let {
            I6: Bc,
            rcc: Vc
          } = cB;
          uc.updateWalkThroughRect(nc.Pnc, Bc, Vc)
        })), (0, Vc.onGameResetOnce)((() => {
          nc.rn.RMc = new Set, nc.rn.xPc = new Set, nc.rn.iPc = new Set, nc.rn.dMc = new Set, nc.rn.KMc = [], nc.rn.AMc = [], nc.rn.xVc = new Set, nc.rn.I6 = [], nc.rn.dnc = []
        })), cB.tC(Mc.Te, (cB => {
          (0, hc.d)(cB)
        })), cB.tC(Mc.Nb, (cB => {
          lc.e.applyServerUpdate(cB)
        })), cB.tC(Mc._, (cB => {
          ! function(cB, Bc) {
            for (const {
                E1: nc,
                I9: Vc
              }
              of Bc) {
              const Bc = Yc.d[Vc];
              if (Bc) {
                const {
                  compX: Vc,
                  compY: Ic,
                  compZ: rB,
                  mainMultiblock: uc
                } = Bc;
                cB.UBc(nc[0] - Vc, nc[1] - Ic, nc[2] - rB, uc)
              }
            }
            for (const {
                E1: nc,
                I9: Vc,
                u9: Ic
              }
              of Bc) cB.setBlockNoMulti(nc[0], nc[1], nc[2], Vc, !0), cB.blockDataOwner.setBlockData(nc[0], nc[1], nc[2], null === Ic ? void 0 : JSON.parse(Ic)), cB.blockAdded(nc[0], nc[1], nc[2], Vc)
          }(uc, cB), tB.i.Vu("changeBlockFail", cB), uc.client.triggerGameCallback("onChangeBlockFail", cB), tB.i.Vu("EditBoard", {
            pos: null
          }), tB.i.Vu("EditCodeBlock", {
            pos: null,
            canChangePos: null
          })
        })), cB.tC(Mc.Xc, (cB => {
          for (const {
              name: Bc,
              amount: nc,
              attributes: Vc
            }
            of cB) rB().pickUpItem({
            name: Bc,
            amount: nc,
            typeObj: kB.w[Bc],
            attributes: Vc
          })
        })), cB.tC(Mc.ze, (cB => {
          let {
            index: Bc,
            name: nc,
            amount: Vc,
            attributes: Ic
          } = cB;
          rB().setItemSlot(Bc, nc, Vc, Ic)
        })), cB.tC(Mc.Qe, (cB => {
          let {
            Ycc: Bc,
            Qcc: Vc
          } = cB;
          nc.BC.BMc(nc.Pnc) ? (Vc && console.error("Had to sync inven"), nc.BC.VMc(nc.Pnc).loadFromString(Bc), tB.i.Vu("syncedInvenFromServer")) : console.log("Got resync inven but don't have inven component")
        })), cB.tC(Mc.lb, (() => {
          rB().clearInventory()
        })), cB.tC(Mc.hc, (cB => {
          let {
            leaveEventType: Bc,
            category: nc,
            subCategory: Vc,
            value: Ic
          } = cB;
          (0, cn.L)({
            leaveEventType: Bc,
            category: nc,
            subCategory: Vc,
            value: Ic
          })
        })), cB.tC(Mc.sb, (cB => {
          let {
            cat1: Bc,
            cat2: nc,
            cat3: Vc,
            value: Ic
          } = cB;
          (0, cn.w)({
            cat1: Bc,
            cat2: nc,
            cat3: Vc,
            value: Ic
          })
        }));
        const uc = (0, sc.e)();
        cB.tC(Mc.nb, (cB => {
          Uc(uc, lc.e, cB)
        })), cB.tC(Mc.Be, (cB => {
          tB.i.Vu("setSelectedInventorySlotI", cB, !0)
        })), cB.tC(Mc.gc, (cB => {
          let {
            category: Bc,
            timeframe: nc,
            data: Vc
          } = cB;
          tB.i.Vu("leaderboardResponse", {
            category: Bc,
            timeframe: nc,
            data: Vc
          })
        })), cB.tC(Mc.F, (cB => {
          let {
            A7: Bc,
            iV: nc
          } = cB;
          this.stateReplicationHandler.setUpIfQueued(Bc), Bc = (0, Nc.d)(Bc), (0, sc.e)().client.gameRecorder.recordBulletShot(Bc, nc), tB.i.Vu(`bulletShot|${Bc}`, {
            bulletDirections: nc
          })
        })), cB.tC(Mc.Ob, (cB => {
          let {
            K9: Bc,
            B3: nc
          } = cB;
          tB.i.Vu("damagedByOtherPlayer", {
            K9: Bc,
            direction: nc
          }, !0)
        })), cB.tC(Mc.fd, (cB => {
          tB.i.Vu("playerKilled", cB, !0), (0, sc.e)().client.gameRecorder.recordPlayerKilled(cB.deadEId, cB.killerEId, cB.withItem, cB.killstreak)
        })), cB.tC(Mc.wb, (cB => {
          tB.i.Vu("customKillfeed", cB, !0), (0, sc.e)().client.gameRecorder.recordCustomKillfeed(cB.killer, cB.victim, cB.withItem)
        })), cB.tC(Mc.pd, (cB => {
          let {
            pcc: Bc,
            hcc: Vc
          } = cB;
          this.stateReplicationHandler.setUpIfQueued(Bc);
          const Ic = nc.BC.lMc(Bc);
          null !== Ic && void 0 !== Ic && Ic.isGun() && Ic.reload(Date.now(), Vc)
        })), cB.tC(Mc.Ne, (() => {
          tB.i.Vu("showShopTutorial", null, !0)
        })), cB.tC(Mc.md, (cB => {
          tB.i.Vu("progressBarUpdate", cB, !0)
        })), cB.tC(Mc.Vb, (cB => {
          tB.i.Vu("middleScreenBarInitiate", {
            duration: cB.I3,
            U3: cB.U3,
            horizBarRemOffset: cB.o3
          }, !0)
        })), cB.tC(Mc.Bd, (() => {
          tB.i.Vu("middleScreenBarRemove", !0)
        })), cB.tC(Mc.de, (cB => {
          let {
            y_: Bc,
            ZN: Vc
          } = cB;
          const Ic = Vc ? (0, rn.f)(nc, Vc) : void 0;
          tB.i.Vu("sendHitmarker", {
            y_: Bc,
            screenPos: Ic
          }, !0)
        })), cB.tC(Mc.ue, (cB => {
          let {
            id: Bc,
            position: nc,
            style: Vc,
            text: Ic,
            l_: rB
          } = cB;
          tB.i.Vu("setDirectionArrow", {
            id: Bc,
            position: nc,
            style: Vc,
            text: (0, Mc.p)(Ic),
            l_: rB
          }, !0)
        })), cB.tC(Mc.hb, (cB => {
          let {
            id: Bc
          } = cB;
          tB.i.Vu("clearDirectionArrow", {
            id: Bc
          }, !0)
        })), cB.tC(Mc.u, (cB => {
          let {
            pN: Bc,
            W4: Vc,
            animationScript: Ic,
            k_: rB,
            j_: uc,
            i_: Mc,
            K4: Pc
          } = cB;
          Bc = (0, Nc.d)(Bc);
          const qB = null === Ic && null !== Mc ? (0, Zc.e)(Mc, Pc) : Ic;
          (0, sc.e)().client.gameRecorder.recordAnimateEntity(Bc, Vc, qB, rB, uc), (0, bB.b)(nc).animations.animateEntity(Bc, Vc, Ic, rB, uc, Mc, Pc), null !== Ic || Bc === nc.Pnc && Vc === sB.d.Emote && (0, sc.e)().client.cameraController.endTemporaryThirdPerson()
        })), cB.tC(Mc.$e, (cB => {
          let {
            X3: Bc,
            K3: nc
          } = cB;
          if (uc.hVc(Bc[0], Bc[1], Bc[2])) {
            const cB = (0, sc.e)().sZ(Bc[0], Bc[1], Bc[2]);
            (0, sc.e)().updateMailboxContents(Bc[0], Bc[1], Bc[2], cB, nc)
          }
        })), cB.tC(Mc.cb, (cB => {
          let {
            bcc: Bc,
            vcc: Vc,
            w6: Ic,
            dD: rB,
            kcc: uc,
            jcc: Mc,
            R6: Pc,
            icc: qB
          } = cB;
          const Oc = nc.BC.VMc(nc.Pnc);
          if (Mc) return Oc.chestContentsRefreshed(Vc, qB), void tB.i.Vu("chestRefreshedFromServer");
          (Bc || Oc.gBc) && (Bc ? (Oc.chestOpened(Vc, Ic, rB, uc, Pc), null !== uc && (0, sc.e)().client.ironChestPasskeyCache.onChestOpened(rB, uc)) : Oc.chestClosed(), tB.i.Vu("chestToggleFromServer", Bc, !0))
        })), cB.tC(Mc.xb, (cB => {
          let {
            craftingRecipeItemName: Bc,
            recipesForItem: Vc
          } = cB;
          Bc ? uc.craftingManager.editRecipesForPlayer(nc.Pnc, Bc, Vc) : uc.craftingManager.resetAllPlayerRecipes(nc.Pnc), tB.i.Vu("craftingRecipesEdited", {
            itemName: Bc,
            recipesForItem: Vc
          })
        })), cB.tC(Mc.Ce, (cB => {
          let {
            vehicleEId: Bc,
            overrides: nc
          } = cB;
          (0, sc.e)().applyRiddenVehicleSettingOverrides(Bc, nc)
        })), cB.tC(Mc.df, (cB => {
          let {
            Y_: Bc,
            L_: Vc,
            gI: Ic
          } = cB;
          (0, sc.e)().updatePositionAndPhysics(nc.Pnc, {
            type: Bc,
            tier: Vc
          }, !0, Ic)
        })), cB.tC(Mc.$, (cB => {
          let {
            pose: Bc,
            E8: Vc
          } = cB;
          nc.BC.cPc(nc.Pnc).setPose(Bc, Vc)
        })), cB.tC(Mc.ae, (cB => {
          (0, qn.d)(cB)
        })), cB.tC(Mc.dd, (cB => {
          for (const Bc of cB)(0, Hc.x)(Bc);
          tB.i.Vu("playerCosmeticsUpdated", cB, !0)
        })), cB.tC(Mc.x, (cB => {
          for (const Bc of cB)(0, nB.h)(nc, Bc)
        })), cB.tC(Mc.nc, (cB => {
          let {
            M6: Bc,
            qcc: Vc,
            mcc: Ic,
            tcc: rB,
            ycc: sc,
            gcc: Mc,
            U6: Pc
          } = cB;
          this.stateReplicationHandler.setUpIfQueued(Bc), Bc = (0, Nc.d)(Bc);
          const qB = nc.BC.tPc(Bc);
          if (qB && (qB.lastHurtTime = performance.now()), (0, wc.playRigHurt)(nc, Bc, Mc), tB.i.Vu("lifeformHurt", {
              eId: Bc,
              U6: Pc
            }), Vc) {
            const cB = (0, rn.f)(nc, Vc.ZN);
            tB.i.Vu("yourAttackHit", {
              y_: rB,
              screenPos: cB,
              hitSelf: Bc === nc.Pnc
            })
          }
          Bc === nc.Pnc && (uc.shakePlayerCamera(Bc, sc / 40, 200), tB.i.Vu("closeShopOnDamaged", null), tB.i.Vu("damagedByOtherPlayer", {
            K9: null,
            direction: Mc,
            ycc: sc
          }, !0));
          const Oc = nc.BC.rC(Bc);
          if (Oc && (Ic || rB)) {
            const cB = [Oc[0], Oc[1] + 1, Oc[2]];
            Ic && (0, Fc.l)(nc, Fc.C, cB, 15), rB && (0, Fc.l)(nc, Fc.p, cB, 10)
          }
        })), cB.tC(Mc.lc, (cB => {
          let {
            eId: Bc,
            Dcc: Vc,
            Ecc: Ic
          } = cB;
          (0, bB.b)(nc).setHealthFrac((0, Nc.d)(Bc), Ic), tB.i.Vu("lifeformHealthChanged", {
            eId: (0, Nc.d)(Bc),
            Dcc: Vc,
            Ecc: Ic
          })
        })), cB.tC(Mc.A, (cB => {
          let {
            aBc: Bc,
            lcc: Vc
          } = cB;
          (0, sc.e)().playerAttacked(nc.Pnc, Bc, Vc)
        })), cB.tC(Mc.ec, (cB => {
          (0, sc.e)().client.leaveGameUnwanted({
            reason: cB,
            requiresRefresh: !1,
            canReconnect: !1,
            automaticallyReconnect: !1
          }), (0, Ac.navigatePreserveSearch)("/")
        })), cB.tC(Mc.xd, (cB => {
          let {
            Mcc: Bc,
            Pcc: Vc
          } = cB;
          nc.BC.nMc(nc.Pnc).removeItemName(Bc, Vc)
        })), cB.tC(Mc.le, (cB => {
          const {
            ys: Bc,
            NMc: Vc
          } = (0, Jc.f)([cB[0], cB[1], cB[2]]);
          TB.e.setLookDirection(nc, Bc, Vc), (0, jB.u)(Bc, Vc);
          const Ic = nc.BC.cPc(nc.Pnc);
          Ic && (Ic.heading = Bc)
        })), cB.tC(Mc.pe, (cB => {
          uc.client.cameraController.setCameraZoom(cB)
        })), cB.tC(Mc.Je, (cB => {
          let {
            N9: Bc,
            E9: Vc
          } = cB;
          uc.shakePlayerCamera(nc.Pnc, Bc, Vc)
        })), cB.tC(Mc.pb, (cB => {
          (0, dc.onCosmeticPackGranted)(cB)
        })), cB.tC(Mc.fe, (cB => {
          tB.i.Vu("serverUpdating", Date.now() + cB, !0)
        })), cB.tC(Mc.xc, Qc.e), cB.tC(Mc.Lc, (cB => {
          let {
            id: Bc,
            Ix: nc
          } = cB;
          const {
            type: Ic,
            params: rB
          } = (0, IB.f)(nc), uc = {
            ...rB
          };
          for (const Vc of IB.e) Vc in uc && uc[Vc] && (uc[Vc] = (0, Mc.p)(uc[Vc]));
          VB.e.queueQTE(Bc, Ic, uc).getResult().then((cB => {
            "boolean" === typeof cB && (0, Vc.sendColyMessage)(Mc.Nh, {
              qteId: Bc,
              qteResponse: cB
            })
          }))
        })), cB.tC(Mc.Ed, (cB => {
          VB.e.cancelQTE(cB)
        })), (0, Vc.onGameResetOnce)((() => {
          VB.e.reset()
        })), cB.tC(Mc.Mc, (cB => {
          let {
            id: Bc,
            clientParameters: nc
          } = cB;
          (0, aB.e)(Bc, nc)
        })), cB.tC(Mc.Gd, (cB => {
          (0, aB.h)(cB)
        })), cB.tC(Mc.Ze, (cB => {
          let {
            text: Bc,
            id: nc
          } = cB;
          (0, aB.j)(nc, Bc, (cB => {
            (0, Vc.sendColyMessage)(Mc.bj, {
              Qv: nc,
              Dv: cB,
              Fv: 5
            })
          }))
        })), cB.tC(Mc.zb, (cB => {
          let {
            pE: Bc,
            lE: nc,
            ZE: Vc,
            VK: Ic,
            IK: rB,
            sK: uc
          } = cB;
          Bc = (0, Nc.d)(Bc), (0, sc.e)().client.updateEffect(Bc, nc, {
            displayName: Vc,
            icon: Ic,
            duration: rB,
            level: uc
          })
        })), cB.tC(Mc.rd, (cB => {
          let {
            pE: Bc,
            lE: nc
          } = cB;
          Bc = (0, Nc.d)(Bc), (0, sc.e)().client.removeEffect(Bc, nc)
        })), cB.tC(Mc.bc, (cB => {
          nc.BC.cPc(nc.Pnc).jumpMultiplier.setMultiplierType("jumpEffectAmount", cB)
        })), cB.tC(Mc.Ye, (cB => {
          tB.i.Vu("ttbEffectMultiplier", cB)
        })), (0, Vc.onGameResetOnce)((() => {
          nc.BC.cPc(nc.Pnc).jumpMultiplier.setMultiplierType("jumpEffectAmount", 1)
        })), cB.tC(Mc.Dc, (cB => {
          (0, Fc.m)(nc, (0, qB.q)(cB))
        })), cB.tC(Mc.Hc, (cB => {
          uB.c[cB.vBc] ? (0, Fc.m)(nc, {
            ...uB.c[cB.vBc],
            pos1: cB.pos1,
            pos2: cB.pos2
          }) : console.error(`Unknown preset id: ${cB.vBc}`)
        })), cB.tC(Mc.$c, (cB => {
          var Bc, nc;
          let {
            fK: Vc,
            soundVolume: Ic,
            hK: rB,
            lK: uc
          } = cB, {
            NK: Mc,
            Bx: Pc
          } = null !== uc && void 0 !== uc ? uc : {};
          const {
            vx: qB
          } = null !== uc && void 0 !== uc ? uc : {};
          Mc = null !== (Bc = Mc) && void 0 !== Bc ? Bc : void 0, Pc = null !== (nc = Pc) && void 0 !== nc ? nc : void 0, "string" === typeof qB && this.stateReplicationHandler.setUpIfQueued(qB), (0, sc.e)().client.gameRecorder.recordPlaySound(Vc, Ic, rB, uc), Rc.d.play((0, iB.b)(Vc), Ic, qB, Mc, Pc).rate(rB)
        })), cB.tC(Mc.ie, (cB => {
          let {
            pos: Bc,
            data: nc
          } = cB;
          uc.blockDataOwner.setBlockData(Bc[0], Bc[1], Bc[2], nc), uc.blockAdded(Bc[0], Bc[1], Bc[2], uc.sZ(Bc[0], Bc[1], Bc[2]))
        })), cB.tC(Mc.Tc, (cB => {
          let {
            info: Bc
          } = cB;
          tB.i.Vu("overShopInfo", Bc, !0)
        })), cB.tC(Mc.Hb, (cB => {
          let {
            Z4: Vc,
            v_: Ic
          } = cB;
          Bc.openShop(nc.Pnc, Vc, Ic)
        })), cB.tC(Mc.w, (cB => {
          nc.BC.cIc(nc.Pnc).applyImpulse(cB)
        })), cB.tC(Mc.Fe, (cB => {
          const Bc = nc.BC.cIc(nc.Pnc);
          oc().set(Bc.Xnc, 0, 0, 0), oc().set(Bc.Hnc, 0, 0, 0), oc().copy(Bc.Qu, cB), Bc.Fnc()
        })), cB.tC(Mc.rc, (cB => {
          console.error(`[logErrorToConsole]: ${cB}`)
        })), cB.tC(Mc.Db, (cB => {
          let {
            W8: Bc,
            K8: nc,
            Z2: Vc
          } = cB;
          tB.i.Vu("flyingMiddleMessage", {
            content: (0, Mc.p)(Bc),
            K8: nc,
            Z2: Vc
          }, !0)
        })), cB.tC(Mc.jf, (cB => {
          const Bc = cB === Cc.f ? null : {
            message: `Currently loaded as variation: ${cB}`,
            type: "Warning"
          };
          tB.i.Vu("showPermanentBottomMessage", Bc, !0)
        })), cB.tC(Mc.Lb, (cB => {
          let {
            messageType: Bc,
            data: nc
          } = cB;
          (0, Kc.i)(Bc) ? (0, Kc.e)(Bc, nc) : ("freeCamPerms" === Bc && uc.client.freeCameraController.setPerms(nc.key, nc.value), uc.client.triggerGameCallback("onReceivedMessageFromServer", Bc, nc))
        })), cB.tC(Mc.ab, (() => {
          const cB = nc.BC.lMc(nc.Pnc);
          null !== cB && void 0 !== cB && cB.isChargeable() && cB.finishCharging(!1, Date.now())
        })), cB.tC(Mc.ud, (cB => {
          let {
            b_: Bc
          } = cB;
          uc.craftingManager.removeRecipes(nc.Pnc, Bc), tB.i.Vu("craftingRecipesEdited", {
            itemName: Bc,
            recipesForItem: []
          })
        })), cB.tC(Mc.bf, (cB => {
          for (const Bc in cB) {
            const nc = cB[Bc];
            for (const cB in nc) uc.client.meshCreator.handleParticleSystemUpdate(Bc, cB, nc[cB])
          }
        })), (0, Vc.onGameResetOnce)((() => {
          (0, BB.setFloatingYValue)(nc.BC.getState(nc.Pnc, "physics"), nc.BC.kIc(nc.Pnc), null)
        })), cB.tC(Mc.Bb, (cB => {
          let {
            qnc: Bc,
            OBc: Vc,
            TBc: Ic
          } = cB;
          const rB = (0, Nc.d)(Bc);
          if (rB === nc.Pnc) {
            const cB = nc.BC.kIc(nc.Pnc).position;
            Ic ??= Math.floor(cB[1]) - 1, (0, BB.setFloatingYValue)(nc.BC.getState(nc.Pnc, "physics"), nc.BC.kIc(nc.Pnc), Vc ? Ic : null)
          }(0, bB.b)(nc).setFloating(rB, Vc, Ic);
          const uc = nc.BC.getState(rB, "floating");
          uc && (uc.isFloating = Vc, uc.TBc = Vc ? Ic : null)
        })), cB.tC(Mc.mb, xB.i)
      }
    }
    window.addEventListener("beforeunload", (() => {}));
    var mn = nc(1177),
      eB = nc(3756),
      tn = nc(2329),
      SB = nc(938),
      yn = nc(2399),
      zn = nc(36240),
      pB = nc(37535),
      hB = nc(5465);

    function an(cB) {
      var Bc, nc;
      if ("object" !== typeof cB || null === cB) return {
        errType: typeof cB
      };
      const Vc = cB;
      return {
        errType: null !== (Bc = null === (nc = cB.constructor) || void 0 === nc ? void 0 : nc.name) && void 0 !== Bc ? Bc : "",
        errName: "string" === typeof Vc.name ? Vc.name : "",
        eventType: "string" === typeof Vc.type ? Vc.type : "",
        errStack: "string" === typeof Vc.stack ? Vc.stack.split("\n").slice(1).join(" | ") : ""
      }
    }

    function lB(cB) {
      if ("undefined" !== typeof ProgressEvent && cB instanceof ProgressEvent) return !0;
      if (!(cB instanceof Error)) return !1;
      const Bc = cB.code;
      return "ServerError" === cB.name && void 0 === Bc || "AbortError" === cB.name || "seat reservation expired." === cB.message || "early_leave" === cB.message
    }(0, mB.m)((cB => {
      (0, yn.h)("wasm_net", cB)
    }));
    let YB = !0;

    function LB() {
      YB = !1
    }
    class gn {
      constructor(cB) {
        this.gameNameWithVariation = void 0, this.lobbyName = void 0, this.colyClient = void 0, this.userContext = void 0, this.joinedAt = null, this.gameNameWithVariation = cB.gameNameWithVariation, this.lobbyName = cB.lobbyName, this.colyClient = cB.colyClient, this.userContext = cB.userContext
      }
      async connectToServer(cB, Bc, nc) {
        Sc.d.reset(), cB.Mnc = {
          [cB.Pnc]: {}
        }, cB.tMc = void 0, (0, qn.t)(), (0, sc.e)().removeAllEntityNames(), (0, sc.e)().setEntityName(cB.Pnc, this.userContext.getPlayerName()), (0, mn.t)({
          lobbyName: this.lobbyName
        }), console.log("Waiting for clientConnection passed promise to resolve");
        const {
          roomName: rB,
          joinOptions: uc
        } = (0, pc.d)(this.userContext, this.gameNameWithVariation, this.lobbyName, Bc, (cB => tn.c.isUsingCustomGameTexturePack(cB)));
        console.log("joining server with game", this.gameNameWithVariation, "lobbyName", this.lobbyName);
        const Mc = performance.now(),
          Pc = (0, pB.c)((() => this.colyClient.joinOrCreate(rB, uc)), nc);
        return tB.i.Vu("loadingScreenState", "loadingPage:joiningLobby"), await Pc.then((cB => {
          this.joinedAt = performance.now();
          const Bc = (0, zB.g)((() => cB.connection.isOpen));
          ! function(cB, Bc) {
            cB.yC(Bc), (0, Vc.onGameResetOnce)(Bc)
          }(cB, Bc);
          const nc = new ec(cB),
            Ic = nc.send,
            rB = nc.tC,
            uc = nc.VPc.send,
            sc = nc.VPc.tC,
            Mc = nc.gSc,
            Pc = (0, zn.h)(nc, cB, mB.q),
            qB = setInterval((() => {
              Ic === nc.send && rB === nc.tC && uc === nc.VPc.send && sc === nc.VPc.tC && Mc === nc.gSc || LB(), Pc()
            }), 1e4);
          return (0, Vc.onGameResetOnce)((() => {
            clearInterval(qB)
          })), {
            success: !0,
            successDetails: nc
          }
        })).catch((Bc => {
          if (nc.aborted && Bc === (0, hB.d)(nc)) return {
            success: !1,
            failDetails: {
              reason: "Left the game while it loaded",
              requiresRefresh: !1,
              canReconnect: !1
            }
          };
          cB.oI(`Failed to connect to bloxd room, check your internet connection. lobbyName: ${this.lobbyName}, gameNameWithVariation: ${this.gameNameWithVariation} code: ${Bc.code}\n`, Bc);
          const Vc = Bc.code;
          return Vc === Ic.d.serverUpdating.code ? (this.goToUpdateWaiting(), {
            success: !1,
            failDetails: {
              reason: Ic.d.serverUpdating.text,
              requiresRefresh: !1,
              canReconnect: !0,
              goesToUpdateWaiting: !0
            }
          }) : {
            success: !1,
            failDetails: this.onConnectionToServerLost(Vc, Bc.message, {
              site: "join",
              sinceJoinStart: UB(performance.now() - Mc),
              ...an(Bc)
            }, lB(Bc))
          }
        }))
      }
      setupServerListeners(cB, Bc, nc) {
        tB.i.Vu("loadingScreenState", "loadingPage:loadingPlayerInfo");
        const rB = new fB(this.gameNameWithVariation, Bc.VPc, cB);
        rB.setupStateReplicationHandlers();
        const uc = Bc.Qtc();
        rB.setupOnMessageListeners(uc, nc), (0, Vc.onConnectionToServerReady)(uc, Bc), uc.finishRegistration(), Bc.VPc.yC(((Bc, nc) => {
          var Vc;
          if (Bc === Ic.d.gameOrPluginKick.code) return;
          if (console.log(`Left room with code ${Bc}`), Bc === Ic.d.serverUpdating.code) return (0, yn.h)("disconnect", "Left room", "serverUpdating"), (0, sc.e)().client.leaveGame(this.getUpdateWaitingUrl()), void this.goToUpdateWaiting();
          cB.oI(`Kicked from server with code ${Bc}`, new Error);
          const rB = Object.keys(Ic.d).find((cB => Ic.d[cB].code === Bc));
          (0, yn.h)("disconnect", "Left room", null !== rB && void 0 !== rB ? rB : String(Bc));
          const uc = this.onConnectionToServerLost(Bc, void 0, {
            site: "OV",
            closeReason: null !== nc && void 0 !== nc ? nc : "",
            sinceJoined: null === this.joinedAt ? "" : UB(performance.now() - this.joinedAt)
          });
          (0, sc.e)().client.leaveGameUnwanted({
            reason: `You have disconnected from the server.\n${uc.reason}`,
            canReconnect: uc.canReconnect,
            requiresRefresh: uc.requiresRefresh,
            automaticallyReconnect: null !== (Vc = uc.automaticallyReconnect) && void 0 !== Vc && Vc
          }), (0, Ac.navigatePreserveSearch)("/")
        }))
      }
      getUpdateWaitingUrl() {
        return (0, eB.H)(this.gameNameWithVariation, this.lobbyName)
      }
      goToUpdateWaiting() {
        (0, Ac.navigatePreserveSearch)(this.getUpdateWaitingUrl())
      }
      onConnectionToServerLost(cB, Bc, nc) {
        var Vc;
        let uc = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (null !== (Vc = Bc) && void 0 !== Vc && Vc.endsWith(Ic.g) && (this.userContext.invalidateTrafficCode(), Bc = Bc.replace(Ic.g, "")), cB === Ic.d.outdatedVersion.code) return console.error("Outdated client with version ", rB.c, ", refreshing page"), (0, yB.reloadBloxd)(), {
          reason: "Outdated client",
          requiresRefresh: !0,
          canReconnect: !1
        };
        if (cB === Ic.d.loadRecaptchaError.code) return console.error("Load recaptcha error, refreshing page"), (0, yB.reloadBloxd)(), {
          reason: "Failed to load recaptcha",
          requiresRefresh: !0,
          canReconnect: !1
        };
        for (const rB in Ic.d) {
          const {
            code: nc,
            text: Vc,
            canReconnect: uc
          } = Ic.d[rB];
          if (nc === cB) {
            console.log("matched known error", cB, "leaving game");
            return {
              reason: "" === Vc ? Bc : Vc,
              requiresRefresh: !1,
              canReconnect: uc,
              automaticallyReconnect: nc === Ic.d.customGameUpdated.code || nc === Ic.d.duplicateLobbyNameError.code
            }
          }
        }
        var sc;
        (console.log("Didn't match known error, leaving game"), 1006 === cB || 1001 === cB || uc) ? console.warn("Connection lost", cB, Bc): (0, SB.wI)(new Error("Unrecognised connection loss"), {
          code: String(cB),
          cause: null !== (sc = Bc) && void 0 !== sc ? sc : "",
          ...nc,
          game: this.gameNameWithVariation,
          online: String(navigator.onLine),
          visibility: document.visibilityState
        });
        return {
          reason: `Either your internet isn't working or this is a bug.\nCode: ${cB}`,
          requiresRefresh: !1,
          canReconnect: !1
        }
      }
    }

    function UB(cB) {
      return cB < 1e3 ? "<1s" : cB < 5e3 ? "1-5s" : cB < 3e4 ? "5-30s" : cB < 3e5 ? "30s-5m" : ">5m"
    }
  },
  37505: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => iV,
      g: () => cI
    });
    var Vc, Ic, rB, uc, sc, Mc, Pc, qB, Oc, Tc, fc, mB, ec, tB, Sc, yB, zB, pc, hc, aB, lc, Yc, Lc, gB, Uc, bB, Zc, Qc, Cc, vB, Dc, Nc, Ec, oc, Wc, wc, kB, Xc, Hc, Fc, Jc, jB, Rc, iB, Kc, xB, dc, Ac, Gc, cn, BB, nB, VB, IB, rn, uB, sB, MB, PB, qn, OB, TB, fB, mn, eB, tn, SB, yn, zn, pB, hB, an, lB, YB, LB, gn, UB, bn, ZB, QB, CB, vn, DB, NB, EB, oB, WB, wB, kn, XB, HB, FB, JB, jn, RB, KB, xn, dB, AB, GB = nc(35),
      cV = nc(36127),
      Bn = nc(37517),
      nn = nc(37525),
      Vn = nc(8015),
      In = nc(564),
      rV = nc(556),
      un = nc(35391);
    let sn = (Vc = (0, Vn.type)("number"), Ic = (0, Vn.type)("number"), rB = (0, Vn.type)("number"), uc = (0, Vn.type)("number"), sc = (0, Vn.type)("number"), Mc = (0, Vn.type)("number"), Pc = (0, Vn.type)("string"), qB = class extends Vn.Schema {
        constructor() {
          super(...arguments), (0, Bn.c)(this, "id", Oc, this), (0, Bn.c)(this, "amount", Tc, this), (0, Bn.c)(this, "x", fc, this), (0, Bn.c)(this, "y", mB, this), (0, Bn.c)(this, "z", ec, this), (0, Bn.c)(this, "size", tB, this), (0, Bn.c)(this, "attributes", Sc, this)
        }
      }, Oc = (0, nn.e)(qB.prototype, "id", [Vc], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Tc = (0, nn.e)(qB.prototype, "amount", [Ic], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), fc = (0, nn.e)(qB.prototype, "x", [rB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), mB = (0, nn.e)(qB.prototype, "y", [uc], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), ec = (0, nn.e)(qB.prototype, "z", [sc], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), tB = (0, nn.e)(qB.prototype, "size", [Mc], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 1
        }
      }), Sc = (0, nn.e)(qB.prototype, "attributes", [Pc], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "{}"
        }
      }), qB),
      Mn = (yB = (0, Vn.type)("string"), zB = (0, Vn.type)("string"), pc = class extends Vn.Schema {
        constructor() {
          super(...arguments), (0, Bn.c)(this, "itemName", hc, this), (0, Bn.c)(this, "enchantmentTier", aB, this)
        }
      }, hc = (0, nn.e)(pc.prototype, "itemName", [yB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), aB = (0, nn.e)(pc.prototype, "enchantmentTier", [zB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), pc),
      Pn = (lc = (0, Vn.type)("string"), Yc = (0, Vn.type)("string"), Lc = (0, Vn.type)("number"), gB = (0, Vn.type)("number"), Uc = (0, Vn.type)("number"), bB = (0, Vn.type)("float32"), Zc = (0, Vn.type)("float32"), Qc = (0, Vn.type)("float32"), Cc = (0, Vn.type)("string"), vB = (0, Vn.type)(["number"]), Dc = (0, Vn.type)("boolean"), Nc = class extends Vn.Schema {
        constructor() {
          super(...arguments), (0, Bn.c)(this, "type", Ec, this), (0, Bn.c)(this, "name", oc, this), (0, Bn.c)(this, "x", Wc, this), (0, Bn.c)(this, "y", wc, this), (0, Bn.c)(this, "z", kB, this), (0, Bn.c)(this, "xRotation", Xc, this), (0, Bn.c)(this, "yRotation", Hc, this), (0, Bn.c)(this, "zRotation", Fc, this), (0, Bn.c)(this, "followingEId", Jc, this), (0, Bn.c)(this, "followingOffset", jB, this), (0, Bn.c)(this, "shouldMatchFollowingEntityRotation", Rc, this)
        }
      }, Ec = (0, nn.e)(Nc.prototype, "type", [lc], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), oc = (0, nn.e)(Nc.prototype, "name", [Yc], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return ""
        }
      }), Wc = (0, nn.e)(Nc.prototype, "x", [Lc], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), wc = (0, nn.e)(Nc.prototype, "y", [gB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), kB = (0, nn.e)(Nc.prototype, "z", [Uc], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Xc = (0, nn.e)(Nc.prototype, "xRotation", [bB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Hc = (0, nn.e)(Nc.prototype, "yRotation", [Zc], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Fc = (0, nn.e)(Nc.prototype, "zRotation", [Qc], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Jc = (0, nn.e)(Nc.prototype, "followingEId", [Cc], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), jB = (0, nn.e)(Nc.prototype, "followingOffset", [vB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new Vn.ArraySchema(0, 0, 0)
        }
      }), Rc = (0, nn.e)(Nc.prototype, "shouldMatchFollowingEntityRotation", [Dc], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !0
        }
      }), Nc),
      qV = (iB = (0, Vn.type)("float32"), Kc = (0, Vn.type)("float32"), xB = (0, Vn.type)("boolean"), dc = (0, Vn.type)("boolean"), Ac = (0, Vn.type)("float32"), Gc = (0, Vn.type)("boolean"), cn = (0, Vn.type)("string"), BB = (0, Vn.type)("string"), nB = (0, Vn.type)("string"), VB = (0, Vn.type)("string"), IB = (0, Vn.type)(["number"]), rn = (0, Vn.type)("number"), uB = (0, Vn.type)({
        map: Mn
      }), sB = class extends Pn {
        constructor() {
          super(...arguments), (0, Bn.c)(this, "scale", MB, this), (0, Bn.c)(this, "speed", PB, this), (0, Bn.c)(this, "jumping", qn, this), (0, Bn.c)(this, "crouching", OB, this), (0, Bn.c)(this, "cameraPitch", TB, this), (0, Bn.c)(this, "armSwinging", fB, this), (0, Bn.c)(this, "heldItemName", mn, this), (0, Bn.c)(this, "heldItemEnchantmentTier", eB, this), (0, Bn.c)(this, "pose", tn, this), (0, Bn.c)(this, "ridingVehicleEId", SB, this), (0, Bn.c)(this, "meshOffset", yn, this), (0, Bn.c)(this, "baseRenderHeading", zn, this), (0, Bn.c)(this, "armour", pB, this)
        }
      }, MB = (0, nn.e)(sB.prototype, "scale", [iB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 1
        }
      }), PB = (0, nn.e)(sB.prototype, "speed", [Kc], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), qn = (0, nn.e)(sB.prototype, "jumping", [xB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), OB = (0, nn.e)(sB.prototype, "crouching", [dc], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), TB = (0, nn.e)(sB.prototype, "cameraPitch", [Ac], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), fB = (0, nn.e)(sB.prototype, "armSwinging", [Gc], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), mn = (0, nn.e)(sB.prototype, "heldItemName", [cn], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), eB = (0, nn.e)(sB.prototype, "heldItemEnchantmentTier", [BB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), tn = (0, nn.e)(sB.prototype, "pose", [nB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "standing"
        }
      }), SB = (0, nn.e)(sB.prototype, "ridingVehicleEId", [VB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), yn = (0, nn.e)(sB.prototype, "meshOffset", [IB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new Vn.ArraySchema(0, 0, 0)
        }
      }), zn = (0, nn.e)(sB.prototype, "baseRenderHeading", [rn], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), pB = (0, nn.e)(sB.prototype, "armour", [uB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new Vn.MapSchema
        }
      }), sB),
      On = (hB = (0, Vn.type)("string"), an = (0, Vn.type)("string"), lB = (0, Vn.type)("string"), YB = (0, Vn.type)("uint8"), LB = class extends qV {
        constructor() {
          super(...arguments), (0, Bn.c)(this, "variation", gn, this), (0, Bn.c)(this, "ownerDbId", UB, this), (0, Bn.c)(this, "metaInfo", bn, this), (0, Bn.c)(this, "aiState", ZB, this)
        }
      }, gn = (0, nn.e)(LB.prototype, "variation", [hB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "default"
        }
      }), UB = (0, nn.e)(LB.prototype, "ownerDbId", [an], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), bn = (0, nn.e)(LB.prototype, "metaInfo", [lB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return ""
        }
      }), ZB = (0, nn.e)(LB.prototype, "aiState", [YB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), LB);
    QB = (0, Vn.type)("string"), CB = (0, Vn.type)("string"), vn = (0, Vn.type)("string"), DB = (0, Vn.type)("string"), NB = class extends Pn {
      constructor() {
        super(...arguments), (0, Bn.c)(this, "meshKind", EB, this), (0, Bn.c)(this, "meshOpts", oB, this), (0, Bn.c)(this, "pose", WB, this), (0, Bn.c)(this, "leaderboardTop", wB, this)
      }
    }, EB = (0, nn.e)(NB.prototype, "meshKind", [QB], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), oB = (0, nn.e)(NB.prototype, "meshOpts", [CB], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), WB = (0, nn.e)(NB.prototype, "pose", [vn], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), wB = (0, nn.e)(NB.prototype, "leaderboardTop", [DB], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    });

    function Tn(cB) {
      return Object.keys(Vn.Metadata.getFields(cB))
    }
    const fn = Tn(On);
    for (const BV of In.j)
      if (!fn.includes(BV)) throw new Error(`Mob Schema is missing a networked property: "${BV}"`);
    const mV = Tn((kn = (0, Vn.type)("string"), XB = (0, Vn.type)("float32"), HB = (0, Vn.type)("float32"), FB = (0, Vn.type)("float32"), JB = (0, Vn.type)("float32"), jn = class extends Pn {
      constructor() {
        super(...arguments), (0, Bn.c)(this, "soundName", RB, this), (0, Bn.c)(this, "volume", KB, this), (0, Bn.c)(this, "refDistance", xn, this), (0, Bn.c)(this, "maxHearDist", dB, this), (0, Bn.c)(this, "rate", AB, this)
      }
    }, RB = (0, nn.e)(jn.prototype, "soundName", [kn], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return ""
      }
    }), KB = (0, nn.e)(jn.prototype, "volume", [XB], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return 1
      }
    }), xn = (0, nn.e)(jn.prototype, "refDistance", [HB], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return un.g
      }
    }), dB = (0, nn.e)(jn.prototype, "maxHearDist", [FB], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return un.c
      }
    }), AB = (0, nn.e)(jn.prototype, "rate", [JB], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return 1
      }
    }), jn));
    for (const BV of rV.h)
      if (!mV.includes(BV)) throw new Error(`AudioEntity Schema is missing a replicated property: "${BV}"`);
    var en = nc(36988),
      tV = nc(1108),
      Sn = nc(569),
      yV = nc(36777),
      zV = nc(3441),
      pn = nc(302),
      hn = nc(35808),
      aV = nc(36678),
      lnc = nc(1819),
      Yn = nc(35730),
      Ln = nc(37019),
      gV = nc(35870),
      Un = nc(309),
      bV = nc.n(Un),
      Zn = nc(36500),
      Qn = nc(35658),
      Cn = nc(36623),
      vV = nc(36696);
    class Dn {
      constructor(cB, Bc) {
        this.bloxd = cB, this.eId = Bc, this.TB = void 0, this.colyseusEntity = void 0, this.canSeeSub = void 0, this.canAttackSub = void 0, this.interactableSub = void 0, this.overlayColourSub = void 0, this.opacitySub = void 0, this.zIndexSub = void 0, this.multilineTextBoxSub = void 0, this.previousHidingMeshManagerState = void 0, this.meshKind = void 0, this.meshOpts = void 0, this.leaderboardTop = void 0, this.meshRebuildQueued = !1, this.CV = !1, this.TB = cB.TB
      }
      initClient(cB) {
        var Bc, nc, Vc;
        this.colyseusEntity = cB, this.meshKind = cB.meshKind, this.meshOpts = cB.meshOpts, this.leaderboardTop = cB.leaderboardTop, this.TB.BC.add([cB.x, cB.y, cB.z], 1, 1, null, null, !1, !1, this.eId), this.TB.BC.cVc(this.eId, "smoothToServerPos");
        const Ic = "Person" === this.meshKind;
        this.TB.BC.cVc(this.eId, "meshRotation", {
          isServerControlled: !0,
          ...Ic ? {
            defaultRotationsPerSecond: .5
          } : {},
          childrenNodeParams: Ic ? [{
            nodeName: "HeadMesh",
            softTolerance: Ln.l,
            hardTolerance: null
          }] : []
        }), this.updateHidingMeshMgr(), this.canSeeSub = GB.i.subscribe(`otherEntitySettings|${this.eId}|canSee`, (cB => {
          this.updateHidingMeshMgr()
        }));
        const rB = () => {
          const cB = this.TB.BC.Rsc(this.eId);
          if (!cB) return;
          const Bc = (0, gV.h)(this.eId);
          if ("number" === typeof cB.JBc) {
            var nc, Vc, Ic, rB;
            const uc = null === (nc = (0, lnc.k)("head", null === (Ic = this.getSpec()) || void 0 === Ic || null === (rB = Ic.opts.textures) || void 0 === rB ? void 0 : rB.head)) || void 0 === nc || null === (Vc = nc.personModel) || void 0 === Vc ? void 0 : Vc.fullBody;
            return this.TB.tr.FBc.setPickable(cB.JBc, Bc && !uc), void(0, Qn.updatePersonAttachmentPickability)(this.TB, this.eId, Bc)
          }
          const uc = cB.mesh;
          if (uc)
            for (const sc of [uc, ...uc.getChildMeshes(!1)]) "ur" in sc && !sc.name.startsWith("Cape|") && (sc.ur = Bc)
        };
        this.canAttackSub = GB.i.subscribe(`otherEntitySettings|${this.eId}|canAttack`, rB), this.interactableSub = GB.i.subscribe(`otherEntitySettings|${this.eId}|interactable`, rB), this.overlayColourSub = GB.i.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|overlayColour`, (cB => {
          this.updateOverlayColour(cB)
        })), this.opacitySub = GB.i.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|opacity`, (cB => {
          this.updateOpacity(cB)
        })), this.zIndexSub = GB.i.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|zIndex`, (cB => {
          this.updateZIndex(cB)
        }));
        const uc = this.TB.Mnc[this.TB.Pnc][this.eId];
        this.updateOverlayColour(null !== (Bc = null === uc || void 0 === uc ? void 0 : uc.overlayColour) && void 0 !== Bc ? Bc : null), this.updateOpacity(null !== (nc = null === uc || void 0 === uc ? void 0 : uc.opacity) && void 0 !== nc ? nc : 1), this.updateZIndex(null !== (Vc = null === uc || void 0 === uc ? void 0 : uc.zIndex) && void 0 !== Vc ? Vc : 0), this.multilineTextBoxSub = (0, Yn.t)(this.TB, this.eId)
      }
      onChangeClient(cB, Bc) {
        if ("xRotation" === cB || "yRotation" === cB || "zRotation" === cB)(0, Yn.v)(this.TB, this.eId, cB, Bc);
        else if ("pose" === cB) {
          const cB = this.TB.BC.cPc(this.eId);
          cB && (cB.pose = Bc || "standing")
        } else "meshKind" === cB || "meshOpts" === cB ? (this[cB] = Bc, this.queueMeshRebuild()) : "name" === cB && "" !== Bc ? this.updateHidingMeshMgr() : "leaderboardTop" === cB && (this.leaderboardTop = Bc, GB.i.Vu(`leaderboardTop|${this.eId}`, Bc))
      }
      disposeClient() {
        this.CV = !0, this.TB.BC.deleteEntity(this.eId), GB.i.unsubscribe(this.canSeeSub), GB.i.unsubscribe(this.canAttackSub), GB.i.unsubscribe(this.interactableSub), GB.i.unsubscribe(this.overlayColourSub), GB.i.unsubscribe(this.opacitySub), GB.i.unsubscribe(this.zIndexSub), GB.i.unsubscribe(this.multilineTextBoxSub)
      }
      getCurrentHidingMeshMgrState() {
        var cB, Bc;
        return {
          canSee: null !== (cB = null === (Bc = this.TB.Mnc[this.TB.Pnc][this.eId]) || void 0 === Bc ? void 0 : Bc.canSee) && void 0 !== cB && cB,
          name: this.colyseusEntity.name,
          meshKind: this.meshKind,
          meshOpts: this.meshOpts
        }
      }
      updateHidingMeshMgr() {
        var cB, Bc, nc;
        const {
          TB: Vc
        } = this, {
          BC: Ic
        } = Vc, rB = this.getCurrentHidingMeshMgrState();
        if ((0, pn.vd)(this.previousHidingMeshManagerState, rB)) return;
        if (this.previousHidingMeshManagerState = rB, Ic.Bnc(this.eId, "hidingMeshManager"), null === (cB = Vc.Mnc[Vc.Pnc][this.eId]) || void 0 === cB || !cB.canSee) return;
        const uc = this.getSpec();
        if (!uc) return;
        const {
          type: sc,
          opts: Mc
        } = uc;
        "Person" === sc && (Mc.textures = (0, lnc.r)(Mc.textures)), Mc.eId = this.eId, Ic.cVc(this.eId, "hidingMeshManager", {
          addMeshComponent: () => {
            var cB, Bc, nc;
            "Leaderboard" === sc && (Mc.leaderboardTop = this.leaderboardTop);
            const rB = this.bloxd.client.meshCreator.getEntityMesh(sc, Mc, (cB => {
              var Bc, nc;
              if ("number" === typeof cB) {
                var Ic, rB, uc;
                const Bc = Vc.tr.FBc;
                Bc.setEntityId(cB, this.eId);
                const nc = "Person" === sc && (null === (Ic = (0, lnc.k)("head", null === (uc = Mc.textures) || void 0 === uc ? void 0 : uc.head)) || void 0 === Ic || null === (rB = Ic.personModel) || void 0 === rB ? void 0 : rB.fullBody);
                return void Bc.setPickable(cB, (0, gV.h)(this.eId) && !nc)
              }
              const Pc = cB;
              for (const sc of [Pc, ...Pc.getChildMeshes(!1)]) void 0 === sc.ur || sc.name.startsWith("Cape|") || (sc.ur = (0, gV.h)(this.eId), sc.metadata ??= new Vc.tr.sr, sc.metadata.eId = this.eId);
              this.updateOpacity(null !== (Bc = null === (nc = Vc.Mnc[Vc.Pnc][this.eId]) || void 0 === nc ? void 0 : nc.opacity) && void 0 !== Bc ? Bc : 1)
            }));
            if (!rB) return;
            const {
              JBc: uc,
              mesh: Pc,
              meshOffset: qB,
              nameYOffset: Oc,
              modelLoaded: Tc
            } = rB;
            null === Tc || void 0 === Tc || Tc.then((() => {
              var cB;
              (null === (cB = Ic.Rsc(this.eId)) || void 0 === cB ? void 0 : cB.mesh) === Pc && (this.previousHidingMeshManagerState = null, this.updateHidingMeshMgr())
            }));
            const fc = null === uc ? null : Vc.tr.FBc.FPc(uc, 0);
            if (Ic.cVc(this.eId, Ic.names.mesh, {
                JBc: uc,
                MPc: fc,
                mesh: Pc,
                Cfc: !1,
                OPc: "Leaderboard" !== sc,
                offset: qB.slice(),
                imc: "ParticleEmitter" === sc && Mc.followTargetMeshOffset ? cB => {
                  var Bc;
                  bV().copy(cB, qB);
                  const nc = null === (Bc = Ic.WMc(this.eId)) || void 0 === Bc ? void 0 : Bc.aI,
                    Vc = void 0 === nc ? null : Ic.cPc(nc);
                  if (Vc) {
                    var rB, uc;
                    const Bc = this.bloxd.getEntityHeading(null !== (rB = Vc.ridingVehicleEId) && void 0 !== rB ? rB : nc, !0),
                      Ic = Math.sin(Bc),
                      sc = Math.cos(Bc);
                    cB[0] += Vc.meshOffset[0] * sc + Vc.meshOffset[2] * Ic, cB[1] += Vc.meshOffset[1], cB[2] += Vc.meshOffset[2] * sc - Vc.meshOffset[0] * Ic;
                    const Mc = null !== (uc = Vc.ridingVehicleEId) && void 0 !== uc ? uc : null;
                    null !== Mc && (0, vV.b)(this.TB, Mc, cB)
                  }
                } : null
              }), "Person" === sc) {
              var mB, ec, tB, Sc;
              Ic.cVc(this.eId, Ic.names.meshAttachments, {
                personFullBody: null !== (mB = null === (ec = (0, lnc.k)("head", null === (Sc = Mc.textures) || void 0 === Sc ? void 0 : Sc.head)) || void 0 === ec || null === (tB = ec.personModel) || void 0 === tB ? void 0 : tB.fullBody) && void 0 !== mB && mB
              });
              for (const cB of tV.v) {
                var yB, zB, pc;
                const Bc = null === (yB = Mc.textures) || void 0 === yB ? void 0 : yB[cB];
                Bc && null !== (zB = (0, lnc.k)(cB, Bc)) && void 0 !== zB && null !== (pc = zB.attachments) && void 0 !== pc && pc.length && aV.d.Player.meshApi.updatePlayerCosmetic(this.eId, uc, cB, Bc)
              }
              Ic.cVc(this.eId, Ic.names.moveState), Ic.cVc(this.eId, "updateWalkingState", {
                JBc: uc,
                MPc: fc,
                walkingLegSwingDuration: Ln.r
              }), Ic.cVc(this.eId, "humanoidMesh", {
                JBc: uc,
                MPc: fc,
                heldItemPositionParams: {},
                maxWalkingAngleOverride: null
              }), Ic.cVc(this.eId, "animator", {
                JBc: uc,
                MPc: fc,
                modelLifeformType: "Player"
              }), Cn.g.hasAnimation("Person") && Ic.cVc(this.eId, "rigAnimation", {
                target: "Person",
                JBc: uc
              }), Ic.cPc(this.eId).pose = this.colyseusEntity.pose || "standing"
            } else if ("BloxdBlock" === sc && null !== uc) {
              Ic.cVc(this.eId, "animator", {
                JBc: uc,
                MPc: fc,
                modelLifeformType: null
              });
              const cB = (0, yV.r)(Mc.blockName);
              null !== cB && Ic.cVc(this.eId, "rigAnimation", {
                target: cB,
                JBc: uc
              })
            }
            Ic.jmc(this.eId, "entityName", {
              name: this.colyseusEntity.name,
              nameYOffset: Oc
            }), this.bloxd.setEntityName(this.eId, this.colyseusEntity.name), !0 === Mc.autoRotate && (Ic.Bnc(this.eId, "meshRotation"), Ic.cVc(this.eId, "autoRotate"));
            const {
              lineToEId: hc
            } = Mc;
            (0, Sn.E)(hc) || Ic.cVc(this.eId, "lineToEntity", {
              lineToEId: hc
            });
            const aB = Vc.Mnc[Vc.Pnc][this.eId];
            this.updateOverlayColour(null !== (cB = null === aB || void 0 === aB ? void 0 : aB.overlayColour) && void 0 !== cB ? cB : null), this.updateOpacity(null !== (Bc = null === aB || void 0 === aB ? void 0 : aB.opacity) && void 0 !== Bc ? Bc : 1), this.updateZIndex(null !== (nc = null === aB || void 0 === aB ? void 0 : aB.zIndex) && void 0 !== nc ? nc : 0)
          },
          removeMeshComponent: () => {
            "Person" !== sc && "BloxdBlock" !== sc || Ic.Bnc(this.eId, "rigAnimation"), Ic.Bnc(this.eId, Ic.names.mesh), Ic.Tsc(this.eId, Ic.names.meshAttachments) && Ic.Bnc(this.eId, Ic.names.meshAttachments), Ic.Bnc(this.eId, "entityName"), Ic.Bnc(this.eId, "autoRotate"), Ic.Bnc(this.eId, "lineToEntity"), "Person" === sc ? (Ic.Bnc(this.eId, Ic.names.moveState), Ic.Bnc(this.eId, "updateWalkingState"), Ic.Bnc(this.eId, "humanoidMesh"), Ic.Bnc(this.eId, "animator")) : "BloxdBlock" === sc && Ic.Bnc(this.eId, "animator")
          },
          hideDist: null !== (Bc = Mc.hideDist) && void 0 !== Bc ? Bc : 80,
          movingHideDist: null !== (nc = Mc.hideDist) && void 0 !== nc ? nc : 120,
          displayOutsideLoadedChunk: Mc.hideDist > 100,
          immediatelyUpdate: !0,
          kH: "BloxdBlock" === sc ? Mc.blockName : sc
        })
      }
      queueMeshRebuild() {
        this.meshRebuildQueued || (this.meshRebuildQueued = !0, queueMicrotask((() => {
          this.meshRebuildQueued = !1, this.CV || this.updateHidingMeshMgr()
        })))
      }
      getSpec() {
        return (0, zV.g)({
          meshKind: this.meshKind,
          meshOpts: this.meshOpts
        })
      }
      updateOverlayColour(cB) {
        var Bc, nc;
        if ("Person" !== this.meshKind) return;
        let Vc = new hn.c(0, 0, 0, 0);
        if (null !== cB) {
          const Bc = (0, pn.N)(cB);
          Vc = new hn.c(Bc[0] / 255, Bc[1] / 255, Bc[2] / 255, .5)
        }
        const Ic = null !== (Bc = null === (nc = this.TB.BC.Rsc(this.eId)) || void 0 === nc ? void 0 : nc.JBc) && void 0 !== Bc ? Bc : null;
        null !== Ic && aV.d.Player.meshApi.updateMeshOverlayColour(Ic, Vc)
      }
      updateZIndex(cB) {
        var Bc;
        if ("Person" !== this.meshKind) return;
        const nc = null === (Bc = this.TB.BC.Rsc(this.eId)) || void 0 === Bc ? void 0 : Bc.JBc;
        "number" === typeof nc && this.TB.tr.FBc.setRenderingGroupId(nc, cB)
      }
      updateOpacity(cB) {
        const Bc = this.TB.BC.Rsc(this.eId);
        Bc && ("number" !== typeof Bc.JBc ? Bc.mesh && "ParticleEmitter" !== this.meshKind && (0, Zn.f)(Bc.mesh, cB) : aV.d.Player.meshApi.updateMeshOpacity(Bc.JBc, cB))
      }
    }
    var Nn = nc(37511);
    class En {
      constructor(cB, Bc) {
        this.eId = Bc, this.TB = void 0, this.schema = void 0, this.TB = cB.TB
      }
      initClient(cB) {
        this.schema = cB, this.TB.BC.add([cB.x, cB.y, cB.z], .1, .1, null, null, !1, !1, this.eId), this.TB.BC.cVc(this.eId, "smoothToServerPos"), Nn.e.add(this.eId, this.copyOpts())
      }
      onChangeClient(cB) {
        rV.h.includes(cB) && Nn.e.update(this.eId, this.copyOpts())
      }
      disposeClient() {
        Nn.e.remove(this.eId), this.TB.BC.deleteEntity(this.eId)
      }
      copyOpts() {
        const {
          soundName: cB,
          volume: Bc,
          refDistance: nc,
          maxHearDist: Vc,
          rate: Ic
        } = this.schema;
        return {
          soundName: cB,
          volume: Bc,
          refDistance: nc,
          maxHearDist: Vc,
          rate: Ic
        }
      }
    }
    var onc = nc(2848),
      Wn = nc(35377),
      wn = nc(5454),
      kV = nc(36340),
      Xn = nc(2187),
      Hn = nc(36727),
      Fn = nc(7964),
      Jn = nc(37032),
      jV = nc(36318),
      Rn = nc(2399);
    class iV {
      constructor(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
          Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => performance.now();
        this.VPc = cB, this.TB = Bc, this.setupBudgetMs = nc, this.now = Vc, this.createStateCallbacks = void 0, this.roomStateCallbacks = void 0, this.allItems = {}, this.detachers = new Map, this.deferredSetups = new Map, this.queuedSetups = new Map, this.promotedSetups = new Set, this.setupBudgetLeftMs = void 0, this.lastRefillMs = void 0, this.roomState = void 0, this.onFrame = () => {
          this.setUpQueuedEntities(!0)
        }, this.eZ = () => {
          this.setUpQueuedEntities(this.now() - this.lastRefillMs > 100)
        }, this.setUpPromoted = () => {
          for (const cB of this.promotedSetups) {
            this.promotedSetups.delete(cB);
            const Bc = this.queuedSetups.get(cB);
            Bc && (this.queuedSetups.delete(cB), this.timedSetup(Bc, cB))
          }
        }, this.createStateCallbacks = (0, Fn.getStateCallbacks)(cB), this.roomStateCallbacks = this.createStateCallbacks(cB.state), this.roomState = cB.state, this.setupBudgetLeftMs = nc, this.lastRefillMs = Vc()
      }
      setup() {
        this.setupEntityHandlers(), this.setupItemHandlers(), this.registerCleanups(), this.VPc.onStateChange(this.setUpPromoted), this.TB.on("beforeInputs", this.onFrame), this.TB.on("cn", this.eZ)
      }
      setUpQueuedEntities(cB) {
        var Bc;
        if ((null === (Bc = (0, Xn.e)().client.getMsgHandler()) || void 0 === Bc ? void 0 : Bc.VPc) !== this.VPc) return this.TB.off("beforeInputs", this.onFrame), this.TB.off("cn", this.eZ), this.queuedSetups.clear(), void this.promotedSetups.clear();
        if (cB && (this.setupBudgetLeftMs = this.setupBudgetMs, this.lastRefillMs = this.now()), this.setUpPromoted(), 0 !== this.queuedSetups.size)
          for (bV().copy(Kn, this.TB.BC.rC(this.TB.Pnc)); this.setupBudgetLeftMs > 0;) {
            const cB = this.nearestQueued(Kn);
            if (null === cB) return;
            this.setUpIfQueued(cB), this.setUpPromoted()
          }
      }
      nearestQueued(cB) {
        let Bc = null,
          nc = 1 / 0;
        return this.queuedSetups.forEach(((Vc, Ic) => {
          const rB = function(cB, Bc) {
            return (Bc.x - cB[0]) ** 2 + (Bc.y - cB[1]) ** 2 + (Bc.z - cB[2]) ** 2
          }(cB, Vc);
          (null === Bc || rB < nc) && (Bc = Ic, nc = rB)
        })), Bc
      }
      setUpOrQueue(cB, Bc) {
        0 === this.queuedSetups.size && this.setupBudgetLeftMs > 0 || this.mustSetUpNow(cB, Bc) ? this.timedSetup(cB, Bc) : this.queuedSetups.set(Bc, cB)
      }
      mustSetUpNow(cB, Bc) {
        const nc = this.TB.tMc;
        if (Bc === nc) return !0;
        const Vc = this.roomState.entities.get(nc);
        return !(!Vc || Vc.ridingVehicleEId !== Bc && Vc.followingEId !== Bc) || (xV(cB.type) === en.e || (0, Xn.e)().getFollowingEntities(Bc).length > 0)
      }
      setUpIfQueued(cB) {
        const Bc = this.queuedSetups.get(cB);
        Bc && (this.queuedSetups.delete(cB), this.timedSetup(Bc, cB))
      }
      promoteIfQueued(cB) {
        null !== cB && this.queuedSetups.has(cB) && this.promotedSetups.add(cB)
      }
      timedSetup(cB, Bc) {
        const nc = this.now();
        this.setupEntity(cB, Bc), this.setupBudgetLeftMs -= this.now() - nc
      }
      setupEntityHandlers() {
        this.roomStateCallbacks.entities.FQ(((cB, Bc) => {
          this.TB.tMc ? this.setUpOrQueue(cB, Bc) : this.deferEntitySetupUntilInitInfo(cB, Bc)
        })), this.roomStateCallbacks.entities.YBc(((cB, Bc) => {
          const nc = this.deferredSetups.get(Bc);
          nc && (GB.i.unsubscribe(nc), this.deferredSetups.delete(Bc)), this.queuedSetups.delete(Bc), this.detach(Bc), (0, Xn.e)().client.disposeEntity(Bc)
        }))
      }
      deferEntitySetupUntilInitInfo(cB, Bc) {
        const nc = GB.i.RP("initInfoReceived", (() => {
          this.deferredSetups.delete(Bc), this.setUpOrQueue(cB, Bc)
        }));
        this.deferredSetups.set(Bc, nc), (0, onc.onGameResetOnce)((() => {
          this.deferredSetups.get(Bc) === nc && (GB.i.unsubscribe(nc), this.deferredSetups.delete(Bc)), (0, Xn.e)().updatePositionAndPhysics(this.TB.Pnc, {
            type: wn.o.DEFAULT,
            tier: null
          }, !0);
          const cB = this.TB.BC.Qsc(this.TB.Pnc);
          cB && (cB.movementType = wn.n.NORMAL)
        }))
      }
      setupEntity(cB, Bc) {
        const nc = Bc === this.TB.tMc;
        if (nc)(0, Xn.e)().client.wVc(this.TB.Pnc, null, null);
        else {
          const {
            type: nc
          } = cB, Vc = xV(nc);
          if (void 0 === Vc) return void
          function(cB, Bc) {
            const nc = String(cB);
            if (dn.has(nc)) return;
            dn.add(nc);
            const Vc = nc.length > 80 ? `${nc.slice(0,80)}...` : nc,
              Ic = `No client handler for entity type ${JSON.stringify(Vc)}, so entity ${Bc} is not set up`;
            console.warn(Ic), (0, Rn.h)("uncaught", Ic, "unknown_entity_type")
          }(nc, Bc);
          (0, Xn.e)().client.wVc(Bc, cB, new Vc((0, Xn.e)(), Bc, nc))
        }
        const Vc = this.createStateCallbacks(cB);
        if (nc) return this.setupMapSchemaCallbacks(Bc, cB, Vc, "armour"), this.setupScalarField(Bc, cB, Vc, "scale"), this.setupScalarField(Bc, cB, Vc, "ridingVehicleEId"), this.setupScalarField(Bc, cB, Vc, "followingEId"), this.setupScalarField(Bc, cB, Vc, "followingOffset"), void this.setupScalarField(Bc, cB, Vc, "shouldMatchFollowingEntityRotation");
        for (const Ic of Tn(cB.constructor)) cB[Ic] instanceof Vn.MapSchema ? this.setupMapSchemaCallbacks(Bc, cB, Vc, Ic) : this.setupScalarField(Bc, cB, Vc, Ic)
      }
      setupMapSchemaCallbacks(cB, Bc, nc, Vc) {
        const Ic = nc[Vc],
          rB = new Map;
        Ic.FQ(((nc, Ic) => {
          if (this.onEntityFieldChange(cB, Bc, Vc, {
              key: Ic,
              value: nc
            }), !(nc instanceof Vn.Schema)) return;
          const uc = this.createStateCallbacks(nc),
            sc = [];
          for (const rB of Tn(nc.constructor)) sc.push(this.listenForFutureChanges(uc, rB, (() => {
            this.onEntityFieldChange(cB, Bc, Vc, {
              key: Ic,
              value: nc
            })
          })));
          rB.set(Ic, (() => {
            for (const cB of sc) cB()
          }))
        })), Ic.YBc(((nc, Ic) => {
          var uc;
          null === (uc = rB.get(Ic)) || void 0 === uc || uc(), rB.delete(Ic), this.onEntityFieldChange(cB, Bc, Vc, {
            key: Ic,
            value: null
          })
        })), this.addDetacher(cB, (() => {
          for (const cB of rB.values()) cB();
          rB.clear()
        }))
      }
      setupScalarField(cB, Bc, nc, Vc) {
        this.onEntityFieldChange(cB, Bc, Vc, Bc[Vc]);
        const Ic = this.listenForFutureChanges(nc, Vc, (nc => {
          this.onEntityFieldChange(cB, Bc, Vc, nc)
        }));
        this.addDetacher(cB, Ic)
      }
      addDetacher(cB, Bc) {
        let nc = this.detachers.get(cB);
        nc || (nc = [], this.detachers.set(cB, nc)), nc.push(Bc)
      }
      detach(cB) {
        for (const nc of null !== (Bc = this.detachers.get(cB)) && void 0 !== Bc ? Bc : []) {
          var Bc;
          nc()
        }
        this.detachers.delete(cB)
      }
      listenForFutureChanges(cB, Bc, nc) {
        return cB.listen(Bc, nc, !1)
      }
      onEntityFieldChange(cB, Bc, nc, Vc) {
        switch (nc) {
          case "ridingVehicleEId": {
            this.promoteIfQueued(Vc);
            const Bc = this.TB.BC.cPc((0, Wn.d)(cB));
            Bc && (Bc.ridingVehicleEId = Vc);
            break
          }
          case "armour":
            this.handleArmourChange(cB, Vc);
            break;
          case "followingEId":
            this.promoteIfQueued(Vc), this.handleFollowingEIdChange(cB, Bc, Vc);
            break;
          case "xRotation":
          case "yRotation":
          case "zRotation":
            this.handleRotationChange(cB, nc, Vc);
            break;
          case "scale":
            this.handleScaleChange(cB, Vc);
            break;
          case "baseRenderHeading":
            this.handleBaseRenderHeadingChange(cB, Vc);
            break;
          case "followingOffset":
            this.handleFollowingOffsetChange(cB, Vc);
            break;
          case "shouldMatchFollowingEntityRotation":
            this.handleShouldMatchFollowingEntityRotationChange(cB, Vc);
            break;
          case "x":
          case "y":
          case "z":
            return void this.handlePositionChange(cB, nc, Vc)
        }(0, Xn.e)().client.updateEntityField(cB, nc, Vc)
      }
      handleArmourChange(cB, Bc) {
        var nc, Vc;
        const {
          key: Ic,
          value: rB
        } = Bc;
        (0, aV.w)(cB, Ic, null !== (nc = null === rB || void 0 === rB ? void 0 : rB.itemName) && void 0 !== nc ? nc : null, null !== (Vc = null === rB || void 0 === rB ? void 0 : rB.enchantmentTier) && void 0 !== Vc ? Vc : null)
      }
      handleFollowingEIdChange(cB, Bc, nc) {
        const Vc = (0, Wn.d)(cB),
          Ic = Vc === this.TB.Pnc;
        if (this.TB.BC.Bnc(Vc, this.TB.BC.names.kY), nc) this.TB.BC.Bnc(Vc, "smoothToServerPos"), this.TB.BC.cVc(Vc, this.TB.BC.names.kY, {
          aI: (0, Wn.d)(nc),
          offset: Array.from(Bc.followingOffset),
          wMc: Bc.shouldMatchFollowingEntityRotation,
          FMc: !0,
          JMc: (cB, Vc) => {
            if (bV().copy(cB, Bc.followingOffset), Bc.ridingVehicleEId === nc) {
              const Bc = (0, Wn.d)(nc),
                Ic = (0, Xn.e)().getEntityHeading(Bc, Vc);
              bV().fu(cB, cB, bV().ZERO, Ic)
            }
          }
        });
        else if (!Ic) {
          this.TB.BC.Tsc(Vc, "smoothToServerPos") || this.TB.BC.cVc(Vc, "smoothToServerPos");
          const cB = this.TB.BC.getState(Vc, "smoothToServerPos"),
            Bc = this.TB.BC.kIc(Vc).position;
          (0, jV.setServerPosition)(cB, Bc[0], Bc[1], Bc[2])
        }
      }
      handleRotationChange(cB, Bc, nc) {
        const Vc = "xRotation" === Bc ? 0 : "yRotation" === Bc ? 1 : 2;
        for (const Ic of (0, Xn.e)().getFollowingEntities(cB)) {
          const cB = this.TB.BC.getState(Ic, "meshRotation"),
            Bc = this.TB.BC.WMc(Ic);
          cB && Bc.wMc && (cB.serverSetRotation[Vc] = nc)
        }
      }
      handleScaleChange(cB, Bc) {
        const nc = (0, Wn.d)(cB);
        if (GB.i.Vu(`entityScale|${nc}`, Bc), nc === this.TB.Pnc) {
          var Vc;
          (0, Xn.e)().removeFromEyeHeightCache(nc);
          const cB = this.TB.BC.Qsc(this.TB.Pnc),
            Bc = null !== (Vc = null === cB || void 0 === cB ? void 0 : cB.physicsState) && void 0 !== Vc ? Vc : {
              type: wn.o.DEFAULT,
              tier: null
            };
          (0, Xn.e)().updatePositionAndPhysics(this.TB.Pnc, Bc, !1)
        }
        const Ic = (0, Xn.e)().getLifeformType(nc);
        if (null === Ic) return;
        const {
          physicsBodyWidth: rB,
          physicsBodyHeight: uc
        } = (0, Jn.e)(Bc, Ic);
        this.TB.BC.oMc(nc, rB, uc, rB)
      }
      handleBaseRenderHeadingChange(cB, Bc) {
        const nc = this.TB.BC.getState(cB, "meshRotation");
        nc && (nc.baseRenderRotation[1] = Bc);
        for (const Vc of (0, Xn.e)().getFollowingEntities(cB)) {
          const cB = this.TB.BC.getState(Vc, "meshRotation"),
            nc = this.TB.BC.WMc(Vc);
          cB && nc.wMc && (cB.baseRenderRotation[1] = Bc)
        }
      }
      handleFollowingOffsetChange(cB, Bc) {
        const nc = this.TB.BC.WMc((0, Wn.d)(cB));
        if (nc && nc.offset) {
          const cB = Bc ? Array.from(Bc) : bV().ZERO;
          nc.offset[0] = cB[0], nc.offset[1] = cB[1], nc.offset[2] = cB[2]
        }
      }
      handleShouldMatchFollowingEntityRotationChange(cB, Bc) {
        const nc = this.TB.BC.WMc((0, Wn.d)(cB));
        nc && (nc.wMc = null === Bc || void 0 === Bc || Bc)
      }
      handlePositionChange(cB, Bc, nc) {
        if (this.TB.BC.Tsc(cB, "smoothToServerPos")) {
          const Vc = this.TB.BC.getState(cB, "smoothToServerPos");
          (0, jV.setServerPositionAxis)(Vc, An[Bc], nc)
        }
      }
      setupItemHandlers() {
        this.roomStateCallbacks.items.FQ(((cB, Bc) => {
          this.allItems[Bc] = cB;
          const nc = (0, cV.b)(this.TB).cantPickUpItem(Bc);
          (0, kV.j)(this.TB, Bc, [cB.x, cB.y, cB.z], cB.id, cB.amount, JSON.parse(cB.attributes), nc, cB.size);
          const Vc = this.createStateCallbacks(cB);
          for (const Ic of Tn(sn)) this.onItemFieldChange(Bc, Ic, cB[Ic]), this.addDetacher(Bc, this.listenForFutureChanges(Vc, Ic, (cB => {
            this.onItemFieldChange(Bc, Ic, cB)
          })))
        })), this.roomStateCallbacks.items.YBc(((cB, Bc) => {
          delete this.allItems[Bc], this.detach(Bc), this.TB.BC.Tsc(Bc, this.TB.BC.names.itemState) && this.TB.BC.deleteEntity(Bc), (0, cV.b)(this.TB).disposeEntity(Bc)
        }))
      }
      onItemFieldChange(cB, Bc, nc) {
        if (Bc in An) {
          if (this.TB.BC.Tsc(cB, "itemState")) {
            const Vc = this.TB.BC.getState(cB, "smoothToServerPos");
            (0, jV.setServerPositionAxis)(Vc, An[Bc], nc)
          }
          return
        }
        if (!this.TB.BC.Tsc(cB, "itemState")) return;
        const Vc = this.TB.BC.getState(cB, "itemState");
        Vc[Bc] = "attributes" === Bc ? JSON.parse(nc) : nc, "amount" === Bc && (Vc.creationTime = Date.now())
      }
      registerCleanups() {
        (0, onc.onGameResetOnce)((() => {
          this.TB.BC.Bnc(this.TB.Pnc, this.TB.BC.names.kY)
        })), (0, onc.onGameResetOnce)((() => {
          for (const cB in this.allItems) this.TB.BC.deleteEntity(cB)
        })), (0, onc.onGameResetOnce)((() => {
          for (const cB of [...this.detachers.keys()]) this.detach(cB)
        })), (0, onc.onGameResetOnce)((() => {
          (0, cV.b)(this.TB).clear();
          for (const cB of (0, Xn.e)().client.iterateEntityIds())(0, Xn.e)().client.disposeEntity(cB)
        }))
      }
    }
    const Kn = [0, 0, 0];

    function xV(cB) {
      if ("string" !== typeof cB) return;
      const Bc = cB.indexOf("|"),
        nc = -1 === Bc ? cB : cB.slice(0, Bc),
        Vc = cI();
      return Object.hasOwn(Vc, nc) ? Vc[nc] : void 0
    }
    const dn = new Set;
    const An = {
      x: 0,
      y: 1,
      z: 2
    };
    let Gn = null;

    function cI() {
      return null !== Gn || (Gn = {
        ...Object.fromEntries(rV.i.map((cB => {
          const {
            kH: Bc
          } = (0, Hn.b)(cB);
          return [cB, Bc]
        }))),
        Pebble: en.e,
        Snowball: en.e,
        "Snowball Launcher": en.e,
        "Reinforced Pebble": en.e,
        Bullet: en.e,
        "Reinforced Ball": en.e,
        Ball: en.e,
        Mango: en.e,
        "Moonstone Orb": en.e,
        ...Object.fromEntries(In.l.map((cB => [(0, pn.Fb)(cB), en.e]))),
        Arrow: en.e,
        "Arrow of Speed": en.e,
        "Arrow of Poison": en.e,
        "Arrow of Slowness": en.e,
        "Arrow of Weakness": en.e,
        "Arrow of Knockback": en.e,
        "Arrow of Strength": en.e,
        "Arrow of Invisibility": en.e,
        "Arrow of Jumping": en.e,
        "Arrow of Defense": en.e,
        "Arrow of Instant Healing": en.e,
        "Arrow of Instant Damage": en.e,
        "Arrow of Regeneration": en.e,
        "Arrow of Haste": en.e,
        "Arrow of Shield": en.e,
        "Arrow of Double Jump": en.e,
        "Arrow of Heat Resistance": en.e,
        "Arrow of X-Ray Vision": en.e,
        "Arrow of Mining Yield": en.e,
        "Arrow of Brain Rot": en.e,
        "Arrow of Milk": en.e,
        Fireball: en.e,
        "Bouncy Bomb": en.e,
        RPG: en.e,
        "Obby RPG": en.e,
        "Super RPG": en.e,
        "Grenade Launcher": en.e,
        Iceball: en.e,
        Coconut: en.e,
        "Splash Speed Potion": en.e,
        "Splash Defense Potion": en.e,
        "Splash Strength Potion": en.e,
        "Splash Invisibility Potion": en.e,
        "Splash Jump Potion": en.e,
        "Splash Knockback Potion": en.e,
        "Splash Poison Potion": en.e,
        "Splash Speed Potion II": en.e,
        "Splash Defense Potion II": en.e,
        "Splash Strength Potion II": en.e,
        "Splash Jump Potion II": en.e,
        "Splash Knockback Potion II": en.e,
        "Splash Poison Potion II": en.e,
        "Splash Slowness Potion": en.e,
        "Splash Slowness Potion II": en.e,
        "Splash Weakness Potion": en.e,
        "Splash Weakness Potion II": en.e,
        "Splash Milk Potion": en.e,
        "Splash Instant Damage Potion": en.e,
        "Splash Instant Damage Potion II": en.e,
        "Splash Instant Healing Potion": en.e,
        "Splash Instant Healing Potion II": en.e,
        "Splash Regeneration Potion": en.e,
        "Splash Regeneration Potion II": en.e,
        "Splash Haste Potion": en.e,
        "Splash Haste Potion II": en.e,
        "Splash Shield Potion": en.e,
        "Splash Shield Potion II": en.e,
        "Splash Double Jump Potion": en.e,
        "Splash Heat Resistance Potion": en.e,
        "Splash X-Ray Vision Potion": en.e,
        "Splash Mining Yield Potion": en.e,
        "Splash Mining Yield Potion II": en.e,
        "Splash Brain Rot Potion": en.e,
        "Yellow Paintball Gun": en.e,
        "White Paintball Gun": en.e,
        "Red Paintball Gun": en.e,
        "Purple Paintball Gun": en.e,
        "Pink Paintball Gun": en.e,
        "Orange Paintball Gun": en.e,
        "Magenta Paintball Gun": en.e,
        "Lime Paintball Gun": en.e,
        "Light Gray Paintball Gun": en.e,
        "Light Blue Paintball Gun": en.e,
        "Green Paintball Gun": en.e,
        "Gray Paintball Gun": en.e,
        "Cyan Paintball Gun": en.e,
        "Brown Paintball Gun": en.e,
        "Blue Paintball Gun": en.e,
        "Black Paintball Gun": en.e,
        "Yellow Heavy Paintball Gun": en.e,
        "White Heavy Paintball Gun": en.e,
        "Red Heavy Paintball Gun": en.e,
        "Purple Heavy Paintball Gun": en.e,
        "Pink Heavy Paintball Gun": en.e,
        "Orange Heavy Paintball Gun": en.e,
        "Magenta Heavy Paintball Gun": en.e,
        "Lime Heavy Paintball Gun": en.e,
        "Light Gray Heavy Paintball Gun": en.e,
        "Light Blue Heavy Paintball Gun": en.e,
        "Green Heavy Paintball Gun": en.e,
        "Gray Heavy Paintball Gun": en.e,
        "Cyan Heavy Paintball Gun": en.e,
        "Brown Heavy Paintball Gun": en.e,
        "Blue Heavy Paintball Gun": en.e,
        "Black Heavy Paintball Gun": en.e,
        "Toxin Ball": en.e,
        "Splash Aura XP Potion": en.e,
        "Splash Aura XP Potion II": en.e,
        "Arrow of Aura XP": en.e,
        Firecracker: en.e,
        "Rainbow Firecracker": en.e,
        "White Firecracker": en.e,
        "Orange Firecracker": en.e,
        "Magenta Firecracker": en.e,
        "Light Blue Firecracker": en.e,
        "Yellow Firecracker": en.e,
        "Lime Firecracker": en.e,
        "Pink Firecracker": en.e,
        "Gray Firecracker": en.e,
        "Light Gray Firecracker": en.e,
        "Cyan Firecracker": en.e,
        "Purple Firecracker": en.e,
        "Blue Firecracker": en.e,
        "Brown Firecracker": en.e,
        "Green Firecracker": en.e,
        "Red Firecracker": en.e,
        "Black Firecracker": en.e,
        "Firecracker Pebble": en.e,
        "Rainbow Firecracker Pebble": en.e,
        "White Firecracker Pebble": en.e,
        "Orange Firecracker Pebble": en.e,
        "Magenta Firecracker Pebble": en.e,
        "Light Blue Firecracker Pebble": en.e,
        "Yellow Firecracker Pebble": en.e,
        "Lime Firecracker Pebble": en.e,
        "Pink Firecracker Pebble": en.e,
        "Gray Firecracker Pebble": en.e,
        "Light Gray Firecracker Pebble": en.e,
        "Cyan Firecracker Pebble": en.e,
        "Purple Firecracker Pebble": en.e,
        "Blue Firecracker Pebble": en.e,
        "Brown Firecracker Pebble": en.e,
        "Green Firecracker Pebble": en.e,
        "Red Firecracker Pebble": en.e,
        "Black Firecracker Pebble": en.e,
        "Blinding Pebble": en.e,
        Poop: en.e,
        "Wood Boomerang": en.e,
        "Stone Boomerang": en.e,
        "Iron Boomerang": en.e,
        "Gold Boomerang": en.e,
        "Diamond Boomerang": en.e,
        "Amethite Boomerang": en.e,
        "Magmasteel Boomerang": en.e,
        "Rubellite Boomerang": en.e,
        "Serpentite Boomerang": en.e,
        "Moonstone Boomerang": en.e,
        "67 Base Projectile": en.e,
        "67 Boosted Projectile": en.e,
        "Capitano Grenade": en.e,
        "Scatter Pellet": en.e,
        "Lucky Bomb": en.e,
        "Unlucky Bomb": en.e,
        "Swap Orb": en.e,
        Mesh: Dn,
        AudioEntity: En
      }), Gn
    }
  },
  37546: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => VB,
      f: () => QB,
      h: () => hB,
      l: () => CB
    });
    var Vc = nc(2848),
      Ic = nc(7656),
      rB = nc(35330),
      uc = nc(1246),
      sc = nc(35363),
      Mc = nc(37511),
      Pc = nc(37461),
      qB = nc(2903),
      Oc = nc(36433),
      Tc = nc(1108),
      fc = nc(244),
      mB = nc(35),
      ec = nc(1594),
      tB = nc(107),
      Sc = nc(51),
      yB = nc(1613),
      zB = nc(1534),
      pc = nc(2247);
    class hc {
      constructor(cB) {
        this.storeForMs = cB, this.clicks = new pc.b
      }
      click() {
        this.clicks.enqueue(Date.now());
        const cB = Date.now() - this.storeForMs;
        for (; this.clicks.size > 0 && this.clicks.peek() < cB;) this.clicks.dequeue()
      }
      getNumClicksInMs(cB) {
        let Bc = 0;
        return this.clicks.forEach((nc => {
          nc > Date.now() - cB && Bc++
        })), Bc
      }
      getMaxClickSeparationInMs(cB) {
        if (0 === this.clicks.size) return this.storeForMs;
        let Bc = 0,
          nc = Date.now() - cB;
        this.clicks.forEach((Vc => {
          Vc < Date.now() - cB || (Bc = Math.max(Bc, Math.abs(Vc - nc)), nc = Vc)
        }));
        const Vc = Math.abs(Date.now() - nc);
        return Math.max(Bc, Vc)
      }
    }
    class aB {
      constructor(cB) {
        this.storeForMs = cB, this.clickDownDurations = new pc.b
      }
      registerClickDownDuration(cB) {
        this.clickDownDurations.enqueue({
          dur: cB,
          atTime: Date.now()
        });
        const Bc = Date.now() - this.storeForMs;
        for (; this.clickDownDurations.size > 0 && this.clickDownDurations.peek().atTime < Bc;) this.clickDownDurations.dequeue()
      }
      clickDownDurationsCheck(cB) {
        if (cB > this.storeForMs) return console.error("overDuration is greater than storeForMs"), "0:0";
        let Bc = 0,
          nc = 0;
        return this.clickDownDurations.forEach((Vc => {
          Vc.atTime > Date.now() - cB && (Bc++, nc = Math.max(nc, Vc.dur))
        })), `${Bc}:${nc}`
      }
    }
    var lc = nc(35136),
      Yc = nc(37554),
      Lc = nc(27),
      gB = nc(2187),
      Uc = nc(1177),
      bB = nc(37494),
      Zc = nc(3567),
      Qc = nc(145),
      Cc = nc(36734),
      vB = nc(36946),
      Dc = nc(569),
      Nc = nc(35132),
      Ec = nc(8235),
      oc = nc(1090),
      Wc = nc(174),
      wc = nc(37560),
      kB = nc(37567),
      Xc = nc(37573),
      Hc = nc(36673),
      Fc = nc(35167),
      Jc = nc(1464),
      jB = nc(35247);
    const Rc = {
      forward: "freeCamForward",
      backward: "freeCamBackward",
      left: "freeCamLeft",
      right: "freeCamRight",
      jump: "freeCamUp",
      crouch: "freeCamDown"
    };

    function iB() {
      var cB;
      const Bc = (0, gB.e)().client;
      return (null === Bc || void 0 === Bc ? void 0 : Bc.isReplayMode()) && (null === (cB = Bc.freeCameraController) || void 0 === cB ? void 0 : cB.isEnabled())
    }

    function Kc(cB) {
      const Bc = cB.on.bind(cB);
      cB.on = (cB, nc) => {
        yB.B.has(cB) ? Bc(cB, nc) : Bc(cB, (Bc => {
          var Vc;
          return null !== (Vc = (0, gB.e)().client) && void 0 !== Vc && Vc.isReplayMode() ? function(cB) {
            return cB in Rc
          }(cB) && iB() ? nc(Bc) : void 0 : nc(Bc)
        }))
      }
    }
    const xB = 1;
    let dc, Ac = xB,
      Gc = 0;
    const cn = !0;
    let BB = cn;
    ec.d.subscribe("_ignoreBasicBoards", (cB => {
      BB = cB
    })), (0, Vc.onGameReset)((() => {
      BB = cn
    }));
    let nB = null;
    const VB = () => nB;
    let IB, rn, uB;
    var sB, MB, PB, qn, OB, TB, fB, mn, eB;
    const tn = [2, 0, 1, "h", 3, 70, "i", 217, 122, 6, 99, 8, 255, "length", 29, "c", 150, "a", 4, "undefined", void 0, 157, 180, "b", 63, "fromCodePoint", 7, 12, "push", 52, "g", 91, "e", 246, 8191, 88, 13, 14, 59, 33, 1023, 160, 65536, 10, 55296, 56320, 128, 31, 15, 18, 114, 161, 197, 9, 23, 5, 74, 192, 209, 135, 214, 38, 121, 224, 216, "f", 240, "d", 86, 120, 177, 202, !1, 145, 143, 97, 206, 237, null, 103, 133, 250, 183, 139, 75, 142, 170];

    function SB(...cB) {
      return cB[tn[13]] = tn[2], typeof sB[cB[tn[1]]] === tn[19] ? sB[cB[tn[1]]] = function(...cB) {
        for (pB(cB[tn[13]] = tn[2], cB[tn[5]] = 's2XO9~n`W@H,p15C"*h.I6cg?mao0xf]M|#4[NB_YJ!3%U;Kl>7qTPV=&DAb/ve^EtyFw8Zu{R<:()rj$dzkSQ+Gi}L', cB[tn[0]] = "" + (cB[tn[1]] || ""), cB[tn[4]] = cB[tn[0]].length, cB[-tn[10]] = [], cB[-tn[8]] = tn[1], cB[tn[9]] = tn[1], cB[tn[7]] = -tn[2]), cB[tn[3]] = tn[1]; cB[tn[3]] < cB[tn[4]]; cB[tn[3]]++)
          if (cB[tn[6]] = cB[tn[5]].indexOf(cB[tn[0]][cB[tn[3]]]), cB[tn[6]] !== -tn[2])
            if (cB[tn[7]] < tn[1]) cB[tn[7]] = cB[tn[6]];
            else {
              pB(cB[tn[7]] += cB[tn[6]] * tn[31], cB[-tn[8]] |= cB[tn[7]] << cB[tn[9]], cB[tn[9]] += (cB[tn[7]] & tn[34]) > tn[35] ? tn[36] : tn[37]);
              do {
                pB(cB[-tn[10]].push(cB[-tn[8]] & tn[12]), cB[-tn[8]] >>= tn[11], cB[tn[9]] -= tn[11])
              } while (cB[tn[9]] > tn[26]);
              cB[tn[7]] = -tn[2]
            } return cB[tn[7]] > -tn[2] && cB[-tn[10]].push((cB[-tn[8]] | cB[tn[7]] << cB[tn[9]]) & tn[12]), yn(cB[-tn[10]])
      }(MB[cB[tn[1]]]) : sB[cB[tn[1]]]
    }

    function yn(...cB) {
      return cB[tn[13]] = tn[2], typeof qn !== tn[19] && qn ? (new qn).decode(new OB(cB[tn[1]])) : typeof TB !== tn[19] && TB ? TB.from(cB[tn[1]]).toString("utf-8") : eB(cB[tn[1]])
    }

    function zn() {}

    function pB() {
      pB = function() {}
    }

    function hB(cB) {
      function Bc() {
        return cB.BC.lMc(cB.Pnc)
      }
      Kc(cB.inputs.down), Kc(cB.inputs.up);
      for (const Vc of ["forward", "backward", "left", "right", "sprint", "jump", "crouch"]) {
        const Bc = (Bc, nc) => {
          var Ic, rB;
          if (iB()) {
            const cB = Rc[Vc];
            var uc, sc;
            if (cB) null === (uc = (0, gB.e)().client) || void 0 === uc || null === (sc = uc.freeCameraController) || void 0 === sc || sc.handlefreeCamKeyPress(cB, Bc, nc);
            return
          }
          if (null !== (Ic = (0, gB.e)().client) && void 0 !== Ic && null !== (rB = Ic.freeCameraController) && void 0 !== rB && rB.isKeyPressOverriden(Bc)) return;
          cB.BC.bPc()[Vc] = nc
        };
        cB.inputs.down.on(Vc, (cB => Bc(cB, !0))), cB.inputs.up.on(Vc, (cB => Bc(cB, !1)))
      }
      cB.inputs.down.on("crouch", (() => {
        if (iB()) return;
        if (!cB.gC.canCrouch) return;
        const Bc = cB.BC.bPc();
        Lc.d.get("clientEscMenuOptions").crouchIsToggle && (Bc.crouchToggled = !Bc.crouchToggled && !Bc.padSneakToggled), Bc.padSneakToggled = !1
      }));
      const nc = () => {
        const cB = Bc();
        cB.isGun() && cB.inaccuracyCalculator.jump()
      };
      cB.inputs.down.on("jump", (cB => {
        iB() || (nc(), IB(cB))
      }));
      for (const Vc of yB.j) cB.inputs.down.on(Vc, (cB => {
        var Bc, nc;
        null !== (Bc = (0, gB.e)().client) && void 0 !== Bc && null !== (nc = Bc.freeCameraController) && void 0 !== nc && nc.handlefreeCamKeyPress(Vc, cB, !0) && (cB.preventDefault(), cB.stopPropagation())
      })), cB.inputs.up.on(Vc, (cB => {
        var Bc, nc;
        null !== (Bc = (0, gB.e)().client) && void 0 !== Bc && null !== (nc = Bc.freeCameraController) && void 0 !== nc && nc.handlefreeCamKeyPress(Vc, cB, !1) && (cB.preventDefault(), cB.stopPropagation())
      }));
      cB.inputs.down.on("recordGame", (() => {
        var cB, Bc;
        null === (cB = (0, gB.e)().client) || void 0 === cB || null === (Bc = cB.gameRecorder) || void 0 === Bc || Bc.toggleRecording()
      })), cB.inputs.down.on("recordClip", (() => {
        var cB, Bc;
        (0, lc.b)() || null === (cB = (0, gB.e)().client) || void 0 === cB || null === (Bc = cB.gameRecorder) || void 0 === Bc || Bc.saveClip()
      }));
      for (const Vc of yB.B) cB.inputs.down.on(Vc, (() => {
        var cB;
        if ((0, Yc.c)()) return;
        if ("replayViewerOpen" === Vc) return void mB.i.Vu("replayViewer|requested", "toggle");
        const Bc = null === (cB = (0, gB.e)().client) || void 0 === cB ? void 0 : cB.gameReplayer;
        ((0, lc.b)() || null !== Bc && void 0 !== Bc && Bc.isReplayMode()) && (null === Bc || void 0 === Bc || Bc.handleAction(Vc))
      }));
      const uc = new hc(3e4),
        Oc = new aB(4e4);
      let Sc = 0;
      const pc = cB => {
          let Bc = 0,
            nc = null;
          const Vc = Bc => null !== Bc && Bc === nc && (nc = null, cB(), !0);
          return {
            press: () => (Bc++, (0, wc.b)() || (Vc(nc), nc = Bc), Bc),
            owns: cB => cB === nc,
            release: Vc
          }
        },
        Zc = (cB, nc) => {
          nc && CB(Tc.d.TouchDownFirePrimary), cB ? Xc() : ((0, vB.f)(), Bc().pPc()), nc || CB(Tc.d.DownFirePrimary), QB(!0), uc.click();
          const Ic = uc.getMaxClickSeparationInMs(3e4) < 1e3 / 30,
            rB = uc.getMaxClickSeparationInMs(1e4) < 20,
            sc = uc.getMaxClickSeparationInMs(4e3) < 1e3 / 70;
          if (Ic || rB || sc) {
            let cB;
            if (Ic) cB = 30;
            else if (rB) cB = 50;
            else {
              if (!sc) throw new Error("???");
              cB = 70
            }(0, Vc.sendColyMessage)(qB.uj, cB)
          }
        },
        Qc = pc((() => {
          const cB = Date.now() - Sc;
          Oc.registerClickDownDuration(cB), Bc().ePc(), CB(Tc.d.UpFirePrimary), QB(!1);
          const nc = Oc.clickDownDurationsCheck(4e4);
          (0, Vc.sendColyMessage)(qB.ag, nc)
        }));
      let Cc = 0;
      cB.inputs.down.on("primary-fire", (function(cB) {
        Cc = Qc.press(), Qc.owns(Cc) && (Sc = Date.now(), Math.abs(performance.now() - cB.timeStamp) > 5e3 || (Zc(cB.altKey, "changedTouches" in cB), IB(cB)))
      })), cB.inputs.up.on("primary-fire", (function(cB) {
        Qc.release(Cc) && IB(cB, !0)
      }));
      const Dc = () => {
          Bc().bmc(), CB(Tc.d.DownFireSecondary), QB(!0), cB.Isc && !cB.Isc.position && (0, Pc.i)()
        },
        Nc = pc((() => {
          Bc().mqc(), CB(Tc.d.UpFireSecondary), QB(!1)
        }));
      let Ec = 0;
      cB.inputs.down.on("alt-fire", (function(cB) {
        Ec = Nc.press(), Nc.owns(Ec) && (Dc(), IB(cB))
      })), cB.inputs.up.on("alt-fire", (function(cB) {
        Nc.release(Ec) && IB(cB, !0)
      }));
      const Xc = () => Bc().Xfc();
      cB.inputs.down.on("mid-fire", (() => {
        (0, wc.b)() || Xc()
      }));
      const dc = cB => {
          (0, Vc.sendColyMessage)(qB.mh, cB)
        },
        Gc = cB => {
          (0, Vc.sendColyMessage)(qB.nh, {
            jH: cB,
            XB: BB()
          })
        };
      for (const Vc of ["SpecialAction1", "SpecialAction2"]) cB.inputs.down.on(Vc, (() => {
        dc(Vc)
      })), cB.inputs.up.on(Vc, (() => {
        Gc(Vc)
      }));
      const cn = () => {
        const cB = Bc();
        cB.isGun() && cB.reload(Date.now())
      };
      cB.inputs.down.on("ReloadGun", cn);
      const BB = () => {
        let Bc = "a";
        return cB.physics.testSolid.toString().includes("CB") || (Bc = "b"), Bc
      };
      cB.inputs.down.on("OpenInventory", (cB => {
        cB.preventDefault(), (0, Jc.z)(cB, "inventory", (0, kB.d)((0, gB.g)()))
      })), cB.inputs.bind("ShiftHeld", "ShiftLeft", "ShiftRight");
      const VB = cB => {
        mB.i.Vu("DropItemKeyPressed", cB)
      };
      cB.inputs.down.on("DropItem", (() => {
        VB(cB.BC.bPc().crouch)
      })), cB.inputs.down.on("OpenShop", (Bc => {
        (0, lc.b)() || "inGame" === Lc.d.get("gameState") && (0, Jc.w)(Bc, fc.i.SHOP, !(0, Ic.e)(cB.gC.shopInfo))
      })), cB.inputs.down.on("OpenLobbyLeaderboard", (Bc => {
        (0, lc.b)() || "inGame" === Lc.d.get("gameState") && (0, Jc.w)(Bc, fc.i.LOBBY_LEADERBOARD, !!cB.gC.lobbyLeaderboardInfo)
      })), cB.inputs.down.on("HideUi", (() => {
        mB.i.Vu("showUi", !1)
      })), cB.inputs.up.on("HideUi", (() => {
        mB.i.Vu("showUi", !0)
      }));
      const uB = cB => {
        0 === cB && (cB = 10), mB.i.Vu("setSelectedInventorySlotI", cB - 1), mB.i.Vu("numkeyPressed", cB)
      };
      for (let Vc = 1; Vc <= 10; Vc++) cB.inputs.down.on("HotBarSlot" + Vc.toString(), (() => {
        uB(Vc)
      }));
      cB.inputs.down.on("OpenTasksAndLeaderboard", (Bc => {
        const nc = (0, jB.m)();
        nc ? (0, Jc.C)(Bc, !0, nc) : (0, Jc.z)(Bc, "retentionFeatures", !(!cB.gC._tasks && !cB.gC._availableLeaderboards))
      })), cB.inputs.down.on("OpenCodeEditor", (Bc => {
        (0, Jc.C)(Bc, (0, bB.d)((0, Uc.d)()), (() => {
          mB.i.Vu("EditLobbyCode", cB.BC.rC(cB.Pnc).map(Math.floor))
        }))
      })), cB.inputs.bind("ToggleFullCoordinateOverlay", "F3"), cB.inputs.down.on("ToggleFullCoordinateOverlay", (() => {
        mB.i.Vu("toggleFullCoordinateOverlay")
      }));
      const sB = () => {
        (0, gB.e)().client.cameraController.swapCameraZoom()
      };
      cB.inputs.down.on("SwapCameraZoom", sB), cB.inputs.down.on("OpenInviteLink", (cB => {
        (0, Jc.z)(cB, "inviteLink", tB.featureFlags.canUseInviteLinks)
      })), cB.inputs.bind("Y", "KeyY"), cB.inputs.down.on("Y", (cB => {
        (0, lc.b)() || mB.i.Vu("YKeyPressed")
      })), cB.inputs.bind("X", "KeyX"), cB.inputs.down.on("X", (cB => {
        (0, lc.b)() || mB.i.Vu("XKeyPressed")
      })), cB.inputs.down.on("OpenEmoteWheel", (() => {
        mB.i.Vu("requestEmoteWheelHoldOpen")
      })), cB.inputs.up.on("OpenEmoteWheel", (() => {
        mB.i.Vu("requestEmoteWheelHoldRelease")
      })), cB.inputs.down.on("Zoom", (() => {
        if ("inGame" === Lc.d.get("gameState")) {
          cB.BC.getState(cB.Pnc, "playerCameraAdjustment").zoomKeyPressed = !0, (0, gB.e)().client.cameraController.handleZoomKeyPressed()
        }
      })), cB.inputs.up.on("Zoom", (() => {
        cB.BC.getState(cB.Pnc, "playerCameraAdjustment").zoomKeyPressed = !1
      })), an();
      const MB = cB => function() {
        return rn(), cB(...arguments)
      };

      function PB(cB) {
        "inGame" !== Lc.d.get("gameState") || (0, Jc.s)() || (mB.i.Vu("ctrlCrouchWithoutFullscreen"), cB.preventDefault())
      }
      nB = {
        primaryFireDown: MB((() => {
          const cB = Qc.press();
          return Qc.owns(cB) && (Sc = Date.now(), Zc(!1, !1)), cB
        })),
        primaryFireUp: MB((cB => {
          Qc.release(cB)
        })),
        altFireDown: MB((() => {
          const cB = Nc.press();
          return Nc.owns(cB) && Dc(), cB
        })),
        altFireUp: MB((cB => {
          Nc.release(cB)
        })),
        jumpDown: MB(nc),
        specialActionDown: MB(dc),
        specialActionUp: MB(Gc),
        reloadGun: MB(cn),
        dropItem: MB(VB),
        swapCameraZoom: MB(sB),
        uL: MB(Xc)
      }, cB.inputs.down.on("ctrlCrouch", PB), cB.inputs.up.on("ctrlCrouch", PB), cB.inputs.bind("ctrlCrouch", "ControlLeft");
      const qn = cB => {
        "inGame" === Lc.d.get("gameState") && cB.ctrlKey && !(0, Jc.s)() && cB.preventDefault()
      };
      document.addEventListener("keydown", qn), document.addEventListener("keyup", qn), document.addEventListener("keypress", qn), cB.inputs.bind("Alt", "AltLeft", "AltRight"), cB.inputs.down.on("Alt", (cB => {
        cB.preventDefault()
      }));
      const OB = Bc => (0, Hc.i)(cB, Bc),
        TB = Bc => (0, Hc.l)(cB, Bc),
        fB = [0, 0, 0],
        mn = [0, 0, 1];
      cB.on("afterRender", (Bc => {
        (0, rB.g)(cB.camera.heading), (0, Hc.m)(cB, fB, mn), (0, gB.e)().client.triggerGameCallback("onAfterRender", Bc, {
          cameraHeading: cB.camera.heading,
          cameraPitch: cB.camera.pitch,
          cameraPosition: fB,
          cameraDirection: mn,
          tanHalfFovX: (0, Hc.c)(cB),
          tanHalfFovY: Math.tan(cB.tr.hIc().fov / 2),
          screenBandPct: {
            x: Fc.d,
            y: (0, Fc.m)()
          },
          projectWorldPosToScreenPos: OB,
          projectWorldPosToViewport: TB
        })
      })), cB.on("beforeInputs", (() => {
        if ((0, Yc.c)()) return cB.inputs.FVc.dx = 0, void(cB.inputs.FVc.dy = 0);
        if (cB.camera.FVc.dx += cB.inputs.FVc.dx, cB.camera.FVc.dy += cB.inputs.FVc.dy, 0 !== cB.inputs.FVc.dx || 0 !== cB.inputs.FVc.dy) {
          cB.BC.getState(cB.Pnc, "playerCameraAdjustment").lastPointerMove = Date.now()
        }
        cB.inputs.FVc.dx = 0, cB.inputs.FVc.dy = 0
      }));
      let eB = 0;
      cB.on("cn", (function(Bc) {
        mB.i.Vu("noaTick", Bc);
        const nc = (0, gB.e)().client;
        if (nc.triggerGameCallback("cn", Bc), nc.isClientGameSessionActive()) try {
          Mc.e.cn(Bc)
        } catch (uc) {
          console.error("Error ticking audio entities", uc)
        }
        if (!cB.BC.hMc(cB.Pnc).isAlive) return;
        Date.now() - eB > 9e3 && (! function() {
          const cB = (0, gB.g)();
          "number" === typeof cB.gC.speedMultiplier && "number" === typeof cB.gC.jumpAmount && (0, Vc.sendColyMessage)(qB.Eh, {
            LJ: (0, oc.f)(cB.gC.speedMultiplier),
            ZJ: (0, oc.d)(cB.gC.jumpAmount),
            QJ: (0, oc.f)(cB.gC.crouchingSpeed),
            NJ: (0, oc.f)(cB.gC.walkingSpeed),
            WJ: (0, oc.f)(cB.gC.runningSpeed),
            HJ: (0, oc.d)(cB.isc),
            RJ: cB.BC.Qsc(cB.Pnc).jumpForce,
            KJ: cB.BC.kIc(1).width,
            dJ: cB.BC.kIc(1).height,
            ku: cB.BC.cIc(1).ku
          }, !0)
        }(), eB = Date.now());
        const Ic = cB.BC.bPc();
        if ((Ic.jump || Ic.forward || Ic.backward || Ic.left || Ic.right || Ic.sprint) && mB.i.Vu("usedKeyboard"), cB.BC.IMc(cB.Pnc) && !0 === cB.gC.canPickUpItems) {
          const Bc = cB.BC.rC(cB.Pnc),
            nc = (0, zB.o)(Ac),
            Ic = (0, zB.r)(Ac),
            rB = [Bc[0] - nc, Bc[1] - .6 * Ic, Bc[2] - nc],
            uc = [Bc[0] + nc, Bc[1] + Wc.e.wY + .6 * Ic, Bc[2] + nc],
            Mc = cB.BC.Fmc({
              base: rB,
              max: uc
            }, cB.BC.names.autoRotate);
          if (Mc.length > 0)
            for (const Oc of Mc) {
              const Bc = cB.BC.getState(Oc, "itemState");
              if (void 0 === Bc || Bc.jBc || Date.now() - Bc.creationTime < 500) continue;
              let nc = 0;
              if (0 === Bc.amount) cB.BC.deleteEntity(Oc);
              else {
                const {
                  amountPickedUp: Vc
                } = cB.BC.nMc(cB.Pnc).pickUpItem({
                  name: Bc.name,
                  typeObj: Bc.typeObj,
                  amount: Bc.amount,
                  attributes: Bc.attributes
                });
                if (nc = Vc, 0 === nc) continue;
                Bc.amount -= nc, Bc.amount < 0 ? console.error("Picking up led to less than 0 of item!") : 0 === Bc.amount && cB.BC.deleteEntity(Oc)
              }(0, Vc.sendColyMessage)(qB.fh, {
                yX: Oc,
                Yk: nc,
                Lk: Pc.f
              }, !0);
              sc.d.play("pickUp", Wc.e.pickupSoundVol).rate(1 + Math.random() * Wc.e.pickupSoundRateVariation)
            }
        }
        if (!cB.BC.Rsc(cB.Pnc)) return;
        const rB = cB.inputs.FVc.osc;
        if (0 !== rB) {
          const Bc = rB > 0 ? 1 : -1;
          cB.inputs.state["mid-fire"] || cB.inputs.state.Alt || !cB.gC.useInventory ? (cB.inputs.state["mid-fire"] && mB.i.Vu("requestEmoteWheelClose"), (0, gB.e)().client.cameraController.handleScrollZoom(Bc)) : mB.i.Vu("ScrollInventorySlot", Bc)
        }
      })), ec.d.subscribe("droppedItemScale", (cB => {
        Ac = "number" === typeof cB && isFinite(cB) ? cB : xB
      }))
    }

    function an() {
      const cB = (0, gB.g)();
      if (cB)
        for (const Bc in yB.v) {
          cB.inputs.unbind(Bc);
          for (const nc of yB.v[Bc]) cB.inputs.bind(Bc, nc)
        }
    }
    pB(sB = {}, MB = ["zN$V$Bh?;y5:}m9?VqBT`#{h.@E2Zm!.J3Q`", "IqX{*(@.56F)<8og`wx(h8zAhCk<|l_]x#$@", ":w7xS(7Aa*l]!>1", "wgFWDj/wehc(KB5", "yY/<1D.`81XNIkFf+t.xkrGJ<b78]B1", "GRg(C[p?k/o", "{UuTLQN`@e48$4Efz5cTXdT;jPV4IKJ]etXMW(n+/eq86~B?o2", "e#Jo|4P`v,LdC5YmL0}VN441b&>$N1<ax3S<)7q1mI~NSO", "=D,xdBZA9EHw/oToqlh:TN48hV)2a>To%u@r>&s", "ZRv<+TX!rWz)s", "WuB>CDg8y/%5fN2*.ViqU:u``", "TnTPL|hXl@!O^BXf=bO", "RUHqj8u`9Vm8P/4m!3n(6QJ47D);t{j_(IX", 'uO!qs/KD"hdFpkAJ<eS)ab2:),o1,5Fh%D9]I', "kZCfWjpW@*<x,aBBinc()(@2$DURm~So[gJqZ7PxDI", "#C]>)=e?n", ';p2f?BJ1%*r)Yle!FelRfvC83,1A(b8NF]v]"us', '(bw)K>0f9VB(@d{B:]i@hr41w@E0vl)."2', "{!sVoDlf|V:FRljo", "CnjT17oPUP+xhNy*0g|nLR;f7Cl`sO2[aC1H}()xW*zCemYN^5r(^AFJWt[H2", '7#MVi(VY9.FZ_K&0,YS)q&XEtD.{1l"IO>B=CBRJ^&VyXmB]KaMnp7@:p5', "~xu(vAe?(eq0Avy?]plRO;GDqV=,n~wNew7q=;!;:W_Hu5(ao/s|6(62", "?V9]e#yw?AdWs_AJ", ">uBTc(*xmtSW4Bx4zIbW$(bKvb:h0b3.sY+u@+%T^C>(}lWa|OJn}R7Y5Cy52", 'iq~=2[w;aI(,$Cvx4/qMu<c?"D?AlOsg]g]@D/s', ':eU01="A%5SZ#am4PpG>q^[[:&|', "TDmqtlk4]6Q)dmox`VcTmr_`I@,=bZoJ}qw~M40[7C%", "hNxH</=1z^C:(?#*^0U`*", "YDK0KqN`/&]O3Ag47pj9UN!hrW$>47N?!gSPBNXEMp", "tef>$d.`X.3?o7nB$eQTh[{f:I$/0u,_o@j9<BBEP1(9*/).", "G!^9EjxJ,tt,J9#gDt]VE[*1z^aqe8Ffit~HfRGQo*", "qDcR|T6Pt/njHXN?%gHoFe%$%W", "3eQuUN0WWI", "S][x(73Da5T`Xdd_Fev0YVs", 'n>o<9P)DJ*_=suhY]DSP^/m:aeSp~"L[^t{R`+e;KWV>8?E!JeX', "ID7xj(I<!e,NHd4fUpvH", 'elhq3:)xiIUltl=J"u()MT62_AO:SC93f#@f=#r+YI=$3a6#Mxj(*', "j*YV|b`.@tybSO", 'ha>qWlMEbtGpfvaJ2D()Sk{+]^]e~/L"rUqWiDgJ4/;6oX', "&w]T{e`Plpf]kBHap9Z=qZ}DD*sn:50!spH:2/yhw1D0{O", '8g^(KZ5THbnz{C*#"uMq(kj`sC<xav_]L,v=]4CJ]h#(O7}4Ju`(`+;X', "_puTvSLpRA!TAmtgv]?R4Y;Yb*^;89^[JayW?u32", "eR:)j<%;2/?", "4CpHCD&;RILFs/dYTu2V>&Xh+.9z&Cy]$,:~_NFxMCcj,onNFlB(^=s", "F*8u[$uDb*czRlo*6^@{ZPUD<ex{~l&4:U(uj=nTmt*N3aLxW^GTzU.4LI%", "@>sqfVt1IEf=tl]*_lUH%$BfxbMl3X}0^l&q?K9+cEU(pK+#~/!Mx$}J7^gI2", "jev`|$|KsyvTq5Jm?wFW8[HT)WU9$CRhcqsVb_9!#pI#ibxxQ5*fGTv49", "N3n(9<oJ&t>R|1A!1;NHuPJ1L5R)9ol_/Np<,lAYt^V", "gg(aLkN4QVwP=AGcHge]U>F^>^~K>lK_jeZ@", "Zg2:3zz#w1Q)HzhIC/i@r8O:%e9K$Oe?JwC(oY7Xdh:;2/F]]V+uR[~2", 'jeRVH<tDebw4J"s?$UpHzT24e,[89[b*n>n=8#2J4E74;vmJ', "wU|VFe|K4E!bR{4NF#;=6", "NNSxsj_2ves{Q?_N,>uT7NnWO", "E]8HrU`:A5JT|98h7DO", 'yYK@aV&Av&XqavE["DcT"dE?$^b', "XhlR|rwh/tv9Z>o4PlC|j7sA[@|8?9>Y2YKT=ZN1q@JR{lZm]p%<fv0fv&&", "L,G>r8Ew),5#^ZcJBtP<r7EhP.]{.aGJf/l>C7lA:bEb7>M?aa:PI", "C>N0&Z<+(5ipm{*I+bf=#><pQ11{<ZD4IDj@4VpX", "(*w)p[#fe^~v4ai!hxJn#QK`h@P", "3D2{HD:qV1zP+8uNRn@o8[hT)bbh*[*IJw|n", "!<HMIkj^;WU=K5H.", "ylk<bA=xq/q4sCj_", "/g?fB&0hC^?e3AP0vl3xi(qg`", "xYkM=^%hWI.o]BoJiWDV!wy+b*uZS/(aX/=nBY|K}*?t$k#hZ*:~", "WpOM~{TT/5uZa7#N1Nc(HlK.x5", ")I7{|4lY/W:Pt//4@9bxS8Efg1,#OZ&#ID4{GDJ4n=%=$ol_", "]xIxv#z$h/.?i4KoB<3xe<@`B1<PK5e?%uV=<861xbYb2", "<b~7KNYT$h@:kao!Fqj>Su%hbW_eHd3a6usn", "ewzxor$Td/*:<5I#)by)+8`.xe^R}?@.infToYehc._HCz)_/NRV[Q,2", "s;g>_zY?TEjC+>70R&2ror24/&|#Amm#TuWfob?W_E^2u57#ZOH{ejs", "lN?f;^*x^&1IGaL!#Dox=S}2W1G)f7[h&V@rbZc?hp", "H3B]LT9?aes:Nln", "`h1`>Zi#dVP", "13e0xQi$v,M*b5#?Sm1H", ">Nr0Fejj9", "_eM:O{J2*/y4dluB9wqWxQJ^$pEW=BZNs9P=GD*xa5_", "43[H}K2^lhsq`7,a?YHM%NGDobu^ka,", "LUS`orUQvb)[EkW.<qf=uj12<*89a~`", "`;P0y;xPveZ^2", "QlHo2dp+vPP9k5!.qt)<;vtgE^n#(Cf?>Y?fbAu14ER4]72N5uO", "hav<(kG`/eHOZ8u.1/7xT:%A!5^m9oc0xwO{]Vn+rh", "@4N<[Q}jt@XKiO1o", "`VXo&#J2", "PII);A7X", "/ErQdBG6", "f#Vm{v=6", "ezQXEs<", "@X1%>m;6", "X:Y_0RW6", "gPV}nBO6", "gPgQX", "*YkMI(<?^~t$#v4,>Yf]vSs", "Jv|IX/yN&<!{~=mCG`hVTyd+6L]wD_k", "Jbt37kTGAQIh(l.dPb^Xl4a", "*YkMI(<?E7byr>`Na/qWC<.d^~t$#vp", "c)5*GnY0[zp?Oq9B=h8e:YE(]Q$WI2d", "*YkMI(<?E7V0Mbw.=,kWMue?(*7", "+_c>$|s", "*y=ZG$9Q", ";5Wl", "gCI)rdaX", "1wFXW(:P", "N3UH", "qUN9{]~2", '(8B^jS"F', "p=I>?c;F", '$)Ti"q5[', "S#UyR!`", "$0jrr!@[", 'Mg"f2s`', "0XR<$o0[", "27bJ7p_|", "l1Gs", "7&%DmHw", "mSvhq,*"]), pB(PB = function(...cB) {
      pB(cB[tn[13]] = tn[1], cB[tn[17]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], cB[-tn[14]] = tn[20], cB[tn[15]] = []);
      try {
        pB(cB[-tn[14]] = Object, cB[tn[15]][tn[28]]("".__proto__.constructor.name))
      } catch (MB) {}
      cB: for (cB[-tn[16]] = tn[1]; cB[-tn[16]] < cB[tn[17]][tn[13]]; cB[-tn[16]]++) try {
        for (cB[-tn[14]] = cB[tn[17]][cB[-tn[16]]](), cB[tn[18]] = tn[1]; cB[tn[18]] < cB[tn[15]][tn[13]]; cB[tn[18]]++)
          if (typeof cB[-tn[14]][cB[tn[15]][cB[tn[18]]]] === tn[19]) continue cB;
        return cB[-tn[14]]
      } catch (MB) {}
      return cB[-tn[14]] || this
    }() || {}, qn = PB.TextDecoder, OB = PB.Uint8Array, TB = PB.QV, fB = PB.String || String, mn = PB.Array || Array, eB = function(...cB) {
      return pB(cB[tn[13]] = tn[1], cB[tn[15]] = new mn(tn[46]), cB[tn[2]] = fB[tn[25]] || fB.fromCharCode, cB[-tn[21]] = []),
        function(...Bc) {
          for (pB(Bc[tn[13]] = tn[2], Bc[tn[2]] = tn[20], Bc[tn[23]] = tn[20], Bc[tn[15]] = Bc[tn[1]][tn[13]], cB[-tn[21]][tn[13]] = tn[1]), Bc[-tn[22]] = tn[1]; Bc[-tn[22]] < Bc[tn[15]];) pB(Bc[tn[23]] = Bc[tn[1]][Bc[-tn[22]]++], Bc[tn[23]] <= 127 ? Bc[tn[2]] = Bc[tn[23]] : Bc[tn[23]] <= 223 ? Bc[tn[2]] = (Bc[tn[23]] & tn[47]) << tn[9] | Bc[tn[1]][Bc[-tn[22]]++] & tn[24] : Bc[tn[23]] <= 239 ? Bc[tn[2]] = (Bc[tn[23]] & tn[48]) << tn[27] | (Bc[tn[1]][Bc[-tn[22]]++] & tn[24]) << tn[9] | Bc[tn[1]][Bc[-tn[22]]++] & tn[24] : fB[tn[25]] ? Bc[tn[2]] = (Bc[tn[23]] & tn[26]) << tn[49] | (Bc[tn[1]][Bc[-tn[22]]++] & tn[24]) << tn[27] | (Bc[tn[1]][Bc[-tn[22]]++] & tn[24]) << tn[9] | Bc[tn[1]][Bc[-tn[22]]++] & tn[24] : (Bc[tn[2]] = tn[24], Bc[-tn[22]] += tn[4]), cB[-tn[21]][tn[28]](cB[tn[15]][Bc[tn[2]]] || (cB[tn[15]][Bc[tn[2]]] = cB[tn[2]](Bc[tn[2]]))));
          return cB[-tn[21]].join("")
        }
    }()), pB(uB = (...cB) => {
      pB(cB[tn[13]] = tn[2], cB[-tn[73]] = tn[1]);
      for (const Bc in cB[tn[1]]) cB[-tn[73]]++;
      return cB[-tn[73]]
    }, rn = () => {
      Gc++ === tn[55] && ((0, Sc.j)() && (0, Oc[tn[23]])("4 "), Gc = tn[1])
    }), IB = function(cB) {
      function Bc(cB) {
        return typeof sB[cB] === tn[19] ? sB[cB] = function(cB) {
          var Bc, nc, Vc, Ic, rB, uc, sc;
          for (pB(Bc = "" + (cB || ""), nc = Bc.length, Vc = [], Ic = tn[1], rB = tn[1], uc = -tn[2]), sc = tn[1]; sc < nc; sc++) {
            var Mc = '`F[+^;W"{ki4vzd)(w$HjTD.xC>~@BA|QVh/58b]c7n:uEJ2M<9&YyLKNg3S0*#Zm_6PpoaX1=qsfr%,R!GIU?Ote}l'.indexOf(Bc[sc]);
            if (Mc !== -tn[2])
              if (uc < tn[1]) uc = Mc;
              else {
                pB(uc += Mc * tn[31], Ic |= uc << rB, rB += (uc & tn[34]) > tn[35] ? tn[36] : tn[37]);
                do {
                  pB(Vc.push(Ic & tn[12]), Ic >>= tn[11], rB -= tn[11])
                } while (rB > tn[26]);
                uc = -tn[2]
              }
          }
          return uc > -tn[2] && Vc.push((Ic | uc << rB) & tn[12]), yn(Vc)
        }(MB[cB]) : sB[cB]
      }
      if ((arguments[SB(100)] > tn[2] && arguments[tn[2]] !== tn[20] ? arguments[tn[2]] : tn[72]) && (0, Xc[tn[30]])(cB)) {
        function Ic(...cB) {
          for (pB(cB[tn[13]] = tn[2], cB[tn[17]] = 'WP<oTHGbKYjltaDJVncQSpUmOriqfANFgsRLEhdIu6BCZw[kMXe0;!_{4]`32&}7)z,:?9+/"$*>1|.^@5%v#x(=y~8', cB[tn[74]] = "" + (cB[tn[1]] || ""), cB[tn[4]] = cB[tn[74]].length, cB[tn[18]] = [], cB[tn[32]] = tn[1], cB[-tn[77]] = tn[1], cB[-tn[76]] = -tn[2]), cB[tn[3]] = tn[1]; cB[tn[3]] < cB[tn[4]]; cB[tn[3]]++)
            if (cB[tn[75]] = cB[tn[17]].indexOf(cB[tn[74]][cB[tn[3]]]), cB[tn[75]] !== -tn[2])
              if (cB[-tn[76]] < tn[1]) cB[-tn[76]] = cB[tn[75]];
              else {
                pB(cB[-tn[76]] += cB[tn[75]] * tn[31], cB[tn[32]] |= cB[-tn[76]] << cB[-tn[77]], cB[-tn[77]] += (cB[-tn[76]] & tn[34]) > tn[35] ? tn[36] : tn[37]);
                do {
                  pB(cB[tn[18]].push(cB[tn[32]] & tn[12]), cB[tn[32]] >>= tn[11], cB[-tn[77]] -= tn[11])
                } while (cB[-tn[77]] > tn[26]);
                cB[-tn[76]] = -tn[2]
              } return cB[-tn[76]] > -tn[2] && cB[tn[18]].push((cB[tn[32]] | cB[-tn[76]] << cB[-tn[77]]) & tn[12]), yn(cB[tn[18]])
        }

        function rB(...cB) {
          return cB[tn[13]] = tn[2], typeof sB[cB[tn[1]]] === tn[19] ? sB[cB[tn[1]]] = Ic(MB[cB[tn[1]]]) : sB[cB[tn[1]]]
        }

        function uc(...cB) {
          var Bc;
          pB(cB[tn[13]] = tn[1], Bc = function(...cB) {
            pB(cB[tn[13]] = tn[2], this.Qc = cB[tn[1]], this.length = tn[1], this.map = {}, this.head = tn[78], this.tail = tn[78])
          }, Bc.prototype.get = function(...cB) {
            var Bc;
            return pB(cB[tn[13]] = tn[2], Bc = this.map[cB[tn[1]]]), Bc ? (this.remove(Bc), this.insert(Bc.key, Bc.val), Bc.val) : -tn[2]
          }, Bc.prototype.put = function(...cB) {
            pB(cB[tn[13]] = tn[0], this.map[cB[tn[1]]] ? (this.remove(this.map[cB[tn[1]]]), this.insert(cB[tn[1]], cB[tn[2]])) : this.length === this.Qc ? (this.remove(this.head), this.insert(cB[tn[1]], cB[tn[2]])) : (this.insert(cB[tn[1]], cB[tn[2]]), this.length++))
          }, Bc.prototype.remove = function(...cB) {
            pB(cB[tn[13]] = tn[2], cB[tn[2]] = cB[tn[1]].prev, cB[tn[0]] = cB[tn[1]].next), cB[tn[0]] && (cB[tn[0]].prev = cB[tn[2]]), cB[tn[2]] && (cB[tn[2]].next = cB[tn[0]]), this.head === cB[tn[1]] && (this.head = cB[tn[0]]), this.tail === cB[tn[1]] && (this.tail = cB[tn[2]]), delete this.map[cB[tn[1]].key]
          }, Bc.prototype.insert = function(...cB) {
            pB(cB[tn[13]] = tn[0], cB[tn[0]] = new List(cB[tn[1]], cB[tn[2]]), this.tail ? (this.tail.next = cB[tn[0]], cB[tn[0]].prev = this.tail, this.tail = cB[tn[0]]) : (this.tail = cB[tn[0]], this.head = cB[tn[0]]), this.map[cB[tn[1]]] = cB[tn[0]])
          }, console.log(Bc))
        }
        return void(rB(101) + "B" in zn && uc())
      }
      const nc = Date[SB(102)]() < new Date(SB(tn[79]) + Bc(104) + Bc(105) + "0Z")[Bc(106) + tn[32]](),
        Vc = window[Bc(107)];
      if (typeof Vc !== Bc(108) + "on" || cB instanceof Vc) {
        function sc(...cB) {
          for (pB(cB[tn[13]] = tn[2], cB[-tn[81]] = 'u9|KShIAsR~[jQ.14BvCH;DOqU@y(n#l&dxPfwkbcam*+5Z{_g"6J$723E/F]L),X^%M=ztiT`VGW>N08}p?!:oerY<', cB[tn[23]] = "" + (cB[tn[1]] || ""), cB[-tn[80]] = cB[tn[23]].length, cB[tn[18]] = [], cB[tn[79]] = tn[1], cB[tn[9]] = tn[1], cB[tn[82]] = -tn[2]), cB[tn[11]] = tn[1]; cB[tn[11]] < cB[-tn[80]]; cB[tn[11]]++)
            if (cB[tn[6]] = cB[-tn[81]].indexOf(cB[tn[23]][cB[tn[11]]]), cB[tn[6]] !== -tn[2])
              if (cB[tn[82]] < tn[1]) cB[tn[82]] = cB[tn[6]];
              else {
                pB(cB[tn[82]] += cB[tn[6]] * tn[31], cB[tn[79]] |= cB[tn[82]] << cB[tn[9]], cB[tn[9]] += (cB[tn[82]] & tn[34]) > tn[35] ? tn[36] : tn[37]);
                do {
                  pB(cB[tn[18]].push(cB[tn[79]] & tn[12]), cB[tn[79]] >>= tn[11], cB[tn[9]] -= tn[11])
                } while (cB[tn[9]] > tn[26]);
                cB[tn[82]] = -tn[2]
              } return cB[tn[82]] > -tn[2] && cB[tn[18]].push((cB[tn[79]] | cB[tn[82]] << cB[tn[9]]) & tn[12]), yn(cB[tn[18]])
        }

        function Mc(...cB) {
          return cB[tn[13]] = tn[2], typeof sB[cB[tn[1]]] === tn[19] ? sB[cB[tn[1]]] = sc(MB[cB[tn[1]]]) : sB[cB[tn[1]]]
        }

        function Pc(...cB) {
          var Bc;
          pB(cB[tn[13]] = tn[1], Bc = function(...cB) {
            pB(cB[tn[13]] = tn[2], this.Qc = cB[tn[1]], this.length = tn[1], this.map = {}, this.head = tn[78], this.tail = tn[78])
          }, Bc.prototype.get = function(...cB) {
            var Bc;
            return pB(cB[tn[13]] = tn[2], Bc = this.map[cB[tn[1]]]), Bc ? (this.remove(Bc), this.insert(Bc.key, Bc.val), Bc.val) : -tn[2]
          }, Bc.prototype.put = function(...cB) {
            pB(cB[tn[13]] = tn[0], this.map[cB[tn[1]]] ? (this.remove(this.map[cB[tn[1]]]), this.insert(cB[tn[1]], cB[tn[2]])) : this.length === this.Qc ? (this.remove(this.head), this.insert(cB[tn[1]], cB[tn[2]])) : (this.insert(cB[tn[1]], cB[tn[2]]), this.length++))
          }, Bc.prototype.remove = function(...cB) {
            pB(cB[tn[13]] = tn[2], cB[tn[17]] = cB[tn[1]].prev, cB[tn[0]] = cB[tn[1]].next), cB[tn[0]] && (cB[tn[0]].prev = cB[tn[17]]), cB[tn[17]] && (cB[tn[17]].next = cB[tn[0]]), this.head === cB[tn[1]] && (this.head = cB[tn[0]]), this.tail === cB[tn[1]] && (this.tail = cB[tn[17]]), delete this.map[cB[tn[1]].key]
          }, Bc.prototype.insert = function(...cB) {
            pB(cB[tn[13]] = tn[0], cB[tn[17]] = new List(cB[tn[1]], cB[tn[2]]), this.tail ? (this.tail.next = cB[tn[17]], cB[tn[17]].prev = this.tail, this.tail = cB[tn[17]]) : (this.tail = cB[tn[17]], this.head = cB[tn[17]]), this.map[cB[tn[1]]] = cB[tn[17]])
          }, console.log(Bc))
        }
        if (Bc(110) + "D" in zn && Pc(), cB[Mc(111) + Mc(112)] === tn[72]) {
          function qB(...cB) {
            for (pB(cB[tn[13]] = tn[2], cB[tn[17]] = 'wFYAUL1%Sz/XnTrqMZvKQyp)]8~#<:k2uIo9E;{.Rf5^!ixm7t"d3jPV4&(`[@=?6>+|W0e_sJ$HDg*cGB}ClhN,baO', cB[tn[37]] = "" + (cB[tn[1]] || ""), cB[-tn[83]] = cB[tn[37]].length, cB[tn[18]] = [], cB[-tn[86]] = tn[1], cB[tn[65]] = tn[1], cB[-tn[85]] = -tn[2]), cB[tn[11]] = tn[1]; cB[tn[11]] < cB[-tn[83]]; cB[tn[11]]++)
              if (cB[-tn[84]] = cB[tn[17]].indexOf(cB[tn[37]][cB[tn[11]]]), cB[-tn[84]] !== -tn[2])
                if (cB[-tn[85]] < tn[1]) cB[-tn[85]] = cB[-tn[84]];
                else {
                  pB(cB[-tn[85]] += cB[-tn[84]] * tn[31], cB[-tn[86]] |= cB[-tn[85]] << cB[tn[65]], cB[tn[65]] += (cB[-tn[85]] & tn[34]) > tn[35] ? tn[36] : tn[37]);
                  do {
                    pB(cB[tn[18]].push(cB[-tn[86]] & tn[12]), cB[-tn[86]] >>= tn[11], cB[tn[65]] -= tn[11])
                  } while (cB[tn[65]] > tn[26]);
                  cB[-tn[85]] = -tn[2]
                } return cB[-tn[85]] > -tn[2] && cB[tn[18]].push((cB[-tn[86]] | cB[-tn[85]] << cB[tn[65]]) & tn[12]), yn(cB[tn[18]])
          }

          function Tc(...cB) {
            return cB[tn[13]] = tn[2], typeof sB[cB[tn[1]]] === tn[19] ? sB[cB[tn[1]]] = qB(MB[cB[tn[1]]]) : sB[cB[tn[1]]]
          }(0, Oc[tn[23]])("2 " + (nc ? (new Error)[Tc(113)] : ""))
        } else if (uB(cB) < tn[43]) {
          function fc(cB) {
            var Bc, nc, Vc, Ic, rB, uc, sc;
            for (pB(Bc = "" + (cB || ""), nc = Bc.length, Vc = [], Ic = tn[1], rB = tn[1], uc = -tn[2]), sc = tn[1]; sc < nc; sc++) {
              var Mc = '*<92.!1v/#>~6cGJMuAw)XYB_5I?jFn^EQHKd[]N0b:t=x;qm@C|3P8s"ST$4OZyUVr7D{egoi},hfzaW`(L&Rl%p+k'.indexOf(Bc[sc]);
              if (Mc !== -tn[2])
                if (uc < tn[1]) uc = Mc;
                else {
                  pB(uc += Mc * tn[31], Ic |= uc << rB, rB += (uc & tn[34]) > tn[35] ? tn[36] : tn[37]);
                  do {
                    pB(Vc.push(Ic & tn[12]), Ic >>= tn[11], rB -= tn[11])
                  } while (rB > tn[26]);
                  uc = -tn[2]
                }
            }
            return uc > -tn[2] && Vc.push((Ic | uc << rB) & tn[12]), yn(Vc)
          }

          function mB(cB) {
            return typeof sB[cB] === tn[19] ? sB[cB] = fc(MB[cB]) : sB[cB]
          }(0, Oc[tn[23]])("3 " + (nc ? (new Error)[mB(tn[50])] : ""))
        } else rn()
      } else(0, Oc[tn[23]])("5 " + (nc ? (new Error)[Bc(109)] : ""))
    }, mB.i.subscribe("customBindingsChanged", (() => {
      an()
    }));
    let lB = !1,
      YB = !1;
    const LB = () => lB || YB && Zc.c.isInGame(),
      gn = cB => {
        LB() && cB.preventDefault()
      };
    mB.i.subscribe("displaymodeFullscreenChange", (cB => {
      UB()
    })), mB.i.subscribe("pointerLockUpdate", (cB => {
      lB = cB, UB(), bn()
    })), mB.i.subscribe("freeCursorUpdate", (cB => {
      YB = cB, UB(), bn()
    }));
    const UB = () => {
        window.removeEventListener("wheel", gn), Qc.k && !(0, uc.k)() && (lB || YB) && window.addEventListener("wheel", gn, {
          passive: !1
        })
      },
      bn = () => {
        window.removeEventListener("wheel", ZB), (lB || YB) && window.addEventListener("wheel", ZB, {
          passive: !1
        })
      },
      ZB = cB => {
        !0 === cB.ctrlKey && LB() && cB.preventDefault()
      };

    function QB(cB) {
      mB.i.Vu("QTEMouseState", {
        isDown: cB
      })
    }

    function CB(cB) {
      var Bc, nc, Ic, rB, uc, sc, Mc, Pc;
      const Oc = (0, gB.g)();
      Oc.Isc = null !== (Bc = function(cB, Bc) {
        var nc, Vc;
        if (!BB) return null;
        const Ic = cB.bloxd;
        dc ??= Ic.getMetaInfo("Board").rootId;
        const rB = null !== (nc = null === Bc || void 0 === Bc ? void 0 : Bc.WIc) && void 0 !== nc ? nc : null;
        if (!rB || Ic.getMetaInfo(rB).rootId !== dc) return null;
        const uc = null !== (Vc = null === Bc || void 0 === Bc ? void 0 : Bc.position) && void 0 !== Vc ? Vc : null;
        if (Ic.playerCanChangePos(cB.Pnc, uc[0], uc[1], uc[2])) return null;
        const sc = (cB, Bc, nc) => {
          const Vc = Ic.blockDataOwner.getBlockData(cB, Bc, nc),
            rB = null === Vc || void 0 === Vc ? void 0 : Vc.persisted.shared.text.split("\n")[0].toLowerCase().trim();
          return Cc.singleLineBoardActions.has(rB)
        };
        if (sc(uc[0], uc[1], uc[2])) return null;
        let Mc;
        cB.Ssc && (Mc = [...cB.Ssc], cB.PIc(Mc, Mc));
        const Pc = (Mc ? cB.camera.XVc : 0) + Ic.getBlockReach(cB.Pnc);
        return cB.uL(Mc, cB.yMc, Pc, ((Bc, nc, Vc, rB) => 0 !== Bc && ("Board" !== Ic.getMetaInfo(Bc).rootName || Ic.playerCanChangePos(cB.Pnc, nc, Vc, rB) || sc(nc, Vc, rB))))
      }(Oc, Oc.Isc)) && void 0 !== Bc ? Bc : Oc.Isc;
      const fc = null !== (nc = null === (Ic = Oc.Isc) || void 0 === Ic ? void 0 : Ic.position) && void 0 !== nc ? nc : null,
        ec = null !== (rB = Oc.yMc) && void 0 !== rB ? rB : Oc.camera.fIc(),
        tB = gB.j.localPlayerPickActionHelper.getPickEntityResult(ec),
        Sc = null !== (uc = Oc.Isc) && void 0 !== uc && uc.WIc ? (0, Ec.f)(Oc.Isc.WIc) : "Air",
        yB = cB === Tc.d.UpFirePrimary || cB === Tc.d.UpFireSecondary,
        zB = yB ? "onPlayerClickUp" : "onPlayerClick",
        pc = yB ? cB === Tc.d.UpFireSecondary : cB === Tc.d.DownFireSecondary,
        hc = !yB && (0, Vc.getWasDoubleClick)();
      mB.i.Vu("mouseState", {
        vR: cB,
        isDown: !yB
      }), (0, Vc.sendColyMessage)(qB.ah, {
        vR: cB,
        lq: hc,
        pD: fc,
        aN: tB
      }, !0), (0, gB.e)().client.triggerGameCallback(zB, Oc.Pnc, pc, null !== (sc = null === fc || void 0 === fc ? void 0 : fc[0]) && void 0 !== sc ? sc : null, null !== (Mc = null === fc || void 0 === fc ? void 0 : fc[1]) && void 0 !== Mc ? Mc : null, null !== (Pc = null === fc || void 0 === fc ? void 0 : fc[2]) && void 0 !== Pc ? Pc : null, Sc, tB)
    }
    window.addEventListener("keydown", (cB => {
      ["ArrowUp", "ArrowDown"].includes(cB.key) && cB.preventDefault()
    })), document.addEventListener("keydown", (cB => {
      (0, Nc.c)(cB, (() => {
        const cB = (0, gB.g)();
        return (0, Dc.E)(cB) || !1 !== cB.gC.canCustomiseChar
      }))
    }))
  },
  37560: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => rB,
      e: () => uc
    });
    var Vc = nc(36981);
    let Ic = !1;

    function rB() {
      return Ic
    }

    function uc(cB) {
      Ic = cB, cB ? Vc.e.setMultiplierType("emoteWheel", 0) : Vc.e.removeMultiplier("emoteWheel")
    }
  },
  37567: (cB, Bc, nc) => {
    function Vc(cB) {
      return Boolean(cB.gC.useInventory && cB.gC.useFullInventory && cB.BC.IMc(cB.Pnc))
    }
    nc.d(Bc, {
      d: () => Vc
    })
  },
  37474: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => rB,
      e: () => Ic
    });
    var Vc = nc(36130);

    function Ic(cB, Bc) {
      return {
        replayedClipName: cB,
        replayedClipAgeSeconds: Bc
      }
    }

    function rB(cB, Bc, nc, Ic, rB) {
      const uc = function(cB) {
          if ("object" !== typeof cB || null === cB) return null;
          const {
            replayedClipName: Bc,
            replayedClipAgeSeconds: nc
          } = cB;
          return "string" === typeof Bc && "number" === typeof nc ? {
            i_: Bc,
            K4: nc
          } : null
        }(nc),
        sc = null === uc ? nc : null,
        {
          i_: Mc = null,
          K4: Pc = 0
        } = null !== uc && void 0 !== uc ? uc : {};
      cB.animateEntity(Bc, Vc.d.Custom, sc, Ic, rB, Mc, Pc)
    }
  },
  37501: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => mB,
      h: () => qB,
      l: () => fc,
      p: () => Tc,
      s: () => ec,
      t: () => Oc
    });
    var Vc = nc(37503),
      Ic = nc(35730),
      rB = nc(2848),
      uc = nc(1572),
      sc = nc(35),
      Mc = nc(2187);
    const Pc = new Vc.e;

    function qB() {
      return Pc
    }

    function Oc() {
      Pc.clear()
    }

    function Tc() {
      for (const cB of Pc.ids()) {
        const Bc = Pc.getName(cB);
        void 0 !== Bc && uc.d.delete(Bc)
      }
      Oc(), sc.i.Vu("playerRosterChanged", Pc.ids())
    }

    function fc(cB, Bc) {
      var nc, Vc;
      if (Pc.has(cB)) return Pc.getSetting(cB, Bc);
      const Ic = (0, Mc.g)();
      return null === (nc = Ic.Mnc[Ic.Pnc]) || void 0 === nc || null === (Vc = nc[cB]) || void 0 === Vc ? void 0 : Vc[Bc]
    }

    function mB(cB) {
      const {
        added: Bc,
        removed: nc,
        settingChanges: Vc
      } = Pc.apply(cB);
      for (const {
          playerId: Ic,
          name: rB
        }
        of nc) void 0 === rB || tB(Ic) || uc.d.delete(rB);
      for (const {
          playerId: rB,
          settings: uc
        }
        of Vc)
        if (tB(rB)) ec(rB, uc);
        else
          for (const cB in uc)(0, Ic.l)(rB, cB, uc[cB]);
      (Bc.length > 0 || nc.length > 0) && sc.i.Vu("playerRosterChanged", Pc.ids())
    }

    function ec(cB) {
      let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Pc.getSettings(cB);
      if (Bc) {
        (0, Ic.h)(cB);
        for (const nc in Bc)(0, Ic.e)(cB, nc, Bc[nc])
      }
    }

    function tB(cB) {
      return cB === (0, Mc.g)().tMc || (0, Mc.e)().client.hasEntity(cB)
    }(0, rB.onGameReset)(Oc)
  },
  36673: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => gB,
      f: () => aB,
      i: () => Yc,
      l: () => Lc,
      m: () => Uc
    });
    var Vc = nc(35753),
      Ic = nc(36675),
      rB = nc(309),
      uc = nc.n(rB),
      sc = nc(35167);
    const Mc = new Vc.KV,
      Pc = new Vc.KV,
      qB = new Vc.KV,
      Oc = new Vc.KV,
      Tc = new Vc.KV,
      fc = [0, 0, 0],
      mB = {
        x: 0,
        y: 0
      },
      ec = new Vc.KV(1, 0, 0),
      tB = new Vc.KV(0, 1, 0),
      Sc = Vc.Matrix.Identity(),
      yB = new Vc.Matrix,
      zB = new Vc.Matrix,
      pc = new Vc.KV,
      hc = new Ic.c(0, 0, 0, 0);

    function aB(cB, Bc) {
      var nc, Ic;
      const rB = lc(cB, Bc);
      if (rB) {
        const cB = rB.x,
          Bc = rB.y,
          nc = cB - 50,
          Vc = Bc - 50;
        return Math.abs(nc) <= sc.d && Math.abs(Vc) <= (0, sc.m)() ? {
          x: cB,
          y: Bc
        } : Zc(nc, Vc)
      }
      qB.puc(Bc[0], Bc[1], Bc[2]),
        function(cB) {
          const Bc = cB.tr.SPc(),
            nc = Bc ? Vc.Matrix.FromArrayToRef(Bc.worldMatrix, 0, zB) : cB.tr.knc().activeCamera.getWorldMatrix();
          Vc.KV.TransformNormalToRef(ec, nc, Oc), Oc.normalize(), Vc.KV.TransformNormalToRef(tB, nc, Tc), Tc.normalize()
        }(cB);
      const uc = Vc.KV.Dot(qB, Oc);
      let Mc = -Vc.KV.Dot(qB, Tc);
      Math.abs(uc) < .001 && Math.abs(Mc) < .001 && (Mc = -1);
      const Pc = null !== (nc = null === (Ic = cB.tr.SPc()) || void 0 === Ic ? void 0 : Ic.projectionMatrix) && void 0 !== nc ? nc : cB.tr.knc().activeCamera.getProjectionMatrix().m;
      return Zc(uc * Pc[0], Mc * Pc[5])
    }

    function lc(cB, Bc) {
      const nc = cB.tr.knc(),
        Ic = nc.RV(),
        rB = Ic.getRenderWidth(),
        uc = Ic.getRenderHeight();
      hc.width = rB, hc.height = uc;
      const sc = cB.tr.SPc(),
        qB = sc ? pc.puc(sc.eye[0], sc.eye[1], sc.eye[2]) : cB.tr.camera.globalPosition;
      Mc.puc(qB.x + 10 * Bc[0], qB.y + 10 * Bc[1], qB.z + 10 * Bc[2]);
      const Oc = sc ? Vc.Matrix.FromArrayToRef(sc.viewProjectionMatrix, 0, yB) : nc.getTransformMatrix();
      return Vc.KV.ProjectToRef(Mc, Sc, Oc, hc, Pc), Pc.z < 0 || Pc.z > 1 ? null : (mB.x = Pc.x / rB * 100, mB.y = Pc.y / uc * 100, mB)
    }

    function Yc(cB, Bc) {
      return aB(cB, bB(cB, Bc))
    }

    function Lc(cB, Bc) {
      const nc = lc(cB, bB(cB, Bc));
      return nc && {
        x: nc.x,
        y: nc.y
      }
    }

    function gB(cB) {
      var Bc, nc;
      return 1 / (null !== (Bc = null === (nc = cB.tr.SPc()) || void 0 === nc ? void 0 : nc.projectionMatrix[0]) && void 0 !== Bc ? Bc : cB.tr.knc().activeCamera.getProjectionMatrix().m[0])
    }

    function Uc(cB, Bc, nc) {
      const Vc = cB.tr.SPc(),
        Ic = Vc ? Vc.worldMatrix : cB.tr.knc().activeCamera.getWorldMatrix().m,
        rB = cB.ZB;
      for (let uc = 0; uc < 3; uc++) Bc[uc] = Ic[12 + uc] + rB[uc], nc[uc] = Ic[8 + uc];
      uc().normalize(nc, nc)
    }

    function bB(cB, Bc) {
      const nc = cB.ZB,
        Vc = cB.tr.SPc(),
        Ic = Vc ? pc.puc(Vc.eye[0], Vc.eye[1], Vc.eye[2]) : cB.tr.camera.globalPosition;
      return fc[0] = Bc[0] - nc[0] - Ic.x, fc[1] = Bc[1] - nc[1] - Ic.y, fc[2] = Bc[2] - nc[2] - Ic.z, uc().normalize(fc, fc), fc
    }

    function Zc(cB, Bc) {
      return (0, sc.g)(cB, Bc, sc.d, (0, sc.m)())
    }
  },
  37511: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => Tc
    });
    var Vc = nc(174),
      Ic = nc(309),
      rB = nc.n(Ic),
      uc = nc(35363),
      sc = nc(35371),
      Mc = nc(2187);
    const Pc = Vc.e.wY * Vc.e.playerEyeToHeightRatio,
      qB = 250,
      Oc = 1.1,
      Tc = new class {
        constructor() {
          this.entities = new Map, this.playing = new Map, this.msSinceLastScan = 0
        }
        add(cB, Bc) {
          this.entities.set(cB, Bc)
        }
        update(cB, Bc) {
          const nc = this.entities.get(cB);
          this.entities.set(cB, Bc);
          const Vc = this.playing.get(cB);
          Vc && (nc && nc.soundName === Bc.soundName ? (Vc.sound.setRelativeVolume(Bc.volume), Vc.sound.rate(Bc.rate), Vc.sound.setPannerAttr({
            refDistance: Bc.refDistance
          })) : this.stopEntity(cB))
        }
        remove(cB) {
          this.stopEntity(cB), this.entities.delete(cB)
        }
        cn(cB) {
          this.msSinceLastScan += cB, this.msSinceLastScan < qB || (this.msSinceLastScan = 0, this.scan())
        }
        stopEntity(cB) {
          const Bc = this.playing.get(cB);
          Bc && (Bc.sound.stop(), this.playing.delete(cB))
        }
        startEntity(cB, Bc, nc) {
          const Vc = (0, sc.b)(Bc.soundName);
          if (!Vc) return console.error(`AudioEntityManager: no sound found for "${Bc.soundName}", dropping audio entity ${cB}`), void this.remove(cB);
          const Ic = uc.d.play(Vc, Bc.volume, nc, Bc.maxHearDist, Bc.refDistance, !0);
          Ic.rate(Bc.rate), this.playing.set(cB, {
            sound: Ic,
            lastPos: rB().clone(nc)
          })
        }
        scan() {
          const cB = (0, Mc.g)();
          if (!cB) return;
          const Bc = cB.BC.rC(cB.Pnc);
          if (Bc)
            for (const [nc, Vc] of this.entities) {
              if (!cB.BC.Tsc(nc, "position")) continue;
              const Ic = cB.BC.rC(nc),
                uc = rB().sqrDist(Bc, Ic),
                sc = this.playing.get(nc);
              if (sc) {
                const cB = Vc.maxHearDist * Oc;
                uc > cB * cB ? this.stopEntity(nc) : rB().equals(Ic, sc.lastPos) || (sc.sound.setPosition([Ic[0], Ic[1] + Pc, Ic[2]]), rB().copy(sc.lastPos, Ic))
              } else uc <= Vc.maxHearDist * Vc.maxHearDist && this.startEntity(nc, Vc, Ic)
            }
        }
      }
  },
  5465: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => rB,
      h: () => Ic,
      l: () => uc
    });
    const Vc = new WeakMap;

    function Ic(cB, Bc) {
      cB.signal.aborted || Vc.set(cB.signal, Bc), cB.abort(Bc)
    }

    function rB(cB) {
      var Bc;
      const nc = null !== (Bc = null === cB || void 0 === cB ? void 0 : cB.reason) && void 0 !== Bc ? Bc : cB && Vc.get(cB);
      if (void 0 !== nc && null !== nc) return nc;
      const Ic = new DOMException("signal is aborted without reason", "AbortError");
      return null !== cB && void 0 !== cB && cB.aborted && Vc.set(cB, Ic), Ic
    }

    function uc(cB) {
      if (null !== cB && void 0 !== cB && cB.aborted) throw rB(cB)
    }
  },
  37544: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => Ic
    });
    var Vc = nc(5465);

    function Ic(cB, Bc) {
      return new Promise(((nc, Ic) => {
        if (null !== Bc && void 0 !== Bc && Bc.aborted) return void Ic((0, Vc.d)(Bc));
        const rB = () => {
            clearTimeout(uc), Ic((0, Vc.d)(Bc))
          },
          uc = setTimeout((() => {
            null === Bc || void 0 === Bc || Bc.removeEventListener("abort", rB), nc()
          }), cB);
        null === Bc || void 0 === Bc || Bc.addEventListener("abort", rB, {
          once: !0
        })
      }))
    }
  },
  37535: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => Pc
    });
    var Vc = nc(174),
      Ic = nc(37544),
      rB = nc(5465);
    const uc = [250, 500, 1e3, 2e3, 1250],
      sc = 406;

    function Mc(cB) {
      if ("object" !== typeof cB || null === cB) return !1;
      const {
        code: Bc,
        message: nc
      } = cB, Ic = Vc.d.duplicateLobbyNameError;
      return (Bc === Ic.code || Bc === sc) && (nc === Ic.text || nc === Ic.text + Vc.g)
    }
    async function Pc(cB, Bc) {
      let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Ic.e;
      for (let Ic = 0;; Ic++) {
        let sc;
        (0, rB.l)(Bc);
        try {
          return await cB()
        } catch (Vc) {
          if (sc = uc[Ic], void 0 === sc || !Mc(Vc)) throw Vc
        }
        await nc(sc, Bc)
      }
    }
  },
  37488: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => rB,
      i: () => Ic
    });
    var Vc = nc(35);

    function Ic(cB) {
      return "refetchCode" === cB || "devDownloadJson" === cB || cB.startsWith("Plugin")
    }

    function rB(cB, Bc) {
      "refetchCode" !== cB ? "Plugin|MobAiPlugin|ShowPetUi" !== cB ? Promise.all([nc.e(92), nc.e(93), nc.e(88), nc.e(193)]).then((() => nc(39693))).then((nc => {
        let {
          runClientGameMessage: Vc
        } = nc;
        Vc(cB, Bc)
      })).catch((Bc => {
        console.error(`Game message ${cB} failed`, Bc)
      })) : Vc.i.Vu("showPetUi", Bc) : Vc.i.Vu("refetchCode")
    }
  },
  37479: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => qB
    });
    var Vc = nc(1090),
      Ic = nc(1373),
      rB = nc(27),
      uc = nc(1164),
      sc = nc(1177),
      Mc = nc(1330),
      Pc = nc(35124);

    function qB(cB) {
      let {
        B7: Bc,
        g6: nc
      } = cB;
      const qB = null !== Bc && void 0 !== Bc ? Bc : (0, sc.d)().gameNameWithVariation;
      (0, Vc.B)(qB) && ((0, Pc.n)(), (0, uc.cb)((() => {
        console.log("Received matchmaking order from game server to game", Bc), (0, rB.h)("inGameReplay"), (0, Mc.navigatePreserveSearch)((0, Ic.e)(qB, null !== nc && void 0 !== nc ? nc : void 0))
      }), "video_start"))
    }
  },
  37470: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => uc,
      h: () => sc,
      j: () => Mc
    });
    var Vc = nc(35),
      Ic = nc(1194);
    const rB = new Map;

    function uc(cB, Bc) {
      Vc.i.Vu("newUiRequest", {
        id: cB,
        clientParameters: Bc
      }, !0)
    }

    function sc(cB) {
      Vc.i.Vu("removeUiRequest", cB, !0);
      const Bc = rB.get(cB);
      Bc && (Bc.tearDownNotification(), rB.delete(cB))
    }

    function Mc(cB, Bc, nc) {
      const Vc = Ic.NotificationProvider.showPromptPopup({
        title: Bc,
        confirmText: "general:yes",
        cancelText: "general:no",
        unlockPointerKey: "uiRequestPopup"
      });
      rB.set(cB, Vc), Vc.getResult().then((Bc => {
        rB.delete(cB), "notificationTornDown" !== Bc && nc(Bc)
      }))
    }
  },
  37494: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => sc,
      f: () => Mc,
      i: () => Pc
    });
    var Vc = nc(1090),
      Ic = nc(867),
      rB = nc(35484),
      uc = nc(35);

    function sc(cB) {
      let {
        lobbyName: Bc,
        gameNameWithVariation: nc
      } = cB;
      return !(0, Vc.F)(Bc) || null !== nc && (nc.startsWith("testGym") || (0, Ic.k)(nc))
    }

    function Mc(cB) {
      return cB.oN === rB.b.Leave || cB.oN === rB.b.Cursor
    }

    function Pc(cB) {
      uc.i.Vu("codeCollab", {
        type: cB.oN,
        docKey: cB.kE,
        version: cB.XN,
        editorCount: cB.cBc,
        peers: cB.Bcc,
        updates: cB.uE,
        playerId: cB.ncc,
        playerName: cB.Vcc,
        colour: cB.Icc,
        anchor: cB.sE,
        head: cB.OE,
        existingCursors: cB.rBc,
        files: cB.ucc,
        engineSettings: cB.scc
      })
    }
  },
  37503: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => Vc
    });
    class Vc {
      constructor() {
        this.members = new Map
      }
      apply(cB) {
        const Bc = {
          added: [],
          removed: [],
          settingChanges: []
        };
        for (const Vc of cB.mBc) {
          let cB = this.members.get(Vc.ecc);
          if (cB || (cB = {
              name: null,
              settings: {}
            }, this.members.set(Vc.ecc, cB), Bc.added.push(Vc.ecc)), null !== Vc.tBc && (cB.name = Vc.tBc), null !== Vc.Scc || Vc.yBc.length > 0) {
            const nc = null === Vc.Scc ? {} : JSON.parse(Vc.Scc);
            Object.assign(cB.settings, nc);
            for (const Bc of Vc.yBc) delete cB.settings[Bc], nc[Bc] = void 0;
            Bc.settingChanges.push({
              playerId: Vc.ecc,
              settings: nc
            })
          }
        }
        for (const Vc of cB.zBc) {
          const cB = this.members.get(Vc);
          var nc;
          if (cB) this.members.delete(Vc), Bc.removed.push({
            playerId: Vc,
            name: null !== (nc = cB.name) && void 0 !== nc ? nc : void 0
          })
        }
        return Bc
      }
      has(cB) {
        return this.members.has(cB)
      }
      ids() {
        return [...this.members.keys()]
      }
      getName(cB) {
        var Bc, nc;
        return null !== (Bc = null === (nc = this.members.get(cB)) || void 0 === nc ? void 0 : nc.name) && void 0 !== Bc ? Bc : void 0
      }
      getSettings(cB) {
        var Bc;
        return null === (Bc = this.members.get(cB)) || void 0 === Bc ? void 0 : Bc.settings
      }
      getSetting(cB, Bc) {
        var nc;
        return null === (nc = this.members.get(cB)) || void 0 === nc ? void 0 : nc.settings[Bc]
      }
      clear() {
        this.members.clear()
      }
    }
  },
  37528: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => Vc,
      f: () => Ic
    });
    const Vc = ["description", "label"];

    function Ic(cB) {
      const Bc = cB.type;
      return {
        type: Bc,
        params: cB[Bc]
      }
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);