export const id = 266;
export const ids = [266];
export const modules = {
  40140: (MM, rM, iM) => {
    function OM(MM) {
      return !(!MM.lobbyLeaderboardInfo && !MM.lobbyManage)
    }
    iM.d(rM, {
      d: () => OM
    })
  },
  40059: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => jM
    });
    var OM = iM(22),
      SM = iM(2067);

    function jM(MM) {
      let {
        taskId: rM,
        progress: iM
      } = MM;
      const OM = SM.d.get("_tasks");
      null !== OM && void 0 !== OM && OM[rM] && SM.d.apply({
        _tasks: {
          ...OM,
          [rM]: {
            ...OM[rM],
            progress: iM
          }
        }
      })
    }
    OM.i.subscribe("clientTaskProgress", (MM => {
      jM(MM)
    }))
  },
  40004: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => Mi,
      i: () => Vr,
      k: () => cr
    });
    var OM = iM(4069),
      SM = iM(143),
      jM = iM(181),
      aM = iM(632),
      PM = iM(30),
      nM = iM(3063),
      QM = iM(4129),
      zM = iM(4118),
      LM = iM(1229);
    const mM = new WeakMap;
    class HM {
      constructor(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
          sQM: !0
        };
        this.callbacks = rM, this.options = iM, this.RiM = void 0, this.sessionId = void 0, this.fR = [], this.DQM = !1, this.dh = !1, this.kQM = void 0, this.oR = 0, this.pSM = 0, this.ZQM = (MM, rM) => {
          if (this.dh) return;
          const iM = Number(MM);
          this.DQM ? this.oQM(iM, rM) : this.fR.push({
            id: iM,
            payload: rM
          })
        }, this.dispose = () => {
          this.dh || (this.dh = !0, mM.delete(this), this.fR.length = 0, this.kQM())
        }, this.RiM = MM, this.sessionId = MM.sessionId, mM.set(this, []), this.kQM = this.fQM()
      }
      YQM(MM) {
        this.kQM(), this.RiM = MM, this.sessionId = MM.sessionId, this.oR = 0, this.pSM = 0, this.kQM = this.fQM()
      }
      get pR() {
        return this.pSM
      }
      fQM() {
        const MM = this.RiM.TE("*", this.ZQM);
        return this.options.sQM && this.RiM.rU(this.dispose), MM
      }
      oQM(MM, rM) {
        try {
          (0, QM.bc)(MM) && (rM = (0, QM.c)(MM, zM.Vz.from(rM)));
          const iM = mM.get(this)[MM];
          if ("function" !== typeof iM) {
            if (this.callbacks.NQM) return void this.callbacks.NQM(MM, rM);
            throw new Error(`No onMessage handler registered for message id ${MM}`)
          }
          iM(rM)
        } catch (iM) {
          this.callbacks.AQM(`Error in onMessage ${MM} with payload ${JSON.stringify(rM)}`, iM)
        } finally {
          this.oR++
        }
      }
      vQM() {
        for (const {
            id: MM,
            payload: rM
          }
          of this.fR) {
          if (this.dh) break;
          this.oQM(MM, rM)
        }
        this.fR.length = 0
      }
      xG() {
        return this.dh
      }
      FQM() {
        if (this.DQM || this.dh) throw new Error("Trying to getOnMessageRegistrationHandler after registration finished");
        return {
          TE: (MM, rM) => {
            if (this.DQM || this.dh) throw new Error("Trying to call onMessage after registration finished");
            this.TE(MM, rM)
          },
          finishRegistration: () => {
            if (this.dh) throw new Error("Cannot finish message registration after disposal");
            this.DQM = !0, this.vQM()
          }
        }
      }
      TE(MM, rM) {
        var iM, OM;
        null === (iM = (OM = this.callbacks).BQM) || void 0 === iM || iM.call(OM);
        const SM = mM.get(this);
        for (; MM > SM.length;) SM[SM.length] = null;
        SM[MM] = rM
      }
      send(MM, rM) {
        this.XQM(), (0, LM.G)(rM) ? this.RiM.Xp(MM, rM) : this.RiM.send(MM, rM)
      }
      XQM() {
        var MM, rM;
        (this.pSM++, 5 === hM++) && (null === (MM = (rM = this.callbacks).BQM) || void 0 === MM || MM.call(rM), hM = 0)
      }
      aE() {
        this.dispose(), this.RiM.aE()
      }
      leave() {
        this.dispose(), this.RiM.leave()
      }
    }
    let hM = 0;
    var JM = iM(4086);
    class dM extends HM {
      constructor(MM) {
        super(MM, {
          BQM: () => {
            (0, PM.l)(!0) && (0, OM.uR)()
          },
          AQM: (MM, rM) => {
            var iM;
            null === (iM = (0, nM.f)()) || void 0 === iM || iM.GJ(MM, rM)
          }
        }, {
          sQM: !1
        }), (0, JM.d)(MM)
      }
      xR(MM, rM) {
        return !!(0, JM.l)((0, JM.c)(), this.RiM, MM, rM) && (this.XQM(), !0)
      }
      YQM(MM) {
        this.IQM(), super.YQM(MM), (0, JM.d)(MM)
      }
      aE() {
        super.aE(), this.IQM()
      }
      IQM() {
        this.RiM.QE.PL.mD = void 0
      }
    }
    var yM = iM(22),
      lM = iM(2067),
      EM = iM(1830),
      UM = iM(37414),
      GM = iM(40007),
      CM = iM(39017),
      eM = iM(38784),
      bM = iM(625),
      wM = iM(39406);

    function tM(MM, rM, iM) {
      const OM = function(MM) {
          const rM = new Int32Array(MM.length * wM.e);
          return MM.forEach(((MM, iM) => {
            const OM = iM * wM.e;
            if (4 === MM.length) {
              const [iM, SM, jM, aM] = MM;
              rM.set([iM, SM, jM, iM, SM, jM, aM], OM)
            } else {
              const [iM, SM, jM, aM, PM, nM, QM] = MM;
              rM.set([iM, jM, PM, SM, aM, nM, QM], OM)
            }
          })), rM
        }(iM),
        SM = (rM, iM, OM, SM) => {
          MM.setBlockNoMulti(rM, iM, OM, SM, !0)
        };
      MM.client.gameRecorder.isCapturing() ? (0, wM.vb)(OM, (0, wM.ub)(OM), SM) : MM.Cm.uL.eC(OM, {
        lF: SM,
        isHookId: rM => MM.blockChangeHasHooks(rM),
        watched: () => function(MM, rM, iM) {
          const OM = [],
            SM = (MM, rM, iM) => {
              OM.push(MM, rM, iM)
            },
            jM = new Set;
          for (let aM = 0; aM < iM.length; aM += wM.e)
            for (let rM = (0, bM.R)(iM[aM]); rM <= (0, bM.R)(iM[aM + 3]); rM++)
              for (let OM = (0, bM.R)(iM[aM + 1]); OM <= (0, bM.R)(iM[aM + 4]); OM++)
                for (let PM = (0, bM.R)(iM[aM + 2]); PM <= (0, bM.R)(iM[aM + 5]); PM++) {
                  const iM = `${rM}|${OM}|${PM}`;
                  jM.has(iM) || (jM.add(iM), MM.blockDataOwner.forEachDataCell(rM, OM, PM, SM))
                }
          return rM.forEachCell(SM), Int32Array.from(OM)
        }(MM, rM, OM)
      }), MM.Cm.sMM()
    }

    function gM(MM) {
      MM.liM = new Set, MM.GiM = new Set, MM.EiM = new Set, MM.CiM = new Set, MM.UiM = [], MM.eiM = [], MM.Ix = new Set, MM.Fi = [], MM.Qv = []
    }
    class uM {
      constructor(MM) {
        this.Cm = MM
      }
      register(MM) {
        const rM = this.Cm,
          iM = (0, nM.b)();
        MM.TE(QM.Z, (MM => {
          rM.uL.liM.add(MM), rM.uL.GiM.delete(MM)
        })), MM.TE(QM.fb, (MM => {
          rM.uL.GiM.add(MM), rM.uL.liM.delete(MM)
        })), MM.TE(QM.Xd, (MM => {
          rM.uL.GiM.delete(MM), rM.uL.liM.delete(MM)
        })), MM.TE(QM.db, (MM => {
          rM.uL.EiM.add(MM), rM.uL.CiM.delete(MM)
        })), MM.TE(QM.hb, (MM => {
          rM.uL.CiM.add(MM), rM.uL.EiM.delete(MM)
        })), MM.TE(QM._d, (MM => {
          rM.uL.CiM.delete(MM), rM.uL.EiM.delete(MM)
        })), MM.TE(QM.ab, (MM => {
          (0, LM.kb)(MM, rM.uL.eiM), (0, LM.kb)(MM, rM.uL.UiM), rM.uL.UiM.push(MM)
        })), MM.TE(QM.gb, (MM => {
          (0, LM.kb)(MM, rM.uL.UiM), (0, LM.kb)(MM, rM.uL.eiM), rM.uL.eiM.push(MM)
        })), MM.TE(QM.Yd, (MM => {
          (0, LM.kb)(MM, rM.uL.UiM), (0, LM.kb)(MM, rM.uL.eiM)
        })), MM.TE(QM.yf, (MM => {
          let {
            Br: iM,
            Xr: OM
          } = MM;
          OM ? rM.uL.Ix.delete(iM) : rM.uL.Ix.add(iM)
        })), MM.TE(QM.xf, (MM => {
          let {
            Fi: OM,
            Bi: SM
          } = MM;
          iM.updateWalkThroughRect(rM.eD, OM, SM)
        })), (0, OM.onGameResetOnce)((() => {
          gM(rM.uL)
        })), MM.TE(QM.Yb, (MM => {
          CM.b.applyServerUpdate(MM)
        })), MM.TE(QM.kb, (MM => {
          iM.applyServerBlocks((() => {
            ! function(MM, rM) {
              for (const {
                  GO: iM,
                  CO: OM
                }
                of rM) {
                const rM = eM.e[OM];
                if (rM) {
                  const {
                    compX: OM,
                    compY: SM,
                    compZ: jM,
                    mainMultiblock: aM
                  } = rM;
                  MM.cW(iM[0] - OM, iM[1] - SM, iM[2] - jM, aM)
                }
              }
              for (const {
                  GO: iM,
                  CO: OM,
                  eO: SM
                }
                of rM) MM.setBlockNoMulti(iM[0], iM[1], iM[2], OM, !0), MM.blockDataOwner.setBlockData(iM[0], iM[1], iM[2], null === SM ? void 0 : JSON.parse(SM)), MM.blockAdded(iM[0], iM[1], iM[2], OM)
            }(iM, MM)
          })), yM.i.Tz("changeBlockFail", MM), iM.client.triggerGameCallback("onChangeBlockFail", MM), yM.i.Tz("EditBoard", {
            pos: null
          }), yM.i.Tz("EditCodeBlock", {
            pos: null,
            canChangePos: null
          })
        })), MM.TE(QM.yb, (MM => {
          iM.applyServerBlocks((() => {
            tM(iM, CM.b, MM)
          }))
        })), MM.TE(QM.nf, (MM => {
          let {
            cr: rM,
            Mi: OM
          } = MM;
          if (iM.EX(rM[0], rM[1], rM[2])) {
            const MM = (0, nM.b)().sE(rM[0], rM[1], rM[2]);
            (0, nM.b)().updateMailboxContents(rM[0], rM[1], rM[2], MM, OM)
          }
        })), MM.TE(QM.qe, (MM => {
          let {
            pos: rM,
            data: OM
          } = MM;
          iM.blockDataOwner.setBlockData(rM[0], rM[1], rM[2], OM), iM.blockAdded(rM[0], rM[1], rM[2], iM.sE(rM[0], rM[1], rM[2]))
        }))
      }
    }
    var RM = iM(38104),
      pM = iM(37722),
      WM = iM(39055),
      sM = iM(38895),
      DM = iM(39074);
    class kM {
      constructor(MM, rM) {
        this.Cm = MM, this.setUpQueuedEntity = rM
      }
      register(MM) {
        const rM = this.Cm,
          iM = (0, nM.b)();
        MM.TE(QM.X, (MM => {
          let {
            Yj: rM,
            Nj: iM
          } = MM;
          this.setUpQueuedEntity(rM), rM = (0, pM.e)(rM), (0, nM.b)().client.gameRecorder.recordBulletShot(rM, iM), yM.i.Tz(`bulletShot|${rM}`, {
            bulletDirections: iM
          })
        })), MM.TE(QM.ac, (MM => {
          let {
            xj: rM,
            vj: iM
          } = MM;
          yM.i.Tz("damagedByOtherPlayer", {
            xj: rM,
            direction: iM
          }, !0)
        })), MM.TE(QM.nd, (MM => {
          yM.i.Tz("playerKilled", MM, !0), (0, pM.m)(MM.killerEId) && !(0, pM.m)(MM.deadEId) && yM.i.Tz("sessionReplayPlayerKill", {
            killstreak: MM.killstreak
          }), (0, nM.b)().client.gameRecorder.recordPlayerKilled(MM.deadEId, MM.killerEId, MM.withItem, MM.killstreak)
        })), MM.TE(QM.Eb, (MM => {
          yM.i.Tz("customKillfeed", MM, !0), (0, nM.b)().client.gameRecorder.recordCustomKillfeed(MM.killer, MM.victim, MM.withItem)
        })), MM.TE(QM.Ad, (MM => {
          let {
            Pr: iM,
            nr: OM
          } = MM;
          this.setUpQueuedEntity(iM);
          const SM = rM.hU.TrM(iM);
          null !== SM && void 0 !== SM && SM.isGun() && SM.reload(Date.now(), OM)
        })), MM.TE(QM.me, (MM => {
          let {
            mO: iM,
            HO: OM
          } = MM;
          const SM = OM ? (0, DM.f)(rM, OM) : void 0;
          yM.i.Tz("sendHitmarker", {
            mO: iM,
            screenPos: SM
          }, !0)
        })), MM.TE(QM.Ec, (MM => {
          let {
            pj: OM,
            Wj: SM,
            Dj: jM,
            kj: aM,
            Zj: PM,
            oj: nM,
            fj: QM
          } = MM;
          this.setUpQueuedEntity(OM), OM = (0, pM.e)(OM);
          const zM = rM.hU.vrM(OM);
          if (zM && (zM.lastHurtTime = performance.now()), (0, WM.playRigHurt)(rM, OM, nM), yM.i.Tz("lifeformHurt", {
              eId: OM,
              fj: QM
            }), SM) {
            const MM = (0, DM.f)(rM, SM.HO);
            yM.i.Tz("yourAttackHit", {
              mO: aM,
              screenPos: MM,
              hitSelf: OM === rM.eD
            })
          }
          OM === rM.eD && (iM.shakePlayerCamera(OM, PM / 40, 200), yM.i.Tz("closeShopOnDamaged", null), yM.i.Tz("damagedByOtherPlayer", {
            xj: null,
            direction: nM,
            Zj: PM
          }, !0));
          const LM = rM.hU.XE(OM);
          if (LM && (jM || aM)) {
            const MM = [LM[0], LM[1] + 1, LM[2]];
            jM && (0, sM.g)(rM, sM.z, MM, 15), aM && (0, sM.g)(rM, sM.n, MM, 10)
          }
        })), MM.TE(QM.Bc, (MM => {
          let {
            cM: iM,
            Mr: OM,
            rr: SM
          } = MM;
          (0, RM.b)(rM).setHealthFrac((0, pM.e)(iM), SM), yM.i.Tz("lifeformHealthChanged", {
            eId: (0, pM.e)(iM),
            Mr: OM,
            rr: SM
          })
        })), MM.TE(QM.R, (MM => {
          let {
            rS: iM,
            iS: OM
          } = MM;
          (0, nM.b)().playerAttacked(rM.eD, iM, OM)
        })), MM.TE(QM.mb, (() => {
          const MM = rM.hU.TrM(rM.eD);
          null !== MM && void 0 !== MM && MM.isChargeable() && MM.finishCharging(!1, Date.now())
        })), MM.TE(QM.Ib, (MM => {
          let {
            Pi: rM,
            ni: iM,
            Qi: OM,
            Ui: SM,
            Gi: jM,
            Ci: aM
          } = MM;
          rM = (0, pM.e)(rM), (0, nM.b)().client.updateEffect(rM, iM, {
            displayName: OM,
            icon: SM,
            duration: jM,
            level: aM
          })
        })), MM.TE(QM.Bd, (MM => {
          let {
            Pi: rM,
            ni: iM
          } = MM;
          rM = (0, pM.e)(rM), (0, nM.b)().client.removeEffect(rM, iM)
        })), MM.TE(QM.jf, (MM => {
          yM.i.Tz("ttbEffectMultiplier", MM)
        }))
      }
    }
    var ZM = iM(40028),
      oM = iM(38097),
      fM = iM(4560),
      YM = iM(39083),
      NM = iM(37699),
      AM = iM(37705),
      xM = iM(38010),
      vM = iM(38130),
      FM = iM(39092),
      BM = iM(40032);
    class XM {
      constructor(MM, rM) {
        this.Cm = MM, this.setUpQueuedEntity = rM
      }
      register(MM) {
        const rM = this.Cm,
          iM = (0, nM.b)();
        MM.TE(QM.Rc, (MM => {
          let {
            eId: iM,
            settings: OM
          } = MM;
          (0, vM.e)(iM);
          for (const rM in OM)(0, vM.d)(iM, rM, OM[rM]);
          if ("canSee" in OM && rM.hU.BMM(iM, "hidingMeshManager")) {
            const MM = rM.hU.getState(iM, "hidingMeshManager");
            MM.canSee = (0, FM.c)("canSee", OM.canSee), MM._forceUpdate = !0
          }
        })), MM.TE(QM.F, (MM => {
          let {
            QS: iM,
            zS: OM,
            animationScript: SM,
            LS: jM,
            mS: aM,
            HS: PM,
            hS: QM
          } = MM;
          iM = (0, pM.e)(iM);
          const zM = null === SM && null !== PM ? (0, ZM.e)(PM, QM) : SM;
          (0, nM.b)().client.gameRecorder.recordAnimateEntity(iM, OM, zM, jM, aM), (0, RM.b)(rM).animations.animateEntity(iM, OM, SM, jM, aM, PM, QM), null !== SM || iM === rM.eD && OM === oM.e.Emote && (0, nM.b)().client.cameraController.endTemporaryThirdPerson()
        })), MM.TE(QM.le, (MM => {
          (0, BM.c)(MM)
        })), MM.TE(QM.kd, (MM => {
          for (const rM of MM)(0, YM.z)(rM);
          yM.i.Tz("playerCosmeticsUpdated", MM, !0)
        })), MM.TE(QM.N, (MM => {
          for (const iM of MM)(0, xM.h)(rM, iM)
        })), MM.TE(QM.Vc, (MM => {
          (0, sM.j)(rM, (0, LM.u)(MM))
        })), MM.TE(QM.Yc, (MM => {
          fM.d[MM.nM] ? (0, sM.j)(rM, {
            ...fM.d[MM.nM],
            pos1: MM.pos1,
            pos2: MM.pos2
          }) : console.error(`Unknown preset id: ${MM.nM}`)
        })), MM.TE(QM.id, (MM => {
          var rM, iM;
          let {
            pS: OM,
            WS: SM,
            sS: jM,
            DS: aM
          } = MM, {
            ZS: PM,
            oS: QM
          } = null !== aM && void 0 !== aM ? aM : {};
          const {
            kS: zM
          } = null !== aM && void 0 !== aM ? aM : {};
          PM = null !== (rM = PM) && void 0 !== rM ? rM : void 0, QM = null !== (iM = QM) && void 0 !== iM ? iM : void 0, "string" === typeof zM && this.setUpQueuedEntity(zM), (0, nM.b)().client.gameRecorder.recordPlaySound(OM, SM, jM, aM), NM.e.play((0, AM.f)(OM), SM, zM, PM, QM).rate(jM)
        })), MM.TE(QM.qf, (MM => {
          for (const rM in MM) {
            const OM = MM[rM];
            for (const MM in OM) iM.client.meshCreator.handleParticleSystemUpdate(rM, MM, OM[MM])
          }
        }))
      }
    }
    var IM = iM(38764),
      KM = iM(38735);
    class qM {
      constructor(MM) {
        this.Cm = MM
      }
      register(MM) {
        const rM = this.Cm,
          iM = (0, nM.b)();

        function OM() {
          return rM.hU.RrM(rM.eD)
        }
        MM.TE(QM.jc, (MM => {
          let {
            zi: iM,
            Li: OM,
            mi: SM,
            Hi: jM,
            Ji: aM,
            di: PM,
            yi: nM,
            li: QM,
            Ei: zM
          } = MM;
          if (!rM.hU.BMM(iM, "itemState")) return void(0, IM.k)(rM, iM, [aM, PM, nM], OM, {
            amount: SM,
            attributes: JSON.parse(jM),
            li: QM,
            size: zM
          });
          const LM = rM.hU.getState(iM, "itemState");
          LM.amount = SM, LM.li = QM, LM.creationTime = Date.now(), (0, KM.setServerPosition)(rM.hU.getState(iM, "smoothToServerPos"), aM, PM, nM)
        })), MM.TE(QM.jb, (MM => {
          (0, RM.b)(rM).setCantPickUp(MM, !0), rM.hU.BMM(MM, "itemState") && (rM.hU.getState(MM, "itemState").li = !0)
        })), MM.TE(QM.Td, (MM => {
          (0, RM.b)(rM).setCantPickUp(MM, !1), rM.hU.BMM(MM, "itemState") && (rM.hU.getState(MM, "itemState").li = !1)
        })), MM.TE(QM.ed, (MM => {
          let {
            pickUpItems: rM,
            pickUpAckSeq: iM
          } = MM;
          for (const {
              name: SM,
              amount: jM,
              attributes: aM
            }
            of rM) OM().pickUpItem({
            name: SM,
            amount: jM,
            typeObj: IM.A[SM],
            attributes: aM
          });
          (0, nM.b)().client.inventoryPrediction.serverChangeApplied(iM)
        })), MM.TE(QM.Ge, (MM => {
          let {
            index: iM,
            name: OM,
            amount: SM,
            attributes: jM,
            setSlotAckSeq: aM
          } = MM;
          const PM = rM.hU.prM(rM.eD);
          (iM < PM.playerInventory.numSlots || PM.wr || PM.inCreative) && PM.setItemSlot(iM, OM, SM, jM), (0, nM.b)().client.inventoryPrediction.serverChangeApplied(aM)
        })), MM.TE(QM.fc, (MM => {
          (0, nM.b)().client.inventoryPrediction.acknowledge(MM)
        })), MM.TE(QM.B, (MM => {
          let {
            yO: rM,
            lO: iM,
            EO: OM,
            UO: SM
          } = MM;
          (0, nM.b)().client.itemDropPrediction.onActionItemDrops(rM, iM, OM, SM)
        })), MM.TE(QM.tb, (MM => {
          OM().clearInventory(), (0, nM.b)().client.inventoryPrediction.serverChangeApplied(MM)
        })), MM.TE(QM.Ke, (MM => {
          yM.i.Tz("setSelectedInventorySlotI", MM, !0)
        })), MM.TE(QM.qb, (MM => {
          let {
            ei: iM,
            bi: OM,
            wi: SM,
            ti: jM,
            gi: aM,
            ui: PM,
            Ri: QM,
            Wi: zM
          } = MM;
          const LM = rM.hU.prM(rM.eD);
          if (PM) {
            const {
              br: MM,
              pr: rM
            } = zM;
            return (0, nM.b)().client.inventoryPrediction.rMM(rM, (() => {
              LM.chestRefreshed(OM, SM, jM, QM, MM)
            })) && yM.i.Tz("chestToggleFromServer", !1, !0), void yM.i.Tz("chestRefreshedFromServer")
          }(iM || LM.wr) && (iM ? (LM.chestOpened(OM, SM, jM, aM, QM), null !== aM && (0, nM.b)().client.ironChestPasskeyCache.onChestOpened(jM, aM)) : LM.chestClosed(), yM.i.Tz("chestToggleFromServer", iM, !0))
        })), MM.TE(QM.Gb, (MM => {
          let {
            craftingRecipeItemName: OM,
            recipesForItem: SM
          } = MM;
          OM ? iM.craftingManager.editRecipesForPlayer(rM.eD, OM, SM) : iM.craftingManager.resetAllPlayerRecipes(rM.eD), yM.i.Tz("craftingRecipesEdited", {
            itemName: OM,
            recipesForItem: SM
          })
        })), MM.TE(QM.Id, (MM => {
          let {
            Ni: rM,
            Ai: iM,
            xi: SM
          } = MM;
          OM().removeItemName(rM, iM), (0, nM.b)().client.inventoryPrediction.serverChangeApplied(SM)
        })), MM.TE(QM.Fd, (MM => {
          let {
            nS: OM
          } = MM;
          iM.craftingManager.removeRecipes(rM.eD, OM), yM.i.Tz("craftingRecipesEdited", {
            itemName: OM,
            recipesForItem: []
          })
        }))
      }
    }
    var TM = iM(6944),
      VM = iM(38576),
      cM = iM(347),
      Mr = iM.n(cM),
      rr = iM(4906),
      ir = iM(38670),
      Or = iM(39258),
      Sr = iM(38572);
    class jr {
      constructor(MM, rM) {
        this.Cm = MM, this.setUpQueuedEntity = rM
      }
      register(MM) {
        const rM = this.Cm,
          iM = (0, nM.b)();
        MM.TE(QM.ef, (MM => {
          let {
            ir: iM,
            Sr: SM,
            jr: jM,
            ar: aM
          } = MM;
          const PM = [SM, jM, aM];
          rM.hU.setPosition(rM.eD, PM), (0, OM.sendColyMessage)(QM.Ng, {
            FQ: iM,
            BQ: rr.e
          }), yM.i.Tz("localPlayerTeleported", {
            pos: PM,
            isCorrection: !1
          })
        })), MM.TE(QM.bd, (MM => {
          let {
            rO: rM,
            iO: iM,
            OO: OM,
            SO: SM
          } = MM;
          this.setUpQueuedEntity(rM);
          const jM = [iM, OM, SM];
          yM.i.Tz(`otherPlayerTeleported|${rM}`, {
            pos: jM
          })
        })), MM.TE(QM.qd, (MM => {
          let {
            Qr: iM,
            zr: SM,
            Lr: jM,
            mr: aM,
            Hr: PM,
            hr: nM,
            Jr: zM,
            yr: LM,
            dr: mM,
            Ur: HM
          } = MM;
          const hM = [SM, jM, aM];
          rM.hU.setPosition(rM.eD, hM);
          const JM = rM.hU.nrM(rM.eD),
            dM = rM.hU.Av(rM.eD);
          Mr().set(dM.HA, 0, 0, 0), Mr().set(dM.JA, 0, 0, 0), Mr().set(dM.dd, PM, nM, zM), dM.sA(), JM._flying = null !== HM, HM ? (JM.flyAccel.Gr = HM.Gr, JM.flyAccel.Cr = HM.Cr) : JM.flyAccel.reset(), LM && JM.movementType === TM.l.GLIDING && (JM.lr = LM.lr, Mr().copy(JM.Er, LM.Er)), (0, OM.sendColyMessage)(QM.Ng, {
            FQ: iM,
            BQ: rr.e
          }), yM.i.Tz("localPlayerTeleported", {
            pos: hM,
            isCorrection: !0
          })
        })), MM.TE(QM.Oe, (MM => {
          let {
            vehicleEId: rM,
            overrides: iM
          } = MM;
          (0, nM.b)().applyRiddenVehicleSettingOverrides(rM, iM)
        })), MM.TE(QM.uf, (MM => {
          let {
            ri: iM,
            ii: OM,
            Oi: SM
          } = MM;
          const jM = rM.hU.nrM(rM.eD).physicsState.type === TM.n.SLEEPING && iM === TM.n.DEFAULT;
          (0, nM.b)().updatePositionAndPhysics(rM.eD, {
            type: iM,
            tier: OM
          }, !0, SM), jM && (0, nM.b)().updateHeldVehicleStatus()
        })), MM.TE(QM.lb, (MM => {
          let {
            jS: iM,
            aS: OM
          } = MM;
          rM.hU.grM(rM.eD).setPose(iM, OM)
        })), MM.TE(QM.ue, (MM => {
          const {
            iL: iM,
            aiM: OM
          } = (0, VM.f)([MM[0], MM[1], MM[2]]);
          Sr.b.setLookDirection(rM, iM, OM), (0, ir.w)(iM, OM);
          const SM = rM.hU.grM(rM.eD);
          SM && (SM.heading = iM)
        })), MM.TE(QM.we, (MM => {
          iM.client.cameraController.setCameraZoom(MM)
        })), MM.TE(QM.Ue, (MM => {
          let {
            aM: OM,
            PM: SM
          } = MM;
          iM.shakePlayerCamera(rM.eD, OM, SM)
        })), MM.TE(QM.oc, (MM => {
          rM.hU.grM(rM.eD).jumpMultiplier.setMultiplierType("jumpEffectAmount", MM)
        })), (0, OM.onGameResetOnce)((() => {
          rM.hU.grM(rM.eD).jumpMultiplier.setMultiplierType("jumpEffectAmount", 1)
        })), MM.TE(QM.J, (MM => {
          rM.hU.Av(rM.eD).applyImpulse(MM)
        })), MM.TE(QM.Se, (MM => {
          const iM = rM.hU.Av(rM.eD);
          Mr().set(iM.HA, 0, 0, 0), Mr().set(iM.JA, 0, 0, 0), Mr().copy(iM.dd, MM), iM.sA()
        })), (0, OM.onGameResetOnce)((() => {
          (0, Or.setFloatingYValue)(rM.hU.getState(rM.eD, "physics"), rM.hU.jK(rM.eD), null)
        })), MM.TE(QM.Jb, (MM => {
          let {
            Si: iM,
            ji: OM,
            ai: SM
          } = MM;
          const jM = (0, pM.e)(iM);
          if (jM === rM.eD) {
            const MM = rM.hU.jK(rM.eD).position;
            SM ??= Math.floor(MM[1]) - 1, (0, Or.setFloatingYValue)(rM.hU.getState(rM.eD, "physics"), rM.hU.jK(rM.eD), OM ? SM : null)
          }(0, RM.b)(rM).setFloating(jM, OM, SM);
          const aM = rM.hU.getState(jM, "floating");
          aM && (aM.isFloating = OM, aM.ai = OM ? SM : null)
        }))
      }
    }

    function ar(MM, rM, iM, OM, SM) {
      let jM = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (!MM.hU.urM(MM.eD)) return console.log("Got resync inven but don't have inven component"), void rM.acknowledge(OM);
      jM && console.error("Had to sync inven"), rM.rMM(OM, SM) && iM.Tz("chestToggleFromServer", !1, !0), iM.Tz("syncedInvenFromServer")
    }
    var Pr = iM(40043),
      nr = iM(40048),
      Qr = iM(2074);
    var zr = iM(4887);

    function Lr(MM) {
      const rM = MM.uL;
      let iM = 0,
        SM = -1,
        aM = -1 / 0,
        PM = null,
        nM = !0;
      const zM = () => {
        if (++iM % 10 !== 0) return;
        const zM = (0, OM.getLastReceivedPacketId)();
        if (zM <= SM) return;
        const [LM, mM, HM] = MM.hU.XE(MM.eD), hM = ! function(MM) {
          var rM;
          let iM = null === (rM = MM.hU.ziM(MM.eD)) || void 0 === rM ? void 0 : rM.zh;
          if (void 0 === iM) return !1;
          const OM = new Set;
          for (; void 0 !== iM && !OM.has(iM);) {
            var SM;
            OM.add(iM);
            const rM = MM.hU.getState(iM, "smoothToServerPos"),
              jM = Array.isArray(rM) ? null : null === rM || void 0 === rM ? void 0 : rM.serverPosition;
            if (jM) {
              const rM = MM.hU.XE(iM);
              if (Math.abs(rM[0] - jM[0]) > 10 || Math.abs(rM[1] - jM[1]) > 10 || Math.abs(rM[2] - jM[2]) > 10) return !0
            }
            iM = null === (SM = MM.hU.ziM(iM)) || void 0 === SM ? void 0 : SM.zh
          }
          return !1
        }(MM) && function(MM, rM, iM, OM) {
          const SM = jM.f.HL;
          for (let jM = 0; jM < MM.length; jM++) {
            const aM = MM[jM];
            if (!(0, zr.j)(rM, iM, OM, aM[0] * SM, aM[1] * SM, aM[2] * SM)) return !1
          }
          return !0
        }(rM.qJ.OL, LM, mM, HM), JM = null === PM || Math.abs(LM - PM[0]) > 8 || Math.abs(mM - PM[1]) > 8 || Math.abs(HM - PM[2]) > 8, dM = !nM || JM || performance.now() - aM >= 1e4;
        nM = hM, hM && dM && (SM = zM, aM = performance.now(), PM = [LM, mM, HM], (0, OM.sendColyMessage)(QM.xg, {
          ya: zM
        }))
      };
      return MM.on("bL", zM), () => {
        MM.off("bL", zM)
      }
    }
    var mr = iM(40053),
      Hr = iM(1591),
      hr = iM(3057),
      Jr = iM(1911),
      dr = iM(3241),
      yr = iM(5184);
    class lr {
      constructor(MM, rM, iM) {
        this.Cm = MM, this.gameNameWithVariation = rM, this.connectionResume = iM, this.stopChunkReports = () => {}, this.replayResume = null
      }
      clearUiRequestsAndQTEs() {
        yr.d.reset(), (0, Pr.b)()
      }
      startChunkReports() {
        const MM = function(MM) {
            let rM = null,
              iM = -1 / 0,
              SM = null;
            const jM = () => {
                SM = null;
                const jM = Math.ceil(MM.jW[0]),
                  aM = Math.ceil(MM.jW[1]);
                rM && rM[0] === jM && rM[1] === aM || (rM = [jM, aM], iM = performance.now(), (0, OM.sendColyMessage)(QM.tg, {
                  la: jM,
                  Ea: aM
                }))
              },
              aM = () => {
                null === SM && (SM = setTimeout(jM, Math.max(0, iM + 250 - performance.now())))
              };
            return jM(), MM.on("addRemoveDistanceChanged", aM), () => {
              MM.off("addRemoveDistanceChanged", aM), null !== SM && (clearTimeout(SM), SM = null)
            }
          }(this.Cm.uL),
          rM = Lr(this.Cm);
        this.stopChunkReports = () => {
          MM(), rM()
        }
      }
      restartChunkStreaming() {
        (0, ir.o)(this.Cm, (0, nM.b)().recentChunkEdits.chunksEditedSince(this.connectionResume.getDroppedAt() - mr.e)), this.startChunkReports()
      }
      register(MM) {
        const rM = this.Cm,
          iM = (0, nM.b)();
        MM.TE(QM.Pc, (MM => {
          lM.d.applyNewClientOptions(MM)
        })), MM.TE(QM.hd, (MM => {
          hr.b.onReceiveColyseusPing(MM)
        })), MM.TE(QM.ye, (MM => {
          let {
            key: rM,
            value: iM
          } = MM;
          (0, EM.setCookie)(this.gameNameWithVariation, rM, iM)
        })), MM.TE(QM.Ce, (MM => {
          yM.i.Tz("setDiscordReportKey", MM)
        })), (0, OM.onGameResetOnce)((() => {
          this.stopChunkReports()
        })), MM.TE(QM.cc, (SM => {
          const {
            Fj: jM,
            Bj: aM
          } = SM;
          if ((0, OM.setAdjustment)(aM), this.connectionResume.onInitialInfo(SM.Xj, SM.Ij), OM.offlineInputReplay.kR(SM.Kj), this.connectionResume.isResuming()) {
            console.log("Resumed the connection as eId", jM);
            try {
              null === SM.qj && (0, nM.b)().client.inventoryPrediction.dropPending(), this.stopChunkReports(), gM(rM.uL), lM.d.apply({
                shopInfo: null,
                _shopVersion: Qr.d
              });
              const iM = rM.hU.prM(rM.eD);
              iM.wr && (iM.chestClosed(), yM.i.Tz("chestToggleFromServer", !1, !0)), this.clearUiRequestsAndQTEs(), yM.i.Tz("initInfoReceived", MM)
            } finally {
              const MM = null === SM.qj ? null : {
                sync: null,
                endSeq: null
              };
              this.replayResume = MM, this.connectionResume.onResumeInitialInfo(SM.qj, (() => {
                MM.endSeq = (0, nM.b)().client.inventoryPrediction.lastActionSeq
              })), null === MM && this.restartChunkStreaming()
            }
          } else console.log("Local client is eId", jM), yM.i.Tz("sessionReplayJoinTicket", SM.Ma), Jr.b.markAdmitted(), (0, ir.q)(rM), yM.i.Tz("loadingScreenState", "loadingPage:loadingWorld"), rM.IMM = jM, rM.hU.BMM(rM.eD, rM.hU.names.entityName) && rM.hU.bZ(rM.eD, rM.hU.names.entityName), (0, nM.b)().setEntityName(rM.IMM, (0, nM.b)().getRawEntityName(rM.eD)), rM.rY[rM.IMM] = {}, rM.hU.eZ(rM.eD, rM.hU.names.entityName), yM.i.Tz("initInfoReceived", MM), this.startChunkReports(), iM.client.onServerConnectionFinalised()
        })), MM.TE(QM.he, (() => {
          this.connectionResume.isResuming() ? this.connectionResume.onResumed((() => {
            const MM = this.replayResume;
            if (this.replayResume = null, !MM) return;
            this.restartChunkStreaming();
            const {
              inventoryPrediction: iM
            } = (0, nM.b)().client, {
              sync: SM
            } = MM, jM = new Set(OM.offlineInputReplay.takeDroppedActions());
            if (SM) {
              var aM;
              const OM = null !== (aM = MM.endSeq) && void 0 !== aM ? aM : iM.lastActionSeq;
              iM.forget((MM => MM > SM.pr && MM <= OM || jM.has(MM))), ar(rM, iM, yM.i, SM.pr, SM.load)
            } else iM.dropPending(), iM.askForSnapshot()
          })) : console.warn("ResumeComplete arrived without a resume")
        })), MM.TE(QM.af, (MM => {
          let {
            er: iM,
            Rr: OM,
            pr: SM
          } = MM;
          const {
            inventoryPrediction: jM
          } = (0, nM.b)().client, aM = () => {
            rM.hU.prM(rM.eD).loadFromString(iM)
          };
          this.replayResume && (this.replayResume.sync = {
            pr: SM,
            load: aM
          }), ar(rM, jM, yM.i, SM, aM, OM)
        })), MM.TE(QM.xd, (MM => {
          let {
            type: rM,
            location1: iM,
            location2: OM,
            location3: SM,
            score: jM
          } = MM;
          (0, dr.logProgressionEvent)({
            type: rM,
            location1: iM,
            location2: OM,
            location3: SM,
            score: jM
          })
        })), MM.TE(QM.fe, (MM => {
          let {
            type: rM,
            resourceType: iM,
            amount: OM,
            category: SM,
            itemName: jM
          } = MM;
          (0, dr.logResourceEvent)({
            type: rM,
            resourceType: iM,
            amount: OM,
            category: SM,
            itemName: jM
          })
        })), MM.TE(QM.yc, (MM => {
          let {
            leaveEventType: rM,
            category: iM,
            subCategory: OM,
            value: SM
          } = MM;
          (0, dr.updateLeaveValue)({
            leaveEventType: rM,
            category: iM,
            subCategory: OM,
            value: SM
          })
        })), MM.TE(QM.Bb, (MM => {
          let {
            cat1: rM,
            cat2: iM,
            cat3: OM,
            value: SM
          } = MM;
          (0, dr.logCustomAnalyticsEvent)({
            cat1: rM,
            cat2: iM,
            cat3: OM,
            value: SM
          })
        })), MM.TE(QM.rc, (MM => {
          (0, nM.b)().client.leaveGameUnwanted({
            reason: MM,
            requiresRefresh: !1,
            canReconnect: !1,
            automaticallyReconnect: !1
          }), (0, Hr.navigatePreserveSearch)("/")
        })), MM.TE(QM.ne, (MM => {
          yM.i.Tz("serverUpdating", Date.now() + MM, !0)
        })), MM.TE(QM.Nc, nr.c), MM.TE(QM.Hc, (MM => {
          console.error(`[logErrorToConsole]: ${MM}`)
        }))
      }
    }
    var Er = iM(40059),
      Ur = iM(40073),
      Gr = iM(1073),
      Cr = iM(40065),
      er = iM(2633),
      br = iM(4019);
    class wr {
      constructor(MM, rM) {
        this.Cm = MM, this.clientApi = rM
      }
      register(MM) {
        const rM = this.Cm,
          iM = (0, nM.b)();
        MM.TE(QM.nb, (MM => {
          let {
            chatMsgId: rM,
            worldCodeLineId: iM,
            content: OM,
            chatterEId: SM,
            chatterObjectsToReplay: jM
          } = MM;
          yM.i.Tz("chat", {
            serverChatMsgId: rM,
            worldCodeLineId: iM,
            content: OM,
            chatterEId: SM,
            chatterObjectsToReplay: jM
          }, !0)
        })), MM.TE(QM.gf, (MM => {
          yM.i.Tz("TopRightHelper", MM, !0)
        })), MM.TE(QM.bf, (MM => {
          (0, Er.c)(MM)
        })), MM.TE(QM.vc, (MM => {
          let {
            category: rM,
            timeframe: iM,
            data: OM
          } = MM;
          yM.i.Tz("leaderboardResponse", {
            category: rM,
            timeframe: iM,
            data: OM
          })
        })), MM.TE(QM.Ye, (() => {
          yM.i.Tz("showShopTutorial", null, !0)
        })), MM.TE(QM.ud, (MM => {
          yM.i.Tz("progressBarUpdate", MM, !0)
        })), MM.TE(QM.ec, (MM => {
          yM.i.Tz("middleScreenBarInitiate", {
            duration: MM.QO,
            zO: MM.zO,
            horizBarRemOffset: MM.LO
          }, !0)
        })), MM.TE(QM.Jd, (() => {
          yM.i.Tz("middleScreenBarRemove", !0)
        })), MM.TE(QM.ze, (MM => {
          let {
            id: rM,
            position: iM,
            style: OM,
            hO: SM,
            dO: jM
          } = MM;
          yM.i.Tz("setDirectionArrow", {
            id: rM,
            position: iM,
            style: OM,
            text: (0, QM.u)(SM),
            dO: jM
          }, !0)
        })), MM.TE(QM.sb, (MM => {
          let {
            id: rM
          } = MM;
          yM.i.Tz("clearDirectionArrow", {
            id: rM
          }, !0)
        })), MM.TE(QM.zb, (MM => {
          (0, br.onCosmeticPackGranted)(MM)
        })), MM.TE(QM.Zc, (MM => {
          let {
            id: rM,
            bO: iM
          } = MM;
          const {
            type: SM,
            params: jM
          } = (0, Ur.e)(iM), aM = {
            ...jM
          };
          for (const OM of Ur.b) OM in aM && aM[OM] && (aM[OM] = (0, QM.u)(aM[OM]));
          yr.d.queueQTE(rM, SM, aM).getResult().then((MM => {
            "boolean" === typeof MM && (0, OM.sendColyMessage)(QM.ri, {
              qteId: rM,
              qteResponse: MM
            })
          }))
        })), MM.TE(QM.Nd, (MM => {
          yr.d.cancelQTE(MM)
        })), (0, OM.onGameResetOnce)((() => {
          yr.d.reset()
        })), MM.TE(QM.ad, (MM => {
          let {
            id: rM,
            clientParameters: iM
          } = MM;
          (0, Pr.e)(rM, iM)
        })), MM.TE(QM.Pd, (MM => {
          (0, Pr.g)(MM)
        })), MM.TE(QM.lf, (MM => {
          let {
            text: rM,
            id: iM,
            destructive: SM
          } = MM;
          (0, Pr.h)(iM, rM, SM, (MM => {
            (0, OM.sendColyMessage)(QM.Nj, {
              fa: iM,
              Ya: MM,
              Na: 5
            })
          }))
        })), MM.TE(QM.cd, (MM => {
          let {
            info: rM
          } = MM;
          yM.i.Tz("overShopInfo", rM, !0)
        })), MM.TE(QM.Rb, (MM => {
          let {
            OS: iM,
            SS: OM
          } = MM;
          this.clientApi.openShop(rM.eD, iM, OM)
        })), MM.TE(QM.Nb, (MM => {
          let {
            Di: rM,
            oi: iM,
            Yi: OM
          } = MM;
          yM.i.Tz("flyingMiddleMessage", {
            content: (0, QM.u)(rM),
            oi: iM,
            Yi: OM
          }, !0)
        })), MM.TE(QM.Cf, (MM => {
          const rM = MM === Gr.g ? null : {
            message: `Currently loaded as variation: ${MM}`,
            type: "Warning"
          };
          yM.i.Tz("showPermanentBottomMessage", rM, !0)
        })), MM.TE(QM.Ub, (MM => {
          let {
            messageType: rM,
            data: OM
          } = MM;
          (0, Cr.d)(rM) ? (0, Cr.b)(rM, OM) : ("freeCamPerms" === rM && iM.client.freeCameraController.setPerms(OM.key, OM.value), iM.client.triggerGameCallback("onReceivedMessageFromServer", rM, OM))
        })), MM.TE(QM.vb, er.h)
      }
    }
    class tr {
      constructor(MM, rM, iM, OM) {
        this.gameNameWithVariation = MM, this.Cm = iM, this.connectionResume = OM, this.stateReplicationHandler = void 0, this.stateReplicationHandler = new GM.d(rM, this.Cm)
      }
      setupStateReplicationHandlers() {
        this.stateReplicationHandler.setup(), (0, OM.onGameResetOnce)((() => {
          this.stateReplicationHandler.dispose()
        }))
      }
      YQM(MM) {
        this.stateReplicationHandler.dispose(), this.stateReplicationHandler = new GM.d(MM, this.Cm), this.stateReplicationHandler.setup()
      }
      setupOnMessageListeners(MM, rM) {
        const iM = this.Cm,
          OM = MM => {
            this.stateReplicationHandler.setUpIfQueued(MM)
          };
        new lr(iM, this.gameNameWithVariation, this.connectionResume).register(MM), new uM(iM).register(MM), new qM(iM).register(MM), new kM(iM, OM).register(MM), new XM(iM, OM).register(MM), new wr(iM, rM).register(MM), new jr(iM, OM).register(MM)
      }
    }
    window.addEventListener("beforeunload", (() => {}));
    var gr = iM(40077),
      ur = iM(40079),
      Rr = iM(673),
      pr = iM(3258);
    class Wr {
      constructor(MM, rM, iM, OM) {
        this.msgHandler = iM, this.listener = OM, this.session = void 0, this.attachedRoom = null, this.detachRoomListeners = null, this.suspended = !1, this.droppedAt = 0, this.session = new gr.e({
          reconnect: MM,
          isLive: () => OM.isLive(),
          onReconnected: MM => {
            this.resumeOnRoom(MM)
          },
          onGaveUp: (MM, rM) => {
            OM.onGaveUp(MM, rM)
          },
          freeze: rM,
          releaseSeat: rM => {
            MM(rM).then((MM => {
              MM.leave(!0)
            }), (MM => {
              console.warn("Couldn't release the held seat of a game left while reconnecting", MM)
            }))
          }
        })
      }
      onInitialInfo(MM, rM) {
        this.session.onInitialInfo(MM, rM)
      }
      isResuming() {
        return this.session.isResuming()
      }
      getDroppedAt() {
        return this.droppedAt
      }
      onResumeInitialInfo(MM, rM) {
        if (this.session.onResuming(), null === MM) {
          try {
            (0, nM.b)().client.itemDropPrediction.reset()
          } catch (iM) {
            console.error("Error dropping the item drop predictions on resuming", iM)
          }
          return OM.offlineInputReplay.discard(), void this.setSuspended(!1)
        }(0, nM.b)().client.itemDropPrediction.onResumeReplayOffered(), OM.offlineInputReplay.replayFrom(MM.Vj, rM)
      }
      onResumed(MM) {
        this.setSuspended(!1), (0, OM.resendBeacons)();
        try {
          MM()
        } catch (rM) {
          console.error("Error completing the resume", rM)
        } finally {
          this.session.onResumed()
        }
      }
      attachRoom(MM) {
        const rM = (0, Rr.h)((() => MM.connection.isOpen));
        MM.rU(rM);
        const iM = new ur.b((() => {
          this.session.canHoldSeat() && this.listener.isLive() && (console.warn("The game server went silent, reconnecting"), this.onConnectionDropped(MM, "silent"), MM.leave(!1))
        }));
        MM.onStateChange((() => {
          iM.heard()
        }));
        const OM = rM => {
          rM.persisted || MM.leave(!0)
        };
        window.addEventListener("pagehide", OM), MM.rU(((rM, iM) => {
          if (MM === this.attachedRoom && this.listener.isLive()) return (0, jM.g)(rM) && this.session.canHoldSeat() ? (console.warn(`Connection to the game server dropped with code ${rM}, reconnecting`), this.listener.onDropped(rM, iM), void this.onConnectionDropped(MM, String(rM))) : void this.listener.onRoomLeft(rM, iM)
        })), this.attachedRoom = MM, this.detachRoomListeners = () => {
          rM(), iM.dispose(), window.removeEventListener("pagehide", OM)
        }
      }
      dispose() {
        this.detachRoom(), this.session.leave(), this.setSuspended(!1)
      }
      setSuspended(MM) {
        MM !== this.suspended && (this.suspended = MM, (0, OM.setConnectionSuspended)(MM), (0, nM.b)().client.itemDropPrediction.setSuspended(MM))
      }
      detachRoom() {
        var MM;
        null === (MM = this.detachRoomListeners) || void 0 === MM || MM.call(this), this.detachRoomListeners = null, this.attachedRoom = null
      }
      onConnectionDropped(MM, rM) {
        (0, pr.reportClientError)("disconnect", "Left room", rM), this.isResuming() || (this.droppedAt = Date.now()), this.detachRoom(), OM.offlineInputReplay.onConnectionLost(), this.setSuspended(!0), this.session.onConnectionLost(MM.reconnectionToken)
      }
      resumeOnRoom(MM) {
        if (!this.listener.isLive()) return console.warn("Left the game while reconnecting, leaving the resumed room"), MM.leave(!0), void this.dispose();
        console.log("Reconnected to the game server, waiting for the game to resume"), (0, BM.p)(), OM.offlineInputReplay.onConnectionReplaced(), this.msgHandler.YQM(MM), this.listener.onReconnected(MM), this.attachRoom(MM)
      }
    }
    var sr = iM(3324),
      Dr = iM(3333),
      kr = iM(1373),
      Zr = iM(1327),
      or = iM(5052),
      fr = iM(3563),
      Yr = iM(1329),
      Nr = iM(38692),
      Ar = iM(40087),
      xr = iM(9510),
      vr = iM(40089),
      Fr = iM(1215),
      Br = iM(37437),
      Xr = iM(40094),
      Ir = iM(1818),
      Kr = iM(3070);

    function qr(MM) {
      var rM, iM;
      if ("object" !== typeof MM || null === MM) return {
        errType: typeof MM
      };
      const OM = MM;
      return {
        errType: null !== (rM = null === (iM = MM.constructor) || void 0 === iM ? void 0 : iM.name) && void 0 !== rM ? rM : "",
        errName: "string" === typeof OM.name ? OM.name : "",
        eventType: "string" === typeof OM.type ? OM.type : "",
        errStack: "string" === typeof OM.stack ? OM.stack.split("\n").slice(1).join(" | ") : ""
      }
    }

    function Tr(MM) {
      if ("undefined" !== typeof ProgressEvent && MM instanceof ProgressEvent) return !0;
      if (!(MM instanceof Error)) return !1;
      const rM = MM.code;
      return "ServerError" === MM.name && void 0 === rM || "AbortError" === MM.name || "seat reservation expired." === MM.message || "early_leave" === MM.message
    }(0, JM.o)((MM => {
      (0, pr.reportClientError)("wasm_net", MM)
    }));
    let Vr = !0;

    function cr() {
      Vr = !1
    }
    class Mi {
      constructor(MM) {
        this.gameNameWithVariation = void 0, this.lobbyName = void 0, this.colyClient = void 0, this.userContext = void 0, this.joinedAt = null, this.joinAdHold = !1, this.checkSendPath = () => {}, this.Cm = void 0, this.connectionResume = void 0, this.incomingMsgInitialisor = void 0, this.gameNameWithVariation = MM.gameNameWithVariation, this.lobbyName = MM.lobbyName, this.colyClient = MM.colyClient, this.userContext = MM.userContext
      }
      async connectToServer(MM, rM, iM) {
        lM.d.reset(), MM.rY = {
          [MM.eD]: {}
        }, MM.IMM = void 0, (0, BM.p)(), (0, nM.b)().removeAllEntityNames(), (0, nM.b)().setEntityName(MM.eD, this.userContext.getPlayerName()), (0, kr.p)({
          lobbyName: this.lobbyName
        }), console.log("Waiting for clientConnection passed promise to resolve"), this.joinAdHold = (0, Ir.e)(), console.log("joining server with game", this.gameNameWithVariation, "lobbyName", this.lobbyName);
        const aM = performance.now();
        iM.aborted || (0, Zr.s)("wasm_core_ready", aM);
        const PM = (0, vr.h)(this.userContext, (() => {
          const {
            roomName: OM,
            joinOptions: SM
          } = (0, UM.f)(this.userContext, this.gameNameWithVariation, this.lobbyName, rM, (MM => fr.e.isUsingCustomGameTexturePack(MM)));
          return SM.joinAdHold = this.joinAdHold, SM.renderBackend = (0, Kr.b)(MM.CL), (0, Ar.g)((() => this.colyClient.joinOrCreateUntil(iM, OM, SM)), iM)
        }));
        return yM.i.Tz("loadingScreenState", "loadingPage:joiningLobby"), await PM.then((rM => {
          if (this.joinedAt = performance.now(), (0, Zr.s)("wasm_joined", this.joinedAt), this.Cm = MM, this.joinAdHold) {
            const MM = (0, Ir.o)((() => {
              rM.send(SM.g), (0, Zr.l)(), Jr.b.markJoinAdEnded()
            }));
            rM.rU(MM), (0, OM.onGameResetOnce)(MM)
          }
          const iM = new dM(rM);
          this.connectionResume = new Wr((MM => this.colyClient.reconnect(MM)), (rM => {
            MM.OW(rM)
          }), iM, {
            isLive: () => (0, nM.b)().client.getMsgHandler() === iM,
            onDropped: (MM, rM) => {
              (0, Dr.f)(MM) || this.logUnrecognisedConnectionLoss(MM, void 0, {
                site: "drop",
                closeReason: null !== rM && void 0 !== rM ? rM : "",
                sinceJoined: this.sinceJoined()
              })
            },
            onRoomLeft: (MM, rM) => {
              this.onRoomLeft(MM, rM)
            },
            onReconnected: MM => {
              this.incomingMsgInitialisor.YQM(MM), this.checkSendPath = (0, Nr.f)(iM, MM, JM.s)
            },
            onGaveUp: (MM, rM) => {
              this.onResumeGaveUp(MM, rM)
            }
          }), this.connectionResume.attachRoom(rM), (0, OM.onGameResetOnce)((() => {
            this.connectionResume.dispose()
          }));
          const jM = iM.send,
            aM = iM.TE,
            PM = iM.RiM.send,
            QM = iM.RiM.TE,
            zM = iM.oQM;
          this.checkSendPath = (0, Nr.f)(iM, rM, JM.s);
          const LM = setInterval((() => {
            jM === iM.send && aM === iM.TE && PM === iM.RiM.send && QM === iM.RiM.TE && zM === iM.oQM || cr(), this.checkSendPath()
          }), 1e4);
          return (0, OM.onGameResetOnce)((() => {
            clearInterval(LM)
          })), {
            success: !0,
            successDetails: iM
          }
        })).catch((rM => {
          if (iM.aborted && rM === (0, Fr.f)(iM)) return {
            success: !1,
            failDetails: {
              reason: "Left the game while it loaded",
              requiresRefresh: !1,
              canReconnect: !1
            }
          };
          if (rM instanceof Br.i) return console.warn("Seat request timed out", this.lobbyName, this.gameNameWithVariation), {
            success: !1,
            failDetails: {
              reason: rM.message,
              requiresRefresh: !1,
              canReconnect: !1,
              gameServerUnreachable: "timedOut",
              joinFailure: (0, Xr.e)(rM, rM.leg)
            }
          };
          MM.GJ(`Failed to connect to bloxd room, check your internet connection. lobbyName: ${this.lobbyName}, gameNameWithVariation: ${this.gameNameWithVariation} code: ${rM.code}\n`, rM);
          const OM = rM.code;
          return OM === jM.d.serverUpdating.code ? (this.goToUpdateWaiting(), {
            success: !1,
            failDetails: {
              reason: jM.d.serverUpdating.text,
              requiresRefresh: !1,
              canReconnect: !0,
              goesToUpdateWaiting: !0
            }
          }) : {
            success: !1,
            failDetails: {
              ...this.onConnectionToServerLost(OM, rM.message, {
                site: "join",
                sinceJoinStart: (0, Dr.c)(performance.now() - aM),
                ...qr(rM)
              }, Tr(rM)),
              rematch: (0, Ar.e)(rM),
              gameRefused: (0, xr.e)(rM),
              joinFailure: (0, Xr.e)(rM, this.colyClient.legReached())
            }
          }
        }))
      }
      setupServerListeners(MM, rM, iM) {
        yM.i.Tz("loadingScreenState", "loadingPage:loadingPlayerInfo"), this.incomingMsgInitialisor = new tr(this.gameNameWithVariation, rM.RiM, MM, this.connectionResume), this.incomingMsgInitialisor.setupStateReplicationHandlers();
        const SM = rM.FQM();
        this.incomingMsgInitialisor.setupOnMessageListeners(SM, iM), (0, OM.onConnectionToServerReady)(SM, rM), this.joinAdHold && Jr.b.markAdmissionAwaited(), SM.finishRegistration()
      }
      dispose() {
        this.connectionResume.dispose()
      }
      onResumeGaveUp(MM, rM) {
        (0, Yr.CJ)(new Error("Reconnect failed"), {
          ...(0, sr.i)(rM),
          game: this.gameNameWithVariation
        }), (0, pr.reportClientError)("disconnect", "Reconnect failed", rM.reason), (0, nM.b)().client.leaveGameUnwanted({
          reason: {
            translationKey: "general:lostConnection"
          },
          canReconnect: !MM,
          canPlayAgain: MM,
          requiresRefresh: !1,
          automaticallyReconnect: !1
        }), (0, Hr.navigatePreserveSearch)("/")
      }
      sinceJoined() {
        return null === this.joinedAt ? "" : (0, Dr.c)(performance.now() - this.joinedAt)
      }
      onRoomLeft(MM, rM) {
        var iM;
        if (MM === jM.d.gameOrPluginKick.code) return;
        if (console.log(`Left room with code ${MM}`), MM === jM.d.serverUpdating.code) return (0, pr.reportClientError)("disconnect", "Left room", "serverUpdating"), (0, nM.b)().client.leaveGame(this.getUpdateWaitingUrl()), void this.goToUpdateWaiting();
        this.Cm.GJ(`Kicked from server with code ${MM}`, new Error);
        const OM = Object.keys(jM.d).find((rM => jM.d[rM].code === MM));
        (0, pr.reportClientError)("disconnect", "Left room", null !== OM && void 0 !== OM ? OM : String(MM));
        const SM = this.onConnectionToServerLost(MM, void 0, {
          site: "leave",
          closeReason: null !== rM && void 0 !== rM ? rM : "",
          sinceJoined: this.sinceJoined()
        });
        (0, nM.b)().client.leaveGameUnwanted({
          reason: `You have disconnected from the server.\n${SM.reason}`,
          canReconnect: SM.canReconnect,
          requiresRefresh: SM.requiresRefresh,
          automaticallyReconnect: null !== (iM = SM.automaticallyReconnect) && void 0 !== iM && iM
        }), (0, Hr.navigatePreserveSearch)("/")
      }
      getUpdateWaitingUrl() {
        return (0, or.G)(this.gameNameWithVariation, this.lobbyName)
      }
      goToUpdateWaiting() {
        (0, Hr.navigatePreserveSearch)(this.getUpdateWaitingUrl())
      }
      onConnectionToServerLost(MM, rM, iM) {
        var OM;
        let SM = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (null !== (OM = rM) && void 0 !== OM && OM.endsWith(jM.k) && (this.userContext.invalidateTrafficCode(), rM = rM.replace(jM.k, "")), MM === jM.d.outdatedVersion.code) return console.error("Outdated client with version ", aM.c, ", refreshing page"), (0, EM.reloadBloxd)(), {
          reason: "Outdated client",
          requiresRefresh: !0,
          canReconnect: !1
        };
        if (MM === jM.d.loadRecaptchaError.code) return console.error("Load recaptcha error, refreshing page"), (0, EM.reloadBloxd)(), {
          reason: "Failed to load recaptcha",
          requiresRefresh: !0,
          canReconnect: !1
        };
        for (const aM in jM.d) {
          const {
            code: iM,
            text: OM,
            canReconnect: SM
          } = jM.d[aM];
          if (iM === MM) {
            console.log("matched known error", MM, "leaving game");
            return {
              reason: "" !== OM ? OM : rM || `Code: ${MM}`,
              requiresRefresh: !1,
              canReconnect: SM,
              automaticallyReconnect: iM === jM.d.customGameUpdated.code || iM === jM.d.duplicateLobbyNameError.code
            }
          }
        }
        return console.log("Didn't match known error, leaving game"), (0, Dr.d)(MM) || SM ? console.warn("Connection lost", MM, rM) : this.logUnrecognisedConnectionLoss(MM, rM, iM), {
          reason: `Either your internet isn't working or this is a bug.\nCode: ${MM}`,
          requiresRefresh: !1,
          canReconnect: !1,
          gameServerUnreachable: SM ? "failed" : void 0
        }
      }
      logUnrecognisedConnectionLoss(MM, rM, iM) {
        (0, Yr.CJ)(new Error("Unrecognised connection loss"), {
          code: String(MM),
          cause: null !== rM && void 0 !== rM ? rM : "",
          ...iM,
          game: this.gameNameWithVariation,
          ...(0, Dr.h)()
        })
      }
    }
  },
  40007: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => Ki,
      f: () => rO
    });
    var OM, SM, jM, aM, PM, nM, QM, zM, LM, mM, HM, hM, JM, dM, yM, lM, EM, UM, GM, CM, eM, bM, wM, tM, gM, uM, RM, pM, WM, sM, DM, kM, ZM, oM, fM, YM, NM, AM, xM, vM, FM, BM, XM, IM, KM, qM, TM, VM, cM, Mr, rr, ir, Or, Sr, jr, ar, Pr, nr, Qr, zr, Lr, mr, Hr, hr, Jr, dr, yr, lr, Er, Ur, Gr, Cr, er, br, wr, tr, gr, ur, Rr, pr, Wr, sr, Dr, kr, Zr, or, fr, Yr, Nr, Ar, xr, vr, Fr, Br, Xr, Ir, Kr, qr, Tr, Vr = iM(22),
      cr = iM(38104),
      Mi = iM(40016),
      ri = iM(40024),
      ii = iM(9726),
      Oi = iM(620),
      Si = iM(613),
      ji = iM(37758);
    let ai = (OM = (0, ii.type)("number"), SM = (0, ii.type)("number"), jM = (0, ii.type)("number"), aM = (0, ii.type)("number"), PM = (0, ii.type)("number"), nM = (0, ii.type)("number"), QM = (0, ii.type)("string"), zM = class extends ii.Schema {
        constructor() {
          super(...arguments), (0, Mi.d)(this, "id", LM, this), (0, Mi.d)(this, "amount", mM, this), (0, Mi.d)(this, "x", HM, this), (0, Mi.d)(this, "y", hM, this), (0, Mi.d)(this, "z", JM, this), (0, Mi.d)(this, "size", dM, this), (0, Mi.d)(this, "attributes", yM, this)
        }
      }, LM = (0, ri.e)(zM.prototype, "id", [OM], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), mM = (0, ri.e)(zM.prototype, "amount", [SM], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), HM = (0, ri.e)(zM.prototype, "x", [jM], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), hM = (0, ri.e)(zM.prototype, "y", [aM], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), JM = (0, ri.e)(zM.prototype, "z", [PM], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), dM = (0, ri.e)(zM.prototype, "size", [nM], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 1
        }
      }), yM = (0, ri.e)(zM.prototype, "attributes", [QM], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "{}"
        }
      }), zM),
      Pi = (lM = (0, ii.type)("string"), EM = (0, ii.type)("string"), UM = class extends ii.Schema {
        constructor() {
          super(...arguments), (0, Mi.d)(this, "itemName", GM, this), (0, Mi.d)(this, "enchantmentTier", CM, this)
        }
      }, GM = (0, ri.e)(UM.prototype, "itemName", [lM], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), CM = (0, ri.e)(UM.prototype, "enchantmentTier", [EM], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), UM),
      ni = (eM = (0, ii.type)("string"), bM = (0, ii.type)("string"), wM = (0, ii.type)("number"), tM = (0, ii.type)("number"), gM = (0, ii.type)("number"), uM = (0, ii.type)("float32"), RM = (0, ii.type)("float32"), pM = (0, ii.type)("float32"), WM = (0, ii.type)("string"), sM = (0, ii.type)(["number"]), DM = (0, ii.type)("boolean"), kM = class extends ii.Schema {
        constructor() {
          super(...arguments), (0, Mi.d)(this, "type", ZM, this), (0, Mi.d)(this, "name", oM, this), (0, Mi.d)(this, "x", fM, this), (0, Mi.d)(this, "y", YM, this), (0, Mi.d)(this, "z", NM, this), (0, Mi.d)(this, "xRotation", AM, this), (0, Mi.d)(this, "yRotation", xM, this), (0, Mi.d)(this, "zRotation", vM, this), (0, Mi.d)(this, "followingEId", FM, this), (0, Mi.d)(this, "followingOffset", BM, this), (0, Mi.d)(this, "shouldMatchFollowingEntityRotation", XM, this)
        }
      }, ZM = (0, ri.e)(kM.prototype, "type", [eM], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), oM = (0, ri.e)(kM.prototype, "name", [bM], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return ""
        }
      }), fM = (0, ri.e)(kM.prototype, "x", [wM], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), YM = (0, ri.e)(kM.prototype, "y", [tM], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), NM = (0, ri.e)(kM.prototype, "z", [gM], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), AM = (0, ri.e)(kM.prototype, "xRotation", [uM], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), xM = (0, ri.e)(kM.prototype, "yRotation", [RM], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), vM = (0, ri.e)(kM.prototype, "zRotation", [pM], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), FM = (0, ri.e)(kM.prototype, "followingEId", [WM], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), BM = (0, ri.e)(kM.prototype, "followingOffset", [sM], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new ii.ArraySchema(0, 0, 0)
        }
      }), XM = (0, ri.e)(kM.prototype, "shouldMatchFollowingEntityRotation", [DM], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !0
        }
      }), kM),
      Qi = (IM = (0, ii.type)("float32"), KM = (0, ii.type)("float32"), qM = (0, ii.type)("boolean"), TM = (0, ii.type)("boolean"), VM = (0, ii.type)("float32"), cM = (0, ii.type)("boolean"), Mr = (0, ii.type)("string"), rr = (0, ii.type)("string"), ir = (0, ii.type)("string"), Or = (0, ii.type)("string"), Sr = (0, ii.type)(["number"]), jr = (0, ii.type)("number"), ar = (0, ii.type)({
        map: Pi
      }), Pr = class extends ni {
        constructor() {
          super(...arguments), (0, Mi.d)(this, "scale", nr, this), (0, Mi.d)(this, "speed", Qr, this), (0, Mi.d)(this, "jumping", zr, this), (0, Mi.d)(this, "crouching", Lr, this), (0, Mi.d)(this, "cameraPitch", mr, this), (0, Mi.d)(this, "armSwinging", Hr, this), (0, Mi.d)(this, "heldItemName", hr, this), (0, Mi.d)(this, "heldItemEnchantmentTier", Jr, this), (0, Mi.d)(this, "pose", dr, this), (0, Mi.d)(this, "ridingVehicleEId", yr, this), (0, Mi.d)(this, "meshOffset", lr, this), (0, Mi.d)(this, "baseRenderHeading", Er, this), (0, Mi.d)(this, "armour", Ur, this)
        }
      }, nr = (0, ri.e)(Pr.prototype, "scale", [IM], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 1
        }
      }), Qr = (0, ri.e)(Pr.prototype, "speed", [KM], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), zr = (0, ri.e)(Pr.prototype, "jumping", [qM], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), Lr = (0, ri.e)(Pr.prototype, "crouching", [TM], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), mr = (0, ri.e)(Pr.prototype, "cameraPitch", [VM], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Hr = (0, ri.e)(Pr.prototype, "armSwinging", [cM], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), hr = (0, ri.e)(Pr.prototype, "heldItemName", [Mr], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), Jr = (0, ri.e)(Pr.prototype, "heldItemEnchantmentTier", [rr], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), dr = (0, ri.e)(Pr.prototype, "pose", [ir], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "standing"
        }
      }), yr = (0, ri.e)(Pr.prototype, "ridingVehicleEId", [Or], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), lr = (0, ri.e)(Pr.prototype, "meshOffset", [Sr], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new ii.ArraySchema(0, 0, 0)
        }
      }), Er = (0, ri.e)(Pr.prototype, "baseRenderHeading", [jr], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Ur = (0, ri.e)(Pr.prototype, "armour", [ar], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new ii.MapSchema
        }
      }), Pr),
      zi = (Gr = (0, ii.type)("string"), Cr = (0, ii.type)("string"), er = (0, ii.type)("string"), br = (0, ii.type)("uint8"), wr = class extends Qi {
        constructor() {
          super(...arguments), (0, Mi.d)(this, "variation", tr, this), (0, Mi.d)(this, "ownerDbId", gr, this), (0, Mi.d)(this, "metaInfo", ur, this), (0, Mi.d)(this, "aiState", Rr, this)
        }
      }, tr = (0, ri.e)(wr.prototype, "variation", [Gr], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "default"
        }
      }), gr = (0, ri.e)(wr.prototype, "ownerDbId", [Cr], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), ur = (0, ri.e)(wr.prototype, "metaInfo", [er], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return ""
        }
      }), Rr = (0, ri.e)(wr.prototype, "aiState", [br], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), wr);
    pr = (0, ii.type)("string"), Wr = (0, ii.type)("string"), sr = (0, ii.type)("string"), Dr = (0, ii.type)("string"), kr = class extends ni {
      constructor() {
        super(...arguments), (0, Mi.d)(this, "meshKind", Zr, this), (0, Mi.d)(this, "meshOpts", or, this), (0, Mi.d)(this, "pose", fr, this), (0, Mi.d)(this, "leaderboardTop", Yr, this)
      }
    }, Zr = (0, ri.e)(kr.prototype, "meshKind", [pr], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), or = (0, ri.e)(kr.prototype, "meshOpts", [Wr], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), fr = (0, ri.e)(kr.prototype, "pose", [sr], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), Yr = (0, ri.e)(kr.prototype, "leaderboardTop", [Dr], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    });

    function Li(MM) {
      return Object.keys(ii.Metadata.getFields(MM))
    }
    const mi = Li(zi);
    for (const iO of Oi.u)
      if (!mi.includes(iO)) throw new Error(`Mob Schema is missing a networked property: "${iO}"`);
    const Hi = Li((Nr = (0, ii.type)("string"), Ar = (0, ii.type)("float32"), xr = (0, ii.type)("float32"), vr = (0, ii.type)("float32"), Fr = (0, ii.type)("float32"), Br = class extends ni {
      constructor() {
        super(...arguments), (0, Mi.d)(this, "soundName", Xr, this), (0, Mi.d)(this, "volume", Ir, this), (0, Mi.d)(this, "refDistance", Kr, this), (0, Mi.d)(this, "maxHearDist", qr, this), (0, Mi.d)(this, "rate", Tr, this)
      }
    }, Xr = (0, ri.e)(Br.prototype, "soundName", [Nr], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return ""
      }
    }), Ir = (0, ri.e)(Br.prototype, "volume", [Ar], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return 1
      }
    }), Kr = (0, ri.e)(Br.prototype, "refDistance", [xr], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return ji.l
      }
    }), qr = (0, ri.e)(Br.prototype, "maxHearDist", [vr], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return ji.e
      }
    }), Tr = (0, ri.e)(Br.prototype, "rate", [Fr], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return 1
      }
    }), Br));
    for (const iO of Si.g)
      if (!Hi.includes(iO)) throw new Error(`AudioEntity Schema is missing a replicated property: "${iO}"`);
    var Ji = iM(39435),
      di = iM(1242),
      yi = iM(625),
      li = iM(39210),
      Ei = iM(4577),
      Ui = iM(332),
      Gi = iM(38167),
      Ci = iM(39083),
      ei = iM(2362),
      bi = iM(38130),
      wi = iM(39464),
      ti = iM(38558),
      gi = iM(347),
      ui = iM.n(gi),
      Ri = iM(38917),
      Wi = iM(38019),
      si = iM(39064),
      Di = iM(39105);
    class ki {
      constructor(MM, rM) {
        this.bloxd = MM, this.eId = rM, this.Cm = void 0, this.colyseusEntity = void 0, this.canSeeSub = void 0, this.canAttackSub = void 0, this.interactableSub = void 0, this.overlayColourSub = void 0, this.opacitySub = void 0, this.zIndexSub = void 0, this.multilineTextBoxSub = void 0, this.previousHidingMeshManagerState = void 0, this.meshKind = void 0, this.meshOpts = void 0, this.leaderboardTop = void 0, this.meshRebuildQueued = !1, this.dh = !1, this.Cm = MM.Cm
      }
      initClient(MM) {
        var rM, iM, OM;
        this.colyseusEntity = MM, this.meshKind = MM.meshKind, this.meshOpts = MM.meshOpts, this.leaderboardTop = MM.leaderboardTop, this.Cm.hU.add([MM.x, MM.y, MM.z], 1, 1, null, null, !1, !1, this.eId), this.Cm.hU.eZ(this.eId, "smoothToServerPos");
        const SM = "Person" === this.meshKind;
        this.Cm.hU.eZ(this.eId, "meshRotation", {
          isServerControlled: !0,
          ...SM ? {
            defaultRotationsPerSecond: .5
          } : {},
          childrenNodeParams: SM ? [{
            nodeName: "HeadMesh",
            softTolerance: wi.l,
            hardTolerance: null
          }] : []
        }), this.updateHidingMeshMgr(), this.canSeeSub = Vr.i.subscribe(`otherEntitySettings|${this.eId}|canSee`, (MM => {
          this.updateHidingMeshMgr()
        }));
        const jM = () => {
          const MM = this.Cm.hU.GrM(this.eId);
          if (!MM) return;
          const rM = (0, ti.j)(this.eId);
          if ("number" === typeof MM.Zk) {
            var iM, OM, SM, jM;
            const aM = null === (iM = (0, ei.m)("head", null === (SM = this.getSpec()) || void 0 === SM || null === (jM = SM.opts.textures) || void 0 === jM ? void 0 : jM.head)) || void 0 === iM || null === (OM = iM.personModel) || void 0 === OM ? void 0 : OM.fullBody;
            return this.Cm.CL.Dk.setPickable(MM.Zk, rM && !aM), void(0, Wi.updatePersonAttachmentPickability)(this.Cm, this.eId, rM)
          }
          const aM = MM.mesh;
          if (aM)
            for (const PM of [aM, ...aM.getChildMeshes(!1)]) "AJ" in PM && !PM.name.startsWith("Cape|") && (PM.AJ = rM)
        };
        this.canAttackSub = Vr.i.subscribe(`otherEntitySettings|${this.eId}|canAttack`, jM), this.interactableSub = Vr.i.subscribe(`otherEntitySettings|${this.eId}|interactable`, jM), this.overlayColourSub = Vr.i.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|overlayColour`, (MM => {
          this.updateOverlayColour(MM)
        })), this.opacitySub = Vr.i.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|opacity`, (MM => {
          this.updateOpacity(MM)
        })), this.zIndexSub = Vr.i.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|zIndex`, (MM => {
          this.updateZIndex(MM)
        }));
        const aM = this.Cm.rY[this.Cm.eD][this.eId];
        this.updateOverlayColour(null !== (rM = null === aM || void 0 === aM ? void 0 : aM.overlayColour) && void 0 !== rM ? rM : null), this.updateOpacity(null !== (iM = null === aM || void 0 === aM ? void 0 : aM.opacity) && void 0 !== iM ? iM : 1), this.updateZIndex(null !== (OM = null === aM || void 0 === aM ? void 0 : aM.zIndex) && void 0 !== OM ? OM : 0), this.multilineTextBoxSub = (0, bi.r)(this.Cm, this.eId)
      }
      onChangeClient(MM, rM) {
        if ("xRotation" === MM || "yRotation" === MM || "zRotation" === MM)(0, bi.s)(this.Cm, this.eId, MM, rM);
        else if ("pose" === MM) {
          const MM = this.Cm.hU.grM(this.eId);
          MM && (MM.pose = rM || "standing")
        } else "meshKind" === MM || "meshOpts" === MM ? (this[MM] = rM, this.queueMeshRebuild()) : "name" === MM && "" !== rM ? this.updateHidingMeshMgr() : "leaderboardTop" === MM && (this.leaderboardTop = rM, Vr.i.Tz(`leaderboardTop|${this.eId}`, rM))
      }
      disposeClient() {
        this.dh = !0, this.Cm.hU.deleteEntity(this.eId), Vr.i.unsubscribe(this.canSeeSub), Vr.i.unsubscribe(this.canAttackSub), Vr.i.unsubscribe(this.interactableSub), Vr.i.unsubscribe(this.overlayColourSub), Vr.i.unsubscribe(this.opacitySub), Vr.i.unsubscribe(this.zIndexSub), Vr.i.unsubscribe(this.multilineTextBoxSub)
      }
      getCurrentHidingMeshMgrState() {
        var MM, rM;
        return {
          canSee: null !== (MM = null === (rM = this.Cm.rY[this.Cm.eD][this.eId]) || void 0 === rM ? void 0 : rM.canSee) && void 0 !== MM && MM,
          name: this.colyseusEntity.name,
          meshKind: this.meshKind,
          meshOpts: this.meshOpts
        }
      }
      updateHidingMeshMgr() {
        var MM, rM, iM;
        const {
          Cm: OM
        } = this, {
          hU: SM
        } = OM, jM = this.getCurrentHidingMeshMgrState();
        if ((0, Ui.Td)(this.previousHidingMeshManagerState, jM)) return;
        if (this.previousHidingMeshManagerState = jM, SM.bZ(this.eId, "hidingMeshManager"), null === (MM = OM.rY[OM.eD][this.eId]) || void 0 === MM || !MM.canSee) return;
        const aM = this.getSpec();
        if (!aM) return;
        const {
          type: PM,
          opts: nM
        } = aM;
        "Person" === PM && (nM.textures = (0, ei.p)(nM.textures)), nM.eId = this.eId, SM.eZ(this.eId, "hidingMeshManager", {
          addMeshComponent: () => {
            var MM, rM, iM;
            "Leaderboard" === PM && (nM.leaderboardTop = this.leaderboardTop);
            const jM = this.bloxd.client.meshCreator.getEntityMesh(PM, nM, (MM => {
              var rM, iM;
              if ("number" === typeof MM) {
                var SM, jM, aM;
                const rM = OM.CL.Dk;
                rM.setEntityId(MM, this.eId);
                const iM = "Person" === PM && (null === (SM = (0, ei.m)("head", null === (aM = nM.textures) || void 0 === aM ? void 0 : aM.head)) || void 0 === SM || null === (jM = SM.personModel) || void 0 === jM ? void 0 : jM.fullBody);
                return void rM.setPickable(MM, (0, ti.j)(this.eId) && !iM)
              }
              const QM = MM;
              for (const PM of [QM, ...QM.getChildMeshes(!1)]) void 0 === PM.AJ || PM.name.startsWith("Cape|") || (PM.AJ = (0, ti.j)(this.eId), PM.metadata ??= new OM.CL.xJ, PM.metadata.eId = this.eId);
              this.updateOpacity(null !== (rM = null === (iM = OM.rY[OM.eD][this.eId]) || void 0 === iM ? void 0 : iM.opacity) && void 0 !== rM ? rM : 1)
            }));
            if (!jM) return;
            const {
              Zk: aM,
              mesh: QM,
              meshOffset: zM,
              nameYOffset: LM,
              modelLoaded: mM
            } = jM;
            null === mM || void 0 === mM || mM.then((() => {
              var MM;
              (null === (MM = SM.GrM(this.eId)) || void 0 === MM ? void 0 : MM.mesh) === QM && (this.previousHidingMeshManagerState = null, this.updateHidingMeshMgr())
            }));
            const HM = null === aM ? null : OM.CL.Dk.lD(aM, 0);
            if (SM.eZ(this.eId, SM.names.mesh, {
                Zk: aM,
                kiM: HM,
                mesh: QM,
                QPM: !1,
                oiM: "Leaderboard" !== PM,
                offset: zM.slice(),
                nPM: "ParticleEmitter" === PM && nM.followTargetMeshOffset ? MM => {
                  var rM;
                  ui().copy(MM, zM);
                  const iM = null === (rM = SM.ziM(this.eId)) || void 0 === rM ? void 0 : rM.zh,
                    OM = void 0 === iM ? null : SM.grM(iM);
                  if (OM) {
                    var jM, aM;
                    const rM = this.bloxd.getEntityHeading(null !== (jM = OM.ridingVehicleEId) && void 0 !== jM ? jM : iM, !0),
                      SM = Math.sin(rM),
                      PM = Math.cos(rM);
                    MM[0] += OM.meshOffset[0] * PM + OM.meshOffset[2] * SM, MM[1] += OM.meshOffset[1], MM[2] += OM.meshOffset[2] * PM - OM.meshOffset[0] * SM;
                    const nM = null !== (aM = OM.ridingVehicleEId) && void 0 !== aM ? aM : null;
                    null !== nM && (0, Di.b)(this.Cm, nM, MM)
                  }
                } : null
              }), "Person" === PM) {
              var hM, JM, dM, yM;
              SM.eZ(this.eId, SM.names.meshAttachments, {
                personFullBody: null !== (hM = null === (JM = (0, ei.m)("head", null === (yM = nM.textures) || void 0 === yM ? void 0 : yM.head)) || void 0 === JM || null === (dM = JM.personModel) || void 0 === dM ? void 0 : dM.fullBody) && void 0 !== hM && hM
              });
              for (const MM of di.u) {
                var lM, EM, UM;
                const rM = null === (lM = nM.textures) || void 0 === lM ? void 0 : lM[MM];
                rM && null !== (EM = (0, ei.m)(MM, rM)) && void 0 !== EM && null !== (UM = EM.attachments) && void 0 !== UM && UM.length && Ci.b.Player.meshApi.updatePlayerCosmetic(this.eId, aM, MM, rM)
              }
              SM.eZ(this.eId, SM.names.moveState), SM.eZ(this.eId, "updateWalkingState", {
                Zk: aM,
                kiM: HM,
                walkingLegSwingDuration: wi.s
              }), SM.eZ(this.eId, "humanoidMesh", {
                Zk: aM,
                kiM: HM,
                heldItemPositionParams: {},
                maxWalkingAngleOverride: null
              }), SM.eZ(this.eId, "animator", {
                Zk: aM,
                kiM: HM,
                modelLifeformType: "Player"
              }), si.i.hasAnimation("Person") && SM.eZ(this.eId, "rigAnimation", {
                target: "Person",
                Zk: aM
              }), SM.grM(this.eId).pose = this.colyseusEntity.pose || "standing"
            } else if ("BloxdBlock" === PM && null !== aM) {
              SM.eZ(this.eId, "animator", {
                Zk: aM,
                kiM: HM,
                modelLifeformType: null
              });
              const MM = (0, li.w)(nM.blockName);
              null !== MM && SM.eZ(this.eId, "rigAnimation", {
                target: MM,
                Zk: aM
              })
            }
            SM.DPM(this.eId, "entityName", {
              name: this.colyseusEntity.name,
              nameYOffset: LM
            }), this.bloxd.setEntityName(this.eId, this.colyseusEntity.name), !0 === nM.autoRotate && (SM.bZ(this.eId, "meshRotation"), SM.eZ(this.eId, "autoRotate"));
            const {
              lineToEId: GM
            } = nM;
            (0, yi.J)(GM) || SM.eZ(this.eId, "lineToEntity", {
              lineToEId: GM
            });
            const CM = OM.rY[OM.eD][this.eId];
            this.updateOverlayColour(null !== (MM = null === CM || void 0 === CM ? void 0 : CM.overlayColour) && void 0 !== MM ? MM : null), this.updateOpacity(null !== (rM = null === CM || void 0 === CM ? void 0 : CM.opacity) && void 0 !== rM ? rM : 1), this.updateZIndex(null !== (iM = null === CM || void 0 === CM ? void 0 : CM.zIndex) && void 0 !== iM ? iM : 0)
          },
          removeMeshComponent: () => {
            "Person" !== PM && "BloxdBlock" !== PM || SM.bZ(this.eId, "rigAnimation"), SM.bZ(this.eId, SM.names.mesh), SM.BMM(this.eId, SM.names.meshAttachments) && SM.bZ(this.eId, SM.names.meshAttachments), SM.bZ(this.eId, "entityName"), SM.bZ(this.eId, "autoRotate"), SM.bZ(this.eId, "lineToEntity"), "Person" === PM ? (SM.bZ(this.eId, SM.names.moveState), SM.bZ(this.eId, "updateWalkingState"), SM.bZ(this.eId, "humanoidMesh"), SM.bZ(this.eId, "animator")) : "BloxdBlock" === PM && SM.bZ(this.eId, "animator")
          },
          hideDist: null !== (rM = nM.hideDist) && void 0 !== rM ? rM : 80,
          movingHideDist: null !== (iM = nM.hideDist) && void 0 !== iM ? iM : 120,
          displayOutsideLoadedChunk: nM.hideDist > 100,
          immediatelyUpdate: !0,
          az: "BloxdBlock" === PM ? nM.blockName : PM
        })
      }
      queueMeshRebuild() {
        this.meshRebuildQueued || (this.meshRebuildQueued = !0, queueMicrotask((() => {
          this.meshRebuildQueued = !1, this.dh || this.updateHidingMeshMgr()
        })))
      }
      getSpec() {
        return (0, Ei.g)({
          meshKind: this.meshKind,
          meshOpts: this.meshOpts
        })
      }
      updateOverlayColour(MM) {
        var rM, iM;
        if ("Person" !== this.meshKind) return;
        let OM = new Gi.d(0, 0, 0, 0);
        if (null !== MM) {
          const rM = (0, Ui.X)(MM);
          OM = new Gi.d(rM[0] / 255, rM[1] / 255, rM[2] / 255, .5)
        }
        const SM = null !== (rM = null === (iM = this.Cm.hU.GrM(this.eId)) || void 0 === iM ? void 0 : iM.Zk) && void 0 !== rM ? rM : null;
        null !== SM && Ci.b.Player.meshApi.updateMeshOverlayColour(SM, OM)
      }
      updateZIndex(MM) {
        var rM;
        if ("Person" !== this.meshKind) return;
        const iM = null === (rM = this.Cm.hU.GrM(this.eId)) || void 0 === rM ? void 0 : rM.Zk;
        "number" === typeof iM && this.Cm.CL.Dk.setRenderingGroupId(iM, MM)
      }
      updateOpacity(MM) {
        const rM = this.Cm.hU.GrM(this.eId);
        rM && ("number" !== typeof rM.Zk ? rM.mesh && "ParticleEmitter" !== this.meshKind && (0, Ri.f)(rM.mesh, MM) : Ci.b.Player.meshApi.updateMeshOpacity(rM.Zk, MM))
      }
    }
    var Zi = iM(40014);
    class oi {
      constructor(MM, rM) {
        this.eId = rM, this.Cm = void 0, this.schema = void 0, this.Cm = MM.Cm
      }
      initClient(MM) {
        this.schema = MM, this.Cm.hU.add([MM.x, MM.y, MM.z], .1, .1, null, null, !1, !1, this.eId), this.Cm.hU.eZ(this.eId, "smoothToServerPos"), Zi.e.add(this.eId, this.copyOpts())
      }
      onChangeClient(MM) {
        Si.g.includes(MM) && Zi.e.update(this.eId, this.copyOpts())
      }
      disposeClient() {
        Zi.e.remove(this.eId), this.Cm.hU.deleteEntity(this.eId)
      }
      copyOpts() {
        const {
          soundName: MM,
          volume: rM,
          refDistance: iM,
          maxHearDist: OM,
          rate: SM
        } = this.schema;
        return {
          soundName: MM,
          volume: rM,
          refDistance: iM,
          maxHearDist: OM,
          rate: SM
        }
      }
    }
    var fi = iM(4069),
      Yi = iM(37722),
      Ni = iM(6944),
      Ai = iM(38764),
      xi = iM(3063),
      vi = iM(39139),
      Fi = iM(9689),
      Bi = iM(39474),
      Xi = iM(38735),
      Ii = iM(3258);
    class Ki {
      constructor(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
          OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => performance.now();
        this.RiM = MM, this.Cm = rM, this.setupBudgetMs = iM, this.now = OM, this.createStateCallbacks = void 0, this.roomStateCallbacks = void 0, this.allItems = {}, this.detachers = new Map, this.deferredSetups = new Map, this.queuedSetups = new Map, this.promotedSetups = new Set, this.setupBudgetLeftMs = void 0, this.lastRefillMs = void 0, this.roomState = void 0, this.dh = !1, this.onFrame = () => {
          this.setUpQueuedEntities(!0)
        }, this.kE = () => {
          this.setUpQueuedEntities(this.now() - this.lastRefillMs > 100)
        }, this.setUpPromoted = () => {
          for (const MM of this.promotedSetups) {
            this.promotedSetups.delete(MM);
            const rM = this.queuedSetups.get(MM);
            rM && (this.queuedSetups.delete(MM), this.timedSetup(rM, MM))
          }
        }, this.createStateCallbacks = (0, Fi.getStateCallbacks)(MM), this.roomStateCallbacks = this.createStateCallbacks(MM.state), this.roomState = MM.state, this.setupBudgetLeftMs = iM, this.lastRefillMs = OM()
      }
      setup() {
        this.setupEntityHandlers(), this.setupItemHandlers(), this.RiM.onStateChange(this.setUpPromoted), this.Cm.on("beforeInputs", this.onFrame), this.Cm.on("bL", this.kE)
      }
      setUpQueuedEntities(MM) {
        var rM;
        if ((null === (rM = (0, xi.b)().client.getMsgHandler()) || void 0 === rM ? void 0 : rM.RiM) !== this.RiM) return this.Cm.off("beforeInputs", this.onFrame), this.Cm.off("bL", this.kE), this.queuedSetups.clear(), void this.promotedSetups.clear();
        if (MM && (this.setupBudgetLeftMs = this.setupBudgetMs, this.lastRefillMs = this.now()), this.setUpPromoted(), 0 !== this.queuedSetups.size)
          for (ui().copy(qi, this.Cm.hU.XE(this.Cm.eD)); this.setupBudgetLeftMs > 0;) {
            const MM = this.nearestQueued(qi);
            if (null === MM) return;
            this.setUpIfQueued(MM), this.setUpPromoted()
          }
      }
      nearestQueued(MM) {
        let rM = null,
          iM = 1 / 0;
        return this.queuedSetups.forEach(((OM, SM) => {
          const jM = function(MM, rM) {
            return (rM.x - MM[0]) ** 2 + (rM.y - MM[1]) ** 2 + (rM.z - MM[2]) ** 2
          }(MM, OM);
          (null === rM || jM < iM) && (rM = SM, iM = jM)
        })), rM
      }
      setUpOrQueue(MM, rM) {
        0 === this.queuedSetups.size && this.setupBudgetLeftMs > 0 || this.mustSetUpNow(MM, rM) ? this.timedSetup(MM, rM) : this.queuedSetups.set(rM, MM)
      }
      mustSetUpNow(MM, rM) {
        const iM = this.Cm.IMM;
        if (rM === iM) return !0;
        const OM = this.roomState.entities.get(iM);
        return !(!OM || OM.ridingVehicleEId !== rM && OM.followingEId !== rM) || (Ti(MM.type) === Ji.e || (0, xi.b)().getFollowingEntities(rM).length > 0)
      }
      setUpIfQueued(MM) {
        const rM = this.queuedSetups.get(MM);
        rM && (this.queuedSetups.delete(MM), this.timedSetup(rM, MM))
      }
      promoteIfQueued(MM) {
        null !== MM && this.queuedSetups.has(MM) && this.promotedSetups.add(MM)
      }
      timedSetup(MM, rM) {
        const iM = this.now();
        this.setupEntity(MM, rM), this.setupBudgetLeftMs -= this.now() - iM
      }
      setupEntityHandlers() {
        this.roomStateCallbacks.entities.PU(((MM, rM) => {
          this.Cm.IMM ? this.setUpOrQueue(MM, rM) : this.deferEntitySetupUntilInitInfo(MM, rM)
        })), this.roomStateCallbacks.entities.vW(((MM, rM) => {
          const iM = this.deferredSetups.get(rM);
          iM && (Vr.i.unsubscribe(iM), this.deferredSetups.delete(rM)), this.queuedSetups.delete(rM), this.detach(rM), (0, xi.b)().client.disposeEntity(rM)
        }))
      }
      deferEntitySetupUntilInitInfo(MM, rM) {
        const iM = Vr.i.vy("initInfoReceived", (() => {
          this.deferredSetups.delete(rM), this.setUpOrQueue(MM, rM)
        }));
        this.deferredSetups.set(rM, iM), (0, fi.onGameResetOnce)((() => {
          this.deferredSetups.get(rM) === iM && (Vr.i.unsubscribe(iM), this.deferredSetups.delete(rM)), (0, xi.b)().updatePositionAndPhysics(this.Cm.eD, {
            type: Ni.n.DEFAULT,
            tier: null
          }, !0), (0, xi.b)().takeHeldPlayerBodySize(this.Cm.eD);
          const MM = this.Cm.hU.nrM(this.Cm.eD);
          MM && (MM.movementType = Ni.l.NORMAL)
        }))
      }
      setupEntity(MM, rM) {
        const iM = rM === this.Cm.IMM;
        if (iM)(0, xi.b)().client.iK(this.Cm.eD, null, null);
        else {
          const {
            type: iM
          } = MM, OM = Ti(iM);
          if (void 0 === OM) return void
          function(MM, rM) {
            const iM = String(MM);
            if (Vi.has(iM)) return;
            Vi.add(iM);
            const OM = iM.length > 80 ? `${iM.slice(0,80)}...` : iM,
              SM = `No client handler for entity type ${JSON.stringify(OM)}, so entity ${rM} is not set up`;
            console.warn(SM), (0, Ii.reportClientError)("uncaught", SM, "unknown_entity_type")
          }(iM, rM);
          (0, xi.b)().client.iK(rM, MM, new OM((0, xi.b)(), rM, iM))
        }
        const OM = this.createStateCallbacks(MM);
        if (iM) return this.setupMapSchemaCallbacks(rM, MM, OM, "armour"), this.setupScalarField(rM, MM, OM, "scale"), this.setupScalarField(rM, MM, OM, "ridingVehicleEId"), this.setupScalarField(rM, MM, OM, "followingEId"), this.setupScalarField(rM, MM, OM, "followingOffset"), void this.setupScalarField(rM, MM, OM, "shouldMatchFollowingEntityRotation");
        for (const SM of Li(MM.constructor)) MM[SM] instanceof ii.MapSchema ? this.setupMapSchemaCallbacks(rM, MM, OM, SM) : this.setupScalarField(rM, MM, OM, SM)
      }
      setupMapSchemaCallbacks(MM, rM, iM, OM) {
        const SM = iM[OM],
          jM = new Map;
        SM.PU(((iM, SM) => {
          if (this.onEntityFieldChange(MM, rM, OM, {
              key: SM,
              value: iM
            }), !(iM instanceof ii.Schema)) return;
          const aM = this.createStateCallbacks(iM),
            PM = [];
          for (const jM of Li(iM.constructor)) PM.push(this.listenForFutureChanges(aM, jM, (() => {
            this.onEntityFieldChange(MM, rM, OM, {
              key: SM,
              value: iM
            })
          })));
          jM.set(SM, (() => {
            for (const MM of PM) MM()
          }))
        })), SM.vW(((iM, SM) => {
          var aM;
          null === (aM = jM.get(SM)) || void 0 === aM || aM(), jM.delete(SM), this.onEntityFieldChange(MM, rM, OM, {
            key: SM,
            value: null
          })
        })), this.addDetacher(MM, (() => {
          for (const MM of jM.values()) MM();
          jM.clear()
        }))
      }
      setupScalarField(MM, rM, iM, OM) {
        this.onEntityFieldChange(MM, rM, OM, rM[OM]);
        const SM = this.listenForFutureChanges(iM, OM, (iM => {
          this.onEntityFieldChange(MM, rM, OM, iM)
        }));
        this.addDetacher(MM, SM)
      }
      addDetacher(MM, rM) {
        let iM = this.detachers.get(MM);
        iM || (iM = [], this.detachers.set(MM, iM)), iM.push(rM)
      }
      detach(MM) {
        for (const iM of null !== (rM = this.detachers.get(MM)) && void 0 !== rM ? rM : []) {
          var rM;
          iM()
        }
        this.detachers.delete(MM)
      }
      listenForFutureChanges(MM, rM, iM) {
        return MM.listen(rM, iM, !1)
      }
      onEntityFieldChange(MM, rM, iM, OM) {
        switch (iM) {
          case "ridingVehicleEId": {
            this.promoteIfQueued(OM);
            const rM = this.Cm.hU.grM((0, Yi.e)(MM));
            rM && (rM.ridingVehicleEId = OM);
            break
          }
          case "armour":
            this.handleArmourChange(MM, OM);
            break;
          case "followingEId":
            this.promoteIfQueued(OM), this.handleFollowingEIdChange(MM, rM, OM);
            break;
          case "xRotation":
          case "yRotation":
          case "zRotation":
            this.handleRotationChange(MM, iM, OM);
            break;
          case "scale":
            this.handleScaleChange(MM, OM);
            break;
          case "baseRenderHeading":
            this.handleBaseRenderHeadingChange(MM, OM);
            break;
          case "followingOffset":
            this.handleFollowingOffsetChange(MM, OM);
            break;
          case "shouldMatchFollowingEntityRotation":
            this.handleShouldMatchFollowingEntityRotationChange(MM, OM);
            break;
          case "x":
          case "y":
          case "z":
            return void this.handlePositionChange(MM, iM, OM)
        }(0, xi.b)().client.updateEntityField(MM, iM, OM)
      }
      handleArmourChange(MM, rM) {
        var iM, OM;
        const {
          key: SM,
          value: jM
        } = rM;
        (0, Ci.x)(MM, SM, null !== (iM = null === jM || void 0 === jM ? void 0 : jM.itemName) && void 0 !== iM ? iM : null, null !== (OM = null === jM || void 0 === jM ? void 0 : jM.enchantmentTier) && void 0 !== OM ? OM : null)
      }
      handleFollowingEIdChange(MM, rM, iM) {
        const OM = (0, Yi.e)(MM),
          SM = OM === this.Cm.eD;
        if (this.Cm.hU.bZ(OM, this.Cm.hU.names.mG), iM) this.Cm.hU.bZ(OM, "smoothToServerPos"), this.Cm.hU.eZ(OM, this.Cm.hU.names.mG, {
          zh: (0, Yi.e)(iM),
          offset: Array.from(rM.followingOffset),
          LiM: rM.shouldMatchFollowingEntityRotation,
          JiM: !0,
          diM: (MM, OM) => {
            if (ui().copy(MM, rM.followingOffset), rM.ridingVehicleEId === iM) {
              const rM = (0, Yi.e)(iM),
                SM = (0, xi.b)().getEntityHeading(rM, OM);
              ui().Md(MM, MM, ui().ZERO, SM)
            }
          }
        });
        else if (!SM) {
          this.Cm.hU.BMM(OM, "smoothToServerPos") || this.Cm.hU.eZ(OM, "smoothToServerPos");
          const MM = this.Cm.hU.getState(OM, "smoothToServerPos"),
            rM = this.Cm.hU.jK(OM).position;
          (0, Xi.setServerPosition)(MM, rM[0], rM[1], rM[2])
        }
      }
      handleRotationChange(MM, rM, iM) {
        const OM = "xRotation" === rM ? 0 : "yRotation" === rM ? 1 : 2;
        for (const SM of (0, xi.b)().getFollowingEntities(MM)) {
          const MM = this.Cm.hU.getState(SM, "meshRotation"),
            rM = this.Cm.hU.ziM(SM);
          MM && rM.LiM && (MM.serverSetRotation[OM] = iM)
        }
      }
      handleScaleChange(MM, rM) {
        const iM = (0, Yi.e)(MM);
        if (Vr.i.Tz(`entityScale|${iM}`, rM), iM === this.Cm.eD) {
          var OM;
          (0, xi.b)().removeFromEyeHeightCache(iM);
          const MM = this.Cm.hU.nrM(this.Cm.eD),
            rM = null !== (OM = null === MM || void 0 === MM ? void 0 : MM.physicsState) && void 0 !== OM ? OM : {
              type: Ni.n.DEFAULT,
              tier: null
            };
          return void(0, xi.b)().updatePositionAndPhysics(this.Cm.eD, rM, !1)
        }
        const SM = (0, xi.b)().getLifeformType(iM);
        if (null === SM) return;
        const {
          physicsBodyWidth: jM,
          physicsBodyHeight: aM
        } = (0, Bi.g)(rM, SM);
        this.Cm.hU.niM(iM, jM, aM, jM)
      }
      handleBaseRenderHeadingChange(MM, rM) {
        const iM = this.Cm.hU.getState(MM, "meshRotation");
        iM && (iM.baseRenderRotation[1] = rM);
        for (const OM of (0, xi.b)().getFollowingEntities(MM)) {
          const MM = this.Cm.hU.getState(OM, "meshRotation"),
            iM = this.Cm.hU.ziM(OM);
          MM && iM.LiM && (MM.baseRenderRotation[1] = rM)
        }
      }
      handleFollowingOffsetChange(MM, rM) {
        const iM = this.Cm.hU.ziM((0, Yi.e)(MM));
        if (iM && iM.offset) {
          const MM = rM ? Array.from(rM) : ui().ZERO;
          iM.offset[0] = MM[0], iM.offset[1] = MM[1], iM.offset[2] = MM[2]
        }
      }
      handleShouldMatchFollowingEntityRotationChange(MM, rM) {
        const iM = this.Cm.hU.ziM((0, Yi.e)(MM));
        iM && (iM.LiM = null === rM || void 0 === rM || rM)
      }
      handlePositionChange(MM, rM, iM) {
        if (this.Cm.hU.BMM(MM, "smoothToServerPos")) {
          const OM = this.Cm.hU.getState(MM, "smoothToServerPos");
          (0, Xi.setServerPositionAxis)(OM, ci[rM], iM)
        }
      }
      setupItemHandlers() {
        this.roomStateCallbacks.items.PU(((MM, rM) => {
          this.allItems[rM] = MM, (0, Ai.k)(this.Cm, rM, [MM.x, MM.y, MM.z], MM.id, {
            amount: MM.amount,
            attributes: JSON.parse(MM.attributes),
            li: (0, cr.b)(this.Cm).cantPickUpItem(rM),
            size: MM.size,
            predictedAt: (0, xi.b)().client.itemDropPrediction.onServerItemAdded(rM)
          });
          const iM = this.createStateCallbacks(MM);
          for (const OM of Li(ai)) this.onItemFieldChange(rM, OM, MM[OM]), this.addDetacher(rM, this.listenForFutureChanges(iM, OM, (MM => {
            this.onItemFieldChange(rM, OM, MM)
          })))
        })), this.roomStateCallbacks.items.vW(((MM, rM) => {
          delete this.allItems[rM], this.detach(rM), (0, xi.b)().client.itemDropPrediction.onServerItemRemoved(rM), this.Cm.hU.BMM(rM, this.Cm.hU.names.itemState) && this.Cm.hU.deleteEntity(rM), (0, cr.b)(this.Cm).disposeEntity(rM)
        }))
      }
      onItemFieldChange(MM, rM, iM) {
        if (rM in ci) {
          if (this.Cm.hU.BMM(MM, "itemState")) {
            const OM = this.Cm.hU.getState(MM, "smoothToServerPos");
            (0, Xi.setServerPositionAxis)(OM, ci[rM], iM), (0, xi.b)().client.itemDropPrediction.onServerItemMoved(MM)
          }
          return
        }
        if (!this.Cm.hU.BMM(MM, "itemState")) return;
        const OM = this.Cm.hU.getState(MM, "itemState");
        "amount" === rM && iM !== OM.amount && (OM.creationTime = Date.now()), OM[rM] = "attributes" === rM ? JSON.parse(iM) : iM
      }
      dispose() {
        if (!this.dh) {
          this.dh = !0, this.Cm.off("beforeInputs", this.onFrame), this.Cm.off("bL", this.kE), this.queuedSetups.clear(), this.promotedSetups.clear();
          for (const MM of this.deferredSetups.values()) Vr.i.unsubscribe(MM);
          this.deferredSetups.clear(), this.Cm.hU.bZ(this.Cm.eD, this.Cm.hU.names.mG);
          for (const MM in this.allItems) this.Cm.hU.deleteEntity(MM), delete this.allItems[MM];
          for (const MM of [...this.detachers.keys()]) this.detach(MM);
          (0, cr.b)(this.Cm).clear();
          for (const MM of (0, xi.b)().client.iterateEntityIds())(0, xi.b)().client.disposeEntity(MM)
        }
      }
    }
    const qi = [0, 0, 0];

    function Ti(MM) {
      if ("string" !== typeof MM) return;
      const rM = MM.indexOf("|"),
        iM = -1 === rM ? MM : MM.slice(0, rM),
        OM = rO();
      return Object.hasOwn(OM, iM) ? OM[iM] : void 0
    }
    const Vi = new Set;
    const ci = {
      x: 0,
      y: 1,
      z: 2
    };
    let MO = null;

    function rO() {
      return null !== MO || (MO = {
        ...Object.fromEntries(Si.j.map((MM => {
          const {
            az: rM
          } = (0, vi.b)(MM);
          return [MM, rM]
        }))),
        Pebble: Ji.e,
        Snowball: Ji.e,
        "Snowball Launcher": Ji.e,
        "Reinforced Pebble": Ji.e,
        Bullet: Ji.e,
        "Reinforced Ball": Ji.e,
        Ball: Ji.e,
        Mango: Ji.e,
        "Moonstone Orb": Ji.e,
        ...Object.fromEntries(Oi.w.map((MM => [(0, Ui.Ub)(MM), Ji.e]))),
        Arrow: Ji.e,
        "Arrow of Speed": Ji.e,
        "Arrow of Poison": Ji.e,
        "Arrow of Slowness": Ji.e,
        "Arrow of Weakness": Ji.e,
        "Arrow of Knockback": Ji.e,
        "Arrow of Strength": Ji.e,
        "Arrow of Invisibility": Ji.e,
        "Arrow of Jumping": Ji.e,
        "Arrow of Defense": Ji.e,
        "Arrow of Instant Healing": Ji.e,
        "Arrow of Instant Damage": Ji.e,
        "Arrow of Regeneration": Ji.e,
        "Arrow of Haste": Ji.e,
        "Arrow of Shield": Ji.e,
        "Arrow of Double Jump": Ji.e,
        "Arrow of Heat Resistance": Ji.e,
        "Arrow of X-Ray Vision": Ji.e,
        "Arrow of Mining Yield": Ji.e,
        "Arrow of Brain Rot": Ji.e,
        "Arrow of Milk": Ji.e,
        Fireball: Ji.e,
        "Bouncy Bomb": Ji.e,
        RPG: Ji.e,
        "Obby RPG": Ji.e,
        "Super RPG": Ji.e,
        "Grenade Launcher": Ji.e,
        Iceball: Ji.e,
        Coconut: Ji.e,
        "Splash Speed Potion": Ji.e,
        "Splash Defense Potion": Ji.e,
        "Splash Strength Potion": Ji.e,
        "Splash Invisibility Potion": Ji.e,
        "Splash Jump Potion": Ji.e,
        "Splash Knockback Potion": Ji.e,
        "Splash Poison Potion": Ji.e,
        "Splash Speed Potion II": Ji.e,
        "Splash Defense Potion II": Ji.e,
        "Splash Strength Potion II": Ji.e,
        "Splash Jump Potion II": Ji.e,
        "Splash Knockback Potion II": Ji.e,
        "Splash Poison Potion II": Ji.e,
        "Splash Slowness Potion": Ji.e,
        "Splash Slowness Potion II": Ji.e,
        "Splash Weakness Potion": Ji.e,
        "Splash Weakness Potion II": Ji.e,
        "Splash Milk Potion": Ji.e,
        "Splash Instant Damage Potion": Ji.e,
        "Splash Instant Damage Potion II": Ji.e,
        "Splash Instant Healing Potion": Ji.e,
        "Splash Instant Healing Potion II": Ji.e,
        "Splash Regeneration Potion": Ji.e,
        "Splash Regeneration Potion II": Ji.e,
        "Splash Haste Potion": Ji.e,
        "Splash Haste Potion II": Ji.e,
        "Splash Shield Potion": Ji.e,
        "Splash Shield Potion II": Ji.e,
        "Splash Double Jump Potion": Ji.e,
        "Splash Heat Resistance Potion": Ji.e,
        "Splash X-Ray Vision Potion": Ji.e,
        "Splash Mining Yield Potion": Ji.e,
        "Splash Mining Yield Potion II": Ji.e,
        "Splash Brain Rot Potion": Ji.e,
        "Yellow Paintball Gun": Ji.e,
        "White Paintball Gun": Ji.e,
        "Red Paintball Gun": Ji.e,
        "Purple Paintball Gun": Ji.e,
        "Pink Paintball Gun": Ji.e,
        "Orange Paintball Gun": Ji.e,
        "Magenta Paintball Gun": Ji.e,
        "Lime Paintball Gun": Ji.e,
        "Light Gray Paintball Gun": Ji.e,
        "Light Blue Paintball Gun": Ji.e,
        "Green Paintball Gun": Ji.e,
        "Gray Paintball Gun": Ji.e,
        "Cyan Paintball Gun": Ji.e,
        "Brown Paintball Gun": Ji.e,
        "Blue Paintball Gun": Ji.e,
        "Black Paintball Gun": Ji.e,
        "Yellow Heavy Paintball Gun": Ji.e,
        "White Heavy Paintball Gun": Ji.e,
        "Red Heavy Paintball Gun": Ji.e,
        "Purple Heavy Paintball Gun": Ji.e,
        "Pink Heavy Paintball Gun": Ji.e,
        "Orange Heavy Paintball Gun": Ji.e,
        "Magenta Heavy Paintball Gun": Ji.e,
        "Lime Heavy Paintball Gun": Ji.e,
        "Light Gray Heavy Paintball Gun": Ji.e,
        "Light Blue Heavy Paintball Gun": Ji.e,
        "Green Heavy Paintball Gun": Ji.e,
        "Gray Heavy Paintball Gun": Ji.e,
        "Cyan Heavy Paintball Gun": Ji.e,
        "Brown Heavy Paintball Gun": Ji.e,
        "Blue Heavy Paintball Gun": Ji.e,
        "Black Heavy Paintball Gun": Ji.e,
        "Toxin Ball": Ji.e,
        "Splash Aura XP Potion": Ji.e,
        "Splash Aura XP Potion II": Ji.e,
        "Arrow of Aura XP": Ji.e,
        Firecracker: Ji.e,
        "Rainbow Firecracker": Ji.e,
        "White Firecracker": Ji.e,
        "Orange Firecracker": Ji.e,
        "Magenta Firecracker": Ji.e,
        "Light Blue Firecracker": Ji.e,
        "Yellow Firecracker": Ji.e,
        "Lime Firecracker": Ji.e,
        "Pink Firecracker": Ji.e,
        "Gray Firecracker": Ji.e,
        "Light Gray Firecracker": Ji.e,
        "Cyan Firecracker": Ji.e,
        "Purple Firecracker": Ji.e,
        "Blue Firecracker": Ji.e,
        "Brown Firecracker": Ji.e,
        "Green Firecracker": Ji.e,
        "Red Firecracker": Ji.e,
        "Black Firecracker": Ji.e,
        "Firecracker Pebble": Ji.e,
        "Rainbow Firecracker Pebble": Ji.e,
        "White Firecracker Pebble": Ji.e,
        "Orange Firecracker Pebble": Ji.e,
        "Magenta Firecracker Pebble": Ji.e,
        "Light Blue Firecracker Pebble": Ji.e,
        "Yellow Firecracker Pebble": Ji.e,
        "Lime Firecracker Pebble": Ji.e,
        "Pink Firecracker Pebble": Ji.e,
        "Gray Firecracker Pebble": Ji.e,
        "Light Gray Firecracker Pebble": Ji.e,
        "Cyan Firecracker Pebble": Ji.e,
        "Purple Firecracker Pebble": Ji.e,
        "Blue Firecracker Pebble": Ji.e,
        "Brown Firecracker Pebble": Ji.e,
        "Green Firecracker Pebble": Ji.e,
        "Red Firecracker Pebble": Ji.e,
        "Black Firecracker Pebble": Ji.e,
        "Blinding Pebble": Ji.e,
        Poop: Ji.e,
        "Wood Boomerang": Ji.e,
        "Stone Boomerang": Ji.e,
        "Iron Boomerang": Ji.e,
        "Gold Boomerang": Ji.e,
        "Diamond Boomerang": Ji.e,
        "Amethite Boomerang": Ji.e,
        "Magmasteel Boomerang": Ji.e,
        "Rubellite Boomerang": Ji.e,
        "Serpentite Boomerang": Ji.e,
        "Moonstone Boomerang": Ji.e,
        "67 Base Projectile": Ji.e,
        "67 Boosted Projectile": Ji.e,
        "Capitano Grenade": Ji.e,
        "Scatter Pellet": Ji.e,
        "Lucky Bomb": Ji.e,
        "Unlucky Bomb": Ji.e,
        "Swap Orb": Ji.e,
        Mesh: ki,
        AudioEntity: oi
      }), MO
    }
  },
  40053: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => jM,
      g: () => aM
    });
    var OM = iM(625),
      SM = iM(38701);
    const jM = 4e4;
    class aM {
      constructor() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now;
        this.now = MM, this.editedAt = new Map, this.lastChunkX = NaN, this.lastChunkY = NaN, this.lastChunkZ = NaN, this.lastChunkId = ""
      }
      noteEdit(MM, rM, iM) {
        const jM = (0, OM.R)(MM),
          aM = (0, OM.R)(rM),
          PM = (0, OM.R)(iM),
          nM = this.now();
        if (jM !== this.lastChunkX || aM !== this.lastChunkY || PM !== this.lastChunkZ) {
          this.lastChunkX = jM, this.lastChunkY = aM, this.lastChunkZ = PM, this.lastChunkId = (0, SM.d)(jM, aM, PM), this.editedAt.delete(this.lastChunkId), this.editedAt.set(this.lastChunkId, nM);
          for (const [MM, rM] of this.editedAt) {
            if (rM >= nM - 3e5) break;
            this.editedAt.delete(MM)
          }
        } else this.editedAt.set(this.lastChunkId, nM)
      }
      chunksEditedSince(MM) {
        const rM = [];
        for (const [iM, OM] of this.editedAt) OM >= MM && rM.push(iM);
        return rM
      }
    }
  },
  40103: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => Hr,
      h: () => xr,
      i: () => sr,
      l: () => vr
    });
    var OM = iM(4069),
      SM = iM(9366),
      jM = iM(37620),
      aM = iM(1503),
      PM = iM(37699),
      nM = iM(40014),
      QM = iM(40004),
      zM = iM(4129),
      LM = iM(38843),
      mM = iM(40110),
      HM = iM(1242),
      hM = iM(313),
      JM = iM(22),
      dM = iM(2067),
      yM = iM(83),
      lM = iM(30),
      EM = iM(2093),
      UM = iM(2e3),
      GM = iM(3315);
    class CM {
      constructor(MM) {
        this.storeForMs = MM, this.clicks = new GM.d
      }
      click() {
        this.clicks.enqueue(Date.now());
        const MM = Date.now() - this.storeForMs;
        for (; this.clicks.size > 0 && this.clicks.peek() < MM;) this.clicks.dequeue()
      }
      getNumClicksInMs(MM) {
        let rM = 0;
        return this.clicks.forEach((iM => {
          iM > Date.now() - MM && rM++
        })), rM
      }
      getMaxClickSeparationInMs(MM) {
        if (0 === this.clicks.size) return this.storeForMs;
        let rM = 0,
          iM = Date.now() - MM;
        this.clicks.forEach((OM => {
          OM < Date.now() - MM || (rM = Math.max(rM, Math.abs(OM - iM)), iM = OM)
        }));
        const OM = Math.abs(Date.now() - iM);
        return Math.max(rM, OM)
      }
    }
    class eM {
      constructor(MM) {
        this.storeForMs = MM, this.clickDownDurations = new GM.d
      }
      registerClickDownDuration(MM) {
        this.clickDownDurations.enqueue({
          dur: MM,
          atTime: Date.now()
        });
        const rM = Date.now() - this.storeForMs;
        for (; this.clickDownDurations.size > 0 && this.clickDownDurations.peek().atTime < rM;) this.clickDownDurations.dequeue()
      }
      clickDownDurationsCheck(MM) {
        if (MM > this.storeForMs) return console.error("overDuration is greater than storeForMs"), "0:0";
        let rM = 0,
          iM = 0;
        return this.clickDownDurations.forEach((OM => {
          OM.atTime > Date.now() - MM && (rM++, iM = Math.max(iM, OM.dur))
        })), `${rM}:${iM}`
      }
    }
    var bM = iM(34822),
      wM = iM(40118),
      tM = iM(19),
      gM = iM(3063),
      uM = iM(1373),
      RM = iM(2633),
      pM = iM(4826),
      WM = iM(119),
      sM = iM(39147),
      DM = iM(39372),
      kM = iM(625),
      ZM = iM(37440),
      oM = iM(10),
      fM = iM(9816),
      YM = iM(1229),
      NM = iM(181),
      AM = iM(40121),
      xM = iM(40127),
      vM = iM(40134),
      FM = iM(39184),
      BM = iM(40148),
      XM = iM(39074),
      IM = iM(3809),
      KM = iM(1717),
      qM = iM(37542),
      TM = iM(3122),
      VM = iM(37312),
      cM = iM(37316),
      Mr = iM(40140),
      rr = iM(38922);
    const ir = {
      forward: "freeCamForward",
      backward: "freeCamBackward",
      left: "freeCamLeft",
      right: "freeCamRight",
      jump: "freeCamUp",
      crouch: "freeCamDown"
    };

    function Or() {
      var MM, rM;
      return !(null === (MM = (0, gM.b)().client) || void 0 === MM || null === (rM = MM.freeCameraController) || void 0 === rM || !rM.movesFly())
    }

    function Sr(MM) {
      const rM = MM.on.bind(MM);
      MM.on = (MM, iM) => {
        EM.A.has(MM) ? rM(MM, iM) : rM(MM, (rM => {
          var OM;
          return null !== (OM = (0, gM.b)().client) && void 0 !== OM && OM.isReplayMode() ? function(MM) {
            return MM in ir
          }(MM) && Or() ? iM(rM) : void 0 : iM(rM)
        }))
      }
    }
    const jr = 5e3,
      ar = 1;
    let Pr, nr = ar,
      Qr = 0;
    const zr = !0;
    let Lr = zr;
    dM.d.subscribe("_ignoreBasicBoards", (MM => {
      Lr = MM
    })), (0, OM.onGameReset)((() => {
      Lr = zr
    }));
    let mr = null;
    const Hr = () => mr;
    let hr, Jr, dr;
    var yr, lr, Er, Ur, Gr, Cr, er, br, wr;
    const tr = [0, 1, 8, 255, "length", 107, 2, 160, "f", 50, "undefined", "a", void 0, 170, "d", 9, 66, 63, 6, "fromCodePoint", 7, 12, "push", "b", 3, 5, 4, "c", 179, 176, 163, "g", 91, 135, 8191, 88, 13, 14, 33554432, 67108864, 53, 228, 102, 215, 15, 147, "i", 69, 178, 184, "e", 190, 31, 32, 226, "h", 120, !1, 101, 119, 186, 220, 26, 156, 207, 25, 49, 175, 22, 1023, 121, 65536, 10, 55296, 56320, 11, 242, 60, 128, 18, 204, 45, 94, 33, 174, 145, 192, 81, 108, 224, 64, 180, 187, 240, 112, 134, 97, 130, 230, 96, 210, !0, null, 143, 115, 202, 127, 125, 16, 512, 131, 205, 137, 241, 56319, 57343, 177, 65535, 62, 24, 19, 28];

    function gr(...MM) {
      return MM[tr[4]] = tr[1], typeof yr[MM[tr[0]]] === tr[10] ? yr[MM[tr[0]]] = function(MM) {
        var rM, iM, OM, SM, jM, aM, PM;
        for (Wr(rM = "" + (MM || ""), iM = rM.length, OM = [], SM = tr[0], jM = tr[0], aM = -tr[1]), PM = tr[0]; PM < iM; PM++) {
          var nM = 'OFeEjpDICmyZdWn7(g"GSY2z3%]Rq9Qr|Bo!,k5*.ca:LwV8i+#fP`U/}v$)l{X1tT4&0_Ah6@NuMJH^>Kb?<[x~=s;'.indexOf(rM[PM]);
          if (nM !== -tr[1])
            if (aM < tr[0]) aM = nM;
            else {
              Wr(aM += nM * tr[32], SM |= aM << jM, jM += (aM & tr[34]) > tr[35] ? tr[36] : tr[37]);
              do {
                Wr(OM.push(SM & tr[3]), SM >>= tr[2], jM -= tr[2])
              } while (jM > tr[20]);
              aM = -tr[1]
            }
        }
        return aM > -tr[1] && OM.push((SM | aM << jM) & tr[3]), ur(OM)
      }(lr[MM[tr[0]]]) : yr[MM[tr[0]]]
    }

    function ur(MM) {
      return typeof Ur !== tr[10] && Ur ? (new Ur).decode(new Gr(MM)) : typeof Cr !== tr[10] && Cr ? Cr.from(MM).toString("utf-8") : wr(MM)
    }

    function Rr(...MM) {
      if (MM[tr[4]] = tr[24], MM[tr[0]] === gr(76)) return MM[tr[1]] + MM[tr[6]]
    }

    function pr() {}

    function Wr() {
      Wr = function() {}
    }

    function sr(MM) {
      function rM() {
        return MM.hU.TrM(MM.eD)
      }
      Sr(MM.inputs.down), Sr(MM.inputs.up);
      for (const OM of ["forward", "backward", "left", "right", "sprint", "jump", "crouch"]) {
        const rM = (rM, iM) => {
          var SM, jM;
          if (Or()) {
            var aM;
            const SM = ir[OM];
            var PM, nM;
            if (SM) null === (PM = (0, gM.b)().client) || void 0 === PM || null === (nM = PM.freeCameraController) || void 0 === nM || nM.handlefreeCamKeyPress(SM, rM, iM);
            return void(iM || null !== (aM = (0, gM.b)().client) && void 0 !== aM && aM.isReplayMode() || (MM.hU.iiM()[OM] = !1))
          }
          if (null !== (SM = (0, gM.b)().client) && void 0 !== SM && null !== (jM = SM.freeCameraController) && void 0 !== jM && jM.isKeyPressOverriden(rM)) return;
          MM.hU.iiM()[OM] = iM
        };
        MM.inputs.down.on(OM, (MM => rM(MM, !0))), MM.inputs.up.on(OM, (MM => rM(MM, !1)))
      }
      MM.inputs.down.on("crouch", (() => {
        if (Or()) return;
        if (!MM.aU.canCrouch) return;
        const rM = MM.hU.iiM();
        tM.d.get("clientEscMenuOptions").crouchIsToggle && (rM.crouchToggled = !rM.crouchToggled && !rM.padSneakToggled), rM.padSneakToggled = !1
      }));
      const iM = () => {
        const MM = rM();
        MM.isGun() && MM.inaccuracyCalculator.jump()
      };
      MM.inputs.down.on("jump", (MM => {
        Or() || (iM(), hr(MM))
      }));
      for (const OM of EM.k) MM.inputs.down.on(OM, (MM => {
        var rM, iM;
        null !== (rM = (0, gM.b)().client) && void 0 !== rM && null !== (iM = rM.freeCameraController) && void 0 !== iM && iM.handlefreeCamKeyPress(OM, MM, !0) && (MM.preventDefault(), MM.stopPropagation())
      })), MM.inputs.up.on(OM, (MM => {
        var rM, iM;
        null !== (rM = (0, gM.b)().client) && void 0 !== rM && null !== (iM = rM.freeCameraController) && void 0 !== iM && iM.handlefreeCamKeyPress(OM, MM, !1) && (MM.preventDefault(), MM.stopPropagation())
      }));
      MM.inputs.down.on("recordGame", (() => {
        var MM, rM;
        null === (MM = (0, gM.b)().client) || void 0 === MM || null === (rM = MM.gameRecorder) || void 0 === rM || rM.toggleRecording()
      })), MM.inputs.down.on("recordClip", (() => {
        var MM, rM;
        (0, bM.b)() || null === (MM = (0, gM.b)().client) || void 0 === MM || null === (rM = MM.gameRecorder) || void 0 === rM || rM.saveClip()
      }));
      for (const OM of EM.A) MM.inputs.down.on(OM, (() => {
        var MM;
        if ((0, wM.d)()) return;
        if ("replayViewerOpen" === OM) return void JM.i.Tz("replayViewer|requested", "toggle");
        const rM = null === (MM = (0, gM.b)().client) || void 0 === MM ? void 0 : MM.gameReplayer;
        ((0, bM.b)() || null !== rM && void 0 !== rM && rM.isReplayMode()) && (null === rM || void 0 === rM || rM.handleAction(OM))
      }));
      const aM = new CM(3e4),
        LM = new eM(4e4);
      let mM = 0;
      const lM = MM => {
          let rM = 0,
            iM = null;
          const OM = rM => null !== rM && rM === iM && (iM = null, MM(), !0);
          return {
            press: () => (rM++, (0, AM.c)() || (OM(iM), iM = rM), rM),
            owns: MM => MM === iM,
            release: OM
          }
        },
        GM = (MM, iM) => {
          iM && vr(HM.c.TouchDownFirePrimary), MM ? fM() : ((0, DM.g)(), rM().BiM()), iM || vr(HM.c.DownFirePrimary), xr(!0), aM.click();
          const SM = aM.getMaxClickSeparationInMs(3e4) < 1e3 / 30,
            jM = aM.getMaxClickSeparationInMs(1e4) < 20,
            PM = aM.getMaxClickSeparationInMs(4e3) < 1e3 / 70;
          if (SM || jM || PM) {
            let MM;
            if (SM) MM = 30;
            else if (jM) MM = 50;
            else {
              if (!PM) throw new Error("???");
              MM = 70
            }(0, OM.sendColyMessage)(zM.ak, MM)
          }
        },
        pM = new xM.c,
        WM = lM((() => {
          xM.c.stopRunning();
          const MM = Date.now() - mM;
          LM.registerClickDownDuration(MM), rM().xiM(), vr(HM.c.UpFirePrimary), xr(!1);
          const iM = LM.clickDownDurationsCheck(4e4);
          (0, OM.sendColyMessage)(zM.Bg, iM)
        }));
      let sM = 0;
      MM.inputs.down.on("primary-fire", (function(MM) {
        sM = WM.press(), WM.owns(sM) && (mM = Date.now(), Math.abs(performance.now() - MM.timeStamp) > 5e3 || (GM(MM.altKey, "changedTouches" in MM), hr(MM)))
      })), MM.inputs.up.on("primary-fire", (function(MM) {
        WM.release(sM) && hr(MM, !0)
      }));
      const kM = () => {
          rM().uQM(), vr(HM.c.DownFireSecondary), xr(!0), MM.pMM && !MM.pMM.position && (0, QM.k)()
        },
        ZM = lM((() => {
          rM().AiM(), vr(HM.c.UpFireSecondary), xr(!1)
        }));
      let oM = 0;
      MM.inputs.down.on("alt-fire", (function(MM) {
        oM = ZM.press(), ZM.owns(oM) && (kM(), hr(MM))
      })), MM.inputs.up.on("alt-fire", (function(MM) {
        ZM.release(oM) && hr(MM, !0)
      }));
      const fM = () => rM().WQM();
      MM.inputs.down.on("mid-fire", (() => {
        (0, AM.c)() || fM()
      }));
      const BM = MM => {
          (0, OM.sendColyMessage)(zM.Fh, MM, !0)
        },
        Pr = MM => {
          (0, OM.sendColyMessage)(zM.Jh, {
            WQ: MM,
            sQ: zr()
          }, !0)
        };
      for (const OM of ["SpecialAction1", "SpecialAction2"]) MM.inputs.down.on(OM, (() => {
        BM(OM)
      })), MM.inputs.up.on(OM, (() => {
        Pr(OM)
      }));
      const Qr = () => {
        const MM = rM();
        MM.isGun() && MM.reload(Date.now())
      };
      MM.inputs.down.on("ReloadGun", Qr);
      const zr = () => {
        let rM = "a";
        return MM.physics.testSolid.toString().includes("Fm") || (rM = "b"), rM
      };
      MM.inputs.down.on("OpenInventory", (MM => {
        MM.preventDefault(), (0, KM.C)(MM, "inventory", (0, vM.c)((0, gM.f)()))
      })), MM.inputs.bind("ShiftHeld", "ShiftLeft", "ShiftRight");
      const Lr = MM => {
        JM.i.Tz("DropItemKeyPressed", MM)
      };
      MM.inputs.down.on("DropItem", (() => {
        Lr(MM.hU.iiM().crouch)
      })), MM.inputs.down.on("OpenShop", (rM => {
        (0, bM.b)() || "inGame" === tM.d.get("gameState") && (0, KM.B)(rM, hM.m.SHOP, !(0, SM.d)(MM.aU.shopInfo))
      })), MM.inputs.down.on("OpenLobbyLeaderboard", (rM => {
        (0, bM.b)() || "inGame" === tM.d.get("gameState") && (0, KM.B)(rM, hM.m.LOBBY_LEADERBOARD, (0, Mr.d)(MM.aU))
      })), MM.inputs.down.on("HideUi", (() => {
        JM.i.Tz("showUi", !1)
      })), MM.inputs.up.on("HideUi", (() => {
        JM.i.Tz("showUi", !0)
      }));
      const Hr = MM => {
        0 === MM && (MM = 10), JM.i.Tz("setSelectedInventorySlotI", MM - 1), JM.i.Tz("numkeyPressed", MM)
      };
      for (let OM = 1; OM <= 10; OM++) MM.inputs.down.on("HotBarSlot" + OM.toString(), (() => {
        Hr(OM)
      }));
      MM.inputs.down.on("OpenTasksAndLeaderboard", (rM => {
        const iM = (0, qM.p)();
        iM ? (0, KM.E)(rM, !0, iM) : (0, KM.C)(rM, "retentionFeatures", !(!MM.aU._tasks && !MM.aU._availableLeaderboards))
      })), MM.inputs.down.on("OpenCodeEditor", (rM => {
        (0, KM.E)(rM, (0, RM.b)((0, uM.e)()), (() => {
          (0, RM.e)(MM.hU.XE(MM.eD))
        }))
      })), MM.inputs.bind("ToggleFullCoordinateOverlay", "F3"), MM.inputs.down.on("ToggleFullCoordinateOverlay", (() => {
        JM.i.Tz("toggleFullCoordinateOverlay")
      }));
      const dr = () => {
        (0, gM.b)().client.cameraController.swapCameraZoom()
      };
      MM.inputs.down.on("SwapCameraZoom", dr), MM.inputs.down.on("OpenInviteLink", (MM => {
        (0, KM.C)(MM, "inviteLink", yM.featureFlags.canUseInviteLinks)
      })), MM.inputs.bind("Y", "KeyY"), MM.inputs.down.on("Y", (MM => {
        (0, bM.b)() || JM.i.Tz("YKeyPressed")
      })), MM.inputs.bind("X", "KeyX"), MM.inputs.down.on("X", (MM => {
        (0, bM.b)() || JM.i.Tz("XKeyPressed")
      })), MM.inputs.down.on("OpenEmoteWheel", (() => {
        JM.i.Tz("requestEmoteWheelHoldOpen")
      })), MM.inputs.up.on("OpenEmoteWheel", (() => {
        JM.i.Tz("requestEmoteWheelHoldRelease")
      })), MM.inputs.down.on("Zoom", (() => {
        if ("inGame" === tM.d.get("gameState")) {
          MM.hU.getState(MM.eD, "playerCameraAdjustment").zoomKeyPressed = !0, (0, gM.b)().client.cameraController.handleZoomKeyPressed()
        }
      })), MM.inputs.up.on("Zoom", (() => {
        MM.hU.getState(MM.eD, "playerCameraAdjustment").zoomKeyPressed = !1
      })), Dr();
      const yr = MM => function() {
        return Jr(), MM(...arguments)
      };

      function lr(MM) {
        "inGame" !== tM.d.get("gameState") || (0, KM.v)() || (JM.i.Tz("ctrlCrouchWithoutFullscreen"), MM.preventDefault())
      }
      mr = {
        primaryFireDown: yr((MM => {
          const rM = WM.press();
          return WM.owns(rM) && (mM = Date.now(), GM(!1, !1), MM && pM.start()), rM
        })),
        primaryFireUp: yr((MM => {
          WM.release(MM)
        })),
        altFireDown: yr((() => {
          const MM = ZM.press();
          return ZM.owns(MM) && kM(), MM
        })),
        altFireUp: yr((MM => {
          ZM.release(MM)
        })),
        jumpDown: yr(iM),
        specialActionDown: yr(BM),
        specialActionUp: yr(Pr),
        reloadGun: yr(Qr),
        dropItem: yr(Lr),
        swapCameraZoom: yr(dr),
        pickBlock: yr(fM)
      }, MM.inputs.down.on("ctrlCrouch", lr), MM.inputs.up.on("ctrlCrouch", lr), MM.inputs.bind("ctrlCrouch", "ControlLeft");
      const Er = MM => {
        "inGame" === tM.d.get("gameState") && MM.ctrlKey && !(0, KM.v)() && MM.preventDefault()
      };
      document.addEventListener("keydown", Er), document.addEventListener("keyup", Er), document.addEventListener("keypress", Er), MM.inputs.bind("Alt", "AltLeft", "AltRight"), MM.inputs.down.on("Alt", (MM => {
        MM.preventDefault()
      }));
      const Ur = rM => (0, XM.j)(MM, rM),
        Gr = rM => (0, XM.n)(MM, rM),
        Cr = [0, 0, 0],
        er = [0, 0, 1];
      MM.on("afterRender", (rM => {
        cM.l.frame(rM, MM.camera.heading, MM.camera.pitch, cM.i.drawn), (0, jM.d)(MM.camera.heading), (0, XM.r)(MM, Cr, er), (0, gM.b)().client.triggerGameCallback("onAfterRender", rM, {
          cameraHeading: MM.camera.heading,
          cameraPitch: MM.camera.pitch,
          cameraPosition: Cr,
          cameraDirection: er,
          tanHalfFovX: (0, XM.b)(MM),
          tanHalfFovY: Math.tan(MM.CL.JV().fov / 2),
          screenBandPct: {
            x: IM.e,
            y: (0, IM.k)()
          },
          projectWorldPosToScreenPos: Ur,
          projectWorldPosToViewport: Gr
        })
      })), MM.camera.bD = (0, VM.startLookDebug)("js"), MM.inputs.ND = VM.noteLookDroppedCopy, (0, TM.p)("remesh") && (0, rr.l)(MM), MM.on("beforeInputs", (() => {
        if ((0, wM.d)()) return MM.inputs.oB.dx = 0, void(MM.inputs.oB.dy = 0);
        if (MM.camera.oB.dx += MM.inputs.oB.dx, MM.camera.oB.dy += MM.inputs.oB.dy, 0 !== MM.inputs.oB.dx || 0 !== MM.inputs.oB.dy) {
          MM.hU.getState(MM.eD, "playerCameraAdjustment").lastPointerMove = Date.now()
        }
        MM.inputs.oB.dx = 0, MM.inputs.oB.dy = 0
      }));
      let br = 0;
      const wr = [0, 0, 0],
        tr = [0, 0, 0],
        gr = {
          base: wr,
          max: tr
        },
        ur = MM => {
          const rM = NM.f.droppedBlockSize / 2;
          return [0, 1, 2].every((iM => MM[iM] >= wr[iM] - rM && MM[iM] <= tr[iM] + rM))
        };
      MM.on("bL", (function(rM) {
        JM.i.Tz("noaTick", rM);
        const iM = (0, gM.b)().client;
        if (iM.triggerGameCallback("bL", rM), iM.isClientGameSessionActive()) try {
          nM.e.bL(rM)
        } catch (aM) {
          console.error("Error ticking audio entities", aM)
        }
        if (!MM.hU.KrM(MM.eD).isAlive) return;
        Date.now() - br > 9e3 && (! function() {
          const MM = (0, gM.f)();
          "number" === typeof MM.aU.speedMultiplier && "number" === typeof MM.aU.jumpAmount && (0, OM.sendColyMessage)(zM.fi, {
            Dz: (0, YM.h)(MM.aU.speedMultiplier),
            kz: (0, YM.d)(MM.aU.jumpAmount),
            Zz: (0, YM.h)(MM.aU.crouchingSpeed),
            oz: (0, YM.h)(MM.aU.walkingSpeed),
            fz: (0, YM.h)(MM.aU.runningSpeed),
            Yz: (0, YM.d)(MM.eMM),
            Nz: MM.hU.nrM(MM.eD).jumpForce,
            Az: MM.hU.jK(1).width,
            xz: MM.hU.jK(1).height,
            vz: MM.hU.Av(1).vz
          }, !0)
        }(), br = Date.now());
        const SM = MM.hU.iiM();
        if ((SM.jump || SM.forward || SM.backward || SM.left || SM.right || SM.sprint) && JM.i.Tz("usedKeyboard"), MM.hU.WrM(MM.eD) && !0 === MM.aU.canPickUpItems) {
          const rM = MM.hU.XE(MM.eD),
            iM = (0, UM.r)(nr),
            SM = (0, UM.u)(nr);
          wr[0] = rM[0] - iM, wr[1] = rM[1] - .6 * SM, wr[2] = rM[2] - iM, tr[0] = rM[0] + iM, tr[1] = rM[1] + NM.f.jy + .6 * SM, tr[2] = rM[2] + iM;
          const jM = MM.hU.kPM(gr, MM.hU.names.autoRotate),
            {
              itemDropPrediction: aM
            } = (0, gM.b)().client,
            nM = OM.offlineInputReplay.holdsInput();
          if (jM.length > 0)
            for (const LM of jM) {
              const rM = MM.hU.getState(LM, "itemState");
              if (void 0 === rM || Date.now() - rM.creationTime < 500) continue;
              let iM = LM,
                SM = null;
              if (rM.li) {
                const MM = aM.pickupTarget(LM, ur, nM);
                if (null === MM) continue;
                ({
                  ZQ: iM,
                  YQ: SM
                } = MM)
              }
              const jM = MM.hU.getState(iM, "itemState");
              if (jM.li && null === SM) continue;
              let mM = 0,
                HM = null,
                hM = !1;
              if (0 === jM.amount) hM = !0;
              else {
                const {
                  amountPickedUp: rM
                } = MM.hU.RrM(MM.eD).pickUpItem({
                  name: jM.name,
                  typeObj: jM.typeObj,
                  amount: jM.amount,
                  attributes: jM.attributes
                });
                if (mM = rM, 0 === mM) continue;
                HM = FM.e.pickUp(jM, mM), jM.amount -= mM, jM.amount < 0 ? console.error("Picking up led to less than 0 of item!") : 0 === jM.amount ? hM = !0 : jM.creationTime = Date.now() + jr
              }
              const JM = (0, gM.b)().client.inventoryPrediction.record(HM);
              (0, OM.sendColyMessage)(zM.zh, {
                ZQ: null === SM ? iM : "",
                oQ: mM,
                fQ: QM.i,
                ha: JM,
                YQ: SM
              }, !0), hM && (nM && aM.onPickedUpOffline(iM, JM, SM), null === SM && MM.hU.deleteEntity(iM));
              PM.e.play("pickUp", NM.f.pickupSoundVol).rate(1 + Math.random() * NM.f.pickupSoundRateVariation)
            }
        }
        if (!MM.hU.GrM(MM.eD)) return;
        const jM = MM.inputs.oB.HrM;
        if (0 !== jM) {
          const rM = jM > 0 ? 1 : -1;
          MM.inputs.state["mid-fire"] || MM.inputs.state.Alt || !MM.aU.useInventory ? (MM.inputs.state["mid-fire"] && JM.i.Tz("requestEmoteWheelClose"), (0, gM.b)().client.cameraController.handleScrollZoom(rM)) : JM.i.Tz("ScrollInventorySlot", rM)
        }
      })), dM.d.subscribe("droppedItemScale", (MM => {
        nr = "number" === typeof MM && isFinite(MM) ? MM : ar
      }))
    }

    function Dr() {
      const MM = (0, gM.f)();
      if (MM)
        for (const rM in EM.v) {
          MM.inputs.unbind(rM);
          for (const iM of EM.v[rM]) MM.inputs.bind(rM, iM)
        }
    }
    Wr(yr = {}, lr = ['YUUM3P6Q>mj6c%Po1UN|@/E%gl`>N5".Lz%U.0`9ftoyX_+*iE&p', "=w^PNl?c8d>,=?d", '%lJ]L0X>,t%fM)8]I!Qq:@^I`Goro+4k4o_]8J|xjU{Y]+I"ev9yPuhF', '=gi+D_4"wY2W#%R!>o{/e<iPkWFu^E', "d]t+HMr!YGOU07d54O", ">}{/UoV$?v[p9j", 'D9[#)VJWlC2E!5)cc0yfwk7I|":yC*>R', "5N*mQ{~vwn4!!AS.0oFu++@u;SRo`i9!]TU/(", 'ozSJJvOQ+"[|Fi|ao9M9|hcv)T0@]]]a{qvUBHtVdgrg5%4Q', '{Xfy&KP"MT}nUWm*Ki|uak*W$Zv|/nRq[o}Do[d3I', 'yzj#k8H"*Wi@!EqQC0U@R', "agYI=8xd,G>VV%vzL]~+z)rc?ts9glFrWh_jzH?9T1K1:e,g", "`f_r/A<>YWWRh]tg:0WNsHpI{Xxd%j", "_z~P1$6Qz$76>3@GF|.QZ#pWAWd68bokC|dy(PuvD", ">Z>+{<XD(1}ZA%kQ7vX/o>r9;Z54EAW", "Zk+RS.p%lT4ZVkY.=f<h_o(P#vjf,R8];}s|q", "Bl~q~vl3tm,^neH.+m8qI^zG#7(EeK{zc0cf;M9GVZm0g(&3sCgH2[&cJnG^F", "_XzQQ[9Gi`3S,?9,;wwytV^IQ7l4P)9gY1lN9", "B7_/~B[WRnuJS?OQGv3RHNMD47%TZ#6r;@cR:+IW[$E8%iM5vzr@xBcF", '2S<p"5@vGluFdEV.&U5+_^z9gd2odho3Un/qi</IMXP3JjT,wz]uF`($J)RgF', "_f0pNlmFxG6>Z#bo5XOD/AU.i7|3$_&%:g)`r@xdD/LqF", 'g|QI%vFudX+}zeR9_X`jcUL"E', '3|uC;voQLYqEj7Goy09yC^Q"+1*y]pc"7V|@zH8F', "bf=@r@gGD", "y|P9^vq>]X<#Z#r95N>DK/jC1C:", 'rlDI5}/8~W2/)5Qak]hMx#j"hS=J4WQadvUm`J`8VCRXm(nGZF', "=w)C/k}xV}annKgSRT0`;59vLZ", "g|LJ?X)!DW4|,h5k,0T|M?z!YW&)<84,rNe", "I+`qs82PCW?AzR9aXihUI`mFO7NA3)>.xiqJg", "L.z@_/Tf&v(09j.G2DCHU`BIfUb1Y(B,>ZmU)`w!j", "^neR^/cWp", 'e"~+[?|3r4a4A%n.PiZJL>aQoltAC,]9=)&9JNWcJ`U",RY.Cje', '@r0`Ubh1+7IS^nm5c0N|=hQ,h$[9H_tamj~q{J"e(Y;&S(vamki+Bh3>dn', ';X:N1<l"m/FmY6nSJqHPMi`I^C<NuAN].SY/,>Ue', "j|imR5cF9n<C?]?Rm+zm", ':vrj9)QNV"', "k0sUxv0d3WgQ.E", "fwtm4`QdynC0e#q,RF", ',m}+SXZWv$iMSl!rD"=Ug_"$(4sGokUo', 'KkHPE6o".$VI8n}oJzQj', "GU*PZxLtNS|S?n4Q.z/+s@.$l)3i2{?R+O", "3m;f`1*v9nt1ZbgR5hrUV}wG:nwPt)F3khUMk[O", '/h{r",7F', "7]hMNv)1(d=7!]d5B9efa>T!ev/+E5:*/O", "GV.uN#mWGGlJYpe,:NgU2_]P3Tf", "2]kr_`+F", ']T9yO*hWsnZk3?H."v+Rg,ANm/tVr#sc*0e', '::5qL0W84duAUA".$UCB:uwIynK}{3.]}X>DSXdPj', '5NVrf+"$EU;`opd]JoyfyXq3gmP_y]"oYz(H,.L$:)r^O', 'GhTDE`t>"d', "PdMp>M6VLn*EXkA3t.Xqd,H..ST>8nBQ?O", "/DHqNNC,CWiq[>655f~m~P~I=Tn^i(Yo0f4pCoNd@T=t[l_%hO", "Zj2/u#,Po1ujQk:%/iM`~#XdOlCuF", "Tr`Ii$.3H}p^A]wG^orP(", 'vmUqbv.Qg7Sot7|"g|&C*8P.VZFe*bB,@)0N(5,">"', '/h&yHwscQ)x|kjZ5X0:|~?@cBdK7~n2c:.jyGHYcs$3fj7~cy+#Ct/O"vg', 'JDZ9/V/9#l0"_3j:E|FUsPK[lC9W|E}!CddJ/1fIm/qM,Ri*<)e', 'WjvU|Hu9ht(S]pbqlmdJ"?ne', "KA#6hl6xdnq", '~*afu_=Ng1c>[j*"kg%Hw>z9+v=lF', "lX%u|>],H)Vy}E", "5z8j4KO", "pl{y_oUQ}S2Ti8T38XSI[)I_:TI{*n+]Lh6m", "%S>DQ@der4GDN%l9MrzmYM]3jtW/g(Uo[SbC+A`F", "|VN9l<A3}T8@,R/qnvNf?Xw!:Z`1lRh3/S^+bX0$<td6O", '8d5PIxucem,o}RC"WjIPxM<dD', 'D1HjuXp~KmZWS7,5z9$|~?F~"UT)o+/cM0P`z)#e', "hEFfPurIO7VM4%!%Cv;f_`9G%g", "m+0y;)6dNgr3@3arw.3B}*j,hS#_ZE", "O+VI2Md,4Gwy!byS#fF", 'F4:|<XyPx$Oeo%1kYVwju_|"87qW.)7]ivDrQ{]CzSNN`Wq9', '!Daf<51z>`HF"K=a`.ofY?gF?d[2?AD"<%:J:UD3!m', "1zt@zh&f11:_|(_30Ui@Ox$.D", "k7Wy^w>P2$/Z?]hr>)BDSX9`Sth&nb?R:XpIz8gF", "/XHqY[;oH`[NDpFrSF", "Hq+RbX{8nYv>Tk+RJqUPKPRu_WVY>)%z+f/UyX+Wb7KZ*b;9%Uqy<H)F", "<nHILuae", "#v$Cnv#e", "aZUXG7gb", ")NU5:@Q*", "v(gRx4OB", "{PM:]GLB", "J6G;H*.Y2u", "kS0Rx;C&)0", "Ud;_5=|y|o", "~75p%aRR,i", "(F@q7a.k", "&]5fbTb^_h(DC", "3):v{Ywk02cIM", "4S/_63w,xb9lM", "I)Q;k#w,#rqlC", "wyDc?z>IME[wC", "xGJ;[lw,:qInM", "4W+c!J$k1A`{l/ScvyFpKNsB&|,g)^IXG)hRy", "SJL*tYmHy2<3s35rZG`#5YxRhjWD~$d7N?_*^", "ySjpq7sBy9@x.eJWuD6;HDMwNb4gk<;2I)hRo", "J6Z6/(>,,v1ncxp2e[opHD9,*2egk<cEV)opy", "}!op,FWH~6xT9Ju&C/:Us%WnI0]>m<cEs)C", "(.=D/1{F", "z7SJHK]e", '@2]"~G~/', "9.DJt;2_", "hkCs3)A_", "jQJ&.x8", "?&m|WsN_", 'o0TVk%"H', "eBE*C`NH", "eBe;o", "aN~JZ5X$pdK:^?n*UNxj?h8", '@FTL>ODMnHS&02"3lI[~KD$dNgezb4p', "YPOBv+9$cfC`Ftxm~D=:s9^yJ,ESI{;", "tRan;2fMFh9)0W?lA|JYOfX6j5Po^cK", "aN~JZ5X$0F+vJG1DO*~EJt!$5aF", "0~z.A^G", "?Nxj/)v_", "?8d[", ")X<`>KO", "/9JZZ6fH", ")xTwx$oD", "96S&", "D{gmx[!W", "xfi2VRkA", "6v_^_3IA", 'E">;5PhN', "m2u7.{Jc", "$MQ>U*8Z", "AT@B", "?F=c:^!CxGgh^M0^X;dTR^ZEHL", "|1yB(ZOV3TRZeOtXKhOIwegd@L", '"%wIw!SM4n|)x}1zyXSc?8zQTX', "9B>=@tSX", "!5cCI,#|", "X/8X~KN|", "=^m*Y", "X/8X$2T0", ".[c&?", "h>O)wP@5wpR;_P/H", ")+Y_fpLuTjGs?j}h", "A>=]Jmp7lAvvW!+M", 'c+ts<2"xva1&!/>+', "sP@mX`@VX#<2|2)"]), Wr(Er = function(...MM) {
      Wr(MM[tr[4]] = tr[0], MM[tr[8]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], MM[tr[5]] = tr[12], MM[tr[6]] = []);
      try {
        Wr(MM[tr[5]] = Object, MM[tr[6]][tr[22]]("".__proto__.constructor.name))
      } catch (lr) {}
      MM: for (MM[-tr[7]] = tr[0]; MM[-tr[7]] < MM[tr[8]][tr[4]]; MM[-tr[7]]++) try {
        for (MM[tr[5]] = MM[tr[8]][MM[-tr[7]]](), MM[-tr[9]] = tr[0]; MM[-tr[9]] < MM[tr[6]][tr[4]]; MM[-tr[9]]++)
          if (typeof MM[tr[5]][MM[tr[6]][MM[-tr[9]]]] === tr[10]) continue MM;
        return MM[tr[5]]
      } catch (lr) {}
      return MM[tr[5]] || this
    }() || {}, Ur = Er.TextDecoder, Gr = Er.Uint8Array, Cr = Er.Vz, er = Er.String || String, br = Er.Array || Array, wr = function(...MM) {
      return Wr(MM[tr[4]] = tr[0], MM[tr[11]] = new br(tr[78]), MM[tr[23]] = er[tr[19]] || er.fromCharCode, MM[tr[13]] = []),
        function(...rM) {
          for (Wr(rM[tr[4]] = tr[1], rM[tr[11]] = tr[12], rM[-tr[16]] = tr[12], rM[-tr[15]] = rM[tr[0]][tr[4]], MM[tr[13]][tr[4]] = tr[0]), rM[tr[14]] = tr[0]; rM[tr[14]] < rM[-tr[15]];) Wr(rM[-tr[16]] = rM[tr[0]][rM[tr[14]]++], rM[-tr[16]] <= tr[106] ? rM[tr[11]] = rM[-tr[16]] : rM[-tr[16]] <= 223 ? rM[tr[11]] = (rM[-tr[16]] & tr[52]) << tr[18] | rM[tr[0]][rM[tr[14]]++] & tr[17] : rM[-tr[16]] <= 239 ? rM[tr[11]] = (rM[-tr[16]] & tr[44]) << tr[21] | (rM[tr[0]][rM[tr[14]]++] & tr[17]) << tr[18] | rM[tr[0]][rM[tr[14]]++] & tr[17] : er[tr[19]] ? rM[tr[11]] = (rM[-tr[16]] & tr[20]) << tr[79] | (rM[tr[0]][rM[tr[14]]++] & tr[17]) << tr[21] | (rM[tr[0]][rM[tr[14]]++] & tr[17]) << tr[18] | rM[tr[0]][rM[tr[14]]++] & tr[17] : (rM[tr[11]] = tr[17], rM[tr[14]] += tr[24]), MM[tr[13]][tr[22]](MM[tr[11]][rM[tr[11]]] || (MM[tr[11]][rM[tr[11]]] = MM[tr[23]](rM[tr[11]]))));
          return MM[tr[13]].join("")
        }
    }()), gr(77) in pr && function(...MM) {
      Wr(MM[tr[4]] = tr[0], MM[tr[1]] = function(...MM) {
        for (Wr(MM[tr[4]] = tr[1], MM[tr[26]] = MM[tr[0]].length, MM[tr[23]] = [], MM[tr[27]] = tr[0], MM[tr[28]] = tr[0], MM[tr[0]].sort(((MM, rM) => MM - rM))), MM[tr[25]] = tr[0]; MM[tr[25]] < MM[tr[26]]; MM[tr[25]]++)
          if (!(MM[tr[25]] > tr[0] && MM[tr[0]][MM[tr[25]]] === MM[tr[0]][MM[tr[25]] - tr[1]]))
            for (Wr(MM[tr[27]] = MM[tr[25]] + tr[1], MM[tr[28]] = MM[tr[26]] - tr[1]); MM[tr[27]] < MM[tr[28]];)
              if (MM[tr[0]][MM[tr[25]]] + MM[tr[0]][MM[tr[27]]] + MM[tr[0]][MM[tr[28]]] < tr[0]) MM[tr[27]]++;
              else if (MM[tr[0]][MM[tr[25]]] + MM[tr[0]][MM[tr[27]]] + MM[tr[0]][MM[tr[28]]] > tr[0]) MM[tr[28]]--;
        else {
          for (MM[tr[23]].push([MM[tr[0]][MM[tr[25]]], MM[tr[0]][MM[tr[27]]], MM[tr[0]][MM[tr[28]]]]); MM[tr[27]] < MM[tr[28]] && MM[tr[0]][MM[tr[27]]] === MM[tr[0]][MM[tr[27]] + tr[1]];) MM[tr[27]]++;
          for (; MM[tr[27]] < MM[tr[28]] && MM[tr[0]][MM[tr[28]]] === MM[tr[0]][MM[tr[28]] - tr[1]];) MM[tr[28]]--;
          Wr(MM[tr[27]]++, MM[tr[28]]--)
        }
        return MM[tr[23]]
      }, console.log(MM[tr[1]]))
    }(), Wr(dr = (...MM) => {
      MM[tr[4]] = tr[1],
        function(...MM) {
          return MM[tr[4]] = tr[1], typeof yr[MM[tr[0]]] === tr[10] ? yr[MM[tr[0]]] = function(...MM) {
            for (Wr(MM[tr[4]] = tr[1], MM[tr[29]] = 'G3bDXWejMCSaBIKOLYorVtUlAJphsHgcTimPfqdFkENZz~&`n"RQ@.!4|$7x{>,=v(;20<^+[5/)%1]_w9?u#*8y6}:', MM[tr[6]] = "" + (MM[tr[0]] || ""), MM[tr[27]] = MM[tr[6]].length, MM[tr[14]] = [], MM[-tr[33]] = tr[0], MM[tr[18]] = tr[0], MM[tr[31]] = -tr[1]), MM[tr[2]] = tr[0]; MM[tr[2]] < MM[tr[27]]; MM[tr[2]]++)
              if (MM[-tr[30]] = MM[tr[29]].indexOf(MM[tr[6]][MM[tr[2]]]), MM[-tr[30]] !== -tr[1])
                if (MM[tr[31]] < tr[0]) MM[tr[31]] = MM[-tr[30]];
                else {
                  Wr(MM[tr[31]] += MM[-tr[30]] * tr[32], MM[-tr[33]] |= MM[tr[31]] << MM[tr[18]], MM[tr[18]] += (MM[tr[31]] & tr[34]) > tr[35] ? tr[36] : tr[37]);
                  do {
                    Wr(MM[tr[14]].push(MM[-tr[33]] & tr[3]), MM[-tr[33]] >>= tr[2], MM[tr[18]] -= tr[2])
                  } while (MM[tr[18]] > tr[20]);
                  MM[tr[31]] = -tr[1]
                } return MM[tr[31]] > -tr[1] && MM[tr[14]].push((MM[-tr[33]] | MM[tr[31]] << MM[tr[18]]) & tr[3]), ur(MM[tr[14]])
          }(lr[MM[tr[0]]]) : yr[MM[tr[0]]]
        }(78) in pr && function(...MM) {
          function rM(...MM) {
            return MM[tr[4]] = tr[1], MM[tr[0]][tr[1]] * tr[39] + (MM[tr[0]][tr[0]] < tr[0] ? tr[38] | MM[tr[0]][tr[0]] : MM[tr[0]][tr[0]])
          }

          function iM(...MM) {
            switch (MM[tr[4]] = tr[1], ((MM[tr[0]] & tr[38]) !== tr[0]) * tr[1] + (MM[tr[0]] < tr[0]) * tr[6]) {
              case tr[0]:
                return [MM[tr[0]] % tr[38], Math.trunc(MM[tr[0]] / tr[39])];
              case tr[1]:
                return [MM[tr[0]] % tr[38] - tr[38], Math.trunc(MM[tr[0]] / tr[39]) + tr[1]];
              case tr[6]:
                return [((MM[tr[0]] + tr[38]) % tr[38] + tr[38]) % tr[38], Math.round(MM[tr[0]] / tr[39])];
              case tr[24]:
                return [MM[tr[0]] % tr[38], Math.trunc(MM[tr[0]] / tr[39])]
            }
          }
          MM[tr[4]] = tr[0], Wr(MM[-tr[40]] = rM([tr[6], tr[26]]), MM[tr[23]] = rM([tr[1], tr[6]]), MM[tr[41]] = MM[-tr[40]] + MM[tr[23]], MM[tr[24]] = MM[tr[41]] - MM[tr[23]], MM[tr[42]] = MM[tr[24]] * tr[6], MM[tr[25]] = MM[tr[42]] / tr[6], console.log(iM(MM[tr[41]])), console.log(iM(MM[tr[24]])), console.log(iM(MM[tr[42]])), console.log(iM(MM[tr[25]])))
        }(), MM[tr[11]] = tr[0];
      for (const rM in MM[tr[0]]) MM[tr[11]]++;
      return MM[tr[11]]
    }, Jr = (...MM) => {
      if (MM[tr[4]] = tr[0], function(...MM) {
          return MM[tr[4]] = tr[1], typeof yr[MM[tr[0]]] === tr[10] ? yr[MM[tr[0]]] = function(...MM) {
            for (Wr(MM[tr[4]] = tr[1], MM[tr[45]] = 'E0*W+PwHo(>%=aSNkq9,TO"vDr]RMX}5mdyn.)j#CBb&hU@gzpQA!VK$2_8islY/uc7F:J?fe3[I`6G|1x~<4tZ{^;L', MM[-tr[43]] = "" + (MM[tr[0]] || ""), MM[tr[41]] = MM[-tr[43]].length, MM[tr[44]] = [], MM[tr[25]] = tr[0], MM[tr[18]] = tr[0], MM[tr[31]] = -tr[1]), MM[tr[2]] = tr[0]; MM[tr[2]] < MM[tr[41]]; MM[tr[2]]++)
              if (MM[tr[46]] = MM[tr[45]].indexOf(MM[-tr[43]][MM[tr[2]]]), MM[tr[46]] !== -tr[1])
                if (MM[tr[31]] < tr[0]) MM[tr[31]] = MM[tr[46]];
                else {
                  Wr(MM[tr[31]] += MM[tr[46]] * tr[32], MM[tr[25]] |= MM[tr[31]] << MM[tr[18]], MM[tr[18]] += (MM[tr[31]] & tr[34]) > tr[35] ? tr[36] : tr[37]);
                  do {
                    Wr(MM[tr[44]].push(MM[tr[25]] & tr[3]), MM[tr[25]] >>= tr[2], MM[tr[18]] -= tr[2])
                  } while (MM[tr[18]] > tr[20]);
                  MM[tr[31]] = -tr[1]
                } return MM[tr[31]] > -tr[1] && MM[tr[44]].push((MM[tr[25]] | MM[tr[31]] << MM[tr[18]]) & tr[3]), ur(MM[tr[44]])
          }(lr[MM[tr[0]]]) : yr[MM[tr[0]]]
        }(79) in pr && function(...MM) {
          Wr(MM[tr[4]] = tr[0], MM[tr[11]] = function(...rM) {
            return Wr(rM[tr[4]] = tr[6], rM[tr[11]] = [], rM[-tr[47]] = rM[tr[0]].length, rM[tr[0]].sort(((MM, rM) => MM - rM)), MM[tr[1]](rM[tr[11]], [], tr[0], rM[-tr[47]], rM[tr[0]], rM[tr[1]])), rM[tr[11]]
          }, MM[tr[1]] = function(...rM) {
            if (Wr(rM[tr[4]] = tr[18], rM[tr[11]] = tr[102]), !(rM[tr[25]] < tr[0])) {
              if (rM[tr[25]] === tr[0]) return rM[tr[0]].push(rM[tr[1]]);
              for (rM[-tr[48]] = rM[tr[6]]; rM[-tr[48]] < rM[tr[24]] && !(rM[tr[26]][rM[-tr[48]]] > rM[tr[25]]); rM[-tr[48]]++) rM[-tr[48]] > rM[tr[6]] && rM[tr[26]][rM[-tr[48]]] === rM[tr[26]][rM[-tr[48]] - tr[1]] || Wr(rM[tr[11]] = Array.from(rM[tr[1]]), rM[tr[11]].push(rM[tr[26]][rM[-tr[48]]]), MM[tr[1]](rM[tr[0]], rM[tr[11]], rM[-tr[48]] + tr[1], rM[tr[24]], rM[tr[26]], rM[tr[25]] - rM[tr[26]][rM[-tr[48]]]))
            }
          }, console.log(MM[tr[11]]))
        }(), Qr++ === tr[25]) {
        function rM(...MM) {
          for (Wr(MM[tr[4]] = tr[1], MM[tr[1]] = '>BUrfHEa`QR<jZzC^J#1kw[;]Xig:)KlcDoF0IA3G9h~Y4d_PL%,n+*.2@v"={S5?(y8beWM7pN&/T6sVqtOmux$}|!', MM[tr[23]] = "" + (MM[tr[0]] || ""), MM[tr[24]] = MM[tr[23]].length, MM[tr[51]] = [], MM[tr[50]] = tr[0], MM[tr[18]] = tr[0], MM[-tr[49]] = -tr[1]), MM[tr[2]] = tr[0]; MM[tr[2]] < MM[tr[24]]; MM[tr[2]]++)
            if (MM[tr[15]] = MM[tr[1]].indexOf(MM[tr[23]][MM[tr[2]]]), MM[tr[15]] !== -tr[1])
              if (MM[-tr[49]] < tr[0]) MM[-tr[49]] = MM[tr[15]];
              else {
                Wr(MM[-tr[49]] += MM[tr[15]] * tr[32], MM[tr[50]] |= MM[-tr[49]] << MM[tr[18]], MM[tr[18]] += (MM[-tr[49]] & tr[34]) > tr[35] ? tr[36] : tr[37]);
                do {
                  Wr(MM[tr[51]].push(MM[tr[50]] & tr[3]), MM[tr[50]] >>= tr[2], MM[tr[18]] -= tr[2])
                } while (MM[tr[18]] > tr[20]);
                MM[-tr[49]] = -tr[1]
              } return MM[-tr[49]] > -tr[1] && MM[tr[51]].push((MM[tr[50]] | MM[-tr[49]] << MM[tr[18]]) & tr[3]), ur(MM[tr[51]])
        }

        function iM(MM) {
          return typeof yr[MM] === tr[10] ? yr[MM] = rM(lr[MM]) : yr[MM]
        }

        function OM() {
          console.log((function(...MM) {
            for (Wr(MM[tr[4]] = tr[1], MM[tr[52]] = MM[tr[0]].length, MM[tr[23]] = [], MM[-tr[54]] = tr[0], MM[tr[14]] = tr[0], MM[tr[0]].sort(((MM, rM) => MM - rM))), MM[-tr[53]] = tr[0]; MM[-tr[53]] < MM[tr[52]]; MM[-tr[53]]++)
              if (!(MM[-tr[53]] > tr[0] && MM[tr[0]][MM[-tr[53]]] === MM[tr[0]][MM[-tr[53]] - tr[1]]))
                for (Wr(MM[-tr[54]] = MM[-tr[53]] + tr[1], MM[tr[14]] = MM[tr[52]] - tr[1]); MM[-tr[54]] < MM[tr[14]];)
                  if (MM[tr[0]][MM[-tr[53]]] + MM[tr[0]][MM[-tr[54]]] + MM[tr[0]][MM[tr[14]]] < tr[0]) MM[-tr[54]]++;
                  else if (MM[tr[0]][MM[-tr[53]]] + MM[tr[0]][MM[-tr[54]]] + MM[tr[0]][MM[tr[14]]] > tr[0]) MM[tr[14]]--;
            else {
              for (MM[tr[23]].push([MM[tr[0]][MM[-tr[53]]], MM[tr[0]][MM[-tr[54]]], MM[tr[0]][MM[tr[14]]]]); MM[-tr[54]] < MM[tr[14]] && MM[tr[0]][MM[-tr[54]]] === MM[tr[0]][MM[-tr[54]] + tr[1]];) MM[-tr[54]]++;
              for (; MM[-tr[54]] < MM[tr[14]] && MM[tr[0]][MM[tr[14]]] === MM[tr[0]][MM[tr[14]] - tr[1]];) MM[tr[14]]--;
              Wr(MM[-tr[54]]++, MM[tr[14]]--)
            }
            return MM[tr[23]]
          }))
        }
        if (iM(80) + "P" in pr && OM(), (0, lM.l)()) {
          function SM(...MM) {
            function rM(...MM) {
              return MM[tr[4]] = tr[1], typeof yr[MM[tr[0]]] === tr[10] ? yr[MM[tr[0]]] = function(...MM) {
                for (Wr(MM[tr[4]] = tr[1], MM[tr[11]] = 'MCkZej,06?LoS<rWX2EiKmuy^)p;(4Rfc%7&./$=N}tF5!wHg{_B9q[v>n~Ax|bhQD`+Y3lU#"]*:TazJsGVOdIP81@', MM[tr[23]] = "" + (MM[tr[0]] || ""), MM[-tr[56]] = MM[tr[23]].length, MM[tr[26]] = [], MM[tr[50]] = tr[0], MM[tr[18]] = tr[0], MM[tr[20]] = -tr[1]), MM[tr[55]] = tr[0]; MM[tr[55]] < MM[-tr[56]]; MM[tr[55]]++)
                  if (MM[tr[15]] = MM[tr[11]].indexOf(MM[tr[23]][MM[tr[55]]]), MM[tr[15]] !== -tr[1])
                    if (MM[tr[20]] < tr[0]) MM[tr[20]] = MM[tr[15]];
                    else {
                      Wr(MM[tr[20]] += MM[tr[15]] * tr[32], MM[tr[50]] |= MM[tr[20]] << MM[tr[18]], MM[tr[18]] += (MM[tr[20]] & tr[34]) > tr[35] ? tr[36] : tr[37]);
                      do {
                        Wr(MM[tr[26]].push(MM[tr[50]] & tr[3]), MM[tr[50]] >>= tr[2], MM[tr[18]] -= tr[2])
                      } while (MM[tr[18]] > tr[20]);
                      MM[tr[20]] = -tr[1]
                    } return MM[tr[20]] > -tr[1] && MM[tr[26]].push((MM[tr[50]] | MM[tr[20]] << MM[tr[18]]) & tr[3]), ur(MM[tr[26]])
              }(lr[MM[tr[0]]]) : yr[MM[tr[0]]]
            }
            MM[tr[4]] = tr[0], Wr(MM[tr[23]] = rM(82) + rM(83) + rM(84) + rM(85) + rM(86), MM[tr[1]] = rM(87) + rM(tr[35]) + rM(89) + rM(90) + rM(tr[32]) + rM(92) + "?", MM[tr[6]] = rM(93) + rM(tr[82]) + rM(95) + rM(tr[99]) + rM(tr[96]), MM[tr[23]].match(MM[tr[1]] + MM[tr[6]]))
          }
          iM(tr[87]) + "7" in pr && SM(), (0, LM[tr[14]])("4 ")
        }
        Qr = tr[0]
      }
    }), hr = function(MM) {
      if (gr(98) in pr && function(...MM) {
          Wr(MM[tr[4]] = tr[0], MM[tr[59]] = function(...rM) {
            return Wr(rM[tr[4]] = tr[24], rM[tr[24]] = {}), rM[tr[6]].length !== rM[tr[0]].length + rM[tr[1]].length ? tr[57] : MM[tr[1]](rM[tr[0]], rM[tr[1]], rM[tr[6]], tr[0], tr[0], tr[0], rM[tr[24]])
          }, MM[tr[1]] = function(...rM) {
            return Wr(rM[tr[4]] = tr[20], rM[tr[58]] = tr[57]), rM[tr[25]] >= rM[tr[6]].length ? tr[101] : rM[tr[18]]["" + rM[tr[24]] + rM[tr[26]] + rM[tr[25]]] !== tr[12] ? rM[tr[18]]["" + rM[tr[24]] + rM[tr[26]] + rM[tr[25]]] : (rM[tr[6]][rM[tr[25]]] === rM[tr[0]][rM[tr[24]]] && rM[tr[6]][rM[tr[25]]] === rM[tr[1]][rM[tr[26]]] ? rM[tr[58]] = MM[tr[1]](rM[tr[0]], rM[tr[1]], rM[tr[6]], rM[tr[24]] + tr[1], rM[tr[26]], rM[tr[25]] + tr[1], rM[tr[18]]) || MM[tr[1]](rM[tr[0]], rM[tr[1]], rM[tr[6]], rM[tr[24]], rM[tr[26]] + tr[1], rM[tr[25]] + tr[1], rM[tr[18]]) : rM[tr[6]][rM[tr[25]]] === rM[tr[0]][rM[tr[24]]] ? rM[tr[58]] = MM[tr[1]](rM[tr[0]], rM[tr[1]], rM[tr[6]], rM[tr[24]] + tr[1], rM[tr[26]], rM[tr[25]] + tr[1], rM[tr[18]]) : rM[tr[6]][rM[tr[25]]] === rM[tr[1]][rM[tr[26]]] && (rM[tr[58]] = MM[tr[1]](rM[tr[0]], rM[tr[1]], rM[tr[6]], rM[tr[24]], rM[tr[26]] + tr[1], rM[tr[25]] + tr[1], rM[tr[18]])), rM[tr[18]]["" + rM[tr[24]] + rM[tr[26]] + rM[tr[25]]] = rM[tr[58]], rM[tr[58]])
          }, console.log(MM[tr[59]]))
        }(), (arguments[gr(99)] > tr[1] && arguments[tr[1]] !== tr[12] ? arguments[tr[1]] : tr[57]) && (0, BM[tr[50]])(MM)) {
        function iM(...MM) {
          for (Wr(MM[tr[4]] = tr[1], MM[tr[1]] = '8/_96d}"Eu|*Am(QIaBDZz;q$&4Lv#xjJi^n,`]gNWV.=%eb2UFkCP+OwH>Go?!p0Kl31Y7t)MXc5sSf:TR~h[{@ry<', MM[tr[60]] = "" + (MM[tr[0]] || ""), MM[tr[27]] = MM[tr[60]].length, MM[tr[26]] = [], MM[tr[50]] = tr[0], MM[tr[8]] = tr[0], MM[tr[31]] = -tr[1]), MM[tr[61]] = tr[0]; MM[tr[61]] < MM[tr[27]]; MM[tr[61]]++)
            if (MM[tr[15]] = MM[tr[1]].indexOf(MM[tr[60]][MM[tr[61]]]), MM[tr[15]] !== -tr[1])
              if (MM[tr[31]] < tr[0]) MM[tr[31]] = MM[tr[15]];
              else {
                Wr(MM[tr[31]] += MM[tr[15]] * tr[32], MM[tr[50]] |= MM[tr[31]] << MM[tr[8]], MM[tr[8]] += (MM[tr[31]] & tr[34]) > tr[35] ? tr[36] : tr[37]);
                do {
                  Wr(MM[tr[26]].push(MM[tr[50]] & tr[3]), MM[tr[50]] >>= tr[2], MM[tr[8]] -= tr[2])
                } while (MM[tr[8]] > tr[20]);
                MM[tr[31]] = -tr[1]
              } return MM[tr[31]] > -tr[1] && MM[tr[26]].push((MM[tr[50]] | MM[tr[31]] << MM[tr[8]]) & tr[3]), ur(MM[tr[26]])
        }

        function OM(...MM) {
          return MM[tr[4]] = tr[1], typeof yr[MM[tr[0]]] === tr[10] ? yr[MM[tr[0]]] = iM(lr[MM[tr[0]]]) : yr[MM[tr[0]]]
        }

        function SM(...MM) {
          MM[tr[4]] = tr[0],
            function(MM) {
              var rM, iM, SM, jM;

              function aM(...MM) {
                for (Wr(MM[tr[4]] = tr[1], MM[tr[29]] = [], MM[tr[67]] = tr[0], MM[tr[24]] = MM[tr[0]].length, MM[tr[14]] = tr[12], MM[tr[68]] = tr[12]); MM[tr[67]] < MM[tr[24]];) Wr(MM[tr[14]] = MM[tr[0]].charCodeAt(MM[tr[67]]++), MM[tr[14]] >= tr[73] && MM[tr[14]] <= tr[114] && MM[tr[67]] < MM[tr[24]] ? (MM[tr[68]] = MM[tr[0]].charCodeAt(MM[tr[67]]++), (64512 & MM[tr[68]]) == tr[74] ? MM[tr[29]].push(((MM[tr[14]] & tr[69]) << tr[72]) + (MM[tr[68]] & tr[69]) + tr[71]) : (MM[tr[29]].push(MM[tr[14]]), MM[tr[67]]--)) : MM[tr[29]].push(MM[tr[14]]));
                return MM[tr[29]]
              }

              function PM(...MM) {
                if (MM[tr[4]] = tr[1], MM[tr[0]] >= tr[73] && MM[tr[0]] <= tr[115]) {
                  function rM(...MM) {
                    for (Wr(MM[tr[4]] = tr[1], MM[-tr[7]] = '80Hg&xSfV2A4U?$n"rO{@~`[>o|h,FLq;5Bw#s}.Jm1]lvMjbT/WE*N6adXDtR^i(pu=PQ+!y<Ce:)7Y%czI_G9KkZ3', MM[-tr[75]] = "" + (MM[tr[0]] || ""), MM[tr[27]] = MM[-tr[75]].length, MM[tr[14]] = [], MM[tr[50]] = tr[0], MM[tr[77]] = tr[0], MM[tr[20]] = -tr[1]), MM[-tr[76]] = tr[0]; MM[-tr[76]] < MM[tr[27]]; MM[-tr[76]]++)
                      if (MM[tr[15]] = MM[-tr[7]].indexOf(MM[-tr[75]][MM[-tr[76]]]), MM[tr[15]] !== -tr[1])
                        if (MM[tr[20]] < tr[0]) MM[tr[20]] = MM[tr[15]];
                        else {
                          Wr(MM[tr[20]] += MM[tr[15]] * tr[32], MM[tr[50]] |= MM[tr[20]] << MM[tr[77]], MM[tr[77]] += (MM[tr[20]] & tr[34]) > tr[35] ? tr[36] : tr[37]);
                          do {
                            Wr(MM[tr[14]].push(MM[tr[50]] & tr[3]), MM[tr[50]] >>= tr[2], MM[tr[77]] -= tr[2])
                          } while (MM[tr[77]] > tr[20]);
                          MM[tr[20]] = -tr[1]
                        } return MM[tr[20]] > -tr[1] && MM[tr[14]].push((MM[tr[50]] | MM[tr[20]] << MM[tr[77]]) & tr[3]), ur(MM[tr[14]])
                  }

                  function iM(...MM) {
                    return MM[tr[4]] = tr[1], typeof yr[MM[tr[0]]] === tr[10] ? yr[MM[tr[0]]] = rM(lr[MM[tr[0]]]) : yr[MM[tr[0]]]
                  }
                  throw Error(OM(tr[58]) + OM(tr[42]) + OM(103) + MM[tr[0]].toString(tr[108]).toUpperCase() + (OM(104) + iM(105) + iM(106) + iM(tr[5])))
                }
              }

              function nM(...MM) {
                return MM[tr[4]] = tr[6], rM(MM[tr[0]] >> MM[tr[1]] & tr[17] | tr[78])
              }

              function QM(MM) {
                var iM;
                return (4294967168 & MM) == tr[0] ? rM(MM) : (iM = "", (4294965248 & MM) == tr[0] ? iM = rM(MM >> tr[18] & tr[52] | tr[86]) : (4294901760 & MM) == tr[0] ? Wr(PM(MM), iM = rM(MM >> tr[21] & tr[44] | tr[89]), iM += nM(MM, tr[18])) : (4292870144 & MM) == tr[0] && Wr(iM = rM(MM >> tr[79] & tr[20] | tr[93]), iM += nM(MM, tr[21]), iM += nM(MM, tr[18])), iM += rM(MM & tr[17] | tr[78]))
              }

              function zM() {
                var MM;
                if (jM >= SM) throw Error(OM(tr[88]));
                if (Wr(MM = iM[jM] & tr[3], jM++), (MM & tr[86]) == tr[78]) return MM & tr[17];
                throw Error(function(...MM) {
                  return MM[tr[4]] = tr[1], typeof yr[MM[tr[0]]] === tr[10] ? yr[MM[tr[0]]] = function(...MM) {
                    for (Wr(MM[tr[4]] = tr[1], MM[tr[11]] = '8v^|kg]"~`+ap!6KC@U$>{<)MAluE%.5LRbX*3=YF?fyQj1Bt2H[J}V9;/wSI4hNne&qWsx#,iDcOo0ZzdPT7(:Gr_m', MM[tr[81]] = "" + (MM[tr[0]] || ""), MM[tr[83]] = MM[tr[81]].length, MM[tr[14]] = [], MM[tr[82]] = tr[0], MM[tr[85]] = tr[0], MM[tr[20]] = -tr[1]), MM[tr[55]] = tr[0]; MM[tr[55]] < MM[tr[83]]; MM[tr[55]]++)
                      if (MM[tr[84]] = MM[tr[11]].indexOf(MM[tr[81]][MM[tr[55]]]), MM[tr[84]] !== -tr[1])
                        if (MM[tr[20]] < tr[0]) MM[tr[20]] = MM[tr[84]];
                        else {
                          Wr(MM[tr[20]] += MM[tr[84]] * tr[32], MM[tr[82]] |= MM[tr[20]] << MM[tr[85]], MM[tr[85]] += (MM[tr[20]] & tr[34]) > tr[35] ? tr[36] : tr[37]);
                          do {
                            Wr(MM[tr[14]].push(MM[tr[82]] & tr[3]), MM[tr[82]] >>= tr[2], MM[tr[85]] -= tr[2])
                          } while (MM[tr[85]] > tr[20]);
                          MM[tr[20]] = -tr[1]
                        } return MM[tr[20]] > -tr[1] && MM[tr[14]].push((MM[tr[82]] | MM[tr[20]] << MM[tr[85]]) & tr[3]), ur(MM[tr[14]])
                  }(lr[MM[tr[0]]]) : yr[MM[tr[0]]]
                }(109))
              }

              function LM(...MM) {
                if (Wr(MM[tr[4]] = tr[0], MM[-tr[87]] = tr[12], MM[tr[1]] = tr[12], MM[tr[94]] = tr[12], MM[tr[50]] = tr[12], MM[tr[43]] = tr[12]), jM > SM) throw Error(OM(tr[88]));
                if (jM == SM) return tr[57];
                if (Wr(MM[-tr[87]] = iM[jM] & tr[3], jM++), (MM[-tr[87]] & tr[78]) == tr[0]) return MM[-tr[87]];
                if ((MM[-tr[87]] & tr[89]) == tr[86]) {
                  if (Wr(MM[tr[1]] = zM(), MM[tr[43]] = (MM[-tr[87]] & tr[52]) << tr[18] | MM[tr[1]]), MM[tr[43]] >= tr[78]) return MM[tr[43]];
                  {
                    function rM(...MM) {
                      for (Wr(MM[tr[4]] = tr[1], MM[tr[11]] = '&<84",6x:>bq;(AsdY_^v1)u$Q~UhRglB.I]em}*P#?Z2|pMWtf=HkX!wa7CD{VJcE`TK[L0i39j+NFrSy/O@nGoz5%', MM[tr[90]] = "" + (MM[tr[0]] || ""), MM[tr[24]] = MM[tr[90]].length, MM[-tr[92]] = [], MM[tr[50]] = tr[0], MM[tr[8]] = tr[0], MM[tr[20]] = -tr[1]), MM[-tr[91]] = tr[0]; MM[-tr[91]] < MM[tr[24]]; MM[-tr[91]]++)
                        if (MM[tr[15]] = MM[tr[11]].indexOf(MM[tr[90]][MM[-tr[91]]]), MM[tr[15]] !== -tr[1])
                          if (MM[tr[20]] < tr[0]) MM[tr[20]] = MM[tr[15]];
                          else {
                            Wr(MM[tr[20]] += MM[tr[15]] * tr[32], MM[tr[50]] |= MM[tr[20]] << MM[tr[8]], MM[tr[8]] += (MM[tr[20]] & tr[34]) > tr[35] ? tr[36] : tr[37]);
                            do {
                              Wr(MM[-tr[92]].push(MM[tr[50]] & tr[3]), MM[tr[50]] >>= tr[2], MM[tr[8]] -= tr[2])
                            } while (MM[tr[8]] > tr[20]);
                            MM[tr[20]] = -tr[1]
                          } return MM[tr[20]] > -tr[1] && MM[-tr[92]].push((MM[tr[50]] | MM[tr[20]] << MM[tr[8]]) & tr[3]), ur(MM[-tr[92]])
                    }

                    function aM(MM) {
                      return typeof yr[MM] === tr[10] ? yr[MM] = rM(lr[MM]) : yr[MM]
                    }
                    throw Error(aM(110))
                  }
                }
                if ((MM[-tr[87]] & tr[93]) == tr[89]) {
                  if (Wr(MM[tr[1]] = zM(), MM[tr[94]] = zM(), MM[tr[43]] = (MM[-tr[87]] & tr[44]) << tr[21] | MM[tr[1]] << tr[18] | MM[tr[94]]), MM[tr[43]] >= 2048) return PM(MM[tr[43]]), MM[tr[43]];
                  {
                    function nM(MM) {
                      var rM, iM, OM, SM, jM, aM, PM;
                      for (Wr(rM = "" + (MM || ""), iM = rM.length, OM = [], SM = tr[0], jM = tr[0], aM = -tr[1]), PM = tr[0]; PM < iM; PM++) {
                        var nM = 'E"@~}5d?Y#HVK(zOetkX;IQ$M{A1!7D=nx^*4lbuR8msyB_,pWhJ&wvSi]>9|cgjFP)CUGqT.[f32L0Zo6ra/+:%`<N'.indexOf(rM[PM]);
                        if (nM !== -tr[1])
                          if (aM < tr[0]) aM = nM;
                          else {
                            Wr(aM += nM * tr[32], SM |= aM << jM, jM += (aM & tr[34]) > tr[35] ? tr[36] : tr[37]);
                            do {
                              Wr(OM.push(SM & tr[3]), SM >>= tr[2], jM -= tr[2])
                            } while (jM > tr[20]);
                            aM = -tr[1]
                          }
                      }
                      return aM > -tr[1] && OM.push((SM | aM << jM) & tr[3]), ur(OM)
                    }

                    function QM(...MM) {
                      return MM[tr[4]] = tr[1], typeof yr[MM[tr[0]]] === tr[10] ? yr[MM[tr[0]]] = nM(lr[MM[tr[0]]]) : yr[MM[tr[0]]]
                    }
                    throw Error(QM(111))
                  }
                }
                if ((248 & MM[-tr[87]]) == tr[93] && (Wr(MM[tr[1]] = zM(), MM[tr[94]] = zM(), MM[tr[50]] = zM(), MM[tr[43]] = (MM[-tr[87]] & tr[20]) << tr[79] | MM[tr[1]] << tr[21] | MM[tr[94]] << tr[18] | MM[tr[50]]), MM[tr[43]] >= tr[71] && MM[tr[43]] <= 1114111)) return MM[tr[43]];
                throw Error(OM(tr[94]))
              }
              rM = String.fromCharCode, Wr(iM = void 0, SM = void 0, jM = void 0), Wr(MM.version = function(...MM) {
                return MM[tr[4]] = tr[1], typeof yr[MM[tr[0]]] === tr[10] ? yr[MM[tr[0]]] = function(MM) {
                  var rM, iM, OM, SM, jM, aM, PM;
                  for (Wr(rM = "" + (MM || ""), iM = rM.length, OM = [], SM = tr[0], jM = tr[0], aM = -tr[1]), PM = tr[0]; PM < iM; PM++) {
                    var nM = 'G?`N{(58v1sWa3$>nTHlY,z)xV_Z%Pco:^!mDf&~ECB[eb=uw.K;It<hF4Q#*p/}qdJy9Mj"Ug@X27S6AR|Lkr0O+i]'.indexOf(rM[PM]);
                    if (nM !== -tr[1])
                      if (aM < tr[0]) aM = nM;
                      else {
                        Wr(aM += nM * tr[32], SM |= aM << jM, jM += (aM & tr[34]) > tr[35] ? tr[36] : tr[37]);
                        do {
                          Wr(OM.push(SM & tr[3]), SM >>= tr[2], jM -= tr[2])
                        } while (jM > tr[20]);
                        aM = -tr[1]
                      }
                  }
                  return aM > -tr[1] && OM.push((SM | aM << jM) & tr[3]), ur(OM)
                }(lr[MM[tr[0]]]) : yr[MM[tr[0]]]
              }(113), MM.encode = function(...MM) {
                for (Wr(MM[tr[4]] = tr[1], MM[tr[1]] = aM(MM[tr[0]]), MM[-tr[43]] = MM[tr[1]].length, MM[tr[80]] = -tr[1], MM[tr[26]] = tr[12], MM[tr[25]] = ""); ++MM[tr[80]] < MM[-tr[43]];) Wr(MM[tr[26]] = MM[tr[1]][MM[tr[80]]], MM[tr[25]] += QM(MM[tr[26]]));
                return MM[tr[25]]
              }, MM.decode = function(...MM) {
                for (Wr(MM[tr[4]] = tr[1], iM = aM(MM[tr[0]]), SM = iM.length, jM = tr[0], MM[tr[11]] = [], MM[tr[95]] = tr[12]);
                  (MM[tr[95]] = LM()) !== tr[57];) MM[tr[11]].push(MM[tr[95]]);
                return function(...MM) {
                  for (Wr(MM[tr[4]] = tr[1], MM[-tr[70]] = MM[tr[0]].length, MM[tr[6]] = -tr[1], MM[tr[24]] = tr[12], MM[tr[14]] = ""); ++MM[tr[6]] < MM[-tr[70]];) MM[tr[24]] = MM[tr[0]][MM[tr[6]]], MM[tr[24]] > tr[117] && Wr(MM[tr[24]] -= tr[71], MM[tr[14]] += rM(MM[tr[24]] >>> tr[72] & tr[69] | tr[73]), MM[tr[24]] = tr[74] | MM[tr[24]] & tr[69]), MM[tr[14]] += rM(MM[tr[24]]);
                  return MM[tr[14]]
                }(MM[tr[11]])
              })
            }(typeof exports === OM(114) + function(...MM) {
              return MM[tr[4]] = tr[1], typeof yr[MM[tr[0]]] === tr[10] ? yr[MM[tr[0]]] = function(...MM) {
                for (Wr(MM[tr[4]] = tr[1], MM[tr[11]] = 'g;vSqABN[T}j,0x8rC&IDFQs{?Gb#9%^7!$6.*)|hl1nOJ>c(iz~y]@"u`PtLZmpaXMHoeW=R+:d<w5k/3KEf2VU4_Y', MM[-tr[62]] = "" + (MM[tr[0]] || ""), MM[-tr[63]] = MM[-tr[62]].length, MM[tr[26]] = [], MM[tr[65]] = tr[0], MM[-tr[66]] = tr[0], MM[tr[20]] = -tr[1]), MM[tr[55]] = tr[0]; MM[tr[55]] < MM[-tr[63]]; MM[tr[55]]++)
                  if (MM[tr[64]] = MM[tr[11]].indexOf(MM[-tr[62]][MM[tr[55]]]), MM[tr[64]] !== -tr[1])
                    if (MM[tr[20]] < tr[0]) MM[tr[20]] = MM[tr[64]];
                    else {
                      Wr(MM[tr[20]] += MM[tr[64]] * tr[32], MM[tr[65]] |= MM[tr[20]] << MM[-tr[66]], MM[-tr[66]] += (MM[tr[20]] & tr[34]) > tr[35] ? tr[36] : tr[37]);
                      do {
                        Wr(MM[tr[26]].push(MM[tr[65]] & tr[3]), MM[tr[65]] >>= tr[2], MM[-tr[66]] -= tr[2])
                      } while (MM[-tr[66]] > tr[20]);
                      MM[tr[20]] = -tr[1]
                    } return MM[tr[20]] > -tr[1] && MM[tr[26]].push((MM[tr[65]] | MM[tr[20]] << MM[-tr[66]]) & tr[3]), ur(MM[tr[26]])
              }(lr[MM[tr[0]]]) : yr[MM[tr[0]]]
            }(tr[104]) ? this.utf8 = {} : exports)
        }
        return void(OM(100) + tr[14] in pr && SM())
      }
      const rM = window[gr(116)];
      if (typeof rM !== function(MM) {
          return typeof yr[MM] === tr[10] ? yr[MM] = function(MM) {
            var rM, iM, OM, SM, jM, aM, PM;
            for (Wr(rM = "" + (MM || ""), iM = rM.length, OM = [], SM = tr[0], jM = tr[0], aM = -tr[1]), PM = tr[0]; PM < iM; PM++) {
              var nM = '1+Hv5}pztMO{G%AQPR/$JIW7.:*`f]eUwhd)~ui#b=lqom?gry,N>cj^C3k@9K!B&X4[S_V2En0DYZ|(86T<"xaLsF;'.indexOf(rM[PM]);
              if (nM !== -tr[1])
                if (aM < tr[0]) aM = nM;
                else {
                  Wr(aM += nM * tr[32], SM |= aM << jM, jM += (aM & tr[34]) > tr[35] ? tr[36] : tr[37]);
                  do {
                    Wr(OM.push(SM & tr[3]), SM >>= tr[2], jM -= tr[2])
                  } while (jM > tr[20]);
                  aM = -tr[1]
                }
            }
            return aM > -tr[1] && OM.push((SM | aM << jM) & tr[3]), ur(OM)
          }(lr[MM]) : yr[MM]
        }(117) + "on" || MM instanceof rM || (0, oM.F)(MM)) {
        function jM(...MM) {
          for (Wr(MM[tr[4]] = tr[1], MM[tr[98]] = '(WDClPay&_]J^?,6GEKqU{N<+`gv01I9FHYu|LRT5%tB;n/2oc8[wZx)4VbApjkf*:."O=demQrSM@#!7~$zisX>3}h', MM[tr[23]] = "" + (MM[tr[0]] || ""), MM[tr[97]] = MM[tr[23]].length, MM[-tr[96]] = [], MM[tr[25]] = tr[0], MM[tr[8]] = tr[0], MM[tr[90]] = -tr[1]), MM[tr[2]] = tr[0]; MM[tr[2]] < MM[tr[97]]; MM[tr[2]]++)
            if (MM[tr[46]] = MM[tr[98]].indexOf(MM[tr[23]][MM[tr[2]]]), MM[tr[46]] !== -tr[1])
              if (MM[tr[90]] < tr[0]) MM[tr[90]] = MM[tr[46]];
              else {
                Wr(MM[tr[90]] += MM[tr[46]] * tr[32], MM[tr[25]] |= MM[tr[90]] << MM[tr[8]], MM[tr[8]] += (MM[tr[90]] & tr[34]) > tr[35] ? tr[36] : tr[37]);
                do {
                  Wr(MM[-tr[96]].push(MM[tr[25]] & tr[3]), MM[tr[25]] >>= tr[2], MM[tr[8]] -= tr[2])
                } while (MM[tr[8]] > tr[20]);
                MM[tr[90]] = -tr[1]
              } return MM[tr[90]] > -tr[1] && MM[-tr[96]].push((MM[tr[25]] | MM[tr[90]] << MM[tr[8]]) & tr[3]), ur(MM[-tr[96]])
        }

        function aM(...MM) {
          return MM[tr[4]] = tr[1], typeof yr[MM[tr[0]]] === tr[10] ? yr[MM[tr[0]]] = jM(lr[MM[tr[0]]]) : yr[MM[tr[0]]]
        }
        if (MM[aM(118) + aM(tr[59])] === tr[57]) {
          function PM(...MM) {
            function rM(...MM) {
              return MM[tr[4]] = tr[1], typeof yr[MM[tr[0]]] === tr[10] ? yr[MM[tr[0]]] = function(...MM) {
                for (Wr(MM[tr[4]] = tr[1], MM[tr[99]] = '(ANTKn2Qh>)go[|*m0!F&ZqxiB/L47sSC%vM,Jz$Wk}6y"+IG@3;YU5R8dPc]jurb~=tp.VX{1D^wE?HO_<l#9a`fe:', MM[tr[23]] = "" + (MM[tr[0]] || ""), MM[tr[100]] = MM[tr[23]].length, MM[tr[14]] = [], MM[tr[50]] = tr[0], MM[tr[18]] = tr[0], MM[tr[31]] = -tr[1]), MM[tr[55]] = tr[0]; MM[tr[55]] < MM[tr[100]]; MM[tr[55]]++)
                  if (MM[tr[15]] = MM[tr[99]].indexOf(MM[tr[23]][MM[tr[55]]]), MM[tr[15]] !== -tr[1])
                    if (MM[tr[31]] < tr[0]) MM[tr[31]] = MM[tr[15]];
                    else {
                      Wr(MM[tr[31]] += MM[tr[15]] * tr[32], MM[tr[50]] |= MM[tr[31]] << MM[tr[18]], MM[tr[18]] += (MM[tr[31]] & tr[34]) > tr[35] ? tr[36] : tr[37]);
                      do {
                        Wr(MM[tr[14]].push(MM[tr[50]] & tr[3]), MM[tr[50]] >>= tr[2], MM[tr[18]] -= tr[2])
                      } while (MM[tr[18]] > tr[20]);
                      MM[tr[31]] = -tr[1]
                    } return MM[tr[31]] > -tr[1] && MM[tr[14]].push((MM[tr[50]] | MM[tr[31]] << MM[tr[18]]) & tr[3]), ur(MM[tr[14]])
              }(lr[MM[tr[0]]]) : yr[MM[tr[0]]]
            }

            function iM(...MM) {
              if (MM[tr[4]] = tr[1], !MM[tr[0]]) return -tr[1];
              const rM = iM(MM[tr[0]].left),
                OM = iM(MM[tr[0]].right),
                SM = Math.abs(rM - OM);
              if (rM === 1 / 0 || OM === 1 / 0 || SM > tr[1]) return 1 / 0;
              return Math.max(rM, OM) + tr[1]
            }
            MM[tr[4]] = tr[0], window[rM(tr[70]) + rM(122) + rM(123) + "_"] = {
              buildCharacterMap: function(MM) {
                const rM = {};
                for (let iM of MM.replace(/[^w]/g, "").toLowerCase()) rM[iM] = rM[iM] + tr[1] || tr[1];
                return rM
              },
              isAnagrams: function(...MM) {
                MM[tr[4]] = tr[6];
                const rM = buildCharMap(MM[tr[0]]),
                  iM = buildCharMap(MM[tr[1]]);
                for (let OM in rM)
                  if (rM[OM] !== iM[OM]) return tr[57];
                return Object.keys(rM).length !== Object.keys(iM).length ? tr[57] : tr[101]
              },
              isBalanced: function(...MM) {
                return MM[tr[4]] = tr[1], iM(MM[tr[0]]) !== 1 / 0
              },
              getHeightBalanced: iM
            }
          }
          aM(tr[56]) in pr && PM(), (0, LM[tr[14]])("2 " + (0, mM[tr[27]])(MM))
        } else {
          function nM(MM) {
            var rM, iM, OM, SM, jM, aM, PM;
            for (Wr(rM = "" + (MM || ""), iM = rM.length, OM = [], SM = tr[0], jM = tr[0], aM = -tr[1]), PM = tr[0]; PM < iM; PM++) {
              var nM = '=cZQCGToBzmO2%8t9$gD<Y5Ue04;~>"w6[iFvLI!dPaMq&+:H3r/7_.,lX{N(JbAKS?@pR}1jh]snx*uV^k|Wy`f)E#'.indexOf(rM[PM]);
              if (nM !== -tr[1])
                if (aM < tr[0]) aM = nM;
                else {
                  Wr(aM += nM * tr[32], SM |= aM << jM, jM += (aM & tr[34]) > tr[35] ? tr[36] : tr[37]);
                  do {
                    Wr(OM.push(SM & tr[3]), SM >>= tr[2], jM -= tr[2])
                  } while (jM > tr[20]);
                  aM = -tr[1]
                }
            }
            return aM > -tr[1] && OM.push((SM | aM << jM) & tr[3]), ur(OM)
          }

          function QM(...MM) {
            return MM[tr[4]] = tr[1], typeof yr[MM[tr[0]]] === tr[10] ? yr[MM[tr[0]]] = nM(lr[MM[tr[0]]]) : yr[MM[tr[0]]]
          }

          function zM(...MM) {
            function rM() {}
            MM[tr[4]] = tr[0], Wr(MM[-tr[103]] = function(MM, iM) {
              var OM, SM, jM, aM, PM, nM = tr[0];
              for (Wr(OM = tr[0], SM = new rM(tr[0]), jM = SM, aM = MM, PM = iM); aM !== tr[102] || PM !== tr[102];) Wr(OM = (aM ? aM.val : tr[0]) + (PM ? PM.val : tr[0]) + nM, nM = Math.floor(OM / tr[72]), jM.next = new rM(OM % tr[72]), jM = jM.next, aM = aM ? aM.next : tr[102], PM = PM ? PM.next : tr[102]);
              return nM && (jM.next = new rM(nM)), SM.next
            }, console.log(MM[-tr[103]]))
          }
          if (QM(124) in pr && zM(), dr(MM) < tr[72]) {
            function HM(...MM) {
              Wr(MM[tr[4]] = tr[0], MM[tr[11]] = function(...MM) {
                function rM(...MM) {
                  return MM[tr[4]] = tr[6], jM(OM(aM(MM[tr[0]]), aM(MM[tr[1]])))
                }

                function iM(...MM) {
                  return MM[tr[4]] = tr[24],
                    function(MM, rM) {
                      var iM, OM, SM, jM, aM, PM, nM, QM, zM = rM.length;
                      for (iM = Array(), OM = Array(Math.ceil(MM.length / tr[6])), aM = tr[0]; aM < OM.length; aM++) OM[aM] = MM.charCodeAt(aM * tr[6]) << tr[2] | MM.charCodeAt(aM * tr[6] + tr[1]);
                      for (; OM.length > tr[0];) {
                        for (Wr(QM = Array(), nM = tr[0]), aM = tr[0]; aM < OM.length; aM++) Wr(nM = (nM << tr[108]) + OM[aM], PM = Math.floor(nM / zM), nM -= PM * zM), (QM.length > tr[0] || PM > tr[0]) && (QM[QM.length] = PM);
                        Wr(iM[iM.length] = nM, OM = QM)
                      }
                      for (SM = "", aM = iM.length - tr[1]; aM >= tr[0]; aM--) SM += rM.charAt(iM[aM]);
                      for (jM = Math.ceil(MM.length * tr[2] / (Math.log(rM.length) / Math.log(tr[6]))), aM = SM.length; aM < jM; aM++) SM = rM[tr[0]] + SM;
                      return SM
                    }(OM(aM(MM[tr[0]]), aM(MM[tr[1]])), MM[tr[6]])
                }

                function OM(MM, rM) {
                  var iM, OM, SM;
                  (iM = PM(MM)).length > tr[108] && (iM = yM(iM, MM.length * tr[2]));
                  var jM = Array(tr[108]),
                    aM = Array(tr[108]);
                  for (OM = tr[0]; OM < tr[108]; OM++) Wr(jM[OM] = 909522486 ^ iM[OM], aM[OM] = 1549556828 ^ iM[OM]);
                  return SM = yM(jM.concat(PM(rM)), tr[109] + rM.length * tr[2]), nM(yM(aM.concat(SM), Rr(function(...MM) {
                    return MM[tr[4]] = tr[1], typeof yr[MM[tr[0]]] === tr[10] ? yr[MM[tr[0]]] = function(...MM) {
                      for (Wr(MM[tr[4]] = tr[1], MM[tr[1]] = '3jXUlsd=74y;^.Be,O|!Dm:[F/&A`Ex8Kki(~I]2RYSf@rGcw*Cvagpq})b"{zou6_5#h1?+LNJtWQ>TZ$VP9n<%H0M', MM[tr[23]] = "" + (MM[tr[0]] || ""), MM[tr[27]] = MM[tr[23]].length, MM[tr[26]] = [], MM[tr[25]] = tr[0], MM[tr[107]] = tr[0], MM[tr[31]] = -tr[1]), MM[tr[55]] = tr[0]; MM[tr[55]] < MM[tr[27]]; MM[tr[55]]++)
                        if (MM[tr[46]] = MM[tr[1]].indexOf(MM[tr[23]][MM[tr[55]]]), MM[tr[46]] !== -tr[1])
                          if (MM[tr[31]] < tr[0]) MM[tr[31]] = MM[tr[46]];
                          else {
                            Wr(MM[tr[31]] += MM[tr[46]] * tr[32], MM[tr[25]] |= MM[tr[31]] << MM[tr[107]], MM[tr[107]] += (MM[tr[31]] & tr[34]) > tr[35] ? tr[36] : tr[37]);
                            do {
                              Wr(MM[tr[26]].push(MM[tr[25]] & tr[3]), MM[tr[25]] >>= tr[2], MM[tr[107]] -= tr[2])
                            } while (MM[tr[107]] > tr[20]);
                            MM[tr[31]] = -tr[1]
                          } return MM[tr[31]] > -tr[1] && MM[tr[26]].push((MM[tr[25]] | MM[tr[31]] << MM[tr[107]]) & tr[3]), ur(MM[tr[26]])
                    }(lr[MM[tr[0]]]) : yr[MM[tr[0]]]
                  }(tr[97]), tr[109], 256)))
                }

                function SM(...rM) {
                  function OM(MM) {
                    return typeof yr[MM] === tr[10] ? yr[MM] = function(MM) {
                      var rM, iM, OM, SM, jM, aM, PM;
                      for (Wr(rM = "" + (MM || ""), iM = rM.length, OM = [], SM = tr[0], jM = tr[0], aM = -tr[1]), PM = tr[0]; PM < iM; PM++) {
                        var nM = 'U|0Qb<z"VmH^[GT#PYqyo;JA7?ZXpxs.!i$h,3O@8Nwa9K:%5_M*B&vr1{tnel`)I/4F2jSCD}d(u]L~EW6kcf+>Rg='.indexOf(rM[PM]);
                        if (nM !== -tr[1])
                          if (aM < tr[0]) aM = nM;
                          else {
                            Wr(aM += nM * tr[32], SM |= aM << jM, jM += (aM & tr[34]) > tr[35] ? tr[36] : tr[37]);
                            do {
                              Wr(OM.push(SM & tr[3]), SM >>= tr[2], jM -= tr[2])
                            } while (jM > tr[20]);
                            aM = -tr[1]
                          }
                      }
                      return aM > -tr[1] && OM.push((SM | aM << jM) & tr[3]), ur(OM)
                    }(lr[MM]) : yr[MM]
                  }
                  rM[tr[4]] = tr[1];
                  try {
                    MM[-tr[63]]
                  } catch (iM) {
                    MM[-tr[63]] = tr[0]
                  }
                  for (Wr(rM[tr[11]] = MM[-tr[63]] ? OM(tr[110]) + OM(132) + OM(133) : OM(tr[110]) + OM(tr[95]) + OM(tr[33]), rM[tr[23]] = "", rM[tr[27]] = tr[12]), rM[tr[26]] = tr[0]; rM[tr[26]] < rM[tr[0]].length; rM[tr[26]]++) Wr(rM[tr[27]] = rM[tr[0]].charCodeAt(rM[tr[26]]), rM[tr[23]] += rM[tr[11]].charAt(rM[tr[27]] >>> tr[26] & tr[44]) + rM[tr[11]].charAt(rM[tr[27]] & tr[44]));
                  return rM[tr[23]]
                }

                function jM(rM) {
                  var iM, OM, SM, aM;

                  function PM(...MM) {
                    return MM[tr[4]] = tr[1], typeof yr[MM[tr[0]]] === tr[10] ? yr[MM[tr[0]]] = function(...MM) {
                      for (Wr(MM[tr[4]] = tr[1], MM[tr[1]] = 'T16"^)>4]#yB?K;j/q{EaiQnuxSHJ_LhslVt`cM.57R+<*dzP!kY~%o0:p(v|93AXwW=gN}mCIFGUD&[2f8O@eZb$r,', MM[-tr[64]] = "" + (MM[tr[0]] || ""), MM[tr[111]] = MM[-tr[64]].length, MM[tr[14]] = [], MM[-tr[82]] = tr[0], MM[-tr[113]] = tr[0], MM[tr[31]] = -tr[1]), MM[tr[2]] = tr[0]; MM[tr[2]] < MM[tr[111]]; MM[tr[2]]++)
                        if (MM[tr[112]] = MM[tr[1]].indexOf(MM[-tr[64]][MM[tr[2]]]), MM[tr[112]] !== -tr[1])
                          if (MM[tr[31]] < tr[0]) MM[tr[31]] = MM[tr[112]];
                          else {
                            Wr(MM[tr[31]] += MM[tr[112]] * tr[32], MM[-tr[82]] |= MM[tr[31]] << MM[-tr[113]], MM[-tr[113]] += (MM[tr[31]] & tr[34]) > tr[35] ? tr[36] : tr[37]);
                            do {
                              Wr(MM[tr[14]].push(MM[-tr[82]] & tr[3]), MM[-tr[82]] >>= tr[2], MM[-tr[113]] -= tr[2])
                            } while (MM[-tr[113]] > tr[20]);
                            MM[tr[31]] = -tr[1]
                          } return MM[tr[31]] > -tr[1] && MM[tr[14]].push((MM[-tr[82]] | MM[tr[31]] << MM[-tr[113]]) & tr[3]), ur(MM[tr[14]])
                    }(lr[MM[tr[0]]]) : yr[MM[tr[0]]]
                  }
                  try {
                    MM[tr[23]]
                  } catch (jM) {
                    MM[tr[23]] = ""
                  }
                  for (Wr(iM = PM(136) + PM(tr[112]) + PM(138) + PM(139) + PM(140), OM = "", SM = rM.length), aM = tr[0]; aM < SM; aM += tr[24]) {
                    var nM, QM = rM.charCodeAt(aM) << tr[108] | (aM + tr[1] < SM ? rM.charCodeAt(aM + tr[1]) << tr[2] : tr[0]) | (aM + tr[6] < SM ? rM.charCodeAt(aM + tr[6]) : tr[0]);
                    for (nM = tr[0]; nM < tr[26]; nM++) aM * tr[2] + nM * tr[18] > rM.length * tr[2] ? OM += MM[tr[23]] : OM += iM.charAt(QM >>> tr[18] * (tr[24] - nM) & tr[17])
                  }
                  return OM
                }

                function aM(...MM) {
                  var rM, iM;
                  for (Wr(MM[tr[4]] = tr[1], MM[tr[116]] = "", MM[tr[6]] = -tr[1]); ++MM[tr[6]] < MM[tr[0]].length;) Wr(rM = MM[tr[0]].charCodeAt(MM[tr[6]]), iM = MM[tr[6]] + tr[1] < MM[tr[0]].length ? MM[tr[0]].charCodeAt(MM[tr[6]] + tr[1]) : tr[0]), tr[73] <= rM && rM <= tr[114] && tr[74] <= iM && iM <= tr[115] && Wr(rM = tr[71] + ((rM & tr[69]) << tr[72]) + (iM & tr[69]), MM[tr[6]]++), rM <= tr[106] ? MM[tr[116]] += String.fromCharCode(rM) : rM <= 2047 ? MM[tr[116]] += String.fromCharCode(tr[86] | rM >>> tr[18] & tr[52], tr[78] | rM & tr[17]) : rM <= tr[117] ? MM[tr[116]] += String.fromCharCode(tr[89] | rM >>> tr[21] & tr[44], tr[78] | rM >>> tr[18] & tr[17], tr[78] | rM & tr[17]) : rM <= 2097151 && (MM[tr[116]] += String.fromCharCode(tr[93] | rM >>> tr[79] & tr[20], tr[78] | rM >>> tr[21] & tr[17], tr[78] | rM >>> tr[18] & tr[17], tr[78] | rM & tr[17]));
                  return MM[tr[116]]
                }

                function PM(...MM) {
                  for (Wr(MM[tr[4]] = tr[1], MM[tr[118]] = Array(MM[tr[0]].length >> tr[6])), MM[tr[23]] = tr[0]; MM[tr[23]] < MM[tr[118]].length; MM[tr[23]]++) MM[tr[118]][MM[tr[23]]] = tr[0];
                  for (MM[tr[23]] = tr[0]; MM[tr[23]] < MM[tr[0]].length * tr[2]; MM[tr[23]] += tr[2]) MM[tr[118]][MM[tr[23]] >> tr[25]] |= (MM[tr[0]].charCodeAt(MM[tr[23]] / tr[2]) & tr[3]) << tr[119] - MM[tr[23]] % tr[53];
                  return MM[tr[118]]
                }

                function nM(...MM) {
                  for (Wr(MM[tr[4]] = tr[1], MM[tr[1]] = ""), MM[tr[23]] = tr[0]; MM[tr[23]] < MM[tr[0]].length * tr[53]; MM[tr[23]] += tr[2]) MM[tr[1]] += String.fromCharCode(MM[tr[0]][MM[tr[23]] >> tr[25]] >>> tr[119] - MM[tr[23]] % tr[53] & tr[3]);
                  return MM[tr[1]]
                }

                function QM(...MM) {
                  return MM[tr[4]] = tr[6], MM[tr[0]] >>> MM[tr[1]] | MM[tr[0]] << tr[53] - MM[tr[1]]
                }

                function zM(MM, rM) {
                  return MM >>> rM
                }

                function LM(...MM) {
                  return MM[tr[4]] = tr[24], MM[tr[0]] & MM[tr[1]] ^ ~MM[tr[0]] & MM[tr[6]]
                }

                function mM(...MM) {
                  return MM[tr[4]] = tr[24], MM[tr[0]] & MM[tr[1]] ^ MM[tr[0]] & MM[tr[6]] ^ MM[tr[1]] & MM[tr[6]]
                }

                function HM(...MM) {
                  return MM[tr[4]] = tr[1], QM(MM[tr[0]], tr[6]) ^ QM(MM[tr[0]], tr[36]) ^ QM(MM[tr[0]], tr[68])
                }

                function hM(...MM) {
                  return MM[tr[4]] = tr[1], QM(MM[tr[0]], tr[18]) ^ QM(MM[tr[0]], tr[75]) ^ QM(MM[tr[0]], tr[65])
                }

                function JM(...MM) {
                  return MM[tr[4]] = tr[1], QM(MM[tr[0]], tr[20]) ^ QM(MM[tr[0]], tr[79]) ^ zM(MM[tr[0]], tr[24])
                }

                function dM(...MM) {
                  return MM[tr[4]] = tr[1], QM(MM[tr[0]], 17) ^ QM(MM[tr[0]], tr[120]) ^ zM(MM[tr[0]], tr[72])
                }

                function yM(...rM) {
                  var iM, OM, SM, jM, aM, PM, nM, QM, zM, yM, EM, UM;
                  for (Wr(rM[tr[4]] = tr[6], rM[tr[110]] = new Array(1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225), rM[tr[121]] = new Array(tr[90])), Wr(rM[tr[0]][rM[tr[1]] >> tr[25]] |= tr[78] << tr[119] - rM[tr[1]] % tr[53], rM[tr[0]][(rM[tr[1]] + tr[90] >> tr[15] << tr[26]) + tr[44]] = rM[tr[1]]), zM = tr[0]; zM < rM[tr[0]].length; zM += tr[108]) {
                    for (Wr(iM = rM[tr[110]][tr[0]], OM = rM[tr[110]][tr[1]], SM = rM[tr[110]][tr[6]], jM = rM[tr[110]][tr[24]], aM = rM[tr[110]][tr[26]], PM = rM[tr[110]][tr[25]], nM = rM[tr[110]][tr[18]], QM = rM[tr[110]][tr[20]]), yM = tr[0]; yM < tr[90]; yM++) Wr(rM[tr[121]][yM] = yM < tr[108] ? rM[tr[0]][yM + zM] : lM(lM(lM(dM(rM[tr[121]][yM - tr[6]]), rM[tr[121]][yM - tr[20]]), JM(rM[tr[121]][yM - tr[44]])), rM[tr[121]][yM - tr[108]]), EM = lM(lM(lM(lM(QM, hM(aM)), LM(aM, PM, nM)), MM[tr[6]][yM]), rM[tr[121]][yM]), UM = lM(HM(iM), mM(iM, OM, SM)), QM = nM, nM = PM, PM = aM, aM = lM(jM, EM), jM = SM, SM = OM, OM = iM, iM = lM(EM, UM));
                    Wr(rM[tr[110]][tr[0]] = lM(iM, rM[tr[110]][tr[0]]), rM[tr[110]][tr[1]] = lM(OM, rM[tr[110]][tr[1]]), rM[tr[110]][tr[6]] = lM(SM, rM[tr[110]][tr[6]]), rM[tr[110]][tr[24]] = lM(jM, rM[tr[110]][tr[24]]), rM[tr[110]][tr[26]] = lM(aM, rM[tr[110]][tr[26]]), rM[tr[110]][tr[25]] = lM(PM, rM[tr[110]][tr[25]]), rM[tr[110]][tr[18]] = lM(nM, rM[tr[110]][tr[18]]), rM[tr[110]][tr[20]] = lM(QM, rM[tr[110]][tr[20]]))
                  }
                  return rM[tr[110]]
                }

                function lM(MM, rM) {
                  var iM = (MM & tr[117]) + (rM & tr[117]);
                  return (MM >> tr[108]) + (rM >> tr[108]) + (iM >> tr[108]) << tr[108] | iM & tr[117]
                }
                return Wr(MM[tr[4]] = tr[0], MM[-tr[63]] = tr[0], MM[tr[23]] = ""), MM[tr[6]] = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998), {
                  hex: function(...MM) {
                    return MM[tr[4]] = tr[1], SM(function(...MM) {
                      return MM[tr[4]] = tr[1], nM(yM(PM(MM[tr[0]]), MM[tr[0]].length * tr[2]))
                    }(aM(MM[tr[0]])))
                  },
                  b64: rM,
                  any: iM,
                  hex_hmac: function(...MM) {
                    return MM[tr[4]] = tr[6], SM(OM(aM(MM[tr[0]]), aM(MM[tr[1]])))
                  },
                  b64_hmac: rM,
                  any_hmac: iM
                }
              }(), console.log(MM[tr[11]]))
            }
            QM(tr[107]) in pr && HM(), (0, LM[tr[14]])("3 ")
          } else Jr()
        }
      } else(0, LM[tr[14]])("5 ")
    }, JM.i.subscribe("customBindingsChanged", (() => {
      Dr()
    }));
    let kr = !1,
      Zr = !1;
    const or = () => kr || Zr && pM.b.isInGame(),
      fr = MM => {
        or() && MM.preventDefault()
      };
    JM.i.subscribe("displaymodeFullscreenChange", (MM => {
      Yr()
    })), JM.i.subscribe("pointerLockUpdate", (MM => {
      kr = MM, Yr(), Nr()
    })), JM.i.subscribe("freeCursorUpdate", (MM => {
      Zr = MM, Yr(), Nr()
    }));
    const Yr = () => {
        window.removeEventListener("wheel", fr), WM.isIframed && !(0, aM.q)() && (kr || Zr) && window.addEventListener("wheel", fr, {
          passive: !1
        })
      },
      Nr = () => {
        window.removeEventListener("wheel", Ar), (kr || Zr) && window.addEventListener("wheel", Ar, {
          passive: !1
        })
      },
      Ar = MM => {
        !0 === MM.ctrlKey && or() && MM.preventDefault()
      };

    function xr(MM) {
      JM.i.Tz("QTEMouseState", {
        isDown: MM
      })
    }

    function vr(MM) {
      var rM, iM, SM, jM, aM, PM, nM, QM;
      const LM = (0, gM.f)();
      LM.pMM = null !== (rM = function(MM, rM) {
        var iM, OM;
        if (!Lr) return null;
        const SM = MM.bloxd;
        Pr ??= SM.getMetaInfo("Board").rootId;
        const jM = null !== (iM = null === rM || void 0 === rM ? void 0 : rM.VV) && void 0 !== iM ? iM : null;
        if (!jM || SM.getMetaInfo(jM).rootId !== Pr) return null;
        const aM = null !== (OM = null === rM || void 0 === rM ? void 0 : rM.position) && void 0 !== OM ? OM : null;
        if (SM.playerCanChangePos(MM.eD, aM[0], aM[1], aM[2])) return null;
        const PM = (MM, rM, iM) => {
          const OM = SM.blockDataOwner.getBlockData(MM, rM, iM),
            jM = null === OM || void 0 === OM ? void 0 : OM.persisted.shared.text.split("\n")[0].toLowerCase().trim();
          return sM.singleLineBoardActions.has(jM)
        };
        if (PM(aM[0], aM[1], aM[2])) return null;
        let nM;
        MM.KMM && (nM = [...MM.KMM], MM.jT(nM, nM));
        const QM = (nM ? MM.camera.zK : 0) + SM.getBlockReach(MM.eD);
        return MM.pickBlock(nM, MM.qMM, QM, ((rM, iM, OM, jM) => 0 !== rM && ("Board" !== SM.getMetaInfo(rM).rootName || SM.playerCanChangePos(MM.eD, iM, OM, jM) || PM(iM, OM, jM))))
      }(LM, LM.pMM)) && void 0 !== rM ? rM : LM.pMM;
      const mM = null !== (iM = null === (SM = LM.pMM) || void 0 === SM ? void 0 : SM.position) && void 0 !== iM ? iM : null,
        hM = null !== (jM = LM.qMM) && void 0 !== jM ? jM : LM.camera.eT(),
        dM = gM.j.localPlayerPickActionHelper.getPickEntityResult(hM),
        yM = null !== (aM = LM.pMM) && void 0 !== aM && aM.VV ? (0, fM.g)(LM.pMM.VV) : "Air",
        lM = MM === HM.c.UpFirePrimary || MM === HM.c.UpFireSecondary,
        EM = lM ? "onPlayerClickUp" : "onPlayerClick",
        UM = lM ? MM === HM.c.UpFireSecondary : MM === HM.c.DownFireSecondary,
        GM = !lM && (0, OM.getWasDoubleClick)();
      JM.i.Tz("mouseState", {
        ba: MM,
        isDown: !lM
      }), (0, OM.sendColyMessage)(zM.rh, {
        ba: MM,
        wa: GM,
        aa: mM,
        Pa: dM
      }, !0), (0, gM.b)().client.triggerGameCallback(EM, LM.eD, UM, null !== (PM = null === mM || void 0 === mM ? void 0 : mM[0]) && void 0 !== PM ? PM : null, null !== (nM = null === mM || void 0 === mM ? void 0 : mM[1]) && void 0 !== nM ? nM : null, null !== (QM = null === mM || void 0 === mM ? void 0 : mM[2]) && void 0 !== QM ? QM : null, yM, dM)
    }
    window.addEventListener("keydown", (MM => {
      ["ArrowUp", "ArrowDown"].includes(MM.key) && MM.preventDefault()
    })), document.addEventListener("keydown", (MM => {
      (0, ZM.e)(MM, (() => {
        const MM = (0, gM.f)();
        return (0, kM.J)(MM) || !1 !== MM.aU.canCustomiseChar
      }))
    }))
  },
  40121: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => jM,
      g: () => aM
    });
    var OM = iM(39433);
    let SM = !1;

    function jM() {
      return SM
    }

    function aM(MM) {
      SM = MM, MM ? OM.i.setMultiplierType("emoteWheel", 0) : OM.i.removeMultiplier("emoteWheel")
    }
  },
  40134: (MM, rM, iM) => {
    function OM(MM) {
      return Boolean(MM.aU.useInventory && MM.aU.useFullInventory && MM.hU.WrM(MM.eD))
    }
    iM.d(rM, {
      c: () => OM
    })
  },
  40028: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => jM,
      e: () => SM
    });
    var OM = iM(38097);

    function SM(MM, rM) {
      return {
        replayedClipName: MM,
        replayedClipAgeSeconds: rM
      }
    }

    function jM(MM, rM, iM, SM, jM) {
      const aM = function(MM) {
          if ("object" !== typeof MM || null === MM) return null;
          const {
            replayedClipName: rM,
            replayedClipAgeSeconds: iM
          } = MM;
          return "string" === typeof rM && "number" === typeof iM ? {
            HS: rM,
            hS: iM
          } : null
        }(iM),
        PM = null === aM ? iM : null,
        {
          HS: nM = null,
          hS: QM = 0
        } = null !== aM && void 0 !== aM ? aM : {};
      MM.animateEntity(rM, OM.e.Custom, PM, SM, jM, nM, QM)
    }
  },
  40127: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => zM
    });
    var OM = iM(39372),
      SM = iM(332),
      jM = iM(3063);

    function aM() {
      var MM, rM, iM, OM;
      const aM = (0, jM.f)(),
        PM = null !== (MM = null === (rM = aM.hU.urM(aM.eD)) || void 0 === rM ? void 0 : rM.selectedItem) && void 0 !== MM ? MM : null,
        nM = PM ? (0, jM.b)().getItemStat(aM.eD, PM.name, "attackCooldownMs") : null,
        QM = (0, SM.cd)(nM, null === PM || void 0 === PM || null === (iM = PM.attributes.customAttributes) || void 0 === iM || null === (OM = iM.enchantments) || void 0 === OM ? void 0 : OM["Attack Speed"]);
      return Math.max(56, Math.ceil((QM + 30) / 3))
    }
    class PM {
      constructor(MM, rM) {
        this.tries = void 0, this.dueMs = void 0, this.intervalMs = void 0, this.tries = [MM], this.dueMs = MM, this.intervalMs = rM
      }
      spacedBy(MM, rM) {
        if (MM === this.intervalMs) return this;
        const iM = this.tries[this.tries.length - 1],
          OM = new PM(iM, MM);
        return OM.dueMs = Math.max(iM, rM - MM), OM
      }
      nextDueMs() {
        const MM = this.tries[this.tries.length - 1];
        return Math.max(MM + 56, this.tries[0] + this.tries.length * this.intervalMs, this.dueMs + this.intervalMs)
      }
      noteTry(MM, rM) {
        this.tries.push(MM), this.tries.length > 3 && this.tries.shift(), this.dueMs = rM
      }
    }
    var nM = iM(40121),
      QM = iM(1313);
    class zM {
      constructor() {
        this.timer = null, this.tries = new PM(0, 0), this.check = () => {
          const MM = Date.now(),
            rM = this.tries.spacedBy(aM(), MM),
            iM = rM.nextDueMs();
          if (MM < iM) this.schedule();
          else {
            if (rM.noteTry(MM, iM), this.tries = rM, (0, QM.B)() && !(0, nM.c)()) {
              var SM, PM;
              (0, OM.g)();
              const MM = (0, jM.f)();
              null === (SM = MM.hU.qrM(MM.eD)) || void 0 === SM || null === (PM = SM.QG) || void 0 === PM || PM.repeatAttack()
            }
            this.schedule()
          }
        }
      }
      start() {
        var MM;
        null === (MM = zM.running) || void 0 === MM || MM.stop(), zM.running = this, this.tries = new PM(Date.now(), aM()), this.schedule()
      }
      static stopRunning() {
        var MM;
        null === (MM = zM.running) || void 0 === MM || MM.stop()
      }
      stop() {
        clearTimeout(this.timer), this.timer = null, zM.running === this && (zM.running = null)
      }
      schedule() {
        const MM = Date.now(),
          rM = this.tries.spacedBy(aM(), MM).nextDueMs() - MM;
        this.timer = setTimeout(this.check, Math.min(rM, 100))
      }
    }
    zM.running = null
  },
  40032: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => hM,
      g: () => zM,
      i: () => HM,
      k: () => mM,
      n: () => JM,
      p: () => LM
    });
    var OM = iM(40036),
      SM = iM(38130),
      jM = iM(4069),
      aM = iM(2045),
      PM = iM(22),
      nM = iM(3063);
    const QM = new OM.c;

    function zM() {
      return QM
    }

    function LM() {
      QM.clear()
    }

    function mM() {
      for (const MM of QM.ids()) {
        const rM = QM.getName(MM);
        void 0 !== rM && aM.c.delete(rM)
      }
      LM(), PM.i.Tz("playerRosterChanged", QM.ids())
    }

    function HM(MM, rM) {
      var iM, OM;
      if (QM.has(MM)) return QM.getSetting(MM, rM);
      const SM = (0, nM.f)();
      return null === (iM = SM.rY[SM.eD]) || void 0 === iM || null === (OM = iM[MM]) || void 0 === OM ? void 0 : OM[rM]
    }

    function hM(MM) {
      const {
        added: rM,
        removed: iM,
        settingChanges: OM
      } = QM.apply(MM);
      for (const {
          playerId: SM,
          name: jM
        }
        of iM) void 0 === jM || dM(SM) || aM.c.delete(jM);
      for (const {
          playerId: jM,
          settings: aM
        }
        of OM)
        if (dM(jM)) JM(jM, aM);
        else
          for (const MM in aM)(0, SM.k)(jM, MM, aM[MM]);
      (rM.length > 0 || iM.length > 0) && PM.i.Tz("playerRosterChanged", QM.ids())
    }

    function JM(MM) {
      let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : QM.getSettings(MM);
      if (rM) {
        (0, SM.e)(MM);
        for (const iM in rM)(0, SM.d)(MM, iM, rM[iM])
      }
    }

    function dM(MM) {
      return MM === (0, nM.f)().IMM || (0, nM.b)().client.hasEntity(MM)
    }(0, jM.onGameReset)(LM)
  },
  39074: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => tM,
      f: () => CM,
      j: () => bM,
      n: () => wM,
      r: () => gM
    });
    var OM = iM(38034),
      SM = iM(39078),
      jM = iM(347),
      aM = iM.n(jM),
      PM = iM(3809);
    const nM = new OM.sh,
      QM = new OM.sh,
      zM = new OM.sh,
      LM = new OM.sh,
      mM = new OM.sh,
      HM = [0, 0, 0],
      hM = {
        x: 0,
        y: 0
      },
      JM = new OM.sh(1, 0, 0),
      dM = new OM.sh(0, 1, 0),
      yM = OM.Matrix.Identity(),
      lM = new OM.Matrix,
      EM = new OM.Matrix,
      UM = new OM.sh,
      GM = new SM.e(0, 0, 0, 0);

    function CM(MM, rM) {
      var iM, SM;
      const jM = eM(MM, rM);
      if (jM) {
        const MM = jM.x,
          rM = jM.y,
          iM = MM - 50,
          OM = rM - 50;
        return Math.abs(iM) <= PM.e && Math.abs(OM) <= (0, PM.k)() ? {
          x: MM,
          y: rM
        } : RM(iM, OM)
      }
      zM.iMM(rM[0], rM[1], rM[2]),
        function(MM) {
          const rM = MM.CL.YiM(),
            iM = rM ? OM.Matrix.FromArrayToRef(rM.worldMatrix, 0, EM) : MM.CL.Hk().activeCamera.getWorldMatrix();
          OM.sh.TransformNormalToRef(JM, iM, LM), LM.normalize(), OM.sh.TransformNormalToRef(dM, iM, mM), mM.normalize()
        }(MM);
      const aM = OM.sh.Dot(zM, LM);
      let nM = -OM.sh.Dot(zM, mM);
      Math.abs(aM) < .001 && Math.abs(nM) < .001 && (nM = -1);
      const QM = null !== (iM = null === (SM = MM.CL.YiM()) || void 0 === SM ? void 0 : SM.projectionMatrix) && void 0 !== iM ? iM : MM.CL.Hk().activeCamera.getProjectionMatrix().m;
      return RM(aM * QM[0], nM * QM[5])
    }

    function eM(MM, rM) {
      const iM = MM.CL.Hk(),
        SM = iM.ph(),
        jM = SM.getRenderWidth(),
        aM = SM.getRenderHeight();
      GM.width = jM, GM.height = aM;
      const PM = MM.CL.YiM(),
        zM = PM ? UM.iMM(PM.eye[0], PM.eye[1], PM.eye[2]) : MM.CL.camera.globalPosition;
      nM.iMM(zM.x + 10 * rM[0], zM.y + 10 * rM[1], zM.z + 10 * rM[2]);
      const LM = PM ? OM.Matrix.FromArrayToRef(PM.viewProjectionMatrix, 0, lM) : iM.getTransformMatrix();
      return OM.sh.ProjectToRef(nM, yM, LM, GM, QM), QM.z < 0 || QM.z > 1 ? null : (hM.x = QM.x / jM * 100, hM.y = QM.y / aM * 100, hM)
    }

    function bM(MM, rM) {
      return CM(MM, uM(MM, rM))
    }

    function wM(MM, rM) {
      const iM = eM(MM, uM(MM, rM));
      return iM && {
        x: iM.x,
        y: iM.y
      }
    }

    function tM(MM) {
      var rM, iM;
      return 1 / (null !== (rM = null === (iM = MM.CL.YiM()) || void 0 === iM ? void 0 : iM.projectionMatrix[0]) && void 0 !== rM ? rM : MM.CL.Hk().activeCamera.getProjectionMatrix().m[0])
    }

    function gM(MM, rM, iM) {
      const OM = MM.CL.YiM(),
        SM = OM ? OM.worldMatrix : MM.CL.Hk().activeCamera.getWorldMatrix().m,
        jM = MM.Am;
      for (let aM = 0; aM < 3; aM++) rM[aM] = SM[12 + aM] + jM[aM], iM[aM] = SM[8 + aM];
      aM().normalize(iM, iM)
    }

    function uM(MM, rM) {
      const iM = MM.Am,
        OM = MM.CL.YiM(),
        SM = OM ? UM.iMM(OM.eye[0], OM.eye[1], OM.eye[2]) : MM.CL.camera.globalPosition;
      return HM[0] = rM[0] - iM[0] - SM.x, HM[1] = rM[1] - iM[1] - SM.y, HM[2] = rM[2] - iM[2] - SM.z, aM().normalize(HM, HM), HM
    }

    function RM(MM, rM) {
      return (0, PM.g)(MM, rM, PM.e, (0, PM.k)())
    }
  },
  40014: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => mM
    });
    var OM = iM(181),
      SM = iM(347),
      jM = iM.n(SM),
      aM = iM(37699),
      PM = iM(37705),
      nM = iM(3063);
    const QM = OM.f.jy * OM.f.playerEyeToHeightRatio,
      zM = 250,
      LM = 1.1,
      mM = new class {
        constructor() {
          this.entities = new Map, this.playing = new Map, this.msSinceLastScan = 0
        }
        add(MM, rM) {
          this.entities.set(MM, rM)
        }
        update(MM, rM) {
          const iM = this.entities.get(MM);
          this.entities.set(MM, rM);
          const OM = this.playing.get(MM);
          OM && (iM && iM.soundName === rM.soundName ? (OM.sound.setRelativeVolume(rM.volume), OM.sound.rate(rM.rate), OM.sound.setPannerAttr({
            refDistance: rM.refDistance
          })) : this.stopEntity(MM))
        }
        remove(MM) {
          this.stopEntity(MM), this.entities.delete(MM)
        }
        bL(MM) {
          this.msSinceLastScan += MM, this.msSinceLastScan < zM || (this.msSinceLastScan = 0, this.scan())
        }
        stopEntity(MM) {
          const rM = this.playing.get(MM);
          rM && (rM.sound.stop(), this.playing.delete(MM))
        }
        startEntity(MM, rM, iM) {
          const OM = (0, PM.f)(rM.soundName);
          if (!OM) return console.error(`AudioEntityManager: no sound found for "${rM.soundName}", dropping audio entity ${MM}`), void this.remove(MM);
          const SM = aM.e.play(OM, rM.volume, iM, rM.maxHearDist, rM.refDistance, !0);
          SM.rate(rM.rate), this.playing.set(MM, {
            sound: SM,
            lastPos: jM().clone(iM)
          })
        }
        scan() {
          const MM = (0, nM.f)();
          if (!MM) return;
          const rM = MM.hU.XE(MM.eD);
          if (rM)
            for (const [iM, OM] of this.entities) {
              if (!MM.hU.BMM(iM, "position")) continue;
              const SM = MM.hU.XE(iM),
                aM = jM().sqrDist(rM, SM),
                PM = this.playing.get(iM);
              if (PM) {
                const MM = OM.maxHearDist * LM;
                aM > MM * MM ? this.stopEntity(iM) : jM().equals(SM, PM.lastPos) || (PM.sound.setPosition([SM[0], SM[1] + QM, SM[2]]), jM().copy(PM.lastPos, SM))
              } else aM <= OM.maxHearDist * OM.maxHearDist && this.startEntity(iM, OM, SM)
            }
        }
      }
  },
  40065: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => jM,
      d: () => SM
    });
    var OM = iM(22);

    function SM(MM) {
      return "refetchCode" === MM || "devDownloadJson" === MM || MM.startsWith("Plugin")
    }

    function jM(MM, rM) {
      "refetchCode" !== MM ? "Plugin|MobAiPlugin|ShowPetUi" !== MM ? Promise.all([iM.e(121), iM.e(122), iM.e(117), iM.e(119), iM.e(236)]).then((() => iM(44386))).then((iM => {
        let {
          runClientGameMessage: OM
        } = iM;
        OM(MM, rM)
      })).catch((rM => {
        console.error(`Game message ${MM} failed`, rM)
      })) : OM.i.Tz("showPetUi", rM) : OM.i.Tz("refetchCode")
    }
  },
  40048: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => zM
    });
    var OM = iM(1229),
      SM = iM(1382),
      jM = iM(19),
      aM = iM(1360),
      PM = iM(1373),
      nM = iM(1591),
      QM = iM(37416);

    function zM(MM) {
      let {
        Wr: rM,
        sr: iM
      } = MM;
      const zM = null !== rM && void 0 !== rM ? rM : (0, PM.e)().gameNameWithVariation;
      (0, OM.L)(zM) && ((0, QM.k)(), (0, aM.bb)((() => {
        console.log("Received matchmaking order from game server to game", rM), (0, jM.j)("inGameReplay"), (0, nM.navigatePreserveSearch)((0, SM.b)(zM, null !== iM && void 0 !== iM ? iM : void 0))
      }), "video_start"))
    }
  },
  40043: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => zM,
      e: () => nM,
      g: () => QM,
      h: () => LM
    });
    var OM = iM(2039),
      SM = iM(22),
      jM = iM(1429),
      aM = iM(1270);
    const PM = new Map;

    function nM(MM, rM) {
      SM.i.Tz("newUiRequest", {
        id: MM,
        clientParameters: rM
      }, !0)
    }

    function QM(MM) {
      SM.i.Tz("removeUiRequest", MM, !0);
      const rM = PM.get(MM);
      rM && (rM.tearDownNotification(), PM.delete(MM))
    }

    function zM() {
      SM.i.Tz("clearUiRequests");
      for (const MM of PM.values()) MM.tearDownNotification();
      PM.clear()
    }

    function LM(MM, rM, iM, SM) {
      const nM = "string" === typeof rM ? {
          translationKey: rM
        } : rM,
        QM = jM.NotificationProvider.showPromptPopup({
          title: nM.translationKey,
          textOpts: {
            title: (0, aM.g)(nM.params, OM.gameBridge.latest("hiddenPlayerNames"))
          },
          confirmText: "general:yes",
          cancelText: "general:no",
          destructive: iM,
          unlockPointerKey: "uiRequestPopup"
        });
      PM.set(MM, QM), QM.getResult().then((rM => {
        PM.delete(MM), "notificationTornDown" !== rM && SM(rM)
      }))
    }
  },
  40036: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => OM
    });
    class OM {
      constructor() {
        this.members = new Map
      }
      apply(MM) {
        const rM = {
          added: [],
          removed: [],
          settingChanges: []
        };
        for (const OM of MM.MM) {
          let MM = this.members.get(OM.rM);
          if (MM || (MM = {
              name: null,
              settings: {}
            }, this.members.set(OM.rM, MM), rM.added.push(OM.rM)), null !== OM.iM && (MM.name = OM.iM), null !== OM.OM || OM.SM.length > 0) {
            const iM = null === OM.OM ? {} : JSON.parse(OM.OM);
            Object.assign(MM.settings, iM);
            for (const rM of OM.SM) delete MM.settings[rM], iM[rM] = void 0;
            rM.settingChanges.push({
              playerId: OM.rM,
              settings: iM
            })
          }
        }
        for (const OM of MM.jM) {
          const MM = this.members.get(OM);
          var iM;
          if (MM) this.members.delete(OM), rM.removed.push({
            playerId: OM,
            name: null !== (iM = MM.name) && void 0 !== iM ? iM : void 0
          })
        }
        return rM
      }
      has(MM) {
        return this.members.has(MM)
      }
      ids() {
        return [...this.members.keys()]
      }
      getName(MM) {
        var rM, iM;
        return null !== (rM = null === (iM = this.members.get(MM)) || void 0 === iM ? void 0 : iM.name) && void 0 !== rM ? rM : void 0
      }
      getSettings(MM) {
        var rM;
        return null === (rM = this.members.get(MM)) || void 0 === rM ? void 0 : rM.settings
      }
      getSetting(MM, rM) {
        var iM;
        return null === (iM = this.members.get(MM)) || void 0 === iM ? void 0 : iM.settings[rM]
      }
      clear() {
        this.members.clear()
      }
    }
  },
  40073: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => OM,
      e: () => SM
    });
    const OM = ["description", "label"];

    function SM(MM) {
      const rM = MM.type;
      return {
        type: rM,
        params: MM[rM]
      }
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);