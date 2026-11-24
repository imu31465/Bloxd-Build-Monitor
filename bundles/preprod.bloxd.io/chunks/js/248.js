export const id = 248;
export const ids = [248];
export const modules = {
  39281: (pp, ip, cp) => {
    function Op(pp) {
      return !(!pp.lobbyLeaderboardInfo && !pp.lobbyManage)
    }
    cp.d(ip, {
      d: () => Op
    })
  },
  39208: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Ip
    });
    var Op = cp(34),
      op = cp(1982);

    function Ip(pp) {
      let {
        taskId: ip,
        progress: cp
      } = pp;
      const Op = op.c.get("_tasks");
      null !== Op && void 0 !== Op && Op[ip] && op.c.apply({
        _tasks: {
          ...Op,
          [ip]: {
            ...Op[ip],
            progress: cp
          }
        }
      })
    }
    Op.m.subscribe("clientTaskProgress", (pp => {
      Ip(pp)
    }))
  },
  39152: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Oc,
      g: () => ic,
      j: () => cc
    });
    var Op = cp(3774),
      op = cp(156),
      Ip = cp(195),
      Sp = cp(643),
      xp = cp(44),
      Lp = cp(2849),
      Yp = cp(3837),
      Dp = cp(3824),
      Ap = cp(1234);
    const Pp = new WeakMap;
    class Wp {
      constructor(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
          IDp: !0
        };
        this.callbacks = ip, this.options = cp, this.zcp = void 0, this.sessionId = void 0, this.mC = [], this.SDp = !1, this.Ry = !1, this.xDp = void 0, this.uC = 0, this.YIp = 0, this.LDp = (pp, ip) => {
          if (this.Ry) return;
          const cp = Number(pp);
          this.SDp ? this.YDp(cp, ip) : this.mC.push({
            id: cp,
            payload: ip
          })
        }, this.dispose = () => {
          this.Ry || (this.Ry = !0, Pp.delete(this), this.mC.length = 0, this.xDp())
        }, this.zcp = pp, this.sessionId = pp.sessionId, Pp.set(this, []), this.xDp = this.DDp()
      }
      ADp(pp) {
        this.xDp(), this.zcp = pp, this.sessionId = pp.sessionId, this.uC = 0, this.YIp = 0, this.xDp = this.DDp()
      }
      get tC() {
        return this.YIp
      }
      DDp() {
        const pp = this.zcp.ku("*", this.LDp);
        return this.options.IDp && this.zcp.Eu(this.dispose), pp
      }
      YDp(pp, ip) {
        try {
          (0, Yp.bc)(pp) && (ip = (0, Yp.b)(pp, Dp.my.from(ip)));
          const cp = Pp.get(this)[pp];
          if ("function" !== typeof cp) {
            if (this.callbacks.PDp) return void this.callbacks.PDp(pp, ip);
            throw new Error(`No onMessage handler registered for message id ${pp}`)
          }
          cp(ip)
        } catch (cp) {
          this.callbacks.WDp(`Error in onMessage ${pp} with payload ${JSON.stringify(ip)}`, cp)
        } finally {
          this.uC++
        }
      }
      yDp() {
        for (const {
            id: pp,
            payload: ip
          }
          of this.mC) {
          if (this.Ry) break;
          this.YDp(pp, ip)
        }
        this.mC.length = 0
      }
      uR() {
        return this.Ry
      }
      UDp() {
        if (this.SDp || this.Ry) throw new Error("Trying to getOnMessageRegistrationHandler after registration finished");
        return {
          ku: (pp, ip) => {
            if (this.SDp || this.Ry) throw new Error("Trying to call onMessage after registration finished");
            this.ku(pp, ip)
          },
          finishRegistration: () => {
            if (this.Ry) throw new Error("Cannot finish message registration after disposal");
            this.SDp = !0, this.yDp()
          }
        }
      }
      ku(pp, ip) {
        var cp, Op;
        null === (cp = (Op = this.callbacks).wDp) || void 0 === cp || cp.call(Op);
        const op = Pp.get(this);
        for (; pp > op.length;) op[op.length] = null;
        op[pp] = ip
      }
      send(pp, ip) {
        this.vDp(), (0, Ap.C)(ip) ? this.zcp.bC(pp, ip) : this.zcp.send(pp, ip)
      }
      vDp() {
        var pp, ip;
        (this.YIp++, 5 === yp++) && (null === (pp = (ip = this.callbacks).wDp) || void 0 === pp || pp.call(ip), yp = 0)
      }
      YH() {
        this.dispose(), this.zcp.YH()
      }
      leave() {
        this.dispose(), this.zcp.leave()
      }
    }
    let yp = 0;
    var Up = cp(3797);
    class wp extends Wp {
      constructor(pp) {
        super(pp, {
          wDp: () => {
            (0, xp.m)(!0) && (0, Op.yC)()
          },
          WDp: (pp, ip) => {
            var cp;
            null === (cp = (0, Lp.g)()) || void 0 === cp || cp.BU(pp, ip)
          }
        }, {
          IDp: !1
        }), (0, Up.e)(pp)
      }
      RC(pp, ip) {
        return !!(0, Up.h)((0, Up.d)(), this.zcp, pp, ip) && (this.vDp(), !0)
      }
      ADp(pp) {
        this.tDp(), super.ADp(pp), (0, Up.e)(pp)
      }
      YH() {
        super.YH(), this.tDp()
      }
      tDp() {
        this.zcp.DH.Wy.ZE = void 0
      }
    }
    var vp = cp(34),
      tp = cp(1982),
      Hp = cp(1765),
      dp = cp(36674),
      ep = cp(39157),
      jp = cp(38264),
      kp = cp(38033),
      mp = cp(640),
      Rp = cp(38621);

    function qp(pp, ip, cp) {
      const Op = function(pp) {
          const ip = new Int32Array(pp.length * Rp.e);
          return pp.forEach(((pp, cp) => {
            const Op = cp * Rp.e;
            if (4 === pp.length) {
              const [cp, op, Ip, Sp] = pp;
              ip.set([cp, op, Ip, cp, op, Ip, Sp], Op)
            } else {
              const [cp, op, Ip, Sp, xp, Lp, Yp] = pp;
              ip.set([cp, Ip, xp, op, Sp, Lp, Yp], Op)
            }
          })), ip
        }(cp),
        op = (ip, cp, Op, op) => {
          pp.setBlockNoMulti(ip, cp, Op, op, !0)
        };
      pp.client.gameRecorder.isCapturing() ? (0, Rp.rb)(Op, (0, Rp.pb)(Op), op) : pp.HP.WP.Iq(Op, {
        kF: op,
        isHookId: ip => pp.blockChangeHasHooks(ip),
        watched: () => function(pp, ip, cp) {
          const Op = [],
            op = (pp, ip, cp) => {
              Op.push(pp, ip, cp)
            },
            Ip = new Set;
          for (let Sp = 0; Sp < cp.length; Sp += Rp.e)
            for (let ip = (0, mp.Q)(cp[Sp]); ip <= (0, mp.Q)(cp[Sp + 3]); ip++)
              for (let Op = (0, mp.Q)(cp[Sp + 1]); Op <= (0, mp.Q)(cp[Sp + 4]); Op++)
                for (let xp = (0, mp.Q)(cp[Sp + 2]); xp <= (0, mp.Q)(cp[Sp + 5]); xp++) {
                  const cp = `${ip}|${Op}|${xp}`;
                  Ip.has(cp) || (Ip.add(cp), pp.blockDataOwner.forEachDataCell(ip, Op, xp, op))
                }
          return ip.forEachCell(op), Int32Array.from(Op)
        }(pp, ip, Op)
      }), pp.HP.Mpp()
    }

    function Mp(pp) {
      pp.Ncp = new Set, pp.hcp = new Set, pp.Tcp = new Set, pp.acp = new Set, pp.fcp = [], pp.ncp = [], pp.lT = new Set, pp.II = [], pp.hT = []
    }
    class Cp {
      constructor(pp) {
        this.HP = pp
      }
      register(pp) {
        const ip = this.HP,
          cp = (0, Lp.d)();
        pp.ku(Yp.Q, (pp => {
          ip.WP.Ncp.add(pp), ip.WP.hcp.delete(pp)
        })), pp.ku(Yp.X, (pp => {
          ip.WP.hcp.add(pp), ip.WP.Ncp.delete(pp)
        })), pp.ku(Yp.Od, (pp => {
          ip.WP.hcp.delete(pp), ip.WP.Ncp.delete(pp)
        })), pp.ku(Yp.V, (pp => {
          ip.WP.Tcp.add(pp), ip.WP.acp.delete(pp)
        })), pp.ku(Yp._, (pp => {
          ip.WP.acp.add(pp), ip.WP.Tcp.delete(pp)
        })), pp.ku(Yp.Vd, (pp => {
          ip.WP.acp.delete(pp), ip.WP.Tcp.delete(pp)
        })), pp.ku(Yp.R, (pp => {
          (0, Ap.db)(pp, ip.WP.ncp), (0, Ap.db)(pp, ip.WP.fcp), ip.WP.fcp.push(pp)
        })), pp.ku(Yp.Z, (pp => {
          (0, Ap.db)(pp, ip.WP.fcp), (0, Ap.db)(pp, ip.WP.ncp), ip.WP.ncp.push(pp)
        })), pp.ku(Yp.Rd, (pp => {
          (0, Ap.db)(pp, ip.WP.fcp), (0, Ap.db)(pp, ip.WP.ncp)
        })), pp.ku(Yp.ff, (pp => {
          let {
            eo: cp,
            uo: Op
          } = pp;
          Op ? ip.WP.lT.delete(cp) : ip.WP.lT.add(cp)
        })), pp.ku(Yp.bf, (pp => {
          let {
            II: Op,
            SI: op
          } = pp;
          cp.updateWalkThroughRect(ip.NJ, Op, op)
        })), (0, Op.onGameResetOnce)((() => {
          Mp(ip.WP)
        })), pp.ku(Yp.Xb, (pp => {
          jp.e.applyServerUpdate(pp)
        })), pp.ku(Yp.cb, (pp => {
          cp.applyServerBlocks((() => {
            ! function(pp, ip) {
              for (const {
                  dp: cp,
                  jp: Op
                }
                of ip) {
                const ip = kp.d[Op];
                if (ip) {
                  const {
                    compX: Op,
                    compY: op,
                    compZ: Ip,
                    mainMultiblock: Sp
                  } = ip;
                  pp.qE(cp[0] - Op, cp[1] - op, cp[2] - Ip, Sp)
                }
              }
              for (const {
                  dp: cp,
                  jp: Op,
                  kp: op
                }
                of ip) pp.setBlockNoMulti(cp[0], cp[1], cp[2], Op, !0), pp.blockDataOwner.setBlockData(cp[0], cp[1], cp[2], null === op ? void 0 : JSON.parse(op)), pp.blockAdded(cp[0], cp[1], cp[2], Op)
            }(cp, pp)
          })), vp.m.GA("changeBlockFail", pp), cp.client.triggerGameCallback("onChangeBlockFail", pp), vp.m.GA("EditBoard", {
            pos: null
          }), vp.m.GA("EditCodeBlock", {
            pos: null,
            canChangePos: null
          })
        })), pp.ku(Yp.Ab, (pp => {
          cp.applyServerBlocks((() => {
            qp(cp, jp.e, pp)
          }))
        })), pp.ku(Yp.We, (pp => {
          let {
            mp: ip,
            Rp: Op
          } = pp;
          if (cp.lG(ip[0], ip[1], ip[2])) {
            const pp = (0, Lp.d)().nH(ip[0], ip[1], ip[2]);
            (0, Lp.d)().updateMailboxContents(ip[0], ip[1], ip[2], pp, Op)
          }
        })), pp.ku(Yp.ke, (pp => {
          let {
            pos: ip,
            data: Op
          } = pp;
          cp.blockDataOwner.setBlockData(ip[0], ip[1], ip[2], Op), cp.blockAdded(ip[0], ip[1], ip[2], cp.nH(ip[0], ip[1], ip[2]))
        }))
      }
    }
    var Ep = cp(37387),
      Xp = cp(36959),
      lp = cp(38293),
      Qp = cp(38132),
      Jp = cp(38310);
    class Bp {
      constructor(pp, ip) {
        this.HP = pp, this.setUpQueuedEntity = ip
      }
      register(pp) {
        const ip = this.HP,
          cp = (0, Lp.d)();
        pp.ku(Yp.N, (pp => {
          let {
            Jc: ip,
            Bc: cp
          } = pp;
          this.setUpQueuedEntity(ip), ip = (0, Xp.b)(ip), (0, Lp.d)().client.gameRecorder.recordBulletShot(ip, cp), vp.m.GA(`bulletShot|${ip}`, {
            bulletDirections: cp
          })
        })), pp.ku(Yp.$b, (pp => {
          let {
            Ec: ip,
            Xc: cp
          } = pp;
          vp.m.GA("damagedByOtherPlayer", {
            Ec: ip,
            direction: cp
          }, !0)
        })), pp.ku(Yp.kd, (pp => {
          vp.m.GA("playerKilled", pp, !0), (0, Lp.d)().client.gameRecorder.recordPlayerKilled(pp.deadEId, pp.killerEId, pp.withItem, pp.killstreak)
        })), pp.ku(Yp.Hb, (pp => {
          vp.m.GA("customKillfeed", pp, !0), (0, Lp.d)().client.gameRecorder.recordCustomKillfeed(pp.killer, pp.victim, pp.withItem)
        })), pp.ku(Yp.sd, (pp => {
          let {
            Zp: cp,
            zp: Op
          } = pp;
          this.setUpQueuedEntity(cp);
          const op = ip.Yk.Acp(cp);
          null !== op && void 0 !== op && op.isGun() && op.reload(Date.now(), Op)
        })), pp.ku(Yp.fe, (pp => {
          let {
            cc: cp,
            Ep: Op
          } = pp;
          const op = Op ? (0, Jp.g)(ip, Op) : void 0;
          vp.m.GA("sendHitmarker", {
            cc: cp,
            screenPos: op
          }, !0)
        })), pp.ku(Yp.Ac, (pp => {
          let {
            qp: Op,
            Mp: op,
            Xp: Ip,
            lp: Sp,
            Qp: xp,
            Jp: Lp,
            Bp: Yp
          } = pp;
          this.setUpQueuedEntity(Op), Op = (0, Xp.b)(Op);
          const Dp = ip.Yk.ccp(Op);
          if (Dp && (Dp.lastHurtTime = performance.now()), (0, lp.playRigHurt)(ip, Op, Lp), vp.m.GA("lifeformHurt", {
              eId: Op,
              Bp: Yp
            }), op) {
            const pp = (0, Jp.g)(ip, op.Ep);
            vp.m.GA("yourAttackHit", {
              cc: Sp,
              screenPos: pp,
              hitSelf: Op === ip.NJ
            })
          }
          Op === ip.NJ && (cp.shakePlayerCamera(Op, xp / 40, 200), vp.m.GA("closeShopOnDamaged", null), vp.m.GA("damagedByOtherPlayer", {
            Ec: null,
            direction: Lp,
            Qp: xp
          }, !0));
          const Ap = ip.Yk.sH(Op);
          if (Ap && (Ip || Sp)) {
            const pp = [Ap[0], Ap[1] + 1, Ap[2]];
            Ip && (0, Qp.l)(ip, Qp.y, pp, 15), Sp && (0, Qp.l)(ip, Qp.q, pp, 10)
          }
        })), pp.ku(Yp.zc, (pp => {
          let {
            Bi: cp,
            Ni: Op,
            Ti: op
          } = pp;
          (0, Ep.e)(ip).setHealthFrac((0, Xp.b)(cp), op), vp.m.GA("lifeformHealthChanged", {
            eId: (0, Xp.b)(cp),
            Ni: Op,
            Ti: op
          })
        })), pp.ku(Yp.K, (pp => {
          let {
            BI: cp,
            NI: Op
          } = pp;
          (0, Lp.d)().playerAttacked(ip.NJ, cp, Op)
        })), pp.ku(Yp.jb, (() => {
          const pp = ip.Yk.Acp(ip.NJ);
          null !== pp && void 0 !== pp && pp.isChargeable() && pp.finishCharging(!1, Date.now())
        })), pp.ku(Yp.Mb, (pp => {
          let {
            Np: ip,
            Tp: cp,
            bp: Op,
            Oc: op,
            oc: Ip,
            Ic: Sp
          } = pp;
          ip = (0, Xp.b)(ip), (0, Lp.d)().client.updateEffect(ip, cp, {
            displayName: Op,
            icon: op,
            duration: Ip,
            level: Sp
          })
        })), pp.ku(Yp.vd, (pp => {
          let {
            Np: ip,
            Tp: cp
          } = pp;
          ip = (0, Xp.b)(ip), (0, Lp.d)().client.removeEffect(ip, cp)
        })), pp.ku(Yp.Re, (pp => {
          vp.m.GA("ttbEffectMultiplier", pp)
        }))
      }
    }
    var Np = cp(39175),
      Tp = cp(37385),
      fp = cp(4317),
      bp = cp(38317),
      hp = cp(36942),
      ap = cp(36948),
      np = cp(37290),
      Fp = cp(37465),
      gp = cp(38323),
      Gp = cp(39177);
    class rp {
      constructor(pp, ip) {
        this.HP = pp, this.setUpQueuedEntity = ip
      }
      register(pp) {
        const ip = this.HP,
          cp = (0, Lp.d)();
        pp.ku(Yp.Oc, (pp => {
          let {
            eId: cp,
            settings: Op
          } = pp;
          (0, Fp.g)(cp);
          for (const ip in Op)(0, Fp.d)(cp, ip, Op[ip]);
          if ("canSee" in Op && ip.Yk.hpp(cp, "hidingMeshManager")) {
            const pp = ip.Yk.getState(cp, "hidingMeshManager");
            pp.canSee = (0, gp.c)("canSee", Op.canSee), pp._forceUpdate = !0
          }
        })), pp.ku(Yp.B, (pp => {
          let {
            KO: cp,
            VO: Op,
            animationScript: op,
            po: Ip,
            Oo: Sp,
            oo: xp,
            Io: Yp
          } = pp;
          cp = (0, Xp.b)(cp);
          const Dp = null === op && null !== xp ? (0, Np.c)(xp, Yp) : op;
          (0, Lp.d)().client.gameRecorder.recordAnimateEntity(cp, Op, Dp, Ip, Sp), (0, Ep.e)(ip).animations.animateEntity(cp, Op, op, Ip, Sp, xp, Yp), null !== op || cp === ip.NJ && Op === Tp.e.Emote && (0, Lp.d)().client.cameraController.endTemporaryThirdPerson()
        })), pp.ku(Yp.ce, (pp => {
          (0, Gp.c)(pp)
        })), pp.ku(Yp.hd, (pp => {
          for (const ip of pp)(0, bp.y)(ip);
          vp.m.GA("playerCosmeticsUpdated", pp, !0)
        })), pp.ku(Yp.J, (pp => {
          for (const cp of pp)(0, np.f)(ip, cp)
        })), pp.ku(Yp.Rc, (pp => {
          (0, Qp.m)(ip, (0, Ap.s)(pp))
        })), pp.ku(Yp.Sc, (pp => {
          fp.f[pp.nI] ? (0, Qp.m)(ip, {
            ...fp.f[pp.nI],
            pos1: pp.pos1,
            pos2: pp.pos2
          }) : console.error(`Unknown preset id: ${pp.nI}`)
        })), pp.ku(Yp.fd, (pp => {
          var ip, cp;
          let {
            ip: Op,
            cp: op,
            Op: Ip,
            Ip: Sp
          } = pp, {
            xp: xp,
            Lp: Yp
          } = null !== Sp && void 0 !== Sp ? Sp : {};
          const {
            Sp: Dp
          } = null !== Sp && void 0 !== Sp ? Sp : {};
          xp = null !== (ip = xp) && void 0 !== ip ? ip : void 0, Yp = null !== (cp = Yp) && void 0 !== cp ? cp : void 0, "string" === typeof Dp && this.setUpQueuedEntity(Dp), (0, Lp.d)().client.gameRecorder.recordPlaySound(Op, op, Ip, Sp), hp.b.play((0, ap.d)(Op), op, Dp, xp, Yp).rate(Ip)
        })), pp.ku(Yp.Ye, (pp => {
          for (const ip in pp) {
            const Op = pp[ip];
            for (const pp in Op) cp.client.meshCreator.handleParticleSystemUpdate(ip, pp, Op[pp])
          }
        }))
      }
    }
    var Zp = cp(38013),
      zp = cp(37977);
    class sp {
      constructor(pp) {
        this.HP = pp
      }
      register(pp) {
        const ip = this.HP,
          cp = (0, Lp.d)();

        function Op() {
          return ip.Yk.Nip(ip.NJ)
        }
        pp.ku(Yp.kc, (pp => {
          let {
            ao: cp,
            Fo: Op,
            Go: op,
            ro: Ip,
            Zo: Sp,
            zo: xp,
            Ko: Lp,
            Vo: Yp,
            pI: Dp
          } = pp;
          if (!ip.Yk.hpp(cp, "itemState")) return void(0, Zp.h)(ip, cp, [Sp, xp, Lp], Op, {
            amount: op,
            attributes: JSON.parse(Ip),
            Vo: Yp,
            size: Dp
          });
          const Ap = ip.Yk.getState(cp, "itemState");
          Ap.amount = op, Ap.Vo = Yp, Ap.creationTime = Date.now(), (0, zp.setServerPosition)(ip.Yk.getState(cp, "smoothToServerPos"), Sp, xp, Lp)
        })), pp.ku(Yp.$, (pp => {
          (0, Ep.e)(ip).setCantPickUp(pp, !0), ip.Yk.hpp(pp, "itemState") && (ip.Yk.getState(pp, "itemState").Vo = !0)
        })), pp.ku(Yp.Kd, (pp => {
          (0, Ep.e)(ip).setCantPickUp(pp, !1), ip.Yk.hpp(pp, "itemState") && (ip.Yk.getState(pp, "itemState").Vo = !1)
        })), pp.ku(Yp.bd, (pp => {
          let {
            pickUpItems: ip,
            pickUpAckSeq: cp
          } = pp;
          for (const {
              name: op,
              amount: Ip,
              attributes: Sp
            }
            of ip) Op().pickUpItem({
            name: op,
            amount: Ip,
            typeObj: Zp.w[op],
            attributes: Sp
          });
          (0, Lp.d)().client.inventoryPrediction.serverChangeApplied(cp)
        })), pp.ku(Yp.Ae, (pp => {
          let {
            index: cp,
            name: Op,
            amount: op,
            attributes: Ip,
            setSlotAckSeq: Sp
          } = pp;
          const xp = ip.Yk.fip(ip.NJ);
          (cp < xp.playerInventory.numSlots || xp.gI || xp.inCreative) && xp.setItemSlot(cp, Op, op, Ip), (0, Lp.d)().client.inventoryPrediction.serverChangeApplied(Sp)
        })), pp.ku(Yp.ic, (pp => {
          (0, Lp.d)().client.inventoryPrediction.acknowledge(pp)
        })), pp.ku(Yp.A, (pp => {
          let {
            Kc: ip,
            Vc: cp,
            pO: Op,
            iO: op
          } = pp;
          (0, Lp.d)().client.itemDropPrediction.onActionItemDrops(ip, cp, Op, op)
        })), pp.ku(Yp.xb, (pp => {
          Op().clearInventory(), (0, Lp.d)().client.inventoryPrediction.serverChangeApplied(pp)
        })), pp.ku(Yp.Be, (pp => {
          vp.m.GA("setSelectedInventorySlotI", pp, !0)
        })), pp.ku(Yp.ob, (pp => {
          let {
            YI: cp,
            DI: Op,
            AI: op,
            WI: Ip,
            yI: Sp,
            UI: xp,
            wI: Yp,
            vI: Dp
          } = pp;
          const Ap = ip.Yk.fip(ip.NJ);
          if (xp) {
            const {
              HI: pp,
              dI: ip
            } = Dp;
            return (0, Lp.d)().client.inventoryPrediction.K9(ip, (() => {
              Ap.chestRefreshed(Op, op, Ip, Yp, pp)
            })) && vp.m.GA("chestToggleFromServer", !1, !0), void vp.m.GA("chestRefreshedFromServer")
          }(cp || Ap.gI) && (cp ? (Ap.chestOpened(Op, op, Ip, Sp, Yp), null !== Sp && (0, Lp.d)().client.ironChestPasskeyCache.onChestOpened(Ip, Sp)) : Ap.chestClosed(), vp.m.GA("chestToggleFromServer", cp, !0))
        })), pp.ku(Yp.Ib, (pp => {
          let {
            craftingRecipeItemName: Op,
            recipesForItem: op
          } = pp;
          Op ? cp.craftingManager.editRecipesForPlayer(ip.NJ, Op, op) : cp.craftingManager.resetAllPlayerRecipes(ip.NJ), vp.m.GA("craftingRecipesEdited", {
            itemName: Op,
            recipesForItem: op
          })
        })), pp.ku(Yp.zd, (pp => {
          let {
            Zc: ip,
            zc: cp,
            sc: op
          } = pp;
          Op().removeItemName(ip, cp), (0, Lp.d)().client.inventoryPrediction.serverChangeApplied(op)
        })), pp.ku(Yp.yd, (pp => {
          let {
            iI: Op
          } = pp;
          cp.craftingManager.removeRecipes(ip.NJ, Op), vp.m.GA("craftingRecipesEdited", {
            itemName: Op,
            recipesForItem: []
          })
        }))
      }
    }
    var Kp = cp(6605),
      Vp = cp(37636),
      ii = cp(343),
      ci = cp.n(ii),
      Oi = cp(4609),
      oi = cp(37907),
      Ii = cp(38468),
      Si = cp(37634);
    class xi {
      constructor(pp, ip) {
        this.HP = pp, this.setUpQueuedEntity = ip
      }
      register(pp) {
        const ip = this.HP,
          cp = (0, Lp.d)();
        pp.ku(Yp.Ne, (pp => {
          let {
            bi: cp,
            ai: op,
            ni: Ip,
            Fi: Sp
          } = pp;
          const xp = [op, Ip, Sp];
          ip.Yk.setPosition(ip.NJ, xp), (0, Op.sendColyMessage)(Yp.xg, {
            kL: cp,
            mL: Oi.e
          }), vp.m.GA("localPlayerTeleported", {
            pos: xp,
            isCorrection: !1
          })
        })), pp.ku(Yp.Xc, (pp => {
          let {
            OS: ip,
            oS: cp,
            IS: Op,
            SS: op
          } = pp;
          this.setUpQueuedEntity(ip);
          const Ip = [cp, Op, op];
          vp.m.GA(`otherPlayerTeleported|${ip}`, {
            pos: Ip
          })
        })), pp.ku(Yp.ld, (pp => {
          let {
            jo: cp,
            ko: op,
            Ro: Ip,
            qo: Sp,
            Mo: xp,
            Co: Lp,
            Eo: Dp,
            Qo: Ap,
            Xo: Pp,
            fo: Wp
          } = pp;
          const yp = [op, Ip, Sp];
          ip.Yk.setPosition(ip.NJ, yp);
          const Up = ip.Yk.xip(ip.NJ),
            wp = ip.Yk.fn(ip.NJ);
          ci().set(wp.ZN, 0, 0, 0), ci().set(wp.zN, 0, 0, 0), ci().set(wp.tw, xp, Lp, Dp), wp.pT(), Up._flying = null !== Wp, Wp ? (Up.flyAccel.bo = Wp.bo, Up.flyAccel.ho = Wp.ho) : Up.flyAccel.reset(), Ap && Up.movementType === Kp.k.GLIDING && (Up.Jo = Ap.Jo, ci().copy(Up.Bo, Ap.Bo)), (0, Op.sendColyMessage)(Yp.xg, {
            kL: cp,
            mL: Oi.e
          }), vp.m.GA("localPlayerTeleported", {
            pos: yp,
            isCorrection: !0
          })
        })), pp.ku(Yp.Fe, (pp => {
          let {
            vehicleEId: ip,
            overrides: cp
          } = pp;
          (0, Lp.d)().applyRiddenVehicleSettingOverrides(ip, cp)
        })), pp.ku(Yp.af, (pp => {
          let {
            hc: cp,
            ac: Op,
            nc: op
          } = pp;
          const Ip = ip.Yk.xip(ip.NJ).physicsState.type === Kp.l.SLEEPING && cp === Kp.l.DEFAULT;
          (0, Lp.d)().updatePositionAndPhysics(ip.NJ, {
            type: cp,
            tier: Op
          }, !0, op), Ip && (0, Lp.d)().updateHeldVehicleStatus()
        })), pp.ku(Yp.fb, (pp => {
          let {
            Qi: cp,
            Ji: Op
          } = pp;
          ip.Yk.Jip(ip.NJ).setPose(cp, Op)
        })), pp.ku(Yp.le, (pp => {
          const {
            fi: cp,
            jcp: Op
          } = (0, Vp.g)([pp[0], pp[1], pp[2]]);
          Si.c.setLookDirection(ip, cp, Op), (0, oi.p)(cp, Op);
          const op = ip.Yk.Jip(ip.NJ);
          op && (op.heading = cp)
        })), pp.ku(Yp.ne, (pp => {
          cp.client.cameraController.setCameraZoom(pp)
        })), pp.ku(Yp.He, (pp => {
          let {
            lc: Op,
            Qc: op
          } = pp;
          cp.shakePlayerCamera(ip.NJ, Op, op)
        })), pp.ku(Yp.oc, (pp => {
          ip.Yk.Jip(ip.NJ).jumpMultiplier.setMultiplierType("jumpEffectAmount", pp)
        })), (0, Op.onGameResetOnce)((() => {
          ip.Yk.Jip(ip.NJ).jumpMultiplier.setMultiplierType("jumpEffectAmount", 1)
        })), pp.ku(Yp.F, (pp => {
          ip.Yk.fn(ip.NJ).applyImpulse(pp)
        })), pp.ku(Yp.Ge, (pp => {
          const cp = ip.Yk.fn(ip.NJ);
          ci().set(cp.ZN, 0, 0, 0), ci().set(cp.zN, 0, 0, 0), ci().copy(cp.tw, pp), cp.pT()
        })), (0, Op.onGameResetOnce)((() => {
          (0, Ii.setFloatingYValue)(ip.Yk.getState(ip.NJ, "physics"), ip.Yk.xZ(ip.NJ), null)
        })), pp.ku(Yp.Nb, (pp => {
          let {
            Fc: cp,
            gc: Op,
            Gc: op
          } = pp;
          const Ip = (0, Xp.b)(cp);
          if (Ip === ip.NJ) {
            const pp = ip.Yk.xZ(ip.NJ).position;
            op ??= Math.floor(pp[1]) - 1, (0, Ii.setFloatingYValue)(ip.Yk.getState(ip.NJ, "physics"), ip.Yk.xZ(ip.NJ), Op ? op : null)
          }(0, Ep.e)(ip).setFloating(Ip, Op, op);
          const Sp = ip.Yk.getState(Ip, "floating");
          Sp && (Sp.isFloating = Op, Sp.Gc = Op ? op : null)
        }))
      }
    }

    function Li(pp, ip, cp, Op, op) {
      let Ip = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (!pp.Yk.Bip(pp.NJ)) return console.log("Got resync inven but don't have inven component"), void ip.acknowledge(Op);
      Ip && console.error("Had to sync inven"), ip.K9(Op, op) && cp.GA("chestToggleFromServer", !1, !0), cp.GA("syncedInvenFromServer")
    }
    var Yi = cp(39190),
      Di = cp(39193),
      Ai = cp(1989);
    var Pi = cp(4591);

    function Wi(pp) {
      const ip = pp.WP;
      let cp = 0,
        op = -1,
        Sp = -1 / 0,
        xp = null,
        Lp = !0;
      const Dp = () => {
        if (++cp % 10 !== 0) return;
        const Dp = (0, Op.getLastReceivedPacketId)();
        if (Dp <= op) return;
        const [Ap, Pp, Wp] = pp.Yk.sH(pp.NJ), yp = ! function(pp) {
          var ip;
          let cp = null === (ip = pp.Yk.qcp(pp.NJ)) || void 0 === ip ? void 0 : ip.vy;
          if (void 0 === cp) return !1;
          const Op = new Set;
          for (; void 0 !== cp && !Op.has(cp);) {
            var op;
            Op.add(cp);
            const ip = pp.Yk.getState(cp, "smoothToServerPos"),
              Ip = Array.isArray(ip) ? null : null === ip || void 0 === ip ? void 0 : ip.serverPosition;
            if (Ip) {
              const ip = pp.Yk.sH(cp);
              if (Math.abs(ip[0] - Ip[0]) > 10 || Math.abs(ip[1] - Ip[1]) > 10 || Math.abs(ip[2] - Ip[2]) > 10) return !0
            }
            cp = null === (op = pp.Yk.qcp(cp)) || void 0 === op ? void 0 : op.vy
          }
          return !1
        }(pp) && function(pp, ip, cp, Op) {
          const op = Ip.g.Qy;
          for (let Ip = 0; Ip < pp.length; Ip++) {
            const Sp = pp[Ip];
            if (!(0, Pi.g)(ip, cp, Op, Sp[0] * op, Sp[1] * op, Sp[2] * op)) return !1
          }
          return !0
        }(ip.Aw.qy, Ap, Pp, Wp), Up = null === xp || Math.abs(Ap - xp[0]) > 8 || Math.abs(Pp - xp[1]) > 8 || Math.abs(Wp - xp[2]) > 8, wp = !Lp || Up || performance.now() - Sp >= 1e4;
        Lp = yp, yp && wp && (op = Dp, Sp = performance.now(), xp = [Ap, Pp, Wp], (0, Op.sendColyMessage)(Yp.bg, {
          Qx: Dp
        }))
      };
      return pp.on("LP", Dp), () => {
        pp.off("LP", Dp)
      }
    }
    var yi = cp(39201),
      Ui = cp(1538),
      wi = cp(2847),
      vi = cp(1827),
      ti = cp(3003),
      Hi = cp(4882);
    class di {
      constructor(pp, ip, cp) {
        this.HP = pp, this.gameNameWithVariation = ip, this.connectionResume = cp, this.stopChunkReports = () => {}, this.replayResume = null
      }
      clearUiRequestsAndQTEs() {
        Hi.b.reset(), (0, Yi.c)()
      }
      startChunkReports() {
        const pp = function(pp) {
            let ip = null,
              cp = -1 / 0,
              op = null;
            const Ip = () => {
                op = null;
                const Ip = Math.ceil(pp.zC[0]),
                  Sp = Math.ceil(pp.zC[1]);
                ip && ip[0] === Ip && ip[1] === Sp || (ip = [Ip, Sp], cp = performance.now(), (0, Op.sendColyMessage)(Yp.$f, {
                  Px: Ip,
                  Wx: Sp
                }))
              },
              Sp = () => {
                null === op && (op = setTimeout(Ip, Math.max(0, cp + 250 - performance.now())))
              };
            return Ip(), pp.on("addRemoveDistanceChanged", Sp), () => {
              pp.off("addRemoveDistanceChanged", Sp), null !== op && (clearTimeout(op), op = null)
            }
          }(this.HP.WP),
          ip = Wi(this.HP);
        this.stopChunkReports = () => {
          pp(), ip()
        }
      }
      restartChunkStreaming() {
        (0, oi.i)(this.HP, (0, Lp.d)().recentChunkEdits.chunksEditedSince(this.connectionResume.getDroppedAt() - yi.d)), this.startChunkReports()
      }
      register(pp) {
        const ip = this.HP,
          cp = (0, Lp.d)();
        pp.ku(Yp.Lc, (pp => {
          tp.c.applyNewClientOptions(pp)
        })), pp.ku(Yp.ed, (pp => {
          wi.c.onReceiveColyseusPing(pp)
        })), pp.ku(Yp.re, (pp => {
          let {
            key: ip,
            value: cp
          } = pp;
          (0, Hp.setCookie)(this.gameNameWithVariation, ip, cp)
        })), pp.ku(Yp.xe, (pp => {
          vp.m.GA("setDiscordReportKey", pp)
        })), (0, Op.onGameResetOnce)((() => {
          this.stopChunkReports()
        })), pp.ku(Yp.ec, (op => {
          const {
            Ap: Ip,
            Pp: Sp
          } = op;
          if ((0, Op.setAdjustment)(Sp), this.connectionResume.onInitialInfo(op.Wp, op.yp), Op.offlineInputReplay.eC(op.Up), this.connectionResume.isResuming()) {
            console.log("Resumed the connection as eId", Ip);
            try {
              null === op.wp && (0, Lp.d)().client.inventoryPrediction.dropPending(), this.stopChunkReports(), Mp(ip.WP), tp.c.apply({
                shopInfo: null,
                _shopVersion: Ai.b
              });
              const cp = ip.Yk.fip(ip.NJ);
              cp.gI && (cp.chestClosed(), vp.m.GA("chestToggleFromServer", !1, !0)), this.clearUiRequestsAndQTEs(), vp.m.GA("initInfoReceived", pp)
            } finally {
              const pp = null === op.wp ? null : {
                sync: null,
                endSeq: null
              };
              this.replayResume = pp, this.connectionResume.onResumeInitialInfo(op.wp, (() => {
                pp.endSeq = (0, Lp.d)().client.inventoryPrediction.lastActionSeq
              })), null === pp && this.restartChunkStreaming()
            }
          } else console.log("Local client is eId", Ip), vi.c.markAdmitted(), (0, oi.j)(ip), vp.m.GA("loadingScreenState", "loadingPage:loadingWorld"), ip.Fpp = Ip, ip.Yk.hpp(ip.NJ, ip.Yk.names.entityName) && ip.Yk.HJ(ip.NJ, ip.Yk.names.entityName), (0, Lp.d)().setEntityName(ip.Fpp, (0, Lp.d)().getRawEntityName(ip.NJ)), ip.QJ[ip.Fpp] = {}, ip.Yk.vJ(ip.NJ, ip.Yk.names.entityName), vp.m.GA("initInfoReceived", pp), this.startChunkReports(), cp.client.onServerConnectionFinalised()
        })), pp.ku(Yp.ae, (() => {
          this.connectionResume.isResuming() ? this.connectionResume.onResumed((() => {
            const pp = this.replayResume;
            if (this.replayResume = null, !pp) return;
            this.restartChunkStreaming();
            const {
              inventoryPrediction: cp
            } = (0, Lp.d)().client, {
              sync: op
            } = pp, Ip = new Set(Op.offlineInputReplay.takeDroppedActions());
            if (op) {
              var Sp;
              const Op = null !== (Sp = pp.endSeq) && void 0 !== Sp ? Sp : cp.lastActionSeq;
              cp.forget((pp => pp > op.dI && pp <= Op || Ip.has(pp))), Li(ip, cp, vp.m, op.dI, op.load)
            } else cp.dropPending(), cp.askForSnapshot()
          })) : console.warn("ResumeComplete arrived without a resume")
        })), pp.ku(Yp.Je, (pp => {
          let {
            FI: cp,
            zI: Op,
            dI: op
          } = pp;
          const {
            inventoryPrediction: Ip
          } = (0, Lp.d)().client, Sp = () => {
            ip.Yk.fip(ip.NJ).loadFromString(cp)
          };
          this.replayResume && (this.replayResume.sync = {
            dI: op,
            load: Sp
          }), Li(ip, Ip, vp.m, op, Sp, Op)
        })), pp.ku(Yp.pd, (pp => {
          let {
            type: ip,
            location1: cp,
            location2: Op,
            location3: op,
            score: Ip
          } = pp;
          (0, ti.logProgressionEvent)({
            type: ip,
            location1: cp,
            location2: Op,
            location3: op,
            score: Ip
          })
        })), pp.ku(Yp._d, (pp => {
          let {
            type: ip,
            resourceType: cp,
            amount: Op,
            category: op,
            itemName: Ip
          } = pp;
          (0, ti.logResourceEvent)({
            type: ip,
            resourceType: cp,
            amount: Op,
            category: op,
            itemName: Ip
          })
        })), pp.ku(Yp.wc, (pp => {
          let {
            leaveEventType: ip,
            category: cp,
            subCategory: Op,
            value: op
          } = pp;
          (0, ti.updateLeaveValue)({
            leaveEventType: ip,
            category: cp,
            subCategory: Op,
            value: op
          })
        })), pp.ku(Yp.Fb, (pp => {
          let {
            cat1: ip,
            cat2: cp,
            cat3: Op,
            value: op
          } = pp;
          (0, ti.logCustomAnalyticsEvent)({
            cat1: ip,
            cat2: cp,
            cat3: Op,
            value: op
          })
        })), pp.ku(Yp.qc, (pp => {
          (0, Lp.d)().client.leaveGameUnwanted({
            reason: pp,
            requiresRefresh: !1,
            canReconnect: !1,
            automaticallyReconnect: !1
          }), (0, Ui.navigatePreserveSearch)("/")
        })), pp.ku(Yp.ge, (pp => {
          vp.m.GA("serverUpdating", Date.now() + pp, !0)
        })), pp.ku(Yp.Kc, Di.d), pp.ku(Yp.Ec, (pp => {
          console.error(`[logErrorToConsole]: ${pp}`)
        }))
      }
    }
    var ei = cp(39208),
      ui = cp(39215),
      ji = cp(1014),
      ki = cp(39210),
      mi = cp(2479),
      Ri = cp(3750);
    class qi {
      constructor(pp, ip) {
        this.HP = pp, this.clientApi = ip
      }
      register(pp) {
        const ip = this.HP,
          cp = (0, Lp.d)();
        pp.ku(Yp.lb, (pp => {
          let {
            chatMsgId: ip,
            content: cp,
            chatterEId: Op
          } = pp;
          vp.m.GA("chat", {
            serverChatMsgId: ip,
            content: cp,
            chatterEId: Op
          }, !0)
        })), pp.ku(Yp.Qe, (pp => {
          vp.m.GA("TopRightHelper", pp, !0)
        })), pp.ku(Yp.Me, (pp => {
          (0, ei.b)(pp)
        })), pp.ku(Yp.uc, (pp => {
          let {
            category: ip,
            timeframe: cp,
            data: Op
          } = pp;
          vp.m.GA("leaderboardResponse", {
            category: ip,
            timeframe: cp,
            data: Op
          })
        })), pp.ku(Yp.Ie, (() => {
          vp.m.GA("showShopTutorial", null, !0)
        })), pp.ku(Yp.od, (pp => {
          vp.m.GA("progressBarUpdate", pp, !0)
        })), pp.ku(Yp.fc, (pp => {
          vp.m.GA("middleScreenBarInitiate", {
            duration: pp.cI,
            OI: pp.OI,
            horizBarRemOffset: pp.oI
          }, !0)
        })), pp.ku(Yp.Dd, (() => {
          vp.m.GA("middleScreenBarRemove", !0)
        })), pp.ku(Yp.te, (pp => {
          let {
            id: ip,
            position: cp,
            style: Op,
            gi: op,
            ri: Ip
          } = pp;
          vp.m.GA("setDirectionArrow", {
            id: ip,
            position: cp,
            style: Op,
            text: (0, Yp.q)(op),
            ri: Ip
          }, !0)
        })), pp.ku(Yp.wb, (pp => {
          let {
            id: ip
          } = pp;
          vp.m.GA("clearDirectionArrow", {
            id: ip
          }, !0)
        })), pp.ku(Yp.Cb, (pp => {
          (0, Ri.onCosmeticPackGranted)(pp)
        })), pp.ku(Yp.Vc, (pp => {
          let {
            id: ip,
            sp: cp
          } = pp;
          const {
            type: op,
            params: Ip
          } = (0, ui.e)(cp), Sp = {
            ...Ip
          };
          for (const Op of ui.b) Op in Sp && Sp[Op] && (Sp[Op] = (0, Yp.q)(Sp[Op]));
          Hi.b.queueQTE(ip, op, Sp).getResult().then((pp => {
            "boolean" === typeof pp && (0, Op.sendColyMessage)(Yp.Rh, {
              qteId: ip,
              qteResponse: pp
            })
          }))
        })), pp.ku(Yp.Gd, (pp => {
          Hi.b.cancelQTE(pp)
        })), (0, Op.onGameResetOnce)((() => {
          Hi.b.reset()
        })), pp.ku(Yp.Wc, (pp => {
          let {
            id: ip,
            clientParameters: cp
          } = pp;
          (0, Yi.d)(ip, cp)
        })), pp.ku(Yp.Hd, (pp => {
          (0, Yi.h)(pp)
        })), pp.ku(Yp.Te, (pp => {
          let {
            text: ip,
            id: cp,
            destructive: op
          } = pp;
          (0, Yi.j)(cp, ip, op, (pp => {
            (0, Op.sendColyMessage)(Yp.rj, {
              XL: cp,
              lL: pp,
              QL: 5
            })
          }))
        })), pp.ku(Yp.$c, (pp => {
          let {
            info: ip
          } = pp;
          vp.m.GA("overShopInfo", ip, !0)
        })), pp.ku(Yp.Rb, (pp => {
          let {
            Yp: cp,
            Dp: Op
          } = pp;
          this.clientApi.openShop(ip.NJ, cp, Op)
        })), pp.ku(Yp.Qb, (pp => {
          let {
            pS: ip,
            iS: cp,
            cS: Op
          } = pp;
          vp.m.GA("flyingMiddleMessage", {
            content: (0, Yp.q)(ip),
            iS: cp,
            cS: Op
          }, !0)
        })), pp.ku(Yp.gf, (pp => {
          const ip = pp === ji.e ? null : {
            message: `Currently loaded as variation: ${pp}`,
            type: "Warning"
          };
          vp.m.GA("showPermanentBottomMessage", ip, !0)
        })), pp.ku(Yp.Vb, (pp => {
          let {
            messageType: ip,
            data: Op
          } = pp;
          (0, ki.f)(ip) ? (0, ki.d)(ip, Op) : ("freeCamPerms" === ip && cp.client.freeCameraController.setPerms(Op.key, Op.value), cp.client.triggerGameCallback("onReceivedMessageFromServer", ip, Op))
        })), pp.ku(Yp.zb, mi.h)
      }
    }
    class Mi {
      constructor(pp, ip, cp, Op) {
        this.gameNameWithVariation = pp, this.HP = cp, this.connectionResume = Op, this.stateReplicationHandler = void 0, this.stateReplicationHandler = new ep.e(ip, this.HP)
      }
      setupStateReplicationHandlers() {
        this.stateReplicationHandler.setup(), (0, Op.onGameResetOnce)((() => {
          this.stateReplicationHandler.dispose()
        }))
      }
      ADp(pp) {
        this.stateReplicationHandler.dispose(), this.stateReplicationHandler = new ep.e(pp, this.HP), this.stateReplicationHandler.setup()
      }
      setupOnMessageListeners(pp, ip) {
        const cp = this.HP,
          Op = pp => {
            this.stateReplicationHandler.setUpIfQueued(pp)
          };
        new di(cp, this.gameNameWithVariation, this.connectionResume).register(pp), new Cp(cp).register(pp), new sp(cp).register(pp), new Bp(cp, Op).register(pp), new rp(cp, Op).register(pp), new qi(cp, ip).register(pp), new xi(cp, Op).register(pp)
      }
    }
    window.addEventListener("beforeunload", (() => {}));
    var Ci = cp(39219),
      Ei = cp(39221),
      Xi = cp(670),
      li = cp(3025);
    class Qi {
      constructor(pp, ip, cp, Op) {
        this.msgHandler = cp, this.listener = Op, this.session = void 0, this.attachedRoom = null, this.detachRoomListeners = null, this.suspended = !1, this.droppedAt = 0, this.session = new Ci.e({
          reconnect: pp,
          isLive: () => Op.isLive(),
          onReconnected: pp => {
            this.resumeOnRoom(pp)
          },
          onGaveUp: (pp, ip) => {
            Op.onGaveUp(pp, ip)
          },
          freeze: ip,
          releaseSeat: ip => {
            pp(ip).then((pp => {
              pp.leave(!0)
            }), (pp => {
              console.warn("Couldn't release the held seat of a game left while reconnecting", pp)
            }))
          }
        })
      }
      onInitialInfo(pp, ip) {
        this.session.onInitialInfo(pp, ip)
      }
      isResuming() {
        return this.session.isResuming()
      }
      getDroppedAt() {
        return this.droppedAt
      }
      onResumeInitialInfo(pp, ip) {
        if (this.session.onResuming(), null === pp) {
          try {
            (0, Lp.d)().client.itemDropPrediction.reset()
          } catch (cp) {
            console.error("Error dropping the item drop predictions on resuming", cp)
          }
          return Op.offlineInputReplay.discard(), void this.setSuspended(!1)
        }(0, Lp.d)().client.itemDropPrediction.onResumeReplayOffered(), Op.offlineInputReplay.replayFrom(pp.tp, ip)
      }
      onResumed(pp) {
        this.setSuspended(!1), (0, Op.resendBeacons)();
        try {
          pp()
        } catch (ip) {
          console.error("Error completing the resume", ip)
        } finally {
          this.session.onResumed()
        }
      }
      attachRoom(pp) {
        const ip = (0, Xi.k)((() => pp.connection.isOpen));
        pp.Eu(ip);
        const cp = new Ei.e((() => {
          this.session.canHoldSeat() && this.listener.isLive() && (console.warn("The game server went silent, reconnecting"), this.onConnectionDropped(pp, "silent"), pp.leave(!1))
        }));
        pp.onStateChange((() => {
          cp.heard()
        }));
        const Op = ip => {
          ip.persisted || pp.leave(!0)
        };
        window.addEventListener("pagehide", Op), pp.Eu(((ip, cp) => {
          if (pp === this.attachedRoom && this.listener.isLive()) return (0, Ip.j)(ip) && this.session.canHoldSeat() ? (console.warn(`Connection to the game server dropped with code ${ip}, reconnecting`), this.listener.onDropped(ip, cp), void this.onConnectionDropped(pp, String(ip))) : void this.listener.onRoomLeft(ip, cp)
        })), this.attachedRoom = pp, this.detachRoomListeners = () => {
          ip(), cp.dispose(), window.removeEventListener("pagehide", Op)
        }
      }
      dispose() {
        this.detachRoom(), this.session.leave(), this.setSuspended(!1)
      }
      setSuspended(pp) {
        pp !== this.suspended && (this.suspended = pp, (0, Op.setConnectionSuspended)(pp), (0, Lp.d)().client.itemDropPrediction.setSuspended(pp))
      }
      detachRoom() {
        var pp;
        null === (pp = this.detachRoomListeners) || void 0 === pp || pp.call(this), this.detachRoomListeners = null, this.attachedRoom = null
      }
      onConnectionDropped(pp, ip) {
        (0, li.reportClientError)("disconnect", "Left room", ip), this.isResuming() || (this.droppedAt = Date.now()), this.detachRoom(), Op.offlineInputReplay.onConnectionLost(), this.setSuspended(!0), this.session.onConnectionLost(pp.reconnectionToken)
      }
      resumeOnRoom(pp) {
        if (!this.listener.isLive()) return console.warn("Left the game while reconnecting, leaving the resumed room"), pp.leave(!0), void this.dispose();
        console.log("Reconnected to the game server, waiting for the game to resume"), (0, Gp.k)(), Op.offlineInputReplay.onConnectionReplaced(), this.msgHandler.ADp(pp), this.listener.onReconnected(pp), this.attachRoom(pp)
      }
    }
    var Ji = cp(3071),
      Bi = cp(3074),
      Ni = cp(1349),
      Ti = cp(1317),
      fi = cp(4770),
      bi = cp(3246),
      ai = cp(1080),
      ni = cp(37934),
      Fi = cp(39226),
      gi = cp(9034),
      Gi = cp(39235),
      ri = cp(1216),
      Zi = cp(36689),
      zi = cp(39241),
      si = cp(1749),
      Ki = cp(2853);

    function Vi(pp) {
      var ip, cp;
      if ("object" !== typeof pp || null === pp) return {
        errType: typeof pp
      };
      const Op = pp;
      return {
        errType: null !== (ip = null === (cp = pp.constructor) || void 0 === cp ? void 0 : cp.name) && void 0 !== ip ? ip : "",
        errName: "string" === typeof Op.name ? Op.name : "",
        eventType: "string" === typeof Op.type ? Op.type : "",
        errStack: "string" === typeof Op.stack ? Op.stack.split("\n").slice(1).join(" | ") : ""
      }
    }

    function pc(pp) {
      if ("undefined" !== typeof ProgressEvent && pp instanceof ProgressEvent) return !0;
      if (!(pp instanceof Error)) return !1;
      const ip = pp.code;
      return "ServerError" === pp.name && void 0 === ip || "AbortError" === pp.name || "seat reservation expired." === pp.message || "early_leave" === pp.message
    }(0, Up.i)((pp => {
      (0, li.reportClientError)("wasm_net", pp)
    }));
    let ic = !0;

    function cc() {
      ic = !1
    }
    class Oc {
      constructor(pp) {
        this.gameNameWithVariation = void 0, this.lobbyName = void 0, this.colyClient = void 0, this.userContext = void 0, this.joinedAt = null, this.joinAdHold = !1, this.checkSendPath = () => {}, this.HP = void 0, this.connectionResume = void 0, this.incomingMsgInitialisor = void 0, this.gameNameWithVariation = pp.gameNameWithVariation, this.lobbyName = pp.lobbyName, this.colyClient = pp.colyClient, this.userContext = pp.userContext
      }
      async connectToServer(pp, ip, cp) {
        tp.c.reset(), pp.QJ = {
          [pp.NJ]: {}
        }, pp.Fpp = void 0, (0, Gp.k)(), (0, Lp.d)().removeAllEntityNames(), (0, Lp.d)().setEntityName(pp.NJ, this.userContext.getPlayerName()), (0, Ni.p)({
          lobbyName: this.lobbyName
        }), console.log("Waiting for clientConnection passed promise to resolve"), this.joinAdHold = (0, si.d)(), console.log("joining server with game", this.gameNameWithVariation, "lobbyName", this.lobbyName);
        const Sp = performance.now();
        cp.aborted || (0, Ti.n)("wasm_core_ready", Sp);
        const xp = (0, Gi.g)(this.userContext, (() => {
          const {
            roomName: Op,
            joinOptions: op
          } = (0, dp.d)(this.userContext, this.gameNameWithVariation, this.lobbyName, ip, (pp => bi.d.isUsingCustomGameTexturePack(pp)));
          return op.joinAdHold = this.joinAdHold, op.renderBackend = (0, Ki.c)(pp.WU), (0, Fi.g)((() => this.colyClient.joinOrCreateUntil(cp, Op, op)), cp)
        }));
        return vp.m.GA("loadingScreenState", "loadingPage:joiningLobby"), await xp.then((ip => {
          if (this.joinedAt = performance.now(), (0, Ti.n)("wasm_joined", this.joinedAt), this.HP = pp, this.joinAdHold) {
            const pp = (0, si.o)((() => {
              ip.send(op.h), (0, Ti.k)(), vi.c.markJoinAdEnded()
            }));
            ip.Eu(pp), (0, Op.onGameResetOnce)(pp)
          }
          const cp = new wp(ip);
          this.connectionResume = new Qi((pp => this.colyClient.reconnect(pp)), (ip => {
            pp.ZC(ip)
          }), cp, {
            isLive: () => (0, Lp.d)().client.getMsgHandler() === cp,
            onDropped: (pp, ip) => {
              (0, Bi.h)(pp) || this.logUnrecognisedConnectionLoss(pp, void 0, {
                site: "drop",
                closeReason: null !== ip && void 0 !== ip ? ip : "",
                sinceJoined: this.sinceJoined()
              })
            },
            onRoomLeft: (pp, ip) => {
              this.onRoomLeft(pp, ip)
            },
            onReconnected: pp => {
              this.incomingMsgInitialisor.ADp(pp), this.checkSendPath = (0, ni.f)(cp, pp, Up.j)
            },
            onGaveUp: (pp, ip) => {
              this.onResumeGaveUp(pp, ip)
            }
          }), this.connectionResume.attachRoom(ip), (0, Op.onGameResetOnce)((() => {
            this.connectionResume.dispose()
          }));
          const Ip = cp.send,
            Sp = cp.ku,
            xp = cp.zcp.send,
            Yp = cp.zcp.ku,
            Dp = cp.YDp;
          this.checkSendPath = (0, ni.f)(cp, ip, Up.j);
          const Ap = setInterval((() => {
            Ip === cp.send && Sp === cp.ku && xp === cp.zcp.send && Yp === cp.zcp.ku && Dp === cp.YDp || cc(), this.checkSendPath()
          }), 1e4);
          return (0, Op.onGameResetOnce)((() => {
            clearInterval(Ap)
          })), {
            success: !0,
            successDetails: cp
          }
        })).catch((ip => {
          if (cp.aborted && ip === (0, ri.e)(cp)) return {
            success: !1,
            failDetails: {
              reason: "Left the game while it loaded",
              requiresRefresh: !1,
              canReconnect: !1
            }
          };
          if (ip instanceof Zi.f) return console.warn("Seat request timed out", this.lobbyName, this.gameNameWithVariation), {
            success: !1,
            failDetails: {
              reason: ip.message,
              requiresRefresh: !1,
              canReconnect: !1,
              gameServerUnreachable: "timedOut",
              joinFailure: (0, zi.c)(ip, ip.leg)
            }
          };
          pp.BU(`Failed to connect to bloxd room, check your internet connection. lobbyName: ${this.lobbyName}, gameNameWithVariation: ${this.gameNameWithVariation} code: ${ip.code}\n`, ip);
          const Op = ip.code;
          return Op === Ip.e.serverUpdating.code ? (this.goToUpdateWaiting(), {
            success: !1,
            failDetails: {
              reason: Ip.e.serverUpdating.text,
              requiresRefresh: !1,
              canReconnect: !0,
              goesToUpdateWaiting: !0
            }
          }) : {
            success: !1,
            failDetails: {
              ...this.onConnectionToServerLost(Op, ip.message, {
                site: "join",
                sinceJoinStart: (0, Bi.d)(performance.now() - Sp),
                ...Vi(ip)
              }, pc(ip)),
              rematch: (0, Fi.c)(ip),
              gameRefused: (0, gi.b)(ip),
              joinFailure: (0, zi.c)(ip, this.colyClient.legReached())
            }
          }
        }))
      }
      setupServerListeners(pp, ip, cp) {
        vp.m.GA("loadingScreenState", "loadingPage:loadingPlayerInfo"), this.incomingMsgInitialisor = new Mi(this.gameNameWithVariation, ip.zcp, pp, this.connectionResume), this.incomingMsgInitialisor.setupStateReplicationHandlers();
        const op = ip.UDp();
        this.incomingMsgInitialisor.setupOnMessageListeners(op, cp), (0, Op.onConnectionToServerReady)(op, ip), this.joinAdHold && vi.c.markAdmissionAwaited(), op.finishRegistration()
      }
      dispose() {
        this.connectionResume.dispose()
      }
      onResumeGaveUp(pp, ip) {
        (0, ai.NU)(new Error("Reconnect failed"), {
          ...(0, Ji.l)(ip),
          game: this.gameNameWithVariation
        }), (0, li.reportClientError)("disconnect", "Reconnect failed", ip.reason), (0, Lp.d)().client.leaveGameUnwanted({
          reason: {
            translationKey: "general:lostConnection"
          },
          canReconnect: !pp,
          canPlayAgain: pp,
          requiresRefresh: !1,
          automaticallyReconnect: !1
        }), (0, Ui.navigatePreserveSearch)("/")
      }
      sinceJoined() {
        return null === this.joinedAt ? "" : (0, Bi.d)(performance.now() - this.joinedAt)
      }
      onRoomLeft(pp, ip) {
        var cp;
        if (pp === Ip.e.gameOrPluginKick.code) return;
        if (console.log(`Left room with code ${pp}`), pp === Ip.e.serverUpdating.code) return (0, li.reportClientError)("disconnect", "Left room", "serverUpdating"), (0, Lp.d)().client.leaveGame(this.getUpdateWaitingUrl()), void this.goToUpdateWaiting();
        this.HP.BU(`Kicked from server with code ${pp}`, new Error);
        const Op = Object.keys(Ip.e).find((ip => Ip.e[ip].code === pp));
        (0, li.reportClientError)("disconnect", "Left room", null !== Op && void 0 !== Op ? Op : String(pp));
        const op = this.onConnectionToServerLost(pp, void 0, {
          site: "leave",
          closeReason: null !== ip && void 0 !== ip ? ip : "",
          sinceJoined: this.sinceJoined()
        });
        (0, Lp.d)().client.leaveGameUnwanted({
          reason: `You have disconnected from the server.\n${op.reason}`,
          canReconnect: op.canReconnect,
          requiresRefresh: op.requiresRefresh,
          automaticallyReconnect: null !== (cp = op.automaticallyReconnect) && void 0 !== cp && cp
        }), (0, Ui.navigatePreserveSearch)("/")
      }
      getUpdateWaitingUrl() {
        return (0, fi.E)(this.gameNameWithVariation, this.lobbyName)
      }
      goToUpdateWaiting() {
        (0, Ui.navigatePreserveSearch)(this.getUpdateWaitingUrl())
      }
      onConnectionToServerLost(pp, ip, cp) {
        var Op;
        let op = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (null !== (Op = ip) && void 0 !== Op && Op.endsWith(Ip.l) && (this.userContext.invalidateTrafficCode(), ip = ip.replace(Ip.l, "")), pp === Ip.e.outdatedVersion.code) return console.error("Outdated client with version ", Sp.c, ", refreshing page"), (0, Hp.reloadBloxd)(), {
          reason: "Outdated client",
          requiresRefresh: !0,
          canReconnect: !1
        };
        if (pp === Ip.e.loadRecaptchaError.code) return console.error("Load recaptcha error, refreshing page"), (0, Hp.reloadBloxd)(), {
          reason: "Failed to load recaptcha",
          requiresRefresh: !0,
          canReconnect: !1
        };
        for (const Sp in Ip.e) {
          const {
            code: cp,
            text: Op,
            canReconnect: op
          } = Ip.e[Sp];
          if (cp === pp) {
            console.log("matched known error", pp, "leaving game");
            return {
              reason: "" !== Op ? Op : ip || `Code: ${pp}`,
              requiresRefresh: !1,
              canReconnect: op,
              automaticallyReconnect: cp === Ip.e.customGameUpdated.code || cp === Ip.e.duplicateLobbyNameError.code
            }
          }
        }
        return console.log("Didn't match known error, leaving game"), (0, Bi.g)(pp) || op ? console.warn("Connection lost", pp, ip) : this.logUnrecognisedConnectionLoss(pp, ip, cp), {
          reason: `Either your internet isn't working or this is a bug.\nCode: ${pp}`,
          requiresRefresh: !1,
          canReconnect: !1,
          gameServerUnreachable: op ? "failed" : void 0
        }
      }
      logUnrecognisedConnectionLoss(pp, ip, cp) {
        (0, ai.NU)(new Error("Unrecognised connection loss"), {
          code: String(pp),
          cause: null !== ip && void 0 !== ip ? ip : "",
          ...cp,
          game: this.gameNameWithVariation,
          ...(0, Bi.l)()
        })
      }
    }
  },
  39157: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => zc,
      h: () => cO
    });
    var Op, op, Ip, Sp, xp, Lp, Yp, Dp, Ap, Pp, Wp, yp, Up, wp, vp, tp, Hp, dp, ep, jp, kp, mp, Rp, qp, Mp, Cp, Ep, Xp, lp, Qp, Jp, Bp, Np, Tp, fp, bp, hp, ap, np, Fp, gp, Gp, rp, Zp, zp, sp, Kp, Vp, ii, ci, Oi, oi, Ii, Si, xi, Li, Yi, Di, Ai, Pi, Wi, yi, Ui, wi, vi, ti, Hi, di, ei, ui, ji, ki, mi, Ri, qi, Mi, Ci, Ei, Xi, li, Qi, Ji, Bi, Ni, Ti, fi, bi, ai, ni, Fi, gi, Gi, ri, Zi, zi, si, Ki, Vi, pc, ic = cp(34),
      cc = cp(37387),
      Oc = cp(39164),
      oc = cp(39169),
      Ic = cp(9253),
      Sc = cp(636),
      xc = cp(629),
      Lc = cp(36994);
    let Yc = (Op = (0, Ic.type)("number"), op = (0, Ic.type)("number"), Ip = (0, Ic.type)("number"), Sp = (0, Ic.type)("number"), xp = (0, Ic.type)("number"), Lp = (0, Ic.type)("number"), Yp = (0, Ic.type)("string"), Dp = class extends Ic.Schema {
        constructor() {
          super(...arguments), (0, Oc.c)(this, "id", Ap, this), (0, Oc.c)(this, "amount", Pp, this), (0, Oc.c)(this, "x", Wp, this), (0, Oc.c)(this, "y", yp, this), (0, Oc.c)(this, "z", Up, this), (0, Oc.c)(this, "size", wp, this), (0, Oc.c)(this, "attributes", vp, this)
        }
      }, Ap = (0, oc.b)(Dp.prototype, "id", [Op], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Pp = (0, oc.b)(Dp.prototype, "amount", [op], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Wp = (0, oc.b)(Dp.prototype, "x", [Ip], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), yp = (0, oc.b)(Dp.prototype, "y", [Sp], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Up = (0, oc.b)(Dp.prototype, "z", [xp], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), wp = (0, oc.b)(Dp.prototype, "size", [Lp], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 1
        }
      }), vp = (0, oc.b)(Dp.prototype, "attributes", [Yp], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "{}"
        }
      }), Dp),
      Dc = (tp = (0, Ic.type)("string"), Hp = (0, Ic.type)("string"), dp = class extends Ic.Schema {
        constructor() {
          super(...arguments), (0, Oc.c)(this, "itemName", ep, this), (0, Oc.c)(this, "enchantmentTier", jp, this)
        }
      }, ep = (0, oc.b)(dp.prototype, "itemName", [tp], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), jp = (0, oc.b)(dp.prototype, "enchantmentTier", [Hp], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), dp),
      Ac = (kp = (0, Ic.type)("string"), mp = (0, Ic.type)("string"), Rp = (0, Ic.type)("number"), qp = (0, Ic.type)("number"), Mp = (0, Ic.type)("number"), Cp = (0, Ic.type)("float32"), Ep = (0, Ic.type)("float32"), Xp = (0, Ic.type)("float32"), lp = (0, Ic.type)("string"), Qp = (0, Ic.type)(["number"]), Jp = (0, Ic.type)("boolean"), Bp = class extends Ic.Schema {
        constructor() {
          super(...arguments), (0, Oc.c)(this, "type", Np, this), (0, Oc.c)(this, "name", Tp, this), (0, Oc.c)(this, "x", fp, this), (0, Oc.c)(this, "y", bp, this), (0, Oc.c)(this, "z", hp, this), (0, Oc.c)(this, "xRotation", ap, this), (0, Oc.c)(this, "yRotation", np, this), (0, Oc.c)(this, "zRotation", Fp, this), (0, Oc.c)(this, "followingEId", gp, this), (0, Oc.c)(this, "followingOffset", Gp, this), (0, Oc.c)(this, "shouldMatchFollowingEntityRotation", rp, this)
        }
      }, Np = (0, oc.b)(Bp.prototype, "type", [kp], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), Tp = (0, oc.b)(Bp.prototype, "name", [mp], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return ""
        }
      }), fp = (0, oc.b)(Bp.prototype, "x", [Rp], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), bp = (0, oc.b)(Bp.prototype, "y", [qp], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), hp = (0, oc.b)(Bp.prototype, "z", [Mp], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), ap = (0, oc.b)(Bp.prototype, "xRotation", [Cp], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), np = (0, oc.b)(Bp.prototype, "yRotation", [Ep], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Fp = (0, oc.b)(Bp.prototype, "zRotation", [Xp], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), gp = (0, oc.b)(Bp.prototype, "followingEId", [lp], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), Gp = (0, oc.b)(Bp.prototype, "followingOffset", [Qp], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new Ic.ArraySchema(0, 0, 0)
        }
      }), rp = (0, oc.b)(Bp.prototype, "shouldMatchFollowingEntityRotation", [Jp], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !0
        }
      }), Bp),
      Pc = (Zp = (0, Ic.type)("float32"), zp = (0, Ic.type)("float32"), sp = (0, Ic.type)("boolean"), Kp = (0, Ic.type)("boolean"), Vp = (0, Ic.type)("float32"), ii = (0, Ic.type)("boolean"), ci = (0, Ic.type)("string"), Oi = (0, Ic.type)("string"), oi = (0, Ic.type)("string"), Ii = (0, Ic.type)("string"), Si = (0, Ic.type)(["number"]), xi = (0, Ic.type)("number"), Li = (0, Ic.type)({
        map: Dc
      }), Yi = class extends Ac {
        constructor() {
          super(...arguments), (0, Oc.c)(this, "scale", Di, this), (0, Oc.c)(this, "speed", Ai, this), (0, Oc.c)(this, "jumping", Pi, this), (0, Oc.c)(this, "crouching", Wi, this), (0, Oc.c)(this, "cameraPitch", yi, this), (0, Oc.c)(this, "armSwinging", Ui, this), (0, Oc.c)(this, "heldItemName", wi, this), (0, Oc.c)(this, "heldItemEnchantmentTier", vi, this), (0, Oc.c)(this, "pose", ti, this), (0, Oc.c)(this, "ridingVehicleEId", Hi, this), (0, Oc.c)(this, "meshOffset", di, this), (0, Oc.c)(this, "baseRenderHeading", ei, this), (0, Oc.c)(this, "armour", ui, this)
        }
      }, Di = (0, oc.b)(Yi.prototype, "scale", [Zp], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 1
        }
      }), Ai = (0, oc.b)(Yi.prototype, "speed", [zp], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Pi = (0, oc.b)(Yi.prototype, "jumping", [sp], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), Wi = (0, oc.b)(Yi.prototype, "crouching", [Kp], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), yi = (0, oc.b)(Yi.prototype, "cameraPitch", [Vp], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Ui = (0, oc.b)(Yi.prototype, "armSwinging", [ii], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), wi = (0, oc.b)(Yi.prototype, "heldItemName", [ci], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), vi = (0, oc.b)(Yi.prototype, "heldItemEnchantmentTier", [Oi], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), ti = (0, oc.b)(Yi.prototype, "pose", [oi], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "standing"
        }
      }), Hi = (0, oc.b)(Yi.prototype, "ridingVehicleEId", [Ii], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), di = (0, oc.b)(Yi.prototype, "meshOffset", [Si], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new Ic.ArraySchema(0, 0, 0)
        }
      }), ei = (0, oc.b)(Yi.prototype, "baseRenderHeading", [xi], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), ui = (0, oc.b)(Yi.prototype, "armour", [Li], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new Ic.MapSchema
        }
      }), Yi),
      Wc = (ji = (0, Ic.type)("string"), ki = (0, Ic.type)("string"), mi = (0, Ic.type)("string"), Ri = (0, Ic.type)("uint8"), qi = class extends Pc {
        constructor() {
          super(...arguments), (0, Oc.c)(this, "variation", Mi, this), (0, Oc.c)(this, "ownerDbId", Ci, this), (0, Oc.c)(this, "metaInfo", Ei, this), (0, Oc.c)(this, "aiState", Xi, this)
        }
      }, Mi = (0, oc.b)(qi.prototype, "variation", [ji], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "default"
        }
      }), Ci = (0, oc.b)(qi.prototype, "ownerDbId", [ki], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), Ei = (0, oc.b)(qi.prototype, "metaInfo", [mi], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return ""
        }
      }), Xi = (0, oc.b)(qi.prototype, "aiState", [Ri], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), qi);
    li = (0, Ic.type)("string"), Qi = (0, Ic.type)("string"), Ji = (0, Ic.type)("string"), Bi = (0, Ic.type)("string"), Ni = class extends Ac {
      constructor() {
        super(...arguments), (0, Oc.c)(this, "meshKind", Ti, this), (0, Oc.c)(this, "meshOpts", fi, this), (0, Oc.c)(this, "pose", bi, this), (0, Oc.c)(this, "leaderboardTop", ai, this)
      }
    }, Ti = (0, oc.b)(Ni.prototype, "meshKind", [li], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), fi = (0, oc.b)(Ni.prototype, "meshOpts", [Qi], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), bi = (0, oc.b)(Ni.prototype, "pose", [Ji], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), ai = (0, oc.b)(Ni.prototype, "leaderboardTop", [Bi], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    });

    function yc(pp) {
      return Object.keys(Ic.Metadata.getFields(pp))
    }
    const Uc = yc(Wc);
    for (const OO of Sc.q)
      if (!Uc.includes(OO)) throw new Error(`Mob Schema is missing a networked property: "${OO}"`);
    const wc = yc((ni = (0, Ic.type)("string"), Fi = (0, Ic.type)("float32"), gi = (0, Ic.type)("float32"), Gi = (0, Ic.type)("float32"), ri = (0, Ic.type)("float32"), Zi = class extends Ac {
      constructor() {
        super(...arguments), (0, Oc.c)(this, "soundName", zi, this), (0, Oc.c)(this, "volume", si, this), (0, Oc.c)(this, "refDistance", Ki, this), (0, Oc.c)(this, "maxHearDist", Vi, this), (0, Oc.c)(this, "rate", pc, this)
      }
    }, zi = (0, oc.b)(Zi.prototype, "soundName", [ni], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return ""
      }
    }), si = (0, oc.b)(Zi.prototype, "volume", [Fi], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return 1
      }
    }), Ki = (0, oc.b)(Zi.prototype, "refDistance", [gi], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return Lc.k
      }
    }), Vi = (0, oc.b)(Zi.prototype, "maxHearDist", [Gi], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return Lc.e
      }
    }), pc = (0, oc.b)(Zi.prototype, "rate", [ri], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return 1
      }
    }), Zi));
    for (const OO of xc.h)
      if (!wc.includes(OO)) throw new Error(`AudioEntity Schema is missing a replicated property: "${OO}"`);
    var vc = cp(38651),
      tc = cp(1251),
      Hc = cp(640),
      dc = cp(38421),
      ec = cp(4341),
      uc = cp(337),
      jc = cp(37479),
      kc = cp(38317),
      mc = cp(2276),
      Rc = cp(37465),
      qc = cp(38686),
      Mc = cp(37624),
      Cc = cp(343),
      Ec = cp.n(Cc),
      Xc = cp(38157),
      lc = cp(37298),
      Qc = cp(38300),
      Jc = cp(38335);
    class Bc {
      constructor(pp, ip) {
        this.bloxd = pp, this.eId = ip, this.HP = void 0, this.colyseusEntity = void 0, this.canSeeSub = void 0, this.canAttackSub = void 0, this.interactableSub = void 0, this.overlayColourSub = void 0, this.opacitySub = void 0, this.zIndexSub = void 0, this.multilineTextBoxSub = void 0, this.previousHidingMeshManagerState = void 0, this.meshKind = void 0, this.meshOpts = void 0, this.leaderboardTop = void 0, this.meshRebuildQueued = !1, this.Ry = !1, this.HP = pp.HP
      }
      initClient(pp) {
        var ip, cp, Op;
        this.colyseusEntity = pp, this.meshKind = pp.meshKind, this.meshOpts = pp.meshOpts, this.leaderboardTop = pp.leaderboardTop, this.HP.Yk.add([pp.x, pp.y, pp.z], 1, 1, null, null, !1, !1, this.eId), this.HP.Yk.vJ(this.eId, "smoothToServerPos");
        const op = "Person" === this.meshKind;
        this.HP.Yk.vJ(this.eId, "meshRotation", {
          isServerControlled: !0,
          ...op ? {
            defaultRotationsPerSecond: .5
          } : {},
          childrenNodeParams: op ? [{
            nodeName: "HeadMesh",
            softTolerance: qc.k,
            hardTolerance: null
          }] : []
        }), this.updateHidingMeshMgr(), this.canSeeSub = ic.m.subscribe(`otherEntitySettings|${this.eId}|canSee`, (pp => {
          this.updateHidingMeshMgr()
        }));
        const Ip = () => {
          const pp = this.HP.Yk.Rip(this.eId);
          if (!pp) return;
          const ip = (0, Mc.g)(this.eId);
          if ("number" === typeof pp.FQ) {
            var cp, Op, op, Ip;
            const Sp = null === (cp = (0, mc.m)("head", null === (op = this.getSpec()) || void 0 === op || null === (Ip = op.opts.textures) || void 0 === Ip ? void 0 : Ip.head)) || void 0 === cp || null === (Op = cp.personModel) || void 0 === Op ? void 0 : Op.fullBody;
            return this.HP.WU.EQ.setPickable(pp.FQ, ip && !Sp), void(0, lc.updatePersonAttachmentPickability)(this.HP, this.eId, ip)
          }
          const Sp = pp.mesh;
          if (Sp)
            for (const xp of [Sp, ...Sp.getChildMeshes(!1)]) "Ow" in xp && !xp.name.startsWith("Cape|") && (xp.Ow = ip)
        };
        this.canAttackSub = ic.m.subscribe(`otherEntitySettings|${this.eId}|canAttack`, Ip), this.interactableSub = ic.m.subscribe(`otherEntitySettings|${this.eId}|interactable`, Ip), this.overlayColourSub = ic.m.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|overlayColour`, (pp => {
          this.updateOverlayColour(pp)
        })), this.opacitySub = ic.m.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|opacity`, (pp => {
          this.updateOpacity(pp)
        })), this.zIndexSub = ic.m.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|zIndex`, (pp => {
          this.updateZIndex(pp)
        }));
        const Sp = this.HP.QJ[this.HP.NJ][this.eId];
        this.updateOverlayColour(null !== (ip = null === Sp || void 0 === Sp ? void 0 : Sp.overlayColour) && void 0 !== ip ? ip : null), this.updateOpacity(null !== (cp = null === Sp || void 0 === Sp ? void 0 : Sp.opacity) && void 0 !== cp ? cp : 1), this.updateZIndex(null !== (Op = null === Sp || void 0 === Sp ? void 0 : Sp.zIndex) && void 0 !== Op ? Op : 0), this.multilineTextBoxSub = (0, Rc.t)(this.HP, this.eId)
      }
      onChangeClient(pp, ip) {
        if ("xRotation" === pp || "yRotation" === pp || "zRotation" === pp)(0, Rc.x)(this.HP, this.eId, pp, ip);
        else if ("pose" === pp) {
          const pp = this.HP.Yk.Jip(this.eId);
          pp && (pp.pose = ip || "standing")
        } else "meshKind" === pp || "meshOpts" === pp ? (this[pp] = ip, this.queueMeshRebuild()) : "name" === pp && "" !== ip ? this.updateHidingMeshMgr() : "leaderboardTop" === pp && (this.leaderboardTop = ip, ic.m.GA(`leaderboardTop|${this.eId}`, ip))
      }
      disposeClient() {
        this.Ry = !0, this.HP.Yk.deleteEntity(this.eId), ic.m.unsubscribe(this.canSeeSub), ic.m.unsubscribe(this.canAttackSub), ic.m.unsubscribe(this.interactableSub), ic.m.unsubscribe(this.overlayColourSub), ic.m.unsubscribe(this.opacitySub), ic.m.unsubscribe(this.zIndexSub), ic.m.unsubscribe(this.multilineTextBoxSub)
      }
      getCurrentHidingMeshMgrState() {
        var pp, ip;
        return {
          canSee: null !== (pp = null === (ip = this.HP.QJ[this.HP.NJ][this.eId]) || void 0 === ip ? void 0 : ip.canSee) && void 0 !== pp && pp,
          name: this.colyseusEntity.name,
          meshKind: this.meshKind,
          meshOpts: this.meshOpts
        }
      }
      updateHidingMeshMgr() {
        var pp, ip, cp;
        const {
          HP: Op
        } = this, {
          Yk: op
        } = Op, Ip = this.getCurrentHidingMeshMgrState();
        if ((0, uc.Td)(this.previousHidingMeshManagerState, Ip)) return;
        if (this.previousHidingMeshManagerState = Ip, op.HJ(this.eId, "hidingMeshManager"), null === (pp = Op.QJ[Op.NJ][this.eId]) || void 0 === pp || !pp.canSee) return;
        const Sp = this.getSpec();
        if (!Sp) return;
        const {
          type: xp,
          opts: Lp
        } = Sp;
        "Person" === xp && (Lp.textures = (0, mc.r)(Lp.textures)), Lp.eId = this.eId, op.vJ(this.eId, "hidingMeshManager", {
          addMeshComponent: () => {
            var pp, ip, cp;
            "Leaderboard" === xp && (Lp.leaderboardTop = this.leaderboardTop);
            const Ip = this.bloxd.client.meshCreator.getEntityMesh(xp, Lp, (pp => {
              var ip, cp;
              if ("number" === typeof pp) {
                var op, Ip, Sp;
                const ip = Op.WU.EQ;
                ip.setEntityId(pp, this.eId);
                const cp = "Person" === xp && (null === (op = (0, mc.m)("head", null === (Sp = Lp.textures) || void 0 === Sp ? void 0 : Sp.head)) || void 0 === op || null === (Ip = op.personModel) || void 0 === Ip ? void 0 : Ip.fullBody);
                return void ip.setPickable(pp, (0, Mc.g)(this.eId) && !cp)
              }
              const Yp = pp;
              for (const xp of [Yp, ...Yp.getChildMeshes(!1)]) void 0 === xp.Ow || xp.name.startsWith("Cape|") || (xp.Ow = (0, Mc.g)(this.eId), xp.metadata ??= new Op.WU.ow, xp.metadata.eId = this.eId);
              this.updateOpacity(null !== (ip = null === (cp = Op.QJ[Op.NJ][this.eId]) || void 0 === cp ? void 0 : cp.opacity) && void 0 !== ip ? ip : 1)
            }));
            if (!Ip) return;
            const {
              FQ: Sp,
              mesh: Yp,
              meshOffset: Dp,
              nameYOffset: Ap,
              modelLoaded: Pp
            } = Ip;
            null === Pp || void 0 === Pp || Pp.then((() => {
              var pp;
              (null === (pp = op.Rip(this.eId)) || void 0 === pp ? void 0 : pp.mesh) === Yp && (this.previousHidingMeshManagerState = null, this.updateHidingMeshMgr())
            }));
            const Wp = null === Sp ? null : Op.WU.EQ.QOp(Sp, 0);
            if (op.vJ(this.eId, op.names.mesh, {
                FQ: Sp,
                iOp: Wp,
                mesh: Yp,
                bxp: !1,
                oOp: "Leaderboard" !== xp,
                offset: Dp.slice(),
                fxp: "ParticleEmitter" === xp && Lp.followTargetMeshOffset ? pp => {
                  var ip;
                  Ec().copy(pp, Dp);
                  const cp = null === (ip = op.qcp(this.eId)) || void 0 === ip ? void 0 : ip.vy,
                    Op = void 0 === cp ? null : op.Jip(cp);
                  if (Op) {
                    var Ip, Sp;
                    const ip = this.bloxd.getEntityHeading(null !== (Ip = Op.ridingVehicleEId) && void 0 !== Ip ? Ip : cp, !0),
                      op = Math.sin(ip),
                      xp = Math.cos(ip);
                    pp[0] += Op.meshOffset[0] * xp + Op.meshOffset[2] * op, pp[1] += Op.meshOffset[1], pp[2] += Op.meshOffset[2] * xp - Op.meshOffset[0] * op;
                    const Lp = null !== (Sp = Op.ridingVehicleEId) && void 0 !== Sp ? Sp : null;
                    null !== Lp && (0, Jc.d)(this.HP, Lp, pp)
                  }
                } : null
              }), "Person" === xp) {
              var yp, Up, wp, vp;
              op.vJ(this.eId, op.names.meshAttachments, {
                personFullBody: null !== (yp = null === (Up = (0, mc.m)("head", null === (vp = Lp.textures) || void 0 === vp ? void 0 : vp.head)) || void 0 === Up || null === (wp = Up.personModel) || void 0 === wp ? void 0 : wp.fullBody) && void 0 !== yp && yp
              });
              for (const pp of tc.u) {
                var tp, Hp, dp;
                const ip = null === (tp = Lp.textures) || void 0 === tp ? void 0 : tp[pp];
                ip && null !== (Hp = (0, mc.m)(pp, ip)) && void 0 !== Hp && null !== (dp = Hp.attachments) && void 0 !== dp && dp.length && kc.d.Player.meshApi.updatePlayerCosmetic(this.eId, Sp, pp, ip)
              }
              op.vJ(this.eId, op.names.moveState), op.vJ(this.eId, "updateWalkingState", {
                FQ: Sp,
                iOp: Wp,
                walkingLegSwingDuration: qc.s
              }), op.vJ(this.eId, "humanoidMesh", {
                FQ: Sp,
                iOp: Wp,
                heldItemPositionParams: {},
                maxWalkingAngleOverride: null
              }), op.vJ(this.eId, "animator", {
                FQ: Sp,
                iOp: Wp,
                modelLifeformType: "Player"
              }), Qc.e.hasAnimation("Person") && op.vJ(this.eId, "rigAnimation", {
                target: "Person",
                FQ: Sp
              }), op.Jip(this.eId).pose = this.colyseusEntity.pose || "standing"
            } else if ("BloxdBlock" === xp && null !== Sp) {
              op.vJ(this.eId, "animator", {
                FQ: Sp,
                iOp: Wp,
                modelLifeformType: null
              });
              const pp = (0, dc.q)(Lp.blockName);
              null !== pp && op.vJ(this.eId, "rigAnimation", {
                target: pp,
                FQ: Sp
              })
            }
            op.LLp(this.eId, "entityName", {
              name: this.colyseusEntity.name,
              nameYOffset: Ap
            }), this.bloxd.setEntityName(this.eId, this.colyseusEntity.name), !0 === Lp.autoRotate && (op.HJ(this.eId, "meshRotation"), op.vJ(this.eId, "autoRotate"));
            const {
              lineToEId: ep
            } = Lp;
            (0, Hc.G)(ep) || op.vJ(this.eId, "lineToEntity", {
              lineToEId: ep
            });
            const jp = Op.QJ[Op.NJ][this.eId];
            this.updateOverlayColour(null !== (pp = null === jp || void 0 === jp ? void 0 : jp.overlayColour) && void 0 !== pp ? pp : null), this.updateOpacity(null !== (ip = null === jp || void 0 === jp ? void 0 : jp.opacity) && void 0 !== ip ? ip : 1), this.updateZIndex(null !== (cp = null === jp || void 0 === jp ? void 0 : jp.zIndex) && void 0 !== cp ? cp : 0)
          },
          removeMeshComponent: () => {
            "Person" !== xp && "BloxdBlock" !== xp || op.HJ(this.eId, "rigAnimation"), op.HJ(this.eId, op.names.mesh), op.hpp(this.eId, op.names.meshAttachments) && op.HJ(this.eId, op.names.meshAttachments), op.HJ(this.eId, "entityName"), op.HJ(this.eId, "autoRotate"), op.HJ(this.eId, "lineToEntity"), "Person" === xp ? (op.HJ(this.eId, op.names.moveState), op.HJ(this.eId, "updateWalkingState"), op.HJ(this.eId, "humanoidMesh"), op.HJ(this.eId, "animator")) : "BloxdBlock" === xp && op.HJ(this.eId, "animator")
          },
          hideDist: null !== (ip = Lp.hideDist) && void 0 !== ip ? ip : 80,
          movingHideDist: null !== (cp = Lp.hideDist) && void 0 !== cp ? cp : 120,
          displayOutsideLoadedChunk: Lp.hideDist > 100,
          immediatelyUpdate: !0,
          dL: "BloxdBlock" === xp ? Lp.blockName : xp
        })
      }
      queueMeshRebuild() {
        this.meshRebuildQueued || (this.meshRebuildQueued = !0, queueMicrotask((() => {
          this.meshRebuildQueued = !1, this.Ry || this.updateHidingMeshMgr()
        })))
      }
      getSpec() {
        return (0, ec.h)({
          meshKind: this.meshKind,
          meshOpts: this.meshOpts
        })
      }
      updateOverlayColour(pp) {
        var ip, cp;
        if ("Person" !== this.meshKind) return;
        let Op = new jc.b(0, 0, 0, 0);
        if (null !== pp) {
          const ip = (0, uc.$)(pp);
          Op = new jc.b(ip[0] / 255, ip[1] / 255, ip[2] / 255, .5)
        }
        const op = null !== (ip = null === (cp = this.HP.Yk.Rip(this.eId)) || void 0 === cp ? void 0 : cp.FQ) && void 0 !== ip ? ip : null;
        null !== op && kc.d.Player.meshApi.updateMeshOverlayColour(op, Op)
      }
      updateZIndex(pp) {
        var ip;
        if ("Person" !== this.meshKind) return;
        const cp = null === (ip = this.HP.Yk.Rip(this.eId)) || void 0 === ip ? void 0 : ip.FQ;
        "number" === typeof cp && this.HP.WU.EQ.setRenderingGroupId(cp, pp)
      }
      updateOpacity(pp) {
        const ip = this.HP.Yk.Rip(this.eId);
        ip && ("number" !== typeof ip.FQ ? ip.mesh && "ParticleEmitter" !== this.meshKind && (0, Xc.g)(ip.mesh, pp) : kc.d.Player.meshApi.updateMeshOpacity(ip.FQ, pp))
      }
    }
    var Nc = cp(39160);
    class Tc {
      constructor(pp, ip) {
        this.eId = ip, this.HP = void 0, this.schema = void 0, this.HP = pp.HP
      }
      initClient(pp) {
        this.schema = pp, this.HP.Yk.add([pp.x, pp.y, pp.z], .1, .1, null, null, !1, !1, this.eId), this.HP.Yk.vJ(this.eId, "smoothToServerPos"), Nc.e.add(this.eId, this.copyOpts())
      }
      onChangeClient(pp) {
        xc.h.includes(pp) && Nc.e.update(this.eId, this.copyOpts())
      }
      disposeClient() {
        Nc.e.remove(this.eId), this.HP.Yk.deleteEntity(this.eId)
      }
      copyOpts() {
        const {
          soundName: pp,
          volume: ip,
          refDistance: cp,
          maxHearDist: Op,
          rate: op
        } = this.schema;
        return {
          soundName: pp,
          volume: ip,
          refDistance: cp,
          maxHearDist: Op,
          rate: op
        }
      }
    }
    var fc = cp(3774),
      bc = cp(36959),
      hc = cp(6605),
      ac = cp(38013),
      nc = cp(2849),
      Fc = cp(38365),
      gc = cp(9211),
      Gc = cp(38693),
      rc = cp(37977),
      Zc = cp(3025);
    class zc {
      constructor(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
          Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => performance.now();
        this.zcp = pp, this.HP = ip, this.setupBudgetMs = cp, this.now = Op, this.createStateCallbacks = void 0, this.roomStateCallbacks = void 0, this.allItems = {}, this.detachers = new Map, this.deferredSetups = new Map, this.queuedSetups = new Map, this.promotedSetups = new Set, this.setupBudgetLeftMs = void 0, this.lastRefillMs = void 0, this.roomState = void 0, this.Ry = !1, this.onFrame = () => {
          this.setUpQueuedEntities(!0)
        }, this.gH = () => {
          this.setUpQueuedEntities(this.now() - this.lastRefillMs > 100)
        }, this.setUpPromoted = () => {
          for (const pp of this.promotedSetups) {
            this.promotedSetups.delete(pp);
            const ip = this.queuedSetups.get(pp);
            ip && (this.queuedSetups.delete(pp), this.timedSetup(ip, pp))
          }
        }, this.createStateCallbacks = (0, gc.getStateCallbacks)(pp), this.roomStateCallbacks = this.createStateCallbacks(pp.state), this.roomState = pp.state, this.setupBudgetLeftMs = cp, this.lastRefillMs = Op()
      }
      setup() {
        this.setupEntityHandlers(), this.setupItemHandlers(), this.zcp.onStateChange(this.setUpPromoted), this.HP.on("beforeInputs", this.onFrame), this.HP.on("LP", this.gH)
      }
      setUpQueuedEntities(pp) {
        var ip;
        if ((null === (ip = (0, nc.d)().client.getMsgHandler()) || void 0 === ip ? void 0 : ip.zcp) !== this.zcp) return this.HP.off("beforeInputs", this.onFrame), this.HP.off("LP", this.gH), this.queuedSetups.clear(), void this.promotedSetups.clear();
        if (pp && (this.setupBudgetLeftMs = this.setupBudgetMs, this.lastRefillMs = this.now()), this.setUpPromoted(), 0 !== this.queuedSetups.size)
          for (Ec().copy(sc, this.HP.Yk.sH(this.HP.NJ)); this.setupBudgetLeftMs > 0;) {
            const pp = this.nearestQueued(sc);
            if (null === pp) return;
            this.setUpIfQueued(pp), this.setUpPromoted()
          }
      }
      nearestQueued(pp) {
        let ip = null,
          cp = 1 / 0;
        return this.queuedSetups.forEach(((Op, op) => {
          const Ip = function(pp, ip) {
            return (ip.x - pp[0]) ** 2 + (ip.y - pp[1]) ** 2 + (ip.z - pp[2]) ** 2
          }(pp, Op);
          (null === ip || Ip < cp) && (ip = op, cp = Ip)
        })), ip
      }
      setUpOrQueue(pp, ip) {
        0 === this.queuedSetups.size && this.setupBudgetLeftMs > 0 || this.mustSetUpNow(pp, ip) ? this.timedSetup(pp, ip) : this.queuedSetups.set(ip, pp)
      }
      mustSetUpNow(pp, ip) {
        const cp = this.HP.Fpp;
        if (ip === cp) return !0;
        const Op = this.roomState.entities.get(cp);
        return !(!Op || Op.ridingVehicleEId !== ip && Op.followingEId !== ip) || (Kc(pp.type) === vc.b || (0, nc.d)().getFollowingEntities(ip).length > 0)
      }
      setUpIfQueued(pp) {
        const ip = this.queuedSetups.get(pp);
        ip && (this.queuedSetups.delete(pp), this.timedSetup(ip, pp))
      }
      promoteIfQueued(pp) {
        null !== pp && this.queuedSetups.has(pp) && this.promotedSetups.add(pp)
      }
      timedSetup(pp, ip) {
        const cp = this.now();
        this.setupEntity(pp, ip), this.setupBudgetLeftMs -= this.now() - cp
      }
      setupEntityHandlers() {
        this.roomStateCallbacks.entities.Lk(((pp, ip) => {
          this.HP.Fpp ? this.setUpOrQueue(pp, ip) : this.deferEntitySetupUntilInitInfo(pp, ip)
        })), this.roomStateCallbacks.entities.uE(((pp, ip) => {
          const cp = this.deferredSetups.get(ip);
          cp && (ic.m.unsubscribe(cp), this.deferredSetups.delete(ip)), this.queuedSetups.delete(ip), this.detach(ip), (0, nc.d)().client.disposeEntity(ip)
        }))
      }
      deferEntitySetupUntilInitInfo(pp, ip) {
        const cp = ic.m.iH("initInfoReceived", (() => {
          this.deferredSetups.delete(ip), this.setUpOrQueue(pp, ip)
        }));
        this.deferredSetups.set(ip, cp), (0, fc.onGameResetOnce)((() => {
          this.deferredSetups.get(ip) === cp && (ic.m.unsubscribe(cp), this.deferredSetups.delete(ip)), (0, nc.d)().updatePositionAndPhysics(this.HP.NJ, {
            type: hc.l.DEFAULT,
            tier: null
          }, !0), (0, nc.d)().takeHeldPlayerBodySize(this.HP.NJ);
          const pp = this.HP.Yk.xip(this.HP.NJ);
          pp && (pp.movementType = hc.k.NORMAL)
        }))
      }
      setupEntity(pp, ip) {
        const cp = ip === this.HP.Fpp;
        if (cp)(0, nc.d)().client.iZ(this.HP.NJ, null, null);
        else {
          const {
            type: cp
          } = pp, Op = Kc(cp);
          if (void 0 === Op) return void
          function(pp, ip) {
            const cp = String(pp);
            if (Vc.has(cp)) return;
            Vc.add(cp);
            const Op = cp.length > 80 ? `${cp.slice(0,80)}...` : cp,
              op = `No client handler for entity type ${JSON.stringify(Op)}, so entity ${ip} is not set up`;
            console.warn(op), (0, Zc.reportClientError)("uncaught", op, "unknown_entity_type")
          }(cp, ip);
          (0, nc.d)().client.iZ(ip, pp, new Op((0, nc.d)(), ip, cp))
        }
        const Op = this.createStateCallbacks(pp);
        if (cp) return this.setupMapSchemaCallbacks(ip, pp, Op, "armour"), this.setupScalarField(ip, pp, Op, "scale"), this.setupScalarField(ip, pp, Op, "ridingVehicleEId"), this.setupScalarField(ip, pp, Op, "followingEId"), this.setupScalarField(ip, pp, Op, "followingOffset"), void this.setupScalarField(ip, pp, Op, "shouldMatchFollowingEntityRotation");
        for (const op of yc(pp.constructor)) pp[op] instanceof Ic.MapSchema ? this.setupMapSchemaCallbacks(ip, pp, Op, op) : this.setupScalarField(ip, pp, Op, op)
      }
      setupMapSchemaCallbacks(pp, ip, cp, Op) {
        const op = cp[Op],
          Ip = new Map;
        op.Lk(((cp, op) => {
          if (this.onEntityFieldChange(pp, ip, Op, {
              key: op,
              value: cp
            }), !(cp instanceof Ic.Schema)) return;
          const Sp = this.createStateCallbacks(cp),
            xp = [];
          for (const Ip of yc(cp.constructor)) xp.push(this.listenForFutureChanges(Sp, Ip, (() => {
            this.onEntityFieldChange(pp, ip, Op, {
              key: op,
              value: cp
            })
          })));
          Ip.set(op, (() => {
            for (const pp of xp) pp()
          }))
        })), op.uE(((cp, op) => {
          var Sp;
          null === (Sp = Ip.get(op)) || void 0 === Sp || Sp(), Ip.delete(op), this.onEntityFieldChange(pp, ip, Op, {
            key: op,
            value: null
          })
        })), this.addDetacher(pp, (() => {
          for (const pp of Ip.values()) pp();
          Ip.clear()
        }))
      }
      setupScalarField(pp, ip, cp, Op) {
        this.onEntityFieldChange(pp, ip, Op, ip[Op]);
        const op = this.listenForFutureChanges(cp, Op, (cp => {
          this.onEntityFieldChange(pp, ip, Op, cp)
        }));
        this.addDetacher(pp, op)
      }
      addDetacher(pp, ip) {
        let cp = this.detachers.get(pp);
        cp || (cp = [], this.detachers.set(pp, cp)), cp.push(ip)
      }
      detach(pp) {
        for (const cp of null !== (ip = this.detachers.get(pp)) && void 0 !== ip ? ip : []) {
          var ip;
          cp()
        }
        this.detachers.delete(pp)
      }
      listenForFutureChanges(pp, ip, cp) {
        return pp.listen(ip, cp, !1)
      }
      onEntityFieldChange(pp, ip, cp, Op) {
        switch (cp) {
          case "ridingVehicleEId": {
            this.promoteIfQueued(Op);
            const ip = this.HP.Yk.Jip((0, bc.b)(pp));
            ip && (ip.ridingVehicleEId = Op);
            break
          }
          case "armour":
            this.handleArmourChange(pp, Op);
            break;
          case "followingEId":
            this.promoteIfQueued(Op), this.handleFollowingEIdChange(pp, ip, Op);
            break;
          case "xRotation":
          case "yRotation":
          case "zRotation":
            this.handleRotationChange(pp, cp, Op);
            break;
          case "scale":
            this.handleScaleChange(pp, Op);
            break;
          case "baseRenderHeading":
            this.handleBaseRenderHeadingChange(pp, Op);
            break;
          case "followingOffset":
            this.handleFollowingOffsetChange(pp, Op);
            break;
          case "shouldMatchFollowingEntityRotation":
            this.handleShouldMatchFollowingEntityRotationChange(pp, Op);
            break;
          case "x":
          case "y":
          case "z":
            return void this.handlePositionChange(pp, cp, Op)
        }(0, nc.d)().client.updateEntityField(pp, cp, Op)
      }
      handleArmourChange(pp, ip) {
        var cp, Op;
        const {
          key: op,
          value: Ip
        } = ip;
        (0, kc.v)(pp, op, null !== (cp = null === Ip || void 0 === Ip ? void 0 : Ip.itemName) && void 0 !== cp ? cp : null, null !== (Op = null === Ip || void 0 === Ip ? void 0 : Ip.enchantmentTier) && void 0 !== Op ? Op : null)
      }
      handleFollowingEIdChange(pp, ip, cp) {
        const Op = (0, bc.b)(pp),
          op = Op === this.HP.NJ;
        if (this.HP.Yk.HJ(Op, this.HP.Yk.names.Qm), cp) this.HP.Yk.HJ(Op, "smoothToServerPos"), this.HP.Yk.vJ(Op, this.HP.Yk.names.Qm, {
          vy: (0, bc.b)(cp),
          offset: Array.from(ip.followingOffset),
          Mcp: ip.shouldMatchFollowingEntityRotation,
          Qcp: !0,
          Jcp: (pp, Op) => {
            if (Ec().copy(pp, ip.followingOffset), ip.ridingVehicleEId === cp) {
              const ip = (0, bc.b)(cp),
                op = (0, nc.d)().getEntityHeading(ip, Op);
              Ec().wi(pp, pp, Ec().ZERO, op)
            }
          }
        });
        else if (!op) {
          this.HP.Yk.hpp(Op, "smoothToServerPos") || this.HP.Yk.vJ(Op, "smoothToServerPos");
          const pp = this.HP.Yk.getState(Op, "smoothToServerPos"),
            ip = this.HP.Yk.xZ(Op).position;
          (0, rc.setServerPosition)(pp, ip[0], ip[1], ip[2])
        }
      }
      handleRotationChange(pp, ip, cp) {
        const Op = "xRotation" === ip ? 0 : "yRotation" === ip ? 1 : 2;
        for (const op of (0, nc.d)().getFollowingEntities(pp)) {
          const pp = this.HP.Yk.getState(op, "meshRotation"),
            ip = this.HP.Yk.qcp(op);
          pp && ip.Mcp && (pp.serverSetRotation[Op] = cp)
        }
      }
      handleScaleChange(pp, ip) {
        const cp = (0, bc.b)(pp);
        if (ic.m.GA(`entityScale|${cp}`, ip), cp === this.HP.NJ) {
          var Op;
          (0, nc.d)().removeFromEyeHeightCache(cp);
          const pp = this.HP.Yk.xip(this.HP.NJ),
            ip = null !== (Op = null === pp || void 0 === pp ? void 0 : pp.physicsState) && void 0 !== Op ? Op : {
              type: hc.l.DEFAULT,
              tier: null
            };
          return void(0, nc.d)().updatePositionAndPhysics(this.HP.NJ, ip, !1)
        }
        const op = (0, nc.d)().getLifeformType(cp);
        if (null === op) return;
        const {
          physicsBodyWidth: Ip,
          physicsBodyHeight: Sp
        } = (0, Gc.f)(ip, op);
        this.HP.Yk.kcp(cp, Ip, Sp, Ip)
      }
      handleBaseRenderHeadingChange(pp, ip) {
        const cp = this.HP.Yk.getState(pp, "meshRotation");
        cp && (cp.baseRenderRotation[1] = ip);
        for (const Op of (0, nc.d)().getFollowingEntities(pp)) {
          const pp = this.HP.Yk.getState(Op, "meshRotation"),
            cp = this.HP.Yk.qcp(Op);
          pp && cp.Mcp && (pp.baseRenderRotation[1] = ip)
        }
      }
      handleFollowingOffsetChange(pp, ip) {
        const cp = this.HP.Yk.qcp((0, bc.b)(pp));
        if (cp && cp.offset) {
          const pp = ip ? Array.from(ip) : Ec().ZERO;
          cp.offset[0] = pp[0], cp.offset[1] = pp[1], cp.offset[2] = pp[2]
        }
      }
      handleShouldMatchFollowingEntityRotationChange(pp, ip) {
        const cp = this.HP.Yk.qcp((0, bc.b)(pp));
        cp && (cp.Mcp = null === ip || void 0 === ip || ip)
      }
      handlePositionChange(pp, ip, cp) {
        if (this.HP.Yk.hpp(pp, "smoothToServerPos")) {
          const Op = this.HP.Yk.getState(pp, "smoothToServerPos");
          (0, rc.setServerPositionAxis)(Op, pO[ip], cp)
        }
      }
      setupItemHandlers() {
        this.roomStateCallbacks.items.Lk(((pp, ip) => {
          this.allItems[ip] = pp, (0, ac.h)(this.HP, ip, [pp.x, pp.y, pp.z], pp.id, {
            amount: pp.amount,
            attributes: JSON.parse(pp.attributes),
            Vo: (0, cc.e)(this.HP).cantPickUpItem(ip),
            size: pp.size,
            predictedAt: (0, nc.d)().client.itemDropPrediction.onServerItemAdded(ip)
          });
          const cp = this.createStateCallbacks(pp);
          for (const Op of yc(Yc)) this.onItemFieldChange(ip, Op, pp[Op]), this.addDetacher(ip, this.listenForFutureChanges(cp, Op, (pp => {
            this.onItemFieldChange(ip, Op, pp)
          })))
        })), this.roomStateCallbacks.items.uE(((pp, ip) => {
          delete this.allItems[ip], this.detach(ip), (0, nc.d)().client.itemDropPrediction.onServerItemRemoved(ip), this.HP.Yk.hpp(ip, this.HP.Yk.names.itemState) && this.HP.Yk.deleteEntity(ip), (0, cc.e)(this.HP).disposeEntity(ip)
        }))
      }
      onItemFieldChange(pp, ip, cp) {
        if (ip in pO) {
          if (this.HP.Yk.hpp(pp, "itemState")) {
            const Op = this.HP.Yk.getState(pp, "smoothToServerPos");
            (0, rc.setServerPositionAxis)(Op, pO[ip], cp), (0, nc.d)().client.itemDropPrediction.onServerItemMoved(pp)
          }
          return
        }
        if (!this.HP.Yk.hpp(pp, "itemState")) return;
        const Op = this.HP.Yk.getState(pp, "itemState");
        "amount" === ip && cp !== Op.amount && (Op.creationTime = Date.now()), Op[ip] = "attributes" === ip ? JSON.parse(cp) : cp
      }
      dispose() {
        if (!this.Ry) {
          this.Ry = !0, this.HP.off("beforeInputs", this.onFrame), this.HP.off("LP", this.gH), this.queuedSetups.clear(), this.promotedSetups.clear();
          for (const pp of this.deferredSetups.values()) ic.m.unsubscribe(pp);
          this.deferredSetups.clear(), this.HP.Yk.HJ(this.HP.NJ, this.HP.Yk.names.Qm);
          for (const pp in this.allItems) this.HP.Yk.deleteEntity(pp), delete this.allItems[pp];
          for (const pp of [...this.detachers.keys()]) this.detach(pp);
          (0, cc.e)(this.HP).clear();
          for (const pp of (0, nc.d)().client.iterateEntityIds())(0, nc.d)().client.disposeEntity(pp)
        }
      }
    }
    const sc = [0, 0, 0];

    function Kc(pp) {
      if ("string" !== typeof pp) return;
      const ip = pp.indexOf("|"),
        cp = -1 === ip ? pp : pp.slice(0, ip),
        Op = cO();
      return Object.hasOwn(Op, cp) ? Op[cp] : void 0
    }
    const Vc = new Set;
    const pO = {
      x: 0,
      y: 1,
      z: 2
    };
    let iO = null;

    function cO() {
      return null !== iO || (iO = {
        ...Object.fromEntries(xc.i.map((pp => {
          const {
            dL: ip
          } = (0, Fc.d)(pp);
          return [pp, ip]
        }))),
        Pebble: vc.b,
        Snowball: vc.b,
        "Snowball Launcher": vc.b,
        "Reinforced Pebble": vc.b,
        Bullet: vc.b,
        "Reinforced Ball": vc.b,
        Ball: vc.b,
        Mango: vc.b,
        "Moonstone Orb": vc.b,
        ...Object.fromEntries(Sc.r.map((pp => [(0, uc.Rb)(pp), vc.b]))),
        Arrow: vc.b,
        "Arrow of Speed": vc.b,
        "Arrow of Poison": vc.b,
        "Arrow of Slowness": vc.b,
        "Arrow of Weakness": vc.b,
        "Arrow of Knockback": vc.b,
        "Arrow of Strength": vc.b,
        "Arrow of Invisibility": vc.b,
        "Arrow of Jumping": vc.b,
        "Arrow of Defense": vc.b,
        "Arrow of Instant Healing": vc.b,
        "Arrow of Instant Damage": vc.b,
        "Arrow of Regeneration": vc.b,
        "Arrow of Haste": vc.b,
        "Arrow of Shield": vc.b,
        "Arrow of Double Jump": vc.b,
        "Arrow of Heat Resistance": vc.b,
        "Arrow of X-Ray Vision": vc.b,
        "Arrow of Mining Yield": vc.b,
        "Arrow of Brain Rot": vc.b,
        "Arrow of Milk": vc.b,
        Fireball: vc.b,
        "Bouncy Bomb": vc.b,
        RPG: vc.b,
        "Obby RPG": vc.b,
        "Super RPG": vc.b,
        "Grenade Launcher": vc.b,
        Iceball: vc.b,
        Coconut: vc.b,
        "Splash Speed Potion": vc.b,
        "Splash Defense Potion": vc.b,
        "Splash Strength Potion": vc.b,
        "Splash Invisibility Potion": vc.b,
        "Splash Jump Potion": vc.b,
        "Splash Knockback Potion": vc.b,
        "Splash Poison Potion": vc.b,
        "Splash Speed Potion II": vc.b,
        "Splash Defense Potion II": vc.b,
        "Splash Strength Potion II": vc.b,
        "Splash Jump Potion II": vc.b,
        "Splash Knockback Potion II": vc.b,
        "Splash Poison Potion II": vc.b,
        "Splash Slowness Potion": vc.b,
        "Splash Slowness Potion II": vc.b,
        "Splash Weakness Potion": vc.b,
        "Splash Weakness Potion II": vc.b,
        "Splash Milk Potion": vc.b,
        "Splash Instant Damage Potion": vc.b,
        "Splash Instant Damage Potion II": vc.b,
        "Splash Instant Healing Potion": vc.b,
        "Splash Instant Healing Potion II": vc.b,
        "Splash Regeneration Potion": vc.b,
        "Splash Regeneration Potion II": vc.b,
        "Splash Haste Potion": vc.b,
        "Splash Haste Potion II": vc.b,
        "Splash Shield Potion": vc.b,
        "Splash Shield Potion II": vc.b,
        "Splash Double Jump Potion": vc.b,
        "Splash Heat Resistance Potion": vc.b,
        "Splash X-Ray Vision Potion": vc.b,
        "Splash Mining Yield Potion": vc.b,
        "Splash Mining Yield Potion II": vc.b,
        "Splash Brain Rot Potion": vc.b,
        "Yellow Paintball Gun": vc.b,
        "White Paintball Gun": vc.b,
        "Red Paintball Gun": vc.b,
        "Purple Paintball Gun": vc.b,
        "Pink Paintball Gun": vc.b,
        "Orange Paintball Gun": vc.b,
        "Magenta Paintball Gun": vc.b,
        "Lime Paintball Gun": vc.b,
        "Light Gray Paintball Gun": vc.b,
        "Light Blue Paintball Gun": vc.b,
        "Green Paintball Gun": vc.b,
        "Gray Paintball Gun": vc.b,
        "Cyan Paintball Gun": vc.b,
        "Brown Paintball Gun": vc.b,
        "Blue Paintball Gun": vc.b,
        "Black Paintball Gun": vc.b,
        "Yellow Heavy Paintball Gun": vc.b,
        "White Heavy Paintball Gun": vc.b,
        "Red Heavy Paintball Gun": vc.b,
        "Purple Heavy Paintball Gun": vc.b,
        "Pink Heavy Paintball Gun": vc.b,
        "Orange Heavy Paintball Gun": vc.b,
        "Magenta Heavy Paintball Gun": vc.b,
        "Lime Heavy Paintball Gun": vc.b,
        "Light Gray Heavy Paintball Gun": vc.b,
        "Light Blue Heavy Paintball Gun": vc.b,
        "Green Heavy Paintball Gun": vc.b,
        "Gray Heavy Paintball Gun": vc.b,
        "Cyan Heavy Paintball Gun": vc.b,
        "Brown Heavy Paintball Gun": vc.b,
        "Blue Heavy Paintball Gun": vc.b,
        "Black Heavy Paintball Gun": vc.b,
        "Toxin Ball": vc.b,
        "Splash Aura XP Potion": vc.b,
        "Splash Aura XP Potion II": vc.b,
        "Arrow of Aura XP": vc.b,
        Firecracker: vc.b,
        "Rainbow Firecracker": vc.b,
        "White Firecracker": vc.b,
        "Orange Firecracker": vc.b,
        "Magenta Firecracker": vc.b,
        "Light Blue Firecracker": vc.b,
        "Yellow Firecracker": vc.b,
        "Lime Firecracker": vc.b,
        "Pink Firecracker": vc.b,
        "Gray Firecracker": vc.b,
        "Light Gray Firecracker": vc.b,
        "Cyan Firecracker": vc.b,
        "Purple Firecracker": vc.b,
        "Blue Firecracker": vc.b,
        "Brown Firecracker": vc.b,
        "Green Firecracker": vc.b,
        "Red Firecracker": vc.b,
        "Black Firecracker": vc.b,
        "Firecracker Pebble": vc.b,
        "Rainbow Firecracker Pebble": vc.b,
        "White Firecracker Pebble": vc.b,
        "Orange Firecracker Pebble": vc.b,
        "Magenta Firecracker Pebble": vc.b,
        "Light Blue Firecracker Pebble": vc.b,
        "Yellow Firecracker Pebble": vc.b,
        "Lime Firecracker Pebble": vc.b,
        "Pink Firecracker Pebble": vc.b,
        "Gray Firecracker Pebble": vc.b,
        "Light Gray Firecracker Pebble": vc.b,
        "Cyan Firecracker Pebble": vc.b,
        "Purple Firecracker Pebble": vc.b,
        "Blue Firecracker Pebble": vc.b,
        "Brown Firecracker Pebble": vc.b,
        "Green Firecracker Pebble": vc.b,
        "Red Firecracker Pebble": vc.b,
        "Black Firecracker Pebble": vc.b,
        "Blinding Pebble": vc.b,
        Poop: vc.b,
        "Wood Boomerang": vc.b,
        "Stone Boomerang": vc.b,
        "Iron Boomerang": vc.b,
        "Gold Boomerang": vc.b,
        "Diamond Boomerang": vc.b,
        "Amethite Boomerang": vc.b,
        "Magmasteel Boomerang": vc.b,
        "Rubellite Boomerang": vc.b,
        "Serpentite Boomerang": vc.b,
        "Moonstone Boomerang": vc.b,
        "67 Base Projectile": vc.b,
        "67 Boosted Projectile": vc.b,
        "Capitano Grenade": vc.b,
        "Scatter Pellet": vc.b,
        "Lucky Bomb": vc.b,
        "Unlucky Bomb": vc.b,
        "Swap Orb": vc.b,
        Mesh: Bc,
        AudioEntity: Tc
      }), iO
    }
  },
  39201: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Ip,
      e: () => Sp
    });
    var Op = cp(640),
      op = cp(37942);
    const Ip = 4e4;
    class Sp {
      constructor() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now;
        this.now = pp, this.editedAt = new Map, this.lastChunkX = NaN, this.lastChunkY = NaN, this.lastChunkZ = NaN, this.lastChunkId = ""
      }
      noteEdit(pp, ip, cp) {
        const Ip = (0, Op.Q)(pp),
          Sp = (0, Op.Q)(ip),
          xp = (0, Op.Q)(cp),
          Lp = this.now();
        if (Ip !== this.lastChunkX || Sp !== this.lastChunkY || xp !== this.lastChunkZ) {
          this.lastChunkX = Ip, this.lastChunkY = Sp, this.lastChunkZ = xp, this.lastChunkId = (0, op.c)(Ip, Sp, xp), this.editedAt.delete(this.lastChunkId), this.editedAt.set(this.lastChunkId, Lp);
          for (const [pp, ip] of this.editedAt) {
            if (ip >= Lp - 3e5) break;
            this.editedAt.delete(pp)
          }
        } else this.editedAt.set(this.lastChunkId, Lp)
      }
      chunksEditedSince(pp) {
        const ip = [];
        for (const [cp, Op] of this.editedAt) Op >= pp && ip.push(cp);
        return ip
      }
    }
  },
  39252: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Ui,
      i: () => Fi,
      l: () => Qi,
      n: () => gi
    });
    var Op = cp(3774),
      op = cp(8895),
      Ip = cp(36869),
      Sp = cp(1466),
      xp = cp(36942),
      Lp = cp(39160),
      Yp = cp(39152),
      Dp = cp(3837),
      Ap = cp(38090),
      Pp = cp(39258),
      Wp = cp(1251),
      yp = cp(322),
      Up = cp(34),
      wp = cp(1982),
      vp = cp(104),
      tp = cp(44),
      Hp = cp(2012),
      dp = cp(1927),
      ep = cp(3067);
    class jp {
      constructor(pp) {
        this.storeForMs = pp, this.clicks = new ep.d
      }
      click() {
        this.clicks.enqueue(Date.now());
        const pp = Date.now() - this.storeForMs;
        for (; this.clicks.size > 0 && this.clicks.peek() < pp;) this.clicks.dequeue()
      }
      getNumClicksInMs(pp) {
        let ip = 0;
        return this.clicks.forEach((cp => {
          cp > Date.now() - pp && ip++
        })), ip
      }
      getMaxClickSeparationInMs(pp) {
        if (0 === this.clicks.size) return this.storeForMs;
        let ip = 0,
          cp = Date.now() - pp;
        this.clicks.forEach((Op => {
          Op < Date.now() - pp || (ip = Math.max(ip, Math.abs(Op - cp)), cp = Op)
        }));
        const Op = Math.abs(Date.now() - cp);
        return Math.max(ip, Op)
      }
    }
    class kp {
      constructor(pp) {
        this.storeForMs = pp, this.clickDownDurations = new ep.d
      }
      registerClickDownDuration(pp) {
        this.clickDownDurations.enqueue({
          dur: pp,
          atTime: Date.now()
        });
        const ip = Date.now() - this.storeForMs;
        for (; this.clickDownDurations.size > 0 && this.clickDownDurations.peek().atTime < ip;) this.clickDownDurations.dequeue()
      }
      clickDownDurationsCheck(pp) {
        if (pp > this.storeForMs) return console.error("overDuration is greater than storeForMs"), "0:0";
        let ip = 0,
          cp = 0;
        return this.clickDownDurations.forEach((Op => {
          Op.atTime > Date.now() - pp && (ip++, cp = Math.max(cp, Op.dur))
        })), `${ip}:${cp}`
      }
    }
    var mp = cp(36693),
      Rp = cp(39261),
      qp = cp(25),
      Mp = cp(2849),
      Cp = cp(1349),
      Ep = cp(2479),
      Xp = cp(4532),
      lp = cp(131),
      Qp = cp(38374),
      Jp = cp(38601),
      Bp = cp(640),
      Np = cp(36691),
      Tp = cp(10),
      fp = cp(9338),
      bp = cp(1234),
      hp = cp(195),
      ap = cp(39263),
      np = cp(39269),
      Fp = cp(39278),
      gp = cp(38409),
      Gp = cp(39283),
      rp = cp(38310),
      Zp = cp(3511),
      zp = cp(1650),
      sp = cp(36799),
      Kp = cp(2908),
      Vp = cp(36582),
      ii = cp(36591),
      ci = cp(39281),
      Oi = cp(38166);
    const oi = {
      forward: "freeCamForward",
      backward: "freeCamBackward",
      left: "freeCamLeft",
      right: "freeCamRight",
      jump: "freeCamUp",
      crouch: "freeCamDown"
    };

    function Ii() {
      var pp, ip;
      return !(null === (pp = (0, Mp.d)().client) || void 0 === pp || null === (ip = pp.freeCameraController) || void 0 === ip || !ip.movesFly())
    }

    function Si(pp) {
      const ip = pp.on.bind(pp);
      pp.on = (pp, cp) => {
        Hp.B.has(pp) ? ip(pp, cp) : ip(pp, (ip => {
          var Op;
          return null !== (Op = (0, Mp.d)().client) && void 0 !== Op && Op.isReplayMode() ? function(pp) {
            return pp in oi
          }(pp) && Ii() ? cp(ip) : void 0 : cp(ip)
        }))
      }
    }
    const xi = 5e3,
      Li = 1;
    let Yi, Di = Li,
      Ai = 0;
    const Pi = !0;
    let Wi = Pi;
    wp.c.subscribe("_ignoreBasicBoards", (pp => {
      Wi = pp
    })), (0, Op.onGameReset)((() => {
      Wi = Pi
    }));
    let yi = null;
    const Ui = () => yi;
    let wi, vi, ti;
    var Hi, di, ei, ui, ji, ki, mi, Ri, qi;
    const Mi = [2, 0, 1, "h", 82, 238, 3, 166, 5, 6, 4, 8, 255, "length", 120, "c", 239, 94, "undefined", void 0, 7, 156, "d", 63, "fromCodePoint", 12, "push", "a", 33554432, 67108864, 13, 78, 55, "f", 229, 165, "i", 91, 177, 8191, 88, 14, 36, 81, !1, !0, "e", 137, 23, 24, "b", 162, 9, 89, 1023, 117, 65536, 10, 55296, 56320, 37, 53, 50, 127, 128, 31, 15, 18, 44, 206, 118, 192, 107, 74, 145, 136, "g", 224, 174, 169, 195, 240, 151, 157, 80, 104, 65, 183, 230, 71, 217, 241, 57, 149, 72, 25, 69, 11, 231, 171];

    function Ci(...pp) {
      return pp[Mi[13]] = Mi[2], typeof Hi[pp[Mi[1]]] === Mi[18] ? Hi[pp[Mi[1]]] = function(...pp) {
        for (li(pp[Mi[13]] = Mi[2], pp[Mi[5]] = 'Bqy0^HAJp!I+>o"T2x5r{M#6Lh3U<zQ|KsSGg:j@F)w?;]PlfY=[7/}W8Xd,%DC`(vu$ObctmE&1_i9nZ4.k*eaVR~N', pp[Mi[0]] = "" + (pp[Mi[1]] || ""), pp[-Mi[4]] = pp[Mi[0]].length, pp[Mi[10]] = [], pp[Mi[8]] = Mi[1], pp[Mi[9]] = Mi[1], pp[Mi[7]] = -Mi[2]), pp[Mi[3]] = Mi[1]; pp[Mi[3]] < pp[-Mi[4]]; pp[Mi[3]]++)
          if (pp[Mi[6]] = pp[Mi[5]].indexOf(pp[Mi[0]][pp[Mi[3]]]), pp[Mi[6]] !== -Mi[2])
            if (pp[Mi[7]] < Mi[1]) pp[Mi[7]] = pp[Mi[6]];
            else {
              li(pp[Mi[7]] += pp[Mi[6]] * Mi[37], pp[Mi[8]] |= pp[Mi[7]] << pp[Mi[9]], pp[Mi[9]] += (pp[Mi[7]] & Mi[39]) > Mi[40] ? Mi[30] : Mi[41]);
              do {
                li(pp[Mi[10]].push(pp[Mi[8]] & Mi[12]), pp[Mi[8]] >>= Mi[11], pp[Mi[9]] -= Mi[11])
              } while (pp[Mi[9]] > Mi[20]);
              pp[Mi[7]] = -Mi[2]
            } return pp[Mi[7]] > -Mi[2] && pp[Mi[10]].push((pp[Mi[8]] | pp[Mi[7]] << pp[Mi[9]]) & Mi[12]), Ei(pp[Mi[10]])
      }(di[pp[Mi[1]]]) : Hi[pp[Mi[1]]]
    }

    function Ei(...pp) {
      return pp[Mi[13]] = Mi[2], typeof ui !== Mi[18] && ui ? (new ui).decode(new ji(pp[Mi[1]])) : typeof ki !== Mi[18] && ki ? ki.from(pp[Mi[1]]).toString("utf-8") : qi(pp[Mi[1]])
    }

    function Xi() {}

    function li() {
      li = function() {}
    }

    function Qi(pp) {
      function ip() {
        return pp.Yk.Acp(pp.NJ)
      }
      Si(pp.inputs.down), Si(pp.inputs.up);
      for (const Op of ["forward", "backward", "left", "right", "sprint", "jump", "crouch"]) {
        const ip = (ip, cp) => {
          var op, Ip;
          if (Ii()) {
            var Sp;
            const op = oi[Op];
            var xp, Lp;
            if (op) null === (xp = (0, Mp.d)().client) || void 0 === xp || null === (Lp = xp.freeCameraController) || void 0 === Lp || Lp.handlefreeCamKeyPress(op, ip, cp);
            return void(cp || null !== (Sp = (0, Mp.d)().client) && void 0 !== Sp && Sp.isReplayMode() || (pp.Yk.wcp()[Op] = !1))
          }
          if (null !== (op = (0, Mp.d)().client) && void 0 !== op && null !== (Ip = op.freeCameraController) && void 0 !== Ip && Ip.isKeyPressOverriden(ip)) return;
          pp.Yk.wcp()[Op] = cp
        };
        pp.inputs.down.on(Op, (pp => ip(pp, !0))), pp.inputs.up.on(Op, (pp => ip(pp, !1)))
      }
      pp.inputs.down.on("crouch", (() => {
        if (Ii()) return;
        if (!pp.Tu.canCrouch) return;
        const ip = pp.Yk.wcp();
        qp.c.get("clientEscMenuOptions").crouchIsToggle && (ip.crouchToggled = !ip.crouchToggled && !ip.padSneakToggled), ip.padSneakToggled = !1
      }));
      const cp = () => {
        const pp = ip();
        pp.isGun() && pp.inaccuracyCalculator.jump()
      };
      pp.inputs.down.on("jump", (pp => {
        Ii() || (cp(), wi(pp))
      }));
      for (const Op of Hp.i) pp.inputs.down.on(Op, (pp => {
        var ip, cp;
        null !== (ip = (0, Mp.d)().client) && void 0 !== ip && null !== (cp = ip.freeCameraController) && void 0 !== cp && cp.handlefreeCamKeyPress(Op, pp, !0) && (pp.preventDefault(), pp.stopPropagation())
      })), pp.inputs.up.on(Op, (pp => {
        var ip, cp;
        null !== (ip = (0, Mp.d)().client) && void 0 !== ip && null !== (cp = ip.freeCameraController) && void 0 !== cp && cp.handlefreeCamKeyPress(Op, pp, !1) && (pp.preventDefault(), pp.stopPropagation())
      }));
      pp.inputs.down.on("recordGame", (() => {
        var pp, ip;
        null === (pp = (0, Mp.d)().client) || void 0 === pp || null === (ip = pp.gameRecorder) || void 0 === ip || ip.toggleRecording()
      })), pp.inputs.down.on("recordClip", (() => {
        var pp, ip;
        (0, mp.c)() || null === (pp = (0, Mp.d)().client) || void 0 === pp || null === (ip = pp.gameRecorder) || void 0 === ip || ip.saveClip()
      }));
      for (const Op of Hp.B) pp.inputs.down.on(Op, (() => {
        var pp;
        if ((0, Rp.c)()) return;
        if ("replayViewerOpen" === Op) return void Up.m.GA("replayViewer|requested", "toggle");
        const ip = null === (pp = (0, Mp.d)().client) || void 0 === pp ? void 0 : pp.gameReplayer;
        ((0, mp.c)() || null !== ip && void 0 !== ip && ip.isReplayMode()) && (null === ip || void 0 === ip || ip.handleAction(Op))
      }));
      const Sp = new jp(3e4),
        Ap = new kp(4e4);
      let Pp = 0;
      const tp = pp => {
          let ip = 0,
            cp = null;
          const Op = ip => null !== ip && ip === cp && (cp = null, pp(), !0);
          return {
            press: () => (ip++, (0, ap.b)() || (Op(cp), cp = ip), ip),
            owns: pp => pp === cp,
            release: Op
          }
        },
        ep = (pp, cp) => {
          cp && gi(Wp.c.TouchDownFirePrimary), pp ? fp() : ((0, Jp.f)(), ip().WOp()), cp || gi(Wp.c.DownFirePrimary), Fi(!0), Sp.click();
          const op = Sp.getMaxClickSeparationInMs(3e4) < 1e3 / 30,
            Ip = Sp.getMaxClickSeparationInMs(1e4) < 20,
            xp = Sp.getMaxClickSeparationInMs(4e3) < 1e3 / 70;
          if (op || Ip || xp) {
            let pp;
            if (op) pp = 30;
            else if (Ip) pp = 50;
            else {
              if (!xp) throw new Error("???");
              pp = 70
            }(0, Op.sendColyMessage)(Dp.Mj, pp)
          }
        },
        Xp = new np.d,
        lp = tp((() => {
          np.d.stopRunning();
          const pp = Date.now() - Pp;
          Ap.registerClickDownDuration(pp), ip().DOp(), gi(Wp.c.UpFirePrimary), Fi(!1);
          const cp = Ap.clickDownDurationsCheck(4e4);
          (0, Op.sendColyMessage)(Dp.cg, cp)
        }));
      let Qp = 0;
      pp.inputs.down.on("primary-fire", (function(pp) {
        Qp = lp.press(), lp.owns(Qp) && (Pp = Date.now(), Math.abs(performance.now() - pp.timeStamp) > 5e3 || (ep(pp.altKey, "changedTouches" in pp), wi(pp)))
      })), pp.inputs.up.on("primary-fire", (function(pp) {
        lp.release(Qp) && wi(pp, !0)
      }));
      const Bp = () => {
          ip().iDp(), gi(Wp.c.DownFireSecondary), Fi(!0), pp.Rpp && !pp.Rpp.position && (0, Yp.j)()
        },
        Np = tp((() => {
          ip().YOp(), gi(Wp.c.UpFireSecondary), Fi(!1)
        }));
      let Tp = 0;
      pp.inputs.down.on("alt-fire", (function(pp) {
        Tp = Np.press(), Np.owns(Tp) && (Bp(), wi(pp))
      })), pp.inputs.up.on("alt-fire", (function(pp) {
        Np.release(Tp) && wi(pp, !0)
      }));
      const fp = () => ip().oDp();
      pp.inputs.down.on("mid-fire", (() => {
        (0, ap.b)() || fp()
      }));
      const Gp = pp => {
          (0, Op.sendColyMessage)(Dp.dh, pp, !0)
        },
        Yi = pp => {
          (0, Op.sendColyMessage)(Dp.fh, {
            zx: pp,
            sx: Pi()
          }, !0)
        };
      for (const Op of ["SpecialAction1", "SpecialAction2"]) pp.inputs.down.on(Op, (() => {
        Gp(Op)
      })), pp.inputs.up.on(Op, (() => {
        Yi(Op)
      }));
      const Ai = () => {
        const pp = ip();
        pp.isGun() && pp.reload(Date.now())
      };
      pp.inputs.down.on("ReloadGun", Ai);
      const Pi = () => {
        let ip = "a";
        return pp.physics.testSolid.toString().includes("TP") || (ip = "b"), ip
      };
      pp.inputs.down.on("OpenInventory", (pp => {
        pp.preventDefault(), (0, zp.s)(pp, "inventory", (0, Fp.d)((0, Mp.g)()))
      })), pp.inputs.bind("ShiftHeld", "ShiftLeft", "ShiftRight");
      const Wi = pp => {
        Up.m.GA("DropItemKeyPressed", pp)
      };
      pp.inputs.down.on("DropItem", (() => {
        Wi(pp.Yk.wcp().crouch)
      })), pp.inputs.down.on("OpenShop", (ip => {
        (0, mp.c)() || "inGame" === qp.c.get("gameState") && (0, zp.q)(ip, yp.n.SHOP, !(0, op.b)(pp.Tu.shopInfo))
      })), pp.inputs.down.on("OpenLobbyLeaderboard", (ip => {
        (0, mp.c)() || "inGame" === qp.c.get("gameState") && (0, zp.q)(ip, yp.n.LOBBY_LEADERBOARD, (0, ci.d)(pp.Tu))
      })), pp.inputs.down.on("HideUi", (() => {
        Up.m.GA("showUi", !1)
      })), pp.inputs.up.on("HideUi", (() => {
        Up.m.GA("showUi", !0)
      }));
      const Ui = pp => {
        0 === pp && (pp = 10), Up.m.GA("setSelectedInventorySlotI", pp - 1), Up.m.GA("numkeyPressed", pp)
      };
      for (let Op = 1; Op <= 10; Op++) pp.inputs.down.on("HotBarSlot" + Op.toString(), (() => {
        Ui(Op)
      }));
      pp.inputs.down.on("OpenTasksAndLeaderboard", (ip => {
        const cp = (0, sp.o)();
        cp ? (0, zp.v)(ip, !0, cp) : (0, zp.s)(ip, "retentionFeatures", !(!pp.Tu._tasks && !pp.Tu._availableLeaderboards))
      })), pp.inputs.down.on("OpenCodeEditor", (ip => {
        (0, zp.v)(ip, (0, Ep.b)((0, Cp.d)()), (() => {
          (0, Ep.g)(pp.Yk.sH(pp.NJ))
        }))
      })), pp.inputs.bind("ToggleFullCoordinateOverlay", "F3"), pp.inputs.down.on("ToggleFullCoordinateOverlay", (() => {
        Up.m.GA("toggleFullCoordinateOverlay")
      }));
      const ti = () => {
        (0, Mp.d)().client.cameraController.swapCameraZoom()
      };
      pp.inputs.down.on("SwapCameraZoom", ti), pp.inputs.down.on("OpenInviteLink", (pp => {
        (0, zp.s)(pp, "inviteLink", vp.featureFlags.canUseInviteLinks)
      })), pp.inputs.bind("Y", "KeyY"), pp.inputs.down.on("Y", (pp => {
        (0, mp.c)() || Up.m.GA("YKeyPressed")
      })), pp.inputs.bind("X", "KeyX"), pp.inputs.down.on("X", (pp => {
        (0, mp.c)() || Up.m.GA("XKeyPressed")
      })), pp.inputs.down.on("OpenEmoteWheel", (() => {
        Up.m.GA("requestEmoteWheelHoldOpen")
      })), pp.inputs.up.on("OpenEmoteWheel", (() => {
        Up.m.GA("requestEmoteWheelHoldRelease")
      })), pp.inputs.down.on("Zoom", (() => {
        if ("inGame" === qp.c.get("gameState")) {
          pp.Yk.getState(pp.NJ, "playerCameraAdjustment").zoomKeyPressed = !0, (0, Mp.d)().client.cameraController.handleZoomKeyPressed()
        }
      })), pp.inputs.up.on("Zoom", (() => {
        pp.Yk.getState(pp.NJ, "playerCameraAdjustment").zoomKeyPressed = !1
      })), Ji();
      const Hi = pp => function() {
        return vi(), pp(...arguments)
      };

      function di(pp) {
        "inGame" !== qp.c.get("gameState") || (0, zp.n)() || (Up.m.GA("ctrlCrouchWithoutFullscreen"), pp.preventDefault())
      }
      yi = {
        primaryFireDown: Hi((pp => {
          const ip = lp.press();
          return lp.owns(ip) && (Pp = Date.now(), ep(!1, !1), pp && Xp.start()), ip
        })),
        primaryFireUp: Hi((pp => {
          lp.release(pp)
        })),
        altFireDown: Hi((() => {
          const pp = Np.press();
          return Np.owns(pp) && Bp(), pp
        })),
        altFireUp: Hi((pp => {
          Np.release(pp)
        })),
        jumpDown: Hi(cp),
        specialActionDown: Hi(Gp),
        specialActionUp: Hi(Yi),
        reloadGun: Hi(Ai),
        dropItem: Hi(Wi),
        swapCameraZoom: Hi(ti),
        pickBlock: Hi(fp)
      }, pp.inputs.down.on("ctrlCrouch", di), pp.inputs.up.on("ctrlCrouch", di), pp.inputs.bind("ctrlCrouch", "ControlLeft");
      const ei = pp => {
        "inGame" === qp.c.get("gameState") && pp.ctrlKey && !(0, zp.n)() && pp.preventDefault()
      };
      document.addEventListener("keydown", ei), document.addEventListener("keyup", ei), document.addEventListener("keypress", ei), pp.inputs.bind("Alt", "AltLeft", "AltRight"), pp.inputs.down.on("Alt", (pp => {
        pp.preventDefault()
      }));
      const ui = ip => (0, rp.k)(pp, ip),
        ji = ip => (0, rp.m)(pp, ip),
        ki = [0, 0, 0],
        mi = [0, 0, 1];
      pp.on("afterRender", (ip => {
        ii.l.frame(ip, pp.camera.heading, pp.camera.pitch, ii.g.drawn), (0, Ip.e)(pp.camera.heading), (0, rp.p)(pp, ki, mi), (0, Mp.d)().client.triggerGameCallback("onAfterRender", ip, {
          cameraHeading: pp.camera.heading,
          cameraPitch: pp.camera.pitch,
          cameraPosition: ki,
          cameraDirection: mi,
          tanHalfFovX: (0, rp.c)(pp),
          tanHalfFovY: Math.tan(pp.WU.wV().fov / 2),
          screenBandPct: {
            x: Zp.d,
            y: (0, Zp.k)()
          },
          projectWorldPosToScreenPos: ui,
          projectWorldPosToViewport: ji
        })
      })), pp.camera.yX = (0, Vp.startLookDebug)("js"), pp.inputs.Ul = Vp.noteLookDroppedCopy, (0, Kp.r)("remesh") && (0, Oi.l)(pp), pp.on("beforeInputs", (() => {
        if ((0, Rp.c)()) return pp.inputs.yG.dx = 0, void(pp.inputs.yG.dy = 0);
        if (pp.camera.yG.dx += pp.inputs.yG.dx, pp.camera.yG.dy += pp.inputs.yG.dy, 0 !== pp.inputs.yG.dx || 0 !== pp.inputs.yG.dy) {
          pp.Yk.getState(pp.NJ, "playerCameraAdjustment").lastPointerMove = Date.now()
        }
        pp.inputs.yG.dx = 0, pp.inputs.yG.dy = 0
      }));
      let Ri = 0;
      const qi = [0, 0, 0],
        Mi = [0, 0, 0],
        Ci = {
          base: qi,
          max: Mi
        },
        Ei = pp => {
          const ip = hp.g.droppedBlockSize / 2;
          return [0, 1, 2].every((cp => pp[cp] >= qi[cp] - ip && pp[cp] <= Mi[cp] + ip))
        };
      pp.on("LP", (function(ip) {
        Up.m.GA("noaTick", ip);
        const cp = (0, Mp.d)().client;
        if (cp.triggerGameCallback("LP", ip), cp.isClientGameSessionActive()) try {
          Lp.e.LP(ip)
        } catch (Sp) {
          console.error("Error ticking audio entities", Sp)
        }
        if (!pp.Yk.Ycp(pp.NJ).isAlive) return;
        Date.now() - Ri > 9e3 && (! function() {
          const pp = (0, Mp.g)();
          "number" === typeof pp.Tu.speedMultiplier && "number" === typeof pp.Tu.jumpAmount && (0, Op.sendColyMessage)(Dp.Gh, {
            Jx: (0, bp.f)(pp.Tu.speedMultiplier),
            Bx: (0, bp.c)(pp.Tu.jumpAmount),
            Nx: (0, bp.f)(pp.Tu.crouchingSpeed),
            Tx: (0, bp.f)(pp.Tu.walkingSpeed),
            bx: (0, bp.f)(pp.Tu.runningSpeed),
            hx: (0, bp.c)(pp.tpp),
            nx: pp.Yk.xip(pp.NJ).jumpForce,
            Fx: pp.Yk.xZ(1).width,
            gx: pp.Yk.xZ(1).height,
            Gx: pp.Yk.fn(1).Gx
          }, !0)
        }(), Ri = Date.now());
        const op = pp.Yk.wcp();
        if ((op.jump || op.forward || op.backward || op.left || op.right || op.sprint) && Up.m.GA("usedKeyboard"), pp.Yk.bip(pp.NJ) && !0 === pp.Tu.canPickUpItems) {
          const ip = pp.Yk.sH(pp.NJ),
            cp = (0, dp.u)(Di),
            op = (0, dp.v)(Di);
          qi[0] = ip[0] - cp, qi[1] = ip[1] - .6 * op, qi[2] = ip[2] - cp, Mi[0] = ip[0] + cp, Mi[1] = ip[1] + hp.g.Vw + .6 * op, Mi[2] = ip[2] + cp;
          const Ip = pp.Yk.YLp(Ci, pp.Yk.names.autoRotate),
            {
              itemDropPrediction: Sp
            } = (0, Mp.d)().client,
            Lp = Op.offlineInputReplay.holdsInput();
          if (Ip.length > 0)
            for (const Ap of Ip) {
              const ip = pp.Yk.getState(Ap, "itemState");
              if (void 0 === ip || Date.now() - ip.creationTime < 500) continue;
              let cp = Ap,
                op = null;
              if (ip.Vo) {
                const pp = Sp.pickupTarget(Ap, Ei, Lp);
                if (null === pp) continue;
                ({
                  DL: cp,
                  WL: op
                } = pp)
              }
              const Ip = pp.Yk.getState(cp, "itemState");
              if (Ip.Vo && null === op) continue;
              let Pp = 0,
                Wp = null,
                yp = !1;
              if (0 === Ip.amount) yp = !0;
              else {
                const {
                  amountPickedUp: ip
                } = pp.Yk.Nip(pp.NJ).pickUpItem({
                  name: Ip.name,
                  typeObj: Ip.typeObj,
                  amount: Ip.amount,
                  attributes: Ip.attributes
                });
                if (Pp = ip, 0 === Pp) continue;
                Wp = gp.d.pickUp(Ip, Pp), Ip.amount -= Pp, Ip.amount < 0 ? console.error("Picking up led to less than 0 of item!") : 0 === Ip.amount ? yp = !0 : Ip.creationTime = Date.now() + xi
              }
              const Up = (0, Mp.d)().client.inventoryPrediction.record(Wp);
              (0, Op.sendColyMessage)(Dp.bh, {
                DL: null === op ? cp : "",
                AL: Pp,
                PL: Yp.g,
                Ax: Up,
                WL: op
              }, !0), yp && (Lp && Sp.onPickedUpOffline(cp, Up, op), null === op && pp.Yk.deleteEntity(cp));
              xp.b.play("pickUp", hp.g.pickupSoundVol).rate(1 + Math.random() * hp.g.pickupSoundRateVariation)
            }
        }
        if (!pp.Yk.Rip(pp.NJ)) return;
        const Ip = pp.inputs.yG.Wip;
        if (0 !== Ip) {
          const ip = Ip > 0 ? 1 : -1;
          pp.inputs.state["mid-fire"] || pp.inputs.state.Alt || !pp.Tu.useInventory ? (pp.inputs.state["mid-fire"] && Up.m.GA("requestEmoteWheelClose"), (0, Mp.d)().client.cameraController.handleScrollZoom(ip)) : Up.m.GA("ScrollInventorySlot", ip)
        }
      })), wp.c.subscribe("droppedItemScale", (pp => {
        Di = "number" === typeof pp && isFinite(pp) ? pp : Li
      }))
    }

    function Ji() {
      const pp = (0, Mp.g)();
      if (pp)
        for (const ip in Hp.t) {
          pp.inputs.unbind(ip);
          for (const cp of Hp.t[ip]) pp.inputs.bind(ip, cp)
        }
    }
    li(Hi = {}, di = ["q%p92t`o(>MWLtVzsX%Jc%n`TTn4WcHh~vC_gO{d45Sbn3WGpq", "kApQ:D;dk%8+xfj:e,w[W@dF(Xx1_^QzN]#Y(mLyRxx.>kWGzOSmr", "g?b=GG9F(5@nZkfU.vL[+ff5fXz{SH/GI:/|/19d_v44/^", "mO@E,@SZq!6dpUy:eh3mxb]JHIN403;r<6`7o4p5`/3ot3<6K6h[JaKQ%pUmq", 'OC7W`%j>C/g_wY}F|zH&=[ohw+)"{kWSoONio&GrmxvPI45ST:YA<lo)",K', "^&_HR_gL(/3", '1[$H]1NL?CYb["}SW0H|h', "g[}EfcB", 'iAm!UX[JY!$"r./GdCwmL_fyxuP"Nbp3J^qA37DzU{S', '`|t7Ab+J|u(ES""3tf5U{', "YA>I#_Th4}lM8T!@w[MIf[8Z_8k%gk$Qd!)A?}>y", "/[8A`*@rNC/Zf2sx83*i?D(Q.`dYq", "#toJOC6)rr5.OkWS4B", "*@!9Zt7d&xBteLsxV]upv@8OZ5ZgKk,G", "v[7&l@ppG!3ojhJrPC;ISeIL|>#|H%p|n+LQ#bDo?v3mjcbL_8SK+=fP0", ',tGi(fuZj(@"_T!3;t|_sELL5%wZ10NgJ&<ij:B', ")vgzn&[z7(0A?3GQ", "UTAWk]p7d{y:jDOLIPi3|98O.>5bDhvQ=|2}._J)yT", ':0]|rjWJr!n8jhK5jXF!Ib+rD""S80Dg+Yq', "Vvz|zlvos`k8>Uc:K}x[Hg1q", 'kw`^"4r/%+IUR0!', "}F~AfOU/]+Qn&hbLh?qU%%CyRxM[*0a<[XZEe_B", "p?PJw}OQ9`qvpt@:x%&i@GUl8vym!g!|<?LAzk@rEdDY0c#)", 'cw"|UkYrOo^[3HKx?O"7rkIPcoiKl.lUKTnYMtu50', "_{C_f[97m{2CF,Vzo`Gmd[ie=}#WN4?r,xHW4]Vq", '#{p}:D"(=>OEIHw@]S6__gYoK!?,|"jh6K^IBn`G=Xiiq', "m6<iEX^5v}EcSHg5Jt]|=c4)Z`1/Zl^|K%2sy%xGnpTm<^q?Jq", '<v!1^S"p95', '$C}^b&$[)C1Z8,0x$05m_b6)4}~phg{Us>A|c=dyaoPxV"Hjq^t7,n<5edS', "3PYpibtXjrIQc4A5nCc_]:Pdm{9/}YU6Lq", "`C]JIX8FKXox|.JjWx>zYO5p95cE[.@h2[([{CMqb}]YXfBL}>>im_no_/X", 'b{<zx7}71pLv[.xU@&CWzl9F~C5b@j8w8"_zL', 'j?!9W*WlICiiA.b:"!w[^gx/5r<We^MF$Ogzo_4XFdn$6l>', "<TR}ib)X]8ADK,y5U%jY4_D`GXWY8UUwPXTQ;1!o1{?", "iSki`Wo)g!HA|=gQ8CTQ$m|rIvI:/^", "6XGKY8vXA", 'gfNpbbK(w"w', '@[nENk#d2u&&=c+h}"L9cWhb/rdZah#Fhq', "oKfY8n]`~vh0R,l@o5%/bSk).rI[NYA:e<#7[.&5^", "i6i|NXtqOoP^q", "aEF!Rl@4C8v8uoug=}L1XmkGx58JQY$x[SzJd%,6i/Nzv%_353HIGERSq5", 'RA8}PO`zgo5A<,/)%}a7(@W1,+*#}h?jm"*/<', "nE(E$&;Fnp608UGx*B", "wF)}es@rC/)", "ev.KpnCPN+dcD%orH^Ts:GqGS%<fSo>", 'H`q};["yHIG', 'cO:Jk4]o/r#0D^)3`0LEumQgOrmcFl,xw3)Uw8yQ_x*i["N2I:j<cg~b98g', "vO67}S#gU{#nWU>hMF%i6=7FTTtq80ir5`R!EC[J?x8JzmLGIYnYxC|J^", "b<=pHb>L|>Rg*lbh{5kz0P>Ll/6|gthGxq", 'UFmA:8{y!"k=~ZlUK>ri|7&5g(E8_kIjs}a<dm,G;+{f20', "k0b=>gUJ|MpfL,Cgf!YATj?q", "x>&p6XE`Cp#vM2>rO<<&^mi[I,)MBT2{Y0b31fp(?+P7&Y})e<UmVlgy", "OOD<5g_FZX|0bLLGT5]|QlLL#ro1_,3<)XoJZWF(&{g_=DG:", "DCj<>gBwk%`^Nb93+`<z#", "C,fAAWNSzupDPo+", "RC<i,mH/O(06`.L<SXtAfOt1Vo8Yg,@:.0rzc4^p^", "m]F1,[xoaozfq2Dw|}!Q]:w5K!{_s2P@GXD7Y:D1^", '^XFAuCF5,,d"2,O5"%=KC@j5+,@x:^6S/XKE]DP>o,Z8F02UUq', "mxLQ]Z!`(58ZchdzJ?UK,nvq", "FCp17[i[>MaiA=,GevGzqaOLN,EYELT", "dOd[LFzz_/xvVy.<SSA|71}Q;/[Ju:GhC,OtL", "=]M<u/bXUC.#%0Gg!`0m)Enq|>NcGd*F%,t}X@*a}dY", 'f[Xpn=jg`TI:]m%Gl}~}?`0`)vHlN4|:kSeJxgoJRv"{r"4F,vrIdPn`=>', "Ht$KfYOAdCPEDoP3Vx(!", 'o5yU44aPL{wbk0=U$O<IhFjQKM94FU9r1"N[s}bJU"PE[._rpG=[zlxr)C@', "bf/W%mI5l%pmTUA", "w&3K4_$[^", "<&O=7@zr7!j", 'Z<KY(nv)Lvi&F^bQ"`4}4kB', "0!*=+k6zv5bMOk_ry!$H?Z956otu{tsg]|upOWy5A", '2t|^vnE)BuS_?kHLa"D|o_$)=}Lx#4th}"nE47Cd~xs,q', "^GuK#ev1Pp8,q", 'i,ui8`eX"u$ijYK5C"6s2XxzDpVT"Hf@p5j^VsF7=`a>@3A', "z%^z|D>y", "Q:kp8[eX(5", '#t)Q%m|G%xF,z2q5N+;i"_f5R{R&XmdwlF*/R=&>q>*#q', "d{*/,i!/jdqA203z+?zJl`]J/r|n7kaFEC.i.sJJ|`)", '}"A|8%P(i+3', "X[2ApC@J(!L_)2o@]A0", 'HGMJp=+h,v2QyD_rtwq1!agg(`Z$r"~6g}IK,SLg_C;_aY93jXi=}@+o}oT6q', "~+A7}@LQ,p<o!mN2@CTQ4kAwMd:Ed.zzp>[KTgmQ)xE$6yv5`<cW{CB", 'KP8Y7:6lE"pUNYEr$B', "9]#<k,;>7}#S;UDx(!q[D@=(A", 'T5zIsl|)@(C7":y5K?jJlYlG1,YZ)oBxqFa<Bf=PCT@EC"+', "|}6_7dOA!WgLjo<wPOqUzZPF[}4#_k+3_S2s.4[l0", "2TuKCioJFv@EhHsLd]eJ5gP7fu$8c40:[tV!&g^QkXX", "b6cti&%d],B:}o3zt[7&YOCQQ,M_m^]U4S=m<FWq", "POW7%/B", "JzBs37v[f%GI~LoUg>zWy/UGxu{WGy", '8fW}X[TJ,"FZCdN2^%A!71X6v}Uo>0', "oK=URlggpxjEWj)|", "$<+itWdyXC!O%UEj^um!", 'H3$HTb2yIWchuo?@Ex)QQl=PUCJ1TU"', '~p<ImS"cYX&Y5Dorb}qQf[aPerd,63nUp`C|3_z/J', "h&i3<,l)c(I6E%`x3})1Yc?1K%Gm~ZDgY}b^Bd=FFo}h6y^|u[7JzkkJ]M", 'F3%&)};>#o6xh2Z@xXJ!%[(5FoW_zH8w,x$z>_YG=XCY_UTUg[pA#=5d>"', "QX?I<}Gobrti+Tvxj%^W%mBg%CF,SDSgi[O|nblG]/>dKt::r!#|f*u5^", ";vP<IXOZi,(7coN)M3|7heHbq``hsmJhZ:a|m=n)J", "Qz7zf[tq", "Q}DI~7c&y}n#|3o@.{`!~jR>$(>D|y,g}>/&]D9L/}Rgab/U~8]7Rk6q", "*@M&SZggW{[<MmgjD:7ISD=FuX3SOTLzihBQ{Czr+,EP_0", "cf3[Mk[z?{(7^UbL,6:|2=0oRx?,q", "t[gW3kKL1pMmeg7U5}51OgCAKM+Am0aG#zxU__oon5#[ZlkST:HW2", "j6o|gZjy", 'W[k=24M)y!Nph^B:#Xy1eX+/#o"mnlb|+K2svg3QH', "c]]&Tk1X9,N$ryBwfB", "/Oj7W:u&qTmEntQLE[q", 'N]p9<tGo.Tj_Q"6zNE:J', "1Ae&MeI(!xfJ@.%gCC$Icn/osX|U70i@qXbW(%nzY%I:pt%gNE0", '#F]Ws}n`B5$i}"M)[v+i_&1XBM017k05', '^Y7Ifc.S(!"nq', 'D:b|W.ad;xl78kU6_"j^}/5yV{sxDga)"q', "Vx5[N}Th&,K{_kCQl>{zd%]JP,}ZAD5S[A![e]X)4T", "NxJs]Oz4vTT6uhb|U!k/mC1nl/3bH%Ijn8IUb/;Qy%1i)^A", "X[kzBWM4~vXYm,4U0^tYKZb1oMIOPYZFGXQ|f*=([r", "n|F}1j{LVo)E8k::|%,I", "SF}WdcZLu}2m5y", 'a{f!tnwdCp21N"2Fp3H&,[>yP`bq!2)|1[0&t4I5U,z{#HprQvSUF`@4L{=', "%x%&(PJ)crZ$Z0p5#FMJ&4.FqXOuTj!@Y|9_>_dFSr%7@ycLZhy", "HY2UR,h1Moym!H", '"tK[MkZdN"dG|y~GuF)QBaVnI{_`9b=<hv)m(*B', "MXMIMbrz)d#[Gy_3`04AMeo`z,*c4hFh7A^&QDVGJ", "u6V_sO5y", "Z3/LDqbW", "OO^HA&Fy", "0?rKt#fy", "eyNA:&5u", "8/!)WOP", "?)Rs~Aau", ")(wQdUfu", ">qN7gE+u", ">q>!)", 'rF2UGx.S>!"[_@Y4KF3h@^*', "[Ws48VM2x`.}y{dX6Ei%DMqRS_mn@bL", "o$1!7vT;8M?&[|aEd$Cb|c=", '`{|y"}CBtLl,4_3Fjaq~$C[iD<S.eY8', 'MewR8|Lht,*54?+7Q"SH&LIPo)X<1(p', "jh:puo~(fAl6pVOy#r:`pUa(ojA", ":VGE`)l", "DFQ|qm<y", "hT1p", "52/?#~y,", "Qs%nV~=", "1g/??~3,", "w;mz;&_A", "if9#", "W_ZYC$cb", "f=IU4;zS", "*t]l]!2S", 'J^R$v"oD', "ZaA%4,Lb", "xyA(SZKY"]), li(ei = function(...pp) {
      li(pp[Mi[13]] = Mi[1], pp[Mi[17]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], pp[Mi[14]] = Mi[19], pp[Mi[15]] = []);
      try {
        li(pp[Mi[14]] = Object, pp[Mi[15]][Mi[26]]("".__proto__.constructor.name))
      } catch (di) {}
      pp: for (pp[-Mi[16]] = Mi[1]; pp[-Mi[16]] < pp[Mi[17]][Mi[13]]; pp[-Mi[16]]++) try {
        for (pp[Mi[14]] = pp[Mi[17]][pp[-Mi[16]]](), pp[Mi[10]] = Mi[1]; pp[Mi[10]] < pp[Mi[15]][Mi[13]]; pp[Mi[10]]++)
          if (typeof pp[Mi[14]][pp[Mi[15]][pp[Mi[10]]]] === Mi[18]) continue pp;
        return pp[Mi[14]]
      } catch (di) {}
      return pp[Mi[14]] || this
    }() || {}, ui = ei.TextDecoder, ji = ei.Uint8Array, ki = ei.my, mi = ei.String || String, Ri = ei.Array || Array, qi = function(...pp) {
      return li(pp[Mi[13]] = Mi[1], pp[Mi[27]] = new Ri(Mi[64]), pp[Mi[2]] = mi[Mi[24]] || mi.fromCharCode, pp[Mi[21]] = []),
        function(...ip) {
          for (li(ip[Mi[13]] = Mi[2], ip[Mi[2]] = Mi[19], ip[Mi[0]] = Mi[19], ip[-Mi[20]] = ip[Mi[1]][Mi[13]], pp[Mi[21]][Mi[13]] = Mi[1]), ip[Mi[22]] = Mi[1]; ip[Mi[22]] < ip[-Mi[20]];) li(ip[Mi[0]] = ip[Mi[1]][ip[Mi[22]]++], ip[Mi[0]] <= Mi[63] ? ip[Mi[2]] = ip[Mi[0]] : ip[Mi[0]] <= 223 ? ip[Mi[2]] = (ip[Mi[0]] & Mi[65]) << Mi[9] | ip[Mi[1]][ip[Mi[22]]++] & Mi[23] : ip[Mi[0]] <= Mi[16] ? ip[Mi[2]] = (ip[Mi[0]] & Mi[66]) << Mi[25] | (ip[Mi[1]][ip[Mi[22]]++] & Mi[23]) << Mi[9] | ip[Mi[1]][ip[Mi[22]]++] & Mi[23] : mi[Mi[24]] ? ip[Mi[2]] = (ip[Mi[0]] & Mi[20]) << Mi[67] | (ip[Mi[1]][ip[Mi[22]]++] & Mi[23]) << Mi[25] | (ip[Mi[1]][ip[Mi[22]]++] & Mi[23]) << Mi[9] | ip[Mi[1]][ip[Mi[22]]++] & Mi[23] : (ip[Mi[2]] = Mi[23], ip[Mi[22]] += Mi[6]), pp[Mi[21]][Mi[26]](pp[Mi[27]][ip[Mi[2]]] || (pp[Mi[27]][ip[Mi[2]]] = pp[Mi[2]](ip[Mi[2]]))));
          return pp[Mi[21]].join("")
        }
    }()), li(ti = (...pp) => {
      li(pp[Mi[13]] = Mi[2], pp[Mi[2]] = Mi[1]);
      for (const ip in pp[Mi[1]]) pp[Mi[2]]++;
      return pp[Mi[2]]
    }, vi = (...pp) => {
      if (pp[Mi[13]] = Mi[1], Ci(122) in Xi && function(...pp) {
          function ip(...pp) {
            return pp[Mi[13]] = Mi[2], pp[Mi[1]][Mi[2]] * Mi[29] + (pp[Mi[1]][Mi[1]] < Mi[1] ? Mi[28] | pp[Mi[1]][Mi[1]] : pp[Mi[1]][Mi[1]])
          }

          function cp(...pp) {
            switch (pp[Mi[13]] = Mi[2], ((pp[Mi[1]] & Mi[28]) !== Mi[1]) * Mi[2] + (pp[Mi[1]] < Mi[1]) * Mi[0]) {
              case Mi[1]:
                return [pp[Mi[1]] % Mi[28], Math.trunc(pp[Mi[1]] / Mi[29])];
              case Mi[2]:
                return [pp[Mi[1]] % Mi[28] - Mi[28], Math.trunc(pp[Mi[1]] / Mi[29]) + Mi[2]];
              case Mi[0]:
                return [((pp[Mi[1]] + Mi[28]) % Mi[28] + Mi[28]) % Mi[28], Math.round(pp[Mi[1]] / Mi[29])];
              case Mi[6]:
                return [pp[Mi[1]] % Mi[28], Math.trunc(pp[Mi[1]] / Mi[29])]
            }
          }
          pp[Mi[13]] = Mi[1], li(pp[Mi[30]] = ip([Mi[0], Mi[10]]), pp[Mi[2]] = ip([Mi[2], Mi[0]]), pp[-Mi[31]] = pp[Mi[30]] + pp[Mi[2]], pp[-Mi[32]] = pp[-Mi[31]] - pp[Mi[2]], pp[Mi[33]] = pp[-Mi[32]] * Mi[0], pp[Mi[34]] = pp[Mi[33]] / Mi[0], console.log(cp(pp[-Mi[31]])), console.log(cp(pp[-Mi[32]])), console.log(cp(pp[Mi[33]])), console.log(cp(pp[Mi[34]])))
        }(), Ai++ === Mi[8]) {
        if ((Mi[1], tp.m)()) {
          function ip(...pp) {
            for (li(pp[Mi[13]] = Mi[2], pp[Mi[35]] = 'tAWpBL5vD(Z9H]:cm?3U4IYNKxMzoC>0;!2F@G^jP|Q~efaSb$"u#EsVhyXn`ri1RT&.O)gwl}q/k,J8*=6_%<7{[+d', pp[Mi[0]] = "" + (pp[Mi[1]] || ""), pp[Mi[15]] = pp[Mi[0]].length, pp[Mi[10]] = [], pp[Mi[38]] = Mi[1], pp[-Mi[21]] = Mi[1], pp[Mi[20]] = -Mi[2]), pp[Mi[11]] = Mi[1]; pp[Mi[11]] < pp[Mi[15]]; pp[Mi[11]]++)
              if (pp[Mi[36]] = pp[Mi[35]].indexOf(pp[Mi[0]][pp[Mi[11]]]), pp[Mi[36]] !== -Mi[2])
                if (pp[Mi[20]] < Mi[1]) pp[Mi[20]] = pp[Mi[36]];
                else {
                  li(pp[Mi[20]] += pp[Mi[36]] * Mi[37], pp[Mi[38]] |= pp[Mi[20]] << pp[-Mi[21]], pp[-Mi[21]] += (pp[Mi[20]] & Mi[39]) > Mi[40] ? Mi[30] : Mi[41]);
                  do {
                    li(pp[Mi[10]].push(pp[Mi[38]] & Mi[12]), pp[Mi[38]] >>= Mi[11], pp[-Mi[21]] -= Mi[11])
                  } while (pp[-Mi[21]] > Mi[20]);
                  pp[Mi[20]] = -Mi[2]
                } return pp[Mi[20]] > -Mi[2] && pp[Mi[10]].push((pp[Mi[38]] | pp[Mi[20]] << pp[-Mi[21]]) & Mi[12]), Ei(pp[Mi[10]])
          }

          function cp(...pp) {
            return pp[Mi[13]] = Mi[2], typeof Hi[pp[Mi[1]]] === Mi[18] ? Hi[pp[Mi[1]]] = ip(di[pp[Mi[1]]]) : Hi[pp[Mi[1]]]
          }

          function Op(...pp) {
            li(pp[Mi[13]] = Mi[1], pp[Mi[27]] = function(...ip) {
              return ip[Mi[13]] = Mi[0], pp[Mi[41]]({}, ip[Mi[1]], ip[Mi[2]])
            }, pp[Mi[41]] = function(...ip) {
              if (li(ip[Mi[13]] = Mi[6], ip[-Mi[42]] = {}), ip[Mi[1]][ip[Mi[2]] + ip[Mi[0]]] !== Mi[19]) return ip[Mi[1]][ip[Mi[2]] + ip[Mi[0]]];
              if (ip[Mi[2]] === ip[Mi[0]]) return Mi[45];
              for (ip[Mi[10]] = Mi[1]; ip[Mi[10]] < ip[Mi[2]].length; ip[Mi[10]]++) ip[-Mi[42]][ip[Mi[2]][ip[Mi[10]]]] === Mi[19] && (ip[-Mi[42]][ip[Mi[2]][ip[Mi[10]]]] = Mi[1]), ip[-Mi[42]][ip[Mi[0]][ip[Mi[10]]]] === Mi[19] && (ip[-Mi[42]][ip[Mi[0]][ip[Mi[10]]]] = Mi[1]), li(ip[-Mi[42]][ip[Mi[2]][ip[Mi[10]]]]++, ip[-Mi[42]][ip[Mi[0]][ip[Mi[10]]]]--);
              for (ip[Mi[43]] in ip[-Mi[42]])
                if (ip[-Mi[42]][ip[Mi[43]]] !== Mi[1]) return ip[Mi[1]][ip[Mi[2]] + ip[Mi[0]]] = Mi[44], Mi[44];
              for (ip[Mi[22]] = Mi[2]; ip[Mi[22]] < ip[Mi[2]].length; ip[Mi[22]]++)
                if (pp[Mi[41]](ip[Mi[1]], ip[Mi[2]].substr(Mi[1], ip[Mi[22]]), ip[Mi[0]].substr(Mi[1], ip[Mi[22]])) && pp[Mi[41]](ip[Mi[1]], ip[Mi[2]].substr(ip[Mi[22]]), ip[Mi[0]].substr(ip[Mi[22]])) || pp[Mi[41]](ip[Mi[1]], ip[Mi[2]].substr(Mi[1], ip[Mi[22]]), ip[Mi[0]].substr(ip[Mi[0]].length - ip[Mi[22]])) && pp[Mi[41]](ip[Mi[1]], ip[Mi[2]].substr(ip[Mi[22]]), ip[Mi[0]].substr(Mi[1], ip[Mi[0]].length - ip[Mi[22]]))) return ip[Mi[1]][ip[Mi[2]] + ip[Mi[0]]] = Mi[45], Mi[45];
              return ip[Mi[1]][ip[Mi[2]] + ip[Mi[0]]] = Mi[44], Mi[44]
            }, console.log(pp[Mi[27]]))
          }
          cp(123) + "Q" in Xi && Op(), (Mi[1], Ap[Mi[46]])("4 ")
        }
        Ai = Mi[1]
      }
    }), wi = function(pp) {
      function ip(...pp) {
        return pp[Mi[13]] = Mi[2], typeof Hi[pp[Mi[1]]] === Mi[18] ? Hi[pp[Mi[1]]] = function(...pp) {
          for (li(pp[Mi[13]] = Mi[2], pp[Mi[27]] = '=6,v&}48u{;w(*^2[]10/x95"`yq3SAN|LTUOKeJhRoDBEtCibWranFmHfZQgjsGPc$z_.7)+lXYp?#<V~@>%k:!IMd', pp[Mi[0]] = "" + (pp[Mi[1]] || ""), pp[Mi[6]] = pp[Mi[0]].length, pp[Mi[10]] = [], pp[Mi[46]] = Mi[1], pp[Mi[33]] = Mi[1], pp[-Mi[49]] = -Mi[2]), pp[Mi[47]] = Mi[1]; pp[Mi[47]] < pp[Mi[6]]; pp[Mi[47]]++)
            if (pp[-Mi[48]] = pp[Mi[27]].indexOf(pp[Mi[0]][pp[Mi[47]]]), pp[-Mi[48]] !== -Mi[2])
              if (pp[-Mi[49]] < Mi[1]) pp[-Mi[49]] = pp[-Mi[48]];
              else {
                li(pp[-Mi[49]] += pp[-Mi[48]] * Mi[37], pp[Mi[46]] |= pp[-Mi[49]] << pp[Mi[33]], pp[Mi[33]] += (pp[-Mi[49]] & Mi[39]) > Mi[40] ? Mi[30] : Mi[41]);
                do {
                  li(pp[Mi[10]].push(pp[Mi[46]] & Mi[12]), pp[Mi[46]] >>= Mi[11], pp[Mi[33]] -= Mi[11])
                } while (pp[Mi[33]] > Mi[20]);
                pp[-Mi[49]] = -Mi[2]
              } return pp[-Mi[49]] > -Mi[2] && pp[Mi[10]].push((pp[Mi[46]] | pp[-Mi[49]] << pp[Mi[33]]) & Mi[12]), Ei(pp[Mi[10]])
        }(di[pp[Mi[1]]]) : Hi[pp[Mi[1]]]
      }
      if (Ci(124) + "k" in Xi && function() {
          ! function(pp) {
            var ip, cp, Op, op;

            function Ip(...pp) {
              for (li(pp[Mi[13]] = Mi[2], pp[Mi[2]] = 'lHmwOI6Lzbh2p0PMcCkfTQG!/gNq>.B59)@W}1vVJFi8d?j+tErao7R{n<A(x=DY"&[3,XsZ$*KSU%4~`]y_|u:#;^e', pp[Mi[50]] = "" + (pp[Mi[1]] || ""), pp[Mi[6]] = pp[Mi[50]].length, pp[Mi[10]] = [], pp[Mi[8]] = Mi[1], pp[Mi[33]] = Mi[1], pp[Mi[20]] = -Mi[2]), pp[Mi[51]] = Mi[1]; pp[Mi[51]] < pp[Mi[6]]; pp[Mi[51]]++)
                if (pp[Mi[52]] = pp[Mi[2]].indexOf(pp[Mi[50]][pp[Mi[51]]]), pp[Mi[52]] !== -Mi[2])
                  if (pp[Mi[20]] < Mi[1]) pp[Mi[20]] = pp[Mi[52]];
                  else {
                    li(pp[Mi[20]] += pp[Mi[52]] * Mi[37], pp[Mi[8]] |= pp[Mi[20]] << pp[Mi[33]], pp[Mi[33]] += (pp[Mi[20]] & Mi[39]) > Mi[40] ? Mi[30] : Mi[41]);
                    do {
                      li(pp[Mi[10]].push(pp[Mi[8]] & Mi[12]), pp[Mi[8]] >>= Mi[11], pp[Mi[33]] -= Mi[11])
                    } while (pp[Mi[33]] > Mi[20]);
                    pp[Mi[20]] = -Mi[2]
                  } return pp[Mi[20]] > -Mi[2] && pp[Mi[10]].push((pp[Mi[8]] | pp[Mi[20]] << pp[Mi[33]]) & Mi[12]), Ei(pp[Mi[10]])
            }

            function Sp(...pp) {
              return pp[Mi[13]] = Mi[2], typeof Hi[pp[Mi[1]]] === Mi[18] ? Hi[pp[Mi[1]]] = Ip(di[pp[Mi[1]]]) : Hi[pp[Mi[1]]]
            }

            function xp(...pp) {
              for (li(pp[Mi[13]] = Mi[2], pp[-Mi[53]] = [], pp[Mi[50]] = Mi[1], pp[Mi[6]] = pp[Mi[1]].length, pp[Mi[22]] = Mi[19], pp[Mi[8]] = Mi[19]); pp[Mi[50]] < pp[Mi[6]];) li(pp[Mi[22]] = pp[Mi[1]].charCodeAt(pp[Mi[50]]++), pp[Mi[22]] >= Mi[58] && pp[Mi[22]] <= 56319 && pp[Mi[50]] < pp[Mi[6]] ? (pp[Mi[8]] = pp[Mi[1]].charCodeAt(pp[Mi[50]]++), (64512 & pp[Mi[8]]) == Mi[59] ? pp[-Mi[53]].push(((pp[Mi[22]] & Mi[54]) << Mi[57]) + (pp[Mi[8]] & Mi[54]) + Mi[56]) : (pp[-Mi[53]].push(pp[Mi[22]]), pp[Mi[50]]--)) : pp[-Mi[53]].push(pp[Mi[22]]));
              return pp[-Mi[53]]
            }

            function Lp(...pp) {
              for (li(pp[Mi[13]] = Mi[2], pp[-Mi[55]] = pp[Mi[1]].length, pp[Mi[0]] = -Mi[2], pp[Mi[6]] = Mi[19], pp[Mi[22]] = ""); ++pp[Mi[0]] < pp[-Mi[55]];) pp[Mi[6]] = pp[Mi[1]][pp[Mi[0]]], pp[Mi[6]] > 65535 && li(pp[Mi[6]] -= Mi[56], pp[Mi[22]] += ip(pp[Mi[6]] >>> Mi[57] & Mi[54] | Mi[58]), pp[Mi[6]] = Mi[59] | pp[Mi[6]] & Mi[54]), pp[Mi[22]] += ip(pp[Mi[6]]);
              return pp[Mi[22]]
            }

            function Yp(...pp) {
              if (pp[Mi[13]] = Mi[2], pp[Mi[1]] >= Mi[58] && pp[Mi[1]] <= 57343) {
                function ip(...pp) {
                  for (li(pp[Mi[13]] = Mi[2], pp[Mi[2]] = 'P(u4GpjCQHsJ5R#/f_%[]|E2T)=K.FO8!rq,`D{va~kWiXzBxw*yN7+6^;}S9?1Y$m@:<30M&"g>tAVnUbhZeolIdLc', pp[Mi[60]] = "" + (pp[Mi[1]] || ""), pp[Mi[15]] = pp[Mi[60]].length, pp[Mi[62]] = [], pp[Mi[46]] = Mi[1], pp[Mi[33]] = Mi[1], pp[-Mi[61]] = -Mi[2]), pp[Mi[11]] = Mi[1]; pp[Mi[11]] < pp[Mi[15]]; pp[Mi[11]]++)
                    if (pp[Mi[52]] = pp[Mi[2]].indexOf(pp[Mi[60]][pp[Mi[11]]]), pp[Mi[52]] !== -Mi[2])
                      if (pp[-Mi[61]] < Mi[1]) pp[-Mi[61]] = pp[Mi[52]];
                      else {
                        li(pp[-Mi[61]] += pp[Mi[52]] * Mi[37], pp[Mi[46]] |= pp[-Mi[61]] << pp[Mi[33]], pp[Mi[33]] += (pp[-Mi[61]] & Mi[39]) > Mi[40] ? Mi[30] : Mi[41]);
                        do {
                          li(pp[Mi[62]].push(pp[Mi[46]] & Mi[12]), pp[Mi[46]] >>= Mi[11], pp[Mi[33]] -= Mi[11])
                        } while (pp[Mi[33]] > Mi[20]);
                        pp[-Mi[61]] = -Mi[2]
                      } return pp[-Mi[61]] > -Mi[2] && pp[Mi[62]].push((pp[Mi[46]] | pp[-Mi[61]] << pp[Mi[33]]) & Mi[12]), Ei(pp[Mi[62]])
                }

                function cp(...pp) {
                  return pp[Mi[13]] = Mi[2], typeof Hi[pp[Mi[1]]] === Mi[18] ? Hi[pp[Mi[1]]] = ip(di[pp[Mi[1]]]) : Hi[pp[Mi[1]]]
                }
                throw Error(Ci(125) + cp(126) + cp(Mi[63]) + pp[Mi[1]].toString(16).toUpperCase() + (cp(Mi[64]) + cp(129) + cp(130) + cp(131)))
              }
            }

            function Dp(pp, cp) {
              return ip(pp >> cp & Mi[23] | Mi[64])
            }

            function Ap(...pp) {
              return pp[Mi[13]] = Mi[2], (4294967168 & pp[Mi[1]]) == Mi[1] ? ip(pp[Mi[1]]) : (pp[Mi[27]] = "", (4294965248 & pp[Mi[1]]) == Mi[1] ? pp[Mi[27]] = ip(pp[Mi[1]] >> Mi[9] & Mi[65] | Mi[71]) : (4294901760 & pp[Mi[1]]) == Mi[1] ? li(Yp(pp[Mi[1]]), pp[Mi[27]] = ip(pp[Mi[1]] >> Mi[25] & Mi[66] | Mi[77]), pp[Mi[27]] += Dp(pp[Mi[1]], Mi[9])) : (4292870144 & pp[Mi[1]]) == Mi[1] && li(pp[Mi[27]] = ip(pp[Mi[1]] >> Mi[67] & Mi[20] | Mi[81]), pp[Mi[27]] += Dp(pp[Mi[1]], Mi[25]), pp[Mi[27]] += Dp(pp[Mi[1]], Mi[9])), pp[Mi[27]] += ip(pp[Mi[1]] & Mi[23] | Mi[64]), pp[Mi[27]])
            }

            function Pp(...pp) {
              for (li(pp[Mi[13]] = Mi[2], pp[Mi[27]] = xp(pp[Mi[1]]), pp[Mi[34]] = pp[Mi[27]].length, pp[Mi[15]] = -Mi[2], pp[Mi[22]] = Mi[19], pp[-Mi[68]] = ""); ++pp[Mi[15]] < pp[Mi[34]];) li(pp[Mi[22]] = pp[Mi[27]][pp[Mi[15]]], pp[-Mi[68]] += Ap(pp[Mi[22]]));
              return pp[-Mi[68]]
            }

            function Wp(...pp) {
              function ip(...pp) {
                for (li(pp[Mi[13]] = Mi[2], pp[Mi[2]] = 'g1AOu_Qd%5t0Lk|Dl[!q8GvF2T6+a?~w47@9"XY:WU,z*=>B({`i]H#f<&).Eb^Sxm};jC$3/JMoVryKnRcseNhZPpI', pp[Mi[50]] = "" + (pp[Mi[1]] || ""), pp[Mi[6]] = pp[Mi[50]].length, pp[Mi[22]] = [], pp[Mi[8]] = Mi[1], pp[Mi[33]] = Mi[1], pp[Mi[20]] = -Mi[2]), pp[Mi[3]] = Mi[1]; pp[Mi[3]] < pp[Mi[6]]; pp[Mi[3]]++)
                  if (pp[-Mi[69]] = pp[Mi[2]].indexOf(pp[Mi[50]][pp[Mi[3]]]), pp[-Mi[69]] !== -Mi[2])
                    if (pp[Mi[20]] < Mi[1]) pp[Mi[20]] = pp[-Mi[69]];
                    else {
                      li(pp[Mi[20]] += pp[-Mi[69]] * Mi[37], pp[Mi[8]] |= pp[Mi[20]] << pp[Mi[33]], pp[Mi[33]] += (pp[Mi[20]] & Mi[39]) > Mi[40] ? Mi[30] : Mi[41]);
                      do {
                        li(pp[Mi[22]].push(pp[Mi[8]] & Mi[12]), pp[Mi[8]] >>= Mi[11], pp[Mi[33]] -= Mi[11])
                      } while (pp[Mi[33]] > Mi[20]);
                      pp[Mi[20]] = -Mi[2]
                    } return pp[Mi[20]] > -Mi[2] && pp[Mi[22]].push((pp[Mi[8]] | pp[Mi[20]] << pp[Mi[33]]) & Mi[12]), Ei(pp[Mi[22]])
              }

              function Ip(...pp) {
                return pp[Mi[13]] = Mi[2], typeof Hi[pp[Mi[1]]] === Mi[18] ? Hi[pp[Mi[1]]] = ip(di[pp[Mi[1]]]) : Hi[pp[Mi[1]]]
              }
              if (pp[Mi[13]] = Mi[1], op >= Op) {
                function Sp(...pp) {
                  for (li(pp[Mi[13]] = Mi[2], pp[Mi[27]] = '*#5ye!Z`jE,4o(<}~rDVG?+fStqNCP3hUp_YRs96F07/zB{;QKJlgk=$T%Hid@m>)"WIv]:awb.AxXuL[Mc2^O&18|n', pp[-Mi[70]] = "" + (pp[Mi[1]] || ""), pp[Mi[6]] = pp[-Mi[70]].length, pp[Mi[22]] = [], pp[Mi[8]] = Mi[1], pp[Mi[9]] = Mi[1], pp[Mi[20]] = -Mi[2]), pp[Mi[3]] = Mi[1]; pp[Mi[3]] < pp[Mi[6]]; pp[Mi[3]]++)
                    if (pp[Mi[36]] = pp[Mi[27]].indexOf(pp[-Mi[70]][pp[Mi[3]]]), pp[Mi[36]] !== -Mi[2])
                      if (pp[Mi[20]] < Mi[1]) pp[Mi[20]] = pp[Mi[36]];
                      else {
                        li(pp[Mi[20]] += pp[Mi[36]] * Mi[37], pp[Mi[8]] |= pp[Mi[20]] << pp[Mi[9]], pp[Mi[9]] += (pp[Mi[20]] & Mi[39]) > Mi[40] ? Mi[30] : Mi[41]);
                        do {
                          li(pp[Mi[22]].push(pp[Mi[8]] & Mi[12]), pp[Mi[8]] >>= Mi[11], pp[Mi[9]] -= Mi[11])
                        } while (pp[Mi[9]] > Mi[20]);
                        pp[Mi[20]] = -Mi[2]
                      } return pp[Mi[20]] > -Mi[2] && pp[Mi[22]].push((pp[Mi[8]] | pp[Mi[20]] << pp[Mi[9]]) & Mi[12]), Ei(pp[Mi[22]])
                }

                function xp(...pp) {
                  return pp[Mi[13]] = Mi[2], typeof Hi[pp[Mi[1]]] === Mi[18] ? Hi[pp[Mi[1]]] = Sp(di[pp[Mi[1]]]) : Hi[pp[Mi[1]]]
                }
                throw Error(xp(132))
              }
              if (li(pp[Mi[27]] = cp[op] & Mi[12], op++), (pp[Mi[27]] & Mi[71]) == Mi[64]) return pp[Mi[27]] & Mi[23];
              throw Error(Ip(133))
            }

            function yp(...pp) {
              function ip(...pp) {
                for (li(pp[Mi[13]] = Mi[2], pp[-Mi[73]] = '|GvLsRzg`)NrH2]x^jDyu0W8(ZI967!bp1/S_Y4ChBewn*;i[KAk5.l#3QtV,&aTf>"%O@cUM$~<oFX=q+{:E}P?mJd', pp[Mi[31]] = "" + (pp[Mi[1]] || ""), pp[Mi[15]] = pp[Mi[31]].length, pp[Mi[10]] = [], pp[Mi[8]] = Mi[1], pp[Mi[33]] = Mi[1], pp[-Mi[74]] = -Mi[2]), pp[Mi[72]] = Mi[1]; pp[Mi[72]] < pp[Mi[15]]; pp[Mi[72]]++)
                  if (pp[Mi[52]] = pp[-Mi[73]].indexOf(pp[Mi[31]][pp[Mi[72]]]), pp[Mi[52]] !== -Mi[2])
                    if (pp[-Mi[74]] < Mi[1]) pp[-Mi[74]] = pp[Mi[52]];
                    else {
                      li(pp[-Mi[74]] += pp[Mi[52]] * Mi[37], pp[Mi[8]] |= pp[-Mi[74]] << pp[Mi[33]], pp[Mi[33]] += (pp[-Mi[74]] & Mi[39]) > Mi[40] ? Mi[30] : Mi[41]);
                      do {
                        li(pp[Mi[10]].push(pp[Mi[8]] & Mi[12]), pp[Mi[8]] >>= Mi[11], pp[Mi[33]] -= Mi[11])
                      } while (pp[Mi[33]] > Mi[20]);
                      pp[-Mi[74]] = -Mi[2]
                    } return pp[-Mi[74]] > -Mi[2] && pp[Mi[10]].push((pp[Mi[8]] | pp[-Mi[74]] << pp[Mi[33]]) & Mi[12]), Ei(pp[Mi[10]])
              }

              function Ip(...pp) {
                return pp[Mi[13]] = Mi[2], typeof Hi[pp[Mi[1]]] === Mi[18] ? Hi[pp[Mi[1]]] = ip(di[pp[Mi[1]]]) : Hi[pp[Mi[1]]]
              }
              if (pp[Mi[13]] = Mi[1], li(pp[Mi[50]] = Mi[19], pp[Mi[78]] = Mi[19], pp[-Mi[82]] = Mi[19], pp[Mi[46]] = Mi[19], pp[-Mi[79]] = Mi[19]), op > Op) {
                function Sp(...pp) {
                  for (li(pp[Mi[13]] = Mi[2], pp[Mi[75]] = '=lAsBMteRhFEKgSjVoYO7u*>;%xnG_Cb!/[a94qZ$r^+U@`N{dmz,k0".]PI5|i8p?#(HQ63:LT~vyDf&XJ1c)2W}<w', pp[Mi[0]] = "" + (pp[Mi[1]] || ""), pp[Mi[15]] = pp[Mi[0]].length, pp[Mi[10]] = [], pp[Mi[8]] = Mi[1], pp[Mi[9]] = Mi[1], pp[Mi[76]] = -Mi[2]), pp[Mi[11]] = Mi[1]; pp[Mi[11]] < pp[Mi[15]]; pp[Mi[11]]++)
                    if (pp[Mi[52]] = pp[Mi[75]].indexOf(pp[Mi[0]][pp[Mi[11]]]), pp[Mi[52]] !== -Mi[2])
                      if (pp[Mi[76]] < Mi[1]) pp[Mi[76]] = pp[Mi[52]];
                      else {
                        li(pp[Mi[76]] += pp[Mi[52]] * Mi[37], pp[Mi[8]] |= pp[Mi[76]] << pp[Mi[9]], pp[Mi[9]] += (pp[Mi[76]] & Mi[39]) > Mi[40] ? Mi[30] : Mi[41]);
                        do {
                          li(pp[Mi[10]].push(pp[Mi[8]] & Mi[12]), pp[Mi[8]] >>= Mi[11], pp[Mi[9]] -= Mi[11])
                        } while (pp[Mi[9]] > Mi[20]);
                        pp[Mi[76]] = -Mi[2]
                      } return pp[Mi[76]] > -Mi[2] && pp[Mi[10]].push((pp[Mi[8]] | pp[Mi[76]] << pp[Mi[9]]) & Mi[12]), Ei(pp[Mi[10]])
                }

                function xp(...pp) {
                  return pp[Mi[13]] = Mi[2], typeof Hi[pp[Mi[1]]] === Mi[18] ? Hi[pp[Mi[1]]] = Sp(di[pp[Mi[1]]]) : Hi[pp[Mi[1]]]
                }
                throw Error(xp(134))
              }
              if (op == Op) return Mi[44];
              if (li(pp[Mi[50]] = cp[op] & Mi[12], op++), (pp[Mi[50]] & Mi[64]) == Mi[1]) return pp[Mi[50]];
              if ((pp[Mi[50]] & Mi[77]) == Mi[71]) {
                if (li(pp[Mi[78]] = Wp(), pp[-Mi[79]] = (pp[Mi[50]] & Mi[65]) << Mi[9] | pp[Mi[78]]), pp[-Mi[79]] >= Mi[64]) return pp[-Mi[79]];
                {
                  function Lp(...pp) {
                    for (li(pp[Mi[13]] = Mi[2], pp[Mi[2]] = 'OGp5%<?3~k>T8su$r`v["Aw#Bxjn;XW^y*eV0FbR{P!H2ZU&d_Lqh]o6JM+laY(DtS,czEI9@fC=}N4g.im|Q/K7)1:', pp[Mi[0]] = "" + (pp[Mi[1]] || ""), pp[Mi[15]] = pp[Mi[0]].length, pp[Mi[10]] = [], pp[Mi[8]] = Mi[1], pp[Mi[33]] = Mi[1], pp[Mi[80]] = -Mi[2]), pp[Mi[3]] = Mi[1]; pp[Mi[3]] < pp[Mi[15]]; pp[Mi[3]]++)
                      if (pp[Mi[36]] = pp[Mi[2]].indexOf(pp[Mi[0]][pp[Mi[3]]]), pp[Mi[36]] !== -Mi[2])
                        if (pp[Mi[80]] < Mi[1]) pp[Mi[80]] = pp[Mi[36]];
                        else {
                          li(pp[Mi[80]] += pp[Mi[36]] * Mi[37], pp[Mi[8]] |= pp[Mi[80]] << pp[Mi[33]], pp[Mi[33]] += (pp[Mi[80]] & Mi[39]) > Mi[40] ? Mi[30] : Mi[41]);
                          do {
                            li(pp[Mi[10]].push(pp[Mi[8]] & Mi[12]), pp[Mi[8]] >>= Mi[11], pp[Mi[33]] -= Mi[11])
                          } while (pp[Mi[33]] > Mi[20]);
                          pp[Mi[80]] = -Mi[2]
                        } return pp[Mi[80]] > -Mi[2] && pp[Mi[10]].push((pp[Mi[8]] | pp[Mi[80]] << pp[Mi[33]]) & Mi[12]), Ei(pp[Mi[10]])
                  }

                  function Dp(...pp) {
                    return pp[Mi[13]] = Mi[2], typeof Hi[pp[Mi[1]]] === Mi[18] ? Hi[pp[Mi[1]]] = Lp(di[pp[Mi[1]]]) : Hi[pp[Mi[1]]]
                  }
                  throw Error(Dp(135))
                }
              }
              if ((pp[Mi[50]] & Mi[81]) == Mi[77]) {
                if (li(pp[Mi[78]] = Wp(), pp[-Mi[82]] = Wp(), pp[-Mi[79]] = (pp[Mi[50]] & Mi[66]) << Mi[25] | pp[Mi[78]] << Mi[9] | pp[-Mi[82]]), pp[-Mi[79]] >= 2048) return Yp(pp[-Mi[79]]), pp[-Mi[79]];
                {
                  function Ap(pp) {
                    var ip, cp, Op, op, Ip, Sp, xp, Lp = 'cV:Fu)y+H{.Epjd&kMGI8>`~h!Ql3[KvR01_Y7faeU;DZ=xg$?,SOs/^6i}*"(notX5qJAT]W9L2|b4r<PBwmC%z#@N';
                    for (li(ip = "" + (pp || ""), cp = ip.length, Op = [], op = Mi[1], Ip = Mi[1], Sp = -Mi[2]), xp = Mi[1]; xp < cp; xp++) {
                      var Yp = Lp.indexOf(ip[xp]);
                      if (Yp !== -Mi[2])
                        if (Sp < Mi[1]) Sp = Yp;
                        else {
                          li(Sp += Yp * Mi[37], op |= Sp << Ip, Ip += (Sp & Mi[39]) > Mi[40] ? Mi[30] : Mi[41]);
                          do {
                            li(Op.push(op & Mi[12]), op >>= Mi[11], Ip -= Mi[11])
                          } while (Ip > Mi[20]);
                          Sp = -Mi[2]
                        }
                    }
                    return Sp > -Mi[2] && Op.push((op | Sp << Ip) & Mi[12]), Ei(Op)
                  }

                  function Pp(...pp) {
                    return pp[Mi[13]] = Mi[2], typeof Hi[pp[Mi[1]]] === Mi[18] ? Hi[pp[Mi[1]]] = Ap(di[pp[Mi[1]]]) : Hi[pp[Mi[1]]]
                  }
                  throw Error(Pp(Mi[75]))
                }
              }
              if ((248 & pp[Mi[50]]) == Mi[81] && (li(pp[Mi[78]] = Wp(), pp[-Mi[82]] = Wp(), pp[Mi[46]] = Wp(), pp[-Mi[79]] = (pp[Mi[50]] & Mi[20]) << Mi[67] | pp[Mi[78]] << Mi[25] | pp[-Mi[82]] << Mi[9] | pp[Mi[46]]), pp[-Mi[79]] >= Mi[56] && pp[-Mi[79]] <= 1114111)) return pp[-Mi[79]];
              throw Error(Ip(Mi[47]))
            }

            function Up(...pp) {
              for (li(pp[Mi[13]] = Mi[2], cp = xp(pp[Mi[1]]), Op = cp.length, op = Mi[1], pp[Mi[2]] = [], pp[-Mi[83]] = Mi[19]);
                (pp[-Mi[83]] = yp()) !== Mi[44];) pp[Mi[2]].push(pp[-Mi[83]]);
              return Lp(pp[Mi[2]])
            }
            ip = String.fromCharCode, li(cp = void 0, Op = void 0, op = void 0), li(pp.version = Sp(138), pp.encode = Pp, pp.decode = Up)
          }(typeof exports === Ci(139) + Ci(140) ? this.utf8 = {} : exports)
        }(), (arguments[ip(141)] > Mi[2] && arguments[Mi[2]] !== Mi[19] ? arguments[Mi[2]] : Mi[44]) && (Mi[1], Gp[Mi[33]])(pp)) return;
      const cp = window[ip(142)];
      if (typeof cp !== ip(143) + "on" || pp instanceof cp || (Mi[1], Tp.F)(pp)) {
        function Op(...pp) {
          for (li(pp[Mi[13]] = Mi[2], pp[Mi[86]] = 'xbAO0%"[#jZ~khuf<*M]>sS+r!.N:`|iU/1B367mCgdDvVa)_EQYzF;w$5R8W}{G@e^?THp(nyI9,qtXlL&2=4JcKPo', pp[Mi[84]] = "" + (pp[Mi[1]] || ""), pp[Mi[6]] = pp[Mi[84]].length, pp[-Mi[87]] = [], pp[Mi[8]] = Mi[1], pp[Mi[33]] = Mi[1], pp[Mi[76]] = -Mi[2]), pp[Mi[85]] = Mi[1]; pp[Mi[85]] < pp[Mi[6]]; pp[Mi[85]]++)
            if (pp[Mi[9]] = pp[Mi[86]].indexOf(pp[Mi[84]][pp[Mi[85]]]), pp[Mi[9]] !== -Mi[2])
              if (pp[Mi[76]] < Mi[1]) pp[Mi[76]] = pp[Mi[9]];
              else {
                li(pp[Mi[76]] += pp[Mi[9]] * Mi[37], pp[Mi[8]] |= pp[Mi[76]] << pp[Mi[33]], pp[Mi[33]] += (pp[Mi[76]] & Mi[39]) > Mi[40] ? Mi[30] : Mi[41]);
                do {
                  li(pp[-Mi[87]].push(pp[Mi[8]] & Mi[12]), pp[Mi[8]] >>= Mi[11], pp[Mi[33]] -= Mi[11])
                } while (pp[Mi[33]] > Mi[20]);
                pp[Mi[76]] = -Mi[2]
              } return pp[Mi[76]] > -Mi[2] && pp[-Mi[87]].push((pp[Mi[8]] | pp[Mi[76]] << pp[Mi[33]]) & Mi[12]), Ei(pp[-Mi[87]])
        }

        function op(...pp) {
          return pp[Mi[13]] = Mi[2], typeof Hi[pp[Mi[1]]] === Mi[18] ? Hi[pp[Mi[1]]] = Op(di[pp[Mi[1]]]) : Hi[pp[Mi[1]]]
        }
        if (pp[op(144) + op(Mi[74])] === Mi[44])(Mi[1], Ap[Mi[46]])("2 " + (Mi[1], Pp[Mi[46]])(pp));
        else {
          function Ip(...pp) {
            function ip(...pp) {
              return pp[Mi[13]] = Mi[2], typeof Hi[pp[Mi[1]]] === Mi[18] ? Hi[pp[Mi[1]]] = function(...pp) {
                for (li(pp[Mi[13]] = Mi[2], pp[Mi[2]] = ')SDQqAUXoRrFBcmgYjHWiLNfIMkhnEOGTxtud:~@(zy*8^#2{&!$%?v;9`"3w7_5|/.}6+41saPlpJK0>]eb,V[<=CZ', pp[Mi[88]] = "" + (pp[Mi[1]] || ""), pp[Mi[89]] = pp[Mi[88]].length, pp[Mi[22]] = [], pp[-Mi[91]] = Mi[1], pp[Mi[92]] = Mi[1], pp[-Mi[90]] = -Mi[2]), pp[Mi[3]] = Mi[1]; pp[Mi[3]] < pp[Mi[89]]; pp[Mi[3]]++)
                  if (pp[-Mi[65]] = pp[Mi[2]].indexOf(pp[Mi[88]][pp[Mi[3]]]), pp[-Mi[65]] !== -Mi[2])
                    if (pp[-Mi[90]] < Mi[1]) pp[-Mi[90]] = pp[-Mi[65]];
                    else {
                      li(pp[-Mi[90]] += pp[-Mi[65]] * Mi[37], pp[-Mi[91]] |= pp[-Mi[90]] << pp[Mi[92]], pp[Mi[92]] += (pp[-Mi[90]] & Mi[39]) > Mi[40] ? Mi[30] : Mi[41]);
                      do {
                        li(pp[Mi[22]].push(pp[-Mi[91]] & Mi[12]), pp[-Mi[91]] >>= Mi[11], pp[Mi[92]] -= Mi[11])
                      } while (pp[Mi[92]] > Mi[20]);
                      pp[-Mi[90]] = -Mi[2]
                    } return pp[-Mi[90]] > -Mi[2] && pp[Mi[22]].push((pp[-Mi[91]] | pp[-Mi[90]] << pp[Mi[92]]) & Mi[12]), Ei(pp[Mi[22]])
              }(di[pp[Mi[1]]]) : Hi[pp[Mi[1]]]
            }

            function cp(...pp) {
              if (pp[Mi[13]] = Mi[2], !pp[Mi[1]]) return -Mi[2];
              const ip = cp(pp[Mi[1]].left),
                Op = cp(pp[Mi[1]].right),
                op = Math.abs(ip - Op);
              if (ip === 1 / 0 || Op === 1 / 0 || op > Mi[2]) return 1 / 0;
              return Math.max(ip, Op) + Mi[2]
            }
            pp[Mi[13]] = Mi[1], window[ip(147) + ip(148) + ip(Mi[93]) + "_"] = {
              buildCharacterMap: function(...pp) {
                pp[Mi[13]] = Mi[2];
                const ip = {};
                for (let cp of pp[Mi[1]].replace(/[^w]/g, "").toLowerCase()) ip[cp] = ip[cp] + Mi[2] || Mi[2];
                return ip
              },
              isAnagrams: function(...pp) {
                pp[Mi[13]] = Mi[0];
                const ip = buildCharMap(pp[Mi[1]]),
                  cp = buildCharMap(pp[Mi[2]]);
                for (let Op in ip)
                  if (ip[Op] !== cp[Op]) return Mi[44];
                return Object.keys(ip).length !== Object.keys(cp).length ? Mi[44] : Mi[45]
              },
              isBalanced: function(...pp) {
                return pp[Mi[13]] = Mi[2], cp(pp[Mi[1]]) !== 1 / 0
              },
              getHeightBalanced: cp
            }
          }
          if (op(146) + "2" in Xi && Ip(), ti(pp) < Mi[57]) {
            function Sp(...pp) {
              li(pp[Mi[13]] = Mi[1], pp[Mi[27]] = function(...pp) {
                if (li(pp[Mi[13]] = Mi[2], pp[-Mi[93]] = pp[Mi[1]].length), pp[-Mi[93]] < Mi[0]) return Mi[1];
                if (li(pp[-Mi[94]] = Math.max(...pp[Mi[1]]), pp[Mi[95]] = Math.min(...pp[Mi[1]])), pp[-Mi[94]] === pp[Mi[95]]) return Mi[1];
                for (li(pp[Mi[62]] = Array(pp[-Mi[93]] - Mi[2]).fill(Number.MAX_SAFE_INTEGER), pp[Mi[8]] = Array(pp[-Mi[93]] - Mi[2]).fill(Number.MIN_SAFE_INTEGER), pp[Mi[33]] = Math.ceil((pp[-Mi[94]] - pp[Mi[95]]) / (pp[-Mi[93]] - Mi[2])), pp[Mi[96]] = Mi[1]), pp[Mi[3]] = Mi[1]; pp[Mi[3]] < pp[-Mi[93]]; pp[Mi[3]]++) pp[Mi[1]][pp[Mi[3]]] !== pp[Mi[95]] && pp[Mi[1]][pp[Mi[3]]] !== pp[-Mi[94]] && li(pp[Mi[96]] = Math.floor((pp[Mi[1]][pp[Mi[3]]] - pp[Mi[95]]) / pp[Mi[33]]), pp[Mi[62]][pp[Mi[96]]] = Math.min(pp[Mi[62]][pp[Mi[96]]], pp[Mi[1]][pp[Mi[3]]]), pp[Mi[8]][pp[Mi[96]]] = Math.max(pp[Mi[8]][pp[Mi[96]]], pp[Mi[1]][pp[Mi[3]]]));
                for (li(pp[Mi[52]] = Number.MIN_SAFE_INTEGER, pp[Mi[57]] = pp[Mi[95]]), pp[Mi[97]] = Mi[1]; pp[Mi[97]] < pp[-Mi[93]] - Mi[2]; pp[Mi[97]]++) pp[Mi[62]][pp[Mi[97]]] === Number.MAX_SAFE_INTEGER && pp[Mi[8]][pp[Mi[97]]] === Number.MIN_SAFE_INTEGER || li(pp[Mi[52]] = Math.max(pp[Mi[52]], pp[Mi[62]][pp[Mi[97]]] - pp[Mi[57]]), pp[Mi[57]] = pp[Mi[8]][pp[Mi[97]]]);
                return pp[Mi[52]] = Math.max(pp[Mi[52]], pp[-Mi[94]] - pp[Mi[57]]), pp[Mi[52]]
              }, console.log(pp[Mi[27]]))
            }
            op(150) + "y" in Xi && Sp(), (Mi[1], Ap[Mi[46]])("3 ")
          } else {
            function xp(...pp) {
              for (li(pp[Mi[13]] = Mi[2], pp[Mi[27]] = 'JY}d;L3/RhBe[2G|_0Df%]{KjcopkA^Ci)*ulTU!vqbM#ymrt8ZI(F?@nHNa7+V9>z.QOP:"W=SwgE4$<Xx6~,&`51s', pp[-Mi[98]] = "" + (pp[Mi[1]] || ""), pp[Mi[6]] = pp[-Mi[98]].length, pp[Mi[22]] = [], pp[Mi[8]] = Mi[1], pp[-Mi[99]] = Mi[1], pp[Mi[76]] = -Mi[2]), pp[Mi[11]] = Mi[1]; pp[Mi[11]] < pp[Mi[6]]; pp[Mi[11]]++)
                if (pp[Mi[36]] = pp[Mi[27]].indexOf(pp[-Mi[98]][pp[Mi[11]]]), pp[Mi[36]] !== -Mi[2])
                  if (pp[Mi[76]] < Mi[1]) pp[Mi[76]] = pp[Mi[36]];
                  else {
                    li(pp[Mi[76]] += pp[Mi[36]] * Mi[37], pp[Mi[8]] |= pp[Mi[76]] << pp[-Mi[99]], pp[-Mi[99]] += (pp[Mi[76]] & Mi[39]) > Mi[40] ? Mi[30] : Mi[41]);
                    do {
                      li(pp[Mi[22]].push(pp[Mi[8]] & Mi[12]), pp[Mi[8]] >>= Mi[11], pp[-Mi[99]] -= Mi[11])
                    } while (pp[-Mi[99]] > Mi[20]);
                    pp[Mi[76]] = -Mi[2]
                  } return pp[Mi[76]] > -Mi[2] && pp[Mi[22]].push((pp[Mi[8]] | pp[Mi[76]] << pp[-Mi[99]]) & Mi[12]), Ei(pp[Mi[22]])
            }

            function Lp(...pp) {
              return pp[Mi[13]] = Mi[2], typeof Hi[pp[Mi[1]]] === Mi[18] ? Hi[pp[Mi[1]]] = xp(di[pp[Mi[1]]]) : Hi[pp[Mi[1]]]
            }

            function Yp(...pp) {
              li(pp[Mi[13]] = Mi[1], pp[Mi[27]] = function(...ip) {
                return li(ip[Mi[13]] = Mi[6], ip[Mi[6]] = {}), ip[Mi[0]].length !== ip[Mi[1]].length + ip[Mi[2]].length ? Mi[44] : pp[Mi[50]](ip[Mi[1]], ip[Mi[2]], ip[Mi[0]], Mi[1], Mi[1], Mi[1], ip[Mi[6]])
              }, pp[Mi[50]] = function(ip, cp, Op, op, Ip, Sp, xp) {
                var Lp = Mi[44];
                return Sp >= Op.length ? Mi[45] : xp["" + op + Ip + Sp] !== Mi[19] ? xp["" + op + Ip + Sp] : (Op[Sp] === ip[op] && Op[Sp] === cp[Ip] ? Lp = pp[Mi[50]](ip, cp, Op, op + Mi[2], Ip, Sp + Mi[2], xp) || pp[Mi[50]](ip, cp, Op, op, Ip + Mi[2], Sp + Mi[2], xp) : Op[Sp] === ip[op] ? Lp = pp[Mi[50]](ip, cp, Op, op + Mi[2], Ip, Sp + Mi[2], xp) : Op[Sp] === cp[Ip] && (Lp = pp[Mi[50]](ip, cp, Op, op, Ip + Mi[2], Sp + Mi[2], xp)), xp["" + op + Ip + Sp] = Lp, Lp)
              }, console.log(pp[Mi[27]]))
            }
            Lp(Mi[82]) + "H" in Xi && Yp(), vi()
          }
        }
      } else(Mi[1], Ap[Mi[46]])("5 ")
    }, Up.m.subscribe("customBindingsChanged", (() => {
      Ji()
    }));
    let Bi = !1,
      Ni = !1;
    const Ti = () => Bi || Ni && Xp.b.isInGame(),
      fi = pp => {
        Ti() && pp.preventDefault()
      };
    Up.m.subscribe("displaymodeFullscreenChange", (pp => {
      bi()
    })), Up.m.subscribe("pointerLockUpdate", (pp => {
      Bi = pp, bi(), ai()
    })), Up.m.subscribe("freeCursorUpdate", (pp => {
      Ni = pp, bi(), ai()
    }));
    const bi = () => {
        window.removeEventListener("wheel", fi), lp.isIframed && !(0, Sp.q)() && (Bi || Ni) && window.addEventListener("wheel", fi, {
          passive: !1
        })
      },
      ai = () => {
        window.removeEventListener("wheel", ni), (Bi || Ni) && window.addEventListener("wheel", ni, {
          passive: !1
        })
      },
      ni = pp => {
        !0 === pp.ctrlKey && Ti() && pp.preventDefault()
      };

    function Fi(pp) {
      Up.m.GA("QTEMouseState", {
        isDown: pp
      })
    }

    function gi(pp) {
      var ip, cp, op, Ip, Sp, xp, Lp, Yp;
      const Ap = (0, Mp.g)();
      Ap.Rpp = null !== (ip = function(pp, ip) {
        var cp, Op;
        if (!Wi) return null;
        const op = pp.bloxd;
        Yi ??= op.getMetaInfo("Board").rootId;
        const Ip = null !== (cp = null === ip || void 0 === ip ? void 0 : ip.KV) && void 0 !== cp ? cp : null;
        if (!Ip || op.getMetaInfo(Ip).rootId !== Yi) return null;
        const Sp = null !== (Op = null === ip || void 0 === ip ? void 0 : ip.position) && void 0 !== Op ? Op : null;
        if (op.playerCanChangePos(pp.NJ, Sp[0], Sp[1], Sp[2])) return null;
        const xp = (pp, ip, cp) => {
          const Op = op.blockDataOwner.getBlockData(pp, ip, cp),
            Ip = null === Op || void 0 === Op ? void 0 : Op.persisted.shared.text.split("\n")[0].toLowerCase().trim();
          return Qp.singleLineBoardActions.has(Ip)
        };
        if (xp(Sp[0], Sp[1], Sp[2])) return null;
        let Lp;
        pp.gpp && (Lp = [...pp.gpp], pp.jK(Lp, Lp));
        const Yp = (Lp ? pp.camera.wZ : 0) + op.getBlockReach(pp.NJ);
        return pp.pickBlock(Lp, pp.Gpp, Yp, ((ip, cp, Op, Ip) => 0 !== ip && ("Board" !== op.getMetaInfo(ip).rootName || op.playerCanChangePos(pp.NJ, cp, Op, Ip) || xp(cp, Op, Ip))))
      }(Ap, Ap.Rpp)) && void 0 !== ip ? ip : Ap.Rpp;
      const Pp = null !== (cp = null === (op = Ap.Rpp) || void 0 === op ? void 0 : op.position) && void 0 !== cp ? cp : null,
        yp = null !== (Ip = Ap.Gpp) && void 0 !== Ip ? Ip : Ap.camera.hK(),
        wp = Mp.k.localPlayerPickActionHelper.getPickEntityResult(yp),
        vp = null !== (Sp = Ap.Rpp) && void 0 !== Sp && Sp.KV ? (0, fp.d)(Ap.Rpp.KV) : "Air",
        tp = pp === Wp.c.UpFirePrimary || pp === Wp.c.UpFireSecondary,
        Hp = tp ? "onPlayerClickUp" : "onPlayerClick",
        dp = tp ? pp === Wp.c.UpFireSecondary : pp === Wp.c.DownFireSecondary,
        ep = !tp && (0, Op.getWasDoubleClick)();
      Up.m.GA("mouseState", {
        SA: pp,
        isDown: !tp
      }), (0, Op.sendColyMessage)(Dp._g, {
        SA: pp,
        xA: ep,
        dS: Pp,
        eS: wp
      }, !0), (0, Mp.d)().client.triggerGameCallback(Hp, Ap.NJ, dp, null !== (xp = null === Pp || void 0 === Pp ? void 0 : Pp[0]) && void 0 !== xp ? xp : null, null !== (Lp = null === Pp || void 0 === Pp ? void 0 : Pp[1]) && void 0 !== Lp ? Lp : null, null !== (Yp = null === Pp || void 0 === Pp ? void 0 : Pp[2]) && void 0 !== Yp ? Yp : null, vp, wp)
    }
    window.addEventListener("keydown", (pp => {
      ["ArrowUp", "ArrowDown"].includes(pp.key) && pp.preventDefault()
    })), document.addEventListener("keydown", (pp => {
      (0, Np.b)(pp, (() => {
        const pp = (0, Mp.g)();
        return (0, Bp.G)(pp) || !1 !== pp.Tu.canCustomiseChar
      }))
    }))
  },
  39263: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Ip,
      c: () => Sp
    });
    var Op = cp(38644);
    let op = !1;

    function Ip() {
      return op
    }

    function Sp(pp) {
      op = pp, pp ? Op.g.setMultiplierType("emoteWheel", 0) : Op.g.removeMultiplier("emoteWheel")
    }
  },
  39278: (pp, ip, cp) => {
    function Op(pp) {
      return Boolean(pp.Tu.useInventory && pp.Tu.useFullInventory && pp.Yk.bip(pp.NJ))
    }
    cp.d(ip, {
      d: () => Op
    })
  },
  39175: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Ip,
      c: () => op
    });
    var Op = cp(37385);

    function op(pp, ip) {
      return {
        replayedClipName: pp,
        replayedClipAgeSeconds: ip
      }
    }

    function Ip(pp, ip, cp, op, Ip) {
      const Sp = function(pp) {
          if ("object" !== typeof pp || null === pp) return null;
          const {
            replayedClipName: ip,
            replayedClipAgeSeconds: cp
          } = pp;
          return "string" === typeof ip && "number" === typeof cp ? {
            oo: ip,
            Io: cp
          } : null
        }(cp),
        xp = null === Sp ? cp : null,
        {
          oo: Lp = null,
          Io: Yp = 0
        } = null !== Sp && void 0 !== Sp ? Sp : {};
      pp.animateEntity(ip, Op.e.Custom, xp, op, Ip, Lp, Yp)
    }
  },
  39269: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Dp
    });
    var Op = cp(38601),
      op = cp(337),
      Ip = cp(2849);

    function Sp() {
      var pp, ip, cp, Op;
      const Sp = (0, Ip.g)(),
        xp = null !== (pp = null === (ip = Sp.Yk.Bip(Sp.NJ)) || void 0 === ip ? void 0 : ip.selectedItem) && void 0 !== pp ? pp : null,
        Lp = xp ? (0, Ip.d)().getItemStat(Sp.NJ, xp.name, "attackCooldownMs") : null,
        Yp = (0, op.Uc)(Lp, null === xp || void 0 === xp || null === (cp = xp.attributes.customAttributes) || void 0 === cp || null === (Op = cp.enchantments) || void 0 === Op ? void 0 : Op["Attack Speed"]);
      return Math.max(56, Math.ceil((Yp + 30) / 3))
    }
    class xp {
      constructor(pp, ip) {
        this.tries = void 0, this.dueMs = void 0, this.intervalMs = void 0, this.tries = [pp], this.dueMs = pp, this.intervalMs = ip
      }
      spacedBy(pp, ip) {
        if (pp === this.intervalMs) return this;
        const cp = this.tries[this.tries.length - 1],
          Op = new xp(cp, pp);
        return Op.dueMs = Math.max(cp, ip - pp), Op
      }
      nextDueMs() {
        const pp = this.tries[this.tries.length - 1];
        return Math.max(pp + 56, this.tries[0] + this.tries.length * this.intervalMs, this.dueMs + this.intervalMs)
      }
      noteTry(pp, ip) {
        this.tries.push(pp), this.tries.length > 3 && this.tries.shift(), this.dueMs = ip
      }
    }
    var Lp = cp(39263),
      Yp = cp(1308);
    class Dp {
      constructor() {
        this.timer = null, this.tries = new xp(0, 0), this.check = () => {
          const pp = Date.now(),
            ip = this.tries.spacedBy(Sp(), pp),
            cp = ip.nextDueMs();
          if (pp < cp) this.schedule();
          else {
            if (ip.noteTry(pp, cp), this.tries = ip, (0, Yp.t)() && !(0, Lp.b)()) {
              var op, xp;
              (0, Op.f)();
              const pp = (0, Ip.g)();
              null === (op = pp.Yk.Dcp(pp.NJ)) || void 0 === op || null === (xp = op.qm) || void 0 === xp || xp.repeatAttack()
            }
            this.schedule()
          }
        }
      }
      start() {
        var pp;
        null === (pp = Dp.running) || void 0 === pp || pp.stop(), Dp.running = this, this.tries = new xp(Date.now(), Sp()), this.schedule()
      }
      static stopRunning() {
        var pp;
        null === (pp = Dp.running) || void 0 === pp || pp.stop()
      }
      stop() {
        clearTimeout(this.timer), this.timer = null, Dp.running === this && (Dp.running = null)
      }
      schedule() {
        const pp = Date.now(),
          ip = this.tries.spacedBy(Sp(), pp).nextDueMs() - pp;
        this.timer = setTimeout(this.check, Math.min(ip, 100))
      }
    }
    Dp.running = null
  },
  39177: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => yp,
      d: () => Dp,
      e: () => Wp,
      f: () => Pp,
      i: () => Up,
      k: () => Ap
    });
    var Op = cp(39182),
      op = cp(37465),
      Ip = cp(3774),
      Sp = cp(1963),
      xp = cp(34),
      Lp = cp(2849);
    const Yp = new Op.e;

    function Dp() {
      return Yp
    }

    function Ap() {
      Yp.clear()
    }

    function Pp() {
      for (const pp of Yp.ids()) {
        const ip = Yp.getName(pp);
        void 0 !== ip && Sp.d.delete(ip)
      }
      Ap(), xp.m.GA("playerRosterChanged", Yp.ids())
    }

    function Wp(pp, ip) {
      var cp, Op;
      if (Yp.has(pp)) return Yp.getSetting(pp, ip);
      const op = (0, Lp.g)();
      return null === (cp = op.QJ[op.NJ]) || void 0 === cp || null === (Op = cp[pp]) || void 0 === Op ? void 0 : Op[ip]
    }

    function yp(pp) {
      const {
        added: ip,
        removed: cp,
        settingChanges: Op
      } = Yp.apply(pp);
      for (const {
          playerId: op,
          name: Ip
        }
        of cp) void 0 === Ip || wp(op) || Sp.d.delete(Ip);
      for (const {
          playerId: Ip,
          settings: Sp
        }
        of Op)
        if (wp(Ip)) Up(Ip, Sp);
        else
          for (const pp in Sp)(0, op.m)(Ip, pp, Sp[pp]);
      (ip.length > 0 || cp.length > 0) && xp.m.GA("playerRosterChanged", Yp.ids())
    }

    function Up(pp) {
      let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Yp.getSettings(pp);
      if (ip) {
        (0, op.g)(pp);
        for (const cp in ip)(0, op.d)(pp, cp, ip[cp])
      }
    }

    function wp(pp) {
      return pp === (0, Lp.g)().Fpp || (0, Lp.d)().client.hasEntity(pp)
    }(0, Ip.onGameReset)(Ap)
  },
  38310: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => qp,
      g: () => jp,
      k: () => mp,
      m: () => Rp,
      p: () => Mp
    });
    var Op = cp(37313),
      op = cp(38313),
      Ip = cp(343),
      Sp = cp.n(Ip),
      xp = cp(3511);
    const Lp = new Op.Zy,
      Yp = new Op.Zy,
      Dp = new Op.Zy,
      Ap = new Op.Zy,
      Pp = new Op.Zy,
      Wp = [0, 0, 0],
      yp = {
        x: 0,
        y: 0
      },
      Up = new Op.Zy(1, 0, 0),
      wp = new Op.Zy(0, 1, 0),
      vp = Op.Matrix.Identity(),
      tp = new Op.Matrix,
      Hp = new Op.Matrix,
      dp = new Op.Zy,
      ep = new op.c(0, 0, 0, 0);

    function jp(pp, ip) {
      var cp, op;
      const Ip = kp(pp, ip);
      if (Ip) {
        const pp = Ip.x,
          ip = Ip.y,
          cp = pp - 50,
          Op = ip - 50;
        return Math.abs(cp) <= xp.d && Math.abs(Op) <= (0, xp.k)() ? {
          x: pp,
          y: ip
        } : Ep(cp, Op)
      }
      Dp.i5(ip[0], ip[1], ip[2]),
        function(pp) {
          const ip = pp.WU.xOp(),
            cp = ip ? Op.Matrix.FromArrayToRef(ip.worldMatrix, 0, Hp) : pp.WU.Gl().activeCamera.getWorldMatrix();
          Op.Zy.TransformNormalToRef(Up, cp, Ap), Ap.normalize(), Op.Zy.TransformNormalToRef(wp, cp, Pp), Pp.normalize()
        }(pp);
      const Sp = Op.Zy.Dot(Dp, Ap);
      let Lp = -Op.Zy.Dot(Dp, Pp);
      Math.abs(Sp) < .001 && Math.abs(Lp) < .001 && (Lp = -1);
      const Yp = null !== (cp = null === (op = pp.WU.xOp()) || void 0 === op ? void 0 : op.projectionMatrix) && void 0 !== cp ? cp : pp.WU.Gl().activeCamera.getProjectionMatrix().m;
      return Ep(Sp * Yp[0], Lp * Yp[5])
    }

    function kp(pp, ip) {
      const cp = pp.WU.Gl(),
        op = cp.gy(),
        Ip = op.getRenderWidth(),
        Sp = op.getRenderHeight();
      ep.width = Ip, ep.height = Sp;
      const xp = pp.WU.xOp(),
        Dp = xp ? dp.i5(xp.eye[0], xp.eye[1], xp.eye[2]) : pp.WU.camera.globalPosition;
      Lp.i5(Dp.x + 10 * ip[0], Dp.y + 10 * ip[1], Dp.z + 10 * ip[2]);
      const Ap = xp ? Op.Matrix.FromArrayToRef(xp.viewProjectionMatrix, 0, tp) : cp.getTransformMatrix();
      return Op.Zy.ProjectToRef(Lp, vp, Ap, ep, Yp), Yp.z < 0 || Yp.z > 1 ? null : (yp.x = Yp.x / Ip * 100, yp.y = Yp.y / Sp * 100, yp)
    }

    function mp(pp, ip) {
      return jp(pp, Cp(pp, ip))
    }

    function Rp(pp, ip) {
      const cp = kp(pp, Cp(pp, ip));
      return cp && {
        x: cp.x,
        y: cp.y
      }
    }

    function qp(pp) {
      var ip, cp;
      return 1 / (null !== (ip = null === (cp = pp.WU.xOp()) || void 0 === cp ? void 0 : cp.projectionMatrix[0]) && void 0 !== ip ? ip : pp.WU.Gl().activeCamera.getProjectionMatrix().m[0])
    }

    function Mp(pp, ip, cp) {
      const Op = pp.WU.xOp(),
        op = Op ? Op.worldMatrix : pp.WU.Gl().activeCamera.getWorldMatrix().m,
        Ip = pp.BP;
      for (let Sp = 0; Sp < 3; Sp++) ip[Sp] = op[12 + Sp] + Ip[Sp], cp[Sp] = op[8 + Sp];
      Sp().normalize(cp, cp)
    }

    function Cp(pp, ip) {
      const cp = pp.BP,
        Op = pp.WU.xOp(),
        op = Op ? dp.i5(Op.eye[0], Op.eye[1], Op.eye[2]) : pp.WU.camera.globalPosition;
      return Wp[0] = ip[0] - cp[0] - op.x, Wp[1] = ip[1] - cp[1] - op.y, Wp[2] = ip[2] - cp[2] - op.z, Sp().normalize(Wp, Wp), Wp
    }

    function Ep(pp, ip) {
      return (0, xp.h)(pp, ip, xp.d, (0, xp.k)())
    }
  },
  39160: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Pp
    });
    var Op = cp(195),
      op = cp(343),
      Ip = cp.n(op),
      Sp = cp(36942),
      xp = cp(36948),
      Lp = cp(2849);
    const Yp = Op.g.Vw * Op.g.playerEyeToHeightRatio,
      Dp = 250,
      Ap = 1.1,
      Pp = new class {
        constructor() {
          this.entities = new Map, this.playing = new Map, this.msSinceLastScan = 0
        }
        add(pp, ip) {
          this.entities.set(pp, ip)
        }
        update(pp, ip) {
          const cp = this.entities.get(pp);
          this.entities.set(pp, ip);
          const Op = this.playing.get(pp);
          Op && (cp && cp.soundName === ip.soundName ? (Op.sound.setRelativeVolume(ip.volume), Op.sound.rate(ip.rate), Op.sound.setPannerAttr({
            refDistance: ip.refDistance
          })) : this.stopEntity(pp))
        }
        remove(pp) {
          this.stopEntity(pp), this.entities.delete(pp)
        }
        LP(pp) {
          this.msSinceLastScan += pp, this.msSinceLastScan < Dp || (this.msSinceLastScan = 0, this.scan())
        }
        stopEntity(pp) {
          const ip = this.playing.get(pp);
          ip && (ip.sound.stop(), this.playing.delete(pp))
        }
        startEntity(pp, ip, cp) {
          const Op = (0, xp.d)(ip.soundName);
          if (!Op) return console.error(`AudioEntityManager: no sound found for "${ip.soundName}", dropping audio entity ${pp}`), void this.remove(pp);
          const op = Sp.b.play(Op, ip.volume, cp, ip.maxHearDist, ip.refDistance, !0);
          op.rate(ip.rate), this.playing.set(pp, {
            sound: op,
            lastPos: Ip().clone(cp)
          })
        }
        scan() {
          const pp = (0, Lp.g)();
          if (!pp) return;
          const ip = pp.Yk.sH(pp.NJ);
          if (ip)
            for (const [cp, Op] of this.entities) {
              if (!pp.Yk.hpp(cp, "position")) continue;
              const op = pp.Yk.sH(cp),
                Sp = Ip().sqrDist(ip, op),
                xp = this.playing.get(cp);
              if (xp) {
                const pp = Op.maxHearDist * Ap;
                Sp > pp * pp ? this.stopEntity(cp) : Ip().equals(op, xp.lastPos) || (xp.sound.setPosition([op[0], op[1] + Yp, op[2]]), Ip().copy(xp.lastPos, op))
              } else Sp <= Op.maxHearDist * Op.maxHearDist && this.startEntity(cp, Op, op)
            }
        }
      }
  },
  39210: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Ip,
      f: () => op
    });
    var Op = cp(34);

    function op(pp) {
      return "refetchCode" === pp || "devDownloadJson" === pp || pp.startsWith("Plugin")
    }

    function Ip(pp, ip) {
      "refetchCode" !== pp ? "Plugin|MobAiPlugin|ShowPetUi" !== pp ? Promise.all([cp.e(109), cp.e(110), cp.e(105), cp.e(107), cp.e(218)]).then((() => cp(41985))).then((cp => {
        let {
          runClientGameMessage: Op
        } = cp;
        Op(pp, ip)
      })).catch((ip => {
        console.error(`Game message ${pp} failed`, ip)
      })) : Op.m.GA("showPetUi", ip) : Op.m.GA("refetchCode")
    }
  },
  39193: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Dp
    });
    var Op = cp(1234),
      op = cp(1356),
      Ip = cp(25),
      Sp = cp(1334),
      xp = cp(1349),
      Lp = cp(1538),
      Yp = cp(36677);

    function Dp(pp) {
      let {
        xI: ip,
        LI: cp
      } = pp;
      const Dp = null !== ip && void 0 !== ip ? ip : (0, xp.d)().gameNameWithVariation;
      (0, Op.H)(Dp) && ((0, Yp.j)(), (0, Sp.Z)((() => {
        console.log("Received matchmaking order from game server to game", ip), (0, Ip.k)("inGameReplay"), (0, Lp.navigatePreserveSearch)((0, op.c)(Dp, null !== cp && void 0 !== cp ? cp : void 0))
      }), "video_start"))
    }
  },
  39190: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Lp,
      d: () => Sp,
      h: () => xp,
      j: () => Yp
    });
    var Op = cp(34),
      op = cp(1372);
    const Ip = new Map;

    function Sp(pp, ip) {
      Op.m.GA("newUiRequest", {
        id: pp,
        clientParameters: ip
      }, !0)
    }

    function xp(pp) {
      Op.m.GA("removeUiRequest", pp, !0);
      const ip = Ip.get(pp);
      ip && (ip.tearDownNotification(), Ip.delete(pp))
    }

    function Lp() {
      Op.m.GA("clearUiRequests");
      for (const pp of Ip.values()) pp.tearDownNotification();
      Ip.clear()
    }

    function Yp(pp, ip, cp, Op) {
      const Sp = op.NotificationProvider.showPromptPopup({
        title: ip,
        confirmText: "general:yes",
        cancelText: "general:no",
        destructive: cp,
        unlockPointerKey: "uiRequestPopup"
      });
      Ip.set(pp, Sp), Sp.getResult().then((ip => {
        Ip.delete(pp), "notificationTornDown" !== ip && Op(ip)
      }))
    }
  },
  39182: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Op
    });
    class Op {
      constructor() {
        this.members = new Map
      }
      apply(pp) {
        const ip = {
          added: [],
          removed: [],
          settingChanges: []
        };
        for (const Op of pp.hp) {
          let pp = this.members.get(Op.ap);
          if (pp || (pp = {
              name: null,
              settings: {}
            }, this.members.set(Op.ap, pp), ip.added.push(Op.ap)), null !== Op.np && (pp.name = Op.np), null !== Op.Fp || Op.Gp.length > 0) {
            const cp = null === Op.Fp ? {} : JSON.parse(Op.Fp);
            Object.assign(pp.settings, cp);
            for (const ip of Op.Gp) delete pp.settings[ip], cp[ip] = void 0;
            ip.settingChanges.push({
              playerId: Op.ap,
              settings: cp
            })
          }
        }
        for (const Op of pp.rp) {
          const pp = this.members.get(Op);
          var cp;
          if (pp) this.members.delete(Op), ip.removed.push({
            playerId: Op,
            name: null !== (cp = pp.name) && void 0 !== cp ? cp : void 0
          })
        }
        return ip
      }
      has(pp) {
        return this.members.has(pp)
      }
      ids() {
        return [...this.members.keys()]
      }
      getName(pp) {
        var ip, cp;
        return null !== (ip = null === (cp = this.members.get(pp)) || void 0 === cp ? void 0 : cp.name) && void 0 !== ip ? ip : void 0
      }
      getSettings(pp) {
        var ip;
        return null === (ip = this.members.get(pp)) || void 0 === ip ? void 0 : ip.settings
      }
      getSetting(pp, ip) {
        var cp;
        return null === (cp = this.members.get(pp)) || void 0 === cp ? void 0 : cp.settings[ip]
      }
      clear() {
        this.members.clear()
      }
    }
  },
  39215: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Op,
      e: () => op
    });
    const Op = ["description", "label"];

    function op(pp) {
      const ip = pp.type;
      return {
        type: ip,
        params: pp[ip]
      }
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);