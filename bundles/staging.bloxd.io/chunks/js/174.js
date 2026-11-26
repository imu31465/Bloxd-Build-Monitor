export const id = 174;
export const ids = [174];
export const modules = {
  39804: (BB, OB, GB) => {
    function YB(BB) {
      return !(!BB.lobbyLeaderboardInfo && !BB.lobbyManage)
    }
    GB.d(OB, {
      b: () => YB
    })
  },
  39782: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => QB,
      e: () => oB
    });
    var YB = GB(25);
    let DB = !1;

    function QB() {
      return DB
    }

    function oB(BB) {
      DB !== BB && (DB = BB, YB.o.tM("replayViewer|videoExportChanged"))
    }
  },
  39730: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => QB
    });
    var YB = GB(25),
      DB = GB(2050);

    function QB(BB) {
      let {
        taskId: OB,
        progress: GB
      } = BB;
      const YB = DB.e.get("_tasks");
      null !== YB && void 0 !== YB && YB[OB] && DB.e.apply({
        _tasks: {
          ...YB,
          [OB]: {
            ...YB[OB],
            progress: GB
          }
        }
      })
    }
    YB.o.subscribe("clientTaskProgress", (BB => {
      QB(BB)
    }))
  },
  39661: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => GG,
      f: () => BG,
      g: () => OG
    });
    var YB = GB(4111),
      DB = GB(162),
      QB = GB(192),
      oB = GB(645),
      jB = GB(31),
      yB = GB(3088),
      JB = GB(4166),
      MB = GB(4150),
      PB = GB(1217);
    const zB = new WeakMap;
    class lB {
      constructor(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
          EMB: !0
        };
        this.callbacks = OB, this.options = GB, this.aYB = void 0, this.sessionId = void 0, this.Rk = [], this.cMB = !1, this.Vp = !1, this.hMB = void 0, this.Nk = 0, this.EQB = 0, this.aMB = (BB, OB) => {
          if (this.Vp) return;
          const GB = Number(BB);
          this.cMB ? this.eMB(GB, OB) : this.Rk.push({
            id: GB,
            payload: OB
          })
        }, this.dispose = () => {
          this.Vp || (this.Vp = !0, zB.delete(this), this.Rk.length = 0, this.hMB())
        }, this.aYB = BB, this.sessionId = BB.sessionId, zB.set(this, []), this.hMB = this.TMB()
      }
      bMB(BB) {
        this.hMB(), this.aYB = BB, this.sessionId = BB.sessionId, this.Nk = 0, this.EQB = 0, this.hMB = this.TMB()
      }
      get zk() {
        return this.EQB
      }
      TMB() {
        const BB = this.aYB.kR("*", this.aMB);
        return this.options.EMB && this.aYB.uR(this.dispose), BB
      }
      eMB(BB, OB) {
        try {
          (0, JB.rc)(BB) && (OB = (0, JB.b)(BB, MB.BP.from(OB)));
          const GB = zB.get(this)[BB];
          if ("function" !== typeof GB) {
            if (this.callbacks.CMB) return void this.callbacks.CMB(BB, OB);
            throw new Error(`No onMessage handler registered for message id ${BB}`)
          }
          GB(OB)
        } catch (GB) {
          this.callbacks.HMB(`Error in onMessage ${BB} with payload ${JSON.stringify(OB)}`, GB)
        } finally {
          this.Nk++
        }
      }
      vMB() {
        for (const {
            id: BB,
            payload: OB
          }
          of this.Rk) {
          if (this.Vp) break;
          this.eMB(BB, OB)
        }
        this.Rk.length = 0
      }
      lV() {
        return this.Vp
      }
      sMB() {
        if (this.cMB || this.Vp) throw new Error("Trying to getOnMessageRegistrationHandler after registration finished");
        return {
          kR: (BB, OB) => {
            if (this.cMB || this.Vp) throw new Error("Trying to call onMessage after registration finished");
            this.kR(BB, OB)
          },
          finishRegistration: () => {
            if (this.Vp) throw new Error("Cannot finish message registration after disposal");
            this.cMB = !0, this.vMB()
          }
        }
      }
      kR(BB, OB) {
        var GB, YB;
        null === (GB = (YB = this.callbacks).xMB) || void 0 === GB || GB.call(YB);
        const DB = zB.get(this);
        for (; BB > DB.length;) DB[DB.length] = null;
        DB[BB] = OB
      }
      send(BB, OB) {
        this.tMB(), (0, PB.K)(OB) ? this.aYB.Hk(BB, OB) : this.aYB.send(BB, OB)
      }
      tMB() {
        var BB, OB;
        (this.EQB++, 5 === pB++) && (null === (BB = (OB = this.callbacks).xMB) || void 0 === BB || BB.call(OB), pB = 0)
      }
      mN() {
        this.dispose(), this.aYB.mN()
      }
      leave() {
        this.dispose(), this.aYB.leave()
      }
    }
    let pB = 0;
    var qB = GB(4125);
    class ZB extends lB {
      constructor(BB) {
        super(BB, {
          xMB: () => {
            (0, jB.k)(!0) && (0, YB.Dk)()
          },
          HMB: (BB, OB) => {
            var GB;
            null === (GB = (0, yB.g)()) || void 0 === GB || GB.fq(BB, OB)
          }
        }, {
          EMB: !1
        }), (0, qB.i)(BB)
      }
      Wk(BB, OB) {
        return !!(0, qB.o)((0, qB.e)(), this.aYB, BB, OB) && (this.tMB(), !0)
      }
      bMB(BB) {
        this.BPB(), super.bMB(BB), (0, qB.i)(BB)
      }
      mN() {
        super.mN(), this.BPB()
      }
      BPB() {
        this.aYB.FN.yP.Km = void 0
      }
    }
    var NB = GB(25),
      RB = GB(2050),
      WB = GB(1822),
      AB = GB(37132),
      VB = GB(39667),
      SB = GB(38712),
      nB = GB(38488),
      UB = GB(641),
      fB = GB(39071);

    function kB(BB, OB, GB) {
      const YB = function(BB) {
          const OB = new Int32Array(BB.length * fB.h);
          return BB.forEach(((BB, GB) => {
            const YB = GB * fB.h;
            if (4 === BB.length) {
              const [GB, DB, QB, oB] = BB;
              OB.set([GB, DB, QB, GB, DB, QB, oB], YB)
            } else {
              const [GB, DB, QB, oB, jB, yB, JB] = BB;
              OB.set([GB, QB, jB, DB, oB, yB, JB], YB)
            }
          })), OB
        }(GB),
        DB = (OB, GB, YB, DB) => {
          BB.setBlockNoMulti(OB, GB, YB, DB, !0)
        };
      BB.client.gameRecorder.isCapturing() ? (0, fB.wb)(YB, (0, fB.sb)(YB), DB) : BB.kz.mP.wV(YB, {
        tC: DB,
        isHookId: OB => BB.blockChangeHasHooks(OB),
        watched: () => function(BB, OB, GB) {
          const YB = [],
            DB = (BB, OB, GB) => {
              YB.push(BB, OB, GB)
            },
            QB = new Set;
          for (let oB = 0; oB < GB.length; oB += fB.h)
            for (let OB = (0, UB.V)(GB[oB]); OB <= (0, UB.V)(GB[oB + 3]); OB++)
              for (let YB = (0, UB.V)(GB[oB + 1]); YB <= (0, UB.V)(GB[oB + 4]); YB++)
                for (let jB = (0, UB.V)(GB[oB + 2]); jB <= (0, UB.V)(GB[oB + 5]); jB++) {
                  const GB = `${OB}|${YB}|${jB}`;
                  QB.has(GB) || (QB.add(GB), BB.blockDataOwner.forEachDataCell(OB, YB, jB, DB))
                }
          return OB.forEachCell(DB), Int32Array.from(YB)
        }(BB, OB, YB)
      }), BB.kz.eOB()
    }

    function dB(BB) {
      BB.IYB = new Set, BB.LYB = new Set, BB.FYB = new Set, BB.gYB = new Set, BB.iYB = [], BB.rYB = [], BB.nC = new Set, BB.JY = [], BB.fC = []
    }
    class KB {
      constructor(BB) {
        this.kz = BB
      }
      register(BB) {
        const OB = this.kz,
          GB = (0, yB.d)();
        BB.kR(JB.W, (BB => {
          OB.mP.IYB.add(BB), OB.mP.LYB.delete(BB)
        })), BB.kR(JB.eb, (BB => {
          OB.mP.LYB.add(BB), OB.mP.IYB.delete(BB)
        })), BB.kR(JB.le, (BB => {
          OB.mP.LYB.delete(BB), OB.mP.IYB.delete(BB)
        })), BB.kR(JB.ab, (BB => {
          OB.mP.FYB.add(BB), OB.mP.gYB.delete(BB)
        })), BB.kR(JB.ib, (BB => {
          OB.mP.gYB.add(BB), OB.mP.FYB.delete(BB)
        })), BB.kR(JB.re, (BB => {
          OB.mP.gYB.delete(BB), OB.mP.FYB.delete(BB)
        })), BB.kR(JB.Z, (BB => {
          (0, PB.lb)(BB, OB.mP.rYB), (0, PB.lb)(BB, OB.mP.iYB), OB.mP.iYB.push(BB)
        })), BB.kR(JB.fb, (BB => {
          (0, PB.lb)(BB, OB.mP.iYB), (0, PB.lb)(BB, OB.mP.rYB), OB.mP.rYB.push(BB)
        })), BB.kR(JB.oe, (BB => {
          (0, PB.lb)(BB, OB.mP.iYB), (0, PB.lb)(BB, OB.mP.rYB)
        })), BB.kR(JB.Nf, (BB => {
          let {
            yG: GB,
            JG: YB
          } = BB;
          YB ? OB.mP.nC.delete(GB) : OB.mP.nC.add(GB)
        })), BB.kR(JB.Lf, (BB => {
          let {
            JY: YB,
            MY: DB
          } = BB;
          GB.updateWalkThroughRect(OB.EX, YB, DB)
        })), (0, YB.onGameResetOnce)((() => {
          dB(OB.mP)
        })), BB.kR(JB.nc, (BB => {
          SB.d.applyServerUpdate(BB)
        })), BB.kR(JB.lb, (BB => {
          GB.applyServerBlocks((() => {
            ! function(BB, OB) {
              for (const {
                  wQ: GB,
                  EQ: YB
                }
                of OB) {
                const OB = nB.c[YB];
                if (OB) {
                  const {
                    compX: YB,
                    compY: DB,
                    compZ: QB,
                    mainMultiblock: oB
                  } = OB;
                  BB.qm(GB[0] - YB, GB[1] - DB, GB[2] - QB, oB)
                }
              }
              for (const {
                  wQ: GB,
                  EQ: YB,
                  cQ: DB
                }
                of OB) BB.setBlockNoMulti(GB[0], GB[1], GB[2], YB, !0), BB.blockDataOwner.setBlockData(GB[0], GB[1], GB[2], null === DB ? void 0 : JSON.parse(DB)), BB.blockAdded(GB[0], GB[1], GB[2], YB)
            }(GB, BB)
          })), NB.o.tM("changeBlockFail", BB), NB.o.tM("blockChangeRefused"), GB.client.triggerGameCallback("onChangeBlockFail", BB), NB.o.tM("EditBoard", {
            pos: null
          }), NB.o.tM("EditCodeBlock", {
            pos: null,
            canChangePos: null
          })
        }));
        const DB = BB => {
          GB.applyServerBlocks((() => {
            kB(GB, SB.d, BB)
          }))
        };
        BB.kR(JB.Fb, DB), BB.kR(JB.$b, DB), BB.kR(JB.If, (BB => {
          let {
            jO: OB,
            yO: YB
          } = BB;
          if (GB.Qv(OB[0], OB[1], OB[2])) {
            const BB = (0, yB.d)().jR(OB[0], OB[1], OB[2]);
            (0, yB.d)().updateMailboxContents(OB[0], OB[1], OB[2], BB, YB)
          }
        })), BB.kR(JB.Me, (BB => {
          let {
            pos: OB,
            data: YB
          } = BB;
          GB.blockDataOwner.setBlockData(OB[0], OB[1], OB[2], YB), GB.blockAdded(OB[0], OB[1], OB[2], GB.jR(OB[0], OB[1], OB[2]))
        }))
      }
    }
    var uB = GB(37839),
      mB = GB(37452),
      IB = GB(38744),
      FB = GB(38597),
      iB = GB(38762);
    class LB {
      constructor(BB, OB) {
        this.kz = BB, this.setUpQueuedEntity = OB
      }
      register(BB) {
        const OB = this.kz,
          GB = (0, yB.d)();
        BB.kR(JB.T, (BB => {
          let {
            kB: OB,
            dB: GB
          } = BB;
          this.setUpQueuedEntity(OB), OB = (0, mB.b)(OB), (0, yB.d)().client.gameRecorder.recordBulletShot(OB, GB), NB.o.tM(`bulletShot|${OB}`, {
            bulletDirections: GB
          })
        })), BB.kR(JB.oc, (BB => {
          let {
            kY: OB,
            dY: GB
          } = BB;
          NB.o.tM("damagedByOtherPlayer", {
            kY: OB,
            direction: GB
          }, !0)
        })), BB.kR(JB.Hd, (BB => {
          NB.o.tM("playerKilled", BB, !0), (0, mB.g)(BB.killerEId) && !(0, mB.g)(BB.deadEId) && NB.o.tM("sessionReplayPlayerKill", {
            killstreak: BB.killstreak
          }), (0, yB.d)().client.gameRecorder.recordPlayerKilled(BB.deadEId, BB.killerEId, BB.withItem, BB.killstreak)
        })), BB.kR(JB.Qb, (BB => {
          NB.o.tM("customKillfeed", BB, !0), (0, yB.d)().client.gameRecorder.recordCustomKillfeed(BB.killer, BB.victim, BB.withItem)
        })), BB.kR(JB.Qd, (BB => {
          let {
            uG: GB,
            mG: YB
          } = BB;
          this.setUpQueuedEntity(GB);
          const DB = OB.DW.MYB(GB);
          null !== DB && void 0 !== DB && DB.isGun() && DB.reload(Date.now(), YB)
        })), BB.kR(JB.Fe, (BB => {
          let {
            GD: GB,
            bG: YB
          } = BB;
          const DB = YB ? (0, iB.f)(OB, YB) : void 0;
          NB.o.tM("sendHitmarker", {
            GD: GB,
            screenPos: DB
          }, !0)
        })), BB.kR(JB.Vc, (BB => {
          let {
            aG: YB,
            eG: DB,
            CG: QB,
            HG: oB,
            vG: jB,
            sG: yB,
            xG: JB
          } = BB;
          this.setUpQueuedEntity(YB), YB = (0, mB.b)(YB);
          const MB = OB.DW.YYB(YB);
          if (MB && (MB.lastHurtTime = performance.now()), (0, IB.playRigHurt)(OB, YB, yB), NB.o.tM("lifeformHurt", {
              eId: YB,
              xG: JB
            }), DB) {
            const BB = (0, iB.f)(OB, DB.bG);
            NB.o.tM("yourAttackHit", {
              GD: oB,
              screenPos: BB,
              hitSelf: YB === OB.EX
            })
          }
          YB === OB.EX && (GB.shakePlayerCamera(YB, jB / 40, 200), NB.o.tM("closeShopOnDamaged", null), NB.o.tM("damagedByOtherPlayer", {
            kY: null,
            direction: yB,
            vG: jB
          }, !0));
          const PB = OB.DW.pR(YB);
          if (PB && (QB || oB)) {
            const BB = [PB[0], PB[1] + 1, PB[2]];
            QB && (0, FB.o)(OB, FB.B, BB, 15), oB && (0, FB.o)(OB, FB.s, BB, 10)
          }
        })), BB.kR(JB.Sc, (BB => {
          let {
            tY: GB,
            BD: YB,
            OD: DB
          } = BB;
          (0, uB.c)(OB).setHealthFrac((0, mB.b)(GB), DB), NB.o.tM("lifeformHealthChanged", {
            eId: (0, mB.b)(GB),
            BD: YB,
            OD: DB
          })
        })), BB.kR(JB.N, (BB => {
          let {
            AY: GB,
            VY: YB
          } = BB;
          (0, yB.d)().playerAttacked(OB.EX, GB, YB)
        })), BB.kR(JB.nb, (() => {
          const BB = OB.DW.MYB(OB.EX);
          null !== BB && void 0 !== BB && BB.isChargeable() && BB.finishCharging(!1, Date.now())
        })), BB.kR(JB.Yb, (BB => {
          let {
            pY: OB,
            qY: GB,
            ZY: YB,
            NY: DB,
            RY: QB,
            WY: oB
          } = BB;
          OB = (0, mB.b)(OB), (0, yB.d)().client.updateEffect(OB, GB, {
            displayName: YB,
            icon: DB,
            duration: QB,
            level: oB
          })
        })), BB.kR(JB.Ud, (BB => {
          let {
            pY: OB,
            qY: GB
          } = BB;
          OB = (0, mB.b)(OB), (0, yB.d)().client.removeEffect(OB, GB)
        })), BB.kR(JB.Cf, (BB => {
          NB.o.tM("ttbEffectMultiplier", BB)
        }))
      }
    }
    var gB = GB(39695),
      rB = GB(37836),
      XB = GB(4631),
      wB = GB(38771),
      EB = GB(37434),
      cB = GB(37436),
      hB = GB(37761),
      aB = GB(37857),
      eB = GB(38780),
      TB = GB(39702);
    class bB {
      constructor(BB, OB) {
        this.kz = BB, this.setUpQueuedEntity = OB
      }
      register(BB) {
        const OB = this.kz,
          GB = (0, yB.d)();
        BB.kR(JB.hd, (BB => {
          let {
            eId: GB,
            settings: YB
          } = BB;
          (0, aB.g)(GB);
          for (const OB in YB)(0, aB.e)(GB, OB, YB[OB]);
          if ("canSee" in YB && OB.DW.YGB(GB, "hidingMeshManager")) {
            const BB = OB.DW.getState(GB, "hidingMeshManager");
            BB.canSee = (0, eB.c)("canSee", YB.canSee), BB._forceUpdate = !0
          }
        })), BB.kR(JB.K, (BB => {
          let {
            MG: GB,
            PG: YB,
            animationScript: DB,
            zG: QB,
            lG: oB,
            pG: jB,
            qG: JB
          } = BB;
          GB = (0, mB.b)(GB);
          const MB = null === DB && null !== jB ? (0, gB.g)(jB, JB) : DB;
          (0, yB.d)().client.gameRecorder.recordAnimateEntity(GB, YB, MB, QB, oB), (0, uB.c)(OB).animations.animateEntity(GB, YB, DB, QB, oB, jB, JB), null !== DB || GB === OB.EX && YB === rB.f.Emote && (0, yB.d)().client.cameraController.endTemporaryThirdPerson()
        })), BB.kR(JB.De, (BB => {
          (0, TB.d)(BB)
        })), BB.kR(JB.Dd, (BB => {
          for (const OB of BB)(0, wB.H)(OB);
          NB.o.tM("playerCosmeticsUpdated", BB, !0)
        })), BB.kR(JB.M, (BB => {
          for (const GB of BB)(0, hB.h)(OB, GB)
        })), BB.kR(JB.id, (BB => {
          (0, FB.r)(OB, (0, PB.x)(BB))
        })), BB.kR(JB.md, (BB => {
          XB.i[BB.GY] ? (0, FB.r)(OB, {
            ...XB.i[BB.GY],
            pos1: BB.pos1,
            pos2: BB.pos2
          }) : console.error(`Unknown preset id: ${BB.GY}`)
        })), BB.kR(JB.Cd, (BB => {
          var OB, GB;
          let {
            VD: YB,
            SD: DB,
            nD: QB,
            UD: oB
          } = BB, {
            kD: jB,
            dD: JB
          } = null !== oB && void 0 !== oB ? oB : {};
          const {
            fD: MB
          } = null !== oB && void 0 !== oB ? oB : {};
          jB = null !== (OB = jB) && void 0 !== OB ? OB : void 0, JB = null !== (GB = JB) && void 0 !== GB ? GB : void 0, "string" === typeof MB && this.setUpQueuedEntity(MB), (0, yB.d)().client.gameRecorder.recordPlaySound(YB, DB, QB, oB), EB.b.play((0, cB.f)(YB), DB, MB, jB, JB).rate(QB)
        })), BB.kR(JB.Jf, (BB => {
          for (const OB in BB) {
            const YB = BB[OB];
            for (const BB in YB) GB.client.meshCreator.handleParticleSystemUpdate(OB, BB, YB[BB])
          }
        }))
      }
    }
    var CB = GB(38466),
      HB = GB(38418);
    class vB {
      constructor(BB) {
        this.kz = BB
      }
      register(BB) {
        const OB = this.kz,
          GB = (0, yB.d)();

        function YB() {
          return OB.DW.hGB(OB.EX)
        }
        BB.kR(JB.Dc, (BB => {
          let {
            SQ: GB,
            nQ: YB,
            UQ: DB,
            fQ: QB,
            kQ: oB,
            dQ: jB,
            KQ: yB,
            uQ: JB,
            mQ: MB
          } = BB;
          if (!OB.DW.YGB(GB, "itemState")) return void(0, CB.j)(OB, GB, [oB, jB, yB], YB, {
            amount: DB,
            attributes: JSON.parse(QB),
            uQ: JB,
            size: MB
          });
          const PB = OB.DW.getState(GB, "itemState");
          PB.amount = DB, PB.uQ = JB, PB.creationTime = Date.now(), (0, HB.setServerPosition)(OB.DW.getState(GB, "smoothToServerPos"), oB, jB, yB)
        })), BB.kR(JB.jb, (BB => {
          (0, uB.c)(OB).setCantPickUp(BB, !0), OB.DW.YGB(BB, "itemState") && (OB.DW.getState(BB, "itemState").uQ = !0)
        })), BB.kR(JB.he, (BB => {
          (0, uB.c)(OB).setCantPickUp(BB, !1), OB.DW.YGB(BB, "itemState") && (OB.DW.getState(BB, "itemState").uQ = !1)
        })), BB.kR(JB.yd, (BB => {
          let {
            pickUpItems: OB,
            pickUpAckSeq: GB
          } = BB;
          for (const {
              name: DB,
              amount: QB,
              attributes: oB
            }
            of OB) YB().pickUpItem({
            name: DB,
            amount: QB,
            typeObj: CB.z[DB],
            attributes: oB
          });
          (0, yB.d)().client.inventoryPrediction.serverChangeApplied(GB)
        })), BB.kR(JB.af, (BB => {
          let {
            index: GB,
            name: YB,
            amount: DB,
            attributes: QB,
            setSlotAckSeq: oB
          } = BB;
          const jB = OB.DW.aGB(OB.EX);
          (GB < jB.playerInventory.numSlots || jB.FG || jB.inCreative) && jB.setItemSlot(GB, YB, DB, QB), (0, yB.d)().client.inventoryPrediction.serverChangeApplied(oB)
        })), BB.kR(JB.Ac, (BB => {
          (0, yB.d)().client.inventoryPrediction.acknowledge(BB)
        })), BB.kR(JB.G, (BB => {
          let {
            hQ: OB,
            aQ: GB,
            eQ: YB,
            TQ: DB
          } = BB;
          (0, yB.d)().client.itemDropPrediction.onActionItemDrops(OB, GB, YB, DB)
        })), BB.kR(JB.Cb, (BB => {
          YB().clearInventory(), (0, yB.d)().client.inventoryPrediction.serverChangeApplied(BB)
        })), BB.kR(JB.df, (BB => {
          NB.o.tM("setSelectedInventorySlotI", BB, !0)
        })), BB.kR(JB.xb, (BB => {
          let {
            lO: GB,
            pO: YB,
            qO: DB,
            ZO: QB,
            RO: oB,
            WO: jB,
            AO: JB,
            VO: MB
          } = BB;
          const PB = OB.DW.aGB(OB.EX);
          if (jB) {
            const {
              nO: BB,
              UO: OB
            } = MB;
            return (0, yB.d)().client.inventoryPrediction.POB(OB, (() => {
              PB.chestRefreshed(YB, DB, QB, JB, BB)
            })) && NB.o.tM("chestToggleFromServer", !1, !0), void NB.o.tM("chestRefreshedFromServer")
          }(GB || PB.FG) && (GB ? (PB.chestOpened(YB, DB, QB, oB, JB), null !== oB && (0, yB.d)().client.ironChestPasskeyCache.onChestOpened(QB, oB)) : PB.chestClosed(), NB.o.tM("chestToggleFromServer", GB, !0))
        })), BB.kR(JB.Ub, (BB => {
          let {
            craftingRecipeItemName: YB,
            recipesForItem: DB
          } = BB;
          YB ? GB.craftingManager.editRecipesForPlayer(OB.EX, YB, DB) : GB.craftingManager.resetAllPlayerRecipes(OB.EX), NB.o.tM("craftingRecipesEdited", {
            itemName: YB,
            recipesForItem: DB
          })
        })), BB.kR(JB.Zd, (BB => {
          let {
            PY: OB,
            zY: GB,
            lY: DB
          } = BB;
          YB().removeItemName(OB, GB), (0, yB.d)().client.inventoryPrediction.serverChangeApplied(DB)
        })), BB.kR(JB.Yd, (BB => {
          let {
            IQ: YB
          } = BB;
          GB.craftingManager.removeRecipes(OB.EX, YB), NB.o.tM("craftingRecipesEdited", {
            itemName: YB,
            recipesForItem: []
          })
        }))
      }
    }
    var sB = GB(6991),
      xB = GB(38282),
      tB = GB(363),
      BO = GB.n(tB),
      OO = GB(4936),
      GO = GB(38351),
      YO = GB(38925),
      DO = GB(38280);
    class QO {
      constructor(BB, OB) {
        this.kz = BB, this.setUpQueuedEntity = OB
      }
      register(BB) {
        const OB = this.kz,
          GB = (0, yB.d)();
        BB.kR(JB.xf, (BB => {
          let {
            dO: GB,
            KO: DB,
            uO: QB,
            mO: oB
          } = BB;
          const jB = [DB, QB, oB];
          OB.DW.setPosition(OB.EX, jB), (0, YB.sendColyMessage)(JB.ch, {
            TM: GB,
            bM: OO.g
          }), NB.o.tM("localPlayerTeleported", {
            pos: jB,
            isCorrection: !1
          })
        })), BB.kR(JB.ud, (BB => {
          let {
            XG: OB,
            wG: GB,
            cG: YB,
            hG: DB
          } = BB;
          this.setUpQueuedEntity(OB);
          const QB = [GB, YB, DB];
          NB.o.tM(`otherPlayerTeleported|${OB}`, {
            pos: QB
          })
        })), BB.kR(JB.Id, (BB => {
          let {
            jD: GB,
            yD: DB,
            JD: QB,
            MD: oB,
            PD: jB,
            zD: yB,
            lD: MB,
            qD: PB,
            pD: zB,
            RD: lB
          } = BB;
          const pB = [DB, QB, oB];
          OB.DW.setPosition(OB.EX, pB);
          const qB = OB.DW.AGB(OB.EX),
            ZB = OB.DW.mC(OB.EX);
          BO().set(ZB.eT, 0, 0, 0), BO().set(ZB.YC, 0, 0, 0), BO().set(ZB.lZ, jB, yB, MB), ZB.JC(), qB._flying = null !== lB, lB ? (qB.flyAccel.WD = lB.WD, qB.flyAccel.AD = lB.AD) : qB.flyAccel.reset(), PB && qB.movementType === sB.n.GLIDING && (qB.ZD = PB.ZD, BO().copy(qB.ND, PB.ND)), (0, YB.sendColyMessage)(JB.ch, {
            TM: GB,
            bM: OO.g
          }), NB.o.tM("localPlayerTeleported", {
            pos: pB,
            isCorrection: !0
          })
        })), BB.kR(JB.gf, (BB => {
          let {
            vehicleEId: OB,
            overrides: GB
          } = BB;
          (0, yB.d)().applyRiddenVehicleSettingOverrides(OB, GB)
        })), BB.kR(JB.Kf, (BB => {
          let {
            FQ: GB,
            iQ: YB,
            LQ: DB
          } = BB;
          const QB = OB.DW.AGB(OB.EX).physicsState.type === sB.o.SLEEPING && GB === sB.o.DEFAULT;
          (0, yB.d)().updatePositionAndPhysics(OB.EX, {
            type: GB,
            tier: YB
          }, !0, DB), QB && (0, yB.d)().updateHeldVehicleStatus()
        })), BB.kR(JB.mb, (BB => {
          let {
            QB: GB,
            oB: YB
          } = BB;
          OB.DW.EGB(OB.EX).setPose(GB, YB)
        })), BB.kR(JB.Pe, (BB => {
          const {
            DP: GB,
            WYB: YB
          } = (0, xB.f)([BB[0], BB[1], BB[2]]);
          DO.b.setLookDirection(OB, GB, YB), (0, GO.u)(GB, YB);
          const DB = OB.DW.EGB(OB.EX);
          DB && (DB.heading = GB)
        })), BB.kR(JB.Se, (BB => {
          GB.client.cameraController.setCameraZoom(BB)
        })), BB.kR(JB.kf, (BB => {
          let {
            gQ: YB,
            rQ: DB
          } = BB;
          GB.shakePlayerCamera(OB.EX, YB, DB)
        })), BB.kR(JB.Fc, (BB => {
          OB.DW.EGB(OB.EX).jumpMultiplier.setMultiplierType("jumpEffectAmount", BB)
        })), (0, YB.onGameResetOnce)((() => {
          OB.DW.EGB(OB.EX).jumpMultiplier.setMultiplierType("jumpEffectAmount", 1)
        })), BB.kR(JB.L, (BB => {
          OB.DW.mC(OB.EX).applyImpulse(BB)
        })), BB.kR(JB.if, (BB => {
          const GB = OB.DW.mC(OB.EX);
          BO().set(GB.eT, 0, 0, 0), BO().set(GB.YC, 0, 0, 0), BO().copy(GB.lZ, BB), GB.JC()
        })), (0, YB.onGameResetOnce)((() => {
          (0, YO.setFloatingYValue)(OB.DW.getState(OB.EX, "physics"), OB.DW.f4(OB.EX), null)
        })), BB.kR(JB._b, (BB => {
          let {
            GB: GB,
            YB: YB,
            DB: DB
          } = BB;
          const QB = (0, mB.b)(GB);
          if (QB === OB.EX) {
            const BB = OB.DW.f4(OB.EX).position;
            DB ??= Math.floor(BB[1]) - 1, (0, YO.setFloatingYValue)(OB.DW.getState(OB.EX, "physics"), OB.DW.f4(OB.EX), YB ? DB : null)
          }(0, uB.c)(OB).setFloating(QB, YB, DB);
          const oB = OB.DW.getState(QB, "floating");
          oB && (oB.isFloating = YB, oB.DB = YB ? DB : null)
        }))
      }
    }

    function oO(BB, OB, GB, YB, DB) {
      let QB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (!BB.DW.cGB(BB.EX)) return console.log("Got resync inven but don't have inven component"), void OB.acknowledge(YB);
      QB && console.error("Had to sync inven"), OB.POB(YB, DB) && GB.tM("chestToggleFromServer", !1, !0), GB.tM("syncedInvenFromServer")
    }
    var jO = GB(39713),
      yO = GB(9587),
      JO = GB(39720),
      MO = GB(2057);
    var PO = GB(4914);

    function zO(BB) {
      const OB = BB.mP;
      let GB = 0,
        DB = -1,
        oB = -1 / 0,
        jB = null,
        yB = !0;
      const MB = () => {
        if (++GB % 10 !== 0) return;
        const MB = (0, YB.getLastReceivedPacketId)();
        if (MB <= DB) return;
        const [PB, zB, lB] = BB.DW.pR(BB.EX), pB = ! function(BB) {
          var OB;
          let GB = null === (OB = BB.DW.nYB(BB.EX)) || void 0 === OB ? void 0 : OB.qp;
          if (void 0 === GB) return !1;
          const YB = new Set;
          for (; void 0 !== GB && !YB.has(GB);) {
            var DB;
            YB.add(GB);
            const OB = BB.DW.getState(GB, "smoothToServerPos"),
              QB = Array.isArray(OB) ? null : null === OB || void 0 === OB ? void 0 : OB.serverPosition;
            if (QB) {
              const OB = BB.DW.pR(GB);
              if (Math.abs(OB[0] - QB[0]) > 10 || Math.abs(OB[1] - QB[1]) > 10 || Math.abs(OB[2] - QB[2]) > 10) return !0
            }
            GB = null === (DB = BB.DW.nYB(GB)) || void 0 === DB ? void 0 : DB.qp
          }
          return !1
        }(BB) && function(BB, OB, GB, YB) {
          const DB = QB.f.pP;
          for (let QB = 0; QB < BB.length; QB++) {
            const oB = BB[QB];
            if (!(0, PO.i)(OB, GB, YB, oB[0] * DB, oB[1] * DB, oB[2] * DB)) return !1
          }
          return !0
        }(OB.GZ.QP, PB, zB, lB), qB = null === jB || Math.abs(PB - jB[0]) > 8 || Math.abs(zB - jB[1]) > 8 || Math.abs(lB - jB[2]) > 8, ZB = !yB || qB || performance.now() - oB >= 1e4;
        yB = pB, pB && ZB && (DB = MB, oB = performance.now(), jB = [PB, zB, lB], (0, YB.sendColyMessage)(JB.Hg, {
          rJ: MB
        }))
      };
      return BB.on("kP", MB), () => {
        BB.off("kP", MB)
      }
    }
    var lO = GB(39726),
      pO = GB(1560),
      qO = GB(3085),
      ZO = GB(1908),
      NO = GB(3262),
      RO = GB(5269);
    class WO {
      constructor(BB, OB, GB) {
        this.kz = BB, this.gameNameWithVariation = OB, this.connectionResume = GB, this.stopChunkReports = () => {}, this.replayResume = null
      }
      clearUiRequestsAndQTEs() {
        RO.d.reset(), (0, jO.c)()
      }
      startChunkReports() {
        const BB = function(BB) {
            let OB = null,
              GB = -1 / 0,
              DB = null;
            const QB = () => {
                DB = null;
                const QB = Math.ceil(BB.WK[0]),
                  oB = Math.ceil(BB.WK[1]);
                OB && OB[0] === QB && OB[1] === oB || (OB = [QB, oB], GB = performance.now(), (0, YB.sendColyMessage)(JB.Eg, {
                  sM: QB,
                  xM: oB
                }))
              },
              oB = () => {
                null === DB && (DB = setTimeout(QB, Math.max(0, GB + 250 - performance.now())))
              };
            return QB(), BB.on("addRemoveDistanceChanged", oB), () => {
              BB.off("addRemoveDistanceChanged", oB), null !== DB && (clearTimeout(DB), DB = null)
            }
          }(this.kz.mP),
          OB = zO(this.kz);
        this.stopChunkReports = () => {
          BB(), OB()
        }
      }
      restartChunkStreaming() {
        (0, GO.j)(this.kz, (0, yB.d)().recentChunkEdits.chunksEditedSince(this.connectionResume.getDroppedAt() - lO.b)), this.startChunkReports()
      }
      register(BB) {
        const OB = this.kz,
          GB = (0, yB.d)();
        BB.kR(JB.ed, (BB => {
          RB.e.applyNewClientOptions(BB)
        })), BB.kR(JB.zd, (BB => {
          qO.b.onReceiveColyseusPing(BB)
        })), BB.kR(JB.We, (BB => {
          let {
            key: OB,
            value: GB
          } = BB;
          (0, WB.setCookie)(this.gameNameWithVariation, OB, GB)
        })), BB.kR(JB.$e, (BB => {
          NB.o.tM("setDiscordReportKey", BB)
        })), (0, YB.onGameResetOnce)((() => {
          this.stopChunkReports()
        })), BB.kR(JB.tc, (DB => {
          const {
            jB: QB,
            yB: oB
          } = DB;
          if ((0, YB.setAdjustment)(oB), this.connectionResume.onInitialInfo(DB.JB, DB.PB), YB.offlineInputReplay.Zk(DB.zB), this.connectionResume.isResuming()) {
            console.log("Resumed the connection as eId", QB);
            try {
              null === DB.lB && (0, yB.d)().client.inventoryPrediction.dropPending(), this.stopChunkReports(), dB(OB.mP), RB.e.apply({
                shopInfo: null,
                _shopVersion: MO.b
              });
              const GB = OB.DW.aGB(OB.EX);
              GB.FG && (GB.chestClosed(), NB.o.tM("chestToggleFromServer", !1, !0)), this.clearUiRequestsAndQTEs(), NB.o.tM("initInfoReceived", BB)
            } finally {
              const BB = null === DB.lB ? null : {
                sync: null,
                endSeq: null
              };
              this.replayResume = BB, this.connectionResume.onResumeInitialInfo(DB.lB, (() => {
                BB.endSeq = (0, yB.d)().client.inventoryPrediction.lastActionSeq
              })), null === BB && this.restartChunkStreaming()
            }
          } else console.log("Local client is eId", QB), NB.o.tM("sessionReplayJoinTicket", DB.NB), ZO.b.markAdmitted(), (0, GO.m)(OB), NB.o.tM("loadingScreenState", "loadingPage:loadingWorld"), OB.QGB = QB, OB.DW.YGB(OB.EX, OB.DW.names.entityName) && OB.DW.dL(OB.EX, OB.DW.names.entityName), (0, yB.d)().setEntityName(OB.QGB, (0, yB.d)().getRawEntityName(OB.EX)), OB.FX[OB.QGB] = {}, OB.DW.RL(OB.EX, OB.DW.names.entityName), NB.o.tM("initInfoReceived", BB), this.startChunkReports(), GB.client.onServerConnectionFinalised()
        })), BB.kR(JB.Ae, (() => {
          this.connectionResume.isResuming() ? this.connectionResume.onResumed((() => {
            const BB = this.replayResume;
            if (this.replayResume = null, !BB) return;
            this.restartChunkStreaming();
            const {
              inventoryPrediction: GB
            } = (0, yB.d)().client, {
              sync: DB
            } = BB, QB = new Set(YB.offlineInputReplay.takeDroppedActions());
            if (DB) {
              var oB;
              const YB = null !== (oB = BB.endSeq) && void 0 !== oB ? oB : GB.lastActionSeq;
              GB.forget((BB => BB > DB.UO && BB <= YB || QB.has(BB))), oO(OB, GB, NB.o, DB.UO, DB.load)
            } else GB.dropPending(), GB.askForSnapshot()
          })) : console.warn("ResumeComplete arrived without a resume")
        })), BB.kR(JB.rf, (BB => {
          let {
            IG: GB,
            rG: YB,
            UO: DB
          } = BB;
          const {
            inventoryPrediction: QB
          } = (0, yB.d)().client, oB = () => {
            OB.DW.aGB(OB.EX).loadFromString(GB)
          };
          this.replayResume && (this.replayResume.sync = {
            UO: DB,
            load: oB
          }), oO(OB, QB, NB.o, DB, oB, YB)
        })), BB.kR(JB.Od, (BB => {
          let {
            type: OB,
            location1: GB,
            location2: YB,
            location3: DB,
            score: QB
          } = BB;
          (0, NO.logProgressionEvent)({
            type: OB,
            location1: GB,
            location2: YB,
            location3: DB,
            score: QB
          })
        })), BB.kR(JB.ye, (BB => {
          let {
            type: OB,
            resourceType: GB,
            amount: YB,
            category: DB,
            itemName: QB
          } = BB;
          (0, NO.logResourceEvent)({
            type: OB,
            resourceType: GB,
            amount: YB,
            category: DB,
            itemName: QB
          })
        })), BB.kR(JB.Oc, (BB => {
          let {
            leaveEventType: OB,
            category: GB,
            subCategory: YB,
            value: DB
          } = BB;
          (0, NO.updateLeaveValue)({
            leaveEventType: OB,
            category: GB,
            subCategory: YB,
            value: DB
          })
        })), BB.kR(JB.Mb, (BB => {
          let {
            cat1: OB,
            cat2: GB,
            cat3: YB,
            value: DB
          } = BB;
          (0, NO.logCustomAnalyticsEvent)({
            cat1: OB,
            cat2: GB,
            cat3: YB,
            value: DB
          })
        })), BB.kR(JB.Ic, (BB => {
          (0, yB.d)().client.leaveGameUnwanted({
            reason: (0, yO.b)(BB),
            requiresRefresh: !1,
            canReconnect: !1,
            automaticallyReconnect: !1
          }), (0, pO.navigatePreserveSearch)("/")
        })), BB.kR(JB.Je, (BB => {
          NB.o.tM("serverUpdating", Date.now() + BB, !0)
        })), BB.kR(JB.ad, JO.d), BB.kR(JB.Yc, (BB => {
          console.error(`[logErrorToConsole]: ${BB}`)
        }))
      }
    }
    var AO = GB(39730),
      VO = GB(39741),
      SO = GB(1049),
      nO = GB(39732),
      UO = GB(2643),
      fO = GB(4073);
    class kO {
      constructor(BB, OB) {
        this.kz = BB, this.clientApi = OB
      }
      register(BB) {
        const OB = this.kz,
          GB = (0, yB.d)();
        BB.kR(JB.ub, (BB => {
          let {
            chatMsgId: OB,
            worldCodeLineId: GB,
            content: YB,
            chatterEId: DB,
            chatterObjectsToReplay: QB
          } = BB;
          NB.o.tM("chat", {
            serverChatMsgId: OB,
            worldCodeLineId: GB,
            content: YB,
            chatterEId: DB,
            chatterObjectsToReplay: QB
          }, !0)
        })), BB.kR(JB.qb, (BB => {
          let {
            chatMsgId: OB
          } = BB;
          NB.o.tM("chatRemoved", OB, !0)
        })), BB.kR(JB.Af, (BB => {
          NB.o.tM("TopRightHelper", BB, !0)
        })), BB.kR(JB.uf, (BB => {
          (0, AO.e)(BB)
        })), BB.kR(JB.Kc, (BB => {
          let {
            category: OB,
            timeframe: GB,
            data: YB
          } = BB;
          NB.o.tM("leaderboardResponse", {
            category: OB,
            timeframe: GB,
            data: YB
          })
        })), BB.kR(JB.nf, (() => {
          NB.o.tM("showShopTutorial", null, !0)
        })), BB.kR(JB.Md, (BB => {
          NB.o.tM("progressBarUpdate", BB, !0)
        })), BB.kR(JB.wc, (BB => {
          NB.o.tM("middleScreenBarInitiate", {
            duration: BB.tG,
            BY: BB.BY,
            horizBarRemOffset: BB.OY
          }, !0)
        })), BB.kR(JB.be, (() => {
          NB.o.tM("middleScreenBarRemove", !0)
        })), BB.kR(JB._e, (BB => {
          let {
            id: OB,
            position: GB,
            style: YB,
            DO: DB,
            oO: QB
          } = BB;
          NB.o.tM("setDirectionArrow", {
            id: OB,
            position: GB,
            style: YB,
            text: (0, JB.x)(DB),
            oO: QB
          }, !0)
        })), BB.kR(JB.Bb, (BB => {
          let {
            id: OB
          } = BB;
          NB.o.tM("clearDirectionArrow", {
            id: OB
          }, !0)
        })), BB.kR(JB.Jb, (BB => {
          (0, fO.onCosmeticPackGranted)(BB)
        })), BB.kR(JB.nd, (BB => {
          let {
            id: OB,
            IO: GB
          } = BB;
          const {
            type: DB,
            params: QB
          } = (0, VO.f)(GB), oB = {
            ...QB
          };
          for (const YB of VO.d) YB in oB && oB[YB] && (oB[YB] = (0, JB.x)(oB[YB]));
          RO.d.queueQTE(OB, DB, oB).getResult().then((BB => {
            "boolean" === typeof BB && (0, YB.sendColyMessage)(JB.zi, {
              qteId: OB,
              qteResponse: BB
            })
          }))
        })), BB.kR(JB.ee, (BB => {
          RO.d.cancelQTE(BB)
        })), (0, YB.onGameResetOnce)((() => {
          RO.d.reset()
        })), BB.kR(JB.rd, (BB => {
          let {
            id: OB,
            clientParameters: GB
          } = BB;
          (0, jO.d)(OB, GB)
        })), BB.kR(JB.fe, (BB => {
          (0, jO.f)(BB)
        })), BB.kR(JB.Gf, (BB => {
          let {
            text: OB,
            id: GB,
            destructive: DB
          } = BB;
          (0, jO.j)(GB, OB, DB, (BB => {
            (0, YB.sendColyMessage)(JB.Tj, {
              RM: GB,
              WM: BB,
              AM: 5
            })
          }))
        })), BB.kR(JB.vd, (BB => {
          let {
            info: OB
          } = BB;
          NB.o.tM("overShopInfo", OB, !0)
        })), BB.kR(JB.gc, (BB => {
          let {
            fO: GB,
            kO: YB
          } = BB;
          this.clientApi.openShop(OB.EX, GB, YB)
        })), BB.kR(JB.dc, (BB => {
          let {
            RB: OB,
            VB: GB,
            SB: YB
          } = BB;
          NB.o.tM("flyingMiddleMessage", {
            content: (0, JB.x)(OB),
            VB: GB,
            SB: YB
          }, !0)
        })), BB.kR(JB.Of, (BB => {
          const OB = BB === SO.d ? null : {
            message: `Currently loaded as variation: ${BB}`,
            type: "Warning"
          };
          NB.o.tM("showPermanentBottomMessage", OB, !0)
        })), BB.kR(JB.jc, (BB => {
          let {
            messageType: OB,
            data: YB
          } = BB;
          (0, nO.g)(OB) ? (0, nO.c)(OB, YB) : ("freeCamPerms" === OB && GB.client.freeCameraController.setPerms(YB.key, YB.value), GB.client.triggerGameCallback("onReceivedMessageFromServer", OB, YB))
        })), BB.kR(JB.Db, UO.i)
      }
    }
    class dO {
      constructor(BB, OB, GB, YB) {
        this.gameNameWithVariation = BB, this.kz = GB, this.connectionResume = YB, this.stateReplicationHandler = void 0, this.stateReplicationHandler = new VB.d(OB, this.kz)
      }
      setupStateReplicationHandlers() {
        this.stateReplicationHandler.setup(), (0, YB.onGameResetOnce)((() => {
          this.stateReplicationHandler.dispose()
        }))
      }
      bMB(BB) {
        this.stateReplicationHandler.dispose(), this.stateReplicationHandler = new VB.d(BB, this.kz), this.stateReplicationHandler.setup()
      }
      setupOnMessageListeners(BB, OB) {
        const GB = this.kz,
          YB = BB => {
            this.stateReplicationHandler.setUpIfQueued(BB)
          };
        new WO(GB, this.gameNameWithVariation, this.connectionResume).register(BB), new KB(GB).register(BB), new vB(GB).register(BB), new LB(GB, YB).register(BB), new bB(GB, YB).register(BB), new kO(GB, OB).register(BB), new QO(GB, YB).register(BB)
      }
    }
    window.addEventListener("beforeunload", (() => {}));
    var KO = GB(39748),
      uO = GB(39757),
      mO = GB(677),
      IO = GB(1856);
    class FO {
      constructor(BB, OB, GB, YB) {
        this.msgHandler = GB, this.listener = YB, this.session = void 0, this.attachedRoom = null, this.detachRoomListeners = null, this.suspended = !1, this.droppedAt = 0, this.session = new KO.d({
          reconnect: BB,
          isLive: () => YB.isLive(),
          onReconnected: BB => {
            this.resumeOnRoom(BB)
          },
          onGaveUp: (BB, OB) => {
            YB.onGaveUp(BB, OB)
          },
          freeze: OB,
          releaseSeat: OB => {
            BB(OB).then((BB => {
              BB.leave(!0)
            }), (BB => {
              console.warn("Couldn't release the held seat of a game left while reconnecting", BB)
            }))
          }
        })
      }
      onInitialInfo(BB, OB) {
        this.session.onInitialInfo(BB, OB)
      }
      isResuming() {
        return this.session.isResuming()
      }
      getDroppedAt() {
        return this.droppedAt
      }
      onResumeInitialInfo(BB, OB) {
        if (this.session.onResuming(), null === BB) {
          try {
            (0, yB.d)().client.itemDropPrediction.reset()
          } catch (GB) {
            console.error("Error dropping the item drop predictions on resuming", GB)
          }
          return YB.offlineInputReplay.discard(), void this.setSuspended(!1)
        }(0, yB.d)().client.itemDropPrediction.onResumeReplayOffered(), YB.offlineInputReplay.replayFrom(BB.qB, OB)
      }
      onResumed(BB) {
        this.setSuspended(!1), (0, YB.resendBeacons)();
        try {
          BB()
        } catch (OB) {
          console.error("Error completing the resume", OB)
        } finally {
          this.session.onResumed()
        }
      }
      attachRoom(BB) {
        const OB = (0, mO.onVisitSessionGameServerConnected)((() => BB.connection.isOpen));
        BB.uR(OB);
        const GB = new uO.d((() => {
          this.session.canHoldSeat() && this.listener.isLive() && (console.warn("The game server went silent, reconnecting"), this.onConnectionDropped(BB, "silent"), BB.leave(!1))
        }));
        BB.onStateChange((() => {
          GB.heard()
        }));
        const YB = OB => {
          OB.persisted || BB.leave(!0)
        };
        window.addEventListener("pagehide", YB), BB.uR(((OB, GB) => {
          if (BB === this.attachedRoom && this.listener.isLive()) return (0, QB.j)(OB) && this.session.canHoldSeat() ? (console.warn(`Connection to the game server dropped with code ${OB}, reconnecting`), this.listener.onDropped(OB, GB), void this.onConnectionDropped(BB, String(OB))) : void this.listener.onRoomLeft(OB, GB)
        })), this.attachedRoom = BB, this.detachRoomListeners = () => {
          OB(), GB.dispose(), window.removeEventListener("pagehide", YB)
        }
      }
      dispose() {
        this.detachRoom(), this.session.leave(), this.setSuspended(!1)
      }
      setSuspended(BB) {
        BB !== this.suspended && (this.suspended = BB, (0, YB.setConnectionSuspended)(BB), (0, yB.d)().client.itemDropPrediction.setSuspended(BB))
      }
      detachRoom() {
        var BB;
        null === (BB = this.detachRoomListeners) || void 0 === BB || BB.call(this), this.detachRoomListeners = null, this.attachedRoom = null
      }
      onConnectionDropped(BB, OB) {
        (0, IO.reportClientError)("disconnect", "Left room", OB), this.isResuming() || (this.droppedAt = Date.now()), this.detachRoom(), YB.offlineInputReplay.onConnectionLost(), this.setSuspended(!0), this.session.onConnectionLost(BB.reconnectionToken)
      }
      resumeOnRoom(BB) {
        if (!this.listener.isLive()) return console.warn("Left the game while reconnecting, leaving the resumed room"), BB.leave(!0), void this.dispose();
        console.log("Reconnected to the game server, waiting for the game to resume"), (0, TB.s)(), YB.offlineInputReplay.onConnectionReplaced(), this.msgHandler.bMB(BB), this.listener.onReconnected(BB), this.attachRoom(BB)
      }
    }
    var iO = GB(3351),
      LO = GB(3355),
      gO = GB(1350),
      rO = GB(1299),
      XO = GB(5150),
      wO = GB(3573),
      EO = GB(1308),
      cO = GB(38371),
      hO = GB(39761),
      aO = GB(9599),
      eO = GB(39763),
      TO = GB(1200),
      bO = GB(37160),
      CO = GB(39769),
      HO = GB(1790),
      vO = GB(3094),
      sO = GB(1540);

    function xO(BB) {
      var OB, GB;
      if ("object" !== typeof BB || null === BB) return {
        errType: typeof BB
      };
      const YB = BB;
      return {
        errType: null !== (OB = null === (GB = BB.constructor) || void 0 === GB ? void 0 : GB.name) && void 0 !== OB ? OB : "",
        errName: "string" === typeof YB.name ? YB.name : "",
        eventType: "string" === typeof YB.type ? YB.type : "",
        errStack: "string" === typeof YB.stack ? YB.stack.split("\n").slice(1).join(" | ") : ""
      }
    }

    function tO(BB) {
      if ("undefined" !== typeof ProgressEvent && BB instanceof ProgressEvent) return !0;
      if (!(BB instanceof Error)) return !1;
      const OB = BB.code;
      return "ServerError" === BB.name && void 0 === OB || "AbortError" === BB.name || "seat reservation expired." === BB.message || "early_leave" === BB.message
    }(0, qB.q)((BB => {
      (0, IO.reportClientError)("wasm_net", BB)
    }));
    let BG = !0;

    function OG() {
      BG = !1
    }
    class GG {
      constructor(BB) {
        this.gameNameWithVariation = void 0, this.lobbyName = void 0, this.colyClient = void 0, this.userContext = void 0, this.joinedAt = null, this.joinAdHold = !1, this.checkSendPath = () => {}, this.kz = void 0, this.connectionResume = void 0, this.incomingMsgInitialisor = void 0, this.gameNameWithVariation = BB.gameNameWithVariation, this.lobbyName = BB.lobbyName, this.colyClient = BB.colyClient, this.userContext = BB.userContext
      }
      async connectToServer(BB, OB, GB) {
        RB.e.reset(), BB.FX = {
          [BB.EX]: {}
        }, BB.QGB = void 0, (0, TB.s)(), (0, yB.d)().removeAllEntityNames(), (0, yB.d)().setEntityName(BB.EX, this.userContext.getPlayerName()), (0, gO.n)({
          lobbyName: this.lobbyName
        }), console.log("Waiting for clientConnection passed promise to resolve"), this.joinAdHold = (0, HO.g)(), console.log("joining server with game", this.gameNameWithVariation, "lobbyName", this.lobbyName);
        const oB = performance.now();
        GB.aborted || (0, rO.p)("wasm_core_ready", oB);
        const jB = (0, eO.f)(this.userContext, (() => {
          const {
            roomName: YB,
            joinOptions: DB
          } = (0, AB.d)(this.userContext, this.gameNameWithVariation, this.lobbyName, OB, (BB => wO.c.isUsingCustomGameTexturePack(BB)));
          return DB.joinAdHold = this.joinAdHold, DB.renderBackend = (0, vO.c)(BB.UP), (0, hO.g)((() => this.colyClient.joinOrCreateUntil(GB, YB, DB)), GB)
        }));
        return NB.o.tM("loadingScreenState", "loadingPage:joiningLobby"), await jB.then((OB => {
          if (this.joinedAt = performance.now(), (0, rO.p)("wasm_joined", this.joinedAt), this.kz = BB, this.joinAdHold) {
            const BB = (0, HO.l)((() => {
              OB.send(DB.g), (0, rO.n)(), ZO.b.markJoinAdEnded()
            }));
            OB.uR(BB), (0, YB.onGameResetOnce)(BB)
          }
          const GB = new ZB(OB);
          this.connectionResume = new FO((BB => this.colyClient.reconnect(BB)), (OB => {
            BB.NK(OB)
          }), GB, {
            isLive: () => (0, yB.d)().client.getMsgHandler() === GB,
            onDropped: (BB, OB) => {
              (0, LO.j)(BB) || this.logUnrecognisedConnectionLoss(BB, void 0, {
                site: "drop",
                closeReason: null !== OB && void 0 !== OB ? OB : "",
                sinceJoined: this.sinceJoined()
              })
            },
            onRoomLeft: (BB, OB) => {
              this.onRoomLeft(BB, OB)
            },
            onReconnected: BB => {
              this.incomingMsgInitialisor.bMB(BB), this.checkSendPath = (0, cO.e)(GB, BB, qB.r)
            },
            onGaveUp: (BB, OB) => {
              this.onResumeGaveUp(BB, OB)
            }
          }), this.connectionResume.attachRoom(OB), (0, YB.onGameResetOnce)((() => {
            this.connectionResume.dispose()
          }));
          const QB = GB.send,
            oB = GB.kR,
            jB = GB.aYB.send,
            JB = GB.aYB.kR,
            MB = GB.eMB;
          this.checkSendPath = (0, cO.e)(GB, OB, qB.r);
          const PB = setInterval((() => {
            QB === GB.send && oB === GB.kR && jB === GB.aYB.send && JB === GB.aYB.kR && MB === GB.eMB || OG(), this.checkSendPath()
          }), 1e4);
          return (0, YB.onGameResetOnce)((() => {
            clearInterval(PB)
          })), {
            success: !0,
            successDetails: GB
          }
        })).catch((OB => {
          if (GB.aborted && OB === (0, TO.i)(GB)) return {
            success: !1,
            failDetails: {
              reason: "Left the game while it loaded",
              requiresRefresh: !1,
              canReconnect: !1
            }
          };
          if (OB instanceof bO.d) return console.warn("Seat request timed out", this.lobbyName, this.gameNameWithVariation), {
            success: !1,
            failDetails: {
              reason: OB.message,
              requiresRefresh: !1,
              canReconnect: !1,
              gameServerUnreachable: "timedOut",
              joinFailure: (0, CO.c)(OB, OB.leg)
            }
          };
          BB.fq(`Failed to connect to bloxd room, check your internet connection. lobbyName: ${this.lobbyName}, gameNameWithVariation: ${this.gameNameWithVariation} code: ${OB.code}\n`, OB);
          const YB = OB.code;
          return YB === QB.c.serverUpdating.code ? (this.goToUpdateWaiting(), {
            success: !1,
            failDetails: {
              reason: QB.c.serverUpdating.text,
              requiresRefresh: !1,
              canReconnect: !0,
              goesToUpdateWaiting: !0
            }
          }) : {
            success: !1,
            failDetails: {
              ...this.onConnectionToServerLost(YB, OB.message, {
                site: "join",
                sinceJoinStart: (0, LO.c)(performance.now() - oB),
                ...xO(OB)
              }, tO(OB)),
              rematch: (0, hO.e)(OB),
              gameRefused: (0, aO.c)(OB),
              joinFailure: (0, CO.c)(OB, this.colyClient.legReached())
            }
          }
        }))
      }
      setupServerListeners(BB, OB, GB) {
        NB.o.tM("loadingScreenState", "loadingPage:loadingPlayerInfo"), this.incomingMsgInitialisor = new dO(this.gameNameWithVariation, OB.aYB, BB, this.connectionResume), this.incomingMsgInitialisor.setupStateReplicationHandlers();
        const DB = OB.sMB();
        this.incomingMsgInitialisor.setupOnMessageListeners(DB, GB), (0, YB.onConnectionToServerReady)(DB, OB), this.joinAdHold && ZO.b.markAdmissionAwaited(), DB.finishRegistration()
      }
      dispose() {
        this.connectionResume.dispose()
      }
      onResumeGaveUp(BB, OB) {
        (0, EO.kq)(new Error("Reconnect failed"), {
          ...(0, iO.j)(OB),
          game: this.gameNameWithVariation
        }), (0, IO.reportClientError)("disconnect", "Reconnect failed", OB.reason), (0, yB.d)().client.leaveGameUnwanted({
          reason: {
            translationKey: "general:lostConnection"
          },
          canReconnect: !BB,
          canPlayAgain: BB,
          requiresRefresh: !1,
          automaticallyReconnect: !1
        }), (0, pO.navigatePreserveSearch)("/")
      }
      sinceJoined() {
        return null === this.joinedAt ? "" : (0, LO.c)(performance.now() - this.joinedAt)
      }
      onRoomLeft(BB, OB) {
        var GB;
        if (BB === QB.c.gameOrPluginKick.code) return;
        if (console.log(`Left room with code ${BB}`), BB === QB.c.serverUpdating.code) return (0, IO.reportClientError)("disconnect", "Left room", "serverUpdating"), (0, yB.d)().client.leaveGame(this.getUpdateWaitingUrl()), void this.goToUpdateWaiting();
        this.kz.fq(`Kicked from server with code ${BB}`, new Error);
        const YB = Object.keys(QB.c).find((OB => QB.c[OB].code === BB));
        (0, IO.reportClientError)("disconnect", "Left room", null !== YB && void 0 !== YB ? YB : String(BB)), sO.b.leftGame(this.gameNameWithVariation, BB);
        const DB = this.onConnectionToServerLost(BB, void 0, {
          site: "leave",
          closeReason: null !== OB && void 0 !== OB ? OB : "",
          sinceJoined: this.sinceJoined()
        });
        (0, yB.d)().client.leaveGameUnwanted({
          reason: `You have disconnected from the server.\n${DB.reason}`,
          canReconnect: DB.canReconnect,
          requiresRefresh: DB.requiresRefresh,
          automaticallyReconnect: null !== (GB = DB.automaticallyReconnect) && void 0 !== GB && GB
        }), (0, pO.navigatePreserveSearch)("/")
      }
      getUpdateWaitingUrl() {
        return (0, XO.G)(this.gameNameWithVariation, this.lobbyName)
      }
      goToUpdateWaiting() {
        (0, pO.navigatePreserveSearch)(this.getUpdateWaitingUrl())
      }
      onConnectionToServerLost(BB, OB, GB) {
        var YB;
        let DB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (null !== (YB = OB) && void 0 !== YB && YB.endsWith(QB.m) && (this.userContext.invalidateTrafficCode(), OB = OB.replace(QB.m, "")), BB === QB.c.outdatedVersion.code) return console.error("Outdated client with version ", oB.b, ", refreshing page"), (0, WB.reloadBloxd)(), {
          reason: "Outdated client",
          requiresRefresh: !0,
          canReconnect: !1
        };
        if (BB === QB.c.loadRecaptchaError.code) return console.error("Load recaptcha error, refreshing page"), (0, WB.reloadBloxd)(), {
          reason: "Failed to load recaptcha",
          requiresRefresh: !0,
          canReconnect: !1
        };
        for (const oB in QB.c) {
          const {
            code: GB,
            text: YB,
            canReconnect: DB
          } = QB.c[oB];
          if (GB === BB) {
            console.log("matched known error", BB, "leaving game");
            return {
              reason: "" !== YB ? YB : OB || `Code: ${BB}`,
              requiresRefresh: !1,
              canReconnect: DB,
              automaticallyReconnect: GB === QB.c.customGameUpdated.code || GB === QB.c.duplicateLobbyNameError.code
            }
          }
        }
        return console.log("Didn't match known error, leaving game"), (0, LO.f)(BB) || DB ? console.warn("Connection lost", BB, OB) : this.logUnrecognisedConnectionLoss(BB, OB, GB), {
          reason: `Either your internet isn't working or this is a bug.\nCode: ${BB}`,
          requiresRefresh: !1,
          canReconnect: !1,
          gameServerUnreachable: DB ? "failed" : void 0
        }
      }
      logUnrecognisedConnectionLoss(BB, OB, GB) {
        (0, EO.kq)(new Error("Unrecognised connection loss"), {
          code: String(BB),
          cause: null !== OB && void 0 !== OB ? OB : "",
          ...GB,
          game: this.gameNameWithVariation,
          ...(0, LO.l)()
        })
      }
    }
  },
  39667: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => bG,
      g: () => tG
    });
    var YB, DB, QB, oB, jB, yB, JB, MB, PB, zB, lB, pB, qB, ZB, NB, RB, WB, AB, VB, SB, nB, UB, fB, kB, dB, KB, uB, mB, IB, FB, iB, LB, gB, rB, XB, wB, EB, cB, hB, aB, eB, TB, bB, CB, HB, vB, sB, xB, tB, BO, OO, GO, YO, DO, QO, oO, jO, yO, JO, MO, PO, zO, lO, pO, qO, ZO, NO, RO, WO, AO, VO, SO, nO, UO, fO, kO, dO, KO, uO, mO, IO, FO, iO, LO, gO, rO, XO, wO, EO, cO, hO, aO, eO, TO, bO, CO, HO, vO, sO, xO = GB(25),
      tO = GB(37839),
      BG = GB(39684),
      OG = GB(39686),
      GG = GB(9828),
      YG = GB(635),
      DG = GB(633),
      QG = GB(37486);
    let oG = (YB = (0, GG.type)("number"), DB = (0, GG.type)("number"), QB = (0, GG.type)("number"), oB = (0, GG.type)("number"), jB = (0, GG.type)("number"), yB = (0, GG.type)("number"), JB = (0, GG.type)("string"), MB = class extends GG.Schema {
        constructor() {
          super(...arguments), (0, BG.d)(this, "id", PB, this), (0, BG.d)(this, "amount", zB, this), (0, BG.d)(this, "x", lB, this), (0, BG.d)(this, "y", pB, this), (0, BG.d)(this, "z", qB, this), (0, BG.d)(this, "size", ZB, this), (0, BG.d)(this, "attributes", NB, this)
        }
      }, PB = (0, OG.b)(MB.prototype, "id", [YB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), zB = (0, OG.b)(MB.prototype, "amount", [DB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), lB = (0, OG.b)(MB.prototype, "x", [QB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), pB = (0, OG.b)(MB.prototype, "y", [oB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), qB = (0, OG.b)(MB.prototype, "z", [jB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), ZB = (0, OG.b)(MB.prototype, "size", [yB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 1
        }
      }), NB = (0, OG.b)(MB.prototype, "attributes", [JB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "{}"
        }
      }), MB),
      jG = (RB = (0, GG.type)("string"), WB = (0, GG.type)("string"), AB = class extends GG.Schema {
        constructor() {
          super(...arguments), (0, BG.d)(this, "itemName", VB, this), (0, BG.d)(this, "enchantmentTier", SB, this)
        }
      }, VB = (0, OG.b)(AB.prototype, "itemName", [RB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), SB = (0, OG.b)(AB.prototype, "enchantmentTier", [WB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), AB),
      yG = (nB = (0, GG.type)("string"), UB = (0, GG.type)("string"), fB = (0, GG.type)("number"), kB = (0, GG.type)("number"), dB = (0, GG.type)("number"), KB = (0, GG.type)("float32"), uB = (0, GG.type)("float32"), mB = (0, GG.type)("float32"), IB = (0, GG.type)("string"), FB = (0, GG.type)(["number"]), iB = (0, GG.type)("boolean"), LB = class extends GG.Schema {
        constructor() {
          super(...arguments), (0, BG.d)(this, "type", gB, this), (0, BG.d)(this, "name", rB, this), (0, BG.d)(this, "x", XB, this), (0, BG.d)(this, "y", wB, this), (0, BG.d)(this, "z", EB, this), (0, BG.d)(this, "xRotation", cB, this), (0, BG.d)(this, "yRotation", hB, this), (0, BG.d)(this, "zRotation", aB, this), (0, BG.d)(this, "followingEId", eB, this), (0, BG.d)(this, "followingOffset", TB, this), (0, BG.d)(this, "shouldMatchFollowingEntityRotation", bB, this)
        }
      }, gB = (0, OG.b)(LB.prototype, "type", [nB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), rB = (0, OG.b)(LB.prototype, "name", [UB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return ""
        }
      }), XB = (0, OG.b)(LB.prototype, "x", [fB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), wB = (0, OG.b)(LB.prototype, "y", [kB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), EB = (0, OG.b)(LB.prototype, "z", [dB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), cB = (0, OG.b)(LB.prototype, "xRotation", [KB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), hB = (0, OG.b)(LB.prototype, "yRotation", [uB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), aB = (0, OG.b)(LB.prototype, "zRotation", [mB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), eB = (0, OG.b)(LB.prototype, "followingEId", [IB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), TB = (0, OG.b)(LB.prototype, "followingOffset", [FB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new GG.ArraySchema(0, 0, 0)
        }
      }), bB = (0, OG.b)(LB.prototype, "shouldMatchFollowingEntityRotation", [iB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !0
        }
      }), LB),
      JG = (CB = (0, GG.type)("float32"), HB = (0, GG.type)("float32"), vB = (0, GG.type)("boolean"), sB = (0, GG.type)("boolean"), xB = (0, GG.type)("float32"), tB = (0, GG.type)("boolean"), BO = (0, GG.type)("string"), OO = (0, GG.type)("string"), GO = (0, GG.type)("string"), YO = (0, GG.type)("string"), DO = (0, GG.type)(["number"]), QO = (0, GG.type)("number"), oO = (0, GG.type)({
        map: jG
      }), jO = class extends yG {
        constructor() {
          super(...arguments), (0, BG.d)(this, "scale", yO, this), (0, BG.d)(this, "speed", JO, this), (0, BG.d)(this, "jumping", MO, this), (0, BG.d)(this, "crouching", PO, this), (0, BG.d)(this, "cameraPitch", zO, this), (0, BG.d)(this, "armSwinging", lO, this), (0, BG.d)(this, "heldItemName", pO, this), (0, BG.d)(this, "heldItemEnchantmentTier", qO, this), (0, BG.d)(this, "pose", ZO, this), (0, BG.d)(this, "ridingVehicleEId", NO, this), (0, BG.d)(this, "meshOffset", RO, this), (0, BG.d)(this, "baseRenderHeading", WO, this), (0, BG.d)(this, "armour", AO, this)
        }
      }, yO = (0, OG.b)(jO.prototype, "scale", [CB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 1
        }
      }), JO = (0, OG.b)(jO.prototype, "speed", [HB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), MO = (0, OG.b)(jO.prototype, "jumping", [vB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), PO = (0, OG.b)(jO.prototype, "crouching", [sB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), zO = (0, OG.b)(jO.prototype, "cameraPitch", [xB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), lO = (0, OG.b)(jO.prototype, "armSwinging", [tB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), pO = (0, OG.b)(jO.prototype, "heldItemName", [BO], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), qO = (0, OG.b)(jO.prototype, "heldItemEnchantmentTier", [OO], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), ZO = (0, OG.b)(jO.prototype, "pose", [GO], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "standing"
        }
      }), NO = (0, OG.b)(jO.prototype, "ridingVehicleEId", [YO], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), RO = (0, OG.b)(jO.prototype, "meshOffset", [DO], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new GG.ArraySchema(0, 0, 0)
        }
      }), WO = (0, OG.b)(jO.prototype, "baseRenderHeading", [QO], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), AO = (0, OG.b)(jO.prototype, "armour", [oO], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new GG.MapSchema
        }
      }), jO),
      MG = (VO = (0, GG.type)("string"), SO = (0, GG.type)("string"), nO = (0, GG.type)("string"), UO = (0, GG.type)("uint8"), fO = class extends JG {
        constructor() {
          super(...arguments), (0, BG.d)(this, "variation", kO, this), (0, BG.d)(this, "ownerDbId", dO, this), (0, BG.d)(this, "metaInfo", KO, this), (0, BG.d)(this, "aiState", uO, this)
        }
      }, kO = (0, OG.b)(fO.prototype, "variation", [VO], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "default"
        }
      }), dO = (0, OG.b)(fO.prototype, "ownerDbId", [SO], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), KO = (0, OG.b)(fO.prototype, "metaInfo", [nO], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return ""
        }
      }), uO = (0, OG.b)(fO.prototype, "aiState", [UO], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), fO);
    mO = (0, GG.type)("string"), IO = (0, GG.type)("string"), FO = (0, GG.type)("string"), iO = (0, GG.type)("string"), LO = class extends yG {
      constructor() {
        super(...arguments), (0, BG.d)(this, "meshKind", gO, this), (0, BG.d)(this, "meshOpts", rO, this), (0, BG.d)(this, "pose", XO, this), (0, BG.d)(this, "leaderboardTop", wO, this)
      }
    }, gO = (0, OG.b)(LO.prototype, "meshKind", [mO], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), rO = (0, OG.b)(LO.prototype, "meshOpts", [IO], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), XO = (0, OG.b)(LO.prototype, "pose", [FO], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), wO = (0, OG.b)(LO.prototype, "leaderboardTop", [iO], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    });

    function PG(BB) {
      return Object.keys(GG.Metadata.getFields(BB))
    }
    const zG = PG(MG);
    for (const BY of YG.s)
      if (!zG.includes(BY)) throw new Error(`Mob Schema is missing a networked property: "${BY}"`);
    const lG = PG((EO = (0, GG.type)("string"), cO = (0, GG.type)("float32"), hO = (0, GG.type)("float32"), aO = (0, GG.type)("float32"), eO = (0, GG.type)("float32"), TO = class extends yG {
      constructor() {
        super(...arguments), (0, BG.d)(this, "soundName", bO, this), (0, BG.d)(this, "volume", CO, this), (0, BG.d)(this, "refDistance", HO, this), (0, BG.d)(this, "maxHearDist", vO, this), (0, BG.d)(this, "rate", sO, this)
      }
    }, bO = (0, OG.b)(TO.prototype, "soundName", [EO], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return ""
      }
    }), CO = (0, OG.b)(TO.prototype, "volume", [cO], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return 1
      }
    }), HO = (0, OG.b)(TO.prototype, "refDistance", [hO], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return QG.g
      }
    }), vO = (0, OG.b)(TO.prototype, "maxHearDist", [aO], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return QG.c
      }
    }), sO = (0, OG.b)(TO.prototype, "rate", [eO], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return 1
      }
    }), TO));
    for (const BY of DG.h)
      if (!lG.includes(BY)) throw new Error(`AudioEntity Schema is missing a replicated property: "${BY}"`);
    var pG = GB(39099),
      qG = GB(1238),
      ZG = GB(641),
      NG = GB(38879),
      RG = GB(4642),
      WG = GB(353),
      AG = GB(37885),
      VG = GB(38771),
      SG = GB(2392),
      nG = GB(37857),
      UG = GB(39123),
      fG = GB(38272),
      kG = GB(363),
      dG = GB.n(kG),
      KG = GB(38623),
      uG = GB(37763),
      mG = GB(38751),
      IG = GB(38789);
    class FG {
      constructor(BB, OB) {
        this.bloxd = BB, this.eId = OB, this.kz = void 0, this.colyseusEntity = void 0, this.canSeeSub = void 0, this.canAttackSub = void 0, this.interactableSub = void 0, this.overlayColourSub = void 0, this.opacitySub = void 0, this.zIndexSub = void 0, this.multilineTextBoxSub = void 0, this.previousHidingMeshManagerState = void 0, this.meshKind = void 0, this.meshOpts = void 0, this.leaderboardTop = void 0, this.meshRebuildQueued = !1, this.Vp = !1, this.kz = BB.kz
      }
      initClient(BB) {
        var OB, GB, YB;
        this.colyseusEntity = BB, this.meshKind = BB.meshKind, this.meshOpts = BB.meshOpts, this.leaderboardTop = BB.leaderboardTop, this.kz.DW.add([BB.x, BB.y, BB.z], 1, 1, null, null, !1, !1, this.eId), this.kz.DW.RL(this.eId, "smoothToServerPos");
        const DB = "Person" === this.meshKind;
        this.kz.DW.RL(this.eId, "meshRotation", {
          isServerControlled: !0,
          ...DB ? {
            defaultRotationsPerSecond: .5
          } : {},
          childrenNodeParams: DB ? [{
            nodeName: "HeadMesh",
            softTolerance: UG.k,
            hardTolerance: null
          }] : []
        }), this.updateHidingMeshMgr(), this.canSeeSub = xO.o.subscribe(`otherEntitySettings|${this.eId}|canSee`, (BB => {
          this.updateHidingMeshMgr()
        }));
        const QB = () => {
          const BB = this.kz.DW.iGB(this.eId);
          if (!BB) return;
          const OB = (0, fG.l)(this.eId);
          if ("number" === typeof BB.uF) {
            var GB, YB, DB, QB;
            const oB = null === (GB = (0, SG.n)("head", null === (DB = this.getSpec()) || void 0 === DB || null === (QB = DB.opts.textures) || void 0 === QB ? void 0 : QB.head)) || void 0 === GB || null === (YB = GB.personModel) || void 0 === YB ? void 0 : YB.fullBody;
            return this.kz.UP.kF.setPickable(BB.uF, OB && !oB), void(0, uG.updatePersonAttachmentPickability)(this.kz, this.eId, OB)
          }
          const oB = BB.mesh;
          if (oB)
            for (const jB of [oB, ...oB.getChildMeshes(!1)]) "bq" in jB && !jB.name.startsWith("Cape|") && (jB.bq = OB)
        };
        this.canAttackSub = xO.o.subscribe(`otherEntitySettings|${this.eId}|canAttack`, QB), this.interactableSub = xO.o.subscribe(`otherEntitySettings|${this.eId}|interactable`, QB), this.overlayColourSub = xO.o.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|overlayColour`, (BB => {
          this.updateOverlayColour(BB)
        })), this.opacitySub = xO.o.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|opacity`, (BB => {
          this.updateOpacity(BB)
        })), this.zIndexSub = xO.o.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|zIndex`, (BB => {
          this.updateZIndex(BB)
        }));
        const oB = this.kz.FX[this.kz.EX][this.eId];
        this.updateOverlayColour(null !== (OB = null === oB || void 0 === oB ? void 0 : oB.overlayColour) && void 0 !== OB ? OB : null), this.updateOpacity(null !== (GB = null === oB || void 0 === oB ? void 0 : oB.opacity) && void 0 !== GB ? GB : 1), this.updateZIndex(null !== (YB = null === oB || void 0 === oB ? void 0 : oB.zIndex) && void 0 !== YB ? YB : 0), this.multilineTextBoxSub = (0, nG.w)(this.kz, this.eId)
      }
      onChangeClient(BB, OB) {
        if ("xRotation" === BB || "yRotation" === BB || "zRotation" === BB)(0, nG.x)(this.kz, this.eId, BB, OB);
        else if ("pose" === BB) {
          const BB = this.kz.DW.EGB(this.eId);
          BB && (BB.pose = OB || "standing")
        } else "meshKind" === BB || "meshOpts" === BB ? (this[BB] = OB, this.queueMeshRebuild()) : "name" === BB && "" !== OB ? this.updateHidingMeshMgr() : "leaderboardTop" === BB && (this.leaderboardTop = OB, xO.o.tM(`leaderboardTop|${this.eId}`, OB))
      }
      disposeClient() {
        this.Vp = !0, this.kz.DW.deleteEntity(this.eId), xO.o.unsubscribe(this.canSeeSub), xO.o.unsubscribe(this.canAttackSub), xO.o.unsubscribe(this.interactableSub), xO.o.unsubscribe(this.overlayColourSub), xO.o.unsubscribe(this.opacitySub), xO.o.unsubscribe(this.zIndexSub), xO.o.unsubscribe(this.multilineTextBoxSub)
      }
      getCurrentHidingMeshMgrState() {
        var BB, OB;
        return {
          canSee: null !== (BB = null === (OB = this.kz.FX[this.kz.EX][this.eId]) || void 0 === OB ? void 0 : OB.canSee) && void 0 !== BB && BB,
          name: this.colyseusEntity.name,
          meshKind: this.meshKind,
          meshOpts: this.meshOpts
        }
      }
      updateHidingMeshMgr() {
        var BB, OB, GB;
        const {
          kz: YB
        } = this, {
          DW: DB
        } = YB, QB = this.getCurrentHidingMeshMgrState();
        if ((0, WG.Fe)(this.previousHidingMeshManagerState, QB)) return;
        if (this.previousHidingMeshManagerState = QB, DB.dL(this.eId, "hidingMeshManager"), null === (BB = YB.FX[YB.EX][this.eId]) || void 0 === BB || !BB.canSee) return;
        const oB = this.getSpec();
        if (!oB) return;
        const {
          type: jB,
          opts: yB
        } = oB;
        "Person" === jB && (yB.textures = (0, SG.q)(yB.textures)), yB.eId = this.eId, DB.RL(this.eId, "hidingMeshManager", {
          addMeshComponent: () => {
            var BB, OB, GB;
            "Leaderboard" === jB && (yB.leaderboardTop = this.leaderboardTop);
            const QB = this.bloxd.client.meshCreator.getEntityMesh(jB, yB, (BB => {
              var OB, GB;
              if ("number" === typeof BB) {
                var DB, QB, oB;
                const OB = YB.UP.kF;
                OB.setEntityId(BB, this.eId);
                const GB = "Person" === jB && (null === (DB = (0, SG.n)("head", null === (oB = yB.textures) || void 0 === oB ? void 0 : oB.head)) || void 0 === DB || null === (QB = DB.personModel) || void 0 === QB ? void 0 : QB.fullBody);
                return void OB.setPickable(BB, (0, fG.l)(this.eId) && !GB)
              }
              const JB = BB;
              for (const jB of [JB, ...JB.getChildMeshes(!1)]) void 0 === jB.bq || jB.name.startsWith("Cape|") || (jB.bq = (0, fG.l)(this.eId), jB.metadata ??= new YB.UP.Cq, jB.metadata.eId = this.eId);
              this.updateOpacity(null !== (OB = null === (GB = YB.FX[YB.EX][this.eId]) || void 0 === GB ? void 0 : GB.opacity) && void 0 !== OB ? OB : 1)
            }));
            if (!QB) return;
            const {
              uF: oB,
              mesh: JB,
              meshOffset: MB,
              nameYOffset: PB,
              modelLoaded: zB
            } = QB;
            null === zB || void 0 === zB || zB.then((() => {
              var BB;
              (null === (BB = DB.iGB(this.eId)) || void 0 === BB ? void 0 : BB.mesh) === JB && (this.previousHidingMeshManagerState = null, this.updateHidingMeshMgr())
            }));
            const lB = null === oB ? null : YB.UP.kF.yDB(oB, 0);
            if (DB.RL(this.eId, DB.names.mesh, {
                uF: oB,
                HYB: lB,
                mesh: JB,
                AyB: !1,
                sYB: "Leaderboard" !== jB,
                offset: MB.slice(),
                WyB: "ParticleEmitter" === jB && yB.followTargetMeshOffset ? BB => {
                  var OB;
                  dG().copy(BB, MB);
                  const GB = null === (OB = DB.nYB(this.eId)) || void 0 === OB ? void 0 : OB.qp,
                    YB = void 0 === GB ? null : DB.EGB(GB);
                  if (YB) {
                    var QB, oB;
                    const OB = this.bloxd.getEntityHeading(null !== (QB = YB.ridingVehicleEId) && void 0 !== QB ? QB : GB, !0),
                      DB = Math.sin(OB),
                      jB = Math.cos(OB);
                    BB[0] += YB.meshOffset[0] * jB + YB.meshOffset[2] * DB, BB[1] += YB.meshOffset[1], BB[2] += YB.meshOffset[2] * jB - YB.meshOffset[0] * DB;
                    const yB = null !== (oB = YB.ridingVehicleEId) && void 0 !== oB ? oB : null;
                    null !== yB && (0, IG.c)(this.kz, yB, BB)
                  }
                } : null
              }), "Person" === jB) {
              var pB, qB, ZB, NB;
              DB.RL(this.eId, DB.names.meshAttachments, {
                personFullBody: null !== (pB = null === (qB = (0, SG.n)("head", null === (NB = yB.textures) || void 0 === NB ? void 0 : NB.head)) || void 0 === qB || null === (ZB = qB.personModel) || void 0 === ZB ? void 0 : ZB.fullBody) && void 0 !== pB && pB
              });
              for (const BB of qG.t) {
                var RB, WB, AB;
                const OB = null === (RB = yB.textures) || void 0 === RB ? void 0 : RB[BB];
                OB && null !== (WB = (0, SG.n)(BB, OB)) && void 0 !== WB && null !== (AB = WB.attachments) && void 0 !== AB && AB.length && VG.e.Player.meshApi.updatePlayerCosmetic(this.eId, oB, BB, OB)
              }
              DB.RL(this.eId, DB.names.moveState), DB.RL(this.eId, "updateWalkingState", {
                uF: oB,
                HYB: lB,
                walkingLegSwingDuration: UG.r
              }), DB.RL(this.eId, "humanoidMesh", {
                uF: oB,
                HYB: lB,
                heldItemPositionParams: {},
                maxWalkingAngleOverride: null
              }), DB.RL(this.eId, "animator", {
                uF: oB,
                HYB: lB,
                modelLifeformType: "Player"
              }), mG.e.hasAnimation("Person") && DB.RL(this.eId, "rigAnimation", {
                target: "Person",
                uF: oB
              }), DB.EGB(this.eId).pose = this.colyseusEntity.pose || "standing"
            } else if ("BloxdBlock" === jB && null !== oB) {
              DB.RL(this.eId, "animator", {
                uF: oB,
                HYB: lB,
                modelLifeformType: null
              });
              const BB = (0, NG.u)(yB.blockName);
              null !== BB && DB.RL(this.eId, "rigAnimation", {
                target: BB,
                uF: oB
              })
            }
            DB.hyB(this.eId, "entityName", {
              name: this.colyseusEntity.name,
              nameYOffset: PB
            }), this.bloxd.setEntityName(this.eId, this.colyseusEntity.name), !0 === yB.autoRotate && (DB.dL(this.eId, "meshRotation"), DB.RL(this.eId, "autoRotate"));
            const {
              lineToEId: VB
            } = yB;
            (0, ZG.Q)(VB) || DB.RL(this.eId, "lineToEntity", {
              lineToEId: VB
            });
            const SB = YB.FX[YB.EX][this.eId];
            this.updateOverlayColour(null !== (BB = null === SB || void 0 === SB ? void 0 : SB.overlayColour) && void 0 !== BB ? BB : null), this.updateOpacity(null !== (OB = null === SB || void 0 === SB ? void 0 : SB.opacity) && void 0 !== OB ? OB : 1), this.updateZIndex(null !== (GB = null === SB || void 0 === SB ? void 0 : SB.zIndex) && void 0 !== GB ? GB : 0)
          },
          removeMeshComponent: () => {
            "Person" !== jB && "BloxdBlock" !== jB || DB.dL(this.eId, "rigAnimation"), DB.dL(this.eId, DB.names.mesh), DB.YGB(this.eId, DB.names.meshAttachments) && DB.dL(this.eId, DB.names.meshAttachments), DB.dL(this.eId, "entityName"), DB.dL(this.eId, "autoRotate"), DB.dL(this.eId, "lineToEntity"), "Person" === jB ? (DB.dL(this.eId, DB.names.moveState), DB.dL(this.eId, "updateWalkingState"), DB.dL(this.eId, "humanoidMesh"), DB.dL(this.eId, "animator")) : "BloxdBlock" === jB && DB.dL(this.eId, "animator")
          },
          hideDist: null !== (OB = yB.hideDist) && void 0 !== OB ? OB : 80,
          movingHideDist: null !== (GB = yB.hideDist) && void 0 !== GB ? GB : 120,
          displayOutsideLoadedChunk: yB.hideDist > 100,
          immediatelyUpdate: !0,
          RJ: "BloxdBlock" === jB ? yB.blockName : jB
        })
      }
      queueMeshRebuild() {
        this.meshRebuildQueued || (this.meshRebuildQueued = !0, queueMicrotask((() => {
          this.meshRebuildQueued = !1, this.Vp || this.updateHidingMeshMgr()
        })))
      }
      getSpec() {
        return (0, RG.i)({
          meshKind: this.meshKind,
          meshOpts: this.meshOpts
        })
      }
      updateOverlayColour(BB) {
        var OB, GB;
        if ("Person" !== this.meshKind) return;
        let YB = new AG.e(0, 0, 0, 0);
        if (null !== BB) {
          const OB = (0, WG.Y)(BB);
          YB = new AG.e(OB[0] / 255, OB[1] / 255, OB[2] / 255, .5)
        }
        const DB = null !== (OB = null === (GB = this.kz.DW.iGB(this.eId)) || void 0 === GB ? void 0 : GB.uF) && void 0 !== OB ? OB : null;
        null !== DB && VG.e.Player.meshApi.updateMeshOverlayColour(DB, YB)
      }
      updateZIndex(BB) {
        var OB;
        if ("Person" !== this.meshKind) return;
        const GB = null === (OB = this.kz.DW.iGB(this.eId)) || void 0 === OB ? void 0 : OB.uF;
        "number" === typeof GB && this.kz.UP.kF.setRenderingGroupId(GB, BB)
      }
      updateOpacity(BB) {
        const OB = this.kz.DW.iGB(this.eId);
        OB && ("number" !== typeof OB.uF ? OB.mesh && "ParticleEmitter" !== this.meshKind && (0, KG.h)(OB.mesh, BB) : VG.e.Player.meshApi.updateMeshOpacity(OB.uF, BB))
      }
    }
    var iG = GB(39675);
    class LG {
      constructor(BB, OB) {
        this.eId = OB, this.kz = void 0, this.schema = void 0, this.kz = BB.kz
      }
      initClient(BB) {
        this.schema = BB, this.kz.DW.add([BB.x, BB.y, BB.z], .1, .1, null, null, !1, !1, this.eId), this.kz.DW.RL(this.eId, "smoothToServerPos"), iG.d.add(this.eId, this.copyOpts())
      }
      onChangeClient(BB) {
        DG.h.includes(BB) && iG.d.update(this.eId, this.copyOpts())
      }
      disposeClient() {
        iG.d.remove(this.eId), this.kz.DW.deleteEntity(this.eId)
      }
      copyOpts() {
        const {
          soundName: BB,
          volume: OB,
          refDistance: GB,
          maxHearDist: YB,
          rate: DB
        } = this.schema;
        return {
          soundName: BB,
          volume: OB,
          refDistance: GB,
          maxHearDist: YB,
          rate: DB
        }
      }
    }
    var gG = GB(4111),
      rG = GB(37452),
      XG = GB(6991),
      wG = GB(38466),
      EG = GB(3088),
      cG = GB(38812),
      hG = GB(9784),
      aG = GB(39129),
      eG = GB(38418),
      TG = GB(1856);
    class bG {
      constructor(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
          YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => performance.now();
        this.aYB = BB, this.kz = OB, this.setupBudgetMs = GB, this.now = YB, this.createStateCallbacks = void 0, this.roomStateCallbacks = void 0, this.allItems = {}, this.detachers = new Map, this.deferredSetups = new Map, this.queuedSetups = new Map, this.promotedSetups = new Set, this.setupBudgetLeftMs = void 0, this.lastRefillMs = void 0, this.roomState = void 0, this.Vp = !1, this.onFrame = () => {
          this.setUpQueuedEntities(!0)
        }, this.yR = () => {
          this.setUpQueuedEntities(this.now() - this.lastRefillMs > 100)
        }, this.setUpPromoted = () => {
          for (const BB of this.promotedSetups) {
            this.promotedSetups.delete(BB);
            const OB = this.queuedSetups.get(BB);
            OB && (this.queuedSetups.delete(BB), this.timedSetup(OB, BB))
          }
        }, this.createStateCallbacks = (0, hG.getStateCallbacks)(BB), this.roomStateCallbacks = this.createStateCallbacks(BB.state), this.roomState = BB.state, this.setupBudgetLeftMs = GB, this.lastRefillMs = YB()
      }
      setup() {
        this.setupEntityHandlers(), this.setupItemHandlers(), this.aYB.onStateChange(this.setUpPromoted), this.kz.on("beforeInputs", this.onFrame), this.kz.on("kP", this.yR)
      }
      setUpQueuedEntities(BB) {
        var OB;
        if ((null === (OB = (0, EG.d)().client.getMsgHandler()) || void 0 === OB ? void 0 : OB.aYB) !== this.aYB) return this.kz.off("beforeInputs", this.onFrame), this.kz.off("kP", this.yR), this.queuedSetups.clear(), void this.promotedSetups.clear();
        if (BB && (this.setupBudgetLeftMs = this.setupBudgetMs, this.lastRefillMs = this.now()), this.setUpPromoted(), 0 !== this.queuedSetups.size)
          for (dG().copy(CG, this.kz.DW.pR(this.kz.EX)); this.setupBudgetLeftMs > 0;) {
            const BB = this.nearestQueued(CG);
            if (null === BB) return;
            this.setUpIfQueued(BB), this.setUpPromoted()
          }
      }
      nearestQueued(BB) {
        let OB = null,
          GB = 1 / 0;
        return this.queuedSetups.forEach(((YB, DB) => {
          const QB = function(BB, OB) {
            return (OB.x - BB[0]) ** 2 + (OB.y - BB[1]) ** 2 + (OB.z - BB[2]) ** 2
          }(BB, YB);
          (null === OB || QB < GB) && (OB = DB, GB = QB)
        })), OB
      }
      setUpOrQueue(BB, OB) {
        0 === this.queuedSetups.size && this.setupBudgetLeftMs > 0 || this.mustSetUpNow(BB, OB) ? this.timedSetup(BB, OB) : this.queuedSetups.set(OB, BB)
      }
      mustSetUpNow(BB, OB) {
        const GB = this.kz.QGB;
        if (OB === GB) return !0;
        const YB = this.roomState.entities.get(GB);
        return !(!YB || YB.ridingVehicleEId !== OB && YB.followingEId !== OB) || (HG(BB.type) === pG.c || (0, EG.d)().getFollowingEntities(OB).length > 0)
      }
      setUpIfQueued(BB) {
        const OB = this.queuedSetups.get(BB);
        OB && (this.queuedSetups.delete(BB), this.timedSetup(OB, BB))
      }
      promoteIfQueued(BB) {
        null !== BB && this.queuedSetups.has(BB) && this.promotedSetups.add(BB)
      }
      timedSetup(BB, OB) {
        const GB = this.now();
        this.setupEntity(BB, OB), this.setupBudgetLeftMs -= this.now() - GB
      }
      setupEntityHandlers() {
        this.roomStateCallbacks.entities.OW(((BB, OB) => {
          this.kz.QGB ? this.setUpOrQueue(BB, OB) : this.deferEntitySetupUntilInitInfo(BB, OB)
        })), this.roomStateCallbacks.entities.Qm(((BB, OB) => {
          const GB = this.deferredSetups.get(OB);
          GB && (xO.o.unsubscribe(GB), this.deferredSetups.delete(OB)), this.queuedSetups.delete(OB), this.detach(OB), (0, EG.d)().client.disposeEntity(OB)
        }))
      }
      deferEntitySetupUntilInitInfo(BB, OB) {
        const GB = xO.o.qN("initInfoReceived", (() => {
          this.deferredSetups.delete(OB), this.setUpOrQueue(BB, OB)
        }));
        this.deferredSetups.set(OB, GB), (0, gG.onGameResetOnce)((() => {
          this.deferredSetups.get(OB) === GB && (xO.o.unsubscribe(GB), this.deferredSetups.delete(OB)), (0, EG.d)().updatePositionAndPhysics(this.kz.EX, {
            type: XG.o.DEFAULT,
            tier: null
          }, !0), (0, EG.d)().takeHeldPlayerBodySize(this.kz.EX);
          const BB = this.kz.DW.AGB(this.kz.EX);
          BB && (BB.movementType = XG.n.NORMAL)
        }))
      }
      setupEntity(BB, OB) {
        const GB = OB === this.kz.QGB;
        if (GB)(0, EG.d)().client.A4(this.kz.EX, null, null);
        else {
          const {
            type: GB
          } = BB, YB = HG(GB);
          if (void 0 === YB) return void
          function(BB, OB) {
            const GB = String(BB);
            if (vG.has(GB)) return;
            vG.add(GB);
            const YB = GB.length > 80 ? `${GB.slice(0,80)}...` : GB,
              DB = `No client handler for entity type ${JSON.stringify(YB)}, so entity ${OB} is not set up`;
            console.warn(DB), (0, TG.reportClientError)("uncaught", DB, "unknown_entity_type")
          }(GB, OB);
          (0, EG.d)().client.A4(OB, BB, new YB((0, EG.d)(), OB, GB))
        }
        const YB = this.createStateCallbacks(BB);
        if (GB) return this.setupMapSchemaCallbacks(OB, BB, YB, "armour"), this.setupScalarField(OB, BB, YB, "scale"), this.setupScalarField(OB, BB, YB, "ridingVehicleEId"), this.setupScalarField(OB, BB, YB, "followingEId"), this.setupScalarField(OB, BB, YB, "followingOffset"), void this.setupScalarField(OB, BB, YB, "shouldMatchFollowingEntityRotation");
        for (const DB of PG(BB.constructor)) BB[DB] instanceof GG.MapSchema ? this.setupMapSchemaCallbacks(OB, BB, YB, DB) : this.setupScalarField(OB, BB, YB, DB)
      }
      setupMapSchemaCallbacks(BB, OB, GB, YB) {
        const DB = GB[YB],
          QB = new Map;
        DB.OW(((GB, DB) => {
          if (this.onEntityFieldChange(BB, OB, YB, {
              key: DB,
              value: GB
            }), !(GB instanceof GG.Schema)) return;
          const oB = this.createStateCallbacks(GB),
            jB = [];
          for (const QB of PG(GB.constructor)) jB.push(this.listenForFutureChanges(oB, QB, (() => {
            this.onEntityFieldChange(BB, OB, YB, {
              key: DB,
              value: GB
            })
          })));
          QB.set(DB, (() => {
            for (const BB of jB) BB()
          }))
        })), DB.Qm(((GB, DB) => {
          var oB;
          null === (oB = QB.get(DB)) || void 0 === oB || oB(), QB.delete(DB), this.onEntityFieldChange(BB, OB, YB, {
            key: DB,
            value: null
          })
        })), this.addDetacher(BB, (() => {
          for (const BB of QB.values()) BB();
          QB.clear()
        }))
      }
      setupScalarField(BB, OB, GB, YB) {
        this.onEntityFieldChange(BB, OB, YB, OB[YB]);
        const DB = this.listenForFutureChanges(GB, YB, (GB => {
          this.onEntityFieldChange(BB, OB, YB, GB)
        }));
        this.addDetacher(BB, DB)
      }
      addDetacher(BB, OB) {
        let GB = this.detachers.get(BB);
        GB || (GB = [], this.detachers.set(BB, GB)), GB.push(OB)
      }
      detach(BB) {
        for (const GB of null !== (OB = this.detachers.get(BB)) && void 0 !== OB ? OB : []) {
          var OB;
          GB()
        }
        this.detachers.delete(BB)
      }
      listenForFutureChanges(BB, OB, GB) {
        return BB.listen(OB, GB, !1)
      }
      onEntityFieldChange(BB, OB, GB, YB) {
        switch (GB) {
          case "ridingVehicleEId": {
            this.promoteIfQueued(YB);
            const OB = this.kz.DW.EGB((0, rG.b)(BB));
            OB && (OB.ridingVehicleEId = YB);
            break
          }
          case "armour":
            this.handleArmourChange(BB, YB);
            break;
          case "followingEId":
            this.promoteIfQueued(YB), this.handleFollowingEIdChange(BB, OB, YB);
            break;
          case "xRotation":
          case "yRotation":
          case "zRotation":
            this.handleRotationChange(BB, GB, YB);
            break;
          case "scale":
            this.handleScaleChange(BB, YB);
            break;
          case "baseRenderHeading":
            this.handleBaseRenderHeadingChange(BB, YB);
            break;
          case "followingOffset":
            this.handleFollowingOffsetChange(BB, YB);
            break;
          case "shouldMatchFollowingEntityRotation":
            this.handleShouldMatchFollowingEntityRotationChange(BB, YB);
            break;
          case "x":
          case "y":
          case "z":
            return void this.handlePositionChange(BB, GB, YB)
        }(0, EG.d)().client.updateEntityField(BB, GB, YB)
      }
      handleArmourChange(BB, OB) {
        var GB, YB;
        const {
          key: DB,
          value: QB
        } = OB;
        (0, VG.D)(BB, DB, null !== (GB = null === QB || void 0 === QB ? void 0 : QB.itemName) && void 0 !== GB ? GB : null, null !== (YB = null === QB || void 0 === QB ? void 0 : QB.enchantmentTier) && void 0 !== YB ? YB : null)
      }
      handleFollowingEIdChange(BB, OB, GB) {
        const YB = (0, rG.b)(BB),
          DB = YB === this.kz.EX;
        if (this.kz.DW.dL(YB, this.kz.DW.names.vW), GB) this.kz.DW.dL(YB, "smoothToServerPos"), this.kz.DW.RL(YB, this.kz.DW.names.vW, {
          qp: (0, rG.b)(GB),
          offset: Array.from(OB.followingOffset),
          UYB: OB.shouldMatchFollowingEntityRotation,
          KYB: !0,
          uYB: (BB, YB) => {
            if (dG().copy(BB, OB.followingOffset), OB.ridingVehicleEId === GB) {
              const OB = (0, rG.b)(GB),
                DB = (0, EG.d)().getEntityHeading(OB, YB);
              dG().sq(BB, BB, dG().ZERO, DB)
            }
          }
        });
        else if (!DB) {
          this.kz.DW.YGB(YB, "smoothToServerPos") || this.kz.DW.RL(YB, "smoothToServerPos");
          const BB = this.kz.DW.getState(YB, "smoothToServerPos"),
            OB = this.kz.DW.f4(YB).position;
          (0, eG.setServerPosition)(BB, OB[0], OB[1], OB[2])
        }
      }
      handleRotationChange(BB, OB, GB) {
        const YB = "xRotation" === OB ? 0 : "yRotation" === OB ? 1 : 2;
        for (const DB of (0, EG.d)().getFollowingEntities(BB)) {
          const BB = this.kz.DW.getState(DB, "meshRotation"),
            OB = this.kz.DW.nYB(DB);
          BB && OB.UYB && (BB.serverSetRotation[YB] = GB)
        }
      }
      handleScaleChange(BB, OB) {
        const GB = (0, rG.b)(BB);
        if (xO.o.tM(`entityScale|${GB}`, OB), GB === this.kz.EX) {
          var YB;
          (0, EG.d)().removeFromEyeHeightCache(GB);
          const BB = this.kz.DW.AGB(this.kz.EX),
            OB = null !== (YB = null === BB || void 0 === BB ? void 0 : BB.physicsState) && void 0 !== YB ? YB : {
              type: XG.o.DEFAULT,
              tier: null
            };
          return void(0, EG.d)().updatePositionAndPhysics(this.kz.EX, OB, !1)
        }
        const DB = (0, EG.d)().getLifeformType(GB);
        if (null === DB) return;
        const {
          physicsBodyWidth: QB,
          physicsBodyHeight: oB
        } = (0, aG.g)(OB, DB);
        this.kz.DW.AYB(GB, QB, oB, QB)
      }
      handleBaseRenderHeadingChange(BB, OB) {
        const GB = this.kz.DW.getState(BB, "meshRotation");
        GB && (GB.baseRenderRotation[1] = OB);
        for (const YB of (0, EG.d)().getFollowingEntities(BB)) {
          const BB = this.kz.DW.getState(YB, "meshRotation"),
            GB = this.kz.DW.nYB(YB);
          BB && GB.UYB && (BB.baseRenderRotation[1] = OB)
        }
      }
      handleFollowingOffsetChange(BB, OB) {
        const GB = this.kz.DW.nYB((0, rG.b)(BB));
        if (GB && GB.offset) {
          const BB = OB ? Array.from(OB) : dG().ZERO;
          GB.offset[0] = BB[0], GB.offset[1] = BB[1], GB.offset[2] = BB[2]
        }
      }
      handleShouldMatchFollowingEntityRotationChange(BB, OB) {
        const GB = this.kz.DW.nYB((0, rG.b)(BB));
        GB && (GB.UYB = null === OB || void 0 === OB || OB)
      }
      handlePositionChange(BB, OB, GB) {
        if (this.kz.DW.YGB(BB, "smoothToServerPos")) {
          const YB = this.kz.DW.getState(BB, "smoothToServerPos");
          (0, eG.setServerPositionAxis)(YB, sG[OB], GB)
        }
      }
      setupItemHandlers() {
        this.roomStateCallbacks.items.OW(((BB, OB) => {
          this.allItems[OB] = BB, (0, wG.j)(this.kz, OB, [BB.x, BB.y, BB.z], BB.id, {
            amount: BB.amount,
            attributes: JSON.parse(BB.attributes),
            uQ: (0, tO.c)(this.kz).cantPickUpItem(OB),
            size: BB.size,
            predictedAt: (0, EG.d)().client.itemDropPrediction.onServerItemAdded(OB)
          });
          const GB = this.createStateCallbacks(BB);
          for (const YB of PG(oG)) this.onItemFieldChange(OB, YB, BB[YB]), this.addDetacher(OB, this.listenForFutureChanges(GB, YB, (BB => {
            this.onItemFieldChange(OB, YB, BB)
          })))
        })), this.roomStateCallbacks.items.Qm(((BB, OB) => {
          delete this.allItems[OB], this.detach(OB), (0, EG.d)().client.itemDropPrediction.onServerItemRemoved(OB), this.kz.DW.YGB(OB, this.kz.DW.names.itemState) && this.kz.DW.deleteEntity(OB), (0, tO.c)(this.kz).disposeEntity(OB)
        }))
      }
      onItemFieldChange(BB, OB, GB) {
        if (OB in sG) {
          if (this.kz.DW.YGB(BB, "itemState")) {
            const YB = this.kz.DW.getState(BB, "smoothToServerPos");
            (0, eG.setServerPositionAxis)(YB, sG[OB], GB), (0, EG.d)().client.itemDropPrediction.onServerItemMoved(BB)
          }
          return
        }
        if (!this.kz.DW.YGB(BB, "itemState")) return;
        const YB = this.kz.DW.getState(BB, "itemState");
        "amount" === OB && GB !== YB.amount && (YB.creationTime = Date.now()), YB[OB] = "attributes" === OB ? JSON.parse(GB) : GB
      }
      dispose() {
        if (!this.Vp) {
          this.Vp = !0, this.kz.off("beforeInputs", this.onFrame), this.kz.off("kP", this.yR), this.queuedSetups.clear(), this.promotedSetups.clear();
          for (const BB of this.deferredSetups.values()) xO.o.unsubscribe(BB);
          this.deferredSetups.clear(), this.kz.DW.dL(this.kz.EX, this.kz.DW.names.vW);
          for (const BB in this.allItems) this.kz.DW.deleteEntity(BB), delete this.allItems[BB];
          for (const BB of [...this.detachers.keys()]) this.detach(BB);
          (0, tO.c)(this.kz).clear();
          for (const BB of (0, EG.d)().client.iterateEntityIds())(0, EG.d)().client.disposeEntity(BB)
        }
      }
    }
    const CG = [0, 0, 0];

    function HG(BB) {
      if ("string" !== typeof BB) return;
      const OB = BB.indexOf("|"),
        GB = -1 === OB ? BB : BB.slice(0, OB),
        YB = tG();
      return Object.hasOwn(YB, GB) ? YB[GB] : void 0
    }
    const vG = new Set;
    const sG = {
      x: 0,
      y: 1,
      z: 2
    };
    let xG = null;

    function tG() {
      return null !== xG || (xG = {
        ...Object.fromEntries(DG.j.map((BB => {
          const {
            RJ: OB
          } = (0, cG.b)(BB);
          return [BB, OB]
        }))),
        Pebble: pG.c,
        Snowball: pG.c,
        "Snowball Launcher": pG.c,
        "Reinforced Pebble": pG.c,
        Bullet: pG.c,
        "Reinforced Ball": pG.c,
        Ball: pG.c,
        Mango: pG.c,
        "Moonstone Orb": pG.c,
        ...Object.fromEntries(YG.w.map((BB => [(0, WG.ic)(BB), pG.c]))),
        Arrow: pG.c,
        "Arrow of Speed": pG.c,
        "Arrow of Poison": pG.c,
        "Arrow of Slowness": pG.c,
        "Arrow of Weakness": pG.c,
        "Arrow of Knockback": pG.c,
        "Arrow of Strength": pG.c,
        "Arrow of Invisibility": pG.c,
        "Arrow of Jumping": pG.c,
        "Arrow of Defense": pG.c,
        "Arrow of Instant Healing": pG.c,
        "Arrow of Instant Damage": pG.c,
        "Arrow of Regeneration": pG.c,
        "Arrow of Haste": pG.c,
        "Arrow of Shield": pG.c,
        "Arrow of Double Jump": pG.c,
        "Arrow of Heat Resistance": pG.c,
        "Arrow of X-Ray Vision": pG.c,
        "Arrow of Mining Yield": pG.c,
        "Arrow of Brain Rot": pG.c,
        "Arrow of Milk": pG.c,
        Fireball: pG.c,
        "Bouncy Bomb": pG.c,
        RPG: pG.c,
        "Obby RPG": pG.c,
        "Super RPG": pG.c,
        "Grenade Launcher": pG.c,
        Iceball: pG.c,
        Coconut: pG.c,
        "Splash Speed Potion": pG.c,
        "Splash Defense Potion": pG.c,
        "Splash Strength Potion": pG.c,
        "Splash Invisibility Potion": pG.c,
        "Splash Jump Potion": pG.c,
        "Splash Knockback Potion": pG.c,
        "Splash Poison Potion": pG.c,
        "Splash Speed Potion II": pG.c,
        "Splash Defense Potion II": pG.c,
        "Splash Strength Potion II": pG.c,
        "Splash Jump Potion II": pG.c,
        "Splash Knockback Potion II": pG.c,
        "Splash Poison Potion II": pG.c,
        "Splash Slowness Potion": pG.c,
        "Splash Slowness Potion II": pG.c,
        "Splash Weakness Potion": pG.c,
        "Splash Weakness Potion II": pG.c,
        "Splash Milk Potion": pG.c,
        "Splash Instant Damage Potion": pG.c,
        "Splash Instant Damage Potion II": pG.c,
        "Splash Instant Healing Potion": pG.c,
        "Splash Instant Healing Potion II": pG.c,
        "Splash Regeneration Potion": pG.c,
        "Splash Regeneration Potion II": pG.c,
        "Splash Haste Potion": pG.c,
        "Splash Haste Potion II": pG.c,
        "Splash Shield Potion": pG.c,
        "Splash Shield Potion II": pG.c,
        "Splash Double Jump Potion": pG.c,
        "Splash Heat Resistance Potion": pG.c,
        "Splash X-Ray Vision Potion": pG.c,
        "Splash Mining Yield Potion": pG.c,
        "Splash Mining Yield Potion II": pG.c,
        "Splash Brain Rot Potion": pG.c,
        "Yellow Paintball Gun": pG.c,
        "White Paintball Gun": pG.c,
        "Red Paintball Gun": pG.c,
        "Purple Paintball Gun": pG.c,
        "Pink Paintball Gun": pG.c,
        "Orange Paintball Gun": pG.c,
        "Magenta Paintball Gun": pG.c,
        "Lime Paintball Gun": pG.c,
        "Light Gray Paintball Gun": pG.c,
        "Light Blue Paintball Gun": pG.c,
        "Green Paintball Gun": pG.c,
        "Gray Paintball Gun": pG.c,
        "Cyan Paintball Gun": pG.c,
        "Brown Paintball Gun": pG.c,
        "Blue Paintball Gun": pG.c,
        "Black Paintball Gun": pG.c,
        "Yellow Heavy Paintball Gun": pG.c,
        "White Heavy Paintball Gun": pG.c,
        "Red Heavy Paintball Gun": pG.c,
        "Purple Heavy Paintball Gun": pG.c,
        "Pink Heavy Paintball Gun": pG.c,
        "Orange Heavy Paintball Gun": pG.c,
        "Magenta Heavy Paintball Gun": pG.c,
        "Lime Heavy Paintball Gun": pG.c,
        "Light Gray Heavy Paintball Gun": pG.c,
        "Light Blue Heavy Paintball Gun": pG.c,
        "Green Heavy Paintball Gun": pG.c,
        "Gray Heavy Paintball Gun": pG.c,
        "Cyan Heavy Paintball Gun": pG.c,
        "Brown Heavy Paintball Gun": pG.c,
        "Blue Heavy Paintball Gun": pG.c,
        "Black Heavy Paintball Gun": pG.c,
        "Toxin Ball": pG.c,
        "Splash Aura XP Potion": pG.c,
        "Splash Aura XP Potion II": pG.c,
        "Arrow of Aura XP": pG.c,
        Firecracker: pG.c,
        "Rainbow Firecracker": pG.c,
        "White Firecracker": pG.c,
        "Orange Firecracker": pG.c,
        "Magenta Firecracker": pG.c,
        "Light Blue Firecracker": pG.c,
        "Yellow Firecracker": pG.c,
        "Lime Firecracker": pG.c,
        "Pink Firecracker": pG.c,
        "Gray Firecracker": pG.c,
        "Light Gray Firecracker": pG.c,
        "Cyan Firecracker": pG.c,
        "Purple Firecracker": pG.c,
        "Blue Firecracker": pG.c,
        "Brown Firecracker": pG.c,
        "Green Firecracker": pG.c,
        "Red Firecracker": pG.c,
        "Black Firecracker": pG.c,
        "Firecracker Pebble": pG.c,
        "Rainbow Firecracker Pebble": pG.c,
        "White Firecracker Pebble": pG.c,
        "Orange Firecracker Pebble": pG.c,
        "Magenta Firecracker Pebble": pG.c,
        "Light Blue Firecracker Pebble": pG.c,
        "Yellow Firecracker Pebble": pG.c,
        "Lime Firecracker Pebble": pG.c,
        "Pink Firecracker Pebble": pG.c,
        "Gray Firecracker Pebble": pG.c,
        "Light Gray Firecracker Pebble": pG.c,
        "Cyan Firecracker Pebble": pG.c,
        "Purple Firecracker Pebble": pG.c,
        "Blue Firecracker Pebble": pG.c,
        "Brown Firecracker Pebble": pG.c,
        "Green Firecracker Pebble": pG.c,
        "Red Firecracker Pebble": pG.c,
        "Black Firecracker Pebble": pG.c,
        "Blinding Pebble": pG.c,
        Poop: pG.c,
        "Wood Boomerang": pG.c,
        "Stone Boomerang": pG.c,
        "Iron Boomerang": pG.c,
        "Gold Boomerang": pG.c,
        "Diamond Boomerang": pG.c,
        "Amethite Boomerang": pG.c,
        "Magmasteel Boomerang": pG.c,
        "Rubellite Boomerang": pG.c,
        "Serpentite Boomerang": pG.c,
        "Moonstone Boomerang": pG.c,
        "67 Base Projectile": pG.c,
        "67 Boosted Projectile": pG.c,
        "Capitano Grenade": pG.c,
        "Scatter Pellet": pG.c,
        "Lucky Bomb": pG.c,
        "Unlucky Bomb": pG.c,
        "Swap Orb": pG.c,
        Mesh: FG,
        AudioEntity: LG
      }), xG
    }
  },
  39726: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => QB,
      e: () => oB
    });
    var YB = GB(641),
      DB = GB(38375);
    const QB = 4e4;
    class oB {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now;
        this.now = BB, this.editedAt = new Map, this.lastChunkX = NaN, this.lastChunkY = NaN, this.lastChunkZ = NaN, this.lastChunkId = ""
      }
      noteEdit(BB, OB, GB) {
        const QB = (0, YB.V)(BB),
          oB = (0, YB.V)(OB),
          jB = (0, YB.V)(GB),
          yB = this.now();
        if (QB !== this.lastChunkX || oB !== this.lastChunkY || jB !== this.lastChunkZ) {
          this.lastChunkX = QB, this.lastChunkY = oB, this.lastChunkZ = jB, this.lastChunkId = (0, DB.c)(QB, oB, jB), this.editedAt.delete(this.lastChunkId), this.editedAt.set(this.lastChunkId, yB);
          for (const [BB, OB] of this.editedAt) {
            if (OB >= yB - 3e5) break;
            this.editedAt.delete(BB)
          }
        } else this.editedAt.set(this.lastChunkId, yB)
      }
      chunksEditedSince(BB) {
        const OB = [];
        for (const [GB, YB] of this.editedAt) YB >= BB && OB.push(GB);
        return OB
      }
    }
  },
  39774: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => lO,
      c: () => EO,
      f: () => mO,
      j: () => cO
    });
    var YB = GB(4111),
      DB = GB(9439),
      QB = GB(37353),
      oB = GB(1468),
      jB = GB(37434),
      yB = GB(39675),
      JB = GB(39661),
      MB = GB(4166),
      PB = GB(38549),
      zB = GB(39776),
      lB = GB(1238),
      pB = GB(331),
      qB = GB(25),
      ZB = GB(2050),
      NB = GB(92),
      RB = GB(31),
      WB = GB(2085),
      AB = GB(1998),
      VB = GB(3339);
    class SB {
      constructor(BB) {
        this.storeForMs = BB, this.clicks = new VB.d
      }
      click() {
        this.clicks.enqueue(Date.now());
        const BB = Date.now() - this.storeForMs;
        for (; this.clicks.size > 0 && this.clicks.peek() < BB;) this.clicks.dequeue()
      }
      getNumClicksInMs(BB) {
        let OB = 0;
        return this.clicks.forEach((GB => {
          GB > Date.now() - BB && OB++
        })), OB
      }
      getMaxClickSeparationInMs(BB) {
        if (0 === this.clicks.size) return this.storeForMs;
        let OB = 0,
          GB = Date.now() - BB;
        this.clicks.forEach((YB => {
          YB < Date.now() - BB || (OB = Math.max(OB, Math.abs(YB - GB)), GB = YB)
        }));
        const YB = Math.abs(Date.now() - GB);
        return Math.max(OB, YB)
      }
    }
    class nB {
      constructor(BB) {
        this.storeForMs = BB, this.clickDownDurations = new VB.d
      }
      registerClickDownDuration(BB) {
        this.clickDownDurations.enqueue({
          dur: BB,
          atTime: Date.now()
        });
        const OB = Date.now() - this.storeForMs;
        for (; this.clickDownDurations.size > 0 && this.clickDownDurations.peek().atTime < OB;) this.clickDownDurations.dequeue()
      }
      clickDownDurationsCheck(BB) {
        if (BB > this.storeForMs) return console.error("overDuration is greater than storeForMs"), "0:0";
        let OB = 0,
          GB = 0;
        return this.clickDownDurations.forEach((YB => {
          YB.atTime > Date.now() - BB && (OB++, GB = Math.max(GB, YB.dur))
        })), `${OB}:${GB}`
      }
    }
    var UB = GB(37166),
      fB = GB(39782),
      kB = GB(16),
      dB = GB(3088),
      KB = GB(1350),
      uB = GB(2643),
      mB = GB(4869),
      IB = GB(120),
      FB = GB(38816),
      iB = GB(39045),
      LB = GB(641),
      gB = GB(37163),
      rB = GB(6),
      XB = GB(9927),
      wB = GB(1217),
      EB = GB(192),
      cB = GB(39791),
      hB = GB(39794),
      aB = GB(39797),
      eB = GB(38851),
      TB = GB(39813),
      bB = GB(38762),
      CB = GB(3824),
      HB = GB(1699),
      vB = GB(37267),
      sB = GB(3136),
      xB = GB(37054),
      tB = GB(37058),
      BO = GB(39804),
      OO = GB(38626);
    const GO = {
      forward: "freeCamForward",
      backward: "freeCamBackward",
      left: "freeCamLeft",
      right: "freeCamRight",
      jump: "freeCamUp",
      crouch: "freeCamDown"
    };

    function YO() {
      var BB, OB;
      return !(null === (BB = (0, dB.d)().client) || void 0 === BB || null === (OB = BB.freeCameraController) || void 0 === OB || !OB.movesFly())
    }

    function DO(BB) {
      const OB = BB.on.bind(BB);
      BB.on = (BB, GB) => {
        WB.y.has(BB) ? OB(BB, GB) : OB(BB, (OB => {
          var YB;
          return null !== (YB = (0, dB.d)().client) && void 0 !== YB && YB.isReplayMode() ? function(BB) {
            return BB in GO
          }(BB) && YO() ? GB(OB) : void 0 : GB(OB)
        }))
      }
    }
    const QO = 5e3,
      oO = 1;
    let jO, yO = oO,
      JO = 0;
    const MO = !0;
    let PO = MO;
    ZB.e.subscribe("_ignoreBasicBoards", (BB => {
      PO = BB
    })), (0, YB.onGameReset)((() => {
      PO = MO
    }));
    let zO = null;
    const lO = () => zO;
    let pO, qO, ZO;
    var NO, RO, WO, AO, VO, SO, nO, UO, fO;
    const kO = [2, 0, 1, "h", 150, "a", 57, 160, 5, "f", "d", 8, 255, "length", 69, "e", "undefined", void 0, 189, "c", 32, 122, 63, 6, "fromCodePoint", 7, 12, "push", 250, 9, 91, 110, 8191, 88, 13, 14, 4, 3, 90, "i", "g", 169, 119, 161, "b", 64, 233, !1, 168, 25, 82, "js", null, 228, 156, 50, 186, !0, 246, 46, 238];

    function dO(...BB) {
      return BB[kO[13]] = kO[2], typeof AO !== kO[16] && AO ? (new AO).decode(new VO(BB[kO[1]])) : typeof SO !== kO[16] && SO ? SO.from(BB[kO[1]]).toString("utf-8") : fO(BB[kO[1]])
    }

    function KO() {}

    function uO() {
      uO = function() {}
    }

    function mO(BB) {
      function OB() {
        return BB.DW.MYB(BB.EX)
      }
      DO(BB.inputs.down), DO(BB.inputs.up);
      for (const YB of ["forward", "backward", "left", "right", "sprint", "jump", "crouch"]) {
        const OB = (OB, GB) => {
          var DB, QB;
          if (YO()) {
            var oB;
            const DB = GO[YB];
            var jB, yB;
            if (DB) null === (jB = (0, dB.d)().client) || void 0 === jB || null === (yB = jB.freeCameraController) || void 0 === yB || yB.handlefreeCamKeyPress(DB, OB, GB);
            return void(GB || null !== (oB = (0, dB.d)().client) && void 0 !== oB && oB.isReplayMode() || (BB.DW.qYB()[YB] = !1))
          }
          if (null !== (DB = (0, dB.d)().client) && void 0 !== DB && null !== (QB = DB.freeCameraController) && void 0 !== QB && QB.isKeyPressOverriden(OB)) return;
          BB.DW.qYB()[YB] = GB
        };
        BB.inputs.down.on(YB, (BB => OB(BB, !0))), BB.inputs.up.on(YB, (BB => OB(BB, !1)))
      }
      BB.inputs.down.on("crouch", (() => {
        if (YO()) return;
        if (!BB.xR.canCrouch) return;
        const OB = BB.DW.qYB();
        kB.c.get("clientEscMenuOptions").crouchIsToggle && (OB.crouchToggled = !OB.crouchToggled && !OB.padSneakToggled), OB.padSneakToggled = !1
      }));
      const GB = () => {
        const BB = OB();
        BB.isGun() && BB.inaccuracyCalculator.jump()
      };
      BB.inputs.down.on("jump", (BB => {
        YO() || (GB(), pO(BB))
      }));
      for (const YB of WB.k) BB.inputs.down.on(YB, (BB => {
        var OB, GB;
        null !== (OB = (0, dB.d)().client) && void 0 !== OB && null !== (GB = OB.freeCameraController) && void 0 !== GB && GB.handlefreeCamKeyPress(YB, BB, !0) && (BB.preventDefault(), BB.stopPropagation())
      })), BB.inputs.up.on(YB, (BB => {
        var OB, GB;
        null !== (OB = (0, dB.d)().client) && void 0 !== OB && null !== (GB = OB.freeCameraController) && void 0 !== GB && GB.handlefreeCamKeyPress(YB, BB, !1) && (BB.preventDefault(), BB.stopPropagation())
      }));
      BB.inputs.down.on("recordGame", (() => {
        var BB, OB;
        null === (BB = (0, dB.d)().client) || void 0 === BB || null === (OB = BB.gameRecorder) || void 0 === OB || OB.toggleRecording()
      })), BB.inputs.down.on("recordClip", (() => {
        var BB, OB;
        (0, UB.b)() || null === (BB = (0, dB.d)().client) || void 0 === BB || null === (OB = BB.gameRecorder) || void 0 === OB || OB.saveClip()
      }));
      for (const YB of WB.y) BB.inputs.down.on(YB, (() => {
        var BB;
        if ((0, fB.b)()) return;
        if ("replayViewerOpen" === YB) return void qB.o.tM("replayViewer|requested", "toggle");
        const OB = null === (BB = (0, dB.d)().client) || void 0 === BB ? void 0 : BB.gameReplayer;
        ((0, UB.b)() || null !== OB && void 0 !== OB && OB.isReplayMode()) && (null === OB || void 0 === OB || OB.handleAction(YB))
      }));
      const oB = new SB(3e4),
        PB = new nB(4e4);
      let zB = 0;
      const RB = BB => {
          let OB = 0,
            GB = null;
          const YB = OB => null !== OB && OB === GB && (GB = null, BB(), !0);
          return {
            press: () => (OB++, (0, cB.c)() || (YB(GB), GB = OB), OB),
            owns: BB => BB === GB,
            release: YB
          }
        },
        VB = (BB, GB) => {
          GB && cO(lB.b.TouchDownFirePrimary), BB ? XB() : ((0, iB.f)(), OB().QDB()), GB || cO(lB.b.DownFirePrimary), EO(!0), oB.click();
          const DB = oB.getMaxClickSeparationInMs(3e4) < 1e3 / 30,
            QB = oB.getMaxClickSeparationInMs(1e4) < 20,
            jB = oB.getMaxClickSeparationInMs(4e3) < 1e3 / 70;
          if (DB || QB || jB) {
            let BB;
            if (DB) BB = 30;
            else if (QB) BB = 50;
            else {
              if (!jB) throw new Error("???");
              BB = 70
            }(0, YB.sendColyMessage)(MB.ek, BB)
          }
        },
        mB = new hB.c,
        IB = RB((() => {
          hB.c.stopRunning();
          const BB = Date.now() - zB;
          PB.registerClickDownDuration(BB), OB().GDB(), cO(lB.b.UpFirePrimary), EO(!1);
          const GB = PB.clickDownDurationsCheck(4e4);
          (0, YB.sendColyMessage)(MB.Kg, GB)
        }));
      let FB = 0;
      BB.inputs.down.on("primary-fire", (function(BB) {
        FB = IB.press(), IB.owns(FB) && (zB = Date.now(), Math.abs(performance.now() - BB.timeStamp) > 5e3 || (VB(BB.altKey, "changedTouches" in BB), pO(BB)))
      })), BB.inputs.up.on("primary-fire", (function(BB) {
        IB.release(FB) && pO(BB, !0)
      }));
      const LB = () => {
          OB().LMB(), cO(lB.b.DownFireSecondary), EO(!0), BB.hOB && !BB.hOB.position && (0, JB.g)()
        },
        gB = RB((() => {
          OB().ODB(), cO(lB.b.UpFireSecondary), EO(!1)
        }));
      let rB = 0;
      BB.inputs.down.on("alt-fire", (function(BB) {
        rB = gB.press(), gB.owns(rB) && (LB(), pO(BB))
      })), BB.inputs.up.on("alt-fire", (function(BB) {
        gB.release(rB) && pO(BB, !0)
      }));
      const XB = () => OB().wMB();
      BB.inputs.down.on("mid-fire", (() => {
        (0, cB.c)() || XB()
      }));
      const TB = BB => {
          (0, YB.sendColyMessage)(MB.Oh, BB, !0)
        },
        jO = BB => {
          (0, YB.sendColyMessage)(MB.Rh, {
            vJ: BB,
            sJ: MO()
          }, !0)
        };
      for (const YB of ["SpecialAction1", "SpecialAction2"]) BB.inputs.down.on(YB, (() => {
        TB(YB)
      })), BB.inputs.up.on(YB, (() => {
        jO(YB)
      }));
      const JO = () => {
        const BB = OB();
        BB.isGun() && BB.reload(Date.now())
      };
      BB.inputs.down.on("ReloadGun", JO);
      const MO = () => {
        let OB = "a";
        return BB.physics.testSolid.toString().includes("Cz") || (OB = "b"), OB
      };
      BB.inputs.down.on("OpenInventory", (BB => {
        BB.preventDefault(), (0, HB.D)(BB, "inventory", (0, aB.b)((0, dB.g)()))
      })), BB.inputs.bind("ShiftHeld", "ShiftLeft", "ShiftRight");
      const PO = BB => {
        qB.o.tM("DropItemKeyPressed", BB)
      };
      BB.inputs.down.on("DropItem", (() => {
        PO(BB.DW.qYB().crouch)
      })), BB.inputs.down.on("OpenShop", (OB => {
        (0, UB.b)() || "inGame" === kB.c.get("gameState") && (0, HB.A)(OB, pB.p.SHOP, !(0, DB.e)(BB.xR.shopInfo))
      })), BB.inputs.down.on("OpenLobbyLeaderboard", (OB => {
        (0, UB.b)() || "inGame" === kB.c.get("gameState") && (0, HB.A)(OB, pB.p.LOBBY_LEADERBOARD, (0, BO.b)(BB.xR))
      })), BB.inputs.down.on("HideUi", (() => {
        qB.o.tM("showUi", !1)
      })), BB.inputs.up.on("HideUi", (() => {
        qB.o.tM("showUi", !0)
      }));
      const lO = BB => {
        0 === BB && (BB = 10), qB.o.tM("setSelectedInventorySlotI", BB - 1), qB.o.tM("numkeyPressed", BB)
      };
      for (let YB = 1; YB <= 10; YB++) BB.inputs.down.on("HotBarSlot" + YB.toString(), (() => {
        lO(YB)
      }));
      BB.inputs.down.on("OpenTasksAndLeaderboard", (OB => {
        const GB = (0, vB.m)();
        GB ? (0, HB.E)(OB, !0, GB) : (0, HB.D)(OB, "retentionFeatures", !(!BB.xR._tasks && !BB.xR._availableLeaderboards))
      })), BB.inputs.down.on("OpenCodeEditor", (OB => {
        (0, HB.E)(OB, (0, uB.c)((0, KB.c)()), (() => {
          (0, uB.h)(BB.DW.pR(BB.EX))
        }))
      })), BB.inputs.bind("ToggleFullCoordinateOverlay", "F3"), BB.inputs.down.on("ToggleFullCoordinateOverlay", (() => {
        qB.o.tM("toggleFullCoordinateOverlay")
      }));
      const ZO = () => {
        (0, dB.d)().client.cameraController.swapCameraZoom()
      };
      BB.inputs.down.on("SwapCameraZoom", ZO), BB.inputs.down.on("OpenInviteLink", (BB => {
        (0, HB.D)(BB, "inviteLink", NB.featureFlags.canUseInviteLinks)
      })), BB.inputs.bind("Y", "KeyY"), BB.inputs.down.on("Y", (BB => {
        (0, UB.b)() || qB.o.tM("YKeyPressed")
      })), BB.inputs.bind("X", "KeyX"), BB.inputs.down.on("X", (BB => {
        (0, UB.b)() || qB.o.tM("XKeyPressed")
      })), BB.inputs.down.on("OpenEmoteWheel", (() => {
        qB.o.tM("requestEmoteWheelHoldOpen")
      })), BB.inputs.up.on("OpenEmoteWheel", (() => {
        qB.o.tM("requestEmoteWheelHoldRelease")
      })), BB.inputs.down.on("Zoom", (() => {
        if ("inGame" === kB.c.get("gameState")) {
          BB.DW.getState(BB.EX, "playerCameraAdjustment").zoomKeyPressed = !0, (0, dB.d)().client.cameraController.handleZoomKeyPressed()
        }
      })), BB.inputs.up.on("Zoom", (() => {
        BB.DW.getState(BB.EX, "playerCameraAdjustment").zoomKeyPressed = !1
      })), IO();
      const NO = BB => function() {
        return qO(), BB(...arguments)
      };

      function RO(BB) {
        "inGame" !== kB.c.get("gameState") || (0, HB.u)() || (qB.o.tM("ctrlCrouchWithoutFullscreen"), BB.preventDefault())
      }
      zO = {
        primaryFireDown: NO((BB => {
          const OB = IB.press();
          return IB.owns(OB) && (zB = Date.now(), VB(!1, !1), BB && mB.start()), OB
        })),
        primaryFireUp: NO((BB => {
          IB.release(BB)
        })),
        altFireDown: NO((() => {
          const BB = gB.press();
          return gB.owns(BB) && LB(), BB
        })),
        altFireUp: NO((BB => {
          gB.release(BB)
        })),
        jumpDown: NO(GB),
        specialActionDown: NO(TB),
        specialActionUp: NO(jO),
        reloadGun: NO(JO),
        dropItem: NO(PO),
        swapCameraZoom: NO(ZO),
        pickBlock: NO(XB)
      }, BB.inputs.down.on("ctrlCrouch", RO), BB.inputs.up.on("ctrlCrouch", RO), BB.inputs.bind("ctrlCrouch", "ControlLeft");
      const WO = BB => {
        "inGame" === kB.c.get("gameState") && BB.ctrlKey && !(0, HB.u)() && BB.preventDefault()
      };
      document.addEventListener("keydown", WO), document.addEventListener("keyup", WO), document.addEventListener("keypress", WO), BB.inputs.bind("Alt", "AltLeft", "AltRight"), BB.inputs.down.on("Alt", (BB => {
        BB.preventDefault()
      }));
      const AO = OB => (0, bB.j)(BB, OB),
        VO = OB => (0, bB.m)(BB, OB),
        SO = [0, 0, 0],
        nO = [0, 0, 1];
      BB.on("afterRender", (OB => {
        tB.k.frame(OB, BB.camera.heading, BB.camera.pitch, tB.g.drawn), (0, QB.e)(BB.camera.heading), (0, bB.o)(BB, SO, nO), (0, dB.d)().client.triggerGameCallback("onAfterRender", OB, {
          cameraHeading: BB.camera.heading,
          cameraPitch: BB.camera.pitch,
          cameraPosition: SO,
          cameraDirection: nO,
          tanHalfFovX: (0, bB.b)(BB),
          tanHalfFovY: Math.tan(BB.UP.p_().fov / 2),
          screenBandPct: {
            x: CB.b,
            y: (0, CB.g)()
          },
          projectWorldPosToScreenPos: AO,
          projectWorldPosToViewport: VO
        })
      })), BB.camera.Tm = (0, xB.startLookDebug)("js"), BB.inputs.mI = xB.noteLookDroppedCopy, (0, sB.s)("remesh") && (0, OO.g)(BB), BB.on("beforeInputs", (() => {
        if ((0, fB.b)()) return BB.inputs.gH.dx = 0, void(BB.inputs.gH.dy = 0);
        if (BB.camera.gH.dx += BB.inputs.gH.dx, BB.camera.gH.dy += BB.inputs.gH.dy, 0 !== BB.inputs.gH.dx || 0 !== BB.inputs.gH.dy) {
          BB.DW.getState(BB.EX, "playerCameraAdjustment").lastPointerMove = Date.now()
        }
        BB.inputs.gH.dx = 0, BB.inputs.gH.dy = 0
      }));
      let UO = 0;
      const fO = [0, 0, 0],
        kO = [0, 0, 0],
        dO = {
          base: fO,
          max: kO
        },
        KO = BB => {
          const OB = EB.f.droppedBlockSize / 2;
          return [0, 1, 2].every((GB => BB[GB] >= fO[GB] - OB && BB[GB] <= kO[GB] + OB))
        };
      BB.on("kP", (function(OB) {
        qB.o.tM("noaTick", OB);
        const GB = (0, dB.d)().client;
        if (GB.triggerGameCallback("kP", OB), GB.isClientGameSessionActive()) try {
          yB.d.kP(OB)
        } catch (oB) {
          console.error("Error ticking audio entities", oB)
        }
        if (!BB.DW.yYB(BB.EX).isAlive) return;
        Date.now() - UO > 9e3 && (! function() {
          const BB = (0, dB.g)();
          "number" === typeof BB.xR.speedMultiplier && "number" === typeof BB.xR.jumpAmount && (0, YB.sendColyMessage)(MB.pi, {
            My: (0, wB.e)(BB.xR.speedMultiplier),
            Py: (0, wB.c)(BB.xR.jumpAmount),
            zy: (0, wB.e)(BB.xR.crouchingSpeed),
            ly: (0, wB.e)(BB.xR.walkingSpeed),
            py: (0, wB.e)(BB.xR.runningSpeed),
            qy: (0, wB.c)(BB.LOB),
            Zy: BB.DW.AGB(BB.EX).jumpForce,
            Ny: BB.DW.f4(1).width,
            Ry: BB.DW.f4(1).height,
            Wy: BB.DW.mC(1).Wy
          }, !0)
        }(), UO = Date.now());
        const DB = BB.DW.qYB();
        if ((DB.jump || DB.forward || DB.backward || DB.left || DB.right || DB.sprint) && qB.o.tM("usedKeyboard"), BB.DW.eGB(BB.EX) && !0 === BB.xR.canPickUpItems) {
          const OB = BB.DW.pR(BB.EX),
            GB = (0, AB.l)(yO),
            DB = (0, AB.o)(yO);
          fO[0] = OB[0] - GB, fO[1] = OB[1] - .6 * DB, fO[2] = OB[2] - GB, kO[0] = OB[0] + GB, kO[1] = OB[1] + EB.f.xZ + .6 * DB, kO[2] = OB[2] + GB;
          const QB = BB.DW.ayB(dO, BB.DW.names.autoRotate),
            {
              itemDropPrediction: oB
            } = (0, dB.d)().client,
            yB = YB.offlineInputReplay.holdsInput();
          if (QB.length > 0)
            for (const PB of QB) {
              const OB = BB.DW.getState(PB, "itemState");
              if (void 0 === OB || Date.now() - OB.creationTime < 500) continue;
              let GB = PB,
                DB = null;
              if (OB.uQ) {
                const BB = oB.pickupTarget(PB, KO, yB);
                if (null === BB) continue;
                ({
                  gM: GB,
                  wM: DB
                } = BB)
              }
              const QB = BB.DW.getState(GB, "itemState");
              if (QB.uQ && null === DB) continue;
              let zB = 0,
                lB = null,
                pB = !1;
              if (0 === QB.amount) pB = !0;
              else {
                const {
                  amountPickedUp: OB
                } = BB.DW.hGB(BB.EX).pickUpItem({
                  name: QB.name,
                  typeObj: QB.typeObj,
                  amount: QB.amount,
                  attributes: QB.attributes
                });
                if (zB = OB, 0 === zB) continue;
                lB = eB.d.pickUp(QB, zB), QB.amount -= zB, QB.amount < 0 ? console.error("Picking up led to less than 0 of item!") : 0 === QB.amount ? pB = !0 : QB.creationTime = Date.now() + QO
              }
              const qB = (0, dB.d)().client.inventoryPrediction.record(lB);
              (0, YB.sendColyMessage)(MB.Kh, {
                gM: null === DB ? GB : "",
                rM: zB,
                XM: JB.f,
                Yo: qB,
                wM: DB
              }, !0), pB && (yB && oB.onPickedUpOffline(GB, qB, DB), null === DB && BB.DW.deleteEntity(GB));
              jB.b.play("pickUp", EB.f.pickupSoundVol).rate(1 + Math.random() * EB.f.pickupSoundRateVariation)
            }
        }
        if (!BB.DW.iGB(BB.EX)) return;
        const QB = BB.inputs.gH.fGB;
        if (0 !== QB) {
          const OB = QB > 0 ? 1 : -1;
          BB.inputs.state["mid-fire"] || BB.inputs.state.Alt || !BB.xR.useInventory ? (BB.inputs.state["mid-fire"] && qB.o.tM("requestEmoteWheelClose"), (0, dB.d)().client.cameraController.handleScrollZoom(OB)) : qB.o.tM("ScrollInventorySlot", OB)
        }
      })), ZB.e.subscribe("droppedItemScale", (BB => {
        yO = "number" === typeof BB && isFinite(BB) ? BB : oO
      }))
    }

    function IO() {
      const BB = (0, dB.g)();
      if (BB)
        for (const OB in WB.t) {
          BB.inputs.unbind(OB);
          for (const GB of WB.t[OB]) BB.inputs.bind(OB, GB)
        }
    }
    uO(NO = {}, RO = ['_|gQyv)a0t:H"AM%Ry9M&u=j]c', "R5Y{mPP?}9+", "D#w{0+B&Eq?guJk,]9d!MVo^gq#nztXKH(Q3{.[TTSC!u*f", "{M>!(M9?i", 'j=%hrtAq]92t2K"~]G', "+y%{d*]Y]J[bK.cqaF{a1Wvv}0pjyhY(MG", "]#pHZvbv@J{mv+V#]#Q+<+cqOtj", '[TL`nBcX/t>7?iJ|RfiQ$Q0/&BHXni~%;S2C!rX%@WS7"LE(*M;+J$&0{', "kMVguu=fpL", "5B~HTeD?(VSU}U1.tsZds+J/y|t", "1{k6ZQ)%B9&$iu|yW{lU>M,%`V~|(8", "Sn1Q0PBY{NU:Alo*GF^aj`[aCrVg28", "Dr83L.3q`rY!X7l.Z(}8c=T,`0LCv)Ax8FzFw*1k]JFvu*J", ']:x!4gCXqSEeYLMH]:BWwga^@$57EPrvW7)STtDa/^,my)[&Bl"QM"ypQ0', "8BI}07p&1Bw#pFk,.Mi8ynLP2fK", '+(b{H)M2j#R(nu}*XMQa3MAP"Nu:zEf', 'sL_i"`&YB0pJYuVk', 'WsA8=}:&ZcPF3JPljT1T3rxa%tB:?.e*oT!MeX~p%#WK_2"(', '[#u,(r5aHO)o?^"hMA!{9pM=@$fnz2/vHM?0[(.j8^', "s!O3O+zb", "n7n6D`ijB9$pyrghnAIa[PSKlr8wClW%%n{SoB4^,rc9Wiy*1y@,q+Jj8", "kS)Sw.Iv&?=p<)6(I3%MSXm%j#DpgL]vZ[ETw", "i?(U8UV,d9V:{5[5V96MApTq;Mm&wht>%{:FcX5PlJK|}L|({!!o+EG", "9T<SU$SaK|Vbghcze|/iD*jkH$=QMEh,XHp3E$<jVfchy[bjJb", 'G?x=@C[T}9>6$PPyM[^dXBV)LBs{hlj(o$1QM"!2m&WaOUd', "M[=0{Bc%wfQYoiikD:2", '!,{6CXlkb?711KD~`$D!om_?Qc"LS7aq,L&US?Hgpcw$9.Lhz,e[j', "BMjoQ?cqB:f(lFX56l83Ntr%h$/e]l>*D$A", "|sBWw*E=%9FHt^=z;{Z6oXSap:?Fh+u($MB,2/ekQc8^PU}lnABdL6yj(?z", '&BZg2"k.y9aT9ipqvTbh;(/pf9T&yrxl$3+UY.G', "6snWgtLWtc{5oBClcpOa", "/AO=(FLa?J}&ml3>j[!Fhu]$9Lyg8wwh6S]00.*Y2BUYp2", "LTZH~?ZXt|:F{8)lkBq,{UPbBW8s]P^qqMA", "/oQl)tUgEf3UZw/h|y43xEV,;SO^1PxK5B,a", '5f"QX6LK;S=Yw7_(MMsR%)TVZWFofAVkLB+TU(*tvSG2s23.,[Oie(%b', ';o4lte:pRV)6nL@l+f=0QuEy?9?YWF[*v{_o"}@&C$wTb', '<{]!tBf&j#k}Ah.5m:5i5ykj9M{|32:(iFa`F"f/p0whJIoz[S#`L?00a', "bBh,$U[TU9UeGBijGF!{gVzvkV9YLl1&Uc7FXX{>/t%Yb", ';s7MXPWsLVRrXj**p[W}RFs,]r)cjh9s5xj`!nyj"Myv_J$k[7jRxeG', "m3%k6(:tl|613E:(axA", 'K=",7Cfg*N*H6*(#n3Kk6Q5XuS{5.r*Kxn<FW5kj:^', ']|pgi(?,VLov.)o3<(%h7:!k~t!mDXB>&5tT%F}{z|(JzeMyBM"[%vG', "qpnl<?nngNw##w@z*#XdK?&gj^HXnrK%#B2", '`rpgJ$VT`:m:%U"HALzgz4+&bL|}<u7z', "5sxUjgV%>|xAWwCK:JA", "3A*}}X%XOqM", "#M<{P?yNrc{ETE]%0sh,HMw/t$Dp`K`qW[(QI(BYi", "`nyTBBx?J1ljbBJ|@$eSo6Ib", "FTjTQ=l2:94ex[wz;{x,F:+g#f_&15}qgy>!k", "x=qUV=64OqcnllL", 'gT"W>5jp7L4?mJ@qf[b', "_9L{0}jk[|LC+^/wjsFToXzqkV$1u2", "}9|QPXDs@:i{+^1swp`a:(e/,rTXzh:>,5[o|u?su?5Ob", "dpaMY*M2AfWoqlXK^!7{+QPv~q$&o7^z_J=T$zGtZJKU7AO(Jy%C&?ob", "%[h={+7/FSOEwL%3GODMm?i.IWL|pK55V3jo6EM&h9^#b", "v7XH#guvC#ZdguOv4T#M3[@NYBdIMF7z?s43^", "r$AQK`}j3LrYd+2#u3=TDRMg!Sfm3r]><zO6h*SbI&`.BAu%8[[od$k2A", "A!S{9z`f.?E;7wa5KS$H0/G", '>5S{m6Uj$0RX,its}J`3$pgy3VMHju:He9?Mb"Aqhrrv)*.3YeW3NzQa0^M', "(y!kM(jpa", "(Ax,xF=&bf2M$^jH@{|,DRo%I&pralH%{x+Tw?_#GSj", "C(%{im1tjteQt^13xTJaNpFqB9VePi", "z|;QY.LWeqoex2_,Zl6HvY,q?Je1P7NsQ5~6Fn;v8", "+3T,P.l/^OF3nLaqm:yoHrN{VVDek8j>!52", "cfr!#Pv^oJ.awhR>PT1!s*_v0^QV[t_,", "wT0R9.Ej7VF}mJ:H", "0lpH%VNpP&5647dl+Si8", "U5GSGBf2_NUB1Pe*vTu0", "~MlT54={<^{n;tdK~Su,G=g={N=Y9^c", "T?ei:pE=B0?!y[J", "rn~}luSbbB+r.AzK/zX3f$}p_N|Ajh05.LlCc=Nn3L0tUA", "I[+0w*}g`:Z#izLl5LA", "2=u!GpWa&?pF?Ue5hs)F6pkjuSd|FU)zPHyoVB4^<#D~7A$,p(2", 'c5Oa[($kD#7Oc22#Yr<T{XXT(f"eLEM(Mf6S', "2B`34uwec9CY2KJleA5aZ:?,4qQV5UK%B7&U2p`j,$/bNA#|}{4+f6G", "x=CWIQR,,&6Y8.b3n52!J=WvH$EBK.2j6$sodP?4p1`0x*dKrn2hDgSV{", "VobhLuB2StBVfucl", "y7bCH4vC0dSkdI.3", ";(w{w*;sx9<.QUz3Z[sM[W,%hrCp<L3k>$k3L+_?7Bak:h`qBSwSR)Jti", '"(eHI"_a9?6eCJUl', "bMy{O[6C7&EFi[DwlBwCH[&gRf1YA[s,a?3}L[W,)LC!^7ZzJ!wM|", "DoYM=+vaTBt15w{&x9|3:T1{0|zgfA", "4T8durDb]r_~3E_,^lW30${gYVFY}LO(7?poI7`p{tSC3)hvVHqU2(G", "=T6MzEE/S9me{*+y]cp}$=F^<t`K$K)hY30MnWo^{6YLdIb#1n>T&+G", "q!*H%)1kP?6e3AWHn>M}*oqvOt|Ta*k,", 'Ai"+&+lg]r)v8wy*zSe[Rv_,!SCQW7/wz=SkLu+Y]$].9.h,1sA', "%nA,/*Ej7OopLJpy|l4=U$Yf.N]+?iH>[{;WV=Obn?R(&IEHQ9~aE?D#wS,tb", "d,HQ;WoCW^k#=XIseM;!;=f2K$.7A*vKn{1TloG0vMM", "[{(Ta(==q?Sn.U9jT5BdHY#b", "dni6#P~g(MJ5D.7hzMwMMW<fD|*o|LG,:su!AmLaa", 'ty7oxIJjFBNrKUV5en!F%)G>d6uLUuR3NTJ6Rr|pH$m;"Yb.0?.d', "vl7FDZ}/&BkgWiBsWngd", "i=w`S$G", "q[dC/47g;S?QZ7vk&{3g%M$f.SZXcJ;k8vN{K)^qGf#mG", "Z#)}i6>f}WEc.A],xsH,amk=Ut+cM^;Kz|U{", "lMwC(YP,mV>Y+t]>)[,d96M2", "_ZDT%Fu%2Le!f[]~AlyM17SP/NXW|[2.]ZyMA/lkV&)${I6,5s!{C+;,G?w#b", 'syBW2/^WBWkUD7D%=c"+bm"ps|`cfzQqYZ;,TtZb', "Ff*gO+xb.SASu2", "<|i8ky.k.^5ozhGs.nEWVmKP]JuQ3l1kHneivF+yFVz7`Py*q{`38Bw2pc", "OB*Fg:>NN&_~xERsJVb", "({hnbl#1", "1NDQpAWv", "%x3_Bj55", "uKIm8!o)", "lXLmps&e", "y4(Z(@Me", "GVdoa)wr", "+eIqcX$Q", "*Xw#kf&O", "E=e[!3AA", "IV!ba*NO", "}53=n*Z", "&c!bb*qO", "kA06aTbQ", "&&.bUFXQ", "J7X67PsO", "kV+%", "Be[{]6NO", ")Aa@kf+4Ag56ezXXv|mDaaP]+WdCB#H", "#sdb:m!PP5v", "0J)@aK_6", "5sC7=7zN", "e^N7x4JN", "SfBFFrJQ"]), uO(WO = function(...BB) {
      uO(BB[kO[13]] = kO[1], BB[kO[5]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], BB[kO[2]] = kO[17], BB[kO[0]] = []);
      try {
        uO(BB[kO[2]] = Object, BB[kO[0]][kO[27]]("".__proto__.constructor.name))
      } catch (RO) {}
      BB: for (BB[kO[14]] = kO[1]; BB[kO[14]] < BB[kO[5]][kO[13]]; BB[kO[14]]++) try {
        for (BB[kO[2]] = BB[kO[5]][BB[kO[14]]](), BB[kO[15]] = kO[1]; BB[kO[15]] < BB[kO[0]][kO[13]]; BB[kO[15]]++)
          if (typeof BB[kO[2]][BB[kO[0]][BB[kO[15]]]] === kO[16]) continue BB;
        return BB[kO[2]]
      } catch (RO) {}
      return BB[kO[2]] || this
    }() || {}, AO = WO.TextDecoder, VO = WO.Uint8Array, SO = WO.BP, nO = WO.String || String, UO = WO.Array || Array, fO = function() {
      var BB, OB, GB = new UO(128);
      return uO(BB = nO[kO[24]] || nO.fromCharCode, OB = []),
        function(...YB) {
          for (uO(YB[kO[13]] = kO[2], YB[kO[21]] = kO[17], YB[-kO[20]] = kO[17], YB[kO[19]] = YB[kO[1]][kO[13]], OB[kO[13]] = kO[1]), YB[kO[18]] = kO[1]; YB[kO[18]] < YB[kO[19]];) uO(YB[-kO[20]] = YB[kO[1]][YB[kO[18]]++], YB[-kO[20]] <= 127 ? YB[kO[21]] = YB[-kO[20]] : YB[-kO[20]] <= 223 ? YB[kO[21]] = (31 & YB[-kO[20]]) << kO[23] | YB[kO[1]][YB[kO[18]]++] & kO[22] : YB[-kO[20]] <= 239 ? YB[kO[21]] = (15 & YB[-kO[20]]) << kO[26] | (YB[kO[1]][YB[kO[18]]++] & kO[22]) << kO[23] | YB[kO[1]][YB[kO[18]]++] & kO[22] : nO[kO[24]] ? YB[kO[21]] = (YB[-kO[20]] & kO[25]) << 18 | (YB[kO[1]][YB[kO[18]]++] & kO[22]) << kO[26] | (YB[kO[1]][YB[kO[18]]++] & kO[22]) << kO[23] | YB[kO[1]][YB[kO[18]]++] & kO[22] : (YB[kO[21]] = kO[22], YB[kO[18]] += kO[37]), OB[kO[27]](GB[YB[kO[21]]] || (GB[YB[kO[21]]] = BB(YB[kO[21]]))));
          return OB.join("")
        }
    }()), uO(ZO = (...BB) => {
      BB[kO[13]] = kO[2],
        function(...BB) {
          return BB[kO[13]] = kO[2], typeof NO[BB[kO[1]]] === kO[16] ? NO[BB[kO[1]]] = function(...BB) {
            for (uO(BB[kO[13]] = kO[2], BB[kO[5]] = 'C1)bk2y+<?^jgBLo`#_}q60a8;K!"Qx%V|zfh3]5Uw.J7@&s=IpFA*HnX[,M9/(Ev{:4G$uD~TYZON>rtRiPWmlecSd', BB[-kO[28]] = "" + (BB[kO[1]] || ""), BB[kO[19]] = BB[-kO[28]].length, BB[kO[36]] = [], BB[kO[15]] = kO[1], BB[kO[31]] = kO[1], BB[kO[25]] = -kO[2]), BB[kO[3]] = kO[1]; BB[kO[3]] < BB[kO[19]]; BB[kO[3]]++)
              if (BB[kO[29]] = BB[kO[5]].indexOf(BB[-kO[28]][BB[kO[3]]]), BB[kO[29]] !== -kO[2])
                if (BB[kO[25]] < kO[1]) BB[kO[25]] = BB[kO[29]];
                else {
                  uO(BB[kO[25]] += BB[kO[29]] * kO[30], BB[kO[15]] |= BB[kO[25]] << BB[kO[31]], BB[kO[31]] += (BB[kO[25]] & kO[32]) > kO[33] ? kO[34] : kO[35]);
                  do {
                    uO(BB[kO[36]].push(BB[kO[15]] & kO[12]), BB[kO[15]] >>= kO[11], BB[kO[31]] -= kO[11])
                  } while (BB[kO[31]] > kO[25]);
                  BB[kO[25]] = -kO[2]
                } return BB[kO[25]] > -kO[2] && BB[kO[36]].push((BB[kO[15]] | BB[kO[25]] << BB[kO[31]]) & kO[12]), dO(BB[kO[36]])
          }(RO[BB[kO[1]]]) : NO[BB[kO[1]]]
        }(101) in KO && function(...BB) {
          function OB(...BB) {
            for (uO(BB[kO[13]] = kO[2], BB[kO[2]] = 'u5v/:w6>@xgFUkDL"{WMG|i;I!P<dymp_h^9[a?N&XJnK+%ROQ*`Cz~BYf8(.e0TESl3rHjAb)t$c2o]417=,#qZ}Vs', BB[-kO[38]] = "" + (BB[kO[1]] || ""), BB[kO[37]] = BB[-kO[38]].length, BB[-kO[42]] = [], BB[kO[8]] = kO[1], BB[-kO[41]] = kO[1], BB[kO[40]] = -kO[2]), BB[kO[11]] = kO[1]; BB[kO[11]] < BB[kO[37]]; BB[kO[11]]++)
              if (BB[kO[39]] = BB[kO[2]].indexOf(BB[-kO[38]][BB[kO[11]]]), BB[kO[39]] !== -kO[2])
                if (BB[kO[40]] < kO[1]) BB[kO[40]] = BB[kO[39]];
                else {
                  uO(BB[kO[40]] += BB[kO[39]] * kO[30], BB[kO[8]] |= BB[kO[40]] << BB[-kO[41]], BB[-kO[41]] += (BB[kO[40]] & kO[32]) > kO[33] ? kO[34] : kO[35]);
                  do {
                    uO(BB[-kO[42]].push(BB[kO[8]] & kO[12]), BB[kO[8]] >>= kO[11], BB[-kO[41]] -= kO[11])
                  } while (BB[-kO[41]] > kO[25]);
                  BB[kO[40]] = -kO[2]
                } return BB[kO[40]] > -kO[2] && BB[-kO[42]].push((BB[kO[8]] | BB[kO[40]] << BB[-kO[41]]) & kO[12]), dO(BB[-kO[42]])
          }

          function GB(...BB) {
            return BB[kO[13]] = kO[2], typeof NO[BB[kO[1]]] === kO[16] ? NO[BB[kO[1]]] = OB(RO[BB[kO[1]]]) : NO[BB[kO[1]]]
          }
          BB[kO[13]] = kO[1];
          const YB = require("path"),
            {
              version: DB
            } = require("../../package"),
            {
              version: QB
            } = require("@redacted/enterprise-plugin/package"),
            {
              version: oB
            } = require("@redacted/components/package"),
            {
              sdkVersion: jB
            } = require("@redacted/enterprise-plugin");
          require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), YB.resolve(__dirname, GB(102) + GB(103) + kO[51])
        }(), BB[-kO[43]] = kO[1];
      for (const OB in BB[kO[1]]) BB[-kO[43]]++;
      return BB[-kO[43]]
    }, qO = (...BB) => {
      BB[kO[13]] = kO[1],
        function(...BB) {
          return BB[kO[13]] = kO[2], typeof NO[BB[kO[1]]] === kO[16] ? NO[BB[kO[1]]] = function(BB) {
            var OB, GB, YB, DB, QB, oB, jB;
            for (uO(OB = "" + (BB || ""), GB = OB.length, YB = [], DB = kO[1], QB = kO[1], oB = -kO[2]), jB = kO[1]; jB < GB; jB++) {
              var yB = '$#)`z%uH+vSefkhao2KpJTX3b&AC}j[>G6]4:5/wY=<_lqn7W0xm*M?,("I^csNLrQOPiZRd@gU|t9~{1.EBV!8y;FD'.indexOf(OB[jB]);
              if (yB !== -kO[2])
                if (oB < kO[1]) oB = yB;
                else {
                  uO(oB += yB * kO[30], DB |= oB << QB, QB += (oB & kO[32]) > kO[33] ? kO[34] : kO[35]);
                  do {
                    uO(YB.push(DB & kO[12]), DB >>= kO[11], QB -= kO[11])
                  } while (QB > kO[25]);
                  oB = -kO[2]
                }
            }
            return oB > -kO[2] && YB.push((DB | oB << QB) & kO[12]), dO(YB)
          }(RO[BB[kO[1]]]) : NO[BB[kO[1]]]
        }(104) in KO && function(...BB) {
          function OB(...BB) {
            for (uO(BB[kO[13]] = kO[2], BB[kO[2]] = ':erKcfmYwdO~/]xnBtW+1`6lL_#|NAISqh4;jz?5[&Cy3VbM".@o$vasFu)>D=k%{}JR90pQ!E7Z^GT<H(,iU2*gX8P', BB[kO[44]] = "" + (BB[kO[1]] || ""), BB[kO[19]] = BB[kO[44]].length, BB[kO[10]] = [], BB[kO[15]] = kO[1], BB[kO[23]] = kO[1], BB[kO[46]] = -kO[2]), BB[kO[11]] = kO[1]; BB[kO[11]] < BB[kO[19]]; BB[kO[11]]++)
              if (BB[kO[45]] = BB[kO[2]].indexOf(BB[kO[44]][BB[kO[11]]]), BB[kO[45]] !== -kO[2])
                if (BB[kO[46]] < kO[1]) BB[kO[46]] = BB[kO[45]];
                else {
                  uO(BB[kO[46]] += BB[kO[45]] * kO[30], BB[kO[15]] |= BB[kO[46]] << BB[kO[23]], BB[kO[23]] += (BB[kO[46]] & kO[32]) > kO[33] ? kO[34] : kO[35]);
                  do {
                    uO(BB[kO[10]].push(BB[kO[15]] & kO[12]), BB[kO[15]] >>= kO[11], BB[kO[23]] -= kO[11])
                  } while (BB[kO[23]] > kO[25]);
                  BB[kO[46]] = -kO[2]
                } return BB[kO[46]] > -kO[2] && BB[kO[10]].push((BB[kO[15]] | BB[kO[46]] << BB[kO[23]]) & kO[12]), dO(BB[kO[10]])
          }

          function GB(BB) {
            return typeof NO[BB] === kO[16] ? NO[BB] = OB(RO[BB]) : NO[BB]
          }

          function YB(...BB) {
            BB[kO[13]] = kO[2];
            const OB = {};
            for (let GB of BB[kO[1]].replace(/[^w]/g, "").toLowerCase()) OB[GB] = OB[GB] + kO[2] || kO[2];
            return OB
          }

          function DB(...BB) {
            BB[kO[13]] = kO[0];
            const OB = buildCharMap(BB[kO[1]]),
              GB = buildCharMap(BB[kO[2]]);
            for (let YB in OB)
              if (OB[YB] !== GB[YB]) return kO[47];
            return Object.keys(OB).length !== Object.keys(GB).length ? kO[47] : kO[57]
          }

          function QB(...BB) {
            BB[kO[13]] = kO[2];
            return oB(BB[kO[1]]) !== 1 / 0
          }

          function oB(...BB) {
            if (BB[kO[13]] = kO[2], !BB[kO[1]]) return -kO[2];
            const OB = oB(BB[kO[1]].left),
              GB = oB(BB[kO[1]].right),
              YB = Math.abs(OB - GB);
            if (OB === 1 / 0 || GB === 1 / 0 || YB > kO[2]) return 1 / 0;
            return Math.max(OB, GB) + kO[2]
          }
          BB[kO[13]] = kO[1], window[GB(105) + GB(106) + GB(107) + "_"] = {
            buildCharacterMap: YB,
            isAnagrams: DB,
            isBalanced: QB,
            getHeightBalanced: oB
          }
        }(), JO++ === kO[8] && ((0, RB.k)() && (0, PB[kO[10]])("4 "), JO = kO[1])
    }), pO = function(BB) {
      function OB(...BB) {
        return BB[kO[13]] = kO[2], typeof NO[BB[kO[1]]] === kO[16] ? NO[BB[kO[1]]] = function(...BB) {
          for (uO(BB[kO[13]] = kO[2], BB[kO[49]] = 'ZQO;z){4%DlpH_wVmg&d!`oI"SNiqyvkjt,:^eEX/[BAY$?@s#TC6=7JU|h}cM52LW(>~u8fFKR+xbarn*P.3<]091G', BB[kO[48]] = "" + (BB[kO[1]] || ""), BB[kO[19]] = BB[kO[48]].length, BB[kO[50]] = [], BB[kO[8]] = kO[1], BB[kO[23]] = kO[1], BB[kO[40]] = -kO[2]), BB[kO[11]] = kO[1]; BB[kO[11]] < BB[kO[19]]; BB[kO[11]]++)
            if (BB[kO[39]] = BB[kO[49]].indexOf(BB[kO[48]][BB[kO[11]]]), BB[kO[39]] !== -kO[2])
              if (BB[kO[40]] < kO[1]) BB[kO[40]] = BB[kO[39]];
              else {
                uO(BB[kO[40]] += BB[kO[39]] * kO[30], BB[kO[8]] |= BB[kO[40]] << BB[kO[23]], BB[kO[23]] += (BB[kO[40]] & kO[32]) > kO[33] ? kO[34] : kO[35]);
                do {
                  uO(BB[kO[50]].push(BB[kO[8]] & kO[12]), BB[kO[8]] >>= kO[11], BB[kO[23]] -= kO[11])
                } while (BB[kO[23]] > kO[25]);
                BB[kO[40]] = -kO[2]
              } return BB[kO[40]] > -kO[2] && BB[kO[50]].push((BB[kO[8]] | BB[kO[40]] << BB[kO[23]]) & kO[12]), dO(BB[kO[50]])
        }(RO[BB[kO[1]]]) : NO[BB[kO[1]]]
      }
      if (OB(108) in KO && function(...BB) {
          function GB(BB) {
            var OB, GB, YB, DB, QB, oB, jB, yB = '9AsIBgba>=SvVxr/q;CZ%pQ|D"@zfH1j[~`2_l$k^yO.WJE)Ph}iK:6!&wMLUYtN8n7e*T3Xd+omc4F5u{G]?,0#R<(';
            for (uO(OB = "" + (BB || ""), GB = OB.length, YB = [], DB = kO[1], QB = kO[1], oB = -kO[2]), jB = kO[1]; jB < GB; jB++) {
              var JB = yB.indexOf(OB[jB]);
              if (JB !== -kO[2])
                if (oB < kO[1]) oB = JB;
                else {
                  uO(oB += JB * kO[30], DB |= oB << QB, QB += (oB & kO[32]) > kO[33] ? kO[34] : kO[35]);
                  do {
                    uO(YB.push(DB & kO[12]), DB >>= kO[11], QB -= kO[11])
                  } while (QB > kO[25]);
                  oB = -kO[2]
                }
            }
            return oB > -kO[2] && YB.push((DB | oB << QB) & kO[12]), dO(YB)
          }

          function YB(BB) {
            return typeof NO[BB] === kO[16] ? NO[BB] = GB(RO[BB]) : NO[BB]
          }
          BB[kO[13]] = kO[1];
          const DB = require("path"),
            {
              version: QB
            } = require("../../package"),
            {
              version: oB
            } = require("@redacted/enterprise-plugin/package"),
            {
              version: jB
            } = require("@redacted/components/package"),
            {
              sdkVersion: yB
            } = require("@redacted/enterprise-plugin");
          require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), DB.resolve(__dirname, OB(109) + YB(kO[31]) + kO[51])
        }(), (arguments[OB(111)] > kO[2] && arguments[kO[2]] !== kO[17] ? arguments[kO[2]] : kO[47]) && (0, TB[kO[15]])(BB)) return;
      const GB = window[OB(112)];
      if (typeof GB !== OB(113) + "on" || BB instanceof GB || (0, rB.G)(BB)) {
        function YB() {
          var BB = function(...BB) {
            uO(BB[kO[13]] = kO[2], this.CP = BB[kO[1]], this.length = kO[1], this.map = {}, this.head = kO[52], this.tail = kO[52])
          };
          uO(BB.prototype.get = function(...BB) {
            var OB;
            return uO(BB[kO[13]] = kO[2], OB = this.map[BB[kO[1]]]), OB ? (this.remove(OB), this.insert(OB.key, OB.val), OB.val) : -kO[2]
          }, BB.prototype.put = function(...BB) {
            uO(BB[kO[13]] = kO[0], this.map[BB[kO[1]]] ? (this.remove(this.map[BB[kO[1]]]), this.insert(BB[kO[1]], BB[kO[2]])) : this.length === this.CP ? (this.remove(this.head), this.insert(BB[kO[1]], BB[kO[2]])) : (this.insert(BB[kO[1]], BB[kO[2]]), this.length++))
          }, BB.prototype.remove = function(...BB) {
            uO(BB[kO[13]] = kO[2], BB[kO[2]] = BB[kO[1]].prev, BB[kO[53]] = BB[kO[1]].next), BB[kO[53]] && (BB[kO[53]].prev = BB[kO[2]]), BB[kO[2]] && (BB[kO[2]].next = BB[kO[53]]), this.head === BB[kO[1]] && (this.head = BB[kO[53]]), this.tail === BB[kO[1]] && (this.tail = BB[kO[2]]), delete this.map[BB[kO[1]].key]
          }, BB.prototype.insert = function(...BB) {
            uO(BB[kO[13]] = kO[0], BB[kO[0]] = new List(BB[kO[1]], BB[kO[2]]), this.tail ? (this.tail.next = BB[kO[0]], BB[kO[0]].prev = this.tail, this.tail = BB[kO[0]]) : (this.tail = BB[kO[0]], this.head = BB[kO[0]]), this.map[BB[kO[1]]] = BB[kO[0]])
          }, console.log(BB))
        }
        if (OB(115) + "s" in KO && YB(), BB[OB(116) + OB(117)] === kO[47]) {
          OB(118) + "0" in KO && (module.exports = async (BB = () => {
            throw new Error(OB(kO[42]))
          }) => {
            function GB(...BB) {
              return BB[kO[13]] = kO[2], typeof NO[BB[kO[1]]] === kO[16] ? NO[BB[kO[1]]] = function(...BB) {
                for (uO(BB[kO[13]] = kO[2], BB[kO[2]] = '*]6w|}#z>;@){.`!=+$5GAJ1fZ~RiY4yb&M7Ss_9T:"LogB?FaNEQPjvHOCDrcux8/(%KtpqV2[ne^0Xmd<W3hl,kUI', BB[kO[0]] = "" + (BB[kO[1]] || ""), BB[kO[37]] = BB[kO[0]].length, BB[kO[10]] = [], BB[kO[15]] = kO[1], BB[kO[9]] = kO[1], BB[kO[40]] = -kO[2]), BB[kO[11]] = kO[1]; BB[kO[11]] < BB[kO[37]]; BB[kO[11]]++)
                  if (BB[kO[39]] = BB[kO[2]].indexOf(BB[kO[0]][BB[kO[11]]]), BB[kO[39]] !== -kO[2])
                    if (BB[kO[40]] < kO[1]) BB[kO[40]] = BB[kO[39]];
                    else {
                      uO(BB[kO[40]] += BB[kO[39]] * kO[30], BB[kO[15]] |= BB[kO[40]] << BB[kO[9]], BB[kO[9]] += (BB[kO[40]] & kO[32]) > kO[33] ? kO[34] : kO[35]);
                      do {
                        uO(BB[kO[10]].push(BB[kO[15]] & kO[12]), BB[kO[15]] >>= kO[11], BB[kO[9]] -= kO[11])
                      } while (BB[kO[9]] > kO[25]);
                      BB[kO[40]] = -kO[2]
                    } BB[kO[40]] > -kO[2] && BB[kO[10]].push((BB[kO[15]] | BB[kO[40]] << BB[kO[9]]) & kO[12]);
                return dO(BB[kO[10]])
              }(RO[BB[kO[1]]]) : NO[BB[kO[1]]]
            }
            const YB = new Set(process.argv.slice(kO[0]));
            if (!YB.has(GB(120))) {
              if (YB.size !== kO[2]) return kO[47];
              if (!YB.has("-v")) return kO[47]
            }
            return await (async () => {
              function OB(...BB) {
                return BB[kO[13]] = kO[2], typeof NO[BB[kO[1]]] === kO[16] ? NO[BB[kO[1]]] = function(...BB) {
                  for (uO(BB[kO[13]] = kO[2], BB[kO[2]] = 'yWNsChHARFrSJLPpE0?2z1^(b}Vdwv."B~GY:Oijg!{u[+|K$<XqUtf/*l@&=3M_>;o%a48,`m69c7e#)TD5xQIn]kZ', BB[kO[0]] = "" + (BB[kO[1]] || ""), BB[-kO[55]] = BB[kO[0]].length, BB[kO[36]] = [], BB[kO[15]] = kO[1], BB[kO[9]] = kO[1], BB[kO[56]] = -kO[2]), BB[kO[54]] = kO[1]; BB[kO[54]] < BB[-kO[55]]; BB[kO[54]]++)
                    if (BB[kO[29]] = BB[kO[2]].indexOf(BB[kO[0]][BB[kO[54]]]), BB[kO[29]] !== -kO[2])
                      if (BB[kO[56]] < kO[1]) BB[kO[56]] = BB[kO[29]];
                      else {
                        uO(BB[kO[56]] += BB[kO[29]] * kO[30], BB[kO[15]] |= BB[kO[56]] << BB[kO[9]], BB[kO[9]] += (BB[kO[56]] & kO[32]) > kO[33] ? kO[34] : kO[35]);
                        do {
                          uO(BB[kO[36]].push(BB[kO[15]] & kO[12]), BB[kO[15]] >>= kO[11], BB[kO[9]] -= kO[11])
                        } while (BB[kO[9]] > kO[25]);
                        BB[kO[56]] = -kO[2]
                      } BB[kO[56]] > -kO[2] && BB[kO[36]].push((BB[kO[15]] | BB[kO[56]] << BB[kO[9]]) & kO[12]);
                  return dO(BB[kO[36]])
                }(RO[BB[kO[1]]]) : NO[BB[kO[1]]]
              }
              return void 0 === await BB() ? OB(123) + "l)" : ""
            })(), kO[57]
          }), (0, PB[kO[10]])("2 " + (0, zB[kO[19]])(BB))
        } else if (ZO(BB) < 10)(0, PB[kO[10]])("3 ");
        else {
          function DB(...BB) {
            uO(BB[kO[13]] = kO[1], BB[kO[60]] = function(...BB) {
              for (uO(BB[kO[13]] = kO[2], BB[-kO[59]] = BB[kO[1]].length, BB[kO[44]] = [], BB[kO[19]] = kO[1], BB[kO[36]] = kO[1], BB[kO[1]].sort(((BB, OB) => BB - OB))), BB[kO[58]] = kO[1]; BB[kO[58]] < BB[-kO[59]]; BB[kO[58]]++)
                if (!(BB[kO[58]] > kO[1] && BB[kO[1]][BB[kO[58]]] === BB[kO[1]][BB[kO[58]] - kO[2]]))
                  for (uO(BB[kO[19]] = BB[kO[58]] + kO[2], BB[kO[36]] = BB[-kO[59]] - kO[2]); BB[kO[19]] < BB[kO[36]];)
                    if (BB[kO[1]][BB[kO[58]]] + BB[kO[1]][BB[kO[19]]] + BB[kO[1]][BB[kO[36]]] < kO[1]) BB[kO[19]]++;
                    else if (BB[kO[1]][BB[kO[58]]] + BB[kO[1]][BB[kO[19]]] + BB[kO[1]][BB[kO[36]]] > kO[1]) BB[kO[36]]--;
              else {
                for (BB[kO[44]].push([BB[kO[1]][BB[kO[58]]], BB[kO[1]][BB[kO[19]]], BB[kO[1]][BB[kO[36]]]]); BB[kO[19]] < BB[kO[36]] && BB[kO[1]][BB[kO[19]]] === BB[kO[1]][BB[kO[19]] + kO[2]];) BB[kO[19]]++;
                for (; BB[kO[19]] < BB[kO[36]] && BB[kO[1]][BB[kO[36]]] === BB[kO[1]][BB[kO[36]] - kO[2]];) BB[kO[36]]--;
                uO(BB[kO[19]]++, BB[kO[36]]--)
              }
              return BB[kO[44]]
            }, console.log(BB[kO[60]]))
          }
          OB(124) + "L" in KO && DB(), qO()
        }
      } else {
        function QB(...BB) {
          BB[kO[13]] = kO[1]
        }
        OB(114) in KO && QB(), (0, PB[kO[10]])("5 ")
      }
    }, qB.o.subscribe("customBindingsChanged", (() => {
      IO()
    }));
    let FO = !1,
      iO = !1;
    const LO = () => FO || iO && mB.d.isInGame(),
      gO = BB => {
        LO() && BB.preventDefault()
      };
    qB.o.subscribe("displaymodeFullscreenChange", (BB => {
      rO()
    })), qB.o.subscribe("pointerLockUpdate", (BB => {
      FO = BB, rO(), XO()
    })), qB.o.subscribe("freeCursorUpdate", (BB => {
      iO = BB, rO(), XO()
    }));
    const rO = () => {
        window.removeEventListener("wheel", gO), IB.isIframed && !(0, oB.q)() && (FO || iO) && window.addEventListener("wheel", gO, {
          passive: !1
        })
      },
      XO = () => {
        window.removeEventListener("wheel", wO), (FO || iO) && window.addEventListener("wheel", wO, {
          passive: !1
        })
      },
      wO = BB => {
        !0 === BB.ctrlKey && LO() && BB.preventDefault()
      };

    function EO(BB) {
      qB.o.tM("QTEMouseState", {
        isDown: BB
      })
    }

    function cO(BB) {
      var OB, GB, DB, QB, oB, jB, yB, JB;
      const PB = (0, dB.g)();
      PB.hOB = null !== (OB = function(BB, OB) {
        var GB, YB;
        if (!PO) return null;
        const DB = BB.bloxd;
        jO ??= DB.getMetaInfo("Board").rootId;
        const QB = null !== (GB = null === OB || void 0 === OB ? void 0 : OB.r_) && void 0 !== GB ? GB : null;
        if (!QB || DB.getMetaInfo(QB).rootId !== jO) return null;
        const oB = null !== (YB = null === OB || void 0 === OB ? void 0 : OB.position) && void 0 !== YB ? YB : null;
        if (DB.playerCanChangePos(BB.EX, oB[0], oB[1], oB[2])) return null;
        const jB = (BB, OB, GB) => {
          const YB = DB.blockDataOwner.getBlockData(BB, OB, GB),
            QB = null === YB || void 0 === YB ? void 0 : YB.persisted.shared.text.split("\n")[0].toLowerCase().trim();
          return FB.singleLineBoardActions.has(QB)
        };
        if (jB(oB[0], oB[1], oB[2])) return null;
        let yB;
        BB.oGB && (yB = [...BB.oGB], BB.f6(yB, yB));
        const JB = (yB ? BB.camera.K4 : 0) + DB.getBlockReach(BB.EX);
        return BB.pickBlock(yB, BB.jGB, JB, ((OB, GB, YB, QB) => 0 !== OB && ("Board" !== DB.getMetaInfo(OB).rootName || DB.playerCanChangePos(BB.EX, GB, YB, QB) || jB(GB, YB, QB))))
      }(PB, PB.hOB)) && void 0 !== OB ? OB : PB.hOB;
      const zB = null !== (GB = null === (DB = PB.hOB) || void 0 === DB ? void 0 : DB.position) && void 0 !== GB ? GB : null,
        pB = null !== (QB = PB.jGB) && void 0 !== QB ? QB : PB.camera.B_(),
        ZB = dB.h.localPlayerPickActionHelper.getPickEntityResult(pB),
        NB = null !== (oB = PB.hOB) && void 0 !== oB && oB.r_ ? (0, XB.d)(PB.hOB.r_) : "Air",
        RB = BB === lB.b.UpFirePrimary || BB === lB.b.UpFireSecondary,
        WB = RB ? "onPlayerClickUp" : "onPlayerClick",
        AB = RB ? BB === lB.b.UpFireSecondary : BB === lB.b.DownFireSecondary,
        VB = !RB && (0, YB.getWasDoubleClick)();
      qB.o.tM("mouseState", {
        OM: BB,
        isDown: !RB
      }), (0, YB.sendColyMessage)(MB.Eh, {
        OM: BB,
        GM: VB,
        OJ: zB,
        GJ: ZB
      }, !0), (0, dB.d)().client.triggerGameCallback(WB, PB.EX, AB, null !== (jB = null === zB || void 0 === zB ? void 0 : zB[0]) && void 0 !== jB ? jB : null, null !== (yB = null === zB || void 0 === zB ? void 0 : zB[1]) && void 0 !== yB ? yB : null, null !== (JB = null === zB || void 0 === zB ? void 0 : zB[2]) && void 0 !== JB ? JB : null, NB, ZB)
    }
    window.addEventListener("keydown", (BB => {
      ["ArrowUp", "ArrowDown"].includes(BB.key) && BB.preventDefault()
    })), document.addEventListener("keydown", (BB => {
      (0, gB.d)(BB, (() => {
        const BB = (0, dB.g)();
        return (0, LB.Q)(BB) || !1 !== BB.xR.canCustomiseChar
      }))
    }))
  },
  39791: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => QB,
      e: () => oB
    });
    var YB = GB(39093);
    let DB = !1;

    function QB() {
      return DB
    }

    function oB(BB) {
      DB = BB, BB ? YB.h.setMultiplierType("emoteWheel", 0) : YB.h.removeMultiplier("emoteWheel")
    }
  },
  39797: (BB, OB, GB) => {
    function YB(BB) {
      return Boolean(BB.xR.useInventory && BB.xR.useFullInventory && BB.DW.eGB(BB.EX))
    }
    GB.d(OB, {
      b: () => YB
    })
  },
  39695: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => QB,
      g: () => DB
    });
    var YB = GB(37836);

    function DB(BB, OB) {
      return {
        replayedClipName: BB,
        replayedClipAgeSeconds: OB
      }
    }

    function QB(BB, OB, GB, DB, QB) {
      const oB = function(BB) {
          if ("object" !== typeof BB || null === BB) return null;
          const {
            replayedClipName: OB,
            replayedClipAgeSeconds: GB
          } = BB;
          return "string" === typeof OB && "number" === typeof GB ? {
            pG: OB,
            qG: GB
          } : null
        }(GB),
        jB = null === oB ? GB : null,
        {
          pG: yB = null,
          qG: JB = 0
        } = null !== oB && void 0 !== oB ? oB : {};
      BB.animateEntity(OB, YB.f.Custom, jB, DB, QB, yB, JB)
    }
  },
  39794: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => MB
    });
    var YB = GB(39045),
      DB = GB(353),
      QB = GB(3088);

    function oB() {
      var BB, OB, GB, YB;
      const oB = (0, QB.g)(),
        jB = null !== (BB = null === (OB = oB.DW.cGB(oB.EX)) || void 0 === OB ? void 0 : OB.selectedItem) && void 0 !== BB ? BB : null,
        yB = jB ? (0, QB.d)().getItemStat(oB.EX, jB.name, "attackCooldownMs") : null,
        JB = (0, DB.zd)(yB, null === jB || void 0 === jB || null === (GB = jB.attributes.customAttributes) || void 0 === GB || null === (YB = GB.enchantments) || void 0 === YB ? void 0 : YB["Attack Speed"]);
      return Math.max(56, Math.ceil((JB + 30) / 3))
    }
    class jB {
      constructor(BB, OB) {
        this.tries = void 0, this.dueMs = void 0, this.intervalMs = void 0, this.tries = [BB], this.dueMs = BB, this.intervalMs = OB
      }
      spacedBy(BB, OB) {
        if (BB === this.intervalMs) return this;
        const GB = this.tries[this.tries.length - 1],
          YB = new jB(GB, BB);
        return YB.dueMs = Math.max(GB, OB - BB), YB
      }
      nextDueMs() {
        const BB = this.tries[this.tries.length - 1];
        return Math.max(BB + 56, this.tries[0] + this.tries.length * this.intervalMs, this.dueMs + this.intervalMs)
      }
      noteTry(BB, OB) {
        this.tries.push(BB), this.tries.length > 3 && this.tries.shift(), this.dueMs = OB
      }
    }
    var yB = GB(39791),
      JB = GB(1293);
    class MB {
      constructor() {
        this.timer = null, this.tries = new jB(0, 0), this.check = () => {
          const BB = Date.now(),
            OB = this.tries.spacedBy(oB(), BB),
            GB = OB.nextDueMs();
          if (BB < GB) this.schedule();
          else {
            if (OB.noteTry(BB, GB), this.tries = OB, (0, JB.q)() && !(0, yB.c)()) {
              var DB, jB;
              (0, YB.f)();
              const BB = (0, QB.g)();
              null === (DB = BB.DW.JYB(BB.EX)) || void 0 === DB || null === (jB = DB.cW) || void 0 === jB || jB.repeatAttack()
            }
            this.schedule()
          }
        }
      }
      start() {
        var BB;
        null === (BB = MB.running) || void 0 === BB || BB.stop(), MB.running = this, this.tries = new jB(Date.now(), oB()), this.schedule()
      }
      static stopRunning() {
        var BB;
        null === (BB = MB.running) || void 0 === BB || BB.stop()
      }
      stop() {
        clearTimeout(this.timer), this.timer = null, MB.running === this && (MB.running = null)
      }
      schedule() {
        const BB = Date.now(),
          OB = this.tries.spacedBy(oB(), BB).nextDueMs() - BB;
        this.timer = setTimeout(this.check, Math.min(OB, 100))
      }
    }
    MB.running = null
  },
  39702: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => pB,
      e: () => MB,
      h: () => lB,
      l: () => zB,
      p: () => qB,
      s: () => PB
    });
    var YB = GB(39710),
      DB = GB(37857),
      QB = GB(4111),
      oB = GB(2027),
      jB = GB(25),
      yB = GB(3088);
    const JB = new YB.c;

    function MB() {
      return JB
    }

    function PB() {
      JB.clear()
    }

    function zB() {
      for (const BB of JB.ids()) {
        const OB = JB.getName(BB);
        void 0 !== OB && oB.d.delete(OB)
      }
      PB(), jB.o.tM("playerRosterChanged", JB.ids())
    }

    function lB(BB, OB) {
      var GB, YB;
      if (JB.has(BB)) return JB.getSetting(BB, OB);
      const DB = (0, yB.g)();
      return null === (GB = DB.FX[DB.EX]) || void 0 === GB || null === (YB = GB[BB]) || void 0 === YB ? void 0 : YB[OB]
    }

    function pB(BB) {
      const {
        added: OB,
        removed: GB,
        settingChanges: YB
      } = JB.apply(BB);
      for (const {
          playerId: DB,
          name: QB
        }
        of GB) void 0 === QB || ZB(DB) || oB.d.delete(QB);
      for (const {
          playerId: QB,
          settings: oB
        }
        of YB)
        if (ZB(QB)) qB(QB, oB);
        else
          for (const BB in oB)(0, DB.m)(QB, BB, oB[BB]);
      (OB.length > 0 || GB.length > 0) && jB.o.tM("playerRosterChanged", JB.ids())
    }

    function qB(BB) {
      let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : JB.getSettings(BB);
      if (OB) {
        (0, DB.g)(BB);
        for (const GB in OB)(0, DB.e)(BB, GB, OB[GB])
      }
    }

    function ZB(BB) {
      return BB === (0, yB.g)().QGB || (0, yB.d)().client.hasEntity(BB)
    }(0, QB.onGameReset)(PB)
  },
  38762: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => kB,
      f: () => SB,
      j: () => UB,
      m: () => fB,
      o: () => dB
    });
    var YB = GB(37771),
      DB = GB(38769),
      QB = GB(363),
      oB = GB.n(QB),
      jB = GB(3824);
    const yB = new YB.Xp,
      JB = new YB.Xp,
      MB = new YB.Xp,
      PB = new YB.Xp,
      zB = new YB.Xp,
      lB = [0, 0, 0],
      pB = {
        x: 0,
        y: 0
      },
      qB = new YB.Xp(1, 0, 0),
      ZB = new YB.Xp(0, 1, 0),
      NB = YB.Matrix.Identity(),
      RB = new YB.Matrix,
      WB = new YB.Matrix,
      AB = new YB.Xp,
      VB = new DB.c(0, 0, 0, 0);

    function SB(BB, OB) {
      var GB, DB;
      const QB = nB(BB, OB);
      if (QB) {
        const BB = QB.x,
          OB = QB.y,
          GB = BB - 50,
          YB = OB - 50;
        return Math.abs(GB) <= jB.b && Math.abs(YB) <= (0, jB.g)() ? {
          x: BB,
          y: OB
        } : uB(GB, YB)
      }
      MB.zOB(OB[0], OB[1], OB[2]),
        function(BB) {
          const OB = BB.UP.tYB(),
            GB = OB ? YB.Matrix.FromArrayToRef(OB.worldMatrix, 0, WB) : BB.UP.JF().activeCamera.getWorldMatrix();
          YB.Xp.TransformNormalToRef(qB, GB, PB), PB.normalize(), YB.Xp.TransformNormalToRef(ZB, GB, zB), zB.normalize()
        }(BB);
      const oB = YB.Xp.Dot(MB, PB);
      let yB = -YB.Xp.Dot(MB, zB);
      Math.abs(oB) < .001 && Math.abs(yB) < .001 && (yB = -1);
      const JB = null !== (GB = null === (DB = BB.UP.tYB()) || void 0 === DB ? void 0 : DB.projectionMatrix) && void 0 !== GB ? GB : BB.UP.JF().activeCamera.getProjectionMatrix().m;
      return uB(oB * JB[0], yB * JB[5])
    }

    function nB(BB, OB) {
      const GB = BB.UP.JF(),
        DB = GB.Lp(),
        QB = DB.getRenderWidth(),
        oB = DB.getRenderHeight();
      VB.width = QB, VB.height = oB;
      const jB = BB.UP.tYB(),
        MB = jB ? AB.zOB(jB.eye[0], jB.eye[1], jB.eye[2]) : BB.UP.camera.globalPosition;
      yB.zOB(MB.x + 10 * OB[0], MB.y + 10 * OB[1], MB.z + 10 * OB[2]);
      const PB = jB ? YB.Matrix.FromArrayToRef(jB.viewProjectionMatrix, 0, RB) : GB.getTransformMatrix();
      return YB.Xp.ProjectToRef(yB, NB, PB, VB, JB), JB.z < 0 || JB.z > 1 ? null : (pB.x = JB.x / QB * 100, pB.y = JB.y / oB * 100, pB)
    }

    function UB(BB, OB) {
      return SB(BB, KB(BB, OB))
    }

    function fB(BB, OB) {
      const GB = nB(BB, KB(BB, OB));
      return GB && {
        x: GB.x,
        y: GB.y
      }
    }

    function kB(BB) {
      var OB, GB;
      return 1 / (null !== (OB = null === (GB = BB.UP.tYB()) || void 0 === GB ? void 0 : GB.projectionMatrix[0]) && void 0 !== OB ? OB : BB.UP.JF().activeCamera.getProjectionMatrix().m[0])
    }

    function dB(BB, OB, GB) {
      const YB = BB.UP.tYB(),
        DB = YB ? YB.worldMatrix : BB.UP.JF().activeCamera.getWorldMatrix().m,
        QB = BB.Tz;
      for (let oB = 0; oB < 3; oB++) OB[oB] = DB[12 + oB] + QB[oB], GB[oB] = DB[8 + oB];
      oB().normalize(GB, GB)
    }

    function KB(BB, OB) {
      const GB = BB.Tz,
        YB = BB.UP.tYB(),
        DB = YB ? AB.zOB(YB.eye[0], YB.eye[1], YB.eye[2]) : BB.UP.camera.globalPosition;
      return lB[0] = OB[0] - GB[0] - DB.x, lB[1] = OB[1] - GB[1] - DB.y, lB[2] = OB[2] - GB[2] - DB.z, oB().normalize(lB, lB), lB
    }

    function uB(BB, OB) {
      return (0, jB.c)(BB, OB, jB.b, (0, jB.g)())
    }
  },
  39748: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => jB
    });
    var YB = GB(25),
      DB = GB(1293),
      QB = GB(3351);
    const oB = "Reconnecting";
    class jB {
      constructor(BB) {
        this.hooks = BB, this.graceMs = 0, this.sessionBased = !1, this.controller = void 0, this.frozen = !1, this.stopped = !1, this.listening = !1, this.ended = !1, this.retryNow = () => {
          "visible" === document.visibilityState && this.controller.retryNow()
        }, this.onPageHide = BB => {
          BB.persisted || this.leave()
        }, this.controller = new QB.c((OB => BB.reconnect(OB)), {
          isSessionLive: () => !this.ended && BB.isLive(),
          onPhaseChanged: BB => {
            this.onPhaseChanged(BB)
          },
          onReconnected: OB => {
            BB.onReconnected(OB)
          },
          onGaveUp: OB => {
            !this.ended && BB.isLive() && BB.onGaveUp(this.sessionBased, OB)
          }
        })
      }
      onInitialInfo(BB, OB) {
        this.graceMs = BB, this.sessionBased = OB
      }
      canHoldSeat() {
        return this.graceMs > 0 && !this.ended
      }
      isResuming() {
        return "connected" !== this.controller.phase
      }
      onConnectionLost(BB) {
        this.ended || this.controller.onConnectionLost(BB, this.graceMs)
      }
      onResuming() {
        this.ended || this.controller.onResuming()
      }
      onResumed() {
        this.controller.stop()
      }
      leave() {
        const BB = this.isResuming() && !this.controller.awaitingResumeOnRoom,
          OB = this.controller.heldToken;
        this.end(), BB && "" !== OB && this.hooks.releaseSeat(OB)
      }
      end() {
        this.ended = !0, this.controller.stop()
      }
      onPhaseChanged(BB) {
        const OB = (0, QB.m)(BB);
        OB !== this.stopped && (this.stopped = OB, this.hooks.freeze(OB));
        const GB = "frozen" === BB || "resuming" === BB && this.frozen;
        GB && !this.frozen ? (0, DB.p)(oB, {
          overridesPause: !0
        }) : !GB && this.frozen && (0, DB.o)(oB), this.frozen = GB, this.setListening("connected" !== BB), YB.o.tM(QB.k, GB ? "frozen" : BB)
      }
      setListening(BB) {
        BB !== this.listening && (this.listening = BB, BB ? (window.addEventListener("online", this.retryNow), document.addEventListener("visibilitychange", this.retryNow), window.addEventListener("pagehide", this.onPageHide)) : (window.removeEventListener("online", this.retryNow), document.removeEventListener("visibilitychange", this.retryNow), window.removeEventListener("pagehide", this.onPageHide)))
      }
    }
  },
  39757: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => YB
    });
    class YB {
      constructor(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.onSilent = BB, this.now = OB, this.lastHeardAt = void 0, this.resumedAt = void 0, this.lastCheckAt = void 0, this.wasVisible = "visible" === document.visibilityState, this.interval = void 0, this.check = () => {
          const BB = this.now(),
            OB = BB - this.lastCheckAt <= 2e3;
          this.lastCheckAt = BB;
          const GB = "visible" === document.visibilityState;
          !GB || OB && this.wasVisible || (this.resumedAt = BB), this.wasVisible = GB, GB && BB - this.lastHeardAt > 12e3 && BB - this.resumedAt > 2e3 && this.onSilent()
        }, this.lastHeardAt = OB(), this.resumedAt = this.lastHeardAt, this.lastCheckAt = this.lastHeardAt, this.interval = setInterval(this.check, 1e3), document.addEventListener("visibilitychange", this.check), window.addEventListener("online", this.check)
      }
      heard() {
        this.lastHeardAt = this.now()
      }
      dispose() {
        clearInterval(this.interval), document.removeEventListener("visibilitychange", this.check), window.removeEventListener("online", this.check)
      }
    }
  },
  39675: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => zB
    });
    var YB = GB(192),
      DB = GB(363),
      QB = GB.n(DB),
      oB = GB(37434),
      jB = GB(37436),
      yB = GB(3088);
    const JB = YB.f.xZ * YB.f.playerEyeToHeightRatio,
      MB = 250,
      PB = 1.1,
      zB = new class {
        constructor() {
          this.entities = new Map, this.playing = new Map, this.msSinceLastScan = 0
        }
        add(BB, OB) {
          this.entities.set(BB, OB)
        }
        update(BB, OB) {
          const GB = this.entities.get(BB);
          this.entities.set(BB, OB);
          const YB = this.playing.get(BB);
          YB && (GB && GB.soundName === OB.soundName ? (YB.sound.setRelativeVolume(OB.volume), YB.sound.rate(OB.rate), YB.sound.setPannerAttr({
            refDistance: OB.refDistance
          })) : this.stopEntity(BB))
        }
        remove(BB) {
          this.stopEntity(BB), this.entities.delete(BB)
        }
        kP(BB) {
          this.msSinceLastScan += BB, this.msSinceLastScan < MB || (this.msSinceLastScan = 0, this.scan())
        }
        stopEntity(BB) {
          const OB = this.playing.get(BB);
          OB && (OB.sound.stop(), this.playing.delete(BB))
        }
        startEntity(BB, OB, GB) {
          const YB = (0, jB.f)(OB.soundName);
          if (!YB) return console.error(`AudioEntityManager: no sound found for "${OB.soundName}", dropping audio entity ${BB}`), void this.remove(BB);
          const DB = oB.b.play(YB, OB.volume, GB, OB.maxHearDist, OB.refDistance, !0);
          DB.rate(OB.rate), this.playing.set(BB, {
            sound: DB,
            lastPos: QB().clone(GB)
          })
        }
        scan() {
          const BB = (0, yB.g)();
          if (!BB) return;
          const OB = BB.DW.pR(BB.EX);
          if (OB)
            for (const [GB, YB] of this.entities) {
              if (!BB.DW.YGB(GB, "position")) continue;
              const DB = BB.DW.pR(GB),
                oB = QB().sqrDist(OB, DB),
                jB = this.playing.get(GB);
              if (jB) {
                const BB = YB.maxHearDist * PB;
                oB > BB * BB ? this.stopEntity(GB) : QB().equals(DB, jB.lastPos) || (jB.sound.setPosition([DB[0], DB[1] + JB, DB[2]]), QB().copy(jB.lastPos, DB))
              } else oB <= YB.maxHearDist * YB.maxHearDist && this.startEntity(GB, YB, DB)
            }
        }
      }
  },
  39763: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => JB,
      f: () => MB
    });
    var YB = GB(1784),
      DB = GB(192),
      QB = GB(1748),
      oB = GB(1880),
      jB = GB(1186),
      yB = GB(1121);
    async function JB(BB, OB) {
      return function(BB) {
        return "object" === typeof BB && null !== BB && BB.code === DB.c.VpnIp.code
      }(OB) && function(BB) {
        return QB.e.supports("appCheck") && BB.isLoggedIn() && !BB.hasTriedAppAttestation()
      }(BB) && await async function(BB) {
        try {
          const {
            token: OB
          } = await (0, oB.e)(), {
            "3PSIDMCPP": GB
          } = await (0, yB.postJsonWithMetricsCookiesAndJsonResponse)(`${jB.clientSideServerUrls.indexUrl}/index/app-attestation`, {
            appCheckToken: OB
          }, {
            retries: 0
          }, BB.getMetricsCookies());
          return BB.setAppAttestedAuthJwt(GB), !0
        } catch (OB) {
          return OB instanceof YB.b && "failed" === OB.code ? (console.warn("The app couldn't get an App Check token:", OB), BB.markAppAttestationTried()) : console.error("Failed to attest the app:", OB), !1
        }
      }(BB)
    }
    async function MB(BB, OB) {
      try {
        return await OB()
      } catch (GB) {
        if (!await JB(BB, GB)) throw GB
      }
      return OB()
    }
  },
  39761: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => zB,
      g: () => MB
    });
    var YB = GB(192),
      DB = GB(1919),
      QB = GB(1200),
      oB = GB(9599);
    const jB = [250, 500, 1e3, 2e3, 1250],
      yB = 406;

    function JB(BB) {
      if ("object" !== typeof BB || null === BB) return !1;
      const {
        code: OB,
        message: GB
      } = BB, DB = YB.c.duplicateLobbyNameError;
      return (OB === DB.code || OB === yB) && (GB === DB.text || GB === DB.text + YB.m)
    }
    async function MB(BB, OB) {
      let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : DB.c;
      for (let DB = 0;; DB++) {
        let oB;
        (0, QB.r)(OB);
        try {
          return await BB()
        } catch (YB) {
          if (oB = jB[DB], void 0 === oB || !JB(YB)) throw YB
        }
        await GB(oB, OB)
      }
    }
    const PB = new Set([YB.c.duplicateLobbyNameError.code, YB.c.lobbyCantBeCreated.code, YB.c.roomDisposedEarlyError.code, YB.c.roomDisposedLateError.code, YB.c.serverRoomLimitReached.code]);

    function zB(BB) {
      if (JB(BB)) return !0;
      const OB = (0, oB.d)(BB);
      return "number" === typeof OB && PB.has(OB)
    }
  },
  39732: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => QB,
      g: () => DB
    });
    var YB = GB(25);

    function DB(BB) {
      return "refetchCode" === BB || "devDownloadJson" === BB || BB.startsWith("Plugin")
    }

    function QB(BB, OB) {
      "refetchCode" !== BB ? "Plugin|MobAiPlugin|ShowPetUi" !== BB ? Promise.all([GB.e(120), GB.e(121), GB.e(116), GB.e(118), GB.e(240)]).then((() => GB(44867))).then((GB => {
        let {
          runClientGameMessage: YB
        } = GB;
        YB(BB, OB)
      })).catch((OB => {
        console.error(`Game message ${BB} failed`, OB)
      })) : YB.o.tM("showPetUi", OB) : YB.o.tM("refetchCode")
    }
  },
  9587: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => JB,
      c: () => yB
    });
    var YB = GB(353);

    function DB(BB) {
      if (!BB.startsWith("{")) return BB;
      let OB;
      try {
        OB = JSON.parse(BB)
      } catch {
        return BB
      }
      return function(BB) {
        if (null === (0, YB.nf)(BB)) return !1;
        const {
          params: OB
        } = BB;
        return void 0 === OB || "object" === typeof OB && null !== OB && Object.values(OB).every((BB => "string" === typeof BB))
      }(OB) ? OB : BB
    }
    var QB = GB(1175),
      oB = GB(1253);

    function jB(BB) {
      return (0, QB.C)(oB.e.get().getCurrentLanguageCode(), BB.translationKey, BB.params)
    }

    function yB(BB) {
      const OB = DB(BB);
      return "string" === typeof OB ? OB : jB(OB)
    }

    function JB(BB) {
      const OB = DB(BB);
      return "string" === typeof OB ? OB : jB({
        translationKey: "moderation:kicked",
        params: {
          reason: jB(OB)
        }
      })
    }
  },
  39720: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => MB
    });
    var YB = GB(1217),
      DB = GB(1360),
      QB = GB(16),
      oB = GB(1338),
      jB = GB(1350),
      yB = GB(1560),
      JB = GB(37139);

    function MB(BB) {
      let {
        BB: OB,
        OB: GB
      } = BB;
      const MB = null !== OB && void 0 !== OB ? OB : (0, jB.c)().gameNameWithVariation;
      (0, YB.O)(MB) && ((0, JB.h)(), (0, oB.X)((() => {
        console.log("Received matchmaking order from game server to game", OB), (0, QB.m)("inGameReplay"), (0, yB.navigatePreserveSearch)((0, DB.c)(MB, null !== GB && void 0 !== GB ? GB : void 0))
      }), "video_start"))
    }
  },
  39713: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => MB,
      d: () => yB,
      f: () => JB,
      j: () => PB
    });
    var YB = GB(2023),
      DB = GB(25),
      QB = GB(1400),
      oB = GB(1260);
    const jB = new Map;

    function yB(BB, OB) {
      DB.o.tM("newUiRequest", {
        id: BB,
        clientParameters: OB
      }, !0)
    }

    function JB(BB) {
      DB.o.tM("removeUiRequest", BB, !0);
      const OB = jB.get(BB);
      OB && (OB.tearDownNotification(), jB.delete(BB))
    }

    function MB() {
      DB.o.tM("clearUiRequests");
      for (const BB of jB.values()) BB.tearDownNotification();
      jB.clear()
    }

    function PB(BB, OB, GB, DB) {
      const yB = "string" === typeof OB ? {
          translationKey: OB
        } : OB,
        JB = QB.NotificationProvider.showPromptPopup({
          title: yB.translationKey,
          textOpts: {
            title: (0, oB.j)(yB.params, YB.gameBridge.latest("hiddenPlayerNames"))
          },
          confirmText: "general:yes",
          cancelText: "general:no",
          destructive: GB,
          unlockPointerKey: "uiRequestPopup"
        });
      jB.set(BB, JB), JB.getResult().then((OB => {
        jB.delete(BB), "notificationTornDown" !== OB && DB(OB)
      }))
    }
  },
  39776: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => lB,
      g: () => zB
    });
    const YB = "ue:",
      DB = ["keydown", "keyup", "mousedown", "mouseup", "pointerdown", "pointerup", "touchstart", "touchend"],
      QB = "[A-Za-z0-9]{1,24}",
      oB = 15,
      jB = new RegExp(`^${QB}$`);
    new RegExp(`^${YB}(${[...DB,"other"].join("|")}):(?:n|k(${QB})|b(0|[1-9][0-9]?)):([01])([01])$`);

    function yB(BB, OB, GB, QB, yB) {
      const JB = "string" === typeof BB && DB.includes(BB) ? BB : "other";
      let MB = "n";
      return "string" === typeof OB ? MB = jB.test(OB) ? `k${OB}` : "n" : "number" === typeof GB && Number.isInteger(GB) && GB >= 0 && GB <= oB && (MB = `b${GB}`), `${YB}${JB}:${MB}:${QB?1:0}${yB?1:0}`
    }
    var JB = GB(1730),
      MB = GB(1825);
    let PB = null;

    function zB(BB) {
      const OB = BB instanceof Element && BB !== document.body && BB !== document.documentElement && !(0, JB.p)(BB) && !BB.closest("#root");
      return {
        editable: (0, MB.c)(BB),
        outsideView: OB
      }
    }

    function lB(BB) {
      return PB ??= function(BB) {
        try {
          const {
            editable: OB,
            outsideView: GB
          } = zB(BB.target), YB = BB;
          return yB(BB.type, YB.code, YB.button, OB, GB)
        } catch {
          return yB(null, null, null, !1, !1)
        }
      }(BB), PB
    }
  },
  39710: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => YB
    });
    class YB {
      constructor() {
        this.members = new Map
      }
      apply(BB) {
        const OB = {
          added: [],
          removed: [],
          settingChanges: []
        };
        for (const YB of BB.YY) {
          let BB = this.members.get(YB.DY);
          if (BB || (BB = {
              name: null,
              settings: {}
            }, this.members.set(YB.DY, BB), OB.added.push(YB.DY)), null !== YB.QY && (BB.name = YB.QY), null !== YB.oY || YB.jY.length > 0) {
            const GB = null === YB.oY ? {} : JSON.parse(YB.oY);
            Object.assign(BB.settings, GB);
            for (const OB of YB.jY) delete BB.settings[OB], GB[OB] = void 0;
            OB.settingChanges.push({
              playerId: YB.DY,
              settings: GB
            })
          }
        }
        for (const YB of BB.yY) {
          const BB = this.members.get(YB);
          var GB;
          if (BB) this.members.delete(YB), OB.removed.push({
            playerId: YB,
            name: null !== (GB = BB.name) && void 0 !== GB ? GB : void 0
          })
        }
        return OB
      }
      has(BB) {
        return this.members.has(BB)
      }
      ids() {
        return [...this.members.keys()]
      }
      getName(BB) {
        var OB, GB;
        return null !== (OB = null === (GB = this.members.get(BB)) || void 0 === GB ? void 0 : GB.name) && void 0 !== OB ? OB : void 0
      }
      getSettings(BB) {
        var OB;
        return null === (OB = this.members.get(BB)) || void 0 === OB ? void 0 : OB.settings
      }
      getSetting(BB, OB) {
        var GB;
        return null === (GB = this.members.get(BB)) || void 0 === GB ? void 0 : GB.settings[OB]
      }
      clear() {
        this.members.clear()
      }
    }
  },
  39741: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => YB,
      f: () => DB
    });
    const YB = ["description", "label"];

    function DB(BB) {
      const OB = BB.type;
      return {
        type: OB,
        params: BB[OB]
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);