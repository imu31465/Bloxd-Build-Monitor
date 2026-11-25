export const id = 248;
export const ids = [248];
export const modules = {
  39175: (BB, IB, ZB) => {
    function TB(BB) {
      return !(!BB.lobbyLeaderboardInfo && !BB.lobbyManage)
    }
    ZB.d(IB, {
      d: () => TB
    })
  },
  39082: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => oB
    });
    var TB = ZB(24),
      JB = ZB(2029);

    function oB(BB) {
      let {
        taskId: IB,
        progress: ZB
      } = BB;
      const TB = JB.c.get("_tasks");
      null !== TB && void 0 !== TB && TB[IB] && JB.c.apply({
        _tasks: {
          ...TB,
          [IB]: {
            ...TB[IB],
            progress: ZB
          }
        }
      })
    }
    TB.l.subscribe("clientTaskProgress", (BB => {
      oB(BB)
    }))
  },
  39021: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => BZ,
      e: () => VI,
      h: () => SI
    });
    var TB = ZB(3854),
      JB = ZB(168),
      oB = ZB(201),
      GB = ZB(671),
      vB = ZB(36),
      kB = ZB(2912),
      cB = ZB(3911),
      nB = ZB(3896),
      hB = ZB(1281);
    const zB = new WeakMap;
    class FB {
      constructor(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
          AcB: !0
        };
        this.callbacks = IB, this.options = ZB, this.xZB = void 0, this.sessionId = void 0, this.aY = [], this.tcB = !1, this.WN = !1, this.bcB = void 0, this.pY = 0, this.AJB = 0, this.xcB = (BB, IB) => {
          if (this.WN) return;
          const ZB = Number(BB);
          this.tcB ? this.EcB(ZB, IB) : this.aY.push({
            id: ZB,
            payload: IB
          })
        }, this.dispose = () => {
          this.WN || (this.WN = !0, zB.delete(this), this.aY.length = 0, this.bcB())
        }, this.xZB = BB, this.sessionId = BB.sessionId, zB.set(this, []), this.bcB = this.DcB()
      }
      KcB(BB) {
        this.bcB(), this.xZB = BB, this.sessionId = BB.sessionId, this.pY = 0, this.AJB = 0, this.bcB = this.DcB()
      }
      get FY() {
        return this.AJB
      }
      DcB() {
        const BB = this.xZB.rU("*", this.xcB);
        return this.options.AcB && this.xZB.KU(this.dispose), BB
      }
      EcB(BB, IB) {
        try {
          (0, cB.sc)(BB) && (IB = (0, cB.c)(BB, nB.UN.from(IB)));
          const ZB = zB.get(this)[BB];
          if ("function" !== typeof ZB) {
            if (this.callbacks.VcB) return void this.callbacks.VcB(BB, IB);
            throw new Error(`No onMessage handler registered for message id ${BB}`)
          }
          ZB(IB)
        } catch (ZB) {
          this.callbacks.ScB(`Error in onMessage ${BB} with payload ${JSON.stringify(IB)}`, ZB)
        } finally {
          this.pY++
        }
      }
      BnB() {
        for (const {
            id: BB,
            payload: IB
          }
          of this.aY) {
          if (this.WN) break;
          this.EcB(BB, IB)
        }
        this.aY.length = 0
      }
      mC() {
        return this.WN
      }
      InB() {
        if (this.tcB || this.WN) throw new Error("Trying to getOnMessageRegistrationHandler after registration finished");
        return {
          rU: (BB, IB) => {
            if (this.tcB || this.WN) throw new Error("Trying to call onMessage after registration finished");
            this.rU(BB, IB)
          },
          finishRegistration: () => {
            if (this.WN) throw new Error("Cannot finish message registration after disposal");
            this.tcB = !0, this.BnB()
          }
        }
      }
      rU(BB, IB) {
        var ZB, TB;
        null === (ZB = (TB = this.callbacks).ZnB) || void 0 === ZB || ZB.call(TB);
        const JB = zB.get(this);
        for (; BB > JB.length;) JB[JB.length] = null;
        JB[BB] = IB
      }
      send(BB, IB) {
        this.TnB(), (0, hB.z)(IB) ? this.xZB.lY(BB, IB) : this.xZB.send(BB, IB)
      }
      TnB() {
        var BB, IB;
        (this.AJB++, 5 === NB++) && (null === (BB = (IB = this.callbacks).ZnB) || void 0 === BB || BB.call(IB), NB = 0)
      }
      jy() {
        this.dispose(), this.xZB.jy()
      }
      leave() {
        this.dispose(), this.xZB.leave()
      }
    }
    let NB = 0;
    var gB = ZB(3869);
    class qB extends FB {
      constructor(BB) {
        super(BB, {
          ZnB: () => {
            (0, vB.o)(!0) && (0, TB.hY)()
          },
          ScB: (BB, IB) => {
            var ZB;
            null === (ZB = (0, kB.h)()) || void 0 === ZB || ZB.wg(BB, IB)
          }
        }, {
          AcB: !1
        }), (0, gB.e)(BB)
      }
      RY(BB, IB) {
        return !!(0, gB.l)((0, gB.c)(), this.xZB, BB, IB) && (this.TnB(), !0)
      }
      KcB(BB) {
        this.JnB(), super.KcB(BB), (0, gB.e)(BB)
      }
      jy() {
        super.jy(), this.JnB()
      }
      JnB() {
        this.xZB.Py.kN.mH = void 0
      }
    }
    var yB = ZB(24),
      UB = ZB(2029),
      WB = ZB(1805),
      dB = ZB(36485),
      CB = ZB(39023),
      QB = ZB(38099),
      sB = ZB(37855),
      wB = ZB(665),
      OB = ZB(38455);

    function YB(BB, IB, ZB) {
      const TB = function(BB) {
          const IB = new Int32Array(BB.length * OB.c);
          return BB.forEach(((BB, ZB) => {
            const TB = ZB * OB.c;
            if (4 === BB.length) {
              const [ZB, JB, oB, GB] = BB;
              IB.set([ZB, JB, oB, ZB, JB, oB, GB], TB)
            } else {
              const [ZB, JB, oB, GB, vB, kB, cB] = BB;
              IB.set([ZB, oB, vB, JB, GB, kB, cB], TB)
            }
          })), IB
        }(ZB),
        JB = (IB, ZB, TB, JB) => {
          BB.setBlockNoMulti(IB, ZB, TB, JB, !0)
        };
      BB.client.gameRecorder.isCapturing() ? (0, OB.nb)(TB, (0, OB.jb)(TB), JB) : BB.Nz.vz.EQ(TB, {
        qE: JB,
        isHookId: IB => BB.blockChangeHasHooks(IB),
        watched: () => function(BB, IB, ZB) {
          const TB = [],
            JB = (BB, IB, ZB) => {
              TB.push(BB, IB, ZB)
            },
            oB = new Set;
          for (let GB = 0; GB < ZB.length; GB += OB.c)
            for (let IB = (0, wB.T)(ZB[GB]); IB <= (0, wB.T)(ZB[GB + 3]); IB++)
              for (let TB = (0, wB.T)(ZB[GB + 1]); TB <= (0, wB.T)(ZB[GB + 4]); TB++)
                for (let vB = (0, wB.T)(ZB[GB + 2]); vB <= (0, wB.T)(ZB[GB + 5]); vB++) {
                  const ZB = `${IB}|${TB}|${vB}`;
                  oB.has(ZB) || (oB.add(ZB), BB.blockDataOwner.forEachDataCell(IB, TB, vB, JB))
                }
          return IB.forEachCell(JB), Int32Array.from(TB)
        }(BB, IB, TB)
      }), BB.Nz.tBB()
    }

    function iB(BB) {
      BB.rZB = new Set, BB.LZB = new Set, BB.mZB = new Set, BB.eZB = new Set, BB.XZB = [], BB.uZB = [], BB.Bx = new Set, BB.HJ = [], BB.Ix = []
    }
    class pB {
      constructor(BB) {
        this.Nz = BB
      }
      register(BB) {
        const IB = this.Nz,
          ZB = (0, kB.d)();
        BB.rU(cB.ab, (BB => {
          IB.vz.rZB.add(BB), IB.vz.LZB.delete(BB)
        })), BB.rU(cB.ib, (BB => {
          IB.vz.LZB.add(BB), IB.vz.rZB.delete(BB)
        })), BB.rU(cB.je, (BB => {
          IB.vz.LZB.delete(BB), IB.vz.rZB.delete(BB)
        })), BB.rU(cB.hb, (BB => {
          IB.vz.mZB.add(BB), IB.vz.eZB.delete(BB)
        })), BB.rU(cB.lb, (BB => {
          IB.vz.eZB.add(BB), IB.vz.mZB.delete(BB)
        })), BB.rU(cB.oe, (BB => {
          IB.vz.eZB.delete(BB), IB.vz.mZB.delete(BB)
        })), BB.rU(cB.db, (BB => {
          (0, hB.$)(BB, IB.vz.uZB), (0, hB.$)(BB, IB.vz.XZB), IB.vz.XZB.push(BB)
        })), BB.rU(cB.kb, (BB => {
          (0, hB.$)(BB, IB.vz.XZB), (0, hB.$)(BB, IB.vz.uZB), IB.vz.uZB.push(BB)
        })), BB.rU(cB.ke, (BB => {
          (0, hB.$)(BB, IB.vz.XZB), (0, hB.$)(BB, IB.vz.uZB)
        })), BB.rU(cB.Gf, (BB => {
          let {
            IJ: ZB,
            ZJ: TB
          } = BB;
          TB ? IB.vz.Bx.delete(ZB) : IB.vz.Bx.add(ZB)
        })), BB.rU(cB.Cf, (BB => {
          let {
            HJ: TB,
            MJ: JB
          } = BB;
          ZB.updateWalkThroughRect(IB.Jm, TB, JB)
        })), (0, TB.onGameResetOnce)((() => {
          iB(IB.vz)
        })), BB.rU(cB.oc, (BB => {
          QB.c.applyServerUpdate(BB)
        })), BB.rU(cB.sb, (BB => {
          ZB.applyServerBlocks((() => {
            ! function(BB, IB) {
              for (const {
                  UB: ZB,
                  WB: TB
                }
                of IB) {
                const IB = sB.d[TB];
                if (IB) {
                  const {
                    compX: TB,
                    compY: JB,
                    compZ: oB,
                    mainMultiblock: GB
                  } = IB;
                  BB.UH(ZB[0] - TB, ZB[1] - JB, ZB[2] - oB, GB)
                }
              }
              for (const {
                  UB: ZB,
                  WB: TB,
                  dB: JB
                }
                of IB) BB.setBlockNoMulti(ZB[0], ZB[1], ZB[2], TB, !0), BB.blockDataOwner.setBlockData(ZB[0], ZB[1], ZB[2], null === JB ? void 0 : JSON.parse(JB)), BB.blockAdded(ZB[0], ZB[1], ZB[2], TB)
            }(ZB, BB)
          })), yB.l.Gq("changeBlockFail", BB), ZB.client.triggerGameCallback("onChangeBlockFail", BB), yB.l.Gq("EditBoard", {
            pos: null
          }), yB.l.Gq("EditCodeBlock", {
            pos: null,
            canChangePos: null
          })
        })), BB.rU(cB.Ob, (BB => {
          ZB.applyServerBlocks((() => {
            YB(ZB, QB.c, BB)
          }))
        })), BB.rU(cB.uf, (BB => {
          let {
            CB: IB,
            QB: TB
          } = BB;
          if (ZB.pD(IB[0], IB[1], IB[2])) {
            const BB = (0, kB.d)().WU(IB[0], IB[1], IB[2]);
            (0, kB.d)().updateMailboxContents(IB[0], IB[1], IB[2], BB, TB)
          }
        })), BB.rU(cB.He, (BB => {
          let {
            pos: IB,
            data: TB
          } = BB;
          ZB.blockDataOwner.setBlockData(IB[0], IB[1], IB[2], TB), ZB.blockAdded(IB[0], IB[1], IB[2], ZB.WU(IB[0], IB[1], IB[2]))
        }))
      }
    }
    var aB = ZB(37192),
      HB = ZB(36794),
      MB = ZB(38136),
      jB = ZB(37975),
      PB = ZB(38146);
    class RB {
      constructor(BB, IB) {
        this.Nz = BB, this.setUpQueuedEntity = IB
      }
      register(BB) {
        const IB = this.Nz,
          ZB = (0, kB.d)();
        BB.rU(cB.Z, (BB => {
          let {
            CZ: IB,
            QZ: ZB
          } = BB;
          this.setUpQueuedEntity(IB), IB = (0, HB.e)(IB), (0, kB.d)().client.gameRecorder.recordBulletShot(IB, ZB), yB.l.Gq(`bulletShot|${IB}`, {
            bulletDirections: ZB
          })
        })), BB.rU(cB.rc, (BB => {
          let {
            yZ: IB,
            UZ: ZB
          } = BB;
          yB.l.Gq("damagedByOtherPlayer", {
            yZ: IB,
            direction: ZB
          }, !0)
        })), BB.rU(cB.Ed, (BB => {
          yB.l.Gq("playerKilled", BB, !0), (0, kB.d)().client.gameRecorder.recordPlayerKilled(BB.deadEId, BB.killerEId, BB.withItem, BB.killstreak)
        })), BB.rU(cB.Wb, (BB => {
          yB.l.Gq("customKillfeed", BB, !0), (0, kB.d)().client.gameRecorder.recordCustomKillfeed(BB.killer, BB.victim, BB.withItem)
        })), BB.rU(cB.Sd, (BB => {
          let {
            lB: ZB,
            AB: TB
          } = BB;
          this.setUpQueuedEntity(ZB);
          const JB = IB.zW.FZB(ZB);
          null !== JB && void 0 !== JB && JB.isGun() && JB.reload(Date.now(), TB)
        })), BB.rU(cB.De, (BB => {
          let {
            uI: ZB,
            YB: TB
          } = BB;
          const JB = TB ? (0, PB.f)(IB, TB) : void 0;
          yB.l.Gq("sendHitmarker", {
            uI: ZB,
            screenPos: JB
          }, !0)
        })), BB.rU(cB.Vc, (BB => {
          let {
            sB: TB,
            wB: JB,
            iB: oB,
            pB: GB,
            aB: vB,
            HB: kB,
            jB: cB
          } = BB;
          this.setUpQueuedEntity(TB), TB = (0, HB.e)(TB);
          const nB = IB.zW.oZB(TB);
          if (nB && (nB.lastHurtTime = performance.now()), (0, MB.playRigHurt)(IB, TB, kB), yB.l.Gq("lifeformHurt", {
              eId: TB,
              jB: cB
            }), JB) {
            const BB = (0, PB.f)(IB, JB.YB);
            yB.l.Gq("yourAttackHit", {
              uI: GB,
              screenPos: BB,
              hitSelf: TB === IB.Jm
            })
          }
          TB === IB.Jm && (ZB.shakePlayerCamera(TB, vB / 40, 200), yB.l.Gq("closeShopOnDamaged", null), yB.l.Gq("damagedByOtherPlayer", {
            yZ: null,
            direction: kB,
            aB: vB
          }, !0));
          const hB = IB.zW.aU(TB);
          if (hB && (oB || GB)) {
            const BB = [hB[0], hB[1] + 1, hB[2]];
            oB && (0, jB.j)(IB, jB.A, BB, 15), GB && (0, jB.j)(IB, jB.n, BB, 10)
          }
        })), BB.rU(cB.Rc, (BB => {
          let {
            wI: ZB,
            OI: TB,
            YI: JB
          } = BB;
          (0, aB.c)(IB).setHealthFrac((0, HB.e)(ZB), JB), yB.l.Gq("lifeformHealthChanged", {
            eId: (0, HB.e)(ZB),
            OI: TB,
            YI: JB
          })
        })), BB.rU(cB.W, (BB => {
          let {
            ko: ZB,
            ho: TB
          } = BB;
          (0, kB.d)().playerAttacked(IB.Jm, ZB, TB)
        })), BB.rU(cB.ub, (() => {
          const BB = IB.zW.FZB(IB.Jm);
          null !== BB && void 0 !== BB && BB.isChargeable() && BB.finishCharging(!1, Date.now())
        })), BB.rU(cB.$b, (BB => {
          let {
            PB: IB,
            RB: ZB,
            rB: TB,
            fI: JB,
            lI: oB,
            AI: GB
          } = BB;
          IB = (0, HB.e)(IB), (0, kB.d)().client.updateEffect(IB, ZB, {
            displayName: TB,
            icon: JB,
            duration: oB,
            level: GB
          })
        })), BB.rU(cB.Td, (BB => {
          let {
            PB: IB,
            RB: ZB
          } = BB;
          IB = (0, HB.e)(IB), (0, kB.d)().client.removeEffect(IB, ZB)
        })), BB.rU(cB.pf, (BB => {
          yB.l.Gq("ttbEffectMultiplier", BB)
        }))
      }
    }
    var rB = ZB(39043),
      mB = ZB(37188),
      XB = ZB(4403),
      LB = ZB(38159),
      eB = ZB(36780),
      uB = ZB(36783),
      fB = ZB(37101),
      lB = ZB(37270),
      AB = ZB(38166),
      tB = ZB(39052);
    class bB {
      constructor(BB, IB) {
        this.Nz = BB, this.setUpQueuedEntity = IB
      }
      register(BB) {
        const IB = this.Nz,
          ZB = (0, kB.d)();
        BB.rU(cB.hd, (BB => {
          let {
            eId: ZB,
            settings: TB
          } = BB;
          (0, lB.c)(ZB);
          for (const IB in TB)(0, lB.b)(ZB, IB, TB[IB]);
          if ("canSee" in TB && IB.zW.TIB(ZB, "hidingMeshManager")) {
            const BB = IB.zW.getState(ZB, "hidingMeshManager");
            BB.canSee = (0, AB.c)("canSee", TB.canSee), BB._forceUpdate = !0
          }
        })), BB.rU(cB.N, (BB => {
          let {
            rT: ZB,
            mT: TB,
            animationScript: JB,
            XT: oB,
            LT: GB,
            eT: vB,
            uT: cB
          } = BB;
          ZB = (0, HB.e)(ZB);
          const nB = null === JB && null !== vB ? (0, rB.e)(vB, cB) : JB;
          (0, kB.d)().client.gameRecorder.recordAnimateEntity(ZB, TB, nB, oB, GB), (0, aB.c)(IB).animations.animateEntity(ZB, TB, JB, oB, GB, vB, cB), null !== JB || ZB === IB.Jm && TB === mB.h.Emote && (0, kB.d)().client.cameraController.endTemporaryThirdPerson()
        })), BB.rU(cB.Be, (BB => {
          (0, tB.b)(BB)
        })), BB.rU(cB.Ad, (BB => {
          for (const IB of BB)(0, LB.v)(IB);
          yB.l.Gq("playerCosmeticsUpdated", BB, !0)
        })), BB.rU(cB.U, (BB => {
          for (const ZB of BB)(0, fB.h)(IB, ZB)
        })), BB.rU(cB.jd, (BB => {
          (0, jB.l)(IB, (0, hB.m)(BB))
        })), BB.rU(cB.md, (BB => {
          XB.f[BB.Wo] ? (0, jB.l)(IB, {
            ...XB.f[BB.Wo],
            pos1: BB.pos1,
            pos2: BB.pos2
          }) : console.error(`Unknown preset id: ${BB.Wo}`)
        })), BB.rU(cB.yd, (BB => {
          var IB, ZB;
          let {
            BB: TB,
            IB: JB,
            ZB: oB,
            TB: GB
          } = BB, {
            oB: vB,
            GB: cB
          } = null !== GB && void 0 !== GB ? GB : {};
          const {
            JB: nB
          } = null !== GB && void 0 !== GB ? GB : {};
          vB = null !== (IB = vB) && void 0 !== IB ? IB : void 0, cB = null !== (ZB = cB) && void 0 !== ZB ? ZB : void 0, "string" === typeof nB && this.setUpQueuedEntity(nB), (0, kB.d)().client.gameRecorder.recordPlaySound(TB, JB, oB, GB), eB.d.play((0, uB.f)(TB), JB, nB, vB, cB).rate(oB)
        })), BB.rU(cB.vf, (BB => {
          for (const IB in BB) {
            const TB = BB[IB];
            for (const BB in TB) ZB.client.meshCreator.handleParticleSystemUpdate(IB, BB, TB[BB])
          }
        }))
      }
    }
    var xB = ZB(37840),
      EB = ZB(37814);
    class DB {
      constructor(BB) {
        this.Nz = BB
      }
      register(BB) {
        const IB = this.Nz,
          ZB = (0, kB.d)();

        function TB() {
          return IB.zW.lIB(IB.Jm)
        }
        BB.rU(cB.Ec, (BB => {
          let {
            yJ: ZB,
            UJ: TB,
            WJ: JB,
            dJ: oB,
            CJ: GB,
            QJ: vB,
            sJ: kB,
            wJ: cB,
            OJ: nB
          } = BB;
          if (!IB.zW.TIB(ZB, "itemState")) return void(0, xB.l)(IB, ZB, [GB, vB, kB], TB, {
            amount: JB,
            attributes: JSON.parse(oB),
            wJ: cB,
            size: nB
          });
          const hB = IB.zW.getState(ZB, "itemState");
          hB.amount = JB, hB.wJ = cB, hB.creationTime = Date.now(), (0, EB.setServerPosition)(IB.zW.getState(ZB, "smoothToServerPos"), GB, vB, kB)
        })), BB.rU(cB.ob, (BB => {
          (0, aB.c)(IB).setCantPickUp(BB, !0), IB.zW.TIB(BB, "itemState") && (IB.zW.getState(BB, "itemState").wJ = !0)
        })), BB.rU(cB.he, (BB => {
          (0, aB.c)(IB).setCantPickUp(BB, !1), IB.zW.TIB(BB, "itemState") && (IB.zW.getState(BB, "itemState").wJ = !1)
        })), BB.rU(cB.vd, (BB => {
          let {
            pickUpItems: IB,
            pickUpAckSeq: ZB
          } = BB;
          for (const {
              name: JB,
              amount: oB,
              attributes: GB
            }
            of IB) TB().pickUpItem({
            name: JB,
            amount: oB,
            typeObj: xB.A[JB],
            attributes: GB
          });
          (0, kB.d)().client.inventoryPrediction.serverChangeApplied(ZB)
        })), BB.rU(cB.Ve, (BB => {
          let {
            index: ZB,
            name: TB,
            amount: JB,
            attributes: oB,
            setSlotAckSeq: GB
          } = BB;
          const vB = IB.zW.tIB(IB.Jm);
          (ZB < vB.playerInventory.numSlots || vB.Qo || vB.inCreative) && vB.setItemSlot(ZB, TB, JB, oB), (0, kB.d)().client.inventoryPrediction.serverChangeApplied(GB)
        })), BB.rU(cB.Ac, (BB => {
          (0, kB.d)().client.inventoryPrediction.acknowledge(BB)
        })), BB.rU(cB.L, (BB => {
          let {
            mZ: IB,
            XZ: ZB,
            LZ: TB,
            eZ: JB
          } = BB;
          (0, kB.d)().client.itemDropPrediction.onActionItemDrops(IB, ZB, TB, JB)
        })), BB.rU(cB.Ib, (BB => {
          TB().clearInventory(), (0, kB.d)().client.inventoryPrediction.serverChangeApplied(BB)
        })), BB.rU(cB.Ye, (BB => {
          yB.l.Gq("setSelectedInventorySlotI", BB, !0)
        })), BB.rU(cB.Ab, (BB => {
          let {
            RJ: ZB,
            rJ: TB,
            mJ: JB,
            XJ: oB,
            LJ: GB,
            eJ: vB,
            uJ: cB,
            fJ: nB
          } = BB;
          const hB = IB.zW.tIB(IB.Jm);
          if (vB) {
            const {
              AJ: BB,
              tJ: IB
            } = nB;
            return (0, kB.d)().client.inventoryPrediction.kBB(IB, (() => {
              hB.chestRefreshed(TB, JB, oB, cB, BB)
            })) && yB.l.Gq("chestToggleFromServer", !1, !0), void yB.l.Gq("chestRefreshedFromServer")
          }(ZB || hB.Qo) && (ZB ? (hB.chestOpened(TB, JB, oB, GB, cB), null !== GB && (0, kB.d)().client.ironChestPasskeyCache.onChestOpened(oB, GB)) : hB.chestClosed(), yB.l.Gq("chestToggleFromServer", ZB, !0))
        })), BB.rU(cB.Xb, (BB => {
          let {
            craftingRecipeItemName: TB,
            recipesForItem: JB
          } = BB;
          TB ? ZB.craftingManager.editRecipesForPlayer(IB.Jm, TB, JB) : ZB.craftingManager.resetAllPlayerRecipes(IB.Jm), yB.l.Gq("craftingRecipesEdited", {
            itemName: TB,
            recipesForItem: JB
          })
        })), BB.rU(cB.Wd, (BB => {
          let {
            PZ: IB,
            RZ: ZB,
            rZ: JB
          } = BB;
          TB().removeItemName(IB, ZB), (0, kB.d)().client.inventoryPrediction.serverChangeApplied(JB)
        })), BB.rU(cB.Vd, (BB => {
          let {
            YJ: TB
          } = BB;
          ZB.craftingManager.removeRecipes(IB.Jm, TB), yB.l.Gq("craftingRecipesEdited", {
            itemName: TB,
            recipesForItem: []
          })
        }))
      }
    }
    var KB = ZB(6635),
      VB = ZB(37454),
      SB = ZB(364),
      BI = ZB.n(SB),
      II = ZB(4704),
      ZI = ZB(37749),
      TI = ZB(38318),
      JI = ZB(37448);
    class oI {
      constructor(BB, IB) {
        this.Nz = BB, this.setUpQueuedEntity = IB
      }
      register(BB) {
        const IB = this.Nz,
          ZB = (0, kB.d)();
        BB.rU(cB.nf, (BB => {
          let {
            iI: ZB,
            pI: JB,
            aI: oB,
            HI: GB
          } = BB;
          const vB = [JB, oB, GB];
          IB.zW.setPosition(IB.Jm, vB), (0, TB.sendColyMessage)(cB.Sg, {
            Sv: ZB,
            Bk: II.f
          }), yB.l.Gq("localPlayerTeleported", {
            pos: vB,
            isCorrection: !1
          })
        })), BB.rU(cB.qd, (BB => {
          let {
            ro: IB,
            Xo: ZB,
            Lo: TB,
            eo: JB
          } = BB;
          this.setUpQueuedEntity(IB);
          const oB = [ZB, TB, JB];
          yB.l.Gq(`otherPlayerTeleported|${IB}`, {
            pos: oB
          })
        })), BB.rU(cB.Id, (BB => {
          let {
            TJ: ZB,
            JJ: JB,
            oJ: oB,
            GJ: GB,
            vJ: vB,
            kJ: kB,
            cJ: nB,
            hJ: hB,
            nJ: zB,
            NJ: FB
          } = BB;
          const NB = [JB, oB, GB];
          IB.zW.setPosition(IB.Jm, NB);
          const gB = IB.zW.dIB(IB.Jm),
            qB = IB.zW.vx(IB.Jm);
          BI().set(qB.Rl, 0, 0, 0), BI().set(qB.Al, 0, 0, 0), BI().set(qB.zq, vB, kB, nB), qB.Kl(), gB._flying = null !== FB, FB ? (gB.flyAccel.gJ = FB.gJ, gB.flyAccel.qJ = FB.qJ) : gB.flyAccel.reset(), hB && gB.movementType === KB.l.GLIDING && (gB.zJ = hB.zJ, BI().copy(gB.FJ, hB.FJ)), (0, TB.sendColyMessage)(cB.Sg, {
            Sv: ZB,
            Bk: II.f
          }), yB.l.Gq("localPlayerTeleported", {
            pos: NB,
            isCorrection: !0
          })
        })), BB.rU(cB.$e, (BB => {
          let {
            vehicleEId: IB,
            overrides: ZB
          } = BB;
          (0, kB.d)().applyRiddenVehicleSettingOverrides(IB, ZB)
        })), BB.rU(cB.zf, (BB => {
          let {
            iZ: ZB,
            pZ: TB,
            aZ: JB
          } = BB;
          const oB = IB.zW.dIB(IB.Jm).physicsState.type === KB.o.SLEEPING && ZB === KB.o.DEFAULT;
          (0, kB.d)().updatePositionAndPhysics(IB.Jm, {
            type: ZB,
            tier: TB
          }, !0, JB), oB && (0, kB.d)().updateHeldVehicleStatus()
        })), BB.rU(cB.tb, (BB => {
          let {
            QI: ZB,
            sI: TB
          } = BB;
          IB.zW.uIB(IB.Jm).setPose(ZB, TB)
        })), BB.rU(cB.Le, (BB => {
          const {
            rc: ZB,
            sZB: TB
          } = (0, VB.c)([BB[0], BB[1], BB[2]]);
          JI.c.setLookDirection(IB, ZB, TB), (0, ZI.w)(ZB, TB);
          const JB = IB.zW.uIB(IB.Jm);
          JB && (JB.heading = ZB)
        })), BB.rU(cB.Pe, (BB => {
          ZB.client.cameraController.setCameraZoom(BB)
        })), BB.rU(cB.ef, (BB => {
          let {
            WZ: TB,
            dZ: JB
          } = BB;
          ZB.shakePlayerCamera(IB.Jm, TB, JB)
        })), BB.rU(cB.Kc, (BB => {
          IB.zW.uIB(IB.Jm).jumpMultiplier.setMultiplierType("jumpEffectAmount", BB)
        })), (0, TB.onGameResetOnce)((() => {
          IB.zW.uIB(IB.Jm).jumpMultiplier.setMultiplierType("jumpEffectAmount", 1)
        })), BB.rU(cB.Q, (BB => {
          IB.zW.vx(IB.Jm).applyImpulse(BB)
        })), BB.rU(cB.cf, (BB => {
          const ZB = IB.zW.vx(IB.Jm);
          BI().set(ZB.Rl, 0, 0, 0), BI().set(ZB.Al, 0, 0, 0), BI().copy(ZB.zq, BB), ZB.Kl()
        })), (0, TB.onGameResetOnce)((() => {
          (0, TI.setFloatingYValue)(IB.zW.getState(IB.Jm, "physics"), IB.zW.zK(IB.Jm), null)
        })), BB.rU(cB.cc, (BB => {
          let {
            HZ: ZB,
            MZ: TB,
            jZ: JB
          } = BB;
          const oB = (0, HB.e)(ZB);
          if (oB === IB.Jm) {
            const BB = IB.zW.zK(IB.Jm).position;
            JB ??= Math.floor(BB[1]) - 1, (0, TI.setFloatingYValue)(IB.zW.getState(IB.Jm, "physics"), IB.zW.zK(IB.Jm), TB ? JB : null)
          }(0, aB.c)(IB).setFloating(oB, TB, JB);
          const GB = IB.zW.getState(oB, "floating");
          GB && (GB.isFloating = TB, GB.jZ = TB ? JB : null)
        }))
      }
    }

    function GI(BB, IB, ZB, TB, JB) {
      let oB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (!BB.zW.fIB(BB.Jm)) return console.log("Got resync inven but don't have inven component"), void IB.acknowledge(TB);
      oB && console.error("Had to sync inven"), IB.kBB(TB, JB) && ZB.Gq("chestToggleFromServer", !1, !0), ZB.Gq("syncedInvenFromServer")
    }
    var vI = ZB(39067),
      kI = ZB(39076),
      cI = ZB(2038);
    var nI = ZB(4691);

    function hI(BB) {
      const IB = BB.vz;
      let ZB = 0,
        JB = -1,
        GB = -1 / 0,
        vB = null,
        kB = !0;
      const nB = () => {
        if (++ZB % 10 !== 0) return;
        const nB = (0, TB.getLastReceivedPacketId)();
        if (nB <= JB) return;
        const [hB, zB, FB] = BB.zW.aU(BB.Jm), NB = ! function(BB) {
          var IB;
          let ZB = null === (IB = BB.zW.YZB(BB.Jm)) || void 0 === IB ? void 0 : IB.zN;
          if (void 0 === ZB) return !1;
          const TB = new Set;
          for (; void 0 !== ZB && !TB.has(ZB);) {
            var JB;
            TB.add(ZB);
            const IB = BB.zW.getState(ZB, "smoothToServerPos"),
              oB = Array.isArray(IB) ? null : null === IB || void 0 === IB ? void 0 : IB.serverPosition;
            if (oB) {
              const IB = BB.zW.aU(ZB);
              if (Math.abs(IB[0] - oB[0]) > 10 || Math.abs(IB[1] - oB[1]) > 10 || Math.abs(IB[2] - oB[2]) > 10) return !0
            }
            ZB = null === (JB = BB.zW.YZB(ZB)) || void 0 === JB ? void 0 : JB.zN
          }
          return !1
        }(BB) && function(BB, IB, ZB, TB) {
          const JB = oB.f.YN;
          for (let oB = 0; oB < BB.length; oB++) {
            const GB = BB[oB];
            if (!(0, nI.g)(IB, ZB, TB, GB[0] * JB, GB[1] * JB, GB[2] * JB)) return !1
          }
          return !0
        }(IB.Bq.dN, hB, zB, FB), gB = null === vB || Math.abs(hB - vB[0]) > 8 || Math.abs(zB - vB[1]) > 8 || Math.abs(FB - vB[2]) > 8, qB = !kB || gB || performance.now() - GB >= 1e4;
        kB = NB, NB && qB && (JB = nB, GB = performance.now(), vB = [hB, zB, FB], (0, TB.sendColyMessage)(cB.xg, {
          cv: nB
        }))
      };
      return BB.on("Iz", nB), () => {
        BB.off("Iz", nB)
      }
    }
    var zI = ZB(39078),
      FI = ZB(1579),
      NI = ZB(2908),
      gI = ZB(1868),
      qI = ZB(3088),
      yI = ZB(4952);
    class UI {
      constructor(BB, IB, ZB) {
        this.Nz = BB, this.gameNameWithVariation = IB, this.connectionResume = ZB, this.stopChunkReports = () => {}, this.replayResume = null
      }
      clearUiRequestsAndQTEs() {
        yI.d.reset(), (0, vI.b)()
      }
      startChunkReports() {
        const BB = function(BB) {
            let IB = null,
              ZB = -1 / 0,
              JB = null;
            const oB = () => {
                JB = null;
                const oB = Math.ceil(BB.Ip[0]),
                  GB = Math.ceil(BB.Ip[1]);
                IB && IB[0] === oB && IB[1] === GB || (IB = [oB, GB], ZB = performance.now(), (0, TB.sendColyMessage)(cB.vg, {
                  AG: oB,
                  tG: GB
                }))
              },
              GB = () => {
                null === JB && (JB = setTimeout(oB, Math.max(0, ZB + 250 - performance.now())))
              };
            return oB(), BB.on("addRemoveDistanceChanged", GB), () => {
              BB.off("addRemoveDistanceChanged", GB), null !== JB && (clearTimeout(JB), JB = null)
            }
          }(this.Nz.vz),
          IB = hI(this.Nz);
        this.stopChunkReports = () => {
          BB(), IB()
        }
      }
      restartChunkStreaming() {
        (0, ZI.k)(this.Nz, (0, kB.d)().recentChunkEdits.chunksEditedSince(this.connectionResume.getDroppedAt() - zI.b)), this.startChunkReports()
      }
      register(BB) {
        const IB = this.Nz,
          ZB = (0, kB.d)();
        BB.rU(cB.ed, (BB => {
          UB.c.applyNewClientOptions(BB)
        })), BB.rU(cB.xd, (BB => {
          NI.c.onReceiveColyseusPing(BB)
        })), BB.rU(cB.Se, (BB => {
          let {
            key: IB,
            value: ZB
          } = BB;
          (0, WB.setCookie)(this.gameNameWithVariation, IB, ZB)
        })), BB.rU(cB.Ue, (BB => {
          yB.l.Gq("setDiscordReportKey", BB)
        })), (0, TB.onGameResetOnce)((() => {
          this.stopChunkReports()
        })), BB.rU(cB.vc, (JB => {
          const {
            cB: oB,
            nB: GB
          } = JB;
          if ((0, TB.setAdjustment)(GB), this.connectionResume.onInitialInfo(JB.hB, JB.zB), TB.offlineInputReplay.qY(JB.FB), this.connectionResume.isResuming()) {
            console.log("Resumed the connection as eId", oB);
            try {
              null === JB.NB && (0, kB.d)().client.inventoryPrediction.dropPending(), this.stopChunkReports(), iB(IB.vz), UB.c.apply({
                shopInfo: null,
                _shopVersion: cI.d
              });
              const ZB = IB.zW.tIB(IB.Jm);
              ZB.Qo && (ZB.chestClosed(), yB.l.Gq("chestToggleFromServer", !1, !0)), this.clearUiRequestsAndQTEs(), yB.l.Gq("initInfoReceived", BB)
            } finally {
              const BB = null === JB.NB ? null : {
                sync: null,
                endSeq: null
              };
              this.replayResume = BB, this.connectionResume.onResumeInitialInfo(JB.NB, (() => {
                BB.endSeq = (0, kB.d)().client.inventoryPrediction.lastActionSeq
              })), null === BB && this.restartChunkStreaming()
            }
          } else console.log("Local client is eId", oB), gI.d.markAdmitted(), (0, ZI.n)(IB), yB.l.Gq("loadingScreenState", "loadingPage:loadingWorld"), IB.oIB = oB, IB.zW.TIB(IB.Jm, IB.zW.names.entityName) && IB.zW.Qr(IB.Jm, IB.zW.names.entityName), (0, kB.d)().setEntityName(IB.oIB, (0, kB.d)().getRawEntityName(IB.Jm)), IB.Tm[IB.oIB] = {}, IB.zW.xR(IB.Jm, IB.zW.names.entityName), yB.l.Gq("initInfoReceived", BB), this.startChunkReports(), ZB.client.onServerConnectionFinalised()
        })), BB.rU(cB.ye, (() => {
          this.connectionResume.isResuming() ? this.connectionResume.onResumed((() => {
            const BB = this.replayResume;
            if (this.replayResume = null, !BB) return;
            this.restartChunkStreaming();
            const {
              inventoryPrediction: ZB
            } = (0, kB.d)().client, {
              sync: JB
            } = BB, oB = new Set(TB.offlineInputReplay.takeDroppedActions());
            if (JB) {
              var GB;
              const TB = null !== (GB = BB.endSeq) && void 0 !== GB ? GB : ZB.lastActionSeq;
              ZB.forget((BB => BB > JB.tJ && BB <= TB || oB.has(BB))), GI(IB, ZB, yB.l, JB.tJ, JB.load)
            } else ZB.dropPending(), ZB.askForSnapshot()
          })) : console.warn("ResumeComplete arrived without a resume")
        })), BB.rU(cB.if, (BB => {
          let {
            Co: ZB,
            po: TB,
            tJ: JB
          } = BB;
          const {
            inventoryPrediction: oB
          } = (0, kB.d)().client, GB = () => {
            IB.zW.tIB(IB.Jm).loadFromString(ZB)
          };
          this.replayResume && (this.replayResume.sync = {
            tJ: JB,
            load: GB
          }), GI(IB, oB, yB.l, JB, GB, TB)
        })), BB.rU(cB.Pd, (BB => {
          let {
            type: IB,
            location1: ZB,
            location2: TB,
            location3: JB,
            score: oB
          } = BB;
          (0, qI.logProgressionEvent)({
            type: IB,
            location1: ZB,
            location2: TB,
            location3: JB,
            score: oB
          })
        })), BB.rU(cB.we, (BB => {
          let {
            type: IB,
            resourceType: ZB,
            amount: TB,
            category: JB,
            itemName: oB
          } = BB;
          (0, qI.logResourceEvent)({
            type: IB,
            resourceType: ZB,
            amount: TB,
            category: JB,
            itemName: oB
          })
        })), BB.rU(cB.Qc, (BB => {
          let {
            leaveEventType: IB,
            category: ZB,
            subCategory: TB,
            value: JB
          } = BB;
          (0, qI.updateLeaveValue)({
            leaveEventType: IB,
            category: ZB,
            subCategory: TB,
            value: JB
          })
        })), BB.rU(cB.Sb, (BB => {
          let {
            cat1: IB,
            cat2: ZB,
            cat3: TB,
            value: JB
          } = BB;
          (0, qI.logCustomAnalyticsEvent)({
            cat1: IB,
            cat2: ZB,
            cat3: TB,
            value: JB
          })
        })), BB.rU(cB.Mc, (BB => {
          (0, kB.d)().client.leaveGameUnwanted({
            reason: BB,
            requiresRefresh: !1,
            canReconnect: !1,
            automaticallyReconnect: !1
          }), (0, FI.navigatePreserveSearch)("/")
        })), BB.rU(cB.Ge, (BB => {
          yB.l.Gq("serverUpdating", Date.now() + BB, !0)
        })), BB.rU(cB.dd, kI.e), BB.rU(cB.Xc, (BB => {
          console.error(`[logErrorToConsole]: ${BB}`)
        }))
      }
    }
    var WI = ZB(39082),
      dI = ZB(39094),
      CI = ZB(1058),
      QI = ZB(39090),
      sI = ZB(2510),
      wI = ZB(3820);
    class OI {
      constructor(BB, IB) {
        this.Nz = BB, this.clientApi = IB
      }
      register(BB) {
        const IB = this.Nz,
          ZB = (0, kB.d)();
        BB.rU(cB.wb, (BB => {
          let {
            chatMsgId: IB,
            content: ZB,
            chatterEId: TB
          } = BB;
          yB.l.Gq("chat", {
            serverChatMsgId: IB,
            content: ZB,
            chatterEId: TB
          }, !0)
        })), BB.rU(cB.of, (BB => {
          yB.l.Gq("TopRightHelper", BB, !0)
        })), BB.rU(cB.lf, (BB => {
          (0, WI.d)(BB)
        })), BB.rU(cB.Oc, (BB => {
          let {
            category: IB,
            timeframe: ZB,
            data: TB
          } = BB;
          yB.l.Gq("leaderboardResponse", {
            category: IB,
            timeframe: ZB,
            data: TB
          })
        })), BB.rU(cB.ff, (() => {
          yB.l.Gq("showShopTutorial", null, !0)
        })), BB.rU(cB.Ld, (BB => {
          yB.l.Gq("progressBarUpdate", BB, !0)
        })), BB.rU(cB.xc, (BB => {
          yB.l.Gq("middleScreenBarInitiate", {
            duration: BB.iJ,
            pJ: BB.pJ,
            horizBarRemOffset: BB.aJ
          }, !0)
        })), BB.rU(cB._d, (() => {
          yB.l.Gq("middleScreenBarRemove", !0)
        })), BB.rU(cB.Te, (BB => {
          let {
            id: IB,
            position: ZB,
            style: TB,
            MI: JB,
            RI: oB
          } = BB;
          yB.l.Gq("setDirectionArrow", {
            id: IB,
            position: ZB,
            style: TB,
            text: (0, cB.z)(JB),
            RI: oB
          }, !0)
        })), BB.rU(cB.Gb, (BB => {
          let {
            id: IB
          } = BB;
          yB.l.Gq("clearDirectionArrow", {
            id: IB
          }, !0)
        })), BB.rU(cB.Pb, (BB => {
          (0, wI.onCosmeticPackGranted)(BB)
        })), BB.rU(cB.nd, (BB => {
          let {
            id: IB,
            tB: ZB
          } = BB;
          const {
            type: JB,
            params: oB
          } = (0, dI.i)(ZB), GB = {
            ...oB
          };
          for (const TB of dI.e) TB in GB && GB[TB] && (GB[TB] = (0, cB.z)(GB[TB]));
          yI.d.queueQTE(IB, JB, GB).getResult().then((BB => {
            "boolean" === typeof BB && (0, TB.sendColyMessage)(cB.ti, {
              qteId: IB,
              qteResponse: BB
            })
          }))
        })), BB.rU(cB.ae, (BB => {
          yI.d.cancelQTE(BB)
        })), (0, TB.onGameResetOnce)((() => {
          yI.d.reset()
        })), BB.rU(cB.od, (BB => {
          let {
            id: IB,
            clientParameters: ZB
          } = BB;
          (0, vI.f)(IB, ZB)
        })), BB.rU(cB.de, (BB => {
          (0, vI.j)(BB)
        })), BB.rU(cB.tf, (BB => {
          let {
            text: IB,
            id: ZB,
            destructive: JB
          } = BB;
          (0, vI.k)(ZB, IB, JB, (BB => {
            (0, TB.sendColyMessage)(cB.Mj, {
              vk: ZB,
              kk: BB,
              nk: 5
            })
          }))
        })), BB.rU(cB.rd, (BB => {
          let {
            info: IB
          } = BB;
          yB.l.Gq("overShopInfo", IB, !0)
        })), BB.rU(cB.kc, (BB => {
          let {
            vB: ZB,
            kB: TB
          } = BB;
          this.clientApi.openShop(IB.Jm, ZB, TB)
        })), BB.rU(cB.gc, (BB => {
          let {
            jo: IB,
            Po: ZB,
            Ro: TB
          } = BB;
          yB.l.Gq("flyingMiddleMessage", {
            content: (0, cB.z)(IB),
            Po: ZB,
            Ro: TB
          }, !0)
        })), BB.rU(cB.Kf, (BB => {
          const IB = BB === CI.f ? null : {
            message: `Currently loaded as variation: ${BB}`,
            type: "Warning"
          };
          yB.l.Gq("showPermanentBottomMessage", IB, !0)
        })), BB.rU(cB.lc, (BB => {
          let {
            messageType: IB,
            data: TB
          } = BB;
          (0, QI.f)(IB) ? (0, QI.c)(IB, TB) : ("freeCamPerms" === IB && ZB.client.freeCameraController.setPerms(TB.key, TB.value), ZB.client.triggerGameCallback("onReceivedMessageFromServer", IB, TB))
        })), BB.rU(cB.Mb, sI.o)
      }
    }
    class YI {
      constructor(BB, IB, ZB, TB) {
        this.gameNameWithVariation = BB, this.Nz = ZB, this.connectionResume = TB, this.stateReplicationHandler = void 0, this.stateReplicationHandler = new CB.b(IB, this.Nz)
      }
      setupStateReplicationHandlers() {
        this.stateReplicationHandler.setup(), (0, TB.onGameResetOnce)((() => {
          this.stateReplicationHandler.dispose()
        }))
      }
      KcB(BB) {
        this.stateReplicationHandler.dispose(), this.stateReplicationHandler = new CB.b(BB, this.Nz), this.stateReplicationHandler.setup()
      }
      setupOnMessageListeners(BB, IB) {
        const ZB = this.Nz,
          TB = BB => {
            this.stateReplicationHandler.setUpIfQueued(BB)
          };
        new UI(ZB, this.gameNameWithVariation, this.connectionResume).register(BB), new pB(ZB).register(BB), new DB(ZB).register(BB), new RB(ZB, TB).register(BB), new bB(ZB, TB).register(BB), new OI(ZB, IB).register(BB), new oI(ZB, TB).register(BB)
      }
    }
    window.addEventListener("beforeunload", (() => {}));
    var iI = ZB(39098),
      pI = ZB(39104),
      aI = ZB(696),
      HI = ZB(3101);
    class MI {
      constructor(BB, IB, ZB, TB) {
        this.msgHandler = ZB, this.listener = TB, this.session = void 0, this.attachedRoom = null, this.detachRoomListeners = null, this.suspended = !1, this.droppedAt = 0, this.session = new iI.e({
          reconnect: BB,
          isLive: () => TB.isLive(),
          onReconnected: BB => {
            this.resumeOnRoom(BB)
          },
          onGaveUp: (BB, IB) => {
            TB.onGaveUp(BB, IB)
          },
          freeze: IB,
          releaseSeat: IB => {
            BB(IB).then((BB => {
              BB.leave(!0)
            }), (BB => {
              console.warn("Couldn't release the held seat of a game left while reconnecting", BB)
            }))
          }
        })
      }
      onInitialInfo(BB, IB) {
        this.session.onInitialInfo(BB, IB)
      }
      isResuming() {
        return this.session.isResuming()
      }
      getDroppedAt() {
        return this.droppedAt
      }
      onResumeInitialInfo(BB, IB) {
        if (this.session.onResuming(), null === BB) {
          try {
            (0, kB.d)().client.itemDropPrediction.reset()
          } catch (ZB) {
            console.error("Error dropping the item drop predictions on resuming", ZB)
          }
          return TB.offlineInputReplay.discard(), void this.setSuspended(!1)
        }(0, kB.d)().client.itemDropPrediction.onResumeReplayOffered(), TB.offlineInputReplay.replayFrom(BB.qB, IB)
      }
      onResumed(BB) {
        this.setSuspended(!1), (0, TB.resendBeacons)();
        try {
          BB()
        } catch (IB) {
          console.error("Error completing the resume", IB)
        } finally {
          this.session.onResumed()
        }
      }
      attachRoom(BB) {
        const IB = (0, aI.k)((() => BB.connection.isOpen));
        BB.KU(IB);
        const ZB = new pI.e((() => {
          this.session.canHoldSeat() && this.listener.isLive() && (console.warn("The game server went silent, reconnecting"), this.onConnectionDropped(BB, "silent"), BB.leave(!1))
        }));
        BB.onStateChange((() => {
          ZB.heard()
        }));
        const TB = IB => {
          IB.persisted || BB.leave(!0)
        };
        window.addEventListener("pagehide", TB), BB.KU(((IB, ZB) => {
          if (BB === this.attachedRoom && this.listener.isLive()) return (0, oB.g)(IB) && this.session.canHoldSeat() ? (console.warn(`Connection to the game server dropped with code ${IB}, reconnecting`), this.listener.onDropped(IB, ZB), void this.onConnectionDropped(BB, String(IB))) : void this.listener.onRoomLeft(IB, ZB)
        })), this.attachedRoom = BB, this.detachRoomListeners = () => {
          IB(), ZB.dispose(), window.removeEventListener("pagehide", TB)
        }
      }
      dispose() {
        this.detachRoom(), this.session.leave(), this.setSuspended(!1)
      }
      setSuspended(BB) {
        BB !== this.suspended && (this.suspended = BB, (0, TB.setConnectionSuspended)(BB), (0, kB.d)().client.itemDropPrediction.setSuspended(BB))
      }
      detachRoom() {
        var BB;
        null === (BB = this.detachRoomListeners) || void 0 === BB || BB.call(this), this.detachRoomListeners = null, this.attachedRoom = null
      }
      onConnectionDropped(BB, IB) {
        (0, HI.reportClientError)("disconnect", "Left room", IB), this.isResuming() || (this.droppedAt = Date.now()), this.detachRoom(), TB.offlineInputReplay.onConnectionLost(), this.setSuspended(!0), this.session.onConnectionLost(BB.reconnectionToken)
      }
      resumeOnRoom(BB) {
        if (!this.listener.isLive()) return console.warn("Left the game while reconnecting, leaving the resumed room"), BB.leave(!0), void this.dispose();
        console.log("Reconnected to the game server, waiting for the game to resume"), (0, tB.r)(), TB.offlineInputReplay.onConnectionReplaced(), this.msgHandler.KcB(BB), this.listener.onReconnected(BB), this.attachRoom(BB)
      }
    }
    var jI = ZB(3141),
      PI = ZB(3150),
      RI = ZB(1382),
      rI = ZB(1362),
      mI = ZB(4856),
      XI = ZB(3316),
      LI = ZB(1125),
      eI = ZB(37781),
      uI = ZB(39110),
      fI = ZB(9011),
      lI = ZB(39119),
      AI = ZB(1261),
      tI = ZB(36516),
      bI = ZB(39126),
      xI = ZB(1787),
      EI = ZB(2921);

    function DI(BB) {
      var IB, ZB;
      if ("object" !== typeof BB || null === BB) return {
        errType: typeof BB
      };
      const TB = BB;
      return {
        errType: null !== (IB = null === (ZB = BB.constructor) || void 0 === ZB ? void 0 : ZB.name) && void 0 !== IB ? IB : "",
        errName: "string" === typeof TB.name ? TB.name : "",
        eventType: "string" === typeof TB.type ? TB.type : "",
        errStack: "string" === typeof TB.stack ? TB.stack.split("\n").slice(1).join(" | ") : ""
      }
    }

    function KI(BB) {
      if ("undefined" !== typeof ProgressEvent && BB instanceof ProgressEvent) return !0;
      if (!(BB instanceof Error)) return !1;
      const IB = BB.code;
      return "ServerError" === BB.name && void 0 === IB || "AbortError" === BB.name || "seat reservation expired." === BB.message || "early_leave" === BB.message
    }(0, gB.o)((BB => {
      (0, HI.reportClientError)("wasm_net", BB)
    }));
    let VI = !0;

    function SI() {
      VI = !1
    }
    class BZ {
      constructor(BB) {
        this.gameNameWithVariation = void 0, this.lobbyName = void 0, this.colyClient = void 0, this.userContext = void 0, this.joinedAt = null, this.joinAdHold = !1, this.checkSendPath = () => {}, this.Nz = void 0, this.connectionResume = void 0, this.incomingMsgInitialisor = void 0, this.gameNameWithVariation = BB.gameNameWithVariation, this.lobbyName = BB.lobbyName, this.colyClient = BB.colyClient, this.userContext = BB.userContext
      }
      async connectToServer(BB, IB, ZB) {
        UB.c.reset(), BB.Tm = {
          [BB.Jm]: {}
        }, BB.oIB = void 0, (0, tB.r)(), (0, kB.d)().removeAllEntityNames(), (0, kB.d)().setEntityName(BB.Jm, this.userContext.getPlayerName()), (0, RI.l)({
          lobbyName: this.lobbyName
        }), console.log("Waiting for clientConnection passed promise to resolve"), this.joinAdHold = (0, xI.g)(), console.log("joining server with game", this.gameNameWithVariation, "lobbyName", this.lobbyName);
        const GB = performance.now();
        ZB.aborted || (0, rI.n)("wasm_core_ready", GB);
        const vB = (0, lI.g)(this.userContext, (() => {
          const {
            roomName: TB,
            joinOptions: JB
          } = (0, dB.d)(this.userContext, this.gameNameWithVariation, this.lobbyName, IB, (BB => XI.e.isUsingCustomGameTexturePack(BB)));
          return JB.joinAdHold = this.joinAdHold, JB.renderBackend = (0, EI.e)(BB.Ig), (0, uI.h)((() => this.colyClient.joinOrCreateUntil(ZB, TB, JB)), ZB)
        }));
        return yB.l.Gq("loadingScreenState", "loadingPage:joiningLobby"), await vB.then((IB => {
          if (this.joinedAt = performance.now(), (0, rI.n)("wasm_joined", this.joinedAt), this.Nz = BB, this.joinAdHold) {
            const BB = (0, xI.o)((() => {
              IB.send(JB.f), (0, rI.i)(), gI.d.markJoinAdEnded()
            }));
            IB.KU(BB), (0, TB.onGameResetOnce)(BB)
          }
          const ZB = new qB(IB);
          this.connectionResume = new MI((BB => this.colyClient.reconnect(BB)), (IB => {
            BB.VY(IB)
          }), ZB, {
            isLive: () => (0, kB.d)().client.getMsgHandler() === ZB,
            onDropped: (BB, IB) => {
              (0, PI.i)(BB) || this.logUnrecognisedConnectionLoss(BB, void 0, {
                site: "drop",
                closeReason: null !== IB && void 0 !== IB ? IB : "",
                sinceJoined: this.sinceJoined()
              })
            },
            onRoomLeft: (BB, IB) => {
              this.onRoomLeft(BB, IB)
            },
            onReconnected: BB => {
              this.incomingMsgInitialisor.KcB(BB), this.checkSendPath = (0, eI.f)(ZB, BB, gB.s)
            },
            onGaveUp: (BB, IB) => {
              this.onResumeGaveUp(BB, IB)
            }
          }), this.connectionResume.attachRoom(IB), (0, TB.onGameResetOnce)((() => {
            this.connectionResume.dispose()
          }));
          const oB = ZB.send,
            GB = ZB.rU,
            vB = ZB.xZB.send,
            cB = ZB.xZB.rU,
            nB = ZB.EcB;
          this.checkSendPath = (0, eI.f)(ZB, IB, gB.s);
          const hB = setInterval((() => {
            oB === ZB.send && GB === ZB.rU && vB === ZB.xZB.send && cB === ZB.xZB.rU && nB === ZB.EcB || SI(), this.checkSendPath()
          }), 1e4);
          return (0, TB.onGameResetOnce)((() => {
            clearInterval(hB)
          })), {
            success: !0,
            successDetails: ZB
          }
        })).catch((IB => {
          if (ZB.aborted && IB === (0, AI.e)(ZB)) return {
            success: !1,
            failDetails: {
              reason: "Left the game while it loaded",
              requiresRefresh: !1,
              canReconnect: !1
            }
          };
          if (IB instanceof tI.f) return console.warn("Seat request timed out", this.lobbyName, this.gameNameWithVariation), {
            success: !1,
            failDetails: {
              reason: IB.message,
              requiresRefresh: !1,
              canReconnect: !1,
              gameServerUnreachable: "timedOut",
              joinFailure: (0, bI.b)(IB, IB.leg)
            }
          };
          BB.wg(`Failed to connect to bloxd room, check your internet connection. lobbyName: ${this.lobbyName}, gameNameWithVariation: ${this.gameNameWithVariation} code: ${IB.code}\n`, IB);
          const TB = IB.code;
          return TB === oB.c.serverUpdating.code ? (this.goToUpdateWaiting(), {
            success: !1,
            failDetails: {
              reason: oB.c.serverUpdating.text,
              requiresRefresh: !1,
              canReconnect: !0,
              goesToUpdateWaiting: !0
            }
          }) : {
            success: !1,
            failDetails: {
              ...this.onConnectionToServerLost(TB, IB.message, {
                site: "join",
                sinceJoinStart: (0, PI.e)(performance.now() - GB),
                ...DI(IB)
              }, KI(IB)),
              rematch: (0, uI.e)(IB),
              gameRefused: (0, fI.e)(IB),
              joinFailure: (0, bI.b)(IB, this.colyClient.legReached())
            }
          }
        }))
      }
      setupServerListeners(BB, IB, ZB) {
        yB.l.Gq("loadingScreenState", "loadingPage:loadingPlayerInfo"), this.incomingMsgInitialisor = new YI(this.gameNameWithVariation, IB.xZB, BB, this.connectionResume), this.incomingMsgInitialisor.setupStateReplicationHandlers();
        const JB = IB.InB();
        this.incomingMsgInitialisor.setupOnMessageListeners(JB, ZB), (0, TB.onConnectionToServerReady)(JB, IB), this.joinAdHold && gI.d.markAdmissionAwaited(), JB.finishRegistration()
      }
      dispose() {
        this.connectionResume.dispose()
      }
      onResumeGaveUp(BB, IB) {
        (0, LI.Og)(new Error("Reconnect failed"), {
          ...(0, jI.j)(IB),
          game: this.gameNameWithVariation
        }), (0, HI.reportClientError)("disconnect", "Reconnect failed", IB.reason), (0, kB.d)().client.leaveGameUnwanted({
          reason: {
            translationKey: "general:lostConnection"
          },
          canReconnect: !BB,
          canPlayAgain: BB,
          requiresRefresh: !1,
          automaticallyReconnect: !1
        }), (0, FI.navigatePreserveSearch)("/")
      }
      sinceJoined() {
        return null === this.joinedAt ? "" : (0, PI.e)(performance.now() - this.joinedAt)
      }
      onRoomLeft(BB, IB) {
        var ZB;
        if (BB === oB.c.gameOrPluginKick.code) return;
        if (console.log(`Left room with code ${BB}`), BB === oB.c.serverUpdating.code) return (0, HI.reportClientError)("disconnect", "Left room", "serverUpdating"), (0, kB.d)().client.leaveGame(this.getUpdateWaitingUrl()), void this.goToUpdateWaiting();
        this.Nz.wg(`Kicked from server with code ${BB}`, new Error);
        const TB = Object.keys(oB.c).find((IB => oB.c[IB].code === BB));
        (0, HI.reportClientError)("disconnect", "Left room", null !== TB && void 0 !== TB ? TB : String(BB));
        const JB = this.onConnectionToServerLost(BB, void 0, {
          site: "leave",
          closeReason: null !== IB && void 0 !== IB ? IB : "",
          sinceJoined: this.sinceJoined()
        });
        (0, kB.d)().client.leaveGameUnwanted({
          reason: `You have disconnected from the server.\n${JB.reason}`,
          canReconnect: JB.canReconnect,
          requiresRefresh: JB.requiresRefresh,
          automaticallyReconnect: null !== (ZB = JB.automaticallyReconnect) && void 0 !== ZB && ZB
        }), (0, FI.navigatePreserveSearch)("/")
      }
      getUpdateWaitingUrl() {
        return (0, mI.A)(this.gameNameWithVariation, this.lobbyName)
      }
      goToUpdateWaiting() {
        (0, FI.navigatePreserveSearch)(this.getUpdateWaitingUrl())
      }
      onConnectionToServerLost(BB, IB, ZB) {
        var TB;
        let JB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (null !== (TB = IB) && void 0 !== TB && TB.endsWith(oB.k) && (this.userContext.invalidateTrafficCode(), IB = IB.replace(oB.k, "")), BB === oB.c.outdatedVersion.code) return console.error("Outdated client with version ", GB.b, ", refreshing page"), (0, WB.reloadBloxd)(), {
          reason: "Outdated client",
          requiresRefresh: !0,
          canReconnect: !1
        };
        if (BB === oB.c.loadRecaptchaError.code) return console.error("Load recaptcha error, refreshing page"), (0, WB.reloadBloxd)(), {
          reason: "Failed to load recaptcha",
          requiresRefresh: !0,
          canReconnect: !1
        };
        for (const GB in oB.c) {
          const {
            code: ZB,
            text: TB,
            canReconnect: JB
          } = oB.c[GB];
          if (ZB === BB) {
            console.log("matched known error", BB, "leaving game");
            return {
              reason: "" !== TB ? TB : IB || `Code: ${BB}`,
              requiresRefresh: !1,
              canReconnect: JB,
              automaticallyReconnect: ZB === oB.c.customGameUpdated.code || ZB === oB.c.duplicateLobbyNameError.code
            }
          }
        }
        return console.log("Didn't match known error, leaving game"), (0, PI.g)(BB) || JB ? console.warn("Connection lost", BB, IB) : this.logUnrecognisedConnectionLoss(BB, IB, ZB), {
          reason: `Either your internet isn't working or this is a bug.\nCode: ${BB}`,
          requiresRefresh: !1,
          canReconnect: !1,
          gameServerUnreachable: JB ? "failed" : void 0
        }
      }
      logUnrecognisedConnectionLoss(BB, IB, ZB) {
        (0, LI.Og)(new Error("Unrecognised connection loss"), {
          code: String(BB),
          cause: null !== IB && void 0 !== IB ? IB : "",
          ...ZB,
          game: this.gameNameWithVariation,
          ...(0, PI.l)()
        })
      }
    }
  },
  39023: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => bZ,
      f: () => SZ
    });
    var TB, JB, oB, GB, vB, kB, cB, nB, hB, zB, FB, NB, gB, qB, yB, UB, WB, dB, CB, QB, sB, wB, OB, YB, iB, pB, aB, HB, MB, jB, PB, RB, rB, mB, XB, LB, eB, uB, fB, lB, AB, tB, bB, xB, EB, DB, KB, VB, SB, BI, II, ZI, TI, JI, oI, GI, vI, kI, cI, nI, hI, zI, FI, NI, gI, qI, yI, UI, WI, dI, CI, QI, sI, wI, OI, YI, iI, pI, aI, HI, MI, jI, PI, RI, rI, mI, XI, LI, eI, uI, fI, lI, AI, tI, bI, xI, EI, DI, KI, VI = ZB(24),
      SI = ZB(37192),
      BZ = ZB(39032),
      IZ = ZB(39039),
      ZZ = ZB(9201),
      TZ = ZB(663),
      JZ = ZB(655),
      oZ = ZB(36827);
    let GZ = (TB = (0, ZZ.type)("number"), JB = (0, ZZ.type)("number"), oB = (0, ZZ.type)("number"), GB = (0, ZZ.type)("number"), vB = (0, ZZ.type)("number"), kB = (0, ZZ.type)("number"), cB = (0, ZZ.type)("string"), nB = class extends ZZ.Schema {
        constructor() {
          super(...arguments), (0, BZ.d)(this, "id", hB, this), (0, BZ.d)(this, "amount", zB, this), (0, BZ.d)(this, "x", FB, this), (0, BZ.d)(this, "y", NB, this), (0, BZ.d)(this, "z", gB, this), (0, BZ.d)(this, "size", qB, this), (0, BZ.d)(this, "attributes", yB, this)
        }
      }, hB = (0, IZ.b)(nB.prototype, "id", [TB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), zB = (0, IZ.b)(nB.prototype, "amount", [JB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), FB = (0, IZ.b)(nB.prototype, "x", [oB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), NB = (0, IZ.b)(nB.prototype, "y", [GB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), gB = (0, IZ.b)(nB.prototype, "z", [vB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), qB = (0, IZ.b)(nB.prototype, "size", [kB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 1
        }
      }), yB = (0, IZ.b)(nB.prototype, "attributes", [cB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "{}"
        }
      }), nB),
      vZ = (UB = (0, ZZ.type)("string"), WB = (0, ZZ.type)("string"), dB = class extends ZZ.Schema {
        constructor() {
          super(...arguments), (0, BZ.d)(this, "itemName", CB, this), (0, BZ.d)(this, "enchantmentTier", QB, this)
        }
      }, CB = (0, IZ.b)(dB.prototype, "itemName", [UB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), QB = (0, IZ.b)(dB.prototype, "enchantmentTier", [WB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), dB),
      kZ = (sB = (0, ZZ.type)("string"), wB = (0, ZZ.type)("string"), OB = (0, ZZ.type)("number"), YB = (0, ZZ.type)("number"), iB = (0, ZZ.type)("number"), pB = (0, ZZ.type)("float32"), aB = (0, ZZ.type)("float32"), HB = (0, ZZ.type)("float32"), MB = (0, ZZ.type)("string"), jB = (0, ZZ.type)(["number"]), PB = (0, ZZ.type)("boolean"), RB = class extends ZZ.Schema {
        constructor() {
          super(...arguments), (0, BZ.d)(this, "type", rB, this), (0, BZ.d)(this, "name", mB, this), (0, BZ.d)(this, "x", XB, this), (0, BZ.d)(this, "y", LB, this), (0, BZ.d)(this, "z", eB, this), (0, BZ.d)(this, "xRotation", uB, this), (0, BZ.d)(this, "yRotation", fB, this), (0, BZ.d)(this, "zRotation", lB, this), (0, BZ.d)(this, "followingEId", AB, this), (0, BZ.d)(this, "followingOffset", tB, this), (0, BZ.d)(this, "shouldMatchFollowingEntityRotation", bB, this)
        }
      }, rB = (0, IZ.b)(RB.prototype, "type", [sB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), mB = (0, IZ.b)(RB.prototype, "name", [wB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return ""
        }
      }), XB = (0, IZ.b)(RB.prototype, "x", [OB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), LB = (0, IZ.b)(RB.prototype, "y", [YB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), eB = (0, IZ.b)(RB.prototype, "z", [iB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), uB = (0, IZ.b)(RB.prototype, "xRotation", [pB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), fB = (0, IZ.b)(RB.prototype, "yRotation", [aB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), lB = (0, IZ.b)(RB.prototype, "zRotation", [HB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), AB = (0, IZ.b)(RB.prototype, "followingEId", [MB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), tB = (0, IZ.b)(RB.prototype, "followingOffset", [jB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new ZZ.ArraySchema(0, 0, 0)
        }
      }), bB = (0, IZ.b)(RB.prototype, "shouldMatchFollowingEntityRotation", [PB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !0
        }
      }), RB),
      cZ = (xB = (0, ZZ.type)("float32"), EB = (0, ZZ.type)("float32"), DB = (0, ZZ.type)("boolean"), KB = (0, ZZ.type)("boolean"), VB = (0, ZZ.type)("float32"), SB = (0, ZZ.type)("boolean"), BI = (0, ZZ.type)("string"), II = (0, ZZ.type)("string"), ZI = (0, ZZ.type)("string"), TI = (0, ZZ.type)("string"), JI = (0, ZZ.type)(["number"]), oI = (0, ZZ.type)("number"), GI = (0, ZZ.type)({
        map: vZ
      }), vI = class extends kZ {
        constructor() {
          super(...arguments), (0, BZ.d)(this, "scale", kI, this), (0, BZ.d)(this, "speed", cI, this), (0, BZ.d)(this, "jumping", nI, this), (0, BZ.d)(this, "crouching", hI, this), (0, BZ.d)(this, "cameraPitch", zI, this), (0, BZ.d)(this, "armSwinging", FI, this), (0, BZ.d)(this, "heldItemName", NI, this), (0, BZ.d)(this, "heldItemEnchantmentTier", gI, this), (0, BZ.d)(this, "pose", qI, this), (0, BZ.d)(this, "ridingVehicleEId", yI, this), (0, BZ.d)(this, "meshOffset", UI, this), (0, BZ.d)(this, "baseRenderHeading", WI, this), (0, BZ.d)(this, "armour", dI, this)
        }
      }, kI = (0, IZ.b)(vI.prototype, "scale", [xB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 1
        }
      }), cI = (0, IZ.b)(vI.prototype, "speed", [EB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), nI = (0, IZ.b)(vI.prototype, "jumping", [DB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), hI = (0, IZ.b)(vI.prototype, "crouching", [KB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), zI = (0, IZ.b)(vI.prototype, "cameraPitch", [VB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), FI = (0, IZ.b)(vI.prototype, "armSwinging", [SB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), NI = (0, IZ.b)(vI.prototype, "heldItemName", [BI], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), gI = (0, IZ.b)(vI.prototype, "heldItemEnchantmentTier", [II], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), qI = (0, IZ.b)(vI.prototype, "pose", [ZI], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "standing"
        }
      }), yI = (0, IZ.b)(vI.prototype, "ridingVehicleEId", [TI], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), UI = (0, IZ.b)(vI.prototype, "meshOffset", [JI], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new ZZ.ArraySchema(0, 0, 0)
        }
      }), WI = (0, IZ.b)(vI.prototype, "baseRenderHeading", [oI], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), dI = (0, IZ.b)(vI.prototype, "armour", [GI], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new ZZ.MapSchema
        }
      }), vI),
      nZ = (CI = (0, ZZ.type)("string"), QI = (0, ZZ.type)("string"), sI = (0, ZZ.type)("string"), wI = (0, ZZ.type)("uint8"), OI = class extends cZ {
        constructor() {
          super(...arguments), (0, BZ.d)(this, "variation", YI, this), (0, BZ.d)(this, "ownerDbId", iI, this), (0, BZ.d)(this, "metaInfo", pI, this), (0, BZ.d)(this, "aiState", aI, this)
        }
      }, YI = (0, IZ.b)(OI.prototype, "variation", [CI], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "default"
        }
      }), iI = (0, IZ.b)(OI.prototype, "ownerDbId", [QI], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), pI = (0, IZ.b)(OI.prototype, "metaInfo", [sI], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return ""
        }
      }), aI = (0, IZ.b)(OI.prototype, "aiState", [wI], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), OI);
    HI = (0, ZZ.type)("string"), MI = (0, ZZ.type)("string"), jI = (0, ZZ.type)("string"), PI = (0, ZZ.type)("string"), RI = class extends kZ {
      constructor() {
        super(...arguments), (0, BZ.d)(this, "meshKind", rI, this), (0, BZ.d)(this, "meshOpts", mI, this), (0, BZ.d)(this, "pose", XI, this), (0, BZ.d)(this, "leaderboardTop", LI, this)
      }
    }, rI = (0, IZ.b)(RI.prototype, "meshKind", [HI], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), mI = (0, IZ.b)(RI.prototype, "meshOpts", [MI], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), XI = (0, IZ.b)(RI.prototype, "pose", [jI], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), LI = (0, IZ.b)(RI.prototype, "leaderboardTop", [PI], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    });

    function hZ(BB) {
      return Object.keys(ZZ.Metadata.getFields(BB))
    }
    const zZ = hZ(nZ);
    for (const BT of TZ.t)
      if (!zZ.includes(BT)) throw new Error(`Mob Schema is missing a networked property: "${BT}"`);
    const FZ = hZ((eI = (0, ZZ.type)("string"), uI = (0, ZZ.type)("float32"), fI = (0, ZZ.type)("float32"), lI = (0, ZZ.type)("float32"), AI = (0, ZZ.type)("float32"), tI = class extends kZ {
      constructor() {
        super(...arguments), (0, BZ.d)(this, "soundName", bI, this), (0, BZ.d)(this, "volume", xI, this), (0, BZ.d)(this, "refDistance", EI, this), (0, BZ.d)(this, "maxHearDist", DI, this), (0, BZ.d)(this, "rate", KI, this)
      }
    }, bI = (0, IZ.b)(tI.prototype, "soundName", [eI], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return ""
      }
    }), xI = (0, IZ.b)(tI.prototype, "volume", [uI], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return 1
      }
    }), EI = (0, IZ.b)(tI.prototype, "refDistance", [fI], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return oZ.h
      }
    }), DI = (0, IZ.b)(tI.prototype, "maxHearDist", [lI], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return oZ.e
      }
    }), KI = (0, IZ.b)(tI.prototype, "rate", [AI], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return 1
      }
    }), tI));
    for (const BT of JZ.h)
      if (!FZ.includes(BT)) throw new Error(`AudioEntity Schema is missing a replicated property: "${BT}"`);
    var NZ = ZB(38483),
      gZ = ZB(1300),
      qZ = ZB(665),
      yZ = ZB(38270),
      UZ = ZB(4416),
      WZ = ZB(360),
      dZ = ZB(37304),
      CZ = ZB(38159),
      QZ = ZB(2326),
      sZ = ZB(37270),
      wZ = ZB(38501),
      OZ = ZB(37436),
      YZ = ZB(364),
      iZ = ZB.n(YZ),
      pZ = ZB(37998),
      aZ = ZB(37105),
      HZ = ZB(38140),
      MZ = ZB(38181);
    class jZ {
      constructor(BB, IB) {
        this.bloxd = BB, this.eId = IB, this.Nz = void 0, this.colyseusEntity = void 0, this.canSeeSub = void 0, this.canAttackSub = void 0, this.interactableSub = void 0, this.overlayColourSub = void 0, this.opacitySub = void 0, this.zIndexSub = void 0, this.multilineTextBoxSub = void 0, this.previousHidingMeshManagerState = void 0, this.meshKind = void 0, this.meshOpts = void 0, this.leaderboardTop = void 0, this.meshRebuildQueued = !1, this.WN = !1, this.Nz = BB.Nz
      }
      initClient(BB) {
        var IB, ZB, TB;
        this.colyseusEntity = BB, this.meshKind = BB.meshKind, this.meshOpts = BB.meshOpts, this.leaderboardTop = BB.leaderboardTop, this.Nz.zW.add([BB.x, BB.y, BB.z], 1, 1, null, null, !1, !1, this.eId), this.Nz.zW.xR(this.eId, "smoothToServerPos");
        const JB = "Person" === this.meshKind;
        this.Nz.zW.xR(this.eId, "meshRotation", {
          isServerControlled: !0,
          ...JB ? {
            defaultRotationsPerSecond: .5
          } : {},
          childrenNodeParams: JB ? [{
            nodeName: "HeadMesh",
            softTolerance: wZ.j,
            hardTolerance: null
          }] : []
        }), this.updateHidingMeshMgr(), this.canSeeSub = VI.l.subscribe(`otherEntitySettings|${this.eId}|canSee`, (BB => {
          this.updateHidingMeshMgr()
        }));
        const oB = () => {
          const BB = this.Nz.zW.RIB(this.eId);
          if (!BB) return;
          const IB = (0, OZ.f)(this.eId);
          if ("number" === typeof BB.gR) {
            var ZB, TB, JB, oB;
            const GB = null === (ZB = (0, QZ.h)("head", null === (JB = this.getSpec()) || void 0 === JB || null === (oB = JB.opts.textures) || void 0 === oB ? void 0 : oB.head)) || void 0 === ZB || null === (TB = ZB.personModel) || void 0 === TB ? void 0 : TB.fullBody;
            return this.Nz.Ig.kR.setPickable(BB.gR, IB && !GB), void(0, aZ.updatePersonAttachmentPickability)(this.Nz, this.eId, IB)
          }
          const GB = BB.mesh;
          if (GB)
            for (const vB of [GB, ...GB.getChildMeshes(!1)]) "tg" in vB && !vB.name.startsWith("Cape|") && (vB.tg = IB)
        };
        this.canAttackSub = VI.l.subscribe(`otherEntitySettings|${this.eId}|canAttack`, oB), this.interactableSub = VI.l.subscribe(`otherEntitySettings|${this.eId}|interactable`, oB), this.overlayColourSub = VI.l.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|overlayColour`, (BB => {
          this.updateOverlayColour(BB)
        })), this.opacitySub = VI.l.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|opacity`, (BB => {
          this.updateOpacity(BB)
        })), this.zIndexSub = VI.l.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|zIndex`, (BB => {
          this.updateZIndex(BB)
        }));
        const GB = this.Nz.Tm[this.Nz.Jm][this.eId];
        this.updateOverlayColour(null !== (IB = null === GB || void 0 === GB ? void 0 : GB.overlayColour) && void 0 !== IB ? IB : null), this.updateOpacity(null !== (ZB = null === GB || void 0 === GB ? void 0 : GB.opacity) && void 0 !== ZB ? ZB : 1), this.updateZIndex(null !== (TB = null === GB || void 0 === GB ? void 0 : GB.zIndex) && void 0 !== TB ? TB : 0), this.multilineTextBoxSub = (0, sZ.q)(this.Nz, this.eId)
      }
      onChangeClient(BB, IB) {
        if ("xRotation" === BB || "yRotation" === BB || "zRotation" === BB)(0, sZ.r)(this.Nz, this.eId, BB, IB);
        else if ("pose" === BB) {
          const BB = this.Nz.zW.uIB(this.eId);
          BB && (BB.pose = IB || "standing")
        } else "meshKind" === BB || "meshOpts" === BB ? (this[BB] = IB, this.queueMeshRebuild()) : "name" === BB && "" !== IB ? this.updateHidingMeshMgr() : "leaderboardTop" === BB && (this.leaderboardTop = IB, VI.l.Gq(`leaderboardTop|${this.eId}`, IB))
      }
      disposeClient() {
        this.WN = !0, this.Nz.zW.deleteEntity(this.eId), VI.l.unsubscribe(this.canSeeSub), VI.l.unsubscribe(this.canAttackSub), VI.l.unsubscribe(this.interactableSub), VI.l.unsubscribe(this.overlayColourSub), VI.l.unsubscribe(this.opacitySub), VI.l.unsubscribe(this.zIndexSub), VI.l.unsubscribe(this.multilineTextBoxSub)
      }
      getCurrentHidingMeshMgrState() {
        var BB, IB;
        return {
          canSee: null !== (BB = null === (IB = this.Nz.Tm[this.Nz.Jm][this.eId]) || void 0 === IB ? void 0 : IB.canSee) && void 0 !== BB && BB,
          name: this.colyseusEntity.name,
          meshKind: this.meshKind,
          meshOpts: this.meshOpts
        }
      }
      updateHidingMeshMgr() {
        var BB, IB, ZB;
        const {
          Nz: TB
        } = this, {
          zW: JB
        } = TB, oB = this.getCurrentHidingMeshMgrState();
        if ((0, WZ.he)(this.previousHidingMeshManagerState, oB)) return;
        if (this.previousHidingMeshManagerState = oB, JB.Qr(this.eId, "hidingMeshManager"), null === (BB = TB.Tm[TB.Jm][this.eId]) || void 0 === BB || !BB.canSee) return;
        const GB = this.getSpec();
        if (!GB) return;
        const {
          type: vB,
          opts: kB
        } = GB;
        "Person" === vB && (kB.textures = (0, QZ.m)(kB.textures)), kB.eId = this.eId, JB.xR(this.eId, "hidingMeshManager", {
          addMeshComponent: () => {
            var BB, IB, ZB;
            "Leaderboard" === vB && (kB.leaderboardTop = this.leaderboardTop);
            const oB = this.bloxd.client.meshCreator.getEntityMesh(vB, kB, (BB => {
              var IB, ZB;
              if ("number" === typeof BB) {
                var JB, oB, GB;
                const IB = TB.Ig.kR;
                IB.setEntityId(BB, this.eId);
                const ZB = "Person" === vB && (null === (JB = (0, QZ.h)("head", null === (GB = kB.textures) || void 0 === GB ? void 0 : GB.head)) || void 0 === JB || null === (oB = JB.personModel) || void 0 === oB ? void 0 : oB.fullBody);
                return void IB.setPickable(BB, (0, OZ.f)(this.eId) && !ZB)
              }
              const cB = BB;
              for (const vB of [cB, ...cB.getChildMeshes(!1)]) void 0 === vB.tg || vB.name.startsWith("Cape|") || (vB.tg = (0, OZ.f)(this.eId), vB.metadata ??= new TB.Ig.bg, vB.metadata.eId = this.eId);
              this.updateOpacity(null !== (IB = null === (ZB = TB.Tm[TB.Jm][this.eId]) || void 0 === ZB ? void 0 : ZB.opacity) && void 0 !== IB ? IB : 1)
            }));
            if (!oB) return;
            const {
              gR: GB,
              mesh: cB,
              meshOffset: nB,
              nameYOffset: hB,
              modelLoaded: zB
            } = oB;
            null === zB || void 0 === zB || zB.then((() => {
              var BB;
              (null === (BB = JB.RIB(this.eId)) || void 0 === BB ? void 0 : BB.mesh) === cB && (this.previousHidingMeshManagerState = null, this.updateHidingMeshMgr())
            }));
            const FB = null === GB ? null : TB.Ig.kR.pTB(GB, 0);
            if (JB.xR(this.eId, JB.names.mesh, {
                gR: GB,
                SZB: FB,
                mesh: cB,
                svB: !1,
                ITB: "Leaderboard" !== vB,
                offset: nB.slice(),
                QvB: "ParticleEmitter" === vB && kB.followTargetMeshOffset ? BB => {
                  var IB;
                  iZ().copy(BB, nB);
                  const ZB = null === (IB = JB.YZB(this.eId)) || void 0 === IB ? void 0 : IB.zN,
                    TB = void 0 === ZB ? null : JB.uIB(ZB);
                  if (TB) {
                    var oB, GB;
                    const IB = this.bloxd.getEntityHeading(null !== (oB = TB.ridingVehicleEId) && void 0 !== oB ? oB : ZB, !0),
                      JB = Math.sin(IB),
                      vB = Math.cos(IB);
                    BB[0] += TB.meshOffset[0] * vB + TB.meshOffset[2] * JB, BB[1] += TB.meshOffset[1], BB[2] += TB.meshOffset[2] * vB - TB.meshOffset[0] * JB;
                    const kB = null !== (GB = TB.ridingVehicleEId) && void 0 !== GB ? GB : null;
                    null !== kB && (0, MZ.b)(this.Nz, kB, BB)
                  }
                } : null
              }), "Person" === vB) {
              var NB, gB, qB, yB;
              JB.xR(this.eId, JB.names.meshAttachments, {
                personFullBody: null !== (NB = null === (gB = (0, QZ.h)("head", null === (yB = kB.textures) || void 0 === yB ? void 0 : yB.head)) || void 0 === gB || null === (qB = gB.personModel) || void 0 === qB ? void 0 : qB.fullBody) && void 0 !== NB && NB
              });
              for (const BB of gZ.y) {
                var UB, WB, dB;
                const IB = null === (UB = kB.textures) || void 0 === UB ? void 0 : UB[BB];
                IB && null !== (WB = (0, QZ.h)(BB, IB)) && void 0 !== WB && null !== (dB = WB.attachments) && void 0 !== dB && dB.length && CZ.d.Player.meshApi.updatePlayerCosmetic(this.eId, GB, BB, IB)
              }
              JB.xR(this.eId, JB.names.moveState), JB.xR(this.eId, "updateWalkingState", {
                gR: GB,
                SZB: FB,
                walkingLegSwingDuration: wZ.p
              }), JB.xR(this.eId, "humanoidMesh", {
                gR: GB,
                SZB: FB,
                heldItemPositionParams: {},
                maxWalkingAngleOverride: null
              }), JB.xR(this.eId, "animator", {
                gR: GB,
                SZB: FB,
                modelLifeformType: "Player"
              }), HZ.f.hasAnimation("Person") && JB.xR(this.eId, "rigAnimation", {
                target: "Person",
                gR: GB
              }), JB.uIB(this.eId).pose = this.colyseusEntity.pose || "standing"
            } else if ("BloxdBlock" === vB && null !== GB) {
              JB.xR(this.eId, "animator", {
                gR: GB,
                SZB: FB,
                modelLifeformType: null
              });
              const BB = (0, yZ.s)(kB.blockName);
              null !== BB && JB.xR(this.eId, "rigAnimation", {
                target: BB,
                gR: GB
              })
            }
            JB.tvB(this.eId, "entityName", {
              name: this.colyseusEntity.name,
              nameYOffset: hB
            }), this.bloxd.setEntityName(this.eId, this.colyseusEntity.name), !0 === kB.autoRotate && (JB.Qr(this.eId, "meshRotation"), JB.xR(this.eId, "autoRotate"));
            const {
              lineToEId: CB
            } = kB;
            (0, qZ.L)(CB) || JB.xR(this.eId, "lineToEntity", {
              lineToEId: CB
            });
            const QB = TB.Tm[TB.Jm][this.eId];
            this.updateOverlayColour(null !== (BB = null === QB || void 0 === QB ? void 0 : QB.overlayColour) && void 0 !== BB ? BB : null), this.updateOpacity(null !== (IB = null === QB || void 0 === QB ? void 0 : QB.opacity) && void 0 !== IB ? IB : 1), this.updateZIndex(null !== (ZB = null === QB || void 0 === QB ? void 0 : QB.zIndex) && void 0 !== ZB ? ZB : 0)
          },
          removeMeshComponent: () => {
            "Person" !== vB && "BloxdBlock" !== vB || JB.Qr(this.eId, "rigAnimation"), JB.Qr(this.eId, JB.names.mesh), JB.TIB(this.eId, JB.names.meshAttachments) && JB.Qr(this.eId, JB.names.meshAttachments), JB.Qr(this.eId, "entityName"), JB.Qr(this.eId, "autoRotate"), JB.Qr(this.eId, "lineToEntity"), "Person" === vB ? (JB.Qr(this.eId, JB.names.moveState), JB.Qr(this.eId, "updateWalkingState"), JB.Qr(this.eId, "humanoidMesh"), JB.Qr(this.eId, "animator")) : "BloxdBlock" === vB && JB.Qr(this.eId, "animator")
          },
          hideDist: null !== (IB = kB.hideDist) && void 0 !== IB ? IB : 80,
          movingHideDist: null !== (ZB = kB.hideDist) && void 0 !== ZB ? ZB : 120,
          displayOutsideLoadedChunk: kB.hideDist > 100,
          immediatelyUpdate: !0,
          Ev: "BloxdBlock" === vB ? kB.blockName : vB
        })
      }
      queueMeshRebuild() {
        this.meshRebuildQueued || (this.meshRebuildQueued = !0, queueMicrotask((() => {
          this.meshRebuildQueued = !1, this.WN || this.updateHidingMeshMgr()
        })))
      }
      getSpec() {
        return (0, UZ.h)({
          meshKind: this.meshKind,
          meshOpts: this.meshOpts
        })
      }
      updateOverlayColour(BB) {
        var IB, ZB;
        if ("Person" !== this.meshKind) return;
        let TB = new dZ.e(0, 0, 0, 0);
        if (null !== BB) {
          const IB = (0, WZ.cb)(BB);
          TB = new dZ.e(IB[0] / 255, IB[1] / 255, IB[2] / 255, .5)
        }
        const JB = null !== (IB = null === (ZB = this.Nz.zW.RIB(this.eId)) || void 0 === ZB ? void 0 : ZB.gR) && void 0 !== IB ? IB : null;
        null !== JB && CZ.d.Player.meshApi.updateMeshOverlayColour(JB, TB)
      }
      updateZIndex(BB) {
        var IB;
        if ("Person" !== this.meshKind) return;
        const ZB = null === (IB = this.Nz.zW.RIB(this.eId)) || void 0 === IB ? void 0 : IB.gR;
        "number" === typeof ZB && this.Nz.Ig.kR.setRenderingGroupId(ZB, BB)
      }
      updateOpacity(BB) {
        const IB = this.Nz.zW.RIB(this.eId);
        IB && ("number" !== typeof IB.gR ? IB.mesh && "ParticleEmitter" !== this.meshKind && (0, pZ.g)(IB.mesh, BB) : CZ.d.Player.meshApi.updateMeshOpacity(IB.gR, BB))
      }
    }
    var PZ = ZB(39030);
    class RZ {
      constructor(BB, IB) {
        this.eId = IB, this.Nz = void 0, this.schema = void 0, this.Nz = BB.Nz
      }
      initClient(BB) {
        this.schema = BB, this.Nz.zW.add([BB.x, BB.y, BB.z], .1, .1, null, null, !1, !1, this.eId), this.Nz.zW.xR(this.eId, "smoothToServerPos"), PZ.d.add(this.eId, this.copyOpts())
      }
      onChangeClient(BB) {
        JZ.h.includes(BB) && PZ.d.update(this.eId, this.copyOpts())
      }
      disposeClient() {
        PZ.d.remove(this.eId), this.Nz.zW.deleteEntity(this.eId)
      }
      copyOpts() {
        const {
          soundName: BB,
          volume: IB,
          refDistance: ZB,
          maxHearDist: TB,
          rate: JB
        } = this.schema;
        return {
          soundName: BB,
          volume: IB,
          refDistance: ZB,
          maxHearDist: TB,
          rate: JB
        }
      }
    }
    var rZ = ZB(3854),
      mZ = ZB(36794),
      XZ = ZB(6635),
      LZ = ZB(37840),
      eZ = ZB(2912),
      uZ = ZB(38220),
      fZ = ZB(9155),
      lZ = ZB(38513),
      AZ = ZB(37814),
      tZ = ZB(3101);
    class bZ {
      constructor(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
          TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => performance.now();
        this.xZB = BB, this.Nz = IB, this.setupBudgetMs = ZB, this.now = TB, this.createStateCallbacks = void 0, this.roomStateCallbacks = void 0, this.allItems = {}, this.detachers = new Map, this.deferredSetups = new Map, this.queuedSetups = new Map, this.promotedSetups = new Set, this.setupBudgetLeftMs = void 0, this.lastRefillMs = void 0, this.roomState = void 0, this.WN = !1, this.onFrame = () => {
          this.setUpQueuedEntities(!0)
        }, this.dU = () => {
          this.setUpQueuedEntities(this.now() - this.lastRefillMs > 100)
        }, this.setUpPromoted = () => {
          for (const BB of this.promotedSetups) {
            this.promotedSetups.delete(BB);
            const IB = this.queuedSetups.get(BB);
            IB && (this.queuedSetups.delete(BB), this.timedSetup(IB, BB))
          }
        }, this.createStateCallbacks = (0, fZ.getStateCallbacks)(BB), this.roomStateCallbacks = this.createStateCallbacks(BB.state), this.roomState = BB.state, this.setupBudgetLeftMs = ZB, this.lastRefillMs = TB()
      }
      setup() {
        this.setupEntityHandlers(), this.setupItemHandlers(), this.xZB.onStateChange(this.setUpPromoted), this.Nz.on("beforeInputs", this.onFrame), this.Nz.on("Iz", this.dU)
      }
      setUpQueuedEntities(BB) {
        var IB;
        if ((null === (IB = (0, eZ.d)().client.getMsgHandler()) || void 0 === IB ? void 0 : IB.xZB) !== this.xZB) return this.Nz.off("beforeInputs", this.onFrame), this.Nz.off("Iz", this.dU), this.queuedSetups.clear(), void this.promotedSetups.clear();
        if (BB && (this.setupBudgetLeftMs = this.setupBudgetMs, this.lastRefillMs = this.now()), this.setUpPromoted(), 0 !== this.queuedSetups.size)
          for (iZ().copy(xZ, this.Nz.zW.aU(this.Nz.Jm)); this.setupBudgetLeftMs > 0;) {
            const BB = this.nearestQueued(xZ);
            if (null === BB) return;
            this.setUpIfQueued(BB), this.setUpPromoted()
          }
      }
      nearestQueued(BB) {
        let IB = null,
          ZB = 1 / 0;
        return this.queuedSetups.forEach(((TB, JB) => {
          const oB = function(BB, IB) {
            return (IB.x - BB[0]) ** 2 + (IB.y - BB[1]) ** 2 + (IB.z - BB[2]) ** 2
          }(BB, TB);
          (null === IB || oB < ZB) && (IB = JB, ZB = oB)
        })), IB
      }
      setUpOrQueue(BB, IB) {
        0 === this.queuedSetups.size && this.setupBudgetLeftMs > 0 || this.mustSetUpNow(BB, IB) ? this.timedSetup(BB, IB) : this.queuedSetups.set(IB, BB)
      }
      mustSetUpNow(BB, IB) {
        const ZB = this.Nz.oIB;
        if (IB === ZB) return !0;
        const TB = this.roomState.entities.get(ZB);
        return !(!TB || TB.ridingVehicleEId !== IB && TB.followingEId !== IB) || (EZ(BB.type) === NZ.b || (0, eZ.d)().getFollowingEntities(IB).length > 0)
      }
      setUpIfQueued(BB) {
        const IB = this.queuedSetups.get(BB);
        IB && (this.queuedSetups.delete(BB), this.timedSetup(IB, BB))
      }
      promoteIfQueued(BB) {
        null !== BB && this.queuedSetups.has(BB) && this.promotedSetups.add(BB)
      }
      timedSetup(BB, IB) {
        const ZB = this.now();
        this.setupEntity(BB, IB), this.setupBudgetLeftMs -= this.now() - ZB
      }
      setupEntityHandlers() {
        this.roomStateCallbacks.entities.cW(((BB, IB) => {
          this.Nz.oIB ? this.setUpOrQueue(BB, IB) : this.deferEntitySetupUntilInitInfo(BB, IB)
        })), this.roomStateCallbacks.entities.nH(((BB, IB) => {
          const ZB = this.deferredSetups.get(IB);
          ZB && (VI.l.unsubscribe(ZB), this.deferredSetups.delete(IB)), this.queuedSetups.delete(IB), this.detach(IB), (0, eZ.d)().client.disposeEntity(IB)
        }))
      }
      deferEntitySetupUntilInitInfo(BB, IB) {
        const ZB = VI.l.Uy("initInfoReceived", (() => {
          this.deferredSetups.delete(IB), this.setUpOrQueue(BB, IB)
        }));
        this.deferredSetups.set(IB, ZB), (0, rZ.onGameResetOnce)((() => {
          this.deferredSetups.get(IB) === ZB && (VI.l.unsubscribe(ZB), this.deferredSetups.delete(IB)), (0, eZ.d)().updatePositionAndPhysics(this.Nz.Jm, {
            type: XZ.o.DEFAULT,
            tier: null
          }, !0), (0, eZ.d)().takeHeldPlayerBodySize(this.Nz.Jm);
          const BB = this.Nz.zW.dIB(this.Nz.Jm);
          BB && (BB.movementType = XZ.l.NORMAL)
        }))
      }
      setupEntity(BB, IB) {
        const ZB = IB === this.Nz.oIB;
        if (ZB)(0, eZ.d)().client.hK(this.Nz.Jm, null, null);
        else {
          const {
            type: ZB
          } = BB, TB = EZ(ZB);
          if (void 0 === TB) return void
          function(BB, IB) {
            const ZB = String(BB);
            if (DZ.has(ZB)) return;
            DZ.add(ZB);
            const TB = ZB.length > 80 ? `${ZB.slice(0,80)}...` : ZB,
              JB = `No client handler for entity type ${JSON.stringify(TB)}, so entity ${IB} is not set up`;
            console.warn(JB), (0, tZ.reportClientError)("uncaught", JB, "unknown_entity_type")
          }(ZB, IB);
          (0, eZ.d)().client.hK(IB, BB, new TB((0, eZ.d)(), IB, ZB))
        }
        const TB = this.createStateCallbacks(BB);
        if (ZB) return this.setupMapSchemaCallbacks(IB, BB, TB, "armour"), this.setupScalarField(IB, BB, TB, "scale"), this.setupScalarField(IB, BB, TB, "ridingVehicleEId"), this.setupScalarField(IB, BB, TB, "followingEId"), this.setupScalarField(IB, BB, TB, "followingOffset"), void this.setupScalarField(IB, BB, TB, "shouldMatchFollowingEntityRotation");
        for (const JB of hZ(BB.constructor)) BB[JB] instanceof ZZ.MapSchema ? this.setupMapSchemaCallbacks(IB, BB, TB, JB) : this.setupScalarField(IB, BB, TB, JB)
      }
      setupMapSchemaCallbacks(BB, IB, ZB, TB) {
        const JB = ZB[TB],
          oB = new Map;
        JB.cW(((ZB, JB) => {
          if (this.onEntityFieldChange(BB, IB, TB, {
              key: JB,
              value: ZB
            }), !(ZB instanceof ZZ.Schema)) return;
          const GB = this.createStateCallbacks(ZB),
            vB = [];
          for (const oB of hZ(ZB.constructor)) vB.push(this.listenForFutureChanges(GB, oB, (() => {
            this.onEntityFieldChange(BB, IB, TB, {
              key: JB,
              value: ZB
            })
          })));
          oB.set(JB, (() => {
            for (const BB of vB) BB()
          }))
        })), JB.nH(((ZB, JB) => {
          var GB;
          null === (GB = oB.get(JB)) || void 0 === GB || GB(), oB.delete(JB), this.onEntityFieldChange(BB, IB, TB, {
            key: JB,
            value: null
          })
        })), this.addDetacher(BB, (() => {
          for (const BB of oB.values()) BB();
          oB.clear()
        }))
      }
      setupScalarField(BB, IB, ZB, TB) {
        this.onEntityFieldChange(BB, IB, TB, IB[TB]);
        const JB = this.listenForFutureChanges(ZB, TB, (ZB => {
          this.onEntityFieldChange(BB, IB, TB, ZB)
        }));
        this.addDetacher(BB, JB)
      }
      addDetacher(BB, IB) {
        let ZB = this.detachers.get(BB);
        ZB || (ZB = [], this.detachers.set(BB, ZB)), ZB.push(IB)
      }
      detach(BB) {
        for (const ZB of null !== (IB = this.detachers.get(BB)) && void 0 !== IB ? IB : []) {
          var IB;
          ZB()
        }
        this.detachers.delete(BB)
      }
      listenForFutureChanges(BB, IB, ZB) {
        return BB.listen(IB, ZB, !1)
      }
      onEntityFieldChange(BB, IB, ZB, TB) {
        switch (ZB) {
          case "ridingVehicleEId": {
            this.promoteIfQueued(TB);
            const IB = this.Nz.zW.uIB((0, mZ.e)(BB));
            IB && (IB.ridingVehicleEId = TB);
            break
          }
          case "armour":
            this.handleArmourChange(BB, TB);
            break;
          case "followingEId":
            this.promoteIfQueued(TB), this.handleFollowingEIdChange(BB, IB, TB);
            break;
          case "xRotation":
          case "yRotation":
          case "zRotation":
            this.handleRotationChange(BB, ZB, TB);
            break;
          case "scale":
            this.handleScaleChange(BB, TB);
            break;
          case "baseRenderHeading":
            this.handleBaseRenderHeadingChange(BB, TB);
            break;
          case "followingOffset":
            this.handleFollowingOffsetChange(BB, TB);
            break;
          case "shouldMatchFollowingEntityRotation":
            this.handleShouldMatchFollowingEntityRotationChange(BB, TB);
            break;
          case "x":
          case "y":
          case "z":
            return void this.handlePositionChange(BB, ZB, TB)
        }(0, eZ.d)().client.updateEntityField(BB, ZB, TB)
      }
      handleArmourChange(BB, IB) {
        var ZB, TB;
        const {
          key: JB,
          value: oB
        } = IB;
        (0, CZ.t)(BB, JB, null !== (ZB = null === oB || void 0 === oB ? void 0 : oB.itemName) && void 0 !== ZB ? ZB : null, null !== (TB = null === oB || void 0 === oB ? void 0 : oB.enchantmentTier) && void 0 !== TB ? TB : null)
      }
      handleFollowingEIdChange(BB, IB, ZB) {
        const TB = (0, mZ.e)(BB),
          JB = TB === this.Nz.Jm;
        if (this.Nz.zW.Qr(TB, this.Nz.zW.names.nC), ZB) this.Nz.zW.Qr(TB, "smoothToServerPos"), this.Nz.zW.xR(TB, this.Nz.zW.names.nC, {
          zN: (0, mZ.e)(ZB),
          offset: Array.from(IB.followingOffset),
          iZB: IB.shouldMatchFollowingEntityRotation,
          MZB: !0,
          PZB: (BB, TB) => {
            if (iZ().copy(BB, IB.followingOffset), IB.ridingVehicleEId === ZB) {
              const IB = (0, mZ.e)(ZB),
                JB = (0, eZ.d)().getEntityHeading(IB, TB);
              iZ().ck(BB, BB, iZ().ZERO, JB)
            }
          }
        });
        else if (!JB) {
          this.Nz.zW.TIB(TB, "smoothToServerPos") || this.Nz.zW.xR(TB, "smoothToServerPos");
          const BB = this.Nz.zW.getState(TB, "smoothToServerPos"),
            IB = this.Nz.zW.zK(TB).position;
          (0, AZ.setServerPosition)(BB, IB[0], IB[1], IB[2])
        }
      }
      handleRotationChange(BB, IB, ZB) {
        const TB = "xRotation" === IB ? 0 : "yRotation" === IB ? 1 : 2;
        for (const JB of (0, eZ.d)().getFollowingEntities(BB)) {
          const BB = this.Nz.zW.getState(JB, "meshRotation"),
            IB = this.Nz.zW.YZB(JB);
          BB && IB.iZB && (BB.serverSetRotation[TB] = ZB)
        }
      }
      handleScaleChange(BB, IB) {
        const ZB = (0, mZ.e)(BB);
        if (VI.l.Gq(`entityScale|${ZB}`, IB), ZB === this.Nz.Jm) {
          var TB;
          (0, eZ.d)().removeFromEyeHeightCache(ZB);
          const BB = this.Nz.zW.dIB(this.Nz.Jm),
            IB = null !== (TB = null === BB || void 0 === BB ? void 0 : BB.physicsState) && void 0 !== TB ? TB : {
              type: XZ.o.DEFAULT,
              tier: null
            };
          return void(0, eZ.d)().updatePositionAndPhysics(this.Nz.Jm, IB, !1)
        }
        const JB = (0, eZ.d)().getLifeformType(ZB);
        if (null === JB) return;
        const {
          physicsBodyWidth: oB,
          physicsBodyHeight: GB
        } = (0, lZ.h)(IB, JB);
        this.Nz.zW.wZB(ZB, oB, GB, oB)
      }
      handleBaseRenderHeadingChange(BB, IB) {
        const ZB = this.Nz.zW.getState(BB, "meshRotation");
        ZB && (ZB.baseRenderRotation[1] = IB);
        for (const TB of (0, eZ.d)().getFollowingEntities(BB)) {
          const BB = this.Nz.zW.getState(TB, "meshRotation"),
            ZB = this.Nz.zW.YZB(TB);
          BB && ZB.iZB && (BB.baseRenderRotation[1] = IB)
        }
      }
      handleFollowingOffsetChange(BB, IB) {
        const ZB = this.Nz.zW.YZB((0, mZ.e)(BB));
        if (ZB && ZB.offset) {
          const BB = IB ? Array.from(IB) : iZ().ZERO;
          ZB.offset[0] = BB[0], ZB.offset[1] = BB[1], ZB.offset[2] = BB[2]
        }
      }
      handleShouldMatchFollowingEntityRotationChange(BB, IB) {
        const ZB = this.Nz.zW.YZB((0, mZ.e)(BB));
        ZB && (ZB.iZB = null === IB || void 0 === IB || IB)
      }
      handlePositionChange(BB, IB, ZB) {
        if (this.Nz.zW.TIB(BB, "smoothToServerPos")) {
          const TB = this.Nz.zW.getState(BB, "smoothToServerPos");
          (0, AZ.setServerPositionAxis)(TB, KZ[IB], ZB)
        }
      }
      setupItemHandlers() {
        this.roomStateCallbacks.items.cW(((BB, IB) => {
          this.allItems[IB] = BB, (0, LZ.l)(this.Nz, IB, [BB.x, BB.y, BB.z], BB.id, {
            amount: BB.amount,
            attributes: JSON.parse(BB.attributes),
            wJ: (0, SI.c)(this.Nz).cantPickUpItem(IB),
            size: BB.size,
            predictedAt: (0, eZ.d)().client.itemDropPrediction.onServerItemAdded(IB)
          });
          const ZB = this.createStateCallbacks(BB);
          for (const TB of hZ(GZ)) this.onItemFieldChange(IB, TB, BB[TB]), this.addDetacher(IB, this.listenForFutureChanges(ZB, TB, (BB => {
            this.onItemFieldChange(IB, TB, BB)
          })))
        })), this.roomStateCallbacks.items.nH(((BB, IB) => {
          delete this.allItems[IB], this.detach(IB), (0, eZ.d)().client.itemDropPrediction.onServerItemRemoved(IB), this.Nz.zW.TIB(IB, this.Nz.zW.names.itemState) && this.Nz.zW.deleteEntity(IB), (0, SI.c)(this.Nz).disposeEntity(IB)
        }))
      }
      onItemFieldChange(BB, IB, ZB) {
        if (IB in KZ) {
          if (this.Nz.zW.TIB(BB, "itemState")) {
            const TB = this.Nz.zW.getState(BB, "smoothToServerPos");
            (0, AZ.setServerPositionAxis)(TB, KZ[IB], ZB), (0, eZ.d)().client.itemDropPrediction.onServerItemMoved(BB)
          }
          return
        }
        if (!this.Nz.zW.TIB(BB, "itemState")) return;
        const TB = this.Nz.zW.getState(BB, "itemState");
        "amount" === IB && ZB !== TB.amount && (TB.creationTime = Date.now()), TB[IB] = "attributes" === IB ? JSON.parse(ZB) : ZB
      }
      dispose() {
        if (!this.WN) {
          this.WN = !0, this.Nz.off("beforeInputs", this.onFrame), this.Nz.off("Iz", this.dU), this.queuedSetups.clear(), this.promotedSetups.clear();
          for (const BB of this.deferredSetups.values()) VI.l.unsubscribe(BB);
          this.deferredSetups.clear(), this.Nz.zW.Qr(this.Nz.Jm, this.Nz.zW.names.nC);
          for (const BB in this.allItems) this.Nz.zW.deleteEntity(BB), delete this.allItems[BB];
          for (const BB of [...this.detachers.keys()]) this.detach(BB);
          (0, SI.c)(this.Nz).clear();
          for (const BB of (0, eZ.d)().client.iterateEntityIds())(0, eZ.d)().client.disposeEntity(BB)
        }
      }
    }
    const xZ = [0, 0, 0];

    function EZ(BB) {
      if ("string" !== typeof BB) return;
      const IB = BB.indexOf("|"),
        ZB = -1 === IB ? BB : BB.slice(0, IB),
        TB = SZ();
      return Object.hasOwn(TB, ZB) ? TB[ZB] : void 0
    }
    const DZ = new Set;
    const KZ = {
      x: 0,
      y: 1,
      z: 2
    };
    let VZ = null;

    function SZ() {
      return null !== VZ || (VZ = {
        ...Object.fromEntries(JZ.i.map((BB => {
          const {
            Ev: IB
          } = (0, uZ.b)(BB);
          return [BB, IB]
        }))),
        Pebble: NZ.b,
        Snowball: NZ.b,
        "Snowball Launcher": NZ.b,
        "Reinforced Pebble": NZ.b,
        Bullet: NZ.b,
        "Reinforced Ball": NZ.b,
        Ball: NZ.b,
        Mango: NZ.b,
        "Moonstone Orb": NZ.b,
        ...Object.fromEntries(TZ.u.map((BB => [(0, WZ.Zb)(BB), NZ.b]))),
        Arrow: NZ.b,
        "Arrow of Speed": NZ.b,
        "Arrow of Poison": NZ.b,
        "Arrow of Slowness": NZ.b,
        "Arrow of Weakness": NZ.b,
        "Arrow of Knockback": NZ.b,
        "Arrow of Strength": NZ.b,
        "Arrow of Invisibility": NZ.b,
        "Arrow of Jumping": NZ.b,
        "Arrow of Defense": NZ.b,
        "Arrow of Instant Healing": NZ.b,
        "Arrow of Instant Damage": NZ.b,
        "Arrow of Regeneration": NZ.b,
        "Arrow of Haste": NZ.b,
        "Arrow of Shield": NZ.b,
        "Arrow of Double Jump": NZ.b,
        "Arrow of Heat Resistance": NZ.b,
        "Arrow of X-Ray Vision": NZ.b,
        "Arrow of Mining Yield": NZ.b,
        "Arrow of Brain Rot": NZ.b,
        "Arrow of Milk": NZ.b,
        Fireball: NZ.b,
        "Bouncy Bomb": NZ.b,
        RPG: NZ.b,
        "Obby RPG": NZ.b,
        "Super RPG": NZ.b,
        "Grenade Launcher": NZ.b,
        Iceball: NZ.b,
        Coconut: NZ.b,
        "Splash Speed Potion": NZ.b,
        "Splash Defense Potion": NZ.b,
        "Splash Strength Potion": NZ.b,
        "Splash Invisibility Potion": NZ.b,
        "Splash Jump Potion": NZ.b,
        "Splash Knockback Potion": NZ.b,
        "Splash Poison Potion": NZ.b,
        "Splash Speed Potion II": NZ.b,
        "Splash Defense Potion II": NZ.b,
        "Splash Strength Potion II": NZ.b,
        "Splash Jump Potion II": NZ.b,
        "Splash Knockback Potion II": NZ.b,
        "Splash Poison Potion II": NZ.b,
        "Splash Slowness Potion": NZ.b,
        "Splash Slowness Potion II": NZ.b,
        "Splash Weakness Potion": NZ.b,
        "Splash Weakness Potion II": NZ.b,
        "Splash Milk Potion": NZ.b,
        "Splash Instant Damage Potion": NZ.b,
        "Splash Instant Damage Potion II": NZ.b,
        "Splash Instant Healing Potion": NZ.b,
        "Splash Instant Healing Potion II": NZ.b,
        "Splash Regeneration Potion": NZ.b,
        "Splash Regeneration Potion II": NZ.b,
        "Splash Haste Potion": NZ.b,
        "Splash Haste Potion II": NZ.b,
        "Splash Shield Potion": NZ.b,
        "Splash Shield Potion II": NZ.b,
        "Splash Double Jump Potion": NZ.b,
        "Splash Heat Resistance Potion": NZ.b,
        "Splash X-Ray Vision Potion": NZ.b,
        "Splash Mining Yield Potion": NZ.b,
        "Splash Mining Yield Potion II": NZ.b,
        "Splash Brain Rot Potion": NZ.b,
        "Yellow Paintball Gun": NZ.b,
        "White Paintball Gun": NZ.b,
        "Red Paintball Gun": NZ.b,
        "Purple Paintball Gun": NZ.b,
        "Pink Paintball Gun": NZ.b,
        "Orange Paintball Gun": NZ.b,
        "Magenta Paintball Gun": NZ.b,
        "Lime Paintball Gun": NZ.b,
        "Light Gray Paintball Gun": NZ.b,
        "Light Blue Paintball Gun": NZ.b,
        "Green Paintball Gun": NZ.b,
        "Gray Paintball Gun": NZ.b,
        "Cyan Paintball Gun": NZ.b,
        "Brown Paintball Gun": NZ.b,
        "Blue Paintball Gun": NZ.b,
        "Black Paintball Gun": NZ.b,
        "Yellow Heavy Paintball Gun": NZ.b,
        "White Heavy Paintball Gun": NZ.b,
        "Red Heavy Paintball Gun": NZ.b,
        "Purple Heavy Paintball Gun": NZ.b,
        "Pink Heavy Paintball Gun": NZ.b,
        "Orange Heavy Paintball Gun": NZ.b,
        "Magenta Heavy Paintball Gun": NZ.b,
        "Lime Heavy Paintball Gun": NZ.b,
        "Light Gray Heavy Paintball Gun": NZ.b,
        "Light Blue Heavy Paintball Gun": NZ.b,
        "Green Heavy Paintball Gun": NZ.b,
        "Gray Heavy Paintball Gun": NZ.b,
        "Cyan Heavy Paintball Gun": NZ.b,
        "Brown Heavy Paintball Gun": NZ.b,
        "Blue Heavy Paintball Gun": NZ.b,
        "Black Heavy Paintball Gun": NZ.b,
        "Toxin Ball": NZ.b,
        "Splash Aura XP Potion": NZ.b,
        "Splash Aura XP Potion II": NZ.b,
        "Arrow of Aura XP": NZ.b,
        Firecracker: NZ.b,
        "Rainbow Firecracker": NZ.b,
        "White Firecracker": NZ.b,
        "Orange Firecracker": NZ.b,
        "Magenta Firecracker": NZ.b,
        "Light Blue Firecracker": NZ.b,
        "Yellow Firecracker": NZ.b,
        "Lime Firecracker": NZ.b,
        "Pink Firecracker": NZ.b,
        "Gray Firecracker": NZ.b,
        "Light Gray Firecracker": NZ.b,
        "Cyan Firecracker": NZ.b,
        "Purple Firecracker": NZ.b,
        "Blue Firecracker": NZ.b,
        "Brown Firecracker": NZ.b,
        "Green Firecracker": NZ.b,
        "Red Firecracker": NZ.b,
        "Black Firecracker": NZ.b,
        "Firecracker Pebble": NZ.b,
        "Rainbow Firecracker Pebble": NZ.b,
        "White Firecracker Pebble": NZ.b,
        "Orange Firecracker Pebble": NZ.b,
        "Magenta Firecracker Pebble": NZ.b,
        "Light Blue Firecracker Pebble": NZ.b,
        "Yellow Firecracker Pebble": NZ.b,
        "Lime Firecracker Pebble": NZ.b,
        "Pink Firecracker Pebble": NZ.b,
        "Gray Firecracker Pebble": NZ.b,
        "Light Gray Firecracker Pebble": NZ.b,
        "Cyan Firecracker Pebble": NZ.b,
        "Purple Firecracker Pebble": NZ.b,
        "Blue Firecracker Pebble": NZ.b,
        "Brown Firecracker Pebble": NZ.b,
        "Green Firecracker Pebble": NZ.b,
        "Red Firecracker Pebble": NZ.b,
        "Black Firecracker Pebble": NZ.b,
        "Blinding Pebble": NZ.b,
        Poop: NZ.b,
        "Wood Boomerang": NZ.b,
        "Stone Boomerang": NZ.b,
        "Iron Boomerang": NZ.b,
        "Gold Boomerang": NZ.b,
        "Diamond Boomerang": NZ.b,
        "Amethite Boomerang": NZ.b,
        "Magmasteel Boomerang": NZ.b,
        "Rubellite Boomerang": NZ.b,
        "Serpentite Boomerang": NZ.b,
        "Moonstone Boomerang": NZ.b,
        "67 Base Projectile": NZ.b,
        "67 Boosted Projectile": NZ.b,
        "Capitano Grenade": NZ.b,
        "Scatter Pellet": NZ.b,
        "Lucky Bomb": NZ.b,
        "Unlucky Bomb": NZ.b,
        "Swap Orb": NZ.b,
        Mesh: jZ,
        AudioEntity: RZ
      }), VZ
    }
  },
  39078: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => oB,
      c: () => GB
    });
    var TB = ZB(665),
      JB = ZB(37787);
    const oB = 4e4;
    class GB {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now;
        this.now = BB, this.editedAt = new Map, this.lastChunkX = NaN, this.lastChunkY = NaN, this.lastChunkZ = NaN, this.lastChunkId = ""
      }
      noteEdit(BB, IB, ZB) {
        const oB = (0, TB.T)(BB),
          GB = (0, TB.T)(IB),
          vB = (0, TB.T)(ZB),
          kB = this.now();
        if (oB !== this.lastChunkX || GB !== this.lastChunkY || vB !== this.lastChunkZ) {
          this.lastChunkX = oB, this.lastChunkY = GB, this.lastChunkZ = vB, this.lastChunkId = (0, JB.c)(oB, GB, vB), this.editedAt.delete(this.lastChunkId), this.editedAt.set(this.lastChunkId, kB);
          for (const [BB, IB] of this.editedAt) {
            if (IB >= kB - 3e5) break;
            this.editedAt.delete(BB)
          }
        } else this.editedAt.set(this.lastChunkId, kB)
      }
      chunksEditedSince(BB) {
        const IB = [];
        for (const [ZB, TB] of this.editedAt) TB >= BB && IB.push(ZB);
        return IB
      }
    }
  },
  39135: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => FI,
      f: () => fI,
      i: () => jI,
      m: () => lI
    });
    var TB = ZB(3854),
      JB = ZB(8885),
      oB = ZB(36697),
      GB = ZB(1500),
      vB = ZB(36780),
      kB = ZB(39030),
      cB = ZB(39021),
      nB = ZB(3911),
      hB = ZB(37928),
      zB = ZB(39143),
      FB = ZB(1300),
      NB = ZB(342),
      gB = ZB(24),
      qB = ZB(2029),
      yB = ZB(105),
      UB = ZB(36),
      WB = ZB(2066),
      dB = ZB(1956),
      CB = ZB(3133);
    class QB {
      constructor(BB) {
        this.storeForMs = BB, this.clicks = new CB.e
      }
      click() {
        this.clicks.enqueue(Date.now());
        const BB = Date.now() - this.storeForMs;
        for (; this.clicks.size > 0 && this.clicks.peek() < BB;) this.clicks.dequeue()
      }
      getNumClicksInMs(BB) {
        let IB = 0;
        return this.clicks.forEach((ZB => {
          ZB > Date.now() - BB && IB++
        })), IB
      }
      getMaxClickSeparationInMs(BB) {
        if (0 === this.clicks.size) return this.storeForMs;
        let IB = 0,
          ZB = Date.now() - BB;
        this.clicks.forEach((TB => {
          TB < Date.now() - BB || (IB = Math.max(IB, Math.abs(TB - ZB)), ZB = TB)
        }));
        const TB = Math.abs(Date.now() - ZB);
        return Math.max(IB, TB)
      }
    }
    class sB {
      constructor(BB) {
        this.storeForMs = BB, this.clickDownDurations = new CB.e
      }
      registerClickDownDuration(BB) {
        this.clickDownDurations.enqueue({
          dur: BB,
          atTime: Date.now()
        });
        const IB = Date.now() - this.storeForMs;
        for (; this.clickDownDurations.size > 0 && this.clickDownDurations.peek().atTime < IB;) this.clickDownDurations.dequeue()
      }
      clickDownDurationsCheck(BB) {
        if (BB > this.storeForMs) return console.error("overDuration is greater than storeForMs"), "0:0";
        let IB = 0,
          ZB = 0;
        return this.clickDownDurations.forEach((TB => {
          TB.atTime > Date.now() - BB && (IB++, ZB = Math.max(ZB, TB.dur))
        })), `${IB}:${ZB}`
      }
    }
    var wB = ZB(36529),
      OB = ZB(39152),
      YB = ZB(20),
      iB = ZB(2912),
      pB = ZB(1382),
      aB = ZB(2510),
      HB = ZB(4624),
      MB = ZB(140),
      jB = ZB(38227),
      PB = ZB(38431),
      RB = ZB(665),
      rB = ZB(36524),
      mB = ZB(11),
      XB = ZB(9296),
      LB = ZB(1281),
      eB = ZB(201),
      uB = ZB(39155),
      fB = ZB(39163),
      lB = ZB(39170),
      AB = ZB(38258),
      tB = ZB(39182),
      bB = ZB(38146),
      xB = ZB(3586),
      EB = ZB(1711),
      DB = ZB(36619),
      KB = ZB(2973),
      VB = ZB(36396),
      SB = ZB(36398),
      BI = ZB(39175),
      II = ZB(38004);
    const ZI = {
      forward: "freeCamForward",
      backward: "freeCamBackward",
      left: "freeCamLeft",
      right: "freeCamRight",
      jump: "freeCamUp",
      crouch: "freeCamDown"
    };

    function TI() {
      var BB, IB;
      return !(null === (BB = (0, iB.d)().client) || void 0 === BB || null === (IB = BB.freeCameraController) || void 0 === IB || !IB.movesFly())
    }

    function JI(BB) {
      const IB = BB.on.bind(BB);
      BB.on = (BB, ZB) => {
        WB.C.has(BB) ? IB(BB, ZB) : IB(BB, (IB => {
          var TB;
          return null !== (TB = (0, iB.d)().client) && void 0 !== TB && TB.isReplayMode() ? function(BB) {
            return BB in ZI
          }(BB) && TI() ? ZB(IB) : void 0 : ZB(IB)
        }))
      }
    }
    const oI = 5e3,
      GI = 1;
    let vI, kI = GI,
      cI = 0;
    const nI = !0;
    let hI = nI;
    qB.c.subscribe("_ignoreBasicBoards", (BB => {
      hI = BB
    })), (0, TB.onGameReset)((() => {
      hI = nI
    }));
    let zI = null;
    const FI = () => zI;
    let NI, gI, qI;
    var yI, UI, WI, dI, CI, QI, sI, wI, OI;
    const YI = [1, 243, 0, 18, 85, 72, 215, 5, 10, 231, 8, 255, "length", "undefined", void 0, 122, 4, "c", 2, 188, 63, 6, "fromCodePoint", 7, 12, "push", 50, 3, 54, 49, "g", 91, "e", 8191, 88, 13, 14, 46, 19, 71, "d", "h", 197, 51, 26, 9, "f", "b", "i", 171, !1, 169, 218, "a", 116, 38, 127, 128, 235, 53, 79, 58, 92, 206, 113, 57, 40, 90, 148, 119, 176, 87, 16, 512, 81, 97, 208, 195, 15, 249, 80, 221, 111, 191, 1023, 31, 32, 24, 64, 65535, null, 174, 77, 178, 35, 204, 95, 240, 61, 60, "/", 184, 236, 232, 82, 62, !0, 256];

    function iI(...BB) {
      return BB[YI[12]] = YI[0], typeof yI[BB[YI[2]]] === YI[13] ? yI[BB[YI[2]]] = function(...BB) {
        for (MI(BB[YI[12]] = YI[0], BB[YI[0]] = '8Lmak/R^t=l1h)SBT#,`{?+C9vGbpsx_J:IO.(g2|%wFQ47V"[NA;DKYHE&zPoUZu*]>}yWX5j6q@$rincMd!<03~fe', BB[YI[1]] = "" + (BB[YI[2]] || ""), BB[-YI[4]] = BB[YI[1]].length, BB[YI[9]] = [], BB[-YI[7]] = YI[2], BB[YI[8]] = YI[2], BB[YI[6]] = -YI[0]), BB[-YI[3]] = YI[2]; BB[-YI[3]] < BB[-YI[4]]; BB[-YI[3]]++)
          if (BB[-YI[5]] = BB[YI[0]].indexOf(BB[YI[1]][BB[-YI[3]]]), BB[-YI[5]] !== -YI[0])
            if (BB[YI[6]] < YI[2]) BB[YI[6]] = BB[-YI[5]];
            else {
              MI(BB[YI[6]] += BB[-YI[5]] * YI[31], BB[-YI[7]] |= BB[YI[6]] << BB[YI[8]], BB[YI[8]] += (BB[YI[6]] & YI[33]) > YI[34] ? YI[35] : YI[36]);
              do {
                MI(BB[YI[9]].push(BB[-YI[7]] & YI[11]), BB[-YI[7]] >>= YI[10], BB[YI[8]] -= YI[10])
              } while (BB[YI[8]] > YI[23]);
              BB[YI[6]] = -YI[0]
            } return BB[YI[6]] > -YI[0] && BB[YI[9]].push((BB[-YI[7]] | BB[YI[6]] << BB[YI[8]]) & YI[11]), pI(BB[YI[9]])
      }(UI[BB[YI[2]]]) : yI[BB[YI[2]]]
    }

    function pI(...BB) {
      return BB[YI[12]] = YI[0], typeof dI !== YI[13] && dI ? (new dI).decode(new CI(BB[YI[2]])) : typeof QI !== YI[13] && QI ? QI.from(BB[YI[2]]).toString("utf-8") : OI(BB[YI[2]])
    }

    function aI(...BB) {
      if (BB[YI[12]] = YI[27], BB[YI[2]] === function(BB) {
          return typeof yI[BB] === YI[13] ? yI[BB] = function(...BB) {
            for (MI(BB[YI[12]] = YI[0], BB[YI[0]] = ':rgYfESFiKImcA9D?;0k!R+@H(4B/s}.OC~ql_M5XoPtU^=VwvW7y]x>3G1Ju)[Zn#8L2|eh6<"{Njpb`TQz$%&*ad,', BB[-YI[28]] = "" + (BB[YI[2]] || ""), BB[YI[17]] = BB[-YI[28]].length, BB[YI[37]] = [], BB[YI[32]] = YI[2], BB[YI[21]] = YI[2], BB[YI[30]] = -YI[0]), BB[YI[10]] = YI[2]; BB[YI[10]] < BB[YI[17]]; BB[YI[10]]++)
              if (BB[YI[29]] = BB[YI[0]].indexOf(BB[-YI[28]][BB[YI[10]]]), BB[YI[29]] !== -YI[0])
                if (BB[YI[30]] < YI[2]) BB[YI[30]] = BB[YI[29]];
                else {
                  MI(BB[YI[30]] += BB[YI[29]] * YI[31], BB[YI[32]] |= BB[YI[30]] << BB[YI[21]], BB[YI[21]] += (BB[YI[30]] & YI[33]) > YI[34] ? YI[35] : YI[36]);
                  do {
                    MI(BB[YI[37]].push(BB[YI[32]] & YI[11]), BB[YI[32]] >>= YI[10], BB[YI[21]] -= YI[10])
                  } while (BB[YI[21]] > YI[23]);
                  BB[YI[30]] = -YI[0]
                } return BB[YI[30]] > -YI[0] && BB[YI[37]].push((BB[YI[32]] | BB[YI[30]] << BB[YI[21]]) & YI[11]), pI(BB[YI[37]])
          }(UI[BB]) : yI[BB]
        }(109)) return BB[YI[0]] + BB[YI[18]]
    }

    function HI() {}

    function MI() {
      MI = function() {}
    }

    function jI(BB) {
      function IB() {
        return BB.zW.FZB(BB.Jm)
      }
      JI(BB.inputs.down), JI(BB.inputs.up);
      for (const TB of ["forward", "backward", "left", "right", "sprint", "jump", "crouch"]) {
        const IB = (IB, ZB) => {
          var JB, oB;
          if (TI()) {
            var GB;
            const JB = ZI[TB];
            var vB, kB;
            if (JB) null === (vB = (0, iB.d)().client) || void 0 === vB || null === (kB = vB.freeCameraController) || void 0 === kB || kB.handlefreeCamKeyPress(JB, IB, ZB);
            return void(ZB || null !== (GB = (0, iB.d)().client) && void 0 !== GB && GB.isReplayMode() || (BB.zW.UZB()[TB] = !1))
          }
          if (null !== (JB = (0, iB.d)().client) && void 0 !== JB && null !== (oB = JB.freeCameraController) && void 0 !== oB && oB.isKeyPressOverriden(IB)) return;
          BB.zW.UZB()[TB] = ZB
        };
        BB.inputs.down.on(TB, (BB => IB(BB, !0))), BB.inputs.up.on(TB, (BB => IB(BB, !1)))
      }
      BB.inputs.down.on("crouch", (() => {
        if (TI()) return;
        if (!BB.vW.canCrouch) return;
        const IB = BB.zW.UZB();
        YB.d.get("clientEscMenuOptions").crouchIsToggle && (IB.crouchToggled = !IB.crouchToggled && !IB.padSneakToggled), IB.padSneakToggled = !1
      }));
      const ZB = () => {
        const BB = IB();
        BB.isGun() && BB.inaccuracyCalculator.jump()
      };
      BB.inputs.down.on("jump", (BB => {
        TI() || (ZB(), NI(BB))
      }));
      for (const TB of WB.m) BB.inputs.down.on(TB, (BB => {
        var IB, ZB;
        null !== (IB = (0, iB.d)().client) && void 0 !== IB && null !== (ZB = IB.freeCameraController) && void 0 !== ZB && ZB.handlefreeCamKeyPress(TB, BB, !0) && (BB.preventDefault(), BB.stopPropagation())
      })), BB.inputs.up.on(TB, (BB => {
        var IB, ZB;
        null !== (IB = (0, iB.d)().client) && void 0 !== IB && null !== (ZB = IB.freeCameraController) && void 0 !== ZB && ZB.handlefreeCamKeyPress(TB, BB, !1) && (BB.preventDefault(), BB.stopPropagation())
      }));
      BB.inputs.down.on("recordGame", (() => {
        var BB, IB;
        null === (BB = (0, iB.d)().client) || void 0 === BB || null === (IB = BB.gameRecorder) || void 0 === IB || IB.toggleRecording()
      })), BB.inputs.down.on("recordClip", (() => {
        var BB, IB;
        (0, wB.d)() || null === (BB = (0, iB.d)().client) || void 0 === BB || null === (IB = BB.gameRecorder) || void 0 === IB || IB.saveClip()
      }));
      for (const TB of WB.C) BB.inputs.down.on(TB, (() => {
        var BB;
        if ((0, OB.d)()) return;
        if ("replayViewerOpen" === TB) return void gB.l.Gq("replayViewer|requested", "toggle");
        const IB = null === (BB = (0, iB.d)().client) || void 0 === BB ? void 0 : BB.gameReplayer;
        ((0, wB.d)() || null !== IB && void 0 !== IB && IB.isReplayMode()) && (null === IB || void 0 === IB || IB.handleAction(TB))
      }));
      const GB = new QB(3e4),
        hB = new sB(4e4);
      let zB = 0;
      const UB = BB => {
          let IB = 0,
            ZB = null;
          const TB = IB => null !== IB && IB === ZB && (ZB = null, BB(), !0);
          return {
            press: () => (IB++, (0, uB.e)() || (TB(ZB), ZB = IB), IB),
            owns: BB => BB === ZB,
            release: TB
          }
        },
        CB = (BB, ZB) => {
          ZB && lI(FB.d.TouchDownFirePrimary), BB ? XB() : ((0, PB.g)(), IB().cTB()), ZB || lI(FB.d.DownFirePrimary), fI(!0), GB.click();
          const JB = GB.getMaxClickSeparationInMs(3e4) < 1e3 / 30,
            oB = GB.getMaxClickSeparationInMs(1e4) < 20,
            vB = GB.getMaxClickSeparationInMs(4e3) < 1e3 / 70;
          if (JB || oB || vB) {
            let BB;
            if (JB) BB = 30;
            else if (oB) BB = 50;
            else {
              if (!vB) throw new Error("???");
              BB = 70
            }(0, TB.sendColyMessage)(nB.ak, BB)
          }
        },
        HB = new fB.e,
        MB = UB((() => {
          fB.e.stopRunning();
          const BB = Date.now() - zB;
          hB.registerClickDownDuration(BB), IB().GTB(), lI(FB.d.UpFirePrimary), fI(!1);
          const ZB = hB.clickDownDurationsCheck(4e4);
          (0, TB.sendColyMessage)(nB.zg, ZB)
        }));
      let jB = 0;
      BB.inputs.down.on("primary-fire", (function(BB) {
        jB = MB.press(), MB.owns(jB) && (zB = Date.now(), Math.abs(performance.now() - BB.timeStamp) > 5e3 || (CB(BB.altKey, "changedTouches" in BB), NI(BB)))
      })), BB.inputs.up.on("primary-fire", (function(BB) {
        MB.release(jB) && NI(BB, !0)
      }));
      const RB = () => {
          IB().ecB(), lI(FB.d.DownFireSecondary), fI(!0), BB.lBB && !BB.lBB.position && (0, cB.h)()
        },
        rB = UB((() => {
          IB().oTB(), lI(FB.d.UpFireSecondary), fI(!1)
        }));
      let mB = 0;
      BB.inputs.down.on("alt-fire", (function(BB) {
        mB = rB.press(), rB.owns(mB) && (RB(), NI(BB))
      })), BB.inputs.up.on("alt-fire", (function(BB) {
        rB.release(mB) && NI(BB, !0)
      }));
      const XB = () => IB().lcB();
      BB.inputs.down.on("mid-fire", (() => {
        (0, uB.e)() || XB()
      }));
      const tB = BB => {
          (0, TB.sendColyMessage)(nB.Mh, BB, !0)
        },
        vI = BB => {
          (0, TB.sendColyMessage)(nB.Nh, {
            Qv: BB,
            sv: nI()
          }, !0)
        };
      for (const TB of ["SpecialAction1", "SpecialAction2"]) BB.inputs.down.on(TB, (() => {
        tB(TB)
      })), BB.inputs.up.on(TB, (() => {
        vI(TB)
      }));
      const cI = () => {
        const BB = IB();
        BB.isGun() && BB.reload(Date.now())
      };
      BB.inputs.down.on("ReloadGun", cI);
      const nI = () => {
        let IB = "a";
        return BB.physics.testSolid.toString().includes("Pz") || (IB = "b"), IB
      };
      BB.inputs.down.on("OpenInventory", (BB => {
        BB.preventDefault(), (0, EB.A)(BB, "inventory", (0, lB.b)((0, iB.h)()))
      })), BB.inputs.bind("ShiftHeld", "ShiftLeft", "ShiftRight");
      const hI = BB => {
        gB.l.Gq("DropItemKeyPressed", BB)
      };
      BB.inputs.down.on("DropItem", (() => {
        hI(BB.zW.UZB().crouch)
      })), BB.inputs.down.on("OpenShop", (IB => {
        (0, wB.d)() || "inGame" === YB.d.get("gameState") && (0, EB.x)(IB, NB.q.SHOP, !(0, JB.d)(BB.vW.shopInfo))
      })), BB.inputs.down.on("OpenLobbyLeaderboard", (IB => {
        (0, wB.d)() || "inGame" === YB.d.get("gameState") && (0, EB.x)(IB, NB.q.LOBBY_LEADERBOARD, (0, BI.d)(BB.vW))
      })), BB.inputs.down.on("HideUi", (() => {
        gB.l.Gq("showUi", !1)
      })), BB.inputs.up.on("HideUi", (() => {
        gB.l.Gq("showUi", !0)
      }));
      const FI = BB => {
        0 === BB && (BB = 10), gB.l.Gq("setSelectedInventorySlotI", BB - 1), gB.l.Gq("numkeyPressed", BB)
      };
      for (let TB = 1; TB <= 10; TB++) BB.inputs.down.on("HotBarSlot" + TB.toString(), (() => {
        FI(TB)
      }));
      BB.inputs.down.on("OpenTasksAndLeaderboard", (IB => {
        const ZB = (0, DB.m)();
        ZB ? (0, EB.C)(IB, !0, ZB) : (0, EB.A)(IB, "retentionFeatures", !(!BB.vW._tasks && !BB.vW._availableLeaderboards))
      })), BB.inputs.down.on("OpenCodeEditor", (IB => {
        (0, EB.C)(IB, (0, aB.e)((0, pB.c)()), (() => {
          (0, aB.l)(BB.zW.aU(BB.Jm))
        }))
      })), BB.inputs.bind("ToggleFullCoordinateOverlay", "F3"), BB.inputs.down.on("ToggleFullCoordinateOverlay", (() => {
        gB.l.Gq("toggleFullCoordinateOverlay")
      }));
      const qI = () => {
        (0, iB.d)().client.cameraController.swapCameraZoom()
      };
      BB.inputs.down.on("SwapCameraZoom", qI), BB.inputs.down.on("OpenInviteLink", (BB => {
        (0, EB.A)(BB, "inviteLink", yB.featureFlags.canUseInviteLinks)
      })), BB.inputs.bind("Y", "KeyY"), BB.inputs.down.on("Y", (BB => {
        (0, wB.d)() || gB.l.Gq("YKeyPressed")
      })), BB.inputs.bind("X", "KeyX"), BB.inputs.down.on("X", (BB => {
        (0, wB.d)() || gB.l.Gq("XKeyPressed")
      })), BB.inputs.down.on("OpenEmoteWheel", (() => {
        gB.l.Gq("requestEmoteWheelHoldOpen")
      })), BB.inputs.up.on("OpenEmoteWheel", (() => {
        gB.l.Gq("requestEmoteWheelHoldRelease")
      })), BB.inputs.down.on("Zoom", (() => {
        if ("inGame" === YB.d.get("gameState")) {
          BB.zW.getState(BB.Jm, "playerCameraAdjustment").zoomKeyPressed = !0, (0, iB.d)().client.cameraController.handleZoomKeyPressed()
        }
      })), BB.inputs.up.on("Zoom", (() => {
        BB.zW.getState(BB.Jm, "playerCameraAdjustment").zoomKeyPressed = !1
      })), PI();
      const yI = BB => function() {
        return gI(), BB(...arguments)
      };

      function UI(BB) {
        "inGame" !== YB.d.get("gameState") || (0, EB.p)() || (gB.l.Gq("ctrlCrouchWithoutFullscreen"), BB.preventDefault())
      }
      zI = {
        primaryFireDown: yI((BB => {
          const IB = MB.press();
          return MB.owns(IB) && (zB = Date.now(), CB(!1, !1), BB && HB.start()), IB
        })),
        primaryFireUp: yI((BB => {
          MB.release(BB)
        })),
        altFireDown: yI((() => {
          const BB = rB.press();
          return rB.owns(BB) && RB(), BB
        })),
        altFireUp: yI((BB => {
          rB.release(BB)
        })),
        jumpDown: yI(ZB),
        specialActionDown: yI(tB),
        specialActionUp: yI(vI),
        reloadGun: yI(cI),
        dropItem: yI(hI),
        swapCameraZoom: yI(qI),
        pickBlock: yI(XB)
      }, BB.inputs.down.on("ctrlCrouch", UI), BB.inputs.up.on("ctrlCrouch", UI), BB.inputs.bind("ctrlCrouch", "ControlLeft");
      const WI = BB => {
        "inGame" === YB.d.get("gameState") && BB.ctrlKey && !(0, EB.p)() && BB.preventDefault()
      };
      document.addEventListener("keydown", WI), document.addEventListener("keyup", WI), document.addEventListener("keypress", WI), BB.inputs.bind("Alt", "AltLeft", "AltRight"), BB.inputs.down.on("Alt", (BB => {
        BB.preventDefault()
      }));
      const dI = IB => (0, bB.h)(BB, IB),
        CI = IB => (0, bB.l)(BB, IB),
        QI = [0, 0, 0],
        sI = [0, 0, 1];
      BB.on("afterRender", (IB => {
        SB.o.frame(IB, BB.camera.heading, BB.camera.pitch, SB.j.drawn), (0, oB.e)(BB.camera.heading), (0, bB.o)(BB, QI, sI), (0, iB.d)().client.triggerGameCallback("onAfterRender", IB, {
          cameraHeading: BB.camera.heading,
          cameraPitch: BB.camera.pitch,
          cameraPosition: QI,
          cameraDirection: sI,
          tanHalfFovX: (0, bB.d)(BB),
          tanHalfFovY: Math.tan(BB.Ig.qS().fov / 2),
          screenBandPct: {
            x: xB.b,
            y: (0, xB.g)()
          },
          projectWorldPosToScreenPos: dI,
          projectWorldPosToViewport: CI
        })
      })), BB.camera.lH = (0, VB.startLookDebug)("js"), BB.inputs.pM = VB.noteLookDroppedCopy, (0, KB.t)("remesh") && (0, II.j)(BB), BB.on("beforeInputs", (() => {
        if ((0, OB.d)()) return BB.inputs.zD.dx = 0, void(BB.inputs.zD.dy = 0);
        if (BB.camera.zD.dx += BB.inputs.zD.dx, BB.camera.zD.dy += BB.inputs.zD.dy, 0 !== BB.inputs.zD.dx || 0 !== BB.inputs.zD.dy) {
          BB.zW.getState(BB.Jm, "playerCameraAdjustment").lastPointerMove = Date.now()
        }
        BB.inputs.zD.dx = 0, BB.inputs.zD.dy = 0
      }));
      let wI = 0;
      const OI = [0, 0, 0],
        YI = [0, 0, 0],
        iI = {
          base: OI,
          max: YI
        },
        pI = BB => {
          const IB = eB.f.droppedBlockSize / 2;
          return [0, 1, 2].every((ZB => BB[ZB] >= OI[ZB] - IB && BB[ZB] <= YI[ZB] + IB))
        };
      BB.on("Iz", (function(IB) {
        gB.l.Gq("noaTick", IB);
        const ZB = (0, iB.d)().client;
        if (ZB.triggerGameCallback("Iz", IB), ZB.isClientGameSessionActive()) try {
          kB.d.Iz(IB)
        } catch (GB) {
          console.error("Error ticking audio entities", GB)
        }
        if (!BB.zW.hZB(BB.Jm).isAlive) return;
        Date.now() - wI > 9e3 && (! function() {
          const BB = (0, iB.h)();
          "number" === typeof BB.vW.speedMultiplier && "number" === typeof BB.vW.jumpAmount && (0, TB.sendColyMessage)(nB.hi, {
            nv: (0, LB.d)(BB.vW.speedMultiplier),
            hv: (0, LB.b)(BB.vW.jumpAmount),
            zv: (0, LB.d)(BB.vW.crouchingSpeed),
            Fv: (0, LB.d)(BB.vW.walkingSpeed),
            Nv: (0, LB.d)(BB.vW.runningSpeed),
            gv: (0, LB.b)(BB.PBB),
            qv: BB.zW.dIB(BB.Jm).jumpForce,
            yv: BB.zW.zK(1).width,
            Uv: BB.zW.zK(1).height,
            Wv: BB.zW.vx(1).Wv
          }, !0)
        }(), wI = Date.now());
        const JB = BB.zW.UZB();
        if ((JB.jump || JB.forward || JB.backward || JB.left || JB.right || JB.sprint) && gB.l.Gq("usedKeyboard"), BB.zW.bIB(BB.Jm) && !0 === BB.vW.canPickUpItems) {
          const IB = BB.zW.aU(BB.Jm),
            ZB = (0, dB.t)(kI),
            JB = (0, dB.v)(kI);
          OI[0] = IB[0] - ZB, OI[1] = IB[1] - .6 * JB, OI[2] = IB[2] - ZB, YI[0] = IB[0] + ZB, YI[1] = IB[1] + eB.f.fq + .6 * JB, YI[2] = IB[2] + ZB;
          const oB = BB.zW.bvB(iI, BB.zW.names.autoRotate),
            {
              itemDropPrediction: GB
            } = (0, iB.d)().client,
            kB = TB.offlineInputReplay.holdsInput();
          if (oB.length > 0)
            for (const hB of oB) {
              const IB = BB.zW.getState(hB, "itemState");
              if (void 0 === IB || Date.now() - IB.creationTime < 500) continue;
              let ZB = hB,
                JB = null;
              if (IB.wJ) {
                const BB = GB.pickupTarget(hB, pI, kB);
                if (null === BB) continue;
                ({
                  mv: ZB,
                  ev: JB
                } = BB)
              }
              const oB = BB.zW.getState(ZB, "itemState");
              if (oB.wJ && null === JB) continue;
              let zB = 0,
                FB = null,
                NB = !1;
              if (0 === oB.amount) NB = !0;
              else {
                const {
                  amountPickedUp: IB
                } = BB.zW.lIB(BB.Jm).pickUpItem({
                  name: oB.name,
                  typeObj: oB.typeObj,
                  amount: oB.amount,
                  attributes: oB.attributes
                });
                if (zB = IB, 0 === zB) continue;
                FB = AB.b.pickUp(oB, zB), oB.amount -= zB, oB.amount < 0 ? console.error("Picking up led to less than 0 of item!") : 0 === oB.amount ? NB = !0 : oB.creationTime = Date.now() + oI
              }
              const gB = (0, iB.d)().client.inventoryPrediction.record(FB);
              (0, TB.sendColyMessage)(nB.Gh, {
                mv: null === JB ? ZB : "",
                Xv: zB,
                Lv: cB.e,
                lG: gB,
                ev: JB
              }, !0), NB && (kB && GB.onPickedUpOffline(ZB, gB, JB), null === JB && BB.zW.deleteEntity(ZB));
              vB.d.play("pickUp", eB.f.pickupSoundVol).rate(1 + Math.random() * eB.f.pickupSoundRateVariation)
            }
        }
        if (!BB.zW.RIB(BB.Jm)) return;
        const oB = BB.inputs.zD.OIB;
        if (0 !== oB) {
          const IB = oB > 0 ? 1 : -1;
          BB.inputs.state["mid-fire"] || BB.inputs.state.Alt || !BB.vW.useInventory ? (BB.inputs.state["mid-fire"] && gB.l.Gq("requestEmoteWheelClose"), (0, iB.d)().client.cameraController.handleScrollZoom(IB)) : gB.l.Gq("ScrollInventorySlot", IB)
        }
      })), qB.c.subscribe("droppedItemScale", (BB => {
        kI = "number" === typeof BB && isFinite(BB) ? BB : GI
      }))
    }

    function PI() {
      const BB = (0, iB.h)();
      if (BB)
        for (const IB in WB.u) {
          BB.inputs.unbind(IB);
          for (const ZB of WB.u[IB]) BB.inputs.bind(IB, ZB)
        }
    }
    MI(yI = {}, UI = ["EXh^,UECPUE", '"I3=ngFqc=H1XSjv', "p=!$Jrb`IEHkL", "WR=xOzM7`KrZ}b%g?ZzJE7dsOu)oQbbCeSMAz7GuLBi,oPk,;GX=", "hFPDJ}=%#h0DE93|X8", 'X(C;^Ddi8]0.y"J.mh9x/i%yR', ":aHR,U}x8?", "IK!XedVEs?;H!B](h7L59|BL", 'UUS=uPH0D)+*bNoOS|!/ti/)e1{"`m', "8hRY:|!h0`_i.aL,tOY;10iscZRVha}_FGCkG<cAk`(y2Gi2Xwg^", "5SS;]5fL", '<z=AZ2:%B?^}Bb=,W}u=mcjE"BA', 'YzUpKH%LnZXJ|ba#XKx@.V{.LB_l)5uC>(Trv|t9;uHpkB!b1Zbl/"2O}K<EL', 'DAK^+N8.V?@6!XTIhkdDFAG05&"@Uc*#G}xk', "#ZqG(HR&5{ujt!?O2Uy_CX#s2&m=+c8,u}7_|Zf%R", '7E;_?;1L(&/T:kR9<SLKly;;#PMZI)1gM"^;4M,;z**j2bt', 'BE^K"[:^s?~PhXJ.IBYk', ",hdD$Yk,+u&nmMk_^sG5/IktQ*h)A&]9((D6RizC7]N_oPGpA=gp{|VL", '{=_pVq$LGz"U&o5g,KlbGgjL2uo]bmqg7}NJ3:6,7][yxSBGxL', "_73k6gR9Jhd+}BPCn8", "6U>l4nmwqSIb`mXvA|GJAZ%yVDga9zk,fzbsy.iiF16>XSzpU(Z@2KavV]w", "bGNt.ocs/KdP828CPCI5FM#^J]}j@.*#OAuRK5zsV?Q]!zxw=|IAh", "JA?_Y2sqt{|iia", "xIkl2K$%szZ?ha}v^7a", "IK@$5.2Ev{6sHb3|jzTR", ')Bhs{;&|BPr6aX/`1(Iqs<2OaEFUcn$20wW@T.H;(K(ircV2D"/lK$di#E9RL', '4A/^ZDqE_?[nrWq`ls/6aD,01#n7,cN|_7B;s|,9I`(]<"vs', '|K16}5d)0&"yka<+^Ea/.z|,duaIbmL,gELroi=^)z36tTjGtXm', 'TX+_C@+tQH(@_M"I5K+phU[qRu%y8', ':(lJ+X9mrzB}{".,uIMt&5#`pUt)|b_(({C@9gmWwS', "B=Kk;W{nTP/M<.SGLJWp|H00S,", "$U|x3E&m2uf6fkZ.oCa5AZt;~#JyBa(g", "/KHK=EXEH&h{qGVGw(i@;ANx`=eDOSdp$_1sjEr7+)h{(TR", 'H"7_rc>C41&1vk', 'L6=Rs|7mQ1iLTb~Oc"k^', "}aFJTd?Le*}vg)z#K=$NVZqs;=", "N*Dkx;P0BZ3hxoYI?=Aseg{&IP:5Ya", "sX_jN(M0o1*,w)>xJ|(^2VRu0&j>=c&wrWpsIjM|=Y(", 'wE<pD$t7duZSpb"bqwQ$.OJ;ZP<+XWECkZTRA&[)r,I*_G6`', "F(<GprfOAhSxmv#|eIm", "G6%bt0,mfU>O](}xKA@sF[`seSjj~af+i*.lTgD)h?!6L.q`?Ea", ".}|xWcHxVH=)wo5_DA|A=i$Z&Uj13SG.!_)lb", '|KLJq"enu,)I^M].(AwswO}9k`', "7#]t$4o%y`yOcP*.M(/l9NyLi,]n:k~OU(6ACg8", "UKd/*2uxwUGR_NpC`RnKg}/LJB", "9|Xp<X^L5)@1nXX(OI{s(|<<NPnkL", '5HS:o"8', "U_U;WcEL*,WjU(<|SJqJdrL`RlGbw)3s68", '&Gr_a"$A8,R(,(n|)k|KV(EsC&+)kaqg:}m/Z7[%b{1*KvO,', "yj.$W6;ucZ`As5A%9L", '#Ax@g}50ZZ"9PB0b+sijSYk.VH:yL', 'I(H=m5r0LZ/Cy"kg+h9:gjw|lS&^o9B', "{EGb|MP,a", "%A2@i.J.5)sb=Tqv4RIqNHL):E%jCXJ.G=%Ae<DZ;K8}pT<+s(vABEm9/", 'A|2@(H+.D)1A"By,ft7@ccx9aKR}4)_CB=W@)E`%JEN@ZzHwKG7YG', 'nvk$In.;IKc$"dI.,X)l(q4)R', "b|]J(<_Vy`G#5d7|#BB=hYRxp#nWlSR", '"IeA]".nUH&,!X<OS[X;rcqqRl`i%)&O6(Yjgj8', "y(>DtY~7O=WWoczw!abJq6k0&{RMQVG.", '3"lb]!~;Nh3EJd@Gu#R;{z8xK)dB5zt', "d_4_gK4OZt7@?/{Iy}uATE7|nENzDk5,qI9r}Y,m", "oC#KYi*OPSmI)TP%KSRYFMlxl#7kE5kxash$ly]ht{}?Ioh", "/Zx^dd:s/", "4*G$S@D%RuGy6GGs6AW_$N>E]ER}QTVG_L", "|A=JhyjykuM12G`{BAal%H}6QtR}1zD|JAsl?", "{RADvg@|%#IUx(gvnpgYRUi)kun+_ml", "YCCpk0zCUBjHnz1`_Px[2[S.Yue/#.U9]UJK:;!|?K8bgvIxSL", "4}F6zIwh8BJ{sT#|", ".ETrFZ+&K&rW@9)", 'kEYkfz;|3{]S2M{|540jAH1%[Kjt*"y_(}0=', "WANbtigmq{eu>MO_ew@6}Dkt]ZZ1VmHI~*)69dAL", '=hOJ;qsO,h;n.da(aOTKCd07f{/V="Tb~{>s4qlxxzg', ",Zh_2V2E#PTxAgJxK=9KG|8,%{%", "~4Qlr.()4HQy=/7|HaDl%}8,K&!JOmqG)h7k", "&zI5h6)`[P8(|d+|mP}DbVavY&.5<c)2Uz9[vX!I_h9iAa@ga,HKvgM9qSP,L", 'j*{Y4Ot;Q#r6yy@`?=,5D(Ix`=U7)"8x', "A*AJ#Y!Ix,u^L", "oztx;W$Z*=nD{d%v(X>Df;_O`=rk%TS", "3*Z@^U<C#]dNz&GsLsjKHMB^|&|#go.9AaVk|qltQ1J*o.JC0*%R=P8", "bBgYt@g,xBG*;z!b<{d$3g8", "h[GsT;lW8,8MBgfCWag_d:L)!uJ", "u_.6n;3^kE}]^gZ#3{%RGgmw[]TI2WqgvPZk!X&06SloDT~p)XBx#yKm", ")ZAJ].$AL]VSry|_9AwAK(?O5&|Y}B+bP{~R", ":(vraUdsvUfsdG/`OA7^Y2g;2)Yv;a", '!W[K<@bsBZ"', "[At:jyzsZZApkXJ9p(:xu!.6S]Ti7S^`z#?^ME,m", "]}zD@NACPtdWSG+|X*9:Y!|hH)FUL", "s|+_9|phnh_9kB6gD|/lBEYsqH{@1Mux2*XkL0YVn=i,ykuCHzfJqYy)P1H", "4_Dlk5x.G{#i(v^_~U^x^Ui)J]?iVV#2*a@6T", "L6Wp(jz%<u8Kec&s!I_=xo|xqt#5M[d%4*7j2j,9a", "VA7^AHt&#]@1tB&sCPW@8Yi^cZi>wvgvc(4_HMh;R", "etD^x;r97Bl5L", "F{k$L!.&$zb_pbd|Ha/6[qa)qzT5dmB", 'vBOJ}"D<R', "54*tpz{nk", "}}EKbz)VD)&J%T3ssK*RqyoZF1<.Y&xx", '_PLKN&_ONEII{V"2oaX=J;}xlY7SK[m,TPa', "!2Z@9g&95#$$Gc#bgRg^!X}RzUn>`d5_aBA5LD;nE#o;Ro1G1FJj+@8", "D}!$D$0&7,t)gvR", 'oU:K#@P,mhjp=!avetCkdz,t?uJybVnb?BgpR"_`k', 'zC=RXDq)6#]v1N^,<z!GcEN7"]<WIo*#b}9[T', 'ThJj9;HxD`D9}aHIS7esED}xVPY_8X;|<I<^D2D)mZ3WP9fO|"Ujb', '4_<^p|vVd`Uvt2`b_|n=a"@R]`!P#PnG1[Q$x;dL', "e{H[FOStdh6n0y}9Rsm", "ep9[vd(ENPPn2V<bC}WkT6txu,k5GN](`Aa", "aF;D{gNm", '/=HR/y&,`uk=<"GsKay^8YN,%#VYBg>,JP`JxK1LMEJa8XPw;hdJ,cS9]=QaL', "?XXKlye60&O5@91gzS6tti~78Z(@xm&%:K`$t@G0_BNnQTr`1(yX#", "?GzDz5~;OK~`TaICms)6TgUh:Pp&L", "LxUs}xTr", "g(_@#U%L", "eNIl8z~V", "*LG^E!WkLH8Ib~qq9}+VGGzFWx)@0:.", "t[]Lg|OWW6:", "Et&~@*W9", "#cF7r7Z9", "Et97;C>9", "HN|s:%Vv", "Sd9=JaD8x%sn)6ay", "MxqQ!gl#SjkE0s${", "fc.Ln9M33d:*@?y", '#]RY<m<"EvBXsyBgb)&bB8YaH', 'WicEdeMf6<}*ey;~HA&{_q"il', "M[XILTo!OAjMK6QGWi&{=#ens", 'W_zIFS2sZqwt*ciI,[g{~r:n#?fQN"!p9Nv3[', 'iSba58GJ[xye:eR@H9w.R863v&_X|2hCrLEa"', "[i&{KC:n[}`6D)S_%Xd=JXOMr<WQsy=x!Nv37", "SdHdcBoff,Z1I6{x)j7{JX}fax)QsyIA0N7{[", "uF7{fg_J|d6m}S%#Vc$^:>_1!l]oGyIA:NV", "r;Qb_LbJ", "IDb3;5bU", "TX].VET=", "F9Ds`f,Q", "*j67Z)_Q", 'yDp.:j"Q', "W$6I_SrN", "H[zwSo0N", "[@67!n!i~P<", "h?mo1>[Ah~/", "!]yXq:{mJ8/", "|v>I^;9g=rl", "C{Ky;O[?(x{", ";:=t;}.Ej</", "<?+y=4.9U", "1Mu(RT3NekZyjvm(<?:Ilp#g[|s/Gi2q]GP+&a64s|88jQ", "`?+yL3yg[|~yU3|[{{`o.OsO:!ZyNyrb1//.^;9P<DVPbN", ',{LI]7*Dsqc{vAJlU]eUu*0iJ8M**ARb%v+yQ4yg[|k0"H', 'ssFIO4EgB8j{_A0x.sFIJ3ngtL@{xA=rnG{."jN@WXzccQ', "CB{$rcGm", 'LB"CX$o', "[|bMM$Zg", '3u"EpV!g', "M.D8", ">U{1oeEKIJui5C", "<82NP][.s#A:$C", "FFM1P],jR8rvL1", "4P24+erq_$Vu%C", "%U*vsu[.,8r#0C", "%sm1>3qa8sT", "W4iPS4$A", 'hp"EF%OA', "JlGJ1QUA", "I?T]L", 'w="ig@td', "m_VmzM$J", 'KS"NY', "D}/MK26eKRx", "LDv*}?cb>BY", ")Rozy^zzhP2", "W9NDb&5W2Cp", "7iR,(~AAEKR", "dP6fK66.2pT", "t,A>Hy4o}?w", "1L7.gCGg", "{4s=4*pg", "6Od0", "~lA>n}Z@", ",8*_(7`J", "gB3{6Kqx", ">+<o6^n1", "A^A(Bspn", "^vRi@qYM"]), MI(WI = function() {
      var BB, IB, ZB, TB = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }];
      MI(BB = void 0, IB = []);
      try {
        MI(BB = Object, IB[YI[25]]("".__proto__.constructor.name))
      } catch (CI) {}
      BB: for (ZB = YI[2]; ZB < TB[YI[12]]; ZB++) try {
        var JB;
        for (BB = TB[ZB](), JB = YI[2]; JB < IB[YI[12]]; JB++)
          if (typeof BB[IB[JB]] === YI[13]) continue BB;
        return BB
      } catch (CI) {}
      return BB || this
    }() || {}, dI = WI.TextDecoder, CI = WI.Uint8Array, QI = WI.UN, sI = WI.String || String, wI = WI.Array || Array, OI = function(...BB) {
      return MI(BB[YI[12]] = YI[2], BB[YI[26]] = new wI(YI[57]), BB[YI[0]] = sI[YI[22]] || sI.fromCharCode, BB[-YI[15]] = []),
        function(...IB) {
          for (MI(IB[YI[12]] = YI[0], IB[-YI[19]] = YI[14], IB[YI[18]] = YI[14], IB[YI[17]] = IB[YI[2]][YI[12]], BB[-YI[15]][YI[12]] = YI[2]), IB[YI[16]] = YI[2]; IB[YI[16]] < IB[YI[17]];) MI(IB[YI[18]] = IB[YI[2]][IB[YI[16]]++], IB[YI[18]] <= YI[56] ? IB[-YI[19]] = IB[YI[18]] : IB[YI[18]] <= 223 ? IB[-YI[19]] = (IB[YI[18]] & YI[85]) << YI[21] | IB[YI[2]][IB[YI[16]]++] & YI[20] : IB[YI[18]] <= 239 ? IB[-YI[19]] = (IB[YI[18]] & YI[78]) << YI[24] | (IB[YI[2]][IB[YI[16]]++] & YI[20]) << YI[21] | IB[YI[2]][IB[YI[16]]++] & YI[20] : sI[YI[22]] ? IB[-YI[19]] = (IB[YI[18]] & YI[23]) << YI[3] | (IB[YI[2]][IB[YI[16]]++] & YI[20]) << YI[24] | (IB[YI[2]][IB[YI[16]]++] & YI[20]) << YI[21] | IB[YI[2]][IB[YI[16]]++] & YI[20] : (IB[-YI[19]] = YI[20], IB[YI[16]] += YI[27]), BB[-YI[15]][YI[25]](BB[YI[26]][IB[-YI[19]]] || (BB[YI[26]][IB[-YI[19]]] = BB[YI[0]](IB[-YI[19]]))));
          return BB[-YI[15]].join("")
        }
    }()), MI(qI = (...BB) => {
      BB[YI[12]] = YI[0], iI(110) + "D" in HI && function(...BB) {
        MI(BB[YI[12]] = YI[2], BB[YI[43]] = function(...BB) {
          for (MI(BB[YI[12]] = YI[0], BB[-YI[29]] = YI[2], BB[YI[38]] = {}, BB[-YI[39]] = YI[2], BB[YI[40]] = YI[2], BB[-YI[42]] = YI[2], BB[YI[21]] = BB[YI[2]].length), BB[YI[23]] = YI[2]; BB[YI[23]] < BB[YI[21]]; BB[YI[23]]++) {
            for (MI(BB[YI[38]] = {}, BB[-YI[39]] = YI[2], BB[YI[40]] = YI[0]), BB[YI[41]] = BB[YI[23]] + YI[0]; BB[YI[41]] < BB[YI[21]]; BB[YI[41]]++) BB[YI[2]][BB[YI[23]]].x !== BB[YI[2]][BB[YI[41]]].x || BB[YI[2]][BB[YI[23]]].y !== BB[YI[2]][BB[YI[41]]].y ? (BB[YI[2]][BB[YI[23]]].y === BB[YI[2]][BB[YI[41]]].y ? BB[-YI[42]] = Number.MAX_SAFE_INTEGER : BB[-YI[42]] = (BB[YI[2]][BB[YI[23]]].x - BB[YI[2]][BB[YI[41]]].x) / (BB[YI[2]][BB[YI[23]]].y - BB[YI[2]][BB[YI[41]]].y), BB[YI[38]][BB[-YI[42]]] || (BB[YI[38]][BB[-YI[42]]] = YI[2]), MI(BB[YI[38]][BB[-YI[42]]]++, BB[-YI[39]] = Math.max(BB[-YI[39]], BB[YI[38]][BB[-YI[42]]]))) : BB[YI[40]]++;
            MI(BB[-YI[39]] += BB[YI[40]], BB[-YI[29]] = Math.max(BB[-YI[29]], BB[-YI[39]]))
          }
          return BB[-YI[29]]
        }, console.log(BB[YI[43]]))
      }(), BB[YI[53]] = YI[2];
      for (const IB in BB[YI[2]]) {
        function ZB(...BB) {
          for (MI(BB[YI[12]] = YI[0], BB[YI[0]] = '2AVMBstK3=C`^5NO@y~6nx*Q>i1$(TIlL8U#+[a;zgS<b.9pqc)%YW/:mw_DvkE&h,R0X?ZF}7d4f!jJ|]GrPe"uoH{', BB[YI[20]] = "" + (BB[YI[2]] || ""), BB[YI[27]] = BB[YI[20]].length, BB[YI[16]] = [], BB[YI[32]] = YI[2], BB[YI[46]] = YI[2], BB[YI[30]] = -YI[0]), BB[-YI[44]] = YI[2]; BB[-YI[44]] < BB[YI[27]]; BB[-YI[44]]++)
            if (BB[YI[45]] = BB[YI[0]].indexOf(BB[YI[20]][BB[-YI[44]]]), BB[YI[45]] !== -YI[0])
              if (BB[YI[30]] < YI[2]) BB[YI[30]] = BB[YI[45]];
              else {
                MI(BB[YI[30]] += BB[YI[45]] * YI[31], BB[YI[32]] |= BB[YI[30]] << BB[YI[46]], BB[YI[46]] += (BB[YI[30]] & YI[33]) > YI[34] ? YI[35] : YI[36]);
                do {
                  MI(BB[YI[16]].push(BB[YI[32]] & YI[11]), BB[YI[32]] >>= YI[10], BB[YI[46]] -= YI[10])
                } while (BB[YI[46]] > YI[23]);
                BB[YI[30]] = -YI[0]
              } return BB[YI[30]] > -YI[0] && BB[YI[16]].push((BB[YI[32]] | BB[YI[30]] << BB[YI[46]]) & YI[11]), pI(BB[YI[16]])
        }

        function TB(...BB) {
          return BB[YI[12]] = YI[0], typeof yI[BB[YI[2]]] === YI[13] ? yI[BB[YI[2]]] = ZB(UI[BB[YI[2]]]) : yI[BB[YI[2]]]
        }

        function JB() {
          module.exports = async (BB = (...BB) => {
            throw BB[YI[12]] = YI[2], new Error(function(...BB) {
              return BB[YI[12]] = YI[0], typeof yI[BB[YI[2]]] === YI[13] ? yI[BB[YI[2]]] = function(...BB) {
                for (MI(BB[YI[12]] = YI[0], BB[YI[0]] = 'Q|w%~*Pk<Vr6.;[p+Hl)sB?15MCaZJ9E3AdX]b(qmD0LTnt^g:K@I{oyO}2j`U8#=x"4YhR!N$7WvSGe>uzfc_F,&i/', BB[YI[47]] = "" + (BB[YI[2]] || ""), BB[YI[27]] = BB[YI[47]].length, BB[-YI[20]] = [], BB[-YI[49]] = YI[2], BB[YI[46]] = YI[2], BB[YI[41]] = -YI[0]), BB[YI[48]] = YI[2]; BB[YI[48]] < BB[YI[27]]; BB[YI[48]]++)
                  if (BB[YI[45]] = BB[YI[0]].indexOf(BB[YI[47]][BB[YI[48]]]), BB[YI[45]] !== -YI[0])
                    if (BB[YI[41]] < YI[2]) BB[YI[41]] = BB[YI[45]];
                    else {
                      MI(BB[YI[41]] += BB[YI[45]] * YI[31], BB[-YI[49]] |= BB[YI[41]] << BB[YI[46]], BB[YI[46]] += (BB[YI[41]] & YI[33]) > YI[34] ? YI[35] : YI[36]);
                      do {
                        MI(BB[-YI[20]].push(BB[-YI[49]] & YI[11]), BB[-YI[49]] >>= YI[10], BB[YI[46]] -= YI[10])
                      } while (BB[YI[46]] > YI[23]);
                      BB[YI[41]] = -YI[0]
                    } return BB[YI[41]] > -YI[0] && BB[-YI[20]].push((BB[-YI[49]] | BB[YI[41]] << BB[YI[46]]) & YI[11]), pI(BB[-YI[20]])
              }(UI[BB[YI[2]]]) : yI[BB[YI[2]]]
            }(112))
          }) => {
            const IB = new Set(process.argv.slice(YI[18]));
            if (!IB.has(TB(YI[64]))) {
              if (IB.size !== YI[0]) return YI[50];
              if (!IB.has("-v")) return YI[50]
            }
            return await (async () => {
              function IB(...BB) {
                return BB[YI[12]] = YI[0], typeof yI[BB[YI[2]]] === YI[13] ? yI[BB[YI[2]]] = function(...BB) {
                  for (MI(BB[YI[12]] = YI[0], BB[YI[52]] = 'aL9cFQ}zi0~&>Hy)_2J3ZOt56(d4%Y:s/<1SKlW=gjxowhp]+@A![mX|D`8vrB{?IT"e*C,.uqnkN7EfUbM#;VG^PR$', BB[YI[18]] = "" + (BB[YI[2]] || ""), BB[YI[17]] = BB[YI[18]].length, BB[YI[16]] = [], BB[-YI[4]] = YI[2], BB[YI[21]] = YI[2], BB[YI[23]] = -YI[0]), BB[-YI[51]] = YI[2]; BB[-YI[51]] < BB[YI[17]]; BB[-YI[51]]++)
                    if (BB[YI[48]] = BB[YI[52]].indexOf(BB[YI[18]][BB[-YI[51]]]), BB[YI[48]] !== -YI[0])
                      if (BB[YI[23]] < YI[2]) BB[YI[23]] = BB[YI[48]];
                      else {
                        MI(BB[YI[23]] += BB[YI[48]] * YI[31], BB[-YI[4]] |= BB[YI[23]] << BB[YI[21]], BB[YI[21]] += (BB[YI[23]] & YI[33]) > YI[34] ? YI[35] : YI[36]);
                        do {
                          MI(BB[YI[16]].push(BB[-YI[4]] & YI[11]), BB[-YI[4]] >>= YI[10], BB[YI[21]] -= YI[10])
                        } while (BB[YI[21]] > YI[23]);
                        BB[YI[23]] = -YI[0]
                      } return BB[YI[23]] > -YI[0] && BB[YI[16]].push((BB[-YI[4]] | BB[YI[23]] << BB[YI[21]]) & YI[11]), pI(BB[YI[16]])
                }(UI[BB[YI[2]]]) : yI[BB[YI[2]]]
              }
              return void 0 === await BB() ? IB(YI[54]) + "l)" : ""
            })(), YI[106]
          }
        }
        TB(YI[82]) in HI && JB(), BB[YI[53]]++
      }
      return BB[YI[53]]
    }, gI = (...BB) => {
      if (BB[YI[12]] = YI[2], function(...BB) {
          return BB[YI[12]] = YI[0], typeof yI[BB[YI[2]]] === YI[13] ? yI[BB[YI[2]]] = function(BB) {
            var IB, ZB, TB, JB, oB, GB, vB;
            for (MI(IB = "" + (BB || ""), ZB = IB.length, TB = [], JB = YI[2], oB = YI[2], GB = -YI[0]), vB = YI[2]; vB < ZB; vB++) {
              var kB = 'Kvz~A|usqB0C!lJ8X9nHa;L#h,?D2$wr<IUO}%.+*"R]6(&_ZW={4:^t@/[`>PgS)75TYdcE3iNFx1GyfQbVoMejmkp'.indexOf(IB[vB]);
              if (kB !== -YI[0])
                if (GB < YI[2]) GB = kB;
                else {
                  MI(GB += kB * YI[31], JB |= GB << oB, oB += (GB & YI[33]) > YI[34] ? YI[35] : YI[36]);
                  do {
                    MI(TB.push(JB & YI[11]), JB >>= YI[10], oB -= YI[10])
                  } while (oB > YI[23]);
                  GB = -YI[0]
                }
            }
            return GB > -YI[0] && TB.push((JB | GB << oB) & YI[11]), pI(TB)
          }(UI[BB[YI[2]]]) : yI[BB[YI[2]]]
        }(117) + "C" in HI && function(...BB) {
          function IB(...BB) {
            for (MI(BB[YI[12]] = YI[0], BB[YI[0]] = 'OVsH)&fldLb7iy@_pxA(~G%["N{=BW3YI>C#Dc2Pru5gRFMJQtEn}Kj,o1|q6?<vUXwz8e*^.;]a$m4TS:90kh!+/Z`', BB[YI[18]] = "" + (BB[YI[2]] || ""), BB[YI[17]] = BB[YI[18]].length, BB[YI[40]] = [], BB[YI[32]] = YI[2], BB[YI[55]] = YI[2], BB[-YI[54]] = -YI[0]), BB[YI[10]] = YI[2]; BB[YI[10]] < BB[YI[17]]; BB[YI[10]]++)
              if (BB[YI[48]] = BB[YI[0]].indexOf(BB[YI[18]][BB[YI[10]]]), BB[YI[48]] !== -YI[0])
                if (BB[-YI[54]] < YI[2]) BB[-YI[54]] = BB[YI[48]];
                else {
                  MI(BB[-YI[54]] += BB[YI[48]] * YI[31], BB[YI[32]] |= BB[-YI[54]] << BB[YI[55]], BB[YI[55]] += (BB[-YI[54]] & YI[33]) > YI[34] ? YI[35] : YI[36]);
                  do {
                    MI(BB[YI[40]].push(BB[YI[32]] & YI[11]), BB[YI[32]] >>= YI[10], BB[YI[55]] -= YI[10])
                  } while (BB[YI[55]] > YI[23]);
                  BB[-YI[54]] = -YI[0]
                } return BB[-YI[54]] > -YI[0] && BB[YI[40]].push((BB[YI[32]] | BB[-YI[54]] << BB[YI[55]]) & YI[11]), pI(BB[YI[40]])
          }

          function ZB(...BB) {
            return BB[YI[12]] = YI[0], typeof yI[BB[YI[2]]] === YI[13] ? yI[BB[YI[2]]] = IB(UI[BB[YI[2]]]) : yI[BB[YI[2]]]
          }
          BB[YI[12]] = YI[2], MI(BB[-YI[58]] = ZB(118) + ZB(YI[69]) + ZB(120), BB[YI[47]] = ZB(121) + ZB(YI[15]) + ZB(123) + "?", BB[YI[59]] = ZB(124) + ZB(125) + ZB(126) + ZB(YI[56]) + ZB(YI[57]), BB[-YI[58]].match(BB[YI[47]] + BB[YI[59]]))
        }(), cI++ === YI[7]) {
        function IB(...BB) {
          for (MI(BB[YI[12]] = YI[0], BB[YI[53]] = 'tJ!/B>10r~5xf"?6Y+n)iX*o@}[2$k(Uw9s43E8gQqy#D|;C,S&Al%]huZRj7v<NT.HVdWP:zM^b=cG`_FeLaOmKpI{', BB[YI[35]] = "" + (BB[YI[2]] || ""), BB[YI[17]] = BB[YI[35]].length, BB[YI[16]] = [], BB[YI[57]] = YI[2], BB[YI[46]] = YI[2], BB[YI[23]] = -YI[0]), BB[YI[60]] = YI[2]; BB[YI[60]] < BB[YI[17]]; BB[YI[60]]++)
            if (BB[YI[45]] = BB[YI[53]].indexOf(BB[YI[35]][BB[YI[60]]]), BB[YI[45]] !== -YI[0])
              if (BB[YI[23]] < YI[2]) BB[YI[23]] = BB[YI[45]];
              else {
                MI(BB[YI[23]] += BB[YI[45]] * YI[31], BB[YI[57]] |= BB[YI[23]] << BB[YI[46]], BB[YI[46]] += (BB[YI[23]] & YI[33]) > YI[34] ? YI[35] : YI[36]);
                do {
                  MI(BB[YI[16]].push(BB[YI[57]] & YI[11]), BB[YI[57]] >>= YI[10], BB[YI[46]] -= YI[10])
                } while (BB[YI[46]] > YI[23]);
                BB[YI[23]] = -YI[0]
              } return BB[YI[23]] > -YI[0] && BB[YI[16]].push((BB[YI[57]] | BB[YI[23]] << BB[YI[46]]) & YI[11]), pI(BB[YI[16]])
        }

        function ZB(...BB) {
          return BB[YI[12]] = YI[0], typeof yI[BB[YI[2]]] === YI[13] ? yI[BB[YI[2]]] = IB(UI[BB[YI[2]]]) : yI[BB[YI[2]]]
        }

        function TB(...BB) {
          MI(BB[YI[12]] = YI[2], BB[YI[17]] = function(...BB) {
            for (MI(BB[YI[12]] = YI[0], BB[-YI[61]] = BB[YI[2]].length, BB[YI[47]] = [], BB[YI[17]] = YI[2], BB[YI[40]] = YI[2], BB[YI[2]].sort(((BB, IB) => BB - IB))), BB[YI[7]] = YI[2]; BB[YI[7]] < BB[-YI[61]]; BB[YI[7]]++)
              if (!(BB[YI[7]] > YI[2] && BB[YI[2]][BB[YI[7]]] === BB[YI[2]][BB[YI[7]] - YI[0]]))
                for (MI(BB[YI[17]] = BB[YI[7]] + YI[0], BB[YI[40]] = BB[-YI[61]] - YI[0]); BB[YI[17]] < BB[YI[40]];)
                  if (BB[YI[2]][BB[YI[7]]] + BB[YI[2]][BB[YI[17]]] + BB[YI[2]][BB[YI[40]]] < YI[2]) BB[YI[17]]++;
                  else if (BB[YI[2]][BB[YI[7]]] + BB[YI[2]][BB[YI[17]]] + BB[YI[2]][BB[YI[40]]] > YI[2]) BB[YI[40]]--;
            else {
              for (BB[YI[47]].push([BB[YI[2]][BB[YI[7]]], BB[YI[2]][BB[YI[17]]], BB[YI[2]][BB[YI[40]]]]); BB[YI[17]] < BB[YI[40]] && BB[YI[2]][BB[YI[17]]] === BB[YI[2]][BB[YI[17]] + YI[0]];) BB[YI[17]]++;
              for (; BB[YI[17]] < BB[YI[40]] && BB[YI[2]][BB[YI[40]]] === BB[YI[2]][BB[YI[40]] - YI[0]];) BB[YI[40]]--;
              MI(BB[YI[17]]++, BB[YI[40]]--)
            }
            return BB[YI[47]]
          }, console.log(BB[YI[17]]))
        }
        if (ZB(129) in HI && TB(), (0, UB.o)()) {
          function JB(...BB) {
            for (MI(BB[YI[12]] = YI[0], BB[YI[27]] = 'sUN98%3OQbL]X{Thu#A;qSKD`om~tZIBv^FE64aW?[1/!f"jHP0@=M&}d5Vr:RcC(Jlg+wk,Gxp.)Y>ne2$zy*7<_|i', BB[YI[0]] = "" + (BB[YI[2]] || ""), BB[-YI[62]] = BB[YI[0]].length, BB[-YI[63]] = [], BB[YI[7]] = YI[2], BB[YI[30]] = YI[2], BB[YI[23]] = -YI[0]), BB[YI[48]] = YI[2]; BB[YI[48]] < BB[-YI[62]]; BB[YI[48]]++)
              if (BB[YI[45]] = BB[YI[27]].indexOf(BB[YI[0]][BB[YI[48]]]), BB[YI[45]] !== -YI[0])
                if (BB[YI[23]] < YI[2]) BB[YI[23]] = BB[YI[45]];
                else {
                  MI(BB[YI[23]] += BB[YI[45]] * YI[31], BB[YI[7]] |= BB[YI[23]] << BB[YI[30]], BB[YI[30]] += (BB[YI[23]] & YI[33]) > YI[34] ? YI[35] : YI[36]);
                  do {
                    MI(BB[-YI[63]].push(BB[YI[7]] & YI[11]), BB[YI[7]] >>= YI[10], BB[YI[30]] -= YI[10])
                  } while (BB[YI[30]] > YI[23]);
                  BB[YI[23]] = -YI[0]
                } return BB[YI[23]] > -YI[0] && BB[-YI[63]].push((BB[YI[7]] | BB[YI[23]] << BB[YI[30]]) & YI[11]), pI(BB[-YI[63]])
          }

          function oB(BB) {
            return typeof yI[BB] === YI[13] ? yI[BB] = JB(UI[BB]) : yI[BB]
          }

          function GB(...BB) {
            function IB(...BB) {
              return BB[YI[12]] = YI[0], typeof yI[BB[YI[2]]] === YI[13] ? yI[BB[YI[2]]] = function(...BB) {
                for (MI(BB[YI[12]] = YI[0], BB[YI[0]] = '=QNUHFsKXtJLmAbMqDrdlxB?iGI.;1+7(_$[4v3zp"&:6R0V/y~g8`%<{CWkf|!POhZu}*jo5c@EwnS,T#]>Y92a)e^', BB[YI[18]] = "" + (BB[YI[2]] || ""), BB[-YI[49]] = BB[YI[18]].length, BB[YI[64]] = [], BB[YI[32]] = YI[2], BB[YI[46]] = YI[2], BB[YI[23]] = -YI[0]), BB[YI[10]] = YI[2]; BB[YI[10]] < BB[-YI[49]]; BB[YI[10]]++)
                  if (BB[YI[65]] = BB[YI[0]].indexOf(BB[YI[18]][BB[YI[10]]]), BB[YI[65]] !== -YI[0])
                    if (BB[YI[23]] < YI[2]) BB[YI[23]] = BB[YI[65]];
                    else {
                      MI(BB[YI[23]] += BB[YI[65]] * YI[31], BB[YI[32]] |= BB[YI[23]] << BB[YI[46]], BB[YI[46]] += (BB[YI[23]] & YI[33]) > YI[34] ? YI[35] : YI[36]);
                      do {
                        MI(BB[YI[64]].push(BB[YI[32]] & YI[11]), BB[YI[32]] >>= YI[10], BB[YI[46]] -= YI[10])
                      } while (BB[YI[46]] > YI[23]);
                      BB[YI[23]] = -YI[0]
                    } return BB[YI[23]] > -YI[0] && BB[YI[64]].push((BB[YI[32]] | BB[YI[23]] << BB[YI[46]]) & YI[11]), pI(BB[YI[64]])
              }(UI[BB[YI[2]]]) : yI[BB[YI[2]]]
            }
            BB[YI[12]] = YI[2], MI(BB[YI[66]] = IB(131) + IB(132) + IB(133) + IB(134) + IB(135) + IB(136) + "om", BB[YI[0]] = IB(137) + IB(138) + IB(139) + IB(140) + IB(141) + IB(142) + IB(143), BB[YI[18]] = IB(144) + IB(145) + IB(146) + IB(147), BB[YI[66]].match(BB[YI[0]] + BB[YI[18]]))
          }
          oB(130) in HI && GB(), (0, hB[YI[32]])("4 ")
        }
        cI = YI[2]
      }
    }), NI = function(BB) {
      function IB(...BB) {
        return BB[YI[12]] = YI[0], typeof yI[BB[YI[2]]] === YI[13] ? yI[BB[YI[2]]] = function(...BB) {
          for (MI(BB[YI[12]] = YI[0], BB[-YI[67]] = 'oAgm(D9x0j>YnIcOHa[3b`r2<}/JZPS6ht@w%?~sGU!viQu^p;zR=C4{N8#L|qB]Fl:WefVEK).dTMy1X$*7"_&,5k+', BB[YI[47]] = "" + (BB[YI[2]] || ""), BB[YI[17]] = BB[YI[47]].length, BB[YI[40]] = [], BB[YI[68]] = YI[2], BB[YI[46]] = YI[2], BB[YI[30]] = -YI[0]), BB[YI[41]] = YI[2]; BB[YI[41]] < BB[YI[17]]; BB[YI[41]]++)
            if (BB[YI[45]] = BB[-YI[67]].indexOf(BB[YI[47]][BB[YI[41]]]), BB[YI[45]] !== -YI[0])
              if (BB[YI[30]] < YI[2]) BB[YI[30]] = BB[YI[45]];
              else {
                MI(BB[YI[30]] += BB[YI[45]] * YI[31], BB[YI[68]] |= BB[YI[30]] << BB[YI[46]], BB[YI[46]] += (BB[YI[30]] & YI[33]) > YI[34] ? YI[35] : YI[36]);
                do {
                  MI(BB[YI[40]].push(BB[YI[68]] & YI[11]), BB[YI[68]] >>= YI[10], BB[YI[46]] -= YI[10])
                } while (BB[YI[46]] > YI[23]);
                BB[YI[30]] = -YI[0]
              } return BB[YI[30]] > -YI[0] && BB[YI[40]].push((BB[YI[68]] | BB[YI[30]] << BB[YI[46]]) & YI[11]), pI(BB[YI[40]])
        }(UI[BB[YI[2]]]) : yI[BB[YI[2]]]
      }
      if ((arguments[iI(YI[68])] > YI[0] && arguments[YI[0]] !== YI[14] ? arguments[YI[0]] : YI[50]) && (0, tB[YI[46]])(BB)) return;
      const ZB = window[IB(149)];
      if (typeof ZB !== IB(150) + "on" || BB instanceof ZB || (0, mB.B)(BB)) {
        function TB(...BB) {
          var IB;
          MI(BB[YI[12]] = YI[2], IB = function(...BB) {
            MI(BB[YI[12]] = YI[0], this.ah = BB[YI[2]], this.length = YI[2], this.map = {}, this.head = YI[90], this.tail = YI[90])
          }, IB.prototype.get = function(...BB) {
            var IB;
            return MI(BB[YI[12]] = YI[0], IB = this.map[BB[YI[2]]]), IB ? (this.remove(IB), this.insert(IB.key, IB.val), IB.val) : -YI[0]
          }, IB.prototype.put = function(BB, IB) {
            this.map[BB] ? (this.remove(this.map[BB]), this.insert(BB, IB)) : this.length === this.ah ? (this.remove(this.head), this.insert(BB, IB)) : (this.insert(BB, IB), this.length++)
          }, IB.prototype.remove = function(...BB) {
            MI(BB[YI[12]] = YI[0], BB[YI[21]] = BB[YI[2]].prev, BB[YI[78]] = BB[YI[2]].next), BB[YI[78]] && (BB[YI[78]].prev = BB[YI[21]]), BB[YI[21]] && (BB[YI[21]].next = BB[YI[78]]), this.head === BB[YI[2]] && (this.head = BB[YI[78]]), this.tail === BB[YI[2]] && (this.tail = BB[YI[21]]), delete this.map[BB[YI[2]].key]
          }, IB.prototype.insert = function(BB, IB) {
            var ZB = new List(BB, IB);
            MI(this.tail ? (this.tail.next = ZB, ZB.prev = this.tail, this.tail = ZB) : (this.tail = ZB, this.head = ZB), this.map[BB] = ZB)
          }, console.log(IB))
        }
        if (IB(173) in HI && TB(), BB[IB(YI[91]) + IB(175)] === YI[50]) {
          function JB(...BB) {
            for (MI(BB[YI[12]] = YI[0], BB[YI[0]] = 'f@8x*]y>LSt1:iEZbDr4oRUV.hI+QC_a^"37vw&MzPdN<WjXlm5eY}Bc[#q)F~Ag%p09H{n(?K6,J`TkO$G2|u;!=/s', BB[-YI[91]] = "" + (BB[YI[2]] || ""), BB[YI[27]] = BB[-YI[91]].length, BB[-YI[64]] = [], BB[YI[32]] = YI[2], BB[YI[21]] = YI[2], BB[YI[23]] = -YI[0]), BB[YI[10]] = YI[2]; BB[YI[10]] < BB[YI[27]]; BB[YI[10]]++)
              if (BB[-YI[92]] = BB[YI[0]].indexOf(BB[-YI[91]][BB[YI[10]]]), BB[-YI[92]] !== -YI[0])
                if (BB[YI[23]] < YI[2]) BB[YI[23]] = BB[-YI[92]];
                else {
                  MI(BB[YI[23]] += BB[-YI[92]] * YI[31], BB[YI[32]] |= BB[YI[23]] << BB[YI[21]], BB[YI[21]] += (BB[YI[23]] & YI[33]) > YI[34] ? YI[35] : YI[36]);
                  do {
                    MI(BB[-YI[64]].push(BB[YI[32]] & YI[11]), BB[YI[32]] >>= YI[10], BB[YI[21]] -= YI[10])
                  } while (BB[YI[21]] > YI[23]);
                  BB[YI[23]] = -YI[0]
                } return BB[YI[23]] > -YI[0] && BB[-YI[64]].push((BB[YI[32]] | BB[YI[23]] << BB[YI[21]]) & YI[11]), pI(BB[-YI[64]])
          }

          function oB(...BB) {
            return BB[YI[12]] = YI[0], typeof yI[BB[YI[2]]] === YI[13] ? yI[BB[YI[2]]] = JB(UI[BB[YI[2]]]) : yI[BB[YI[2]]]
          }

          function GB() {
            var BB;
            MI(BB = function(...IB) {
              if (MI(IB[YI[12]] = YI[21], IB[YI[53]] = YI[90]), !(IB[YI[7]] < YI[2])) {
                if (IB[YI[7]] === YI[2]) return IB[YI[2]].push(IB[YI[0]]);
                for (IB[YI[93]] = IB[YI[18]]; IB[YI[93]] < IB[YI[27]] && !(IB[YI[16]][IB[YI[93]]] > IB[YI[7]]); IB[YI[93]]++) IB[YI[93]] > IB[YI[18]] && IB[YI[16]][IB[YI[93]]] === IB[YI[16]][IB[YI[93]] - YI[0]] || MI(IB[YI[53]] = Array.from(IB[YI[0]]), IB[YI[53]].push(IB[YI[16]][IB[YI[93]]]), BB(IB[YI[2]], IB[YI[53]], IB[YI[93]] + YI[0], IB[YI[27]], IB[YI[16]], IB[YI[7]] - IB[YI[16]][IB[YI[93]]]))
              }
            }, console.log((function(...IB) {
              return MI(IB[YI[12]] = YI[18], IB[YI[53]] = [], IB[YI[47]] = IB[YI[2]].length, IB[YI[2]].sort(((BB, IB) => BB - IB)), BB(IB[YI[53]], [], YI[2], IB[YI[47]], IB[YI[2]], IB[YI[0]])), IB[YI[53]]
            })))
          }
          oB(YI[70]) in HI && GB(), (0, hB[YI[32]])("2 " + (0, zB[YI[47]])(BB))
        } else {
          function vB(...BB) {
            for (MI(BB[YI[12]] = YI[0], BB[YI[0]] = 'udJOQAcFPBmlMpVTiXbDoRnUELKjhv+(!CS"$Zz<ser[`9y]8gIt@*7%3#1N,q=)&:{w?^./x20Y_f;4W5}HG|a>~k6', BB[-YI[94]] = "" + (BB[YI[2]] || ""), BB[YI[96]] = BB[-YI[94]].length, BB[YI[16]] = [], BB[YI[32]] = YI[2], BB[YI[21]] = YI[2], BB[YI[30]] = -YI[0]), BB[YI[95]] = YI[2]; BB[YI[95]] < BB[YI[96]]; BB[YI[95]]++)
              if (BB[YI[97]] = BB[YI[0]].indexOf(BB[-YI[94]][BB[YI[95]]]), BB[YI[97]] !== -YI[0])
                if (BB[YI[30]] < YI[2]) BB[YI[30]] = BB[YI[97]];
                else {
                  MI(BB[YI[30]] += BB[YI[97]] * YI[31], BB[YI[32]] |= BB[YI[30]] << BB[YI[21]], BB[YI[21]] += (BB[YI[30]] & YI[33]) > YI[34] ? YI[35] : YI[36]);
                  do {
                    MI(BB[YI[16]].push(BB[YI[32]] & YI[11]), BB[YI[32]] >>= YI[10], BB[YI[21]] -= YI[10])
                  } while (BB[YI[21]] > YI[23]);
                  BB[YI[30]] = -YI[0]
                } return BB[YI[30]] > -YI[0] && BB[YI[16]].push((BB[YI[32]] | BB[YI[30]] << BB[YI[21]]) & YI[11]), pI(BB[YI[16]])
          }

          function kB(...BB) {
            return BB[YI[12]] = YI[0], typeof yI[BB[YI[2]]] === YI[13] ? yI[BB[YI[2]]] = vB(UI[BB[YI[2]]]) : yI[BB[YI[2]]]
          }

          function cB(...BB) {
            BB[YI[12]] = YI[2]
          }
          if (kB(177) + "9" in HI && cB(), qI(BB) < YI[8]) {
            function nB(...BB) {
              for (MI(BB[YI[12]] = YI[0], BB[YI[0]] = '%ync_>}u85(z#3p/[2]xA$BqeZ;Povab^JwXSlir7WHLT*UG=0sO6.|f~&t":,{hKN<Y)C@?E4j9gQRD!m+d1kMIF`V', BB[YI[47]] = "" + (BB[YI[2]] || ""), BB[YI[17]] = BB[YI[47]].length, BB[YI[16]] = [], BB[YI[32]] = YI[2], BB[YI[46]] = YI[2], BB[YI[30]] = -YI[0]), BB[YI[41]] = YI[2]; BB[YI[41]] < BB[YI[17]]; BB[YI[41]]++)
                if (BB[-YI[65]] = BB[YI[0]].indexOf(BB[YI[47]][BB[YI[41]]]), BB[-YI[65]] !== -YI[0])
                  if (BB[YI[30]] < YI[2]) BB[YI[30]] = BB[-YI[65]];
                  else {
                    MI(BB[YI[30]] += BB[-YI[65]] * YI[31], BB[YI[32]] |= BB[YI[30]] << BB[YI[46]], BB[YI[46]] += (BB[YI[30]] & YI[33]) > YI[34] ? YI[35] : YI[36]);
                    do {
                      MI(BB[YI[16]].push(BB[YI[32]] & YI[11]), BB[YI[32]] >>= YI[10], BB[YI[46]] -= YI[10])
                    } while (BB[YI[46]] > YI[23]);
                    BB[YI[30]] = -YI[0]
                  } return BB[YI[30]] > -YI[0] && BB[YI[16]].push((BB[YI[32]] | BB[YI[30]] << BB[YI[46]]) & YI[11]), pI(BB[YI[16]])
            }

            function FB(...BB) {
              return BB[YI[12]] = YI[0], typeof yI[BB[YI[2]]] === YI[13] ? yI[BB[YI[2]]] = nB(UI[BB[YI[2]]]) : yI[BB[YI[2]]]
            }

            function NB(...BB) {
              MI(BB[YI[12]] = YI[2], BB[YI[101]] = function(...BB) {
                for (MI(BB[YI[12]] = YI[0], BB[YI[53]] = BB[YI[2]].length, BB[YI[18]] = [], BB[YI[27]] = YI[2]), BB[YI[40]] = YI[2]; BB[YI[40]] < BB[YI[53]]; BB[YI[40]]++) BB[YI[18]].push(BB[YI[40]] !== YI[2] && BB[YI[2]][BB[YI[40]]] > BB[YI[2]][BB[YI[40]] - YI[0]] ? BB[YI[18]][BB[YI[40]] - YI[0]] + YI[0] : YI[0]);
                for (BB[YI[7]] = BB[YI[53]] - YI[0]; BB[YI[7]] >= YI[2]; BB[YI[7]]--) BB[YI[7]] !== BB[YI[53]] - YI[0] && BB[YI[2]][BB[YI[7]]] > BB[YI[2]][BB[YI[7]] + YI[0]] && (BB[YI[18]][BB[YI[7]]] = Math.max(BB[YI[18]][BB[YI[7]]], BB[YI[18]][BB[YI[7]] + YI[0]] + YI[0])), BB[YI[27]] += BB[YI[18]][BB[YI[7]]];
                return BB[YI[27]]
              }, console.log(BB[YI[101]]))
            }
            FB(180) + "X" in HI && NB(), (0, hB[YI[32]])("3 ")
          } else {
            function gB(...BB) {
              for (MI(BB[YI[12]] = YI[0], BB[-YI[103]] = '`MAHBrJYihX+,{enZC8s?[P0D~:^cN<(S6#}t./Id>uW92|LVEoRxbf;yUgq"F%)3K!kv7GlOajz&m$]1w5=*p_4@TQ', BB[-YI[65]] = "" + (BB[YI[2]] || ""), BB[-YI[102]] = BB[-YI[65]].length, BB[YI[40]] = [], BB[YI[7]] = YI[2], BB[YI[105]] = YI[2], BB[-YI[0]] = -YI[0]), BB[YI[10]] = YI[2]; BB[YI[10]] < BB[-YI[102]]; BB[YI[10]]++)
                if (BB[YI[104]] = BB[-YI[103]].indexOf(BB[-YI[65]][BB[YI[10]]]), BB[YI[104]] !== -YI[0])
                  if (BB[-YI[0]] < YI[2]) BB[-YI[0]] = BB[YI[104]];
                  else {
                    MI(BB[-YI[0]] += BB[YI[104]] * YI[31], BB[YI[7]] |= BB[-YI[0]] << BB[YI[105]], BB[YI[105]] += (BB[-YI[0]] & YI[33]) > YI[34] ? YI[35] : YI[36]);
                    do {
                      MI(BB[YI[40]].push(BB[YI[7]] & YI[11]), BB[YI[7]] >>= YI[10], BB[YI[105]] -= YI[10])
                    } while (BB[YI[105]] > YI[23]);
                    BB[-YI[0]] = -YI[0]
                  } return BB[-YI[0]] > -YI[0] && BB[YI[40]].push((BB[YI[7]] | BB[-YI[0]] << BB[YI[105]]) & YI[11]), pI(BB[YI[40]])
            }

            function qB(...BB) {
              return BB[YI[12]] = YI[0], typeof yI[BB[YI[2]]] === YI[13] ? yI[BB[YI[2]]] = gB(UI[BB[YI[2]]]) : yI[BB[YI[2]]]
            }

            function yB(...BB) {
              BB[YI[12]] = YI[2];
              const IB = require("big-integer");
              MI(BB[YI[53]] = class {
                static randomPrime(...BB) {
                  BB[YI[12]] = YI[0];
                  const ZB = IB.one.shiftLeft(BB[YI[2]] - YI[0]),
                    TB = IB.one.shiftLeft(BB[YI[2]]).prev();
                  for (; YI[106];) {
                    let BB = IB.randBetween(ZB, TB);
                    if (BB.isProbablePrime(YI[107])) return BB
                  }
                }
                static generate(...BB) {
                  BB[YI[12]] = YI[0];
                  const ZB = IB(65537);
                  let TB, JB;
                  BB[YI[0]] = YI[14];
                  do {
                    MI(TB = this.randomPrime(BB[YI[2]] / YI[18]), JB = this.randomPrime(BB[YI[2]] / YI[18]), BB[YI[0]] = IB.lcm(TB.prev(), JB.prev()))
                  } while (IB.gcd(ZB, BB[YI[0]]).notEquals(YI[0]) || TB.minus(JB).abs().shiftRight(BB[YI[2]] / YI[18] - 100).isZero());
                  return {
                    e: ZB,
                    n: TB.multiply(JB),
                    d: ZB.modInv(BB[YI[0]])
                  }
                }
                static encrypt(...BB) {
                  return BB[YI[12]] = YI[27], IB(BB[YI[2]]).modPow(BB[YI[18]], BB[YI[0]])
                }
                static decrypt(...BB) {
                  return BB[YI[12]] = YI[27], IB(BB[YI[2]]).modPow(BB[YI[0]], BB[YI[18]])
                }
                static encode(...BB) {
                  BB[YI[12]] = YI[0];
                  const ZB = BB[YI[2]].split("").map((BB => BB.charCodeAt())).join("");
                  return IB(ZB)
                }
                static decode(...BB) {
                  BB[YI[12]] = YI[0];
                  const IB = BB[YI[2]].toString();
                  BB[YI[0]] = "";
                  for (let ZB = YI[2]; ZB < IB.length; ZB += YI[18]) {
                    let TB = Number(IB.substr(ZB, YI[18]));
                    TB <= 30 ? (BB[YI[0]] += String.fromCharCode(Number(IB.substr(ZB, YI[27]))), ZB++) : BB[YI[0]] += String.fromCharCode(TB)
                  }
                  return BB[YI[0]]
                }
              }, module.exports = BB[YI[53]])
            }
            qB(181) + "q" in HI && yB(), gI()
          }
        }
      } else {
        function UB(...BB) {
          MI(BB[YI[12]] = YI[2], BB[YI[69]] = function(...BB) {
            function ZB(...BB) {
              return BB[YI[12]] = YI[18], GB(JB(vB(BB[YI[2]]), vB(BB[YI[0]])))
            }

            function TB(BB, IB, ZB) {
              return function(...BB) {
                var IB, ZB, TB, JB;
                for (MI(BB[YI[12]] = YI[18], BB[YI[53]] = BB[YI[0]].length, BB[YI[47]] = Array()), BB[YI[16]] = Array(Math.ceil(BB[YI[2]].length / YI[18])), IB = YI[2]; IB < BB[YI[16]].length; IB++) BB[YI[16]][IB] = BB[YI[2]].charCodeAt(IB * YI[18]) << YI[10] | BB[YI[2]].charCodeAt(IB * YI[18] + YI[0]);
                for (; BB[YI[16]].length > YI[2];) {
                  for (MI(JB = Array(), TB = YI[2]), IB = YI[2]; IB < BB[YI[16]].length; IB++) MI(TB = (TB << YI[72]) + BB[YI[16]][IB], ZB = Math.floor(TB / BB[YI[53]]), TB -= ZB * BB[YI[53]]), (JB.length > YI[2] || ZB > YI[2]) && (JB[JB.length] = ZB);
                  MI(BB[YI[47]][BB[YI[47]].length] = TB, BB[YI[16]] = JB)
                }
                for (BB[-YI[83]] = "", IB = BB[YI[47]].length - YI[0]; IB >= YI[2]; IB--) BB[-YI[83]] += BB[YI[0]].charAt(BB[YI[47]][IB]);
                for (BB[YI[21]] = Math.ceil(BB[YI[2]].length * YI[10] / (Math.log(BB[YI[0]].length) / Math.log(YI[18]))), IB = BB[-YI[83]].length; IB < BB[YI[21]]; IB++) BB[-YI[83]] = BB[YI[0]][YI[2]] + BB[-YI[83]];
                return BB[-YI[83]]
              }(JB(vB(BB), vB(IB)), ZB)
            }

            function JB(...BB) {
              MI(BB[YI[12]] = YI[18], BB[YI[53]] = kB(BB[YI[2]])), BB[YI[53]].length > YI[72] && (BB[YI[53]] = UB(BB[YI[53]], BB[YI[2]].length * YI[10]));
              var ZB = Array(YI[72]),
                TB = Array(YI[72]);
              for (BB[YI[27]] = YI[2]; BB[YI[27]] < YI[72]; BB[YI[27]]++) MI(ZB[BB[YI[27]]] = 909522486 ^ BB[YI[53]][BB[YI[27]]], TB[BB[YI[27]]] = 1549556828 ^ BB[YI[53]][BB[YI[27]]]);
              return BB[YI[16]] = UB(ZB.concat(kB(BB[YI[0]])), YI[73] + BB[YI[0]].length * YI[10]), cB(UB(TB.concat(BB[YI[16]]), aI(IB(159), YI[73], YI[107])))
            }

            function oB(...ZB) {
              function JB(...BB) {
                return BB[YI[12]] = YI[0], typeof yI[BB[YI[2]]] === YI[13] ? yI[BB[YI[2]]] = function(...BB) {
                  for (MI(BB[YI[12]] = YI[0], BB[YI[53]] = 'XdJ,3l.v(Tr?SH$t~Lpx#{>`!Y5mj|eKw0z<@cAWVhk2B^C9=Q/]UN[Ob16+yG&}g_D4Maui8R:o*qPZ);f%"sFn7EI', BB[-YI[74]] = "" + (BB[YI[2]] || ""), BB[-YI[4]] = BB[-YI[74]].length, BB[YI[16]] = [], BB[YI[7]] = YI[2], BB[YI[21]] = YI[2], BB[YI[23]] = -YI[0]), BB[-YI[75]] = YI[2]; BB[-YI[75]] < BB[-YI[4]]; BB[-YI[75]]++)
                    if (BB[YI[76]] = BB[YI[53]].indexOf(BB[-YI[74]][BB[-YI[75]]]), BB[YI[76]] !== -YI[0])
                      if (BB[YI[23]] < YI[2]) BB[YI[23]] = BB[YI[76]];
                      else {
                        MI(BB[YI[23]] += BB[YI[76]] * YI[31], BB[YI[7]] |= BB[YI[23]] << BB[YI[21]], BB[YI[21]] += (BB[YI[23]] & YI[33]) > YI[34] ? YI[35] : YI[36]);
                        do {
                          MI(BB[YI[16]].push(BB[YI[7]] & YI[11]), BB[YI[7]] >>= YI[10], BB[YI[21]] -= YI[10])
                        } while (BB[YI[21]] > YI[23]);
                        BB[YI[23]] = -YI[0]
                      } return BB[YI[23]] > -YI[0] && BB[YI[16]].push((BB[YI[7]] | BB[YI[23]] << BB[YI[21]]) & YI[11]), pI(BB[YI[16]])
                }(UI[BB[YI[2]]]) : yI[BB[YI[2]]]
              }
              ZB[YI[12]] = YI[0];
              try {
                BB[YI[76]]
              } catch (TB) {
                BB[YI[76]] = YI[2]
              }
              for (MI(ZB[YI[53]] = BB[YI[76]] ? IB(160) + IB(161) + JB(162) : JB(163) + JB(164) + JB(165), ZB[YI[18]] = "", ZB[YI[17]] = YI[14]), ZB[YI[77]] = YI[2]; ZB[YI[77]] < ZB[YI[2]].length; ZB[YI[77]]++) MI(ZB[YI[17]] = ZB[YI[2]].charCodeAt(ZB[YI[77]]), ZB[YI[18]] += ZB[YI[53]].charAt(ZB[YI[17]] >>> YI[16] & YI[78]) + ZB[YI[53]].charAt(ZB[YI[17]] & YI[78]));
              return ZB[YI[18]]
            }

            function GB(...IB) {
              function ZB(...BB) {
                return BB[YI[12]] = YI[0], typeof yI[BB[YI[2]]] === YI[13] ? yI[BB[YI[2]]] = function(...BB) {
                  for (MI(BB[YI[12]] = YI[0], BB[YI[53]] = 'tbGulM}IA9_HE%B`)3Cv4wJjT5q>g*NDd(i[x|yZeYU<s1oW2ka{zp,?VR.=P^"nOKrcQL]S&F@8+f~m$h#/67:!0;X', BB[YI[18]] = "" + (BB[YI[2]] || ""), BB[-YI[80]] = BB[YI[18]].length, BB[-YI[81]] = [], BB[YI[7]] = YI[2], BB[YI[46]] = YI[2], BB[YI[30]] = -YI[0]), BB[-YI[79]] = YI[2]; BB[-YI[79]] < BB[-YI[80]]; BB[-YI[79]]++)
                    if (BB[YI[48]] = BB[YI[53]].indexOf(BB[YI[18]][BB[-YI[79]]]), BB[YI[48]] !== -YI[0])
                      if (BB[YI[30]] < YI[2]) BB[YI[30]] = BB[YI[48]];
                      else {
                        MI(BB[YI[30]] += BB[YI[48]] * YI[31], BB[YI[7]] |= BB[YI[30]] << BB[YI[46]], BB[YI[46]] += (BB[YI[30]] & YI[33]) > YI[34] ? YI[35] : YI[36]);
                        do {
                          MI(BB[-YI[81]].push(BB[YI[7]] & YI[11]), BB[YI[7]] >>= YI[10], BB[YI[46]] -= YI[10])
                        } while (BB[YI[46]] > YI[23]);
                        BB[YI[30]] = -YI[0]
                      } return BB[YI[30]] > -YI[0] && BB[-YI[81]].push((BB[YI[7]] | BB[YI[30]] << BB[YI[46]]) & YI[11]), pI(BB[-YI[81]])
                }(UI[BB[YI[2]]]) : yI[BB[YI[2]]]
              }
              IB[YI[12]] = YI[0];
              try {
                BB[YI[0]]
              } catch (TB) {
                BB[YI[0]] = ""
              }
              for (MI(IB[YI[0]] = ZB(166) + ZB(167) + ZB(168) + ZB(YI[51]) + ZB(170) + ZB(YI[49]) + ZB(172) + YI[100], IB[YI[47]] = "", IB[YI[27]] = IB[YI[2]].length), IB[YI[16]] = YI[2]; IB[YI[16]] < IB[YI[27]]; IB[YI[16]] += YI[27])
                for (IB[-YI[82]] = IB[YI[2]].charCodeAt(IB[YI[16]]) << YI[72] | (IB[YI[16]] + YI[0] < IB[YI[27]] ? IB[YI[2]].charCodeAt(IB[YI[16]] + YI[0]) << YI[10] : YI[2]) | (IB[YI[16]] + YI[18] < IB[YI[27]] ? IB[YI[2]].charCodeAt(IB[YI[16]] + YI[18]) : YI[2]), IB[YI[46]] = YI[2]; IB[YI[46]] < YI[16]; IB[YI[46]]++) IB[YI[16]] * YI[10] + IB[YI[46]] * YI[21] > IB[YI[2]].length * YI[10] ? IB[YI[47]] += BB[YI[0]] : IB[YI[47]] += IB[YI[0]].charAt(IB[-YI[82]] >>> YI[21] * (YI[27] - IB[YI[46]]) & YI[20]);
              return IB[YI[47]]
            }

            function vB(...BB) {
              var IB, ZB;
              for (MI(BB[YI[12]] = YI[0], BB[YI[67]] = "", BB[YI[47]] = -YI[0]); ++BB[YI[47]] < BB[YI[2]].length;) MI(IB = BB[YI[2]].charCodeAt(BB[YI[47]]), ZB = BB[YI[47]] + YI[0] < BB[YI[2]].length ? BB[YI[2]].charCodeAt(BB[YI[47]] + YI[0]) : YI[2]), 55296 <= IB && IB <= 56319 && 56320 <= ZB && ZB <= 57343 && MI(IB = 65536 + ((IB & YI[84]) << YI[8]) + (ZB & YI[84]), BB[YI[47]]++), IB <= YI[56] ? BB[YI[67]] += String.fromCharCode(IB) : IB <= 2047 ? BB[YI[67]] += String.fromCharCode(192 | IB >>> YI[21] & YI[85], YI[57] | IB & YI[20]) : IB <= YI[89] ? BB[YI[67]] += String.fromCharCode(224 | IB >>> YI[24] & YI[78], YI[57] | IB >>> YI[21] & YI[20], YI[57] | IB & YI[20]) : IB <= 2097151 && (BB[YI[67]] += String.fromCharCode(YI[97] | IB >>> YI[3] & YI[23], YI[57] | IB >>> YI[24] & YI[20], YI[57] | IB >>> YI[21] & YI[20], YI[57] | IB & YI[20]));
              return BB[YI[67]]
            }

            function kB(...BB) {
              for (MI(BB[YI[12]] = YI[0], BB[YI[53]] = Array(BB[YI[2]].length >> YI[18])), BB[YI[47]] = YI[2]; BB[YI[47]] < BB[YI[53]].length; BB[YI[47]]++) BB[YI[53]][BB[YI[47]]] = YI[2];
              for (BB[YI[47]] = YI[2]; BB[YI[47]] < BB[YI[2]].length * YI[10]; BB[YI[47]] += YI[10]) BB[YI[53]][BB[YI[47]] >> YI[7]] |= (BB[YI[2]].charCodeAt(BB[YI[47]] / YI[10]) & YI[11]) << YI[87] - BB[YI[47]] % YI[86];
              return BB[YI[53]]
            }

            function cB(...BB) {
              for (MI(BB[YI[12]] = YI[0], BB[YI[0]] = ""), BB[YI[18]] = YI[2]; BB[YI[18]] < BB[YI[2]].length * YI[86]; BB[YI[18]] += YI[10]) BB[YI[0]] += String.fromCharCode(BB[YI[2]][BB[YI[18]] >> YI[7]] >>> YI[87] - BB[YI[18]] % YI[86] & YI[11]);
              return BB[YI[0]]
            }

            function nB(...BB) {
              return BB[YI[12]] = YI[18], BB[YI[2]] >>> BB[YI[0]] | BB[YI[2]] << YI[86] - BB[YI[0]]
            }

            function hB(BB, IB) {
              return BB >>> IB
            }

            function zB(...BB) {
              return BB[YI[12]] = YI[27], BB[YI[2]] & BB[YI[0]] ^ ~BB[YI[2]] & BB[YI[18]]
            }

            function FB(BB, IB, ZB) {
              return BB & IB ^ BB & ZB ^ IB & ZB
            }

            function NB(...BB) {
              return BB[YI[12]] = YI[0], nB(BB[YI[2]], YI[18]) ^ nB(BB[YI[2]], YI[35]) ^ nB(BB[YI[2]], 22)
            }

            function gB(...BB) {
              return BB[YI[12]] = YI[0], nB(BB[YI[2]], YI[21]) ^ nB(BB[YI[2]], 11) ^ nB(BB[YI[2]], 25)
            }

            function qB(...BB) {
              return BB[YI[12]] = YI[0], nB(BB[YI[2]], YI[23]) ^ nB(BB[YI[2]], YI[3]) ^ hB(BB[YI[2]], YI[27])
            }

            function yB(...BB) {
              return BB[YI[12]] = YI[0], nB(BB[YI[2]], 17) ^ nB(BB[YI[2]], YI[38]) ^ hB(BB[YI[2]], YI[8])
            }

            function UB(...IB) {
              var ZB, TB, JB, oB, GB, vB, kB, cB, nB, hB, UB, dB;
              for (MI(IB[YI[12]] = YI[18], IB[YI[18]] = new Array(1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225), IB[YI[27]] = new Array(YI[88])), MI(IB[YI[2]][IB[YI[0]] >> YI[7]] |= YI[57] << YI[87] - IB[YI[0]] % YI[86], IB[YI[2]][(IB[YI[0]] + YI[88] >> YI[45] << YI[16]) + YI[78]] = IB[YI[0]]), nB = YI[2]; nB < IB[YI[2]].length; nB += YI[72]) {
                for (MI(ZB = IB[YI[18]][YI[2]], TB = IB[YI[18]][YI[0]], JB = IB[YI[18]][YI[18]], oB = IB[YI[18]][YI[27]], GB = IB[YI[18]][YI[16]], vB = IB[YI[18]][YI[7]], kB = IB[YI[18]][YI[21]], cB = IB[YI[18]][YI[23]]), hB = YI[2]; hB < YI[88]; hB++) MI(IB[YI[27]][hB] = hB < YI[72] ? IB[YI[2]][hB + nB] : WB(WB(WB(yB(IB[YI[27]][hB - YI[18]]), IB[YI[27]][hB - YI[23]]), qB(IB[YI[27]][hB - YI[78]])), IB[YI[27]][hB - YI[72]]), UB = WB(WB(WB(WB(cB, gB(GB)), zB(GB, vB, kB)), BB[YI[17]][hB]), IB[YI[27]][hB]), dB = WB(NB(ZB), FB(ZB, TB, JB)), cB = kB, kB = vB, vB = GB, GB = WB(oB, UB), oB = JB, JB = TB, TB = ZB, ZB = WB(UB, dB));
                MI(IB[YI[18]][YI[2]] = WB(ZB, IB[YI[18]][YI[2]]), IB[YI[18]][YI[0]] = WB(TB, IB[YI[18]][YI[0]]), IB[YI[18]][YI[18]] = WB(JB, IB[YI[18]][YI[18]]), IB[YI[18]][YI[27]] = WB(oB, IB[YI[18]][YI[27]]), IB[YI[18]][YI[16]] = WB(GB, IB[YI[18]][YI[16]]), IB[YI[18]][YI[7]] = WB(vB, IB[YI[18]][YI[7]]), IB[YI[18]][YI[21]] = WB(kB, IB[YI[18]][YI[21]]), IB[YI[18]][YI[23]] = WB(cB, IB[YI[18]][YI[23]]))
              }
              return IB[YI[18]]
            }

            function WB(...BB) {
              return MI(BB[YI[12]] = YI[18], BB[YI[18]] = (BB[YI[2]] & YI[89]) + (BB[YI[0]] & YI[89]), BB[YI[47]] = (BB[YI[2]] >> YI[72]) + (BB[YI[0]] >> YI[72]) + (BB[YI[18]] >> YI[72])), BB[YI[47]] << YI[72] | BB[YI[18]] & YI[89]
            }
            return MI(BB[YI[12]] = YI[2], BB[YI[76]] = YI[2], BB[YI[0]] = ""), BB[YI[17]] = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998), {
              hex: function(...BB) {
                return BB[YI[12]] = YI[0], oB(function(...BB) {
                  return BB[YI[12]] = YI[0], cB(UB(kB(BB[YI[2]]), BB[YI[2]].length * YI[10]))
                }(vB(BB[YI[2]])))
              },
              b64: ZB,
              any: TB,
              hex_hmac: function(...BB) {
                return BB[YI[12]] = YI[18], oB(JB(vB(BB[YI[2]]), vB(BB[YI[0]])))
              },
              b64_hmac: ZB,
              any_hmac: TB
            }
          }(), console.log(BB[YI[69]]))
        }
        IB(151) + YI[30] in HI && UB(), (0, hB[YI[32]])("5 ")
      }
    }, gB.l.subscribe("customBindingsChanged", (() => {
      PI()
    }));
    let RI = !1,
      rI = !1;
    const mI = () => RI || rI && HB.b.isInGame(),
      XI = BB => {
        mI() && BB.preventDefault()
      };
    gB.l.subscribe("displaymodeFullscreenChange", (BB => {
      LI()
    })), gB.l.subscribe("pointerLockUpdate", (BB => {
      RI = BB, LI(), eI()
    })), gB.l.subscribe("freeCursorUpdate", (BB => {
      rI = BB, LI(), eI()
    }));
    const LI = () => {
        window.removeEventListener("wheel", XI), MB.isIframed && !(0, GB.l)() && (RI || rI) && window.addEventListener("wheel", XI, {
          passive: !1
        })
      },
      eI = () => {
        window.removeEventListener("wheel", uI), (RI || rI) && window.addEventListener("wheel", uI, {
          passive: !1
        })
      },
      uI = BB => {
        !0 === BB.ctrlKey && mI() && BB.preventDefault()
      };

    function fI(BB) {
      gB.l.Gq("QTEMouseState", {
        isDown: BB
      })
    }

    function lI(BB) {
      var IB, ZB, JB, oB, GB, vB, kB, cB;
      const hB = (0, iB.h)();
      hB.lBB = null !== (IB = function(BB, IB) {
        var ZB, TB;
        if (!hI) return null;
        const JB = BB.bloxd;
        vI ??= JB.getMetaInfo("Board").rootId;
        const oB = null !== (ZB = null === IB || void 0 === IB ? void 0 : IB.n_) && void 0 !== ZB ? ZB : null;
        if (!oB || JB.getMetaInfo(oB).rootId !== vI) return null;
        const GB = null !== (TB = null === IB || void 0 === IB ? void 0 : IB.position) && void 0 !== TB ? TB : null;
        if (JB.playerCanChangePos(BB.Jm, GB[0], GB[1], GB[2])) return null;
        const vB = (BB, IB, ZB) => {
          const TB = JB.blockDataOwner.getBlockData(BB, IB, ZB),
            oB = null === TB || void 0 === TB ? void 0 : TB.persisted.shared.text.split("\n")[0].toLowerCase().trim();
          return jB.singleLineBoardActions.has(oB)
        };
        if (vB(GB[0], GB[1], GB[2])) return null;
        let kB;
        BB.vIB && (kB = [...BB.vIB], BB.HV(kB, kB));
        const cB = (kB ? BB.camera.NK : 0) + JB.getBlockReach(BB.Jm);
        return BB.pickBlock(kB, BB.kIB, cB, ((IB, ZB, TB, oB) => 0 !== IB && ("Board" !== JB.getMetaInfo(IB).rootName || JB.playerCanChangePos(BB.Jm, ZB, TB, oB) || vB(ZB, TB, oB))))
      }(hB, hB.lBB)) && void 0 !== IB ? IB : hB.lBB;
      const zB = null !== (ZB = null === (JB = hB.lBB) || void 0 === JB ? void 0 : JB.position) && void 0 !== ZB ? ZB : null,
        NB = null !== (oB = hB.kIB) && void 0 !== oB ? oB : hB.camera.XV(),
        qB = iB.l.localPlayerPickActionHelper.getPickEntityResult(NB),
        yB = null !== (GB = hB.lBB) && void 0 !== GB && GB.n_ ? (0, XB.e)(hB.lBB.n_) : "Air",
        UB = BB === FB.d.UpFirePrimary || BB === FB.d.UpFireSecondary,
        WB = UB ? "onPlayerClickUp" : "onPlayerClick",
        dB = UB ? BB === FB.d.UpFireSecondary : BB === FB.d.DownFireSecondary,
        CB = !UB && (0, TB.getWasDoubleClick)();
      gB.l.Gq("mouseState", {
        En: BB,
        isDown: !UB
      }), (0, TB.sendColyMessage)(nB.zh, {
        En: BB,
        Dn: CB,
        JG: zB,
        oG: qB
      }, !0), (0, iB.d)().client.triggerGameCallback(WB, hB.Jm, dB, null !== (vB = null === zB || void 0 === zB ? void 0 : zB[0]) && void 0 !== vB ? vB : null, null !== (kB = null === zB || void 0 === zB ? void 0 : zB[1]) && void 0 !== kB ? kB : null, null !== (cB = null === zB || void 0 === zB ? void 0 : zB[2]) && void 0 !== cB ? cB : null, yB, qB)
    }
    window.addEventListener("keydown", (BB => {
      ["ArrowUp", "ArrowDown"].includes(BB.key) && BB.preventDefault()
    })), document.addEventListener("keydown", (BB => {
      (0, rB.d)(BB, (() => {
        const BB = (0, iB.h)();
        return (0, RB.L)(BB) || !1 !== BB.vW.canCustomiseChar
      }))
    }))
  },
  39155: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => oB,
      i: () => GB
    });
    var TB = ZB(38474);
    let JB = !1;

    function oB() {
      return JB
    }

    function GB(BB) {
      JB = BB, BB ? TB.d.setMultiplierType("emoteWheel", 0) : TB.d.removeMultiplier("emoteWheel")
    }
  },
  39170: (BB, IB, ZB) => {
    function TB(BB) {
      return Boolean(BB.vW.useInventory && BB.vW.useFullInventory && BB.zW.bIB(BB.Jm))
    }
    ZB.d(IB, {
      b: () => TB
    })
  },
  39043: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => oB,
      e: () => JB
    });
    var TB = ZB(37188);

    function JB(BB, IB) {
      return {
        replayedClipName: BB,
        replayedClipAgeSeconds: IB
      }
    }

    function oB(BB, IB, ZB, JB, oB) {
      const GB = function(BB) {
          if ("object" !== typeof BB || null === BB) return null;
          const {
            replayedClipName: IB,
            replayedClipAgeSeconds: ZB
          } = BB;
          return "string" === typeof IB && "number" === typeof ZB ? {
            eT: IB,
            uT: ZB
          } : null
        }(ZB),
        vB = null === GB ? ZB : null,
        {
          eT: kB = null,
          uT: cB = 0
        } = null !== GB && void 0 !== GB ? GB : {};
      BB.animateEntity(IB, TB.h.Custom, vB, JB, oB, kB, cB)
    }
  },
  39163: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => nB
    });
    var TB = ZB(38431),
      JB = ZB(360),
      oB = ZB(2912);

    function GB() {
      var BB, IB, ZB, TB;
      const GB = (0, oB.h)(),
        vB = null !== (BB = null === (IB = GB.zW.fIB(GB.Jm)) || void 0 === IB ? void 0 : IB.selectedItem) && void 0 !== BB ? BB : null,
        kB = vB ? (0, oB.d)().getItemStat(GB.Jm, vB.name, "attackCooldownMs") : null,
        cB = (0, JB.hd)(kB, null === vB || void 0 === vB || null === (ZB = vB.attributes.customAttributes) || void 0 === ZB || null === (TB = ZB.enchantments) || void 0 === TB ? void 0 : TB["Attack Speed"]);
      return Math.max(56, Math.ceil((cB + 30) / 3))
    }
    class vB {
      constructor(BB, IB) {
        this.tries = void 0, this.dueMs = void 0, this.intervalMs = void 0, this.tries = [BB], this.dueMs = BB, this.intervalMs = IB
      }
      spacedBy(BB, IB) {
        if (BB === this.intervalMs) return this;
        const ZB = this.tries[this.tries.length - 1],
          TB = new vB(ZB, BB);
        return TB.dueMs = Math.max(ZB, IB - BB), TB
      }
      nextDueMs() {
        const BB = this.tries[this.tries.length - 1];
        return Math.max(BB + 56, this.tries[0] + this.tries.length * this.intervalMs, this.dueMs + this.intervalMs)
      }
      noteTry(BB, IB) {
        this.tries.push(BB), this.tries.length > 3 && this.tries.shift(), this.dueMs = IB
      }
    }
    var kB = ZB(39155),
      cB = ZB(1353);
    class nB {
      constructor() {
        this.timer = null, this.tries = new vB(0, 0), this.check = () => {
          const BB = Date.now(),
            IB = this.tries.spacedBy(GB(), BB),
            ZB = IB.nextDueMs();
          if (BB < ZB) this.schedule();
          else {
            if (IB.noteTry(BB, ZB), this.tries = IB, (0, cB.w)() && !(0, kB.e)()) {
              var JB, vB;
              (0, TB.g)();
              const BB = (0, oB.h)();
              null === (JB = BB.zW.zZB(BB.Jm)) || void 0 === JB || null === (vB = JB.JC) || void 0 === vB || vB.repeatAttack()
            }
            this.schedule()
          }
        }
      }
      start() {
        var BB;
        null === (BB = nB.running) || void 0 === BB || BB.stop(), nB.running = this, this.tries = new vB(Date.now(), GB()), this.schedule()
      }
      static stopRunning() {
        var BB;
        null === (BB = nB.running) || void 0 === BB || BB.stop()
      }
      stop() {
        clearTimeout(this.timer), this.timer = null, nB.running === this && (nB.running = null)
      }
      schedule() {
        const BB = Date.now(),
          IB = this.tries.spacedBy(GB(), BB).nextDueMs() - BB;
        this.timer = setTimeout(this.check, Math.min(IB, 100))
      }
    }
    nB.running = null
  },
  39052: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => NB,
      e: () => nB,
      i: () => FB,
      m: () => zB,
      q: () => gB,
      r: () => hB
    });
    var TB = ZB(39061),
      JB = ZB(37270),
      oB = ZB(3854),
      GB = ZB(2003),
      vB = ZB(24),
      kB = ZB(2912);
    const cB = new TB.c;

    function nB() {
      return cB
    }

    function hB() {
      cB.clear()
    }

    function zB() {
      for (const BB of cB.ids()) {
        const IB = cB.getName(BB);
        void 0 !== IB && GB.b.delete(IB)
      }
      hB(), vB.l.Gq("playerRosterChanged", cB.ids())
    }

    function FB(BB, IB) {
      var ZB, TB;
      if (cB.has(BB)) return cB.getSetting(BB, IB);
      const JB = (0, kB.h)();
      return null === (ZB = JB.Tm[JB.Jm]) || void 0 === ZB || null === (TB = ZB[BB]) || void 0 === TB ? void 0 : TB[IB]
    }

    function NB(BB) {
      const {
        added: IB,
        removed: ZB,
        settingChanges: TB
      } = cB.apply(BB);
      for (const {
          playerId: JB,
          name: oB
        }
        of ZB) void 0 === oB || qB(JB) || GB.b.delete(oB);
      for (const {
          playerId: oB,
          settings: GB
        }
        of TB)
        if (qB(oB)) gB(oB, GB);
        else
          for (const BB in GB)(0, JB.g)(oB, BB, GB[BB]);
      (IB.length > 0 || ZB.length > 0) && vB.l.Gq("playerRosterChanged", cB.ids())
    }

    function gB(BB) {
      let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : cB.getSettings(BB);
      if (IB) {
        (0, JB.c)(BB);
        for (const ZB in IB)(0, JB.b)(BB, ZB, IB[ZB])
      }
    }

    function qB(BB) {
      return BB === (0, kB.h)().oIB || (0, kB.d)().client.hasEntity(BB)
    }(0, oB.onGameReset)(hB)
  },
  38146: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => YB,
      f: () => QB,
      h: () => wB,
      l: () => OB,
      o: () => iB
    });
    var TB = ZB(37113),
      JB = ZB(38151),
      oB = ZB(364),
      GB = ZB.n(oB),
      vB = ZB(3586);
    const kB = new TB.rN,
      cB = new TB.rN,
      nB = new TB.rN,
      hB = new TB.rN,
      zB = new TB.rN,
      FB = [0, 0, 0],
      NB = {
        x: 0,
        y: 0
      },
      gB = new TB.rN(1, 0, 0),
      qB = new TB.rN(0, 1, 0),
      yB = TB.Matrix.Identity(),
      UB = new TB.Matrix,
      WB = new TB.Matrix,
      dB = new TB.rN,
      CB = new JB.c(0, 0, 0, 0);

    function QB(BB, IB) {
      var ZB, JB;
      const oB = sB(BB, IB);
      if (oB) {
        const BB = oB.x,
          IB = oB.y,
          ZB = BB - 50,
          TB = IB - 50;
        return Math.abs(ZB) <= vB.b && Math.abs(TB) <= (0, vB.g)() ? {
          x: BB,
          y: IB
        } : aB(ZB, TB)
      }
      nB.cBB(IB[0], IB[1], IB[2]),
        function(BB) {
          const IB = BB.Ig.TTB(),
            ZB = IB ? TB.Matrix.FromArrayToRef(IB.worldMatrix, 0, WB) : BB.Ig.JR().activeCamera.getWorldMatrix();
          TB.rN.TransformNormalToRef(gB, ZB, hB), hB.normalize(), TB.rN.TransformNormalToRef(qB, ZB, zB), zB.normalize()
        }(BB);
      const GB = TB.rN.Dot(nB, hB);
      let kB = -TB.rN.Dot(nB, zB);
      Math.abs(GB) < .001 && Math.abs(kB) < .001 && (kB = -1);
      const cB = null !== (ZB = null === (JB = BB.Ig.TTB()) || void 0 === JB ? void 0 : JB.projectionMatrix) && void 0 !== ZB ? ZB : BB.Ig.JR().activeCamera.getProjectionMatrix().m;
      return aB(GB * cB[0], kB * cB[5])
    }

    function sB(BB, IB) {
      const ZB = BB.Ig.JR(),
        JB = ZB.PN(),
        oB = JB.getRenderWidth(),
        GB = JB.getRenderHeight();
      CB.width = oB, CB.height = GB;
      const vB = BB.Ig.TTB(),
        nB = vB ? dB.cBB(vB.eye[0], vB.eye[1], vB.eye[2]) : BB.Ig.camera.globalPosition;
      kB.cBB(nB.x + 10 * IB[0], nB.y + 10 * IB[1], nB.z + 10 * IB[2]);
      const hB = vB ? TB.Matrix.FromArrayToRef(vB.viewProjectionMatrix, 0, UB) : ZB.getTransformMatrix();
      return TB.rN.ProjectToRef(kB, yB, hB, CB, cB), cB.z < 0 || cB.z > 1 ? null : (NB.x = cB.x / oB * 100, NB.y = cB.y / GB * 100, NB)
    }

    function wB(BB, IB) {
      return QB(BB, pB(BB, IB))
    }

    function OB(BB, IB) {
      const ZB = sB(BB, pB(BB, IB));
      return ZB && {
        x: ZB.x,
        y: ZB.y
      }
    }

    function YB(BB) {
      var IB, ZB;
      return 1 / (null !== (IB = null === (ZB = BB.Ig.TTB()) || void 0 === ZB ? void 0 : ZB.projectionMatrix[0]) && void 0 !== IB ? IB : BB.Ig.JR().activeCamera.getProjectionMatrix().m[0])
    }

    function iB(BB, IB, ZB) {
      const TB = BB.Ig.TTB(),
        JB = TB ? TB.worldMatrix : BB.Ig.JR().activeCamera.getWorldMatrix().m,
        oB = BB.Mz;
      for (let GB = 0; GB < 3; GB++) IB[GB] = JB[12 + GB] + oB[GB], ZB[GB] = JB[8 + GB];
      GB().normalize(ZB, ZB)
    }

    function pB(BB, IB) {
      const ZB = BB.Mz,
        TB = BB.Ig.TTB(),
        JB = TB ? dB.cBB(TB.eye[0], TB.eye[1], TB.eye[2]) : BB.Ig.camera.globalPosition;
      return FB[0] = IB[0] - ZB[0] - JB.x, FB[1] = IB[1] - ZB[1] - JB.y, FB[2] = IB[2] - ZB[2] - JB.z, GB().normalize(FB, FB), FB
    }

    function aB(BB, IB) {
      return (0, vB.d)(BB, IB, vB.b, (0, vB.g)())
    }
  },
  39030: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => zB
    });
    var TB = ZB(201),
      JB = ZB(364),
      oB = ZB.n(JB),
      GB = ZB(36780),
      vB = ZB(36783),
      kB = ZB(2912);
    const cB = TB.f.fq * TB.f.playerEyeToHeightRatio,
      nB = 250,
      hB = 1.1,
      zB = new class {
        constructor() {
          this.entities = new Map, this.playing = new Map, this.msSinceLastScan = 0
        }
        add(BB, IB) {
          this.entities.set(BB, IB)
        }
        update(BB, IB) {
          const ZB = this.entities.get(BB);
          this.entities.set(BB, IB);
          const TB = this.playing.get(BB);
          TB && (ZB && ZB.soundName === IB.soundName ? (TB.sound.setRelativeVolume(IB.volume), TB.sound.rate(IB.rate), TB.sound.setPannerAttr({
            refDistance: IB.refDistance
          })) : this.stopEntity(BB))
        }
        remove(BB) {
          this.stopEntity(BB), this.entities.delete(BB)
        }
        Iz(BB) {
          this.msSinceLastScan += BB, this.msSinceLastScan < nB || (this.msSinceLastScan = 0, this.scan())
        }
        stopEntity(BB) {
          const IB = this.playing.get(BB);
          IB && (IB.sound.stop(), this.playing.delete(BB))
        }
        startEntity(BB, IB, ZB) {
          const TB = (0, vB.f)(IB.soundName);
          if (!TB) return console.error(`AudioEntityManager: no sound found for "${IB.soundName}", dropping audio entity ${BB}`), void this.remove(BB);
          const JB = GB.d.play(TB, IB.volume, ZB, IB.maxHearDist, IB.refDistance, !0);
          JB.rate(IB.rate), this.playing.set(BB, {
            sound: JB,
            lastPos: oB().clone(ZB)
          })
        }
        scan() {
          const BB = (0, kB.h)();
          if (!BB) return;
          const IB = BB.zW.aU(BB.Jm);
          if (IB)
            for (const [ZB, TB] of this.entities) {
              if (!BB.zW.TIB(ZB, "position")) continue;
              const JB = BB.zW.aU(ZB),
                GB = oB().sqrDist(IB, JB),
                vB = this.playing.get(ZB);
              if (vB) {
                const BB = TB.maxHearDist * hB;
                GB > BB * BB ? this.stopEntity(ZB) : oB().equals(JB, vB.lastPos) || (vB.sound.setPosition([JB[0], JB[1] + cB, JB[2]]), oB().copy(vB.lastPos, JB))
              } else GB <= TB.maxHearDist * TB.maxHearDist && this.startEntity(ZB, TB, JB)
            }
        }
      }
  },
  39090: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => oB,
      f: () => JB
    });
    var TB = ZB(24);

    function JB(BB) {
      return "refetchCode" === BB || "devDownloadJson" === BB || BB.startsWith("Plugin")
    }

    function oB(BB, IB) {
      "refetchCode" !== BB ? "Plugin|MobAiPlugin|ShowPetUi" !== BB ? Promise.all([ZB.e(109), ZB.e(110), ZB.e(105), ZB.e(107), ZB.e(218)]).then((() => ZB(41761))).then((ZB => {
        let {
          runClientGameMessage: TB
        } = ZB;
        TB(BB, IB)
      })).catch((IB => {
        console.error(`Game message ${BB} failed`, IB)
      })) : TB.l.Gq("showPetUi", IB) : TB.l.Gq("refetchCode")
    }
  },
  39076: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => nB
    });
    var TB = ZB(1281),
      JB = ZB(1385),
      oB = ZB(20),
      GB = ZB(1370),
      vB = ZB(1382),
      kB = ZB(1579),
      cB = ZB(36492);

    function nB(BB) {
      let {
        jJ: IB,
        PJ: ZB
      } = BB;
      const nB = null !== IB && void 0 !== IB ? IB : (0, vB.c)().gameNameWithVariation;
      (0, TB.D)(nB) && ((0, cB.l)(), (0, GB.$)((() => {
        console.log("Received matchmaking order from game server to game", IB), (0, oB.m)("inGameReplay"), (0, kB.navigatePreserveSearch)((0, JB.b)(nB, null !== ZB && void 0 !== ZB ? ZB : void 0))
      }), "video_start"))
    }
  },
  39067: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => kB,
      f: () => GB,
      j: () => vB,
      k: () => cB
    });
    var TB = ZB(24),
      JB = ZB(1403);
    const oB = new Map;

    function GB(BB, IB) {
      TB.l.Gq("newUiRequest", {
        id: BB,
        clientParameters: IB
      }, !0)
    }

    function vB(BB) {
      TB.l.Gq("removeUiRequest", BB, !0);
      const IB = oB.get(BB);
      IB && (IB.tearDownNotification(), oB.delete(BB))
    }

    function kB() {
      TB.l.Gq("clearUiRequests");
      for (const BB of oB.values()) BB.tearDownNotification();
      oB.clear()
    }

    function cB(BB, IB, ZB, TB) {
      const GB = JB.NotificationProvider.showPromptPopup({
        title: IB,
        confirmText: "general:yes",
        cancelText: "general:no",
        destructive: ZB,
        unlockPointerKey: "uiRequestPopup"
      });
      oB.set(BB, GB), GB.getResult().then((IB => {
        oB.delete(BB), "notificationTornDown" !== IB && TB(IB)
      }))
    }
  },
  39061: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => TB
    });
    class TB {
      constructor() {
        this.members = new Map
      }
      apply(BB) {
        const IB = {
          added: [],
          removed: [],
          settingChanges: []
        };
        for (const TB of BB.mB) {
          let BB = this.members.get(TB.XB);
          if (BB || (BB = {
              name: null,
              settings: {}
            }, this.members.set(TB.XB, BB), IB.added.push(TB.XB)), null !== TB.LB && (BB.name = TB.LB), null !== TB.eB || TB.uB.length > 0) {
            const ZB = null === TB.eB ? {} : JSON.parse(TB.eB);
            Object.assign(BB.settings, ZB);
            for (const IB of TB.uB) delete BB.settings[IB], ZB[IB] = void 0;
            IB.settingChanges.push({
              playerId: TB.XB,
              settings: ZB
            })
          }
        }
        for (const TB of BB.fB) {
          const BB = this.members.get(TB);
          var ZB;
          if (BB) this.members.delete(TB), IB.removed.push({
            playerId: TB,
            name: null !== (ZB = BB.name) && void 0 !== ZB ? ZB : void 0
          })
        }
        return IB
      }
      has(BB) {
        return this.members.has(BB)
      }
      ids() {
        return [...this.members.keys()]
      }
      getName(BB) {
        var IB, ZB;
        return null !== (IB = null === (ZB = this.members.get(BB)) || void 0 === ZB ? void 0 : ZB.name) && void 0 !== IB ? IB : void 0
      }
      getSettings(BB) {
        var IB;
        return null === (IB = this.members.get(BB)) || void 0 === IB ? void 0 : IB.settings
      }
      getSetting(BB, IB) {
        var ZB;
        return null === (ZB = this.members.get(BB)) || void 0 === ZB ? void 0 : ZB.settings[IB]
      }
      clear() {
        this.members.clear()
      }
    }
  },
  39094: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => TB,
      i: () => JB
    });
    const TB = ["description", "label"];

    function JB(BB) {
      const IB = BB.type;
      return {
        type: IB,
        params: BB[IB]
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);