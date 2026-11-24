export const id = 248;
export const ids = [248];
export const modules = {
  39199: (BB, jB, zB) => {
    function QB(BB) {
      return !(!BB.lobbyLeaderboardInfo && !BB.lobbyManage)
    }
    zB.d(jB, {
      c: () => QB
    })
  },
  39136: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => dB
    });
    var QB = zB(31),
      nB = zB(2006);

    function dB(BB) {
      let {
        taskId: jB,
        progress: zB
      } = BB;
      const QB = nB.c.get("_tasks");
      null !== QB && void 0 !== QB && QB[jB] && nB.c.apply({
        _tasks: {
          ...QB,
          [jB]: {
            ...QB[jB],
            progress: zB
          }
        }
      })
    }
    QB.n.subscribe("clientTaskProgress", (BB => {
      dB(BB)
    }))
  },
  39062: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => Bz,
      h: () => Rj,
      j: () => Oj
    });
    var QB = zB(3798),
      nB = zB(174),
      dB = zB(214),
      IB = zB(667),
      NB = zB(41),
      uB = zB(2863),
      UB = zB(3849),
      aB = zB(3836),
      pB = zB(1263);
    const rB = new WeakMap;
    class sB {
      constructor(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
          yUB: !0
        };
        this.callbacks = jB, this.options = zB, this.LzB = void 0, this.sessionId = void 0, this.iH = [], this.kUB = !1, this.HJ = !1, this.GUB = void 0, this.gH = 0, this.ynB = 0, this.LUB = (BB, jB) => {
          if (this.HJ) return;
          const zB = Number(BB);
          this.kUB ? this.gUB(zB, jB) : this.iH.push({
            id: zB,
            payload: jB
          })
        }, this.dispose = () => {
          this.HJ || (this.HJ = !0, rB.delete(this), this.iH.length = 0, this.GUB())
        }, this.LzB = BB, this.sessionId = BB.sessionId, rB.set(this, []), this.GUB = this.tUB()
      }
      MUB(BB) {
        this.GUB(), this.LzB = BB, this.sessionId = BB.sessionId, this.gH = 0, this.ynB = 0, this.GUB = this.tUB()
      }
      get sH() {
        return this.ynB
      }
      tUB() {
        const BB = this.LzB.hG("*", this.LUB);
        return this.options.yUB && this.LzB.WG(this.dispose), BB
      }
      gUB(BB, jB) {
        try {
          (0, UB.wc)(BB) && (jB = (0, UB.b)(BB, aB.oJ.from(jB)));
          const zB = rB.get(this)[BB];
          if ("function" !== typeof zB) {
            if (this.callbacks.EUB) return void this.callbacks.EUB(BB, jB);
            throw new Error(`No onMessage handler registered for message id ${BB}`)
          }
          zB(jB)
        } catch (zB) {
          this.callbacks.iUB(`Error in onMessage ${BB} with payload ${JSON.stringify(jB)}`, zB)
        } finally {
          this.gH++
        }
      }
      qUB() {
        for (const {
            id: BB,
            payload: jB
          }
          of this.iH) {
          if (this.HJ) break;
          this.gUB(BB, jB)
        }
        this.iH.length = 0
      }
      aE() {
        return this.HJ
      }
      fUB() {
        if (this.kUB || this.HJ) throw new Error("Trying to getOnMessageRegistrationHandler after registration finished");
        return {
          hG: (BB, jB) => {
            if (this.kUB || this.HJ) throw new Error("Trying to call onMessage after registration finished");
            this.hG(BB, jB)
          },
          finishRegistration: () => {
            if (this.HJ) throw new Error("Cannot finish message registration after disposal");
            this.kUB = !0, this.qUB()
          }
        }
      }
      hG(BB, jB) {
        var zB, QB;
        null === (zB = (QB = this.callbacks).oUB) || void 0 === zB || zB.call(QB);
        const nB = rB.get(this);
        for (; BB > nB.length;) nB[nB.length] = null;
        nB[BB] = jB
      }
      send(BB, jB) {
        this.DUB(), (0, pB.A)(jB) ? this.LzB.lH(BB, jB) : this.LzB.send(BB, jB)
      }
      DUB() {
        var BB, jB;
        (this.ynB++, 5 === JB++) && (null === (BB = (jB = this.callbacks).oUB) || void 0 === BB || BB.call(jB), JB = 0)
      }
      Wk() {
        this.dispose(), this.LzB.Wk()
      }
      leave() {
        this.dispose(), this.LzB.leave()
      }
    }
    let JB = 0;
    var mB = zB(3806);
    class yB extends sB {
      constructor(BB) {
        super(BB, {
          oUB: () => {
            (0, NB.o)(!0) && (0, QB.UH)()
          },
          iUB: (BB, jB) => {
            var zB;
            null === (zB = (0, uB.g)()) || void 0 === zB || zB.Xm(BB, jB)
          }
        }, {
          yUB: !1
        }), (0, mB.d)(BB)
      }
      DH(BB, jB) {
        return !!(0, mB.j)((0, mB.b)(), this.LzB, BB, jB) && (this.DUB(), !0)
      }
      MUB(BB) {
        this.FUB(), super.MUB(BB), (0, mB.d)(BB)
      }
      Wk() {
        super.Wk(), this.FUB()
      }
      FUB() {
        this.LzB.Rk.GJ.uF = void 0
      }
    }
    var kB = zB(31),
      GB = zB(2006),
      LB = zB(1778),
      gB = zB(36533),
      tB = zB(39071),
      SB = zB(38122),
      MB = zB(37902),
      EB = zB(658),
      iB = zB(38505);

    function qB(BB, jB, zB) {
      const QB = function(BB) {
          const jB = new Int32Array(BB.length * iB.g);
          return BB.forEach(((BB, zB) => {
            const QB = zB * iB.g;
            if (4 === BB.length) {
              const [zB, nB, dB, IB] = BB;
              jB.set([zB, nB, dB, zB, nB, dB, IB], QB)
            } else {
              const [zB, nB, dB, IB, NB, uB, UB] = BB;
              jB.set([zB, dB, NB, nB, IB, uB, UB], QB)
            }
          })), jB
        }(zB),
        nB = (jB, zB, QB, nB) => {
          BB.setBlockNoMulti(jB, zB, QB, nB, !0)
        };
      BB.client.gameRecorder.isCapturing() ? (0, iB.lb)(QB, (0, iB.jb)(QB), nB) : BB.ur.zr.TE(QB, {
        wT: nB,
        isHookId: jB => BB.blockChangeHasHooks(jB),
        watched: () => function(BB, jB, zB) {
          const QB = [],
            nB = (BB, jB, zB) => {
              QB.push(BB, jB, zB)
            },
            dB = new Set;
          for (let IB = 0; IB < zB.length; IB += iB.g)
            for (let jB = (0, EB.P)(zB[IB]); jB <= (0, EB.P)(zB[IB + 3]); jB++)
              for (let QB = (0, EB.P)(zB[IB + 1]); QB <= (0, EB.P)(zB[IB + 4]); QB++)
                for (let NB = (0, EB.P)(zB[IB + 2]); NB <= (0, EB.P)(zB[IB + 5]); NB++) {
                  const zB = `${jB}|${QB}|${NB}`;
                  dB.has(zB) || (dB.add(zB), BB.blockDataOwner.forEachDataCell(jB, QB, NB, nB))
                }
          return jB.forEachCell(nB), Int32Array.from(QB)
        }(BB, jB, QB)
      }), BB.ur.kBB()
    }

    function fB(BB) {
      BB.NzB = new Set, BB.azB = new Set, BB.uzB = new Set, BB.rzB = new Set, BB.UzB = [], BB.szB = [], BB.hA = new Set, BB.Wn = [], BB.jT = []
    }
    class oB {
      constructor(BB) {
        this.ur = BB
      }
      register(BB) {
        const jB = this.ur,
          zB = (0, uB.c)();
        BB.hG(UB.S, (BB => {
          jB.zr.NzB.add(BB), jB.zr.azB.delete(BB)
        })), BB.hG(UB.ab, (BB => {
          jB.zr.azB.add(BB), jB.zr.NzB.delete(BB)
        })), BB.hG(UB.re, (BB => {
          jB.zr.azB.delete(BB), jB.zr.NzB.delete(BB)
        })), BB.hG(UB.Z, (BB => {
          jB.zr.uzB.add(BB), jB.zr.rzB.delete(BB)
        })), BB.hG(UB.ib, (BB => {
          jB.zr.rzB.add(BB), jB.zr.uzB.delete(BB)
        })), BB.hG(UB.xe, (BB => {
          jB.zr.rzB.delete(BB), jB.zr.uzB.delete(BB)
        })), BB.hG(UB.V, (BB => {
          (0, pB.U)(BB, jB.zr.szB), (0, pB.U)(BB, jB.zr.UzB), jB.zr.UzB.push(BB)
        })), BB.hG(UB.eb, (BB => {
          (0, pB.U)(BB, jB.zr.UzB), (0, pB.U)(BB, jB.zr.szB), jB.zr.szB.push(BB)
        })), BB.hG(UB.ve, (BB => {
          (0, pB.U)(BB, jB.zr.UzB), (0, pB.U)(BB, jB.zr.szB)
        })), BB.hG(UB.Vf, (BB => {
          let {
            dn: zB,
            Nn: QB
          } = BB;
          QB ? jB.zr.hA.delete(zB) : jB.zr.hA.add(zB)
        })), BB.hG(UB.Uf, (BB => {
          let {
            Wn: QB,
            en: nB
          } = BB;
          zB.updateWalkThroughRect(jB.zV, QB, nB)
        })), (0, QB.onGameResetOnce)((() => {
          fB(jB.zr)
        })), BB.hG(UB.rc, (BB => {
          SB.c.applyServerUpdate(BB)
        })), BB.hG(UB.lb, (BB => {
          zB.applyServerBlocks((() => {
            ! function(BB, jB) {
              for (const {
                  GB: zB,
                  LB: QB
                }
                of jB) {
                const jB = MB.b[QB];
                if (jB) {
                  const {
                    compX: QB,
                    compY: nB,
                    compZ: dB,
                    mainMultiblock: IB
                  } = jB;
                  BB.eD(zB[0] - QB, zB[1] - nB, zB[2] - dB, IB)
                }
              }
              for (const {
                  GB: zB,
                  LB: QB,
                  gB: nB
                }
                of jB) BB.setBlockNoMulti(zB[0], zB[1], zB[2], QB, !0), BB.blockDataOwner.setBlockData(zB[0], zB[1], zB[2], null === nB ? void 0 : JSON.parse(nB)), BB.blockAdded(zB[0], zB[1], zB[2], QB)
            }(zB, BB)
          })), kB.n.Ly("changeBlockFail", BB), zB.client.triggerGameCallback("onChangeBlockFail", BB), kB.n.Ly("EditBoard", {
            pos: null
          }), kB.n.Ly("EditCodeBlock", {
            pos: null,
            canChangePos: null
          })
        })), BB.hG(UB.Sb, (BB => {
          zB.applyServerBlocks((() => {
            qB(zB, SB.c, BB)
          }))
        })), BB.hG(UB.Lf, (BB => {
          let {
            tB: jB,
            SB: QB
          } = BB;
          if (zB.Bl(jB[0], jB[1], jB[2])) {
            const BB = (0, uB.c)().JG(jB[0], jB[1], jB[2]);
            (0, uB.c)().updateMailboxContents(jB[0], jB[1], jB[2], BB, QB)
          }
        })), BB.hG(UB.Ve, (BB => {
          let {
            pos: jB,
            data: QB
          } = BB;
          zB.blockDataOwner.setBlockData(jB[0], jB[1], jB[2], QB), zB.blockAdded(jB[0], jB[1], jB[2], zB.JG(jB[0], jB[1], jB[2]))
        }))
      }
    }
    var HB = zB(37248),
      DB = zB(36843),
      FB = zB(38147),
      YB = zB(37999),
      VB = zB(38162);
    class hB {
      constructor(BB, jB) {
        this.ur = BB, this.setUpQueuedEntity = jB
      }
      register(BB) {
        const jB = this.ur,
          zB = (0, uB.c)();
        BB.hG(UB.R, (BB => {
          let {
            Sz: jB,
            Mz: zB
          } = BB;
          this.setUpQueuedEntity(jB), jB = (0, DB.b)(jB), (0, uB.c)().client.gameRecorder.recordBulletShot(jB, zB), kB.n.Ly(`bulletShot|${jB}`, {
            bulletDirections: zB
          })
        })), BB.hG(UB.tc, (BB => {
          let {
            Gz: jB,
            Lz: zB
          } = BB;
          kB.n.Ly("damagedByOtherPlayer", {
            Gz: jB,
            direction: zB
          }, !0)
        })), BB.hG(UB.Ld, (BB => {
          kB.n.Ly("playerKilled", BB, !0), (0, uB.c)().client.gameRecorder.recordPlayerKilled(BB.deadEId, BB.killerEId, BB.withItem, BB.killstreak)
        })), BB.hG(UB.Zb, (BB => {
          kB.n.Ly("customKillfeed", BB, !0), (0, uB.c)().client.gameRecorder.recordCustomKillfeed(BB.killer, BB.victim, BB.withItem)
        })), BB.hG(UB.Xd, (BB => {
          let {
            lB: zB,
            wB: QB
          } = BB;
          this.setUpQueuedEntity(zB);
          const nB = jB.vG.ZjB(zB);
          null !== nB && void 0 !== nB && nB.isGun() && nB.reload(Date.now(), QB)
        })), BB.hG(UB.Pe, (BB => {
          let {
            Wj: zB,
            fB: QB
          } = BB;
          const nB = QB ? (0, VB.h)(jB, QB) : void 0;
          kB.n.Ly("sendHitmarker", {
            Wj: zB,
            screenPos: nB
          }, !0)
        })), BB.hG(UB.$c, (BB => {
          let {
            EB: QB,
            iB: nB,
            oB: dB,
            HB: IB,
            DB: NB,
            FB: uB,
            YB: UB
          } = BB;
          this.setUpQueuedEntity(QB), QB = (0, DB.b)(QB);
          const aB = jB.vG.HjB(QB);
          if (aB && (aB.lastHurtTime = performance.now()), (0, FB.playRigHurt)(jB, QB, uB), kB.n.Ly("lifeformHurt", {
              eId: QB,
              YB: UB
            }), nB) {
            const BB = (0, VB.h)(jB, nB.fB);
            kB.n.Ly("yourAttackHit", {
              Wj: IB,
              screenPos: BB,
              hitSelf: QB === jB.zV
            })
          }
          QB === jB.zV && (zB.shakePlayerCamera(QB, NB / 40, 200), kB.n.Ly("closeShopOnDamaged", null), kB.n.Ly("damagedByOtherPlayer", {
            Gz: null,
            direction: uB,
            DB: NB
          }, !0));
          const pB = jB.vG.iG(QB);
          if (pB && (dB || IB)) {
            const BB = [pB[0], pB[1] + 1, pB[2]];
            dB && (0, YB.j)(jB, YB.y, BB, 15), IB && (0, YB.j)(jB, YB.p, BB, 10)
          }
        })), BB.hG(UB.Yc, (BB => {
          let {
            ij: zB,
            qj: QB,
            fj: nB
          } = BB;
          (0, HB.b)(jB).setHealthFrac((0, DB.b)(zB), nB), kB.n.Ly("lifeformHealthChanged", {
            eId: (0, DB.b)(zB),
            qj: QB,
            fj: nB
          })
        })), BB.hG(UB.N, (BB => {
          let {
            Ed: zB,
            qd: QB
          } = BB;
          (0, uB.c)().playerAttacked(jB.zV, zB, QB)
        })), BB.hG(UB.tb, (() => {
          const BB = jB.vG.ZjB(jB.zV);
          null !== BB && void 0 !== BB && BB.isChargeable() && BB.finishCharging(!1, Date.now())
        })), BB.hG(UB.cc, (BB => {
          let {
            VB: jB,
            hB: zB,
            XB: QB,
            ej: nB,
            lj: dB,
            wj: IB
          } = BB;
          jB = (0, DB.b)(jB), (0, uB.c)().client.updateEffect(jB, zB, {
            displayName: QB,
            icon: nB,
            duration: dB,
            level: IB
          })
        })), BB.hG(UB._d, (BB => {
          let {
            VB: jB,
            hB: zB
          } = BB;
          jB = (0, DB.b)(jB), (0, uB.c)().client.removeEffect(jB, zB)
        })), BB.hG(UB.Ef, (BB => {
          kB.n.Ly("ttbEffectMultiplier", BB)
        }))
      }
    }
    var XB = zB(39102),
      ZB = zB(37239),
      AB = zB(4315),
      TB = zB(38177),
      PB = zB(36828),
      WB = zB(36830),
      eB = zB(37151),
      lB = zB(37340),
      wB = zB(38181),
      xB = zB(39111);
    class KB {
      constructor(BB, jB) {
        this.ur = BB, this.setUpQueuedEntity = jB
      }
      register(BB) {
        const jB = this.ur,
          zB = (0, uB.c)();
        BB.hG(UB.jd, (BB => {
          let {
            eId: zB,
            settings: QB
          } = BB;
          (0, lB.d)(zB);
          for (const jB in QB)(0, lB.b)(zB, jB, QB[jB]);
          if ("canSee" in QB && jB.vG.HBB(zB, "hidingMeshManager")) {
            const BB = jB.vG.getState(zB, "hidingMeshManager");
            BB.canSee = (0, wB.d)("canSee", QB.canSee), BB._forceUpdate = !0
          }
        })), BB.hG(UB.D, (BB => {
          let {
            PQ: zB,
            WQ: QB,
            animationScript: nB,
            eQ: dB,
            lQ: IB,
            wQ: NB,
            xQ: UB
          } = BB;
          zB = (0, DB.b)(zB);
          const aB = null === nB && null !== NB ? (0, XB.e)(NB, UB) : nB;
          (0, uB.c)().client.gameRecorder.recordAnimateEntity(zB, QB, aB, dB, IB), (0, HB.b)(jB).animations.animateEntity(zB, QB, nB, dB, IB, NB, UB), null !== nB || zB === jB.zV && QB === ZB.f.Emote && (0, uB.c)().client.cameraController.endTemporaryThirdPerson()
        })), BB.hG(UB.Ne, (BB => {
          (0, xB.e)(BB)
        })), BB.hG(UB.Jd, (BB => {
          for (const jB of BB)(0, TB.E)(jB);
          kB.n.Ly("playerCosmeticsUpdated", BB, !0)
        })), BB.hG(UB.K, (BB => {
          for (const zB of BB)(0, eB.d)(jB, zB)
        })), BB.hG(UB.ld, (BB => {
          (0, YB.l)(jB, (0, pB.n)(BB))
        })), BB.hG(UB.od, (BB => {
          AB.h[BB.Yd] ? (0, YB.l)(jB, {
            ...AB.h[BB.Yd],
            pos1: BB.pos1,
            pos2: BB.pos2
          }) : console.error(`Unknown preset id: ${BB.Yd}`)
        })), BB.hG(UB.Fd, (BB => {
          var jB, zB;
          let {
            BB: QB,
            jB: nB,
            zB: dB,
            QB: IB
          } = BB, {
            dB: NB,
            IB: UB
          } = null !== IB && void 0 !== IB ? IB : {};
          const {
            nB: aB
          } = null !== IB && void 0 !== IB ? IB : {};
          NB = null !== (jB = NB) && void 0 !== jB ? jB : void 0, UB = null !== (zB = UB) && void 0 !== zB ? zB : void 0, "string" === typeof aB && this.setUpQueuedEntity(aB), (0, uB.c)().client.gameRecorder.recordPlaySound(QB, nB, dB, IB), PB.e.play((0, WB.f)(QB), nB, aB, NB, UB).rate(dB)
        })), BB.hG(UB.Pf, (BB => {
          for (const jB in BB) {
            const QB = BB[jB];
            for (const BB in QB) zB.client.meshCreator.handleParticleSystemUpdate(jB, BB, QB[BB])
          }
        }))
      }
    }
    var CB = zB(37879),
      cB = zB(37859);
    class bB {
      constructor(BB) {
        this.ur = BB
      }
      register(BB) {
        const jB = this.ur,
          zB = (0, uB.c)();

        function QB() {
          return jB.vG.yjB(jB.zV)
        }
        BB.hG(UB.Ic, (BB => {
          let {
            En: zB,
            qn: QB,
            fn: nB,
            Hn: dB,
            Dn: IB,
            Fn: NB,
            Yn: uB,
            Vn: UB,
            hn: aB
          } = BB;
          if (!jB.vG.HBB(zB, "itemState")) return void(0, CB.j)(jB, zB, [IB, NB, uB], QB, {
            amount: nB,
            attributes: JSON.parse(dB),
            Vn: UB,
            size: aB
          });
          const pB = jB.vG.getState(zB, "itemState");
          pB.amount = nB, pB.Vn = UB, pB.creationTime = Date.now(), (0, cB.setServerPosition)(jB.vG.getState(zB, "smoothToServerPos"), IB, NB, uB)
        })), BB.hG(UB.jb, (BB => {
          (0, HB.b)(jB).setCantPickUp(BB, !0), jB.vG.HBB(BB, "itemState") && (jB.vG.getState(BB, "itemState").Vn = !0)
        })), BB.hG(UB.pe, (BB => {
          (0, HB.b)(jB).setCantPickUp(BB, !1), jB.vG.HBB(BB, "itemState") && (jB.vG.getState(BB, "itemState").Vn = !1)
        })), BB.hG(UB.Ad, (BB => {
          let {
            pickUpItems: jB,
            pickUpAckSeq: zB
          } = BB;
          for (const {
              name: nB,
              amount: dB,
              attributes: IB
            }
            of jB) QB().pickUpItem({
            name: nB,
            amount: dB,
            typeObj: CB.t[nB],
            attributes: IB
          });
          (0, uB.c)().client.inventoryPrediction.serverChangeApplied(zB)
        })), BB.hG(UB.ef, (BB => {
          let {
            index: zB,
            name: QB,
            amount: nB,
            attributes: dB,
            setSlotAckSeq: IB
          } = BB;
          const NB = jB.vG.kjB(jB.zV);
          (zB < NB.playerInventory.numSlots || NB.hd || NB.inCreative) && NB.setItemSlot(zB, QB, nB, dB), (0, uB.c)().client.inventoryPrediction.serverChangeApplied(IB)
        })), BB.hG(UB.Ec, (BB => {
          (0, uB.c)().client.inventoryPrediction.acknowledge(BB)
        })), BB.hG(UB.A, (BB => {
          let {
            Pz: jB,
            Wz: zB,
            ez: QB,
            lz: nB
          } = BB;
          (0, uB.c)().client.itemDropPrediction.onActionItemDrops(jB, zB, QB, nB)
        })), BB.hG(UB.Kb, (BB => {
          QB().clearInventory(), (0, uB.c)().client.inventoryPrediction.serverChangeApplied(BB)
        })), BB.hG(UB.hf, (BB => {
          kB.n.Ly("setSelectedInventorySlotI", BB, !0)
        })), BB.hG(UB.Ab, (BB => {
          let {
            Cn: zB,
            cn: QB,
            bn: nB,
            vn: dB,
            Rn: IB,
            Bd: NB,
            jd: UB,
            zd: aB
          } = BB;
          const pB = jB.vG.kjB(jB.zV);
          if (NB) {
            const {
              dd: BB,
              Id: jB
            } = aB;
            return (0, uB.c)().client.inventoryPrediction.I3(jB, (() => {
              pB.chestRefreshed(QB, nB, dB, UB, BB)
            })) && kB.n.Ly("chestToggleFromServer", !1, !0), void kB.n.Ly("chestRefreshedFromServer")
          }(zB || pB.hd) && (zB ? (pB.chestOpened(QB, nB, dB, IB, UB), null !== IB && (0, uB.c)().client.ironChestPasskeyCache.onChestOpened(dB, IB)) : pB.chestClosed(), kB.n.Ly("chestToggleFromServer", zB, !0))
        })), BB.hG(UB.ac, (BB => {
          let {
            craftingRecipeItemName: QB,
            recipesForItem: nB
          } = BB;
          QB ? zB.craftingManager.editRecipesForPlayer(jB.zV, QB, nB) : zB.craftingManager.resetAllPlayerRecipes(jB.zV), kB.n.Ly("craftingRecipesEdited", {
            itemName: QB,
            recipesForItem: nB
          })
        })), BB.hG(UB.ee, (BB => {
          let {
            Zz: jB,
            Az: zB,
            Tz: nB
          } = BB;
          QB().removeItemName(jB, zB), (0, uB.c)().client.inventoryPrediction.serverChangeApplied(nB)
        })), BB.hG(UB.ce, (BB => {
          let {
            Xn: QB
          } = BB;
          zB.craftingManager.removeRecipes(jB.zV, QB), kB.n.Ly("craftingRecipesEdited", {
            itemName: QB,
            recipesForItem: []
          })
        }))
      }
    }
    var vB = zB(6428),
      RB = zB(37524),
      OB = zB(386),
      Bj = zB.n(OB),
      jj = zB(4644),
      zj = zB(37784),
      Qj = zB(38337),
      nj = zB(37518);
    class dj {
      constructor(BB, jB) {
        this.ur = BB, this.setUpQueuedEntity = jB
      }
      register(BB) {
        const jB = this.ur,
          zB = (0, uB.c)();
        BB.hG(UB.xf, (BB => {
          let {
            oj: zB,
            Hj: nB,
            Dj: dB,
            Fj: IB
          } = BB;
          const NB = [nB, dB, IB];
          jB.vG.setPosition(jB.zV, NB), (0, QB.sendColyMessage)(UB.mh, {
            Iu: zB,
            Nu: jj.g
          }), kB.n.Ly("localPlayerTeleported", {
            pos: NB,
            isCorrection: !1
          })
        })), BB.hG(UB.vd, (BB => {
          let {
            Cd: jB,
            bd: zB,
            vd: QB,
            Rd: nB
          } = BB;
          this.setUpQueuedEntity(jB);
          const dB = [zB, QB, nB];
          kB.n.Ly(`otherPlayerTeleported|${jB}`, {
            pos: dB
          })
        })), BB.hG(UB.Pd, (BB => {
          let {
            Un: zB,
            pn: nB,
            rn: dB,
            sn: IB,
            Jn: NB,
            mn: uB,
            yn: aB,
            Gn: pB,
            kn: rB,
            tn: sB
          } = BB;
          const JB = [nB, dB, IB];
          jB.vG.setPosition(jB.zV, JB);
          const mB = jB.vG.CBB(jB.zV),
            yB = jB.vG.pT(jB.zV);
          Bj().set(yB.eZ, 0, 0, 0), Bj().set(yB.wZ, 0, 0, 0), Bj().set(yB.Hy, NB, uB, aB), yB.xZ(), mB._flying = null !== sB, sB ? (mB.flyAccel.Sn = sB.Sn, mB.flyAccel.Mn = sB.Mn) : mB.flyAccel.reset(), pB && mB.movementType === vB.r.GLIDING && (mB.Ln = pB.Ln, Bj().copy(mB.gn, pB.gn)), (0, QB.sendColyMessage)(UB.mh, {
            Iu: zB,
            Nu: jj.g
          }), kB.n.Ly("localPlayerTeleported", {
            pos: JB,
            isCorrection: !0
          })
        })), BB.hG(UB.jf, (BB => {
          let {
            vehicleEId: jB,
            overrides: zB
          } = BB;
          (0, uB.c)().applyRiddenVehicleSettingOverrides(jB, zB)
        })), BB.hG(UB.Qf, (BB => {
          let {
            Dz: zB,
            Fz: QB,
            Yz: nB
          } = BB;
          const dB = jB.vG.CBB(jB.zV).physicsState.type === vB.t.SLEEPING && zB === vB.t.DEFAULT;
          (0, uB.c)().updatePositionAndPhysics(jB.zV, {
            type: zB,
            tier: QB
          }, !0, nB), dB && (0, uB.c)().updateHeldVehicleStatus()
        })), BB.hG(UB.pb, (BB => {
          let {
            Mj: zB,
            Ej: QB
          } = BB;
          jB.vG.JjB(jB.zV).setPose(zB, QB)
        })), BB.hG(UB.We, (BB => {
          const {
            gp: zB,
            CjB: QB
          } = (0, RB.d)([BB[0], BB[1], BB[2]]);
          nj.b.setLookDirection(jB, zB, QB), (0, zj.A)(zB, QB);
          const nB = jB.vG.JjB(jB.zV);
          nB && (nB.heading = zB)
        })), BB.hG(UB.Xe, (BB => {
          zB.client.cameraController.setCameraZoom(BB)
        })), BB.hG(UB.of, (BB => {
          let {
            gz: QB,
            tz: nB
          } = BB;
          zB.shakePlayerCamera(jB.zV, QB, nB)
        })), BB.hG(UB.Qc, (BB => {
          jB.vG.JjB(jB.zV).jumpMultiplier.setMultiplierType("jumpEffectAmount", BB)
        })), (0, QB.onGameResetOnce)((() => {
          jB.vG.JjB(jB.zV).jumpMultiplier.setMultiplierType("jumpEffectAmount", 1)
        })), BB.hG(UB.H, (BB => {
          jB.vG.pT(jB.zV).applyImpulse(BB)
        })), BB.hG(UB.mf, (BB => {
          const zB = jB.vG.pT(jB.zV);
          Bj().set(zB.eZ, 0, 0, 0), Bj().set(zB.wZ, 0, 0, 0), Bj().copy(zB.Hy, BB), zB.xZ()
        })), (0, QB.onGameResetOnce)((() => {
          (0, Qj.setFloatingYValue)(jB.vG.getState(jB.zV, "physics"), jB.vG.Gw(jB.zV), null)
        })), BB.hG(UB.dc, (BB => {
          let {
            Vz: zB,
            hz: QB,
            Xz: nB
          } = BB;
          const dB = (0, DB.b)(zB);
          if (dB === jB.zV) {
            const BB = jB.vG.Gw(jB.zV).position;
            nB ??= Math.floor(BB[1]) - 1, (0, Qj.setFloatingYValue)(jB.vG.getState(jB.zV, "physics"), jB.vG.Gw(jB.zV), QB ? nB : null)
          }(0, HB.b)(jB).setFloating(dB, QB, nB);
          const IB = jB.vG.getState(dB, "floating");
          IB && (IB.isFloating = QB, IB.Xz = QB ? nB : null)
        }))
      }
    }

    function Ij(BB, jB, zB, QB, nB) {
      let dB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (!BB.vG.mjB(BB.zV)) return console.log("Got resync inven but don't have inven component"), void jB.acknowledge(QB);
      dB && console.error("Had to sync inven"), jB.I3(QB, nB) && zB.Ly("chestToggleFromServer", !1, !0), zB.Ly("syncedInvenFromServer")
    }
    var Nj = zB(39121),
      uj = zB(39126),
      Uj = zB(2015);
    var aj = zB(4629);

    function pj(BB) {
      const jB = BB.zr;
      let zB = 0,
        nB = -1,
        IB = -1 / 0,
        NB = null,
        uB = !0;
      const aB = () => {
        if (++zB % 10 !== 0) return;
        const aB = (0, QB.getLastReceivedPacketId)();
        if (aB <= nB) return;
        const [pB, rB, sB] = BB.vG.iG(BB.zV), JB = ! function(BB) {
          var jB;
          let zB = null === (jB = BB.vG.RjB(BB.zV)) || void 0 === jB ? void 0 : jB.SJ;
          if (void 0 === zB) return !1;
          const QB = new Set;
          for (; void 0 !== zB && !QB.has(zB);) {
            var nB;
            QB.add(zB);
            const jB = BB.vG.getState(zB, "smoothToServerPos"),
              dB = Array.isArray(jB) ? null : null === jB || void 0 === jB ? void 0 : jB.serverPosition;
            if (dB) {
              const jB = BB.vG.iG(zB);
              if (Math.abs(jB[0] - dB[0]) > 10 || Math.abs(jB[1] - dB[1]) > 10 || Math.abs(jB[2] - dB[2]) > 10) return !0
            }
            zB = null === (nB = BB.vG.RjB(zB)) || void 0 === nB ? void 0 : nB.SJ
          }
          return !1
        }(BB) && function(BB, jB, zB, QB) {
          const nB = dB.e.ZJ;
          for (let dB = 0; dB < BB.length; dB++) {
            const IB = BB[dB];
            if (!(0, aj.h)(jB, zB, QB, IB[0] * nB, IB[1] * nB, IB[2] * nB)) return !1
          }
          return !0
        }(jB.Gy.DJ, pB, rB, sB), mB = null === NB || Math.abs(pB - NB[0]) > 8 || Math.abs(rB - NB[1]) > 8 || Math.abs(sB - NB[2]) > 8, yB = !uB || mB || performance.now() - IB >= 1e4;
        uB = JB, JB && yB && (nB = aB, IB = performance.now(), NB = [pB, rB, sB], (0, QB.sendColyMessage)(UB.Ng, {
          kN: aB
        }))
      };
      return BB.on("vp", aB), () => {
        BB.off("vp", aB)
      }
    }
    var rj = zB(39131),
      sj = zB(1543),
      Jj = zB(2859),
      mj = zB(1859),
      yj = zB(3015),
      kj = zB(4866);
    class Gj {
      constructor(BB, jB, zB) {
        this.ur = BB, this.gameNameWithVariation = jB, this.connectionResume = zB, this.stopChunkReports = () => {}, this.replayResume = null
      }
      clearUiRequestsAndQTEs() {
        kj.c.reset(), (0, Nj.b)()
      }
      startChunkReports() {
        const BB = function(BB) {
            let jB = null,
              zB = -1 / 0,
              nB = null;
            const dB = () => {
                nB = null;
                const dB = Math.ceil(BB.dD[0]),
                  IB = Math.ceil(BB.dD[1]);
                jB && jB[0] === dB && jB[1] === IB || (jB = [dB, IB], zB = performance.now(), (0, QB.sendColyMessage)(UB.Mg, {
                  OI: dB,
                  BN: IB
                }))
              },
              IB = () => {
                null === nB && (nB = setTimeout(dB, Math.max(0, zB + 250 - performance.now())))
              };
            return dB(), BB.on("addRemoveDistanceChanged", IB), () => {
              BB.off("addRemoveDistanceChanged", IB), null !== nB && (clearTimeout(nB), nB = null)
            }
          }(this.ur.zr),
          jB = pj(this.ur);
        this.stopChunkReports = () => {
          BB(), jB()
        }
      }
      restartChunkStreaming() {
        (0, zj.q)(this.ur, (0, uB.c)().recentChunkEdits.chunksEditedSince(this.connectionResume.getDroppedAt() - rj.d)), this.startChunkReports()
      }
      register(BB) {
        const jB = this.ur,
          zB = (0, uB.c)();
        BB.hG(UB.hd, (BB => {
          GB.c.applyNewClientOptions(BB)
        })), BB.hG(UB.Ed, (BB => {
          Jj.d.onReceiveColyseusPing(BB)
        })), BB.hG(UB._e, (BB => {
          let {
            key: jB,
            value: zB
          } = BB;
          (0, LB.setCookie)(this.gameNameWithVariation, jB, zB)
        })), BB.hG(UB.df, (BB => {
          kB.n.Ly("setDiscordReportKey", BB)
        })), (0, QB.onGameResetOnce)((() => {
          this.stopChunkReports()
        })), BB.hG(UB.Ac, (nB => {
          const {
            UB: dB,
            aB: IB
          } = nB;
          if ((0, QB.setAdjustment)(IB), this.connectionResume.onInitialInfo(nB.pB, nB.rB), QB.offlineInputReplay.mH(nB.sB), this.connectionResume.isResuming()) {
            console.log("Resumed the connection as eId", dB);
            try {
              null === nB.JB && (0, uB.c)().client.inventoryPrediction.dropPending(), this.stopChunkReports(), fB(jB.zr), GB.c.apply({
                shopInfo: null,
                _shopVersion: Uj.d
              });
              const zB = jB.vG.kjB(jB.zV);
              zB.hd && (zB.chestClosed(), kB.n.Ly("chestToggleFromServer", !1, !0)), this.clearUiRequestsAndQTEs(), kB.n.Ly("initInfoReceived", BB)
            } finally {
              const BB = null === nB.JB ? null : {
                sync: null,
                endSeq: null
              };
              this.replayResume = BB, this.connectionResume.onResumeInitialInfo(nB.JB, (() => {
                BB.endSeq = (0, uB.c)().client.inventoryPrediction.lastActionSeq
              })), null === BB && this.restartChunkStreaming()
            }
          } else console.log("Local client is eId", dB), mj.b.markAdmitted(), (0, zj.t)(jB), kB.n.Ly("loadingScreenState", "loadingPage:loadingWorld"), jB.FBB = dB, jB.vG.HBB(jB.zV, jB.vG.names.entityName) && jB.vG.ZY(jB.zV, jB.vG.names.entityName), (0, uB.c)().setEntityName(jB.FBB, (0, uB.c)().getRawEntityName(jB.zV)), jB.RY[jB.FBB] = {}, jB.vG.hY(jB.zV, jB.vG.names.entityName), kB.n.Ly("initInfoReceived", BB), this.startChunkReports(), zB.client.onServerConnectionFinalised()
        })), BB.hG(UB.Je, (() => {
          this.connectionResume.isResuming() ? this.connectionResume.onResumed((() => {
            const BB = this.replayResume;
            if (this.replayResume = null, !BB) return;
            this.restartChunkStreaming();
            const {
              inventoryPrediction: zB
            } = (0, uB.c)().client, {
              sync: nB
            } = BB, dB = new Set(QB.offlineInputReplay.takeDroppedActions());
            if (nB) {
              var IB;
              const QB = null !== (IB = BB.endSeq) && void 0 !== IB ? IB : zB.lastActionSeq;
              zB.forget((BB => BB > nB.Id && BB <= QB || dB.has(BB))), Ij(jB, zB, kB.n, nB.Id, nB.load)
            } else zB.dropPending(), zB.askForSnapshot()
          })) : console.warn("ResumeComplete arrived without a resume")
        })), BB.hG(UB.sf, (BB => {
          let {
            Vd: zB,
            Td: QB,
            Id: nB
          } = BB;
          const {
            inventoryPrediction: dB
          } = (0, uB.c)().client, IB = () => {
            jB.vG.kjB(jB.zV).loadFromString(zB)
          };
          this.replayResume && (this.replayResume.sync = {
            Id: nB,
            load: IB
          }), Ij(jB, dB, kB.n, nB, IB, QB)
        })), BB.hG(UB.Wd, (BB => {
          let {
            type: jB,
            location1: zB,
            location2: QB,
            location3: nB,
            score: dB
          } = BB;
          (0, yj.logProgressionEvent)({
            type: jB,
            location1: zB,
            location2: QB,
            location3: nB,
            score: dB
          })
        })), BB.hG(UB.Ie, (BB => {
          let {
            type: jB,
            resourceType: zB,
            amount: QB,
            category: nB,
            itemName: dB
          } = BB;
          (0, yj.logResourceEvent)({
            type: jB,
            resourceType: zB,
            amount: QB,
            category: nB,
            itemName: dB
          })
        })), BB.hG(UB.Wc, (BB => {
          let {
            leaveEventType: jB,
            category: zB,
            subCategory: QB,
            value: nB
          } = BB;
          (0, yj.updateLeaveValue)({
            leaveEventType: jB,
            category: zB,
            subCategory: QB,
            value: nB
          })
        })), BB.hG(UB.Vb, (BB => {
          let {
            cat1: jB,
            cat2: zB,
            cat3: QB,
            value: nB
          } = BB;
          (0, yj.logCustomAnalyticsEvent)({
            cat1: jB,
            cat2: zB,
            cat3: QB,
            value: nB
          })
        })), BB.hG(UB.Rc, (BB => {
          (0, uB.c)().client.leaveGameUnwanted({
            reason: BB,
            requiresRefresh: !1,
            canReconnect: !1,
            automaticallyReconnect: !1
          }), (0, sj.navigatePreserveSearch)("/")
        })), BB.hG(UB.Se, (BB => {
          kB.n.Ly("serverUpdating", Date.now() + BB, !0)
        })), BB.hG(UB.gd, uj.c), BB.hG(UB.bd, (BB => {
          console.error(`[logErrorToConsole]: ${BB}`)
        }))
      }
    }
    var Lj = zB(39136),
      gj = zB(39146),
      tj = zB(1067),
      Sj = zB(39142),
      Mj = zB(2505),
      Ej = zB(3762);
    class ij {
      constructor(BB, jB) {
        this.ur = BB, this.clientApi = jB
      }
      register(BB) {
        const jB = this.ur,
          zB = (0, uB.c)();
        BB.hG(UB.wb, (BB => {
          let {
            chatMsgId: jB,
            content: zB,
            chatterEId: QB
          } = BB;
          kB.n.Ly("chat", {
            serverChatMsgId: jB,
            content: zB,
            chatterEId: QB
          }, !0)
        })), BB.hG(UB.Af, (BB => {
          kB.n.Ly("TopRightHelper", BB, !0)
        })), BB.hG(UB.tf, (BB => {
          (0, Lj.d)(BB)
        })), BB.hG(UB.Uc, (BB => {
          let {
            category: jB,
            timeframe: zB,
            data: QB
          } = BB;
          kB.n.Ly("leaderboardResponse", {
            category: jB,
            timeframe: zB,
            data: QB
          })
        })), BB.hG(UB.rf, (() => {
          kB.n.Ly("showShopTutorial", null, !0)
        })), BB.hG(UB.Sd, (BB => {
          kB.n.Ly("progressBarUpdate", BB, !0)
        })), BB.hG(UB.Bc, (BB => {
          kB.n.Ly("middleScreenBarInitiate", {
            duration: BB.Zn,
            Tn: BB.Tn,
            horizBarRemOffset: BB.Pn
          }, !0)
        })), BB.hG(UB.ge, (() => {
          kB.n.Ly("middleScreenBarRemove", !0)
        })), BB.hG(UB.$e, (BB => {
          let {
            id: jB,
            position: zB,
            style: QB,
            Yj: nB,
            hj: dB
          } = BB;
          kB.n.Ly("setDirectionArrow", {
            id: jB,
            position: zB,
            style: QB,
            text: (0, UB.s)(nB),
            hj: dB
          }, !0)
        })), BB.hG(UB.Gb, (BB => {
          let {
            id: jB
          } = BB;
          kB.n.Ly("clearDirectionArrow", {
            id: jB
          }, !0)
        })), BB.hG(UB.Ub, (BB => {
          (0, Ej.onCosmeticPackGranted)(BB)
        })), BB.hG(UB.pd, (BB => {
          let {
            id: jB,
            xB: zB
          } = BB;
          const {
            type: nB,
            params: dB
          } = (0, gj.c)(zB), IB = {
            ...dB
          };
          for (const QB of gj.b) QB in IB && IB[QB] && (IB[QB] = (0, UB.s)(IB[QB]));
          kj.c.queueQTE(jB, nB, IB).getResult().then((BB => {
            "boolean" === typeof BB && (0, QB.sendColyMessage)(UB.Zi, {
              qteId: jB,
              qteResponse: BB
            })
          }))
        })), BB.hG(UB.je, (BB => {
          kj.c.cancelQTE(BB)
        })), (0, QB.onGameResetOnce)((() => {
          kj.c.reset()
        })), BB.hG(UB.rd, (BB => {
          let {
            id: jB,
            clientParameters: zB
          } = BB;
          (0, Nj.d)(jB, zB)
        })), BB.hG(UB.me, (BB => {
          (0, Nj.f)(BB)
        })), BB.hG(UB.Hf, (BB => {
          let {
            text: jB,
            id: zB,
            destructive: nB
          } = BB;
          (0, Nj.j)(zB, jB, nB, (BB => {
            (0, QB.sendColyMessage)(UB.gk, {
              Ju: zB,
              mu: BB,
              yu: 5
            })
          }))
        })), BB.hG(UB.wd, (BB => {
          let {
            info: jB
          } = BB;
          kB.n.Ly("overShopInfo", jB, !0)
        })), BB.hG(UB.jc, (BB => {
          let {
            NB: zB,
            uB: QB
          } = BB;
          this.clientApi.openShop(jB.zV, zB, QB)
        })), BB.hG(UB.fc, (BB => {
          let {
            wd: jB,
            xd: zB,
            Kd: QB
          } = BB;
          kB.n.Ly("flyingMiddleMessage", {
            content: (0, UB.s)(jB),
            xd: zB,
            Kd: QB
          }, !0)
        })), BB.hG(UB.Wf, (BB => {
          const jB = BB === tj.g ? null : {
            message: `Currently loaded as variation: ${BB}`,
            type: "Warning"
          };
          kB.n.Ly("showPermanentBottomMessage", jB, !0)
        })), BB.hG(UB.nc, (BB => {
          let {
            messageType: jB,
            data: QB
          } = BB;
          (0, Sj.f)(jB) ? (0, Sj.e)(jB, QB) : ("freeCamPerms" === jB && zB.client.freeCameraController.setPerms(QB.key, QB.value), zB.client.triggerGameCallback("onReceivedMessageFromServer", jB, QB))
        })), BB.hG(UB.Ob, Mj.k)
      }
    }
    class qj {
      constructor(BB, jB, zB, QB) {
        this.gameNameWithVariation = BB, this.ur = zB, this.connectionResume = QB, this.stateReplicationHandler = void 0, this.stateReplicationHandler = new tB.b(jB, this.ur)
      }
      setupStateReplicationHandlers() {
        this.stateReplicationHandler.setup(), (0, QB.onGameResetOnce)((() => {
          this.stateReplicationHandler.dispose()
        }))
      }
      MUB(BB) {
        this.stateReplicationHandler.dispose(), this.stateReplicationHandler = new tB.b(BB, this.ur), this.stateReplicationHandler.setup()
      }
      setupOnMessageListeners(BB, jB) {
        const zB = this.ur,
          QB = BB => {
            this.stateReplicationHandler.setUpIfQueued(BB)
          };
        new Gj(zB, this.gameNameWithVariation, this.connectionResume).register(BB), new oB(zB).register(BB), new bB(zB).register(BB), new hB(zB, QB).register(BB), new KB(zB, QB).register(BB), new ij(zB, jB).register(BB), new dj(zB, QB).register(BB)
      }
    }
    window.addEventListener("beforeunload", (() => {}));
    var fj = zB(39151),
      oj = zB(39153),
      Hj = zB(701),
      Dj = zB(3036);
    class Fj {
      constructor(BB, jB, zB, QB) {
        this.msgHandler = zB, this.listener = QB, this.session = void 0, this.attachedRoom = null, this.detachRoomListeners = null, this.suspended = !1, this.droppedAt = 0, this.session = new fj.b({
          reconnect: BB,
          isLive: () => QB.isLive(),
          onReconnected: BB => {
            this.resumeOnRoom(BB)
          },
          onGaveUp: (BB, jB) => {
            QB.onGaveUp(BB, jB)
          },
          freeze: jB,
          releaseSeat: jB => {
            BB(jB).then((BB => {
              BB.leave(!0)
            }), (BB => {
              console.warn("Couldn't release the held seat of a game left while reconnecting", BB)
            }))
          }
        })
      }
      onInitialInfo(BB, jB) {
        this.session.onInitialInfo(BB, jB)
      }
      isResuming() {
        return this.session.isResuming()
      }
      getDroppedAt() {
        return this.droppedAt
      }
      onResumeInitialInfo(BB, jB) {
        if (this.session.onResuming(), null === BB) {
          try {
            (0, uB.c)().client.itemDropPrediction.reset()
          } catch (zB) {
            console.error("Error dropping the item drop predictions on resuming", zB)
          }
          return QB.offlineInputReplay.discard(), void this.setSuspended(!1)
        }(0, uB.c)().client.itemDropPrediction.onResumeReplayOffered(), QB.offlineInputReplay.replayFrom(BB.yB, jB)
      }
      onResumed(BB) {
        this.setSuspended(!1), (0, QB.resendBeacons)();
        try {
          BB()
        } catch (jB) {
          console.error("Error completing the resume", jB)
        } finally {
          this.session.onResumed()
        }
      }
      attachRoom(BB) {
        const jB = (0, Hj.l)((() => BB.connection.isOpen));
        BB.WG(jB);
        const zB = new oj.c((() => {
          this.session.canHoldSeat() && this.listener.isLive() && (console.warn("The game server went silent, reconnecting"), this.onConnectionDropped(BB, "silent"), BB.leave(!1))
        }));
        BB.onStateChange((() => {
          zB.heard()
        }));
        const QB = jB => {
          jB.persisted || BB.leave(!0)
        };
        window.addEventListener("pagehide", QB), BB.WG(((jB, zB) => {
          if (BB === this.attachedRoom && this.listener.isLive()) return (0, dB.f)(jB) && this.session.canHoldSeat() ? (console.warn(`Connection to the game server dropped with code ${jB}, reconnecting`), this.listener.onDropped(jB, zB), void this.onConnectionDropped(BB, String(jB))) : void this.listener.onRoomLeft(jB, zB)
        })), this.attachedRoom = BB, this.detachRoomListeners = () => {
          jB(), zB.dispose(), window.removeEventListener("pagehide", QB)
        }
      }
      dispose() {
        this.detachRoom(), this.session.leave(), this.setSuspended(!1)
      }
      setSuspended(BB) {
        BB !== this.suspended && (this.suspended = BB, (0, QB.setConnectionSuspended)(BB), (0, uB.c)().client.itemDropPrediction.setSuspended(BB))
      }
      detachRoom() {
        var BB;
        null === (BB = this.detachRoomListeners) || void 0 === BB || BB.call(this), this.detachRoomListeners = null, this.attachedRoom = null
      }
      onConnectionDropped(BB, jB) {
        (0, Dj.reportClientError)("disconnect", "Left room", jB), this.isResuming() || (this.droppedAt = Date.now()), this.detachRoom(), QB.offlineInputReplay.onConnectionLost(), this.setSuspended(!0), this.session.onConnectionLost(BB.reconnectionToken)
      }
      resumeOnRoom(BB) {
        if (!this.listener.isLive()) return console.warn("Left the game while reconnecting, leaving the resumed room"), BB.leave(!0), void this.dispose();
        console.log("Reconnected to the game server, waiting for the game to resume"), (0, xB.r)(), QB.offlineInputReplay.onConnectionReplaced(), this.msgHandler.MUB(BB), this.listener.onReconnected(BB), this.attachRoom(BB)
      }
    }
    var Yj = zB(3084),
      Vj = zB(3092),
      hj = zB(1357),
      Xj = zB(1325),
      Zj = zB(4766),
      Aj = zB(3270),
      Tj = zB(1121),
      Pj = zB(37811),
      Wj = zB(39156),
      ej = zB(8923),
      lj = zB(39158),
      wj = zB(1253),
      xj = zB(36568),
      Kj = zB(39166),
      Cj = zB(1760),
      cj = zB(2869);

    function bj(BB) {
      var jB, zB;
      if ("object" !== typeof BB || null === BB) return {
        errType: typeof BB
      };
      const QB = BB;
      return {
        errType: null !== (jB = null === (zB = BB.constructor) || void 0 === zB ? void 0 : zB.name) && void 0 !== jB ? jB : "",
        errName: "string" === typeof QB.name ? QB.name : "",
        eventType: "string" === typeof QB.type ? QB.type : "",
        errStack: "string" === typeof QB.stack ? QB.stack.split("\n").slice(1).join(" | ") : ""
      }
    }

    function vj(BB) {
      if ("undefined" !== typeof ProgressEvent && BB instanceof ProgressEvent) return !0;
      if (!(BB instanceof Error)) return !1;
      const jB = BB.code;
      return "ServerError" === BB.name && void 0 === jB || "AbortError" === BB.name || "seat reservation expired." === BB.message || "early_leave" === BB.message
    }(0, mB.m)((BB => {
      (0, Dj.reportClientError)("wasm_net", BB)
    }));
    let Rj = !0;

    function Oj() {
      Rj = !1
    }
    class Bz {
      constructor(BB) {
        this.gameNameWithVariation = void 0, this.lobbyName = void 0, this.colyClient = void 0, this.userContext = void 0, this.joinedAt = null, this.joinAdHold = !1, this.checkSendPath = () => {}, this.ur = void 0, this.connectionResume = void 0, this.incomingMsgInitialisor = void 0, this.gameNameWithVariation = BB.gameNameWithVariation, this.lobbyName = BB.lobbyName, this.colyClient = BB.colyClient, this.userContext = BB.userContext
      }
      async connectToServer(BB, jB, zB) {
        GB.c.reset(), BB.RY = {
          [BB.zV]: {}
        }, BB.FBB = void 0, (0, xB.r)(), (0, uB.c)().removeAllEntityNames(), (0, uB.c)().setEntityName(BB.zV, this.userContext.getPlayerName()), (0, hj.q)({
          lobbyName: this.lobbyName
        }), console.log("Waiting for clientConnection passed promise to resolve"), this.joinAdHold = (0, Cj.i)(), console.log("joining server with game", this.gameNameWithVariation, "lobbyName", this.lobbyName);
        const IB = performance.now();
        zB.aborted || (0, Xj.r)("wasm_core_ready", IB);
        const NB = (0, lj.h)(this.userContext, (() => {
          const {
            roomName: QB,
            joinOptions: nB
          } = (0, gB.i)(this.userContext, this.gameNameWithVariation, this.lobbyName, jB, (BB => Aj.e.isUsingCustomGameTexturePack(BB)));
          return nB.joinAdHold = this.joinAdHold, nB.renderBackend = (0, cj.b)(BB.pm), (0, Wj.f)((() => this.colyClient.joinOrCreateUntil(zB, QB, nB)), zB)
        }));
        return kB.n.Ly("loadingScreenState", "loadingPage:joiningLobby"), await NB.then((jB => {
          if (this.joinedAt = performance.now(), (0, Xj.r)("wasm_joined", this.joinedAt), this.ur = BB, this.joinAdHold) {
            const BB = (0, Cj.q)((() => {
              jB.send(nB.f), (0, Xj.m)(), mj.b.markJoinAdEnded()
            }));
            jB.WG(BB), (0, QB.onGameResetOnce)(BB)
          }
          const zB = new yB(jB);
          this.connectionResume = new Fj((BB => this.colyClient.reconnect(BB)), (jB => {
            BB.nD(jB)
          }), zB, {
            isLive: () => (0, uB.c)().client.getMsgHandler() === zB,
            onDropped: (BB, jB) => {
              (0, Vj.d)(BB) || this.logUnrecognisedConnectionLoss(BB, void 0, {
                site: "drop",
                closeReason: null !== jB && void 0 !== jB ? jB : "",
                sinceJoined: this.sinceJoined()
              })
            },
            onRoomLeft: (BB, jB) => {
              this.onRoomLeft(BB, jB)
            },
            onReconnected: BB => {
              this.incomingMsgInitialisor.MUB(BB), this.checkSendPath = (0, Pj.d)(zB, BB, mB.n)
            },
            onGaveUp: (BB, jB) => {
              this.onResumeGaveUp(BB, jB)
            }
          }), this.connectionResume.attachRoom(jB), (0, QB.onGameResetOnce)((() => {
            this.connectionResume.dispose()
          }));
          const dB = zB.send,
            IB = zB.hG,
            NB = zB.LzB.send,
            UB = zB.LzB.hG,
            aB = zB.gUB;
          this.checkSendPath = (0, Pj.d)(zB, jB, mB.n);
          const pB = setInterval((() => {
            dB === zB.send && IB === zB.hG && NB === zB.LzB.send && UB === zB.LzB.hG && aB === zB.gUB || Oj(), this.checkSendPath()
          }), 1e4);
          return (0, QB.onGameResetOnce)((() => {
            clearInterval(pB)
          })), {
            success: !0,
            successDetails: zB
          }
        })).catch((jB => {
          if (zB.aborted && jB === (0, wj.f)(zB)) return {
            success: !1,
            failDetails: {
              reason: "Left the game while it loaded",
              requiresRefresh: !1,
              canReconnect: !1
            }
          };
          if (jB instanceof xj.h) return console.warn("Seat request timed out", this.lobbyName, this.gameNameWithVariation), {
            success: !1,
            failDetails: {
              reason: jB.message,
              requiresRefresh: !1,
              canReconnect: !1,
              gameServerUnreachable: "timedOut",
              joinFailure: (0, Kj.b)(jB, jB.leg)
            }
          };
          BB.Xm(`Failed to connect to bloxd room, check your internet connection. lobbyName: ${this.lobbyName}, gameNameWithVariation: ${this.gameNameWithVariation} code: ${jB.code}\n`, jB);
          const QB = jB.code;
          return QB === dB.c.serverUpdating.code ? (this.goToUpdateWaiting(), {
            success: !1,
            failDetails: {
              reason: dB.c.serverUpdating.text,
              requiresRefresh: !1,
              canReconnect: !0,
              goesToUpdateWaiting: !0
            }
          }) : {
            success: !1,
            failDetails: {
              ...this.onConnectionToServerLost(QB, jB.message, {
                site: "join",
                sinceJoinStart: (0, Vj.b)(performance.now() - IB),
                ...bj(jB)
              }, vj(jB)),
              rematch: (0, Wj.e)(jB),
              gameRefused: (0, ej.c)(jB),
              joinFailure: (0, Kj.b)(jB, this.colyClient.legReached())
            }
          }
        }))
      }
      setupServerListeners(BB, jB, zB) {
        kB.n.Ly("loadingScreenState", "loadingPage:loadingPlayerInfo"), this.incomingMsgInitialisor = new qj(this.gameNameWithVariation, jB.LzB, BB, this.connectionResume), this.incomingMsgInitialisor.setupStateReplicationHandlers();
        const nB = jB.fUB();
        this.incomingMsgInitialisor.setupOnMessageListeners(nB, zB), (0, QB.onConnectionToServerReady)(nB, jB), this.joinAdHold && mj.b.markAdmissionAwaited(), nB.finishRegistration()
      }
      dispose() {
        this.connectionResume.dispose()
      }
      onResumeGaveUp(BB, jB) {
        (0, Tj.Zm)(new Error("Reconnect failed"), {
          ...(0, Yj.h)(jB),
          game: this.gameNameWithVariation
        }), (0, Dj.reportClientError)("disconnect", "Reconnect failed", jB.reason), (0, uB.c)().client.leaveGameUnwanted({
          reason: {
            translationKey: "general:lostConnection"
          },
          canReconnect: !BB,
          canPlayAgain: BB,
          requiresRefresh: !1,
          automaticallyReconnect: !1
        }), (0, sj.navigatePreserveSearch)("/")
      }
      sinceJoined() {
        return null === this.joinedAt ? "" : (0, Vj.b)(performance.now() - this.joinedAt)
      }
      onRoomLeft(BB, jB) {
        var zB;
        if (BB === dB.c.gameOrPluginKick.code) return;
        if (console.log(`Left room with code ${BB}`), BB === dB.c.serverUpdating.code) return (0, Dj.reportClientError)("disconnect", "Left room", "serverUpdating"), (0, uB.c)().client.leaveGame(this.getUpdateWaitingUrl()), void this.goToUpdateWaiting();
        this.ur.Xm(`Kicked from server with code ${BB}`, new Error);
        const QB = Object.keys(dB.c).find((jB => dB.c[jB].code === BB));
        (0, Dj.reportClientError)("disconnect", "Left room", null !== QB && void 0 !== QB ? QB : String(BB));
        const nB = this.onConnectionToServerLost(BB, void 0, {
          site: "leave",
          closeReason: null !== jB && void 0 !== jB ? jB : "",
          sinceJoined: this.sinceJoined()
        });
        (0, uB.c)().client.leaveGameUnwanted({
          reason: `You have disconnected from the server.\n${nB.reason}`,
          canReconnect: nB.canReconnect,
          requiresRefresh: nB.requiresRefresh,
          automaticallyReconnect: null !== (zB = nB.automaticallyReconnect) && void 0 !== zB && zB
        }), (0, sj.navigatePreserveSearch)("/")
      }
      getUpdateWaitingUrl() {
        return (0, Zj.C)(this.gameNameWithVariation, this.lobbyName)
      }
      goToUpdateWaiting() {
        (0, sj.navigatePreserveSearch)(this.getUpdateWaitingUrl())
      }
      onConnectionToServerLost(BB, jB, zB) {
        var QB;
        let nB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (null !== (QB = jB) && void 0 !== QB && QB.endsWith(dB.g) && (this.userContext.invalidateTrafficCode(), jB = jB.replace(dB.g, "")), BB === dB.c.outdatedVersion.code) return console.error("Outdated client with version ", IB.b, ", refreshing page"), (0, LB.reloadBloxd)(), {
          reason: "Outdated client",
          requiresRefresh: !0,
          canReconnect: !1
        };
        if (BB === dB.c.loadRecaptchaError.code) return console.error("Load recaptcha error, refreshing page"), (0, LB.reloadBloxd)(), {
          reason: "Failed to load recaptcha",
          requiresRefresh: !0,
          canReconnect: !1
        };
        for (const IB in dB.c) {
          const {
            code: zB,
            text: QB,
            canReconnect: nB
          } = dB.c[IB];
          if (zB === BB) {
            console.log("matched known error", BB, "leaving game");
            return {
              reason: "" !== QB ? QB : jB || `Code: ${BB}`,
              requiresRefresh: !1,
              canReconnect: nB,
              automaticallyReconnect: zB === dB.c.customGameUpdated.code || zB === dB.c.duplicateLobbyNameError.code
            }
          }
        }
        return console.log("Didn't match known error, leaving game"), (0, Vj.c)(BB) || nB ? console.warn("Connection lost", BB, jB) : this.logUnrecognisedConnectionLoss(BB, jB, zB), {
          reason: `Either your internet isn't working or this is a bug.\nCode: ${BB}`,
          requiresRefresh: !1,
          canReconnect: !1,
          gameServerUnreachable: nB ? "failed" : void 0
        }
      }
      logUnrecognisedConnectionLoss(BB, jB, zB) {
        (0, Tj.Zm)(new Error("Unrecognised connection loss"), {
          code: String(BB),
          cause: null !== jB && void 0 !== jB ? jB : "",
          ...zB,
          game: this.gameNameWithVariation,
          ...(0, Vj.e)()
        })
      }
    }
  },
  39071: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => Kz,
      f: () => Oz
    });
    var QB, nB, dB, IB, NB, uB, UB, aB, pB, rB, sB, JB, mB, yB, kB, GB, LB, gB, tB, SB, MB, EB, iB, qB, fB, oB, HB, DB, FB, YB, VB, hB, XB, ZB, AB, TB, PB, WB, eB, lB, wB, xB, KB, CB, cB, bB, vB, RB, OB, Bj, jj, zj, Qj, nj, dj, Ij, Nj, uj, Uj, aj, pj, rj, sj, Jj, mj, yj, kj, Gj, Lj, gj, tj, Sj, Mj, Ej, ij, qj, fj, oj, Hj, Dj, Fj, Yj, Vj, hj, Xj, Zj, Aj, Tj, Pj, Wj, ej, lj, wj, xj, Kj, Cj, cj, bj, vj, Rj = zB(31),
      Oj = zB(37248),
      Bz = zB(39087),
      jz = zB(39093),
      zz = zB(9159),
      Qz = zB(652),
      nz = zB(644),
      dz = zB(36873);
    let Iz = (QB = (0, zz.type)("number"), nB = (0, zz.type)("number"), dB = (0, zz.type)("number"), IB = (0, zz.type)("number"), NB = (0, zz.type)("number"), uB = (0, zz.type)("number"), UB = (0, zz.type)("string"), aB = class extends zz.Schema {
        constructor() {
          super(...arguments), (0, Bz.c)(this, "id", pB, this), (0, Bz.c)(this, "amount", rB, this), (0, Bz.c)(this, "x", sB, this), (0, Bz.c)(this, "y", JB, this), (0, Bz.c)(this, "z", mB, this), (0, Bz.c)(this, "size", yB, this), (0, Bz.c)(this, "attributes", kB, this)
        }
      }, pB = (0, jz.d)(aB.prototype, "id", [QB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), rB = (0, jz.d)(aB.prototype, "amount", [nB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), sB = (0, jz.d)(aB.prototype, "x", [dB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), JB = (0, jz.d)(aB.prototype, "y", [IB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), mB = (0, jz.d)(aB.prototype, "z", [NB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), yB = (0, jz.d)(aB.prototype, "size", [uB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 1
        }
      }), kB = (0, jz.d)(aB.prototype, "attributes", [UB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "{}"
        }
      }), aB),
      Nz = (GB = (0, zz.type)("string"), LB = (0, zz.type)("string"), gB = class extends zz.Schema {
        constructor() {
          super(...arguments), (0, Bz.c)(this, "itemName", tB, this), (0, Bz.c)(this, "enchantmentTier", SB, this)
        }
      }, tB = (0, jz.d)(gB.prototype, "itemName", [GB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), SB = (0, jz.d)(gB.prototype, "enchantmentTier", [LB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), gB),
      uz = (MB = (0, zz.type)("string"), EB = (0, zz.type)("string"), iB = (0, zz.type)("number"), qB = (0, zz.type)("number"), fB = (0, zz.type)("number"), oB = (0, zz.type)("float32"), HB = (0, zz.type)("float32"), DB = (0, zz.type)("float32"), FB = (0, zz.type)("string"), YB = (0, zz.type)(["number"]), VB = (0, zz.type)("boolean"), hB = class extends zz.Schema {
        constructor() {
          super(...arguments), (0, Bz.c)(this, "type", XB, this), (0, Bz.c)(this, "name", ZB, this), (0, Bz.c)(this, "x", AB, this), (0, Bz.c)(this, "y", TB, this), (0, Bz.c)(this, "z", PB, this), (0, Bz.c)(this, "xRotation", WB, this), (0, Bz.c)(this, "yRotation", eB, this), (0, Bz.c)(this, "zRotation", lB, this), (0, Bz.c)(this, "followingEId", wB, this), (0, Bz.c)(this, "followingOffset", xB, this), (0, Bz.c)(this, "shouldMatchFollowingEntityRotation", KB, this)
        }
      }, XB = (0, jz.d)(hB.prototype, "type", [MB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), ZB = (0, jz.d)(hB.prototype, "name", [EB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return ""
        }
      }), AB = (0, jz.d)(hB.prototype, "x", [iB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), TB = (0, jz.d)(hB.prototype, "y", [qB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), PB = (0, jz.d)(hB.prototype, "z", [fB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), WB = (0, jz.d)(hB.prototype, "xRotation", [oB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), eB = (0, jz.d)(hB.prototype, "yRotation", [HB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), lB = (0, jz.d)(hB.prototype, "zRotation", [DB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), wB = (0, jz.d)(hB.prototype, "followingEId", [FB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), xB = (0, jz.d)(hB.prototype, "followingOffset", [YB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new zz.ArraySchema(0, 0, 0)
        }
      }), KB = (0, jz.d)(hB.prototype, "shouldMatchFollowingEntityRotation", [VB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !0
        }
      }), hB),
      Uz = (CB = (0, zz.type)("float32"), cB = (0, zz.type)("float32"), bB = (0, zz.type)("boolean"), vB = (0, zz.type)("boolean"), RB = (0, zz.type)("float32"), OB = (0, zz.type)("boolean"), Bj = (0, zz.type)("string"), jj = (0, zz.type)("string"), zj = (0, zz.type)("string"), Qj = (0, zz.type)("string"), nj = (0, zz.type)(["number"]), dj = (0, zz.type)("number"), Ij = (0, zz.type)({
        map: Nz
      }), Nj = class extends uz {
        constructor() {
          super(...arguments), (0, Bz.c)(this, "scale", uj, this), (0, Bz.c)(this, "speed", Uj, this), (0, Bz.c)(this, "jumping", aj, this), (0, Bz.c)(this, "crouching", pj, this), (0, Bz.c)(this, "cameraPitch", rj, this), (0, Bz.c)(this, "armSwinging", sj, this), (0, Bz.c)(this, "heldItemName", Jj, this), (0, Bz.c)(this, "heldItemEnchantmentTier", mj, this), (0, Bz.c)(this, "pose", yj, this), (0, Bz.c)(this, "ridingVehicleEId", kj, this), (0, Bz.c)(this, "meshOffset", Gj, this), (0, Bz.c)(this, "baseRenderHeading", Lj, this), (0, Bz.c)(this, "armour", gj, this)
        }
      }, uj = (0, jz.d)(Nj.prototype, "scale", [CB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 1
        }
      }), Uj = (0, jz.d)(Nj.prototype, "speed", [cB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), aj = (0, jz.d)(Nj.prototype, "jumping", [bB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), pj = (0, jz.d)(Nj.prototype, "crouching", [vB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), rj = (0, jz.d)(Nj.prototype, "cameraPitch", [RB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), sj = (0, jz.d)(Nj.prototype, "armSwinging", [OB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), Jj = (0, jz.d)(Nj.prototype, "heldItemName", [Bj], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), mj = (0, jz.d)(Nj.prototype, "heldItemEnchantmentTier", [jj], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), yj = (0, jz.d)(Nj.prototype, "pose", [zj], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "standing"
        }
      }), kj = (0, jz.d)(Nj.prototype, "ridingVehicleEId", [Qj], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), Gj = (0, jz.d)(Nj.prototype, "meshOffset", [nj], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new zz.ArraySchema(0, 0, 0)
        }
      }), Lj = (0, jz.d)(Nj.prototype, "baseRenderHeading", [dj], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), gj = (0, jz.d)(Nj.prototype, "armour", [Ij], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new zz.MapSchema
        }
      }), Nj),
      az = (tj = (0, zz.type)("string"), Sj = (0, zz.type)("string"), Mj = (0, zz.type)("string"), Ej = (0, zz.type)("uint8"), ij = class extends Uz {
        constructor() {
          super(...arguments), (0, Bz.c)(this, "variation", qj, this), (0, Bz.c)(this, "ownerDbId", fj, this), (0, Bz.c)(this, "metaInfo", oj, this), (0, Bz.c)(this, "aiState", Hj, this)
        }
      }, qj = (0, jz.d)(ij.prototype, "variation", [tj], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "default"
        }
      }), fj = (0, jz.d)(ij.prototype, "ownerDbId", [Sj], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), oj = (0, jz.d)(ij.prototype, "metaInfo", [Mj], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return ""
        }
      }), Hj = (0, jz.d)(ij.prototype, "aiState", [Ej], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), ij);
    Dj = (0, zz.type)("string"), Fj = (0, zz.type)("string"), Yj = (0, zz.type)("string"), Vj = (0, zz.type)("string"), hj = class extends uz {
      constructor() {
        super(...arguments), (0, Bz.c)(this, "meshKind", Xj, this), (0, Bz.c)(this, "meshOpts", Zj, this), (0, Bz.c)(this, "pose", Aj, this), (0, Bz.c)(this, "leaderboardTop", Tj, this)
      }
    }, Xj = (0, jz.d)(hj.prototype, "meshKind", [Dj], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), Zj = (0, jz.d)(hj.prototype, "meshOpts", [Fj], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), Aj = (0, jz.d)(hj.prototype, "pose", [Yj], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), Tj = (0, jz.d)(hj.prototype, "leaderboardTop", [Vj], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    });

    function pz(BB) {
      return Object.keys(zz.Metadata.getFields(BB))
    }
    const rz = pz(az);
    for (const BQ of Qz.t)
      if (!rz.includes(BQ)) throw new Error(`Mob Schema is missing a networked property: "${BQ}"`);
    const sz = pz((Pj = (0, zz.type)("string"), Wj = (0, zz.type)("float32"), ej = (0, zz.type)("float32"), lj = (0, zz.type)("float32"), wj = (0, zz.type)("float32"), xj = class extends uz {
      constructor() {
        super(...arguments), (0, Bz.c)(this, "soundName", Kj, this), (0, Bz.c)(this, "volume", Cj, this), (0, Bz.c)(this, "refDistance", cj, this), (0, Bz.c)(this, "maxHearDist", bj, this), (0, Bz.c)(this, "rate", vj, this)
      }
    }, Kj = (0, jz.d)(xj.prototype, "soundName", [Pj], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return ""
      }
    }), Cj = (0, jz.d)(xj.prototype, "volume", [Wj], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return 1
      }
    }), cj = (0, jz.d)(xj.prototype, "refDistance", [ej], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return dz.k
      }
    }), bj = (0, jz.d)(xj.prototype, "maxHearDist", [lj], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return dz.c
      }
    }), vj = (0, jz.d)(xj.prototype, "rate", [wj], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return 1
      }
    }), xj));
    for (const BQ of nz.g)
      if (!sz.includes(BQ)) throw new Error(`AudioEntity Schema is missing a replicated property: "${BQ}"`);
    var Jz = zB(38524),
      mz = zB(1270),
      yz = zB(658),
      kz = zB(38293),
      Gz = zB(4334),
      Lz = zB(376),
      gz = zB(37372),
      tz = zB(38177),
      Sz = zB(2302),
      Mz = zB(37340),
      Ez = zB(38545),
      iz = zB(37504),
      qz = zB(386),
      fz = zB.n(qz),
      oz = zB(38028),
      Hz = zB(37155),
      Dz = zB(38154),
      Fz = zB(38189);
    class Yz {
      constructor(BB, jB) {
        this.bloxd = BB, this.eId = jB, this.ur = void 0, this.colyseusEntity = void 0, this.canSeeSub = void 0, this.canAttackSub = void 0, this.interactableSub = void 0, this.overlayColourSub = void 0, this.opacitySub = void 0, this.zIndexSub = void 0, this.multilineTextBoxSub = void 0, this.previousHidingMeshManagerState = void 0, this.meshKind = void 0, this.meshOpts = void 0, this.leaderboardTop = void 0, this.meshRebuildQueued = !1, this.HJ = !1, this.ur = BB.ur
      }
      initClient(BB) {
        var jB, zB, QB;
        this.colyseusEntity = BB, this.meshKind = BB.meshKind, this.meshOpts = BB.meshOpts, this.leaderboardTop = BB.leaderboardTop, this.ur.vG.add([BB.x, BB.y, BB.z], 1, 1, null, null, !1, !1, this.eId), this.ur.vG.hY(this.eId, "smoothToServerPos");
        const nB = "Person" === this.meshKind;
        this.ur.vG.hY(this.eId, "meshRotation", {
          isServerControlled: !0,
          ...nB ? {
            defaultRotationsPerSecond: .5
          } : {},
          childrenNodeParams: nB ? [{
            nodeName: "HeadMesh",
            softTolerance: Ez.o,
            hardTolerance: null
          }] : []
        }), this.updateHidingMeshMgr(), this.canSeeSub = Rj.n.subscribe(`otherEntitySettings|${this.eId}|canSee`, (BB => {
          this.updateHidingMeshMgr()
        }));
        const dB = () => {
          const BB = this.ur.vG.ujB(this.eId);
          if (!BB) return;
          const jB = (0, iz.h)(this.eId);
          if ("number" === typeof BB.mY) {
            var zB, QB, nB, dB;
            const IB = null === (zB = (0, Sz.j)("head", null === (nB = this.getSpec()) || void 0 === nB || null === (dB = nB.opts.textures) || void 0 === dB ? void 0 : dB.head)) || void 0 === zB || null === (QB = zB.personModel) || void 0 === QB ? void 0 : QB.fullBody;
            return this.ur.pm.JY.setPickable(BB.mY, jB && !IB), void(0, Hz.updatePersonAttachmentPickability)(this.ur, this.eId, jB)
          }
          const IB = BB.mesh;
          if (IB)
            for (const NB of [IB, ...IB.getChildMeshes(!1)]) "Ny" in NB && !NB.name.startsWith("Cape|") && (NB.Ny = jB)
        };
        this.canAttackSub = Rj.n.subscribe(`otherEntitySettings|${this.eId}|canAttack`, dB), this.interactableSub = Rj.n.subscribe(`otherEntitySettings|${this.eId}|interactable`, dB), this.overlayColourSub = Rj.n.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|overlayColour`, (BB => {
          this.updateOverlayColour(BB)
        })), this.opacitySub = Rj.n.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|opacity`, (BB => {
          this.updateOpacity(BB)
        })), this.zIndexSub = Rj.n.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|zIndex`, (BB => {
          this.updateZIndex(BB)
        }));
        const IB = this.ur.RY[this.ur.zV][this.eId];
        this.updateOverlayColour(null !== (jB = null === IB || void 0 === IB ? void 0 : IB.overlayColour) && void 0 !== jB ? jB : null), this.updateOpacity(null !== (zB = null === IB || void 0 === IB ? void 0 : IB.opacity) && void 0 !== zB ? zB : 1), this.updateZIndex(null !== (QB = null === IB || void 0 === IB ? void 0 : IB.zIndex) && void 0 !== QB ? QB : 0), this.multilineTextBoxSub = (0, Mz.r)(this.ur, this.eId)
      }
      onChangeClient(BB, jB) {
        if ("xRotation" === BB || "yRotation" === BB || "zRotation" === BB)(0, Mz.t)(this.ur, this.eId, BB, jB);
        else if ("pose" === BB) {
          const BB = this.ur.vG.JjB(this.eId);
          BB && (BB.pose = jB || "standing")
        } else "meshKind" === BB || "meshOpts" === BB ? (this[BB] = jB, this.queueMeshRebuild()) : "name" === BB && "" !== jB ? this.updateHidingMeshMgr() : "leaderboardTop" === BB && (this.leaderboardTop = jB, Rj.n.Ly(`leaderboardTop|${this.eId}`, jB))
      }
      disposeClient() {
        this.HJ = !0, this.ur.vG.deleteEntity(this.eId), Rj.n.unsubscribe(this.canSeeSub), Rj.n.unsubscribe(this.canAttackSub), Rj.n.unsubscribe(this.interactableSub), Rj.n.unsubscribe(this.overlayColourSub), Rj.n.unsubscribe(this.opacitySub), Rj.n.unsubscribe(this.zIndexSub), Rj.n.unsubscribe(this.multilineTextBoxSub)
      }
      getCurrentHidingMeshMgrState() {
        var BB, jB;
        return {
          canSee: null !== (BB = null === (jB = this.ur.RY[this.ur.zV][this.eId]) || void 0 === jB ? void 0 : jB.canSee) && void 0 !== BB && BB,
          name: this.colyseusEntity.name,
          meshKind: this.meshKind,
          meshOpts: this.meshOpts
        }
      }
      updateHidingMeshMgr() {
        var BB, jB, zB;
        const {
          ur: QB
        } = this, {
          vG: nB
        } = QB, dB = this.getCurrentHidingMeshMgrState();
        if ((0, Lz.se)(this.previousHidingMeshManagerState, dB)) return;
        if (this.previousHidingMeshManagerState = dB, nB.ZY(this.eId, "hidingMeshManager"), null === (BB = QB.RY[QB.zV][this.eId]) || void 0 === BB || !BB.canSee) return;
        const IB = this.getSpec();
        if (!IB) return;
        const {
          type: NB,
          opts: uB
        } = IB;
        "Person" === NB && (uB.textures = (0, Sz.p)(uB.textures)), uB.eId = this.eId, nB.hY(this.eId, "hidingMeshManager", {
          addMeshComponent: () => {
            var BB, jB, zB;
            "Leaderboard" === NB && (uB.leaderboardTop = this.leaderboardTop);
            const dB = this.bloxd.client.meshCreator.getEntityMesh(NB, uB, (BB => {
              var jB, zB;
              if ("number" === typeof BB) {
                var nB, dB, IB;
                const jB = QB.pm.JY;
                jB.setEntityId(BB, this.eId);
                const zB = "Person" === NB && (null === (nB = (0, Sz.j)("head", null === (IB = uB.textures) || void 0 === IB ? void 0 : IB.head)) || void 0 === nB || null === (dB = nB.personModel) || void 0 === dB ? void 0 : dB.fullBody);
                return void jB.setPickable(BB, (0, iz.h)(this.eId) && !zB)
              }
              const UB = BB;
              for (const NB of [UB, ...UB.getChildMeshes(!1)]) void 0 === NB.Ny || NB.name.startsWith("Cape|") || (NB.Ny = (0, iz.h)(this.eId), NB.metadata ??= new QB.pm.Uy, NB.metadata.eId = this.eId);
              this.updateOpacity(null !== (jB = null === (zB = QB.RY[QB.zV][this.eId]) || void 0 === zB ? void 0 : zB.opacity) && void 0 !== jB ? jB : 1)
            }));
            if (!dB) return;
            const {
              mY: IB,
              mesh: UB,
              meshOffset: aB,
              nameYOffset: pB,
              modelLoaded: rB
            } = dB;
            null === rB || void 0 === rB || rB.then((() => {
              var BB;
              (null === (BB = nB.ujB(this.eId)) || void 0 === BB ? void 0 : BB.mesh) === UB && (this.previousHidingMeshManagerState = null, this.updateHidingMeshMgr())
            }));
            const sB = null === IB ? null : QB.pm.JY.zQB(IB, 0);
            if (nB.hY(this.eId, nB.names.mesh, {
                mY: IB,
                EzB: sB,
                mesh: UB,
                vIB: !1,
                qzB: "Leaderboard" !== NB,
                offset: aB.slice(),
                bIB: "ParticleEmitter" === NB && uB.followTargetMeshOffset ? BB => {
                  var jB;
                  fz().copy(BB, aB);
                  const zB = null === (jB = nB.RjB(this.eId)) || void 0 === jB ? void 0 : jB.SJ,
                    QB = void 0 === zB ? null : nB.JjB(zB);
                  if (QB) {
                    var dB, IB;
                    const jB = this.bloxd.getEntityHeading(null !== (dB = QB.ridingVehicleEId) && void 0 !== dB ? dB : zB, !0),
                      nB = Math.sin(jB),
                      NB = Math.cos(jB);
                    BB[0] += QB.meshOffset[0] * NB + QB.meshOffset[2] * nB, BB[1] += QB.meshOffset[1], BB[2] += QB.meshOffset[2] * NB - QB.meshOffset[0] * nB;
                    const uB = null !== (IB = QB.ridingVehicleEId) && void 0 !== IB ? IB : null;
                    null !== uB && (0, Fz.e)(this.ur, uB, BB)
                  }
                } : null
              }), "Person" === NB) {
              var JB, mB, yB, kB;
              nB.hY(this.eId, nB.names.meshAttachments, {
                personFullBody: null !== (JB = null === (mB = (0, Sz.j)("head", null === (kB = uB.textures) || void 0 === kB ? void 0 : kB.head)) || void 0 === mB || null === (yB = mB.personModel) || void 0 === yB ? void 0 : yB.fullBody) && void 0 !== JB && JB
              });
              for (const BB of mz.v) {
                var GB, LB, gB;
                const jB = null === (GB = uB.textures) || void 0 === GB ? void 0 : GB[BB];
                jB && null !== (LB = (0, Sz.j)(BB, jB)) && void 0 !== LB && null !== (gB = LB.attachments) && void 0 !== gB && gB.length && tz.e.Player.meshApi.updatePlayerCosmetic(this.eId, IB, BB, jB)
              }
              nB.hY(this.eId, nB.names.moveState), nB.hY(this.eId, "updateWalkingState", {
                mY: IB,
                EzB: sB,
                walkingLegSwingDuration: Ez.w
              }), nB.hY(this.eId, "humanoidMesh", {
                mY: IB,
                EzB: sB,
                heldItemPositionParams: {},
                maxWalkingAngleOverride: null
              }), nB.hY(this.eId, "animator", {
                mY: IB,
                EzB: sB,
                modelLifeformType: "Player"
              }), Dz.f.hasAnimation("Person") && nB.hY(this.eId, "rigAnimation", {
                target: "Person",
                mY: IB
              }), nB.JjB(this.eId).pose = this.colyseusEntity.pose || "standing"
            } else if ("BloxdBlock" === NB && null !== IB) {
              nB.hY(this.eId, "animator", {
                mY: IB,
                EzB: sB,
                modelLifeformType: null
              });
              const BB = (0, kz.q)(uB.blockName);
              null !== BB && nB.hY(this.eId, "rigAnimation", {
                target: BB,
                mY: IB
              })
            }
            nB.GNB(this.eId, "entityName", {
              name: this.colyseusEntity.name,
              nameYOffset: pB
            }), this.bloxd.setEntityName(this.eId, this.colyseusEntity.name), !0 === uB.autoRotate && (nB.ZY(this.eId, "meshRotation"), nB.hY(this.eId, "autoRotate"));
            const {
              lineToEId: tB
            } = uB;
            (0, yz.I)(tB) || nB.hY(this.eId, "lineToEntity", {
              lineToEId: tB
            });
            const SB = QB.RY[QB.zV][this.eId];
            this.updateOverlayColour(null !== (BB = null === SB || void 0 === SB ? void 0 : SB.overlayColour) && void 0 !== BB ? BB : null), this.updateOpacity(null !== (jB = null === SB || void 0 === SB ? void 0 : SB.opacity) && void 0 !== jB ? jB : 1), this.updateZIndex(null !== (zB = null === SB || void 0 === SB ? void 0 : SB.zIndex) && void 0 !== zB ? zB : 0)
          },
          removeMeshComponent: () => {
            "Person" !== NB && "BloxdBlock" !== NB || nB.ZY(this.eId, "rigAnimation"), nB.ZY(this.eId, nB.names.mesh), nB.HBB(this.eId, nB.names.meshAttachments) && nB.ZY(this.eId, nB.names.meshAttachments), nB.ZY(this.eId, "entityName"), nB.ZY(this.eId, "autoRotate"), nB.ZY(this.eId, "lineToEntity"), "Person" === NB ? (nB.ZY(this.eId, nB.names.moveState), nB.ZY(this.eId, "updateWalkingState"), nB.ZY(this.eId, "humanoidMesh"), nB.ZY(this.eId, "animator")) : "BloxdBlock" === NB && nB.ZY(this.eId, "animator")
          },
          hideDist: null !== (jB = uB.hideDist) && void 0 !== jB ? jB : 80,
          movingHideDist: null !== (zB = uB.hideDist) && void 0 !== zB ? zB : 120,
          displayOutsideLoadedChunk: uB.hideDist > 100,
          immediatelyUpdate: !0,
          ju: "BloxdBlock" === NB ? uB.blockName : NB
        })
      }
      queueMeshRebuild() {
        this.meshRebuildQueued || (this.meshRebuildQueued = !0, queueMicrotask((() => {
          this.meshRebuildQueued = !1, this.HJ || this.updateHidingMeshMgr()
        })))
      }
      getSpec() {
        return (0, Gz.g)({
          meshKind: this.meshKind,
          meshOpts: this.meshOpts
        })
      }
      updateOverlayColour(BB) {
        var jB, zB;
        if ("Person" !== this.meshKind) return;
        let QB = new gz.c(0, 0, 0, 0);
        if (null !== BB) {
          const jB = (0, Lz.W)(BB);
          QB = new gz.c(jB[0] / 255, jB[1] / 255, jB[2] / 255, .5)
        }
        const nB = null !== (jB = null === (zB = this.ur.vG.ujB(this.eId)) || void 0 === zB ? void 0 : zB.mY) && void 0 !== jB ? jB : null;
        null !== nB && tz.e.Player.meshApi.updateMeshOverlayColour(nB, QB)
      }
      updateZIndex(BB) {
        var jB;
        if ("Person" !== this.meshKind) return;
        const zB = null === (jB = this.ur.vG.ujB(this.eId)) || void 0 === jB ? void 0 : jB.mY;
        "number" === typeof zB && this.ur.pm.JY.setRenderingGroupId(zB, BB)
      }
      updateOpacity(BB) {
        const jB = this.ur.vG.ujB(this.eId);
        jB && ("number" !== typeof jB.mY ? jB.mesh && "ParticleEmitter" !== this.meshKind && (0, oz.g)(jB.mesh, BB) : tz.e.Player.meshApi.updateMeshOpacity(jB.mY, BB))
      }
    }
    var Vz = zB(39078);
    class hz {
      constructor(BB, jB) {
        this.eId = jB, this.ur = void 0, this.schema = void 0, this.ur = BB.ur
      }
      initClient(BB) {
        this.schema = BB, this.ur.vG.add([BB.x, BB.y, BB.z], .1, .1, null, null, !1, !1, this.eId), this.ur.vG.hY(this.eId, "smoothToServerPos"), Vz.c.add(this.eId, this.copyOpts())
      }
      onChangeClient(BB) {
        nz.g.includes(BB) && Vz.c.update(this.eId, this.copyOpts())
      }
      disposeClient() {
        Vz.c.remove(this.eId), this.ur.vG.deleteEntity(this.eId)
      }
      copyOpts() {
        const {
          soundName: BB,
          volume: jB,
          refDistance: zB,
          maxHearDist: QB,
          rate: nB
        } = this.schema;
        return {
          soundName: BB,
          volume: jB,
          refDistance: zB,
          maxHearDist: QB,
          rate: nB
        }
      }
    }
    var Xz = zB(3798),
      Zz = zB(36843),
      Az = zB(6428),
      Tz = zB(37879),
      Pz = zB(2863),
      Wz = zB(38227),
      ez = zB(9109),
      lz = zB(38558),
      wz = zB(37859),
      xz = zB(3036);
    class Kz {
      constructor(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
          QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => performance.now();
        this.LzB = BB, this.ur = jB, this.setupBudgetMs = zB, this.now = QB, this.createStateCallbacks = void 0, this.roomStateCallbacks = void 0, this.allItems = {}, this.detachers = new Map, this.deferredSetups = new Map, this.queuedSetups = new Map, this.promotedSetups = new Set, this.setupBudgetLeftMs = void 0, this.lastRefillMs = void 0, this.roomState = void 0, this.HJ = !1, this.onFrame = () => {
          this.setUpQueuedEntities(!0)
        }, this.mG = () => {
          this.setUpQueuedEntities(this.now() - this.lastRefillMs > 100)
        }, this.setUpPromoted = () => {
          for (const BB of this.promotedSetups) {
            this.promotedSetups.delete(BB);
            const jB = this.queuedSetups.get(BB);
            jB && (this.queuedSetups.delete(BB), this.timedSetup(jB, BB))
          }
        }, this.createStateCallbacks = (0, ez.getStateCallbacks)(BB), this.roomStateCallbacks = this.createStateCallbacks(BB.state), this.roomState = BB.state, this.setupBudgetLeftMs = zB, this.lastRefillMs = QB()
      }
      setup() {
        this.setupEntityHandlers(), this.setupItemHandlers(), this.LzB.onStateChange(this.setUpPromoted), this.ur.on("beforeInputs", this.onFrame), this.ur.on("vp", this.mG)
      }
      setUpQueuedEntities(BB) {
        var jB;
        if ((null === (jB = (0, Pz.c)().client.getMsgHandler()) || void 0 === jB ? void 0 : jB.LzB) !== this.LzB) return this.ur.off("beforeInputs", this.onFrame), this.ur.off("vp", this.mG), this.queuedSetups.clear(), void this.promotedSetups.clear();
        if (BB && (this.setupBudgetLeftMs = this.setupBudgetMs, this.lastRefillMs = this.now()), this.setUpPromoted(), 0 !== this.queuedSetups.size)
          for (fz().copy(Cz, this.ur.vG.iG(this.ur.zV)); this.setupBudgetLeftMs > 0;) {
            const BB = this.nearestQueued(Cz);
            if (null === BB) return;
            this.setUpIfQueued(BB), this.setUpPromoted()
          }
      }
      nearestQueued(BB) {
        let jB = null,
          zB = 1 / 0;
        return this.queuedSetups.forEach(((QB, nB) => {
          const dB = function(BB, jB) {
            return (jB.x - BB[0]) ** 2 + (jB.y - BB[1]) ** 2 + (jB.z - BB[2]) ** 2
          }(BB, QB);
          (null === jB || dB < zB) && (jB = nB, zB = dB)
        })), jB
      }
      setUpOrQueue(BB, jB) {
        0 === this.queuedSetups.size && this.setupBudgetLeftMs > 0 || this.mustSetUpNow(BB, jB) ? this.timedSetup(BB, jB) : this.queuedSetups.set(jB, BB)
      }
      mustSetUpNow(BB, jB) {
        const zB = this.ur.FBB;
        if (jB === zB) return !0;
        const QB = this.roomState.entities.get(zB);
        return !(!QB || QB.ridingVehicleEId !== jB && QB.followingEId !== jB) || (cz(BB.type) === Jz.d || (0, Pz.c)().getFollowingEntities(jB).length > 0)
      }
      setUpIfQueued(BB) {
        const jB = this.queuedSetups.get(BB);
        jB && (this.queuedSetups.delete(BB), this.timedSetup(jB, BB))
      }
      promoteIfQueued(BB) {
        null !== BB && this.queuedSetups.has(BB) && this.promotedSetups.add(BB)
      }
      timedSetup(BB, jB) {
        const zB = this.now();
        this.setupEntity(BB, jB), this.setupBudgetLeftMs -= this.now() - zB
      }
      setupEntityHandlers() {
        this.roomStateCallbacks.entities.xG(((BB, jB) => {
          this.ur.FBB ? this.setUpOrQueue(BB, jB) : this.deferEntitySetupUntilInitInfo(BB, jB)
        })), this.roomStateCallbacks.entities.ZD(((BB, jB) => {
          const zB = this.deferredSetups.get(jB);
          zB && (Rj.n.unsubscribe(zB), this.deferredSetups.delete(jB)), this.queuedSetups.delete(jB), this.detach(jB), (0, Pz.c)().client.disposeEntity(jB)
        }))
      }
      deferEntitySetupUntilInitInfo(BB, jB) {
        const zB = Rj.n.Yk("initInfoReceived", (() => {
          this.deferredSetups.delete(jB), this.setUpOrQueue(BB, jB)
        }));
        this.deferredSetups.set(jB, zB), (0, Xz.onGameResetOnce)((() => {
          this.deferredSetups.get(jB) === zB && (Rj.n.unsubscribe(zB), this.deferredSetups.delete(jB)), (0, Pz.c)().updatePositionAndPhysics(this.ur.zV, {
            type: Az.t.DEFAULT,
            tier: null
          }, !0), (0, Pz.c)().takeHeldPlayerBodySize(this.ur.zV);
          const BB = this.ur.vG.CBB(this.ur.zV);
          BB && (BB.movementType = Az.r.NORMAL)
        }))
      }
      setupEntity(BB, jB) {
        const zB = jB === this.ur.FBB;
        if (zB)(0, Pz.c)().client.mw(this.ur.zV, null, null);
        else {
          const {
            type: zB
          } = BB, QB = cz(zB);
          if (void 0 === QB) return void
          function(BB, jB) {
            const zB = String(BB);
            if (bz.has(zB)) return;
            bz.add(zB);
            const QB = zB.length > 80 ? `${zB.slice(0,80)}...` : zB,
              nB = `No client handler for entity type ${JSON.stringify(QB)}, so entity ${jB} is not set up`;
            console.warn(nB), (0, xz.reportClientError)("uncaught", nB, "unknown_entity_type")
          }(zB, jB);
          (0, Pz.c)().client.mw(jB, BB, new QB((0, Pz.c)(), jB, zB))
        }
        const QB = this.createStateCallbacks(BB);
        if (zB) return this.setupMapSchemaCallbacks(jB, BB, QB, "armour"), this.setupScalarField(jB, BB, QB, "scale"), this.setupScalarField(jB, BB, QB, "ridingVehicleEId"), this.setupScalarField(jB, BB, QB, "followingEId"), this.setupScalarField(jB, BB, QB, "followingOffset"), void this.setupScalarField(jB, BB, QB, "shouldMatchFollowingEntityRotation");
        for (const nB of pz(BB.constructor)) BB[nB] instanceof zz.MapSchema ? this.setupMapSchemaCallbacks(jB, BB, QB, nB) : this.setupScalarField(jB, BB, QB, nB)
      }
      setupMapSchemaCallbacks(BB, jB, zB, QB) {
        const nB = zB[QB],
          dB = new Map;
        nB.xG(((zB, nB) => {
          if (this.onEntityFieldChange(BB, jB, QB, {
              key: nB,
              value: zB
            }), !(zB instanceof zz.Schema)) return;
          const IB = this.createStateCallbacks(zB),
            NB = [];
          for (const dB of pz(zB.constructor)) NB.push(this.listenForFutureChanges(IB, dB, (() => {
            this.onEntityFieldChange(BB, jB, QB, {
              key: nB,
              value: zB
            })
          })));
          dB.set(nB, (() => {
            for (const BB of NB) BB()
          }))
        })), nB.ZD(((zB, nB) => {
          var IB;
          null === (IB = dB.get(nB)) || void 0 === IB || IB(), dB.delete(nB), this.onEntityFieldChange(BB, jB, QB, {
            key: nB,
            value: null
          })
        })), this.addDetacher(BB, (() => {
          for (const BB of dB.values()) BB();
          dB.clear()
        }))
      }
      setupScalarField(BB, jB, zB, QB) {
        this.onEntityFieldChange(BB, jB, QB, jB[QB]);
        const nB = this.listenForFutureChanges(zB, QB, (zB => {
          this.onEntityFieldChange(BB, jB, QB, zB)
        }));
        this.addDetacher(BB, nB)
      }
      addDetacher(BB, jB) {
        let zB = this.detachers.get(BB);
        zB || (zB = [], this.detachers.set(BB, zB)), zB.push(jB)
      }
      detach(BB) {
        for (const zB of null !== (jB = this.detachers.get(BB)) && void 0 !== jB ? jB : []) {
          var jB;
          zB()
        }
        this.detachers.delete(BB)
      }
      listenForFutureChanges(BB, jB, zB) {
        return BB.listen(jB, zB, !1)
      }
      onEntityFieldChange(BB, jB, zB, QB) {
        switch (zB) {
          case "ridingVehicleEId": {
            this.promoteIfQueued(QB);
            const jB = this.ur.vG.JjB((0, Zz.b)(BB));
            jB && (jB.ridingVehicleEId = QB);
            break
          }
          case "armour":
            this.handleArmourChange(BB, QB);
            break;
          case "followingEId":
            this.promoteIfQueued(QB), this.handleFollowingEIdChange(BB, jB, QB);
            break;
          case "xRotation":
          case "yRotation":
          case "zRotation":
            this.handleRotationChange(BB, zB, QB);
            break;
          case "scale":
            this.handleScaleChange(BB, QB);
            break;
          case "baseRenderHeading":
            this.handleBaseRenderHeadingChange(BB, QB);
            break;
          case "followingOffset":
            this.handleFollowingOffsetChange(BB, QB);
            break;
          case "shouldMatchFollowingEntityRotation":
            this.handleShouldMatchFollowingEntityRotationChange(BB, QB);
            break;
          case "x":
          case "y":
          case "z":
            return void this.handlePositionChange(BB, zB, QB)
        }(0, Pz.c)().client.updateEntityField(BB, zB, QB)
      }
      handleArmourChange(BB, jB) {
        var zB, QB;
        const {
          key: nB,
          value: dB
        } = jB;
        (0, tz.B)(BB, nB, null !== (zB = null === dB || void 0 === dB ? void 0 : dB.itemName) && void 0 !== zB ? zB : null, null !== (QB = null === dB || void 0 === dB ? void 0 : dB.enchantmentTier) && void 0 !== QB ? QB : null)
      }
      handleFollowingEIdChange(BB, jB, zB) {
        const QB = (0, Zz.b)(BB),
          nB = QB === this.ur.zV;
        if (this.ur.vG.ZY(QB, this.ur.vG.names.qS), zB) this.ur.vG.ZY(QB, "smoothToServerPos"), this.ur.vG.hY(QB, this.ur.vG.names.qS, {
          SJ: (0, Zz.b)(zB),
          offset: Array.from(jB.followingOffset),
          OjB: jB.shouldMatchFollowingEntityRotation,
          nzB: !0,
          dzB: (BB, QB) => {
            if (fz().copy(BB, jB.followingOffset), jB.ridingVehicleEId === zB) {
              const jB = (0, Zz.b)(zB),
                nB = (0, Pz.c)().getEntityHeading(jB, QB);
              fz().ta(BB, BB, fz().ZERO, nB)
            }
          }
        });
        else if (!nB) {
          this.ur.vG.HBB(QB, "smoothToServerPos") || this.ur.vG.hY(QB, "smoothToServerPos");
          const BB = this.ur.vG.getState(QB, "smoothToServerPos"),
            jB = this.ur.vG.Gw(QB).position;
          (0, wz.setServerPosition)(BB, jB[0], jB[1], jB[2])
        }
      }
      handleRotationChange(BB, jB, zB) {
        const QB = "xRotation" === jB ? 0 : "yRotation" === jB ? 1 : 2;
        for (const nB of (0, Pz.c)().getFollowingEntities(BB)) {
          const BB = this.ur.vG.getState(nB, "meshRotation"),
            jB = this.ur.vG.RjB(nB);
          BB && jB.OjB && (BB.serverSetRotation[QB] = zB)
        }
      }
      handleScaleChange(BB, jB) {
        const zB = (0, Zz.b)(BB);
        if (Rj.n.Ly(`entityScale|${zB}`, jB), zB === this.ur.zV) {
          var QB;
          (0, Pz.c)().removeFromEyeHeightCache(zB);
          const BB = this.ur.vG.CBB(this.ur.zV),
            jB = null !== (QB = null === BB || void 0 === BB ? void 0 : BB.physicsState) && void 0 !== QB ? QB : {
              type: Az.t.DEFAULT,
              tier: null
            };
          return void(0, Pz.c)().updatePositionAndPhysics(this.ur.zV, jB, !1)
        }
        const nB = (0, Pz.c)().getLifeformType(zB);
        if (null === nB) return;
        const {
          physicsBodyWidth: dB,
          physicsBodyHeight: IB
        } = (0, lz.d)(jB, nB);
        this.ur.vG.bjB(zB, dB, IB, dB)
      }
      handleBaseRenderHeadingChange(BB, jB) {
        const zB = this.ur.vG.getState(BB, "meshRotation");
        zB && (zB.baseRenderRotation[1] = jB);
        for (const QB of (0, Pz.c)().getFollowingEntities(BB)) {
          const BB = this.ur.vG.getState(QB, "meshRotation"),
            zB = this.ur.vG.RjB(QB);
          BB && zB.OjB && (BB.baseRenderRotation[1] = jB)
        }
      }
      handleFollowingOffsetChange(BB, jB) {
        const zB = this.ur.vG.RjB((0, Zz.b)(BB));
        if (zB && zB.offset) {
          const BB = jB ? Array.from(jB) : fz().ZERO;
          zB.offset[0] = BB[0], zB.offset[1] = BB[1], zB.offset[2] = BB[2]
        }
      }
      handleShouldMatchFollowingEntityRotationChange(BB, jB) {
        const zB = this.ur.vG.RjB((0, Zz.b)(BB));
        zB && (zB.OjB = null === jB || void 0 === jB || jB)
      }
      handlePositionChange(BB, jB, zB) {
        if (this.ur.vG.HBB(BB, "smoothToServerPos")) {
          const QB = this.ur.vG.getState(BB, "smoothToServerPos");
          (0, wz.setServerPositionAxis)(QB, vz[jB], zB)
        }
      }
      setupItemHandlers() {
        this.roomStateCallbacks.items.xG(((BB, jB) => {
          this.allItems[jB] = BB, (0, Tz.j)(this.ur, jB, [BB.x, BB.y, BB.z], BB.id, {
            amount: BB.amount,
            attributes: JSON.parse(BB.attributes),
            Vn: (0, Oj.b)(this.ur).cantPickUpItem(jB),
            size: BB.size,
            predictedAt: (0, Pz.c)().client.itemDropPrediction.onServerItemAdded(jB)
          });
          const zB = this.createStateCallbacks(BB);
          for (const QB of pz(Iz)) this.onItemFieldChange(jB, QB, BB[QB]), this.addDetacher(jB, this.listenForFutureChanges(zB, QB, (BB => {
            this.onItemFieldChange(jB, QB, BB)
          })))
        })), this.roomStateCallbacks.items.ZD(((BB, jB) => {
          delete this.allItems[jB], this.detach(jB), (0, Pz.c)().client.itemDropPrediction.onServerItemRemoved(jB), this.ur.vG.HBB(jB, this.ur.vG.names.itemState) && this.ur.vG.deleteEntity(jB), (0, Oj.b)(this.ur).disposeEntity(jB)
        }))
      }
      onItemFieldChange(BB, jB, zB) {
        if (jB in vz) {
          if (this.ur.vG.HBB(BB, "itemState")) {
            const QB = this.ur.vG.getState(BB, "smoothToServerPos");
            (0, wz.setServerPositionAxis)(QB, vz[jB], zB), (0, Pz.c)().client.itemDropPrediction.onServerItemMoved(BB)
          }
          return
        }
        if (!this.ur.vG.HBB(BB, "itemState")) return;
        const QB = this.ur.vG.getState(BB, "itemState");
        "amount" === jB && zB !== QB.amount && (QB.creationTime = Date.now()), QB[jB] = "attributes" === jB ? JSON.parse(zB) : zB
      }
      dispose() {
        if (!this.HJ) {
          this.HJ = !0, this.ur.off("beforeInputs", this.onFrame), this.ur.off("vp", this.mG), this.queuedSetups.clear(), this.promotedSetups.clear();
          for (const BB of this.deferredSetups.values()) Rj.n.unsubscribe(BB);
          this.deferredSetups.clear(), this.ur.vG.ZY(this.ur.zV, this.ur.vG.names.qS);
          for (const BB in this.allItems) this.ur.vG.deleteEntity(BB), delete this.allItems[BB];
          for (const BB of [...this.detachers.keys()]) this.detach(BB);
          (0, Oj.b)(this.ur).clear();
          for (const BB of (0, Pz.c)().client.iterateEntityIds())(0, Pz.c)().client.disposeEntity(BB)
        }
      }
    }
    const Cz = [0, 0, 0];

    function cz(BB) {
      if ("string" !== typeof BB) return;
      const jB = BB.indexOf("|"),
        zB = -1 === jB ? BB : BB.slice(0, jB),
        QB = Oz();
      return Object.hasOwn(QB, zB) ? QB[zB] : void 0
    }
    const bz = new Set;
    const vz = {
      x: 0,
      y: 1,
      z: 2
    };
    let Rz = null;

    function Oz() {
      return null !== Rz || (Rz = {
        ...Object.fromEntries(nz.i.map((BB => {
          const {
            ju: jB
          } = (0, Wz.b)(BB);
          return [BB, jB]
        }))),
        Pebble: Jz.d,
        Snowball: Jz.d,
        "Snowball Launcher": Jz.d,
        "Reinforced Pebble": Jz.d,
        Bullet: Jz.d,
        "Reinforced Ball": Jz.d,
        Ball: Jz.d,
        Mango: Jz.d,
        "Moonstone Orb": Jz.d,
        ...Object.fromEntries(Qz.v.map((BB => [(0, Lz.Yb)(BB), Jz.d]))),
        Arrow: Jz.d,
        "Arrow of Speed": Jz.d,
        "Arrow of Poison": Jz.d,
        "Arrow of Slowness": Jz.d,
        "Arrow of Weakness": Jz.d,
        "Arrow of Knockback": Jz.d,
        "Arrow of Strength": Jz.d,
        "Arrow of Invisibility": Jz.d,
        "Arrow of Jumping": Jz.d,
        "Arrow of Defense": Jz.d,
        "Arrow of Instant Healing": Jz.d,
        "Arrow of Instant Damage": Jz.d,
        "Arrow of Regeneration": Jz.d,
        "Arrow of Haste": Jz.d,
        "Arrow of Shield": Jz.d,
        "Arrow of Double Jump": Jz.d,
        "Arrow of Heat Resistance": Jz.d,
        "Arrow of X-Ray Vision": Jz.d,
        "Arrow of Mining Yield": Jz.d,
        "Arrow of Brain Rot": Jz.d,
        "Arrow of Milk": Jz.d,
        Fireball: Jz.d,
        "Bouncy Bomb": Jz.d,
        RPG: Jz.d,
        "Obby RPG": Jz.d,
        "Super RPG": Jz.d,
        "Grenade Launcher": Jz.d,
        Iceball: Jz.d,
        Coconut: Jz.d,
        "Splash Speed Potion": Jz.d,
        "Splash Defense Potion": Jz.d,
        "Splash Strength Potion": Jz.d,
        "Splash Invisibility Potion": Jz.d,
        "Splash Jump Potion": Jz.d,
        "Splash Knockback Potion": Jz.d,
        "Splash Poison Potion": Jz.d,
        "Splash Speed Potion II": Jz.d,
        "Splash Defense Potion II": Jz.d,
        "Splash Strength Potion II": Jz.d,
        "Splash Jump Potion II": Jz.d,
        "Splash Knockback Potion II": Jz.d,
        "Splash Poison Potion II": Jz.d,
        "Splash Slowness Potion": Jz.d,
        "Splash Slowness Potion II": Jz.d,
        "Splash Weakness Potion": Jz.d,
        "Splash Weakness Potion II": Jz.d,
        "Splash Milk Potion": Jz.d,
        "Splash Instant Damage Potion": Jz.d,
        "Splash Instant Damage Potion II": Jz.d,
        "Splash Instant Healing Potion": Jz.d,
        "Splash Instant Healing Potion II": Jz.d,
        "Splash Regeneration Potion": Jz.d,
        "Splash Regeneration Potion II": Jz.d,
        "Splash Haste Potion": Jz.d,
        "Splash Haste Potion II": Jz.d,
        "Splash Shield Potion": Jz.d,
        "Splash Shield Potion II": Jz.d,
        "Splash Double Jump Potion": Jz.d,
        "Splash Heat Resistance Potion": Jz.d,
        "Splash X-Ray Vision Potion": Jz.d,
        "Splash Mining Yield Potion": Jz.d,
        "Splash Mining Yield Potion II": Jz.d,
        "Splash Brain Rot Potion": Jz.d,
        "Yellow Paintball Gun": Jz.d,
        "White Paintball Gun": Jz.d,
        "Red Paintball Gun": Jz.d,
        "Purple Paintball Gun": Jz.d,
        "Pink Paintball Gun": Jz.d,
        "Orange Paintball Gun": Jz.d,
        "Magenta Paintball Gun": Jz.d,
        "Lime Paintball Gun": Jz.d,
        "Light Gray Paintball Gun": Jz.d,
        "Light Blue Paintball Gun": Jz.d,
        "Green Paintball Gun": Jz.d,
        "Gray Paintball Gun": Jz.d,
        "Cyan Paintball Gun": Jz.d,
        "Brown Paintball Gun": Jz.d,
        "Blue Paintball Gun": Jz.d,
        "Black Paintball Gun": Jz.d,
        "Yellow Heavy Paintball Gun": Jz.d,
        "White Heavy Paintball Gun": Jz.d,
        "Red Heavy Paintball Gun": Jz.d,
        "Purple Heavy Paintball Gun": Jz.d,
        "Pink Heavy Paintball Gun": Jz.d,
        "Orange Heavy Paintball Gun": Jz.d,
        "Magenta Heavy Paintball Gun": Jz.d,
        "Lime Heavy Paintball Gun": Jz.d,
        "Light Gray Heavy Paintball Gun": Jz.d,
        "Light Blue Heavy Paintball Gun": Jz.d,
        "Green Heavy Paintball Gun": Jz.d,
        "Gray Heavy Paintball Gun": Jz.d,
        "Cyan Heavy Paintball Gun": Jz.d,
        "Brown Heavy Paintball Gun": Jz.d,
        "Blue Heavy Paintball Gun": Jz.d,
        "Black Heavy Paintball Gun": Jz.d,
        "Toxin Ball": Jz.d,
        "Splash Aura XP Potion": Jz.d,
        "Splash Aura XP Potion II": Jz.d,
        "Arrow of Aura XP": Jz.d,
        Firecracker: Jz.d,
        "Rainbow Firecracker": Jz.d,
        "White Firecracker": Jz.d,
        "Orange Firecracker": Jz.d,
        "Magenta Firecracker": Jz.d,
        "Light Blue Firecracker": Jz.d,
        "Yellow Firecracker": Jz.d,
        "Lime Firecracker": Jz.d,
        "Pink Firecracker": Jz.d,
        "Gray Firecracker": Jz.d,
        "Light Gray Firecracker": Jz.d,
        "Cyan Firecracker": Jz.d,
        "Purple Firecracker": Jz.d,
        "Blue Firecracker": Jz.d,
        "Brown Firecracker": Jz.d,
        "Green Firecracker": Jz.d,
        "Red Firecracker": Jz.d,
        "Black Firecracker": Jz.d,
        "Firecracker Pebble": Jz.d,
        "Rainbow Firecracker Pebble": Jz.d,
        "White Firecracker Pebble": Jz.d,
        "Orange Firecracker Pebble": Jz.d,
        "Magenta Firecracker Pebble": Jz.d,
        "Light Blue Firecracker Pebble": Jz.d,
        "Yellow Firecracker Pebble": Jz.d,
        "Lime Firecracker Pebble": Jz.d,
        "Pink Firecracker Pebble": Jz.d,
        "Gray Firecracker Pebble": Jz.d,
        "Light Gray Firecracker Pebble": Jz.d,
        "Cyan Firecracker Pebble": Jz.d,
        "Purple Firecracker Pebble": Jz.d,
        "Blue Firecracker Pebble": Jz.d,
        "Brown Firecracker Pebble": Jz.d,
        "Green Firecracker Pebble": Jz.d,
        "Red Firecracker Pebble": Jz.d,
        "Black Firecracker Pebble": Jz.d,
        "Blinding Pebble": Jz.d,
        Poop: Jz.d,
        "Wood Boomerang": Jz.d,
        "Stone Boomerang": Jz.d,
        "Iron Boomerang": Jz.d,
        "Gold Boomerang": Jz.d,
        "Diamond Boomerang": Jz.d,
        "Amethite Boomerang": Jz.d,
        "Magmasteel Boomerang": Jz.d,
        "Rubellite Boomerang": Jz.d,
        "Serpentite Boomerang": Jz.d,
        "Moonstone Boomerang": Jz.d,
        "67 Base Projectile": Jz.d,
        "67 Boosted Projectile": Jz.d,
        "Capitano Grenade": Jz.d,
        "Scatter Pellet": Jz.d,
        "Lucky Bomb": Jz.d,
        "Unlucky Bomb": Jz.d,
        "Swap Orb": Jz.d,
        Mesh: Yz,
        AudioEntity: hz
      }), Rz
    }
  },
  39131: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => dB,
      f: () => IB
    });
    var QB = zB(658),
      nB = zB(37816);
    const dB = 4e4;
    class IB {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now;
        this.now = BB, this.editedAt = new Map, this.lastChunkX = NaN, this.lastChunkY = NaN, this.lastChunkZ = NaN, this.lastChunkId = ""
      }
      noteEdit(BB, jB, zB) {
        const dB = (0, QB.P)(BB),
          IB = (0, QB.P)(jB),
          NB = (0, QB.P)(zB),
          uB = this.now();
        if (dB !== this.lastChunkX || IB !== this.lastChunkY || NB !== this.lastChunkZ) {
          this.lastChunkX = dB, this.lastChunkY = IB, this.lastChunkZ = NB, this.lastChunkId = (0, nB.c)(dB, IB, NB), this.editedAt.delete(this.lastChunkId), this.editedAt.set(this.lastChunkId, uB);
          for (const [BB, jB] of this.editedAt) {
            if (jB >= uB - 3e5) break;
            this.editedAt.delete(BB)
          }
        } else this.editedAt.set(this.lastChunkId, uB)
      }
      chunksEditedSince(BB) {
        const jB = [];
        for (const [zB, QB] of this.editedAt) QB >= BB && jB.push(zB);
        return jB
      }
    }
  },
  39173: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => sj,
      f: () => Pj,
      g: () => Dj,
      k: () => Wj
    });
    var QB = zB(3798),
      nB = zB(8769),
      dB = zB(36751),
      IB = zB(1456),
      NB = zB(36828),
      uB = zB(39078),
      UB = zB(39062),
      aB = zB(3849),
      pB = zB(37957),
      rB = zB(39177),
      sB = zB(1270),
      JB = zB(363),
      mB = zB(31),
      yB = zB(2006),
      kB = zB(106),
      GB = zB(41),
      LB = zB(2033),
      gB = zB(1948),
      tB = zB(3078);
    class SB {
      constructor(BB) {
        this.storeForMs = BB, this.clicks = new tB.c
      }
      click() {
        this.clicks.enqueue(Date.now());
        const BB = Date.now() - this.storeForMs;
        for (; this.clicks.size > 0 && this.clicks.peek() < BB;) this.clicks.dequeue()
      }
      getNumClicksInMs(BB) {
        let jB = 0;
        return this.clicks.forEach((zB => {
          zB > Date.now() - BB && jB++
        })), jB
      }
      getMaxClickSeparationInMs(BB) {
        if (0 === this.clicks.size) return this.storeForMs;
        let jB = 0,
          zB = Date.now() - BB;
        this.clicks.forEach((QB => {
          QB < Date.now() - BB || (jB = Math.max(jB, Math.abs(QB - zB)), zB = QB)
        }));
        const QB = Math.abs(Date.now() - zB);
        return Math.max(jB, QB)
      }
    }
    class MB {
      constructor(BB) {
        this.storeForMs = BB, this.clickDownDurations = new tB.c
      }
      registerClickDownDuration(BB) {
        this.clickDownDurations.enqueue({
          dur: BB,
          atTime: Date.now()
        });
        const jB = Date.now() - this.storeForMs;
        for (; this.clickDownDurations.size > 0 && this.clickDownDurations.peek().atTime < jB;) this.clickDownDurations.dequeue()
      }
      clickDownDurationsCheck(BB) {
        if (BB > this.storeForMs) return console.error("overDuration is greater than storeForMs"), "0:0";
        let jB = 0,
          zB = 0;
        return this.clickDownDurations.forEach((QB => {
          QB.atTime > Date.now() - BB && (jB++, zB = Math.max(zB, QB.dur))
        })), `${jB}:${zB}`
      }
    }
    var EB = zB(36574),
      iB = zB(39179),
      qB = zB(28),
      fB = zB(2863),
      oB = zB(1357),
      HB = zB(2505),
      DB = zB(4562),
      FB = zB(145),
      YB = zB(38235),
      VB = zB(38470),
      hB = zB(658),
      XB = zB(36570),
      ZB = zB(12),
      AB = zB(9266),
      TB = zB(1263),
      PB = zB(214),
      WB = zB(39187),
      eB = zB(39191),
      lB = zB(39193),
      wB = zB(38274),
      xB = zB(39203),
      KB = zB(38162),
      CB = zB(3510),
      cB = zB(1664),
      bB = zB(36682),
      vB = zB(2912),
      RB = zB(36451),
      OB = zB(36453),
      Bj = zB(39199),
      jj = zB(38032);
    const zj = {
      forward: "freeCamForward",
      backward: "freeCamBackward",
      left: "freeCamLeft",
      right: "freeCamRight",
      jump: "freeCamUp",
      crouch: "freeCamDown"
    };

    function Qj() {
      var BB, jB;
      return !(null === (BB = (0, fB.c)().client) || void 0 === BB || null === (jB = BB.freeCameraController) || void 0 === jB || !jB.movesFly())
    }

    function nj(BB) {
      const jB = BB.on.bind(BB);
      BB.on = (BB, zB) => {
        LB.E.has(BB) ? jB(BB, zB) : jB(BB, (jB => {
          var QB;
          return null !== (QB = (0, fB.c)().client) && void 0 !== QB && QB.isReplayMode() ? function(BB) {
            return BB in zj
          }(BB) && Qj() ? zB(jB) : void 0 : zB(jB)
        }))
      }
    }
    const dj = 5e3,
      Ij = 1;
    let Nj, uj = Ij,
      Uj = 0;
    const aj = !0;
    let pj = aj;
    yB.c.subscribe("_ignoreBasicBoards", (BB => {
      pj = BB
    })), (0, QB.onGameReset)((() => {
      pj = aj
    }));
    let rj = null;
    const sj = () => rj;
    let Jj, mj, yj;
    var kj, Gj, Lj, gj, tj, Sj, Mj, Ej, ij;
    const qj = [1, 68, 0, "h", 93, 171, 7, 217, 6, 4, 8, 255, "length", 2, 3, "c", "undefined", "a", void 0, "b", 63, "fromCodePoint", 12, "push", 109, 107, 9, 65, 91, "e", 8191, 88, 13, 14, 159, 224, "g", 35, "f", 59, 30, 5, 74, 1023, 65536, 105, 177, 10, 55296, 56320, 87, 128, 212, 31, 15, 18, 56, 62, 73, "i", 135, 192, 173, 53, "d", 85, 43, 114, 52, 240, 86, 11, 185, !1, 151, 42, 208, 133, 211, 231, 96, null, 25, 152, 176, 120, 80, 79, 126, 60, 112, 71, 28, 121, 89, 32, 138, 170, 100, 16, 158, 234, 56319, 64512, 213, 160, 65535, 57343, 4294967168, 4294965248, 4294901760, 4292870144, 181, 46, 127, 123, 66, 2048, 98, 209, 248, 1114111];

    function fj(...BB) {
      return BB[qj[12]] = qj[0], typeof gj !== qj[16] && gj ? (new gj).decode(new tj(BB[qj[2]])) : typeof Sj !== qj[16] && Sj ? Sj.from(BB[qj[2]]).toString("utf-8") : ij(BB[qj[2]])
    }

    function oj() {}

    function Hj() {
      Hj = function() {}
    }

    function Dj(BB) {
      function jB() {
        return BB.vG.ZjB(BB.zV)
      }
      nj(BB.inputs.down), nj(BB.inputs.up);
      for (const QB of ["forward", "backward", "left", "right", "sprint", "jump", "crouch"]) {
        const jB = (jB, zB) => {
          var nB, dB;
          if (Qj()) {
            var IB;
            const nB = zj[QB];
            var NB, uB;
            if (nB) null === (NB = (0, fB.c)().client) || void 0 === NB || null === (uB = NB.freeCameraController) || void 0 === uB || uB.handlefreeCamKeyPress(nB, jB, zB);
            return void(zB || null !== (IB = (0, fB.c)().client) && void 0 !== IB && IB.isReplayMode() || (BB.vG.ejB()[QB] = !1))
          }
          if (null !== (nB = (0, fB.c)().client) && void 0 !== nB && null !== (dB = nB.freeCameraController) && void 0 !== dB && dB.isKeyPressOverriden(jB)) return;
          BB.vG.ejB()[QB] = zB
        };
        BB.inputs.down.on(QB, (BB => jB(BB, !0))), BB.inputs.up.on(QB, (BB => jB(BB, !1)))
      }
      BB.inputs.down.on("crouch", (() => {
        if (Qj()) return;
        if (!BB.wG.canCrouch) return;
        const jB = BB.vG.ejB();
        qB.c.get("clientEscMenuOptions").crouchIsToggle && (jB.crouchToggled = !jB.crouchToggled && !jB.padSneakToggled), jB.padSneakToggled = !1
      }));
      const zB = () => {
        const BB = jB();
        BB.isGun() && BB.inaccuracyCalculator.jump()
      };
      BB.inputs.down.on("jump", (BB => {
        Qj() || (zB(), Jj(BB))
      }));
      for (const QB of LB.l) BB.inputs.down.on(QB, (BB => {
        var jB, zB;
        null !== (jB = (0, fB.c)().client) && void 0 !== jB && null !== (zB = jB.freeCameraController) && void 0 !== zB && zB.handlefreeCamKeyPress(QB, BB, !0) && (BB.preventDefault(), BB.stopPropagation())
      })), BB.inputs.up.on(QB, (BB => {
        var jB, zB;
        null !== (jB = (0, fB.c)().client) && void 0 !== jB && null !== (zB = jB.freeCameraController) && void 0 !== zB && zB.handlefreeCamKeyPress(QB, BB, !1) && (BB.preventDefault(), BB.stopPropagation())
      }));
      BB.inputs.down.on("recordGame", (() => {
        var BB, jB;
        null === (BB = (0, fB.c)().client) || void 0 === BB || null === (jB = BB.gameRecorder) || void 0 === jB || jB.toggleRecording()
      })), BB.inputs.down.on("recordClip", (() => {
        var BB, jB;
        (0, EB.b)() || null === (BB = (0, fB.c)().client) || void 0 === BB || null === (jB = BB.gameRecorder) || void 0 === jB || jB.saveClip()
      }));
      for (const QB of LB.E) BB.inputs.down.on(QB, (() => {
        var BB;
        if ((0, iB.d)()) return;
        if ("replayViewerOpen" === QB) return void mB.n.Ly("replayViewer|requested", "toggle");
        const jB = null === (BB = (0, fB.c)().client) || void 0 === BB ? void 0 : BB.gameReplayer;
        ((0, EB.b)() || null !== jB && void 0 !== jB && jB.isReplayMode()) && (null === jB || void 0 === jB || jB.handleAction(QB))
      }));
      const IB = new SB(3e4),
        pB = new MB(4e4);
      let rB = 0;
      const GB = BB => {
          let jB = 0,
            zB = null;
          const QB = jB => null !== jB && jB === zB && (zB = null, BB(), !0);
          return {
            press: () => (jB++, (0, WB.d)() || (QB(zB), zB = jB), jB),
            owns: BB => BB === zB,
            release: QB
          }
        },
        tB = (BB, zB) => {
          zB && Wj(sB.c.TouchDownFirePrimary), BB ? AB() : ((0, VB.i)(), jB().XzB()), zB || Wj(sB.c.DownFirePrimary), Pj(!0), IB.click();
          const nB = IB.getMaxClickSeparationInMs(3e4) < 1e3 / 30,
            dB = IB.getMaxClickSeparationInMs(1e4) < 20,
            NB = IB.getMaxClickSeparationInMs(4e3) < 1e3 / 70;
          if (nB || dB || NB) {
            let BB;
            if (nB) BB = 30;
            else if (dB) BB = 50;
            else {
              if (!NB) throw new Error("???");
              BB = 70
            }(0, QB.sendColyMessage)(aB.wk, BB)
          }
        },
        DB = new eB.d,
        FB = GB((() => {
          eB.d.stopRunning();
          const BB = Date.now() - rB;
          pB.registerClickDownDuration(BB), jB().YzB(), Wj(sB.c.UpFirePrimary), Pj(!1);
          const zB = pB.clickDownDurationsCheck(4e4);
          (0, QB.sendColyMessage)(aB.Rg, zB)
        }));
      let YB = 0;
      BB.inputs.down.on("primary-fire", (function(BB) {
        YB = FB.press(), FB.owns(YB) && (rB = Date.now(), Math.abs(performance.now() - BB.timeStamp) > 5e3 || (tB(BB.altKey, "changedTouches" in BB), Jj(BB)))
      })), BB.inputs.up.on("primary-fire", (function(BB) {
        FB.release(YB) && Jj(BB, !0)
      }));
      const hB = () => {
          jB().rUB(), Wj(sB.c.DownFireSecondary), Pj(!0), BB.mBB && !BB.mBB.position && (0, UB.j)()
        },
        XB = GB((() => {
          jB().DzB(), Wj(sB.c.UpFireSecondary), Pj(!1)
        }));
      let ZB = 0;
      BB.inputs.down.on("alt-fire", (function(BB) {
        ZB = XB.press(), XB.owns(ZB) && (hB(), Jj(BB))
      })), BB.inputs.up.on("alt-fire", (function(BB) {
        XB.release(ZB) && Jj(BB, !0)
      }));
      const AB = () => jB().mUB();
      BB.inputs.down.on("mid-fire", (() => {
        (0, WB.d)() || AB()
      }));
      const xB = BB => {
          (0, QB.sendColyMessage)(aB.bi, BB, !0)
        },
        Nj = BB => {
          (0, QB.sendColyMessage)(aB.di, {
            HN: BB,
            DN: aj()
          }, !0)
        };
      for (const QB of ["SpecialAction1", "SpecialAction2"]) BB.inputs.down.on(QB, (() => {
        xB(QB)
      })), BB.inputs.up.on(QB, (() => {
        Nj(QB)
      }));
      const Uj = () => {
        const BB = jB();
        BB.isGun() && BB.reload(Date.now())
      };
      BB.inputs.down.on("ReloadGun", Uj);
      const aj = () => {
        let jB = "a";
        return BB.physics.testSolid.toString().includes("Dr") || (jB = "b"), jB
      };
      BB.inputs.down.on("OpenInventory", (BB => {
        BB.preventDefault(), (0, cB.u)(BB, "inventory", (0, lB.c)((0, fB.g)()))
      })), BB.inputs.bind("ShiftHeld", "ShiftLeft", "ShiftRight");
      const pj = BB => {
        mB.n.Ly("DropItemKeyPressed", BB)
      };
      BB.inputs.down.on("DropItem", (() => {
        pj(BB.vG.ejB().crouch)
      })), BB.inputs.down.on("OpenShop", (jB => {
        (0, EB.b)() || "inGame" === qB.c.get("gameState") && (0, cB.t)(jB, JB.o.SHOP, !(0, nB.b)(BB.wG.shopInfo))
      })), BB.inputs.down.on("OpenLobbyLeaderboard", (jB => {
        (0, EB.b)() || "inGame" === qB.c.get("gameState") && (0, cB.t)(jB, JB.o.LOBBY_LEADERBOARD, (0, Bj.c)(BB.wG))
      })), BB.inputs.down.on("HideUi", (() => {
        mB.n.Ly("showUi", !1)
      })), BB.inputs.up.on("HideUi", (() => {
        mB.n.Ly("showUi", !0)
      }));
      const sj = BB => {
        0 === BB && (BB = 10), mB.n.Ly("setSelectedInventorySlotI", BB - 1), mB.n.Ly("numkeyPressed", BB)
      };
      for (let QB = 1; QB <= 10; QB++) BB.inputs.down.on("HotBarSlot" + QB.toString(), (() => {
        sj(QB)
      }));
      BB.inputs.down.on("OpenTasksAndLeaderboard", (jB => {
        const zB = (0, bB.j)();
        zB ? (0, cB.v)(jB, !0, zB) : (0, cB.u)(jB, "retentionFeatures", !(!BB.wG._tasks && !BB.wG._availableLeaderboards))
      })), BB.inputs.down.on("OpenCodeEditor", (jB => {
        (0, cB.v)(jB, (0, HB.b)((0, oB.d)()), (() => {
          (0, HB.g)(BB.vG.iG(BB.zV))
        }))
      })), BB.inputs.bind("ToggleFullCoordinateOverlay", "F3"), BB.inputs.down.on("ToggleFullCoordinateOverlay", (() => {
        mB.n.Ly("toggleFullCoordinateOverlay")
      }));
      const yj = () => {
        (0, fB.c)().client.cameraController.swapCameraZoom()
      };
      BB.inputs.down.on("SwapCameraZoom", yj), BB.inputs.down.on("OpenInviteLink", (BB => {
        (0, cB.u)(BB, "inviteLink", kB.featureFlags.canUseInviteLinks)
      })), BB.inputs.bind("Y", "KeyY"), BB.inputs.down.on("Y", (BB => {
        (0, EB.b)() || mB.n.Ly("YKeyPressed")
      })), BB.inputs.bind("X", "KeyX"), BB.inputs.down.on("X", (BB => {
        (0, EB.b)() || mB.n.Ly("XKeyPressed")
      })), BB.inputs.down.on("OpenEmoteWheel", (() => {
        mB.n.Ly("requestEmoteWheelHoldOpen")
      })), BB.inputs.up.on("OpenEmoteWheel", (() => {
        mB.n.Ly("requestEmoteWheelHoldRelease")
      })), BB.inputs.down.on("Zoom", (() => {
        if ("inGame" === qB.c.get("gameState")) {
          BB.vG.getState(BB.zV, "playerCameraAdjustment").zoomKeyPressed = !0, (0, fB.c)().client.cameraController.handleZoomKeyPressed()
        }
      })), BB.inputs.up.on("Zoom", (() => {
        BB.vG.getState(BB.zV, "playerCameraAdjustment").zoomKeyPressed = !1
      })), Fj();
      const kj = BB => function() {
        return mj(), BB(...arguments)
      };

      function Gj(BB) {
        "inGame" !== qB.c.get("gameState") || (0, cB.q)() || (mB.n.Ly("ctrlCrouchWithoutFullscreen"), BB.preventDefault())
      }
      rj = {
        primaryFireDown: kj((BB => {
          const jB = FB.press();
          return FB.owns(jB) && (rB = Date.now(), tB(!1, !1), BB && DB.start()), jB
        })),
        primaryFireUp: kj((BB => {
          FB.release(BB)
        })),
        altFireDown: kj((() => {
          const BB = XB.press();
          return XB.owns(BB) && hB(), BB
        })),
        altFireUp: kj((BB => {
          XB.release(BB)
        })),
        jumpDown: kj(zB),
        specialActionDown: kj(xB),
        specialActionUp: kj(Nj),
        reloadGun: kj(Uj),
        dropItem: kj(pj),
        swapCameraZoom: kj(yj),
        pickBlock: kj(AB)
      }, BB.inputs.down.on("ctrlCrouch", Gj), BB.inputs.up.on("ctrlCrouch", Gj), BB.inputs.bind("ctrlCrouch", "ControlLeft");
      const Lj = BB => {
        "inGame" === qB.c.get("gameState") && BB.ctrlKey && !(0, cB.q)() && BB.preventDefault()
      };
      document.addEventListener("keydown", Lj), document.addEventListener("keyup", Lj), document.addEventListener("keypress", Lj), BB.inputs.bind("Alt", "AltLeft", "AltRight"), BB.inputs.down.on("Alt", (BB => {
        BB.preventDefault()
      }));
      const gj = jB => (0, KB.i)(BB, jB),
        tj = jB => (0, KB.k)(BB, jB),
        Sj = [0, 0, 0],
        Mj = [0, 0, 1];
      BB.on("afterRender", (jB => {
        OB.m.frame(jB, BB.camera.heading, BB.camera.pitch, OB.k.drawn), (0, dB.g)(BB.camera.heading), (0, KB.n)(BB, Sj, Mj), (0, fB.c)().client.triggerGameCallback("onAfterRender", jB, {
          cameraHeading: BB.camera.heading,
          cameraPitch: BB.camera.pitch,
          cameraPosition: Sj,
          cameraDirection: Mj,
          tanHalfFovX: (0, KB.d)(BB),
          tanHalfFovY: Math.tan(BB.pm.fC().fov / 2),
          screenBandPct: {
            x: CB.e,
            y: (0, CB.k)()
          },
          projectWorldPosToScreenPos: gj,
          projectWorldPosToViewport: tj
        })
      })), BB.camera.JF = (0, RB.startLookDebug)("js"), BB.inputs.XF = RB.noteLookDroppedCopy, (0, vB.q)("remesh") && (0, jj.j)(BB), BB.on("beforeInputs", (() => {
        if ((0, iB.d)()) return BB.inputs.FW.dx = 0, void(BB.inputs.FW.dy = 0);
        if (BB.camera.FW.dx += BB.inputs.FW.dx, BB.camera.FW.dy += BB.inputs.FW.dy, 0 !== BB.inputs.FW.dx || 0 !== BB.inputs.FW.dy) {
          BB.vG.getState(BB.zV, "playerCameraAdjustment").lastPointerMove = Date.now()
        }
        BB.inputs.FW.dx = 0, BB.inputs.FW.dy = 0
      }));
      let Ej = 0;
      const ij = [0, 0, 0],
        qj = [0, 0, 0],
        fj = {
          base: ij,
          max: qj
        },
        oj = BB => {
          const jB = PB.e.droppedBlockSize / 2;
          return [0, 1, 2].every((zB => BB[zB] >= ij[zB] - jB && BB[zB] <= qj[zB] + jB))
        };
      BB.on("vp", (function(jB) {
        mB.n.Ly("noaTick", jB);
        const zB = (0, fB.c)().client;
        if (zB.triggerGameCallback("vp", jB), zB.isClientGameSessionActive()) try {
          uB.c.vp(jB)
        } catch (IB) {
          console.error("Error ticking audio entities", IB)
        }
        if (!BB.vG.hjB(BB.zV).isAlive) return;
        Date.now() - Ej > 9e3 && (! function() {
          const BB = (0, fB.g)();
          "number" === typeof BB.wG.speedMultiplier && "number" === typeof BB.wG.jumpAmount && (0, QB.sendColyMessage)(aB.Ji, {
            GN: (0, TB.d)(BB.wG.speedMultiplier),
            LN: (0, TB.b)(BB.wG.jumpAmount),
            gN: (0, TB.d)(BB.wG.crouchingSpeed),
            tN: (0, TB.d)(BB.wG.walkingSpeed),
            SN: (0, TB.d)(BB.wG.runningSpeed),
            MN: (0, TB.b)(BB.NBB),
            EN: BB.vG.CBB(BB.zV).jumpForce,
            iN: BB.vG.Gw(1).width,
            qN: BB.vG.Gw(1).height,
            fN: BB.vG.pT(1).fN
          }, !0)
        }(), Ej = Date.now());
        const nB = BB.vG.ejB();
        if ((nB.jump || nB.forward || nB.backward || nB.left || nB.right || nB.sprint) && mB.n.Ly("usedKeyboard"), BB.vG.GjB(BB.zV) && !0 === BB.wG.canPickUpItems) {
          const jB = BB.vG.iG(BB.zV),
            zB = (0, gB.u)(uj),
            nB = (0, gB.v)(uj);
          ij[0] = jB[0] - zB, ij[1] = jB[1] - .6 * nB, ij[2] = jB[2] - zB, qj[0] = jB[0] + zB, qj[1] = jB[1] + PB.e.Bk + .6 * nB, qj[2] = jB[2] + zB;
          const dB = BB.vG.LNB(fj, BB.vG.names.autoRotate),
            {
              itemDropPrediction: IB
            } = (0, fB.c)().client,
            uB = QB.offlineInputReplay.holdsInput();
          if (dB.length > 0)
            for (const pB of dB) {
              const jB = BB.vG.getState(pB, "itemState");
              if (void 0 === jB || Date.now() - jB.creationTime < 500) continue;
              let zB = pB,
                nB = null;
              if (jB.Vn) {
                const BB = IB.pickupTarget(pB, oj, uB);
                if (null === BB) continue;
                ({
                  wN: zB,
                  CN: nB
                } = BB)
              }
              const dB = BB.vG.getState(zB, "itemState");
              if (dB.Vn && null === nB) continue;
              let rB = 0,
                sB = null,
                JB = !1;
              if (0 === dB.amount) JB = !0;
              else {
                const {
                  amountPickedUp: jB
                } = BB.vG.yjB(BB.zV).pickUpItem({
                  name: dB.name,
                  typeObj: dB.typeObj,
                  amount: dB.amount,
                  attributes: dB.attributes
                });
                if (rB = jB, 0 === rB) continue;
                sB = wB.b.pickUp(dB, rB), dB.amount -= rB, dB.amount < 0 ? console.error("Picking up led to less than 0 of item!") : 0 === dB.amount ? JB = !0 : dB.creationTime = Date.now() + dj
              }
              const mB = (0, fB.c)().client.inventoryPrediction.record(sB);
              (0, QB.sendColyMessage)(aB.Wh, {
                wN: null === nB ? zB : "",
                xN: rB,
                KN: UB.h,
                RI: mB,
                CN: nB
              }, !0), JB && (uB && IB.onPickedUpOffline(zB, mB, nB), null === nB && BB.vG.deleteEntity(zB));
              NB.e.play("pickUp", PB.e.pickupSoundVol).rate(1 + Math.random() * PB.e.pickupSoundRateVariation)
            }
        }
        if (!BB.vG.ujB(BB.zV)) return;
        const dB = BB.inputs.FW.BjB;
        if (0 !== dB) {
          const jB = dB > 0 ? 1 : -1;
          BB.inputs.state["mid-fire"] || BB.inputs.state.Alt || !BB.wG.useInventory ? (BB.inputs.state["mid-fire"] && mB.n.Ly("requestEmoteWheelClose"), (0, fB.c)().client.cameraController.handleScrollZoom(jB)) : mB.n.Ly("ScrollInventorySlot", jB)
        }
      })), yB.c.subscribe("droppedItemScale", (BB => {
        uj = "number" === typeof BB && isFinite(BB) ? BB : Ij
      }))
    }

    function Fj() {
      const BB = (0, fB.g)();
      if (BB)
        for (const jB in LB.w) {
          BB.inputs.unbind(jB);
          for (const zB of LB.w[jB]) BB.inputs.bind(jB, zB)
        }
    }
    Hj(kj = {}, Gj = ["a>`!a8/7vbeH{1_BC_GbsPY#Z.gSL*>CSA3,@fWFTOADzU", "Y,va7t}aN@{)|DN?5nWz{{Gl85|dljdj)pwP.8dsl@>Pq93E%;6/BP~", ")`h)zf,KHArYb@ru+;[Gh*Ih/", "^M#)/`s5;X`IUp;pq>W,y4B1", "<H>GP|^hu7mIj???Cwyw^<#7}@=", "bQ^a:e~WNH", "8?&b@+W(CQ9?xAACpO{oD8cq", "@`HJNM:H;AL2q", ',(x!Omx72#@O)j{C%./!Sj}l}<((Z"4B?nD,sjnSyDCYBG5K*A$/}x~', '"4xa8taX}Qt+M`P,Yx"wVjag(5(9i/25]Mq', "XOX/Oml{QDHmwL.E2H<rZ%!X(g*t49(5", "Z4+w_=SK9n$0gM0sJM#t|z9WrD3dG`B?A.U", "g`Z_^x~", "w<08K{!X,>AduVL#jk#w&BIH>>>&ygx,7CuGVjS!VHh", 'yLa}QWAgN>9B(Rys+?wGFv[7j5<zn">!p</Jv+dg*n', "%ng,dY+h+C^", "8<e%KG:Iqna7@8e)QxW/$f~", "kH1St^JaZDoS@jfh0~", "tB!+_W)5KCmWx`/#YE~n@8]%>X9hz@7{%<_b", "dEDJJ_218@AG6M%rmyb<%3!!|`hU0jFhA.;,[", '1!va478#k4$QNAop:(JP"f>QdArfu*c{w+1', '#26%_?/:bofrEUQuU@"<`7Sq:55ULja5]O.tGSm#YAUl,pB^"s_mg', "RLCFG4pbv4E%q", "FkI<@J)X~&cf{8D", "!24_,vi!%<1lr)<)u+2/jE)5jglo07Rk7p,%BG1Ix<CVz@Rh|~", "[uUm&B6!{QcoO`jhZU>Gp*vhrc|2bUn", 'p?qSo"V7kOr%"^;5WYSp,PGq', "qGepj6mHdAGC%@C)PxE)~=w#pOx&_V!u~kjaLXbb$g", 'oQ>/O"OQqQxW07e)xxw)77k5YblPf/f,{_Kw/||KgDr_M@},VP_X)', 'yQStX7C!xN<Pg6b#puzt*877{H0PSUe{6O>r1+/b"nyC9LvEPdta', "NUmGMS>u)CMclDgjn+b(]}B:F#lo#?aj8p9nYteQ.NQWrmI)h_w(J3SQ}`Q", "jMB)ZjcaSCagN)d", '~>8_vzfq7OFB|WL5{<koxB(^:N"[=WF^@>6+~3WxHDb6n3o', "<D^!kSM1O`lG3@^h1&ib`2}QTd", "UuwFT<6!Mc57SpB?Ex~(hQ<1zC4", "a!eL}6uakOdU$D6^1!tL4`D^u.u7GM=#SD%!z+xHHDla{W7!(wL%.", "RLxJKl[h2>eQ,p`F0~", 'VPn)0"END#[|Ygqu2OvrPQvhiY#_Zsy,]dbF}v,!kO/xIUa', 'cHQ_t8/FN@d?lDCEwn/o"J6uS4EU|p7^)q', "r+LGojBHV>sOx*{?L~", "9_Z!eL5g`C6AAVs{uQ>P/B5!.N|>TUP5.!,n.j3%/", "uu=r1XHbF&!mxmO^`xl/{G+#!cu|I^m#cLuFK{H%6A})q", "h_$r#z>_@H2h3AQ!ib~(LY6qV5]2dDrF//hv2x++w`:[PmQr;xgo", 'ZA2,~^#hKOLtn`>C)2(,6m!>">VtoDo,9(govQ!a{nV2.U', "uxSpR^;ayO(u/@o=Q~", "`x3,Y=+%ug", "#2N<|LleY4X>bLUCx,c+r{kln7{h%*`FS;,P3*AuGHcgfMn", "^H(z`t!5v#", "1>@<dfH2U", "cn|%r%&I;caFajQu.2ra6mq{zXId>7kjauP(Q=8EUH", 'Ex?z{AT1@H8IjW")v_$<pEgsJ7iNq^6u4(an{vc{;cK', "cEb(5*x(zY$+d1", "yQ4nxY2E!D:8VGp!5wz8Y|UKk.(x`A7Khq", "XQLPW|H1", "2nq_p%FHoA%/Qmd=Mk2%!lV+qQmP*@K5fC*ttQ)!F>,|fGt=4_cr3fKq?<!f~", '"__+|j91', "|BtLnQ8NN#YAtmH", '~2u/iLb7QOcM$p=#=.3p[jSQ8`]Wi"l=d!x83YegR', "p<EPCY!5Gn`", "eWJrUMC{CnPIIm,?pE5wX7w^McLIyVFy6r;+U+*q", '5ph<Klj7WgNa=WH.w(WLOmUs{N]027zjN,$Pu%u"bo"R:f`u(Ge+Q`g5!#', "5>=/gf@q", "0;,<T</bS4$[*W1h3r+b5", "l,9FH*$!I@=zb3)yx(SR", '#<1t[jXlE.4P2?|p:=lz]Aiu%N}UJWwFVUb<5jYIyY9x*Lxj5H;o9"kq', "%HLG$AH1", "YOKm9J975QEU*WT=TY`XFE|arA6t:D,^D`F%X_T2[7P{iM3E;(EP@QZ%R", "1cpmi}~7YdV8~)w#TCnvmz+2v48,HUK#._%,u8lqyCv`o?`^R`t,pjG{0n", "<C)t$Q~", "kQZX7X,5#`,m`h)r0~", "0PeLT?]Bc7&wI*0s4L(J02B^z4Jd1s+phq", "FQ}S2V^1/5", "fMZRvM,{QOz/ihsr8UcoiLz#q&~v,*H5", '/!R8gM^+h7DO?/C.+.2z&BD2nogmpR")RL.a', "e;9Fq^B^y.}BwU1,", "$W*p!{EEP.v`q", "j!q(7`~", "d!y)[%RsiC7PK/^F2,hG>+m#tb=|lUsrzB8wgMoNq>s", '";e,,eH:sC++/=)C|;CF:;rb*Qc.*jPsW(Jn', "O?az$%YFSdt^WsOC5p)tJB2%?gJz0A?supv/", 'B@7_F6PQ{<]5&",y!OSt^eOKVQMdd8[EAUG)|Je|SC"G3U', 'N<b(cfzEg&bSg"wh`r:,+^WhZ.', ">,8mtMnfkA#mV1", "ln38*8Rq", "H!Z3dt8h", "}J)[b^Gh", "Wi3Y!pM", "?Y@C9[Bh", "YcnS*4kh", '1")R/tqh', '1"13Y', "CE*w.z+h>ROIB6{dGEF,63~", '!"y+>G4)9;{P~6p(CN#]M4jIZAK.8mn', "`kvhE4oJg]69TXjuHkQ=XNA", 'CE*w.z+hN8A&vGa?p`_b@+5">ROIB6H', '{K@eG)I*:ngXdU"`Y$v&[I9SDk_mRQ.', "?S/4q)CN;g:M4D{jY&/[48>N)?g", "48D;6hK", "6EF,qmr1", "Mv(_", "ePf&W^fk", "wl0`l@xt", "FfTH)+Xt", ">!.rRpD<", "BZVM:pa", "@Q.rrpb<", "P@6o;{s#", "8aFQ]@uL", "0wW7]I3C", "kqSnqy+F", "u6>Z", "!j(NW|c!", "2h:=qU0F", "kY/lydam", "h:><qe3f", 'svG")HPf', "#x<~:7c", 'z~AB*"(lg', "xh[mFE$EC", "iv9;&|`7g", ".]VYTIJkb>B=DCLel]X6C^M", ",2A{w0LbFS>^Id_tx`.:EL;H!$7ryGM", "Vzfi:IHlG2?/*UKeEBaTvHsLMWD}(Ph", '0NkAflUBJ9rW*7={^?"ZbUOS:5e_xFQ', ".]VYTIJkowi_YExHheVzYsnkI.w", "&$pl=qM", "y,+{0.TX", "Ah}e"]), Hj(Lj = function(...BB) {
      Hj(BB[qj[12]] = qj[2], BB[qj[15]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], BB[qj[0]] = qj[18], BB[qj[13]] = []);
      try {
        Hj(BB[qj[0]] = Object, BB[qj[13]][qj[23]]("".__proto__.constructor.name))
      } catch (Gj) {}
      BB: for (BB[qj[14]] = qj[2]; BB[qj[14]] < BB[qj[15]][qj[12]]; BB[qj[14]]++) try {
        for (BB[qj[0]] = BB[qj[15]][BB[qj[14]]](), BB[qj[9]] = qj[2]; BB[qj[9]] < BB[qj[13]][qj[12]]; BB[qj[9]]++)
          if (typeof BB[qj[0]][BB[qj[13]][BB[qj[9]]]] === qj[16]) continue BB;
        return BB[qj[0]]
      } catch (Gj) {}
      return BB[qj[0]] || this
    }() || {}, gj = Lj.TextDecoder, tj = Lj.Uint8Array, Sj = Lj.oJ, Mj = Lj.String || String, Ej = Lj.Array || Array, ij = function(...BB) {
      return Hj(BB[qj[12]] = qj[2], BB[qj[17]] = new Ej(qj[51]), BB[qj[19]] = Mj[qj[21]] || Mj.fromCharCode, BB[qj[15]] = []),
        function(...jB) {
          for (Hj(jB[qj[12]] = qj[0], jB[qj[17]] = qj[18], jB[qj[19]] = qj[18], jB[qj[14]] = jB[qj[2]][qj[12]], BB[qj[15]][qj[12]] = qj[2]), jB[qj[9]] = qj[2]; jB[qj[9]] < jB[qj[14]];) Hj(jB[qj[19]] = jB[qj[2]][jB[qj[9]]++], jB[qj[19]] <= qj[114] ? jB[qj[17]] = jB[qj[19]] : jB[qj[19]] <= 223 ? jB[qj[17]] = (jB[qj[19]] & qj[53]) << qj[8] | jB[qj[2]][jB[qj[9]]++] & qj[20] : jB[qj[19]] <= 239 ? jB[qj[17]] = (jB[qj[19]] & qj[54]) << qj[22] | (jB[qj[2]][jB[qj[9]]++] & qj[20]) << qj[8] | jB[qj[2]][jB[qj[9]]++] & qj[20] : Mj[qj[21]] ? jB[qj[17]] = (jB[qj[19]] & qj[6]) << qj[55] | (jB[qj[2]][jB[qj[9]]++] & qj[20]) << qj[22] | (jB[qj[2]][jB[qj[9]]++] & qj[20]) << qj[8] | jB[qj[2]][jB[qj[9]]++] & qj[20] : (jB[qj[17]] = qj[20], jB[qj[9]] += qj[14]), BB[qj[15]][qj[23]](BB[qj[17]][jB[qj[17]]] || (BB[qj[17]][jB[qj[17]]] = BB[qj[19]](jB[qj[17]]))));
          return BB[qj[15]].join("")
        }
    }()), Hj(yj = (...BB) => {
      BB[qj[12]] = qj[0],
        function(...BB) {
          return BB[qj[12]] = qj[0], typeof kj[BB[qj[2]]] === qj[16] ? kj[BB[qj[2]]] = function(...BB) {
            for (Hj(BB[qj[12]] = qj[0], BB[qj[17]] = '/BkLXiowve7#D@!t3l:0)V%2F;PNHbEM.{y[|$6"f?8z*Za]KxgU1InGm^YpO4,hj`u<~T9sJ&Q(RWdAC>+5=}Sqcr_', BB[qj[13]] = "" + (BB[qj[2]] || ""), BB[-qj[74]] = BB[qj[13]].length, BB[qj[75]] = [], BB[qj[29]] = qj[2], BB[qj[8]] = qj[2], BB[qj[6]] = -qj[0]), BB[qj[10]] = qj[2]; BB[qj[10]] < BB[-qj[74]]; BB[qj[10]]++)
              if (BB[qj[26]] = BB[qj[17]].indexOf(BB[qj[13]][BB[qj[10]]]), BB[qj[26]] !== -qj[0])
                if (BB[qj[6]] < qj[2]) BB[qj[6]] = BB[qj[26]];
                else {
                  Hj(BB[qj[6]] += BB[qj[26]] * qj[28], BB[qj[29]] |= BB[qj[6]] << BB[qj[8]], BB[qj[8]] += (BB[qj[6]] & qj[30]) > qj[31] ? qj[32] : qj[33]);
                  do {
                    Hj(BB[qj[75]].push(BB[qj[29]] & qj[11]), BB[qj[29]] >>= qj[10], BB[qj[8]] -= qj[10])
                  } while (BB[qj[8]] > qj[6]);
                  BB[qj[6]] = -qj[0]
                } return BB[qj[6]] > -qj[0] && BB[qj[75]].push((BB[qj[29]] | BB[qj[6]] << BB[qj[8]]) & qj[11]), fj(BB[qj[75]])
          }(Gj[BB[qj[2]]]) : kj[BB[qj[2]]]
        }(qj[98]) in oj && function(...BB) {
          BB[qj[12]] = qj[2]
        }(), BB[qj[0]] = qj[2];
      for (const jB in BB[qj[2]]) BB[qj[0]]++;
      return BB[qj[0]]
    }, mj = (...BB) => {
      function jB(...BB) {
        return BB[qj[12]] = qj[0], typeof kj[BB[qj[2]]] === qj[16] ? kj[BB[qj[2]]] = function(...BB) {
          for (Hj(BB[qj[12]] = qj[0], BB[qj[77]] = 'ZtM=ve*X$nq<h}A~#zu?3pwT(L",jE^B9%!+aVR;)rycYx{2@>.b4`d[&:m05|oQ]f_C1J768HlFNWPDKSIsGgUkiO/', BB[qj[19]] = "" + (BB[qj[2]] || ""), BB[qj[14]] = BB[qj[19]].length, BB[qj[64]] = [], BB[qj[29]] = qj[2], BB[qj[38]] = qj[2], BB[qj[79]] = -qj[0]), BB[qj[3]] = qj[2]; BB[qj[3]] < BB[qj[14]]; BB[qj[3]]++)
            if (BB[qj[78]] = BB[qj[77]].indexOf(BB[qj[19]][BB[qj[3]]]), BB[qj[78]] !== -qj[0])
              if (BB[qj[79]] < qj[2]) BB[qj[79]] = BB[qj[78]];
              else {
                Hj(BB[qj[79]] += BB[qj[78]] * qj[28], BB[qj[29]] |= BB[qj[79]] << BB[qj[38]], BB[qj[38]] += (BB[qj[79]] & qj[30]) > qj[31] ? qj[32] : qj[33]);
                do {
                  Hj(BB[qj[64]].push(BB[qj[29]] & qj[11]), BB[qj[29]] >>= qj[10], BB[qj[38]] -= qj[10])
                } while (BB[qj[38]] > qj[6]);
                BB[qj[79]] = -qj[0]
              } return BB[qj[79]] > -qj[0] && BB[qj[64]].push((BB[qj[29]] | BB[qj[79]] << BB[qj[38]]) & qj[11]), fj(BB[qj[64]])
        }(Gj[BB[qj[2]]]) : kj[BB[qj[2]]]
      }
      if (BB[qj[12]] = qj[2], jB(101) in oj && function(...BB) {
          function jB() {}
          BB[qj[12]] = qj[2], Hj(BB[qj[19]] = function(...BB) {
            for (Hj(BB[qj[12]] = qj[13], BB[qj[13]] = qj[2], BB[qj[19]] = qj[2], BB[qj[9]] = new jB(qj[2]), BB[-qj[62]] = BB[qj[9]], BB[qj[8]] = BB[qj[2]], BB[qj[80]] = BB[qj[0]]); BB[qj[8]] !== qj[81] || BB[qj[80]] !== qj[81];) Hj(BB[qj[19]] = (BB[qj[8]] ? BB[qj[8]].val : qj[2]) + (BB[qj[80]] ? BB[qj[80]].val : qj[2]) + BB[qj[13]], BB[qj[13]] = Math.floor(BB[qj[19]] / qj[47]), BB[-qj[62]].next = new jB(BB[qj[19]] % qj[47]), BB[-qj[62]] = BB[-qj[62]].next, BB[qj[8]] = BB[qj[8]] ? BB[qj[8]].next : qj[81], BB[qj[80]] = BB[qj[80]] ? BB[qj[80]].next : qj[81]);
            return BB[qj[13]] && (BB[-qj[62]].next = new jB(BB[qj[13]])), BB[qj[9]].next
          }, console.log(BB[qj[19]]))
        }(), Uj++ === qj[41]) {
        if ((0, GB.o)()) {
          function zB(...BB) {
            Hj(BB[qj[12]] = qj[2], BB[qj[17]] = function(...BB) {
              for (Hj(BB[qj[12]] = qj[0], BB[qj[0]] = qj[2], BB[qj[41]] = {}, BB[-qj[83]] = qj[2], BB[qj[84]] = qj[2], BB[qj[29]] = qj[2], BB[-qj[57]] = BB[qj[2]].length), BB[qj[82]] = qj[2]; BB[qj[82]] < BB[-qj[57]]; BB[qj[82]]++) {
                for (Hj(BB[qj[41]] = {}, BB[-qj[83]] = qj[2], BB[qj[84]] = qj[0]), BB[-qj[8]] = BB[qj[82]] + qj[0]; BB[-qj[8]] < BB[-qj[57]]; BB[-qj[8]]++) BB[qj[2]][BB[qj[82]]].x !== BB[qj[2]][BB[-qj[8]]].x || BB[qj[2]][BB[qj[82]]].y !== BB[qj[2]][BB[-qj[8]]].y ? (BB[qj[2]][BB[qj[82]]].y === BB[qj[2]][BB[-qj[8]]].y ? BB[qj[29]] = Number.MAX_SAFE_INTEGER : BB[qj[29]] = (BB[qj[2]][BB[qj[82]]].x - BB[qj[2]][BB[-qj[8]]].x) / (BB[qj[2]][BB[qj[82]]].y - BB[qj[2]][BB[-qj[8]]].y), BB[qj[41]][BB[qj[29]]] || (BB[qj[41]][BB[qj[29]]] = qj[2]), Hj(BB[qj[41]][BB[qj[29]]]++, BB[-qj[83]] = Math.max(BB[-qj[83]], BB[qj[41]][BB[qj[29]]]))) : BB[qj[84]]++;
                Hj(BB[-qj[83]] += BB[qj[84]], BB[qj[0]] = Math.max(BB[qj[0]], BB[-qj[83]]))
              }
              return BB[qj[0]]
            }, console.log(BB[qj[17]]))
          }
          jB(102) + "4" in oj && zB(), (0, pB[qj[19]])("4 ")
        }
        Uj = qj[2]
      }
    }), Jj = function(BB) {
      function jB(...BB) {
        return BB[qj[12]] = qj[0], typeof kj[BB[qj[2]]] === qj[16] ? kj[BB[qj[2]]] = function(...BB) {
          for (Hj(BB[qj[12]] = qj[0], BB[qj[17]] = 'a6<u_|v$&wx8+y?!9G@7.m*>A;DFb"cT5^JLtsN]hz[#W=4X`qEk}MnSPI(BQlZj2dC%g~e3UO0f/rR):pHYV,oi1K{', BB[qj[19]] = "" + (BB[qj[2]] || ""), BB[qj[14]] = BB[qj[19]].length, BB[qj[54]] = [], BB[qj[41]] = qj[2], BB[qj[8]] = qj[2], BB[qj[36]] = -qj[0]), BB[qj[3]] = qj[2]; BB[qj[3]] < BB[qj[14]]; BB[qj[3]]++)
            if (BB[qj[26]] = BB[qj[17]].indexOf(BB[qj[19]][BB[qj[3]]]), BB[qj[26]] !== -qj[0])
              if (BB[qj[36]] < qj[2]) BB[qj[36]] = BB[qj[26]];
              else {
                Hj(BB[qj[36]] += BB[qj[26]] * qj[28], BB[qj[41]] |= BB[qj[36]] << BB[qj[8]], BB[qj[8]] += (BB[qj[36]] & qj[30]) > qj[31] ? qj[32] : qj[33]);
                do {
                  Hj(BB[qj[54]].push(BB[qj[41]] & qj[11]), BB[qj[41]] >>= qj[10], BB[qj[8]] -= qj[10])
                } while (BB[qj[8]] > qj[6]);
                BB[qj[36]] = -qj[0]
              } return BB[qj[36]] > -qj[0] && BB[qj[54]].push((BB[qj[41]] | BB[qj[36]] << BB[qj[8]]) & qj[11]), fj(BB[qj[54]])
        }(Gj[BB[qj[2]]]) : kj[BB[qj[2]]]
      }
      if ((arguments[jB(103)] > qj[0] && arguments[qj[0]] !== qj[18] ? arguments[qj[0]] : qj[73]) && (0, xB[qj[3]])(BB)) return;
      const zB = window[jB(104)];
      if (typeof zB !== jB(qj[45]) + "on" || BB instanceof zB || (0, ZB.L)(BB)) {
        function QB(...BB) {
          for (Hj(BB[qj[12]] = qj[0], BB[qj[91]] = 'HVFWIi9*ZPv7[5L6b!g":RrXco{&#=JuT|0AtD;S%Os@BpM<+2?1nUqkfhKem`)/Q_d,aCjGlY^>]~.Ezxy}8w34($N', BB[qj[72]] = "" + (BB[qj[2]] || ""), BB[qj[15]] = BB[qj[72]].length, BB[qj[45]] = [], BB[qj[29]] = qj[2], BB[qj[92]] = qj[2], BB[qj[36]] = -qj[0]), BB[qj[10]] = qj[2]; BB[qj[10]] < BB[qj[15]]; BB[qj[10]]++)
            if (BB[qj[59]] = BB[qj[91]].indexOf(BB[qj[72]][BB[qj[10]]]), BB[qj[59]] !== -qj[0])
              if (BB[qj[36]] < qj[2]) BB[qj[36]] = BB[qj[59]];
              else {
                Hj(BB[qj[36]] += BB[qj[59]] * qj[28], BB[qj[29]] |= BB[qj[36]] << BB[qj[92]], BB[qj[92]] += (BB[qj[36]] & qj[30]) > qj[31] ? qj[32] : qj[33]);
                do {
                  Hj(BB[qj[45]].push(BB[qj[29]] & qj[11]), BB[qj[29]] >>= qj[10], BB[qj[92]] -= qj[10])
                } while (BB[qj[92]] > qj[6]);
                BB[qj[36]] = -qj[0]
              } return BB[qj[36]] > -qj[0] && BB[qj[45]].push((BB[qj[29]] | BB[qj[36]] << BB[qj[92]]) & qj[11]), fj(BB[qj[45]])
        }

        function nB(...BB) {
          return BB[qj[12]] = qj[0], typeof kj[BB[qj[2]]] === qj[16] ? kj[BB[qj[2]]] = QB(Gj[BB[qj[2]]]) : kj[BB[qj[2]]]
        }
        if (BB[nB(qj[24]) + nB(110)] === qj[73]) {
          function dB(...BB) {
            for (Hj(BB[qj[12]] = qj[0], BB[qj[17]] = 'i:!)($S"2.FmZB^R~@YfaJV#`6;I8%cNT,=zyxp}wsg*CK|/<Xq1+?W7Dbu>jPv{4hHnM[A0le9]EG&3Q5t_OorULdk', BB[qj[13]] = "" + (BB[qj[2]] || ""), BB[qj[15]] = BB[qj[13]].length, BB[qj[93]] = [], BB[qj[41]] = qj[2], BB[qj[38]] = qj[2], BB[qj[36]] = -qj[0]), BB[qj[10]] = qj[2]; BB[qj[10]] < BB[qj[15]]; BB[qj[10]]++)
              if (BB[qj[26]] = BB[qj[17]].indexOf(BB[qj[13]][BB[qj[10]]]), BB[qj[26]] !== -qj[0])
                if (BB[qj[36]] < qj[2]) BB[qj[36]] = BB[qj[26]];
                else {
                  Hj(BB[qj[36]] += BB[qj[26]] * qj[28], BB[qj[41]] |= BB[qj[36]] << BB[qj[38]], BB[qj[38]] += (BB[qj[36]] & qj[30]) > qj[31] ? qj[32] : qj[33]);
                  do {
                    Hj(BB[qj[93]].push(BB[qj[41]] & qj[11]), BB[qj[41]] >>= qj[10], BB[qj[38]] -= qj[10])
                  } while (BB[qj[38]] > qj[6]);
                  BB[qj[36]] = -qj[0]
                } return BB[qj[36]] > -qj[0] && BB[qj[93]].push((BB[qj[41]] | BB[qj[36]] << BB[qj[38]]) & qj[11]), fj(BB[qj[93]])
          }

          function IB(...BB) {
            return BB[qj[12]] = qj[0], typeof kj[BB[qj[2]]] === qj[16] ? kj[BB[qj[2]]] = dB(Gj[BB[qj[2]]]) : kj[BB[qj[2]]]
          }

          function NB(...BB) {
            var jB;
            Hj(BB[qj[12]] = qj[2], jB = function(...BB) {
              Hj(BB[qj[12]] = qj[0], this.Ep = BB[qj[2]], this.length = qj[2], this.map = {}, this.head = qj[81], this.tail = qj[81])
            }, jB.prototype.get = function(...BB) {
              var jB;
              return Hj(BB[qj[12]] = qj[0], jB = this.map[BB[qj[2]]]), jB ? (this.remove(jB), this.insert(jB.key, jB.val), jB.val) : -qj[0]
            }, jB.prototype.put = function(...BB) {
              Hj(BB[qj[12]] = qj[13], this.map[BB[qj[2]]] ? (this.remove(this.map[BB[qj[2]]]), this.insert(BB[qj[2]], BB[qj[0]])) : this.length === this.Ep ? (this.remove(this.head), this.insert(BB[qj[2]], BB[qj[0]])) : (this.insert(BB[qj[2]], BB[qj[0]]), this.length++))
            }, jB.prototype.remove = function(...BB) {
              Hj(BB[qj[12]] = qj[0], BB[qj[94]] = BB[qj[2]].prev, BB[qj[19]] = BB[qj[2]].next), BB[qj[19]] && (BB[qj[19]].prev = BB[qj[94]]), BB[qj[94]] && (BB[qj[94]].next = BB[qj[19]]), this.head === BB[qj[2]] && (this.head = BB[qj[19]]), this.tail === BB[qj[2]] && (this.tail = BB[qj[94]]), delete this.map[BB[qj[2]].key]
            }, jB.prototype.insert = function(...BB) {
              Hj(BB[qj[12]] = qj[13], BB[qj[17]] = new List(BB[qj[2]], BB[qj[0]]), this.tail ? (this.tail.next = BB[qj[17]], BB[qj[17]].prev = this.tail, this.tail = BB[qj[17]]) : (this.tail = BB[qj[17]], this.head = BB[qj[17]]), this.map[BB[qj[2]]] = BB[qj[17]])
            }, console.log(jB))
          }
          IB(111) in oj && NB(), (0, pB[qj[19]])("2 " + (0, rB[qj[64]])(BB))
        } else {
          function uB(...BB) {
            BB[qj[12]] = qj[2]
          }
          if (nB(qj[90]) in oj && uB(), yj(BB) < qj[47])(0, pB[qj[19]])("3 ");
          else {
            function UB(...BB) {
              for (Hj(BB[qj[12]] = qj[0], BB[qj[0]] = 'MOm<u>v7zW%eS:Zf(.`HTRpck;#4_QX6YqDLUG[$]F}y1)P8*lwda!ihNKjEtCnboB?rx3gs/,JAI@02=|"V^~&5+9{', BB[-qj[95]] = "" + (BB[qj[2]] || ""), BB[-qj[96]] = BB[-qj[95]].length, BB[qj[64]] = [], BB[qj[29]] = qj[2], BB[qj[8]] = qj[2], BB[qj[36]] = -qj[0]), BB[qj[3]] = qj[2]; BB[qj[3]] < BB[-qj[96]]; BB[qj[3]]++)
                if (BB[qj[97]] = BB[qj[0]].indexOf(BB[-qj[95]][BB[qj[3]]]), BB[qj[97]] !== -qj[0])
                  if (BB[qj[36]] < qj[2]) BB[qj[36]] = BB[qj[97]];
                  else {
                    Hj(BB[qj[36]] += BB[qj[97]] * qj[28], BB[qj[29]] |= BB[qj[36]] << BB[qj[8]], BB[qj[8]] += (BB[qj[36]] & qj[30]) > qj[31] ? qj[32] : qj[33]);
                    do {
                      Hj(BB[qj[64]].push(BB[qj[29]] & qj[11]), BB[qj[29]] >>= qj[10], BB[qj[8]] -= qj[10])
                    } while (BB[qj[8]] > qj[6]);
                    BB[qj[36]] = -qj[0]
                  } return BB[qj[36]] > -qj[0] && BB[qj[64]].push((BB[qj[29]] | BB[qj[36]] << BB[qj[8]]) & qj[11]), fj(BB[qj[64]])
            }

            function aB(...BB) {
              return BB[qj[12]] = qj[0], typeof kj[BB[qj[2]]] === qj[16] ? kj[BB[qj[2]]] = UB(Gj[BB[qj[2]]]) : kj[BB[qj[2]]]
            }

            function sB(...BB) {
              function jB(...BB) {
                return BB[qj[12]] = qj[0], typeof kj[BB[qj[2]]] === qj[16] ? kj[BB[qj[2]]] = function(...BB) {
                  for (Hj(BB[qj[12]] = qj[0], BB[qj[0]] = 'P0XFxua:eorqG9&h$!if4~`O*A[|TK+{/=S]8v<l,@;6"5wcU(g?YVREL71pjyWkmIsB3Q)2.%C}HNnZt^_bzdDJ>M#', BB[qj[19]] = "" + (BB[qj[2]] || ""), BB[qj[15]] = BB[qj[19]].length, BB[-qj[94]] = [], BB[qj[29]] = qj[2], BB[qj[8]] = qj[2], BB[qj[6]] = -qj[0]), BB[qj[10]] = qj[2]; BB[qj[10]] < BB[qj[15]]; BB[qj[10]]++)
                    if (BB[qj[98]] = BB[qj[0]].indexOf(BB[qj[19]][BB[qj[10]]]), BB[qj[98]] !== -qj[0])
                      if (BB[qj[6]] < qj[2]) BB[qj[6]] = BB[qj[98]];
                      else {
                        Hj(BB[qj[6]] += BB[qj[98]] * qj[28], BB[qj[29]] |= BB[qj[6]] << BB[qj[8]], BB[qj[8]] += (BB[qj[6]] & qj[30]) > qj[31] ? qj[32] : qj[33]);
                        do {
                          Hj(BB[-qj[94]].push(BB[qj[29]] & qj[11]), BB[qj[29]] >>= qj[10], BB[qj[8]] -= qj[10])
                        } while (BB[qj[8]] > qj[6]);
                        BB[qj[6]] = -qj[0]
                      } return BB[qj[6]] > -qj[0] && BB[-qj[94]].push((BB[qj[29]] | BB[qj[6]] << BB[qj[8]]) & qj[11]), fj(BB[-qj[94]])
                }(Gj[BB[qj[2]]]) : kj[BB[qj[2]]]
              }
              BB[qj[12]] = qj[2],
                function(...BB) {
                  function jB(...BB) {
                    for (Hj(BB[qj[12]] = qj[0], BB[qj[99]] = [], BB[-qj[100]] = qj[2], BB[qj[15]] = BB[qj[2]].length, BB[-qj[101]] = qj[18], BB[qj[29]] = qj[18]); BB[-qj[100]] < BB[qj[15]];) Hj(BB[-qj[101]] = BB[qj[2]].charCodeAt(BB[-qj[100]]++), BB[-qj[101]] >= qj[48] && BB[-qj[101]] <= qj[102] && BB[-qj[100]] < BB[qj[15]] ? (BB[qj[29]] = BB[qj[2]].charCodeAt(BB[-qj[100]]++), (BB[qj[29]] & qj[103]) == qj[49] ? BB[qj[99]].push(((BB[-qj[101]] & qj[43]) << qj[47]) + (BB[qj[29]] & qj[43]) + qj[44]) : (BB[qj[99]].push(BB[-qj[101]]), BB[-qj[100]]--)) : BB[qj[99]].push(BB[-qj[101]]));
                    return BB[qj[99]]
                  }

                  function zB(...BB) {
                    if (BB[qj[12]] = qj[0], BB[qj[2]] >= qj[48] && BB[qj[2]] <= qj[107]) {
                      function jB(BB) {
                        var jB, zB, QB, nB, dB, IB, NB;
                        for (Hj(jB = "" + (BB || ""), zB = jB.length, QB = [], nB = qj[2], dB = qj[2], IB = -qj[0]), NB = qj[2]; NB < zB; NB++) {
                          var uB = 'cMfhDWCgRKBjPAdxawO>,Je+l~4TZy7#<[?5/^2}8*=:6{`;3&kvG]u%_tX$YznriVp)|EmqH1!.@"9Qb0IosF(LUNS'.indexOf(jB[NB]);
                          if (uB !== -qj[0])
                            if (IB < qj[2]) IB = uB;
                            else {
                              Hj(IB += uB * qj[28], nB |= IB << dB, dB += (IB & qj[30]) > qj[31] ? qj[32] : qj[33]);
                              do {
                                Hj(QB.push(nB & qj[11]), nB >>= qj[10], dB -= qj[10])
                              } while (dB > qj[6]);
                              IB = -qj[0]
                            }
                        }
                        return IB > -qj[0] && QB.push((nB | IB << dB) & qj[11]), fj(QB)
                      }

                      function zB(...BB) {
                        return BB[qj[12]] = qj[0], typeof kj[BB[qj[2]]] === qj[16] ? kj[BB[qj[2]]] = jB(Gj[BB[qj[2]]]) : kj[BB[qj[2]]]
                      }
                      throw Error(zB(qj[67]) + zB(115) + zB(116) + BB[qj[2]].toString(qj[99]).toUpperCase() + (zB(117) + zB(118) + zB(119) + qj[29]))
                    }
                  }

                  function QB(...jB) {
                    return jB[qj[12]] = qj[13], BB[qj[17]](jB[qj[2]] >> jB[qj[0]] & qj[20] | qj[51])
                  }

                  function nB(...jB) {
                    return jB[qj[12]] = qj[0], (jB[qj[2]] & qj[108]) == qj[2] ? BB[qj[17]](jB[qj[2]]) : (jB[qj[0]] = "", (jB[qj[2]] & qj[109]) == qj[2] ? jB[qj[0]] = BB[qj[17]](jB[qj[2]] >> qj[8] & qj[53] | qj[61]) : (jB[qj[2]] & qj[110]) == qj[2] ? Hj(zB(jB[qj[2]]), jB[qj[0]] = BB[qj[17]](jB[qj[2]] >> qj[22] & qj[54] | qj[35]), jB[qj[0]] += QB(jB[qj[2]], qj[8])) : (jB[qj[2]] & qj[111]) == qj[2] && Hj(jB[qj[0]] = BB[qj[17]](jB[qj[2]] >> qj[55] & qj[6] | qj[69]), jB[qj[0]] += QB(jB[qj[2]], qj[22]), jB[qj[0]] += QB(jB[qj[2]], qj[8])), jB[qj[0]] += BB[qj[17]](jB[qj[2]] & qj[20] | qj[51]), jB[qj[0]])
                  }

                  function dB(...jB) {
                    if (jB[qj[12]] = qj[2], BB[qj[19]] >= BB[qj[14]]) throw Error(aB(qj[85]));
                    if (Hj(jB[qj[19]] = BB[qj[9]][BB[qj[19]]] & qj[11], BB[qj[19]]++), (jB[qj[19]] & qj[61]) == qj[51]) return jB[qj[19]] & qj[20];
                    throw Error(function(...BB) {
                      return BB[qj[12]] = qj[0], typeof kj[BB[qj[2]]] === qj[16] ? kj[BB[qj[2]]] = function(...BB) {
                        for (Hj(BB[qj[12]] = qj[0], BB[qj[0]] = 'NC=Ki$"_:mPBMz|EX,8;w49gbJx[?Y~p{}y5%tcn2Tv3U*1&kdS.Rf6Z+eu>`GD!F7^/@#]aqQL)0OI(rHhAsWlVoj<', BB[qj[13]] = "" + (BB[qj[2]] || ""), BB[qj[14]] = BB[qj[13]].length, BB[-qj[28]] = [], BB[qj[29]] = qj[2], BB[qj[38]] = qj[2], BB[qj[36]] = -qj[0]), BB[-qj[88]] = qj[2]; BB[-qj[88]] < BB[qj[14]]; BB[-qj[88]]++)
                          if (BB[qj[59]] = BB[qj[0]].indexOf(BB[qj[13]][BB[-qj[88]]]), BB[qj[59]] !== -qj[0])
                            if (BB[qj[36]] < qj[2]) BB[qj[36]] = BB[qj[59]];
                            else {
                              Hj(BB[qj[36]] += BB[qj[59]] * qj[28], BB[qj[29]] |= BB[qj[36]] << BB[qj[38]], BB[qj[38]] += (BB[qj[36]] & qj[30]) > qj[31] ? qj[32] : qj[33]);
                              do {
                                Hj(BB[-qj[28]].push(BB[qj[29]] & qj[11]), BB[qj[29]] >>= qj[10], BB[qj[38]] -= qj[10])
                              } while (BB[qj[38]] > qj[6]);
                              BB[qj[36]] = -qj[0]
                            } return BB[qj[36]] > -qj[0] && BB[-qj[28]].push((BB[qj[29]] | BB[qj[36]] << BB[qj[38]]) & qj[11]), fj(BB[-qj[28]])
                      }(Gj[BB[qj[2]]]) : kj[BB[qj[2]]]
                    }(qj[93]))
                  }

                  function IB(...jB) {
                    if (Hj(jB[qj[12]] = qj[2], jB[qj[17]] = qj[18], jB[-qj[113]] = qj[18], jB[qj[15]] = qj[18], jB[qj[14]] = qj[18], jB[qj[29]] = qj[18]), BB[qj[19]] > BB[qj[14]]) throw Error(aB(qj[85]));
                    if (BB[qj[19]] == BB[qj[14]]) return qj[73];
                    if (Hj(jB[qj[17]] = BB[qj[9]][BB[qj[19]]] & qj[11], BB[qj[19]]++), (jB[qj[17]] & qj[51]) == qj[2]) return jB[qj[17]];
                    if ((jB[qj[17]] & qj[35]) == qj[61]) {
                      if (Hj(jB[-qj[113]] = dB(), jB[qj[29]] = (jB[qj[17]] & qj[53]) << qj[8] | jB[-qj[113]]), jB[qj[29]] >= qj[51]) return jB[qj[29]];
                      {
                        function QB(...BB) {
                          for (Hj(BB[qj[12]] = qj[0], BB[qj[17]] = '#OkoAWuKT9jrhN<vYV~s:wxSl.Eyq=4tiF(@ce6mz0&1bXn+RU2a5^CJ3g%?BP[MGD/"`>d!)]HpI_*Q}L{f$7|Z;,8', BB[qj[55]] = "" + (BB[qj[2]] || ""), BB[qj[116]] = BB[qj[55]].length, BB[qj[9]] = [], BB[-qj[87]] = qj[2], BB[qj[8]] = qj[2], BB[qj[114]] = -qj[0]), BB[qj[115]] = qj[2]; BB[qj[115]] < BB[qj[116]]; BB[qj[115]]++)
                            if (BB[qj[59]] = BB[qj[17]].indexOf(BB[qj[55]][BB[qj[115]]]), BB[qj[59]] !== -qj[0])
                              if (BB[qj[114]] < qj[2]) BB[qj[114]] = BB[qj[59]];
                              else {
                                Hj(BB[qj[114]] += BB[qj[59]] * qj[28], BB[-qj[87]] |= BB[qj[114]] << BB[qj[8]], BB[qj[8]] += (BB[qj[114]] & qj[30]) > qj[31] ? qj[32] : qj[33]);
                                do {
                                  Hj(BB[qj[9]].push(BB[-qj[87]] & qj[11]), BB[-qj[87]] >>= qj[10], BB[qj[8]] -= qj[10])
                                } while (BB[qj[8]] > qj[6]);
                                BB[qj[114]] = -qj[0]
                              } return BB[qj[114]] > -qj[0] && BB[qj[9]].push((BB[-qj[87]] | BB[qj[114]] << BB[qj[8]]) & qj[11]), fj(BB[qj[9]])
                        }

                        function nB(...BB) {
                          return BB[qj[12]] = qj[0], typeof kj[BB[qj[2]]] === qj[16] ? kj[BB[qj[2]]] = QB(Gj[BB[qj[2]]]) : kj[BB[qj[2]]]
                        }
                        throw Error(nB(122))
                      }
                    }
                    if ((jB[qj[17]] & qj[69]) == qj[35]) {
                      if (Hj(jB[-qj[113]] = dB(), jB[qj[15]] = dB(), jB[qj[29]] = (jB[qj[17]] & qj[54]) << qj[22] | jB[-qj[113]] << qj[8] | jB[qj[15]]), jB[qj[29]] >= qj[117]) return zB(jB[qj[29]]), jB[qj[29]];
                      {
                        function IB(...BB) {
                          for (Hj(BB[qj[12]] = qj[0], BB[-qj[119]] = 'ju|v$5&=ZED1Q8`bC0dOfwhTB[^IV2q]A)xy<{gaN~6(>G,H!79"#Mzpn@Kr?F;:JeW3Xt4RP/Uslo*L_Smk%Y}.ci+', BB[qj[19]] = "" + (BB[qj[2]] || ""), BB[qj[14]] = BB[qj[19]].length, BB[qj[9]] = [], BB[qj[41]] = qj[2], BB[qj[8]] = qj[2], BB[qj[4]] = -qj[0]), BB[qj[10]] = qj[2]; BB[qj[10]] < BB[qj[14]]; BB[qj[10]]++)
                            if (BB[-qj[118]] = BB[-qj[119]].indexOf(BB[qj[19]][BB[qj[10]]]), BB[-qj[118]] !== -qj[0])
                              if (BB[qj[4]] < qj[2]) BB[qj[4]] = BB[-qj[118]];
                              else {
                                Hj(BB[qj[4]] += BB[-qj[118]] * qj[28], BB[qj[41]] |= BB[qj[4]] << BB[qj[8]], BB[qj[8]] += (BB[qj[4]] & qj[30]) > qj[31] ? qj[32] : qj[33]);
                                do {
                                  Hj(BB[qj[9]].push(BB[qj[41]] & qj[11]), BB[qj[41]] >>= qj[10], BB[qj[8]] -= qj[10])
                                } while (BB[qj[8]] > qj[6]);
                                BB[qj[4]] = -qj[0]
                              } return BB[qj[4]] > -qj[0] && BB[qj[9]].push((BB[qj[41]] | BB[qj[4]] << BB[qj[8]]) & qj[11]), fj(BB[qj[9]])
                        }

                        function NB(...BB) {
                          return BB[qj[12]] = qj[0], typeof kj[BB[qj[2]]] === qj[16] ? kj[BB[qj[2]]] = IB(Gj[BB[qj[2]]]) : kj[BB[qj[2]]]
                        }
                        throw Error(NB(qj[115]))
                      }
                    }
                    if ((jB[qj[17]] & qj[120]) == qj[69] && (Hj(jB[-qj[113]] = dB(), jB[qj[15]] = dB(), jB[qj[14]] = dB(), jB[qj[29]] = (jB[qj[17]] & qj[6]) << qj[55] | jB[-qj[113]] << qj[22] | jB[qj[15]] << qj[8] | jB[qj[14]]), jB[qj[29]] >= qj[44] && jB[qj[29]] <= qj[121])) return jB[qj[29]];
                    throw Error(aB(124))
                  }
                  Hj(BB[qj[12]] = qj[0], BB[qj[17]] = String.fromCharCode), Hj(BB[qj[9]] = qj[18], BB[qj[14]] = qj[18], BB[qj[19]] = qj[18]), Hj(BB[qj[2]].version = aB(125), BB[qj[2]].encode = function(...BB) {
                    for (Hj(BB[qj[12]] = qj[0], BB[qj[75]] = jB(BB[qj[2]]), BB[-qj[112]] = BB[qj[75]].length, BB[qj[14]] = -qj[0], BB[qj[31]] = qj[18], BB[qj[41]] = ""); ++BB[qj[14]] < BB[-qj[112]];) Hj(BB[qj[31]] = BB[qj[75]][BB[qj[14]]], BB[qj[41]] += nB(BB[qj[31]]));
                    return BB[qj[41]]
                  }, BB[qj[2]].decode = function(...zB) {
                    for (Hj(zB[qj[12]] = qj[0], BB[qj[9]] = jB(zB[qj[2]]), BB[qj[14]] = BB[qj[9]].length, BB[qj[19]] = qj[2], zB[qj[0]] = [], zB[qj[13]] = qj[18]);
                      (zB[qj[13]] = IB()) !== qj[73];) zB[qj[0]].push(zB[qj[13]]);
                    return function(...jB) {
                      for (Hj(jB[qj[12]] = qj[0], jB[qj[0]] = jB[qj[2]].length, jB[-qj[104]] = -qj[0], jB[-qj[105]] = qj[18], jB[qj[80]] = ""); ++jB[-qj[104]] < jB[qj[0]];) jB[-qj[105]] = jB[qj[2]][jB[-qj[104]]], jB[-qj[105]] > qj[106] && Hj(jB[-qj[105]] -= qj[44], jB[qj[80]] += BB[qj[17]](jB[-qj[105]] >>> qj[47] & qj[43] | qj[48]), jB[-qj[105]] = qj[49] | jB[-qj[105]] & qj[43]), jB[qj[80]] += BB[qj[17]](jB[-qj[105]]);
                      return jB[qj[80]]
                    }(zB[qj[0]])
                  })
                }(typeof exports === jB(qj[88]) + jB(qj[114]) ? this.utf8 = {} : exports)
            }
            aB(113) in oj && sB(), mj()
          }
        }
      } else {
        function JB(...BB) {
          for (Hj(BB[qj[12]] = qj[0], BB[-qj[85]] = 'P#B`Afl",x5|4u)~q*17kRUi+p.gQDS6WLw9J$]}E(m8b<FK?2e[{vCt&MXOHy3Y_0@zIc:s=GaNohdnV/>!%;^jrTZ', BB[qj[13]] = "" + (BB[qj[2]] || ""), BB[qj[14]] = BB[qj[13]].length, BB[qj[64]] = [], BB[qj[86]] = qj[2], BB[qj[8]] = qj[2], BB[qj[36]] = -qj[0]), BB[qj[10]] = qj[2]; BB[qj[10]] < BB[qj[14]]; BB[qj[10]]++)
            if (BB[qj[26]] = BB[-qj[85]].indexOf(BB[qj[13]][BB[qj[10]]]), BB[qj[26]] !== -qj[0])
              if (BB[qj[36]] < qj[2]) BB[qj[36]] = BB[qj[26]];
              else {
                Hj(BB[qj[36]] += BB[qj[26]] * qj[28], BB[qj[86]] |= BB[qj[36]] << BB[qj[8]], BB[qj[8]] += (BB[qj[36]] & qj[30]) > qj[31] ? qj[32] : qj[33]);
                do {
                  Hj(BB[qj[64]].push(BB[qj[86]] & qj[11]), BB[qj[86]] >>= qj[10], BB[qj[8]] -= qj[10])
                } while (BB[qj[8]] > qj[6]);
                BB[qj[36]] = -qj[0]
              } return BB[qj[36]] > -qj[0] && BB[qj[64]].push((BB[qj[86]] | BB[qj[36]] << BB[qj[8]]) & qj[11]), fj(BB[qj[64]])
        }

        function mB(...BB) {
          return BB[qj[12]] = qj[0], typeof kj[BB[qj[2]]] === qj[16] ? kj[BB[qj[2]]] = JB(Gj[BB[qj[2]]]) : kj[BB[qj[2]]]
        }

        function yB(...BB) {
          BB[qj[12]] = qj[2]
        }
        mB(106) + "r" in oj && yB(), (0, pB[qj[19]])("5 ")
      }
    }, mB.n.subscribe("customBindingsChanged", (() => {
      Fj()
    }));
    let Yj = !1,
      Vj = !1;
    const hj = () => Yj || Vj && DB.d.isInGame(),
      Xj = BB => {
        hj() && BB.preventDefault()
      };
    mB.n.subscribe("displaymodeFullscreenChange", (BB => {
      Zj()
    })), mB.n.subscribe("pointerLockUpdate", (BB => {
      Yj = BB, Zj(), Aj()
    })), mB.n.subscribe("freeCursorUpdate", (BB => {
      Vj = BB, Zj(), Aj()
    }));
    const Zj = () => {
        window.removeEventListener("wheel", Xj), FB.isIframed && !(0, IB.l)() && (Yj || Vj) && window.addEventListener("wheel", Xj, {
          passive: !1
        })
      },
      Aj = () => {
        window.removeEventListener("wheel", Tj), (Yj || Vj) && window.addEventListener("wheel", Tj, {
          passive: !1
        })
      },
      Tj = BB => {
        !0 === BB.ctrlKey && hj() && BB.preventDefault()
      };

    function Pj(BB) {
      mB.n.Ly("QTEMouseState", {
        isDown: BB
      })
    }

    function Wj(BB) {
      var jB, zB, nB, dB, IB, NB, uB, UB;
      const pB = (0, fB.g)();
      pB.mBB = null !== (jB = function(BB, jB) {
        var zB, QB;
        if (!pj) return null;
        const nB = BB.bloxd;
        Nj ??= nB.getMetaInfo("Board").rootId;
        const dB = null !== (zB = null === jB || void 0 === jB ? void 0 : jB.JR) && void 0 !== zB ? zB : null;
        if (!dB || nB.getMetaInfo(dB).rootId !== Nj) return null;
        const IB = null !== (QB = null === jB || void 0 === jB ? void 0 : jB.position) && void 0 !== QB ? QB : null;
        if (nB.playerCanChangePos(BB.zV, IB[0], IB[1], IB[2])) return null;
        const NB = (BB, jB, zB) => {
          const QB = nB.blockDataOwner.getBlockData(BB, jB, zB),
            dB = null === QB || void 0 === QB ? void 0 : QB.persisted.shared.text.split("\n")[0].toLowerCase().trim();
          return YB.singleLineBoardActions.has(dB)
        };
        if (NB(IB[0], IB[1], IB[2])) return null;
        let uB;
        BB.YBB && (uB = [...BB.YBB], BB.WK(uB, uB));
        const UB = (uB ? BB.camera.Xw : 0) + nB.getBlockReach(BB.zV);
        return BB.pickBlock(uB, BB.VBB, UB, ((jB, zB, QB, dB) => 0 !== jB && ("Board" !== nB.getMetaInfo(jB).rootName || nB.playerCanChangePos(BB.zV, zB, QB, dB) || NB(zB, QB, dB))))
      }(pB, pB.mBB)) && void 0 !== jB ? jB : pB.mBB;
      const rB = null !== (zB = null === (nB = pB.mBB) || void 0 === nB ? void 0 : nB.position) && void 0 !== zB ? zB : null,
        JB = null !== (dB = pB.VBB) && void 0 !== dB ? dB : pB.camera.nC(),
        yB = fB.i.localPlayerPickActionHelper.getPickEntityResult(JB),
        kB = null !== (IB = pB.mBB) && void 0 !== IB && IB.JR ? (0, AB.g)(pB.mBB.JR) : "Air",
        GB = BB === sB.c.UpFirePrimary || BB === sB.c.UpFireSecondary,
        LB = GB ? "onPlayerClickUp" : "onPlayerClick",
        gB = GB ? BB === sB.c.UpFireSecondary : BB === sB.c.DownFireSecondary,
        tB = !GB && (0, QB.getWasDoubleClick)();
      mB.n.Ly("mouseState", {
        ea: BB,
        isDown: !GB
      }), (0, QB.sendColyMessage)(aB.Qh, {
        ea: BB,
        la: tB,
        rI: rB,
        sI: yB
      }, !0), (0, fB.c)().client.triggerGameCallback(LB, pB.zV, gB, null !== (NB = null === rB || void 0 === rB ? void 0 : rB[0]) && void 0 !== NB ? NB : null, null !== (uB = null === rB || void 0 === rB ? void 0 : rB[1]) && void 0 !== uB ? uB : null, null !== (UB = null === rB || void 0 === rB ? void 0 : rB[2]) && void 0 !== UB ? UB : null, kB, yB)
    }
    window.addEventListener("keydown", (BB => {
      ["ArrowUp", "ArrowDown"].includes(BB.key) && BB.preventDefault()
    })), document.addEventListener("keydown", (BB => {
      (0, XB.b)(BB, (() => {
        const BB = (0, fB.g)();
        return (0, hB.I)(BB) || !1 !== BB.wG.canCustomiseChar
      }))
    }))
  },
  39187: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => dB,
      g: () => IB
    });
    var QB = zB(38520);
    let nB = !1;

    function dB() {
      return nB
    }

    function IB(BB) {
      nB = BB, BB ? QB.f.setMultiplierType("emoteWheel", 0) : QB.f.removeMultiplier("emoteWheel")
    }
  },
  39193: (BB, jB, zB) => {
    function QB(BB) {
      return Boolean(BB.wG.useInventory && BB.wG.useFullInventory && BB.vG.GjB(BB.zV))
    }
    zB.d(jB, {
      c: () => QB
    })
  },
  39102: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => dB,
      e: () => nB
    });
    var QB = zB(37239);

    function nB(BB, jB) {
      return {
        replayedClipName: BB,
        replayedClipAgeSeconds: jB
      }
    }

    function dB(BB, jB, zB, nB, dB) {
      const IB = function(BB) {
          if ("object" !== typeof BB || null === BB) return null;
          const {
            replayedClipName: jB,
            replayedClipAgeSeconds: zB
          } = BB;
          return "string" === typeof jB && "number" === typeof zB ? {
            wQ: jB,
            xQ: zB
          } : null
        }(zB),
        NB = null === IB ? zB : null,
        {
          wQ: uB = null,
          xQ: UB = 0
        } = null !== IB && void 0 !== IB ? IB : {};
      BB.animateEntity(jB, QB.f.Custom, NB, nB, dB, uB, UB)
    }
  },
  39191: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => aB
    });
    var QB = zB(38470),
      nB = zB(376),
      dB = zB(2863);

    function IB() {
      var BB, jB, zB, QB;
      const IB = (0, dB.g)(),
        NB = null !== (BB = null === (jB = IB.vG.mjB(IB.zV)) || void 0 === jB ? void 0 : jB.selectedItem) && void 0 !== BB ? BB : null,
        uB = NB ? (0, dB.c)().getItemStat(IB.zV, NB.name, "attackCooldownMs") : null,
        UB = (0, nB.jd)(uB, null === NB || void 0 === NB || null === (zB = NB.attributes.customAttributes) || void 0 === zB || null === (QB = zB.enchantments) || void 0 === QB ? void 0 : QB["Attack Speed"]);
      return Math.max(56, Math.ceil((UB + 30) / 3))
    }
    class NB {
      constructor(BB, jB) {
        this.tries = void 0, this.dueMs = void 0, this.intervalMs = void 0, this.tries = [BB], this.dueMs = BB, this.intervalMs = jB
      }
      spacedBy(BB, jB) {
        if (BB === this.intervalMs) return this;
        const zB = this.tries[this.tries.length - 1],
          QB = new NB(zB, BB);
        return QB.dueMs = Math.max(zB, jB - BB), QB
      }
      nextDueMs() {
        const BB = this.tries[this.tries.length - 1];
        return Math.max(BB + 56, this.tries[0] + this.tries.length * this.intervalMs, this.dueMs + this.intervalMs)
      }
      noteTry(BB, jB) {
        this.tries.push(BB), this.tries.length > 3 && this.tries.shift(), this.dueMs = jB
      }
    }
    var uB = zB(39187),
      UB = zB(1316);
    class aB {
      constructor() {
        this.timer = null, this.tries = new NB(0, 0), this.check = () => {
          const BB = Date.now(),
            jB = this.tries.spacedBy(IB(), BB),
            zB = jB.nextDueMs();
          if (BB < zB) this.schedule();
          else {
            if (jB.noteTry(BB, zB), this.tries = jB, (0, UB.y)() && !(0, uB.d)()) {
              var nB, NB;
              (0, QB.i)();
              const BB = (0, dB.g)();
              null === (nB = BB.vG.XjB(BB.zV)) || void 0 === nB || null === (NB = nB.kS) || void 0 === NB || NB.repeatAttack()
            }
            this.schedule()
          }
        }
      }
      start() {
        var BB;
        null === (BB = aB.running) || void 0 === BB || BB.stop(), aB.running = this, this.tries = new NB(Date.now(), IB()), this.schedule()
      }
      static stopRunning() {
        var BB;
        null === (BB = aB.running) || void 0 === BB || BB.stop()
      }
      stop() {
        clearTimeout(this.timer), this.timer = null, aB.running === this && (aB.running = null)
      }
      schedule() {
        const BB = Date.now(),
          jB = this.tries.spacedBy(IB(), BB).nextDueMs() - BB;
        this.timer = setTimeout(this.check, Math.min(jB, 100))
      }
    }
    aB.running = null
  },
  39111: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => JB,
      h: () => aB,
      k: () => sB,
      o: () => rB,
      q: () => mB,
      r: () => pB
    });
    var QB = zB(39117),
      nB = zB(37340),
      dB = zB(3798),
      IB = zB(1991),
      NB = zB(31),
      uB = zB(2863);
    const UB = new QB.c;

    function aB() {
      return UB
    }

    function pB() {
      UB.clear()
    }

    function rB() {
      for (const BB of UB.ids()) {
        const jB = UB.getName(BB);
        void 0 !== jB && IB.b.delete(jB)
      }
      pB(), NB.n.Ly("playerRosterChanged", UB.ids())
    }

    function sB(BB, jB) {
      var zB, QB;
      if (UB.has(BB)) return UB.getSetting(BB, jB);
      const nB = (0, uB.g)();
      return null === (zB = nB.RY[nB.zV]) || void 0 === zB || null === (QB = zB[BB]) || void 0 === QB ? void 0 : QB[jB]
    }

    function JB(BB) {
      const {
        added: jB,
        removed: zB,
        settingChanges: QB
      } = UB.apply(BB);
      for (const {
          playerId: nB,
          name: dB
        }
        of zB) void 0 === dB || yB(nB) || IB.b.delete(dB);
      for (const {
          playerId: dB,
          settings: IB
        }
        of QB)
        if (yB(dB)) mB(dB, IB);
        else
          for (const BB in IB)(0, nB.k)(dB, BB, IB[BB]);
      (jB.length > 0 || zB.length > 0) && NB.n.Ly("playerRosterChanged", UB.ids())
    }

    function mB(BB) {
      let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : UB.getSettings(BB);
      if (jB) {
        (0, nB.d)(BB);
        for (const zB in jB)(0, nB.b)(BB, zB, jB[zB])
      }
    }

    function yB(BB) {
      return BB === (0, uB.g)().FBB || (0, uB.c)().client.hasEntity(BB)
    }(0, dB.onGameReset)(pB)
  },
  38162: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => qB,
      h: () => SB,
      i: () => EB,
      k: () => iB,
      n: () => fB
    });
    var QB = zB(37166),
      nB = zB(38170),
      dB = zB(386),
      IB = zB.n(dB),
      NB = zB(3510);
    const uB = new QB.KJ,
      UB = new QB.KJ,
      aB = new QB.KJ,
      pB = new QB.KJ,
      rB = new QB.KJ,
      sB = [0, 0, 0],
      JB = {
        x: 0,
        y: 0
      },
      mB = new QB.KJ(1, 0, 0),
      yB = new QB.KJ(0, 1, 0),
      kB = QB.Matrix.Identity(),
      GB = new QB.Matrix,
      LB = new QB.Matrix,
      gB = new QB.KJ,
      tB = new nB.e(0, 0, 0, 0);

    function SB(BB, jB) {
      var zB, nB;
      const dB = MB(BB, jB);
      if (dB) {
        const BB = dB.x,
          jB = dB.y,
          zB = BB - 50,
          QB = jB - 50;
        return Math.abs(zB) <= NB.e && Math.abs(QB) <= (0, NB.k)() ? {
          x: BB,
          y: jB
        } : HB(zB, QB)
      }
      aB.U3(jB[0], jB[1], jB[2]),
        function(BB) {
          const jB = BB.pm.ozB(),
            zB = jB ? QB.Matrix.FromArrayToRef(jB.worldMatrix, 0, LB) : BB.pm.aY().activeCamera.getWorldMatrix();
          QB.KJ.TransformNormalToRef(mB, zB, pB), pB.normalize(), QB.KJ.TransformNormalToRef(yB, zB, rB), rB.normalize()
        }(BB);
      const IB = QB.KJ.Dot(aB, pB);
      let uB = -QB.KJ.Dot(aB, rB);
      Math.abs(IB) < .001 && Math.abs(uB) < .001 && (uB = -1);
      const UB = null !== (zB = null === (nB = BB.pm.ozB()) || void 0 === nB ? void 0 : nB.projectionMatrix) && void 0 !== zB ? zB : BB.pm.aY().activeCamera.getProjectionMatrix().m;
      return HB(IB * UB[0], uB * UB[5])
    }

    function MB(BB, jB) {
      const zB = BB.pm.aY(),
        nB = zB.wJ(),
        dB = nB.getRenderWidth(),
        IB = nB.getRenderHeight();
      tB.width = dB, tB.height = IB;
      const NB = BB.pm.ozB(),
        aB = NB ? gB.U3(NB.eye[0], NB.eye[1], NB.eye[2]) : BB.pm.camera.globalPosition;
      uB.U3(aB.x + 10 * jB[0], aB.y + 10 * jB[1], aB.z + 10 * jB[2]);
      const pB = NB ? QB.Matrix.FromArrayToRef(NB.viewProjectionMatrix, 0, GB) : zB.getTransformMatrix();
      return QB.KJ.ProjectToRef(uB, kB, pB, tB, UB), UB.z < 0 || UB.z > 1 ? null : (JB.x = UB.x / dB * 100, JB.y = UB.y / IB * 100, JB)
    }

    function EB(BB, jB) {
      return SB(BB, oB(BB, jB))
    }

    function iB(BB, jB) {
      const zB = MB(BB, oB(BB, jB));
      return zB && {
        x: zB.x,
        y: zB.y
      }
    }

    function qB(BB) {
      var jB, zB;
      return 1 / (null !== (jB = null === (zB = BB.pm.ozB()) || void 0 === zB ? void 0 : zB.projectionMatrix[0]) && void 0 !== jB ? jB : BB.pm.aY().activeCamera.getProjectionMatrix().m[0])
    }

    function fB(BB, jB, zB) {
      const QB = BB.pm.ozB(),
        nB = QB ? QB.worldMatrix : BB.pm.aY().activeCamera.getWorldMatrix().m,
        dB = BB.qr;
      for (let IB = 0; IB < 3; IB++) jB[IB] = nB[12 + IB] + dB[IB], zB[IB] = nB[8 + IB];
      IB().normalize(zB, zB)
    }

    function oB(BB, jB) {
      const zB = BB.qr,
        QB = BB.pm.ozB(),
        nB = QB ? gB.U3(QB.eye[0], QB.eye[1], QB.eye[2]) : BB.pm.camera.globalPosition;
      return sB[0] = jB[0] - zB[0] - nB.x, sB[1] = jB[1] - zB[1] - nB.y, sB[2] = jB[2] - zB[2] - nB.z, IB().normalize(sB, sB), sB
    }

    function HB(BB, jB) {
      return (0, NB.g)(BB, jB, NB.e, (0, NB.k)())
    }
  },
  39078: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => rB
    });
    var QB = zB(214),
      nB = zB(386),
      dB = zB.n(nB),
      IB = zB(36828),
      NB = zB(36830),
      uB = zB(2863);
    const UB = QB.e.Bk * QB.e.playerEyeToHeightRatio,
      aB = 250,
      pB = 1.1,
      rB = new class {
        constructor() {
          this.entities = new Map, this.playing = new Map, this.msSinceLastScan = 0
        }
        add(BB, jB) {
          this.entities.set(BB, jB)
        }
        update(BB, jB) {
          const zB = this.entities.get(BB);
          this.entities.set(BB, jB);
          const QB = this.playing.get(BB);
          QB && (zB && zB.soundName === jB.soundName ? (QB.sound.setRelativeVolume(jB.volume), QB.sound.rate(jB.rate), QB.sound.setPannerAttr({
            refDistance: jB.refDistance
          })) : this.stopEntity(BB))
        }
        remove(BB) {
          this.stopEntity(BB), this.entities.delete(BB)
        }
        vp(BB) {
          this.msSinceLastScan += BB, this.msSinceLastScan < aB || (this.msSinceLastScan = 0, this.scan())
        }
        stopEntity(BB) {
          const jB = this.playing.get(BB);
          jB && (jB.sound.stop(), this.playing.delete(BB))
        }
        startEntity(BB, jB, zB) {
          const QB = (0, NB.f)(jB.soundName);
          if (!QB) return console.error(`AudioEntityManager: no sound found for "${jB.soundName}", dropping audio entity ${BB}`), void this.remove(BB);
          const nB = IB.e.play(QB, jB.volume, zB, jB.maxHearDist, jB.refDistance, !0);
          nB.rate(jB.rate), this.playing.set(BB, {
            sound: nB,
            lastPos: dB().clone(zB)
          })
        }
        scan() {
          const BB = (0, uB.g)();
          if (!BB) return;
          const jB = BB.vG.iG(BB.zV);
          if (jB)
            for (const [zB, QB] of this.entities) {
              if (!BB.vG.HBB(zB, "position")) continue;
              const nB = BB.vG.iG(zB),
                IB = dB().sqrDist(jB, nB),
                NB = this.playing.get(zB);
              if (NB) {
                const BB = QB.maxHearDist * pB;
                IB > BB * BB ? this.stopEntity(zB) : dB().equals(nB, NB.lastPos) || (NB.sound.setPosition([nB[0], nB[1] + UB, nB[2]]), dB().copy(NB.lastPos, nB))
              } else IB <= QB.maxHearDist * QB.maxHearDist && this.startEntity(zB, QB, nB)
            }
        }
      }
  },
  39142: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => dB,
      f: () => nB
    });
    var QB = zB(31);

    function nB(BB) {
      return "refetchCode" === BB || "devDownloadJson" === BB || BB.startsWith("Plugin")
    }

    function dB(BB, jB) {
      "refetchCode" !== BB ? "Plugin|MobAiPlugin|ShowPetUi" !== BB ? Promise.all([zB.e(109), zB.e(110), zB.e(105), zB.e(107), zB.e(218)]).then((() => zB(41825))).then((zB => {
        let {
          runClientGameMessage: QB
        } = zB;
        QB(BB, jB)
      })).catch((jB => {
        console.error(`Game message ${BB} failed`, jB)
      })) : QB.n.Ly("showPetUi", jB) : QB.n.Ly("refetchCode")
    }
  },
  39126: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => aB
    });
    var QB = zB(1263),
      nB = zB(1359),
      dB = zB(28),
      IB = zB(1343),
      NB = zB(1357),
      uB = zB(1543),
      UB = zB(36538);

    function aB(BB) {
      let {
        xn: jB,
        Kn: zB
      } = BB;
      const aB = null !== jB && void 0 !== jB ? jB : (0, NB.d)().gameNameWithVariation;
      (0, QB.C)(aB) && ((0, UB.i)(), (0, IB.W)((() => {
        console.log("Received matchmaking order from game server to game", jB), (0, dB.i)("inGameReplay"), (0, uB.navigatePreserveSearch)((0, nB.e)(aB, null !== zB && void 0 !== zB ? zB : void 0))
      }), "video_start"))
    }
  },
  39121: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => uB,
      d: () => IB,
      f: () => NB,
      j: () => UB
    });
    var QB = zB(31),
      nB = zB(1381);
    const dB = new Map;

    function IB(BB, jB) {
      QB.n.Ly("newUiRequest", {
        id: BB,
        clientParameters: jB
      }, !0)
    }

    function NB(BB) {
      QB.n.Ly("removeUiRequest", BB, !0);
      const jB = dB.get(BB);
      jB && (jB.tearDownNotification(), dB.delete(BB))
    }

    function uB() {
      QB.n.Ly("clearUiRequests");
      for (const BB of dB.values()) BB.tearDownNotification();
      dB.clear()
    }

    function UB(BB, jB, zB, QB) {
      const IB = nB.NotificationProvider.showPromptPopup({
        title: jB,
        confirmText: "general:yes",
        cancelText: "general:no",
        destructive: zB,
        unlockPointerKey: "uiRequestPopup"
      });
      dB.set(BB, IB), IB.getResult().then((jB => {
        dB.delete(BB), "notificationTornDown" !== jB && QB(jB)
      }))
    }
  },
  39117: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => QB
    });
    class QB {
      constructor() {
        this.members = new Map
      }
      apply(BB) {
        const jB = {
          added: [],
          removed: [],
          settingChanges: []
        };
        for (const QB of BB.ZB) {
          let BB = this.members.get(QB.AB);
          if (BB || (BB = {
              name: null,
              settings: {}
            }, this.members.set(QB.AB, BB), jB.added.push(QB.AB)), null !== QB.TB && (BB.name = QB.TB), null !== QB.PB || QB.WB.length > 0) {
            const zB = null === QB.PB ? {} : JSON.parse(QB.PB);
            Object.assign(BB.settings, zB);
            for (const jB of QB.WB) delete BB.settings[jB], zB[jB] = void 0;
            jB.settingChanges.push({
              playerId: QB.AB,
              settings: zB
            })
          }
        }
        for (const QB of BB.eB) {
          const BB = this.members.get(QB);
          var zB;
          if (BB) this.members.delete(QB), jB.removed.push({
            playerId: QB,
            name: null !== (zB = BB.name) && void 0 !== zB ? zB : void 0
          })
        }
        return jB
      }
      has(BB) {
        return this.members.has(BB)
      }
      ids() {
        return [...this.members.keys()]
      }
      getName(BB) {
        var jB, zB;
        return null !== (jB = null === (zB = this.members.get(BB)) || void 0 === zB ? void 0 : zB.name) && void 0 !== jB ? jB : void 0
      }
      getSettings(BB) {
        var jB;
        return null === (jB = this.members.get(BB)) || void 0 === jB ? void 0 : jB.settings
      }
      getSetting(BB, jB) {
        var zB;
        return null === (zB = this.members.get(BB)) || void 0 === zB ? void 0 : zB.settings[jB]
      }
      clear() {
        this.members.clear()
      }
    }
  },
  39146: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => QB,
      c: () => nB
    });
    const QB = ["description", "label"];

    function nB(BB) {
      const jB = BB.type;
      return {
        type: jB,
        params: BB[jB]
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);